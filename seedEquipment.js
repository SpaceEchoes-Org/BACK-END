
require("dotenv").config();

const mongoose = require("mongoose");
const Equipment = require("./models/Equipment");
const equipmentData = require("./data/equipmentData");

const seedEquipment = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing from .env");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    for (const item of equipmentData) {
      await Equipment.findOneAndUpdate(
        { slug: item.slug },
        { $set: item },
        {
          upsert: true,
          new: true,
          runValidators: true,
          setDefaultsOnInsert: true,
        }
      );

      console.log(`${item.name} saved successfully`);
    }

    console.log("All equipment records saved successfully");
  } catch (error) {
    console.error("Seeding error:", error.message);
    process.exitCode = 1;
  } finally {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
      console.log("MongoDB disconnected");
    }
  }
};

seedEquipment();
