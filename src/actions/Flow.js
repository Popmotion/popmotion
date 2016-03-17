import Action from '../actions/Action';
import generateBlendCurve from './flow/generate-blend-curve';
import bindAdapter from '../inc/bind-adapter';

/*
    Methods and properties to add to bound Actions
*/
const boundOnStart = (action) => action.flow.activateAction(action.id, action);
const boundOnStop = (action) => action.flow.deactivateAction(action.id);
const boundProps = (flow) => ({
    flow,
    isPriority: true,
    onActivate: boundOnStart,
    onDeactivate: boundOnStop
});

class Flow extends Action {
    constructor(props) {
        super(props);
        this.activeActions = {};
        this.numActiveActions = 0;
    }

    set(props) {
        // Bind `adapter` to an adapter, if not already
        if (props.adapter && !props.adapter.setter) {
            // Ducktypish check for Adapter
            props.adapter = bindAdapter(props.adapter);
        }

        super.set(props);
        this.once();

        return this;
    }

    /*
        Bind Action to Actor
    */
    connect(action) {
        const inheritedAction = action.inherit();
        let newValues = {};
        let hasNewValues = false;

        // Create values on actor that don't exist
        for (let key in inheritedAction.values) {
            if (inheritedAction.values.hasOwnProperty(key) && !this.values.hasOwnProperty(key)) {
                newValues[key] = {};
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
    start() {
        super.start();

        for (let key in this.activeActions) {
            if (this.activeActions.hasOwnProperty(key)) {
                const action = this.activeActions[key];
                if (!action.isActive) {
                    action.start();
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
            const driver = value.numDrivers ? this.activeActions[value.drivers[0]] : false;
            let newCurrent = value.numDrivers ? driver.values[key].current : value.current;

            if (driver.blendCurve) {
                newCurrent = driver.blendCurve();
            }

            value.current = newCurrent;
        }

        return super.willRender(actor, frameStamp, elapsed);
    }

    onRender({ state, adapter }) {
        if (adapter && adapter.set) {
            adapter.set(state);
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

        for (let i = 0; i < action.numValueKeys; i++) {
            const key = action.valueKeys[i];
            const actionValue = action.values[key];
            const value = this.values[key];

            // If we're blending this action, and there's on already in progress
            if (action.blend && value.numDrivers) {
                action.blendCurve = generateBlendCurve(this.activeActions[value.drivers[0]], action, key);
            } else {
                // Pass Actor value properties to Action
                actionValue.velocity += value.velocity;
                actionValue.from = actionValue.current = value.current;
            }

            value.drivers = [id];
            value.numDrivers = value.drivers.length;
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

        if (action) {
            for (let i = 0; i < action.numValueKeys; i++) {
                const key = action.valueKeys[i];
                const value = this.values[key];
                const driverIndex = value.drivers.indexOf(id);

                if (driverIndex !== -1) {
                    value.drivers.splice(driverIndex, 1);
                    value.numDrivers--;
                }
            }

            delete this.activeActions[id];
            this.numActiveActions--;
        }

        if (!this.numActiveActions && this.isActive) {
            super.stop();
        }
    }
}

Flow.prototype.defaultValue = Action.extendDefaultValue({
    drivers: [],
    numDrivers: 0
});

export default Flow;
