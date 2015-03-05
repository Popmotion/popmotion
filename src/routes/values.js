/*
    Values route (Redshift default)
    
    Handles raw values and outputs to user-defined callbacks
*/
"use strict";

var generateCallbackFire = function (name) {
        return function () {
            fireCallback.apply(this, [].slice.call(arguments).unshift(name));
        }
    },
    
    fireCallback = function (name, bucket, action, values, props, data) {
        if (props[name]) {
            props[name].call(props.scope, bucket, data);
        }
    },
    
    callbacks = ['onChange', 'onFrame', 'onEnd'],
    
    valuesRoute = {
        makeDefault: true,
        
        name: 'values',
        
        preprocess: function (key, value, action, props) {
            action.setValue(key, value, props);
        }
    },
    
    i = 0,
    
    callbackName = '';
    
for (; i < callbacks.length; i++) {
    callbackName = callbacks[i];
    valuesRoute[callbackName] = generateCallbackFire(callbackName);
}

module.exports = valuesRoute;