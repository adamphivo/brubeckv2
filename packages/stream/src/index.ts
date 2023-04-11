import * as dotenv from "dotenv";
dotenv.config();
import http from "http";
import { sockets } from "./sockets";

const server = http.createServer();

sockets.init(server);

server.listen(process.env.STREAM_PORT, () => {
  console.log(`STREAM listening on *:${process.env.STREAM_PORT}`);
});
