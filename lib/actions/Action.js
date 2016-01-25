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

var Action = (function (_Process) {
    _inherits(Action, _Process);

    function Action() {
        _classCallCheck(this, Action);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _Process.call.apply(_Process, [this].concat(args)));

        _this.values = {};
        _this.state = {};
        _this.valueKeys = [];
        _this.parentKeys = [];

        // Initalise renderer
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

        // Merge `value` properties with existing
        if (values) {
            (function () {
                var currentValues = _this2.values;
                var defaultValue = _this2.getDefaultValue();
                var defaultValueProp = _this2.getDefaultValueProp();

                // Inheritable values from props
                (0, _utils.each)(defaultValue, function (value, key) {
                    if (propsToSet[key] !== undefined) {
                        defaultValue[key] = propsToSet[key];
                    }
                });

                // Overwrite per-value props
                (0, _utils.each)(values, function (value, key) {
                    var existingValue = currentValues[key];
                    // Check for value type
                    var newValue = _extends({}, defaultValue);

                    if ((0, _utils.isObj)(value)) {
                        newValue = _extends({}, newValue, value);
                    } else {
                        newValue[defaultValueProp] = value;
                    }

                    currentValues[key] = existingValue ? _extends({}, existingValue, newValue) : newValue;

                    if (currentValues[key].children) {
                        if (_this2.valueKeys.indexOf(key) === -1) {
                            _this2.valueKeys.push(key);
                        }
                    } else {
                        if (_this2.parentKeys.indexOf(key) === -1) {
                            _this2.parentKeys.push(key);
                        }
                    }
                });

                // Precomputer value key and parent key length to prevent per-frame measurement
                _this2.numValueKeys = _this2.valueKeys.length;
                _this2.numParentKeys = _this2.parentKeys.length;
            })();
        }

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
                var mappedKey = this.onRender && this.onRender.stateMap ? this.onRender.stateMap[key] : key;
                this.state[key] = valueForState;

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
})(_Process3.default);

