"use strict";

var Element,
    utils = require('../inc/utils'),
    genericActionProps = require('./generic/default-action-props'),
    genericValueProps = require('./generic/default-value-props'),

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
            this.action = name;
            this.set(module.parser.apply(this, arguments));

            return this.start();
        };
    }

    // If module has methods to add to Element.prototype
    if (module.elementMethods) {
        for (methodName in module.elementMethods) {
            Element.prototype[methodName] = module.elementMethods[methodName];
        }
    }

    // Merge action props with defaults
    module.defaultActionProps = module.defaultActionProps ? utils.merge(genericActionProps, module.defaultActionProps) : genericActionProps;

    // Merge value props with defaults
    module.defaultValueProps = module.defaultValueProps ? utils.merge(genericValueProps, module.defaultValueProps) : genericValueProps;

    // Call parent extend method
    ModuleManager.prototype.extend.call(this, name, module);
};

actionManager.setElement = function (element) {
    Element = element;
};

module.exports = actionManager;
