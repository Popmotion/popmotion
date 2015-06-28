"use strict";

module.exports = function (values, terms, delimiter, chop) {
    var combined = '',
        key = '',
        i = 0,
        numTerms = terms.length;

    for (; i < numTerms; i++) {
        key = terms[i];

        if (values.hasOwnProperty(key)) {
            combined += values[key] + delimiter;
        }
    }

    return combined.slice(0, -chop);
};