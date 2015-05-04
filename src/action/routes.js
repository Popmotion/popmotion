"use strict";

var routes = require('../core/routes.js'),
    routeKeys = [],
    numRoutes,
    processes = ['preprocess', 'onStart', 'onEnd'],
    
    has = function (name) {
        return (routeKeys.indexOf(name) > -1) ? true : false;
    },
    
    process = function (processName) {
        return function (sourceValues, action, values, props, data) {
            var routeName = '',
                route,
                i = 0;
    
            for (; i < numRoutes; i++) {
                routeName = routeKeys[i];
                route = routes[routeName];
    
                if (route.makeDefault || (route[processName] && props[processName])) {
                    route[processName](sourceValues[routeName], action, values, props, data);
                }
            }
        };
    },
    
    manager = {
        
        /*
            Add route
            
            @param [object]: Object of route functions
                Valid methods
                    .preprocess
                    .onStart
                    .onFrame
                    .onChange
                    .onEnd
        */
        add: function (name, route) {
            routeKeys.push(name);
            numRoutes = routeKeys.length;
            
            if (route.makeDefault) {
                this.defaultRoute = name;
            }
            
            route.name = name;
            routes[name] = route;
            
            return this;
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
                    callback(routes[key], props[key]);
                }
            }
        },
        
        getName: function (name) {
            return (name !== undefined && has(name)) ? name : this.defaultRoute;
        }
    };
    
(function () {
    var processesLength = processes.length,
        processName = '',
        i = 0;

    for (; i < processesLength; i++) {
        processName = processes[i];
        manager[processName] = process(processName);
    }
})();

module.exports = manager; 