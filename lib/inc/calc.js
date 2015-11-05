'use strict';

var utils = require('./utils.js'),
    zeroPoint = {
    x: 0,
    y: 0
},
    calc = {

    /*
        Angle between points
        
        Translates the hypothetical line so that the 'from' coordinates
        are at 0,0, then return the angle using .angleFromCenter()
        
        @param [object]: X and Y coordinates of from point
        @param [object]: X and Y cordinates of to point
        @return [radian]: Angle between the two points in radians
    */
    angle: function (a) {
        var b = arguments.length <= 1 || arguments[1] === undefined ? zeroPoint : arguments[1];
        return calc.angleFromCenter({
            x: a.x - b.x,
            y: a.y - b.y
        });
    },

    /*
        Angle from center
        
        Returns the current angle, in radians, of a defined point
        from a center (assumed 0,0)
        
        @param [number]: X coordinate of second point
        @param [number]: Y coordinate of second point
        @return [radian]: Angle between 0, 0 and point in radians
    */
    angleFromCenter: function (x, y) {
        return calc.radiansToDegrees(Math.atan2(y, x));
    },

    /*
        Convert degrees to radians
        
        @param [number]: Value in degrees
        @return [number]: Value in radians
    */
    degreesToRadians: function (degrees) {
        return degrees * Math.PI / 180;
    },

    /*
        Dilate
        
        Change the progression between a and b according to dilation.
        
        So dilation = 0.5 would change
        
        a --------- b
        
        to
        
        a ---- b
        
        @param [number]: Previous value
        @param [number]: Current value
        @param [number]: Dilate progress by x
        @return [number]: Previous value plus the dilated difference
    */
    dilate: function (a, b, dilation) {
        return a + (b - a) * dilation;
    },

    /*
        Distance
        
        Returns the distance between (0,0) and pointA, unless pointB
        is provided, then we return the difference between the two.
        
        @param [object/number]: x and y or just x of point A
        @param [object/number]: (optional): x and y or just x of point B
        @return [number]: The distance between the two points
    */
    distance: function (a, b) {
        return utils.isNum(a) ? calc.distance1D(a, b) : calc.distance2D(a, b);
    },

    /*
        Distance 1D
        
        Returns the distance between point A and point B
        
        @param [number]: Point A
        @param [number]: (optional): Point B
        @return [number]: The distance between the two points
    */
    distance1D: function (a) {
        var b = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
        return Math.abs(a - b);
    },

    /*
        Distance 2D
        
        Returns the distance between (0,0) and point A, unless point B
        is provided, then we return the difference between the two.
        
        @param [object]: x and y of point A
        @param [object]: (optional): x and y of point B
        @return [number]: The distance between the two points
    */
    distance2D: function (a) {
        var b = arguments.length <= 1 || arguments[1] === undefined ? zeroPoint : arguments[1];
        return calc.hypotenuse({
            x: Math.abs(a.x - b.x),
            y: Math.abs(a.y - b.y)
        });
    },

    /*
        Hypotenuse
        
        Returns the hypotenuse, side C, given the lengths of sides A and B.
        
        @param [number]: Length of A
        @param [number]: Length of B
        @return [number]: Length of C
    */
    hypotenuse: function (a, b) {
        return Math.sqrt(a * a + b * b);
    },

    /*
        Offset between two inputs
        
        Calculate the difference between two different inputs
        
        @param [Point]: First input
        @param [Point]: Second input
        @return [Offset]: Distance metrics between two points
    */
    offset: function (a, b) {
        var offset = {};

        utils.each(b, function (key, value) {
            offset[key] = a.hasOwnProperty(key) ? value - a[key] : 0;
        });

        if (utils.isNum(offset.x) && utils.isNum(offset.y)) {
            offset.angle = calc.angle(a, b);
            offset.distance = calc.distance2D(a, b);
        }

        return offset;
    },

    /*
        Point from angle and distance
        
        @param [object]: 2D point of origin
        @param [number]: Angle from origin
        @param [number]: Distance from origin
        @return [object]: Calculated 2D point
    */
    pointFromAngleAndDistance: function (origin, angle, distance) {
        angle = calc.degreesToRadians(angle);

        return {
            x: distance * Math.cos(angle) + origin.x,
            y: distance * Math.sin(angle) + origin.y
        };
    },

    /*
        Progress within given range
        
        Given a lower limit and an upper limit, we return the progress
        (expressed as a number 0-1) represented by the given value, and
        limit that progress to within 0-1.
        
        @param [number]: Value to find progress within given range
        @param [number]: Lower limit 
        @param [number]: Upper limit
        @return [number]: Progress of value within range as expressed 0-1
    */
    progress: function (value, from, to) {
        return (value - from) / (to - from);
    },

    /*
        Convert radians to degrees
        
        @param [number]: Value in radians
        @return [number]: Value in degrees
    */
    radiansToDegrees: function (radians) {
        return radians * 180 / Math.PI;
    },

    /*
        Return random number between range
        
        @param [number] (optional): Output minimum
        @param [number] (optional): Output maximum
        @return [number]: Random number within range, or 0 and 1 if none provided
    */
    random: function () {
        var min = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
        var max = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
        return Math.random() * (max - min) + min;
    },

    /*
        Calculate relative value
        
        Takes the operator and value from a string, ie "+=5", and applies
        to the current value to resolve a new target.
        
        @param [number]: Current value
        @param [string]: Relative value
        @return [number]: New value
    */
    relativeValue: function (current, rel) {
        var newValue = current;
        var equation = rel.split('=');
        var operator = equation[0];

        var _utils$splitValUnit = utils.splitValUnit(equation[1]);

        var unit = _utils$splitValUnit.unit;
        var value = _utils$splitValUnit.value;

        value = parseFloat(value);

        switch (operator) {
            case '+':
                newValue += value;
                break;
            case '-':
                newValue -= value;
                break;
            case '*':
                newValue *= value;
                break;
            case '/':
                newValue /= value;
                break;
        }

        if (unit) {
            newValue += unit;
        }

        return newValue;
    },

    /*
        Restrict value to range
        
        Return value within the range of lowerLimit and upperLimit
        
        @param [number]: Value to keep within range
        @param [number]: Lower limit of range
        @param [number]: Upper limit of range
        @return [number]: Value as limited within given range
    */
    restricted: function (value, min, max) {
        return Math.min(Math.max(value, min), max);
    },

    /*
        Framerate-independent smoothing
         @param [number]: New value
        @param [number]: Old value
        @param [number]: Frame duration
        @param [number] (optional): Smoothing (0 is none)
    */
    smooth: function (newValue, oldValue, duration) {
        var smoothing = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
        return oldValue + duration * (newValue - oldValue) / Math.max(smoothing, duration);
    },

    /*
        Convert x per second to per frame velocity based on fps
        
        @param [number]: Unit per second
        @param [number]: Frame duration in ms
    */
    speedPerFrame: function (xps, frameDuration) {
        return utils.isNum(xps) ? xps / (1000 / frameDuration) : 0;
    },

    /*
        Convert velocity into velicity per second
        
        @param [number]: Unit per frame
        @param [number]: Frame duration in ms
    */
    speedPerSecond: function (velocity, frameDuration) {
        return velocity * (1000 / frameDuration);
    },

    /*
        Value in range from progress
        
        Given a lower limit and an upper limit, we return the value within
        that range as expressed by progress (a number from 0-1)
        
        @param [number]: The progress between lower and upper limits expressed 0-1
        @param [number]: Lower limit of range
        @param [number]: Upper limit of range
        @return [number]: Value as calculated from progress within range (not limited within range)
    */
    value: function (progress, from, to) {
        return -progress * from + progress * to + from;
    },

    /*
        Eased value in range from progress
        
        Given a lower limit and an upper limit, we return the value within
        that range as expressed by progress (a number from 0-1)
        
        @param [number]: The progress between lower and upper limits expressed 0-1
        @param [number]: Lower limit of range, or upper if limit2 not provided
        @param [number]: Upper limit of range
        @param [function]: Easing to apply to value
        @return [number]: Value as calculated from progress within range (not limited within range)
    */
    valueEased: function (progress, from, to, easing) {
        return calc.value(easing(progress), from, to);
    }
};

