import http from "http";
import app from "./app";
import * as dotenv from "dotenv";
dotenv.config();

const server = http.createServer(app);

server.listen(process.env.GATHER_PORT, () => {
  console.log(`GATHER listening on *:${process.env.GATHER_PORT}`);
});
