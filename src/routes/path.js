"use strict";

var createStyles = require('./path/builder.js');

module.exports = {

    onStart: function (bucket, action) {
        if (action.dom) {
            action.pathLength = action.dom.getTotalLength();
        }
    },
    
    onChange: function (output, action) {
        action.style(createStyles(output, action.pathLength));
    }
};