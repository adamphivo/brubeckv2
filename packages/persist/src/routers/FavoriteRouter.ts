import express from "express";
import { FavoriteController } from "../controllers";

const FavoriteRouter = express.Router();

FavoriteRouter.post("/favorites", FavoriteController.create);
FavoriteRouter.patch("/favorites", FavoriteController.edit);
FavoriteRouter.delete("/favorites/:id", FavoriteController.delete);
FavoriteRouter.get("/favorites/:id", FavoriteController.find);

export { FavoriteRouter };
