"use strict";

var routes = require('../core/routes.js'),
    routeKeys = [],
    numRoutes,
    
    has = function (name) {
        return (routeKeys.indexOf(name) > -1) ? true : false;
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

module.exports = manager; 