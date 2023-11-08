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
    },
    sleepGoal: {
        type: String,
        required: true
    },
    sleepProblemDuration: {
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

const User = model("User", userSchema);

export default User;