"use strict";

var calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    speedPerFrame = calc.speedPerFrame,

	simulations = {
	    
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
	        
	        Applies gravity as acceleration
	        
	        @param [Value]
	        @returns [number]: New velocity
	    */
	    gravity: function (value, duration) {
	        return value.velocity + speedPerFrame(value.gravity, duration);
	    },
	    
	    /*
	        Glide
	        
	        Emulates touch device scrolling effects with exponential decay
	        http://ariya.ofilabs.com/2013/11/javascript-kinetic-scrolling-part-2.html
	        
	        @param [Value]
	        @returns [number]: New velocity
	    */
	    glide: function (value, duration, started) {
		    var timeUntilFinished = - utils.currentTime() - started,
		        delta = - value.to * Math.exp(timeUntilFinished / value.timeConstant);

		    return (value.to + delta) - value.current;
	    },
    
        /*
            Friction
            
            @param [Value]
            @returns [number]: New velocity
        */
        friction: function (value, duration) {
            var newVelocity = speedPerFrame(value.velocity, duration) * (1 - value.friction);
            return calc.speedPerSecond(newVelocity, duration);
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
    	    var distance = 0,
    	        to = value.to,
    	        current = value.current,
    	        bounce = value.bounce;
    	    
    	    // If we're using glide simulation we have to flip our target too
    	    if (value.simulate === 'glide') {
        	    distance = to - current;
        	    value.to = current - (distance * bounce);
    	    }
    	    
    	    return value.velocity *= - bounce;
	    },
	    
	    /*
    	    Capture
    	    
    	    Convert simulation to spring and set target to limit
    	    
    	    @param [Value]
    	    @param [number]: New target for value
	    */
	    capture: function (value, target) {
    	    value.to = target;
    	    value.simulate = 'spring';
    	    value.capture = value.min = value.max = undefined;
    	    value.spring = 90;
    	    value.friction = 0.15;
	    }
	};

module.exports = function (simulation, value, duration, started) {
	var velocity = simulations[simulation](value, duration, started);
	
	return (Math.abs(velocity) >= value.stopSpeed) ? velocity : 0;
};