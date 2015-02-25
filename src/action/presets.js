"use strict";

var KEY = require('../opts/keys.js'),
    utils = require('../utils/utils.js'),
    
    generateKeys = function (key) {
        var keys = key.split(DOT),
            keysLength = keys.length,
            lastKey = keys[0],
            i = 1;
        
        for (; i < keysLength; i++) {
            keys[i] = lastKey += DOT + keys[i];
        }
        
        return keys;
    },

    presetStore = {},
    DOT = '.',
    Presets = function () {};

Presets.prototype = {

    /*
        Define a new Action preset
        
        Syntax
        
            .define(name, preset)
                @param [string]: Name of preset
                @param [object]: Preset options/properties
                
            .define(presets)
                @param [object]: Multiple presets as named object
                
        @return [Redshift]
    */
    define: function (name, preset) {
        var presets = {},
            key = '';

        if (utils.isObj(name)) {
            presets = name;
        } else {
            presets[name] = preset;
        }

        for (key in presets) {
            if (presets.hasOwnProperty(key)) {
                presetStore[key] = presets[key];
            }
        }
    },
    
    
    /*
        Get defined action
        
        @param [string]: The name of the predefined action
    */
    getDefined: function (key) {
        var props = {},
            thisProp = {},
            keys = generateKeys(key),
            keysLength = keys.length,
            i = 0;

        for (; i < keysLength; i++) {
            thisProp = presetStore[keys[i]];

            if (thisProp) {
                props = utils.merge(props, thisProp);
            }
        }
        
        return props;
    }
    
};

module.exports = new Presets();