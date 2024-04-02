const express = require("express");
const router = express.Router();

const { authUser } = require("../controllers/auth");
const { captcha } = require("../middlewares/captcha")

router.post("/sign-in", authUser);

module.exports = router;
