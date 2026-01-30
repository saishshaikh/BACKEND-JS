import express from "express"
import mongoose from "mongoose";
import { user } from "./Models/User model.js";

const app = express();
const port = 8000;

const mongodbUrl = "mongodb+srv://practicecodding23_db_user:saish1234@cluster0.86uyuff.mongodb.net/Backend-Learning"

app.use(express.json())

const connectDB = async () => {
  try {
    await mongoose.connect(mongodbUrl)
    console.log("DB CONNECTED....")
  }
  catch (error) {
    console.log("DB ERROR.........." + error)
  }
}

app.post("/Create", async (req, res) => {

  try {

    let { name, age, email, username } = req.body

    const NewUser = await user.create({
      name,
      age,
      email,
      username
    })

    res.status(201).json({ message: "USER CREATED" })

  } catch (error) {
    res.status(400).json({ message: error.message })
  }

})

app.get("/Read",(req,res)=>{
   try {
const users = user.find()
res.status(200).json(users)
   } catch {

   }
})

app.listen(port, () => {  
  connectDB()
  console.log("SERVER STARTED..." + port)
})
