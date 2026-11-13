
const mongoose = require("mongoose");

const missionProgressSchema = new mongoose.Schema(
  {
    cadet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cadet",
      required: true,
    },

    mission: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mission",
      required: true,
    },

    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
      required: true,
    },

    score: {
      type: Number,
      default: 0,
    },

    maxScore: {
      type: Number,
      default: 0,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    xpAwarded: {
      type: Number,
      default: 0,
    },

    completedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

missionProgressSchema.index(
  { cadet: 1, mission: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "MissionProgress",
  missionProgressSchema
);
