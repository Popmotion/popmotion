// Imports
const Action = require('./Action');
const calc = require('../inc/calc');
const utils = require('../inc/utils');
const simulations = require('./simulate/simulations');

// Values
const DEFAULT_PROP = 'velocity';

class Simulate extends Action {
    /*
        # Simulate class constructor
        ## Sets parent Action class and then default Simulate properties

        @param [object]
    */
    constructor(...args) {
        super(...args);
        this.calculatesVelocity = true;
        this.inactiveFrames = 0;
    }

    /*
        # Get default Simulate props

        @return [object]
    */
    getDefaultProps() {
        return {
            autoEnd: true,
            maxInactiveFrames: 3
        };
    }

    /*
        # Get default Simulate value props

        @return [object]
    */
    getDefaultValue() {
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
    }

    /*
        # Get default Simulate value property name
        ## Set values to this when a `value` is not provided as an object

        @return [string]
    */
    getDefaultValueProp() {
        return DEFAULT_PROP;
    }

    /*
        # Method to fire when Action starts
        ## Set `started` to current time.
    */
    onStart() {
        this.started = utils.currentTime();
    }

    /*
        # Fire at start of every frame
        ## Set `hasChanged` to false
    */
    onFrameStart() {
        this.hasChanged = false;
    }
    
    /*
        # Simulate the `value`s per-frame movement
        
        @param [Actor]
        @param [Value]: Current value
        @param [string]: Key of current value
        @param [number]: Duration of frame in ms
        @return [number]: Calculated value
    */
    process(actor, value, key, timeSinceLastFrame) {
        const current = value.current;
        const simulate = value.simulate;
        let newValue = current;

        // If string, use in-built simulation otherwise treat as function
        const simulation = utils.isString(simulate) ? simulations[simulate] : simulate;

        const newVelocity = simulation ? simulation(value, timeSinceLastFrame, this.started) : 0;

        value.velocity = (Math.abs(newVelocity) >= value.stopSpeed) ? newVelocity : 0;

        newValue = value.current + calc.speedPerFrame(value.velocity, timeSinceLastFrame);

        if (newValue !== current) {
            this.hasChanged = false;
        }

        return newValue;
    }
    
    /*
        # Has this action ended?
        ## Use a framecounter to see if Action has changed in the last x frames
        and declare ended if not
        
        @param [Actor]
        @return [boolean]: Has Action ended?
    */
    hasEnded(actor) {
        let ended = false;

        if (this.autoEnd) {
            this.inactiveFrames = this.hasChanged ? 0 : this.inactiveFrames + 1;
            ended = (this.inactiveFrames > actor.maxInactiveFrames);
        }

        return ended;
    }

    /*
        # Limit output to value range, if any
        ## If velocity is at or more than range, and value has a bounce property,
        run the bounce simulation
        
        @param [number]: Calculated output
        @param [Value]: Current Value
        @return [number]: Limit-adjusted output
    */
    limit(output, value) {
        const isOutsideMax = (output >= value.max);
        const isOutsideMin = (output <= value.min);
        const isOutsideRange = isOutsideMax || isOutsideMin;
            
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