'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.__esModule = true;

var _framesync = require('framesync');

var _utils = require('../inc/utils');

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

        (0, _utils.each)(_this.getDefaultProps(), function (value, key) {
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

        (0, _utils.each)(propsToSet, function (value, key) {
            _this2[key] = value;
        });

        // Merge `value` properties with existing
        if (values) {
            (function () {
                var currentValues = _this2.values;
                var defaultValue = _this2.getDefaultValue();

                // Inherit values from props
                (0, _utils.each)(defaultValue, function (value, key) {
                    if (propsToSet[key] !== undefined) {
                        defaultValue[key] = propsToSet[key];
                    }
                });

                // Overwrite per-value props
                (0, _utils.each)(values, function (value, key) {
                    var existingValue = currentValues[key];
                    var newValue = _extends({}, defaultValue);

                    if ((0, _utils.isObj)(value)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFNLFlBQVksR0FBRyxTQUFTLENBQUM7O0lBRVYsTUFBTTtjQUFOLE1BQU07Ozs7Ozs7O0FBT3ZCLGFBUGlCLE1BQU0sQ0FPWCxLQUFLLEVBQUU7OEJBUEYsTUFBTTs7OztxREFRbkIsbUJBQU87O0FBR1AsbUJBZkMsSUFBSSxFQWVBLE1BQUssZUFBZSxFQUFFLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRzttQkFBSyxNQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUs7U0FBQSxDQUFDLENBQUM7O0FBRWhFLGNBQUssTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNqQixjQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBSyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7O0tBQy9DOzs7Ozs7Ozs7QUFBQTtBQWZnQixVQUFNLFdBeUJ2QixHQUFHLGdCQUFDLEtBQUssRUFBbUM7OztZQUFqQyxnQkFBZ0IseURBQUcsWUFBWTtZQUM5QixNQUFNLEdBQW9CLEtBQUssQ0FBL0IsTUFBTTs7WUFBSyxVQUFVLDRCQUFLLEtBQUs7Ozs7QUFHdkMsbUJBakNDLElBQUksRUFpQ0EsVUFBVSxFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBSztBQUM3QixtQkFBSyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDckIsQ0FBQzs7O0FBQUMsQUFHSCxZQUFJLE1BQU0sRUFBRTs7QUFDUixvQkFBTSxhQUFhLEdBQUcsT0FBSyxNQUFNLENBQUM7QUFDbEMsb0JBQU0sWUFBWSxHQUFHLE9BQUssZUFBZSxFQUFFOzs7QUFBQyxBQUc1QywyQkEzQ0gsSUFBSSxFQTJDSSxZQUFZLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFLO0FBQy9CLHdCQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxTQUFTLEVBQUU7QUFDL0Isb0NBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3ZDO2lCQUNKLENBQUM7OztBQUFDLEFBR0gsMkJBbERILElBQUksRUFrREksTUFBTSxFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBSztBQUN6Qix3QkFBTSxhQUFhLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLHdCQUFJLFFBQVEsZ0JBQVEsWUFBWSxDQUFFLENBQUM7O0FBRW5DLHdCQUFJLFdBdERMLEtBQUssRUFzRE0sS0FBSyxDQUFDLEVBQUU7QUFDZCxnQ0FBUSxnQkFBUSxRQUFRLEVBQUssS0FBSyxDQUFFLENBQUM7cUJBQ3hDLE1BQU07QUFDSCxnQ0FBUSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsS0FBSyxDQUFDO3FCQUN0Qzs7QUFFRCxpQ0FBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQWEsZ0JBQVEsYUFBYSxFQUFLLFFBQVEsSUFBSyxRQUFRLENBQUM7aUJBQ3JGLENBQUMsQ0FBQzs7U0FDTjs7QUFFRCxlQUFPLElBQUksQ0FBQztLQUNmOztBQTdEZ0IsVUFBTSxXQStEdkIsS0FBSyxvQkFBRztBQUNKLDJCQUFNLElBQUksS0FBQSxNQUFFLENBQUM7QUFDYixlQUFPLElBQUksQ0FBQztLQUNmOztBQWxFZ0IsVUFBTSxXQW9FdkIsTUFBTSxxQkFBRztBQUNMLDJCQUFNLEtBQUssS0FBQSxNQUFFLENBQUM7QUFDZCxlQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7O0FBdkVnQixVQUFNLFdBOEV2QixlQUFlLDhCQUFHO0FBQ2QsZUFBTyxFQUFFLENBQUM7S0FDYjs7Ozs7OztBQWhGZ0IsVUFBTSxXQXVGdkIsZUFBZSw4QkFBRztBQUNkLGVBQU87QUFDSCxtQkFBTyxFQUFFLENBQUM7QUFDVixvQkFBUSxFQUFFLENBQUM7U0FDZCxDQUFDO0tBQ0w7Ozs7Ozs7O0FBNUZnQixVQUFNLFdBb0d2QixtQkFBbUIsa0NBQUc7QUFDbEIsZUFBTyxZQUFZLENBQUM7S0FDdkI7Ozs7Ozs7OztBQXRHZ0IsVUFBTSxXQStHdkIsTUFBTSxtQkFBQyxLQUFLLEVBQUU7QUFDVixlQUFPLElBQUksSUFBSSxDQUFDLFdBQVcsY0FBTSxJQUFJLElBQUUsS0FBSyxFQUFMLEtBQUssS0FBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0tBQy9FOztXQWpIZ0IsTUFBTTtjQUxsQixPQUFPOztrQkFLSyxNQUFNO0FBa0gxQixDQUFDIiwiZmlsZSI6IkFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2Nlc3MgfSBmcm9tICdmcmFtZXN5bmMnO1xuaW1wb3J0IHsgZWFjaCwgaXNPYmogfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBERUZBVUxUX1BST1AgPSAnY3VycmVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIFByb2Nlc3Mge1xuICAgIC8qXG4gICAgICAgICMgQWN0aW9uIGNsYXNzIGNvbnN0cnVjdG9yXG4gICAgICAgICMjIEFzc2lnbiBkZWZhdWx0IHByb3BlcnRpZXMgb2YgQWN0aW9uIG9yIGV4dGVuZGVkIGNsYXNzIGFuZCBzZXQgdXNlci1kZWZpbmVkIHByb3BzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIC8vIExvYWQgZGVmYXVsdCBwcm9wc1xuICAgICAgICBlYWNoKHRoaXMuZ2V0RGVmYXVsdFByb3BzKCksICh2YWx1ZSwga2V5KSA9PiB0aGlzW2tleV0gPSB2YWx1ZSk7XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMsIHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiBkZWZhdWx0IHZhbHVlIHByb3BlcnR5IChzZXQgd2hlbiBgdmFsdWVgIGlzICoqbm90KiogcHJvdmlkZWQgYXMgb2JqZWN0KVxuICAgICAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICAgKi9cbiAgICBzZXQocHJvcHMsIGRlZmF1bHRWYWx1ZVByb3AgPSBERUZBVUxUX1BST1ApIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMsIC4uLnByb3BzVG9TZXQgfSA9IHByb3BzO1xuXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBub24tYHZhbHVlYCBwcm9wcyBhbmQgc2V0XG4gICAgICAgIGVhY2gocHJvcHNUb1NldCwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNZXJnZSBgdmFsdWVgIHByb3BlcnRpZXMgd2l0aCBleGlzdGluZ1xuICAgICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSB0aGlzLmdldERlZmF1bHRWYWx1ZSgpO1xuXG4gICAgICAgICAgICAvLyBJbmhlcml0IHZhbHVlcyBmcm9tIHByb3BzXG4gICAgICAgICAgICBlYWNoKGRlZmF1bHRWYWx1ZSwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNUb1NldFtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlW2tleV0gPSBwcm9wc1RvU2V0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIE92ZXJ3cml0ZSBwZXItdmFsdWUgcHJvcHNcbiAgICAgICAgICAgIGVhY2godmFsdWVzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVmFsdWUgPSBjdXJyZW50VmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0geyAuLi5kZWZhdWx0VmFsdWUgfTtcblxuICAgICAgICAgICAgICAgIGlmIChpc09iaih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLm5ld1ZhbHVlLCAuLi52YWx1ZSB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1trZXldID0gZXhpc3RpbmdWYWx1ZSA/IHsgLi4uZXhpc3RpbmdWYWx1ZSwgLi4ubmV3VmFsdWUgfSA6IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHByb3BlcnRpZXNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdGhpcyBgdmFsdWVgIHByb3BlcnR5IHdoZW4gc2V0IGFzIHZhbHVlIGluc3RlYWQgb2Ygb2JqZWN0XG5cbiAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUFJPUDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIEFjdGlvbiB3aXRoIG5ldyBwcm9wZXJ0aWVzXG4gICAgICAgICMjIFJldHVybnMgbmV3IGluc3RhbmNlIG9mIHRoaXMgQWN0aW9uJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICAgKi9cbiAgICBleHRlbmQocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHsgLi4udGhpcywgcHJvcHMgfSwgdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCkpO1xuICAgIH1cbn07XG4iXX0=