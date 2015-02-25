"use strict";

var utils = require('../utils/utils.js'),
    isProtected = require('../utils/protected.js'),

    routes = {
        css: {
            
        },

        attr: {
            
        }
    };

module.exports = {
    
    // [Array]: Route tokens
    routeKeys = ['css', 'attr'],
    
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
        var route = '';
        
        for (var key in source) {
            if (utils.isObj(source[key]) && !isProtected(key) && key !== 'values') {
                route = (routes[key] && routes[key].parse) ? key : 'generic';

                routes[route].parse(source[key], destination);
            }
        }
        
    }
    
}