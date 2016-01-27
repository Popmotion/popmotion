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
        var valueTypeMap = renderer && renderer.valueTypeMap ? renderer.valueTypeMap : false;

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
                    } else if (valueTypeMap) {
                            valueType = valueTypeMap[mapKey(key, renderer)];
                        }

                    // Maybe run `test` on color here
                }

            // If we've got a valueType then preprocess the value accordingly
            if (valueType) {
                value.type = valueType;

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
                                        childValues[splitKey] = _extends({}, newValue);

                                        if (valueType.defaultProps) {
                                            childValues[splitKey] = valueType.defaultProps[splitKey] ? _extends({}, valueType.defaultProps[splitKey], childValues[splitKey]) : _extends({}, valueType.defaultProps, childValues[splitKey]);
                                        }
                                    }

                                    childValues[splitKey][propName] = splitValue;
                                });
                            }
                        });

                        newValue.children = {};

                        // Now loop through all child values and add them as normal values
                        (0, _utils.each)(childValues, function (childValue, childKey) {
                            var combinedKey = key + childKey;

                            newValue.children[key] = childValue.current;
                            currentValues[combinedKey] = childValue;

                            if (_this2.valueKeys.indexOf(combinedKey) === -1) {
                                _this2.valueKeys.push(combinedKey);
                            }
                        });

                        // Save a template for recombination if present
                        if (valueType.template) {
                            newValue.template = newValue.template || valueType.template(newValue.current);
                        }

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

        // Update base values
        for (var i = 0; i < this.numValueKeys; i++) {
            var key = this.valueKeys[i];
            var value = this.values[key];

            var updatedValue = value.current;

            // Run transform function (if present)
            if (value.transform) {
                updatedValue = value.transform(updatedValue, key, this);
            }

            // Smooth value if we have smoothing
            if (value.smooth) {
                updatedValue = (0, _calc.smooth)(updatedValue, value.current, elapsed, value.smooth);
            }

            value.velocity = (0, _calc.speedPerSecond)(updatedValue - value.current, elapsed);

            value.current = updatedValue;

            var valueForState = value.unit ? value.current + value.unit : value.current;

            // Add straight to state if no parent
            if (!value.parent) {
                var mappedKey = mapKey(key, this.onRender);

                if (this.state[mappedKey] !== valueForState) {
                    this.state[mappedKey] = valueForState;
                    hasChanged = true;
                }
                // Or add to parent
            } else {
                    this.values[value.parent].children[key] = valueForState;
                }
        }

        // Update parent values
        for (var i = 0; i < this.numParentKeys; i++) {
            var key = this.parentKeys[i];
            var value = this.values[key];
            var mappedKey = mapKey(key, this.onRender);

            value.current = value.type.combine(value.children, value.template);

            if (this.state[mappedKey] !== value.current) {
                this.state[mappedKey] = value.current;
                hasChanged = true;
            }
        }

        return this.onCleanup ? true : hasChanged;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFNLGVBQWUsU0FBZjtBQUNOLElBQU0sbUJBQW1CLENBQUMsWUFBRCxFQUFlLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsQ0FBbkI7Ozs7Ozs7OztBQVNOLElBQU0sU0FBUyxVQUFDLEdBQUQsRUFBTSxRQUFOO1dBQW1CLFFBQUMsSUFBWSxTQUFTLFFBQVQsR0FBcUIsU0FBUyxRQUFULENBQWtCLEdBQWxCLEtBQTBCLEdBQTFCLEdBQWdDLEdBQWxFO0NBQW5COztJQUVNOzs7QUFDakIsYUFEaUIsTUFDakIsQ0FBWSxLQUFaLEVBQW1COzhCQURGLFFBQ0U7O0FBQ2YsY0FBTSxLQUFOLEdBQWMsRUFBZCxDQURlOzs7O3FEQUVmLG9CQUFNLEtBQU4sR0FGZTs7QUFLZixZQUFJLE1BQUssUUFBTCxJQUFpQixNQUFLLFFBQUwsQ0FBYyxJQUFkLEVBQW9CO0FBQ3JDLGtCQUFLLFFBQUwsQ0FBYyxJQUFkLFFBRHFDO1NBQXpDO3FCQUxlO0tBQW5COzs7Ozs7Ozs7QUFEaUIscUJBa0JqQixtQkFBSSxPQUFPOzs7WUFDQyxTQUEwQixNQUExQixPQUREOztZQUNZLHNDQUFlLG1CQUQzQjs7QUFHUCwyQkFBTSxHQUFOLFlBQVUsVUFBVixFQUhPOztBQUtQLGFBQUssTUFBTCxHQUFjLEtBQUssTUFBTCxJQUFlLEVBQWYsQ0FMUDtBQU1QLGFBQUssU0FBTCxHQUFpQixLQUFLLFNBQUwsSUFBa0IsRUFBbEIsQ0FOVjtBQU9QLGFBQUssVUFBTCxHQUFrQixLQUFLLFVBQUwsSUFBbUIsRUFBbkI7OztBQVBYLFlBVUQsZ0JBQWdCLEtBQUssTUFBTCxDQVZmO0FBV1AsWUFBTSxlQUFlLEtBQUssZUFBTCxFQUFmLENBWEM7QUFZUCxZQUFNLG1CQUFtQixLQUFLLG1CQUFMLEVBQW5CLENBWkM7QUFhUCxZ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QUV6QyxnQkFBTSxRQUFRLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBUixDQUZtQztBQUd6QyxnQkFBTSxZQUFZLE9BQU8sR0FBUCxFQUFZLEtBQUssUUFBTCxDQUF4QixDQUhtQzs7QUFLekMsa0JBQU0sT0FBTixHQUFnQixNQUFNLElBQU4sQ0FBVyxPQUFYLENBQW1CLE1BQU0sUUFBTixFQUFnQixNQUFNLFFBQU4sQ0FBbkQsQ0FMeUM7O0FBT3pDLGdCQUFJLEtBQUssS0FBTCxDQUFXLFNBQVgsTUFBMEIsTUFBTSxPQUFOLEVBQWU7QUFDekMscUJBQUssS0FBTCxDQUFXLFNBQVgsSUFBd0IsTUFBTSxPQUFOLENBRGlCO0FBRXpDLDZCQUFhLElBQWIsQ0FGeUM7YUFBN0M7U0FQSjs7QUFhQSxlQUFPLElBQUMsQ0FBSyxTQUFMLEdBQWtCLElBQW5CLEdBQTBCLFVBQTFCLENBdEQ2Qjs7O0FBL0p2QixxQkF3TmpCLHlCQUFRO0FBQ0osMkJBQU0sSUFBTixZQURJO0FBRUosZUFBTyxJQUFQLENBRkk7OztBQXhOUyxxQkE2TmpCLDJCQUFTO0FBQ0wsMkJBQU0sS0FBTixZQURLO0FBRUwsZUFBTyxJQUFQLENBRks7Ozs7Ozs7O0FBN05RLHFCQXVPakIsNkNBQWtCO0FBQ2QsZUFBTztBQUNILHFCQUFTLENBQVQ7QUFDQSxzQkFBVSxDQUFWO1NBRkosQ0FEYzs7Ozs7Ozs7O0FBdk9ELHFCQW9QakIscURBQXNCO0FBQ2xCLGVBQU8sWUFBUCxDQURrQjs7O1dBcFBMIiwiZmlsZSI6IkFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9jZXNzIGZyb20gJy4uL3Byb2Nlc3MvUHJvY2Vzcyc7XG5pbXBvcnQgeyBzbW9vdGgsIHNwZWVkUGVyU2Vjb25kIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgZWFjaCwgaXNPYmogfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBERUZBVUxUX1BST1AgPSAnY3VycmVudCc7XG5jb25zdCBOVU1FUklDQUxfVkFMVUVTID0gW0RFRkFVTFRfUFJPUCwgJ2Zyb20nLCAndG8nLCAnbWluJywgJ21heCddO1xuXG4vKlxuICAgIE1hcCBrZXkgZ2l2ZW4gZ2l2ZW4gc3RhdGVNYXBcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbUmVuZGVyZXJdXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbmNvbnN0IG1hcEtleSA9IChrZXksIHJlbmRlcmVyKSA9PiAocmVuZGVyZXIgJiYgcmVuZGVyZXIuc3RhdGVNYXApID8gcmVuZGVyZXIuc3RhdGVNYXBba2V5XSB8fCBrZXkgOiBrZXk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIFByb2Nlc3Mge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICAvLyBJbml0YWxpc2UgcmVuZGVyZXIgXG4gICAgICAgIGlmICh0aGlzLm9uUmVuZGVyICYmIHRoaXMub25SZW5kZXIuaW5pdCkge1xuICAgICAgICAgICAgdGhpcy5vblJlbmRlci5pbml0KHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICAgKi9cbiAgICBzZXQocHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMsIC4uLnByb3BzVG9TZXQgfSA9IHByb3BzO1xuXG4gICAgICAgIHN1cGVyLnNldChwcm9wc1RvU2V0KTtcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzIHx8IHt9O1xuICAgICAgICB0aGlzLnZhbHVlS2V5cyA9IHRoaXMudmFsdWVLZXlzIHx8IFtdO1xuICAgICAgICB0aGlzLnBhcmVudEtleXMgPSB0aGlzLnBhcmVudEtleXMgfHwgW107XG5cbiAgICAgICAgLy8gTWVyZ2UgbmV3IGB2YWx1ZWAgcHJvcGVydGllcyB3aXRoIGV4aXN0aW5nXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gdGhpcy5nZXREZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlUHJvcCA9IHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpO1xuICAgICAgICBjb25zdCByZW5kZXJlciA9IHRoaXMub25SZW5kZXI7XG4gICAgICAgIGxldCB2YWx1ZVR5cGVNYXAgPSAocmVuZGVyZXIgJiYgcmVuZGVyZXIudmFsdWVUeXBlTWFwKSA/IHJlbmRlcmVyLnZhbHVlVHlwZU1hcCA6IGZhbHNlO1xuXG4gICAgICAgIC8vIEluaGVyaXQgdmFsdWUgcHJvcGVydGllcyBmcm9tIGBwcm9wc2BcbiAgICAgICAgZWFjaChkZWZhdWx0VmFsdWUsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvcHNUb1NldFtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWVba2V5XSA9IHByb3BzVG9TZXRba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2hlY2sgYWxsIHZhbHVlcyBhbmQgc3BsaXQgaW50byBjaGlsZCB2YWx1ZXMgYXMgbmVjY2Vzc2FyeVxuICAgICAgICBlYWNoKHZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVmFsdWUgPSBjdXJyZW50VmFsdWVzW2tleV07XG4gICAgICAgICAgICBsZXQgdmFsdWVUeXBlID0ge307XG4gICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSB7fTtcblxuICAgICAgICAgICAgLy8gQ29udmVydCBuZXcgdmFsdWUgaW50byBvYmplY3QgaWYgaXQgaXNuJ3QgYWxyZWFkeVxuICAgICAgICAgICAgaWYgKGlzT2JqKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHZhbHVlIGFscmVhZHkgZXhpc3RzLCBjaGVjayBmb3IgYW5kIHVzZSBleGlzdGluZyB0eXBlXG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0geyAuLi5leGlzdGluZ1ZhbHVlLCAuLi5uZXdWYWx1ZSB9O1xuICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IGV4aXN0aW5nVmFsdWUudHlwZTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIG5ldyB2YWx1ZSwgY2hlY2sgZm9yIHR5cGVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLmRlZmF1bHRWYWx1ZSwgLi4ubmV3VmFsdWUgfTtcblxuICAgICAgICAgICAgICAgIC8vIElmIG9uZSBpcyBleHBsaWNpdGx5IGFzc2lnbmVkLCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLnR5cGU7XG5cbiAgICAgICAgICAgICAgICAvLyBPciBpZiBvdXIgcmVuZGVyZXIgaGFzIGEgdHlwZU1hcCwgdXNlIHRoYXRcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZU1hcCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZVR5cGVNYXBbbWFwS2V5KGtleSwgcmVuZGVyZXIpXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNYXliZSBydW4gYHRlc3RgIG9uIGNvbG9yIGhlcmVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgd2UndmUgZ290IGEgdmFsdWVUeXBlIHRoZW4gcHJlcHJvY2VzcyB0aGUgdmFsdWUgYWNjb3JkaW5nbHlcbiAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS50eXBlID0gdmFsdWVUeXBlO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBzaG91bGQgYmUgc3BsaXQsIHNwbGl0XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZS5zcGxpdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZFZhbHVlcyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIExvb3Agb3ZlciBudW1lcmljYWwgdmFsdWVzIGFuZCBzcGxpdCBhbnkgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICBOVU1FUklDQUxfVkFMVUVTLmZvckVhY2goKHByb3BOYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZXMgPSB2YWx1ZVR5cGUuc3BsaXQobmV3VmFsdWVbcHJvcE5hbWVdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhY2goc3BsaXRWYWx1ZXMsIChzcGxpdFZhbHVlLCBzcGxpdEtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IGNoaWxkIHZhbHVlIGlmIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZFZhbHVlc1tzcGxpdEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWVzW3NwbGl0S2V5XSA9IHsgLi4ubmV3VmFsdWUgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlc1tzcGxpdEtleV0gPSAodmFsdWVUeXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi52YWx1ZVR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSwgLi4uY2hpbGRWYWx1ZXNbc3BsaXRLZXldIH0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IC4uLnZhbHVlVHlwZS5kZWZhdWx0UHJvcHMsIC4uLmNoaWxkVmFsdWVzW3NwbGl0S2V5XSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZXNbc3BsaXRLZXldW3Byb3BOYW1lXSA9IHNwbGl0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm93IGxvb3AgdGhyb3VnaCBhbGwgY2hpbGQgdmFsdWVzIGFuZCBhZGQgdGhlbSBhcyBub3JtYWwgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIGVhY2goY2hpbGRWYWx1ZXMsIChjaGlsZFZhbHVlLCBjaGlsZEtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tYmluZWRLZXkgPSBrZXkgKyBjaGlsZEtleTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW5ba2V5XSA9IGNoaWxkVmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNbY29tYmluZWRLZXldID0gY2hpbGRWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2YoY29tYmluZWRLZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goY29tYmluZWRLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIGEgdGVtcGxhdGUgZm9yIHJlY29tYmluYXRpb24gaWYgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVUeXBlLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50ZW1wbGF0ZSA9IG5ld1ZhbHVlLnRlbXBsYXRlIHx8IHZhbHVlVHlwZS50ZW1wbGF0ZShuZXdWYWx1ZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gT3Igd2UganVzdCBoYXZlIGRlZmF1bHQgdmFsdWUgcHJvcHMsIGxvYWQgdGhvc2UgICBcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLnZhbHVlVHlwZS5kZWZhdWx0UHJvcHMsIC4uLm5ld1ZhbHVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgYXBwcm9wcmlhdGUgbGlzdHMgd2l0aCB2YWx1ZSBrZXlcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZUtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudFZhbHVlc1trZXldID0gbmV3VmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFByZWNvbXB1dGUgdmFsdWUga2V5IGFuZCBwYXJlbnQga2V5IGxlbmd0aCB0byBwcmV2ZW50IHBlci1mcmFtZSBtZWFzdXJlbWVudFxuICAgICAgICB0aGlzLm51bVZhbHVlS2V5cyA9IHRoaXMudmFsdWVLZXlzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5udW1QYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzLmxlbmd0aDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG5cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybiB0cnVlIHRvIHJlbmRlclxuICAgICovXG4gICAgd2lsbFJlbmRlcihhY3Rpb24sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBVcGRhdGUgYmFzZSB2YWx1ZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgbGV0IHVwZGF0ZWRWYWx1ZSA9IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gdmFsdWUudHJhbnNmb3JtKHVwZGF0ZWRWYWx1ZSwga2V5LCB0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU21vb3RoIHZhbHVlIGlmIHdlIGhhdmUgc21vb3RoaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc21vb3RoKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gc21vb3RoKHVwZGF0ZWRWYWx1ZSwgdmFsdWUuY3VycmVudCwgZWxhcHNlZCwgdmFsdWUuc21vb3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSBzcGVlZFBlclNlY29uZCh1cGRhdGVkVmFsdWUgLSB2YWx1ZS5jdXJyZW50LCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHVwZGF0ZWRWYWx1ZTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVGb3JTdGF0ZSA9ICh2YWx1ZS51bml0KSA/IHZhbHVlLmN1cnJlbnQgKyB2YWx1ZS51bml0IDogdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgLy8gQWRkIHN0cmFpZ2h0IHRvIHN0YXRlIGlmIG5vIHBhcmVudFxuICAgICAgICAgICAgaWYgKCF2YWx1ZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWRLZXkgPSBtYXBLZXkoa2V5LCB0aGlzLm9uUmVuZGVyKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW21hcHBlZEtleV0gIT09IHZhbHVlRm9yU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVttYXBwZWRLZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1t2YWx1ZS5wYXJlbnRdLmNoaWxkcmVuW2tleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVBhcmVudEtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5wYXJlbnRLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgY29uc3QgbWFwcGVkS2V5ID0gbWFwS2V5KGtleSwgdGhpcy5vblJlbmRlcik7XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50eXBlLmNvbWJpbmUodmFsdWUuY2hpbGRyZW4sIHZhbHVlLnRlbXBsYXRlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVbbWFwcGVkS2V5XSAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVbbWFwcGVkS2V5XSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHRoaXMub25DbGVhbnVwKSA/IHRydWUgOiBoYXNDaGFuZ2VkO1xuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICB2ZWxvY2l0eTogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnR5IG5hbWVcbiAgICAgICAgIyMgU2V0IHRoaXMgYHZhbHVlYCBwcm9wZXJ0eSB3aGVuIHNldCBhcyB2YWx1ZSBpbnN0ZWFkIG9mIG9iamVjdFxuXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfVxufVxuIl19