"use strict";

var ModuleManager = function () {
        this._keys = [];
        this._numKeys = 0;
    };

ModuleManager.prototype = {

    /*
        Add module key to keys list

        @param [string]: Key to add
    */
    addKey: function (name) {
        this._keys.push(name);
        this._numKeys++;
    },

    /*
        Add a new module

        @param [string]: Name of new module
        @param [object]: Module to add
    */
    extend: function (name, module) {
        this._addKey(name);
        this[name] = module;
    }
};

module.exports = ModuleManager;