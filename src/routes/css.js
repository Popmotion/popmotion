"use strict";

var build = require('./css/build.js'),
    split = require('./css/split.js'),
    
    css = 'css',
    cssOrder = css + 'Order',
    cssCache = css + 'Cache';

module.exports = {
    
    name: css,
    
    preprocess: function (key, value, action) {
        var values = split(key, value);
        
        action.updateOrder(key, false, cssOrder);
        
        return values;
    },
    
    onChange: function (output, action, values, props) {
        props[cssCache] = props[cssCache] || {};
        action.style(build(output, props[cssOrder],  props[cssCache], values));
    }
    
};