
const mongoose = require("mongoose");

const missionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    body: {
      type: String,
      enum: ["moon", "mars", "deep-space"],
      required: true,
    },

    vehicleName: {
      type: String,
      default: "",
    },

    missionName: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    launchDate: {
      type: String,
      default: "",
    },

    arrivalDate: {
      type: String,
      default: "",
    },

    purpose: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },

    discoveries: [{
      type: String,
    }],

    currentStatus: {
      type: String,
      default: "",
    },

    images: [{
      title: String,
      url: String,
      credit: String,
    }],

    image: {
      type: String,
      default: "",
    },

    coordinates: {
      latitude: Number,
      longitude: Number,
      description: String,
    },

    interestingFacts: [{
      type: String,
    }],

    sourceUrls: [{
      type: String,
    }],

    lastUpdated: {
      type: String,
      default: "",
    },

    order: {
      type: Number,
      default: 0,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mission", missionSchema);
