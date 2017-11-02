"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var framesync_1 = require("framesync");
var calc_1 = require("../calc");
var base_1 = require("./base");
var ValueReaction = (function (_super) {
    __extends(ValueReaction, _super);
    function ValueReaction(props) {
        var _this = _super.call(this, props) || this;
        _this.prev = 0;
        _this.current = 0;
        _this.lastUpdated = 0;
        _this.timeDelta = 0;
        _this.prev = _this.current = props.value || 0;
        return _this;
    }
    ValueReaction.prototype.create = function (props) {
        return new ValueReaction(props);
    };
    ValueReaction.prototype.get = function () {
        return this.current;
    };
    ValueReaction.prototype.getVelocity = function () {
        return calc_1.speedPerSecond(this.current - this.prev, this.timeDelta);
    };
    ValueReaction.prototype.update = function (v) {
        _super.prototype.update.call(this, v);
        this.prev = this.current;
        this.current = v;
        this.lastUpdated = framesync_1.currentFrameTime();
        this.timeDelta = framesync_1.timeSinceLastFrame();
    };
    ValueReaction.prototype.subscribe = function (observerCandidate) {
        var sub = _super.prototype.subscribe.call(this, observerCandidate);
        this.update(this.current);
        return sub;
    };
    return ValueReaction;
}(base_1.BaseReaction));
exports.ValueReaction = ValueReaction;
exports.default = function (value) { return new ValueReaction({ value: value }); };
//# sourceMappingURL=value.js.map