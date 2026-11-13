
const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const cadetRoutes = require("./routes/cadetRoutes");
const planetRoutes = require("./routes/planetRoutes");
const missionRoutes = require("./routes/missionRoutes");
const quizRoutes = require("./routes/quizRoutes");
const chatRoutes = require("./routes/chatRoutes");


const equipmentRoutes = require("./routes/equipmentRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Serve local images from public/images
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Home route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Unanswered Messages API is running",
  });
});

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
  });
});

// Equipment routes
app.use("/api/equipment", equipmentRoutes);


app.use("/api/auth", authRoutes);
app.use("/api/cadets", cadetRoutes);
app.use("/api/planets", planetRoutes);
app.use("/api/missions", missionRoutes);
app.use("/api", quizRoutes);
app.use("/api/chat", chatRoutes);

module.exports = app;
