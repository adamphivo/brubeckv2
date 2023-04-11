import { prisma } from "../prisma";
import type { Request, Response, NextFunction } from "express";

const UserController = () => {};

UserController.create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { address } = req.body;

    const user = await prisma.user.create({
      data: {
        address,
      },
      include: {
        Favorite: true,
      },
    });

    return res.json(user);
  } catch (e) {
    return next(e);
  }
};

UserController.edit = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { address, data } = req.body;

    const user = await prisma.user.update({
      where: {
        address,
      },
      data,
    });

    return res.send(user);
  } catch (e) {
    return next(e);
  }
};

UserController.delete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { address } = req.body;

    const user = await prisma.user.delete({
      where: {
        address,
      },
    });

    return res.send(user);
  } catch (e) {
    return next(e);
  }
};

UserController.find = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const address = req.params.address.toLowerCase().trim();

    const user = await prisma.user.findUnique({
      where: {
        address,
      },
      include: {
        Favorite: true,
      },
    });

    if (!user) {
      const user = await prisma.user.create({
        data: {
          address,
        },
        include: {
          Favorite: true,
        },
      });

      return res.json(user);
    }

    return res.json(user);
  } catch (e) {
    return next(e);
  }
};

export default UserController;
