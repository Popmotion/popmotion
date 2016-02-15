'use strict';

exports.__esModule = true;
exports.setter = setter;

var _stateMap = require('./css/state-map');

var _stateMap2 = _interopRequireDefault(_stateMap);

var _valueTypeMap = require('./svg/value-type-map');

var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);

var _build = require('./svg/build');

var _build2 = _interopRequireDefault(_build);

var _attrAdapter = require('./attr-adapter');

var _adapter = require('./adapter');

var _adapter2 = _interopRequireDefault(_adapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setter(props) {
    (0, _attrAdapter.setter)((0, _build2.default)(props, this.origin));
}

exports.default = function (element) {
    var svgAdapter = (0, _adapter2.default)(element);
    svgAdapter.stateMap = _stateMap2.default;
    svgAdapter.valueTypeMap = _valueTypeMap2.default;
    svgAdapter.getter = _attrAdapter.getter;
    svgAdapter.setter = setter;

    var bBox = element.getBBox();
    var transformOriginY = 0;
    var transformOriginX = 0;

    svgAdapter.origin = {
        x: bBox.width * (transformOriginX / 100) + bBox.x,
        y: bBox.height * (transformOriginY / 100) + bBox.y
    };

    return svgAdapter;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQU1nQixNQUFNLEdBQU4sTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFmLFNBQVMsTUFBTSxDQUFDLEtBQUssRUFBRTtBQUMxQiw2QkFBVyxxQkFBTSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Q0FDekM7O2tCQUVjLFVBQUMsT0FBTyxFQUFLO0FBQ3hCLFFBQU0sVUFBVSxHQUFHLHVCQUFRLE9BQU8sQ0FBQyxDQUFDO0FBQ3BDLGNBQVUsQ0FBQyxRQUFRLHFCQUFXLENBQUM7QUFDL0IsY0FBVSxDQUFDLFlBQVkseUJBQWUsQ0FBQztBQUN2QyxjQUFVLENBQUMsTUFBTSxzQkFBUyxDQUFDO0FBQzNCLGNBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUUzQixRQUFNLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDL0IsUUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFDM0IsUUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7O0FBRTNCLGNBQVUsQ0FBQyxNQUFNLEdBQUc7QUFDaEIsU0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksZ0JBQWdCLEdBQUcsR0FBRyxDQUFBLEFBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUNqRCxTQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sSUFBSSxnQkFBZ0IsR0FBRyxHQUFHLENBQUEsQUFBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQ3JELENBQUM7O0FBRUYsV0FBTyxVQUFVLENBQUM7Q0FDckIiLCJmaWxlIjoic3ZnLWFkYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9zdmcvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IGJ1aWxkIGZyb20gJy4vc3ZnL2J1aWxkJztcbmltcG9ydCB7IGdldHRlciwgc2V0dGVyIGFzIGF0dHJTZXR0ZXIgfSBmcm9tICcuL2F0dHItYWRhcHRlcic7XG5pbXBvcnQgYWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgYXR0clNldHRlcihidWlsZChwcm9wcywgdGhpcy5vcmlnaW4pKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBzdmdBZGFwdGVyID0gYWRhcHRlcihlbGVtZW50KTtcbiAgICBzdmdBZGFwdGVyLnN0YXRlTWFwID0gc3RhdGVNYXA7XG4gICAgc3ZnQWRhcHRlci52YWx1ZVR5cGVNYXAgPSB2YWx1ZVR5cGVNYXA7XG4gICAgc3ZnQWRhcHRlci5nZXR0ZXIgPSBnZXR0ZXI7XG4gICAgc3ZnQWRhcHRlci5zZXR0ZXIgPSBzZXR0ZXI7XG5cbiAgICBjb25zdCBiQm94ID0gZWxlbWVudC5nZXRCQm94KCk7XG4gICAgY29uc3QgdHJhbnNmb3JtT3JpZ2luWSA9IDA7XG4gICAgY29uc3QgdHJhbnNmb3JtT3JpZ2luWCA9IDA7XG5cbiAgICBzdmdBZGFwdGVyLm9yaWdpbiA9IHtcbiAgICAgICAgeDogYkJveC53aWR0aCAqICh0cmFuc2Zvcm1PcmlnaW5YIC8gMTAwKSArIGJCb3gueCxcbiAgICAgICAgeTogYkJveC5oZWlnaHQgKiAodHJhbnNmb3JtT3JpZ2luWSAvIDEwMCkgKyBiQm94LnlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHN2Z0FkYXB0ZXI7XG59O1xuXG4iXX0=