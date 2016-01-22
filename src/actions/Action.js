import Process from '../process/Process';
import { each, isObj } from '../inc/utils';

const DEFAULT_PROP = 'current';

export default class Action extends Process {
    constructor(...args) {
        super(...args);

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

        // Merge `value` properties with existing
        if (values) {
            const currentValues = this.values;
            const defaultValue = this.getDefaultValue();
            const defaultValueProp = this.getDefaultValueProp();

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
