"use strict";

var createDelimited = require('./manipulators/create-delimited'),
    getColorValues = require('./manipulators/get-color-values'),
    functionCreate = require('./manipulators/function-create'),
    terms = require('./settings/dictionary').hsl;

module.exports = {

    test: function (value) {
        return (value && value.indexOf('hsl') > -1);
    },
    
    split: function (value) {
        return getColorValues(value, terms);
    },

    combine: function (values) {
        return functionCreate(createDelimited(values, terms, ', ', 2), 'hsla');
    }
};