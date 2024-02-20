const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const categorySchema = new Schema(
  {
    categoryName: { type: String, trim: true, required: true },
    categoryType: { type: String, trim: true, required: true },
  },
  { timestamps: true }
);

module.exports = model("Category", categorySchema);
