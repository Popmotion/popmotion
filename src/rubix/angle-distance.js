/*
    Process angle and distance values based on x and y values
*/
"use strict";

var calc = require('../utils/calc.js'),

    CURRENT = 'current';

module.exports = {

    /*
        Process new value

        Note: currently inefficient as this gets called one each for
              radialX and radialY
              
        @param [string]: Name of current value
        @param [object]: Current Value
        @param [object]: All Values in current Action
        
        @return [number]: Calculated value
    */
    process: function (key, value, values) {
        var origin = {
                x: (values.x) ? values.x.get(CURRENT) : 0,
                y: (values.y) ? values.y.get(CURRENT) : 0
            },
            point = calc.pointFromAngleAndDistance(origin, values.angle.get(CURRENT), values.distance.get(CURRENT)),
            newValue = {
                radialX: point.x,
                radialY: point.y
            };
        
        return newValue[key];
    } 

};