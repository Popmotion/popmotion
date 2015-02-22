"use strict";

var maxElapsed = 30,
    Timer = function () {
        this.update();
    };

Timer.prototype = {
    update: function () {
        this.prev = this.current;
        return this.current = new Date().getTime();
    },

    getElapsed: function () {
        return Math.min(this.current - this.prev, maxElapsed);
    }
};

module.exports = Timer;