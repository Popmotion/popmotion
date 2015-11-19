const calc = require('../inc/calc');
const utils = require('../inc/utils');
const Action = require('../actions/Action');
const defaultAction = new Action();
const Watch = require('../actions/Watch');
const watcher = new Watch();

module.exports = (actor, framestamp, frameDuration) => {
    let state = actor.state;
    const numActiveValues = actor.activeValues.length;

    actor.hasChanged = false;

    for (let i = 0; i < numActiveValues; i++) {
        // Get value and key
        let key = actor.activeValues[i];
        let value = actor.values[key];
        let action = (!value.action || value.action && !value.action.isActive) ? defaultAction : value.action;

        // Fire action onFrameStart if not already fired
        if (action.onFrameStart && action.lastUpdate !== framestamp) {
            action.onFrameStart(actor, frameDuration, framestamp);
            action.lastUpdate = framestamp;
        }
    
        // Calculate new value
        let updatedValue = utils.isString(value.watch) ? watcher.process(actor, value) : action.process(actor, value, key, frameDuration);

        // User-defined transform function
        if (value.transform) {
            updatedValue = value.transform(updatedValue, key, actor);
        }

        // Limit if actor action does that kind of thing
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
        if (value.current !== updatedValue || actor.firstFrame) {
            actor.hasChanged = true;
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
}