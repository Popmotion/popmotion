'use strict';

exports.__esModule = true;

var _Action2 = require('../actions/Action');

var _Action3 = _interopRequireDefault(_Action2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
    Methods and properties to add to bound Actions
*/
var boundOnStart = function (action) {
    return action.actor.activateAction(action.id, action);
};
var boundOnStop = function (action) {
    return action.actor.deactivateAction(action.id);
};
var boundProps = function (actor) {
    return {
        actor: actor,
        isPriority: true,
        on: actor.on,
        _onStart: boundOnStart,
        _onStop: boundOnStop,
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
        var inheritedAction = action.inherit();
        var newValues = {};
        var hasNewValues = false;

        // Create values on actor that don't exist
        for (var key in inheritedAction.values) {
            if (inheritedAction.values.hasOwnProperty(key) && !this.values.hasOwnProperty(key)) {
                newValues[key] = inheritedAction.values[key];
                hasNewValues = true;
            }
        }

        if (hasNewValues) {
            this.set({ values: newValues });
        }

        return inheritedAction.set(boundProps(this, inheritedAction));
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

    Actor.prototype.willRender = function willRender(actor, frameStamp, elapsed) {
        for (var i = 0; i < this.numValueKeys; i++) {
            var key = this.valueKeys[i];
            var value = this.values[key];

            if (value.driver) {
                value.current = this.activeActions[value.driver].values[key].current;
            }
        }

        return _Action.prototype.willRender.call(this, actor, frameStamp, elapsed);
    };

    /*
        Add active actions
         @param [number]
        @param [Action]
    */

    Actor.prototype.activateAction = function activateAction(id, action) {
        this.activeActions[id] = action;
        this.numActiveActions++;

        for (var i = 0; i < action.numValueKeys; i++) {
            var key = action.valueKeys[i];
            var actionValue = action.values[key];
            var value = this.values[key];

            value.driver = id;
            actionValue.from = value.current;
        }

        if (this.numActiveActions) {
            _Action.prototype.start.call(this);
        }
    };

    /*
        Remove active actions
         @param [number]
    */

    Actor.prototype.deactivateAction = function deactivateAction(id) {
        var action = this.activeActions[id];

        for (var i = 0; i < action.numValueKeys; i++) {
            var key = action.valueKeys[i];
            var value = this.values[key];

            value.driver = undefined;
        }

        delete this.activeActions[id];
        this.numActiveActions--;

        if (!this.numActiveActions && this.isActive) {
            _Action.prototype.stop.call(this);
        }
    };

    return Actor;
})(_Action3.default);

exports.default = Actor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci9BY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSxZQUFZLEdBQUcsVUFBQyxNQUFNO1dBQUssTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUM7Q0FBQSxDQUFDO0FBQ2hGLElBQU0sV0FBVyxHQUFHLFVBQUMsTUFBTTtXQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztDQUFBLENBQUM7QUFDekUsSUFBTSxVQUFVLEdBQUcsVUFBQyxLQUFLO1dBQU07QUFDM0IsYUFBSyxFQUFFLEtBQUs7QUFDWixrQkFBVSxFQUFFLElBQUk7QUFDaEIsVUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO0FBQ1osZ0JBQVEsRUFBRSxZQUFZO0FBQ3RCLGVBQU8sRUFBRSxXQUFXO0FBQ3BCLGdCQUFRLEVBQUUsU0FBUztLQUN0QjtDQUFDLENBQUM7O0lBRWtCLEtBQUs7Y0FBTCxLQUFLOztBQUN0QixhQURpQixLQUFLLEdBQ0Q7OEJBREosS0FBSzs7MENBQ1AsSUFBSTtBQUFKLGdCQUFJOzs7cURBQ2YsMENBQVMsSUFBSSxFQUFDOztBQUNkLGNBQUssYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUN4QixjQUFLLGdCQUFnQixHQUFHLENBQUMsQ0FBQzs7S0FDN0I7O0FBTGdCLFNBQUssV0FPdEIsR0FBRyxnQkFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFO0FBQ2hCLFlBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUMxQiw4QkFBTSxHQUFHLEtBQUEsT0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqQixnQkFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2YsTUFBTTtBQUNILGdCQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25D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QUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUUvQixpQkFBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDNUI7O0FBRUQsZUFBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzlCLFlBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDOztBQUV4QixZQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDekMsOEJBQU0sSUFBSSxLQUFBLE1BQUUsQ0FBQztTQUNoQjtLQUNKOztXQTNJZ0IsS0FBSzs7O2tCQUFMLEtBQUsiLCJmaWxlIjoiQWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvQWN0aW9uJztcblxuLypcbiAgICBNZXRob2RzIGFuZCBwcm9wZXJ0aWVzIHRvIGFkZCB0byBib3VuZCBBY3Rpb25zXG4qL1xuY29uc3QgYm91bmRPblN0YXJ0ID0gKGFjdGlvbikgPT4gYWN0aW9uLmFjdG9yLmFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCwgYWN0aW9uKTtcbmNvbnN0IGJvdW5kT25TdG9wID0gKGFjdGlvbikgPT4gYWN0aW9uLmFjdG9yLmRlYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkKTtcbmNvbnN0IGJvdW5kUHJvcHMgPSAoYWN0b3IpID0+ICh7XG4gICAgYWN0b3I6IGFjdG9yLFxuICAgIGlzUHJpb3JpdHk6IHRydWUsXG4gICAgb246IGFjdG9yLm9uLFxuICAgIF9vblN0YXJ0OiBib3VuZE9uU3RhcnQsXG4gICAgX29uU3RvcDogYm91bmRPblN0b3AsXG4gICAgb25SZW5kZXI6IHVuZGVmaW5lZFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdG9yIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gMDtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMsIGluc3RhbnQpIHtcbiAgICAgICAgaWYgKGluc3RhbnQgfHwgIXRoaXMucmVkdWNlcikge1xuICAgICAgICAgICAgc3VwZXIuc2V0KHByb3BzKTtcbiAgICAgICAgICAgIHRoaXMub25jZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5yZWR1Y2VyKHByb3BzKTtcbiAgICAgICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KGFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBCaW5kIEFjdGlvbiB0byBBY3RvclxuICAgICovXG4gICAgYmluZChhY3Rpb24pIHtcbiAgICAgICAgY29uc3QgaW5oZXJpdGVkQWN0aW9uID0gYWN0aW9uLmluaGVyaXQoKTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlcyA9IHt9O1xuICAgICAgICBsZXQgaGFzTmV3VmFsdWVzID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHZhbHVlcyBvbiBhY3RvciB0aGF0IGRvbid0IGV4aXN0XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBpbmhlcml0ZWRBY3Rpb24udmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQWN0aW9uLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVzW2tleV0gPSBpbmhlcml0ZWRBY3Rpb24udmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgaGFzTmV3VmFsdWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNOZXdWYWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgdmFsdWVzOiBuZXdWYWx1ZXMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5oZXJpdGVkQWN0aW9uLnNldChib3VuZFByb3BzKHRoaXMsIGluaGVyaXRlZEFjdGlvbikpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN0YXJ0IEFjdG9yXG5cbiAgICAgICAgSWYgQWN0aW9uIGlzIHByb3ZpZGVkLCBiaW5kIGl0IHRvIHRoaXMgQWN0b3IgYW5kIHN0YXJ0XG5cbiAgICAgICAgQHBhcmFtIChvcHRpb25hbCkgW0FjdGlvbl1cbiAgICAqL1xuICAgIHN0YXJ0KGFjdGlvbikge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGJvdW5kQWN0aW9uID0gdGhpcy5iaW5kKGFjdGlvbik7XG4gICAgICAgICAgICBib3VuZEFjdGlvbi5zdGFydCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gYm91bmRBY3Rpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2tleV0uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2lsbFJlbmRlcihhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUuZHJpdmVyKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJdLnZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIud2lsbFJlbmRlcihhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQWRkIGFjdGl2ZSBhY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICovXG4gICAgYWN0aXZhdGVBY3Rpb24oaWQsIGFjdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdID0gYWN0aW9uO1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMrKztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbi5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gYWN0aW9uLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvblZhbHVlID0gYWN0aW9uLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YWx1ZS5kcml2ZXIgPSBpZDtcbiAgICAgICAgICAgIGFjdGlvblZhbHVlLmZyb20gPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubnVtQWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFJlbW92ZSBhY3RpdmUgYWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICovXG4gICAgZGVhY3RpdmF0ZUFjdGlvbihpZCkge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YWx1ZS5kcml2ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zLS07XG5cbiAgICAgICAgaWYgKCF0aGlzLm51bUFjdGl2ZUFjdGlvbnMgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==