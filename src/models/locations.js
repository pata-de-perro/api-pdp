const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const locationSchema = new Schema(
  {
    placeIdGoogle: { type: String, required: true },
    name: { type: String, trim: true, required: true },
    type: { type: String, trim: true, required: true },
    vicinity: { typè: String, trim: true },
    simpleAddress: { type: String, trim: true, required: true },
    coords: { type: [Number], required: true },
  },
  { timestamps: true }
);

module.exports = model("Location", locationSchema);
