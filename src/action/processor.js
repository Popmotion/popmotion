/*
    Process actions
*/
"use strict";

var Rubix = require('./rubix.js'),
    calc = require('../utils/calc.js');

module.exports = function (action, framestamp, frameDuration) {
    var props = action.props.store,
        data = action.data.store,
        values = action.values.store,
        order = props.order = props.order || [],
        orderLength = order.length,
        rubix = Rubix[props.rubix],
        key = '',
        value,
        valueRubix,
        output,
        hasChanged = false;
        
    action.output = {};

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
    for (var i = 0; i < orderLength; i++) {
        key = order[i];

        // Get value
        value = values[key].store;

        // Load value rubix
        valueRubix = Rubix[value.rubix];

        // Calculate new value
        output = valueRubix.process(key, value, values, props, action, frameDuration);

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
};