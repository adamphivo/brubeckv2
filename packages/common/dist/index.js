"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.send = exports.formatNumberWithSpaces = exports.cleanInput = void 0;
const send_1 = __importDefault(require("./send"));
exports.send = send_1.default;
const cleanInput = (input) => {
    return input.trim().toLowerCase();
};
exports.cleanInput = cleanInput;
function formatNumberWithSpaces(input) {
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
exports.formatNumberWithSpaces = formatNumberWithSpaces;
