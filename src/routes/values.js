"use strict";

var fireCallback = function (name, bucket, action, values, props, data) {
    if (props[name]) {
        props[name].call(props.scope, bucket, data);
    }
}

module.exports = {
    
    makeDefault: true,
    
    name: 'values',
    
    preprocess: function (key, value, action, props) {
        action.setValue(key, value, props);
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