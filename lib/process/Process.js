'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _utils = require('../inc/utils');

var _loop = require('./loop');

var loop = _interopRequireWildcard(_loop);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Process = function () {
    /*
        [object]: Properties
        [boolean] (optional): Is Process lazy?
    */

    function Process(props, isLazy) {
        _classCallCheck(this, Process);

        this.set(this.getDefaultProps());
        this.set(props);

        this.isLazy = isLazy || false;
        this.id = loop.getProcessId();
        this.isActive = false;
    }

    Process.prototype.set = function set(props) {
        var _this = this;

        (0, _utils.each)(props, function (value, key) {
            return _this[key] = value;
        });
        return this;
    };

    Process.prototype.start = function start() {
        this.isActive = true;
        loop.activate(this.id, this);
        return this;
    };

    Process.prototype.stop = function stop() {
        this.isActive = false;
        loop.deactivate(this.id);
        return this;
    };

    Process.prototype.once = function once() {
        var _this2 = this;

        this.onCleanup = function () {
            _this2.stop();
            _this2.onCleanup = undefined;
        };

        this.start();

        return this;
    };

    /*
        # Get default Action properties
         @return [object]
    */

    Process.prototype.getDefaultProps = function getDefaultProps() {
        return {};
    };

    /*
        # Extend this Process with new properties
        ## Returns new instance of this Process's `prototype` with existing and new properties
         @param [object] (optional)
        @return [Process]
    */

    Process.prototype.inherit = function inherit(props) {
        return new this.constructor(_extends({}, this, { props: props }));
    };

    return Process;
}();

exports.default = Process;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNZOzs7Ozs7SUFFUzs7Ozs7O0FBS2pCLGFBTGlCLE9BS2pCLENBQVksS0FBWixFQUFtQixNQUFuQixFQUEyQjs4QkFMVixTQUtVOztBQUN2QixhQUFLLEdBQUwsQ0FBUyxLQUFLLGVBQUwsRUFBVCxFQUR1QjtBQUV2QixhQUFLLEdBQUwsQ0FBUyxLQUFULEVBRnVCOztBQUl2QixhQUFLLE1BQUwsR0FBYyxVQUFVLEtBQVYsQ0FKUztBQUt2QixhQUFLLEVBQUwsR0FBVSxLQUFLLFlBQUwsRUFBVixDQUx1QjtBQU12QixhQUFLLFFBQUwsR0FBZ0IsS0FBaEIsQ0FOdUI7S0FBM0I7O0FBTGlCLHNCQWNqQixtQkFBSSxPQUFPOzs7QUFDUCxtQkFsQkMsS0FrQkQsQ0FBSyxLQUFMLEVBQVksVUFBQyxLQUFELEVBQVEsR0FBUjttQkFBZ0IsTUFBSyxHQUFMLElBQVksS0FBWjtTQUFoQixDQUFaLENBRE87QUFFUCxlQUFPLElBQVAsQ0FGTzs7O0FBZE0sc0JBbUJqQix5QkFBUTtBQUNKLGFBQUssUUFBTCxHQUFnQixJQUFoQixDQURJO0FBRUosYUFBSyxRQUFMLENBQWMsS0FBSyxFQUFMLEVBQVMsSUFBdkIsRUFGSTtBQUdKLGVBQU8sSUFBUCxDQUhJOzs7QUFuQlMsc0JBeUJqQix1QkFBTztBQUNILGFBQUssUUFBTCxHQUFnQixLQUFoQixDQURHO0FBRUgsYUFBSyxVQUFMLENBQWdCLEtBQUssRUFBTCxDQUFoQixDQUZHO0FBR0gsZUFBTyxJQUFQLENBSEc7OztBQXpCVSxzQkErQmpCLHVCQUFPOzs7QUFDSCxhQUFLLFNBQUwsR0FBaUIsWUFBTTtBQUNuQixtQkFBSyxJQUFMLEdBRG1CO0FBRW5CLG1CQUFLLFNBQUwsR0FBaUIsU0FBakIsQ0FGbUI7U0FBTixDQURkOztBQU1ILGFBQUssS0FBTCxHQU5HOztBQVFILGVBQU8sSUFBUCxDQVJHOzs7Ozs7OztBQS9CVSxzQkErQ2pCLDZDQUFrQjtBQUNkLGVBQU8sRUFBUCxDQURjOzs7Ozs7Ozs7O0FBL0NELHNCQTBEakIsMkJBQVEsT0FBTztBQUNYLGVBQU8sSUFBSSxLQUFLLFdBQUwsY0FBc0IsUUFBTSxlQUFoQyxDQUFQLENBRFc7OztXQTFERTs7OztBQTZEcEIiLCJmaWxlIjoiUHJvY2Vzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0ICogYXMgbG9vcCBmcm9tICcuL2xvb3AnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9jZXNzIHtcbiAgICAvKlxuICAgICAgICBbb2JqZWN0XTogUHJvcGVydGllc1xuICAgICAgICBbYm9vbGVhbl0gKG9wdGlvbmFsKTogSXMgUHJvY2VzcyBsYXp5P1xuICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMsIGlzTGF6eSkge1xuICAgICAgICB0aGlzLnNldCh0aGlzLmdldERlZmF1bHRQcm9wcygpKTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuaXNMYXp5ID0gaXNMYXp5IHx8IGZhbHNlO1xuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRQcm9jZXNzSWQoKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldChwcm9wcykge1xuICAgICAgICBlYWNoKHByb3BzLCAodmFsdWUsIGtleSkgPT4gdGhpc1trZXldID0gdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxvb3AuYWN0aXZhdGUodGhpcy5pZCwgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbmNlKCkge1xuICAgICAgICB0aGlzLm9uQ2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdGFydCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHByb3BlcnRpZXNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIFByb2Nlc3Mgd2l0aCBuZXcgcHJvcGVydGllc1xuICAgICAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIFByb2Nlc3MncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cbiAgICBpbmhlcml0KHByb3BzKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih7IC4uLnRoaXMsIHByb3BzIH0pO1xuICAgIH1cbn07XG4iXX0=