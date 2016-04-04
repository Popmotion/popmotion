'use strict';

exports.__esModule = true;

var _popmotion = require('popmotion');

var _build = require('./inc/build');

var _build2 = _interopRequireDefault(_build);

var _dictionary = require('./inc/dictionary');

var _dictionary2 = _interopRequireDefault(_dictionary);

var _typeKeys = require('./inc/type-keys');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _popmotion.createAdapter)({
    setter: function (element, props) {
        var builtProps = (0, _build2.default)(props);

        for (var key in builtProps) {
            if (builtProps.hasOwnProperty(key)) {
                element.setAttribute(key, builtProps[key]);
            }
        }
    },

    getter: function (element, key) {
        if (!_dictionary2.default[key]) {
            return element.getAttribute(key);
        } else {
            var prop = element.getAttribute(_dictionary2.default[key].prop);
            return prop[_dictionary2.default[key].unit];
        }
    },

    stateMap: {
        x: _typeKeys.POSITION + 'X',
        y: _typeKeys.POSITION + 'Y',
        z: _typeKeys.POSITION + 'Z',
        rotateX: _typeKeys.ROTATION + 'X',
        rotateY: _typeKeys.ROTATION + 'Y',
        rotateZ: _typeKeys.ROTATION + 'Z'
    },

    valueTypeMap: {
        scale: _popmotion.valueType.scale,
        scaleX: _popmotion.valueType.scale,
        scaleY: _popmotion.valueType.scale,
        scaleZ: _popmotion.valueType.scale,
        color: _popmotion.valueType.color
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hZnJhbWUtYWRhcHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBS2UsOEJBQWM7QUFDekIsVUFBTSxFQUFFLFVBQUMsT0FBTyxFQUFFLEtBQUssRUFBSztBQUN4QixZQUFNLFVBQVUsR0FBRyxxQkFBTSxLQUFLLENBQUMsQ0FBQzs7QUFFaEMsYUFBSyxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUU7QUFDeEIsZ0JBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNoQyx1QkFBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDOUM7U0FDSjtLQUNKOztBQUVELFVBQU0sRUFBRSxVQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUs7QUFDdEIsWUFBSSxDQUFDLHFCQUFXLEdBQUcsQ0FBQyxFQUFFO0FBQ2xCLG1CQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEMsTUFBTTtBQUNILGdCQUFNLElBQUksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLHFCQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hELG1CQUFPLElBQUksQ0FBQyxxQkFBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQztLQUNKOztBQUVELFlBQVEsRUFBRTtBQUNOLFNBQUMsRUFBRSxxQkFBVyxHQUFHO0FBQ2pCLFNBQUMsRUFBRSxxQkFBVyxHQUFHO0FBQ2pCLFNBQUMsRUFBRSxxQkFBVyxHQUFHO0FBQ2pCLGVBQU8sRUFBRSxxQkFBVyxHQUFHO0FBQ3ZCLGVBQU8sRUFBRSxxQkFBVyxHQUFHO0FBQ3ZCLGVBQU8sRUFBRSxxQkFBVyxHQUFHO0tBQzFCOztBQUVELGdCQUFZLEVBQUU7QUFDVixhQUFLLEVBQUUscUJBQVUsS0FBSztBQUN0QixjQUFNLEVBQUUscUJBQVUsS0FBSztBQUN2QixjQUFNLEVBQUUscUJBQVUsS0FBSztBQUN2QixjQUFNLEVBQUUscUJBQVUsS0FBSztBQUN2QixhQUFLLEVBQUUscUJBQVUsS0FBSztLQUN6QjtDQUNKLENBQUMiLCJmaWxlIjoiYWZyYW1lLWFkYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBZGFwdGVyLCB2YWx1ZVR5cGUsIHV0aWxzIH0gZnJvbSAncG9wbW90aW9uJztcbmltcG9ydCBidWlsZCBmcm9tICcuL2luYy9idWlsZCc7XG5pbXBvcnQgZGljdGlvbmFyeSBmcm9tICcuL2luYy9kaWN0aW9uYXJ5JztcbmltcG9ydCB7IFBPU0lUSU9OLCBST1RBVElPTiB9IGZyb20gJy4vaW5jL3R5cGUta2V5cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkYXB0ZXIoe1xuICAgIHNldHRlcjogKGVsZW1lbnQsIHByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1aWx0UHJvcHMgPSBidWlsZChwcm9wcyk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGJ1aWx0UHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChidWlsdFByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGJ1aWx0UHJvcHNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0dGVyOiAoZWxlbWVudCwga2V5KSA9PiB7XG4gICAgICAgIGlmICghZGljdGlvbmFyeVtrZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3AgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShkaWN0aW9uYXJ5W2tleV0ucHJvcCk7XG4gICAgICAgICAgICByZXR1cm4gcHJvcFtkaWN0aW9uYXJ5W2tleV0udW5pdF07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhdGVNYXA6IHtcbiAgICAgICAgeDogUE9TSVRJT04gKyAnWCcsXG4gICAgICAgIHk6IFBPU0lUSU9OICsgJ1knLFxuICAgICAgICB6OiBQT1NJVElPTiArICdaJyxcbiAgICAgICAgcm90YXRlWDogUk9UQVRJT04gKyAnWCcsXG4gICAgICAgIHJvdGF0ZVk6IFJPVEFUSU9OICsgJ1knLFxuICAgICAgICByb3RhdGVaOiBST1RBVElPTiArICdaJ1xuICAgIH0sXG5cbiAgICB2YWx1ZVR5cGVNYXA6IHtcbiAgICAgICAgc2NhbGU6IHZhbHVlVHlwZS5zY2FsZSxcbiAgICAgICAgc2NhbGVYOiB2YWx1ZVR5cGUuc2NhbGUsXG4gICAgICAgIHNjYWxlWTogdmFsdWVUeXBlLnNjYWxlLFxuICAgICAgICBzY2FsZVo6IHZhbHVlVHlwZS5zY2FsZSxcbiAgICAgICAgY29sb3I6IHZhbHVlVHlwZS5jb2xvclxuICAgIH1cbn0pOyJdfQ==