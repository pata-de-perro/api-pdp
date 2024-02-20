const express = require("express");
const router = express.Router();

const { authUser } = require("../controllers/auth");

router.post("/sign-in", authUser);

module.exports = router;
