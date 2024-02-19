const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventSchema = new Schema(
  {
    initialDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    coord: { type: [Number], required: true },
    locationID: {
      type: mongoose.Schema.ObjectId,
      ref: "Location",
      required: true,
    },
    userID: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
    isTravel: { type: Boolean, default: false },
    debt: { type: String },
  },
  { timestamps: true }
);

module.exports = model("Event", eventSchema);
