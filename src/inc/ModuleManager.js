"use strict";

var ModuleManager = function () {};

ModuleManager.prototype = {

    extend: function (name, module) {
        this[name] = module;
    }
};

module.exports = ModuleManager;