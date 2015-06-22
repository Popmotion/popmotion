/*
    Track user input
*/
"use strict";

var calc = require('../utils/calc.js'),

    CURRENT = 'current',
    INPUT_OFFSET = 'inputOffset';

module.exports = {
    
    /*
        Update Input
        
        @param [Action]
        @param [object]: Action properties
    */
    updateInput: function (action) {
        action[INPUT_OFFSET] = calc.offset(action.inputOrigin, action.input[CURRENT]);
    },
        
    /*
        Move Value relative to Input movement
        
        @param [string]: Key of current value
        @param [Value]: Current value
        @param [object]: Collection of all Action values
        @param [object]: Action properties
        @param [Action]: Current Action
        @return [number]: Calculated value
    */
    process: function (key, value, values, action) {
        return (action[INPUT_OFFSET].hasOwnProperty(key)) ? value.origin + action[INPUT_OFFSET][key] : value[CURRENT];
    },
    
    /*
        Has this Action ended? 
        
        @return [boolean]: False to make user manually finish .track()
    */
    hasEnded: function () {
        return false;
    }
};