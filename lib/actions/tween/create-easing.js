'use strict';

exports.__esModule = true;
exports.default = createEasing;

var _Bezier = require('./Bezier');

var _Bezier2 = _interopRequireDefault(_Bezier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
    Mirror easing
    
    Mirrors the provided easing function, used here for mirroring an
    easeIn into an easeInOut
    
    @param [number]: Progress, from 0 - 1, of current shift
    @param [function]: The easing function to mirror
    @returns [number]: The easing-adjusted delta
*/
var mirrorEasing = function (method) {
    return function (progress, strength) {
        return progress <= 0.5 ? method(2 * progress, strength) / 2 : (2 - method(2 * (1 - progress), strength)) / 2;
    };
};

/*
    Reverse easing
    
    Reverses the output of the provided easing function, used for flipping easeIn
    curve to an easeOut.
    
    @param [number]: Progress, from 0 - 1, of current shift
    @param [function]: The easing function to reverse
    @returns [number]: The easing-adjusted delta
*/
var reverseEasing = function (method) {
    return function (progress, strength) {
        return 1 - method(1 - progress, strength);
    };
};

/*
    Easing class

    If provided easing function, returns easing function with 
    in/out/inOut variations

    If provided four arguments, returns new Bezier class instead.
*/
function createEasing(x1, y1, x2, y2) {
    var method = x1;
    var easingFunction = undefined;

    // If this is a bezier curve, return a bezier function
    if (arguments.length > 1) {
        easingFunction = new _Bezier2.default(x1, y1, x2, y2);
    } else {
        easingFunction = function (progress, strength) {
            return method(progress, strength);
        };
        easingFunction.in = function (progress, strength) {
            return method(progress, strength);
        };
        easingFunction.out = reverseEasing(method);
        easingFunction.inOut = mirrorEasing(method);
    }

    return easingFunction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL3R3ZWVuL2NyZWF0ZS1lYXNpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tCQWtDd0IsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdEJwQyxJQUFNLFlBQVksR0FBRyxVQUFBLE1BQU07V0FBSSxVQUFDLFFBQVEsRUFBRSxRQUFRO2VBQUssQUFBQyxRQUFRLElBQUksR0FBRyxHQUFJLE1BQU0sQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUEsQUFBQyxFQUFFLFFBQVEsQ0FBQyxDQUFBLEdBQUksQ0FBQztLQUFBO0NBQUE7Ozs7Ozs7Ozs7OztBQUFDLEFBWS9KLElBQU0sYUFBYSxHQUFHLFVBQUEsTUFBTTtXQUFJLFVBQUMsUUFBUSxFQUFFLFFBQVE7ZUFBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsUUFBUSxDQUFDO0tBQUE7Q0FBQTs7Ozs7Ozs7OztBQUFDLEFBVTVFLFNBQVMsWUFBWSxDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUNsRCxRQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDbEIsUUFBSSxjQUFjLFlBQUE7OztBQUFDLEFBR25CLFFBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDdEIsc0JBQWMsR0FBRyxxQkFBVyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUUvQyxNQUFNO0FBQ0gsc0JBQWMsR0FBRyxVQUFDLFFBQVEsRUFBRSxRQUFRO21CQUFLLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO1NBQUEsQ0FBQztBQUNwRSxzQkFBYyxDQUFDLEVBQUUsR0FBRyxVQUFDLFFBQVEsRUFBRSxRQUFRO21CQUFLLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO1NBQUEsQ0FBQztBQUN2RSxzQkFBYyxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0Msc0JBQWMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9DOztBQUVELFdBQU8sY0FBYyxDQUFDO0NBQ3pCIiwiZmlsZSI6ImNyZWF0ZS1lYXNpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmV6aWVyIGZyb20gJy4vQmV6aWVyJztcblxuLypcbiAgICBNaXJyb3IgZWFzaW5nXG4gICAgXG4gICAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICAgIGVhc2VJbiBpbnRvIGFuIGVhc2VJbk91dFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtaXJyb3JcbiAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbmNvbnN0IG1pcnJvckVhc2luZyA9IG1ldGhvZCA9PiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiAocHJvZ3Jlc3MgPD0gMC41KSA/IG1ldGhvZCgyICogcHJvZ3Jlc3MsIHN0cmVuZ3RoKSAvIDIgOiAoMiAtIG1ldGhvZCgyICogKDEgLSBwcm9ncmVzcyksIHN0cmVuZ3RoKSkgLyAyO1xuICAgICAgICBcbi8qXG4gICAgUmV2ZXJzZSBlYXNpbmdcbiAgICBcbiAgICBSZXZlcnNlcyB0aGUgb3V0cHV0IG9mIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgZm9yIGZsaXBwaW5nIGVhc2VJblxuICAgIGN1cnZlIHRvIGFuIGVhc2VPdXQuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIHJldmVyc2VcbiAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbmNvbnN0IHJldmVyc2VFYXNpbmcgPSBtZXRob2QgPT4gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gMSAtIG1ldGhvZCgxIC0gcHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcblxuLypcbiAgICBFYXNpbmcgY2xhc3NcblxuICAgIElmIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgcmV0dXJucyBlYXNpbmcgZnVuY3Rpb24gd2l0aCBcbiAgICBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuXG4gICAgSWYgcHJvdmlkZWQgZm91ciBhcmd1bWVudHMsIHJldHVybnMgbmV3IEJlemllciBjbGFzcyBpbnN0ZWFkLlxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVhc2luZyAoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICBjb25zdCBtZXRob2QgPSB4MTtcbiAgICBsZXQgZWFzaW5nRnVuY3Rpb247XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgYmV6aWVyIGN1cnZlLCByZXR1cm4gYSBiZXppZXIgZnVuY3Rpb25cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSBuZXcgQmV6aWVyKHgxLCB5MSwgeDIsIHkyKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uLmluID0gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uLm91dCA9IHJldmVyc2VFYXNpbmcobWV0aG9kKTtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24uaW5PdXQgPSBtaXJyb3JFYXNpbmcobWV0aG9kKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWFzaW5nRnVuY3Rpb247XG59XG4iXX0=