"use strict";

var calc = require('../utils/calc.js'),
    Value = require('../bits/value.js'),
    Values = function () {
        this.store = {};
    };

Values.prototype = {
    
    apply: function (values, inherit) {
        
        // Create or update Value objects for each defined value
        for (var key in values) {
            if (values.hasOwnProperty(key)) {
                
                // If this Value has been created, update
                if (this.store[key]) {
                    this.store[key].update(values[key], inherit);
                
                // Else create new Value
                } else {
                    this.store[key] = new Value(values[key], inherit);
                }
            }
        }
        
        // Add x and y properties if angle is provided
        if (values && values.angle) {
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
    
    set: function (key, value) {
        if (this.store[key]) {
            this.store[key].current = value;
        } else {
            this.store[key] = new Value(value);
        }
    },
    
    get: function (key) {
        return this.store[key];
    }
    
};

module.exports = Values;