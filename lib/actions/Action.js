'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Imports
var calc = require('../inc/calc');
var utils = require('../inc/utils');
var Controls = require('../controls/Controls');
var each = utils.each;

// Values
var DEFAULT_PROP = 'current';
var PRIVATE = ['onStart', 'onFrame', 'onUpdate', 'onComplete'];

var Action = (function () {

    /*
        # Action class constructor
        ## Assign default properties of Action or extended class and set user-defined props
         @param [object]
    */

    function Action(props) {
        var _this = this;

        _classCallCheck(this, Action);

        each(this.getDefaultProps(), function (key, value) {
            _this[key] = value;
        });

        this.values = {};
        this.set(props, this.getDefaultValueProp());
    }

    /*
        # Set Action properties
        ## Set user-defined Action properties
         @param [object]
        @param [string]: Name of default value property (set when `value` is **not** provided as object)
        @return [Action]
    */

    Action.prototype.set = function set() {
        var _this2 = this;

        var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var defaultProp = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_PROP : arguments[1];

        // Loop through non-`value` properties and set
        each(props, function (key, value) {
            if (key !== 'values') {
                _this2[key] = value;
            }
        });

        // Merge `value` properties with existing
        if (props.values) {
            (function () {
                var currentValues = _this2.values;

                each(props.values, function (key, value) {
                    var existingValue = currentValues[key];
                    var newValue = {};

                    if (utils.isObj(value)) {
                        newValue = value;
                    } else {
                        newValue[defaultProp] = value;
                    }

                    currentValues[key] = existingValue ? utils.merge(existingValue, newValue) : newValue;
                });
            })();
        }

        return this;
    };

    /*
        # Process latest `current` value
        ## Actions performs existing `current` value
         @param [Actor]
        @param [object]
        @return [number]
    */

    Action.prototype.process = function process(actor, value) {
        return value.current;
    };

    /*
        # Has Action ended?
        ## Returns `true` to end Action (Action only fires once).
        
        @return [boolean]
    */

    Action.prototype.hasEnded = function hasEnded() {
        return true;
    };

    /*
        # Limit value to within set parameters
        ## Return value within min/max, with outlying values multiplied by `escapeAmp`
         @param [number]
        @param [object] { min: number, max: number, escapeAmp: factor }
        @return [number]
    */

    Action.prototype.limit = function limit(output, value) {
        var restricted = calc.restricted(output, value.min, value.max);
        var escapeAmp = value.escapeAmp !== undefined ? value.escapeAmp : 0;

        return restricted + (output - restricted) * escapeAmp;
    };

    /*
        # Get Controls class for this Action
        ## Inherited Actions may return different Controls class
         @return [Controls]
    */

    Action.prototype.getControls = function getControls() {
        return Controls;
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
        return {};
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
        # Get set properties
        ## Get user-set properties for this Action
         @return [object]
    */

    Action.prototype.getSet = function getSet() {
        var _this3 = this;

        var set = { values: this.values };

        each(this, function (key, prop) {
            if (_this3.hasOwnProperty(key) && PRIVATE.indexOf(key) === -1) {
                set[key] = prop;
            }
        });

        return set;
    };

    /*
        # Extend this Action with new properties
        ## Returns new instance of this Action's `prototype` with existing and new properties
         @param [object] (optional)
        @return [Action]
    */

    Action.prototype.extend = function extend(props) {
        return new this.constructor(utils.merge(this, props), this.getDefaultValueProp());
    };

    /*
        # Get a new playable version of this Action
         @return [Action]
    */

    Action.prototype.getPlayable = function getPlayable() {
        return this.extend();
    };

    /*
        # Activate this Action
         @return [Action]
    */

    Action.prototype.activate = function activate() {
        this.isActive = true;
        return this;
    };

    /*
        # Deactivate this Action
         @return [Action]
    */

    Action.prototype.deactivate = function deactivate() {
        this.isActive = false;
        return this;
    };

    return Action;
})();

module.exports = Action;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNwQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdEMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDakQsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUk7OztBQUFDLEFBR3hCLElBQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUMvQixJQUFNLE9BQU8sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDOztJQUUzRCxNQUFNOzs7Ozs7OztBQVFSLGFBUkUsTUFBTSxDQVFJLEtBQUssRUFBRTs7OzhCQVJqQixNQUFNOztBQVNKLFlBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFLO0FBQ3pDLGtCQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNyQixDQUFDLENBQUM7O0FBRUgsWUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDakIsWUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztLQUMvQzs7Ozs7Ozs7O0FBQUE7QUFmQyxVQUFNLFdBeUJSLEdBQUcsa0JBQXlDOzs7WUFBeEMsS0FBSyx5REFBRyxFQUFFO1lBQUUsV0FBVyx5REFBRyxZQUFZOzs7QUFFdEMsWUFBSSxDQUFDLEtBQUssRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUs7QUFDeEIsZ0JBQUksR0FBRyxLQUFLLFFBQVEsRUFBRTtBQUNsQix1QkFBSyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDckI7U0FDSixDQUFDOzs7QUFBQyxBQUdILFlBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTs7QUFDZCxvQkFBSSxhQUFhLEdBQUcsT0FBSyxNQUFNLENBQUM7O0FBRWhDLG9CQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUs7QUFDL0Isd0JBQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6Qyx3QkFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDOztBQUVsQix3QkFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3BCLGdDQUFRLEdBQUcsS0FBSyxDQUFDO3FCQUNwQixNQUFNO0FBQ0gsZ0NBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxLQUFLLENBQUM7cUJBQ2pDOztBQUVELGlDQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsQUFBQyxhQUFhLEdBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDO2lCQUMxRixDQUFDLENBQUM7O1NBQ047O0FBRUQsZUFBTyxJQUFJLENBQUM7S0FDZjs7Ozs7Ozs7OztBQXBEQyxVQUFNLFdBOERSLE9BQU8sb0JBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUNsQixlQUFPLEtBQUssQ0FBQyxPQUFPLENBQUM7S0FDeEI7Ozs7Ozs7OztBQWhFQyxVQUFNLFdBd0VSLFFBQVEsdUJBQUc7QUFDUCxlQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7Ozs7O0FBMUVDLFVBQU0sV0FvRlIsS0FBSyxrQkFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQ2pCLFlBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pFLFlBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLEtBQUssU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDOztBQUV0RSxlQUFPLFVBQVUsR0FBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUEsR0FBSSxTQUFTLEFBQUMsQ0FBQztLQUMzRDs7Ozs7Ozs7QUF6RkMsVUFBTSxXQWlHUixXQUFXLDBCQUFHO0FBQ1YsZUFBTyxRQUFRLENBQUM7S0FDbkI7Ozs7Ozs7QUFuR0MsVUFBTSxXQTBHUixlQUFlLDhCQUFHO0FBQ2QsZUFBTyxFQUFFLENBQUM7S0FDYjs7Ozs7OztBQTVHQyxVQUFNLFdBbUhSLGVBQWUsOEJBQUc7QUFDZCxlQUFPLEVBQUUsQ0FBQztLQUNiOzs7Ozs7OztBQXJIQyxVQUFNLFdBNkhSLG1CQUFtQixrQ0FBRztBQUNsQixlQUFPLFlBQVksQ0FBQztLQUN2Qjs7Ozs7Ozs7QUEvSEMsVUFBTSxXQXVJUixNQUFNLHFCQUFHOzs7QUFDTCxZQUFJLEdBQUcsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7O0FBRWxDLFlBQUksQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFLO0FBQ3RCLGdCQUFJLE9BQUssY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDekQsbUJBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7YUFDbkI7U0FDSixDQUFDLENBQUM7O0FBRUgsZUFBTyxHQUFHLENBQUM7S0FDZDs7Ozs7Ozs7O0FBakpDLFVBQU0sV0EwSlIsTUFBTSxtQkFBQyxLQUFLLEVBQUU7QUFDVixlQUFPLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0tBQ3JGOzs7Ozs7O0FBNUpDLFVBQU0sV0FtS1IsV0FBVywwQkFBRztBQUNWLGVBQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCOzs7Ozs7O0FBcktDLFVBQU0sV0E0S1IsUUFBUSx1QkFBRztBQUNQLFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7Ozs7QUEvS0MsVUFBTSxXQXNMUixVQUFVLHlCQUFHO0FBQ1QsWUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdEIsZUFBTyxJQUFJLENBQUM7S0FDZjs7V0F6TEMsTUFBTTs7O0FBNExaLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6IkFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmNvbnN0IGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcbmNvbnN0IENvbnRyb2xzID0gcmVxdWlyZSgnLi4vY29udHJvbHMvQ29udHJvbHMnKTtcbmNvbnN0IGVhY2ggPSB1dGlscy5lYWNoO1xuXG4vLyBWYWx1ZXNcbmNvbnN0IERFRkFVTFRfUFJPUCA9ICdjdXJyZW50JztcbmNvbnN0IFBSSVZBVEUgPSBbJ29uU3RhcnQnLCAnb25GcmFtZScsICdvblVwZGF0ZScsICdvbkNvbXBsZXRlJ107XG5cbmNsYXNzIEFjdGlvbiB7XG5cbiAgICAvKlxuICAgICAgICAjIEFjdGlvbiBjbGFzcyBjb25zdHJ1Y3RvclxuICAgICAgICAjIyBBc3NpZ24gZGVmYXVsdCBwcm9wZXJ0aWVzIG9mIEFjdGlvbiBvciBleHRlbmRlZCBjbGFzcyBhbmQgc2V0IHVzZXItZGVmaW5lZCBwcm9wc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgZWFjaCh0aGlzLmdldERlZmF1bHRQcm9wcygpLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmFsdWVzID0ge307XG4gICAgICAgIHRoaXMuc2V0KHByb3BzLCB0aGlzLmdldERlZmF1bHRWYWx1ZVByb3AoKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgZGVmYXVsdCB2YWx1ZSBwcm9wZXJ0eSAoc2V0IHdoZW4gYHZhbHVlYCBpcyAqKm5vdCoqIHByb3ZpZGVkIGFzIG9iamVjdClcbiAgICAgICAgQHJldHVybiBbQWN0aW9uXVxuICAgICovXG4gICAgc2V0KHByb3BzID0ge30sIGRlZmF1bHRQcm9wID0gREVGQVVMVF9QUk9QKSB7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBub24tYHZhbHVlYCBwcm9wZXJ0aWVzIGFuZCBzZXRcbiAgICAgICAgZWFjaChwcm9wcywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgIT09ICd2YWx1ZXMnKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1lcmdlIGB2YWx1ZWAgcHJvcGVydGllcyB3aXRoIGV4aXN0aW5nXG4gICAgICAgIGlmIChwcm9wcy52YWx1ZXMpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50VmFsdWVzID0gdGhpcy52YWx1ZXM7XG5cbiAgICAgICAgICAgIGVhY2gocHJvcHMudmFsdWVzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVmFsdWUgPSBjdXJyZW50VmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0ge307XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IChleGlzdGluZ1ZhbHVlKSA/IHV0aWxzLm1lcmdlKGV4aXN0aW5nVmFsdWUsIG5ld1ZhbHVlKSA6IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIFByb2Nlc3MgbGF0ZXN0IGBjdXJyZW50YCB2YWx1ZVxuICAgICAgICAjIyBBY3Rpb25zIHBlcmZvcm1zIGV4aXN0aW5nIGBjdXJyZW50YCB2YWx1ZVxuXG4gICAgICAgIEBwYXJhbSBbQWN0b3JdXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdXG4gICAgKi9cbiAgICBwcm9jZXNzKGFjdG9yLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUuY3VycmVudDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEhhcyBBY3Rpb24gZW5kZWQ/XG4gICAgICAgICMjIFJldHVybnMgYHRydWVgIHRvIGVuZCBBY3Rpb24gKEFjdGlvbiBvbmx5IGZpcmVzIG9uY2UpLlxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl1cbiAgICAqL1xuICAgIGhhc0VuZGVkKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIExpbWl0IHZhbHVlIHRvIHdpdGhpbiBzZXQgcGFyYW1ldGVyc1xuICAgICAgICAjIyBSZXR1cm4gdmFsdWUgd2l0aGluIG1pbi9tYXgsIHdpdGggb3V0bHlpbmcgdmFsdWVzIG11bHRpcGxpZWQgYnkgYGVzY2FwZUFtcGBcblxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdIHsgbWluOiBudW1iZXIsIG1heDogbnVtYmVyLCBlc2NhcGVBbXA6IGZhY3RvciB9XG4gICAgICAgIEByZXR1cm4gW251bWJlcl1cbiAgICAqL1xuICAgIGxpbWl0KG91dHB1dCwgdmFsdWUpIHtcbiAgICAgICAgY29uc3QgcmVzdHJpY3RlZCA9IGNhbGMucmVzdHJpY3RlZChvdXRwdXQsIHZhbHVlLm1pbiwgdmFsdWUubWF4KTtcbiAgICAgICAgY29uc3QgZXNjYXBlQW1wID0gdmFsdWUuZXNjYXBlQW1wICE9PSB1bmRlZmluZWQgPyB2YWx1ZS5lc2NhcGVBbXAgOiAwO1xuXG4gICAgICAgIHJldHVybiByZXN0cmljdGVkICsgKChvdXRwdXQgLSByZXN0cmljdGVkKSAqIGVzY2FwZUFtcCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgQ29udHJvbHMgY2xhc3MgZm9yIHRoaXMgQWN0aW9uXG4gICAgICAgICMjIEluaGVyaXRlZCBBY3Rpb25zIG1heSByZXR1cm4gZGlmZmVyZW50IENvbnRyb2xzIGNsYXNzXG5cbiAgICAgICAgQHJldHVybiBbQ29udHJvbHNdXG4gICAgKi9cbiAgICBnZXRDb250cm9scygpIHtcbiAgICAgICAgcmV0dXJuIENvbnRyb2xzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHByb3BlcnRpZXNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdGhpcyBgdmFsdWVgIHByb3BlcnR5IHdoZW4gc2V0IGFzIHZhbHVlIGluc3RlYWQgb2Ygb2JqZWN0XG5cbiAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUFJPUDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBzZXQgcHJvcGVydGllc1xuICAgICAgICAjIyBHZXQgdXNlci1zZXQgcHJvcGVydGllcyBmb3IgdGhpcyBBY3Rpb25cblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXRTZXQoKSB7XG4gICAgICAgIGxldCBzZXQgPSB7IHZhbHVlczogdGhpcy52YWx1ZXMgfTtcblxuICAgICAgICBlYWNoKHRoaXMsIChrZXksIHByb3ApID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkgJiYgUFJJVkFURS5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc2V0W2tleV0gPSBwcm9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2V0O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgRXh0ZW5kIHRoaXMgQWN0aW9uIHdpdGggbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBBY3Rpb24ncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuICAgIGV4dGVuZChwcm9wcykge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodXRpbHMubWVyZ2UodGhpcywgcHJvcHMpLCB0aGlzLmdldERlZmF1bHRWYWx1ZVByb3AoKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgYSBuZXcgcGxheWFibGUgdmVyc2lvbiBvZiB0aGlzIEFjdGlvblxuXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuICAgIGdldFBsYXlhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leHRlbmQoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEFjdGl2YXRlIHRoaXMgQWN0aW9uXG5cbiAgICAgICAgQHJldHVybiBbQWN0aW9uXVxuICAgICovXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIERlYWN0aXZhdGUgdGhpcyBBY3Rpb25cblxuICAgICAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBY3Rpb247Il19