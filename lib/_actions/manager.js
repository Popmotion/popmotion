"use strict";

var Actor,
    ActorCollection,
    utils = require('../inc/utils'),
    generateMethodIterator = require('../actor/system/generate-iterator'),
    genericActionProps = require('./generic/default-action-props'),
    genericValueProps = require('./generic/default-value-props'),
    genericParse = require('./generic/parse-args'),
    ModManager = require('../inc/ModManager'),
    actionManager = new ModManager();
/*
    Add module to ActionManager

    Creates a new Action for Actors
*/
actionManager.extend = function (name, mod) {
    var methodName = '',
        parse;

    /*
        Generate new method for Actors if module doesn't have a
        surpressMethod flag and Actor doesn't already have a
        method with that name
    */
    if (!mod.surpressMethod && !Actor.prototype[name]) {
        parse = mod.parse || genericParse;

        Actor.prototype[name] = function () {
            this.action = name;
            this.set(parse.apply(this, arguments));

            return this.start();
        };

        ActorCollection.prototype[name] = generateMethodIterator(name);
    }

    // If module has methods to add to Actor.prototype
    if (mod.actorMethods) {
        for (methodName in mod.actorMethods) {
            if (mod.actorMethods.hasOwnProperty(methodName)) {
                Actor.prototype[methodName] = mod.actorMethods[methodName];
                ActorCollection.prototype[methodName] = generateMethodIterator(methodName);
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

actionManager.setActorCollection = function (actorCollection) {
    ActorCollection = actorCollection;
};

module.exports = actionManager;