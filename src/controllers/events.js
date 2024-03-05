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
    return res.status(201).send({ success: true, msg: "Event created!" });
  } catch (err) {
    return res
      .status(err.status || 500)
      .send({ success: false, msg: err.message || "Unknown" });
  }
};

module.exports = {
  createNewEvent,
};
