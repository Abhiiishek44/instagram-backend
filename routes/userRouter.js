const express = require("express");
const router = express.Router();
const { registerUser,getAllUsers,specificUser, loginUser , followUser} = require("../controller/userController");
const authenticateToken  = require("../middleware/auth");


router.post("/register",registerUser);
router.post("/login",loginUser)
router.get("/all",authenticateToken,getAllUsers)
router.get("/:id",authenticateToken,specificUser)
router.post("/:name/follow",followUser)

module.exports = router;