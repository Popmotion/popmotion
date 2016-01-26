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
        return _this;
    }

    Physics.prototype.onUpdate = function onUpdate(physics, frameStamp, elapsed) {
        var _this2 = this;

        this.hasChanged = false;

        (0, _utils.each)(this.values, function (value, key) {
            var previousValue = value.current;

            // Apply acceleration
            value.velocity += (0, _calc.speedPerFrame)(value.force, elapsed);

            // Apply friction
            value.velocity *= Math.pow(1 - value.friction, elapsed / 10);

            // Apply spring
            if (value.spring && (0, _utils.isNum)(value.to)) {
                var distanceToTarget = value.to - value.current;
                value.velocity += distanceToTarget * (0, _calc.speedPerFrame)(value.spring, elapsed);
            }

            // Apply latest velocity
            value.current += (0, _calc.speedPerFrame)(value.velocity, elapsed);

            // Check if value has changed
            if (value.current !== previousValue || Math.abs(value.velocity) >= value.stopSpeed) {
                _this2.hasChanged = true;
            }
        });
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
            force: 0, // [number]: Acceleration to apply to value, in units per second
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1BoeXNpY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlxQjs7O0FBRWpCLGFBRmlCLE9BRWpCLEdBQXFCOzhCQUZKLFNBRUk7OzBDQUFOOztTQUFNOztxREFDakIsMENBQVMsS0FBVCxHQURpQjs7QUFFakIsY0FBSyxjQUFMLEdBQXNCLENBQXRCLENBRmlCOztLQUFyQjs7QUFGaUIsc0JBT2pCLDZCQUFTLFNBQVMsWUFBWSxTQUFTOzs7QUFDbkMsYUFBSyxVQUFMLEdBQWtCLEtBQWxCLENBRG1DOztBQUduQyxtQkFaQyxLQVlELENBQUssS0FBSyxNQUFMLEVBQWEsVUFBQyxLQUFELEVBQVEsR0FBUixFQUFnQjtBQUM5QixnQkFBTSxnQkFBZ0IsTUFBTSxPQUFOOzs7QUFEUSxpQkFJOUIsQ0FBTSxRQUFOLElBQWtCLFVBakJyQixjQWlCcUIsQ0FBYyxNQUFNLEtBQU4sRUFBYSxPQUEzQixDQUFsQjs7O0FBSjhCLGlCQU85QixDQUFNLFFBQU4sYUFBbUIsSUFBSSxNQUFNLFFBQU4sRUFBb0IsVUFBVSxFQUFWLENBQTNDOzs7QUFQOEIsZ0JBVTFCLE1BQU0sTUFBTixJQUFnQixXQXRCakIsTUFzQmlCLENBQU0sTUFBTSxFQUFOLENBQXRCLEVBQWlDO0FBQ2pDLG9CQUFNLG1CQUFtQixNQUFNLEVBQU4sR0FBVyxNQUFNLE9BQU4sQ0FESDtBQUVqQyxzQkFBTSxRQUFOLElBQWtCLG1CQUFtQixVQXpCNUMsY0F5QjRDLENBQWMsTUFBTSxNQUFOLEVBQWMsT0FBNUIsQ0FBbkIsQ0FGZTthQUFyQzs7O0FBVjhCLGlCQWdCOUIsQ0FBTSxPQUFOLElBQWlCLFVBN0JwQixjQTZCb0IsQ0FBYyxNQUFNLFFBQU4sRUFBZ0IsT0FBOUIsQ0FBakI7OztBQWhCOEIsZ0JBbUIxQixNQUFNLE9BQU4sS0FBa0IsYUFBbEIsSUFBbUMsS0FBSyxHQUFMLENBQVMsTUFBTSxRQUFOLENBQVQsSUFBNEIsTUFBTSxTQUFOLEVBQWlCO0FBQ2hGLHVCQUFLLFVBQUwsR0FBa0IsSUFBbEIsQ0FEZ0Y7YUFBcEY7U0FuQmMsQ0FBbEIsQ0FIbUM7OztBQVB0QixzQkFtQ2pCLG1DQUFhO0FBQ1QsWUFBSSxLQUFLLE9BQUwsRUFBYztBQUNkLGlCQUFLLGNBQUwsR0FBc0IsS0FBSyxVQUFMLEdBQWtCLENBQWxCLEdBQXNCLEtBQUssY0FBTCxHQUFzQixDQUF0QixDQUQ5Qjs7QUFHZCxnQkFBSSxLQUFLLGNBQUwsSUFBdUIsS0FBSyxpQkFBTCxFQUF3QjtBQUMvQyxxQkFBSyxJQUFMLEdBRCtDO2FBQW5EO1NBSEo7Ozs7Ozs7O0FBcENhLHNCQWtEakIsNkNBQWtCO0FBQ2QsNEJBQ08sa0JBQU0sZUFBTjtBQUNILHFCQUFTLElBQVQ7QUFDQSwrQkFBbUIsQ0FBbkI7VUFISixDQURjOzs7Ozs7OztBQWxERCxzQkErRGpCLDZDQUFrQjtBQUNkLDRCQUNPLGtCQUFNLGVBQU47QUFDSCxtQkFBTyxDQUFQO0FBQ0Esb0JBQVEsQ0FBUjtBQUNBLG9CQUFRLENBQVI7QUFDQSx1QkFBVyxNQUFYO0FBQ0Esc0JBQVUsQ0FBVjtVQU5KLENBRGM7Ozs7Ozs7OztBQS9ERCxzQkFnRmpCLHFEQUFzQjtBQUNsQixlQUFPLFVBQVAsQ0FEa0I7OztXQWhGTCIsImZpbGUiOiJQaHlzaWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgeyBzcGVlZFBlckZyYW1lLCBzcGVlZFBlclNlY29uZCB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGVhY2gsIGlzTnVtIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGh5c2ljcyBleHRlbmRzIEFjdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcbiAgICB9XG5cbiAgICBvblVwZGF0ZShwaHlzaWNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGVhY2godGhpcy52YWx1ZXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uXG4gICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBzcGVlZFBlckZyYW1lKHZhbHVlLmZvcmNlLCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgZnJpY3Rpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9ICgxIC0gdmFsdWUuZnJpY3Rpb24pICoqIChlbGFwc2VkIC8gMTApO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBzcHJpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zcHJpbmcgJiYgaXNOdW0odmFsdWUudG8pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VUb1RhcmdldCA9IHZhbHVlLnRvIC0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogc3BlZWRQZXJGcmFtZSh2YWx1ZS5zcHJpbmcsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBseSBsYXRlc3QgdmVsb2NpdHlcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgKz0gc3BlZWRQZXJGcmFtZSh2YWx1ZS52ZWxvY2l0eSwgZWxhcHNlZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodmFsdWUuY3VycmVudCAhPT0gcHJldmlvdXNWYWx1ZSB8fCBNYXRoLmFicyh2YWx1ZS52ZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b0VuZCkge1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IHRoaXMuaGFzQ2hhbmdlZCA/IDEgOiB0aGlzLmluYWN0aXZlRnJhbWVzICsgMTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSBwcm9wc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRQcm9wcygpLFxuICAgICAgICAgICAgYXV0b0VuZDogdHJ1ZSxcbiAgICAgICAgICAgIG1heEluYWN0aXZlRnJhbWVzOiAzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSB2YWx1ZSBwcm9wc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRWYWx1ZSgpLFxuICAgICAgICAgICAgZm9yY2U6IDAsIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICAgICAgICAgIGJvdW5jZTogMCwgLy8gW251bWJlcl06IEZhY3RvciB0byBtdWx0aXBseSB2ZWxvY2l0eSBieSBvbiBib3VuY2VcbiAgICAgICAgICAgIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgICAgICAgICAgIHN0b3BTcGVlZDogMC4wMDAxLCAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWUsIDAtMVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdmFsdWVzIHRvIHRoaXMgd2hlbiBhIGB2YWx1ZWAgaXMgbm90IHByb3ZpZGVkIGFzIGFuIG9iamVjdFxuXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndmVsb2NpdHknO1xuICAgIH1cbn1cbiJdfQ==