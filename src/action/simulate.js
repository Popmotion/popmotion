"use strict";

var calc = require('../utils/calc.js'),
    Simulate = function () {},
    simulate;

Simulate.prototype = {
    velocity: function (value, duration) {
        return value.velocity - calc.frameSpeed(value.deceleration, duration) + calc.frameSpeed(value.acceleration, duration);
    },
    
    gravity: function (value, duration) {
        var newVelocity = value.velocity += value.gravity;

        if (value.current >= value.max) {
            newVelocity *= -value.bounce;
            console.log(newVelocity);
        }
        
        return newVelocity;
    }
};

simulate = new Simulate();

module.exports = simulate;