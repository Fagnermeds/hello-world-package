"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCredential = void 0;
class InvalidCredential extends Error {
    constructor(message) {
        super(message);
    }
}
exports.InvalidCredential = InvalidCredential;
