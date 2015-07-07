"use strict";

var Actor,

    /*
        Generate an Element function
    */
    generateFunction = function (name) {
        return function () {
            var type = this.type,
                returnVal;
            if (type && type[name]) {
                returnVal = type[name].apply(this, arguments);
            }
            return returnVal;
        };
    },

    ModManager = require('../inc/ModManager'),
    actorTypeManager = new ModManager();

actorTypeManager.extend = function (name, mod) {
    var methodName = '';

    for (methodName in mod) {
        if (mod.hasOwnProperty(methodName) && !Actor.prototype.hasOwnProperty(methodName)) {
            Actor.prototype[methodName] = generateFunction(methodName);
        }
    }
    // Call parent extend method
    ModManager.prototype.extend.call(this, name, mod);
};

actorTypeManager.setActor = function (actor) {
    Actor = actor;
};

module.exports = actorTypeManager;