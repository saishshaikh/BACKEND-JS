import express from "express";
import { signUp, Login, LogOut } from "../Controllers/auth.controllers.js";

const AuthRouter = express.Router();

AuthRouter.post("/signup", signUp);
AuthRouter.post("/Login", Login);
AuthRouter.post("/LogOut",LogOut)

export default AuthRouter;
