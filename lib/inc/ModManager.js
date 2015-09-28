"use strict";

var ModManager = function ModManager() {
    this._keys = [];
    this._numKeys = 0;
};

ModManager.prototype = {

    /*
        Add module key to keys list
         @param [string]: Key to add
    */
    _addKey: function _addKey(name) {
        this._keys.push(name);
        this._numKeys++;
    },

    /*
        Add a new module
         @param [string || object]: Name of new module or multiple modules
        @param [object] (optional): Module to add
    */
    extend: function extend(name, mod) {
        var multiMods = typeof name == 'object',
            mods = multiMods ? name : {},
            key = '';

        // If we just have one module, coerce
        if (!multiMods) {
            mods[name] = mod;
        }

        for (key in mods) {
            if (mods.hasOwnProperty(key)) {
                this._addKey(key);
                this[key] = mods[key];
            }
        }

        return this;
    },

    each: function each(callback) {
        var key = '';

        for (var i = 0; i < this._numKeys; i++) {
            key = this._keys[i];
            callback(key, this[key]);
        }
    }
};

module.exports = ModManager;