import { Server } from "socket.io";
import schedule from "node-schedule";

const sockets = () => {};

sockets.init = (server: any) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", async (socket) => {
    socket.on("connectionEvent", (data: any) => {});
    socket.on("disconnect", () => {});
  });

  schedule.scheduleJob("*/2 * * * * *", async () => {
    io.emit("prices", "test");
    io.emit("test", "testsss");
    console.log("test");
  });
};

export { sockets };
