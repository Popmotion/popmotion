'use strict';

exports.__esModule = true;

exports.default = function (state) {
    var props = {};

    (0, _utils.each)(state, function (key, value) {
        if (_dictionary2.default[key]) {
            props[_dictionary2.default[key].prop] = createTemplateProp(props[_dictionary2.default[key].prop], _dictionary2.default[key].position, value);
        } else {
            props[(0, _utils.camelToDash)(key)] = value;
        }
    });

    TYPES.forEach(function (type) {
        if (props[type]) {
            props[type] = applyDefaults(type, props[type]);
        }
    });

    return props;
};

var _dictionary = require('./dictionary');

var _dictionary2 = _interopRequireDefault(_dictionary);

var _typesXyz = require('./types-xyz');

var _utils = require('../../inc/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var XYZ_TEMPLATE = '$0 $1 $2';
var TYPES = [_typesXyz.POSITION, _typesXyz.SCALE, _typesXyz.ROTATION];

// Replace this with some kind of hook into Popmotion valueTypes
var defaults = {};
defaults[_typesXyz.POSITION] = defaults[_typesXyz.ROTATION] = 0;
defaults[_typesXyz.SCALE] = 1;

function createTemplateProp(existing, position, value) {
    var prop = existing || XYZ_TEMPLATE;

    prop = prop.replace('$' + position, value);

    return prop;
}

function applyDefaults(type, existing) {
    return existing.replace('$0', defaults[type]).replace('$1', defaults[type]).replace('$2', defaults[type]);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb2xlcy9hZnJhbWUvYnVpbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztrQkF3QmUsVUFBVSxLQUFWLEVBQWlCO0FBQzVCLFFBQUksUUFBUSxFQUFSLENBRHdCOztBQUc1QixlQXpCSyxLQXlCTCxDQUFLLEtBQUwsRUFBWSxVQUFDLEdBQUQsRUFBTSxLQUFOLEVBQWdCO0FBQ3hCLFlBQUkscUJBQVcsR0FBWCxDQUFKLEVBQXFCO0FBQ2pCLGtCQUFNLHFCQUFXLEdBQVgsRUFBZ0IsSUFBaEIsQ0FBTixHQUE4QixtQkFBbUIsTUFBTSxxQkFBVyxHQUFYLEVBQWdCLElBQWhCLENBQXpCLEVBQWdELHFCQUFXLEdBQVgsRUFBZ0IsUUFBaEIsRUFBMEIsS0FBMUUsQ0FBOUIsQ0FEaUI7U0FBckIsTUFHTztBQUNILGtCQUFNLFdBOUJILFlBOEJHLENBQVksR0FBWixDQUFOLElBQTBCLEtBQTFCLENBREc7U0FIUDtLQURRLENBQVosQ0FINEI7O0FBWTVCLFVBQU0sT0FBTixDQUFjLFVBQUMsSUFBRCxFQUFVO0FBQ3BCLFlBQUksTUFBTSxJQUFOLENBQUosRUFBaUI7QUFDYixrQkFBTSxJQUFOLElBQWMsY0FBYyxJQUFkLEVBQW9CLE1BQU0sSUFBTixDQUFwQixDQUFkLENBRGE7U0FBakI7S0FEVSxDQUFkLENBWjRCOztBQWtCNUIsV0FBTyxLQUFQLENBbEI0QjtDQUFqQjs7Ozs7Ozs7Ozs7O0FBcEJmLElBQU0sZUFBZSxVQUFmO0FBQ04sSUFBTSxRQUFRLFdBSkwsUUFJSyxZQUpLLEtBSUwsWUFKWSxRQUlaLENBQVI7OztBQUdOLElBQUksV0FBVyxFQUFYO0FBQ0osbUJBUlMsUUFRVCxJQUFxQixtQkFSSyxRQVFMLElBQXFCLENBQXJCO0FBQ3JCLG1CQVRtQixLQVNuQixJQUFrQixDQUFsQjs7QUFFQSxTQUFTLGtCQUFULENBQTRCLFFBQTVCLEVBQXNDLFFBQXRDLEVBQWdELEtBQWhELEVBQXVEO0FBQ25ELFFBQUksT0FBTyxZQUFZLFlBQVosQ0FEd0M7O0FBR25ELFdBQU8sS0FBSyxPQUFMLENBQWEsTUFBTSxRQUFOLEVBQWdCLEtBQTdCLENBQVAsQ0FIbUQ7O0FBS25ELFdBQU8sSUFBUCxDQUxtRDtDQUF2RDs7QUFRQSxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsRUFBNkIsUUFBN0IsRUFBdUM7QUFDbkMsV0FBTyxTQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUIsU0FBUyxJQUFULENBQXZCLEVBQXVDLE9BQXZDLENBQStDLElBQS9DLEVBQXFELFNBQVMsSUFBVCxDQUFyRCxFQUFxRSxPQUFyRSxDQUE2RSxJQUE3RSxFQUFtRixTQUFTLElBQVQsQ0FBbkYsQ0FBUCxDQURtQztDQUF2QyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkaWN0aW9uYXJ5IGZyb20gJy4vZGljdGlvbmFyeSc7XG5pbXBvcnQgeyBQT1NJVElPTiwgU0NBTEUsIFJPVEFUSU9OIH0gZnJvbSAnLi90eXBlcy14eXonO1xuaW1wb3J0IHsgZWFjaCwgY2FtZWxUb0Rhc2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBYWVpfVEVNUExBVEUgPSAnJDAgJDEgJDInO1xuY29uc3QgVFlQRVMgPSBbUE9TSVRJT04sIFNDQUxFLCBST1RBVElPTl07XG5cbi8vIFJlcGxhY2UgdGhpcyB3aXRoIHNvbWUga2luZCBvZiBob29rIGludG8gUG9wbW90aW9uIHZhbHVlVHlwZXNcbmxldCBkZWZhdWx0cyA9IHt9O1xuZGVmYXVsdHNbUE9TSVRJT05dID0gZGVmYXVsdHNbUk9UQVRJT05dID0gMDtcbmRlZmF1bHRzW1NDQUxFXSA9IDE7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlUHJvcChleGlzdGluZywgcG9zaXRpb24sIHZhbHVlKSB7XG4gICAgbGV0IHByb3AgPSBleGlzdGluZyB8fCBYWVpfVEVNUExBVEU7XG5cbiAgICBwcm9wID0gcHJvcC5yZXBsYWNlKCckJyArIHBvc2l0aW9uLCB2YWx1ZSk7XG5cbiAgICByZXR1cm4gcHJvcDtcbn1cblxuZnVuY3Rpb24gYXBwbHlEZWZhdWx0cyh0eXBlLCBleGlzdGluZykge1xuICAgIHJldHVybiBleGlzdGluZy5yZXBsYWNlKCckMCcsIGRlZmF1bHRzW3R5cGVdKS5yZXBsYWNlKCckMScsIGRlZmF1bHRzW3R5cGVdKS5yZXBsYWNlKCckMicsIGRlZmF1bHRzW3R5cGVdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIGxldCBwcm9wcyA9IHt9O1xuXG4gICAgZWFjaChzdGF0ZSwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKGRpY3Rpb25hcnlba2V5XSkge1xuICAgICAgICAgICAgcHJvcHNbZGljdGlvbmFyeVtrZXldLnByb3BdID0gY3JlYXRlVGVtcGxhdGVQcm9wKHByb3BzW2RpY3Rpb25hcnlba2V5XS5wcm9wXSwgZGljdGlvbmFyeVtrZXldLnBvc2l0aW9uLCB2YWx1ZSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzW2NhbWVsVG9EYXNoKGtleSldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIFRZUEVTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgaWYgKHByb3BzW3R5cGVdKSB7XG4gICAgICAgICAgICBwcm9wc1t0eXBlXSA9IGFwcGx5RGVmYXVsdHModHlwZSwgcHJvcHNbdHlwZV0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvcHM7XG59Il19