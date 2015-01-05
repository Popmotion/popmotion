/*
    Custom input
*/
"use strict";

var calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    History = require('../bobs/history.js'),
    Input = function () {
        this.current = {};
        this.history = new History();
        this.offset = {};
        this.update(arguments[0], arguments[1]);
    };

Input.prototype = {

    // Allow input to be inactive for this many frames before declared not moving
    maxInactiveFrames: 2,
    
    // Number of frames input hasn't moved
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
            input.update({ prop: val });
            input.update('prop', val);
        
        @param [string || object]: 
        @param [number] (optional): If 
    */
    update: function () {
        var values = {};

        if (utils.isNum(arguments[1])) {
            values[arguments[0]] = arguments[1];
        } else {
            values = arguments[0];
        }

        this.history.add(utils.merge(this.current, values));
        
        return this;
    },
    
    /*
        Check for input movement and update pointer object's properties
        
        @param [number]: Timestamp of frame
    */
    onFrame: function (timestamp) {
        var latest, hasChanged;
        
        // Check provided timestamp against lastFrame timestamp and return input has already been updated
        if (timestamp === this.lastFrame) {
            return;
        }
        
        latest = this.history.get();
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
    }
    
};

module.exports = Input;