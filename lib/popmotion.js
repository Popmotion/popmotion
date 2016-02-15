'use strict';

exports.__esModule = true;
exports.transformers = exports.shadowType = exports.scaleType = exports.rgbType = exports.pxType = exports.positionsType = exports.hslType = exports.hexType = exports.complexType = exports.colorType = exports.axesType = exports.angleType = exports.alphaType = exports.setGlobalDilation = exports.combineTransformers = exports.utils = exports.calc = exports.easing = exports.svgPathAdapter = exports.svgAdapter = exports.cssAdapter = exports.attrAdapter = exports.adapter = exports.timeline = exports.stagger = exports.process = exports.input = exports.trackInput = exports.physics = exports.tween = exports.actor = exports.Action = undefined;

var _utils2 = require('./inc/utils');

Object.defineProperty(exports, 'combineTransformers', {
  enumerable: true,
  get: function () {
    return _utils2.combineTransformers;
  }
});

var _timer = require('./process/timer');

Object.defineProperty(exports, 'setGlobalDilation', {
  enumerable: true,
  get: function () {
    return _timer.setGlobalDilation;
  }
});

var _Action2 = require('./actions/Action');

var _Action3 = _interopRequireDefault(_Action2);

var _Actor = require('./actions/Actor');

var _Actor2 = _interopRequireDefault(_Actor);

var _Tween = require('./actions/Tween');

var _Tween2 = _interopRequireDefault(_Tween);

var _Physics = require('./actions/Physics');

var _Physics2 = _interopRequireDefault(_Physics);

var _Track = require('./actions/Track');

var _Track2 = _interopRequireDefault(_Track);

var _Process = require('./process/Process');

var _Process2 = _interopRequireDefault(_Process);

var _Input = require('./input/Input');

var _Input2 = _interopRequireDefault(_Input);

var _stagger2 = require('./inc/stagger');

var _stagger3 = _interopRequireDefault(_stagger2);

var _timeline2 = require('./inc/timeline');

var _timeline3 = _interopRequireDefault(_timeline2);

var _adapter2 = require('./adapter/adapter');

var _adapter3 = _interopRequireDefault(_adapter2);

var _attrAdapter2 = require('./adapter/attr-adapter');

var _attrAdapter3 = _interopRequireDefault(_attrAdapter2);

var _cssAdapter2 = require('./adapter/css-adapter');

var _cssAdapter3 = _interopRequireDefault(_cssAdapter2);

var _svgAdapter2 = require('./adapter/svg-adapter');

var _svgAdapter3 = _interopRequireDefault(_svgAdapter2);

var _svgPathAdapter2 = require('./adapter/svg-path-adapter');

var _svgPathAdapter3 = _interopRequireDefault(_svgPathAdapter2);

var _presetEasing = require('./actions/easing/preset-easing');

var _presetEasing2 = _interopRequireDefault(_presetEasing);

var _calc2 = require('./inc/calc');

var _calc = _interopRequireWildcard(_calc2);

var _utils = _interopRequireWildcard(_utils2);

var _alpha = require('./value-types/alpha');

var _alpha2 = _interopRequireDefault(_alpha);

var _angle = require('./value-types/angle');

var _angle2 = _interopRequireDefault(_angle);

var _axes = require('./value-types/axes');

var _axes2 = _interopRequireDefault(_axes);

var _color = require('./value-types/color');

var _color2 = _interopRequireDefault(_color);

var _complex = require('./value-types/complex');

var _complex2 = _interopRequireDefault(_complex);

var _hex = require('./value-types/hex');

var _hex2 = _interopRequireDefault(_hex);

var _hsl = require('./value-types/hsl');

var _hsl2 = _interopRequireDefault(_hsl);

var _positions = require('./value-types/positions');

var _positions2 = _interopRequireDefault(_positions);

var _px = require('./value-types/px');

var _px2 = _interopRequireDefault(_px);

var _rgb = require('./value-types/rgb');

var _rgb2 = _interopRequireDefault(_rgb);

var _scale = require('./value-types/scale');

var _scale2 = _interopRequireDefault(_scale);

var _shadow = require('./value-types/shadow');

var _shadow2 = _interopRequireDefault(_shadow);

