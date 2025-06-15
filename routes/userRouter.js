const express = require("express");
const router = express.Router();
const { registerUser,getAllUsers,specificUser } = require("../controller/userController");

router.post("/register",registerUser);
router.get("/allUser",getAllUsers)
router.get("/oneUser/:id",specificUser)
module.exports = router;