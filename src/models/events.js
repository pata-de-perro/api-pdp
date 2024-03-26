const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventSchema = new Schema(
  {
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true },
    initialDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    locationEvent: { type: String, trim: true },
    coordsEvent: { type: [Number], required: true },
    locations: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Location",
      },
    ],
    userId: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
    isTravel: { type: Boolean, default: false },
    urlImage: { type: String },
  },
  { timestamps: true }
);

module.exports = model("Event", eventSchema);
