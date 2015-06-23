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
	console.time('load');
	Redshift
	    .addValueType('hsl', __webpack_require__(3))
	    .addValueType('rgb', __webpack_require__(4))
	    .addValueType('hex', __webpack_require__(5))

	    .addAction('play', __webpack_require__(6))
	    .addAction('seek', __webpack_require__(7));

	console.timeEnd('load');

	//Redshift.addAction()

	        /*
	            Add core Actions
	        
	Redshift.addAction('play',  require('../actions/play.js'))
	        .addAction('run',   require('../actions/run.js'))
	        .addAction('track', require('../actions/track.js'))
	        .addAction('fire',  require('../actions/fire.js'))
	        .addAction('seek',  require('../actions/seek.js'))

	        /*
	            Add core value Routes
	        
	        .addRoute('values', require('../routes/values.js'))
	        .addRoute('css',    require('../routes/css.js'))
	        .addRoute('attr',   require('../routes/attr.js'))
	        .addRoute('path',   require('../routes/path.js'));
	*/
	module.exports = Redshift;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var select = __webpack_require__(8),
	    actionManager = __webpack_require__(9),
	    easingManager = __webpack_require__(10),
	    presetManager = __webpack_require__(11),
	    routeManager = __webpack_require__(12),
	    simulationManager = __webpack_require__(13),
	    valueTypeManager = __webpack_require__(14);

	module.exports = {

	    Element: __webpack_require__(15),

	    ElementSystem: __webpack_require__(16),

	    Input: __webpack_require__(17),

	    Process: __webpack_require__(18),

	    select: function (items) {
	        return select(items);
	    },

	    addAction: function () {
	        actionManager.extend.apply(actionManager, arguments);
	        return this;
	    },

	    addEasing: function () {
	        easingManager.extend.apply(easingManager, arguments);
	        return this;
	    },

	    addPreset: function () {
	        presetManager.extend.apply(presetManager, arguments);
	        return this;
	    },

	    addSimulation: function () {
	        simulationManager.extend.apply(simulationManager, arguments);
	        return this;
	    },

	    addElementType: function () {
	        elementTypeManager.extend.apply(elementTypeManager, arguments);
	        return this;
	    },

	    addValueType: function () {
	        valueTypeManager.extend.apply(valueTypeManager, arguments);
	        return this;
	    },

	    addRoute: function () {
	        routeManager.extend.apply(routeManager, arguments);
	        return this;
	    }

	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var getColorValues = __webpack_require__(19),

	    defaults = {
	        Hue: 0,
	        Saturation: 100,
	        Lightness: 50,
	        Alpha: 0
	    };

	module.exports = {

	    test: function (value) {
	        return (value.indexOf('hsl') > -1);
	    },
	    
	    split: function (value) {
	        var colors = getColorValues(value);
	    },

	    combine: function (values) {
	        var hue = (values.hasOwnProperty('Hue')) ? values.Hue : defaults.Hue,
	            saturation = (values.hasOwnProperty('Saturation')) ? values.Saturation : defaults.Saturation,
	            lightness = (values.hasOwnProperty('Lightness')) ? values.Lightness : defaults.Lightness,
	            alpha = (values.hasOwnProperty('Alpha')) ? values.Alpha : defaults.Alpha;

	        return 'hsla(' + hue + ', ' + saturation + ', ' + lightness + ', ' + alpha + ')';
	    }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var getColorValues = __webpack_require__(19),

	    defaults = {
	        Red: 0,
	        Green: 0,
	        Blue: 0,
	        Alpha: 0
	    };

	module.exports = {

	    test: function (value) {
	        return (value.indexOf('rgb') > -1);
	    },
	    
	    split: function (value) {
	        var colors = getColorValues(value);
	    },

	    combine: function (values) {
	        var red = (values.hasOwnProperty('Red')) ? values.Red : defaults.Red,
	            green = (values.hasOwnProperty('Green')) ? values.Green : defaults.Green,
	            blue = (values.hasOwnProperty('Blue')) ? values.Blue : defaults.Blue,
	            alpha = (values.hasOwnProperty('Alpha')) ? values.Alpha : defaults.Alpha;

	        return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
	    }
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var rgb = __webpack_require__(4);

	module.exports = {

	    test: function (value) {
	        return (value.indexOf('#') > -1);
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
	        }
	    },

	    combine: function (values) {
	        return rgb.combine(values);
	    }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Play rubix
	    
	    Translate numbers for a set amount of time, applying easing if defined
	*/
	"use strict";

	var calc = __webpack_require__(20),
	    utils = __webpack_require__(21),
	    easingManager = __webpack_require__(10),
	    presetManager = __webpack_require__(11),

	    playAction = {

	        // Prevent Redshift from autogenerating 
	        surpressMethod: true,

	        elementMethods: {
	            /*
	                Play an animation

	                @param [object || string]: Parameters or preset names
	                @param [object]: Override parameters
	            */
	            play: function () {
	                var action = 'play';

	                // If there's an active Action, and its play, add to queue
	                if (this.isActive && this.action === action) {
	                    this.queue.add.apply(this.queue, arguments);
	                
	                // Else, start playing
	                } else {
	                    this.set(playAction.parse.apply(this, arguments), 'to');
	                    this.action = action;
	                    this.start();
	                }

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
	                Next in playlist
	            */
	            playNext: function () {
	                var stepTaken = false,
	                    nextInQueue = this.queue.next(this.playDirection);

	                if (utils.isArray(nextInQueue)) {
	                    this.set(playAction.parse.apply(this, nextInQueue), 'to')
	                        .reset();

	                    stepTaken = true;
	                }

	                return stepTaken;
	            }
	        },

	        parse: function (base, override) {
	            var props = {},
	                playlist = [],
	                argsAsArray = [],
	                i = 0,
	                playlistLength;

	            // If this is a playlist reference, add presets to queue
	            if (typeof base === 'string') {
	                playlist = base.split(' ');
	                playlistLength = playlist.length;
	                props = presetManager.getDefined(playlist[0]);

	                // If we've got multiple playlists, loop through and add each to the queue
	                if (playlistLength > 1) {
	                    argsAsArray = [].slice.call(arguments);

	                    for (; i < playlistLength; i++) {
	                        argsAsArray.shift();
	                        argsAsArray.unshift(playlist[i]);
	                        this.queue.add.apply(this.queue, argsAsArray);
	                    }
	                }

	            // Or, this is a straight set of properties
	            } else {
	                props = base;
	            }

	            // Override properties with second arg if it's an object
	            if (typeof override === 'object') {
	                props = utils.merge(props, override);
	            }

	            // Default .play properties
	            props.loopCount = props.yoyoCount = props.flipCount = 0;
	            props.playDirection = 1;

	            return props;
	        },

	        /*
	            Update Action elapsed time
	            
	            @param [object]: Action properties
	            @param [number]: Timestamp of current frame
	        */
	        updateInput: function (frameDuration) {
	            this.elapsed += (frameDuration * this.dilate) * this.playDirection;
	            this.hasEnded = true;
	        },

	        /*
	            Calculate progress of value based on time elapsed,
	            value delay/duration/stagger properties

	            @param [string]: Name of value being processed
	            @param [object]: Value state and properties
	            @return [number]: Calculated value
	        */
	        process: function (key, value) {
	            var target = value.to,
	                progressTarget = (this.playDirection === 1) ? 1 : 0;
	                newValue = value.current,
	                progress;

	            // If this value has a to property, otherwise we just return current value
	            if (target !== undefined) {
	                progress = calc.restricted(calc.progress(this.elapsed - value.delay, value.duration) - value.stagger, 0, 1);
	                
	                // Mark Action as NOT ended if still in progress
	                if (progress !== progressTarget) {
	                    this.hasEnded = false;

	                // Or, if we have ended, clear value target
	                } else {
	                    value.to = undefined;
	                }

	                // Step progress if we're stepping
	                if (value.steps) {
	                    progress = utils.stepProgress(progress, value.steps);
	                }

	                // Ease value
	                newValue = easing.withinRange(progress, value.origin, target, value.ease);
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

	module.exports = playAction;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Return current value and immedietly end
	*/
	"use strict";

	var play = __webpack_require__(6);

	module.exports = {

	    surpressMethod: true,

	    elementMethods: {
	        seek: function (seekTo) {
	            this.elapsed = this.duration * seekTo;

	            if (!this.isActive) {
	                this.action = 'seek';
	                this.activate();
	            }

	            return this;
	        }
	    },

	   /*
	        Process new value
	        
	        Return existing current
	        
	        @param [string]: Name of value
	        @param [Value]: Current value
	    */
	    process: play.process,
	    
	    /*
	        Has Action ended?
	        
	        Returns true to end animation, and sets rubix to 'play'
	        
	        @return [boolean]: true
	    */
	    hasEnded: function () {
	        this.rubix = 'play';
	        return true;
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ElementSystem = __webpack_require__(16);

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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Element,
	    ModuleManager = __webpack_require__(22),

	    actionManager = new ModuleManager();
	/*
	    Add module to ActionManager

	    Creates a new Action for Elements
	*/
	actionManager.extend = function (name, module) {
	    var methodName = '';
	    /*
	        Generate new method for Elements if module doesn't have a
	        surpressMethod flag and Element doesn't already have a
	        method with that name
	    */
	    if (!module.surpressMethod && !Element.prototype[name]) {
	        Element.prototype[name] = function () {
	            this.set(module.parser.apply(this, arguments));
	            this.action = name;

	            return this.start();
	        };
	    }

	    if (module.elementMethods) {
	        for (methodName in module.elementMethods) {
	            Element.prototype[methodName] = module.elementMethods[methodName];
	        }
	    }

	    // Call parent extend method
	    ModuleManager.prototype.extend.call(this, name, module);
	};

	actionManager.setElement = function (element) {
	    Element = element;
	};

	module.exports = actionManager;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ModuleManager = __webpack_require__(22);

	module.exports = new ModuleManager();

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ModuleManager = __webpack_require__(22);

	module.exports = new ModuleManager();

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ModuleManager = __webpack_require__(22);

	module.exports = new ModuleManager();

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ModuleManager = __webpack_require__(22);

	module.exports = new ModuleManager();

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ModuleManager = __webpack_require__(22);

	module.exports = new ModuleManager();

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Process = __webpack_require__(18),
	    Queue = __webpack_require__(23),
	    update = __webpack_require__(24),
	    actionManager = __webpack_require__(9),
	    utils = __webpack_require__(21),

	    Element = function (element) {
	        this.element = element || false;

	        this.values = {};
	        this.output = {};
	        this.queue = new Queue();

	        this.process = new Process(this, update);
	    };

	Element.prototype = {
	    
	    /*
	        Set Action values and properties
	        
	        @param [object]: Element properties
	        @param [string] (option): Name of default value property
	    */
	    set: function () {
	        return this;
	    },

	    /*
	        Start currently defined Action
	    */
	    start: function () {
	        this.resetProgress();
	        this.activate();
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

	    reverse: function () {
	        return this;
	    },

	    flipValues: function () {
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

	// Register Element with actionManager, so when a new Action is set,
	// We get a new method on Element
	actionManager.setElement(Element);

	module.exports = Element;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Element = __webpack_require__(15),
	    generateMethodIterator = __webpack_require__(25),

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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Input controller
	*/
	"use strict";

	var calc = __webpack_require__(20),
	    utils = __webpack_require__(21),
	    History = __webpack_require__(26),

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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var manager = __webpack_require__(27),

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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var splitCommaDelimited = __webpack_require__(28),
	    functionBreak = __webpack_require__(29);

	module.exports = function (value) {
	    return splitCommaDelimited(functionBreak(value));
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Calculators
	    ----------------------------------------
	    
	    Simple I/O snippets
	*/
	"use strict";

	var utils = __webpack_require__(21),

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
	    
	module.exports = calc;

/***/ },
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ModuleManager = function () {};

	ModuleManager.prototype = {

	    extend: function (name, module) {
	        this[name] = module;
	    }
	};

	module.exports = ModuleManager;

/***/ },
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

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

	module.exports = History;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var theLoop = __webpack_require__(30),
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (value) {
	    return (typeof value === 'string') ? value.split(/,\s*/) : [value];
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (value) {
	    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    The loop
	*/
	"use strict";

	var Timer = __webpack_require__(31),
	    tick = __webpack_require__(32),
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var utils = __webpack_require__(21),

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
/* 32 */
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

/***/ }
/******/ ]);