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
        var props = action.props.store,
            data = action.data.store,
            values = action.values.store,
            rubix = props.rubix,
            value,
            output,
            hasChanged = false;
            
        // Update elapsed
        if (rubix.updateInput) {
            rubix.updateInput(action, props, framestamp);
        }
        
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
            
            // Limit if range set
            output = (rubix.limit) ? rubix.limit(output, value) : output;
            
            // Check if changed
            hasChanged = (value.current != output) ? true : hasChanged;
            
            // Round value and set to current
            value.current = action.output[key] = (value.round) ? Math.round(output) : output;
            
            // Update velocity
            value.velocity = calc.speedPerSecond(calc.difference(value.current, output), frameDuration);
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
        if (rubix.hasEnded(action, hasChanged)) {
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
    
    angleAndDistance: function (values, output) {
	    var point = {};

	    if (values.angle && values.distance) {
		    point = calc.pointFromAngleAndDistance({ x: values.x.get('current'), y: values.y.get('current') }, output.angle, output.distance);
		    output.x = point.x;
		    output.y = point.y;
	    }

	    return output;
    }*/
};

module.exports = new Process();