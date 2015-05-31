/*
    Values route (Redshift default)
    
    Handles raw values and outputs to user-defined callbacks
*/
"use strict";

var fireCallback = function (name, bucket, action, values) {
        if (action[name]) {
            action[name].call(action.scope, bucket);
        }
    };

module.exports = {
    
    makeDefault: true,
    
    onStart: function (bucket, action, values) {
        if (action.onStart) {
            action.onStart.call(action.scope);
        }
    },
    
    onFrame: function (bucket, action, values) {
        fireCallback('onFrame', bucket, action, values);
    },
    
    onChange: function (bucket, action, values) {
        fireCallback('onChange', bucket, action, values);
    },
    
    onEnd: function (bucket, action, values) {
        fireCallback('onEnd', bucket, action, values);
    }
    
};