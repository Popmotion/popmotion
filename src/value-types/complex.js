var utils = require('../inc/utils'),
    each = utils.each,
    floatRegex = /(-)?(\d[\d\.]*)/g,

    generateToken = function (key) {
        return '${' + key + '}';
    };

module.exports = {
    test: function (value) {
        var matches = value.match(floatRegex);
        return (utils.isArray(matches) && matches.length > 1);
    },

    template: function (value) {
        var counter = 0;
        return value.replace(floatRegex, () => generateToken(counter++));
    },

    split: function (value) {
        var splitValue = {},
            matches = value.match(floatRegex),
            numMatches = matches.length;
        
        for (let i = 0; i < numMatches; i++) {
            splitValue[i] = matches[i];
        }

        return splitValue;
    },

    combine: function (values, template) {
        var combinedValue = template;

        each(values, (key, value) => {
            combinedValue = combinedValue.replace(generateToken(key), value);
        });

        return combinedValue;
    }
};