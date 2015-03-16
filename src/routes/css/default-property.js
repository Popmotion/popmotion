"use strict";

var color = {
        min: 0,
        max: 255,
        round: true
    },
    opacity = {
        min: 0,
        max: 1
    },
    angle = {
        unit: 'deg'
    },
    scale = {},
    defaults = {
        base: {
            unit: 'px'
        },
        
        color: color,
        Red: color,
        Green: color,
        Blue: color,
    
        Alpha: opacity,
        opacity: opacity,
        
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