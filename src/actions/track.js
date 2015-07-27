/*
    Track user input
*/
"use strict";

var calc = require('../inc/calc'),
    genericParser = require('./generic/parse-args'),
    Pointer = require('../input/Pointer');

module.exports = {

    valueDefaults: require('./track/default-value-props'),

    /*
        Parse Input arguments
    */
    parse: function () {
        var args = [].slice.call(arguments),
            input = args.pop(),
            props = genericParser.apply(this, args);

        // Create Pointer if this isn't an Input
        props.input = (!input.current) ? new Pointer(input) : input;

        // Set input origin if not user-defined
        if (!props.inputOrigin) {
            props.inputOrigin = props.input.get();
        }

        return props;
    },
    
    /*
        Update input offset
    */
    onFrameStart: function () {
        this.inputOffset = calc.offset(this.inputOrigin, this.input.current);
    },
        
    /*
        Move Value relative to Input movement
        
        @param [string]: Key of current value
        @param [Value]: Current value
        @return [number]: Calculated value
    */
    process: function (key, value) {
        return (this.inputOffset.hasOwnProperty(key)) ? value.origin + this.inputOffset[key] : value.current;
    },
    
    /*
        Has this Action ended? 
        
        @return [boolean]: False to make user manually finish .track()
    */
    hasEnded: function () {
        return false;
    }
};