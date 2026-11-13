
const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema(
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

    type: {
      type: String,
      required: true,
      trim: true,
    },

    celestialBody: {
      type: String,
      required: true,
      enum: ["Moon", "Mars", "Deep Space"],
    },

    description: {
      type: String,
      default: "",
    },

    purpose: {
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

    endDate: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      default: "",
    },

    discoveries: [
      {
        type: String,
      },
    ],

    interestingFacts: [
      {
        type: String,
      },
    ],

    images: [
      {
        url: {
          type: String,
          default: "",
        },
        caption: {
          type: String,
          default: "",
        },
        credit: {
          type: String,
          default: "NASA",
        },
        sourceUrl: {
          type: String,
          default: "",
        },
      },
    ],

    sources: {
  type: [String],
  default: [],
},

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Equipment", equipmentSchema);
