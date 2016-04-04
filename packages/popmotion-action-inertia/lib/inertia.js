'use strict';

exports.__esModule = true;

var _popmotion = require('popmotion');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   Kinetic scrolling ala http://ariya.ofilabs.com/2013/11/javascript-kinetic-scrolling-part-2.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var currentTime = _popmotion.utils.currentTime;

var Inertia = (function (_Action) {
    _inherits(Inertia, _Action);

    function Inertia() {
        _classCallCheck(this, Inertia);

        return _possibleConstructorReturn(this, _Action.apply(this, arguments));
    }

    Inertia.prototype.start = function start() {
        _Action.prototype.start.call(this);
        this.started = currentTime();
        this.targetEnd = this.started + 0;

        for (var i = 0; i < this.numValueKeys; i++) {
            var value = this.values[this.valueKeys[i]];

            if (value.to === undefined) {
                value.to = Math.round(value.current + value.mass * value.velocity);
            }
        }
    };

    Inertia.prototype.onUpdate = function onUpdate() {
        var totalElapsed = currentTime() - this.started;

        this.ended = true;

        for (var i = 0; i < this.numValueKeys; i++) {
            var value = this.values[this.valueKeys[i]];
            var delta = -value.to * Math.exp(-totalElapsed / value.timeConstant);

            // If we're still far away from the target, continue
            if (delta > 0.1 || delta < -0.1) {
                this.ended = false;
                value.current = value.to + delta;

                // Otherwise snap to target
            } else {
                    value.current = value.to;
                }
        }
    };

    Inertia.prototype.onFrameEnd = function onFrameEnd() {
        if (this.ended) {
            this.complete();
        }
    };

    return Inertia;
})(_popmotion.Action);

Inertia.prototype.defaultValueProp = 'velocity';
Inertia.prototype.defaultValue = _popmotion.Action.extendDefaultValue({
    timeConstant: 325,
    amp: 0.8
});

exports.default = function (props) {
    return new Inertia(props);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmVydGlhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSxXQUFXLEdBQUcsaUJBQU0sV0FBVyxDQUFDOztJQUVoQyxPQUFPO2NBQVAsT0FBTzs7YUFBUCxPQUFPOzhCQUFQLE9BQU87Ozs7O0FBQVAsV0FBTyxXQUNULEtBQUssb0JBQUc7QUFDSiwwQkFBTSxLQUFLLEtBQUEsTUFBRSxDQUFDO0FBQ2QsWUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLEVBQUUsQ0FBQztBQUM3QixZQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDOztBQUVsQyxhQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN4QyxnQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRTdDLGdCQUFJLEtBQUssQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFO0FBQ3hCLHFCQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBSSxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEFBQUMsQ0FBQyxDQUFDO2FBQ3hFO1NBQ0o7S0FDSjs7QUFiQyxXQUFPLFdBZVQsUUFBUSx1QkFBRztBQUNQLFlBQU0sWUFBWSxHQUFHLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7O0FBRWxELFlBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOztBQUVsQixhQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN4QyxnQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0MsZ0JBQU0sS0FBSyxHQUFHLENBQUUsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUUsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7OztBQUFDLEFBR3pFLGdCQUFJLEtBQUssR0FBRyxHQUFHLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFO0FBQzdCLG9CQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixxQkFBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsRUFBRSxHQUFHLEtBQUs7OztBQUFDLGFBR3BDLE1BQU07QUFDSCx5QkFBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO2lCQUM1QjtTQUNKO0tBQ0o7O0FBbENDLFdBQU8sV0FvQ1QsVUFBVSx5QkFBRztBQUNULFlBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNaLGdCQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7S0FDSjs7V0F4Q0MsT0FBTzs7O0FBMkNiLE9BQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDO0FBQ2hELE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLGtCQUFPLGtCQUFrQixDQUFDO0FBQ3ZELGdCQUFZLEVBQUUsR0FBRztBQUNqQixPQUFHLEVBQUUsR0FBRztDQUNYLENBQUMsQ0FBQzs7a0JBRVksVUFBQyxLQUFLO1dBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDO0NBQUEiLCJmaWxlIjoiaW5lcnRpYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgS2luZXRpYyBzY3JvbGxpbmcgYWxhIGh0dHA6Ly9hcml5YS5vZmlsYWJzLmNvbS8yMDEzLzExL2phdmFzY3JpcHQta2luZXRpYy1zY3JvbGxpbmctcGFydC0yLmh0bWxcbiovXG5pbXBvcnQgeyBBY3Rpb24sIHV0aWxzIH0gZnJvbSAncG9wbW90aW9uJztcblxuY29uc3QgY3VycmVudFRpbWUgPSB1dGlscy5jdXJyZW50VGltZTtcblxuY2xhc3MgSW5lcnRpYSBleHRlbmRzIEFjdGlvbiB7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGN1cnJlbnRUaW1lKCk7XG4gICAgICAgIHRoaXMudGFyZ2V0RW5kID0gdGhpcy5zdGFydGVkICsgMDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNbdGhpcy52YWx1ZUtleXNbaV1dO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUudG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnRvID0gTWF0aC5yb3VuZCh2YWx1ZS5jdXJyZW50ICsgKHZhbHVlLm1hc3MgKiB2YWx1ZS52ZWxvY2l0eSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25VcGRhdGUoKSB7XG4gICAgICAgIGNvbnN0IHRvdGFsRWxhcHNlZCA9IGN1cnJlbnRUaW1lKCkgLSB0aGlzLnN0YXJ0ZWQ7XG5cbiAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW3RoaXMudmFsdWVLZXlzW2ldXTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gLSB2YWx1ZS50byAqIE1hdGguZXhwKC0gdG90YWxFbGFwc2VkIC8gdmFsdWUudGltZUNvbnN0YW50KTtcblxuICAgICAgICAgICAgLy8gSWYgd2UncmUgc3RpbGwgZmFyIGF3YXkgZnJvbSB0aGUgdGFyZ2V0LCBjb250aW51ZVxuICAgICAgICAgICAgaWYgKGRlbHRhID4gMC4xIHx8IGRlbHRhIDwgLTAuMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudG8gKyBkZWx0YTtcblxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHNuYXAgdG8gdGFyZ2V0XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkluZXJ0aWEucHJvdG90eXBlLmRlZmF1bHRWYWx1ZVByb3AgPSAndmVsb2NpdHknO1xuSW5lcnRpYS5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gQWN0aW9uLmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gICAgdGltZUNvbnN0YW50OiAzMjUsXG4gICAgYW1wOiAwLjhcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IG5ldyBJbmVydGlhKHByb3BzKTtcbiJdfQ==