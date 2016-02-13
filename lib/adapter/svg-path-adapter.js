'use strict';

exports.__esModule = true;

var _build = require('./svg-path/build');

var _build2 = _interopRequireDefault(_build);

var _stateMap = require('./svg-path/state-map');

var _stateMap2 = _interopRequireDefault(_stateMap);

var _svgAdapter = require('./svg-adapter');

var _svgAdapter2 = _interopRequireDefault(_svgAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setter(props) {
    this.svgSetter((0, _build2.default)(props, this.pathLength));
}

exports.default = function (element) {
    var adapter = (0, _svgAdapter2.default)(element);

    adapter.stateMap = _stateMap2.default;
    adapter.setter = setter;
    adapter.svgSetter = _svgAdapter.setter;

    adapter.pathLength = element.getTotalLength();

    return adapter;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsU0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFO0FBQ25CLFFBQUksQ0FBQyxTQUFTLENBQUMscUJBQU0sS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0NBQ2pEOztrQkFFYyxVQUFDLE9BQU8sRUFBSztBQUN4QixRQUFNLE9BQU8sR0FBRywwQkFBVyxPQUFPLENBQUMsQ0FBQzs7QUFFcEMsV0FBTyxDQUFDLFFBQVEscUJBQVcsQ0FBQztBQUM1QixXQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUN4QixXQUFPLENBQUMsU0FBUyxxQkFBWSxDQUFDOztBQUU5QixXQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7QUFFOUMsV0FBTyxPQUFPLENBQUM7Q0FDbEIiLCJmaWxlIjoic3ZnLXBhdGgtYWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZCBmcm9tICcuL3N2Zy1wYXRoL2J1aWxkJztcbmltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL3N2Zy1wYXRoL3N0YXRlLW1hcCc7XG5pbXBvcnQgc3ZnQWRhcHRlciwgeyBzZXR0ZXIgYXMgc3ZnU2V0dGVyIH0gZnJvbSAnLi9zdmctYWRhcHRlcic7XG5cbmZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgIHRoaXMuc3ZnU2V0dGVyKGJ1aWxkKHByb3BzLCB0aGlzLnBhdGhMZW5ndGgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBhZGFwdGVyID0gc3ZnQWRhcHRlcihlbGVtZW50KTtcblxuICAgIGFkYXB0ZXIuc3RhdGVNYXAgPSBzdGF0ZU1hcDtcbiAgICBhZGFwdGVyLnNldHRlciA9IHNldHRlcjtcbiAgICBhZGFwdGVyLnN2Z1NldHRlciA9IHN2Z1NldHRlcjtcblxuICAgIGFkYXB0ZXIucGF0aExlbmd0aCA9IGVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgIHJldHVybiBhZGFwdGVyO1xufTtcbiJdfQ==