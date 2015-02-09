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
        updateInput
        easeValue
*/
"use strict";

var calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    Easing = require('../utils/easing.js'),
    KEY = require('../opts/keys.js'),
    simulate = require('./simulate.js'),
    Rubix = function () {},
    rubixController;

Rubix.prototype = {

    Time: {
        /*
            Calc progress
            
            Calc action's progress through timelimit
            
            @param [Action]: action to measure
            @param [timestamp]: framestart timestamp
            @return [number]: 0 to 1 value representing how much time has passed
        */
        calcProgress: function (action, props, values, frameStart) {
            var isComplete = true,
                progress = {},
                value = {};
            
            action.elapsed += (frameStart - action.framestamp) * props.dilate;
            
            for (var key in values) {
                value = values[key].store;
                progress[key] = calc.restricted(calc.progress(action.elapsed, value.duration + value.delay) - value.stagger, 0, 1);
                
                isComplete = (progress[key] !== 1) ? false : isComplete;
            }
            
            progress.complete = isComplete;
            
            return progress;
        },
        
        /*
            Has action ended
            
            True if progress is equal to or higher than 1. If looping is enabled
            we restart the action
            
            @param [Action]: action to analyse
            @return [boolean]: has action ended
        */
        hasEnded: function (action) {
            return action.progress.complete;
        },
        
        /*
            Ease value in action with provided key
            
            @param [string]: key of value
            @param [Action]
        */
        easeValue: function (key, value, action, frameDuration) {
            var progress = action.progress[key],
                newValue = value.current;
                
            if (value.to !== undefined) {
                if (value.steps) {
                    progress = utils.stepProgress(progress, 1, value.steps);
                }
                
                newValue = Easing.withinRange(progress, value.origin, value.to, value.ease);
            }
            
            value.velocity = calc.speedPerSecond(calc.difference(value.current, newValue), frameDuration);
            
            return newValue;
        }
    },
    
    Input: {
        /*
            Get input key
        */
        getInputKey: function (key, link, inputOffset) {
            var inputKey = false;
            
            // If value is listening to a present input
            if (utils.isString(link) && inputOffset.hasOwnProperty(link)) {
                inputKey = link;

            // Of if value key actually exists in input
            } else if (inputOffset.hasOwnProperty(key)) {
                inputKey = key;
            }
            
            return inputKey;
        },
    
        /*
            Calc progress
            
            Calc the progress of each input metric. 
            
            @param [Action]: action to measure
            @return [object]: Object of all progresses
        */
        calcProgress: function (action, props, values, frameStart) {
            var progress = {},
                inputKey, value, offset,
                inputOffset = calc.offset(props.inputOrigin, props.input.current);

            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    value = values[key].get();
                    inputKey = this.getInputKey(key, value.link, inputOffset);

                    // If we have an input key we animate this property
                    if (inputKey !== false) {
                        
                        offset = inputOffset[inputKey];
                        progress[key] = {};

                        // If value has specified range
                        if (value.hasRange) {
                            progress[key].type = KEY.PROGRESS.RANGE;
                            progress[key].value = calc.progress(value.origin + offset, value.min, value.max);

                        // Or we're calculating progress directly
                        } else {
                            progress[key].type = KEY.PROGRESS.DIRECT;
                            progress[key].value = value.origin + offset;                   
                        }
                        
                    }
                }
            }

            return progress;
        },
        
        /*
            Has function ended?
            
            Tracking currently needs manually ending
        */
        hasEnded: function (action) {
            return false;
        },
        
        /*
            Ease value in action with provided key
            
            @param [string]: key of value
            @param [Action]
            @param [object]: Progress of pointer props
        */
        easeValue: function (key, value, action, frameDuration) {
            var progress = value.link ? action.progress[value.link] : action.progress[key],
                newValue = value.current;
                
            if (utils.isObj(progress)) {
                // If this is a range progress
                if (progress.type === KEY.PROGRESS.RANGE) {
                
                    // Step if steps - DRY it up
                    if (value.steps) {
                        progress.value = utils.stepProgress(progress.value, 1, value.steps);
                    }
                
                    newValue = Easing.withinRange(progress.value, value.min, value.max, 'linear', value.escapeAmp);
                // Or is a direct progress
                } else {
                    newValue = progress.value;
                }
                
            }
            
            value.velocity = calc.speedPerSecond(calc.difference(value.current, newValue), frameDuration);

            return newValue;
        }
    },
    
    Run: {
        /*
            Calc new velocity
            
            Calc new velocity based on simulation output
            
            @param [Action]: action to measure
            @return [object]: Object of all velocitys
        */
        calcProgress: function (action, props, values, frameStart, frameDuration) {
            var progress = {},
                point,
                value;

            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    value = values[key].get();
                    value.velocity = simulate[value.simulate](value, frameDuration);
                    progress[key] = calc.speedPerFrame(value.velocity, frameDuration);
                }
            }
            
            return progress;
        },
        
        /*
            Has this action ended?
            
            @return [boolean]: False for now - TODO create better default
        */
        hasEnded: function (action, hasChanged) {
            var hasEnded = false;
            
            if (hasChanged) {
                action.inactiveFrames = 0;
            } else {
                action.inactiveFrames++;
                
                if (action.inactiveFrames > 30) {
                    hasEnded = true;
                }
            }
            
            return hasEnded;
        },
        
        /*
            Add the velocity to the current value
            
            @param [string]: key of value
            @param [Action]
        */
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
        }
    }
};

module.exports = new Rubix();;