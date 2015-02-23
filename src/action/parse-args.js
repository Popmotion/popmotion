"use strict";

var utils = require('../utils/utils.js'),
    Pointer = require('../input/pointer.js'),

    STRING = 'string',
    NUMBER = 'number',
    OBJECT = 'object';

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
        var props = {
                playhead: 0,
                loopCount: 0,
                yoyoCount: 0
            },
            arg, typeofArg = '',
            argsLength = arguments.length;
        
        // Loop through arguments an assign based on type and position
        for (var i = 0; i < argsLength; i++) {
            arg = arguments[i],
            typeofArg = typeof arg;
            
            // Load preset if this is the first index and item is a string
            if (typeofArg === STRING) {
                // Preset if first index
                if (i === 0) {
                    // load preset
                    
                // Otherwise easing
                } else {
                    props.ease = arg;
                }
            
            // If object, check if function
            } else if (typeofArg === OBJECT) {
                // onEnd if function
                if (utils.isFunc(arg)) {
                    props.onEnd = arg;

                } else {
                    props = utils.merge(props, arg);
                }
            
            // Duration if duration not set and argument is number
            } else if (!props.duration && typeofArg === NUMBER) {
                props.duration = arg;
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
    }
};