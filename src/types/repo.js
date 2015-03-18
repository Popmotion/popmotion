"use strict";

var utils = require('../utils/utils.js'),

    createRepo = function () {
        var store = {},
        
            /*
                Determine whether call is getter or setter
            */
            repository = function () {
                // If this is a getter, return value
                if ((!arguments.length || utils.isString(arguments[0]))) {
                    return this.get.apply(this, arguments);
                
                // Or this is a setter, return this
                } else {
                    return this.set.apply(this, arguments);
                }
            };
        
    
        /*
            Get data with specified key
            
            @param [string]: Name of property to access
            @returns [var]: Data found
        */
        repository.get = function (key) {
            return store[key] ? store[key] : store;
        };
    
    
        /*
            Set data either has object or key/value pair
            
            Syntax
                .set(data)
                    @param [object]: Data to store
                    
                .set(key, value)
                    @param [string]: Name of data
                    @param [val]: Data to store
        */
        repository.set = function (data, prop) {
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
                    store[key] = toSet[key];
                }
            }
            
            return this;
        };
        
        return repository;
    };

module.exports = createRepo;