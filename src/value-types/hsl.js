"use strict";

var getColorValues = require('./manipulators/get-color-values.js'),

    defaults = {
        Hue: 0,
        Saturation: 100,
        Lightness: 50,
        Alpha: 0
    };

module.exports = {

    test: function (value) {
        return (value.indexOf('hsl') > -1);
    },
    
    split: function (value) {
        var colors = getColorValues(value);
    },

    combine: function (values) {
        var hue = (values.hasOwnProperty('Hue')) ? values.Hue : defaults.Hue,
            saturation = (values.hasOwnProperty('Saturation')) ? values.Saturation : defaults.Saturation,
            lightness = (values.hasOwnProperty('Lightness')) ? values.Lightness : defaults.Lightness,
            alpha = (values.hasOwnProperty('Alpha')) ? values.Alpha : defaults.Alpha;

        return 'hsla(' + hue + ', ' + saturation + ', ' + lightness + ', ' + alpha + ')';
    }
};