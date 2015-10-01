let calc = require('../inc/calc'),
    utils = require('../inc/utils'),
    each = utils.each,
    Controls = require('../controls/Controls');

const DEFAULT_PROP = 'current';
const PRIVATE = ['onStart', 'onFrame', 'onUpdate', 'onComplete'];

class Action {
    constructor(props) {
        var action = this;

        utils.each(this.getDefaultProps(), function (key, value) {
            action[key] = value;
        });

        this.values = {};
        this.set(props, this.getDefaultValueProp());
    }

    set(props = {}, defaultProp = DEFAULT_PROP) {
        each(props, (key, prop) => {
            if (key !== 'values') {
                this[key] = prop;
            }
        });

        // Merge values
        if (props.values) {
            let currentValues = this.values,
                values = props.values;

            each(values, (key, value) => {
                let existingValue = currentValues[key],
                    newValue = {};
                
                if (utils.isObj(value)) {
                    newValue = value;
                } else {
                    newValue[defaultProp] = value;
                }

                currentValues[key] = existingValue ? utils.merge(existingValue, newValue) : newValue;
            });
        }

        return this;
    }

    process(actor, value) {
        return value.current;
    }

   /*
        Has Action ended?
        
        Returns true to end immedietly
        
        @return [boolean]: true
    */
    hasEnded() {
        return true;
    }
        
    limit(output, value) {
        var restricted = calc.restricted(output, value.min, value.max),
            escapeAmp = value.escapeAmp !== undefined ? value.escapeAmp : 0;
        return restricted + ((output - restricted) * escapeAmp);
    }

    getControls() {
        return Controls;
    }

    getDefaultProps() {
        return {};
    }

    getDefaultValue() {
        return {};
    }

    getDefaultValueProp() {
        return DEFAULT_PROP;
    }

    getSet() {
        var set = { values: this.values };

        each(this, (key, prop) => {
            if (this.hasOwnProperty(key) && PRIVATE.indexOf(key) === -1) {
                set[key] = prop;
            }
        });

        return set;
    }

    extend(props) {
        return new this.constructor(utils.merge(this, props), this.getDefaultValueProp());
    }

    getPlayable() {
        return this.extend();
    }

    activate() {
        this.isActive = true;
        return this;
    }

    deactivate() {
        this.isActive = false;
        return this;
    }
}

module.exports = Action;