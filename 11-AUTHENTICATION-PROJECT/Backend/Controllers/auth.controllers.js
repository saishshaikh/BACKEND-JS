import bcrypt from "bcrypt";
import User from "../Models/UserModelSchema.js";

export const signUp = async(req,res)=>{
    try {
        const { FirstName,LastName,UserName,Email,Password } = req.body;

        if (!FirstName || !LastName || !UserName || !Email || !Password){
            return res.status(400).json({Message : "Send All Details"});
        }

        let existuser = await User.findOne({ Email });

        if (existuser){
            return res.status(400).json({Message : "User already exists"});
        }

        // Hash Password 

        const HashPassword = await bcrypt.hash(Password, 10);

        const UserData = await User.create({
            FirstName,
            LastName,
            Email,
            Password: HashPassword,
            UserName
        });

        return res.status(201).json({
            Message : "User Registered Successfully",
            User : UserData
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({error});
    }
}
