'use strict';

var splitCommaDelimited = require('./split-comma-delimited'),
    functionBreak = require('./function-break');

module.exports = function (value, terms) {
    var splitValue = {},
        numTerms = terms.length,
        colors = splitCommaDelimited(functionBreak(value)),
        i = 0;

    for (; i < numTerms; i++) {
        splitValue[terms[i]] = colors[i] !== undefined ? colors[i] : 1;
    }

    return splitValue;
};