"use strict";

var split = require('./css/split.js');

module.exports = {
    
    name: 'css',
    
    preprocess: function (key, value, action, props) {
        var values = split(key, value),
            key = '';
        
        for (key in values) {
            action.setValue(key, values[key], props, this.name);
        }
    },
    
    onChange: function (output, action, values, props) {
        var dom = props.dom;

        if (dom) {
            //for (var key in output) {
            //    dom.setAttribute(key, output[key]);
            //}
        }
    }
    
};