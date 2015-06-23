"use strict";

var Element,
    ModuleManager = require('../inc/ModuleManager'),

    actionManager = new ModuleManager();
/*
    Add module to ActionManager

    Creates a new Action for Elements
*/
actionManager.extend = function (name, module) {
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

    // Call parent extend method
    ModuleManager.prototype.extend.call(this, name, module);
};

actionManager.setElement = function (element) {
    Element = element;
};

module.exports = actionManager;
