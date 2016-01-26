'use strict';

exports.__esModule = true;
exports.createMapTransform = exports.shadowType = exports.scaleType = exports.rgbType = exports.pxType = exports.positionsType = exports.hslType = exports.hexType = exports.complexType = exports.colorType = exports.axesType = exports.angleType = exports.alphaType = exports.timeline = exports.stagger = exports.setDilation = exports.selectDomActor = exports.utils = exports.calc = exports.easing = exports.renderSVGPath = exports.renderSVG = exports.renderCSS = exports.renderAttr = exports.process = exports.input = exports.track = exports.physics = exports.tween = exports.actor = undefined;

var _Actor = require('./actor/Actor');

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

var _attr = require('./render/attr');

var _attr2 = _interopRequireDefault(_attr);

var _css = require('./render/css');

var _css2 = _interopRequireDefault(_css);

var _svg = require('./render/svg');

var _svg2 = _interopRequireDefault(_svg);

var _svgPath = require('./render/svg-path');

var _svgPath2 = _interopRequireDefault(_svgPath);

var _presetEasing = require('./actions/easing/preset-easing');

var _presetEasing2 = _interopRequireDefault(_presetEasing);

var _calc2 = require('./inc/calc');

var _calc = _interopRequireWildcard(_calc2);

var _utils2 = require('./inc/utils');

var _utils = _interopRequireWildcard(_utils2);

var _selectActor = require('./inc/select-actor');

var _selectActor2 = _interopRequireDefault(_selectActor);

var _timer = require('./process/timer');

var _timer2 = _interopRequireDefault(_timer);

var _stagger2 = require('./inc/stagger');

var _stagger3 = _interopRequireDefault(_stagger2);

var _timeline2 = require('./inc/timeline');

var _timeline3 = _interopRequireDefault(_timeline2);

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

