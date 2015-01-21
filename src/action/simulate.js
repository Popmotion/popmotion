"use strict";

var calc = require('../utils/calc.js'),
    Simulate = function () {},
    simulate;

Simulate.prototype = {
    velocity: function (value, duration) {
        return value.velocity - calc.frameSpeed(value.deceleration, duration) + calc.frameSpeed(value.acceleration, duration);
    }
};

simulate = new Simulate();

module.exports = simulate;