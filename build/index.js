"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resizeImgRoute_1 = __importDefault(require("./Routes/resizeImgRoute"));
const app = (0, express_1.default)();
app.use('/', resizeImgRoute_1.default);
module.exports = app;
