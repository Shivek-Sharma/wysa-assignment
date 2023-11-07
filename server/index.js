import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import { checkForAuthCookie } from './middlewares/authentication.js';
import userRoute from './routes/user.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthCookie("token"));

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"));

app.get('/', (req, res) => {
    res.send("Hello from Wysa");
});

app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`App is listening at port: ${PORT}`);
});