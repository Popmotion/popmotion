/*
    Calculators
    ----------------------------------------
    
    Simple I/O snippets
*/
"use strict";

var utils = require('./utils.js'),

    calc = {
        
        /*
            Angle between points
            
            Translates the hypothetical line so that the 'from' coordinates
            are at 0,0, then return the angle using .angleFromCenter()
            
            @param [object]: X and Y coordinates of from point
            @param [object]: X and Y cordinates of to point
            @return [radian]: Angle between the two points in radians
        */
        angle: function (pointA, pointB) {
            var from = pointB ? pointA : {x: 0, y: 0},
                to = pointB || pointA,
                point = {
                    x: to.x - from.x,
                    y: to.y - from.y
                };
            
            return this.angleFromCenter(point.x, point.y);
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
            return this.radiansToDegrees(Math.atan2(y, x));
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
            return a + ((b - a) * dilation);
        },
            
        /*
            Distance
            
            Returns the distance between (0,0) and pointA, unless pointB
            is provided, then we return the difference between the two.
            
            @param [object/number]: x and y or just x of point A
            @param [object/number]: (optional): x and y or just x of point B
            @return [number]: The distance between the two points
        */
        distance: function (pointA, pointB) {
            return (typeof pointA === "number") ? this.distance1D(pointA, pointB) : this.distance2D(pointA, pointB);
        },
    
        /*
            Distance 1D
            
            Returns the distance between point A and point B
            
            @param [number]: Point A
            @param [number]: (optional): Point B
            @return [number]: The distance between the two points
        */
        distance1D: function (pointA, pointB) {
            var bIsNum = (typeof pointB === 'number'),
                from = bIsNum ? pointA : 0,
                to = bIsNum ? pointB : pointA;
    
            return absolute(to - from);
        },
    
      
        /*
            Distance 2D
            
            Returns the distance between (0,0) and point A, unless point B
            is provided, then we return the difference between the two.
            
            @param [object]: x and y of point A
            @param [object]: (optional): x and y of point B
            @return [number]: The distance between the two points
        */
        distance2D: function (pointA, pointB) {
            var bIsObj = (typeof pointB === "object"),
                from = bIsObj ? pointA : {x: 0, y: 0},
                to = bIsObj ? pointB : pointA,
                point = {
                    x: absolute(to.x - from.x),
                    y: absolute(to.y - from.y)
                };
                
            return this.hypotenuse(point.x, point.y);
        },
            
        /*
            Hypotenuse
            
            Returns the hypotenuse, side C, given the lengths of sides A and B.
            
            @param [number]: Length of A
            @param [number]: Length of B
            @return [number]: Length of C
        */
        hypotenuse: function (a, b) {
            var a2 = a * a,
                b2 = b * b,
                c2 = a2 + b2;
                
            return Math.sqrt(c2);
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
    
            for (var key in b) {
                if (b.hasOwnProperty(key)) {
                    if (a.hasOwnProperty(key)) {
                        offset[key] = b[key] - a[key];
                    } else {
                        offset[key] = 0;
                    }
                } 
            }

            if (isNum(offset.x) && isNum(offset.y)) {
                offset.angle = this.angle(a, b);
                offset.distance = this.distance2D(a, b);
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
            var point = {};
    
    		point.x = distance * Math.cos(angle) + origin.x;
            point.y = distance * Math.sin(angle) + origin.y;
    
            return point;
        },
    
        /*
            Progress within given range
            
            Given a lower limit and an upper limit, we return the progress
            (expressed as a number 0-1) represented by the given value, and
            limit that progress to within 0-1.
            
            @param [number]: Value to find progress within given range
            @param [number]: Lower limit if full range given, upper if not
            @param [number] (optional): Upper limit of range
            @return [number]: Progress of value within range as expressed 0-1
        */
        progress: function (value, limitA, limitB) {
            var bIsNum = (typeof limitB === 'number'),
                from = bIsNum ? limitA : 0,
                to = bIsNum ? limitB : limitA,
                range = to - from,
                progress = (value - from) / range;
    
            return progress;
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
        random: function (min = 0, max = 1) {
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
            var newValue = current,
                equation = rel.split('='),
                operator = equation[0],
                { unit, value } = utils.splitValUnit(equation[1]);

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
            var restricted = (min !== undefined) ? Math.max(value, min) : value;
            restricted = (max !== undefined) ? Math.min(restricted, max) : restricted;
    
            return restricted;
        },
    
        /*
            Convert x per second to per frame velocity based on fps
            
            @param [number]: Unit per second
            @param [number]: Frame duration in ms
        */
        speedPerFrame: function (xps, frameDuration) {
            return (isNum(xps)) ? xps / (1000 / frameDuration) : 0;
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
            @param [number]: Lower limit of range, or upper if limit2 not provided
            @param [number] (optional): Upper limit of range
            @return [number]: Value as calculated from progress within range (not limited within range)
        */
        value: function (progress, limitA, limitB) {
            var bIsNum = (typeof limitB === 'number'),
                from = bIsNum ? limitA : 0,
                to = bIsNum ? limitB : limitA;
    
            return (- progress * from) + (progress * to) + from; 
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
            var easedProgress = easing(progress);
            
            return this.value(easedProgress, from, to);
        }
    },

    /*
        Caching functions used multiple times to reduce filesize and increase performance
    */
    isNum = utils.isNum,
    absolute = Math.abs;
    
module.exports = calc;