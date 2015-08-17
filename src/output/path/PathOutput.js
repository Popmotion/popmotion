"use strict";

var Output = require('../Output'),
    createStyles = require('./build.js'),
    each = require('../../inc/utils').each,
    CSSOutput = require('../css/CSSOutput');

module.exports = new Output({
    typeMap: {
        stroke: 'color'
    },

    onStart: function (output, actor) {
        actor.pathLength = actor.element.getTotalLength();
    },

    onUpdate: function (output, actor) {
        var styles = createStyles(output, actor.pathLength);

        each(styles, function (key, value) {
            CSSOutput.prototype.set(key, value, element);
        });
    }
});