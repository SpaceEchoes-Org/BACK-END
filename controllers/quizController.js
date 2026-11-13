
const mongoose = require("mongoose");
const Quiz = require("../models/quiz");
const Mission = require("../models/mission");
const Cadet = require("../models/cadet");
const MissionProgress = require("../models/missionProgress");

// GET QUIZ WITHOUT CORRECT ANSWERS
const getMissionQuiz = async (req, res) => {
  try {
    const { missionId } = req.params;

    if (!mongoose.isValidObjectId(missionId)) {
      return res.status(400).json({
        message: "Invalid mission ID",
      });
    }

    const mission = await Mission.findOne({
      _id: missionId,
      isActive: true,
    });

    if (!mission) {
      return res.status(404).json({
        message: "Mission not found",
      });
    }

    const quiz = await Quiz.findOne({
      mission: missionId,
      isActive: true,
    });

    if (!quiz) {
      return res.status(404).json({
        message: "Quiz not found",
      });
    }

    const safeQuestions = quiz.questions.map((question) => ({
      _id: question._id,
      question: question.question,
      options: question.options,
      points: question.points,
    }));

    return res.status(200).json({
      title: quiz.title,
      mission: {
        id: mission._id,
        title: mission.title,
      },
      questions: safeQuestions,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch quiz",
      error: error.message,
    });
  }
};

// SUBMIT QUIZ
const submitQuiz = async (req, res) => {
  try {
    const { quizId } = req.params;
    const { answers } = req.body;

    if (!mongoose.isValidObjectId(quizId)) {
      return res.status(400).json({
        message: "Invalid quiz ID",
      });
    }

    if (!Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({
        message: "Answers must be a non-empty array",
      });
    }

    const quiz = await Quiz.findOne({
      _id: quizId,
      isActive: true,
    });

    if (!quiz) {
      return res.status(404).json({
        message: "Quiz not found",
      });
    }

    const cadet = await Cadet.findById(req.cadetId);

    if (!cadet) {
      return res.status(404).json({
        message: "Cadet not found",
      });
    }

    const submittedIds = answers.map((answer) =>
      String(answer.questionId)
    );

    if (new Set(submittedIds).size !== submittedIds.length) {
      return res.status(400).json({
        message: "Duplicate question answers are not allowed",
      });
    }

    if (answers.length !== quiz.questions.length) {
      return res.status(400).json({
        message: "Please answer every question",
      });
    }

    let score = 0;
    let maxScore = 0;

    const results = [];

    for (const question of quiz.questions) {
      const answer = answers.find(
        (item) =>
          String(item.questionId) === String(question._id)
      );

      if (
        !answer ||
        !Number.isInteger(answer.selectedOption) ||
        answer.selectedOption < 0 ||
        answer.selectedOption >= question.options.length
      ) {
        return res.status(400).json({
          message: "Invalid or missing selected option",
          questionId: question._id,
        });
      }

      maxScore += question.points;

      const isCorrect =
        answer.selectedOption === question.correctAnswer;

      if (isCorrect) {
        score += question.points;
      }

      results.push({
        questionId: question._id,
        question: question.question,
        selectedOption: answer.selectedOption,
        correctAnswer: question.correctAnswer,
        isCorrect,
        explanation: question.explanation,
      });
    }

    // Do not award points more than once for the same mission.
    const existingProgress = await MissionProgress.findOne({
      cadet: cadet._id,
      mission: quiz.mission,
    });

    if (existingProgress) {
      return res.status(409).json({
        message: "You have already submitted this mission quiz",
        data: existingProgress,
      });
    }

    const xpAwarded = score;

    const progress = await MissionProgress.create({
      cadet: cadet._id,
      mission: quiz.mission,
      quiz: quiz._id,
      score,
      maxScore,
      completed: true,
      xpAwarded,
      completedAt: new Date(),
    });

    cadet.points += xpAwarded;
    cadet.completedMissions += 1;
    cadet.level = Math.floor(cadet.points / 100) + 1;

    await cadet.save();

    return res.status(200).json({
      message: "Quiz submitted successfully",
      data: {
        score,
        maxScore,
        correctCount: results.filter((item) => item.isCorrect).length,
        totalQuestions: quiz.questions.length,
        xpAwarded,
        cadet: {
          points: cadet.points,
          level: cadet.level,
          completedMissions: cadet.completedMissions,
        },
        results,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "This mission quiz was already submitted",
      });
    }

    return res.status(500).json({
      message: "Failed to submit quiz",
      error: error.message,
    });
  }
};

module.exports = {
  getMissionQuiz,
  submitQuiz,
};
