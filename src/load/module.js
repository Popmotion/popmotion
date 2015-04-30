"use strict";

var redshift = require('../redshift.js');

redshift
    // Add default Rubix processor modules
    .addRubix('angleAndDistance',   require('../rubix/angle-distance.js'))
    .addRubix('fire',               require('../rubix/fire.js'))
    .addRubix('link',               require('../rubix/link.js'))
    .addRubix('play',               require('../rubix/play.js'))
    .addRubix('run',                require('../rubix/run.js'))
    .addRubix('track',              require('../rubix/track.js'))
    
    // Add DOM value routes
    .addRoute('values', require('../routes/values.js'))
    .addRoute('css',    require('../routes/css.js'))
    .addRoute('attr',   require('../routes/attr.js'))
    .addRoute('path',   require('../routes/path.js'));

// Check if we need to shim requireAnimationFrame - TODO replace this with
// a more general environment check, for instance node or react native
require('../utils/shim.js');

module.exports = redshift;