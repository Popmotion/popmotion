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

        process: function (key, value, values, props, action) {
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
    
        process: function (key, value, values, props, action, frameDuration) {
            return (inputOffset.hasOwnProperty(key)) ? value.origin + action.inputOffset[key] : value.current;
        },
        
        hasEnded: function () {
            return false;
        }
    },
    
    Run: {
    
        process: function (key, value, values, props, action, frameDuration) {
            return value.current + calc.speedPerFrame(simulate[value.simulate](value, frameDuration), frameDuration);
        },
        
        /*
            Has this action ended?
        */
        hasEnded: function (action, hasChanged) {
            action.inactiveFrames = hasChanged ? 0 : action.inactiveFrames + 1;
            return (action.inactiveFrames > 3);
        },
        
        limit: function (output, value) {
            output = calc.restricted(output, value.min, value.max);
            
            // Bounce if outside of range
            value.velocity = (value.bounce && (output <= value.min || output >= value.max))
                ? simulate.bounce(value) : value.velocity;
            
            return output;
        }
    },
    
    Link: {
        process: function (key, value, values, props, action) {
            var mapLink = value.mapLink,
                mapTo = value.mapTo,
                mapLength = (mapLink !== undefined) ? mapLink.length : 0,
                linkValue = (action.inputOffset.hasOwnProperty(value.link)) ?
                    action.inputOffset[value.link] : values[value.link].current,
                newValue = linkValue;
            
            for (var i = 1; i < mapLength; i++) {
                if (newValue < mapLink[i] || i === mapLength - 1) {
                    newValue = calc.value(calc.progress(newValue, mapLink[i - 1], mapLink[i]), mapTo[i - 1], mapTo[i]);
                    break;
                }
            }
            
            return newValue;
        }
    }
};

rubixController = new Rubix();

module.exports = rubixController;