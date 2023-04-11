import { prisma } from "../prisma";
import type { Request, Response, NextFunction } from "express";

const FavoriteController = () => {};

FavoriteController.create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userAddress, address, name } = req.body;

    console.error(userAddress);

    const favorite = await prisma.favorite.create({
      data: {
        userAddress,
        name,
        address,
      },
    });

    return res.json(favorite);
  } catch (e) {
    console.log(e);
    return next(e);
  }
};

FavoriteController.edit = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, data } = req.body;

    const favorite = await prisma.favorite.update({
      where: {
        id,
      },
      data,
    });

    return res.send(favorite);
  } catch (e) {
    return next(e);
  }
};

FavoriteController.delete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const favorite = await prisma.favorite.delete({
      where: {
        id,
      },
    });

    return res.send(favorite);
  } catch (e) {
    return next(e);
  }
};

FavoriteController.find = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const favorite = await prisma.favorite.findFirst({
      where: {
        id,
      },
    });

    return res.json(favorite);
  } catch (e) {
    return next(e);
  }
};

export default FavoriteController;
