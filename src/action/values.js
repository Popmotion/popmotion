"use strict";

var calc = require('../utils/calc.js'),
    Value = require('../bits/value.js'),
    Values = function () {
        this.store = {};
    };

Values.prototype = function () {
    
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
    
    reset: function () {
        for (var key in this.store) {
            this.values[key].current = this.values[key].from;
        }
        
        this.progress = 0;
        this.elapsed = 0;
    },
    
    reverse: function () {
        var key, to, from;
        
        this.progress = calc.difference(this.progress, 1);
    },
    
    getAllValues: function () {
        return this.store;
    }
    
    
};

module.exports = Values;