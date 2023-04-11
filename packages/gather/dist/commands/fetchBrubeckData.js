"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchBrubeckData = void 0;
const config_1 = require("../config");
const axios_1 = __importDefault(require("axios"));
async function fetchBrubeckData() {
    try {
        const urls = [config_1.constants.BRUBECK_APY, config_1.constants.BRUBECK_STATS];
        const requests = urls.map((url) => axios_1.default.get(url).then((res) => res.data));
        const data = await Promise.all(requests);
        return data;
    }
    catch (e) {
        throw e;
    }
}
exports.fetchBrubeckData = fetchBrubeckData;
