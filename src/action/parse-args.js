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
        var props = {},
            playlist = [],
            base = arguments[0],
            override = arguments[1],
            playlistLength = 0,
            argsAsArray = [].slice.call(arguments),
            i = 0;

        if (typeof base == STRING) {
            playlist = base.split(' ');
            playlistLength = playlist.length;
            props = presets.getDefined(playlist[0]);

            // If we've had multiple presets, loop through and add each to the queue
            if (playlistLength > 1) {
                for (; i < playlistLength; i++) {
                    argsAsArray.shift();
                    argsAsArray.unshift(playlist[i]);
                    this.queue.add.apply(this.queue, argsAsArray);
                }
            }
            
            if (typeof override == OBJECT) {
                utils.merge(props, override);
            }
            
        // If object, assign directly
        } else if (typeof base == OBJECT) {
            props = base;
        }
        
        return props;
    };

module.exports = {
    
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