'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Action2 = require('../actions/Action');

var _Action3 = _interopRequireDefault(_Action2);

var _utils = require('../inc/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var boundProps = function (actor, action) {
    return {
        onStart: function () {
            actor.activateAction(action.id, action);
        },
        onStop: function () {
            actor.deactivateAction(action.id);
        },
        onPreRender: function () {
            actor.state = _extends({}, actor.state, action.state);
        },
        element: action.element,
        onRender: action.onRender
    };
};

var Actor = function (_Action) {
    _inherits(Actor, _Action);

    function Actor() {
        _classCallCheck(this, Actor);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _Action.call.apply(_Action, [this].concat(args)));

        _this.activeActions = {};
        _this.numActiveActions = 0;
        return _this;
    }

    Actor.prototype.set = function set(props, instant) {
        if (instant || !this.reducer) {
            _Action.prototype.set.call(this, props);
            this.once();
        } else {
            var action = this.reducer(props);
            if (action) {
                this.start(action);
            }
        }
    };

    /*
        Bind Action to Actor
    */

    Actor.prototype.bind = function bind(action) {
        return action.inherit(boundProps(this, action));
    };

    /*
        Start Actor
         If Action is provided, bind it to this Actor and start
         @param (optional) [Action]
    */

    Actor.prototype.start = function start(action) {
        _Action.prototype.start.call(this);

        if (action) {
            var boundAction = this.bind(action);
            boundAction.start();

            return boundAction;
        } else {
            (0, _utils.each)(this.activeActions, function (action) {
                if (!action.isActive) {
                    action.start();
                }
            });
        }

        return this;
    };

    Actor.prototype.stop = function stop() {
        _Action.prototype.stop.call(this);
        (0, _utils.each)(this.activeActions, function (action) {
            return action.stop();
        });
    };

    /*
        Add active actions
         @param [number]
        @param [Action]
    */

    Actor.prototype.activateAction = function activateAction(id, action) {
        this.activeActions[id] = action;
        this.numActiveActions++;
    };

    /*
        Remove active actions
         @param [number]
    */

    Actor.prototype.deactivateAction = function deactivateAction(id) {
        this.activeActions[id] = undefined;
        this.numActiveActions--;
    };

    return Actor;
}(_Action3.default);

