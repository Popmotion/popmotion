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
                defaultAssigned,
                input = action.pointer.offset;

            for (var key in input) {
                // Check we're tracking this property
                if (input.hasOwnProperty(key) && action.values.hasOwnProperty(key)) {
                    progress[key] = calc.progress(input[key] + action.origin[key], action.values[key].min, action.values[key].max);
                }
                
                if (!defaultAssigned) {
                    progress.base = progress[key];
                    defaultAssigned = true;
                }
            }
/*
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
*/
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
            var value = action.values[key],
                easedValue = value.current,
                inputProgress;
                
            // If we've already calculated the progress for this property
            if (utils.isNum(progress[key])) {
                inputProgress = progress[key];
            
            // Or we've chosen a property to link to
            } else if (value.link && utils.isNum(progress[value.link])) {
                inputProgress = progress[value.link];
            }

            if (inputProgress !== undefined) {
                easedValue = Easing.withinRange(inputProgress, value.min, value.max, defaults.trackEase, value.escapeAmp);
            }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvYWN0aW9uLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvYmV6aWVyLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvb2Zmc2V0LmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvcG9pbnQuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvYml0cy9wb2ludGVyLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JpdHMvdmFsdWUuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvYml0cy92ZWxvY2l0eS5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy9ib2JzL2FjdGlvbk1hbmFnZXIuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvYm9icy9jaHJvbm9zLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JvYnMvZXZlbnRzLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JvYnMvaGlzdG9yeS5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy9ib2JzL3BvaW50ZXJUcmFja2VyLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JvYnMvcHJvY2Vzcy5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy9ib2JzL3J1Yml4LmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL2JvYnMvdG9rZW4uanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvb3B0cy9kZWZhdWx0cy5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy9vcHRzL2tleXMuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvcmVkc2hpZnQuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvdXRpbHMvY2FsYy5qcyIsIi9Vc2Vycy9tYXR0LnBlcnJ5L1NpdGVzL3JlZHNoaWZ0L3NyYy91dGlscy9lYXNpbmdGdW5jdGlvbnMuanMiLCIvVXNlcnMvbWF0dC5wZXJyeS9TaXRlcy9yZWRzaGlmdC9zcmMvdXRpbHMvclF1ZXJ5LmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL3V0aWxzL3NoaW1zLmpzIiwiL1VzZXJzL21hdHQucGVycnkvU2l0ZXMvcmVkc2hpZnQvc3JjL3V0aWxzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1YUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM1FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdlRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgS0VZID0gcmVxdWlyZSgnLi4vb3B0cy9rZXlzLmpzJyksXG4gICAgY2FsYyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhbGMuanMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL3V0aWxzLmpzJyksXG4gICAgVG9rZW4gPSByZXF1aXJlKCcuLi9ib2JzL3Rva2VuLmpzJyksXG4gICAgdG9rZW4gPSBuZXcgVG9rZW4oKSxcbiAgICBWYWx1ZSA9IHJlcXVpcmUoJy4vdmFsdWUuanMnKSxcbiAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHt9LFxuICAgIEFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICAgICAgdGhpcy50b2tlbiA9IHRva2VuLmdlbmVyYXRlKCk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLm9yaWdpbiA9IHt9O1xuICAgICAgICB0aGlzLnBsYXlsaXN0ID0gW107XG4gICAgfSxcbiAgICBkZWZhdWx0cyA9IHtcbiAgICBcbiAgICAgICAgLy8gSXMgdGhpcyBhY3Rpb24gYWN0aXZlXG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIFxuICAgICAgICAvLyBXaGF0IHRvIHVzZSB0byBwcm9jZXNzIHRoaXMgYWNpdG9uXG4gICAgICAgIGxpbms6IEtFWS5MSU5LLlRJTUUsXG4gICAgICAgIFxuICAgICAgICAvLyBNdWx0aXBseSBvdXRwdXQgdmFsdWUgYnlcbiAgICAgICAgYW1wOiAxLFxuICAgICAgICBcbiAgICAgICAgLy8gTXVsdGlwbHkgb3V0cHV0IHZhbHVlIG91dHNpZGUgbWluL21heCBieVxuICAgICAgICBlc2NhcGVBbXA6IDAsXG4gICAgICAgIFxuICAgICAgICAvLyBEZWxheSB0aGlzIGFjdGlvbiBieSB4IG1zXG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgICBcbiAgICAgICAgLy8gVGltZSBvZiBhbmltYXRpb24gKGlmIGFuaW1hdGluZykgaW4gbXNcbiAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgXG4gICAgICAgIC8vIEVhc2UgYW5pbWF0aW9uXG4gICAgICAgIGVhc2U6IEtFWS5FQVNJTkcuUVVBRF9JTl9PVVQsXG4gICAgICAgIFxuICAgICAgICAvLyBBcHBseSB0aGlzIE1hdGggZnVuY3Rpb24gdG8gb3V0cHV0IHZhbHVlXG4gICAgICAgIG1hdGg6IHVuZGVmaW5lZCxcbiAgICAgICAgXG4gICAgICAgIC8vIERpdmlkZSBhbmltYXRpb24gaW50byB0aGlzIG1hbnkgc3RlcHNcbiAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgIFxuICAgICAgICAvLyBcbiAgICAgICAgdGltZURpbGF0aW9uOiAxLFxuICAgICAgICBcbiAgICAgICAgcGxheWhlYWQ6IDAsXG4gICAgICAgIFxuICAgICAgICAvLyBcbiAgICAgICAgcG9pbnRlck9mZnNldDogdW5kZWZpbmVkLFxuICAgICAgICBcbiAgICAgICAgLy8gQ3VycmVudCBwcm9ncmVzc1xuICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFRpbWUgZWxhcHNlZFxuICAgICAgICBlbGFwc2VkOiAwLFxuICAgICAgICBcbiAgICAgICAgLy8gTG9vcCBhbmltYXRpb24geCBudW1iZXIgb2YgdGltZXMgKHRydWUgZm9yIEVURVJOQUxMWSlcbiAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgIFxuICAgICAgICAvLyBOdW1iZXIgb2YgdGltZXMgYW5pbWF0aW9uIGhhcyBsb29wZWRcbiAgICAgICAgbG9vcENvdW50OiAwLFxuICAgICAgICBcbiAgICAgICAgLy8gUGxheSBhbmltYXRpb24gYW5kIHJldmVyc2UgeCBudW1iZXIgb2YgdGltZXMgKHRydWUgZm9yIGZvcmV2ZXIpXG4gICAgICAgIHlveW86IGZhbHNlLFxuICAgICAgICBcbiAgICAgICAgLy8gTnVtYmVyIG9mIHRpbWVzIGFuaW1hdGlvbiBoYXMgeW95b2VkXG4gICAgICAgIHlveW9Db3VudDogMCxcbiAgICAgICAgXG4gICAgICAgIC8vIFJ1biB0aGlzIGNhbGxiYWNrIG9uIGFjdGlvbiBzdGFydFxuICAgICAgICBvblN0YXJ0OiBjYWxsYmFjayxcbiAgICAgICAgXG4gICAgICAgIC8vIFJ1biB0aGlzIG9uIGFjdGlvbiBlbmRcbiAgICAgICAgb25FbmQ6IGNhbGxiYWNrLFxuICAgICAgICBcbiAgICAgICAgLy8gUnVuIHRoaXMgZXZlcnkgZnJhbWVcbiAgICAgICAgb25GcmFtZTogY2FsbGJhY2ssXG4gICAgICAgIFxuICAgICAgICAvLyBSdW4gdGhpcyB3aGVuIGFjdGlvbiBjaGFuZ2VzXG4gICAgICAgIG9uQ2hhbmdlOiBjYWxsYmFja1xuICAgIH07XG5cbi8qXG4gICAgU2V0IEFjdGlvbiBvcHRpb25zXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBVc2VyLWRlZmluZWQgb3B0aW9uc1xuKi9cbkFjdGlvbi5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAvLyBMb29wIHRocm91Z2ggc3RhbmRhcmQgb3B0aW9ucyBhbmQgYXNzaWduXG4gICAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRzKSB7XG4gICAgICAgIGlmIChkZWZhdWx0cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIElmIHVzZXIgaGFzIHNldCB0aGlzIG9wdGlvblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gT3Igc2V0IHRvIGRlZmF1bHRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gZGVmYXVsdHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB0aGlzLnBsYXlsaXN0ID0gb3B0aW9ucy5wbGF5bGlzdCB8fCB0aGlzLnBsYXlsaXN0IHx8IFtdO1xuICAgIHRoaXMuc2NvcGUgPSBvcHRpb25zLnNjb3BlIHx8IHRoaXMuc2NvcGUgfHwgdGhpcztcblxuICAgIC8vIFNldCB0aGUgdmFsdWVzXG4gICAgdGhpcy5zZXRWYWx1ZXMob3B0aW9ucy52YWx1ZXMpO1xufTtcbiBcblxuLypcbiAgICBTZXQgVmFsdWVzXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBVc2VyLWRlZmluZWQgdmFsdWVzXG4qLyAgIFxuQWN0aW9uLnByb3RvdHlwZS5zZXRWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgLy8gQ3JlYXRlIG9yIHVwZGF0ZSBWYWx1ZSBvYmplY3RzIGZvciBlYWNoIGRlZmluZWQgdmFsdWVcbiAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZXNba2V5XSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW2tleV0udXBkYXRlKHZhbHVlc1trZXldLCB0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNba2V5XSA9IG5ldyBWYWx1ZSh2YWx1ZXNba2V5XSwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gSGFuZGxlIHNwZWNpYWwgdmFsdWVzXG5cbiAgICBpZiAodGhpcy52YWx1ZXMuYW5nbGUpIHtcbiAgICBcdHRoaXMudmFsdWVzLnggPSB0aGlzLnZhbHVlcy54IHx8IG5ldyBWYWx1ZSgwLCB0aGlzKTtcbiAgICAgICAgdGhpcy52YWx1ZXMueSA9IHRoaXMudmFsdWVzLnkgfHwgbmV3IFZhbHVlKDAsIHRoaXMpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBvcmlnaW5zXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMudmFsdWVzKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbltrZXldID0gdGhpcy52YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLypcbiAgICBSZXNldCB2YWx1ZXNcbiovXG5BY3Rpb24ucHJvdG90eXBlLnJlc2V0VmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnZhbHVlcykge1xuICAgICAgICB0aGlzLnZhbHVlc1trZXldLmN1cnJlbnQgPSB0aGlzLnZhbHVlc1trZXldLmZyb207XG4gICAgfVxuICAgIFxuICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgIHRoaXMuZWxhcHNlZCA9IDA7XG59O1xuXG4vKlxuICAgIFJldmVyc2UgdmFsdWVzXG4qL1xuQWN0aW9uLnByb3RvdHlwZS5yZXZlcnNlVmFsdWVzID0gZnVuY3Rpb24gKCkge1xuXHR2YXIga2V5LCB0bywgZnJvbTtcblx0XG5cdHRoaXMucHJvZ3Jlc3MgPSBjYWxjLmRpZmZlcmVuY2UodGhpcy5wcm9ncmVzcywgMSk7XG5cdHRoaXMuZWxhcHNlZCA9IGNhbGMuZGlmZmVyZW5jZSh0aGlzLmVsYXBzZWQsIHRoaXMuZHVyYXRpb24pO1xuXG4gICAgZm9yIChrZXkgaW4gdGhpcy52YWx1ZXMpIHtcblx0ICAgIGlmICh0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdCAgICBcdHRvID0gdGhpcy52YWx1ZXNba2V5XS50bztcblx0ICAgIFx0ZnJvbSA9IHRoaXMudmFsdWVzW2tleV0uZnJvbTtcblx0ICAgIFx0XG5cdCAgICBcdHRoaXMudmFsdWVzW2tleV0udG8gPSBmcm9tO1xuXHRcdCAgICB0aGlzLnZhbHVlc1trZXldLmZyb20gPSB0bztcblx0ICAgIH1cbiAgICB9XG59O1xuXG4vKlxuICAgIFN0YXJ0IHRoZSBhY3Rpb25cbiovXG5BY3Rpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXJ0ZWQgPSB1dGlscy5jdXJyZW50VGltZSgpICsgdGhpcy5kZWxheTtcbiAgICB0aGlzLmZyYW1lc3RhbXAgPSB0aGlzLnN0YXJ0ZWQ7XG4gICAgdGhpcy5maXJzdEZyYW1lID0gdHJ1ZTtcbn07XG5cbi8qXG4gICAgU3RvcCB0aGUgYWN0aW9uXG4qL1xuQWN0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gQWN0aW9uOyIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbi8qXG5cdEJlemllciBmdW5jdGlvbiBnZW5lcmF0b3JcbiAgICAgICAgXG4gICAgR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmdcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgbmV3dG9uSXRlcmF0aW9ucyA9IDgsXG4gIFx0bmV3dG9uTWluU2xvcGUgPSAwLjAwMSxcbiAgXHRzdWJkaXZpc2lvblByZWNpc2lvbiA9IDAuMDAwMDAwMSxcbiAgXHRzdWJkaXZpc2lvbk1heEl0ZXJhdGlvbnMgPSAxMCxcbiAgXHRrU3BsaW5lVGFibGVTaXplID0gMTEsXG5cdGtTYW1wbGVTdGVwU2l6ZSA9IDEuMCAvIChrU3BsaW5lVGFibGVTaXplIC0gMS4wKSxcblx0ZmxvYXQzMkFycmF5U3VwcG9ydGVkID0gJ0Zsb2F0MzJBcnJheScgaW4gZ2xvYmFsLFxuXG5cdEJlemllciA9IGZ1bmN0aW9uIChtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XG5cdFx0dGhpcy5wcmVjb21wdXRlKG1YMSwgbVkxLCBtWDIsIG1ZMik7XG5cbiAgICBcdHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgIFx0XHRyZXR1cm4gc2VsZi5jYWxjQmV6aWVyKHNlbGYuZ2V0VEZvclgodCwgbVgxLCBtWDIpLCBtWTEsIG1ZMik7XG4gICAgXHR9XG4gICAgfTtcbiAgICBcbkJlemllci5wcm90b3R5cGUgPSB7XG5cblx0cHJlY29tcHV0ZTogZnVuY3Rpb24gKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuXHRcdHRoaXMubVNhbXBsZVZhbHVlcyA9IGZsb2F0MzJBcnJheVN1cHBvcnRlZCA/IG5ldyBGbG9hdDMyQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSkgOiBuZXcgQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSk7XG5cdFx0dGhpcy5jYWxjU2FtcGxlVmFsdWVzKG1YMSwgbVgyKTtcblx0fSxcblx0XG5cdGNhbGNTYW1wbGVWYWx1ZXM6IGZ1bmN0aW9uIChtWDEsIG1YMikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwga1NwbGluZVRhYmxlU2l6ZTsgKytpKSB7XG5cdFx0XHR0aGlzLm1TYW1wbGVWYWx1ZXNbaV0gPSB0aGlzLmNhbGNCZXppZXIoaSAqIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuXHRcdH1cblx0fSxcblxuXHRuZXd0b25SYXBoc29uSXRlcmF0ZTogZnVuY3Rpb24gKHQsIGd1ZXNzLCBtWDEsIG1YMikge1xuXHRcdHZhciBpID0gMCxcblx0XHRcdGN1cnJlbnRTbG9wZSxcblx0XHRcdGN1cnJlbnRYO1xuXHRcdFxuXHRcdGZvciAoaTsgaSA8IG5ld3Rvbkl0ZXJhdGlvbnM7ICsraSkge1xuXHRcdFx0Y3VycmVudFNsb3BlID0gdGhpcy5nZXRTbG9wZShndWVzcywgbVgxLCBtWDIpO1xuXHRcdFx0XG5cdFx0XHRpZiAoY3VycmVudFNsb3BlICE9PSAwLjApIHtcblx0XHRcdFx0Y3VycmVudFggPSB0aGlzLmNhbGNCZXppZXIoZ3Vlc3MsIG1YMSwgbVgyKSAtIHQ7XG5cdFx0XHRcdGd1ZXNzIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdDtcblx0fSxcblx0XG5cdGJpbmFyeVN1YmRpdmlkZTogZnVuY3Rpb24gKHQsIGFBLCBhQiwgbVgxLCBtWDIpIHtcblx0XHR2YXIgaSA9IDAsXG5cdFx0XHRjdXJyZW50WCxcblx0XHRcdGN1cnJlbnRUO1xuXHRcdFx0XG5cdFx0ZG8ge1xuXHRcdFx0Y3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcblx0XHRcdGN1cnJlbnRYID0gdGhpcy5jYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSB0O1xuXHRcdFx0XG5cdFx0XHRpZiAoY3VycmVudFggPiAwLjApIHtcblx0XHRcdFx0YUIgPSBjdXJyZW50VDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFBID0gY3VycmVudFQ7XG5cdFx0XHR9XG5cdFx0fSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gc3ViZGl2aXNpb25QcmVjaXNpb24gJiYgKytpIDwgc3ViZGl2aXNpb25NYXhJdGVyYXRpb25zKTtcblx0XHRcblx0XHRyZXR1cm4gY3VycmVudFQ7XG5cdH0sXG5cblx0Z2V0VEZvclg6IGZ1bmN0aW9uICh0LCBtWDEsIG1YMikge1xuXHRcdHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wLFxuXHRcdFx0Y3VycmVudFNhbXBsZSA9IDEsXG5cdFx0XHRsYXN0U2FtcGxlID0ga1NwbGluZVRhYmxlU2l6ZSAtIDEsXG5cdFx0XHRkaXN0LFxuXHRcdFx0Z3Vlc3MsXG5cdFx0XHRpbml0aWFsU2xvcGU7XG5cdFx0XHRcblx0XHRmb3IgKGludGVydmFsU3RhcnQ7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiB0aGlzLm1TYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gdDsgKytjdXJyZW50U2FtcGxlKSB7XG5cdFx0XHRpbnRlcnZhbFN0YXJ0ICs9IGtTYW1wbGVTdGVwU2l6ZTtcblx0XHR9XG5cdFx0XG5cdFx0LS1jdXJyZW50U2FtcGxlO1xuXG5cdFx0ZGlzdCA9ICh0IC0gdGhpcy5tU2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIC8gKHRoaXMubVNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlICsgMV0gLSB0aGlzLm1TYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pKTtcblx0XHRcblx0XHRndWVzcyA9IGludGVydmFsU3RhcnQgKyBkaXN0ICoga1NhbXBsZVN0ZXBTaXplO1xuXHRcdGluaXRpYWxTbG9wZSA9IHRoaXMuZ2V0U2xvcGUoZ3Vlc3MsIG1YMSwgbVgyKTtcblxuXHRcdGlmIChpbml0aWFsU2xvcGUgPT09IG5ld3Rvbk1pblNsb3BlKSB7XG5cdFx0XHR0ID0gdGhpcy5uZXd0b25SYXBoc29uSXRlcmF0ZSh0LCBndWVzcywgbVgxLCBtWDIpO1xuXHRcdH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09IDAuMCkge1xuXHRcdFx0dCA9IGd1ZXNzO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0ID0gdGhpcy5iaW5hcnlTdWJkaXZpZGUodCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xuXHRcdH1cblx0XHRyZXR1cm4gdDtcblx0fSxcblxuXHRnZXRTbG9wZTogZnVuY3Rpb24gKHQsIGExLCBhMikge1xuXHRcdHJldHVybiAzLjAgKiB0aGlzLkEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogdGhpcy5CKGExLCBhMikgKiB0ICsgdGhpcy5DKGExKTtcblx0fSxcblxuXHRjYWxjQmV6aWVyOiBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG5cdFx0cmV0dXJuICgodGhpcy5BKGExLCBhMikgKiB0ICsgdGhpcy5CKGExLCBhMikpICogdCArIHRoaXMuQyhhMSkpICogdDtcblx0fSxcblx0XG5cdEE6IGZ1bmN0aW9uIChhMSwgYTIpIHtcblx0XHRyZXR1cm4gMS4wIC0gMy4wICogYTIgKyAzLjAgKiBhMTtcblx0fSxcblx0XG5cdEI6IGZ1bmN0aW9uIChhMSwgYTIpIHtcblx0XHRyZXR1cm4gMy4wICogYTIgLSA2LjAgKiBhMTtcblx0fSxcblx0XG5cdEM6IGZ1bmN0aW9uIChhMSkge1xuXHRcdHJldHVybiAzLjAgKiBhMTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCZXppZXI7XG59KS5jYWxsKHRoaXMsdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KSIsIi8qXG4gICAgT2Zmc2V0IGNsYXNzIHwgZXh0ZW5kcyBQb2ludFxuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBEZWZpbmVzIHRoZSByZWxhdGl2ZSBvZmZzZXQgZnJvbSBhbm90aGVyIHBvaW50XG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBQb2ludCA9IHJlcXVpcmUoJy4vcG9pbnQuanMnKSxcbiAgICBPZmZzZXQgPSBmdW5jdGlvbiAoYW5nbGUsIGRpc3RhbmNlLCB4LCB5LCB6KSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZSB8fCAwO1xuICAgICAgICB0aGlzLmRpc3RhbmNlID0gZGlzdGFuY2UgfHwgMDtcbiAgICAgICAgdGhpcy5zZXRQb2ludCh4LCB5LCB6KTtcbiAgICB9O1xuICAgIFxuT2Zmc2V0LnByb3RvdHlwZSA9IG5ldyBQb2ludCgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9mZnNldDsiLCIvKlxuICAgIFBvaW50IGNsYXNzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIERlZmluZXMgYSAzRCBwb2ludCBpbiBzcGFjZVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyIHx8IFBvaW50XTogRWl0aGVyIFggYXhpcyB2YWx1ZSBvciBQb2ludCBvYmplY3RcbiAgICBAcGFyYW0gW251bWJlcl06IFkgYXhpc1xuICAgIEBwYXJhbSBbbnVtYmVyXTogWiBheGlzXG4gICAgQHJldHVybiBbUG9pbnRdXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBQb2ludCA9IGZ1bmN0aW9uICh4LCB5LCB6KSB7XG4gICAgICAgIHRoaXMuc2V0UG9pbnQoeCwgeSwgeik7XG4gICAgfTtcblxuUG9pbnQucHJvdG90eXBlID0ge1xuICAgIHNldFBvaW50OiBmdW5jdGlvbiAoeCwgeSwgeikge1xuICAgICAgICB2YXIgeElzT2JqID0gKHR5cGVvZiB4ID09PSAnb2JqZWN0Jyk7XG5cbiAgICAgICAgdGhpcy54ID0geElzT2JqID8geC54IHx8IDAgOiB4IHx8IDA7XG4gICAgICAgIHRoaXMueSA9IHhJc09iaiA/IHgueSB8fCAwIDogeSB8fCAwO1xuICAgICAgICB0aGlzLnogPSB4SXNPYmogPyB4LnogfHwgMCA6IHogfHwgMDtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhbGMuanMnKSxcbiAgICBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL29wdHMvZGVmYXVsdHMuanMnKSxcbiAgICB1dGlsID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbHMuanMnKSxcbiAgICBIaXN0b3J5ID0gcmVxdWlyZSgnLi4vYm9icy9oaXN0b3J5LmpzJyksXG4gICAgUG9pbnQgPSByZXF1aXJlKCcuL3BvaW50LmpzJyksXG4gICAgT2Zmc2V0ID0gcmVxdWlyZSgnLi9vZmZzZXQuanMnKSxcbiAgICBWZWxvY2l0eSA9IHJlcXVpcmUoJy4vdmVsb2NpdHkuanMnKSxcbiAgICBQb2ludGVyQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHt9LFxuICAgIHBvaW50ZXJDb250cm9sbGVyO1xuXG5Qb2ludGVyQ29udHJvbGxlci5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgY3VycmVudDogbmV3IFBvaW50KCksXG4gICAgaGlzdG9yeTogdW5kZWZpbmVkLFxuICAgIGluYWN0aXZlRnJhbWVzOiAwLFxuICAgIGlzRHJhZzogZmFsc2UsXG4gICAgaXNUb3VjaDogZmFsc2UsXG4gICAgb2Zmc2V0OiBuZXcgT2Zmc2V0KCksXG4gICAgb3JpZ2luOiBuZXcgUG9pbnQoKSxcbiAgICB2ZWxvY2l0eTogbmV3IFZlbG9jaXR5KCksXG4gICAgXG4gICAgLypcbiAgICAgICAgSW5pdGFsaXNlIHRoZSBwb2ludGVyXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IENvb3JkaW5hdGVzIG9mIGluaXQgcG9pbnRcbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogVHJ1ZSBpZiBtb3VzZSBpcyBwb2ludGVyXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IFRydWUgaWYgdGhpcyBpcyBhIGRyYWcgZXZlbnRcbiAgICAqL1xuICAgIGluaXQ6IGZ1bmN0aW9uIChwb2ludCwgaXNUb3VjaCwgaXNEcmFnKSB7XG4gICAgICAgIHBvaW50ID0gbmV3IFBvaW50KHBvaW50KTtcblxuICAgICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgSGlzdG9yeShwb2ludCk7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHBvaW50O1xuICAgICAgICB0aGlzLm9yaWdpbiA9IHBvaW50O1xuICAgICAgICB0aGlzLmlzVG91Y2ggPSBpc1RvdWNoO1xuICAgICAgICB0aGlzLmlzRHJhZyA9IGlzRHJhZztcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBuZXcgT2Zmc2V0KCk7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVsb2NpdHkoKTtcbiAgICB9LFxuICAgIFxuICAgIFxuICAgIC8qXG4gICAgICAgIFBvaW50ZXIgaW5wdXQgaGFzIG1vdmVkLCBhZGQgdG8gaGlzdG9yeVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBDb29yZGluYXRlcyBvZiBuZXcgcG9pbnRcbiAgICAqL1xuICAgIG1vdmVkOiBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICAgICAgcG9pbnQgPSBuZXcgUG9pbnQocG9pbnQpO1xuICAgICAgICB0aGlzLmhpc3RvcnkuYWRkKHBvaW50KTtcbiAgICB9LFxuICAgIFxuICAgIFxuICAgIC8qXG4gICAgICAgIENoZWNrIGZvciBtb3ZlbWVudCBhbmQgdXBkYXRlIHBvaW50ZXIgb2JqZWN0J3MgcHJvcGVydGllcyBvbiBuZXcgZnJhbWVcbiAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGF0ZXN0UG9pbnRlciA9IHRoaXMuaGlzdG9yeS5nZXRMYXRlc3QoKSxcbiAgICAgICAgICAgIHBvaW50ZXJBY3RpdmUgPSB1dGlsLmhhc01vdmVkKHRoaXMuY3VycmVudCwgbGF0ZXN0UG9pbnRlciksXG4gICAgICAgICAgICBtb3ZlbWVudDtcbiAgICAgICAgXG4gICAgICAgIC8vIFBvaW50ZXIgaGFzIG1vdmVkIGJldHdlZW4gZnJhbWVzLCB1cGRhdGUgcG9pbnRlciBwcm9wcyBcbiAgICAgICAgaWYgKHBvaW50ZXJBY3RpdmUpIHtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHZlbG9jaXR5IGZyb20gbGFzdCBwb3NpdGlvblxuICAgICAgICAgICAgbW92ZW1lbnQgPSBjYWxjLm9mZnNldCh0aGlzLmN1cnJlbnQsIGxhdGVzdFBvaW50ZXIpO1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWxvY2l0eShcbiAgICAgICAgICAgICAgICBtb3ZlbWVudC5hbmdsZSxcbiAgICAgICAgICAgICAgICBtb3ZlbWVudC5kaXN0YW5jZSxcbiAgICAgICAgICAgICAgICBtb3ZlbWVudC54LFxuICAgICAgICAgICAgICAgIG1vdmVtZW50LnksXG4gICAgICAgICAgICAgICAgbW92ZW1lbnQuelxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGN1cnJlbnQgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGxhdGVzdFBvaW50ZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFJlc2V0IGluYWN0aXZlIGZyYW1lIGNvdW50XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyBQb2ludGVyIGlzIGluYWN0aXZlIGFuZCBmcmFtZSBsaW1pdCByZWFjaGVkXG4gICAgICAgIH0gZWxzZSBpZiAoIXBvaW50ZXJBY3RpdmUgJiYgdGhpcy5pbmFjdGl2ZUZyYW1lcyA+PSBkZWZhdWx0cy5wb2ludGVyLm1heEluYWN0aXZlRnJhbWVzKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFNldCBzcGVlZCB0byB6ZXJvXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlbG9jaXR5KCk7XG5cbiAgICAgICAgLy8gUG9pbnRlciBpcyBpbmFjdGl2ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSW5jcmVtZW50IGluYWN0aXZlIGZyYW1lIGNvdW50ZXJcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMrKztcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnBvaW50ZXJDb250cm9sbGVyID0gbmV3IFBvaW50ZXJDb250cm9sbGVyKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcG9pbnRlckNvbnRyb2xsZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL3V0aWxzLmpzJyksXG5cdGNhbGMgPSByZXF1aXJlKCcuLi91dGlscy9jYWxjLmpzJyksXG5cdHByaW9yaXR5UHJvcHMgPSBbJ2N1cnJlbnQnLCAndG8nLCAnZnJvbScsICdzdGFydCddLFxuXHRcblx0LypcbiAgICAgICAgSXMgdGhpcyBrZXkgYSBwcmlvcml0eSBwcm9wZXJ0eT9cbiAgICAgICAgXG4gICAgICAgIFByaW9yaXR5IHByb3BlcnRpZXMgYXJlIGhhbmRsZWQgc2VwZXJhdGVseSBhbmQgYmVmb3JlIGFsbCB0aGUgb3RoZXIgcHJvcHNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogVGhlIGtleSB0byBsb29rIHVwIGluIG91ciBwcmlvcml0eSBsaXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJcyB0aGlzIGEgcHJpb3JpdHk/XG5cdCovXG5cdGlzUHJpb3JpdHkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgXHRyZXR1cm4gKHByaW9yaXR5UHJvcHMuaW5kZXhPZihrZXkpID4gLTEpO1xuXHR9LFxuXHRcblx0LypcbiAgICBcdENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgIFx0XG4gICAgXHRUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gICAgXHR0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICBcdFxuICAgIFx0QHBhcmFtIFtzdHJpbmddOiBSZWxhdGl2ZSB2YWx1ZVxuICAgIFx0QHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgXHRAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcblx0Ki9cblx0Y2FsY1JlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGN1cnJlbnQpIHtcbiAgICBcdHZhciBuZXdWYWx1ZSA9IGN1cnJlbnQsXG4gICAgXHQgICAgZXF1YXRpb24gPSB2YWx1ZS5zcGxpdCgnPScpLFxuICAgIFx0ICAgIG9wZXJhdG9yID0gZXF1YXRpb25bMF0sXG4gICAgXHQgICAgbnVtID0gcGFyc2VGbG9hdChlcXVhdGlvblsxXSk7XG5cbiAgICBcdHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgXHRjYXNlICcrJzpcbiAgICAgICAgXHQgICAgbmV3VmFsdWUgPSBjdXJyZW50ICsgbnVtO1xuICAgICAgICBcdCAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICBcdCAgICBuZXdWYWx1ZSA9IGN1cnJlbnQgLSBudW07XG4gICAgICAgIFx0ICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgIFx0ICAgIG5ld1ZhbHVlID0gY3VycmVudCAqIG51bTtcbiAgICAgICAgXHQgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgXHQgICAgbmV3VmFsdWUgPSBjdXJyZW50IC8gbnVtO1xuICAgICAgICBcdCAgICBicmVhaztcbiAgICBcdH1cblxuICAgIFx0cmV0dXJuIG5ld1ZhbHVlO1xuXHR9LFxuXHRcblx0LypcbiAgICBcdFBhcnNlIHZhbHVlXG4gICAgXHRcbiAgICBcdFBhcnNlcyB0aGUgdmFsdWUsIHdoZXRoZXIgaXRzIGEgbnVtYmVyLCBzdHJpbmcgb3IgZnVuY3Rpb24uXG4gICAgXHRJZiBhIG51bWJlciwgcmV0dXJuLlxuICAgIFx0SWYgYSBzdHJpbmcsIGl0J3MgYSByZWxhdGl2ZSBhc3NpZ25tZW50IHNvIGNhbGN1bGF0ZSBuZXcgdGFyZ2V0IGJhc2VkIG9uIGl0cyBjb250ZW50c1xuICAgIFx0SWYgYSBmdW5jdGlvbiwgZmlyZSBpdCB3aXRoIGFjdGlvbi5kYXRhIGFuZCBjdXJyZW50IHZhbHVlIGFzIGFyZ3VtZW50c1xuICAgIFx0XG4gICAgXHRAcGFyYW0gW251bWJlci9zdHJpbmcvZnVuY3Rpb25dOiBDdXJyZW50IHZhbHVlXG4gICAgXHRAcGFyYW0gW29iamVjdF06IERhdGEgb2YgcGFyZW50IGFjdGlvblxuICAgIFx0QHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG5cdCovXG5cdHBhcnNlID0gZnVuY3Rpb24gKHZhbHVlLCBkYXRhLCBjdXJyZW50KSB7XG5cdCAgICByZXR1cm4gKHV0aWxzLmlzRnVuYyh2YWx1ZSkpID8gdmFsdWUoZGF0YSwgY3VycmVudCkgOiB2YWx1ZTtcblx0fSxcblx0XG5cdC8qXG4gICAgXHRWYWx1ZSBvYmplY3RcbiAgICBcdFxuICAgIFx0T24gaW5pdCwgcnVuIHVwZGF0ZSB3aXRoIGlzTmV3VmFsdWUgPSB0cnVlXG4gICAgXHRcbiAgICBcdEBwYXJhbSBbbnVtYmVyL3N0cmluZy9mdW5jdGlvbi9vYmplY3RdOiBOZXcgdmFsdWVcbiAgICBcdEBwYXJhbSBbQWNpdG9uXTogUGFyZW50IGFjdGlvblxuXHQqL1xuXHRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgYWN0aW9uKSB7XG5cdFx0dGhpcy51cGRhdGUodmFsdWUsIGFjdGlvbiwgdHJ1ZSk7XG5cdH0sXG5cdGRlZmF1bHRzID0ge1xuXHQgICAgLy8gQWN0dWFsIHZhbHVlXG4gICAgXHRjdXJyZW50OiAwLFxuICAgIFx0c3RhcnQ6IDAsXG5cdFxuICAgIFx0Ly8gQ3VycmVudCByYW5nZSBmb3IgdmFsdWVcbiAgICBcdGZyb206IDAsXG4gICAgXHR0bzogMSxcblx0XG4gICAgXHQvLyBNYXhpbXVtIHJhbmdlIGZvciB2YWx1ZVxuICAgIFx0bWluOiAwLFxuICAgIFx0bWF4OiAxLFxuICAgIFx0XG4gICAgXHQvLyBTcGVlZCBmb3IgLm1vdmUoKSwgaW4geHBzXG4gICAgXHRzcGVlZDogMCxcbiAgICBcdGZyaWN0aW9uOiAwLFxuICAgIFx0dGhydXN0OiAwLFxuICAgIFx0XG4gICAgXHQvLyBPcHRpb25zXG4gICAgXHRkdXJhdGlvbjogNDAwLFxuICAgIFx0ZGVsYXk6IDAsXG4gICAgXHRlYXNlOiAnZWFzZS1pbi1vdXQnLFxuICAgIFx0bGluazogbnVsbCwgLy8gdXNlIHRoZSBwcm9ncmVzcyBvZiB0aGlzIHZhbHVlXG4gICAgXHRtYXRoOiBudWxsLFxuICAgIFx0c3RlcHM6IDAsXG4gICAgXHRcbiAgICBcdC8vIEFtcCBmb3IgaW5zaWRlIGFuZCBvdXRzaWRlIHJhbmdlIChpZSB2YWx1ZSAqIGFtcClcbiAgICBcdGFtcDogMCxcbiAgICBcdGVzY2FwZUFtcDogMFxuXHR9O1xuXG5cdFxuLypcblx0VXBkYXRlIHRoZSB2YWx1ZSBwcm9wZXJ0aWVzXG5cdFxuXHRAcGFyYW0gW29iamVjdCB8fCBudW1iZXJdOiBVc2VyLWRlZmluZWQgdmFsdWVcblx0QHBhcmFtIFtvYmplY3RdOiBBY3Rpb24gdGhpcyB2YWx1ZSBiZWxvbmdzIHRvXG5cdEBwYXJhbSBbYm9vbGVhbl0gKG9wdGlvbmFsKTogSXMgdGhpcyBhIG5ldyB2YWx1ZSBjb25zdHJ1Y3RcbiovXG5WYWx1ZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHZhbHVlLCBhY3Rpb24sIGlzTmV3VmFsdWUpIHtcblx0dmFyIGRhdGEgPSAoYWN0aW9uKSA/IGFjdGlvbi5kYXRhIDoge307XG5cblx0Ly8gSWYgdmFsdWUgaXMganVzdCBhIG51bWJlclxuXHRpZiAodXRpbHMuaXNOdW0odmFsdWUpIHx8IHV0aWxzLmlzRnVuYyh2YWx1ZSkgfHwgdXRpbHMuaXNTdHJpbmcodmFsdWUpKSB7XG5cdCAgICB0aGlzLmN1cnJlbnQgPSAoaXNOZXdWYWx1ZSkgPyAwIDogdGhpcy5jdXJyZW50O1xuXHRcdHRoaXMudG8gPSBwYXJzZSh2YWx1ZSwgZGF0YSwgdGhpcy5jdXJyZW50KTtcblxuXHQvLyBPciBpZiBpdCBpcyBhbiBvYmplY3Rcblx0fSBlbHNlIHtcblx0ICAgIFxuXHQgICAgLy8gSWYgYSBzdGFydCB2YWx1ZSBleGlzdHMgYW5kIHRoaXMgaXMgYSBuZXcgVmFsdWUsIGFzc2lnbiBpdCBhcyBjdXJyZW50XG5cdCAgICBpZiAoaXNOZXdWYWx1ZSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnc3RhcnQnKSkge1xuICAgIFx0ICAgIHRoaXMuY3VycmVudCA9IHBhcnNlKHZhbHVlLnN0YXJ0LCBkYXRhKTtcblx0ICAgIFxuXHQgICAgLy8gT3Igd2UndmUgZXhwbGljaXRseSBzZXQgY3VycmVudFxuXHQgICAgfSBlbHNlIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudCcpKSB7XG4gICAgXHQgICAgdGhpcy5jdXJyZW50ID0gcGFyc2UodmFsdWUuY3VycmVudCwgZGF0YSk7XG5cdCAgICBcblx0ICAgIC8vIE9yIHdlJ3ZlIG5vdCBkZWZpbmVkIGN1cnJlbnQgYW5kIHRoaXMgaXMgYSBuZXcgdmFsdWVcblx0ICAgIH0gZWxzZSBpZiAoaXNOZXdWYWx1ZSkge1xuICAgIFx0ICAgIHRoaXMuY3VycmVudCA9IGRlZmF1bHRzLmN1cnJlbnQ7XG5cdCAgICB9XG5cdCAgICBcblx0ICAgIHRoaXMudG8gPSBwYXJzZSh2YWx1ZS50bywgZGF0YSwgdGhpcy5jdXJyZW50KTtcblx0fVxuXHRcbiAgICAvLyBMb29wIHRocm91Z2ggcGVybWl0dGVkIHZhbHVlc1xuICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0cykge1xuXHQgICAgaWYgKGRlZmF1bHRzLmhhc093blByb3BlcnR5KGtleSkgJiYgIWlzUHJpb3JpdHkoa2V5KSkge1xuXG5cdFx0ICAgIC8vIElmIHVzZXIgaGFzIHN1Ym1pdHRlZCBhIHByb3BlcnR5XG5cdFx0ICAgIGlmICh1dGlscy5pc09iaih2YWx1ZSkgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHBhcnNlKHZhbHVlW2tleV0sIGRhdGEsIHRoaXMuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBPciB0aGVyZSdzIGEgZGVmYXVsdCBzZXQgb24gdGhlIGFjdGlvblxuXHRcdCAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqKGFjdGlvbikgJiYgYWN0aW9uLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBwYXJzZShhY3Rpb25ba2V5XSwgZGF0YSwgdGhpcy5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgaWYgdGhpcyBpcyBvdXIgZmlyc3QgdGltZSAoaG9uZXN0IGp1ZGdlKSwgc2V0IGFzIHRoZSBkZWZhdWx0LlxuXHRcdCAgICB9IGVsc2UgaWYgKGlzTmV3VmFsdWUpIHtcbiAgICBcdFx0ICAgIHRoaXNba2V5XSA9IGRlZmF1bHRzW2tleV07XG5cdFx0ICAgIH1cblx0XHQgICAgXG5cdCAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIEFzc2lnbiAnZnJvbScgYXMgY3VycmVudFxuICAgIHRoaXMuZnJvbSA9IHRoaXMuY3VycmVudDtcbiAgICBcbiAgICAvLyBGaW5hbGx5IGNoZWNrIGlmIHRvIHdhcyBnaXZlbiBhcyBhIHN0cmluZywgYW5kIGZpZ3VyZSBvdXQgdGhlIHJlbGF0aXZlIHZhbHVlXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKHRoaXMudG8pKSB7XG4gICAgICAgIHRoaXMudG8gPSBjYWxjUmVsYXRpdmVWYWx1ZSh0aGlzLnRvLCB0aGlzLmN1cnJlbnQpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVmFsdWU7IiwiLypcbiAgICBWZWxvY2l0eSBjbGFzc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIG9mIHRyYXZlbFxuICAgIEBwYXJhbSBbbnVtYmVyXTogU3BlZWQgaW4gcGl4ZWxzIHBlciBmcmFtZSBhbG9uZyB0aGF0IGFuZ2xlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBYIGF4aXMgc3BlZWRcbiAgICBAcGFyYW0gW251bWJlcl06IFkgYXhpcyBzcGVlZFxuICAgIEBwYXJhbSBbbnVtYmVyXTogWiBheGlzIHNwZWVkXG4gICAgQHBhcmFtIFtudW1iZXJdOiBTcGVlZCBhcm91bmQgb2Zmc2V0IGNlbnRlclxuICAgIEByZXR1cm4gW1ZlbG9jaXR5XVxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgVmVsb2NpdHkgPSBmdW5jdGlvbiAoYW5nbGUsIHNwZWVkLCB4U3BlZWQsIHlTcGVlZCwgelNwZWVkLCBvcmJpdGFsU3BlZWQpIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlIHx8IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZCB8fCAwO1xuICAgICAgICB0aGlzLnggPSB4U3BlZWQgfHwgMDtcbiAgICAgICAgdGhpcy55ID0geVNwZWVkIHx8IDA7XG4gICAgICAgIHRoaXMueiA9IHpTcGVlZCB8fCAwO1xuICAgICAgICB0aGlzLm9yYml0YWwgPSBvcmJpdGFsU3BlZWQgfHwgMDtcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlbG9jaXR5OyIsIi8qXG5cdEFjdGlvbk1hbmFnZXJcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIEtFWSA9IHJlcXVpcmUoJy4uL29wdHMva2V5cy5qcycpLFxuXHRQb2ludGVyVHJhY2tlciA9IHJlcXVpcmUoJy4vcG9pbnRlclRyYWNrZXIuanMnKSxcblx0QWN0aW9uID0gcmVxdWlyZSgnLi4vYml0cy9hY3Rpb24uanMnKSxcblx0dXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy91dGlscy5qcycpLFxuXHRBY3Rpb25NYW5hZ2VyID0gZnVuY3Rpb24gKCkge30sXG5cdGFjdGlvbk1hbmFnZXIsXG5cdGFsbEFjdGlvbnMgPSBbXSxcblx0YWN0aXZlVG9rZW5zID0gW10sXG5cdGRlYWN0aXZhdGVRdWV1ZSA9IFtdLFxuXHRiYXNlQWN0aW9ucyA9IHt9O1xuXG5BY3Rpb25NYW5hZ2VyLnByb3RvdHlwZSA9IHtcblx0XG5cdC8qXG5cdFx0Q3JlYXRlIGFjdGlvblxuXHRcdFxuXHRcdEByZXR1cm4gW0FjdGlvbl1cblx0Ki9cblx0Y3JlYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGFjdGlvbiA9IG5ldyBBY3Rpb24oKTtcblxuXHRcdHRoaXMucmVnaXN0ZXIoYWN0aW9uKTtcblxuXHRcdHJldHVybiBhY3Rpb247XG5cdH0sXG5cdFxuXHQvKlxuXHRcdENoYW5nZSBhY3Rpb25cblx0XHRcblx0XHRAcGFyYW0gW1Rva2VuXTogVG9rZW4gZm9yIHRoZSBhY3Rpb25cblx0XHRAcGFyYW0gW29iamVjdF06IFZhbHVlIHByb3BlcnRpZXNcblx0XHRAcGFyYW0gW29iamVjdF06IEFjdGlvbiBvcHRpb25zXG5cdCovXG5cdGNoYW5nZTogZnVuY3Rpb24gKHRva2VuLCBjaGFuZ2VzLCBlKSB7XG5cdFx0dmFyIGFjdGlvbiA9IHRoaXMuZ2V0KHRva2VuKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjaGFuZ2VzLmxpbmsgPT09IEtFWS5MSU5LLlBPSU5URVIpIHtcblx0XHRcdGNoYW5nZXMucG9pbnRlck9mZnNldCA9IFBvaW50ZXJUcmFja2VyLnN0YXJ0KGUpO1xuICAgICAgICB9XG5cdFx0XHRcblx0XHRhY3Rpb24uc2V0KGNoYW5nZXMpO1xuXHR9LFxuXHRcblx0Lypcblx0XHREZWZpbmUgYSBiYXNlIGFjdGlvblxuXHRcdFxuXHRcdENhbiBiZSBjYWxsZWQgbGF0ZXIgd2l0aCAucGxheSgpXG5cdFx0XG5cdFx0QHBhcmFtIFtvYmplY3RdXG5cdCovXG5cdGRlZmluZTogZnVuY3Rpb24gKGFjdGlvbnMpIHtcblx0XHR2YXIga2V5LFxuXHRcdFx0Y2hhaW4sXG5cdFx0XHRiYXNlQWN0aW9uID0ge307XG5cblx0XHRmb3IgKGtleSBpbiBhY3Rpb25zKSB7XG5cdFx0XHRpZiAoYWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdGlmIChiYXNlQWN0aW9uc1trZXldICYmICFhY3Rpb25zW2tleV0uZm9yY2VPdmVycmlkZSkge1xuXHRcdFx0XHRcdHRocm93IEtFWS5FUlJPUi5BQ1RJT05fRVhJU1RTO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNoYWluID0ga2V5LnNwbGl0KCcuJyk7XG5cblx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGluaGVyaXRlbmNlIGNoYWluLCBtZXJnZVxuXHRcdFx0XHRcdC8vIFRPRE86IG11bHRpbGF5ZXJlZCBpbmhlcml0ZW5jZT9cblx0XHRcdFx0XHRpZiAoY2hhaW4ubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0aWYgKGJhc2VBY3Rpb25zW2NoYWluWzBdXSkge1xuXHRcdFx0XHRcdFx0XHRiYXNlQWN0aW9uc1trZXldID0gdXRpbHMubWVyZ2UoYmFzZUFjdGlvbnNbY2hhaW5bMF1dLCBhY3Rpb25zW2tleV0pO1xuXHRcdFx0XHRcdFx0Ly8gaWYgd2UgY2FuJ3QgZmluZCBhY3Rpb25cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRocm93IEtFWS5FUlJPUi5OT19BQ1RJT047XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gRWxzZSBkaXJlY3RseSBjb3B5XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJhc2VBY3Rpb25zW2tleV0gPSBhY3Rpb25zW2tleV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRcblx0XG5cdC8qXG4gICAgXHRDcmVhdGUgYmFzZSBhY3Rpb25cbiAgICBcdFxuICAgIFx0QHBhcmFtIFtzdHJpbmcgfHwgYXJyYXkgfHwgb2JqZWN0XTpcbiAgICBcdCAgICBTdHJpbmc6IE5hbWUgb3Igc3BhY2UtZGVsaW1pdGVkIHBsYXlsaXN0IG9mIGFjdGlvbnNcbiAgICBcdCAgICBBcnJheTogUGxheWxpc3Qgb2YgYWN0aW9uc1xuICAgIFx0ICAgIE9iamVjdDogUmF3IGFjdGlvblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEFjdGlvbiBvdmVycmlkZVxuXHQqL1xuXHRjcmVhdGVCYXNlOiBmdW5jdGlvbiAoZGVmcywgb3ZlcnJpZGUpIHtcbiAgICBcdHZhciBiYXNlQWN0aW9uID0ge30sXG4gICAgXHQgICAgYWN0aW9uTGlzdCA9IFtdO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHN0cmFpZ2h0IGFjdGlvblxuICAgICAgICBpZiAodXRpbHMuaXNPYmooZGVmcykpIHtcbiAgICAgICAgICAgIGJhc2VBY3Rpb24gPSBkZWZzO1xuICAgICAgICAgICAgYmFzZUFjdGlvbi5wbGF5bGlzdCA9IFtdO1xuICAgICAgICAgICAgXG4gICAgICAgIC8vIFRoZXNlIGFyZSBwcmV2aW91c2x5IGRlZmluZWQgYWN0aW9uc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQ29tbWEtZGVsaW1pdGVkIHN0cmluZyBvciBzaW5nbGUgYWN0aW9uIG5hbWVcbiAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkZWZzKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbkxpc3QgPSBkZWZzLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEFycmF5IG9mIGFjdGlvbiBuYW1lc1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25MaXN0ID0gZGVmcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYmFzZUFjdGlvbiA9IHRoaXMuZ2V0RGVmaW5lZChhY3Rpb25MaXN0WzBdKTtcbiAgICAgICAgICAgIGJhc2VBY3Rpb24ucGxheWxpc3QgPSBhY3Rpb25MaXN0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBBcHBseSBvdmVycmlkZXMgaWYgcHJlc2VudFxuICAgICAgICBpZiAodXRpbHMuaXNPYmoob3ZlcnJpZGUpKSB7XG4gICAgICAgICAgICBiYXNlQWN0aW9uID0gdGhpcy5tZXJnZShiYXNlQWN0aW9uLCBvdmVycmlkZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBiYXNlQWN0aW9uO1xuXHR9LFxuXHRcblx0XG5cdC8qXG4gICAgXHRHZXQgZGVmaW5lZCBhY3Rpb25cbiAgICBcdFxuICAgIFx0QHBhcmFtIFtzdHJpbmddOiBUaGUgbmFtZSBvZiB0aGUgcHJlZGVmaW5lZCBhY3Rpb25cblx0Ki9cblx0Z2V0RGVmaW5lZDogZnVuY3Rpb24gKGtleSkge1xuXHQgICAgcmV0dXJuIHRoaXMuY29weShiYXNlQWN0aW9uc1trZXldKTtcblx0fSxcblx0XG5cdC8qXG4gICAgXHRDb3B5IGFuIGFjdGlvblxuXHQqL1xuXHRjb3B5OiBmdW5jdGlvbiAoYWN0aW9uKSB7XG5cdCAgICB2YXIgbmV3QWN0aW9uID0ge307XG5cbiAgICBcdGZvciAodmFyIGtleSBpbiBhY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICd2YWx1ZXMnKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0FjdGlvbltrZXldID0gYWN0aW9uW2tleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3QWN0aW9uLnZhbHVlcyA9IHV0aWxzLmNvcHkoYWN0aW9uLnZhbHVlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXHQgICAgfVxuXHQgICAgXG5cdCAgICByZXR1cm4gbmV3QWN0aW9uO1xuXHR9LFxuXHRcblx0LypcbiAgICBcdE1lcmdlIGFuIGFjdGlvblxuXHQqL1xuXHRtZXJnZTogZnVuY3Rpb24gKGFjdGlvbiwgb3ZlcnJpZGUpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG92ZXJyaWRlKSB7XG4gICAgICAgICAgICBpZiAob3ZlcnJpZGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICd2YWx1ZXMnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbltrZXldID0gb3ZlcnJpZGVba2V5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24udmFsdWVzID0gdXRpbHMubWVyZ2UoYWN0aW9uLnZhbHVlcywgb3ZlcnJpZGUudmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhY3Rpb247XG5cdH0sXG5cdFxuXHRcblx0Lypcblx0XHRSZWdpc3RlciBhY3Rpb25cblx0XHRcblx0XHRAcGFyYW0gW0FjdGlvbl06IEFkZCBhY3Rpb24gdG8gc3RvcmFnZSBhcnJheVxuXHQqL1xuXHRyZWdpc3RlcjogZnVuY3Rpb24gKGFjdGlvbikge1xuXHRcdGFsbEFjdGlvbnNbYWN0aW9uLnRva2VuXSA9IGFjdGlvbjtcblx0fSxcblx0XG5cdFxuXHQvKlxuXHRcdEdldCB0aGUgc3BlY2lmaWVkIGFjdGlvblxuXHRcdFxuXHRcdEBwYXJhbSBbVG9rZW5dOiBUb2tlblxuXHRcdEByZXR1cm4gW0FjdGlvbiB8fCBib29sZWFuXTogQWN0aW9uIHdpdGggc3BlY2lmaWVkIHRva2VuLCBmYWxzZSBpZiBub25lIGZvdW5kXG5cdCovXG5cdGdldDogZnVuY3Rpb24gKHRva2VuKSB7XG5cdFx0cmV0dXJuIGFsbEFjdGlvbnNbdG9rZW5dIHx8IGZhbHNlO1xuXHR9LFxuXHRcblx0XG5cdC8qXG4gICAgXHRHZXQgdG9rZW5zIG9mIGFsbCBhY3RpdmUgYWN0aW9uc1xuICAgIFx0XG4gICAgXHRAcmV0dXJuIFthcnJheV06IEFycmF5IG9mIGFjdGl2ZSB0b2tlbnNcblx0Ki9cblx0Z2V0QWN0aXZlVG9rZW5zOiBmdW5jdGlvbiAoKSB7XG4gICAgXHRyZXR1cm4gYWN0aXZlVG9rZW5zO1xuXHR9LFxuXHRcblx0XG5cdC8qXG4gICAgXHRBY3RpdmF0ZSBzcGVjaWZpZWQgYWN0aW9uXG4gICAgXHRcbiAgICBcdEFjdGl2YXRlcyBhY3Rpb24gYW5kIGFkZHMgdG8gYWN0aXZlVG9rZW5zIGFycmF5XG4gICAgXHRcbiAgICBcdEBwYXJhbSBbVG9rZW5dOiBUb2tlblxuXHQqL1xuXHRhY3RpdmF0ZTogZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgXHR2YXIgYWN0aW9uID0gdGhpcy5nZXQodG9rZW4pLFxuXHQgICAgICAgIGluZGV4ID0gYWN0aXZlVG9rZW5zLmluZGV4T2YodG9rZW4pLFxuXHQgICAgICAgIGRlYWN0aXZhdGVJbmRleCA9IGRlYWN0aXZhdGVRdWV1ZS5pbmRleE9mKHRva2VuKTtcbiAgICBcdFxuICAgIFx0aWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgYWN0aXZlVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGZyb20gZGVhY3RpdmF0ZSBxdWV1ZSBpZiBpdCdzIGJlZW4gcGxhY2VkIHRoZXJlXG4gICAgICAgIGlmIChkZWFjdGl2YXRlSW5kZXggPj0gMCkge1xuICAgICAgICAgICAgZGVhY3RpdmF0ZVF1ZXVlLnNwbGljZShkZWFjdGl2YXRlSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgXHRcbiAgICBcdGFjdGlvbi5zdGFydCgpO1xuXHR9LFxuXHRcblx0XG5cdC8qXG4gICAgXHREZWFjdGl2YXRlIHNwZWNpZmllZCBhY3Rpb25cbiAgICBcdFxuICAgIFx0QWN0aXZhdGVzIGFjdGlvbiBhbmQgcmVtb3ZlcyBmcm9tIGFjdGl2ZVRva2VucyBhcnJheVxuICAgIFx0XG4gICAgXHRAcGFyYW0gW1Rva2VuXTogVG9rZW5cblx0Ki9cblx0ZGVhY3RpdmF0ZTogZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgXHR2YXIgYWN0aW9uID0gdGhpcy5nZXQodG9rZW4pLFxuXHQgICAgICAgIGluZGV4ID0gYWN0aXZlVG9rZW5zLmluZGV4T2YodG9rZW4pO1xuXG5cdCAgICBhY3Rpb24uc3RvcCgpO1xuXHQgICAgXG4gICAgXHRpZiAoaW5kZXggPiAtMSkge1xuICAgIFx0ICAgIGFjdGl2ZVRva2Vucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIFx0fVxuXHR9LFxuXHRcblx0LypcbiAgICBcdElzIGFjdGlvbiBhY3RpdmVcblx0Ki9cblx0aXNBY3RpdmU6IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIFx0cmV0dXJuIChhY3RpdmVUb2tlbnMuaW5kZXhPZih0b2tlbikgPiAtMSk7XG5cdH0sXG5cdFxuXHQvKlxuICAgIFx0UHVyZ2UgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgIFx0XG4gICAgXHRMb29wcyB0aHJvdWdoIHRoZSBkZWFjdGl2YXRlIHF1ZXVlIGFuZCBkZWNpZGVzIHdoZXRoZXIgdG8gZGVhY3RpdmF0ZVxuICAgIFx0b3Igc3dhcCBhY3Rpb24gcGFyYW1ldGVycyB3aXRoIHRoZSBuZXh0IGluIHRoZSBhY3Rpb24ncyBwbGF5TGlzdFxuICAgIFx0XG4gICAgXHRXZSB1c2UgYSBkZWFjdGl2YXRlIHF1ZXVlIHJhdGhlciB0aGFuIGRlYWN0aXZhdGUgYXMgc29vbiBhcyB3ZSBwcm9jZXNzIGl0XG4gICAgXHRiZWNhdXNlIGlmIHdlIG1hbmlwdWxhdGUgdGhlIGxpc3Qgb2YgYWN0aXZhdGVkIEFjdGlvbnMgd2hpbGUgaXQncyBiZWluZ1xuICAgIFx0bG9vcGVkIHRocm91Z2gsIHdlbGwgeW91IGNhbiBvbmx5IGltYWdpbmUgdGhlIGZ1biB0aGF0IGNhdXNlcy5cblx0Ki9cblx0cHVyZ2U6IGZ1bmN0aW9uICgpIHtcblx0ICAgIHZhciBxdWV1ZUxlbmd0aCA9IGRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cdCAgICBcblx0ICAgIC8vIFJ1biB0aHJvdWdoIGFsbCBxdWV1ZWQgYWN0aW9ucyBhbmQgZGVjaWRlIHdoYXQgdG8gZG8gbmV4dFxuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZUxlbmd0aDsgKytpKSB7XG5cdCAgICAgICAgaWYgKHV0aWxzLmlzTnVtKGRlYWN0aXZhdGVRdWV1ZVtpXSkpIHtcbiAgICBcdCAgICAgICAgdGhpcy5kZWNpZGVOZXh0KGRlYWN0aXZhdGVRdWV1ZVtpXSk7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXG4gICAgICAgIC8vIENsZWFyIGRlYWN0aXZhdGVRdWV1ZVxuXHRcdGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXHR9LFxuXHRcblx0LypcbiAgICBcdERlY2lkZSB3aGF0IHRvIGRvIHdpdGggYW4gYWN0aW9uXG4gICAgXHRcbiAgICBcdFRha2VzIGFuIGFjdGlvbiBhbmQgZGVjaWRlcywgYmFzZWQgb24gaXRzIHBsYXlsaXN0IGFuZCBsb29wIHByb3BlcnRpZXMsIFxuICAgIFx0d2hhdCB0byBkbyB3aXRoIGl0IG5leHQuXG4gICAgXHRcbiAgICBcdEBwYXJhbSBbVG9rZW5dOiBBY3Rpb24gdG9rZW5cblx0Ki9cblx0ZGVjaWRlTmV4dDogZnVuY3Rpb24gKHRva2VuKSB7XG5cdFx0dmFyIG5leHRzID0gWydsb29wJywgJ3lveW8nLCAncGxheU5leHQnXSxcblx0XHRcdG51bSA9IG5leHRzLmxlbmd0aCxcblx0XHRcdGhhc0Z1dHVyZSA9IGZhbHNlO1xuXHRcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG51bTsgKytpKSB7XG5cdFx0XHRpZiAodGhpc1tuZXh0c1tpXV0odG9rZW4pKSB7XG5cdFx0XHRcdGhhc0Z1dHVyZSA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cdFxuXHRcbiAgICBcdGlmICghaGFzRnV0dXJlKSB7XG4gICAgICAgIFx0dGhpcy5kZWFjdGl2YXRlKHRva2VuKTtcbiAgICBcdH1cblx0fSxcblx0XG5cdFxuXHQvKlxuICAgIFx0UGxheSBuZXh0IGluIHBsYXlsaXN0LCBpZiBleGlzdHNcbiAgICBcdFxuICAgIFx0QHBhcmFtIFtUb2tlbl06IEFjdGlvbiB0b2tlblxuICAgIFx0QHJldHVybiBbYm9vbGVhbl06IFN1Y2Nlc3Ncblx0Ki9cblx0cGxheU5leHQ6IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIFx0dmFyIGhhc1BsYXllZE5leHQgPSBmYWxzZSxcbiAgICBcdCAgICBhY3Rpb24gPSB0aGlzLmdldCh0b2tlbiksXG4gICAgXHQgICAgcGxheWxpc3RMZW5ndGggPSBhY3Rpb24ucGxheWxpc3QgPyBhY3Rpb24ucGxheWxpc3QubGVuZ3RoIDogMCxcbiAgICBcdCAgICBwbGF5aGVhZCA9IGFjdGlvbi5wbGF5aGVhZCxcbiAgICBcdCAgICBuZXh0QWN0aW9uO1xuXG4gICAgICAgIC8vIENoZWNrIHdlIGhhdmUgYSBwbGF5bGlzdCBhbmQgdGhhdCB0aGlzIGlzIGFuIGFuaW1hdGlvblxuICAgICAgICAvLyBUT0RPOiBNYXliZSBtYWtlIGEgc2V0IG9mIHByb3BlcnRpZXMgb24gdGhlIHJ1Yml4IHRoYXQgc2F5cyBhbGxvd1BsYXlsaXN0OiB0cnVlXG4gICAgXHRpZiAocGxheWxpc3RMZW5ndGggJiYgYWN0aW9uLmxpbmsgPT09IEtFWS5MSU5LLlRJTUUpIHtcbiAgICBcdCAgICArK3BsYXloZWFkO1xuXG4gICAgXHQgICAgaWYgKHBsYXloZWFkIDwgcGxheWxpc3RMZW5ndGgpIHtcbiAgICBcdCAgICAgICAgbmV4dEFjdGlvbiA9IHRoaXMuZ2V0RGVmaW5lZChhY3Rpb24ucGxheWxpc3RbcGxheWhlYWRdKTtcbiAgICBcdCAgICAgICAgbmV4dEFjdGlvbi5wbGF5aGVhZCA9IHBsYXloZWFkO1xuICAgIFx0ICAgICAgICBcbiAgICAgICAgXHQgICAgdGhpcy5jaGFuZ2UodG9rZW4sIG5leHRBY3Rpb24pO1xuICAgICAgICBcdCAgICB0aGlzLmFjdGl2YXRlKHRva2VuKTtcblxuICAgICAgICBcdCAgICBoYXNQbGF5ZWROZXh0ID0gdHJ1ZTtcbiAgICBcdCAgICB9XG4gICAgXHR9XG5cbiAgICBcdHJldHVybiBoYXNQbGF5ZWROZXh0O1xuXHR9LFxuXHRcblx0XG5cdC8qXG4gICAgXHRMb29wIGN1cnJlbnQgYWN0aW9uLCBpZiB3ZSdyZSB0aGF0IHdheSBpbmNsaW5lZFxuICAgIFx0XG4gICAgXHRAcGFyYW0gW1Rva2VuXTogQWN0aW9uIHRva2VuXG4gICAgXHRAcmV0dXJuIFtib29sZWFuXTogU3VjY2Vzc1xuXHQqL1xuXHRsb29wOiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICBcdHZhciBoYXNMb29wZWQgPSBmYWxzZSxcbiAgICBcdCAgICBhY3Rpb24gPSB0aGlzLmdldCh0b2tlbiksXG4gICAgXHQgICAgbG9vcEZvcmV2ZXIgPSAoYWN0aW9uLmxvb3AgPT09IHRydWUpO1xuXG4gICAgICAgIGlmIChhY3Rpb24ubGluayA9PT0gS0VZLkxJTksuVElNRSAmJiAobG9vcEZvcmV2ZXIgfHwgdXRpbHMuaXNOdW0oYWN0aW9uLmxvb3ApKSkge1xuICAgICAgICAgICAgKythY3Rpb24ubG9vcENvdW50O1xuICAgICAgICAgICAgaWYgKChsb29wRm9yZXZlciB8fCB1dGlscy5pc051bShhY3Rpb24ubG9vcCkgJiYgYWN0aW9uLmxvb3BDb3VudCA8PSBhY3Rpb24ubG9vcCkpIHtcblx0ICAgICAgICAgICAgYWN0aW9uLnJlc2V0VmFsdWVzKCk7XG5cdCAgICAgICAgICAgIHRoaXMuYWN0aXZhdGUodG9rZW4pO1xuXHQgICAgICAgICAgICBoYXNMb29wZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICBcdHJldHVybiBoYXNMb29wZWQ7XG5cdH0sXG5cdFxuXHRcblx0eW95bzogZnVuY3Rpb24gKHRva2VuKSB7XG5cdFx0dmFyIGhhc1lveW9lZCA9IGZhbHNlLFxuXHRcdFx0YWN0aW9uID0gdGhpcy5nZXQodG9rZW4pLFxuXHRcdFx0eW95b0ZvcmV2ZXIgPSAoYWN0aW9uLnlveW8gPT09IHRydWUpO1xuXG5cdFx0aWYgKGFjdGlvbi5saW5rID09PSBLRVkuTElOSy5USU1FICYmICh5b3lvRm9yZXZlciB8fCB1dGlscy5pc051bShhY3Rpb24ueW95bykpKSB7XG5cdFx0XHQrK2FjdGlvbi55b3lvQ291bnQ7XG5cdFx0XHRpZiAoeW95b0ZvcmV2ZXIgfHwgKHV0aWxzLmlzTnVtKGFjdGlvbi55b3lvKSAmJiBhY3Rpb24ueW95b0NvdW50IDw9IGFjdGlvbi55b3lvKSkge1xuXHRcdFx0XHRhY3Rpb24ucmV2ZXJzZVZhbHVlcygpO1xuXHRcdFx0XHR0aGlzLmFjdGl2YXRlKHRva2VuKTtcblx0XHRcdFx0aGFzWW95b2VkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gaGFzWW95b2VkO1xuXHR9LFxuXHRcblx0XG5cdC8qXG4gICAgXHRBZGQgdG9rZW4gdG8gdGhlIGRlYWN0aXZhdGUgcXVldWVcbiAgICBcdFxuICAgIFx0UXVldWUgZ2V0cyBwcm9jZXNzZWQgYXQgdGhlIGVuZCBvZiBldmVyeSBmcmFtZVxuICAgIFx0XG4gICAgXHRAcGFyYW0gW1Rva2VuXTogVG9rZW4gb2YgYWN0aW9uXG5cdCovXG5cdHF1ZXVlRGVhY3RpdmF0ZTogZnVuY3Rpb24gKHRva2VuKSB7XG5cdFx0ZGVhY3RpdmF0ZVF1ZXVlLnB1c2godG9rZW4pO1xuXHR9LFxuXHRcblx0XG5cdC8qXG4gICAgXHRHZXQgZGF0YSBmcm9tIG91ciBhY3Rpb24ncyBkYXRhIG9iamVjdFxuICAgIFx0XG4gICAgXHRAcGFyYW0gW1Rva2VuXTogQWN0aW9uIHRva2VuXG4gICAgXHRAcGFyYW0gW3N0cmluZ106IEtleSBvZiBkYXRhIHBvaW50XG5cdCovXG5cdGdldERhdGE6IGZ1bmN0aW9uICh0b2tlbiwga2V5KSB7XG5cdCAgICB2YXIgYWN0aW9uID0gdGhpcy5nZXQodG9rZW4pO1xuICAgIFx0XG4gICAgXHRyZXR1cm4gYWN0aW9uLmRhdGEgPyBhY3Rpb24uZGF0YVtrZXldIDogdW5kZWZpbmVkO1xuXHR9LFxuXHRcblx0XG5cdC8qXG4gICAgXHRTZXQgZGF0YSBwb2ludCB0byBhY3Rpb24ncyBkYXRhIG9iamVjdFxuICAgIFx0XG4gICAgXHRAcGFyYW0gW1Rva2VuXTogQWN0aW9uIHRva2VuXG4gICAgXHRAcGFyYW0gW29iamVjdF06IERhdGEgdG8gc2F2ZSB0byBhY3Rpb25cblx0Ki9cblx0c2V0RGF0YTogZnVuY3Rpb24gKHRva2VuLCBkYXRhKSB7XG4gICAgXHR2YXIgYWN0aW9uID0gdGhpcy5nZXQodG9rZW4pO1xuXG4gICAgXHRmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICBcdGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIFx0YWN0aW9uLmRhdGFba2V5XSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgIFx0XG4gICAgICAgICAgICBcdGlmIChrZXkgPT09IEtFWS5KUVVFUllfRUxFTUVOVCkge1xuICAgICAgICAgICAgICAgIFx0YWN0aW9uLmRhdGEgPSBkYXRhW2tleV07XG4gICAgICAgICAgICBcdH1cbiAgICAgICAgXHR9XG4gICAgXHR9XG5cdH1cbn07XG5cbmFjdGlvbk1hbmFnZXIgPSBuZXcgQWN0aW9uTWFuYWdlcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFjdGlvbk1hbmFnZXI7IiwiLypcbiAgICBDaHJvbm9zXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi4vdXRpbHMvY2FsYy5qcycpLFxuXHR1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL3V0aWxzLmpzJyksXG4gICAgQWN0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4vYWN0aW9uTWFuYWdlci5qcycpLFxuICAgIFBvaW50ZXJUcmFja2VyID0gcmVxdWlyZSgnLi9wb2ludGVyVHJhY2tlci5qcycpLFxuICAgIFByb2Nlc3MgPSByZXF1aXJlKCcuL3Byb2Nlc3MuanMnKSxcbiAgICBDaHJvbm9zID0gZnVuY3Rpb24gKCkge30sXG4gICAgY2hyb25vcyxcbiAgICBwcmV2RnJhbWVUaW1lLFxuICAgIGN1cnJlbnRUaW1lLFxuICAgIGZwcyA9IDYwLFxuICAgIGlzUnVubmluZyA9IGZhbHNlOyAvLyBpcyBhbmltYXRpb24gbG9vcCBydW5uaW5nPyAtIHByZXZlbnRzIG11bHRpcGxlIHJBRiBsb29wcyBmcm9tIHJ1bm5pbmdcbiAgICBcbkNocm9ub3MucHJvdG90eXBlID0ge1xuXG4gICAgLypcbiAgICAgICAgU3RhcnQgY2hyb25vcyBpZiBub3QgYWxyZWFkeSBydW5uaW5nXG4gICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICAgICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZnJhbWUoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RvcCBjaHJvbm9zXG4gICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlzUnVubmluZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgXG4gICAgXG4gICAgLypcbiAgICAgICAgRnJhbWVcbiAgICAgICAgXG4gICAgICAgIENoZWNrIGlmIHRoZXJlIGFyZSBhY3RpdmUgYWN0aW9ucyB0byBwcm9jZXNzLCB0aGVuIGNhbGxiYWNrXG4gICAgKi9cbiAgICBmcmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBhY3RpdmVBY3Rpb25Ub2tlbnMgPSBBY3Rpb25NYW5hZ2VyLmdldEFjdGl2ZVRva2VucygpO1xuXG4gICAgICAgIGlmIChhY3RpdmVBY3Rpb25Ub2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhY3RpdmVBY3Rpb25Ub2tlbnMgPSBBY3Rpb25NYW5hZ2VyLmdldEFjdGl2ZVRva2VucygpOyAvLyByZWNoZWNrIGluY2FzZSBzdHVmZiBoYXMgYmVlbiBkZWFjdGl2YXRlZCBzaW5jZVxuICAgIFxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVBY3Rpb25Ub2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgXHRzZWxmLnVwZGF0ZVRpbWUoKTtcbiAgICAgICAgICAgICAgICBcdFBvaW50ZXJUcmFja2VyLmZyYW1lKCk7XG4gICAgICAgICAgICAgICAgXHRQcm9jZXNzLmFjdGlvbnMoYWN0aXZlQWN0aW9uVG9rZW5zLCBjdXJyZW50VGltZSwgZnBzKTtcbiAgICAgICAgICAgICAgICAgICAgQWN0aW9uTWFuYWdlci5wdXJnZSgpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmZyYW1lKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgdXBkYXRlVGltZTogZnVuY3Rpb24gKCkge1xuICAgIFx0Ly9wcmV2RnJhbWVUaW1lID0gY3VycmVudFRpbWU7XG4gICAgXHRjdXJyZW50VGltZSA9IHV0aWxzLmN1cnJlbnRUaW1lKCk7XG4gICAgXHQvL2ZwcyA9IDEwMDAgLyBjYWxjLmRpZmZlcmVuY2UocHJldkZyYW1lVGltZSwgY3VycmVudFRpbWUpO1xuICAgIH1cbn07XG5cbmNocm9ub3MgPSBuZXcgQ2hyb25vcygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNocm9ub3M7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBLRVkgPSByZXF1aXJlKCcuLi9vcHRzL2tleXMuanMnKSxcbiAgICBjYWxsYmFja3MgPSB7fSxcbiAgICBldmVudCA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBcbiAgICBhZGRMaXN0ZW5lcnM6IGZ1bmN0aW9uIChvbk1vdmUsIG9uRW5kLCBpc1RvdWNoRXZlbnQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGV2ZW50Lm1vdmUgPSBpc1RvdWNoRXZlbnQgPyBLRVkuRVZFTlQuVE9VQ0hNT1ZFIDogS0VZLkVWRU5ULk1PVVNFTU9WRTtcbiAgICAgICAgZXZlbnQuZW5kID0gaXNUb3VjaEV2ZW50ID8gS0VZLkVWRU5ULlRPVUNIRU5EIDogS0VZLkVWRU5ULk1PVVNFVVA7XG5cbiAgICAgICAgY2FsbGJhY2tzLm9uTW92ZSA9IG9uTW92ZTtcblxuICAgICAgICBjYWxsYmFja3Mub25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uRW5kID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgb25FbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50Lm1vdmUsIGNhbGxiYWNrcy5vbk1vdmUpO1xuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LmVuZCwgY2FsbGJhY2tzLm9uRW5kKTtcbiAgICB9LFxuICAgIFxuICAgIHJlbW92ZUxpc3RlbmVyczogZnVuY3Rpb24gKCkge1xuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50Lm1vdmUsIGNhbGxiYWNrcy5vbk1vdmUpO1xuXHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LmVuZCwgY2FsbGJhY2tzLm9uRW5kKTtcbiAgICB9XG4gICAgXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9vcHRzL2RlZmF1bHRzLmpzJyksXG4gICAgLypcbiAgICAgICAgSGlzdG9yeSBjb25zdHJ1Y3RvclxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFt2YXJdOiBWYXJpYWJsZSB0byBzdG9yZSBpbiBmaXJzdCBoaXN0b3J5IHNsb3RcbiAgICAgICAgQHBhcmFtIFtpbnRdIChvcHRpb25hbCk6IE1heGltdW0gc2l6ZSBvZiBoaXN0b3J5XG4gICAgKi9cbiAgICBIaXN0b3J5ID0gZnVuY3Rpb24gKG9iaiwgbWF4KSB7XG4gICAgICAgIHRoaXMubWF4ID0gbWF4IHx8IGRlZmF1bHRzLmhpc3RvcnlNYXhTaXplO1xuICAgICAgICB0aGlzLmFkZChvYmopO1xuICAgIH07XG4gICAgXG5IaXN0b3J5LnByb3RvdHlwZSA9IHtcblxuICAgIGVudHJpZXM6IFtdLFxuICAgIFxuICAgIC8qXG4gICAgICAgIFB1c2ggbmV3IHZhciB0byBoaXN0b3J5XG4gICAgICAgIFxuICAgICAgICBTaGlmdCBvdXQgb2xkZXN0IGVudHJ5IGlmIHdlJ3ZlIHJlYWNoZWQgbWF4aW11bSBjYXBhY2l0eVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFt2YXJdOiBWYXJpYWJsZSB0byBwdXNoIGludG8gaGlzdG9yeS5lbnRyaWVzXG4gICAgKi9cbiAgICBhZGQ6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTaXplID0gdGhpcy5nZXRTaXplKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVudHJpZXMucHVzaChvYmopO1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRTaXplID49IHRoaXMubWF4KSB7XG4gICAgICAgICAgICB0aGlzLmVudHJpZXMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHZhcmlhYmxlIGF0IHNwZWNpZmllZCBpbmRleFxuXG4gICAgICAgIEBwYXJhbSBbaW50XTogSW5kZXhcbiAgICAgICAgQHJldHVybiBbdmFyXTogVmFyIGZvdW5kIGF0IHNwZWNpZmllZCBpbmRleFxuICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzW2ldO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBuZXdlc3QgaGlzdG9yeSBlbnRyeVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdmFyXTogRW50cnkgZm91bmQgYXQgaW5kZXggc2l6ZSAtIDFcbiAgICAqL1xuICAgIGdldExhdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldFNpemUoKSAtIDE7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGluZGV4KTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCB0aGUgc2Vjb25kIG5ld2VzdCBoaXN0b3J5IGVudHJ5XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt2YXJdOiBFbnRyeSBmb3VuZCBhdCBpbmRleCBzaXplIC0gMlxuICAgICovXG4gICAgZ2V0UHJldmlvdXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRTaXplKCkgLSAyO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmdldChpbmRleCk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgY3VycmVudCBoaXN0b3J5IHNpemVcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2ludF06IEN1cnJlbnQgbGVuZ3RoIG9mIGVudHJpZXMubGVuZ3RoXG4gICAgKi9cbiAgICBnZXRTaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXMubGVuZ3RoO1xuICAgIH1cbiAgICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGlzdG9yeTsiLCIvKlxuXHRQb2ludGVyIHRyYWNraW5nXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi4vdXRpbHMvY2FsYy5qcycpLFxuXHR1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL3V0aWxzLmpzJyksXG5cdGV2ZW50cyA9IHJlcXVpcmUoJy4vZXZlbnRzLmpzJyksXG5cdHBvaW50ZXIgPSByZXF1aXJlKCcuLi9iaXRzL3BvaW50ZXIuanMnKSxcblx0aXNUcmFja2luZyA9IGZhbHNlLFxuXHRpc1RvdWNoID0gZmFsc2UsXG5cdFBvaW50ZXJUcmFja2VyID0gZnVuY3Rpb24gKCkge30sXG5cdHBvaW50ZXJUcmFja2VyO1xuXG5Qb2ludGVyVHJhY2tlci5wcm90b3R5cGUgPSB7XG5cdFxuXHQvKlxuXHRcdFN0YXJ0IHRyYWNraW5nIHRoZSBwb2ludGVyXG5cdFx0XG5cdFx0QHBhcmFtIFtldmVudF06IEluaXRhbCBtb3VzZS90b3VjaCBldmVudFxuXHQqL1xuXHRzdGFydDogZnVuY3Rpb24gKGUpIHtcblx0XHR2YXIgcG9pbnQsXG5cdFx0XHRldmVudCA9IHV0aWxzLmdldEFjdHVhbEV2ZW50KGUpO1xuXHRcdFx0XG5cdFx0aXNUb3VjaCA9IHV0aWxzLmlzVG91Y2hFdmVudChldmVudCk7XG5cdFx0cG9pbnQgPSB1dGlscy5jb252ZXJ0RXZlbnRJbnRvUG9pbnQoZXZlbnQsIGlzVG91Y2gpO1xuXG5cdFx0aWYgKCFpc1RyYWNraW5nKSB7XG5cdFx0XHRpc1RyYWNraW5nID0gdHJ1ZTtcblx0XHRcdFxuXHRcdFx0cG9pbnRlci5pbml0KHBvaW50LCBpc1RvdWNoLCB0cnVlKTtcblx0XHRcdGV2ZW50cy5hZGRMaXN0ZW5lcnModGhpcy5tb3ZlLCB0aGlzLnN0b3AsIGlzVG91Y2gpO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gcG9pbnQ7XG5cdH0sXG5cdFxuXHRcblx0Lypcblx0XHRUcmFjayBhIHBvaW50ZXIgbW92ZW1lbnRcblx0XHRcblx0XHRAcGFyYW0gW2V2ZW50XTogTmV3IG1vdXNlL3RvdWNoIGV2ZW50XG5cdCovXG5cdG1vdmU6IGZ1bmN0aW9uIChlKSB7XG5cdFx0dmFyIGV2ZW50LFxuXHRcdFx0aXNUb3VjaCxcblx0XHRcdHBvaW50O1xuXG5cdFx0aWYgKGlzVHJhY2tpbmcpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGV2ZW50ID0gdXRpbHMuZ2V0QWN0dWFsRXZlbnQoZSk7XG5cdFx0XHRpc1RvdWNoID0gdXRpbHMuaXNUb3VjaEV2ZW50KGV2ZW50KTtcblx0XHRcdHBvaW50ID0gdXRpbHMuY29udmVydEV2ZW50SW50b1BvaW50KGV2ZW50LCBpc1RvdWNoKTtcblxuXHRcdFx0aWYgKHBvaW50ZXIuaXNNb3VzZSAmJiBwb2ludGVyLmlzRHJhZyAmJiBlLndoaWNoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuc3RvcCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cG9pbnRlci5tb3ZlZChwb2ludCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHR9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0b3AgdHJhY2tpbmcgdGhlIHBvaW50ZXJcbiAgICAqL1xuXHRzdG9wOiBmdW5jdGlvbiAoZSkge1xuXHRcdGV2ZW50cy5yZW1vdmVMaXN0ZW5lcnMoKTtcblx0XHRpc1RyYWNraW5nID0gZmFsc2U7XG5cdH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgVXBkYXRlIHRoZSBwb2ludGVyIHN0YXRzIG9uRnJhbWVcbiAgICAqL1xuXHRmcmFtZTogZnVuY3Rpb24gKCkge1xuXHRcdGlmIChpc1RyYWNraW5nKSB7XG5cdFx0XHRwb2ludGVyLnVwZGF0ZSgpO1xuXHRcdH1cblx0fSxcbiAgICBcbiAgICAvKlxuICAgICAgICBSZXR1cm4gdGhlIHBvaW50ZXJcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW1BvaW50ZXJdXG4gICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgICAgICBcdHZhciB0aGlzUG9pbnRlciA9IGlzVHJhY2tpbmcgPyBwb2ludGVyIDogZmFsc2U7XG4gICAgICAgXHRcbiAgICAgICBcdGlmICh0aGlzUG9pbnRlciAmJiBvZmZzZXQpIHtcbiAgICAgICBcdFx0dGhpc1BvaW50ZXIub2Zmc2V0ID0gY2FsYy5vZmZzZXQob2Zmc2V0LCB0aGlzUG9pbnRlci5jdXJyZW50KTtcbiAgICAgICBcdH1cblxuICAgICAgICByZXR1cm4gdGhpc1BvaW50ZXI7XG4gICAgfSxcbiAgICBcbiAgICBpc1RyYWNraW5nOiBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gaXNUcmFja2luZztcbiAgICB9XG59O1xuXG5wb2ludGVyVHJhY2tlciA9IG5ldyBQb2ludGVyVHJhY2tlcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBvaW50ZXJUcmFja2VyOyIsIi8qXG4gICAgUHJvY2VzcyBhY3Rpb25zXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBBY3Rpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi9hY3Rpb25NYW5hZ2VyLmpzJyksXG4gICAgUnViaXggPSByZXF1aXJlKCcuL3J1Yml4LmpzJyksXG5cdHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbHMuanMnKSxcbiAgICBQcm9jZXNzID0gZnVuY3Rpb24gKCkge30sXG4gICAgcHJvY2VzcztcbiAgICBcblByb2Nlc3MucHJvdG90eXBlID0ge1xuXG4gICAgLypcbiAgICAgICAgUHJvY2VzcyBhY3Rpb25zXG4gICAgICAgIFxuICAgICAgICBMb29wIHRocm91Z2ggYWxsIGFjdGl2ZSBhY3Rpb25zIGFuZCBwcm9jZXNzIGVhY2hcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbYXJyYXldOiBUb2tlbnMgb2YgYWN0aXZlIGFjdGlvbnMgYXQgdGltZSBvZiBmcmFtZXN0YXJ0XG4gICAgICAgIEBwYXJhbSBbdGltZXN0YW1wXTogVGltZXN0YW1wIG9mIGZyYW1lc3RhcnRcbiAgICAqL1xuXHRhY3Rpb25zOiBmdW5jdGlvbiAodG9rZW5zLCBmcmFtZVN0YXJ0LCBmcHMpIHtcblx0XHR2YXIgaSA9IDAsXG5cdFx0XHRhY3RpdmUgPSB0b2tlbnMubGVuZ3RoO1xuXG5cdFx0Zm9yIChpOyBpIDwgYWN0aXZlOyArK2kpIHtcblx0XHRcdHRoaXMuc2luZ2xlQWN0aW9uKEFjdGlvbk1hbmFnZXIuZ2V0KHRva2Vuc1tpXSksIGZyYW1lU3RhcnQsIGZwcyk7XG5cdFx0fVxuXHR9LFxuXHRcblx0XG5cdC8qXG4gICAgXHRQcm9jZXNzIGEgc2luZ2xlIGFjdGlvblxuICAgIFx0XG4gICAgXHRAcGFyYW0gW0FjdGlvbl1cbiAgICBcdEBwYXJhbSBbdGltZXN0YW1wXVxuXHQqL1xuXHRzaW5nbGVBY3Rpb246IGZ1bmN0aW9uIChhY3Rpb24sIGZyYW1lU3RhcnQsIGZwcykge1xuICAgIFx0dmFyIG91dHB1dCA9IHt9LFxuICAgIFx0ICAgIHJ1Yml4ID0gUnViaXhbYWN0aW9uLmxpbmtdLFxuICAgIFx0ICAgIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICBcdCAgICBcbiAgICAgICAgaWYgKGFjdGlvbi5maXJzdEZyYW1lKSB7XG4gICAgICAgICAgICBhY3Rpb24ub25TdGFydC5jYWxsKGFjdGlvbi5zY29wZSwgb3V0cHV0LCBhY3Rpb24uZGF0YSk7XG4gICAgICAgICAgICBhY3Rpb24uZmlyc3RGcmFtZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgb3V0cHV0LnBvaW50ZXIgPSBydWJpeC51cGRhdGVQb2ludGVyKGFjdGlvbik7XG4gICAgICAgIGFjdGlvbi5wcm9ncmVzcyA9IHJ1Yml4LmNhbGNQcm9ncmVzcyhhY3Rpb24sIGZyYW1lU3RhcnQsIGZwcyk7XG4gICAgICAgIFxuICAgIFx0Ly8gTG9vcCBvdmVyIGFsbCB2YWx1ZXMgXG4gICAgXHRmb3IgKHZhciBrZXkgaW4gYWN0aW9uLnZhbHVlcykge1xuICAgICAgICBcdGlmIChhY3Rpb24udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgXHQgICAgb3V0cHV0W2tleV0gPSBydWJpeC5lYXNlVmFsdWUoa2V5LCBhY3Rpb24sIGFjdGlvbi5wcm9ncmVzcyk7XG4gICAgICAgIFx0XHRcbiAgICAgICAgICAgIFx0Ly8gQXBwbHkgTWF0aC4gZnVuY3Rpb24gaWYgb25lIGRlZmluZWRcbiAgICAgICAgICAgIFx0b3V0cHV0W2tleV0gPSBhY3Rpb24udmFsdWVzW2tleV0ubWF0aCA/IE1hdGhbYWN0aW9uLnZhbHVlc1trZXldLm1hdGhdKG91dHB1dFtrZXldKSA6IG91dHB1dFtrZXldO1xuXG4gICAgICAgICAgICBcdGlmIChhY3Rpb24udmFsdWVzW2tleV0uY3VycmVudCAhPT0gb3V0cHV0W2tleV0pIHtcbiAgICAgICAgICAgICAgICBcdGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIFx0YWN0aW9uLnZhbHVlc1trZXldLmN1cnJlbnQgPSBvdXRwdXRba2V5XTtcbiAgICAgICAgICAgIFx0fVxuICAgICAgICBcdH1cbiAgICBcdH1cbiAgICBcdFxuICAgIFx0YWN0aW9uLm9uRnJhbWUuY2FsbChhY3Rpb24uc2NvcGUsIG91dHB1dCwgYWN0aW9uLmRhdGEpO1xuXG4gICAgXHQvLyBJZiBvdXRwdXQgaGFzIGNoYW5nZWQsIGZpcmUgb25DaGFuZ2VcbiAgICBcdGlmIChoYXNDaGFuZ2VkKSB7XG4gICAgICAgIFx0YWN0aW9uLm9uQ2hhbmdlLmNhbGwoYWN0aW9uLnNjb3BlLCBvdXRwdXQsIGFjdGlvbi5kYXRhKTtcbiAgICBcdH1cblxuICAgIFx0Ly8gSWYgcHJvY2VzcyBpcyBhdCBpdHMgZW5kLCBmaXJlIG9uRW5kIGFuZCBkZWFjdGl2YXRlIGFjdGlvblxuICAgIFx0aWYgKHJ1Yml4Lmhhc0VuZGVkKGFjdGlvbikpIHtcbiAgICAgICAgXHRhY3Rpb24ub25FbmQuY2FsbChhY3Rpb24uc2NvcGUsIG91dHB1dCwgYWN0aW9uLmRhdGEpO1xuICAgICAgICBcdEFjdGlvbk1hbmFnZXIucXVldWVEZWFjdGl2YXRlKGFjdGlvbi50b2tlbik7XG4gICAgXHR9XG4gICAgXHRcbiAgICBcdGFjdGlvbi5mcmFtZXN0YW1wID0gZnJhbWVTdGFydDtcblx0fVxufTtcblxucHJvY2VzcyA9IG5ldyBQcm9jZXNzKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvY2VzczsiLCIvKlxuICAgIFJ1Yml4IG1vZHVsZXNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgUnViaXggbW9kdWxlcyBhcmUgdXNlZCB0byBwcm9jZXNzIGFuIGFjdGlvbiBiYXNlZCBvbiBpdHMgLnJ1Yml4IHByb3BlcnR5LlxuICAgIFxuICAgIEF2YWlsYWJsZSBydWJpeDpcbiAgICAgICAgJ1RpbWUnXG4gICAgICAgICdQb2ludGVyJ1xuICAgICAgICAnU3BlZWQnXG4gICAgICAgIFxuICAgIFByb2Nlc3NpbmcgZnVuY3Rpb25zOlxuICAgICAgICBjYWxjUHJvZ3Jlc3NcbiAgICAgICAgaGFzRW5kZWRcbiAgICAgICAgdXBkYXRlUG9pbnRlclxuICAgICAgICBlYXNlVmFsdWVcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi91dGlscy9jYWxjLmpzJyksXG5cdHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbHMuanMnKSxcbiAgICBFYXNpbmcgPSByZXF1aXJlKCcuLi91dGlscy9lYXNpbmdGdW5jdGlvbnMuanMnKSxcblx0ZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9vcHRzL2RlZmF1bHRzLmpzJyksXG5cdEtFWSA9IHJlcXVpcmUoJy4uL29wdHMva2V5cy5qcycpLFxuICAgIFBvaW50ZXJUcmFja2VyID0gcmVxdWlyZSgnLi9wb2ludGVyVHJhY2tlci5qcycpLFxuICAgIFJ1Yml4ID0gZnVuY3Rpb24gKCkge30sXG4gICAgcnViaXhDb250cm9sbGVyO1xuXG5SdWJpeC5wcm90b3R5cGUgPSB7XG4gICAgVGltZToge1xuXHRcbiAgICAgICAgLypcbiAgICBcdCAgICBDYWxjIHByb2dyZXNzXG4gICAgXHQgICAgXG4gICAgICAgIFx0Q2FsYyBhY3Rpb24ncyBwcm9ncmVzcyB0aHJvdWdoIHRpbWVsaW1pdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW0FjdGlvbl06IGFjdGlvbiB0byBtZWFzdXJlXG4gICAgICAgICAgICBAcGFyYW0gW3RpbWVzdGFtcF06IGZyYW1lc3RhcnQgdGltZXN0YW1wXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiAwIHRvIDEgdmFsdWUgcmVwcmVzZW50aW5nIGhvdyBtdWNoIHRpbWUgaGFzIHBhc3NlZFxuICAgICAgICAqL1xuICAgICAgICBjYWxjUHJvZ3Jlc3M6IGZ1bmN0aW9uIChhY3Rpb24sIGZyYW1lU3RhcnQpIHtcbiAgICAgICAgXHRhY3Rpb24uZWxhcHNlZCArPSBjYWxjLmRpZmZlcmVuY2UoYWN0aW9uLmZyYW1lc3RhbXAsIGZyYW1lU3RhcnQpICogYWN0aW9uLnRpbWVEaWxhdGlvbjtcbiAgICAgICAgXHRcbiAgICAgICAgXHRyZXR1cm4gY2FsYy5wcm9ncmVzcyhhY3Rpb24uZWxhcHNlZCwgYWN0aW9uLmR1cmF0aW9uICsgYWN0aW9uLmRlbGF5KTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBIYXMgYWN0aW9uIGVuZGVkXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFRydWUgaWYgcHJvZ3Jlc3MgaXMgZXF1YWwgdG8gb3IgaGlnaGVyIHRoYW4gMS4gSWYgbG9vcGluZyBpcyBlbmFibGVkXG4gICAgICAgICAgICB3ZSByZXN0YXJ0IHRoZSBhY3Rpb25cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtBY3Rpb25dOiBhY3Rpb24gdG8gYW5hbHlzZVxuICAgICAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IGhhcyBhY3Rpb24gZW5kZWRcbiAgICAgICAgKi9cbiAgICAgICAgaGFzRW5kZWQ6IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgXHRyZXR1cm4gYWN0aW9uLnByb2dyZXNzID49IDEgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgVXBkYXRlIHBvaW50ZXJcbiAgICAgICAgKi9cbiAgICAgICAgdXBkYXRlUG9pbnRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEVhc2UgdmFsdWUgaW4gYWN0aW9uIHdpdGggcHJvdmlkZWQga2V5XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXToga2V5IG9mIHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogUHJvZ3Jlc3MgaW4gdGltZWxpbmVcbiAgICAgICAgKi9cbiAgICAgICAgZWFzZVZhbHVlOiBmdW5jdGlvbiAoa2V5LCBhY3Rpb24sIHByb2dyZXNzKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBhY3Rpb24udmFsdWVzW2tleV0sXG4gICAgICAgICAgICBcdHJlc3RyaWN0ZWRQcm9ncmVzcyA9IGNhbGMucmVzdHJpY3RlZChwcm9ncmVzcywgMCwgMSksXG4gICAgICAgICAgICBcdGVhc2VkVmFsdWU7XG4gICAgICAgICAgICBcdFxuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcmVzdHJpY3RlZFByb2dyZXNzID0gdXRpbHMuc3RlcFByb2dyZXNzKHJlc3RyaWN0ZWRQcm9ncmVzcywgMSwgdmFsdWUuc3RlcHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlYXNlZFZhbHVlID0gRWFzaW5nLndpdGhpblJhbmdlKHJlc3RyaWN0ZWRQcm9ncmVzcywgdmFsdWUuZnJvbSwgdmFsdWUudG8sIHZhbHVlLmVhc2UpO1xuXG4gICAgICAgICAgICByZXR1cm4gZWFzZWRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgXG4gICAgXG4gICAgUG9pbnRlcjoge1xuICAgIFxuICAgIFx0LypcbiAgICBcdCAgICBDYWxjIHByb2dyZXNzXG4gICAgXHQgICAgXG4gICAgICAgIFx0Q2FsYyB0aGUgcHJvZ3Jlc3Mgb2YgZWFjaCBwb2ludGVyIG1ldHJpYywgMCB0byAxIGlmIHJhbmdlIGdpdmVuLFxuICAgICAgICAgICAgaW4gZGlyZWN0IHRlcm1zIGlmIG5vIGdpdmVuIHJhbmdlXG4gICAgICAgIFx0XG4gICAgICAgIFx0QHBhcmFtIFtBY3Rpb25dOiBhY3Rpb24gdG8gbWVhc3VyZVxuICAgICAgICBcdEByZXR1cm4gW29iamVjdF06IE9iamVjdCBvZiBhbGwgcHJvZ3Jlc3Nlc1xuICAgIFx0Ki9cbiAgICAgICAgY2FsY1Byb2dyZXNzOiBmdW5jdGlvbiAoYWN0aW9uLCBmcmFtZVN0YXJ0KSB7XG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSB7fSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0QXNzaWduZWQsXG4gICAgICAgICAgICAgICAgaW5wdXQgPSBhY3Rpb24ucG9pbnRlci5vZmZzZXQ7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBpbnB1dCkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIHdlJ3JlIHRyYWNraW5nIHRoaXMgcHJvcGVydHlcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBhY3Rpb24udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3Nba2V5XSA9IGNhbGMucHJvZ3Jlc3MoaW5wdXRba2V5XSArIGFjdGlvbi5vcmlnaW5ba2V5XSwgYWN0aW9uLnZhbHVlc1trZXldLm1pbiwgYWN0aW9uLnZhbHVlc1trZXldLm1heCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICghZGVmYXVsdEFzc2lnbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzLmJhc2UgPSBwcm9ncmVzc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0QXNzaWduZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbi8qXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Q6ICghYWN0aW9uLnZhbHVlc1trZXldKSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAoIWFjdGlvbi52YWx1ZXNba2V5XSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFtrZXldIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxjLnByb2dyZXNzKG9mZnNldFtrZXldICsgYWN0aW9uLm9yaWdpbltrZXldLCBhY3Rpb24udmFsdWVzW2tleV0ubWluLCBhY3Rpb24udmFsdWVzW2tleV0ubWF4KVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiovXG4gICAgICAgICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgSGFzIGZ1bmN0aW9uIGVuZGVkP1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBUcnVlIGlmIGFjdGlvbi5pc1RyYWNraW5nIGlzIGZhbHNlXG4gICAgICAgICovXG4gICAgICAgIGhhc0VuZGVkOiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gUG9pbnRlclRyYWNrZXIuaXNUcmFja2luZygpID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFVwZGF0ZSBwb2ludGVyXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbQWN0aW9uXTogXG4gICAgICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogTGF0ZXN0IHBvaW50ZXIsIG9yIHByZXZpb3VzIHBvaW50ZXIgaWYgc3RvcHBlZCB0cmFja2luZ1xuICAgICAgICAqL1xuICAgICAgICB1cGRhdGVQb2ludGVyOiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFBvaW50ZXIgPSBhY3Rpb24ucG9pbnRlcjtcblxuICAgICAgICAgICAgYWN0aW9uLnBvaW50ZXIgPSBQb2ludGVyVHJhY2tlci5nZXQoYWN0aW9uLnBvaW50ZXJPZmZzZXQpIHx8IGN1cnJlbnRQb2ludGVyO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBvaW50ZXI7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRWFzZSB2YWx1ZSBpbiBhY3Rpb24gd2l0aCBwcm92aWRlZCBrZXlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBrZXkgb2YgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBQcm9ncmVzcyBvZiBwb2ludGVyIHByb3BzXG4gICAgICAgICovXG4gICAgICAgIGVhc2VWYWx1ZTogZnVuY3Rpb24gKGtleSwgYWN0aW9uLCBwcm9ncmVzcykge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gYWN0aW9uLnZhbHVlc1trZXldLFxuICAgICAgICAgICAgICAgIGVhc2VkVmFsdWUgPSB2YWx1ZS5jdXJyZW50LFxuICAgICAgICAgICAgICAgIGlucHV0UHJvZ3Jlc3M7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGNhbGN1bGF0ZWQgdGhlIHByb2dyZXNzIGZvciB0aGlzIHByb3BlcnR5XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNOdW0ocHJvZ3Jlc3Nba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBpbnB1dFByb2dyZXNzID0gcHJvZ3Jlc3Nba2V5XTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gT3Igd2UndmUgY2hvc2VuIGEgcHJvcGVydHkgdG8gbGluayB0b1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5saW5rICYmIHV0aWxzLmlzTnVtKHByb2dyZXNzW3ZhbHVlLmxpbmtdKSkge1xuICAgICAgICAgICAgICAgIGlucHV0UHJvZ3Jlc3MgPSBwcm9ncmVzc1t2YWx1ZS5saW5rXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlucHV0UHJvZ3Jlc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGVhc2VkVmFsdWUgPSBFYXNpbmcud2l0aGluUmFuZ2UoaW5wdXRQcm9ncmVzcywgdmFsdWUubWluLCB2YWx1ZS5tYXgsIGRlZmF1bHRzLnRyYWNrRWFzZSwgdmFsdWUuZXNjYXBlQW1wKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGVhc2VkVmFsdWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIFNwZWVkOiB7XG4gICAgXG4gICAgXHQvKlxuXHQgICAgXHRDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgc3BlZWQgYmFzZWQgb24gZnBzXG4gICAgXHQqL1xuICAgIFx0ZnJhbWVTcGVlZDogZnVuY3Rpb24gKHhwcywgZnBzKSB7XG4gICAgXHRcdHZhciBzcGVlZFBlckZyYW1lID0gMDtcblxuICAgIFx0XHRpZiAoeHBzICYmIHV0aWxzLmlzTnVtKHhwcykpIHtcblx0ICAgIFx0XHRzcGVlZFBlckZyYW1lID0geHBzL2ZwcztcbiAgICBcdFx0fVxuICAgIFx0XG5cdCAgICBcdHJldHVybiBzcGVlZFBlckZyYW1lO1xuICAgIFx0fSxcbiAgICBcbiAgICBcdC8qXG4gICAgXHQgICAgQ2FsYyBuZXcgc3BlZWRcbiAgICBcdCAgICBcbiAgICBcdCAgICBDYWxjIHRoZSBuZXcgc3BlZWQgYmFzZWQgb24gdGhlIGZvcm11bGEgc3BlZWQgPSAoc3BlZWQgLSBmcmljdGlvbiArIHRocnVzdClcbiAgICAgICAgXHRcbiAgICAgICAgXHRAcGFyYW0gW0FjdGlvbl06IGFjdGlvbiB0byBtZWFzdXJlXG4gICAgICAgIFx0QHJldHVybiBbb2JqZWN0XTogT2JqZWN0IG9mIGFsbCBzcGVlZHNcbiAgICBcdCovXG5cdCAgICBjYWxjUHJvZ3Jlc3M6IGZ1bmN0aW9uIChhY3Rpb24sIGZyYW1lU3RhcnQsIGZwcykge1xuXHRcdCAgICB2YXIgcHJvZ3Jlc3MgPSB7fSxcblx0XHQgICAgXHRwb2ludCxcblx0XHQgICAgXHR2YWx1ZTtcblx0XHQgICAgXHRcblx0XHQgICAgZm9yICh2YXIga2V5IGluIGFjdGlvbi52YWx1ZXMpIHtcblx0XHRcdCAgICBpZiAoYWN0aW9uLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHQgICAgXHR2YWx1ZSA9IGFjdGlvbi52YWx1ZXNba2V5XTtcblx0XHRcdCAgICBcdHZhbHVlLnNwZWVkID0gdmFsdWUuc3BlZWQgLSB0aGlzLmZyYW1lU3BlZWQodmFsdWUuZnJpY3Rpb24sIGZwcykgKyB0aGlzLmZyYW1lU3BlZWQodmFsdWUudGhydXN0LCBmcHMpO1xuXHRcdFx0XHQgICAgcHJvZ3Jlc3Nba2V5XSA9IHRoaXMuZnJhbWVTcGVlZCh2YWx1ZS5zcGVlZCwgZnBzKTtcblx0XHRcdCAgICB9XG5cdFx0ICAgIH1cblx0XHQgICAgXG5cdFx0ICAgIGlmIChhY3Rpb24udmFsdWVzLmFuZ2xlICYmIGFjdGlvbi52YWx1ZXMuZGlzdGFuY2UpIHtcblx0XHQgICAgXHRwb2ludCA9IGNhbGMucG9pbnQoYWN0aW9uLm9yaWdpbiwgYWN0aW9uLnZhbHVlcy5hbmdsZS5jdXJyZW50LCBhY3Rpb24udmFsdWVzLmRpc3RhbmNlLmN1cnJlbnQpO1xuXHRcdFx0ICAgIHByb2dyZXNzLnggPSBwb2ludC54O1xuXHRcdFx0ICAgIHByb2dyZXNzLnkgPSBwb2ludC55O1xuXHRcdCAgICB9XG5cdFx0ICAgIFxuXHRcdCAgICByZXR1cm4gcHJvZ3Jlc3M7XG5cdCAgICB9LFxuXHQgICAgXG5cdCAgICAvKlxuICAgIFx0ICAgIEhhcyB0aGlzIGFjdGlvbiBlbmRlZD9cbiAgICBcdCAgICBcbiAgICBcdCAgICBAcmV0dXJuIFtib29sZWFuXTogRmFsc2UgZm9yIG5vdyAtIFRPRE8gY3JlYXRlIGJldHRlciBkZWZhdWx0XG5cdCAgICAqL1xuXHQgICAgaGFzRW5kZWQ6IGZ1bmN0aW9uIChhY3Rpb24pIHtcblx0ICAgIFx0cmV0dXJuIGZhbHNlO1xuXHQgICAgfSxcblx0ICAgIFxuXHQgICAgLypcbiAgICBcdCAgICBBZGQgdGhlIHNwZWVkIHRvIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXToga2V5IG9mIHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogUHJvZ3Jlc3Mgb2YgcG9pbnRlciBwcm9wc1xuXHQgICAgKi9cblx0ICAgIGVhc2VWYWx1ZTogZnVuY3Rpb24gKGtleSwgYWN0aW9uLCBwcm9ncmVzcykge1xuXHQgICAgXHR2YXIgdmFsdWUgPSBhY3Rpb24udmFsdWVzW2tleV0sXG5cdCAgICBcdFx0bmV3VmFsdWUgPSB2YWx1ZS5jdXJyZW50ICsgcHJvZ3Jlc3Nba2V5XTtcblxuXHQgICAgXHRpZiAodmFsdWUubWluKSB7XG5cdFx0ICAgIFx0bmV3VmFsdWUgPSBNYXRoLm1heCh2YWx1ZS5taW4sIG5ld1ZhbHVlKTtcblx0ICAgIFx0fVxuXHQgICAgXHRcblx0ICAgIFx0aWYgKHZhbHVlLm1heCkge1xuXHRcdCAgICBcdG5ld1ZhbHVlID0gTWF0aC5taW4odmFsdWUubWF4LCBuZXdWYWx1ZSk7XG5cdCAgICBcdH1cblxuXHQgICAgIFx0cmV0dXJuIG5ld1ZhbHVlO1xuXHQgICAgfSxcblx0ICAgIFxuXHQgICAgdXBkYXRlUG9pbnRlcjogZnVuY3Rpb24gKCkge31cbiAgICB9LFxuXG59O1xuXG5ydWJpeENvbnRyb2xsZXIgPSBuZXcgUnViaXgoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBydWJpeENvbnRyb2xsZXI7IiwiLypcbiAgICBUb2tlbiBjb250cm9sbGVyXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB0b2tlbkNvdW50ZXIgPSAwLFxuXHRUb2tlbiA9IGZ1bmN0aW9uICgpIHt9O1xuXG5Ub2tlbi5wcm90b3R5cGUgPSB7XG5cdFxuXHQvKlxuXHRcdEdldCB0aGUgY3VycmVudCB0b2tlbiBjb3VudFxuXHRcdFxuXHRcdEByZXR1cm4gW2ludF06IEN1cnJlbnQgdG9rZW4gY291bnRcblx0Ki9cblx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRva2VuQ291bnRlcjtcblx0fSxcblx0XG5cdC8qXG5cdFx0R2VuZXJhdGUgYSBuZXcgdG9rZW5cblx0XHRcblx0XHRAcmV0dXJuIFtpbnRdOiBOZXcgdG9rZW5cblx0Ki9cblx0Z2VuZXJhdGU6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgdG9rZW4gPSB0aGlzLmdldCgpO1xuXHRcdFxuXHRcdHRoaXMuaW5jcmVtZW50KCk7XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH0sXG5cdFxuXHQvKlxuXHRcdEluY3JlYXNlIHRva2VuIGNvdW50ZXJcblx0Ki9cblx0aW5jcmVtZW50OiBmdW5jdGlvbiAoKSB7XG5cdFx0dG9rZW5Db3VudGVyICsrO1xuXHR9XG5cdFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbjsiLCIvKlxuICAgIERlZmF1bHQgb3B0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIEtFWSA9IHJlcXVpcmUoJy4va2V5cy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBwb2ludGVyOiB7XG4gICAgICAgIGhpc3RvcnlTaXplOiAyLCAvLyBudW1iZXIgb2YgcG9pbnRlciBldmVudHMgdG8gcmVtZW1iZXJcbiAgICAgICAgbWF4SW5hY3RpdmVGcmFtZXM6IDIgLy8gYWxsb3cgdGhpcyBudW1iZXIgb2YgZnJhbWVzIHRvIHBhc3Mgd2l0aCBubyBtb3ZlbWVudCBiZWZvcmUgd2UgZGVjbGFyZSBzdGF0aW9uYXJ5IHBvaW50ZXJcbiAgICB9LFxuICAgIHRyYWNrRWFzZTogS0VZLkVBU0lORy5MSU5FQVIsXG4gICAgdHdlZW5UYXJnZXQ6IDBcbn07IiwiLypcbiAgICBTdHJpbmcgY29uc3RhbnRzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBBTklNQVRFOiAnYW5pbWF0ZScsXG4gICAgQ0FMQzogJ2NhbGMnLFxuICAgIEpRVUVSWV9FTEVNRU5UOiAnX2pRdWVyeUVsZW1lbnQnLFxuICAgIEVBU0lORzoge1xuXHQgICAgUVVBRF9JTl9PVVQ6ICdxdWFkSW5PdXQnLFxuXHQgICAgUVVBRF9PVVQ6ICdxdWFkT3V0Jyxcblx0XHRJTjogJ0luJyxcblx0XHRJTl9PVVQ6ICdJbk91dCcsXG5cdFx0T1VUOiAnT3V0Jyxcblx0XHRMSU5FQVI6ICdsaW5lYXInXG4gICAgfSxcbiAgICBMSU5LOiB7XG5cdCAgICBUSU1FOiAnVGltZScsXG5cdCAgICBQT0lOVEVSOiAnUG9pbnRlcicsXG5cdCAgICBTUEVFRDogJ1NwZWVkJ1xuICAgIH0sXG4gICAgRVJST1I6IHtcblx0ICAgIEFDVElPTl9FWElTVFM6IFwiQWN0aW9uIGFscmVhZHkgZGVmaW5lZC4gVXNlIGZvcmNlT3ZlcnJpZGU6IHRydWUgdG8gb3ZlcnJpZGUuXCIsXG5cdCAgICBOT19BQ1RJT046IFwiTm8gYWN0aW9uIGRlZmluZWQgdG8gaW5oZXJpdCBmcm9tLlwiLFxuXHQgICAgSU5WQUxJRF9FQVNJTkc6IFwiOiBFYXNpbmcgbm90IGRlZmluZWRcIlxuICAgIH0sXG4gICAgRVZFTlQ6IHtcblx0ICAgIE1PVVNFOiAnbW91c2UnLFxuICAgICAgICBNT1VTRURPV046ICdtb3VzZWRvd24nLFxuICAgICAgICBNT1VTRU1PVkU6ICdtb3VzZW1vdmUnLFxuICAgICAgICBNT1VTRVVQOiAnbW91c2V1cCcsXG4gICAgICAgIFRPVUNIOiAndG91Y2gnLFxuICAgICAgICBUT1VDSFNUQVJUOiAndG91Y2hzdGFydCcsXG4gICAgICAgIFRPVUNITU9WRTogJ3RvdWNobW92ZScsXG4gICAgICAgIFRPVUNIRU5EOiAndG91Y2hlbmQnXG4gICAgfSxcbiAgICBQUk9HUkVTUzoge1xuICAgICAgICBESVJFQ1Q6ICdEaXJlY3QnLFxuICAgICAgICBSQU5HRTogJ1JhbmdlJ1xuICAgIH1cbn07IiwiLypcbiAgICBSIEUgRCBTIEggSSBGIFRcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBLRVkgPSByZXF1aXJlKCcuL29wdHMva2V5cy5qcycpLFxuXHRBY3Rpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi9ib2JzL2FjdGlvbk1hbmFnZXIuanMnKSxcblx0Q2hyb25vcyA9IHJlcXVpcmUoJy4vYm9icy9jaHJvbm9zLmpzJyksXG5cdEVhc2luZyA9IHJlcXVpcmUoJy4vdXRpbHMvZWFzaW5nRnVuY3Rpb25zLmpzJyksXG5cdGNhbGMgPSByZXF1aXJlKCcuL3V0aWxzL2NhbGMuanMnKSxcblx0dXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzL3V0aWxzLmpzJyksXG5cdHNoaW1zID0gcmVxdWlyZSgnLi91dGlscy9zaGltcy5qcycpLFxuXHRyUXVlcnkgPSByZXF1aXJlKCcuL3V0aWxzL3JRdWVyeS5qcycpLFxuXHRSZWRzaGlmdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBcdHRoaXMuaW5pdCgpO1xuXHR9LFxuICAgIHJlZHNoaWZ0LFxuICAgIEluc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICB9O1xuICAgIFxuSW5zdGFuY2UucHJvdG90eXBlID0ge1xuXHRcblx0LypcbiAgICBcdFJlYWQgb3IgYmluZCBkYXRhIHRvIHRoaXMgUmVkc2hpZnQgb2JqZWN0XG4gICAgXHRcbiAgICBcdFJlYWRcbiAgICBcdCAgICBAcGFyYW0gW3N0cmluZ106IEtleSBvZiBkYXRhIHZhbHVlIHRvIHJlYWRcbiAgICBcdCAgICBAcmV0dXJuIFthbnldOiBUaGUgZGF0YSBzdG9yZWQgdW5kZXIgdGhhdCBrZXlcbiAgICBcdCAgICBcbiAgICAgICAgV3JpdGUgc3ludGF4IEFcbiAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IG9mIGRhdGEgdmFsdWUgdG8gd3JpdGVcbiAgICAgICAgICAgIEBwYXJhbSBbYW55XTogVGhlIGRhdGEgdG8gc3RvcmUgdW5kZXIgdGhhdCBrZXlcbiAgICAgICAgICAgIFxuICAgICAgICBXcml0ZSBzeW50YXggQlxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3Qgb2Yga2V5L3ZhbHVlIHBhaXJzIHRvIGF0dGFjaCB0byB0aGlzIG9iamVjdFxuXHQqL1xuXHRkYXRhOiBmdW5jdGlvbiAoKSB7XG5cdCAgICB2YXIgcmV0dXJuVmFsdWUgPSB0aGlzLFxuXHQgICAgICAgIGFyZzAgPSBhcmd1bWVudHNbMF0sXG5cdCAgICAgICAgYXJnMElzU3RyaW5nID0gdXRpbHMuaXNTdHJpbmcoYXJnMCksXG5cdCAgICAgICAgZGF0YVRvU2V0ID0ge307XG5cdCAgICBcblx0ICAgIC8vIElmIHRoaXMgaXMgYSBnZXQgcmVxdWVzdFxuXHQgICAgaWYgKGFyZzBJc1N0cmluZyAmJiAhYXJndW1lbnRzWzFdKSB7XG4gICAgXHQgICAgcmV0dXJuVmFsdWUgPSBBY3Rpb25NYW5hZ2VyLmdldERhdGEodGhpcy50b2tlbiwgYXJnMCk7XG5cdCAgICBcblx0ICAgIC8vIEVsc2UgdGhpcyBpcyBhIHNldCByZXF1ZXN0XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICAgIGlmIChhcmcwSXNTdHJpbmcpIHtcbiAgICBcdCAgICAgICAgZGF0YVRvU2V0W2FyZzBdID0gYXJndW1lbnRzWzFdO1xuXHQgICAgICAgIH0gZWxzZSB7XG4gICAgXHQgICAgICAgIGRhdGFUb1NldCA9IGFyZzA7XG5cdCAgICAgICAgfVxuXG4gICAgXHQgICAgQWN0aW9uTWFuYWdlci5zZXREYXRhKHRoaXMudG9rZW4sIGRhdGFUb1NldCk7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiByZXR1cm5WYWx1ZTtcblx0fSxcblx0XG5cdC8qXG4gICAgXHRQbGF5IHRoZSBwcm92aWRlZCBhY3Rpb25zIGFzIGFuaW1hdGlvbnNcbiAgICBcdFxuICAgIFx0QHBhcmFtIFtzdHJpbmcgfHwgYXJyYXldOiBTcGFjZSBkZWxpbWluYXRlZCBzdHJpbmcgb3IgYXJyYXkgb2YgZGVmaW5lZCBhY3Rpb24ga2V5cyBpbiBvcmRlciBvZiBleGVjdXRpb25cbiAgICBcdEBwYXJhbSBbb2JqZWN0XTogT3ZlcnJpZGUgYWN0aW9uIGRlZmF1bHRzIHdpdGggdGhvc2UgZGVmaW5lZCBoZXJlXG5cdCovXG5cdHBsYXk6IGZ1bmN0aW9uIChkZWZzLCBvdmVycmlkZSkge1xuXHQgICAgcmV0dXJuIHJlZHNoaWZ0Lmlnbml0ZSh0aGlzLnRva2VuLCBLRVkuTElOSy5USU1FLCBBY3Rpb25NYW5hZ2VyLmNyZWF0ZUJhc2UoZGVmcywgb3ZlcnJpZGUpKTtcblx0fSxcblx0XG5cdC8qXG4gICAgXHRSdW4gdGhlIHByb3ZpZGVkIGFjdGlvbiBiYXNlZCBvbiBwcm9wZXJ0eSBzcGVlZFxuICAgIFx0XG4gICAgXHRAcGFyYW0gW3N0cmluZ106IEtleSBvZiB0aGUgYWN0aW9uIHRvIHByb2Nlc3NcbiAgICBcdEBwYXJhbSBbb2JqZWN0XTogT3ZlcnJpZGUgYWN0aW9uIGRlZmF1bHRzIHdpdGggdGhvc2UgZGVmaW5lZCBoZXJlXG5cdCovXG5cdG1vdmU6IGZ1bmN0aW9uIChkZWZzLCBvdmVycmlkZSkge1xuXHQgICAgcmV0dXJuIHJlZHNoaWZ0Lmlnbml0ZSh0aGlzLnRva2VuLCBLRVkuTElOSy5TUEVFRCwgQWN0aW9uTWFuYWdlci5jcmVhdGVCYXNlKGRlZnMsIG92ZXJyaWRlKSk7XG5cdH0sXG5cdFxuXG4gICAgLypcbiAgICAgICAgVHJhY2sgcG9pbnRlclxuICAgIFx0XG4gICAgXHRAcGFyYW0gW3N0cmluZ106IEtleSBvZiB0aGUgYWN0aW9uIHRvIHByb2Nlc3NcbiAgICAgICAgQHBhcmFtIFtldmVudF06IEluaXRpYXRpbmcgcG9pbnRlciBldmVudFxuICAgICovXG5cdHRyYWNrOiBmdW5jdGlvbiAoZGVmcykge1xuXHQgICAgdmFyIGhhc0FsbEFyZ3MgPSAoYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQpLFxuXHQgICAgICAgIHRvVHJhY2sgPSBoYXNBbGxBcmdzID8gYXJndW1lbnRzWzJdIDogYXJndW1lbnRzWzFdLFxuXHQgICAgICAgIG92ZXJyaWRlID0gaGFzQWxsQXJncyA/IGFyZ3VtZW50c1szXSA6IHt9O1xuXHQgICAgXG5cdCAgICByZXR1cm4gcmVkc2hpZnQuaWduaXRlKHRoaXMudG9rZW4sIEtFWS5MSU5LLlBPSU5URVIsIEFjdGlvbk1hbmFnZXIuY3JlYXRlQmFzZShkZWZzLCBvdmVycmlkZSksIHRvVHJhY2spO1xuXHR9LFxuICAgIFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0YXJ0IHNwZWNpZmllZCBhY3Rpb25cbiAgICAgICAgXG4gICAgICAgIEFjdGl2YXRlIHRoZSBhY3Rpb24gYW5kIGZpcmUgdXAgQ2hyb25vcyBhbmltYXRpb24gbG9vcFxuICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVkc2hpZnQuc3RhcnQodGhpcy50b2tlbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RvcCBzcGVjaWZpZWQgYWN0aW9uXG4gICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlZHNoaWZ0LnN0b3AodGhpcy50b2tlbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgZ2V0VG9rZW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW47XG4gICAgfSxcbiAgICBcbiAgICBpc0FjdGl2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQWN0aW9uTWFuYWdlci5pc0FjdGl2ZSh0aGlzLnRva2VuKTtcbiAgICB9XG4gICAgXG59O1xuXG5SZWRzaGlmdC5wcm90b3R5cGUgPSB7XG5cbiAgICBuZXdBY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCk7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIENyZWF0ZSBhIEluc3RhbmNlIHdpdGggdGhlIHNwZWNpZmllZCB0b2tlblxuICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IEFjdGlvbk1hbmFnZXIuZ2V0KHRva2VuKSB8fCBBY3Rpb25NYW5hZ2VyLmNyZWF0ZSgpO1xuXG4gICAgICAgIHJldHVybiBuZXcgSW5zdGFuY2UoYWN0aW9uLnRva2VuKTtcbiAgICB9LFxuICAgIFxuICAgIFxuICAgIGRlZmluZTogZnVuY3Rpb24gKGFjdGlvbnMpIHtcblx0ICAgIEFjdGlvbk1hbmFnZXIuZGVmaW5lKGFjdGlvbnMpO1xuXHQgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblx0XG5cdHN0YXJ0OiBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgQWN0aW9uTWFuYWdlci5hY3RpdmF0ZSh0b2tlbik7XG4gICAgICAgIENocm9ub3Muc3RhcnQoKTtcblx0fSxcblx0XG5cdHN0b3A6IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIFx0QWN0aW9uTWFuYWdlci5kZWFjdGl2YXRlKHRva2VuKTtcblx0fSxcblx0XG5cdC8qXG4gICAgXHRJZ25pdGUgUmVkc2hpZnRcbiAgICBcdFxuICAgIFx0R2V0IHRoZSBzcGVjaWZpZWQgYWN0aW9uIChvciBjcmVhdGUgaWYgbm9uZSksIHVwZGF0ZSBpdHMgcHJvcGVydGllc1xuICAgIFx0YW5kIHRoZW4gc3RhcnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogUHJvcGVydGllcyB0byBtYW5pcHVsYXRlXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT3B0aW9ucyBmb3IgdHJhY2tcbiAgICAgICAgQHBhcmFtIFtldmVudF06IEluaXRpYXRpbmcgcG9pbnRlciBldmVudFxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBJRCB0b2tlbiBmb3IgYWN0aW9uXG5cdCovXG5cdGlnbml0ZTogZnVuY3Rpb24gKHRva2VuLCBsaW5rLCBjaGFuZ2VzLCBlKSB7XG5cdFx0dmFyIGFjdGlvbiA9IEFjdGlvbk1hbmFnZXIuZ2V0KHRva2VuKTtcblx0XHRcblx0XHRjaGFuZ2VzLmxpbmsgPSBsaW5rO1xuXG5cdFx0QWN0aW9uTWFuYWdlci5jaGFuZ2UodG9rZW4sIGNoYW5nZXMsIGUpO1xuXG5cdFx0dGhpcy5zdGFydCh0b2tlbik7XG5cblx0XHRyZXR1cm4gdG9rZW47XG5cdH0sXG5cdFxuXHRcblx0XG5cdFxuXHQvKlxuICAgIFx0QWRkIGJlemllciBjdXJ2ZSBmdW5jdGlvblxuICAgIFx0XG4gICAgXHRBZGQgdGhlIHNwZWNpZmllZCBiZXppZXIgY3VydmUgdGhlIEVhc2luZ0Z1bmN0aW9uJ3MgYXZhaWxhYmxlIGVhc2luZ3NcbiAgICBcdE15IGZhdm91cml0ZSBiZXppZXIgY3VydmUgZ2VuZXJhdG9yIGlzIExlYSBWZXJvdSdzIGV4Y2VsbGVudCBodHRwOi8vY3ViaWMtYmV6aWVyLmNvbS9cbiAgICBcdFxuICAgIFx0QHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHRoZSBuZXcgZWFzaW5nIGZ1bmN0aW9uIFxuICAgIFx0QHBhcmFtIFtudW1iZXJdOiB4IGNvb3JkaW5hdGUgb2YgcG9pbnQgMVxuICAgIFx0QHBhcmFtIFtudW1iZXJdOiB5IGNvb3JkaW5hdGUgb2YgcG9pbnQgMVxuICAgIFx0QHBhcmFtIFtudW1iZXJdOiB4IGNvb3JkaW5hdGUgb2YgcG9pbnQgMlxuICAgIFx0QHBhcmFtIFtudW1iZXJdOiB5IGNvb3JkaW5hdGUgb2YgcG9pbnQgMlxuXHQqL1xuXHRhZGRCZXppZXI6IGZ1bmN0aW9uIChuYW1lLCB4MSwgeTEsIHgyLCB5Mikge1xuXHRcdEVhc2luZy5hZGRCZXppZXIobmFtZSwgeDEsIHkxLCB4MiwgeTIpO1xuXHR9LFxuXHRcbiAgICBDYWxjOiBjYWxjLFxuXHRcblx0cnVuOiBmdW5jdGlvbiAoKSB7XG4gICAgXHRcblx0fSxcblx0XG5cdHVwZGF0ZVBvaW50ZXI6IGZ1bmN0aW9uICh4LCB5LCB6KSB7XG4gICAgXHRcblx0fSxcblx0XG5cdC8qXG4gICAgXHRJbml0IFJlZHNoaWZ0XG4gICAgXHRcbiAgICBcdENoZWNrIGlmIHdlIG5lZWQgc2hpbXMgYW5kIGxvYWQgaWYgbmVjZXNzYXJ5XG5cdCovXG5cdGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBcdHNoaW1zLmZlYXR1cmVDaGVjaygpO1xuICAgIFx0clF1ZXJ5LmNoZWNrKCk7XG5cdH1cbn07XG5cbnJlZHNoaWZ0ID0gbmV3IFJlZHNoaWZ0KCk7XG5cbndpbmRvdy5SZWRzaGlmdCA9IHJlZHNoaWZ0O1xubW9kdWxlLmV4cG9ydHMgPSByZWRzaGlmdDsiLCIvKlxuICAgIENhbGN1bGF0b3JzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIFNpbXBsZSBJL08gc25pcHBldHNcbiAgICBcbiAgICBhbmdsZVxuICAgIGFuZ2xlRnJvbUNlbnRlclxuICAgIGRpZmZlcmVuY2VcbiAgICBkaXN0YW5jZVxuICAgIGRpc3RhbmNlMURcbiAgICBkaXN0YW5jZTJEXG4gICAgZGlzdGFuY2UzRFxuICAgIGVsYXBzZWRcbiAgICBoeXBvdGVudXNlXG4gICAgb2Zmc2V0XG4gICAgcHJvZ3Jlc3NcbiAgICByZXN0cmljdGVkXG4gICAgdGltZVJlbWFpbmluZ1xuICAgIHZhbHVlXG4gICAgdmFsdWVFYXNlZFxuKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBPZmZzZXQgPSByZXF1aXJlKCcuLi9iaXRzL29mZnNldC5qcycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscy5qcycpLFxuICAgIENhbGMgPSBmdW5jdGlvbiAoKSB7fSxcbiAgICBjYWxjO1xuICAgIFxuQ2FsYy5wcm90b3R5cGUgPSB7XG5cbiBcbiAgICAvKlxuICAgICAgICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICAgICAgICBcbiAgICAgICAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gICAgICAgIGFyZSBhdCAwLDAsIHRoZW4gcmV0dXJuIHRoZSBhbmdsZSB1c2luZyAuYW5nbGVGcm9tQ2VudGVyKClcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gICAgICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuICAgICovXG4gICAgYW5nbGU6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICB2YXIgZnJvbSA9IHBvaW50QiA/IHBvaW50QSA6IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgIHRvID0gcG9pbnRCIHx8IHBvaW50QSxcbiAgICAgICAgICAgIHBvaW50ID0ge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuZGlmZmVyZW5jZShmcm9tLngsIHRvLngpLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuZGlmZmVyZW5jZShmcm9tLnksIHRvLnkpXG4gICAgICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5nbGVGcm9tQ2VudGVyKHBvaW50LngsIHBvaW50LnkpO1xuICAgIH0sXG5cblxuICAgIC8qXG4gICAgICAgIEFuZ2xlIGZyb20gY2VudGVyXG4gICAgICAgIFxuICAgICAgICBSZXR1cm5zIHRoZSBjdXJyZW50IGFuZ2xlLCBpbiByYWRpYW5zLCBvZiBhIGRlZmluZWQgcG9pbnRcbiAgICAgICAgZnJvbSBhIGNlbnRlciAoYXNzdW1lZCAwLDApXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFggY29vcmRpbmF0ZSBvZiBzZWNvbmQgcG9pbnRcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBZIGNvb3JkaW5hdGUgb2Ygc2Vjb25kIHBvaW50XG4gICAgICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gMCwgMCBhbmQgcG9pbnQgaW4gcmFkaWFuc1xuICAgICovXG4gICAgYW5nbGVGcm9tQ2VudGVyOiBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih5LCB4KTtcblx0fSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEaWZmZXJlbmNlXG4gICAgICAgIFxuICAgICAgICBSZXR1cm5zIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gYSBhbmQgYiBieSBzdWJ0cmFjdGluZyBiIGZyb20gYS5cbiAgICAgICAgVXNlZnVsIGluIGNhbGN1YWx0aW5nIHRoZSB6ZXJvLW5vcm1hbGlzZWQgcG9zaXRpb24gb2YgYiwgb3IgdGhlXG4gICAgICAgIGRpZmZlcmVuY2Ugc29tZXRoaW5nIGhhcyB0cmF2ZWxsZWQgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBhXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgYlxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBEaWZmZXJlbmNlIGJldHdlZW4gdmFsdWUgYSBhbmQgdmFsdWUgYlxuICAgICovXG4gICAgZGlmZmVyZW5jZTogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBcdHJldHVybiBiIC0gYTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG5cdCAgICBEaWxhdGVcblx0ICAgIFxuXHQgICAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuXHQgICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG5cdCAgICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG5cdCAgICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiAgICAqL1xuICAgIGRpbGF0ZTogZnVuY3Rpb24gKHByZXZpb3VzLCBjdXJyZW50LCBkaWxhdGlvbikge1xuXHQgICAgcmV0dXJuIHByZXZpb3VzICsgKChjdXJyZW50IC0gcHJldmlvdXMpICogZGlsYXRpb24pO1xuICAgIH0sXG4gICAgICAgIFxuICAgIC8qXG4gICAgICAgIERpc3RhbmNlXG4gICAgICAgIFxuICAgICAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuICgwLDApIGFuZCBwb2ludEEsIHVubGVzcyBwb2ludEJcbiAgICAgICAgaXMgcHJvdmlkZWQsIHRoZW4gd2UgcmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHR3by5cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICAgICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICovXG4gICAgZGlzdGFuY2U6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBwb2ludEEgPT09IFwibnVtYmVyXCIpID8gdGhpcy5kaXN0YW5jZTFEKHBvaW50QSwgcG9pbnRCKSA6IHRoaXMuZGlzdGFuY2UyRChwb2ludEEsIHBvaW50Qik7XG4gICAgfSxcblxuXG4gICAgLypcbiAgICAgICAgRGlzdGFuY2UgMURcbiAgICAgICAgXG4gICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gcG9pbnQgQSBhbmQgcG9pbnQgQlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQb2ludCBBXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogKG9wdGlvbmFsKTogUG9pbnQgQlxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICovXG4gICAgZGlzdGFuY2UxRDogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgXHR2YXIgYklzTnVtID0gKHR5cGVvZiBwb2ludEIgPT09ICdudW1iZXInKSxcbiAgICBcdFx0ZnJvbSA9IGJJc051bSA/IHBvaW50QSA6IDAsXG4gICAgXHRcdHRvID0gYklzTnVtID8gcG9pbnRCIDogcG9pbnRBO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmRpZmZlcmVuY2UoZnJvbSwgdG8pO1xuICAgIH0sXG5cbiAgXG4gICAgLypcbiAgICAgICAgRGlzdGFuY2UgMkRcbiAgICAgICAgXG4gICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gKDAsMCkgYW5kIHBvaW50IEEsIHVubGVzcyBwb2ludCBCXG4gICAgICAgIGlzIHByb3ZpZGVkLCB0aGVuIHdlIHJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IHggYW5kIHkgb2YgcG9pbnQgQVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IChvcHRpb25hbCk6IHggYW5kIHkgb2YgcG9pbnQgQlxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICovXG4gICAgZGlzdGFuY2UyRDogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgIHZhciBiSXNPYmogPSAodHlwZW9mIHBvaW50QiA9PT0gXCJvYmplY3RcIiksXG4gICAgICAgICAgICBmcm9tID0gYklzT2JqID8gcG9pbnRBIDoge3g6IDAsIHk6IDB9LFxuICAgICAgICAgICAgdG8gPSBiSXNPYmogPyBwb2ludEIgOiBwb2ludEEsXG4gICAgICAgICAgICBwb2ludCA9IHtcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmRpZmZlcmVuY2UoZnJvbS54LCB0by54KSxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLmRpZmZlcmVuY2UoZnJvbS55LCB0by55KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5oeXBvdGVudXNlKHBvaW50LngsIHBvaW50LnkpO1xuICAgIH0sXG4gICAgXG4gICAgICAgIFxuICAgIC8qXG4gICAgICAgIEh5cG90ZW51c2VcbiAgICAgICAgXG4gICAgICAgIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBMZW5ndGggb2YgQ1xuICAgICovXG4gICAgaHlwb3RlbnVzZTogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIGEyID0gYSAqIGEsXG4gICAgICAgICAgICBiMiA9IGIgKiBiLFxuICAgICAgICAgICAgYzIgPSBhMiArIGIyO1xuICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoYzIpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgT2Zmc2V0IGJldHdlZW4gdHdvIHBvaW50c1xuICAgICAgICBcbiAgICAgICAgQ2FsY3VsYXRlIHRoZSBhbmdsZSwgZGlzdGFuY2UsIHggeSBhbmQgeiBkaXN0YW5jZXMgYmV0d2VlbiB0d28gZ2l2ZW4gcG9pbnRzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW1BvaW50XTogRmlyc3QgcG9pbnRcbiAgICAgICAgQHBhcmFtIFtQb2ludF06IFNlY29uZCBwb2ludFxuICAgICAgICBAcmV0dXJuIFtPZmZzZXRdOiBEaXN0YW5jZSBtZXRyaWNzIGJldHdlZW4gdHdvIHBvaW50c1xuICAgICovXG4gICAgb2Zmc2V0OiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgdmFyIGFuZ2xlID0gdGhpcy5hbmdsZShwb2ludEEsIHBvaW50QiksXG4gICAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2UyRChwb2ludEEsIHBvaW50QiksXG4gICAgICAgICAgICB4ID0gdGhpcy5kaXN0YW5jZTFEKHBvaW50QS54LCBwb2ludEIueCksXG4gICAgICAgICAgICB5ID0gdGhpcy5kaXN0YW5jZTFEKHBvaW50QS55LCBwb2ludEIueSksXG4gICAgICAgICAgICB6ID0gdGhpcy5kaXN0YW5jZTFEKHBvaW50QS56LCBwb2ludEIueik7XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ldyBPZmZzZXQoYW5nbGUsIGRpc3RhbmNlLCB4LCB5LCB6KTtcbiAgICB9LFxuICAgIFxuICAgIHBvaW50OiBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgICBcdHZhciBwb2ludCA9IHt9O1xuXG4gICAgXHRwb2ludC54ID0gNSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54O1xuICAgIFx0cG9pbnQueSA9IDUgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueTtcblxuXHQgICAgcmV0dXJuIHBvaW50O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICAgICAgXG4gICAgICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gICAgICAgIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICAgICAgICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgaWYgZnVsbCByYW5nZSBnaXZlbiwgdXBwZXIgaWYgbm90XG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuICAgICovXG4gICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uICh2YWx1ZSwgbGltaXRBLCBsaW1pdEIpIHtcbiAgICBcdHZhciBiSXNOdW0gPSAodHlwZW9mIGxpbWl0QiA9PT0gJ251bWJlcicpLFxuICAgIFx0XHRmcm9tID0gYklzTnVtID8gbGltaXRBIDogMCxcbiAgICBcdFx0dG8gPSBiSXNOdW0gPyBsaW1pdEIgOiBsaW1pdEEsXG4gICAgXHRcdHJhbmdlID0gdGhpcy5kaWZmZXJlbmNlKGZyb20sIHRvKSxcbiAgICAgICAgICAgIHByb2dyZXNzID0gKHZhbHVlIC0gZnJvbSkgLyByYW5nZTtcblxuICAgICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuXHQgICAgUmV0dXJuIHJhbmRvbSBudW1iZXIgYmV0d2VlbiByYW5nZVxuXHQgICAgXG5cdCAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cblx0ICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWF4aW11bVxuXHQgICAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuICAgICovXG4gICAgcmFuZG9tOiBmdW5jdGlvbiAobWluLCBtYXgpIHtcblx0ICAgIG1pbiA9IHV0aWxzLmlzTnVtKG1pbikgPyBtaW4gOiAwO1xuXHQgICAgbWF4ID0gdXRpbHMuaXNOdW0obWF4KSA/IG1heCA6IDE7XG5cdCAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgIH0sXG5cblxuICAgIC8qXG4gICAgICAgIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gICAgICAgIFxuICAgICAgICBSZXR1cm4gdmFsdWUgd2l0aGluIHRoZSByYW5nZSBvZiBsb3dlckxpbWl0IGFuZCB1cHBlckxpbWl0XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICovXG4gICAgcmVzdHJpY3RlZDogZnVuY3Rpb24gKHZhbHVlLCBmcm9tLCB0bykge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIGZyb20pLCB0byk7XG4gICAgfSxcbiAgICBcblxuICAgIC8qXG4gICAgICAgIFRpbWUgcmVtYWluaW5nXG4gICAgICAgIFxuICAgICAgICBSZXR1cm4gdGhlIGFtb3VudCBvZiB0aW1lIHJlbWFpbmluZyBmcm9tIHRoZSBwcm9ncmVzcyBhbHJlYWR5IG1hZGVcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgdGhyb3VnaCB0aW1lIGxpbWl0IGJldHdlZW4gMC0xXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRHVyYXRpb25cbiAgICAqL1xuICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uIChwcm9ncmVzcywgZHVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuICgxIC0gcHJvZ3Jlc3MpICogZHVyYXRpb247XG4gICAgfSxcblxuIFxuICAgIC8qXG4gICAgICAgIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICAgICAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlLCBvciB1cHBlciBpZiBsaW1pdDIgbm90IHByb3ZpZGVkXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4gICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gKHByb2dyZXNzLCBsaW1pdEEsIGxpbWl0Qikge1xuICAgIFx0dmFyIGJJc051bSA9ICh0eXBlb2YgbGltaXRCID09PSAnbnVtYmVyJyksXG4gICAgXHRcdGZyb20gPSBiSXNOdW0gPyBsaW1pdEEgOiAwLFxuICAgIFx0XHR0byA9IGJJc051bSA/IGxpbWl0QiA6IGxpbWl0QTtcblxuICAgICAgICByZXR1cm4gKC0gcHJvZ3Jlc3MgKiBmcm9tKSArIChwcm9ncmVzcyAqIHRvKSArIGZyb207IFxuICAgIH0sXG5cblxuICAgIC8qXG4gICAgICAgIEVhc2VkIHZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICAgICAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlLCBvciB1cHBlciBpZiBsaW1pdDIgbm90IHByb3ZpZGVkXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IEVhc2luZyB0byBhcHBseSB0byB2YWx1ZVxuICAgICAgICBAcGFybWEgW251bWJlcl0gKG9wdGlvbmFsKTogQW1wIG1vZGlmaWVyXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiAgICAqL1xuICAgIHZhbHVlRWFzZWQ6IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2luZykge1xuICAgICAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IGVhc2luZyhwcm9ncmVzcyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZShlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG4gICAgfSxcbiAgICBcbiAgICBkZWdyZWVzVG9SYWRpYW5zOiBmdW5jdGlvbiAoZGVncmVlcykge1xuXHQgICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICAgIH0sXG4gICAgXG4gICAgcmFkaWFuc1RvRGVncmVlczogZnVuY3Rpb24gKHJhZGlhbnMpIHtcblx0ICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbiAgICB9XG59O1xuXG5jYWxjID0gbmV3IENhbGMoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjYWxjOyIsIi8qXG4gICAgRWFzaW5nIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgXG4gICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgICAgIFxuICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgIFxuICAgIEJhc2UgZWFzaW5nXG4gICAgICAgIGxpbmVhcjogZGVmYXVsdCwgbm8gaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcbiAgICAgICAgcXVhZFxuICAgICAgICBjdWJpY1xuICAgICAgICBxdWFydFxuICAgICAgICBxdWludFxuICAgICAgICBleHBcbiAgICAgICAgY2lyY1xuICAgICAgICBiYWNrXG4gICAgICAgIGJvdW5jZVxuICAgICAgICBzd2luZ1xuICAgICAgICBzcHJpbmdcbiAgICAgICAgXG4gICAgRWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXJcbiAgICBodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuICAgICAgICBcbiAgICBCZXppZXIgY3VydmUgaW50ZXJwcmV0b3IgY3JlYXRlZCBmcm9tIEdhw6t0YW4gUmVuYXVkZWF1J3Mgb3JpZ2luYWwgQmV6aWVyRWFzaW5nICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi9jYWxjLmpzJyksXG4gXHR1dGlsID0gcmVxdWlyZSgnLi91dGlscy5qcycpLFxuIFx0S0VZID0gcmVxdWlyZSgnLi4vb3B0cy9rZXlzLmpzJyksXG4gXHRkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL29wdHMvZGVmYXVsdHMuanMnKSxcbiBcdEJlemllciA9IHJlcXVpcmUoJy4uL2JpdHMvYmV6aWVyLmpzJyksXG4gXHRFYXNpbmdGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHt9LFxuXHRlYXNpbmdGdW5jdGlvbixcblx0LypcbiAgICBcdEVhY2ggb2YgdGhlc2UgYmFzZSBmdW5jdGlvbnMgaXMgYW4gZWFzZUluXG4gICAgXHRcbiAgICBcdE9uIGluaXQsIHdlIHVzZSBFYXNpbmdGdW5jdGlvbi5taXJyb3IgYW5kIC5yZXZlcnNlIHRvIGdlbmVyYXRlIGVhc2VJbk91dCBhbmRcbiAgICBcdGVhc2VPdXQgZnVuY3Rpb25zIHJlc3BlY3RpdmVseS5cblx0Ki9cblx0YmFzZUluID0ge1xuXHQgICAgLypcbiAgICBcdCAgICBRdWFkIC0gUXVuaXQgZWFzaW5nXG4gICAgXHQgICAgXG4gICAgXHQgICAgR2VuZXJhdGVzIGVhc2luZyBjdXJ2ZSBiYXNlZCBvbiBleHBvbmVudCBvZiB0aW1lXG5cdCAgICAqL1xuICAgICAgICBxdWFkOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgMik7XG4gICAgICAgIH0sXG4gICAgICAgIGN1YmljOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgMyk7XG4gICAgICAgIH0sXG4gICAgICAgIHF1YXJ0OiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgNCk7XG4gICAgICAgIH0sXG4gICAgICAgIHF1aW50OiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgNSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNpcmM6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKTtcbiAgICAgICAgfSxcbiAgICAgICAgYmFjazogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICB2YXIgc3RyZW5ndGggPSAxLjU7XG5cbiAgICAgICAgICAgIHJldHVybiAocHJvZ3Jlc3MgKiBwcm9ncmVzcykgKiAoKHN0cmVuZ3RoICsgMSkgKiBwcm9ncmVzcyAtIHN0cmVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYmFzZU91dCA9IHtcbiAgICAgICAgYm91bmNlOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcblx0XHRcdGlmICgocHJvZ3Jlc3MpIDwgKDEvMi43NSkpIHtcblx0XHRcdFx0cmV0dXJuICg3LjU2MjUqcHJvZ3Jlc3MqcHJvZ3Jlc3MpO1xuXHRcdFx0fSBlbHNlIGlmIChwcm9ncmVzcyA8ICgyLzIuNzUpKSB7XG5cdFx0XHRcdHJldHVybiAoNy41NjI1Kihwcm9ncmVzcy09KDEuNS8yLjc1KSkqcHJvZ3Jlc3MgKyAuNzUpO1xuXHRcdFx0fSBlbHNlIGlmIChwcm9ncmVzcyA8ICgyLjUvMi43NSkpIHtcblx0XHRcdFx0cmV0dXJuICg3LjU2MjUqKHByb2dyZXNzLT0oMi4yNS8yLjc1KSkqcHJvZ3Jlc3MgKyAuOTM3NSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gKDcuNTYyNSoocHJvZ3Jlc3MtPSgyLjYyNS8yLjc1KSkqcHJvZ3Jlc3MgKyAuOTg0Mzc1KTtcblx0XHRcdH1cbiAgICAgICAgfSxcblx0ICAgIHN3aW5nOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcblx0XHQgICAgdmFyIHMgPSAxLjcwMTU4O1xuXHRcdCAgICByZXR1cm4gKHByb2dyZXNzIC09IDEpICogcHJvZ3Jlc3MgKiAoKHMgKyAxKSAqIHByb2dyZXNzICsgcykgKyAxO1xuXHQgICAgfSxcblx0ICAgIHNwcmluZzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG5cdCAgICBcdHJldHVybiAxIC0gKE1hdGguY29zKHByb2dyZXNzICogNC41ICogTWF0aC5QSSkgKiBNYXRoLmV4cCgtcHJvZ3Jlc3MgKiA2KSk7XG5cdCAgICB9XG5cdH07XG5cdFxuRWFzaW5nRnVuY3Rpb24ucHJvdG90eXBlID0ge1xuXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBuYW1lZCBlYXNpbmcgZnVuY3Rpb25cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiB0aGUgZWFzaW5nIGZ1bmN0aW9uIHRvIGdldCBcbiAgICAgICAgQHJldHVybiBbZnVuY3Rpb24gfHwgYm9vbGVhbl06IEVhc2luZyBmdW5jdGlvbiBvciBmYWxzZSBpZiBmdW5jdGlvbiB1bmRlZmluZWRcbiAgICAqL1xuXHRnZXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0dmFyIGVhc2luZyA9IHRoaXNbbmFtZV07XG5cdFx0XG5cdFx0aWYgKCFlYXNpbmcpIHtcblx0XHRcdHRocm93IG5hbWUgKyBLRVkuRVJST1IuSU5WQUxJRF9FQVNJTkc7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVhc2luZztcblx0fSxcblx0XG5cdFxuXHQvKlxuICAgIFx0QWRkIEJlemllciBDdXJ2ZSBlYXNpbmdcbiAgICBcdFxuICAgIFx0QHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIG5ldyBlYXNpbmdcbiAgICBcdEBwYXJtYSBbbnVtYmVyXTogWCBvZiBjb29yZGluYXRlIDFcbiAgICBcdEBwYXJtYSBbbnVtYmVyXTogWSBvZiBjb29yZGluYXRlIDFcbiAgICBcdEBwYXJtYSBbbnVtYmVyXTogWCBvZiBjb29yZGluYXRlIDJcbiAgICBcdEBwYXJtYSBbbnVtYmVyXTogWSBvZiBjb29yZGluYXRlIDJcblx0Ki9cblx0YWRkQmV6aWVyOiBmdW5jdGlvbiAobmFtZSwgeDEsIHkxLCB4MiwgeTIpIHtcblx0XHRpZiAoIXRoaXNbbmFtZV0pIHtcblx0XHRcdHRoaXNbbmFtZV0gPSBuZXcgQmV6aWVyKHgxLCB5MSwgeDIsIHkyKTtcblx0XHR9XG5cdH0sXG5cbiAgICAgIFxuICAgIC8qXG4gICAgICAgIE1pcnJvciBlYXNpbmdcbiAgICAgICAgXG4gICAgICAgIE1pcnJvcnMgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBoZXJlIGZvciBtaXJyb3JpbmcgYW5cbiAgICAgICAgZWFzZUluIGludG8gYW4gZWFzZUluT3V0XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1pcnJvclxuICAgICAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuICAgICovXG5cdG1pcnJvckVhc2luZzogZnVuY3Rpb24gKHByb2dyZXNzLCBtZXRob2QpIHtcbiAgICAgICAgdmFyIGRlbHRhO1xuICAgICAgICBcbiAgICAgICAgaWYgKHByb2dyZXNzIDw9IDAuNSkge1xuICAgICAgICAgICAgZGVsdGEgPSBtZXRob2QoMiAqIHByb2dyZXNzKSAvIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWx0YSA9ICgyIC0gbWV0aG9kKDIgKiAoMSAtIHByb2dyZXNzKSkpIC8gMjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRlbHRhO1xuICAgIH0sXG4gICAgICAgICAgICBcbiAgICAvKlxuICAgICAgICBSZXZlcnNlIGVhc2luZ1xuICAgICAgICBcbiAgICAgICAgUmV2ZXJzZXMgdGhlIG91dHB1dCBvZiB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGZvciBmbGlwcGluZyBlYXNlSW5cbiAgICAgICAgY3VydmUgdG8gYW4gZWFzZU91dC5cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gcmV2ZXJzZVxuICAgICAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuICAgICovXG4gICAgcmV2ZXJzZUVhc2luZzogZnVuY3Rpb24gKHByb2dyZXNzLCBtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBtZXRob2QoMSAtIHByb2dyZXNzKTtcbiAgICB9LFxuICAgIFxuICAgIFxuICAgIC8qXG4gICAgICAgIEFkZCBuZXcgZWFzaW5nIGZ1bmN0aW9uXG4gICAgICAgIFxuICAgICAgICBUYWtlcyBuYW1lIGFuZCBnZW5lcmF0ZXMgbmFtZUluLCBuYW1lT3V0LCBuYW1lSW5PdXQsIGFuZCBlYXNpbmcgZnVuY3Rpb25zIHRvIG1hdGNoXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEJhc2UgbmFtZSBvZiB0aGUgZWFzaW5nIGZ1bmN0aW9ucyB0byBnZW5lcmF0ZVxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogQmFzZSBlYXNpbmcgZnVuY3Rpb24sIGFzIGFuIGVhc2VJbiwgZnJvbSB3aGljaCB0byBnZW5lcmF0ZSBPdXQgYW5kIEluT3V0XG4gICAgKi9cblx0Z2VuZXJhdGU6IGZ1bmN0aW9uIChuYW1lLCBtZXRob2QsIGlzQmFzZUluKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzLFxuXHRcdFx0bmFtZXMgPSB7XG5cdFx0XHRcdGVhc2VJbjogbmFtZSArIEtFWS5FQVNJTkcuSU4sIFxuXHRcdFx0XHRlYXNlT3V0OiBuYW1lICsgS0VZLkVBU0lORy5PVVQsXG5cdFx0XHRcdGVhc2VJbk91dDogbmFtZSArIEtFWS5FQVNJTkcuSU5fT1VUXG5cdFx0XHR9LFxuXHRcdFx0YmFzZU5hbWUgPSBpc0Jhc2VJbiA/IG5hbWVzLmVhc2VJbiA6IG5hbWVzLmVhc2VPdXQsXG5cdFx0XHRyZXZlcnNlTmFtZSA9IGlzQmFzZUluID8gbmFtZXMuZWFzZU91dCA6IG5hbWVzLmVhc2VJbjtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIEluIGZ1bmN0aW9uXG4gICAgICAgIHRoaXNbYmFzZU5hbWVdID0gbWV0aG9kO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgT3V0IGZ1bmN0aW9uIGJ5IHJldmVyc2luZyB0aGUgdHJhbnNpdGlvbiBjdXJ2ZVxuICAgICAgICB0aGlzW3JldmVyc2VOYW1lXSA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYucmV2ZXJzZUVhc2luZyhwcm9ncmVzcywgc2VsZltuYW1lcy5lYXNlSW5dKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgSW5PdXQgZnVuY3Rpb24gYnkgbWlycm9yaW5nIHRoZSB0cmFuc2l0aW9uIGN1cnZlXG4gICAgICAgIHRoaXNbbmFtZXMuZWFzZUluT3V0XSA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYubWlycm9yRWFzaW5nKHByb2dyZXNzLCBzZWxmW25hbWVzLmVhc2VJbl0pO1xuICAgICAgICB9O1xuXHR9LFxuICAgIFxuICAgIFxuICAgIC8qXG4gICAgICAgIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAxIHByb2dyZXNzXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogRWFzaW5nIHRvIHVzZVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IEFtcGxpZnkgcHJvZ3Jlc3Mgb3V0IG9mIHNwZWNpZmllZCByYW5nZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBvZiBlYXNlZCBwcm9ncmVzcyBpbiByYW5nZVxuICAgICovICBcbiAgICB3aXRoaW5SYW5nZTogZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzZSwgZXNjYXBlQW1wKSB7XG4gICAgICAgIHZhciBuZXdQcm9ncmVzcyA9IGNhbGMucmVzdHJpY3RlZChwcm9ncmVzcywgMCwgMSksXG4gICAgICAgICAgICBpblJhbmdlID0gdXRpbC5pc0luUmFuZ2UocHJvZ3Jlc3MsIDAsIDEpO1xuICAgICAgICAgICAgXG4gICAgICAgIGVhc2UgPSBpblJhbmdlID8gZWFzZSA6IEtFWS5FQVNJTkcuTElORUFSO1xuXG4gICAgICAgIGlmICghaW5SYW5nZSkge1xuICAgICAgICAgICAgbmV3UHJvZ3Jlc3MgPSBuZXdQcm9ncmVzcyArIChjYWxjLmRpZmZlcmVuY2UobmV3UHJvZ3Jlc3MsIHByb2dyZXNzKSAqIGVzY2FwZUFtcCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2FsYy52YWx1ZUVhc2VkKG5ld1Byb2dyZXNzLCBmcm9tLCB0bywgdGhpcy5nZXQoZWFzZSkpO1xuICAgIH0sXG4gICAgICAgIFxuICAgIC8qXG4gICAgICAgIExpbmVhciBlYXNpbmcgYWRqdXN0bWVudFxuICAgICAgICBcbiAgICAgICAgVGhlIGRlZmF1bHQgZWFzaW5nIG1ldGhvZCwgbm90IGFkZGVkIHdpdGggLmV4dGVuZCBhcyBpdCBoYXMgbm8gT3V0IG9yIEluT3V0XG4gICAgICAgIHZhcmlhdGlvbi5cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMC0xXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IFVuYWRqdXN0ZWQgcHJvZ3Jlc3NcbiAgICAqL1xuICAgICdsaW5lYXInOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzO1xuICAgIH0sXG4gICAgXG4gICAgJ2Vhc2UnOlx0XHRcdG5ldyBCZXppZXIoLjI1LCAuMSwgLjI1LCAxLjApLFxuICAgICdlYXNlLWluJzpcdFx0bmV3IEJlemllciguNDIsIDAsIDEuMDAsIDEuMCksXG4gICAgJ2Vhc2Utb3V0JzpcdFx0bmV3IEJlemllcigwLCAwLCAuNTgsIDEuMCksXG4gICAgJ2Vhc2UtaW4tb3V0JzpcdG5ldyBCZXppZXIoLjQyLCAwLCAuNTgsIDEuMCksXG4gICAgJ2JhY2staW4nOiBcdFx0bmV3IEJlemllciguNDgsLTAuNDUsLjk5LC43OSksXG4gICAgJ2JhY2stb3V0JzogXHRuZXcgQmV6aWVyKC4xMSwuNywuNiwxLjMxKVxuXG59O1xuXG5lYXNpbmdGdW5jdGlvbiA9IG5ldyBFYXNpbmdGdW5jdGlvbigpO1xuXG5pbml0KCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cblx0Ly8gR2VuZXJhdGUgZWFzaW5nIHdpdGggYmFzZSBmdW5jdGlvbiBvZiBlYXNlSW5cblx0Zm9yICh2YXIga2V5IGluIGJhc2VJbikge1xuXHRcdGlmIChiYXNlSW4uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0ZWFzaW5nRnVuY3Rpb24uZ2VuZXJhdGUoa2V5LCBiYXNlSW5ba2V5XSwgdHJ1ZSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gR2VuZXJhdGUgZWFzaW5nIHdpdGggYmFzZSBmdW5jdGlvbiBvZiBlYXNlT3V0XG5cdGZvciAoa2V5IGluIGJhc2VPdXQpIHtcblx0XHRpZiAoYmFzZU91dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRlYXNpbmdGdW5jdGlvbi5nZW5lcmF0ZShrZXksIGJhc2VPdXRba2V5XSk7XG5cdFx0fVxuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZWFzaW5nRnVuY3Rpb247XG4iLCIvKlxuICAgIFJlZHNoaWZ0IGpRdWVyeSBwbHVnaW5cbiAgICBcbiAgICBQcm92aWRlcyBhY2Nlc3MgdG8gLnBsYXksIC5tb3ZlIGFuZCAudHJhY2sgcHJvcGVydGllcyBvbiBhbiBqUXVlcnkgb2JqZWN0LlxuICAgIFVzZXMgdGhhdCBqUXVlcnkgb2JqZWN0IHRvIHN0b3JlIGEgdW5xaXVlIFJlZHNoaWZ0IGluc3RhbmNlLlxuICAgIFxuICAgIC5yZWRzaGlmdCgpIG1ldGhvZCB1c2VkIGZvciBvdGhlciBSZWRzaGlmdCBmdW5jdGlvbnMsIGllICQoJyNlbGVtZW50JykucmVkc2hpZnQoJ3N0b3AnKVxuKi9cbnZhciBLRVkgPSByZXF1aXJlKCcuLi9vcHRzL2tleXMuanMnKSxcbiAgICByUXVlcnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgXHR2YXIgUkVEU0hJRlQgPSAncmVkc2hpZnQnLFxuICAgIFx0XHRleGVjdXRlID0gZnVuY3Rpb24gKCRlbGVtZW50LCBhY3Rpb24sIGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgICBcdFx0XHQkZWxlbWVudC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBcdFx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgXHRcdFx0XHRcdHRoaXNSZWRzaGlmdCA9ICR0aGlzLmRhdGEoUkVEU0hJRlQpO1xuICAgIFx0XHRcdFx0XG4gICAgXHRcdFx0XHQvLyBJZiB3ZSBoYXZlbid0IHN0b3JlZCBhIFJlZHNoaWZ0IGluc3RhbmNlIG9uIHRoaXMgZWxlbWVudCwgbWFrZSBvbmVcbiAgICBcdFx0XHRcdGlmICghdGhpc1JlZHNoaWZ0KSB7XG4gICAgXHRcdFx0XHRcdHRoaXNSZWRzaGlmdCA9IFJlZHNoaWZ0LmdldCgpO1xuICAgIFx0XHRcdFx0XHR0aGlzUmVkc2hpZnQuZGF0YShLRVkuSlFVRVJZX0VMRU1FTlQsICR0aGlzKTtcbiAgICBcdFx0XHRcdFx0JHRoaXMuZGF0YShSRURTSElGVCwgdGhpc1JlZHNoaWZ0KTtcbiAgICBcdFx0XHRcdH1cblxuICAgIFx0XHRcdFx0dGhpc1JlZHNoaWZ0W2FjdGlvbl0oYXJnMSwgYXJnMiwgYXJnMyk7XG4gICAgXHRcdFx0fSk7XG4gICAgXHRcdH07XG4gICAgXHRcdFxuICAgIFx0JC5mbi5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgIFx0XHRleGVjdXRlKHRoaXMsICdwbGF5JywgYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xuICAgIFx0XHRcbiAgICBcdFx0cmV0dXJuIHRoaXM7XG4gICAgXHR9O1xuICAgIFx0XG4gICAgXHQkLmZuLm1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgXHRcdGV4ZWN1dGUodGhpcywgJ21vdmUnLCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XG4gICAgXG4gICAgXHRcdHJldHVybiB0aGlzO1xuICAgIFx0fTtcbiAgICBcdFxuICAgIFx0JC5mbi50cmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICBcdFx0ZXhlY3V0ZSh0aGlzLCAndHJhY2snLCBhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICBcdFx0XG4gICAgXHRcdHJldHVybiB0aGlzO1xuICAgIFx0fTtcbiAgICBcdFxuICAgIFx0JC5mbi5yZWRzaGlmdCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICBcdFx0ZXhlY3V0ZSh0aGlzLCBhY3Rpb24sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICBcdFx0XG4gICAgXHRcdHJldHVybiB0aGlzO1xuICAgIFx0fTtcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjaGVjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAod2luZG93LmpRdWVyeSkge1xuICAgICAgICAgICAgclF1ZXJ5KCk7XG4gICAgICAgIH1cbiAgICB9XG59OyIsInZhciBTaGltID0gZnVuY3Rpb24gKCkge307XG5cblNoaW0ucHJvdG90eXBlID0ge1xuXG4gICAgLypcbiAgICAgICAgaW5kZXhPZiBwb2x5ZmlsbFxuICAgICAgICBcbiAgICAgICAgRm9yIElFOCB0cm9nbG9kaXRlc1xuICAgICAgICBcbiAgICAgICAgVGFrZW4gZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM2MjkxODMvd2h5LWRvZXNudC1pbmRleG9mLXdvcmstb24tYW4tYXJyYXktaWU4XG4gICAgKi9cbiAgICBpbmRleE9mOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gKGVsdCAvKiwgZnJvbSovKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoID4+PiAwLFxuICAgICAgICAgICAgICAgICAgICBmcm9tID0gTnVtYmVyKGFyZ3VtZW50c1sxXSkgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZnJvbSA9IChmcm9tIDwgMCkgPyBNYXRoLmNlaWwoZnJvbSkgOiBNYXRoLmZsb29yKGZyb20pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChmcm9tIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tICs9IGxlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICg7IGZyb20gPCBsZW47IGZyb20rKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnJvbSBpbiB0aGlzICYmIHRoaXNbZnJvbV0gPT09IGVsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZyb207XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgICAgXG4gICAgICAgIEZvciBJRTgvOSBGbGluc3RvbmVzXG4gICAgXG4gICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgXG4gICAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgIFxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgICBcbiAgICAgICAgTUlUIGxpY2Vuc2VcbiAgICAqL1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGFzdFRpbWUgPSAwLFxuICAgICAgICAgICAgdmVuZG9ycyA9IFsnbXMnLCAnbW96JywgJ3dlYmtpdCcsICdvJ10sXG4gICAgICAgICAgICB2ZW5kb3JzTGVuZ3RoID0gdmVuZG9ycy5sZW5ndGg7XG4gICAgICAgIFxuICAgICAgICAvLyBDaGVjayBmb3IgcHJlZml4ZWQgaW1wbGVtZW50YXRpb25zXG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgdmVuZG9yc0xlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgeCsrKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbeF0rJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB0aGVyZSBpcywgZm8gYWJzb2x1dGUgc2hpenpsZSwgbm8gckFGIGltcGxlbWVudGF0aW9ucywgbWFrZSBvbmUgb3V0IG9mIHNldFRpbWVvdXQgYW5kIHB1dHR5XG4gICAgICAgIGlmICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpLFxuICAgICAgICAgICAgICAgICAgICBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuc2hpbSA9IG5ldyBTaGltKCk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZlYXR1cmVDaGVjazogZnVuY3Rpb24gKCkge1xuICAgICAgICBzaGltLmluZGV4T2YoKTtcbiAgICAgICAgc2hpbS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcbiAgICB9XG59OyIsIi8qXG4gICAgVXRpbGl0eSBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgY29udmVydEV2ZW50SW50b1BvaW50XG4gICAgZ2V0QWN0dWFsRXZlbnRcbiAgICBoYXNNb3ZlZFxuICAgIGlzTW91c2VFdmVudFxuICAgIGN1cnJlbnRUaW1lXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBLRVkgPSByZXF1aXJlKCcuLi9vcHRzL2tleXMuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICAvKlxuICAgICAgICBDb252ZXJ0IGV2ZW50IGludG8gcG9pbnRcbiAgICAgICAgXG4gICAgICAgIFNjcmFwZSB0aGUgeC95IGNvb3JkaW5hdGVzIGZyb20gdGhlIHByb3ZpZGVkIGV2ZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2V2ZW50XTogT3JpZ2luYWwgcG9pbnRlciBldmVudFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiB4L3kgY29vcmRpbmF0ZXMgb2YgZXZlbnRcbiAgICAqL1xuICAgIGNvbnZlcnRFdmVudEludG9Qb2ludDogZnVuY3Rpb24gKGV2ZW50LCBpc1RvdWNoRXZlbnQpIHtcbiAgICBcdHJldHVybiB7XG4gICAgICAgICAgICB4OiBpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuc2NyZWVuWCxcbiAgICAgICAgICAgIHk6IGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5zY3JlZW5ZXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgYWN0dWFsIGV2ZW50XG4gICAgICAgIFxuICAgICAgICBDaGVja3MgZm9yIGpRdWVyeSdzIC5vcmlnaW5hbEV2ZW50IGlmIHByZXNlbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbZXZlbnQgfCBqUXVlcnkgZXZlbnRdXG4gICAgICAgIEByZXR1cm4gW2V2ZW50XTogVGhlIGFjdHVhbCBKUyBldmVudCAgXG4gICAgKi9cbiAgICBnZXRBY3R1YWxFdmVudDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSGFzIHRoZSBwb2ludGVyIG1vdmVkP1xuICAgICAgICBcbiAgICAgICAgQ29tcGFyZXMgdGhlIHR3byBwcm92aWRlZCBwb2ludGVycyBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZXkgYXJlIGRpZmZlcmVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBQb2ludGVyIEFcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBQb2ludGVyIEJcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4gICAgKi9cbiAgICBoYXNNb3ZlZDogZnVuY3Rpb24gKHBvaW50ZXJBLCBwb2ludGVyQikge1xuICAgICAgICByZXR1cm4gKHBvaW50ZXJBLnggIT09IHBvaW50ZXJCLnggfHwgcG9pbnRlckEueSAhPT0gcG9pbnRlckIueSB8fCBwb2ludGVyQS56ICE9PSBwb2ludGVyQi56KTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgZXZlbnQgYSBtb3VzZSBldmVudD9cbiAgICAgICAgXG4gICAgICAgIENoZWNrcyB0aGUgcHJvdmlkZWQgZXZlbnQgdHlwZSBmb3IgdGhlICdtb3VzZScgc3RyaW5nXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEV2ZW50IHR5cGVcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiAnbW91c2UnIGlzIGZvdW5kIGluIHN0cmluZ1xuICAgICovXG4gICAgaXNNb3VzZUV2ZW50OiBmdW5jdGlvbiAoZXZlbnRUeXBlKSB7XG5cdFx0cmV0dXJuIChldmVudFR5cGUuaW5kZXhPZihLRVkuRVZFTlQuTU9VU0UpID4gLTEpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyBldmVudCBhIHRvdWNoIGV2ZW50P1xuICAgICAgICBcbiAgICAgICAgQ2hlY2tzIHRoZSBwcm92aWRlZCBldmVudCBmb3IgdGhlIC50b3VjaGVzIHByb3BcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogRXZlbnRcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiAudG91Y2hlcyBpcyBwcmVzZW50XG4gICAgKi9cbiAgICBpc1RvdWNoRXZlbnQ6IGZ1bmN0aW9uIChlKSB7XG5cdCAgICByZXR1cm4gKGUudG91Y2hlcykgPyB0cnVlIDogZmFsc2U7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhIG51bWJlcj9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiAgICAqL1xuICAgIGlzTnVtOiBmdW5jdGlvbiAobnVtKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIG51bSA9PT0gJ251bWJlcicpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYW4gb2JqZWN0P1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuICAgICovXG4gICAgaXNPYmo6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jyk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0aGlzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiAgICAqL1xuICAgIGlzRnVuYzogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gKHRoaXMudmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nKTsgXG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhIHN0cmluZyA/IFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiAgICAqL1xuICAgIGlzU3RyaW5nOiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpOyBcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGFuIGFycmF5ID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0aGlzLnZhclR5cGUgPT09ICdBcnJheSdcbiAgICAqL1xuICAgIGlzQXJyYXk6IGZ1bmN0aW9uIChhcnIpIHtcblx0ICAgIHJldHVybiAodGhpcy52YXJUeXBlKGFycikgPT09ICdBcnJheScpO1xuICAgIH0sXG4gICAgXG4gICAgaXNJblJhbmdlOiBmdW5jdGlvbiAodmFsdWUsIGZyb20sIHRvKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgPj0gZnJvbSAmJiB2YWx1ZSA8PSB0byk7XG4gICAgfSxcbiAgICBcbiAgICBjb3B5OiBmdW5jdGlvbiAob2JqKSB7XG5cdCAgICB2YXIgbmV3T2JqID0ge307XG5cdCAgICBcblx0ICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcblx0XHQgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHQgICAgaWYgKHRoaXMuaXNPYmoob2JqW2tleV0pKSB7XG5cdFx0XHRcdCAgICBuZXdPYmpba2V5XSA9IHRoaXMuY29weShvYmpba2V5XSk7XG5cdFx0XHQgICAgfSBlbHNlIHtcblx0XHRcdFx0ICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG5cdFx0XHQgICAgfVxuXHRcdCAgICB9XG5cdCAgICB9XG5cdCAgICBcblx0ICAgIHJldHVybiBuZXdPYmo7XG4gICAgfSxcbiAgICBcbiAgICBtZXJnZTogZnVuY3Rpb24gKGJhc2UsIG92ZXJ3cml0ZSkge1xuXHQgICAgdmFyIG5ld09iaiA9IHRoaXMuY29weShiYXNlKTtcblx0ICAgIFxuXHQgICAgZm9yICh2YXIga2V5IGluIG92ZXJ3cml0ZSkge1xuXHRcdCAgICBpZiAob3ZlcndyaXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdCAgICBpZiAodGhpcy5pc09iaihvdmVyd3JpdGVba2V5XSkpIHtcblx0XHRcdFx0ICAgIG5ld09ialtrZXldID0gdGhpcy5tZXJnZShuZXdPYmpba2V5XSwgb3ZlcndyaXRlW2tleV0pO1xuXHRcdFx0ICAgIH0gZWxzZSB7XG5cdFx0XHRcdCAgICBuZXdPYmpba2V5XSA9IG92ZXJ3cml0ZVtrZXldO1xuXHRcdFx0ICAgIH1cblx0XHQgICAgfVxuXHQgICAgfVxuXHQgICAgXG5cdCAgICByZXR1cm4gbmV3T2JqO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiBwcm9ncmVzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IE1heCByYW5nZVxuICAgICAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4gICAgKi9cbiAgICBzdGVwUHJvZ3Jlc3M6IGZ1bmN0aW9uICh2YWx1ZSwgbWF4LCBzdGVwcykge1xuICAgICAgICB2YXIgc3RlcHBlZCA9IDAsXG4gICAgICAgICAgICBzZWdtZW50ID0gbWF4IC8gc3RlcHM7XG4gICAgICAgICAgICBcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgICAgICAgICAgc3RlcHBlZCA9IGkgKiBzZWdtZW50O1xuXG4gICAgICAgICAgICBpZiAoKGkgKyAxKSAqIHNlZ21lbnQgPiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gc3RlcHBlZDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgR2V0IHZhciB0eXBlIGFzIHN0cmluZ1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW3N0cmluZ106IFJldHVybnMsIGZvciBpbnN0YW5jZSAnT2JqZWN0JyBpZiBbb2JqZWN0IE9iamVjdF1cbiAgICAqL1xuICAgIHZhclR5cGU6IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuXHQgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiAgICAqL1xuICAgIGN1cnJlbnRUaW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG4gICAgXG59OyJdfQ==
