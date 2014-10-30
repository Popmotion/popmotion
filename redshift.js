(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
    Action class
    ----------------------------------------
    
    Defines the action object.
    
    Actions describe a process, be it an animation or a pointer tracking
    
    Properties
	    active: false,
	    alternate: false,
	    amp: 0,
	    duration: defaults.duration,
	    ease: defaults.ease,
	    link: defaults.link,
	    onEnd: function () {},
	    onFrame: function () {},
	    origin: {},
	    output: {},
	    progress: 0,
	    tick: 0,
	    time: {},
	    token: 0,
	    type: defaults.type,
	    valueIndex: 0,
	    values: {}
    
*/
"use strict";

var KEY = require('../opts/keys.js'),
    defaults = require('../opts/defaults.js'),
    calc = require('../utils/calc.js'),
    utils = require('../utils/utils.js'),
    Value = require('./value.js'),
    Token = require('../bobs/token.js'),
    callback = function () {},
    token = new Token(),
    Action = function () {
        this.created = utils.currentTime();
        this.token = token.generate();
        this.data = {};
    };
    
Action.prototype = {
    
    /*
	    Set action properties
	    
	    @param [object]: Properties
    */
    set: function (opts) {
	    
	    this.link = opts.link || this.link || defaults.link;
	    
        // Action parameters
        this.amp = utils.isNum(opts.amp) ? opts.amp : defaults.amp;
        this.escapeAmp = utils.isNum(opts.escapeAmp) ? opts.escapeAmp : defaults.escapeAmp;
        this.delay = utils.isNum(opts.delay) ? opts.delay : defaults.delay;
        this.duration = utils.isNum(opts.duration) ? opts.duration : defaults.duration;
        this.ease = opts.ease || defaults.ease;
        this.math = opts.math;
        this.steps = utils.isNum(opts.steps) ? opts.steps : defaults.steps;
        this.alternate = opts.alternate;
        this.pointerOffset = opts.pointerOffset;
        
        // Play list
        this.playlist = opts.playlist || this.playlist || [];
        this.playhead = utils.isNum(opts.playhead) ? opts.playhead : this.playhead;
        
        // Looping
        this.loop = opts.loop || false;
        this.loopCount = 0;
        this.yoyo = opts.yoyo || false;
        this.yoyoCount = 0;

        // Callbacks
        this.onStart = opts.onStart || callback;
        this.onEnd = opts.onEnd || callback;
        this.onFrame = opts.onFrame || this.onFrame || callback;

		// Values
        this.setValues(opts.values);
        this.origin = {};
        
        for (var key in this.values) {
	        if (this.values.hasOwnProperty(key)) {
	            this.origin[key] = this.values[key].current;
	        }
        }
    
    	// Set last modified timestamp
	    this.lastModified = utils.currentTime();
    },
    
    setValues: function (values) {
        this.values = this.values || {};

        for (var key in values) {
	        if (values.hasOwnProperty(key)) {
	        	if (this.values[key]) {
		        	this.values[key].update(values[key], this);
	        	} else {
		        	this.values[key] = new Value(values[key], this);	
	        	}
	        }
        }
        
        if (this.values.angle) {
        	this.values.x = this.values.x || new Value(0, this);
            this.values.y = this.values.y || new Value(0, this);
        }
    },
    
    /*
        Reset values to their most recently set amounts
    */
    resetValues: function () {
        for (var key in this.values) {
            this.values[key].current = this.values[key].from;
        }
        
        this.progress = 0;
    },
    
    reverseValues: function () {
    	var key, to, from;
    	
    	this.progress = calc.difference(this.progress, 1);

	    for (key in this.values) {
		    if (this.values.hasOwnProperty(key)) {
		    	to = this.values[key].to;
		    	from = this.values[key].from;
		    	
		    	this.values[key].to = from;
			    this.values[key].from = to;
		    }
	    }
    },
    
    /*
        Set start time and activate
    */
    start: function () {
        this.active = true;
        this.started = utils.currentTime() + this.delay;
        this.firstFrame = true;
        //this.started = utils.currentTime() + this.delay - calc.value(this.progress, this.duration);
    },
    
    stop: function () {
        this.active = false;
    }
};

module.exports = Action;
},{"../bobs/token.js":15,"../opts/defaults.js":16,"../opts/keys.js":17,"../utils/calc.js":19,"../utils/utils.js":23,"./value.js":6}],2:[function(require,module,exports){
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
	
    	// Maximum range for value (TODO - has no current effect)
    	min: null,
    	max: null,
    	
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
	if (utils.isNum(value) || utils.isFunc(value)) {
	    this.from = (isNewValue) ? 0 : this.from;
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
            baseAction.playhead = 0;
        }
        
        // Apply overrides if present
        if (utils.isObj(override)) {
            baseAction = utils.merge(baseAction, override);
        }
        
        return baseAction;
	},
	
	
	/*
    	Get defined action
    	
    	@param [string]: The name of the predefined action
	*/
	getDefined: function (key) {
		return utils.copy(baseActions[key]);
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
    	    playlistLength = action.playlist ? action.playlist.length : 0;
        
        // Check we have a playlist and that this is an animation
        // TODO: Maybe make a set of properties on the rubix that says allowPlaylist: true
    	if (playlistLength && action.link === KEY.LINK.TIME) {
    	    ++action.playhead;
    	    
    	    if (action.playhead < playlistLength) {
        	    this.change(token, this.getDefined(action.playlist[action.playhead]));
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
		console.trace();
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
            action.onStart(output, action.data);
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

    	// If output has changed, fire onFrame
    	if (hasChanged) {
        	action.onFrame(output, action.data);
    	}

    	// If process is at its end, fire onEnd and deactivate action
    	if (rubix.hasEnded(action)) {
        	action.onEnd(output, action.data);
        	ActionManager.queueDeactivate(action.token);
    	}
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
            return calc.elapsed(action.started, action.duration + action.delay, frameStart);
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
            	restrictedProgress = calc.restricted(progress, 0, 1);

            return Easing.withinRange(restrictedProgress, value.from, value.to, value.ease);
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
                            calc.progress(offset[key] + action.origin[key], action.values[key].from, action.values[key].to)
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
                easedValue = Easing.withinRange(progress[key].value, value.from, value.to, defaults.trackEase, value.escapeAmp);
            
            // If we're linking this property into a user input
            } else if (value.link) {
                easedValue = Easing.withinRange(progress[value.link].value, value.from, value.to, defaults.trackEase, value.escapeAmp);
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
    amp: 1,
    delay: 0,
    duration: 400,
    ease: KEY.EASING.QUAD_IN_OUT,
    escapeAmp: 0,
    link: KEY.LINK.TIME,
    friction: 5,
    pointer: {
        historySize: 2, // number of pointer events to remember
        maxInactiveFrames: 2 // allow this number of frames to pass with no movement before we declare stationary pointer
    },
    step: 0,
    trackEase: KEY.EASING.LINEAR,
    tweenTarget: 0 // default tween target value
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
	    INTERVAL: 'Interval',
	    POINTER: 'Pointer',
	    MOMENTUM: 'Momentum',
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
	track: function (defs, override, e) {
	    return redshift.ignite(this.token, KEY.LINK.POINTER, ActionManager.createBase(defs, override), e);
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
	
    calc: calc,
	
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
        Elapsed
        
        Returns a value, from 0-1, of how much time has elapsed from
        the provided start time in the provided duration.
        
        @param [timestamp]: The time we started as UNIX timestamp
        @param [number]: Max duration of time in ms
        @param [timestamp] (optional): Current time
        @return [number]: Progress of time through duration as expressed 0-1
    */
    elapsed: function (startTime, duration, currentTime) {
        var timePassed,
            progress;
        
        currentTime = (typeof currentTime === 'number') ? currentTime : new Date().getTime();
        timePassed = currentTime - startTime;

        return this.progress(timePassed, duration);
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
	for (var key in baseOut) {
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
    		execute(this, 'track', arguments[0], arguments[1]);
    		
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