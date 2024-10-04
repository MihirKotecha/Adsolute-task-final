import mongoose from "mongoose";
import "dotenv/config";

const dbConnection = async () => {
  try {
    if (!process.env.DB_URL) {
      throw new Error("DB_URL is not defined in the environment variables.");
    }
    console.log("Connecting to", process.env.DB_URL);
    const connection = await mongoose.connect(process.env.DB_URL);
    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default dbConnection;
