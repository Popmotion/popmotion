"use strict";

var getColorValues = require('./manipulators/get-color-values.js'),

    defaults = {
        hue: 0,
        saturation: 100,
        lightness: 50,
        alpha: 0
    };

module.exports = {

    test: function (value) {
        return (value.indexOf('hsl') > -1);
    },
    
    split: function (value) {
        var colors = getColorValues(value);

        return defaults;
    },

    combine: function (values) {
        var hue = (values.hasOwnProperty('hue')) ? values.hue : defaults.hue,
            saturation = (values.hasOwnProperty('saturation')) ? values.saturation : defaults.saturation,
            lightness = (values.hasOwnProperty('lightness')) ? values.lightness : defaults.lightness,
            alpha = (values.hasOwnProperty('alpha')) ? values.alpha : defaults.alpha;

        return 'hsla(' + hue + ', ' + saturation + ', ' + lightness + ', ' + alpha + ')';
    }
};