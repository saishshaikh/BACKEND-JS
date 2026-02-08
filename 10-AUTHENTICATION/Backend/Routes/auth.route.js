import express from "express";
import { SingUp, Login, LogOut } from "../Controllers/auth.controllers.js";

const authRouter = express.Router();

authRouter.post("/signup", SingUp);
authRouter.post("/Login", Login);
authRouter.post("/LogOut", LogOut);

export default authRouter;
