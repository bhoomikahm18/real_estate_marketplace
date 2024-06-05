import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(() => console.log("Connected to DB"))
    .catch((err) => console.log(err))

const app = express();
app.use("/api/user", userRouter)

app.listen(3001, () => {
    console.log('Server is running on port 3001');
})
