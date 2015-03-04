"use strict";

var defaults = {
        color: {
            start: 255,
            min: 0,
            max: 255,
            round: true
        },
        opacity: {
            start: 1,
            min: 0,
            max: 1
        },
        scale: {
            start: 1
        },
        skew: {
            unit: 'deg'
        }
    };
    
defaults.Red = defaults.Green = defaults.Blue = defaults.color;
defaults.Alpha = defaults.opacity;
defaults.scaleX = defaults.scaleY = defaults.scaleZ = defaults.scale;
defaults.skewX = defaults.skewY = defaults.skew;

module.exports = defaults;