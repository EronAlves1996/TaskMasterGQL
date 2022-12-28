import * as dotenv from "dotenv";

dotenv.config();

const config = {
  MONGO_URL: process.env.MONGO_URL || "mongodb://127.0.0.1:27017/tasmastergql",
  JWT_SECRET: process.env.JWT_SECRET || "taskmaster",
  JWT_COOKIE_NAME: process.env.JWT_COOKIE_NAME || "tmgql-auth",
};

export default config;
