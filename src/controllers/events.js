const Event = require("../models/events");

const createNewEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);

    if (!newEvent) {
      return res
        .status(502)
        .send({ success: false, msg: "Event not created", err: newEvent });
    }
    await newEvent.save();
    return res.status(201).send({ success: true, event: newEvent._id });
  } catch (err) {
    return res
      .status(err.status || 500)
      .send({ success: false, msg: err.message || "Unknown" });
  }
};

const getPlanEventById = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id).populate("locations").exec();
    if (!event) {
      return res.status(404).send({ success: false, msg: "Event not found" });
    }
    return res.status(200).send({ success: true, data: event });
  } catch (err) {
    return res
      .status(err.status || 500)
      .send({ success: false, msg: err.message || "Unknown" });
  }
};

const getPlacesEventById = async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await Event.findOne({ _id: eventId })
      .populate("locations")
      .exec();
    if (!event) {
      return res.status(404).send({ success: false, msg: "Event not found" });
    }

    return res.status(200).send({ success: true, data: event });
  } catch (err) {
    return res
      .status(err.status || 500)
      .send({ success: false, msg: err.message || "Unknown" });
  }
};

const getEventsByUser = async (req, res) => {
  const { id } = req.params;

  try {
    const events = await Event.find({ userId: id });
    if (!events) {
      return res.status(404).send({ success: false, msg: "Events not found" });
    }
    return res.status(200).send({ success: true, data: events });
  } catch (err) {
    return res
      .status(err.status || 500)
      .send({ success: false, msg: err.message || "Unknown" });
  }
};

const getUpcomingEventsByUser = async (req, res) => {
  const { id } = req.params;

  try {
    const todayDate = new Date();
    const events = await Event.find({
      userId: id,
      initialDate: { $gt: todayDate },
    });
    if (!events) {
      return res.status(404).send({ success: false, msg: "Events not found" });
    }
    return res.status(200).send({ success: true, data: events });
  } catch (err) {
    return res
      .status(err.status || 500)
      .send({ success: false, msg: err.message || "Unknown" });
  }
};

const updateEventsById = async (req, res) => {
  const { id } = req.params;
  const updateEvent = req.body;

  try {
    const event = await Event.findByIdAndUpdate(id, updateEvent, { new: true });
    if (!event) {
      return res
        .status(404)
        .send({ success: false, msg: "No se actualizó el evento" });
    }
    return res
      .status(200)
      .send({ success: true, msg: "El evento se actualizó con éxito" });
  } catch (err) {
    return res
      .status(err.status || 500)
      .send({ success: false, msg: err.message || "Unknown" });
  }
};

const deleteEventById = async (req, res) => {
  const eventId = req.params.id;

  try {
    const deletedEvent = await Event.findByIdAndDelete(eventId);
    if (!deletedEvent) {
      return res
        .status(404)
        .send({ success: false, msg: "No se eliminó el evento" });
    }
    return res
      .status(200)
      .send({ success: true, msg: "El evento se eliminó con éxito" });
  } catch (err) {
    return res
      .status(err.status || 500)
      .send({ success: false, msg: err.message || "Unknown" });
  }
};

module.exports = {
  createNewEvent,
  getPlanEventById,
  getPlacesEventById,
  getEventsByUser,
  getUpcomingEventsByUser,
  updateEventsById,
  deleteEventById,
};
