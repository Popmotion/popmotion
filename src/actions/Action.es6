let utils = require('../inc/utils');

const DEFAULT_PROP = 'current';

class Action {
    constructor(props, defaultProp) {
        this.values = {};
        this.set(props, defaultProp);
    }

    set(props = {}, defaultProp = DEFAULT_PROP) {
        // Add properties
        for (let key in props) {
            if (props.hasOwnProperty(key) && key !== 'values') {
                this[key] = props[key];
            }
        }

        // Merge values
        if (props.values) {
            let currentValues = this.values,
                values = props.values;

            for (let key in values) {
                let existingValue = currentValues[key] || this.getDefaultValue(),
                    value = values[key],
                    newValue = {};

                if (utils.isObj(value)) {
                    newValue = value;
                } else {
                    newValue[defaultProp] = value;
                }

                currentValues[key] = existingValue ? utils.merge(existingValue, newValue) : newValue;
            }
        }

        return this;
    }

    getDefaultValue() {
        return false;
    }

    getDefaultValueProp() {
        return DEFAULT_PROP;
    }

    extend(props) {
        return new this.constructor(props, this.getDefaultValueProp());
    }
}

module.exports = Action;