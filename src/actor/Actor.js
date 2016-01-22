import Action from '../actions/Action';
import { each, speedPerSecond } from '../inc/utils';

export default class Actor extends Action {
    constructor(...args) {
        super(...args);
        this.once();
    }

    do(action) {
        if (this.reducer) {
            this.start(this.reducer(action, this.values));
        }
    }

    start(action) {
        super.start();
        const actionInstance = action.inherit();

        // Assign action to appropriate values

        return actionInstance;
    }

    willRender(actor, frameStamp, elapsed) {
        let hasChanged = false;

        each(this.values, (value, key) => {
            let updatedValue = value.current;

            // Update value based on active action
            if (value.action) {
                updatedValue = value.action.values[key].current;
            }

            // Run transform function (if present)
            if (value.transform) {
                updatedValue = value.transform(updatedValue, key, this);
            }

            // Smooth value if we have smoothing
            if (value.smooth) {
                updatedValue = calc.smooth(updatedValue, value.current, elapsed, value.smooth);
            }

            if (value.round) {
                updatedValue = Math.round(updatedValue);
            }

            value.velocity = speedPerSecond(updatedValue - value.current, elapsed);

            if (updatedValue !== value.current) {
                hasChanged = true;
            }

            value.current = updatedValue;

            // Update state
            if (value.unit) {
                const valueWithUnit = updatedValue + value.unit;
            }

            // Add straight to state if no parent
            if (!value.parent) {
                const mappedKey = (this.onRender && this.onRender.stateMap) ? this.onRender.stateMap[key] : key;
                this.state[key] = updatedValue;

            // Or add to parent
            } else {
                this.values[value.parent].children[key] = updatedValue;
            }
        });

        return hasChanged;
    }

    preRender() {
        // process parent values
    }
}