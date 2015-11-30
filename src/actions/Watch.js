let Action = require('./Action'),
    calc = require('../inc/calc'),
    isString = require('../inc/utils').isString,

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
            lastLinkValue = isString(mapLink[i - 1]) ? linkedValue[mapLink[i - 1]] : mapLink[i - 1];
            thisLinkValue = isString(mapLink[i]) ? linkedValue[mapLink[i]] : mapLink[i];
            lastToValue = isString(mapTo[i - 1]) ? toValue[mapTo[i - 1]] : mapTo[i - 1];
            thisToValue = isString(mapTo[i]) ? toValue[mapTo[i]] : mapTo[i];

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
        const watchedKey = value.watch;
        let watchedValue = 0;
        let values = actor.values;
        let newValue = value.current;
        let inputOffset = value.action ? value.action.inputOffset : false;

        if (isString(watchedKey)) {
            watchedValue = values[watchedKey] ? values[watchedKey] : {};

            // First look at Action and check value isn't linking itself
            if (watchedValue.current !== undefined && key !== watchedKey) {
                newValue = watchedValue.current;
            
            // Then check values in Input
            } else if (inputOffset && inputOffset.hasOwnProperty(watchedKey)) {
                newValue = value.action.process(actor, value, watchedKey);
            }

        } else {
            newValue = watchedKey(actor);
        }

        // If we have mapFrom and mapTo properties, translate the new value
        if (value.mapFrom && value.mapTo) {
            newValue = findMappedValue(newValue, watchedValue, value, value.mapFrom, value.mapTo);
        }

        return newValue;
    }
}

module.exports = Watch;