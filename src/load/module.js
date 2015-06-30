"use strict";

var Redshift = require('../redshift');

Redshift
    /*
        Core Redshift route
    */
    .addRoute('values', require('../routes/values'))
    /*
        Core Redshift Actions
    */
    .addAction('play', require('../actions/play'))
    .addAction('run', require('../actions/run'))
    .addAction('fire', require('../actions/fire'))
    .addAction('track', require('../actions/track'))

    /*
        Seek Action - depedent on 'play' Action
    */
    .addAction('seek', require('../actions/seek'))

    /*
        Optional value type support
    */
    .addValueType('px', require('../value-types/px'))
    .addValueType('angle', require('../value-types/angle'))
    .addValueType('hsl', require('../value-types/hsl'))
    .addValueType('rgb', require('../value-types/rgb'))
    .addValueType('hex', require('../value-types/hex'))
    .addValueType('color', require('../value-types/color'))
    .addValueType('positions', require('../value-types/positions'))
    .addValueType('dimensions', require('../value-types/dimensions'))
    .addValueType('shadow', require('../value-types/shadow'))

    /*
        DOM Element type and CSS/Attr route - dependent on core value types being present
    */
    .addElementType('dom', require('../element-types/dom'))
    .addRoute('css', require('../routes/css'))
    .addRoute('attr', require('../routes/attr'))

    /*
        SVG route - dependent on DOM route
    */
    .addRoute('path', require('../routes/path'));

module.exports = Redshift;