const Post = require("../models/post");


const createPost = (req, res) => {
  // actual code
  const { userId, content, likeCount, comments } = req.body;
  Post.create({
    userId,
    content,
    likeCount,
    comments,
  })
    .then((data) => res.status(201).json({ mag: "Post Created.." }, data))
    .catch((err) =>
      res.status(500).json({ msg: "Error ", error: err.message })
    );
};


  const allPost=async(req,res)=>{
    try{
  const posts= await Post.find({})
       res.status(200).json({posts})
    }catch(err){  
     res.status(500).json({message: "failed to fetch all posts",err})
    }

  }

  const postById=async(req,res)=>{
    try{
       const userId = req.params.userId;
     console.log(userId)
        const post=await Post.find({userId})
        res.status(200).json(post)
    }catch(err){
        return res.status(500).json({message: "failed to fetch post by id",err})
    }
  }

const incrementLike=async(req,res)=>{
    try{
       const id=req.params.id;
       const like=await Post.findByIdAndUpdate(id,{$inc:{likeCount:1}})
       res.status(200).json(like)
    }catch(err){
       return res.status(500).json({message:"failed to increment like",err})
    }
}

 const makeComment =async(req,res) => {
    try{
      const { postId,userId,comment}=req.body
      const updatedPost= await Post.findByIdAndUpdate(postId,
        {
            $push:{
                comments:{
                    user:userId,
                    comment:comment,
                    createdAt:new Date()
                }
            }
        },{new:true}
      )
      if(!updatedPost){
        res.status(404).json({message:"Post not find"})
      }
      res.status(200).json({Message: "Comment added",post: updatedPost})
    }catch(err){
    res.status(500).json({Message: "error occured",post: updatedPost})
    }    

}


module.exports = {
  createPost,
  allPost,
  postById,
  incrementLike,
  makeComment,
};