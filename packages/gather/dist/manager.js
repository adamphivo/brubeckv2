"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrubeckData = exports.getPrices = exports.getNodeData = void 0;
const commands_1 = require("./commands");
const format_1 = require("./format");
async function getNodeData(address) {
    try {
        const promises = commands_1.commands.map((p) => p(address));
        const data = await Promise.all(promises);
        const formated = (0, format_1.formatNodeData)(data, address);
        return formated;
    }
    catch (e) {
        console.error(e);
    }
}
exports.getNodeData = getNodeData;
async function getPrices() {
    try {
        const data = await (0, commands_1.fetchPrices)();
        const formated = (0, format_1.formatPrices)(data);
        return formated;
    }
    catch (e) {
        console.error(e);
    }
}
exports.getPrices = getPrices;
async function getBrubeckData() {
    try {
        const data = await (0, commands_1.fetchBrubeckData)();
        const formated = (0, format_1.formatBrubeckStats)(data);
        return formated;
    }
    catch (e) {
        console.error(e);
    }
}
exports.getBrubeckData = getBrubeckData;