module.exports = calc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmMvY2FsYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7SUFFN0IsU0FBUyxHQUFHO0FBQ1IsS0FBQyxFQUFFLENBQUM7QUFDSixLQUFDLEVBQUUsQ0FBQztDQUNQO0lBRUQsSUFBSSxHQUFHOzs7Ozs7Ozs7Ozs7QUFZSCxTQUFLLEVBQUUsVUFBQyxDQUFDO1lBQUUsQ0FBQyx5REFBRyxTQUFTO2VBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQztBQUM5QyxhQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNaLGFBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2YsQ0FBQztLQUFBOzs7Ozs7Ozs7Ozs7QUFZRixtQkFBZSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUM7ZUFBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FBQTs7Ozs7Ozs7QUFRbEUsb0JBQWdCLEVBQUUsVUFBQSxPQUFPO2VBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRztLQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CcEQsVUFBTSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRO2VBQUssQ0FBQyxHQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQSxHQUFJLFFBQVEsQUFBQztLQUFBOzs7Ozs7Ozs7Ozs7QUFZcEQsWUFBUSxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUM7ZUFBSyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUFBOzs7Ozs7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SyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBSSxHQUFHLElBQUksSUFBSSxHQUFHLGFBQWEsQ0FBQSxBQUFDLEdBQUcsQ0FBQztLQUFBOzs7Ozs7OztBQVE1RixrQkFBYyxFQUFFLFVBQUMsUUFBUSxFQUFFLGFBQWE7ZUFBSyxRQUFRLElBQUksSUFBSSxHQUFHLGFBQWEsQ0FBQSxBQUFDO0tBQUE7Ozs7Ozs7Ozs7Ozs7QUFjOUUsU0FBSyxFQUFFLFVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFO2VBQUssQUFBQyxDQUFFLFFBQVEsR0FBRyxJQUFJLEdBQUssUUFBUSxHQUFHLEVBQUUsQUFBQyxHQUFHLElBQUk7S0FBQTs7Ozs7Ozs7Ozs7Ozs7QUFlM0UsY0FBVSxFQUFFLFVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTTtlQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7S0FBQTtDQUNyRixDQUFDOztBQUVOLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDIiwiZmlsZSI6ImNhbGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyksXG5cbiAgICB6ZXJvUG9pbnQgPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICB9LFxuXG4gICAgY2FsYyA9IHtcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGFyZSBhdCAwLDAsIHRoZW4gcmV0dXJuIHRoZSBhbmdsZSB1c2luZyAuYW5nbGVGcm9tQ2VudGVyKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gICAgICAgICAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiAgICAgICAgKi9cbiAgICAgICAgYW5nbGU6IChhLCBiID0gemVyb1BvaW50KSA9PiBjYWxjLmFuZ2xlRnJvbUNlbnRlcih7XG4gICAgICAgICAgICB4OiBhLnggLSBiLngsXG4gICAgICAgICAgICB5OiBhLnkgLSBiLnlcbiAgICAgICAgfSksXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIEFuZ2xlIGZyb20gY2VudGVyXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGN1cnJlbnQgYW5nbGUsIGluIHJhZGlhbnMsIG9mIGEgZGVmaW5lZCBwb2ludFxuICAgICAgICAgICAgZnJvbSBhIGNlbnRlciAoYXNzdW1lZCAwLDApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogWCBjb29yZGluYXRlIG9mIHNlY29uZCBwb2ludFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBZIGNvb3JkaW5hdGUgb2Ygc2Vjb25kIHBvaW50XG4gICAgICAgICAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIDAsIDAgYW5kIHBvaW50IGluIHJhZGlhbnNcbiAgICAgICAgKi9cbiAgICAgICAgYW5nbGVGcm9tQ2VudGVyOiAoeCwgeSkgPT4gY2FsYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoeSwgeCkpLFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICAgICAgICAqL1xuICAgICAgICBkZWdyZWVzVG9SYWRpYW5zOiBkZWdyZWVzID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwLFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEaWxhdGVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYSAtLS0tLS0tLS0gYlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBhIC0tLS0gYlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuICAgICAgICAqL1xuICAgICAgICBkaWxhdGU6IChhLCBiLCBkaWxhdGlvbikgPT4gYSArICgoYiAtIGEpICogZGlsYXRpb24pLFxuICAgICAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEaXN0YW5jZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuICgwLDApIGFuZCBwb2ludEEsIHVubGVzcyBwb2ludEJcbiAgICAgICAgICAgIGlzIHByb3ZpZGVkLCB0aGVuIHdlIHJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gICAgICAgICovXG4gICAgICAgIGRpc3RhbmNlOiAoYSwgYikgPT4gdXRpbHMuaXNOdW0oYSkgPyBjYWxjLmRpc3RhbmNlMUQoYSwgYikgOiBjYWxjLmRpc3RhbmNlMkQoYSwgYiksXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIERpc3RhbmNlIDFEXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gcG9pbnQgQSBhbmQgcG9pbnQgQlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFBvaW50IEFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogKG9wdGlvbmFsKTogUG9pbnQgQlxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgZGlzdGFuY2UxRDogKGEsIGIgPSAwKSA9PiBNYXRoLmFicyhhIC0gYiksXG4gICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIERpc3RhbmNlIDJEXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gKDAsMCkgYW5kIHBvaW50IEEsIHVubGVzcyBwb2ludCBCXG4gICAgICAgICAgICBpcyBwcm92aWRlZCwgdGhlbiB3ZSByZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdHdvLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IHggYW5kIHkgb2YgcG9pbnQgQVxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9mIHBvaW50IEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gICAgICAgICovXG4gICAgICAgIGRpc3RhbmNlMkQ6IChhLCBiID0gemVyb1BvaW50KSA9PiBjYWxjLmh5cG90ZW51c2Uoe1xuICAgICAgICAgICAgeDogTWF0aC5hYnMoYS54IC0gYi54KSxcbiAgICAgICAgICAgIHk6IE1hdGguYWJzKGEueSAtIGIueSlcbiAgICAgICAgfSksXG4gICAgICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEh5cG90ZW51c2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgaHlwb3RlbnVzZSwgc2lkZSBDLCBnaXZlbiB0aGUgbGVuZ3RocyBvZiBzaWRlcyBBIGFuZCBCLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBCXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBMZW5ndGggb2YgQ1xuICAgICAgICAqL1xuICAgICAgICBoeXBvdGVudXNlOiAoYSwgYikgPT4gTWF0aC5zcXJ0KChhICogYSkgKyAoYiAqIGIpKSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBPZmZzZXQgYmV0d2VlbiB0d28gaW5wdXRzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIENhbGN1bGF0ZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBkaWZmZXJlbnQgaW5wdXRzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBpbnB1dFxuICAgICAgICAgICAgQHBhcmFtIFtQb2ludF06IFNlY29uZCBpbnB1dFxuICAgICAgICAgICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgb2Zmc2V0OiAoYSwgYikgPT4ge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHt9O1xuXG4gICAgICAgICAgICB1dGlscy5lYWNoKGIsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0W2tleV0gPSBhLmhhc093blByb3BlcnR5KGtleSkgPyB2YWx1ZSAtIGFba2V5XSA6IDA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzTnVtKG9mZnNldC54KSAmJiB1dGlscy5pc051bShvZmZzZXQueSkpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQuYW5nbGUgPSBjYWxjLmFuZ2xlKGEsIGIpO1xuICAgICAgICAgICAgICAgIG9mZnNldC5kaXN0YW5jZSA9IGNhbGMuZGlzdGFuY2UyRChhLCBiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICAgICAgICAgICAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuICAgICAgICAqL1xuICAgICAgICBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlOiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpID0+IHtcbiAgICAgICAgICAgIGFuZ2xlID0gY2FsYy5kZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgICAgICAgICAgICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgICAgICAgICAgIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICAgICAgICAgICAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdFxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgKi9cbiAgICAgICAgcHJvZ3Jlc3M6ICh2YWx1ZSwgZnJvbSwgdG8pID0+ICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSksXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gICAgICAgICovXG4gICAgICAgIHJhZGlhbnNUb0RlZ3JlZXM6IHJhZGlhbnMgPT4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEksXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtaW5pbXVtXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFJhbmRvbSBudW1iZXIgd2l0aGluIHJhbmdlLCBvciAwIGFuZCAxIGlmIG5vbmUgcHJvdmlkZWRcbiAgICAgICAgKi9cbiAgICAgICAgcmFuZG9tOiAobWluID0gMCwgbWF4ID0gMSkgPT4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluLFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gICAgICAgICAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICAgICAgKi9cbiAgICAgICAgcmVsYXRpdmVWYWx1ZTogKGN1cnJlbnQsIHJlbCkgPT4ge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gY3VycmVudCxcbiAgICAgICAgICAgICAgICBlcXVhdGlvbiA9IHJlbC5zcGxpdCgnPScpLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yID0gZXF1YXRpb25bMF0sXG4gICAgICAgICAgICAgICAgeyB1bml0LCB2YWx1ZSB9ID0gdXRpbHMuc3BsaXRWYWxVbml0KGVxdWF0aW9uWzFdKTtcblxuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICAgICAgICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSArPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlIC09IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgKj0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSAvPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh1bml0KSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgKz0gdW5pdDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybiB2YWx1ZSB3aXRoaW4gdGhlIHJhbmdlIG9mIGxvd2VyTGltaXQgYW5kIHVwcGVyTGltaXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBrZWVwIHdpdGhpbiByYW5nZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgbGltaXRlZCB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICAgICAgKi9cbiAgICAgICAgcmVzdHJpY3RlZDogKHZhbHVlLCBtaW4sIG1heCkgPT4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbiksIG1heCksXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIEZyYW1lcmF0ZS1pbmRlcGVuZGVudCBzbW9vdGhpbmdcblxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4gICAgICAgICovXG4gICAgICAgIHNtb290aDogKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24sIHNtb290aGluZyA9IDApID0+IG9sZFZhbHVlICsgKGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpLFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuICAgICAgICAqL1xuICAgICAgICBzcGVlZFBlckZyYW1lOiAoeHBzLCBmcmFtZUR1cmF0aW9uKSA9PiAodXRpbHMuaXNOdW0oeHBzKSkgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMCxcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiAgICAgICAgKi9cbiAgICAgICAgc3BlZWRQZXJTZWNvbmQ6ICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikgPT4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pLFxuICAgIFxuICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gICAgICAgICAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4gICAgICAgICovXG4gICAgICAgIHZhbHVlOiAocHJvZ3Jlc3MsIGZyb20sIHRvKSA9PiAoLSBwcm9ncmVzcyAqIGZyb20pICsgKHByb2dyZXNzICogdG8pICsgZnJvbSxcbiAgICBcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEVhc2VkIHZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gICAgICAgICAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlLCBvciB1cHBlciBpZiBsaW1pdDIgbm90IHByb3ZpZGVkXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogRWFzaW5nIHRvIGFwcGx5IHRvIHZhbHVlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4gICAgICAgICovXG4gICAgICAgIHZhbHVlRWFzZWQ6IChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2luZykgPT4gY2FsYy52YWx1ZShlYXNpbmcocHJvZ3Jlc3MpLCBmcm9tLCB0bylcbiAgICB9O1xuICAgIFxubW9kdWxlLmV4cG9ydHMgPSBjYWxjOyJdfQ==