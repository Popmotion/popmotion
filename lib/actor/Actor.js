'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Action2 = require('../actions/Action');

var _Action3 = _interopRequireDefault(_Action2);

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
        }
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

        _this.once();
        _this.activeActions = {};
        _this.numActiveActions = 0;
        return _this;
    }

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
            each(this.activeActions, function (action) {
                if (!action.isActive) {
                    action.start();
                }
            });
        }

        return this;
    };

    Actor.prototype.stop = function stop() {
        _Action.prototype.stop.call(this);
        each(this.activeActions, function (action) {
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
        this.start();
    };

    /*
        Remove active actions
         @param [number]
    */

    Actor.prototype.deactivateAction = function deactivateAction(id) {
        this.activeActions[id] = undefined;
        this.numActiveActions--;

        if (!this.numActiveActions) {
            this.stop();
        }
    };

    return Actor;
}(_Action3.default);

exports.default = Actor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci9BY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLGFBQWEsVUFBQyxLQUFELEVBQVEsTUFBUjtXQUFvQjtBQUNuQyxpQkFBUyxZQUFNO0FBQ1gsa0JBQU0sY0FBTixDQUFxQixPQUFPLEVBQVAsRUFBVyxNQUFoQyxFQURXO1NBQU47QUFHVCxnQkFBUSxZQUFNO0FBQ1Ysa0JBQU0sZ0JBQU4sQ0FBdUIsT0FBTyxFQUFQLENBQXZCLENBRFU7U0FBTjtBQUdSLHFCQUFhLFlBQU07QUFDZixrQkFBTSxLQUFOLGdCQUFtQixNQUFNLEtBQU4sRUFBZ0IsT0FBTyxLQUFQLENBQW5DLENBRGU7U0FBTjs7Q0FQRTs7SUFZRTs7O0FBQ2pCLGFBRGlCLEtBQ2pCLEdBQXFCOzhCQURKLE9BQ0k7OzBDQUFOOztTQUFNOztxREFDakIsMENBQVMsS0FBVCxHQURpQjs7QUFFakIsY0FBSyxJQUFMLEdBRmlCO0FBR2pCLGNBQUssYUFBTCxHQUFxQixFQUFyQixDQUhpQjtBQUlqQixjQUFLLGdCQUFMLEdBQXdCLENBQXhCLENBSmlCOztLQUFyQjs7Ozs7O0FBRGlCLG9CQVdqQixxQkFBSyxRQUFRO0FBQ1QsZUFBTyxPQUFPLE9BQVAsQ0FBZSxXQUFXLElBQVgsRUFBaUIsTUFBakIsQ0FBZixDQUFQLENBRFM7Ozs7Ozs7OztBQVhJLG9CQXNCakIsdUJBQU0sUUFBUTtBQUNWLDBCQUFNLEtBQU4sWUFEVTs7QUFHVixZQUFJLE1BQUosRUFBWTtBQUNSLGdCQUFNLGNBQWMsS0FBSyxJQUFMLENBQVUsTUFBVixDQUFkLENBREU7QUFFUix3QkFBWSxLQUFaLEdBRlE7O0FBSVIsbUJBQU8sV0FBUCxDQUpRO1NBQVosTUFLTztBQUNILGlCQUFLLEtBQUssYUFBTCxFQUFvQixVQUFDLE1BQUQsRUFBWTtBQUNqQyxvQkFBSSxDQUFDLE9BQU8sUUFBUCxFQUFpQjtBQUNsQiwyQkFBTyxLQUFQLEdBRGtCO2lCQUF0QjthQURxQixDQUF6QixDQURHO1NBTFA7O0FBYUEsZUFBTyxJQUFQLENBaEJVOzs7QUF0Qkcsb0JBeUNqQix1QkFBTztBQUNILDBCQUFNLElBQU4sWUFERztBQUVILGFBQUssS0FBSyxhQUFMLEVBQW9CLFVBQUMsTUFBRDttQkFBWSxPQUFPLElBQVA7U0FBWixDQUF6QixDQUZHOzs7Ozs7Ozs7QUF6Q1Usb0JBb0RqQix5Q0FBZSxJQUFJLFFBQVE7QUFDdkIsYUFBSyxhQUFMLENBQW1CLEVBQW5CLElBQXlCLE1BQXpCLENBRHVCO0FBRXZCLGFBQUssZ0JBQUwsR0FGdUI7QUFHdkIsYUFBSyxLQUFMLEdBSHVCOzs7Ozs7OztBQXBEVixvQkErRGpCLDZDQUFpQixJQUFJO0FBQ2pCLGFBQUssYUFBTCxDQUFtQixFQUFuQixJQUF5QixTQUF6QixDQURpQjtBQUVqQixhQUFLLGdCQUFMLEdBRmlCOztBQUlqQixZQUFJLENBQUMsS0FBSyxnQkFBTCxFQUF1QjtBQUN4QixpQkFBSyxJQUFMLEdBRHdCO1NBQTVCOzs7V0FuRWEiLCJmaWxlIjoiQWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvQWN0aW9uJztcblxuY29uc3QgYm91bmRQcm9wcyA9IChhY3RvciwgYWN0aW9uKSA9PiAoe1xuICAgIG9uU3RhcnQ6ICgpID0+IHtcbiAgICAgICAgYWN0b3IuYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkLCBhY3Rpb24pO1xuICAgIH0sXG4gICAgb25TdG9wOiAoKSA9PiB7XG4gICAgICAgIGFjdG9yLmRlYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkKTtcbiAgICB9LFxuICAgIG9uUHJlUmVuZGVyOiAoKSA9PiB7XG4gICAgICAgIGFjdG9yLnN0YXRlID0geyAuLi5hY3Rvci5zdGF0ZSwgLi4uYWN0aW9uLnN0YXRlIH07XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdG9yIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IDA7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgICAqL1xuICAgIGJpbmQoYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBhY3Rpb24uaW5oZXJpdChib3VuZFByb3BzKHRoaXMsIGFjdGlvbikpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN0YXJ0IEFjdG9yXG5cbiAgICAgICAgSWYgQWN0aW9uIGlzIHByb3ZpZGVkLCBiaW5kIGl0IHRvIHRoaXMgQWN0b3IgYW5kIHN0YXJ0XG5cbiAgICAgICAgQHBhcmFtIChvcHRpb25hbCkgW0FjdGlvbl1cbiAgICAqL1xuICAgIHN0YXJ0KGFjdGlvbikge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGJvdW5kQWN0aW9uID0gdGhpcy5iaW5kKGFjdGlvbik7XG4gICAgICAgICAgICBib3VuZEFjdGlvbi5zdGFydCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gYm91bmRBY3Rpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlYWNoKHRoaXMuYWN0aXZlQWN0aW9ucywgKGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICBlYWNoKHRoaXMuYWN0aXZlQWN0aW9ucywgKGFjdGlvbikgPT4gYWN0aW9uLnN0b3AoKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQWRkIGFjdGl2ZSBhY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICovXG4gICAgYWN0aXZhdGVBY3Rpb24oaWQsIGFjdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdID0gYWN0aW9uO1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMrKztcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFJlbW92ZSBhY3RpdmUgYWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICovXG4gICAgZGVhY3RpdmF0ZUFjdGlvbihpZCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMtLTtcblxuICAgICAgICBpZiAoIXRoaXMubnVtQWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19