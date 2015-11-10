'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

    _createClass(Action, [{
        key: 'set',
        value: function set() {
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
        }
    }, {
        key: 'process',
        value: function process(actor, value) {
            return value.current;
        }

        /*
             Has Action ended?
             
             Returns true to end immedietly
             
             @return [boolean]: true
         */

    }, {
        key: 'hasEnded',
        value: function hasEnded() {
            return true;
        }
    }, {
        key: 'limit',
        value: function limit(output, value) {
            var restricted = calc.restricted(output, value.min, value.max),
                escapeAmp = value.escapeAmp !== undefined ? value.escapeAmp : 0;
            return restricted + (output - restricted) * escapeAmp;
        }
    }, {
        key: 'getControls',
        value: function getControls() {
            return Controls;
        }
    }, {
        key: 'getDefaultProps',
        value: function getDefaultProps() {
            return {};
        }
    }, {
        key: 'getDefaultValue',
        value: function getDefaultValue() {
            return {};
        }
    }, {
        key: 'getDefaultValueProp',
        value: function getDefaultValueProp() {
            return DEFAULT_PROP;
        }
    }, {
        key: 'getSet',
        value: function getSet() {
            var _this2 = this;

            var set = { values: this.values };

            each(this, function (key, prop) {
                if (_this2.hasOwnProperty(key) && PRIVATE.indexOf(key) === -1) {
                    set[key] = prop;
                }
            });

            return set;
        }
    }, {
        key: 'extend',
        value: function extend(props) {
            return new this.constructor(utils.merge(this, props), this.getDefaultValueProp());
        }
    }, {
        key: 'getPlayable',
        value: function getPlayable() {
            return this.extend();
        }
    }, {
        key: 'activate',
        value: function activate() {
            this.isActive = true;
            return this;
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            this.isActive = false;
            return this;
        }
    }]);

    return Action;
})();

