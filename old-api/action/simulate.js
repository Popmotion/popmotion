"use strict";

var simulations = require('../core/simulations.js');

module.exports = function (simulation, value, duration, started) {
    var velocity = simulations[simulation](value, duration, started);
    
    return (Math.abs(velocity) >= value.stopSpeed) ? velocity : 0;
};