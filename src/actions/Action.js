import Task from '../task/Task';
import { speedPerSecond } from '../inc/calc';
import { isNum, isObj, isString } from '../inc/utils';
import detectValueType from '../value-types/detect';
import NUMERICAL_VALUES from '../inc/numerical-values';

const NUM_NUMERICAL_VALUES = NUMERICAL_VALUES.length;

class Action extends Task {
    constructor(props) {
        props.state = {};
        props.valueKeys = [];
        props.parentKeys = [];
        super(props);
    }

    /*
        # Set Action properties
        ## Set user-defined Action properties

        @param [object]
        @return [Action]
    */
    set(props = {}) {
        this.values = this.values || {};

        const { values, ...propsToSet } = props;
        const inheritable = {};

        // Set non-consumed properties
        super.set(propsToSet);

        // Prime an object to inherit from, with only `value` properties
        for (let key in this.defaultValue) {
            if (this.defaultValue.hasOwnProperty(key) && propsToSet.hasOwnProperty(key)) {
                inheritable[key] = propsToSet[key];
            }
        }

        // Update existing values with inheritable properties
        for (let key in this.values) {
            if (this.values.hasOwnProperty(key)) {
                this.values[key] = { ...this.values[key], ...inheritable };
            }
        }

        // Update
        if (values) {
            this.setValues(values, inheritable);

            // Precompute number of value key and parent keys to avoid per-frame measurement
            this.numValueKeys = this.valueKeys.length;
            this.numParentKeys = this.parentKeys.length;
        }

        return this;
    }

    get(key) {
        return this.state[key];
    }

    setValues(values, inherit) {
        // Iterate over all incoming values and set
        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                let hasChildren = false;
                const children = {};
                // Merge into existing value or create new
                let newValue = this.values[key] ? { ...this.values[key] } : { ...this.defaultValue, ...inherit };

                // If values is not an object, assign value to default prop
                if (!isObj(values[key])) {
                    newValue[this.defaultValueProp] = values[key];
                } else {
                    newValue = { ...newValue, ...values[key] };
                }

                // If we've got an adapter, get the current value
                if (values[key].current === undefined && this.adapter && this.adapter.get) {
                    newValue.current = this.adapter.get(key);
                }

                // If we don't have a value type and we do have an Adapter, check for type with value key
                if (!newValue.type && this.adapter && this.adapter.getValueType) {
                    newValue.type = this.adapter.getValueType(key);
                }

                // If we still don't have a value type and this is the first time we've set this value, check numerical values for strings and test
                if (!newValue.type && !this.values[key]) {
                    newValue.type = detectValueType(newValue);
                }

                // If we have a value type, handle. This is my least favourite part of Popmotion, so... enjoy.
                if (newValue.type) {
                    for (let i = 0; i < NUM_NUMERICAL_VALUES; i++) {
                        const propName = NUMERICAL_VALUES[i];
                        const valueProp = newValue[propName];

                        // If this prop is a string and we have a splitter, split
                        if (newValue.type.hasOwnProperty('split')) {
                            const splitProp = isString(valueProp) ? newValue.type.split(valueProp) : {};

                            for (let splitKey in splitProp) {
                                if (splitProp.hasOwnProperty(splitKey)) {
                                    const combinedKey = key + splitKey;

                                    // If we don't have a child value for this key, make one
                                    if (!children[combinedKey]) {
                                        const defaultValue = (newValue.type.defaultProps && newValue.type.defaultProps[splitKey]) ? newValue.type.defaultProps[splitKey] : newValue.type.defaultProps || {};

                                        children[combinedKey] = {
                                            ...newValue,
                                            ...defaultValue,
                                            parent: key,
                                            childKey: splitKey
                                        };

                                        delete children[combinedKey].type;
                                    }

                                    hasChildren = true;
                                    children[combinedKey][propName] = parseFloat(splitProp[splitKey]);
                                }
                            }

                            // If we have a template function, generate
                            if (!newValue.template && newValue.type.template && isString(valueProp)) {
                                newValue.template = newValue.type.template(valueProp);
                            }
                        } else if (newValue.type.defaultProps) {
                            newValue = { ...newValue, ...newValue.type.defaultProps };
                        }

                        if (valueProp !== undefined && newValue.type.parse) {
                            newValue[propName] = newValue.type.parse(valueProp, newValue);
                        }
                    }
                } // End value type nonsense

                // Set `prev` to `current` for first frame after set
                newValue.prev = newValue.current;
                
                // If this value doesn't have children, add to valueKeys
                if (!hasChildren) {
                    if (this.valueKeys.indexOf(key) === -1) {
                        this.valueKeys.push(key);
                    }

                // Or add to parentKeys
                } else {
                    newValue.children = newValue.children || {};

                    if (this.parentKeys.indexOf(key) === -1) {
                        this.parentKeys.push(key);
                    }

                    this.setValues(children);
                }

                this.values[key] = newValue;
            }
        }
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

        // Check if base values have updated 
        for (let i = 0; i < this.numValueKeys; i++) {
            const key = this.valueKeys[i];
            const value = this.values[key];

            // Run transform function (if present)
            if (value.transform) {
                value.current = value.transform(value.current, key, this);
            }

            // Cap minimum
            if (isNum(value.min)) {
                value.current = Math.max(value.current, value.min);
            }

            // Cap maximum
            if (isNum(value.max)) {
                value.current = Math.min(value.current, value.max);
            }

            // Round number
            if (value.round) {
                value.current = Math.round(value.current);
            }

            value.frameChange = value.current - value.prev;

            // Update velocity
            if (!this.calculatesVelocity) {
                value.velocity = speedPerSecond(value.frameChange, elapsed);
            }

            // If this value has changed
            if (value.prev !== value.current) {
                hasChanged = true;
                value.prev = value.current;
            }

            // Append unit
            const valueForState = (value.type && value.type.serialize) ? value.type.serialize(value.current, value) : value.current;

            // Add to state if this is not a child vaue
            if (!value.parent) {
                this.state[key] = valueForState;
            } else {
                this.values[value.parent].children[value.childKey] = valueForState;
            }
        }

        // Update parent values
        for (let i = 0; i < this.numParentKeys; i++) {
            const key = this.parentKeys[i];
            const value = this.values[key];

            value.current = value.type.combine(value.children, value.template);

            this.state[key] = value.current;
        }

        if (this.onFrame) {
            this.onFrame(this.state, this);
        }

        return (this.onCleanup) ? true : hasChanged;
    }

    inherit(props = {}) {
        const { values, ...propsToSet } = props;
        const newAction = super.inherit(propsToSet);

        if (values) {
            newAction.set({ values });
        }

        return newAction;
    }

    pause() {
        super.stop();
        return this;
    }

    resume() {
        super.start();
        return this;
    }

    toggle() {
        return this.isActive ? this.pause() : this.resume();
    }

    start() {
        const values = this.values;
        super.start();

        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                values[key].prev = values[key].origin = values[key].current;
            }
        }

        return this;
    }

    static extendDefaultValue(props) {
        return { ...this.prototype.defaultValue, ...props };
    }

    static extendDefaultProps(props) {
        return { ...this.prototype.defaultProps, ...props };
    }
}

Action.prototype.defaultValueProp = 'current';
Action.prototype.defaultValue = {
    current: 0,
    velocity: 0,
    round: false,
    min: undefined,
    max: undefined,
    transform: undefined
};

export default Action;
