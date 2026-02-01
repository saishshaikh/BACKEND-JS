import { user } from "./Models/User model.js";


 export const create = async (req, res) => {
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
}



export const read = async (req, res) => {
  try {
    const users = await user.find()
    res.status(200).json(users)
  } catch {
    return res.status(400).json({ message: "User not found" })
  }
}

export const specificUser= async (req, res) => {
  try {
    const users = await user.findOne({ username: req.params.username })
    res.status(200).json(users)
  } catch {
    return res.status(400).json({ message: "User not found" })
  }
}

export const  equaloperator = async (req, res) => {
  try {
    const users = await user.find({ name: { $eq: "ali" } })
    res.status(200).json(users)
  } catch {
    return res.status(400).json({ message: "User not found" })
  }

}


export const updatedatabyid = async (req, res) => {
  try {
    let { name ,age} = req.body;
    let id = req.params.id;

    let updatedUser = await user.findByIdAndUpdate(id, {name,age},{new:true} );

    res.status(200).json(updatedUser);

  } catch (error) {
    return res.status(400).json({ message: "User not found" });
  }
}