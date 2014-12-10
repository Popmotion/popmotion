(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var KEY = require('../opts/keys.js'),
    calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    Token = require('../bits/token.js'),
    token = new Token(),
    Value = require('./value.js'),
    callback = function () {},
    Action = function () {
        this.created = utils.currentTime();
        this.token = token.generate();
        this.data = {};
        this.values = {};
        this.origin = {};
        this.playlist = [];
    },
    defaults = {
    
        // Is this action active
        active: false,
        
        // What to use to process this aciton
        rubix: KEY.RUBIX.TIME,
        
        // Multiply output value by
        amp: 1,
        
        // Multiply output value outside min/max by
        escapeAmp: 0,
        
        // Delay this action by x ms
        delay: 0,
        
        // Time of animation (if animating) in ms
        duration: 400,
        
        // Ease animation
        ease: KEY.EASING.QUAD_IN_OUT,
        
        // Round output value?
        round: false,
        
        // Divide animation into this many steps
        steps: 0,
        
        // 
        dilate: 1,
        
        playhead: 0,
        
        // The object we're checking
        input: undefined,
        
        // Input origin on tracking start
        inputOrigin: undefined,
        
        // Current progress
        progress: 0,
        
        // Time elapsed
        elapsed: 0,
        
        // Use the progress of this property of linked input
        link: undefined,
        
        // Loop animation x number of times (true for ETERNALLY)
        loop: false,
        
        // Number of times animation has looped
        loopCount: 0,
        
        // Play animation and reverse x number of times (true for forever)
        yoyo: false,
        
        // Number of times animation has yoyoed
        yoyoCount: 0,
        
        // Run this callback on action start
        onStart: callback,
        
        // Run this on action end
        onEnd: callback,
        
        // Run this every frame
        onFrame: callback,
        
        // Run this when action changes
        onChange: callback
    };

/*
    Set Action options
    
    @param [object]: User-defined options
*/
Action.prototype.set = function (options) {
    // Loop through standard options and assign
    for (var key in defaults) {
        if (defaults.hasOwnProperty(key)) {
            
            // If user has set this option
            if (options.hasOwnProperty(key)) {
                this[key] = options[key];
            
            // Or set to default
            } else {
                this[key] = defaults[key];
            }
        }
    }
    
    this.playlist = options.playlist || this.playlist || [];
    this.scope = options.scope || this.scope || this;

    // Set the values
    this.setValues(options.values);
};
 

/*
    Set Values
    
    @param [object]: User-defined values
*/   
Action.prototype.setValues = function (values) {
    // Create or update Value objects for each defined value
    for (var key in values) {
        if (values.hasOwnProperty(key)) {
            
            if (this.values[key]) {
                this.values[key].update(values[key], this);
            } else {
                this.values[key] = new Value(values[key], this);
            }
        }
    }
    
    // Handle special values

    if (this.values.angle) {
        this.values.x = this.values.x || new Value(0, this);
        this.values.y = this.values.y || new Value(0, this);
    }

    // Create origins
    for (var key in this.values) {
        if (this.values.hasOwnProperty(key)) {
            this.origin[key] = this.values[key].current;
        }
    }
};

/*
    Reset values
*/
Action.prototype.resetValues = function () {
    for (var key in this.values) {
        this.values[key].current = this.values[key].from;
    }
    
    this.progress = 0;
    this.elapsed = 0;
};

/*
    Reverse values
*/
Action.prototype.reverseValues = function () {
    var key, to, from;
    
    this.progress = calc.difference(this.progress, 1);
    this.elapsed = calc.difference(this.elapsed, this.duration);

    for (key in this.values) {
        if (this.values.hasOwnProperty(key)) {
            to = this.values[key].to;
            from = this.values[key].from;
            
            this.values[key].to = from;
            this.values[key].from = to;
        }
    }
};

/*
    Start the action
*/
Action.prototype.start = function () {
    this.active = true;
    this.started = utils.currentTime() + this.delay;
    this.framestamp = this.started;
    this.firstFrame = true;
};

/*
    Stop the action
*/
Action.prototype.stop = function () {
    this.active = false;
};


module.exports = Action;
},{"../bits/token.js":7,"../opts/keys.js":15,"../utils/calc.js":17,"../utils/utils.js":22,"./value.js":8}],2:[function(require,module,exports){
(function (global){
/*
    Bezier function generator
        
    Gaëtan Renaudeau's original BezierEasing
    You're a hero
    https://github.com/gre/bezier-easing/blob/master/index.js  
    https://github.com/gre/bezier-easing/blob/master/LICENSE
*/
"use strict";

var newtonIterations = 8,
    newtonMinSlope = 0.001,
    subdivisionPrecision = 0.0000001,
    subdivisionMaxIterations = 10,
    kSplineTableSize = 11,
    kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
    float32ArraySupported = 'Float32Array' in global,

    Bezier = function (mX1, mY1, mX2, mY2) {
        var self = this;
        
        this.precompute(mX1, mY1, mX2, mY2);

        return function (t) {
            return self.calcBezier(self.getTForX(t, mX1, mX2), mY1, mY2);
        }
    };
    
Bezier.prototype = {

    precompute: function (mX1, mY1, mX2, mY2) {
        this.mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
        this.calcSampleValues(mX1, mX2);
    },
    
    calcSampleValues: function (mX1, mX2) {
        for (var i = 0; i < kSplineTableSize; ++i) {
            this.mSampleValues[i] = this.calcBezier(i * kSampleStepSize, mX1, mX2);
        }
    },

    newtonRaphsonIterate: function (t, guess, mX1, mX2) {
        var i = 0,
            currentSlope,
            currentX;
        
        for (i; i < newtonIterations; ++i) {
            currentSlope = this.getSlope(guess, mX1, mX2);
            
            if (currentSlope !== 0.0) {
                currentX = this.calcBezier(guess, mX1, mX2) - t;
                guess -= currentX / currentSlope;
            }
        }
        return t;
    },
    
    binarySubdivide: function (t, aA, aB, mX1, mX2) {
        var i = 0,
            currentX,
            currentT;
            
        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = this.calcBezier(currentT, mX1, mX2) - t;
            
            if (currentX > 0.0) {
                aB = currentT;
            } else {
                aA = currentT;
            }
        } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
        
        return currentT;
    },

    getTForX: function (t, mX1, mX2) {
        var intervalStart = 0.0,
            currentSample = 1,
            lastSample = kSplineTableSize - 1,
            dist,
            guess,
            initialSlope;
            
        for (intervalStart; currentSample != lastSample && this.mSampleValues[currentSample] <= t; ++currentSample) {
            intervalStart += kSampleStepSize;
        }
        
        --currentSample;

        dist = (t - this.mSampleValues[currentSample] / (this.mSampleValues[currentSample + 1] - this.mSampleValues[currentSample]));
        
        guess = intervalStart + dist * kSampleStepSize;
        initialSlope = this.getSlope(guess, mX1, mX2);

        if (initialSlope === newtonMinSlope) {
            t = this.newtonRaphsonIterate(t, guess, mX1, mX2);
        } else if (initialSlope == 0.0) {
            t = guess;
        } else {
            t = this.binarySubdivide(t, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
        return t;
    },

    getSlope: function (t, a1, a2) {
        return 3.0 * this.A(a1, a2) * t * t + 2.0 * this.B(a1, a2) * t + this.C(a1);
    },

    calcBezier: function (t, a1, a2) {
        return ((this.A(a1, a2) * t + this.B(a1, a2)) * t + this.C(a1)) * t;
    },
    
    A: function (a1, a2) {
        return 1.0 - 3.0 * a2 + 3.0 * a1;
    },
    
    B: function (a1, a2) {
        return 3.0 * a2 - 6.0 * a1;
    },
    
    C: function (a1) {
        return 3.0 * a1;
    }
};

module.exports = Bezier;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
/*
    Custom input
*/
"use strict";

var calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    History = require('../bobs/history.js'),
    Input = function () {
        this.current = {};
        this.history = new History();
        this.offset = {};
        this.update(arguments[0], arguments[1]);
    };

Input.prototype = {

    // Allow input to be inactive for this many frames before declared not moving
    maxInactiveFrames: 2,
    
    // Number of frames input hasn't moved
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
            input.update({ prop: val });
            input.update('prop', val);
        
        @param [string || object]: 
        @param [number] (optional): If 
    */
    update: function () {
        var values = {};

        if (utils.isNum(arguments[1])) {
            values[arguments[0]] = arguments[1];
        } else {
            values = arguments[0];
        }

        this.history.add(utils.merge(this.current, values));
    },
    
    /*
        Check for input movement and update pointer object's properties
        
        @param [number]: Timestamp of frame
    */
    onFrame: function (timestamp) {
        var latest, hasChanged;
        
        // Check provided timestamp against lastFrame timestamp and return input has already been updated
        if (timestamp === this.lastFrame) {
            return;
        }
        
        latest = this.history.get();
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
    }
    
};

module.exports = Input;
},{"../bobs/history.js":11,"../utils/calc.js":17,"../utils/utils.js":22}],4:[function(require,module,exports){
/*
    Point class
    ----------------------------------------
    
    Defines a 3D point in space
    
    @param [number || Point]: Either X axis value or Point object
    @param [number]: Y axis
    @param [number]: Z axis
    @return [Point]
*/
"use strict";

var Point = function (x, y, z) {
        this.setPoint(x, y, z);
    };

Point.prototype = {
    setPoint: function (x, y, z) {
        var xIsObj = (typeof x === 'object');

        this.x = xIsObj ? x.x || 0 : x || 0;
        this.y = xIsObj ? x.y || 0 : y || 0;
        this.z = xIsObj ? x.z || 0 : z || 0;
    }
};

module.exports = Point;
},{}],5:[function(require,module,exports){
"use strict";

var Input = require('./input.js'),
    Point = require('./point.js'),
    History = require('../bobs/history.js'),
    KEY = require('../opts/keys.js'),
    utils = require('../utils/utils.js'),
    Pointer = function (point, isTouch) {
        this.update(new Point(point));
        this.isTouch = isTouch;
        this.bindEvents();
    };

Pointer.prototype = new Input();

/*
    Bind move event
*/
Pointer.prototype.bindEvents = function (isTouch) {
    this.moveEvent = this.isTouch ? KEY.EVENT.TOUCHMOVE : KEY.EVENT.MOUSEMOVE;
    
    document.documentElement.addEventListener(this.moveEvent, this.onMove);
};

/*
    Unbind move event
*/
Pointer.prototype.unbindEvents = function () {
    document.documentElement.removeEventListener(this.moveEvent, this.onMove);
};

/*
    Pointer onMove event handler
    
    @param [event]: Pointer move event
*/
Pointer.prototype.onMove = function (e) {
    var newPoint;

    e = utils.getActualEvent(e);
    
    this.update(new Point(utils.convertEventIntoPoint(e, this.isTouch)));
    
    e.preventDefault();
};

Pointer.prototype.stop = function () {
    this.unbindEvents();
};

module.exports = Pointer;
},{"../bobs/history.js":11,"../opts/keys.js":15,"../utils/utils.js":22,"./input.js":3,"./point.js":4}],6:[function(require,module,exports){
"use strict";

var Input = require('./input.js'),
    History = require('../bobs/history.js'),
    utils = require('../utils/utils.js'),
    defaultFPS = 60, // default to 60fps
    Time = function () {
        Input.call(this, arguments[0], arguments[1]);
    };

Time.prototype = new Input();

/*
    Calc FPS
    
    Divide current time velocity (in ms) by 1000 (one second)
    
    @return [number]: Current frames per second
*/
Time.prototype.getFPS = function () {
    return (this.velocity.time) ? 1000 / this.velocity.time : defaultFPS;
};

/*
    Update time
    
    @param [number]: Latest timestamp
*/
Time.prototype.updateTime = function (timestamp) {
    this.update('time', timestamp);
    this.onFrame(timestamp);
};

module.exports = Time;
},{"../bobs/history.js":11,"../utils/utils.js":22,"./input.js":3}],7:[function(require,module,exports){
/*
    Token controller
*/
"use strict";

var Token = function () {
        this.counter = 0;
    };

Token.prototype = {
    
    /*
        Get the current token count
        
        @return [int]: Current token count
    */
    get: function () {
        return this.counter;
    },
    
    /*
        Generate a new token
        
        @return [int]: New token
    */
    generate: function () {
        var token = this.get();
        
        this.increment();

        return token;
    },
    
    /*
        Increase token counter
    */
    increment: function () {
        this.counter ++;
    }
    
};

module.exports = Token;
},{}],8:[function(require,module,exports){
"use strict";

var utils = require('../utils/utils.js'),
    calc = require('../utils/calc.js'),
    priorityProps = ['current', 'to', 'from', 'start', 'hasRange'],
    
    /*
        Is this key a priority property?
        
        Priority properties are handled seperately and before all the other props
        
        @param [string]: The key to look up in our priority list
        @return [boolean]: Is this a priority?
    */
    isPriority = function (key) {
        return (priorityProps.indexOf(key) > -1);
    },
    
    /*
        Calculate relative value
        
        Takes the operator and value from a string, ie "+=5", and applies
        to the current value to resolve a new target.
        
        @param [string]: Relative value
        @param [number]: Current value
        @return [number]: New value
    */
    calcRelativeValue = function (value, current) {
        var newValue = current,
            equation = value.split('='),
            operator = equation[0],
            num = parseFloat(equation[1]);

        switch (operator) {
            case '+':
                newValue = current + num;
                break;
            case '-':
                newValue = current - num;
                break;
            case '*':
                newValue = current * num;
                break;
            case '/':
                newValue = current / num;
                break;
        }

        return newValue;
    },
    
    /*
        Parse value
        
        Parses the value, whether its a number, string or function.
        If a number, return.
        If a string, it's a relative assignment so calculate new target based on its contents
        If a function, fire it with action.data and current value as arguments
        
        @param [number/string/function]: Current value
        @param [object]: Data of parent action
        @param [number]: Current value
    */
    parse = function (value, data, current) {
        return (utils.isFunc(value)) ? value(data, current) : value;
    },
    
    /*
        Value object
        
        On init, run update with isNewValue = true
        
        @param [number/string/function/object]: New value
        @param [Aciton]: Parent action
    */
    Value = function (value, action) {
        this.update(value, action, true);
    },
    defaults = {
        // Actual value
        current: 0,
        start: 0,
    
        // Current range for value
        from: 0,
        to: 1,
    
        // Maximum range for value
        min: undefined,
        max: undefined,
        hasRange: false,
        
        // Speed for .move(), in xps
        speed: 0,
        friction: 0,
        thrust: 0,
        
        // Options
        duration: 400,
        delay: 0,
        ease: 'ease-in-out',
        link: null, // use the progress of this value
        round: false,
        steps: 0,
        
        // Amp for inside and outside range (ie value * amp)
        amp: 0,
        escapeAmp: 0
    };

    
/*
    Update the value properties
    
    @param [object || number]: User-defined value
    @param [object]: Action this value belongs to
    @param [boolean] (optional): Is this a new value construct
*/
Value.prototype.update = function (value, action, isNewValue) {
    var data = (action) ? action.data : {};

    // If value is just a number
    if (utils.isNum(value) || utils.isFunc(value) || utils.isString(value)) {
        this.current = (isNewValue) ? 0 : this.current;
        this.to = parse(value, data, this.current);

    // Or if it is an object
    } else {
        // If a start value exists and this is a new Value, assign it as current
        if (isNewValue && value.hasOwnProperty('start')) {
            this.current = parse(value.start, data);
        
        // Or we've explicitly set current
        } else if (value.hasOwnProperty('current')) {
            this.current = parse(value.current, data);
        
        // Or we've not defined current and this is a new value
        } else if (isNewValue) {
            this.current = defaults.current;
        }
        
        this.to = parse(value.to, data, this.current);
    }
    
    // Loop through permitted values
    for (var key in defaults) {
        if (defaults.hasOwnProperty(key) && !isPriority(key)) {

            // If user has submitted a property
            if (utils.isObj(value) && value.hasOwnProperty(key)) {
                this[key] = parse(value[key], data, this.current);
                
            // Or there's a default set on the action
            } else if (utils.isObj(action) && action.hasOwnProperty(key)) {
                this[key] = parse(action[key], data, this.current);
                
            // Otherwise, if this is our first time (honest judge), set as the default.
            } else if (isNewValue) {
                this[key] = defaults[key];
            }
            
        }
    }
    
    // Assign 'from' as current
    this.from = this.current;

    // If we have a min and max val - set hasRange to undefined
    if (this.min !== undefined && this.max !== undefined) {
        this.hasRange = true;
    }
    
    // Finally check if to was given as a string, and figure out the relative value
    if (utils.isString(this.to)) {
        this.to = calcRelativeValue(this.to, this.current);
    }
};

module.exports = Value;
},{"../utils/calc.js":17,"../utils/utils.js":22}],9:[function(require,module,exports){
/*
    ActionManager
*/
"use strict";

var KEY = require('../opts/keys.js'),
    InputManager = require('./inputManager.js'),
    Action = require('../bits/action.js'),
    utils = require('../utils/utils.js'),
    ActionManager = function () {},
    actionManager,
    allActions = [],
    activeTokens = [],
    deactivateQueue = [],
    baseActions = {};

ActionManager.prototype = {
    
    /*
        Create action
        
        @return [Action]
    */
    create: function () {
        var action = new Action();

        this.register(action);

        return action;
    },
    
    /*
        Change action
        
        @param [Token]: Token for the action
        @param [object]: Value properties
        @param [object]: Action options
    */
    change: function (token, changes, input) {
        var action = this.get(token);
        
        if (changes.rubix === KEY.RUBIX.INPUT) {
            changes.input = InputManager.start(input);
            changes.inputOrigin = changes.input.get();
        }

        action.set(changes);
    },
    
    /*
        Define a base action
        
        Can be called later with .play()
        
        @param [object]
    */
    define: function (actions) {
        var key,
            chain,
            baseAction = {};

        for (key in actions) {
            if (actions.hasOwnProperty(key)) {
                if (baseActions[key] && !actions[key].forceOverride) {
                    throw KEY.ERROR.ACTION_EXISTS;
                } else {
                    chain = key.split('.');

                    // If there's an inheritence chain, merge
                    // TODO: multilayered inheritence?
                    if (chain.length > 1) {
                        if (baseActions[chain[0]]) {
                            baseActions[key] = utils.merge(baseActions[chain[0]], actions[key]);
                        // if we can't find action
                        } else {
                            throw KEY.ERROR.NO_ACTION;
                        }
                    // Else directly copy
                    } else {
                        baseActions[key] = actions[key];
                    }
                }
            }
        }
    },
    
    
    /*
        Create base action
        
        @param [string || array || object]:
            String: Name or space-delimited playlist of actions
            Array: Playlist of actions
            Object: Raw action
        @param [object]: Action override
    */
    createBase: function (defs, override) {
        var baseAction = {},
            actionList = [];
        
        // If this is a straight action
        if (utils.isObj(defs)) {
            baseAction = defs;
            baseAction.playlist = [];
            
        // These are previously defined actions
        } else {
            // Comma-delimited string or single action name
            if (utils.isString(defs)) {
                actionList = defs.split(" ");
                
            // Array of action names
            } else {
                actionList = defs;
            }
            
            baseAction = this.getDefined(actionList[0]);
            baseAction.playlist = actionList;
        }
        
        // Apply overrides if present
        if (utils.isObj(override)) {
            baseAction = this.merge(baseAction, override);
        }
        
        return baseAction;
    },
    
    
    /*
        Get defined action
        
        @param [string]: The name of the predefined action
    */
    getDefined: function (key) {
        return this.copy(baseActions[key]);
    },
    
    /*
        Copy an action
    */
    copy: function (action) {
        var newAction = {};

        for (var key in action) {
            if (action.hasOwnProperty(key)) {
                if (key !== 'values') {
                    newAction[key] = action[key];
                } else {
                    newAction.values = utils.copy(action.values);
                }
            }
        }
        
        return newAction;
    },
    
    /*
        Merge an action
    */
    merge: function (action, override) {
        for (var key in override) {
            if (override.hasOwnProperty(key)) {
                if (key !== 'values') {
                    action[key] = override[key];
                } else {
                    action.values = utils.merge(action.values, override.values);
                }
            }
        }
        
        return action;
    },
    
    
    /*
        Register action
        
        @param [Action]: Add action to storage array
    */
    register: function (action) {
        allActions[action.token] = action;
    },
    
    
    /*
        Get the specified action
        
        @param [Token]: Token
        @return [Action || boolean]: Action with specified token, false if none found
    */
    get: function (token) {
        return allActions[token] || false;
    },
    
    
    /*
        Get tokens of all active actions
        
        @return [array]: Array of active tokens
    */
    getActiveTokens: function () {
        return activeTokens;
    },
    
    
    /*
        Activate specified action
        
        Activates action and adds to activeTokens array
        
        @param [Token]: Token
    */
    activate: function (token) {
        var action = this.get(token),
            index = activeTokens.indexOf(token),
            deactivateIndex = deactivateQueue.indexOf(token);
        
        if (index === -1) {
            activeTokens.push(token);
        }

        // Remove from deactivate queue if it's been placed there
        if (deactivateIndex >= 0) {
            deactivateQueue.splice(deactivateIndex, 1);
        }
        
        action.start();
    },
    
    
    /*
        Deactivate specified action
        
        Activates action and removes from activeTokens array
        
        @param [Token]: Token
    */
    deactivate: function (token) {
        var action = this.get(token),
            index = activeTokens.indexOf(token);

        action.stop();
        
        if (index > -1) {
            activeTokens.splice(index, 1);
        }
    },
    
    /*
        Is action active
    */
    isActive: function (token) {
        return (activeTokens.indexOf(token) > -1);
    },
    
    /*
        Purge deactivate queue
        
        Loops through the deactivate queue and decides whether to deactivate
        or swap action parameters with the next in the action's playList
        
        We use a deactivate queue rather than deactivate as soon as we process it
        because if we manipulate the list of activated Actions while it's being
        looped through, well you can only imagine the fun that causes.
    */
    purge: function () {
        var queueLength = deactivateQueue.length;
        
        // Run through all queued actions and decide what to do next
        for (var i = 0; i < queueLength; ++i) {
            if (utils.isNum(deactivateQueue[i])) {
                this.decideNext(deactivateQueue[i]);
            }
        }

        // Clear deactivateQueue
        deactivateQueue = [];
    },
    
    /*
        Decide what to do with an action
        
        Takes an action and decides, based on its playlist and loop properties, 
        what to do with it next.
        
        @param [Token]: Action token
    */
    decideNext: function (token) {
        var nexts = ['loop', 'yoyo', 'playNext'],
            num = nexts.length,
            hasFuture = false;
    
        for (var i = 0; i < num; ++i) {
            if (this[nexts[i]](token)) {
                hasFuture = true;
                break;
            }
        }   
    
        if (!hasFuture) {
            this.deactivate(token);
        }
    },
    
    
    /*
        Play next in playlist, if exists
        
        @param [Token]: Action token
        @return [boolean]: Success
    */
    playNext: function (token) {
        var hasPlayedNext = false,
            action = this.get(token),
            playlistLength = action.playlist ? action.playlist.length : 0,
            playhead = action.playhead,
            nextAction;

        // Check we have a playlist and that this is an animation
        // TODO: Maybe make a set of properties on the rubix that says allowPlaylist: true
        if (playlistLength && action.rubix === KEY.RUBIX.TIME) {
            ++playhead;

            if (playhead < playlistLength) {
                nextAction = this.getDefined(action.playlist[playhead]);
                nextAction.playhead = playhead;
                
                this.change(token, nextAction);
                this.activate(token);

                hasPlayedNext = true;
            }
        }

        return hasPlayedNext;
    },
    
    
    /*
        Loop current action, if we're that way inclined
        
        @param [Token]: Action token
        @return [boolean]: Success
    */
    loop: function (token) {
        var hasLooped = false,
            action = this.get(token),
            loopForever = (action.loop === true);

        if (action.rubix === KEY.RUBIX.TIME && (loopForever || utils.isNum(action.loop))) {
            ++action.loopCount;
            if ((loopForever || utils.isNum(action.loop) && action.loopCount <= action.loop)) {
                action.resetValues();
                this.activate(token);
                hasLooped = true;
            }
        }

        return hasLooped;
    },
    
    
    yoyo: function (token) {
        var hasYoyoed = false,
            action = this.get(token),
            yoyoForever = (action.yoyo === true);

        if (action.rubix === KEY.RUBIX.TIME && (yoyoForever || utils.isNum(action.yoyo))) {
            ++action.yoyoCount;
            if (yoyoForever || (utils.isNum(action.yoyo) && action.yoyoCount <= action.yoyo)) {
                action.reverseValues();
                this.activate(token);
                hasYoyoed = true;
            }
        }

        return hasYoyoed;
    },
    
    
    /*
        Add token to the deactivate queue
        
        Queue gets processed at the end of every frame
        
        @param [Token]: Token of action
    */
    queueDeactivate: function (token) {
        deactivateQueue.push(token);
    },
    
    
    /*
        Get data from our action's data object
        
        @param [Token]: Action token
        @param [string]: Key of data point
    */
    getData: function (token, key) {
        var action = this.get(token);
        
        return action.data ? action.data[key] : undefined;
    },
    
    
    /*
        Set data point to action's data object
        
        @param [Token]: Action token
        @param [object]: Data to save to action
    */
    setData: function (token, data) {
        var action = this.get(token);

        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                action.data[key] = data[key];
                
                if (key === KEY.JQUERY_ELEMENT) {
                    action.data = data[key];
                    action.scope = data[key];
                }
            }
        }
    }
};

actionManager = new ActionManager();

module.exports = actionManager;
},{"../bits/action.js":1,"../opts/keys.js":15,"../utils/utils.js":22,"./inputManager.js":12}],10:[function(require,module,exports){
/*
    Chronos
*/
"use strict";

var calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    ActionManager = require('./actionManager.js'),
    Process = require('./process.js'),
    Time = require('../bits/time.js'),
    Chronos = function () {},
    chronos,
    timer,
    isRunning = false; // is animation loop running? - prevents multiple rAF loops from running
    
Chronos.prototype = {

    /*
        Start chronos if not already running
    */
    start: function () {
        if (!isRunning) {
            timer = new Time();
            timer.updateTime(utils.currentTime());
            isRunning = true;
            this.frame();
        }
    },
    
    /*
        Stop chronos
    */
    stop: function () {
        isRunning = false;
    },

    /*
        Frame
        
        Check if there are active actions to process, then callback
    */
    frame: function () {
        var self = this,
            activeActionTokens = ActionManager.getActiveTokens();

        if (activeActionTokens.length) {
            requestAnimationFrame(function () {
                // recheck incase stuff has been deactivated since
                var activeActionTokens = ActionManager.getActiveTokens();
    
                if (activeActionTokens.length) {
                    timer.updateTime(utils.currentTime());
                    Process.actions(activeActionTokens, timer.current.time, timer.getFPS());
                    ActionManager.purge();
                    self.frame();
                } else {
                    self.stop();
                }
            });
        } else {
            self.stop();
        }
    }
};

chronos = new Chronos();

module.exports = chronos;
},{"../bits/time.js":6,"../utils/calc.js":17,"../utils/utils.js":22,"./actionManager.js":9,"./process.js":13}],11:[function(require,module,exports){
"use strict";

var maxHistorySize = 3,
    utils = require('../utils/utils.js'),
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
        i = (utils.isNum(i)) ? i : this.getSize() - 1;

        return this.entries[i];
    },
    
    /*
        Get the second newest history entry
        
        @return [var]: Entry found at index size - 2
    */
    getPrevious: function () {
        var index = this.getSize() - 2;

        return this.get(index);
    },
    
    /*
        Get current history size
        
        @return [int]: Current length of entries.length
    */
    getSize: function () {
        return this.entries.length;
    }
    
};

module.exports = History;
},{"../utils/utils.js":22}],12:[function(require,module,exports){
/*
    Input manager
*/
"use strict";

var Input = require('../bits/input.js'),
    Pointer = require('../bits/pointer.js'),
    KEY = require('../opts/keys.js'),
    utils = require('../utils/utils.js'),
    InputManager = function () {},
    manager;
    
InputManager.prototype = {
    
    /*
        Create a new input object
        
        @return [Input]
    */
    create: function () {
        return new Input(arguments[0], arguments[1]);
    },
    
    /*
        Start tracking a pointer
        
        For custom pointers, we don't have to do anything here so we
        return the input as given. For Pointer events, we pass them through
        to the this.newPointer function and start tracking
        
        @param [Input || event]: Custom input or pointer event
        @return [Input || Pointer]: Original Input or newly created Pointer
    */
    start: function (input) {
        if (!input) {
            throw KEY.ERROR.NO_INPUT;
        }

        return (input.current) ? input : this.newPointer(input);
    },
    
    /*
        Create new Pointer object
        
        @param [event]: Initiating event
    */
    newPointer: function (input) {
        var pointer;

        // Check for .originalEvent and get that instead
        input = utils.getActualEvent(input);
        
        pointer = new Pointer(utils.convertEventIntoPoint(input), utils.isTouchEvent(input));
        
        return pointer;
    }
};

manager = new InputManager();

module.exports = manager;
},{"../bits/input.js":3,"../bits/pointer.js":5,"../opts/keys.js":15,"../utils/utils.js":22}],13:[function(require,module,exports){
/*
    Process actions
*/
"use strict";

var ActionManager = require('./actionManager.js'),
    Rubix = require('./rubix.js'),
    utils = require('../utils/utils.js'),
    Process = function () {},
    process;
    
Process.prototype = {

    /*
        Process actions
        
        Loop through all active actions and process each
        
        @param [array]: Tokens of active actions at time of framestart
        @param [timestamp]: Timestamp of framestart
    */
    actions: function (tokens, frameStart, fps) {
        var i = 0,
            active = tokens.length;

        for (i; i < active; ++i) {
            this.singleAction(ActionManager.get(tokens[i]), frameStart, fps);
        }
    },
    
    
    /*
        Process a single action
        
        @param [Action]
        @param [timestamp]
    */
    singleAction: function (action, frameStart, fps) {
        var output = {},
            rubix = Rubix[action.rubix],
            hasChanged = false;
        
        // If this is the first frame of an action, fire the onStart callback
        if (action.firstFrame) {
            action.onStart.call(action.scope, action.data);
            action.firstFrame = false;
        }

        // Check if this processor updates its input
        if (rubix.updateInput) {
            output.input = rubix.updateInput(action, frameStart);
        }

        action.progress = rubix.calcProgress(action, frameStart, fps);
        
        // Loop over all values 
        for (var key in action.values) {
            if (action.values.hasOwnProperty(key)) {
                output[key] = rubix.easeValue(key, action);
                
                // Apply Math function if one defined
                output[key] = action.values[key].round ? Math.round(output[key]) : output[key];

                if (action.values[key].current !== output[key]) {
                    hasChanged = true;
                    action.values[key].current = output[key];
                }
            }
        }
        
        action.onFrame.call(action.scope, output, action.data);

        // If output has changed, fire onChange
        if (hasChanged) {
            action.onChange.call(action.scope, output, action.data);
        }

        // If process is at its end, fire onEnd and deactivate action
        if (rubix.hasEnded(action)) {
            action.onEnd.call(action.scope, output, action.data);
            ActionManager.queueDeactivate(action.token);
        }
        
        action.framestamp = frameStart;
    }
};

process = new Process();

module.exports = process;
},{"../utils/utils.js":22,"./actionManager.js":9,"./rubix.js":14}],14:[function(require,module,exports){
/*
    Rubix modules
    ----------------------------------------
    
    Rubix modules are used to process an action based on its .rubix property.
    
    Available rubix:
        'Time'
        'Pointer'
        'Speed'
        
    Processing functions:
        calcProgress
        hasEnded
        updateInput
        easeValue
*/
"use strict";

var calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    Easing = require('../utils/easingFunctions.js'),
    KEY = require('../opts/keys.js'),
    ActionManager = require('./actionManager.js'),
    Rubix = function () {},
    rubixController;

Rubix.prototype = {
    Time: {
    
        /*
            Calc progress
            
            Calc action's progress through timelimit
            
            @param [Action]: action to measure
            @param [timestamp]: framestart timestamp
            @return [number]: 0 to 1 value representing how much time has passed
        */
        calcProgress: function (action, frameStart) {
            action.elapsed += calc.difference(action.framestamp, frameStart) * action.timeDilation;
            
            return calc.progress(action.elapsed, action.duration + action.delay);
        },
        
        /*
            Has action ended
            
            True if progress is equal to or higher than 1. If looping is enabled
            we restart the action
            
            @param [Action]: action to analyse
            @return [boolean]: has action ended
        */
        hasEnded: function (action) {
            return action.progress >= 1 ? true : false;
        },
        
        /*
            Ease value in action with provided key
            
            @param [string]: key of value
            @param [Action]
        */
        easeValue: function (key, action) {
            var value = action.values[key],
                restrictedProgress = calc.restricted(action.progress, 0, 1),
                easedValue;
                
            if (value.steps) {
                restrictedProgress = utils.stepProgress(restrictedProgress, 1, value.steps);
            }

            easedValue = Easing.withinRange(restrictedProgress, value.from, value.to, value.ease);

            return easedValue;
        }
    },
    
    Input: {
        
        /*
            Get input key
        */
        getInputKey: function (key, link, inputOffset) {
            var inputKey = false;
            
            // If value is listening to a present input
            if (utils.isString(link) && inputOffset.hasOwnProperty(link)) {
                inputKey = link;

            // Of if value key actually exists in input
            } else if (inputOffset.hasOwnProperty(key)) {
                inputKey = key;
            }
            
            return inputKey;
        },
    
        /*
            Calc progress
            
            Calc the progress of each input metric. 
            
            @param [Action]: action to measure
            @return [object]: Object of all progresses
        */
        calcProgress: function (action, frameStart) {
            var progress = {},
                inputKey, value, offset,
                values = action.values,
                inputOffset = calc.offset(action.inputOrigin, action.input.current);
            
            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    value = values[key];
                    inputKey = this.getInputKey(key, value.link, inputOffset);
                    
                    // If we have an input key, calculate progress from that input
                    if (inputKey !== false) {
                        offset = inputOffset[inputKey];
                        progress[key] = {};
                        
                        // If value has specified range
                        if (value.hasRange) {
                            progress[key].type = KEY.PROGRESS.RANGE;
                            progress[key].value = calc.progress(value.from + offset, value.min, value.max);

                        // Or we calculate progress directly
                        } else {
                            progress[key].type = KEY.PROGRESS.DIRECT;
                            progress[key].value = value.from + offset;
                        }
                    }
                }
            }

            return progress;
        },
        
        /*
            Has function ended?
            
            Tracking currently needs manually ending
        */
        hasEnded: function (action) {
            return false;
        },
        
        /*
            Update pointer
            
            @param [Action]: 
            @return [boolean]: Latest pointer, or previous pointer if stopped tracking
        */
        updateInput: function (action, frameStart) {
            var input = action.input;

            input.onFrame(frameStart);
            
            return action.input;
        },
        
        /*
            Ease value in action with provided key
            
            @param [string]: key of value
            @param [Action]
            @param [object]: Progress of pointer props
        */
        easeValue: function (key, action) {
            var value = action.values[key],
                progress = action.progress[key],
                newValue = value.current;
                
            if (utils.isObj(progress)) {
                // If this is a range progress
                if (progress.type === KEY.PROGRESS.RANGE) {
                    newValue = Easing.withinRange(progress, value.min, value.max, value.ease, value.escapeAmp);
                
                // Or is a direct progress
                } else {
                    newValue = progress.value;
                }
                
            }

            return newValue;
        }
    },
    
    Speed: {
    
        /*
            Convert x per second to per frame speed based on fps
        */
        frameSpeed: function (xps, fps) {
            var speedPerFrame = 0;

            if (xps && utils.isNum(xps)) {
                speedPerFrame = xps/fps;
            }
        
            return speedPerFrame;
        },
    
        /*
            Calc new speed
            
            Calc the new speed based on the formula speed = (speed - friction + thrust)
            
            @param [Action]: action to measure
            @return [object]: Object of all speeds
        */
        calcProgress: function (action, frameStart, fps) {
            var progress = {},
                point,
                value;
                
            for (var key in action.values) {
                if (action.values.hasOwnProperty(key)) {
                    value = action.values[key];
                    value.speed = value.speed - this.frameSpeed(value.friction, fps) + this.frameSpeed(value.thrust, fps);
                    progress[key] = this.frameSpeed(value.speed, fps);
                }
            }
            
            if (action.values.angle && action.values.distance) {
                point = calc.pointFromAngleAndDistance(action.origin, action.values.angle.current, action.values.distance.current);
                progress.x = point.x;
                progress.y = point.y;
            }
            
            return progress;
        },
        
        /*
            Has this action ended?
            
            @return [boolean]: False for now - TODO create better default
        */
        hasEnded: function (action) {
            return false;
        },
        
        /*
            Add the speed to the current value
            
            @param [string]: key of value
            @param [Action]
        */
        easeValue: function (key, action) {
            var value = action.values[key],
                newValue = value.current + action.progress[key];

            if (value.min) {
                newValue = Math.max(value.min, newValue);
            }
            
            if (value.max) {
                newValue = Math.min(value.max, newValue);
            }

            return newValue;
        }
    },

};

