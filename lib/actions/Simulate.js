'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

        _get(Object.getPrototypeOf(Simulate.prototype), 'constructor', this).apply(this, args);
        this.calculatesVelocity = true;
        this.inactiveFrames = 0;
    }

    _createClass(Simulate, [{
        key: 'getDefaultProps',
        value: function getDefaultProps() {
            return {
                maxInactiveFrames: 3
            };
        }
    }, {
        key: 'getDefaultValue',
        value: function getDefaultValue() {
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
                stopSpeed: 5,

                // [boolean]: Capture with spring physics on limit breach
                capture: false,

                // [number]: Friction to apply per frame
                friction: 0,

                to: 0,
                round: false
            };
        }
    }, {
        key: 'getDefaultValueProp',
        value: function getDefaultValueProp() {
            return DEFAULT_PROP;
        }
    }, {
        key: 'onStart',
        value: function onStart() {
            this.started = utils.currentTime();
        }

        /*
            Simulate the Value's per-frame movement
            
            @param [Actor]
            @param [Value]: Current value
            @param [string]: Key of current value
            @param [number]: Duration of frame in ms
            @return [number]: Calculated value
        */
    }, {
        key: 'process',
        value: function process(actor, value, key, timeSinceLastFrame) {
            var simulate = value.simulate,
                simulation = utils.isString(simulate) ? simulations[simulate] : simulate,
                newVelocity = simulation ? simulation(value, timeSinceLastFrame, this.started) : 0;

            value.velocity = Math.abs(newVelocity) >= value.stopSpeed ? newVelocity : 0;
            return value.current + calc.speedPerFrame(value.velocity, timeSinceLastFrame);
        }

        /*
            Has this action ended?
            
            Use a framecounter to see if Action has changed in the last x frames
            and declare ended if not
            
            @param [Actor]
            @param [boolean]: Has Action changed?
            @return [boolean]: Has Action ended?
        */
    }, {
        key: 'hasEnded',
        value: function hasEnded(actor, hasChanged) {
            this.inactiveFrames = hasChanged ? 0 : this.inactiveFrames + 1;
            return this.inactiveFrames > actor.maxInactiveFrames;
        }

        /*
            Limit output to value range, if any
            
            If velocity is at or more than range, and value has a bounce property,
            run the bounce simulation
            
            @param [number]: Calculated output
            @param [Value]: Current Value
            @return [number]: Limit-adjusted output
        */
    }, {
        key: 'limit',
        value: function limit(output, value) {
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
        }
    }]);

    return Simulate;
})(Action);

module.exports = Simulate;