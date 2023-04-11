"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const services_1 = require("./services");
const headers = {
    "Content-Type": "application/json",
};
async function send(service, method, endpoint, body) {
    try {
        const found = services_1.services.find((i) => i.name === service);
        const url = found && `http://localhost:${found.port}${endpoint}`;
        if (url) {
            switch (method) {
                case "GET": {
                    const { data } = await axios_1.default.get(url, { headers });
                    return data;
                }
                case "POST": {
                    const { data } = await axios_1.default.post(url, body, { headers });
                    return data;
                }
                case "DELETE": {
                    const { data } = await axios_1.default.delete(url, { headers });
                    return data;
                }
                case "PATCH": {
                    const { data } = await axios_1.default.patch(url, body, { headers });
                    return data;
                }
                default: {
                    throw Error("Send : Unknown service");
                }
            }
        }
        else {
            throw Error("Send : Unknown URL");
        }
    }
    catch (e) {
        console.error(e);
    }
}
exports.default = send;
