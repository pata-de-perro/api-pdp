const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const mailSchema = new Schema(
  {
    to: { type: String, trim: true, required: true},
    from: { type: String, trim: true, required: true, unique: true },
    subject: { type: String, trim: true, required: true },
    text: { type: String },
    html: {type: String, required: true}
  }
);

module.exports = model("Mail", mailSchema);
