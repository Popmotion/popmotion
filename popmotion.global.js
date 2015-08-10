(function() {
var exports = {};
var popmotion = ((function() {
var exports = {};
var __small$_11 = (function() {
var exports = {};
exports = {
    defaultProps: {
        unit: 'px'
    }
};
return exports;
})();
var __small$_33 = (function() {
var exports = {};
/*
    Utility functions
*/
"use strict";

var protectedProperties = ['scope',  'dom'],
    
    isProtected = function (key) {
        return (protectedProperties.indexOf(key) !== -1);
    },

    /*
        Get var type as string
        
        @param: Variable to test
        @return [string]: Returns, for instance 'Object' if [object Object]
    */
    varType = function (variable) {
        return Object.prototype.toString.call(variable).slice(8, -1);
    };

exports = {
    
    /*
        Has one object changed from the other
        
        Compares the two provided inputs and returns true if they are different
        
        @param [object]: Input A
        @param [object]: Input B
        @return [boolean]: True if different
    */
    hasChanged: function (a, b) {
        var hasChanged = false,
            key = '';

        for (key in b) {
            if (a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
                if (a[key] !== b[key]) {
                    hasChanged = true;
                }
            } else {
                hasChanged = true;
            }
        }
    
        return hasChanged;
    },
    
    /*
        Is this var a number?
        
        @param: Variable to test
        @return [boolean]: Returns true if typeof === 'number'
    */
    isNum: function (num) {
        return (typeof num === 'number');
    },
    
    /*
        Is this var an object?
        
        @param: Variable to test
        @return [boolean]: Returns true if typeof === 'object'
    */
    isObj: function (obj) {
        return (typeof obj === 'object');
    },
    
    /*
        Is this var a function ? 
        
        @param: Variable to test
        @return [boolean]: Returns true if this.varType === 'Function'
    */
    isFunc: function (obj) {
        return (varType(obj) === 'Function'); 
    },
    
    /*
        Is this var a string ? 
        
        @param: Variable to test
        @return [boolean]: Returns true if typeof str === 'string'
    */
    isString: function (str) {
        return (typeof str === 'string'); 
    },


    /*
        Is this a relative value assignment?
        
        @param [string]: Variable to test
        @return [boolean]: If this looks like a relative value assignment
    */
    isRelativeValue: function (value) {
        return (value && value.indexOf && value.indexOf('=') > 0);
    },
    
    /*
        Is this var an array ? 
        
        @param: Variable to test
        @return [boolean]: Returns true if this.varType === 'Array'
    */
    isArray: function (arr) {
        return (varType(arr) === 'Array');
    },
    
    /*
        Copy object or array
        
        Checks whether base is an array or object and makes
        appropriate copy
        
        @param [array || object]: Array or object to copy
        @param [array || object]: New copy of array or object
    */
    copy: function (base) {
        return (this.isArray(base)) ? this.copyArray(base) : this.copyObject(base);
    },
    
    /*
        Deep copy an object
        
        Iterates over an object and creates a new copy of every item,
        deep copying if it finds any objects/arrays
        
        @param [object]: Object to copy
        @param [object]: New copy of object
    */
    copyObject: function (base) {
        var newObject = {};
        
        for (var key in base) {
            if (base.hasOwnProperty(key)) {
                newObject[key] = (this.isObj(base[key]) && !isProtected(key)) ? this.copy(base[key]) : base[key];
            }
        }
        
        return newObject;
    },
    
    /*
        Deep copy an array
        
        Loops through an array and creates a new copy of every item,
        deep copying if it finds any objects/arrays
        
        @param [array]: Array to copy
        @return [array]: New copy of array
    */
    copyArray: function (base) {
        var newArray = [],
            length = base.length,
            i = 0;
        
        for (; i < length; i++) {
            newArray[i] = (this.isObj(base[i])) ? this.copy(base[i]) : base[i];
        }
        
        return newArray;
    },
    
    /*
        Non-destructive merge of object or array
        
        @param [array || object]: Array or object to use as base
        @param [array || object]: Array or object to overwrite base with
        @return [array || object]: New array or object
    */
    merge: function (base, overwrite) {
        return (this.isArray(base)) ? this.copyArray(overwrite) : this.mergeObject(base, overwrite);
    },
    
    /*
        Non-destructive merge of object
        
        @param [object]: Object to use as base
        @param [object]: Object to overwrite base with
        @return [object]: New object
    */
    mergeObject: function (base, overwrite) {
        var hasBase = this.isObj(base),
            newObject = hasBase ? this.copy(base) : this.copy(overwrite),
            key = '';

        if (hasBase) {
            for (key in overwrite) {
                if (overwrite.hasOwnProperty(key)) {
                    newObject[key] = (this.isObj(overwrite[key]) && !isProtected(key)) ? this.merge(base[key], overwrite[key]) : overwrite[key];
                }
            }
        }
        return newObject;
    },
    
    /*
        Split a value into a value/unit object
        
            "200px" -> { value: 200, unit: "px" }
            
        @param [string]: Value to split
        @return [object]: Object with value and unit props
    */
    splitValUnit: function (value) {
        var splitVal = value.match(/(-?\d*\.?\d*)(.*)/);

        return {
            value: parseFloat(splitVal[1]),
            unit:  splitVal[2]
        };
    },

    /*
        Create stepped version of 0-1 progress
        
        @param [number]: Current value
        @param [int]: Number of steps
        @return [number]: Stepped value
    */
    stepProgress: function (progress, steps) {
        var segment = 1 / (steps - 1),
            target = 1 - (1 / steps),
            progressOfTarget = Math.min(progress / target, 1);

        return Math.floor(progressOfTarget / segment) * segment;
    },
    
    /*
        Generate current timestamp
        
        @return [timestamp]: Current UNIX timestamp
    */
    currentTime: function () {
	    return (typeof performance !== "undefined") ? performance.now() : new Date().getTime();
    }
    
};
return exports;
})();
var __small$_22 = (function() {
var exports = {};
/*
    Calculators
    ----------------------------------------
    
    Simple I/O snippets
*/
"use strict";

var utils = __small$_33,

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
        random: function (min, max) {
            min = isNum(min) ? min : 0;
            max = isNum(max) ? max : 1;
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
                splitVal = utils.splitValUnit(equation[1]);

            switch (operator) {
                case '+':
                    newValue += splitVal.value;
                    break;
                case '-':
                    newValue -= splitVal.value;
                    break;
                case '*':
                    newValue *= splitVal.value;
                    break;
                case '/':
                    newValue /= splitVal.value;
                    break;
            }
            
            if (splitVal.unit) {
                newValue += splitVal.unit;
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
    
exports = calc;
return exports;
})();
var __small$_45 = (function() {
var exports = {};
"use strict";

exports = function (values, terms, delimiter, chop) {
    var combined = '',
        key = '',
        i = 0,
        numTerms = terms.length;

    for (; i < numTerms; i++) {
        key = terms[i];

        if (values.hasOwnProperty(key)) {
            combined += values[key] + delimiter;
        }
    }

    if (chop) {
        combined = combined.slice(0, -chop);
    }

    return combined;
};
return exports;
})();
var __small$_46 = (function() {
var exports = {};
exports = function (value, prefix) {
    return prefix + '(' + value + ')';
};
return exports;
})();
var __small$_47 = (function() {
var exports = {};
"use strict";

exports = {
    color: {
        min: 0,
        max: 255,
        round: true
    },
    opacity: {
        min: 0,
        max: 1
    },
    percent: {
        min: 0,
        max: 100,
        unit: '%'
    }
};

return exports;
})();
var __small$_48 = (function() {
var exports = {};
"use strict";

var X = 'X',
    Y = 'Y',
    ALPHA = 'Alpha',

    terms = {
        colors: ['Red', 'Green', 'Blue', ALPHA],
        positions: [X, Y, 'Z'],
        dimensions: ['Top', 'Right', 'Bottom', 'Left'],
        shadow: [X, Y, 'Radius', 'Spread', 'Color'],
        hsl: ['Hue', 'Saturation', 'Lightness', ALPHA]
    };

exports = terms;
return exports;
})();
var __small$_49 = (function() {
var exports = {};
exports = function (value) {
    return (typeof value === 'string') ? value.split(' ') : [value];
};
return exports;
})();
var __small$_30 = (function() {
var exports = {};
/*
    Input controller
*/
"use strict";

var calc = __small$_22,
    utils = __small$_33,
    History = ((function() {
var exports = {};
"use strict";

var // [number]: Default max size of history
    maxHistorySize = 3,
    
    /*
        History constructor
        
        @param [var]: Variable to store in first history slot
        @param [int] (optional): Maximum size of history
    */
    History = function (obj, max) {
        this.max = max || maxHistorySize;
        this.entries = [];
        this.add(obj);
    };
    
History.prototype = {
    
    /*
        Push new var to history
        
        Shift out oldest entry if we've reached maximum capacity
        
        @param [var]: Variable to push into history.entries
    */
    add: function (obj) {
        var currentSize = this.getSize();
        
        this.entries.push(obj);
        
        if (currentSize >= this.max) {
            this.entries.shift();
        }
    },
    
    /*
        Get variable at specified index

        @param [int]: Index
        @return [var]: Var found at specified index
    */
    get: function (i) {
        i = (typeof i === 'number') ? i : this.getSize() - 1;

        return this.entries[i];
    },
    
    /*
        Get the second newest history entry
        
        @return [var]: Entry found at index size - 2
    */
    getPrevious: function () {
        return this.get(this.getSize() - 2);
    },
    
    /*
        Get current history size
        
        @return [int]: Current length of entries.length
    */
    getSize: function () {
        return this.entries.length;
    }
    
};

exports = History;
return exports;
})()),

    /*
        Input constructor
        
            Syntax
                newInput(name, value[, poll])
                    @param [string]: Name of to track
                    @param [number]: Initial value
                    @param [function] (optional): Function to poll Input data
                    
                newInput(props[, poll])
                    @param [object]: Object of values
                    @param [function] (optional): Function to poll Input data

        @return [Input]
    */
    Input = function () {
        var pollPos = arguments.length - 1;

        this.current = {};
        this.offset = {};
        this.velocity = {};
        this.history = new History();
        this.update(arguments[0], arguments[1]);
        
        if (utils.isFunc(arguments[pollPos])) {
            this.poll = arguments[pollPos];
        }
    };

Input.prototype = {
    
    // [number]: Number of frames of inactivity before velocity is turned to 0
    maxInactiveFrames: 2,
    
    // [number]: Number of frames input hasn't been updated
    inactiveFrames: 0,
    
    /*
        Get latest input values
        
        @param [string] (optional): Name of specific property to return
        @return [object || number]: Latest input values or, if specified, single value
    */
    get: function (prop) {
        var latest = this.history.get(),
            val = (prop !== undefined) ? latest[prop] : latest;
        
        return val;
    },

    /*
        Update the input values
        
        Syntax
            input.update(name, value)
                @param [string]: Name of to track
                @param [number]: Initial value
                
            input.update(props)
                @param [object]: Object of values
                
        @return [Input]
    */
    update: function (arg0, arg1) {
        var values = {};

        if (utils.isNum(arg1)) {
            values[arg0] = arg1;
        } else {
            values = arg0;
        }

        this.history.add(utils.merge(this.current, values));
        
        return this;
    },
    
    /*
        Check for input movement and update pointer object's properties
        
        @param [number]: Timestamp of frame
        @return [Input]
    */
    onFrame: function (timestamp) {
        var latest, hasChanged;
        
        // Check provided timestamp against lastFrame timestamp and return input has already been updated
        if (timestamp === this.lastFrame) {
            return;
        }
        
        latest = (this.poll) ? this.poll() : this.history.get();
        hasChanged = utils.hasChanged(this.current, latest);

        // If input has changed between frames  
        if (hasChanged) {
            this.velocity = calc.offset(this.current, latest);
            this.current = latest;
            this.inactiveFrames = 0;

        // Or it hasn't moved and our frame limit has been reached
        } else if (this.inactiveFrames >= this.maxInactiveFrames) {
            this.velocity = calc.offset(this.current, this.current);
        
        // Or input hasn't changed
        } else {
            this.inactiveFrames++;
        }
        
        this.lastFrame = timestamp;
        
        return this;
    }
    
};

exports = Input;
return exports;
})();
var __small$_55 = (function() {
var exports = {};
"use strict";

var ModManager = function () {
        this._keys = [];
        this._numKeys = 0;
    };

ModManager.prototype = {

    /*
        Add module key to keys list

        @param [string]: Key to add
    */
    _addKey: function (name) {
        this._keys.push(name);
        this._numKeys++;
    },

    /*
        Add a new module

        @param [string || object]: Name of new module or multiple modules
        @param [object] (optional): Module to add
    */
    extend: function (name, mod) {
        var multiMods = (typeof name == 'object'),
            mods = multiMods ? name : {},
            key = '';

        // If we just have one module, coerce
        if (!multiMods) {
            mods[name] = mod;
        }

        for (key in mods) {
            if (mods.hasOwnProperty(key)) {
                this._addKey(key);
                this[key] = mods[key];
            }
        }

        return this;
    },

    each: function (callback) {
        var key = '';

        for (var i = 0; i < this._numKeys; i++) {
            key = this._keys[i];
            callback(key, this[key]);
        }
    }
};

exports = ModManager;
return exports;
})();
var __small$_25 = (function() {
var exports = {};
"use strict";

var utils = __small$_33,
    ModManager = __small$_55,
    presetManager = new ModManager(),

    DOT = '.',

    generateKeys = function (key) {
        var keys = key.split(DOT),
            numKeys = keys.length,
            lastKey = keys[0],
            i = 1;

        for (; i < numKeys; i++) {
            keys[i] = lastKey += DOT + keys[i];
        }

        return keys;
    };

/*
    Get defined action
    
    @param [string]: The name of the predefined action
*/
presetManager.getDefined = function (name) {
    var props = {},
        thisProp = {},
        keys = generateKeys(name),
        numKeys = keys.length,
        i = 0;

    for (; i < numKeys; i++) {
        thisProp = this[keys[i]];

        if (thisProp) {
            props = utils.merge(props, thisProp);
        }
    }

    return props;
};

exports = presetManager;
return exports;
})();
var __small$_41 = (function() {
var exports = {};
"use strict";

var presetManager = __small$_25,
    utils = __small$_33;

exports = function (base, override) {
    var props = (typeof base === 'string') ? presetManager.getDefined(base) : base;

    // Override properties with second arg if it's an object
    if (typeof override === 'object') {
        props = utils.merge(props, override);
    }

    return props;
};
return exports;
})();
var __small$_32 = (function() {
var exports = {};
var Bezier = ((function() {
var exports = {};
/*
    Bezier function generator
        
    Gaëtan Renaudeau's BezierEasing
    https://github.com/gre/bezier-easing/blob/master/index.js  
    https://github.com/gre/bezier-easing/blob/master/LICENSE
    You're a hero
    
    Use
    
        var easeOut = new Bezier(.17,.67,.83,.67),
            x = easeOut(0.5); // returns 0.627...
*/
"use strict";

var NEWTON_ITERATIONS = 8,
    NEWTON_MIN_SLOPE = 0.001,
    SUBDIVISION_PRECISION = 0.0000001,
    SUBDIVISION_MAX_ITERATIONS = 10,
    K_SPLINE_TABLE_SIZE = 11,
    K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0),
    FLOAT_32_SUPPORTED = (typeof Float32Array !== 'undefined'),
    
    a = function (a1, a2) {
        return 1.0 - 3.0 * a2 + 3.0 * a1;
    },
    
    b = function (a1, a2) {
        return 3.0 * a2 - 6.0 * a1;
    },
    
    c = function (a1) {
        return 3.0 * a1;
    },

    getSlope = function (t, a1, a2) {
        return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
    },

    calcBezier = function (t, a1, a2) {
        return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
    },
    
    /*
        Bezier constructor
    */
    Bezier = function (mX1, mY1, mX2, mY2) {
        var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE),
            _precomputed = false,
    
            binarySubdivide = function (aX, aA, aB) {
                var currentX, currentT, i = 0;

                do {
                    currentT = aA + (aB - aA) / 2.0;
                    currentX = calcBezier(currentT, mX1, mX2) - aX;
                    if (currentX > 0.0) {
                        aB = currentT;
                    } else {
                        aA = currentT;
                    }
                } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

                return currentT;
            },
        
            newtonRaphsonIterate = function (aX, aGuessT) {
                var i = 0,
                    currentSlope = 0.0,
                    currentX;
                
                for (; i < NEWTON_ITERATIONS; ++i) {
                    currentSlope = getSlope(aGuessT, mX1, mX2);
                    
                    if (currentSlope === 0.0) {
                        return aGuessT;
                    }
                    
                    currentX = calcBezier(aGuessT, mX1, mX2) - aX;
                    aGuessT -= currentX / currentSlope;
                }
                
                return aGuessT;
            },
            
            
            calcSampleValues = function () {
                for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
                    sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
                }
            },
            
            
            getTForX = function (aX) {
                var intervalStart = 0.0,
                    currentSample = 1,
                    lastSample = K_SPLINE_TABLE_SIZE - 1,
                    dist = 0.0,
                    guessForT = 0.0,
                    initialSlope = 0.0;
                    
                for (; currentSample != lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
                    intervalStart += K_SAMPLE_STEP_SIZE;
                }
                
                --currentSample;
                
                dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample+1] - sampleValues[currentSample]);
                guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;
                
                initialSlope = getSlope(guessForT, mX1, mX2);
                
                // If slope is greater than min
                if (initialSlope >= NEWTON_MIN_SLOPE) {
                    return newtonRaphsonIterate(aX, guessForT);
                // Slope is equal to min
                } else if (initialSlope === 0.0) {
                    return guessForT;
                // Slope is less than min
                } else {
                    return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
                }
            },
            
            precompute = function () {
                _precomputed = true;
                if (mX1 != mY1 || mX2 != mY2) {
                    calcSampleValues();
                }
            },
            
            /*
                Generated function
                
                Returns value 0-1 based on X
            */
            f = function (aX) {
                var returnValue;

                if (!_precomputed) {
                    precompute();
                }
                
                // If linear gradient, return X as T
                if (mX1 === mY1 && mX2 === mY2) {
                    returnValue = aX;
                    
                // If at start, return 0
                } else if (aX === 0) {
                    returnValue = 0;
                    
                // If at end, return 1
                } else if (aX === 1) {
                    returnValue = 1;

                } else {
                    returnValue = calcBezier(getTForX(aX), mY1, mY2);
                }
                
                return returnValue;
            };
            
            return f;
    };

exports = Bezier;
return exports;
})()),

    /*
        Mirror easing
        
        Mirrors the provided easing function, used here for mirroring an
        easeIn into an easeInOut
        
        @param [number]: Progress, from 0 - 1, of current shift
        @param [function]: The easing function to mirror
        @returns [number]: The easing-adjusted delta
    */
    mirrorEasing = function (progress, method) {
        return (progress <= 0.5) ? method(2 * progress) / 2 : (2 - method(2 * (1 - progress))) / 2;
    },
            
    /*
        Reverse easing
        
        Reverses the output of the provided easing function, used for flipping easeIn
        curve to an easeOut.
        
        @param [number]: Progress, from 0 - 1, of current shift
        @param [function]: The easing function to reverse
        @returns [number]: The easing-adjusted delta
    */
    reverseEasing = function (progress, method) {
        return 1 - method(1 - progress);
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
        easingFunction = function (progress) {
            return method(progress);
        };

        easingFunction.in = function (progress) {
            return method(progress);
        };

        easingFunction.out = function (progress) {
            return reverseEasing(progress, method);
        };

        easingFunction.inOut = function (progress) {
            return mirrorEasing(progress, method);
        };
    }

    return easingFunction;
};

exports = Easing;
return exports;
})();
var __small$_44 = (function() {
var exports = {};
var splitCommaDelimited = ((function() {
var exports = {};
exports = function (value) {
    return (typeof value === 'string') ? value.split(/,\s*/) : [value];
};
return exports;
})()),
    functionBreak = ((function() {
var exports = {};
exports = function (value) {
    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
};
return exports;
})());

exports = function (value, terms) {
    var splitValue = {},
        numTerms = terms.length,
        colors = splitCommaDelimited(functionBreak(value)),
        i = 0;

    for (; i < numTerms; i++) {
        splitValue[terms[i]] = (colors[i] !== undefined) ? colors[i] : 1;
    }

    return splitValue;
};
return exports;
})();
var __small$_12 = (function() {
var exports = {};
"use strict";

var createDelimited = __small$_45,
    getColorValues = __small$_44,
    functionCreate = __small$_46,
    defaultProps = __small$_47,
    terms = __small$_48.hsl;

exports = {

    defaultProps: {
        Hue: {
            min: 0,
            max: 360
        },
        Saturation: defaultProps.percent,
        Lightness: defaultProps.percent,
        Alpha: defaultProps.opacity
    },

    test: function (value) {
        return (value && value.indexOf('hsl') > -1);
    },
    
    split: function (value) {
        return getColorValues(value, terms);
    },

    combine: function (values) {
        return functionCreate(createDelimited(values, terms, ', ', 2), 'hsla');
    }
};
return exports;
})();
var __small$_13 = (function() {
var exports = {};
"use strict";

var createDelimited = __small$_45,
    getColorValues = __small$_44,
    functionCreate = __small$_46,
    defaultProps = __small$_47,
    colorDefaults = defaultProps.color,
    terms = __small$_48.colors;

exports = {

    defaultProps: {
        Red: colorDefaults,
        Green: colorDefaults,
        Blue: colorDefaults,
        Alpha: defaultProps.opacity
    },

    test: function (value) {
        return (value && value.indexOf('rgb') > -1);
    },
    
    split: function (value) {
        return getColorValues(value, terms);
    },

    combine: function (values) {
        return functionCreate(createDelimited(values, terms, ', ', 2), 'rgba');
    }
};
return exports;
})();
var __small$_14 = (function() {
var exports = {};
"use strict";

var rgb = __small$_13;

exports = {

    defaultProps: rgb.defaultProps,

    test: function (value) {
        return (value && value.indexOf('#') > -1);
    },
    
    split: function (value) {
        var r, g, b;

        // If we have 6 characters, ie #FF0000
        if (value.length > 4) {
            r = value.substr(1, 2);
            g = value.substr(3, 2);
            b = value.substr(5, 2);

        // Or we have 3 characters, ie #F00
        } else {
            r = value.substr(1, 1);
            g = value.substr(2, 1);
            b = value.substr(3, 1);
            r += r;
            g += g;
            b += b;
        }

        return {
            Red: parseInt(r, 16),
            Green: parseInt(g, 16),
            Blue: parseInt(b, 16),
            Alpha: 1
        };
    },

    combine: function (values) {
        return rgb.combine(values);
    }
};
return exports;
})();
var __small$_15 = (function() {
var exports = {};
"use strict";

var utils = __small$_33,
    rgb = __small$_13,
    hsl = __small$_12,
    hex = __small$_14,
    supported = [rgb, hsl, hex],
    numSupported = 3,

    runSupported = function (method, value) {
        for (var i = 0; i < numSupported; i++) {
            if (supported[i].test(value)) {
                return supported[i][method](value);
            }
        }
    };

exports = {

    defaultProps: utils.merge(rgb.defaultProps, hsl.defaultProps),

    test: function (value) {
        return rgb.test(value) || hex.test(value) || hsl.test(value);
    },

    split: function (value) {
        return runSupported('split', value);
    },

    combine: function (values) {
        return (values.Red) ? rgb.combine(values) : hsl.combine(values);
    }
};
return exports;
})();
"use strict";

var popmotion = ((function() {
var exports = {};
var __small$_27 = (function() {
var exports = {};
"use strict";

var ModManager = __small$_55,
    valueTypeManager = new ModManager();

valueTypeManager.defaultProps = function (type, key) {
    var valueType = this[type],
        defaultProps = (valueType.defaultProps) ? valueType.defaultProps[key] || valueType.defaultProps : {};

    return defaultProps;
};

valueTypeManager.test = function (value) {
    var type = false;

    this.each(function (key, mod) {
        if (mod.test && mod.test(value)) {
            type = key;
        }
    });

    return type;
};

exports = valueTypeManager;
return exports;
})();
var __small$_56 = (function() {
var exports = {};
"use strict";

/*
	Generate method iterator
	
	Takes a method name and returns a function that will
	loop over all the Elements in a group and fire that
	method with those properties
	
	@param [string]: Name of method
*/
exports = function (method) {
	return function () {
        var numElements = this.elements.length,
            i = 0,
			isGetter = false,
			getterArray = [],
			actor,
			actorReturn;

		for (; i < numElements; i++) {
			actor = this.elements[i];
			actorReturn = actor[method].apply(actor, arguments);

			if (actorReturn != actor) {
    			isGetter = true;
    			getterArray.push(actorReturn);
			}
		}
		
		return (isGetter) ? getterArray : this;
	};
};

return exports;
})();
var __small$_23 = (function() {
var exports = {};
"use strict";

var Actor,
    ActorCollection,
    utils = __small$_33,
    generateMethodIterator = __small$_56,
    genericActionProps = ((function() {
var exports = {};
exports = {
    
    // [number]: Delay this action by x ms
    delay: 0,
    
    // [function]: Callback when Action process starts
    onStart: undefined,
    
    // [function]: Callback when any value changes
    onChange: undefined,
    
    // [function]: Callback every frame
    onFrame: undefined,
    
    // [function]: Callback when Action process ends
    onEnd: undefined

};
return exports;
})()),
    genericValueProps = ((function() {
var exports = {};
exports = {

    // [number]: Current target value
    to: undefined,

    // [number]: Maximum permitted value during .track and .run
    min: undefined,
    
    // [number]: Minimum permitted value during .track and .run
    max: undefined,
    
    // [number]: Origin
    origin: 0,
    
    // [boolean]: Set to true when both min and max detected
    hasRange: false,

    // [boolean]: Round output if true
    round: false,

    // [string]: Name of value to listen to
    link: undefined
};
return exports;
})()),
    genericParse = __small$_41,

    ModManager = __small$_55,

    actionManager = new ModManager();
/*
    Add module to ActionManager

    Creates a new Action for Actors
*/
actionManager.extend = function (name, mod) {
    var methodName = '',
        parse;

    /*
        Generate new method for Actors if module doesn't have a
        surpressMethod flag and Actor doesn't already have a
        method with that name
    */
    if (!mod.surpressMethod && !Actor.prototype[name]) {
        parse = mod.parse || genericParse;

        Actor.prototype[name] = function () {
            this.action = name;
            this.set(parse.apply(this, arguments));

            return this.start();
        };

        ActorCollection.prototype[name] = generateMethodIterator(name);
    }

    // If module has methods to add to Actor.prototype
    if (mod.actorMethods) {
        for (methodName in mod.actorMethods) {
            if (mod.actorMethods.hasOwnProperty(methodName)) {
                Actor.prototype[methodName] = mod.actorMethods[methodName];
                ActorCollection.prototype[methodName] = generateMethodIterator(methodName);
            }
        }
    }

    // Merge action props with defaults
    mod.actionDefaults = mod.actionDefaults ? utils.merge(genericActionProps, mod.actionDefaults) : genericActionProps;

    // Merge value props with defaults
    mod.valueDefaults = mod.valueDefaults ? utils.merge(genericValueProps, mod.valueDefaults) : genericValueProps;

    // Call parent extend method
    ModManager.prototype.extend.call(this, name, mod);
};

actionManager.setActor = function (actor) {
    Actor = actor;
};

actionManager.setActorCollection = function (actorCollection) {
    ActorCollection = actorCollection;
};

exports = actionManager;

return exports;
})();
var __small$_26 = (function() {
var exports = {};
"use strict";

var getterSetter = ((function() {
var exports = {};
/*
    Multi-var getter/setter

    @param [object || string]: Name of value to get/set
    @param [string || number] (optional): Single property to set 
    @param [function]: Getter
    @param [function]: Setter
*/
exports = function (opts, prop, getter, setter) {
    var typeOfOpts = typeof opts;

    // Set single, if this is a string and we have a property
    if (typeOfOpts == 'string' && prop) {
        setter.call(this, opts, prop);

    // Set multi, if we have an object
    } else if (typeOfOpts == 'object') {
        for (var key in opts) {
            if (opts.hasOwnProperty(key)) {
                setter.call(this, key, opts[key]);
            }
        }

    // Or get, if we have a string and no props
    } else {
        return getter.call(this, opts);
    }

    return this;
};
return exports;
})()),
    generateMethodIterator = __small$_56,
    ModManager = __small$_55,
    routeManager = new ModManager(),
    Actor,
    ActorCollection;

routeManager.extend = function (name, mod) {
    // Generate getter/setter
    if (mod.get && mod.set) {
        Actor.prototype[name] = function (key, value) {
            return getterSetter.call(this, key, value, mod.get, mod.set);
        };

        ActorCollection.prototype[name] = generateMethodIterator(name);
    }

    // Call parent extend method
    ModManager.prototype.extend.call(this, name, mod);
};

/*
    Shard function

    Run callback once for every value route

    @param [function]: Function to run for each route
    @param [object] (optional): Object containing keys of routes to check
*/
routeManager.shard = function (callback, validRoutes) {
    var key = '',
        route = '',
        routeIsValid = false,
        i = 0;

    for (; i < this._numKeys; i++) {
        key = this._keys[i];
        routeIsValid = (validRoutes && validRoutes.hasOwnProperty(key));
        route = routeIsValid ? validRoutes[key] : {};

        // If we've been given this route, or this is the default route ('values')
        if (routeIsValid || key === 'values') {
            callback(this[key], key, route);
        }
    }
};

routeManager.setActor = function (actor) {
    Actor = actor;
};

routeManager.setActorCollection = function (actorCollection) {
    ActorCollection = actorCollection;
};

exports = routeManager;
return exports;
})();
var __small$_31 = (function() {
var exports = {};
"use strict";

var manager = ((function() {
var exports = {};
"use strict";

var theLoop = ((function() {
var exports = {};
/*
    The loop
*/
"use strict";

var Timer = ((function() {
var exports = {};
"use strict";

var utils = __small$_33,

    maxElapsed = 33,
    Timer = function () {
        this.elapsed = 16.7;
        this.current = utils.currentTime();
        this.update();
    };

Timer.prototype = {
    update: function () {
        this.prev = this.current;
        this.current = utils.currentTime();
        this.elapsed = Math.min(this.current - this.prev, maxElapsed);

        return this.current;
    },

    getElapsed: function () {
        return this.elapsed;
    },
    
    clock: function () {
        this.current = utils.currentTime();
    }
};

exports = Timer;
return exports;
})()),
    tick = ((function() {
var exports = {};
"use strict";
/*
    requestAnimationFrame polyfill
    
    For IE8/9 Flinstones

    Taken from Paul Irish. We've stripped out cancelAnimationFrame checks because we don't fox with that
    
    http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
     
    requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
     
    MIT license
*/
var tick,
    lastTime = 0,
    hasWindow = (typeof window !== 'undefined');

if (!hasWindow) {
    // Load rAF shim
    tick = function (callback) {
        var currTime = new Date().getTime(),
            timeToCall = Math.max(0, 16 - (currTime - lastTime)),
            id = setTimeout(function () {
                callback(currTime + timeToCall);
            }, timeToCall);

        lastTime = currTime + timeToCall;
        
        return id;
    };  
    
} else {
    tick = window.requestAnimationFrame;
}

exports = tick;
return exports;
})()),
    Loop = function () {
        this.timer = new Timer();
    };
    
Loop.prototype = {
    
    /*
        [boolean]: Current status of animation loop
    */
    isRunning: false,
    
    /*
        Fire all active processes once per frame
    */
    frame: function () {
        var self = this;

        tick(function () {
            var framestamp = self.timer.update(), // Currently just measuring in ms - will look into hi-res timestamps
                isActive = self.callback.call(self.scope, framestamp, self.timer.getElapsed());

            if (isActive) {
                self.frame();
            } else {
                self.stop();
            }
        });
    },
    
    /*
        Start loop
    */
    start: function () {
        // Make sure we're not already running a loop
        if (!this.isRunning) {
            this.timer.clock();
            this.isRunning = true;
            this.frame();
        }
    },
    
    /*
        Stop the loop
    */
    stop: function () {
        this.isRunning = false;
    },
    
    /*
        Set the callback to run every frame
        
        @param [Object]: Execution context
        @param [function]: Callback to fire
    */
    setCallback: function (scope, callback) {
        this.scope = scope;
        this.callback = callback;
    }
 
};

exports = new Loop();
return exports;
})()),
    ProcessManager = function () {
        this.activeIds = [];
        this.activeProcesses = {};
        this.deactivateQueue = [];
        theLoop.setCallback(this, this.fireActive);
    };
    
ProcessManager.prototype = {
    
    /*
        [int]: Used for process ID
    */
    processCounter: 0,
    
    /*
        [int]: Number of active processes
    */
    activeCount: 0,
    
    /*
        Get the process with a given index
        
        @param [int]: Index of process
        @return [Process]
    */
    getProcess: function (i) {
        return this.activeProcesses[i];
    },
    
    /*
        Get number of active processes
        
        @return [int]: Number of active processes
    */
    getActiveCount: function () {
        return this.activeCount;
    },
    
    /*
        Get active tokens

        @return [array]: Active tokens
    */
    getActive: function () {
        return this.activeIds;
    },
    
    /*
        Get the length of the deactivate queue
        
        @return [int]: Length of queue
    */
    getQueueLength: function () {
        return this.deactivateQueue.length;
    },
    
    /*
        Fire all active processes
        
        @param [int]: Timestamp of executing frames
        @param [int]: Time since previous frame
        @return [boolean]: True if active processes found
    */
    fireActive: function (framestamp, elapsed) {
        var process,
            activeCount = 0,
            activeIds = [],
            i = 0;

        // Purge and check active count before execution
        this.purge();
        activeCount = this.getActiveCount();
        activeIds = this.getActive();

        // Loop through active processes and fire callback
        for (; i < activeCount; i++) {
            process = this.getProcess(activeIds[i]);

            if (process) {
                process.fire(framestamp, elapsed);
            }
        }

        // Repurge and recheck active count after execution
        this.purge();
        activeCount = this.getActiveCount();

        // Return true if we still have active processes, or false if none
        return activeCount ? true : false;
    },
    
    /*
        Register a new process
        
        @param [Process]
        @return [int]: Index of process to be used as ID
    */
    register: function () {
        return this.processCounter++;
    },
    
    /*
        Activate a process
        
        @param [int]: Index of active process
    */
    activate: function (process, i) {
        var queueIndex = this.deactivateQueue.indexOf(i),
            isQueued = (queueIndex > -1),
            isActive = (this.activeIds.indexOf(i) > -1);

        // Remove from deactivateQueue if in there
        if (isQueued) {
            this.deactivateQueue.splice(queueIndex, 1);
        }

        // Add to active processes array if not already in there
        if (!isActive) {
            this.activeIds.push(i);
            this.activeProcesses[i] = process;
            this.activeCount++;
            theLoop.start();
        }
    },
    
    /*
        Deactivate a process
        
        @param [int]: Index of process to add to deactivate queue
    */
    deactivate: function (i) {
        this.deactivateQueue.push(i);
    },
    
    /*
        Purge the deactivate queue
    */
    purge: function () {
        var queueLength = this.getQueueLength(),
            activeIdIndex = 0,
            idToDelete = 0;

        while (queueLength--) {
            idToDelete = this.deactivateQueue[queueLength];
            activeIdIndex = this.activeIds.indexOf(idToDelete);

            // If process in active list deactivate
            if (activeIdIndex > -1) {
                this.activeIds.splice(activeIdIndex, 1);
                this.activeCount--;
                delete this.activeProcesses[idToDelete];
            }
        }
        
        this.deactivateQueue = [];
    }
    
};

exports = new ProcessManager();
return exports;
})()),

    /*
        Process constructor
        
        Syntax
            var process = new Process(scope, callback);
            var process = new Process(callback);
    */
    Process = function (scope, callback) {
        var hasScope = (callback !== undefined);

        this.callback = hasScope ? callback : scope;
        this.scope = hasScope ? scope : this;
        this.id = manager.register();

        // [boolean]: Is this process currently active?
        this.isActive = false;
    };

Process.prototype = {
    /*
        Fire callback
        
        @param [timestamp]: Timestamp of currently-executed frame
        @param [number]: Time since last frame
    */
    fire: function (timestamp, elapsed) {
        this.callback.call(this.scope, timestamp, elapsed);
        
        // If we're running at an interval, deactivate again
        if (this.isInterval) {
            this.deactivate();
        }

        return this;
    },
    
    /*
        Start process
        
        @param [int]: Duration of process in ms, 0 if indefinite
        @return [this]
    */
    start: function (duration) {
        var self = this;

        this.reset();
        this.activate();
        
        if (duration) {
            this.stopTimer = setTimeout(function () {
                self.stop();
            }, duration);
            
            this.isStopTimerActive = true;
        }

        return this;
    },
    
    /*
        Stop process
        
        @return [this]
    */
    stop: function () {
        this.reset();
        this.deactivate();
        
        return this;
    },
    
    /*
        Activate process
        
        @return [this]
    */
    activate: function () {
        this.isActive = true;
        manager.activate(this, this.id);

        return this;
    },
    
    /*
        Deactivate process
        
        @return [this]
    */
    deactivate: function () {
        this.isActive = false;
        manager.deactivate(this.id);
        
        return this;
    },
    
    /*
        Fire process every x ms
        
        @param [int]: Number of ms to wait between refiring process.
        @return [this]
    */
    every: function (interval) {
        var self = this;

        this.reset();

        this.isInterval = true;

        this.intervalTimer = setInterval(function () {
            self.activate();
        }, interval);
        
        this.isIntervalTimeActive = true;
        
        return this;
    },
    
    /*
        Clear all timers
        
        @param 
    */
    reset: function () {
        this.isInterval = false;
        
        if (this.isStopTimerActive) {
            clearTimeout(this.stopTimer);
        }
        
        if (this.isIntervalTimeActive) {
            clearInterval(this.intervalTimer);
        }
        
        return this;
    }
};

exports = Process;
return exports;
})();
var __small$_28 = (function() {
var exports = {};
"use strict";

var Process = __small$_31,
    Queue = ((function() {
var exports = {};
"use strict";

var Queue = function () {
        this.clear();
    };

Queue.prototype = {
    
    /*
        Add a set of arguments to queue
    */
    add: function () {
        this.queue.push([].slice.call(arguments));
    },
    
    /*
        Get next set of arguments from queue
    */
    next: function (direction) {
        var queue = this.queue,
            returnVal = false,
            index = this.index;
            
        direction = (arguments.length) ? direction : 1;
        
        // If our index is between 0 and the queue length, return that item
        if (index >= 0 && index < queue.length) {
            returnVal = queue[index];
            this.index = index + direction;
        
        // Or clear
        } else {
            this.clear();
        }
        
        return returnVal;
    },

    /*
        Replace queue with empty array
    */
    clear: function () {
        this.queue = [];
        this.index = 0;
    }
};

exports = Queue;
return exports;
})()),
    utils = __small$_33,
    update = ((function() {
var exports = {};
"use strict";

var actionManager = __small$_23,
    routeManager = __small$_26,
    valueTypeManager = __small$_27,
    calc = __small$_22,

    defaultRoute = 'values',

    update = function (framestamp, frameDuration) {
        var self = this,
            values = this.values,
            action = actionManager[this.action],
            valueAction = action,
            output = this.output,
            numActiveValues = this.order.length,
            numActiveParents = this.parentOrder.length,
            key = '',
            value = {},
            updatedValue = 0,
            i = 0;

        // Update Input and attach new values to output
        if (this.input) {
            output.input = this.input.onFrame(framestamp);
        }

        // Update Action input
        if (action.onFrameStart && action.onFrameStart.call(this, frameDuration) === false) {
            return false;
        }

        // Fire onStart if first frame
        if (this.firstFrame) {
            routeManager.shard(function (route) {
                if (route.onStart) {
                    route.onStart.call(self, values);
                }
            }, output);
        }

        // Create default route output if not present
        output[defaultRoute] = output[defaultRoute] || {};

        // Update values
        for (; i < numActiveValues; i++) {
            // Get value and key
            key = this.order[i];
            value = values[key];

            // Load value-specific action
            valueAction = value.link ? actionManager.link : action;

            // Calculate new value
            updatedValue = valueAction.process.call(this, value, key, frameDuration);

            // Limit if range
            if (valueAction.limit) {
                updatedValue = valueAction.limit(updatedValue, value);
            }

            // Round value if round set to true
            if (value.round) {
                updatedValue = Math.round(updatedValue);
            }

            // Update change from previous frame
            value.frameChange = updatedValue - value.current;

            // Calculate velocity if Action hasn't already
            if (!valueAction.calculatesVelocity) {
                value.velocity = calc.speedPerSecond(value.frameChange, frameDuration);
            }

            // Update current speed
            value.speed = Math.abs(value.velocity);

            // Check if changed and update
            if (value.current != updatedValue) {
                this.hasChanged = true;
            }

            // Set current
            this.values[key].current = updatedValue;

            // Put value in default route output
            output[defaultRoute][key] = (value.unit) ? updatedValue + value.unit : updatedValue;

            // Put in specific root if not a parent
            if (!value.parent) {
                output[value.route][value.name] = output[defaultRoute][key];

            // Or add to parent output, to be combined
            } else {
                output[value.parent] = output[value.parent] || {};
                output[value.parent][value.propName] = output[defaultRoute][key];
            }
        }

        // Update parent values from calculated children
        for (i = 0; i < numActiveParents; i++) {
            key = this.parentOrder[i];
            value = this.values[key];

            // Update parent value current property
            value.current = valueTypeManager[value.type].combine(output[key]);

            // Update output
            output[value.route][value.name] = output[defaultRoute][key] = value.current;
        }

        // Run onFrame and onChange for every output
        routeManager.shard(function (route, routeName, routeOutput) {

            // Fire onFrame every frame
            if (route.onFrame) {
                route.onFrame.call(self, routeOutput);
            }

            // Fire onChanged if any value has changed
            if (self.hasChanged && route.onChange || self.firstFrame && route.onChange) {
                route.onChange.call(self, routeOutput);
            }

        }, output);

        // Fire onEnd if this Action has ended
        if (this.isActive && action.hasEnded && action.hasEnded.call(this, this.hasChanged)) {
            this.isActive = false;

            routeManager.shard(function (route, routeName, routeOutput) {
                if (route.onEnd) {
                    route.onEnd.call(self, routeOutput);
                }
            }, output);

            // If is a play action, and is not active, check next action
            if (!this.isActive && this.action === 'play' && this.next) {
                this.next();
            }
        } else {
            this.hasChanged = false;
        }

        this.firstFrame = false;
        this.framestamp = framestamp;
    };

exports = update;
return exports;
})()),
    valueOps = ((function() {
var exports = {};
"use strict";

var calc = __small$_22,
    utils = __small$_33,
    isNum = utils.isNum,
    actionsManager = __small$_23,
    valueTypesManager = __small$_27,
    routeManager = __small$_26,

    numericalValues = ['current', 'to', 'init', 'min', 'max', 'velocity', 'friction', 'spring'],
    numNumericalValues = numericalValues.length,

    checkNumericalValue = function (name) {
        return (numericalValues.indexOf(name) > -1);
    };

exports = {


    /*
        Perform operation on set of values
        
        @parma [string]: Name of operation
        @param [object]: Value object
    */
    all: function (op, values) {
        var key = '';

        for (key in values) {
            if (values.hasOwnProperty(key)) {
                this[op](values[key]);
            }
        }

        return this;
    },

    /*
        Reset the value current to its origin

        @param [object]: Value object
    */
    reset: function (value) {
        this.retarget(value);
        value.current = value.origin;
    },

    /*
        Set value origin property to current value
        
        @param [object]: Value object
    */
    resetOrigin: function (value) {
        value.origin = value.current;
    },

    /*
        Set value to property back to target
        
        @param [object]: Value object
    */
    retarget: function (value) {
        value.to = value.target;
    },

    /*
        Swap value to and origin property
        
        @param [object]: Value object
    */
    flip: function (value) {
        var newOrigin = (value.target !== undefined) ? value.target : value.current;

        value.target = value.to = value.origin;
        value.origin = newOrigin;
    },

    /*
        Returns an initial value state

        @param [number] (optional): Initial current
        @return [object]: Default value state
    */
    initialState: function (start, route) {
        return {
            // [number]: Current value
            current: start || 0,
            
            // [number]: Change per second
            speed: 0,
            
            // [number]: Change per second plus direction (ie can be negative)
            velocity: 0,
            
            // [number]: Amount value has changed in the most recent frame
            frameChange: 0,

            route: route
        };
    },

    /*
        Split value into sub-values

        @param [string]: Name of value
        @param [object]: Base value properties
        @param [Elememt]
    */
    split: function (name, value, actor, valueType) {
        var splitValues = {},
            splitProperty = {},
            propertyName = '',
            key = '',
            i = 0;

        for (; i < numNumericalValues; i++) {
            propertyName = numericalValues[i];

            if (value.hasOwnProperty(propertyName)) {
                if (utils.isFunc(value[propertyName]) && checkNumericalValue(propertyName)) {
                    value[propertyName] = value[propertyName].call(actor);
                }

                splitProperty = valueType.split(value[propertyName]);

                // Assign properties to each new value
                for (key in splitProperty) {
                    if (splitProperty.hasOwnProperty(key)) {
                        // Create new value if it doesn't exist
                        splitValues[key] = splitValues[key] || utils.copy(valueTypesManager.defaultProps(value.type, key));
                        splitValues[key][propertyName] = splitProperty[key];
                    }
                }
            }
        }

        return splitValues;
    },

    /*
        Split value into number and unit, set unit to value if present

        @param [string]: Property to split
        @param [object]: Value object to save unit to
    */
    splitUnit: function (property, value) {
        var returnVal = property,
            splitUnitValue;

        // Check for unit property
        if (utils.isString(property)) {
            splitUnitValue = utils.splitValUnit(property);

            if (!isNaN(splitUnitValue.value)) {
                returnVal = splitUnitValue.value;
                value.unit = splitUnitValue.unit;
            }
        }

        return returnVal;
    },

    /*
        Resolve property

        @param [string]: Name of value
        @param [string || number || function]: Property
        @param [object]: Parent value
        @param [actor]: Parent actor
    */
    resolve: function (name, property, value, actor) {
        var currentValue = value.current || 0,
            isNumericalValue = checkNumericalValue(name);

        // If this is a function, resolve
        if (utils.isFunc(property) && isNumericalValue) {
            property = property.call(actor, currentValue);
        }

        // If this is a string, check for relative values and units
        if (utils.isString(property)) {
            // If this is a relative value (ie '+=10')
            if (property.indexOf('=') > 0) {
                property = calc.relativeValue(currentValue, property);
            }

            // Check for unit if should be numerical property
            if (isNumericalValue) {
                this.splitUnit(property, value);
            }
        }

        // If this is a numerical value, coerce
        if (isNumericalValue) {
            property = parseFloat(property);
        }

        return property;
    },

    /*
        Process new values
    */
    preprocess: function (values, actor, route, suffix, defaultValueProp) {
        var preprocessedValues = {},
            value = {},
            splitValue = {},
            childValue = {},
            type = {},
            existingValue = {},
            isValueObj = false,
            key = '',
            namespacedKey = '',
            propKey = '';

        defaultValueProp = defaultValueProp || 'current';

        for (key in values) {
            if (values.hasOwnProperty(key)) {

                isValueObj = utils.isObj(values[key]);
                value = (isValueObj) ? values[key] : {};
                namespacedKey = key + suffix;
                existingValue = actor.values[namespacedKey];

                value.name = key;

                if (!isValueObj) {
                    value[defaultValueProp] = values[key];
                }

                // If this value doesn't have a special type, check for one
                if (!value.type) {
                    // Check if existing value with this key
                    if (existingValue && existingValue.type) {
                        value.type = existingValue.type;
                    
                    // Or if this route has a typemap
                    } else if (route.typeMap && route.typeMap[key]) {
                        value.type = route.typeMap[key];

                    // Otherwise, check by running tests if this is a string
                    } else if (utils.isString(value[defaultValueProp])) {
                        value.type = valueTypesManager.test(value[defaultValueProp]);
                    }
                }

                // Set value
                preprocessedValues[namespacedKey] = value;

                // If process has type, split or assign default props
                if (value.type) {
                    type = valueTypesManager[value.type];

                    // If this has a splitter function, split
                    if (type.split) {
                        value.children = {};
                        splitValue = this.split(key, value, actor, type);

                        for (propKey in splitValue) {
                            if (splitValue.hasOwnProperty(propKey)) {
                                childValue = utils.merge(value, splitValue[propKey]);
                                childValue.parent = key + suffix;
                                childValue.name = key;
                                childValue.propName = propKey;
                                delete childValue.type;
                                delete childValue.children;

                                preprocessedValues[key + propKey + suffix] = childValue;
                            }
                        }
                    } else {
                        preprocessedValues[namespacedKey] = utils.merge(valueTypesManager.defaultProps(value.type, key), value);
                    }
                }
            }
        }

        return preprocessedValues;
    },

    /*
        Process new values
    */
    process: function (values, actor, namespace, defaultValueProp) {
        var route = routeManager[namespace],
            namespaceSuffix = (namespace === 'values') ? '' : '.' + namespace,
            preprocessedValues = this.preprocess(values, actor, route, namespaceSuffix, defaultValueProp),
            key = '',
            propKey = '',
            preprocessedValue = {},
            thisValue = {},
            defaultProps = {},
            hasChildren = false,
            prop;

        for (key in preprocessedValues) {
            if (preprocessedValues.hasOwnProperty(key)) {
                preprocessedValue = preprocessedValues[key];
                thisValue = actor.values[key] || this.initialState(this.resolve('init', preprocessedValue.init, {}, actor), namespace);
                hasChildren = (preprocessedValue.children !== undefined);
                thisValue.action = preprocessedValue.link ? 'link' : actor.action;
                defaultProps = actionsManager[thisValue.action].valueDefaults;

                // Inherit properties from Actor
                for (propKey in defaultProps) {
                    if (defaultProps.hasOwnProperty(propKey)) {
                        thisValue[propKey] = (actor.hasOwnProperty(propKey)) ? actor[propKey] : defaultProps[propKey];
                    }
                }

                // Loop through all properties and resolve
                for (propKey in preprocessedValue) {
                    if (preprocessedValue.hasOwnProperty(propKey)) {
                        prop = preprocessedValue[propKey];
                        // If property is *not* undefined or a number, resolve
                        if (prop !== undefined && !isNum(prop) && !hasChildren) {
                            prop = this.resolve(propKey, prop, thisValue, actor);
                        }

                        thisValue[propKey] = prop;
                        // Set internal target if this property is 'to'
                        if (propKey === 'to') {
                            thisValue.target = thisValue.to;
                        }
                    }
                }

                thisValue.origin = thisValue.current;
                thisValue.hasRange = (isNum(thisValue.min) && isNum(thisValue.max)) ? true  : false;

                actor.values[key] = thisValue;
                actor.updateOrder(key, utils.isString(thisValue.link), hasChildren);
            }
        }
    }
};
return exports;
})()),
    actionManager = __small$_23,
    routeManager = __small$_26,

    Actor = function (element) {
        this.element = element || false;
        this.values = {};
        this.output = {};
        this.queue = new Queue();
        this.process = new Process(this, update);

        this.clearOrder();
    };

Actor.prototype = {
    
    /*
        Set Action values and properties
        
        @param [object]: Element properties
        @param [string] (option): Name of default value property
    */
    set: function (props, defaultValueProp) {
        var self = this;

        // Reset Element properties and write new props
        this.clearOrder();
        this.resetProps();
        this.setProps(props);

        // Loop over routes and process value definitions
        routeManager.shard(function (route, routeName, values) {
            // Create output object for this route if none exists
            self.output[routeName] = self.output[routeName] || {};

            // Set values
            self.setValues(values, routeName, defaultValueProp);
        }, props);

        return this;
    },

    /*
        Start currently defined Action
    */
    start: function () {
        this.resetProgress();
        this.activate();
        
        if (this.action !== 'track' && this.input && this.input.stop) {
            this.input.stop();
        }

        return this;
    },

    /*
        Stop current Action
    */
    stop: function () {
        this.queue.clear();
        this.pause();
        return this;
    },

    /*
        Pause current Action
    */
    pause: function () {
        this.isActive = false;
        this.process.stop();
        return this;
    },

    /*
        Resume paused Action
    */
    resume: function () {
        this.framestamp = this.started = utils.currentTime();
        this.isActive = true;
        this.process.start();
        return this;
    },

    /*
        Toggle current Action
    */
    toggle: function () {
        if (this.isActive) {
            this.pause();
        } else {
            this.resume();
        }

        return this;
    },
    
    /*
        Activate Element Action
    */
    activate: function () {
        this.isActive = true;
        this.started = utils.currentTime() + this.delay;
        this.framestamp = this.started;
        this.firstFrame = true;

        this.process.start();
    },

    reset: function () {
        this.resetProgress();
        valueOps.all('reset', this.values);

        return this;
    },
    
    /*
        Reset Action progress
    */
    resetProgress: function () {
        this.elapsed = (this.playDirection === 1) ? 0 : this.duration;
        this.started = utils.currentTime();

        return this;
    },
    
    /*
        Loop through all values and create origin points
    */
    resetOrigins: function () {
        valueOps.all('resetOrigin', this.values);
        return this;
    },
    
    /*
        Reverse Action progress and values
    */
    reverse: function () {
        this.playDirection *= -1;
        valueOps.all('retarget', this.values);
        return this;
    },
    
    /*
        Swap value origins and to
    */
    flipValues: function () {
        this.elapsed = this.duration - this.elapsed;
        valueOps.all('flip', this.values);
        return this;
    },

    /*
        Set properties

        @param [object]: Properties to set
    */
    setProps: function (props) {
        var key = '';

        for (key in props) {
            // Set if this isn't a route
            if (props.hasOwnProperty(key) && !routeManager.hasOwnProperty(key)) {
                this[key] = props[key];
            }
        }
    },

    /*
        Reset properties to Action defaults
    */
    resetProps: function () {
        this.setProps(actionManager[this.action].actionDefaults);
        return this;
    },

    /*
        Set values

        @param [object || string || number]: Value
        @param [string] (optional): Name of route
        @param [string] (optional): Default property to set
    */
    setValues: function (values, namespace, defaultValueProp) {
        valueOps.process(values, this, namespace, defaultValueProp);
        return this;
    },
    
    /*
        Update order of value keys
        
        @param [string]: Key of value
        @param [boolean]: Whether to move value to back
    */
    updateOrder: function (key, moveToBack, hasChildren) {
        var order = !hasChildren ? this.order : this.parentOrder,
            position = order.indexOf(key);

        // If key isn't in list, or moveToBack is set to true, add key
        if (position === -1 || moveToBack) {
            order.push(key);

            // If key already exists, remove
            if (position !== -1) {
                order.splice(position, 1);
            }
        }

        return this;
    },

    /*
        Clear value key update order
    */
    clearOrder: function () {
        this.order = [];
        this.parentOrder = [];
        return this;
    },

    // [boolean]: Is this Element currently active?
    get isActive() {
        return this._isActive;
    },

    /*
        Set Element active status

        If active is being set to true, set hasChanged to true, too

        @param [boolean]: New active status
    */
    set isActive(status) {
        if (status === true) {
            this.hasChanged = status;
        }

        this._isActive = status;
    }
};

// Register Actor with actionManager, so when a new Action is set,
// We get a new method on Actor
actionManager.setActor(Actor);
routeManager.setActor(Actor);

exports = Actor;
return exports;
})();
var __small$_29 = (function() {
var exports = {};
"use strict";

var Actor = __small$_28,
    generateMethodIterator = __small$_56,
    utils = __small$_33,
    actionManager = __small$_23,
    routeManager = __small$_26,

    DEFAULT_STAGGER_EASE = 'linear',

    /*
        ActorCollection constructor

        @param [array]: Array of Actors, or valid Actor elements
    */
    ActorCollection = function (elements) {
        // Add initial elements
        this.clear();

        if (elements) {
            this.add(elements);
        }

        // Create stagger Actor
        this._stagger = new Actor();
    };

ActorCollection.prototype = {

    /*
        Clear current Actors
    */
    clear: function () {
        this.elements = [];
        return this;
    },

    /*
        Stagger the execution of Element methods

        @param [number || object]: Interval between Elements or stagger options
        @param [string || function]: Name of method to execute or a callback
        @args ... (optional): Optional arguments to send to callback
    */
    stagger: function (props, method) {
        var self = this,
            args = [].slice.call(arguments),
            numElements = this.elements.length,
            propsIsNum = utils.isNum(props),
            interval = propsIsNum ? props : props.interval,
            staggerProps = propsIsNum ? {} : props,
            i = -1,

            callback = utils.isString(method) ?
                function (actor) {
                    actor[method].apply(actor, args);
                } : method;

        args.splice(0, 2);

        staggerProps.values = {
            i: {
                current: 0,
                duration: interval * numElements,
                ease: propsIsNum ? DEFAULT_STAGGER_EASE : props.ease || DEFAULT_STAGGER_EASE,
                steps: numElements,
                round: true,
                to: numElements - 1
            }
        };

        staggerProps.onChange = function (output) {
            var newIndex = output.i,
                gapIndex = i + 1;

            // If our new index is only one more than the previous index, fire immedietly
            if (newIndex === i + 1) {
                callback(self.elements[gapIndex], gapIndex);

            // Or loop through the distance to fire all indecies. Increase delay.
            } else {
                for (; gapIndex <= newIndex; gapIndex++) {
                    callback(self.elements[gapIndex], gapIndex);
                }
            }

            i = newIndex;
        };

        this._stagger.play(staggerProps);

        return this;
    },

    /*
        Add a group of Actors to our Collection

        @param [array]: Array of Actors, or valid Actor elements
    */
    add: function (elements) {
        var numNewElements = elements.length,
            i = 0,
            newElement;

        for (; i < numNewElements; i++) {
            newElement = (elements[i] instanceof Actor) ? elements[i] : new Actor(elements[i]);
            this.elements.push(newElement);
        }

        return this;
    }
};

// Initialise ActorCollection methods
(function () {
    for (var method in Actor.prototype) {
        if (Actor.prototype.hasOwnProperty(method)) {
            ActorCollection.prototype[method] = generateMethodIterator(method);
        }
    }
})();

actionManager.setActorCollection(ActorCollection);
routeManager.setActorCollection(ActorCollection);

exports = ActorCollection;
return exports;
})();
"use strict";

var select = ((function() {
var exports = {};
"use strict";

var ActorCollection = __small$_29;

/*
    Create an ActorCollection based on a selection of DOM nodes

    @param [string || NodeList || jQuery object]:
        If string, treated as selector.
        If not, treated as preexisting NodeList || jQuery object.
*/
exports = function (selector) {
    var nodes = (typeof selector === 'string') ? document.querySelectorAll(selector) : selector,
        elements = [];

    // If jQuery selection, get array of Elements
    if (nodes.get) {
        elements = nodes.get();

    // Or convert NodeList to array
    } else if (nodes.length) {
        elements = [].slice.call(nodes);

    // Or if it's just an Element, put into array
    } else {
        elements.push(nodes);
    }

    return new ActorCollection(elements, { type: 'dom' });
};
return exports;
})()),
    actionManager = __small$_23,
    presetManager = __small$_25,
    routeManager = __small$_26,
    valueTypeManager = __small$_27,
    calc = __small$_22,

    Actor = __small$_28,
    ActorCollection = __small$_29,
    Input = __small$_30,
    Process = __small$_31,
    Easing = __small$_32,

    Popmotion = {

        Actor: Actor,

        ActorCollection: ActorCollection,

        Input: Input,

        Process: Process,

        Easing: Easing,

        select: function (items) {
            return select(items);
        },

        addAction: function () {
            actionManager.extend.apply(actionManager, arguments);
            return this;
        },

        addPreset: function () {
            presetManager.extend.apply(presetManager, arguments);
            return this;
        },

        addValueType: function () {
            valueTypeManager.extend.apply(valueTypeManager, arguments);
            return this;
        },

        addRoute: function () {
            routeManager.extend.apply(routeManager, arguments);
            return this;
        },

        calc: calc
    };

exports = Popmotion;
return exports;
})());

popmotion
    /*
        Core route
    */
    .addRoute('values', ((function() {
var exports = {};
/*
    Values route (Redshift default)
    
    Handles raw values and outputs to user-defined callbacks
*/
"use strict";

var valuesRoute = {},

    fireCallback = function (name, output, actor) {
        if (actor[name]) {
            actor[name].call(actor, output);
        }
    };

['onStart', 'onFrame', 'onChange', 'onEnd'].forEach(function (key) {
    valuesRoute[key] = function (output) {
        fireCallback(key, output, this);
    };
});

exports = valuesRoute;
return exports;
})()))
    /*
        Core Actions
    */
    .addAction('play', ((function() {
var exports = {};
/*
    Play action
    
    Translate numbers for a set amount of time, applying easing if defined
*/
"use strict";

var calc = __small$_22,
    utils = __small$_33,
    presetEasing = ((function() {
var exports = {};
/*
    Easing functions
    ----------------------------------------
    
    Generates and provides easing functions based on baseFunction definitions
    
    A call to easingFunction.get('functionName') returns a function that can be passed:
        @param [number]: Progress 0-1
        @param [number] (optional): Amp modifier, only accepted in some easing functions
                                    and is used to adjust overall strength
        @return [number]: Eased progress
        
    We can generate new functions by sending an easing function through easingFunction.extend(name, method).
    Which will make nameIn, nameOut and nameInOut functions available to use.
        
    Easing functions from Robert Penner
    http://www.robertpenner.com/easing/
        
    Bezier curve interpretor created from Gaëtan Renaudeau's original BezierEasing  
    https://github.com/gre/bezier-easing/blob/master/index.js  
    https://github.com/gre/bezier-easing/blob/master/LICENSE
*/
"use strict";

var Easing = __small$_32,
    easingFunction,
    
    // Generate easing function with provided power
    generatePowerEasing = function (power) {
        return function (progress) {
            return Math.pow(progress, power);
        };
    },

    /*
        Each of these base functions is an easeIn
        
        On init, we use EasingFunction.mirror and .reverse to generate easeInOut and
        easeOut functions respectively.
    */
    baseEasing = {
        circ: function (progress) {
            return 1 - Math.sin(Math.acos(progress));
        },
        back: function (progress) {
            var strength = 1.5;

            return (progress * progress) * ((strength + 1) * progress - strength);
        }
    };

// Generate power easing easing
['ease', 'cubic', 'quart', 'quint'].forEach(function (easingName, i) {
    baseEasing[easingName] = generatePowerEasing(i + 2);
});

// Generate in/out/inOut variations
for (var key in baseEasing) {
    if (baseEasing.hasOwnProperty(key)) {
        easingFunction = new Easing(baseEasing[key]);
        baseEasing[key + 'In'] = easingFunction.in;
        baseEasing[key + 'Out'] = easingFunction.out;
        baseEasing[key + 'InOut'] = easingFunction.inOut;
    }
}

/*
    Linear easing adjustment
    
    The default easing method, not added with .extend as it has no Out or InOut
    variation.
    
    @param [number]: Progress, from 0-1
    @return [number]: Unadjusted progress
*/
baseEasing.linear = function (progress) {
    return progress;
};

exports = baseEasing;
return exports;
})()),

    /*
        Ease value within ranged parameters
        
        @param [number]: Progress between 0 and 1
        @param [number]: Value of 0 progress
        @param [number]: Value of 1 progress
        @param [string || function]: Name of preset easing
            to use or generated easing function
        @param [number]: Amplify progress out of specified range
        @return [number]: Value of eased progress in range
    */  
    ease = function (progress, from, to, ease, escapeAmp) {
        var progressLimited = calc.restricted(progress, 0, 1),
            easingFunction = utils.isString(ease) ? presetEasing[ease] : ease;

        if (progressLimited !== progress && escapeAmp) {
            ease = 'linear';
            progressLimited = progressLimited + ((progress - progressLimited) * escapeAmp);
        }

        return calc.valueEased(progressLimited, from, to, easingFunction);
    },

    playAction = {

        // [object] Default Action properties
        actionDefaults: ((function() {
var exports = {};
exports = {
    
    // [number]: Time of animation (if animating) in ms
    duration: 400,
    
    // [string]: Ease animation
    ease: 'easeInOut',
    
    // [number]: Multiply progress by this (.5 is half speed)
    dilate: 1,
    
    // [boolean || number]: Number of times to loop values, true for indefinite
    loop: false,
    
    // [boolean || number]: Number of times to yoyo values, true for indefinite
    yoyo: false,
    
    // [boolean || number]: Number of times to flip values, true for indefinite
    flip: false
};
return exports;
})()),

        // [object]: Default value properties
        valueDefaults: ((function() {
var exports = {};
exports = {
    // [number]: Duration of animation in ms
    duration: 400,
    
    // [number]: Duration of delay in ms
    delay: 0,
    
    // [number]: Stagger delay as factor of duration (ie 0.2 with duration of 1000ms = 200ms)
    stagger: 0,
    
    // [string]: Easing to apply
    ease: 'easeInOut',
    
    // [number]: Number of steps to execute animation
    steps: 0,
    
    // [string]: Tells Redshift when to step, at the start or end of a step. Other option is 'start' as per CSS spec
    stepDirection: 'end'
};
return exports;
})()),

        // [boolean] Prevent Redshift from autogenerating Element.prototype.play()
        surpressMethod: true,

        // [object] Methods to add to Actor.prototype
        actorMethods: ((function() {
var exports = {};
"use strict";

var parseArgs = ((function() {
var exports = {};
"use strict";

var presetManager = __small$_25,
    utils = __small$_33,

    parsePlaylist = function () {
        var args = [].slice.call(arguments),
            playlist = args[0].split(' '),
            playlistLength = playlist.length,
            props = presetManager.getDefined(playlist[0]),
            i = 1;

        // If we've got multiple playlists, loop through and add each to the queue
        if (playlistLength > 1) {
            for (; i < playlistLength; i++) {
                args.shift();
                args.unshift(playlist[i]);
                this.queue.add.apply(this.queue, args);
            }
        }

        return props;
    };

exports = function () {
    var args = [].slice.call(arguments),
        numArgs = args.length,
        // If first argument is a string, get base object from presets
        props = utils.isString(args[0]) ? parsePlaylist.apply(this, args) : args[0],
        i = 1;

    // Loop through arguments
    for (; i < numArgs; i++) {
        switch (typeof args[i]) {
            // Override properties
            case 'object':
                props = utils.merge(props, args[i]);
                break;
            // Duration
            case 'number':
                props.duration = args[i];
                break;
            // Easing
            case 'string':
                props.ease = args[i];
                break;
        }
    }

    // Default .play properties
    props.loopCount = props.yoyoCount = props.flipCount = 0;
    props.playDirection = 1;

    return props;
};

return exports;
})()),
    utils = __small$_33;

exports = {
    /*
        Play an animation

        @param [object || string]: Parameters or preset names
        @param [object]: Override parameters
    */
    play: function () {
        this.action = 'play';
        this.set(parseArgs.apply(this, arguments), 'to');
        return this.start();
    },

    /*
        Add arguments to queue
    */
    addToQueue: function () {
        this.queue.add.apply(this.queue, arguments);
        return this;
    },

    /*
        Check for next steps and perform, stop if not
    */
    next: function () {
        var nextSteps = [{
                key: 'loop',
                callback: this.reset
            }, {
                key: 'yoyo',
                callback: this.reverse
            }, {
                key: 'flip',
                callback: this.flipValues
            }],
            numSteps = nextSteps.length,
            hasNextStep = false,
            i = 0;

        for (; i < numSteps; ++i) {
            if (this.checkNextStep(nextSteps[i].key, nextSteps[i].callback)) {
                hasNextStep = true;
                break;
            }
        }

        if (!hasNextStep && !this.playNext()) {
            this.stop();
        } else {
            this.isActive = true;
        }

        return this;
    },

    /*
        Check next step
        
        @param [string]: Name of step ('yoyo' or 'loop')
        @param [callback]: Function to run if we take this step
    */
    checkNextStep: function (key, callback) {
        var COUNT = 'Count',
            stepTaken = false,
            step = this[key],
            count = this[key + COUNT],
            forever = (step === true);

        if (forever || utils.isNum(step)) {
            ++count;
            this[key + COUNT] = count;
            if (forever || count <= step) {
                callback.call(this);
                stepTaken = true;
            }
        }

        return stepTaken;
    },

    /*
        Next in queue
    */
    playNext: function () {
        var stepTaken = false,
            nextInQueue = this.queue.next(this.playDirection);

        if (utils.isArray(nextInQueue)) {
            this.set(parseArgs.apply(this, nextInQueue), 'to')
                .resetProgress();

            stepTaken = true;
        }

        return stepTaken;
    },

    seek: function (progress) {
        this.elapsed = this.duration * progress;

        if (!this.isActive) {
            this.process.fire();
        }
    }
};
return exports;
})()),

        /*
            Update Action elapsed time
            
            @param [object]: Action properties
            @param [number]: Timestamp of current frame
        */
        onFrameStart: function (frameDuration) {
            if (frameDuration) {
                this.elapsed += (frameDuration * this.dilate) * this.playDirection;
            }

            this.hasEnded = true;
        },

        /*
            Calculate progress of value based on time elapsed,
            value delay/duration/stagger properties

            @param [object]: Value state and properties
            @param [string]: Name of value being processed
            @return [number]: Calculated value
        */
        process: function (value, key) {
            var target = value.to,
                progressTarget = (this.playDirection === 1) ? 1 : 0,
                newValue = value.current,
                progress;

            // If this value has a to property, otherwise we just return current value
            if (target !== undefined) {
                progress = calc.restricted(calc.progress(this.elapsed - value.delay, value.duration) - value.stagger, 0, 1);

                // Mark Action as NOT ended if still in progress
                if (progress !== progressTarget) {
                    this.hasEnded = false;
                }

                // Step progress if we're stepping
                if (value.steps) {
                    progress = utils.stepProgress(progress, value.steps);
                }

                // Ease value
                newValue = ease(progress, value.origin, target, value.ease);
            }

            return newValue;
        },
        
        /*
            Return hasEnded property
            
            @return [boolean]: Have all Values hit 1 progress?
        */
        hasEnded: function () {
            return this.hasEnded;
        }
    };

exports = playAction;

return exports;
})()))
    .addAction('run', ((function() {
var exports = {};
/*
    Run physics simulation
*/
"use strict";

var calc = __small$_22,
    utils = __small$_33;

exports = {

    // [object] Default Action properties
    actionDefaults: ((function() {
var exports = {};
exports = {
    // [int]: Number of frames Action has been inactive
    inactiveFrames: 0,
    
    // [number]: Number of frames of no change before Action is declared inactive
    maxInactiveFrames: 3
};
return exports;
})()),

    // [object] Default value properties
    valueDefaults: ((function() {
var exports = {};
exports = {

    // [string]: Simulation to .run
    simulate: 'velocity',
    
    // [number]: Deceleration to apply to value, in units per second
    deceleration: 0,
    
    // [number]: Acceleration to apply to value, in units per second
    acceleration: 0,
    
    // [number]: Factor to multiply velocity by on bounce
    bounce: 0,
    
    // [number]: Spring strength during 'string'
    spring: 80,
    
    // [number]: Timeconstant of glide
    timeConstant: 395,
    
    // [number]: Stop simulation under this speed
    stopSpeed: 5,
    
    // [boolean]: Capture with spring physics on limit breach
    capture: false,
    
    // [number]: Friction to apply per frame
    friction: 0

};
return exports;
})()),

    // [boolean]: Tell Redshift this rubix calculates a new velocity itself
    calculatesVelocity: true,
    
    /*
        Simulate the Value's per-frame movement
        
        @param [Value]: Current value
        @param [string]: Key of current value
        @param [number]: Duration of frame in ms
        @return [number]: Calculated value
    */
    process: function (value, key, frameDuration) {
        var simulate = value.simulate,
            simulation = utils.isString(simulate) ? simulations[simulate] : simulate,
            newVelocity = simulation(value, duration, started);

        value.velocity = (Math.abs(newVelocity) >= value.stopSpeed) ? newVelocity : 0;
        return value.current + calc.speedPerFrame(value.velocity, frameDuration);
    },
    
    /*
        Has this action ended?
        
        Use a framecounter to see if Action has changed in the last x frames
        and declare ended if not
        
        @param [boolean]: Has Action changed?
        @return [boolean]: Has Action ended?
    */
    hasEnded: function (hasChanged) {
        this.inactiveFrames = hasChanged ? 0 : this.inactiveFrames + 1;
        return (this.inactiveFrames > this.maxInactiveFrames);
    },
    
    /*
        Limit output to value range, if any
        
        If velocity is at or more than range, and value has a bounce property,
        run the bounce simulation
        
        @param [number]: Calculated output
        @param [Value]: Current Value
        @return [number]: Limit-adjusted output
    */
    limit: function (output, value) {
        var isOutsideMax = (output >= value.max),
            isOutsideMin = (output <= value.min),
            isOutsideRange = isOutsideMax || isOutsideMin;
        
        if (isOutsideRange) {
            output = calc.restricted(output, value.min, value.max);

            if (value.bounce) {
                value.velocity = simulate('bounce', value);

            } else if (value.capture) {
                simulate('capture', value, isOutsideMax ? value.max : value.min);
            }
        }
        
        return output;
    }
};
return exports;
})()))
    .addAction('fire', ((function() {
var exports = {};
/*
    Return current value and immedietly end
*/
"use strict";

exports = {

   /*
        Process new value
        
        Return existing current
        
        @param [Value]: Current value
    */
    process: function (value) {
        return value.current;
    },
    
    /*
        Has Action ended?
        
        Returns true to end immedietly
        
        @return [boolean]: true
    */
    hasEnded: function () {
        return true;
    }
};
return exports;
})()))
    .addAction('track', ((function() {
var exports = {};
/*
    Track user input
*/
"use strict";

var calc = __small$_22,
    genericParser = __small$_41,
    Pointer = ((function() {
var exports = {};
"use strict";

var Input = __small$_30,
    currentPointer, // Sort this out for multitouch
    
    TOUCHMOVE = 'touchmove',
    MOUSEMOVE = 'mousemove',

    /*
        Convert event into point
        
        Scrape the x/y coordinates from the provided event
        
        @param [event]: Original pointer event
        @param [boolean]: True if touch event
        @return [object]: x/y coordinates of event
    */
    eventToPoint = function (event, isTouchEvent) {
        var touchChanged = isTouchEvent ? event.changedTouches[0] : false;
        
        return {
            x: touchChanged ? touchChanged.clientX : event.pageX,
            y: touchChanged ? touchChanged.clientY : event.pageY
        };
    },
    
    /*
        Get actual event
        
        Checks for jQuery's .originalEvent if present
        
        @param [event | jQuery event]
        @return [event]: The actual JS event  
    */
    getActualEvent = function (event) {
        return event.originalEvent || event;
    },

    
    /*
        Pointer constructor
    */
    Pointer = function (e) {
        var event = getActualEvent(e), // In case of jQuery event
            isTouch = (event.touches) ? true : false,
            startPoint = eventToPoint(event, isTouch);
        
        this.update(startPoint);
        this.isTouch = isTouch;
        this.bindEvents();
    },
    
    proto = Pointer.prototype = new Input();

/*
    Bind move event
*/
proto.bindEvents = function () {
    this.moveEvent = this.isTouch ? TOUCHMOVE : MOUSEMOVE;
    
    currentPointer = this;
    
    document.documentElement.addEventListener(this.moveEvent, this.onMove);
};

/*
    Unbind move event
*/
proto.unbindEvents = function () {
    document.documentElement.removeEventListener(this.moveEvent, this.onMove);
};

/*
    Pointer onMove event handler
    
    @param [event]: Pointer move event
*/
proto.onMove = function (e) {
    var newPoint = eventToPoint(e, currentPointer.isTouch);
    e = getActualEvent(e);
    e.preventDefault();
    currentPointer.update(newPoint);
};

proto.stop = function () {
    this.unbindEvents();
};

exports = Pointer;
return exports;
})());

exports = {

    valueDefaults: ((function() {
var exports = {};
exports = {
    amp: 1,

    // [number]: Factor of movement outside of maximum range (ie 0.5 will move half as much as 1)
    escapeAmp: 0
};
return exports;
})()),

    /*
        Parse Input arguments
    */
    parse: function () {
        var args = [].slice.call(arguments),
            input = args.pop(),
            props = genericParser.apply(this, args);

        // Create Pointer if this isn't an Input
        props.input = (!input.current) ? new Pointer(input) : input;

        // Set input origin if not user-defined
        if (!props.inputOrigin) {
            props.inputOrigin = props.input.get();
        }

        return props;
    },
    
    /*
        Update input offset
    */
    onFrameStart: function () {
        this.inputOffset = calc.offset(this.inputOrigin, this.input.current);
    },
        
    /*
        Move Value relative to Input movement
        
        @param [Value]: Current value
        @param [string]: Key of current value
        @return [number]: Calculated value
    */
    process: function (value, key) {
        return (this.inputOffset.hasOwnProperty(key)) ? value.origin + this.inputOffset[key] : value.current;
    },
    
    /*
        Has this Action ended? 
        
        @return [boolean]: False to make user manually finish .track()
    */
    hasEnded: function () {
        return false;
    }
};
return exports;
})()))
    .addAction('link', ((function() {
var exports = {};
/*
    Link the calculations of on Value into the output of another.
    
    Activate by setting the link property of one value with the name
    of either an Input property or another Value.
    
    Map the linked value with mapLink and provide a corressponding mapTo
    array to translate values from one into the other. For instance:
    
    {
        link: 'x',
        mapLink: [0, 100, 200],
        mapTo: [-100, 0, -100]
    }
    
    An output value of 50 from 'x' will translate to -50 for this Value
*/
"use strict";

var calc = __small$_22,

    STRING = 'string',
    
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
            lastLinkValue = (typeof mapLink[i - 1] === STRING) ? linkedValue[mapLink[i - 1]] : mapLink[i - 1];
            thisLinkValue = (typeof mapLink[i] === STRING) ? linkedValue[mapLink[i]] : mapLink[i];
            lastToValue = (typeof mapTo[i - 1] === STRING) ? toValue[mapTo[i - 1]] : mapTo[i - 1];
            thisToValue = (typeof mapTo[i] === STRING) ? toValue[mapTo[i]] : mapTo[i];

            // Check if we've gone past our calculated value, or if we're at the end of the array
            if (newValue < thisLinkValue || i === mapLength - 1) {
                newValue = calc.value(calc.restricted(calc.progress(newValue, lastLinkValue, thisLinkValue), 0, 1), lastToValue, thisToValue);
                break;
            }
        }
        
        return newValue;
    };

exports = {

    valueDefaults: ((function() {
var exports = {};
exports = {
    // [array]: Linear range of values (eg [-100, -50, 50, 100]) of linked value to map to .mapTo
    mapLink: undefined,
    
    // [array]: Non-linear range of values (eg [0, 1, 1, 0]) to map to .mapLink - here the linked value being 75 would result in a value of 0.5
    mapTo: undefined,
    
    // [number]: Factor of input movement to direct output
    amp: 1
};
return exports;
})()),

    surpressMethod: true,

    /*
        Process this value
        
        First check if this value exists as a Value, if not
        check within Input (if we have one)
            
        @param [Value]: Current value
        @param [string]: Key of current value
        @return [number]: Calculated value
    */
    process: function (value, key) {
        var values = this.values,
            newValue = value.current,
            linkKey = value.link,
            linkedValue = values[linkKey] ? values[linkKey] : {},
            inputOffset = this.inputOffset;

        // Then check values in Input
        if (inputOffset && inputOffset.hasOwnProperty(linkKey)) {
            newValue = value.origin + (inputOffset[linkKey] * value.amp);
            
        // First look at Action and check value isn't linking itself
        } else if (linkedValue.current !== undefined && key !== linkKey) {
            newValue = linkedValue.current;
        }

        // If we have mapLink and mapTo properties, translate the new value
        if (value.mapLink && value.mapTo) {
            newValue = findMappedValue(newValue, linkedValue, value, value.mapLink, value.mapTo);
        }

        return newValue;
    },
        
    limit: function (output, value) {
        return calc.restricted(output, value.min, value.max);
    }
};

return exports;
})()))

    /*
        Optional value type support
    */
    .addValueType({
        alpha: ((function() {
var exports = {};
exports = {
    defaultProps: {
        min: 0,
        max: 1
    }
};
return exports;
})()),
        angle: ((function() {
var exports = {};
exports = {
    defaultProps: {
        unit: 'deg'
    }
};
return exports;
})()),
        px: __small$_11,
        hsl: __small$_12,
        rgb: __small$_13,
        hex: __small$_14,
        color: __small$_15,
        positions: ((function() {
var exports = {};
"use strict";

var createDelimited = __small$_45,
    pxDefaults = __small$_11.defaultProps,
    splitSpaceDelimited = __small$_49,
    terms = __small$_48.positions;

exports = {

    defaultProps: pxDefaults,
        
    /*
        Split positions in format "X Y Z"
        
        @param [string]: Position values
            "20% 30% 0" -> {20%, 30%, 0}
            "20% 30%" -> {20%, 30%}
            "20%" -> {20%, 20%}
    */
    split: function (value) {
        var positions = splitSpaceDelimited(value),
            numPositions = positions.length,
            splitValue = {
                X: positions[0],
                Y: (numPositions > 1) ? positions[1] : positions[0]
            };
            
        if (numPositions > 2) {
            splitValue.Z = positions[2];
        }

        return splitValue;
    },

    combine: function (values) {
        return createDelimited(values, terms, ' ');
    }
};
return exports;
})()),
        dimensions: ((function() {
var exports = {};
"use strict";

var terms = __small$_48.dimensions,
    pxDefaults = __small$_11.defaultProps,
    createDelimited = __small$_45,
    splitSpaceDelimited = __small$_49;

exports = {

    defaultProps: pxDefaults,
    
    /*
        Split dimensions in format "Top Right Bottom Left"
        
        @param [string]: Dimension values
            "20px 0 30px 40px" -> {20px, 0, 30px, 40px}
            "20px 0 30px" -> {20px, 0, 30px, 0}
            "20px 0" -> {20px, 0, 20px, 0}
            "20px" -> {20px, 20px, 20px, 20px}
        
        @return [object]: Object with T/R/B/L metrics
    */
    split: function (value) {
        var dimensions = splitSpaceDelimited(value),
            numDimensions = dimensions.length,
            jumpBack = (numDimensions !== 1) ? 2 : 1,
            i = 0,
            j = 0,
            splitValue = {};

        for (; i < 4; i++) {
            splitValue[terms[i]] = dimensions[j];

            // Jump back (to start) counter if we've reached the end of our values
            j++;
            j = (j === numDimensions) ? j - jumpBack : j;
        }

        return splitValue;
    },

    combine: function (values) {
        return createDelimited(values, terms, ' ');
    }
};
return exports;
})()),
        shadow: ((function() {
var exports = {};
"use strict";

var color = __small$_15,
    utils = __small$_33,
    pxDefaults = __small$_11.defaultProps,
    terms = __small$_48.shadow,
    splitSpaceDelimited = __small$_49,
    createDelimited = __small$_45,
    shadowTerms = terms.slice(0,4);

exports = {

    defaultProps: utils.merge(color.defaultProps, {
        X: pxDefaults,
        Y: pxDefaults,
        Radius: pxDefaults,
        Spread: pxDefaults
    }),

    /*
        Split shadow properties "X Y Radius Spread Color"
        
        @param [string]: Shadow property
        @return [object]
    */
    split: function (value) {
        var bits = splitSpaceDelimited(value),
            numBits = bits.length,
            hasReachedColor = false,
            colorProp = '',
            thisBit,
            i = 0,
            splitValue = {};

        for (; i < numBits; i++) {
            thisBit = bits[i];

            // If we've reached the color property, append to color string
            if (hasReachedColor || color.test(thisBit)) {
                hasReachedColor = true;
                colorProp += thisBit;

            } else {
                splitValue[terms[i]] = thisBit;
            }
        }
        
        return utils.merge(splitValue, color.split(colorProp));
    },

    combine: function (values) {
        return createDelimited(values, shadowTerms, ' ') + color.combine(values);
    }
};
return exports;
})())
    })

    /*
        CSS/Attr route - dependent on core value types being present
    */
    .addRoute('css', ((function() {
var exports = {};
/*
    DOM CSS route
    ==============================================
*/
"use strict";

var build = ((function() {
var exports = {};
"use strict";

var transformDictionary = ((function() {
var exports = {};
"use strict";

var positionTerms = __small$_48.positions,
    numPositionTerms = positionTerms.length,

    TRANSFORM_PERSPECTIVE = 'transformPerspective',
    SCALE = 'scale',
    ROTATE = 'rotate',
    terms = {
        funcs: ['translate', SCALE, ROTATE, 'skew', TRANSFORM_PERSPECTIVE],
        props: {} // objects are faster at direct lookups
    };

// Create transform terms
(function () {
    var funcs = terms.funcs,
        props = terms.props,
        numFuncs = funcs.length,
        i = 0,

        createProps = function (funcName) {
            var j = 0;

            for (; j < numPositionTerms; j++) {
                props[funcName + positionTerms[j]] = true;
            }
        };
    
    // Manually add skew and transform perspective  
    props[ROTATE] = props[SCALE] = props[TRANSFORM_PERSPECTIVE] = true;
    
    // Loop over each function name and create function/property terms
    for (; i < numFuncs; i++) {
        createProps(funcs[i]);
    }
})();

exports = terms;
return exports;
})()),
    transformProps = transformDictionary.props,

    TRANSFORM = 'transform',
    TRANSLATE_Z = 'translateZ';

exports = function (output, cache) {
    var css = {},
        key = '',
        transform = '',
        transformHasZ = false,
        rule = '';

    // Loop through output, check for transform properties and cache
    for (key in output) {
        if (output.hasOwnProperty(key)) {
            rule = output[key];
            // If this is a transform property, add to transform string
            if (transformProps[key]) {
                transform += key + '(' + rule + ')';
                transformHasZ = (key === TRANSLATE_Z) ? true : transformHasZ;
            
            // Or just assign directly if different from cache
            } else if (cache[key] !== rule) {
                cache[key] = css[key] = rule;
            }
        }
    }

    // If we have transform properties, add translateZ
    if (transform !== '' && transform !== cache[TRANSFORM]) {
        if (!transformHasZ) {
            transform += ' ' + TRANSLATE_Z + '(0px)';
        }

        cache[TRANSFORM] = css[TRANSFORM] = transform; 
    }

    return css;
};
return exports;
})()),
    styleDom = ((function() {
var exports = {};
"use strict";

var styleDOM = function () {
	var prefixes = ['Webkit','Moz','O','ms', ''],
		prefixesLength = prefixes.length,
		cache = {},
		
		/*
			Test style property for prefixed version
			
			@param [string]: Style property
			@return [string]: Cached property name
		*/
		testPrefix = function (key) {
            var testElement = document.body;
			
            cache[key] = key;

			for (var i = 0; i < prefixesLength; i++) {
				var prefixed = prefixes[i] + key.charAt(0).toUpperCase() + key.slice(1);

				if (testElement.style.hasOwnProperty(prefixed)) {
					cache[key] = prefixed;
				}
			}
			
			return cache[key];
		};
	
	/*
		Style DOM functions
	*/
	return {

		/*
			Get DOM styles

			@param [DOM Element]: Element to get styles from
			@param [string]: Name of style to read
		*/
		get: function (element, name) {
			return window.getComputedStyle(element, null)[cache[name] || testPrefix(name)];
		},

		/*
			Set DOM styles

			@param [DOM Element]: Element to set styles on
			@param [object]: Name of style to set
			@param [string]: New rule
		*/
		set: function (element, name, rule) {
			element.style[cache[name] || testPrefix(name)] = rule;
		}

	};
};

exports = new styleDOM();
return exports;
})()),
    typeMap = ((function() {
var exports = {};
"use strict";

var COLOR = 'color',
    POSITIONS = 'positions',
    DIMENSIONS = 'dimensions',
    SHADOW = 'shadow',
    ANGLE = 'angle',
    ALPHA = 'alpha',
    PX = 'px';

exports = {
    // Color properties
    color: COLOR,
    backgroundColor: COLOR,
    borderColor: COLOR,
    borderTopColor: COLOR,
    borderRightColor: COLOR,
    borderBottomColor: COLOR,
    borderLeftColor: COLOR,
    outlineColor: COLOR,
    fill: COLOR,
    stroke: COLOR,

    // Dimensions
    margin: DIMENSIONS,
    padding: DIMENSIONS,
    width: PX,
    height: PX,

    // Positions
    backgroundPosition: POSITIONS,
    perspectiveOrigin: POSITIONS,
    transformOrigin: POSITIONS,
    
    // Shadows
    textShadow: SHADOW,
    boxShadow: SHADOW,

    // Transform properties
    rotate: ANGLE,
    rotateX: ANGLE,
    rotateY: ANGLE,
    rotateZ: ANGLE,
    skewX: ANGLE,
    skewY: ANGLE,
    translateX: PX,
    translateY: PX,
    translateZ: PX,
    perspective: PX,
    opacity: ALPHA
};
return exports;
})()),
    CSS_CACHE = '_cssCache';

exports = {
    typeMap: typeMap,
    
    onChange: function (output) {
        this[CSS_CACHE] = this[CSS_CACHE] || {};
        this.css(build(output, this[CSS_CACHE]));
    },

    get: function (key) {
        return styleDom.get(this.element, key);
    },

    set: function (key, value) {
        styleDom.set(this.element, key, value);
    }
    
};
return exports;
})()))
    .addRoute('attr', ((function() {
var exports = {};
/*
    DOM Attr route
    ==============================================
*/
"use strict";

exports = {
    onChange: function (output) {
        for (var key in output) {
            if (output.hasOwnProperty(key)) {
                this.element.setAttribute(key, output[key]);
            }
        }
    },

    get: function (key) {
        return this.element.getAttribute(key);
    },

    set: function (key, value) {
        this.element.setAttribute(key, value);
    }
};
return exports;
})()))

    /*
        SVG route - dependent on DOM CSS route
    */
    .addRoute('path', ((function() {
var exports = {};
/*
    SVG Path route
    ==============================================

    Dependent on CSS Route
*/
"use strict";

var createStyles = ((function() {
var exports = {};
"use strict";

var lookup = ((function() {
var exports = {};
var STROKE = 'stroke',
    DASH = STROKE + '-dash', // stoke-width
    DASH_ARRAY = DASH + 'array';

exports = {
    opacity: STROKE + '-opacity',
    width: STROKE + '-width',
    offset: DASH + 'offset',
    length: DASH_ARRAY,
    spacing: DASH_ARRAY,
    miterlimit: STROKE + '-miterlimit'
};
return exports;
})()),

    /*
        Convert percentage to pixels
        
        @param [number]: Percentage of total length
        @param [number]: Total length
    */
    percentToPixels = function (percentage, length) {
        return (parseFloat(percentage) / 100) * length + 'px';
    };

/*
    Create styles
    
    @param [object]: SVG Path properties
    @param [object]: Length of path
    @returns [object]: Key/value pairs of valid CSS properties
*/
exports = function (props, pathLength) {
    var hasArray = false,
        svgProperty = '',
        arrayStyles = {
            length: 0,
            spacing: pathLength + 'px'
        },
        pathStyles = {};

    // Loop over each property and create related css property
    for (var key in props) {
        if (props.hasOwnProperty(key)) {
            svgProperty = lookup[key] || key;
            
            switch (key) {
                case 'length':
                case 'spacing':
                    hasArray = true;
                    arrayStyles[key] = percentToPixels(props[key], pathLength);
                    break;
                case 'offset':
                    pathStyles[svgProperty] = percentToPixels(-props[key], pathLength);
                    break;
                default:
                   pathStyles[svgProperty] = props[key]; 
            }
        }
    }
    
    if (hasArray) {
        pathStyles[lookup.length] = arrayStyles.length + ' ' + arrayStyles.spacing;
    }

    return pathStyles;
};
return exports;
})());

exports = {

    typeMap: {
        stroke: 'color'
    },

    onStart: function () {
        if (this.element) {
            this.pathLength = this.element.getTotalLength();
        }
    },
    
    onChange: function (output) {
        this.css(createStyles(output, this.pathLength));
    }
};
return exports;
})()));

exports = popmotion;
return exports;
})()),
    UIref = window.ui;

window.ui = window.popmotion = popmotion;

/*
    If noConflict is run, the original reference to window.UI is
    restored and Popmotion is loaded to window.Popmotion
*/
window.ui.noConflict = function () {
    window.ui = UIref;
};
return exports;
})();