/*
    Process actions
*/
"use strict";

var Rubix = require('./rubix.js'),
    utils = require('../utils/utils.js'),
    Process = function () {},
    process;
    
Process.prototype = {
    
    /*
        Process an action
        
        @param [Action]: Action to process
        @param [number]: Timestamp of executing frame
        @param [number]: Duration, in ms, since last frame
    */
    action: function (action, framestamp, frameDuration) {
        
        
        
    },
    
    
    
    
    
    
    
    /*
        Process a single action
        
        @param [Action]
        @param [timestamp]
    */
    singleAction: function (action, frameStart, fps) {
        var output = {},
            rubix = Rubix[action.rubix],
            hasChanged = false;
        
        // If this is the first frame of an action, fire the onStart callback
        if (action.firstFrame) {
            action.onStart.call(action.scope, action.data);
            action.firstFrame = false;
        }

        // Check if this processor updates its input
        if (rubix.updateInput) {
            output.input = rubix.updateInput(action, frameStart);
        }

        action.progress = rubix.calcProgress(action, frameStart, fps);
        
        // Loop over all values 
        for (var key in action.values) {
            if (action.values.hasOwnProperty(key)) {
                output[key] = rubix.easeValue(key, action);
                
                // Apply Math function if one defined
                output[key] = action.values[key].round ? Math.round(output[key]) : output[key];

                if (action.values[key].current !== output[key]) {
                    hasChanged = true;
                    action.values[key].current = output[key];
                }
            }
        }
        
        action.onFrame.call(action.scope, output, action.data);

        // If output has changed, fire onChange
        if (hasChanged) {
            action.onChange.call(action.scope, output, action.data);
        }

        // If process is at its end, fire onEnd and deactivate action
        if (rubix.hasEnded(action)) {
            action.onEnd.call(action.scope, output, action.data);
            ActionManager.queueDeactivate(action.token);
        }
        
        action.framestamp = frameStart;
    }
};

module.exports = new Process();