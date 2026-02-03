import { user } from "../Models/User.model.js"
import bcrypt from "bcryptjs"

export const SingUp = async (req, res) => {
  try {
    const { FirstName, LastName, Email, Password, UserName } = req.body

    // check all fields
   if (!FirstName || !LastName || !Email || !Password || !UserName) {
    return res.status(400).json({ Message: "Send All Details" })
}


    // check existing user
    let existuser = await user.findOne({ Email })

    if (existuser) {
      return res.status(400).json({ Message: "User Already Exist" })
    }

    // hash password
    const hashpassword = await bcrypt.hash(Password, 10)

    // create user
    const User = await user.create({
      FirstName,
      LastName,
      Email,
      Password: hashpassword,
      UserName
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
    res.status(500).json({ Message: "Internal Server Error" })
  }
}
