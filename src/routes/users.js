const express = require("express");
const router = express.Router();

const {
  createNewUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/users");
const { auth } = require("../middlewares/auth");

router.post("/", createNewUser);
router.get("/profile/:id", [auth], getUserProfile);
router.put("/profile-update/:id", [auth], updateUserProfile);

module.exports = router;
