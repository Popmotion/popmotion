"use strict";

module.exports = {
    
    name: 'svgPath',
    
    onStart: function () {
        action.dom.getTotalLength();
    },
    
    onChange: function (output, action, values, props) {
        action.style({
            'stroke': output.color
            'stroke-opacity': output.opacity
            'stroke-dashwidth': output.width
            'stroke-dashoffset': output.start,
            'stroke-dasharray': output.length + ' ' + output.spacing // spacing default 100%
        });
    }
};