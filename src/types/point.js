/*
    Point class
    ----------------------------------------
    
    Defines a 3D point in space
    
    @param [number || Point]: Either X axis value or Point object
    @param [number]: Y axis
    @param [number]: Z axis
    @return [Point]
*/
"use strict";

var Point = function (x, y, z) {
        this.setPoint(x, y, z);
    };

Point.prototype = {
    setPoint: function (x, y, z) {
        var xIsObj = (typeof x === 'object');

        this.x = xIsObj ? x.x || 0 : x || 0;
        this.y = xIsObj ? x.y || 0 : y || 0;
        this.z = xIsObj ? x.z || 0 : z || 0;
    }
};

module.exports = Point;