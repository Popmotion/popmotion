"use strict";

var getterSetter = require('../inc/getter-setter'),
    generateMethodIterator = require('../actor/system/generate-iterator'),
    ModManager = require('../inc/ModManager'),
    routeManager = new ModManager(),
    Actor,
    ActorCollection;

routeManager.extend = function (name, mod) {
    // Generate getter/setter
    if (mod.get && mod.set) {
        Actor.prototype[name] = function (key, value) {
            getterSetter.call(this, key, value, mod.get, mod.set);
        };

        ActorCollection.prototype[name] = generateMethodIterator(name);
    }

    // Call parent extend method
    ModManager.prototype.extend.call(this, name, mod);
};

/*
    Shard function

    Run callback once for every value route

    @param [function]: Function to run for each route
    @param [object] (optional): Object containing keys of routes to check
*/
routeManager.shard = function (callback, validRoutes) {
    var key = '',
        route = '',
        routeIsValid = false,
        i = 0;

    for (; i < this._numKeys; i++) {
        key = this._keys[i];
        routeIsValid = (validRoutes && validRoutes.hasOwnProperty(key));
        route = routeIsValid ? validRoutes[key] : {};

        // If we've been given this route, or this is the default route ('values')
        if (routeIsValid || key === 'values') {
            callback(this[key], key, route);
        }
    }
};

routeManager.setActor = function (actor) {
    Actor = actor;
};

routeManager.setActorCollection = function (actorCollection) {
    ActorCollection = actorCollection;
};

module.exports = routeManager;