
const express = require("express");
const router = express.Router();

const {
  getAllMissions,
  getMissionById,
} = require("../controllers/missionController");

router.get("/", getAllMissions);
router.get("/:id", getMissionById);

module.exports = router;
