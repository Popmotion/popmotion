import Action from '../actions/Action';

const boundProps = (actor, action) => ({
    on: actor.on,

    onStart: () => {
        actor.activateAction(action.id, action);

        // Copy Actor properties to Action
        for (let key in action.values) {
            if (action.values.hasOwnProperty(key)) {
                const actorValue = actor.values[key];
                const actionValue = action.values[key];
                // replace property copy with current transfer - maybe replace willRender?
                for (let propKey in actorValue) {
                    if (actorValue.hasOwnProperty(propKey)) {
                        actionValue[propKey] = actorValue[propKey];
                    }
                }
            }
        }
    },

    onStop: () => {
        actor.deactivateAction(action.id);
    },

    willRender: ({ state, values }) => {
        // Update actor values with incoming state values
        for (let key in state) {
            if (state.hasOwnProperty(key)) {
                actor.state[key] = state[key];
                actor.values[key].current = values[key].current;
                actor.values[key].velocity = values[key].velocity;
            }
        }

        return false;
    }
});

export default class Actor extends Action {
    constructor(...args) {
        super(...args);
        this.activeActions = {};
        this.numActiveActions = 0;
    }

    set(props, instant) {
        if (instant || !this.reducer) {
            super.set(props);
            this.once();
        } else {
            const action = this.reducer(props);
            if (action) {
                this.start(action);
            }
        }
    }

    /*
        Bind Action to Actor
    */
    bind(action) {
        const inheritedAction = action.inherit();
        let newValues = {};
        let hasNewValues = false;

        // Create values on actor that don't exist
        for (let key in inheritedAction.values) {
            if (inheritedAction.values.hasOwnProperty(key) && !this.values.hasOwnProperty(key)) {
                newValues[key] = {};
            }
        }

        if (hasNewValues) {
            this.set(newValues);
        }

        return inheritedAction.set(boundProps(this, inheritedAction));
    }

    /*
        Start Actor

        If Action is provided, bind it to this Actor and start

        @param (optional) [Action]
    */
    start(action) {
        super.start();

        if (action) {
            const boundAction = this.bind(action);
            boundAction.start();

            return boundAction;
        } else {
            for (let key in this.activeActions) {
                if (this.activeActions.hasOwnProperty(key)) {
                    const action = this.activeActions[key];
                    if (!action.isActive) {
                        action.start();
                    }
                }
            }
        }

        return this;
    }

    stop() {
        super.stop();

        for (let key in this.activeActions) {
            if (this.activeActions.hasOwnProperty(key)) {
                this.activeActions[key].stop();
            }
        }
    }

    /*
        Add active actions

        @param [number]
        @param [Action]
    */
    activateAction(id, action) {
        this.activeActions[id] = action;
        this.numActiveActions++;

        if (this.numActiveActions) {
            super.start();
        }
    }

    /*
        Remove active actions

        @param [number]
    */
    deactivateAction(id) {
        delete this.activeActions[id];
        this.numActiveActions--;

        if (!this.numActiveActions && this.isActive) {
            super.stop();
        }
    }
}