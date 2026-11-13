
const Cadet = require("../models/cadet");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
const register = async (req, res) => {
  try {
    const { username, password, name } = req.body;

    if (!username || !password || !name) {
      return res.status(400).json({
        message: "Username, password and name are required",
      });
    }

    if (username.trim().length < 3) {
      return res.status(400).json({
        message: "Username must be at least 3 characters",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters",
      });
    }

    const normalizedUsername = username.trim().toLowerCase();

    const existingCadet = await Cadet.findOne({
      username: normalizedUsername,
    });

    if (existingCadet) {
      return res.status(409).json({
        message: "Username already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const cadet = await Cadet.create({
      username: normalizedUsername,
      password: hashedPassword,
      name: name.trim(),
    });

    return res.status(201).json({
      message: "Cadet registered successfully",
      data: {
        id: cadet._id,
        username: cadet.username,
        name: cadet.name,
        avatar: cadet.avatar,
        level: cadet.level,
        points: cadet.points,
        completedMissions: cadet.completedMissions,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "Username already exists",
      });
    }

    return res.status(500).json({
      message: "Registration failed",
      error: error.message,
    });
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password are required",
      });
    }

    const cadet = await Cadet.findOne({
      username: username.trim().toLowerCase(),
    }).select("+password");

    if (!cadet) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      cadet.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is missing from environment variables");
    }

    const token = jwt.sign(
      { cadetId: cadet._id.toString() },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      data: {
        id: cadet._id,
        username: cadet.username,
        name: cadet.name,
        avatar: cadet.avatar,
        level: cadet.level,
        points: cadet.points,
        completedMissions: cadet.completedMissions,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};

module.exports = { register, login };
