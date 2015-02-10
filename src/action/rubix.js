/*
    Rubix modules
    ----------------------------------------
    
    Rubix modules are used to process an action based on its .rubix property.
    
    Available rubix:
        'Time'
        'Pointer'
        'Speed'
        
    Processing functions:
        calcProgress
        hasEnded
        easeValue
*/
"use strict";

var calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    easing = require('../utils/easing.js'),
    KEY = require('../opts/keys.js'),
    simulate = require('./simulate.js'),
    Rubix = function () {},
    rubixController;

Rubix.prototype = {

    Time: {

        updateInput: function (action, props, framestamp) {
            action.elapsed += (framestamp - action.framestamp) * props.dilate;
            action.hasEnded = true;
        },

        process: function (key, value, values, action, frameDuration) {
            var newValue = value.current,
                progress = calc.restricted(calc.progress(action.elapsed - value.delay, value.duration) - value.stagger, 0, 1);
            
            // Update hasEnded
            action.hasEnded = (progress !== 1) ? false : action.hasEnded;
            
            if (value.to !== undefined) {
                progress = (value.steps) ? utils.stepProgress(progress, 1, value.steps) : true;
                newValue = easing.withinRange(progress, value.origin, value.to, value.ease);
            }
            
            return newValue;
        },
        
        hasEnded: function (action) {
            return action.hasEnded;
        }
    },
    
    Input: {
    
        updateInput: function (action, props, framestamp) {
            action.inputOffset = calc.offset(props.inputOrigin, props.input.current)
        },
    
        process: function (key, value, values, action, frameDuration) {
            return (inputOffset.hasOwnProperty(key)) ? value.origin + action.inputOffset[key] : value.current;
        },
        
        hasEnded: function () {
            return false;
        }
    },
    
    Run: {
    
        process: function (key, value, values, action, frameDuration) {
            return value.current + calc.speedPerFrame(simulate[value.simulate](value, frameDuration), frameDuration);
        },
        
        /*
            Has this action ended?
        */
        hasEnded: function (action, hasChanged) {
            action.inactiveFrames = hasChanged ? 0 : action.inactiveFrames + 1;
            return (action.inactiveFrames > 3);
        },
        
        /*
            Add the velocity to the current value
            
            @param [string]: key of value
            @param [Action]
       
        easeValue: function (key, value, action) {
            var newValue = value.current + action.progress[key];

            if (value.min !== undefined) {
                newValue = Math.max(value.min, newValue);
                
                if (value.bounce && newValue <= value.min) {
                    value.velocity = simulate.bounce(value);
                }
            }
            
            if (value.max !== undefined) {
                newValue = Math.min(value.max, newValue);
                
                if (value.bounce && newValue >= value.max) {
                    value.velocity = simulate.bounce(value);
                }
            }

            return newValue;
        } */
    },
    
    Link: {
        process: function (key, value, values, action) {
            
        }
    }
};

module.exports = new Rubix();