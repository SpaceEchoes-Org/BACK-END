
const express = require("express");
const router = express.Router();

const {
  getAllPlanets,
  getPlanetById,
} = require("../controllers/planetController");

router.get("/", getAllPlanets);
router.get("/:id", getPlanetById);

module.exports = router;
