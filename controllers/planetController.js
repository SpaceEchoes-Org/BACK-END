
const Planet = require("../models/planet");

const getAllPlanets = async (req, res) => {
  try {
    const planets = await Planet.find({ isActive: true }).sort({
      name: 1,
    });

    return res.status(200).json({
      count: planets.length,
      data: planets,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch planets",
      error: error.message,
    });
  }
};

const getPlanetById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!/^[0-9a-fA-F]{24}$/.test(id)) {
      return res.status(400).json({
        message: "Invalid planet ID",
      });
    }

    const planet = await Planet.findOne({
      _id: id,
      isActive: true,
    });

    if (!planet) {
      return res.status(404).json({
        message: "Planet not found",
      });
    }

    return res.status(200).json({
      data: planet,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch planet",
      error: error.message,
    });
  }
};

module.exports = {
  getAllPlanets,
  getPlanetById,
};
