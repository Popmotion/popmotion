"use strict";

var color = require('./color'),

    splitSpaceDelimited = require('./manipulators/split-space-delimited'),

    defaults = {
        X: 0,
        Y: 0,
        Radius: 0,
        Spread: 0,
        Color: 'rgba(0, 0, 0, 0.5)'
    };

module.exports = {
    /*
        Split shadow properties "X Y Radius Spread Color"
        
        @param [string]: Shadow property
        @return [object]
    */
    split: function (value) {
        var bits = splitSpaceDelimited(value),
            numBits = bits.length,
            colorFound = false,
            colorValue = '',
            i = 0,
            bit, color,
    },

    combine: function (values) {
        var color = 
    }
};