module.exports = Action;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQzdCLEtBQUssR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDO0lBQy9CLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSTtJQUNqQixRQUFRLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7O0FBRS9DLElBQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUMvQixJQUFNLE9BQU8sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDOztJQUUzRCxNQUFNO0FBQ1IsYUFERSxNQUFNLENBQ0ksS0FBSyxFQUFFOzhCQURqQixNQUFNOztBQUVKLFlBQUksTUFBTSxHQUFHLElBQUksQ0FBQzs7QUFFbEIsYUFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUUsVUFBVSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3JELGtCQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCLENBQUMsQ0FBQzs7QUFFSCxZQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNqQixZQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0tBQy9DOztpQkFWQyxNQUFNOzs4QkFZb0M7OztnQkFBeEMsS0FBSyx5REFBRyxFQUFFO2dCQUFFLFdBQVcseURBQUcsWUFBWTs7QUFDdEMsZ0JBQUksQ0FBQyxLQUFLLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFLO0FBQ3ZCLG9CQUFJLEdBQUcsS0FBSyxRQUFRLEVBQUU7QUFDbEIsMEJBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2lCQUNwQjthQUNKLENBQUM7OztBQUFDLEFBR0gsZ0JBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTs7QUFDZCx3QkFBSSxhQUFhLEdBQUcsTUFBSyxNQUFNO3dCQUMzQixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7QUFFMUIsd0JBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFLO0FBQ3pCLDRCQUFJLGFBQWEsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDOzRCQUNsQyxRQUFRLEdBQUcsRUFBRSxDQUFDOztBQUVsQiw0QkFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3BCLG9DQUFRLEdBQUcsS0FBSyxDQUFDO3lCQUNwQixNQUFNO0FBQ0gsb0NBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxLQUFLLENBQUM7eUJBQ2pDOztBQUVELHFDQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBYSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQztxQkFDeEYsQ0FBQyxDQUFDOzthQUNOOztBQUVELG1CQUFPLElBQUksQ0FBQztTQUNmOzs7Z0NBRU8sS0FBSyxFQUFFLEtBQUssRUFBRTtBQUNsQixtQkFBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1NBQ3hCOzs7Ozs7Ozs7Ozs7bUNBU1U7QUFDUCxtQkFBTyxJQUFJLENBQUM7U0FDZjs7OzhCQUVLLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFDakIsZ0JBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDMUQsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLEtBQUssU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ3BFLG1CQUFPLFVBQVUsR0FBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUEsR0FBSSxTQUFTLEFBQUMsQ0FBQztTQUMzRDs7O3NDQUVhO0FBQ1YsbUJBQU8sUUFBUSxDQUFDO1NBQ25COzs7MENBRWlCO0FBQ2QsbUJBQU8sRUFBRSxDQUFDO1NBQ2I7OzswQ0FFaUI7QUFDZCxtQkFBTyxFQUFFLENBQUM7U0FDYjs7OzhDQUVxQjtBQUNsQixtQkFBTyxZQUFZLENBQUM7U0FDdkI7OztpQ0FFUTs7O0FBQ0wsZ0JBQUksR0FBRyxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7QUFFbEMsZ0JBQUksQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFLO0FBQ3RCLG9CQUFJLE9BQUssY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDekQsdUJBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7aUJBQ25CO2FBQ0osQ0FBQyxDQUFDOztBQUVILG1CQUFPLEdBQUcsQ0FBQztTQUNkOzs7K0JBRU0sS0FBSyxFQUFFO0FBQ1YsbUJBQU8sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7U0FDckY7OztzQ0FFYTtBQUNWLG1CQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN4Qjs7O21DQUVVO0FBQ1AsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLG1CQUFPLElBQUksQ0FBQztTQUNmOzs7cUNBRVk7QUFDVCxnQkFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdEIsbUJBQU8sSUFBSSxDQUFDO1NBQ2Y7OztXQTFHQyxNQUFNOzs7QUE2R1osTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiQWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgZWFjaCA9IHV0aWxzLmVhY2gsXG4gICAgQ29udHJvbHMgPSByZXF1aXJlKCcuLi9jb250cm9scy9Db250cm9scycpO1xuXG5jb25zdCBERUZBVUxUX1BST1AgPSAnY3VycmVudCc7XG5jb25zdCBQUklWQVRFID0gWydvblN0YXJ0JywgJ29uRnJhbWUnLCAnb25VcGRhdGUnLCAnb25Db21wbGV0ZSddO1xuXG5jbGFzcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHZhciBhY3Rpb24gPSB0aGlzO1xuXG4gICAgICAgIHV0aWxzLmVhY2godGhpcy5nZXREZWZhdWx0UHJvcHMoKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGFjdGlvbltrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmFsdWVzID0ge307XG4gICAgICAgIHRoaXMuc2V0KHByb3BzLCB0aGlzLmdldERlZmF1bHRWYWx1ZVByb3AoKSk7XG4gICAgfVxuXG4gICAgc2V0KHByb3BzID0ge30sIGRlZmF1bHRQcm9wID0gREVGQVVMVF9QUk9QKSB7XG4gICAgICAgIGVhY2gocHJvcHMsIChrZXksIHByb3ApID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgIT09ICd2YWx1ZXMnKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gcHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTWVyZ2UgdmFsdWVzXG4gICAgICAgIGlmIChwcm9wcy52YWx1ZXMpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50VmFsdWVzID0gdGhpcy52YWx1ZXMsXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gcHJvcHMudmFsdWVzO1xuXG4gICAgICAgICAgICBlYWNoKHZhbHVlcywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZXhpc3RpbmdWYWx1ZSA9IGN1cnJlbnRWYWx1ZXNba2V5XSxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7fTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNPYmoodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbZGVmYXVsdFByb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1trZXldID0gZXhpc3RpbmdWYWx1ZSA/IHV0aWxzLm1lcmdlKGV4aXN0aW5nVmFsdWUsIG5ld1ZhbHVlKSA6IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwcm9jZXNzKGFjdG9yLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUuY3VycmVudDtcbiAgICB9XG5cbiAgIC8qXG4gICAgICAgIEhhcyBBY3Rpb24gZW5kZWQ/XG4gICAgICAgIFxuICAgICAgICBSZXR1cm5zIHRydWUgdG8gZW5kIGltbWVkaWV0bHlcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiB0cnVlXG4gICAgKi9cbiAgICBoYXNFbmRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgICAgICBcbiAgICBsaW1pdChvdXRwdXQsIHZhbHVlKSB7XG4gICAgICAgIHZhciByZXN0cmljdGVkID0gY2FsYy5yZXN0cmljdGVkKG91dHB1dCwgdmFsdWUubWluLCB2YWx1ZS5tYXgpLFxuICAgICAgICAgICAgZXNjYXBlQW1wID0gdmFsdWUuZXNjYXBlQW1wICE9PSB1bmRlZmluZWQgPyB2YWx1ZS5lc2NhcGVBbXAgOiAwO1xuICAgICAgICByZXR1cm4gcmVzdHJpY3RlZCArICgob3V0cHV0IC0gcmVzdHJpY3RlZCkgKiBlc2NhcGVBbXApO1xuICAgIH1cblxuICAgIGdldENvbnRyb2xzKCkge1xuICAgICAgICByZXR1cm4gQ29udHJvbHM7XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUFJPUDtcbiAgICB9XG5cbiAgICBnZXRTZXQoKSB7XG4gICAgICAgIHZhciBzZXQgPSB7IHZhbHVlczogdGhpcy52YWx1ZXMgfTtcblxuICAgICAgICBlYWNoKHRoaXMsIChrZXksIHByb3ApID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkgJiYgUFJJVkFURS5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc2V0W2tleV0gPSBwcm9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2V0O1xuICAgIH1cblxuICAgIGV4dGVuZChwcm9wcykge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IodXRpbHMubWVyZ2UodGhpcywgcHJvcHMpLCB0aGlzLmdldERlZmF1bHRWYWx1ZVByb3AoKSk7XG4gICAgfVxuXG4gICAgZ2V0UGxheWFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4dGVuZCgpO1xuICAgIH1cblxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZGVhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQWN0aW9uOyJdfQ==