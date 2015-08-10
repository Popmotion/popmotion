/*
    Run physics simulation
*/
"use strict";

var calc = require('../inc/calc'),
    utils = require('../inc/utils'),
    simulations = require('./run/simulations');

module.exports = {

    // [object] Default Action properties
    actionDefaults: require('./run/default-action-props'),

    // [object] Default value properties
    valueDefaults: require('./run/default-value-props'),

    // [boolean]: Tell Redshift this rubix calculates a new velocity itself
    calculatesVelocity: true,
    
    /*
        Simulate the Value's per-frame movement
        
        @param [Value]: Current value
        @param [string]: Key of current value
        @param [number]: Duration of frame in ms
        @return [number]: Calculated value
    */
    process: function (value, key, timeSinceLastFrame) {
        var simulate = value.simulate,
            simulation = utils.isString(simulate) ? simulations[simulate] : simulate,
            newVelocity = simulation(value, timeSinceLastFrame, this.started);

        value.velocity = (Math.abs(newVelocity) >= value.stopSpeed) ? newVelocity : 0;
        return value.current + calc.speedPerFrame(value.velocity, timeSinceLastFrame);
    },
    
    /*
        Has this action ended?
        
        Use a framecounter to see if Action has changed in the last x frames
        and declare ended if not
        
        @param [boolean]: Has Action changed?
        @return [boolean]: Has Action ended?
    */
    hasEnded: function (hasChanged) {
        this.inactiveFrames = hasChanged ? 0 : this.inactiveFrames + 1;
        return (this.inactiveFrames > this.maxInactiveFrames);
    },
    
    /*
        Limit output to value range, if any
        
        If velocity is at or more than range, and value has a bounce property,
        run the bounce simulation
        
        @param [number]: Calculated output
        @param [Value]: Current Value
        @return [number]: Limit-adjusted output
    */
    limit: function (output, value) {
        var isOutsideMax = (output >= value.max),
            isOutsideMin = (output <= value.min),
            isOutsideRange = isOutsideMax || isOutsideMin;
        
        if (isOutsideRange) {
            output = calc.restricted(output, value.min, value.max);

            if (value.bounce) {
                value.velocity = simulations['bounce'](value);

            } else if (value.capture) {
                simulations['capture'](value, isOutsideMax ? value.max : value.min);
            }
        }
        
        return output;
    }
};