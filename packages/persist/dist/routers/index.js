"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRouter_1 = require("./UserRouter");
const FavoriteRouter_1 = require("./FavoriteRouter");
const Router = express_1.default.Router();
Router.use("/", UserRouter_1.UserRouter);
Router.use("/", FavoriteRouter_1.FavoriteRouter);
exports.default = Router;
