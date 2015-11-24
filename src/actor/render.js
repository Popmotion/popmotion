const valueTypeManager = require('../value-types/manager');
const each = require('../inc/utils').each;

const createMapper = (role, mappedValues) => (name, val) => mappedValues[role.map(name)] = val;

module.exports = (actor) => {
    const numActiveParents = actor.activeParents.length;
    const numRoles = actor.roles.length;

    // Update parent values from calculated children
    for (let i = 0; i < numActiveParents; i++) {
        let key = actor.activeParents[i];
        let value = actor.values[key];

        // Update parent value current property
        value.current = valueTypeManager[value.type].combine(actor.state[key], value.template);

        // Update state
        actor.state.values[key] = value.current;
    }

    // Fire `frame` and `update` callbacks on all Roles
    for (let i = 0; i < numRoles; i++) {
        let role = actor.roles[i];
        let mappedValues = {};

        each(actor.state.values, createMapper(role, mappedValues));

        if (role.frame) {
            role.frame.call(actor, mappedValues, actor);
        }

        if (role.update && actor.hasChanged) {
            role.update.call(actor, mappedValues, actor);
        }
    }
}