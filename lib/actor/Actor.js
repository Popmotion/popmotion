'use strict';

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

            for (var key in action.values) {
                if (action.values.hasOwnProperty(key) && actor.values.hasOwnProperty(key)) {
                    action.values[key].current = actor.values[key].current;
                    action.values[key].velocity = actor.values[key].velocity;
                }
            }
        },
        onStop: function () {
            actor.deactivateAction(action.id);
        },
        onPreRender: function (_ref) {
            var state = _ref.state;
            var values = _ref.values;

            // Update actor values with incoming state values
            for (var key in state) {
                if (state.hasOwnProperty(key)) {
                    actor.state[key] = state[key];
                    actor.values[key].current = values[key].current;
                    actor.values[key].velocity = values[key].velocity;
                }
            }
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
        // Create values on actor that don't exist
        for (var key in action.values) {
            if (action.values.hasOwnProperty(key) && !this.values.hasOwnProperty(key)) {
                this.values[key] = {};
            }
        }

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
            for (var key in this.activeActions) {
                if (this.activeActions.hasOwnProperty(key)) {
                    var _action = this.activeActions[key];
                    if (!_action.isActive) {
                        _action.start();
                    }
                }
            }
        }

        return this;
    };

    Actor.prototype.stop = function stop() {
        _Action.prototype.stop.call(this);

        for (var key in this.activeActions) {
            if (this.activeActions.hasOwnProperty(key)) {
                this.activeActions[key].stop();
            }
        }
    };

    Actor.prototype.willRender = function willRender() {
        return true;
    };

    /*
        Add active actions
         @param [number]
        @param [Action]
    */

    Actor.prototype.activateAction = function activateAction(id, action) {
        this.activeActions[id] = action;
        this.numActiveActions++;

        if (this.numActiveActions) {
            _Action.prototype.start.call(this);
        }
    };

    /*
        Remove active actions
         @param [number]
    */

    Actor.prototype.deactivateAction = function deactivateAction(id) {
        delete this.activeActions[id];
        this.numActiveActions--;

        if (!this.numActiveActions && this.isActive) {
            _Action.prototype.stop.call(this);
        }
    };

    return Actor;
}(_Action3.default);

exports.default = Actor;
//# sourceMappingURL=data:application/json;base64,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b25zL0FjdGlvbic7XG5cbmNvbnN0IGJvdW5kUHJvcHMgPSAoYWN0b3IsIGFjdGlvbikgPT4gKHtcbiAgICBvblN0YXJ0OiAoKSA9PiB7XG4gICAgICAgIGFjdG9yLmFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCwgYWN0aW9uKTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYWN0aW9uLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKGFjdGlvbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBhY3Rvci52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbi52YWx1ZXNba2V5XS5jdXJyZW50ID0gYWN0b3IudmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgICAgICAgICAgICBhY3Rpb24udmFsdWVzW2tleV0udmVsb2NpdHkgPSBhY3Rvci52YWx1ZXNba2V5XS52ZWxvY2l0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25TdG9wOiAoKSA9PiB7XG4gICAgICAgIGFjdG9yLmRlYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkKTtcbiAgICB9LFxuICAgIG9uUHJlUmVuZGVyOiAoeyBzdGF0ZSwgdmFsdWVzIH0pID0+IHtcbiAgICAgICAgLy8gVXBkYXRlIGFjdG9yIHZhbHVlcyB3aXRoIGluY29taW5nIHN0YXRlIHZhbHVlc1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgYWN0b3Iuc3RhdGVba2V5XSA9IHN0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgYWN0b3IudmFsdWVzW2tleV0uY3VycmVudCA9IHZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgYWN0b3IudmFsdWVzW2tleV0udmVsb2NpdHkgPSB2YWx1ZXNba2V5XS52ZWxvY2l0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3RvciBleHRlbmRzIEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IDA7XG4gICAgfVxuXG4gICAgc2V0KHByb3BzLCBpbnN0YW50KSB7XG4gICAgICAgIGlmIChpbnN0YW50IHx8ICF0aGlzLnJlZHVjZXIpIHtcbiAgICAgICAgICAgIHN1cGVyLnNldChwcm9wcyk7XG4gICAgICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMucmVkdWNlcihwcm9wcyk7XG4gICAgICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydChhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgICAqL1xuICAgIGJpbmQoYWN0aW9uKSB7XG4gICAgICAgIC8vIENyZWF0ZSB2YWx1ZXMgb24gYWN0b3IgdGhhdCBkb24ndCBleGlzdFxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYWN0aW9uLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKGFjdGlvbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW2tleV0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhY3Rpb24uaW5oZXJpdChib3VuZFByb3BzKHRoaXMsIGFjdGlvbikpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN0YXJ0IEFjdG9yXG5cbiAgICAgICAgSWYgQWN0aW9uIGlzIHByb3ZpZGVkLCBiaW5kIGl0IHRvIHRoaXMgQWN0b3IgYW5kIHN0YXJ0XG5cbiAgICAgICAgQHBhcmFtIChvcHRpb25hbCkgW0FjdGlvbl1cbiAgICAqL1xuICAgIHN0YXJ0KGFjdGlvbikge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGJvdW5kQWN0aW9uID0gdGhpcy5iaW5kKGFjdGlvbik7XG4gICAgICAgICAgICBib3VuZEFjdGlvbi5zdGFydCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gYm91bmRBY3Rpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2tleV0uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2lsbFJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQWRkIGFjdGl2ZSBhY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICovXG4gICAgYWN0aXZhdGVBY3Rpb24oaWQsIGFjdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdID0gYWN0aW9uO1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMrKztcblxuICAgICAgICBpZiAodGhpcy5udW1BY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUmVtb3ZlIGFjdGl2ZSBhY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlQWN0aW9uKGlkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMtLTtcblxuICAgICAgICBpZiAoIXRoaXMubnVtQWN0aXZlQWN0aW9ucyAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19