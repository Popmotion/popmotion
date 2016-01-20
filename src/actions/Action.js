import { Process } from 'framesync';
import { each, isObj } from '../inc/utils';

const DEFAULT_PROP = 'current';

export default class Action extends Process {
    /*
        # Action class constructor
        ## Assign default properties of Action or extended class and set user-defined props

        @param [object]
    */
    constructor(props) {
        super();

        // Load default props
        each(this.getDefaultProps(), (value, key) => this[key] = value);

        this.values = {};
        this.set(props, this.getDefaultValueProp());
    }

    /*
        # Set Action properties
        ## Set user-defined Action properties

        @param [object]
        @param [string]: Name of default value property (set when `value` is **not** provided as object)
        @return [Action]
    */
    set(props, defaultValueProp = DEFAULT_PROP) {
        const { values, ...propsToSet } = props;

        // Loop through non-`value` props and set
        each(propsToSet, (value, key) => {
            this[key] = value;
        });

        // Merge `value` properties with existing
        if (values) {
            const currentValues = this.values;
            const defaultValue = this.getDefaultValue();

            // Inherit values from props
            each(defaultValue, (value, key) => {
                if (propsToSet[key] !== undefined) {
                    defaultValue[key] = propsToSet[key];
                }
            });

            // Overwrite per-value props
            each(values, (value, key) => {
                const existingValue = currentValues[key];
                let newValue = { ...defaultValue };

                if (isObj(value)) {
                    newValue = { ...newValue, ...value };
                } else {
                    newValue[defaultValueProp] = value;
                }

                currentValues[key] = existingValue ? { ...existingValue, ...newValue } : newValue;
            });
        }

        return this;
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
        # Get default Action properties

        @return [object]
    */
    getDefaultProps() {
        return {};
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

    /*
        # Extend this Action with new properties
        ## Returns new instance of this Action's `prototype` with existing and new properties

        @param [object] (optional)
        @return [Action]
    */
    extend(props) {
        return new this.constructor({ ...this, props }, this.getDefaultValueProp());
    }
};
