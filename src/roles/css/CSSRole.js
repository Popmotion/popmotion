"use strict";

var Output = require('../Output'),
    build = require('./build'),

    prefixes = ['Webkit','Moz','O','ms', ''],
    numPrefixes = prefixes.length,
    propertyNameCache = {},
                    
    /*
        Test style property for prefixed version
        
        @param [string]: Style property
        @return [string]: Cached property name
    */
    testPrefix = function (key) {
        var testElement = document.body;
        
        propertyNameCache[key] = false;

        for (var i = 0; i < numPrefixes; i++) {
            var prefix = prefixes[i],
                prefixed = (prefix === '') ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);

            if (testElement.style.hasOwnProperty(prefixed)) {
                propertyNameCache[key] = prefixed;
            }
        }
        
        return propertyNameCache[key];
    };

/*
    CSS Role definition
*/
module.exports = new Output({
    map: require('./map'),

    typeMap: require('./type-map'),

    onUpdate: function (element, output) {
        var set = this.set;

        each(build(output), function (key, value) {
            set(element, key, value);
        });
    },

    get: function (element, name) {
        var key = propertyNameCache[name] || testPrefix(name);

        if (key) {
            return window.getComputedStyle(element, null)[key];
        }
    },

    set: function (element, name, rule) {
        var key = propertyNameCache[name] || testPrefix(name);

        if (key) {
            element.style[key] = rule;
        }
    }
});
