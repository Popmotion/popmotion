"use strict";

var frictionStopLimit = .2,
    calc = require('../utils/calc.js'),
    speedPerFrame = calc.speedPerFrame,
    
    VELOCITY = 'velocity';

module.exports = {
    
    /*
        Velocity
        
        The default .run() simulation.
        
        Applies any set deceleration and acceleration to existing velocity
    */
    velocity: function (value, duration) {
        return value[VELOCITY] - speedPerFrame(value.deceleration, duration) + speedPerFrame(value.acceleration, duration);
    },

    /*
        Gravity
        
        TODO: neaten this effect (due to rounding issues) and add clause that reduces velocity to 0
        
        @param [Value]
        @returns [number]: New velocity
    */
    gravity: function (value, duration) {
        return value[VELOCITY] + speedPerFrame(value.gravity, duration);
    },
    
    /*
        Friction
        
        @param [Value]
        @returns [number]: New velocity
    */
    friction: function (value, duration) {
        var newVelocity = speedPerFrame(value[VELOCITY], duration) * (1 - value.friction);
        return (newVelocity < frictionStopLimit && newVelocity > -frictionStopLimit) ? 0 : calc.speedPerSecond(newVelocity, duration);
    },
    
    /*
        Spring
        
        @param [Value]
        @returns [number]: New velocity
    */
    spring: function (value, duration) {
        var distance = value.to - value.current,
            springDistance = distance * speedPerFrame(value.spring, duration);
            
        value[VELOCITY] += springDistance;
            
        return this.friction(value, duration);
    },
    
    /*
        Bounce
        
        Invert velocity and reduce by provided fraction
        
        @param [Value]
        @return [number]: New velocity
    */
    bounce: function (value) {
        return value[VELOCITY] *= -value.bounce;
    }
};