/*
    The loop
*/
"use strict";

var Timer = require('./timer.js'),
    tick = require('./tick.js'),
    Loop = function Loop() {
    this.timer = new Timer();
};

Loop.prototype = {

    /*
        [boolean]: Current status of animation loop
    */
    isRunning: false,

    /*
        Fire all active processes once per frame
    */
    frame: function frame() {
        var self = this;

        tick(function (framestamp) {
            self.timer.update(framestamp);
            var isActive = self.callback.call(self.scope, framestamp, self.timer.getElapsed());

            if (isActive) {
                self.frame();
            } else {
                self.stop();
            }
        });
    },

    /*
        Start loop
    */
    start: function start() {
        // Make sure we're not already running a loop
        if (!this.isRunning) {
            this.timer.clock();
            this.isRunning = true;
            this.frame();
        }
    },

    /*
        Stop the loop
    */
    stop: function stop() {
        this.isRunning = false;
    },

    /*
        Set the callback to run every frame
        
        @param [Object]: Execution context
        @param [function]: Callback to fire
    */
    setCallback: function setCallback(scope, callback) {
        this.scope = scope;
        this.callback = callback;
    }

};

module.exports = new Loop();