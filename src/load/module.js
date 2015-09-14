"use strict";

var popmotion = require('../popmotion');

/*
    Add optional custom value type support
*/
popmotion.addValueType({
    alpha: require('../value-types/alpha'),
    angle: require('../value-types/angle'),
    px: require('../value-types/px'),
    hsl: require('../value-types/hsl'),
    rgb: require('../value-types/rgb'),
    hex: require('../value-types/hex'),
    color: require('../value-types/color'),
    positions: require('../value-types/positions'),
    dimensions: require('../value-types/dimensions'),
    shadow: require('../value-types/shadow')
});

/*
    Predefined roles
*/
popmotion.attr = require('../roles/attr/attrRole');
popmotion.css = require('../roles/css/cssRole');
popmotion.svg = require('../roles/svg/svgRole');
popmotion.drawPath = require('../roles/path/drawPathRole');
popmotion.movePath = require('../roles/path/movePathRole');  

module.exports = popmotion;