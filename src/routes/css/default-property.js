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
    angle = {
        unit: 'deg'
    },
    defaults = {
        base: {
            unit: 'px'
        },
        
        color: color,
        Red: color,
        Green: color,
        Blue: color,
    
        Alpha: opacity,
        
        scale: scale,
        scaleX: scale,
        scaleY: scale,
        scaleZ: scale,
        
        skew: angle,
        skewX: angle,
        skewY: angle,
        rotate: angle,
        rotateX: angle,
        rotateY: angle,
        rotateZ: angle
    };
    
module.exports = defaults;