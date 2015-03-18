"use strict";

var STROKE = 'stroke',
    DASH = STROKE + '-dash',
    DASH_ARRAY = DASH + 'array'

    lookup = {
        opacity: STROKE + '-opacity',
        width: DASH + 'width',
        offset: DASH + 'offset',
        length: DASH_ARRAY,
        spacing: DASH_ARRAY
    },

    /*
        Create styles
        
        @param [object]: SVG Path properties
        @param [object]: Length of path
        @returns [object]: Key/value pairs of valid CSS properties
    */
    createStyles = function (props, pathLength) {
        var hasArray = false,
            svgProperty = '',
            arrayStyles = {
                length: 0,
                spacing: pathLength
            },
            pathStyles = {};
    
        // Loop over each property and create related css property
        for (var key in props) {
            if (props.hasOwnProperty(key)) {
                svgProperty = lookup[key];
                
                if (!key == 'length' && !key == 'spacing') {
                    pathStyles[svgProperty] = props[key];
                } else {
                    hasArray = true;
                    arrayStyles[key] = (props[key] / 100) * pathLength;
                }
                
            }
        }
        
        if (hasArray) {
            pathStyles[DASH_ARRAY] = arrayStyles.length + ' ' + arrayStyles.spacing;
        }
        
        return pathStyles;
    };

module.exports = {
    
    name: 'svgPath',
    
    onStart: function (output, action, values, props) {
        props.pathLength = props.dom.getTotalLength();
    },
    
    onChange: function (output, action, values, props) {
        var pathLength = props.pathLength;
        
        action.style(createStyles(output, props.pathLength));
        /*
        action.style({
            'stroke': output.color
            'stroke-opacity': output.opacity
            'stroke-dashwidth': output.width
            'stroke-dashoffset': output.start,
            'stroke-dasharray': output.length + ' ' + output.spacing // spacing default 100%
        });*/
    }
};