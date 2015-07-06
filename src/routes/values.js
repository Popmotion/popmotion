/*
    Values route (Redshift default)
    
    Handles raw values and outputs to user-defined callbacks
*/
"use strict";

var valuesRoute = {},

    fireCallback = function (name, output, actor) {
        if (actor[name]) {
            actor[name].call(actor, output);
        }
    };

['onStart', 'onFrame', 'onChange', 'onEnd'].forEach(function (key) {
    valuesRoute[key] = function (output, actor) {
        fireCallback(key, output, actor);
    };
});

module.exports = valuesRoute;