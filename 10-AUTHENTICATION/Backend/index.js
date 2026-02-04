import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./Config/DB.js";
import authRouter from "./Routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json()); 
app.use(cookieParser())

app.use("/api", authRouter);

app.listen(port, () => {
  connectDB();
  console.log("SERVER STARTED AT....." + port);
});
