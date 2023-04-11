"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchStats = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
async function fetchStats(address) {
    try {
        const response = await axios_1.default.get(`${config_1.constants.BRUBECK_NODE_STATS_BASE}${address}`);
        return response.data;
    }
    catch (e) {
        console.error(e);
    }
}
exports.fetchStats = fetchStats;
