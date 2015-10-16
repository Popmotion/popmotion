"use strict";

var utils = require('../inc/utils.js'),
    maxElapsed = 33,
    Timer = function Timer() {
    this.elapsed = 16.7;
    this.current = utils.currentTime();
    this.update();
};

Timer.prototype = {
    update: function update(framestamp) {
        this.prev = this.current;
        this.current = framestamp;
        this.elapsed = Math.min(this.current - this.prev, maxElapsed);

        return this.current;
    },

    getElapsed: function getElapsed() {
        return this.elapsed;
    },

    clock: function clock() {
        this.current = utils.currentTime();
    }
};

module.exports = Timer;