'use strict';

exports.__esModule = true;

var _stateMap = require('./css/state-map');

var _stateMap2 = _interopRequireDefault(_stateMap);

var _valueTypeMap = require('./css/value-type-map');

var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);

var _prefixer = require('./css/prefixer');

var _prefixer2 = _interopRequireDefault(_prefixer);

var _build = require('./css/build');

var _build2 = _interopRequireDefault(_build);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Render CSS to provided element

    @param { DOMElement, Object }
*/
function renderCSS(_ref) {
    var element = _ref.element;
    var state = _ref.state;

    element.style.cssText += ';' + (0, _build2.default)(state);
}

/*
    Get CSS property of element

    @param [DOMElement]
    @param [string]
    @return [var]
*/
renderCSS.get = function (element, key) {
    key = (0, _prefixer2.default)(key);

    if (key) {
        return window.getComputedStyle(element, null)[key];
    }
};

renderCSS.stateMap = _stateMap2.default;
renderCSS.valueTypeMap = _valueTypeMap2.default;

exports.default = renderCSS;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXIvY3NzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLFNBQVMsU0FBVCxPQUF1QztRQUFsQix1QkFBa0I7UUFBVCxtQkFBUzs7QUFDbkMsWUFBUSxLQUFSLENBQWMsT0FBZCxJQUF5QixNQUFNLHFCQUFvQixLQUFwQixDQUFOLENBRFU7Q0FBdkM7Ozs7Ozs7OztBQVdBLFVBQVUsR0FBVixHQUFnQixVQUFDLE9BQUQsRUFBVSxHQUFWLEVBQWtCO0FBQzlCLFVBQU0sd0JBQVMsR0FBVCxDQUFOLENBRDhCOztBQUc5QixRQUFJLEdBQUosRUFBUztBQUNMLGVBQU8sT0FBTyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxJQUFqQyxFQUF1QyxHQUF2QyxDQUFQLENBREs7S0FBVDtDQUhZOztBQVFoQixVQUFVLFFBQVY7QUFDQSxVQUFVLFlBQVY7O2tCQUVlIiwiZmlsZSI6ImNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL2Nzcy9zdGF0ZS1tYXAnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL2Nzcy92YWx1ZS10eXBlLW1hcCc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9jc3MvcHJlZml4ZXInO1xuaW1wb3J0IGJ1aWxkUHJvcGVydHlTdHJpbmcgZnJvbSAnLi9jc3MvYnVpbGQnO1xuXG4vKlxuICAgIFJlbmRlciBDU1MgdG8gcHJvdmlkZWQgZWxlbWVudFxuXG4gICAgQHBhcmFtIHsgRE9NRWxlbWVudCwgT2JqZWN0IH1cbiovXG5mdW5jdGlvbiByZW5kZXJDU1MoeyBlbGVtZW50LCBzdGF0ZSB9KSB7XG4gICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9ICc7JyArIGJ1aWxkUHJvcGVydHlTdHJpbmcoc3RhdGUpO1xufVxuXG4vKlxuICAgIEdldCBDU1MgcHJvcGVydHkgb2YgZWxlbWVudFxuXG4gICAgQHBhcmFtIFtET01FbGVtZW50XVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3Zhcl1cbiovXG5yZW5kZXJDU1MuZ2V0ID0gKGVsZW1lbnQsIGtleSkgPT4ge1xuICAgIGtleSA9IHByZWZpeGVyKGtleSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVtrZXldO1xuICAgIH1cbn07XG5cbnJlbmRlckNTUy5zdGF0ZU1hcCA9IHN0YXRlTWFwO1xucmVuZGVyQ1NTLnZhbHVlVHlwZU1hcCA9IHZhbHVlVHlwZU1hcDtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ1NTOyJdfQ==