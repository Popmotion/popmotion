"use strict";

var Output = require('../Output'),
    createStyles = require('./build.js'),
    each = require('../../inc/utils').each,
    CSSOutput = require('../css/CSSOutput');

module.exports = new Output({
    typeMap: {
        stroke: 'color'
    },

    onStart: function (element) {
        this.pathLength = element.getTotalLength();
    },

    onUpdate: function (output, element) {
        var styles = createStyles(output, this.pathLength);

        each(styles, function (key, value) {
            CSSOutput.prototype.set(key, value, element);
        });
    }
});