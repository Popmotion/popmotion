/*
    Process actions
*/
"use strict";

var Rubix = require('./rubix.js'),
    KEY = require('../opts/keys.js'),
    routes = require('./routes.js'),
    calc = require('../utils/calc.js');

module.exports = function (action, framestamp, frameDuration) {
    var props = action.props.store,
        data = action.data.store,
        values = action.values,
        rubix = Rubix[props.rubix],
        valueRubix = rubix,
        hasChanged = false,
        i = 0,
        order = props.order = props.order || [],
        orderLength = order.length,
        key = '', value, output;
    
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
    
    for (; i < orderLength; i++) {
        // Get value and key
        key = order[i];
        value = values[key].store;
        
        // Load rubix for this value
        valueRubix = rubix;
        if (value.link) {
            valueRubix = (value.link !== KEY.ANGLE_DISTANCE) ? Rubix['Link'] : Rubix['AngleAndDistance'];
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
        action.output[value.route][value.name] = (value.unit) ? output + value.unit : output;
    }
    console.log(action.output);
    
    
    // Generate output
    routes.shard(function (route, bucket) {
        var routeName = route.name,
            i = 0,
            key = '',
            order = props.order[routeName] || [],
            orderLength = order.length,
            valueRubix,
            output = {};
        
        for (; i < orderLength; i++) {
            
            key = order[i];
            
            // Get value
            value = bucket[key].store;
            
            // Load rubix for value
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
            output[key] = (value.unit) ? output + value.unit : output;
        }
        
        action.output[routeName] = output;
        
        // Fire onFrame every frame
        if (route.onFrame) {
            route.onFrame(output, action, values, props, data);
        }
        
        // Fire onChanged if values have changed
        if (hasChanged && route.onChange) {
            route.onChange(output, action, values, props, data);
        }
    }, values);
        
    // Fire onEnd if ended
    if (rubix.hasEnded(action, hasChanged)) {
        action.isActive(false);

        routes.onEnd(action.output, action, values, props, data);
        
        if (!action.isActive()) {
            action.next();
        }
    }
    
    action.framestamp = framestamp;
};