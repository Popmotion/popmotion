"use strict";

var color = require('./color'),
    utils = require('../inc/utils'),
    terms = require('./settings/dictionary'),
    splitSpaceDelimited = require('./manipulators/split-space-delimited');

module.exports = {
    /*
        Split shadow properties "X Y Radius Spread Color"
        
        @param [string]: Shadow property
        @return [object]
    */
    split: function (value) {
        var bits = splitSpaceDelimited(value),
            numBits = bits.length,
            hasReachedColor = false,
            colorProp = '',
            thisBit, color,
            i = 0, unit,
            splitValue = {};

        for (; i < numBits; i++) {
            thisBit = bits[i];

            // If we've reached the color property, append to color string
            if (hasReachedColor || color.test(thisBit)) {
                hasReachedColor = true;
                colorProp += thisBit;

            } else {
                splitValue[terms[i]] = thisBit;
            }
        }
        
        return utils.merge(splitValue, color.split(colorProp));
    },

    combine: function (values) {
       // var color = 
    }
};