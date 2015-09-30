"use strict";

var getAngle = require('../../inc/calc').angle;

var calcRotation = function calcRotation(path, point, distance) {
    var testPoint = this.path.getPointAtLength(distance + 0.2);

    return getAngle(point, testPoint);
};

var SVGMovePathRole = {
    init: function init() {
        this.pathLength = this.path.getTotalLength();
    },

    update: function update(state) {
        var distance = state.progress * this.pathLength,
            newPoint = this.path.getPointAtLength(distance),
            rotation = this.autoRotate ? calcRotation(this.path, newPoint, distance) : state.rotation || 0;

        this.element.setAttribute('transform', 'translate(' + newPoint.x + ', ' + newPoint.y + ') rotate(' + rotation + ')');
    }
};

module.exports = SVGMovePathRole;