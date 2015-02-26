"use strict";

var utils = require('../utils/utils.js'),

    routes = {},
    routeKeys = [],
    numRoutes,
    processes = ['preprocess', 'onChange'],
    
    process = function (processName) {
        return function (sourceValues, action, values, props) {
            var routeName = '',
                route,
                i = 0;
    
            for (; i < numRoutes; i++) {
                routeName = routeKeys[i];
                route = routes[routeName];
    
                if (sourceValues[routeName] && route[processName]) {
                    route[processName](sourceValues[routeName], action, values, props);
                }
            }
        };
    },
    
    manager = {
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
            Run callback once for each route, provide route as argument
            
            @param [function]: Function to run for each route
            @param [object] (optional): Root object to check if route name exists
        */
        shard: function (callback, props) {
            var key = '',
                i = 0;

            for (; i < numRoutes; i++) {
                key = routeKeys[i];

                if ((props && props[key]) || !props) {
                    callback(routes[key]);
                }
            }
        }
    };
    
/*
    Add manager processes
*/
(function () {
    var processesLength = process.length,
        processName = '',
        i = 0;
        
    for (; i < processesLength; i++) {
        processName = processes[i];

        manager[processName] = process(processName);
    }
})();

module.exports = manager; 