exports.default = Actor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci9BY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLElBQU0sYUFBYSxVQUFDLEtBQUQsRUFBUSxNQUFSO1dBQW9CO0FBQ25DLGlCQUFTLFlBQU07QUFDWCxrQkFBTSxjQUFOLENBQXFCLE9BQU8sRUFBUCxFQUFXLE1BQWhDLEVBRFc7U0FBTjtBQUdULGdCQUFRLFlBQU07QUFDVixrQkFBTSxnQkFBTixDQUF1QixPQUFPLEVBQVAsQ0FBdkIsQ0FEVTtTQUFOO0FBR1IscUJBQWEsWUFBTTtBQUNmLGtCQUFNLEtBQU4sZ0JBQW1CLE1BQU0sS0FBTixFQUFnQixPQUFPLEtBQVAsQ0FBbkMsQ0FEZTtTQUFOO0FBR2IsaUJBQVMsT0FBTyxPQUFQO0FBQ1Qsa0JBQVUsT0FBTyxRQUFQOztDQVhLOztJQWNFOzs7QUFDakIsYUFEaUIsS0FDakIsR0FBcUI7OEJBREosT0FDSTs7MENBQU47O1NBQU07O3FEQUNqQiwwQ0FBUyxLQUFULEdBRGlCOztBQUVqQixjQUFLLGFBQUwsR0FBcUIsRUFBckIsQ0FGaUI7QUFHakIsY0FBSyxnQkFBTCxHQUF3QixDQUF4QixDQUhpQjs7S0FBckI7O0FBRGlCLG9CQU9qQixtQkFBSSxPQUFPLFNBQVM7QUFDaEIsWUFBSSxXQUFXLENBQUMsS0FBSyxPQUFMLEVBQWM7QUFDMUIsOEJBQU0sR0FBTixZQUFVLEtBQVYsRUFEMEI7QUFFMUIsaUJBQUssSUFBTCxHQUYwQjtTQUE5QixNQUdPO0FBQ0gsZ0JBQU0sU0FBUyxLQUFLLE9BQUwsQ0FBYSxLQUFiLENBQVQsQ0FESDtBQUVILGdCQUFJLE1BQUosRUFBWTtBQUNSLHFCQUFLLEtBQUwsQ0FBVyxNQUFYLEVBRFE7YUFBWjtTQUxKOzs7Ozs7O0FBUmEsb0JBc0JqQixxQkFBSyxRQUFRO0FBQ1QsZUFBTyxPQUFPLE9BQVAsQ0FBZSxXQUFXLElBQVgsRUFBaUIsTUFBakIsQ0FBZixDQUFQLENBRFM7Ozs7Ozs7OztBQXRCSSxvQkFpQ2pCLHVCQUFNLFFBQVE7QUFDViwwQkFBTSxLQUFOLFlBRFU7O0FBR1YsWUFBSSxNQUFKLEVBQVk7QUFDUixnQkFBTSxjQUFjLEtBQUssSUFBTCxDQUFVLE1BQVYsQ0FBZCxDQURFO0FBRVIsd0JBQVksS0FBWixHQUZROztBQUlSLG1CQUFPLFdBQVAsQ0FKUTtTQUFaLE1BS087QUFDSCx1QkExREgsS0EwREcsQ0FBSyxLQUFLLGFBQUwsRUFBb0IsVUFBQyxNQUFELEVBQVk7QUFDakMsb0JBQUksQ0FBQyxPQUFPLFFBQVAsRUFBaUI7QUFDbEIsMkJBQU8sS0FBUCxHQURrQjtpQkFBdEI7YUFEcUIsQ0FBekIsQ0FERztTQUxQOztBQWFBLGVBQU8sSUFBUCxDQWhCVTs7O0FBakNHLG9CQW9EakIsdUJBQU87QUFDSCwwQkFBTSxJQUFOLFlBREc7QUFFSCxtQkF0RUMsS0FzRUQsQ0FBSyxLQUFLLGFBQUwsRUFBb0IsVUFBQyxNQUFEO21CQUFZLE9BQU8sSUFBUDtTQUFaLENBQXpCLENBRkc7Ozs7Ozs7OztBQXBEVSxvQkErRGpCLHlDQUFlLElBQUksUUFBUTtBQUN2QixhQUFLLGFBQUwsQ0FBbUIsRUFBbkIsSUFBeUIsTUFBekIsQ0FEdUI7QUFFdkIsYUFBSyxnQkFBTCxHQUZ1Qjs7Ozs7Ozs7QUEvRFYsb0JBeUVqQiw2Q0FBaUIsSUFBSTtBQUNqQixhQUFLLGFBQUwsQ0FBbUIsRUFBbkIsSUFBeUIsU0FBekIsQ0FEaUI7QUFFakIsYUFBSyxnQkFBTCxHQUZpQjs7O1dBekVKIiwiZmlsZSI6IkFjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL0FjdGlvbic7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3QgYm91bmRQcm9wcyA9IChhY3RvciwgYWN0aW9uKSA9PiAoe1xuICAgIG9uU3RhcnQ6ICgpID0+IHtcbiAgICAgICAgYWN0b3IuYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkLCBhY3Rpb24pO1xuICAgIH0sXG4gICAgb25TdG9wOiAoKSA9PiB7XG4gICAgICAgIGFjdG9yLmRlYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkKTtcbiAgICB9LFxuICAgIG9uUHJlUmVuZGVyOiAoKSA9PiB7XG4gICAgICAgIGFjdG9yLnN0YXRlID0geyAuLi5hY3Rvci5zdGF0ZSwgLi4uYWN0aW9uLnN0YXRlIH07XG4gICAgfSxcbiAgICBlbGVtZW50OiBhY3Rpb24uZWxlbWVudCxcbiAgICBvblJlbmRlcjogYWN0aW9uLm9uUmVuZGVyXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0b3IgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSAwO1xuICAgIH1cblxuICAgIHNldChwcm9wcywgaW5zdGFudCkge1xuICAgICAgICBpZiAoaW5zdGFudCB8fCAhdGhpcy5yZWR1Y2VyKSB7XG4gICAgICAgICAgICBzdXBlci5zZXQocHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLnJlZHVjZXIocHJvcHMpO1xuICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEJpbmQgQWN0aW9uIHRvIEFjdG9yXG4gICAgKi9cbiAgICBiaW5kKGFjdGlvbikge1xuICAgICAgICByZXR1cm4gYWN0aW9uLmluaGVyaXQoYm91bmRQcm9wcyh0aGlzLCBhY3Rpb24pKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBBY3RvclxuXG4gICAgICAgIElmIEFjdGlvbiBpcyBwcm92aWRlZCwgYmluZCBpdCB0byB0aGlzIEFjdG9yIGFuZCBzdGFydFxuXG4gICAgICAgIEBwYXJhbSAob3B0aW9uYWwpIFtBY3Rpb25dXG4gICAgKi9cbiAgICBzdGFydChhY3Rpb24pIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBib3VuZEFjdGlvbiA9IHRoaXMuYmluZChhY3Rpb24pO1xuICAgICAgICAgICAgYm91bmRBY3Rpb24uc3RhcnQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kQWN0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWFjaCh0aGlzLmFjdGl2ZUFjdGlvbnMsIChhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24uc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcbiAgICAgICAgZWFjaCh0aGlzLmFjdGl2ZUFjdGlvbnMsIChhY3Rpb24pID0+IGFjdGlvbi5zdG9wKCkpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFkZCBhY3RpdmUgYWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAqL1xuICAgIGFjdGl2YXRlQWN0aW9uKGlkLCBhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zKys7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUmVtb3ZlIGFjdGl2ZSBhY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlQWN0aW9uKGlkKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tO1xuICAgIH1cbn0iXX0=