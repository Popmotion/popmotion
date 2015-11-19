/*
    Check all Actions for `onEnd`, return true if all are true

    @param [Actor]
    @param [boolean]
    @returns [boolean]
*/
const checkAllActionsHaveEnded = (actor, hasChanged) => {
    let hasEnded = true;
    let values = actor.state.values;

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
};

module.exports = (actor, framestamp) => {
    if (actor.isActive) {
        actor.isActive = false;

        if (checkAllActionsHaveEnded(actor, actor.hasChanged)) {
            const numRoles = actor.roles.length;

            // Fire `complete` callbacks
            for (let i = 0; i < numRoles; i++) {
                let role = actor.roles[i];
                if (role.complete) {
                    role.complete.call(actor, actor);
                }
            }

            if (!actor.isActive) {
                actor.next();
            }
        } else {
            actor.isActive = true;
            actor.firstFrame = false;
        }
    }
            
    actor.framestamp = framestamp;
};