/*
    Process actions
*/
"use strict";

var Rubix = require('./rubix.js'),
    KEY = require('../opts/keys.js'),
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
        action.output.input = props.input.onFrame(framestamp);
    }

    // Update values
    for (var i = 0; i < orderLength; i++) {
        key = order[i];

        // Get value
        value = values[key].store;

        // Load value rubix
        valueRubix = rubix;
        if (value.link) {
            valueRubix = (value.link !== KEY.ANGLE_DISTANCE) ? Rubix['Link'] : Rubix['AngleAndDistance'];
        }
        
        // Calculate new value
        output = valueRubix.process(key, value, values, props, action, frameDuration);

        // Limit if range set
        if (rubix.limit) {
            output = rubix.limit(output, value);
        }
        
        // Round value if rounding on
        if (value.round) {
            output = Math.round(output);
        }
        
        // Update velocity
        value.velocity = calc.speedPerSecond(calc.difference(value.current, output), frameDuration);
        
        // Check if changed and update
        if (value.current != output) {
            hasChanged = true;
        }
        
        // Set current and add unit (if any) for output
        value.current = output;
        action.output[key] = (value.unit) ? output + value.unit : output;
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