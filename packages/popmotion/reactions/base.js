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
var chainable_1 = require("../chainable");
var observer_1 = require("../observer");
var BaseReaction = (function (_super) {
    __extends(BaseReaction, _super);
    function BaseReaction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subscribers = [];
        _this.isActive = true;
        return _this;
    }
    BaseReaction.prototype.complete = function () {
        this.isActive = false;
        this.subscribers.forEach(function (subscriber) { return subscriber.complete(); });
    };
    BaseReaction.prototype.error = function (err) {
        this.isActive = false;
        this.subscribers.forEach(function (subscriber) { return subscriber.error(err); });
    };
    BaseReaction.prototype.update = function (v) {
        if (!this.isActive)
            return;
        for (var i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i].update(v);
        }
    };
    BaseReaction.prototype.subscribe = function (observerCandidate) {
        var _this = this;
        var observer = observer_1.default(observerCandidate, this.props);
        this.subscribers.push(observer);
        return {
            unsubscribe: function () {
                var index = _this.subscribers.indexOf(observer);
                if (index !== -1)
                    _this.subscribers.splice(index, 1);
            }
        };
    };
    return BaseReaction;
}(chainable_1.default));
exports.BaseReaction = BaseReaction;
//# sourceMappingURL=base.js.map