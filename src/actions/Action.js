import Process from '../process/Process';
import { speedPerSecond } from '../inc/calc';
import { isNum, isObj, isString } from '../inc/utils';
import bindAdapter from '../inc/bind-adapter';
import colorType from '../value-types/color';
import complexType from '../value-types/complex';
import unitType from '../value-types/unit';

const DEFAULT_PROP = 'current';
const NUMERICAL_VALUES = [DEFAULT_PROP, 'from', 'to', 'prev', 'velocity'];
const NUM_NUMERICAL_VALUES = NUMERICAL_VALUES.length;

export default class Action extends Process {
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
        const { values, on, ...propsToSet } = props;
        const currentValues = this.values = this.values || {};
        const defaultValue = this.getDefaultValue();
        const inheritable = {};

        // 1) Set non-consumed properties
        super.set(propsToSet);

        // 2) Bind `on` to an adapter, if not already
        if (on) {
            // Ducktypish check for Adapter
            this.on = (!on.setter) ? bindAdapter(on) : on;
        }

        // 3) Prime an object to inherit from, with only `value` properties
        for (let key in defaultValue) {
            if (defaultValue.hasOwnProperty(key) && propsToSet.hasOwnProperty(key)) {
                inheritable[key] = propsToSet[key];
            }
        }

        // 4) Update existing values with inheritable properties
        for (let key in currentValues) {
            // Exclude variables to be set, as we'll deal with those seperately
            if (currentValues.hasOwnProperty(key) && (values && !values.hasOwnProperty(key))) {
                currentValues[key] = { ...currentValues[key], ...inheritable };
            }
        }

        // 5) Update
        if (values) {
            this.setValues(values, inheritable);   
        }

        return this;
    }

    setValues(values, inheritFrom) {
        const currentValues = this.values;
        const defaultValue = this.getDefaultValue();
        const defaultValueProp = this.getDefaultValueProp();

        // 2) Loop over every incoming `value` and set
        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                let value = {};
                let children = {};
                let hasChildren = false;
                let base = currentValues[key] ? currentValues[key] : defaultValue;

                // If values os an object, use it directly
                if (isObj(values[key])) {
                    value = values[key];

                // OR set to a the default value property of a blank object
                } else {
                    value[defaultValueProp] = values[key];
                }

                let newValue = { ...base, ...inheritFrom, ...value };

                /*
                    TODO: Get current value + set `from`
                    if (newValue.from !== undefined) {
                        newValue.current = newValue.from;

                    } else if (newValue.current === undefined && this.on) {
                        newValue.current = this.on.get(key) || 0;
                    }

                    if (newValue.from === undefined) {
                        newValue.from = newValue.current;
                    }
                */

                // If our Adapter has a `getValueType` function, try to get a `type` with the value key
                if (!newValue.type && this.on && this.on.getValueType) {
                    newValue.type = this.on.getValueType(key);
                }

                // TODO
                newValue.prev = newValue.current = newValue.from;

                // c) Loop through all numerical property types
                for (let i = 0; i < NUM_NUMERICAL_VALUES; i++) {
                    const propName = NUMERICAL_VALUES[i];
                    const valueProp = newValue[propName];

                    // If we have this kind of property, process
                    if (valueProp !== undefined) {
                        // If we don't have a type set to this value, find one (unless it's a raw number)
                        if (!newValue.type && isString(valueProp)) {
                            if (unitType.test(valueProp)) {
                                newValue.type = unitType;

                            } else if (colorType.test(valueProp)) {
                                newValue.type = colorType;

                            } else if (complexType.test(valueProp)) {
                                newValue.type = complexType;
                            }
                        }

                        if (newValue.type) {
                            // If we're going to split this value into child values
                            if (newValue.type.hasOwnProperty('split')) {
                                const splitProp = newValue.type.split(valueProp);

                                for (let splitKey in splitProp) {
                                    if (splitProp.hasOwnProperty(splitKey)) {
                                        const combinedKey = key + splitKey;

                                        if (!children[combinedKey]) {
                                            const defaultValue = (newValue.type.defaultProps && newValue.type.defaultProps[splitKey]) ? newValue.type.defaultProps[splitKey] : {};
                                            children[combinedKey] = {
                                                ...newValue,
                                                ...defaultValue,
                                                parent: key,
                                                childKey: splitKey,
                                                type: undefined
                                            };
                                        }

                                        children[combinedKey][propName] = splitProp[splitKey];
                                    }
                                }

                                // If this has a `template` function, generate
                                if (!newValue.template && newValue.type.template) {
                                    newValue.template = newValue.type.template(newValue[propName]);
                                }

                                hasChildren = true;

                            } else if (newValue.type.defaultProps) {
                                newValue = { ...newValue, ...newValue.type.defaultProps };
                            }

                            if (newValue.type.parse) {
                                newValue[propName] = newValue.type.parse(newValue[propName], newValue);
                            }
                        }
                    }
                } // End numerical property iteration

                // Set `prev` to `current` if it isn't already defined
                if (newValue.prev === undefined) {
                    newValue.prev = newValue.current;
                }

                currentValues[key] = newValue;

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
            }
        } // End value iteration

        // 3) Precompute value key and parent key length to prevent per-frame measurement
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
                const valueForState = (value.type && value.type.serialize) ? value.type.serialize(value.current, value) : value.current;

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
