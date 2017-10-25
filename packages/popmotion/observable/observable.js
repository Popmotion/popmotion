"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var transformers_1 = require("../transformers");
var observable = function (props) {
    if (props === void 0) { props = {}; }
    return ({
        pipe: function () {
            var funcs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                funcs[_i] = arguments[_i];
            }
            var pipedUpdate = funcs.length === 1 ? funcs[0] : transformers_1.pipe.apply(void 0, funcs);
            var middleware = function (update) { return function (v) { return update(pipedUpdate(v)); }; };
            return this.applyMiddleware(middleware);
        },
        while: function (predicate) {
            var middleware = function (update, complete) { return function (v) {
                return predicate(v) ? update(v) : complete();
            }; };
            return this.applyMiddleware(middleware);
        }
    });
};
exports.default = observable;
exports.applyMiddleware = function (props, middleware) { return (__assign({}, props, { middleware: props.middleware ? [middleware].concat(props.middleware) : [middleware] })); };
//# sourceMappingURL=observable.js.map