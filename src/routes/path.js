/*
    SVG Path route
    ==============================================

    Dependent on CSS Route
*/
"use strict";

var createStyles = require('./path/build.js');

module.exports = {

    typeMap: {
        stroke: 'color'
    },

    onStart: function () {
        if (this.element) {
            this.pathLength = this.element.getTotalLength();
        }
    },
    
    onChange: function (output) {
        this.css(createStyles(output, this.pathLength));
    }
};