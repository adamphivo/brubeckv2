"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchBrubeckData = exports.fetchPrices = exports.fetchDataSent = exports.fetchRewards = exports.fetchStats = exports.commands = void 0;
const fetchStats_1 = require("./fetchStats");
Object.defineProperty(exports, "fetchStats", { enumerable: true, get: function () { return fetchStats_1.fetchStats; } });
const fetchRewards_1 = require("./fetchRewards");
Object.defineProperty(exports, "fetchRewards", { enumerable: true, get: function () { return fetchRewards_1.fetchRewards; } });
const fetchDataSent_1 = require("./fetchDataSent");
Object.defineProperty(exports, "fetchDataSent", { enumerable: true, get: function () { return fetchDataSent_1.fetchDataSent; } });
const fetchDataStaked_1 = require("./fetchDataStaked");
const fetchPrices_1 = require("./fetchPrices");
Object.defineProperty(exports, "fetchPrices", { enumerable: true, get: function () { return fetchPrices_1.fetchPrices; } });
const fetchBrubeckData_1 = require("./fetchBrubeckData");
Object.defineProperty(exports, "fetchBrubeckData", { enumerable: true, get: function () { return fetchBrubeckData_1.fetchBrubeckData; } });
exports.commands = [
    fetchStats_1.fetchStats,
    fetchRewards_1.fetchRewards,
    fetchDataSent_1.fetchDataSent,
    fetchDataStaked_1.fetchDataStaked,
];
