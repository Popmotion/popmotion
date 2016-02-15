import Process from '../process/Process';
import { speedPerSecond } from '../inc/calc';
import { isNum, isObj, isString, splitValueUnit } from '../inc/utils';
import bindAdapter from '../inc/bind-adapter';
import colorType from '../value-types/color';
import complexType from '../value-types/complex';

const DEFAULT_PROP = 'current';
const NUMERICAL_VALUES = [DEFAULT_PROP, 'from', 'to', 'min', 'max'];
const NUM_NUMERICAL_VALUES = NUMERICAL_VALUES.length;

export default class Action extends Process {
    constructor(props) {
        props.state = {};
        super(props);
    }

    /*
        # Set Action properties
        ## Set user-defined Action properties

        @param [object]
        @return [Action]
    */
    set(props = {}) {
        const { values, on, ...propsToSet } = props;

        super.set(propsToSet);

        if (on) {
            // Ducktypish check for Adapter
            this.on = (!on.setter) ? bindAdapter(on) : on;
        }

        this.values = this.values || {};
        this.valueKeys = this.valueKeys || [];
        this.parentKeys = this.parentKeys || [];

        // Merge new `value` properties with existing
        const currentValues = this.values;
        const defaultValue = this.getDefaultValue();
        const defaultValueProp = this.getDefaultValueProp();

        // Inherit value properties from `props`
        for (let key in defaultValue) {
            if (defaultValue.hasOwnProperty(key) && propsToSet.hasOwnProperty(key)) {
                if (propsToSet[key] !== undefined) {
                    defaultValue[key] = propsToSet[key];
                }
            }
        }

        // Check all values and split into child values as neccessary
        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                const value = values[key];
                const existingValue = currentValues[key];
                let valueType;
                let newValue = {};

                // Convert new value into object if it isn't already
                if (isObj(value)) {
                    newValue = value;
                } else {
                    newValue[defaultValueProp] = value;
                }

                // If value already exists, check for and use existing type
                if (existingValue) {
                    newValue = { ...existingValue, ...newValue };
                    valueType = (this.on && this.on.getValueType) ? this.on.getValueType(key) : existingValue.type;

                // If this is a new value, check for type
                } else {
                    if (newValue.from !== undefined) {
                        newValue.current = newValue.from;

                    } else if (newValue.current === undefined && this.on) {
                        newValue.current = this.on.get(key) || 0;
                    }

                    if (newValue.from === undefined) {
                        newValue.from = newValue.current;
                    }

                    newValue = { ...defaultValue, ...newValue };

                    newValue.prev = newValue.current;

                    // If one is explicitly assigned, use that
                    if (value.type) {
                        valueType = value.type;

                    // Or if our Adapter has a typeMap, use that
                    } else if (this.on && this.on.getValueType) {
                        valueType = this.on.getValueType(key);

                    } else if (isString(newValue.current)) {
                        // Test if this is a color value
                        if (colorType.test(newValue.current)) {
                            valueType = colorType;
                        } else if (complexType.test(newValue.current)) {
                            valueType = complexType;
                        }
                    }
                }

                // If we've got a valueType then preprocess the value accordingly
                if (valueType) {
                    newValue.type = valueType;

                    // If this value should be split, split
                    if (valueType.split) {
                        const childValues = {};

                        // Loop over numerical values and split any present
                        for (let i = 0; i < NUM_NUMERICAL_VALUES; i++) {
                            const propName = NUMERICAL_VALUES[i];

                            if (newValue.hasOwnProperty(propName)) {
                                const splitValues = valueType.split(newValue[propName]);

                                for (let splitKey in splitValues) {
                                    if (splitValues.hasOwnProperty(splitKey)) {
                                        const splitValue = splitValues[splitKey];
                                        // Create new child value if doesn't exist
                                        if (!childValues[splitKey]) {
                                            childValues[splitKey] = { ...newValue, parent: key, childKey: splitKey };

                                            if (valueType.defaultProps) {
                                                childValues[splitKey] = (valueType.defaultProps[splitKey]) ?
                                                    { ...childValues[splitKey], ...valueType.defaultProps[splitKey] } :
                                                    { ...childValues[splitKey], ...valueType.defaultProps };
                                            }
                                        }

                                        const valueSplitFromUnit = splitValueUnit(splitValue);
                                        childValues[splitKey][propName] = valueSplitFromUnit.value;
                                        childValues[splitKey].unit = valueSplitFromUnit.unit;
                                    }
                                }
                            }
                        }

                        newValue.children = {};

                        // Now loop through all child values and add them as normal values
                        for (let childKey in childValues) {
                            if (childValues.hasOwnProperty(childKey)) {
                                const childValue = childValues[childKey];
                                const combinedKey = key + childKey;

                                newValue.children[childKey] = childValue.current;
                                currentValues[combinedKey] = childValue;

                                if (this.valueKeys.indexOf(combinedKey) === -1) {
                                    this.valueKeys.push(combinedKey);
                                }
                            }
                        }

                        // Save a template for recombination if present
                        if (valueType.template) {
                            newValue.template = newValue.template || valueType.template(newValue.current);
                        }

                    // Or we just have default value props, load those   
                    } else if (valueType.defaultProps) {
                        newValue = { ...valueType.defaultProps, ...newValue };

                        for (let i = 0; i < NUM_NUMERICAL_VALUES; i++) {
                            const propName = NUMERICAL_VALUES[i];

                            if (isString(newValue[propName])) {
                                const splitUnit = splitValueUnit(newValue[propName]);
                                newValue[propName] = splitUnit.value;
                                newValue.unit = splitUnit.unit;
                            }
                        }
                    }
                }

                // Update appropriate lists with value key
                if (newValue.children) {
                    if (this.parentKeys.indexOf(key) === -1) {
                        this.parentKeys.push(key);
                    }
                } else {
                    if (this.valueKeys.indexOf(key) === -1) {
                        this.valueKeys.push(key);
                    }
                }

                currentValues[key] = newValue;
            }
        }

        // Precompute value key and parent key length to prevent per-frame measurement
        this.numValueKeys = this.valueKeys.length;
        this.numParentKeys = this.parentKeys.length;

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

            // Update velocity
            if (!this.calculatesVelocity) {
                value.velocity = speedPerSecond(value.current - value.prev, elapsed);
            }

            // If this value has changed
            if (value.prev !== value.current) {
                hasChanged = true;
                value.prev = value.current;

                // Append unit
                const valueForState = (value.unit) ? value.current + value.unit : value.current;

                // Add to state if this is not a child vaue
                if (!value.parent) {
                    this.state[key] = valueForState;
                } else {
                    this.values[value.parent].children[value.childKey] = valueForState;
                }
            }
        }

        return (this.onCleanup) ? true : hasChanged;
    }

    /*
        If we are rendering, recombine parent values first
    */
    onPreRender() {
        // Update parent values
        for (let i = 0; i < this.numParentKeys; i++) {
            const key = this.parentKeys[i];
            const value = this.values[key];

            value.current = value.type.combine(value.children, value.template);

            if (this.state[key] !== value.current) {
                this.state[key] = value.current;
            }
        }
    }

    onRender({ state, on }) {
        if (on && on.set) {
            on.set(state);
        }

        if (this.onFrame) {
            this.onFrame(this);
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

    start() {
        const values = this.values;
        super.start();

        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                values[key].prev = values[key].origin = values[key].current;
            }
        }
    }

    /*
        # Get default Action value properties

        @return [object]
    */
    getDefaultValue() {
        return {
            current: 0,
            velocity: 0,
            round: false
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
}
