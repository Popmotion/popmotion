"use strict";

var build = require('./build'),

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

var CSSRole = {

    map: require('./map'),
    typeMap: require('./type-map'),

    update: function (state) {
        var actor = this;

        each(build(output), function (key, value) {
            CSSRole.set.call(this, key, value);
        });
    },

    get: function (key) {
        key = propertyNameCache[key] || testPrefix(key);

        if (key) {
            return window.getComputedStyle(this.element, null)[key];
        }
    },

    set: function (key, value) {
        key = propertyNameCache[key] || testPrefix(key);

        if (key) {
            element.style[key] = value;
        }
    }

};

module.exports = CSSRole;