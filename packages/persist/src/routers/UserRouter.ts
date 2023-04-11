import express from "express";
import { UserController } from "../controllers";

const UserRouter = express.Router();

UserRouter.post("/users", UserController.create);
UserRouter.patch("/users", UserController.edit);
UserRouter.delete("/users", UserController.delete);
UserRouter.get("/users/:address", UserController.find);

export { UserRouter };
