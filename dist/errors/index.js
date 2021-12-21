"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = void 0;
const InvalidCrendetial_1 = __importDefault(require("./InvalidCrendetial"));
const errors = {
    InvalidCredential: InvalidCrendetial_1.default,
};
exports.errors = errors;
