"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const routers_1 = __importDefault(require("./routers"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Logger
app.use((0, morgan_1.default)("common"));
// Router
app.use("/", routers_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.name, message: err.message });
});
exports.default = app;
