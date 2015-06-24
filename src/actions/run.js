/*
    Run physics simulation
*/
"use strict";

var calc = require('../inc/calc'),
    simulate = require('./run/simulation-manager.js');

module.exports = {

    parse: require('./generic/parse-args'),

    // [boolean]: Tell Redshift this rubix calculates a new velocity itself
    calculatesVelocity: true,
    
    /*
        Simulate the Value's per-frame movement
        
        @param [string]: Key of current value
        @param [Value]: Current value
        @param [number]: Duration of frame in ms
        @return [number]: Calculated value
    */
    process: function (key, value, frameDuration) {
        value.velocity = simulate(value.simulate, value, frameDuration, this.started);
        return value.current + calc.speedPerFrame(value.velocity, frameDuration);
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
                value.velocity = simulate('bounce', value);

            } else if (value.capture) {
                simulate('capture', value, isOutsideMax ? value.max : value.min);
            }
        }
        
        return output;
    }
};