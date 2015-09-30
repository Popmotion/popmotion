'use strict';

var utils = require('../inc/utils'),
    each = utils.each,
    floatRegex = /(-)?(\d[\d\.]*)/g,
    generateToken = function generateToken(key) {
    return '${' + key + '}';
};

module.exports = {
    test: function test(value) {
        var matches = value.match(floatRegex);
        return utils.isArray(matches) && matches.length > 1;
    },

    template: function template(value) {
        var counter = 0;
        return value.replace(floatRegex, function () {
            return generateToken(counter++);
        });
    },

    split: function split(value) {
        var splitValue = {},
            matches = value.match(floatRegex),
            numMatches = matches.length;

        for (var i = 0; i < numMatches; i++) {
            splitValue[i] = matches[i];
        }

        return splitValue;
    },

    combine: function combine(values, template) {
        var combinedValue = template;

        each(values, function (key, value) {
            combinedValue = combinedValue.replace(generateToken(key), value);
        });

        return combinedValue;
    }
};