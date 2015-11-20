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
mirrorEasing = function mirrorEasing(method) {
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
reverseEasing = function reverseEasing(method) {
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
var Easing = function Easing(x1, y1, x2, y2) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL3R3ZWVuL0Vhc2luZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7Ozs7Ozs7Ozs7OztBQVk1QixZQUFZLEdBQUcsU0FBZixZQUFZLENBQUcsTUFBTTtXQUFJLFVBQUMsUUFBUSxFQUFFLFFBQVE7ZUFBSyxBQUFDLFFBQVEsSUFBSSxHQUFHLEdBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQSxBQUFDLEVBQUUsUUFBUSxDQUFDLENBQUEsR0FBSSxDQUFDO0tBQUE7Q0FBQTs7Ozs7Ozs7Ozs7O0FBWXhKLGFBQWEsR0FBRyxTQUFoQixhQUFhLENBQUcsTUFBTTtXQUFJLFVBQUMsUUFBUSxFQUFFLFFBQVE7ZUFBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsUUFBUSxDQUFDO0tBQUE7Q0FBQTs7Ozs7Ozs7OztBQUFDLEFBVXpGLElBQUksTUFBTSxHQUFHLFNBQVQsTUFBTSxDQUFhLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUNuQyxRQUFJLE1BQU0sR0FBRyxFQUFFO1FBQ1gsY0FBYzs7O0FBQUMsQUFHbkIsUUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUN0QixzQkFBYyxHQUFHLElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBRS9DLE1BQU07QUFDSCxzQkFBYyxHQUFHLFVBQUMsUUFBUSxFQUFFLFFBQVE7bUJBQUssTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7U0FBQSxDQUFDO0FBQ3BFLHNCQUFjLENBQUMsRUFBRSxHQUFHLFVBQUMsUUFBUSxFQUFFLFFBQVE7bUJBQUssTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7U0FBQSxDQUFDO0FBQ3ZFLHNCQUFjLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQyxzQkFBYyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0M7O0FBRUQsV0FBTyxjQUFjLENBQUM7Q0FDekIsQ0FBQzs7QUFFRixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyIsImZpbGUiOiJFYXNpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQmV6aWVyID0gcmVxdWlyZSgnLi9CZXppZXInKSxcblxuICAgIC8qXG4gICAgICAgIE1pcnJvciBlYXNpbmdcbiAgICAgICAgXG4gICAgICAgIE1pcnJvcnMgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBoZXJlIGZvciBtaXJyb3JpbmcgYW5cbiAgICAgICAgZWFzZUluIGludG8gYW4gZWFzZUluT3V0XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1pcnJvclxuICAgICAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuICAgICovXG4gICAgbWlycm9yRWFzaW5nID0gbWV0aG9kID0+IChwcm9ncmVzcywgc3RyZW5ndGgpID0+IChwcm9ncmVzcyA8PSAwLjUpID8gbWV0aG9kKDIgKiBwcm9ncmVzcywgc3RyZW5ndGgpIC8gMiA6ICgyIC0gbWV0aG9kKDIgKiAoMSAtIHByb2dyZXNzKSwgc3RyZW5ndGgpKSAvIDIsXG4gICAgICAgICAgICBcbiAgICAvKlxuICAgICAgICBSZXZlcnNlIGVhc2luZ1xuICAgICAgICBcbiAgICAgICAgUmV2ZXJzZXMgdGhlIG91dHB1dCBvZiB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGZvciBmbGlwcGluZyBlYXNlSW5cbiAgICAgICAgY3VydmUgdG8gYW4gZWFzZU91dC5cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gcmV2ZXJzZVxuICAgICAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuICAgICovXG4gICAgcmV2ZXJzZUVhc2luZyA9IG1ldGhvZCA9PiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiAxIC0gbWV0aG9kKDEgLSBwcm9ncmVzcywgc3RyZW5ndGgpO1xuXG4vKlxuICAgIEVhc2luZyBjbGFzc1xuXG4gICAgSWYgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCByZXR1cm5zIGVhc2luZyBmdW5jdGlvbiB3aXRoIFxuICAgIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5cbiAgICBJZiBwcm92aWRlZCBmb3VyIGFyZ3VtZW50cywgcmV0dXJucyBuZXcgQmV6aWVyIGNsYXNzIGluc3RlYWQuXG4qL1xudmFyIEVhc2luZyA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5Mikge1xuICAgIHZhciBtZXRob2QgPSB4MSxcbiAgICAgICAgZWFzaW5nRnVuY3Rpb247XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgYmV6aWVyIGN1cnZlLCByZXR1cm4gYSBiZXppZXIgZnVuY3Rpb25cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSBuZXcgQmV6aWVyKHgxLCB5MSwgeDIsIHkyKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uLmluID0gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uLm91dCA9IHJldmVyc2VFYXNpbmcobWV0aG9kKTtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24uaW5PdXQgPSBtaXJyb3JFYXNpbmcobWV0aG9kKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWFzaW5nRnVuY3Rpb247XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVhc2luZzsiXX0=