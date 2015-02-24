"use strict";

var utils = require('../utils/utils.js'),
    presets = require('./presets.js'),
    Pointer = require('../input/pointer.js'),

    STRING = 'string',
    NUMBER = 'number',
    OBJECT = 'object',
    
    /*
        Generic argument parsing
        
        Checks first argument to be a string and loads preset,
        merges in next object as override
    */
    generic = function () {
        var props = {};

        if (typeof arguments[0] == STRING) {
            props = presets.getDefined(arguments[0]);
            
            if (typeof arguments[1] == OBJECT) {
                utils.merge(props, arguments[1]);
            }
            
        // If object, assign directly
        } else if (typeof arguments[0] == OBJECT) {
            props = arguments[0];
        }
        
        return props;
    };

module.exports = {
    
    /*
        TODO: 
        
        Add parsing over presets
            base = presets.createBase(defs, override);
            
        Reimplement CSS parsing - maybe in DOM Action? 
    */
    
    /*
        Parse play arguments
        
        Syntax
            .play(preset [,override, duration, easing, onEnd])
            .play(properties [, duration, easing, onEnd])
    */
    play: function () {
        var props = generic.apply(this, arguments),
            argsLength = arguments.length,
            i = 0,
            arg,
            typeofArg = '';
        
        // Play specific properties
        props.playhead = props.loopCount = props.yoyoCount = 0;
        
        for (; i < argsLength; i++) {
            arg = arguments[i];
            typeofArg = typeof arg;
            
            // Easing if string and not first index
            if (typeofArg == STRING && i !== 0) {
                props.ease = arg;
            
            // Duration if number
            } else if (typeofArg == NUMBER) {
                props.duration = arg;
                
            // Callback if function
            } else if (utils.isFunc(arg)) {
                props.onEnd = arg;
            }
        }
        
        // props.values = parse.cssToValues(arg, 'to');
        return props;
    },
    
    /*
        Parse track arguments
        
        Syntax
            .track(preset [, override], event/Input)
            .track(properties, event/Input)
    */
    track: function () {
        var props = {},
            argsLength = arguments.length,
            inputIndex = argsLength - 1,
            input = arguments[inputIndex];
        
        // Loop until inputIndex
        for (var i = 0; i < inputIndex; i++) {
            
            // Preset if string
            if (typeof arguments[i] === STRING) {
                // load preset
                
            // Or override
            } else {
                props = utils.merge(props, arguments[i]);
            }
        }
        
        // Create Pointer if this isn't an Input
        input = (!input.current) ? new Pointer(input) : input;
        
        // Append input
        props.input = input;
        props.inputOrigin = input.get();
        
        return props;
    },
    
    generic: generic
};