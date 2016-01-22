'use strict';

exports.__esModule = true;

var _Input2 = require('./Input');

var _Input3 = _interopRequireDefault(_Input2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOUCH_MOVE = 'touchmove';

/*
    Scrape x/y coordinates from provided event

    @param [event]
    @return [object]
*/
var eventToPoint = function (_ref) {
    var changedTouches = _ref.changedTouches;
    return {
        x: changedTouches[0].clientX,
        y: changedTouches[0].clientY
    };
};

var Touch = function (_Input) {
    _inherits(Touch, _Input);

    function Touch(e) {
        _classCallCheck(this, Touch);

        var _this = _possibleConstructorReturn(this, _Input.call(this));

        _this.state = eventToPoint(e);
        _this.bindEvents();
        return _this;
    }

    Touch.prototype.latest = function latest(e) {
        _Input.prototype.latest.call(this, eventToPoint(e));
        e.preventDefault();
    };

    Touch.prototype.start = function start() {
        _Input.prototype.start.call(this);
        document.documentElement.addEventListener(TOUCH_MOVE, this.latest);
    };

    Touch.prototype.stop = function stop() {
        _Input.prototype.stop.call(this);
        document.documentElement.removeEventListener(TOUCH_MOVE, this.latest);
    };

    return Touch;
}(_Input3.default);

exports.default = Touch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9Ub3VjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxhQUFhLFdBQWI7Ozs7Ozs7O0FBUU4sSUFBTSxlQUFlO1FBQUc7V0FBc0I7QUFDMUMsV0FBRyxlQUFlLENBQWYsRUFBa0IsT0FBbEI7QUFDSCxXQUFHLGVBQWUsQ0FBZixFQUFrQixPQUFsQjs7Q0FGYzs7SUFLQTs7O0FBQ2pCLGFBRGlCLEtBQ2pCLENBQVksQ0FBWixFQUFlOzhCQURFLE9BQ0Y7O3FEQUNYLG1CQURXOztBQUVYLGNBQUssS0FBTCxHQUFhLGFBQWEsQ0FBYixDQUFiLENBRlc7QUFHWCxjQUFLLFVBQUwsR0FIVzs7S0FBZjs7QUFEaUIsb0JBT2pCLHlCQUFPLEdBQUc7QUFDTix5QkFBTSxNQUFOLFlBQWEsYUFBYSxDQUFiLENBQWIsRUFETTtBQUVOLFVBQUUsY0FBRixHQUZNOzs7QUFQTyxvQkFZakIseUJBQVE7QUFDSix5QkFBTSxLQUFOLFlBREk7QUFFSixpQkFBUyxlQUFULENBQXlCLGdCQUF6QixDQUEwQyxVQUExQyxFQUFzRCxLQUFLLE1BQUwsQ0FBdEQsQ0FGSTs7O0FBWlMsb0JBaUJqQix1QkFBTztBQUNILHlCQUFNLElBQU4sWUFERztBQUVILGlCQUFTLGVBQVQsQ0FBeUIsbUJBQXpCLENBQTZDLFVBQTdDLEVBQXlELEtBQUssTUFBTCxDQUF6RCxDQUZHOzs7V0FqQlUiLCJmaWxlIjoiVG91Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5cbmNvbnN0IFRPVUNIX01PVkUgPSAndG91Y2htb3ZlJztcblxuLypcbiAgICBTY3JhcGUgeC95IGNvb3JkaW5hdGVzIGZyb20gcHJvdmlkZWQgZXZlbnRcblxuICAgIEBwYXJhbSBbZXZlbnRdXG4gICAgQHJldHVybiBbb2JqZWN0XVxuKi9cbmNvbnN0IGV2ZW50VG9Qb2ludCA9ICh7IGNoYW5nZWRUb3VjaGVzIH0pID0+ICh7XG4gICAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2ggZXh0ZW5kcyBJbnB1dCB7XG4gICAgY29uc3RydWN0b3IoZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0gZXZlbnRUb1BvaW50KGUpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBsYXRlc3QoZSkge1xuICAgICAgICBzdXBlci5sYXRlc3QoZXZlbnRUb1BvaW50KGUpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihUT1VDSF9NT1ZFLCB0aGlzLmxhdGVzdCk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihUT1VDSF9NT1ZFLCB0aGlzLmxhdGVzdCk7XG4gICAgfVxufSJdfQ==