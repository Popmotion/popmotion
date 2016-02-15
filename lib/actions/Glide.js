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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Kinetic scrolling ala http://ariya.ofilabs.com/2013/11/javascript-kinetic-scrolling-part-2.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var Glide = function (_Action) {
    _inherits(Glide, _Action);

    function Glide() {
        _classCallCheck(this, Glide);

        return _possibleConstructorReturn(this, _Action.apply(this, arguments));
    }

    Glide.prototype.start = function start() {
        _Action.prototype.start.call(this);
        this.started = (0, _utils.currentTime)();

        for (var i = 0; i < this.numValueKeys; i++) {
            var value = this.values[this.valueKeys[i]];

            if (value.to === undefined) {
                value.to = Math.round(value.current + 0.8 * value.velocity);
            }
        }
    };

    Glide.prototype.onUpdate = function onUpdate(glide, frameStart, elapsed) {
        var timeUntilFinished = -(0, _utils.currentTime)() - this.started;

        for (var i = 0; i < this.numValueKeys; i++) {
            var value = this.values[this.valueKeys[i]];
            var delta = -value.to * Math.exp(timeUntilFinished / value.timeConstant);
            value.velocity = value.to + delta - value.current;
            value.current += (0, _calc.speedPerFrame)(value.velocity, elapsed);
        }
    };

    /*
        # Get default Action value properties
         @return [object]
    */

    Glide.prototype.getDefaultValue = function getDefaultValue() {
        return _extends({}, _Action.prototype.getDefaultValue.call(this), {
            timeConstant: 395
        });
    };

    return Glide;
}(_Action3.default);

exports.default = Glide;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0dsaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU9xQjs7Ozs7Ozs7O29CQUNqQix5QkFBUTtBQUNKLDBCQUFNLEtBQU4sWUFESTtBQUVKLGFBQUssT0FBTCxHQUFlLFdBTGQsWUFLYyxFQUFmLENBRkk7O0FBSUosYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksS0FBSyxZQUFMLEVBQW1CLEdBQXZDLEVBQTRDO0FBQ3hDLGdCQUFNLFFBQVEsS0FBSyxNQUFMLENBQVksS0FBSyxTQUFMLENBQWUsQ0FBZixDQUFaLENBQVIsQ0FEa0M7O0FBR3hDLGdCQUFJLE1BQU0sRUFBTixLQUFhLFNBQWIsRUFBd0I7QUFDeEIsc0JBQU0sRUFBTixHQUFXLEtBQUssS0FBTCxDQUFXLE1BQU0sT0FBTixHQUFpQixNQUFNLE1BQU0sUUFBTixDQUE3QyxDQUR3QjthQUE1QjtTQUhKOzs7QUFMYSxvQkFjakIsNkJBQVMsT0FBTyxZQUFZLFNBQVM7QUFDakMsWUFBTSxvQkFBb0IsQ0FBRSxXQWpCM0IsWUFpQjJCLEVBQUYsR0FBa0IsS0FBSyxPQUFMLENBRFg7O0FBR2pDLGFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssWUFBTCxFQUFtQixHQUF2QyxFQUE0QztBQUN4QyxnQkFBTSxRQUFRLEtBQUssTUFBTCxDQUFZLEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBWixDQUFSLENBRGtDO0FBRXhDLGdCQUFNLFFBQVEsQ0FBRSxNQUFNLEVBQU4sR0FBVyxLQUFLLEdBQUwsQ0FBUyxvQkFBb0IsTUFBTSxZQUFOLENBQTFDLENBRjBCO0FBR3hDLGtCQUFNLFFBQU4sR0FBaUIsS0FBQyxDQUFNLEVBQU4sR0FBVyxLQUFYLEdBQW9CLE1BQU0sT0FBTixDQUhFO0FBSXhDLGtCQUFNLE9BQU4sSUFBaUIsVUF4QnBCLGNBd0JvQixDQUFjLE1BQU0sUUFBTixFQUFnQixPQUE5QixDQUFqQixDQUp3QztTQUE1Qzs7Ozs7Ozs7QUFqQmEsb0JBOEJqQiw2Q0FBa0I7QUFDZCw0QkFDTyxrQkFBTSxlQUFOO0FBQ0gsMEJBQWMsR0FBZDtVQUZKLENBRGM7OztXQTlCRCIsImZpbGUiOiJHbGlkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgS2luZXRpYyBzY3JvbGxpbmcgYWxhIGh0dHA6Ly9hcml5YS5vZmlsYWJzLmNvbS8yMDEzLzExL2phdmFzY3JpcHQta2luZXRpYy1zY3JvbGxpbmctcGFydC0yLmh0bWxcbiovXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCB7IHNwZWVkUGVyRnJhbWUgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBjdXJyZW50VGltZSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsaWRlIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gY3VycmVudFRpbWUoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNbdGhpcy52YWx1ZUtleXNbaV1dO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUudG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnRvID0gTWF0aC5yb3VuZCh2YWx1ZS5jdXJyZW50ICsgKDAuOCAqIHZhbHVlLnZlbG9jaXR5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblVwZGF0ZShnbGlkZSwgZnJhbWVTdGFydCwgZWxhcHNlZCkge1xuICAgICAgICBjb25zdCB0aW1lVW50aWxGaW5pc2hlZCA9IC0gY3VycmVudFRpbWUoKSAtIHRoaXMuc3RhcnRlZDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNbdGhpcy52YWx1ZUtleXNbaV1dO1xuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSAtIHZhbHVlLnRvICogTWF0aC5leHAodGltZVVudGlsRmluaXNoZWQgLyB2YWx1ZS50aW1lQ29uc3RhbnQpO1xuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSAodmFsdWUudG8gKyBkZWx0YSkgLSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgdmFsdWUuY3VycmVudCArPSBzcGVlZFBlckZyYW1lKHZhbHVlLnZlbG9jaXR5LCBlbGFwc2VkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnRpZXNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0VmFsdWUoKSxcbiAgICAgICAgICAgIHRpbWVDb25zdGFudDogMzk1XG4gICAgICAgIH07XG4gICAgfVxufVxuIl19