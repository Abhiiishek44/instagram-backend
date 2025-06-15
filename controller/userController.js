const { default: mongoose } = require("mongoose");
const User = require("../models/users");


const registerUser= async(req, res) => {
  const { userName, email, password, bio } = req.body;
  const data= await User.create({
    userName,
    email,
    password,
    bio,
  })
    .then((data) => res.status(201).json({ msg: "User created.." }, data))
    .catch((err) => res.status(500).json({ msg: "Error", error: err.message }));
}

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
};

const specificUser=async (req,res)=>{
    try{
  const id=req.params.id
  console.log(id)
    const user= await User.findById(id)
    if(!user){
        return res.status(404).json({message: "user not found"})
    }
    res.status(200).json(user)
    }catch (error) {
    res.status(500).json({ message: "Server error" });
}
}



module.exports = {
    registerUser,
    getAllUsers,
    specificUser,
};
