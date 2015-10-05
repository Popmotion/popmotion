let Action = require('./Action'),
    calc = require('../inc/calc'),
    utils = require('../inc/utils'),
    simulations = require('./simulate/simulations');

const DEFAULT_PROP = 'velocity';

class Simulate extends Action {
    constructor(...args) {
        super(...args);
        this.calculatesVelocity = true;
        this.inactiveFrames = 0;
    }

    getDefaultProps() {
        return {
            maxInactiveFrames: 3
        };
    }

    getDefaultValue() {
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

    getDefaultValueProp() {
        return DEFAULT_PROP;
    }

    onStart() {
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
    process(actor, value, key, timeSinceLastFrame) {
        var simulate = value.simulate,
            simulation = utils.isString(simulate) ? simulations[simulate] : simulate,
            newVelocity = simulation ? simulation(value, timeSinceLastFrame, this.started) : 0;

        value.velocity = (Math.abs(newVelocity) >= value.stopSpeed) ? newVelocity : 0;
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
    hasEnded(actor, hasChanged) {
        this.inactiveFrames = hasChanged ? 0 : this.inactiveFrames + 1;
        return (this.inactiveFrames > actor.maxInactiveFrames);
    }

    /*
        Limit output to value range, if any
        
        If velocity is at or more than range, and value has a bounce property,
        run the bounce simulation
        
        @param [number]: Calculated output
        @param [Value]: Current Value
        @return [number]: Limit-adjusted output
    */
    limit(output, value) {
        var isOutsideMax = (output >= value.max),
            isOutsideMin = (output <= value.min),
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
}

module.exports = Simulate;