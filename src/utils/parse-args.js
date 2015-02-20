"use strict";

var utils = require('./utils.js'),
    parse = require('../css/parse.js');

module.exports = {
    
    /*
        Parse play arguments
        
        @param [object]: Object of valid CSS properties to animate
        @param [number] (optional): Duration in ms
        @param [string] (optional): Name of easing function
        @param [function](optional): onEnd callback
        @returns [object]: Redshift-formatted play arguments
    */
    playArgs: function () {
        var props = {},
            arg,
            argsLength = arguments.length;
            
        for (var i = 0; i < argsLength; i++) {
            arg = arguments[i];

            // If number, this is duration
            if (!props.duration && utils.isNum(arg)) {
                props.duration = arg;
            
            // If it's a string, it's an easing name
            } else if (!props.ease && utils.isString(arg)) {
                props.ease = arg;

            // If function, onEnd
            } else if (!props.onEnd && utils.isFunc(arg)) {
                props.onEnd = arg;
            
            // Or it's our values
            } else {
                props.values = parse.cssToValues(arg, 'to');
            }
        }
        console.log(props.values);
        return props;
    },
    
    /*
        Parse track arguments
        
        @param [object] (optional): Object of valid CSS properties to track
        @param [event || Redshift Input]: Pointer event or Input to track
        @returns [object]: Redshift-formatted play arguments
    */
    trackArgs: function () {
        var params = [],
            argsLength = arguments.length;
        
        if (argsLength > 1) {
            params.push({ values: parse.cssToValues(arguments[0]) });
        }
        
        params.push(arguments[argsLength - 1]);

        return params;
    }
    
};