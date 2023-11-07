import Router from 'express';
import User from '../models/user.js';

const router = Router();

router.get("/signup", (req, res) => {
    res.send("SignUp page");
});

router.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    try {
        if (await User.findOne({ username }))
            return res.status(400).json({ success: false, message: "username already exists" });

        await User.create({
            username,
            password
        });

        return res.status(200).json({ success: true, message: `Welcome ${username} to Wysa` });
    } catch (error) {
        return res.status(400).json({ success: false, message: "Please enter username and password" });
    }
});

/*
router.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await User.matchPasswordAndGenerateToken(username, password);
        // console.log("Token: ", token)

        // return res.cookie("token", token).status(200).json({ success: true, message: `Welcome ${username} to Wysa` });
        return res.status(200).json({ success: true, message: `Welcome ${username} to Wysa` });
    } catch (error) {
        return res.status(400).json({ success: false, message: "Incorrect username or password" });
    }
});
*/

export default router;