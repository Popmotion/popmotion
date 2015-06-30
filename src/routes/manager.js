"use strict";

var ModuleManager = require('../inc/ModuleManager'),
    routeManager = new ModuleManager();

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
        route = routeIsValid ? validRoutes[key] : 'values';

        if (routeIsValid || key === 'values') {
            callback(this[key], key, route);
        }
    }
};

module.exports = routeManager;