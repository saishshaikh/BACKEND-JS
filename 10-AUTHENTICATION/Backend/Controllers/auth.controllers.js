import GenerateToken from "../Config/Token.js"
import { user } from "../Models/User.model.js"
import bcrypt from "bcryptjs"

export const SingUp = async (req, res) => {
  try {
    const { FirstName, LastName, Email, Password, UserName } = req.body

    if (!FirstName || !LastName || !Email || !Password || !UserName) {
      return res.status(400).json({ Message: "Send All Details" })
    }

    let existuser = await user.findOne({ Email })

    if (existuser) {
      return res.status(400).json({ Message: "User Already Exist" })
    }

    const hashpassword = await bcrypt.hash(Password, 10)

    const User = await user.create({
      FirstName,
      LastName,
      Email,
      Password: hashpassword,
      UserName
    })

    // generate token 
    const token = GenerateToken(User._id)

    // set cookie 
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    })

    return res.status(201).json({
      User: {
        FirstName,
        LastName,
        Email,
        UserName
      }
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ Message: "Internal Server Error" })
  }
}
