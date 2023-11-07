import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

function createTokenForUser(user) {
    const payload = {
        _id: user._id,
        username: user.username,
    };

    const token = jwt.sign(payload, secret);
    return token;
}

function validateToken(token) {
    const payload = jwt.verify(token, secret);
    return payload;
}

export { createTokenForUser, validateToken };