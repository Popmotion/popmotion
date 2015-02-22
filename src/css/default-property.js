"use strict";

var defaults = {
        color: {
            min: 0,
            max: 255,
            round: true
        },
        opacity: {
            min: 0,
            max: 1
        }
    };
    
defaults.Red = defaults.Green = defaults.Blue = defaults.color;
defaults.Alpha = defaults.opacity;
console.log(defaults);
module.exports = defaults;