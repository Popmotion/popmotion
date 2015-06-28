/*
    Values route (Redshift default)
    
    Handles raw values and outputs to user-defined callbacks
*/
"use strict";

var fireCallback = function (name, output, element) {
        if (element[name]) {
            element[name].call(element, output);
        }
    };

module.exports = {
    
    makeDefault: true,
    
    onStart: function (output, element) {
        fireCallback('onStart', output, element)
    },
    
    onFrame: function (output, element) {
        fireCallback('onFrame', output, element);
    },
    
    onChange: function (output, element) {
        fireCallback('onChange', output, element);
    },
    
    onEnd: function (output, element) {
        fireCallback('onEnd', output, element);
    }
    
};