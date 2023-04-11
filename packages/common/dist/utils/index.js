"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortenEthAddress = void 0;
function shortenEthAddress(address) {
    const start = address.slice(0, 3);
    const end = address.slice(-3);
    return `${start} ... ${end}`;
}
exports.shortenEthAddress = shortenEthAddress;
