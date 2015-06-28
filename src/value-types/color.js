"use strict";

var rgb = require('./rgb'),
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

    split: function (value) {
        return runSupported('split', value);
    },

    combine: function (values) {
        return (values.Red) ? rgb.combine(values) : hsl.combine(values);
    }
};