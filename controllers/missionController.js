
const Mission = require("../models/mission");

const getAllMissions = async (req, res) => {
  try {
    const filter = { isActive: true };

    if (req.query.body) {
      const allowedBodies = ["moon", "mars", "deep-space"];

      if (!allowedBodies.includes(req.query.body)) {
        return res.status(400).json({
          message: "Invalid mission body",
        });
      }

      filter.body = req.query.body;
    }

    const missions = await Mission.find(filter).sort({
      order: 1,
    });

    return res.status(200).json({
      count: missions.length,
      data: missions,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch missions",
      error: error.message,
    });
  }
};

const getMissionById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!/^[0-9a-fA-F]{24}$/.test(id)) {
      return res.status(400).json({
        message: "Invalid mission ID",
      });
    }

    const mission = await Mission.findOne({
      _id: id,
      isActive: true,
    });

    if (!mission) {
      return res.status(404).json({
        message: "Mission not found",
      });
    }

    return res.status(200).json({
      data: mission,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch mission",
      error: error.message,
    });
  }
};

module.exports = {
  getAllMissions,
  getMissionById,
};
