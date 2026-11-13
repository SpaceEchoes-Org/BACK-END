
const express = require("express");
const router = express.Router();

const {
  getCadetById,
  updateCadet,
  getCadetProgress,
} = require("../controllers/cadetController");

const protect = require("../middlewares/authMiddlewares");

router.get("/:id/progress", protect, (req, res, next) => {
  req.params.id = req.params.id;
  getCadetProgress(req, res, next);
});

router.get("/:cadetId", protect, getCadetById);
router.patch("/:id", protect, updateCadet);

module.exports = router;
