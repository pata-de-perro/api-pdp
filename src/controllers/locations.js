const Location = require("../models/locations");
const Event = require("../models/events");

const createNewLocations = async (req, res) => {
  const eventId = req.params.id;
  const locationsData = req.body;

  try {
    const newLocations = await Location.insertMany(locationsData);
    if (!newLocations || newLocations.length === 0) {
      return res
        .status(502)
        .send({ success: false, msg: "Locations not created" });
    }

    const locationsIds = newLocations.map((location) => location._id);

    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).send({ success: false, msg: "Event not found" });
    }
    event.locations = locationsIds;

    await event.save();

    return res
      .status(201)
      .send({ success: true, msg: "¡Ubicaciones guardadas con éxito!" });
  } catch (err) {
    return res
      .status(err.status || 500)
      .send({ success: false, msg: err.message || "Unknown" });
  }
};

module.exports = {
  createNewLocations,
};
