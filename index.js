const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter.js")
const postRouter = require("./routes/postRouter.js")
const app = express();
require("dotenv").config();


app.use(express.json())

mongoose.connect("mongodb://localhost:27017/instagramClone").then(()=>{
    console.log("mongoDb connected")
}).catch((err)=>console.log("MongoDb connection error",err));


app.use("/api/user",userRouter)
app.use("/api/post",postRouter)

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})