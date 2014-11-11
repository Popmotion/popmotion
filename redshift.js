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
        ActionManager.activate(this.token);
        Chronos.start();
        return this;
    },
    
    
    /*
        Stop specified action
    */
    stop: function () {
        ActionManager.deactivate(this.token);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvYWN0aW9uLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvYmV6aWVyLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvb2Zmc2V0LmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvcG9pbnQuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvYml0cy9wb2ludGVyLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvdmFsdWUuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvYml0cy92ZWxvY2l0eS5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy9ib2JzL2FjdGlvbk1hbmFnZXIuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvYm9icy9jaHJvbm9zLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JvYnMvZXZlbnRzLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JvYnMvaGlzdG9yeS5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy9ib2JzL3BvaW50ZXJUcmFja2VyLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JvYnMvcHJvY2Vzcy5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy9ib2JzL3J1Yml4LmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JvYnMvdG9rZW4uanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvb3B0cy9kZWZhdWx0cy5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy9vcHRzL2tleXMuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvcmVkc2hpZnQuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvdXRpbHMvY2FsYy5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy91dGlscy9lYXNpbmdGdW5jdGlvbnMuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvdXRpbHMvclF1ZXJ5LmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL3V0aWxzL3NoaW1zLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL3V0aWxzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1YUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBLRVkgPSByZXF1aXJlKCcuLi9vcHRzL2tleXMuanMnKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vdXRpbHMvY2FsYy5qcycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbHMuanMnKSxcbiAgICBUb2tlbiA9IHJlcXVpcmUoJy4uL2JvYnMvdG9rZW4uanMnKSxcbiAgICB0b2tlbiA9IG5ldyBUb2tlbigpLFxuICAgIFZhbHVlID0gcmVxdWlyZSgnLi92YWx1ZS5qcycpLFxuICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge30sXG4gICAgQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZWQgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW4uZ2VuZXJhdGUoKTtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgICAgIHRoaXMudmFsdWVzID0ge307XG4gICAgICAgIHRoaXMub3JpZ2luID0ge307XG4gICAgICAgIHRoaXMucGxheWxpc3QgPSBbXTtcbiAgICB9LFxuICAgIGRlZmF1bHRzID0ge1xuICAgIFxuICAgICAgICAvLyBJcyB0aGlzIGFjdGlvbiBhY3RpdmVcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgXG4gICAgICAgIC8vIFdoYXQgdG8gdXNlIHRvIHByb2Nlc3MgdGhpcyBhY2l0b25cbiAgICAgICAgbGluazogS0VZLkxJTksuVElNRSxcbiAgICAgICAgXG4gICAgICAgIC8vIE11bHRpcGx5IG91dHB1dCB2YWx1ZSBieVxuICAgICAgICBhbXA6IDEsXG4gICAgICAgIFxuICAgICAgICAvLyBNdWx0aXBseSBvdXRwdXQgdmFsdWUgb3V0c2lkZSBtaW4vbWF4IGJ5XG4gICAgICAgIGVzY2FwZUFtcDogMCxcbiAgICAgICAgXG4gICAgICAgIC8vIERlbGF5IHRoaXMgYWN0aW9uIGJ5IHggbXNcbiAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgIFxuICAgICAgICAvLyBUaW1lIG9mIGFuaW1hdGlvbiAoaWYgYW5pbWF0aW5nKSBpbiBtc1xuICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICBcbiAgICAgICAgLy8gRWFzZSBhbmltYXRpb25cbiAgICAgICAgZWFzZTogS0VZLkVBU0lORy5RVUFEX0lOX09VVCxcbiAgICAgICAgXG4gICAgICAgIC8vIEFwcGx5IHRoaXMgTWF0aCBmdW5jdGlvbiB0byBvdXRwdXQgdmFsdWVcbiAgICAgICAgbWF0aDogdW5kZWZpbmVkLFxuICAgICAgICBcbiAgICAgICAgLy8gRGl2aWRlIGFuaW1hdGlvbiBpbnRvIHRoaXMgbWFueSBzdGVwc1xuICAgICAgICBzdGVwczogMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFxuICAgICAgICB0aW1lRGlsYXRpb246IDEsXG4gICAgICAgIFxuICAgICAgICBwbGF5aGVhZDogMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFxuICAgICAgICBwb2ludGVyT2Zmc2V0OiB1bmRlZmluZWQsXG4gICAgICAgIFxuICAgICAgICAvLyBDdXJyZW50IHByb2dyZXNzXG4gICAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgICBcbiAgICAgICAgLy8gVGltZSBlbGFwc2VkXG4gICAgICAgIGVsYXBzZWQ6IDAsXG4gICAgICAgIFxuICAgICAgICAvLyBMb29wIGFuaW1hdGlvbiB4IG51bWJlciBvZiB0aW1lcyAodHJ1ZSBmb3IgRVRFUk5BTExZKVxuICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgXG4gICAgICAgIC8vIE51bWJlciBvZiB0aW1lcyBhbmltYXRpb24gaGFzIGxvb3BlZFxuICAgICAgICBsb29wQ291bnQ6IDAsXG4gICAgICAgIFxuICAgICAgICAvLyBQbGF5IGFuaW1hdGlvbiBhbmQgcmV2ZXJzZSB4IG51bWJlciBvZiB0aW1lcyAodHJ1ZSBmb3IgZm9yZXZlcilcbiAgICAgICAgeW95bzogZmFsc2UsXG4gICAgICAgIFxuICAgICAgICAvLyBOdW1iZXIgb2YgdGltZXMgYW5pbWF0aW9uIGhhcyB5b3lvZWRcbiAgICAgICAgeW95b0NvdW50OiAwLFxuICAgICAgICBcbiAgICAgICAgLy8gUnVuIHRoaXMgY2FsbGJhY2sgb24gYWN0aW9uIHN0YXJ0XG4gICAgICAgIG9uU3RhcnQ6IGNhbGxiYWNrLFxuICAgICAgICBcbiAgICAgICAgLy8gUnVuIHRoaXMgb24gYWN0aW9uIGVuZFxuICAgICAgICBvbkVuZDogY2FsbGJhY2ssXG4gICAgICAgIFxuICAgICAgICAvLyBSdW4gdGhpcyBldmVyeSBmcmFtZVxuICAgICAgICBvbkZyYW1lOiBjYWxsYmFjayxcbiAgICAgICAgXG4gICAgICAgIC8vIFJ1biB0aGlzIHdoZW4gYWN0aW9uIGNoYW5nZXNcbiAgICAgICAgb25DaGFuZ2U6IGNhbGxiYWNrXG4gICAgfTtcblxuLypcbiAgICBTZXQgQWN0aW9uIG9wdGlvbnNcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IFVzZXItZGVmaW5lZCBvcHRpb25zXG4qL1xuQWN0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIC8vIExvb3AgdGhyb3VnaCBzdGFuZGFyZCBvcHRpb25zIGFuZCBhc3NpZ25cbiAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgaWYgKGRlZmF1bHRzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gSWYgdXNlciBoYXMgc2V0IHRoaXMgb3B0aW9uXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gb3B0aW9uc1trZXldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBPciBzZXQgdG8gZGVmYXVsdFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBkZWZhdWx0c1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHRoaXMucGxheWxpc3QgPSBvcHRpb25zLnBsYXlsaXN0IHx8IHRoaXMucGxheWxpc3QgfHwgW107XG4gICAgdGhpcy5zY29wZSA9IG9wdGlvbnMuc2NvcGUgfHwgdGhpcy5zY29wZSB8fCB0aGlzO1xuXG4gICAgLy8gU2V0IHRoZSB2YWx1ZXNcbiAgICB0aGlzLnNldFZhbHVlcyhvcHRpb25zLnZhbHVlcyk7XG59O1xuIFxuXG4vKlxuICAgIFNldCBWYWx1ZXNcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IFVzZXItZGVmaW5lZCB2YWx1ZXNcbiovICAgXG5BY3Rpb24ucHJvdG90eXBlLnNldFZhbHVlcyA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAvLyBDcmVhdGUgb3IgdXBkYXRlIFZhbHVlIG9iamVjdHMgZm9yIGVhY2ggZGVmaW5lZCB2YWx1ZVxuICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlc1trZXldKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNba2V5XS51cGRhdGUodmFsdWVzW2tleV0sIHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1trZXldID0gbmV3IFZhbHVlKHZhbHVlc1trZXldLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyBIYW5kbGUgc3BlY2lhbCB2YWx1ZXNcblxuICAgIGlmICh0aGlzLnZhbHVlcy5hbmdsZSkge1xuICAgIFx0dGhpcy52YWx1ZXMueCA9IHRoaXMudmFsdWVzLnggfHwgbmV3IFZhbHVlKDAsIHRoaXMpO1xuICAgICAgICB0aGlzLnZhbHVlcy55ID0gdGhpcy52YWx1ZXMueSB8fCBuZXcgVmFsdWUoMCwgdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIG9yaWdpbnNcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy52YWx1ZXMpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luW2tleV0gPSB0aGlzLnZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKlxuICAgIFJlc2V0IHZhbHVlc1xuKi9cbkFjdGlvbi5wcm90b3R5cGUucmVzZXRWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMudmFsdWVzKSB7XG4gICAgICAgIHRoaXMudmFsdWVzW2tleV0uY3VycmVudCA9IHRoaXMudmFsdWVzW2tleV0uZnJvbTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gICAgdGhpcy5lbGFwc2VkID0gMDtcbn07XG5cbi8qXG4gICAgUmV2ZXJzZSB2YWx1ZXNcbiovXG5BY3Rpb24ucHJvdG90eXBlLnJldmVyc2VWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBrZXksIHRvLCBmcm9tO1xuXHRcblx0dGhpcy5wcm9ncmVzcyA9IGNhbGMuZGlmZmVyZW5jZSh0aGlzLnByb2dyZXNzLCAxKTtcblx0dGhpcy5lbGFwc2VkID0gY2FsYy5kaWZmZXJlbmNlKHRoaXMuZWxhcHNlZCwgdGhpcy5kdXJhdGlvbik7XG5cbiAgICBmb3IgKGtleSBpbiB0aGlzLnZhbHVlcykge1xuXHQgICAgaWYgKHRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0ICAgIFx0dG8gPSB0aGlzLnZhbHVlc1trZXldLnRvO1xuXHQgICAgXHRmcm9tID0gdGhpcy52YWx1ZXNba2V5XS5mcm9tO1xuXHQgICAgXHRcblx0ICAgIFx0dGhpcy52YWx1ZXNba2V5XS50byA9IGZyb207XG5cdFx0ICAgIHRoaXMudmFsdWVzW2tleV0uZnJvbSA9IHRvO1xuXHQgICAgfVxuICAgIH1cbn07XG5cbi8qXG4gICAgU3RhcnQgdGhlIGFjdGlvblxuKi9cbkFjdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRlZCA9IHV0aWxzLmN1cnJlbnRUaW1lKCkgKyB0aGlzLmRlbGF5O1xuICAgIHRoaXMuZnJhbWVzdGFtcCA9IHRoaXMuc3RhcnRlZDtcbiAgICB0aGlzLmZpcnN0RnJhbWUgPSB0cnVlO1xufTtcblxuLypcbiAgICBTdG9wIHRoZSBhY3Rpb25cbiovXG5BY3Rpb24ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBBY3Rpb247IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuLypcblx0QmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgICAgICBcbiAgICBHYcOrdGFuIFJlbmF1ZGVhdSdzIG9yaWdpbmFsIEJlemllckVhc2luZ1xuICAgIFlvdSdyZSBhIGhlcm9cbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBuZXd0b25JdGVyYXRpb25zID0gOCxcbiAgXHRuZXd0b25NaW5TbG9wZSA9IDAuMDAxLFxuICBcdHN1YmRpdmlzaW9uUHJlY2lzaW9uID0gMC4wMDAwMDAxLFxuICBcdHN1YmRpdmlzaW9uTWF4SXRlcmF0aW9ucyA9IDEwLFxuICBcdGtTcGxpbmVUYWJsZVNpemUgPSAxMSxcblx0a1NhbXBsZVN0ZXBTaXplID0gMS4wIC8gKGtTcGxpbmVUYWJsZVNpemUgLSAxLjApLFxuXHRmbG9hdDMyQXJyYXlTdXBwb3J0ZWQgPSAnRmxvYXQzMkFycmF5JyBpbiBnbG9iYWwsXG5cblx0QmV6aWVyID0gZnVuY3Rpb24gKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcblx0XHR0aGlzLnByZWNvbXB1dGUobVgxLCBtWTEsIG1YMiwgbVkyKTtcblxuICAgIFx0cmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgXHRcdHJldHVybiBzZWxmLmNhbGNCZXppZXIoc2VsZi5nZXRURm9yWCh0LCBtWDEsIG1YMiksIG1ZMSwgbVkyKTtcbiAgICBcdH1cbiAgICB9O1xuICAgIFxuQmV6aWVyLnByb3RvdHlwZSA9IHtcblxuXHRwcmVjb21wdXRlOiBmdW5jdGlvbiAobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG5cdFx0dGhpcy5tU2FtcGxlVmFsdWVzID0gZmxvYXQzMkFycmF5U3VwcG9ydGVkID8gbmV3IEZsb2F0MzJBcnJheShrU3BsaW5lVGFibGVTaXplKSA6IG5ldyBBcnJheShrU3BsaW5lVGFibGVTaXplKTtcblx0XHR0aGlzLmNhbGNTYW1wbGVWYWx1ZXMobVgxLCBtWDIpO1xuXHR9LFxuXHRcblx0Y2FsY1NhbXBsZVZhbHVlczogZnVuY3Rpb24gKG1YMSwgbVgyKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBrU3BsaW5lVGFibGVTaXplOyArK2kpIHtcblx0XHRcdHRoaXMubVNhbXBsZVZhbHVlc1tpXSA9IHRoaXMuY2FsY0JlemllcihpICoga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG5cdFx0fVxuXHR9LFxuXG5cdG5ld3RvblJhcGhzb25JdGVyYXRlOiBmdW5jdGlvbiAodCwgZ3Vlc3MsIG1YMSwgbVgyKSB7XG5cdFx0dmFyIGkgPSAwLFxuXHRcdFx0Y3VycmVudFNsb3BlLFxuXHRcdFx0Y3VycmVudFg7XG5cdFx0XG5cdFx0Zm9yIChpOyBpIDwgbmV3dG9uSXRlcmF0aW9uczsgKytpKSB7XG5cdFx0XHRjdXJyZW50U2xvcGUgPSB0aGlzLmdldFNsb3BlKGd1ZXNzLCBtWDEsIG1YMik7XG5cdFx0XHRcblx0XHRcdGlmIChjdXJyZW50U2xvcGUgIT09IDAuMCkge1xuXHRcdFx0XHRjdXJyZW50WCA9IHRoaXMuY2FsY0JlemllcihndWVzcywgbVgxLCBtWDIpIC0gdDtcblx0XHRcdFx0Z3Vlc3MgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0O1xuXHR9LFxuXHRcblx0YmluYXJ5U3ViZGl2aWRlOiBmdW5jdGlvbiAodCwgYUEsIGFCLCBtWDEsIG1YMikge1xuXHRcdHZhciBpID0gMCxcblx0XHRcdGN1cnJlbnRYLFxuXHRcdFx0Y3VycmVudFQ7XG5cdFx0XHRcblx0XHRkbyB7XG5cdFx0XHRjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuXHRcdFx0Y3VycmVudFggPSB0aGlzLmNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIHQ7XG5cdFx0XHRcblx0XHRcdGlmIChjdXJyZW50WCA+IDAuMCkge1xuXHRcdFx0XHRhQiA9IGN1cnJlbnRUO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YUEgPSBjdXJyZW50VDtcblx0XHRcdH1cblx0XHR9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBzdWJkaXZpc2lvblByZWNpc2lvbiAmJiArK2kgPCBzdWJkaXZpc2lvbk1heEl0ZXJhdGlvbnMpO1xuXHRcdFxuXHRcdHJldHVybiBjdXJyZW50VDtcblx0fSxcblxuXHRnZXRURm9yWDogZnVuY3Rpb24gKHQsIG1YMSwgbVgyKSB7XG5cdFx0dmFyIGludGVydmFsU3RhcnQgPSAwLjAsXG5cdFx0XHRjdXJyZW50U2FtcGxlID0gMSxcblx0XHRcdGxhc3RTYW1wbGUgPSBrU3BsaW5lVGFibGVTaXplIC0gMSxcblx0XHRcdGRpc3QsXG5cdFx0XHRndWVzcyxcblx0XHRcdGluaXRpYWxTbG9wZTtcblx0XHRcdFxuXHRcdGZvciAoaW50ZXJ2YWxTdGFydDsgY3VycmVudFNhbXBsZSAhPSBsYXN0U2FtcGxlICYmIHRoaXMubVNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSB0OyArK2N1cnJlbnRTYW1wbGUpIHtcblx0XHRcdGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xuXHRcdH1cblx0XHRcblx0XHQtLWN1cnJlbnRTYW1wbGU7XG5cblx0XHRkaXN0ID0gKHQgLSB0aGlzLm1TYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gLyAodGhpcy5tU2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHRoaXMubVNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkpO1xuXHRcdFxuXHRcdGd1ZXNzID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBrU2FtcGxlU3RlcFNpemU7XG5cdFx0aW5pdGlhbFNsb3BlID0gdGhpcy5nZXRTbG9wZShndWVzcywgbVgxLCBtWDIpO1xuXG5cdFx0aWYgKGluaXRpYWxTbG9wZSA9PT0gbmV3dG9uTWluU2xvcGUpIHtcblx0XHRcdHQgPSB0aGlzLm5ld3RvblJhcGhzb25JdGVyYXRlKHQsIGd1ZXNzLCBtWDEsIG1YMik7XG5cdFx0fSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT0gMC4wKSB7XG5cdFx0XHR0ID0gZ3Vlc3M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHQgPSB0aGlzLmJpbmFyeVN1YmRpdmlkZSh0LCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG5cdFx0fVxuXHRcdHJldHVybiB0O1xuXHR9LFxuXG5cdGdldFNsb3BlOiBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG5cdFx0cmV0dXJuIDMuMCAqIHRoaXMuQShhMSwgYTIpICogdCAqIHQgKyAyLjAgKiB0aGlzLkIoYTEsIGEyKSAqIHQgKyB0aGlzLkMoYTEpO1xuXHR9LFxuXG5cdGNhbGNCZXppZXI6IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcblx0XHRyZXR1cm4gKCh0aGlzLkEoYTEsIGEyKSAqIHQgKyB0aGlzLkIoYTEsIGEyKSkgKiB0ICsgdGhpcy5DKGExKSkgKiB0O1xuXHR9LFxuXHRcblx0QTogZnVuY3Rpb24gKGExLCBhMikge1xuXHRcdHJldHVybiAxLjAgLSAzLjAgKiBhMiArIDMuMCAqIGExO1xuXHR9LFxuXHRcblx0QjogZnVuY3Rpb24gKGExLCBhMikge1xuXHRcdHJldHVybiAzLjAgKiBhMiAtIDYuMCAqIGExO1xuXHR9LFxuXHRcblx0QzogZnVuY3Rpb24gKGExKSB7XG5cdFx0cmV0dXJuIDMuMCAqIGExO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJlemllcjtcbn0pLmNhbGwodGhpcyx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pIiwiLypcbiAgICBPZmZzZXQgY2xhc3MgfCBleHRlbmRzIFBvaW50XG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIERlZmluZXMgdGhlIHJlbGF0aXZlIG9mZnNldCBmcm9tIGFub3RoZXIgcG9pbnRcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIFBvaW50ID0gcmVxdWlyZSgnLi9wb2ludC5qcycpLFxuICAgIE9mZnNldCA9IGZ1bmN0aW9uIChhbmdsZSwgZGlzdGFuY2UsIHgsIHksIHopIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlIHx8IDA7XG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZSB8fCAwO1xuICAgICAgICB0aGlzLnNldFBvaW50KHgsIHksIHopO1xuICAgIH07XG4gICAgXG5PZmZzZXQucHJvdG90eXBlID0gbmV3IFBvaW50KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2Zmc2V0OyIsIi8qXG4gICAgUG9pbnQgY2xhc3NcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgRGVmaW5lcyBhIDNEIHBvaW50IGluIHNwYWNlXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXIgfHwgUG9pbnRdOiBFaXRoZXIgWCBheGlzIHZhbHVlIG9yIFBvaW50IG9iamVjdFxuICAgIEBwYXJhbSBbbnVtYmVyXTogWSBheGlzXG4gICAgQHBhcmFtIFtudW1iZXJdOiBaIGF4aXNcbiAgICBAcmV0dXJuIFtQb2ludF1cbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIFBvaW50ID0gZnVuY3Rpb24gKHgsIHksIHopIHtcbiAgICAgICAgdGhpcy5zZXRQb2ludCh4LCB5LCB6KTtcbiAgICB9O1xuXG5Qb2ludC5wcm90b3R5cGUgPSB7XG4gICAgc2V0UG9pbnQ6IGZ1bmN0aW9uICh4LCB5LCB6KSB7XG4gICAgICAgIHZhciB4SXNPYmogPSAodHlwZW9mIHggPT09ICdvYmplY3QnKTtcblxuICAgICAgICB0aGlzLnggPSB4SXNPYmogPyB4LnggfHwgMCA6IHggfHwgMDtcbiAgICAgICAgdGhpcy55ID0geElzT2JqID8geC55IHx8IDAgOiB5IHx8IDA7XG4gICAgICAgIHRoaXMueiA9IHhJc09iaiA/IHgueiB8fCAwIDogeiB8fCAwO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi4vdXRpbHMvY2FsYy5qcycpLFxuICAgIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vb3B0cy9kZWZhdWx0cy5qcycpLFxuICAgIHV0aWwgPSByZXF1aXJlKCcuLi91dGlscy91dGlscy5qcycpLFxuICAgIEhpc3RvcnkgPSByZXF1aXJlKCcuLi9ib2JzL2hpc3RvcnkuanMnKSxcbiAgICBQb2ludCA9IHJlcXVpcmUoJy4vcG9pbnQuanMnKSxcbiAgICBPZmZzZXQgPSByZXF1aXJlKCcuL29mZnNldC5qcycpLFxuICAgIFZlbG9jaXR5ID0gcmVxdWlyZSgnLi92ZWxvY2l0eS5qcycpLFxuICAgIFBvaW50ZXJDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge30sXG4gICAgcG9pbnRlckNvbnRyb2xsZXI7XG5cblBvaW50ZXJDb250cm9sbGVyLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICBjdXJyZW50OiBuZXcgUG9pbnQoKSxcbiAgICBoaXN0b3J5OiB1bmRlZmluZWQsXG4gICAgaW5hY3RpdmVGcmFtZXM6IDAsXG4gICAgaXNEcmFnOiBmYWxzZSxcbiAgICBpc1RvdWNoOiBmYWxzZSxcbiAgICBvZmZzZXQ6IG5ldyBPZmZzZXQoKSxcbiAgICBvcmlnaW46IG5ldyBQb2ludCgpLFxuICAgIHZlbG9jaXR5OiBuZXcgVmVsb2NpdHkoKSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJbml0YWxpc2UgdGhlIHBvaW50ZXJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogQ29vcmRpbmF0ZXMgb2YgaW5pdCBwb2ludFxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dOiBUcnVlIGlmIG1vdXNlIGlzIHBvaW50ZXJcbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogVHJ1ZSBpZiB0aGlzIGlzIGEgZHJhZyBldmVudFxuICAgICovXG4gICAgaW5pdDogZnVuY3Rpb24gKHBvaW50LCBpc1RvdWNoLCBpc0RyYWcpIHtcbiAgICAgICAgcG9pbnQgPSBuZXcgUG9pbnQocG9pbnQpO1xuXG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBIaXN0b3J5KHBvaW50KTtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gcG9pbnQ7XG4gICAgICAgIHRoaXMub3JpZ2luID0gcG9pbnQ7XG4gICAgICAgIHRoaXMuaXNUb3VjaCA9IGlzVG91Y2g7XG4gICAgICAgIHRoaXMuaXNEcmFnID0gaXNEcmFnO1xuICAgICAgICB0aGlzLm9mZnNldCA9IG5ldyBPZmZzZXQoKTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWxvY2l0eSgpO1xuICAgIH0sXG4gICAgXG4gICAgXG4gICAgLypcbiAgICAgICAgUG9pbnRlciBpbnB1dCBoYXMgbW92ZWQsIGFkZCB0byBoaXN0b3J5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IENvb3JkaW5hdGVzIG9mIG5ldyBwb2ludFxuICAgICovXG4gICAgbW92ZWQ6IGZ1bmN0aW9uIChwb2ludCkge1xuICAgICAgICBwb2ludCA9IG5ldyBQb2ludChwb2ludCk7XG4gICAgICAgIHRoaXMuaGlzdG9yeS5hZGQocG9pbnQpO1xuICAgIH0sXG4gICAgXG4gICAgXG4gICAgLypcbiAgICAgICAgQ2hlY2sgZm9yIG1vdmVtZW50IGFuZCB1cGRhdGUgcG9pbnRlciBvYmplY3QncyBwcm9wZXJ0aWVzIG9uIG5ldyBmcmFtZVxuICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsYXRlc3RQb2ludGVyID0gdGhpcy5oaXN0b3J5LmdldExhdGVzdCgpLFxuICAgICAgICAgICAgcG9pbnRlckFjdGl2ZSA9IHV0aWwuaGFzTW92ZWQodGhpcy5jdXJyZW50LCBsYXRlc3RQb2ludGVyKSxcbiAgICAgICAgICAgIG1vdmVtZW50O1xuICAgICAgICBcbiAgICAgICAgLy8gUG9pbnRlciBoYXMgbW92ZWQgYmV0d2VlbiBmcmFtZXMsIHVwZGF0ZSBwb2ludGVyIHByb3BzIFxuICAgICAgICBpZiAocG9pbnRlckFjdGl2ZSkge1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdmVsb2NpdHkgZnJvbSBsYXN0IHBvc2l0aW9uXG4gICAgICAgICAgICBtb3ZlbWVudCA9IGNhbGMub2Zmc2V0KHRoaXMuY3VycmVudCwgbGF0ZXN0UG9pbnRlcik7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlbG9jaXR5KFxuICAgICAgICAgICAgICAgIG1vdmVtZW50LmFuZ2xlLFxuICAgICAgICAgICAgICAgIG1vdmVtZW50LmRpc3RhbmNlLFxuICAgICAgICAgICAgICAgIG1vdmVtZW50LngsXG4gICAgICAgICAgICAgICAgbW92ZW1lbnQueSxcbiAgICAgICAgICAgICAgICBtb3ZlbWVudC56XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgY3VycmVudCBjb29yZGluYXRlc1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gbGF0ZXN0UG9pbnRlcjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gUmVzZXQgaW5hY3RpdmUgZnJhbWUgY291bnRcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgIC8vIFBvaW50ZXIgaXMgaW5hY3RpdmUgYW5kIGZyYW1lIGxpbWl0IHJlYWNoZWRcbiAgICAgICAgfSBlbHNlIGlmICghcG9pbnRlckFjdGl2ZSAmJiB0aGlzLmluYWN0aXZlRnJhbWVzID49IGRlZmF1bHRzLnBvaW50ZXIubWF4SW5hY3RpdmVGcmFtZXMpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gU2V0IHNwZWVkIHRvIHplcm9cbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVsb2NpdHkoKTtcblxuICAgICAgICAvLyBQb2ludGVyIGlzIGluYWN0aXZlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJbmNyZW1lbnQgaW5hY3RpdmUgZnJhbWUgY291bnRlclxuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcysrO1xuICAgICAgICB9XG4gICAgfVxufTtcblxucG9pbnRlckNvbnRyb2xsZXIgPSBuZXcgUG9pbnRlckNvbnRyb2xsZXIoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwb2ludGVyQ29udHJvbGxlcjsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbHMuanMnKSxcblx0Y2FsYyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhbGMuanMnKSxcblx0cHJpb3JpdHlQcm9wcyA9IFsnY3VycmVudCcsICd0bycsICdmcm9tJywgJ3N0YXJ0J10sXG5cdFxuXHQvKlxuICAgICAgICBJcyB0aGlzIGtleSBhIHByaW9yaXR5IHByb3BlcnR5P1xuICAgICAgICBcbiAgICAgICAgUHJpb3JpdHkgcHJvcGVydGllcyBhcmUgaGFuZGxlZCBzZXBlcmF0ZWx5IGFuZCBiZWZvcmUgYWxsIHRoZSBvdGhlciBwcm9wc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBUaGUga2V5IHRvIGxvb2sgdXAgaW4gb3VyIHByaW9yaXR5IGxpc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IElzIHRoaXMgYSBwcmlvcml0eT9cblx0Ki9cblx0aXNQcmlvcml0eSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICBcdHJldHVybiAocHJpb3JpdHlQcm9wcy5pbmRleE9mKGtleSkgPiAtMSk7XG5cdH0sXG5cdFxuXHQvKlxuICAgIFx0Q2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gICAgXHRcbiAgICBcdFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgICBcdHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICAgIFx0XG4gICAgXHRAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgXHRAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBcdEByZXR1cm4gW251bWJlcl06IE5ldyB2YWx1ZVxuXHQqL1xuXHRjYWxjUmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgY3VycmVudCkge1xuICAgIFx0dmFyIG5ld1ZhbHVlID0gY3VycmVudCxcbiAgICBcdCAgICBlcXVhdGlvbiA9IHZhbHVlLnNwbGl0KCc9JyksXG4gICAgXHQgICAgb3BlcmF0b3IgPSBlcXVhdGlvblswXSxcbiAgICBcdCAgICBudW0gPSBwYXJzZUZsb2F0KGVxdWF0aW9uWzFdKTtcblxuICAgIFx0c3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBcdGNhc2UgJysnOlxuICAgICAgICBcdCAgICBuZXdWYWx1ZSA9IGN1cnJlbnQgKyBudW07XG4gICAgICAgIFx0ICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgIFx0ICAgIG5ld1ZhbHVlID0gY3VycmVudCAtIG51bTtcbiAgICAgICAgXHQgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgXHQgICAgbmV3VmFsdWUgPSBjdXJyZW50ICogbnVtO1xuICAgICAgICBcdCAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy8nOlxuICAgICAgICBcdCAgICBuZXdWYWx1ZSA9IGN1cnJlbnQgLyBudW07XG4gICAgICAgIFx0ICAgIGJyZWFrO1xuICAgIFx0fVxuXG4gICAgXHRyZXR1cm4gbmV3VmFsdWU7XG5cdH0sXG5cdFxuXHQvKlxuICAgIFx0UGFyc2UgdmFsdWVcbiAgICBcdFxuICAgIFx0UGFyc2VzIHRoZSB2YWx1ZSwgd2hldGhlciBpdHMgYSBudW1iZXIsIHN0cmluZyBvciBmdW5jdGlvbi5cbiAgICBcdElmIGEgbnVtYmVyLCByZXR1cm4uXG4gICAgXHRJZiBhIHN0cmluZywgaXQncyBhIHJlbGF0aXZlIGFzc2lnbm1lbnQgc28gY2FsY3VsYXRlIG5ldyB0YXJnZXQgYmFzZWQgb24gaXRzIGNvbnRlbnRzXG4gICAgXHRJZiBhIGZ1bmN0aW9uLCBmaXJlIGl0IHdpdGggYWN0aW9uLmRhdGEgYW5kIGN1cnJlbnQgdmFsdWUgYXMgYXJndW1lbnRzXG4gICAgXHRcbiAgICBcdEBwYXJhbSBbbnVtYmVyL3N0cmluZy9mdW5jdGlvbl06IEN1cnJlbnQgdmFsdWVcbiAgICBcdEBwYXJhbSBbb2JqZWN0XTogRGF0YSBvZiBwYXJlbnQgYWN0aW9uXG4gICAgXHRAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcblx0Ki9cblx0cGFyc2UgPSBmdW5jdGlvbiAodmFsdWUsIGRhdGEsIGN1cnJlbnQpIHtcblx0ICAgIHJldHVybiAodXRpbHMuaXNGdW5jKHZhbHVlKSkgPyB2YWx1ZShkYXRhLCBjdXJyZW50KSA6IHZhbHVlO1xuXHR9LFxuXHRcblx0LypcbiAgICBcdFZhbHVlIG9iamVjdFxuICAgIFx0XG4gICAgXHRPbiBpbml0LCBydW4gdXBkYXRlIHdpdGggaXNOZXdWYWx1ZSA9IHRydWVcbiAgICBcdFxuICAgIFx0QHBhcmFtIFtudW1iZXIvc3RyaW5nL2Z1bmN0aW9uL29iamVjdF06IE5ldyB2YWx1ZVxuICAgIFx0QHBhcmFtIFtBY2l0b25dOiBQYXJlbnQgYWN0aW9uXG5cdCovXG5cdFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBhY3Rpb24pIHtcblx0XHR0aGlzLnVwZGF0ZSh2YWx1ZSwgYWN0aW9uLCB0cnVlKTtcblx0fSxcblx0ZGVmYXVsdHMgPSB7XG5cdCAgICAvLyBBY3R1YWwgdmFsdWVcbiAgICBcdGN1cnJlbnQ6IDAsXG4gICAgXHRzdGFydDogMCxcblx0XG4gICAgXHQvLyBDdXJyZW50IHJhbmdlIGZvciB2YWx1ZVxuICAgIFx0ZnJvbTogMCxcbiAgICBcdHRvOiAxLFxuXHRcbiAgICBcdC8vIE1heGltdW0gcmFuZ2UgZm9yIHZhbHVlXG4gICAgXHRtaW46IDAsXG4gICAgXHRtYXg6IDEsXG4gICAgXHRcbiAgICBcdC8vIFNwZWVkIGZvciAubW92ZSgpLCBpbiB4cHNcbiAgICBcdHNwZWVkOiAwLFxuICAgIFx0ZnJpY3Rpb246IDAsXG4gICAgXHR0aHJ1c3Q6IDAsXG4gICAgXHRcbiAgICBcdC8vIE9wdGlvbnNcbiAgICBcdGR1cmF0aW9uOiA0MDAsXG4gICAgXHRkZWxheTogMCxcbiAgICBcdGVhc2U6ICdlYXNlLWluLW91dCcsXG4gICAgXHRsaW5rOiBudWxsLCAvLyB1c2UgdGhlIHByb2dyZXNzIG9mIHRoaXMgdmFsdWVcbiAgICBcdG1hdGg6IG51bGwsXG4gICAgXHRzdGVwczogMCxcbiAgICBcdFxuICAgIFx0Ly8gQW1wIGZvciBpbnNpZGUgYW5kIG91dHNpZGUgcmFuZ2UgKGllIHZhbHVlICogYW1wKVxuICAgIFx0YW1wOiAwLFxuICAgIFx0ZXNjYXBlQW1wOiAwXG5cdH07XG5cblx0XG4vKlxuXHRVcGRhdGUgdGhlIHZhbHVlIHByb3BlcnRpZXNcblx0XG5cdEBwYXJhbSBbb2JqZWN0IHx8IG51bWJlcl06IFVzZXItZGVmaW5lZCB2YWx1ZVxuXHRAcGFyYW0gW29iamVjdF06IEFjdGlvbiB0aGlzIHZhbHVlIGJlbG9uZ3MgdG9cblx0QHBhcmFtIFtib29sZWFuXSAob3B0aW9uYWwpOiBJcyB0aGlzIGEgbmV3IHZhbHVlIGNvbnN0cnVjdFxuKi9cblZhbHVlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAodmFsdWUsIGFjdGlvbiwgaXNOZXdWYWx1ZSkge1xuXHR2YXIgZGF0YSA9IChhY3Rpb24pID8gYWN0aW9uLmRhdGEgOiB7fTtcblxuXHQvLyBJZiB2YWx1ZSBpcyBqdXN0IGEgbnVtYmVyXG5cdGlmICh1dGlscy5pc051bSh2YWx1ZSkgfHwgdXRpbHMuaXNGdW5jKHZhbHVlKSB8fCB1dGlscy5pc1N0cmluZyh2YWx1ZSkpIHtcblx0ICAgIHRoaXMuY3VycmVudCA9IChpc05ld1ZhbHVlKSA/IDAgOiB0aGlzLmN1cnJlbnQ7XG5cdFx0dGhpcy50byA9IHBhcnNlKHZhbHVlLCBkYXRhLCB0aGlzLmN1cnJlbnQpO1xuXG5cdC8vIE9yIGlmIGl0IGlzIGFuIG9iamVjdFxuXHR9IGVsc2Uge1xuXHQgICAgXG5cdCAgICAvLyBJZiBhIHN0YXJ0IHZhbHVlIGV4aXN0cyBhbmQgdGhpcyBpcyBhIG5ldyBWYWx1ZSwgYXNzaWduIGl0IGFzIGN1cnJlbnRcblx0ICAgIGlmIChpc05ld1ZhbHVlICYmIHZhbHVlLmhhc093blByb3BlcnR5KCdzdGFydCcpKSB7XG4gICAgXHQgICAgdGhpcy5jdXJyZW50ID0gcGFyc2UodmFsdWUuc3RhcnQsIGRhdGEpO1xuXHQgICAgXG5cdCAgICAvLyBPciB3ZSd2ZSBleHBsaWNpdGx5IHNldCBjdXJyZW50XG5cdCAgICB9IGVsc2UgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KCdjdXJyZW50JykpIHtcbiAgICBcdCAgICB0aGlzLmN1cnJlbnQgPSBwYXJzZSh2YWx1ZS5jdXJyZW50LCBkYXRhKTtcblx0ICAgIFxuXHQgICAgLy8gT3Igd2UndmUgbm90IGRlZmluZWQgY3VycmVudCBhbmQgdGhpcyBpcyBhIG5ldyB2YWx1ZVxuXHQgICAgfSBlbHNlIGlmIChpc05ld1ZhbHVlKSB7XG4gICAgXHQgICAgdGhpcy5jdXJyZW50ID0gZGVmYXVsdHMuY3VycmVudDtcblx0ICAgIH1cblx0ICAgIFxuXHQgICAgdGhpcy50byA9IHBhcnNlKHZhbHVlLnRvLCBkYXRhLCB0aGlzLmN1cnJlbnQpO1xuXHR9XG5cdFxuICAgIC8vIExvb3AgdGhyb3VnaCBwZXJtaXR0ZWQgdmFsdWVzXG4gICAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRzKSB7XG5cdCAgICBpZiAoZGVmYXVsdHMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhaXNQcmlvcml0eShrZXkpKSB7XG5cblx0XHQgICAgLy8gSWYgdXNlciBoYXMgc3VibWl0dGVkIGEgcHJvcGVydHlcblx0XHQgICAgaWYgKHV0aWxzLmlzT2JqKHZhbHVlKSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gcGFyc2UodmFsdWVba2V5XSwgZGF0YSwgdGhpcy5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIE9yIHRoZXJlJ3MgYSBkZWZhdWx0IHNldCBvbiB0aGUgYWN0aW9uXG5cdFx0ICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmooYWN0aW9uKSAmJiBhY3Rpb24uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHBhcnNlKGFjdGlvbltrZXldLCBkYXRhLCB0aGlzLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBpZiB0aGlzIGlzIG91ciBmaXJzdCB0aW1lIChob25lc3QganVkZ2UpLCBzZXQgYXMgdGhlIGRlZmF1bHQuXG5cdFx0ICAgIH0gZWxzZSBpZiAoaXNOZXdWYWx1ZSkge1xuICAgIFx0XHQgICAgdGhpc1trZXldID0gZGVmYXVsdHNba2V5XTtcblx0XHQgICAgfVxuXHRcdCAgICBcblx0ICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gQXNzaWduICdmcm9tJyBhcyBjdXJyZW50XG4gICAgdGhpcy5mcm9tID0gdGhpcy5jdXJyZW50O1xuICAgIFxuICAgIC8vIEZpbmFsbHkgY2hlY2sgaWYgdG8gd2FzIGdpdmVuIGFzIGEgc3RyaW5nLCBhbmQgZmlndXJlIG91dCB0aGUgcmVsYXRpdmUgdmFsdWVcbiAgICBpZiAodXRpbHMuaXNTdHJpbmcodGhpcy50bykpIHtcbiAgICAgICAgdGhpcy50byA9IGNhbGNSZWxhdGl2ZVZhbHVlKHRoaXMudG8sIHRoaXMuY3VycmVudCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWYWx1ZTsiLCIvKlxuICAgIFZlbG9jaXR5IGNsYXNzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgb2YgdHJhdmVsXG4gICAgQHBhcmFtIFtudW1iZXJdOiBTcGVlZCBpbiBwaXhlbHMgcGVyIGZyYW1lIGFsb25nIHRoYXQgYW5nbGVcbiAgICBAcGFyYW0gW251bWJlcl06IFggYXhpcyBzcGVlZFxuICAgIEBwYXJhbSBbbnVtYmVyXTogWSBheGlzIHNwZWVkXG4gICAgQHBhcmFtIFtudW1iZXJdOiBaIGF4aXMgc3BlZWRcbiAgICBAcGFyYW0gW251bWJlcl06IFNwZWVkIGFyb3VuZCBvZmZzZXQgY2VudGVyXG4gICAgQHJldHVybiBbVmVsb2NpdHldXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBWZWxvY2l0eSA9IGZ1bmN0aW9uIChhbmdsZSwgc3BlZWQsIHhTcGVlZCwgeVNwZWVkLCB6U3BlZWQsIG9yYml0YWxTcGVlZCkge1xuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGUgfHwgMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkIHx8IDA7XG4gICAgICAgIHRoaXMueCA9IHhTcGVlZCB8fCAwO1xuICAgICAgICB0aGlzLnkgPSB5U3BlZWQgfHwgMDtcbiAgICAgICAgdGhpcy56ID0gelNwZWVkIHx8IDA7XG4gICAgICAgIHRoaXMub3JiaXRhbCA9IG9yYml0YWxTcGVlZCB8fCAwO1xuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0gVmVsb2NpdHk7IiwiLypcblx0QWN0aW9uTWFuYWdlclxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgS0VZID0gcmVxdWlyZSgnLi4vb3B0cy9rZXlzLmpzJyksXG5cdFBvaW50ZXJUcmFja2VyID0gcmVxdWlyZSgnLi9wb2ludGVyVHJhY2tlci5qcycpLFxuXHRBY3Rpb24gPSByZXF1aXJlKCcuLi9iaXRzL2FjdGlvbi5qcycpLFxuXHR1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL3V0aWxzLmpzJyksXG5cdEFjdGlvbk1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7fSxcblx0YWN0aW9uTWFuYWdlcixcblx0YWxsQWN0aW9ucyA9IFtdLFxuXHRhY3RpdmVUb2tlbnMgPSBbXSxcblx0ZGVhY3RpdmF0ZVF1ZXVlID0gW10sXG5cdGJhc2VBY3Rpb25zID0ge307XG5cbkFjdGlvbk1hbmFnZXIucHJvdG90eXBlID0ge1xuXHRcblx0Lypcblx0XHRDcmVhdGUgYWN0aW9uXG5cdFx0XG5cdFx0QHJldHVybiBbQWN0aW9uXVxuXHQqL1xuXHRjcmVhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgYWN0aW9uID0gbmV3IEFjdGlvbigpO1xuXG5cdFx0dGhpcy5yZWdpc3RlcihhY3Rpb24pO1xuXG5cdFx0cmV0dXJuIGFjdGlvbjtcblx0fSxcblx0XG5cdC8qXG5cdFx0Q2hhbmdlIGFjdGlvblxuXHRcdFxuXHRcdEBwYXJhbSBbVG9rZW5dOiBUb2tlbiBmb3IgdGhlIGFjdGlvblxuXHRcdEBwYXJhbSBbb2JqZWN0XTogVmFsdWUgcHJvcGVydGllc1xuXHRcdEBwYXJhbSBbb2JqZWN0XTogQWN0aW9uIG9wdGlvbnNcblx0Ki9cblx0Y2hhbmdlOiBmdW5jdGlvbiAodG9rZW4sIGNoYW5nZXMsIGUpIHtcblx0XHR2YXIgYWN0aW9uID0gdGhpcy5nZXQodG9rZW4pO1xuICAgICAgICBcbiAgICAgICAgaWYgKGNoYW5nZXMubGluayA9PT0gS0VZLkxJTksuUE9JTlRFUikge1xuXHRcdFx0Y2hhbmdlcy5wb2ludGVyT2Zmc2V0ID0gUG9pbnRlclRyYWNrZXIuc3RhcnQoZSk7XG4gICAgICAgIH1cblx0XHRcdFxuXHRcdGFjdGlvbi5zZXQoY2hhbmdlcyk7XG5cdH0sXG5cdFxuXHQvKlxuXHRcdERlZmluZSBhIGJhc2UgYWN0aW9uXG5cdFx0XG5cdFx0Q2FuIGJlIGNhbGxlZCBsYXRlciB3aXRoIC5wbGF5KClcblx0XHRcblx0XHRAcGFyYW0gW29iamVjdF1cblx0Ki9cblx0ZGVmaW5lOiBmdW5jdGlvbiAoYWN0aW9ucykge1xuXHRcdHZhciBrZXksXG5cdFx0XHRjaGFpbixcblx0XHRcdGJhc2VBY3Rpb24gPSB7fTtcblxuXHRcdGZvciAoa2V5IGluIGFjdGlvbnMpIHtcblx0XHRcdGlmIChhY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0aWYgKGJhc2VBY3Rpb25zW2tleV0gJiYgIWFjdGlvbnNba2V5XS5mb3JjZU92ZXJyaWRlKSB7XG5cdFx0XHRcdFx0dGhyb3cgS0VZLkVSUk9SLkFDVElPTl9FWElTVFM7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2hhaW4gPSBrZXkuc3BsaXQoJy4nKTtcblxuXHRcdFx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gaW5oZXJpdGVuY2UgY2hhaW4sIG1lcmdlXG5cdFx0XHRcdFx0Ly8gVE9ETzogbXVsdGlsYXllcmVkIGluaGVyaXRlbmNlP1xuXHRcdFx0XHRcdGlmIChjaGFpbi5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRpZiAoYmFzZUFjdGlvbnNbY2hhaW5bMF1dKSB7XG5cdFx0XHRcdFx0XHRcdGJhc2VBY3Rpb25zW2tleV0gPSB1dGlscy5tZXJnZShiYXNlQWN0aW9uc1tjaGFpblswXV0sIGFjdGlvbnNba2V5XSk7XG5cdFx0XHRcdFx0XHQvLyBpZiB3ZSBjYW4ndCBmaW5kIGFjdGlvblxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhyb3cgS0VZLkVSUk9SLk5PX0FDVElPTjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBFbHNlIGRpcmVjdGx5IGNvcHlcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YmFzZUFjdGlvbnNba2V5XSA9IGFjdGlvbnNba2V5XTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdFxuXHRcblx0LypcbiAgICBcdENyZWF0ZSBiYXNlIGFjdGlvblxuICAgIFx0XG4gICAgXHRAcGFyYW0gW3N0cmluZyB8fCBhcnJheSB8fCBvYmplY3RdOlxuICAgIFx0ICAgIFN0cmluZzogTmFtZSBvciBzcGFjZS1kZWxpbWl0ZWQgcGxheWxpc3Qgb2YgYWN0aW9uc1xuICAgIFx0ICAgIEFycmF5OiBQbGF5bGlzdCBvZiBhY3Rpb25zXG4gICAgXHQgICAgT2JqZWN0OiBSYXcgYWN0aW9uXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogQWN0aW9uIG92ZXJyaWRlXG5cdCovXG5cdGNyZWF0ZUJhc2U6IGZ1bmN0aW9uIChkZWZzLCBvdmVycmlkZSkge1xuICAgIFx0dmFyIGJhc2VBY3Rpb24gPSB7fSxcbiAgICBcdCAgICBhY3Rpb25MaXN0ID0gW107XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgc3RyYWlnaHQgYWN0aW9uXG4gICAgICAgIGlmICh1dGlscy5pc09iaihkZWZzKSkge1xuICAgICAgICAgICAgYmFzZUFjdGlvbiA9IGRlZnM7XG4gICAgICAgICAgICBiYXNlQWN0aW9uLnBsYXlsaXN0ID0gW107XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gVGhlc2UgYXJlIHByZXZpb3VzbHkgZGVmaW5lZCBhY3Rpb25zXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBDb21tYS1kZWxpbWl0ZWQgc3RyaW5nIG9yIHNpbmdsZSBhY3Rpb24gbmFtZVxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRlZnMpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uTGlzdCA9IGRlZnMuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQXJyYXkgb2YgYWN0aW9uIG5hbWVzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdGlvbkxpc3QgPSBkZWZzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBiYXNlQWN0aW9uID0gdGhpcy5nZXREZWZpbmVkKGFjdGlvbkxpc3RbMF0pO1xuICAgICAgICAgICAgYmFzZUFjdGlvbi5wbGF5bGlzdCA9IGFjdGlvbkxpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIEFwcGx5IG92ZXJyaWRlcyBpZiBwcmVzZW50XG4gICAgICAgIGlmICh1dGlscy5pc09iaihvdmVycmlkZSkpIHtcbiAgICAgICAgICAgIGJhc2VBY3Rpb24gPSB0aGlzLm1lcmdlKGJhc2VBY3Rpb24sIG92ZXJyaWRlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGJhc2VBY3Rpb247XG5cdH0sXG5cdFxuXHRcblx0LypcbiAgICBcdEdldCBkZWZpbmVkIGFjdGlvblxuICAgIFx0XG4gICAgXHRAcGFyYW0gW3N0cmluZ106IFRoZSBuYW1lIG9mIHRoZSBwcmVkZWZpbmVkIGFjdGlvblxuXHQqL1xuXHRnZXREZWZpbmVkOiBmdW5jdGlvbiAoa2V5KSB7XG5cdCAgICByZXR1cm4gdGhpcy5jb3B5KGJhc2VBY3Rpb25zW2tleV0pO1xuXHR9LFxuXHRcblx0LypcbiAgICBcdENvcHkgYW4gYWN0aW9uXG5cdCovXG5cdGNvcHk6IGZ1bmN0aW9uIChhY3Rpb24pIHtcblx0ICAgIHZhciBuZXdBY3Rpb24gPSB7fTtcblxuICAgIFx0Zm9yICh2YXIga2V5IGluIGFjdGlvbikge1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3ZhbHVlcycpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3QWN0aW9uW2tleV0gPSBhY3Rpb25ba2V5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdBY3Rpb24udmFsdWVzID0gdXRpbHMuY29weShhY3Rpb24udmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cdCAgICB9XG5cdCAgICBcblx0ICAgIHJldHVybiBuZXdBY3Rpb247XG5cdH0sXG5cdFxuXHQvKlxuICAgIFx0TWVyZ2UgYW4gYWN0aW9uXG5cdCovXG5cdG1lcmdlOiBmdW5jdGlvbiAoYWN0aW9uLCBvdmVycmlkZSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb3ZlcnJpZGUpIHtcbiAgICAgICAgICAgIGlmIChvdmVycmlkZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3ZhbHVlcycpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uW2tleV0gPSBvdmVycmlkZVtrZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi52YWx1ZXMgPSB1dGlscy5tZXJnZShhY3Rpb24udmFsdWVzLCBvdmVycmlkZS52YWx1ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcblx0fSxcblx0XG5cdFxuXHQvKlxuXHRcdFJlZ2lzdGVyIGFjdGlvblxuXHRcdFxuXHRcdEBwYXJhbSBbQWN0aW9uXTogQWRkIGFjdGlvbiB0byBzdG9yYWdlIGFycmF5XG5cdCovXG5cdHJlZ2lzdGVyOiBmdW5jdGlvbiAoYWN0aW9uKSB7XG5cdFx0YWxsQWN0aW9uc1thY3Rpb24udG9rZW5dID0gYWN0aW9uO1xuXHR9LFxuXHRcblx0XG5cdC8qXG5cdFx0R2V0IHRoZSBzcGVjaWZpZWQgYWN0aW9uXG5cdFx0XG5cdFx0QHBhcmFtIFtUb2tlbl06IFRva2VuXG5cdFx0QHJldHVybiBbQWN0aW9uIHx8IGJvb2xlYW5dOiBBY3Rpb24gd2l0aCBzcGVjaWZpZWQgdG9rZW4sIGZhbHNlIGlmIG5vbmUgZm91bmRcblx0Ki9cblx0Z2V0OiBmdW5jdGlvbiAodG9rZW4pIHtcblx0XHRyZXR1cm4gYWxsQWN0aW9uc1t0b2tlbl0gfHwgZmFsc2U7XG5cdH0sXG5cdFxuXHRcblx0LypcbiAgICBcdEdldCB0b2tlbnMgb2YgYWxsIGFjdGl2ZSBhY3Rpb25zXG4gICAgXHRcbiAgICBcdEByZXR1cm4gW2FycmF5XTogQXJyYXkgb2YgYWN0aXZlIHRva2Vuc1xuXHQqL1xuXHRnZXRBY3RpdmVUb2tlbnM6IGZ1bmN0aW9uICgpIHtcbiAgICBcdHJldHVybiBhY3RpdmVUb2tlbnM7XG5cdH0sXG5cdFxuXHRcblx0LypcbiAgICBcdEFjdGl2YXRlIHNwZWNpZmllZCBhY3Rpb25cbiAgICBcdFxuICAgIFx0QWN0aXZhdGVzIGFjdGlvbiBhbmQgYWRkcyB0byBhY3RpdmVUb2tlbnMgYXJyYXlcbiAgICBcdFxuICAgIFx0QHBhcmFtIFtUb2tlbl06IFRva2VuXG5cdCovXG5cdGFjdGl2YXRlOiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICBcdHZhciBhY3Rpb24gPSB0aGlzLmdldCh0b2tlbiksXG5cdCAgICAgICAgaW5kZXggPSBhY3RpdmVUb2tlbnMuaW5kZXhPZih0b2tlbiksXG5cdCAgICAgICAgZGVhY3RpdmF0ZUluZGV4ID0gZGVhY3RpdmF0ZVF1ZXVlLmluZGV4T2YodG9rZW4pO1xuICAgIFx0XG4gICAgXHRpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICBhY3RpdmVUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgZnJvbSBkZWFjdGl2YXRlIHF1ZXVlIGlmIGl0J3MgYmVlbiBwbGFjZWQgdGhlcmVcbiAgICAgICAgaWYgKGRlYWN0aXZhdGVJbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBkZWFjdGl2YXRlUXVldWUuc3BsaWNlKGRlYWN0aXZhdGVJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICBcdFxuICAgIFx0YWN0aW9uLnN0YXJ0KCk7XG5cdH0sXG5cdFxuXHRcblx0LypcbiAgICBcdERlYWN0aXZhdGUgc3BlY2lmaWVkIGFjdGlvblxuICAgIFx0XG4gICAgXHRBY3RpdmF0ZXMgYWN0aW9uIGFuZCByZW1vdmVzIGZyb20gYWN0aXZlVG9rZW5zIGFycmF5XG4gICAgXHRcbiAgICBcdEBwYXJhbSBbVG9rZW5dOiBUb2tlblxuXHQqL1xuXHRkZWFjdGl2YXRlOiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICBcdHZhciBhY3Rpb24gPSB0aGlzLmdldCh0b2tlbiksXG5cdCAgICAgICAgaW5kZXggPSBhY3RpdmVUb2tlbnMuaW5kZXhPZih0b2tlbik7XG5cblx0ICAgIGFjdGlvbi5zdG9wKCk7XG5cdCAgICBcbiAgICBcdGlmIChpbmRleCA+IC0xKSB7XG4gICAgXHQgICAgYWN0aXZlVG9rZW5zLnNwbGljZShpbmRleCwgMSk7XG4gICAgXHR9XG5cdH0sXG5cdFxuXHQvKlxuICAgIFx0SXMgYWN0aW9uIGFjdGl2ZVxuXHQqL1xuXHRpc0FjdGl2ZTogZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgXHRyZXR1cm4gKGFjdGl2ZVRva2Vucy5pbmRleE9mKHRva2VuKSA+IC0xKTtcblx0fSxcblx0XG5cdC8qXG4gICAgXHRQdXJnZSBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgXHRcbiAgICBcdExvb3BzIHRocm91Z2ggdGhlIGRlYWN0aXZhdGUgcXVldWUgYW5kIGRlY2lkZXMgd2hldGhlciB0byBkZWFjdGl2YXRlXG4gICAgXHRvciBzd2FwIGFjdGlvbiBwYXJhbWV0ZXJzIHdpdGggdGhlIG5leHQgaW4gdGhlIGFjdGlvbidzIHBsYXlMaXN0XG4gICAgXHRcbiAgICBcdFdlIHVzZSBhIGRlYWN0aXZhdGUgcXVldWUgcmF0aGVyIHRoYW4gZGVhY3RpdmF0ZSBhcyBzb29uIGFzIHdlIHByb2Nlc3MgaXRcbiAgICBcdGJlY2F1c2UgaWYgd2UgbWFuaXB1bGF0ZSB0aGUgbGlzdCBvZiBhY3RpdmF0ZWQgQWN0aW9ucyB3aGlsZSBpdCdzIGJlaW5nXG4gICAgXHRsb29wZWQgdGhyb3VnaCwgd2VsbCB5b3UgY2FuIG9ubHkgaW1hZ2luZSB0aGUgZnVuIHRoYXQgY2F1c2VzLlxuXHQqL1xuXHRwdXJnZTogZnVuY3Rpb24gKCkge1xuXHQgICAgdmFyIHF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblx0ICAgIFxuXHQgICAgLy8gUnVuIHRocm91Z2ggYWxsIHF1ZXVlZCBhY3Rpb25zIGFuZCBkZWNpZGUgd2hhdCB0byBkbyBuZXh0XG5cdCAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlTGVuZ3RoOyArK2kpIHtcblx0ICAgICAgICBpZiAodXRpbHMuaXNOdW0oZGVhY3RpdmF0ZVF1ZXVlW2ldKSkge1xuICAgIFx0ICAgICAgICB0aGlzLmRlY2lkZU5leHQoZGVhY3RpdmF0ZVF1ZXVlW2ldKTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cbiAgICAgICAgLy8gQ2xlYXIgZGVhY3RpdmF0ZVF1ZXVlXG5cdFx0ZGVhY3RpdmF0ZVF1ZXVlID0gW107XG5cdH0sXG5cdFxuXHQvKlxuICAgIFx0RGVjaWRlIHdoYXQgdG8gZG8gd2l0aCBhbiBhY3Rpb25cbiAgICBcdFxuICAgIFx0VGFrZXMgYW4gYWN0aW9uIGFuZCBkZWNpZGVzLCBiYXNlZCBvbiBpdHMgcGxheWxpc3QgYW5kIGxvb3AgcHJvcGVydGllcywgXG4gICAgXHR3aGF0IHRvIGRvIHdpdGggaXQgbmV4dC5cbiAgICBcdFxuICAgIFx0QHBhcmFtIFtUb2tlbl06IEFjdGlvbiB0b2tlblxuXHQqL1xuXHRkZWNpZGVOZXh0OiBmdW5jdGlvbiAodG9rZW4pIHtcblx0XHR2YXIgbmV4dHMgPSBbJ2xvb3AnLCAneW95bycsICdwbGF5TmV4dCddLFxuXHRcdFx0bnVtID0gbmV4dHMubGVuZ3RoLFxuXHRcdFx0aGFzRnV0dXJlID0gZmFsc2U7XG5cdFxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbnVtOyArK2kpIHtcblx0XHRcdGlmICh0aGlzW25leHRzW2ldXSh0b2tlbikpIHtcblx0XHRcdFx0aGFzRnV0dXJlID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVx0XG5cdFxuICAgIFx0aWYgKCFoYXNGdXR1cmUpIHtcbiAgICAgICAgXHR0aGlzLmRlYWN0aXZhdGUodG9rZW4pO1xuICAgIFx0fVxuXHR9LFxuXHRcblx0XG5cdC8qXG4gICAgXHRQbGF5IG5leHQgaW4gcGxheWxpc3QsIGlmIGV4aXN0c1xuICAgIFx0XG4gICAgXHRAcGFyYW0gW1Rva2VuXTogQWN0aW9uIHRva2VuXG4gICAgXHRAcmV0dXJuIFtib29sZWFuXTogU3VjY2Vzc1xuXHQqL1xuXHRwbGF5TmV4dDogZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgXHR2YXIgaGFzUGxheWVkTmV4dCA9IGZhbHNlLFxuICAgIFx0ICAgIGFjdGlvbiA9IHRoaXMuZ2V0KHRva2VuKSxcbiAgICBcdCAgICBwbGF5bGlzdExlbmd0aCA9IGFjdGlvbi5wbGF5bGlzdCA/IGFjdGlvbi5wbGF5bGlzdC5sZW5ndGggOiAwLFxuICAgIFx0ICAgIHBsYXloZWFkID0gYWN0aW9uLnBsYXloZWFkLFxuICAgIFx0ICAgIG5leHRBY3Rpb247XG5cbiAgICAgICAgLy8gQ2hlY2sgd2UgaGF2ZSBhIHBsYXlsaXN0IGFuZCB0aGF0IHRoaXMgaXMgYW4gYW5pbWF0aW9uXG4gICAgICAgIC8vIFRPRE86IE1heWJlIG1ha2UgYSBzZXQgb2YgcHJvcGVydGllcyBvbiB0aGUgcnViaXggdGhhdCBzYXlzIGFsbG93UGxheWxpc3Q6IHRydWVcbiAgICBcdGlmIChwbGF5bGlzdExlbmd0aCAmJiBhY3Rpb24ubGluayA9PT0gS0VZLkxJTksuVElNRSkge1xuICAgIFx0ICAgICsrcGxheWhlYWQ7XG5cbiAgICBcdCAgICBpZiAocGxheWhlYWQgPCBwbGF5bGlzdExlbmd0aCkge1xuICAgIFx0ICAgICAgICBuZXh0QWN0aW9uID0gdGhpcy5nZXREZWZpbmVkKGFjdGlvbi5wbGF5bGlzdFtwbGF5aGVhZF0pO1xuICAgIFx0ICAgICAgICBuZXh0QWN0aW9uLnBsYXloZWFkID0gcGxheWhlYWQ7XG4gICAgXHQgICAgICAgIFxuICAgICAgICBcdCAgICB0aGlzLmNoYW5nZSh0b2tlbiwgbmV4dEFjdGlvbik7XG4gICAgICAgIFx0ICAgIHRoaXMuYWN0aXZhdGUodG9rZW4pO1xuXG4gICAgICAgIFx0ICAgIGhhc1BsYXllZE5leHQgPSB0cnVlO1xuICAgIFx0ICAgIH1cbiAgICBcdH1cblxuICAgIFx0cmV0dXJuIGhhc1BsYXllZE5leHQ7XG5cdH0sXG5cdFxuXHRcblx0LypcbiAgICBcdExvb3AgY3VycmVudCBhY3Rpb24sIGlmIHdlJ3JlIHRoYXQgd2F5IGluY2xpbmVkXG4gICAgXHRcbiAgICBcdEBwYXJhbSBbVG9rZW5dOiBBY3Rpb24gdG9rZW5cbiAgICBcdEByZXR1cm4gW2Jvb2xlYW5dOiBTdWNjZXNzXG5cdCovXG5cdGxvb3A6IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIFx0dmFyIGhhc0xvb3BlZCA9IGZhbHNlLFxuICAgIFx0ICAgIGFjdGlvbiA9IHRoaXMuZ2V0KHRva2VuKSxcbiAgICBcdCAgICBsb29wRm9yZXZlciA9IChhY3Rpb24ubG9vcCA9PT0gdHJ1ZSk7XG5cbiAgICAgICAgaWYgKGFjdGlvbi5saW5rID09PSBLRVkuTElOSy5USU1FICYmIChsb29wRm9yZXZlciB8fCB1dGlscy5pc051bShhY3Rpb24ubG9vcCkpKSB7XG4gICAgICAgICAgICArK2FjdGlvbi5sb29wQ291bnQ7XG4gICAgICAgICAgICBpZiAoKGxvb3BGb3JldmVyIHx8IHV0aWxzLmlzTnVtKGFjdGlvbi5sb29wKSAmJiBhY3Rpb24ubG9vcENvdW50IDw9IGFjdGlvbi5sb29wKSkge1xuXHQgICAgICAgICAgICBhY3Rpb24ucmVzZXRWYWx1ZXMoKTtcblx0ICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZSh0b2tlbik7XG5cdCAgICAgICAgICAgIGhhc0xvb3BlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIFx0cmV0dXJuIGhhc0xvb3BlZDtcblx0fSxcblx0XG5cdFxuXHR5b3lvOiBmdW5jdGlvbiAodG9rZW4pIHtcblx0XHR2YXIgaGFzWW95b2VkID0gZmFsc2UsXG5cdFx0XHRhY3Rpb24gPSB0aGlzLmdldCh0b2tlbiksXG5cdFx0XHR5b3lvRm9yZXZlciA9IChhY3Rpb24ueW95byA9PT0gdHJ1ZSk7XG5cblx0XHRpZiAoYWN0aW9uLmxpbmsgPT09IEtFWS5MSU5LLlRJTUUgJiYgKHlveW9Gb3JldmVyIHx8IHV0aWxzLmlzTnVtKGFjdGlvbi55b3lvKSkpIHtcblx0XHRcdCsrYWN0aW9uLnlveW9Db3VudDtcblx0XHRcdGlmICh5b3lvRm9yZXZlciB8fCAodXRpbHMuaXNOdW0oYWN0aW9uLnlveW8pICYmIGFjdGlvbi55b3lvQ291bnQgPD0gYWN0aW9uLnlveW8pKSB7XG5cdFx0XHRcdGFjdGlvbi5yZXZlcnNlVmFsdWVzKCk7XG5cdFx0XHRcdHRoaXMuYWN0aXZhdGUodG9rZW4pO1xuXHRcdFx0XHRoYXNZb3lvZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBoYXNZb3lvZWQ7XG5cdH0sXG5cdFxuXHRcblx0LypcbiAgICBcdEFkZCB0b2tlbiB0byB0aGUgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgIFx0XG4gICAgXHRRdWV1ZSBnZXRzIHByb2Nlc3NlZCBhdCB0aGUgZW5kIG9mIGV2ZXJ5IGZyYW1lXG4gICAgXHRcbiAgICBcdEBwYXJhbSBbVG9rZW5dOiBUb2tlbiBvZiBhY3Rpb25cblx0Ki9cblx0cXVldWVEZWFjdGl2YXRlOiBmdW5jdGlvbiAodG9rZW4pIHtcblx0XHRkZWFjdGl2YXRlUXVldWUucHVzaCh0b2tlbik7XG5cdH0sXG5cdFxuXHRcblx0LypcbiAgICBcdEdldCBkYXRhIGZyb20gb3VyIGFjdGlvbidzIGRhdGEgb2JqZWN0XG4gICAgXHRcbiAgICBcdEBwYXJhbSBbVG9rZW5dOiBBY3Rpb24gdG9rZW5cbiAgICBcdEBwYXJhbSBbc3RyaW5nXTogS2V5IG9mIGRhdGEgcG9pbnRcblx0Ki9cblx0Z2V0RGF0YTogZnVuY3Rpb24gKHRva2VuLCBrZXkpIHtcblx0ICAgIHZhciBhY3Rpb24gPSB0aGlzLmdldCh0b2tlbik7XG4gICAgXHRcbiAgICBcdHJldHVybiBhY3Rpb24uZGF0YSA/IGFjdGlvbi5kYXRhW2tleV0gOiB1bmRlZmluZWQ7XG5cdH0sXG5cdFxuXHRcblx0LypcbiAgICBcdFNldCBkYXRhIHBvaW50IHRvIGFjdGlvbidzIGRhdGEgb2JqZWN0XG4gICAgXHRcbiAgICBcdEBwYXJhbSBbVG9rZW5dOiBBY3Rpb24gdG9rZW5cbiAgICBcdEBwYXJhbSBbb2JqZWN0XTogRGF0YSB0byBzYXZlIHRvIGFjdGlvblxuXHQqL1xuXHRzZXREYXRhOiBmdW5jdGlvbiAodG9rZW4sIGRhdGEpIHtcbiAgICBcdHZhciBhY3Rpb24gPSB0aGlzLmdldCh0b2tlbik7XG5cbiAgICBcdGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgIFx0aWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgXHRhY3Rpb24uZGF0YVtrZXldID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgXHRcbiAgICAgICAgICAgIFx0aWYgKGtleSA9PT0gS0VZLkpRVUVSWV9FTEVNRU5UKSB7XG4gICAgICAgICAgICAgICAgXHRhY3Rpb24uZGF0YSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgIFx0fVxuICAgICAgICBcdH1cbiAgICBcdH1cblx0fVxufTtcblxuYWN0aW9uTWFuYWdlciA9IG5ldyBBY3Rpb25NYW5hZ2VyKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYWN0aW9uTWFuYWdlcjsiLCIvKlxuICAgIENocm9ub3NcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi91dGlscy9jYWxjLmpzJyksXG5cdHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbHMuanMnKSxcbiAgICBBY3Rpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi9hY3Rpb25NYW5hZ2VyLmpzJyksXG4gICAgUG9pbnRlclRyYWNrZXIgPSByZXF1aXJlKCcuL3BvaW50ZXJUcmFja2VyLmpzJyksXG4gICAgUHJvY2VzcyA9IHJlcXVpcmUoJy4vcHJvY2Vzcy5qcycpLFxuICAgIENocm9ub3MgPSBmdW5jdGlvbiAoKSB7fSxcbiAgICBjaHJvbm9zLFxuICAgIHByZXZGcmFtZVRpbWUsXG4gICAgY3VycmVudFRpbWUsXG4gICAgZnBzID0gNjAsXG4gICAgaXNSdW5uaW5nID0gZmFsc2U7IC8vIGlzIGFuaW1hdGlvbiBsb29wIHJ1bm5pbmc/IC0gcHJldmVudHMgbXVsdGlwbGUgckFGIGxvb3BzIGZyb20gcnVubmluZ1xuICAgIFxuQ2hyb25vcy5wcm90b3R5cGUgPSB7XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBjaHJvbm9zIGlmIG5vdCBhbHJlYWR5IHJ1bm5pbmdcbiAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5mcmFtZSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBcbiAgICAvKlxuICAgICAgICBTdG9wIGNocm9ub3NcbiAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICBcbiAgICBcbiAgICAvKlxuICAgICAgICBGcmFtZVxuICAgICAgICBcbiAgICAgICAgQ2hlY2sgaWYgdGhlcmUgYXJlIGFjdGl2ZSBhY3Rpb25zIHRvIHByb2Nlc3MsIHRoZW4gY2FsbGJhY2tcbiAgICAqL1xuICAgIGZyYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIGFjdGl2ZUFjdGlvblRva2VucyA9IEFjdGlvbk1hbmFnZXIuZ2V0QWN0aXZlVG9rZW5zKCk7XG5cbiAgICAgICAgaWYgKGFjdGl2ZUFjdGlvblRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2ZUFjdGlvblRva2VucyA9IEFjdGlvbk1hbmFnZXIuZ2V0QWN0aXZlVG9rZW5zKCk7IC8vIHJlY2hlY2sgaW5jYXNlIHN0dWZmIGhhcyBiZWVuIGRlYWN0aXZhdGVkIHNpbmNlXG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUFjdGlvblRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBcdHNlbGYudXBkYXRlVGltZSgpO1xuICAgICAgICAgICAgICAgIFx0UG9pbnRlclRyYWNrZXIuZnJhbWUoKTtcbiAgICAgICAgICAgICAgICBcdFByb2Nlc3MuYWN0aW9ucyhhY3RpdmVBY3Rpb25Ub2tlbnMsIGN1cnJlbnRUaW1lLCBmcHMpO1xuICAgICAgICAgICAgICAgICAgICBBY3Rpb25NYW5hZ2VyLnB1cmdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZnJhbWUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICB1cGRhdGVUaW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgXHQvL3ByZXZGcmFtZVRpbWUgPSBjdXJyZW50VGltZTtcbiAgICBcdGN1cnJlbnRUaW1lID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICBcdC8vZnBzID0gMTAwMCAvIGNhbGMuZGlmZmVyZW5jZShwcmV2RnJhbWVUaW1lLCBjdXJyZW50VGltZSk7XG4gICAgfVxufTtcblxuY2hyb25vcyA9IG5ldyBDaHJvbm9zKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2hyb25vczsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIEtFWSA9IHJlcXVpcmUoJy4uL29wdHMva2V5cy5qcycpLFxuICAgIGNhbGxiYWNrcyA9IHt9LFxuICAgIGV2ZW50ID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFxuICAgIGFkZExpc3RlbmVyczogZnVuY3Rpb24gKG9uTW92ZSwgb25FbmQsIGlzVG91Y2hFdmVudCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgZXZlbnQubW92ZSA9IGlzVG91Y2hFdmVudCA/IEtFWS5FVkVOVC5UT1VDSE1PVkUgOiBLRVkuRVZFTlQuTU9VU0VNT1ZFO1xuICAgICAgICBldmVudC5lbmQgPSBpc1RvdWNoRXZlbnQgPyBLRVkuRVZFTlQuVE9VQ0hFTkQgOiBLRVkuRVZFTlQuTU9VU0VVUDtcblxuICAgICAgICBjYWxsYmFja3Mub25Nb3ZlID0gb25Nb3ZlO1xuXG4gICAgICAgIGNhbGxiYWNrcy5vbkVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25FbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBvbkVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQubW92ZSwgY2FsbGJhY2tzLm9uTW92ZSk7XG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQuZW5kLCBjYWxsYmFja3Mub25FbmQpO1xuICAgIH0sXG4gICAgXG4gICAgcmVtb3ZlTGlzdGVuZXJzOiBmdW5jdGlvbiAoKSB7XG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQubW92ZSwgY2FsbGJhY2tzLm9uTW92ZSk7XG5cdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQuZW5kLCBjYWxsYmFja3Mub25FbmQpO1xuICAgIH1cbiAgICBcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL29wdHMvZGVmYXVsdHMuanMnKSxcbiAgICAvKlxuICAgICAgICBIaXN0b3J5IGNvbnN0cnVjdG9yXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3Zhcl06IFZhcmlhYmxlIHRvIHN0b3JlIGluIGZpcnN0IGhpc3Rvcnkgc2xvdFxuICAgICAgICBAcGFyYW0gW2ludF0gKG9wdGlvbmFsKTogTWF4aW11bSBzaXplIG9mIGhpc3RvcnlcbiAgICAqL1xuICAgIEhpc3RvcnkgPSBmdW5jdGlvbiAob2JqLCBtYXgpIHtcbiAgICAgICAgdGhpcy5tYXggPSBtYXggfHwgZGVmYXVsdHMuaGlzdG9yeU1heFNpemU7XG4gICAgICAgIHRoaXMuYWRkKG9iaik7XG4gICAgfTtcbiAgICBcbkhpc3RvcnkucHJvdG90eXBlID0ge1xuXG4gICAgZW50cmllczogW10sXG4gICAgXG4gICAgLypcbiAgICAgICAgUHVzaCBuZXcgdmFyIHRvIGhpc3RvcnlcbiAgICAgICAgXG4gICAgICAgIFNoaWZ0IG91dCBvbGRlc3QgZW50cnkgaWYgd2UndmUgcmVhY2hlZCBtYXhpbXVtIGNhcGFjaXR5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3Zhcl06IFZhcmlhYmxlIHRvIHB1c2ggaW50byBoaXN0b3J5LmVudHJpZXNcbiAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIgY3VycmVudFNpemUgPSB0aGlzLmdldFNpemUoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZW50cmllcy5wdXNoKG9iaik7XG4gICAgICAgIFxuICAgICAgICBpZiAoY3VycmVudFNpemUgPj0gdGhpcy5tYXgpIHtcbiAgICAgICAgICAgIHRoaXMuZW50cmllcy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdmFyaWFibGUgYXQgc3BlY2lmaWVkIGluZGV4XG5cbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleFxuICAgICAgICBAcmV0dXJuIFt2YXJdOiBWYXIgZm91bmQgYXQgc3BlY2lmaWVkIGluZGV4XG4gICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXNbaV07XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdGhlIG5ld2VzdCBoaXN0b3J5IGVudHJ5XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt2YXJdOiBFbnRyeSBmb3VuZCBhdCBpbmRleCBzaXplIC0gMVxuICAgICovXG4gICAgZ2V0TGF0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0U2l6ZSgpIC0gMTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoaW5kZXgpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBzZWNvbmQgbmV3ZXN0IGhpc3RvcnkgZW50cnlcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3Zhcl06IEVudHJ5IGZvdW5kIGF0IGluZGV4IHNpemUgLSAyXG4gICAgKi9cbiAgICBnZXRQcmV2aW91czogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldFNpemUoKSAtIDI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGluZGV4KTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBjdXJyZW50IGhpc3Rvcnkgc2l6ZVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbaW50XTogQ3VycmVudCBsZW5ndGggb2YgZW50cmllcy5sZW5ndGhcbiAgICAqL1xuICAgIGdldFNpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllcy5sZW5ndGg7XG4gICAgfVxuICAgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIaXN0b3J5OyIsIi8qXG5cdFBvaW50ZXIgdHJhY2tpbmdcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi91dGlscy9jYWxjLmpzJyksXG5cdHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbHMuanMnKSxcblx0ZXZlbnRzID0gcmVxdWlyZSgnLi9ldmVudHMuanMnKSxcblx0cG9pbnRlciA9IHJlcXVpcmUoJy4uL2JpdHMvcG9pbnRlci5qcycpLFxuXHRpc1RyYWNraW5nID0gZmFsc2UsXG5cdGlzVG91Y2ggPSBmYWxzZSxcblx0UG9pbnRlclRyYWNrZXIgPSBmdW5jdGlvbiAoKSB7fSxcblx0cG9pbnRlclRyYWNrZXI7XG5cblBvaW50ZXJUcmFja2VyLnByb3RvdHlwZSA9IHtcblx0XG5cdC8qXG5cdFx0U3RhcnQgdHJhY2tpbmcgdGhlIHBvaW50ZXJcblx0XHRcblx0XHRAcGFyYW0gW2V2ZW50XTogSW5pdGFsIG1vdXNlL3RvdWNoIGV2ZW50XG5cdCovXG5cdHN0YXJ0OiBmdW5jdGlvbiAoZSkge1xuXHRcdHZhciBwb2ludCxcblx0XHRcdGV2ZW50ID0gdXRpbHMuZ2V0QWN0dWFsRXZlbnQoZSk7XG5cdFx0XHRcblx0XHRpc1RvdWNoID0gdXRpbHMuaXNUb3VjaEV2ZW50KGV2ZW50KTtcblx0XHRwb2ludCA9IHV0aWxzLmNvbnZlcnRFdmVudEludG9Qb2ludChldmVudCwgaXNUb3VjaCk7XG5cblx0XHRpZiAoIWlzVHJhY2tpbmcpIHtcblx0XHRcdGlzVHJhY2tpbmcgPSB0cnVlO1xuXHRcdFx0XG5cdFx0XHRwb2ludGVyLmluaXQocG9pbnQsIGlzVG91Y2gsIHRydWUpO1xuXHRcdFx0ZXZlbnRzLmFkZExpc3RlbmVycyh0aGlzLm1vdmUsIHRoaXMuc3RvcCwgaXNUb3VjaCk7XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiBwb2ludDtcblx0fSxcblx0XG5cdFxuXHQvKlxuXHRcdFRyYWNrIGEgcG9pbnRlciBtb3ZlbWVudFxuXHRcdFxuXHRcdEBwYXJhbSBbZXZlbnRdOiBOZXcgbW91c2UvdG91Y2ggZXZlbnRcblx0Ki9cblx0bW92ZTogZnVuY3Rpb24gKGUpIHtcblx0XHR2YXIgZXZlbnQsXG5cdFx0XHRpc1RvdWNoLFxuXHRcdFx0cG9pbnQ7XG5cblx0XHRpZiAoaXNUcmFja2luZykge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQgPSB1dGlscy5nZXRBY3R1YWxFdmVudChlKTtcblx0XHRcdGlzVG91Y2ggPSB1dGlscy5pc1RvdWNoRXZlbnQoZXZlbnQpO1xuXHRcdFx0cG9pbnQgPSB1dGlscy5jb252ZXJ0RXZlbnRJbnRvUG9pbnQoZXZlbnQsIGlzVG91Y2gpO1xuXG5cdFx0XHRpZiAocG9pbnRlci5pc01vdXNlICYmIHBvaW50ZXIuaXNEcmFnICYmIGUud2hpY2ggPT09IDApIHtcblx0XHRcdFx0dGhpcy5zdG9wKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwb2ludGVyLm1vdmVkKHBvaW50KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RvcCB0cmFja2luZyB0aGUgcG9pbnRlclxuICAgICovXG5cdHN0b3A6IGZ1bmN0aW9uIChlKSB7XG5cdFx0ZXZlbnRzLnJlbW92ZUxpc3RlbmVycygpO1xuXHRcdGlzVHJhY2tpbmcgPSBmYWxzZTtcblx0fSxcbiAgICBcbiAgICAvKlxuICAgICAgICBVcGRhdGUgdGhlIHBvaW50ZXIgc3RhdHMgb25GcmFtZVxuICAgICovXG5cdGZyYW1lOiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKGlzVHJhY2tpbmcpIHtcblx0XHRcdHBvaW50ZXIudXBkYXRlKCk7XG5cdFx0fVxuXHR9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFJldHVybiB0aGUgcG9pbnRlclxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbUG9pbnRlcl1cbiAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgIFx0dmFyIHRoaXNQb2ludGVyID0gaXNUcmFja2luZyA/IHBvaW50ZXIgOiBmYWxzZTtcbiAgICAgICBcdFxuICAgICAgIFx0aWYgKHRoaXNQb2ludGVyICYmIG9mZnNldCkge1xuICAgICAgIFx0XHR0aGlzUG9pbnRlci5vZmZzZXQgPSBjYWxjLm9mZnNldChvZmZzZXQsIHRoaXNQb2ludGVyLmN1cnJlbnQpO1xuICAgICAgIFx0fVxuXG4gICAgICAgIHJldHVybiB0aGlzUG9pbnRlcjtcbiAgICB9LFxuICAgIFxuICAgIGlzVHJhY2tpbmc6IGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBpc1RyYWNraW5nO1xuICAgIH1cbn07XG5cbnBvaW50ZXJUcmFja2VyID0gbmV3IFBvaW50ZXJUcmFja2VyKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcG9pbnRlclRyYWNrZXI7IiwiLypcbiAgICBQcm9jZXNzIGFjdGlvbnNcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIEFjdGlvbk1hbmFnZXIgPSByZXF1aXJlKCcuL2FjdGlvbk1hbmFnZXIuanMnKSxcbiAgICBSdWJpeCA9IHJlcXVpcmUoJy4vcnViaXguanMnKSxcblx0dXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy91dGlscy5qcycpLFxuICAgIFByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7fSxcbiAgICBwcm9jZXNzO1xuICAgIFxuUHJvY2Vzcy5wcm90b3R5cGUgPSB7XG5cbiAgICAvKlxuICAgICAgICBQcm9jZXNzIGFjdGlvbnNcbiAgICAgICAgXG4gICAgICAgIExvb3AgdGhyb3VnaCBhbGwgYWN0aXZlIGFjdGlvbnMgYW5kIHByb2Nlc3MgZWFjaFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFthcnJheV06IFRva2VucyBvZiBhY3RpdmUgYWN0aW9ucyBhdCB0aW1lIG9mIGZyYW1lc3RhcnRcbiAgICAgICAgQHBhcmFtIFt0aW1lc3RhbXBdOiBUaW1lc3RhbXAgb2YgZnJhbWVzdGFydFxuICAgICovXG5cdGFjdGlvbnM6IGZ1bmN0aW9uICh0b2tlbnMsIGZyYW1lU3RhcnQsIGZwcykge1xuXHRcdHZhciBpID0gMCxcblx0XHRcdGFjdGl2ZSA9IHRva2Vucy5sZW5ndGg7XG5cblx0XHRmb3IgKGk7IGkgPCBhY3RpdmU7ICsraSkge1xuXHRcdFx0dGhpcy5zaW5nbGVBY3Rpb24oQWN0aW9uTWFuYWdlci5nZXQodG9rZW5zW2ldKSwgZnJhbWVTdGFydCwgZnBzKTtcblx0XHR9XG5cdH0sXG5cdFxuXHRcblx0LypcbiAgICBcdFByb2Nlc3MgYSBzaW5nbGUgYWN0aW9uXG4gICAgXHRcbiAgICBcdEBwYXJhbSBbQWN0aW9uXVxuICAgIFx0QHBhcmFtIFt0aW1lc3RhbXBdXG5cdCovXG5cdHNpbmdsZUFjdGlvbjogZnVuY3Rpb24gKGFjdGlvbiwgZnJhbWVTdGFydCwgZnBzKSB7XG4gICAgXHR2YXIgb3V0cHV0ID0ge30sXG4gICAgXHQgICAgcnViaXggPSBSdWJpeFthY3Rpb24ubGlua10sXG4gICAgXHQgICAgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIFx0ICAgIFxuICAgICAgICBpZiAoYWN0aW9uLmZpcnN0RnJhbWUpIHtcbiAgICAgICAgICAgIGFjdGlvbi5vblN0YXJ0LmNhbGwoYWN0aW9uLnNjb3BlLCBvdXRwdXQsIGFjdGlvbi5kYXRhKTtcbiAgICAgICAgICAgIGFjdGlvbi5maXJzdEZyYW1lID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBvdXRwdXQucG9pbnRlciA9IHJ1Yml4LnVwZGF0ZVBvaW50ZXIoYWN0aW9uKTtcbiAgICAgICAgYWN0aW9uLnByb2dyZXNzID0gcnViaXguY2FsY1Byb2dyZXNzKGFjdGlvbiwgZnJhbWVTdGFydCwgZnBzKTtcbiAgICAgICAgXG4gICAgXHQvLyBMb29wIG92ZXIgYWxsIHZhbHVlcyBcbiAgICBcdGZvciAodmFyIGtleSBpbiBhY3Rpb24udmFsdWVzKSB7XG4gICAgICAgIFx0aWYgKGFjdGlvbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBcdCAgICBvdXRwdXRba2V5XSA9IHJ1Yml4LmVhc2VWYWx1ZShrZXksIGFjdGlvbiwgYWN0aW9uLnByb2dyZXNzKTtcbiAgICAgICAgXHRcdFxuICAgICAgICAgICAgXHQvLyBBcHBseSBNYXRoLiBmdW5jdGlvbiBpZiBvbmUgZGVmaW5lZFxuICAgICAgICAgICAgXHRvdXRwdXRba2V5XSA9IGFjdGlvbi52YWx1ZXNba2V5XS5tYXRoID8gTWF0aFthY3Rpb24udmFsdWVzW2tleV0ubWF0aF0ob3V0cHV0W2tleV0pIDogb3V0cHV0W2tleV07XG5cbiAgICAgICAgICAgIFx0aWYgKGFjdGlvbi52YWx1ZXNba2V5XS5jdXJyZW50ICE9PSBvdXRwdXRba2V5XSkge1xuICAgICAgICAgICAgICAgIFx0aGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgXHRhY3Rpb24udmFsdWVzW2tleV0uY3VycmVudCA9IG91dHB1dFtrZXldO1xuICAgICAgICAgICAgXHR9XG4gICAgICAgIFx0fVxuICAgIFx0fVxuICAgIFx0XG4gICAgXHRhY3Rpb24ub25GcmFtZS5jYWxsKGFjdGlvbi5zY29wZSwgb3V0cHV0LCBhY3Rpb24uZGF0YSk7XG5cbiAgICBcdC8vIElmIG91dHB1dCBoYXMgY2hhbmdlZCwgZmlyZSBvbkNoYW5nZVxuICAgIFx0aWYgKGhhc0NoYW5nZWQpIHtcbiAgICAgICAgXHRhY3Rpb24ub25DaGFuZ2UuY2FsbChhY3Rpb24uc2NvcGUsIG91dHB1dCwgYWN0aW9uLmRhdGEpO1xuICAgIFx0fVxuXG4gICAgXHQvLyBJZiBwcm9jZXNzIGlzIGF0IGl0cyBlbmQsIGZpcmUgb25FbmQgYW5kIGRlYWN0aXZhdGUgYWN0aW9uXG4gICAgXHRpZiAocnViaXguaGFzRW5kZWQoYWN0aW9uKSkge1xuICAgICAgICBcdGFjdGlvbi5vbkVuZC5jYWxsKGFjdGlvbi5zY29wZSwgb3V0cHV0LCBhY3Rpb24uZGF0YSk7XG4gICAgICAgIFx0QWN0aW9uTWFuYWdlci5xdWV1ZURlYWN0aXZhdGUoYWN0aW9uLnRva2VuKTtcbiAgICBcdH1cbiAgICBcdFxuICAgIFx0YWN0aW9uLmZyYW1lc3RhbXAgPSBmcmFtZVN0YXJ0O1xuXHR9XG59O1xuXG5wcm9jZXNzID0gbmV3IFByb2Nlc3MoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwcm9jZXNzOyIsIi8qXG4gICAgUnViaXggbW9kdWxlc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBSdWJpeCBtb2R1bGVzIGFyZSB1c2VkIHRvIHByb2Nlc3MgYW4gYWN0aW9uIGJhc2VkIG9uIGl0cyAucnViaXggcHJvcGVydHkuXG4gICAgXG4gICAgQXZhaWxhYmxlIHJ1Yml4OlxuICAgICAgICAnVGltZSdcbiAgICAgICAgJ1BvaW50ZXInXG4gICAgICAgICdTcGVlZCdcbiAgICAgICAgXG4gICAgUHJvY2Vzc2luZyBmdW5jdGlvbnM6XG4gICAgICAgIGNhbGNQcm9ncmVzc1xuICAgICAgICBoYXNFbmRlZFxuICAgICAgICB1cGRhdGVQb2ludGVyXG4gICAgICAgIGVhc2VWYWx1ZVxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhbGMuanMnKSxcblx0dXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy91dGlscy5qcycpLFxuICAgIEVhc2luZyA9IHJlcXVpcmUoJy4uL3V0aWxzL2Vhc2luZ0Z1bmN0aW9ucy5qcycpLFxuXHRkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL29wdHMvZGVmYXVsdHMuanMnKSxcblx0S0VZID0gcmVxdWlyZSgnLi4vb3B0cy9rZXlzLmpzJyksXG4gICAgUG9pbnRlclRyYWNrZXIgPSByZXF1aXJlKCcuL3BvaW50ZXJUcmFja2VyLmpzJyksXG4gICAgUnViaXggPSBmdW5jdGlvbiAoKSB7fSxcbiAgICBydWJpeENvbnRyb2xsZXI7XG5cblJ1Yml4LnByb3RvdHlwZSA9IHtcbiAgICBUaW1lOiB7XG5cdFxuICAgICAgICAvKlxuICAgIFx0ICAgIENhbGMgcHJvZ3Jlc3NcbiAgICBcdCAgICBcbiAgICAgICAgXHRDYWxjIGFjdGlvbidzIHByb2dyZXNzIHRocm91Z2ggdGltZWxpbWl0XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbQWN0aW9uXTogYWN0aW9uIHRvIG1lYXN1cmVcbiAgICAgICAgICAgIEBwYXJhbSBbdGltZXN0YW1wXTogZnJhbWVzdGFydCB0aW1lc3RhbXBcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IDAgdG8gMSB2YWx1ZSByZXByZXNlbnRpbmcgaG93IG11Y2ggdGltZSBoYXMgcGFzc2VkXG4gICAgICAgICovXG4gICAgICAgIGNhbGNQcm9ncmVzczogZnVuY3Rpb24gKGFjdGlvbiwgZnJhbWVTdGFydCkge1xuICAgICAgICBcdGFjdGlvbi5lbGFwc2VkICs9IGNhbGMuZGlmZmVyZW5jZShhY3Rpb24uZnJhbWVzdGFtcCwgZnJhbWVTdGFydCkgKiBhY3Rpb24udGltZURpbGF0aW9uO1xuICAgICAgICBcdFxuICAgICAgICBcdHJldHVybiBjYWxjLnByb2dyZXNzKGFjdGlvbi5lbGFwc2VkLCBhY3Rpb24uZHVyYXRpb24gKyBhY3Rpb24uZGVsYXkpO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEhhcyBhY3Rpb24gZW5kZWRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgVHJ1ZSBpZiBwcm9ncmVzcyBpcyBlcXVhbCB0byBvciBoaWdoZXIgdGhhbiAxLiBJZiBsb29waW5nIGlzIGVuYWJsZWRcbiAgICAgICAgICAgIHdlIHJlc3RhcnQgdGhlIGFjdGlvblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW0FjdGlvbl06IGFjdGlvbiB0byBhbmFseXNlXG4gICAgICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogaGFzIGFjdGlvbiBlbmRlZFxuICAgICAgICAqL1xuICAgICAgICBoYXNFbmRlZDogZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICBcdHJldHVybiBhY3Rpb24ucHJvZ3Jlc3MgPj0gMSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBVcGRhdGUgcG9pbnRlclxuICAgICAgICAqL1xuICAgICAgICB1cGRhdGVQb2ludGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRWFzZSB2YWx1ZSBpbiBhY3Rpb24gd2l0aCBwcm92aWRlZCBrZXlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBrZXkgb2YgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBQcm9ncmVzcyBpbiB0aW1lbGluZVxuICAgICAgICAqL1xuICAgICAgICBlYXNlVmFsdWU6IGZ1bmN0aW9uIChrZXksIGFjdGlvbiwgcHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGFjdGlvbi52YWx1ZXNba2V5XSxcbiAgICAgICAgICAgIFx0cmVzdHJpY3RlZFByb2dyZXNzID0gY2FsYy5yZXN0cmljdGVkKHByb2dyZXNzLCAwLCAxKSxcbiAgICAgICAgICAgIFx0ZWFzZWRWYWx1ZTtcbiAgICAgICAgICAgIFx0XG4gICAgICAgICAgICBpZiAodmFsdWUuc3RlcHMpIHtcbiAgICAgICAgICAgICAgICByZXN0cmljdGVkUHJvZ3Jlc3MgPSB1dGlscy5zdGVwUHJvZ3Jlc3MocmVzdHJpY3RlZFByb2dyZXNzLCAxLCB2YWx1ZS5zdGVwcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVhc2VkVmFsdWUgPSBFYXNpbmcud2l0aGluUmFuZ2UocmVzdHJpY3RlZFByb2dyZXNzLCB2YWx1ZS5mcm9tLCB2YWx1ZS50bywgdmFsdWUuZWFzZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBlYXNlZFZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBcbiAgICBcbiAgICBQb2ludGVyOiB7XG4gICAgXG4gICAgXHQvKlxuICAgIFx0ICAgIENhbGMgcHJvZ3Jlc3NcbiAgICBcdCAgICBcbiAgICAgICAgXHRDYWxjIHRoZSBwcm9ncmVzcyBvZiBlYWNoIHBvaW50ZXIgbWV0cmljLCAwIHRvIDEgaWYgcmFuZ2UgZ2l2ZW4sXG4gICAgICAgICAgICBpbiBkaXJlY3QgdGVybXMgaWYgbm8gZ2l2ZW4gcmFuZ2VcbiAgICAgICAgXHRcbiAgICAgICAgXHRAcGFyYW0gW0FjdGlvbl06IGFjdGlvbiB0byBtZWFzdXJlXG4gICAgICAgIFx0QHJldHVybiBbb2JqZWN0XTogT2JqZWN0IG9mIGFsbCBwcm9ncmVzc2VzXG4gICAgXHQqL1xuICAgICAgICBjYWxjUHJvZ3Jlc3M6IGZ1bmN0aW9uIChhY3Rpb24sIGZyYW1lU3RhcnQpIHtcbiAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IHt9LFxuICAgICAgICAgICAgICAgIG9mZnNldCA9IGFjdGlvbi5wb2ludGVyLm9mZnNldDtcblxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9mZnNldCkge1xuICAgICAgICAgICAgICAgIGlmIChvZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc1trZXldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0OiAoIWFjdGlvbi52YWx1ZXNba2V5XSkgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKCFhY3Rpb24udmFsdWVzW2tleV0pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRba2V5XSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsYy5wcm9ncmVzcyhvZmZzZXRba2V5XSArIGFjdGlvbi5vcmlnaW5ba2V5XSwgYWN0aW9uLnZhbHVlc1trZXldLm1pbiwgYWN0aW9uLnZhbHVlc1trZXldLm1heClcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9ncmVzcztcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBIYXMgZnVuY3Rpb24gZW5kZWQ/XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFRydWUgaWYgYWN0aW9uLmlzVHJhY2tpbmcgaXMgZmFsc2VcbiAgICAgICAgKi9cbiAgICAgICAgaGFzRW5kZWQ6IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBQb2ludGVyVHJhY2tlci5pc1RyYWNraW5nKCkgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgVXBkYXRlIHBvaW50ZXJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtBY3Rpb25dOiBcbiAgICAgICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBMYXRlc3QgcG9pbnRlciwgb3IgcHJldmlvdXMgcG9pbnRlciBpZiBzdG9wcGVkIHRyYWNraW5nXG4gICAgICAgICovXG4gICAgICAgIHVwZGF0ZVBvaW50ZXI6IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50UG9pbnRlciA9IGFjdGlvbi5wb2ludGVyO1xuXG4gICAgICAgICAgICBhY3Rpb24ucG9pbnRlciA9IFBvaW50ZXJUcmFja2VyLmdldChhY3Rpb24ucG9pbnRlck9mZnNldCkgfHwgY3VycmVudFBvaW50ZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucG9pbnRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBFYXNlIHZhbHVlIGluIGFjdGlvbiB3aXRoIHByb3ZpZGVkIGtleVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IGtleSBvZiB2YWx1ZVxuICAgICAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IFByb2dyZXNzIG9mIHBvaW50ZXIgcHJvcHNcbiAgICAgICAgKi9cbiAgICAgICAgZWFzZVZhbHVlOiBmdW5jdGlvbiAoa2V5LCBhY3Rpb24sIHByb2dyZXNzKSB7XG4gICAgICAgICAgICB2YXIgZWFzZWRWYWx1ZSA9IDAsIFxuICAgICAgICAgICAgICAgIHZhbHVlID0gYWN0aW9uLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGNhbGN1bGF0ZWQgdGhlIHByb2dyZXNzIGZvciB0aGlzIHByb3BlcnR5XG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3Nba2V5XSkge1xuICAgICAgICAgICAgICAgIGVhc2VkVmFsdWUgPSBFYXNpbmcud2l0aGluUmFuZ2UocHJvZ3Jlc3Nba2V5XS52YWx1ZSwgdmFsdWUubWluLCB2YWx1ZS5tYXgsIGRlZmF1bHRzLnRyYWNrRWFzZSwgdmFsdWUuZXNjYXBlQW1wKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gSWYgd2UncmUgbGlua2luZyB0aGlzIHByb3BlcnR5IGludG8gYSB1c2VyIGlucHV0XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmxpbmspIHtcbiAgICAgICAgICAgICAgICBlYXNlZFZhbHVlID0gRWFzaW5nLndpdGhpblJhbmdlKHByb2dyZXNzW3ZhbHVlLmxpbmtdLnZhbHVlLCB2YWx1ZS5taW4sIHZhbHVlLm1heCwgZGVmYXVsdHMudHJhY2tFYXNlLCB2YWx1ZS5lc2NhcGVBbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBUT0RPOiBIYW5kbGUgZGVmYXVsdCBlYXNpbmcgXG5cbiAgICAgICAgICAgIHJldHVybiBlYXNlZFZhbHVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICBTcGVlZDoge1xuICAgIFxuICAgIFx0Lypcblx0ICAgIFx0Q29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHNwZWVkIGJhc2VkIG9uIGZwc1xuICAgIFx0Ki9cbiAgICBcdGZyYW1lU3BlZWQ6IGZ1bmN0aW9uICh4cHMsIGZwcykge1xuICAgIFx0XHR2YXIgc3BlZWRQZXJGcmFtZSA9IDA7XG5cbiAgICBcdFx0aWYgKHhwcyAmJiB1dGlscy5pc051bSh4cHMpKSB7XG5cdCAgICBcdFx0c3BlZWRQZXJGcmFtZSA9IHhwcy9mcHM7XG4gICAgXHRcdH1cbiAgICBcdFxuXHQgICAgXHRyZXR1cm4gc3BlZWRQZXJGcmFtZTtcbiAgICBcdH0sXG4gICAgXG4gICAgXHQvKlxuICAgIFx0ICAgIENhbGMgbmV3IHNwZWVkXG4gICAgXHQgICAgXG4gICAgXHQgICAgQ2FsYyB0aGUgbmV3IHNwZWVkIGJhc2VkIG9uIHRoZSBmb3JtdWxhIHNwZWVkID0gKHNwZWVkIC0gZnJpY3Rpb24gKyB0aHJ1c3QpXG4gICAgICAgIFx0XG4gICAgICAgIFx0QHBhcmFtIFtBY3Rpb25dOiBhY3Rpb24gdG8gbWVhc3VyZVxuICAgICAgICBcdEByZXR1cm4gW29iamVjdF06IE9iamVjdCBvZiBhbGwgc3BlZWRzXG4gICAgXHQqL1xuXHQgICAgY2FsY1Byb2dyZXNzOiBmdW5jdGlvbiAoYWN0aW9uLCBmcmFtZVN0YXJ0LCBmcHMpIHtcblx0XHQgICAgdmFyIHByb2dyZXNzID0ge30sXG5cdFx0ICAgIFx0cG9pbnQsXG5cdFx0ICAgIFx0dmFsdWU7XG5cdFx0ICAgIFx0XG5cdFx0ICAgIGZvciAodmFyIGtleSBpbiBhY3Rpb24udmFsdWVzKSB7XG5cdFx0XHQgICAgaWYgKGFjdGlvbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0ICAgIFx0dmFsdWUgPSBhY3Rpb24udmFsdWVzW2tleV07XG5cdFx0XHQgICAgXHR2YWx1ZS5zcGVlZCA9IHZhbHVlLnNwZWVkIC0gdGhpcy5mcmFtZVNwZWVkKHZhbHVlLmZyaWN0aW9uLCBmcHMpICsgdGhpcy5mcmFtZVNwZWVkKHZhbHVlLnRocnVzdCwgZnBzKTtcblx0XHRcdFx0ICAgIHByb2dyZXNzW2tleV0gPSB0aGlzLmZyYW1lU3BlZWQodmFsdWUuc3BlZWQsIGZwcyk7XG5cdFx0XHQgICAgfVxuXHRcdCAgICB9XG5cdFx0ICAgIFxuXHRcdCAgICBpZiAoYWN0aW9uLnZhbHVlcy5hbmdsZSAmJiBhY3Rpb24udmFsdWVzLmRpc3RhbmNlKSB7XG5cdFx0ICAgIFx0cG9pbnQgPSBjYWxjLnBvaW50KGFjdGlvbi5vcmlnaW4sIGFjdGlvbi52YWx1ZXMuYW5nbGUuY3VycmVudCwgYWN0aW9uLnZhbHVlcy5kaXN0YW5jZS5jdXJyZW50KTtcblx0XHRcdCAgICBwcm9ncmVzcy54ID0gcG9pbnQueDtcblx0XHRcdCAgICBwcm9ncmVzcy55ID0gcG9pbnQueTtcblx0XHQgICAgfVxuXHRcdCAgICBcblx0XHQgICAgcmV0dXJuIHByb2dyZXNzO1xuXHQgICAgfSxcblx0ICAgIFxuXHQgICAgLypcbiAgICBcdCAgICBIYXMgdGhpcyBhY3Rpb24gZW5kZWQ/XG4gICAgXHQgICAgXG4gICAgXHQgICAgQHJldHVybiBbYm9vbGVhbl06IEZhbHNlIGZvciBub3cgLSBUT0RPIGNyZWF0ZSBiZXR0ZXIgZGVmYXVsdFxuXHQgICAgKi9cblx0ICAgIGhhc0VuZGVkOiBmdW5jdGlvbiAoYWN0aW9uKSB7XG5cdCAgICBcdHJldHVybiBmYWxzZTtcblx0ICAgIH0sXG5cdCAgICBcblx0ICAgIC8qXG4gICAgXHQgICAgQWRkIHRoZSBzcGVlZCB0byB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IGtleSBvZiB2YWx1ZVxuICAgICAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IFByb2dyZXNzIG9mIHBvaW50ZXIgcHJvcHNcblx0ICAgICovXG5cdCAgICBlYXNlVmFsdWU6IGZ1bmN0aW9uIChrZXksIGFjdGlvbiwgcHJvZ3Jlc3MpIHtcblx0ICAgIFx0dmFyIHZhbHVlID0gYWN0aW9uLnZhbHVlc1trZXldLFxuXHQgICAgXHRcdG5ld1ZhbHVlID0gdmFsdWUuY3VycmVudCArIHByb2dyZXNzW2tleV07XG5cblx0ICAgIFx0aWYgKHZhbHVlLm1pbikge1xuXHRcdCAgICBcdG5ld1ZhbHVlID0gTWF0aC5tYXgodmFsdWUubWluLCBuZXdWYWx1ZSk7XG5cdCAgICBcdH1cblx0ICAgIFx0XG5cdCAgICBcdGlmICh2YWx1ZS5tYXgpIHtcblx0XHQgICAgXHRuZXdWYWx1ZSA9IE1hdGgubWluKHZhbHVlLm1heCwgbmV3VmFsdWUpO1xuXHQgICAgXHR9XG5cblx0ICAgICBcdHJldHVybiBuZXdWYWx1ZTtcblx0ICAgIH0sXG5cdCAgICBcblx0ICAgIHVwZGF0ZVBvaW50ZXI6IGZ1bmN0aW9uICgpIHt9XG4gICAgfSxcblxufTtcblxucnViaXhDb250cm9sbGVyID0gbmV3IFJ1Yml4KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcnViaXhDb250cm9sbGVyOyIsIi8qXG4gICAgVG9rZW4gY29udHJvbGxlclxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgdG9rZW5Db3VudGVyID0gMCxcblx0VG9rZW4gPSBmdW5jdGlvbiAoKSB7fTtcblxuVG9rZW4ucHJvdG90eXBlID0ge1xuXHRcblx0Lypcblx0XHRHZXQgdGhlIGN1cnJlbnQgdG9rZW4gY291bnRcblx0XHRcblx0XHRAcmV0dXJuIFtpbnRdOiBDdXJyZW50IHRva2VuIGNvdW50XG5cdCovXG5cdGdldDogZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0b2tlbkNvdW50ZXI7XG5cdH0sXG5cdFxuXHQvKlxuXHRcdEdlbmVyYXRlIGEgbmV3IHRva2VuXG5cdFx0XG5cdFx0QHJldHVybiBbaW50XTogTmV3IHRva2VuXG5cdCovXG5cdGdlbmVyYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHRva2VuID0gdGhpcy5nZXQoKTtcblx0XHRcblx0XHR0aGlzLmluY3JlbWVudCgpO1xuXG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9LFxuXHRcblx0Lypcblx0XHRJbmNyZWFzZSB0b2tlbiBjb3VudGVyXG5cdCovXG5cdGluY3JlbWVudDogZnVuY3Rpb24gKCkge1xuXHRcdHRva2VuQ291bnRlciArKztcblx0fVxuXHRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVG9rZW47IiwiLypcbiAgICBEZWZhdWx0IG9wdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBLRVkgPSByZXF1aXJlKCcuL2tleXMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcG9pbnRlcjoge1xuICAgICAgICBoaXN0b3J5U2l6ZTogMiwgLy8gbnVtYmVyIG9mIHBvaW50ZXIgZXZlbnRzIHRvIHJlbWVtYmVyXG4gICAgICAgIG1heEluYWN0aXZlRnJhbWVzOiAyIC8vIGFsbG93IHRoaXMgbnVtYmVyIG9mIGZyYW1lcyB0byBwYXNzIHdpdGggbm8gbW92ZW1lbnQgYmVmb3JlIHdlIGRlY2xhcmUgc3RhdGlvbmFyeSBwb2ludGVyXG4gICAgfSxcbiAgICB0cmFja0Vhc2U6IEtFWS5FQVNJTkcuTElORUFSLFxuICAgIHR3ZWVuVGFyZ2V0OiAwXG59OyIsIi8qXG4gICAgU3RyaW5nIGNvbnN0YW50c1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQU5JTUFURTogJ2FuaW1hdGUnLFxuICAgIENBTEM6ICdjYWxjJyxcbiAgICBKUVVFUllfRUxFTUVOVDogJ19qUXVlcnlFbGVtZW50JyxcbiAgICBFQVNJTkc6IHtcblx0ICAgIFFVQURfSU5fT1VUOiAncXVhZEluT3V0Jyxcblx0ICAgIFFVQURfT1VUOiAncXVhZE91dCcsXG5cdFx0SU46ICdJbicsXG5cdFx0SU5fT1VUOiAnSW5PdXQnLFxuXHRcdE9VVDogJ091dCcsXG5cdFx0TElORUFSOiAnbGluZWFyJ1xuICAgIH0sXG4gICAgTElOSzoge1xuXHQgICAgVElNRTogJ1RpbWUnLFxuXHQgICAgUE9JTlRFUjogJ1BvaW50ZXInLFxuXHQgICAgU1BFRUQ6ICdTcGVlZCdcbiAgICB9LFxuICAgIEVSUk9SOiB7XG5cdCAgICBBQ1RJT05fRVhJU1RTOiBcIkFjdGlvbiBhbHJlYWR5IGRlZmluZWQuIFVzZSBmb3JjZU92ZXJyaWRlOiB0cnVlIHRvIG92ZXJyaWRlLlwiLFxuXHQgICAgTk9fQUNUSU9OOiBcIk5vIGFjdGlvbiBkZWZpbmVkIHRvIGluaGVyaXQgZnJvbS5cIixcblx0ICAgIElOVkFMSURfRUFTSU5HOiBcIjogRWFzaW5nIG5vdCBkZWZpbmVkXCJcbiAgICB9LFxuICAgIEVWRU5UOiB7XG5cdCAgICBNT1VTRTogJ21vdXNlJyxcbiAgICAgICAgTU9VU0VET1dOOiAnbW91c2Vkb3duJyxcbiAgICAgICAgTU9VU0VNT1ZFOiAnbW91c2Vtb3ZlJyxcbiAgICAgICAgTU9VU0VVUDogJ21vdXNldXAnLFxuICAgICAgICBUT1VDSDogJ3RvdWNoJyxcbiAgICAgICAgVE9VQ0hTVEFSVDogJ3RvdWNoc3RhcnQnLFxuICAgICAgICBUT1VDSE1PVkU6ICd0b3VjaG1vdmUnLFxuICAgICAgICBUT1VDSEVORDogJ3RvdWNoZW5kJ1xuICAgIH0sXG4gICAgUFJPR1JFU1M6IHtcbiAgICAgICAgRElSRUNUOiAnRGlyZWN0JyxcbiAgICAgICAgUkFOR0U6ICdSYW5nZSdcbiAgICB9XG59OyIsIi8qXG4gICAgUiBFIEQgUyBIIEkgRiBUXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIFxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgS0VZID0gcmVxdWlyZSgnLi9vcHRzL2tleXMuanMnKSxcblx0QWN0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4vYm9icy9hY3Rpb25NYW5hZ2VyLmpzJyksXG5cdENocm9ub3MgPSByZXF1aXJlKCcuL2JvYnMvY2hyb25vcy5qcycpLFxuXHRFYXNpbmcgPSByZXF1aXJlKCcuL3V0aWxzL2Vhc2luZ0Z1bmN0aW9ucy5qcycpLFxuXHRjYWxjID0gcmVxdWlyZSgnLi91dGlscy9jYWxjLmpzJyksXG5cdHV0aWxzID0gcmVxdWlyZSgnLi91dGlscy91dGlscy5qcycpLFxuXHRzaGltcyA9IHJlcXVpcmUoJy4vdXRpbHMvc2hpbXMuanMnKSxcblx0clF1ZXJ5ID0gcmVxdWlyZSgnLi91dGlscy9yUXVlcnkuanMnKSxcblx0UmVkc2hpZnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgXHR0aGlzLmluaXQoKTtcblx0fSxcbiAgICByZWRzaGlmdCxcbiAgICBJbnN0YW5jZSA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgfTtcbiAgICBcbkluc3RhbmNlLnByb3RvdHlwZSA9IHtcblx0XG5cdC8qXG4gICAgXHRSZWFkIG9yIGJpbmQgZGF0YSB0byB0aGlzIFJlZHNoaWZ0IG9iamVjdFxuICAgIFx0XG4gICAgXHRSZWFkXG4gICAgXHQgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgZGF0YSB2YWx1ZSB0byByZWFkXG4gICAgXHQgICAgQHJldHVybiBbYW55XTogVGhlIGRhdGEgc3RvcmVkIHVuZGVyIHRoYXQga2V5XG4gICAgXHQgICAgXG4gICAgICAgIFdyaXRlIHN5bnRheCBBXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSBvZiBkYXRhIHZhbHVlIHRvIHdyaXRlXG4gICAgICAgICAgICBAcGFyYW0gW2FueV06IFRoZSBkYXRhIHRvIHN0b3JlIHVuZGVyIHRoYXQga2V5XG4gICAgICAgICAgICBcbiAgICAgICAgV3JpdGUgc3ludGF4IEJcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IG9mIGtleS92YWx1ZSBwYWlycyB0byBhdHRhY2ggdG8gdGhpcyBvYmplY3Rcblx0Ki9cblx0ZGF0YTogZnVuY3Rpb24gKCkge1xuXHQgICAgdmFyIHJldHVyblZhbHVlID0gdGhpcyxcblx0ICAgICAgICBhcmcwID0gYXJndW1lbnRzWzBdLFxuXHQgICAgICAgIGFyZzBJc1N0cmluZyA9IHV0aWxzLmlzU3RyaW5nKGFyZzApLFxuXHQgICAgICAgIGRhdGFUb1NldCA9IHt9O1xuXHQgICAgXG5cdCAgICAvLyBJZiB0aGlzIGlzIGEgZ2V0IHJlcXVlc3Rcblx0ICAgIGlmIChhcmcwSXNTdHJpbmcgJiYgIWFyZ3VtZW50c1sxXSkge1xuICAgIFx0ICAgIHJldHVyblZhbHVlID0gQWN0aW9uTWFuYWdlci5nZXREYXRhKHRoaXMudG9rZW4sIGFyZzApO1xuXHQgICAgXG5cdCAgICAvLyBFbHNlIHRoaXMgaXMgYSBzZXQgcmVxdWVzdFxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgICBpZiAoYXJnMElzU3RyaW5nKSB7XG4gICAgXHQgICAgICAgIGRhdGFUb1NldFthcmcwXSA9IGFyZ3VtZW50c1sxXTtcblx0ICAgICAgICB9IGVsc2Uge1xuICAgIFx0ICAgICAgICBkYXRhVG9TZXQgPSBhcmcwO1xuXHQgICAgICAgIH1cblxuICAgIFx0ICAgIEFjdGlvbk1hbmFnZXIuc2V0RGF0YSh0aGlzLnRva2VuLCBkYXRhVG9TZXQpO1xuXHQgICAgfVxuXG5cdCAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG5cdH0sXG5cdFxuXHQvKlxuICAgIFx0UGxheSB0aGUgcHJvdmlkZWQgYWN0aW9ucyBhcyBhbmltYXRpb25zXG4gICAgXHRcbiAgICBcdEBwYXJhbSBbc3RyaW5nIHx8IGFycmF5XTogU3BhY2UgZGVsaW1pbmF0ZWQgc3RyaW5nIG9yIGFycmF5IG9mIGRlZmluZWQgYWN0aW9uIGtleXMgaW4gb3JkZXIgb2YgZXhlY3V0aW9uXG4gICAgXHRAcGFyYW0gW29iamVjdF06IE92ZXJyaWRlIGFjdGlvbiBkZWZhdWx0cyB3aXRoIHRob3NlIGRlZmluZWQgaGVyZVxuXHQqL1xuXHRwbGF5OiBmdW5jdGlvbiAoZGVmcywgb3ZlcnJpZGUpIHtcblx0ICAgIHJldHVybiByZWRzaGlmdC5pZ25pdGUodGhpcy50b2tlbiwgS0VZLkxJTksuVElNRSwgQWN0aW9uTWFuYWdlci5jcmVhdGVCYXNlKGRlZnMsIG92ZXJyaWRlKSk7XG5cdH0sXG5cdFxuXHQvKlxuICAgIFx0UnVuIHRoZSBwcm92aWRlZCBhY3Rpb24gYmFzZWQgb24gcHJvcGVydHkgc3BlZWRcbiAgICBcdFxuICAgIFx0QHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgdGhlIGFjdGlvbiB0byBwcm9jZXNzXG4gICAgXHRAcGFyYW0gW29iamVjdF06IE92ZXJyaWRlIGFjdGlvbiBkZWZhdWx0cyB3aXRoIHRob3NlIGRlZmluZWQgaGVyZVxuXHQqL1xuXHRtb3ZlOiBmdW5jdGlvbiAoZGVmcywgb3ZlcnJpZGUpIHtcblx0ICAgIHJldHVybiByZWRzaGlmdC5pZ25pdGUodGhpcy50b2tlbiwgS0VZLkxJTksuU1BFRUQsIEFjdGlvbk1hbmFnZXIuY3JlYXRlQmFzZShkZWZzLCBvdmVycmlkZSkpO1xuXHR9LFxuXHRcblxuICAgIC8qXG4gICAgICAgIFRyYWNrIHBvaW50ZXJcbiAgICBcdFxuICAgIFx0QHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgdGhlIGFjdGlvbiB0byBwcm9jZXNzXG4gICAgICAgIEBwYXJhbSBbZXZlbnRdOiBJbml0aWF0aW5nIHBvaW50ZXIgZXZlbnRcbiAgICAqL1xuXHR0cmFjazogZnVuY3Rpb24gKGRlZnMpIHtcblx0ICAgIHZhciBoYXNBbGxBcmdzID0gKGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkKSxcblx0ICAgICAgICB0b1RyYWNrID0gaGFzQWxsQXJncyA/IGFyZ3VtZW50c1syXSA6IGFyZ3VtZW50c1sxXSxcblx0ICAgICAgICBvdmVycmlkZSA9IGhhc0FsbEFyZ3MgPyBhcmd1bWVudHNbM10gOiB7fTtcblx0ICAgIFxuXHQgICAgcmV0dXJuIHJlZHNoaWZ0Lmlnbml0ZSh0aGlzLnRva2VuLCBLRVkuTElOSy5QT0lOVEVSLCBBY3Rpb25NYW5hZ2VyLmNyZWF0ZUJhc2UoZGVmcywgb3ZlcnJpZGUpLCB0b1RyYWNrKTtcblx0fSxcbiAgICBcbiAgICBcbiAgICAvKlxuICAgICAgICBTdGFydCBzcGVjaWZpZWQgYWN0aW9uXG4gICAgICAgIFxuICAgICAgICBBY3RpdmF0ZSB0aGUgYWN0aW9uIGFuZCBmaXJlIHVwIENocm9ub3MgYW5pbWF0aW9uIGxvb3BcbiAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEFjdGlvbk1hbmFnZXIuYWN0aXZhdGUodGhpcy50b2tlbik7XG4gICAgICAgIENocm9ub3Muc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICBcbiAgICAvKlxuICAgICAgICBTdG9wIHNwZWNpZmllZCBhY3Rpb25cbiAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQWN0aW9uTWFuYWdlci5kZWFjdGl2YXRlKHRoaXMudG9rZW4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIGdldFRva2VuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VuO1xuICAgIH0sXG4gICAgXG4gICAgaXNBY3RpdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEFjdGlvbk1hbmFnZXIuaXNBY3RpdmUodGhpcy50b2tlbik7XG4gICAgfVxuICAgIFxufTtcblxuUmVkc2hpZnQucHJvdG90eXBlID0ge1xuXG4gICAgbmV3QWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCgpO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBDcmVhdGUgYSBJbnN0YW5jZSB3aXRoIHRoZSBzcGVjaWZpZWQgdG9rZW5cbiAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIHZhciBhY3Rpb24gPSBBY3Rpb25NYW5hZ2VyLmdldCh0b2tlbikgfHwgQWN0aW9uTWFuYWdlci5jcmVhdGUoKTtcblxuICAgICAgICByZXR1cm4gbmV3IEluc3RhbmNlKGFjdGlvbi50b2tlbik7XG4gICAgfSxcbiAgICBcbiAgICBcbiAgICBkZWZpbmU6IGZ1bmN0aW9uIChhY3Rpb25zKSB7XG5cdCAgICBBY3Rpb25NYW5hZ2VyLmRlZmluZShhY3Rpb25zKTtcblx0ICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cdFxuXHQvKlxuICAgIFx0SWduaXRlIFJlZHNoaWZ0XG4gICAgXHRcbiAgICBcdEdldCB0aGUgc3BlY2lmaWVkIGFjdGlvbiAob3IgY3JlYXRlIGlmIG5vbmUpLCB1cGRhdGUgaXRzIHByb3BlcnRpZXNcbiAgICBcdGFuZCB0aGVuIHN0YXJ0XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFByb3BlcnRpZXMgdG8gbWFuaXB1bGF0ZVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IE9wdGlvbnMgZm9yIHRyYWNrXG4gICAgICAgIEBwYXJhbSBbZXZlbnRdOiBJbml0aWF0aW5nIHBvaW50ZXIgZXZlbnRcbiAgICAgICAgQHJldHVybiBbaW50XTogSUQgdG9rZW4gZm9yIGFjdGlvblxuXHQqL1xuXHRpZ25pdGU6IGZ1bmN0aW9uICh0b2tlbiwgbGluaywgY2hhbmdlcywgZSkge1xuXHRcdHZhciBhY3Rpb24gPSBBY3Rpb25NYW5hZ2VyLmdldCh0b2tlbik7XG5cdFx0XG5cdFx0Y2hhbmdlcy5saW5rID0gbGluaztcblxuXHRcdEFjdGlvbk1hbmFnZXIuY2hhbmdlKHRva2VuLCBjaGFuZ2VzLCBlKTtcblxuXHRcdHRoaXMuc3RhcnQodG9rZW4pO1xuXG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9LFxuXHRcblx0XG5cdC8qXG4gICAgXHRBZGQgYmV6aWVyIGN1cnZlIGZ1bmN0aW9uXG4gICAgXHRcbiAgICBcdEFkZCB0aGUgc3BlY2lmaWVkIGJlemllciBjdXJ2ZSB0aGUgRWFzaW5nRnVuY3Rpb24ncyBhdmFpbGFibGUgZWFzaW5nc1xuICAgIFx0TXkgZmF2b3VyaXRlIGJlemllciBjdXJ2ZSBnZW5lcmF0b3IgaXMgTGVhIFZlcm91J3MgZXhjZWxsZW50IGh0dHA6Ly9jdWJpYy1iZXppZXIuY29tL1xuICAgIFx0XG4gICAgXHRAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgdGhlIG5ldyBlYXNpbmcgZnVuY3Rpb24gXG4gICAgXHRAcGFyYW0gW251bWJlcl06IHggY29vcmRpbmF0ZSBvZiBwb2ludCAxXG4gICAgXHRAcGFyYW0gW251bWJlcl06IHkgY29vcmRpbmF0ZSBvZiBwb2ludCAxXG4gICAgXHRAcGFyYW0gW251bWJlcl06IHggY29vcmRpbmF0ZSBvZiBwb2ludCAyXG4gICAgXHRAcGFyYW0gW251bWJlcl06IHkgY29vcmRpbmF0ZSBvZiBwb2ludCAyXG5cdCovXG5cdGFkZEJlemllcjogZnVuY3Rpb24gKG5hbWUsIHgxLCB5MSwgeDIsIHkyKSB7XG5cdFx0RWFzaW5nLmFkZEJlemllcihuYW1lLCB4MSwgeTEsIHgyLCB5Mik7XG5cdH0sXG5cdFxuICAgIENhbGM6IGNhbGMsXG5cdFxuXHRydW46IGZ1bmN0aW9uICgpIHtcbiAgICBcdFxuXHR9LFxuXHRcblx0dXBkYXRlUG9pbnRlcjogZnVuY3Rpb24gKHgsIHksIHopIHtcbiAgICBcdFxuXHR9LFxuXHRcblx0LypcbiAgICBcdEluaXQgUmVkc2hpZnRcbiAgICBcdFxuICAgIFx0Q2hlY2sgaWYgd2UgbmVlZCBzaGltcyBhbmQgbG9hZCBpZiBuZWNlc3Nhcnlcblx0Ki9cblx0aW5pdDogZnVuY3Rpb24gKCkge1xuICAgIFx0c2hpbXMuZmVhdHVyZUNoZWNrKCk7XG4gICAgXHRyUXVlcnkuY2hlY2soKTtcblx0fVxufTtcblxucmVkc2hpZnQgPSBuZXcgUmVkc2hpZnQoKTtcblxud2luZG93LlJlZHNoaWZ0ID0gcmVkc2hpZnQ7XG5tb2R1bGUuZXhwb3J0cyA9IHJlZHNoaWZ0OyIsIi8qXG4gICAgQ2FsY3VsYXRvcnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgU2ltcGxlIEkvTyBzbmlwcGV0c1xuICAgIFxuICAgIGFuZ2xlXG4gICAgYW5nbGVGcm9tQ2VudGVyXG4gICAgZGlmZmVyZW5jZVxuICAgIGRpc3RhbmNlXG4gICAgZGlzdGFuY2UxRFxuICAgIGRpc3RhbmNlMkRcbiAgICBkaXN0YW5jZTNEXG4gICAgZWxhcHNlZFxuICAgIGh5cG90ZW51c2VcbiAgICBvZmZzZXRcbiAgICBwcm9ncmVzc1xuICAgIHJlc3RyaWN0ZWRcbiAgICB0aW1lUmVtYWluaW5nXG4gICAgdmFsdWVcbiAgICB2YWx1ZUVhc2VkXG4qL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIE9mZnNldCA9IHJlcXVpcmUoJy4uL2JpdHMvb2Zmc2V0LmpzJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyksXG4gICAgQ2FsYyA9IGZ1bmN0aW9uICgpIHt9LFxuICAgIGNhbGM7XG4gICAgXG5DYWxjLnByb3RvdHlwZSA9IHtcblxuIFxuICAgIC8qXG4gICAgICAgIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gICAgICAgIFxuICAgICAgICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgICAgICAgYXJlIGF0IDAsMCwgdGhlbiByZXR1cm4gdGhlIGFuZ2xlIHVzaW5nIC5hbmdsZUZyb21DZW50ZXIoKVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgICAgICAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4gICAgKi9cbiAgICBhbmdsZTogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgIHZhciBmcm9tID0gcG9pbnRCID8gcG9pbnRBIDoge3g6IDAsIHk6IDB9LFxuICAgICAgICAgICAgdG8gPSBwb2ludEIgfHwgcG9pbnRBLFxuICAgICAgICAgICAgcG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5kaWZmZXJlbmNlKGZyb20ueCwgdG8ueCksXG4gICAgICAgICAgICAgICAgeTogdGhpcy5kaWZmZXJlbmNlKGZyb20ueSwgdG8ueSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5hbmdsZUZyb21DZW50ZXIocG9pbnQueCwgcG9pbnQueSk7XG4gICAgfSxcblxuXG4gICAgLypcbiAgICAgICAgQW5nbGUgZnJvbSBjZW50ZXJcbiAgICAgICAgXG4gICAgICAgIFJldHVybnMgdGhlIGN1cnJlbnQgYW5nbGUsIGluIHJhZGlhbnMsIG9mIGEgZGVmaW5lZCBwb2ludFxuICAgICAgICBmcm9tIGEgY2VudGVyIChhc3N1bWVkIDAsMClcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogWCBjb29yZGluYXRlIG9mIHNlY29uZCBwb2ludFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFkgY29vcmRpbmF0ZSBvZiBzZWNvbmQgcG9pbnRcbiAgICAgICAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiAwLCAwIGFuZCBwb2ludCBpbiByYWRpYW5zXG4gICAgKi9cbiAgICBhbmdsZUZyb21DZW50ZXI6IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHksIHgpO1xuXHR9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIERpZmZlcmVuY2VcbiAgICAgICAgXG4gICAgICAgIFJldHVybnMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGFuZCBiIGJ5IHN1YnRyYWN0aW5nIGIgZnJvbSBhLlxuICAgICAgICBVc2VmdWwgaW4gY2FsY3VhbHRpbmcgdGhlIHplcm8tbm9ybWFsaXNlZCBwb3NpdGlvbiBvZiBiLCBvciB0aGVcbiAgICAgICAgZGlmZmVyZW5jZSBzb21ldGhpbmcgaGFzIHRyYXZlbGxlZCBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBiXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IERpZmZlcmVuY2UgYmV0d2VlbiB2YWx1ZSBhIGFuZCB2YWx1ZSBiXG4gICAgKi9cbiAgICBkaWZmZXJlbmNlOiBmdW5jdGlvbiAoYSwgYikge1xuICAgIFx0cmV0dXJuIGIgLSBhO1xuICAgIH0sXG4gICAgXG4gICAgLypcblx0ICAgIERpbGF0ZVxuXHQgICAgXG5cdCAgICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG5cdCAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcblx0ICAgIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcblx0ICAgIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuICAgICovXG4gICAgZGlsYXRlOiBmdW5jdGlvbiAocHJldmlvdXMsIGN1cnJlbnQsIGRpbGF0aW9uKSB7XG5cdCAgICByZXR1cm4gcHJldmlvdXMgKyAoKGN1cnJlbnQgLSBwcmV2aW91cykgKiBkaWxhdGlvbik7XG4gICAgfSxcbiAgICAgICAgXG4gICAgLypcbiAgICAgICAgRGlzdGFuY2VcbiAgICAgICAgXG4gICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gKDAsMCkgYW5kIHBvaW50QSwgdW5sZXNzIHBvaW50QlxuICAgICAgICBpcyBwcm92aWRlZCwgdGhlbiB3ZSByZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdHdvLlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICAgICAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gICAgKi9cbiAgICBkaXN0YW5jZTogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHBvaW50QSA9PT0gXCJudW1iZXJcIikgPyB0aGlzLmRpc3RhbmNlMUQocG9pbnRBLCBwb2ludEIpIDogdGhpcy5kaXN0YW5jZTJEKHBvaW50QSwgcG9pbnRCKTtcbiAgICB9LFxuXG5cbiAgICAvKlxuICAgICAgICBEaXN0YW5jZSAxRFxuICAgICAgICBcbiAgICAgICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiBwb2ludCBBIGFuZCBwb2ludCBCXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFBvaW50IEFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiAob3B0aW9uYWwpOiBQb2ludCBCXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gICAgKi9cbiAgICBkaXN0YW5jZTFEOiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICBcdHZhciBiSXNOdW0gPSAodHlwZW9mIHBvaW50QiA9PT0gJ251bWJlcicpLFxuICAgIFx0XHRmcm9tID0gYklzTnVtID8gcG9pbnRBIDogMCxcbiAgICBcdFx0dG8gPSBiSXNOdW0gPyBwb2ludEIgOiBwb2ludEE7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZGlmZmVyZW5jZShmcm9tLCB0byk7XG4gICAgfSxcblxuICBcbiAgICAvKlxuICAgICAgICBEaXN0YW5jZSAyRFxuICAgICAgICBcbiAgICAgICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAoMCwwKSBhbmQgcG9pbnQgQSwgdW5sZXNzIHBvaW50IEJcbiAgICAgICAgaXMgcHJvdmlkZWQsIHRoZW4gd2UgcmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHR3by5cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogeCBhbmQgeSBvZiBwb2ludCBBXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogKG9wdGlvbmFsKTogeCBhbmQgeSBvZiBwb2ludCBCXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gICAgKi9cbiAgICBkaXN0YW5jZTJEOiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgdmFyIGJJc09iaiA9ICh0eXBlb2YgcG9pbnRCID09PSBcIm9iamVjdFwiKSxcbiAgICAgICAgICAgIGZyb20gPSBiSXNPYmogPyBwb2ludEEgOiB7eDogMCwgeTogMH0sXG4gICAgICAgICAgICB0byA9IGJJc09iaiA/IHBvaW50QiA6IHBvaW50QSxcbiAgICAgICAgICAgIHBvaW50ID0ge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuZGlmZmVyZW5jZShmcm9tLngsIHRvLngpLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuZGlmZmVyZW5jZShmcm9tLnksIHRvLnkpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmh5cG90ZW51c2UocG9pbnQueCwgcG9pbnQueSk7XG4gICAgfSxcbiAgICBcbiAgICAgICAgXG4gICAgLypcbiAgICAgICAgSHlwb3RlbnVzZVxuICAgICAgICBcbiAgICAgICAgUmV0dXJucyB0aGUgaHlwb3RlbnVzZSwgc2lkZSBDLCBnaXZlbiB0aGUgbGVuZ3RocyBvZiBzaWRlcyBBIGFuZCBCLlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBCXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4gICAgKi9cbiAgICBoeXBvdGVudXNlOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgYTIgPSBhICogYSxcbiAgICAgICAgICAgIGIyID0gYiAqIGIsXG4gICAgICAgICAgICBjMiA9IGEyICsgYjI7XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChjMik7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBPZmZzZXQgYmV0d2VlbiB0d28gcG9pbnRzXG4gICAgICAgIFxuICAgICAgICBDYWxjdWxhdGUgdGhlIGFuZ2xlLCBkaXN0YW5jZSwgeCB5IGFuZCB6IGRpc3RhbmNlcyBiZXR3ZWVuIHR3byBnaXZlbiBwb2ludHNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBwb2ludFxuICAgICAgICBAcGFyYW0gW1BvaW50XTogU2Vjb25kIHBvaW50XG4gICAgICAgIEByZXR1cm4gW09mZnNldF06IERpc3RhbmNlIG1ldHJpY3MgYmV0d2VlbiB0d28gcG9pbnRzXG4gICAgKi9cbiAgICBvZmZzZXQ6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICB2YXIgYW5nbGUgPSB0aGlzLmFuZ2xlKHBvaW50QSwgcG9pbnRCKSxcbiAgICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZTJEKHBvaW50QSwgcG9pbnRCKSxcbiAgICAgICAgICAgIHggPSB0aGlzLmRpc3RhbmNlMUQocG9pbnRBLngsIHBvaW50Qi54KSxcbiAgICAgICAgICAgIHkgPSB0aGlzLmRpc3RhbmNlMUQocG9pbnRBLnksIHBvaW50Qi55KSxcbiAgICAgICAgICAgIHogPSB0aGlzLmRpc3RhbmNlMUQocG9pbnRBLnosIHBvaW50Qi56KTtcbiAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3IE9mZnNldChhbmdsZSwgZGlzdGFuY2UsIHgsIHksIHopO1xuICAgIH0sXG4gICAgXG4gICAgcG9pbnQ6IGZ1bmN0aW9uIChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkge1xuICAgIFx0dmFyIHBvaW50ID0ge307XG5cbiAgICBcdHBvaW50LnggPSA1ICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLng7XG4gICAgXHRwb2ludC55ID0gNSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55O1xuXG5cdCAgICByZXR1cm4gcG9pbnQ7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICAgICBcbiAgICAgICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgICAgICAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gICAgICAgIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBpZiBmdWxsIHJhbmdlIGdpdmVuLCB1cHBlciBpZiBub3RcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4gICAgKi9cbiAgICBwcm9ncmVzczogZnVuY3Rpb24gKHZhbHVlLCBsaW1pdEEsIGxpbWl0Qikge1xuICAgIFx0dmFyIGJJc051bSA9ICh0eXBlb2YgbGltaXRCID09PSAnbnVtYmVyJyksXG4gICAgXHRcdGZyb20gPSBiSXNOdW0gPyBsaW1pdEEgOiAwLFxuICAgIFx0XHR0byA9IGJJc051bSA/IGxpbWl0QiA6IGxpbWl0QSxcbiAgICBcdFx0cmFuZ2UgPSB0aGlzLmRpZmZlcmVuY2UoZnJvbSwgdG8pLFxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAodmFsdWUgLSBmcm9tKSAvIHJhbmdlO1xuXG4gICAgICAgIHJldHVybiBwcm9ncmVzcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG5cdCAgICBSZXR1cm4gcmFuZG9tIG51bWJlciBiZXR3ZWVuIHJhbmdlXG5cdCAgICBcblx0ICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWluaW11bVxuXHQgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtYXhpbXVtXG5cdCAgICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4gICAgKi9cbiAgICByYW5kb206IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuXHQgICAgbWluID0gdXRpbHMuaXNOdW0obWluKSA/IG1pbiA6IDA7XG5cdCAgICBtYXggPSB1dGlscy5pc051bShtYXgpID8gbWF4IDogMTtcblx0ICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgfSxcblxuXG4gICAgLypcbiAgICAgICAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgICAgICAgXG4gICAgICAgIFJldHVybiB2YWx1ZSB3aXRoaW4gdGhlIHJhbmdlIG9mIGxvd2VyTGltaXQgYW5kIHVwcGVyTGltaXRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8ga2VlcCB3aXRoaW4gcmFuZ2VcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGxpbWl0ZWQgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgKi9cbiAgICByZXN0cmljdGVkOiBmdW5jdGlvbiAodmFsdWUsIGZyb20sIHRvKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgZnJvbSksIHRvKTtcbiAgICB9LFxuICAgIFxuXG4gICAgLypcbiAgICAgICAgVGltZSByZW1haW5pbmdcbiAgICAgICAgXG4gICAgICAgIFJldHVybiB0aGUgYW1vdW50IG9mIHRpbWUgcmVtYWluaW5nIGZyb20gdGhlIHByb2dyZXNzIGFscmVhZHkgbWFkZVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyB0aHJvdWdoIHRpbWUgbGltaXQgYmV0d2VlbiAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBEdXJhdGlvblxuICAgICovXG4gICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKHByb2dyZXNzLCBkdXJhdGlvbikge1xuICAgICAgICByZXR1cm4gKDEgLSBwcm9ncmVzcykgKiBkdXJhdGlvbjtcbiAgICB9LFxuXG4gXG4gICAgLypcbiAgICAgICAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgICAgICBcbiAgICAgICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gICAgICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2UsIG9yIHVwcGVyIGlmIGxpbWl0MiBub3QgcHJvdmlkZWRcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiAocHJvZ3Jlc3MsIGxpbWl0QSwgbGltaXRCKSB7XG4gICAgXHR2YXIgYklzTnVtID0gKHR5cGVvZiBsaW1pdEIgPT09ICdudW1iZXInKSxcbiAgICBcdFx0ZnJvbSA9IGJJc051bSA/IGxpbWl0QSA6IDAsXG4gICAgXHRcdHRvID0gYklzTnVtID8gbGltaXRCIDogbGltaXRBO1xuXG4gICAgICAgIHJldHVybiAoLSBwcm9ncmVzcyAqIGZyb20pICsgKHByb2dyZXNzICogdG8pICsgZnJvbTsgXG4gICAgfSxcblxuXG4gICAgLypcbiAgICAgICAgRWFzZWQgdmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgICAgICBcbiAgICAgICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gICAgICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2UsIG9yIHVwcGVyIGlmIGxpbWl0MiBub3QgcHJvdmlkZWRcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogRWFzaW5nIHRvIGFwcGx5IHRvIHZhbHVlXG4gICAgICAgIEBwYXJtYSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXJcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuICAgICovXG4gICAgdmFsdWVFYXNlZDogZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzaW5nKSB7XG4gICAgICAgIHZhciBlYXNlZFByb2dyZXNzID0gZWFzaW5nKHByb2dyZXNzKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbiAgICB9LFxuICAgIFxuICAgIGRlZ3JlZXNUb1JhZGlhbnM6IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG5cdCAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gICAgfSxcbiAgICBcbiAgICByYWRpYW5zVG9EZWdyZWVzOiBmdW5jdGlvbiAocmFkaWFucykge1xuXHQgICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xuICAgIH1cbn07XG5cbmNhbGMgPSBuZXcgQ2FsYygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNhbGM7IiwiLypcbiAgICBFYXNpbmcgZnVuY3Rpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIEdlbmVyYXRlcyBhbmQgcHJvdmlkZXMgZWFzaW5nIGZ1bmN0aW9ucyBiYXNlZCBvbiBiYXNlRnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgICBcbiAgICBBIGNhbGwgdG8gZWFzaW5nRnVuY3Rpb24uZ2V0KCdmdW5jdGlvbk5hbWUnKSByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcGFzc2VkOlxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIDAtMVxuICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogQW1wIG1vZGlmaWVyLCBvbmx5IGFjY2VwdGVkIGluIHNvbWUgZWFzaW5nIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGlzIHVzZWQgdG8gYWRqdXN0IG92ZXJhbGwgc3RyZW5ndGhcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogRWFzZWQgcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgV2UgY2FuIGdlbmVyYXRlIG5ldyBmdW5jdGlvbnMgYnkgc2VuZGluZyBhbiBlYXNpbmcgZnVuY3Rpb24gdGhyb3VnaCBlYXNpbmdGdW5jdGlvbi5leHRlbmQobmFtZSwgbWV0aG9kKS5cbiAgICBXaGljaCB3aWxsIG1ha2UgbmFtZUluLCBuYW1lT3V0IGFuZCBuYW1lSW5PdXQgZnVuY3Rpb25zIGF2YWlsYWJsZSB0byB1c2UuXG4gICAgXG4gICAgQmFzZSBlYXNpbmdcbiAgICAgICAgbGluZWFyOiBkZWZhdWx0LCBubyBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuICAgICAgICBxdWFkXG4gICAgICAgIGN1YmljXG4gICAgICAgIHF1YXJ0XG4gICAgICAgIHF1aW50XG4gICAgICAgIGV4cFxuICAgICAgICBjaXJjXG4gICAgICAgIGJhY2tcbiAgICAgICAgYm91bmNlXG4gICAgICAgIHN3aW5nXG4gICAgICAgIHNwcmluZ1xuICAgICAgICBcbiAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgICAgIFxuICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuL2NhbGMuanMnKSxcbiBcdHV0aWwgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyksXG4gXHRLRVkgPSByZXF1aXJlKCcuLi9vcHRzL2tleXMuanMnKSxcbiBcdGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vb3B0cy9kZWZhdWx0cy5qcycpLFxuIFx0QmV6aWVyID0gcmVxdWlyZSgnLi4vYml0cy9iZXppZXIuanMnKSxcbiBcdEVhc2luZ0Z1bmN0aW9uID0gZnVuY3Rpb24gKCkge30sXG5cdGVhc2luZ0Z1bmN0aW9uLFxuXHQvKlxuICAgIFx0RWFjaCBvZiB0aGVzZSBiYXNlIGZ1bmN0aW9ucyBpcyBhbiBlYXNlSW5cbiAgICBcdFxuICAgIFx0T24gaW5pdCwgd2UgdXNlIEVhc2luZ0Z1bmN0aW9uLm1pcnJvciBhbmQgLnJldmVyc2UgdG8gZ2VuZXJhdGUgZWFzZUluT3V0IGFuZFxuICAgIFx0ZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuXHQqL1xuXHRiYXNlSW4gPSB7XG5cdCAgICAvKlxuICAgIFx0ICAgIFF1YWQgLSBRdW5pdCBlYXNpbmdcbiAgICBcdCAgICBcbiAgICBcdCAgICBHZW5lcmF0ZXMgZWFzaW5nIGN1cnZlIGJhc2VkIG9uIGV4cG9uZW50IG9mIHRpbWVcblx0ICAgICovXG4gICAgICAgIHF1YWQ6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCAyKTtcbiAgICAgICAgfSxcbiAgICAgICAgY3ViaWM6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCAzKTtcbiAgICAgICAgfSxcbiAgICAgICAgcXVhcnQ6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCA0KTtcbiAgICAgICAgfSxcbiAgICAgICAgcXVpbnQ6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCA1KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2lyYzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwcm9ncmVzcykpO1xuICAgICAgICB9LFxuICAgICAgICBiYWNrOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHZhciBzdHJlbmd0aCA9IDEuNTtcblxuICAgICAgICAgICAgcmV0dXJuIChwcm9ncmVzcyAqIHByb2dyZXNzKSAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBiYXNlT3V0ID0ge1xuICAgICAgICBib3VuY2U6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuXHRcdFx0aWYgKChwcm9ncmVzcykgPCAoMS8yLjc1KSkge1xuXHRcdFx0XHRyZXR1cm4gKDcuNTYyNSpwcm9ncmVzcypwcm9ncmVzcyk7XG5cdFx0XHR9IGVsc2UgaWYgKHByb2dyZXNzIDwgKDIvMi43NSkpIHtcblx0XHRcdFx0cmV0dXJuICg3LjU2MjUqKHByb2dyZXNzLT0oMS41LzIuNzUpKSpwcm9ncmVzcyArIC43NSk7XG5cdFx0XHR9IGVsc2UgaWYgKHByb2dyZXNzIDwgKDIuNS8yLjc1KSkge1xuXHRcdFx0XHRyZXR1cm4gKDcuNTYyNSoocHJvZ3Jlc3MtPSgyLjI1LzIuNzUpKSpwcm9ncmVzcyArIC45Mzc1KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiAoNy41NjI1Kihwcm9ncmVzcy09KDIuNjI1LzIuNzUpKSpwcm9ncmVzcyArIC45ODQzNzUpO1xuXHRcdFx0fVxuICAgICAgICB9LFxuXHQgICAgc3dpbmc6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuXHRcdCAgICB2YXIgcyA9IDEuNzAxNTg7XG5cdFx0ICAgIHJldHVybiAocHJvZ3Jlc3MgLT0gMSkgKiBwcm9ncmVzcyAqICgocyArIDEpICogcHJvZ3Jlc3MgKyBzKSArIDE7XG5cdCAgICB9LFxuXHQgICAgc3ByaW5nOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcblx0ICAgIFx0cmV0dXJuIDEgLSAoTWF0aC5jb3MocHJvZ3Jlc3MgKiA0LjUgKiBNYXRoLlBJKSAqIE1hdGguZXhwKC1wcm9ncmVzcyAqIDYpKTtcblx0ICAgIH1cblx0fTtcblx0XG5FYXNpbmdGdW5jdGlvbi5wcm90b3R5cGUgPSB7XG5cbiAgICAvKlxuICAgICAgICBHZXQgdGhlIG5hbWVkIGVhc2luZyBmdW5jdGlvblxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gZ2V0IFxuICAgICAgICBAcmV0dXJuIFtmdW5jdGlvbiB8fCBib29sZWFuXTogRWFzaW5nIGZ1bmN0aW9uIG9yIGZhbHNlIGlmIGZ1bmN0aW9uIHVuZGVmaW5lZFxuICAgICovXG5cdGdldDogZnVuY3Rpb24gKG5hbWUpIHtcblx0XHR2YXIgZWFzaW5nID0gdGhpc1tuYW1lXTtcblx0XHRcblx0XHRpZiAoIWVhc2luZykge1xuXHRcdFx0dGhyb3cgbmFtZSArIEtFWS5FUlJPUi5JTlZBTElEX0VBU0lORztcblx0XHR9XG5cblx0XHRyZXR1cm4gZWFzaW5nO1xuXHR9LFxuXHRcblx0XG5cdC8qXG4gICAgXHRBZGQgQmV6aWVyIEN1cnZlIGVhc2luZ1xuICAgIFx0XG4gICAgXHRAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgbmV3IGVhc2luZ1xuICAgIFx0QHBhcm1hIFtudW1iZXJdOiBYIG9mIGNvb3JkaW5hdGUgMVxuICAgIFx0QHBhcm1hIFtudW1iZXJdOiBZIG9mIGNvb3JkaW5hdGUgMVxuICAgIFx0QHBhcm1hIFtudW1iZXJdOiBYIG9mIGNvb3JkaW5hdGUgMlxuICAgIFx0QHBhcm1hIFtudW1iZXJdOiBZIG9mIGNvb3JkaW5hdGUgMlxuXHQqL1xuXHRhZGRCZXppZXI6IGZ1bmN0aW9uIChuYW1lLCB4MSwgeTEsIHgyLCB5Mikge1xuXHRcdGlmICghdGhpc1tuYW1lXSkge1xuXHRcdFx0dGhpc1tuYW1lXSA9IG5ldyBCZXppZXIoeDEsIHkxLCB4MiwgeTIpO1xuXHRcdH1cblx0fSxcblxuICAgICAgXG4gICAgLypcbiAgICAgICAgTWlycm9yIGVhc2luZ1xuICAgICAgICBcbiAgICAgICAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICAgICAgICBlYXNlSW4gaW50byBhbiBlYXNlSW5PdXRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gbWlycm9yXG4gICAgICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4gICAgKi9cblx0bWlycm9yRWFzaW5nOiBmdW5jdGlvbiAocHJvZ3Jlc3MsIG1ldGhvZCkge1xuICAgICAgICB2YXIgZGVsdGE7XG4gICAgICAgIFxuICAgICAgICBpZiAocHJvZ3Jlc3MgPD0gMC41KSB7XG4gICAgICAgICAgICBkZWx0YSA9IG1ldGhvZCgyICogcHJvZ3Jlc3MpIC8gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbHRhID0gKDIgLSBtZXRob2QoMiAqICgxIC0gcHJvZ3Jlc3MpKSkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGVsdGE7XG4gICAgfSxcbiAgICAgICAgICAgIFxuICAgIC8qXG4gICAgICAgIFJldmVyc2UgZWFzaW5nXG4gICAgICAgIFxuICAgICAgICBSZXZlcnNlcyB0aGUgb3V0cHV0IG9mIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgZm9yIGZsaXBwaW5nIGVhc2VJblxuICAgICAgICBjdXJ2ZSB0byBhbiBlYXNlT3V0LlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byByZXZlcnNlXG4gICAgICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4gICAgKi9cbiAgICByZXZlcnNlRWFzaW5nOiBmdW5jdGlvbiAocHJvZ3Jlc3MsIG1ldGhvZCkge1xuICAgICAgICByZXR1cm4gMSAtIG1ldGhvZCgxIC0gcHJvZ3Jlc3MpO1xuICAgIH0sXG4gICAgXG4gICAgXG4gICAgLypcbiAgICAgICAgQWRkIG5ldyBlYXNpbmcgZnVuY3Rpb25cbiAgICAgICAgXG4gICAgICAgIFRha2VzIG5hbWUgYW5kIGdlbmVyYXRlcyBuYW1lSW4sIG5hbWVPdXQsIG5hbWVJbk91dCwgYW5kIGVhc2luZyBmdW5jdGlvbnMgdG8gbWF0Y2hcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogQmFzZSBuYW1lIG9mIHRoZSBlYXNpbmcgZnVuY3Rpb25zIHRvIGdlbmVyYXRlXG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBCYXNlIGVhc2luZyBmdW5jdGlvbiwgYXMgYW4gZWFzZUluLCBmcm9tIHdoaWNoIHRvIGdlbmVyYXRlIE91dCBhbmQgSW5PdXRcbiAgICAqL1xuXHRnZW5lcmF0ZTogZnVuY3Rpb24gKG5hbWUsIG1ldGhvZCwgaXNCYXNlSW4pIHtcblx0XHR2YXIgc2VsZiA9IHRoaXMsXG5cdFx0XHRuYW1lcyA9IHtcblx0XHRcdFx0ZWFzZUluOiBuYW1lICsgS0VZLkVBU0lORy5JTiwgXG5cdFx0XHRcdGVhc2VPdXQ6IG5hbWUgKyBLRVkuRUFTSU5HLk9VVCxcblx0XHRcdFx0ZWFzZUluT3V0OiBuYW1lICsgS0VZLkVBU0lORy5JTl9PVVRcblx0XHRcdH0sXG5cdFx0XHRiYXNlTmFtZSA9IGlzQmFzZUluID8gbmFtZXMuZWFzZUluIDogbmFtZXMuZWFzZU91dCxcblx0XHRcdHJldmVyc2VOYW1lID0gaXNCYXNlSW4gPyBuYW1lcy5lYXNlT3V0IDogbmFtZXMuZWFzZUluO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgSW4gZnVuY3Rpb25cbiAgICAgICAgdGhpc1tiYXNlTmFtZV0gPSBtZXRob2Q7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBPdXQgZnVuY3Rpb24gYnkgcmV2ZXJzaW5nIHRoZSB0cmFuc2l0aW9uIGN1cnZlXG4gICAgICAgIHRoaXNbcmV2ZXJzZU5hbWVdID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5yZXZlcnNlRWFzaW5nKHByb2dyZXNzLCBzZWxmW25hbWVzLmVhc2VJbl0pO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBJbk91dCBmdW5jdGlvbiBieSBtaXJyb3JpbmcgdGhlIHRyYW5zaXRpb24gY3VydmVcbiAgICAgICAgdGhpc1tuYW1lcy5lYXNlSW5PdXRdID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5taXJyb3JFYXNpbmcocHJvZ3Jlc3MsIHNlbGZbbmFtZXMuZWFzZUluXSk7XG4gICAgICAgIH07XG5cdH0sXG4gICAgXG4gICAgXG4gICAgLypcbiAgICAgICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgYmV0d2VlbiAwIGFuZCAxXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDEgcHJvZ3Jlc3NcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBFYXNpbmcgdG8gdXNlXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQW1wbGlmeSBwcm9ncmVzcyBvdXQgb2Ygc3BlY2lmaWVkIHJhbmdlXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIG9mIGVhc2VkIHByb2dyZXNzIGluIHJhbmdlXG4gICAgKi8gIFxuICAgIHdpdGhpblJhbmdlOiBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlLCBlc2NhcGVBbXApIHtcbiAgICAgICAgdmFyIG5ld1Byb2dyZXNzID0gY2FsYy5yZXN0cmljdGVkKHByb2dyZXNzLCAwLCAxKSxcbiAgICAgICAgICAgIGluUmFuZ2UgPSB1dGlsLmlzSW5SYW5nZShwcm9ncmVzcywgMCwgMSk7XG4gICAgICAgICAgICBcbiAgICAgICAgZWFzZSA9IGluUmFuZ2UgPyBlYXNlIDogS0VZLkVBU0lORy5MSU5FQVI7XG5cbiAgICAgICAgaWYgKCFpblJhbmdlKSB7XG4gICAgICAgICAgICBuZXdQcm9ncmVzcyA9IG5ld1Byb2dyZXNzICsgKGNhbGMuZGlmZmVyZW5jZShuZXdQcm9ncmVzcywgcHJvZ3Jlc3MpICogZXNjYXBlQW1wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWxjLnZhbHVlRWFzZWQobmV3UHJvZ3Jlc3MsIGZyb20sIHRvLCB0aGlzLmdldChlYXNlKSk7XG4gICAgfSxcbiAgICAgICAgXG4gICAgLypcbiAgICAgICAgTGluZWFyIGVhc2luZyBhZGp1c3RtZW50XG4gICAgICAgIFxuICAgICAgICBUaGUgZGVmYXVsdCBlYXNpbmcgbWV0aG9kLCBub3QgYWRkZWQgd2l0aCAuZXh0ZW5kIGFzIGl0IGhhcyBubyBPdXQgb3IgSW5PdXRcbiAgICAgICAgdmFyaWF0aW9uLlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwLTFcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVW5hZGp1c3RlZCBwcm9ncmVzc1xuICAgICovXG4gICAgJ2xpbmVhcic6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgfSxcbiAgICBcbiAgICAnZWFzZSc6XHRcdFx0bmV3IEJlemllciguMjUsIC4xLCAuMjUsIDEuMCksXG4gICAgJ2Vhc2UtaW4nOlx0XHRuZXcgQmV6aWVyKC40MiwgMCwgMS4wMCwgMS4wKSxcbiAgICAnZWFzZS1vdXQnOlx0XHRuZXcgQmV6aWVyKDAsIDAsIC41OCwgMS4wKSxcbiAgICAnZWFzZS1pbi1vdXQnOlx0bmV3IEJlemllciguNDIsIDAsIC41OCwgMS4wKSxcbiAgICAnYmFjay1pbic6IFx0XHRuZXcgQmV6aWVyKC40OCwtMC40NSwuOTksLjc5KSxcbiAgICAnYmFjay1vdXQnOiBcdG5ldyBCZXppZXIoLjExLC43LC42LDEuMzEpXG5cbn07XG5cbmVhc2luZ0Z1bmN0aW9uID0gbmV3IEVhc2luZ0Z1bmN0aW9uKCk7XG5cbmluaXQoKTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcblxuXHQvLyBHZW5lcmF0ZSBlYXNpbmcgd2l0aCBiYXNlIGZ1bmN0aW9uIG9mIGVhc2VJblxuXHRmb3IgKHZhciBrZXkgaW4gYmFzZUluKSB7XG5cdFx0aWYgKGJhc2VJbi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRlYXNpbmdGdW5jdGlvbi5nZW5lcmF0ZShrZXksIGJhc2VJbltrZXldLCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXHQvLyBHZW5lcmF0ZSBlYXNpbmcgd2l0aCBiYXNlIGZ1bmN0aW9uIG9mIGVhc2VPdXRcblx0Zm9yIChrZXkgaW4gYmFzZU91dCkge1xuXHRcdGlmIChiYXNlT3V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdGVhc2luZ0Z1bmN0aW9uLmdlbmVyYXRlKGtleSwgYmFzZU91dFtrZXldKTtcblx0XHR9XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlYXNpbmdGdW5jdGlvbjtcbiIsIi8qXG4gICAgUmVkc2hpZnQgalF1ZXJ5IHBsdWdpblxuICAgIFxuICAgIFByb3ZpZGVzIGFjY2VzcyB0byAucGxheSwgLm1vdmUgYW5kIC50cmFjayBwcm9wZXJ0aWVzIG9uIGFuIGpRdWVyeSBvYmplY3QuXG4gICAgVXNlcyB0aGF0IGpRdWVyeSBvYmplY3QgdG8gc3RvcmUgYSB1bnFpdWUgUmVkc2hpZnQgaW5zdGFuY2UuXG4gICAgXG4gICAgLnJlZHNoaWZ0KCkgbWV0aG9kIHVzZWQgZm9yIG90aGVyIFJlZHNoaWZ0IGZ1bmN0aW9ucywgaWUgJCgnI2VsZW1lbnQnKS5yZWRzaGlmdCgnc3RvcCcpXG4qL1xudmFyIEtFWSA9IHJlcXVpcmUoJy4uL29wdHMva2V5cy5qcycpLFxuICAgIHJRdWVyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICBcdHZhciBSRURTSElGVCA9ICdyZWRzaGlmdCcsXG4gICAgXHRcdGV4ZWN1dGUgPSBmdW5jdGlvbiAoJGVsZW1lbnQsIGFjdGlvbiwgYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIFx0XHRcdCRlbGVtZW50LmVhY2goZnVuY3Rpb24gKCkge1xuICAgIFx0XHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICBcdFx0XHRcdFx0dGhpc1JlZHNoaWZ0ID0gJHRoaXMuZGF0YShSRURTSElGVCk7XG4gICAgXHRcdFx0XHRcbiAgICBcdFx0XHRcdC8vIElmIHdlIGhhdmVuJ3Qgc3RvcmVkIGEgUmVkc2hpZnQgaW5zdGFuY2Ugb24gdGhpcyBlbGVtZW50LCBtYWtlIG9uZVxuICAgIFx0XHRcdFx0aWYgKCF0aGlzUmVkc2hpZnQpIHtcbiAgICBcdFx0XHRcdFx0dGhpc1JlZHNoaWZ0ID0gUmVkc2hpZnQuZ2V0KCk7XG4gICAgXHRcdFx0XHRcdHRoaXNSZWRzaGlmdC5kYXRhKEtFWS5KUVVFUllfRUxFTUVOVCwgJHRoaXMpO1xuICAgIFx0XHRcdFx0XHQkdGhpcy5kYXRhKFJFRFNISUZULCB0aGlzUmVkc2hpZnQpO1xuICAgIFx0XHRcdFx0fVxuXG4gICAgXHRcdFx0XHR0aGlzUmVkc2hpZnRbYWN0aW9uXShhcmcxLCBhcmcyLCBhcmczKTtcbiAgICBcdFx0XHR9KTtcbiAgICBcdFx0fTtcbiAgICBcdFx0XG4gICAgXHQkLmZuLnBsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgXHRcdGV4ZWN1dGUodGhpcywgJ3BsYXknLCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XG4gICAgXHRcdFxuICAgIFx0XHRyZXR1cm4gdGhpcztcbiAgICBcdH07XG4gICAgXHRcbiAgICBcdCQuZm4ubW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBcdFx0ZXhlY3V0ZSh0aGlzLCAnbW92ZScsIGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcbiAgICBcbiAgICBcdFx0cmV0dXJuIHRoaXM7XG4gICAgXHR9O1xuICAgIFx0XG4gICAgXHQkLmZuLnRyYWNrID0gZnVuY3Rpb24gKCkge1xuICAgIFx0XHRleGVjdXRlKHRoaXMsICd0cmFjaycsIGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgIFx0XHRcbiAgICBcdFx0cmV0dXJuIHRoaXM7XG4gICAgXHR9O1xuICAgIFx0XG4gICAgXHQkLmZuLnJlZHNoaWZ0ID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIFx0XHRleGVjdXRlKHRoaXMsIGFjdGlvbiwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuICAgIFx0XHRcbiAgICBcdFx0cmV0dXJuIHRoaXM7XG4gICAgXHR9O1xuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNoZWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh3aW5kb3cualF1ZXJ5KSB7XG4gICAgICAgICAgICByUXVlcnkoKTtcbiAgICAgICAgfVxuICAgIH1cbn07IiwidmFyIFNoaW0gPSBmdW5jdGlvbiAoKSB7fTtcblxuU2hpbS5wcm90b3R5cGUgPSB7XG5cbiAgICAvKlxuICAgICAgICBpbmRleE9mIHBvbHlmaWxsXG4gICAgICAgIFxuICAgICAgICBGb3IgSUU4IHRyb2dsb2RpdGVzXG4gICAgICAgIFxuICAgICAgICBUYWtlbiBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzYyOTE4My93aHktZG9lc250LWluZGV4b2Ytd29yay1vbi1hbi1hcnJheS1pZThcbiAgICAqL1xuICAgIGluZGV4T2Y6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiAoZWx0IC8qLCBmcm9tKi8pIHtcbiAgICAgICAgICAgICAgICB2YXIgbGVuID0gdGhpcy5sZW5ndGggPj4+IDAsXG4gICAgICAgICAgICAgICAgICAgIGZyb20gPSBOdW1iZXIoYXJndW1lbnRzWzFdKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmcm9tID0gKGZyb20gPCAwKSA/IE1hdGguY2VpbChmcm9tKSA6IE1hdGguZmxvb3IoZnJvbSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGZyb20gPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb20gKz0gbGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgKDsgZnJvbSA8IGxlbjsgZnJvbSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcm9tIGluIHRoaXMgJiYgdGhpc1tmcm9tXSA9PT0gZWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnJvbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgICBcbiAgICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXNcbiAgICBcbiAgICAgICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgICAgICBcbiAgICAgICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICAgICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICAgICAgXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgICAgIFxuICAgICAgICBNSVQgbGljZW5zZVxuICAgICovXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsYXN0VGltZSA9IDAsXG4gICAgICAgICAgICB2ZW5kb3JzID0gWydtcycsICdtb3onLCAnd2Via2l0JywgJ28nXSxcbiAgICAgICAgICAgIHZlbmRvcnNMZW5ndGggPSB2ZW5kb3JzLmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgIC8vIENoZWNrIGZvciBwcmVmaXhlZCBpbXBsZW1lbnRhdGlvbnNcbiAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCB2ZW5kb3JzTGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyB4KyspIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1t4XSsnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIElmIHRoZXJlIGlzLCBmbyBhYnNvbHV0ZSBzaGl6emxlLCBubyByQUYgaW1wbGVtZW50YXRpb25zLCBtYWtlIG9uZSBvdXQgb2Ygc2V0VGltZW91dCBhbmQgcHV0dHlcbiAgICAgICAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgICAgIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSksXG4gICAgICAgICAgICAgICAgICAgIGlkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5zaGltID0gbmV3IFNoaW0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZmVhdHVyZUNoZWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNoaW0uaW5kZXhPZigpO1xuICAgICAgICBzaGltLnJlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xuICAgIH1cbn07IiwiLypcbiAgICBVdGlsaXR5IGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBjb252ZXJ0RXZlbnRJbnRvUG9pbnRcbiAgICBnZXRBY3R1YWxFdmVudFxuICAgIGhhc01vdmVkXG4gICAgaXNNb3VzZUV2ZW50XG4gICAgY3VycmVudFRpbWVcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIEtFWSA9IHJlcXVpcmUoJy4uL29wdHMva2V5cy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIC8qXG4gICAgICAgIENvbnZlcnQgZXZlbnQgaW50byBwb2ludFxuICAgICAgICBcbiAgICAgICAgU2NyYXBlIHRoZSB4L3kgY29vcmRpbmF0ZXMgZnJvbSB0aGUgcHJvdmlkZWQgZXZlbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbZXZlbnRdOiBPcmlnaW5hbCBwb2ludGVyIGV2ZW50XG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IHgveSBjb29yZGluYXRlcyBvZiBldmVudFxuICAgICovXG4gICAgY29udmVydEV2ZW50SW50b1BvaW50OiBmdW5jdGlvbiAoZXZlbnQsIGlzVG91Y2hFdmVudCkge1xuICAgIFx0cmV0dXJuIHtcbiAgICAgICAgICAgIHg6IGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5zY3JlZW5YLFxuICAgICAgICAgICAgeTogaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LnNjcmVlbllcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBhY3R1YWwgZXZlbnRcbiAgICAgICAgXG4gICAgICAgIENoZWNrcyBmb3IgalF1ZXJ5J3MgLm9yaWdpbmFsRXZlbnQgaWYgcHJlc2VudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtldmVudCB8IGpRdWVyeSBldmVudF1cbiAgICAgICAgQHJldHVybiBbZXZlbnRdOiBUaGUgYWN0dWFsIEpTIGV2ZW50ICBcbiAgICAqL1xuICAgIGdldEFjdHVhbEV2ZW50OiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50Lm9yaWdpbmFsRXZlbnQgfHwgZXZlbnQ7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBIYXMgdGhlIHBvaW50ZXIgbW92ZWQ/XG4gICAgICAgIFxuICAgICAgICBDb21wYXJlcyB0aGUgdHdvIHByb3ZpZGVkIHBvaW50ZXJzIGFuZCByZXR1cm5zIHRydWUgaWYgdGhleSBhcmUgZGlmZmVyZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFBvaW50ZXIgQVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFBvaW50ZXIgQlxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBkaWZmZXJlbnRcbiAgICAqL1xuICAgIGhhc01vdmVkOiBmdW5jdGlvbiAocG9pbnRlckEsIHBvaW50ZXJCKSB7XG4gICAgICAgIHJldHVybiAocG9pbnRlckEueCAhPT0gcG9pbnRlckIueCB8fCBwb2ludGVyQS55ICE9PSBwb2ludGVyQi55IHx8IHBvaW50ZXJBLnogIT09IHBvaW50ZXJCLnopO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyBldmVudCBhIG1vdXNlIGV2ZW50P1xuICAgICAgICBcbiAgICAgICAgQ2hlY2tzIHRoZSBwcm92aWRlZCBldmVudCB0eXBlIGZvciB0aGUgJ21vdXNlJyBzdHJpbmdcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogRXZlbnQgdHlwZVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmICdtb3VzZScgaXMgZm91bmQgaW4gc3RyaW5nXG4gICAgKi9cbiAgICBpc01vdXNlRXZlbnQ6IGZ1bmN0aW9uIChldmVudFR5cGUpIHtcblx0XHRyZXR1cm4gKGV2ZW50VHlwZS5pbmRleE9mKEtFWS5FVkVOVC5NT1VTRSkgPiAtMSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIGV2ZW50IGEgdG91Y2ggZXZlbnQ/XG4gICAgICAgIFxuICAgICAgICBDaGVja3MgdGhlIHByb3ZpZGVkIGV2ZW50IGZvciB0aGUgLnRvdWNoZXMgcHJvcFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBFdmVudFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIC50b3VjaGVzIGlzIHByZXNlbnRcbiAgICAqL1xuICAgIGlzVG91Y2hFdmVudDogZnVuY3Rpb24gKGUpIHtcblx0ICAgIHJldHVybiAoZS50b3VjaGVzKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGEgbnVtYmVyP1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuICAgICovXG4gICAgaXNOdW06IGZ1bmN0aW9uIChudW0pIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgbnVtID09PSAnbnVtYmVyJyk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhbiBvYmplY3Q/XG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4gICAgKi9cbiAgICBpc09iajogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHRoaXMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuICAgICovXG4gICAgaXNGdW5jOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiAodGhpcy52YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbicpOyBcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGEgc3RyaW5nID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuICAgICovXG4gICAgaXNTdHJpbmc6IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyk7IFxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYW4gYXJyYXkgPyBcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHRoaXMudmFyVHlwZSA9PT0gJ0FycmF5J1xuICAgICovXG4gICAgaXNBcnJheTogZnVuY3Rpb24gKGFycikge1xuXHQgICAgcmV0dXJuICh0aGlzLnZhclR5cGUoYXJyKSA9PT0gJ0FycmF5Jyk7XG4gICAgfSxcbiAgICBcbiAgICBpc0luUmFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSwgZnJvbSwgdG8pIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSA+PSBmcm9tICYmIHZhbHVlIDw9IHRvKTtcbiAgICB9LFxuICAgIFxuICAgIGNvcHk6IGZ1bmN0aW9uIChvYmopIHtcblx0ICAgIHZhciBuZXdPYmogPSB7fTtcblx0ICAgIFxuXHQgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuXHRcdCAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdCAgICBpZiAodGhpcy5pc09iaihvYmpba2V5XSkpIHtcblx0XHRcdFx0ICAgIG5ld09ialtrZXldID0gdGhpcy5jb3B5KG9ialtrZXldKTtcblx0XHRcdCAgICB9IGVsc2Uge1xuXHRcdFx0XHQgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcblx0XHRcdCAgICB9XG5cdFx0ICAgIH1cblx0ICAgIH1cblx0ICAgIFxuXHQgICAgcmV0dXJuIG5ld09iajtcbiAgICB9LFxuICAgIFxuICAgIG1lcmdlOiBmdW5jdGlvbiAoYmFzZSwgb3ZlcndyaXRlKSB7XG5cdCAgICB2YXIgbmV3T2JqID0gdGhpcy5jb3B5KGJhc2UpO1xuXHQgICAgXG5cdCAgICBmb3IgKHZhciBrZXkgaW4gb3ZlcndyaXRlKSB7XG5cdFx0ICAgIGlmIChvdmVyd3JpdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0ICAgIGlmICh0aGlzLmlzT2JqKG92ZXJ3cml0ZVtrZXldKSkge1xuXHRcdFx0XHQgICAgbmV3T2JqW2tleV0gPSB0aGlzLm1lcmdlKG5ld09ialtrZXldLCBvdmVyd3JpdGVba2V5XSk7XG5cdFx0XHQgICAgfSBlbHNlIHtcblx0XHRcdFx0ICAgIG5ld09ialtrZXldID0gb3ZlcndyaXRlW2tleV07XG5cdFx0XHQgICAgfVxuXHRcdCAgICB9XG5cdCAgICB9XG5cdCAgICBcblx0ICAgIHJldHVybiBuZXdPYmo7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIHByb2dyZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTWF4IHJhbmdlXG4gICAgICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiAgICAqL1xuICAgIHN0ZXBQcm9ncmVzczogZnVuY3Rpb24gKHZhbHVlLCBtYXgsIHN0ZXBzKSB7XG4gICAgICAgIHZhciBzdGVwcGVkID0gMCxcbiAgICAgICAgICAgIHNlZ21lbnQgPSBtYXggLyBzdGVwcztcbiAgICAgICAgICAgIFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgICAgICAgICBzdGVwcGVkID0gaSAqIHNlZ21lbnQ7XG5cbiAgICAgICAgICAgIGlmICgoaSArIDEpICogc2VnbWVudCA+IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBzdGVwcGVkO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuICAgICovXG4gICAgdmFyVHlwZTogZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG5cdCAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuICAgICovXG4gICAgY3VycmVudFRpbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cbiAgICBcbn07Il19
