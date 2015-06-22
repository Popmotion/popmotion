"use strict";

var lookup = require('./lookup.js'),

    /*
        Convert percentage to pixels
        
        @param [number]: Percentage of total length
        @param [number]: Total length
    */
    percentToPixels = function (percentage, length) {
        return (parseFloat(percentage) / 100) * length + 'px';
    };

/*
    Create styles
    
    @param [object]: SVG Path properties
    @param [object]: Length of path
    @returns [object]: Key/value pairs of valid CSS properties
*/
module.exports = function (props, pathLength) {
    var hasArray = false,
        svgProperty = '',
        arrayStyles = {
            length: 0,
            spacing: pathLength + 'px'
        },
        pathStyles = {};

    // Loop over each property and create related css property
    for (var key in props) {
        if (props.hasOwnProperty(key)) {
            svgProperty = lookup[key];
            
            switch (key) {
                case 'length':
                case 'spacing':
                    hasArray = true;
                    arrayStyles[key] = percentToPixels(props[key], pathLength);
                    break;
                case 'offset':
                    pathStyles[svgProperty] = percentToPixels(-props[key], pathLength);
                    break;
                default:
                   pathStyles[svgProperty] = props[key]; 
            }
        }
    }
    
    if (hasArray) {
        pathStyles[lookup.length] = arrayStyles.length + ' ' + arrayStyles.spacing;
    }
    
    return pathStyles;
};