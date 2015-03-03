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
        }
    };
    
defaults.Red = defaults.Green = defaults.Blue = defaults.color;
defaults.Alpha = defaults.opacity;
defaults.scaleX = defaults.scaleY = defaults.scaleZ = defaults.scale;

module.exports = defaults;