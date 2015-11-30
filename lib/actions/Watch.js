'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Action = require('./Action'),
    calc = require('../inc/calc'),
    isString = require('../inc/utils').isString,

/*
    Translate our mapLink value into mapTo
    
    @param [number]: Calculated value from linked value
    @param [Value || object]: Linked value or empty object if we're linking to input
    @param [array]: List of numbers relating to linked value
    @param [array]: List of numbers relating to this value
*/
findMappedValue = function (newValue, linkedValue, toValue, mapLink, mapTo) {
    var mapLength = mapLink.length,
        i = 1,
        lastLinkValue,
        thisLinkValue,
        lastToValue,
        thisToValue;

    for (; i < mapLength; i++) {
        // Assign values from array, or if they're strings, look for them in linkedValue
        lastLinkValue = isString(mapLink[i - 1]) ? linkedValue[mapLink[i - 1]] : mapLink[i - 1];
        thisLinkValue = isString(mapLink[i]) ? linkedValue[mapLink[i]] : mapLink[i];
        lastToValue = isString(mapTo[i - 1]) ? toValue[mapTo[i - 1]] : mapTo[i - 1];
        thisToValue = isString(mapTo[i]) ? toValue[mapTo[i]] : mapTo[i];

        // Check if we've gone past our calculated value, or if we're at the end of the array
        if (newValue < thisLinkValue || i === mapLength - 1) {
            newValue = calc.value(calc.restricted(calc.progress(newValue, lastLinkValue, thisLinkValue), 0, 1), lastToValue, thisToValue);
            break;
        }
    }

    return newValue;
};

var Watch = (function (_Action) {
    _inherits(Watch, _Action);

    function Watch() {
        _classCallCheck(this, Watch);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, _Action.call.apply(_Action, [this].concat(args)));

        _this.isActive = true;
        return _this;
    }

    /*
        Process this value
        
        First check if this value exists as a Value, if not
        check within Input (if we have one)
            
        @param [Actor]
        @param [Value]: Current value
        @param [string]: Key of current value
        @return [number]: Calculated value
    */

    Watch.prototype.process = function process(actor, value, key) {
        var watchedKey = value.watch;
        var watchedValue = 0;
        var values = actor.values;
        var newValue = value.current;
        var inputOffset = value.action ? value.action.inputOffset : false;

        if (isString(watchedKey)) {
            watchedValue = values[watchedKey] ? values[watchedKey] : {};

            // First look at Action and check value isn't linking itself
            if (watchedValue.current !== undefined && key !== watchedKey) {
                newValue = watchedValue.current;

                // Then check values in Input
            } else if (inputOffset && inputOffset.hasOwnProperty(watchedKey)) {
                    newValue = value.action.process(actor, value, watchedKey);
                }
        } else {
            newValue = watchedKey(actor);
        }

        // If we have mapFrom and mapTo properties, translate the new value
        if (value.mapFrom && value.mapTo) {
            newValue = findMappedValue(newValue, watchedValue, value, value.mapFrom, value.mapTo);
        }

        return newValue;
    };

    return Watch;
})(Action);

