/*
    Input controller
*/
"use strict";

var calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    History = require('../utils/history.js'),

    /*
        Input constructor
        
            Syntax
                newInput(name, value[, poll])
                    @param [string]: Name of to track
                    @param [number]: Initial value
                    @param [function] (optional): Function to poll Input data
                    
                newInput(props[, poll])
                    @param [object]: Object of values
                    @param [function] (optional): Function to poll Input data

        @return [Input]
    */
    Input = function () {
        var pollPos = arguments.length - 1;

        this.current = {};
        this.offset = {};
        this.velocity = {};
        this.history = new History();
        this.update(arguments[0], arguments[1]);
        
        if (utils.isFunc(arguments[pollPos])) {
            this.poll = arguments[pollPos];
        }
    };

Input.prototype = {
    
    // [number]: Number of frames of inactivity before velocity is turned to 0
    maxInactiveFrames: 2,
    
    // [number]: Number of frames input hasn't been updated
    inactiveFrames: 0,
    
    /*
        Get latest input values
        
        @param [string] (optional): Name of specific property to return
        @return [object || number]: Latest input values or, if specified, single value
    */
    get: function (prop) {
        var latest = this.history.get(),
            val = (prop !== undefined) ? latest[prop] : latest;
        
        return val;
    },

    /*
        Update the input values
        
        Syntax
            input.update(name, value)
                @param [string]: Name of to track
                @param [number]: Initial value
                
            input.update(props)
                @param [object]: Object of values
                
        @return [Input]
    */
    update: function (arg0, arg1) {
        var values = {};

        if (utils.isNum(arg1)) {
            values[arg0] = arg1;
        } else {
            values = arg0;
        }

        this.history.add(utils.merge(this.current, values));
        
        return this;
    },
    
    /*
        Check for input movement and update pointer object's properties
        
        @param [number]: Timestamp of frame
        @return [Input]
    */
    onFrame: function (timestamp) {
        var self = this,
            latest, hasChanged;
        
        // Check provided timestamp against lastFrame timestamp and return input has already been updated
        if (timestamp === self.lastFrame) {
            return;
        }
        
        latest = (self.poll) ? self.poll() : self.history.get();
        hasChanged = utils.hasChanged(self.current, latest);

        // If input has changed between frames  
        if (hasChanged) {
            self.velocity = calc.offset(self.current, latest);
            self.current = latest;
            self.inactiveFrames = 0;

        // Or it hasn't moved and our frame limit has been reached
        } else if (self.inactiveFrames >= self.maxInactiveFrames) {
            self.velocity = calc.offset(self.current, self.current);
        
        // Or input hasn't changed
        } else {
            self.inactiveFrames++;
        }
        
        self.lastFrame = timestamp;
        
        return this;
    }
    
};

module.exports = Input;