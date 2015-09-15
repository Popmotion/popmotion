"use strict";

var Role = require('../Role'),
    attrRole = require('../attr/attrRole'),
    build = require('../svg/build'),
    each = require('../../inc/utils').each,
    COLOR = 'color';

module.exports = new Role({
    name: 'svg',

    _typeMap: {
        fill: COLOR,
        stroke: COLOR
    },

    init: function init() {
        console.log(this.element.getBBox());
    },

    update: function update(state) {
        var actor = this;

        each(build(state), function (key, value) {
            attrRole.set.call(actor, key, value);
        });
    }

});