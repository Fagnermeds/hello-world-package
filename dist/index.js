"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCredential = exports.slogger = void 0;
const slogger_1 = require("./log/slogger");
const InvalidCrendetial_1 = require("./errors/InvalidCrendetial");
Object.defineProperty(exports, "InvalidCredential", { enumerable: true, get: function () { return InvalidCrendetial_1.InvalidCredential; } });
const slogger = (0, slogger_1.createSlogger)();
exports.slogger = slogger;
