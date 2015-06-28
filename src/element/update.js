"use strict";

var actionManager = require('../actions/manager'),
    routeManager = require('../routes/manager'),
    valueTypeManager = require('../value-types/manager'),
    calc = require('../inc/calc'),

    defaultRoute = 'values',

    update = function (framestamp, frameDuration) {
        var self = this,
            values = this.values,
            action = actionManager[this.action],
            valueAction = action,
            output = this.output,
            numActiveValues = this.order.length,
            numActiveParents = this.parentOrder.length,
            key = '',
            value = {},
            updatedValue = 0,
            i = 0;

        // Update Input and attach new values to output
        if (this.input) {
            output.input = this.input.onFrame(framestamp);
        }

        // Update Action input
        if (action.onFrameStart) {
            action.onFrameStart.call(this, frameDuration);
        }

        // Fire onStart if first frame
        if (this.firstFrame) {
            routeManager.shard(function (route) {
                if (route.onStart) {
                    route.onStart(values, self);
                }
            }, output);
        }

        // Create default route output if not present
        output[defaultRoute] = output[defaultRoute] || {};

        // Update values
        for (; i < numActiveValues; i++) {
            // Get value and key
            key = this.order[i];
            value = values[key];

            // Load value-specific action
            valueAction = value.link ? actionManager['link'] : action;

            // Calculate new value
            updatedValue = valueAction.process.call(this, key, value, frameDuration);

            // Limit if range
            if (valueAction.limit) {
                updatedValue = valueAction.limit(updatedValue, value);
            }

            // Round value if round set to true
            if (value.round) {
                updatedValue = Math.round(updatedValue);
            }

            // Update change from previous frame
            value.frameChange = updatedValue - value.current;

            // Calculate velocity if Action hasn't already
            if (!valueAction.calculatesVelocity) {
                value.velocity = calc.speedPerSecond(value.frameChange, frameDuration);
            }

            // Update current speed
            value.speed = Math.abs(value.velocity);

            // Check if changed and update
            if (value.current != updatedValue) {
                this.hasChanged = true;
            }

            // Set current
            this.values[key].current = updatedValue;

            // Create route output if not present
            output[value.route] = output[value.route] || {};
            // Put value in default route output
            output[defaultRoute][key] = (value.unit) ? updatedValue + value.unit : updatedValue;
            // Put in specific root if not a parent
            if (!value.parent) {
                output[value.route][value.name] = output[defaultRoute][key];

            // Or add to parent output, to be combined
            } else {
                output[value.parent] = output[value.parent] || {};
                output[value.parent][value.propName] = output[defaultRoute][key];
            }
        }

        // Update parent values from calculated children
        for (i = 0; i < numActiveParents; i++) {
            key = this.parentOrder[i];
            value = this.values[key];

            // Update parent value current property
            value.current = valueTypeManager[value.type].combine(output[key]);

            // Update output
            output[value.route][value.name] = output[defaultRoute][key] = value.current;
        }

        // Run onFrame and onChange for every output
        routeManager.shard(function (route, routeName, routeOutput) {

            // Fire onFrame every frame
            if (route.onFrame) {
                route.onFrame(routeOutput, self);
            }

            // Fire onChanged if any value has changed
            if (self.hasChanged && route.onChange || action.firstFrame && route.onChange) {
                route.onChange(routeOutput, self);
            }

        }, output);

        // Fire onEnd if this Action has ended
        if (action.hasEnded.call(this, this.hasChanged)) {
            this.isActive = false;

            routeManager.shard(function (route, routeName, routeOutput) {
                if (route.onEnd) {
                    route.onEnd(routeOutput, self);
                }
            });

            // If is a play action, and is not active, check next action
            if (!this.isActive && this.action === 'play' && this.next) {
                this.next();
            }
        } else {
            this.hasChanged = false;
        }

        this.firstFrame = false;
        this.framestamp = framestamp;
    };

module.exports = function () {
    if (this.isActive) {
        update.apply(this, arguments);
    }
};