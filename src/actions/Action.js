import Process from '../process/Process';
import { speedPerSecond } from '../inc/calc';
import { each, isObj } from '../inc/utils';

const DEFAULT_PROP = 'current';

export default class Action extends Process {
    constructor(...args) {
        super(...args);
        this.values = {};
        this.state = {};
        this.valueKeys = [];
        this.parentKeys = [];

        // Initalise renderer 
        if (this.onRender && this.onRender.init) {
            this.onRender.init(this);
        }
    }

    /*
        # Set Action properties
        ## Set user-defined Action properties

        @param [object]
        @return [Action]
    */
    set(props) {
        const { values, ...propsToSet } = props;

        super.set(propsToSet);

        // Merge `value` properties with existing
        if (values) {
            const currentValues = this.values;
            const defaultValue = this.getDefaultValue();
            const defaultValueProp = this.getDefaultValueProp();

            // Inheritable values from props
            each(defaultValue, (value, key) => {
                if (propsToSet[key] !== undefined) {
                    defaultValue[key] = propsToSet[key];
                }
            });

            // Overwrite per-value props
            each(values, (value, key) => {
                const existingValue = currentValues[key];
                // Check for value type
                let newValue = { ...defaultValue };

                if (isObj(value)) {
                    newValue = { ...newValue, ...value };
                } else {
                    newValue[defaultValueProp] = value;
                }

                currentValues[key] = existingValue ? { ...existingValue, ...newValue } : newValue;

                if (currentValues[key].children) {
                    if (this.valueKeys.indexOf(key) === -1) {
                        this.valueKeys.push(key);
                    }
                } else {
                    if (this.parentKeys.indexOf(key) === -1) {
                        this.parentKeys.push(key);
                    }
                }
            });

            // Precomputer value key and parent key length to prevent per-frame measurement
            this.numValueKeys = this.valueKeys.length;
            this.numParentKeys = this.parentKeys.length;
        }

        return this;
    }

    /*
        Decide whether this Action will render on next frame

        @param [Action]
        @param [number]
        @param [number]
        @return [boolean]: Return true to render
    */
    willRender(action, frameStamp, elapsed) {
        let hasChanged = false;

        for (let i = 0; i < this.numValueKeys; i++) {
            const key = this.valueKeys[i];
            const value = this.values[key];

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
                updatedValue = smooth(updatedValue, value.current, elapsed, value.smooth);
            }

            // Round value
            if (value.round) {
                updatedValue = Math.round(updatedValue);
            }

            // Cap to minimum value
            if (value.min !== undefined) {
                updatedValue = Math.max(updatedValue, value.min);
            }

            // Cap to maximum value
            if (value.max !== undefined) {
                updatedValue = Math.min(updatedValue, value.max);
            }

            value.velocity = speedPerSecond(updatedValue - value.current, elapsed);

            if (updatedValue !== value.current) {
                hasChanged = true;
            }

            value.current = updatedValue;
        }

        return (this.onCleanup) ? true : hasChanged;
    }

    onPreRender() {
        for (let i = 0; i < this.numValueKeys; i++) {
            const key = this.valueKeys[i];
            const value = this.values[key];

            const valueForState = (value.unit) ? value.current + value.unit : value.current;

            // Add straight to state if no parent
            if (!value.parent) {
                const mappedKey = (this.onRender && this.onRender.stateMap) ? this.onRender.stateMap[key] : key;
                this.state[key] = valueForState;

            // Or add to parent
            } else {
                this.values[value.parent].children[key] = valueForState;
            }
        }
    }

    pause() {
        super.stop();
        return this;
    }

    resume() {
        super.start();
        return this;
    }

    /*
        # Get default Action value properties

        @return [object]
    */
    getDefaultValue() {
        return {
            current: 0,
            velocity: 0
        };
    }

    /*
        # Get default Action value property name
        ## Set this `value` property when set as value instead of object

        @return [string]
    */
    getDefaultValueProp() {
        return DEFAULT_PROP;
    }
};
