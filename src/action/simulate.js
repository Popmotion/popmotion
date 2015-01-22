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
        
        @param [Value]
        @returns [number]: New velocity
    */
    gravity: function (value) {
        return value.velocity += value.gravity;
    },
    
    /*
        Friction
        
        @param [Value]
        @returns [number]: New velocity
    */
    friction: function (value) {
        var newVelocity = value.velocity * 1 - value.friction + 0;
        
        return (newVelocity > 0.2) ? newVelocity : 0;
    },
    
    /*
        Bounce
        
        Invert velocity and reduce by provided fraction
        
        @param [Value]
        @return [number]: New velocity
    */
    bounce: function (value) {
        return value.velocity *= -value.bounce;
    }
};

simulate = new Simulate();

module.exports = simulate;