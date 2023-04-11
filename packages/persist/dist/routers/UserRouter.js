"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const UserRouter = express_1.default.Router();
exports.UserRouter = UserRouter;
UserRouter.post("/users", controllers_1.UserController.create);
UserRouter.patch("/users", controllers_1.UserController.edit);
UserRouter.delete("/users", controllers_1.UserController.delete);
UserRouter.get("/users/:address", controllers_1.UserController.find);
