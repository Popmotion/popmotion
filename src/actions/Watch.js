let Action = require('./Action'),
    calc = require('../inc/calc'),

    STRING = 'string',
    
    /*
        Translate our mapLink value into mapTo
        
        @param [number]: Calculated value from linked value
        @param [Value || object]: Linked value or empty object if we're linking to input
        @param [array]: List of numbers relating to linked value
        @param [array]: List of numbers relating to this value
    */
    findMappedValue = function (newValue, linkedValue, toValue, mapLink, mapTo) {
        var mapLength = mapLink.length,
            i = 1,
            lastLinkValue,
            thisLinkValue,
            lastToValue,
            thisToValue;

        for (; i < mapLength; i++) {
            // Assign values from array, or if they're strings, look for them in linkedValue
            lastLinkValue = (typeof mapLink[i - 1] === STRING) ? linkedValue[mapLink[i - 1]] : mapLink[i - 1];
            thisLinkValue = (typeof mapLink[i] === STRING) ? linkedValue[mapLink[i]] : mapLink[i];
            lastToValue = (typeof mapTo[i - 1] === STRING) ? toValue[mapTo[i - 1]] : mapTo[i - 1];
            thisToValue = (typeof mapTo[i] === STRING) ? toValue[mapTo[i]] : mapTo[i];

            // Check if we've gone past our calculated value, or if we're at the end of the array
            if (newValue < thisLinkValue || i === mapLength - 1) {
                newValue = calc.value(calc.restricted(calc.progress(newValue, lastLinkValue, thisLinkValue), 0, 1), lastToValue, thisToValue);
                break;
            }
        }
        
        return newValue;
    };

class Watch extends Action {
    constructor(...args) {
        super(...args);
        this.isActive = true;
    }

    /*
        Process this value
        
        First check if this value exists as a Value, if not
        check within Input (if we have one)
            
        @param [Actor]
        @param [Value]: Current value
        @param [string]: Key of current value
        @return [number]: Calculated value
    */
    process(actor, value, key) {
        var values = actor.values,
            newValue = value.current,
            watchedKey = value.watch,
            watchedValue = values[watchedKey] ? values[watchedKey] : {},
            inputOffset = value.action ? value.action.inputOffset : false;

        // First look at Action and check value isn't linking itself
        if (watchedValue.current !== undefined && key !== watchedKey) {
            newValue = watchedValue.current;
        
        // Then check values in Input
        } else if (inputOffset && inputOffset.hasOwnProperty(watchedKey)) {
            newValue = value.action.process(actor, value, watchedKey);
        }

        // If we have mapFrom and mapTo properties, translate the new value
        if (value.mapFrom && value.mapTo) {
            value.unmapped = newValue;
            newValue = findMappedValue(newValue, watchedValue, value, value.mapFrom, value.mapTo);
        }

        return newValue;
    }
}

module.exports = Watch;