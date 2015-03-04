"use strict";

var color = {
        start: 255,
        min: 0,
        max: 255,
        round: true
    },
    opacity = {
        start: 1,
        min: 0,
        max: 1
    },
    scale = {
        start: 1
    },
    skew = {
        unit: 'deg'
    },
    pixel = {
        unit: 'px'
    };

module.exports = {
    color: color,
    Red: color,
    Green: color,
    Blue: color,

    Alpha: opacity,
    
    scaleX: scale,
    scaleY: scale,
    scaleZ: scale,
    
    skew: skew,
    skewX: skew,
    skewY: skew
};