const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true },
    phoneNumber: { type: Number },
    avatar: { type: String },
    eventID: { type: mongoose.Schema.ObjectId, ref: "Event" },
    birthdate: { type: Date },
    gender: { type: String },
  },
  {
    timestamps: true,
    statics: {
      encrypPassword: async (password) => {
        try {
          const salt = await bcrypt.genSalt(15);
          const hashedPass = await bcrypt.hash(password, salt);
          return hashedPass;
        } catch (err) {
          throw new Error(`Error: ${err.message}`);
        }
      },
      comparePassword: async (password, hash) => {
        try {
          const match = await bcrypt.compare(password, hash);
          return match;
        } catch (err) {
          throw new Error(`Error: ${err.message}`);
        }
      },
    },
  }
);

module.exports = model("User", userSchema);
