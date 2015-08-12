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
        
        propertyNameCache[key] = key;

        for (var i = 0; i < numPrefixes; i++) {
            var prefixed = prefixes[i] + key.charAt(0).toUpperCase() + key.slice(1);

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

    onUpdate: function (output, actor) {

        //actor.route('css').set(build(output));
    },

    get: function (name, element) {
        return window.getComputedStyle(element, null)[propertyNameCache[name] || testPrefix(name)];
    },

    set: function (name, rule, element) {
        element.style[propertyNameCache[name] || testPrefix(name)] = rule;
    }
});
