// Imports
const calc = require('../inc/calc');
const utils = require('../inc/utils');
const Controls = require('../controls/Controls');
const each = utils.each;

// Values
const DEFAULT_PROP = 'current';
const PRIVATE = ['onStart', 'onFrame', 'onUpdate', 'onComplete'];

class Action {

    /*
        # Action class constructor
        ## Assign default properties of Action or extended class and set user-defined props

        @param [object]
    */
    constructor(props) {
        each(this.getDefaultProps(), (key, value) => {
            this[key] = value;
        });

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
    set(props = {}, defaultProp = DEFAULT_PROP) {
        // Loop through non-`value` properties and set
        each(props, (key, value) => {
            if (key !== 'values') {
                this[key] = value;
            }
        });

        // Merge `value` properties with existing
        if (props.values) {
            let currentValues = this.values;

            each(props.values, (key, value) => {
                const existingValue = currentValues[key];
                let newValue = {};
                
                if (utils.isObj(value)) {
                    newValue = value;
                } else {
                    newValue[defaultProp] = value;
                }

                currentValues[key] = (existingValue) ? utils.merge(existingValue, newValue) : newValue;
            });
        }

        return this;
    }

    /*
        # Process latest `current` value
        ## Actions performs existing `current` value

        @param [Actor]
        @param [object]
        @return [number]
    */
    process(actor, value) {
        return value.current;
    }

    /*
        # Has Action ended?
        ## Returns `true` to end Action (Action only fires once).
        
        @return [boolean]
    */
    hasEnded() {
        return true;
    }

    /*
        # Limit value to within set parameters
        ## Return value within min/max, with outlying values multiplied by `escapeAmp`

        @param [number]
        @param [object] { min: number, max: number, escapeAmp: factor }
        @return [number]
    */
    limit(output, value) {
        const restricted = calc.restricted(output, value.min, value.max);
        const escapeAmp = value.escapeAmp !== undefined ? value.escapeAmp : 0;

        return restricted + ((output - restricted) * escapeAmp);
    }

    /*
        # Get Controls class for this Action
        ## Inherited Actions may return different Controls class

        @return [Controls]
    */
    getControls() {
        return Controls;
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
        return {};
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
        # Get set properties
        ## Get user-set properties for this Action

        @return [object]
    */
    getSet() {
        let set = { values: this.values };

        each(this, (key, prop) => {
            if (this.hasOwnProperty(key) && PRIVATE.indexOf(key) === -1) {
                set[key] = prop;
            }
        });

        return set;
    }

    /*
        # Extend this Action with new properties
        ## Returns new instance of this Action's `prototype` with existing and new properties

        @param [object] (optional)
        @return [Action]
    */
    extend(props) {
        console.log(this, props)
        return new this.constructor(utils.merge(this, props), this.getDefaultValueProp());
    }

    /*
        # Get a new playable version of this Action

        @return [Action]
    */
    getPlayable() {
        return this.extend();
    }

    /*
        # Activate this Action

        @return [Action]
    */
    activate() {
        this.isActive = true;
        return this;
    }

    /*
        # Deactivate this Action

        @return [Action]
    */
    deactivate() {
        this.isActive = false;
        return this;
    }
}

module.exports = Action;