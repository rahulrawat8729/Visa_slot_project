const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    visaType: {
      type: String,
      required: true,
      enum: ["Tourist", "Business", "Student"],
    },
    status: {
      type: String,
      required: true,
      enum: ["Active", "Booked", "Expired"],
      default: "Active",
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
);

const Alert = mongoose.model("Alert", alertSchema);

module.exports = Alert;
