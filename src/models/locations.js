const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const locationSchema = new Schema(
  {
    locationName: { type: String, trim: true, required: true },
    description: { type: String, trim: true },
    address: { type: String, trim: true, required: true },
    coords: { type: [Number], required: true },
    categoryID: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Location", locationSchema);
