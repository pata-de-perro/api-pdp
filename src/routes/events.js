const express = require("express");
const router = express.Router();

const {
  createNewEvent,
  getEventsByUser,
  updateEventsById,
} = require("../controllers/events");

router.post("/", createNewEvent);
router.get("/:id", getEventsByUser);
router.put("/update/:id", updateEventsById);

module.exports = router;