var _transformers2 = require('./inc/transformers');

var _transformers = _interopRequireWildcard(_transformers2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Action = _Action3.default; // Actions

// Process

// Input

var actor = exports.actor = function (props) {
  return new _Actor2.default(props);
};
var tween = exports.tween = function (props) {
  return new _Tween2.default(props);
};
var physics = exports.physics = function (props) {
  return new _Physics2.default(props);
};
var trackInput = exports.trackInput = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(_Track2.default, [null].concat(args)))();
};
var input = exports.input = function () {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return new (Function.prototype.bind.apply(_Input2.default, [null].concat(args)))();
};
var process = exports.process = function () {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return new (Function.prototype.bind.apply(_Process2.default, [null].concat(args)))();
};
exports.stagger = _stagger3.default;
exports.timeline = _timeline3.default;

// Adapters

exports.adapter = _adapter3.default;
exports.attrAdapter = _attrAdapter3.default;
exports.cssAdapter = _cssAdapter3.default;
exports.svgAdapter = _svgAdapter3.default;
exports.svgPathAdapter = _svgPathAdapter3.default;

// Easing

exports.easing = _presetEasing2.default;

// Utils

exports.calc = _calc;
exports.utils = _utils;

// Value types

exports.alphaType = _alpha2.default;
exports.angleType = _angle2.default;
exports.axesType = _axes2.default;
exports.colorType = _color2.default;
exports.complexType = _complex2.default;
exports.hexType = _hex2.default;
exports.hslType = _hsl2.default;
exports.positionsType = _positions2.default;
exports.pxType = _px2.default;
exports.rgbType = _rgb2.default;
exports.scaleType = _scale2.default;
exports.shadowType = _shadow2.default;

// Transformers

