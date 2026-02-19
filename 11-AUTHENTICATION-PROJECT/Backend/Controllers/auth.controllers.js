import bcrypt from "bcrypt";
import GenerateToken from "../Config/Token.js";
import User from "../Models/UserModelSchema.js";


// SIGNUP
export const signUp = async (req, res) => {
  try {

    const { FirstName, LastName, UserName, Email, Password } = req.body;

    if (!FirstName || !LastName || !UserName || !Email || !Password) {
      return res.status(400).json({ Message: "Send All Details" });
    }

    let existuser = await User.findOne({ Email });

    if (existuser) {
      return res.status(400).json({ Message: "User already exists" });
    }

    const HashPassword = await bcrypt.hash(Password, 10);

    const UserData = await User.create({
      FirstName,
      LastName,
      Email,
      Password: HashPassword,
      UserName
    });

    let token = GenerateToken(UserData._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(201).json({
      Message: "Signup Success"
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};



// LOGIN
export const Login = async (req, res) => {
  try {

    const { Email, Password } = req.body;

    if (!Email || !Password) {
      return res.status(400).json({ Message: "Send All Details" });
    }

    let existuser = await User.findOne({ Email });

    if (!existuser) {
      return res.status(400).json({ Message: "User Does not Exist" });
    }

    let match = await bcrypt.compare(Password, existuser.Password);

    if (!match) {
      return res.status(400).json({ Message: "Password Incorrect" });
    }

    let token = GenerateToken(existuser._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(200).json({
      Message: "Login Success"
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};



//logot

export const LogOut = async (req, res) => {
  try {
    res.clearCookie("token")
    return res.status(200).json({ Message: "User logout Successfully" })
  } catch (error) {
    return res.status(500).json({ error })
  }
}