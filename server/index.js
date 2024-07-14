import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from 'cors';
import cookieParser from "cookie-parser";
dotenv.config()

import { userRouter } from "./routes/user.js";

//middleware
const app = express();
app.use(express.json()) // user to convert frontend into json format
app.use(cors({

    origin:["http://localhost:5173"],
    credentials:true
}
))
app.use(cookieParser())
app.use('/auth', userRouter)

mongoose.connect('mongodb://127.0.0.1:27017/authentication')

app.listen(process.env.PORT,() => {
    console.log(`server is running on ${process.env.PORT}`);
    console.log(` http://localhost:${process.env.PORT}`);
})