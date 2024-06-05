import express from "express";
import { test } from "../controllers/userContoller.js";

const userRouter = express.Router();

userRouter.get('/test', test)

export default userRouter;