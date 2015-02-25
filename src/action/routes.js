"use strict";

var utils = require('../utils/utils.js'),
    isProtected = require('../utils/protected.js'),

    routes = {},
    routeKeys = [],
    numRoutes;

module.exports = {
    
    /*
        Add route
        
        @param [string]: Name of route
        @param [object]: Object of route functions
            Valid functions
                .parse
                .onStart
                .onFrame
                .onChange
                .onEnd
    */
    add: function (route) {
        routeKeys.push(route.name);
        numRoutes = routeKeys.length;
        routes[route.name] = route;
    },
    
    /*
        Parse properties for valid Values
        
        Takes two objects, source and destination.
        
        Looks through source and finds any non-protected objects, then sends
        those values to the appropriate parser (default if none added)
        
        @param [object]: Source of values
        @param [object]: Values
    */
    parse: function (source, destination) {
        var routeName = '',
            route,
            i = 0;

        for (; i < numRoutes; i++) {
            routeName = routeKeys[i]
            route = routes[routeName];

            if (route && route.parse) {
                route.parse(source[routeName], destination);
            }
        }
    }
    
};