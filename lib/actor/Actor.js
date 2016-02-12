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
        onStart: boundOnStart,
        onStop: boundOnStop
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
        var inheritedAction = action.inherit();
        var newValues = {};
        var hasNewValues = false;

        // Create values on actor that don't exist
        for (var key in inheritedAction.values) {
            if (inheritedAction.values.hasOwnProperty(key) && !this.values.hasOwnProperty(key)) {
                newValues[key] = {};
                hasNewValues = true;
            }
        }

        if (hasNewValues) {
            this.set(newValues);
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

        _Action.prototype.willRender.call(this, actor, frameStamp, elapsed);
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
            var value = this.values[key];

            value.driver = id;
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
}(_Action3.default);

exports.default = Actor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci9BY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSxlQUFlLFVBQUMsTUFBRDtXQUFZLE9BQU8sS0FBUCxDQUFhLGNBQWIsQ0FBNEIsT0FBTyxFQUFQLEVBQVcsTUFBdkM7Q0FBWjtBQUNyQixJQUFNLGNBQWMsVUFBQyxNQUFEO1dBQVksT0FBTyxLQUFQLENBQWEsZ0JBQWIsQ0FBOEIsT0FBTyxFQUFQO0NBQTFDO0FBQ3BCLElBQU0sYUFBYSxVQUFDLEtBQUQ7V0FBWTtBQUMzQixlQUFPLEtBQVA7QUFDQSxvQkFBWSxJQUFaO0FBQ0EsWUFBSSxNQUFNLEVBQU47QUFDSixpQkFBUyxZQUFUO0FBQ0EsZ0JBQVEsV0FBUjs7Q0FMZTs7SUFRRTs7O0FBQ2pCLGFBRGlCLEtBQ2pCLEdBQXFCOzhCQURKLE9BQ0k7OzBDQUFOOztTQUFNOztxREFDakIsMENBQVMsS0FBVCxHQURpQjs7QUFFakIsY0FBSyxhQUFMLEdBQXFCLEVBQXJCLENBRmlCO0FBR2pCLGNBQUssZ0JBQUwsR0FBd0IsQ0FBeEIsQ0FIaUI7O0tBQXJCOztBQURpQixvQkFPakIsbUJBQUksT0FBTyxTQUFTO0FBQ2hCLFlBQUksV0FBVyxDQUFDLEtBQUssT0FBTCxFQUFjO0FBQzFCLDhCQUFNLEdBQU4sWUFBVSxLQUFWLEVBRDBCO0FBRTFCLGlCQUFLLElBQUwsR0FGMEI7U0FBOUIsTUFHTztBQUNILGdCQUFNLFNBQVMsS0FBSyxPQUFMLENBQWEsS0FBYixDQUFULENBREg7QUFFSCxnQkFBSSxNQUFKLEVBQVk7QUFDUixxQkFBSyxLQUFMLENBQVcsTUFBWCxFQURRO2FBQVo7U0FMSjs7Ozs7OztBQVJhLG9CQXNCakIscUJBQUssUUFBUTtBQUNULFlBQU0sa0JBQWtCLE9BQU8sT0FBUCxFQUFsQixDQURHO0FBRVQsWUFBSSxZQUFZLEVBQVosQ0FGSztBQUdULFlBQUksZUFBZSxLQUFmOzs7QUFISyxhQU1KLElBQUks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YUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksT0FBTyxZQUFQLEVBQXFCLEdBQXpDLEVBQThDO0FBQzFDLGdCQUFNLE1BQU0sT0FBTyxTQUFQLENBQWlCLENBQWpCLENBQU4sQ0FEb0M7QUFFMUMsZ0JBQU0sUUFBUSxLQUFLLE1BQUwsQ0FBWSxHQUFaLENBQVIsQ0FGb0M7O0FBSTFDLGtCQUFNLE1BQU4sR0FBZSxTQUFmLENBSjBDO1NBQTlDOztBQU9BLGVBQU8sS0FBSyxhQUFMLENBQW1CLEVBQW5CLENBQVAsQ0FWaUI7QUFXakIsYUFBSyxnQkFBTCxHQVhpQjs7QUFhakIsWUFBSSxDQUFDLEtBQUssZ0JBQUwsSUFBeUIsS0FBSyxRQUFMLEVBQWU7QUFDekMsOEJBQU0sSUFBTixZQUR5QztTQUE3Qzs7O1dBdElhIiwiZmlsZSI6IkFjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL0FjdGlvbic7XG5cbi8qXG4gICAgTWV0aG9kcyBhbmQgcHJvcGVydGllcyB0byBhZGQgdG8gYm91bmQgQWN0aW9uc1xuKi9cbmNvbnN0IGJvdW5kT25TdGFydCA9IChhY3Rpb24pID0+IGFjdGlvbi5hY3Rvci5hY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQsIGFjdGlvbik7XG5jb25zdCBib3VuZE9uU3RvcCA9IChhY3Rpb24pID0+IGFjdGlvbi5hY3Rvci5kZWFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCk7XG5jb25zdCBib3VuZFByb3BzID0gKGFjdG9yKSA9PiAoe1xuICAgIGFjdG9yOiBhY3RvcixcbiAgICBpc1ByaW9yaXR5OiB0cnVlLFxuICAgIG9uOiBhY3Rvci5vbixcbiAgICBvblN0YXJ0OiBib3VuZE9uU3RhcnQsXG4gICAgb25TdG9wOiBib3VuZE9uU3RvcFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdG9yIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gMDtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMsIGluc3RhbnQpIHtcbiAgICAgICAgaWYgKGluc3RhbnQgfHwgIXRoaXMucmVkdWNlcikge1xuICAgICAgICAgICAgc3VwZXIuc2V0KHByb3BzKTtcbiAgICAgICAgICAgIHRoaXMub25jZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5yZWR1Y2VyKHByb3BzKTtcbiAgICAgICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KGFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBCaW5kIEFjdGlvbiB0byBBY3RvclxuICAgICovXG4gICAgYmluZChhY3Rpb24pIHtcbiAgICAgICAgY29uc3QgaW5oZXJpdGVkQWN0aW9uID0gYWN0aW9uLmluaGVyaXQoKTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlcyA9IHt9O1xuICAgICAgICBsZXQgaGFzTmV3VmFsdWVzID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHZhbHVlcyBvbiBhY3RvciB0aGF0IGRvbid0IGV4aXN0XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBpbmhlcml0ZWRBY3Rpb24udmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQWN0aW9uLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVzW2tleV0gPSB7fTtcbiAgICAgICAgICAgICAgICBoYXNOZXdWYWx1ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc05ld1ZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5zZXQobmV3VmFsdWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmhlcml0ZWRBY3Rpb24uc2V0KGJvdW5kUHJvcHModGhpcywgaW5oZXJpdGVkQWN0aW9uKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU3RhcnQgQWN0b3JcblxuICAgICAgICBJZiBBY3Rpb24gaXMgcHJvdmlkZWQsIGJpbmQgaXQgdG8gdGhpcyBBY3RvciBhbmQgc3RhcnRcblxuICAgICAgICBAcGFyYW0gKG9wdGlvbmFsKSBbQWN0aW9uXVxuICAgICovXG4gICAgc3RhcnQoYWN0aW9uKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgY29uc3QgYm91bmRBY3Rpb24gPSB0aGlzLmJpbmQoYWN0aW9uKTtcbiAgICAgICAgICAgIGJvdW5kQWN0aW9uLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBib3VuZEFjdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5kcml2ZXIpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdGhpcy5hY3RpdmVBY3Rpb25zW3ZhbHVlLmRyaXZlcl0udmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLndpbGxSZW5kZXIoYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFkZCBhY3RpdmUgYWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAqL1xuICAgIGFjdGl2YXRlQWN0aW9uKGlkLCBhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zKys7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhbHVlLmRyaXZlciA9IGlkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubnVtQWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFJlbW92ZSBhY3RpdmUgYWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICovXG4gICAgZGVhY3RpdmF0ZUFjdGlvbihpZCkge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YWx1ZS5kcml2ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zLS07XG5cbiAgICAgICAgaWYgKCF0aGlzLm51bUFjdGl2ZUFjdGlvbnMgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==