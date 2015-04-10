"use strict";

var utils = require('../utils/utils.js'),

    /*
        Get data with specified key
        
        @param [string]: Name of property to access
        @returns [var]: Data found
    */
    get = function (key) {
        return (key !== undefined) ? this[key] : this;
    },
            
    /*
        Set data either has object or key/value pair
        
        Syntax
            .set(data)
                @param [object]: Data to store
                
            .set(key, value)
                @param [string]: Name of data
                @param [val]: Data to store
    */
    set = function (data, prop) {
        var multiArg = (arguments.length > 1),
            toSet = multiArg ? {} : data,
            key = '';
        
        // If this is a key/value setter, add to toSet
        if (multiArg) {
            toSet[data] = prop;
        }
        
        // Loop over toSet and assign to our data store
        for (key in toSet) {
            if (toSet.hasOwnProperty(key)) {
                this[key] = toSet[key];
            }
        }
    },

    /*
        Repo class
    */
    Repo = function (context) {
        var store = {};

        /*
            Determine whether call is getter or setter
        */
        return function () {
            var argsLength = arguments.length;

            // If this is a getter, return value
            if ((!argsLength || (argsLength === 1 && utils.isString(arguments[0])))) {
                return get.apply(store, arguments);

            // Or this is a setter, return this
            } else {
                set.apply(store, arguments);
                return context;
            }
        };
    };

module.exports = Repo;