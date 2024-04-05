const express = require("express");
const { validateEmail } = require("../middlewares/isValid");
const router = express.Router();

router.get("/", [ validateEmail ]);

module.exports = router;

