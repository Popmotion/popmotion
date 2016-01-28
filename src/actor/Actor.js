import Action from '../actions/Action';

const boundProps = (actor, action) => ({
    onStart: () => {
        actor.activateAction(action.id, action);
    },
    onStop: () => {
        actor.deactivateAction(action.id);
    },
    onPreRender: () => {
        actor.state = { ...actor.state, ...action.state };
    },
    element: action.element,
    onRender: action.onRender
});

export default class Actor extends Action {
    constructor(...args) {
        super(...args);
        this.once();
        this.activeActions = {};
        this.numActiveActions = 0;
    }

    set(props, instant) {
        if (instant || !this.reducer) {
            super.set(props);
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
        return action.inherit(boundProps(this, action));
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
            each(this.activeActions, (action) => {
                if (!action.isActive) {
                    action.start();
                }
            });
        }

        return this;
    }

    stop() {
        super.stop();
        each(this.activeActions, (action) => action.stop());
    }

    /*
        Add active actions

        @param [number]
        @param [Action]
    */
    activateAction(id, action) {
        this.activeActions[id] = action;
        this.numActiveActions++;
        this.start();
    }

    /*
        Remove active actions

        @param [number]
    */
    deactivateAction(id) {
        this.activeActions[id] = undefined;
        this.numActiveActions--;

        if (!this.numActiveActions) {
            this.stop();
        }
    }
}