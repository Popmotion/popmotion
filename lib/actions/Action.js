'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Process2 = require('../process/Process');

var _Process3 = _interopRequireDefault(_Process2);

var _calc = require('../inc/calc');

var _utils = require('../inc/utils');

var _bindAdapter = require('../inc/bind-adapter');

var _bindAdapter2 = _interopRequireDefault(_bindAdapter);

var _color = require('../value-types/color');

var _color2 = _interopRequireDefault(_color);

var _complex = require('../value-types/complex');

var _complex2 = _interopRequireDefault(_complex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_PROP = 'current';
var NUMERICAL_VALUES = [DEFAULT_PROP, 'from', 'to', 'min', 'max'];
var NUM_NUMERICAL_VALUES = NUMERICAL_VALUES.length;

var Action = function (_Process) {
    _inherits(Action, _Process);

    function Action(props) {
        _classCallCheck(this, Action);

        props.state = {};
        return _possibleConstructorReturn(this, _Process.call(this, props));
    }

    /*
        # Set Action properties
        ## Set user-defined Action properties
         @param [object]
        @return [Action]
    */

    Action.prototype.set = function set() {
        var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var values = props.values;
        var on = props.on;

        var propsToSet = _objectWithoutProperties(props, ['values', 'on']);

        _Process.prototype.set.call(this, propsToSet);

        if (on) {
            // Ducktypish check for Adapter
            this.on = !on.setter ? (0, _bindAdapter2.default)(on) : on;
        }

        this.values = this.values || {};
        this.valueKeys = this.valueKeys || [];
        this.parentKeys = this.parentKeys || [];

        // Merge new `value` properties with existing
        var currentValues = this.values;
        var defaultValue = this.getDefaultValue();
        var defaultValueProp = this.getDefaultValueProp();

        // Inherit value properties from `props`
        for (var key in defaultValue) {
            if (defaultValue.hasOwnProperty(key) && propsToSet.hasOwnProperty(key)) {
                if (propsToSet[key] !== undefined) {
                    defaultValue[key] = propsToSet[key];
                }
            }
        }

        // Check all values and split into child values as neccessary
        for (var key in values) {
            if (values.hasOwnProperty(key)) {
                var value = values[key];
                var existingValue = currentValues[key];
                var valueType = undefined;
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
                    valueType = this.on && this.on.getValueType ? this.on.getValueType(key) : existingValue.type;

                    // If this is a new value, check for type
                } else {
                        if (newValue.from !== undefined) {
                            newValue.current = newValue.from;
                        } else if (newValue.current === undefined && this.on) {
                            newValue.current = this.on.get(key) || 0;
                        }

                        if (newValue.from === undefined) {
                            newValue.from = newValue.current;
                        }

                        newValue = _extends({}, defaultValue, newValue);

                        newValue.prev = newValue.current;

                        // If one is explicitly assigned, use that
                        if (value.type) {
                            valueType = value.type;

                            // Or if our Adapter has a typeMap, use that
                        } else if (this.on && this.on.getValueType) {
                                valueType = this.on.getValueType(key);
                            } else if ((0, _utils.isString)(newValue.current)) {
                                // Test if this is a color value
                                if (_color2.default.test(newValue.current)) {
                                    valueType = _color2.default;
                                } else if (_complex2.default.test(newValue.current)) {
                                    valueType = _complex2.default;
                                }
                            }
                    }

                // If we've got a valueType then preprocess the value accordingly
                if (valueType) {
                    newValue.type = valueType;

                    // If this value should be split, split
                    if (valueType.split) {
                        var childValues = {};

                        // Loop over numerical values and split any present
                        for (var i = 0; i < NUM_NUMERICAL_VALUES; i++) {
                            var propName = NUMERICAL_VALUES[i];

                            if (newValue.hasOwnProperty(propName)) {
                                var splitValues = valueType.split(newValue[propName]);

                                for (var splitKey in splitValues) {
                                    if (splitValues.hasOwnProperty(splitKey)) {
                                        var splitValue = splitValues[splitKey];
                                        // Create new child value if doesn't exist
                                        if (!childValues[splitKey]) {
                                            childValues[splitKey] = _extends({}, newValue, { parent: key, childKey: splitKey });

                                            if (valueType.defaultProps) {
                                                childValues[splitKey] = valueType.defaultProps[splitKey] ? _extends({}, childValues[splitKey], valueType.defaultProps[splitKey]) : _extends({}, childValues[splitKey], valueType.defaultProps);
                                            }
                                        }

                                        var valueSplitFromUnit = (0, _utils.splitValueUnit)(splitValue);
                                        childValues[splitKey][propName] = valueSplitFromUnit.value;
                                        childValues[splitKey].unit = valueSplitFromUnit.unit;
                                    }
                                }
                            }
                        }

                        newValue.children = {};

                        // Now loop through all child values and add them as normal values
                        for (var childKey in childValues) {
                            if (childValues.hasOwnProperty(childKey)) {
                                var childValue = childValues[childKey];
                                var combinedKey = key + childKey;

                                newValue.children[childKey] = childValue.current;
                                currentValues[combinedKey] = childValue;

                                if (this.valueKeys.indexOf(combinedKey) === -1) {
                                    this.valueKeys.push(combinedKey);
                                }
                            }
                        }

                        // Save a template for recombination if present
                        if (valueType.template) {
                            newValue.template = newValue.template || valueType.template(newValue.current);
                        }

                        // Or we just have default value props, load those 
                    } else if (valueType.defaultProps) {
                            newValue = _extends({}, valueType.defaultProps, newValue);

                            for (var i = 0; i < NUM_NUMERICAL_VALUES; i++) {
                                var propName = NUMERICAL_VALUES[i];

                                if ((0, _utils.isString)(newValue[propName])) {
                                    var splitUnit = (0, _utils.splitValueUnit)(newValue[propName]);
                                    newValue[propName] = splitUnit.value;
                                    newValue.unit = splitUnit.unit;
                                }
                            }
                        }
                }

                // Update appropriate lists with value key
                if (newValue.children) {
                    if (this.parentKeys.indexOf(key) === -1) {
                        this.parentKeys.push(key);
                    }
                } else {
                    if (this.valueKeys.indexOf(key) === -1) {
                        this.valueKeys.push(key);
                    }
                }

                currentValues[key] = newValue;
            }
        }

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

        // Check if base values have updated
        for (var i = 0; i < this.numValueKeys; i++) {
            var key = this.valueKeys[i];
            var value = this.values[key];

            // Run transform function (if present)
            if (value.transform) {
                value.current = value.transform(value.current, key, this);
            }

            // Cap minimum
            if ((0, _utils.isNum)(value.min)) {
                value.current = Math.max(value.current, value.min);
            }

            // Cap maximum
            if ((0, _utils.isNum)(value.max)) {
                value.current = Math.min(value.current, value.max);
            }

            // Round number
            if (value.round) {
                value.current = Math.round(value.current);
            }

            // Update velocity
            if (!this.calculatesVelocity) {
                value.velocity = (0, _calc.speedPerSecond)(value.current - value.prev, elapsed);
            }

            // If this value has changed
            if (value.prev !== value.current) {
                hasChanged = true;
                value.prev = value.current;

                // Append unit
                var valueForState = value.unit ? value.current + value.unit : value.current;

                // Add to state if this is not a child vaue
                if (!value.parent) {
                    this.state[key] = valueForState;
                } else {
                    this.values[value.parent].children[value.childKey] = valueForState;
                }
            }
        }

        return this.onCleanup ? true : hasChanged;
    };

    /*
        If we are rendering, recombine parent values first
    */

    Action.prototype.onPreRender = function onPreRender() {
        // Update parent values
        for (var i = 0; i < this.numParentKeys; i++) {
            var key = this.parentKeys[i];
            var value = this.values[key];

            value.current = value.type.combine(value.children, value.template);

            if (this.state[key] !== value.current) {
                this.state[key] = value.current;
            }
        }
    };

    Action.prototype.onRender = function onRender(_ref) {
        var state = _ref.state;
        var on = _ref.on;

        if (on && on.set) {
            on.set(state);
        }

        if (this.onFrame) {
            this.onFrame(this);
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

    Action.prototype.start = function start() {
        var values = this.values;
        _Process.prototype.start.call(this);

        for (var key in values) {
            if (values.hasOwnProperty(key)) {
                values[key].prev = values[key].origin = values[key].current;
            }
        }
    };

    /*
        # Get default Action value properties
         @return [object]
    */

    Action.prototype.getDefaultValue = function getDefaultValue() {
        return {
            current: 0,
            velocity: 0,
            round: false
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQSxJQUFNLGVBQWUsU0FBZjtBQUNOLElBQU0sbUJBQW1CLENBQUMsWUFBRCxFQUFlLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsQ0FBbkI7QUFDTixJQUFNLHVCQUF1QixpQkFBaUIsTUFBakI7O0lBRVI7OztBQUNqQixhQURpQixNQUNqQixDQUFZLEtBQVosRUFBbUI7OEJBREYsUUFDRTs7QUFDZixjQUFNLEtBQU4sR0FBYyxFQUFkLENBRGU7Z0RBRWYsb0JBQU0sS0FBTixHQUZlO0tBQW5COzs7Ozs7Ozs7QUFEaUIscUJBYWpCLHFCQUFnQjtZQUFaLDhEQUFRLGtCQUFJO1lBQ0osU0FBOEIsTUFBOUIsT0FESTtZQUNJLEtBQXNCLE1BQXRCLEdBREo7O1lBQ1csc0NBQWUseUJBRDFCOztBQUdaLDJCQUFNLEdBQU4sWUFBVSxVQUFWLEVBSFk7O0FBS1osWUFBSSxFQUFKLEVBQVE7O0FBRUosaUJBQUssRUFBTCxHQUFVLENBQUUsR0FBRyxNQUFILEdBQWEsMkJBQVksRUFBWixDQUFmLEdBQWlDLEVBQWpDLENBRk47U0FBUjs7QUFLQSxhQUFLLE1BQUwsR0FBYyxLQUFLLE1BQUwsSUFBZSxFQUFmLENBVkY7QUFXWixhQUFLLFNBQUwsR0FBaUIsS0FBSyxTQUFMLElBQWtCLEVBQWxCLENBWEw7QUFZWixhQUFLLFVBQUwsR0FBa0IsS0FBSyxVQUFMLElBQW1CLEVBQW5COzs7QUFaTixZQWVOLGdCQUFnQixLQUFLLE1BQUwsQ0FmVjtBQWdCWixZQUFNLGVBQWUsS0FBSyxlQUFMLEVBQWYsQ0FoQk07QUFpQlosWUFBTSxtQkFBbUIsS0FBSyxtQkFBTCxFQUFuQjs7O0FBakJNLGFBb0JQLElBQUksR0FBSixJQUFXLFlBQWhCLEVBQThCO0FBQzFCLGdCQUFJLGFBQWEsY0FB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UWpCLG1DQUF3QjtZQUFiLG1CQUFhO1lBQU4sYUFBTTs7QUFDcEIsWUFBSSxNQUFNLEdBQUcsR0FBSCxFQUFRO0FBQ2QsZUFBRyxHQUFILENBQU8sS0FBUCxFQURjO1NBQWxCOztBQUlBLFlBQUksS0FBSyxPQUFMLEVBQWM7QUFDZCxpQkFBSyxPQUFMLENBQWEsSUFBYixFQURjO1NBQWxCOzs7QUFwUmEscUJBeVJqQix5QkFBUTtBQUNKLDJCQUFNLElBQU4sWUFESTtBQUVKLGVBQU8sSUFBUCxDQUZJOzs7QUF6UlMscUJBOFJqQiwyQkFBUztBQUNMLDJCQUFNLEtBQU4sWUFESztBQUVMLGVBQU8sSUFBUCxDQUZLOzs7QUE5UlEscUJBbVNqQix5QkFBUTtBQUNKLFlBQU0sU0FBUyxLQUFLLE1BQUwsQ0FEWDtBQUVKLDJCQUFNLEtBQU4sWUFGSTs7QUFJSixhQUFLLElBQUksR0FBSixJQUFXLE1BQWhCLEVBQXdCO0FBQ3BCLGdCQUFJLE9BQU8sY0FBUCxDQUFzQixHQUF0QixDQUFKLEVBQWdDO0FBQzVCLHVCQUFPLEdBQVAsRUFBWSxJQUFaLEdBQW1CLE9BQU8sR0FBUCxFQUFZLE1BQVosR0FBcUIsT0FBTyxHQUFQLEVBQVksT0FBWixDQURaO2FBQWhDO1NBREo7Ozs7Ozs7O0FBdlNhLHFCQW1UakIsNkNBQWtCO0FBQ2QsZUFBTztBQUNILHFCQUFTLENBQVQ7QUFDQSxzQkFBVSxDQUFWO0FBQ0EsbUJBQU8sS0FBUDtTQUhKLENBRGM7Ozs7Ozs7OztBQW5URCxxQkFpVWpCLHFEQUFzQjtBQUNsQixlQUFPLFlBQVAsQ0FEa0I7OztXQWpVTCIsImZpbGUiOiJBY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvY2VzcyBmcm9tICcuLi9wcm9jZXNzL1Byb2Nlc3MnO1xuaW1wb3J0IHsgc3BlZWRQZXJTZWNvbmQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBpc051bSwgaXNPYmosIGlzU3RyaW5nLCBzcGxpdFZhbHVlVW5pdCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgYmluZEFkYXB0ZXIgZnJvbSAnLi4vaW5jL2JpbmQtYWRhcHRlcic7XG5pbXBvcnQgY29sb3JUeXBlIGZyb20gJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmltcG9ydCBjb21wbGV4VHlwZSBmcm9tICcuLi92YWx1ZS10eXBlcy9jb21wbGV4JztcblxuY29uc3QgREVGQVVMVF9QUk9QID0gJ2N1cnJlbnQnO1xuY29uc3QgTlVNRVJJQ0FMX1ZBTFVFUyA9IFtERUZBVUxUX1BST1AsICdmcm9tJywgJ3RvJywgJ21pbicsICdtYXgnXTtcbmNvbnN0IE5VTV9OVU1FUklDQUxfVkFMVUVTID0gTlVNRVJJQ0FMX1ZBTFVFUy5sZW5ndGg7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIFByb2Nlc3Mge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuICAgIHNldChwcm9wcyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWVzLCBvbiwgLi4ucHJvcHNUb1NldCB9ID0gcHJvcHM7XG5cbiAgICAgICAgc3VwZXIuc2V0KHByb3BzVG9TZXQpO1xuXG4gICAgICAgIGlmIChvbikge1xuICAgICAgICAgICAgLy8gRHVja3R5cGlzaCBjaGVjayBmb3IgQWRhcHRlclxuICAgICAgICAgICAgdGhpcy5vbiA9ICghb24uc2V0dGVyKSA/IGJpbmRBZGFwdGVyKG9uKSA6IG9uO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlcyB8fCB7fTtcbiAgICAgICAgdGhpcy52YWx1ZUtleXMgPSB0aGlzLnZhbHVlS2V5cyB8fCBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzIHx8IFtdO1xuXG4gICAgICAgIC8vIE1lcmdlIG5ldyBgdmFsdWVgIHByb3BlcnRpZXMgd2l0aCBleGlzdGluZ1xuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IHRoaXMuZ2V0RGVmYXVsdFZhbHVlKCk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZVByb3AgPSB0aGlzLmdldERlZmF1bHRWYWx1ZVByb3AoKTtcblxuICAgICAgICAvLyBJbmhlcml0IHZhbHVlIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChkZWZhdWx0VmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcm9wc1RvU2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNUb1NldFtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlW2tleV0gPSBwcm9wc1RvU2V0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgYWxsIHZhbHVlcyBhbmQgc3BsaXQgaW50byBjaGlsZCB2YWx1ZXMgYXMgbmVjY2Vzc2FyeVxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVmFsdWUgPSBjdXJyZW50VmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlVHlwZTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSB7fTtcblxuICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgbmV3IHZhbHVlIGludG8gb2JqZWN0IGlmIGl0IGlzbid0IGFscmVhZHlcbiAgICAgICAgICAgICAgICBpZiAoaXNPYmoodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbZGVmYXVsdFZhbHVlUHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB2YWx1ZSBhbHJlYWR5IGV4aXN0cywgY2hlY2sgZm9yIGFuZCB1c2UgZXhpc3RpbmcgdHlwZVxuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0geyAuLi5leGlzdGluZ1ZhbHVlLCAuLi5uZXdWYWx1ZSB9O1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVR5cGUgPSAodGhpcy5vbiAmJiB0aGlzLm9uLmdldFZhbHVlVHlwZSkgPyB0aGlzLm9uLmdldFZhbHVlVHlwZShrZXkpIDogZXhpc3RpbmdWYWx1ZS50eXBlO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIG5ldyB2YWx1ZSwgY2hlY2sgZm9yIHR5cGVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuZnJvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jdXJyZW50ID0gbmV3VmFsdWUuZnJvbTtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1ZhbHVlLmN1cnJlbnQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLm9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jdXJyZW50ID0gdGhpcy5vbi5nZXQoa2V5KSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmZyb20gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuZnJvbSA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4uZGVmYXVsdFZhbHVlLCAuLi5uZXdWYWx1ZSB9O1xuXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnByZXYgPSBuZXdWYWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG9uZSBpcyBleHBsaWNpdGx5IGFzc2lnbmVkLCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWUudHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBPciBpZiBvdXIgQWRhcHRlciBoYXMgYSB0eXBlTWFwLCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub24gJiYgdGhpcy5vbi5nZXRWYWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHRoaXMub24uZ2V0VmFsdWVUeXBlKGtleSk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1N0cmluZyhuZXdWYWx1ZS5jdXJyZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGVzdCBpZiB0aGlzIGlzIGEgY29sb3IgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xvclR5cGUudGVzdChuZXdWYWx1ZS5jdXJyZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IGNvbG9yVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tcGxleFR5cGUudGVzdChuZXdWYWx1ZS5jdXJyZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IGNvbXBsZXhUeXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UndmUgZ290IGEgdmFsdWVUeXBlIHRoZW4gcHJlcHJvY2VzcyB0aGUgdmFsdWUgYWNjb3JkaW5nbHlcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSB2YWx1ZVR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBzaG91bGQgYmUgc3BsaXQsIHNwbGl0XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUuc3BsaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkVmFsdWVzID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvb3Agb3ZlciBudW1lcmljYWwgdmFsdWVzIGFuZCBzcGxpdCBhbnkgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBOVU1FUklDQUxfVkFMVUVTW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdFZhbHVlcyA9IHZhbHVlVHlwZS5zcGxpdChuZXdWYWx1ZVtwcm9wTmFtZV0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHNwbGl0S2V5IGluIHNwbGl0VmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRWYWx1ZXMuaGFzT3duUHJvcGVydHkoc3BsaXRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZSA9IHNwbGl0VmFsdWVzW3NwbGl0S2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IGNoaWxkIHZhbHVlIGlmIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkVmFsdWVzW3NwbGl0S2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlc1tzcGxpdEtleV0gPSB7IC4uLm5ld1ZhbHVlLCBwYXJlbnQ6IGtleSwgY2hpbGRLZXk6IHNwbGl0S2V5IH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWVzW3NwbGl0S2V5XSA9ICh2YWx1ZVR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4uY2hpbGRWYWx1ZXNbc3BsaXRLZXldLCAuLi52YWx1ZVR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSB9IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IC4uLmNoaWxkVmFsdWVzW3NwbGl0S2V5XSwgLi4udmFsdWVUeXBlLmRlZmF1bHRQcm9wcyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVTcGxpdEZyb21Vbml0ID0gc3BsaXRWYWx1ZVVuaXQoc3BsaXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZXNbc3BsaXRLZXldW3Byb3BOYW1lXSA9IHZhbHVlU3BsaXRGcm9tVW5pdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlc1tzcGxpdEtleV0udW5pdCA9IHZhbHVlU3BsaXRGcm9tVW5pdC51bml0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3cgbG9vcCB0aHJvdWdoIGFsbCBjaGlsZCB2YWx1ZXMgYW5kIGFkZCB0aGVtIGFzIG5vcm1hbCB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkS2V5IGluIGNoaWxkVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkVmFsdWVzLmhhc093blByb3BlcnR5KGNoaWxkS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZFZhbHVlID0gY2hpbGRWYWx1ZXNbY2hpbGRLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZEtleSA9IGtleSArIGNoaWxkS2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuW2NoaWxkS2V5XSA9IGNoaWxkVmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1tjb21iaW5lZEtleV0gPSBjaGlsZFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlS2V5cy5pbmRleE9mKGNvbWJpbmVkS2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goY29tYmluZWRLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIGEgdGVtcGxhdGUgZm9yIHJlY29tYmluYXRpb24gaWYgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZS50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnRlbXBsYXRlID0gbmV3VmFsdWUudGVtcGxhdGUgfHwgdmFsdWVUeXBlLnRlbXBsYXRlKG5ld1ZhbHVlLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE9yIHdlIGp1c3QgaGF2ZSBkZWZhdWx0IHZhbHVlIHByb3BzLCBsb2FkIHRob3NlICAgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLnZhbHVlVHlwZS5kZWZhdWx0UHJvcHMsIC4uLm5ld1ZhbHVlIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX05VTUVSSUNBTF9WQUxVRVM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gTlVNRVJJQ0FMX1ZBTFVFU1tpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZyhuZXdWYWx1ZVtwcm9wTmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0VW5pdCA9IHNwbGl0VmFsdWVVbml0KG5ld1ZhbHVlW3Byb3BOYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW3Byb3BOYW1lXSA9IHNwbGl0VW5pdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudW5pdCA9IHNwbGl0VW5pdC51bml0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBhcHByb3ByaWF0ZSBsaXN0cyB3aXRoIHZhbHVlIGtleVxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50S2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZUtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1trZXldID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmVjb21wdXRlIHZhbHVlIGtleSBhbmQgcGFyZW50IGtleSBsZW5ndGggdG8gcHJldmVudCBwZXItZnJhbWUgbWVhc3VyZW1lbnRcbiAgICAgICAgdGhpcy5udW1WYWx1ZUtleXMgPSB0aGlzLnZhbHVlS2V5cy5sZW5ndGg7XG4gICAgICAgIHRoaXMubnVtUGFyZW50S2V5cyA9IHRoaXMucGFyZW50S2V5cy5sZW5ndGg7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgRGVjaWRlIHdoZXRoZXIgdGhpcyBBY3Rpb24gd2lsbCByZW5kZXIgb24gbmV4dCBmcmFtZVxuXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm4gdHJ1ZSB0byByZW5kZXJcbiAgICAqL1xuICAgIHdpbGxSZW5kZXIoYWN0aW9uLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGxldCBoYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYmFzZSB2YWx1ZXMgaGF2ZSB1cGRhdGVkIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAvLyBSdW4gdHJhbnNmb3JtIGZ1bmN0aW9uIChpZiBwcmVzZW50KVxuICAgICAgICAgICAgaWYgKHZhbHVlLnRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50cmFuc2Zvcm0odmFsdWUuY3VycmVudCwga2V5LCB0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FwIG1pbmltdW1cbiAgICAgICAgICAgIGlmIChpc051bSh2YWx1ZS5taW4pKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgubWF4KHZhbHVlLmN1cnJlbnQsIHZhbHVlLm1pbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcCBtYXhpbXVtXG4gICAgICAgICAgICBpZiAoaXNOdW0odmFsdWUubWF4KSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLm1pbih2YWx1ZS5jdXJyZW50LCB2YWx1ZS5tYXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSb3VuZCBudW1iZXJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5yb3VuZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLnJvdW5kKHZhbHVlLmN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgdmVsb2NpdHlcbiAgICAgICAgICAgIGlmICghdGhpcy5jYWxjdWxhdGVzVmVsb2NpdHkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IHNwZWVkUGVyU2Vjb25kKHZhbHVlLmN1cnJlbnQgLSB2YWx1ZS5wcmV2LCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLnByZXYgIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5wcmV2ID0gdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgICAgIC8vIEFwcGVuZCB1bml0XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVGb3JTdGF0ZSA9ICh2YWx1ZS51bml0KSA/IHZhbHVlLmN1cnJlbnQgKyB2YWx1ZS51bml0IDogdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0byBzdGF0ZSBpZiB0aGlzIGlzIG5vdCBhIGNoaWxkIHZhdWVcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW3ZhbHVlLnBhcmVudF0uY2hpbGRyZW5bdmFsdWUuY2hpbGRLZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHRoaXMub25DbGVhbnVwKSA/IHRydWUgOiBoYXNDaGFuZ2VkO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIElmIHdlIGFyZSByZW5kZXJpbmcsIHJlY29tYmluZSBwYXJlbnQgdmFsdWVzIGZpcnN0XG4gICAgKi9cbiAgICBvblByZVJlbmRlcigpIHtcbiAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVBhcmVudEtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5wYXJlbnRLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHlwZS5jb21iaW5lKHZhbHVlLmNoaWxkcmVuLCB2YWx1ZS50ZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0gIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25SZW5kZXIoeyBzdGF0ZSwgb24gfSkge1xuICAgICAgICBpZiAob24gJiYgb24uc2V0KSB7XG4gICAgICAgICAgICBvbi5zZXQoc3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub25GcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5vbkZyYW1lKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzdW1lKCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2tleV0ucHJldiA9IHZhbHVlc1trZXldLm9yaWdpbiA9IHZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdGhpcyBgdmFsdWVgIHByb3BlcnR5IHdoZW4gc2V0IGFzIHZhbHVlIGluc3RlYWQgb2Ygb2JqZWN0XG5cbiAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUFJPUDtcbiAgICB9XG59XG4iXX0=