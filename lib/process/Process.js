'use strict';

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

        if (this.onStart) {
            this.onStart(this);
        }

        return this;
    };

    Process.prototype.stop = function stop() {
        this.isActive = false;
        loop.deactivate(this.id);

        if (this.onStop) {
            this.onStop(this);
        }

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
        var newProcess = new this.constructor(this);
        return newProcess.set(props);
    };

    return Process;
}();

exports.default = Process;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFDWTs7Ozs7O0lBRVM7Ozs7OztBQUtqQixhQUxpQixPQUtqQixDQUFZLEtBQVosRUFBbUIsTUFBbkIsRUFBMkI7OEJBTFYsU0FLVTs7QUFDdkIsYUFBSyxHQUFMLENBQVMsS0FBSyxlQUFMLEVBQVQsRUFEdUI7QUFFdkIsYUFBSyxHQUFMLENBQVMsS0FBVCxFQUZ1Qjs7QUFJdkIsYUFBSyxNQUFMLEdBQWMsVUFBVSxLQUFWLENBSlM7QUFLdkIsYUFBSyxFQUFMLEdBQVUsS0FBSyxZQUFMLEVBQVYsQ0FMdUI7QUFNdkIsYUFBSyxRQUFMLEdBQWdCLEtBQWhCLENBTnVCO0tBQTNCOztBQUxpQixzQkFjakIsbUJBQUksT0FBTzs7O0FBQ1AsbUJBbEJDLEtBa0JELENBQUssS0FBTCxFQUFZLFVBQUMsS0FBRCxFQUFRLEdBQVI7bUJBQWdCLE1BQUssR0FBTCxJQUFZLEtBQVo7U0FBaEIsQ0FBWixDQURPO0FBRVAsZUFBTyxJQUFQLENBRk87OztBQWRNLHNCQW1CakIseUJBQVE7QUFDSixhQUFLLFFBQUwsR0FBZ0IsSUFBaEIsQ0FESTtBQUVKLGFBQUssUUFBTCxDQUFjLEtBQUssRUFBTCxFQUFTLElBQXZCLEVBRkk7O0FBSUosWUFBSSxLQUFLLE9BQUwsRUFBYztBQUNkLGlCQUFLLE9BQUwsQ0FBYSxJQUFiLEVBRGM7U0FBbEI7O0FBSUEsZUFBTyxJQUFQLENBUkk7OztBQW5CUyxzQkE4QmpCLHVCQUFPO0FBQ0gsYUFBSyxRQUFMLEdBQWdCLEtBQWhCLENBREc7QUFFSCxhQUFLLFVBQUwsQ0FBZ0IsS0FBSyxFQUFMLENBQWhCLENBRkc7O0FBSUgsWUFBSSxLQUFLLE1BQUwsRUFBYTtBQUNiLGlCQUFLLE1BQUwsQ0FBWSxJQUFaLEVBRGE7U0FBakI7O0FBSUEsZUFBTyxJQUFQLENBUkc7OztBQTlCVSxzQkF5Q2pCLHVCQUFPOzs7QUFDSCxhQUFLLFNBQUwsR0FBaUIsWUFBTTtBQUNuQixtQkFBSyxJQUFMLEdBRG1CO0FBRW5CLG1CQUFLLFNBQUwsR0FBaUIsU0FBakIsQ0FGbUI7U0FBTixDQURkOztBQU1ILGFBQUssS0FBTCxHQU5HOztBQVFILGVBQU8sSUFBUCxDQVJHOzs7Ozs7OztBQXpDVSxzQkF5RGpCLDZDQUFrQjtBQUNkLGVBQU8sRUFBUCxDQURjOzs7Ozs7Ozs7O0FBekRELHNCQW9FakIsMkJBQVEsT0FBTztBQUNYLFlBQU0sYUFBYSxJQUFJLEtBQUssV0FBTCxDQUFpQixJQUFyQixDQUFiLENBREs7QUFFWCxlQUFPLFdBQVcsR0FBWCxDQUFlLEtBQWYsQ0FBUCxDQUZXOzs7V0FwRUUiLCJmaWxlIjoiUHJvY2Vzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0ICogYXMgbG9vcCBmcm9tICcuL2xvb3AnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9jZXNzIHtcbiAgICAvKlxuICAgICAgICBbb2JqZWN0XTogUHJvcGVydGllc1xuICAgICAgICBbYm9vbGVhbl0gKG9wdGlvbmFsKTogSXMgUHJvY2VzcyBsYXp5P1xuICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMsIGlzTGF6eSkge1xuICAgICAgICB0aGlzLnNldCh0aGlzLmdldERlZmF1bHRQcm9wcygpKTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuaXNMYXp5ID0gaXNMYXp5IHx8IGZhbHNlO1xuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRQcm9jZXNzSWQoKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldChwcm9wcykge1xuICAgICAgICBlYWNoKHByb3BzLCAodmFsdWUsIGtleSkgPT4gdGhpc1trZXldID0gdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxvb3AuYWN0aXZhdGUodGhpcy5pZCwgdGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5vblN0YXJ0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG5cbiAgICAgICAgaWYgKHRoaXMub25TdG9wKSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RvcCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uY2UoKSB7XG4gICAgICAgIHRoaXMub25DbGVhbnVwID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN0YXJ0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgRXh0ZW5kIHRoaXMgUHJvY2VzcyB3aXRoIG5ldyBwcm9wZXJ0aWVzXG4gICAgICAgICMjIFJldHVybnMgbmV3IGluc3RhbmNlIG9mIHRoaXMgUHJvY2VzcydzIGBwcm90b3R5cGVgIHdpdGggZXhpc3RpbmcgYW5kIG5ldyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybiBbUHJvY2Vzc11cbiAgICAqL1xuICAgIGluaGVyaXQocHJvcHMpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvY2VzcyA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMpO1xuICAgICAgICByZXR1cm4gbmV3UHJvY2Vzcy5zZXQocHJvcHMpO1xuICAgIH1cbn1cbiJdfQ==