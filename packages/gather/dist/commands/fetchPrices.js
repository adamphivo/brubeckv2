"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPrices = void 0;
const config_1 = require("../config");
const axios_1 = __importDefault(require("axios"));
async function fetchPrices() {
    try {
        const requests = config_1.constants.PAIRS.map((symbol) => axios_1.default
            .get(`${config_1.constants.BINANCE_PRICE_TICKER_URL}${symbol}`)
            .then((res) => res.data));
        const data = await Promise.all(requests);
        return data;
    }
    catch (e) {
        throw e;
    }
}
exports.fetchPrices = fetchPrices;
