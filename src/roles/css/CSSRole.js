"use strict";

var createRole = require('../create-role'),

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

        for (var i = 0; i < prefixesLength; i++) {
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
module.exports = createRole({
    init: function () {
        this.map: require('./map'),
        this.typeMap: require('./type-map')
    },

    update: function (output, actor) {
        this.css(build(output));
    },

    get: function (name, element) {
        return window.getComputedStyle(element, null)[propertyNameCache[name] || testPrefix(name)];
    },

    set: function (name, rule, element) {
        element.style[propertyNameCache[name] || testPrefix(name)] = rule;
    }
});


