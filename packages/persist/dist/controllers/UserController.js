"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../prisma");
const UserController = () => { };
UserController.create = async (req, res, next) => {
    try {
        const { address } = req.body;
        const user = await prisma_1.prisma.user.create({
            data: {
                address,
            },
            include: {
                Favorite: true,
            },
        });
        return res.json(user);
    }
    catch (e) {
        return next(e);
    }
};
UserController.edit = async (req, res, next) => {
    try {
        const { address, data } = req.body;
        const user = await prisma_1.prisma.user.update({
            where: {
                address,
            },
            data,
        });
        return res.send(user);
    }
    catch (e) {
        return next(e);
    }
};
UserController.delete = async (req, res, next) => {
    try {
        const { address } = req.body;
        const user = await prisma_1.prisma.user.delete({
            where: {
                address,
            },
        });
        return res.send(user);
    }
    catch (e) {
        return next(e);
    }
};
UserController.find = async (req, res, next) => {
    try {
        const address = req.params.address.toLowerCase().trim();
        const user = await prisma_1.prisma.user.findUnique({
            where: {
                address,
            },
            include: {
                Favorite: true,
            },
        });
        if (!user) {
            const user = await prisma_1.prisma.user.create({
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
    }
    catch (e) {
        return next(e);
    }
};
exports.default = UserController;
