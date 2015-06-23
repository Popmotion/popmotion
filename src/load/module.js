"use strict";

var Redshift = require('../redshift');
console.time('load');
Redshift
    .addValueType('hsl', require('../value-types/hsl'))
    .addValueType('rgb', require('../value-types/rgb'))
    .addValueType('hex', require('../value-types/hex'))

    .addElementType('dom', require('../element-types/dom'))

    .addAction('play', require('../actions/play'))
    .addAction('run', require('../actions/run'))
    .addAction('fire', require('../actions/fire'))
    .addAction('track', require('../actions/track'))
    .addAction('seek', require('../actions/seek'));

console.timeEnd('load');

//Redshift.addAction()

        /*
            Add core Actions
        
Redshift.addAction('play',  require('../actions/play.js'))
        .addAction('run',   require('../actions/run.js'))
        .addAction('track', require('../actions/track.js'))
        .addAction('fire',  require('../actions/fire.js'))
        .addAction('seek',  require('../actions/seek.js'))

        /*
            Add core value Routes
        
        .addRoute('values', require('../routes/values.js'))
        .addRoute('css',    require('../routes/css.js'))
        .addRoute('attr',   require('../routes/attr.js'))
        .addRoute('path',   require('../routes/path.js'));
*/
module.exports = Redshift;