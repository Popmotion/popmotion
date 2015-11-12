'use strict';

var Bezier = require('./Bezier'),

/*
    Mirror easing
    
    Mirrors the provided easing function, used here for mirroring an
    easeIn into an easeInOut
    
    @param [number]: Progress, from 0 - 1, of current shift
    @param [function]: The easing function to mirror
    @returns [number]: The easing-adjusted delta
*/
mirrorEasing = function (method) {
    return function (progress, strength) {
        return progress <= 0.5 ? method(2 * progress, strength) / 2 : (2 - method(2 * (1 - progress), strength)) / 2;
    };
},

/*
    Reverse easing
    
    Reverses the output of the provided easing function, used for flipping easeIn
    curve to an easeOut.
    
    @param [number]: Progress, from 0 - 1, of current shift
    @param [function]: The easing function to reverse
    @returns [number]: The easing-adjusted delta
*/
reverseEasing = function (method) {
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
var Easing = function (x1, y1, x2, y2) {
    var method = x1,
        easingFunction;

    // If this is a bezier curve, return a bezier function
    if (arguments.length > 1) {
        easingFunction = new Bezier(x1, y1, x2, y2);
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
};

module.exports = Easing;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL3R3ZWVuL0Vhc2luZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7Ozs7Ozs7Ozs7OztBQVk1QixZQUFZLEdBQUcsVUFBQSxNQUFNO1dBQUksVUFBQyxRQUFRLEVBQUUsUUFBUTtlQUFLLEFBQUMsUUFBUSxJQUFJLEdBQUcsR0FBSSxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFBLEFBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQSxHQUFJLENBQUM7S0FBQTtDQUFBOzs7Ozs7Ozs7Ozs7QUFZeEosYUFBYSxHQUFHLFVBQUEsTUFBTTtXQUFJLFVBQUMsUUFBUSxFQUFFLFFBQVE7ZUFBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsUUFBUSxDQUFDO0tBQUE7Q0FBQTs7Ozs7Ozs7OztBQUFDLEFBVXpGLElBQUksTUFBTSxHQUFHLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQ25DLFFBQUksTUFBTSxHQUFHLEVBQUU7UUFDWCxjQUFjOzs7QUFBQyxBQUduQixRQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLHNCQUFjLEdBQUcsSUFBSSxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FFL0MsTUFBTTtBQUNILHNCQUFjLEdBQUcsVUFBQyxRQUFRLEVBQUUsUUFBUTttQkFBSyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztTQUFBLENBQUM7QUFDcEUsc0JBQWMsQ0FBQyxFQUFFLEdBQUcsVUFBQyxRQUFRLEVBQUUsUUFBUTttQkFBSyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztTQUFBLENBQUM7QUFDdkUsc0JBQWMsQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLHNCQUFjLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMvQzs7QUFFRCxXQUFPLGNBQWMsQ0FBQztDQUN6QixDQUFDOztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIiwiZmlsZSI6IkVhc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBCZXppZXIgPSByZXF1aXJlKCcuL0JlemllcicpLFxuXG4gICAgLypcbiAgICAgICAgTWlycm9yIGVhc2luZ1xuICAgICAgICBcbiAgICAgICAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICAgICAgICBlYXNlSW4gaW50byBhbiBlYXNlSW5PdXRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gbWlycm9yXG4gICAgICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4gICAgKi9cbiAgICBtaXJyb3JFYXNpbmcgPSBtZXRob2QgPT4gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gKHByb2dyZXNzIDw9IDAuNSkgPyBtZXRob2QoMiAqIHByb2dyZXNzLCBzdHJlbmd0aCkgLyAyIDogKDIgLSBtZXRob2QoMiAqICgxIC0gcHJvZ3Jlc3MpLCBzdHJlbmd0aCkpIC8gMixcbiAgICAgICAgICAgIFxuICAgIC8qXG4gICAgICAgIFJldmVyc2UgZWFzaW5nXG4gICAgICAgIFxuICAgICAgICBSZXZlcnNlcyB0aGUgb3V0cHV0IG9mIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgZm9yIGZsaXBwaW5nIGVhc2VJblxuICAgICAgICBjdXJ2ZSB0byBhbiBlYXNlT3V0LlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byByZXZlcnNlXG4gICAgICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4gICAgKi9cbiAgICByZXZlcnNlRWFzaW5nID0gbWV0aG9kID0+IChwcm9ncmVzcywgc3RyZW5ndGgpID0+IDEgLSBtZXRob2QoMSAtIHByb2dyZXNzLCBzdHJlbmd0aCk7XG5cbi8qXG4gICAgRWFzaW5nIGNsYXNzXG5cbiAgICBJZiBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHJldHVybnMgZWFzaW5nIGZ1bmN0aW9uIHdpdGggXG4gICAgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcblxuICAgIElmIHByb3ZpZGVkIGZvdXIgYXJndW1lbnRzLCByZXR1cm5zIG5ldyBCZXppZXIgY2xhc3MgaW5zdGVhZC5cbiovXG52YXIgRWFzaW5nID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgdmFyIG1ldGhvZCA9IHgxLFxuICAgICAgICBlYXNpbmdGdW5jdGlvbjtcblxuICAgIC8vIElmIHRoaXMgaXMgYSBiZXppZXIgY3VydmUsIHJldHVybiBhIGJlemllciBmdW5jdGlvblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBlYXNpbmdGdW5jdGlvbiA9IG5ldyBCZXppZXIoeDEsIHkxLCB4MiwgeTIpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24uaW4gPSAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24ub3V0ID0gcmV2ZXJzZUVhc2luZyhtZXRob2QpO1xuICAgICAgICBlYXNpbmdGdW5jdGlvbi5pbk91dCA9IG1pcnJvckVhc2luZyhtZXRob2QpO1xuICAgIH1cblxuICAgIHJldHVybiBlYXNpbmdGdW5jdGlvbjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRWFzaW5nOyJdfQ==