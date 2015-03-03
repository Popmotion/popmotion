"use strict";

var build = require('./css/build.js'),
    split = require('./css/split.js'),
    styler = require('./css/styler.js'),
    
    cssOrder = 'cssOrder';

module.exports = {
    
    name: 'css',
    
    preprocess: function (key, value, action, props) {
        var values = split(key, value);
        
        action.updateOrder(key, false, cssOrder);

        for (key in values) {
            action.setValue(key, values[key], props, this.name);
        }
    },
    
    onChange: function (output, action, values, props) {
        var dom = props.dom;

        if (dom) {
            styler(props.dom, build(output, props[cssOrder], props.css, values));
        }
    }
    
};