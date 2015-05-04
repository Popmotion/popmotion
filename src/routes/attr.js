"use strict";

module.exports = {

    onChange: function (output, action, values, props) {
        var dom = props.dom;

        if (dom) {
            for (var key in output) {
                dom.setAttribute(key, output[key]);
            }
        }
    }
};