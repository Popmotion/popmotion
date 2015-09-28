"use strict";

var utils = require('../inc/utils'),
    rgb = require('./rgb'),
    hsl = require('./hsl'),
    hex = require('./hex'),
    supported = [rgb, hsl, hex],
    numSupported = 3,

    runSupported = function (method, value) {
        for (var i = 0; i < numSupported; i++) {
            if (supported[i].test(value)) {
                return supported[i][method](value);
            }
        }
    };

module.exports = {

    defaultProps: utils.merge(rgb.defaultProps, hsl.defaultProps),

    test: function (value) {
        return rgb.test(value) || hex.test(value) || hsl.test(value);
    },

    split: function (value) {
        return runSupported('split', value);
    },

    combine: function (values) {
        return (values.Red !== undefined) ? rgb.combine(values) : hsl.combine(values);
    }
};