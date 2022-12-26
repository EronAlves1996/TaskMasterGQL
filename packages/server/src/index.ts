import app from "./app";
import { createServer } from "http";

const server = createServer(app.callback());

server.listen(3000);
console.log("Listening on port 3000")