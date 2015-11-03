"use strict";

var Role = require('../Role');
var build = require('./build');

var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
var numPrefixes = prefixes.length;
var propertyNameCache = {};
var testElement;

/*
    Test style property for prefixed version
    
    @param [string]: Style property
    @return [string]: Cached property name
*/
var testPrefix = function (key) {
    testElement = testElement || document.createElement('div');

    if (propertyNameCache[key] === false) {
        return false;
    } else {
        propertyNameCache[key] = false;
    }

    for (var i = 0; i < numPrefixes; i++) {
        var prefix = prefixes[i],
            prefixed = prefix === '' ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);

        if (prefixed in testElement.style) {
            propertyNameCache[key] = prefixed;
        }
    }

    return propertyNameCache[key];
};

var cssRole = new Role({
    _map: require('./map'),
    _typeMap: require('./type-map'),

    init: function (actor) {
        actor._cssCache = {};
    },

    update: function (state, actor) {
        cssRole(actor.element, build(state, actor._cssCache));
    },

    get: function (element, key) {
        key = propertyNameCache[key] || testPrefix(key);

        if (key) {
            return window.getComputedStyle(element, null)[key];
        }
    },

    set: function (element, key, value) {
        key = propertyNameCache[key] || testPrefix(key);

        if (key) {
            element.style[key] = value;
        }
    }

});

module.exports = cssRole;