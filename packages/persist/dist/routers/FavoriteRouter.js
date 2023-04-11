"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteRouter = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const FavoriteRouter = express_1.default.Router();
exports.FavoriteRouter = FavoriteRouter;
FavoriteRouter.post("/favorites", controllers_1.FavoriteController.create);
FavoriteRouter.patch("/favorites", controllers_1.FavoriteController.edit);
FavoriteRouter.delete("/favorites/:id", controllers_1.FavoriteController.delete);
FavoriteRouter.get("/favorites/:id", controllers_1.FavoriteController.find);
