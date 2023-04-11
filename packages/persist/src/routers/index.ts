import express from "express";
import { UserRouter } from "./UserRouter";
import { FavoriteRouter } from "./FavoriteRouter";

const Router = express.Router();

Router.use("/", UserRouter);
Router.use("/", FavoriteRouter);

export default Router;
