"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidCredential extends Error {
    constructor(message) {
        super(message);
    }
}
exports.default = InvalidCredential;