exports.transformers = _transformers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OzttQkFrQ3FCLG1CQUFtQjs7Ozs7Ozs7O2tCQUMvQixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQWxDbkIsTUFBTTs7Ozs7O0FBWU4sSUFBTSxLQUFLLFdBQUwsS0FBSyxHQUFHLFVBQUMsS0FBSztTQUFLLG9CQUFVLEtBQUssQ0FBQztDQUFBLENBQUM7QUFDMUMsSUFBTSxLQUFLLFdBQUwsS0FBSyxHQUFHLFVBQUMsS0FBSztTQUFLLG9CQUFVLEtBQUssQ0FBQztDQUFBLENBQUM7QUFDMUMsSUFBTSxPQUFPLFdBQVAsT0FBTyxHQUFHLFVBQUMsS0FBSztTQUFLLHNCQUFZLEtBQUssQ0FBQztDQUFBLENBQUM7QUFDOUMsSUFBTSxVQUFVLFdBQVYsVUFBVSxHQUFHO29DQUFJLElBQUk7QUFBSixRQUFJOzs7MkVBQWtCLElBQUk7Q0FBQyxDQUFDO0FBQ25ELElBQU0sS0FBSyxXQUFMLEtBQUssR0FBRztxQ0FBSSxJQUFJO0FBQUosUUFBSTs7OzJFQUFrQixJQUFJO0NBQUMsQ0FBQztBQUM5QyxJQUFNLE9BQU8sV0FBUCxPQUFPLEdBQUc7cUNBQUksSUFBSTtBQUFKLFFBQUk7Ozs2RUFBb0IsSUFBSTtDQUFDLENBQUM7UUFDbEQsT0FBTztRQUNQLFFBQVE7Ozs7UUFHUixPQUFPO1FBQ1AsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsY0FBYzs7OztRQUdkLE1BQU07Ozs7UUFHRCxJQUFJO1FBQ0osS0FBSzs7OztRQUlWLFNBQVM7UUFDVCxTQUFTO1FBQ1QsUUFBUTtRQUNSLFNBQVM7UUFDVCxXQUFXO1FBQ1gsT0FBTztRQUNQLE9BQU87UUFDUCxhQUFhO1FBQ2IsTUFBTTtRQUNOLE9BQU87UUFDUCxTQUFTO1FBQ1QsVUFBVTs7OztRQUdMLFlBQVkiLCJmaWxlIjoicG9wbW90aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQWN0aW9uc1xuZXhwb3J0IEFjdGlvbiBmcm9tICcuL2FjdGlvbnMvQWN0aW9uJztcbmltcG9ydCBBY3RvciBmcm9tICcuL2FjdGlvbnMvQWN0b3InO1xuaW1wb3J0IFR3ZWVuIGZyb20gJy4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgUGh5c2ljcyBmcm9tICcuL2FjdGlvbnMvUGh5c2ljcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9hY3Rpb25zL1RyYWNrJztcblxuLy8gUHJvY2Vzc1xuaW1wb3J0IFByb2Nlc3MgZnJvbSAnLi9wcm9jZXNzL1Byb2Nlc3MnO1xuXG4vLyBJbnB1dFxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQvSW5wdXQnO1xuXG5leHBvcnQgY29uc3QgYWN0b3IgPSAocHJvcHMpID0+IG5ldyBBY3Rvcihwcm9wcyk7XG5leHBvcnQgY29uc3QgdHdlZW4gPSAocHJvcHMpID0+IG5ldyBUd2Vlbihwcm9wcyk7XG5leHBvcnQgY29uc3QgcGh5c2ljcyA9IChwcm9wcykgPT4gbmV3IFBoeXNpY3MocHJvcHMpO1xuZXhwb3J0IGNvbnN0IHRyYWNrSW5wdXQgPSAoLi4uYXJncykgPT4gbmV3IFRyYWNrKC4uLmFyZ3MpO1xuZXhwb3J0IGNvbnN0IGlucHV0ID0gKC4uLmFyZ3MpID0+IG5ldyBJbnB1dCguLi5hcmdzKTtcbmV4cG9ydCBjb25zdCBwcm9jZXNzID0gKC4uLmFyZ3MpID0+IG5ldyBQcm9jZXNzKC4uLmFyZ3MpO1xuZXhwb3J0IHN0YWdnZXIgZnJvbSAnLi9pbmMvc3RhZ2dlcic7XG5leHBvcnQgdGltZWxpbmUgZnJvbSAnLi9pbmMvdGltZWxpbmUnO1xuXG4vLyBBZGFwdGVyc1xuZXhwb3J0IGFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL2FkYXB0ZXInO1xuZXhwb3J0IGF0dHJBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9hdHRyLWFkYXB0ZXInO1xuZXhwb3J0IGNzc0FkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJztcbmV4cG9ydCBzdmdBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9zdmctYWRhcHRlcic7XG5leHBvcnQgc3ZnUGF0aEFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInO1xuXG4vLyBFYXNpbmdcbmV4cG9ydCBlYXNpbmcgZnJvbSAnLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcblxuLy8gVXRpbHNcbmV4cG9ydCAqIGFzIGNhbGMgZnJvbSAnLi9pbmMvY2FsYyc7XG5leHBvcnQgKiBhcyB1dGlscywgeyBjb21iaW5lVHJhbnNmb3JtZXJzIH0gZnJvbSAnLi9pbmMvdXRpbHMnO1xuZXhwb3J0IHsgc2V0R2xvYmFsRGlsYXRpb24gfSBmcm9tICcuL3Byb2Nlc3MvdGltZXInO1xuXG4vLyBWYWx1ZSB0eXBlc1xuZXhwb3J0IGFscGhhVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2FscGhhJztcbmV4cG9ydCBhbmdsZVR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9hbmdsZSc7XG5leHBvcnQgYXhlc1R5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9heGVzJztcbmV4cG9ydCBjb2xvclR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9jb2xvcic7XG5leHBvcnQgY29tcGxleFR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmV4cG9ydCBoZXhUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvaGV4JztcbmV4cG9ydCBoc2xUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvaHNsJztcbmV4cG9ydCBwb3NpdGlvbnNUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJztcbmV4cG9ydCBweFR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9weCc7XG5leHBvcnQgcmdiVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3JnYic7XG5leHBvcnQgc2NhbGVUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuZXhwb3J0IHNoYWRvd1R5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9zaGFkb3cnO1xuXG4vLyBUcmFuc2Zvcm1lcnNcbmV4cG9ydCAqIGFzIHRyYW5zZm9ybWVycyBmcm9tICcuL2luYy90cmFuc2Zvcm1lcnMnOyJdfQ==