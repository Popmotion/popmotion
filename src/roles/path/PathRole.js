"use strict";

var createRole = require('../create-role'),
    createStyles = require('./path/build.js');

module.exports = createRole({

    onStart: function (element) {
        this.pathLength = element.getTotalLength();
    },

    update: function (output) {
        CALL CSS ROUTe (createStyles(output, this.pathLength));
    },

    typeMap: {
        stroke: 'color'
    }

});