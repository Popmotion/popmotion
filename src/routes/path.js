"use strict";

var createStyles = require('./path/builder.js');

module.exports = {

    onStart: function (output, action, values, props) {
        if (props.dom) {
            props.pathLength = props.dom.getTotalLength();
        }
    },
    
    onChange: function (output, action, values, props) {
        action.style(createStyles(output, props.pathLength));
    }
};