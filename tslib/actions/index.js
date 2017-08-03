"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var framesync_1 = require("framesync");
var calc_1 = require("inc/calc");
var Action = (function () {
    function Action(props) {
        if (props === void 0) { props = {
            passive: false
        }; }
        var _this = this;
        this.lastUpdated = 0;
        this.numListeners = 0;
        this._isActive = false;
        this.scheduledUpdate = function () {
            _this.lastUpdated = framesync_1.timeSinceLastFrame();
            _this.prev = _this.current;
            var _a = _this.props, onUpdate = _a.onUpdate, passive = _a.passive;
            if (_this.update) {
                _this.current = _this.update(_this.current);
            }
            if (onUpdate) {
                if (onUpdate instanceof Action) {
                    onUpdate.set(_this.get());
                }
                else {
                    onUpdate(_this.get(), _this);
                }
            }
            _this.fireListeners();
            if (!passive && _this._isActive) {
                framesync_1.onFrameUpdate(_this.scheduledUpdate);
            }
            if (_this.isActionComplete && _this.isActionComplete()) {
                _this.complete();
            }
            return _this;
        };
        this.setProps(props);
        this.prev = this.current = props.current || props.from || 0;
    }
    Action.prototype.start = function () {
        var _a = this.props, onStart = _a.onStart, _onStart = _a._onStart, passive = _a.passive;
        if (!passive) {
            this._isActive = true;
            framesync_1.onFrameUpdate(this.scheduledUpdate);
        }
        if (this.onStart)
            this.onStart();
        if (onStart)
            onStart(this);
        if (_onStart)
            _onStart(this);
        return this;
    };
    Action.prototype.stop = function () {
        var _a = this.props, onStop = _a.onStop, _onStop = _a._onStop, passive = _a.passive;
        if (!passive) {
            this._isActive = false;
            framesync_1.cancelOnFrameUpdate(this.scheduledUpdate);
        }
        if (this.onStop)
            this.onStop();
        if (onStop)
            onStop(this);
        if (_onStop)
            _onStop(this);
        return this;
    };
    Action.prototype.complete = function () {
        var _a = this.props, onComplete = _a.onComplete, _onComplete = _a._onComplete;
        if (this.onComplete)
            this.onComplete();
        if (onComplete)
            onComplete(this);
        if (_onComplete)
            _onComplete(this);
        return this;
    };
    Action.prototype.setProps = function (_a) {
        var onUpdate = _a.onUpdate, props = __rest(_a, ["onUpdate"]);
        this.props = __assign({}, this.props, props);
        if (onUpdate)
            this.output(onUpdate);
        return this;
    };
    Action.prototype.output = function (func) {
        this.props.onUpdate = func;
        if (func instanceof Action) {
            func.registerAction(this);
            func.set(this.get());
        }
        return this;
    };
    Action.prototype.get = function () {
        var transform = this.props.transform;
        return transform ? transform(this.current) : this.current;
    };
    Action.prototype.getBeforeTransform = function () {
        return this.current;
    };
    Action.prototype.set = function (v) {
        this.current = v;
        return this;
    };
    Action.prototype.getProp = function (key) {
        return this.props[key];
    };
    Action.prototype.getVelocity = function () {
        return calc_1.speedPerSecond(this.current - this.prev, this.lastUpdated);
    };
    Action.prototype.isActive = function () {
        return this._isActive;
    };
    Action.prototype.addListener = function (listener) {
        this.listeners = this.listeners || [];
        this.numListeners = this.numListeners || 0;
        if (this.listeners.indexOf(listener) === -1) {
            this.listeners.push(listener);
            this.numListeners++;
        }
        return this;
    };
    Action.prototype.removeListener = function (listener) {
        var listenerIndex = (this.listeners) ? this.listeners.indexOf(listener) : -1;
        if (listenerIndex !== -1) {
            this.numListeners--;
            this.listeners.splice(listenerIndex, 1);
        }
        return this;
    };
    Action.prototype.fireListeners = function () {
        var current = this.get();
        for (var i = 0; i < this.numListeners; i++) {
            this.listeners[i](current, this);
        }
        return this;
    };
    return Action;
}());
exports.default = Action;
;
//# sourceMappingURL=index.js.map