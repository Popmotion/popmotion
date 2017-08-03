"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.speedPerFrame = function (xps, frameDuration) {
    return xps / (1000 / frameDuration);
};
exports.speedPerSecond = function (velocity, frameDuration) {
    if (frameDuration === void 0) { frameDuration = 0; }
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
};
//# sourceMappingURL=calc.js.map