/*
    Values route (Redshift default)
    
    Handles raw values and outputs to user-defined callbacks
*/
"use strict";

var fireCallback = function (name, bucket, action, values, props, data) {
        if (props[name]) {
            props[name].call(props.scope, bucket, data);
        }
    };

module.exports = {
    
    makeDefault: true,
    
    onStart: function (bucket, action, values, props, data) {
        if (props.onStart) {
            props.onStart.call(props.scope, data);
        }
    },
    
    onFrame: function (bucket, action, values, props, data) {
        fireCallback('onFrame', bucket, action, values, props, data);
    },
    
    onChange: function (bucket, action, values, props, data) {
        fireCallback('onChange', bucket, action, values, props, data);
    },
    
    onEnd: function (bucket, action, values, props, data) {
        fireCallback('onEnd', bucket, action, values, props, data);
    }
    
};