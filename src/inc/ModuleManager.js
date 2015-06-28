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
    _addKey: function (name) {
        this._keys.push(name);
        this._numKeys++;
    },

    /*
        Add a new module

        @param [string || object]: Name of new module or multiple modules
        @param [object] (optional): Module to add
    */
    extend: function (name, module) {
        var multiModules = (typeof name == 'object'),
            modules = multiModules ? name : {},
            key = '';

        // If we just have one module, coerce
        if (!multiModules) {
            modules[name] = module;
        }

        for (key in modules) {
            this._addKey(key);
            this[key] = modules[key];
        }

        return this;
    }
};

module.exports = ModuleManager;