const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventSchema = new Schema(
  {
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    initialDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    coordsEvent: { type: [Number], required: true },
    locations: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Location",
      },
    ],
    userID: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
    isTravel: { type: Boolean, default: false },
    isIvitation: { type: Boolean, default: false },
    urlImage: { type: String },
    friends: {type:String, trim: true, required:false, ref:"Friends"}
  },
  { timestamps: true }
);

module.exports = model("Event", eventSchema);