rubixController = new Rubix();

module.exports = rubixController;
},{"../opts/keys.js":15,"../utils/calc.js":17,"../utils/easingFunctions.js":18,"../utils/utils.js":22,"./actionManager.js":9}],15:[function(require,module,exports){
/*
    String constants
    ----------------------------------------
*/
"use strict";

module.exports = {
    ANIMATE: 'animate',
    CALC: 'calc',
    JQUERY_ELEMENT: '_jQueryElement',
    REDSHIFT: 'redshift',
    EASING: {
        QUAD_IN_OUT: 'quadInOut',
        QUAD_OUT: 'quadOut',
        IN: 'In',
        IN_OUT: 'InOut',
        OUT: 'Out',
        LINEAR: 'linear'
    },
    RUBIX: {
        INPUT: 'Input',
        SPEED: 'Speed',
        TIME: 'Time'
    },
    ERROR: {
        ACTION_EXISTS: "Action already defined. Use forceOverride: true to override.",
        NO_ACTION: "No action defined to inherit from.",
        INVALID_EASING: ": Easing not defined",
        NO_INPUT: "Input needs to be mouse/touch event or Redshift Input"
    },
    EVENT: {
        MOUSE: 'mouse',
        MOUSEDOWN: 'mousedown',
        MOUSEMOVE: 'mousemove',
        MOUSEUP: 'mouseup',
        TOUCH: 'touch',
        TOUCHSTART: 'touchstart',
        TOUCHMOVE: 'touchmove',
        TOUCHEND: 'touchend'
    },
    PROGRESS: {
        DIRECT: 'Direct',
        RANGE: 'Range'
    }
};
},{}],16:[function(require,module,exports){
/*
    R E D S H I F T
    ----------------------------------------
    
    
*/
"use strict";

var KEY = require('./opts/keys.js'),
    ActionManager = require('./bobs/actionManager.js'),
    InputManager = require('./bobs/inputManager.js'),
    Chronos = require('./bobs/chronos.js'),
    Easing = require('./utils/easingFunctions.js'),
    calc = require('./utils/calc.js'),
    utils = require('./utils/utils.js'),
    Redshift = function () {
        this.init();
    },
    redshift,
    Instance = function (token) {
        this.token = token;
    };
    
Instance.prototype = {
    
    /*
        Read or bind data to this Redshift object
        
        Read
            @param [string]: Key of data value to read
            @return [any]: The data stored under that key
            
        Write syntax A
            @param [string]: Key of data value to write
            @param [any]: The data to store under that key
            
        Write syntax B
            @param [object]: Object of key/value pairs to attach to this object
    */
    data: function () {
        var returnValue = this,
            arg0 = arguments[0],
            arg0IsString = utils.isString(arg0),
            dataToSet = {};
        
        // If this is a get request
        if (arg0IsString && !arguments[1]) {
            returnValue = ActionManager.getData(this.token, arg0);
        
        // Else this is a set request
        } else {
            if (arg0IsString) {
                dataToSet[arg0] = arguments[1];
            } else {
                dataToSet = arg0;
            }

            ActionManager.setData(this.token, dataToSet);
        }

        return returnValue;
    },
    
    /*
        Play the provided actions as animations
        
        @param [string || array]: Space deliminated string or array of defined action keys in order of execution
        @param [object]: Override action defaults with those defined here
    */
    play: function (defs, override) {
        return redshift.ignite(this.token, KEY.RUBIX.TIME, ActionManager.createBase(defs, override));
    },
    
    /*
        Run the provided action based on property speed
        
        @param [string]: Key of the action to process
        @param [object]: Override action defaults with those defined here
    */
    move: function (defs, override) {
        return redshift.ignite(this.token, KEY.RUBIX.SPEED, ActionManager.createBase(defs, override));
    },
    

    /*
        Track pointer
        
        @param [string]: Key of the action to process
        @param [event]: Initiating pointer event
    */
    track: function (defs) {
        var hasAllArgs = (arguments[2] !== undefined),
            toTrack = hasAllArgs ? arguments[2] : arguments[1],
            override = hasAllArgs ? arguments[1] : {};

        return redshift.ignite(this.token, KEY.RUBIX.INPUT, ActionManager.createBase(defs, override), toTrack);
    },
    
    
    /*
        Start specified action
        
        Activate the action and fire up Chronos animation loop
    */
    start: function () {
        redshift.start(this.token);
        return this;
    },
    
    
    /*
        Stop specified action
    */
    stop: function () {
        redshift.stop(this.token);
        return this;
    },
    
    getToken: function () {
        return this.token;
    },
    
    isActive: function () {
        return ActionManager.isActive(this.token);
    }
    
};

Redshift.prototype = {

    newAction: function () {
        return this.get();
    },
    
    newInput: function () {
        return InputManager.create(arguments[0], arguments[1]);
    },

    /*
        Create a Instance with the specified token
    */
    get: function (token) {
        var action = ActionManager.get(token) || ActionManager.create();

        return new Instance(action.token);
    },
    
    
    define: function (actions) {
        ActionManager.define(actions);
        return this;
    },
    
    start: function (token) {
        ActionManager.activate(token);
        Chronos.start();
    },
    
    stop: function (token) {
        ActionManager.deactivate(token);
    },
    
    /*
        Ignite Redshift
        
        Get the specified action (or create if none), update its properties
        and then start
        
        @param [object]: Properties to manipulate
        @param [object]: Options for track
        @param [event || Input]: Initiating pointer event or Input object
        @return [int]: ID token for action
    */
    ignite: function (token, rubix, changes, input) {
        var action = ActionManager.get(token);
        
        changes.rubix = rubix;

        ActionManager.change(token, changes, input);

        this.start(token);

        return action;
    },

    /*
        Add bezier curve function
        
        Add the specified bezier curve the EasingFunction's available easings
        My favourite bezier curve generator is Lea Verou's excellent http://cubic-bezier.com/
        
        @param [string]: Name of the new easing function 
        @param [number]: x coordinate of point 1
        @param [number]: y coordinate of point 1
        @param [number]: x coordinate of point 2
        @param [number]: y coordinate of point 2
    */
    addBezier: function (name, x1, y1, x2, y2) {
        Easing.addBezier(name, x1, y1, x2, y2);
        
        return this;
    },
    
    Calc: calc,
    
    run: function () {
        
    },
    
    /*
        Init Redshift
    */
    init: function () {
        // Check and load feature shims
        require('./utils/shims.js').featureCheck();
        
        // Check and load jQuery plugins
        require('./utils/rQuery.js').featureCheck();
    }
};

redshift = new Redshift();

module.exports = redshift;

},{"./bobs/actionManager.js":9,"./bobs/chronos.js":10,"./bobs/inputManager.js":12,"./opts/keys.js":15,"./utils/calc.js":17,"./utils/easingFunctions.js":18,"./utils/rQuery.js":20,"./utils/shims.js":21,"./utils/utils.js":22}],17:[function(require,module,exports){
/*
    Calculators
    ----------------------------------------
    
    Simple I/O snippets
*/

"use strict";

var utils = require('./utils.js');
    
module.exports = {
    
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
                x: this.difference(from.x, to.x),
                y: this.difference(from.y, to.y)
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
        return Math.atan2(y, x);
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
        Difference
        
        Returns the difference between a and b by subtracting b from a.
        Useful in calcualting the zero-normalised position of b, or the
        difference something has travelled between the two points
        
        @param [number]: Value a
        @param [number]: Value b
        @return [number]: Difference between value a and value b
    */
    difference: function (a, b) {
        return b - a;
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

        return this.difference(from, to);
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
                x: this.difference(from.x, to.x),
                y: this.difference(from.y, to.y)
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
        var offset = {},
            angle, distance;

        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                if (a.hasOwnProperty(key)) {
                    offset[key] = this.distance1D(a[key], b[key]);
                } else {
                    offset[key] = 0;
                }
            } 
        }
        
        if (utils.isNum(offset.x) && utils.isNum(offset.y)) {
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

        point.x = 5 * Math.cos(angle) + origin.x;
        point.y = 5 * Math.sin(angle) + origin.y;

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
            range = this.difference(from, to),
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
        min = utils.isNum(min) ? min : 0;
        max = utils.isNum(max) ? max : 1;
        return Math.random() * (max - min) + min;
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
        Time remaining
        
        Return the amount of time remaining from the progress already made
        
        @param [number]: Progress through time limit between 0-1
        @param [number]: Duration
    */
    timeRemaining: function (progress, duration) {
        return (1 - progress) * duration;
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
};
},{"./utils.js":22}],18:[function(require,module,exports){
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
    
    Base easing
        linear: default, no in/out/inOut variations
        quad
        cubic
        quart
        quint
        exp
        circ
        back
        bounce
        swing
        spring
        
    Easing functions from Robert Penner
    http://www.robertpenner.com/easing/
        
    Bezier curve interpretor created from Gaëtan Renaudeau's original BezierEasing  
    https://github.com/gre/bezier-easing/blob/master/index.js  
    https://github.com/gre/bezier-easing/blob/master/LICENSE
*/
"use strict";

var calc = require('./calc.js'),
    util = require('./utils.js'),
    KEY = require('../opts/keys.js'),
    Bezier = require('../bits/bezier.js'),
    EasingFunction = function () {},
    easingFunction,
    /*
        Each of these base functions is an easeIn
        
        On init, we use EasingFunction.mirror and .reverse to generate easeInOut and
        easeOut functions respectively.
    */
    baseIn = {
        /*
            Quad - Qunit easing
            
            Generates easing curve based on exponent of time
        */
        ease: function (progress) {
            return Math.pow(progress, 2);
        },
        quad: function (progress) {
            return Math.pow(progress, 2);
        },
        cubic: function (progress) {
            return Math.pow(progress, 3);
        },
        quart: function (progress) {
            return Math.pow(progress, 4);
        },
        quint: function (progress) {
            return Math.pow(progress, 5);
        },
        circ: function (progress) {
            return 1 - Math.sin(Math.acos(progress));
        },
        back: function (progress) {
            var strength = 1.5;

            return (progress * progress) * ((strength + 1) * progress - strength);
        }
    },
    baseOut = {
        bounce: function (progress) {
            if ((progress) < (1/2.75)) {
                return (7.5625*progress*progress);
            } else if (progress < (2/2.75)) {
                return (7.5625*(progress-=(1.5/2.75))*progress + .75);
            } else if (progress < (2.5/2.75)) {
                return (7.5625*(progress-=(2.25/2.75))*progress + .9375);
            } else {
                return (7.5625*(progress-=(2.625/2.75))*progress + .984375);
            }
        },
        swing: function (progress) {
            var s = 1.70158;
            return (progress -= 1) * progress * ((s + 1) * progress + s) + 1;
        },
        spring: function (progress) {
            return 1 - (Math.cos(progress * 4.5 * Math.PI) * Math.exp(-progress * 6));
        }
    };
    
EasingFunction.prototype = {

    /*
        Get the named easing function
        
        @param [string]: Name of the easing function to get 
        @return [function || boolean]: Easing function or false if function undefined
    */
    get: function (name) {
        var easing = this[name];
        
        if (!easing) {
            throw name + KEY.ERROR.INVALID_EASING;
        }

        return easing;
    },
    
    
    /*
        Add Bezier Curve easing
        
        @param [string]: Name of new easing
        @parma [number]: X of coordinate 1
        @parma [number]: Y of coordinate 1
        @parma [number]: X of coordinate 2
        @parma [number]: Y of coordinate 2
    */
    addBezier: function (name, x1, y1, x2, y2) {
        if (!this[name]) {
            this[name] = new Bezier(x1, y1, x2, y2);
        }
    },

      
    /*
        Mirror easing
        
        Mirrors the provided easing function, used here for mirroring an
        easeIn into an easeInOut
        
        @param [number]: Progress, from 0 - 1, of current shift
        @param [function]: The easing function to mirror
        @returns [number]: The easing-adjusted delta
    */
    mirrorEasing: function (progress, method) {
        var delta;
        
        if (progress <= 0.5) {
            delta = method(2 * progress) / 2;
        } else {
            delta = (2 - method(2 * (1 - progress))) / 2;
        }
        
        return delta;
    },
            
    /*
        Reverse easing
        
        Reverses the output of the provided easing function, used for flipping easeIn
        curve to an easeOut.
        
        @param [number]: Progress, from 0 - 1, of current shift
        @param [function]: The easing function to reverse
        @returns [number]: The easing-adjusted delta
    */
    reverseEasing: function (progress, method) {
        return 1 - method(1 - progress);
    },
    
    
    /*
        Add new easing function
        
        Takes name and generates nameIn, nameOut, nameInOut, and easing functions to match
        
        @param [string]: Base name of the easing functions to generate
        @param [function]: Base easing function, as an easeIn, from which to generate Out and InOut
    */
    generate: function (name, method, isBaseIn) {
        var self = this,
            names = {
                easeIn: name + KEY.EASING.IN, 
                easeOut: name + KEY.EASING.OUT,
                easeInOut: name + KEY.EASING.IN_OUT
            },
            baseName = isBaseIn ? names.easeIn : names.easeOut,
            reverseName = isBaseIn ? names.easeOut : names.easeIn;

        // Create the In function
        this[baseName] = method;

        // Create the Out function by reversing the transition curve
        this[reverseName] = function (progress) {
            return self.reverseEasing(progress, self[names.easeIn]);
        };
        
        // Create the InOut function by mirroring the transition curve
        this[names.easeInOut] = function (progress) {
            return self.mirrorEasing(progress, self[names.easeIn]);
        };
    },
    
    
    /*
        Ease value within ranged parameters
        
        @param [number]: Progress between 0 and 1
        @param [number]: Value of 0 progress
        @param [number]: Value of 1 progress
        @param [string]: Easing to use
        @param [number]: Amplify progress out of specified range
        @return [number]: Value of eased progress in range
    */  
    withinRange: function (progress, from, to, ease, escapeAmp) {
        var newProgress = calc.restricted(progress, 0, 1),
            inRange = util.isInRange(progress, 0, 1);
            
        ease = inRange ? ease : KEY.EASING.LINEAR;

        if (!inRange) {
            newProgress = newProgress + (calc.difference(newProgress, progress) * escapeAmp);
        }

        return calc.valueEased(newProgress, from, to, this.get(ease));
    },
        
    /*
        Linear easing adjustment
        
        The default easing method, not added with .extend as it has no Out or InOut
        variation.
        
        @param [number]: Progress, from 0-1
        @return [number]: Unadjusted progress
    */
    'linear': function (progress) {
        return progress;
    },
    
    'ease':         new Bezier(.25, .1, .25, 1.0),
    'ease-in':      new Bezier(.42, 0, 1.00, 1.0),
    'ease-out':     new Bezier(0, 0, .58, 1.0),
    'ease-in-out':  new Bezier(.42, 0, .58, 1.0),
    'back-in':      new Bezier(.48,-0.45,.99,.79),
    'back-out':     new Bezier(.11,.7,.6,1.31)

};

easingFunction = new EasingFunction();

init();

function init() {

    // Generate easing with base function of easeIn
    for (var key in baseIn) {
        if (baseIn.hasOwnProperty(key)) {
            easingFunction.generate(key, baseIn[key], true);
        }
    }

    // Generate easing with base function of easeOut
    for (key in baseOut) {
        if (baseOut.hasOwnProperty(key)) {
            easingFunction.generate(key, baseOut[key]);
        }
    }
}

module.exports = easingFunction;

},{"../bits/bezier.js":2,"../opts/keys.js":15,"./calc.js":17,"./utils.js":22}],19:[function(require,module,exports){
window.Redshift = require('../redshift.js');
},{"../redshift.js":16}],20:[function(require,module,exports){
/*
    Redshift jQuery plugin
    
    Provides access to .play, .move and .track properties on an jQuery object.
    Uses that jQuery object to store a unqiue Redshift instance.
    
    .redshift() method used for other Redshift functions, ie $('#element').redshift('stop')
*/

loadPlugins = function () {
    var KEY = require('../opts/keys.js'),
        utils = require('../utils/utils.js'),
        ActionManager = require('../bobs/actionManager.js'),

        /*
            Get Redshift instance from jQuery object
            
            @param [jQuery element]
        */
        getInstance = function ($element) {
            var instance = $element.data(KEY.REDSHIFT);

            if (!instance) {
                instance = ActionManager.create();
                instance.data(KEY.JQUERY_ELEMENT, $element);
                $element.data(KEY.REDSHIFT, instance);
            }
            
            return instance;
        },

        /*
            Execute Action function

            @param [jQuery element]: jQuery element to check for Redshift instance
            @param [string]: Action function to call
            @param [...arguments]
        */
        execute = function ($element, action, arg1, arg2, arg3) {
            $element.each(function () {
                getInstance($(this))[action](arg1, arg2, arg3);
            });
        };
        
    $.fn.play = function () {
        execute(this, 'play', arguments[0], arguments[1]);
        
        return this;
    };
    
    $.fn.move = function () {
        execute(this, 'move', arguments[0], arguments[1]);

        return this;
    };
    
    $.fn.track = function () {
        execute(this, 'track', arguments[0], arguments[1], arguments[2]);

        return this;
    };
    
    $.fn.redshift = function (action) {
        if (action) {
            execute(this, action, arguments[1], arguments[2]);
            return this;
        } else {
            return getInstance(this);
        }
    };
};

module.exports = {
    featureCheck: function () {
        if (window.jQuery) {
            loadPlugins();
        }
    }
};
},{"../bobs/actionManager.js":9,"../opts/keys.js":15,"../utils/utils.js":22}],21:[function(require,module,exports){
var Shim = function () {};

Shim.prototype = {

    /*
        indexOf polyfill
        
        For IE8 troglodites
        
        Taken from http://stackoverflow.com/questions/3629183/why-doesnt-indexof-work-on-an-array-ie8
    */
    indexOf: function () {
        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function (elt /*, from*/) {
                var len = this.length >>> 0,
                    from = Number(arguments[1]) || 0;
                    
                from = (from < 0) ? Math.ceil(from) : Math.floor(from);
                
                if (from < 0) {
                    from += len;
                }
                
                for (; from < len; from++) {
                    if (from in this && this[from] === elt) {
                        return from;
                    }
                }
                
                return -1;
            }
        }
    },
    
    /*
        requestAnimationFrame polyfill
        
        For IE8/9 Flinstones
    
        Taken from Paul Irish. We've stripped out cancelAnimationFrame checks because we don't fox with that
        
        http://paulirish.com/2011/requestanimationframe-for-smart-animating/
        http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
         
        requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
         
        MIT license
    */
    requestAnimationFrame: function () {
        var lastTime = 0,
            vendors = ['ms', 'moz', 'webkit', 'o'],
            vendorsLength = vendors.length;
        
        // Check for prefixed implementations
        for (var x = 0; x < vendorsLength && !window.requestAnimationFrame; x++) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        }
        
        // If there is, fo absolute shizzle, no rAF implementations, make one out of setTimeout and putty
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function (callback, element) {
                var currTime = new Date().getTime(),
                    timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                    id = window.setTimeout(function () {
                            callback(currTime + timeToCall);
                        }, timeToCall);
                
                lastTime = currTime + timeToCall;
                
                return id;
            }
        }
    }
};

