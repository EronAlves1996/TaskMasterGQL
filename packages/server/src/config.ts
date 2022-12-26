import * as dotenv from "dotenv";

dotenv.config();

const config = {
    MONGOOSE_URL: process.env.MONGOOSE_URL || "mongodb://127.0.0.1:27017/tasmastergql"
}

export default config;