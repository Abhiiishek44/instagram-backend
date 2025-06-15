const express = require("express");
const { createPost,allPost, postById,incrementLike, makeComment} = require("../controller/postController");
const authenticateToken = require("../middleware/auth");

const router = express.Router();


router.post("/create",authenticateToken,createPost)
router.get("/allPost",allPost)
router.get("/postbyId/:userId",postById)
router.post("/incrementCount/:id",incrementLike)
router.post("/Comments",makeComment)

module.exports = router;