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

var utils = require('./utils.js');

module.exports = function (newValue, currentValue, parent, scope) {
    var splitValueUnit = {};

    // Run function if this is a function
    if (utils.isFunc(newValue)) {
        newValue = newValue.call(scope, currentValue);
    }
    
    // Check if value is relative ie '+=10' - could have been returned from function
    if (utils.isRelativeValue(newValue)) {
        newValue = calc.relativeValue(currentValue, newValue);
    }
    
    // If value is still string it might have a unit property
    if (utils.isString(newValue)) {
        splitValueUnit = utils.splitValUnit(newValue);
        
        if (!isNaN(splitValueUnit)) {
            newValue = splitValueUnit.value;
            parent.unit = splitValueUnit.unit;
        }
    }
    console.log(newValue);
    return newValue;
};