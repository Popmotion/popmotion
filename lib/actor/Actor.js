'use strict';

exports.__esModule = true;

var _Action2 = require('../actions/Action');

var _Action3 = _interopRequireDefault(_Action2);

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
        var actionInstance = action.inherit();

        // Assign action to appropriate values

        return actionInstance;
    };

    Actor.prototype.willRender = function willRender(actor, frameStamp, elapsed) {
        var _this2 = this;

        var hasChanged = false;

        (0, _utils.each)(this.values, function (value, key) {
            var updatedValue = value.current;

            // Update value based on active action
            if (value.action) {
                updatedValue = value.action.values[key].current;
            }

            // Run transform function (if present)
            if (value.transform) {
                updatedValue = value.transform(updatedValue, key, _this2);
            }

            // Smooth value if we have smoothing
            if (value.smooth) {
                updatedValue = calc.smooth(updatedValue, value.current, elapsed, value.smooth);
            }

            if (value.round) {
                updatedValue = Math.round(updatedValue);
            }

            value.velocity = (0, _utils.speedPerSecond)(updatedValue - value.current, elapsed);

            if (updatedValue !== value.current) {
                hasChanged = true;
            }

            value.current = updatedValue;

            // Update state
            if (value.unit) {
                var valueWithUnit = updatedValue + value.unit;
            }

            // Add straight to state if no parent
            if (!value.parent) {
                var mappedKey = _this2.onRender && _this2.onRender.stateMap ? _this2.onRender.stateMap[key] : key;
                _this2.state[key] = updatedValue;

                // Or add to parent
            } else {
                    _this2.values[value.parent].children[key] = updatedValue;
                }
        });

        return hasChanged;
    };

    Actor.prototype.preRender = function preRender() {
        // process parent values
    };

    return Actor;
}(_Action3.default);

