import http from "http";
import app from "./app";
import * as dotenv from "dotenv";
dotenv.config();

const server = http.createServer(app);

server.listen(process.env.PERSIST_PORT, () => {
  console.log(`PERSIST listening on *:${process.env.PERSIST_PORT}`);
});
