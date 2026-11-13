
const mongoose = require("mongoose");

const planetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    description: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    type: {
      type: String,
      enum: ["moon", "planet", "space"],
      required: true,
    },

    relatedMissionBodies: [{
      type: String,
      enum: ["moon", "mars", "deep-space"],
    }],

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Planet", planetSchema);
