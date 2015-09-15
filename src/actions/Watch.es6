let Action = require('./Action.es6'),
    calc = require('../inc/calc');

class Watch extends Action {
    /*
        Process this value
        
        First check if this value exists as a Value, if not
        check within Input (if we have one)
            
        @param [Value]: Current value
        @param [string]: Key of current value
        @return [number]: Calculated value
    */
    process(value, key) {
        var values = this.values,
            newValue = value.current,
            linkKey = value.link,
            linkedValue = values[linkKey] ? values[linkKey] : {},
            inputOffset = this.inputOffset;

        // Then check values in Input
        if (inputOffset && inputOffset.hasOwnProperty(linkKey)) {
            newValue = value.origin + (inputOffset[linkKey] * value.amp);
            
        // First look at Action and check value isn't linking itself
        } else if (linkedValue.current !== undefined && key !== linkKey) {
            newValue = linkedValue.current;
        }

        // If we have mapLink and mapTo properties, translate the new value
        if (value.mapLink && value.mapTo) {
            newValue = findMappedValue(newValue, linkedValue, value, value.mapLink, value.mapTo);
        }

        return newValue;
    }
}

module.exports = Watch;