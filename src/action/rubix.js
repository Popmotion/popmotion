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
    Rubix = function () {
        this.Progress.hasEnded = this.Time.hasEnded;
        this.Progress.easeValue = this.Time.easeValue;
    },
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
            action.elapsed += calc.difference(action.framestamp, frameStart) * props.dilate;

            return calc.restricted(calc.progress(action.elapsed, props.duration + props.delay), 0, 1);
        },
        
        /*
            Has action ended
            
            True if progress is equal to or higher than 1. If looping is enabled
            we restart the action
            
            @param [Action]: action to analyse
            @return [boolean]: has action ended
        */
        hasEnded: function (action) {
            return action.progress >= 1 ? true : false;
        },
        
        /*
            Ease value in action with provided key
            
            @param [string]: key of value
            @param [Action]
        */
        easeValue: function (key, value, action) {
            var progress = action.progress;

            if (value.steps) {
                progress = utils.stepProgress(progress, 1, value.steps);
            }

            return Easing.withinRange(progress, value.from, value.to, value.ease);;
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
                    value = values[key];
                    inputKey = this.getInputKey(key, value.link, inputOffset);

                    // If we have an input key we animate this property
                    if (inputKey !== false) {
                        
                        offset = inputOffset[inputKey];
                        progress[key] = {};

                        // If value has specified range
                        if (value.hasRange) {
                            progress[key].type = KEY.PROGRESS.RANGE;
                            progress[key].value = calc.progress(value.from + offset, value.min, value.max);

                        // Or we're calculating progress directly
                        } else {
                            progress[key].type = KEY.PROGRESS.DIRECT;
                            progress[key].value = action.origin[key] + (offset * value.amp);                            
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
        easeValue: function (key, value, action) {
            var progress = value.link ? action.progress[value.link] : action.progress[key],
                newValue = value.current;
                
            if (utils.isObj(progress)) {
                // If this is a range progress
                if (progress.type === KEY.PROGRESS.RANGE) {
                    newValue = Easing.withinRange(progress.value, value.min, value.max, 'linear', value.escapeAmp);
                // Or is a direct progress
                } else {
                    newValue = progress.value;
                }
                
            }

            return newValue;
        }
    },
    
    Run: {
    
        /*
            Calc new velocity
            
            Calc the new velocity based on the formula velocity = (velocity - friction + thrust)
            
            @param [Action]: action to measure
            @return [object]: Object of all velocitys
        */
        calcProgress: function (action, props, values, frameStart, frameDuration) {
            var progress = {},
                point,
                value;

            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    value = values[key];
                    value.velocity = value.velocity - calc.frameSpeed(value.friction, frameDuration) + calc.frameSpeed(value.thrust, frameDuration);
                    progress[key] = calc.frameSpeed(value.velocity, frameDuration);
                }
            }
            
            return progress;
        },
        
        /*
            Has this action ended?
            
            @return [boolean]: False for now - TODO create better default
        */
        hasEnded: function (action) {
            return false;
        },
        
        /*
            Add the velocity to the current value
            
            @param [string]: key of value
            @param [Action]
        */
        easeValue: function (key, value, action) {
            var newValue = value.current + action.progress[key];

            if (value.min) {
                newValue = Math.max(value.min, newValue);
            }
            
            if (value.max) {
                newValue = Math.min(value.max, newValue);
            }

            return newValue;
        }
    },
    
    Progress: {
        calcProgress: function (action) {
        console.log('test');
            return action.progress;
        }
    }
};

rubixController = new Rubix();

module.exports = rubixController;