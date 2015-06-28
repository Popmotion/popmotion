"use strict";

var createDelimited = require('./manipulators/create-delimited'),
    getColorValues = require('./manipulators/get-color-values'),
    functionCreate = require('./manipulators/function-create'),
    terms = require('./settings/dictionary').colors,
    numTerms = terms.length;

module.exports = {

    test: function (value) {
        return (value && value.indexOf('rgb') > -1);
    },
    
    split: function (value) {
        var splitValue = {},
            colors = getColorValues(value),
            i = 0;

        for (; i < numTerms; i++) {
            splitValue[terms[i]] = (colors[i] !== undefined) ? colors[i] : 1;
        }

        return splitValue;
    },

    combine: function (values) {
        return functionCreate(createDelimited(values, terms, ', ', 2), 'rgba');
    }
};