import express, { json } from "express"
import mongoose from "mongoose";
import { user } from "./Models/User model.js";
import dotenv from "dotenv"
dotenv.config()

const app = express();
const port = 8000;


app.use(express.json())  // middleware

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("DB CONNECTED....")
  }
  catch (error) {
    console.log("DB ERROR.........." + error)
  }
}

// User create 

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

// get all users

app.get("/Read", async (req, res) => {
  try {
    const users = await user.find()
    res.status(200).json(users)
  } catch {
    return res.status(400).json({ message: "User not found" })
  }
})

// specific user by username

app.get("/Read/:username", async (req, res) => {
  try {
    const users = await user.findOne({ username: req.params.username })
    res.status(200).json(users)
  } catch {
    return res.status(400).json({ message: "User not found" })
  }
})

// Using MongoDB equal Operator 

app.get("/ReadEqual", async (req, res) => {
  try {
    const users = await user.find({ name: { $eq: "ali" } })
    res.status(200).json(users)
  } catch {
    return res.status(400).json({ message: "User not found" })
  }
})

// put method for update data by id

app.put("/update/:id", async (req, res) => {
  try {
    let { name ,age} = req.body;
    let id = req.params.id;

    let updatedUser = await user.findByIdAndUpdate(id, {name,age},{new:true} );

    res.status(200).json(updatedUser);

  } catch (error) {
    return res.status(400).json({ message: "User not found" });
  }
}); 

// delete method for delete data by id 

app.delete("/delete/:id",async(req,res)=>{
  try{
    let id= req.params.id
    let userdelete= await user.findByIdAndDelete(id)
    return res.status(200).json(userdelete)
  } catch(e){
        return res.status(400).json({ message: "User not found" });

  }
 
})

// delete method by one

app.delete("/delete",async(req,res)=>{
  try{
    let {username}= req.body
    let userdelete= await user.deleteOne({username})
    return res.status(200).json(userdelete)
  } catch(e){
        return res.status(400).json({ message: "User not found" });

  }
 
})



app.listen(port, () => {  
  connectDB()
  console.log("SERVER STARTED..." + port)
})







