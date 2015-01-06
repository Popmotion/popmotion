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
        var output = {},
            props = action.props,
            rubix = props.rubix,
            data = action.data(),
            values = action.values.getAll(),
            hasChanged = false;
        
        // Fire onStart if firstFrame
        if (action.firstFrame) {
            props.onStart.call(props.scope, data);
            action.firstFrame = false;
        }
        
        // Update associated Input
        this.updateInput(props.input, framestamp);
        
        // Update progress
        action.progress = rubix.calcProgress(action, props, framestamp, frameDuration);
        
        // Calculate new values
        for (var key in values) {
            if (values.hasOwnProperty(key)) {
                
                // Ease value
                output[key] = rubix.easeValue(key, values[key], action);
                
                // Round
                if (values[key].round) {
                    output[key] = Math.round(output[key]);
                }
                
                // Check if has changed
                if (values[key].current !== output[key]) {
                    hasChanged = true;
                    values[key].current = output[key];
                }
            }
        } // end value calculations
        
        // Fire onFrame callback
        props.onFrame.call(props.scope, output, data);
        
        // Fire onChange callback
        if (hasChanged) {
            props.onChange.call(props.scope, output, data);
        }
        
        // Fire onEnd and deactivate if at end
        if (rubix.hasEnded(action)) {
            props.onEnd.call(props.scope, output, data);
            action.next();
        }
        
        // Update Action framestamp
        action.framestart = framestart;
    },
    
    /*
        Update associated input
        
        @param [Input]: Bound input
        @param [number]: Framestamp of latest frame
    */
    updateInput: function (input, framestamp) {
        if (input) {
            input.updateInput(framestamp);
        }
    }
};

module.exports = new Process();