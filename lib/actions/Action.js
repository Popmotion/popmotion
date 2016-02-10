'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _Process2 = require('../process/Process');

var _Process3 = _interopRequireDefault(_Process2);

var _calc = require('../inc/calc');

var _utils = require('../inc/utils');

var _bindAdapter = require('../inc/bind-adapter');

var _bindAdapter2 = _interopRequireDefault(_bindAdapter);

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
        var on = props.on;

        var propsToSet = _objectWithoutProperties(props, ['values', 'on']);

        _Process.prototype.set.call(this, propsToSet);

        if (on) {
            // Ducktypish check for Adapter
            if (!on.setter) {
                this.on = (0, _bindAdapter2.default)(on);
            }
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
                        } else if (this.on && this.on.getValueType) {
                                valueType = this.on.getValueType(key);
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
                var mappedKey = this.on.mapStateKey ? this.on.mapStateKey(key) : key;

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
            var mappedKey = this.on.mapStateKey ? this.on.mapStateKey(key) : key;

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
        var on = _ref.on;

        if (on.set) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSxlQUFlLFNBQWY7QUFDTixJQUFNLG1CQUFtQixDQUFDLFlBQUQsRUFBZSxNQUFmLEVBQXVCLElBQXZCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLENBQW5CO0FBQ04sSUFBTSx1QkFBdUIsaUJBQWlCLE1BQWpCOztJQUVSOzs7QUFDakIsYUFEaUIsTUFDakIsQ0FBWSxLQUFaLEVBQW1COzhCQURGLFFBQ0U7O0FBQ2YsY0FBTSxLQUFOLEdBQWMsRUFBZCxDQURlO2dEQUVmLG9CQUFNLEtBQU4sR0FGZTtLQUFuQjs7Ozs7Ozs7O0FBRGlCLHFCQWFqQixtQkFBSSxPQUFPO1lBQ0MsU0FBOEIsTUFBOUIsT0FERDtZQUNTLEtBQXNCLE1BQXRCLEdBRFQ7O1lBQ2dCLHNDQUFlLHlCQUQvQjs7QUFHUCwyQkFBTSxHQUFOLFlBQVUsVUFBVixFQUhPOztBQUtQLFlBQUksRUFBSixFQUFROztBQUVKLGdCQUFJLENBQUMsR0FBRyxNQUFILEVBQVc7QUFDWixxQkFBSyxFQUFMLEdBQVUsMkJBQVksRUFBWixDQUFWLENBRFk7YUFBaEI7U0FGSjs7QUFPQSxhQUFLLE1BQUwsR0FBYyxLQUFLLE1BQUwsSUFBZSxFQUFmLENBWlA7QUFhUCxhQUFLLFNBQUwsR0FBaUIsS0FBSyxTQUFMLElBQWtCLEVBQWxCLENBYlY7QUFjUCxhQUFLLFVBQUwsR0FBa0IsS0FBSyxVQUFMLElBQW1CLEVBQW5COzs7QUFkWCxZQWlCRCxnQkFBZ0IsS0FBSyxNQUFMLENBakJmO0FBa0JQLFlBQU0sZUFBZSxLQUFLLGVBQUwsRUFBZixDQWxCQztBQW1CUCxZQUFNLG1CQUFtQixLQUFLLG1CQUFMLEVBQW5COzs7QUFuQkMsYUFzQkYsSUFBSSxHQUFKLElBQVcsWUFBaEIsRUFBOEI7QUFDMUIsZ0JBQUksYUFBYSxjQUFiLENBQTRCLEdBQTVCLEtBQW9DLFdBQVcsY0FBWCxDQUEwQixHQUExQixDQUFwQyxFQUFvRTtBQUNwRSxvQkFBSSxXQUFXLEdBQVgsTUFBb0IsU0FBcEIsRUFBK0I7QUFDL0IsaUNBQWEsR0FBYixJQUFvQixXQUFXLEdBQVgsQ0FBcEIsQ0FEK0I7aUJBQW5DO2FBREo7U0FESjs7O0FBdEJPLGFBK0JGLElBQUksR0FBSixJQUFXLE1BQWhCLEVBQXdCO0FBQ3BCLGdCQUFJLE9BQU8sY0FBUCxDQUFzQixHQUF0QixDQUFKLEVBQWdDO0FBQzVCLG9CQUFNLFFBQVEsT0FBTyxHQUFQLENBQVIsQ0FEc0I7QUFFNUIsb0JBQU0sZ0JBQWdCLGNBQWMsR0FBZCxDQUFoQixDQUZzQjtBQUc1QixvQkFBSSxZQUFZLEVBQVosQ0FId0I7QUFJNUIsb0JBQUksV0FBVyxFQUFYOzs7QUFKd0Isb0JBT3hCLFdBM0RYLE1BMkRXLENBQU0sS0FBTixDQUFKLEVBQWtCO0FBQ2QsK0JBQVcsS0FBWCxDQURjO2lCQUFsQixNQUVPO0FBQ0gsNkJBQVMsZ0JBQVQsSUFBNkIsS0FBN0IsQ0FERztpQkFGUDs7O0FBUDRCLG9CQWN4QixhQUFKLEVBQW1CO0FBQ2YsNENBQWdCLGVBQWtCLFNBQWxDLENBRGU7QUFFZixnQ0FBWSxjQUFjLElBQWQ7OztBQUZHLGlCQUFuQixNQUtPO0FBQ0gsZ0RBQWdCLGNBQWlCLFNBQWpDOzs7QUFERyw0QkFJQyxNQUFNLElBQU4sRUFBWTtBQUNaLHdDQUFZLE1BQU0sSUFBTjs7O0FBREEseUJBQWhCLE1BSU8sSUFBSSxLQUFLLEVBQUwsSUFBVyxLQUFLLEVBQUwsQ0FBUSxZQUFSLEVBQXNCO0FBQ3hDLDRDQUFZLEtBQUssRUFBTCxDQUFRLFlBQVIsQ0FBcUIsR0FBckIsQ0FBWixDQUR3Qzs2QkFBckM7OztBQVJKLHFCQUxQOzs7QUFkNEIsb0JBbUN4QixTQUFKLEVBQWU7QUFDWCw2QkFBUyxJQUFULEdBQWdCLFNBQWhCOzs7QUFEVyx3QkFJUCxVQUFVLEtBQVYsRUFBaUI7QUFDakIsNEJBQU0sY0FBYyxFQUFkOzs7QUFEVyw2QkFJWixJQUFJLElBQUksQ0FBSixFQUFPLElBQUksb0JBQUosRUFBMEIsR0FBMUMsRUFBK0M7QUFDM0MsZ0NBQU0sV0FBVyxpQkFBaUIsQ0FBakIsQ0FBWCxDQURxQzs7QUFHM0MsZ0NBQUksU0FBUyxjQUFULENBQXdCLFFBQXhCLENBQUosRUFBdUM7QUFDbkMsb0NBQU0sY0FBYyxVQUFVLEtBQVYsQ0FBZ0IsU0FBUyxRQUFULENBQWhCLENBQWQsQ0FENkI7O0FBR25DLHFDQUFLLElBQUksUUFBSixJQUFnQixXQUFyQixFQUFrQztBQUM5Qix3Q0FBSSxZQUFZLGNBQVosQ0FBMkIsUUFBM0IsQ0FBSixFQUEwQztBQUN0Qyw0Q0FBTSxhQUFhLFlBQVksUUFBWixDQUFiOztBQURnQyw0Q0FHbEMsQ0FBQyxZQUFZLFFBQVosQ0FBRCxFQUF3QjtBQUN4Qix3REFBWSxRQUFaLGlCQUE2QixTQUE3QixDQUR3Qjs7QUFHeEIsZ0RBQUksVUFBVSxZQUFWLEVBQXdCO0FBQ3hCLDREQUFZLFFBQVosSUFBd0IsU0FBQyxDQUFVLFlBQVYsQ0FBdUIsUUFBdkIsQ0FBRCxnQkFDZixVQUFVLFlBQVYsQ0FBdUIsUUFBdkIsR0FBcUMsWUFBWSxRQUFaLEVBRHRCLGdCQUVmLFVBQVUsWUFBVixFQUEyQixZQUFZLFFBQVosRUFGWixDQURBOzZDQUE1Qjt5Q0FISjs7QUFVQSxvREFBWSxRQUFaLEVBQXNCLFFBQXRCLElBQWtDLFVBQWxDLENBYnNDO3FDQUExQztpQ0FESjs2QkFISjt5QkFISjs7QUEwQkEsaUNBQVMsUUFBVCxHQUFvQixFQUFwQjs7O0FBOUJpQiw2QkFpQ1osSUFBSSxRQUFKLElBQWdCLFdBQXJCLEVBQWtDO0FBQzlCLGdDQUFJLFlBQVksY0FBWixDQUEyQixRQUEzQixDQUFKLEVBQTBDO0FBQ3RDLG9DQUFNLGFBQWEsWUFBWSxRQUFaLENBQWIsQ0FEZ0M7QUFFdEMsb0NBQU0sY0FBYyxNQUFNLFFBQU4sQ0FGa0I7O0FBSXRDLHlDQUFTLFFBQVQsQ0FBa0IsR0FBbEIsSUFBeUIsV0FBVyxPQUFYLENBSmE7QUFLdEMsOENBQWMsV0FBZCxJQUE2QixVQUE3QixDQUxzQzs7QUFPdEMsb0NBQUksS0FBSyxTQUFMLENBQWUsT0FBZixDQUF1QixXQUF2QixNQUF3QyxDQUFDLENBQUQsRUFBSTtBQUM1Qyx5Q0FBSyxTQUFMLENBQWUsSUFBZixDQUFvQixXQUFwQixFQUQ0QztpQ0FBaEQ7NkJBUEo7eUJBREo7OztBQWpDaUIsNEJBZ0RiLFVBQVUsUUFBVixFQUFvQjtBQUNwQixxQ0FBUyxRQUFULEdBQW9CLFNBQVMsUUFBVCxJQUFxQixVQUFVLFFBQVYsQ0FBbUIsU0FBUyxPQUFULENBQXhDLENBREE7eUJBQXhCOzs7QUFoRGlCLHFCQUFyQixNQXFETyxJQUFJLFVBQVUsWUFBVixFQUF3QjtBQUMvQixvREFBZ0IsVUFBVSxZQUFWLEVBQTJCLFNBQTNDLENBRCtCO3lCQUE1QjtpQkF6RFg7OztBQW5DNEIsb0JBa0d4QixTQUFTLFFBQVQsRUFBbUI7QUFDbkIsd0JBQUksS0FBSyxVQUFMLENBQWdCLE9BQWhCLENBQXdCLEdBQXhCLE1BQWlDLENBQUMsQ0FBRCxFQUFJO0FBQ3JDLDZCQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsR0FBckIsRUFEcUM7cUJBQXpDO2lCQURKLE1BSU87QUFDSCx3QkFBSSxLQUFLLFNBQUwsQ0FBZSxPQUFmLENBQXVCLEdBQXZCLE1BQWdDLENBQUMsQ0FBRCxFQUFJO0FBQ3BDLDZCQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLEdBQXBCLEVBRG9DO3FCQUF4QztpQkFMSjs7QUFVQSw4QkFBYyxHQUFkLElBQXFCLFFBQXJCLENBNUc0QjthQUFoQztTQURKOzs7QUEvQk8sWUFpSlAsQ0FBSyxZQUFMLEdBQW9CLEtBQUssU0FBTCxDQUFlLE1BQWYsQ0FqSmI7QUFrSlAsYUFBSyxhQUFMLEdBQXFCLEtBQUssVUFBTCxDQUFnQixNQUFoQixDQWxKZDs7QUFvSlAsZUFBTyxJQUFQLENBcEpPOzs7Ozs7Ozs7OztBQWJNLHFCQTRLakIsaUNBQVcsUUFBUSxZQUFZLFNBQVM7QUFDcEMsWUFBSSxhQUFhLEtBQWI7OztBQURnQyxhQUkvQixJQUFJLElBQUksQ0FBSixFQUFPLElBQUksS0FBSyxZQUFMLEVBQW1CLEdBQXZDLEVBQTRDO0FBQ3hDLGdCQUFNLE1BQU0sS0FBSyxTQUFMLENBQWUsQ0FBZixDQUFOLENBRGtDO0FBRXhDLGdCQUFNLFFBQVEsS0FBSyxNQUFMLENBQVksR0FBWixDQUFSLENBRmtDO0FBR3hDLGdCQUFJLGVBQWUsTUFBTSxPQUFOOzs7QUFIcUIsZ0JBTXBDLE1BQU0sU0FBTixFQUFpQjtBQUNqQiwrQkFBZSxNQUFNLFNBQU4sQ0FBZ0IsWUFBaEIsRUFBOEIsR0FBOUIsRUFBbUMsSUFBbkMsQ0FBZixDQURpQjthQUFyQjs7O0FBTndDLGdCQVdwQyxNQUFNLE1BQU4sRUFBYztBQUNkLCtCQUFlLFVBcE10QixPQW9Nc0IsQ0FBTyxZQUFQLEVBQXFCLE1BQU0sSUFBTixFQUFZLE9BQWpDLEVBQTBDLE1BQU0sTUFBTixDQUF6RCxDQURjO2FBQWxCOztBQUlBLGdCQUFJLENBQUMsS0FBSyxrQkFBTCxFQUF5QjtBQUMxQixzQkFBTSxRQUFOLEdBQWlCLFVBeE1oQixlQXdNZ0IsQ0FBZSxlQUFlLE1BQU0sT0FBTixFQUFlLE9BQTdDLENBQWpCLENBRDBCO2FBQTlCOztBQUlBLGtCQUFNLElBQU4sR0FBYSxNQUFNLE9BQU4sR0FBZ0IsWUFBaEIsQ0FuQjJCOztBQXFCeEMsZ0JBQU0sZ0JBQWdCLEtBQUMsQ0FBTSxJQUFOLEdBQWMsTUFBTSxPQUFOLEdBQWdCLE1BQU0sSUFBTixHQUFhLE1BQU0sT0FBTjs7O0FBckIxQixnQkF3QnBDLENBQUMsTUFBTSxNQUFOLEVBQWM7QUFDZixvQkFBTSxZQUFZLEtBQUssRUFBTCxDQUFRLFdBQVIsR0FBc0IsS0FBSyxFQUFMLENBQVEsV0FBUixDQUFvQixHQUFwQixDQUF0QixHQUFpRCxHQUFqRCxDQURIOztBQUdmLG9CQUFJLEtBQUssS0FBTCxDQUFXLFNBQVgsTUFBMEIsYUFBMUIsRUFBeUM7QUFDekMseUJBQUssS0FBTCxDQUFXLFNBQVgsSUFBd0IsYUFBeEIsQ0FEeUM7QUFFekMsaUNBQWEsSUFBYixDQUZ5QztpQkFBN0M7O0FBSGUsYUFBbkIsTUFRTztBQUNILHlCQUFLLE1BQUwsQ0FBWSxNQUFNLE1BQU4sQ0FBWixDQUEwQixRQUExQixDQUFtQyxHQUFuQyxJQUEwQyxhQUExQyxDQURHO2lCQVJQO1NBeEJKOzs7QUFKb0MsYUEwQy9CLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxLQUFLLGFBQUwsRUFBb0IsR0FBeEMsRUFBNkM7QUFDekMsZ0JBQU0sTUFBTSxLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBTixDQURtQztBQUV6QyxnQkFBTSxRQUFRLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBUixDQUZtQztBQUd6QyxnQkFBTSxZQUFZLEtBQUssRUFBTCxDQUFRLFdBQVIsR0FBc0IsS0FBSyxFQUFMLENBQVEsV0FBUixDQUFvQixHQUFwQixDQUF0QixHQUFpRCxHQUFqRCxDQUh1Qjs7QUFLekMsa0JBQU0sT0FBTixHQUFnQixNQUFNLElBQU4sQ0FBVyxPQUFYLENBQW1CLE1BQU0sUUFBTixFQUFnQixNQUFNLFFBQU4sQ0FBbkQsQ0FMeUM7O0FBT3pDLGdCQUFJLEtBQUssS0FBTCxDQUFXLFNBQVgsTUFBMEIsTUFBTSxPQUFOLEVBQWU7QUFDekMscUJBQUssS0FBTCxDQUFXLFNBQVgsSUFBd0IsTUFBTSxPQUFOLENBRGlCO0FBRXpDLDZCQUFhLElBQWIsQ0FGeUM7YUFBN0M7U0FQSjs7QUFhQSxlQUFPLElBQUMsQ0FBSyxTQUFMLEdBQWtCLElBQW5CLEdBQTBCLFVBQTFCLENBdkQ2Qjs7O0FBNUt2QixxQkFzT2pCLG1DQUF3QjtZQUFiLG1CQUFhO1lBQU4sYUFBTTs7QUFDcEIsWUFBSSxHQUFHLEdBQUgsRUFBUTtBQUNSLGVBQUcsR0FBSCxDQUFPLEtBQVAsRUFEUTtTQUFaOztBQUlBLFlBQUksS0FBSyxPQUFMLEVBQWM7QUFDZCxpQkFBSyxPQUFMLENBQWEsSUFBYixFQURjO1NBQWxCOzs7QUEzT2EscUJBZ1BqQix5QkFBUTtBQUNKLDJCQUFNLElBQU4sWUFESTtBQUVKLGVBQU8sSUFBUCxDQUZJOzs7QUFoUFMscUJBcVBqQiwyQkFBUztBQUNMLDJCQUFNLEtBQU4sWUFESztBQUVMLGVBQU8sSUFBUCxDQUZLOzs7QUFyUFEscUJBMFBqQix5QkFBUTtBQUNKLFlBQU0sU0FBUyxLQUFLLE1BQUwsQ0FEWDtBQUVKLDJCQUFNLEtBQU4sWUFGSTs7QUFJSixhQUFLLElBQUksR0FBSixJQUFXLE1BQWhCLEVBQXdCO0FBQ3BCLGdCQUFJLE9BQU8sY0FBUCxDQUFzQixHQUF0QixDQUFKLEVBQWdDO0FBQzVCLHVCQUFPLEdBQVAsRUFBWSxJQUFaLEdBQW1CLE9BQU8sR0FBUCxFQUFZLE1BQVosR0FBcUIsT0FBTyxHQUFQLEVBQVksT0FBWixDQURaO2FBQWhDO1NBREo7Ozs7Ozs7O0FBOVBhLHFCQTBRakIsNkNBQWtCO0FBQ2QsZUFBTztBQUNILHFCQUFTLENBQVQ7QUFDQSxzQkFBVSxDQUFWO1NBRkosQ0FEYzs7Ozs7Ozs7O0FBMVFELHFCQXVSakIscURBQXNCO0FBQ2xCLGVBQU8sWUFBUCxDQURrQjs7O1dBdlJMIiwiZmlsZSI6IkFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9jZXNzIGZyb20gJy4uL3Byb2Nlc3MvUHJvY2Vzcyc7XG5pbXBvcnQgeyBzbW9vdGgsIHNwZWVkUGVyU2Vjb25kIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgaXNPYmogfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IGJpbmRBZGFwdGVyIGZyb20gJy4uL2luYy9iaW5kLWFkYXB0ZXInO1xuXG5jb25zdCBERUZBVUxUX1BST1AgPSAnY3VycmVudCc7XG5jb25zdCBOVU1FUklDQUxfVkFMVUVTID0gW0RFRkFVTFRfUFJPUCwgJ2Zyb20nLCAndG8nLCAnbWluJywgJ21heCddO1xuY29uc3QgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBOVU1FUklDQUxfVkFMVUVTLmxlbmd0aDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIGV4dGVuZHMgUHJvY2VzcyB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgcHJvcHMuc3RhdGUgPSB7fTtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgU2V0IEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgICMjIFNldCB1c2VyLWRlZmluZWQgQWN0aW9uIHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHJldHVybiBbQWN0aW9uXVxuICAgICovXG4gICAgc2V0KHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWVzLCBvbiwgLi4ucHJvcHNUb1NldCB9ID0gcHJvcHM7XG5cbiAgICAgICAgc3VwZXIuc2V0KHByb3BzVG9TZXQpO1xuXG4gICAgICAgIGlmIChvbikge1xuICAgICAgICAgICAgLy8gRHVja3R5cGlzaCBjaGVjayBmb3IgQWRhcHRlclxuICAgICAgICAgICAgaWYgKCFvbi5zZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uID0gYmluZEFkYXB0ZXIob24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlcyB8fCB7fTtcbiAgICAgICAgdGhpcy52YWx1ZUtleXMgPSB0aGlzLnZhbHVlS2V5cyB8fCBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzIHx8IFtdO1xuXG4gICAgICAgIC8vIE1lcmdlIG5ldyBgdmFsdWVgIHByb3BlcnRpZXMgd2l0aCBleGlzdGluZ1xuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IHRoaXMuZ2V0RGVmYXVsdFZhbHVlKCk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZVByb3AgPSB0aGlzLmdldERlZmF1bHRWYWx1ZVByb3AoKTtcblxuICAgICAgICAvLyBJbmhlcml0IHZhbHVlIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChkZWZhdWx0VmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcm9wc1RvU2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNUb1NldFtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlW2tleV0gPSBwcm9wc1RvU2V0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgYWxsIHZhbHVlcyBhbmQgc3BsaXQgaW50byBjaGlsZCB2YWx1ZXMgYXMgbmVjY2Vzc2FyeVxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVmFsdWUgPSBjdXJyZW50VmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlVHlwZSA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgLy8gQ29udmVydCBuZXcgdmFsdWUgaW50byBvYmplY3QgaWYgaXQgaXNuJ3QgYWxyZWFkeVxuICAgICAgICAgICAgICAgIGlmIChpc09iaih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtkZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHZhbHVlIGFscmVhZHkgZXhpc3RzLCBjaGVjayBmb3IgYW5kIHVzZSBleGlzdGluZyB0eXBlXG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLmV4aXN0aW5nVmFsdWUsIC4uLm5ld1ZhbHVlIH07XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IGV4aXN0aW5nVmFsdWUudHlwZTtcblxuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBuZXcgdmFsdWUsIGNoZWNrIGZvciB0eXBlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLmRlZmF1bHRWYWx1ZSwgLi4ubmV3VmFsdWUgfTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBvbmUgaXMgZXhwbGljaXRseSBhc3NpZ25lZCwgdXNlIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLnR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT3IgaWYgb3VyIEFkYXB0ZXIgaGFzIGEgdHlwZU1hcCwgdXNlIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9uICYmIHRoaXMub24uZ2V0VmFsdWVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVR5cGUgPSB0aGlzLm9uLmdldFZhbHVlVHlwZShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTWF5YmUgcnVuIGB0ZXN0YCBvbiBjb2xvciBoZXJlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UndmUgZ290IGEgdmFsdWVUeXBlIHRoZW4gcHJlcHJvY2VzcyB0aGUgdmFsdWUgYWNjb3JkaW5nbHlcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSB2YWx1ZVR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBzaG91bGQgYmUgc3BsaXQsIHNwbGl0XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUuc3BsaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkVmFsdWVzID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvb3Agb3ZlciBudW1lcmljYWwgdmFsdWVzIGFuZCBzcGxpdCBhbnkgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBOVU1FUklDQUxfVkFMVUVTW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdFZhbHVlcyA9IHZhbHVlVHlwZS5zcGxpdChuZXdWYWx1ZVtwcm9wTmFtZV0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHNwbGl0S2V5IGluIHNwbGl0VmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRWYWx1ZXMuaGFzT3duUHJvcGVydHkoc3BsaXRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZSA9IHNwbGl0VmFsdWVzW3NwbGl0S2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IGNoaWxkIHZhbHVlIGlmIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkVmFsdWVzW3NwbGl0S2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlc1tzcGxpdEtleV0gPSB7IC4uLm5ld1ZhbHVlIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWVzW3NwbGl0S2V5XSA9ICh2YWx1ZVR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4udmFsdWVUeXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0sIC4uLmNoaWxkVmFsdWVzW3NwbGl0S2V5XSB9IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IC4uLnZhbHVlVHlwZS5kZWZhdWx0UHJvcHMsIC4uLmNoaWxkVmFsdWVzW3NwbGl0S2V5XSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZXNbc3BsaXRLZXldW3Byb3BOYW1lXSA9IHNwbGl0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdyBsb29wIHRocm91Z2ggYWxsIGNoaWxkIHZhbHVlcyBhbmQgYWRkIHRoZW0gYXMgbm9ybWFsIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGRLZXkgaW4gY2hpbGRWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRWYWx1ZXMuaGFzT3duUHJvcGVydHkoY2hpbGRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkVmFsdWUgPSBjaGlsZFZhbHVlc1tjaGlsZEtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkS2V5ID0ga2V5ICsgY2hpbGRLZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW5ba2V5XSA9IGNoaWxkVmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1tjb21iaW5lZEtleV0gPSBjaGlsZFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlS2V5cy5pbmRleE9mKGNvbWJpbmVkS2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goY29tYmluZWRLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIGEgdGVtcGxhdGUgZm9yIHJlY29tYmluYXRpb24gaWYgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZS50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnRlbXBsYXRlID0gbmV3VmFsdWUudGVtcGxhdGUgfHwgdmFsdWVUeXBlLnRlbXBsYXRlKG5ld1ZhbHVlLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE9yIHdlIGp1c3QgaGF2ZSBkZWZhdWx0IHZhbHVlIHByb3BzLCBsb2FkIHRob3NlICAgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLnZhbHVlVHlwZS5kZWZhdWx0UHJvcHMsIC4uLm5ld1ZhbHVlIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgYXBwcm9wcmlhdGUgbGlzdHMgd2l0aCB2YWx1ZSBrZXlcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJlY29tcHV0ZSB2YWx1ZSBrZXkgYW5kIHBhcmVudCBrZXkgbGVuZ3RoIHRvIHByZXZlbnQgcGVyLWZyYW1lIG1lYXN1cmVtZW50XG4gICAgICAgIHRoaXMubnVtVmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMubGVuZ3RoO1xuICAgICAgICB0aGlzLm51bVBhcmVudEtleXMgPSB0aGlzLnBhcmVudEtleXMubGVuZ3RoO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIERlY2lkZSB3aGV0aGVyIHRoaXMgQWN0aW9uIHdpbGwgcmVuZGVyIG9uIG5leHQgZnJhbWVcblxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJuIHRydWUgdG8gcmVuZGVyXG4gICAgKi9cbiAgICB3aWxsUmVuZGVyKGFjdGlvbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBsZXQgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBiYXNlIHZhbHVlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgbGV0IHVwZGF0ZWRWYWx1ZSA9IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gdmFsdWUudHJhbnNmb3JtKHVwZGF0ZWRWYWx1ZSwga2V5LCB0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU21vb3RoIHZhbHVlIGlmIHdlIGhhdmUgc21vb3RoaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc21vb3RoKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gc21vb3RoKHVwZGF0ZWRWYWx1ZSwgdmFsdWUucHJldiwgZWxhcHNlZCwgdmFsdWUuc21vb3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc3BlZWRQZXJTZWNvbmQodXBkYXRlZFZhbHVlIC0gdmFsdWUuY3VycmVudCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLnByZXYgPSB2YWx1ZS5jdXJyZW50ID0gdXBkYXRlZFZhbHVlO1xuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUZvclN0YXRlID0gKHZhbHVlLnVuaXQpID8gdmFsdWUuY3VycmVudCArIHZhbHVlLnVuaXQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBBZGQgc3RyYWlnaHQgdG8gc3RhdGUgaWYgbm8gcGFyZW50XG4gICAgICAgICAgICBpZiAoIXZhbHVlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcHBlZEtleSA9IHRoaXMub24ubWFwU3RhdGVLZXkgPyB0aGlzLm9uLm1hcFN0YXRlS2V5KGtleSkgOiBrZXk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZVttYXBwZWRLZXldICE9PSB2YWx1ZUZvclN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVbbWFwcGVkS2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE9yIGFkZCB0byBwYXJlbnRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlbltrZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWVzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1QYXJlbnRLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMucGFyZW50S2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IG1hcHBlZEtleSA9IHRoaXMub24ubWFwU3RhdGVLZXkgPyB0aGlzLm9uLm1hcFN0YXRlS2V5KGtleSkgOiBrZXk7XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50eXBlLmNvbWJpbmUodmFsdWUuY2hpbGRyZW4sIHZhbHVlLnRlbXBsYXRlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVbbWFwcGVkS2V5XSAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVbbWFwcGVkS2V5XSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHRoaXMub25DbGVhbnVwKSA/IHRydWUgOiBoYXNDaGFuZ2VkO1xuICAgIH1cblxuICAgIG9uUmVuZGVyKHsgc3RhdGUsIG9uIH0pIHtcbiAgICAgICAgaWYgKG9uLnNldCkge1xuICAgICAgICAgICAgb24uc2V0KHN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uRnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMub25GcmFtZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhbHVlc1trZXldLnByZXYgPSB2YWx1ZXNba2V5XS5vcmlnaW4gPSB2YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICB2ZWxvY2l0eTogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnR5IG5hbWVcbiAgICAgICAgIyMgU2V0IHRoaXMgYHZhbHVlYCBwcm9wZXJ0eSB3aGVuIHNldCBhcyB2YWx1ZSBpbnN0ZWFkIG9mIG9iamVjdFxuXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfVxufVxuIl19