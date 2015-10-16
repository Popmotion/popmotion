"use strict";

var utils = require('../inc/utils.js'),

    maxElapsed = 33,
    Timer = function () {
        this.elapsed = 16.7;
        this.current = utils.currentTime();
        this.update();
    };

Timer.prototype = {
    update: function (framestamp) {
        this.prev = this.current;
        this.current = framestamp;
        this.elapsed = Math.min(this.current - this.prev, maxElapsed);

        return this.current;
    },

    getElapsed: function () {
        return this.elapsed;
    },
    
    clock: function () {
        this.current = utils.currentTime();
    }
};

module.exports = Timer;