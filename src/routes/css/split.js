"use strict";

var defaultProperty = require('./default-property.js'),
    dictionary = require('./dictionary.js'),
    splitLookup = require('./lookup.js'),
    splitters = require('./splitters.js'),
    
    utils = require('../../utils/utils.js'),
    
    valueProperties = dictionary.valueProps,
    valuePropertyCount = valueProperties.length,
    
    resolve = function (value, scope) {
	    if (typeof value === 'function') {
		    value = value.call(scope);
	    }
	    
	    return value;
    },
    
    /*
        Build a property
    */
    buildProperty = function (value, parentKey, unitKey, parent, assignDefault) {
        var property = defaultProperty[parentKey + unitKey]
            || defaultProperty[unitKey]
            || defaultProperty[parentKey]
            || defaultProperty.base;
        
        assignDefault = assignDefault || valueProperties[0];
         
        if (parent) {
            property = utils.merge(parent, property);
        }
        
        if (utils.isObj(value)) {
            property = utils.merge(property, value);

        } else {
            property[assignDefault] = value;
        }

        // If we have a unitKey, name property parentKey + unitKey
        property.name = unitKey ? parentKey + unitKey : parentKey;
        
        return property;
    },

    /*
        Split value with provided splitterID
    */
    split = function (key, value, splitter, action) {
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
                    splitProperty = splitter(resolve(value[valueKey], action));
                    
                    for (unitKey in splitProperty) {
                        splitValue[unitKey] = splitValue[unitKey] || {};
                        splitValue[unitKey][valueKey] = splitProperty[unitKey];
                    }
                }
            }
        } else {
	        splitValue = splitter(resolve(value, action));
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
module.exports = function (key, value, action) {
    var splitterID = splitLookup[key],
        splitter = splitters[splitterID],
        values;
        
    values = (splitter) ? split(key, value, splitter, action) : {};

    // If we don't have a splitter, assign the property directly
    if (!splitter) {
        values[key] = buildProperty(value, key);
    }
    
    return values;
};