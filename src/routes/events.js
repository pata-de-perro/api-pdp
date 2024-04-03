const express = require("express");
const router = express.Router();

const {
  createNewEvent,
  getPlanEventById,
  getEventsByUser,
  updateEventsById,
} = require("../controllers/events");
const { auth } = require("../middlewares/auth");

router.post("/", [auth], createNewEvent);
router.get("/plan/:id", [auth], getPlanEventById);
router.get("/:id", [auth], getEventsByUser);
router.put("/update/:id", [auth], updateEventsById);

module.exports = router;
