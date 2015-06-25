"use strict";

var lookup = require('./css/lookup');

module.exports = {
    typeMap: lookup,

    preprocess: function (key, value, action) {
        var values = split(key, value, action);
        
        action.updateOrder(key, false, cssOrder);
        
        return values;
    },
    
    onChange: function (output, action, values) {
        action[cssCache] = action[cssCache] || {};
        action.style(build(output, action[cssOrder],  action[cssCache], values));
    }
    
};