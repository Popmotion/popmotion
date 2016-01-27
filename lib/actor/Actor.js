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

    Actor.prototype.bind = function bind(action) {
        return action.inherit({
            onStart: function () {}
        });
    };

    Actor.prototype.start = function start(action) {
        if (action) {
            var boundAction = this.bind(action);
            boundAction.start();

            return boundAction;
        }

        return _Action.prototype.start.call(this);
    };

    return Actor;
}(_Action3.default);

exports.default = Actor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci9BY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCOzs7QUFDakIsYUFEaUIsS0FDakIsR0FBcUI7OEJBREosT0FDSTs7MENBQU47O1NBQU07O3FEQUNqQiwwQ0FBUyxLQUFULEdBRGlCOztBQUVqQixjQUFLLElBQUwsR0FGaUI7O0tBQXJCOztBQURpQixvQkFNakIscUJBQUssUUFBUTtBQUNULGVBQU8sT0FBTyxPQUFQLENBQWU7QUFDbEIscUJBQVMsWUFBTSxFQUFOO1NBRE4sQ0FBUCxDQURTOzs7QUFOSSxvQkFjakIsdUJBQU0sUUFBUTtBQUNWLFlBQUksTUFBSixFQUFZO0FBQ1IsZ0JBQU0sY0FBYyxLQUFLLElBQUwsQ0FBVSxNQUFWLENBQWQsQ0FERTtBQUVSLHdCQUFZLEtBQVosR0FGUTs7QUFJUixtQkFBTyxXQUFQLENBSlE7U0FBWjs7QUFPQSxlQUFPLGtCQUFNLEtBQU4sV0FBUCxDQVJVOzs7V0FkRyIsImZpbGUiOiJBY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9BY3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3RvciBleHRlbmRzIEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgfVxuXG4gICAgYmluZChhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5pbmhlcml0KHtcbiAgICAgICAgICAgIG9uU3RhcnQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhcnQoYWN0aW9uKSB7XG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGJvdW5kQWN0aW9uID0gdGhpcy5iaW5kKGFjdGlvbik7XG4gICAgICAgICAgICBib3VuZEFjdGlvbi5zdGFydCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gYm91bmRBY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuc3RhcnQoKTtcbiAgICB9XG59Il19