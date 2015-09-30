"use strict";

var createDelimited = require('./manipulators/create-delimited'),
    getColorValues = require('./manipulators/get-color-values'),
    functionCreate = require('./manipulators/function-create'),
    defaultProps = require('./settings/default-props'),
    terms = require('./settings/dictionary').hsl;

module.exports = {

    defaultProps: {
        Hue: {
            min: 0,
            max: 360
        },
        Saturation: defaultProps.percent,
        Lightness: defaultProps.percent,
        Alpha: defaultProps.opacity
    },

    test: function test(value) {
        return value && value.indexOf('hsl') > -1;
    },

    split: function split(value) {
        return getColorValues(value, terms);
    },

    combine: function combine(values) {
        return functionCreate(createDelimited(values, terms, ', ', 2), 'hsla');
    }
};