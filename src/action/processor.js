/*
    Process actions
*/
"use strict";

var Rubix = require('../core/rubix.js'),
    routes = require('./routes.js'),
    calc = require('../utils/calc.js');

module.exports = function (action, framestamp, frameDuration) {
    var values = action.values,
        rubix = Rubix[action.rubix],
        valueRubix = rubix,
        hasChanged = false,
        defaultRoute = routes.getName(),
        i = 0,
        order = action.order = action.order || [],
        orderLength = order.length,
        key = '', value, output;
    
    // Update elapsed
    if (rubix.updateInput) {
        rubix.updateInput(action, frameDuration);
    }

    // Fire onStart if first frame
    if (action.firstFrame) {
        routes.shard(function (route, output) {
            if (route.onStart) {
                route.onStart(output, action, values);
            }
        }, action);
        
        action.firstFrame = false;
    }
    
    // Update Input if available
    if (action.input) {
        action.output.input = action.input.onFrame(framestamp);
    }

    // Update values
    for (; i < orderLength; i++) {
        // Get value and key
        key = order[i];
        value = values[key];

        // Load rubix for this value
        valueRubix = rubix;
        if (value.link) {
            valueRubix = Rubix['link'];
        }

        // Calculate new value
        output = valueRubix.process(key, value, values, action, frameDuration);
        
        // Limit if range set
        if (valueRubix.limit) {
            output = valueRubix.limit(output, value);
        }
        
        // Round value if rounding set to true
        if (value.round) {
            output = Math.round(output);
        }

        // Update change from previous frame
        value.frameChange = output - value.current;
        
        // Calculate velocity
        if (!valueRubix.calculatesVelocity) {
            value.velocity = calc.speedPerSecond(value.frameChange, frameDuration);
        }
        
        // Update current speed
        value.speed = Math.abs(value.velocity);
        
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
            route.onFrame(output, action, values);
        }
        
        // Fire onChanged if values have changed
        if (hasChanged && route.onChange) {
            route.onChange(output, action, values);
        }
    }, action.output);

    // Fire onEnd if ended
    if (rubix.hasEnded(action, hasChanged)) {
        action.isActive(false);
        
        routes.shard(function (route, output) {
            if (route.onEnd) {
                route.onEnd(output, action, values);
            }
        }, action.output);
        
        if (!action.isActive() && action.rubix === 'play') {
            action.next();
        }
    }
    
    action.framestamp = framestamp;
};