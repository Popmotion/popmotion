/*
    Property resolver
    -------------------------------------
    
    Checks if a property being set is
        a) a function
        b) a relative value
        c) a value as a unit
    and returns the resolved value
        
    @param [number || string || function]: New property value
    @param [number || string] (optional): Current property value
    @param [object] (optional): Parent property
    @param [object] (optional): Scope to resolve first argument if provided
    @returns [number || string]: Resolved value
*/
"use strict";

var calc = require('./calc.js'),
    utils = require('./utils.js');

module.exports = function (newValue, currentValue, parent, scope) {
    var splitValueUnit = {};
    
    currentValue = currentValue || 0;

    // Run function if this is a function
    if (typeof newValue == 'function') {
        newValue = newValue.call(scope, currentValue);
    }
    
    // Check if value is relative ie '+=10' - could have been returned from function
    if (newValue.indexOf && newValue.indexOf('=') > 0) {
        newValue = calc.relativeValue(currentValue, newValue);
    }
    
    // If value is still string it might have a unit property
    if (typeof newValue === 'string') {
        splitValueUnit = utils.splitValUnit(newValue);
        
        if (!isNaN(splitValueUnit)) {
            newValue = parseFloat(splitValueUnit.value);
            parent.unit = splitValueUnit.unit;
        }
    }

    return newValue;
};