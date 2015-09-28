"use strict";

var valueTypeManager = require('../value-types/manager'),
    calc = require('../inc/calc'),
    utils = require('../inc/utils'),
    each = utils.each,
    Action = require('../actions/Action'),
    defaultAction = new Action(),
    createMapper = function createMapper(role, mappedValues) {
    return function (name, val) {
        mappedValues[role.map(name)] = val;
    };
},

/*
    Check all Actions for `onEnd`, return true if all are true
     @param [Actor]
    @param [boolean]
    @returns [boolean]
*/
checkAndFireHasEnded = function checkAndFireHasEnded(actor, hasChanged) {
    var hasEnded = true;

    each(actor.activeActions, function (key, action) {
        console.log(action);
        if (action.hasEnded && action.hasEnded(actor, hasChanged) === false) {
            hasEnded = false;
        } else {
            actor.unbindAction(key);
        }
    });

    return hasEnded;
},

/*
    Update the Actor and its values
     @param [int]: Timestamp of rAF call
    @param [int]: Time since last frame
*/
update = function update(framestamp, frameDuration) {
    var numActiveValues = this.activeValues.length,
        numActiveParents = this.activeParents.length,
        numRoles = this.roles.length,
        state = this.state,
        hasChanged = this.hasChanged;

    // Update Input and attach new values to stata
    if (this.input) {
        state.input = this.input.onFrame(framestamp);
    }

    // Fire onStart callback if this is first frame
    if (this.firstFrame) {
        for (var i = 0; i < numRoles; i++) {
            var role = this.roles[i];
            if (role.start) {
                role.start.call(this);
            }
        }
    }

    // Update values
    for (var i = 0; i < numActiveValues; i++) {
        // Get value and key
        var key = this.activeValues[i];
        var value = this.values[key];
        var action = !value.action || value.action && !value.action.isActive ? defaultAction : value.action;

        // Fire action onFrameStart if not already fired
        if (action.onFrameStart && action.lastUpdate !== framestamp) {
            action.onFrameStart(this, frameDuration);
            action.lastUpdate = framestamp;
        }

        // Calculate new value
        var updatedValue = action.process(this, value, key, frameDuration);

        // Limit if this action does that kind of thing
        if (action.limit && value.hasRange) {
            updatedValue = action.limit(updatedValue, value);
        }

        // Round value if round is true
        if (value.round) {
            updatedValue = Math.round(updatedValue);
        }

        // Update frameChange
        value.frameChange = updatedValue - value.current;

        // Calculate velocity if Action hasn't
        if (!action.calculatesVelocity) {
            value.velocity = calc.speedPerSecond(value.frameChange, frameDuration);
        }

        // Update current speed
        value.speed = Math.abs(value.velocity);

        // Check if value's changed
        if (value.current !== updatedValue) {
            hasChanged = true;
        }

        // Set new current
        value.current = updatedValue;
        var valueState = value.unit ? updatedValue + value.unit : updatedValue;

        // Put value in state if no parent
        if (!value.parent) {
            state.values[key] = valueState;

            // Or, add to parent state to be combined later
        } else {
                state[value.parent] = state[value.parent] || {};
                state[value.parent][value.propName] = valueState;
            }
    }

    // Update parent values from calculated children
    for (var i = 0; i < numActiveParents; i++) {
        var key = this.activeParents[i];
        var value = this.values[key];

        // Update parent value current property
        value.current = valueTypeManager[value.type].combine(state[key], value.template);

        // Update state
        state.values[key] = value.current;
    }

    // Fire `frame` and `update` callbacks on all Roles
    for (var i = 0; i < numRoles; i++) {
        var role = this.roles[i];
        var mappedValues = {};

        each(state.values, createMapper(role, mappedValues));

        if (role.frame) {
            role.frame.call(this, mappedValues);
        }

        if (role.update && (hasChanged || this.firstFrame)) {
            role.update.call(this, mappedValues);
        }
    }

    // Reset hasChanged before further Actions might affect this
    this.hasChanged = false;

    // Check all Actions and fire onEnd if they've ended
    if (this.isActive && checkAndFireHasEnded(this, hasChanged)) {
        this.isActive = false;

        // Fire `complete` callback
        for (var i = 0; i < numRoles; i++) {
            var role = this.roles[i];
            if (role.complete) {
                role.complete.call(this);
            }
        }

        // If Actor is still inactive, fire next step
        if (!this.isActive) {
            this.next();
        }
    }

    this.firstFrame = false;
    this.framestamp = framestamp;
};

module.exports = update;