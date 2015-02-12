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
        action.output.input = props.input.onFrame(framestamp);
    }

    // Update values
    for (var i = 0; i < orderLength; i++) {
        key = order[i];

        // Get value
        value = values[key].store;

        // Load value rubix
        if (value.link) {
            valueRubix = (value.link !== KEY.ANGLE_DISTANCE) ? Rubix['Link'] : Rubix['AngleAndDistance'];
        } else {
            valueRubix = rubix;
        }
        
        // Calculate new value
        output = valueRubix.process(key, value, values, props, action, frameDuration);

        // Limit if range set
        if (rubix.limit) {
            output = rubix.limit(output, value);
        }
        
        if (value.round) {
            output = Math.round(output);
        }
        
        // Update velocity
        value.velocity = calc.speedPerSecond(calc.difference(value.current, output), frameDuration);
        
        // Check if changed and update
        if (value.current != output) {
            hasChanged = true;
        }
        
        // Round value and set to current
        value.current = action.output[key] = output;
    }
    
    // If angle and distance are set, reprocess x and y
    if (values.angle && values.distance) {
        Rubix.AngleAndDistance.calcXY(action, values);
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