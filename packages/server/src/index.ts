import app from "./app";
import { createServer } from "http";
import connectToDatabase from "./database";

const server = createServer(app.callback());
connectToDatabase();

server.listen(3000);
console.log("Listening on port 3000")