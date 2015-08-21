"use strict";

var getAngle = require('../../inc/calc').angle;

var calcRotation = function (path, point, distance) {
    var testPoint = this.path.getPointAtLength(distance + 0.2);

    return getAngle(point, testPoint);
};

var SVGMovePathRole = {
    init: function () {
        this.pathLength = this.path.getTotalLength();
    },

    update: function (state) {
        var distance = state.progress * this.pathLength,
            newPoint = this.path.getPointAtLength(distance),
            rotation = this.autoRotate ? calcRotation(this.path, newPoint, distance) : state.rotation || 0;

        this.element.setAttribute('transform', 'translate(' + newPoint.x + ', ' + newPoint.y + ') rotate(' + rotation + ')');
    }
};

module.exports = SVGMovePathRole;