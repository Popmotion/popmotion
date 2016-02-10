'use strict';

exports.__esModule = true;

var _Action2 = require('./Action');

var _Action3 = _interopRequireDefault(_Action2);

var _calc = require('../inc/calc');

var _utils = require('../inc/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TIME_CONSTANT = 395;

var Glide = function (_Action) {
    _inherits(Glide, _Action);

    function Glide() {
        _classCallCheck(this, Glide);

        return _possibleConstructorReturn(this, _Action.apply(this, arguments));
    }

    Glide.prototype.start = function start() {
        _Action.prototype.start.call(this);
        this.started = (0, _utils.currentTime)();
    };

    Glide.prototype.onUpdate = function onUpdate(glide, frameStart, elapsed) {
        var timeUntilFinished = -(0, _utils.currentTime)() - this.started;

        for (var key in this.values) {
            if (this.values.hasOwnProperty(key)) {
                var value = this.values[key];
                var delta = -value.to * Math.exp(timeUntilFinished / TIME_CONSTANT);
                value.velocity = value.to + delta - value.current;
                value.current += (0, _calc.speedPerFrame)(value.velocity, elapsed);
            }
        }
    };

    return Glide;
}(_Action3.default);

exports.default = Glide;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0dsaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTSxnQkFBZ0IsR0FBaEI7O0lBRWU7Ozs7Ozs7OztvQkFDakIseUJBQVE7QUFDSiwwQkFBTSxLQUFOLFlBREk7QUFFSixhQUFLLE9BQUwsR0FBZSxXQVBkLFlBT2MsRUFBZixDQUZJOzs7QUFEUyxvQkFNakIsNkJBQVMsT0FBTyxZQUFZLFNBQVM7QUFDakMsWUFBTSxvQkFBb0IsQ0FBRSxXQVgzQixZQVcyQixFQUFGLEdBQWtCLEtBQUssT0FBTCxDQURYOztBQUdqQyxhQUFLLElBQUksR0FBSixJQUFXLEtBQUssTUFBTCxFQUFhO0FBQ3pCLGdCQUFJLEtBQUssTUFBTCxDQUFZLGNBQVosQ0FBMkIsR0FBM0IsQ0FBSixFQUFxQztBQUNqQyxvQkFBTSxRQUFRLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBUixDQUQyQjtBQUVqQyxvQkFBTSxRQUFRLENBQUUsTUFBTSxFQUFOLEdBQVcsS0FBSyxHQUFMLENBQVMsb0JBQW9CLGFBQXBCLENBQXRCLENBRm1CO0FBR2pDLHNCQUFNLFFBQU4sR0FBaUIsS0FBQyxDQUFNLEVBQU4sR0FBVyxLQUFYLEdBQW9CLE1BQU0sT0FBTixDQUhMO0FBSWpDLHNCQUFNLE9BQU4sSUFBaUIsVUFuQnhCLGNBbUJ3QixDQUFjLE1BQU0sUUFBTixFQUFnQixPQUE5QixDQUFqQixDQUppQzthQUFyQztTQURKOzs7V0FUYSIsImZpbGUiOiJHbGlkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHsgc3BlZWRQZXJGcmFtZSB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGN1cnJlbnRUaW1lIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3QgVElNRV9DT05TVEFOVCA9IDM5NTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xpZGUgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBjdXJyZW50VGltZSgpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKGdsaWRlLCBmcmFtZVN0YXJ0LCBlbGFwc2VkKSB7XG4gICAgICAgIGNvbnN0IHRpbWVVbnRpbEZpbmlzaGVkID0gLSBjdXJyZW50VGltZSgpIC0gdGhpcy5zdGFydGVkO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSAtIHZhbHVlLnRvICogTWF0aC5leHAodGltZVVudGlsRmluaXNoZWQgLyBUSU1FX0NPTlNUQU5UKTtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9ICh2YWx1ZS50byArIGRlbHRhKSAtIHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCArPSBzcGVlZFBlckZyYW1lKHZhbHVlLnZlbG9jaXR5LCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==