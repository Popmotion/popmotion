"use strict";

var Element,

    /*
        Generate an Element function
    */
    generateFunction = function (name) {
        return function () {
            var type = this.type;
            if (type && type[name]) {
                type[name].apply(this, arguments);
            }
        }
    },

    ModuleManager = require('../inc/ModuleManager'),
    elementTypeManager = new ModuleManager;

elementTypeManager.extend = function (name, module) {
    var methodName = '';

    for (methodName in module) {
        if (module.hasOwnProperty(methodName) && !Element.prototype[methodName]) {
            Element.prototype[methodName] = generateFunction(methodName);
        }
    }

    // Call parent extend method
    ModuleManager.prototype.extend.call(this, name, module);
};

elementTypeManager.setElement = function (element) {
    Element = element;
};

module.exports = elementTypeManager;