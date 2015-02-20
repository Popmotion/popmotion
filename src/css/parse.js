"use strict";

var splitterLookup = require('./splitter-lookup.js'),
    splitters = require('./splitters.js'),

    /*
        Split CSS and append Redshift values
        
        @param [object || string]: Set of values or straight value
        @param [string]: Key of CSS property
        @param [object]: Values property as built so far
    */
    splitAndAppendProperties = function (property, key, values) {
        var splitterID = splitterLookup[key],
            split = {};
        
        // If this property has a specific parser
        if (splitterID) {
            split = splitters[splitterID](property);
            
            for (var unitKey in split) {
                values[key + unitKey] = split[unitKey];
            }

        // Else assign directly
        } else {
            values[key] = property;
        }
    
        return values;
    };

module.exports = {
    
    /*
        Convert CSS properties to Redshift-compatible Values
        
        @param [object]: Collection of CSS properties
        @param [object]: Collection of valid Redshift value settings
    */
    cssToValues: function (css) {
        var values = {};
        
        for (var key in css) {
            if (css.hasOwnProperty(key)) {
                values = splitAndAppendProperties(css[key], key, values);
            }
        }
        
        return values;
    }
    
};