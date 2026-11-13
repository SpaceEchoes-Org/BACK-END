
const express = require("express");
const router = express.Router();

const {
  getAllEquipment,
  getEquipmentById,
  getEquipmentBySlug,
  filterEquipment,
} = require("../controllers/equipmentController");

router.get("/", getAllEquipment);
router.get("/filter", filterEquipment);
router.get("/slug/:slug", getEquipmentBySlug);
router.get("/:id", getEquipmentById);

module.exports = router;
