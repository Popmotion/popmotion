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

        (0, _utils.each)(this.values, function (value) {
            var delta = -value.to * Math.exp(timeUntilFinished / TIME_CONSTANT);
            value.velocity = value.to + delta - value.current;
            value.current += (0, _calc.speedPerFrame)(value.velocity, elapsed);
        });
    };

    return Glide;
}(_Action3.default);

exports.default = Glide;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0dsaWRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTSxnQkFBZ0IsR0FBaEI7O0lBRWU7Ozs7Ozs7OztvQkFDakIseUJBQVE7QUFDSiwwQkFBTSxLQUFOLFlBREk7QUFFSixhQUFLLE9BQUwsR0FBZSxXQVBSLFlBT1EsRUFBZixDQUZJOzs7QUFEUyxvQkFNakIsNkJBQVMsT0FBTyxZQUFZLFNBQVM7QUFDakMsWUFBTSxvQkFBb0IsQ0FBRSxXQVhyQixZQVdxQixFQUFGLEdBQWtCLEtBQUssT0FBTCxDQURYOztBQUdqQyxtQkFiQyxLQWFELENBQUssS0FBSyxNQUFMLEVBQWEsVUFBQyxLQUFELEVBQVc7QUFDekIsZ0JBQU0sUUFBUSxDQUFFLE1BQU0sRUFBTixHQUFXLEtBQUssR0FBTCxDQUFTLG9CQUFvQixhQUFwQixDQUF0QixDQURXO0FBRXpCLGtCQUFNLFFBQU4sR0FBaUIsS0FBQyxDQUFNLEVBQU4sR0FBVyxLQUFYLEdBQW9CLE1BQU0sT0FBTixDQUZiO0FBR3pCLGtCQUFNLE9BQU4sSUFBaUIsVUFqQnBCLGNBaUJvQixDQUFjLE1BQU0sUUFBTixFQUFnQixPQUE5QixDQUFqQixDQUh5QjtTQUFYLENBQWxCLENBSGlDOzs7V0FOcEIiLCJmaWxlIjoiR2xpZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCB7IHNwZWVkUGVyRnJhbWUgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBlYWNoLCBjdXJyZW50VGltZSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNvbnN0IFRJTUVfQ09OU1RBTlQgPSAzOTU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdsaWRlIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gY3VycmVudFRpbWUoKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZShnbGlkZSwgZnJhbWVTdGFydCwgZWxhcHNlZCkge1xuICAgICAgICBjb25zdCB0aW1lVW50aWxGaW5pc2hlZCA9IC0gY3VycmVudFRpbWUoKSAtIHRoaXMuc3RhcnRlZDtcblxuICAgICAgICBlYWNoKHRoaXMudmFsdWVzLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gLSB2YWx1ZS50byAqIE1hdGguZXhwKHRpbWVVbnRpbEZpbmlzaGVkIC8gVElNRV9DT05TVEFOVCk7XG4gICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9ICh2YWx1ZS50byArIGRlbHRhKSAtIHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ICs9IHNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=