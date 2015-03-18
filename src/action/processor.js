/*
    Process actions
*/
"use strict";

var Rubix = require('./rubix.js'),
    routes = require('./routes.js'),
    calc = require('../utils/calc.js'),
    
    ANGLE_DISTANCE = 'AngleAndDistance';

module.exports = function (action, framestamp, frameDuration) {
    var props = action.props.store,
        data = action.data.store,
        values = action.values,
        rubix = Rubix[props.rubix],
        valueRubix = rubix,
        hasChanged = false,
        defaultRoute = routes.getName(),
        i = 0,
        order = props.order = props.order || [],
        orderLength = order.length,
        key = '', value, output;
    
    action.output = {
        values: {}
    };
    
    // Update elapsed
    if (rubix.updateInput) {
        rubix.updateInput(action, props, frameDuration);
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
    for (; i < orderLength; i++) {
        // Get value and key
        key = order[i];
        value = values[key];

        // Load rubix for this value
        valueRubix = rubix;
        if (value.link) {
            valueRubix = (value.link !== ANGLE_DISTANCE) ? Rubix['Link'] : Rubix[ANGLE_DISTANCE];
        }
        
        // Calculate new value
        output = valueRubix.process(key, value, values, props, action, frameDuration);
        
        // Limit if range set
        if (valueRubix.limit) {
            output = valueRubix.limit(output, value);
        }
        
        // Round value if rounding set to true
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
        action.output[value.route] = action.output[value.route] || {};
        action.output[defaultRoute] = action.output[defaultRoute] || {};
        action.output[defaultRoute][key] = action.output[value.route][value.name] = (value.unit) ? output + value.unit : output;
    }

    // shard onFrame and onChange
    routes.shard(function (route, output) {
        // Fire onFrame every frame
        if (route.onFrame) {
            route.onFrame(output, action, values, props, data);
        }
        
        // Fire onChanged if values have changed
        if (hasChanged && route.onChange) {
            route.onChange(output, action, values, props, data);
        }
    }, action.output);

    // Fire onEnd if ended
    if (rubix.hasEnded(action, hasChanged)) {
        action.isActive(false);

        routes.onEnd(action.output, action, values, props, data);
        
        if (!action.isActive() && props.rubix === 'Play') {
            action.next();
        }
    }
    
    action.framestamp = framestamp;
};