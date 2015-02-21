"use strict";

var defaultProp = require('./default-property.js'),
    splitterLookup = require('./splitter-lookup.js'),
    splitters = require('./splitters.js'),
    utils = require('../utils/utils.js'),
    
    valueProperties = ['to', 'start', 'current', 'min', 'max'],
    valuePropertyCount = valueProperties.length,
    
    /*
        Build a property
        
        @param [string || number || object]: The value as given by user
        @param [string]: Parent property key, ie 'backgroundColor'
        @param [string] (optional): Unit key, ie 'Red'
        @param [string]: If value is string or number, assign it to this property
        @param [object] (optional): Parent property
    */
    buildProperty = function (value, parentKey, unitKey, assignDefault, parent) {
        var property = defaultProp[parentKey + unitKey]
            || defaultProp[unitKey]
            || defaultProp[parentKey]
            || {};
            
        if (parent) {
            property = utils.merge(parent, property);
        }
        
        // If our value is an object
        if (utils.isObj(value)) {
            property = utils.merge(property, value);
        
        // Or assign to our default property
        } else {
            property[assignDefault] = value;
        }
        
        return property;
    },

    /*
        Split CSS and append Redshift values
        
        @param [object || string]: Set of values or straight value
        @param [string]: Key of CSS property
        @param [object]: Values property as built so far
    */
    splitAndAppendProperties = function (property, key, values, assignDefault) {
        var splitterID = splitterLookup[key],
            split = {},
            splitValue = {},
            valueKey = '',
            unitKey = '';
        
        // If we've got a splitter for this property
        if (splitterID) {
        
            // If property is an object, split all values
            if (utils.isObj(property)) {
                for (var i = 0; i < valuePropertyCount; i++) {
                    valueKey = valueProperties[i];

                    if (property[valueKey]) {
                        splitValue = splitters[splitterID](property[valueKey]);

                        for (unitKey in splitValue) {
                            split[unitKey] = split[unitKey] || {};
                            split[unitKey][valueKey] = splitValue[unitKey];
                        }
                    }
                }
            
            // Or just split value itself
            } else {
                split = splitters[splitterID](property);
            }
                
            for (unitKey in split) {
                values[key + unitKey] = buildProperty(split[unitKey], key, unitKey, assignDefault, property);
            }

        // Or this is a straight assignment
        } else {
            values[key] = buildProperty(property, key, null, assignDefault);
        }
        
        return values;
    };

module.exports = {
    
    /*
        Convert CSS properties to Redshift-compatible Values
        
        @param [object]: Collection of CSS properties
        @param [object]: Collection of valid Redshift value settings
    */
    cssToValues: function (css, assignDefault) {
        var values = {};
        
        assignDefault = assignDefault || 'current';
        
        for (var key in css) {
            if (css.hasOwnProperty(key)) {
                values = splitAndAppendProperties(css[key], key, values, assignDefault);
            }
        }
        
        return values;
    }
    
};