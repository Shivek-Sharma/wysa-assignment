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

//endpoint for sign up
router.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;

        // unique username check
        if (await User.findOne({ username }))
            throw new Error("this username already exists");

        await User.create({
            username,
            password
        });

        return res.status(200).json({ success: true, message: "user registered successfully" });
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
});

//endpoint for storing sleep data of a user
router.post("/sleepdata", async (req, res) => {
    try {
        const { username, password, sleepGoal, sleepProblemDuration } = req.body;

        const user = await User.findOne({ username });

        // preventing storage of sleep data if the corresponding user doesn't exist 
        if (!user)
            throw new Error("User not found");

        // preventing duplicacy of sleep data for a user
        if (await SleepData.findOne({ userDetails: user._id }))
            throw new Error("Sleep data for this user already exists");

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