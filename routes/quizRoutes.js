
const express = require("express");
const router = express.Router();

const {
  getMissionQuiz,
  submitQuiz,
} = require("../controllers/quizController");

const protect = require("../middlewares/authMiddlewares");

router.get("/missions/:missionId/quiz", getMissionQuiz);
router.post("/quizzes/:quizId/submit", protect, submitQuiz);

module.exports = router;
