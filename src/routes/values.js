/*
    Values route (Redshift default)
    
    Handles raw values and outputs to user-defined callbacks
*/
"use strict";

var valuesRoute = {},

    fireCallback = function (name, output, element) {
        if (element[name]) {
            element[name].call(element, output);
        }
    };

['onStart', 'onFrame', 'onChange', 'onEnd'].forEach(function (key) {
    valuesRoute[key] = function (output, element) {
        fireCallback(key, output, element);
    };
});

module.exports = valuesRoute;