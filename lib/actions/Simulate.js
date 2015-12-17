'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Action = require('./Action'),
    calc = require('../inc/calc'),
    utils = require('../inc/utils'),
    simulations = require('./simulate/simulations');

var DEFAULT_PROP = 'velocity';

var Simulate = (function (_Action) {
    _inherits(Simulate, _Action);

    function Simulate() {
        _classCallCheck(this, Simulate);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _Action.call.apply(_Action, [this].concat(args)));

        _this.calculatesVelocity = true;
        _this.inactiveFrames = 0;
        return _this;
    }

    Simulate.prototype.getDefaultProps = function getDefaultProps() {
        return {
            autoEnd: true,
            maxInactiveFrames: 3
        };
    };

    Simulate.prototype.getDefaultValue = function getDefaultValue() {
        return {
            // [string]: Simulation to .run
            simulate: DEFAULT_PROP,

            // [number]: Deceleration to apply to value, in units per second
            deceleration: 0,

            // [number]: Acceleration to apply to value, in units per second
            acceleration: 0,

            // [number]: Factor to multiply velocity by on bounce
            bounce: 0,

            // [number]: Spring strength during 'string'
            spring: 80,

            // [number]: Timeconstant of glide
            timeConstant: 395,

            // [number]: Stop simulation under this speed
            stopSpeed: 0.0001,

            // [boolean]: Capture with spring physics on limit breach
            capture: false,

            // [number]: Friction to apply per frame
            friction: 0,

            to: 0,
            round: false
        };
    };

    Simulate.prototype.getDefaultValueProp = function getDefaultValueProp() {
        return DEFAULT_PROP;
    };

    Simulate.prototype.onStart = function onStart() {
        this.started = utils.currentTime();
    };

    /*
        Simulate the Value's per-frame movement
        
        @param [Actor]
        @param [Value]: Current value
        @param [string]: Key of current value
        @param [number]: Duration of frame in ms
        @return [number]: Calculated value
    */

    Simulate.prototype.process = function process(actor, value, key, timeSinceLastFrame) {
        var simulate = value.simulate,
            simulation = utils.isString(simulate) ? simulations[simulate] : simulate,
            newVelocity = simulation ? simulation(value, timeSinceLastFrame, this.started) : 0;

        value.velocity = Math.abs(newVelocity) >= value.stopSpeed ? newVelocity : 0;
        return value.current + calc.speedPerFrame(value.velocity, timeSinceLastFrame);
    };

    /*
        Has this action ended?
        
        Use a framecounter to see if Action has changed in the last x frames
        and declare ended if not
        
        @param [Actor]
        @param [boolean]: Has Action changed?
        @return [boolean]: Has Action ended?
    */

    Simulate.prototype.hasEnded = function hasEnded(actor, hasChanged) {
        var ended = false;

        if (this.autoEnd) {
            this.inactiveFrames = hasChanged ? 0 : this.inactiveFrames + 1;
            ended = this.inactiveFrames > actor.maxInactiveFrames;
        }

        return ended;
    };

    /*
        Limit output to value range, if any
        
        If velocity is at or more than range, and value has a bounce property,
        run the bounce simulation
        
        @param [number]: Calculated output
        @param [Value]: Current Value
        @return [number]: Limit-adjusted output
    */

    Simulate.prototype.limit = function limit(output, value) {
        var isOutsideMax = output >= value.max,
            isOutsideMin = output <= value.min,
            isOutsideRange = isOutsideMax || isOutsideMin;

        if (isOutsideRange) {
            output = calc.restricted(output, value.min, value.max);

            if (value.bounce) {
                value.velocity = simulations.bounce(value);
            } else if (value.capture) {
                simulations.capture(value, isOutsideMax ? value.max : value.min);
            }
        }

        return output;
    };

    return Simulate;
})(Action);

