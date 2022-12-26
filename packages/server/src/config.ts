import * as dotenv from "dotenv";

dotenv.config();

const config = {
    MONGO_URL: process.env.MONGO_URL || "mongodb://127.0.0.1:27017/tasmastergql"
}

export default config;