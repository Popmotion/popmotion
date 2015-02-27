"use strict";

var splitLookup = require('./split-lookup.js'),
    
    valueProperties = ['to', 'start', 'current', 'min', 'max'],
    valuePropertyCount = valueProperties.length,

    /*
        Split value with provided splitterID
    */
    split = function (key, value, splitterID) {
        var splitValue = {},
            splitProperty = {},
            valueKey = '',
            unitKey = '',
            i = 0;
        
        // If we're provided a value, split out all the values within too
        if (utils.isObj(value)) {
            for (; i < valuePropertyCount; i++) {
                valueKey = valueProperties[i];
                
                if (value[valueKey]) {
                    splitProperty = splitters[splitterID](resolve(value));
                    
                    for (unitKey in splitValue) {
                        splitValue[unitKey] = split[unitKey] || {};
                        splitValue[unitKey][valueKey] = splitProperty[unitKey];
                    }
                }
            }
        
        // Or split the value itself
        } else {
            splitValue = splitters[splitterID](resolve(value));
        }
        
        /** TODO fix this **/
        for (unitKey in splitValue) {
            values[key + unitKey] = buildProperty(split[unitKey], key, unitKey, assignDefault, property);
        }
        
        return splitValue;
    };

/*
    Split CSS property into individual, tweenable values
    
    @param [string]: Name of CSS property
    @param [string || number]: Value of CSS property
*/
module.exports = function (key, value) {
    var splitterID = splitLookup[key],
        values = (splitterID) ? split(key, value, splitterID) : {};
    
    // If we don't have a splitter, assign the property directly
    if (!splitterID) {
        values[key] = buildProperty();
    }
    
    return values;
};