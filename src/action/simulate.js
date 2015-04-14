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

module.exports = function (value, duration, started) {
	var velocity = simulations[value.simulate](value, duration, started);
	
	return (Math.abs(velocity) >= value.stopSpeed) ? velocity : 0;
};