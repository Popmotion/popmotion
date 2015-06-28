"use strict";

var getColorValues = require('./manipulators/get-color-values'),
    terms = require('./settings/dictionary').hsl,
    numTerms = terms.length;

module.exports = {

    test: function (value) {
        return (value && value.indexOf('hsl') > -1);
    },
    
    split: function (value) {
        var colors = getColorValues(value);

    },

    combine: function (values) {
        return functionCreate(createDelimited(values, terms, ', ').split(0, -2), 'hsla');
    }
};