/*
    Repo class
    
    A data repository that implements getters, setters and offers defaults
    functionality
*/
"use strict";

var Repo = function (defaults) {
        this.data = {};
    };

Repo.prototype = {

    /*
        Get all data
        
        @returns [object]: Full data object
    */
    getAll: function () {
        return this.data;
    },
    
    /*
        Get information
        
        @param [string]: Data key
        @returns [var]: Data found at key
    */
    get: function (key) {
        return this.data[key];
    },
    
    /*
        Set information
        
        @param [string]: Key
        @param [var]: Data to set at key
        @returns [Repo]
    */
    set: function (key, value) {
        this.data[key] = value;
        return this;
    }
};

module.exports = Repo;