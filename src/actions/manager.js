"use strict";

var Actor,
    ActorGroup,
    utils = require('../inc/utils'),
    generateMethodIterator = require('../actor/system/generate-iterator'),
    genericActionProps = require('./generic/default-action-props'),
    genericValueProps = require('./generic/default-value-props'),

    ModManager = require('../inc/ModManager'),

    actionManager = new ModManager();
/*
    Add module to ActionManager

    Creates a new Action for Elements
*/
actionManager.extend = function (name, mod) {
    var methodName = '';

    /*
        Generate new method for Elements if module doesn't have a
        surpressMethod flag and Element doesn't already have a
        method with that name
    */
    if (!mod.surpressMethod && !Actor.prototype[name]) {
        Actor.prototype[name] = function () {
            this.action = name;
            this.set(mod.parse.apply(this, arguments));

            return this.start();
        };

        ActorGroup.prototype[name] = generateMethodIterator(name);
    }

    // If module has methods to add to Element.prototype
    if (mod.actorMethods) {
        for (methodName in mod.actorMethods) {
            if (mod.actorMethods.hasOwnProperty(methodName)) {
                Actor.prototype[methodName] = mod.actorMethods[methodName];
                ActorGroup.prototype[methodName] = generateMethodIterator(methodName);
            }
        }
    }

    // Merge action props with defaults
    mod.actionDefaults = mod.actionDefaults ? utils.merge(genericActionProps, mod.actionDefaults) : genericActionProps;

    // Merge value props with defaults
    mod.valueDefaults = mod.valueDefaults ? utils.merge(genericValueProps, mod.valueDefaults) : genericValueProps;

    // Call parent extend method
    ModManager.prototype.extend.call(this, name, mod);
};

actionManager.setActor = function (actor) {
    Actor = actor;
};

actionManager.setActorGroup = function (actorGroup) {
    ActorGroup = actorGroup;
};

module.exports = actionManager;
