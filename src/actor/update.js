"use strict";

var valueTypeManager = require('../value-types/manager'),
    calc = require('../inc/calc'),
    utils = require('../inc/utils'),
    each = utils.each,
    Action = require('../actions/Action'),
    defaultAction = new Action(),
    Watch = require('../actions/Watch'),
    watcher = new Watch(),

    createMapper = function (role, mappedValues) {
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
    checkAllActionsHaveEnded = function (actor, hasChanged) {
        var hasEnded = true,
            values = actor.state.values;

        each(actor.activeActions, (key, action) => {
            // Return if action has been deleted elsewhere
            if (!action) { return; }

            if (action.onFrame) {
                action.onFrame.call(actor, values, actor, action);
            }

            if (action.onUpdate && hasChanged) {
                action.onUpdate.call(actor, values, actor, action);
            }

            if (action.hasEnded && action.hasEnded(actor, hasChanged) === false) {
                hasEnded = false;
            } else {
                if (action.onComplete) {
                    action.onComplete.call(actor, actor, action);
                }
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
    update = function (framestamp, frameDuration) {
        var numActiveValues = this.activeValues.length,
            numActiveParents = this.activeParents.length,
            numRoles = this.roles.length,
            state = this.state,
            hasChanged = false;

        // Update values
        for (let i = 0; i < numActiveValues; i++) {
            // Get value and key
            let key = this.activeValues[i];
            let value = this.values[key];
            let action = (!value.action || value.action && !value.action.isActive) ? defaultAction : value.action;

            // Fire action onFrameStart if not already fired
            if (action.onFrameStart && action.lastUpdate !== framestamp) {
                action.onFrameStart(this, frameDuration, framestamp);
                action.lastUpdate = framestamp;
            }

            // Calculate new value
            let updatedValue = utils.isString(value.watch) ? watcher.process(this, value) : action.process(this, value, key, frameDuration);

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
            if (value.current !== updatedValue || this.firstFrame) {
                hasChanged = true;
            }

            // Set new current 
            value.current = updatedValue;
            let valueState = (value.unit) ? updatedValue + value.unit : updatedValue;

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
        for (let i = 0; i < numActiveParents; i++) {
            let key = this.activeParents[i];
            let value = this.values[key];

            // Update parent value current property
            value.current = valueTypeManager[value.type].combine(state[key], value.template);

            // Update state
            state.values[key] = value.current;
        }

        // Fire `frame` and `update` callbacks on all Roles
        for (let i = 0; i < numRoles; i++) {
            let role = this.roles[i];
            let mappedValues = {};

            each(state.values, createMapper(role, mappedValues));

            if (role.frame) {
                role.frame.call(this, mappedValues, this);
            }

            if (role.update && hasChanged) {
                role.update.call(this, mappedValues, this);
            }
        }

        // Reset hasChanged before further Actions might affect this
        this.hasChanged = false;

        if (this.isActive) {
            this.isActive = false;

            if (checkAllActionsHaveEnded(this, hasChanged)) {
                // Fire `complete` callbacks
                for (let i = 0; i < numRoles; i++) {
                    let role = this.roles[i];
                    if (role.complete) {
                        role.complete.call(this, this);
                    }
                }

                if (!this.isActive) {
                    this.next();
                }
            } else {
                this.isActive = true;
                this.firstFrame = false;
            }
        }
                
        this.framestamp = framestamp;
    };

module.exports = update;