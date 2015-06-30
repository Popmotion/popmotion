"use strict";

var Element,

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
        }
    },

    ModManager = require('../inc/ModManager'),
    elementTypeManager = new ModManager;

elementTypeManager.extend = function (name, mod) {
    var methodName = '';

    for (methodName in mod) {
        if (mod.hasOwnProperty(methodName) && !Element.prototype[methodName]) {
            Element.prototype[methodName] = generateFunction(methodName);
        }
    }

    // Call parent extend method
    ModManager.prototype.extend.call(this, name, mod);
};

elementTypeManager.setElement = function (element) {
    Element = element;
};

module.exports = elementTypeManager;