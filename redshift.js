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
	priorityProps = ['current', 'to', 'from', 'start'],
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvYWN0aW9uLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvYmV6aWVyLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvb2Zmc2V0LmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvcG9pbnQuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvYml0cy9wb2ludGVyLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvdmFsdWUuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvYml0cy92ZWxvY2l0eS5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy9ib2JzL2FjdGlvbk1hbmFnZXIuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvYm9icy9jaHJvbm9zLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JvYnMvZXZlbnRzLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JvYnMvaGlzdG9yeS5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy9ib2JzL3BvaW50ZXJUcmFja2VyLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JvYnMvcHJvY2Vzcy5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy9ib2JzL3J1Yml4LmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JvYnMvdG9rZW4uanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvb3B0cy9kZWZhdWx0cy5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy9vcHRzL2tleXMuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvcmVkc2hpZnQuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvdXRpbHMvY2FsYy5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy91dGlscy9lYXNpbmdGdW5jdGlvbnMuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvdXRpbHMvclF1ZXJ5LmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL3V0aWxzL3NoaW1zLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL3V0aWxzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1YUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIEtFWSA9IHJlcXVpcmUoJy4uL29wdHMva2V5cy5qcycpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi91dGlscy9jYWxjLmpzJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy91dGlscy5qcycpLFxuICAgIFRva2VuID0gcmVxdWlyZSgnLi4vYm9icy90b2tlbi5qcycpLFxuICAgIHRva2VuID0gbmV3IFRva2VuKCksXG4gICAgVmFsdWUgPSByZXF1aXJlKCcuL3ZhbHVlLmpzJyksXG4gICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7fSxcbiAgICBBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IHV0aWxzLmN1cnJlbnRUaW1lKCk7XG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbi5nZW5lcmF0ZSgpO1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5vcmlnaW4gPSB7fTtcbiAgICAgICAgdGhpcy5wbGF5bGlzdCA9IFtdO1xuICAgIH0sXG4gICAgZGVmYXVsdHMgPSB7XG4gICAgXG4gICAgICAgIC8vIElzIHRoaXMgYWN0aW9uIGFjdGl2ZVxuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBcbiAgICAgICAgLy8gV2hhdCB0byB1c2UgdG8gcHJvY2VzcyB0aGlzIGFjaXRvblxuICAgICAgICBsaW5rOiBLRVkuTElOSy5USU1FLFxuICAgICAgICBcbiAgICAgICAgLy8gTXVsdGlwbHkgb3V0cHV0IHZhbHVlIGJ5XG4gICAgICAgIGFtcDogMSxcbiAgICAgICAgXG4gICAgICAgIC8vIE11bHRpcGx5IG91dHB1dCB2YWx1ZSBvdXRzaWRlIG1pbi9tYXggYnlcbiAgICAgICAgZXNjYXBlQW1wOiAwLFxuICAgICAgICBcbiAgICAgICAgLy8gRGVsYXkgdGhpcyBhY3Rpb24gYnkgeCBtc1xuICAgICAgICBkZWxheTogMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFRpbWUgb2YgYW5pbWF0aW9uIChpZiBhbmltYXRpbmcpIGluIG1zXG4gICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgIFxuICAgICAgICAvLyBFYXNlIGFuaW1hdGlvblxuICAgICAgICBlYXNlOiBLRVkuRUFTSU5HLlFVQURfSU5fT1VULFxuICAgICAgICBcbiAgICAgICAgLy8gQXBwbHkgdGhpcyBNYXRoIGZ1bmN0aW9uIHRvIG91dHB1dCB2YWx1ZVxuICAgICAgICBtYXRoOiB1bmRlZmluZWQsXG4gICAgICAgIFxuICAgICAgICAvLyBEaXZpZGUgYW5pbWF0aW9uIGludG8gdGhpcyBtYW55IHN0ZXBzXG4gICAgICAgIHN0ZXBzOiAwLFxuICAgICAgICBcbiAgICAgICAgLy8gXG4gICAgICAgIHRpbWVEaWxhdGlvbjogMSxcbiAgICAgICAgXG4gICAgICAgIHBsYXloZWFkOiAwLFxuICAgICAgICBcbiAgICAgICAgLy8gXG4gICAgICAgIHBvaW50ZXJPZmZzZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgXG4gICAgICAgIC8vIEN1cnJlbnQgcHJvZ3Jlc3NcbiAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgIFxuICAgICAgICAvLyBUaW1lIGVsYXBzZWRcbiAgICAgICAgZWxhcHNlZDogMCxcbiAgICAgICAgXG4gICAgICAgIC8vIExvb3AgYW5pbWF0aW9uIHggbnVtYmVyIG9mIHRpbWVzICh0cnVlIGZvciBFVEVSTkFMTFkpXG4gICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICBcbiAgICAgICAgLy8gTnVtYmVyIG9mIHRpbWVzIGFuaW1hdGlvbiBoYXMgbG9vcGVkXG4gICAgICAgIGxvb3BDb3VudDogMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFBsYXkgYW5pbWF0aW9uIGFuZCByZXZlcnNlIHggbnVtYmVyIG9mIHRpbWVzICh0cnVlIGZvciBmb3JldmVyKVxuICAgICAgICB5b3lvOiBmYWxzZSxcbiAgICAgICAgXG4gICAgICAgIC8vIE51bWJlciBvZiB0aW1lcyBhbmltYXRpb24gaGFzIHlveW9lZFxuICAgICAgICB5b3lvQ291bnQ6IDAsXG4gICAgICAgIFxuICAgICAgICAvLyBSdW4gdGhpcyBjYWxsYmFjayBvbiBhY3Rpb24gc3RhcnRcbiAgICAgICAgb25TdGFydDogY2FsbGJhY2ssXG4gICAgICAgIFxuICAgICAgICAvLyBSdW4gdGhpcyBvbiBhY3Rpb24gZW5kXG4gICAgICAgIG9uRW5kOiBjYWxsYmFjayxcbiAgICAgICAgXG4gICAgICAgIC8vIFJ1biB0aGlzIGV2ZXJ5IGZyYW1lXG4gICAgICAgIG9uRnJhbWU6IGNhbGxiYWNrLFxuICAgICAgICBcbiAgICAgICAgLy8gUnVuIHRoaXMgd2hlbiBhY3Rpb24gY2hhbmdlc1xuICAgICAgICBvbkNoYW5nZTogY2FsbGJhY2tcbiAgICB9O1xuXG4vKlxuICAgIFNldCBBY3Rpb24gb3B0aW9uc1xuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogVXNlci1kZWZpbmVkIG9wdGlvbnNcbiovXG5BY3Rpb24ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgLy8gTG9vcCB0aHJvdWdoIHN0YW5kYXJkIG9wdGlvbnMgYW5kIGFzc2lnblxuICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0cykge1xuICAgICAgICBpZiAoZGVmYXVsdHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBJZiB1c2VyIGhhcyBzZXQgdGhpcyBvcHRpb25cbiAgICAgICAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIE9yIHNldCB0byBkZWZhdWx0XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IGRlZmF1bHRzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGhpcy5wbGF5bGlzdCA9IG9wdGlvbnMucGxheWxpc3QgfHwgdGhpcy5wbGF5bGlzdCB8fCBbXTtcbiAgICB0aGlzLnNjb3BlID0gb3B0aW9ucy5zY29wZSB8fCB0aGlzLnNjb3BlIHx8IHRoaXM7XG5cbiAgICAvLyBTZXQgdGhlIHZhbHVlc1xuICAgIHRoaXMuc2V0VmFsdWVzKG9wdGlvbnMudmFsdWVzKTtcbn07XG4gXG5cbi8qXG4gICAgU2V0IFZhbHVlc1xuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogVXNlci1kZWZpbmVkIHZhbHVlc1xuKi8gICBcbkFjdGlvbi5wcm90b3R5cGUuc2V0VmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgIC8vIENyZWF0ZSBvciB1cGRhdGUgVmFsdWUgb2JqZWN0cyBmb3IgZWFjaCBkZWZpbmVkIHZhbHVlXG4gICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVzW2tleV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1trZXldLnVwZGF0ZSh2YWx1ZXNba2V5XSwgdGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW2tleV0gPSBuZXcgVmFsdWUodmFsdWVzW2tleV0sIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIEhhbmRsZSBzcGVjaWFsIHZhbHVlc1xuXG4gICAgaWYgKHRoaXMudmFsdWVzLmFuZ2xlKSB7XG4gICAgXHR0aGlzLnZhbHVlcy54ID0gdGhpcy52YWx1ZXMueCB8fCBuZXcgVmFsdWUoMCwgdGhpcyk7XG4gICAgICAgIHRoaXMudmFsdWVzLnkgPSB0aGlzLnZhbHVlcy55IHx8IG5ldyBWYWx1ZSgwLCB0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgb3JpZ2luc1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnZhbHVlcykge1xuICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5ba2V5XSA9IHRoaXMudmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qXG4gICAgUmVzZXQgdmFsdWVzXG4qL1xuQWN0aW9uLnByb3RvdHlwZS5yZXNldFZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy52YWx1ZXMpIHtcbiAgICAgICAgdGhpcy52YWx1ZXNba2V5XS5jdXJyZW50ID0gdGhpcy52YWx1ZXNba2V5XS5mcm9tO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICB0aGlzLmVsYXBzZWQgPSAwO1xufTtcblxuLypcbiAgICBSZXZlcnNlIHZhbHVlc1xuKi9cbkFjdGlvbi5wcm90b3R5cGUucmV2ZXJzZVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIGtleSwgdG8sIGZyb207XG5cdFxuXHR0aGlzLnByb2dyZXNzID0gY2FsYy5kaWZmZXJlbmNlKHRoaXMucHJvZ3Jlc3MsIDEpO1xuXHR0aGlzLmVsYXBzZWQgPSBjYWxjLmRpZmZlcmVuY2UodGhpcy5lbGFwc2VkLCB0aGlzLmR1cmF0aW9uKTtcblxuICAgIGZvciAoa2V5IGluIHRoaXMudmFsdWVzKSB7XG5cdCAgICBpZiAodGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHQgICAgXHR0byA9IHRoaXMudmFsdWVzW2tleV0udG87XG5cdCAgICBcdGZyb20gPSB0aGlzLnZhbHVlc1trZXldLmZyb207XG5cdCAgICBcdFxuXHQgICAgXHR0aGlzLnZhbHVlc1trZXldLnRvID0gZnJvbTtcblx0XHQgICAgdGhpcy52YWx1ZXNba2V5XS5mcm9tID0gdG87XG5cdCAgICB9XG4gICAgfVxufTtcblxuLypcbiAgICBTdGFydCB0aGUgYWN0aW9uXG4qL1xuQWN0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5zdGFydGVkID0gdXRpbHMuY3VycmVudFRpbWUoKSArIHRoaXMuZGVsYXk7XG4gICAgdGhpcy5mcmFtZXN0YW1wID0gdGhpcy5zdGFydGVkO1xuICAgIHRoaXMuZmlyc3RGcmFtZSA9IHRydWU7XG59O1xuXG4vKlxuICAgIFN0b3AgdGhlIGFjdGlvblxuKi9cbkFjdGlvbi5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEFjdGlvbjsiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4vKlxuXHRCZXppZXIgZnVuY3Rpb24gZ2VuZXJhdG9yXG4gICAgICAgIFxuICAgIEdhw6t0YW4gUmVuYXVkZWF1J3Mgb3JpZ2luYWwgQmV6aWVyRWFzaW5nXG4gICAgWW91J3JlIGEgaGVyb1xuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIG5ld3Rvbkl0ZXJhdGlvbnMgPSA4LFxuICBcdG5ld3Rvbk1pblNsb3BlID0gMC4wMDEsXG4gIFx0c3ViZGl2aXNpb25QcmVjaXNpb24gPSAwLjAwMDAwMDEsXG4gIFx0c3ViZGl2aXNpb25NYXhJdGVyYXRpb25zID0gMTAsXG4gIFx0a1NwbGluZVRhYmxlU2l6ZSA9IDExLFxuXHRrU2FtcGxlU3RlcFNpemUgPSAxLjAgLyAoa1NwbGluZVRhYmxlU2l6ZSAtIDEuMCksXG5cdGZsb2F0MzJBcnJheVN1cHBvcnRlZCA9ICdGbG9hdDMyQXJyYXknIGluIGdsb2JhbCxcblxuXHRCZXppZXIgPSBmdW5jdGlvbiAobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFxuXHRcdHRoaXMucHJlY29tcHV0ZShtWDEsIG1ZMSwgbVgyLCBtWTIpO1xuXG4gICAgXHRyZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICBcdFx0cmV0dXJuIHNlbGYuY2FsY0JlemllcihzZWxmLmdldFRGb3JYKHQsIG1YMSwgbVgyKSwgbVkxLCBtWTIpO1xuICAgIFx0fVxuICAgIH07XG4gICAgXG5CZXppZXIucHJvdG90eXBlID0ge1xuXG5cdHByZWNvbXB1dGU6IGZ1bmN0aW9uIChtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcblx0XHR0aGlzLm1TYW1wbGVWYWx1ZXMgPSBmbG9hdDMyQXJyYXlTdXBwb3J0ZWQgPyBuZXcgRmxvYXQzMkFycmF5KGtTcGxpbmVUYWJsZVNpemUpIDogbmV3IEFycmF5KGtTcGxpbmVUYWJsZVNpemUpO1xuXHRcdHRoaXMuY2FsY1NhbXBsZVZhbHVlcyhtWDEsIG1YMik7XG5cdH0sXG5cdFxuXHRjYWxjU2FtcGxlVmFsdWVzOiBmdW5jdGlvbiAobVgxLCBtWDIpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGtTcGxpbmVUYWJsZVNpemU7ICsraSkge1xuXHRcdFx0dGhpcy5tU2FtcGxlVmFsdWVzW2ldID0gdGhpcy5jYWxjQmV6aWVyKGkgKiBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcblx0XHR9XG5cdH0sXG5cblx0bmV3dG9uUmFwaHNvbkl0ZXJhdGU6IGZ1bmN0aW9uICh0LCBndWVzcywgbVgxLCBtWDIpIHtcblx0XHR2YXIgaSA9IDAsXG5cdFx0XHRjdXJyZW50U2xvcGUsXG5cdFx0XHRjdXJyZW50WDtcblx0XHRcblx0XHRmb3IgKGk7IGkgPCBuZXd0b25JdGVyYXRpb25zOyArK2kpIHtcblx0XHRcdGN1cnJlbnRTbG9wZSA9IHRoaXMuZ2V0U2xvcGUoZ3Vlc3MsIG1YMSwgbVgyKTtcblx0XHRcdFxuXHRcdFx0aWYgKGN1cnJlbnRTbG9wZSAhPT0gMC4wKSB7XG5cdFx0XHRcdGN1cnJlbnRYID0gdGhpcy5jYWxjQmV6aWVyKGd1ZXNzLCBtWDEsIG1YMikgLSB0O1xuXHRcdFx0XHRndWVzcyAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHQ7XG5cdH0sXG5cdFxuXHRiaW5hcnlTdWJkaXZpZGU6IGZ1bmN0aW9uICh0LCBhQSwgYUIsIG1YMSwgbVgyKSB7XG5cdFx0dmFyIGkgPSAwLFxuXHRcdFx0Y3VycmVudFgsXG5cdFx0XHRjdXJyZW50VDtcblx0XHRcdFxuXHRcdGRvIHtcblx0XHRcdGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG5cdFx0XHRjdXJyZW50WCA9IHRoaXMuY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gdDtcblx0XHRcdFxuXHRcdFx0aWYgKGN1cnJlbnRYID4gMC4wKSB7XG5cdFx0XHRcdGFCID0gY3VycmVudFQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhQSA9IGN1cnJlbnRUO1xuXHRcdFx0fVxuXHRcdH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IHN1YmRpdmlzaW9uUHJlY2lzaW9uICYmICsraSA8IHN1YmRpdmlzaW9uTWF4SXRlcmF0aW9ucyk7XG5cdFx0XG5cdFx0cmV0dXJuIGN1cnJlbnRUO1xuXHR9LFxuXG5cdGdldFRGb3JYOiBmdW5jdGlvbiAodCwgbVgxLCBtWDIpIHtcblx0XHR2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMCxcblx0XHRcdGN1cnJlbnRTYW1wbGUgPSAxLFxuXHRcdFx0bGFzdFNhbXBsZSA9IGtTcGxpbmVUYWJsZVNpemUgLSAxLFxuXHRcdFx0ZGlzdCxcblx0XHRcdGd1ZXNzLFxuXHRcdFx0aW5pdGlhbFNsb3BlO1xuXHRcdFx0XG5cdFx0Zm9yIChpbnRlcnZhbFN0YXJ0OyBjdXJyZW50U2FtcGxlICE9IGxhc3RTYW1wbGUgJiYgdGhpcy5tU2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IHQ7ICsrY3VycmVudFNhbXBsZSkge1xuXHRcdFx0aW50ZXJ2YWxTdGFydCArPSBrU2FtcGxlU3RlcFNpemU7XG5cdFx0fVxuXHRcdFxuXHRcdC0tY3VycmVudFNhbXBsZTtcblxuXHRcdGRpc3QgPSAodCAtIHRoaXMubVNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSAvICh0aGlzLm1TYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gdGhpcy5tU2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSk7XG5cdFx0XG5cdFx0Z3Vlc3MgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIGtTYW1wbGVTdGVwU2l6ZTtcblx0XHRpbml0aWFsU2xvcGUgPSB0aGlzLmdldFNsb3BlKGd1ZXNzLCBtWDEsIG1YMik7XG5cblx0XHRpZiAoaW5pdGlhbFNsb3BlID09PSBuZXd0b25NaW5TbG9wZSkge1xuXHRcdFx0dCA9IHRoaXMubmV3dG9uUmFwaHNvbkl0ZXJhdGUodCwgZ3Vlc3MsIG1YMSwgbVgyKTtcblx0XHR9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PSAwLjApIHtcblx0XHRcdHQgPSBndWVzcztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dCA9IHRoaXMuYmluYXJ5U3ViZGl2aWRlKHQsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcblx0XHR9XG5cdFx0cmV0dXJuIHQ7XG5cdH0sXG5cblx0Z2V0U2xvcGU6IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcblx0XHRyZXR1cm4gMy4wICogdGhpcy5BKGExLCBhMikgKiB0ICogdCArIDIuMCAqIHRoaXMuQihhMSwgYTIpICogdCArIHRoaXMuQyhhMSk7XG5cdH0sXG5cblx0Y2FsY0JlemllcjogZnVuY3Rpb24gKHQsIGExLCBhMikge1xuXHRcdHJldHVybiAoKHRoaXMuQShhMSwgYTIpICogdCArIHRoaXMuQihhMSwgYTIpKSAqIHQgKyB0aGlzLkMoYTEpKSAqIHQ7XG5cdH0sXG5cdFxuXHRBOiBmdW5jdGlvbiAoYTEsIGEyKSB7XG5cdFx0cmV0dXJuIDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG5cdH0sXG5cdFxuXHRCOiBmdW5jdGlvbiAoYTEsIGEyKSB7XG5cdFx0cmV0dXJuIDMuMCAqIGEyIC0gNi4wICogYTE7XG5cdH0sXG5cdFxuXHRDOiBmdW5jdGlvbiAoYTEpIHtcblx0XHRyZXR1cm4gMy4wICogYTE7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQmV6aWVyO1xufSkuY2FsbCh0aGlzLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSkiLCIvKlxuICAgIE9mZnNldCBjbGFzcyB8IGV4dGVuZHMgUG9pbnRcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgRGVmaW5lcyB0aGUgcmVsYXRpdmUgb2Zmc2V0IGZyb20gYW5vdGhlciBwb2ludFxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgUG9pbnQgPSByZXF1aXJlKCcuL3BvaW50LmpzJyksXG4gICAgT2Zmc2V0ID0gZnVuY3Rpb24gKGFuZ2xlLCBkaXN0YW5jZSwgeCwgeSwgeikge1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGUgfHwgMDtcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlIHx8IDA7XG4gICAgICAgIHRoaXMuc2V0UG9pbnQoeCwgeSwgeik7XG4gICAgfTtcbiAgICBcbk9mZnNldC5wcm90b3R5cGUgPSBuZXcgUG9pbnQoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPZmZzZXQ7IiwiLypcbiAgICBQb2ludCBjbGFzc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBEZWZpbmVzIGEgM0QgcG9pbnQgaW4gc3BhY2VcbiAgICBcbiAgICBAcGFyYW0gW251bWJlciB8fCBQb2ludF06IEVpdGhlciBYIGF4aXMgdmFsdWUgb3IgUG9pbnQgb2JqZWN0XG4gICAgQHBhcmFtIFtudW1iZXJdOiBZIGF4aXNcbiAgICBAcGFyYW0gW251bWJlcl06IFogYXhpc1xuICAgIEByZXR1cm4gW1BvaW50XVxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgUG9pbnQgPSBmdW5jdGlvbiAoeCwgeSwgeikge1xuICAgICAgICB0aGlzLnNldFBvaW50KHgsIHksIHopO1xuICAgIH07XG5cblBvaW50LnByb3RvdHlwZSA9IHtcbiAgICBzZXRQb2ludDogZnVuY3Rpb24gKHgsIHksIHopIHtcbiAgICAgICAgdmFyIHhJc09iaiA9ICh0eXBlb2YgeCA9PT0gJ29iamVjdCcpO1xuXG4gICAgICAgIHRoaXMueCA9IHhJc09iaiA/IHgueCB8fCAwIDogeCB8fCAwO1xuICAgICAgICB0aGlzLnkgPSB4SXNPYmogPyB4LnkgfHwgMCA6IHkgfHwgMDtcbiAgICAgICAgdGhpcy56ID0geElzT2JqID8geC56IHx8IDAgOiB6IHx8IDA7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQb2ludDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi91dGlscy9jYWxjLmpzJyksXG4gICAgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9vcHRzL2RlZmF1bHRzLmpzJyksXG4gICAgdXRpbCA9IHJlcXVpcmUoJy4uL3V0aWxzL3V0aWxzLmpzJyksXG4gICAgSGlzdG9yeSA9IHJlcXVpcmUoJy4uL2JvYnMvaGlzdG9yeS5qcycpLFxuICAgIFBvaW50ID0gcmVxdWlyZSgnLi9wb2ludC5qcycpLFxuICAgIE9mZnNldCA9IHJlcXVpcmUoJy4vb2Zmc2V0LmpzJyksXG4gICAgVmVsb2NpdHkgPSByZXF1aXJlKCcuL3ZlbG9jaXR5LmpzJyksXG4gICAgUG9pbnRlckNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7fSxcbiAgICBwb2ludGVyQ29udHJvbGxlcjtcblxuUG9pbnRlckNvbnRyb2xsZXIucHJvdG90eXBlID0ge1xuICAgIFxuICAgIGN1cnJlbnQ6IG5ldyBQb2ludCgpLFxuICAgIGhpc3Rvcnk6IHVuZGVmaW5lZCxcbiAgICBpbmFjdGl2ZUZyYW1lczogMCxcbiAgICBpc0RyYWc6IGZhbHNlLFxuICAgIGlzVG91Y2g6IGZhbHNlLFxuICAgIG9mZnNldDogbmV3IE9mZnNldCgpLFxuICAgIG9yaWdpbjogbmV3IFBvaW50KCksXG4gICAgdmVsb2NpdHk6IG5ldyBWZWxvY2l0eSgpLFxuICAgIFxuICAgIC8qXG4gICAgICAgIEluaXRhbGlzZSB0aGUgcG9pbnRlclxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBDb29yZGluYXRlcyBvZiBpbml0IHBvaW50XG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IFRydWUgaWYgbW91c2UgaXMgcG9pbnRlclxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dOiBUcnVlIGlmIHRoaXMgaXMgYSBkcmFnIGV2ZW50XG4gICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbiAocG9pbnQsIGlzVG91Y2gsIGlzRHJhZykge1xuICAgICAgICBwb2ludCA9IG5ldyBQb2ludChwb2ludCk7XG5cbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEhpc3RvcnkocG9pbnQpO1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBwb2ludDtcbiAgICAgICAgdGhpcy5vcmlnaW4gPSBwb2ludDtcbiAgICAgICAgdGhpcy5pc1RvdWNoID0gaXNUb3VjaDtcbiAgICAgICAgdGhpcy5pc0RyYWcgPSBpc0RyYWc7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gbmV3IE9mZnNldCgpO1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlbG9jaXR5KCk7XG4gICAgfSxcbiAgICBcbiAgICBcbiAgICAvKlxuICAgICAgICBQb2ludGVyIGlucHV0IGhhcyBtb3ZlZCwgYWRkIHRvIGhpc3RvcnlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogQ29vcmRpbmF0ZXMgb2YgbmV3IHBvaW50XG4gICAgKi9cbiAgICBtb3ZlZDogZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgICAgIHBvaW50ID0gbmV3IFBvaW50KHBvaW50KTtcbiAgICAgICAgdGhpcy5oaXN0b3J5LmFkZChwb2ludCk7XG4gICAgfSxcbiAgICBcbiAgICBcbiAgICAvKlxuICAgICAgICBDaGVjayBmb3IgbW92ZW1lbnQgYW5kIHVwZGF0ZSBwb2ludGVyIG9iamVjdCdzIHByb3BlcnRpZXMgb24gbmV3IGZyYW1lXG4gICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxhdGVzdFBvaW50ZXIgPSB0aGlzLmhpc3RvcnkuZ2V0TGF0ZXN0KCksXG4gICAgICAgICAgICBwb2ludGVyQWN0aXZlID0gdXRpbC5oYXNNb3ZlZCh0aGlzLmN1cnJlbnQsIGxhdGVzdFBvaW50ZXIpLFxuICAgICAgICAgICAgbW92ZW1lbnQ7XG4gICAgICAgIFxuICAgICAgICAvLyBQb2ludGVyIGhhcyBtb3ZlZCBiZXR3ZWVuIGZyYW1lcywgdXBkYXRlIHBvaW50ZXIgcHJvcHMgXG4gICAgICAgIGlmIChwb2ludGVyQWN0aXZlKSB7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB2ZWxvY2l0eSBmcm9tIGxhc3QgcG9zaXRpb25cbiAgICAgICAgICAgIG1vdmVtZW50ID0gY2FsYy5vZmZzZXQodGhpcy5jdXJyZW50LCBsYXRlc3RQb2ludGVyKTtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVsb2NpdHkoXG4gICAgICAgICAgICAgICAgbW92ZW1lbnQuYW5nbGUsXG4gICAgICAgICAgICAgICAgbW92ZW1lbnQuZGlzdGFuY2UsXG4gICAgICAgICAgICAgICAgbW92ZW1lbnQueCxcbiAgICAgICAgICAgICAgICBtb3ZlbWVudC55LFxuICAgICAgICAgICAgICAgIG1vdmVtZW50LnpcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjdXJyZW50IGNvb3JkaW5hdGVzXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBsYXRlc3RQb2ludGVyO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBSZXNldCBpbmFjdGl2ZSBmcmFtZSBjb3VudFxuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gUG9pbnRlciBpcyBpbmFjdGl2ZSBhbmQgZnJhbWUgbGltaXQgcmVhY2hlZFxuICAgICAgICB9IGVsc2UgaWYgKCFwb2ludGVyQWN0aXZlICYmIHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gZGVmYXVsdHMucG9pbnRlci5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBTZXQgc3BlZWQgdG8gemVyb1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWxvY2l0eSgpO1xuXG4gICAgICAgIC8vIFBvaW50ZXIgaXMgaW5hY3RpdmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEluY3JlbWVudCBpbmFjdGl2ZSBmcmFtZSBjb3VudGVyXG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzKys7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5wb2ludGVyQ29udHJvbGxlciA9IG5ldyBQb2ludGVyQ29udHJvbGxlcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBvaW50ZXJDb250cm9sbGVyOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy91dGlscy5qcycpLFxuXHRjYWxjID0gcmVxdWlyZSgnLi4vdXRpbHMvY2FsYy5qcycpLFxuXHRwcmlvcml0eVByb3BzID0gWydjdXJyZW50JywgJ3RvJywgJ2Zyb20nLCAnc3RhcnQnXSxcblx0XG5cdC8qXG4gICAgICAgIElzIHRoaXMga2V5IGEgcHJpb3JpdHkgcHJvcGVydHk/XG4gICAgICAgIFxuICAgICAgICBQcmlvcml0eSBwcm9wZXJ0aWVzIGFyZSBoYW5kbGVkIHNlcGVyYXRlbHkgYW5kIGJlZm9yZSBhbGwgdGhlIG90aGVyIHByb3BzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFRoZSBrZXkgdG8gbG9vayB1cCBpbiBvdXIgcHJpb3JpdHkgbGlzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSXMgdGhpcyBhIHByaW9yaXR5P1xuXHQqL1xuXHRpc1ByaW9yaXR5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIFx0cmV0dXJuIChwcmlvcml0eVByb3BzLmluZGV4T2Yoa2V5KSA+IC0xKTtcblx0fSxcblx0XG5cdC8qXG4gICAgXHRDYWxjdWxhdGUgcmVsYXRpdmUgdmFsdWVcbiAgICBcdFxuICAgIFx0VGFrZXMgdGhlIG9wZXJhdG9yIGFuZCB2YWx1ZSBmcm9tIGEgc3RyaW5nLCBpZSBcIis9NVwiLCBhbmQgYXBwbGllc1xuICAgIFx0dG8gdGhlIGN1cnJlbnQgdmFsdWUgdG8gcmVzb2x2ZSBhIG5ldyB0YXJnZXQuXG4gICAgXHRcbiAgICBcdEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgICBcdEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIFx0QHJldHVybiBbbnVtYmVyXTogTmV3IHZhbHVlXG5cdCovXG5cdGNhbGNSZWxhdGl2ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBjdXJyZW50KSB7XG4gICAgXHR2YXIgbmV3VmFsdWUgPSBjdXJyZW50LFxuICAgIFx0ICAgIGVxdWF0aW9uID0gdmFsdWUuc3BsaXQoJz0nKSxcbiAgICBcdCAgICBvcGVyYXRvciA9IGVxdWF0aW9uWzBdLFxuICAgIFx0ICAgIG51bSA9IHBhcnNlRmxvYXQoZXF1YXRpb25bMV0pO1xuXG4gICAgXHRzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIFx0Y2FzZSAnKyc6XG4gICAgICAgIFx0ICAgIG5ld1ZhbHVlID0gY3VycmVudCArIG51bTtcbiAgICAgICAgXHQgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgXHQgICAgbmV3VmFsdWUgPSBjdXJyZW50IC0gbnVtO1xuICAgICAgICBcdCAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICBcdCAgICBuZXdWYWx1ZSA9IGN1cnJlbnQgKiBudW07XG4gICAgICAgIFx0ICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgIFx0ICAgIG5ld1ZhbHVlID0gY3VycmVudCAvIG51bTtcbiAgICAgICAgXHQgICAgYnJlYWs7XG4gICAgXHR9XG5cbiAgICBcdHJldHVybiBuZXdWYWx1ZTtcblx0fSxcblx0XG5cdC8qXG4gICAgXHRQYXJzZSB2YWx1ZVxuICAgIFx0XG4gICAgXHRQYXJzZXMgdGhlIHZhbHVlLCB3aGV0aGVyIGl0cyBhIG51bWJlciwgc3RyaW5nIG9yIGZ1bmN0aW9uLlxuICAgIFx0SWYgYSBudW1iZXIsIHJldHVybi5cbiAgICBcdElmIGEgc3RyaW5nLCBpdCdzIGEgcmVsYXRpdmUgYXNzaWdubWVudCBzbyBjYWxjdWxhdGUgbmV3IHRhcmdldCBiYXNlZCBvbiBpdHMgY29udGVudHNcbiAgICBcdElmIGEgZnVuY3Rpb24sIGZpcmUgaXQgd2l0aCBhY3Rpb24uZGF0YSBhbmQgY3VycmVudCB2YWx1ZSBhcyBhcmd1bWVudHNcbiAgICBcdFxuICAgIFx0QHBhcmFtIFtudW1iZXIvc3RyaW5nL2Z1bmN0aW9uXTogQ3VycmVudCB2YWx1ZVxuICAgIFx0QHBhcmFtIFtvYmplY3RdOiBEYXRhIG9mIHBhcmVudCBhY3Rpb25cbiAgICBcdEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuXHQqL1xuXHRwYXJzZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZGF0YSwgY3VycmVudCkge1xuXHQgICAgcmV0dXJuICh1dGlscy5pc0Z1bmModmFsdWUpKSA/IHZhbHVlKGRhdGEsIGN1cnJlbnQpIDogdmFsdWU7XG5cdH0sXG5cdFxuXHQvKlxuICAgIFx0VmFsdWUgb2JqZWN0XG4gICAgXHRcbiAgICBcdE9uIGluaXQsIHJ1biB1cGRhdGUgd2l0aCBpc05ld1ZhbHVlID0gdHJ1ZVxuICAgIFx0XG4gICAgXHRAcGFyYW0gW251bWJlci9zdHJpbmcvZnVuY3Rpb24vb2JqZWN0XTogTmV3IHZhbHVlXG4gICAgXHRAcGFyYW0gW0FjaXRvbl06IFBhcmVudCBhY3Rpb25cblx0Ki9cblx0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGFjdGlvbikge1xuXHRcdHRoaXMudXBkYXRlKHZhbHVlLCBhY3Rpb24sIHRydWUpO1xuXHR9LFxuXHRkZWZhdWx0cyA9IHtcblx0ICAgIC8vIEFjdHVhbCB2YWx1ZVxuICAgIFx0Y3VycmVudDogMCxcbiAgICBcdHN0YXJ0OiAwLFxuXHRcbiAgICBcdC8vIEN1cnJlbnQgcmFuZ2UgZm9yIHZhbHVlXG4gICAgXHRmcm9tOiAwLFxuICAgIFx0dG86IDEsXG5cdFxuICAgIFx0Ly8gTWF4aW11bSByYW5nZSBmb3IgdmFsdWVcbiAgICBcdG1pbjogMCxcbiAgICBcdG1heDogMSxcbiAgICBcdFxuICAgIFx0Ly8gU3BlZWQgZm9yIC5tb3ZlKCksIGluIHhwc1xuICAgIFx0c3BlZWQ6IDAsXG4gICAgXHRmcmljdGlvbjogMCxcbiAgICBcdHRocnVzdDogMCxcbiAgICBcdFxuICAgIFx0Ly8gT3B0aW9uc1xuICAgIFx0ZHVyYXRpb246IDQwMCxcbiAgICBcdGRlbGF5OiAwLFxuICAgIFx0ZWFzZTogJ2Vhc2UtaW4tb3V0JyxcbiAgICBcdGxpbms6IG51bGwsIC8vIHVzZSB0aGUgcHJvZ3Jlc3Mgb2YgdGhpcyB2YWx1ZVxuICAgIFx0bWF0aDogbnVsbCxcbiAgICBcdHN0ZXBzOiAwLFxuICAgIFx0XG4gICAgXHQvLyBBbXAgZm9yIGluc2lkZSBhbmQgb3V0c2lkZSByYW5nZSAoaWUgdmFsdWUgKiBhbXApXG4gICAgXHRhbXA6IDAsXG4gICAgXHRlc2NhcGVBbXA6IDBcblx0fTtcblxuXHRcbi8qXG5cdFVwZGF0ZSB0aGUgdmFsdWUgcHJvcGVydGllc1xuXHRcblx0QHBhcmFtIFtvYmplY3QgfHwgbnVtYmVyXTogVXNlci1kZWZpbmVkIHZhbHVlXG5cdEBwYXJhbSBbb2JqZWN0XTogQWN0aW9uIHRoaXMgdmFsdWUgYmVsb25ncyB0b1xuXHRAcGFyYW0gW2Jvb2xlYW5dIChvcHRpb25hbCk6IElzIHRoaXMgYSBuZXcgdmFsdWUgY29uc3RydWN0XG4qL1xuVmFsdWUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgYWN0aW9uLCBpc05ld1ZhbHVlKSB7XG5cdHZhciBkYXRhID0gKGFjdGlvbikgPyBhY3Rpb24uZGF0YSA6IHt9O1xuXG5cdC8vIElmIHZhbHVlIGlzIGp1c3QgYSBudW1iZXJcblx0aWYgKHV0aWxzLmlzTnVtKHZhbHVlKSB8fCB1dGlscy5pc0Z1bmModmFsdWUpIHx8IHV0aWxzLmlzU3RyaW5nKHZhbHVlKSkge1xuXHQgICAgdGhpcy5jdXJyZW50ID0gKGlzTmV3VmFsdWUpID8gMCA6IHRoaXMuY3VycmVudDtcblx0XHR0aGlzLnRvID0gcGFyc2UodmFsdWUsIGRhdGEsIHRoaXMuY3VycmVudCk7XG5cblx0Ly8gT3IgaWYgaXQgaXMgYW4gb2JqZWN0XG5cdH0gZWxzZSB7XG5cdCAgICBcblx0ICAgIC8vIElmIGEgc3RhcnQgdmFsdWUgZXhpc3RzIGFuZCB0aGlzIGlzIGEgbmV3IFZhbHVlLCBhc3NpZ24gaXQgYXMgY3VycmVudFxuXHQgICAgaWYgKGlzTmV3VmFsdWUgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoJ3N0YXJ0JykpIHtcbiAgICBcdCAgICB0aGlzLmN1cnJlbnQgPSBwYXJzZSh2YWx1ZS5zdGFydCwgZGF0YSk7XG5cdCAgICBcblx0ICAgIC8vIE9yIHdlJ3ZlIGV4cGxpY2l0bHkgc2V0IGN1cnJlbnRcblx0ICAgIH0gZWxzZSBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoJ2N1cnJlbnQnKSkge1xuICAgIFx0ICAgIHRoaXMuY3VycmVudCA9IHBhcnNlKHZhbHVlLmN1cnJlbnQsIGRhdGEpO1xuXHQgICAgXG5cdCAgICAvLyBPciB3ZSd2ZSBub3QgZGVmaW5lZCBjdXJyZW50IGFuZCB0aGlzIGlzIGEgbmV3IHZhbHVlXG5cdCAgICB9IGVsc2UgaWYgKGlzTmV3VmFsdWUpIHtcbiAgICBcdCAgICB0aGlzLmN1cnJlbnQgPSBkZWZhdWx0cy5jdXJyZW50O1xuXHQgICAgfVxuXHQgICAgXG5cdCAgICB0aGlzLnRvID0gcGFyc2UodmFsdWUudG8sIGRhdGEsIHRoaXMuY3VycmVudCk7XG5cdH1cblx0XG4gICAgLy8gTG9vcCB0aHJvdWdoIHBlcm1pdHRlZCB2YWx1ZXNcbiAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdHMpIHtcblx0ICAgIGlmIChkZWZhdWx0cy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICFpc1ByaW9yaXR5KGtleSkpIHtcblxuXHRcdCAgICAvLyBJZiB1c2VyIGhhcyBzdWJtaXR0ZWQgYSBwcm9wZXJ0eVxuXHRcdCAgICBpZiAodXRpbHMuaXNPYmoodmFsdWUpICYmIHZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBwYXJzZSh2YWx1ZVtrZXldLCBkYXRhLCB0aGlzLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gT3IgdGhlcmUncyBhIGRlZmF1bHQgc2V0IG9uIHRoZSBhY3Rpb25cblx0XHQgICAgfSBlbHNlIGlmICh1dGlscy5pc09iaihhY3Rpb24pICYmIGFjdGlvbi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gcGFyc2UoYWN0aW9uW2tleV0sIGRhdGEsIHRoaXMuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIGlmIHRoaXMgaXMgb3VyIGZpcnN0IHRpbWUgKGhvbmVzdCBqdWRnZSksIHNldCBhcyB0aGUgZGVmYXVsdC5cblx0XHQgICAgfSBlbHNlIGlmIChpc05ld1ZhbHVlKSB7XG4gICAgXHRcdCAgICB0aGlzW2tleV0gPSBkZWZhdWx0c1trZXldO1xuXHRcdCAgICB9XG5cdFx0ICAgIFxuXHQgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBBc3NpZ24gJ2Zyb20nIGFzIGN1cnJlbnRcbiAgICB0aGlzLmZyb20gPSB0aGlzLmN1cnJlbnQ7XG4gICAgXG4gICAgLy8gRmluYWxseSBjaGVjayBpZiB0byB3YXMgZ2l2ZW4gYXMgYSBzdHJpbmcsIGFuZCBmaWd1cmUgb3V0IHRoZSByZWxhdGl2ZSB2YWx1ZVxuICAgIGlmICh1dGlscy5pc1N0cmluZyh0aGlzLnRvKSkge1xuICAgICAgICB0aGlzLnRvID0gY2FsY1JlbGF0aXZlVmFsdWUodGhpcy50bywgdGhpcy5jdXJyZW50KTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZhbHVlOyIsIi8qXG4gICAgVmVsb2NpdHkgY2xhc3NcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBvZiB0cmF2ZWxcbiAgICBAcGFyYW0gW251bWJlcl06IFNwZWVkIGluIHBpeGVscyBwZXIgZnJhbWUgYWxvbmcgdGhhdCBhbmdsZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogWCBheGlzIHNwZWVkXG4gICAgQHBhcmFtIFtudW1iZXJdOiBZIGF4aXMgc3BlZWRcbiAgICBAcGFyYW0gW251bWJlcl06IFogYXhpcyBzcGVlZFxuICAgIEBwYXJhbSBbbnVtYmVyXTogU3BlZWQgYXJvdW5kIG9mZnNldCBjZW50ZXJcbiAgICBAcmV0dXJuIFtWZWxvY2l0eV1cbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIFZlbG9jaXR5ID0gZnVuY3Rpb24gKGFuZ2xlLCBzcGVlZCwgeFNwZWVkLCB5U3BlZWQsIHpTcGVlZCwgb3JiaXRhbFNwZWVkKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZSB8fCAwO1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQgfHwgMDtcbiAgICAgICAgdGhpcy54ID0geFNwZWVkIHx8IDA7XG4gICAgICAgIHRoaXMueSA9IHlTcGVlZCB8fCAwO1xuICAgICAgICB0aGlzLnogPSB6U3BlZWQgfHwgMDtcbiAgICAgICAgdGhpcy5vcmJpdGFsID0gb3JiaXRhbFNwZWVkIHx8IDA7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZWxvY2l0eTsiLCIvKlxuXHRBY3Rpb25NYW5hZ2VyXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBLRVkgPSByZXF1aXJlKCcuLi9vcHRzL2tleXMuanMnKSxcblx0UG9pbnRlclRyYWNrZXIgPSByZXF1aXJlKCcuL3BvaW50ZXJUcmFja2VyLmpzJyksXG5cdEFjdGlvbiA9IHJlcXVpcmUoJy4uL2JpdHMvYWN0aW9uLmpzJyksXG5cdHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbHMuanMnKSxcblx0QWN0aW9uTWFuYWdlciA9IGZ1bmN0aW9uICgpIHt9LFxuXHRhY3Rpb25NYW5hZ2VyLFxuXHRhbGxBY3Rpb25zID0gW10sXG5cdGFjdGl2ZVRva2VucyA9IFtdLFxuXHRkZWFjdGl2YXRlUXVldWUgPSBbXSxcblx0YmFzZUFjdGlvbnMgPSB7fTtcblxuQWN0aW9uTWFuYWdlci5wcm90b3R5cGUgPSB7XG5cdFxuXHQvKlxuXHRcdENyZWF0ZSBhY3Rpb25cblx0XHRcblx0XHRAcmV0dXJuIFtBY3Rpb25dXG5cdCovXG5cdGNyZWF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBhY3Rpb24gPSBuZXcgQWN0aW9uKCk7XG5cblx0XHR0aGlzLnJlZ2lzdGVyKGFjdGlvbik7XG5cblx0XHRyZXR1cm4gYWN0aW9uO1xuXHR9LFxuXHRcblx0Lypcblx0XHRDaGFuZ2UgYWN0aW9uXG5cdFx0XG5cdFx0QHBhcmFtIFtUb2tlbl06IFRva2VuIGZvciB0aGUgYWN0aW9uXG5cdFx0QHBhcmFtIFtvYmplY3RdOiBWYWx1ZSBwcm9wZXJ0aWVzXG5cdFx0QHBhcmFtIFtvYmplY3RdOiBBY3Rpb24gb3B0aW9uc1xuXHQqL1xuXHRjaGFuZ2U6IGZ1bmN0aW9uICh0b2tlbiwgY2hhbmdlcywgZSkge1xuXHRcdHZhciBhY3Rpb24gPSB0aGlzLmdldCh0b2tlbik7XG4gICAgICAgIFxuICAgICAgICBpZiAoY2hhbmdlcy5saW5rID09PSBLRVkuTElOSy5QT0lOVEVSKSB7XG5cdFx0XHRjaGFuZ2VzLnBvaW50ZXJPZmZzZXQgPSBQb2ludGVyVHJhY2tlci5zdGFydChlKTtcbiAgICAgICAgfVxuXHRcdFx0XG5cdFx0YWN0aW9uLnNldChjaGFuZ2VzKTtcblx0fSxcblx0XG5cdC8qXG5cdFx0RGVmaW5lIGEgYmFzZSBhY3Rpb25cblx0XHRcblx0XHRDYW4gYmUgY2FsbGVkIGxhdGVyIHdpdGggLnBsYXkoKVxuXHRcdFxuXHRcdEBwYXJhbSBbb2JqZWN0XVxuXHQqL1xuXHRkZWZpbmU6IGZ1bmN0aW9uIChhY3Rpb25zKSB7XG5cdFx0dmFyIGtleSxcblx0XHRcdGNoYWluLFxuXHRcdFx0YmFzZUFjdGlvbiA9IHt9O1xuXG5cdFx0Zm9yIChrZXkgaW4gYWN0aW9ucykge1xuXHRcdFx0aWYgKGFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHRpZiAoYmFzZUFjdGlvbnNba2V5XSAmJiAhYWN0aW9uc1trZXldLmZvcmNlT3ZlcnJpZGUpIHtcblx0XHRcdFx0XHR0aHJvdyBLRVkuRVJST1IuQUNUSU9OX0VYSVNUUztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjaGFpbiA9IGtleS5zcGxpdCgnLicpO1xuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBpbmhlcml0ZW5jZSBjaGFpbiwgbWVyZ2Vcblx0XHRcdFx0XHQvLyBUT0RPOiBtdWx0aWxheWVyZWQgaW5oZXJpdGVuY2U/XG5cdFx0XHRcdFx0aWYgKGNoYWluLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0XHRcdGlmIChiYXNlQWN0aW9uc1tjaGFpblswXV0pIHtcblx0XHRcdFx0XHRcdFx0YmFzZUFjdGlvbnNba2V5XSA9IHV0aWxzLm1lcmdlKGJhc2VBY3Rpb25zW2NoYWluWzBdXSwgYWN0aW9uc1trZXldKTtcblx0XHRcdFx0XHRcdC8vIGlmIHdlIGNhbid0IGZpbmQgYWN0aW9uXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aHJvdyBLRVkuRVJST1IuTk9fQUNUSU9OO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIEVsc2UgZGlyZWN0bHkgY29weVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRiYXNlQWN0aW9uc1trZXldID0gYWN0aW9uc1trZXldO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0XG5cdFxuXHQvKlxuICAgIFx0Q3JlYXRlIGJhc2UgYWN0aW9uXG4gICAgXHRcbiAgICBcdEBwYXJhbSBbc3RyaW5nIHx8IGFycmF5IHx8IG9iamVjdF06XG4gICAgXHQgICAgU3RyaW5nOiBOYW1lIG9yIHNwYWNlLWRlbGltaXRlZCBwbGF5bGlzdCBvZiBhY3Rpb25zXG4gICAgXHQgICAgQXJyYXk6IFBsYXlsaXN0IG9mIGFjdGlvbnNcbiAgICBcdCAgICBPYmplY3Q6IFJhdyBhY3Rpb25cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBBY3Rpb24gb3ZlcnJpZGVcblx0Ki9cblx0Y3JlYXRlQmFzZTogZnVuY3Rpb24gKGRlZnMsIG92ZXJyaWRlKSB7XG4gICAgXHR2YXIgYmFzZUFjdGlvbiA9IHt9LFxuICAgIFx0ICAgIGFjdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBzdHJhaWdodCBhY3Rpb25cbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqKGRlZnMpKSB7XG4gICAgICAgICAgICBiYXNlQWN0aW9uID0gZGVmcztcbiAgICAgICAgICAgIGJhc2VBY3Rpb24ucGxheWxpc3QgPSBbXTtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyBUaGVzZSBhcmUgcHJldmlvdXNseSBkZWZpbmVkIGFjdGlvbnNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIENvbW1hLWRlbGltaXRlZCBzdHJpbmcgb3Igc2luZ2xlIGFjdGlvbiBuYW1lXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZGVmcykpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25MaXN0ID0gZGVmcy5zcGxpdChcIiBcIik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBBcnJheSBvZiBhY3Rpb24gbmFtZXNcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uTGlzdCA9IGRlZnM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJhc2VBY3Rpb24gPSB0aGlzLmdldERlZmluZWQoYWN0aW9uTGlzdFswXSk7XG4gICAgICAgICAgICBiYXNlQWN0aW9uLnBsYXlsaXN0ID0gYWN0aW9uTGlzdDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQXBwbHkgb3ZlcnJpZGVzIGlmIHByZXNlbnRcbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqKG92ZXJyaWRlKSkge1xuICAgICAgICAgICAgYmFzZUFjdGlvbiA9IHRoaXMubWVyZ2UoYmFzZUFjdGlvbiwgb3ZlcnJpZGUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYmFzZUFjdGlvbjtcblx0fSxcblx0XG5cdFxuXHQvKlxuICAgIFx0R2V0IGRlZmluZWQgYWN0aW9uXG4gICAgXHRcbiAgICBcdEBwYXJhbSBbc3RyaW5nXTogVGhlIG5hbWUgb2YgdGhlIHByZWRlZmluZWQgYWN0aW9uXG5cdCovXG5cdGdldERlZmluZWQ6IGZ1bmN0aW9uIChrZXkpIHtcblx0ICAgIHJldHVybiB0aGlzLmNvcHkoYmFzZUFjdGlvbnNba2V5XSk7XG5cdH0sXG5cdFxuXHQvKlxuICAgIFx0Q29weSBhbiBhY3Rpb25cblx0Ki9cblx0Y29weTogZnVuY3Rpb24gKGFjdGlvbikge1xuXHQgICAgdmFyIG5ld0FjdGlvbiA9IHt9O1xuXG4gICAgXHRmb3IgKHZhciBrZXkgaW4gYWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAndmFsdWVzJykge1xuICAgICAgICAgICAgICAgICAgICBuZXdBY3Rpb25ba2V5XSA9IGFjdGlvbltrZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0FjdGlvbi52YWx1ZXMgPSB1dGlscy5jb3B5KGFjdGlvbi52YWx1ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIFxuXHQgICAgcmV0dXJuIG5ld0FjdGlvbjtcblx0fSxcblx0XG5cdC8qXG4gICAgXHRNZXJnZSBhbiBhY3Rpb25cblx0Ki9cblx0bWVyZ2U6IGZ1bmN0aW9uIChhY3Rpb24sIG92ZXJyaWRlKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvdmVycmlkZSkge1xuICAgICAgICAgICAgaWYgKG92ZXJyaWRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAndmFsdWVzJykge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25ba2V5XSA9IG92ZXJyaWRlW2tleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnZhbHVlcyA9IHV0aWxzLm1lcmdlKGFjdGlvbi52YWx1ZXMsIG92ZXJyaWRlLnZhbHVlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYWN0aW9uO1xuXHR9LFxuXHRcblx0XG5cdC8qXG5cdFx0UmVnaXN0ZXIgYWN0aW9uXG5cdFx0XG5cdFx0QHBhcmFtIFtBY3Rpb25dOiBBZGQgYWN0aW9uIHRvIHN0b3JhZ2UgYXJyYXlcblx0Ki9cblx0cmVnaXN0ZXI6IGZ1bmN0aW9uIChhY3Rpb24pIHtcblx0XHRhbGxBY3Rpb25zW2FjdGlvbi50b2tlbl0gPSBhY3Rpb247XG5cdH0sXG5cdFxuXHRcblx0Lypcblx0XHRHZXQgdGhlIHNwZWNpZmllZCBhY3Rpb25cblx0XHRcblx0XHRAcGFyYW0gW1Rva2VuXTogVG9rZW5cblx0XHRAcmV0dXJuIFtBY3Rpb24gfHwgYm9vbGVhbl06IEFjdGlvbiB3aXRoIHNwZWNpZmllZCB0b2tlbiwgZmFsc2UgaWYgbm9uZSBmb3VuZFxuXHQqL1xuXHRnZXQ6IGZ1bmN0aW9uICh0b2tlbikge1xuXHRcdHJldHVybiBhbGxBY3Rpb25zW3Rva2VuXSB8fCBmYWxzZTtcblx0fSxcblx0XG5cdFxuXHQvKlxuICAgIFx0R2V0IHRva2VucyBvZiBhbGwgYWN0aXZlIGFjdGlvbnNcbiAgICBcdFxuICAgIFx0QHJldHVybiBbYXJyYXldOiBBcnJheSBvZiBhY3RpdmUgdG9rZW5zXG5cdCovXG5cdGdldEFjdGl2ZVRva2VuczogZnVuY3Rpb24gKCkge1xuICAgIFx0cmV0dXJuIGFjdGl2ZVRva2Vucztcblx0fSxcblx0XG5cdFxuXHQvKlxuICAgIFx0QWN0aXZhdGUgc3BlY2lmaWVkIGFjdGlvblxuICAgIFx0XG4gICAgXHRBY3RpdmF0ZXMgYWN0aW9uIGFuZCBhZGRzIHRvIGFjdGl2ZVRva2VucyBhcnJheVxuICAgIFx0XG4gICAgXHRAcGFyYW0gW1Rva2VuXTogVG9rZW5cblx0Ki9cblx0YWN0aXZhdGU6IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIFx0dmFyIGFjdGlvbiA9IHRoaXMuZ2V0KHRva2VuKSxcblx0ICAgICAgICBpbmRleCA9IGFjdGl2ZVRva2Vucy5pbmRleE9mKHRva2VuKSxcblx0ICAgICAgICBkZWFjdGl2YXRlSW5kZXggPSBkZWFjdGl2YXRlUXVldWUuaW5kZXhPZih0b2tlbik7XG4gICAgXHRcbiAgICBcdGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGFjdGl2ZVRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIGRlYWN0aXZhdGUgcXVldWUgaWYgaXQncyBiZWVuIHBsYWNlZCB0aGVyZVxuICAgICAgICBpZiAoZGVhY3RpdmF0ZUluZGV4ID49IDApIHtcbiAgICAgICAgICAgIGRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UoZGVhY3RpdmF0ZUluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIFx0XG4gICAgXHRhY3Rpb24uc3RhcnQoKTtcblx0fSxcblx0XG5cdFxuXHQvKlxuICAgIFx0RGVhY3RpdmF0ZSBzcGVjaWZpZWQgYWN0aW9uXG4gICAgXHRcbiAgICBcdEFjdGl2YXRlcyBhY3Rpb24gYW5kIHJlbW92ZXMgZnJvbSBhY3RpdmVUb2tlbnMgYXJyYXlcbiAgICBcdFxuICAgIFx0QHBhcmFtIFtUb2tlbl06IFRva2VuXG5cdCovXG5cdGRlYWN0aXZhdGU6IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIFx0dmFyIGFjdGlvbiA9IHRoaXMuZ2V0KHRva2VuKSxcblx0ICAgICAgICBpbmRleCA9IGFjdGl2ZVRva2Vucy5pbmRleE9mKHRva2VuKTtcblxuXHQgICAgYWN0aW9uLnN0b3AoKTtcblx0ICAgIFxuICAgIFx0aWYgKGluZGV4ID4gLTEpIHtcbiAgICBcdCAgICBhY3RpdmVUb2tlbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBcdH1cblx0fSxcblx0XG5cdC8qXG4gICAgXHRJcyBhY3Rpb24gYWN0aXZlXG5cdCovXG5cdGlzQWN0aXZlOiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICBcdHJldHVybiAoYWN0aXZlVG9rZW5zLmluZGV4T2YodG9rZW4pID4gLTEpO1xuXHR9LFxuXHRcblx0LypcbiAgICBcdFB1cmdlIGRlYWN0aXZhdGUgcXVldWVcbiAgICBcdFxuICAgIFx0TG9vcHMgdGhyb3VnaCB0aGUgZGVhY3RpdmF0ZSBxdWV1ZSBhbmQgZGVjaWRlcyB3aGV0aGVyIHRvIGRlYWN0aXZhdGVcbiAgICBcdG9yIHN3YXAgYWN0aW9uIHBhcmFtZXRlcnMgd2l0aCB0aGUgbmV4dCBpbiB0aGUgYWN0aW9uJ3MgcGxheUxpc3RcbiAgICBcdFxuICAgIFx0V2UgdXNlIGEgZGVhY3RpdmF0ZSBxdWV1ZSByYXRoZXIgdGhhbiBkZWFjdGl2YXRlIGFzIHNvb24gYXMgd2UgcHJvY2VzcyBpdFxuICAgIFx0YmVjYXVzZSBpZiB3ZSBtYW5pcHVsYXRlIHRoZSBsaXN0IG9mIGFjdGl2YXRlZCBBY3Rpb25zIHdoaWxlIGl0J3MgYmVpbmdcbiAgICBcdGxvb3BlZCB0aHJvdWdoLCB3ZWxsIHlvdSBjYW4gb25seSBpbWFnaW5lIHRoZSBmdW4gdGhhdCBjYXVzZXMuXG5cdCovXG5cdHB1cmdlOiBmdW5jdGlvbiAoKSB7XG5cdCAgICB2YXIgcXVldWVMZW5ndGggPSBkZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXHQgICAgXG5cdCAgICAvLyBSdW4gdGhyb3VnaCBhbGwgcXVldWVkIGFjdGlvbnMgYW5kIGRlY2lkZSB3aGF0IHRvIGRvIG5leHRcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWVMZW5ndGg7ICsraSkge1xuXHQgICAgICAgIGlmICh1dGlscy5pc051bShkZWFjdGl2YXRlUXVldWVbaV0pKSB7XG4gICAgXHQgICAgICAgIHRoaXMuZGVjaWRlTmV4dChkZWFjdGl2YXRlUXVldWVbaV0pO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblxuICAgICAgICAvLyBDbGVhciBkZWFjdGl2YXRlUXVldWVcblx0XHRkZWFjdGl2YXRlUXVldWUgPSBbXTtcblx0fSxcblx0XG5cdC8qXG4gICAgXHREZWNpZGUgd2hhdCB0byBkbyB3aXRoIGFuIGFjdGlvblxuICAgIFx0XG4gICAgXHRUYWtlcyBhbiBhY3Rpb24gYW5kIGRlY2lkZXMsIGJhc2VkIG9uIGl0cyBwbGF5bGlzdCBhbmQgbG9vcCBwcm9wZXJ0aWVzLCBcbiAgICBcdHdoYXQgdG8gZG8gd2l0aCBpdCBuZXh0LlxuICAgIFx0XG4gICAgXHRAcGFyYW0gW1Rva2VuXTogQWN0aW9uIHRva2VuXG5cdCovXG5cdGRlY2lkZU5leHQ6IGZ1bmN0aW9uICh0b2tlbikge1xuXHRcdHZhciBuZXh0cyA9IFsnbG9vcCcsICd5b3lvJywgJ3BsYXlOZXh0J10sXG5cdFx0XHRudW0gPSBuZXh0cy5sZW5ndGgsXG5cdFx0XHRoYXNGdXR1cmUgPSBmYWxzZTtcblx0XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBudW07ICsraSkge1xuXHRcdFx0aWYgKHRoaXNbbmV4dHNbaV1dKHRva2VuKSkge1xuXHRcdFx0XHRoYXNGdXR1cmUgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XHRcblx0XG4gICAgXHRpZiAoIWhhc0Z1dHVyZSkge1xuICAgICAgICBcdHRoaXMuZGVhY3RpdmF0ZSh0b2tlbik7XG4gICAgXHR9XG5cdH0sXG5cdFxuXHRcblx0LypcbiAgICBcdFBsYXkgbmV4dCBpbiBwbGF5bGlzdCwgaWYgZXhpc3RzXG4gICAgXHRcbiAgICBcdEBwYXJhbSBbVG9rZW5dOiBBY3Rpb24gdG9rZW5cbiAgICBcdEByZXR1cm4gW2Jvb2xlYW5dOiBTdWNjZXNzXG5cdCovXG5cdHBsYXlOZXh0OiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICBcdHZhciBoYXNQbGF5ZWROZXh0ID0gZmFsc2UsXG4gICAgXHQgICAgYWN0aW9uID0gdGhpcy5nZXQodG9rZW4pLFxuICAgIFx0ICAgIHBsYXlsaXN0TGVuZ3RoID0gYWN0aW9uLnBsYXlsaXN0ID8gYWN0aW9uLnBsYXlsaXN0Lmxlbmd0aCA6IDAsXG4gICAgXHQgICAgcGxheWhlYWQgPSBhY3Rpb24ucGxheWhlYWQsXG4gICAgXHQgICAgbmV4dEFjdGlvbjtcblxuICAgICAgICAvLyBDaGVjayB3ZSBoYXZlIGEgcGxheWxpc3QgYW5kIHRoYXQgdGhpcyBpcyBhbiBhbmltYXRpb25cbiAgICAgICAgLy8gVE9ETzogTWF5YmUgbWFrZSBhIHNldCBvZiBwcm9wZXJ0aWVzIG9uIHRoZSBydWJpeCB0aGF0IHNheXMgYWxsb3dQbGF5bGlzdDogdHJ1ZVxuICAgIFx0aWYgKHBsYXlsaXN0TGVuZ3RoICYmIGFjdGlvbi5saW5rID09PSBLRVkuTElOSy5USU1FKSB7XG4gICAgXHQgICAgKytwbGF5aGVhZDtcblxuICAgIFx0ICAgIGlmIChwbGF5aGVhZCA8IHBsYXlsaXN0TGVuZ3RoKSB7XG4gICAgXHQgICAgICAgIG5leHRBY3Rpb24gPSB0aGlzLmdldERlZmluZWQoYWN0aW9uLnBsYXlsaXN0W3BsYXloZWFkXSk7XG4gICAgXHQgICAgICAgIG5leHRBY3Rpb24ucGxheWhlYWQgPSBwbGF5aGVhZDtcbiAgICBcdCAgICAgICAgXG4gICAgICAgIFx0ICAgIHRoaXMuY2hhbmdlKHRva2VuLCBuZXh0QWN0aW9uKTtcbiAgICAgICAgXHQgICAgdGhpcy5hY3RpdmF0ZSh0b2tlbik7XG5cbiAgICAgICAgXHQgICAgaGFzUGxheWVkTmV4dCA9IHRydWU7XG4gICAgXHQgICAgfVxuICAgIFx0fVxuXG4gICAgXHRyZXR1cm4gaGFzUGxheWVkTmV4dDtcblx0fSxcblx0XG5cdFxuXHQvKlxuICAgIFx0TG9vcCBjdXJyZW50IGFjdGlvbiwgaWYgd2UncmUgdGhhdCB3YXkgaW5jbGluZWRcbiAgICBcdFxuICAgIFx0QHBhcmFtIFtUb2tlbl06IEFjdGlvbiB0b2tlblxuICAgIFx0QHJldHVybiBbYm9vbGVhbl06IFN1Y2Nlc3Ncblx0Ki9cblx0bG9vcDogZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgXHR2YXIgaGFzTG9vcGVkID0gZmFsc2UsXG4gICAgXHQgICAgYWN0aW9uID0gdGhpcy5nZXQodG9rZW4pLFxuICAgIFx0ICAgIGxvb3BGb3JldmVyID0gKGFjdGlvbi5sb29wID09PSB0cnVlKTtcblxuICAgICAgICBpZiAoYWN0aW9uLmxpbmsgPT09IEtFWS5MSU5LLlRJTUUgJiYgKGxvb3BGb3JldmVyIHx8IHV0aWxzLmlzTnVtKGFjdGlvbi5sb29wKSkpIHtcbiAgICAgICAgICAgICsrYWN0aW9uLmxvb3BDb3VudDtcbiAgICAgICAgICAgIGlmICgobG9vcEZvcmV2ZXIgfHwgdXRpbHMuaXNOdW0oYWN0aW9uLmxvb3ApICYmIGFjdGlvbi5sb29wQ291bnQgPD0gYWN0aW9uLmxvb3ApKSB7XG5cdCAgICAgICAgICAgIGFjdGlvbi5yZXNldFZhbHVlcygpO1xuXHQgICAgICAgICAgICB0aGlzLmFjdGl2YXRlKHRva2VuKTtcblx0ICAgICAgICAgICAgaGFzTG9vcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgXHRyZXR1cm4gaGFzTG9vcGVkO1xuXHR9LFxuXHRcblx0XG5cdHlveW86IGZ1bmN0aW9uICh0b2tlbikge1xuXHRcdHZhciBoYXNZb3lvZWQgPSBmYWxzZSxcblx0XHRcdGFjdGlvbiA9IHRoaXMuZ2V0KHRva2VuKSxcblx0XHRcdHlveW9Gb3JldmVyID0gKGFjdGlvbi55b3lvID09PSB0cnVlKTtcblxuXHRcdGlmIChhY3Rpb24ubGluayA9PT0gS0VZLkxJTksuVElNRSAmJiAoeW95b0ZvcmV2ZXIgfHwgdXRpbHMuaXNOdW0oYWN0aW9uLnlveW8pKSkge1xuXHRcdFx0KythY3Rpb24ueW95b0NvdW50O1xuXHRcdFx0aWYgKHlveW9Gb3JldmVyIHx8ICh1dGlscy5pc051bShhY3Rpb24ueW95bykgJiYgYWN0aW9uLnlveW9Db3VudCA8PSBhY3Rpb24ueW95bykpIHtcblx0XHRcdFx0YWN0aW9uLnJldmVyc2VWYWx1ZXMoKTtcblx0XHRcdFx0dGhpcy5hY3RpdmF0ZSh0b2tlbik7XG5cdFx0XHRcdGhhc1lveW9lZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGhhc1lveW9lZDtcblx0fSxcblx0XG5cdFxuXHQvKlxuICAgIFx0QWRkIHRva2VuIHRvIHRoZSBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgXHRcbiAgICBcdFF1ZXVlIGdldHMgcHJvY2Vzc2VkIGF0IHRoZSBlbmQgb2YgZXZlcnkgZnJhbWVcbiAgICBcdFxuICAgIFx0QHBhcmFtIFtUb2tlbl06IFRva2VuIG9mIGFjdGlvblxuXHQqL1xuXHRxdWV1ZURlYWN0aXZhdGU6IGZ1bmN0aW9uICh0b2tlbikge1xuXHRcdGRlYWN0aXZhdGVRdWV1ZS5wdXNoKHRva2VuKTtcblx0fSxcblx0XG5cdFxuXHQvKlxuICAgIFx0R2V0IGRhdGEgZnJvbSBvdXIgYWN0aW9uJ3MgZGF0YSBvYmplY3RcbiAgICBcdFxuICAgIFx0QHBhcmFtIFtUb2tlbl06IEFjdGlvbiB0b2tlblxuICAgIFx0QHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgZGF0YSBwb2ludFxuXHQqL1xuXHRnZXREYXRhOiBmdW5jdGlvbiAodG9rZW4sIGtleSkge1xuXHQgICAgdmFyIGFjdGlvbiA9IHRoaXMuZ2V0KHRva2VuKTtcbiAgICBcdFxuICAgIFx0cmV0dXJuIGFjdGlvbi5kYXRhID8gYWN0aW9uLmRhdGFba2V5XSA6IHVuZGVmaW5lZDtcblx0fSxcblx0XG5cdFxuXHQvKlxuICAgIFx0U2V0IGRhdGEgcG9pbnQgdG8gYWN0aW9uJ3MgZGF0YSBvYmplY3RcbiAgICBcdFxuICAgIFx0QHBhcmFtIFtUb2tlbl06IEFjdGlvbiB0b2tlblxuICAgIFx0QHBhcmFtIFtvYmplY3RdOiBEYXRhIHRvIHNhdmUgdG8gYWN0aW9uXG5cdCovXG5cdHNldERhdGE6IGZ1bmN0aW9uICh0b2tlbiwgZGF0YSkge1xuICAgIFx0dmFyIGFjdGlvbiA9IHRoaXMuZ2V0KHRva2VuKTtcblxuICAgIFx0Zm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgXHRpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBcdGFjdGlvbi5kYXRhW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgICAgICBcdFxuICAgICAgICAgICAgXHRpZiAoa2V5ID09PSBLRVkuSlFVRVJZX0VMRU1FTlQpIHtcbiAgICAgICAgICAgICAgICBcdGFjdGlvbi5kYXRhID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgXHR9XG4gICAgICAgIFx0fVxuICAgIFx0fVxuXHR9XG59O1xuXG5hY3Rpb25NYW5hZ2VyID0gbmV3IEFjdGlvbk1hbmFnZXIoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhY3Rpb25NYW5hZ2VyOyIsIi8qXG4gICAgQ2hyb25vc1xuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhbGMuanMnKSxcblx0dXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy91dGlscy5qcycpLFxuICAgIEFjdGlvbk1hbmFnZXIgPSByZXF1aXJlKCcuL2FjdGlvbk1hbmFnZXIuanMnKSxcbiAgICBQb2ludGVyVHJhY2tlciA9IHJlcXVpcmUoJy4vcG9pbnRlclRyYWNrZXIuanMnKSxcbiAgICBQcm9jZXNzID0gcmVxdWlyZSgnLi9wcm9jZXNzLmpzJyksXG4gICAgQ2hyb25vcyA9IGZ1bmN0aW9uICgpIHt9LFxuICAgIGNocm9ub3MsXG4gICAgcHJldkZyYW1lVGltZSxcbiAgICBjdXJyZW50VGltZSxcbiAgICBmcHMgPSA2MCxcbiAgICBpc1J1bm5pbmcgPSBmYWxzZTsgLy8gaXMgYW5pbWF0aW9uIGxvb3AgcnVubmluZz8gLSBwcmV2ZW50cyBtdWx0aXBsZSByQUYgbG9vcHMgZnJvbSBydW5uaW5nXG4gICAgXG5DaHJvbm9zLnByb3RvdHlwZSA9IHtcblxuICAgIC8qXG4gICAgICAgIFN0YXJ0IGNocm9ub3MgaWYgbm90IGFscmVhZHkgcnVubmluZ1xuICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZyYW1lKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0b3AgY2hyb25vc1xuICAgICovXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgICB9LFxuICAgIFxuICAgIFxuICAgIC8qXG4gICAgICAgIEZyYW1lXG4gICAgICAgIFxuICAgICAgICBDaGVjayBpZiB0aGVyZSBhcmUgYWN0aXZlIGFjdGlvbnMgdG8gcHJvY2VzcywgdGhlbiBjYWxsYmFja1xuICAgICovXG4gICAgZnJhbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgYWN0aXZlQWN0aW9uVG9rZW5zID0gQWN0aW9uTWFuYWdlci5nZXRBY3RpdmVUb2tlbnMoKTtcblxuICAgICAgICBpZiAoYWN0aXZlQWN0aW9uVG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlQWN0aW9uVG9rZW5zID0gQWN0aW9uTWFuYWdlci5nZXRBY3RpdmVUb2tlbnMoKTsgLy8gcmVjaGVjayBpbmNhc2Ugc3R1ZmYgaGFzIGJlZW4gZGVhY3RpdmF0ZWQgc2luY2VcbiAgICBcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlQWN0aW9uVG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIFx0c2VsZi51cGRhdGVUaW1lKCk7XG4gICAgICAgICAgICAgICAgXHRQb2ludGVyVHJhY2tlci5mcmFtZSgpO1xuICAgICAgICAgICAgICAgIFx0UHJvY2Vzcy5hY3Rpb25zKGFjdGl2ZUFjdGlvblRva2VucywgY3VycmVudFRpbWUsIGZwcyk7XG4gICAgICAgICAgICAgICAgICAgIEFjdGlvbk1hbmFnZXIucHVyZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5mcmFtZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc3RvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIHVwZGF0ZVRpbWU6IGZ1bmN0aW9uICgpIHtcbiAgICBcdC8vcHJldkZyYW1lVGltZSA9IGN1cnJlbnRUaW1lO1xuICAgIFx0Y3VycmVudFRpbWUgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuICAgIFx0Ly9mcHMgPSAxMDAwIC8gY2FsYy5kaWZmZXJlbmNlKHByZXZGcmFtZVRpbWUsIGN1cnJlbnRUaW1lKTtcbiAgICB9XG59O1xuXG5jaHJvbm9zID0gbmV3IENocm9ub3MoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjaHJvbm9zOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgS0VZID0gcmVxdWlyZSgnLi4vb3B0cy9rZXlzLmpzJyksXG4gICAgY2FsbGJhY2tzID0ge30sXG4gICAgZXZlbnQgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgXG4gICAgYWRkTGlzdGVuZXJzOiBmdW5jdGlvbiAob25Nb3ZlLCBvbkVuZCwgaXNUb3VjaEV2ZW50KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBldmVudC5tb3ZlID0gaXNUb3VjaEV2ZW50ID8gS0VZLkVWRU5ULlRPVUNITU9WRSA6IEtFWS5FVkVOVC5NT1VTRU1PVkU7XG4gICAgICAgIGV2ZW50LmVuZCA9IGlzVG91Y2hFdmVudCA/IEtFWS5FVkVOVC5UT1VDSEVORCA6IEtFWS5FVkVOVC5NT1VTRVVQO1xuXG4gICAgICAgIGNhbGxiYWNrcy5vbk1vdmUgPSBvbk1vdmU7XG5cbiAgICAgICAgY2FsbGJhY2tzLm9uRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbkVuZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIG9uRW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudC5tb3ZlLCBjYWxsYmFja3Mub25Nb3ZlKTtcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudC5lbmQsIGNhbGxiYWNrcy5vbkVuZCk7XG4gICAgfSxcbiAgICBcbiAgICByZW1vdmVMaXN0ZW5lcnM6IGZ1bmN0aW9uICgpIHtcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudC5tb3ZlLCBjYWxsYmFja3Mub25Nb3ZlKTtcblx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudC5lbmQsIGNhbGxiYWNrcy5vbkVuZCk7XG4gICAgfVxuICAgIFxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vb3B0cy9kZWZhdWx0cy5qcycpLFxuICAgIC8qXG4gICAgICAgIEhpc3RvcnkgY29uc3RydWN0b3JcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbdmFyXTogVmFyaWFibGUgdG8gc3RvcmUgaW4gZmlyc3QgaGlzdG9yeSBzbG90XG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpOiBNYXhpbXVtIHNpemUgb2YgaGlzdG9yeVxuICAgICovXG4gICAgSGlzdG9yeSA9IGZ1bmN0aW9uIChvYmosIG1heCkge1xuICAgICAgICB0aGlzLm1heCA9IG1heCB8fCBkZWZhdWx0cy5oaXN0b3J5TWF4U2l6ZTtcbiAgICAgICAgdGhpcy5hZGQob2JqKTtcbiAgICB9O1xuICAgIFxuSGlzdG9yeS5wcm90b3R5cGUgPSB7XG5cbiAgICBlbnRyaWVzOiBbXSxcbiAgICBcbiAgICAvKlxuICAgICAgICBQdXNoIG5ldyB2YXIgdG8gaGlzdG9yeVxuICAgICAgICBcbiAgICAgICAgU2hpZnQgb3V0IG9sZGVzdCBlbnRyeSBpZiB3ZSd2ZSByZWFjaGVkIG1heGltdW0gY2FwYWNpdHlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbdmFyXTogVmFyaWFibGUgdG8gcHVzaCBpbnRvIGhpc3RvcnkuZW50cmllc1xuICAgICovXG4gICAgYWRkOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2l6ZSA9IHRoaXMuZ2V0U2l6ZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2gob2JqKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjdXJyZW50U2l6ZSA+PSB0aGlzLm1heCkge1xuICAgICAgICAgICAgdGhpcy5lbnRyaWVzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCB2YXJpYWJsZSBhdCBzcGVjaWZpZWQgaW5kZXhcblxuICAgICAgICBAcGFyYW0gW2ludF06IEluZGV4XG4gICAgICAgIEByZXR1cm4gW3Zhcl06IFZhciBmb3VuZCBhdCBzcGVjaWZpZWQgaW5kZXhcbiAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllc1tpXTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCB0aGUgbmV3ZXN0IGhpc3RvcnkgZW50cnlcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3Zhcl06IEVudHJ5IGZvdW5kIGF0IGluZGV4IHNpemUgLSAxXG4gICAgKi9cbiAgICBnZXRMYXRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRTaXplKCkgLSAxO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldChpbmRleCk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdGhlIHNlY29uZCBuZXdlc3QgaGlzdG9yeSBlbnRyeVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdmFyXTogRW50cnkgZm91bmQgYXQgaW5kZXggc2l6ZSAtIDJcbiAgICAqL1xuICAgIGdldFByZXZpb3VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0U2l6ZSgpIC0gMjtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoaW5kZXgpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGN1cnJlbnQgaGlzdG9yeSBzaXplXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBDdXJyZW50IGxlbmd0aCBvZiBlbnRyaWVzLmxlbmd0aFxuICAgICovXG4gICAgZ2V0U2l6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzLmxlbmd0aDtcbiAgICB9XG4gICAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhpc3Rvcnk7IiwiLypcblx0UG9pbnRlciB0cmFja2luZ1xuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhbGMuanMnKSxcblx0dXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy91dGlscy5qcycpLFxuXHRldmVudHMgPSByZXF1aXJlKCcuL2V2ZW50cy5qcycpLFxuXHRwb2ludGVyID0gcmVxdWlyZSgnLi4vYml0cy9wb2ludGVyLmpzJyksXG5cdGlzVHJhY2tpbmcgPSBmYWxzZSxcblx0aXNUb3VjaCA9IGZhbHNlLFxuXHRQb2ludGVyVHJhY2tlciA9IGZ1bmN0aW9uICgpIHt9LFxuXHRwb2ludGVyVHJhY2tlcjtcblxuUG9pbnRlclRyYWNrZXIucHJvdG90eXBlID0ge1xuXHRcblx0Lypcblx0XHRTdGFydCB0cmFja2luZyB0aGUgcG9pbnRlclxuXHRcdFxuXHRcdEBwYXJhbSBbZXZlbnRdOiBJbml0YWwgbW91c2UvdG91Y2ggZXZlbnRcblx0Ki9cblx0c3RhcnQ6IGZ1bmN0aW9uIChlKSB7XG5cdFx0dmFyIHBvaW50LFxuXHRcdFx0ZXZlbnQgPSB1dGlscy5nZXRBY3R1YWxFdmVudChlKTtcblx0XHRcdFxuXHRcdGlzVG91Y2ggPSB1dGlscy5pc1RvdWNoRXZlbnQoZXZlbnQpO1xuXHRcdHBvaW50ID0gdXRpbHMuY29udmVydEV2ZW50SW50b1BvaW50KGV2ZW50LCBpc1RvdWNoKTtcblxuXHRcdGlmICghaXNUcmFja2luZykge1xuXHRcdFx0aXNUcmFja2luZyA9IHRydWU7XG5cdFx0XHRcblx0XHRcdHBvaW50ZXIuaW5pdChwb2ludCwgaXNUb3VjaCwgdHJ1ZSk7XG5cdFx0XHRldmVudHMuYWRkTGlzdGVuZXJzKHRoaXMubW92ZSwgdGhpcy5zdG9wLCBpc1RvdWNoKTtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHBvaW50O1xuXHR9LFxuXHRcblx0XG5cdC8qXG5cdFx0VHJhY2sgYSBwb2ludGVyIG1vdmVtZW50XG5cdFx0XG5cdFx0QHBhcmFtIFtldmVudF06IE5ldyBtb3VzZS90b3VjaCBldmVudFxuXHQqL1xuXHRtb3ZlOiBmdW5jdGlvbiAoZSkge1xuXHRcdHZhciBldmVudCxcblx0XHRcdGlzVG91Y2gsXG5cdFx0XHRwb2ludDtcblxuXHRcdGlmIChpc1RyYWNraW5nKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudCA9IHV0aWxzLmdldEFjdHVhbEV2ZW50KGUpO1xuXHRcdFx0aXNUb3VjaCA9IHV0aWxzLmlzVG91Y2hFdmVudChldmVudCk7XG5cdFx0XHRwb2ludCA9IHV0aWxzLmNvbnZlcnRFdmVudEludG9Qb2ludChldmVudCwgaXNUb3VjaCk7XG5cblx0XHRcdGlmIChwb2ludGVyLmlzTW91c2UgJiYgcG9pbnRlci5pc0RyYWcgJiYgZS53aGljaCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLnN0b3AoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBvaW50ZXIubW92ZWQocG9pbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0fSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdG9wIHRyYWNraW5nIHRoZSBwb2ludGVyXG4gICAgKi9cblx0c3RvcDogZnVuY3Rpb24gKGUpIHtcblx0XHRldmVudHMucmVtb3ZlTGlzdGVuZXJzKCk7XG5cdFx0aXNUcmFja2luZyA9IGZhbHNlO1xuXHR9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFVwZGF0ZSB0aGUgcG9pbnRlciBzdGF0cyBvbkZyYW1lXG4gICAgKi9cblx0ZnJhbWU6IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoaXNUcmFja2luZykge1xuXHRcdFx0cG9pbnRlci51cGRhdGUoKTtcblx0XHR9XG5cdH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgUmV0dXJuIHRoZSBwb2ludGVyXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtQb2ludGVyXVxuICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgICAgXHR2YXIgdGhpc1BvaW50ZXIgPSBpc1RyYWNraW5nID8gcG9pbnRlciA6IGZhbHNlO1xuICAgICAgIFx0XG4gICAgICAgXHRpZiAodGhpc1BvaW50ZXIgJiYgb2Zmc2V0KSB7XG4gICAgICAgXHRcdHRoaXNQb2ludGVyLm9mZnNldCA9IGNhbGMub2Zmc2V0KG9mZnNldCwgdGhpc1BvaW50ZXIuY3VycmVudCk7XG4gICAgICAgXHR9XG5cbiAgICAgICAgcmV0dXJuIHRoaXNQb2ludGVyO1xuICAgIH0sXG4gICAgXG4gICAgaXNUcmFja2luZzogZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIGlzVHJhY2tpbmc7XG4gICAgfVxufTtcblxucG9pbnRlclRyYWNrZXIgPSBuZXcgUG9pbnRlclRyYWNrZXIoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwb2ludGVyVHJhY2tlcjsiLCIvKlxuICAgIFByb2Nlc3MgYWN0aW9uc1xuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgQWN0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4vYWN0aW9uTWFuYWdlci5qcycpLFxuICAgIFJ1Yml4ID0gcmVxdWlyZSgnLi9ydWJpeC5qcycpLFxuXHR1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL3V0aWxzLmpzJyksXG4gICAgUHJvY2VzcyA9IGZ1bmN0aW9uICgpIHt9LFxuICAgIHByb2Nlc3M7XG4gICAgXG5Qcm9jZXNzLnByb3RvdHlwZSA9IHtcblxuICAgIC8qXG4gICAgICAgIFByb2Nlc3MgYWN0aW9uc1xuICAgICAgICBcbiAgICAgICAgTG9vcCB0aHJvdWdoIGFsbCBhY3RpdmUgYWN0aW9ucyBhbmQgcHJvY2VzcyBlYWNoXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5XTogVG9rZW5zIG9mIGFjdGl2ZSBhY3Rpb25zIGF0IHRpbWUgb2YgZnJhbWVzdGFydFxuICAgICAgICBAcGFyYW0gW3RpbWVzdGFtcF06IFRpbWVzdGFtcCBvZiBmcmFtZXN0YXJ0XG4gICAgKi9cblx0YWN0aW9uczogZnVuY3Rpb24gKHRva2VucywgZnJhbWVTdGFydCwgZnBzKSB7XG5cdFx0dmFyIGkgPSAwLFxuXHRcdFx0YWN0aXZlID0gdG9rZW5zLmxlbmd0aDtcblxuXHRcdGZvciAoaTsgaSA8IGFjdGl2ZTsgKytpKSB7XG5cdFx0XHR0aGlzLnNpbmdsZUFjdGlvbihBY3Rpb25NYW5hZ2VyLmdldCh0b2tlbnNbaV0pLCBmcmFtZVN0YXJ0LCBmcHMpO1xuXHRcdH1cblx0fSxcblx0XG5cdFxuXHQvKlxuICAgIFx0UHJvY2VzcyBhIHNpbmdsZSBhY3Rpb25cbiAgICBcdFxuICAgIFx0QHBhcmFtIFtBY3Rpb25dXG4gICAgXHRAcGFyYW0gW3RpbWVzdGFtcF1cblx0Ki9cblx0c2luZ2xlQWN0aW9uOiBmdW5jdGlvbiAoYWN0aW9uLCBmcmFtZVN0YXJ0LCBmcHMpIHtcbiAgICBcdHZhciBvdXRwdXQgPSB7fSxcbiAgICBcdCAgICBydWJpeCA9IFJ1Yml4W2FjdGlvbi5saW5rXSxcbiAgICBcdCAgICBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgXHQgICAgXG4gICAgICAgIGlmIChhY3Rpb24uZmlyc3RGcmFtZSkge1xuICAgICAgICAgICAgYWN0aW9uLm9uU3RhcnQuY2FsbChhY3Rpb24uc2NvcGUsIG91dHB1dCwgYWN0aW9uLmRhdGEpO1xuICAgICAgICAgICAgYWN0aW9uLmZpcnN0RnJhbWUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG91dHB1dC5wb2ludGVyID0gcnViaXgudXBkYXRlUG9pbnRlcihhY3Rpb24pO1xuICAgICAgICBhY3Rpb24ucHJvZ3Jlc3MgPSBydWJpeC5jYWxjUHJvZ3Jlc3MoYWN0aW9uLCBmcmFtZVN0YXJ0LCBmcHMpO1xuICAgICAgICBcbiAgICBcdC8vIExvb3Agb3ZlciBhbGwgdmFsdWVzIFxuICAgIFx0Zm9yICh2YXIga2V5IGluIGFjdGlvbi52YWx1ZXMpIHtcbiAgICAgICAgXHRpZiAoYWN0aW9uLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIFx0ICAgIG91dHB1dFtrZXldID0gcnViaXguZWFzZVZhbHVlKGtleSwgYWN0aW9uLCBhY3Rpb24ucHJvZ3Jlc3MpO1xuICAgICAgICBcdFx0XG4gICAgICAgICAgICBcdC8vIEFwcGx5IE1hdGguIGZ1bmN0aW9uIGlmIG9uZSBkZWZpbmVkXG4gICAgICAgICAgICBcdG91dHB1dFtrZXldID0gYWN0aW9uLnZhbHVlc1trZXldLm1hdGggPyBNYXRoW2FjdGlvbi52YWx1ZXNba2V5XS5tYXRoXShvdXRwdXRba2V5XSkgOiBvdXRwdXRba2V5XTtcblxuICAgICAgICAgICAgXHRpZiAoYWN0aW9uLnZhbHVlc1trZXldLmN1cnJlbnQgIT09IG91dHB1dFtrZXldKSB7XG4gICAgICAgICAgICAgICAgXHRoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBcdGFjdGlvbi52YWx1ZXNba2V5XS5jdXJyZW50ID0gb3V0cHV0W2tleV07XG4gICAgICAgICAgICBcdH1cbiAgICAgICAgXHR9XG4gICAgXHR9XG4gICAgXHRcbiAgICBcdGFjdGlvbi5vbkZyYW1lLmNhbGwoYWN0aW9uLnNjb3BlLCBvdXRwdXQsIGFjdGlvbi5kYXRhKTtcblxuICAgIFx0Ly8gSWYgb3V0cHV0IGhhcyBjaGFuZ2VkLCBmaXJlIG9uQ2hhbmdlXG4gICAgXHRpZiAoaGFzQ2hhbmdlZCkge1xuICAgICAgICBcdGFjdGlvbi5vbkNoYW5nZS5jYWxsKGFjdGlvbi5zY29wZSwgb3V0cHV0LCBhY3Rpb24uZGF0YSk7XG4gICAgXHR9XG5cbiAgICBcdC8vIElmIHByb2Nlc3MgaXMgYXQgaXRzIGVuZCwgZmlyZSBvbkVuZCBhbmQgZGVhY3RpdmF0ZSBhY3Rpb25cbiAgICBcdGlmIChydWJpeC5oYXNFbmRlZChhY3Rpb24pKSB7XG4gICAgICAgIFx0YWN0aW9uLm9uRW5kLmNhbGwoYWN0aW9uLnNjb3BlLCBvdXRwdXQsIGFjdGlvbi5kYXRhKTtcbiAgICAgICAgXHRBY3Rpb25NYW5hZ2VyLnF1ZXVlRGVhY3RpdmF0ZShhY3Rpb24udG9rZW4pO1xuICAgIFx0fVxuICAgIFx0XG4gICAgXHRhY3Rpb24uZnJhbWVzdGFtcCA9IGZyYW1lU3RhcnQ7XG5cdH1cbn07XG5cbnByb2Nlc3MgPSBuZXcgUHJvY2VzcygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByb2Nlc3M7IiwiLypcbiAgICBSdWJpeCBtb2R1bGVzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIFJ1Yml4IG1vZHVsZXMgYXJlIHVzZWQgdG8gcHJvY2VzcyBhbiBhY3Rpb24gYmFzZWQgb24gaXRzIC5ydWJpeCBwcm9wZXJ0eS5cbiAgICBcbiAgICBBdmFpbGFibGUgcnViaXg6XG4gICAgICAgICdUaW1lJ1xuICAgICAgICAnUG9pbnRlcidcbiAgICAgICAgJ1NwZWVkJ1xuICAgICAgICBcbiAgICBQcm9jZXNzaW5nIGZ1bmN0aW9uczpcbiAgICAgICAgY2FsY1Byb2dyZXNzXG4gICAgICAgIGhhc0VuZGVkXG4gICAgICAgIHVwZGF0ZVBvaW50ZXJcbiAgICAgICAgZWFzZVZhbHVlXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi4vdXRpbHMvY2FsYy5qcycpLFxuXHR1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL3V0aWxzLmpzJyksXG4gICAgRWFzaW5nID0gcmVxdWlyZSgnLi4vdXRpbHMvZWFzaW5nRnVuY3Rpb25zLmpzJyksXG5cdGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vb3B0cy9kZWZhdWx0cy5qcycpLFxuXHRLRVkgPSByZXF1aXJlKCcuLi9vcHRzL2tleXMuanMnKSxcbiAgICBQb2ludGVyVHJhY2tlciA9IHJlcXVpcmUoJy4vcG9pbnRlclRyYWNrZXIuanMnKSxcbiAgICBSdWJpeCA9IGZ1bmN0aW9uICgpIHt9LFxuICAgIHJ1Yml4Q29udHJvbGxlcjtcblxuUnViaXgucHJvdG90eXBlID0ge1xuICAgIFRpbWU6IHtcblx0XG4gICAgICAgIC8qXG4gICAgXHQgICAgQ2FsYyBwcm9ncmVzc1xuICAgIFx0ICAgIFxuICAgICAgICBcdENhbGMgYWN0aW9uJ3MgcHJvZ3Jlc3MgdGhyb3VnaCB0aW1lbGltaXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtBY3Rpb25dOiBhY3Rpb24gdG8gbWVhc3VyZVxuICAgICAgICAgICAgQHBhcmFtIFt0aW1lc3RhbXBdOiBmcmFtZXN0YXJ0IHRpbWVzdGFtcFxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogMCB0byAxIHZhbHVlIHJlcHJlc2VudGluZyBob3cgbXVjaCB0aW1lIGhhcyBwYXNzZWRcbiAgICAgICAgKi9cbiAgICAgICAgY2FsY1Byb2dyZXNzOiBmdW5jdGlvbiAoYWN0aW9uLCBmcmFtZVN0YXJ0KSB7XG4gICAgICAgIFx0YWN0aW9uLmVsYXBzZWQgKz0gY2FsYy5kaWZmZXJlbmNlKGFjdGlvbi5mcmFtZXN0YW1wLCBmcmFtZVN0YXJ0KSAqIGFjdGlvbi50aW1lRGlsYXRpb247XG4gICAgICAgIFx0XG4gICAgICAgIFx0cmV0dXJuIGNhbGMucHJvZ3Jlc3MoYWN0aW9uLmVsYXBzZWQsIGFjdGlvbi5kdXJhdGlvbiArIGFjdGlvbi5kZWxheSk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgSGFzIGFjdGlvbiBlbmRlZFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBUcnVlIGlmIHByb2dyZXNzIGlzIGVxdWFsIHRvIG9yIGhpZ2hlciB0aGFuIDEuIElmIGxvb3BpbmcgaXMgZW5hYmxlZFxuICAgICAgICAgICAgd2UgcmVzdGFydCB0aGUgYWN0aW9uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbQWN0aW9uXTogYWN0aW9uIHRvIGFuYWx5c2VcbiAgICAgICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBoYXMgYWN0aW9uIGVuZGVkXG4gICAgICAgICovXG4gICAgICAgIGhhc0VuZGVkOiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIFx0cmV0dXJuIGFjdGlvbi5wcm9ncmVzcyA+PSAxID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFVwZGF0ZSBwb2ludGVyXG4gICAgICAgICovXG4gICAgICAgIHVwZGF0ZVBvaW50ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBFYXNlIHZhbHVlIGluIGFjdGlvbiB3aXRoIHByb3ZpZGVkIGtleVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IGtleSBvZiB2YWx1ZVxuICAgICAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IFByb2dyZXNzIGluIHRpbWVsaW5lXG4gICAgICAgICovXG4gICAgICAgIGVhc2VWYWx1ZTogZnVuY3Rpb24gKGtleSwgYWN0aW9uLCBwcm9ncmVzcykge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gYWN0aW9uLnZhbHVlc1trZXldLFxuICAgICAgICAgICAgXHRyZXN0cmljdGVkUHJvZ3Jlc3MgPSBjYWxjLnJlc3RyaWN0ZWQocHJvZ3Jlc3MsIDAsIDEpLFxuICAgICAgICAgICAgXHRlYXNlZFZhbHVlO1xuICAgICAgICAgICAgXHRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zdGVwcykge1xuICAgICAgICAgICAgICAgIHJlc3RyaWN0ZWRQcm9ncmVzcyA9IHV0aWxzLnN0ZXBQcm9ncmVzcyhyZXN0cmljdGVkUHJvZ3Jlc3MsIDEsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWFzZWRWYWx1ZSA9IEVhc2luZy53aXRoaW5SYW5nZShyZXN0cmljdGVkUHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcblxuICAgICAgICAgICAgcmV0dXJuIGVhc2VkVmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIFxuICAgIFxuICAgIFBvaW50ZXI6IHtcbiAgICBcbiAgICBcdC8qXG4gICAgXHQgICAgQ2FsYyBwcm9ncmVzc1xuICAgIFx0ICAgIFxuICAgICAgICBcdENhbGMgdGhlIHByb2dyZXNzIG9mIGVhY2ggcG9pbnRlciBtZXRyaWMsIDAgdG8gMSBpZiByYW5nZSBnaXZlbixcbiAgICAgICAgICAgIGluIGRpcmVjdCB0ZXJtcyBpZiBubyBnaXZlbiByYW5nZVxuICAgICAgICBcdFxuICAgICAgICBcdEBwYXJhbSBbQWN0aW9uXTogYWN0aW9uIHRvIG1lYXN1cmVcbiAgICAgICAgXHRAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgb2YgYWxsIHByb2dyZXNzZXNcbiAgICBcdCovXG4gICAgICAgIGNhbGNQcm9ncmVzczogZnVuY3Rpb24gKGFjdGlvbiwgZnJhbWVTdGFydCkge1xuICAgICAgICAgICAgdmFyIHByb2dyZXNzID0ge30sXG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gYWN0aW9uLnBvaW50ZXIub2Zmc2V0O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Q6ICghYWN0aW9uLnZhbHVlc1trZXldKSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoIWFjdGlvbi52YWx1ZXNba2V5XSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFtrZXldIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxjLnByb2dyZXNzKG9mZnNldFtrZXldICsgYWN0aW9uLm9yaWdpbltrZXldLCBhY3Rpb24udmFsdWVzW2tleV0ubWluLCBhY3Rpb24udmFsdWVzW2tleV0ubWF4KVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHByb2dyZXNzO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEhhcyBmdW5jdGlvbiBlbmRlZD9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgVHJ1ZSBpZiBhY3Rpb24uaXNUcmFja2luZyBpcyBmYWxzZVxuICAgICAgICAqL1xuICAgICAgICBoYXNFbmRlZDogZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIFBvaW50ZXJUcmFja2VyLmlzVHJhY2tpbmcoKSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBVcGRhdGUgcG9pbnRlclxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW0FjdGlvbl06IFxuICAgICAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IExhdGVzdCBwb2ludGVyLCBvciBwcmV2aW91cyBwb2ludGVyIGlmIHN0b3BwZWQgdHJhY2tpbmdcbiAgICAgICAgKi9cbiAgICAgICAgdXBkYXRlUG9pbnRlcjogZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRQb2ludGVyID0gYWN0aW9uLnBvaW50ZXI7XG5cbiAgICAgICAgICAgIGFjdGlvbi5wb2ludGVyID0gUG9pbnRlclRyYWNrZXIuZ2V0KGFjdGlvbi5wb2ludGVyT2Zmc2V0KSB8fCBjdXJyZW50UG9pbnRlcjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wb2ludGVyO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEVhc2UgdmFsdWUgaW4gYWN0aW9uIHdpdGggcHJvdmlkZWQga2V5XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXToga2V5IG9mIHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogUHJvZ3Jlc3Mgb2YgcG9pbnRlciBwcm9wc1xuICAgICAgICAqL1xuICAgICAgICBlYXNlVmFsdWU6IGZ1bmN0aW9uIChrZXksIGFjdGlvbiwgcHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHZhciBlYXNlZFZhbHVlID0gMCwgXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBhY3Rpb24udmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgY2FsY3VsYXRlZCB0aGUgcHJvZ3Jlc3MgZm9yIHRoaXMgcHJvcGVydHlcbiAgICAgICAgICAgIGlmIChwcm9ncmVzc1trZXldKSB7XG4gICAgICAgICAgICAgICAgZWFzZWRWYWx1ZSA9IEVhc2luZy53aXRoaW5SYW5nZShwcm9ncmVzc1trZXldLnZhbHVlLCB2YWx1ZS5taW4sIHZhbHVlLm1heCwgZGVmYXVsdHMudHJhY2tFYXNlLCB2YWx1ZS5lc2NhcGVBbXApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBsaW5raW5nIHRoaXMgcHJvcGVydHkgaW50byBhIHVzZXIgaW5wdXRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUubGluaykge1xuICAgICAgICAgICAgICAgIGVhc2VkVmFsdWUgPSBFYXNpbmcud2l0aGluUmFuZ2UocHJvZ3Jlc3NbdmFsdWUubGlua10udmFsdWUsIHZhbHVlLm1pbiwgdmFsdWUubWF4LCBkZWZhdWx0cy50cmFja0Vhc2UsIHZhbHVlLmVzY2FwZUFtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFRPRE86IEhhbmRsZSBkZWZhdWx0IGVhc2luZyBcblxuICAgICAgICAgICAgcmV0dXJuIGVhc2VkVmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIFNwZWVkOiB7XG4gICAgXG4gICAgXHQvKlxuXHQgICAgXHRDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgc3BlZWQgYmFzZWQgb24gZnBzXG4gICAgXHQqL1xuICAgIFx0ZnJhbWVTcGVlZDogZnVuY3Rpb24gKHhwcywgZnBzKSB7XG4gICAgXHRcdHZhciBzcGVlZFBlckZyYW1lID0gMDtcblxuICAgIFx0XHRpZiAoeHBzICYmIHV0aWxzLmlzTnVtKHhwcykpIHtcblx0ICAgIFx0XHRzcGVlZFBlckZyYW1lID0geHBzL2ZwcztcbiAgICBcdFx0fVxuICAgIFx0XG5cdCAgICBcdHJldHVybiBzcGVlZFBlckZyYW1lO1xuICAgIFx0fSxcbiAgICBcbiAgICBcdC8qXG4gICAgXHQgICAgQ2FsYyBuZXcgc3BlZWRcbiAgICBcdCAgICBcbiAgICBcdCAgICBDYWxjIHRoZSBuZXcgc3BlZWQgYmFzZWQgb24gdGhlIGZvcm11bGEgc3BlZWQgPSAoc3BlZWQgLSBmcmljdGlvbiArIHRocnVzdClcbiAgICAgICAgXHRcbiAgICAgICAgXHRAcGFyYW0gW0FjdGlvbl06IGFjdGlvbiB0byBtZWFzdXJlXG4gICAgICAgIFx0QHJldHVybiBbb2JqZWN0XTogT2JqZWN0IG9mIGFsbCBzcGVlZHNcbiAgICBcdCovXG5cdCAgICBjYWxjUHJvZ3Jlc3M6IGZ1bmN0aW9uIChhY3Rpb24sIGZyYW1lU3RhcnQsIGZwcykge1xuXHRcdCAgICB2YXIgcHJvZ3Jlc3MgPSB7fSxcblx0XHQgICAgXHRwb2ludCxcblx0XHQgICAgXHR2YWx1ZTtcblx0XHQgICAgXHRcblx0XHQgICAgZm9yICh2YXIga2V5IGluIGFjdGlvbi52YWx1ZXMpIHtcblx0XHRcdCAgICBpZiAoYWN0aW9uLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHQgICAgXHR2YWx1ZSA9IGFjdGlvbi52YWx1ZXNba2V5XTtcblx0XHRcdCAgICBcdHZhbHVlLnNwZWVkID0gdmFsdWUuc3BlZWQgLSB0aGlzLmZyYW1lU3BlZWQodmFsdWUuZnJpY3Rpb24sIGZwcykgKyB0aGlzLmZyYW1lU3BlZWQodmFsdWUudGhydXN0LCBmcHMpO1xuXHRcdFx0XHQgICAgcHJvZ3Jlc3Nba2V5XSA9IHRoaXMuZnJhbWVTcGVlZCh2YWx1ZS5zcGVlZCwgZnBzKTtcblx0XHRcdCAgICB9XG5cdFx0ICAgIH1cblx0XHQgICAgXG5cdFx0ICAgIGlmIChhY3Rpb24udmFsdWVzLmFuZ2xlICYmIGFjdGlvbi52YWx1ZXMuZGlzdGFuY2UpIHtcblx0XHQgICAgXHRwb2ludCA9IGNhbGMucG9pbnQoYWN0aW9uLm9yaWdpbiwgYWN0aW9uLnZhbHVlcy5hbmdsZS5jdXJyZW50LCBhY3Rpb24udmFsdWVzLmRpc3RhbmNlLmN1cnJlbnQpO1xuXHRcdFx0ICAgIHByb2dyZXNzLnggPSBwb2ludC54O1xuXHRcdFx0ICAgIHByb2dyZXNzLnkgPSBwb2ludC55O1xuXHRcdCAgICB9XG5cdFx0ICAgIFxuXHRcdCAgICByZXR1cm4gcHJvZ3Jlc3M7XG5cdCAgICB9LFxuXHQgICAgXG5cdCAgICAvKlxuICAgIFx0ICAgIEhhcyB0aGlzIGFjdGlvbiBlbmRlZD9cbiAgICBcdCAgICBcbiAgICBcdCAgICBAcmV0dXJuIFtib29sZWFuXTogRmFsc2UgZm9yIG5vdyAtIFRPRE8gY3JlYXRlIGJldHRlciBkZWZhdWx0XG5cdCAgICAqL1xuXHQgICAgaGFzRW5kZWQ6IGZ1bmN0aW9uIChhY3Rpb24pIHtcblx0ICAgIFx0cmV0dXJuIGZhbHNlO1xuXHQgICAgfSxcblx0ICAgIFxuXHQgICAgLypcbiAgICBcdCAgICBBZGQgdGhlIHNwZWVkIHRvIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXToga2V5IG9mIHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogUHJvZ3Jlc3Mgb2YgcG9pbnRlciBwcm9wc1xuXHQgICAgKi9cblx0ICAgIGVhc2VWYWx1ZTogZnVuY3Rpb24gKGtleSwgYWN0aW9uLCBwcm9ncmVzcykge1xuXHQgICAgXHR2YXIgdmFsdWUgPSBhY3Rpb24udmFsdWVzW2tleV0sXG5cdCAgICBcdFx0bmV3VmFsdWUgPSB2YWx1ZS5jdXJyZW50ICsgcHJvZ3Jlc3Nba2V5XTtcblxuXHQgICAgXHRpZiAodmFsdWUubWluKSB7XG5cdFx0ICAgIFx0bmV3VmFsdWUgPSBNYXRoLm1heCh2YWx1ZS5taW4sIG5ld1ZhbHVlKTtcblx0ICAgIFx0fVxuXHQgICAgXHRcblx0ICAgIFx0aWYgKHZhbHVlLm1heCkge1xuXHRcdCAgICBcdG5ld1ZhbHVlID0gTWF0aC5taW4odmFsdWUubWF4LCBuZXdWYWx1ZSk7XG5cdCAgICBcdH1cblxuXHQgICAgIFx0cmV0dXJuIG5ld1ZhbHVlO1xuXHQgICAgfSxcblx0ICAgIFxuXHQgICAgdXBkYXRlUG9pbnRlcjogZnVuY3Rpb24gKCkge31cbiAgICB9LFxuXG59O1xuXG5ydWJpeENvbnRyb2xsZXIgPSBuZXcgUnViaXgoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBydWJpeENvbnRyb2xsZXI7IiwiLypcbiAgICBUb2tlbiBjb250cm9sbGVyXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB0b2tlbkNvdW50ZXIgPSAwLFxuXHRUb2tlbiA9IGZ1bmN0aW9uICgpIHt9O1xuXG5Ub2tlbi5wcm90b3R5cGUgPSB7XG5cdFxuXHQvKlxuXHRcdEdldCB0aGUgY3VycmVudCB0b2tlbiBjb3VudFxuXHRcdFxuXHRcdEByZXR1cm4gW2ludF06IEN1cnJlbnQgdG9rZW4gY291bnRcblx0Ki9cblx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRva2VuQ291bnRlcjtcblx0fSxcblx0XG5cdC8qXG5cdFx0R2VuZXJhdGUgYSBuZXcgdG9rZW5cblx0XHRcblx0XHRAcmV0dXJuIFtpbnRdOiBOZXcgdG9rZW5cblx0Ki9cblx0Z2VuZXJhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdG9rZW4gPSB0aGlzLmdldCgpO1xuXHRcdFxuXHRcdHRoaXMuaW5jcmVtZW50KCk7XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH0sXG5cdFxuXHQvKlxuXHRcdEluY3JlYXNlIHRva2VuIGNvdW50ZXJcblx0Ki9cblx0aW5jcmVtZW50OiBmdW5jdGlvbiAoKSB7XG5cdFx0dG9rZW5Db3VudGVyICsrO1xuXHR9XG5cdFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbjsiLCIvKlxuICAgIERlZmF1bHQgb3B0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIEtFWSA9IHJlcXVpcmUoJy4va2V5cy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBwb2ludGVyOiB7XG4gICAgICAgIGhpc3RvcnlTaXplOiAyLCAvLyBudW1iZXIgb2YgcG9pbnRlciBldmVudHMgdG8gcmVtZW1iZXJcbiAgICAgICAgbWF4SW5hY3RpdmVGcmFtZXM6IDIgLy8gYWxsb3cgdGhpcyBudW1iZXIgb2YgZnJhbWVzIHRvIHBhc3Mgd2l0aCBubyBtb3ZlbWVudCBiZWZvcmUgd2UgZGVjbGFyZSBzdGF0aW9uYXJ5IHBvaW50ZXJcbiAgICB9LFxuICAgIHRyYWNrRWFzZTogS0VZLkVBU0lORy5MSU5FQVIsXG4gICAgdHdlZW5UYXJnZXQ6IDBcbn07IiwiLypcbiAgICBTdHJpbmcgY29uc3RhbnRzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBBTklNQVRFOiAnYW5pbWF0ZScsXG4gICAgQ0FMQzogJ2NhbGMnLFxuICAgIEpRVUVSWV9FTEVNRU5UOiAnX2pRdWVyeUVsZW1lbnQnLFxuICAgIEVBU0lORzoge1xuXHQgICAgUVVBRF9JTl9PVVQ6ICdxdWFkSW5PdXQnLFxuXHQgICAgUVVBRF9PVVQ6ICdxdWFkT3V0Jyxcblx0XHRJTjogJ0luJyxcblx0XHRJTl9PVVQ6ICdJbk91dCcsXG5cdFx0T1VUOiAnT3V0Jyxcblx0XHRMSU5FQVI6ICdsaW5lYXInXG4gICAgfSxcbiAgICBMSU5LOiB7XG5cdCAgICBUSU1FOiAnVGltZScsXG5cdCAgICBQT0lOVEVSOiAnUG9pbnRlcicsXG5cdCAgICBTUEVFRDogJ1NwZWVkJ1xuICAgIH0sXG4gICAgRVJST1I6IHtcblx0ICAgIEFDVElPTl9FWElTVFM6IFwiQWN0aW9uIGFscmVhZHkgZGVmaW5lZC4gVXNlIGZvcmNlT3ZlcnJpZGU6IHRydWUgdG8gb3ZlcnJpZGUuXCIsXG5cdCAgICBOT19BQ1RJT046IFwiTm8gYWN0aW9uIGRlZmluZWQgdG8gaW5oZXJpdCBmcm9tLlwiLFxuXHQgICAgSU5WQUxJRF9FQVNJTkc6IFwiOiBFYXNpbmcgbm90IGRlZmluZWRcIlxuICAgIH0sXG4gICAgRVZFTlQ6IHtcblx0ICAgIE1PVVNFOiAnbW91c2UnLFxuICAgICAgICBNT1VTRURPV046ICdtb3VzZWRvd24nLFxuICAgICAgICBNT1VTRU1PVkU6ICdtb3VzZW1vdmUnLFxuICAgICAgICBNT1VTRVVQOiAnbW91c2V1cCcsXG4gICAgICAgIFRPVUNIOiAndG91Y2gnLFxuICAgICAgICBUT1VDSFNUQVJUOiAndG91Y2hzdGFydCcsXG4gICAgICAgIFRPVUNITU9WRTogJ3RvdWNobW92ZScsXG4gICAgICAgIFRPVUNIRU5EOiAndG91Y2hlbmQnXG4gICAgfSxcbiAgICBQUk9HUkVTUzoge1xuICAgICAgICBESVJFQ1Q6ICdEaXJlY3QnLFxuICAgICAgICBSQU5HRTogJ1JhbmdlJ1xuICAgIH1cbn07IiwiLypcbiAgICBSIEUgRCBTIEggSSBGIFRcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBLRVkgPSByZXF1aXJlKCcuL29wdHMva2V5cy5qcycpLFxuXHRBY3Rpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi9ib2JzL2FjdGlvbk1hbmFnZXIuanMnKSxcblx0Q2hyb25vcyA9IHJlcXVpcmUoJy4vYm9icy9jaHJvbm9zLmpzJyksXG5cdEVhc2luZyA9IHJlcXVpcmUoJy4vdXRpbHMvZWFzaW5nRnVuY3Rpb25zLmpzJyksXG5cdGNhbGMgPSByZXF1aXJlKCcuL3V0aWxzL2NhbGMuanMnKSxcblx0dXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzLmpzJyksXG5cdHNoaW1zID0gcmVxdWlyZSgnLi91dGlscy9zaGltcy5qcycpLFxuXHRyUXVlcnkgPSByZXF1aXJlKCcuL3V0aWxzL3JRdWVyeS5qcycpLFxuXHRSZWRzaGlmdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBcdHRoaXMuaW5pdCgpO1xuXHR9LFxuICAgIHJlZHNoaWZ0LFxuICAgIEluc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICB9O1xuICAgIFxuSW5zdGFuY2UucHJvdG90eXBlID0ge1xuXHRcblx0LypcbiAgICBcdFJlYWQgb3IgYmluZCBkYXRhIHRvIHRoaXMgUmVkc2hpZnQgb2JqZWN0XG4gICAgXHRcbiAgICBcdFJlYWRcbiAgICBcdCAgICBAcGFyYW0gW3N0cmluZ106IEtleSBvZiBkYXRhIHZhbHVlIHRvIHJlYWRcbiAgICBcdCAgICBAcmV0dXJuIFthbnldOiBUaGUgZGF0YSBzdG9yZWQgdW5kZXIgdGhhdCBrZXlcbiAgICBcdCAgICBcbiAgICAgICAgV3JpdGUgc3ludGF4IEFcbiAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IG9mIGRhdGEgdmFsdWUgdG8gd3JpdGVcbiAgICAgICAgICAgIEBwYXJhbSBbYW55XTogVGhlIGRhdGEgdG8gc3RvcmUgdW5kZXIgdGhhdCBrZXlcbiAgICAgICAgICAgIFxuICAgICAgICBXcml0ZSBzeW50YXggQlxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3Qgb2Yga2V5L3ZhbHVlIHBhaXJzIHRvIGF0dGFjaCB0byB0aGlzIG9iamVjdFxuXHQqL1xuXHRkYXRhOiBmdW5jdGlvbiAoKSB7XG5cdCAgICB2YXIgcmV0dXJuVmFsdWUgPSB0aGlzLFxuXHQgICAgICAgIGFyZzAgPSBhcmd1bWVudHNbMF0sXG5cdCAgICAgICAgYXJnMElzU3RyaW5nID0gdXRpbHMuaXNTdHJpbmcoYXJnMCksXG5cdCAgICAgICAgZGF0YVRvU2V0ID0ge307XG5cdCAgICBcblx0ICAgIC8vIElmIHRoaXMgaXMgYSBnZXQgcmVxdWVzdFxuXHQgICAgaWYgKGFyZzBJc1N0cmluZyAmJiAhYXJndW1lbnRzWzFdKSB7XG4gICAgXHQgICAgcmV0dXJuVmFsdWUgPSBBY3Rpb25NYW5hZ2VyLmdldERhdGEodGhpcy50b2tlbiwgYXJnMCk7XG5cdCAgICBcblx0ICAgIC8vIEVsc2UgdGhpcyBpcyBhIHNldCByZXF1ZXN0XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAgIGlmIChhcmcwSXNTdHJpbmcpIHtcbiAgICBcdCAgICAgICAgZGF0YVRvU2V0W2FyZzBdID0gYXJndW1lbnRzWzFdO1xuXHQgICAgICAgIH0gZWxzZSB7XG4gICAgXHQgICAgICAgIGRhdGFUb1NldCA9IGFyZzA7XG5cdCAgICAgICAgfVxuXG4gICAgXHQgICAgQWN0aW9uTWFuYWdlci5zZXREYXRhKHRoaXMudG9rZW4sIGRhdGFUb1NldCk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiByZXR1cm5WYWx1ZTtcblx0fSxcblx0XG5cdC8qXG4gICAgXHRQbGF5IHRoZSBwcm92aWRlZCBhY3Rpb25zIGFzIGFuaW1hdGlvbnNcbiAgICBcdFxuICAgIFx0QHBhcmFtIFtzdHJpbmcgfHwgYXJyYXldOiBTcGFjZSBkZWxpbWluYXRlZCBzdHJpbmcgb3IgYXJyYXkgb2YgZGVmaW5lZCBhY3Rpb24ga2V5cyBpbiBvcmRlciBvZiBleGVjdXRpb25cbiAgICBcdEBwYXJhbSBbb2JqZWN0XTogT3ZlcnJpZGUgYWN0aW9uIGRlZmF1bHRzIHdpdGggdGhvc2UgZGVmaW5lZCBoZXJlXG5cdCovXG5cdHBsYXk6IGZ1bmN0aW9uIChkZWZzLCBvdmVycmlkZSkge1xuXHQgICAgcmV0dXJuIHJlZHNoaWZ0Lmlnbml0ZSh0aGlzLnRva2VuLCBLRVkuTElOSy5USU1FLCBBY3Rpb25NYW5hZ2VyLmNyZWF0ZUJhc2UoZGVmcywgb3ZlcnJpZGUpKTtcblx0fSxcblx0XG5cdC8qXG4gICAgXHRSdW4gdGhlIHByb3ZpZGVkIGFjdGlvbiBiYXNlZCBvbiBwcm9wZXJ0eSBzcGVlZFxuICAgIFx0XG4gICAgXHRAcGFyYW0gW3N0cmluZ106IEtleSBvZiB0aGUgYWN0aW9uIHRvIHByb2Nlc3NcbiAgICBcdEBwYXJhbSBbb2JqZWN0XTogT3ZlcnJpZGUgYWN0aW9uIGRlZmF1bHRzIHdpdGggdGhvc2UgZGVmaW5lZCBoZXJlXG5cdCovXG5cdG1vdmU6IGZ1bmN0aW9uIChkZWZzLCBvdmVycmlkZSkge1xuXHQgICAgcmV0dXJuIHJlZHNoaWZ0Lmlnbml0ZSh0aGlzLnRva2VuLCBLRVkuTElOSy5TUEVFRCwgQWN0aW9uTWFuYWdlci5jcmVhdGVCYXNlKGRlZnMsIG92ZXJyaWRlKSk7XG5cdH0sXG5cdFxuXG4gICAgLypcbiAgICAgICAgVHJhY2sgcG9pbnRlclxuICAgIFx0XG4gICAgXHRAcGFyYW0gW3N0cmluZ106IEtleSBvZiB0aGUgYWN0aW9uIHRvIHByb2Nlc3NcbiAgICAgICAgQHBhcmFtIFtldmVudF06IEluaXRpYXRpbmcgcG9pbnRlciBldmVudFxuICAgICovXG5cdHRyYWNrOiBmdW5jdGlvbiAoZGVmcykge1xuXHQgICAgdmFyIGhhc0FsbEFyZ3MgPSAoYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQpLFxuXHQgICAgICAgIHRvVHJhY2sgPSBoYXNBbGxBcmdzID8gYXJndW1lbnRzWzJdIDogYXJndW1lbnRzWzFdLFxuXHQgICAgICAgIG92ZXJyaWRlID0gaGFzQWxsQXJncyA/IGFyZ3VtZW50c1szXSA6IHt9O1xuXHQgICAgXG5cdCAgICByZXR1cm4gcmVkc2hpZnQuaWduaXRlKHRoaXMudG9rZW4sIEtFWS5MSU5LLlBPSU5URVIsIEFjdGlvbk1hbmFnZXIuY3JlYXRlQmFzZShkZWZzLCBvdmVycmlkZSksIHRvVHJhY2spO1xuXHR9LFxuICAgIFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0YXJ0IHNwZWNpZmllZCBhY3Rpb25cbiAgICAgICAgXG4gICAgICAgIEFjdGl2YXRlIHRoZSBhY3Rpb24gYW5kIGZpcmUgdXAgQ2hyb25vcyBhbmltYXRpb24gbG9vcFxuICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVkc2hpZnQuc3RhcnQodGhpcy50b2tlbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RvcCBzcGVjaWZpZWQgYWN0aW9uXG4gICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlZHNoaWZ0LnN0b3AodGhpcy50b2tlbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgZ2V0VG9rZW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW47XG4gICAgfSxcbiAgICBcbiAgICBpc0FjdGl2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQWN0aW9uTWFuYWdlci5pc0FjdGl2ZSh0aGlzLnRva2VuKTtcbiAgICB9XG4gICAgXG59O1xuXG5SZWRzaGlmdC5wcm90b3R5cGUgPSB7XG5cbiAgICBuZXdBY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCk7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIENyZWF0ZSBhIEluc3RhbmNlIHdpdGggdGhlIHNwZWNpZmllZCB0b2tlblxuICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IEFjdGlvbk1hbmFnZXIuZ2V0KHRva2VuKSB8fCBBY3Rpb25NYW5hZ2VyLmNyZWF0ZSgpO1xuXG4gICAgICAgIHJldHVybiBuZXcgSW5zdGFuY2UoYWN0aW9uLnRva2VuKTtcbiAgICB9LFxuICAgIFxuICAgIFxuICAgIGRlZmluZTogZnVuY3Rpb24gKGFjdGlvbnMpIHtcblx0ICAgIEFjdGlvbk1hbmFnZXIuZGVmaW5lKGFjdGlvbnMpO1xuXHQgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblx0XG5cdHN0YXJ0OiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgQWN0aW9uTWFuYWdlci5hY3RpdmF0ZSh0b2tlbik7XG4gICAgICAgIENocm9ub3Muc3RhcnQoKTtcblx0fSxcblx0XG5cdHN0b3A6IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIFx0QWN0aW9uTWFuYWdlci5kZWFjdGl2YXRlKHRva2VuKTtcblx0fSxcblx0XG5cdC8qXG4gICAgXHRJZ25pdGUgUmVkc2hpZnRcbiAgICBcdFxuICAgIFx0R2V0IHRoZSBzcGVjaWZpZWQgYWN0aW9uIChvciBjcmVhdGUgaWYgbm9uZSksIHVwZGF0ZSBpdHMgcHJvcGVydGllc1xuICAgIFx0YW5kIHRoZW4gc3RhcnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogUHJvcGVydGllcyB0byBtYW5pcHVsYXRlXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT3B0aW9ucyBmb3IgdHJhY2tcbiAgICAgICAgQHBhcmFtIFtldmVudF06IEluaXRpYXRpbmcgcG9pbnRlciBldmVudFxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBJRCB0b2tlbiBmb3IgYWN0aW9uXG5cdCovXG5cdGlnbml0ZTogZnVuY3Rpb24gKHRva2VuLCBsaW5rLCBjaGFuZ2VzLCBlKSB7XG5cdFx0dmFyIGFjdGlvbiA9IEFjdGlvbk1hbmFnZXIuZ2V0KHRva2VuKTtcblx0XHRcblx0XHRjaGFuZ2VzLmxpbmsgPSBsaW5rO1xuXG5cdFx0QWN0aW9uTWFuYWdlci5jaGFuZ2UodG9rZW4sIGNoYW5nZXMsIGUpO1xuXG5cdFx0dGhpcy5zdGFydCh0b2tlbik7XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH0sXG5cdFxuXHRcblx0XG5cdFxuXHQvKlxuICAgIFx0QWRkIGJlemllciBjdXJ2ZSBmdW5jdGlvblxuICAgIFx0XG4gICAgXHRBZGQgdGhlIHNwZWNpZmllZCBiZXppZXIgY3VydmUgdGhlIEVhc2luZ0Z1bmN0aW9uJ3MgYXZhaWxhYmxlIGVhc2luZ3NcbiAgICBcdE15IGZhdm91cml0ZSBiZXppZXIgY3VydmUgZ2VuZXJhdG9yIGlzIExlYSBWZXJvdSdzIGV4Y2VsbGVudCBodHRwOi8vY3ViaWMtYmV6aWVyLmNvbS9cbiAgICBcdFxuICAgIFx0QHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHRoZSBuZXcgZWFzaW5nIGZ1bmN0aW9uIFxuICAgIFx0QHBhcmFtIFtudW1iZXJdOiB4IGNvb3JkaW5hdGUgb2YgcG9pbnQgMVxuICAgIFx0QHBhcmFtIFtudW1iZXJdOiB5IGNvb3JkaW5hdGUgb2YgcG9pbnQgMVxuICAgIFx0QHBhcmFtIFtudW1iZXJdOiB4IGNvb3JkaW5hdGUgb2YgcG9pbnQgMlxuICAgIFx0QHBhcmFtIFtudW1iZXJdOiB5IGNvb3JkaW5hdGUgb2YgcG9pbnQgMlxuXHQqL1xuXHRhZGRCZXppZXI6IGZ1bmN0aW9uIChuYW1lLCB4MSwgeTEsIHgyLCB5Mikge1xuXHRcdEVhc2luZy5hZGRCZXppZXIobmFtZSwgeDEsIHkxLCB4MiwgeTIpO1xuXHR9LFxuXHRcbiAgICBDYWxjOiBjYWxjLFxuXHRcblx0cnVuOiBmdW5jdGlvbiAoKSB7XG4gICAgXHRcblx0fSxcblx0XG5cdHVwZGF0ZVBvaW50ZXI6IGZ1bmN0aW9uICh4LCB5LCB6KSB7XG4gICAgXHRcblx0fSxcblx0XG5cdC8qXG4gICAgXHRJbml0IFJlZHNoaWZ0XG4gICAgXHRcbiAgICBcdENoZWNrIGlmIHdlIG5lZWQgc2hpbXMgYW5kIGxvYWQgaWYgbmVjZXNzYXJ5XG5cdCovXG5cdGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBcdHNoaW1zLmZlYXR1cmVDaGVjaygpO1xuICAgIFx0clF1ZXJ5LmNoZWNrKCk7XG5cdH1cbn07XG5cbnJlZHNoaWZ0ID0gbmV3IFJlZHNoaWZ0KCk7XG5cbndpbmRvdy5SZWRzaGlmdCA9IHJlZHNoaWZ0O1xubW9kdWxlLmV4cG9ydHMgPSByZWRzaGlmdDsiLCIvKlxuICAgIENhbGN1bGF0b3JzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIFNpbXBsZSBJL08gc25pcHBldHNcbiAgICBcbiAgICBhbmdsZVxuICAgIGFuZ2xlRnJvbUNlbnRlclxuICAgIGRpZmZlcmVuY2VcbiAgICBkaXN0YW5jZVxuICAgIGRpc3RhbmNlMURcbiAgICBkaXN0YW5jZTJEXG4gICAgZGlzdGFuY2UzRFxuICAgIGVsYXBzZWRcbiAgICBoeXBvdGVudXNlXG4gICAgb2Zmc2V0XG4gICAgcHJvZ3Jlc3NcbiAgICByZXN0cmljdGVkXG4gICAgdGltZVJlbWFpbmluZ1xuICAgIHZhbHVlXG4gICAgdmFsdWVFYXNlZFxuKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBPZmZzZXQgPSByZXF1aXJlKCcuLi9iaXRzL29mZnNldC5qcycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscy5qcycpLFxuICAgIENhbGMgPSBmdW5jdGlvbiAoKSB7fSxcbiAgICBjYWxjO1xuICAgIFxuQ2FsYy5wcm90b3R5cGUgPSB7XG5cbiBcbiAgICAvKlxuICAgICAgICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICAgICAgICBcbiAgICAgICAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gICAgICAgIGFyZSBhdCAwLDAsIHRoZW4gcmV0dXJuIHRoZSBhbmdsZSB1c2luZyAuYW5nbGVGcm9tQ2VudGVyKClcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gICAgICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuICAgICovXG4gICAgYW5nbGU6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICB2YXIgZnJvbSA9IHBvaW50QiA/IHBvaW50QSA6IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgIHRvID0gcG9pbnRCIHx8IHBvaW50QSxcbiAgICAgICAgICAgIHBvaW50ID0ge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuZGlmZmVyZW5jZShmcm9tLngsIHRvLngpLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuZGlmZmVyZW5jZShmcm9tLnksIHRvLnkpXG4gICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5nbGVGcm9tQ2VudGVyKHBvaW50LngsIHBvaW50LnkpO1xuICAgIH0sXG5cblxuICAgIC8qXG4gICAgICAgIEFuZ2xlIGZyb20gY2VudGVyXG4gICAgICAgIFxuICAgICAgICBSZXR1cm5zIHRoZSBjdXJyZW50IGFuZ2xlLCBpbiByYWRpYW5zLCBvZiBhIGRlZmluZWQgcG9pbnRcbiAgICAgICAgZnJvbSBhIGNlbnRlciAoYXNzdW1lZCAwLDApXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFggY29vcmRpbmF0ZSBvZiBzZWNvbmQgcG9pbnRcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBZIGNvb3JkaW5hdGUgb2Ygc2Vjb25kIHBvaW50XG4gICAgICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gMCwgMCBhbmQgcG9pbnQgaW4gcmFkaWFuc1xuICAgICovXG4gICAgYW5nbGVGcm9tQ2VudGVyOiBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih5LCB4KTtcblx0fSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEaWZmZXJlbmNlXG4gICAgICAgIFxuICAgICAgICBSZXR1cm5zIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gYSBhbmQgYiBieSBzdWJ0cmFjdGluZyBiIGZyb20gYS5cbiAgICAgICAgVXNlZnVsIGluIGNhbGN1YWx0aW5nIHRoZSB6ZXJvLW5vcm1hbGlzZWQgcG9zaXRpb24gb2YgYiwgb3IgdGhlXG4gICAgICAgIGRpZmZlcmVuY2Ugc29tZXRoaW5nIGhhcyB0cmF2ZWxsZWQgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBhXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgYlxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBEaWZmZXJlbmNlIGJldHdlZW4gdmFsdWUgYSBhbmQgdmFsdWUgYlxuICAgICovXG4gICAgZGlmZmVyZW5jZTogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBcdHJldHVybiBiIC0gYTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG5cdCAgICBEaWxhdGVcblx0ICAgIFxuXHQgICAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuXHQgICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG5cdCAgICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG5cdCAgICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiAgICAqL1xuICAgIGRpbGF0ZTogZnVuY3Rpb24gKHByZXZpb3VzLCBjdXJyZW50LCBkaWxhdGlvbikge1xuXHQgICAgcmV0dXJuIHByZXZpb3VzICsgKChjdXJyZW50IC0gcHJldmlvdXMpICogZGlsYXRpb24pO1xuICAgIH0sXG4gICAgICAgIFxuICAgIC8qXG4gICAgICAgIERpc3RhbmNlXG4gICAgICAgIFxuICAgICAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuICgwLDApIGFuZCBwb2ludEEsIHVubGVzcyBwb2ludEJcbiAgICAgICAgaXMgcHJvdmlkZWQsIHRoZW4gd2UgcmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHR3by5cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICAgICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICovXG4gICAgZGlzdGFuY2U6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBwb2ludEEgPT09IFwibnVtYmVyXCIpID8gdGhpcy5kaXN0YW5jZTFEKHBvaW50QSwgcG9pbnRCKSA6IHRoaXMuZGlzdGFuY2UyRChwb2ludEEsIHBvaW50Qik7XG4gICAgfSxcblxuXG4gICAgLypcbiAgICAgICAgRGlzdGFuY2UgMURcbiAgICAgICAgXG4gICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gcG9pbnQgQSBhbmQgcG9pbnQgQlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQb2ludCBBXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogKG9wdGlvbmFsKTogUG9pbnQgQlxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICovXG4gICAgZGlzdGFuY2UxRDogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgXHR2YXIgYklzTnVtID0gKHR5cGVvZiBwb2ludEIgPT09ICdudW1iZXInKSxcbiAgICBcdFx0ZnJvbSA9IGJJc051bSA/IHBvaW50QSA6IDAsXG4gICAgXHRcdHRvID0gYklzTnVtID8gcG9pbnRCIDogcG9pbnRBO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmRpZmZlcmVuY2UoZnJvbSwgdG8pO1xuICAgIH0sXG5cbiAgXG4gICAgLypcbiAgICAgICAgRGlzdGFuY2UgMkRcbiAgICAgICAgXG4gICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gKDAsMCkgYW5kIHBvaW50IEEsIHVubGVzcyBwb2ludCBCXG4gICAgICAgIGlzIHByb3ZpZGVkLCB0aGVuIHdlIHJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IHggYW5kIHkgb2YgcG9pbnQgQVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IChvcHRpb25hbCk6IHggYW5kIHkgb2YgcG9pbnQgQlxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICovXG4gICAgZGlzdGFuY2UyRDogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgIHZhciBiSXNPYmogPSAodHlwZW9mIHBvaW50QiA9PT0gXCJvYmplY3RcIiksXG4gICAgICAgICAgICBmcm9tID0gYklzT2JqID8gcG9pbnRBIDoge3g6IDAsIHk6IDB9LFxuICAgICAgICAgICAgdG8gPSBiSXNPYmogPyBwb2ludEIgOiBwb2ludEEsXG4gICAgICAgICAgICBwb2ludCA9IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmRpZmZlcmVuY2UoZnJvbS54LCB0by54KSxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLmRpZmZlcmVuY2UoZnJvbS55LCB0by55KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5oeXBvdGVudXNlKHBvaW50LngsIHBvaW50LnkpO1xuICAgIH0sXG4gICAgXG4gICAgICAgIFxuICAgIC8qXG4gICAgICAgIEh5cG90ZW51c2VcbiAgICAgICAgXG4gICAgICAgIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBMZW5ndGggb2YgQ1xuICAgICovXG4gICAgaHlwb3RlbnVzZTogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIGEyID0gYSAqIGEsXG4gICAgICAgICAgICBiMiA9IGIgKiBiLFxuICAgICAgICAgICAgYzIgPSBhMiArIGIyO1xuICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoYzIpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgT2Zmc2V0IGJldHdlZW4gdHdvIHBvaW50c1xuICAgICAgICBcbiAgICAgICAgQ2FsY3VsYXRlIHRoZSBhbmdsZSwgZGlzdGFuY2UsIHggeSBhbmQgeiBkaXN0YW5jZXMgYmV0d2VlbiB0d28gZ2l2ZW4gcG9pbnRzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW1BvaW50XTogRmlyc3QgcG9pbnRcbiAgICAgICAgQHBhcmFtIFtQb2ludF06IFNlY29uZCBwb2ludFxuICAgICAgICBAcmV0dXJuIFtPZmZzZXRdOiBEaXN0YW5jZSBtZXRyaWNzIGJldHdlZW4gdHdvIHBvaW50c1xuICAgICovXG4gICAgb2Zmc2V0OiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgdmFyIGFuZ2xlID0gdGhpcy5hbmdsZShwb2ludEEsIHBvaW50QiksXG4gICAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2UyRChwb2ludEEsIHBvaW50QiksXG4gICAgICAgICAgICB4ID0gdGhpcy5kaXN0YW5jZTFEKHBvaW50QS54LCBwb2ludEIueCksXG4gICAgICAgICAgICB5ID0gdGhpcy5kaXN0YW5jZTFEKHBvaW50QS55LCBwb2ludEIueSksXG4gICAgICAgICAgICB6ID0gdGhpcy5kaXN0YW5jZTFEKHBvaW50QS56LCBwb2ludEIueik7XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ldyBPZmZzZXQoYW5nbGUsIGRpc3RhbmNlLCB4LCB5LCB6KTtcbiAgICB9LFxuICAgIFxuICAgIHBvaW50OiBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgICBcdHZhciBwb2ludCA9IHt9O1xuXG4gICAgXHRwb2ludC54ID0gNSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54O1xuICAgIFx0cG9pbnQueSA9IDUgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueTtcblxuXHQgICAgcmV0dXJuIHBvaW50O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICAgICAgXG4gICAgICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gICAgICAgIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICAgICAgICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgaWYgZnVsbCByYW5nZSBnaXZlbiwgdXBwZXIgaWYgbm90XG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuICAgICovXG4gICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uICh2YWx1ZSwgbGltaXRBLCBsaW1pdEIpIHtcbiAgICBcdHZhciBiSXNOdW0gPSAodHlwZW9mIGxpbWl0QiA9PT0gJ251bWJlcicpLFxuICAgIFx0XHRmcm9tID0gYklzTnVtID8gbGltaXRBIDogMCxcbiAgICBcdFx0dG8gPSBiSXNOdW0gPyBsaW1pdEIgOiBsaW1pdEEsXG4gICAgXHRcdHJhbmdlID0gdGhpcy5kaWZmZXJlbmNlKGZyb20sIHRvKSxcbiAgICAgICAgICAgIHByb2dyZXNzID0gKHZhbHVlIC0gZnJvbSkgLyByYW5nZTtcblxuICAgICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuXHQgICAgUmV0dXJuIHJhbmRvbSBudW1iZXIgYmV0d2VlbiByYW5nZVxuXHQgICAgXG5cdCAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cblx0ICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWF4aW11bVxuXHQgICAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuICAgICovXG4gICAgcmFuZG9tOiBmdW5jdGlvbiAobWluLCBtYXgpIHtcblx0ICAgIG1pbiA9IHV0aWxzLmlzTnVtKG1pbikgPyBtaW4gOiAwO1xuXHQgICAgbWF4ID0gdXRpbHMuaXNOdW0obWF4KSA/IG1heCA6IDE7XG5cdCAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgIH0sXG5cblxuICAgIC8qXG4gICAgICAgIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gICAgICAgIFxuICAgICAgICBSZXR1cm4gdmFsdWUgd2l0aGluIHRoZSByYW5nZSBvZiBsb3dlckxpbWl0IGFuZCB1cHBlckxpbWl0XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICovXG4gICAgcmVzdHJpY3RlZDogZnVuY3Rpb24gKHZhbHVlLCBmcm9tLCB0bykge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIGZyb20pLCB0byk7XG4gICAgfSxcbiAgICBcblxuICAgIC8qXG4gICAgICAgIFRpbWUgcmVtYWluaW5nXG4gICAgICAgIFxuICAgICAgICBSZXR1cm4gdGhlIGFtb3VudCBvZiB0aW1lIHJlbWFpbmluZyBmcm9tIHRoZSBwcm9ncmVzcyBhbHJlYWR5IG1hZGVcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgdGhyb3VnaCB0aW1lIGxpbWl0IGJldHdlZW4gMC0xXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRHVyYXRpb25cbiAgICAqL1xuICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uIChwcm9ncmVzcywgZHVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuICgxIC0gcHJvZ3Jlc3MpICogZHVyYXRpb247XG4gICAgfSxcblxuIFxuICAgIC8qXG4gICAgICAgIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICAgICAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlLCBvciB1cHBlciBpZiBsaW1pdDIgbm90IHByb3ZpZGVkXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4gICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gKHByb2dyZXNzLCBsaW1pdEEsIGxpbWl0Qikge1xuICAgIFx0dmFyIGJJc051bSA9ICh0eXBlb2YgbGltaXRCID09PSAnbnVtYmVyJyksXG4gICAgXHRcdGZyb20gPSBiSXNOdW0gPyBsaW1pdEEgOiAwLFxuICAgIFx0XHR0byA9IGJJc051bSA/IGxpbWl0QiA6IGxpbWl0QTtcblxuICAgICAgICByZXR1cm4gKC0gcHJvZ3Jlc3MgKiBmcm9tKSArIChwcm9ncmVzcyAqIHRvKSArIGZyb207IFxuICAgIH0sXG5cblxuICAgIC8qXG4gICAgICAgIEVhc2VkIHZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICAgICAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlLCBvciB1cHBlciBpZiBsaW1pdDIgbm90IHByb3ZpZGVkXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IEVhc2luZyB0byBhcHBseSB0byB2YWx1ZVxuICAgICAgICBAcGFybWEgW251bWJlcl0gKG9wdGlvbmFsKTogQW1wIG1vZGlmaWVyXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiAgICAqL1xuICAgIHZhbHVlRWFzZWQ6IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2luZykge1xuICAgICAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IGVhc2luZyhwcm9ncmVzcyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZShlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG4gICAgfSxcbiAgICBcbiAgICBkZWdyZWVzVG9SYWRpYW5zOiBmdW5jdGlvbiAoZGVncmVlcykge1xuXHQgICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICAgIH0sXG4gICAgXG4gICAgcmFkaWFuc1RvRGVncmVlczogZnVuY3Rpb24gKHJhZGlhbnMpIHtcblx0ICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbiAgICB9XG59O1xuXG5jYWxjID0gbmV3IENhbGMoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjYWxjOyIsIi8qXG4gICAgRWFzaW5nIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgXG4gICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgICAgIFxuICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgIFxuICAgIEJhc2UgZWFzaW5nXG4gICAgICAgIGxpbmVhcjogZGVmYXVsdCwgbm8gaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcbiAgICAgICAgcXVhZFxuICAgICAgICBjdWJpY1xuICAgICAgICBxdWFydFxuICAgICAgICBxdWludFxuICAgICAgICBleHBcbiAgICAgICAgY2lyY1xuICAgICAgICBiYWNrXG4gICAgICAgIGJvdW5jZVxuICAgICAgICBzd2luZ1xuICAgICAgICBzcHJpbmdcbiAgICAgICAgXG4gICAgRWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXJcbiAgICBodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuICAgICAgICBcbiAgICBCZXppZXIgY3VydmUgaW50ZXJwcmV0b3IgY3JlYXRlZCBmcm9tIEdhw6t0YW4gUmVuYXVkZWF1J3Mgb3JpZ2luYWwgQmV6aWVyRWFzaW5nICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi9jYWxjLmpzJyksXG4gXHR1dGlsID0gcmVxdWlyZSgnLi91dGlscy5qcycpLFxuIFx0S0VZID0gcmVxdWlyZSgnLi4vb3B0cy9rZXlzLmpzJyksXG4gXHRkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL29wdHMvZGVmYXVsdHMuanMnKSxcbiBcdEJlemllciA9IHJlcXVpcmUoJy4uL2JpdHMvYmV6aWVyLmpzJyksXG4gXHRFYXNpbmdGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHt9LFxuXHRlYXNpbmdGdW5jdGlvbixcblx0LypcbiAgICBcdEVhY2ggb2YgdGhlc2UgYmFzZSBmdW5jdGlvbnMgaXMgYW4gZWFzZUluXG4gICAgXHRcbiAgICBcdE9uIGluaXQsIHdlIHVzZSBFYXNpbmdGdW5jdGlvbi5taXJyb3IgYW5kIC5yZXZlcnNlIHRvIGdlbmVyYXRlIGVhc2VJbk91dCBhbmRcbiAgICBcdGVhc2VPdXQgZnVuY3Rpb25zIHJlc3BlY3RpdmVseS5cblx0Ki9cblx0YmFzZUluID0ge1xuXHQgICAgLypcbiAgICBcdCAgICBRdWFkIC0gUXVuaXQgZWFzaW5nXG4gICAgXHQgICAgXG4gICAgXHQgICAgR2VuZXJhdGVzIGVhc2luZyBjdXJ2ZSBiYXNlZCBvbiBleHBvbmVudCBvZiB0aW1lXG5cdCAgICAqL1xuICAgICAgICBxdWFkOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgMik7XG4gICAgICAgIH0sXG4gICAgICAgIGN1YmljOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgMyk7XG4gICAgICAgIH0sXG4gICAgICAgIHF1YXJ0OiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgNCk7XG4gICAgICAgIH0sXG4gICAgICAgIHF1aW50OiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgNSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNpcmM6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKTtcbiAgICAgICAgfSxcbiAgICAgICAgYmFjazogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICB2YXIgc3RyZW5ndGggPSAxLjU7XG5cbiAgICAgICAgICAgIHJldHVybiAocHJvZ3Jlc3MgKiBwcm9ncmVzcykgKiAoKHN0cmVuZ3RoICsgMSkgKiBwcm9ncmVzcyAtIHN0cmVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYmFzZU91dCA9IHtcbiAgICAgICAgYm91bmNlOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcblx0XHRcdGlmICgocHJvZ3Jlc3MpIDwgKDEvMi43NSkpIHtcblx0XHRcdFx0cmV0dXJuICg3LjU2MjUqcHJvZ3Jlc3MqcHJvZ3Jlc3MpO1xuXHRcdFx0fSBlbHNlIGlmIChwcm9ncmVzcyA8ICgyLzIuNzUpKSB7XG5cdFx0XHRcdHJldHVybiAoNy41NjI1Kihwcm9ncmVzcy09KDEuNS8yLjc1KSkqcHJvZ3Jlc3MgKyAuNzUpO1xuXHRcdFx0fSBlbHNlIGlmIChwcm9ncmVzcyA8ICgyLjUvMi43NSkpIHtcblx0XHRcdFx0cmV0dXJuICg3LjU2MjUqKHByb2dyZXNzLT0oMi4yNS8yLjc1KSkqcHJvZ3Jlc3MgKyAuOTM3NSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKDcuNTYyNSoocHJvZ3Jlc3MtPSgyLjYyNS8yLjc1KSkqcHJvZ3Jlc3MgKyAuOTg0Mzc1KTtcblx0XHRcdH1cbiAgICAgICAgfSxcblx0ICAgIHN3aW5nOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcblx0XHQgICAgdmFyIHMgPSAxLjcwMTU4O1xuXHRcdCAgICByZXR1cm4gKHByb2dyZXNzIC09IDEpICogcHJvZ3Jlc3MgKiAoKHMgKyAxKSAqIHByb2dyZXNzICsgcykgKyAxO1xuXHQgICAgfSxcblx0ICAgIHNwcmluZzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG5cdCAgICBcdHJldHVybiAxIC0gKE1hdGguY29zKHByb2dyZXNzICogNC41ICogTWF0aC5QSSkgKiBNYXRoLmV4cCgtcHJvZ3Jlc3MgKiA2KSk7XG5cdCAgICB9XG5cdH07XG5cdFxuRWFzaW5nRnVuY3Rpb24ucHJvdG90eXBlID0ge1xuXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBuYW1lZCBlYXNpbmcgZnVuY3Rpb25cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiB0aGUgZWFzaW5nIGZ1bmN0aW9uIHRvIGdldCBcbiAgICAgICAgQHJldHVybiBbZnVuY3Rpb24gfHwgYm9vbGVhbl06IEVhc2luZyBmdW5jdGlvbiBvciBmYWxzZSBpZiBmdW5jdGlvbiB1bmRlZmluZWRcbiAgICAqL1xuXHRnZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0dmFyIGVhc2luZyA9IHRoaXNbbmFtZV07XG5cdFx0XG5cdFx0aWYgKCFlYXNpbmcpIHtcblx0XHRcdHRocm93IG5hbWUgKyBLRVkuRVJST1IuSU5WQUxJRF9FQVNJTkc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVhc2luZztcblx0fSxcblx0XG5cdFxuXHQvKlxuICAgIFx0QWRkIEJlemllciBDdXJ2ZSBlYXNpbmdcbiAgICBcdFxuICAgIFx0QHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIG5ldyBlYXNpbmdcbiAgICBcdEBwYXJtYSBbbnVtYmVyXTogWCBvZiBjb29yZGluYXRlIDFcbiAgICBcdEBwYXJtYSBbbnVtYmVyXTogWSBvZiBjb29yZGluYXRlIDFcbiAgICBcdEBwYXJtYSBbbnVtYmVyXTogWCBvZiBjb29yZGluYXRlIDJcbiAgICBcdEBwYXJtYSBbbnVtYmVyXTogWSBvZiBjb29yZGluYXRlIDJcblx0Ki9cblx0YWRkQmV6aWVyOiBmdW5jdGlvbiAobmFtZSwgeDEsIHkxLCB4MiwgeTIpIHtcblx0XHRpZiAoIXRoaXNbbmFtZV0pIHtcblx0XHRcdHRoaXNbbmFtZV0gPSBuZXcgQmV6aWVyKHgxLCB5MSwgeDIsIHkyKTtcblx0XHR9XG5cdH0sXG5cbiAgICAgIFxuICAgIC8qXG4gICAgICAgIE1pcnJvciBlYXNpbmdcbiAgICAgICAgXG4gICAgICAgIE1pcnJvcnMgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBoZXJlIGZvciBtaXJyb3JpbmcgYW5cbiAgICAgICAgZWFzZUluIGludG8gYW4gZWFzZUluT3V0XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1pcnJvclxuICAgICAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuICAgICovXG5cdG1pcnJvckVhc2luZzogZnVuY3Rpb24gKHByb2dyZXNzLCBtZXRob2QpIHtcbiAgICAgICAgdmFyIGRlbHRhO1xuICAgICAgICBcbiAgICAgICAgaWYgKHByb2dyZXNzIDw9IDAuNSkge1xuICAgICAgICAgICAgZGVsdGEgPSBtZXRob2QoMiAqIHByb2dyZXNzKSAvIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWx0YSA9ICgyIC0gbWV0aG9kKDIgKiAoMSAtIHByb2dyZXNzKSkpIC8gMjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRlbHRhO1xuICAgIH0sXG4gICAgICAgICAgICBcbiAgICAvKlxuICAgICAgICBSZXZlcnNlIGVhc2luZ1xuICAgICAgICBcbiAgICAgICAgUmV2ZXJzZXMgdGhlIG91dHB1dCBvZiB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGZvciBmbGlwcGluZyBlYXNlSW5cbiAgICAgICAgY3VydmUgdG8gYW4gZWFzZU91dC5cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gcmV2ZXJzZVxuICAgICAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuICAgICovXG4gICAgcmV2ZXJzZUVhc2luZzogZnVuY3Rpb24gKHByb2dyZXNzLCBtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBtZXRob2QoMSAtIHByb2dyZXNzKTtcbiAgICB9LFxuICAgIFxuICAgIFxuICAgIC8qXG4gICAgICAgIEFkZCBuZXcgZWFzaW5nIGZ1bmN0aW9uXG4gICAgICAgIFxuICAgICAgICBUYWtlcyBuYW1lIGFuZCBnZW5lcmF0ZXMgbmFtZUluLCBuYW1lT3V0LCBuYW1lSW5PdXQsIGFuZCBlYXNpbmcgZnVuY3Rpb25zIHRvIG1hdGNoXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEJhc2UgbmFtZSBvZiB0aGUgZWFzaW5nIGZ1bmN0aW9ucyB0byBnZW5lcmF0ZVxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogQmFzZSBlYXNpbmcgZnVuY3Rpb24sIGFzIGFuIGVhc2VJbiwgZnJvbSB3aGljaCB0byBnZW5lcmF0ZSBPdXQgYW5kIEluT3V0XG4gICAgKi9cblx0Z2VuZXJhdGU6IGZ1bmN0aW9uIChuYW1lLCBtZXRob2QsIGlzQmFzZUluKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdFx0bmFtZXMgPSB7XG5cdFx0XHRcdGVhc2VJbjogbmFtZSArIEtFWS5FQVNJTkcuSU4sIFxuXHRcdFx0XHRlYXNlT3V0OiBuYW1lICsgS0VZLkVBU0lORy5PVVQsXG5cdFx0XHRcdGVhc2VJbk91dDogbmFtZSArIEtFWS5FQVNJTkcuSU5fT1VUXG5cdFx0XHR9LFxuXHRcdFx0YmFzZU5hbWUgPSBpc0Jhc2VJbiA/IG5hbWVzLmVhc2VJbiA6IG5hbWVzLmVhc2VPdXQsXG5cdFx0XHRyZXZlcnNlTmFtZSA9IGlzQmFzZUluID8gbmFtZXMuZWFzZU91dCA6IG5hbWVzLmVhc2VJbjtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIEluIGZ1bmN0aW9uXG4gICAgICAgIHRoaXNbYmFzZU5hbWVdID0gbWV0aG9kO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgT3V0IGZ1bmN0aW9uIGJ5IHJldmVyc2luZyB0aGUgdHJhbnNpdGlvbiBjdXJ2ZVxuICAgICAgICB0aGlzW3JldmVyc2VOYW1lXSA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYucmV2ZXJzZUVhc2luZyhwcm9ncmVzcywgc2VsZltuYW1lcy5lYXNlSW5dKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgSW5PdXQgZnVuY3Rpb24gYnkgbWlycm9yaW5nIHRoZSB0cmFuc2l0aW9uIGN1cnZlXG4gICAgICAgIHRoaXNbbmFtZXMuZWFzZUluT3V0XSA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYubWlycm9yRWFzaW5nKHByb2dyZXNzLCBzZWxmW25hbWVzLmVhc2VJbl0pO1xuICAgICAgICB9O1xuXHR9LFxuICAgIFxuICAgIFxuICAgIC8qXG4gICAgICAgIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAxIHByb2dyZXNzXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogRWFzaW5nIHRvIHVzZVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IEFtcGxpZnkgcHJvZ3Jlc3Mgb3V0IG9mIHNwZWNpZmllZCByYW5nZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBvZiBlYXNlZCBwcm9ncmVzcyBpbiByYW5nZVxuICAgICovICBcbiAgICB3aXRoaW5SYW5nZTogZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzZSwgZXNjYXBlQW1wKSB7XG4gICAgICAgIHZhciBuZXdQcm9ncmVzcyA9IGNhbGMucmVzdHJpY3RlZChwcm9ncmVzcywgMCwgMSksXG4gICAgICAgICAgICBpblJhbmdlID0gdXRpbC5pc0luUmFuZ2UocHJvZ3Jlc3MsIDAsIDEpO1xuICAgICAgICAgICAgXG4gICAgICAgIGVhc2UgPSBpblJhbmdlID8gZWFzZSA6IEtFWS5FQVNJTkcuTElORUFSO1xuXG4gICAgICAgIGlmICghaW5SYW5nZSkge1xuICAgICAgICAgICAgbmV3UHJvZ3Jlc3MgPSBuZXdQcm9ncmVzcyArIChjYWxjLmRpZmZlcmVuY2UobmV3UHJvZ3Jlc3MsIHByb2dyZXNzKSAqIGVzY2FwZUFtcCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2FsYy52YWx1ZUVhc2VkKG5ld1Byb2dyZXNzLCBmcm9tLCB0bywgdGhpcy5nZXQoZWFzZSkpO1xuICAgIH0sXG4gICAgICAgIFxuICAgIC8qXG4gICAgICAgIExpbmVhciBlYXNpbmcgYWRqdXN0bWVudFxuICAgICAgICBcbiAgICAgICAgVGhlIGRlZmF1bHQgZWFzaW5nIG1ldGhvZCwgbm90IGFkZGVkIHdpdGggLmV4dGVuZCBhcyBpdCBoYXMgbm8gT3V0IG9yIEluT3V0XG4gICAgICAgIHZhcmlhdGlvbi5cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMC0xXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IFVuYWRqdXN0ZWQgcHJvZ3Jlc3NcbiAgICAqL1xuICAgICdsaW5lYXInOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzO1xuICAgIH0sXG4gICAgXG4gICAgJ2Vhc2UnOlx0XHRcdG5ldyBCZXppZXIoLjI1LCAuMSwgLjI1LCAxLjApLFxuICAgICdlYXNlLWluJzpcdFx0bmV3IEJlemllciguNDIsIDAsIDEuMDAsIDEuMCksXG4gICAgJ2Vhc2Utb3V0JzpcdFx0bmV3IEJlemllcigwLCAwLCAuNTgsIDEuMCksXG4gICAgJ2Vhc2UtaW4tb3V0JzpcdG5ldyBCZXppZXIoLjQyLCAwLCAuNTgsIDEuMCksXG4gICAgJ2JhY2staW4nOiBcdFx0bmV3IEJlemllciguNDgsLTAuNDUsLjk5LC43OSksXG4gICAgJ2JhY2stb3V0JzogXHRuZXcgQmV6aWVyKC4xMSwuNywuNiwxLjMxKVxuXG59O1xuXG5lYXNpbmdGdW5jdGlvbiA9IG5ldyBFYXNpbmdGdW5jdGlvbigpO1xuXG5pbml0KCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cblx0Ly8gR2VuZXJhdGUgZWFzaW5nIHdpdGggYmFzZSBmdW5jdGlvbiBvZiBlYXNlSW5cblx0Zm9yICh2YXIga2V5IGluIGJhc2VJbikge1xuXHRcdGlmIChiYXNlSW4uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0ZWFzaW5nRnVuY3Rpb24uZ2VuZXJhdGUoa2V5LCBiYXNlSW5ba2V5XSwgdHJ1ZSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gR2VuZXJhdGUgZWFzaW5nIHdpdGggYmFzZSBmdW5jdGlvbiBvZiBlYXNlT3V0XG5cdGZvciAoa2V5IGluIGJhc2VPdXQpIHtcblx0XHRpZiAoYmFzZU91dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRlYXNpbmdGdW5jdGlvbi5nZW5lcmF0ZShrZXksIGJhc2VPdXRba2V5XSk7XG5cdFx0fVxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZWFzaW5nRnVuY3Rpb247XG4iLCIvKlxuICAgIFJlZHNoaWZ0IGpRdWVyeSBwbHVnaW5cbiAgICBcbiAgICBQcm92aWRlcyBhY2Nlc3MgdG8gLnBsYXksIC5tb3ZlIGFuZCAudHJhY2sgcHJvcGVydGllcyBvbiBhbiBqUXVlcnkgb2JqZWN0LlxuICAgIFVzZXMgdGhhdCBqUXVlcnkgb2JqZWN0IHRvIHN0b3JlIGEgdW5xaXVlIFJlZHNoaWZ0IGluc3RhbmNlLlxuICAgIFxuICAgIC5yZWRzaGlmdCgpIG1ldGhvZCB1c2VkIGZvciBvdGhlciBSZWRzaGlmdCBmdW5jdGlvbnMsIGllICQoJyNlbGVtZW50JykucmVkc2hpZnQoJ3N0b3AnKVxuKi9cbnZhciBLRVkgPSByZXF1aXJlKCcuLi9vcHRzL2tleXMuanMnKSxcbiAgICByUXVlcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgXHR2YXIgUkVEU0hJRlQgPSAncmVkc2hpZnQnLFxuICAgIFx0XHRleGVjdXRlID0gZnVuY3Rpb24gKCRlbGVtZW50LCBhY3Rpb24sIGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICBcdFx0XHQkZWxlbWVudC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBcdFx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgXHRcdFx0XHRcdHRoaXNSZWRzaGlmdCA9ICR0aGlzLmRhdGEoUkVEU0hJRlQpO1xuICAgIFx0XHRcdFx0XG4gICAgXHRcdFx0XHQvLyBJZiB3ZSBoYXZlbid0IHN0b3JlZCBhIFJlZHNoaWZ0IGluc3RhbmNlIG9uIHRoaXMgZWxlbWVudCwgbWFrZSBvbmVcbiAgICBcdFx0XHRcdGlmICghdGhpc1JlZHNoaWZ0KSB7XG4gICAgXHRcdFx0XHRcdHRoaXNSZWRzaGlmdCA9IFJlZHNoaWZ0LmdldCgpO1xuICAgIFx0XHRcdFx0XHR0aGlzUmVkc2hpZnQuZGF0YShLRVkuSlFVRVJZX0VMRU1FTlQsICR0aGlzKTtcbiAgICBcdFx0XHRcdFx0JHRoaXMuZGF0YShSRURTSElGVCwgdGhpc1JlZHNoaWZ0KTtcbiAgICBcdFx0XHRcdH1cblxuICAgIFx0XHRcdFx0dGhpc1JlZHNoaWZ0W2FjdGlvbl0oYXJnMSwgYXJnMiwgYXJnMyk7XG4gICAgXHRcdFx0fSk7XG4gICAgXHRcdH07XG4gICAgXHRcdFxuICAgIFx0JC5mbi5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIFx0XHRleGVjdXRlKHRoaXMsICdwbGF5JywgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xuICAgIFx0XHRcbiAgICBcdFx0cmV0dXJuIHRoaXM7XG4gICAgXHR9O1xuICAgIFx0XG4gICAgXHQkLmZuLm1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgXHRcdGV4ZWN1dGUodGhpcywgJ21vdmUnLCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XG4gICAgXG4gICAgXHRcdHJldHVybiB0aGlzO1xuICAgIFx0fTtcbiAgICBcdFxuICAgIFx0JC5mbi50cmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICBcdFx0ZXhlY3V0ZSh0aGlzLCAndHJhY2snLCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICBcdFx0XG4gICAgXHRcdHJldHVybiB0aGlzO1xuICAgIFx0fTtcbiAgICBcdFxuICAgIFx0JC5mbi5yZWRzaGlmdCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICBcdFx0ZXhlY3V0ZSh0aGlzLCBhY3Rpb24sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICBcdFx0XG4gICAgXHRcdHJldHVybiB0aGlzO1xuICAgIFx0fTtcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjaGVjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAod2luZG93LmpRdWVyeSkge1xuICAgICAgICAgICAgclF1ZXJ5KCk7XG4gICAgICAgIH1cbiAgICB9XG59OyIsInZhciBTaGltID0gZnVuY3Rpb24gKCkge307XG5cblNoaW0ucHJvdG90eXBlID0ge1xuXG4gICAgLypcbiAgICAgICAgaW5kZXhPZiBwb2x5ZmlsbFxuICAgICAgICBcbiAgICAgICAgRm9yIElFOCB0cm9nbG9kaXRlc1xuICAgICAgICBcbiAgICAgICAgVGFrZW4gZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM2MjkxODMvd2h5LWRvZXNudC1pbmRleG9mLXdvcmstb24tYW4tYXJyYXktaWU4XG4gICAgKi9cbiAgICBpbmRleE9mOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gKGVsdCAvKiwgZnJvbSovKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoID4+PiAwLFxuICAgICAgICAgICAgICAgICAgICBmcm9tID0gTnVtYmVyKGFyZ3VtZW50c1sxXSkgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZnJvbSA9IChmcm9tIDwgMCkgPyBNYXRoLmNlaWwoZnJvbSkgOiBNYXRoLmZsb29yKGZyb20pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChmcm9tIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tICs9IGxlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICg7IGZyb20gPCBsZW47IGZyb20rKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbSBpbiB0aGlzICYmIHRoaXNbZnJvbV0gPT09IGVsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZyb207XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgICAgXG4gICAgICAgIEZvciBJRTgvOSBGbGluc3RvbmVzXG4gICAgXG4gICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgXG4gICAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgIFxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgICBcbiAgICAgICAgTUlUIGxpY2Vuc2VcbiAgICAqL1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGFzdFRpbWUgPSAwLFxuICAgICAgICAgICAgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ10sXG4gICAgICAgICAgICB2ZW5kb3JzTGVuZ3RoID0gdmVuZG9ycy5sZW5ndGg7XG4gICAgICAgIFxuICAgICAgICAvLyBDaGVjayBmb3IgcHJlZml4ZWQgaW1wbGVtZW50YXRpb25zXG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9yc0xlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgeCsrKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB0aGVyZSBpcywgZm8gYWJzb2x1dGUgc2hpenpsZSwgbm8gckFGIGltcGxlbWVudGF0aW9ucywgbWFrZSBvbmUgb3V0IG9mIHNldFRpbWVvdXQgYW5kIHB1dHR5XG4gICAgICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpLFxuICAgICAgICAgICAgICAgICAgICBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuc2hpbSA9IG5ldyBTaGltKCk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZlYXR1cmVDaGVjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBzaGltLmluZGV4T2YoKTtcbiAgICAgICAgc2hpbS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcbiAgICB9XG59OyIsIi8qXG4gICAgVXRpbGl0eSBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgY29udmVydEV2ZW50SW50b1BvaW50XG4gICAgZ2V0QWN0dWFsRXZlbnRcbiAgICBoYXNNb3ZlZFxuICAgIGlzTW91c2VFdmVudFxuICAgIGN1cnJlbnRUaW1lXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBLRVkgPSByZXF1aXJlKCcuLi9vcHRzL2tleXMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICAvKlxuICAgICAgICBDb252ZXJ0IGV2ZW50IGludG8gcG9pbnRcbiAgICAgICAgXG4gICAgICAgIFNjcmFwZSB0aGUgeC95IGNvb3JkaW5hdGVzIGZyb20gdGhlIHByb3ZpZGVkIGV2ZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2V2ZW50XTogT3JpZ2luYWwgcG9pbnRlciBldmVudFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiB4L3kgY29vcmRpbmF0ZXMgb2YgZXZlbnRcbiAgICAqL1xuICAgIGNvbnZlcnRFdmVudEludG9Qb2ludDogZnVuY3Rpb24gKGV2ZW50LCBpc1RvdWNoRXZlbnQpIHtcbiAgICBcdHJldHVybiB7XG4gICAgICAgICAgICB4OiBpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuc2NyZWVuWCxcbiAgICAgICAgICAgIHk6IGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5zY3JlZW5ZXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgYWN0dWFsIGV2ZW50XG4gICAgICAgIFxuICAgICAgICBDaGVja3MgZm9yIGpRdWVyeSdzIC5vcmlnaW5hbEV2ZW50IGlmIHByZXNlbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbZXZlbnQgfCBqUXVlcnkgZXZlbnRdXG4gICAgICAgIEByZXR1cm4gW2V2ZW50XTogVGhlIGFjdHVhbCBKUyBldmVudCAgXG4gICAgKi9cbiAgICBnZXRBY3R1YWxFdmVudDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSGFzIHRoZSBwb2ludGVyIG1vdmVkP1xuICAgICAgICBcbiAgICAgICAgQ29tcGFyZXMgdGhlIHR3byBwcm92aWRlZCBwb2ludGVycyBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZXkgYXJlIGRpZmZlcmVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBQb2ludGVyIEFcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBQb2ludGVyIEJcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4gICAgKi9cbiAgICBoYXNNb3ZlZDogZnVuY3Rpb24gKHBvaW50ZXJBLCBwb2ludGVyQikge1xuICAgICAgICByZXR1cm4gKHBvaW50ZXJBLnggIT09IHBvaW50ZXJCLnggfHwgcG9pbnRlckEueSAhPT0gcG9pbnRlckIueSB8fCBwb2ludGVyQS56ICE9PSBwb2ludGVyQi56KTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgZXZlbnQgYSBtb3VzZSBldmVudD9cbiAgICAgICAgXG4gICAgICAgIENoZWNrcyB0aGUgcHJvdmlkZWQgZXZlbnQgdHlwZSBmb3IgdGhlICdtb3VzZScgc3RyaW5nXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEV2ZW50IHR5cGVcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiAnbW91c2UnIGlzIGZvdW5kIGluIHN0cmluZ1xuICAgICovXG4gICAgaXNNb3VzZUV2ZW50OiBmdW5jdGlvbiAoZXZlbnRUeXBlKSB7XG5cdFx0cmV0dXJuIChldmVudFR5cGUuaW5kZXhPZihLRVkuRVZFTlQuTU9VU0UpID4gLTEpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyBldmVudCBhIHRvdWNoIGV2ZW50P1xuICAgICAgICBcbiAgICAgICAgQ2hlY2tzIHRoZSBwcm92aWRlZCBldmVudCBmb3IgdGhlIC50b3VjaGVzIHByb3BcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogRXZlbnRcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiAudG91Y2hlcyBpcyBwcmVzZW50XG4gICAgKi9cbiAgICBpc1RvdWNoRXZlbnQ6IGZ1bmN0aW9uIChlKSB7XG5cdCAgICByZXR1cm4gKGUudG91Y2hlcykgPyB0cnVlIDogZmFsc2U7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhIG51bWJlcj9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiAgICAqL1xuICAgIGlzTnVtOiBmdW5jdGlvbiAobnVtKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIG51bSA9PT0gJ251bWJlcicpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYW4gb2JqZWN0P1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuICAgICovXG4gICAgaXNPYmo6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jyk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0aGlzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiAgICAqL1xuICAgIGlzRnVuYzogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gKHRoaXMudmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nKTsgXG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhIHN0cmluZyA/IFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiAgICAqL1xuICAgIGlzU3RyaW5nOiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpOyBcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGFuIGFycmF5ID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0aGlzLnZhclR5cGUgPT09ICdBcnJheSdcbiAgICAqL1xuICAgIGlzQXJyYXk6IGZ1bmN0aW9uIChhcnIpIHtcblx0ICAgIHJldHVybiAodGhpcy52YXJUeXBlKGFycikgPT09ICdBcnJheScpO1xuICAgIH0sXG4gICAgXG4gICAgaXNJblJhbmdlOiBmdW5jdGlvbiAodmFsdWUsIGZyb20sIHRvKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgPj0gZnJvbSAmJiB2YWx1ZSA8PSB0byk7XG4gICAgfSxcbiAgICBcbiAgICBjb3B5OiBmdW5jdGlvbiAob2JqKSB7XG5cdCAgICB2YXIgbmV3T2JqID0ge307XG5cdCAgICBcblx0ICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcblx0XHQgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHQgICAgaWYgKHRoaXMuaXNPYmoob2JqW2tleV0pKSB7XG5cdFx0XHRcdCAgICBuZXdPYmpba2V5XSA9IHRoaXMuY29weShvYmpba2V5XSk7XG5cdFx0XHQgICAgfSBlbHNlIHtcblx0XHRcdFx0ICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG5cdFx0XHQgICAgfVxuXHRcdCAgICB9XG5cdCAgICB9XG5cdCAgICBcblx0ICAgIHJldHVybiBuZXdPYmo7XG4gICAgfSxcbiAgICBcbiAgICBtZXJnZTogZnVuY3Rpb24gKGJhc2UsIG92ZXJ3cml0ZSkge1xuXHQgICAgdmFyIG5ld09iaiA9IHRoaXMuY29weShiYXNlKTtcblx0ICAgIFxuXHQgICAgZm9yICh2YXIga2V5IGluIG92ZXJ3cml0ZSkge1xuXHRcdCAgICBpZiAob3ZlcndyaXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdCAgICBpZiAodGhpcy5pc09iaihvdmVyd3JpdGVba2V5XSkpIHtcblx0XHRcdFx0ICAgIG5ld09ialtrZXldID0gdGhpcy5tZXJnZShuZXdPYmpba2V5XSwgb3ZlcndyaXRlW2tleV0pO1xuXHRcdFx0ICAgIH0gZWxzZSB7XG5cdFx0XHRcdCAgICBuZXdPYmpba2V5XSA9IG92ZXJ3cml0ZVtrZXldO1xuXHRcdFx0ICAgIH1cblx0XHQgICAgfVxuXHQgICAgfVxuXHQgICAgXG5cdCAgICByZXR1cm4gbmV3T2JqO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiBwcm9ncmVzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IE1heCByYW5nZVxuICAgICAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4gICAgKi9cbiAgICBzdGVwUHJvZ3Jlc3M6IGZ1bmN0aW9uICh2YWx1ZSwgbWF4LCBzdGVwcykge1xuICAgICAgICB2YXIgc3RlcHBlZCA9IDAsXG4gICAgICAgICAgICBzZWdtZW50ID0gbWF4IC8gc3RlcHM7XG4gICAgICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgICAgICAgICAgc3RlcHBlZCA9IGkgKiBzZWdtZW50O1xuXG4gICAgICAgICAgICBpZiAoKGkgKyAxKSAqIHNlZ21lbnQgPiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gc3RlcHBlZDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgR2V0IHZhciB0eXBlIGFzIHN0cmluZ1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW3N0cmluZ106IFJldHVybnMsIGZvciBpbnN0YW5jZSAnT2JqZWN0JyBpZiBbb2JqZWN0IE9iamVjdF1cbiAgICAqL1xuICAgIHZhclR5cGU6IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuXHQgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiAgICAqL1xuICAgIGN1cnJlbnRUaW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG4gICAgXG59OyJdfQ==
