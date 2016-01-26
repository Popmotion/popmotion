'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Process2 = require('../process/Process');

var _Process3 = _interopRequireDefault(_Process2);

var _calc = require('../inc/calc');

var _utils = require('../inc/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_PROP = 'current';
var NUMERICAL_VALUES = [DEFAULT_PROP, 'from', 'to', 'min', 'max'];
var NUM_NUMERICAL_VALUES = NUMERICAL_VALUES.length;

/*
    Map key given given stateMap

    @param [string]
    @param [Renderer]
    @return [string]
*/
var mapKey = function (key, renderer) {
    return renderer && renderer.stateMap ? renderer.stateMap[key] || key : key;
};

var Action = function (_Process) {
    _inherits(Action, _Process);

    function Action(props) {
        _classCallCheck(this, Action);

        props.state = {};

        // Initalise renderer

        var _this = _possibleConstructorReturn(this, _Process.call(this, props));

        if (_this.onRender && _this.onRender.init) {
            _this.onRender.init(_this);
        }
        return _this;
    }

    /*
        # Set Action properties
        ## Set user-defined Action properties
         @param [object]
        @return [Action]
    */

    Action.prototype.set = function set(props) {
        var _this2 = this;

        var values = props.values;

        var propsToSet = _objectWithoutProperties(props, ['values']);

        _Process.prototype.set.call(this, propsToSet);

        this.values = this.values || {};
        this.valueKeys = this.valueKeys || [];
        this.parentKeys = this.parentKeys || [];

        // Merge new `value` properties with existing
        var currentValues = this.values;
        var defaultValue = this.getDefaultValue();
        var defaultValueProp = this.getDefaultValueProp();
        var renderer = this.onRender;
        var preprocessedValues = {};
        var valueTypeMap = {};

        // Load value type map if present
        if (renderer && renderer.valueTypeMap) {
            valueTypeMap = this.onRender.valueTypeMap;
        }

        // Inherit value properties from `props`
        (0, _utils.each)(defaultValue, function (value, key) {
            if (propsToSet[key] !== undefined) {
                defaultValue[key] = propsToSet[key];
            }
        });

        // Check all values and split into child values as neccessary
        (0, _utils.each)(values, function (value, key) {
            var existingValue = currentValues[key];
            var valueType = {};
            var newValue = {};

            // Convert new value into object if it isn't already
            if ((0, _utils.isObj)(value)) {
                newValue = value;
            } else {
                newValue[defaultValueProp] = value;
            }

            // If value already exists, check for and use existing type
            if (existingValue) {
                newValue = _extends({}, existingValue, newValue);
                valueType = existingValue.type;

                // If this is a new value, check for type
            } else {
                    newValue = _extends({}, defaultValue, newValue);
                    // If one is explicitly assigned, use that
                    if (value.type) {
                        valueType = value.type;

                        // Or if our renderer has a typeMap, use that
                    } else if (renderer && renderer.valueTypeMap) {
                            valueType = renderer.valueTypeMap[mapKey(key, renderer)];
                        }

                    // Maybe run `test` on color here
                }

            // If we've got a valueType then preprocess the value accordingly
            if (valueType) {
                // If this value should be split, split
                if (valueType.split) {
                    (function () {
                        var childValues = {};

                        // Loop over numerical values and split any present
                        NUMERICAL_VALUES.forEach(function (propName) {
                            if (newValue.hasOwnProperty(propName)) {
                                var splitValues = valueType.split(newValue[propName]);

                                (0, _utils.each)(splitValues, function (splitValue, splitKey) {
                                    // Create new child value if doesn't exist
                                    if (!childValues[splitKey]) {
                                        childValues[splitKey] = {};

                                        if (valueType.defaultProps) {
                                            childValues[splitKey] = valueType.defaultProps[splitKey] ? _extends({}, valueType.defaultProps[splitKey]) : _extends({}, valueType.defaultProps);
                                        }
                                    }

                                    childValues[splitKey][propName] = splitValue;
                                });
                            }
                        });

                        newValue.children = [];

                        // Now loop through all child values and add them as normal values
                        (0, _utils.each)(childValues, function (childValue, childKey) {
                            var combinedKey = key + childKey;

                            newValue.children.push(combinedKey);
                            currentValues[combinedKey] = childValue;

                            if (_this2.valueKeys.indexOf(combinedKey) === -1) {
                                _this2.valueKeys.push(combinedKey);
                            }
                        });

                        // Or we just have default value props, load those 
                    })();
                } else if (valueType.defaultProps) {
                        newValue = _extends({}, valueType.defaultProps, newValue);
                    }
            }

            // Update appropriate lists with value key
            if (newValue.children) {
                if (_this2.parentKeys.indexOf(key) === -1) {
                    _this2.parentKeys.push(key);
                }
            } else {
                if (_this2.valueKeys.indexOf(key) === -1) {
                    _this2.valueKeys.push(key);
                }
            }

            currentValues[key] = newValue;
        });

        // Precompute value key and parent key length to prevent per-frame measurement
        this.numValueKeys = this.valueKeys.length;
        this.numParentKeys = this.parentKeys.length;

        return this;
    };

    /*
        Decide whether this Action will render on next frame
         @param [Action]
        @param [number]
        @param [number]
        @return [boolean]: Return true to render
    */

    Action.prototype.willRender = function willRender(action, frameStamp, elapsed) {
        var hasChanged = false;

        for (var i = 0; i < this.numValueKeys; i++) {
            var key = this.valueKeys[i];
            var value = this.values[key];

            var updatedValue = value.current;

            // Update value based on active action
            if (value.action) {
                updatedValue = value.action.values[key].current;
            }

            // Run transform function (if present)
            if (value.transform) {
                updatedValue = value.transform(updatedValue, key, this);
            }

            // Smooth value if we have smoothing
            if (value.smooth) {
                updatedValue = smooth(updatedValue, value.current, elapsed, value.smooth);
            }

            // Round value
            if (value.round) {
                updatedValue = Math.round(updatedValue);
            }

            // Cap to minimum value
            if (value.min !== undefined) {
                updatedValue = Math.max(updatedValue, value.min);
            }

            // Cap to maximum value
            if (value.max !== undefined) {
                updatedValue = Math.min(updatedValue, value.max);
            }

            value.velocity = (0, _calc.speedPerSecond)(updatedValue - value.current, elapsed);

            if (updatedValue !== value.current) {
                hasChanged = true;
            }

            value.current = updatedValue;
        }

        return this.onCleanup ? true : hasChanged;
    };

    Action.prototype.onPreRender = function onPreRender() {
        for (var i = 0; i < this.numValueKeys; i++) {
            var key = this.valueKeys[i];
            var value = this.values[key];

            var valueForState = value.unit ? value.current + value.unit : value.current;

            // Add straight to state if no parent
            if (!value.parent) {
                this.state[mapKey(key, this.onRender)] = valueForState;

                // Or add to parent
            } else {
                    this.values[value.parent].children[key] = valueForState;
                }
        }
    };

    Action.prototype.pause = function pause() {
        _Process.prototype.stop.call(this);
        return this;
    };

    Action.prototype.resume = function resume() {
        _Process.prototype.start.call(this);
        return this;
    };

    /*
        # Get default Action value properties
         @return [object]
    */

    Action.prototype.getDefaultValue = function getDefaultValue() {
        return {
            current: 0,
            velocity: 0
        };
    };

    /*
        # Get default Action value property name
        ## Set this `value` property when set as value instead of object
         @return [string]
    */

    Action.prototype.getDefaultValueProp = function getDefaultValueProp() {
        return DEFAULT_PROP;
    };

    return Action;
}(_Process3.default);

exports.default = Action;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFNLGVBQWUsU0FBZjtBQUNOLElBQU0sbUJBQW1CLENBQUMsWUFBRCxFQUFlLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsQ0FBbkI7QUFDTixJQUFNLHVCQUF1QixpQkFBaUIsTUFBakI7Ozs7Ozs7OztBQVM3QixJQUFNLFNBQVMsVUFBQyxHQUFELEVBQU0sUUFBTjtXQUFtQixRQUFDLElBQVksU0FBUyxRQUFULEdBQXFCLFNBQVMsUUFBVCxDQUFrQixHQUFsQixLQUEwQixHQUExQixHQUFnQyxHQUFsRTtDQUFuQjs7SUFFTTs7O0FBQ2pCLGFBRGlCLE1BQ2pCLENBQVksS0FBWixFQUFtQjs4QkFERixRQUNFOztBQUNmLGNBQU0sS0FBTixHQUFjLEVBQWQsQ0FEZTs7OztxREFFZixvQkFBTSxLQUFOLEdBRmU7O0FBS2YsWUFBSSxNQUFLLFFBQUwsSUFBaUIsTUFBSyxRQUFMLENBQWMsSUFBZCxFQUFvQjtBQUNyQyxrQkFBSyxRQUFMLENBQWMsSUFBZCxRQURxQztTQUF6QztxQkFMZTtLQUFuQjs7Ozs7Ozs7O0FBRGlCLHFCQWtCakIsbUJBQUksT0FBTzs7O1lBQ0MsU0FBMEIsTUFBMUIsT0FERDs7WUFDWSxzQ0FBZSxtQkFEM0I7O0FBR1AsMkJBQU0sR0FBTixZQUFVLFVBQVYsRUFITzs7QUFLUCxhQUFLLE1BQUwsR0FBYyxLQUFLLE1BQUwsSUFBZSxFQUFmLENBTFA7QUFNUCxhQUFLLFNBQUwsR0FBaUIsS0FBSyxTQUFMLElBQWtCLEVBQWxCLENBTlY7QUFPUCxhQUFLLFVBQUwsR0FBa0IsS0FBSyxVQUFMLElBQW1CLEVBQW5COzs7QUFQWCxZQVVELGdCQUFnQixLQUFLLE1BQUwsQ0FWZjtBQVdQLFlBQU0sZUFBZSxLQUFLLGVBQUwsRUFBZixDQVhDO0FBWVAsWUFBTSxtQkFB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QUFMLEVBQW1CLEdBQXZDLEVBQTRDO0FBQ3hDLGdCQUFNLE1BQU0sS0FBSyxTQUFMLENBQWUsQ0FBZixDQUFOLENBRGtDO0FBRXhDLGdCQUFNLFFBQVEsS0FBSyxNQUFMLENBQVksR0FBWixDQUFSLENBRmtDOztBQUl4QyxnQkFBTSxnQkFBZ0IsS0FBQyxDQUFNLElBQU4sR0FBYyxNQUFNLE9BQU4sR0FBZ0IsTUFBTSxJQUFOLEdBQWEsTUFBTSxPQUFOOzs7QUFKMUIsZ0JBT3BDLENBQUMsTUFBTSxNQUFOLEVBQWM7QUFDZixxQkFBSyxLQUFMLENBQVcsT0FBTyxHQUFQLEVBQVksS0FBSyxRQUFMLENBQXZCLElBQXlDLGFBQXpDOzs7QUFEZSxhQUFuQixNQUlPO0FBQ0gseUJBQUssTUFBTCxDQUFZLE1BQU0sTUFBTixDQUFaLENBQTBCLFFBQTFCLENBQW1DLEdBQW5DLElBQTBDLGFBQTFDLENBREc7aUJBSlA7U0FQSjs7O0FBL01hLHFCQWdPakIseUJBQVE7QUFDSiwyQkFBTSxJQUFOLFlBREk7QUFFSixlQUFPLElBQVAsQ0FGSTs7O0FBaE9TLHFCQXFPakIsMkJBQVM7QUFDTCwyQkFBTSxLQUFOLFlBREs7QUFFTCxlQUFPLElBQVAsQ0FGSzs7Ozs7Ozs7QUFyT1EscUJBK09qQiw2Q0FBa0I7QUFDZCxlQUFPO0FBQ0gscUJBQVMsQ0FBVDtBQUNBLHNCQUFVLENBQVY7U0FGSixDQURjOzs7Ozs7Ozs7QUEvT0QscUJBNFBqQixxREFBc0I7QUFDbEIsZUFBTyxZQUFQLENBRGtCOzs7V0E1UEw7Ozs7QUErUHBCIiwiZmlsZSI6IkFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9jZXNzIGZyb20gJy4uL3Byb2Nlc3MvUHJvY2Vzcyc7XG5pbXBvcnQgeyBzcGVlZFBlclNlY29uZCB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGVhY2gsIGlzT2JqIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3QgREVGQVVMVF9QUk9QID0gJ2N1cnJlbnQnO1xuY29uc3QgTlVNRVJJQ0FMX1ZBTFVFUyA9IFtERUZBVUxUX1BST1AsICdmcm9tJywgJ3RvJywgJ21pbicsICdtYXgnXTtcbmNvbnN0IE5VTV9OVU1FUklDQUxfVkFMVUVTID0gTlVNRVJJQ0FMX1ZBTFVFUy5sZW5ndGg7XG5cbi8qXG4gICAgTWFwIGtleSBnaXZlbiBnaXZlbiBzdGF0ZU1hcFxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtSZW5kZXJlcl1cbiAgICBAcmV0dXJuIFtzdHJpbmddXG4qL1xuY29uc3QgbWFwS2V5ID0gKGtleSwgcmVuZGVyZXIpID0+IChyZW5kZXJlciAmJiByZW5kZXJlci5zdGF0ZU1hcCkgPyByZW5kZXJlci5zdGF0ZU1hcFtrZXldIHx8IGtleSA6IGtleTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIGV4dGVuZHMgUHJvY2VzcyB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgcHJvcHMuc3RhdGUgPSB7fTtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIC8vIEluaXRhbGlzZSByZW5kZXJlciBcbiAgICAgICAgaWYgKHRoaXMub25SZW5kZXIgJiYgdGhpcy5vblJlbmRlci5pbml0KSB7XG4gICAgICAgICAgICB0aGlzLm9uUmVuZGVyLmluaXQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuICAgIHNldChwcm9wcykge1xuICAgICAgICBjb25zdCB7IHZhbHVlcywgLi4ucHJvcHNUb1NldCB9ID0gcHJvcHM7XG5cbiAgICAgICAgc3VwZXIuc2V0KHByb3BzVG9TZXQpO1xuXG4gICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMgfHwge307XG4gICAgICAgIHRoaXMudmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMgfHwgW107XG4gICAgICAgIHRoaXMucGFyZW50S2V5cyA9IHRoaXMucGFyZW50S2V5cyB8fCBbXTtcblxuICAgICAgICAvLyBNZXJnZSBuZXcgYHZhbHVlYCBwcm9wZXJ0aWVzIHdpdGggZXhpc3RpbmdcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSB0aGlzLmdldERlZmF1bHRWYWx1ZSgpO1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWVQcm9wID0gdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCk7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5vblJlbmRlcjtcbiAgICAgICAgY29uc3QgcHJlcHJvY2Vzc2VkVmFsdWVzID0ge307XG4gICAgICAgIGxldCB2YWx1ZVR5cGVNYXAgPSB7fTtcblxuICAgICAgICAvLyBMb2FkIHZhbHVlIHR5cGUgbWFwIGlmIHByZXNlbnRcbiAgICAgICAgaWYgKHJlbmRlcmVyICYmIHJlbmRlcmVyLnZhbHVlVHlwZU1hcCkge1xuICAgICAgICAgICAgdmFsdWVUeXBlTWFwID0gdGhpcy5vblJlbmRlci52YWx1ZVR5cGVNYXA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbmhlcml0IHZhbHVlIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgXG4gICAgICAgIGVhY2goZGVmYXVsdFZhbHVlLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BzVG9TZXRba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlW2tleV0gPSBwcm9wc1RvU2V0W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENoZWNrIGFsbCB2YWx1ZXMgYW5kIHNwbGl0IGludG8gY2hpbGQgdmFsdWVzIGFzIG5lY2Nlc3NhcnlcbiAgICAgICAgZWFjaCh2YWx1ZXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1ZhbHVlID0gY3VycmVudFZhbHVlc1trZXldO1xuICAgICAgICAgICAgbGV0IHZhbHVlVHlwZSA9IHt9O1xuICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0ge307XG5cbiAgICAgICAgICAgIC8vIENvbnZlcnQgbmV3IHZhbHVlIGludG8gb2JqZWN0IGlmIGl0IGlzbid0IGFscmVhZHlcbiAgICAgICAgICAgIGlmIChpc09iaih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZVtkZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB2YWx1ZSBhbHJlYWR5IGV4aXN0cywgY2hlY2sgZm9yIGFuZCB1c2UgZXhpc3RpbmcgdHlwZVxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4uZXhpc3RpbmdWYWx1ZSwgLi4ubmV3VmFsdWUgfTtcbiAgICAgICAgICAgICAgICB2YWx1ZVR5cGUgPSBleGlzdGluZ1ZhbHVlLnR5cGU7XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBuZXcgdmFsdWUsIGNoZWNrIGZvciB0eXBlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0geyAuLi5kZWZhdWx0VmFsdWUsIC4uLm5ld1ZhbHVlIH07XG4gICAgICAgICAgICAgICAgLy8gSWYgb25lIGlzIGV4cGxpY2l0bHkgYXNzaWduZWQsIHVzZSB0aGF0XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWUudHlwZTtcblxuICAgICAgICAgICAgICAgIC8vIE9yIGlmIG91ciByZW5kZXJlciBoYXMgYSB0eXBlTWFwLCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVuZGVyZXIgJiYgcmVuZGVyZXIudmFsdWVUeXBlTWFwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHJlbmRlcmVyLnZhbHVlVHlwZU1hcFttYXBLZXkoa2V5LCByZW5kZXJlcildO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1heWJlIHJ1biBgdGVzdGAgb24gY29sb3IgaGVyZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSBnb3QgYSB2YWx1ZVR5cGUgdGhlbiBwcmVwcm9jZXNzIHRoZSB2YWx1ZSBhY2NvcmRpbmdseVxuICAgICAgICAgICAgaWYgKHZhbHVlVHlwZSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgc2hvdWxkIGJlIHNwbGl0LCBzcGxpdFxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUuc3BsaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRWYWx1ZXMgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBMb29wIG92ZXIgbnVtZXJpY2FsIHZhbHVlcyBhbmQgc3BsaXQgYW55IHByZXNlbnRcbiAgICAgICAgICAgICAgICAgICAgTlVNRVJJQ0FMX1ZBTFVFUy5mb3JFYWNoKChwcm9wTmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0VmFsdWVzID0gdmFsdWVUeXBlLnNwbGl0KG5ld1ZhbHVlW3Byb3BOYW1lXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlYWNoKHNwbGl0VmFsdWVzLCAoc3BsaXRWYWx1ZSwgc3BsaXRLZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBjaGlsZCB2YWx1ZSBpZiBkb2Vzbid0IGV4aXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2hpbGRWYWx1ZXNbc3BsaXRLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlc1tzcGxpdEtleV0gPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlc1tzcGxpdEtleV0gPSAodmFsdWVUeXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0pID8geyAuLi52YWx1ZVR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSB9IDogeyAuLi52YWx1ZVR5cGUuZGVmYXVsdFByb3BzIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlc1tzcGxpdEtleV1bcHJvcE5hbWVdID0gc3BsaXRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW4gPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBOb3cgbG9vcCB0aHJvdWdoIGFsbCBjaGlsZCB2YWx1ZXMgYW5kIGFkZCB0aGVtIGFzIG5vcm1hbCB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgZWFjaChjaGlsZFZhbHVlcywgKGNoaWxkVmFsdWUsIGNoaWxkS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZEtleSA9IGtleSArIGNoaWxkS2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbi5wdXNoKGNvbWJpbmVkS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNbY29tYmluZWRLZXldID0gY2hpbGRWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2YoY29tYmluZWRLZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goY29tYmluZWRLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIE9yIHdlIGp1c3QgaGF2ZSBkZWZhdWx0IHZhbHVlIHByb3BzLCBsb2FkIHRob3NlICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0geyAuLi52YWx1ZVR5cGUuZGVmYXVsdFByb3BzLCAuLi5uZXdWYWx1ZSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIGFwcHJvcHJpYXRlIGxpc3RzIHdpdGggdmFsdWUga2V5XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IG5ld1ZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBQcmVjb21wdXRlIHZhbHVlIGtleSBhbmQgcGFyZW50IGtleSBsZW5ndGggdG8gcHJldmVudCBwZXItZnJhbWUgbWVhc3VyZW1lbnRcbiAgICAgICAgdGhpcy5udW1WYWx1ZUtleXMgPSB0aGlzLnZhbHVlS2V5cy5sZW5ndGg7XG4gICAgICAgIHRoaXMubnVtUGFyZW50S2V5cyA9IHRoaXMucGFyZW50S2V5cy5sZW5ndGg7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgRGVjaWRlIHdoZXRoZXIgdGhpcyBBY3Rpb24gd2lsbCByZW5kZXIgb24gbmV4dCBmcmFtZVxuXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm4gdHJ1ZSB0byByZW5kZXJcbiAgICAqL1xuICAgIHdpbGxSZW5kZXIoYWN0aW9uLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGxldCBoYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgbGV0IHVwZGF0ZWRWYWx1ZSA9IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB2YWx1ZSBiYXNlZCBvbiBhY3RpdmUgYWN0aW9uXG4gICAgICAgICAgICBpZiAodmFsdWUuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gdmFsdWUuYWN0aW9uLnZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gdmFsdWUudHJhbnNmb3JtKHVwZGF0ZWRWYWx1ZSwga2V5LCB0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU21vb3RoIHZhbHVlIGlmIHdlIGhhdmUgc21vb3RoaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc21vb3RoKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gc21vb3RoKHVwZGF0ZWRWYWx1ZSwgdmFsdWUuY3VycmVudCwgZWxhcHNlZCwgdmFsdWUuc21vb3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUm91bmQgdmFsdWVcbiAgICAgICAgICAgIGlmICh2YWx1ZS5yb3VuZCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IE1hdGgucm91bmQodXBkYXRlZFZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FwIHRvIG1pbmltdW0gdmFsdWVcbiAgICAgICAgICAgIGlmICh2YWx1ZS5taW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IE1hdGgubWF4KHVwZGF0ZWRWYWx1ZSwgdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FwIHRvIG1heGltdW0gdmFsdWVcbiAgICAgICAgICAgIGlmICh2YWx1ZS5tYXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IE1hdGgubWluKHVwZGF0ZWRWYWx1ZSwgdmFsdWUubWF4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSBzcGVlZFBlclNlY29uZCh1cGRhdGVkVmFsdWUgLSB2YWx1ZS5jdXJyZW50LCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgaWYgKHVwZGF0ZWRWYWx1ZSAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdXBkYXRlZFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLm9uQ2xlYW51cCkgPyB0cnVlIDogaGFzQ2hhbmdlZDtcbiAgICB9XG5cbiAgICBvblByZVJlbmRlcigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVGb3JTdGF0ZSA9ICh2YWx1ZS51bml0KSA/IHZhbHVlLmN1cnJlbnQgKyB2YWx1ZS51bml0IDogdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgLy8gQWRkIHN0cmFpZ2h0IHRvIHN0YXRlIGlmIG5vIHBhcmVudFxuICAgICAgICAgICAgaWYgKCF2YWx1ZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlW21hcEtleShrZXksIHRoaXMub25SZW5kZXIpXSA9IHZhbHVlRm9yU3RhdGU7XG5cbiAgICAgICAgICAgIC8vIE9yIGFkZCB0byBwYXJlbnRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlbltrZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICB2ZWxvY2l0eTogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnR5IG5hbWVcbiAgICAgICAgIyMgU2V0IHRoaXMgYHZhbHVlYCBwcm9wZXJ0eSB3aGVuIHNldCBhcyB2YWx1ZSBpbnN0ZWFkIG9mIG9iamVjdFxuXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfVxufTtcbiJdfQ==