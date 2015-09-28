"use strict";

var createDelimited = require('./manipulators/create-delimited'),
    pxDefaults = require('./px').defaultProps,
    splitSpaceDelimited = require('./manipulators/split-space-delimited'),
    terms = require('./settings/dictionary').positions;

module.exports = {

    defaultProps: pxDefaults,
        
    /*
        Split positions in format "X Y Z"
        
        @param [string]: Position values
            "20% 30% 0" -> {20%, 30%, 0}
            "20% 30%" -> {20%, 30%}
            "20%" -> {20%, 20%}
    */
    split: function (value) {
        var positions = splitSpaceDelimited(value),
            numPositions = positions.length,
            splitValue = {
                X: positions[0],
                Y: (numPositions > 1) ? positions[1] : positions[0]
            };

        if (numPositions > 2) {
            splitValue.Z = positions[2];
        }

        return splitValue;
    },

    combine: function (values) {
        return createDelimited(values, terms, ' ');
    }
};