shim = new Shim();

module.exports = {
    featureCheck: function () {
        shim.indexOf();
        shim.requestAnimationFrame();
    }
};
},{}],22:[function(require,module,exports){
/*
    Utility functions
    ----------------------------------------
    
    convertEventIntoPoint
    getActualEvent
    hasMoved
    isMouseEvent
    currentTime
*/
"use strict";

var KEY = require('../opts/keys.js');

module.exports = {

    /*
        Convert event into point
        
        Scrape the x/y coordinates from the provided event
        
        @param [event]: Original pointer event
        @return [object]: x/y coordinates of event
    */
    convertEventIntoPoint: function (event, isTouchEvent) {
        return {
            x: isTouchEvent ? event.changedTouches[0].clientX : event.screenX,
            y: isTouchEvent ? event.changedTouches[0].clientY : event.screenY
        };
    },
    
    /*
        Get actual event
        
        Checks for jQuery's .originalEvent if present
        
        @param [event | jQuery event]
        @return [event]: The actual JS event  
    */
    getActualEvent: function (event) {
        return event.originalEvent || event;
    },
    
    /*
        Has one object changed from the other
        
        Compares the two provided inputs and returns true if they are different
        
        @param [object]: Input A
        @param [object]: Input B
        @return [boolean]: True if different
    */
    hasChanged: function (a, b) {
        var hasChanged = false;

        for (var key in b) {
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
        Is this event a mouse event?
        
        Checks the provided event type for the 'mouse' string
        
        @param [string]: Event type
        @return [boolean]: Returns true if 'mouse' is found in string
    */
    isMouseEvent: function (eventType) {
        return (eventType.indexOf(KEY.EVENT.MOUSE) > -1);
    },
    
    /*
        Is this event a touch event?
        
        Checks the provided event for the .touches prop
        
        @param [string]: Event
        @return [boolean]: Returns true if .touches is present
    */
    isTouchEvent: function (e) {
        return (e.touches) ? true : false;
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
        return (this.varType(obj) === 'Function'); 
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
        Is this var an array ? 
        
        @param: Variable to test
        @return [boolean]: Returns true if this.varType === 'Array'
    */
    isArray: function (arr) {
        return (this.varType(arr) === 'Array');
    },
    
    isInRange: function (value, from, to) {
        return (value >= from && value <= to);
    },
    
    copy: function (obj) {
        var newObj = {};
        
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (this.isObj(obj[key])) {
                    newObj[key] = this.copy(obj[key]);
                } else {
                    newObj[key] = obj[key];
                }
            }
        }
        
        return newObj;
    },
    
    merge: function (base, overwrite) {
        var newObj = this.copy(base);
        
        for (var key in overwrite) {
            if (overwrite.hasOwnProperty(key)) {
                if (this.isObj(overwrite[key])) {
                    newObj[key] = this.merge(newObj[key], overwrite[key]);
                } else {
                    newObj[key] = overwrite[key];
                }
            }
        }
        
        return newObj;
    },
    
    /*
        Create stepped version of progress
        
        @param [number]: Value
        @param [number]: Max range
        @param [int]: Number of steps
        @return [number]: Stepped value
    */
    stepProgress: function (value, max, steps) {
        var stepped = 0,
            segment = max / steps;
            
        for (var i = 0; i <= steps; i++) {
            stepped = i * segment;

            if ((i + 1) * segment > value) {
                break;
            }
        }
        
        return stepped;
    },

    /*
        Get var type as string
        
        @param: Variable to test
        @return [string]: Returns, for instance 'Object' if [object Object]
    */
    varType: function (variable) {
        return Object.prototype.toString.call(variable).slice(8, -1);
    },
    
    /*
        Generate current timestamp
        
        @return [timestamp]: Current UNIX timestamp
    */
    currentTime: function () {
        return new Date().getTime();
    }
    
};
},{"../opts/keys.js":15}]},{},[19]);
