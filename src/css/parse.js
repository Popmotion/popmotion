"use strict";

var defaultProp = require('./default-property.js'),
    splitterLookup = require('./splitter-lookup.js'),
    splitters = require('./splitters.js'),
    utils = require('../utils/utils.js'),
    
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
            split = {};
        
        // If we've got a splitter for this property
        if (splitterID) {
            
            split = splitters[splitterID](property);
            console.log(split);
            for (var unitKey in split) {
                values[key + unitKey] = buildProperty(split[unitKey], key, unitKey, assignDefault, property);
            }
        
        // Or this is a straight assignment
        } else {
            values[key] = buildProperty(property, key, null, assignDefault);
        }
        
        return values;
        
        
        /*
        var splitterID = splitterLookup[key],
            split = {};
        
        // If this property has a specific parser
        if (splitterID) {
            split = splitters[splitterID](property);
            
            for (var unitKey in split) {
                values[key + unitKey] = parseProperty(split[unitKey], key, unitKey, assignDefault, property);
            }

        // Else assign directly
        } else {
            values[key] = parseProperty(property, key, null, assignDefault);
        }
    
        return values;
        
        */
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