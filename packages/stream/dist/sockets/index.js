"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sockets = void 0;
const socket_io_1 = require("socket.io");
const node_schedule_1 = __importDefault(require("node-schedule"));
const sockets = () => { };
exports.sockets = sockets;
sockets.init = (server) => {
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: "*",
        },
    });
    io.on("connection", async (socket) => {
        socket.on("connectionEvent", (data) => { });
        socket.on("disconnect", () => { });
    });
    node_schedule_1.default.scheduleJob("*/2 * * * * *", async () => {
        io.emit("prices", "test");
        io.emit("test", "testsss");
        console.log("test");
    });
};
