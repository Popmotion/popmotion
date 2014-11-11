(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var KEY = require('../opts/keys.js'),
    calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    Token = require('../bobs/token.js'),
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
        link: KEY.LINK.TIME,
        
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
        
        // Apply this Math function to output value
        math: undefined,
        
        // Divide animation into this many steps
        steps: 0,
        
        // 
        timeDilation: 1,
        
        playhead: 0,
        
        // 
        pointerOffset: undefined,
        
        // Current progress
        progress: 0,
        
        // Time elapsed
        elapsed: 0,
        
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
},{"../bobs/token.js":15,"../opts/keys.js":17,"../utils/calc.js":19,"../utils/utils.js":23,"./value.js":6}],2:[function(require,module,exports){
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
}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
/*
    Offset class | extends Point
    ----------------------------------------
    
    Defines the relative offset from another point
*/
"use strict";

var Point = require('./point.js'),
    Offset = function (angle, distance, x, y, z) {
        this.angle = angle || 0;
        this.distance = distance || 0;
        this.setPoint(x, y, z);
    };
    
Offset.prototype = new Point();

module.exports = Offset;
},{"./point.js":4}],4:[function(require,module,exports){
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

var calc = require('../utils/calc.js'),
    defaults = require('../opts/defaults.js'),
    util = require('../utils/utils.js'),
    History = require('../bobs/history.js'),
    Point = require('./point.js'),
    Offset = require('./offset.js'),
    Velocity = require('./velocity.js'),
    PointerController = function () {},
    pointerController;

PointerController.prototype = {
    
    current: new Point(),
    history: undefined,
    inactiveFrames: 0,
    isDrag: false,
    isTouch: false,
    offset: new Offset(),
    origin: new Point(),
    velocity: new Velocity(),
    
    /*
        Initalise the pointer
        
        @param [object]: Coordinates of init point
        @param [boolean]: True if mouse is pointer
        @param [boolean]: True if this is a drag event
    */
    init: function (point, isTouch, isDrag) {
        point = new Point(point);

        this.history = new History(point);
        this.current = point;
        this.origin = point;
        this.isTouch = isTouch;
        this.isDrag = isDrag;
        this.offset = new Offset();
        this.velocity = new Velocity();
    },
    
    
    /*
        Pointer input has moved, add to history
        
        @param [object]: Coordinates of new point
    */
    moved: function (point) {
        point = new Point(point);
        this.history.add(point);
    },
    
    
    /*
        Check for movement and update pointer object's properties on new frame
    */
    update: function () {
        var latestPointer = this.history.getLatest(),
            pointerActive = util.hasMoved(this.current, latestPointer),
            movement;
        
        // Pointer has moved between frames, update pointer props 
        if (pointerActive) {

            // Calculate velocity from last position
            movement = calc.offset(this.current, latestPointer);
            this.velocity = new Velocity(
                movement.angle,
                movement.distance,
                movement.x,
                movement.y,
                movement.z
            );

            // Update current coordinates
            this.current = latestPointer;
            
            // Reset inactive frame count
            this.inactiveFrames = 0;
            
        // Pointer is inactive and frame limit reached
        } else if (!pointerActive && this.inactiveFrames >= defaults.pointer.maxInactiveFrames) {
            
            // Set speed to zero
            this.velocity = new Velocity();

        // Pointer is inactive
        } else {
            // Increment inactive frame counter
            this.inactiveFrames++;
        }
    }
};

pointerController = new PointerController();

module.exports = pointerController;
},{"../bobs/history.js":11,"../opts/defaults.js":16,"../utils/calc.js":19,"../utils/utils.js":23,"./offset.js":3,"./point.js":4,"./velocity.js":7}],6:[function(require,module,exports){
"use strict";

var utils = require('../utils/utils.js'),
	calc = require('../utils/calc.js'),
	priorityProps = ['current', 'from', 'to', 'start'],
	
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
    	min: 0,
    	max: 1,
    	
    	// Speed for .move(), in xps
    	speed: 0,
    	friction: 0,
    	thrust: 0,
    	
    	// Options
    	duration: 400,
    	delay: 0,
    	ease: 'ease-in-out',
    	link: null, // use the progress of this value
    	math: null,
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
	    this.from = (isNewValue) ? 0 : this.current;
	    this.current = (isNewValue) ? this.from : this.current;
		this.to = parse(value, data, this.current);

	// Or if it is an object
	} else {
	
	    // Deal with our priorities
	    // TODO: See if this badass if statement (emphasis on ass) can be refactored
	    if (isNewValue && value.hasOwnProperty('start')) {
		    value.current = parse(value.start, data);
	    }
	    
	    // If user has defined a new current, but not a from
	    if (value.hasOwnProperty('current') && !value.hasOwnProperty('from')) {
    	    this.current = parse(value.current, data);
    	    this.from = this.current;
	    
	    // Or if user has defined a from, but not a current
	    } else if (!value.hasOwnProperty('current') && value.hasOwnProperty('from')) {
    	    this.from = isNewValue ? parse(value.from, data) : this.current;
    	    this.current = isNewValue ? this.from : this.current;
        
        // Or they've defined both
	    } else if (value.hasOwnProperty('current') && value.hasOwnProperty('from')) {
    	    this.current = parse(value.current, data);
    	    this.from = isNewValue ? parse(value.from, data) : this.current;
    	    
        // Or they've defined neither
	    } else {
    	    this.current = isNewValue ? defaults.current : this.current;
    	    this.from = isNewValue ? defaults.from : this.current;
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
    
    // Finally check if to was given as a string, and figure out the relative value
    if (utils.isString(this.to)) {
        this.to = calcRelativeValue(this.to, this.current);
    }
};

module.exports = Value;
},{"../utils/calc.js":19,"../utils/utils.js":23}],7:[function(require,module,exports){
/*
    Velocity class
    ----------------------------------------
    
    @param [number]: Angle of travel
    @param [number]: Speed in pixels per frame along that angle
    @param [number]: X axis speed
    @param [number]: Y axis speed
    @param [number]: Z axis speed
    @param [number]: Speed around offset center
    @return [Velocity]
*/
"use strict";

var Velocity = function (angle, speed, xSpeed, ySpeed, zSpeed, orbitalSpeed) {
        this.angle = angle || 0;
        this.speed = speed || 0;
        this.x = xSpeed || 0;
        this.y = ySpeed || 0;
        this.z = zSpeed || 0;
        this.orbital = orbitalSpeed || 0;
    };

module.exports = Velocity;
},{}],8:[function(require,module,exports){
/*
	ActionManager
*/
"use strict";

var KEY = require('../opts/keys.js'),
	PointerTracker = require('./pointerTracker.js'),
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
	change: function (token, changes, e) {
		var action = this.get(token);
        
        if (changes.link === KEY.LINK.POINTER) {
			changes.pointerOffset = PointerTracker.start(e);
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
    	if (playlistLength && action.link === KEY.LINK.TIME) {
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

        if (action.link === KEY.LINK.TIME && (loopForever || utils.isNum(action.loop))) {
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

		if (action.link === KEY.LINK.TIME && (yoyoForever || utils.isNum(action.yoyo))) {
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
            	}
        	}
    	}
	}
};

actionManager = new ActionManager();

module.exports = actionManager;
},{"../bits/action.js":1,"../opts/keys.js":17,"../utils/utils.js":23,"./pointerTracker.js":12}],9:[function(require,module,exports){
/*
    Chronos
*/
"use strict";

var calc = require('../utils/calc.js'),
	utils = require('../utils/utils.js'),
    ActionManager = require('./actionManager.js'),
    PointerTracker = require('./pointerTracker.js'),
    Process = require('./process.js'),
    Chronos = function () {},
    chronos,
    prevFrameTime,
    currentTime,
    fps = 60,
    isRunning = false; // is animation loop running? - prevents multiple rAF loops from running
    
Chronos.prototype = {

    /*
        Start chronos if not already running
    */
    start: function () {
        if (!isRunning) {
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
                var activeActionTokens = ActionManager.getActiveTokens(); // recheck incase stuff has been deactivated since
    
                if (activeActionTokens.length) {
                	self.updateTime();
                	PointerTracker.frame();
                	Process.actions(activeActionTokens, currentTime, fps);
                    ActionManager.purge();
                    self.frame();
                } else {
                    self.stop();
                }
            });
        } else {
            self.stop();
        }
    },
    
    updateTime: function () {
    	//prevFrameTime = currentTime;
    	currentTime = utils.currentTime();
    	//fps = 1000 / calc.difference(prevFrameTime, currentTime);
    }
};

chronos = new Chronos();

