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
        angle: (a, b = zeroPoint) => calc.angleFromCenter({
            x: a.x - b.x,
            y: a.y - b.y
        }),

        /*
            Angle from center
            
            Returns the current angle, in radians, of a defined point
            from a center (assumed 0,0)
            
            @param [number]: X coordinate of second point
            @param [number]: Y coordinate of second point
            @return [radian]: Angle between 0, 0 and point in radians
        */
        angleFromCenter: (x, y) => calc.radiansToDegrees(Math.atan2(y, x)),
        
        /*
            Convert degrees to radians
            
            @param [number]: Value in degrees
            @return [number]: Value in radians
        */
        degreesToRadians: degrees => degrees * Math.PI / 180,

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
        dilate: (a, b, dilation) => a + ((b - a) * dilation),
            
        /*
            Distance
            
            Returns the distance between (0,0) and pointA, unless pointB
            is provided, then we return the difference between the two.
            
            @param [object/number]: x and y or just x of point A
            @param [object/number]: (optional): x and y or just x of point B
            @return [number]: The distance between the two points
        */
        distance: (a, b) => utils.isNum(a) ? calc.distance1D(a, b) : calc.distance2D(a, b),

        /*
            Distance 1D
            
            Returns the distance between point A and point B
            
            @param [number]: Point A
            @param [number]: (optional): Point B
            @return [number]: The distance between the two points
        */
        distance1D: (a, b = 0) => Math.abs(a - b),
      
        /*
            Distance 2D
            
            Returns the distance between (0,0) and point A, unless point B
            is provided, then we return the difference between the two.
            
            @param [object]: x and y of point A
            @param [object]: (optional): x and y of point B
            @return [number]: The distance between the two points
        */
        distance2D: (a, b = zeroPoint) => calc.hypotenuse({
            x: Math.abs(a.x - b.x),
            y: Math.abs(a.y - b.y)
        }),
            
        /*
            Hypotenuse
            
            Returns the hypotenuse, side C, given the lengths of sides A and B.
            
            @param [number]: Length of A
            @param [number]: Length of B
            @return [number]: Length of C
        */
        hypotenuse: (a, b) => Math.sqrt((a * a) + (b * b)),
        
        /*
            Offset between two inputs
            
            Calculate the difference between two different inputs
            
            @param [Point]: First input
            @param [Point]: Second input
            @return [Offset]: Distance metrics between two points
        */
        offset: (a, b) => {
            var offset = {};

            utils.each(b, (key, value) => {
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
        pointFromAngleAndDistance: (origin, angle, distance) => {
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
        progress: (value, from, to) => (value - from) / (to - from),
        
        /*
            Convert radians to degrees
            
            @param [number]: Value in radians
            @return [number]: Value in degrees
        */
        radiansToDegrees: radians => radians * 180 / Math.PI,

        /*
            Return random number between range
            
            @param [number] (optional): Output minimum
            @param [number] (optional): Output maximum
            @return [number]: Random number within range, or 0 and 1 if none provided
        */
        random: (min = 0, max = 1) => Math.random() * (max - min) + min,
        
        /*
            Calculate relative value
            
            Takes the operator and value from a string, ie "+=5", and applies
            to the current value to resolve a new target.
            
            @param [number]: Current value
            @param [string]: Relative value
            @return [number]: New value
        */
        relativeValue: (current, rel) => {
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
        restricted: (value, min, max) => Math.min(Math.max(value, min), max),

        /*
            Framerate-independent smoothing

            @param [number]: New value
            @param [number]: Old value
            @param [number]: Frame duration
            @param [number] (optional): Smoothing (0 is none)
        */
        smooth: (newValue, oldValue, duration, smoothing = 0) => smoothing ? oldValue + (duration * (newValue - oldValue) / smoothing) : newValue,
    
        /*
            Convert x per second to per frame velocity based on fps
            
            @param [number]: Unit per second
            @param [number]: Frame duration in ms
        */
        speedPerFrame: (xps, frameDuration) => (utils.isNum(xps)) ? xps / (1000 / frameDuration) : 0,
    
        /*
            Convert velocity into velicity per second
            
            @param [number]: Unit per frame
            @param [number]: Frame duration in ms
        */
        speedPerSecond: (velocity, frameDuration) => velocity * (1000 / frameDuration),
    
     
        /*
            Value in range from progress
            
            Given a lower limit and an upper limit, we return the value within
            that range as expressed by progress (a number from 0-1)
            
            @param [number]: The progress between lower and upper limits expressed 0-1
            @param [number]: Lower limit of range
            @param [number]: Upper limit of range
            @return [number]: Value as calculated from progress within range (not limited within range)
        */
        value: (progress, from, to) => (- progress * from) + (progress * to) + from,
    
    
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
        valueEased: (progress, from, to, easing) => calc.value(easing(progress), from, to)
    };
    
module.exports = calc;