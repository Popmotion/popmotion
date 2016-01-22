'use strict';

exports.__esModule = true;

var _Input2 = require('./Input');

var _Input3 = _interopRequireDefault(_Input2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MOUSE_MOVE = 'mousemove';

/*
    Scrape x/y coordinates from provided event

    @param [event]
    @return [object]
*/
var eventToPoint = function (e) {
    return {
        x: e.pageX,
        y: e.pageY
    };
};

var Mouse = function (_Input) {
    _inherits(Mouse, _Input);

    function Mouse(e) {
        _classCallCheck(this, Mouse);

        var _this = _possibleConstructorReturn(this, _Input.call(this));

        _this.state = eventToPoint(e);
        _this.bindEvents();
        return _this;
    }

    Mouse.prototype.latest = function latest(e) {
        _Input.prototype.latest.call(this, eventToPoint(e));
        e.preventDefault();
    };

    Mouse.prototype.start = function start() {
        _Input.prototype.start.call(this);
        document.documentElement.addEventListener(MOUSE_MOVE, this.onMove);
    };

    Mouse.prototype.stop = function stop() {
        _Input.prototype.stop.call(this);
        document.documentElement.removeEventListener(MOUSE_MOVE, this.onMove);
    };

    return Mouse;
}(_Input3.default);

exports.default = Mouse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbnB1dC9Nb3VzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxhQUFhLFdBQWI7Ozs7Ozs7O0FBUU4sSUFBTSxlQUFlLFVBQUMsQ0FBRDtXQUFRO0FBQ3pCLFdBQUcsRUFBRSxLQUFGO0FBQ0gsV0FBRyxFQUFFLEtBQUY7O0NBRmM7O0lBS0E7OztBQUNqQixhQURpQixLQUNqQixDQUFZLENBQVosRUFBZTs4QkFERSxPQUNGOztxREFDWCxtQkFEVzs7QUFFWCxjQUFLLEtBQUwsR0FBYSxhQUFhLENBQWIsQ0FBYixDQUZXO0FBR1gsY0FBSyxVQUFMLEdBSFc7O0tBQWY7O0FBRGlCLG9CQU9qQix5QkFBTyxHQUFHO0FBQ04seUJBQU0sTUFBTixZQUFhLGFBQWEsQ0FBYixDQUFiLEVBRE07QUFFTixVQUFFLGNBQUYsR0FGTTs7O0FBUE8sb0JBWWpCLHlCQUFRO0FBQ0oseUJBQU0sS0FBTixZQURJO0FBRUosaUJBQVMsZUFBVCxDQUF5QixnQkFBekIsQ0FBMEMsVUFBMUMsRUFBc0QsS0FBSyxNQUFMLENBQXRELENBRkk7OztBQVpTLG9CQWlCakIsdUJBQU87QUFDSCx5QkFBTSxJQUFOLFlBREc7QUFFSCxpQkFBUyxlQUFULENBQXlCLG1CQUF6QixDQUE2QyxVQUE3QyxFQUF5RCxLQUFLLE1BQUwsQ0FBekQsQ0FGRzs7O1dBakJVIiwiZmlsZSI6Ik1vdXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuXG5jb25zdCBNT1VTRV9NT1ZFID0gJ21vdXNlbW92ZSc7XG5cbi8qXG4gICAgU2NyYXBlIHgveSBjb29yZGluYXRlcyBmcm9tIHByb3ZpZGVkIGV2ZW50XG5cbiAgICBAcGFyYW0gW2V2ZW50XVxuICAgIEByZXR1cm4gW29iamVjdF1cbiovXG5jb25zdCBldmVudFRvUG9pbnQgPSAoZSkgPT4gKHtcbiAgICB4OiBlLnBhZ2VYLFxuICAgIHk6IGUucGFnZVlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZSBleHRlbmRzIElucHV0IHtcbiAgICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBldmVudFRvUG9pbnQoZSk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGxhdGVzdChlKSB7XG4gICAgICAgIHN1cGVyLmxhdGVzdChldmVudFRvUG9pbnQoZSkpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFX01PVkUsIHRoaXMub25Nb3ZlKTtcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKE1PVVNFX01PVkUsIHRoaXMub25Nb3ZlKTtcbiAgICB9XG59Il19