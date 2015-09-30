"use strict";

var color = require('./color'),
    utils = require('../inc/utils'),
    pxDefaults = require('./px').defaultProps,
    terms = require('./settings/dictionary').shadow,
    splitSpaceDelimited = require('./manipulators/split-space-delimited'),
    createDelimited = require('./manipulators/create-delimited'),
    shadowTerms = terms.slice(0, 4);

module.exports = {

    defaultProps: utils.merge(color.defaultProps, {
        X: pxDefaults,
        Y: pxDefaults,
        Radius: pxDefaults,
        Spread: pxDefaults
    }),

    /*
        Split shadow properties "X Y Radius Spread Color"
        
        @param [string]: Shadow property
        @return [object]
    */
    split: function split(value) {
        var bits = splitSpaceDelimited(value),
            numBits = bits.length,
            hasReachedColor = false,
            colorProp = '',
            thisBit,
            i = 0,
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

    combine: function combine(values) {
        return createDelimited(values, shadowTerms, ' ') + color.combine(values);
    }
};