var _map = require('./transformers/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Process
// Actor
var actor = exports.actor = function (props) {
  return new _Actor2.default(props);
};

// Input

// Actions

var tween = exports.tween = function (props) {
  return new _Tween2.default(props);
};
var physics = exports.physics = function (props) {
  return new _Physics2.default(props);
};
var track = exports.track = function () {
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

// Renderers
exports.renderAttr = _attr2.default;
exports.renderCSS = _css2.default;
exports.renderSVG = _svg2.default;
exports.renderSVGPath = _svgPath2.default;

// Easing

exports.easing = _presetEasing2.default;

// Utils

exports.calc = _calc;
exports.utils = _utils;
exports.selectDomActor = _selectActor2.default;
exports.setDilation = _timer2.default;
exports.stagger = _stagger3.default;
exports.timeline = _timeline3.default;

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

exports.createMapTransform = _map2.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjTyxJQUFNLHdCQUFRLFVBQUMsS0FBRDtTQUFXLG9CQUFVLEtBQVY7Q0FBWDs7Ozs7O0FBQ2QsSUFBTSx3QkFBUSxVQUFDLEtBQUQ7U0FBVyxvQkFBVSxLQUFWO0NBQVg7QUFDZCxJQUFNLDRCQUFVLFVBQUMsS0FBRDtTQUFXLHNCQUFZLEtBQVo7Q0FBWDtBQUNoQixJQUFNLHdCQUFRO29DQUFJOzs7OzJFQUFzQjtDQUExQjtBQUNkLElBQU0sd0JBQVE7cUNBQUk7Ozs7MkVBQXNCO0NBQTFCO0FBQ2QsSUFBTSw0QkFBVTtxQ0FBSTs7Ozs2RUFBd0I7Q0FBNUI7OztRQUdoQjtRQUNBO1FBQ0E7UUFDQTs7OztRQUdBOzs7O1FBR0s7UUFDQTtRQUNMO1FBQ0E7UUFDQTtRQUNBOzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7O1FBR0EiLCJmaWxlIjoicG9wbW90aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQWN0b3JcbmltcG9ydCBBY3RvciBmcm9tICcuL2FjdG9yL0FjdG9yJztcblxuLy8gQWN0aW9uc1xuaW1wb3J0IFR3ZWVuIGZyb20gJy4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgUGh5c2ljcyBmcm9tICcuL2FjdGlvbnMvUGh5c2ljcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9hY3Rpb25zL1RyYWNrJztcblxuLy8gUHJvY2Vzc1xuaW1wb3J0IFByb2Nlc3MgZnJvbSAnLi9wcm9jZXNzL1Byb2Nlc3MnO1xuXG4vLyBJbnB1dFxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQvSW5wdXQnO1xuXG5leHBvcnQgY29uc3QgYWN0b3IgPSAocHJvcHMpID0+IG5ldyBBY3Rvcihwcm9wcyk7XG5leHBvcnQgY29uc3QgdHdlZW4gPSAocHJvcHMpID0+IG5ldyBUd2Vlbihwcm9wcyk7XG5leHBvcnQgY29uc3QgcGh5c2ljcyA9IChwcm9wcykgPT4gbmV3IFBoeXNpY3MocHJvcHMpO1xuZXhwb3J0IGNvbnN0IHRyYWNrID0gKC4uLmFyZ3MpID0+IG5ldyBUcmFjayguLi5hcmdzKTtcbmV4cG9ydCBjb25zdCBpbnB1dCA9ICguLi5hcmdzKSA9PiBuZXcgSW5wdXQoLi4uYXJncyk7XG5leHBvcnQgY29uc3QgcHJvY2VzcyA9ICguLi5hcmdzKSA9PiBuZXcgUHJvY2VzcyguLi5hcmdzKTtcblxuLy8gUmVuZGVyZXJzXG5leHBvcnQgcmVuZGVyQXR0ciBmcm9tICcuL3JlbmRlci9hdHRyJztcbmV4cG9ydCByZW5kZXJDU1MgZnJvbSAnLi9yZW5kZXIvY3NzJztcbmV4cG9ydCByZW5kZXJTVkcgZnJvbSAnLi9yZW5kZXIvc3ZnJztcbmV4cG9ydCByZW5kZXJTVkdQYXRoIGZyb20gJy4vcmVuZGVyL3N2Zy1wYXRoJztcblxuLy8gRWFzaW5nXG5leHBvcnQgZWFzaW5nIGZyb20gJy4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5cbi8vIFV0aWxzXG5leHBvcnQgKiBhcyBjYWxjIGZyb20gJy4vaW5jL2NhbGMnO1xuZXhwb3J0ICogYXMgdXRpbHMgZnJvbSAnLi9pbmMvdXRpbHMnO1xuZXhwb3J0IHNlbGVjdERvbUFjdG9yIGZyb20gJy4vaW5jL3NlbGVjdC1hY3Rvcic7XG5leHBvcnQgc2V0RGlsYXRpb24gZnJvbSAnLi9wcm9jZXNzL3RpbWVyJztcbmV4cG9ydCBzdGFnZ2VyIGZyb20gJy4vaW5jL3N0YWdnZXInO1xuZXhwb3J0IHRpbWVsaW5lIGZyb20gJy4vaW5jL3RpbWVsaW5lJztcblxuLy8gVmFsdWUgdHlwZXNcbmV4cG9ydCBhbHBoYVR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5leHBvcnQgYW5nbGVUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvYW5nbGUnO1xuZXhwb3J0IGF4ZXNUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvYXhlcyc7XG5leHBvcnQgY29sb3JUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvY29sb3InO1xuZXhwb3J0IGNvbXBsZXhUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvY29tcGxleCc7XG5leHBvcnQgaGV4VHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2hleCc7XG5leHBvcnQgaHNsVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2hzbCc7XG5leHBvcnQgcG9zaXRpb25zVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucyc7XG5leHBvcnQgcHhUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvcHgnO1xuZXhwb3J0IHJnYlR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9yZ2InO1xuZXhwb3J0IHNjYWxlVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3NjYWxlJztcbmV4cG9ydCBzaGFkb3dUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvc2hhZG93JztcblxuLy8gVHJhbnNmb3JtZXJzXG5leHBvcnQgY3JlYXRlTWFwVHJhbnNmb3JtIGZyb20gJy4vdHJhbnNmb3JtZXJzL21hcCc7Il19