"use strict";

exports.__esModule = true;

exports.default = function (_ref) {
    var element = _ref.element;
    var state = _ref.state;

    for (var key in state) {
        if (state.hasOwnProperty(key)) {
            element.setAttribute(key, state[key]);
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXIvYXR0ci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O2tCQUFlLGdCQUF3QjtRQUFyQix1QkFBcUI7UUFBWixtQkFBWTs7QUFDbkMsU0FBSyxJQUFJLEdBQUosSUFBVyxLQUFoQixFQUF1QjtBQUNuQixZQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzNCLG9CQUFRLFlBQVIsQ0FBcUIsR0FBckIsRUFBMEIsTUFBTSxHQUFOLENBQTFCLEVBRDJCO1NBQS9CO0tBREo7Q0FEVyIsImZpbGUiOiJhdHRyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHsgZWxlbWVudCwgc3RhdGUgfSkgPT4ge1xuICAgIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBzdGF0ZVtrZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn07Il19