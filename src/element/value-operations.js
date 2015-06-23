"use strict";

var operations = {

        /*
            Reset the value current to its origin

            @param [object]: Value object
        */
        reset: function (value) {
            this.retarget(value);
            value.current = value.origin;
        },

        /*
            Set value origin property to current value
            
            @param [object]: Value object
        */
        resetOrigin: function (value) {
            value.origin = value.current;
        },

        /*
            Set value to property back to target
            
            @param [object]: Value object
        */
        retarget: function (value) {
            value.to = value.target;
        },

        /*
            Swap value to and origin property
            
            @param [object]: Value object
        */
        flip: function (value) {
            var newTo = value.origin,
                newOrigin = (value.target !== undefined) ? value.target : value.current;

            value.to = newTo;
            value.origin = newOrigin;
        }
    },

    /*
        Perform operation on set of values
        
        @parma [string]: Name of operation
        @param [object]: Value object
    */
    valueOps = function (op, values) {
        var key = '';

        for (key in values) {
            operations[op](values[key]);
        }

        return this;
    };

module.exports = valueOps;