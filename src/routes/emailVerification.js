const express = require("express");
const { validateEmail } = require("../middlewares/isValid");
const router = express.Router();

const {
    getUserProfile,
  } = require("../controllers/users");


router.get("/verify-email", [ validateEmail ], getUserProfile );

module.exports = router;

