import Router from 'express';
import User from '../models/user.js';

const router = Router();

router.get("/signup", (req, res) => {
    res.send("Sign Up Page");
});

router.post("/signup", async (req, res) => {
    try {
        const { username, password, sleepGoal, sleepProblemDuration } = req.body;

        if (await User.findOne({ username }))
            return res.status(400).json({ success: false, message: "username already exists" });

        const userInfo = await User.create({
            username,
            password,
            sleepGoal,
            sleepProblemDuration
        });

        return res.status(200).json({ success: true, data: userInfo });
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message });
    }
});

export default router;