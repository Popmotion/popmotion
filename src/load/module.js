"use strict";

var popmotion = require('../popmotion');

popmotion
    /*
        Core Cowabunga route
    */
    .addRoute('values', require('../routes/values'))
    /*
        Core Cowabunga Actions
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
    })

    /*
        CSS/Attr route - dependent on core value types being present
    */
    .addRoute('css', require('../routes/css'))
    .addRoute('attr', require('../routes/attr'))

    /*
        SVG route - dependent on DOM route
    */
    .addRoute('path', require('../routes/path'));

module.exports = popmotion;