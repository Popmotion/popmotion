"use strict";

var maxElapsed = 30,
    smoothing = 50,
    Timer = function () {
        this.elapsed = 16.7;
        this.update();
    };

Timer.prototype = {
    update: function () {
        var prev = this.current,
            current = new Date().getTime(),
            elapsed += (current - prev) * (current - this.elapsed) / smoothing;
    
        this.current = current;
        this.prev = prev;
        this.elapsed = elapsed;
    console.log(elapsed);
        return current;
    },

    getElapsed: function () {
        return Math.min(this.framerate, maxElapsed);
    }
};

module.exports = Timer;