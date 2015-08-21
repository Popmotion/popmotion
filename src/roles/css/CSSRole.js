"use strict";

var Role = require('../Role');
var build = require('./build'),

var prefixes = ['Webkit','Moz','O','ms', ''];
var numPrefixes = prefixes.length;
var propertyNameCache = {};
                    
/*
    Test style property for prefixed version
    
    @param [string]: Style property
    @return [string]: Cached property name
*/
var testPrefix = function (key) {
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

var CSSRole = new Role({

    extend: 'css',

    _map: require('./map'),
    _typeMap: require('./type-map'),

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

});

module.exports = CSSRole;