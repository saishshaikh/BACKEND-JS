import express from "express";
import { signUp } from "../Controllers/auth.controllers.js";

const AuthRouter = express.Router();

AuthRouter.post("/signup", signUp);

export default AuthRouter;
