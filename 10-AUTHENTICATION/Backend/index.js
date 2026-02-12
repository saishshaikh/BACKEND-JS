import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./Config/DB.js"
import authRouter from "./Routes/auth.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config()

const app = express()

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api", authRouter)

const port = process.env.PORT || 8000

app.listen(port, () => {
  connectDB()
  console.log("SERVER STARTED AT....." + port)
})
