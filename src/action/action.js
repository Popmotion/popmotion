"use strict";

var cycl = require('cycl'),
    process = require('./process.js'),
    Data = require('../bits/data.js'),

    Action = function () {
        var self = this;

        // Create data store
        this.data = new Data();
        
        // Register process wth cycl
        this.process = cycl.newProcess(function (framestamp, frameDuration) {
            process.action(self, framestamp, frameDuration);
        });
    };

Action.prototype = {
    
    
    
};

module.exports = Action;