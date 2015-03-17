"use strict";

module.exports = {
    
    name: 'svgPath',
    
    onChange: function (output, action, values, props) {
        action.style({
            'stroke-dashoffset': output.start,
            'stroke-dasharray': output.length + output.spacing // spacing default 100%
        });
    }
};