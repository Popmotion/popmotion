"use strict";

var cycl = require('cycl'),
    process = require('../action/process.js'),

    Action = function () {
        this.process = cycl.newProcess(this, this.onFrame);
    };

Action.prototype = {
    
    // REMOVE?
    start: function () {
        this.process.start();
    },
    
    onFrame: function (framestamp, frameDuration) {
        process.action(this, framestamp, frameDuration);
    }
    
};

module.exports = Action;