module.exports = Watch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1dhdGNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUM1QixJQUFJLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUM3QixRQUFRLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVE7Ozs7Ozs7Ozs7QUFVM0MsZUFBZSxHQUFHLFVBQVUsUUFBUSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUN4RSxRQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTTtRQUMxQixDQUFDLEdBQUcsQ0FBQztRQUNMLGFBQWE7UUFDYixhQUFhO1FBQ2IsV0FBVztRQUNYLFdBQVcsQ0FBQzs7QUFFaEIsV0FBTyxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFOztBQUV2QixxQkFBYSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hGLHFCQUFhLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUUsbUJBQVcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1RSxtQkFBVyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7O0FBQUMsQUFHaEUsWUFBSSxRQUFRLEdBQUcsYUFBYSxJQUFJLENBQUMsS0FBSyxTQUFTLEdBQUcsQ0FBQyxFQUFFO0FBQ2pELG9CQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQzlILGtCQUFNO1NBQ1Q7S0FDSjs7QUFFRCxXQUFPLFFBQVEsQ0FBQztDQUNuQixDQUFDOztJQUVBLEtBQUs7Y0FBTCxLQUFLOztBQUNQLGFBREUsS0FBSyxHQUNjOzhCQURuQixLQUFLOzswQ0FDUSxJQUFJO0FBQUosZ0JBQUk7OztxREFDZiwwQ0FBUyxJQUFJLEVBQUM7O0FBQ2QsY0FBSyxRQUFRLEdBQUcsSUFBSSxDQUFDOztLQUN4Qjs7Ozs7Ozs7Ozs7OztBQUFBO0FBSkMsU0FBSyxXQWlCUCxPQUFPLG9CQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO0FBQ3ZCLFlBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDL0IsWUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLFlBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDMUIsWUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUM3QixZQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQzs7QUFFbEUsWUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDdEIsd0JBQVksR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7OztBQUFDLEFBRzVELGdCQUFJLFlBQVksQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxVQUFVLEVBQUU7QUFDMUQsd0JBQVEsR0FBRyxZQUFZLENBQUMsT0FBTzs7O0FBQUMsYUFHbkMsTUFBTSxJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQzlELDRCQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztpQkFDN0Q7U0FFSixNQUFNO0FBQ0gsb0JBQVEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7OztBQUFBLEFBR0QsWUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7QUFDOUIsb0JBQVEsR0FBRyxlQUFlLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekY7O0FBRUQsZUFBTyxRQUFRLENBQUM7S0FDbkI7O1dBOUNDLEtBQUs7R0FBUyxNQUFNOztBQWlEMUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMiLCJmaWxlIjoiV2F0Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgQWN0aW9uID0gcmVxdWlyZSgnLi9BY3Rpb24nKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICBpc1N0cmluZyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLmlzU3RyaW5nLFxuXG4gICAgLypcbiAgICAgICAgVHJhbnNsYXRlIG91ciBtYXBMaW5rIHZhbHVlIGludG8gbWFwVG9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZSBmcm9tIGxpbmtlZCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW1ZhbHVlIHx8IG9iamVjdF06IExpbmtlZCB2YWx1ZSBvciBlbXB0eSBvYmplY3QgaWYgd2UncmUgbGlua2luZyB0byBpbnB1dFxuICAgICAgICBAcGFyYW0gW2FycmF5XTogTGlzdCBvZiBudW1iZXJzIHJlbGF0aW5nIHRvIGxpbmtlZCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW2FycmF5XTogTGlzdCBvZiBudW1iZXJzIHJlbGF0aW5nIHRvIHRoaXMgdmFsdWVcbiAgICAqL1xuICAgIGZpbmRNYXBwZWRWYWx1ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgbGlua2VkVmFsdWUsIHRvVmFsdWUsIG1hcExpbmssIG1hcFRvKSB7XG4gICAgICAgIHZhciBtYXBMZW5ndGggPSBtYXBMaW5rLmxlbmd0aCxcbiAgICAgICAgICAgIGkgPSAxLFxuICAgICAgICAgICAgbGFzdExpbmtWYWx1ZSxcbiAgICAgICAgICAgIHRoaXNMaW5rVmFsdWUsXG4gICAgICAgICAgICBsYXN0VG9WYWx1ZSxcbiAgICAgICAgICAgIHRoaXNUb1ZhbHVlO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbWFwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIEFzc2lnbiB2YWx1ZXMgZnJvbSBhcnJheSwgb3IgaWYgdGhleSdyZSBzdHJpbmdzLCBsb29rIGZvciB0aGVtIGluIGxpbmtlZFZhbHVlXG4gICAgICAgICAgICBsYXN0TGlua1ZhbHVlID0gaXNTdHJpbmcobWFwTGlua1tpIC0gMV0pID8gbGlua2VkVmFsdWVbbWFwTGlua1tpIC0gMV1dIDogbWFwTGlua1tpIC0gMV07XG4gICAgICAgICAgICB0aGlzTGlua1ZhbHVlID0gaXNTdHJpbmcobWFwTGlua1tpXSkgPyBsaW5rZWRWYWx1ZVttYXBMaW5rW2ldXSA6IG1hcExpbmtbaV07XG4gICAgICAgICAgICBsYXN0VG9WYWx1ZSA9IGlzU3RyaW5nKG1hcFRvW2kgLSAxXSkgPyB0b1ZhbHVlW21hcFRvW2kgLSAxXV0gOiBtYXBUb1tpIC0gMV07XG4gICAgICAgICAgICB0aGlzVG9WYWx1ZSA9IGlzU3RyaW5nKG1hcFRvW2ldKSA/IHRvVmFsdWVbbWFwVG9baV1dIDogbWFwVG9baV07XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlJ3ZlIGdvbmUgcGFzdCBvdXIgY2FsY3VsYXRlZCB2YWx1ZSwgb3IgaWYgd2UncmUgYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXlcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA8IHRoaXNMaW5rVmFsdWUgfHwgaSA9PT0gbWFwTGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gY2FsYy52YWx1ZShjYWxjLnJlc3RyaWN0ZWQoY2FsYy5wcm9ncmVzcyhuZXdWYWx1ZSwgbGFzdExpbmtWYWx1ZSwgdGhpc0xpbmtWYWx1ZSksIDAsIDEpLCBsYXN0VG9WYWx1ZSwgdGhpc1RvVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfTtcblxuY2xhc3MgV2F0Y2ggZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFByb2Nlc3MgdGhpcyB2YWx1ZVxuICAgICAgICBcbiAgICAgICAgRmlyc3QgY2hlY2sgaWYgdGhpcyB2YWx1ZSBleGlzdHMgYXMgYSBWYWx1ZSwgaWYgbm90XG4gICAgICAgIGNoZWNrIHdpdGhpbiBJbnB1dCAoaWYgd2UgaGF2ZSBvbmUpXG4gICAgICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgY3VycmVudCB2YWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzKGFjdG9yLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgIGNvbnN0IHdhdGNoZWRLZXkgPSB2YWx1ZS53YXRjaDtcbiAgICAgICAgbGV0IHdhdGNoZWRWYWx1ZSA9IDA7XG4gICAgICAgIGxldCB2YWx1ZXMgPSBhY3Rvci52YWx1ZXM7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIGxldCBpbnB1dE9mZnNldCA9IHZhbHVlLmFjdGlvbiA/IHZhbHVlLmFjdGlvbi5pbnB1dE9mZnNldCA6IGZhbHNlO1xuXG4gICAgICAgIGlmIChpc1N0cmluZyh3YXRjaGVkS2V5KSkge1xuICAgICAgICAgICAgd2F0Y2hlZFZhbHVlID0gdmFsdWVzW3dhdGNoZWRLZXldID8gdmFsdWVzW3dhdGNoZWRLZXldIDoge307XG5cbiAgICAgICAgICAgIC8vIEZpcnN0IGxvb2sgYXQgQWN0aW9uIGFuZCBjaGVjayB2YWx1ZSBpc24ndCBsaW5raW5nIGl0c2VsZlxuICAgICAgICAgICAgaWYgKHdhdGNoZWRWYWx1ZS5jdXJyZW50ICE9PSB1bmRlZmluZWQgJiYga2V5ICE9PSB3YXRjaGVkS2V5KSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB3YXRjaGVkVmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gVGhlbiBjaGVjayB2YWx1ZXMgaW4gSW5wdXRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXRPZmZzZXQgJiYgaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkod2F0Y2hlZEtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlLmFjdGlvbi5wcm9jZXNzKGFjdG9yLCB2YWx1ZSwgd2F0Y2hlZEtleSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gd2F0Y2hlZEtleShhY3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIG1hcEZyb20gYW5kIG1hcFRvIHByb3BlcnRpZXMsIHRyYW5zbGF0ZSB0aGUgbmV3IHZhbHVlXG4gICAgICAgIGlmICh2YWx1ZS5tYXBGcm9tICYmIHZhbHVlLm1hcFRvKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGZpbmRNYXBwZWRWYWx1ZShuZXdWYWx1ZSwgd2F0Y2hlZFZhbHVlLCB2YWx1ZSwgdmFsdWUubWFwRnJvbSwgdmFsdWUubWFwVG8pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXYXRjaDsiXX0=