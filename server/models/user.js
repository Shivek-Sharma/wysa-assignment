import { Schema, model } from 'mongoose';
import { createHmac, randomBytes } from 'crypto';

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
}
);

userSchema.pre("save", function (next) {
    const user = this;

    if (!user.isModified("password")) return;

    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac('sha256', salt)
        .update(user.password)
        .digest('hex');

    this.salt = salt;
    this.password = hashedPassword;

    next();
});

userSchema.static("matchPassword", async function (username, password) {
    const user = await this.findOne({ username });
    if (!user) throw new Error("User not found!");

    const salt = user.salt;
    const hashedPassword = user.password;

    const userProvidedHash = createHmac('sha256', salt)
        .update(password)
        .digest('hex');

    if (hashedPassword !== userProvidedHash) throw new Error("Incorrect password!");

    return user;
});

const User = model("User", userSchema);

export default User;