'use strict';

var _Role = require('../Role');

var _Role2 = _interopRequireDefault(_Role);

var _build = require('./build');

var _build2 = _interopRequireDefault(_build);

var _utils = require('../../inc/utils');

var _typesXyz = require('./types-xyz');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SCALE = 'scale';

var aframeRole = new _Role2.default({

    _map: {
        x: _typesXyz.POSITION + 'X',
        y: _typesXyz.POSITION + 'Y',
        z: _typesXyz.POSITION + 'Z'
    },

    _typeMap: {
        scale: SCALE,
        scaleX: SCALE,
        scaleY: SCALE,
        scaleZ: SCALE
    },

    update: function (state) {
        var _this = this;

        (0, _utils.each)((0, _build2.default)(state), function (key, value) {
            return _this.element.setAttribute(key, value);
        });
    }

});

module.exports = aframeRole;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb2xlcy9hZnJhbWUvYWZyYW1lUm9sZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSxRQUFRLE9BQVI7O0FBRU4sSUFBTSxhQUFhLG1CQUFTOztBQUV4QixVQUFNO0FBQ0YsV0FBRyxVQVBGLFFBT0UsR0FBVyxHQUFYO0FBQ0gsV0FBRyxVQVJGLFFBUUUsR0FBVyxHQUFYO0FBQ0gsV0FBRyxVQVRGLFFBU0UsR0FBVyxHQUFYO0tBSFA7O0FBTUEsY0FBVTtBQUNOLGVBQU8sS0FBUDtBQUNBLGdCQUFRLEtBQVI7QUFDQSxnQkFBUSxLQUFSO0FBQ0EsZ0JBQVEsS0FBUjtLQUpKOztBQU9BLFlBQVEsVUFBVSxLQUFWLEVBQWlCOzs7QUFDckIsbUJBckJDLEtBcUJELENBQUsscUJBQU0sS0FBTixDQUFMLEVBQW1CLFVBQUMsR0FBRCxFQUFNLEtBQU47bUJBQWdCLE1BQUssT0FBTCxDQUFhLFlBQWIsQ0FBMEIsR0FBMUIsRUFBK0IsS0FBL0I7U0FBaEIsQ0FBbkIsQ0FEcUI7S0FBakI7O0NBZk8sQ0FBYjs7QUFxQk4sT0FBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6ImFmcmFtZVJvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm9sZSBmcm9tICcuLi9Sb2xlJztcbmltcG9ydCBidWlsZCBmcm9tICcuL2J1aWxkJztcbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHsgUE9TSVRJT04gfSBmcm9tICcuL3R5cGVzLXh5eic7XG5cbmNvbnN0IFNDQUxFID0gJ3NjYWxlJztcblxuY29uc3QgYWZyYW1lUm9sZSA9IG5ldyBSb2xlKHtcblxuICAgIF9tYXA6IHtcbiAgICAgICAgeDogUE9TSVRJT04gKyAnWCcsXG4gICAgICAgIHk6IFBPU0lUSU9OICsgJ1knLFxuICAgICAgICB6OiBQT1NJVElPTiArICdaJ1xuICAgIH0sXG5cbiAgICBfdHlwZU1hcDoge1xuICAgICAgICBzY2FsZTogU0NBTEUsXG4gICAgICAgIHNjYWxlWDogU0NBTEUsXG4gICAgICAgIHNjYWxlWTogU0NBTEUsXG4gICAgICAgIHNjYWxlWjogU0NBTEVcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgZWFjaChidWlsZChzdGF0ZSksIChrZXksIHZhbHVlKSA9PiB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpKTtcbiAgICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFmcmFtZVJvbGU7Il19