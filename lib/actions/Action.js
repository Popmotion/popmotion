'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var calc = require('../inc/calc'),
    utils = require('../inc/utils'),
    each = utils.each,
    Controls = require('../controls/Controls');

var DEFAULT_PROP = 'current';
var PRIVATE = ['onStart', 'onFrame', 'onUpdate', 'onComplete'];

var Action = (function () {
    function Action(props) {
        _classCallCheck(this, Action);

        var action = this;

        utils.each(this.getDefaultProps(), function (key, value) {
            action[key] = value;
        });

        this.values = {};
        this.set(props, this.getDefaultValueProp());
    }

    Action.prototype.set = function set() {
        var _this = this;

        var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var defaultProp = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_PROP : arguments[1];

        each(props, function (key, prop) {
            if (key !== 'values') {
                _this[key] = prop;
            }
        });

        // Merge values
        if (props.values) {
            (function () {
                var currentValues = _this.values,
                    values = props.values;

                each(values, function (key, value) {
                    var existingValue = currentValues[key],
                        newValue = {};

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

    Action.prototype.process = function process(actor, value) {
        return value.current;
    };

    /*
         Has Action ended?
         
         Returns true to end immedietly
         
         @return [boolean]: true
     */

    Action.prototype.hasEnded = function hasEnded() {
        return true;
    };

    Action.prototype.limit = function limit(output, value) {
        var restricted = calc.restricted(output, value.min, value.max),
            escapeAmp = value.escapeAmp !== undefined ? value.escapeAmp : 0;
        return restricted + (output - restricted) * escapeAmp;
    };

    Action.prototype.getControls = function getControls() {
        return Controls;
    };

    Action.prototype.getDefaultProps = function getDefaultProps() {
        return {};
    };

    Action.prototype.getDefaultValue = function getDefaultValue() {
        return {};
    };

    Action.prototype.getDefaultValueProp = function getDefaultValueProp() {
        return DEFAULT_PROP;
    };

    Action.prototype.getSet = function getSet() {
        var _this2 = this;

        var set = { values: this.values };

        each(this, function (key, prop) {
            if (_this2.hasOwnProperty(key) && PRIVATE.indexOf(key) === -1) {
                set[key] = prop;
            }
        });

        return set;
    };

    Action.prototype.extend = function extend(props) {
        return new this.constructor(utils.merge(this, props), this.getDefaultValueProp());
    };

    Action.prototype.getPlayable = function getPlayable() {
        return this.extend();
    };

    Action.prototype.activate = function activate() {
        this.isActive = true;
        return this;
    };

    Action.prototype.deactivate = function deactivate() {
        this.isActive = false;
        return this;
    };

    return Action;
})();

module.exports = Action;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUM3QixLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQztJQUMvQixJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUk7SUFDakIsUUFBUSxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOztBQUUvQyxJQUFNLFlBQVksR0FBRyxTQUFTLENBQUM7QUFDL0IsSUFBTSxPQUFPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQzs7SUFFM0QsTUFBTTtBQUNSLGFBREUsTUFBTSxDQUNJLEtBQUssRUFBRTs4QkFEakIsTUFBTTs7QUFFSixZQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7O0FBRWxCLGFBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNyRCxrQkFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUN2QixDQUFDLENBQUM7O0FBRUgsWUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDakIsWUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztLQUMvQzs7QUFWQyxVQUFNLFdBWVIsR0FBRyxrQkFBeUM7OztZQUF4QyxLQUFLLHlEQUFHLEVBQUU7WUFBRSxXQUFXLHlEQUFHLFlBQVk7O0FBQ3RDLFlBQUksQ0FBQyxLQUFLLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFLO0FBQ3ZCLGdCQUFJLEdBQUcsS0FBSyxRQUFRLEVBQUU7QUFDbEIsc0JBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0osQ0FBQzs7O0FBQUMsQUFHSCxZQUFJLEtBQUssQ0FB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VUFBVSx5QkFBRztBQUNULFlBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O1dBMUdDLE1BQU07OztBQTZHWixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyIsImZpbGUiOiJBY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaCxcbiAgICBDb250cm9scyA9IHJlcXVpcmUoJy4uL2NvbnRyb2xzL0NvbnRyb2xzJyk7XG5cbmNvbnN0IERFRkFVTFRfUFJPUCA9ICdjdXJyZW50JztcbmNvbnN0IFBSSVZBVEUgPSBbJ29uU3RhcnQnLCAnb25GcmFtZScsICdvblVwZGF0ZScsICdvbkNvbXBsZXRlJ107XG5cbmNsYXNzIEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXM7XG5cbiAgICAgICAgdXRpbHMuZWFjaCh0aGlzLmdldERlZmF1bHRQcm9wcygpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgYWN0aW9uW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMsIHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpKTtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMgPSB7fSwgZGVmYXVsdFByb3AgPSBERUZBVUxUX1BST1ApIHtcbiAgICAgICAgZWFjaChwcm9wcywgKGtleSwgcHJvcCkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3ZhbHVlcycpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBwcm9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNZXJnZSB2YWx1ZXNcbiAgICAgICAgaWYgKHByb3BzLnZhbHVlcykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZXMgPSB0aGlzLnZhbHVlcyxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBwcm9wcy52YWx1ZXM7XG5cbiAgICAgICAgICAgIGVhY2godmFsdWVzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBleGlzdGluZ1ZhbHVlID0gY3VycmVudFZhbHVlc1trZXldLFxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHt9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc09iaih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtkZWZhdWx0UHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWVzW2tleV0gPSBleGlzdGluZ1ZhbHVlID8gdXRpbHMubWVyZ2UoZXhpc3RpbmdWYWx1ZSwgbmV3VmFsdWUpIDogbmV3VmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByb2Nlc3MoYWN0b3IsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jdXJyZW50O1xuICAgIH1cblxuICAgLypcbiAgICAgICAgSGFzIEFjdGlvbiBlbmRlZD9cbiAgICAgICAgXG4gICAgICAgIFJldHVybnMgdHJ1ZSB0byBlbmQgaW1tZWRpZXRseVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IHRydWVcbiAgICAqL1xuICAgIGhhc0VuZGVkKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgICAgIFxuICAgIGxpbWl0KG91dHB1dCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3RyaWN0ZWQgPSBjYWxjLnJlc3RyaWN0ZWQob3V0cHV0LCB2YWx1ZS5taW4sIHZhbHVlLm1heCksXG4gICAgICAgICAgICBlc2NhcGVBbXAgPSB2YWx1ZS5lc2NhcGVBbXAgIT09IHVuZGVmaW5lZCA/IHZhbHVlLmVzY2FwZUFtcCA6IDA7XG4gICAgICAgIHJldHVybiByZXN0cmljdGVkICsgKChvdXRwdXQgLSByZXN0cmljdGVkKSAqIGVzY2FwZUFtcCk7XG4gICAgfVxuXG4gICAgZ2V0Q29udHJvbHMoKSB7XG4gICAgICAgIHJldHVybiBDb250cm9scztcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gREVGQVVMVF9QUk9QO1xuICAgIH1cblxuICAgIGdldFNldCgpIHtcbiAgICAgICAgdmFyIHNldCA9IHsgdmFsdWVzOiB0aGlzLnZhbHVlcyB9O1xuXG4gICAgICAgIGVhY2godGhpcywgKGtleSwgcHJvcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBQUklWQVRFLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBzZXRba2V5XSA9IHByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZXQ7XG4gICAgfVxuXG4gICAgZXh0ZW5kKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih1dGlscy5tZXJnZSh0aGlzLCBwcm9wcyksIHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpKTtcbiAgICB9XG5cbiAgICBnZXRQbGF5YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5kKCk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBY3Rpb247Il19