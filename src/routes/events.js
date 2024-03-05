const express = require("express");
const router = express.Router();

const { createNewEvent } = require("../controllers/events");

router.post("/", createNewEvent);

module.exports = router;
