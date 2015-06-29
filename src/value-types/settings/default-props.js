"use strict";

var circle = {
        min: 0,
        max: 360
    },
    color = {
        min: 0,
        max: 255,
        round: true
    },
    opacity = {
        min: 0,
        max: 1
    },
    percent = {
        min: 0,
        max: 100,
        unit: '%'
    },
    px = {
        unit: 'px'
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

        Hue: circle,
        Saturation: percent,
        Lightness: percent,
    
        Alpha: opacity,
        opacity: opacity,
        
        scale: scale,
        scaleX: scale,
        scaleY: scale,
        scaleZ: scale,

        X: px,
        Y: px,
        Spread: px,
        Radius: px,
        
        skew: angle,
        skewX: angle,
        skewY: angle,
        rotate: angle,
        rotateX: angle,
        rotateY: angle,
        rotateZ: angle,

        translateX: px,
        translateY: px,
        translateZ: px
    };
    
module.exports = defaults;