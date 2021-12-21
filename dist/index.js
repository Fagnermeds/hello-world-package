"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = exports.slogger = void 0;
const slogger_1 = require("./log/slogger");
const errors_1 = require("./errors");
Object.defineProperty(exports, "errors", { enumerable: true, get: function () { return errors_1.errors; } });
const slogger = (0, slogger_1.createSlogger)();
exports.slogger = slogger;
