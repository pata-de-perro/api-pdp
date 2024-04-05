const express = require("express");
const router = express.Router();

const {
  createNewEvent,
  getPlanEventById,
  getEventsByUser,
  updateEventsById,
  getPlacesEventById,
  deleteEventById,
} = require("../controllers/events");
const { auth } = require("../middlewares/auth");

router.post("/", [auth], createNewEvent);
router.get("/plan/:id", [auth], getPlanEventById);
router.get("/place/:id", [auth], getPlacesEventById);
router.get("/user/:id", [auth], getEventsByUser);
router.put("/update/:id", [auth], updateEventsById);
router.delete("/delete/:id", [auth], deleteEventById);

module.exports = router;
