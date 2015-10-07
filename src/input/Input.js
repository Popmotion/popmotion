/*
    Input controller
*/
"use strict";

var calc = require('../inc/calc.js'),
    utils = require('../inc/utils.js'),
    History = require('../inc/History.js'),

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
        var latest, hasChanged;
        
        // Check provided timestamp against lastFrame timestamp and return input has already been updated
        if (timestamp === this.lastFrame) {
            return;
        }
        
        latest = (this.poll) ? this.poll() : this.history.get();
        hasChanged = utils.hasChanged(this.current, latest);

        // If input has changed between frames  
        if (hasChanged) {
            this.velocity = calc.offset(this.current, latest);
            this.current = latest;
            this.inactiveFrames = 0;

        // Or it hasn't moved and our frame limit has been reached
        } else if (this.inactiveFrames >= this.maxInactiveFrames) {
            this.velocity = calc.offset(this.current, this.current);
        
        // Or input hasn't changed
        } else {
            this.inactiveFrames++;
        }
        
        this.lastFrame = timestamp;
        
        return this;
    }
};

module.exports = Input;