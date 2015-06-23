"use strict";

var Redshift = require('../redshift');

        /*
            Add core Actions
        */
Redshift.addAction('play',  require('../actions/play.js'))
        .addAction('run',   require('../actions/run.js'))
        .addAction('track', require('../actions/track.js'))
        .addAction('fire',  require('../actions/fire.js'))
        .addAction('seek',  require('../actions/seek.js'))

        /*
            Add core value Routes
        */
        .addRoute('values', require('../routes/values.js'))
        .addRoute('css',    require('../routes/css.js'))
        .addRoute('attr',   require('../routes/attr.js'))
        .addRoute('path',   require('../routes/path.js'));

module.exports = Redshift;