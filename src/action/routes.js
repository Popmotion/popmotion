"use strict";

var defaultRoute = require('../routes/values.js'),
    cssRoute = require('../routes/css.js'),
    attrRoute = require('../routes/attr.js'),

    routes = {},
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
    
                if (route.makeDefault || route[processName]) {
                    route[processName](sourceValues[routeName], action, values, props, data);
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
            
            if (route.makeDefault) {
                this.defaultRoute = route.name;
            }
            
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
                    callback(routes[key], props[key]);
                }
            }
        },
        
        getName: function (name) {
            return (name !== undefined && has(name)) ? name : this.defaultRoute;
        }
    };
    
/*
    Add manager processes
*/
(function () {
    var processesLength = processes.length,
        processName = '',
        i = 0;
        
    for (; i < processesLength; i++) {
        processName = processes[i];
        manager[processName] = process(processName);
    }
    
    manager.add(defaultRoute);
    manager.add(cssRoute);
    manager.add(attrRoute);
})();

module.exports = manager; 