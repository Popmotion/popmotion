"use strict";

var createRole = require('../create-role'),
    createStyles = require('./build.js'),
    each = require('../../inc/utils').each,
    CSSRole = require('../css/CSSRole');

module.exports = createRole({
    init: function () {
        this._typeMap = {
            stroke: 'color'
        };
    },

    onStart: function (element) {
        this.pathLength = element.getTotalLength();
    },

    onUpdate: function (output, element) {
        var styles = createStyles(output, this.pathLength);

        each(styles, function (key, value) {
            CSSRole.prototype.set(key, value, element);
        });
    }
});