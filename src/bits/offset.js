/*
    Offset class | extends Point
    ----------------------------------------
    
    Defines the relative offset from another point
*/
"use strict";

var Point = require('./point.js'),
    Offset = function (angle, distance, x, y, z) {
        this.angle = angle || 0;
        this.distance = distance || 0;
        this.setPoint(x, y, z);
    };
    
Offset.prototype = new Point();

module.exports = Offset;