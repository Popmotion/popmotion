"use strict";

module.exports = {
    
    name: 'values',
    
    preprocess: function (key, value, action, props) {
        action.setValue(key, value, props);
    }
    
};