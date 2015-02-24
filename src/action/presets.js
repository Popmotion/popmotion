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
                
                // If this preset already exists and forceOverride isn't set to true
                if (presetStore[key] && !props[key].forceOverride) {
                    throw KEY.ERROR.ACTION_EXISTS;
                
                // Otherwise create the preset
                } else {
                    chain = key.split('.');
                    
                    // If there's an inheritence chain, merge
                    // TODO: multilayered inheritence
                    if (chain.length > 1) {
                        
                        // Look for existing preset
                        if (presetStore[chain[0]]) {
                            presetStore[key] = utils.merge(presetStore[chain[0]], props[key]);
                            
                        // Otherwise throw error
                        } else {
                            throw KEY.ERROR.NO_ACTION;
                        }
                    
                    // Otherwise directly copy
                    } else {
                        presetStore[key] = props[key];
                    }
                }
                
            }
        } // end for
    },
    
    
    /*
        Get defined action
        
        @param [string]: The name of the predefined action
    */
    getDefined: function (key) {
        return this.copy(presetStore[key]);
    },
    
    /*
        Copy an action
    */
    copy: function (action) {
        var newAction = {};

        for (var key in action) {
            if (action.hasOwnProperty(key)) {
                if (key !== 'values') {
                    newAction[key] = action[key];
                } else {
                    newAction.values = utils.copy(action.values);
                }
            }
        }
        
        return newAction;
    },
    
    /*
        Merge an action
    */
    merge: function (action, override) {
        for (var key in override) {
            if (override.hasOwnProperty(key)) {
                if (key !== 'values') {
                    action[key] = override[key];
                } else {
                    action.values = utils.merge(action.values, override.values);
                }
            }
        }
        
        return action;
    }
    
};

module.exports = new Presets();