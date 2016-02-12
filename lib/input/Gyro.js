'use strict';

exports.__esModule = true;

var _Pointer = require('./Pointer');

var _Pointer2 = _interopRequireDefault(_Pointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEVICE_MOTION = 'devicemotion';

/*
    Scrape x/y coordinates from provided event

    @param [event]
    @return [object]
*/
var eventToPoint = function (e) {
    return {
        x: e.accelerationIncludingGravity.x,
        y: e.accelerationIncludingGravity.y,
        z: e.accelerationIncludingGravity.z,
        yaw: e.alpha,
        pitch: e.beta,
        roll: event.gamma
    };
};

var Gyro = (function (_Input) {
    _inherits(Gyro, _Input);

    function Gyro() {
        _classCallCheck(this, Gyro);

        var _this = _possibleConstructorReturn(this, _Input.call(this));

        _this.bindEvents();
        return _this;
    }

    Gyro.prototype.latest = function latest(e) {
        _Input.prototype.latest.call(this, eventToPoint(e));
        e.preventDefault();
    };

    Gyro.prototype.start = function start() {
        _Input.prototype.start.call(this);
        document.documentElement.addEventListener(DEVICE_MOTION, this.onMove);
    };

    Gyro.prototype.stop = function stop() {
        _Input.prototype.stop.call(this);
        document.documentElement.removeEventListener(DEVICE_MOTION, this.onMove);
    };

    return Gyro;
})(_Pointer2.default);

exports.default = Gyro;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9HeXJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLGFBQWEsR0FBRyxjQUFjOzs7Ozs7OztBQUFDLEFBUXJDLElBQU0sWUFBWSxHQUFHLFVBQUMsQ0FBQztXQUFNO0FBQ3pCLFNBQUMsRUFBRSxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUNuQyxTQUFDLEVBQUUsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDbkMsU0FBQyxFQUFFLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQ25DLFdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSztBQUNaLGFBQUssRUFBRSxDQUFDLENBQUMsSUFBSTtBQUNiLFlBQUksRUFBRSxLQUFLLENBQUMsS0FBSztLQUNwQjtDQUFDLENBQUM7O0lBRWtCLElBQUk7Y0FBSixJQUFJOztBQUNyQixhQURpQixJQUFJLEdBQ1A7OEJBREcsSUFBSTs7cURBRWpCLGlCQUFPOztBQUNQLGNBQUssVUFBVSxFQUFFLENBQUM7O0tBQ3JCOztBQUpnQixRQUFJLFdBTXJCLE1BQU0sbUJBQUMsQ0FBQyxFQUFFO0FBQ04seUJBQU0sTUFBTSxLQUFBLE9BQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsU0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3RCOztBQVRnQixRQUFJLFdBV3JCLEtBQUssb0JBQUc7QUFDSix5QkFBTSxLQUFLLEtBQUEsTUFBRSxDQUFDO0FBQ2QsZ0JBQVEsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN6RTs7QUFkZ0IsUUFBSSxXQWdCckIsSUFBSSxtQkFBRztBQUNILHlCQUFNLElBQUksS0FBQSxNQUFFLENBQUM7QUFDYixnQkFBUSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzVFOztXQW5CZ0IsSUFBSTs7O2tCQUFKLElBQUkiLCJmaWxlIjoiR3lyby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dCBmcm9tICcuL1BvaW50ZXInO1xuXG5jb25zdCBERVZJQ0VfTU9USU9OID0gJ2RldmljZW1vdGlvbic7XG5cbi8qXG4gICAgU2NyYXBlIHgveSBjb29yZGluYXRlcyBmcm9tIHByb3ZpZGVkIGV2ZW50XG5cbiAgICBAcGFyYW0gW2V2ZW50XVxuICAgIEByZXR1cm4gW29iamVjdF1cbiovXG5jb25zdCBldmVudFRvUG9pbnQgPSAoZSkgPT4gKHtcbiAgICB4OiBlLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueCxcbiAgICB5OiBlLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueSxcbiAgICB6OiBlLmFjY2VsZXJhdGlvbkluY2x1ZGluZ0dyYXZpdHkueixcbiAgICB5YXc6IGUuYWxwaGEsXG4gICAgcGl0Y2g6IGUuYmV0YSxcbiAgICByb2xsOiBldmVudC5nYW1tYVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEd5cm8gZXh0ZW5kcyBJbnB1dCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGxhdGVzdChlKSB7XG4gICAgICAgIHN1cGVyLmxhdGVzdChldmVudFRvUG9pbnQoZSkpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKERFVklDRV9NT1RJT04sIHRoaXMub25Nb3ZlKTtcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKERFVklDRV9NT1RJT04sIHRoaXMub25Nb3ZlKTtcbiAgICB9XG59Il19