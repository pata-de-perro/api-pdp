const express = require("express");
const router = express.Router();

const {
  createNewUser,
  getUserProfile,
  updateUserProfile,
} = require("../controllers/users");

router.post("/", createNewUser);
router.get("/profile/:id", getUserProfile);
router.put("/update/:id", updateUserProfile);

module.exports = router;
