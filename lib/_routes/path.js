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

    onStart: function onStart() {
        if (this.element) {
            this.pathLength = this.element.getTotalLength();
        }
    },

    onChange: function onChange(output) {
        this.css(createStyles(output, this.pathLength));
    }
};