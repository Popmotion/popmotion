"use strict";

var templates = require('../css/templates.js'),

    
    /*
        Generate a precache
        
        Loops through Redshift output and maps parentUnit variables
        parent.unit objects
        
        @param [object]: Object of individual CSS output
        @param [object]: All Action values
        @return [object]: Precache
    */
    precache = function (props, values) {
        var precache = {},
            prop, value, parent, unit;

        for (var key in props) {
            prop = props[key];
            value = values[key].store,
            parent = value.parent,
            unit = value.unitName;
            
            // If this property needs to be recombined
            if (parent && unit) {
                precache[parent] = precache[parent] || {};
                precache[parent][unit] = props[key];
            
            // Or it we can assign directly
            } else {
                precache[key] = props[key];
            }
        }
        
        return precache;
    },
    
    /*
        Assign CSS
        
        @param [object]: Precache of CSS properties
        @param [object] (optional): Cache of previous CSS properties
        @return [object]: Generated object of valid CSS properties
    */
    assignCSS = function (precache, currentCache) {
        var latest = {},
            cache = {};
        
        // Loop through precache and generate rules
        for (var key in precache) {
            rule = generateRule(key, precache[key]);
            
            // Only add if changed
            if (currentCache && currentCache[key] !== rule) {
                latest[key] = rule;
            }
            
            cache[key] = rule;
        }
        
        // handle transform properties

        return {
            latest: latest,
            cache: cache
        };
    },
    
    generateRule = function (key, value) {
        var template = templates[key];
    };

module.exports = function (output, cache, values) {
    return assignCSS(precache(output, values), cache);
}