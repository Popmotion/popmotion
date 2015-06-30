"use strict";

var createDelimited = require('./manipulators/create-delimited'),
    getColorValues = require('./manipulators/get-color-values'),
    functionCreate = require('./manipulators/function-create'),
    defaultProps = require('./settings/default-props'),
    colorDefaults = defaultProps.color,
    terms = require('./settings/dictionary').colors;

module.exports = {

    defaultProps: {
        Red: colorDefaults,
        Green: colorDefaults,
        Blue: colorDefaults,
        Alpha: defaultProps.opacity
    },

    test: function (value) {
        return (value && value.indexOf('rgb') > -1);
    },
    
    split: function (value) {
        return getColorValues(value, terms);
    },

    combine: function (values) {
        return functionCreate(createDelimited(values, terms, ', ', 2), 'rgba');
    }
};