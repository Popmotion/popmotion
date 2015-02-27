"use strict";

module.exports = {
    
    name: 'css',
    
    preprocess: function (key, value, action, props) {
        //action.setValue(key, value, props, this.name);
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