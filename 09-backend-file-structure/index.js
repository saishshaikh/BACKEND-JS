import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import userRouter from "./Routes/User routes.js";
dotenv.config()
const app = express();
const port = process.env.PORT || 5000
app.use(express.json())  // middleware
app.use("/",userRouter)
app.listen(port, () => {  
 connectDB()
  console.log("SERVER STARTED..." + port)
})







