import Process from '../process/Process';
import { smooth, speedPerSecond } from '../inc/calc';
import { each, isObj } from '../inc/utils';

const DEFAULT_PROP = 'current';
const NUMERICAL_VALUES = [DEFAULT_PROP, 'from', 'to', 'min', 'max'];

/*
    Map key given given stateMap

    @param [string]
    @param [Renderer]
    @return [string]
*/
const mapKey = (key, renderer) => (renderer && renderer.stateMap) ? renderer.stateMap[key] || key : key;

export default class Action extends Process {
    constructor(props) {
        props.state = {};
        super(props);

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

        this.values = this.values || {};
        this.valueKeys = this.valueKeys || [];
        this.parentKeys = this.parentKeys || [];

        // Merge new `value` properties with existing
        const currentValues = this.values;
        const defaultValue = this.getDefaultValue();
        const defaultValueProp = this.getDefaultValueProp();
        const renderer = this.onRender;
        let valueTypeMap = (renderer && renderer.valueTypeMap) ? renderer.valueTypeMap : false;

        // Inherit value properties from `props`
        each(defaultValue, (value, key) => {
            if (propsToSet[key] !== undefined) {
                defaultValue[key] = propsToSet[key];
            }
        });

        // Check all values and split into child values as neccessary
        each(values, (value, key) => {
            const existingValue = currentValues[key];
            let valueType = {};
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
                valueType = existingValue.type;

            // If this is a new value, check for type
            } else {
                newValue = { ...defaultValue, ...newValue };
                // If one is explicitly assigned, use that
                if (value.type) {
                    valueType = value.type;

                // Or if our renderer has a typeMap, use that
                } else if (valueTypeMap) {
                    valueType = valueTypeMap[mapKey(key, renderer)];
                }

                // Maybe run `test` on color here
            }

            // If we've got a valueType then preprocess the value accordingly
            if (valueType) {
                // If this value should be split, split
                if (valueType.split) {
                    const childValues = {};

                    // Loop over numerical values and split any present
                    NUMERICAL_VALUES.forEach((propName) => {
                        if (newValue.hasOwnProperty(propName)) {
                            const splitValues = valueType.split(newValue[propName]);

                            each(splitValues, (splitValue, splitKey) => {
                                // Create new child value if doesn't exist
                                if (!childValues[splitKey]) {
                                    childValues[splitKey] = {};

                                    if (valueType.defaultProps) {
                                        childValues[splitKey] = (valueType.defaultProps[splitKey]) ? { ...valueType.defaultProps[splitKey] } : { ...valueType.defaultProps };
                                    }
                                }

                                childValues[splitKey][propName] = splitValue;
                            });
                        }
                    });

                    newValue.children = [];

                    // Now loop through all child values and add them as normal values
                    each(childValues, (childValue, childKey) => {
                        const combinedKey = key + childKey;

                        newValue.children.push(combinedKey);
                        currentValues[combinedKey] = childValue;

                        if (this.valueKeys.indexOf(combinedKey) === -1) {
                            this.valueKeys.push(combinedKey);
                        }
                    });

                // Or we just have default value props, load those   
                } else if (valueType.defaultProps) {
                    newValue = { ...valueType.defaultProps, ...newValue };
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
        });

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
                this.state[mapKey(key, this.onRender)] = valueForState;

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
}
