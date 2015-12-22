'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Imports
var Action = require('./Action');
var calc = require('../inc/calc');
var utils = require('../inc/utils');
var simulations = require('./simulate/simulations');

// Values
var DEFAULT_PROP = 'velocity';

var Simulate = (function (_Action) {
    _inherits(Simulate, _Action);

    /*
        # Simulate class constructor
        ## Sets parent Action class and then default Simulate properties
         @param [object]
    */

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

    /*
        # Get default Simulate props
         @return [object]
    */

    Simulate.prototype.getDefaultProps = function getDefaultProps() {
        return {
            autoEnd: true,
            maxInactiveFrames: 3
        };
    };

    /*
        # Get default Simulate value props
         @return [object]
    */

    Simulate.prototype.getDefaultValue = function getDefaultValue() {
        return {
            // [string]: Simulation to .run
            simulate: DEFAULT_PROP,

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

    /*
        # Get default Simulate value property name
        ## Set values to this when a `value` is not provided as an object
         @return [string]
    */

    Simulate.prototype.getDefaultValueProp = function getDefaultValueProp() {
        return DEFAULT_PROP;
    };

    /*
        # Method to fire when Action starts
        ## Set `started` to current time.
    */

    Simulate.prototype.onStart = function onStart() {
        this.started = utils.currentTime();
    };

    /*
        # Fire at start of every frame
        ## Set `hasChanged` to false
    */

    Simulate.prototype.onFrameStart = function onFrameStart() {
        this.hasChanged = false;
    };

    /*
        # Simulate the `value`s per-frame movement
        
        @param [Actor]
        @param [Value]: Current value
        @param [string]: Key of current value
        @param [number]: Duration of frame in ms
        @return [number]: Calculated value
    */

    Simulate.prototype.process = function process(actor, value, key, timeSinceLastFrame) {
        var current = value.current;
        var simulate = value.simulate;
        var newValue = current;

        // If string, use in-built simulation otherwise treat as function
        var simulation = utils.isString(simulate) ? simulations[simulate] : simulate;

        var newVelocity = simulation ? simulation(value, timeSinceLastFrame, this.started) : 0;

        value.velocity = Math.abs(newVelocity) >= value.stopSpeed ? newVelocity : 0;

        newValue = value.current + calc.speedPerFrame(value.velocity, timeSinceLastFrame);

        if (newValue !== current) {
            this.hasChanged = false;
        }

        return newValue;
    };

    /*
        # Has this action ended?
        ## Use a framecounter to see if Action has changed in the last x frames
        and declare ended if not
        
        @param [Actor]
        @return [boolean]: Has Action ended?
    */

    Simulate.prototype.hasEnded = function hasEnded(actor) {
        var ended = false;

        if (this.autoEnd) {
            this.inactiveFrames = this.hasChanged ? 0 : this.inactiveFrames + 1;
            ended = this.inactiveFrames > actor.maxInactiveFrames;
        }

        return ended;
    };

    /*
        # Limit output to value range, if any
        ## If velocity is at or more than range, and value has a bounce property,
        run the bounce simulation
        
        @param [number]: Calculated output
        @param [Value]: Current Value
        @return [number]: Limit-adjusted output
    */

    Simulate.prototype.limit = function limit(output, value) {
        var isOutsideMax = output >= value.max;
        var isOutsideMin = output <= value.min;
        var isOutsideRange = isOutsideMax || isOutsideMin;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1NpbXVsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNuQyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDcEMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQzs7O0FBQUMsQUFHdEQsSUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDOztJQUUxQixRQUFRO2NBQVIsUUFBUTs7Ozs7Ozs7QUFPVixhQVBFLFFBQVEsR0FPVzs4QkFQbkIsUUFBUTs7MENBT0ssSUFBSTtBQUFKLGdCQUFJOzs7cURBQ2YsMENBQVMsSUFBSSxFQUFDOztBQUNkLGNBQUssa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0FBQy9CLGNBQUssY0FBYyxHQUFHLENBQUMsQ0FBQzs7S0FDM0I7Ozs7OztBQUFBO0FBWEMsWUFBUSxXQWtCVixlQUFlLDhCQUFHO0FBQ2QsZUFBTztBQUNILG1CQUFPLEVBQUUsSUFBSTtBQUNiLDZCQUFpQixFQUFFLENBQUM7U0FDdkIsQ0FBQztLQUNMOzs7Ozs7O0FBdkJDLFlBQVEsV0E4QlYsZUFBZSw4QkFBRztBQUNkLGVBQU87O0FBRUgsb0JBQVEsRUFBRSxZQUFZOzs7QUFHdEIsd0JBQVksRUFBRSxDQUFDOzs7QUFHZixrQkFBTSxFQUFFLENBQUM7OztBQUdULGtCQUFNLEVBQUUsRUFBRTs7O0FBR1Ysd0JBQVksRUFBRSxHQUFHOzs7QUFHakIscUJBQVMsRUFBRSxNQUFNOzs7QUFHakIsbUJBQU8sRUFBRSxLQUFLOzs7QUFHZCxvQkFBUSxFQUFFLENBQUM7O0FBRVgsY0FBRSxFQUFFLENBQUM7QUFDTCxpQkFBSyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0w7Ozs7Ozs7O0FBM0RDLFlBQVEsV0Ft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QUFvSzdCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDIiwiZmlsZSI6IlNpbXVsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuY29uc3QgQWN0aW9uID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcbmNvbnN0IGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcbmNvbnN0IHNpbXVsYXRpb25zID0gcmVxdWlyZSgnLi9zaW11bGF0ZS9zaW11bGF0aW9ucycpO1xuXG4vLyBWYWx1ZXNcbmNvbnN0IERFRkFVTFRfUFJPUCA9ICd2ZWxvY2l0eSc7XG5cbmNsYXNzIFNpbXVsYXRlIGV4dGVuZHMgQWN0aW9uIHtcbiAgICAvKlxuICAgICAgICAjIFNpbXVsYXRlIGNsYXNzIGNvbnN0cnVjdG9yXG4gICAgICAgICMjIFNldHMgcGFyZW50IEFjdGlvbiBjbGFzcyBhbmQgdGhlbiBkZWZhdWx0IFNpbXVsYXRlIHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSBwcm9wc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGF1dG9FbmQ6IHRydWUsXG4gICAgICAgICAgICBtYXhJbmFjdGl2ZUZyYW1lczogM1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcHNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBbc3RyaW5nXTogU2ltdWxhdGlvbiB0byAucnVuXG4gICAgICAgICAgICBzaW11bGF0ZTogREVGQVVMVF9QUk9QLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgICAgICAgICBhY2NlbGVyYXRpb246IDAsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgICAgICAgICBib3VuY2U6IDAsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBTcHJpbmcgc3RyZW5ndGggZHVyaW5nICdzdHJpbmcnXG4gICAgICAgICAgICBzcHJpbmc6IDgwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogVGltZWNvbnN0YW50IG9mIGdsaWRlXG4gICAgICAgICAgICB0aW1lQ29uc3RhbnQ6IDM5NSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gICAgICAgICAgICBzdG9wU3BlZWQ6IDAuMDAwMSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW2Jvb2xlYW5dOiBDYXB0dXJlIHdpdGggc3ByaW5nIHBoeXNpY3Mgb24gbGltaXQgYnJlYWNoXG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IEZyaWN0aW9uIHRvIGFwcGx5IHBlciBmcmFtZVxuICAgICAgICAgICAgZnJpY3Rpb246IDAsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSB2YWx1ZSBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICMjIFNldCB2YWx1ZXMgdG8gdGhpcyB3aGVuIGEgYHZhbHVlYCBpcyBub3QgcHJvdmlkZWQgYXMgYW4gb2JqZWN0XG5cbiAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUFJPUDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIE1ldGhvZCB0byBmaXJlIHdoZW4gQWN0aW9uIHN0YXJ0c1xuICAgICAgICAjIyBTZXQgYHN0YXJ0ZWRgIHRvIGN1cnJlbnQgdGltZS5cbiAgICAqL1xuICAgIG9uU3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IHV0aWxzLmN1cnJlbnRUaW1lKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBGaXJlIGF0IHN0YXJ0IG9mIGV2ZXJ5IGZyYW1lXG4gICAgICAgICMjIFNldCBgaGFzQ2hhbmdlZGAgdG8gZmFsc2VcbiAgICAqL1xuICAgIG9uRnJhbWVTdGFydCgpIHtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgICAgICMgU2ltdWxhdGUgdGhlIGB2YWx1ZWBzIHBlci1mcmFtZSBtb3ZlbWVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgY3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IER1cmF0aW9uIG9mIGZyYW1lIGluIG1zXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IENhbGN1bGF0ZWQgdmFsdWVcbiAgICAqL1xuICAgIHByb2Nlc3MoYWN0b3IsIHZhbHVlLCBrZXksIHRpbWVTaW5jZUxhc3RGcmFtZSkge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgY29uc3Qgc2ltdWxhdGUgPSB2YWx1ZS5zaW11bGF0ZTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gY3VycmVudDtcblxuICAgICAgICAvLyBJZiBzdHJpbmcsIHVzZSBpbi1idWlsdCBzaW11bGF0aW9uIG90aGVyd2lzZSB0cmVhdCBhcyBmdW5jdGlvblxuICAgICAgICBjb25zdCBzaW11bGF0aW9uID0gdXRpbHMuaXNTdHJpbmcoc2ltdWxhdGUpID8gc2ltdWxhdGlvbnNbc2ltdWxhdGVdIDogc2ltdWxhdGU7XG5cbiAgICAgICAgY29uc3QgbmV3VmVsb2NpdHkgPSBzaW11bGF0aW9uID8gc2ltdWxhdGlvbih2YWx1ZSwgdGltZVNpbmNlTGFzdEZyYW1lLCB0aGlzLnN0YXJ0ZWQpIDogMDtcblxuICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IChNYXRoLmFicyhuZXdWZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkKSA/IG5ld1ZlbG9jaXR5IDogMDtcblxuICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlLmN1cnJlbnQgKyBjYWxjLnNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIHRpbWVTaW5jZUxhc3RGcmFtZSk7XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBjdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICB9XG4gICAgXG4gICAgLypcbiAgICAgICAgIyBIYXMgdGhpcyBhY3Rpb24gZW5kZWQ/XG4gICAgICAgICMjIFVzZSBhIGZyYW1lY291bnRlciB0byBzZWUgaWYgQWN0aW9uIGhhcyBjaGFuZ2VkIGluIHRoZSBsYXN0IHggZnJhbWVzXG4gICAgICAgIGFuZCBkZWNsYXJlIGVuZGVkIGlmIG5vdFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IEhhcyBBY3Rpb24gZW5kZWQ/XG4gICAgKi9cbiAgICBoYXNFbmRlZChhY3Rvcikge1xuICAgICAgICBsZXQgZW5kZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5hdXRvRW5kKSB7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gdGhpcy5oYXNDaGFuZ2VkID8gMCA6IHRoaXMuaW5hY3RpdmVGcmFtZXMgKyAxO1xuICAgICAgICAgICAgZW5kZWQgPSAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+IGFjdG9yLm1heEluYWN0aXZlRnJhbWVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbmRlZDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIExpbWl0IG91dHB1dCB0byB2YWx1ZSByYW5nZSwgaWYgYW55XG4gICAgICAgICMjIElmIHZlbG9jaXR5IGlzIGF0IG9yIG1vcmUgdGhhbiByYW5nZSwgYW5kIHZhbHVlIGhhcyBhIGJvdW5jZSBwcm9wZXJ0eSxcbiAgICAgICAgcnVuIHRoZSBib3VuY2Ugc2ltdWxhdGlvblxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDYWxjdWxhdGVkIG91dHB1dFxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCBWYWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBMaW1pdC1hZGp1c3RlZCBvdXRwdXRcbiAgICAqL1xuICAgIGxpbWl0KG91dHB1dCwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgaXNPdXRzaWRlTWF4ID0gKG91dHB1dCA+PSB2YWx1ZS5tYXgpO1xuICAgICAgICBjb25zdCBpc091dHNpZGVNaW4gPSAob3V0cHV0IDw9IHZhbHVlLm1pbik7XG4gICAgICAgIGNvbnN0IGlzT3V0c2lkZVJhbmdlID0gaXNPdXRzaWRlTWF4IHx8IGlzT3V0c2lkZU1pbjtcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAoaXNPdXRzaWRlUmFuZ2UpIHtcbiAgICAgICAgICAgIG91dHB1dCA9IGNhbGMucmVzdHJpY3RlZChvdXRwdXQsIHZhbHVlLm1pbiwgdmFsdWUubWF4KTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlLmJvdW5jZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc2ltdWxhdGlvbnMuYm91bmNlKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuY2FwdHVyZSkge1xuICAgICAgICAgICAgICAgIHNpbXVsYXRpb25zLmNhcHR1cmUodmFsdWUsIGlzT3V0c2lkZU1heCA/IHZhbHVlLm1heCA6IHZhbHVlLm1pbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaW11bGF0ZTsiXX0=