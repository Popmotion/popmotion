'use strict';

exports.__esModule = true;
exports.circularMotion = exports.createMapper = undefined;

var _calc = require('../inc/calc');

var createMapper = exports.createMapper = function (from, to) {
    var mapLength = from.length;

    return function (value) {
        for (var i = 1; i < mapLength; i++) {
            if (value < from[i] || i === mapLength) {
                return (0, _calc.getValueFromProgress)((0, _calc.restrict)((0, _calc.getProgressFromValue)(value, from[i - 1], from[i]), 0, 1), to[i - 1], to[i]);
            }
        }
    };
};

var circularMotion = exports.circularMotion = function (v, key, _ref) {
    var values = _ref.values;
    return (0, _calc.pointFromAngleAndDistance)({
        x: values.originX.current,
        y: values.originY.current
    }, values.angle.current, values.distance.current)[key];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFTyxJQUFNLHNDQUFlLFVBQUMsSUFBRCxFQUFPLEVBQVAsRUFBYztBQUN0QyxRQUFNLFlBQVksS0FBSyxNQUFMLENBRG9COztBQUd0QyxXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksU0FBSixFQUFlLEdBQS9CLEVBQW9DO0FBQ2hDLGdCQUFJLFFBQVEsS0FBSyxDQUFMLENBQVIsSUFBbUIsTUFBTSxTQUFOLEVBQWlCO0FBQ3BDLHVCQUFPLFVBUlEscUJBUVIsQ0FBcUIsVUFSUyxTQVFULENBQVMsVUFSNUMscUJBUTRDLENBQXFCLEtBQXJCLEVBQTRCLEtBQUssSUFBSSxDQUFKLENBQWpDLEVBQXlDLEtBQUssQ0FBTCxDQUF6QyxDQUFULEVBQTRELENBQTVELEVBQStELENBQS9ELENBQXJCLEVBQXdGLEdBQUcsSUFBSSxDQUFKLENBQTNGLEVBQW1HLEdBQUcsQ0FBSCxDQUFuRyxDQUFQLENBRG9DO2FBQXhDO1NBREo7S0FERyxDQUgrQjtDQUFkOztBQVlyQixJQUFNLDBDQUFpQixVQUFDLENBQUQsRUFBSSxHQUFKO1FBQVc7V0FDckMsVUFmMkQsMEJBZTNELENBQTBCO0FBQ3RCLFdBQUcsT0FBTyxPQUFQLENBQWUsT0FBZjtBQUNILFdBQUcsT0FBTyxPQUFQLENBQWUsT0FBZjtLQUZQLEVBR0csT0FBTyxLQUFQLENBQWEsT0FBYixFQUFzQixPQUFPLFFBQVAsQ0FBZ0IsT0FBaEIsQ0FIekIsQ0FHa0QsR0FIbEQ7Q0FEMEIiLCJmaWxlIjoidHJhbnNmb3JtZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzLCByZXN0cmljdCwgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1hcHBlciA9IChmcm9tLCB0bykgPT4ge1xuICAgIGNvbnN0IG1hcExlbmd0aCA9IGZyb20ubGVuZ3RoO1xuXG4gICAgcmV0dXJuICh2YWx1ZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBmcm9tW2ldIHx8IGkgPT09IG1hcExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhyZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZSh2YWx1ZSwgZnJvbVtpIC0gMV0sIGZyb21baV0pLCAwLCAxKSwgdG9baSAtIDFdLCB0b1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNpcmN1bGFyTW90aW9uID0gKHYsIGtleSwgeyB2YWx1ZXMgfSkgPT4gXG4gICAgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSh7XG4gICAgICAgIHg6IHZhbHVlcy5vcmlnaW5YLmN1cnJlbnQsXG4gICAgICAgIHk6IHZhbHVlcy5vcmlnaW5ZLmN1cnJlbnQgXG4gICAgfSwgdmFsdWVzLmFuZ2xlLmN1cnJlbnQsIHZhbHVlcy5kaXN0YW5jZS5jdXJyZW50KVtrZXldO1xuXG4iXX0=