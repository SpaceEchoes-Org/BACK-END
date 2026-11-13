
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },

  options: [{
    type: String,
    required: true,
  }],

  correctAnswer: {
    type: Number,
    required: true,
    min: 0,
  },

  explanation: {
    type: String,
    default: "",
  },

  points: {
    type: Number,
    default: 10,
    min: 0,
  },
});

const quizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    mission: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mission",
      required: true,
      unique: true,
    },

    questions: [questionSchema],

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

quizSchema.pre("validate", function () {
  for (const question of this.questions) {
    if (
      !Array.isArray(question.options) ||
      question.options.length < 2 ||
      question.correctAnswer >= question.options.length
    ) {
      this.invalidate(
        "questions",
        "Each question needs at least two options and a valid correctAnswer"
      );
    }
  }
});

module.exports = mongoose.model("Quiz", quizSchema);
