// url
// original Url
// timestamp

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const urlScehma = new mongoose.Schema(
  {
    shortUrl: {
      type: String,
    },
    originalUrl: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Url = mongoose.model("Url", urlScehma);

module.exports = Url;
