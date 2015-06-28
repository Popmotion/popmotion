"use strict";

var getColorValues = require('./manipulators/get-color-values'),
    dictionary = require('./settings/dictionary'),
    terms = dictionary.hsl;

module.exports = {

    test: function (value) {
        return (value && value.indexOf('hsl') > -1);
    },
    
    split: function (value) {
        var colors = getColorValues(value);

        return defaults;
    },

    combine: function (values) {
        return 'hsla(' + values.Hue + ', ' + values.Saturation + ', ' + values.Lightness + ', ' + values.Alpha + ')';
    }
};