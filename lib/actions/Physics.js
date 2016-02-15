'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Action2 = require('./Action');

var _Action3 = _interopRequireDefault(_Action2);

var _calc = require('../inc/calc');

var _utils = require('../inc/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Physics = function (_Action) {
    _inherits(Physics, _Action);

    function Physics() {
        _classCallCheck(this, Physics);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _Action.call.apply(_Action, [this].concat(args)));

        _this.inactiveFrames = 0;
        _this.calculatesVelocity = true;
        return _this;
    }

    Physics.prototype.onUpdate = function onUpdate(physics, frameStamp, elapsed) {
        this.hasChanged = false;

        for (var i = 0; i < this.numValueKeys; i++) {
            var key = this.valueKeys[i];
            var value = this.values[key];
            var previousValue = value.prev;

            // Apply acceleration
            value.velocity += (0, _calc.speedPerFrame)(value.acceleration, elapsed);

            // Apply friction
            value.velocity *= Math.pow(1 - value.friction, elapsed / 100);

            // Apply spring
            if (value.spring && (0, _utils.isNum)(value.to)) {
                var distanceToTarget = value.to - value.current;
                value.velocity += distanceToTarget * (0, _calc.speedPerFrame)(value.spring, elapsed);
            }

            // Apply latest velocity
            value.current += (0, _calc.speedPerFrame)(value.velocity, elapsed);

            // Check if value has changed
            if (value.current !== previousValue || Math.abs(value.velocity) >= value.stopSpeed || value.spring && value.current !== value.to) {
                this.hasChanged = true;
            }
        }
    };

    Physics.prototype.onFrameEnd = function onFrameEnd() {
        if (this.autoEnd) {
            this.inactiveFrames = this.hasChanged ? 1 : this.inactiveFrames + 1;

            if (this.inactiveFrames >= this.maxInactiveFrames) {
                this.stop();
            }
        }
    };

    /*
        # Get default Simulate props
         @return [object]
    */

    Physics.prototype.getDefaultProps = function getDefaultProps() {
        return _extends({}, _Action.prototype.getDefaultProps.call(this), {
            autoEnd: true,
            maxInactiveFrames: 3
        });
    };

    /*
        # Get default Simulate value props
         @return [object]
    */

    Physics.prototype.getDefaultValue = function getDefaultValue() {
        return _extends({}, _Action.prototype.getDefaultValue.call(this), {
            acceleration: 0, // [number]: Acceleration to apply to value, in units per second
            bounce: 0, // [number]: Factor to multiply velocity by on bounce
            spring: 0, // [number]: Spring strength during 'string'
            stopSpeed: 0.0001, // [number]: Stop simulation under this speed
            friction: 0 // [number]: Friction to apply per frame, 0-1
        });
    };

    /*
        # Get default Simulate value property name
        ## Set values to this when a `value` is not provided as an object
         @return [string]
    */

    Physics.prototype.getDefaultValueProp = function getDefaultValueProp() {
        return 'velocity';
    };

    return Physics;
}(_Action3.default);

