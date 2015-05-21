/*
    Link the calculations of on Value into the output of another.
    
    Activate by setting the link property of one value with the name
    of either an Input property or another Value.
    
    Map the linked value with mapLink and provide a corressponding mapTo
    array to translate values from one into the other. For instance:
    
    {
        link: 'x',
        mapLink: [0, 100, 200],
        mapTo: [-100, 0, -100]
    }
    
    An output value of 50 from 'x' will translate to -50 for this Value
*/
"use strict";

var calc = require('../utils/calc.js'),

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

module.exports = {

    surpressMethod: true,

    /*
        Process this value
        
        First check if this value exists as a Value, if not
        check within Input (if we have one)
            
        @param [string]: Key of current value
        @param [Value]: Current value
        @param [object]: Collection of all Action values
        @param [object]: Action properties
        @param [Action]: Current Action
        @return [number]: Calculated value
    */
    process: function (key, value, values, props, action) {
        var newValue = value.current,
            linkKey = value.link,
            linkedValue = values[linkKey] ? values[linkKey] : {},
            inputOffset = action.inputOffset;
            
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
    },
        
    limit: function (output, value) {
        return calc.restricted(output, value.min, value.max);
    }
};
