const mongoose = require("mongoose");
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
  },
  password: {
    type: Number,
    required: true,
  },
  bio: {
    type: String,
  },
});

const User = mongoose.model("users", userSchema);

module.exports= User;