module.exports = Simulate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1NpbXVsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUM1QixJQUFJLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUM3QixLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQztJQUMvQixXQUFXLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7O0FBRXBELElBQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQzs7SUFFMUIsUUFBUTtjQUFSLFFBQVE7O0FBQ1YsYUFERSxRQUFRLEdBQ1c7OEJBRG5CLFFBQVE7OzBDQUNLLElBQUk7QUFBSixnQkFBSTs7O3FEQUNmLDBDQUFTLElBQUksRUFBQzs7QUFDZCxjQUFLLGtCQUFrQixHQUFHLElBQUksQ0FBQztBQUMvQixjQUFLLGNBQWMsR0FBRyxDQUFDLENBQUM7O0tBQzNCOztBQUxDLFlBQVEsV0FPVixlQUFlLDhCQUFHO0FBQ2QsZUFBTztBQUNILG1CQUFPLEVBQUUsSUFBSTtBQUNiLDZCQUFpQixFQUFFLENBQUM7U0FDdkIsQ0FBQztLQUNMOztBQVpDLFlBQVEsV0FjVixlQUFlLDhCQUFHO0FBQ2QsZUFBTzs7QUFFSCxvQkFBUSxFQUFFLFlBQVk7OztBQUd0Qix3QkFBWSxFQUFFLENBQUM7OztBQUdmLHdCQUFZLEVBQUUsQ0FBQzs7O0FBR2Ysa0JBQU0sRUFBRSxDQUFDOzs7QUFHVCxrQkFBTSxFQUFFLEVBQUU7OztBQUdWLHdCQUFZLEVBQUUsR0FBRzs7O0FBR2pCLHFCQUFTLEVBQUUsTUFBTTs7O0FBR2pCLG1CQUFPLEVBQUUsS0FBSzs7O0FBR2Qsb0JBQVEsRUFBRSxDQUFDOztBQUVYLGNBQUUsRUFBRSxDQUFDO0FBQ0wsaUJBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQztLQUNMOztBQTlDQyxZQUFRLFdBZ0RWLG1CQUFtQixrQ0FBRztBQUNsQixlQUFPLFlBQVksQ0FBQztLQUN2Qjs7QUFsREMsWUFBUSxXQW9EVixPQUFPLHNCQUFHO0FBQ04sWUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDdEM7Ozs7Ozs7Ozs7OztBQXREQyxZQUFRLFdBaUVWLE9BQU8sb0JBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEVBQUU7QUFDM0MsWUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVE7WUFDekIsVUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVE7WUFDeEUsV0FBVyxHQUFHLFVBQVUsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXZGLGFBQUssQ0FBQyxRQUFRLEdBQUcsQUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxTQUFTLEdBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztBQUM5RSxlQUFPLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUM7S0FDakY7Ozs7Ozs7Ozs7Ozs7QUF4RUMsWUFBUSxXQW9GVixRQUFRLHFCQUFDLEtBQUssRUFBRSxVQUFVLEVBQUU7QUFDeEIsWUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDOztBQUVsQixZQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDZCxnQkFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBQy9ELGlCQUFLLEdBQUksSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsaUJBQWlCLEFBQUMsQ0FBQztTQUMzRDs7QUFFRCxlQUFPLEtBQUssQ0FBQztLQUNoQjs7Ozs7Ozs7Ozs7OztBQTdGQyxZQUFRLFdBeUdWLEtBQUssa0JBQUMsTUFBTSxFQUFFLEtBQUssRUFBRTtBQUNqQixZQUFJLFlBQVksR0FBSSxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQUFBQztZQUNwQyxZQUFZLEdBQUksTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLEFBQUM7WUFDcEMsY0FBYyxHQUFHLFlBQVksSUFBSSxZQUFZLENBQUM7O0FBRWxELFlBQUksY0FBYyxFQUFFO0FBQ2hCLGtCQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXZELGdCQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDZCxxQkFBSyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzlDLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO0FBQ3RCLDJCQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxZQUFZLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEU7U0FDSjs7QUFFRCxlQUFPLE1BQU0sQ0FBQztLQUNqQjs7V0F6SEMsUUFBUTtHQUFTLE1BQU07O0FBNEg3QixNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyIsImZpbGUiOiJTaW11bGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgc2ltdWxhdGlvbnMgPSByZXF1aXJlKCcuL3NpbXVsYXRlL3NpbXVsYXRpb25zJyk7XG5cbmNvbnN0IERFRkFVTFRfUFJPUCA9ICd2ZWxvY2l0eSc7XG5cbmNsYXNzIFNpbXVsYXRlIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGF1dG9FbmQ6IHRydWUsXG4gICAgICAgICAgICBtYXhJbmFjdGl2ZUZyYW1lczogM1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFtzdHJpbmddOiBTaW11bGF0aW9uIHRvIC5ydW5cbiAgICAgICAgICAgIHNpbXVsYXRlOiBERUZBVUxUX1BST1AsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBEZWNlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICAgICAgICAgIGRlY2VsZXJhdGlvbjogMCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IEFjY2VsZXJhdGlvbiB0byBhcHBseSB0byB2YWx1ZSwgaW4gdW5pdHMgcGVyIHNlY29uZFxuICAgICAgICAgICAgYWNjZWxlcmF0aW9uOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogRmFjdG9yIHRvIG11bHRpcGx5IHZlbG9jaXR5IGJ5IG9uIGJvdW5jZVxuICAgICAgICAgICAgYm91bmNlOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogU3ByaW5nIHN0cmVuZ3RoIGR1cmluZyAnc3RyaW5nJ1xuICAgICAgICAgICAgc3ByaW5nOiA4MCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IFRpbWVjb25zdGFudCBvZiBnbGlkZVxuICAgICAgICAgICAgdGltZUNvbnN0YW50OiAzOTUsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBTdG9wIHNpbXVsYXRpb24gdW5kZXIgdGhpcyBzcGVlZFxuICAgICAgICAgICAgc3RvcFNwZWVkOiAwLjAwMDEsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtib29sZWFuXTogQ2FwdHVyZSB3aXRoIHNwcmluZyBwaHlzaWNzIG9uIGxpbWl0IGJyZWFjaFxuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWVcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfVxuXG4gICAgb25TdGFydCgpIHtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICB9XG4gICAgXG4gICAgLypcbiAgICAgICAgU2ltdWxhdGUgdGhlIFZhbHVlJ3MgcGVyLWZyYW1lIG1vdmVtZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW0FjdG9yXVxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSBvZiBjdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRHVyYXRpb24gb2YgZnJhbWUgaW4gbXNcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZVxuICAgICovXG4gICAgcHJvY2VzcyhhY3RvciwgdmFsdWUsIGtleSwgdGltZVNpbmNlTGFzdEZyYW1lKSB7XG4gICAgICAgIHZhciBzaW11bGF0ZSA9IHZhbHVlLnNpbXVsYXRlLFxuICAgICAgICAgICAgc2ltdWxhdGlvbiA9IHV0aWxzLmlzU3RyaW5nKHNpbXVsYXRlKSA/IHNpbXVsYXRpb25zW3NpbXVsYXRlXSA6IHNpbXVsYXRlLFxuICAgICAgICAgICAgbmV3VmVsb2NpdHkgPSBzaW11bGF0aW9uID8gc2ltdWxhdGlvbih2YWx1ZSwgdGltZVNpbmNlTGFzdEZyYW1lLCB0aGlzLnN0YXJ0ZWQpIDogMDtcblxuICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IChNYXRoLmFicyhuZXdWZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkKSA/IG5ld1ZlbG9jaXR5IDogMDtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmN1cnJlbnQgKyBjYWxjLnNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIHRpbWVTaW5jZUxhc3RGcmFtZSk7XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgICAgIEhhcyB0aGlzIGFjdGlvbiBlbmRlZD9cbiAgICAgICAgXG4gICAgICAgIFVzZSBhIGZyYW1lY291bnRlciB0byBzZWUgaWYgQWN0aW9uIGhhcyBjaGFuZ2VkIGluIHRoZSBsYXN0IHggZnJhbWVzXG4gICAgICAgIGFuZCBkZWNsYXJlIGVuZGVkIGlmIG5vdFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogSGFzIEFjdGlvbiBjaGFuZ2VkP1xuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSGFzIEFjdGlvbiBlbmRlZD9cbiAgICAqL1xuICAgIGhhc0VuZGVkKGFjdG9yLCBoYXNDaGFuZ2VkKSB7XG4gICAgICAgIGxldCBlbmRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmF1dG9FbmQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSBoYXNDaGFuZ2VkID8gMCA6IHRoaXMuaW5hY3RpdmVGcmFtZXMgKyAxO1xuICAgICAgICAgICAgZW5kZWQgPSAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+IGFjdG9yLm1heEluYWN0aXZlRnJhbWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbmRlZDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBMaW1pdCBvdXRwdXQgdG8gdmFsdWUgcmFuZ2UsIGlmIGFueVxuICAgICAgICBcbiAgICAgICAgSWYgdmVsb2NpdHkgaXMgYXQgb3IgbW9yZSB0aGFuIHJhbmdlLCBhbmQgdmFsdWUgaGFzIGEgYm91bmNlIHByb3BlcnR5LFxuICAgICAgICBydW4gdGhlIGJvdW5jZSBzaW11bGF0aW9uXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IENhbGN1bGF0ZWQgb3V0cHV0XG4gICAgICAgIEBwYXJhbSBbVmFsdWVdOiBDdXJyZW50IFZhbHVlXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IExpbWl0LWFkanVzdGVkIG91dHB1dFxuICAgICovXG4gICAgbGltaXQob3V0cHV0LCB2YWx1ZSkge1xuICAgICAgICB2YXIgaXNPdXRzaWRlTWF4ID0gKG91dHB1dCA+PSB2YWx1ZS5tYXgpLFxuICAgICAgICAgICAgaXNPdXRzaWRlTWluID0gKG91dHB1dCA8PSB2YWx1ZS5taW4pLFxuICAgICAgICAgICAgaXNPdXRzaWRlUmFuZ2UgPSBpc091dHNpZGVNYXggfHwgaXNPdXRzaWRlTWluO1xuICAgICAgICAgICAgXG4gICAgICAgIGlmIChpc091dHNpZGVSYW5nZSkge1xuICAgICAgICAgICAgb3V0cHV0ID0gY2FsYy5yZXN0cmljdGVkKG91dHB1dCwgdmFsdWUubWluLCB2YWx1ZS5tYXgpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUuYm91bmNlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSBzaW11bGF0aW9ucy5ib3VuY2UodmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5jYXB0dXJlKSB7XG4gICAgICAgICAgICAgICAgc2ltdWxhdGlvbnMuY2FwdHVyZSh2YWx1ZSwgaXNPdXRzaWRlTWF4ID8gdmFsdWUubWF4IDogdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpbXVsYXRlOyJdfQ==