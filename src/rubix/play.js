/*
    Play rubix
    
    Translate numbers for a set amount of time, applying easing if defined
*/
"use strict";

var calc = require('../utils/calc.js'),
    easing = require('../utils/easing.js'),
    utils = require('../utils/utils.js'),
    
    CURRENT = 'current',
    HAS_ENDED = 'hasEnded';

module.exports = {

    // [boolean]: Create an Action method for this rubix?
    createMethod: true,

    /*
        Update Action elapsed time
        
        @param [Action]
        @param [object]: Action properties
        @param [number]: Timestamp of current frame
    */
    updateInput: function (action, props, frameDuration) {
        action.elapsed += (frameDuration * props.dilate) * action.playDirection;
        action[HAS_ENDED] = true;
    },

    /*
        Calculate progress of value based on time elapsed,
        value delay/duration/stagger properties

        @param [string]: Key of current value
        @param [Value]: Current value
        @param [object]: Collection of all Action values
        @param [object]: Action properties
        @param [Action]: Current Action
        @param [number]: Duration of frame in ms
        @return [number]: Calculated value
    */
    process: function (key, value, values, props, action) {
        var target = value.to,
            newValue = value[CURRENT],
            progress, progressTarget;
        
        // If we have a target, process
        if (target !== undefined) {
            progress = calc.restricted(calc.progress(action.elapsed - value.delay, value.duration) - value.stagger, 0, 1);
            progressTarget = (action.playDirection === 1) ? 1 : 0;
            
            // Mark Action as not ended if still in progress
            if (progress !== progressTarget) {
                action[HAS_ENDED] = false;
            
            // Or clear value target
            } else {
                value.to = undefined;
            }
            
            // Step progress if we're stepping
            if (value.steps) {
                progress = utils.stepProgress(progress, value.steps, value.stepDirection);
            }
            
            // Ease value with progress
            newValue = easing.withinRange(progress, value.origin, target, value.ease);
        }
        
        return newValue;
    },
    
    /*
        Return hasEnded property
        
        @param [boolean]: Have all Values hit 1 progress?
    */
    hasEnded: function (action) {
        return action[HAS_ENDED];
    }
};
