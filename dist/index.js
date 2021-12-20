"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPersonData = exports.sum = void 0;
const slogger_1 = require("./log/slogger");
Object.defineProperty(exports, "logPersonData", { enumerable: true, get: function () { return slogger_1.logPersonData; } });
function sum(x, y) {
    return x + y;
}
exports.sum = sum;
