"use strict";

var calc = require('../../inc/calc'),
    speedPerFrame = calc.speedPerFrame,

    ModManager = require('../../inc/ModManager'),
    simulationManager = new ModManager();

/*
    Add core physics simulations
*/
simulationManager

    /*
        Velocity
        
        The default .run() simulation.
        
        Applies any set deceleration and acceleration to existing velocity
    */
    .extend('velocity', function (value, duration) {
        return value.velocity - speedPerFrame(value.deceleration, duration) + speedPerFrame(value.acceleration, duration);
    })
    
    /*
        Glide
        
        Emulates touch device scrolling effects with exponential decay
        http://ariya.ofilabs.com/2013/11/javascript-kinetic-scrolling-part-2.html
    */
    .extend('glide', function (value, duration, started) {
        var timeUntilFinished = - utils.currentTime() - started,
            delta = - value.to * Math.exp(timeUntilFinished / value.timeConstant);

        return (value.to + delta) - value.current;
    })

    /*
        Friction

        TODO: fold into core physics simulation
    */
    .extend('friction', function (value, duration) {
        var newVelocity = speedPerFrame(value.velocity, duration) * (1 - value.friction);
        return calc.speedPerSecond(newVelocity, duration);
    })
    
    /*
        Spring
    */
    .extend('spring', function (value, duration) {
        var distance = value.to - value.current;
        
        value.velocity += distance * speedPerFrame(value.spring, duration);
        
        return simulationManager.friction(value, duration);
    })
    
    /*
        Bounce
        
        Invert velocity and reduce by provided fraction
    */
    .extend('bounce', function (value) {
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
    })
    
    /*
        Capture
        
        Convert simulation to spring and set target to limit
    */
    .extend('capture', function (value, target) {
        value.to = target;
        value.simulate = 'spring';
        value.capture = value.min = value.max = undefined;
    });

module.exports = simulationManager;
