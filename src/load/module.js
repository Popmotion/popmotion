"use strict";

var Redshift = require('../redshift');

Redshift
    .addValueType('hsl', require('../value-types/hsl'))
    .addValueType('rgb', require('../value-types/rgb'))
    .addValueType('hex', require('../value-types/hex'))

    .addAction('play', require('../actions/play'));

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