exports.default = Physics;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1BoeXNpY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlxQjs7O0FBRWpCLGFBRmlCLE9BRWpCLEdBQXFCOzhCQUZKLFNBRUk7OzBDQUFOOztTQUFNOztxREFDakIsMENBQVMsS0FBVCxHQURpQjs7QUFFakIsY0FBSyxjQUFMLEdBQXNCLENBQXRCLENBRmlCO0FBR2pCLGNBQUssa0JBQUwsR0FBMEIsSUFBMUIsQ0FIaUI7O0tBQXJCOztBQUZpQixzQkFRakIsNkJBQVMsU0FBUyxZQUFZLFNBQVM7QUFDbkMsYUFBSyxVQUFMLEdBQWtCLEtBQWxCLENBRG1DOztBQUduQyxhQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxLQUFLLFlBQUwsRUFBbUIsR0FBdkMsRUFBNEM7QUFDeEMsZ0JBQU0sTUFBTSxLQUFLLFNBQUwsQ0FBZSxDQUFmLENBQU4sQ0FEa0M7QUFFeEMsZ0JBQU0sUUFBUSxLQUFLLE1BQUwsQ0FBWSxHQUFaLENBQVIsQ0FGa0M7QUFHeEMsZ0JBQU0sZ0JBQWdCLE1BQU0sSUFBTjs7O0FBSGtCLGlCQU14QyxDQUFNLFFBQU4sSUFBa0IsVUFwQnJCLGNBb0JxQixDQUFjLE1BQU0sWUFBTixFQUFvQixPQUFsQyxDQUFsQjs7O0FBTndDLGlCQVN4QyxDQUFNLFFBQU4sYUFBbUIsSUFBSSxNQUFNLFFBQU4sRUFBb0IsVUFBVSxHQUFWLENBQTNDOzs7QUFUd0MsZ0JBWXBDLE1BQU0sTUFBTixJQUFnQixXQXpCdkIsTUF5QnVCLENBQU0sTUFBTSxFQUFOLENBQXRCLEVBQWlDO0FBQ2pDLG9CQUFNLG1CQUFtQixNQUFNLEVBQU4sR0FBVyxNQUFNLE9BQU4sQ0FESDtBQUVqQyxzQkFBTSxRQUFOLElBQWtCLG1CQUFtQixVQTVCNUMsY0E0QjRDLENBQWMsTUFBTSxNQUFOLEVBQWMsT0FBNUIsQ0FBbkIsQ0FGZTthQUFyQzs7O0FBWndDLGlCQWtCeEMsQ0FBTSxPQUFOLElBQWlCLFVBaENwQixjQWdDb0IsQ0FBYyxNQUFNLFFBQU4sRUFBZ0IsT0FBOUIsQ0FBakI7OztBQWxCd0MsZ0JBcUJwQyxNQUFNLE9BQU4sS0FBa0IsYUFBbEIsSUFBbUMsS0FBSyxHQUFMLENBQVMsTUFBTSxRQUFOLENBQVQsSUFBNEIsTUFBTSxTQUFOLElBQW9CLE1BQU0sTUFBTixJQUFnQixNQUFNLE9BQU4sS0FBa0IsTUFBTSxFQUFOLEVBQVc7QUFDaEkscUJBQUssVUFBTCxHQUFrQixJQUFsQixDQURnSTthQUFwSTtTQXJCSjs7O0FBWGEsc0JBc0NqQixtQ0FBYTtBQUNULFlBQUksS0FBSyxPQUFMLEVBQWM7QUFDZCxpQkFBSyxjQUFMLEdBQXNCLEtBQUssVUFBTCxHQUFrQixDQUFsQixHQUFzQixLQUFLLGNBQUwsR0FBc0IsQ0FBdEIsQ0FEOUI7O0FBR2QsZ0JBQUksS0FBSyxjQUFMLElBQXVCLEtBQUssaUJBQUwsRUFBd0I7QUFDL0MscUJBQUssSUFBTCxHQUQrQzthQUFuRDtTQUhKOzs7Ozs7OztBQXZDYSxzQkFxRGpCLDZDQUFrQjtBQUNkLDRCQUNPLGtCQUFNLGVBQU47QUFDSCxxQkFBUyxJQUFUO0FBQ0EsK0JBQW1CLENBQW5CO1VBSEosQ0FEYzs7Ozs7Ozs7QUFyREQsc0JBa0VqQiw2Q0FBa0I7QUFDZCw0QkFDTyxrQkFBTSxlQUFOO0FBQ0gsMEJBQWMsQ0FBZDtBQUNBLG9CQUFRLENBQVI7QUFDQSxvQkFBUSxDQUFSO0FBQ0EsdUJBQVcsTUFBWDtBQUNBLHNCQUFVLENBQVY7VUFOSixDQURjOzs7Ozs7Ozs7QUFsRUQsc0JBbUZqQixxREFBc0I7QUFDbEIsZUFBTyxVQUFQLENBRGtCOzs7V0FuRkwiLCJmaWxlIjoiUGh5c2ljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHsgc3BlZWRQZXJGcmFtZSB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGh5c2ljcyBleHRlbmRzIEFjdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVzVmVsb2NpdHkgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHBoeXNpY3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB2YWx1ZS5wcmV2O1xuXG4gICAgICAgICAgICAvLyBBcHBseSBhY2NlbGVyYXRpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IHNwZWVkUGVyRnJhbWUodmFsdWUuYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgZnJpY3Rpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9ICgxIC0gdmFsdWUuZnJpY3Rpb24pICoqIChlbGFwc2VkIC8gMTAwKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgc3ByaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3ByaW5nICYmIGlzTnVtKHZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlVG9UYXJnZXQgPSB2YWx1ZS50byAtIHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqIHNwZWVkUGVyRnJhbWUodmFsdWUuc3ByaW5nLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgbGF0ZXN0IHZlbG9jaXR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ICs9IHNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT09IHByZXZpb3VzVmFsdWUgfHwgTWF0aC5hYnModmFsdWUudmVsb2NpdHkpID49IHZhbHVlLnN0b3BTcGVlZCB8fCAodmFsdWUuc3ByaW5nICYmIHZhbHVlLmN1cnJlbnQgIT09IHZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZyYW1lRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvRW5kKSB7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gdGhpcy5oYXNDaGFuZ2VkID8gMSA6IHRoaXMuaW5hY3RpdmVGcmFtZXMgKyAxO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+PSB0aGlzLm1heEluYWN0aXZlRnJhbWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHByb3BzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFByb3BzKCksXG4gICAgICAgICAgICBhdXRvRW5kOiB0cnVlLFxuICAgICAgICAgICAgbWF4SW5hY3RpdmVGcmFtZXM6IDNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHZhbHVlIHByb3BzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFZhbHVlKCksXG4gICAgICAgICAgICBhY2NlbGVyYXRpb246IDAsIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICAgICAgICAgIGJvdW5jZTogMCwgLy8gW251bWJlcl06IEZhY3RvciB0byBtdWx0aXBseSB2ZWxvY2l0eSBieSBvbiBib3VuY2VcbiAgICAgICAgICAgIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgICAgICAgICAgIHN0b3BTcGVlZDogMC4wMDAxLCAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWUsIDAtMVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdmFsdWVzIHRvIHRoaXMgd2hlbiBhIGB2YWx1ZWAgaXMgbm90IHByb3ZpZGVkIGFzIGFuIG9iamVjdFxuXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndmVsb2NpdHknO1xuICAgIH1cbn1cbiJdfQ==