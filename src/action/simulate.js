"use strict";

var calc = require('../utils/calc.js'),
    Simulate = function () {},
    simulate;

Simulate.prototype = {
    
    /*
        Velocity
        
        The default .run() simulation.
        
        Velocity takes 
    */
    velocity: function (value, duration) {
        return value.velocity - calc.frameSpeed(value.deceleration, duration) + calc.frameSpeed(value.acceleration, duration);
    },

    /*
        Gravity
        
        If bounce is set, we add a bounce effect when the max value is reached
        
        TODO: neaten this effect (due to rounding issues) and add clause that reduces velocity to 0
    */
    gravity: function (value, duration) {
        var newVelocity = value.velocity += value.gravity;

        if (value.current >= value.max) {
            newVelocity *= -value.bounce;
        }
        
        return newVelocity;
    },
    
    /*
        Friction
    */
    friction: function (value, duration) {
        var newVelocity = value.velocity * 1 - value.friction + 0;
        
        return (newVelocity > 0.2) ? newVelocity : 0;
    }
};

simulate = new Simulate();

module.exports = simulate;