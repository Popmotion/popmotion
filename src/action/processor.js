/*
    Process actions
*/
"use strict";

var Rubix = require('./rubix.js'),
	calc = require('../utils/calc.js'),
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
        
        
        // Fire onStart if first frame
        if (action.firstFrame) {
            if (props.onStart) {
                props.onStart.call(props.scope, action.output, data);
            }
            
            action.firstFrame = false;
        }
        
        // Update Input if available
        if (props.input) {
            output.input = props.input.onFrame(framestamp);
        }
    
        // Update values
        for (var i = 0; i < order; i++) {
            value = values[order[i]].store;
            
            // Calculate new value
            output = rubix.process(key, value, values, action, frameDuration);
            
            // Round value
            output = value.round ? Math.round(output) : output;
            
            // Check if changed
            hasChanged = (value.current != output) ? true : hasChanged;
            
            // Update current and output
            value.current = action.output[key] = output;
        }
    
        // Fire onFrame callback
        if (props.onFrame) {
            props.onFrame.call(props.scope, action.output, data);
        }
    
        // Fire onChange callback
        if (hasChanged && props.onChange) {
            props.onChange.call(props.scope, action.output, data);
        }
        
        // Fire onEnd callback
        if (action.progress.hasEnded) {
            action.isActive(false);
            
            if (props.onEnd) {
                props.onEnd.call(props.scope, action.output, data);
            }
            
            // Find next action if still inActive
            if (!action.isActive()) {
                action.next();
            }
        }
    
        action.framestamp = framestamp;
    
    /*
        var output = {},
            props = action.props.store,
            data = action.data.store,
            values = action.values.store,
            value,
            rubix = props.rubix,
            hasLinked = false,
            hasChanged = false;

        // Fire onStart if firstFrame
        if (action.firstFrame) {
            if (props.onStart) {
                props.onStart.call(props.scope, data);
            }

            action.firstFrame = false;
        }
        
        // Update associated Input
        if (props.input) {
	        output.input = props.input.onFrame(framestamp);
        }
        
        // Update progress
        action.progress = rubix.calcProgress(action, props, values, framestamp, frameDuration);

        // Calculate new values
        for (var key in values) {
            if (values.hasOwnProperty(key)) {
                value = values[key].store;

                // Calculate new value if not currently linked
                if (!value.link) {
                    output[key] = rubix.easeValue(key, value, action, frameDuration);
    
                    // Round
                    if (value.round) {
                        output[key] = Math.round(output[key]);
                    }
    
                    // Check if has changed
                    if (value.current != output[key]) {
                        hasChanged = true;
                        value.current = output[key];
                    }
                } else {
                    hasLinked = true;
                }
            }
        } // end value calculations
        
        // If we have values that are linking in to another
        if (hasLinked) {
            for (key in values) {
                value = values[key].store;
                if (value.link && values[value.link]) {
                    value.current = output[key] = this.resolveMaps(values[value.link].store.current, value.mapLink, value.mapTo);
                }
            }
        }

        // Calculate new x and y if angle and distance present
        output = this.angleAndDistance(values, output);

        // Fire onFrame callback
        if (props.onFrame) {
            props.onFrame.call(props.scope, output, data);
        }

        // Fire onChange callback
        if (hasChanged && props.onChange) {
            props.onChange.call(props.scope, output, data);
        }
        
        // Fire onEnd and deactivate if at end
        if (rubix.hasEnded(action, hasChanged)) {
            action.isActive(false);

            if (props.onEnd) {
                props.onEnd.call(props.scope, output, data);
            }
            
            // Check if action is still inactive before checking next action
            if (!action.isActive()) {
                action.next();
            }
        }
        
        // Update Action framestamp
        action.framestamp = framestamp;*/
    },
    
    /*
        Take two maps, source and target, and figure out new value
        
        @param [number]: Source value
        @param [array]: Map of source values
        @param [array]: Map of target values
        @return [number]: 
    */
    resolveMaps: function (sourceValue, sourceMap, targetMap) {
        var resolvedValue = 0,
            mapLength = sourceMap.length;
        
        for (var i = 1; i < mapLength; i++) {
            if (sourceValue <= sourceMap[i] || i === mapLength - 1) {
                resolvedValue = calc.value(calc.progress(sourceValue, sourceMap[i - 1], sourceMap[i]), targetMap[i - 1], targetMap[i]);
                break;
            }
        }

        return resolvedValue;
    },
    
    /*
	    Process angle and distance
	    
	    @param [object]: Action origin point
	    @param [object]: Current output
	    @return [object]: Output with updated x and y
    */
    angleAndDistance: function (values, output) {
	    var point = {};

	    if (values.angle && values.distance) {
		    point = calc.pointFromAngleAndDistance({ x: values.x.get('current'), y: values.y.get('current') }, output.angle, output.distance);
		    output.x = point.x;
		    output.y = point.y;
	    }

	    return output;
    }
};

module.exports = new Process();