const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const expenseSchema = new Schema(
  {
    quantity: { type: Number },
    userList: [{ type: mongoose.Schema.ObjectId, ref: "User", required: true }],
    eventId: {
      type: mongoose.Schema.ObjectId,
      ref: "Event",
      required: true,
    },
    locationID: {
      type: mongoose.Schema.ObjectId,
      ref: "Location",
      required: true,
    },
    receipt: { type: String },
  },
  { timestamps: true }
);

module.exports = model("Expense", expenseSchema);
