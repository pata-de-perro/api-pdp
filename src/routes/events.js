const express = require("express");
const router = express.Router();

const {
  createNewEvent,
  getEventsByUser,
  updateEventsById,
} = require("../controllers/events");
const { auth } = require("../middlewares/auth");

router.post("/", [auth], createNewEvent);
router.get("/:id", [auth], getEventsByUser);
router.put("/update/:id", [auth], updateEventsById);

module.exports = router;
