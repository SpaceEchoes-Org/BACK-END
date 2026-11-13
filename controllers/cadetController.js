
const mongoose = require("mongoose");
const Cadet = require("../models/cadet");
const MissionProgress = require("../models/missionProgress");

const getCadetById = async (req, res) => {
  try {
    const { cadetId } = req.params;

    if (!mongoose.isValidObjectId(cadetId)) {
      return res.status(400).json({
        message: "Invalid cadet ID",
      });
    }

    if (cadetId !== req.cadetId) {
      return res.status(403).json({
        message: "You cannot access another cadet's profile",
      });
    }

    const cadet = await Cadet.findById(cadetId).select(
      "-password"
    );

    if (!cadet) {
      return res.status(404).json({
        message: "Cadet not found",
      });
    }

    return res.status(200).json({
      data: cadet,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch cadet",
      error: error.message,
    });
  }
};

const updateCadet = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        message: "Invalid cadet ID",
      });
    }

    if (id !== req.cadetId) {
      return res.status(403).json({
        message: "You cannot update another cadet's profile",
      });
    }

    const allowedFields = ["name", "avatar"];
    const updates = {};

    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        updates[field] =
          typeof req.body[field] === "string"
            ? req.body[field].trim()
            : req.body[field];
      }
    }

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({
        message: "No valid fields provided for update",
      });
    }

    if (updates.name !== undefined && !updates.name) {
      return res.status(400).json({
        message: "Name cannot be empty",
      });
    }

    const cadet = await Cadet.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    ).select("-password");

    if (!cadet) {
      return res.status(404).json({
        message: "Cadet not found",
      });
    }

    return res.status(200).json({
      message: "Profile updated successfully",
      data: cadet,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update profile",
      error: error.message,
    });
  }
};

const getCadetProgress = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        message: "Invalid cadet ID",
      });
    }

    if (id !== req.cadetId) {
      return res.status(403).json({
        message: "You cannot access another cadet's progress",
      });
    }

    const progress = await MissionProgress.find({
      cadet: id,
    })
      .populate("mission", "title slug body vehicleName image")
      .populate("quiz", "title")
      .sort({ completedAt: -1 });

    return res.status(200).json({
      count: progress.length,
      data: progress,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch progress",
      error: error.message,
    });
  }
};

module.exports = {
  getCadetById,
  updateCadet,
  getCadetProgress,
};
