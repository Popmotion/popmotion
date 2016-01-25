'use strict';

exports.__esModule = true;

var _Action2 = require('./Action');

var _Action3 = _interopRequireDefault(_Action2);

var _utils = require('../inc/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TIME_CONSTANT = 395;

var Glide = (function (_Action) {
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

        each(this.values, function (value, key) {
            var delta = -value.to * Math.exp(timeUntilFinished / TIME_CONSTANT);
            value.velocity = value.to + delta - value.current;
            value.current += calc.speedPerFrame(value.velocity, elapsed);
        });
    };

    return Glide;
})(_Action3.default);

exports.default = Glide;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0dsaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQzs7SUFFTCxLQUFLO2NBQUwsS0FBSzs7YUFBTCxLQUFLOzhCQUFMLEtBQUs7Ozs7O0FBQUwsU0FBSyxXQUN0QixLQUFLLG9CQUFHO0FBQ0osMEJBQU0sS0FBSyxLQUFBLE1BQUUsQ0FBQztBQUNkLFlBQUksQ0FBQyxPQUFPLEdBQUcseUJBQWEsQ0FBQztLQUNoQzs7QUFKZ0IsU0FBSyxXQU10QixRQUFRLHFCQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFO0FBQ2pDLFlBQU0saUJBQWlCLEdBQUcsQ0FBRSx5QkFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7O0FBRXpELFlBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBSztBQUM5QixnQkFBTSxLQUFLLEdBQUcsQ0FBRSxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDLENBQUM7QUFDdkUsaUJBQUssQ0FBQyxRQUFRLEdBQUcsQUFBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEtBQUssR0FBSSxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQ3BELGlCQUFLLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNoRSxDQUFDLENBQUM7S0FDTjs7V0FkZ0IsS0FBSzs7O2tCQUFMLEtBQUsiLCJmaWxlIjoiR2xpZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCB7IGN1cnJlbnRUaW1lIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3QgVElNRV9DT05TVEFOVCA9IDM5NTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2xpZGUgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBjdXJyZW50VGltZSgpO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKGdsaWRlLCBmcmFtZVN0YXJ0LCBlbGFwc2VkKSB7XG4gICAgICAgIGNvbnN0IHRpbWVVbnRpbEZpbmlzaGVkID0gLSBjdXJyZW50VGltZSgpIC0gdGhpcy5zdGFydGVkO1xuXG4gICAgICAgIGVhY2godGhpcy52YWx1ZXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IC0gdmFsdWUudG8gKiBNYXRoLmV4cCh0aW1lVW50aWxGaW5pc2hlZCAvIFRJTUVfQ09OU1RBTlQpO1xuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSAodmFsdWUudG8gKyBkZWx0YSkgLSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgdmFsdWUuY3VycmVudCArPSBjYWxjLnNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=