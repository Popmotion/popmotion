'use strict';

exports.__esModule = true;

var _Action2 = require('../actions/Action');

var _Action3 = _interopRequireDefault(_Action2);

var _calc = require('../inc/calc');

var _utils = require('../inc/utils');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci9BY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlxQjs7O0FBQ2pCLGFBRGlCLEtBQ2pCLEdBQXFCOzhCQURKLE9BQ0k7OzBDQUFOOztTQUFNOztxREFDakIsMENBQVMsS0FBVCxHQURpQjs7QUFFakIsY0FBSyxJQUFMLEdBRmlCOztLQUFyQjs7QUFEaUIsb0JBTWpCLGtCQUFHLFFBQVE7QUFDUCxZQUFJLEtBQUssT0FBTCxFQUFjO0FBQ2QsaUJBQUssS0FBTCxDQUFXLEtBQUssT0FBTCxDQUFhLE1BQWIsRUFBcUIsS0FBSyxNQUFMLENBQWhDLEVBRGM7U0FBbEI7OztBQVBhLG9CQVlqQix1QkFBTSxRQUFRO0FBQ1YsMEJBQU0sS0FBTixZQURVOztBQUdWLFlBQUksTUFBSixFQUFZO0FBQ1IsZ0JBQU0saUJBQWlCLE9BQU8sT0FBUCxFQUFqQjs7OztBQURFLG1CQUtELGNBQVAsQ0FMUTtTQUFaOzs7V0FmYSIsImZpbGUiOiJBY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9BY3Rpb24nO1xuaW1wb3J0IHsgc21vb3RoIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgZWFjaCwgc3BlZWRQZXJTZWNvbmQgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3RvciBleHRlbmRzIEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgfVxuXG4gICAgZG8oYWN0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLnJlZHVjZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQodGhpcy5yZWR1Y2VyKGFjdGlvbiwgdGhpcy52YWx1ZXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0KGFjdGlvbikge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uSW5zdGFuY2UgPSBhY3Rpb24uaW5oZXJpdCgpO1xuXG4gICAgICAgICAgICAvLyBBc3NpZ24gYWN0aW9uIHRvIGFwcHJvcHJpYXRlIHZhbHVlc1xuXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uSW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICB9XG59Il19