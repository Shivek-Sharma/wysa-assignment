import Router from 'express';

import User from '../models/user.js';
import SleepData from '../models/sleepData.js';

const router = Router();

router.get("/signup", (req, res) => {
    res.send("Sign Up Page");
});

router.get("/signin", (req, res) => {
    res.send("Sign In Page");
});

//endpoint for checking uniqueness of username
router.post("/check", async (req, res) => {
    try {
        const { username } = req.body;

        if (await User.findOne({ username }))
            throw new Error("this username already exists");

        return res.status(200).json({ success: true, message: "this username doesn't exists" });
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
});

//endpoint for signup of a new user with his/her sleep data
router.post("/signup", async (req, res) => {
    try {
        const { username, password, sleepGoal, sleepProblemDuration } = req.body;

        const user = await User.create({
            username,
            password
        });

        const userInfo = await SleepData.create({
            sleepGoal,
            sleepProblemDuration,
            userDetails: user._id
        });

        return res.status(200).json({ success: true, data: userInfo });
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
});

//endpoint for sign in
router.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.matchPassword(username, password);

        const userInfo = await SleepData.findOne({ userDetails: user._id }).populate("userDetails");

        return res.status(200).json({ success: true, data: userInfo });
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
});

export default router;