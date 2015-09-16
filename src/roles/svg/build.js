"use strict";

var each = require('../inc/utils').each;

module.exports = function (output) {
    var props = {},
        transform = '';

    each(output, function (key, value) {
        if (transformProps[key]) {

        } else {
            props[key] = value;
        }
    });

    return props;
};