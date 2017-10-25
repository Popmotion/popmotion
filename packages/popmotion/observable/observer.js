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
var noop = function () { return undefined; };
var defaultObserver = function (observer) { return (__assign({ complete: noop, error: noop, update: noop }, observer)); };
var createDefaultObserver = function (observerCandidate) { return (typeof observerCandidate === 'function')
    ? defaultObserver({ update: observerCandidate })
    : defaultObserver(observerCandidate); };
var createObserver = function (observerCandidate, _a) {
    var middleware = _a.middleware;
    var isActive = true;
    var providedObserver = createDefaultObserver(observerCandidate);
    var update = providedObserver.update;
    var observer = {
        complete: function () {
            isActive = false;
            providedObserver.complete();
        },
        error: function (err) {
            isActive = false;
            providedObserver.error(err);
        },
        update: function (v) {
            if (!isActive)
                return;
            update(v);
        }
    };
    var numMiddleware = middleware ? middleware.length : 0;
    if (numMiddleware) {
        middleware.forEach(function (m) {
            update = m(update, observer.complete);
        });
    }
    return observer;
};
exports.default = createObserver;
//# sourceMappingURL=observer.js.map