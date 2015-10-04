var Role = require('../Role');
var svgRole = require('../svg/svgRole');
var getAngle = require('../../inc/calc').angle;

var calcRotation = function (path, point, distance, currentRotate) {
    var testPoint = path.getPointAtLength(distance + 0.2);

    return (point.x === testPoint.x && point.y === testPoint.y) ? currentRotate : getAngle(point, testPoint);
};

var SVGMovePathRole = new Role({
    init: function () {
        this.pathLength = this.path.getTotalLength();
        this.set({
            values: {
                x: 0,
                y: 0,
                rotate: 0
            }
        });
    },

    update: function (state) {
        var distance = state.distance / 100 * this.pathLength,
            newPoint = this.path.getPointAtLength(distance),
            manualRotate = this.values.rotate ? this.values.rotate.current : 0;

        this.currentRotation = this.autoRotate ? calcRotation(this.path, newPoint, distance, this.currentRotation) : manualRotate;

        this.values.x = newPoint.x;
        this.values.y = newPoint.y;

        if (this.autoRotate) {
            this.values.rotate = this.currentRotation;
        }
    }
});

module.exports = SVGMovePathRole;