import mongoose from "mongoose";
import config from "./config";

async function connectToDatabase() {
  await mongoose.connect(config.MONGO_URL);
}

export default connectToDatabase;