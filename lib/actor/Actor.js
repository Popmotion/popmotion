'use strict';

exports.__esModule = true;

var _Action2 = require('../actions/Action');

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Actor = function (_Action) {
    _inherits(Actor, _Action);

    function Actor() {
        _classCallCheck(this, Actor);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _Action.call.apply(_Action, [this].concat(args)));

        _this.once();
        return _this;
    }

    Actor.prototype.do = function _do(action) {
        if (this.reducer) {
            this.start(this.reducer(action, this.values));
        }
    };

    Actor.prototype.start = function start(action) {
        _Action.prototype.start.call(this);

        if (action) {
            var actionInstance = action.inherit();

            // Assign action to appropriate values

            return actionInstance;
        }
    };

    return Actor;
}(_Action3.default);

exports.default = Actor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci9BY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCOzs7QUFDakIsYUFEaUIsS0FDakIsR0FBcUI7OEJBREosT0FDSTs7MENBQU47O1NBQU07O3FEQUNqQiwwQ0FBUyxLQUFULEdBRGlCOztBQUVqQixjQUFLLElBQUwsR0FGaUI7O0tBQXJCOztBQURpQixvQkFNakIsa0JBQUcsUUFBUTtBQUNQLFlBQUksS0FBSyxPQUFMLEVBQWM7QUFDZCxpQkFBSyxLQUFMLENBQVcsS0FBSyxPQUFMLENBQWEsTUFBYixFQUFxQixLQUFLLE1BQUwsQ0FBaEMsRUFEYztTQUFsQjs7O0FBUGEsb0JBWWpCLHVCQUFNLFFBQVE7QUFDViwwQkFBTSxLQUFOLFlBRFU7O0FBR1YsWUFBSSxNQUFKLEVBQVk7QUFDUixnQkFBTSxpQkFBaUIsT0FBTyxPQUFQLEVBQWpCOzs7O0FBREUsbUJBS0QsY0FBUCxDQUxRO1NBQVo7OztXQWZhIiwiZmlsZSI6IkFjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL0FjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdG9yIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICB9XG5cbiAgICBkbyhhY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMucmVkdWNlcikge1xuICAgICAgICAgICAgdGhpcy5zdGFydCh0aGlzLnJlZHVjZXIoYWN0aW9uLCB0aGlzLnZhbHVlcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoYWN0aW9uKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb25JbnN0YW5jZSA9IGFjdGlvbi5pbmhlcml0KCk7XG5cbiAgICAgICAgICAgIC8vIEFzc2lnbiBhY3Rpb24gdG8gYXBwcm9wcmlhdGUgdmFsdWVzXG5cbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25JbnN0YW5jZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=