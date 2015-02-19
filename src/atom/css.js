"use strict";

var units = require('../css/units.js'),
    unitLookup = require('../css/unit-lookup.js');

module.exports = {
    
    /*
        Test for a property and split it into Redshift-readable properties
        
        @param [string]: Name of property
        @param [string || number]: Property value
    */
    splitProperty: function (key, value) {
        var unit,
            lookup = unitLookup[key],
            lookupLength,
            split = {};

        // If we've got parsers for this property
        if (lookup) {
            
            lookupLength = lookup.length;
            
            for (var i = 0; i < lookupLength; i++) {
                unit = units[lookup[i]];
                
                if (unit.test(value)) {
                    split = unit.split(value);
                    break;
                }
            }
        
        // If no available lookup, assign directly
        } else {
            split[key] = value;
        }
        
        return split;
    },
    
    /*
        Convert CSS properties to Redshift-compatible Values
        
        @param [object]: Object of CSS values
    */
    cssToValues: function (css) {
        var values = {},
            split = {};

        for (var key in css) {
            if (css.hasOwnProperty(key)) {
                split = this.splitProperty(key, css[key]);
                
                for (var splitKey in split) {
                    values[key + splitKey] = split[splitKey];
                }
            }
        }
        
        return values;
    }
    
};