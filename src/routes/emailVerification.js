const express = require("express");
const { isValid } = require("../middlewares/isValid");
const router = express.Router();



router.get("/verify-email", [isValid], );

module.exports = router;
