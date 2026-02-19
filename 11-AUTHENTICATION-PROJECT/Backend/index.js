import express from "express"
const app = express ()

import dotenv from "dotenv"
import connectDB from "./config/db.js"
import AuthRouter from "./Routes/User.Routes.js"

dotenv.config()

// JSON parser FIRST
app.use(express.json())

//  Then routes
app.use("/api", AuthRouter)

const port = process.env.PORT || 5000


app.listen(port,()=>{
  connectDB()
   console.log({Message:" SERVER STARTED"})
})
