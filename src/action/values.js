"use strict";

var calc = require('../utils/calc.js'),
    //Value = require('../bits/value.js'),
    Values = function () {
        this.store = {};
    };

Values.prototype = {
    
    apply: function (values, inherit) {
        var currentInput = {};
        
        // Create or update Value objects for each defined value
        for (var key in values) {
            if (values.hasOwnProperty(key)) {
                this.set(key, values[key], inherit);
            }
        }
        
        // Add x and y properties if angle and distance provided
        if (values && values.angle && values.distance) {
            this.store.x = this.store.x || new Value(0, inherit);
            this.store.y = this.store.y || new Value(0, inherit);
        }
    },
    
    /*
        Reset values
    */
    reset: function () {
        for (var key in this.store) {
	        this.store[key].current = this.store[key].from;
        }
    },
    
    /*
        Reverse values
    */
    reverse: function () {
        var to = 0,
            from = 0;

        for (var key in this.store) {
            to = this.store[key].to;
            from = this.store[key].from;
            
            this.store[key].to = from;
            this.store[key].from = to;
        }
    },
    
    /*
        Get all values
    */
    getAll: function () {
        return this.store;
    },
    
    set: function (key, value, inherit) {
        // If value exists
        if (this.store[key]) {
            this.store[key].update(value, inherit);
        
        // Or create new
        } else {
            this.store[key] = new Value(value, inherit);
        }
    },
    
    get: function (key) {
        return this.store[key];
    }
    
};

module.exports = Values;