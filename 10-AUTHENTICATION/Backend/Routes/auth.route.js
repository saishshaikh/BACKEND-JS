import express from "express";
import { SingUp } from "../Controllers/auth.controllers.js";

const authRouter = express.Router();

authRouter.post("/signup", SingUp);

export default authRouter;
