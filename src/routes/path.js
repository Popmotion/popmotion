"use strict";

module.exports = {
    
    name: 'svgPath',
    
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

var myPath = redshift.newAction({
    dom: yourSVG
});

myPath.play({
    svgPath: {
        width: 100
    }
}, 500);