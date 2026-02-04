
import mongoose from "mongoose";


const UserSchema =new mongoose.Schema({
    FirstName:{
        type :String,
        required : true,

    },
       LastName:{
        type :String,
        required : true, 
    },
    UserName : {
        type :String,
        required : true,
        unique : true
    },
     Email: {
        type :String,
        required : true,
        unique : true
    },
    Password : {
        type :String,
        required : true,
    },
    USerImg : {
        type :String,
        required : false,
},
},{timestamps :true})


 export const user = mongoose.model("user",UserSchema)