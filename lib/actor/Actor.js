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
        on: action.on,
        onStart: function () {
            actor.activateAction(action.id, action);

            // Copy Actor properties to Action
            for (var key in action.values) {
                if (action.values.hasOwnProperty(key)) {
                    var actorValue = actor.value[key];
                    var actionValue = action.value[key];

                    for (var propKey in actorValue) {
                        if (actorValue.hasOwnProperty(propKey)) {
                            actionValue[propKey] = actorValue[propKey];
                        }
                    }
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
        },
        onRender: undefined
    };
};

var Actor = (function (_Action) {
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
        var newValues = {};
        var hasNewValues = false;

        // Create values on actor that don't exist
        for (var key in action.values) {
            if (action.values.hasOwnProperty(key) && !this.values.hasOwnProperty(key)) {
                newValues[key] = {};
            }
        }

        if (hasNewValues) {
            this.set(newValues);
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
})(_Action3.default);

exports.default = Actor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci9BY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxVQUFVLEdBQUcsVUFBQyxLQUFLLEVBQUUsTUFBTTtXQUFNO0FBQ25DLFVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTtBQUNiLGVBQU8sRUFBRSxZQUFNO0FBQ1gsaUJBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUM7OztBQUFDLEFBR3hDLGlCQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7QUFDM0Isb0JBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDbkMsd0JBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDcEMsd0JBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXRDLHlCQUFLLElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRTtBQUM1Qiw0QkFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ3BDLHVDQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUM5QztxQkFDSjtpQkFDSjthQUNKO1NBQ0o7QUFDRCxjQUFNLEVBQUUsWUFBTTtBQUNWLGlCQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3JDO0FBQ0QsbUJBQVcsRUFBRSxnQkFBdUI7Z0JBQXBCLEtBQUssUUFBTCxLQUFLO2dCQUFFLE1BQU0sUUFBTixNQUFNOzs7QUFFekIsaUJBQUssSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFO0FBQ25CLG9CQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDM0IseUJBQUssQ0FBQyxLQUFLLENBQUMsR0FB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QUFJLENBQUMsYUFBYSxFQUFFO0FBQ2hDLGdCQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3hDLG9CQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2xDO1NBQ0o7S0FDSjs7QUE3RWdCLFNBQUssV0ErRXRCLFVBQVUseUJBQUc7QUFDVCxlQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7OztBQWpGZ0IsU0FBSyxXQXlGdEIsY0FBYywyQkFBQyxFQUFFLEVBQUUsTUFBTSxFQUFFO0FBQ3ZCLFlBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQ2hDLFlBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDOztBQUV4QixZQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtBQUN2Qiw4QkFBTSxLQUFLLEtBQUEsTUFBRSxDQUFDO1NBQ2pCO0tBQ0o7Ozs7Ozs7QUFoR2dCLFNBQUssV0F1R3RCLGdCQUFnQiw2QkFBQyxFQUFFLEVBQUU7QUFDakIsZUFBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzlCLFlBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDOztBQUV4QixZQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDekMsOEJBQU0sSUFBSSxLQUFBLE1BQUUsQ0FBQztTQUNoQjtLQUNKOztXQTlHZ0IsS0FBSzs7O2tCQUFMLEtBQUsiLCJmaWxlIjoiQWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvQWN0aW9uJztcblxuY29uc3QgYm91bmRQcm9wcyA9IChhY3RvciwgYWN0aW9uKSA9PiAoe1xuICAgIG9uOiBhY3Rpb24ub24sXG4gICAgb25TdGFydDogKCkgPT4ge1xuICAgICAgICBhY3Rvci5hY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQsIGFjdGlvbik7XG5cbiAgICAgICAgLy8gQ29weSBBY3RvciBwcm9wZXJ0aWVzIHRvIEFjdGlvblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gYWN0aW9uLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKGFjdGlvbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdG9yVmFsdWUgPSBhY3Rvci52YWx1ZVtrZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvblZhbHVlID0gYWN0aW9uLnZhbHVlW2tleV07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wS2V5IGluIGFjdG9yVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdG9yVmFsdWUuaGFzT3duUHJvcGVydHkocHJvcEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblZhbHVlW3Byb3BLZXldID0gYWN0b3JWYWx1ZVtwcm9wS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25TdG9wOiAoKSA9PiB7XG4gICAgICAgIGFjdG9yLmRlYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkKTtcbiAgICB9LFxuICAgIG9uUHJlUmVuZGVyOiAoeyBzdGF0ZSwgdmFsdWVzIH0pID0+IHtcbiAgICAgICAgLy8gVXBkYXRlIGFjdG9yIHZhbHVlcyB3aXRoIGluY29taW5nIHN0YXRlIHZhbHVlc1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgYWN0b3Iuc3RhdGVba2V5XSA9IHN0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgYWN0b3IudmFsdWVzW2tleV0uY3VycmVudCA9IHZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgYWN0b3IudmFsdWVzW2tleV0udmVsb2NpdHkgPSB2YWx1ZXNba2V5XS52ZWxvY2l0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25SZW5kZXI6IHVuZGVmaW5lZFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdG9yIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gMDtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMsIGluc3RhbnQpIHtcbiAgICAgICAgaWYgKGluc3RhbnQgfHwgIXRoaXMucmVkdWNlcikge1xuICAgICAgICAgICAgc3VwZXIuc2V0KHByb3BzKTtcbiAgICAgICAgICAgIHRoaXMub25jZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5yZWR1Y2VyKHByb3BzKTtcbiAgICAgICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KGFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBCaW5kIEFjdGlvbiB0byBBY3RvclxuICAgICovXG4gICAgYmluZChhY3Rpb24pIHtcbiAgICAgICAgbGV0IG5ld1ZhbHVlcyA9IHt9O1xuICAgICAgICBsZXQgaGFzTmV3VmFsdWVzID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHZhbHVlcyBvbiBhY3RvciB0aGF0IGRvbid0IGV4aXN0XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhY3Rpb24udmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVzW2tleV0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNOZXdWYWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KG5ld1ZhbHVlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aW9uLmluaGVyaXQoYm91bmRQcm9wcyh0aGlzLCBhY3Rpb24pKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBBY3RvclxuXG4gICAgICAgIElmIEFjdGlvbiBpcyBwcm92aWRlZCwgYmluZCBpdCB0byB0aGlzIEFjdG9yIGFuZCBzdGFydFxuXG4gICAgICAgIEBwYXJhbSAob3B0aW9uYWwpIFtBY3Rpb25dXG4gICAgKi9cbiAgICBzdGFydChhY3Rpb24pIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBib3VuZEFjdGlvbiA9IHRoaXMuYmluZChhY3Rpb24pO1xuICAgICAgICAgICAgYm91bmRBY3Rpb24uc3RhcnQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kQWN0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1trZXldLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdpbGxSZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFkZCBhY3RpdmUgYWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAqL1xuICAgIGFjdGl2YXRlQWN0aW9uKGlkLCBhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zKys7XG5cbiAgICAgICAgaWYgKHRoaXMubnVtQWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFJlbW92ZSBhY3RpdmUgYWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICovXG4gICAgZGVhY3RpdmF0ZUFjdGlvbihpZCkge1xuICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zLS07XG5cbiAgICAgICAgaWYgKCF0aGlzLm51bUFjdGl2ZUFjdGlvbnMgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==