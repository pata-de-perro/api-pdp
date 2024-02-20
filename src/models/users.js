const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true },
    phoneNumber: { type: Number, trim: true },
    avatar: { type: String },
    eventID: { type: mongoose.Schema.ObjectId, ref: "Event", required: true },
  },
  { timestamps: true }
);

module.exports = model("User", userSchema);
