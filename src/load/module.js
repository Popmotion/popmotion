"use strict";

var popmotion = require('../popmotion');

popmotion
    /*
        Core Actions
    */
    .addAction('play', require('../actions/play'))
    .addAction('run', require('../actions/run'))
    .addAction('fire', require('../actions/fire'))
    .addAction('track', require('../actions/track'))
    .addAction('link', require('../actions/link'))

    /*
        Optional value type support
    */
    .addValueType({
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
popmotion.cssRole = require('./roles/css/cssRole');
popmotion.attrRole = require('./roles/attr/attrRole');
popmotion.drawPathRole = require('./roles/path/drawPathRole');
popmotion.movePathRole = require('./roles/path/movePathRole');  

module.exports = popmotion;