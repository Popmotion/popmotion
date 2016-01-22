'use strict';

exports.__esModule = true;

var _calc = require('../inc/calc');

exports.default = createMapTransform = function (from, to) {
    var mapLength = from.length;

    return function (value) {
        for (var i = 1; i < mapLength; i++) {
            if (value < from[i] || i === mapLength) {
                return (0, _calc.getValueFromProgress)((0, _calc.restrict)((0, _calc.getProgressFromValue)(value, from[i - 1], from[i]), 0, 1), to[i - 1], to[i]);
            }
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2Zvcm1lcnMvbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFFZSxxQkFBcUIsVUFBQyxJQUFELEVBQU8sRUFBUCxFQUFjO0FBQzlDLFFBQU0sWUFBWSxLQUFLLE1BQUwsQ0FENEI7O0FBRzlDLFdBQU8sVUFBQyxLQUFELEVBQVc7QUFDZCxhQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxTQUFKLEVBQWUsR0FBL0IsRUFBb0M7QUFDaEMsZ0JBQUksUUFBUSxLQUFLLENBQUwsQ0FBUixJQUFtQixNQUFNLFNBQU4sRUFBaUI7QUFDcEMsdUJBQU8sVUFSUSxxQkFRUixDQUFxQixVQVJTLFNBUVQsQ0FBUyxVQVI1QyxxQkFRNEMsQ0FBcUIsS0FBckIsRUFBNEIsS0FBSyxJQUFJLENBQUosQ0FBakMsRUFBeUMsS0FBSyxDQUFMLENBQXpDLENBQVQsRUFBNEQsQ0FBNUQsRUFBK0QsQ0FBL0QsQ0FBckIsRUFBd0YsR0FBRyxJQUFJLENBQUosQ0FBM0YsRUFBbUcsR0FBRyxDQUFILENBQW5HLENBQVAsQ0FEb0M7YUFBeEM7U0FESjtLQURHLENBSHVDO0NBQWQiLCJmaWxlIjoibWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzLCByZXN0cmljdCB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWFwVHJhbnNmb3JtID0gKGZyb20sIHRvKSA9PiB7XG4gICAgY29uc3QgbWFwTGVuZ3RoID0gZnJvbS5sZW5ndGg7XG5cbiAgICByZXR1cm4gKHZhbHVlKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbWFwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IGZyb21baV0gfHwgaSA9PT0gbWFwTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKHZhbHVlLCBmcm9tW2kgLSAxXSwgZnJvbVtpXSksIDAsIDEpLCB0b1tpIC0gMV0sIHRvW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59Il19