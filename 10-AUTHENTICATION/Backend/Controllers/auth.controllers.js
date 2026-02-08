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

    // password hash
    const hashpassword = await bcrypt.hash(Password, 10)

    const User = await user.create({
      FirstName,
      LastName,
      Email,
      Password: hashpassword,
      UserName
    })

    // generate token
    let token
    try {
      token = GenerateToken(User._id)
    } catch (error) {
      console.log(error)
    }

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
    return res.status(500).json({ error })
  }
}


// ---------------- LOGIN ----------------

export const Login = async (req, res) => {
  try {
    const { Email, Password } = req.body        // input

    if (!Email || !Password) {    
      return res.status(400).json({ Message: "Send All Details" })
    }

    let existuser = await user.findOne({ Email })

    if (!existuser) {
      return res.status(400).json({ Message: "User Does not Exist" })
    }

    // compare password
    let match = await bcrypt.compare(Password, existuser.Password)

    if (!match) {
      return res.status(400).json({ Message: "Password Incorrect" })
    }

    // generate token
    let token
    try {
      token = GenerateToken(existuser._id)
    } catch (error) {
      console.log(error)
    }

    // set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    })

    return res.status(200).json({
      User: {
        FirstName: existuser.FirstName,
        LastName: existuser.LastName,
        Email: existuser.Email,
        UserName: existuser.UserName
      }
    })

  } catch (error) {
    console.log(error)
    return res.status(500).json({ error })
  }
}

// ---------------- LOGOUT----------------


export const LogOut = async (req, res) => {
  try {
    res.clearCookie("token")
    return res.status(200).json({ Message: "User logout Successfully" })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
