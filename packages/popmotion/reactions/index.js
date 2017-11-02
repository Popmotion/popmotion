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
var base_1 = require("./base");
var Reaction = (function (_super) {
    __extends(Reaction, _super);
    function Reaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Reaction.prototype.create = function (props) {
        return new Reaction(props);
    };
    return Reaction;
}(base_1.BaseReaction));
exports.Reaction = Reaction;
exports.default = function () { return new Reaction(); };
//# sourceMappingURL=index.js.map