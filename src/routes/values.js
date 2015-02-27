"use strict";

module.exports = {
    
    makeDefault: true,
    
    name: 'values',
    
    preprocess: function (key, value, action, props) {
        action.setValue(key, value, props);
    },
    
    onStart: function () {
        
    },
    
    onFrame: function (bucket, action, values, props, data) {
        if (props.onFrame) {
            props.onFrame.call(props.scope, bucket, data);
        }
    },
    
    onChange: function (bucket, action, values, props, data) {
        if (props.onChange) {
            props.onChange.call(props.scope, bucket, data);
        }
    },
    
    onEnd: function (bucket, action, values, props, data) {
        if (props.onEnd) {
            props.onEnd.call(props.scope, bucket, data);
        }
    }
    
};