'use strict';

exports.__esModule = true;

var _utils = require('../inc/utils');

var _loop = require('./loop');

var loop = _interopRequireWildcard(_loop);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
        var id = this.id;

        var inheritedProps = _objectWithoutProperties(this, ['id']);

        var newProcess = new this.constructor(inheritedProps);
        return newProcess.set(props);
    };

    return Process;
}();

exports.default = Process;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFDWTs7Ozs7Ozs7SUFFUzs7Ozs7O0FBS2pCLGFBTGlCLE9BS2pCLENBQVksS0FBWixFQUFtQixNQUFuQixFQUEyQjs4QkFMVixTQUtVOztBQUN2QixhQUFLLEdBQUwsQ0FBUyxLQUFLLGVBQUwsRUFBVCxFQUR1QjtBQUV2QixhQUFLLEdBQUwsQ0FBUyxLQUFULEVBRnVCOztBQUl2QixhQUFLLE1BQUwsR0FBYyxVQUFVLEtBQVYsQ0FKUztBQUt2QixhQUFLLEVBQUwsR0FBVSxLQUFLLFlBQUwsRUFBVixDQUx1QjtBQU12QixhQUFLLFFBQUwsR0FBZ0IsS0FBaEIsQ0FOdUI7S0FBM0I7O0FBTGlCLHNCQWNqQixtQkFBSSxPQUFPOzs7QUFDUCxtQkFsQkMsS0FrQkQsQ0FBSyxLQUFMLEVBQVksVUFBQyxLQUFELEVBQVEsR0FBUjttQkFBZ0IsTUFBSyxHQUFMLElBQVksS0FBWjtTQUFoQixDQUFaLENBRE87QUFFUCxlQUFPLElBQVAsQ0FGTzs7O0FBZE0sc0JBbUJqQix5QkFBUTtBQUNKLGFBQUssUUFBTCxHQUFnQixJQUFoQixDQURJO0FBRUosYUFBSyxRQUFMLENBQWMsS0FBSyxFQUFMLEVBQVMsSUFBdkIsRUFGSTs7QUFJSixZQUFJLEtBQUssT0FBTCxFQUFjO0FBQ2QsaUJBQUssT0FBTCxDQUFhLElBQWIsRUFEYztTQUFsQjs7QUFJQSxlQUFPLElBQVAsQ0FSSTs7O0FBbkJTLHNCQThCakIsdUJBQU87QUFDSCxhQUFLLFFBQUwsR0FBZ0IsS0FBaEIsQ0FERztBQUVILGFBQUssVUFBTCxDQUFnQixLQUFLLEVBQUwsQ0FBaEIsQ0FGRzs7QUFJSCxZQUFJLEtBQUssTUFBTCxFQUFhO0FBQ2IsaUJBQUssTUFBTCxDQUFZLElBQVosRUFEYTtTQUFqQjs7QUFJQSxlQUFPLElBQVAsQ0FSRzs7O0FBOUJVLHNCQXlDakIsdUJBQU87OztBQUNILGFBQUssU0FBTCxHQUFpQixZQUFNO0FBQ25CLG1CQUFLLElBQUwsR0FEbUI7QUFFbkIsbUJBQUssU0FBTCxHQUFpQixTQUFqQixDQUZtQjtTQUFOLENBRGQ7O0FBTUgsYUFBSyxLQUFMLEdBTkc7O0FBUUgsZUFBTyxJQUFQLENBUkc7Ozs7Ozs7O0FBekNVLHNCQXlEakIsNkNBQWtCO0FBQ2QsZUFBTyxFQUFQLENBRGM7Ozs7Ozs7Ozs7QUF6REQsc0JBb0VqQiwyQkFBUSxPQUFPO1lBQ0gsS0FBMEIsS0FBMUIsR0FERzs7WUFDSSwwQ0FBbUIsY0FEdkI7O0FBRVgsWUFBTSxhQUFhLElBQUksS0FBSyxXQUFMLENBQWlCLGNBQXJCLENBQWIsQ0FGSztBQUdYLGVBQU8sV0FBVyxHQUFYLENBQWUsS0FBZixDQUFQLENBSFc7OztXQXBFRSIsImZpbGUiOiJQcm9jZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgKiBhcyBsb29wIGZyb20gJy4vbG9vcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2Nlc3Mge1xuICAgIC8qXG4gICAgICAgIFtvYmplY3RdOiBQcm9wZXJ0aWVzXG4gICAgICAgIFtib29sZWFuXSAob3B0aW9uYWwpOiBJcyBQcm9jZXNzIGxhenk/XG4gICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgaXNMYXp5KSB7XG4gICAgICAgIHRoaXMuc2V0KHRoaXMuZ2V0RGVmYXVsdFByb3BzKCkpO1xuICAgICAgICB0aGlzLnNldChwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5pc0xhenkgPSBpc0xhenkgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMuaWQgPSBsb29wLmdldFByb2Nlc3NJZCgpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0KHByb3BzKSB7XG4gICAgICAgIGVhY2gocHJvcHMsICh2YWx1ZSwga2V5KSA9PiB0aGlzW2tleV0gPSB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5vblN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RhcnQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcblxuICAgICAgICBpZiAodGhpcy5vblN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMub25TdG9wKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25jZSgpIHtcbiAgICAgICAgdGhpcy5vbkNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBFeHRlbmQgdGhpcyBQcm9jZXNzIHdpdGggbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBQcm9jZXNzJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJuIFtQcm9jZXNzXVxuICAgICovXG4gICAgaW5oZXJpdChwcm9wcykge1xuICAgICAgICBjb25zdCB7IGlkLCAuLi5pbmhlcml0ZWRQcm9wcyB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgbmV3UHJvY2VzcyA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGluaGVyaXRlZFByb3BzKTtcbiAgICAgICAgcmV0dXJuIG5ld1Byb2Nlc3Muc2V0KHByb3BzKTtcbiAgICB9XG59XG4iXX0=