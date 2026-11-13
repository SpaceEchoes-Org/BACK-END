
const Equipment = require("../models/Equipment");

// GET /api/equipment
const getAllEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.find().sort({ name: 1 });

    res.status(200).json({
      success: true,
      count: equipment.length,
      data: equipment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch equipment",
      error: error.message,
    });
  }
};

// GET /api/equipment/:id
const getEquipmentById = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);

    if (!equipment) {
      return res.status(404).json({
        success: false,
        message: "Equipment not found",
      });
    }

    res.status(200).json({
      success: true,
      data: equipment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch equipment",
      error: error.message,
    });
  }
};

// GET /api/equipment/slug/:slug
const getEquipmentBySlug = async (req, res) => {
  try {
    const equipment = await Equipment.findOne({
      slug: req.params.slug.toLowerCase(),
    });

    if (!equipment) {
      return res.status(404).json({
        success: false,
        message: "Equipment not found",
      });
    }

    res.status(200).json({
      success: true,
      data: equipment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch equipment",
      error: error.message,
    });
  }
};

// GET /api/equipment/filter?body=Mars
const filterEquipment = async (req, res) => {
  try {
    const { body, type } = req.query;

    const filter = {};

    if (body) {
      filter.celestialBody = body;
    }

    if (type) {
      filter.type = new RegExp(type, "i");
    }

    const equipment = await Equipment.find(filter).sort({ name: 1 });

    res.status(200).json({
      success: true,
      count: equipment.length,
      data: equipment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to filter equipment",
      error: error.message,
    });
  }
};

module.exports = {
  getAllEquipment,
  getEquipmentById,
  getEquipmentBySlug,
  filterEquipment,
};
