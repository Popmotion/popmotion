"use strict";

var utils = require('../utils/utils.js'),

    /*
        Repo constructor
        
        Creates data store and sets any initialising data
        
        @param [string || object]: Key or data
        @param [var] (optional): Data to store
    */
    Repo = function () {
        this.store = {};
        this.set.apply(this, arguments);
    };

Repo.prototype = {
    
    /*
        Get data or data property
        
        @param [string] (optional): Key
        @returns [var || dataStore]: Data found
    */
    get: function () {
        var args = arguments;
        return (args.length) ? this.store[args[0]] : this.store;
    },
    
    /*
        Set data or data property
        
        @param [string || object]: Key or data
        @param [var] (optional): Data to store
    */
    set: function (data) {
        // If we're being passed an object, add all
        if (utils.isObj(data)) {
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    this.store[key] = data[key];
                }
            }

        // Or add specific property
        } else if (data !== undefined) {
            this.store[data] = arguments[1];
        }

        return this;
    }
    
};

module.exports = Repo;