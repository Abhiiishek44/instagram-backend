const express = require("express");
const { createPost,allPost, postById,incrementLike, makeComment} = require("../controller/postController");
const authenticateToken = require("../middleware/auth");

const router = express.Router();


router.post("/create",authenticateToken,createPost)
router.get("/allPost",authenticateToken,allPost)
router.get("/postbyId/:userId",authenticateToken,postById)
router.post("/incrementCount/:id",authenticateToken,incrementLike)
router.post("/Comments",authenticateToken,makeComment)

module.exports = router;