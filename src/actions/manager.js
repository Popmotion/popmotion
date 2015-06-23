"use strict";

var Element,
    ModuleManager = require('../inc/ModuleManager'),

    actionManager = new ModuleManager();
/*
    Add module to ActionManager

    Creates a new Action for Elements
*/
actionManager.extend = function (name, module) {
    var methodName = '';
    /*
        Generate new method for Elements if module doesn't have a
        surpressMethod flag and Element doesn't already have a
        method with that name
    */
    if (!module.surpressMethod && !Element.prototype[name]) {
        Element.prototype[name] = function () {
            this.set(module.parser.apply(this, arguments));
            this.action = name;

            return this.start();
        };
    }

    if (module.elementMethods) {
        for (methodName in module.elementMethods) {
            Element.prototype[methodName] = module.elementMethods[methodName];
        }
    }

    // Call parent extend method
    ModuleManager.prototype.extend.call(this, name, module);
};

actionManager.setElement = function (element) {
    Element = element;
};

module.exports = actionManager;
