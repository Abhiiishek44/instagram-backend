const express = require("express");
const { createPost,allPost, postById,incrementLike, makeComment} = require("../controller/postController");

const router = express.Router();


router.post("/create",createPost)
router.get("/allPost",allPost)
router.get("/postbyId/:userId",postById)
router.post("/incrementCount/:id",incrementLike)
router.post("/Comments",makeComment)

module.exports = router;