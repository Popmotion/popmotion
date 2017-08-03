"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HAS_PERFORMANCE_NOW = (typeof performance !== 'undefined' && performance.now);
exports.currentTime = HAS_PERFORMANCE_NOW ? function () { return performance.now(); } : function () { return new Date().getTime(); };
//# sourceMappingURL=utils.js.map