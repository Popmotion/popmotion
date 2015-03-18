"use strict";

var createStyles = require('./path/builder.js');

module.exports = {
    
    name: 'svgPath',
    
    onStart: function (output, action, values, props) {
        props.pathLength = props.dom.getTotalLength();
    },
    
    onChange: function (output, action, values, props) {
        action.style(createStyles(output, props.pathLength));
    }
};