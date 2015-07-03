"use strict";

var createStyles = require('./path/builder.js');

module.exports = {

    onStart: function (output, element) {
        if (element.element) {
            element.pathLength = element.element.getTotalLength();
        }
    },
    
    onChange: function (output, element) {
        element.style(createStyles(output, element.pathLength));
    }
};