const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true, 
  },
  content: {
    type: String,
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      comment: { type: String },
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
