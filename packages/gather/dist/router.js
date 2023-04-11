"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const manager_1 = require("./manager");
const common_1 = require("@brubeckscan/common");
const cache_1 = require("./cache");
const octokit_1 = require("./octokit");
const router = express_1.default.Router();
exports.router = router;
router.get("/getBrubeckData", async (req, res, next) => {
    try {
        const data = await (0, manager_1.getBrubeckData)();
        if (data) {
            return res.json(data);
        }
        else {
            next(Error("Error"));
        }
    }
    catch (e) {
        next(e);
    }
});
router.get("/getNodeData/:address", async (req, res, next) => {
    try {
        // Input validation
        const address = (0, common_1.cleanInput)(req.params.address);
        // Cache handle
        const cached = cache_1.gatherCache.get(`nodeData/${address}`);
        if (cached)
            return res.json(cached);
        const data = await (0, manager_1.getNodeData)(address);
        if (data) {
            cache_1.gatherCache.set(`nodeData/${address}`, data, 60);
            return res.json(data);
        }
        else {
            next(Error("Error"));
        }
    }
    catch (e) {
        next(e);
    }
});
router.get("/getMultipleNodesData", async (req, res, next) => {
    try {
        const { nodes } = req.body;
        const promises = nodes.map((i) => (0, manager_1.getNodeData)(i));
        const data = await Promise.all(promises);
        return res.json(data);
    }
    catch (e) {
        next(e);
    }
});
router.get("/getPrices", async (req, res, next) => {
    try {
        const data = await (0, manager_1.getPrices)();
        return res.json(data);
    }
    catch (e) {
        next(e);
    }
});
router.get("/getAppVersion", async (req, res, next) => {
    try {
        const cached = cache_1.gatherCache.get("appLatestRelease");
        if (cached)
            return res.json(cached);
        const latestRelease = await octokit_1.octokit.rest.repos.getLatestRelease({
            owner: "adamphivo",
            repo: "brubeckscan",
        });
        if (latestRelease) {
            cache_1.gatherCache.set("appLatestRelease", latestRelease.data, 60 * 30);
            return res.json(latestRelease.data);
        }
    }
    catch (e) {
        next(e);
    }
});
router.get("/clearCache", async (req, res, next) => {
    const keys = cache_1.gatherCache.keys();
    cache_1.gatherCache.del(keys);
    return res.send();
});
