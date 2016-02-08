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

    Action.prototype.set = function set(props) {
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

                            // Or if our Adapter has a typeMap, use that
                        } else if (this.element.getValueType) {
                                valueType = this.element.getValueType(key);
                            }

                        // Maybe run `test` on color here
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
                                            childValues[splitKey] = _extends({}, newValue);

                                            if (valueType.defaultProps) {
                                                childValues[splitKey] = valueType.defaultProps[splitKey] ? _extends({}, valueType.defaultProps[splitKey], childValues[splitKey]) : _extends({}, valueType.defaultProps, childValues[splitKey]);
                                            }
                                        }

                                        childValues[splitKey][propName] = splitValue;
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

                                newValue.children[key] = childValue.current;
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
                updatedValue = (0, _calc.smooth)(updatedValue, value.prev, elapsed, value.smooth);
            }

            if (!this.calculatesVelocity) {
                value.velocity = (0, _calc.speedPerSecond)(updatedValue - value.current, elapsed);
            }

            value.prev = value.current = updatedValue;

            var valueForState = value.unit ? value.current + value.unit : value.current;

            // Add straight to state if no parent
            if (!value.parent) {
                var mappedKey = this.element.mapStateKey ? this.element.mapStateKey(key) : key;

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
            var mappedKey = this.element.mapStateKey ? this.element.mapStateKey(key) : key;

            value.current = value.type.combine(value.children, value.template);

            if (this.state[mappedKey] !== value.current) {
                this.state[mappedKey] = value.current;
                hasChanged = true;
            }
        }

        return this.onCleanup ? true : hasChanged;
    };

    Action.prototype.onRender = function onRender(_ref) {
        var state = _ref.state;
        var element = _ref.element;

        if (element.set) {
            element.set(state);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFNLGVBQWUsU0FBZjtBQUNOLElBQU0sbUJBQW1CLENBQUMsWUFBRCxFQUFlLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsQ0FBbkI7QUFDTixJQUFNLHVCQUF1QixpQkFBaUIsTUFBakI7O0lBRVI7OztBQUNqQixhQURpQixNQUNqQixDQUFZLEtBQVosRUFBbUI7OEJBREYsUUFDRTs7QUFDZixjQUFNLEtBQU4sR0FBYyxFQUFkLENBRGU7Z0RBRWYsb0JBQU0sS0FBTixHQUZlO0tBQW5COzs7Ozs7Ozs7QUFEaUIscUJBYWpCLG1CQUFJLE9BQU87WUFDQyxTQUEwQixNQUExQixPQUREOztZQUNZLHNDQUFlLG1CQUQzQjs7QUFHUCwyQkFBTSxHQUFOLFlBQVUsVUFBVixFQUhPOztBQUtQLGFBQUssTUFBTCxHQUFjLEtBQUssTUFBTCxJQUFlLEVBQWYsQ0FMUDtBQU1QLGFBQUssU0FBTCxHQUFpQixLQUFLLFNBQUwsSUFBa0IsRUFBbEIsQ0FOVjtBQU9QLGFBQUssVUFBTCxHQUFrQixLQUFLLFVBQUwsSUFBbUIsRUFBbkI7OztBQVBYLFlBVUQsZ0JBQWdCLEtBQUssTUFBTCxDQVZmO0FBV1AsWUFBTSxlQUFlLEtBQUssZUFBTCxFQUFmLENBWEM7QUFZUCxZQUFNLG1CQUFtQixLQUFLLG1CQUFMLEVBQW5COzs7QUFaQyxhQWVGLElBQUksR0FBSixJQUFXLFlBQWhCLEVBQThCO0FBQzFCLGdCQUFJLGFBQWEsY0FBYixDQUE0QixHQUE1QixLQUFvQyxXQUFXLGNBQVgsQ0FBMEIsR0FBMUIsQ0FBcEMsRUFBb0U7QUFDcEUsb0JBQUksV0FBVyxHQUFYLE1BQW9CLFNBQXBCLEVBQStCO0FBQy9CLGlDQUFhLEdBQWIsSUFBb0IsV0FBVyxHQUFYLENBQXBCLENBRCtCO2lCQUFuQzthQURKO1NB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TixZQUZJOztBQUlKLGFBQUssSUFBSSxHQUFKLElBQVcsTUFBaEIsRUFBd0I7QUFDcEIsZ0JBQUksT0FBTyxjQUFQLENBQXNCLEdBQXRCLENBQUosRUFBZ0M7QUFDNUIsdUJBQU8sR0FBUCxFQUFZLElBQVosR0FBbUIsT0FBTyxHQUFQLEVBQVksTUFBWixHQUFxQixPQUFPLEdBQVAsRUFBWSxPQUFaLENBRFo7YUFBaEM7U0FESjs7Ozs7Ozs7QUF2UGEscUJBbVFqQiw2Q0FBa0I7QUFDZCxlQUFPO0FBQ0gscUJBQVMsQ0FBVDtBQUNBLHNCQUFVLENBQVY7U0FGSixDQURjOzs7Ozs7Ozs7QUFuUUQscUJBZ1JqQixxREFBc0I7QUFDbEIsZUFBTyxZQUFQLENBRGtCOzs7V0FoUkwiLCJmaWxlIjoiQWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2Nlc3MgZnJvbSAnLi4vcHJvY2Vzcy9Qcm9jZXNzJztcbmltcG9ydCB7IHNtb290aCwgc3BlZWRQZXJTZWNvbmQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBpc09iaiB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNvbnN0IERFRkFVTFRfUFJPUCA9ICdjdXJyZW50JztcbmNvbnN0IE5VTUVSSUNBTF9WQUxVRVMgPSBbREVGQVVMVF9QUk9QLCAnZnJvbScsICd0bycsICdtaW4nLCAnbWF4J107XG5jb25zdCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUyA9IE5VTUVSSUNBTF9WQUxVRVMubGVuZ3RoO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb24gZXh0ZW5kcyBQcm9jZXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBwcm9wcy5zdGF0ZSA9IHt9O1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICAgKi9cbiAgICBzZXQocHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMsIC4uLnByb3BzVG9TZXQgfSA9IHByb3BzO1xuXG4gICAgICAgIHN1cGVyLnNldChwcm9wc1RvU2V0KTtcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzIHx8IHt9O1xuICAgICAgICB0aGlzLnZhbHVlS2V5cyA9IHRoaXMudmFsdWVLZXlzIHx8IFtdO1xuICAgICAgICB0aGlzLnBhcmVudEtleXMgPSB0aGlzLnBhcmVudEtleXMgfHwgW107XG5cbiAgICAgICAgLy8gTWVyZ2UgbmV3IGB2YWx1ZWAgcHJvcGVydGllcyB3aXRoIGV4aXN0aW5nXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gdGhpcy5nZXREZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlUHJvcCA9IHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpO1xuXG4gICAgICAgIC8vIEluaGVyaXQgdmFsdWUgcHJvcGVydGllcyBmcm9tIGBwcm9wc2BcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByb3BzVG9TZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1RvU2V0W2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWVba2V5XSA9IHByb3BzVG9TZXRba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBhbGwgdmFsdWVzIGFuZCBzcGxpdCBpbnRvIGNoaWxkIHZhbHVlcyBhcyBuZWNjZXNzYXJ5XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdWYWx1ZSA9IGN1cnJlbnRWYWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVUeXBlID0ge307XG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0ge307XG5cbiAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IG5ldyB2YWx1ZSBpbnRvIG9iamVjdCBpZiBpdCBpc24ndCBhbHJlYWR5XG4gICAgICAgICAgICAgICAgaWYgKGlzT2JqKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgdmFsdWUgYWxyZWFkeSBleGlzdHMsIGNoZWNrIGZvciBhbmQgdXNlIGV4aXN0aW5nIHR5cGVcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4uZXhpc3RpbmdWYWx1ZSwgLi4ubmV3VmFsdWUgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVUeXBlID0gZXhpc3RpbmdWYWx1ZS50eXBlO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIG5ldyB2YWx1ZSwgY2hlY2sgZm9yIHR5cGVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4uZGVmYXVsdFZhbHVlLCAuLi5uZXdWYWx1ZSB9O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG9uZSBpcyBleHBsaWNpdGx5IGFzc2lnbmVkLCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWUudHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBPciBpZiBvdXIgQWRhcHRlciBoYXMgYSB0eXBlTWFwLCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudC5nZXRWYWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHRoaXMuZWxlbWVudC5nZXRWYWx1ZVR5cGUoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE1heWJlIHJ1biBgdGVzdGAgb24gY29sb3IgaGVyZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3ZlIGdvdCBhIHZhbHVlVHlwZSB0aGVuIHByZXByb2Nlc3MgdGhlIHZhbHVlIGFjY29yZGluZ2x5XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gdmFsdWVUeXBlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgc2hvdWxkIGJlIHNwbGl0LCBzcGxpdFxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVUeXBlLnNwbGl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZFZhbHVlcyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMb29wIG92ZXIgbnVtZXJpY2FsIHZhbHVlcyBhbmQgc3BsaXQgYW55IHByZXNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX05VTUVSSUNBTF9WQUxVRVM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gTlVNRVJJQ0FMX1ZBTFVFU1tpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZXMgPSB2YWx1ZVR5cGUuc3BsaXQobmV3VmFsdWVbcHJvcE5hbWVdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBzcGxpdEtleSBpbiBzcGxpdFZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0VmFsdWVzLmhhc093blByb3BlcnR5KHNwbGl0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0VmFsdWUgPSBzcGxpdFZhbHVlc1tzcGxpdEtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBjaGlsZCB2YWx1ZSBpZiBkb2Vzbid0IGV4aXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZFZhbHVlc1tzcGxpdEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZXNbc3BsaXRLZXldID0geyAuLi5uZXdWYWx1ZSB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlc1tzcGxpdEtleV0gPSAodmFsdWVUeXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IC4uLnZhbHVlVHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldLCAuLi5jaGlsZFZhbHVlc1tzcGxpdEtleV0gfSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi52YWx1ZVR5cGUuZGVmYXVsdFByb3BzLCAuLi5jaGlsZFZhbHVlc1tzcGxpdEtleV0gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWVzW3NwbGl0S2V5XVtwcm9wTmFtZV0gPSBzcGxpdFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3cgbG9vcCB0aHJvdWdoIGFsbCBjaGlsZCB2YWx1ZXMgYW5kIGFkZCB0aGVtIGFzIG5vcm1hbCB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkS2V5IGluIGNoaWxkVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkVmFsdWVzLmhhc093blByb3BlcnR5KGNoaWxkS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZFZhbHVlID0gY2hpbGRWYWx1ZXNbY2hpbGRLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZEtleSA9IGtleSArIGNoaWxkS2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuW2tleV0gPSBjaGlsZFZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNbY29tYmluZWRLZXldID0gY2hpbGRWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUtleXMuaW5kZXhPZihjb21iaW5lZEtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGNvbWJpbmVkS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSBhIHRlbXBsYXRlIGZvciByZWNvbWJpbmF0aW9uIGlmIHByZXNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUudGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50ZW1wbGF0ZSA9IG5ld1ZhbHVlLnRlbXBsYXRlIHx8IHZhbHVlVHlwZS50ZW1wbGF0ZShuZXdWYWx1ZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBPciB3ZSBqdXN0IGhhdmUgZGVmYXVsdCB2YWx1ZSBwcm9wcywgbG9hZCB0aG9zZSAgIFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0geyAuLi52YWx1ZVR5cGUuZGVmYXVsdFByb3BzLCAuLi5uZXdWYWx1ZSB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGFwcHJvcHJpYXRlIGxpc3RzIHdpdGggdmFsdWUga2V5XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWVzW2tleV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByZWNvbXB1dGUgdmFsdWUga2V5IGFuZCBwYXJlbnQga2V5IGxlbmd0aCB0byBwcmV2ZW50IHBlci1mcmFtZSBtZWFzdXJlbWVudFxuICAgICAgICB0aGlzLm51bVZhbHVlS2V5cyA9IHRoaXMudmFsdWVLZXlzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5udW1QYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzLmxlbmd0aDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG5cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybiB0cnVlIHRvIHJlbmRlclxuICAgICovXG4gICAgd2lsbFJlbmRlcihhY3Rpb24sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBVcGRhdGUgYmFzZSB2YWx1ZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGxldCB1cGRhdGVkVmFsdWUgPSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBSdW4gdHJhbnNmb3JtIGZ1bmN0aW9uIChpZiBwcmVzZW50KVxuICAgICAgICAgICAgaWYgKHZhbHVlLnRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IHZhbHVlLnRyYW5zZm9ybSh1cGRhdGVkVmFsdWUsIGtleSwgdGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNtb290aCB2YWx1ZSBpZiB3ZSBoYXZlIHNtb290aGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnNtb290aCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IHNtb290aCh1cGRhdGVkVmFsdWUsIHZhbHVlLnByZXYsIGVsYXBzZWQsIHZhbHVlLnNtb290aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5jYWxjdWxhdGVzVmVsb2NpdHkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IHNwZWVkUGVyU2Vjb25kKHVwZGF0ZWRWYWx1ZSAtIHZhbHVlLmN1cnJlbnQsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZS5wcmV2ID0gdmFsdWUuY3VycmVudCA9IHVwZGF0ZWRWYWx1ZTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVGb3JTdGF0ZSA9ICh2YWx1ZS51bml0KSA/IHZhbHVlLmN1cnJlbnQgKyB2YWx1ZS51bml0IDogdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgLy8gQWRkIHN0cmFpZ2h0IHRvIHN0YXRlIGlmIG5vIHBhcmVudFxuICAgICAgICAgICAgaWYgKCF2YWx1ZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWRLZXkgPSB0aGlzLmVsZW1lbnQubWFwU3RhdGVLZXkgPyB0aGlzLmVsZW1lbnQubWFwU3RhdGVLZXkoa2V5KSA6IGtleTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW21hcHBlZEtleV0gIT09IHZhbHVlRm9yU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVttYXBwZWRLZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1t2YWx1ZS5wYXJlbnRdLmNoaWxkcmVuW2tleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVBhcmVudEtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5wYXJlbnRLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgY29uc3QgbWFwcGVkS2V5ID0gdGhpcy5lbGVtZW50Lm1hcFN0YXRlS2V5ID8gdGhpcy5lbGVtZW50Lm1hcFN0YXRlS2V5KGtleSkgOiBrZXk7XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50eXBlLmNvbWJpbmUodmFsdWUuY2hpbGRyZW4sIHZhbHVlLnRlbXBsYXRlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVbbWFwcGVkS2V5XSAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVbbWFwcGVkS2V5XSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHRoaXMub25DbGVhbnVwKSA/IHRydWUgOiBoYXNDaGFuZ2VkO1xuICAgIH1cblxuICAgIG9uUmVuZGVyKHsgc3RhdGUsIGVsZW1lbnQgfSkge1xuICAgICAgICBpZiAoZWxlbWVudC5zZXQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0KHN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uRnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMub25GcmFtZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhbHVlc1trZXldLnByZXYgPSB2YWx1ZXNba2V5XS5vcmlnaW4gPSB2YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICB2ZWxvY2l0eTogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnR5IG5hbWVcbiAgICAgICAgIyMgU2V0IHRoaXMgYHZhbHVlYCBwcm9wZXJ0eSB3aGVuIHNldCBhcyB2YWx1ZSBpbnN0ZWFkIG9mIG9iamVjdFxuXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfVxufVxuIl19