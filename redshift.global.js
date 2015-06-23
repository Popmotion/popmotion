/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	window.Redshift = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Redshift = __webpack_require__(2);

	        /*
	            Add core Actions
	        */
	Redshift.addAction('play',  __webpack_require__(16))
	        .addAction('run',   __webpack_require__(17))
	        .addAction('track', __webpack_require__(18))
	        .addAction('fire',  __webpack_require__(19))
	        .addAction('seek',  __webpack_require__(20))

	        /*
	            Add core value Routes
	        */
	        .addRoute('values', __webpack_require__(21))
	        .addRoute('css',    __webpack_require__(22))
	        .addRoute('attr',   __webpack_require__(23))
	        .addRoute('path',   __webpack_require__(24));

	module.exports = Redshift;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var select = __webpack_require__(3);

	module.exports = {

	    Element: __webpack_require__(4),

	    ElementSystem: __webpack_require__(5),

	    Input: __webpack_require__(6),

	    Process: __webpack_require__(7),

	    select: function (items) {
	        return select(items);
	    },

	    addAction: function () {
	        addAction.apply(this, arguments);
	        return this;
	    },

	    addEasing: function () {
	        addEasing.apply(this, arguments);
	        return this;
	    },

	    addPreset: function () {
	        addPreset.apply(this, arguments);
	        return this;
	    },

	    addSimulation: function () {
	        addSimulation.apply(this, arguments);
	        return this;
	    },

	    addElementType: function () {
	        addElementType.apply(this, arguments);
	        return this;
	    },

	    addValueType: function () {
	        addValueType.apply(this, arguments);
	        return this;
	    },

	    addRoute: function () {
	        addRoute.apply(this, arguments);
	        return this;
	    }

	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ElementSystem = __webpack_require__(5);

	/*
	    Create an ElementSystem based on a selection of DOM nodes

	    @param [string || NodeList || jQuery object]:
	        If string, treated as selector.
	        If not, treated as preexisting NodeList || jQuery object.
	*/
	module.exports = function (selector) {
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

	    return new ElementSystem(elements);
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Process = __webpack_require__(7),
	    Queue = __webpack_require__(15),
	    update = __webpack_require__(9),

	    Element = function (element) {
	        this.element = element || false;

	        this.values = {};
	        this.output = {};
	        this.queue = new Queue();

	        this.process = new Process(this, update);
	    };

	Element.prototype = {

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

	module.exports = Element;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Element = __webpack_require__(4),
	    generateMethodIterator = __webpack_require__(14),

	    /*
	        ElementSystem constructor

	        @param [array]: Array of Elements, or valid Element subjects
	    */
	    ElementSystem = function (members) {
	        this.members = [];
	        this.add(members);
	    };

	ElementSystem.prototype = {

	    /*
	        Stagger the execution of Element methods

	        @param [string]: Name of method to execute
	        @param [number] (optional): Duration between Elements
	        @param [object] (optional): Properties to pass to method
	        @param [string] (optional): Ease over stagger
	    */
	    stagger: function (method, duration, props, ease) {
	        var self = this,
	            numMembers = this.members.length,
	            i = -1;

	        this._stagger = this._stagger || new Element();
	        duration = duration || 250;
	        ease = ease || 'linear';

	        this._stagger.stop().play({
	            values: {
	                i: {
	                    current: i,
	                    to: numMembers - 1
	                }
	            },
	            round: true,
	            onChange: function (output) {
	                var newIndex = output.i;
	                
	                // If our new index is only one more than the last
	                if (newIndex === i + 1) {
	                    self.members[newIndex][method](props);
	                    
	                // Or it's more than one more than the last, so fire all indecies
	                } else {
	                    for (var index = i + 1; index <= newIndex; index++) {
	                        self.members[index][method](props);
	                    }
	                }

	                i = newIndex;
	            }
	        }, duration * numMembers, ease);

	        return this;
	    },

	    /*
	        Add a group of Elements to our System

	        @param [array]: Array of Elements, or valid Element subjects
	    */
	    add: function (members) {
	        var numNewMembers = members.length,
	            i = 0,
	            newMember;

	        for (; i < numNewMembers; i++) {
	            newMember = (members[i].prototype !== Element.prototype) ? new Element(members[i]) : members[i];
	            this.members.push(newMember);
	        }

	        return this;
	    }
	};

	// Initialise Element System methods
	(function () {
	    for (var method in Element.prototype) {
	        ElementSystem.prototype[method] = generateMethodIterator(method);
	    }
	})();

	module.exports = ElementSystem;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Input controller
	*/
	"use strict";

	var calc = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../utils/calc.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../utils/utils.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    History = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../utils/history.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),

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

	module.exports = Input;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var manager = __webpack_require__(8),

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

	        this.id = manager.register(this);

	        // [boolean]: Is this process currently active?
	        this.isActive = false;

	        // [boolean]: Has this process been killed?
	        this.isKilled = false;
	    };

	Process.prototype = {
	    /*
	        Fire callback
	        
	        @param [timestamp]: Timestamp of currently-executed frame
	        @param [number]: Time since last frame
	    */
	    fire: function (timestamp, elapsed) {
	        // Check timers
	        if (this.isActive) {
	            this.callback.call(this.scope, timestamp, elapsed);
	        }
	        
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
	        if (!this.isKilled) {
	            this.isActive = true;
	            manager.activate(this.id);
	        }

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
	    },
	    
	    /*
	        Kill function in manager, release for garbage collection
	    */
	    kill: function () {
	        this.stop();
	        this.isKilled = true;
	        manager.kill(this.id);
	    }
	};

	module.exports = Process;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var theLoop = __webpack_require__(10),
	    ProcessManager = function () {
	        this.all = {};
	        this.active = [];
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
	        return this.all[i];
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
	        return this.active;
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
	            activeProcesses = [];

	        // Purge and check active count before execution
	        this.purge();
	        activeCount = this.getActiveCount();
	        activeProcesses = this.getActive();
	        
	        // Loop through active processes and fire callback
	        for (var i = 0; i < activeCount; i++) {
	            process = this.getProcess(activeProcesses[i]);
	            
	            if (process) {
	                process.fire(framestamp, elapsed);
	            }
	        }

	        // Repurge and recheck active count after execution
	        this.purge();
	        activeCount = this.getActiveCount();
	        
	        return activeCount ? true : false;
	    },
	    
	    /*
	        Register a new process
	        
	        @param [Process]
	        @return [int]: Index of process to be used as ID
	    */
	    register: function (process) {
	        var id = this.processCounter;

	        this.all[id] = process;
	        
	        this.processCounter++;
	        
	        return id;
	    },
	    
	    /*
	        Activate a process
	        
	        @param [int]: Index of active process
	    */
	    activate: function (i) {
	        var queueIndex = this.deactivateQueue.indexOf(i),
	            isQueued = (queueIndex > -1),
	            isActive = (this.active.indexOf(i) > -1);
	        
	        // Remove from deactivateQueue if in there
	        if (isQueued) {
	            this.deactivateQueue.splice(queueIndex, 1);
	        }
	        
	        // Add to active processes array if not already in there
	        if (!isActive) {
	            this.active.push(i);
	            this.activeCount++;
	            theLoop.start(this);
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
	        var activeIndex,
	            queueLength = this.getQueueLength();
	        
	        while (queueLength--) {
	            activeIndex = this.active.indexOf(this.deactivateQueue[queueLength]);
	            
	            // If process in active list deactivate
	            if (activeIndex > -1) {
	                this.active.splice(activeIndex, 1);
	                this.activeCount--;
	            }
	        }
	        
	        this.deactivateQueue = [];
	    },
	    
	    /*
	        Remove the provided id and reindex remaining processes
	    */
	    kill: function (id) {
	        delete this.all[id];
	    }
	    
	};

	module.exports = new ProcessManager();

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var update = function (framestamp, frameDuration) {
	        console.log(framestamp);
	    };

	module.exports = function () {
	    if (this.isActive) {
	        update.apply(this, arguments);
	    }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    The loop
	*/
	"use strict";

	var Timer = __webpack_require__(11),
	    tick = __webpack_require__(12),
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
	                self.frame(true);
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

	module.exports = new Loop();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var utils = __webpack_require__(13),

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

	module.exports = Timer;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

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

	module.exports = tick;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

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

	module.exports = {
	    
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
	        
	        for (var i = 0; i < length; i++) {
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

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/*
		Generate method iterator
		
		Takes a method name and returns a function that will
		loop over all the Elements in a group and fire that
		method with those properties
		
		@param [string]: Name of method
	*/
	module.exports = function (method) {
		return function () {
	        var numElements = this.elements.length,
	            i = 0,
				isGetter = false,
				getterArray = [],
				element,
				elementReturn;
				
			for (; i < numActions; i++) {
				element = this.elements[i];
				elementReturn = element[method].apply(element, arguments);
				
				if (elementReturn != element) {
	    			isGetter = true;
	    			getterArray.push(elementReturn);
				}
			}
			
			return (isGetter) ? getterArray : this;
		};
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

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

	module.exports = Queue;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Play rubix
	    
	    Translate numbers for a set amount of time, applying easing if defined
	*/
	"use strict";

	var calc = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../utils/calc.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    easing = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../utils/easing.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../utils/utils.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    
	    CURRENT = 'current',
	    HAS_ENDED = 'hasEnded';

	module.exports = {

	    /*
	        Update Action elapsed time
	        
	        @param [Action]
	        @param [object]: Action properties
	        @param [number]: Timestamp of current frame
	    */
	    updateInput: function (action, frameDuration) {
	        action.elapsed += (frameDuration * action.dilate) * action.playDirection;
	        action[HAS_ENDED] = true;
	    },

	    /*
	        Calculate progress of value based on time elapsed,
	        value delay/duration/stagger properties

	        @param [string]: Key of current value
	        @param [Value]: Current value
	        @param [object]: Collection of all Action values
	        @param [object]: Action properties
	        @param [Action]: Current Action
	        @param [number]: Duration of frame in ms
	        @return [number]: Calculated value
	    */
	    process: function (key, value, values, action) {
	        var target = value.to,
	            newValue = value[CURRENT],
	            progress, progressTarget;
	        
	        // If we have a target, process
	        if (target !== undefined) {
	            progress = calc.restricted(calc.progress(action.elapsed - value.delay, value.duration) - value.stagger, 0, 1);
	            progressTarget = (action.playDirection === 1) ? 1 : 0;

	            // Mark Action as not ended if still in progress
	            if (progress !== progressTarget) {
	                action[HAS_ENDED] = false;
	            
	            // Or clear value target
	            } else {
	                value.to = undefined;
	            }
	            
	            // Step progress if we're stepping
	            if (value.steps) {
	                progress = utils.stepProgress(progress, value.steps, value.stepDirection);
	            }
	            
	            // Ease value with progress
	            newValue = easing.withinRange(progress, value.origin, target, value.ease);
	        }
	        
	        return newValue;
	    },
	    
	    /*
	        Return hasEnded property
	        
	        @param [boolean]: Have all Values hit 1 progress?
	    */
	    hasEnded: function (action) {
	        return action[HAS_ENDED];
	    }
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Run physics simulation
	*/
	"use strict";

	var calc = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../utils/calc.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    simulate = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../action/simulate.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	module.exports = {

	    // [boolean]: Tell Redshift this rubix calculates a new velocity itself
	    calculatesVelocity: true,
	    
	    /*
	        Simulate the Value's per-frame movement
	        
	        @param [string]: Key of current value
	        @param [Value]: Current value
	        @param [object]: Collection of all Action values
	        @param [object]: Action properties
	        @param [Action]: Current Action
	        @param [number]: Duration of frame in ms
	        @return [number]: Calculated value
	    */
	    process: function (key, value, values, action, frameDuration) {
	        value.velocity = simulate(value.simulate, value, frameDuration, action.started);
	        return value.current + calc.speedPerFrame(value.velocity, frameDuration);
	    },
	    
	    /*
	        Has this action ended?
	        
	        Use a framecounter to see if Action has changed in the last x frames
	        and declare ended if not
	        
	        @param [Action]
	        @param [boolean]: Has Action changed?
	        @return [boolean]: Has Action ended?
	    */
	    hasEnded: function (action, hasChanged) {
	        action.inactiveFrames = hasChanged ? 0 : action.inactiveFrames + 1;
	        return (action.inactiveFrames > action.maxInactiveFrames);
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

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Track user input
	*/
	"use strict";

	var calc = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../utils/calc.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),

	    CURRENT = 'current',
	    INPUT_OFFSET = 'inputOffset';

	module.exports = {
	    
	    /*
	        Update Input
	        
	        @param [Action]
	        @param [object]: Action properties
	    */
	    updateInput: function (action) {
	        action[INPUT_OFFSET] = calc.offset(action.inputOrigin, action.input[CURRENT]);
	    },
	        
	    /*
	        Move Value relative to Input movement
	        
	        @param [string]: Key of current value
	        @param [Value]: Current value
	        @param [object]: Collection of all Action values
	        @param [object]: Action properties
	        @param [Action]: Current Action
	        @return [number]: Calculated value
	    */
	    process: function (key, value, values, action) {
	        return (action[INPUT_OFFSET].hasOwnProperty(key)) ? value.origin + action[INPUT_OFFSET][key] : value[CURRENT];
	    },
	    
	    /*
	        Has this Action ended? 
	        
	        @return [boolean]: False to make user manually finish .track()
	    */
	    hasEnded: function () {
	        return false;
	    }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Return current value and immedietly end
	*/
	"use strict";

	module.exports = {

	   /*
	        Process new value
	        
	        Return existing current
	        
	        @param [string]: Name of value
	        @param [Value]: Current value
	    */
	    process: function (key, value) {
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

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Return current value and immedietly end
	*/
	"use strict";

	var playRubix = __webpack_require__(16);

	module.exports = {

	   /*
	        Process new value
	        
	        Return existing current
	        
	        @param [string]: Name of value
	        @param [Value]: Current value
	    */
	    process: playRubix.process,
	    
	    /*
	        Has Action ended?
	        
	        Returns true to end animation, and sets rubix to 'play'
	        
	        @return [boolean]: true
	    */
	    hasEnded: function (action) {
	        action.rubix = 'play';
	        return true;
	    }
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Values route (Redshift default)
	    
	    Handles raw values and outputs to user-defined callbacks
	*/
	"use strict";

	var fireCallback = function (name, bucket, action) {
	        if (action[name]) {
	            action[name].call(action.scope, bucket);
	        }
	    };

	module.exports = {
	    
	    makeDefault: true,
	    
	    onStart: function (bucket, action) {
	        if (action.onStart) {
	            action.onStart.call(action.scope);
	        }
	    },
	    
	    onFrame: function (bucket, action, values) {
	        fireCallback('onFrame', bucket, action, values);
	    },
	    
	    onChange: function (bucket, action, values) {
	        fireCallback('onChange', bucket, action, values);
	    },
	    
	    onEnd: function (bucket, action, values) {
	        fireCallback('onEnd', bucket, action, values);
	    }
	    
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var build = __webpack_require__(25),
	    split = __webpack_require__(26),
	    
	    css = 'css',
	    cssOrder = css + 'Order',
	    cssCache = css + 'Cache';

	module.exports = {
	    preprocess: function (key, value, action) {
	        var values = split(key, value, action);
	        
	        action.updateOrder(key, false, cssOrder);
	        
	        return values;
	    },
	    
	    onChange: function (output, action, values) {
	        action[cssCache] = action[cssCache] || {};
	        action.style(build(output, action[cssOrder],  action[cssCache], values));
	    }
	    
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = {

	    onChange: function (output, action) {
	        var dom = action.dom;

	        if (dom) {
	            for (var key in output) {
	                dom.setAttribute(key, output[key]);
	            }
	        }
	    }
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var createStyles = __webpack_require__(27);

	module.exports = {

	    onStart: function (bucket, action) {
	        if (action.dom) {
	            action.pathLength = action.dom.getTotalLength();
	        }
	    },
	    
	    onChange: function (output, action) {
	        action.style(createStyles(output, action.pathLength));
	    }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var dictionary = __webpack_require__(28),
	    templates = __webpack_require__(29),
	    lookup = __webpack_require__(30),
	    
	    TRANSFORM = 'transform',
	    TRANSLATE_Z = 'translateZ',
	    
	    /*
	        Generate a CSS rule with the available template
	    */
	    generateRule = function (key, output, transformProp) {
	        var templateKey = transformProp ? TRANSFORM : lookup[key],
	            template = templates[templateKey];

	        return template ? template(key, output) : output[key];
	    };
	    

	module.exports = function (output, order, cache) {
	    var css = {},
	        numRules = order.length,
	        hasZ = false,
	        transformProp = dictionary.transformProps,
	        i = 0,
	        rule = '',
	        key = '',
	        transform = '';
	    
	    for (; i < numRules; i++) {
	        key = order[i],
	        rule = generateRule(key, output, transformProp[key]);

	        if (transformProp[key]) {
	            transform += rule + ' ';
	            hasZ = (key === TRANSLATE_Z) ? true : hasZ;

	        } else if (cache[key] !== rule) {
	            css[key] = rule;
	            cache[key] = rule;
	        }
	    }
	    
	    if (transform != '' && transform != cache[TRANSFORM]) {
	        if (!hasZ) {
	            transform += ' ' + TRANSLATE_Z + '(0px)';
	        }
	        
	        css[TRANSFORM] = cache[TRANSFORM] = transform;
	    }

	    return css;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var defaultProperty = __webpack_require__(31),
	    dictionary = __webpack_require__(28),
	    splitLookup = __webpack_require__(30),
	    splitters = __webpack_require__(32),
	    
	    utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils/utils.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
	    
	    valueProperties = dictionary.valueProps,
	    valuePropertyCount = valueProperties.length,
	    
	    resolve = function (value, scope) {
		    if (typeof value === 'function') {
			    value = value.call(scope);
		    }
		    
		    return value;
	    },
	    
	    /*
	        Build a property
	    */
	    buildProperty = function (value, parentKey, unitKey, parent, assignDefault) {
	        var property = defaultProperty[parentKey + unitKey]
	            || defaultProperty[unitKey]
	            || defaultProperty[parentKey]
	            || defaultProperty.base;
	        
	        assignDefault = assignDefault || valueProperties[0];
	         
	        if (parent) {
	            property = utils.merge(parent, property);
	        }
	        
	        if (utils.isObj(value)) {
	            property = utils.merge(property, value);

	        } else {
	            property[assignDefault] = value;
	        }

	        // If we have a unitKey, name property parentKey + unitKey
	        property.name = unitKey ? parentKey + unitKey : parentKey;
	        
	        return property;
	    },

	    /*
	        Split value with provided splitterID
	    */
	    split = function (key, value, splitter, action) {
	        var splitValue = {},
	            splitProperty = {},
	            newValue = {},
	            valueKey = '',
	            unitKey = '',
	            i = 0;
	            
	        if (utils.isObj(value)) {
	            for (; i < valuePropertyCount; i++) {
	                valueKey = valueProperties[i];
	                
	                if (value.hasOwnProperty(valueKey)) {
	                    splitProperty = splitter(resolve(value[valueKey], action));
	                    
	                    for (unitKey in splitProperty) {
	                        splitValue[unitKey] = splitValue[unitKey] || {};
	                        splitValue[unitKey][valueKey] = splitProperty[unitKey];
	                    }
	                }
	            }
	        } else {
		        splitValue = splitter(resolve(value, action));
	        }
	        
	        for (unitKey in splitValue) {
	            newValue[key + unitKey] = buildProperty(splitValue[unitKey], key, unitKey, value);
	        }
	        
	        return newValue;
	    };

	/*
	    Split CSS property into individual, tweenable values
	    
	    @param [string]: Name of CSS property
	    @param [string || number]: Value of CSS property
	*/
	module.exports = function (key, value, action) {
	    var splitterID = splitLookup[key],
	        splitter = splitters[splitterID],
	        values;
	        
	    values = (splitter) ? split(key, value, splitter, action) : {};

	    // If we don't have a splitter, assign the property directly
	    if (!splitter) {
	        values[key] = buildProperty(value, key);
	    }
	    
	    return values;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var lookup = __webpack_require__(33),

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
	module.exports = function (props, pathLength) {
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
	            svgProperty = lookup[key];
	            
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

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var X = 'X',
	    Y = 'Y',
	    TRANSFORM_PERSPECTIVE = 'transformPerspective',
	    SCALE = 'scale',
	    ROTATE = 'rotate',

	    terms = {
	        colors: ['Red', 'Green', 'Blue', 'Alpha'],
	        positions: [X, Y, 'Z'],
	        dimensions: ['Top', 'Right', 'Bottom', 'Left'],
	        shadow: [X, Y, 'Radius', 'Spread', 'Color'],
	        valueProps: ['current', 'to', 'start', 'min', 'max'],
	        transformFuncs: ['translate', SCALE, ROTATE, 'skew', TRANSFORM_PERSPECTIVE],
	        transformProps: {} // objects are faster at direct lookups
	    };

	// Create transform terms
	(function () {
	    var transformFuncs = terms.transformFuncs,
	        transformProps = terms.transformProps,
	        numOfTransformFuncs = transformFuncs.length,
	        i = 0,

	        createProps = function (funcName) {
	            var typeTerms = terms.positions,
	                j = 0;

	            if (typeTerms) {
	                for (; j < typeTerms.length; j++) {
	                    transformProps[funcName + typeTerms[j]] = true;
	                }
	            }
	        };
	    
	    // Manually add skew and transform perspective  
	    transformProps[ROTATE] = transformProps[SCALE] = transformProps[TRANSFORM_PERSPECTIVE] = true;
	    
	    // Loop over each function name and create function/property terms
	    for (; i < numOfTransformFuncs; i++) {
	        createProps(transformFuncs[i]);
	    }
	})();

	module.exports = terms;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var dictionary = __webpack_require__(28),

	    defaultValues = {
	        Alpha: 1
	    },

	    functionCreate = function (value, prefix) {
	        return prefix + '(' + value + ')';
	    },

	    createSpaceDelimited = function (key, object, terms) {
	        return createDelimitedString(key, object, terms, ' ');
	    },
	    
	    createCommaDelimited = function (key, object, terms) {
	        return createDelimitedString(key, object, terms, ', ').slice(0, -2);
	    },
	    
	    createDelimitedString = function (key, object, terms, delimiter) {
	        var string = '',
	            propKey = '',
	            termsLength = terms.length;
	        
	        for (var i = 0; i < termsLength; i++) {
	            propKey = key + terms[i];

	            if (object[propKey] !== undefined) {
	                string += object[propKey];
	            } else {
	                if (defaultValues[terms[i]] !== undefined) {
	                    string += defaultValues[terms[i]];
	                }
	            }
	            
	            string += delimiter;
	        }
	    
	        return string;
	    },

	    templates = {
	        
	        colors: function (key, values) {
	            return functionCreate(createCommaDelimited(key, values, dictionary.colors), 'rgba');
	        },
	        
	        dimensions: function (key, values) {
	            return createSpaceDelimited(key, values, dictionary.dimensions);
	        },
	        
	        positions: function (key, values) {
	            return createSpaceDelimited(key, values, dictionary.positions);
	        },
	        
	        shadow: function (key, values) {
	            var shadowTerms = dictionary.shadow.slice(0,4);
	            
	            return createSpaceDelimited(key, values, shadowTerms) + templates.colors(key, values);
	        },
	        
	        transform: function (key, values) {
	            return key + '(' + values[key] +')';
	        }
	    };

	module.exports = templates;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var COLOR = 'colors',
	    POSITIONS = 'positions',
	    TRANSFORM = 'transform',
	    DIMENSIONS = 'dimensions',
	    SHADOW = 'shadow';

	module.exports = {
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

	    // Positions
	    backgroundPosition: POSITIONS,
	    perspectiveOrigin: POSITIONS,
	    transformOrigin: POSITIONS,
	    
	    // Transform functions
	    skew: TRANSFORM,
	    translate: TRANSFORM,
	    rotate: TRANSFORM,
	    scale: TRANSFORM,
	    
	    // Shadows
	    textShadow: SHADOW,
	    boxShadow: SHADOW
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var color = {
	        min: 0,
	        max: 255,
	        round: true
	    },
	    opacity = {
	        min: 0,
	        max: 1
	    },
	    angle = {
	        unit: 'deg'
	    },
	    scale = {},
	    defaults = {
	        base: {
	            unit: 'px'
	        },
	        
	        color: color,
	        Red: color,
	        Green: color,
	        Blue: color,
	    
	        Alpha: opacity,
	        opacity: opacity,
	        
	        scale: scale,
	        scaleX: scale,
	        scaleY: scale,
	        scaleZ: scale,
	        
	        skew: angle,
	        skewX: angle,
	        skewY: angle,
	        rotate: angle,
	        rotateX: angle,
	        rotateY: angle,
	        rotateZ: angle
	    };
	    
	module.exports = defaults;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var dictionary = __webpack_require__(28),
	    utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../utils/utils.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),

	    /*
	        Split comma delimited into array
	        
	        Converts 255, 0, 0 -> [255, 0, 0]
	        
	        @param [string]: CSS comma delimited function
	    */
	    splitCommaDelimited = function (value) {
	        return utils.isString(value) ? value.split(/,\s*/) : [value];
	    },
	    
	    splitSpaceDelimited = function (value) {
	        return utils.isString(value) ? value.split(' ') : [value];
	    },
	    
	    /*
	        Break values out of css functional statement
	        
	        Converts rgba(255, 0, 0) -> "255, 0, 0"
	    */
	    functionBreak = function (value) {
	        return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
	    },
	    
	    /*
	        Convert hex into array of RGBA values
	        
	        @param [string]: Hex string
	            "#F00" -> [255, 0, 0]
	            "#FF0000" -> [255, 0, 0]
	            
	        @return [array]: RGBA values
	    */
	    hex = function (prop) {
	        var r, g, b;
	                    
	        // If we have 6 chacters, ie #FF0000
	        if (prop.length > 4) {
	            r = prop.substr(1, 2);
	            g = prop.substr(3, 2);
	            b = prop.substr(5, 2);

	        // Or 3 characters, ie #F00
	        } else {
	            r = prop.substr(1, 1);
	            g = prop.substr(2, 1);
	            b = prop.substr(3, 1);
	            r += r;
	            g += g;
	            b += b;
	        }
	            
	        return [
	            parseInt(r, 16),
	            parseInt(g, 16),
	            parseInt(b, 16),
	            1
	        ];
	    },
	    
	    /*
	        Test if string is color property
	        
	        @param [string]: Color property
	        @return [boolean]: True if color property
	    */
	    isColor = function (prop) {
	        return (prop.indexOf('#') > -1 || prop.indexOf('rgb') > -1);
	    },

	    /*
	        Public splitters
	        
	        Each splitter takes a string containing certain values and
	        splits them into an object containing key/value pairs, ie
	        color will return Red/Green/Blue/[Alpha] values
	    */
	    splitters = {
	        
	        /*
	            Split arbitarily-long array (for instance matrix property) into object
	            
	            @param [string]: Array values
	                "1, 1, 2, 4" -> {1, 1, 2, 4}
	                "1 1 2 4" -> {1, 1, 2, 4}
	                
	            @return [object]: Object with a metric for every array item,
	                named after its index
	        */
	        array: function (prop) {
	            var list = (prop.indexOf(',') > -1) ? splitCommaDelimited(prop) : splitSpaceDelimited(prop),
	                listLength = list.length,
	                i = 0,
	                arrayProps = {};
	                
	            for (; i < listLength; i++) {
	                arrayProps[i] = list[i];
	            }
	            
	            return arrayProps;
	        },
	        
	        /*
	            Convert color property into R/G/B/[A] object
	            
	            @param [string]: Color value has #, rgba, rgb, // hsl, hsla
	                "#f00" -> {255, 0, 0}
	                "#ff0000" -> {255, 0, 0}
	                "rgb(255, 0, 0)" -> {255, 0, 0}
	                "rgba(255, 0, 0, 1)" -> {255, 0, 0, 1}
	                
	            @return [object]: Object with metric for each 
	        */
	        colors: function (prop) {
	            var colors = (prop.indexOf('#') > -1) ? hex(prop) : splitCommaDelimited(functionBreak(prop)),
	                terms = dictionary.colors,
	                numTerms = terms.length,
	                i = 0,
	                rgba = {};

	            for (; i < numTerms; i++) {
		            colors[i] = (colors[i] || colors[i] === 0) ? colors[i] : 1;
	                rgba[terms[i]] = colors[i];
	            }

	            return rgba;
	        },
	    
	        /*
	            Split dimensions in format "Top Right Bottom Left"
	            
	            @param [string]: Dimension values
	                "20px 0 30px 40px" -> {20px, 0, 30px, 40px}
	                "20px 0 30px" -> {20px, 0, 30px, 0}
	                "20px 0" -> {20px, 0, 20px, 0}
	                "20px" -> {20px, 20px, 20px, 20px}
	            
	            @return [object]: Object with T/R/B/L metrics
	        */
	        dimensions: function (prop) {
	            var dimensions = splitSpaceDelimited(prop),
	                numDimensions = dimensions.length,
	                terms = dictionary.dimensions,
	                jumpBack = (numDimensions !== 1) ? 2 : 1,
	                i, j = i = 0,
	                dimensionProps = {};
	            
	            for (; i < 4; i++) {
	                dimensionProps[terms[i]] = dimensions[j];
	                
	                // Jump back counter j if we've reached the end of our set values
	                j++;
	                j = (j === numDimensions) ? j - jumpBack : j;
	            }
	            
	            return dimensionProps;
	        },
	        
	        /*
	            Split positions in format "X Y Z"
	            
	            @param [string]: Position values
	                "20% 30% 0" -> {20%, 30%, 0}
	                "20% 30%" -> {20%, 30%}
	                "20%" -> {20%, 20%}
	        */
	        positions: function (prop) {
	            var positions = splitSpaceDelimited(prop),
	                numPositions = positions.length,
	                positionProps = {
	                    X: positions[0],
	                    Y: (numPositions > 1) ? positions[1] : positions[0]
	                };
	                
	            if (numPositions > 2) {
	                positionProps.Z = positions[2];
	            }
	            
	            return positionProps;
	        },
	        
	        /*
	            Split shadow properties "X, Y, Radius, Spread, Color"
	            
	            @param [string]: Shadow property
	            @return [object]
	        */
	        shadow: function (prop) {
	            var bits = splitSpaceDelimited(prop),
	                bitsLength = bits.length,
	                terms = dictionary.shadow,
	                reachedColor,
	                colorProp = '',
	                bit, color,
	                i = 0, unit,
	                shadowProps = {};
	                
	            for (; i< bitsLength; i++) {
	                bit = bits[i];
	                
	                // If we've reached the color property, append to color string
	                if (reachedColor || isColor(bit)) {
	                    reachedColor = true;
	                    colorProp += bit;

	                } else {
	                    shadowProps[terms[i]] = bit;
	                }
	            }
	            
	            color = splitters.colors(colorProp);
	            
	            for (var unit in color) {
	                shadowProps[unit] = color[unit];
	            }
	            
	            return shadowProps;
	        },
	        
	        perspective: function (prop) {
	            return this.array(prop);
	        }
	    };

	module.exports = splitters;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var STROKE = 'stroke',
	    DASH = STROKE + '-dash', // stoke-width
	    DASH_ARRAY = DASH + 'array'

	module.exports = {
	    opacity: STROKE + '-opacity',
	    width: STROKE + '-width',
	    offset: DASH + 'offset',
	    length: DASH_ARRAY,
	    spacing: DASH_ARRAY,
	    miterlimit: STROKE + '-miterlimit'
	};

/***/ }
/******/ ]);