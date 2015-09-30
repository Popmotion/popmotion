"use strict";

var Role = require('../Role'),
    attrRole = require('../attr/attrRole'),
    build = require('./build'),
    each = require('../../inc/utils').each;

module.exports = new Role({
    name: 'svg',

    _map: require('../css/map'),
    _typeMap: require('./type-map'),

    start: function () {
        var boundingBox = this.element.getBBox(),
            values = this.values,
            // TODO: Support px
            transformOriginX = values.transformOriginX ? values.transformOriginX.current : 50,
            transformOriginY = values.transformOriginY ? values.transformOriginY.current : 50,
            origin = {
                x: boundingBox.width * (transformOriginX / 100) + boundingBox.x,
                y: boundingBox.height * (transformOriginY / 100) + boundingBox.y
            };

        this.svgOrigin = origin;
    },

    update: function (state) {
        var actor = this;
        each(build(state, this.svgOrigin), function (key, value) {
            attrRole.set(actor.element, key, value);
        });
    }

});