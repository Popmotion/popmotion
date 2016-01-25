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
};

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXIvY3NzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLFNBQVMsU0FBUyxPQUFxQjtRQUFsQixPQUFPLFFBQVAsT0FBTztRQUFFLEtBQUssUUFBTCxLQUFLOztBQUMvQixXQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxHQUFHLEdBQUcscUJBQW9CLEtBQUssQ0FBQyxDQUFDO0NBQzdEOzs7Ozs7Ozs7QUFBQyxBQVNGLFNBQVMsQ0FBQyxHQUFHLEdBQUcsVUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFLO0FBQzlCLE9BQUcsR0FBRyx3QkFBUyxHQUFHLENBQUMsQ0FBQzs7QUFFcEIsUUFBSSxHQUFHLEVBQUU7QUFDTCxlQUFPLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdEQ7Q0FDSixDQUFBOztBQUVELFNBQVMsQ0FBQyxRQUFRLHFCQUFXLENBQUM7QUFDOUIsU0FBUyxDQUFDLFlBQVkseUJBQWUsQ0FBQzs7a0JBRXZCLFNBQVMiLCJmaWxlIjoiY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0YXRlTWFwIGZyb20gJy4vY3NzL3N0YXRlLW1hcCc7XG5pbXBvcnQgdmFsdWVUeXBlTWFwIGZyb20gJy4vY3NzL3ZhbHVlLXR5cGUtbWFwJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuL2Nzcy9wcmVmaXhlcic7XG5pbXBvcnQgYnVpbGRQcm9wZXJ0eVN0cmluZyBmcm9tICcuL2Nzcy9idWlsZCc7XG5cbi8qXG4gICAgUmVuZGVyIENTUyB0byBwcm92aWRlZCBlbGVtZW50XG5cbiAgICBAcGFyYW0geyBET01FbGVtZW50LCBPYmplY3QgfVxuKi9cbmZ1bmN0aW9uIHJlbmRlckNTUyh7IGVsZW1lbnQsIHN0YXRlIH0pIHtcbiAgICBlbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gJzsnICsgYnVpbGRQcm9wZXJ0eVN0cmluZyhzdGF0ZSk7XG59O1xuXG4vKlxuICAgIEdldCBDU1MgcHJvcGVydHkgb2YgZWxlbWVudFxuXG4gICAgQHBhcmFtIFtET01FbGVtZW50XVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3Zhcl1cbiovXG5yZW5kZXJDU1MuZ2V0ID0gKGVsZW1lbnQsIGtleSkgPT4ge1xuICAgIGtleSA9IHByZWZpeGVyKGtleSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVtrZXldO1xuICAgIH1cbn1cblxucmVuZGVyQ1NTLnN0YXRlTWFwID0gc3RhdGVNYXA7XG5yZW5kZXJDU1MudmFsdWVUeXBlTWFwID0gdmFsdWVUeXBlTWFwO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDU1M7Il19