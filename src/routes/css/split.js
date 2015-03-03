"use strict";

var defaultProperty = require('./default-property.js'),
    dictionary = require('./dictionary.js'),
    splitLookup = require('./lookup.js'),
    splitters = require('./splitters.js'),
    
    resolve = require('../../utils/resolve.js'),
    utils = require('../../utils/utils.js'),
    
    valueProperties = dictionary.valueProps,
    valuePropertyCount = valueProperties.length,
    
    /*
        Build a property
    */
    buildProperty = function (value, parentKey, unitKey, parent, assignDefault) {
        var property = defaultProperty[parentKey + unitKey]
            || defaultProperty[unitKey]
            || defaultProperty[parentKey]
            || {};
        
        assignDefault = assignDefault || valueProperties[0];
         
        if (parent) {
            property = utils.merge(parent, property);
        }
        
        if (utils.isObj(value)) {
            property = utils.merge(property, value);

        } else {
            property[assignDefault] = value;
        }

        property.name = parentKey + unitKey;
        
        return property;
    },

    /*
        Split value with provided splitterID
    */
    split = function (key, value, splitterID) {
        var splitValue = {},
            splitProperty = {},
            newValue = {},
            valueKey = '',
            unitKey = '',
            i = 0;
            
        if (utils.isObj(value)) {
            for (; i < valuePropertyCount; i++) {
                valueKey = valueProperties[i];
                
                if (value.hasOwnProperty(valueKey)) {
                    splitProperty = splitters[splitterID](value[valueKey]);
                    
                    for (unitKey in splitProperty) {
                        splitValue[unitKey] = splitValue[unitKey] || {};
                        splitValue[unitKey][valueKey] = splitProperty[unitKey];
                    }
                }
            }
        } else {
            splitValue = splitters[splitterID](value);
        }
        
        for (unitKey in splitValue) {
            newValue[key + unitKey] = buildProperty(splitValue[unitKey], key, unitKey, value);
        }
        
        return newValue;
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
        values[key] = buildProperty(value, key);
    }
    
    return values;
};