exports.default = Action;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFNLFlBQVksR0FBRyxTQUFTLENBQUM7O0lBRVYsTUFBTTtjQUFOLE1BQU07O0FBQ3ZCLGFBRGlCLE1BQU0sR0FDRjs4QkFESixNQUFNOzswQ0FDUixJQUFJO0FBQUosZ0JBQUk7OztxREFDZiw0Q0FBUyxJQUFJLEVBQUM7O0FBQ2QsY0FBSyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLGNBQUssS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNoQixjQUFLLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDcEIsY0FBSyxVQUFVLEdBQUcsRUFBRTs7O0FBQUMsQUFHckIsWUFBSSxNQUFLLFFBQVEsSUFBSSxNQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUU7QUFDckMsa0JBQUssUUFBUSxDQUFDLElBQUksT0FBTSxDQUFDO1NBQzVCOztLQUNKOzs7Ozs7OztBQUFBO0FBWmdCLFVBQU0sV0FxQnZCLEdBQUcsZ0JBQUMsS0FBSyxFQUFFOzs7WUFDQyxNQUFNLEdBQW9CLEtBQUssQ0FBL0IsTUFBTTs7WUFBSyxVQUFVLDRCQUFLLEtBQUs7O0FBRXZDLDJCQUFNLEdBQUcsS0FBQSxPQUFDLFVBQVUsQ0FBQzs7O0FBQUMsQUFHdEIsWUFBSSxNQUFNLEVBQUU7O0FBQ1Isb0JBQU0sYUFBYSxHQUFHLE9BQUssTUFBTSxDQUFDO0FBQ2xDLG9CQUFNLFlBQVksR0FBRyxPQUFLLGVBQWUsRUFBRSxDQUFDO0FBQzVDLG9CQUFNLGdCQUFnQixHQUFHLE9BQUssbUJBQW1CLEVBQUU7OztBQUFDLEFBR3BELGlDQUFLLFlBQVksRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHLEVBQUs7QUFDL0Isd0JBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtBQUMvQixvQ0FBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFH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QUFNO0FBQ0gsd0JBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxhQUFhLENBQUM7aUJBQzNEO1NBQ0o7S0FDSjs7QUFwSmdCLFVBQU0sV0FzSnZCLEtBQUssb0JBQUc7QUFDSiwyQkFBTSxJQUFJLEtBQUEsTUFBRSxDQUFDO0FBQ2IsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUF6SmdCLFVBQU0sV0EySnZCLE1BQU0scUJBQUc7QUFDTCwyQkFBTSxLQUFLLEtBQUEsTUFBRSxDQUFDO0FBQ2QsZUFBTyxJQUFJLENBQUM7S0FDZjs7Ozs7OztBQTlKZ0IsVUFBTSxXQXFLdkIsZUFBZSw4QkFBRztBQUNkLGVBQU87QUFDSCxtQkFBTyxFQUFFLENBQUM7QUFDVixvQkFBUSxFQUFFLENBQUM7U0FDZCxDQUFDO0tBQ0w7Ozs7Ozs7O0FBMUtnQixVQUFNLFdBa0x2QixtQkFBbUIsa0NBQUc7QUFDbEIsZUFBTyxZQUFZLENBQUM7S0FDdkI7O1dBcExnQixNQUFNOzs7a0JBQU4sTUFBTTtBQXFMMUIsQ0FBQyIsImZpbGUiOiJBY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvY2VzcyBmcm9tICcuLi9wcm9jZXNzL1Byb2Nlc3MnO1xuaW1wb3J0IHsgc3BlZWRQZXJTZWNvbmQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBlYWNoLCBpc09iaiB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNvbnN0IERFRkFVTFRfUFJPUCA9ICdjdXJyZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIGV4dGVuZHMgUHJvY2VzcyB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLnZhbHVlS2V5cyA9IFtdO1xuICAgICAgICB0aGlzLnBhcmVudEtleXMgPSBbXTtcblxuICAgICAgICAvLyBJbml0YWxpc2UgcmVuZGVyZXIgXG4gICAgICAgIGlmICh0aGlzLm9uUmVuZGVyICYmIHRoaXMub25SZW5kZXIuaW5pdCkge1xuICAgICAgICAgICAgdGhpcy5vblJlbmRlci5pbml0KHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICAgKi9cbiAgICBzZXQocHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMsIC4uLnByb3BzVG9TZXQgfSA9IHByb3BzO1xuXG4gICAgICAgIHN1cGVyLnNldChwcm9wc1RvU2V0KTtcblxuICAgICAgICAvLyBNZXJnZSBgdmFsdWVgIHByb3BlcnRpZXMgd2l0aCBleGlzdGluZ1xuICAgICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSB0aGlzLmdldERlZmF1bHRWYWx1ZSgpO1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlUHJvcCA9IHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpO1xuXG4gICAgICAgICAgICAvLyBJbmhlcml0YWJsZSB2YWx1ZXMgZnJvbSBwcm9wc1xuICAgICAgICAgICAgZWFjaChkZWZhdWx0VmFsdWUsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzVG9TZXRba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZVtrZXldID0gcHJvcHNUb1NldFtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBPdmVyd3JpdGUgcGVyLXZhbHVlIHByb3BzXG4gICAgICAgICAgICBlYWNoKHZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1ZhbHVlID0gY3VycmVudFZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciB2YWx1ZSB0eXBlXG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0geyAuLi5kZWZhdWx0VmFsdWUgfTtcblxuICAgICAgICAgICAgICAgIGlmIChpc09iaih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLm5ld1ZhbHVlLCAuLi52YWx1ZSB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1trZXldID0gZXhpc3RpbmdWYWx1ZSA/IHsgLi4uZXhpc3RpbmdWYWx1ZSwgLi4ubmV3VmFsdWUgfSA6IG5ld1ZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZXNba2V5XS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZUtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFByZWNvbXB1dGVyIHZhbHVlIGtleSBhbmQgcGFyZW50IGtleSBsZW5ndGggdG8gcHJldmVudCBwZXItZnJhbWUgbWVhc3VyZW1lbnRcbiAgICAgICAgICAgIHRoaXMubnVtVmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5udW1QYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIERlY2lkZSB3aGV0aGVyIHRoaXMgQWN0aW9uIHdpbGwgcmVuZGVyIG9uIG5leHQgZnJhbWVcblxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJuIHRydWUgdG8gcmVuZGVyXG4gICAgKi9cbiAgICB3aWxsUmVuZGVyKGFjdGlvbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBsZXQgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGxldCB1cGRhdGVkVmFsdWUgPSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgdmFsdWUgYmFzZWQgb24gYWN0aXZlIGFjdGlvblxuICAgICAgICAgICAgaWYgKHZhbHVlLmFjdGlvbikge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IHZhbHVlLmFjdGlvbi52YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSdW4gdHJhbnNmb3JtIGZ1bmN0aW9uIChpZiBwcmVzZW50KVxuICAgICAgICAgICAgaWYgKHZhbHVlLnRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IHZhbHVlLnRyYW5zZm9ybSh1cGRhdGVkVmFsdWUsIGtleSwgdGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNtb290aCB2YWx1ZSBpZiB3ZSBoYXZlIHNtb290aGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnNtb290aCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IHNtb290aCh1cGRhdGVkVmFsdWUsIHZhbHVlLmN1cnJlbnQsIGVsYXBzZWQsIHZhbHVlLnNtb290aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIHZhbHVlXG4gICAgICAgICAgICBpZiAodmFsdWUucm91bmQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBNYXRoLnJvdW5kKHVwZGF0ZWRWYWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcCB0byBtaW5pbXVtIHZhbHVlXG4gICAgICAgICAgICBpZiAodmFsdWUubWluICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBNYXRoLm1heCh1cGRhdGVkVmFsdWUsIHZhbHVlLm1pbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcCB0byBtYXhpbXVtIHZhbHVlXG4gICAgICAgICAgICBpZiAodmFsdWUubWF4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBNYXRoLm1pbih1cGRhdGVkVmFsdWUsIHZhbHVlLm1heCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc3BlZWRQZXJTZWNvbmQodXBkYXRlZFZhbHVlIC0gdmFsdWUuY3VycmVudCwgZWxhcHNlZCk7XG5cbiAgICAgICAgICAgIGlmICh1cGRhdGVkVmFsdWUgIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHVwZGF0ZWRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAodGhpcy5vbkNsZWFudXApID8gdHJ1ZSA6IGhhc0NoYW5nZWQ7XG4gICAgfVxuXG4gICAgb25QcmVSZW5kZXIoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlRm9yU3RhdGUgPSAodmFsdWUudW5pdCkgPyB2YWx1ZS5jdXJyZW50ICsgdmFsdWUudW5pdCA6IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIEFkZCBzdHJhaWdodCB0byBzdGF0ZSBpZiBubyBwYXJlbnRcbiAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFwcGVkS2V5ID0gKHRoaXMub25SZW5kZXIgJiYgdGhpcy5vblJlbmRlci5zdGF0ZU1hcCkgPyB0aGlzLm9uUmVuZGVyLnN0YXRlTWFwW2tleV0gOiBrZXk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWVGb3JTdGF0ZTtcblxuICAgICAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1t2YWx1ZS5wYXJlbnRdLmNoaWxkcmVuW2tleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzdW1lKCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdGhpcyBgdmFsdWVgIHByb3BlcnR5IHdoZW4gc2V0IGFzIHZhbHVlIGluc3RlYWQgb2Ygb2JqZWN0XG5cbiAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUFJPUDtcbiAgICB9XG59O1xuIl19