"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSlogger = void 0;
function createSlogger() {
    function logPersonData({ name, age, email }) {
        console.log(`Hello, ${name}. I'will sent message to email ${email}. Happy birthday to ${age} years`);
    }
    return {
        logPersonData,
    };
}
exports.createSlogger = createSlogger;
