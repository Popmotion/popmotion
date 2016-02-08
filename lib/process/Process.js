'use strict';

exports.__esModule = true;

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
        var _this = this;

        _classCallCheck(this, Process);

        this.id = loop.getProcessId();

        this._onCleanup = function () {
            _this.stop();
            _this.onCleanup = undefined;
        };

        this._onActivate = function () {
            return _this.onCleanup = _this._onCleanup;
        };

        this.set(this.getDefaultProps());
        this.set(props);

        this.isLazy = isLazy || false;
        this.isActive = false;
    }

    Process.prototype.set = function set(props) {
        for (var key in props) {
            if (props.hasOwnProperty(key)) {
                this[key] = props[key];
            }
        }

        return this;
    };

    Process.prototype.start = function start() {
        loop.activate(this.id, this);

        this.onCleanup = this.onActivate = undefined;

        if (this.onStart) {
            this.onStart(this);
        }

        return this;
    };

    Process.prototype.stop = function stop() {
        loop.deactivate(this.id);

        if (this.onStop) {
            this.onStop(this);
        }

        return this;
    };

    Process.prototype.once = function once() {
        this.start();
        this.onActivate = this._onActivate;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQVk7Ozs7Ozs7O0lBRVM7Ozs7OztBQUtqQixhQUxpQixPQUtqQixDQUFZLEtBQVosRUFBbUIsTUFBbkIsRUFBMkI7Ozs4QkFMVixTQUtVOztBQUN2QixhQUFLLEVBQUwsR0FBVSxLQUFLLFlBQUwsRUFBVixDQUR1Qjs7QUFHdkIsYUFBSyxVQUFMLEdBQWtCLFlBQU07QUFDcEIsa0JBQUssSUFBTCxHQURvQjtBQUVwQixrQkFBSyxTQUFMLEdBQWlCLFNBQWpCLENBRm9CO1NBQU4sQ0FISzs7QUFRdkIsYUFBSyxXQUFMLEdBQW1CO21CQUFNLE1BQUssU0FBTCxHQUFpQixNQUFLLFVBQUw7U0FBdkIsQ0FSSTs7QUFVdkIsYUFBSyxHQUFMLENBQVMsS0FBSyxlQUFMLEVBQVQsRUFWdUI7QUFXdkIsYUFBSyxHQUFMLENBQVMsS0FBVCxFQVh1Qjs7QUFhdkIsYUFBSyxNQUFMLEdBQWMsVUFBVSxLQUFWLENBYlM7QUFjdkIsYUFBSyxRQUFMLEdBQWdCLEtBQWhCLENBZHVCO0tBQTNCOztBQUxpQixzQkFzQmpCLG1CQUFJLE9BQU87QUFDUCxhQUFLLElBQUksR0FBSixJQUFXLEtBQWhCLEVBQXVCO0FBQ25CLGdCQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzNCLHFCQUFLLEdBQUwsSUFBWSxNQUFNLEdBQU4sQ0FBWixDQUQyQjthQUEvQjtTQURKOztBQU1BLGVBQU8sSUFBUCxDQVBPOzs7QUF0Qk0sc0JBZ0NqQix5QkFBUTtBQUNKLGFBQUssUUFBTCxDQUFjLEtBQUssRUFBTCxFQUFTLElBQXZCLEVBREk7O0FBR0osYUFBSyxTQUFMLEdBQWlCLEtBQUssVUFBTCxHQUFrQixTQUFsQixDQUhiOztBQUtKLFlBQUksS0FBSyxPQUFMLEVBQWM7QUFDZCxpQkFBSyxPQUFMLENBQWEsSUFBYixFQURjO1NBQWxCOztBQUlBLGVBQU8sSUFBUCxDQVRJOzs7QUFoQ1Msc0JBNENqQix1QkFBTztBQUNILGFBQUssVUFBTCxDQUFnQixLQUFLLEVBQUwsQ0FBaEIsQ0FERzs7QUFHSCxZQUFJLEtBQUssTUFBTCxFQUFhO0FBQ2IsaUJBQUssTUFBTCxDQUFZLElBQVosRUFEYTtTQUFqQjs7QUFJQSxlQUFPLElBQVAsQ0FQRzs7O0FBNUNVLHNCQXNEakIsdUJBQU87QUFDSCxhQUFLLEtBQUwsR0FERztBQUVILGFBQUssVUFBTCxHQUFrQixLQUFLLFdBQUwsQ0FGZjtBQUdILGVBQU8sSUFBUCxDQUhHOzs7Ozs7OztBQXREVSxzQkFpRWpCLDZDQUFrQjtBQUNkLGVBQU8sRUFBUCxDQURjOzs7Ozs7Ozs7O0FBakVELHNCQTRFakIsMkJBQVEsT0FBTztZQUNILEtBQTBCLEtBQTFCLEdBREc7O1lBQ0ksMENBQW1CLGNBRHZCOztBQUVYLFlBQU0sYUFBYSxJQUFJLEtBQUssV0FBTCxDQUFpQixjQUFyQixDQUFiLENBRks7QUFHWCxlQUFPLFdBQVcsR0FBWCxDQUFlLEtBQWYsQ0FBUCxDQUhXOzs7V0E1RUUiLCJmaWxlIjoiUHJvY2Vzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxvb3AgZnJvbSAnLi9sb29wJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvY2VzcyB7XG4gICAgLypcbiAgICAgICAgW29iamVjdF06IFByb3BlcnRpZXNcbiAgICAgICAgW2Jvb2xlYW5dIChvcHRpb25hbCk6IElzIFByb2Nlc3MgbGF6eT9cbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBpc0xhenkpIHtcbiAgICAgICAgdGhpcy5pZCA9IGxvb3AuZ2V0UHJvY2Vzc0lkKCk7XG5cbiAgICAgICAgdGhpcy5fb25DbGVhbnVwID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9vbkFjdGl2YXRlID0gKCkgPT4gdGhpcy5vbkNsZWFudXAgPSB0aGlzLl9vbkNsZWFudXA7XG5cbiAgICAgICAgdGhpcy5zZXQodGhpcy5nZXREZWZhdWx0UHJvcHMoKSk7XG4gICAgICAgIHRoaXMuc2V0KHByb3BzKTtcblxuICAgICAgICB0aGlzLmlzTGF6eSA9IGlzTGF6eSB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldChwcm9wcykge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBsb29wLmFjdGl2YXRlKHRoaXMuaWQsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMub25DbGVhbnVwID0gdGhpcy5vbkFjdGl2YXRlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICh0aGlzLm9uU3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMub25TdGFydCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcblxuICAgICAgICBpZiAodGhpcy5vblN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMub25TdG9wKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25jZSgpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB0aGlzLm9uQWN0aXZhdGUgPSB0aGlzLl9vbkFjdGl2YXRlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBFeHRlbmQgdGhpcyBQcm9jZXNzIHdpdGggbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBQcm9jZXNzJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJuIFtQcm9jZXNzXVxuICAgICovXG4gICAgaW5oZXJpdChwcm9wcykge1xuICAgICAgICBjb25zdCB7IGlkLCAuLi5pbmhlcml0ZWRQcm9wcyB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgbmV3UHJvY2VzcyA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGluaGVyaXRlZFByb3BzKTtcbiAgICAgICAgcmV0dXJuIG5ld1Byb2Nlc3Muc2V0KHByb3BzKTtcbiAgICB9XG59Il19