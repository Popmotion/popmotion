"use strict";

var Role = require('../Role');
var each = require('../../inc/utils').each;

/*
    Convert percentage to pixels
    
    @param [number]: Percentage of total length
    @param [number]: Total length
*/
var percentToPixels = function (percentage, length) {
    return (parseFloat(percentage) / 100) * length + 'px';
}

/*
    Create styles
    
    @param [object]: SVG Path properties
    @param [object]: Length of path
    @returns [object]: Key/value pairs of valid CSS properties
*/
var createStyles = function (props, length) {
    var hasDashArray = false,
        dashArrayStyles = {
            length: 0,
            spacing: length + 'px'
        },
        styles = {};

    each(props, function (key, value) {
        key = SVGDrawPath._map[key] || key;

        switch (key) {
            case 'length',
            case 'spacing':
                hasDashArray = true;
                dashArrayStyles[key] = percentToPixels(value, length);
                break;
            case 'offset':
                styles[key] = percentToPixels(-value, length);
                break;
            default:
                styles[key] = value;
        }
    });

    if (hasDashArray) {
        styles[SVGDrawPath._map.length] = dashArrayStyles.length + ' ' + dashArrayStyles.spacing;
    }

    return styles;
};

/*
    Draw Path role
*/
var SVGDrawPath = new Role({
    _map: require('./map'),

    typeMap: {
        stroke: 'color'
    },

    init: function () {
        this.pathLength = this.element.getTotalLength();
    },

    /*
        Update `path` styles and if `element` is present, set
        x, y and rotation
    */
    update: function (state) {
        CSSRole.update.call(actor, createStyles(state, this.pathLength));
    }
});

module.exports = SVGDrawPath;