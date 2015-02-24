"use strict";

var KEY = require('../opts/keys.js'),
    utils = require('../utils/utils.js'),

    presetStore = {},
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
    define: function () {
        var props = {},
            key = '',
            chain = [],
            preset = {};
        
        // Check if supplied arguments are string/object or object map
        if (arguments[1] === undefined) {
            props = arguments[0];
        } else {
            props[arguments[0]] = arguments[1];
        }
        
        // Iterate over props and create presets
        for (key in props) {
            if (props.hasOwnProperty(key)) {
                chain = key.split('.');
                
                // If there's an inheritence chain, merge
                // TODO: multilayered inheritence
                if (chain.length > 1 && presetStore[chain[0]]) {
                    presetStore[key] = utils.merge(presetStore[chain[0]], props[key]);
                
                // Otherwise directly copy
                } else {
                    presetStore[key] = props[key];
                }
            }
        } // end for
    },
    
    
    /*
        Get defined action
        
        @param [string]: The name of the predefined action
    */
    getDefined: function (key) {
        return utils.copy(presetStore[key]);
    }
    
};

module.exports = new Presets();