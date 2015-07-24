"use strict";

var utils = require('../inc/utils'),
    ModManager = require('../inc/ModManager'),
    presetManager = new ModManager(),

    DOT = '.',

    generateKeys = function (key) {
        var keys = key.split(DOT),
            numKeys = keys.length,
            lastKey = keys[0],
            i = 1;

        for (; i < numKeys; i++) {
            keys[i] = lastKey += DOT + keys[i];
        }

        return keys;
    };

/*
    Get defined action
    
    @param [string]: The name of the predefined action
*/
presetManager.getDefined = function (name) {
    var props = {},
        thisProp = {},
        keys = generateKeys(name),
        numKeys = keys.length,
        i = 0;

    for (; i < numKeys; i++) {
        thisProp = this[keys[i]];

        if (thisProp) {
            props = utils.merge(props, thisProp);
        }
    }

    return props;
};

module.exports = presetManager;