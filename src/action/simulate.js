"use strict";

var frictionStopLimit = .2,
	timeConstant = 395,
    calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    speedPerFrame = calc.speedPerFrame;

module.exports = {
    
    /*
        Velocity
        
        The default .run() simulation.
        
        Applies any set deceleration and acceleration to existing velocity
    */
    velocity: function (value, duration) {
        return value.velocity - speedPerFrame(value.deceleration, duration) + speedPerFrame(value.acceleration, duration);
    },

    /*
        Gravity
        
        TODO: neaten this effect (due to rounding issues) and add clause that reduces velocity to 0
        
        @param [Value]
        @returns [number]: New velocity
    */
    gravity: function (value, duration) {
        return value.velocity + speedPerFrame(value.gravity, duration);
    },
    
    /*
        Friction
        
        @param [Value]
        @returns [number]: New velocity
    */
    friction: function (value, duration, started) {
	    var elapsed = utils.currentTime() - started,
	    	newVelocity = - value.initialVelocity * Math.exp(- elapsed / timeConstant);
	    
	    return (newVelocity < frictionStopLimit && newVelocity > -frictionStopLimit) ? 0 : calc.speedPerSecond(newVelocity, duration);
    },
    
    /*
        Spring
        
        @param [Value]
        @returns [number]: New velocity
    */
    spring: function (value, duration) {
        var distance = value.to - value.current;

        value.velocity += distance * speedPerFrame(value.spring, duration);
            
        return this.friction(value, duration);
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