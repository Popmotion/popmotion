'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _framesync = require('framesync');

var _uiUtils = require('ui-utils');

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_PROP = 'current';

var Action = (function (_Process) {
    _inherits(Action, _Process);

    /*
        # Action class constructor
        ## Assign default properties of Action or extended class and set user-defined props
         @param [object]
    */

    function Action(props) {
        _classCallCheck(this, Action);

        // Load default props

        var _this = _possibleConstructorReturn(this, _Process.call(this));

        (0, _uiUtils.each)(_this.getDefaultProps(), function (value, key) {
            return _this[key] = value;
        });

        _this.values = {};
        _this.set(props, _this.getDefaultValueProp());
        return _this;
    }

    /*
        # Set Action properties
        ## Set user-defined Action properties
         @param [object]
        @param [string]: Name of default value property (set when `value` is **not** provided as object)
        @return [Action]
    */

    Action.prototype.set = function set(props) {
        var _this2 = this;

        var defaultValueProp = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_PROP : arguments[1];
        var values = props.values;

        var propsToSet = _objectWithoutProperties(props, ['values']);

        // Loop through non-`value` props and set

        (0, _uiUtils.each)(propsToSet, function (value, key) {
            _this2[key] = value;
        });

        // Merge `value` properties with existing
        if (values) {
            (function () {
                var currentValues = _this2.values;
                var defaultValue = _this2.getDefaultValue();

                (0, _uiUtils.each)(values, function (value, key) {
                    var existingValue = currentValues[key];
                    var newValue = _extends({}, defaultValue);

                    if ((0, _uiUtils.isObj)(value)) {
                        newValue = _extends({}, newValue, value);
                    } else {
                        newValue[defaultValueProp] = value;
                    }

                    currentValues[key] = existingValue ? _extends({}, existingValue, newValue) : newValue;
                });
            })();
        }

        return this;
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
        # Get default Action properties
         @return [object]
    */

    Action.prototype.getDefaultProps = function getDefaultProps() {
        return {};
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

    /*
        # Extend this Action with new properties
        ## Returns new instance of this Action's `prototype` with existing and new properties
         @param [object] (optional)
        @return [Action]
    */

    Action.prototype.extend = function extend(props) {
        return new this.constructor(_extends({}, this, { props: props }), this.getDefaultValueProp());
    };

    return Action;
})(_framesync.Process);

exports.default = Action;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFNLFlBQVksR0FBRyxTQUFTLENBQUM7O0lBRVYsTUFBTTtjQUFOLE1BQU07Ozs7Ozs7O0FBT3ZCLGFBUGlCLE1BQU0sQ0FPWCxLQUFLLEVBQUU7OEJBUEYsTUFBTTs7OztxREFRbkIsbUJBQU87O0FBR1AscUJBZkMsSUFBSSxFQWVBLE1BQUssZUFBZSxFQUFFLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRzttQkFBSyxNQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUs7U0FBQSxDQUFDLENBQUM7O0FBRWhFLGNBQUssTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNqQixjQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBSyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7O0tBQy9DOzs7Ozs7Ozs7QUFBQTtBQWZnQixVQUFNLFdBeUJ2QixHQUFHLGdCQUFDLEtBQUssRUFBbUM7OztZQUFqQyxnQkFBZ0IseURBQUcsWUFBWTtZQUM5QixNQUFNLEdBQW9CLEtBQUssQ0FBL0IsTUFBTTs7WUFBSyxVQUFVLDRCQUFLLEtBQUs7Ozs7QUFHdkMscUJBakNDLElBQUksRUFpQ0EsVUFBVSxFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBSztBQUM3QixtQkFBSyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDckIsQ0FBQzs7O0FBQUMsQUFHSCxZQUFJLE1BQU0sRUFBRTs7QUFDUixvQkFBTSxhQUFhLEdBQUcsT0FBSyxNQUFNLENBQUM7QUFDbEMsb0JBQU0sWUFBWSxHQUFHLE9BQUssZUFBZSxFQUFFLENBQUM7O0FBRTVDLDZCQTFDSCxJQUFJLEVBMENJLE1BQU0sRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHLEVBQUs7QUFDekIsd0JBQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6Qyx3QkFBSSxRQUFRLGdCQUFRLFlBQVksQ0FBRSxDQUFDOztBQUVuQyx3QkFBSSxhQTlDTCxLQUFLLEVBOENNLEtBQUssQ0FBQyxFQUFFO0FBQ2QsZ0NBQVEsZ0JBQVEsUUFBUSxFQUFLLEtBQUssQ0FBRSxDQUFDO3FCQUN4QyxNQUFNO0FBQ0gsZ0NBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEtBQUssQ0FBQztxQkFDdEM7O0FBRUQsaUNBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxhQUFhLGdCQUFRLGFBQWEsRUFBSyxRQUFRLElBQUssUUFBUSxDQUFDO2lCQUNyRixDQUFDLENBQUM7O1NBQ047O0FBRUQsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUFyRGdCLFVBQU0sV0F1RHZCLEtBQUssb0JBQUc7QUFDSiwyQkFBTSxJQUFJLEtBQUEsTUFBRSxDQUFDO0FBQ2IsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUExRGdCLFVBQU0sV0E0RHZCLE1BQU0scUJBQUc7QUFDTCwyQkFBTSxLQUFLLEtBQUEsTUFBRSxDQUFDO0FBQ2QsZUFBTyxJQUFJLENBQUM7S0FDZjs7Ozs7OztBQS9EZ0IsVUFBTSxXQXNFdkIsZUFBZSw4QkFBRztBQUNkLGVBQU8sRUFBRSxDQUFDO0tBQ2I7Ozs7Ozs7QUF4RWdCLFVBQU0sV0ErRXZCLGVBQWUsOEJBQUc7QUFDZCxlQUFPO0FBQ0gsbUJBQU8sRUFBRSxDQUFDO0FBQ1Ysb0JBQVEsRUFBRSxDQUFDO1NBQ2QsQ0FBQztLQUNMOzs7Ozs7OztBQXBGZ0IsVUFBTSxXQTRGdkIsbUJBQW1CLGtDQUFHO0FBQ2xCLGVBQU8sWUFBWSxDQUFDO0tBQ3ZCOzs7Ozs7Ozs7QUE5RmdCLFVBQU0sV0F1R3ZCLE1BQU0sbUJBQUMsS0FBSyxFQUFFO0FBQ1YsZUFBTyxJQUFJLElBQUksQ0FBQyxXQUFXLGNBQU0sSUFBSSxJQUFFLEtBQUssRUFBTCxLQUFLLEtBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztLQUMvRTs7V0F6R2dCLE1BQU07Y0FMbEIsT0FBTzs7a0JBS0ssTUFBTTtBQTBHMUIsQ0FBQyIsImZpbGUiOiJBY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9jZXNzIH0gZnJvbSAnZnJhbWVzeW5jJztcbmltcG9ydCB7IGVhY2gsIGlzT2JqIH0gZnJvbSAndWktdXRpbHMnO1xuXG5jb25zdCBERUZBVUxUX1BST1AgPSAnY3VycmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIFByb2Nlc3Mge1xuICAgIC8qXG4gICAgICAgICMgQWN0aW9uIGNsYXNzIGNvbnN0cnVjdG9yXG4gICAgICAgICMjIEFzc2lnbiBkZWZhdWx0IHByb3BlcnRpZXMgb2YgQWN0aW9uIG9yIGV4dGVuZGVkIGNsYXNzIGFuZCBzZXQgdXNlci1kZWZpbmVkIHByb3BzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIC8vIExvYWQgZGVmYXVsdCBwcm9wc1xuICAgICAgICBlYWNoKHRoaXMuZ2V0RGVmYXVsdFByb3BzKCksICh2YWx1ZSwga2V5KSA9PiB0aGlzW2tleV0gPSB2YWx1ZSk7XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMsIHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiBkZWZhdWx0IHZhbHVlIHByb3BlcnR5IChzZXQgd2hlbiBgdmFsdWVgIGlzICoqbm90KiogcHJvdmlkZWQgYXMgb2JqZWN0KVxuICAgICAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICAgKi9cbiAgICBzZXQocHJvcHMsIGRlZmF1bHRWYWx1ZVByb3AgPSBERUZBVUxUX1BST1ApIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMsIC4uLnByb3BzVG9TZXQgfSA9IHByb3BzO1xuXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBub24tYHZhbHVlYCBwcm9wcyBhbmQgc2V0XG4gICAgICAgIGVhY2gocHJvcHNUb1NldCwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNZXJnZSBgdmFsdWVgIHByb3BlcnRpZXMgd2l0aCBleGlzdGluZ1xuICAgICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSB0aGlzLmdldERlZmF1bHRWYWx1ZSgpO1xuXG4gICAgICAgICAgICBlYWNoKHZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1ZhbHVlID0gY3VycmVudFZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IHsgLi4uZGVmYXVsdFZhbHVlIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNPYmoodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0geyAuLi5uZXdWYWx1ZSwgLi4udmFsdWUgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtkZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IGV4aXN0aW5nVmFsdWUgPyB7IC4uLmV4aXN0aW5nVmFsdWUsIC4uLm5ld1ZhbHVlIH0gOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzdW1lKCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICB2ZWxvY2l0eTogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnR5IG5hbWVcbiAgICAgICAgIyMgU2V0IHRoaXMgYHZhbHVlYCBwcm9wZXJ0eSB3aGVuIHNldCBhcyB2YWx1ZSBpbnN0ZWFkIG9mIG9iamVjdFxuXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBFeHRlbmQgdGhpcyBBY3Rpb24gd2l0aCBuZXcgcHJvcGVydGllc1xuICAgICAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIEFjdGlvbidzIGBwcm90b3R5cGVgIHdpdGggZXhpc3RpbmcgYW5kIG5ldyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybiBbQWN0aW9uXVxuICAgICovXG4gICAgZXh0ZW5kKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih7IC4uLnRoaXMsIHByb3BzIH0sIHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpKTtcbiAgICB9XG59O1xuIl19