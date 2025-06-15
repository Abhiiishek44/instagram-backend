const mongoose = require("mongoose");
const bcrypt =require("bcrypt");
const userSchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
});

// Hash password before saving
const User = mongoose.model("users", userSchema);

module.exports= User;