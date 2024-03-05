const express = require("express");
const router = express.Router();

const { createNewEvent, getEventsByUser } = require("../controllers/events");

router.post("/", createNewEvent);
router.get("/:id", getEventsByUser);

module.exports = router;
