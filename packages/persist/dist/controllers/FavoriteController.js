"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../prisma");
const FavoriteController = () => { };
FavoriteController.create = async (req, res, next) => {
    try {
        const { userAddress, address, name } = req.body;
        console.error(userAddress);
        const favorite = await prisma_1.prisma.favorite.create({
            data: {
                userAddress,
                name,
                address,
            },
        });
        return res.json(favorite);
    }
    catch (e) {
        console.log(e);
        return next(e);
    }
};
FavoriteController.edit = async (req, res, next) => {
    try {
        const { id, data } = req.body;
        const favorite = await prisma_1.prisma.favorite.update({
            where: {
                id,
            },
            data,
        });
        return res.send(favorite);
    }
    catch (e) {
        return next(e);
    }
};
FavoriteController.delete = async (req, res, next) => {
    try {
        const { id } = req.params;
        const favorite = await prisma_1.prisma.favorite.delete({
            where: {
                id,
            },
        });
        return res.send(favorite);
    }
    catch (e) {
        return next(e);
    }
};
FavoriteController.find = async (req, res, next) => {
    try {
        const { id } = req.params;
        const favorite = await prisma_1.prisma.favorite.findFirst({
            where: {
                id,
            },
        });
        return res.json(favorite);
    }
    catch (e) {
        return next(e);
    }
};
exports.default = FavoriteController;
