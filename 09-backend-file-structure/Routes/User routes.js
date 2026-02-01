import { Router } from "express"
import express from "express"
import { create, equaloperator, read, specificUser, updatedatabyid } from "../Controlers/user.controler"



let userRouter = express(Router())


// User create 


userRouter.post("/Create",create)

// get all users

userRouter.get("/Read", read)

// specific user by username

userRouter.get("/Read/:username", specificUser)

// Using MongoDB equal Operator 

userRouter.get("/ReadEqual", equaloperator )

// put method for update data by id

userRouter.put("/update/:id", updatedatabyid)



// delete method for delete data by id 

userRouter.delete("/delete/:id",async(req,res)=>{
  try{
    let id= req.params.id
    let userdelete= await user.findByIdAndDelete(id)
    return res.status(200).json(userdelete)
  } catch(e){
        return res.status(400).json({ message: "User not found" });

  }
 
})

// delete method by one

userRouter.delete("/delete",async(req,res)=>{
  try{
    let {username}= req.body
    let userdelete= await user.deleteOne({username})
    return res.status(200).json(userdelete)
  } catch(e){
        return res.status(400).json({ message: "User not found" });

  }
 
})


export default userRouter