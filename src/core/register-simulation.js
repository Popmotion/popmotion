/*
    Register new simulation
*/
"use strict";

var simulations = require('../core/simulations.js');

module.exports = function (name, simulation) {
    simulations[name] = simulation;
}