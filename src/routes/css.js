"use strict";

var build = require('./css/build.js'),
    split = require('./css/split.js'),
    
    css = 'css',
    cssOrder = css + 'Order',
    cssCache = css + 'Cache';

module.exports = {
    preprocess: function (key, value, action) {
        var values = split(key, value);
        
        action.updateOrder(key, false, cssOrder);
        
        return values;
    },
    
    onChange: function (output, action, values) {
        action[cssCache] = action[cssCache] || {};
        action.style(build(output, action[cssOrder],  action[cssCache], values));
    }
    
};