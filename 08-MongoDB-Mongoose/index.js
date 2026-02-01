import express, { json } from "express"
import mongoose from "mongoose";
import { user } from "./Models/User model.js";

const app = express();
const port = 8000;

const mongodbUrl = "mongodb+srv://practicecodding23_db_user:saish1234@cluster0.86uyuff.mongodb.net/Backend-Learning"

app.use(express.json())  // middleware

const connectDB = async () => {
  try {
    await mongoose.connect(mongodbUrl)
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









// $eq  = equal (barabar)
// $ne  = not equal
// $gt  = greater than
// $gte = greater than or equal
// $lt  = less than
// $lte = less than or equal
// $in  = array me se koi bhi match kare
// $nin = array me na ho

// $and = sab condition true
// $or  = koi ek true
// $not = condition ka ulta
// $nor = sab false

// $exists = field hai ya nahi
// $type   = field ka data type check

// $expr = query me expressions use karna
// $jsonSchema = schema validation
// $mod = remainder check
// $regex = pattern search
// $text = text search
// $where = JS condition

// $all = array me sab values ho
// $elemMatch = array ka specific match
// $size = array ki length

// $bitsAllClear = bits clear check
// $bitsAllSet = bits set check
// $bitsAnyClear = koi bit clear
// $bitsAnySet = koi bit set

// $set = value update kare
// $unset = field delete kare
// $inc = number increase/decrease
// $mul = number multiply
// $rename = field ka naam change
// $min = minimum value set
// $max = maximum value set
// $currentDate = current date set kare

// $push = array me add kare
// $pull = array se remove kare
// $addToSet = duplicate ke bina add
// $pop = first/last remove
// $each = multiple values add
// $position = array position set
// $slice = array limit kare
// $sort = array sort kare

// $match = filter data
// $group = group banana
// $project = fields select
// $limit = records limit
// $skip = records skip
// $lookup = join jaisa
// $unwind = array todna
// $addFields = new field add
// $replaceRoot = root change
// $count = total count
// $facet = multiple pipeline
// $bucket = range group
// $bucketAuto = auto group
// $sample = random data

// $sum = total
// $avg = average
// $min = smallest
// $max = biggest
// $first = first value
// $last = last value
// $concat = strings jodna
// $substr = string ka part
// $toInt = number me convert
// $toString = string me convert
// $cond = if else
// $ifNull = null ho to value
// $mergeObjects = objects merge


// MongoDB Update Operators (List + Uses)

// • $set – field ki value change/add karna
// • $unset – field delete karna
// • $inc – number increase/decrease karna
// • $mul – number multiply karna
// • $rename – field ka naam change karna

// • $push – array me value add karna
// • $addToSet – array me unique value add karna (duplicate nahi)
// • $pull – array se value remove karna
// • $pop – array se first ya last value remove karna

// • $currentDate – current date/time set karna
// • $setOnInsert – sirf new document create hone par value set karna (upsert me)