exports.default = Actor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci9BY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUI7OztBQUNqQixhQURpQixLQUNqQixHQUFxQjs4QkFESixPQUNJOzswQ0FBTjs7U0FBTTs7cURBQ2pCLDBDQUFTLEtBQVQsR0FEaUI7O0FBRWpCLGNBQUssSUFBTCxHQUZpQjs7S0FBckI7O0FBRGlCLG9CQU1qQixrQkFBRyxRQUFRO0FBQ1AsWUFBSSxLQUFLLE9BQUwsRUFBYztBQUNkLGlCQUFLLEtBQUwsQ0FBVyxLQUFLLE9BQUwsQ0FBYSxNQUFiLEVBQXFCLEtBQUssTUFBTCxDQUFoQyxFQURjO1NBQWxCOzs7QUFQYSxvQkFZakIsdUJBQU0sUUFBUTtBQUNWLDBCQUFNLEtBQU4sWUFEVTtBQUVWLFlBQU0saUJBQWlCLE9BQU8sT0FBUCxFQUFqQjs7OztBQUZJLGVBTUgsY0FBUCxDQU5VOzs7QUFaRyxvQkFxQmpCLGlDQUFXLE9BQU8sWUFBWSxTQUFTOzs7QUFDbkMsWUFBSSxhQUFhLEtBQWIsQ0FEK0I7O0FBR25DLG1CQTFCQyxLQTBCRCxDQUFLLEtBQUssTUFBTCxFQUFhLFVBQUMsS0FBRCxFQUFRLEdBQVIsRUFBZ0I7QUFDOUIsZ0JBQUksZUFBZSxNQUFNLE9BQU47OztBQURXLGdCQUkxQixNQUFNLE1BQU4sRUFBYztBQUNkLCtCQUFlLE1BQU0sTUFBTixDQUFhLE1BQWIsQ0FBb0IsR0FBcEIsRUFBeUIsT0FBekIsQ0FERDthQUFsQjs7O0FBSjhCLGdCQVMxQixNQUFNLFNBQU4sRUFBaUI7QUFDakIsK0JBQWUsTUFBTSxTQUFOLENBQWdCLFlBQWhCLEVBQThCLEdBQTlCLFNBQWYsQ0FEaUI7YUFBckI7OztBQVQ4QixnQkFjMUIsTUFBTSxNQUFOLEVBQWM7QUFDZCwrQkFBZSxLQUFLLE1BQUwsQ0FBWSxZQUFaLEVBQTBCLE1BQU0sT0FBTixFQUFlLE9BQXpDLEVBQWtELE1BQU0sTUFBTixDQUFqRSxDQURjO2FBQWxCOztBQUlBLGdCQUFJLE1BQU0sS0FBTixFQUFhO0FBQ2IsK0JBQWUsS0FBSyxLQUFMLENBQVcsWUFBWCxDQUFmLENBRGE7YUFBakI7O0FBSUEsa0JBQU0sUUFBTixHQUFpQixXQWhEZCxlQWdEYyxDQUFlLGVBQWUsTUFBTSxPQUFOLEVBQWUsT0FBN0MsQ0FBakIsQ0F0QjhCOztBQXdCOUIsZ0JBQUksaUJBQWlCLE1BQU0sT0FBTixFQUFlO0FBQ2hDLDZCQUFhLElBQWIsQ0FEZ0M7YUFBcEM7O0FBSUEsa0JBQU0sT0FBTixHQUFnQixZQUFoQjs7O0FBNUI4QixnQkErQjFCLE1BQU0sSUFBTixFQUFZO0FBQ1osb0JBQU0sZ0JBQWdCLGVBQWUsTUFBTSxJQUFOLENBRHpCO2FBQWhCOzs7QUEvQjhCLGdCQW9DMUIsQ0FBQyxNQUFNLE1BQU4sRUFBYztBQUNmLG9CQUFNLFlBQVksTUFBQyxDQUFLLFFBQUwsSUFBaUIsT0FBSyxRQUFMLENBQWMsUUFBZCxHQUEwQixPQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLEdBQXZCLENBQTVDLEdBQTBFLEdBQTFFLENBREg7QUFFZix1QkFBSyxLQUFMLENBQVcsR0FBWCxJQUFrQixZQUFsQjs7O0FBRmUsYUFBbkIsTUFLTztBQUNILDJCQUFLLE1BQUwsQ0FBWSxNQUFNLE1BQU4sQ0FBWixDQUEwQixRQUExQixDQUFtQyxHQUFuQyxJQUEwQyxZQUExQyxDQURHO2lCQUxQO1NBcENjLENBQWxCLENBSG1DOztBQWlEbkMsZUFBTyxVQUFQLENBakRtQzs7O0FBckJ0QixvQkF5RWpCLGlDQUFZOzs7O1dBekVLIiwiZmlsZSI6IkFjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL0FjdGlvbic7XG5pbXBvcnQgeyBlYWNoLCBzcGVlZFBlclNlY29uZCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdG9yIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICB9XG5cbiAgICBkbyhhY3Rpb24pIHtcbiAgICAgICAgaWYgKHRoaXMucmVkdWNlcikge1xuICAgICAgICAgICAgdGhpcy5zdGFydCh0aGlzLnJlZHVjZXIoYWN0aW9uLCB0aGlzLnZhbHVlcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoYWN0aW9uKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIGNvbnN0IGFjdGlvbkluc3RhbmNlID0gYWN0aW9uLmluaGVyaXQoKTtcblxuICAgICAgICAvLyBBc3NpZ24gYWN0aW9uIHRvIGFwcHJvcHJpYXRlIHZhbHVlc1xuXG4gICAgICAgIHJldHVybiBhY3Rpb25JbnN0YW5jZTtcbiAgICB9XG5cbiAgICB3aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGxldCBoYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgZWFjaCh0aGlzLnZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCB1cGRhdGVkVmFsdWUgPSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgdmFsdWUgYmFzZWQgb24gYWN0aXZlIGFjdGlvblxuICAgICAgICAgICAgaWYgKHZhbHVlLmFjdGlvbikge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IHZhbHVlLmFjdGlvbi52YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSdW4gdHJhbnNmb3JtIGZ1bmN0aW9uIChpZiBwcmVzZW50KVxuICAgICAgICAgICAgaWYgKHZhbHVlLnRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IHZhbHVlLnRyYW5zZm9ybSh1cGRhdGVkVmFsdWUsIGtleSwgdGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNtb290aCB2YWx1ZSBpZiB3ZSBoYXZlIHNtb290aGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnNtb290aCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IGNhbGMuc21vb3RoKHVwZGF0ZWRWYWx1ZSwgdmFsdWUuY3VycmVudCwgZWxhcHNlZCwgdmFsdWUuc21vb3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbHVlLnJvdW5kKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gTWF0aC5yb3VuZCh1cGRhdGVkVmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IHNwZWVkUGVyU2Vjb25kKHVwZGF0ZWRWYWx1ZSAtIHZhbHVlLmN1cnJlbnQsIGVsYXBzZWQpO1xuXG4gICAgICAgICAgICBpZiAodXBkYXRlZFZhbHVlICE9PSB2YWx1ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB1cGRhdGVkVmFsdWU7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBzdGF0ZVxuICAgICAgICAgICAgaWYgKHZhbHVlLnVuaXQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZVdpdGhVbml0ID0gdXBkYXRlZFZhbHVlICsgdmFsdWUudW5pdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIHN0cmFpZ2h0IHRvIHN0YXRlIGlmIG5vIHBhcmVudFxuICAgICAgICAgICAgaWYgKCF2YWx1ZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWRLZXkgPSAodGhpcy5vblJlbmRlciAmJiB0aGlzLm9uUmVuZGVyLnN0YXRlTWFwKSA/IHRoaXMub25SZW5kZXIuc3RhdGVNYXBba2V5XSA6IGtleTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB1cGRhdGVkVmFsdWU7XG5cbiAgICAgICAgICAgIC8vIE9yIGFkZCB0byBwYXJlbnRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlbltrZXldID0gdXBkYXRlZFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaGFzQ2hhbmdlZDtcbiAgICB9XG5cbiAgICBwcmVSZW5kZXIoKSB7XG4gICAgICAgIC8vIHByb2Nlc3MgcGFyZW50IHZhbHVlc1xuICAgIH1cbn0iXX0=