module.exports = chronos;
},{"../utils/calc.js":19,"../utils/utils.js":23,"./actionManager.js":8,"./pointerTracker.js":12,"./process.js":13}],10:[function(require,module,exports){
"use strict";

var KEY = require('../opts/keys.js'),
    callbacks = {},
    event = {};

module.exports = {
    
    addListeners: function (onMove, onEnd, isTouchEvent) {
        var self = this;

        event.move = isTouchEvent ? KEY.EVENT.TOUCHMOVE : KEY.EVENT.MOUSEMOVE;
        event.end = isTouchEvent ? KEY.EVENT.TOUCHEND : KEY.EVENT.MOUSEUP;

        callbacks.onMove = onMove;

        callbacks.onEnd = function () {
            if (typeof onEnd === 'function') {
                onEnd();
            }
        };

		document.documentElement.addEventListener(event.move, callbacks.onMove);
		document.documentElement.addEventListener(event.end, callbacks.onEnd);
    },
    
    removeListeners: function () {
		document.documentElement.removeEventListener(event.move, callbacks.onMove);
		document.documentElement.removeEventListener(event.end, callbacks.onEnd);
    }
    
};
},{"../opts/keys.js":17}],11:[function(require,module,exports){
"use strict";

var defaults = require('../opts/defaults.js'),
    /*
        History constructor
        
        @param [var]: Variable to store in first history slot
        @param [int] (optional): Maximum size of history
    */
    History = function (obj, max) {
        this.max = max || defaults.historyMaxSize;
        this.add(obj);
    };
    
History.prototype = {

    entries: [],
    
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
        return this.entries[i];
    },
    
    /*
        Get the newest history entry
        
        @return [var]: Entry found at index size - 1
    */
    getLatest: function () {
        var index = this.getSize() - 1;

        return this.get(index);
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
},{"../opts/defaults.js":16}],12:[function(require,module,exports){
/*
	Pointer tracking
*/
"use strict";

var calc = require('../utils/calc.js'),
	utils = require('../utils/utils.js'),
	events = require('./events.js'),
	pointer = require('../bits/pointer.js'),
	isTracking = false,
	isTouch = false,
	PointerTracker = function () {},
	pointerTracker;

PointerTracker.prototype = {
	
	/*
		Start tracking the pointer
		
		@param [event]: Inital mouse/touch event
	*/
	start: function (e) {
		var point,
			event = utils.getActualEvent(e);
			
		isTouch = utils.isTouchEvent(event);
		point = utils.convertEventIntoPoint(event, isTouch);

		if (!isTracking) {
			isTracking = true;
			
			pointer.init(point, isTouch, true);
			events.addListeners(this.move, this.stop, isTouch);
		}
		
		return point;
	},
	
	
	/*
		Track a pointer movement
		
		@param [event]: New mouse/touch event
	*/
	move: function (e) {
		var event,
			isTouch,
			point;

		if (isTracking) {
			e.preventDefault();
			event = utils.getActualEvent(e);
			isTouch = utils.isTouchEvent(event);
			point = utils.convertEventIntoPoint(event, isTouch);

			if (pointer.isMouse && pointer.isDrag && e.which === 0) {
				this.stop();
			} else {
				pointer.moved(point);
			}
		}
		
	},
    
    /*
        Stop tracking the pointer
    */
	stop: function (e) {
		events.removeListeners();
		isTracking = false;
	},
    
    /*
        Update the pointer stats onFrame
    */
	frame: function () {
		if (isTracking) {
			pointer.update();
		}
	},
    
    /*
        Return the pointer
        
        @return [Pointer]
    */
    get: function (offset) {
       	var thisPointer = isTracking ? pointer : false;
       	
       	if (thisPointer && offset) {
       		thisPointer.offset = calc.offset(offset, thisPointer.current);
       	}

        return thisPointer;
    },
    
    isTracking: function () {
	    return isTracking;
    }
};

pointerTracker = new PointerTracker();

module.exports = pointerTracker;
},{"../bits/pointer.js":5,"../utils/calc.js":19,"../utils/utils.js":23,"./events.js":10}],13:[function(require,module,exports){
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
    	    rubix = Rubix[action.link],
    	    hasChanged = false;
    	    
        if (action.firstFrame) {
            action.onStart.call(action.scope, output, action.data);
            action.firstFrame = false;
        }

        output.pointer = rubix.updatePointer(action);
        action.progress = rubix.calcProgress(action, frameStart, fps);
        
    	// Loop over all values 
    	for (var key in action.values) {
        	if (action.values.hasOwnProperty(key)) {
        	    output[key] = rubix.easeValue(key, action, action.progress);
        		
            	// Apply Math. function if one defined
            	output[key] = action.values[key].math ? Math[action.values[key].math](output[key]) : output[key];

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
},{"../utils/utils.js":23,"./actionManager.js":8,"./rubix.js":14}],14:[function(require,module,exports){
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
        updatePointer
        easeValue
*/
"use strict";

var calc = require('../utils/calc.js'),
	utils = require('../utils/utils.js'),
    Easing = require('../utils/easingFunctions.js'),
	defaults = require('../opts/defaults.js'),
	KEY = require('../opts/keys.js'),
    PointerTracker = require('./pointerTracker.js'),
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
            Update pointer
        */
        updatePointer: function () {
            return false;
        },
        
        /*
            Ease value in action with provided key
            
            @param [string]: key of value
            @param [Action]
            @param [object]: Progress in timeline
        */
        easeValue: function (key, action, progress) {
            var value = action.values[key],
            	restrictedProgress = calc.restricted(progress, 0, 1),
            	easedValue;
            	
            if (value.steps) {
                restrictedProgress = utils.stepProgress(restrictedProgress, 1, value.steps);
            }

            easedValue = Easing.withinRange(restrictedProgress, value.from, value.to, value.ease);

            return easedValue;
        }
    },
    
    
    
    Pointer: {
    
    	/*
    	    Calc progress
    	    
        	Calc the progress of each pointer metric, 0 to 1 if range given,
            in direct terms if no given range
        	
        	@param [Action]: action to measure
        	@return [object]: Object of all progresses
    	*/
        calcProgress: function (action, frameStart) {
            var progress = {},
                offset = action.pointer.offset;

            for (var key in offset) {
                if (offset.hasOwnProperty(key)) {
                    progress[key] = {
                        direct: (!action.values[key]) ? true : false,
                        value: (!action.values[key]) ?
                            offset[key] :
                            calc.progress(offset[key] + action.origin[key], action.values[key].min, action.values[key].max)
                    };
                }
            }

            return progress;
        },
        
        /*
            Has function ended?
            
            True if action.isTracking is false
        */
        hasEnded: function (action) {
            return PointerTracker.isTracking() ? false : true;
        },
        
        /*
            Update pointer
            
            @param [Action]: 
            @return [boolean]: Latest pointer, or previous pointer if stopped tracking
        */
        updatePointer: function (action) {
            var currentPointer = action.pointer;

            action.pointer = PointerTracker.get(action.pointerOffset) || currentPointer;
            
            return action.pointer;
        },
        
        /*
            Ease value in action with provided key
            
            @param [string]: key of value
            @param [Action]
            @param [object]: Progress of pointer props
        */
        easeValue: function (key, action, progress) {
            var easedValue = 0, 
                value = action.values[key];

            // If we've already calculated the progress for this property
            if (progress[key]) {
                easedValue = Easing.withinRange(progress[key].value, value.min, value.max, defaults.trackEase, value.escapeAmp);
            
            // If we're linking this property into a user input
            } else if (value.link) {
                easedValue = Easing.withinRange(progress[value.link].value, value.min, value.max, defaults.trackEase, value.escapeAmp);
            }
            
            // TODO: Handle default easing 

            return easedValue;
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
		    	point = calc.point(action.origin, action.values.angle.current, action.values.distance.current);
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
            @param [object]: Progress of pointer props
	    */
	    easeValue: function (key, action, progress) {
	    	var value = action.values[key],
	    		newValue = value.current + progress[key];

	    	if (value.min) {
		    	newValue = Math.max(value.min, newValue);
	    	}
	    	
	    	if (value.max) {
		    	newValue = Math.min(value.max, newValue);
	    	}

	     	return newValue;
	    },
	    
	    updatePointer: function () {}
    },

};

rubixController = new Rubix();

module.exports = rubixController;
},{"../opts/defaults.js":16,"../opts/keys.js":17,"../utils/calc.js":19,"../utils/easingFunctions.js":20,"../utils/utils.js":23,"./pointerTracker.js":12}],15:[function(require,module,exports){
/*
    Token controller
*/
"use strict";

var tokenCounter = 0,
	Token = function () {};

Token.prototype = {
	
	/*
		Get the current token count
		
		@return [int]: Current token count
	*/
	get: function () {
		return tokenCounter;
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
		tokenCounter ++;
	}
	
};

module.exports = Token;
},{}],16:[function(require,module,exports){
/*
    Default options
    ----------------------------------------
*/
"use strict";

var KEY = require('./keys.js');

module.exports = {
    pointer: {
        historySize: 2, // number of pointer events to remember
        maxInactiveFrames: 2 // allow this number of frames to pass with no movement before we declare stationary pointer
    },
    trackEase: KEY.EASING.LINEAR,
    tweenTarget: 0
};
},{"./keys.js":17}],17:[function(require,module,exports){
/*
    String constants
    ----------------------------------------
*/
"use strict";

module.exports = {
    ANIMATE: 'animate',
    CALC: 'calc',
    JQUERY_ELEMENT: '_jQueryElement',
    EASING: {
	    QUAD_IN_OUT: 'quadInOut',
	    QUAD_OUT: 'quadOut',
		IN: 'In',
		IN_OUT: 'InOut',
		OUT: 'Out',
		LINEAR: 'linear'
    },
    LINK: {
	    TIME: 'Time',
	    POINTER: 'Pointer',
	    SPEED: 'Speed'
    },
    ERROR: {
	    ACTION_EXISTS: "Action already defined. Use forceOverride: true to override.",
	    NO_ACTION: "No action defined to inherit from.",
	    INVALID_EASING: ": Easing not defined"
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
},{}],18:[function(require,module,exports){
/*
    R E D S H I F T
    ----------------------------------------
    
    
*/
"use strict";

var KEY = require('./opts/keys.js'),
	ActionManager = require('./bobs/actionManager.js'),
	Chronos = require('./bobs/chronos.js'),
	Easing = require('./utils/easingFunctions.js'),
	calc = require('./utils/calc.js'),
	utils = require('./utils/utils.js'),
	shims = require('./utils/shims.js'),
	rQuery = require('./utils/rQuery.js'),
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
	    return redshift.ignite(this.token, KEY.LINK.TIME, ActionManager.createBase(defs, override));
	},
	
	/*
    	Run the provided action based on property speed
    	
    	@param [string]: Key of the action to process
    	@param [object]: Override action defaults with those defined here
	*/
	move: function (defs, override) {
	    return redshift.ignite(this.token, KEY.LINK.SPEED, ActionManager.createBase(defs, override));
	},
	

    /*
        Track pointer
    	
    	@param [string]: Key of the action to process
        @param [event]: Initiating pointer event
    */
	track: function (defs) {
	    var hasAllArgs = (arguments[2] !== undefined),
	        toTrack = hasAllArgs ? arguments[2] : arguments[1],
	        override = hasAllArgs ? arguments[3] : {};
	    
	    return redshift.ignite(this.token, KEY.LINK.POINTER, ActionManager.createBase(defs, override), toTrack);
	},
    
    
    /*
        Start specified action
        
        Activate the action and fire up Chronos animation loop
    */
    start: function () {
        redshift.start(this.token);
    },
    
    
    /*
        Stop specified action
    */
    stop: function () {
        redshift.stop(this.token);
    },
    
    getToken: function () {
        return this.token;
    }
    
};

Redshift.prototype = {

    newAction: function () {
        return this.get();
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
	
	/*
    	Ignite Redshift
    	
    	Get the specified action (or create if none), update its properties
    	and then start
        
        @param [object]: Properties to manipulate
        @param [object]: Options for track
        @param [event]: Initiating pointer event
        @return [int]: ID token for action
	*/
	ignite: function (token, link, changes, e) {
		var action = ActionManager.get(token);
		
		changes.link = link;

		ActionManager.change(token, changes, e);

		this.start(token);

		return token;
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
	},
	
	start: function (token) {
        ActionManager.activate(token);
        Chronos.start();
	},
	
	stop: function (token) {
    	ActionManager.deactivate(token);
	},
	
    Calc: calc,
	
	run: function () {
    	
	},
	
	updatePointer: function (x, y, z) {
    	
	},
	
	/*
    	Init Redshift
    	
    	Check if we need shims and load if necessary
	*/
	init: function () {
    	shims.featureCheck();
    	rQuery.check();
	}
};

redshift = new Redshift();

window.Redshift = redshift;
module.exports = redshift;
},{"./bobs/actionManager.js":8,"./bobs/chronos.js":9,"./opts/keys.js":17,"./utils/calc.js":19,"./utils/easingFunctions.js":20,"./utils/rQuery.js":21,"./utils/shims.js":22,"./utils/utils.js":23}],19:[function(require,module,exports){
/*
    Calculators
    ----------------------------------------
    
    Simple I/O snippets
    
    angle
    angleFromCenter
    difference
    distance
    distance1D
    distance2D
    distance3D
    elapsed
    hypotenuse
    offset
    progress
    restricted
    timeRemaining
    value
    valueEased
*/

"use strict";

var Offset = require('../bits/offset.js'),
    utils = require('./utils.js'),
    Calc = function () {},
    calc;
    
Calc.prototype = {

 
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
	    
	    @param [number]: Previous value
	    @param [number]: Current value
	    @param [number]: Dilate progress by x
	    @return [number]: Previous value plus the dilated difference
    */
    dilate: function (previous, current, dilation) {
	    return previous + ((current - previous) * dilation);
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
        Offset between two points
        
        Calculate the angle, distance, x y and z distances between two given points
        
        @param [Point]: First point
        @param [Point]: Second point
        @return [Offset]: Distance metrics between two points
    */
    offset: function (pointA, pointB) {
        var angle = this.angle(pointA, pointB),
            distance = this.distance2D(pointA, pointB),
            x = this.distance1D(pointA.x, pointB.x),
            y = this.distance1D(pointA.y, pointB.y),
            z = this.distance1D(pointA.z, pointB.z);
            
        return new Offset(angle, distance, x, y, z);
    },
    
    point: function (origin, angle, distance) {
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
    restricted: function (value, from, to) {
        return Math.min(Math.max(value, from), to);
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
        @parma [number] (optional): Amp modifier
        @return [number]: Value as calculated from progress within range (not limited within range)
    */
    valueEased: function (progress, from, to, easing) {
        var easedProgress = easing(progress);
        
        return this.value(easedProgress, from, to);
    },
    
    degreesToRadians: function (degrees) {
	    return degrees * Math.PI / 180;
    },
    
    radiansToDegrees: function (radians) {
	    return radians * 180 / Math.PI;
    }
};

calc = new Calc();

module.exports = calc;
},{"../bits/offset.js":3,"./utils.js":23}],20:[function(require,module,exports){
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
 	defaults = require('../opts/defaults.js'),
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
    
    'ease':			new Bezier(.25, .1, .25, 1.0),
    'ease-in':		new Bezier(.42, 0, 1.00, 1.0),
    'ease-out':		new Bezier(0, 0, .58, 1.0),
    'ease-in-out':	new Bezier(.42, 0, .58, 1.0),
    'back-in': 		new Bezier(.48,-0.45,.99,.79),
    'back-out': 	new Bezier(.11,.7,.6,1.31)

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

},{"../bits/bezier.js":2,"../opts/defaults.js":16,"../opts/keys.js":17,"./calc.js":19,"./utils.js":23}],21:[function(require,module,exports){
/*
    Redshift jQuery plugin
    
    Provides access to .play, .move and .track properties on an jQuery object.
    Uses that jQuery object to store a unqiue Redshift instance.
    
    .redshift() method used for other Redshift functions, ie $('#element').redshift('stop')
*/
var KEY = require('../opts/keys.js'),
    rQuery = function () {
    	var REDSHIFT = 'redshift',
    		execute = function ($element, action, arg1, arg2, arg3) {
    			$element.each(function () {
    				var $this = $(this),
    					thisRedshift = $this.data(REDSHIFT);
    				
    				// If we haven't stored a Redshift instance on this element, make one
    				if (!thisRedshift) {
    					thisRedshift = Redshift.get();
    					thisRedshift.data(KEY.JQUERY_ELEMENT, $this);
    					$this.data(REDSHIFT, thisRedshift);
    				}

    				thisRedshift[action](arg1, arg2, arg3);
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
    		execute(this, action, arguments[1], arguments[2]);
    		
    		return this;
    	};
    };

module.exports = {
    check: function () {
        if (window.jQuery) {
            rQuery();
        }
    }
};
},{"../opts/keys.js":17}],22:[function(require,module,exports){
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
},{}],23:[function(require,module,exports){
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
        Has the pointer moved?
        
        Compares the two provided pointers and returns true if they are different
        
        @param [object]: Pointer A
        @param [object]: Pointer B
        @return [boolean]: True if different
    */
    hasMoved: function (pointerA, pointerB) {
        return (pointerA.x !== pointerB.x || pointerA.y !== pointerB.y || pointerA.z !== pointerB.z);
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
},{"../opts/keys.js":17}]},{},[18])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvYWN0aW9uLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvYmV6aWVyLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvb2Zmc2V0LmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvcG9pbnQuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvYml0cy9wb2ludGVyLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvdmFsdWUuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvYml0cy92ZWxvY2l0eS5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy9ib2JzL2FjdGlvbk1hbmFnZXIuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvYm9icy9jaHJvbm9zLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JvYnMvZXZlbnRzLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JvYnMvaGlzdG9yeS5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy9ib2JzL3BvaW50ZXJUcmFja2VyLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JvYnMvcHJvY2Vzcy5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy9ib2JzL3J1Yml4LmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JvYnMvdG9rZW4uanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvb3B0cy9kZWZhdWx0cy5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy9vcHRzL2tleXMuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvcmVkc2hpZnQuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvdXRpbHMvY2FsYy5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy91dGlscy9lYXNpbmdGdW5jdGlvbnMuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvdXRpbHMvclF1ZXJ5LmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL3V0aWxzL3NoaW1zLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL3V0aWxzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdlRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgS0VZID0gcmVxdWlyZSgnLi4vb3B0cy9rZXlzLmpzJyksXG4gICAgY2FsYyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhbGMuanMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL3V0aWxzLmpzJyksXG4gICAgVG9rZW4gPSByZXF1aXJlKCcuLi9ib2JzL3Rva2VuLmpzJyksXG4gICAgdG9rZW4gPSBuZXcgVG9rZW4oKSxcbiAgICBWYWx1ZSA9IHJlcXVpcmUoJy4vdmFsdWUuanMnKSxcbiAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9LFxuICAgIEFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuLmdlbmVyYXRlKCk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLm9yaWdpbiA9IHt9O1xuICAgICAgICB0aGlzLnBsYXlsaXN0ID0gW107XG4gICAgfSxcbiAgICBkZWZhdWx0cyA9IHtcbiAgICBcbiAgICAgICAgLy8gSXMgdGhpcyBhY3Rpb24gYWN0aXZlXG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIFxuICAgICAgICAvLyBXaGF0IHRvIHVzZSB0byBwcm9jZXNzIHRoaXMgYWNpdG9uXG4gICAgICAgIGxpbms6IEtFWS5MSU5LLlRJTUUsXG4gICAgICAgIFxuICAgICAgICAvLyBNdWx0aXBseSBvdXRwdXQgdmFsdWUgYnlcbiAgICAgICAgYW1wOiAxLFxuICAgICAgICBcbiAgICAgICAgLy8gTXVsdGlwbHkgb3V0cHV0IHZhbHVlIG91dHNpZGUgbWluL21heCBieVxuICAgICAgICBlc2NhcGVBbXA6IDAsXG4gICAgICAgIFxuICAgICAgICAvLyBEZWxheSB0aGlzIGFjdGlvbiBieSB4IG1zXG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgICBcbiAgICAgICAgLy8gVGltZSBvZiBhbmltYXRpb24gKGlmIGFuaW1hdGluZykgaW4gbXNcbiAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgXG4gICAgICAgIC8vIEVhc2UgYW5pbWF0aW9uXG4gICAgICAgIGVhc2U6IEtFWS5FQVNJTkcuUVVBRF9JTl9PVVQsXG4gICAgICAgIFxuICAgICAgICAvLyBBcHBseSB0aGlzIE1hdGggZnVuY3Rpb24gdG8gb3V0cHV0IHZhbHVlXG4gICAgICAgIG1hdGg6IHVuZGVmaW5lZCxcbiAgICAgICAgXG4gICAgICAgIC8vIERpdmlkZSBhbmltYXRpb24gaW50byB0aGlzIG1hbnkgc3RlcHNcbiAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgIFxuICAgICAgICAvLyBcbiAgICAgICAgdGltZURpbGF0aW9uOiAxLFxuICAgICAgICBcbiAgICAgICAgcGxheWhlYWQ6IDAsXG4gICAgICAgIFxuICAgICAgICAvLyBcbiAgICAgICAgcG9pbnRlck9mZnNldDogdW5kZWZpbmVkLFxuICAgICAgICBcbiAgICAgICAgLy8gQ3VycmVudCBwcm9ncmVzc1xuICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFRpbWUgZWxhcHNlZFxuICAgICAgICBlbGFwc2VkOiAwLFxuICAgICAgICBcbiAgICAgICAgLy8gTG9vcCBhbmltYXRpb24geCBudW1iZXIgb2YgdGltZXMgKHRydWUgZm9yIEVURVJOQUxMWSlcbiAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgIFxuICAgICAgICAvLyBOdW1iZXIgb2YgdGltZXMgYW5pbWF0aW9uIGhhcyBsb29wZWRcbiAgICAgICAgbG9vcENvdW50OiAwLFxuICAgICAgICBcbiAgICAgICAgLy8gUGxheSBhbmltYXRpb24gYW5kIHJldmVyc2UgeCBudW1iZXIgb2YgdGltZXMgKHRydWUgZm9yIGZvcmV2ZXIpXG4gICAgICAgIHlveW86IGZhbHNlLFxuICAgICAgICBcbiAgICAgICAgLy8gTnVtYmVyIG9mIHRpbWVzIGFuaW1hdGlvbiBoYXMgeW95b2VkXG4gICAgICAgIHlveW9Db3VudDogMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFJ1biB0aGlzIGNhbGxiYWNrIG9uIGFjdGlvbiBzdGFydFxuICAgICAgICBvblN0YXJ0OiBjYWxsYmFjayxcbiAgICAgICAgXG4gICAgICAgIC8vIFJ1biB0aGlzIG9uIGFjdGlvbiBlbmRcbiAgICAgICAgb25FbmQ6IGNhbGxiYWNrLFxuICAgICAgICBcbiAgICAgICAgLy8gUnVuIHRoaXMgZXZlcnkgZnJhbWVcbiAgICAgICAgb25GcmFtZTogY2FsbGJhY2ssXG4gICAgICAgIFxuICAgICAgICAvLyBSdW4gdGhpcyB3aGVuIGFjdGlvbiBjaGFuZ2VzXG4gICAgICAgIG9uQ2hhbmdlOiBjYWxsYmFja1xuICAgIH07XG5cbi8qXG4gICAgU2V0IEFjdGlvbiBvcHRpb25zXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBVc2VyLWRlZmluZWQgb3B0aW9uc1xuKi9cbkFjdGlvbi5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAvLyBMb29wIHRocm91Z2ggc3RhbmRhcmQgb3B0aW9ucyBhbmQgYXNzaWduXG4gICAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgICAgIGlmIChkZWZhdWx0cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIElmIHVzZXIgaGFzIHNldCB0aGlzIG9wdGlvblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gT3Igc2V0IHRvIGRlZmF1bHRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gZGVmYXVsdHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0aGlzLnBsYXlsaXN0ID0gb3B0aW9ucy5wbGF5bGlzdCB8fCB0aGlzLnBsYXlsaXN0IHx8IFtdO1xuICAgIHRoaXMuc2NvcGUgPSBvcHRpb25zLnNjb3BlIHx8IHRoaXMuc2NvcGUgfHwgdGhpcztcblxuICAgIC8vIFNldCB0aGUgdmFsdWVzXG4gICAgdGhpcy5zZXRWYWx1ZXMob3B0aW9ucy52YWx1ZXMpO1xufTtcbiBcblxuLypcbiAgICBTZXQgVmFsdWVzXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBVc2VyLWRlZmluZWQgdmFsdWVzXG4qLyAgIFxuQWN0aW9uLnByb3RvdHlwZS5zZXRWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgLy8gQ3JlYXRlIG9yIHVwZGF0ZSBWYWx1ZSBvYmplY3RzIGZvciBlYWNoIGRlZmluZWQgdmFsdWVcbiAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZXNba2V5XSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW2tleV0udXBkYXRlKHZhbHVlc1trZXldLCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNba2V5XSA9IG5ldyBWYWx1ZSh2YWx1ZXNba2V5XSwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gSGFuZGxlIHNwZWNpYWwgdmFsdWVzXG5cbiAgICBpZiAodGhpcy52YWx1ZXMuYW5nbGUpIHtcbiAgICBcdHRoaXMudmFsdWVzLnggPSB0aGlzLnZhbHVlcy54IHx8IG5ldyBWYWx1ZSgwLCB0aGlzKTtcbiAgICAgICAgdGhpcy52YWx1ZXMueSA9IHRoaXMudmFsdWVzLnkgfHwgbmV3IFZhbHVlKDAsIHRoaXMpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBvcmlnaW5zXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMudmFsdWVzKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbltrZXldID0gdGhpcy52YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLypcbiAgICBSZXNldCB2YWx1ZXNcbiovXG5BY3Rpb24ucHJvdG90eXBlLnJlc2V0VmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnZhbHVlcykge1xuICAgICAgICB0aGlzLnZhbHVlc1trZXldLmN1cnJlbnQgPSB0aGlzLnZhbHVlc1trZXldLmZyb207XG4gICAgfVxuICAgIFxuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgIHRoaXMuZWxhcHNlZCA9IDA7XG59O1xuXG4vKlxuICAgIFJldmVyc2UgdmFsdWVzXG4qL1xuQWN0aW9uLnByb3RvdHlwZS5yZXZlcnNlVmFsdWVzID0gZnVuY3Rpb24gKCkge1xuXHR2YXIga2V5LCB0bywgZnJvbTtcblx0XG5cdHRoaXMucHJvZ3Jlc3MgPSBjYWxjLmRpZmZlcmVuY2UodGhpcy5wcm9ncmVzcywgMSk7XG5cdHRoaXMuZWxhcHNlZCA9IGNhbGMuZGlmZmVyZW5jZSh0aGlzLmVsYXBzZWQsIHRoaXMuZHVyYXRpb24pO1xuXG4gICAgZm9yIChrZXkgaW4gdGhpcy52YWx1ZXMpIHtcblx0ICAgIGlmICh0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdCAgICBcdHRvID0gdGhpcy52YWx1ZXNba2V5XS50bztcblx0ICAgIFx0ZnJvbSA9IHRoaXMudmFsdWVzW2tleV0uZnJvbTtcblx0ICAgIFx0XG5cdCAgICBcdHRoaXMudmFsdWVzW2tleV0udG8gPSBmcm9tO1xuXHRcdCAgICB0aGlzLnZhbHVlc1trZXldLmZyb20gPSB0bztcblx0ICAgIH1cbiAgICB9XG59O1xuXG4vKlxuICAgIFN0YXJ0IHRoZSBhY3Rpb25cbiovXG5BY3Rpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB1dGlscy5jdXJyZW50VGltZSgpICsgdGhpcy5kZWxheTtcbiAgICB0aGlzLmZyYW1lc3RhbXAgPSB0aGlzLnN0YXJ0ZWQ7XG4gICAgdGhpcy5maXJzdEZyYW1lID0gdHJ1ZTtcbn07XG5cbi8qXG4gICAgU3RvcCB0aGUgYWN0aW9uXG4qL1xuQWN0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gQWN0aW9uOyIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbi8qXG5cdEJlemllciBmdW5jdGlvbiBnZW5lcmF0b3JcbiAgICAgICAgXG4gICAgR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmdcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbmV3dG9uSXRlcmF0aW9ucyA9IDgsXG4gIFx0bmV3dG9uTWluU2xvcGUgPSAwLjAwMSxcbiAgXHRzdWJkaXZpc2lvblByZWNpc2lvbiA9IDAuMDAwMDAwMSxcbiAgXHRzdWJkaXZpc2lvbk1heEl0ZXJhdGlvbnMgPSAxMCxcbiAgXHRrU3BsaW5lVGFibGVTaXplID0gMTEsXG5cdGtTYW1wbGVTdGVwU2l6ZSA9IDEuMCAvIChrU3BsaW5lVGFibGVTaXplIC0gMS4wKSxcblx0ZmxvYXQzMkFycmF5U3VwcG9ydGVkID0gJ0Zsb2F0MzJBcnJheScgaW4gZ2xvYmFsLFxuXG5cdEJlemllciA9IGZ1bmN0aW9uIChtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XG5cdFx0dGhpcy5wcmVjb21wdXRlKG1YMSwgbVkxLCBtWDIsIG1ZMik7XG5cbiAgICBcdHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgIFx0XHRyZXR1cm4gc2VsZi5jYWxjQmV6aWVyKHNlbGYuZ2V0VEZvclgodCwgbVgxLCBtWDIpLCBtWTEsIG1ZMik7XG4gICAgXHR9XG4gICAgfTtcbiAgICBcbkJlemllci5wcm90b3R5cGUgPSB7XG5cblx0cHJlY29tcHV0ZTogZnVuY3Rpb24gKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuXHRcdHRoaXMubVNhbXBsZVZhbHVlcyA9IGZsb2F0MzJBcnJheVN1cHBvcnRlZCA/IG5ldyBGbG9hdDMyQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSkgOiBuZXcgQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSk7XG5cdFx0dGhpcy5jYWxjU2FtcGxlVmFsdWVzKG1YMSwgbVgyKTtcblx0fSxcblx0XG5cdGNhbGNTYW1wbGVWYWx1ZXM6IGZ1bmN0aW9uIChtWDEsIG1YMikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwga1NwbGluZVRhYmxlU2l6ZTsgKytpKSB7XG5cdFx0XHR0aGlzLm1TYW1wbGVWYWx1ZXNbaV0gPSB0aGlzLmNhbGNCZXppZXIoaSAqIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuXHRcdH1cblx0fSxcblxuXHRuZXd0b25SYXBoc29uSXRlcmF0ZTogZnVuY3Rpb24gKHQsIGd1ZXNzLCBtWDEsIG1YMikge1xuXHRcdHZhciBpID0gMCxcblx0XHRcdGN1cnJlbnRTbG9wZSxcblx0XHRcdGN1cnJlbnRYO1xuXHRcdFxuXHRcdGZvciAoaTsgaSA8IG5ld3Rvbkl0ZXJhdGlvbnM7ICsraSkge1xuXHRcdFx0Y3VycmVudFNsb3BlID0gdGhpcy5nZXRTbG9wZShndWVzcywgbVgxLCBtWDIpO1xuXHRcdFx0XG5cdFx0XHRpZiAoY3VycmVudFNsb3BlICE9PSAwLjApIHtcblx0XHRcdFx0Y3VycmVudFggPSB0aGlzLmNhbGNCZXppZXIoZ3Vlc3MsIG1YMSwgbVgyKSAtIHQ7XG5cdFx0XHRcdGd1ZXNzIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdDtcblx0fSxcblx0XG5cdGJpbmFyeVN1YmRpdmlkZTogZnVuY3Rpb24gKHQsIGFBLCBhQiwgbVgxLCBtWDIpIHtcblx0XHR2YXIgaSA9IDAsXG5cdFx0XHRjdXJyZW50WCxcblx0XHRcdGN1cnJlbnRUO1xuXHRcdFx0XG5cdFx0ZG8ge1xuXHRcdFx0Y3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcblx0XHRcdGN1cnJlbnRYID0gdGhpcy5jYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSB0O1xuXHRcdFx0XG5cdFx0XHRpZiAoY3VycmVudFggPiAwLjApIHtcblx0XHRcdFx0YUIgPSBjdXJyZW50VDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFBID0gY3VycmVudFQ7XG5cdFx0XHR9XG5cdFx0fSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gc3ViZGl2aXNpb25QcmVjaXNpb24gJiYgKytpIDwgc3ViZGl2aXNpb25NYXhJdGVyYXRpb25zKTtcblx0XHRcblx0XHRyZXR1cm4gY3VycmVudFQ7XG5cdH0sXG5cblx0Z2V0VEZvclg6IGZ1bmN0aW9uICh0LCBtWDEsIG1YMikge1xuXHRcdHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wLFxuXHRcdFx0Y3VycmVudFNhbXBsZSA9IDEsXG5cdFx0XHRsYXN0U2FtcGxlID0ga1NwbGluZVRhYmxlU2l6ZSAtIDEsXG5cdFx0XHRkaXN0LFxuXHRcdFx0Z3Vlc3MsXG5cdFx0XHRpbml0aWFsU2xvcGU7XG5cdFx0XHRcblx0XHRmb3IgKGludGVydmFsU3RhcnQ7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiB0aGlzLm1TYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gdDsgKytjdXJyZW50U2FtcGxlKSB7XG5cdFx0XHRpbnRlcnZhbFN0YXJ0ICs9IGtTYW1wbGVTdGVwU2l6ZTtcblx0XHR9XG5cdFx0XG5cdFx0LS1jdXJyZW50U2FtcGxlO1xuXG5cdFx0ZGlzdCA9ICh0IC0gdGhpcy5tU2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIC8gKHRoaXMubVNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlICsgMV0gLSB0aGlzLm1TYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pKTtcblx0XHRcblx0XHRndWVzcyA9IGludGVydmFsU3RhcnQgKyBkaXN0ICoga1NhbXBsZVN0ZXBTaXplO1xuXHRcdGluaXRpYWxTbG9wZSA9IHRoaXMuZ2V0U2xvcGUoZ3Vlc3MsIG1YMSwgbVgyKTtcblxuXHRcdGlmIChpbml0aWFsU2xvcGUgPT09IG5ld3Rvbk1pblNsb3BlKSB7XG5cdFx0XHR0ID0gdGhpcy5uZXd0b25SYXBoc29uSXRlcmF0ZSh0LCBndWVzcywgbVgxLCBtWDIpO1xuXHRcdH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09IDAuMCkge1xuXHRcdFx0dCA9IGd1ZXNzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0ID0gdGhpcy5iaW5hcnlTdWJkaXZpZGUodCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuXHRcdH1cblx0XHRyZXR1cm4gdDtcblx0fSxcblxuXHRnZXRTbG9wZTogZnVuY3Rpb24gKHQsIGExLCBhMikge1xuXHRcdHJldHVybiAzLjAgKiB0aGlzLkEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogdGhpcy5CKGExLCBhMikgKiB0ICsgdGhpcy5DKGExKTtcblx0fSxcblxuXHRjYWxjQmV6aWVyOiBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG5cdFx0cmV0dXJuICgodGhpcy5BKGExLCBhMikgKiB0ICsgdGhpcy5CKGExLCBhMikpICogdCArIHRoaXMuQyhhMSkpICogdDtcblx0fSxcblx0XG5cdEE6IGZ1bmN0aW9uIChhMSwgYTIpIHtcblx0XHRyZXR1cm4gMS4wIC0gMy4wICogYTIgKyAzLjAgKiBhMTtcblx0fSxcblx0XG5cdEI6IGZ1bmN0aW9uIChhMSwgYTIpIHtcblx0XHRyZXR1cm4gMy4wICogYTIgLSA2LjAgKiBhMTtcblx0fSxcblx0XG5cdEM6IGZ1bmN0aW9uIChhMSkge1xuXHRcdHJldHVybiAzLjAgKiBhMTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCZXppZXI7XG59KS5jYWxsKHRoaXMsdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIi8qXG4gICAgT2Zmc2V0IGNsYXNzIHwgZXh0ZW5kcyBQb2ludFxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBEZWZpbmVzIHRoZSByZWxhdGl2ZSBvZmZzZXQgZnJvbSBhbm90aGVyIHBvaW50XG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBQb2ludCA9IHJlcXVpcmUoJy4vcG9pbnQuanMnKSxcbiAgICBPZmZzZXQgPSBmdW5jdGlvbiAoYW5nbGUsIGRpc3RhbmNlLCB4LCB5LCB6KSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZSB8fCAwO1xuICAgICAgICB0aGlzLmRpc3RhbmNlID0gZGlzdGFuY2UgfHwgMDtcbiAgICAgICAgdGhpcy5zZXRQb2ludCh4LCB5LCB6KTtcbiAgICB9O1xuICAgIFxuT2Zmc2V0LnByb3RvdHlwZSA9IG5ldyBQb2ludCgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9mZnNldDsiLCIvKlxuICAgIFBvaW50IGNsYXNzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIERlZmluZXMgYSAzRCBwb2ludCBpbiBzcGFjZVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyIHx8IFBvaW50XTogRWl0aGVyIFggYXhpcyB2YWx1ZSBvciBQb2ludCBvYmplY3RcbiAgICBAcGFyYW0gW251bWJlcl06IFkgYXhpc1xuICAgIEBwYXJhbSBbbnVtYmVyXTogWiBheGlzXG4gICAgQHJldHVybiBbUG9pbnRdXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBQb2ludCA9IGZ1bmN0aW9uICh4LCB5LCB6KSB7XG4gICAgICAgIHRoaXMuc2V0UG9pbnQoeCwgeSwgeik7XG4gICAgfTtcblxuUG9pbnQucHJvdG90eXBlID0ge1xuICAgIHNldFBvaW50OiBmdW5jdGlvbiAoeCwgeSwgeikge1xuICAgICAgICB2YXIgeElzT2JqID0gKHR5cGVvZiB4ID09PSAnb2JqZWN0Jyk7XG5cbiAgICAgICAgdGhpcy54ID0geElzT2JqID8geC54IHx8IDAgOiB4IHx8IDA7XG4gICAgICAgIHRoaXMueSA9IHhJc09iaiA/IHgueSB8fCAwIDogeSB8fCAwO1xuICAgICAgICB0aGlzLnogPSB4SXNPYmogPyB4LnogfHwgMCA6IHogfHwgMDtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhbGMuanMnKSxcbiAgICBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL29wdHMvZGVmYXVsdHMuanMnKSxcbiAgICB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbHMuanMnKSxcbiAgICBIaXN0b3J5ID0gcmVxdWlyZSgnLi4vYm9icy9oaXN0b3J5LmpzJyksXG4gICAgUG9pbnQgPSByZXF1aXJlKCcuL3BvaW50LmpzJyksXG4gICAgT2Zmc2V0ID0gcmVxdWlyZSgnLi9vZmZzZXQuanMnKSxcbiAgICBWZWxvY2l0eSA9IHJlcXVpcmUoJy4vdmVsb2NpdHkuanMnKSxcbiAgICBQb2ludGVyQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHt9LFxuICAgIHBvaW50ZXJDb250cm9sbGVyO1xuXG5Qb2ludGVyQ29udHJvbGxlci5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgY3VycmVudDogbmV3IFBvaW50KCksXG4gICAgaGlzdG9yeTogdW5kZWZpbmVkLFxuICAgIGluYWN0aXZlRnJhbWVzOiAwLFxuICAgIGlzRHJhZzogZmFsc2UsXG4gICAgaXNUb3VjaDogZmFsc2UsXG4gICAgb2Zmc2V0OiBuZXcgT2Zmc2V0KCksXG4gICAgb3JpZ2luOiBuZXcgUG9pbnQoKSxcbiAgICB2ZWxvY2l0eTogbmV3IFZlbG9jaXR5KCksXG4gICAgXG4gICAgLypcbiAgICAgICAgSW5pdGFsaXNlIHRoZSBwb2ludGVyXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IENvb3JkaW5hdGVzIG9mIGluaXQgcG9pbnRcbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogVHJ1ZSBpZiBtb3VzZSBpcyBwb2ludGVyXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IFRydWUgaWYgdGhpcyBpcyBhIGRyYWcgZXZlbnRcbiAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uIChwb2ludCwgaXNUb3VjaCwgaXNEcmFnKSB7XG4gICAgICAgIHBvaW50ID0gbmV3IFBvaW50KHBvaW50KTtcblxuICAgICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgSGlzdG9yeShwb2ludCk7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHBvaW50O1xuICAgICAgICB0aGlzLm9yaWdpbiA9IHBvaW50O1xuICAgICAgICB0aGlzLmlzVG91Y2ggPSBpc1RvdWNoO1xuICAgICAgICB0aGlzLmlzRHJhZyA9IGlzRHJhZztcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBuZXcgT2Zmc2V0KCk7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVsb2NpdHkoKTtcbiAgICB9LFxuICAgIFxuICAgIFxuICAgIC8qXG4gICAgICAgIFBvaW50ZXIgaW5wdXQgaGFzIG1vdmVkLCBhZGQgdG8gaGlzdG9yeVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBDb29yZGluYXRlcyBvZiBuZXcgcG9pbnRcbiAgICAqL1xuICAgIG1vdmVkOiBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgcG9pbnQgPSBuZXcgUG9pbnQocG9pbnQpO1xuICAgICAgICB0aGlzLmhpc3RvcnkuYWRkKHBvaW50KTtcbiAgICB9LFxuICAgIFxuICAgIFxuICAgIC8qXG4gICAgICAgIENoZWNrIGZvciBtb3ZlbWVudCBhbmQgdXBkYXRlIHBvaW50ZXIgb2JqZWN0J3MgcHJvcGVydGllcyBvbiBuZXcgZnJhbWVcbiAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGF0ZXN0UG9pbnRlciA9IHRoaXMuaGlzdG9yeS5nZXRMYXRlc3QoKSxcbiAgICAgICAgICAgIHBvaW50ZXJBY3RpdmUgPSB1dGlsLmhhc01vdmVkKHRoaXMuY3VycmVudCwgbGF0ZXN0UG9pbnRlciksXG4gICAgICAgICAgICBtb3ZlbWVudDtcbiAgICAgICAgXG4gICAgICAgIC8vIFBvaW50ZXIgaGFzIG1vdmVkIGJldHdlZW4gZnJhbWVzLCB1cGRhdGUgcG9pbnRlciBwcm9wcyBcbiAgICAgICAgaWYgKHBvaW50ZXJBY3RpdmUpIHtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHZlbG9jaXR5IGZyb20gbGFzdCBwb3NpdGlvblxuICAgICAgICAgICAgbW92ZW1lbnQgPSBjYWxjLm9mZnNldCh0aGlzLmN1cnJlbnQsIGxhdGVzdFBvaW50ZXIpO1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWxvY2l0eShcbiAgICAgICAgICAgICAgICBtb3ZlbWVudC5hbmdsZSxcbiAgICAgICAgICAgICAgICBtb3ZlbWVudC5kaXN0YW5jZSxcbiAgICAgICAgICAgICAgICBtb3ZlbWVudC54LFxuICAgICAgICAgICAgICAgIG1vdmVtZW50LnksXG4gICAgICAgICAgICAgICAgbW92ZW1lbnQuelxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGN1cnJlbnQgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGxhdGVzdFBvaW50ZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFJlc2V0IGluYWN0aXZlIGZyYW1lIGNvdW50XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyBQb2ludGVyIGlzIGluYWN0aXZlIGFuZCBmcmFtZSBsaW1pdCByZWFjaGVkXG4gICAgICAgIH0gZWxzZSBpZiAoIXBvaW50ZXJBY3RpdmUgJiYgdGhpcy5pbmFjdGl2ZUZyYW1lcyA+PSBkZWZhdWx0cy5wb2ludGVyLm1heEluYWN0aXZlRnJhbWVzKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFNldCBzcGVlZCB0byB6ZXJvXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlbG9jaXR5KCk7XG5cbiAgICAgICAgLy8gUG9pbnRlciBpcyBpbmFjdGl2ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSW5jcmVtZW50IGluYWN0aXZlIGZyYW1lIGNvdW50ZXJcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMrKztcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnBvaW50ZXJDb250cm9sbGVyID0gbmV3IFBvaW50ZXJDb250cm9sbGVyKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcG9pbnRlckNvbnRyb2xsZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL3V0aWxzLmpzJyksXG5cdGNhbGMgPSByZXF1aXJlKCcuLi91dGlscy9jYWxjLmpzJyksXG5cdHByaW9yaXR5UHJvcHMgPSBbJ2N1cnJlbnQnLCAnZnJvbScsICd0bycsICdzdGFydCddLFxuXHRcblx0LypcbiAgICAgICAgSXMgdGhpcyBrZXkgYSBwcmlvcml0eSBwcm9wZXJ0eT9cbiAgICAgICAgXG4gICAgICAgIFByaW9yaXR5IHByb3BlcnRpZXMgYXJlIGhhbmRsZWQgc2VwZXJhdGVseSBhbmQgYmVmb3JlIGFsbCB0aGUgb3RoZXIgcHJvcHNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogVGhlIGtleSB0byBsb29rIHVwIGluIG91ciBwcmlvcml0eSBsaXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJcyB0aGlzIGEgcHJpb3JpdHk/XG5cdCovXG5cdGlzUHJpb3JpdHkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgXHRyZXR1cm4gKHByaW9yaXR5UHJvcHMuaW5kZXhPZihrZXkpID4gLTEpO1xuXHR9LFxuXHRcblx0LypcbiAgICBcdENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgIFx0XG4gICAgXHRUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gICAgXHR0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICBcdFxuICAgIFx0QHBhcmFtIFtzdHJpbmddOiBSZWxhdGl2ZSB2YWx1ZVxuICAgIFx0QHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgXHRAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcblx0Ki9cblx0Y2FsY1JlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGN1cnJlbnQpIHtcbiAgICBcdHZhciBuZXdWYWx1ZSA9IGN1cnJlbnQsXG4gICAgXHQgICAgZXF1YXRpb24gPSB2YWx1ZS5zcGxpdCgnPScpLFxuICAgIFx0ICAgIG9wZXJhdG9yID0gZXF1YXRpb25bMF0sXG4gICAgXHQgICAgbnVtID0gcGFyc2VGbG9hdChlcXVhdGlvblsxXSk7XG5cbiAgICBcdHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgXHRjYXNlICcrJzpcbiAgICAgICAgXHQgICAgbmV3VmFsdWUgPSBjdXJyZW50ICsgbnVtO1xuICAgICAgICBcdCAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICBcdCAgICBuZXdWYWx1ZSA9IGN1cnJlbnQgLSBudW07XG4gICAgICAgIFx0ICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgIFx0ICAgIG5ld1ZhbHVlID0gY3VycmVudCAqIG51bTtcbiAgICAgICAgXHQgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgXHQgICAgbmV3VmFsdWUgPSBjdXJyZW50IC8gbnVtO1xuICAgICAgICBcdCAgICBicmVhaztcbiAgICBcdH1cblxuICAgIFx0cmV0dXJuIG5ld1ZhbHVlO1xuXHR9LFxuXHRcblx0LypcbiAgICBcdFBhcnNlIHZhbHVlXG4gICAgXHRcbiAgICBcdFBhcnNlcyB0aGUgdmFsdWUsIHdoZXRoZXIgaXRzIGEgbnVtYmVyLCBzdHJpbmcgb3IgZnVuY3Rpb24uXG4gICAgXHRJZiBhIG51bWJlciwgcmV0dXJuLlxuICAgIFx0SWYgYSBzdHJpbmcsIGl0J3MgYSByZWxhdGl2ZSBhc3NpZ25tZW50IHNvIGNhbGN1bGF0ZSBuZXcgdGFyZ2V0IGJhc2VkIG9uIGl0cyBjb250ZW50c1xuICAgIFx0SWYgYSBmdW5jdGlvbiwgZmlyZSBpdCB3aXRoIGFjdGlvbi5kYXRhIGFuZCBjdXJyZW50IHZhbHVlIGFzIGFyZ3VtZW50c1xuICAgIFx0XG4gICAgXHRAcGFyYW0gW251bWJlci9zdHJpbmcvZnVuY3Rpb25dOiBDdXJyZW50IHZhbHVlXG4gICAgXHRAcGFyYW0gW29iamVjdF06IERhdGEgb2YgcGFyZW50IGFjdGlvblxuICAgIFx0QHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG5cdCovXG5cdHBhcnNlID0gZnVuY3Rpb24gKHZhbHVlLCBkYXRhLCBjdXJyZW50KSB7XG5cdCAgICByZXR1cm4gKHV0aWxzLmlzRnVuYyh2YWx1ZSkpID8gdmFsdWUoZGF0YSwgY3VycmVudCkgOiB2YWx1ZTtcblx0fSxcblx0XG5cdC8qXG4gICAgXHRWYWx1ZSBvYmplY3RcbiAgICBcdFxuICAgIFx0T24gaW5pdCwgcnVuIHVwZGF0ZSB3aXRoIGlzTmV3VmFsdWUgPSB0cnVlXG4gICAgXHRcbiAgICBcdEBwYXJhbSBbbnVtYmVyL3N0cmluZy9mdW5jdGlvbi9vYmplY3RdOiBOZXcgdmFsdWVcbiAgICBcdEBwYXJhbSBbQWNpdG9uXTogUGFyZW50IGFjdGlvblxuXHQqL1xuXHRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgYWN0aW9uKSB7XG5cdFx0dGhpcy51cGRhdGUodmFsdWUsIGFjdGlvbiwgdHJ1ZSk7XG5cdH0sXG5cdGRlZmF1bHRzID0ge1xuXHQgICAgLy8gQWN0dWFsIHZhbHVlXG4gICAgXHRjdXJyZW50OiAwLFxuICAgIFx0c3RhcnQ6IDAsXG5cdFxuICAgIFx0Ly8gQ3VycmVudCByYW5nZSBmb3IgdmFsdWVcbiAgICBcdGZyb206IDAsXG4gICAgXHR0bzogMSxcblx0XG4gICAgXHQvLyBNYXhpbXVtIHJhbmdlIGZvciB2YWx1ZVxuICAgIFx0bWluOiAwLFxuICAgIFx0bWF4OiAxLFxuICAgIFx0XG4gICAgXHQvLyBTcGVlZCBmb3IgLm1vdmUoKSwgaW4geHBzXG4gICAgXHRzcGVlZDogMCxcbiAgICBcdGZyaWN0aW9uOiAwLFxuICAgIFx0dGhydXN0OiAwLFxuICAgIFx0XG4gICAgXHQvLyBPcHRpb25zXG4gICAgXHRkdXJhdGlvbjogNDAwLFxuICAgIFx0ZGVsYXk6IDAsXG4gICAgXHRlYXNlOiAnZWFzZS1pbi1vdXQnLFxuICAgIFx0bGluazogbnVsbCwgLy8gdXNlIHRoZSBwcm9ncmVzcyBvZiB0aGlzIHZhbHVlXG4gICAgXHRtYXRoOiBudWxsLFxuICAgIFx0c3RlcHM6IDAsXG4gICAgXHRcbiAgICBcdC8vIEFtcCBmb3IgaW5zaWRlIGFuZCBvdXRzaWRlIHJhbmdlIChpZSB2YWx1ZSAqIGFtcClcbiAgICBcdGFtcDogMCxcbiAgICBcdGVzY2FwZUFtcDogMFxuXHR9O1xuXG5cdFxuLypcblx0VXBkYXRlIHRoZSB2YWx1ZSBwcm9wZXJ0aWVzXG5cdFxuXHRAcGFyYW0gW29iamVjdCB8fCBudW1iZXJdOiBVc2VyLWRlZmluZWQgdmFsdWVcblx0QHBhcmFtIFtvYmplY3RdOiBBY3Rpb24gdGhpcyB2YWx1ZSBiZWxvbmdzIHRvXG5cdEBwYXJhbSBbYm9vbGVhbl0gKG9wdGlvbmFsKTogSXMgdGhpcyBhIG5ldyB2YWx1ZSBjb25zdHJ1Y3RcbiovXG5WYWx1ZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHZhbHVlLCBhY3Rpb24sIGlzTmV3VmFsdWUpIHtcblx0dmFyIGRhdGEgPSAoYWN0aW9uKSA/IGFjdGlvbi5kYXRhIDoge307XG5cblx0Ly8gSWYgdmFsdWUgaXMganVzdCBhIG51bWJlclxuXHRpZiAodXRpbHMuaXNOdW0odmFsdWUpIHx8IHV0aWxzLmlzRnVuYyh2YWx1ZSkgfHwgdXRpbHMuaXNTdHJpbmcodmFsdWUpKSB7XG5cdCAgICB0aGlzLmZyb20gPSAoaXNOZXdWYWx1ZSkgPyAwIDogdGhpcy5jdXJyZW50O1xuXHQgICAgdGhpcy5jdXJyZW50ID0gKGlzTmV3VmFsdWUpID8gdGhpcy5mcm9tIDogdGhpcy5jdXJyZW50O1xuXHRcdHRoaXMudG8gPSBwYXJzZSh2YWx1ZSwgZGF0YSwgdGhpcy5jdXJyZW50KTtcblxuXHQvLyBPciBpZiBpdCBpcyBhbiBvYmplY3Rcblx0fSBlbHNlIHtcblx0XG5cdCAgICAvLyBEZWFsIHdpdGggb3VyIHByaW9yaXRpZXNcblx0ICAgIC8vIFRPRE86IFNlZSBpZiB0aGlzIGJhZGFzcyBpZiBzdGF0ZW1lbnQgKGVtcGhhc2lzIG9uIGFzcykgY2FuIGJlIHJlZmFjdG9yZWRcblx0ICAgIGlmIChpc05ld1ZhbHVlICYmIHZhbHVlLmhhc093blByb3BlcnR5KCdzdGFydCcpKSB7XG5cdFx0ICAgIHZhbHVlLmN1cnJlbnQgPSBwYXJzZSh2YWx1ZS5zdGFydCwgZGF0YSk7XG5cdCAgICB9XG5cdCAgICBcblx0ICAgIC8vIElmIHVzZXIgaGFzIGRlZmluZWQgYSBuZXcgY3VycmVudCwgYnV0IG5vdCBhIGZyb21cblx0ICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudCcpICYmICF2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnZnJvbScpKSB7XG4gICAgXHQgICAgdGhpcy5jdXJyZW50ID0gcGFyc2UodmFsdWUuY3VycmVudCwgZGF0YSk7XG4gICAgXHQgICAgdGhpcy5mcm9tID0gdGhpcy5jdXJyZW50O1xuXHQgICAgXG5cdCAgICAvLyBPciBpZiB1c2VyIGhhcyBkZWZpbmVkIGEgZnJvbSwgYnV0IG5vdCBhIGN1cnJlbnRcblx0ICAgIH0gZWxzZSBpZiAoIXZhbHVlLmhhc093blByb3BlcnR5KCdjdXJyZW50JykgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoJ2Zyb20nKSkge1xuICAgIFx0ICAgIHRoaXMuZnJvbSA9IGlzTmV3VmFsdWUgPyBwYXJzZSh2YWx1ZS5mcm9tLCBkYXRhKSA6IHRoaXMuY3VycmVudDtcbiAgICBcdCAgICB0aGlzLmN1cnJlbnQgPSBpc05ld1ZhbHVlID8gdGhpcy5mcm9tIDogdGhpcy5jdXJyZW50O1xuICAgICAgICBcbiAgICAgICAgLy8gT3IgdGhleSd2ZSBkZWZpbmVkIGJvdGhcblx0ICAgIH0gZWxzZSBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoJ2N1cnJlbnQnKSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnZnJvbScpKSB7XG4gICAgXHQgICAgdGhpcy5jdXJyZW50ID0gcGFyc2UodmFsdWUuY3VycmVudCwgZGF0YSk7XG4gICAgXHQgICAgdGhpcy5mcm9tID0gaXNOZXdWYWx1ZSA/IHBhcnNlKHZhbHVlLmZyb20sIGRhdGEpIDogdGhpcy5jdXJyZW50O1xuICAgIFx0ICAgIFxuICAgICAgICAvLyBPciB0aGV5J3ZlIGRlZmluZWQgbmVpdGhlclxuXHQgICAgfSBlbHNlIHtcbiAgICBcdCAgICB0aGlzLmN1cnJlbnQgPSBpc05ld1ZhbHVlID8gZGVmYXVsdHMuY3VycmVudCA6IHRoaXMuY3VycmVudDtcbiAgICBcdCAgICB0aGlzLmZyb20gPSBpc05ld1ZhbHVlID8gZGVmYXVsdHMuZnJvbSA6IHRoaXMuY3VycmVudDtcblx0ICAgIH1cblxuXHRcdHRoaXMudG8gPSBwYXJzZSh2YWx1ZS50bywgZGF0YSwgdGhpcy5jdXJyZW50KTtcblx0fVxuXHRcbiAgICAvLyBMb29wIHRocm91Z2ggcGVybWl0dGVkIHZhbHVlc1xuICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0cykge1xuXHQgICAgaWYgKGRlZmF1bHRzLmhhc093blByb3BlcnR5KGtleSkgJiYgIWlzUHJpb3JpdHkoa2V5KSkge1xuXG5cdFx0ICAgIC8vIElmIHVzZXIgaGFzIHN1Ym1pdHRlZCBhIHByb3BlcnR5XG5cdFx0ICAgIGlmICh1dGlscy5pc09iaih2YWx1ZSkgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHBhcnNlKHZhbHVlW2tleV0sIGRhdGEsIHRoaXMuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBPciB0aGVyZSdzIGEgZGVmYXVsdCBzZXQgb24gdGhlIGFjdGlvblxuXHRcdCAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqKGFjdGlvbikgJiYgYWN0aW9uLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBwYXJzZShhY3Rpb25ba2V5XSwgZGF0YSwgdGhpcy5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgaWYgdGhpcyBpcyBvdXIgZmlyc3QgdGltZSAoaG9uZXN0IGp1ZGdlKSwgc2V0IGFzIHRoZSBkZWZhdWx0LlxuXHRcdCAgICB9IGVsc2UgaWYgKGlzTmV3VmFsdWUpIHtcbiAgICBcdFx0ICAgIHRoaXNba2V5XSA9IGRlZmF1bHRzW2tleV07XG5cdFx0ICAgIH1cblx0XHQgICAgXG5cdCAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIEZpbmFsbHkgY2hlY2sgaWYgdG8gd2FzIGdpdmVuIGFzIGEgc3RyaW5nLCBhbmQgZmlndXJlIG91dCB0aGUgcmVsYXRpdmUgdmFsdWVcbiAgICBpZiAodXRpbHMuaXNTdHJpbmcodGhpcy50bykpIHtcbiAgICAgICAgdGhpcy50byA9IGNhbGNSZWxhdGl2ZVZhbHVlKHRoaXMudG8sIHRoaXMuY3VycmVudCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWYWx1ZTsiLCIvKlxuICAgIFZlbG9jaXR5IGNsYXNzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgb2YgdHJhdmVsXG4gICAgQHBhcmFtIFtudW1iZXJdOiBTcGVlZCBpbiBwaXhlbHMgcGVyIGZyYW1lIGFsb25nIHRoYXQgYW5nbGVcbiAgICBAcGFyYW0gW251bWJlcl06IFggYXhpcyBzcGVlZFxuICAgIEBwYXJhbSBbbnVtYmVyXTogWSBheGlzIHNwZWVkXG4gICAgQHBhcmFtIFtudW1iZXJdOiBaIGF4aXMgc3BlZWRcbiAgICBAcGFyYW0gW251bWJlcl06IFNwZWVkIGFyb3VuZCBvZmZzZXQgY2VudGVyXG4gICAgQHJldHVybiBbVmVsb2NpdHldXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBWZWxvY2l0eSA9IGZ1bmN0aW9uIChhbmdsZSwgc3BlZWQsIHhTcGVlZCwgeVNwZWVkLCB6U3BlZWQsIG9yYml0YWxTcGVlZCkge1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGUgfHwgMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkIHx8IDA7XG4gICAgICAgIHRoaXMueCA9IHhTcGVlZCB8fCAwO1xuICAgICAgICB0aGlzLnkgPSB5U3BlZWQgfHwgMDtcbiAgICAgICAgdGhpcy56ID0gelNwZWVkIHx8IDA7XG4gICAgICAgIHRoaXMub3JiaXRhbCA9IG9yYml0YWxTcGVlZCB8fCAwO1xuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0gVmVsb2NpdHk7IiwiLypcblx0QWN0aW9uTWFuYWdlclxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgS0VZID0gcmVxdWlyZSgnLi4vb3B0cy9rZXlzLmpzJyksXG5cdFBvaW50ZXJUcmFja2VyID0gcmVxdWlyZSgnLi9wb2ludGVyVHJhY2tlci5qcycpLFxuXHRBY3Rpb24gPSByZXF1aXJlKCcuLi9iaXRzL2FjdGlvbi5qcycpLFxuXHR1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL3V0aWxzLmpzJyksXG5cdEFjdGlvbk1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7fSxcblx0YWN0aW9uTWFuYWdlcixcblx0YWxsQWN0aW9ucyA9IFtdLFxuXHRhY3RpdmVUb2tlbnMgPSBbXSxcblx0ZGVhY3RpdmF0ZVF1ZXVlID0gW10sXG5cdGJhc2VBY3Rpb25zID0ge307XG5cbkFjdGlvbk1hbmFnZXIucHJvdG90eXBlID0ge1xuXHRcblx0Lypcblx0XHRDcmVhdGUgYWN0aW9uXG5cdFx0XG5cdFx0QHJldHVybiBbQWN0aW9uXVxuXHQqL1xuXHRjcmVhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgYWN0aW9uID0gbmV3IEFjdGlvbigpO1xuXG5cdFx0dGhpcy5yZWdpc3RlcihhY3Rpb24pO1xuXG5cdFx0cmV0dXJuIGFjdGlvbjtcblx0fSxcblx0XG5cdFxuXHQvKlxuXHRcdENoYW5nZSBhY3Rpb25cblx0XHRcblx0XHRAcGFyYW0gW1Rva2VuXTogVG9rZW4gZm9yIHRoZSBhY3Rpb25cblx0XHRAcGFyYW0gW29iamVjdF06IFZhbHVlIHByb3BlcnRpZXNcblx0XHRAcGFyYW0gW29iamVjdF06IEFjdGlvbiBvcHRpb25zXG5cdCovXG5cdGNoYW5nZTogZnVuY3Rpb24gKHRva2VuLCBjaGFuZ2VzLCBlKSB7XG5cdFx0dmFyIGFjdGlvbiA9IHRoaXMuZ2V0KHRva2VuKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjaGFuZ2VzLmxpbmsgPT09IEtFWS5MSU5LLlBPSU5URVIpIHtcblx0XHRcdGNoYW5nZXMucG9pbnRlck9mZnNldCA9IFBvaW50ZXJUcmFja2VyLnN0YXJ0KGUpO1xuICAgICAgICB9XG5cdFx0XHRcblx0XHRhY3Rpb24uc2V0KGNoYW5nZXMpO1xuXHR9LFxuXHRcblx0Lypcblx0XHREZWZpbmUgYSBiYXNlIGFjdGlvblxuXHRcdFxuXHRcdENhbiBiZSBjYWxsZWQgbGF0ZXIgd2l0aCAucGxheSgpXG5cdFx0XG5cdFx0QHBhcmFtIFtvYmplY3RdXG5cdCovXG5cdGRlZmluZTogZnVuY3Rpb24gKGFjdGlvbnMpIHtcblx0XHR2YXIga2V5LFxuXHRcdFx0Y2hhaW4sXG5cdFx0XHRiYXNlQWN0aW9uID0ge307XG5cblx0XHRmb3IgKGtleSBpbiBhY3Rpb25zKSB7XG5cdFx0XHRpZiAoYWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdGlmIChiYXNlQWN0aW9uc1trZXldICYmICFhY3Rpb25zW2tleV0uZm9yY2VPdmVycmlkZSkge1xuXHRcdFx0XHRcdHRocm93IEtFWS5FUlJPUi5BQ1RJT05fRVhJU1RTO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNoYWluID0ga2V5LnNwbGl0KCcuJyk7XG5cblx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGluaGVyaXRlbmNlIGNoYWluLCBtZXJnZVxuXHRcdFx0XHRcdC8vIFRPRE86IG11bHRpbGF5ZXJlZCBpbmhlcml0ZW5jZT9cblx0XHRcdFx0XHRpZiAoY2hhaW4ubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0aWYgKGJhc2VBY3Rpb25zW2NoYWluWzBdXSkge1xuXHRcdFx0XHRcdFx0XHRiYXNlQWN0aW9uc1trZXldID0gdXRpbHMubWVyZ2UoYmFzZUFjdGlvbnNbY2hhaW5bMF1dLCBhY3Rpb25zW2tleV0pO1xuXHRcdFx0XHRcdFx0Ly8gaWYgd2UgY2FuJ3QgZmluZCBhY3Rpb25cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRocm93IEtFWS5FUlJPUi5OT19BQ1RJT047XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gRWxzZSBkaXJlY3RseSBjb3B5XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJhc2VBY3Rpb25zW2tleV0gPSBhY3Rpb25zW2tleV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRcblx0XG5cdC8qXG4gICAgXHRDcmVhdGUgYmFzZSBhY3Rpb25cbiAgICBcdFxuICAgIFx0QHBhcmFtIFtzdHJpbmcgfHwgYXJyYXkgfHwgb2JqZWN0XTpcbiAgICBcdCAgICBTdHJpbmc6IE5hbWUgb3Igc3BhY2UtZGVsaW1pdGVkIHBsYXlsaXN0IG9mIGFjdGlvbnNcbiAgICBcdCAgICBBcnJheTogUGxheWxpc3Qgb2YgYWN0aW9uc1xuICAgIFx0ICAgIE9iamVjdDogUmF3IGFjdGlvblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEFjdGlvbiBvdmVycmlkZVxuXHQqL1xuXHRjcmVhdGVCYXNlOiBmdW5jdGlvbiAoZGVmcywgb3ZlcnJpZGUpIHtcbiAgICBcdHZhciBiYXNlQWN0aW9uID0ge30sXG4gICAgXHQgICAgYWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHN0cmFpZ2h0IGFjdGlvblxuICAgICAgICBpZiAodXRpbHMuaXNPYmooZGVmcykpIHtcbiAgICAgICAgICAgIGJhc2VBY3Rpb24gPSBkZWZzO1xuICAgICAgICAgICAgYmFzZUFjdGlvbi5wbGF5bGlzdCA9IFtdO1xuICAgICAgICAgICAgXG4gICAgICAgIC8vIFRoZXNlIGFyZSBwcmV2aW91c2x5IGRlZmluZWQgYWN0aW9uc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQ29tbWEtZGVsaW1pdGVkIHN0cmluZyBvciBzaW5nbGUgYWN0aW9uIG5hbWVcbiAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkZWZzKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbkxpc3QgPSBkZWZzLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEFycmF5IG9mIGFjdGlvbiBuYW1lc1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25MaXN0ID0gZGVmcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYmFzZUFjdGlvbiA9IHRoaXMuZ2V0RGVmaW5lZChhY3Rpb25MaXN0WzBdKTtcbiAgICAgICAgICAgIGJhc2VBY3Rpb24ucGxheWxpc3QgPSBhY3Rpb25MaXN0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBBcHBseSBvdmVycmlkZXMgaWYgcHJlc2VudFxuICAgICAgICBpZiAodXRpbHMuaXNPYmoob3ZlcnJpZGUpKSB7XG4gICAgICAgICAgICBiYXNlQWN0aW9uID0gdGhpcy5tZXJnZShiYXNlQWN0aW9uLCBvdmVycmlkZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBiYXNlQWN0aW9uO1xuXHR9LFxuXHRcblx0XG5cdC8qXG4gICAgXHRHZXQgZGVmaW5lZCBhY3Rpb25cbiAgICBcdFxuICAgIFx0QHBhcmFtIFtzdHJpbmddOiBUaGUgbmFtZSBvZiB0aGUgcHJlZGVmaW5lZCBhY3Rpb25cblx0Ki9cblx0Z2V0RGVmaW5lZDogZnVuY3Rpb24gKGtleSkge1xuXHQgICAgcmV0dXJuIHRoaXMuY29weShiYXNlQWN0aW9uc1trZXldKTtcblx0fSxcblx0XG5cdC8qXG4gICAgXHRDb3B5IGFuIGFjdGlvblxuXHQqL1xuXHRjb3B5OiBmdW5jdGlvbiAoYWN0aW9uKSB7XG5cdCAgICB2YXIgbmV3QWN0aW9uID0ge307XG5cbiAgICBcdGZvciAodmFyIGtleSBpbiBhY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICd2YWx1ZXMnKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0FjdGlvbltrZXldID0gYWN0aW9uW2tleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3QWN0aW9uLnZhbHVlcyA9IHV0aWxzLmNvcHkoYWN0aW9uLnZhbHVlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgXG5cdCAgICByZXR1cm4gbmV3QWN0aW9uO1xuXHR9LFxuXHRcblx0bWVyZ2U6IGZ1bmN0aW9uIChhY3Rpb24sIG92ZXJyaWRlKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvdmVycmlkZSkge1xuICAgICAgICAgICAgaWYgKG92ZXJyaWRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAndmFsdWVzJykge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25ba2V5XSA9IG92ZXJyaWRlW2tleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnZhbHVlcyA9IHV0aWxzLm1lcmdlKGFjdGlvbi52YWx1ZXMsIG92ZXJyaWRlLnZhbHVlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYWN0aW9uO1xuXHR9LFxuXHRcblx0XG5cdC8qXG5cdFx0UmVnaXN0ZXIgYWN0aW9uXG5cdFx0XG5cdFx0QHBhcmFtIFtBY3Rpb25dOiBBZGQgYWN0aW9uIHRvIHN0b3JhZ2UgYXJyYXlcblx0Ki9cblx0cmVnaXN0ZXI6IGZ1bmN0aW9uIChhY3Rpb24pIHtcblx0XHRhbGxBY3Rpb25zW2FjdGlvbi50b2tlbl0gPSBhY3Rpb247XG5cdH0sXG5cdFxuXHRcblx0Lypcblx0XHRHZXQgdGhlIHNwZWNpZmllZCBhY3Rpb25cblx0XHRcblx0XHRAcGFyYW0gW1Rva2VuXTogVG9rZW5cblx0XHRAcmV0dXJuIFtBY3Rpb24gfHwgYm9vbGVhbl06IEFjdGlvbiB3aXRoIHNwZWNpZmllZCB0b2tlbiwgZmFsc2UgaWYgbm9uZSBmb3VuZFxuXHQqL1xuXHRnZXQ6IGZ1bmN0aW9uICh0b2tlbikge1xuXHRcdHJldHVybiBhbGxBY3Rpb25zW3Rva2VuXSB8fCBmYWxzZTtcblx0fSxcblx0XG5cdFxuXHQvKlxuICAgIFx0R2V0IHRva2VucyBvZiBhbGwgYWN0aXZlIGFjdGlvbnNcbiAgICBcdFxuICAgIFx0QHJldHVybiBbYXJyYXldOiBBcnJheSBvZiBhY3RpdmUgdG9rZW5zXG5cdCovXG5cdGdldEFjdGl2ZVRva2VuczogZnVuY3Rpb24gKCkge1xuICAgIFx0cmV0dXJuIGFjdGl2ZVRva2Vucztcblx0fSxcblx0XG5cdFxuXHQvKlxuICAgIFx0QWN0aXZhdGUgc3BlY2lmaWVkIGFjdGlvblxuICAgIFx0XG4gICAgXHRBY3RpdmF0ZXMgYWN0aW9uIGFuZCBhZGRzIHRvIGFjdGl2ZVRva2VucyBhcnJheVxuICAgIFx0XG4gICAgXHRAcGFyYW0gW1Rva2VuXTogVG9rZW5cblx0Ki9cblx0YWN0aXZhdGU6IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIFx0dmFyIGFjdGlvbiA9IHRoaXMuZ2V0KHRva2VuKSxcblx0ICAgICAgICBpbmRleCA9IGFjdGl2ZVRva2Vucy5pbmRleE9mKHRva2VuKSxcblx0ICAgICAgICBkZWFjdGl2YXRlSW5kZXggPSBkZWFjdGl2YXRlUXVldWUuaW5kZXhPZih0b2tlbik7XG4gICAgXHRcbiAgICBcdGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGFjdGl2ZVRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIGRlYWN0aXZhdGUgcXVldWUgaWYgaXQncyBiZWVuIHBsYWNlZCB0aGVyZVxuICAgICAgICBpZiAoZGVhY3RpdmF0ZUluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UoZGVhY3RpdmF0ZUluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIFx0XG4gICAgXHRhY3Rpb24uc3RhcnQoKTtcblx0fSxcblx0XG5cdFxuXHQvKlxuICAgIFx0RGVhY3RpdmF0ZSBzcGVjaWZpZWQgYWN0aW9uXG4gICAgXHRcbiAgICBcdEFjdGl2YXRlcyBhY3Rpb24gYW5kIHJlbW92ZXMgZnJvbSBhY3RpdmVUb2tlbnMgYXJyYXlcbiAgICBcdFxuICAgIFx0QHBhcmFtIFtUb2tlbl06IFRva2VuXG5cdCovXG5cdGRlYWN0aXZhdGU6IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIFx0dmFyIGFjdGlvbiA9IHRoaXMuZ2V0KHRva2VuKSxcblx0ICAgICAgICBpbmRleCA9IGFjdGl2ZVRva2Vucy5pbmRleE9mKHRva2VuKTtcblxuXHQgICAgYWN0aW9uLnN0b3AoKTtcblx0ICAgIFxuICAgIFx0aWYgKGluZGV4ID4gLTEpIHtcbiAgICBcdCAgICBhY3RpdmVUb2tlbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBcdH1cblx0fSxcblx0XG5cdC8qXG4gICAgXHRQdXJnZSBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgXHRcbiAgICBcdExvb3BzIHRocm91Z2ggdGhlIGRlYWN0aXZhdGUgcXVldWUgYW5kIGRlY2lkZXMgd2hldGhlciB0byBkZWFjdGl2YXRlXG4gICAgXHRvciBzd2FwIGFjdGlvbiBwYXJhbWV0ZXJzIHdpdGggdGhlIG5leHQgaW4gdGhlIGFjdGlvbidzIHBsYXlMaXN0XG4gICAgXHRcbiAgICBcdFdlIHVzZSBhIGRlYWN0aXZhdGUgcXVldWUgcmF0aGVyIHRoYW4gZGVhY3RpdmF0ZSBhcyBzb29uIGFzIHdlIHByb2Nlc3MgaXRcbiAgICBcdGJlY2F1c2UgaWYgd2UgbWFuaXB1bGF0ZSB0aGUgbGlzdCBvZiBhY3RpdmF0ZWQgQWN0aW9ucyB3aGlsZSBpdCdzIGJlaW5nXG4gICAgXHRsb29wZWQgdGhyb3VnaCwgd2VsbCB5b3UgY2FuIG9ubHkgaW1hZ2luZSB0aGUgZnVuIHRoYXQgY2F1c2VzLlxuXHQqL1xuXHRwdXJnZTogZnVuY3Rpb24gKCkge1xuXHQgICAgdmFyIHF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblx0ICAgIFxuXHQgICAgLy8gUnVuIHRocm91Z2ggYWxsIHF1ZXVlZCBhY3Rpb25zIGFuZCBkZWNpZGUgd2hhdCB0byBkbyBuZXh0XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlTGVuZ3RoOyArK2kpIHtcblx0ICAgICAgICBpZiAodXRpbHMuaXNOdW0oZGVhY3RpdmF0ZVF1ZXVlW2ldKSkge1xuICAgIFx0ICAgICAgICB0aGlzLmRlY2lkZU5leHQoZGVhY3RpdmF0ZVF1ZXVlW2ldKTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cbiAgICAgICAgLy8gQ2xlYXIgZGVhY3RpdmF0ZVF1ZXVlXG5cdFx0ZGVhY3RpdmF0ZVF1ZXVlID0gW107XG5cdH0sXG5cdFxuXHQvKlxuICAgIFx0RGVjaWRlIHdoYXQgdG8gZG8gd2l0aCBhbiBhY3Rpb25cbiAgICBcdFxuICAgIFx0VGFrZXMgYW4gYWN0aW9uIGFuZCBkZWNpZGVzLCBiYXNlZCBvbiBpdHMgcGxheWxpc3QgYW5kIGxvb3AgcHJvcGVydGllcywgXG4gICAgXHR3aGF0IHRvIGRvIHdpdGggaXQgbmV4dC5cbiAgICBcdFxuICAgIFx0QHBhcmFtIFtUb2tlbl06IEFjdGlvbiB0b2tlblxuXHQqL1xuXHRkZWNpZGVOZXh0OiBmdW5jdGlvbiAodG9rZW4pIHtcblx0XHR2YXIgbmV4dHMgPSBbJ2xvb3AnLCAneW95bycsICdwbGF5TmV4dCddLFxuXHRcdFx0bnVtID0gbmV4dHMubGVuZ3RoLFxuXHRcdFx0aGFzRnV0dXJlID0gZmFsc2U7XG5cdFxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbnVtOyArK2kpIHtcblx0XHRcdGlmICh0aGlzW25leHRzW2ldXSh0b2tlbikpIHtcblx0XHRcdFx0aGFzRnV0dXJlID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVx0XG5cdFxuICAgIFx0aWYgKCFoYXNGdXR1cmUpIHtcbiAgICAgICAgXHR0aGlzLmRlYWN0aXZhdGUodG9rZW4pO1xuICAgIFx0fVxuXHR9LFxuXHRcblx0XG5cdC8qXG4gICAgXHRQbGF5IG5leHQgaW4gcGxheWxpc3QsIGlmIGV4aXN0c1xuICAgIFx0XG4gICAgXHRAcGFyYW0gW1Rva2VuXTogQWN0aW9uIHRva2VuXG4gICAgXHRAcmV0dXJuIFtib29sZWFuXTogU3VjY2Vzc1xuXHQqL1xuXHRwbGF5TmV4dDogZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgXHR2YXIgaGFzUGxheWVkTmV4dCA9IGZhbHNlLFxuICAgIFx0ICAgIGFjdGlvbiA9IHRoaXMuZ2V0KHRva2VuKSxcbiAgICBcdCAgICBwbGF5bGlzdExlbmd0aCA9IGFjdGlvbi5wbGF5bGlzdCA/IGFjdGlvbi5wbGF5bGlzdC5sZW5ndGggOiAwLFxuICAgIFx0ICAgIHBsYXloZWFkID0gYWN0aW9uLnBsYXloZWFkLFxuICAgIFx0ICAgIG5leHRBY3Rpb247XG5cbiAgICAgICAgLy8gQ2hlY2sgd2UgaGF2ZSBhIHBsYXlsaXN0IGFuZCB0aGF0IHRoaXMgaXMgYW4gYW5pbWF0aW9uXG4gICAgICAgIC8vIFRPRE86IE1heWJlIG1ha2UgYSBzZXQgb2YgcHJvcGVydGllcyBvbiB0aGUgcnViaXggdGhhdCBzYXlzIGFsbG93UGxheWxpc3Q6IHRydWVcbiAgICBcdGlmIChwbGF5bGlzdExlbmd0aCAmJiBhY3Rpb24ubGluayA9PT0gS0VZLkxJTksuVElNRSkge1xuICAgIFx0ICAgICsrcGxheWhlYWQ7XG5cbiAgICBcdCAgICBpZiAocGxheWhlYWQgPCBwbGF5bGlzdExlbmd0aCkge1xuICAgIFx0ICAgICAgICBuZXh0QWN0aW9uID0gdGhpcy5nZXREZWZpbmVkKGFjdGlvbi5wbGF5bGlzdFtwbGF5aGVhZF0pO1xuICAgIFx0ICAgICAgICBuZXh0QWN0aW9uLnBsYXloZWFkID0gcGxheWhlYWQ7XG4gICAgXHQgICAgICAgIFxuICAgICAgICBcdCAgICB0aGlzLmNoYW5nZSh0b2tlbiwgbmV4dEFjdGlvbik7XG4gICAgICAgIFx0ICAgIHRoaXMuYWN0aXZhdGUodG9rZW4pO1xuXG4gICAgICAgIFx0ICAgIGhhc1BsYXllZE5leHQgPSB0cnVlO1xuICAgIFx0ICAgIH1cbiAgICBcdH1cblxuICAgIFx0cmV0dXJuIGhhc1BsYXllZE5leHQ7XG5cdH0sXG5cdFxuXHRcblx0LypcbiAgICBcdExvb3AgY3VycmVudCBhY3Rpb24sIGlmIHdlJ3JlIHRoYXQgd2F5IGluY2xpbmVkXG4gICAgXHRcbiAgICBcdEBwYXJhbSBbVG9rZW5dOiBBY3Rpb24gdG9rZW5cbiAgICBcdEByZXR1cm4gW2Jvb2xlYW5dOiBTdWNjZXNzXG5cdCovXG5cdGxvb3A6IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIFx0dmFyIGhhc0xvb3BlZCA9IGZhbHNlLFxuICAgIFx0ICAgIGFjdGlvbiA9IHRoaXMuZ2V0KHRva2VuKSxcbiAgICBcdCAgICBsb29wRm9yZXZlciA9IChhY3Rpb24ubG9vcCA9PT0gdHJ1ZSk7XG5cbiAgICAgICAgaWYgKGFjdGlvbi5saW5rID09PSBLRVkuTElOSy5USU1FICYmIChsb29wRm9yZXZlciB8fCB1dGlscy5pc051bShhY3Rpb24ubG9vcCkpKSB7XG4gICAgICAgICAgICArK2FjdGlvbi5sb29wQ291bnQ7XG4gICAgICAgICAgICBpZiAoKGxvb3BGb3JldmVyIHx8IHV0aWxzLmlzTnVtKGFjdGlvbi5sb29wKSAmJiBhY3Rpb24ubG9vcENvdW50IDw9IGFjdGlvbi5sb29wKSkge1xuXHQgICAgICAgICAgICBhY3Rpb24ucmVzZXRWYWx1ZXMoKTtcblx0ICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZSh0b2tlbik7XG5cdCAgICAgICAgICAgIGhhc0xvb3BlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIFx0cmV0dXJuIGhhc0xvb3BlZDtcblx0fSxcblx0XG5cdFxuXHR5b3lvOiBmdW5jdGlvbiAodG9rZW4pIHtcblx0XHR2YXIgaGFzWW95b2VkID0gZmFsc2UsXG5cdFx0XHRhY3Rpb24gPSB0aGlzLmdldCh0b2tlbiksXG5cdFx0XHR5b3lvRm9yZXZlciA9IChhY3Rpb24ueW95byA9PT0gdHJ1ZSk7XG5cblx0XHRpZiAoYWN0aW9uLmxpbmsgPT09IEtFWS5MSU5LLlRJTUUgJiYgKHlveW9Gb3JldmVyIHx8IHV0aWxzLmlzTnVtKGFjdGlvbi55b3lvKSkpIHtcblx0XHRcdCsrYWN0aW9uLnlveW9Db3VudDtcblx0XHRcdGlmICh5b3lvRm9yZXZlciB8fCAodXRpbHMuaXNOdW0oYWN0aW9uLnlveW8pICYmIGFjdGlvbi55b3lvQ291bnQgPD0gYWN0aW9uLnlveW8pKSB7XG5cdFx0XHRcdGFjdGlvbi5yZXZlcnNlVmFsdWVzKCk7XG5cdFx0XHRcdHRoaXMuYWN0aXZhdGUodG9rZW4pO1xuXHRcdFx0XHRoYXNZb3lvZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBoYXNZb3lvZWQ7XG5cdH0sXG5cdFxuXHRcblx0LypcbiAgICBcdEFkZCB0b2tlbiB0byB0aGUgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgIFx0XG4gICAgXHRRdWV1ZSBnZXRzIHByb2Nlc3NlZCBhdCB0aGUgZW5kIG9mIGV2ZXJ5IGZyYW1lXG4gICAgXHRcbiAgICBcdEBwYXJhbSBbVG9rZW5dOiBUb2tlbiBvZiBhY3Rpb25cblx0Ki9cblx0cXVldWVEZWFjdGl2YXRlOiBmdW5jdGlvbiAodG9rZW4pIHtcblx0XHRkZWFjdGl2YXRlUXVldWUucHVzaCh0b2tlbik7XG5cdH0sXG5cdFxuXHRcblx0LypcbiAgICBcdEdldCBkYXRhIGZyb20gb3VyIGFjdGlvbidzIGRhdGEgb2JqZWN0XG4gICAgXHRcbiAgICBcdEBwYXJhbSBbVG9rZW5dOiBBY3Rpb24gdG9rZW5cbiAgICBcdEBwYXJhbSBbc3RyaW5nXTogS2V5IG9mIGRhdGEgcG9pbnRcblx0Ki9cblx0Z2V0RGF0YTogZnVuY3Rpb24gKHRva2VuLCBrZXkpIHtcblx0ICAgIHZhciBhY3Rpb24gPSB0aGlzLmdldCh0b2tlbik7XG4gICAgXHRcbiAgICBcdHJldHVybiBhY3Rpb24uZGF0YSA/IGFjdGlvbi5kYXRhW2tleV0gOiB1bmRlZmluZWQ7XG5cdH0sXG5cdFxuXHRcblx0LypcbiAgICBcdFNldCBkYXRhIHBvaW50IHRvIGFjdGlvbidzIGRhdGEgb2JqZWN0XG4gICAgXHRcbiAgICBcdEBwYXJhbSBbVG9rZW5dOiBBY3Rpb24gdG9rZW5cbiAgICBcdEBwYXJhbSBbb2JqZWN0XTogRGF0YSB0byBzYXZlIHRvIGFjdGlvblxuXHQqL1xuXHRzZXREYXRhOiBmdW5jdGlvbiAodG9rZW4sIGRhdGEpIHtcbiAgICBcdHZhciBhY3Rpb24gPSB0aGlzLmdldCh0b2tlbik7XG5cbiAgICBcdGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgIFx0aWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgXHRhY3Rpb24uZGF0YVtrZXldID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgXHRcbiAgICAgICAgICAgIFx0aWYgKGtleSA9PT0gS0VZLkpRVUVSWV9FTEVNRU5UKSB7XG4gICAgICAgICAgICAgICAgXHRhY3Rpb24uZGF0YSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgIFx0fVxuICAgICAgICBcdH1cbiAgICBcdH1cblx0fVxufTtcblxuYWN0aW9uTWFuYWdlciA9IG5ldyBBY3Rpb25NYW5hZ2VyKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYWN0aW9uTWFuYWdlcjsiLCIvKlxuICAgIENocm9ub3NcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi91dGlscy9jYWxjLmpzJyksXG5cdHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbHMuanMnKSxcbiAgICBBY3Rpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi9hY3Rpb25NYW5hZ2VyLmpzJyksXG4gICAgUG9pbnRlclRyYWNrZXIgPSByZXF1aXJlKCcuL3BvaW50ZXJUcmFja2VyLmpzJyksXG4gICAgUHJvY2VzcyA9IHJlcXVpcmUoJy4vcHJvY2Vzcy5qcycpLFxuICAgIENocm9ub3MgPSBmdW5jdGlvbiAoKSB7fSxcbiAgICBjaHJvbm9zLFxuICAgIHByZXZGcmFtZVRpbWUsXG4gICAgY3VycmVudFRpbWUsXG4gICAgZnBzID0gNjAsXG4gICAgaXNSdW5uaW5nID0gZmFsc2U7IC8vIGlzIGFuaW1hdGlvbiBsb29wIHJ1bm5pbmc/IC0gcHJldmVudHMgbXVsdGlwbGUgckFGIGxvb3BzIGZyb20gcnVubmluZ1xuICAgIFxuQ2hyb25vcy5wcm90b3R5cGUgPSB7XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBjaHJvbm9zIGlmIG5vdCBhbHJlYWR5IHJ1bm5pbmdcbiAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5mcmFtZSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBcbiAgICAvKlxuICAgICAgICBTdG9wIGNocm9ub3NcbiAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICBcbiAgICBcbiAgICAvKlxuICAgICAgICBGcmFtZVxuICAgICAgICBcbiAgICAgICAgQ2hlY2sgaWYgdGhlcmUgYXJlIGFjdGl2ZSBhY3Rpb25zIHRvIHByb2Nlc3MsIHRoZW4gY2FsbGJhY2tcbiAgICAqL1xuICAgIGZyYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIGFjdGl2ZUFjdGlvblRva2VucyA9IEFjdGlvbk1hbmFnZXIuZ2V0QWN0aXZlVG9rZW5zKCk7XG5cbiAgICAgICAgaWYgKGFjdGl2ZUFjdGlvblRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUFjdGlvblRva2VucyA9IEFjdGlvbk1hbmFnZXIuZ2V0QWN0aXZlVG9rZW5zKCk7IC8vIHJlY2hlY2sgaW5jYXNlIHN0dWZmIGhhcyBiZWVuIGRlYWN0aXZhdGVkIHNpbmNlXG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUFjdGlvblRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBcdHNlbGYudXBkYXRlVGltZSgpO1xuICAgICAgICAgICAgICAgIFx0UG9pbnRlclRyYWNrZXIuZnJhbWUoKTtcbiAgICAgICAgICAgICAgICBcdFByb2Nlc3MuYWN0aW9ucyhhY3RpdmVBY3Rpb25Ub2tlbnMsIGN1cnJlbnRUaW1lLCBmcHMpO1xuICAgICAgICAgICAgICAgICAgICBBY3Rpb25NYW5hZ2VyLnB1cmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZnJhbWUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICB1cGRhdGVUaW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgXHQvL3ByZXZGcmFtZVRpbWUgPSBjdXJyZW50VGltZTtcbiAgICBcdGN1cnJlbnRUaW1lID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICBcdC8vZnBzID0gMTAwMCAvIGNhbGMuZGlmZmVyZW5jZShwcmV2RnJhbWVUaW1lLCBjdXJyZW50VGltZSk7XG4gICAgfVxufTtcblxuY2hyb25vcyA9IG5ldyBDaHJvbm9zKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2hyb25vczsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIEtFWSA9IHJlcXVpcmUoJy4uL29wdHMva2V5cy5qcycpLFxuICAgIGNhbGxiYWNrcyA9IHt9LFxuICAgIGV2ZW50ID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFxuICAgIGFkZExpc3RlbmVyczogZnVuY3Rpb24gKG9uTW92ZSwgb25FbmQsIGlzVG91Y2hFdmVudCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgZXZlbnQubW92ZSA9IGlzVG91Y2hFdmVudCA/IEtFWS5FVkVOVC5UT1VDSE1PVkUgOiBLRVkuRVZFTlQuTU9VU0VNT1ZFO1xuICAgICAgICBldmVudC5lbmQgPSBpc1RvdWNoRXZlbnQgPyBLRVkuRVZFTlQuVE9VQ0hFTkQgOiBLRVkuRVZFTlQuTU9VU0VVUDtcblxuICAgICAgICBjYWxsYmFja3Mub25Nb3ZlID0gb25Nb3ZlO1xuXG4gICAgICAgIGNhbGxiYWNrcy5vbkVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25FbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBvbkVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQubW92ZSwgY2FsbGJhY2tzLm9uTW92ZSk7XG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQuZW5kLCBjYWxsYmFja3Mub25FbmQpO1xuICAgIH0sXG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXJzOiBmdW5jdGlvbiAoKSB7XG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQubW92ZSwgY2FsbGJhY2tzLm9uTW92ZSk7XG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQuZW5kLCBjYWxsYmFja3Mub25FbmQpO1xuICAgIH1cbiAgICBcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL29wdHMvZGVmYXVsdHMuanMnKSxcbiAgICAvKlxuICAgICAgICBIaXN0b3J5IGNvbnN0cnVjdG9yXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3Zhcl06IFZhcmlhYmxlIHRvIHN0b3JlIGluIGZpcnN0IGhpc3Rvcnkgc2xvdFxuICAgICAgICBAcGFyYW0gW2ludF0gKG9wdGlvbmFsKTogTWF4aW11bSBzaXplIG9mIGhpc3RvcnlcbiAgICAqL1xuICAgIEhpc3RvcnkgPSBmdW5jdGlvbiAob2JqLCBtYXgpIHtcbiAgICAgICAgdGhpcy5tYXggPSBtYXggfHwgZGVmYXVsdHMuaGlzdG9yeU1heFNpemU7XG4gICAgICAgIHRoaXMuYWRkKG9iaik7XG4gICAgfTtcbiAgICBcbkhpc3RvcnkucHJvdG90eXBlID0ge1xuXG4gICAgZW50cmllczogW10sXG4gICAgXG4gICAgLypcbiAgICAgICAgUHVzaCBuZXcgdmFyIHRvIGhpc3RvcnlcbiAgICAgICAgXG4gICAgICAgIFNoaWZ0IG91dCBvbGRlc3QgZW50cnkgaWYgd2UndmUgcmVhY2hlZCBtYXhpbXVtIGNhcGFjaXR5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3Zhcl06IFZhcmlhYmxlIHRvIHB1c2ggaW50byBoaXN0b3J5LmVudHJpZXNcbiAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIgY3VycmVudFNpemUgPSB0aGlzLmdldFNpemUoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZW50cmllcy5wdXNoKG9iaik7XG4gICAgICAgIFxuICAgICAgICBpZiAoY3VycmVudFNpemUgPj0gdGhpcy5tYXgpIHtcbiAgICAgICAgICAgIHRoaXMuZW50cmllcy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdmFyaWFibGUgYXQgc3BlY2lmaWVkIGluZGV4XG5cbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleFxuICAgICAgICBAcmV0dXJuIFt2YXJdOiBWYXIgZm91bmQgYXQgc3BlY2lmaWVkIGluZGV4XG4gICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXNbaV07XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdGhlIG5ld2VzdCBoaXN0b3J5IGVudHJ5XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt2YXJdOiBFbnRyeSBmb3VuZCBhdCBpbmRleCBzaXplIC0gMVxuICAgICovXG4gICAgZ2V0TGF0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0U2l6ZSgpIC0gMTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoaW5kZXgpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBzZWNvbmQgbmV3ZXN0IGhpc3RvcnkgZW50cnlcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3Zhcl06IEVudHJ5IGZvdW5kIGF0IGluZGV4IHNpemUgLSAyXG4gICAgKi9cbiAgICBnZXRQcmV2aW91czogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldFNpemUoKSAtIDI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGluZGV4KTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBjdXJyZW50IGhpc3Rvcnkgc2l6ZVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbaW50XTogQ3VycmVudCBsZW5ndGggb2YgZW50cmllcy5sZW5ndGhcbiAgICAqL1xuICAgIGdldFNpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllcy5sZW5ndGg7XG4gICAgfVxuICAgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIaXN0b3J5OyIsIi8qXG5cdFBvaW50ZXIgdHJhY2tpbmdcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi91dGlscy9jYWxjLmpzJyksXG5cdHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbHMuanMnKSxcblx0ZXZlbnRzID0gcmVxdWlyZSgnLi9ldmVudHMuanMnKSxcblx0cG9pbnRlciA9IHJlcXVpcmUoJy4uL2JpdHMvcG9pbnRlci5qcycpLFxuXHRpc1RyYWNraW5nID0gZmFsc2UsXG5cdGlzVG91Y2ggPSBmYWxzZSxcblx0UG9pbnRlclRyYWNrZXIgPSBmdW5jdGlvbiAoKSB7fSxcblx0cG9pbnRlclRyYWNrZXI7XG5cblBvaW50ZXJUcmFja2VyLnByb3RvdHlwZSA9IHtcblx0XG5cdC8qXG5cdFx0U3RhcnQgdHJhY2tpbmcgdGhlIHBvaW50ZXJcblx0XHRcblx0XHRAcGFyYW0gW2V2ZW50XTogSW5pdGFsIG1vdXNlL3RvdWNoIGV2ZW50XG5cdCovXG5cdHN0YXJ0OiBmdW5jdGlvbiAoZSkge1xuXHRcdHZhciBwb2ludCxcblx0XHRcdGV2ZW50ID0gdXRpbHMuZ2V0QWN0dWFsRXZlbnQoZSk7XG5cdFx0XHRcblx0XHRpc1RvdWNoID0gdXRpbHMuaXNUb3VjaEV2ZW50KGV2ZW50KTtcblx0XHRwb2ludCA9IHV0aWxzLmNvbnZlcnRFdmVudEludG9Qb2ludChldmVudCwgaXNUb3VjaCk7XG5cblx0XHRpZiAoIWlzVHJhY2tpbmcpIHtcblx0XHRcdGlzVHJhY2tpbmcgPSB0cnVlO1xuXHRcdFx0XG5cdFx0XHRwb2ludGVyLmluaXQocG9pbnQsIGlzVG91Y2gsIHRydWUpO1xuXHRcdFx0ZXZlbnRzLmFkZExpc3RlbmVycyh0aGlzLm1vdmUsIHRoaXMuc3RvcCwgaXNUb3VjaCk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBwb2ludDtcblx0fSxcblx0XG5cdFxuXHQvKlxuXHRcdFRyYWNrIGEgcG9pbnRlciBtb3ZlbWVudFxuXHRcdFxuXHRcdEBwYXJhbSBbZXZlbnRdOiBOZXcgbW91c2UvdG91Y2ggZXZlbnRcblx0Ki9cblx0bW92ZTogZnVuY3Rpb24gKGUpIHtcblx0XHR2YXIgZXZlbnQsXG5cdFx0XHRpc1RvdWNoLFxuXHRcdFx0cG9pbnQ7XG5cblx0XHRpZiAoaXNUcmFja2luZykge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQgPSB1dGlscy5nZXRBY3R1YWxFdmVudChlKTtcblx0XHRcdGlzVG91Y2ggPSB1dGlscy5pc1RvdWNoRXZlbnQoZXZlbnQpO1xuXHRcdFx0cG9pbnQgPSB1dGlscy5jb252ZXJ0RXZlbnRJbnRvUG9pbnQoZXZlbnQsIGlzVG91Y2gpO1xuXG5cdFx0XHRpZiAocG9pbnRlci5pc01vdXNlICYmIHBvaW50ZXIuaXNEcmFnICYmIGUud2hpY2ggPT09IDApIHtcblx0XHRcdFx0dGhpcy5zdG9wKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwb2ludGVyLm1vdmVkKHBvaW50KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RvcCB0cmFja2luZyB0aGUgcG9pbnRlclxuICAgICovXG5cdHN0b3A6IGZ1bmN0aW9uIChlKSB7XG5cdFx0ZXZlbnRzLnJlbW92ZUxpc3RlbmVycygpO1xuXHRcdGlzVHJhY2tpbmcgPSBmYWxzZTtcblx0fSxcbiAgICBcbiAgICAvKlxuICAgICAgICBVcGRhdGUgdGhlIHBvaW50ZXIgc3RhdHMgb25GcmFtZVxuICAgICovXG5cdGZyYW1lOiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKGlzVHJhY2tpbmcpIHtcblx0XHRcdHBvaW50ZXIudXBkYXRlKCk7XG5cdFx0fVxuXHR9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFJldHVybiB0aGUgcG9pbnRlclxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbUG9pbnRlcl1cbiAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgIFx0dmFyIHRoaXNQb2ludGVyID0gaXNUcmFja2luZyA/IHBvaW50ZXIgOiBmYWxzZTtcbiAgICAgICBcdFxuICAgICAgIFx0aWYgKHRoaXNQb2ludGVyICYmIG9mZnNldCkge1xuICAgICAgIFx0XHR0aGlzUG9pbnRlci5vZmZzZXQgPSBjYWxjLm9mZnNldChvZmZzZXQsIHRoaXNQb2ludGVyLmN1cnJlbnQpO1xuICAgICAgIFx0fVxuXG4gICAgICAgIHJldHVybiB0aGlzUG9pbnRlcjtcbiAgICB9LFxuICAgIFxuICAgIGlzVHJhY2tpbmc6IGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBpc1RyYWNraW5nO1xuICAgIH1cbn07XG5cbnBvaW50ZXJUcmFja2VyID0gbmV3IFBvaW50ZXJUcmFja2VyKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcG9pbnRlclRyYWNrZXI7IiwiLypcbiAgICBQcm9jZXNzIGFjdGlvbnNcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIEFjdGlvbk1hbmFnZXIgPSByZXF1aXJlKCcuL2FjdGlvbk1hbmFnZXIuanMnKSxcbiAgICBSdWJpeCA9IHJlcXVpcmUoJy4vcnViaXguanMnKSxcblx0dXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy91dGlscy5qcycpLFxuICAgIFByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7fSxcbiAgICBwcm9jZXNzO1xuICAgIFxuUHJvY2Vzcy5wcm90b3R5cGUgPSB7XG5cbiAgICAvKlxuICAgICAgICBQcm9jZXNzIGFjdGlvbnNcbiAgICAgICAgXG4gICAgICAgIExvb3AgdGhyb3VnaCBhbGwgYWN0aXZlIGFjdGlvbnMgYW5kIHByb2Nlc3MgZWFjaFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFthcnJheV06IFRva2VucyBvZiBhY3RpdmUgYWN0aW9ucyBhdCB0aW1lIG9mIGZyYW1lc3RhcnRcbiAgICAgICAgQHBhcmFtIFt0aW1lc3RhbXBdOiBUaW1lc3RhbXAgb2YgZnJhbWVzdGFydFxuICAgICovXG5cdGFjdGlvbnM6IGZ1bmN0aW9uICh0b2tlbnMsIGZyYW1lU3RhcnQsIGZwcykge1xuXHRcdHZhciBpID0gMCxcblx0XHRcdGFjdGl2ZSA9IHRva2Vucy5sZW5ndGg7XG5cblx0XHRmb3IgKGk7IGkgPCBhY3RpdmU7ICsraSkge1xuXHRcdFx0dGhpcy5zaW5nbGVBY3Rpb24oQWN0aW9uTWFuYWdlci5nZXQodG9rZW5zW2ldKSwgZnJhbWVTdGFydCwgZnBzKTtcblx0XHR9XG5cdH0sXG5cdFxuXHRcblx0LypcbiAgICBcdFByb2Nlc3MgYSBzaW5nbGUgYWN0aW9uXG4gICAgXHRcbiAgICBcdEBwYXJhbSBbQWN0aW9uXVxuICAgIFx0QHBhcmFtIFt0aW1lc3RhbXBdXG5cdCovXG5cdHNpbmdsZUFjdGlvbjogZnVuY3Rpb24gKGFjdGlvbiwgZnJhbWVTdGFydCwgZnBzKSB7XG4gICAgXHR2YXIgb3V0cHV0ID0ge30sXG4gICAgXHQgICAgcnViaXggPSBSdWJpeFthY3Rpb24ubGlua10sXG4gICAgXHQgICAgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIFx0ICAgIFxuICAgICAgICBpZiAoYWN0aW9uLmZpcnN0RnJhbWUpIHtcbiAgICAgICAgICAgIGFjdGlvbi5vblN0YXJ0LmNhbGwoYWN0aW9uLnNjb3BlLCBvdXRwdXQsIGFjdGlvbi5kYXRhKTtcbiAgICAgICAgICAgIGFjdGlvbi5maXJzdEZyYW1lID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBvdXRwdXQucG9pbnRlciA9IHJ1Yml4LnVwZGF0ZVBvaW50ZXIoYWN0aW9uKTtcbiAgICAgICAgYWN0aW9uLnByb2dyZXNzID0gcnViaXguY2FsY1Byb2dyZXNzKGFjdGlvbiwgZnJhbWVTdGFydCwgZnBzKTtcbiAgICAgICAgXG4gICAgXHQvLyBMb29wIG92ZXIgYWxsIHZhbHVlcyBcbiAgICBcdGZvciAodmFyIGtleSBpbiBhY3Rpb24udmFsdWVzKSB7XG4gICAgICAgIFx0aWYgKGFjdGlvbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBcdCAgICBvdXRwdXRba2V5XSA9IHJ1Yml4LmVhc2VWYWx1ZShrZXksIGFjdGlvbiwgYWN0aW9uLnByb2dyZXNzKTtcbiAgICAgICAgXHRcdFxuICAgICAgICAgICAgXHQvLyBBcHBseSBNYXRoLiBmdW5jdGlvbiBpZiBvbmUgZGVmaW5lZFxuICAgICAgICAgICAgXHRvdXRwdXRba2V5XSA9IGFjdGlvbi52YWx1ZXNba2V5XS5tYXRoID8gTWF0aFthY3Rpb24udmFsdWVzW2tleV0ubWF0aF0ob3V0cHV0W2tleV0pIDogb3V0cHV0W2tleV07XG5cbiAgICAgICAgICAgIFx0aWYgKGFjdGlvbi52YWx1ZXNba2V5XS5jdXJyZW50ICE9PSBvdXRwdXRba2V5XSkge1xuICAgICAgICAgICAgICAgIFx0aGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgXHRhY3Rpb24udmFsdWVzW2tleV0uY3VycmVudCA9IG91dHB1dFtrZXldO1xuICAgICAgICAgICAgXHR9XG4gICAgICAgIFx0fVxuICAgIFx0fVxuICAgIFx0XG4gICAgXHRhY3Rpb24ub25GcmFtZS5jYWxsKGFjdGlvbi5zY29wZSwgb3V0cHV0LCBhY3Rpb24uZGF0YSk7XG5cbiAgICBcdC8vIElmIG91dHB1dCBoYXMgY2hhbmdlZCwgZmlyZSBvbkNoYW5nZVxuICAgIFx0aWYgKGhhc0NoYW5nZWQpIHtcbiAgICAgICAgXHRhY3Rpb24ub25DaGFuZ2UuY2FsbChhY3Rpb24uc2NvcGUsIG91dHB1dCwgYWN0aW9uLmRhdGEpO1xuICAgIFx0fVxuXG4gICAgXHQvLyBJZiBwcm9jZXNzIGlzIGF0IGl0cyBlbmQsIGZpcmUgb25FbmQgYW5kIGRlYWN0aXZhdGUgYWN0aW9uXG4gICAgXHRpZiAocnViaXguaGFzRW5kZWQoYWN0aW9uKSkge1xuICAgICAgICBcdGFjdGlvbi5vbkVuZC5jYWxsKGFjdGlvbi5zY29wZSwgb3V0cHV0LCBhY3Rpb24uZGF0YSk7XG4gICAgICAgIFx0QWN0aW9uTWFuYWdlci5xdWV1ZURlYWN0aXZhdGUoYWN0aW9uLnRva2VuKTtcbiAgICBcdH1cbiAgICBcdFxuICAgIFx0YWN0aW9uLmZyYW1lc3RhbXAgPSBmcmFtZVN0YXJ0O1xuXHR9XG59O1xuXG5wcm9jZXNzID0gbmV3IFByb2Nlc3MoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwcm9jZXNzOyIsIi8qXG4gICAgUnViaXggbW9kdWxlc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBSdWJpeCBtb2R1bGVzIGFyZSB1c2VkIHRvIHByb2Nlc3MgYW4gYWN0aW9uIGJhc2VkIG9uIGl0cyAucnViaXggcHJvcGVydHkuXG4gICAgXG4gICAgQXZhaWxhYmxlIHJ1Yml4OlxuICAgICAgICAnVGltZSdcbiAgICAgICAgJ1BvaW50ZXInXG4gICAgICAgICdTcGVlZCdcbiAgICAgICAgXG4gICAgUHJvY2Vzc2luZyBmdW5jdGlvbnM6XG4gICAgICAgIGNhbGNQcm9ncmVzc1xuICAgICAgICBoYXNFbmRlZFxuICAgICAgICB1cGRhdGVQb2ludGVyXG4gICAgICAgIGVhc2VWYWx1ZVxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhbGMuanMnKSxcblx0dXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy91dGlscy5qcycpLFxuICAgIEVhc2luZyA9IHJlcXVpcmUoJy4uL3V0aWxzL2Vhc2luZ0Z1bmN0aW9ucy5qcycpLFxuXHRkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL29wdHMvZGVmYXVsdHMuanMnKSxcblx0S0VZID0gcmVxdWlyZSgnLi4vb3B0cy9rZXlzLmpzJyksXG4gICAgUG9pbnRlclRyYWNrZXIgPSByZXF1aXJlKCcuL3BvaW50ZXJUcmFja2VyLmpzJyksXG4gICAgUnViaXggPSBmdW5jdGlvbiAoKSB7fSxcbiAgICBydWJpeENvbnRyb2xsZXI7XG5cblJ1Yml4LnByb3RvdHlwZSA9IHtcbiAgICBUaW1lOiB7XG5cdFxuICAgICAgICAvKlxuICAgIFx0ICAgIENhbGMgcHJvZ3Jlc3NcbiAgICBcdCAgICBcbiAgICAgICAgXHRDYWxjIGFjdGlvbidzIHByb2dyZXNzIHRocm91Z2ggdGltZWxpbWl0XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbQWN0aW9uXTogYWN0aW9uIHRvIG1lYXN1cmVcbiAgICAgICAgICAgIEBwYXJhbSBbdGltZXN0YW1wXTogZnJhbWVzdGFydCB0aW1lc3RhbXBcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IDAgdG8gMSB2YWx1ZSByZXByZXNlbnRpbmcgaG93IG11Y2ggdGltZSBoYXMgcGFzc2VkXG4gICAgICAgICovXG4gICAgICAgIGNhbGNQcm9ncmVzczogZnVuY3Rpb24gKGFjdGlvbiwgZnJhbWVTdGFydCkge1xuICAgICAgICBcdGFjdGlvbi5lbGFwc2VkICs9IGNhbGMuZGlmZmVyZW5jZShhY3Rpb24uZnJhbWVzdGFtcCwgZnJhbWVTdGFydCkgKiBhY3Rpb24udGltZURpbGF0aW9uO1xuICAgICAgICBcdFxuICAgICAgICBcdHJldHVybiBjYWxjLnByb2dyZXNzKGFjdGlvbi5lbGFwc2VkLCBhY3Rpb24uZHVyYXRpb24gKyBhY3Rpb24uZGVsYXkpO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEhhcyBhY3Rpb24gZW5kZWRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgVHJ1ZSBpZiBwcm9ncmVzcyBpcyBlcXVhbCB0byBvciBoaWdoZXIgdGhhbiAxLiBJZiBsb29waW5nIGlzIGVuYWJsZWRcbiAgICAgICAgICAgIHdlIHJlc3RhcnQgdGhlIGFjdGlvblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW0FjdGlvbl06IGFjdGlvbiB0byBhbmFseXNlXG4gICAgICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogaGFzIGFjdGlvbiBlbmRlZFxuICAgICAgICAqL1xuICAgICAgICBoYXNFbmRlZDogZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICBcdHJldHVybiBhY3Rpb24ucHJvZ3Jlc3MgPj0gMSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBVcGRhdGUgcG9pbnRlclxuICAgICAgICAqL1xuICAgICAgICB1cGRhdGVQb2ludGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRWFzZSB2YWx1ZSBpbiBhY3Rpb24gd2l0aCBwcm92aWRlZCBrZXlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBrZXkgb2YgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBQcm9ncmVzcyBpbiB0aW1lbGluZVxuICAgICAgICAqL1xuICAgICAgICBlYXNlVmFsdWU6IGZ1bmN0aW9uIChrZXksIGFjdGlvbiwgcHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGFjdGlvbi52YWx1ZXNba2V5XSxcbiAgICAgICAgICAgIFx0cmVzdHJpY3RlZFByb2dyZXNzID0gY2FsYy5yZXN0cmljdGVkKHByb2dyZXNzLCAwLCAxKSxcbiAgICAgICAgICAgIFx0ZWFzZWRWYWx1ZTtcbiAgICAgICAgICAgIFx0XG4gICAgICAgICAgICBpZiAodmFsdWUuc3RlcHMpIHtcbiAgICAgICAgICAgICAgICByZXN0cmljdGVkUHJvZ3Jlc3MgPSB1dGlscy5zdGVwUHJvZ3Jlc3MocmVzdHJpY3RlZFByb2dyZXNzLCAxLCB2YWx1ZS5zdGVwcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVhc2VkVmFsdWUgPSBFYXNpbmcud2l0aGluUmFuZ2UocmVzdHJpY3RlZFByb2dyZXNzLCB2YWx1ZS5mcm9tLCB2YWx1ZS50bywgdmFsdWUuZWFzZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBlYXNlZFZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBcbiAgICBcbiAgICBQb2ludGVyOiB7XG4gICAgXG4gICAgXHQvKlxuICAgIFx0ICAgIENhbGMgcHJvZ3Jlc3NcbiAgICBcdCAgICBcbiAgICAgICAgXHRDYWxjIHRoZSBwcm9ncmVzcyBvZiBlYWNoIHBvaW50ZXIgbWV0cmljLCAwIHRvIDEgaWYgcmFuZ2UgZ2l2ZW4sXG4gICAgICAgICAgICBpbiBkaXJlY3QgdGVybXMgaWYgbm8gZ2l2ZW4gcmFuZ2VcbiAgICAgICAgXHRcbiAgICAgICAgXHRAcGFyYW0gW0FjdGlvbl06IGFjdGlvbiB0byBtZWFzdXJlXG4gICAgICAgIFx0QHJldHVybiBbb2JqZWN0XTogT2JqZWN0IG9mIGFsbCBwcm9ncmVzc2VzXG4gICAgXHQqL1xuICAgICAgICBjYWxjUHJvZ3Jlc3M6IGZ1bmN0aW9uIChhY3Rpb24sIGZyYW1lU3RhcnQpIHtcbiAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IHt9LFxuICAgICAgICAgICAgICAgIG9mZnNldCA9IGFjdGlvbi5wb2ludGVyLm9mZnNldDtcblxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9mZnNldCkge1xuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc1trZXldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0OiAoIWFjdGlvbi52YWx1ZXNba2V5XSkgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKCFhY3Rpb24udmFsdWVzW2tleV0pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRba2V5XSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsYy5wcm9ncmVzcyhvZmZzZXRba2V5XSArIGFjdGlvbi5vcmlnaW5ba2V5XSwgYWN0aW9uLnZhbHVlc1trZXldLm1pbiwgYWN0aW9uLnZhbHVlc1trZXldLm1heClcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9ncmVzcztcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBIYXMgZnVuY3Rpb24gZW5kZWQ/XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFRydWUgaWYgYWN0aW9uLmlzVHJhY2tpbmcgaXMgZmFsc2VcbiAgICAgICAgKi9cbiAgICAgICAgaGFzRW5kZWQ6IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBQb2ludGVyVHJhY2tlci5pc1RyYWNraW5nKCkgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgVXBkYXRlIHBvaW50ZXJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtBY3Rpb25dOiBcbiAgICAgICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBMYXRlc3QgcG9pbnRlciwgb3IgcHJldmlvdXMgcG9pbnRlciBpZiBzdG9wcGVkIHRyYWNraW5nXG4gICAgICAgICovXG4gICAgICAgIHVwZGF0ZVBvaW50ZXI6IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50UG9pbnRlciA9IGFjdGlvbi5wb2ludGVyO1xuXG4gICAgICAgICAgICBhY3Rpb24ucG9pbnRlciA9IFBvaW50ZXJUcmFja2VyLmdldChhY3Rpb24ucG9pbnRlck9mZnNldCkgfHwgY3VycmVudFBvaW50ZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucG9pbnRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBFYXNlIHZhbHVlIGluIGFjdGlvbiB3aXRoIHByb3ZpZGVkIGtleVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IGtleSBvZiB2YWx1ZVxuICAgICAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IFByb2dyZXNzIG9mIHBvaW50ZXIgcHJvcHNcbiAgICAgICAgKi9cbiAgICAgICAgZWFzZVZhbHVlOiBmdW5jdGlvbiAoa2V5LCBhY3Rpb24sIHByb2dyZXNzKSB7XG4gICAgICAgICAgICB2YXIgZWFzZWRWYWx1ZSA9IDAsIFxuICAgICAgICAgICAgICAgIHZhbHVlID0gYWN0aW9uLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGNhbGN1bGF0ZWQgdGhlIHByb2dyZXNzIGZvciB0aGlzIHByb3BlcnR5XG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3Nba2V5XSkge1xuICAgICAgICAgICAgICAgIGVhc2VkVmFsdWUgPSBFYXNpbmcud2l0aGluUmFuZ2UocHJvZ3Jlc3Nba2V5XS52YWx1ZSwgdmFsdWUubWluLCB2YWx1ZS5tYXgsIGRlZmF1bHRzLnRyYWNrRWFzZSwgdmFsdWUuZXNjYXBlQW1wKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gSWYgd2UncmUgbGlua2luZyB0aGlzIHByb3BlcnR5IGludG8gYSB1c2VyIGlucHV0XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmxpbmspIHtcbiAgICAgICAgICAgICAgICBlYXNlZFZhbHVlID0gRWFzaW5nLndpdGhpblJhbmdlKHByb2dyZXNzW3ZhbHVlLmxpbmtdLnZhbHVlLCB2YWx1ZS5taW4sIHZhbHVlLm1heCwgZGVmYXVsdHMudHJhY2tFYXNlLCB2YWx1ZS5lc2NhcGVBbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBUT0RPOiBIYW5kbGUgZGVmYXVsdCBlYXNpbmcgXG5cbiAgICAgICAgICAgIHJldHVybiBlYXNlZFZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBTcGVlZDoge1xuICAgIFxuICAgIFx0Lypcblx0ICAgIFx0Q29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHNwZWVkIGJhc2VkIG9uIGZwc1xuICAgIFx0Ki9cbiAgICBcdGZyYW1lU3BlZWQ6IGZ1bmN0aW9uICh4cHMsIGZwcykge1xuICAgIFx0XHR2YXIgc3BlZWRQZXJGcmFtZSA9IDA7XG5cbiAgICBcdFx0aWYgKHhwcyAmJiB1dGlscy5pc051bSh4cHMpKSB7XG5cdCAgICBcdFx0c3BlZWRQZXJGcmFtZSA9IHhwcy9mcHM7XG4gICAgXHRcdH1cbiAgICBcdFxuXHQgICAgXHRyZXR1cm4gc3BlZWRQZXJGcmFtZTtcbiAgICBcdH0sXG4gICAgXG4gICAgXHQvKlxuICAgIFx0ICAgIENhbGMgbmV3IHNwZWVkXG4gICAgXHQgICAgXG4gICAgXHQgICAgQ2FsYyB0aGUgbmV3IHNwZWVkIGJhc2VkIG9uIHRoZSBmb3JtdWxhIHNwZWVkID0gKHNwZWVkIC0gZnJpY3Rpb24gKyB0aHJ1c3QpXG4gICAgICAgIFx0XG4gICAgICAgIFx0QHBhcmFtIFtBY3Rpb25dOiBhY3Rpb24gdG8gbWVhc3VyZVxuICAgICAgICBcdEByZXR1cm4gW29iamVjdF06IE9iamVjdCBvZiBhbGwgc3BlZWRzXG4gICAgXHQqL1xuXHQgICAgY2FsY1Byb2dyZXNzOiBmdW5jdGlvbiAoYWN0aW9uLCBmcmFtZVN0YXJ0LCBmcHMpIHtcblx0XHQgICAgdmFyIHByb2dyZXNzID0ge30sXG5cdFx0ICAgIFx0cG9pbnQsXG5cdFx0ICAgIFx0dmFsdWU7XG5cdFx0ICAgIFx0XG5cdFx0ICAgIGZvciAodmFyIGtleSBpbiBhY3Rpb24udmFsdWVzKSB7XG5cdFx0XHQgICAgaWYgKGFjdGlvbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0ICAgIFx0dmFsdWUgPSBhY3Rpb24udmFsdWVzW2tleV07XG5cdFx0XHQgICAgXHR2YWx1ZS5zcGVlZCA9IHZhbHVlLnNwZWVkIC0gdGhpcy5mcmFtZVNwZWVkKHZhbHVlLmZyaWN0aW9uLCBmcHMpICsgdGhpcy5mcmFtZVNwZWVkKHZhbHVlLnRocnVzdCwgZnBzKTtcblx0XHRcdFx0ICAgIHByb2dyZXNzW2tleV0gPSB0aGlzLmZyYW1lU3BlZWQodmFsdWUuc3BlZWQsIGZwcyk7XG5cdFx0XHQgICAgfVxuXHRcdCAgICB9XG5cdFx0ICAgIFxuXHRcdCAgICBpZiAoYWN0aW9uLnZhbHVlcy5hbmdsZSAmJiBhY3Rpb24udmFsdWVzLmRpc3RhbmNlKSB7XG5cdFx0ICAgIFx0cG9pbnQgPSBjYWxjLnBvaW50KGFjdGlvbi5vcmlnaW4sIGFjdGlvbi52YWx1ZXMuYW5nbGUuY3VycmVudCwgYWN0aW9uLnZhbHVlcy5kaXN0YW5jZS5jdXJyZW50KTtcblx0XHRcdCAgICBwcm9ncmVzcy54ID0gcG9pbnQueDtcblx0XHRcdCAgICBwcm9ncmVzcy55ID0gcG9pbnQueTtcblx0XHQgICAgfVxuXHRcdCAgICBcblx0XHQgICAgcmV0dXJuIHByb2dyZXNzO1xuXHQgICAgfSxcblx0ICAgIFxuXHQgICAgLypcbiAgICBcdCAgICBIYXMgdGhpcyBhY3Rpb24gZW5kZWQ/XG4gICAgXHQgICAgXG4gICAgXHQgICAgQHJldHVybiBbYm9vbGVhbl06IEZhbHNlIGZvciBub3cgLSBUT0RPIGNyZWF0ZSBiZXR0ZXIgZGVmYXVsdFxuXHQgICAgKi9cblx0ICAgIGhhc0VuZGVkOiBmdW5jdGlvbiAoYWN0aW9uKSB7XG5cdCAgICBcdHJldHVybiBmYWxzZTtcblx0ICAgIH0sXG5cdCAgICBcblx0ICAgIC8qXG4gICAgXHQgICAgQWRkIHRoZSBzcGVlZCB0byB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IGtleSBvZiB2YWx1ZVxuICAgICAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IFByb2dyZXNzIG9mIHBvaW50ZXIgcHJvcHNcblx0ICAgICovXG5cdCAgICBlYXNlVmFsdWU6IGZ1bmN0aW9uIChrZXksIGFjdGlvbiwgcHJvZ3Jlc3MpIHtcblx0ICAgIFx0dmFyIHZhbHVlID0gYWN0aW9uLnZhbHVlc1trZXldLFxuXHQgICAgXHRcdG5ld1ZhbHVlID0gdmFsdWUuY3VycmVudCArIHByb2dyZXNzW2tleV07XG5cblx0ICAgIFx0aWYgKHZhbHVlLm1pbikge1xuXHRcdCAgICBcdG5ld1ZhbHVlID0gTWF0aC5tYXgodmFsdWUubWluLCBuZXdWYWx1ZSk7XG5cdCAgICBcdH1cblx0ICAgIFx0XG5cdCAgICBcdGlmICh2YWx1ZS5tYXgpIHtcblx0XHQgICAgXHRuZXdWYWx1ZSA9IE1hdGgubWluKHZhbHVlLm1heCwgbmV3VmFsdWUpO1xuXHQgICAgXHR9XG5cblx0ICAgICBcdHJldHVybiBuZXdWYWx1ZTtcblx0ICAgIH0sXG5cdCAgICBcblx0ICAgIHVwZGF0ZVBvaW50ZXI6IGZ1bmN0aW9uICgpIHt9XG4gICAgfSxcblxufTtcblxucnViaXhDb250cm9sbGVyID0gbmV3IFJ1Yml4KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcnViaXhDb250cm9sbGVyOyIsIi8qXG4gICAgVG9rZW4gY29udHJvbGxlclxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgdG9rZW5Db3VudGVyID0gMCxcblx0VG9rZW4gPSBmdW5jdGlvbiAoKSB7fTtcblxuVG9rZW4ucHJvdG90eXBlID0ge1xuXHRcblx0Lypcblx0XHRHZXQgdGhlIGN1cnJlbnQgdG9rZW4gY291bnRcblx0XHRcblx0XHRAcmV0dXJuIFtpbnRdOiBDdXJyZW50IHRva2VuIGNvdW50XG5cdCovXG5cdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0b2tlbkNvdW50ZXI7XG5cdH0sXG5cdFxuXHQvKlxuXHRcdEdlbmVyYXRlIGEgbmV3IHRva2VuXG5cdFx0XG5cdFx0QHJldHVybiBbaW50XTogTmV3IHRva2VuXG5cdCovXG5cdGdlbmVyYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHRva2VuID0gdGhpcy5nZXQoKTtcblx0XHRcblx0XHR0aGlzLmluY3JlbWVudCgpO1xuXG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9LFxuXHRcblx0Lypcblx0XHRJbmNyZWFzZSB0b2tlbiBjb3VudGVyXG5cdCovXG5cdGluY3JlbWVudDogZnVuY3Rpb24gKCkge1xuXHRcdHRva2VuQ291bnRlciArKztcblx0fVxuXHRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVG9rZW47IiwiLypcbiAgICBEZWZhdWx0IG9wdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBLRVkgPSByZXF1aXJlKCcuL2tleXMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcG9pbnRlcjoge1xuICAgICAgICBoaXN0b3J5U2l6ZTogMiwgLy8gbnVtYmVyIG9mIHBvaW50ZXIgZXZlbnRzIHRvIHJlbWVtYmVyXG4gICAgICAgIG1heEluYWN0aXZlRnJhbWVzOiAyIC8vIGFsbG93IHRoaXMgbnVtYmVyIG9mIGZyYW1lcyB0byBwYXNzIHdpdGggbm8gbW92ZW1lbnQgYmVmb3JlIHdlIGRlY2xhcmUgc3RhdGlvbmFyeSBwb2ludGVyXG4gICAgfSxcbiAgICB0cmFja0Vhc2U6IEtFWS5FQVNJTkcuTElORUFSLFxuICAgIHR3ZWVuVGFyZ2V0OiAwXG59OyIsIi8qXG4gICAgU3RyaW5nIGNvbnN0YW50c1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQU5JTUFURTogJ2FuaW1hdGUnLFxuICAgIENBTEM6ICdjYWxjJyxcbiAgICBKUVVFUllfRUxFTUVOVDogJ19qUXVlcnlFbGVtZW50JyxcbiAgICBFQVNJTkc6IHtcblx0ICAgIFFVQURfSU5fT1VUOiAncXVhZEluT3V0Jyxcblx0ICAgIFFVQURfT1VUOiAncXVhZE91dCcsXG5cdFx0SU46ICdJbicsXG5cdFx0SU5fT1VUOiAnSW5PdXQnLFxuXHRcdE9VVDogJ091dCcsXG5cdFx0TElORUFSOiAnbGluZWFyJ1xuICAgIH0sXG4gICAgTElOSzoge1xuXHQgICAgVElNRTogJ1RpbWUnLFxuXHQgICAgUE9JTlRFUjogJ1BvaW50ZXInLFxuXHQgICAgU1BFRUQ6ICdTcGVlZCdcbiAgICB9LFxuICAgIEVSUk9SOiB7XG5cdCAgICBBQ1RJT05fRVhJU1RTOiBcIkFjdGlvbiBhbHJlYWR5IGRlZmluZWQuIFVzZSBmb3JjZU92ZXJyaWRlOiB0cnVlIHRvIG92ZXJyaWRlLlwiLFxuXHQgICAgTk9fQUNUSU9OOiBcIk5vIGFjdGlvbiBkZWZpbmVkIHRvIGluaGVyaXQgZnJvbS5cIixcblx0ICAgIElOVkFMSURfRUFTSU5HOiBcIjogRWFzaW5nIG5vdCBkZWZpbmVkXCJcbiAgICB9LFxuICAgIEVWRU5UOiB7XG5cdCAgICBNT1VTRTogJ21vdXNlJyxcbiAgICAgICAgTU9VU0VET1dOOiAnbW91c2Vkb3duJyxcbiAgICAgICAgTU9VU0VNT1ZFOiAnbW91c2Vtb3ZlJyxcbiAgICAgICAgTU9VU0VVUDogJ21vdXNldXAnLFxuICAgICAgICBUT1VDSDogJ3RvdWNoJyxcbiAgICAgICAgVE9VQ0hTVEFSVDogJ3RvdWNoc3RhcnQnLFxuICAgICAgICBUT1VDSE1PVkU6ICd0b3VjaG1vdmUnLFxuICAgICAgICBUT1VDSEVORDogJ3RvdWNoZW5kJ1xuICAgIH0sXG4gICAgUFJPR1JFU1M6IHtcbiAgICAgICAgRElSRUNUOiAnRGlyZWN0JyxcbiAgICAgICAgUkFOR0U6ICdSYW5nZSdcbiAgICB9XG59OyIsIi8qXG4gICAgUiBFIEQgUyBIIEkgRiBUXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIFxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgS0VZID0gcmVxdWlyZSgnLi9vcHRzL2tleXMuanMnKSxcblx0QWN0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4vYm9icy9hY3Rpb25NYW5hZ2VyLmpzJyksXG5cdENocm9ub3MgPSByZXF1aXJlKCcuL2JvYnMvY2hyb25vcy5qcycpLFxuXHRFYXNpbmcgPSByZXF1aXJlKCcuL3V0aWxzL2Vhc2luZ0Z1bmN0aW9ucy5qcycpLFxuXHRjYWxjID0gcmVxdWlyZSgnLi91dGlscy9jYWxjLmpzJyksXG5cdHV0aWxzID0gcmVxdWlyZSgnLi91dGlscy91dGlscy5qcycpLFxuXHRzaGltcyA9IHJlcXVpcmUoJy4vdXRpbHMvc2hpbXMuanMnKSxcblx0clF1ZXJ5ID0gcmVxdWlyZSgnLi91dGlscy9yUXVlcnkuanMnKSxcblx0UmVkc2hpZnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgXHR0aGlzLmluaXQoKTtcblx0fSxcbiAgICByZWRzaGlmdCxcbiAgICBJbnN0YW5jZSA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgfTtcbiAgICBcbkluc3RhbmNlLnByb3RvdHlwZSA9IHtcblx0XG5cdC8qXG4gICAgXHRSZWFkIG9yIGJpbmQgZGF0YSB0byB0aGlzIFJlZHNoaWZ0IG9iamVjdFxuICAgIFx0XG4gICAgXHRSZWFkXG4gICAgXHQgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgZGF0YSB2YWx1ZSB0byByZWFkXG4gICAgXHQgICAgQHJldHVybiBbYW55XTogVGhlIGRhdGEgc3RvcmVkIHVuZGVyIHRoYXQga2V5XG4gICAgXHQgICAgXG4gICAgICAgIFdyaXRlIHN5bnRheCBBXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSBvZiBkYXRhIHZhbHVlIHRvIHdyaXRlXG4gICAgICAgICAgICBAcGFyYW0gW2FueV06IFRoZSBkYXRhIHRvIHN0b3JlIHVuZGVyIHRoYXQga2V5XG4gICAgICAgICAgICBcbiAgICAgICAgV3JpdGUgc3ludGF4IEJcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IG9mIGtleS92YWx1ZSBwYWlycyB0byBhdHRhY2ggdG8gdGhpcyBvYmplY3Rcblx0Ki9cblx0ZGF0YTogZnVuY3Rpb24gKCkge1xuXHQgICAgdmFyIHJldHVyblZhbHVlID0gdGhpcyxcblx0ICAgICAgICBhcmcwID0gYXJndW1lbnRzWzBdLFxuXHQgICAgICAgIGFyZzBJc1N0cmluZyA9IHV0aWxzLmlzU3RyaW5nKGFyZzApLFxuXHQgICAgICAgIGRhdGFUb1NldCA9IHt9O1xuXHQgICAgXG5cdCAgICAvLyBJZiB0aGlzIGlzIGEgZ2V0IHJlcXVlc3Rcblx0ICAgIGlmIChhcmcwSXNTdHJpbmcgJiYgIWFyZ3VtZW50c1sxXSkge1xuICAgIFx0ICAgIHJldHVyblZhbHVlID0gQWN0aW9uTWFuYWdlci5nZXREYXRhKHRoaXMudG9rZW4sIGFyZzApO1xuXHQgICAgXG5cdCAgICAvLyBFbHNlIHRoaXMgaXMgYSBzZXQgcmVxdWVzdFxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgICBpZiAoYXJnMElzU3RyaW5nKSB7XG4gICAgXHQgICAgICAgIGRhdGFUb1NldFthcmcwXSA9IGFyZ3VtZW50c1sxXTtcblx0ICAgICAgICB9IGVsc2Uge1xuICAgIFx0ICAgICAgICBkYXRhVG9TZXQgPSBhcmcwO1xuXHQgICAgICAgIH1cblxuICAgIFx0ICAgIEFjdGlvbk1hbmFnZXIuc2V0RGF0YSh0aGlzLnRva2VuLCBkYXRhVG9TZXQpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG5cdH0sXG5cdFxuXHQvKlxuICAgIFx0UGxheSB0aGUgcHJvdmlkZWQgYWN0aW9ucyBhcyBhbmltYXRpb25zXG4gICAgXHRcbiAgICBcdEBwYXJhbSBbc3RyaW5nIHx8IGFycmF5XTogU3BhY2UgZGVsaW1pbmF0ZWQgc3RyaW5nIG9yIGFycmF5IG9mIGRlZmluZWQgYWN0aW9uIGtleXMgaW4gb3JkZXIgb2YgZXhlY3V0aW9uXG4gICAgXHRAcGFyYW0gW29iamVjdF06IE92ZXJyaWRlIGFjdGlvbiBkZWZhdWx0cyB3aXRoIHRob3NlIGRlZmluZWQgaGVyZVxuXHQqL1xuXHRwbGF5OiBmdW5jdGlvbiAoZGVmcywgb3ZlcnJpZGUpIHtcblx0ICAgIHJldHVybiByZWRzaGlmdC5pZ25pdGUodGhpcy50b2tlbiwgS0VZLkxJTksuVElNRSwgQWN0aW9uTWFuYWdlci5jcmVhdGVCYXNlKGRlZnMsIG92ZXJyaWRlKSk7XG5cdH0sXG5cdFxuXHQvKlxuICAgIFx0UnVuIHRoZSBwcm92aWRlZCBhY3Rpb24gYmFzZWQgb24gcHJvcGVydHkgc3BlZWRcbiAgICBcdFxuICAgIFx0QHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgdGhlIGFjdGlvbiB0byBwcm9jZXNzXG4gICAgXHRAcGFyYW0gW29iamVjdF06IE92ZXJyaWRlIGFjdGlvbiBkZWZhdWx0cyB3aXRoIHRob3NlIGRlZmluZWQgaGVyZVxuXHQqL1xuXHRtb3ZlOiBmdW5jdGlvbiAoZGVmcywgb3ZlcnJpZGUpIHtcblx0ICAgIHJldHVybiByZWRzaGlmdC5pZ25pdGUodGhpcy50b2tlbiwgS0VZLkxJTksuU1BFRUQsIEFjdGlvbk1hbmFnZXIuY3JlYXRlQmFzZShkZWZzLCBvdmVycmlkZSkpO1xuXHR9LFxuXHRcblxuICAgIC8qXG4gICAgICAgIFRyYWNrIHBvaW50ZXJcbiAgICBcdFxuICAgIFx0QHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgdGhlIGFjdGlvbiB0byBwcm9jZXNzXG4gICAgICAgIEBwYXJhbSBbZXZlbnRdOiBJbml0aWF0aW5nIHBvaW50ZXIgZXZlbnRcbiAgICAqL1xuXHR0cmFjazogZnVuY3Rpb24gKGRlZnMpIHtcblx0ICAgIHZhciBoYXNBbGxBcmdzID0gKGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkKSxcblx0ICAgICAgICB0b1RyYWNrID0gaGFzQWxsQXJncyA/IGFyZ3VtZW50c1syXSA6IGFyZ3VtZW50c1sxXSxcblx0ICAgICAgICBvdmVycmlkZSA9IGhhc0FsbEFyZ3MgPyBhcmd1bWVudHNbM10gOiB7fTtcblx0ICAgIFxuXHQgICAgcmV0dXJuIHJlZHNoaWZ0Lmlnbml0ZSh0aGlzLnRva2VuLCBLRVkuTElOSy5QT0lOVEVSLCBBY3Rpb25NYW5hZ2VyLmNyZWF0ZUJhc2UoZGVmcywgb3ZlcnJpZGUpLCB0b1RyYWNrKTtcblx0fSxcbiAgICBcbiAgICBcbiAgICAvKlxuICAgICAgICBTdGFydCBzcGVjaWZpZWQgYWN0aW9uXG4gICAgICAgIFxuICAgICAgICBBY3RpdmF0ZSB0aGUgYWN0aW9uIGFuZCBmaXJlIHVwIENocm9ub3MgYW5pbWF0aW9uIGxvb3BcbiAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlZHNoaWZ0LnN0YXJ0KHRoaXMudG9rZW4pO1xuICAgIH0sXG4gICAgXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RvcCBzcGVjaWZpZWQgYWN0aW9uXG4gICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlZHNoaWZ0LnN0b3AodGhpcy50b2tlbik7XG4gICAgfSxcbiAgICBcbiAgICBnZXRUb2tlbjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b2tlbjtcbiAgICB9XG4gICAgXG59O1xuXG5SZWRzaGlmdC5wcm90b3R5cGUgPSB7XG5cbiAgICBuZXdBY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCk7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIENyZWF0ZSBhIEluc3RhbmNlIHdpdGggdGhlIHNwZWNpZmllZCB0b2tlblxuICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IEFjdGlvbk1hbmFnZXIuZ2V0KHRva2VuKSB8fCBBY3Rpb25NYW5hZ2VyLmNyZWF0ZSgpO1xuXG4gICAgICAgIHJldHVybiBuZXcgSW5zdGFuY2UoYWN0aW9uLnRva2VuKTtcbiAgICB9LFxuICAgIFxuICAgIFxuICAgIGRlZmluZTogZnVuY3Rpb24gKGFjdGlvbnMpIHtcblx0ICAgIEFjdGlvbk1hbmFnZXIuZGVmaW5lKGFjdGlvbnMpO1xuXHQgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblx0XG5cdC8qXG4gICAgXHRJZ25pdGUgUmVkc2hpZnRcbiAgICBcdFxuICAgIFx0R2V0IHRoZSBzcGVjaWZpZWQgYWN0aW9uIChvciBjcmVhdGUgaWYgbm9uZSksIHVwZGF0ZSBpdHMgcHJvcGVydGllc1xuICAgIFx0YW5kIHRoZW4gc3RhcnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogUHJvcGVydGllcyB0byBtYW5pcHVsYXRlXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT3B0aW9ucyBmb3IgdHJhY2tcbiAgICAgICAgQHBhcmFtIFtldmVudF06IEluaXRpYXRpbmcgcG9pbnRlciBldmVudFxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBJRCB0b2tlbiBmb3IgYWN0aW9uXG5cdCovXG5cdGlnbml0ZTogZnVuY3Rpb24gKHRva2VuLCBsaW5rLCBjaGFuZ2VzLCBlKSB7XG5cdFx0dmFyIGFjdGlvbiA9IEFjdGlvbk1hbmFnZXIuZ2V0KHRva2VuKTtcblx0XHRcblx0XHRjaGFuZ2VzLmxpbmsgPSBsaW5rO1xuXG5cdFx0QWN0aW9uTWFuYWdlci5jaGFuZ2UodG9rZW4sIGNoYW5nZXMsIGUpO1xuXG5cdFx0dGhpcy5zdGFydCh0b2tlbik7XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH0sXG5cdFxuXHRcblx0LypcbiAgICBcdEFkZCBiZXppZXIgY3VydmUgZnVuY3Rpb25cbiAgICBcdFxuICAgIFx0QWRkIHRoZSBzcGVjaWZpZWQgYmV6aWVyIGN1cnZlIHRoZSBFYXNpbmdGdW5jdGlvbidzIGF2YWlsYWJsZSBlYXNpbmdzXG4gICAgXHRNeSBmYXZvdXJpdGUgYmV6aWVyIGN1cnZlIGdlbmVyYXRvciBpcyBMZWEgVmVyb3UncyBleGNlbGxlbnQgaHR0cDovL2N1YmljLWJlemllci5jb20vXG4gICAgXHRcbiAgICBcdEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiB0aGUgbmV3IGVhc2luZyBmdW5jdGlvbiBcbiAgICBcdEBwYXJhbSBbbnVtYmVyXTogeCBjb29yZGluYXRlIG9mIHBvaW50IDFcbiAgICBcdEBwYXJhbSBbbnVtYmVyXTogeSBjb29yZGluYXRlIG9mIHBvaW50IDFcbiAgICBcdEBwYXJhbSBbbnVtYmVyXTogeCBjb29yZGluYXRlIG9mIHBvaW50IDJcbiAgICBcdEBwYXJhbSBbbnVtYmVyXTogeSBjb29yZGluYXRlIG9mIHBvaW50IDJcblx0Ki9cblx0YWRkQmV6aWVyOiBmdW5jdGlvbiAobmFtZSwgeDEsIHkxLCB4MiwgeTIpIHtcblx0XHRFYXNpbmcuYWRkQmV6aWVyKG5hbWUsIHgxLCB5MSwgeDIsIHkyKTtcblx0fSxcblx0XG5cdHN0YXJ0OiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgQWN0aW9uTWFuYWdlci5hY3RpdmF0ZSh0b2tlbik7XG4gICAgICAgIENocm9ub3Muc3RhcnQoKTtcblx0fSxcblx0XG5cdHN0b3A6IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIFx0QWN0aW9uTWFuYWdlci5kZWFjdGl2YXRlKHRva2VuKTtcblx0fSxcblx0XG4gICAgQ2FsYzogY2FsYyxcblx0XG5cdHJ1bjogZnVuY3Rpb24gKCkge1xuICAgIFx0XG5cdH0sXG5cdFxuXHR1cGRhdGVQb2ludGVyOiBmdW5jdGlvbiAoeCwgeSwgeikge1xuICAgIFx0XG5cdH0sXG5cdFxuXHQvKlxuICAgIFx0SW5pdCBSZWRzaGlmdFxuICAgIFx0XG4gICAgXHRDaGVjayBpZiB3ZSBuZWVkIHNoaW1zIGFuZCBsb2FkIGlmIG5lY2Vzc2FyeVxuXHQqL1xuXHRpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgXHRzaGltcy5mZWF0dXJlQ2hlY2soKTtcbiAgICBcdHJRdWVyeS5jaGVjaygpO1xuXHR9XG59O1xuXG5yZWRzaGlmdCA9IG5ldyBSZWRzaGlmdCgpO1xuXG53aW5kb3cuUmVkc2hpZnQgPSByZWRzaGlmdDtcbm1vZHVsZS5leHBvcnRzID0gcmVkc2hpZnQ7IiwiLypcbiAgICBDYWxjdWxhdG9yc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBTaW1wbGUgSS9PIHNuaXBwZXRzXG4gICAgXG4gICAgYW5nbGVcbiAgICBhbmdsZUZyb21DZW50ZXJcbiAgICBkaWZmZXJlbmNlXG4gICAgZGlzdGFuY2VcbiAgICBkaXN0YW5jZTFEXG4gICAgZGlzdGFuY2UyRFxuICAgIGRpc3RhbmNlM0RcbiAgICBlbGFwc2VkXG4gICAgaHlwb3RlbnVzZVxuICAgIG9mZnNldFxuICAgIHByb2dyZXNzXG4gICAgcmVzdHJpY3RlZFxuICAgIHRpbWVSZW1haW5pbmdcbiAgICB2YWx1ZVxuICAgIHZhbHVlRWFzZWRcbiovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgT2Zmc2V0ID0gcmVxdWlyZSgnLi4vYml0cy9vZmZzZXQuanMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMuanMnKSxcbiAgICBDYWxjID0gZnVuY3Rpb24gKCkge30sXG4gICAgY2FsYztcbiAgICBcbkNhbGMucHJvdG90eXBlID0ge1xuXG4gXG4gICAgLypcbiAgICAgICAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgICAgICAgXG4gICAgICAgIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICAgICAgICBhcmUgYXQgMCwwLCB0aGVuIHJldHVybiB0aGUgYW5nbGUgdXNpbmcgLmFuZ2xlRnJvbUNlbnRlcigpXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICAgICAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiAgICAqL1xuICAgIGFuZ2xlOiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgdmFyIGZyb20gPSBwb2ludEIgPyBwb2ludEEgOiB7eDogMCwgeTogMH0sXG4gICAgICAgICAgICB0byA9IHBvaW50QiB8fCBwb2ludEEsXG4gICAgICAgICAgICBwb2ludCA9IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmRpZmZlcmVuY2UoZnJvbS54LCB0by54KSxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLmRpZmZlcmVuY2UoZnJvbS55LCB0by55KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmFuZ2xlRnJvbUNlbnRlcihwb2ludC54LCBwb2ludC55KTtcbiAgICB9LFxuXG5cbiAgICAvKlxuICAgICAgICBBbmdsZSBmcm9tIGNlbnRlclxuICAgICAgICBcbiAgICAgICAgUmV0dXJucyB0aGUgY3VycmVudCBhbmdsZSwgaW4gcmFkaWFucywgb2YgYSBkZWZpbmVkIHBvaW50XG4gICAgICAgIGZyb20gYSBjZW50ZXIgKGFzc3VtZWQgMCwwKVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBYIGNvb3JkaW5hdGUgb2Ygc2Vjb25kIHBvaW50XG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogWSBjb29yZGluYXRlIG9mIHNlY29uZCBwb2ludFxuICAgICAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIDAsIDAgYW5kIHBvaW50IGluIHJhZGlhbnNcbiAgICAqL1xuICAgIGFuZ2xlRnJvbUNlbnRlcjogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIoeSwgeCk7XG5cdH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRGlmZmVyZW5jZVxuICAgICAgICBcbiAgICAgICAgUmV0dXJucyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGEgYW5kIGIgYnkgc3VidHJhY3RpbmcgYiBmcm9tIGEuXG4gICAgICAgIFVzZWZ1bCBpbiBjYWxjdWFsdGluZyB0aGUgemVyby1ub3JtYWxpc2VkIHBvc2l0aW9uIG9mIGIsIG9yIHRoZVxuICAgICAgICBkaWZmZXJlbmNlIHNvbWV0aGluZyBoYXMgdHJhdmVsbGVkIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgYVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGJcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogRGlmZmVyZW5jZSBiZXR3ZWVuIHZhbHVlIGEgYW5kIHZhbHVlIGJcbiAgICAqL1xuICAgIGRpZmZlcmVuY2U6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgXHRyZXR1cm4gYiAtIGE7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuXHQgICAgRGlsYXRlXG5cdCAgICBcblx0ICAgIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcblx0ICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuXHQgICAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuXHQgICAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4gICAgKi9cbiAgICBkaWxhdGU6IGZ1bmN0aW9uIChwcmV2aW91cywgY3VycmVudCwgZGlsYXRpb24pIHtcblx0ICAgIHJldHVybiBwcmV2aW91cyArICgoY3VycmVudCAtIHByZXZpb3VzKSAqIGRpbGF0aW9uKTtcbiAgICB9LFxuICAgICAgICBcbiAgICAvKlxuICAgICAgICBEaXN0YW5jZVxuICAgICAgICBcbiAgICAgICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAoMCwwKSBhbmQgcG9pbnRBLCB1bmxlc3MgcG9pbnRCXG4gICAgICAgIGlzIHByb3ZpZGVkLCB0aGVuIHdlIHJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAqL1xuICAgIGRpc3RhbmNlOiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgcG9pbnRBID09PSBcIm51bWJlclwiKSA/IHRoaXMuZGlzdGFuY2UxRChwb2ludEEsIHBvaW50QikgOiB0aGlzLmRpc3RhbmNlMkQocG9pbnRBLCBwb2ludEIpO1xuICAgIH0sXG5cblxuICAgIC8qXG4gICAgICAgIERpc3RhbmNlIDFEXG4gICAgICAgIFxuICAgICAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHBvaW50IEEgYW5kIHBvaW50IEJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUG9pbnQgQVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IChvcHRpb25hbCk6IFBvaW50IEJcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAqL1xuICAgIGRpc3RhbmNlMUQ6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgIFx0dmFyIGJJc051bSA9ICh0eXBlb2YgcG9pbnRCID09PSAnbnVtYmVyJyksXG4gICAgXHRcdGZyb20gPSBiSXNOdW0gPyBwb2ludEEgOiAwLFxuICAgIFx0XHR0byA9IGJJc051bSA/IHBvaW50QiA6IHBvaW50QTtcblxuICAgICAgICByZXR1cm4gdGhpcy5kaWZmZXJlbmNlKGZyb20sIHRvKTtcbiAgICB9LFxuXG4gIFxuICAgIC8qXG4gICAgICAgIERpc3RhbmNlIDJEXG4gICAgICAgIFxuICAgICAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuICgwLDApIGFuZCBwb2ludCBBLCB1bmxlc3MgcG9pbnQgQlxuICAgICAgICBpcyBwcm92aWRlZCwgdGhlbiB3ZSByZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdHdvLlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiB4IGFuZCB5IG9mIHBvaW50IEFcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9mIHBvaW50IEJcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAqL1xuICAgIGRpc3RhbmNlMkQ6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICB2YXIgYklzT2JqID0gKHR5cGVvZiBwb2ludEIgPT09IFwib2JqZWN0XCIpLFxuICAgICAgICAgICAgZnJvbSA9IGJJc09iaiA/IHBvaW50QSA6IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgIHRvID0gYklzT2JqID8gcG9pbnRCIDogcG9pbnRBLFxuICAgICAgICAgICAgcG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5kaWZmZXJlbmNlKGZyb20ueCwgdG8ueCksXG4gICAgICAgICAgICAgICAgeTogdGhpcy5kaWZmZXJlbmNlKGZyb20ueSwgdG8ueSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuaHlwb3RlbnVzZShwb2ludC54LCBwb2ludC55KTtcbiAgICB9LFxuICAgIFxuICAgICAgICBcbiAgICAvKlxuICAgICAgICBIeXBvdGVudXNlXG4gICAgICAgIFxuICAgICAgICBSZXR1cm5zIHRoZSBoeXBvdGVudXNlLCBzaWRlIEMsIGdpdmVuIHRoZSBsZW5ndGhzIG9mIHNpZGVzIEEgYW5kIEIuXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEJcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogTGVuZ3RoIG9mIENcbiAgICAqL1xuICAgIGh5cG90ZW51c2U6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciBhMiA9IGEgKiBhLFxuICAgICAgICAgICAgYjIgPSBiICogYixcbiAgICAgICAgICAgIGMyID0gYTIgKyBiMjtcbiAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGMyKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIE9mZnNldCBiZXR3ZWVuIHR3byBwb2ludHNcbiAgICAgICAgXG4gICAgICAgIENhbGN1bGF0ZSB0aGUgYW5nbGUsIGRpc3RhbmNlLCB4IHkgYW5kIHogZGlzdGFuY2VzIGJldHdlZW4gdHdvIGdpdmVuIHBvaW50c1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IHBvaW50XG4gICAgICAgIEBwYXJhbSBbUG9pbnRdOiBTZWNvbmQgcG9pbnRcbiAgICAgICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiAgICAqL1xuICAgIG9mZnNldDogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgIHZhciBhbmdsZSA9IHRoaXMuYW5nbGUocG9pbnRBLCBwb2ludEIpLFxuICAgICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlMkQocG9pbnRBLCBwb2ludEIpLFxuICAgICAgICAgICAgeCA9IHRoaXMuZGlzdGFuY2UxRChwb2ludEEueCwgcG9pbnRCLngpLFxuICAgICAgICAgICAgeSA9IHRoaXMuZGlzdGFuY2UxRChwb2ludEEueSwgcG9pbnRCLnkpLFxuICAgICAgICAgICAgeiA9IHRoaXMuZGlzdGFuY2UxRChwb2ludEEueiwgcG9pbnRCLnopO1xuICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXcgT2Zmc2V0KGFuZ2xlLCBkaXN0YW5jZSwgeCwgeSwgeik7XG4gICAgfSxcbiAgICBcbiAgICBwb2ludDogZnVuY3Rpb24gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gICAgXHR2YXIgcG9pbnQgPSB7fTtcblxuICAgIFx0cG9pbnQueCA9IDUgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueDtcbiAgICBcdHBvaW50LnkgPSA1ICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnk7XG5cblx0ICAgIHJldHVybiBwb2ludDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgICAgIFxuICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAgICAgICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgICAgICAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IGlmIGZ1bGwgcmFuZ2UgZ2l2ZW4sIHVwcGVyIGlmIG5vdFxuICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiAgICAqL1xuICAgIHByb2dyZXNzOiBmdW5jdGlvbiAodmFsdWUsIGxpbWl0QSwgbGltaXRCKSB7XG4gICAgXHR2YXIgYklzTnVtID0gKHR5cGVvZiBsaW1pdEIgPT09ICdudW1iZXInKSxcbiAgICBcdFx0ZnJvbSA9IGJJc051bSA/IGxpbWl0QSA6IDAsXG4gICAgXHRcdHRvID0gYklzTnVtID8gbGltaXRCIDogbGltaXRBLFxuICAgIFx0XHRyYW5nZSA9IHRoaXMuZGlmZmVyZW5jZShmcm9tLCB0byksXG4gICAgICAgICAgICBwcm9ncmVzcyA9ICh2YWx1ZSAtIGZyb20pIC8gcmFuZ2U7XG5cbiAgICAgICAgcmV0dXJuIHByb2dyZXNzO1xuICAgIH0sXG4gICAgXG4gICAgLypcblx0ICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2Vcblx0ICAgIFxuXHQgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtaW5pbXVtXG5cdCAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cblx0ICAgIEByZXR1cm4gW251bWJlcl06IFJhbmRvbSBudW1iZXIgd2l0aGluIHJhbmdlLCBvciAwIGFuZCAxIGlmIG5vbmUgcHJvdmlkZWRcbiAgICAqL1xuICAgIHJhbmRvbTogZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG5cdCAgICBtaW4gPSB1dGlscy5pc051bShtaW4pID8gbWluIDogMDtcblx0ICAgIG1heCA9IHV0aWxzLmlzTnVtKG1heCkgPyBtYXggOiAxO1xuXHQgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbiAgICB9LFxuXG5cbiAgICAvKlxuICAgICAgICBSZXN0cmljdCB2YWx1ZSB0byByYW5nZVxuICAgICAgICBcbiAgICAgICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBrZWVwIHdpdGhpbiByYW5nZVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgbGltaXRlZCB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICAqL1xuICAgIHJlc3RyaWN0ZWQ6IGZ1bmN0aW9uICh2YWx1ZSwgZnJvbSwgdG8pIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBmcm9tKSwgdG8pO1xuICAgIH0sXG4gICAgXG5cbiAgICAvKlxuICAgICAgICBUaW1lIHJlbWFpbmluZ1xuICAgICAgICBcbiAgICAgICAgUmV0dXJuIHRoZSBhbW91bnQgb2YgdGltZSByZW1haW5pbmcgZnJvbSB0aGUgcHJvZ3Jlc3MgYWxyZWFkeSBtYWRlXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIHRocm91Z2ggdGltZSBsaW1pdCBiZXR3ZWVuIDAtMVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IER1cmF0aW9uXG4gICAgKi9cbiAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAocHJvZ3Jlc3MsIGR1cmF0aW9uKSB7XG4gICAgICAgIHJldHVybiAoMSAtIHByb2dyZXNzKSAqIGR1cmF0aW9uO1xuICAgIH0sXG5cbiBcbiAgICAvKlxuICAgICAgICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gICAgICAgIFxuICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICAgICAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZSwgb3IgdXBwZXIgaWYgbGltaXQyIG5vdCBwcm92aWRlZFxuICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIChwcm9ncmVzcywgbGltaXRBLCBsaW1pdEIpIHtcbiAgICBcdHZhciBiSXNOdW0gPSAodHlwZW9mIGxpbWl0QiA9PT0gJ251bWJlcicpLFxuICAgIFx0XHRmcm9tID0gYklzTnVtID8gbGltaXRBIDogMCxcbiAgICBcdFx0dG8gPSBiSXNOdW0gPyBsaW1pdEIgOiBsaW1pdEE7XG5cbiAgICAgICAgcmV0dXJuICgtIHByb2dyZXNzICogZnJvbSkgKyAocHJvZ3Jlc3MgKiB0bykgKyBmcm9tOyBcbiAgICB9LFxuXG5cbiAgICAvKlxuICAgICAgICBFYXNlZCB2YWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gICAgICAgIFxuICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICAgICAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZSwgb3IgdXBwZXIgaWYgbGltaXQyIG5vdCBwcm92aWRlZFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBFYXNpbmcgdG8gYXBwbHkgdG8gdmFsdWVcbiAgICAgICAgQHBhcm1hIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllclxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4gICAgKi9cbiAgICB2YWx1ZUVhc2VkOiBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNpbmcpIHtcbiAgICAgICAgdmFyIGVhc2VkUHJvZ3Jlc3MgPSBlYXNpbmcocHJvZ3Jlc3MpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUoZWFzZWRQcm9ncmVzcywgZnJvbSwgdG8pO1xuICAgIH0sXG4gICAgXG4gICAgZGVncmVlc1RvUmFkaWFuczogZnVuY3Rpb24gKGRlZ3JlZXMpIHtcblx0ICAgIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgICB9LFxuICAgIFxuICAgIHJhZGlhbnNUb0RlZ3JlZXM6IGZ1bmN0aW9uIChyYWRpYW5zKSB7XG5cdCAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG4gICAgfVxufTtcblxuY2FsYyA9IG5ldyBDYWxjKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2FsYzsiLCIvKlxuICAgIEVhc2luZyBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgR2VuZXJhdGVzIGFuZCBwcm92aWRlcyBlYXNpbmcgZnVuY3Rpb25zIGJhc2VkIG9uIGJhc2VGdW5jdGlvbiBkZWZpbml0aW9uc1xuICAgIFxuICAgIEEgY2FsbCB0byBlYXNpbmdGdW5jdGlvbi5nZXQoJ2Z1bmN0aW9uTmFtZScpIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwYXNzZWQ6XG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgMC0xXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaXMgdXNlZCB0byBhZGp1c3Qgb3ZlcmFsbCBzdHJlbmd0aFxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBFYXNlZCBwcm9ncmVzc1xuICAgICAgICBcbiAgICBXZSBjYW4gZ2VuZXJhdGUgbmV3IGZ1bmN0aW9ucyBieSBzZW5kaW5nIGFuIGVhc2luZyBmdW5jdGlvbiB0aHJvdWdoIGVhc2luZ0Z1bmN0aW9uLmV4dGVuZChuYW1lLCBtZXRob2QpLlxuICAgIFdoaWNoIHdpbGwgbWFrZSBuYW1lSW4sIG5hbWVPdXQgYW5kIG5hbWVJbk91dCBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvIHVzZS5cbiAgICBcbiAgICBCYXNlIGVhc2luZ1xuICAgICAgICBsaW5lYXI6IGRlZmF1bHQsIG5vIGluL291dC9pbk91dCB2YXJpYXRpb25zXG4gICAgICAgIHF1YWRcbiAgICAgICAgY3ViaWNcbiAgICAgICAgcXVhcnRcbiAgICAgICAgcXVpbnRcbiAgICAgICAgZXhwXG4gICAgICAgIGNpcmNcbiAgICAgICAgYmFja1xuICAgICAgICBib3VuY2VcbiAgICAgICAgc3dpbmdcbiAgICAgICAgc3ByaW5nXG4gICAgICAgIFxuICAgIEVhc2luZyBmdW5jdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyXG4gICAgaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbiAgICAgICAgXG4gICAgQmV6aWVyIGN1cnZlIGludGVycHJldG9yIGNyZWF0ZWQgZnJvbSBHYcOrdGFuIFJlbmF1ZGVhdSdzIG9yaWdpbmFsIEJlemllckVhc2luZyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4vY2FsYy5qcycpLFxuIFx0dXRpbCA9IHJlcXVpcmUoJy4vdXRpbHMuanMnKSxcbiBcdEtFWSA9IHJlcXVpcmUoJy4uL29wdHMva2V5cy5qcycpLFxuIFx0ZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9vcHRzL2RlZmF1bHRzLmpzJyksXG4gXHRCZXppZXIgPSByZXF1aXJlKCcuLi9iaXRzL2Jlemllci5qcycpLFxuIFx0RWFzaW5nRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7fSxcblx0ZWFzaW5nRnVuY3Rpb24sXG5cdC8qXG4gICAgXHRFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgIFx0XG4gICAgXHRPbiBpbml0LCB3ZSB1c2UgRWFzaW5nRnVuY3Rpb24ubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gICAgXHRlYXNlT3V0IGZ1bmN0aW9ucyByZXNwZWN0aXZlbHkuXG5cdCovXG5cdGJhc2VJbiA9IHtcblx0ICAgIC8qXG4gICAgXHQgICAgUXVhZCAtIFF1bml0IGVhc2luZ1xuICAgIFx0ICAgIFxuICAgIFx0ICAgIEdlbmVyYXRlcyBlYXNpbmcgY3VydmUgYmFzZWQgb24gZXhwb25lbnQgb2YgdGltZVxuXHQgICAgKi9cbiAgICAgICAgcXVhZDogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3cocHJvZ3Jlc3MsIDIpO1xuICAgICAgICB9LFxuICAgICAgICBjdWJpYzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3cocHJvZ3Jlc3MsIDMpO1xuICAgICAgICB9LFxuICAgICAgICBxdWFydDogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3cocHJvZ3Jlc3MsIDQpO1xuICAgICAgICB9LFxuICAgICAgICBxdWludDogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3cocHJvZ3Jlc3MsIDUpO1xuICAgICAgICB9LFxuICAgICAgICBjaXJjOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHByb2dyZXNzKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGJhY2s6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgdmFyIHN0cmVuZ3RoID0gMS41O1xuXG4gICAgICAgICAgICByZXR1cm4gKHByb2dyZXNzICogcHJvZ3Jlc3MpICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJhc2VPdXQgPSB7XG4gICAgICAgIGJvdW5jZTogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG5cdFx0XHRpZiAoKHByb2dyZXNzKSA8ICgxLzIuNzUpKSB7XG5cdFx0XHRcdHJldHVybiAoNy41NjI1KnByb2dyZXNzKnByb2dyZXNzKTtcblx0XHRcdH0gZWxzZSBpZiAocHJvZ3Jlc3MgPCAoMi8yLjc1KSkge1xuXHRcdFx0XHRyZXR1cm4gKDcuNTYyNSoocHJvZ3Jlc3MtPSgxLjUvMi43NSkpKnByb2dyZXNzICsgLjc1KTtcblx0XHRcdH0gZWxzZSBpZiAocHJvZ3Jlc3MgPCAoMi41LzIuNzUpKSB7XG5cdFx0XHRcdHJldHVybiAoNy41NjI1Kihwcm9ncmVzcy09KDIuMjUvMi43NSkpKnByb2dyZXNzICsgLjkzNzUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuICg3LjU2MjUqKHByb2dyZXNzLT0oMi42MjUvMi43NSkpKnByb2dyZXNzICsgLjk4NDM3NSk7XG5cdFx0XHR9XG4gICAgICAgIH0sXG5cdCAgICBzd2luZzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG5cdFx0ICAgIHZhciBzID0gMS43MDE1ODtcblx0XHQgICAgcmV0dXJuIChwcm9ncmVzcyAtPSAxKSAqIHByb2dyZXNzICogKChzICsgMSkgKiBwcm9ncmVzcyArIHMpICsgMTtcblx0ICAgIH0sXG5cdCAgICBzcHJpbmc6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuXHQgICAgXHRyZXR1cm4gMSAtIChNYXRoLmNvcyhwcm9ncmVzcyAqIDQuNSAqIE1hdGguUEkpICogTWF0aC5leHAoLXByb2dyZXNzICogNikpO1xuXHQgICAgfVxuXHR9O1xuXHRcbkVhc2luZ0Z1bmN0aW9uLnByb3RvdHlwZSA9IHtcblxuICAgIC8qXG4gICAgICAgIEdldCB0aGUgbmFtZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgdGhlIGVhc2luZyBmdW5jdGlvbiB0byBnZXQgXG4gICAgICAgIEByZXR1cm4gW2Z1bmN0aW9uIHx8IGJvb2xlYW5dOiBFYXNpbmcgZnVuY3Rpb24gb3IgZmFsc2UgaWYgZnVuY3Rpb24gdW5kZWZpbmVkXG4gICAgKi9cblx0Z2V0OiBmdW5jdGlvbiAobmFtZSkge1xuXHRcdHZhciBlYXNpbmcgPSB0aGlzW25hbWVdO1xuXHRcdFxuXHRcdGlmICghZWFzaW5nKSB7XG5cdFx0XHR0aHJvdyBuYW1lICsgS0VZLkVSUk9SLklOVkFMSURfRUFTSU5HO1xuXHRcdH1cblxuXHRcdHJldHVybiBlYXNpbmc7XG5cdH0sXG5cdFxuXHRcblx0LypcbiAgICBcdEFkZCBCZXppZXIgQ3VydmUgZWFzaW5nXG4gICAgXHRcbiAgICBcdEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiBuZXcgZWFzaW5nXG4gICAgXHRAcGFybWEgW251bWJlcl06IFggb2YgY29vcmRpbmF0ZSAxXG4gICAgXHRAcGFybWEgW251bWJlcl06IFkgb2YgY29vcmRpbmF0ZSAxXG4gICAgXHRAcGFybWEgW251bWJlcl06IFggb2YgY29vcmRpbmF0ZSAyXG4gICAgXHRAcGFybWEgW251bWJlcl06IFkgb2YgY29vcmRpbmF0ZSAyXG5cdCovXG5cdGFkZEJlemllcjogZnVuY3Rpb24gKG5hbWUsIHgxLCB5MSwgeDIsIHkyKSB7XG5cdFx0aWYgKCF0aGlzW25hbWVdKSB7XG5cdFx0XHR0aGlzW25hbWVdID0gbmV3IEJlemllcih4MSwgeTEsIHgyLCB5Mik7XG5cdFx0fVxuXHR9LFxuXG4gICAgICBcbiAgICAvKlxuICAgICAgICBNaXJyb3IgZWFzaW5nXG4gICAgICAgIFxuICAgICAgICBNaXJyb3JzIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgaGVyZSBmb3IgbWlycm9yaW5nIGFuXG4gICAgICAgIGVhc2VJbiBpbnRvIGFuIGVhc2VJbk91dFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtaXJyb3JcbiAgICAgICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiAgICAqL1xuXHRtaXJyb3JFYXNpbmc6IGZ1bmN0aW9uIChwcm9ncmVzcywgbWV0aG9kKSB7XG4gICAgICAgIHZhciBkZWx0YTtcbiAgICAgICAgXG4gICAgICAgIGlmIChwcm9ncmVzcyA8PSAwLjUpIHtcbiAgICAgICAgICAgIGRlbHRhID0gbWV0aG9kKDIgKiBwcm9ncmVzcykgLyAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsdGEgPSAoMiAtIG1ldGhvZCgyICogKDEgLSBwcm9ncmVzcykpKSAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBkZWx0YTtcbiAgICB9LFxuICAgICAgICAgICAgXG4gICAgLypcbiAgICAgICAgUmV2ZXJzZSBlYXNpbmdcbiAgICAgICAgXG4gICAgICAgIFJldmVyc2VzIHRoZSBvdXRwdXQgb2YgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBmb3IgZmxpcHBpbmcgZWFzZUluXG4gICAgICAgIGN1cnZlIHRvIGFuIGVhc2VPdXQuXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIHJldmVyc2VcbiAgICAgICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiAgICAqL1xuICAgIHJldmVyc2VFYXNpbmc6IGZ1bmN0aW9uIChwcm9ncmVzcywgbWV0aG9kKSB7XG4gICAgICAgIHJldHVybiAxIC0gbWV0aG9kKDEgLSBwcm9ncmVzcyk7XG4gICAgfSxcbiAgICBcbiAgICBcbiAgICAvKlxuICAgICAgICBBZGQgbmV3IGVhc2luZyBmdW5jdGlvblxuICAgICAgICBcbiAgICAgICAgVGFrZXMgbmFtZSBhbmQgZ2VuZXJhdGVzIG5hbWVJbiwgbmFtZU91dCwgbmFtZUluT3V0LCBhbmQgZWFzaW5nIGZ1bmN0aW9ucyB0byBtYXRjaFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBCYXNlIG5hbWUgb2YgdGhlIGVhc2luZyBmdW5jdGlvbnMgdG8gZ2VuZXJhdGVcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IEJhc2UgZWFzaW5nIGZ1bmN0aW9uLCBhcyBhbiBlYXNlSW4sIGZyb20gd2hpY2ggdG8gZ2VuZXJhdGUgT3V0IGFuZCBJbk91dFxuICAgICovXG5cdGdlbmVyYXRlOiBmdW5jdGlvbiAobmFtZSwgbWV0aG9kLCBpc0Jhc2VJbikge1xuXHRcdHZhciBzZWxmID0gdGhpcyxcblx0XHRcdG5hbWVzID0ge1xuXHRcdFx0XHRlYXNlSW46IG5hbWUgKyBLRVkuRUFTSU5HLklOLCBcblx0XHRcdFx0ZWFzZU91dDogbmFtZSArIEtFWS5FQVNJTkcuT1VULFxuXHRcdFx0XHRlYXNlSW5PdXQ6IG5hbWUgKyBLRVkuRUFTSU5HLklOX09VVFxuXHRcdFx0fSxcblx0XHRcdGJhc2VOYW1lID0gaXNCYXNlSW4gPyBuYW1lcy5lYXNlSW4gOiBuYW1lcy5lYXNlT3V0LFxuXHRcdFx0cmV2ZXJzZU5hbWUgPSBpc0Jhc2VJbiA/IG5hbWVzLmVhc2VPdXQgOiBuYW1lcy5lYXNlSW47XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBJbiBmdW5jdGlvblxuICAgICAgICB0aGlzW2Jhc2VOYW1lXSA9IG1ldGhvZDtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIE91dCBmdW5jdGlvbiBieSByZXZlcnNpbmcgdGhlIHRyYW5zaXRpb24gY3VydmVcbiAgICAgICAgdGhpc1tyZXZlcnNlTmFtZV0gPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLnJldmVyc2VFYXNpbmcocHJvZ3Jlc3MsIHNlbGZbbmFtZXMuZWFzZUluXSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvLyBDcmVhdGUgdGhlIEluT3V0IGZ1bmN0aW9uIGJ5IG1pcnJvcmluZyB0aGUgdHJhbnNpdGlvbiBjdXJ2ZVxuICAgICAgICB0aGlzW25hbWVzLmVhc2VJbk91dF0gPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLm1pcnJvckVhc2luZyhwcm9ncmVzcywgc2VsZltuYW1lcy5lYXNlSW5dKTtcbiAgICAgICAgfTtcblx0fSxcbiAgICBcbiAgICBcbiAgICAvKlxuICAgICAgICBFYXNlIHZhbHVlIHdpdGhpbiByYW5nZWQgcGFyYW1ldGVyc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAwIHByb2dyZXNzXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEVhc2luZyB0byB1c2VcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBBbXBsaWZ5IHByb2dyZXNzIG91dCBvZiBzcGVjaWZpZWQgcmFuZ2VcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiAgICAqLyAgXG4gICAgd2l0aGluUmFuZ2U6IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UsIGVzY2FwZUFtcCkge1xuICAgICAgICB2YXIgbmV3UHJvZ3Jlc3MgPSBjYWxjLnJlc3RyaWN0ZWQocHJvZ3Jlc3MsIDAsIDEpLFxuICAgICAgICAgICAgaW5SYW5nZSA9IHV0aWwuaXNJblJhbmdlKHByb2dyZXNzLCAwLCAxKTtcbiAgICAgICAgICAgIFxuICAgICAgICBlYXNlID0gaW5SYW5nZSA/IGVhc2UgOiBLRVkuRUFTSU5HLkxJTkVBUjtcblxuICAgICAgICBpZiAoIWluUmFuZ2UpIHtcbiAgICAgICAgICAgIG5ld1Byb2dyZXNzID0gbmV3UHJvZ3Jlc3MgKyAoY2FsYy5kaWZmZXJlbmNlKG5ld1Byb2dyZXNzLCBwcm9ncmVzcykgKiBlc2NhcGVBbXApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhbGMudmFsdWVFYXNlZChuZXdQcm9ncmVzcywgZnJvbSwgdG8sIHRoaXMuZ2V0KGVhc2UpKTtcbiAgICB9LFxuICAgICAgICBcbiAgICAvKlxuICAgICAgICBMaW5lYXIgZWFzaW5nIGFkanVzdG1lbnRcbiAgICAgICAgXG4gICAgICAgIFRoZSBkZWZhdWx0IGVhc2luZyBtZXRob2QsIG5vdCBhZGRlZCB3aXRoIC5leHRlbmQgYXMgaXQgaGFzIG5vIE91dCBvciBJbk91dFxuICAgICAgICB2YXJpYXRpb24uXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAtMVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBVbmFkanVzdGVkIHByb2dyZXNzXG4gICAgKi9cbiAgICAnbGluZWFyJzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiBwcm9ncmVzcztcbiAgICB9LFxuICAgIFxuICAgICdlYXNlJzpcdFx0XHRuZXcgQmV6aWVyKC4yNSwgLjEsIC4yNSwgMS4wKSxcbiAgICAnZWFzZS1pbic6XHRcdG5ldyBCZXppZXIoLjQyLCAwLCAxLjAwLCAxLjApLFxuICAgICdlYXNlLW91dCc6XHRcdG5ldyBCZXppZXIoMCwgMCwgLjU4LCAxLjApLFxuICAgICdlYXNlLWluLW91dCc6XHRuZXcgQmV6aWVyKC40MiwgMCwgLjU4LCAxLjApLFxuICAgICdiYWNrLWluJzogXHRcdG5ldyBCZXppZXIoLjQ4LC0wLjQ1LC45OSwuNzkpLFxuICAgICdiYWNrLW91dCc6IFx0bmV3IEJlemllciguMTEsLjcsLjYsMS4zMSlcblxufTtcblxuZWFzaW5nRnVuY3Rpb24gPSBuZXcgRWFzaW5nRnVuY3Rpb24oKTtcblxuaW5pdCgpO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuXG5cdC8vIEdlbmVyYXRlIGVhc2luZyB3aXRoIGJhc2UgZnVuY3Rpb24gb2YgZWFzZUluXG5cdGZvciAodmFyIGtleSBpbiBiYXNlSW4pIHtcblx0XHRpZiAoYmFzZUluLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdGVhc2luZ0Z1bmN0aW9uLmdlbmVyYXRlKGtleSwgYmFzZUluW2tleV0sIHRydWUpO1xuXHRcdH1cblx0fVxuXG5cdC8vIEdlbmVyYXRlIGVhc2luZyB3aXRoIGJhc2UgZnVuY3Rpb24gb2YgZWFzZU91dFxuXHRmb3IgKGtleSBpbiBiYXNlT3V0KSB7XG5cdFx0aWYgKGJhc2VPdXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0ZWFzaW5nRnVuY3Rpb24uZ2VuZXJhdGUoa2V5LCBiYXNlT3V0W2tleV0pO1xuXHRcdH1cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVhc2luZ0Z1bmN0aW9uO1xuIiwiLypcbiAgICBSZWRzaGlmdCBqUXVlcnkgcGx1Z2luXG4gICAgXG4gICAgUHJvdmlkZXMgYWNjZXNzIHRvIC5wbGF5LCAubW92ZSBhbmQgLnRyYWNrIHByb3BlcnRpZXMgb24gYW4galF1ZXJ5IG9iamVjdC5cbiAgICBVc2VzIHRoYXQgalF1ZXJ5IG9iamVjdCB0byBzdG9yZSBhIHVucWl1ZSBSZWRzaGlmdCBpbnN0YW5jZS5cbiAgICBcbiAgICAucmVkc2hpZnQoKSBtZXRob2QgdXNlZCBmb3Igb3RoZXIgUmVkc2hpZnQgZnVuY3Rpb25zLCBpZSAkKCcjZWxlbWVudCcpLnJlZHNoaWZ0KCdzdG9wJylcbiovXG52YXIgS0VZID0gcmVxdWlyZSgnLi4vb3B0cy9rZXlzLmpzJyksXG4gICAgclF1ZXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgIFx0dmFyIFJFRFNISUZUID0gJ3JlZHNoaWZ0JyxcbiAgICBcdFx0ZXhlY3V0ZSA9IGZ1bmN0aW9uICgkZWxlbWVudCwgYWN0aW9uLCBhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgXHRcdFx0JGVsZW1lbnQuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgXHRcdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgIFx0XHRcdFx0XHR0aGlzUmVkc2hpZnQgPSAkdGhpcy5kYXRhKFJFRFNISUZUKTtcbiAgICBcdFx0XHRcdFxuICAgIFx0XHRcdFx0Ly8gSWYgd2UgaGF2ZW4ndCBzdG9yZWQgYSBSZWRzaGlmdCBpbnN0YW5jZSBvbiB0aGlzIGVsZW1lbnQsIG1ha2Ugb25lXG4gICAgXHRcdFx0XHRpZiAoIXRoaXNSZWRzaGlmdCkge1xuICAgIFx0XHRcdFx0XHR0aGlzUmVkc2hpZnQgPSBSZWRzaGlmdC5nZXQoKTtcbiAgICBcdFx0XHRcdFx0dGhpc1JlZHNoaWZ0LmRhdGEoS0VZLkpRVUVSWV9FTEVNRU5ULCAkdGhpcyk7XG4gICAgXHRcdFx0XHRcdCR0aGlzLmRhdGEoUkVEU0hJRlQsIHRoaXNSZWRzaGlmdCk7XG4gICAgXHRcdFx0XHR9XG5cbiAgICBcdFx0XHRcdHRoaXNSZWRzaGlmdFthY3Rpb25dKGFyZzEsIGFyZzIsIGFyZzMpO1xuICAgIFx0XHRcdH0pO1xuICAgIFx0XHR9O1xuICAgIFx0XHRcbiAgICBcdCQuZm4ucGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICBcdFx0ZXhlY3V0ZSh0aGlzLCAncGxheScsIGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcbiAgICBcdFx0XG4gICAgXHRcdHJldHVybiB0aGlzO1xuICAgIFx0fTtcbiAgICBcdFxuICAgIFx0JC5mbi5tb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgIFx0XHRleGVjdXRlKHRoaXMsICdtb3ZlJywgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xuICAgIFxuICAgIFx0XHRyZXR1cm4gdGhpcztcbiAgICBcdH07XG4gICAgXHRcbiAgICBcdCQuZm4udHJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgXHRcdGV4ZWN1dGUodGhpcywgJ3RyYWNrJywgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgXHRcdFxuICAgIFx0XHRyZXR1cm4gdGhpcztcbiAgICBcdH07XG4gICAgXHRcbiAgICBcdCQuZm4ucmVkc2hpZnQgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgXHRcdGV4ZWN1dGUodGhpcywgYWN0aW9uLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgXHRcdFxuICAgIFx0XHRyZXR1cm4gdGhpcztcbiAgICBcdH07XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY2hlY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5qUXVlcnkpIHtcbiAgICAgICAgICAgIHJRdWVyeSgpO1xuICAgICAgICB9XG4gICAgfVxufTsiLCJ2YXIgU2hpbSA9IGZ1bmN0aW9uICgpIHt9O1xuXG5TaGltLnByb3RvdHlwZSA9IHtcblxuICAgIC8qXG4gICAgICAgIGluZGV4T2YgcG9seWZpbGxcbiAgICAgICAgXG4gICAgICAgIEZvciBJRTggdHJvZ2xvZGl0ZXNcbiAgICAgICAgXG4gICAgICAgIFRha2VuIGZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNjI5MTgzL3doeS1kb2VzbnQtaW5kZXhvZi13b3JrLW9uLWFuLWFycmF5LWllOFxuICAgICovXG4gICAgaW5kZXhPZjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIUFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIChlbHQgLyosIGZyb20qLykge1xuICAgICAgICAgICAgICAgIHZhciBsZW4gPSB0aGlzLmxlbmd0aCA+Pj4gMCxcbiAgICAgICAgICAgICAgICAgICAgZnJvbSA9IE51bWJlcihhcmd1bWVudHNbMV0pIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZyb20gPSAoZnJvbSA8IDApID8gTWF0aC5jZWlsKGZyb20pIDogTWF0aC5mbG9vcihmcm9tKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoZnJvbSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbSArPSBsZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAoOyBmcm9tIDwgbGVuOyBmcm9tKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyb20gaW4gdGhpcyAmJiB0aGlzW2Zyb21dID09PSBlbHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmcm9tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgICAgIFxuICAgICAgICBGb3IgSUU4LzkgRmxpbnN0b25lc1xuICAgIFxuICAgICAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgICAgIFxuICAgICAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgICAgICBcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICAgICAgXG4gICAgICAgIE1JVCBsaWNlbnNlXG4gICAgKi9cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxhc3RUaW1lID0gMCxcbiAgICAgICAgICAgIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddLFxuICAgICAgICAgICAgdmVuZG9yc0xlbmd0aCA9IHZlbmRvcnMubGVuZ3RoO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHByZWZpeGVkIGltcGxlbWVudGF0aW9uc1xuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IHZlbmRvcnNMZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7IHgrKykge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2ZW5kb3JzW3hdKydSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMsIGZvIGFic29sdXRlIHNoaXp6bGUsIG5vIHJBRiBpbXBsZW1lbnRhdGlvbnMsIG1ha2Ugb25lIG91dCBvZiBzZXRUaW1lb3V0IGFuZCBwdXR0eVxuICAgICAgICBpZiAoIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgaWQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnNoaW0gPSBuZXcgU2hpbSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmZWF0dXJlQ2hlY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2hpbS5pbmRleE9mKCk7XG4gICAgICAgIHNoaW0ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG4gICAgfVxufTsiLCIvKlxuICAgIFV0aWxpdHkgZnVuY3Rpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIGNvbnZlcnRFdmVudEludG9Qb2ludFxuICAgIGdldEFjdHVhbEV2ZW50XG4gICAgaGFzTW92ZWRcbiAgICBpc01vdXNlRXZlbnRcbiAgICBjdXJyZW50VGltZVxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgS0VZID0gcmVxdWlyZSgnLi4vb3B0cy9rZXlzLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLypcbiAgICAgICAgQ29udmVydCBldmVudCBpbnRvIHBvaW50XG4gICAgICAgIFxuICAgICAgICBTY3JhcGUgdGhlIHgveSBjb29yZGluYXRlcyBmcm9tIHRoZSBwcm92aWRlZCBldmVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtldmVudF06IE9yaWdpbmFsIHBvaW50ZXIgZXZlbnRcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogeC95IGNvb3JkaW5hdGVzIG9mIGV2ZW50XG4gICAgKi9cbiAgICBjb252ZXJ0RXZlbnRJbnRvUG9pbnQ6IGZ1bmN0aW9uIChldmVudCwgaXNUb3VjaEV2ZW50KSB7XG4gICAgXHRyZXR1cm4ge1xuICAgICAgICAgICAgeDogaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LnNjcmVlblgsXG4gICAgICAgICAgICB5OiBpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuc2NyZWVuWVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGFjdHVhbCBldmVudFxuICAgICAgICBcbiAgICAgICAgQ2hlY2tzIGZvciBqUXVlcnkncyAub3JpZ2luYWxFdmVudCBpZiBwcmVzZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2V2ZW50IHwgalF1ZXJ5IGV2ZW50XVxuICAgICAgICBAcmV0dXJuIFtldmVudF06IFRoZSBhY3R1YWwgSlMgZXZlbnQgIFxuICAgICovXG4gICAgZ2V0QWN0dWFsRXZlbnQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gZXZlbnQub3JpZ2luYWxFdmVudCB8fCBldmVudDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEhhcyB0aGUgcG9pbnRlciBtb3ZlZD9cbiAgICAgICAgXG4gICAgICAgIENvbXBhcmVzIHRoZSB0d28gcHJvdmlkZWQgcG9pbnRlcnMgYW5kIHJldHVybnMgdHJ1ZSBpZiB0aGV5IGFyZSBkaWZmZXJlbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogUG9pbnRlciBBXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogUG9pbnRlciBCXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuICAgICovXG4gICAgaGFzTW92ZWQ6IGZ1bmN0aW9uIChwb2ludGVyQSwgcG9pbnRlckIpIHtcbiAgICAgICAgcmV0dXJuIChwb2ludGVyQS54ICE9PSBwb2ludGVyQi54IHx8IHBvaW50ZXJBLnkgIT09IHBvaW50ZXJCLnkgfHwgcG9pbnRlckEueiAhPT0gcG9pbnRlckIueik7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIGV2ZW50IGEgbW91c2UgZXZlbnQ/XG4gICAgICAgIFxuICAgICAgICBDaGVja3MgdGhlIHByb3ZpZGVkIGV2ZW50IHR5cGUgZm9yIHRoZSAnbW91c2UnIHN0cmluZ1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBFdmVudCB0eXBlXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgJ21vdXNlJyBpcyBmb3VuZCBpbiBzdHJpbmdcbiAgICAqL1xuICAgIGlzTW91c2VFdmVudDogZnVuY3Rpb24gKGV2ZW50VHlwZSkge1xuXHRcdHJldHVybiAoZXZlbnRUeXBlLmluZGV4T2YoS0VZLkVWRU5ULk1PVVNFKSA+IC0xKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgZXZlbnQgYSB0b3VjaCBldmVudD9cbiAgICAgICAgXG4gICAgICAgIENoZWNrcyB0aGUgcHJvdmlkZWQgZXZlbnQgZm9yIHRoZSAudG91Y2hlcyBwcm9wXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEV2ZW50XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgLnRvdWNoZXMgaXMgcHJlc2VudFxuICAgICovXG4gICAgaXNUb3VjaEV2ZW50OiBmdW5jdGlvbiAoZSkge1xuXHQgICAgcmV0dXJuIChlLnRvdWNoZXMpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYSBudW1iZXI/XG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4gICAgKi9cbiAgICBpc051bTogZnVuY3Rpb24gKG51bSkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBudW0gPT09ICdudW1iZXInKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGFuIG9iamVjdD9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiAgICAqL1xuICAgIGlzT2JqOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYSBmdW5jdGlvbiA/IFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdGhpcy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4gICAgKi9cbiAgICBpc0Z1bmM6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJyk7IFxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYSBzdHJpbmcgPyBcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4gICAgKi9cbiAgICBpc1N0cmluZzogZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKTsgXG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhbiBhcnJheSA/IFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdGhpcy52YXJUeXBlID09PSAnQXJyYXknXG4gICAgKi9cbiAgICBpc0FycmF5OiBmdW5jdGlvbiAoYXJyKSB7XG5cdCAgICByZXR1cm4gKHRoaXMudmFyVHlwZShhcnIpID09PSAnQXJyYXknKTtcbiAgICB9LFxuICAgIFxuICAgIGlzSW5SYW5nZTogZnVuY3Rpb24gKHZhbHVlLCBmcm9tLCB0bykge1xuICAgICAgICByZXR1cm4gKHZhbHVlID49IGZyb20gJiYgdmFsdWUgPD0gdG8pO1xuICAgIH0sXG4gICAgXG4gICAgY29weTogZnVuY3Rpb24gKG9iaikge1xuXHQgICAgdmFyIG5ld09iaiA9IHt9O1xuXHQgICAgXG5cdCAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG5cdFx0ICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0ICAgIGlmICh0aGlzLmlzT2JqKG9ialtrZXldKSkge1xuXHRcdFx0XHQgICAgbmV3T2JqW2tleV0gPSB0aGlzLmNvcHkob2JqW2tleV0pO1xuXHRcdFx0ICAgIH0gZWxzZSB7XG5cdFx0XHRcdCAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuXHRcdFx0ICAgIH1cblx0XHQgICAgfVxuXHQgICAgfVxuXHQgICAgXG5cdCAgICByZXR1cm4gbmV3T2JqO1xuICAgIH0sXG4gICAgXG4gICAgbWVyZ2U6IGZ1bmN0aW9uIChiYXNlLCBvdmVyd3JpdGUpIHtcblx0ICAgIHZhciBuZXdPYmogPSB0aGlzLmNvcHkoYmFzZSk7XG5cdCAgICBcblx0ICAgIGZvciAodmFyIGtleSBpbiBvdmVyd3JpdGUpIHtcblx0XHQgICAgaWYgKG92ZXJ3cml0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHQgICAgaWYgKHRoaXMuaXNPYmoob3ZlcndyaXRlW2tleV0pKSB7XG5cdFx0XHRcdCAgICBuZXdPYmpba2V5XSA9IHRoaXMubWVyZ2UobmV3T2JqW2tleV0sIG92ZXJ3cml0ZVtrZXldKTtcblx0XHRcdCAgICB9IGVsc2Uge1xuXHRcdFx0XHQgICAgbmV3T2JqW2tleV0gPSBvdmVyd3JpdGVba2V5XTtcblx0XHRcdCAgICB9XG5cdFx0ICAgIH1cblx0ICAgIH1cblx0ICAgIFxuXHQgICAgcmV0dXJuIG5ld09iajtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWVcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBNYXggcmFuZ2VcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuICAgICovXG4gICAgc3RlcFByb2dyZXNzOiBmdW5jdGlvbiAodmFsdWUsIG1heCwgc3RlcHMpIHtcbiAgICAgICAgdmFyIHN0ZXBwZWQgPSAwLFxuICAgICAgICAgICAgc2VnbWVudCA9IG1heCAvIHN0ZXBzO1xuICAgICAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IHN0ZXBzOyBpKyspIHtcbiAgICAgICAgICAgIHN0ZXBwZWQgPSBpICogc2VnbWVudDtcblxuICAgICAgICAgICAgaWYgKChpICsgMSkgKiBzZWdtZW50ID4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHN0ZXBwZWQ7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4gICAgKi9cbiAgICB2YXJUeXBlOiBmdW5jdGlvbiAodmFyaWFibGUpIHtcblx0ICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4gICAgKi9cbiAgICBjdXJyZW50VGltZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfVxuICAgIFxufTsiXX0=
