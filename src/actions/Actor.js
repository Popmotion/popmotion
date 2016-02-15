import Action from '../actions/Action';

/*
    Methods and properties to add to bound Actions
*/
const boundOnStart = (action) => action.actor.activateAction(action.id, action);
const boundOnStop = (action) => action.actor.deactivateAction(action.id);
const boundProps = (actor) => ({
    actor: actor,
    isPriority: true,
    on: actor.on,
    _onStart: boundOnStart,
    _onStop: boundOnStop,
    onRender: undefined
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
                newValues[key] = inheritedAction.values[key];
                hasNewValues = true;
            }
        }

        if (hasNewValues) {
            this.set({ values: newValues });
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

        return this;
    }

    willRender(actor, frameStamp, elapsed) {
        for (let i = 0; i < this.numValueKeys; i++) {
            const key = this.valueKeys[i];
            const value = this.values[key];

            if (value.driver) {
                value.current = this.activeActions[value.driver].values[key].current;
            }
        }

        return super.willRender(actor, frameStamp, elapsed);
    }

    /*
        Add active actions

        @param [number]
        @param [Action]
    */
    activateAction(id, action) {
        this.activeActions[id] = action;
        this.numActiveActions++;

        for (let i = 0; i < action.numValueKeys; i++) {
            const key = action.valueKeys[i];
            const actionValue = action.values[key];
            const value = this.values[key];

            value.driver = id;
            actionValue.from = value.current;
        }

        if (this.numActiveActions) {
            super.start();
        }
    }

    /*
        Remove active actions

        @param [number]
    */
    deactivateAction(id) {
        const action = this.activeActions[id];

        for (let i = 0; i < action.numValueKeys; i++) {
            const key = action.valueKeys[i];
            const value = this.values[key];

            value.driver = undefined;
        }

        delete this.activeActions[id];
        this.numActiveActions--;

        if (!this.numActiveActions && this.isActive) {
            super.stop();
        }
    }
}