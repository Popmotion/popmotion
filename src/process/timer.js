"use strict";

var utils = require('../utils/utils.js'),

    maxElapsed = 33,
    smoothing = 50,
    Timer = function () {
        this.smoothed = 16.7;
        this.current = utils.currentTime();
        this.update();
    };

Timer.prototype = {
    update: function () {
        this.prev = this.current;
        this.current = utils.currentTime();
        this.elapsed = Math.min(this.current - this.prev, maxElapsed);
        this.smoothed += (this.elapsed - this.smoothed) / (smoothing / this.elapsed);
console.log(this.smoothed, this.elapsed);
        return this.current;
    },

    getElapsed: function () {
        return this.smoothed;
    },
    
    clock: function () {
        this.current = utils.currentTime();
    }
};

module.exports = Timer;