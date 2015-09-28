"use strict";

var calc = require('../../inc/calc'),
    utils = require('../../inc/utils'),
    speedPerFrame = calc.speedPerFrame;

/*
    Add core physics simulations
*/
var simulations = {
    /*
        Velocity
        
        The default .run() simulation.
        
        Applies any set deceleration and acceleration to existing velocity
    */
    velocity: function velocity(value, duration) {
        value.velocity = value.velocity - speedPerFrame(value.deceleration, duration) + speedPerFrame(value.acceleration, duration);

        return simulations.friction(value, duration);
    },

    /*
        Glide
        
        Emulates touch device scrolling effects with exponential decay
        http://ariya.ofilabs.com/2013/11/javascript-kinetic-scrolling-part-2.html
    */
    glide: function glide(value, duration, started) {
        var timeUntilFinished = -utils.currentTime() - started,
            delta = -value.to * Math.exp(timeUntilFinished / value.timeConstant);

        return value.to + delta - value.current;
    },

    /*
        Friction
         Apply friction to the current value
        TODO: Make this framerate-independent
    */
    friction: function friction(value, duration) {
        var newVelocity = speedPerFrame(value.velocity, duration) * (1 - value.friction);

        return calc.speedPerSecond(newVelocity, duration);
    },

    spring: function spring(value, duration) {
        var distance = value.to - value.current;

        value.velocity += distance * speedPerFrame(value.spring, duration);

        return simulations.friction(value, duration);
    },

    bounce: function bounce(value) {
        var distance = 0,
            to = value.to,
            current = value.current,
            bounce = value.bounce;

        // If we're using glide simulation we have to flip our target too
        if (value.simulate === 'glide') {
            distance = to - current;
            value.to = current - distance * bounce;
        }

        return value.velocity *= -bounce;
    },

    capture: function capture(value, target) {
        value.to = target;
        value.simulate = 'spring';
        value.capture = value.min = value.max = undefined;
    }
};

module.exports = simulations;