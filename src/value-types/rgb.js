"use strict";

var getColorValues = require('./manipulators/get-color-values.js'),

    defaults = {
        Red: 0,
        Green: 0,
        Blue: 0,
        Alpha: 0
    };

module.exports = {

    test: function (value) {
        return (value.indexOf('rgb') > -1);
    },
    
    split: function (value) {
        var colors = getColorValues(value);
    },

    combine: function (values) {
        var red = (values.hasOwnProperty('Red')) ? values.Red : defaults.Red,
            green = (values.hasOwnProperty('Green')) ? values.Green : defaults.Green,
            blue = (values.hasOwnProperty('Blue')) ? values.Blue : defaults.Blue,
            alpha = (values.hasOwnProperty('Alpha')) ? values.Alpha : defaults.Alpha;

        return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
    }
};