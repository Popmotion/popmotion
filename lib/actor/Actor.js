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
        var actionInstance = action.inherit();

        return actionInstance;
    };

    Actor.prototype.willRender = function willRender() {};

    return Actor;
}(_Action3.default);

exports.default = Actor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci9BY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCOzs7QUFDakIsYUFEaUIsS0FDakIsR0FBcUI7OEJBREosT0FDSTs7MENBQU47O1NBQU07O3FEQUNqQiwwQ0FBUyxLQUFULEdBRGlCOztBQUVqQixjQUFLLElBQUwsR0FGaUI7O0tBQXJCOztBQURpQixvQkFNakIsa0JBQUcsUUFBUTtBQUNQLFlBQUksS0FBSyxPQUFMLEVBQWM7QUFDZCxpQkFBSyxLQUFMLENBQVcsS0FBSyxPQUFMLENBQWEsTUFBYixFQUFxQixLQUFLLE1BQUwsQ0FBaEMsRUFEYztTQUFsQjs7O0FBUGEsb0JBWWpCLHVCQUFNLFFBQVE7QUFDViwwQkFBTSxLQUFOLFlBRFU7QUFFVixZQUFNLGlCQUFpQixPQUFPLE9BQVAsRUFBakIsQ0FGSTs7QUFJVixlQUFPLGNBQVAsQ0FKVTs7O0FBWkcsb0JBbUJqQixtQ0FBYTs7V0FuQkkiLCJmaWxlIjoiQWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvQWN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0b3IgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMub25jZSgpO1xuICAgIH1cblxuICAgIGRvKGFjdGlvbikge1xuICAgICAgICBpZiAodGhpcy5yZWR1Y2VyKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KHRoaXMucmVkdWNlcihhY3Rpb24sIHRoaXMudmFsdWVzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydChhY3Rpb24pIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgY29uc3QgYWN0aW9uSW5zdGFuY2UgPSBhY3Rpb24uaW5oZXJpdCgpO1xuXG4gICAgICAgIHJldHVybiBhY3Rpb25JbnN0YW5jZTtcbiAgICB9XG5cbiAgICB3aWxsUmVuZGVyKCkge1xuXG4gICAgfVxufSJdfQ==