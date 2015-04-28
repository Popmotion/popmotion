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
    
    CURRENT = 'current',
    INPUT_OFFSET = 'inputOffset',
    LINK = 'link';

module.exports = {

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
        var newValue = value[CURRENT],
            mapLink = value.mapLink,
            mapTo = value.mapTo,
            mapLength = (mapLink !== undefined) ? mapLink.length : 0,
            newValue;

        // First look at values in Action
        if (values[value[LINK]]) {
            newValue = values[value[LINK]][CURRENT];

        // Then check values in Input
        } else if (action[INPUT_OFFSET] && action[INPUT_OFFSET].hasOwnProperty(value[LINK])) {
            newValue = value.origin + action[INPUT_OFFSET][value[LINK]];
        }
        
        // Loop through mapLink and mapTo to translate one to the other
        for (var i = 1; i < mapLength; i++) {
            if (newValue < mapLink[i] || i === mapLength - 1) {
                newValue = calc.value( calc.restricted( calc.progress(newValue, mapLink[i - 1], mapLink[i]), 0, 1), mapTo[i - 1], mapTo[i]);
                break;
            }
        }

        return newValue;
    },
        
    limit: function (output, value) {
        return calc.restricted(output, value.min, value.max);
    }
};
