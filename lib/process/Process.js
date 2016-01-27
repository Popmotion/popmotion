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
        var newProcess = new this.constructor(this);
        return newProcess.set(props);
    };

    return Process;
}();

exports.default = Process;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7SUFDWTs7Ozs7O0lBRVM7Ozs7OztBQUtqQixhQUxpQixPQUtqQixDQUFZLEtBQVosRUFBbUIsTUFBbkIsRUFBMkI7OEJBTFYsU0FLVTs7QUFDdkIsYUFBSyxHQUFMLENBQVMsS0FBSyxlQUFMLEVBQVQsRUFEdUI7QUFFdkIsYUFBSyxHQUFMLENBQVMsS0FBVCxFQUZ1Qjs7QUFJdkIsYUFBSyxNQUFMLEdBQWMsVUFBVSxLQUFWLENBSlM7QUFLdkIsYUFBSyxFQUFMLEdBQVUsS0FBSyxZQUFMLEVBQVYsQ0FMdUI7QUFNdkIsYUFBSyxRQUFMLEdBQWdCLEtBQWhCLENBTnVCO0tBQTNCOztBQUxpQixzQkFjakIsbUJBQUksT0FBTzs7O0FBQ1AsbUJBbEJDLEtBa0JELENBQUssS0FBTCxFQUFZLFVBQUMsS0FBRCxFQUFRLEdBQVI7bUJBQWdCLE1BQUssR0FBTCxJQUFZLEtBQVo7U0FBaEIsQ0FBWixDQURPO0FBRVAsZUFBTyxJQUFQLENBRk87OztBQWRNLHNCQW1CakIseUJBQVE7QUFDSixhQUFLLFFBQUwsR0FBZ0IsSUFBaEIsQ0FESTtBQUVKLGFBQUssUUFBTCxDQUFjLEtBQUssRUFBTCxFQUFTLElBQXZCLEVBRkk7QUFHSixlQUFPLElBQVAsQ0FISTs7O0FBbkJTLHNCQXlCakIsdUJBQU87QUFDSCxhQUFLLFFBQUwsR0FBZ0IsS0FBaEIsQ0FERztBQUVILGFBQUssVUFBTCxDQUFnQixLQUFLLEVBQUwsQ0FBaEIsQ0FGRztBQUdILGVBQU8sSUFBUCxDQUhHOzs7QUF6QlUsc0JBK0JqQix1QkFBTzs7O0FBQ0gsYUFBSyxTQUFMLEdBQWlCLFlBQU07QUFDbkIsbUJBQUssSUFBTCxHQURtQjtBQUVuQixtQkFBSyxTQUFMLEdBQWlCLFNBQWpCLENBRm1CO1NBQU4sQ0FEZDs7QUFNSCxhQUFLLEtBQUwsR0FORzs7QUFRSCxlQUFPLElBQVAsQ0FSRzs7Ozs7Ozs7QUEvQlUsc0JBK0NqQiw2Q0FBa0I7QUFDZCxlQUFPLEVBQVAsQ0FEYzs7Ozs7Ozs7OztBQS9DRCxzQkEwRGpCLDJCQUFRLE9BQU87QUFDWCxZQUFNLGFBQWEsSUFBSSxLQUFLLFdBQUwsQ0FBaUIsSUFBckIsQ0FBYixDQURLO0FBRVgsZUFBTyxXQUFXLEdBQVgsQ0FBZSxLQUFmLENBQVAsQ0FGVzs7O1dBMURFIiwiZmlsZSI6IlByb2Nlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCAqIGFzIGxvb3AgZnJvbSAnLi9sb29wJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvY2VzcyB7XG4gICAgLypcbiAgICAgICAgW29iamVjdF06IFByb3BlcnRpZXNcbiAgICAgICAgW2Jvb2xlYW5dIChvcHRpb25hbCk6IElzIFByb2Nlc3MgbGF6eT9cbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBpc0xhenkpIHtcbiAgICAgICAgdGhpcy5zZXQodGhpcy5nZXREZWZhdWx0UHJvcHMoKSk7XG4gICAgICAgIHRoaXMuc2V0KHByb3BzKTtcblxuICAgICAgICB0aGlzLmlzTGF6eSA9IGlzTGF6eSB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5pZCA9IGxvb3AuZ2V0UHJvY2Vzc0lkKCk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMpIHtcbiAgICAgICAgZWFjaChwcm9wcywgKHZhbHVlLCBrZXkpID0+IHRoaXNba2V5XSA9IHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICBsb29wLmFjdGl2YXRlKHRoaXMuaWQsIHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25jZSgpIHtcbiAgICAgICAgdGhpcy5vbkNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBFeHRlbmQgdGhpcyBQcm9jZXNzIHdpdGggbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBQcm9jZXNzJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJuIFtQcm9jZXNzXVxuICAgICovXG4gICAgaW5oZXJpdChwcm9wcykge1xuICAgICAgICBjb25zdCBuZXdQcm9jZXNzID0gbmV3IHRoaXMuY29uc3RydWN0b3IodGhpcyk7XG4gICAgICAgIHJldHVybiBuZXdQcm9jZXNzLnNldChwcm9wcyk7XG4gICAgfVxufVxuIl19