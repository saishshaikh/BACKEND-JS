import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

   FirstName: {
      type: String,
      required: true
   },

   LastName: {
      type: String,
      required: true
   },

   UserName: {
      type: String,
      required: true,
      unique: true
   },

   Email: {
      type: String,
      required: true,
      unique: true
   },

   Password: {
      type: String,
      required: true
   }

}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

export default User;
