/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// `redshift` to be deprecated in 4.0.0
	window.Redshift = window.redshift = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Redshift = __webpack_require__(2);
	
	Redshift
	    /*
	        Core Redshift route
	    */
	    .addRoute('values', __webpack_require__(3))
	    /*
	        Core Redshift Actions
	    */
	    .addAction('play', __webpack_require__(4))
	    .addAction('run', __webpack_require__(5))
	    .addAction('fire', __webpack_require__(6))
	    .addAction('track', __webpack_require__(7))
	
	    /*
	        Seek Action - depedent on 'play' Action
	    */
	    .addAction('seek', __webpack_require__(8))
	
	    /*
	        Optional value type support
	    */
	    .addValueType('px', __webpack_require__(9))
	    .addValueType('angle', __webpack_require__(10))
	    .addValueType('hsl', __webpack_require__(11))
	    .addValueType('rgb', __webpack_require__(12))
	    .addValueType('hex', __webpack_require__(13))
	    .addValueType('color', __webpack_require__(14))
	    .addValueType('positions', __webpack_require__(15))
	    .addValueType('dimensions', __webpack_require__(16))
	    .addValueType('shadow', __webpack_require__(17))
	
	    /*
	        DOM Element type and CSS/Attr route - dependent on core value types being present
	    */
	    .addActorType('dom', __webpack_require__(18))
	    .addRoute('css', __webpack_require__(19))
	    .addRoute('attr', __webpack_require__(20))
	
	    /*
	        SVG route - dependent on DOM route
	    */
	    .addRoute('path', __webpack_require__(21));
	
	module.exports = Redshift;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var select = __webpack_require__(22),
	    actionManager = __webpack_require__(23),
	    easingManager = __webpack_require__(24),
	    presetManager = __webpack_require__(25),
	    routeManager = __webpack_require__(26),
	    simulationManager = __webpack_require__(27),
	    actorTypeManager = __webpack_require__(28),
	    valueTypeManager = __webpack_require__(29),
	    calc = __webpack_require__(30),
	
	    Actor = __webpack_require__(31),
	    ActorGroup = __webpack_require__(32),
	    Input = __webpack_require__(33),
	    Process = __webpack_require__(34),
	
	    Redshift = {
	
	        Actor: Actor,
	
	        ActorGroup: ActorGroup,
	
	        Input: Input,
	
	        Process: Process,
	
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
	
	        addActorType: function () {
	            actorTypeManager.extend.apply(actorTypeManager, arguments);
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
	
	        calc: calc,
	
	        /* Depricated methods, removing in 4.0.0 */
	        newAction: function (a, b) {
	            return new Actor(a, b);
	        },
	        newActionGroup: function (a) {
	            return new ActorGroup(a);
	        },
	        newInput: function (a, b) {
	            return new Input(a, b);
	        },
	        newProcess: function (a, b) {
	            return new Process(a, b);
	        }
	    };
	
	Redshift.addBezier = Redshift.addEasing;
	Redshift.addRubix = Redshift.addAction;
	
	module.exports = Redshift;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

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
	    valuesRoute[key] = function (output, actor) {
	        fireCallback(key, output, actor);
	    };
	});
	
	module.exports = valuesRoute;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Play action
	    
	    Translate numbers for a set amount of time, applying easing if defined
	*/
	"use strict";
	
	var calc = __webpack_require__(30),
	    utils = __webpack_require__(35),
	    easingManager = __webpack_require__(24),
	
	    playAction = {
	
	        // [object] Default Action properties
	        actionDefaults: __webpack_require__(36),
	
	        // [object]: Default value properties
	        valueDefaults: __webpack_require__(37),
	
	        // [boolean] Prevent Redshift from autogenerating Element.prototype.play()
	        surpressMethod: true,
	
	        // [object] Methods to add to Actor.prototype
	        actorMethods: __webpack_require__(38),
	
	        /*
	            Update Action elapsed time
	            
	            @param [object]: Action properties
	            @param [number]: Timestamp of current frame
	        */
	        onFrameStart: function (frameDuration) {
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
	                progressTarget = (this.playDirection === 1) ? 1 : 0,
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
	                newValue = easingManager.withinRange(progress, value.origin, target, value.ease);
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Run physics simulation
	*/
	"use strict";
	
	var calc = __webpack_require__(30),
	    simulate = __webpack_require__(40);
	
	module.exports = {
	
	    // [object] Default Action properties
	    actionDefaults: __webpack_require__(41),
	
	    // [object] Default value properties
	    valueDefaults: __webpack_require__(42),
	
	    parse: __webpack_require__(39),
	
	    // [boolean]: Tell Redshift this rubix calculates a new velocity itself
	    calculatesVelocity: true,
	    
	    /*
	        Simulate the Value's per-frame movement
	        
	        @param [string]: Key of current value
	        @param [Value]: Current value
	        @param [number]: Duration of frame in ms
	        @return [number]: Calculated value
	    */
	    process: function (key, value, frameDuration) {
	        value.velocity = simulate(value.simulate, value, frameDuration, this.started);
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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Return current value and immedietly end
	*/
	"use strict";
	
	module.exports = {
	
	    parse: __webpack_require__(39),
	
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Track user input
	*/
	"use strict";
	
	var calc = __webpack_require__(30),
	    genericParser = __webpack_require__(39),
	    Pointer = __webpack_require__(43);
	
	module.exports = {
	
	    valueDefaults: __webpack_require__(44),
	
	    /*
	        Parse Input arguments
	    */
	    parse: function () {
	        var props = genericParser.apply(this, arguments),
	            input = arguments[arguments.length - 1];
	
	        // Create Pointer if this isn't an Input
	        props.input = (!input.current) ? new Pointer(input) : input;
	
	        // Set input origin if not user-defined
	        if (!props.inputOrigin) {
	            props.inputOrigin = input.get();
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
	        
	        @param [string]: Key of current value
	        @param [Value]: Current value
	        @return [number]: Calculated value
	    */
	    process: function (key, value) {
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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Return current value and immedietly end
	*/
	"use strict";
	
	var play = __webpack_require__(4);
	
	module.exports = {
	
	    surpressMethod: true,
	
	    actorMethods: {
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    defaultProps: {
	        unit: 'px'
	    }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    defaultProps: {
	        unit: 'deg'
	    }
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var createDelimited = __webpack_require__(45),
	    getColorValues = __webpack_require__(46),
	    functionCreate = __webpack_require__(47),
	    defaultProps = __webpack_require__(48),
	    terms = __webpack_require__(49).hsl;
	
	module.exports = {
	
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

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var createDelimited = __webpack_require__(45),
	    getColorValues = __webpack_require__(46),
	    functionCreate = __webpack_require__(47),
	    defaultProps = __webpack_require__(48),
	    colorDefaults = defaultProps.color,
	    terms = __webpack_require__(49).colors;
	
	module.exports = {
	
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

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var rgb = __webpack_require__(12);
	
	module.exports = {
	
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

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var utils = __webpack_require__(35),
	    rgb = __webpack_require__(12),
	    hsl = __webpack_require__(11),
	    hex = __webpack_require__(13),
	    supported = [rgb, hsl, hex],
	    numSupported = 3,
	
	    runSupported = function (method, value) {
	        for (var i = 0; i < numSupported; i++) {
	            if (supported[i].test(value)) {
	                return supported[i][method](value);
	            }
	        }
	    };
	
	module.exports = {
	
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

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var createDelimited = __webpack_require__(45),
	    pxDefaults = __webpack_require__(9).defaultProps,
	    splitSpaceDelimited = __webpack_require__(50),
	    terms = __webpack_require__(49).positions;
	
	module.exports = {
	
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

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var terms = __webpack_require__(49).dimensions,
	    pxDefaults = __webpack_require__(9).defaultProps,
	    createDelimited = __webpack_require__(45),
	    splitSpaceDelimited = __webpack_require__(50);
	
	module.exports = {
	
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

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var color = __webpack_require__(14),
	    utils = __webpack_require__(35),
	    pxDefaults = __webpack_require__(9).defaultProps,
	    terms = __webpack_require__(49).shadow,
	    splitSpaceDelimited = __webpack_require__(50),
	    createDelimited = __webpack_require__(45),
	    shadowTerms = terms.slice(0,4);
	
	module.exports = {
	
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

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var styleDOM = __webpack_require__(51),
	    getterSetter = __webpack_require__(52);
	
	module.exports = {
	
	    /*
	        Get or set attribute
	
	        @param [object || string]: Properties to set or name of attribute to get/set
	        @param [string || number]: Property to set if setting single prop
	    */
	    attr: function (opts, prop) {
	        return getterSetter.call(this, opts, prop,
	            // Getter
	            function (name) {
	                return this.element.getAttribute(name);
	            },
	            // Setter
	            function (name, prop) {
	                this.element.setAttribute(name, prop);
	                return this;
	            }
	        );
	    },
	
	    /*
	        Style DOM element
	
	        @param [string || object]: Either name of style to get/set or an object of properties to set
	        @parma [string] (optional): Property to set
	        @return [object || Element]: Returns calculated style if get, or Element if set
	    */
	    style: function (opts, prop) {
	        return getterSetter.call(this, opts, prop,
	            // Getter
	            function (name) {
	                return styleDOM.get(this.element, name);
	            },
	            // Setter
	            function (name, rule) {
	                styleDOM.set(this.element, name, rule);
	                return this;
	            }
	        );
	    }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var build = __webpack_require__(53),
	    typeMap = __webpack_require__(54),
	    CSS_CACHE = '_cssCache';
	
	module.exports = {
	    typeMap: typeMap,
	    
	    onChange: function (output, actor) {
	        actor[CSS_CACHE] = actor[CSS_CACHE] || {};
	        actor.style(build(output, actor[CSS_CACHE]));
	    }
	    
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = {
	    onChange: function (output, actor) {
	        for (var key in output) {
	            if (output.hasOwnProperty(key)) {
	                actor.attr(key, output[key]);
	            }
	        }
	    }
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var createStyles = __webpack_require__(55);
	
	module.exports = {
	
	    typeMap: {
	        stroke: 'color'
	    },
	
	    onStart: function (output, actor) {
	        if (actor.actor) {
	            actor.pathLength = actor.element.getTotalLength();
	        }
	    },
	    
	    onChange: function (output, actor) {
	        actor.style(createStyles(output, actor.pathLength));
	    }
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ActorGroup = __webpack_require__(32);
	
	/*
	    Create an ActorGroup based on a selection of DOM nodes
	
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
	
	    return new ActorGroup(elements, { type: 'dom' });
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Actor,
	    ActorGroup,
	    utils = __webpack_require__(35),
	    generateMethodIterator = __webpack_require__(56),
	    genericActionProps = __webpack_require__(57),
	    genericValueProps = __webpack_require__(58),
	
	    ModManager = __webpack_require__(59),
	
	    actionManager = new ModManager();
	/*
	    Add module to ActionManager
	
	    Creates a new Action for Elements
	*/
	actionManager.extend = function (name, mod) {
	    var methodName = '';
	
	    /*
	        Generate new method for Elements if module doesn't have a
	        surpressMethod flag and Element doesn't already have a
	        method with that name
	    */
	    if (!mod.surpressMethod && !Actor.prototype[name]) {
	        Actor.prototype[name] = function () {
	            this.action = name;
	            this.set(mod.parse.apply(this, arguments));
	
	            return this.start();
	        };
	
	        ActorGroup.prototype[name] = generateMethodIterator(name);
	    }
	
	    // If module has methods to add to Element.prototype
	    if (mod.actorMethods) {
	        for (methodName in mod.actorMethods) {
	            if (mod.actorMethods.hasOwnProperty(methodName)) {
	                Actor.prototype[methodName] = mod.actorMethods[methodName];
	                ActorGroup.prototype[methodName] = generateMethodIterator(methodName);
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
	
	actionManager.setActorGroup = function (actorGroup) {
	    ActorGroup = actorGroup;
	};
	
	module.exports = actionManager;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var calc = __webpack_require__(30),
	    Bezier = __webpack_require__(60),
	
	    EASE_IN = 'In',
	    EASE_OUT = 'Out',
	    EASE_IN_OUT = EASE_IN + EASE_OUT,
	    
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
	    },
	    
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
	    },
	    
	    /*
	        Add new easing function
	        
	        Takes name and generates nameIn, nameOut, nameInOut, and easing functions to match
	        
	        @param [string]: Base name of the easing functions to generate
	        @param [function]: Base easing function, as an easeIn, from which to generate Out and InOut
	    */
	    generateVariations = function (name, method) {
	        var easeIn = name + EASE_IN,
	            easeOut = name + EASE_OUT,
	            easeInOut = name + EASE_IN_OUT,
	            baseName = easeIn,
	            reverseName = easeOut;
	
	        // Create the In function
	        easingManager[baseName] = method;
	
	        // Create the Out function by reversing the transition curve
	        easingManager[reverseName] = function (progress) {
	            return reverseEasing(progress, easingManager[baseName]);
	        };
	        
	        // Create the InOut function by mirroring the transition curve
	        easingManager[easeInOut] = function (progress) {
	            return mirrorEasing(progress, easingManager[baseName]);
	        };
	    },
	
	    ModManager = __webpack_require__(59),
	    easingManager = new ModManager();
	
	/*
	    Extend easing functions
	*/
	easingManager.extend = function (name, x1, y1, x2, y2) {
	    // If this is an easing function, generate variations
	    if (typeof x1 === 'function') {
	        generateVariations(name, x1);
	
	    // Otherwise it's a bezier curve, so generate new Bezier curve function
	    } else {
	        this[name] = new Bezier(x1, y1, x2, y2);
	    }
	
	    return this;
	};
	
	/*
	    Ease value within ranged parameters
	    
	    @param [number]: Progress between 0 and 1
	    @param [number]: Value of 0 progress
	    @param [number]: Value of 1 progress
	    @param [string]: Easing to use
	    @param [number]: Amplify progress out of specified range
	    @return [number]: Value of eased progress in range
	*/  
	easingManager.withinRange = function (progress, from, to, ease, escapeAmp) {
	    var progressLimited = calc.restricted(progress, 0, 1);
	
	    if (progressLimited !== progress && escapeAmp) {
	        ease = 'linear';
	        progressLimited = progressLimited + ((progress - progressLimited) * escapeAmp);
	    }
	
	    return calc.valueEased(progressLimited, from, to, this[ease]);
	};
	            
	/*
	    Linear easing adjustment
	    
	    The default easing method, not added with .extend as it has no Out or InOut
	    variation.
	    
	    @param [number]: Progress, from 0-1
	    @return [number]: Unadjusted progress
	*/
	easingManager.linear = function (progress) {
	    return progress;
	};
	
	// Generate power easing easing
	['ease', 'cubic', 'quart', 'quint'].forEach(function (easingName, i) {
	    baseEasing[easingName] = generatePowerEasing(i + 2);
	});
	
	// Generate in/out/inOut variations
	for (var key in baseEasing) {
	    if (baseEasing.hasOwnProperty(key)) {
	        generateVariations(key, baseEasing[key]);
	    }
	}
	
	module.exports = easingManager;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var utils = __webpack_require__(35),
	    ModManager = __webpack_require__(59),
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
	
	module.exports = presetManager;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ModManager = __webpack_require__(59),
	    routeManager = new ModManager();
	
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
	
	module.exports = routeManager;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var calc = __webpack_require__(30),
	    utils = __webpack_require__(35),
	    speedPerFrame = calc.speedPerFrame,
	
	    ModManager = __webpack_require__(59),
	    simulationManager = new ModManager();
	
	/*
	    Add core physics simulations
	*/
	simulationManager
	
	    /*
	        Velocity
	        
	        The default .run() simulation.
	        
	        Applies any set deceleration and acceleration to existing velocity
	    */
	    .extend('velocity', function (value, duration) {
	        return value.velocity - speedPerFrame(value.deceleration, duration) + speedPerFrame(value.acceleration, duration);
	    })
	    
	    /*
	        Glide
	        
	        Emulates touch device scrolling effects with exponential decay
	        http://ariya.ofilabs.com/2013/11/javascript-kinetic-scrolling-part-2.html
	    */
	    .extend('glide', function (value, duration, started) {
	        var timeUntilFinished = - utils.currentTime() - started,
	            delta = - value.to * Math.exp(timeUntilFinished / value.timeConstant);
	
	        return (value.to + delta) - value.current;
	    })
	
	    /*
	        Friction
	
	        TODO: fold into core physics simulation
	    */
	    .extend('friction', function (value, duration) {
	        var newVelocity = speedPerFrame(value.velocity, duration) * (1 - value.friction);
	        return calc.speedPerSecond(newVelocity, duration);
	    })
	    
	    /*
	        Spring
	    */
	    .extend('spring', function (value, duration) {
	        var distance = value.to - value.current;
	        
	        value.velocity += distance * speedPerFrame(value.spring, duration);
	        
	        return simulationManager.friction(value, duration);
	    })
	    
	    /*
	        Bounce
	        
	        Invert velocity and reduce by provided fraction
	    */
	    .extend('bounce', function (value) {
	        var distance = 0,
	            to = value.to,
	            current = value.current,
	            bounce = value.bounce;
	        
	        // If we're using glide simulation we have to flip our target too
	        if (value.simulate === 'glide') {
	            distance = to - current;
	            value.to = current - (distance * bounce);
	        }
	        
	        return value.velocity *= - bounce;
	    })
	    
	    /*
	        Capture
	        
	        Convert simulation to spring and set target to limit
	    */
	    .extend('capture', function (value, target) {
	        value.to = target;
	        value.simulate = 'spring';
	        value.capture = value.min = value.max = undefined;
	    });
	
	module.exports = simulationManager;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Actor,
	
	    /*
	        Generate an Element function
	    */
	    generateFunction = function (name) {
	        return function () {
	            var type = this.type,
	                returnVal;
	            if (type && type[name]) {
	                returnVal = type[name].apply(this, arguments);
	            }
	            return returnVal;
	        };
	    },
	
	    ModManager = __webpack_require__(59),
	    actorTypeManager = new ModManager();
	
	actorTypeManager.extend = function (name, mod) {
	    var methodName = '';
	
	    for (methodName in mod) {
	        if (mod.hasOwnProperty(methodName) && !Actor.prototype.hasOwnProperty(methodName)) {
	            Actor.prototype[methodName] = generateFunction(methodName);
	        }
	    }
	    // Call parent extend method
	    ModManager.prototype.extend.call(this, name, mod);
	};
	
	actorTypeManager.setActor = function (actor) {
	    Actor = actor;
	};
	
	module.exports = actorTypeManager;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ModManager = __webpack_require__(59),
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
	
	module.exports = valueTypeManager;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Calculators
	    ----------------------------------------
	    
	    Simple I/O snippets
	*/
	"use strict";
	
	var utils = __webpack_require__(35),
	
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Process = __webpack_require__(34),
	    Queue = __webpack_require__(62),
	    utils = __webpack_require__(35),
	    update = __webpack_require__(63),
	    valueOps = __webpack_require__(64),
	    actionManager = __webpack_require__(23),
	    routeManager = __webpack_require__(26),
	    actorTypeManager = __webpack_require__(28),
	
	    Actor = function (element, options) {
	        this.element = element || false;
	        this.values = {};
	        this.output = {};
	        this.queue = new Queue();
	        this.process = new Process(this, update);
	
	        this.clearOrder();
	
	        if (options) {
	            this.type = options.type;
	        }
	
	        // Check if this element is a DOM node, set type to 'dom'
	        if (!this.type && this.element && this.element.nodeType) {
	            this.type = 'dom';
	        }
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
	    },
	
	    // [ElementType]
	    get type() {
	        return this._type;
	    },
	
	    /*
	        Set ElementType
	
	        @param [string]: Name of new element
	    */
	    set type(type) {
	        this._type = actorTypeManager[type];
	    }
	};
	
	// Register Actor with actionManager, so when a new Action is set,
	// We get a new method on Actor
	actionManager.setActor(Actor);
	actorTypeManager.setActor(Actor);
	
	module.exports = Actor;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Actor = __webpack_require__(31),
	    generateMethodIterator = __webpack_require__(56),
	    actionManager = __webpack_require__(23),
	
	    /*
	        ElementSystem constructor
	
	        @param [array]: Array of Elements, or valid Element subjects
	    */
	    ActorGroup = function (members, options) {
	        this.members = [];
	        this.add(members, options);
	    };
	
	ActorGroup.prototype = {
	
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
	
	        this._stagger = this._stagger || new Actor();
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
	        Add a group of Actors to our System
	
	        @param [array]: Array of Actors, or valid Actor subjects
	    */
	    add: function (members, options) {
	        var numNewMembers = members.length,
	            i = 0,
	            newMember;
	
	        for (; i < numNewMembers; i++) {
	            newMember = (members[i].prototype !== Actor.prototype) ? new Actor(members[i], options) : members[i];
	            this.members.push(newMember);
	        }
	
	        return this;
	    }
	};
	
	// Initialise Element System methods
	(function () {
	    for (var method in Actor.prototype) {
	        if (Actor.prototype.hasOwnProperty(method)) {
	            ActorGroup.prototype[method] = generateMethodIterator(method);
	        }
	    }
	})();
	
	// Register Element with actionManager, so when a new Action is set,
	// We get a new method on Element
	actionManager.setActorGroup(ActorGroup);
	
	module.exports = ActorGroup;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Input controller
	*/
	"use strict";
	
	var calc = __webpack_require__(30),
	    utils = __webpack_require__(35),
	    History = __webpack_require__(61),
	
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var manager = __webpack_require__(65),
	
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
/* 35 */
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

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    
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

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
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

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var parseArgs = __webpack_require__(66),
	    utils = __webpack_require__(35);
	
	module.exports = {
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
	            this.action = action;
	            this.set(parseArgs.apply(this, arguments), 'to');
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
	            this.set(parseArgs.apply(this, nextInQueue), 'to')
	                .reset();
	
	            stepTaken = true;
	        }
	
	        return stepTaken;
	    }
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var presetManager = __webpack_require__(25),
	    utils = __webpack_require__(35);
	
	module.exports = function (base, override) {
	    var props = (typeof base === 'string') ? presetManager.getDefined(base) : base;
	
	    // Override properties with second arg if it's an object
	    if (typeof override === 'object') {
	        props = utils.merge(props, override);
	    }
	
	    return props;
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var simulations = __webpack_require__(27);
	
	module.exports = function (simulation, value, duration, started) {
	    var velocity = simulations[simulation](value, duration, started);
	    return (Math.abs(velocity) >= value.stopSpeed) ? velocity : 0;
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    // [int]: Number of frames Action has been inactive
	    inactiveFrames: 0,
	    
	    // [number]: Number of frames of no change before Action is declared inactive
	    maxInactiveFrames: 3
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	
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
	    friction: 0.05
	
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Input = __webpack_require__(33),
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
	
	module.exports = Pointer;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    // [number]: Factor of movement outside of maximum range (ie 0.5 will move half as much as 1)
	    escapeAmp: 0
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = function (values, terms, delimiter, chop) {
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

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var splitCommaDelimited = __webpack_require__(67),
	    functionBreak = __webpack_require__(68);
	
	module.exports = function (value, terms) {
	    var splitValue = {},
	        numTerms = terms.length,
	        colors = splitCommaDelimited(functionBreak(value)),
	        i = 0;
	
	    for (; i < numTerms; i++) {
	        splitValue[terms[i]] = (colors[i] !== undefined) ? colors[i] : 1;
	    }
	
	    return splitValue;
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (value, prefix) {
	    return prefix + '(' + value + ')';
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = {
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


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

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
	
	module.exports = terms;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (value) {
	    return (typeof value === 'string') ? value.split(' ') : [value];
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

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
	
	module.exports = new styleDOM();

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Multi-var getter/setter
	
	    @param [object || string]: Name of value to get/set
	    @param [string || number] (optional): Single property to set 
	    @param [function]: Getter
	    @param [function]: Setter
	*/
	module.exports = function (opts, prop, getter, setter) {
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

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var transformDictionary = __webpack_require__(69),
	    transformProps = transformDictionary.props,
	
	    TRANSFORM = 'transform',
	    TRANSLATE_Z = 'translateZ';
	
	module.exports = function (output, cache) {
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

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var COLOR = 'color',
	    POSITIONS = 'positions',
	    DIMENSIONS = 'dimensions',
	    SHADOW = 'shadow',
	    ANGLE = 'angle',
	    PX = 'px';
	
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
	    perspective: PX
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var lookup = __webpack_require__(70),
	
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
	console.log(pathStyles);
	    return pathStyles;
	};

/***/ },
/* 56 */
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
	        var numElements = this.members.length,
	            i = 0,
				isGetter = false,
				getterArray = [],
				actor,
				actorReturn;
	
			for (; i < numElements; i++) {
				actor = this.members[i];
				actorReturn = actor[method].apply(actor, arguments);
	
				if (actorReturn != actor) {
	    			isGetter = true;
	    			getterArray.push(actorReturn);
				}
			}
			
			return (isGetter) ? getterArray : this;
		};
	};


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    
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

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	
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
	    round: false
	
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

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
	
	module.exports = ModManager;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*
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
	    FLOAT_32_SUPPORTED = 'Float32Array' in global,
	    
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
	
	module.exports = Bezier;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 61 */
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
/* 62 */
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var actionManager = __webpack_require__(23),
	    routeManager = __webpack_require__(26),
	    valueTypeManager = __webpack_require__(29),
	    calc = __webpack_require__(30),
	
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
	        if (action.onFrameStart) {
	            action.onFrameStart.call(this, frameDuration);
	        }
	
	        // Fire onStart if first frame
	        if (this.firstFrame) {
	            routeManager.shard(function (route) {
	                if (route.onStart) {
	                    route.onStart(values, self);
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
	            updatedValue = valueAction.process.call(this, key, value, frameDuration);
	
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
	                route.onFrame(routeOutput, self);
	            }
	
	            // Fire onChanged if any value has changed
	            if (self.hasChanged && route.onChange || self.firstFrame && route.onChange) {
	                route.onChange(routeOutput, self);
	            }
	
	        }, output);
	
	        // Fire onEnd if this Action has ended
	        if (action.hasEnded.call(this, this.hasChanged)) {
	            this.isActive = false;
	
	            routeManager.shard(function (route, routeName, routeOutput) {
	                if (route.onEnd) {
	                    route.onEnd(routeOutput, self);
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
	
	module.exports = function () {
	    if (this.isActive) {
	        update.apply(this, arguments);
	    }
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var calc = __webpack_require__(30),
	    utils = __webpack_require__(35),
	    isNum = utils.isNum,
	    actionsManager = __webpack_require__(23),
	    valueTypesManager = __webpack_require__(29),
	    routeManager = __webpack_require__(26),
	
	    numericalValues = ['current', 'to', 'start', 'min', 'max'],
	    numNumericalValues = numericalValues.length;
	
	module.exports = {
	
	
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
	                if (utils.isFunc(value[propertyName])) {
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
	            isNumericalValue = (numericalValues.indexOf(name) > -1);
	
	        // If this is a function, resolve
	        if (utils.isFunc(property)) {
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
	                if (!value.type && utils.isString(value[defaultValueProp])) {
	
	                    // Check if existing value with this key
	                    if (existingValue && existingValue.type) {
	                        value.type = existingValue.type;
	                    
	                    // Or if this route has a typemap
	                    } else if (route.typeMap && route.typeMap[key]) {
	                        value.type = route.typeMap[key];
	
	                    // Otherwise, check by running tests
	                    } else {
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
	            defaultProps = actionsManager[actor.action].valueDefaults,
	            hasChildren = false,
	            prop;
	
	        for (key in preprocessedValues) {
	            if (preprocessedValues.hasOwnProperty(key)) {
	                preprocessedValue = preprocessedValues[key];
	                thisValue = actor.values[key] || this.initialState(this.resolve('start', preprocessedValue.start, {}, actor), namespace);
	                hasChildren = (preprocessedValue.children !== undefined);
	
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
	
	        console.log(actor.values);
	    },
	/*
	
	    process: function (values, element, namespace, defaultValueProp) {
	        var key = '',
	            propKey = '',
	            namespacedKey = '',
	            valueIsObj = false,
	            processedValues = {},
	            processedValue = {},
	            splitValues = {},
	            childValue = {},
	            thisValue = {},
	            elementValues = element.values,
	            hasChildren = false,
	            valueType = {},
	            defaultProps = actionsManager[element.action].valueDefaults;
	var DEFAULT_NAMESPACE = 'values';
	        namespace = namespace || DEFAULT_NAMESPACE;
	        defaultValueProp = defaultValueProp || 'current';
	
	        // Preprocess values to set
	        for (key in values) {
	            valueIsObj = utils.isObj(values[key]);
	            thisValue = valueIsObj ? values[key] : {};
	            namespacedKey = (namespace !== DEFAULT_NAMESPACE) ? key + '.' + namespace : key;
	
	            // If this value isn't an object already, set it to the default property
	            if (!valueIsObj) {
	                thisValue[defaultValueProp] = values[key];
	            }
	
	            // Check if value doesn't have a type property, check routeManager and auto detect
	            if (!thisValue.type) {
	                if (elementValues && elementValues[namespacedKey] && elementValues[namespacedKey].type) {
	                    thisValue.type = elementValues[namespacedKey].type;
	                } else if (routeManager[namespace].typeMap) {
	                    thisValue.type = routeManager[namespace].typeMap[key] || false;
	
	                // If this property key hasn't been mapped, and it's a string, run tests
	                } else if (utils.isString(thisValue[defaultValueProp])) {
	                    thisValue.type = valueTypesManager.test(thisValue[defaultValueProp]);
	                }
	            }
	
	            // Set value
	            processedValues[key] = thisValue;
	
	            // If this value has a type, split or assign default props
	            if (thisValue.type) {
	                valueType = valueTypesManager[thisValue.type];
	
	                // Split if this value type is a splitter
	                if (valueType.split) {
	                    thisValue.children = {};
	                    splitValues = this.split(key, thisValue, element, valueType);
	
	                    for (propKey in splitValues) {
	                        childValue = utils.merge(thisValue, splitValues[propKey]);
	                        childValue.parent = namespacedKey;
	                        childValue.propName = propKey;
	                        delete childValue.type;
	                        delete childValue.children;
	                        processedValues[key + propKey] = childValue;
	                    }
	
	                // Or just apply default props
	                } else {
	                    processedValues[key] = utils.merge(valueTypesManager.defaultProps(thisValue.type, key), thisValue);
	                }
	            }
	        }
	console.log(processedValues);
	        // Set preprocessed value
	        for (key in processedValues) {
	            namespacedKey = (namespace !== DEFAULT_NAMESPACE) ? key + '.' + namespace : key;
	            processedValue = processedValues[key];
	            thisValue = elementValues[namespacedKey] || this.initialState(this.resolve('start', processedValue.start, {}, element), namespace);
	            hasChildren = processedValue.children !== undefined;
	
	            // Inherit properties from Element
	            for (propKey in defaultProps) {
	                thisValue[propKey] = (element.hasOwnProperty(propKey)) ? element[propKey] : defaultProps[propKey];
	            }
	
	            // Loop through all properties and set
	            for (propKey in processedValue) {
	                if (processedValue[propKey] !== undefined && !isNum(processedValue[propKey]) && !hasChildren) {
	                    processedValue[propKey] = this.resolve(propKey, processedValue[propKey], thisValue, element);
	                }
	
	                thisValue[propKey] = processedValue[propKey];
	
	                if (propKey === 'to') {
	                    thisValue.target = thisValue.to;
	                }
	            }
	
	            // Save non-namespaced key
	            thisValue.name = key;
	
	            // Set value origin
	            thisValue.origin = thisValue.current;
	
	            // Set hasRange to true if min and max are numbers
	            thisValue.hasRange = (isNum(thisValue.min) && isNum(thisValue.max)) ? true  : false;
	
	            // Assign thisValue to elementValues[key]
	            elementValues[namespacedKey] = thisValue;
	
	            // Update order
	            element.updateOrder(namespacedKey, utils.isString(thisValue.link), hasChildren);
	        }
	    }*/
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var theLoop = __webpack_require__(71),
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var presetManager = __webpack_require__(25),
	    utils = __webpack_require__(35),
	
	    parsePlaylist = function (args) {
	        var playlist = args[0].split(' '),
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
	
	module.exports = function () {
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
	                props.ease = props[i];
	                break;
	        }
	    }
	
	    // Default .play properties
	    props.loopCount = props.yoyoCount = props.flipCount = 0;
	    props.playDirection = 1;
	
	    return props;
	};


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (value) {
	    return (typeof value === 'string') ? value.split(/,\s*/) : [value];
	};

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (value) {
	    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var positionTerms = __webpack_require__(49).positions,
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
	
	module.exports = terms;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var STROKE = 'stroke',
	    DASH = STROKE + '-dash', // stoke-width
	    DASH_ARRAY = DASH + 'array';
	
	module.exports = {
	    opacity: STROKE + '-opacity',
	    width: STROKE + '-width',
	    offset: DASH + 'offset',
	    length: DASH_ARRAY,
	    spacing: DASH_ARRAY,
	    miterlimit: STROKE + '-miterlimit'
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    The loop
	*/
	"use strict";
	
	var Timer = __webpack_require__(72),
	    tick = __webpack_require__(73),
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
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var utils = __webpack_require__(35),
	
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
/* 73 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzExMDMyZDQxZmZhNWNmMGYyMTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2FkL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkc2hpZnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy92YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9ydW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZmlyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90cmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9zZWVrLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9weC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2hzbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9oZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2NvbG9yLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2RpbWVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3NoYWRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3ItdHlwZXMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BsYXkvZWFzaW5nLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL3ByZXNldC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9ydW4vc2ltdWxhdGlvbi1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci10eXBlcy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3IvQWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL0FjdG9yR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L0lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wbGF5L2RlZmF1bHQtYWN0aW9uLXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BsYXkvZGVmYXVsdC12YWx1ZS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wbGF5L2FjdG9yLW1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZ2VuZXJpYy9wYXJzZS1hcmdzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3J1bi9zaW11bGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9ydW4vZGVmYXVsdC1hY3Rpb24tcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcnVuL2RlZmF1bHQtdmFsdWUtcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L1BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdHJhY2svZGVmYXVsdC12YWx1ZS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci10eXBlcy9kb20vc3R5bGUtZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvZ2V0dGVyLXNldHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2Nzcy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2Nzcy90eXBlLWxvb2t1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3BhdGgvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL3N5c3RlbS9nZW5lcmF0ZS1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9nZW5lcmljL2RlZmF1bHQtYWN0aW9uLXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2dlbmVyaWMvZGVmYXVsdC12YWx1ZS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL01vZE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGxheS9iZXppZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9IaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvUXVldWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3IvdmFsdWUtb3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BsYXkvcGFyc2UtYXJncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL3NwbGl0LWNvbW1hLWRlbGltaXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWJyZWFrLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvY3NzL3RyYW5zZm9ybS1kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvcGF0aC9hdHRyLW5hbWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL2xvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvdGljay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTtBQUNBLDREOzs7Ozs7QUNEQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQjs7Ozs7O0FDL0NBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQjs7Ozs7O0FDdEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQsOEI7Ozs7OztBQ3JCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEc7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0pBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUMvQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQzdCQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUMxQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ2hDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTRCO0FBQzVCLDJCQUEwQjtBQUMxQix1QkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ3JDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW1DO0FBQ25DLCtCQUE4QjtBQUM5QiwwQkFBeUI7QUFDekIsd0JBQXVCOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBYyxPQUFPO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUM1Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWMsYUFBYTtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNyREE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQy9DQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHOzs7Ozs7QUNkQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDVkE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ25CQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBLHNDQUFxQyxjQUFjO0FBQ25ELEc7Ozs7OztBQzdCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQzs7Ozs7O0FDakxBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWMsYUFBYTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEIsc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQSxXQUFVLGFBQWE7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQzs7Ozs7O0FDNUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVUsbUJBQW1CO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0I7Ozs7OztBQy9CQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDs7Ozs7OztBQzFGQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQzs7Ozs7O0FDckNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQSxtQzs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMsV0FBVztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7OztBQUdUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMsV0FBVztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxrQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7OztBQUdUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOzs7QUFHVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7O0FBR1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRTtBQUNBLFVBQVM7OztBQUdUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUI7Ozs7OztBQ2hXQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCOzs7Ozs7QUM5UUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFpQjtBQUNqQiw0Q0FBMkMsbUJBQW1CO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBYyxtQkFBbUI7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLDZCOzs7Ozs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHdCOzs7Ozs7QUM3SEE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxVQUFTOztBQUVUOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQjs7Ozs7O0FDL0pBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEM7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQztBQUNBLE1BQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWMsWUFBWTtBQUMxQjtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUEseUJBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHOzs7Ozs7QUMvT0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNuQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEc7Ozs7OztBQ2xCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSxlQUFjLGNBQWM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDeEdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEc7Ozs7OztBQ2RBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ1BBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDTkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRzs7Ozs7O0FDN0JBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEI7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVUsY0FBYztBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHOzs7Ozs7QUNyQkE7QUFDQTs7QUFFQTtBQUNBLHdCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUEsV0FBVSxjQUFjO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQSxHOzs7Ozs7QUNkQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDRkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakJBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qjs7Ozs7O0FDZEE7QUFDQTtBQUNBLEc7Ozs7OztBQ0ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7O0FBRVo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFrQixvQkFBb0I7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7O0FDMURBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEc7Ozs7OztBQzdCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVEO0FBQ0E7O0FBRUE7QUFDQSxHOzs7Ozs7QUN6Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUM5Q0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUN2REE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUSxpQkFBaUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRzs7Ozs7O0FDakJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEc7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF3QztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUEsd0JBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCOzs7Ozs7QUN2REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBLGtCQUFpQjs7QUFFakI7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUFzQix1QkFBdUI7QUFDN0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWE7OztBQUdiO0FBQ0EsZ0NBQStCLHlCQUF5QjtBQUN4RDtBQUNBO0FBQ0EsY0FBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXNCLGtFQUFrRTtBQUN4RjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxrQkFBaUI7QUFDakI7O0FBRUEsa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7O0FDcktBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwwQjs7Ozs7O0FDcEVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCOzs7Ozs7QUMvQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFjLHFCQUFxQjtBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDeEpBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCO0FBQzVCLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUEsZUFBYyx3QkFBd0I7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DO0FBQ25DLHVCQUFzQjtBQUN0Qiw0QkFBMkI7QUFDM0IsNEJBQTJCO0FBQzNCLHNCQUFxQjtBQUNyQiwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFrQztBQUNsQywyQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFIQUFvSDtBQUNwSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBZ0M7QUFDaEMsZ0NBQStCO0FBQy9CLDZCQUE0QjtBQUM1Qiw0QkFBMkI7QUFDM0IsMkJBQTBCO0FBQzFCO0FBQ0E7QUFDQSwyQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5SEFBd0g7QUFDeEg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxHOzs7Ozs7QUM5YkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUIsaUJBQWlCO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVDOzs7Ozs7QUN6S0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBa0Isb0JBQW9CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFVLGFBQWE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDckRBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNGQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDRkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxXQUFVLGNBQWM7QUFDeEI7QUFDQTtBQUNBLEVBQUM7O0FBRUQsd0I7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLFVBQVM7QUFDVCxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDZCOzs7Ozs7QUNwRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCOzs7Ozs7QUM3QkE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7O0FBRWI7O0FBRUE7QUFDQSxPOztBQUVBLEVBQUM7QUFDRDtBQUNBOztBQUVBLHVCIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNzExMDMyZDQxZmZhNWNmMGYyMThcbiAqKi8iLCIvLyBgcmVkc2hpZnRgIHRvIGJlIGRlcHJlY2F0ZWQgaW4gNC4wLjBcbndpbmRvdy5SZWRzaGlmdCA9IHdpbmRvdy5yZWRzaGlmdCA9IHJlcXVpcmUoJy4vbW9kdWxlLmpzJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sb2FkL2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVkc2hpZnQgPSByZXF1aXJlKCcuLi9yZWRzaGlmdCcpO1xuXG5SZWRzaGlmdFxuICAgIC8qXG4gICAgICAgIENvcmUgUmVkc2hpZnQgcm91dGVcbiAgICAqL1xuICAgIC5hZGRSb3V0ZSgndmFsdWVzJywgcmVxdWlyZSgnLi4vcm91dGVzL3ZhbHVlcycpKVxuICAgIC8qXG4gICAgICAgIENvcmUgUmVkc2hpZnQgQWN0aW9uc1xuICAgICovXG4gICAgLmFkZEFjdGlvbigncGxheScsIHJlcXVpcmUoJy4uL2FjdGlvbnMvcGxheScpKVxuICAgIC5hZGRBY3Rpb24oJ3J1bicsIHJlcXVpcmUoJy4uL2FjdGlvbnMvcnVuJykpXG4gICAgLmFkZEFjdGlvbignZmlyZScsIHJlcXVpcmUoJy4uL2FjdGlvbnMvZmlyZScpKVxuICAgIC5hZGRBY3Rpb24oJ3RyYWNrJywgcmVxdWlyZSgnLi4vYWN0aW9ucy90cmFjaycpKVxuXG4gICAgLypcbiAgICAgICAgU2VlayBBY3Rpb24gLSBkZXBlZGVudCBvbiAncGxheScgQWN0aW9uXG4gICAgKi9cbiAgICAuYWRkQWN0aW9uKCdzZWVrJywgcmVxdWlyZSgnLi4vYWN0aW9ucy9zZWVrJykpXG5cbiAgICAvKlxuICAgICAgICBPcHRpb25hbCB2YWx1ZSB0eXBlIHN1cHBvcnRcbiAgICAqL1xuICAgIC5hZGRWYWx1ZVR5cGUoJ3B4JywgcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvcHgnKSlcbiAgICAuYWRkVmFsdWVUeXBlKCdhbmdsZScsIHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2FuZ2xlJykpXG4gICAgLmFkZFZhbHVlVHlwZSgnaHNsJywgcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvaHNsJykpXG4gICAgLmFkZFZhbHVlVHlwZSgncmdiJywgcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvcmdiJykpXG4gICAgLmFkZFZhbHVlVHlwZSgnaGV4JywgcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvaGV4JykpXG4gICAgLmFkZFZhbHVlVHlwZSgnY29sb3InLCByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9jb2xvcicpKVxuICAgIC5hZGRWYWx1ZVR5cGUoJ3Bvc2l0aW9ucycsIHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucycpKVxuICAgIC5hZGRWYWx1ZVR5cGUoJ2RpbWVuc2lvbnMnLCByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9kaW1lbnNpb25zJykpXG4gICAgLmFkZFZhbHVlVHlwZSgnc2hhZG93JywgcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvc2hhZG93JykpXG5cbiAgICAvKlxuICAgICAgICBET00gRWxlbWVudCB0eXBlIGFuZCBDU1MvQXR0ciByb3V0ZSAtIGRlcGVuZGVudCBvbiBjb3JlIHZhbHVlIHR5cGVzIGJlaW5nIHByZXNlbnRcbiAgICAqL1xuICAgIC5hZGRBY3RvclR5cGUoJ2RvbScsIHJlcXVpcmUoJy4uL2FjdG9yLXR5cGVzL2RvbScpKVxuICAgIC5hZGRSb3V0ZSgnY3NzJywgcmVxdWlyZSgnLi4vcm91dGVzL2NzcycpKVxuICAgIC5hZGRSb3V0ZSgnYXR0cicsIHJlcXVpcmUoJy4uL3JvdXRlcy9hdHRyJykpXG5cbiAgICAvKlxuICAgICAgICBTVkcgcm91dGUgLSBkZXBlbmRlbnQgb24gRE9NIHJvdXRlXG4gICAgKi9cbiAgICAuYWRkUm91dGUoJ3BhdGgnLCByZXF1aXJlKCcuLi9yb3V0ZXMvcGF0aCcpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWRzaGlmdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xvYWQvbW9kdWxlLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzZWxlY3QgPSByZXF1aXJlKCcuL2FjdG9yL3NlbGVjdCcpLFxuICAgIGFjdGlvbk1hbmFnZXIgPSByZXF1aXJlKCcuL2FjdGlvbnMvbWFuYWdlcicpLFxuICAgIGVhc2luZ01hbmFnZXIgPSByZXF1aXJlKCcuL2FjdGlvbnMvcGxheS9lYXNpbmctbWFuYWdlcicpLFxuICAgIHByZXNldE1hbmFnZXIgPSByZXF1aXJlKCcuL2FjdG9yL3ByZXNldC1tYW5hZ2VyJyksXG4gICAgcm91dGVNYW5hZ2VyID0gcmVxdWlyZSgnLi9yb3V0ZXMvbWFuYWdlcicpLFxuICAgIHNpbXVsYXRpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi9hY3Rpb25zL3J1bi9zaW11bGF0aW9uLW1hbmFnZXInKSxcbiAgICBhY3RvclR5cGVNYW5hZ2VyID0gcmVxdWlyZSgnLi9hY3Rvci10eXBlcy9tYW5hZ2VyJyksXG4gICAgdmFsdWVUeXBlTWFuYWdlciA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvbWFuYWdlcicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuL2luYy9jYWxjJyksXG5cbiAgICBBY3RvciA9IHJlcXVpcmUoJy4vYWN0b3IvQWN0b3InKSxcbiAgICBBY3Rvckdyb3VwID0gcmVxdWlyZSgnLi9hY3Rvci9BY3Rvckdyb3VwJyksXG4gICAgSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0L0lucHV0JyksXG4gICAgUHJvY2VzcyA9IHJlcXVpcmUoJy4vcHJvY2Vzcy9Qcm9jZXNzJyksXG5cbiAgICBSZWRzaGlmdCA9IHtcblxuICAgICAgICBBY3RvcjogQWN0b3IsXG5cbiAgICAgICAgQWN0b3JHcm91cDogQWN0b3JHcm91cCxcblxuICAgICAgICBJbnB1dDogSW5wdXQsXG5cbiAgICAgICAgUHJvY2VzczogUHJvY2VzcyxcblxuICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChpdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdChpdGVtcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkQWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhY3Rpb25NYW5hZ2VyLmV4dGVuZC5hcHBseShhY3Rpb25NYW5hZ2VyLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkRWFzaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlYXNpbmdNYW5hZ2VyLmV4dGVuZC5hcHBseShlYXNpbmdNYW5hZ2VyLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkUHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcmVzZXRNYW5hZ2VyLmV4dGVuZC5hcHBseShwcmVzZXRNYW5hZ2VyLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkU2ltdWxhdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2ltdWxhdGlvbk1hbmFnZXIuZXh0ZW5kLmFwcGx5KHNpbXVsYXRpb25NYW5hZ2VyLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkQWN0b3JUeXBlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhY3RvclR5cGVNYW5hZ2VyLmV4dGVuZC5hcHBseShhY3RvclR5cGVNYW5hZ2VyLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkVmFsdWVUeXBlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YWx1ZVR5cGVNYW5hZ2VyLmV4dGVuZC5hcHBseSh2YWx1ZVR5cGVNYW5hZ2VyLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkUm91dGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJvdXRlTWFuYWdlci5leHRlbmQuYXBwbHkocm91dGVNYW5hZ2VyLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FsYzogY2FsYyxcblxuICAgICAgICAvKiBEZXByaWNhdGVkIG1ldGhvZHMsIHJlbW92aW5nIGluIDQuMC4wICovXG4gICAgICAgIG5ld0FjdGlvbjogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQWN0b3IoYSwgYik7XG4gICAgICAgIH0sXG4gICAgICAgIG5ld0FjdGlvbkdyb3VwOiBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBY3Rvckdyb3VwKGEpO1xuICAgICAgICB9LFxuICAgICAgICBuZXdJbnB1dDogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW5wdXQoYSwgYik7XG4gICAgICAgIH0sXG4gICAgICAgIG5ld1Byb2Nlc3M6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb2Nlc3MoYSwgYik7XG4gICAgICAgIH1cbiAgICB9O1xuXG5SZWRzaGlmdC5hZGRCZXppZXIgPSBSZWRzaGlmdC5hZGRFYXNpbmc7XG5SZWRzaGlmdC5hZGRSdWJpeCA9IFJlZHNoaWZ0LmFkZEFjdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWRzaGlmdDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlZHNoaWZ0LmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcbiAgICBWYWx1ZXMgcm91dGUgKFJlZHNoaWZ0IGRlZmF1bHQpXG4gICAgXG4gICAgSGFuZGxlcyByYXcgdmFsdWVzIGFuZCBvdXRwdXRzIHRvIHVzZXItZGVmaW5lZCBjYWxsYmFja3NcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIHZhbHVlc1JvdXRlID0ge30sXG5cbiAgICBmaXJlQ2FsbGJhY2sgPSBmdW5jdGlvbiAobmFtZSwgb3V0cHV0LCBhY3Rvcikge1xuICAgICAgICBpZiAoYWN0b3JbbmFtZV0pIHtcbiAgICAgICAgICAgIGFjdG9yW25hbWVdLmNhbGwoYWN0b3IsIG91dHB1dCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG5bJ29uU3RhcnQnLCAnb25GcmFtZScsICdvbkNoYW5nZScsICdvbkVuZCddLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhbHVlc1JvdXRlW2tleV0gPSBmdW5jdGlvbiAob3V0cHV0LCBhY3Rvcikge1xuICAgICAgICBmaXJlQ2FsbGJhY2soa2V5LCBvdXRwdXQsIGFjdG9yKTtcbiAgICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsdWVzUm91dGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yb3V0ZXMvdmFsdWVzLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcbiAgICBQbGF5IGFjdGlvblxuICAgIFxuICAgIFRyYW5zbGF0ZSBudW1iZXJzIGZvciBhIHNldCBhbW91bnQgb2YgdGltZSwgYXBwbHlpbmcgZWFzaW5nIGlmIGRlZmluZWRcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgZWFzaW5nTWFuYWdlciA9IHJlcXVpcmUoJy4vcGxheS9lYXNpbmctbWFuYWdlcicpLFxuXG4gICAgcGxheUFjdGlvbiA9IHtcblxuICAgICAgICAvLyBbb2JqZWN0XSBEZWZhdWx0IEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgIGFjdGlvbkRlZmF1bHRzOiByZXF1aXJlKCcuL3BsYXkvZGVmYXVsdC1hY3Rpb24tcHJvcHMnKSxcblxuICAgICAgICAvLyBbb2JqZWN0XTogRGVmYXVsdCB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHZhbHVlRGVmYXVsdHM6IHJlcXVpcmUoJy4vcGxheS9kZWZhdWx0LXZhbHVlLXByb3BzJyksXG5cbiAgICAgICAgLy8gW2Jvb2xlYW5dIFByZXZlbnQgUmVkc2hpZnQgZnJvbSBhdXRvZ2VuZXJhdGluZyBFbGVtZW50LnByb3RvdHlwZS5wbGF5KClcbiAgICAgICAgc3VycHJlc3NNZXRob2Q6IHRydWUsXG5cbiAgICAgICAgLy8gW29iamVjdF0gTWV0aG9kcyB0byBhZGQgdG8gQWN0b3IucHJvdG90eXBlXG4gICAgICAgIGFjdG9yTWV0aG9kczogcmVxdWlyZSgnLi9wbGF5L2FjdG9yLW1ldGhvZHMnKSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgVXBkYXRlIEFjdGlvbiBlbGFwc2VkIHRpbWVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaW1lc3RhbXAgb2YgY3VycmVudCBmcmFtZVxuICAgICAgICAqL1xuICAgICAgICBvbkZyYW1lU3RhcnQ6IGZ1bmN0aW9uIChmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmVsYXBzZWQgKz0gKGZyYW1lRHVyYXRpb24gKiB0aGlzLmRpbGF0ZSkgKiB0aGlzLnBsYXlEaXJlY3Rpb247XG4gICAgICAgICAgICB0aGlzLmhhc0VuZGVkID0gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgQ2FsY3VsYXRlIHByb2dyZXNzIG9mIHZhbHVlIGJhc2VkIG9uIHRpbWUgZWxhcHNlZCxcbiAgICAgICAgICAgIHZhbHVlIGRlbGF5L2R1cmF0aW9uL3N0YWdnZXIgcHJvcGVydGllc1xuXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgdmFsdWUgYmVpbmcgcHJvY2Vzc2VkXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIHN0YXRlIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgICAgICovXG4gICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdmFsdWUudG8sXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NUYXJnZXQgPSAodGhpcy5wbGF5RGlyZWN0aW9uID09PSAxKSA/IDEgOiAwLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWUuY3VycmVudCxcbiAgICAgICAgICAgICAgICBwcm9ncmVzcztcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBoYXMgYSB0byBwcm9wZXJ0eSwgb3RoZXJ3aXNlIHdlIGp1c3QgcmV0dXJuIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gY2FsYy5yZXN0cmljdGVkKGNhbGMucHJvZ3Jlc3ModGhpcy5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIHZhbHVlLmR1cmF0aW9uKSAtIHZhbHVlLnN0YWdnZXIsIDAsIDEpO1xuXG4gICAgICAgICAgICAgICAgLy8gTWFyayBBY3Rpb24gYXMgTk9UIGVuZGVkIGlmIHN0aWxsIGluIHByb2dyZXNzXG4gICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0VuZGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvLyBPciwgaWYgd2UgaGF2ZSBlbmRlZCwgY2xlYXIgdmFsdWUgdGFyZ2V0XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUudG8gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5zdGVwcykge1xuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IHV0aWxzLnN0ZXBQcm9ncmVzcyhwcm9ncmVzcywgdmFsdWUuc3RlcHMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEVhc2UgdmFsdWVcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IGVhc2luZ01hbmFnZXIud2l0aGluUmFuZ2UocHJvZ3Jlc3MsIHZhbHVlLm9yaWdpbiwgdGFyZ2V0LCB2YWx1ZS5lYXNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFJldHVybiBoYXNFbmRlZCBwcm9wZXJ0eVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSGF2ZSBhbGwgVmFsdWVzIGhpdCAxIHByb2dyZXNzP1xuICAgICAgICAqL1xuICAgICAgICBoYXNFbmRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFzRW5kZWQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXlBY3Rpb247XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcGxheS5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXG4gICAgUnVuIHBoeXNpY3Mgc2ltdWxhdGlvblxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG4gICAgc2ltdWxhdGUgPSByZXF1aXJlKCcuL3J1bi9zaW11bGF0ZS5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIC8vIFtvYmplY3RdIERlZmF1bHQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICBhY3Rpb25EZWZhdWx0czogcmVxdWlyZSgnLi9ydW4vZGVmYXVsdC1hY3Rpb24tcHJvcHMnKSxcblxuICAgIC8vIFtvYmplY3RdIERlZmF1bHQgdmFsdWUgcHJvcGVydGllc1xuICAgIHZhbHVlRGVmYXVsdHM6IHJlcXVpcmUoJy4vcnVuL2RlZmF1bHQtdmFsdWUtcHJvcHMnKSxcblxuICAgIHBhcnNlOiByZXF1aXJlKCcuL2dlbmVyaWMvcGFyc2UtYXJncycpLFxuXG4gICAgLy8gW2Jvb2xlYW5dOiBUZWxsIFJlZHNoaWZ0IHRoaXMgcnViaXggY2FsY3VsYXRlcyBhIG5ldyB2ZWxvY2l0eSBpdHNlbGZcbiAgICBjYWxjdWxhdGVzVmVsb2NpdHk6IHRydWUsXG4gICAgXG4gICAgLypcbiAgICAgICAgU2ltdWxhdGUgdGhlIFZhbHVlJ3MgcGVyLWZyYW1lIG1vdmVtZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSBvZiBjdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbVmFsdWVdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRHVyYXRpb24gb2YgZnJhbWUgaW4gbXNcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZVxuICAgICovXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKGtleSwgdmFsdWUsIGZyYW1lRHVyYXRpb24pIHtcbiAgICAgICAgdmFsdWUudmVsb2NpdHkgPSBzaW11bGF0ZSh2YWx1ZS5zaW11bGF0ZSwgdmFsdWUsIGZyYW1lRHVyYXRpb24sIHRoaXMuc3RhcnRlZCk7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jdXJyZW50ICsgY2FsYy5zcGVlZFBlckZyYW1lKHZhbHVlLnZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEhhcyB0aGlzIGFjdGlvbiBlbmRlZD9cbiAgICAgICAgXG4gICAgICAgIFVzZSBhIGZyYW1lY291bnRlciB0byBzZWUgaWYgQWN0aW9uIGhhcyBjaGFuZ2VkIGluIHRoZSBsYXN0IHggZnJhbWVzXG4gICAgICAgIGFuZCBkZWNsYXJlIGVuZGVkIGlmIG5vdFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogSGFzIEFjdGlvbiBjaGFuZ2VkP1xuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSGFzIEFjdGlvbiBlbmRlZD9cbiAgICAqL1xuICAgIGhhc0VuZGVkOiBmdW5jdGlvbiAoaGFzQ2hhbmdlZCkge1xuICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gaGFzQ2hhbmdlZCA/IDAgOiB0aGlzLmluYWN0aXZlRnJhbWVzICsgMTtcbiAgICAgICAgcmV0dXJuICh0aGlzLmluYWN0aXZlRnJhbWVzID4gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcyk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBMaW1pdCBvdXRwdXQgdG8gdmFsdWUgcmFuZ2UsIGlmIGFueVxuICAgICAgICBcbiAgICAgICAgSWYgdmVsb2NpdHkgaXMgYXQgb3IgbW9yZSB0aGFuIHJhbmdlLCBhbmQgdmFsdWUgaGFzIGEgYm91bmNlIHByb3BlcnR5LFxuICAgICAgICBydW4gdGhlIGJvdW5jZSBzaW11bGF0aW9uXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IENhbGN1bGF0ZWQgb3V0cHV0XG4gICAgICAgIEBwYXJhbSBbVmFsdWVdOiBDdXJyZW50IFZhbHVlXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IExpbWl0LWFkanVzdGVkIG91dHB1dFxuICAgICovXG4gICAgbGltaXQ6IGZ1bmN0aW9uIChvdXRwdXQsIHZhbHVlKSB7XG4gICAgICAgIHZhciBpc091dHNpZGVNYXggPSAob3V0cHV0ID49IHZhbHVlLm1heCksXG4gICAgICAgICAgICBpc091dHNpZGVNaW4gPSAob3V0cHV0IDw9IHZhbHVlLm1pbiksXG4gICAgICAgICAgICBpc091dHNpZGVSYW5nZSA9IGlzT3V0c2lkZU1heCB8fCBpc091dHNpZGVNaW47XG4gICAgICAgIFxuICAgICAgICBpZiAoaXNPdXRzaWRlUmFuZ2UpIHtcbiAgICAgICAgICAgIG91dHB1dCA9IGNhbGMucmVzdHJpY3RlZChvdXRwdXQsIHZhbHVlLm1pbiwgdmFsdWUubWF4KTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlLmJvdW5jZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc2ltdWxhdGUoJ2JvdW5jZScsIHZhbHVlKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5jYXB0dXJlKSB7XG4gICAgICAgICAgICAgICAgc2ltdWxhdGUoJ2NhcHR1cmUnLCB2YWx1ZSwgaXNPdXRzaWRlTWF4ID8gdmFsdWUubWF4IDogdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9ydW4uanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICAgIFJldHVybiBjdXJyZW50IHZhbHVlIGFuZCBpbW1lZGlldGx5IGVuZFxuKi9cblwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIHBhcnNlOiByZXF1aXJlKCcuL2dlbmVyaWMvcGFyc2UtYXJncycpLFxuXG4gICAvKlxuICAgICAgICBQcm9jZXNzIG5ldyB2YWx1ZVxuICAgICAgICBcbiAgICAgICAgUmV0dXJuIGV4aXN0aW5nIGN1cnJlbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiB2YWx1ZVxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCB2YWx1ZVxuICAgICovXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmN1cnJlbnQ7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBIYXMgQWN0aW9uIGVuZGVkP1xuICAgICAgICBcbiAgICAgICAgUmV0dXJucyB0cnVlIHRvIGVuZCBpbW1lZGlldGx5XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogdHJ1ZVxuICAgICovXG4gICAgaGFzRW5kZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZmlyZS5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXG4gICAgVHJhY2sgdXNlciBpbnB1dFxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG4gICAgZ2VuZXJpY1BhcnNlciA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9wYXJzZS1hcmdzJyksXG4gICAgUG9pbnRlciA9IHJlcXVpcmUoJy4uL2lucHV0L1BvaW50ZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICB2YWx1ZURlZmF1bHRzOiByZXF1aXJlKCcuL3RyYWNrL2RlZmF1bHQtdmFsdWUtcHJvcHMnKSxcblxuICAgIC8qXG4gICAgICAgIFBhcnNlIElucHV0IGFyZ3VtZW50c1xuICAgICovXG4gICAgcGFyc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHByb3BzID0gZ2VuZXJpY1BhcnNlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpLFxuICAgICAgICAgICAgaW5wdXQgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIC8vIENyZWF0ZSBQb2ludGVyIGlmIHRoaXMgaXNuJ3QgYW4gSW5wdXRcbiAgICAgICAgcHJvcHMuaW5wdXQgPSAoIWlucHV0LmN1cnJlbnQpID8gbmV3IFBvaW50ZXIoaW5wdXQpIDogaW5wdXQ7XG5cbiAgICAgICAgLy8gU2V0IGlucHV0IG9yaWdpbiBpZiBub3QgdXNlci1kZWZpbmVkXG4gICAgICAgIGlmICghcHJvcHMuaW5wdXRPcmlnaW4pIHtcbiAgICAgICAgICAgIHByb3BzLmlucHV0T3JpZ2luID0gaW5wdXQuZ2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBVcGRhdGUgaW5wdXQgb2Zmc2V0XG4gICAgKi9cbiAgICBvbkZyYW1lU3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9IGNhbGMub2Zmc2V0KHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuY3VycmVudCk7XG4gICAgfSxcbiAgICAgICAgXG4gICAgLypcbiAgICAgICAgTW92ZSBWYWx1ZSByZWxhdGl2ZSB0byBJbnB1dCBtb3ZlbWVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgY3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkgPyB2YWx1ZS5vcmlnaW4gKyB0aGlzLmlucHV0T2Zmc2V0W2tleV0gOiB2YWx1ZS5jdXJyZW50O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSGFzIHRoaXMgQWN0aW9uIGVuZGVkPyBcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBGYWxzZSB0byBtYWtlIHVzZXIgbWFudWFsbHkgZmluaXNoIC50cmFjaygpXG4gICAgKi9cbiAgICBoYXNFbmRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdHJhY2suanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICAgIFJldHVybiBjdXJyZW50IHZhbHVlIGFuZCBpbW1lZGlldGx5IGVuZFxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgcGxheSA9IHJlcXVpcmUoJy4vcGxheS5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIHN1cnByZXNzTWV0aG9kOiB0cnVlLFxuXG4gICAgYWN0b3JNZXRob2RzOiB7XG4gICAgICAgIHNlZWs6IGZ1bmN0aW9uIChzZWVrVG8pIHtcbiAgICAgICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZHVyYXRpb24gKiBzZWVrVG87XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gJ3NlZWsnO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAvKlxuICAgICAgICBQcm9jZXNzIG5ldyB2YWx1ZVxuICAgICAgICBcbiAgICAgICAgUmV0dXJuIGV4aXN0aW5nIGN1cnJlbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiB2YWx1ZVxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCB2YWx1ZVxuICAgICovXG4gICAgcHJvY2VzczogcGxheS5wcm9jZXNzLFxuICAgIFxuICAgIC8qXG4gICAgICAgIEhhcyBBY3Rpb24gZW5kZWQ/XG4gICAgICAgIFxuICAgICAgICBSZXR1cm5zIHRydWUgdG8gZW5kIGFuaW1hdGlvbiwgYW5kIHNldHMgcnViaXggdG8gJ3BsYXknXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogdHJ1ZVxuICAgICovXG4gICAgaGFzRW5kZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5ydWJpeCA9ICdwbGF5JztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvc2Vlay5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAncHgnXG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdkZWcnXG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FuZ2xlLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIGdldENvbG9yVmFsdWVzID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZ2V0LWNvbG9yLXZhbHVlcycpLFxuICAgIGZ1bmN0aW9uQ3JlYXRlID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlJyksXG4gICAgZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyksXG4gICAgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5oc2w7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIEh1ZToge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAzNjBcbiAgICAgICAgfSxcbiAgICAgICAgU2F0dXJhdGlvbjogZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIExpZ2h0bmVzczogZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIEFscGhhOiBkZWZhdWx0UHJvcHMub3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdoc2wnKSA+IC0xKTtcbiAgICB9LFxuICAgIFxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGdldENvbG9yVmFsdWVzKHZhbHVlLCB0ZXJtcyk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uQ3JlYXRlKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnLCAnLCAyKSwgJ2hzbGEnKTtcbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIGdldENvbG9yVmFsdWVzID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZ2V0LWNvbG9yLXZhbHVlcycpLFxuICAgIGZ1bmN0aW9uQ3JlYXRlID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlJyksXG4gICAgZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyksXG4gICAgY29sb3JEZWZhdWx0cyA9IGRlZmF1bHRQcm9wcy5jb2xvcixcbiAgICB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLmNvbG9ycztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgUmVkOiBjb2xvckRlZmF1bHRzLFxuICAgICAgICBHcmVlbjogY29sb3JEZWZhdWx0cyxcbiAgICAgICAgQmx1ZTogY29sb3JEZWZhdWx0cyxcbiAgICAgICAgQWxwaGE6IGRlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ3JnYicpID4gLTEpO1xuICAgIH0sXG4gICAgXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZ2V0Q29sb3JWYWx1ZXModmFsdWUsIHRlcm1zKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb25DcmVhdGUoY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgdGVybXMsICcsICcsIDIpLCAncmdiYScpO1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9yZ2IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciByZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogcmdiLmRlZmF1bHRQcm9wcyxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJyMnKSA+IC0xKTtcbiAgICB9LFxuICAgIFxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHIsIGcsIGI7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMik7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDMsIDIpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cig1LCAyKTtcblxuICAgICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAxKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDMsIDEpO1xuICAgICAgICAgICAgciArPSByO1xuICAgICAgICAgICAgZyArPSBnO1xuICAgICAgICAgICAgYiArPSBiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgICAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgICAgICAgIEFscGhhOiAxXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIHJnYi5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgcmdiID0gcmVxdWlyZSgnLi9yZ2InKSxcbiAgICBoc2wgPSByZXF1aXJlKCcuL2hzbCcpLFxuICAgIGhleCA9IHJlcXVpcmUoJy4vaGV4JyksXG4gICAgc3VwcG9ydGVkID0gW3JnYiwgaHNsLCBoZXhdLFxuICAgIG51bVN1cHBvcnRlZCA9IDMsXG5cbiAgICBydW5TdXBwb3J0ZWQgPSBmdW5jdGlvbiAobWV0aG9kLCB2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVN1cHBvcnRlZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3VwcG9ydGVkW2ldLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRlZFtpXVttZXRob2RdKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiB1dGlscy5tZXJnZShyZ2IuZGVmYXVsdFByb3BzLCBoc2wuZGVmYXVsdFByb3BzKSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gcmdiLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2wudGVzdCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHJ1blN1cHBvcnRlZCgnc3BsaXQnLCB2YWx1ZSk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZXMuUmVkKSA/IHJnYi5jb21iaW5lKHZhbHVlcykgOiBoc2wuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBweERlZmF1bHRzID0gcmVxdWlyZSgnLi9weCcpLmRlZmF1bHRQcm9wcyxcbiAgICBzcGxpdFNwYWNlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkJyksXG4gICAgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5wb3NpdGlvbnM7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiBweERlZmF1bHRzLFxuICAgICAgICBcbiAgICAvKlxuICAgICAgICBTcGxpdCBwb3NpdGlvbnMgaW4gZm9ybWF0IFwiWCBZIFpcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQb3NpdGlvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjAlIDMwJSAwXCIgLT4gezIwJSwgMzAlLCAwfVxuICAgICAgICAgICAgXCIyMCUgMzAlXCIgLT4gezIwJSwgMzAlfVxuICAgICAgICAgICAgXCIyMCVcIiAtPiB7MjAlLCAyMCV9XG4gICAgKi9cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbnMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKSxcbiAgICAgICAgICAgIG51bVBvc2l0aW9ucyA9IHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgICBzcGxpdFZhbHVlID0ge1xuICAgICAgICAgICAgICAgIFg6IHBvc2l0aW9uc1swXSxcbiAgICAgICAgICAgICAgICBZOiAobnVtUG9zaXRpb25zID4gMSkgPyBwb3NpdGlvbnNbMV0gOiBwb3NpdGlvbnNbMF1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgaWYgKG51bVBvc2l0aW9ucyA+IDIpIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWUuWiA9IHBvc2l0aW9uc1syXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCB0ZXJtcywgJyAnKTtcbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcG9zaXRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5kaW1lbnNpb25zLFxuICAgIHB4RGVmYXVsdHMgPSByZXF1aXJlKCcuL3B4JykuZGVmYXVsdFByb3BzLFxuICAgIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBzcGxpdFNwYWNlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiBweERlZmF1bHRzLFxuICAgIFxuICAgIC8qXG4gICAgICAgIFNwbGl0IGRpbWVuc2lvbnMgaW4gZm9ybWF0IFwiVG9wIFJpZ2h0IEJvdHRvbSBMZWZ0XCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogRGltZW5zaW9uIHZhbHVlc1xuICAgICAgICAgICAgXCIyMHB4IDAgMzBweCA0MHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDQwcHh9XG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHggMFwiIC0+IHsyMHB4LCAwLCAyMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4XCIgLT4gezIwcHgsIDIwcHgsIDIwcHgsIDIwcHh9XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCBUL1IvQi9MIG1ldHJpY3NcbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGRpbWVuc2lvbnMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKSxcbiAgICAgICAgICAgIG51bURpbWVuc2lvbnMgPSBkaW1lbnNpb25zLmxlbmd0aCxcbiAgICAgICAgICAgIGp1bXBCYWNrID0gKG51bURpbWVuc2lvbnMgIT09IDEpID8gMiA6IDEsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGogPSAwLFxuICAgICAgICAgICAgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGZvciAoOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlW3Rlcm1zW2ldXSA9IGRpbWVuc2lvbnNbal07XG5cbiAgICAgICAgICAgIC8vIEp1bXAgYmFjayAodG8gc3RhcnQpIGNvdW50ZXIgaWYgd2UndmUgcmVhY2hlZCB0aGUgZW5kIG9mIG91ciB2YWx1ZXNcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIGogPSAoaiA9PT0gbnVtRGltZW5zaW9ucykgPyBqIC0ganVtcEJhY2sgOiBqO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnICcpO1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9kaW1lbnNpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY29sb3IgPSByZXF1aXJlKCcuL2NvbG9yJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBweERlZmF1bHRzID0gcmVxdWlyZSgnLi9weCcpLmRlZmF1bHRQcm9wcyxcbiAgICB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLnNoYWRvdyxcbiAgICBzcGxpdFNwYWNlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkJyksXG4gICAgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIHNoYWRvd1Rlcm1zID0gdGVybXMuc2xpY2UoMCw0KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHV0aWxzLm1lcmdlKGNvbG9yLmRlZmF1bHRQcm9wcywge1xuICAgICAgICBYOiBweERlZmF1bHRzLFxuICAgICAgICBZOiBweERlZmF1bHRzLFxuICAgICAgICBSYWRpdXM6IHB4RGVmYXVsdHMsXG4gICAgICAgIFNwcmVhZDogcHhEZWZhdWx0c1xuICAgIH0pLFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgc2hhZG93IHByb3BlcnRpZXMgXCJYIFkgUmFkaXVzIFNwcmVhZCBDb2xvclwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFNoYWRvdyBwcm9wZXJ0eVxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBiaXRzID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSksXG4gICAgICAgICAgICBudW1CaXRzID0gYml0cy5sZW5ndGgsXG4gICAgICAgICAgICBoYXNSZWFjaGVkQ29sb3IgPSBmYWxzZSxcbiAgICAgICAgICAgIGNvbG9yUHJvcCA9ICcnLFxuICAgICAgICAgICAgdGhpc0JpdCxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnVtQml0czsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzQml0ID0gYml0c1tpXTtcblxuICAgICAgICAgICAgLy8gSWYgd2UndmUgcmVhY2hlZCB0aGUgY29sb3IgcHJvcGVydHksIGFwcGVuZCB0byBjb2xvciBzdHJpbmdcbiAgICAgICAgICAgIGlmIChoYXNSZWFjaGVkQ29sb3IgfHwgY29sb3IudGVzdCh0aGlzQml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IHRoaXNCaXQ7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3BsaXRWYWx1ZVt0ZXJtc1tpXV0gPSB0aGlzQml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoc3BsaXRWYWx1ZSwgY29sb3Iuc3BsaXQoY29sb3JQcm9wKSk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHNoYWRvd1Rlcm1zLCAnICcpICsgY29sb3IuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZURPTSA9IHJlcXVpcmUoJy4vZG9tL3N0eWxlLWRvbScpLFxuICAgIGdldHRlclNldHRlciA9IHJlcXVpcmUoJy4uL2luYy9nZXR0ZXItc2V0dGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLypcbiAgICAgICAgR2V0IG9yIHNldCBhdHRyaWJ1dGVcblxuICAgICAgICBAcGFyYW0gW29iamVjdCB8fCBzdHJpbmddOiBQcm9wZXJ0aWVzIHRvIHNldCBvciBuYW1lIG9mIGF0dHJpYnV0ZSB0byBnZXQvc2V0XG4gICAgICAgIEBwYXJhbSBbc3RyaW5nIHx8IG51bWJlcl06IFByb3BlcnR5IHRvIHNldCBpZiBzZXR0aW5nIHNpbmdsZSBwcm9wXG4gICAgKi9cbiAgICBhdHRyOiBmdW5jdGlvbiAob3B0cywgcHJvcCkge1xuICAgICAgICByZXR1cm4gZ2V0dGVyU2V0dGVyLmNhbGwodGhpcywgb3B0cywgcHJvcCxcbiAgICAgICAgICAgIC8vIEdldHRlclxuICAgICAgICAgICAgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBTZXR0ZXJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChuYW1lLCBwcm9wKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCBwcm9wKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgU3R5bGUgRE9NIGVsZW1lbnRcblxuICAgICAgICBAcGFyYW0gW3N0cmluZyB8fCBvYmplY3RdOiBFaXRoZXIgbmFtZSBvZiBzdHlsZSB0byBnZXQvc2V0IG9yIGFuIG9iamVjdCBvZiBwcm9wZXJ0aWVzIHRvIHNldFxuICAgICAgICBAcGFybWEgW3N0cmluZ10gKG9wdGlvbmFsKTogUHJvcGVydHkgdG8gc2V0XG4gICAgICAgIEByZXR1cm4gW29iamVjdCB8fCBFbGVtZW50XTogUmV0dXJucyBjYWxjdWxhdGVkIHN0eWxlIGlmIGdldCwgb3IgRWxlbWVudCBpZiBzZXRcbiAgICAqL1xuICAgIHN0eWxlOiBmdW5jdGlvbiAob3B0cywgcHJvcCkge1xuICAgICAgICByZXR1cm4gZ2V0dGVyU2V0dGVyLmNhbGwodGhpcywgb3B0cywgcHJvcCxcbiAgICAgICAgICAgIC8vIEdldHRlclxuICAgICAgICAgICAgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGVET00uZ2V0KHRoaXMuZWxlbWVudCwgbmFtZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gU2V0dGVyXG4gICAgICAgICAgICBmdW5jdGlvbiAobmFtZSwgcnVsZSkge1xuICAgICAgICAgICAgICAgIHN0eWxlRE9NLnNldCh0aGlzLmVsZW1lbnQsIG5hbWUsIHJ1bGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rvci10eXBlcy9kb20uanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBidWlsZCA9IHJlcXVpcmUoJy4vY3NzL2J1aWxkJyksXG4gICAgdHlwZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3R5cGUtbG9va3VwJyksXG4gICAgQ1NTX0NBQ0hFID0gJ19jc3NDYWNoZSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHR5cGVNYXA6IHR5cGVNYXAsXG4gICAgXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChvdXRwdXQsIGFjdG9yKSB7XG4gICAgICAgIGFjdG9yW0NTU19DQUNIRV0gPSBhY3RvcltDU1NfQ0FDSEVdIHx8IHt9O1xuICAgICAgICBhY3Rvci5zdHlsZShidWlsZChvdXRwdXQsIGFjdG9yW0NTU19DQUNIRV0pKTtcbiAgICB9XG4gICAgXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm91dGVzL2Nzcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChvdXRwdXQsIGFjdG9yKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvdXRwdXQpIHtcbiAgICAgICAgICAgIGlmIChvdXRwdXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGFjdG9yLmF0dHIoa2V5LCBvdXRwdXRba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm91dGVzL2F0dHIuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjcmVhdGVTdHlsZXMgPSByZXF1aXJlKCcuL3BhdGgvYnVpbGQuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICB0eXBlTWFwOiB7XG4gICAgICAgIHN0cm9rZTogJ2NvbG9yJ1xuICAgIH0sXG5cbiAgICBvblN0YXJ0OiBmdW5jdGlvbiAob3V0cHV0LCBhY3Rvcikge1xuICAgICAgICBpZiAoYWN0b3IuYWN0b3IpIHtcbiAgICAgICAgICAgIGFjdG9yLnBhdGhMZW5ndGggPSBhY3Rvci5lbGVtZW50LmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAob3V0cHV0LCBhY3Rvcikge1xuICAgICAgICBhY3Rvci5zdHlsZShjcmVhdGVTdHlsZXMob3V0cHV0LCBhY3Rvci5wYXRoTGVuZ3RoKSk7XG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvdXRlcy9wYXRoLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgQWN0b3JHcm91cCA9IHJlcXVpcmUoJy4vQWN0b3JHcm91cCcpO1xuXG4vKlxuICAgIENyZWF0ZSBhbiBBY3Rvckdyb3VwIGJhc2VkIG9uIGEgc2VsZWN0aW9uIG9mIERPTSBub2Rlc1xuXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3QgfHwgalF1ZXJ5IG9iamVjdF06XG4gICAgICAgIElmIHN0cmluZywgdHJlYXRlZCBhcyBzZWxlY3Rvci5cbiAgICAgICAgSWYgbm90LCB0cmVhdGVkIGFzIHByZWV4aXN0aW5nIE5vZGVMaXN0IHx8IGpRdWVyeSBvYmplY3QuXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICB2YXIgbm9kZXMgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yLFxuICAgICAgICBlbGVtZW50cyA9IFtdO1xuXG4gICAgLy8gSWYgalF1ZXJ5IHNlbGVjdGlvbiwgZ2V0IGFycmF5IG9mIEVsZW1lbnRzXG4gICAgaWYgKG5vZGVzLmdldCkge1xuICAgICAgICBlbGVtZW50cyA9IG5vZGVzLmdldCgpO1xuXG4gICAgLy8gT3IgY29udmVydCBOb2RlTGlzdCB0byBhcnJheVxuICAgIH0gZWxzZSBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChub2Rlcyk7XG5cbiAgICAvLyBPciBpZiBpdCdzIGp1c3QgYW4gRWxlbWVudCwgcHV0IGludG8gYXJyYXlcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50cy5wdXNoKG5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEFjdG9yR3JvdXAoZWxlbWVudHMsIHsgdHlwZTogJ2RvbScgfSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0b3Ivc2VsZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgQWN0b3IsXG4gICAgQWN0b3JHcm91cCxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIGdlbmVyYXRlTWV0aG9kSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9hY3Rvci9zeXN0ZW0vZ2VuZXJhdGUtaXRlcmF0b3InKSxcbiAgICBnZW5lcmljQWN0aW9uUHJvcHMgPSByZXF1aXJlKCcuL2dlbmVyaWMvZGVmYXVsdC1hY3Rpb24tcHJvcHMnKSxcbiAgICBnZW5lcmljVmFsdWVQcm9wcyA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9kZWZhdWx0LXZhbHVlLXByb3BzJyksXG5cbiAgICBNb2RNYW5hZ2VyID0gcmVxdWlyZSgnLi4vaW5jL01vZE1hbmFnZXInKSxcblxuICAgIGFjdGlvbk1hbmFnZXIgPSBuZXcgTW9kTWFuYWdlcigpO1xuLypcbiAgICBBZGQgbW9kdWxlIHRvIEFjdGlvbk1hbmFnZXJcblxuICAgIENyZWF0ZXMgYSBuZXcgQWN0aW9uIGZvciBFbGVtZW50c1xuKi9cbmFjdGlvbk1hbmFnZXIuZXh0ZW5kID0gZnVuY3Rpb24gKG5hbWUsIG1vZCkge1xuICAgIHZhciBtZXRob2ROYW1lID0gJyc7XG5cbiAgICAvKlxuICAgICAgICBHZW5lcmF0ZSBuZXcgbWV0aG9kIGZvciBFbGVtZW50cyBpZiBtb2R1bGUgZG9lc24ndCBoYXZlIGFcbiAgICAgICAgc3VycHJlc3NNZXRob2QgZmxhZyBhbmQgRWxlbWVudCBkb2Vzbid0IGFscmVhZHkgaGF2ZSBhXG4gICAgICAgIG1ldGhvZCB3aXRoIHRoYXQgbmFtZVxuICAgICovXG4gICAgaWYgKCFtb2Quc3VycHJlc3NNZXRob2QgJiYgIUFjdG9yLnByb3RvdHlwZVtuYW1lXSkge1xuICAgICAgICBBY3Rvci5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbiA9IG5hbWU7XG4gICAgICAgICAgICB0aGlzLnNldChtb2QucGFyc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgQWN0b3JHcm91cC5wcm90b3R5cGVbbmFtZV0gPSBnZW5lcmF0ZU1ldGhvZEl0ZXJhdG9yKG5hbWUpO1xuICAgIH1cblxuICAgIC8vIElmIG1vZHVsZSBoYXMgbWV0aG9kcyB0byBhZGQgdG8gRWxlbWVudC5wcm90b3R5cGVcbiAgICBpZiAobW9kLmFjdG9yTWV0aG9kcykge1xuICAgICAgICBmb3IgKG1ldGhvZE5hbWUgaW4gbW9kLmFjdG9yTWV0aG9kcykge1xuICAgICAgICAgICAgaWYgKG1vZC5hY3Rvck1ldGhvZHMuaGFzT3duUHJvcGVydHkobWV0aG9kTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBBY3Rvci5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBtb2QuYWN0b3JNZXRob2RzW21ldGhvZE5hbWVdO1xuICAgICAgICAgICAgICAgIEFjdG9yR3JvdXAucHJvdG90eXBlW21ldGhvZE5hbWVdID0gZ2VuZXJhdGVNZXRob2RJdGVyYXRvcihtZXRob2ROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1lcmdlIGFjdGlvbiBwcm9wcyB3aXRoIGRlZmF1bHRzXG4gICAgbW9kLmFjdGlvbkRlZmF1bHRzID0gbW9kLmFjdGlvbkRlZmF1bHRzID8gdXRpbHMubWVyZ2UoZ2VuZXJpY0FjdGlvblByb3BzLCBtb2QuYWN0aW9uRGVmYXVsdHMpIDogZ2VuZXJpY0FjdGlvblByb3BzO1xuXG4gICAgLy8gTWVyZ2UgdmFsdWUgcHJvcHMgd2l0aCBkZWZhdWx0c1xuICAgIG1vZC52YWx1ZURlZmF1bHRzID0gbW9kLnZhbHVlRGVmYXVsdHMgPyB1dGlscy5tZXJnZShnZW5lcmljVmFsdWVQcm9wcywgbW9kLnZhbHVlRGVmYXVsdHMpIDogZ2VuZXJpY1ZhbHVlUHJvcHM7XG5cbiAgICAvLyBDYWxsIHBhcmVudCBleHRlbmQgbWV0aG9kXG4gICAgTW9kTWFuYWdlci5wcm90b3R5cGUuZXh0ZW5kLmNhbGwodGhpcywgbmFtZSwgbW9kKTtcbn07XG5cbmFjdGlvbk1hbmFnZXIuc2V0QWN0b3IgPSBmdW5jdGlvbiAoYWN0b3IpIHtcbiAgICBBY3RvciA9IGFjdG9yO1xufTtcblxuYWN0aW9uTWFuYWdlci5zZXRBY3Rvckdyb3VwID0gZnVuY3Rpb24gKGFjdG9yR3JvdXApIHtcbiAgICBBY3Rvckdyb3VwID0gYWN0b3JHcm91cDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYWN0aW9uTWFuYWdlcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9tYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXG4gICAgRWFzaW5nIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgXG4gICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgICAgIFxuICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgICAgICBcbiAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgICAgIFxuICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi8uLi9pbmMvY2FsYy5qcycpLFxuICAgIEJlemllciA9IHJlcXVpcmUoJy4vYmV6aWVyLmpzJyksXG5cbiAgICBFQVNFX0lOID0gJ0luJyxcbiAgICBFQVNFX09VVCA9ICdPdXQnLFxuICAgIEVBU0VfSU5fT1VUID0gRUFTRV9JTiArIEVBU0VfT1VULFxuICAgIFxuICAgIC8vIEdlbmVyYXRlIGVhc2luZyBmdW5jdGlvbiB3aXRoIHByb3ZpZGVkIHBvd2VyXG4gICAgZ2VuZXJhdGVQb3dlckVhc2luZyA9IGZ1bmN0aW9uIChwb3dlcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3cocHJvZ3Jlc3MsIHBvd2VyKTtcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgRWFjaCBvZiB0aGVzZSBiYXNlIGZ1bmN0aW9ucyBpcyBhbiBlYXNlSW5cbiAgICAgICAgXG4gICAgICAgIE9uIGluaXQsIHdlIHVzZSBFYXNpbmdGdW5jdGlvbi5taXJyb3IgYW5kIC5yZXZlcnNlIHRvIGdlbmVyYXRlIGVhc2VJbk91dCBhbmRcbiAgICAgICAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuICAgICovXG4gICAgYmFzZUVhc2luZyA9IHtcbiAgICAgICAgY2lyYzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwcm9ncmVzcykpO1xuICAgICAgICB9LFxuICAgICAgICBiYWNrOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHZhciBzdHJlbmd0aCA9IDEuNTtcblxuICAgICAgICAgICAgcmV0dXJuIChwcm9ncmVzcyAqIHByb2dyZXNzKSAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBNaXJyb3IgZWFzaW5nXG4gICAgICAgIFxuICAgICAgICBNaXJyb3JzIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgaGVyZSBmb3IgbWlycm9yaW5nIGFuXG4gICAgICAgIGVhc2VJbiBpbnRvIGFuIGVhc2VJbk91dFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtaXJyb3JcbiAgICAgICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiAgICAqL1xuICAgIG1pcnJvckVhc2luZyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgbWV0aG9kKSB7XG4gICAgICAgIHJldHVybiAocHJvZ3Jlc3MgPD0gMC41KSA/IG1ldGhvZCgyICogcHJvZ3Jlc3MpIC8gMiA6ICgyIC0gbWV0aG9kKDIgKiAoMSAtIHByb2dyZXNzKSkpIC8gMjtcbiAgICB9LFxuICAgICAgICAgICAgXG4gICAgLypcbiAgICAgICAgUmV2ZXJzZSBlYXNpbmdcbiAgICAgICAgXG4gICAgICAgIFJldmVyc2VzIHRoZSBvdXRwdXQgb2YgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBmb3IgZmxpcHBpbmcgZWFzZUluXG4gICAgICAgIGN1cnZlIHRvIGFuIGVhc2VPdXQuXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIHJldmVyc2VcbiAgICAgICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiAgICAqL1xuICAgIHJldmVyc2VFYXNpbmcgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIG1ldGhvZCkge1xuICAgICAgICByZXR1cm4gMSAtIG1ldGhvZCgxIC0gcHJvZ3Jlc3MpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQWRkIG5ldyBlYXNpbmcgZnVuY3Rpb25cbiAgICAgICAgXG4gICAgICAgIFRha2VzIG5hbWUgYW5kIGdlbmVyYXRlcyBuYW1lSW4sIG5hbWVPdXQsIG5hbWVJbk91dCwgYW5kIGVhc2luZyBmdW5jdGlvbnMgdG8gbWF0Y2hcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogQmFzZSBuYW1lIG9mIHRoZSBlYXNpbmcgZnVuY3Rpb25zIHRvIGdlbmVyYXRlXG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBCYXNlIGVhc2luZyBmdW5jdGlvbiwgYXMgYW4gZWFzZUluLCBmcm9tIHdoaWNoIHRvIGdlbmVyYXRlIE91dCBhbmQgSW5PdXRcbiAgICAqL1xuICAgIGdlbmVyYXRlVmFyaWF0aW9ucyA9IGZ1bmN0aW9uIChuYW1lLCBtZXRob2QpIHtcbiAgICAgICAgdmFyIGVhc2VJbiA9IG5hbWUgKyBFQVNFX0lOLFxuICAgICAgICAgICAgZWFzZU91dCA9IG5hbWUgKyBFQVNFX09VVCxcbiAgICAgICAgICAgIGVhc2VJbk91dCA9IG5hbWUgKyBFQVNFX0lOX09VVCxcbiAgICAgICAgICAgIGJhc2VOYW1lID0gZWFzZUluLFxuICAgICAgICAgICAgcmV2ZXJzZU5hbWUgPSBlYXNlT3V0O1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgSW4gZnVuY3Rpb25cbiAgICAgICAgZWFzaW5nTWFuYWdlcltiYXNlTmFtZV0gPSBtZXRob2Q7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBPdXQgZnVuY3Rpb24gYnkgcmV2ZXJzaW5nIHRoZSB0cmFuc2l0aW9uIGN1cnZlXG4gICAgICAgIGVhc2luZ01hbmFnZXJbcmV2ZXJzZU5hbWVdID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gcmV2ZXJzZUVhc2luZyhwcm9ncmVzcywgZWFzaW5nTWFuYWdlcltiYXNlTmFtZV0pO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBJbk91dCBmdW5jdGlvbiBieSBtaXJyb3JpbmcgdGhlIHRyYW5zaXRpb24gY3VydmVcbiAgICAgICAgZWFzaW5nTWFuYWdlcltlYXNlSW5PdXRdID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gbWlycm9yRWFzaW5nKHByb2dyZXNzLCBlYXNpbmdNYW5hZ2VyW2Jhc2VOYW1lXSk7XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIE1vZE1hbmFnZXIgPSByZXF1aXJlKCcuLi8uLi9pbmMvTW9kTWFuYWdlcicpLFxuICAgIGVhc2luZ01hbmFnZXIgPSBuZXcgTW9kTWFuYWdlcigpO1xuXG4vKlxuICAgIEV4dGVuZCBlYXNpbmcgZnVuY3Rpb25zXG4qL1xuZWFzaW5nTWFuYWdlci5leHRlbmQgPSBmdW5jdGlvbiAobmFtZSwgeDEsIHkxLCB4MiwgeTIpIHtcbiAgICAvLyBJZiB0aGlzIGlzIGFuIGVhc2luZyBmdW5jdGlvbiwgZ2VuZXJhdGUgdmFyaWF0aW9uc1xuICAgIGlmICh0eXBlb2YgeDEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZ2VuZXJhdGVWYXJpYXRpb25zKG5hbWUsIHgxKTtcblxuICAgIC8vIE90aGVyd2lzZSBpdCdzIGEgYmV6aWVyIGN1cnZlLCBzbyBnZW5lcmF0ZSBuZXcgQmV6aWVyIGN1cnZlIGZ1bmN0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpc1tuYW1lXSA9IG5ldyBCZXppZXIoeDEsIHkxLCB4MiwgeTIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xufTtcblxuLypcbiAgICBFYXNlIHZhbHVlIHdpdGhpbiByYW5nZWQgcGFyYW1ldGVyc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgYmV0d2VlbiAwIGFuZCAxXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAwIHByb2dyZXNzXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAxIHByb2dyZXNzXG4gICAgQHBhcmFtIFtzdHJpbmddOiBFYXNpbmcgdG8gdXNlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBBbXBsaWZ5IHByb2dyZXNzIG91dCBvZiBzcGVjaWZpZWQgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBvZiBlYXNlZCBwcm9ncmVzcyBpbiByYW5nZVxuKi8gIFxuZWFzaW5nTWFuYWdlci53aXRoaW5SYW5nZSA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UsIGVzY2FwZUFtcCkge1xuICAgIHZhciBwcm9ncmVzc0xpbWl0ZWQgPSBjYWxjLnJlc3RyaWN0ZWQocHJvZ3Jlc3MsIDAsIDEpO1xuXG4gICAgaWYgKHByb2dyZXNzTGltaXRlZCAhPT0gcHJvZ3Jlc3MgJiYgZXNjYXBlQW1wKSB7XG4gICAgICAgIGVhc2UgPSAnbGluZWFyJztcbiAgICAgICAgcHJvZ3Jlc3NMaW1pdGVkID0gcHJvZ3Jlc3NMaW1pdGVkICsgKChwcm9ncmVzcyAtIHByb2dyZXNzTGltaXRlZCkgKiBlc2NhcGVBbXApO1xuICAgIH1cblxuICAgIHJldHVybiBjYWxjLnZhbHVlRWFzZWQocHJvZ3Jlc3NMaW1pdGVkLCBmcm9tLCB0bywgdGhpc1tlYXNlXSk7XG59O1xuICAgICAgICAgICAgXG4vKlxuICAgIExpbmVhciBlYXNpbmcgYWRqdXN0bWVudFxuICAgIFxuICAgIFRoZSBkZWZhdWx0IGVhc2luZyBtZXRob2QsIG5vdCBhZGRlZCB3aXRoIC5leHRlbmQgYXMgaXQgaGFzIG5vIE91dCBvciBJbk91dFxuICAgIHZhcmlhdGlvbi5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAtMVxuICAgIEByZXR1cm4gW251bWJlcl06IFVuYWRqdXN0ZWQgcHJvZ3Jlc3NcbiovXG5lYXNpbmdNYW5hZ2VyLmxpbmVhciA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiBwcm9ncmVzcztcbn07XG5cbi8vIEdlbmVyYXRlIHBvd2VyIGVhc2luZyBlYXNpbmdcblsnZWFzZScsICdjdWJpYycsICdxdWFydCcsICdxdWludCddLmZvckVhY2goZnVuY3Rpb24gKGVhc2luZ05hbWUsIGkpIHtcbiAgICBiYXNlRWFzaW5nW2Vhc2luZ05hbWVdID0gZ2VuZXJhdGVQb3dlckVhc2luZyhpICsgMik7XG59KTtcblxuLy8gR2VuZXJhdGUgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcbmZvciAodmFyIGtleSBpbiBiYXNlRWFzaW5nKSB7XG4gICAgaWYgKGJhc2VFYXNpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBnZW5lcmF0ZVZhcmlhdGlvbnMoa2V5LCBiYXNlRWFzaW5nW2tleV0pO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlYXNpbmdNYW5hZ2VyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9wbGF5L2Vhc2luZy1tYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBNb2RNYW5hZ2VyID0gcmVxdWlyZSgnLi4vaW5jL01vZE1hbmFnZXInKSxcbiAgICBwcmVzZXRNYW5hZ2VyID0gbmV3IE1vZE1hbmFnZXIoKSxcblxuICAgIERPVCA9ICcuJyxcblxuICAgIGdlbmVyYXRlS2V5cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGtleXMgPSBrZXkuc3BsaXQoRE9UKSxcbiAgICAgICAgICAgIG51bUtleXMgPSBrZXlzLmxlbmd0aCxcbiAgICAgICAgICAgIGxhc3RLZXkgPSBrZXlzWzBdLFxuICAgICAgICAgICAgaSA9IDE7XG5cbiAgICAgICAgZm9yICg7IGkgPCBudW1LZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGtleXNbaV0gPSBsYXN0S2V5ICs9IERPVCArIGtleXNbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9O1xuXG4vKlxuICAgIEdldCBkZWZpbmVkIGFjdGlvblxuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVGhlIG5hbWUgb2YgdGhlIHByZWRlZmluZWQgYWN0aW9uXG4qL1xucHJlc2V0TWFuYWdlci5nZXREZWZpbmVkID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgcHJvcHMgPSB7fSxcbiAgICAgICAgdGhpc1Byb3AgPSB7fSxcbiAgICAgICAga2V5cyA9IGdlbmVyYXRlS2V5cyhuYW1lKSxcbiAgICAgICAgbnVtS2V5cyA9IGtleXMubGVuZ3RoLFxuICAgICAgICBpID0gMDtcblxuICAgIGZvciAoOyBpIDwgbnVtS2V5czsgaSsrKSB7XG4gICAgICAgIHRoaXNQcm9wID0gdGhpc1trZXlzW2ldXTtcblxuICAgICAgICBpZiAodGhpc1Byb3ApIHtcbiAgICAgICAgICAgIHByb3BzID0gdXRpbHMubWVyZ2UocHJvcHMsIHRoaXNQcm9wKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcHJlc2V0TWFuYWdlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdG9yL3ByZXNldC1tYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgTW9kTWFuYWdlciA9IHJlcXVpcmUoJy4uL2luYy9Nb2RNYW5hZ2VyJyksXG4gICAgcm91dGVNYW5hZ2VyID0gbmV3IE1vZE1hbmFnZXIoKTtcblxuLypcbiAgICBTaGFyZCBmdW5jdGlvblxuXG4gICAgUnVuIGNhbGxiYWNrIG9uY2UgZm9yIGV2ZXJ5IHZhbHVlIHJvdXRlXG5cbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogRnVuY3Rpb24gdG8gcnVuIGZvciBlYWNoIHJvdXRlXG4gICAgQHBhcmFtIFtvYmplY3RdIChvcHRpb25hbCk6IE9iamVjdCBjb250YWluaW5nIGtleXMgb2Ygcm91dGVzIHRvIGNoZWNrXG4qL1xucm91dGVNYW5hZ2VyLnNoYXJkID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB2YWxpZFJvdXRlcykge1xuICAgIHZhciBrZXkgPSAnJyxcbiAgICAgICAgcm91dGUgPSAnJyxcbiAgICAgICAgcm91dGVJc1ZhbGlkID0gZmFsc2UsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgZm9yICg7IGkgPCB0aGlzLl9udW1LZXlzOyBpKyspIHtcbiAgICAgICAga2V5ID0gdGhpcy5fa2V5c1tpXTtcbiAgICAgICAgcm91dGVJc1ZhbGlkID0gKHZhbGlkUm91dGVzICYmIHZhbGlkUm91dGVzLmhhc093blByb3BlcnR5KGtleSkpO1xuICAgICAgICByb3V0ZSA9IHJvdXRlSXNWYWxpZCA/IHZhbGlkUm91dGVzW2tleV0gOiB7fTtcblxuICAgICAgICAvLyBJZiB3ZSd2ZSBiZWVuIGdpdmVuIHRoaXMgcm91dGUsIG9yIHRoaXMgaXMgdGhlIGRlZmF1bHQgcm91dGUgKCd2YWx1ZXMnKVxuICAgICAgICBpZiAocm91dGVJc1ZhbGlkIHx8IGtleSA9PT0gJ3ZhbHVlcycpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHRoaXNba2V5XSwga2V5LCByb3V0ZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlTWFuYWdlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvdXRlcy9tYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uLy4uL2luYy9jYWxjJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKSxcbiAgICBzcGVlZFBlckZyYW1lID0gY2FsYy5zcGVlZFBlckZyYW1lLFxuXG4gICAgTW9kTWFuYWdlciA9IHJlcXVpcmUoJy4uLy4uL2luYy9Nb2RNYW5hZ2VyJyksXG4gICAgc2ltdWxhdGlvbk1hbmFnZXIgPSBuZXcgTW9kTWFuYWdlcigpO1xuXG4vKlxuICAgIEFkZCBjb3JlIHBoeXNpY3Mgc2ltdWxhdGlvbnNcbiovXG5zaW11bGF0aW9uTWFuYWdlclxuXG4gICAgLypcbiAgICAgICAgVmVsb2NpdHlcbiAgICAgICAgXG4gICAgICAgIFRoZSBkZWZhdWx0IC5ydW4oKSBzaW11bGF0aW9uLlxuICAgICAgICBcbiAgICAgICAgQXBwbGllcyBhbnkgc2V0IGRlY2VsZXJhdGlvbiBhbmQgYWNjZWxlcmF0aW9uIHRvIGV4aXN0aW5nIHZlbG9jaXR5XG4gICAgKi9cbiAgICAuZXh0ZW5kKCd2ZWxvY2l0eScsIGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnZlbG9jaXR5IC0gc3BlZWRQZXJGcmFtZSh2YWx1ZS5kZWNlbGVyYXRpb24sIGR1cmF0aW9uKSArIHNwZWVkUGVyRnJhbWUodmFsdWUuYWNjZWxlcmF0aW9uLCBkdXJhdGlvbik7XG4gICAgfSlcbiAgICBcbiAgICAvKlxuICAgICAgICBHbGlkZVxuICAgICAgICBcbiAgICAgICAgRW11bGF0ZXMgdG91Y2ggZGV2aWNlIHNjcm9sbGluZyBlZmZlY3RzIHdpdGggZXhwb25lbnRpYWwgZGVjYXlcbiAgICAgICAgaHR0cDovL2FyaXlhLm9maWxhYnMuY29tLzIwMTMvMTEvamF2YXNjcmlwdC1raW5ldGljLXNjcm9sbGluZy1wYXJ0LTIuaHRtbFxuICAgICovXG4gICAgLmV4dGVuZCgnZ2xpZGUnLCBmdW5jdGlvbiAodmFsdWUsIGR1cmF0aW9uLCBzdGFydGVkKSB7XG4gICAgICAgIHZhciB0aW1lVW50aWxGaW5pc2hlZCA9IC0gdXRpbHMuY3VycmVudFRpbWUoKSAtIHN0YXJ0ZWQsXG4gICAgICAgICAgICBkZWx0YSA9IC0gdmFsdWUudG8gKiBNYXRoLmV4cCh0aW1lVW50aWxGaW5pc2hlZCAvIHZhbHVlLnRpbWVDb25zdGFudCk7XG5cbiAgICAgICAgcmV0dXJuICh2YWx1ZS50byArIGRlbHRhKSAtIHZhbHVlLmN1cnJlbnQ7XG4gICAgfSlcblxuICAgIC8qXG4gICAgICAgIEZyaWN0aW9uXG5cbiAgICAgICAgVE9ETzogZm9sZCBpbnRvIGNvcmUgcGh5c2ljcyBzaW11bGF0aW9uXG4gICAgKi9cbiAgICAuZXh0ZW5kKCdmcmljdGlvbicsIGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIG5ld1ZlbG9jaXR5ID0gc3BlZWRQZXJGcmFtZSh2YWx1ZS52ZWxvY2l0eSwgZHVyYXRpb24pICogKDEgLSB2YWx1ZS5mcmljdGlvbik7XG4gICAgICAgIHJldHVybiBjYWxjLnNwZWVkUGVyU2Vjb25kKG5ld1ZlbG9jaXR5LCBkdXJhdGlvbik7XG4gICAgfSlcbiAgICBcbiAgICAvKlxuICAgICAgICBTcHJpbmdcbiAgICAqL1xuICAgIC5leHRlbmQoJ3NwcmluZycsIGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gdmFsdWUudG8gLSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICBcbiAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gZGlzdGFuY2UgKiBzcGVlZFBlckZyYW1lKHZhbHVlLnNwcmluZywgZHVyYXRpb24pO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHNpbXVsYXRpb25NYW5hZ2VyLmZyaWN0aW9uKHZhbHVlLCBkdXJhdGlvbik7XG4gICAgfSlcbiAgICBcbiAgICAvKlxuICAgICAgICBCb3VuY2VcbiAgICAgICAgXG4gICAgICAgIEludmVydCB2ZWxvY2l0eSBhbmQgcmVkdWNlIGJ5IHByb3ZpZGVkIGZyYWN0aW9uXG4gICAgKi9cbiAgICAuZXh0ZW5kKCdib3VuY2UnLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gMCxcbiAgICAgICAgICAgIHRvID0gdmFsdWUudG8sXG4gICAgICAgICAgICBjdXJyZW50ID0gdmFsdWUuY3VycmVudCxcbiAgICAgICAgICAgIGJvdW5jZSA9IHZhbHVlLmJvdW5jZTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHdlJ3JlIHVzaW5nIGdsaWRlIHNpbXVsYXRpb24gd2UgaGF2ZSB0byBmbGlwIG91ciB0YXJnZXQgdG9vXG4gICAgICAgIGlmICh2YWx1ZS5zaW11bGF0ZSA9PT0gJ2dsaWRlJykge1xuICAgICAgICAgICAgZGlzdGFuY2UgPSB0byAtIGN1cnJlbnQ7XG4gICAgICAgICAgICB2YWx1ZS50byA9IGN1cnJlbnQgLSAoZGlzdGFuY2UgKiBib3VuY2UpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdmFsdWUudmVsb2NpdHkgKj0gLSBib3VuY2U7XG4gICAgfSlcbiAgICBcbiAgICAvKlxuICAgICAgICBDYXB0dXJlXG4gICAgICAgIFxuICAgICAgICBDb252ZXJ0IHNpbXVsYXRpb24gdG8gc3ByaW5nIGFuZCBzZXQgdGFyZ2V0IHRvIGxpbWl0XG4gICAgKi9cbiAgICAuZXh0ZW5kKCdjYXB0dXJlJywgZnVuY3Rpb24gKHZhbHVlLCB0YXJnZXQpIHtcbiAgICAgICAgdmFsdWUudG8gPSB0YXJnZXQ7XG4gICAgICAgIHZhbHVlLnNpbXVsYXRlID0gJ3NwcmluZyc7XG4gICAgICAgIHZhbHVlLmNhcHR1cmUgPSB2YWx1ZS5taW4gPSB2YWx1ZS5tYXggPSB1bmRlZmluZWQ7XG4gICAgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2ltdWxhdGlvbk1hbmFnZXI7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcnVuL3NpbXVsYXRpb24tbWFuYWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIEFjdG9yLFxuXG4gICAgLypcbiAgICAgICAgR2VuZXJhdGUgYW4gRWxlbWVudCBmdW5jdGlvblxuICAgICovXG4gICAgZ2VuZXJhdGVGdW5jdGlvbiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IHRoaXMudHlwZSxcbiAgICAgICAgICAgICAgICByZXR1cm5WYWw7XG4gICAgICAgICAgICBpZiAodHlwZSAmJiB0eXBlW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsID0gdHlwZVtuYW1lXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbDtcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgTW9kTWFuYWdlciA9IHJlcXVpcmUoJy4uL2luYy9Nb2RNYW5hZ2VyJyksXG4gICAgYWN0b3JUeXBlTWFuYWdlciA9IG5ldyBNb2RNYW5hZ2VyKCk7XG5cbmFjdG9yVHlwZU1hbmFnZXIuZXh0ZW5kID0gZnVuY3Rpb24gKG5hbWUsIG1vZCkge1xuICAgIHZhciBtZXRob2ROYW1lID0gJyc7XG5cbiAgICBmb3IgKG1ldGhvZE5hbWUgaW4gbW9kKSB7XG4gICAgICAgIGlmIChtb2QuaGFzT3duUHJvcGVydHkobWV0aG9kTmFtZSkgJiYgIUFjdG9yLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShtZXRob2ROYW1lKSkge1xuICAgICAgICAgICAgQWN0b3IucHJvdG90eXBlW21ldGhvZE5hbWVdID0gZ2VuZXJhdGVGdW5jdGlvbihtZXRob2ROYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBDYWxsIHBhcmVudCBleHRlbmQgbWV0aG9kXG4gICAgTW9kTWFuYWdlci5wcm90b3R5cGUuZXh0ZW5kLmNhbGwodGhpcywgbmFtZSwgbW9kKTtcbn07XG5cbmFjdG9yVHlwZU1hbmFnZXIuc2V0QWN0b3IgPSBmdW5jdGlvbiAoYWN0b3IpIHtcbiAgICBBY3RvciA9IGFjdG9yO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhY3RvclR5cGVNYW5hZ2VyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0b3ItdHlwZXMvbWFuYWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIE1vZE1hbmFnZXIgPSByZXF1aXJlKCcuLi9pbmMvTW9kTWFuYWdlcicpLFxuICAgIHZhbHVlVHlwZU1hbmFnZXIgPSBuZXcgTW9kTWFuYWdlcigpO1xuXG52YWx1ZVR5cGVNYW5hZ2VyLmRlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uICh0eXBlLCBrZXkpIHtcbiAgICB2YXIgdmFsdWVUeXBlID0gdGhpc1t0eXBlXSxcbiAgICAgICAgZGVmYXVsdFByb3BzID0gKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpID8gdmFsdWVUeXBlLmRlZmF1bHRQcm9wc1trZXldIHx8IHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMgOiB7fTtcblxuICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG59O1xuXG52YWx1ZVR5cGVNYW5hZ2VyLnRlc3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChrZXksIG1vZCkge1xuICAgICAgICBpZiAobW9kLnRlc3QgJiYgbW9kLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICB0eXBlID0ga2V5O1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsdWVUeXBlTWFuYWdlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmFnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcbiAgICBDYWxjdWxhdG9yc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBTaW1wbGUgSS9PIHNuaXBwZXRzXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMuanMnKSxcblxuICAgIGNhbGMgPSB7XG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICBhcmUgYXQgMCwwLCB0aGVuIHJldHVybiB0aGUgYW5nbGUgdXNpbmcgLmFuZ2xlRnJvbUNlbnRlcigpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICAgICAgICAgICAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4gICAgICAgICovXG4gICAgICAgIGFuZ2xlOiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgICAgIHZhciBmcm9tID0gcG9pbnRCID8gcG9pbnRBIDoge3g6IDAsIHk6IDB9LFxuICAgICAgICAgICAgICAgIHRvID0gcG9pbnRCIHx8IHBvaW50QSxcbiAgICAgICAgICAgICAgICBwb2ludCA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdG8ueCAtIGZyb20ueCxcbiAgICAgICAgICAgICAgICAgICAgeTogdG8ueSAtIGZyb20ueVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFuZ2xlRnJvbUNlbnRlcihwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgQW5nbGUgZnJvbSBjZW50ZXJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgY3VycmVudCBhbmdsZSwgaW4gcmFkaWFucywgb2YgYSBkZWZpbmVkIHBvaW50XG4gICAgICAgICAgICBmcm9tIGEgY2VudGVyIChhc3N1bWVkIDAsMClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBYIGNvb3JkaW5hdGUgb2Ygc2Vjb25kIHBvaW50XG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFkgY29vcmRpbmF0ZSBvZiBzZWNvbmQgcG9pbnRcbiAgICAgICAgICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gMCwgMCBhbmQgcG9pbnQgaW4gcmFkaWFuc1xuICAgICAgICAqL1xuICAgICAgICBhbmdsZUZyb21DZW50ZXI6IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoeSwgeCkpO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICAgICAgICAqL1xuICAgICAgICBkZWdyZWVzVG9SYWRpYW5zOiBmdW5jdGlvbiAoZGVncmVlcykge1xuICAgICAgICAgICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEaWxhdGVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYSAtLS0tLS0tLS0gYlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBhIC0tLS0gYlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuICAgICAgICAqL1xuICAgICAgICBkaWxhdGU6IGZ1bmN0aW9uIChhLCBiLCBkaWxhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGEgKyAoKGIgLSBhKSAqIGRpbGF0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRGlzdGFuY2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAoMCwwKSBhbmQgcG9pbnRBLCB1bmxlc3MgcG9pbnRCXG4gICAgICAgICAgICBpcyBwcm92aWRlZCwgdGhlbiB3ZSByZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdHdvLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICAgICAqL1xuICAgICAgICBkaXN0YW5jZTogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgICAgICByZXR1cm4gKHR5cGVvZiBwb2ludEEgPT09IFwibnVtYmVyXCIpID8gdGhpcy5kaXN0YW5jZTFEKHBvaW50QSwgcG9pbnRCKSA6IHRoaXMuZGlzdGFuY2UyRChwb2ludEEsIHBvaW50Qik7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEaXN0YW5jZSAxRFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHBvaW50IEEgYW5kIHBvaW50IEJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQb2ludCBBXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IChvcHRpb25hbCk6IFBvaW50IEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gICAgICAgICovXG4gICAgICAgIGRpc3RhbmNlMUQ6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAgICAgdmFyIGJJc051bSA9ICh0eXBlb2YgcG9pbnRCID09PSAnbnVtYmVyJyksXG4gICAgICAgICAgICAgICAgZnJvbSA9IGJJc051bSA/IHBvaW50QSA6IDAsXG4gICAgICAgICAgICAgICAgdG8gPSBiSXNOdW0gPyBwb2ludEIgOiBwb2ludEE7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gYWJzb2x1dGUodG8gLSBmcm9tKTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRGlzdGFuY2UgMkRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAoMCwwKSBhbmQgcG9pbnQgQSwgdW5sZXNzIHBvaW50IEJcbiAgICAgICAgICAgIGlzIHByb3ZpZGVkLCB0aGVuIHdlIHJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogeCBhbmQgeSBvZiBwb2ludCBBXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IChvcHRpb25hbCk6IHggYW5kIHkgb2YgcG9pbnQgQlxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgZGlzdGFuY2UyRDogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgICAgICB2YXIgYklzT2JqID0gKHR5cGVvZiBwb2ludEIgPT09IFwib2JqZWN0XCIpLFxuICAgICAgICAgICAgICAgIGZyb20gPSBiSXNPYmogPyBwb2ludEEgOiB7eDogMCwgeTogMH0sXG4gICAgICAgICAgICAgICAgdG8gPSBiSXNPYmogPyBwb2ludEIgOiBwb2ludEEsXG4gICAgICAgICAgICAgICAgcG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGFic29sdXRlKHRvLnggLSBmcm9tLngpLFxuICAgICAgICAgICAgICAgICAgICB5OiBhYnNvbHV0ZSh0by55IC0gZnJvbS55KVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oeXBvdGVudXNlKHBvaW50LngsIHBvaW50LnkpO1xuICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBIeXBvdGVudXNlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogTGVuZ3RoIG9mIENcbiAgICAgICAgKi9cbiAgICAgICAgaHlwb3RlbnVzZTogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHZhciBhMiA9IGEgKiBhLFxuICAgICAgICAgICAgICAgIGIyID0gYiAqIGIsXG4gICAgICAgICAgICAgICAgYzIgPSBhMiArIGIyO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydChjMik7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgT2Zmc2V0IGJldHdlZW4gdHdvIGlucHV0c1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBDYWxjdWxhdGUgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gZGlmZmVyZW50IGlucHV0c1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW1BvaW50XTogRmlyc3QgaW5wdXRcbiAgICAgICAgICAgIEBwYXJhbSBbUG9pbnRdOiBTZWNvbmQgaW5wdXRcbiAgICAgICAgICAgIEByZXR1cm4gW09mZnNldF06IERpc3RhbmNlIG1ldHJpY3MgYmV0d2VlbiB0d28gcG9pbnRzXG4gICAgICAgICovXG4gICAgICAgIG9mZnNldDogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSB7fTtcbiAgICBcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRba2V5XSA9IGJba2V5XSAtIGFba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFtrZXldID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc051bShvZmZzZXQueCkgJiYgaXNOdW0ob2Zmc2V0LnkpKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0LmFuZ2xlID0gdGhpcy5hbmdsZShhLCBiKTtcbiAgICAgICAgICAgICAgICBvZmZzZXQuZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlMkQoYSwgYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gb2Zmc2V0O1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gICAgICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4gICAgICAgICovXG4gICAgICAgIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2U6IGZ1bmN0aW9uIChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkge1xuICAgICAgICAgICAgdmFyIHBvaW50ID0ge307XG4gICAgXG4gICAgXHRcdHBvaW50LnggPSBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54O1xuICAgICAgICAgICAgcG9pbnQueSA9IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnk7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgICAgICAgICAgIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICAgICAgICAgICAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IGlmIGZ1bGwgcmFuZ2UgZ2l2ZW4sIHVwcGVyIGlmIG5vdFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuICAgICAgICAqL1xuICAgICAgICBwcm9ncmVzczogZnVuY3Rpb24gKHZhbHVlLCBsaW1pdEEsIGxpbWl0Qikge1xuICAgICAgICAgICAgdmFyIGJJc051bSA9ICh0eXBlb2YgbGltaXRCID09PSAnbnVtYmVyJyksXG4gICAgICAgICAgICAgICAgZnJvbSA9IGJJc051bSA/IGxpbWl0QSA6IDAsXG4gICAgICAgICAgICAgICAgdG8gPSBiSXNOdW0gPyBsaW1pdEIgOiBsaW1pdEEsXG4gICAgICAgICAgICAgICAgcmFuZ2UgPSB0byAtIGZyb20sXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAodmFsdWUgLSBmcm9tKSAvIHJhbmdlO1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHByb2dyZXNzO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgICAgICAqL1xuICAgICAgICByYWRpYW5zVG9EZWdyZWVzOiBmdW5jdGlvbiAocmFkaWFucykge1xuICAgICAgICAgICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gICAgICAgICAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICAgICAgKi9cbiAgICAgICAgcmVsYXRpdmVWYWx1ZTogZnVuY3Rpb24gKGN1cnJlbnQsIHJlbCkge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gY3VycmVudCxcbiAgICAgICAgICAgICAgICBlcXVhdGlvbiA9IHJlbC5zcGxpdCgnPScpLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yID0gZXF1YXRpb25bMF0sXG4gICAgICAgICAgICAgICAgc3BsaXRWYWwgPSB1dGlscy5zcGxpdFZhbFVuaXQoZXF1YXRpb25bMV0pO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlICs9IHNwbGl0VmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgLT0gc3BsaXRWYWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSAqPSBzcGxpdFZhbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlIC89IHNwbGl0VmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHNwbGl0VmFsLnVuaXQpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSArPSBzcGxpdFZhbC51bml0O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgICAgICB9LFxuICAgIFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICAgICAqL1xuICAgICAgICByZXN0cmljdGVkOiBmdW5jdGlvbiAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgICAgICAgICB2YXIgcmVzdHJpY3RlZCA9IChtaW4gIT09IHVuZGVmaW5lZCkgPyBNYXRoLm1heCh2YWx1ZSwgbWluKSA6IHZhbHVlO1xuICAgICAgICAgICAgcmVzdHJpY3RlZCA9IChtYXggIT09IHVuZGVmaW5lZCkgPyBNYXRoLm1pbihyZXN0cmljdGVkLCBtYXgpIDogcmVzdHJpY3RlZDtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiByZXN0cmljdGVkO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuICAgICAgICAqL1xuICAgICAgICBzcGVlZFBlckZyYW1lOiBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4gICAgICAgICovXG4gICAgICAgIHNwZWVkUGVyU2Vjb25kOiBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG4gICAgICAgIH0sXG4gICAgXG4gICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICAgICAgICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2UsIG9yIHVwcGVyIGlmIGxpbWl0MiBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHByb2dyZXNzLCBsaW1pdEEsIGxpbWl0Qikge1xuICAgICAgICAgICAgdmFyIGJJc051bSA9ICh0eXBlb2YgbGltaXRCID09PSAnbnVtYmVyJyksXG4gICAgICAgICAgICAgICAgZnJvbSA9IGJJc051bSA/IGxpbWl0QSA6IDAsXG4gICAgICAgICAgICAgICAgdG8gPSBiSXNOdW0gPyBsaW1pdEIgOiBsaW1pdEE7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gKC0gcHJvZ3Jlc3MgKiBmcm9tKSArIChwcm9ncmVzcyAqIHRvKSArIGZyb207IFxuICAgICAgICB9LFxuICAgIFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRWFzZWQgdmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICAgICAgICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2UsIG9yIHVwcGVyIGlmIGxpbWl0MiBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBFYXNpbmcgdG8gYXBwbHkgdG8gdmFsdWVcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiAgICAgICAgKi9cbiAgICAgICAgdmFsdWVFYXNlZDogZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzaW5nKSB7XG4gICAgICAgICAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IGVhc2luZyhwcm9ncmVzcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBDYWNoaW5nIGZ1bmN0aW9ucyB1c2VkIG11bHRpcGxlIHRpbWVzIHRvIHJlZHVjZSBmaWxlc2l6ZSBhbmQgaW5jcmVhc2UgcGVyZm9ybWFuY2VcbiAgICAqL1xuICAgIGlzTnVtID0gdXRpbHMuaXNOdW0sXG4gICAgYWJzb2x1dGUgPSBNYXRoLmFicztcbiAgICBcbm1vZHVsZS5leHBvcnRzID0gY2FsYztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9jYWxjLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUHJvY2VzcyA9IHJlcXVpcmUoJy4uL3Byb2Nlc3MvUHJvY2VzcycpLFxuICAgIFF1ZXVlID0gcmVxdWlyZSgnLi4vaW5jL1F1ZXVlJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICB1cGRhdGUgPSByZXF1aXJlKCcuL3VwZGF0ZScpLFxuICAgIHZhbHVlT3BzID0gcmVxdWlyZSgnLi92YWx1ZS1vcGVyYXRpb25zJyksXG4gICAgYWN0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvbWFuYWdlcicpLFxuICAgIHJvdXRlTWFuYWdlciA9IHJlcXVpcmUoJy4uL3JvdXRlcy9tYW5hZ2VyJyksXG4gICAgYWN0b3JUeXBlTWFuYWdlciA9IHJlcXVpcmUoJy4uL2FjdG9yLXR5cGVzL21hbmFnZXInKSxcblxuICAgIEFjdG9yID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudCB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5vdXRwdXQgPSB7fTtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IG5ldyBRdWV1ZSgpO1xuICAgICAgICB0aGlzLnByb2Nlc3MgPSBuZXcgUHJvY2Vzcyh0aGlzLCB1cGRhdGUpO1xuXG4gICAgICAgIHRoaXMuY2xlYXJPcmRlcigpO1xuXG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBvcHRpb25zLnR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGVsZW1lbnQgaXMgYSBET00gbm9kZSwgc2V0IHR5cGUgdG8gJ2RvbSdcbiAgICAgICAgaWYgKCF0aGlzLnR5cGUgJiYgdGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudC5ub2RlVHlwZSkge1xuICAgICAgICAgICAgdGhpcy50eXBlID0gJ2RvbSc7XG4gICAgICAgIH1cbiAgICB9O1xuXG5BY3Rvci5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLypcbiAgICAgICAgU2V0IEFjdGlvbiB2YWx1ZXMgYW5kIHByb3BlcnRpZXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogRWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXSAob3B0aW9uKTogTmFtZSBvZiBkZWZhdWx0IHZhbHVlIHByb3BlcnR5XG4gICAgKi9cbiAgICBzZXQ6IGZ1bmN0aW9uIChwcm9wcywgZGVmYXVsdFZhbHVlUHJvcCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy8gUmVzZXQgRWxlbWVudCBwcm9wZXJ0aWVzIGFuZCB3cml0ZSBuZXcgcHJvcHNcbiAgICAgICAgdGhpcy5jbGVhck9yZGVyKCk7XG4gICAgICAgIHRoaXMucmVzZXRQcm9wcygpO1xuICAgICAgICB0aGlzLnNldFByb3BzKHByb3BzKTtcblxuICAgICAgICAvLyBMb29wIG92ZXIgcm91dGVzIGFuZCBwcm9jZXNzIHZhbHVlIGRlZmluaXRpb25zXG4gICAgICAgIHJvdXRlTWFuYWdlci5zaGFyZChmdW5jdGlvbiAocm91dGUsIHJvdXRlTmFtZSwgdmFsdWVzKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgb3V0cHV0IG9iamVjdCBmb3IgdGhpcyByb3V0ZSBpZiBub25lIGV4aXN0c1xuICAgICAgICAgICAgc2VsZi5vdXRwdXRbcm91dGVOYW1lXSA9IHNlbGYub3V0cHV0W3JvdXRlTmFtZV0gfHwge307XG5cbiAgICAgICAgICAgIC8vIFNldCB2YWx1ZXNcbiAgICAgICAgICAgIHNlbGYuc2V0VmFsdWVzKHZhbHVlcywgcm91dGVOYW1lLCBkZWZhdWx0VmFsdWVQcm9wKTtcbiAgICAgICAgfSwgcHJvcHMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTdGFydCBjdXJyZW50bHkgZGVmaW5lZCBBY3Rpb25cbiAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVzZXRQcm9ncmVzcygpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTdG9wIGN1cnJlbnQgQWN0aW9uXG4gICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucXVldWUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgUGF1c2UgY3VycmVudCBBY3Rpb25cbiAgICAqL1xuICAgIHBhdXNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzLnN0b3AoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFJlc3VtZSBwYXVzZWQgQWN0aW9uXG4gICAgKi9cbiAgICByZXN1bWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mcmFtZXN0YW1wID0gdGhpcy5zdGFydGVkID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucHJvY2Vzcy5zdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgVG9nZ2xlIGN1cnJlbnQgQWN0aW9uXG4gICAgKi9cbiAgICB0b2dnbGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzdW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEFjdGl2YXRlIEVsZW1lbnQgQWN0aW9uXG4gICAgKi9cbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdXRpbHMuY3VycmVudFRpbWUoKSArIHRoaXMuZGVsYXk7XG4gICAgICAgIHRoaXMuZnJhbWVzdGFtcCA9IHRoaXMuc3RhcnRlZDtcbiAgICAgICAgdGhpcy5maXJzdEZyYW1lID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnByb2Nlc3Muc3RhcnQoKTtcbiAgICB9LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXNldFByb2dyZXNzKCk7XG4gICAgICAgIHZhbHVlT3BzLmFsbCgncmVzZXQnLCB0aGlzLnZhbHVlcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgUmVzZXQgQWN0aW9uIHByb2dyZXNzXG4gICAgKi9cbiAgICByZXNldFByb2dyZXNzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMCA6IHRoaXMuZHVyYXRpb247XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IHV0aWxzLmN1cnJlbnRUaW1lKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBMb29wIHRocm91Z2ggYWxsIHZhbHVlcyBhbmQgY3JlYXRlIG9yaWdpbiBwb2ludHNcbiAgICAqL1xuICAgIHJlc2V0T3JpZ2luczogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YWx1ZU9wcy5hbGwoJ3Jlc2V0T3JpZ2luJywgdGhpcy52YWx1ZXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFJldmVyc2UgQWN0aW9uIHByb2dyZXNzIGFuZCB2YWx1ZXNcbiAgICAqL1xuICAgIHJldmVyc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgICAgICB2YWx1ZU9wcy5hbGwoJ3JldGFyZ2V0JywgdGhpcy52YWx1ZXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN3YXAgdmFsdWUgb3JpZ2lucyBhbmQgdG9cbiAgICAqL1xuICAgIGZsaXBWYWx1ZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcbiAgICAgICAgdmFsdWVPcHMuYWxsKCdmbGlwJywgdGhpcy52YWx1ZXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgU2V0IHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFByb3BlcnRpZXMgdG8gc2V0XG4gICAgKi9cbiAgICBzZXRQcm9wczogZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHZhciBrZXkgPSAnJztcblxuICAgICAgICBmb3IgKGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgLy8gU2V0IGlmIHRoaXMgaXNuJ3QgYSByb3V0ZVxuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXJvdXRlTWFuYWdlci5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBSZXNldCBwcm9wZXJ0aWVzIHRvIEFjdGlvbiBkZWZhdWx0c1xuICAgICovXG4gICAgcmVzZXRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldFByb3BzKGFjdGlvbk1hbmFnZXJbdGhpcy5hY3Rpb25dLmFjdGlvbkRlZmF1bHRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFNldCB2YWx1ZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdCB8fCBzdHJpbmcgfHwgbnVtYmVyXTogVmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddIChvcHRpb25hbCk6IE5hbWUgb2Ygcm91dGVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddIChvcHRpb25hbCk6IERlZmF1bHQgcHJvcGVydHkgdG8gc2V0XG4gICAgKi9cbiAgICBzZXRWYWx1ZXM6IGZ1bmN0aW9uICh2YWx1ZXMsIG5hbWVzcGFjZSwgZGVmYXVsdFZhbHVlUHJvcCkge1xuICAgICAgICB2YWx1ZU9wcy5wcm9jZXNzKHZhbHVlcywgdGhpcywgbmFtZXNwYWNlLCBkZWZhdWx0VmFsdWVQcm9wKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBVcGRhdGUgb3JkZXIgb2YgdmFsdWUga2V5c1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogV2hldGhlciB0byBtb3ZlIHZhbHVlIHRvIGJhY2tcbiAgICAqL1xuICAgIHVwZGF0ZU9yZGVyOiBmdW5jdGlvbiAoa2V5LCBtb3ZlVG9CYWNrLCBoYXNDaGlsZHJlbikge1xuICAgICAgICB2YXIgb3JkZXIgPSAhaGFzQ2hpbGRyZW4gPyB0aGlzLm9yZGVyIDogdGhpcy5wYXJlbnRPcmRlcixcbiAgICAgICAgICAgIHBvc2l0aW9uID0gb3JkZXIuaW5kZXhPZihrZXkpO1xuXG4gICAgICAgIC8vIElmIGtleSBpc24ndCBpbiBsaXN0LCBvciBtb3ZlVG9CYWNrIGlzIHNldCB0byB0cnVlLCBhZGQga2V5XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gLTEgfHwgbW92ZVRvQmFjaykge1xuICAgICAgICAgICAgb3JkZXIucHVzaChrZXkpO1xuXG4gICAgICAgICAgICAvLyBJZiBrZXkgYWxyZWFkeSBleGlzdHMsIHJlbW92ZVxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIG9yZGVyLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQ2xlYXIgdmFsdWUga2V5IHVwZGF0ZSBvcmRlclxuICAgICovXG4gICAgY2xlYXJPcmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm9yZGVyID0gW107XG4gICAgICAgIHRoaXMucGFyZW50T3JkZXIgPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIFtib29sZWFuXTogSXMgdGhpcyBFbGVtZW50IGN1cnJlbnRseSBhY3RpdmU/XG4gICAgZ2V0IGlzQWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFNldCBFbGVtZW50IGFjdGl2ZSBzdGF0dXNcblxuICAgICAgICBJZiBhY3RpdmUgaXMgYmVpbmcgc2V0IHRvIHRydWUsIHNldCBoYXNDaGFuZ2VkIHRvIHRydWUsIHRvb1xuXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IE5ldyBhY3RpdmUgc3RhdHVzXG4gICAgKi9cbiAgICBzZXQgaXNBY3RpdmUoc3RhdHVzKSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHN0YXR1cztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lzQWN0aXZlID0gc3RhdHVzO1xuICAgIH0sXG5cbiAgICAvLyBbRWxlbWVudFR5cGVdXG4gICAgZ2V0IHR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTZXQgRWxlbWVudFR5cGVcblxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgbmV3IGVsZW1lbnRcbiAgICAqL1xuICAgIHNldCB0eXBlKHR5cGUpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9IGFjdG9yVHlwZU1hbmFnZXJbdHlwZV07XG4gICAgfVxufTtcblxuLy8gUmVnaXN0ZXIgQWN0b3Igd2l0aCBhY3Rpb25NYW5hZ2VyLCBzbyB3aGVuIGEgbmV3IEFjdGlvbiBpcyBzZXQsXG4vLyBXZSBnZXQgYSBuZXcgbWV0aG9kIG9uIEFjdG9yXG5hY3Rpb25NYW5hZ2VyLnNldEFjdG9yKEFjdG9yKTtcbmFjdG9yVHlwZU1hbmFnZXIuc2V0QWN0b3IoQWN0b3IpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFjdG9yO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0b3IvQWN0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBBY3RvciA9IHJlcXVpcmUoJy4vQWN0b3InKSxcbiAgICBnZW5lcmF0ZU1ldGhvZEl0ZXJhdG9yID0gcmVxdWlyZSgnLi9zeXN0ZW0vZ2VuZXJhdGUtaXRlcmF0b3InKSxcbiAgICBhY3Rpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9tYW5hZ2VyJyksXG5cbiAgICAvKlxuICAgICAgICBFbGVtZW50U3lzdGVtIGNvbnN0cnVjdG9yXG5cbiAgICAgICAgQHBhcmFtIFthcnJheV06IEFycmF5IG9mIEVsZW1lbnRzLCBvciB2YWxpZCBFbGVtZW50IHN1YmplY3RzXG4gICAgKi9cbiAgICBBY3Rvckdyb3VwID0gZnVuY3Rpb24gKG1lbWJlcnMsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gW107XG4gICAgICAgIHRoaXMuYWRkKG1lbWJlcnMsIG9wdGlvbnMpO1xuICAgIH07XG5cbkFjdG9yR3JvdXAucHJvdG90eXBlID0ge1xuXG4gICAgLypcbiAgICAgICAgU3RhZ2dlciB0aGUgZXhlY3V0aW9uIG9mIEVsZW1lbnQgbWV0aG9kc1xuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiBtZXRob2QgdG8gZXhlY3V0ZVxuICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogRHVyYXRpb24gYmV0d2VlbiBFbGVtZW50c1xuICAgICAgICBAcGFyYW0gW29iamVjdF0gKG9wdGlvbmFsKTogUHJvcGVydGllcyB0byBwYXNzIHRvIG1ldGhvZFxuICAgICAgICBAcGFyYW0gW3N0cmluZ10gKG9wdGlvbmFsKTogRWFzZSBvdmVyIHN0YWdnZXJcbiAgICAqL1xuICAgIHN0YWdnZXI6IGZ1bmN0aW9uIChtZXRob2QsIGR1cmF0aW9uLCBwcm9wcywgZWFzZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBudW1NZW1iZXJzID0gdGhpcy5tZW1iZXJzLmxlbmd0aCxcbiAgICAgICAgICAgIGkgPSAtMTtcblxuICAgICAgICB0aGlzLl9zdGFnZ2VyID0gdGhpcy5fc3RhZ2dlciB8fCBuZXcgQWN0b3IoKTtcbiAgICAgICAgZHVyYXRpb24gPSBkdXJhdGlvbiB8fCAyNTA7XG4gICAgICAgIGVhc2UgPSBlYXNlIHx8ICdsaW5lYXInO1xuXG4gICAgICAgIHRoaXMuX3N0YWdnZXIuc3RvcCgpLnBsYXkoe1xuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgaToge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50OiBpLFxuICAgICAgICAgICAgICAgICAgICB0bzogbnVtTWVtYmVycyAtIDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKG91dHB1dCkge1xuICAgICAgICAgICAgICAgIHZhciBuZXdJbmRleCA9IG91dHB1dC5pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIG91ciBuZXcgaW5kZXggaXMgb25seSBvbmUgbW9yZSB0aGFuIHRoZSBsYXN0XG4gICAgICAgICAgICAgICAgaWYgKG5ld0luZGV4ID09PSBpICsgMSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm1lbWJlcnNbbmV3SW5kZXhdW21ldGhvZF0ocHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBPciBpdCdzIG1vcmUgdGhhbiBvbmUgbW9yZSB0aGFuIHRoZSBsYXN0LCBzbyBmaXJlIGFsbCBpbmRlY2llc1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gaSArIDE7IGluZGV4IDw9IG5ld0luZGV4OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1lbWJlcnNbaW5kZXhdW21ldGhvZF0ocHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaSA9IG5ld0luZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkdXJhdGlvbiAqIG51bU1lbWJlcnMsIGVhc2UpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBBZGQgYSBncm91cCBvZiBBY3RvcnMgdG8gb3VyIFN5c3RlbVxuXG4gICAgICAgIEBwYXJhbSBbYXJyYXldOiBBcnJheSBvZiBBY3RvcnMsIG9yIHZhbGlkIEFjdG9yIHN1YmplY3RzXG4gICAgKi9cbiAgICBhZGQ6IGZ1bmN0aW9uIChtZW1iZXJzLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBudW1OZXdNZW1iZXJzID0gbWVtYmVycy5sZW5ndGgsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIG5ld01lbWJlcjtcblxuICAgICAgICBmb3IgKDsgaSA8IG51bU5ld01lbWJlcnM7IGkrKykge1xuICAgICAgICAgICAgbmV3TWVtYmVyID0gKG1lbWJlcnNbaV0ucHJvdG90eXBlICE9PSBBY3Rvci5wcm90b3R5cGUpID8gbmV3IEFjdG9yKG1lbWJlcnNbaV0sIG9wdGlvbnMpIDogbWVtYmVyc1tpXTtcbiAgICAgICAgICAgIHRoaXMubWVtYmVycy5wdXNoKG5ld01lbWJlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG4vLyBJbml0aWFsaXNlIEVsZW1lbnQgU3lzdGVtIG1ldGhvZHNcbihmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgbWV0aG9kIGluIEFjdG9yLnByb3RvdHlwZSkge1xuICAgICAgICBpZiAoQWN0b3IucHJvdG90eXBlLmhhc093blByb3BlcnR5KG1ldGhvZCkpIHtcbiAgICAgICAgICAgIEFjdG9yR3JvdXAucHJvdG90eXBlW21ldGhvZF0gPSBnZW5lcmF0ZU1ldGhvZEl0ZXJhdG9yKG1ldGhvZCk7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuXG4vLyBSZWdpc3RlciBFbGVtZW50IHdpdGggYWN0aW9uTWFuYWdlciwgc28gd2hlbiBhIG5ldyBBY3Rpb24gaXMgc2V0LFxuLy8gV2UgZ2V0IGEgbmV3IG1ldGhvZCBvbiBFbGVtZW50XG5hY3Rpb25NYW5hZ2VyLnNldEFjdG9yR3JvdXAoQWN0b3JHcm91cCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQWN0b3JHcm91cDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdG9yL0FjdG9yR3JvdXAuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcbiAgICBJbnB1dCBjb250cm9sbGVyXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMuanMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscy5qcycpLFxuICAgIEhpc3RvcnkgPSByZXF1aXJlKCcuLi9pbmMvSGlzdG9yeS5qcycpLFxuXG4gICAgLypcbiAgICAgICAgSW5wdXQgY29uc3RydWN0b3JcbiAgICAgICAgXG4gICAgICAgICAgICBTeW50YXhcbiAgICAgICAgICAgICAgICBuZXdJbnB1dChuYW1lLCB2YWx1ZVssIHBvbGxdKVxuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgdG8gdHJhY2tcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBJbml0aWFsIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dIChvcHRpb25hbCk6IEZ1bmN0aW9uIHRvIHBvbGwgSW5wdXQgZGF0YVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBuZXdJbnB1dChwcm9wc1ssIHBvbGxdKVxuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCBvZiB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl0gKG9wdGlvbmFsKTogRnVuY3Rpb24gdG8gcG9sbCBJbnB1dCBkYXRhXG5cbiAgICAgICAgQHJldHVybiBbSW5wdXRdXG4gICAgKi9cbiAgICBJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBvbGxQb3MgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcblxuICAgICAgICB0aGlzLmN1cnJlbnQgPSB7fTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB7fTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHt9O1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgSGlzdG9yeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIFxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jKGFyZ3VtZW50c1twb2xsUG9zXSkpIHtcbiAgICAgICAgICAgIHRoaXMucG9sbCA9IGFyZ3VtZW50c1twb2xsUG9zXTtcbiAgICAgICAgfVxuICAgIH07XG5cbklucHV0LnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogTnVtYmVyIG9mIGZyYW1lcyBvZiBpbmFjdGl2aXR5IGJlZm9yZSB2ZWxvY2l0eSBpcyB0dXJuZWQgdG8gMFxuICAgIG1heEluYWN0aXZlRnJhbWVzOiAyLFxuICAgIFxuICAgIC8vIFtudW1iZXJdOiBOdW1iZXIgb2YgZnJhbWVzIGlucHV0IGhhc24ndCBiZWVuIHVwZGF0ZWRcbiAgICBpbmFjdGl2ZUZyYW1lczogMCxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgbGF0ZXN0IGlucHV0IHZhbHVlc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddIChvcHRpb25hbCk6IE5hbWUgb2Ygc3BlY2lmaWMgcHJvcGVydHkgdG8gcmV0dXJuXG4gICAgICAgIEByZXR1cm4gW29iamVjdCB8fCBudW1iZXJdOiBMYXRlc3QgaW5wdXQgdmFsdWVzIG9yLCBpZiBzcGVjaWZpZWQsIHNpbmdsZSB2YWx1ZVxuICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICB2YXIgbGF0ZXN0ID0gdGhpcy5oaXN0b3J5LmdldCgpLFxuICAgICAgICAgICAgdmFsID0gKHByb3AgIT09IHVuZGVmaW5lZCkgPyBsYXRlc3RbcHJvcF0gOiBsYXRlc3Q7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBVcGRhdGUgdGhlIGlucHV0IHZhbHVlc1xuICAgICAgICBcbiAgICAgICAgU3ludGF4XG4gICAgICAgICAgICBpbnB1dC51cGRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHRvIHRyYWNrXG4gICAgICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBJbml0aWFsIHZhbHVlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBpbnB1dC51cGRhdGUocHJvcHMpXG4gICAgICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3Qgb2YgdmFsdWVzXG4gICAgICAgICAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW0lucHV0XVxuICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoYXJnMCwgYXJnMSkge1xuICAgICAgICB2YXIgdmFsdWVzID0ge307XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtKGFyZzEpKSB7XG4gICAgICAgICAgICB2YWx1ZXNbYXJnMF0gPSBhcmcxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVzID0gYXJnMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGlzdG9yeS5hZGQodXRpbHMubWVyZ2UodGhpcy5jdXJyZW50LCB2YWx1ZXMpKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQ2hlY2sgZm9yIGlucHV0IG1vdmVtZW50IGFuZCB1cGRhdGUgcG9pbnRlciBvYmplY3QncyBwcm9wZXJ0aWVzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFRpbWVzdGFtcCBvZiBmcmFtZVxuICAgICAgICBAcmV0dXJuIFtJbnB1dF1cbiAgICAqL1xuICAgIG9uRnJhbWU6IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIGxhdGVzdCwgaGFzQ2hhbmdlZDtcbiAgICAgICAgXG4gICAgICAgIC8vIENoZWNrIHByb3ZpZGVkIHRpbWVzdGFtcCBhZ2FpbnN0IGxhc3RGcmFtZSB0aW1lc3RhbXAgYW5kIHJldHVybiBpbnB1dCBoYXMgYWxyZWFkeSBiZWVuIHVwZGF0ZWRcbiAgICAgICAgaWYgKHRpbWVzdGFtcCA9PT0gdGhpcy5sYXN0RnJhbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGF0ZXN0ID0gKHRoaXMucG9sbCkgPyB0aGlzLnBvbGwoKSA6IHRoaXMuaGlzdG9yeS5nZXQoKTtcbiAgICAgICAgaGFzQ2hhbmdlZCA9IHV0aWxzLmhhc0NoYW5nZWQodGhpcy5jdXJyZW50LCBsYXRlc3QpO1xuXG4gICAgICAgIC8vIElmIGlucHV0IGhhcyBjaGFuZ2VkIGJldHdlZW4gZnJhbWVzICBcbiAgICAgICAgaWYgKGhhc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSBjYWxjLm9mZnNldCh0aGlzLmN1cnJlbnQsIGxhdGVzdCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBsYXRlc3Q7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcblxuICAgICAgICAvLyBPciBpdCBoYXNuJ3QgbW92ZWQgYW5kIG91ciBmcmFtZSBsaW1pdCBoYXMgYmVlbiByZWFjaGVkXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+PSB0aGlzLm1heEluYWN0aXZlRnJhbWVzKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gY2FsYy5vZmZzZXQodGhpcy5jdXJyZW50LCB0aGlzLmN1cnJlbnQpO1xuICAgICAgICBcbiAgICAgICAgLy8gT3IgaW5wdXQgaGFzbid0IGNoYW5nZWRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMrKztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSB0aW1lc3RhbXA7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5wdXQvSW5wdXQuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtYW5hZ2VyID0gcmVxdWlyZSgnLi9tYW5hZ2VyJyksXG5cbiAgICAvKlxuICAgICAgICBQcm9jZXNzIGNvbnN0cnVjdG9yXG4gICAgICAgIFxuICAgICAgICBTeW50YXhcbiAgICAgICAgICAgIHZhciBwcm9jZXNzID0gbmV3IFByb2Nlc3Moc2NvcGUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHZhciBwcm9jZXNzID0gbmV3IFByb2Nlc3MoY2FsbGJhY2spO1xuICAgICovXG4gICAgUHJvY2VzcyA9IGZ1bmN0aW9uIChzY29wZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGhhc1Njb3BlID0gKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpO1xuXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBoYXNTY29wZSA/IGNhbGxiYWNrIDogc2NvcGU7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBoYXNTY29wZSA/IHNjb3BlIDogdGhpcztcblxuICAgICAgICB0aGlzLmlkID0gbWFuYWdlci5yZWdpc3Rlcih0aGlzKTtcblxuICAgICAgICAvLyBbYm9vbGVhbl06IElzIHRoaXMgcHJvY2VzcyBjdXJyZW50bHkgYWN0aXZlP1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gW2Jvb2xlYW5dOiBIYXMgdGhpcyBwcm9jZXNzIGJlZW4ga2lsbGVkP1xuICAgICAgICB0aGlzLmlzS2lsbGVkID0gZmFsc2U7XG4gICAgfTtcblxuUHJvY2Vzcy5wcm90b3R5cGUgPSB7XG4gICAgLypcbiAgICAgICAgRmlyZSBjYWxsYmFja1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFt0aW1lc3RhbXBdOiBUaW1lc3RhbXAgb2YgY3VycmVudGx5LWV4ZWN1dGVkIGZyYW1lXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4gICAgKi9cbiAgICBmaXJlOiBmdW5jdGlvbiAodGltZXN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIC8vIENoZWNrIHRpbWVyc1xuICAgICAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjay5jYWxsKHRoaXMuc2NvcGUsIHRpbWVzdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIElmIHdlJ3JlIHJ1bm5pbmcgYXQgYW4gaW50ZXJ2YWwsIGRlYWN0aXZhdGUgYWdhaW5cbiAgICAgICAgaWYgKHRoaXMuaXNJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RhcnQgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBEdXJhdGlvbiBvZiBwcm9jZXNzIGluIG1zLCAwIGlmIGluZGVmaW5pdGVcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zdG9wKCk7XG4gICAgICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wVGltZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdG9wIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEFjdGl2YXRlIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNLaWxsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbWFuYWdlci5hY3RpdmF0ZSh0aGlzLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRGVhY3RpdmF0ZSBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIG1hbmFnZXIuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRmlyZSBwcm9jZXNzIGV2ZXJ5IHggbXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIG1zIHRvIHdhaXQgYmV0d2VlbiByZWZpcmluZyBwcm9jZXNzLlxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgZXZlcnk6IGZ1bmN0aW9uIChpbnRlcnZhbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuXG4gICAgICAgIHRoaXMuaXNJbnRlcnZhbCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5hY3RpdmF0ZSgpO1xuICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlzSW50ZXJ2YWxUaW1lQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQ2xlYXIgYWxsIHRpbWVyc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFxuICAgICovXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0ludGVydmFsID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5pc1N0b3BUaW1lckFjdGl2ZSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RvcFRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuaXNJbnRlcnZhbFRpbWVBY3RpdmUpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbFRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBLaWxsIGZ1bmN0aW9uIGluIG1hbmFnZXIsIHJlbGVhc2UgZm9yIGdhcmJhZ2UgY29sbGVjdGlvblxuICAgICovXG4gICAga2lsbDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgdGhpcy5pc0tpbGxlZCA9IHRydWU7XG4gICAgICAgIG1hbmFnZXIua2lsbCh0aGlzLmlkKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2Nlc3M7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcbiAgICBVdGlsaXR5IGZ1bmN0aW9uc1xuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgcHJvdGVjdGVkUHJvcGVydGllcyA9IFsnc2NvcGUnLCAgJ2RvbSddLFxuICAgIFxuICAgIGlzUHJvdGVjdGVkID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gKHByb3RlY3RlZFByb3BlcnRpZXMuaW5kZXhPZihrZXkpICE9PSAtMSk7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4gICAgKi9cbiAgICB2YXJUeXBlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBIYXMgb25lIG9iamVjdCBjaGFuZ2VkIGZyb20gdGhlIG90aGVyXG4gICAgICAgIFxuICAgICAgICBDb21wYXJlcyB0aGUgdHdvIHByb3ZpZGVkIGlucHV0cyBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZXkgYXJlIGRpZmZlcmVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBBXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQlxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBkaWZmZXJlbnRcbiAgICAqL1xuICAgIGhhc0NoYW5nZWQ6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2UsXG4gICAgICAgICAgICBrZXkgPSAnJztcblxuICAgICAgICBmb3IgKGtleSBpbiBiKSB7XG4gICAgICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiBoYXNDaGFuZ2VkO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYSBudW1iZXI/XG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4gICAgKi9cbiAgICBpc051bTogZnVuY3Rpb24gKG51bSkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBudW0gPT09ICdudW1iZXInKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGFuIG9iamVjdD9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiAgICAqL1xuICAgIGlzT2JqOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYSBmdW5jdGlvbiA/IFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdGhpcy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4gICAgKi9cbiAgICBpc0Z1bmM6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuICh2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbicpOyBcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGEgc3RyaW5nID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuICAgICovXG4gICAgaXNTdHJpbmc6IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyk7IFxuICAgIH0sXG5cblxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB0aGlzIGxvb2tzIGxpa2UgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50XG4gICAgKi9cbiAgICBpc1JlbGF0aXZlVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YgJiYgdmFsdWUuaW5kZXhPZignPScpID4gMCk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhbiBhcnJheSA/IFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdGhpcy52YXJUeXBlID09PSAnQXJyYXknXG4gICAgKi9cbiAgICBpc0FycmF5OiBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgIHJldHVybiAodmFyVHlwZShhcnIpID09PSAnQXJyYXknKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIENvcHkgb2JqZWN0IG9yIGFycmF5XG4gICAgICAgIFxuICAgICAgICBDaGVja3Mgd2hldGhlciBiYXNlIGlzIGFuIGFycmF5IG9yIG9iamVjdCBhbmQgbWFrZXNcbiAgICAgICAgYXBwcm9wcmlhdGUgY29weVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBBcnJheSBvciBvYmplY3QgdG8gY29weVxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IE5ldyBjb3B5IG9mIGFycmF5IG9yIG9iamVjdFxuICAgICovXG4gICAgY29weTogZnVuY3Rpb24gKGJhc2UpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmlzQXJyYXkoYmFzZSkpID8gdGhpcy5jb3B5QXJyYXkoYmFzZSkgOiB0aGlzLmNvcHlPYmplY3QoYmFzZSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEZWVwIGNvcHkgYW4gb2JqZWN0XG4gICAgICAgIFxuICAgICAgICBJdGVyYXRlcyBvdmVyIGFuIG9iamVjdCBhbmQgY3JlYXRlcyBhIG5ldyBjb3B5IG9mIGV2ZXJ5IGl0ZW0sXG4gICAgICAgIGRlZXAgY29weWluZyBpZiBpdCBmaW5kcyBhbnkgb2JqZWN0cy9hcnJheXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIGNvcHlcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBOZXcgY29weSBvZiBvYmplY3RcbiAgICAqL1xuICAgIGNvcHlPYmplY3Q6IGZ1bmN0aW9uIChiYXNlKSB7XG4gICAgICAgIHZhciBuZXdPYmplY3QgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBiYXNlKSB7XG4gICAgICAgICAgICBpZiAoYmFzZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSAodGhpcy5pc09iaihiYXNlW2tleV0pICYmICFpc1Byb3RlY3RlZChrZXkpKSA/IHRoaXMuY29weShiYXNlW2tleV0pIDogYmFzZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRGVlcCBjb3B5IGFuIGFycmF5XG4gICAgICAgIFxuICAgICAgICBMb29wcyB0aHJvdWdoIGFuIGFycmF5IGFuZCBjcmVhdGVzIGEgbmV3IGNvcHkgb2YgZXZlcnkgaXRlbSxcbiAgICAgICAgZGVlcCBjb3B5aW5nIGlmIGl0IGZpbmRzIGFueSBvYmplY3RzL2FycmF5c1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFthcnJheV06IEFycmF5IHRvIGNvcHlcbiAgICAgICAgQHJldHVybiBbYXJyYXldOiBOZXcgY29weSBvZiBhcnJheVxuICAgICovXG4gICAgY29weUFycmF5OiBmdW5jdGlvbiAoYmFzZSkge1xuICAgICAgICB2YXIgbmV3QXJyYXkgPSBbXSxcbiAgICAgICAgICAgIGxlbmd0aCA9IGJhc2UubGVuZ3RoLFxuICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgIFxuICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdBcnJheVtpXSA9ICh0aGlzLmlzT2JqKGJhc2VbaV0pKSA/IHRoaXMuY29weShiYXNlW2ldKSA6IGJhc2VbaV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIE5vbi1kZXN0cnVjdGl2ZSBtZXJnZSBvZiBvYmplY3Qgb3IgYXJyYXlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogQXJyYXkgb3Igb2JqZWN0IHRvIHVzZSBhcyBiYXNlXG4gICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogQXJyYXkgb3Igb2JqZWN0IHRvIG92ZXJ3cml0ZSBiYXNlIHdpdGhcbiAgICAgICAgQHJldHVybiBbYXJyYXkgfHwgb2JqZWN0XTogTmV3IGFycmF5IG9yIG9iamVjdFxuICAgICovXG4gICAgbWVyZ2U6IGZ1bmN0aW9uIChiYXNlLCBvdmVyd3JpdGUpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmlzQXJyYXkoYmFzZSkpID8gdGhpcy5jb3B5QXJyYXkob3ZlcndyaXRlKSA6IHRoaXMubWVyZ2VPYmplY3QoYmFzZSwgb3ZlcndyaXRlKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIE5vbi1kZXN0cnVjdGl2ZSBtZXJnZSBvZiBvYmplY3RcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIHVzZSBhcyBiYXNlXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIG92ZXJ3cml0ZSBiYXNlIHdpdGhcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogTmV3IG9iamVjdFxuICAgICovXG4gICAgbWVyZ2VPYmplY3Q6IGZ1bmN0aW9uIChiYXNlLCBvdmVyd3JpdGUpIHtcbiAgICAgICAgdmFyIGhhc0Jhc2UgPSB0aGlzLmlzT2JqKGJhc2UpLFxuICAgICAgICAgICAgbmV3T2JqZWN0ID0gaGFzQmFzZSA/IHRoaXMuY29weShiYXNlKSA6IHRoaXMuY29weShvdmVyd3JpdGUpLFxuICAgICAgICAgICAga2V5ID0gJyc7XG5cbiAgICAgICAgaWYgKGhhc0Jhc2UpIHtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIG92ZXJ3cml0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChvdmVyd3JpdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9ICh0aGlzLmlzT2JqKG92ZXJ3cml0ZVtrZXldKSAmJiAhaXNQcm90ZWN0ZWQoa2V5KSkgPyB0aGlzLm1lcmdlKGJhc2Vba2V5XSwgb3ZlcndyaXRlW2tleV0pIDogb3ZlcndyaXRlW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdPYmplY3Q7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICAgICAgICBcbiAgICAgICAgICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuICAgICovXG4gICAgc3BsaXRWYWxVbml0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNwbGl0VmFsWzFdKSxcbiAgICAgICAgICAgIHVuaXQ6ICBzcGxpdFZhbFsyXVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiAgICAqL1xuICAgIHN0ZXBQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzLCBzdGVwcykge1xuICAgICAgICB2YXIgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKSxcbiAgICAgICAgICAgIHRhcmdldCA9IDEgLSAoMSAvIHN0ZXBzKSxcbiAgICAgICAgICAgIHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4gICAgKi9cbiAgICBjdXJyZW50VGltZTogZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIpID8gcGVyZm9ybWFuY2Uubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG4gICAgXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFxuICAgIC8vIFtudW1iZXJdOiBUaW1lIG9mIGFuaW1hdGlvbiAoaWYgYW5pbWF0aW5nKSBpbiBtc1xuICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgXG4gICAgLy8gW3N0cmluZ106IEVhc2UgYW5pbWF0aW9uXG4gICAgZWFzZTogJ2Vhc2VJbk91dCcsXG4gICAgXG4gICAgLy8gW251bWJlcl06IE11bHRpcGx5IHByb2dyZXNzIGJ5IHRoaXMgKC41IGlzIGhhbGYgc3BlZWQpXG4gICAgZGlsYXRlOiAxLFxuICAgIFxuICAgIC8vIFtib29sZWFuIHx8IG51bWJlcl06IE51bWJlciBvZiB0aW1lcyB0byBsb29wIHZhbHVlcywgdHJ1ZSBmb3IgaW5kZWZpbml0ZVxuICAgIGxvb3A6IGZhbHNlLFxuICAgIFxuICAgIC8vIFtib29sZWFuIHx8IG51bWJlcl06IE51bWJlciBvZiB0aW1lcyB0byB5b3lvIHZhbHVlcywgdHJ1ZSBmb3IgaW5kZWZpbml0ZVxuICAgIHlveW86IGZhbHNlLFxuICAgIFxuICAgIC8vIFtib29sZWFuIHx8IG51bWJlcl06IE51bWJlciBvZiB0aW1lcyB0byBmbGlwIHZhbHVlcywgdHJ1ZSBmb3IgaW5kZWZpbml0ZVxuICAgIGZsaXA6IGZhbHNlXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9wbGF5L2RlZmF1bHQtYWN0aW9uLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8vIFtudW1iZXJdOiBEdXJhdGlvbiBvZiBhbmltYXRpb24gaW4gbXNcbiAgICBkdXJhdGlvbjogNDAwLFxuICAgIFxuICAgIC8vIFtudW1iZXJdOiBEdXJhdGlvbiBvZiBkZWxheSBpbiBtc1xuICAgIGRlbGF5OiAwLFxuICAgIFxuICAgIC8vIFtudW1iZXJdOiBTdGFnZ2VyIGRlbGF5IGFzIGZhY3RvciBvZiBkdXJhdGlvbiAoaWUgMC4yIHdpdGggZHVyYXRpb24gb2YgMTAwMG1zID0gMjAwbXMpXG4gICAgc3RhZ2dlcjogMCxcbiAgICBcbiAgICAvLyBbc3RyaW5nXTogRWFzaW5nIHRvIGFwcGx5XG4gICAgZWFzZTogJ2Vhc2VJbk91dCcsXG4gICAgXG4gICAgLy8gW251bWJlcl06IE51bWJlciBvZiBzdGVwcyB0byBleGVjdXRlIGFuaW1hdGlvblxuICAgIHN0ZXBzOiAwLFxuICAgIFxuICAgIC8vIFtzdHJpbmddOiBUZWxscyBSZWRzaGlmdCB3aGVuIHRvIHN0ZXAsIGF0IHRoZSBzdGFydCBvciBlbmQgb2YgYSBzdGVwLiBPdGhlciBvcHRpb24gaXMgJ3N0YXJ0JyBhcyBwZXIgQ1NTIHNwZWNcbiAgICBzdGVwRGlyZWN0aW9uOiAnZW5kJ1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcGxheS9kZWZhdWx0LXZhbHVlLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcGFyc2VBcmdzID0gcmVxdWlyZSgnLi9wYXJzZS1hcmdzJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLypcbiAgICAgICAgUGxheSBhbiBhbmltYXRpb25cblxuICAgICAgICBAcGFyYW0gW29iamVjdCB8fCBzdHJpbmddOiBQYXJhbWV0ZXJzIG9yIHByZXNldCBuYW1lc1xuICAgICAgICBAcGFyYW0gW29iamVjdF06IE92ZXJyaWRlIHBhcmFtZXRlcnNcbiAgICAqL1xuICAgIHBsYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9ICdwbGF5JztcblxuICAgICAgICAvLyBJZiB0aGVyZSdzIGFuIGFjdGl2ZSBBY3Rpb24sIGFuZCBpdHMgcGxheSwgYWRkIHRvIHF1ZXVlXG4gICAgICAgIGlmICh0aGlzLmlzQWN0aXZlICYmIHRoaXMuYWN0aW9uID09PSBhY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMucXVldWUuYWRkLmFwcGx5KHRoaXMucXVldWUsIGFyZ3VtZW50cyk7XG4gICAgICAgIFxuICAgICAgICAvLyBFbHNlLCBzdGFydCBwbGF5aW5nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgICAgIHRoaXMuc2V0KHBhcnNlQXJncy5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCAndG8nKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBDaGVjayBmb3IgbmV4dCBzdGVwcyBhbmQgcGVyZm9ybSwgc3RvcCBpZiBub3RcbiAgICAqL1xuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5leHRTdGVwcyA9IFt7XG4gICAgICAgICAgICAgICAga2V5OiAnbG9vcCcsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IHRoaXMucmVzZXRcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6ICd5b3lvJyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogdGhpcy5yZXZlcnNlXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiAnZmxpcCcsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IHRoaXMuZmxpcFZhbHVlc1xuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBudW1TdGVwcyA9IG5leHRTdGVwcy5sZW5ndGgsXG4gICAgICAgICAgICBoYXNOZXh0U3RlcCA9IGZhbHNlLFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBudW1TdGVwczsgKytpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja05leHRTdGVwKG5leHRTdGVwc1tpXS5rZXksIG5leHRTdGVwc1tpXS5jYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICBoYXNOZXh0U3RlcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhhc05leHRTdGVwICYmICF0aGlzLnBsYXlOZXh0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQ2hlY2sgbmV4dCBzdGVwXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2Ygc3RlcCAoJ3lveW8nIG9yICdsb29wJylcbiAgICAgICAgQHBhcmFtIFtjYWxsYmFja106IEZ1bmN0aW9uIHRvIHJ1biBpZiB3ZSB0YWtlIHRoaXMgc3RlcFxuICAgICovXG4gICAgY2hlY2tOZXh0U3RlcDogZnVuY3Rpb24gKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIENPVU5UID0gJ0NvdW50JyxcbiAgICAgICAgICAgIHN0ZXBUYWtlbiA9IGZhbHNlLFxuICAgICAgICAgICAgc3RlcCA9IHRoaXNba2V5XSxcbiAgICAgICAgICAgIGNvdW50ID0gdGhpc1trZXkgKyBDT1VOVF0sXG4gICAgICAgICAgICBmb3JldmVyID0gKHN0ZXAgPT09IHRydWUpO1xuXG4gICAgICAgIGlmIChmb3JldmVyIHx8IHV0aWxzLmlzTnVtKHN0ZXApKSB7XG4gICAgICAgICAgICArK2NvdW50O1xuICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0gPSBjb3VudDtcbiAgICAgICAgICAgIGlmIChmb3JldmVyIHx8IGNvdW50IDw9IHN0ZXApIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RlcFRha2VuO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBOZXh0IGluIHBsYXlsaXN0XG4gICAgKi9cbiAgICBwbGF5TmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RlcFRha2VuID0gZmFsc2UsXG4gICAgICAgICAgICBuZXh0SW5RdWV1ZSA9IHRoaXMucXVldWUubmV4dCh0aGlzLnBsYXlEaXJlY3Rpb24pO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0FycmF5KG5leHRJblF1ZXVlKSkge1xuICAgICAgICAgICAgdGhpcy5zZXQocGFyc2VBcmdzLmFwcGx5KHRoaXMsIG5leHRJblF1ZXVlKSwgJ3RvJylcbiAgICAgICAgICAgICAgICAucmVzZXQoKTtcblxuICAgICAgICAgICAgc3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGVwVGFrZW47XG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcGxheS9hY3Rvci1tZXRob2RzLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcHJlc2V0TWFuYWdlciA9IHJlcXVpcmUoJy4uLy4uL2FjdG9yL3ByZXNldC1tYW5hZ2VyJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYmFzZSwgb3ZlcnJpZGUpIHtcbiAgICB2YXIgcHJvcHMgPSAodHlwZW9mIGJhc2UgPT09ICdzdHJpbmcnKSA/IHByZXNldE1hbmFnZXIuZ2V0RGVmaW5lZChiYXNlKSA6IGJhc2U7XG5cbiAgICAvLyBPdmVycmlkZSBwcm9wZXJ0aWVzIHdpdGggc2Vjb25kIGFyZyBpZiBpdCdzIGFuIG9iamVjdFxuICAgIGlmICh0eXBlb2Ygb3ZlcnJpZGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHByb3BzID0gdXRpbHMubWVyZ2UocHJvcHMsIG92ZXJyaWRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHM7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9nZW5lcmljL3BhcnNlLWFyZ3MuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzaW11bGF0aW9ucyA9IHJlcXVpcmUoJy4vc2ltdWxhdGlvbi1tYW5hZ2VyLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNpbXVsYXRpb24sIHZhbHVlLCBkdXJhdGlvbiwgc3RhcnRlZCkge1xuICAgIHZhciB2ZWxvY2l0eSA9IHNpbXVsYXRpb25zW3NpbXVsYXRpb25dKHZhbHVlLCBkdXJhdGlvbiwgc3RhcnRlZCk7XG4gICAgcmV0dXJuIChNYXRoLmFicyh2ZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkKSA/IHZlbG9jaXR5IDogMDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3J1bi9zaW11bGF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBbaW50XTogTnVtYmVyIG9mIGZyYW1lcyBBY3Rpb24gaGFzIGJlZW4gaW5hY3RpdmVcbiAgICBpbmFjdGl2ZUZyYW1lczogMCxcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogTnVtYmVyIG9mIGZyYW1lcyBvZiBubyBjaGFuZ2UgYmVmb3JlIEFjdGlvbiBpcyBkZWNsYXJlZCBpbmFjdGl2ZVxuICAgIG1heEluYWN0aXZlRnJhbWVzOiAzXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9ydW4vZGVmYXVsdC1hY3Rpb24tcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICAvLyBbc3RyaW5nXTogU2ltdWxhdGlvbiB0byAucnVuXG4gICAgc2ltdWxhdGU6ICd2ZWxvY2l0eScsXG4gICAgXG4gICAgLy8gW251bWJlcl06IERlY2VsZXJhdGlvbiB0byBhcHBseSB0byB2YWx1ZSwgaW4gdW5pdHMgcGVyIHNlY29uZFxuICAgIGRlY2VsZXJhdGlvbjogMCxcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgYWNjZWxlcmF0aW9uOiAwLFxuICAgIFxuICAgIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgYm91bmNlOiAwLFxuICAgIFxuICAgIC8vIFtudW1iZXJdOiBTcHJpbmcgc3RyZW5ndGggZHVyaW5nICdzdHJpbmcnXG4gICAgc3ByaW5nOiA4MCxcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogVGltZWNvbnN0YW50IG9mIGdsaWRlXG4gICAgdGltZUNvbnN0YW50OiAzOTUsXG4gICAgXG4gICAgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gICAgc3RvcFNwZWVkOiA1LFxuICAgIFxuICAgIC8vIFtib29sZWFuXTogQ2FwdHVyZSB3aXRoIHNwcmluZyBwaHlzaWNzIG9uIGxpbWl0IGJyZWFjaFxuICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgIFxuICAgIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWVcbiAgICBmcmljdGlvbjogMC4wNVxuXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9ydW4vZGVmYXVsdC12YWx1ZS1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIElucHV0ID0gcmVxdWlyZSgnLi9JbnB1dC5qcycpLFxuICAgIGN1cnJlbnRQb2ludGVyLCAvLyBTb3J0IHRoaXMgb3V0IGZvciBtdWx0aXRvdWNoXG4gICAgXG4gICAgVE9VQ0hNT1ZFID0gJ3RvdWNobW92ZScsXG4gICAgTU9VU0VNT1ZFID0gJ21vdXNlbW92ZScsXG5cbiAgICAvKlxuICAgICAgICBDb252ZXJ0IGV2ZW50IGludG8gcG9pbnRcbiAgICAgICAgXG4gICAgICAgIFNjcmFwZSB0aGUgeC95IGNvb3JkaW5hdGVzIGZyb20gdGhlIHByb3ZpZGVkIGV2ZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2V2ZW50XTogT3JpZ2luYWwgcG9pbnRlciBldmVudFxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dOiBUcnVlIGlmIHRvdWNoIGV2ZW50XG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IHgveSBjb29yZGluYXRlcyBvZiBldmVudFxuICAgICovXG4gICAgZXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKGV2ZW50LCBpc1RvdWNoRXZlbnQpIHtcbiAgICAgICAgdmFyIHRvdWNoQ2hhbmdlZCA9IGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogZmFsc2U7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdG91Y2hDaGFuZ2VkID8gdG91Y2hDaGFuZ2VkLmNsaWVudFggOiBldmVudC5wYWdlWCxcbiAgICAgICAgICAgIHk6IHRvdWNoQ2hhbmdlZCA/IHRvdWNoQ2hhbmdlZC5jbGllbnRZIDogZXZlbnQucGFnZVlcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBhY3R1YWwgZXZlbnRcbiAgICAgICAgXG4gICAgICAgIENoZWNrcyBmb3IgalF1ZXJ5J3MgLm9yaWdpbmFsRXZlbnQgaWYgcHJlc2VudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtldmVudCB8IGpRdWVyeSBldmVudF1cbiAgICAgICAgQHJldHVybiBbZXZlbnRdOiBUaGUgYWN0dWFsIEpTIGV2ZW50ICBcbiAgICAqL1xuICAgIGdldEFjdHVhbEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50O1xuICAgIH0sXG5cbiAgICBcbiAgICAvKlxuICAgICAgICBQb2ludGVyIGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBQb2ludGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZ2V0QWN0dWFsRXZlbnQoZSksIC8vIEluIGNhc2Ugb2YgalF1ZXJ5IGV2ZW50XG4gICAgICAgICAgICBpc1RvdWNoID0gKGV2ZW50LnRvdWNoZXMpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgc3RhcnRQb2ludCA9IGV2ZW50VG9Qb2ludChldmVudCwgaXNUb3VjaCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnVwZGF0ZShzdGFydFBvaW50KTtcbiAgICAgICAgdGhpcy5pc1RvdWNoID0gaXNUb3VjaDtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfSxcbiAgICBcbiAgICBwcm90byA9IFBvaW50ZXIucHJvdG90eXBlID0gbmV3IElucHV0KCk7XG5cbi8qXG4gICAgQmluZCBtb3ZlIGV2ZW50XG4qL1xucHJvdG8uYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm1vdmVFdmVudCA9IHRoaXMuaXNUb3VjaCA/IFRPVUNITU9WRSA6IE1PVVNFTU9WRTtcbiAgICBcbiAgICBjdXJyZW50UG9pbnRlciA9IHRoaXM7XG4gICAgXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMub25Nb3ZlKTtcbn07XG5cbi8qXG4gICAgVW5iaW5kIG1vdmUgZXZlbnRcbiovXG5wcm90by51bmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMub25Nb3ZlKTtcbn07XG5cbi8qXG4gICAgUG9pbnRlciBvbk1vdmUgZXZlbnQgaGFuZGxlclxuICAgIFxuICAgIEBwYXJhbSBbZXZlbnRdOiBQb2ludGVyIG1vdmUgZXZlbnRcbiovXG5wcm90by5vbk1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBuZXdQb2ludCA9IGV2ZW50VG9Qb2ludChlLCBjdXJyZW50UG9pbnRlci5pc1RvdWNoKTtcbiAgICBlID0gZ2V0QWN0dWFsRXZlbnQoZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGN1cnJlbnRQb2ludGVyLnVwZGF0ZShuZXdQb2ludCk7XG59O1xuXG5wcm90by5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50ZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbnB1dC9Qb2ludGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8vIFtudW1iZXJdOiBGYWN0b3Igb2YgbW92ZW1lbnQgb3V0c2lkZSBvZiBtYXhpbXVtIHJhbmdlIChpZSAwLjUgd2lsbCBtb3ZlIGhhbGYgYXMgbXVjaCBhcyAxKVxuICAgIGVzY2FwZUFtcDogMFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdHJhY2svZGVmYXVsdC12YWx1ZS1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWVzLCB0ZXJtcywgZGVsaW1pdGVyLCBjaG9wKSB7XG4gICAgdmFyIGNvbWJpbmVkID0gJycsXG4gICAgICAgIGtleSA9ICcnLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG5cbiAgICBmb3IgKDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAga2V5ID0gdGVybXNbaV07XG5cbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBjb21iaW5lZCArPSB2YWx1ZXNba2V5XSArIGRlbGltaXRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaG9wKSB7XG4gICAgICAgIGNvbWJpbmVkID0gY29tYmluZWQuc2xpY2UoMCwgLWNob3ApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5lZDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgc3BsaXRDb21tYURlbGltaXRlZCA9IHJlcXVpcmUoJy4vc3BsaXQtY29tbWEtZGVsaW1pdGVkJyksXG4gICAgZnVuY3Rpb25CcmVhayA9IHJlcXVpcmUoJy4vZnVuY3Rpb24tYnJlYWsnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIHRlcm1zKSB7XG4gICAgdmFyIHNwbGl0VmFsdWUgPSB7fSxcbiAgICAgICAgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGgsXG4gICAgICAgIGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZnVuY3Rpb25CcmVhayh2YWx1ZSkpLFxuICAgICAgICBpID0gMDtcblxuICAgIGZvciAoOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgICBzcGxpdFZhbHVlW3Rlcm1zW2ldXSA9IChjb2xvcnNbaV0gIT09IHVuZGVmaW5lZCkgPyBjb2xvcnNbaV0gOiAxO1xuICAgIH1cblxuICAgIHJldHVybiBzcGxpdFZhbHVlO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJygnICsgdmFsdWUgKyAnKSc7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY29sb3I6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDI1NSxcbiAgICAgICAgcm91bmQ6IHRydWVcbiAgICB9LFxuICAgIG9wYWNpdHk6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDFcbiAgICB9LFxuICAgIHBlcmNlbnQ6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgdW5pdDogJyUnXG4gICAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGVmYXVsdC1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFggPSAnWCcsXG4gICAgWSA9ICdZJyxcbiAgICBBTFBIQSA9ICdBbHBoYScsXG5cbiAgICB0ZXJtcyA9IHtcbiAgICAgICAgY29sb3JzOiBbJ1JlZCcsICdHcmVlbicsICdCbHVlJywgQUxQSEFdLFxuICAgICAgICBwb3NpdGlvbnM6IFtYLCBZLCAnWiddLFxuICAgICAgICBkaW1lbnNpb25zOiBbJ1RvcCcsICdSaWdodCcsICdCb3R0b20nLCAnTGVmdCddLFxuICAgICAgICBzaGFkb3c6IFtYLCBZLCAnUmFkaXVzJywgJ1NwcmVhZCcsICdDb2xvciddLFxuICAgICAgICBoc2w6IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdXG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXJtcztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL3NwbGl0LXNwYWNlLWRlbGltaXRlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlRE9NID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsJ01veicsJ08nLCdtcycsICcnXSxcblx0XHRwcmVmaXhlc0xlbmd0aCA9IHByZWZpeGVzLmxlbmd0aCxcblx0XHRjYWNoZSA9IHt9LFxuXHRcdFxuXHRcdC8qXG5cdFx0XHRUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG5cdFx0XHRcblx0XHRcdEBwYXJhbSBbc3RyaW5nXTogU3R5bGUgcHJvcGVydHlcblx0XHRcdEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG5cdFx0Ki9cblx0XHR0ZXN0UHJlZml4ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgdmFyIHRlc3RFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcblx0XHRcdFxuICAgICAgICAgICAgY2FjaGVba2V5XSA9IGtleTtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwcmVmaXhlc0xlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwcmVmaXhlZCA9IHByZWZpeGVzW2ldICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG5cdFx0XHRcdGlmICh0ZXN0RWxlbWVudC5zdHlsZS5oYXNPd25Qcm9wZXJ0eShwcmVmaXhlZCkpIHtcblx0XHRcdFx0XHRjYWNoZVtrZXldID0gcHJlZml4ZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0cmV0dXJuIGNhY2hlW2tleV07XG5cdFx0fTtcblx0XG5cdC8qXG5cdFx0U3R5bGUgRE9NIGZ1bmN0aW9uc1xuXHQqL1xuXHRyZXR1cm4ge1xuXG5cdFx0Lypcblx0XHRcdEdldCBET00gc3R5bGVzXG5cblx0XHRcdEBwYXJhbSBbRE9NIEVsZW1lbnRdOiBFbGVtZW50IHRvIGdldCBzdHlsZXMgZnJvbVxuXHRcdFx0QHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHN0eWxlIHRvIHJlYWRcblx0XHQqL1xuXHRcdGdldDogZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUpIHtcblx0XHRcdHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVtjYWNoZVtuYW1lXSB8fCB0ZXN0UHJlZml4KG5hbWUpXTtcblx0XHR9LFxuXG5cdFx0Lypcblx0XHRcdFNldCBET00gc3R5bGVzXG5cblx0XHRcdEBwYXJhbSBbRE9NIEVsZW1lbnRdOiBFbGVtZW50IHRvIHNldCBzdHlsZXMgb25cblx0XHRcdEBwYXJhbSBbb2JqZWN0XTogTmFtZSBvZiBzdHlsZSB0byBzZXRcblx0XHRcdEBwYXJhbSBbc3RyaW5nXTogTmV3IHJ1bGVcblx0XHQqL1xuXHRcdHNldDogZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHJ1bGUpIHtcblx0XHRcdGVsZW1lbnQuc3R5bGVbY2FjaGVbbmFtZV0gfHwgdGVzdFByZWZpeChuYW1lKV0gPSBydWxlO1xuXHRcdH1cblxuXHR9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgc3R5bGVET00oKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdG9yLXR5cGVzL2RvbS9zdHlsZS1kb20uanNcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcbiAgICBNdWx0aS12YXIgZ2V0dGVyL3NldHRlclxuXG4gICAgQHBhcmFtIFtvYmplY3QgfHwgc3RyaW5nXTogTmFtZSBvZiB2YWx1ZSB0byBnZXQvc2V0XG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgbnVtYmVyXSAob3B0aW9uYWwpOiBTaW5nbGUgcHJvcGVydHkgdG8gc2V0IFxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBHZXR0ZXJcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogU2V0dGVyXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0cywgcHJvcCwgZ2V0dGVyLCBzZXR0ZXIpIHtcbiAgICB2YXIgdHlwZU9mT3B0cyA9IHR5cGVvZiBvcHRzO1xuXG4gICAgLy8gU2V0IHNpbmdsZSwgaWYgdGhpcyBpcyBhIHN0cmluZyBhbmQgd2UgaGF2ZSBhIHByb3BlcnR5XG4gICAgaWYgKHR5cGVPZk9wdHMgPT0gJ3N0cmluZycgJiYgcHJvcCkge1xuICAgICAgICBzZXR0ZXIuY2FsbCh0aGlzLCBvcHRzLCBwcm9wKTtcblxuICAgIC8vIFNldCBtdWx0aSwgaWYgd2UgaGF2ZSBhbiBvYmplY3RcbiAgICB9IGVsc2UgaWYgKHR5cGVPZk9wdHMgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9wdHMpIHtcbiAgICAgICAgICAgIGlmIChvcHRzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBzZXR0ZXIuY2FsbCh0aGlzLCBrZXksIG9wdHNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIC8vIE9yIGdldCwgaWYgd2UgaGF2ZSBhIHN0cmluZyBhbmQgbm8gcHJvcHNcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZ2V0dGVyLmNhbGwodGhpcywgb3B0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2dldHRlci1zZXR0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB0cmFuc2Zvcm1EaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tZGljdGlvbmFyeScpLFxuICAgIHRyYW5zZm9ybVByb3BzID0gdHJhbnNmb3JtRGljdGlvbmFyeS5wcm9wcyxcblxuICAgIFRSQU5TRk9STSA9ICd0cmFuc2Zvcm0nLFxuICAgIFRSQU5TTEFURV9aID0gJ3RyYW5zbGF0ZVonO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvdXRwdXQsIGNhY2hlKSB7XG4gICAgdmFyIGNzcyA9IHt9LFxuICAgICAgICBrZXkgPSAnJyxcbiAgICAgICAgdHJhbnNmb3JtID0gJycsXG4gICAgICAgIHRyYW5zZm9ybUhhc1ogPSBmYWxzZSxcbiAgICAgICAgcnVsZSA9ICcnO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIG91dHB1dCwgY2hlY2sgZm9yIHRyYW5zZm9ybSBwcm9wZXJ0aWVzIGFuZCBjYWNoZVxuICAgIGZvciAoa2V5IGluIG91dHB1dCkge1xuICAgICAgICBpZiAob3V0cHV0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJ1bGUgPSBvdXRwdXRba2V5XTtcbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSB0cmFuc2Zvcm0gcHJvcGVydHksIGFkZCB0byB0cmFuc2Zvcm0gc3RyaW5nXG4gICAgICAgICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSArPSBrZXkgKyAnKCcgKyBydWxlICsgJyknO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUhhc1ogPSAoa2V5ID09PSBUUkFOU0xBVEVfWikgPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gT3IganVzdCBhc3NpZ24gZGlyZWN0bHkgaWYgZGlmZmVyZW50IGZyb20gY2FjaGVcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FjaGVba2V5XSAhPT0gcnVsZSkge1xuICAgICAgICAgICAgICAgIGNhY2hlW2tleV0gPSBjc3Nba2V5XSA9IHJ1bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBoYXZlIHRyYW5zZm9ybSBwcm9wZXJ0aWVzLCBhZGQgdHJhbnNsYXRlWlxuICAgIGlmICh0cmFuc2Zvcm0gIT09ICcnICYmIHRyYW5zZm9ybSAhPT0gY2FjaGVbVFJBTlNGT1JNXSkge1xuICAgICAgICBpZiAoIXRyYW5zZm9ybUhhc1opIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybSArPSAnICcgKyBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBjYWNoZVtUUkFOU0ZPUk1dID0gY3NzW1RSQU5TRk9STV0gPSB0cmFuc2Zvcm07IFxuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm91dGVzL2Nzcy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIENPTE9SID0gJ2NvbG9yJyxcbiAgICBQT1NJVElPTlMgPSAncG9zaXRpb25zJyxcbiAgICBESU1FTlNJT05TID0gJ2RpbWVuc2lvbnMnLFxuICAgIFNIQURPVyA9ICdzaGFkb3cnLFxuICAgIEFOR0xFID0gJ2FuZ2xlJyxcbiAgICBQWCA9ICdweCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8vIENvbG9yIHByb3BlcnRpZXNcbiAgICBjb2xvcjogQ09MT1IsXG4gICAgYmFja2dyb3VuZENvbG9yOiBDT0xPUixcbiAgICBib3JkZXJDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyVG9wQ29sb3I6IENPTE9SLFxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IENPTE9SLFxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBDT0xPUixcbiAgICBib3JkZXJMZWZ0Q29sb3I6IENPTE9SLFxuICAgIG91dGxpbmVDb2xvcjogQ09MT1IsXG4gICAgZmlsbDogQ09MT1IsXG4gICAgc3Ryb2tlOiBDT0xPUixcblxuICAgIC8vIERpbWVuc2lvbnNcbiAgICBtYXJnaW46IERJTUVOU0lPTlMsXG4gICAgcGFkZGluZzogRElNRU5TSU9OUyxcblxuICAgIC8vIFBvc2l0aW9uc1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogUE9TSVRJT05TLFxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiBQT1NJVElPTlMsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBQT1NJVElPTlMsXG4gICAgXG4gICAgLy8gU2hhZG93c1xuICAgIHRleHRTaGFkb3c6IFNIQURPVyxcbiAgICBib3hTaGFkb3c6IFNIQURPVyxcblxuICAgIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgcm90YXRlOiBBTkdMRSxcbiAgICByb3RhdGVYOiBBTkdMRSxcbiAgICByb3RhdGVZOiBBTkdMRSxcbiAgICByb3RhdGVaOiBBTkdMRSxcbiAgICBza2V3WDogQU5HTEUsXG4gICAgc2tld1k6IEFOR0xFLFxuICAgIHRyYW5zbGF0ZVg6IFBYLFxuICAgIHRyYW5zbGF0ZVk6IFBYLFxuICAgIHRyYW5zbGF0ZVo6IFBYLFxuICAgIHBlcnNwZWN0aXZlOiBQWFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvdXRlcy9jc3MvdHlwZS1sb29rdXAuanNcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBsb29rdXAgPSByZXF1aXJlKCcuL2F0dHItbmFtZXMuanMnKSxcblxuICAgIC8qXG4gICAgICAgIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiAgICAqL1xuICAgIHBlcmNlbnRUb1BpeGVscyA9IGZ1bmN0aW9uIChwZXJjZW50YWdlLCBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIChwYXJzZUZsb2F0KHBlcmNlbnRhZ2UpIC8gMTAwKSAqIGxlbmd0aCArICdweCc7XG4gICAgfTtcblxuLypcbiAgICBDcmVhdGUgc3R5bGVzXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBTVkcgUGF0aCBwcm9wZXJ0aWVzXG4gICAgQHBhcmFtIFtvYmplY3RdOiBMZW5ndGggb2YgcGF0aFxuICAgIEByZXR1cm5zIFtvYmplY3RdOiBLZXkvdmFsdWUgcGFpcnMgb2YgdmFsaWQgQ1NTIHByb3BlcnRpZXNcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwcm9wcywgcGF0aExlbmd0aCkge1xuICAgIHZhciBoYXNBcnJheSA9IGZhbHNlLFxuICAgICAgICBzdmdQcm9wZXJ0eSA9ICcnLFxuICAgICAgICBhcnJheVN0eWxlcyA9IHtcbiAgICAgICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgICAgIHNwYWNpbmc6IHBhdGhMZW5ndGggKyAncHgnXG4gICAgICAgIH0sXG4gICAgICAgIHBhdGhTdHlsZXMgPSB7fTtcblxuICAgIC8vIExvb3Agb3ZlciBlYWNoIHByb3BlcnR5IGFuZCBjcmVhdGUgcmVsYXRlZCBjc3MgcHJvcGVydHlcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHN2Z1Byb3BlcnR5ID0gbG9va3VwW2tleV0gfHwga2V5O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgICAgICAgICAgIGhhc0FycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyhwcm9wc1trZXldLCBwYXRoTGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aFN0eWxlc1tzdmdQcm9wZXJ0eV0gPSBwZXJjZW50VG9QaXhlbHMoLXByb3BzW2tleV0sIHBhdGhMZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgIHBhdGhTdHlsZXNbc3ZnUHJvcGVydHldID0gcHJvcHNba2V5XTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKGhhc0FycmF5KSB7XG4gICAgICAgIHBhdGhTdHlsZXNbbG9va3VwLmxlbmd0aF0gPSBhcnJheVN0eWxlcy5sZW5ndGggKyAnICcgKyBhcnJheVN0eWxlcy5zcGFjaW5nO1xuICAgIH1cbmNvbnNvbGUubG9nKHBhdGhTdHlsZXMpO1xuICAgIHJldHVybiBwYXRoU3R5bGVzO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvdXRlcy9wYXRoL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuXHRHZW5lcmF0ZSBtZXRob2QgaXRlcmF0b3Jcblx0XG5cdFRha2VzIGEgbWV0aG9kIG5hbWUgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGxcblx0bG9vcCBvdmVyIGFsbCB0aGUgRWxlbWVudHMgaW4gYSBncm91cCBhbmQgZmlyZSB0aGF0XG5cdG1ldGhvZCB3aXRoIHRob3NlIHByb3BlcnRpZXNcblx0XG5cdEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiBtZXRob2RcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG51bUVsZW1lbnRzID0gdGhpcy5tZW1iZXJzLmxlbmd0aCxcbiAgICAgICAgICAgIGkgPSAwLFxuXHRcdFx0aXNHZXR0ZXIgPSBmYWxzZSxcblx0XHRcdGdldHRlckFycmF5ID0gW10sXG5cdFx0XHRhY3Rvcixcblx0XHRcdGFjdG9yUmV0dXJuO1xuXG5cdFx0Zm9yICg7IGkgPCBudW1FbGVtZW50czsgaSsrKSB7XG5cdFx0XHRhY3RvciA9IHRoaXMubWVtYmVyc1tpXTtcblx0XHRcdGFjdG9yUmV0dXJuID0gYWN0b3JbbWV0aG9kXS5hcHBseShhY3RvciwgYXJndW1lbnRzKTtcblxuXHRcdFx0aWYgKGFjdG9yUmV0dXJuICE9IGFjdG9yKSB7XG4gICAgXHRcdFx0aXNHZXR0ZXIgPSB0cnVlO1xuICAgIFx0XHRcdGdldHRlckFycmF5LnB1c2goYWN0b3JSZXR1cm4pO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gKGlzR2V0dGVyKSA/IGdldHRlckFycmF5IDogdGhpcztcblx0fTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdG9yL3N5c3RlbS9nZW5lcmF0ZS1pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogRGVsYXkgdGhpcyBhY3Rpb24gYnkgeCBtc1xuICAgIGRlbGF5OiAwLFxuICAgIFxuICAgIC8vIFtmdW5jdGlvbl06IENhbGxiYWNrIHdoZW4gQWN0aW9uIHByb2Nlc3Mgc3RhcnRzXG4gICAgb25TdGFydDogdW5kZWZpbmVkLFxuICAgIFxuICAgIC8vIFtmdW5jdGlvbl06IENhbGxiYWNrIHdoZW4gYW55IHZhbHVlIGNoYW5nZXNcbiAgICBvbkNoYW5nZTogdW5kZWZpbmVkLFxuICAgIFxuICAgIC8vIFtmdW5jdGlvbl06IENhbGxiYWNrIGV2ZXJ5IGZyYW1lXG4gICAgb25GcmFtZTogdW5kZWZpbmVkLFxuICAgIFxuICAgIC8vIFtmdW5jdGlvbl06IENhbGxiYWNrIHdoZW4gQWN0aW9uIHByb2Nlc3MgZW5kc1xuICAgIG9uRW5kOiB1bmRlZmluZWRcblxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZ2VuZXJpYy9kZWZhdWx0LWFjdGlvbi1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIC8vIFtudW1iZXJdOiBDdXJyZW50IHRhcmdldCB2YWx1ZVxuICAgIHRvOiB1bmRlZmluZWQsXG5cbiAgICAvLyBbbnVtYmVyXTogTWF4aW11bSBwZXJtaXR0ZWQgdmFsdWUgZHVyaW5nIC50cmFjayBhbmQgLnJ1blxuICAgIG1pbjogdW5kZWZpbmVkLFxuICAgIFxuICAgIC8vIFtudW1iZXJdOiBNaW5pbXVtIHBlcm1pdHRlZCB2YWx1ZSBkdXJpbmcgLnRyYWNrIGFuZCAucnVuXG4gICAgbWF4OiB1bmRlZmluZWQsXG4gICAgXG4gICAgLy8gW251bWJlcl06IE9yaWdpblxuICAgIG9yaWdpbjogMCxcbiAgICBcbiAgICAvLyBbYm9vbGVhbl06IFNldCB0byB0cnVlIHdoZW4gYm90aCBtaW4gYW5kIG1heCBkZXRlY3RlZFxuICAgIGhhc1JhbmdlOiBmYWxzZSxcblxuICAgIC8vIFtib29sZWFuXTogUm91bmQgb3V0cHV0IGlmIHRydWVcbiAgICByb3VuZDogZmFsc2VcblxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZ2VuZXJpYy9kZWZhdWx0LXZhbHVlLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgTW9kTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fa2V5cyA9IFtdO1xuICAgICAgICB0aGlzLl9udW1LZXlzID0gMDtcbiAgICB9O1xuXG5Nb2RNYW5hZ2VyLnByb3RvdHlwZSA9IHtcblxuICAgIC8qXG4gICAgICAgIEFkZCBtb2R1bGUga2V5IHRvIGtleXMgbGlzdFxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIGFkZFxuICAgICovXG4gICAgX2FkZEtleTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fa2V5cy5wdXNoKG5hbWUpO1xuICAgICAgICB0aGlzLl9udW1LZXlzKys7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEFkZCBhIG5ldyBtb2R1bGVcblxuICAgICAgICBAcGFyYW0gW3N0cmluZyB8fCBvYmplY3RdOiBOYW1lIG9mIG5ldyBtb2R1bGUgb3IgbXVsdGlwbGUgbW9kdWxlc1xuICAgICAgICBAcGFyYW0gW29iamVjdF0gKG9wdGlvbmFsKTogTW9kdWxlIHRvIGFkZFxuICAgICovXG4gICAgZXh0ZW5kOiBmdW5jdGlvbiAobmFtZSwgbW9kKSB7XG4gICAgICAgIHZhciBtdWx0aU1vZHMgPSAodHlwZW9mIG5hbWUgPT0gJ29iamVjdCcpLFxuICAgICAgICAgICAgbW9kcyA9IG11bHRpTW9kcyA/IG5hbWUgOiB7fSxcbiAgICAgICAgICAgIGtleSA9ICcnO1xuXG4gICAgICAgIC8vIElmIHdlIGp1c3QgaGF2ZSBvbmUgbW9kdWxlLCBjb2VyY2VcbiAgICAgICAgaWYgKCFtdWx0aU1vZHMpIHtcbiAgICAgICAgICAgIG1vZHNbbmFtZV0gPSBtb2Q7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGtleSBpbiBtb2RzKSB7XG4gICAgICAgICAgICBpZiAobW9kcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkS2V5KGtleSk7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gbW9kc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGVhY2g6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIga2V5ID0gJyc7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9udW1LZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGtleSA9IHRoaXMuX2tleXNbaV07XG4gICAgICAgICAgICBjYWxsYmFjayhrZXksIHRoaXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZE1hbmFnZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvTW9kTWFuYWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICAgIEJlemllciBmdW5jdGlvbiBnZW5lcmF0b3JcbiAgICAgICAgXG4gICAgR2HDq3RhbiBSZW5hdWRlYXUncyBCZXppZXJFYXNpbmdcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICAgWW91J3JlIGEgaGVyb1xuICAgIFxuICAgIFVzZVxuICAgIFxuICAgICAgICB2YXIgZWFzZU91dCA9IG5ldyBCZXppZXIoLjE3LC42NywuODMsLjY3KSxcbiAgICAgICAgICAgIHggPSBlYXNlT3V0KDAuNSk7IC8vIHJldHVybnMgMC42MjcuLi5cbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIE5FV1RPTl9JVEVSQVRJT05TID0gOCxcbiAgICBORVdUT05fTUlOX1NMT1BFID0gMC4wMDEsXG4gICAgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxLFxuICAgIFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TID0gMTAsXG4gICAgS19TUExJTkVfVEFCTEVfU0laRSA9IDExLFxuICAgIEtfU0FNUExFX1NURVBfU0laRSA9IDEuMCAvIChLX1NQTElORV9UQUJMRV9TSVpFIC0gMS4wKSxcbiAgICBGTE9BVF8zMl9TVVBQT1JURUQgPSAnRmxvYXQzMkFycmF5JyBpbiBnbG9iYWwsXG4gICAgXG4gICAgYSA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG4gICAgfSxcbiAgICBcbiAgICBiID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgICAgICByZXR1cm4gMy4wICogYTIgLSA2LjAgKiBhMTtcbiAgICB9LFxuICAgIFxuICAgIGMgPSBmdW5jdGlvbiAoYTEpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGExO1xuICAgIH0sXG5cbiAgICBnZXRTbG9wZSA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogYihhMSwgYTIpICogdCArIGMoYTEpO1xuICAgIH0sXG5cbiAgICBjYWxjQmV6aWVyID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgICAgICByZXR1cm4gKChhKGExLCBhMikgKiB0ICsgYihhMSwgYTIpKSAqIHQgKyBjKGExKSkgKiB0O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQmV6aWVyIGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBCZXppZXIgPSBmdW5jdGlvbiAobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpLFxuICAgICAgICAgICAgX3ByZWNvbXB1dGVkID0gZmFsc2UsXG4gICAgXG4gICAgICAgICAgICBiaW5hcnlTdWJkaXZpZGUgPSBmdW5jdGlvbiAoYVgsIGFBLCBhQikge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50VDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAgICAgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSBmdW5jdGlvbiAoYVgsIGFHdWVzc1QpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBLX1NQTElORV9UQUJMRV9TSVpFOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBnZXRURm9yWCA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2FtcGxlID0gMSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLFxuICAgICAgICAgICAgICAgICAgICBkaXN0ID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBndWVzc0ZvclQgPSAwLjAsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbG9wZSA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlKzFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgICAgICAgICBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBzbG9wZSBpcyBncmVhdGVyIHRoYW4gbWluXG4gICAgICAgICAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgICAgICAgICAvLyBTbG9wZSBpcyBlcXVhbCB0byBtaW5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgICAgICAgICAgLy8gU2xvcGUgaXMgbGVzcyB0aGFuIG1pblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBLX1NBTVBMRV9TVEVQX1NJWkUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHByZWNvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAobVgxICE9IG1ZMSB8fCBtWDIgIT0gbVkyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIEdlbmVyYXRlZCBmdW5jdGlvblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFJldHVybnMgdmFsdWUgMC0xIGJhc2VkIG9uIFhcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBmID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldHVyblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlY29tcHV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBsaW5lYXIgZ3JhZGllbnQsIHJldHVybiBYIGFzIFRcbiAgICAgICAgICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhWDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgYXQgc3RhcnQsIHJldHVybiAwXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIGF0IGVuZCwgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gY2FsY0JlemllcihnZXRURm9yWChhWCksIG1ZMSwgbVkyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBCZXppZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3BsYXkvYmV6aWVyLmpzXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgLy8gW251bWJlcl06IERlZmF1bHQgbWF4IHNpemUgb2YgaGlzdG9yeVxuICAgIG1heEhpc3RvcnlTaXplID0gMyxcbiAgICBcbiAgICAvKlxuICAgICAgICBIaXN0b3J5IGNvbnN0cnVjdG9yXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3Zhcl06IFZhcmlhYmxlIHRvIHN0b3JlIGluIGZpcnN0IGhpc3Rvcnkgc2xvdFxuICAgICAgICBAcGFyYW0gW2ludF0gKG9wdGlvbmFsKTogTWF4aW11bSBzaXplIG9mIGhpc3RvcnlcbiAgICAqL1xuICAgIEhpc3RvcnkgPSBmdW5jdGlvbiAob2JqLCBtYXgpIHtcbiAgICAgICAgdGhpcy5tYXggPSBtYXggfHwgbWF4SGlzdG9yeVNpemU7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmFkZChvYmopO1xuICAgIH07XG4gICAgXG5IaXN0b3J5LnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBQdXNoIG5ldyB2YXIgdG8gaGlzdG9yeVxuICAgICAgICBcbiAgICAgICAgU2hpZnQgb3V0IG9sZGVzdCBlbnRyeSBpZiB3ZSd2ZSByZWFjaGVkIG1heGltdW0gY2FwYWNpdHlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbdmFyXTogVmFyaWFibGUgdG8gcHVzaCBpbnRvIGhpc3RvcnkuZW50cmllc1xuICAgICovXG4gICAgYWRkOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2l6ZSA9IHRoaXMuZ2V0U2l6ZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2gob2JqKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjdXJyZW50U2l6ZSA+PSB0aGlzLm1heCkge1xuICAgICAgICAgICAgdGhpcy5lbnRyaWVzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCB2YXJpYWJsZSBhdCBzcGVjaWZpZWQgaW5kZXhcblxuICAgICAgICBAcGFyYW0gW2ludF06IEluZGV4XG4gICAgICAgIEByZXR1cm4gW3Zhcl06IFZhciBmb3VuZCBhdCBzcGVjaWZpZWQgaW5kZXhcbiAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgaSA9ICh0eXBlb2YgaSA9PT0gJ251bWJlcicpID8gaSA6IHRoaXMuZ2V0U2l6ZSgpIC0gMTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzW2ldO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBzZWNvbmQgbmV3ZXN0IGhpc3RvcnkgZW50cnlcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3Zhcl06IEVudHJ5IGZvdW5kIGF0IGluZGV4IHNpemUgLSAyXG4gICAgKi9cbiAgICBnZXRQcmV2aW91czogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5nZXRTaXplKCkgLSAyKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBjdXJyZW50IGhpc3Rvcnkgc2l6ZVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbaW50XTogQ3VycmVudCBsZW5ndGggb2YgZW50cmllcy5sZW5ndGhcbiAgICAqL1xuICAgIGdldFNpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllcy5sZW5ndGg7XG4gICAgfVxuICAgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIaXN0b3J5O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL0hpc3RvcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH07XG5cblF1ZXVlLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBBZGQgYSBzZXQgb2YgYXJndW1lbnRzIHRvIHF1ZXVlXG4gICAgKi9cbiAgICBhZGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgbmV4dCBzZXQgb2YgYXJndW1lbnRzIGZyb20gcXVldWVcbiAgICAqL1xuICAgIG5leHQ6IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gdGhpcy5xdWV1ZSxcbiAgICAgICAgICAgIHJldHVyblZhbCA9IGZhbHNlLFxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgXG4gICAgICAgIGRpcmVjdGlvbiA9IChhcmd1bWVudHMubGVuZ3RoKSA/IGRpcmVjdGlvbiA6IDE7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiBvdXIgaW5kZXggaXMgYmV0d2VlbiAwIGFuZCB0aGUgcXVldWUgbGVuZ3RoLCByZXR1cm4gdGhhdCBpdGVtXG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgcXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm5WYWwgPSBxdWV1ZVtpbmRleF07XG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXggKyBkaXJlY3Rpb247XG4gICAgICAgIFxuICAgICAgICAvLyBPciBjbGVhclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBSZXBsYWNlIHF1ZXVlIHdpdGggZW1wdHkgYXJyYXlcbiAgICAqL1xuICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9RdWV1ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGFjdGlvbk1hbmFnZXIgPSByZXF1aXJlKCcuLi9hY3Rpb25zL21hbmFnZXInKSxcbiAgICByb3V0ZU1hbmFnZXIgPSByZXF1aXJlKCcuLi9yb3V0ZXMvbWFuYWdlcicpLFxuICAgIHZhbHVlVHlwZU1hbmFnZXIgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9tYW5hZ2VyJyksXG4gICAgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG5cbiAgICBkZWZhdWx0Um91dGUgPSAndmFsdWVzJyxcblxuICAgIHVwZGF0ZSA9IGZ1bmN0aW9uIChmcmFtZXN0YW1wLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIHZhbHVlcyA9IHRoaXMudmFsdWVzLFxuICAgICAgICAgICAgYWN0aW9uID0gYWN0aW9uTWFuYWdlclt0aGlzLmFjdGlvbl0sXG4gICAgICAgICAgICB2YWx1ZUFjdGlvbiA9IGFjdGlvbixcbiAgICAgICAgICAgIG91dHB1dCA9IHRoaXMub3V0cHV0LFxuICAgICAgICAgICAgbnVtQWN0aXZlVmFsdWVzID0gdGhpcy5vcmRlci5sZW5ndGgsXG4gICAgICAgICAgICBudW1BY3RpdmVQYXJlbnRzID0gdGhpcy5wYXJlbnRPcmRlci5sZW5ndGgsXG4gICAgICAgICAgICBrZXkgPSAnJyxcbiAgICAgICAgICAgIHZhbHVlID0ge30sXG4gICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSAwLFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgLy8gVXBkYXRlIElucHV0IGFuZCBhdHRhY2ggbmV3IHZhbHVlcyB0byBvdXRwdXRcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgICAgICAgIG91dHB1dC5pbnB1dCA9IHRoaXMuaW5wdXQub25GcmFtZShmcmFtZXN0YW1wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBBY3Rpb24gaW5wdXRcbiAgICAgICAgaWYgKGFjdGlvbi5vbkZyYW1lU3RhcnQpIHtcbiAgICAgICAgICAgIGFjdGlvbi5vbkZyYW1lU3RhcnQuY2FsbCh0aGlzLCBmcmFtZUR1cmF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgb25TdGFydCBpZiBmaXJzdCBmcmFtZVxuICAgICAgICBpZiAodGhpcy5maXJzdEZyYW1lKSB7XG4gICAgICAgICAgICByb3V0ZU1hbmFnZXIuc2hhcmQoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJvdXRlLm9uU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUub25TdGFydCh2YWx1ZXMsIHNlbGYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIG91dHB1dCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgZGVmYXVsdCByb3V0ZSBvdXRwdXQgaWYgbm90IHByZXNlbnRcbiAgICAgICAgb3V0cHV0W2RlZmF1bHRSb3V0ZV0gPSBvdXRwdXRbZGVmYXVsdFJvdXRlXSB8fCB7fTtcblxuICAgICAgICAvLyBVcGRhdGUgdmFsdWVzXG4gICAgICAgIGZvciAoOyBpIDwgbnVtQWN0aXZlVmFsdWVzOyBpKyspIHtcbiAgICAgICAgICAgIC8vIEdldCB2YWx1ZSBhbmQga2V5XG4gICAgICAgICAgICBrZXkgPSB0aGlzLm9yZGVyW2ldO1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gTG9hZCB2YWx1ZS1zcGVjaWZpYyBhY3Rpb25cbiAgICAgICAgICAgIHZhbHVlQWN0aW9uID0gdmFsdWUubGluayA/IGFjdGlvbk1hbmFnZXIubGluayA6IGFjdGlvbjtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIG5ldyB2YWx1ZVxuICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gdmFsdWVBY3Rpb24ucHJvY2Vzcy5jYWxsKHRoaXMsIGtleSwgdmFsdWUsIGZyYW1lRHVyYXRpb24pO1xuXG4gICAgICAgICAgICAvLyBMaW1pdCBpZiByYW5nZVxuICAgICAgICAgICAgaWYgKHZhbHVlQWN0aW9uLmxpbWl0KSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gdmFsdWVBY3Rpb24ubGltaXQodXBkYXRlZFZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIHZhbHVlIGlmIHJvdW5kIHNldCB0byB0cnVlXG4gICAgICAgICAgICBpZiAodmFsdWUucm91bmQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBNYXRoLnJvdW5kKHVwZGF0ZWRWYWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjaGFuZ2UgZnJvbSBwcmV2aW91cyBmcmFtZVxuICAgICAgICAgICAgdmFsdWUuZnJhbWVDaGFuZ2UgPSB1cGRhdGVkVmFsdWUgLSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdmVsb2NpdHkgaWYgQWN0aW9uIGhhc24ndCBhbHJlYWR5XG4gICAgICAgICAgICBpZiAoIXZhbHVlQWN0aW9uLmNhbGN1bGF0ZXNWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gY2FsYy5zcGVlZFBlclNlY29uZCh2YWx1ZS5mcmFtZUNoYW5nZSwgZnJhbWVEdXJhdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjdXJyZW50IHNwZWVkXG4gICAgICAgICAgICB2YWx1ZS5zcGVlZCA9IE1hdGguYWJzKHZhbHVlLnZlbG9jaXR5KTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY2hhbmdlZCBhbmQgdXBkYXRlXG4gICAgICAgICAgICBpZiAodmFsdWUuY3VycmVudCAhPSB1cGRhdGVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgY3VycmVudFxuICAgICAgICAgICAgdGhpcy52YWx1ZXNba2V5XS5jdXJyZW50ID0gdXBkYXRlZFZhbHVlO1xuXG4gICAgICAgICAgICAvLyBQdXQgdmFsdWUgaW4gZGVmYXVsdCByb3V0ZSBvdXRwdXRcbiAgICAgICAgICAgIG91dHB1dFtkZWZhdWx0Um91dGVdW2tleV0gPSAodmFsdWUudW5pdCkgPyB1cGRhdGVkVmFsdWUgKyB2YWx1ZS51bml0IDogdXBkYXRlZFZhbHVlO1xuXG4gICAgICAgICAgICAvLyBQdXQgaW4gc3BlY2lmaWMgcm9vdCBpZiBub3QgYSBwYXJlbnRcbiAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0W3ZhbHVlLnJvdXRlXVt2YWx1ZS5uYW1lXSA9IG91dHB1dFtkZWZhdWx0Um91dGVdW2tleV07XG5cbiAgICAgICAgICAgIC8vIE9yIGFkZCB0byBwYXJlbnQgb3V0cHV0LCB0byBiZSBjb21iaW5lZFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRbdmFsdWUucGFyZW50XSA9IG91dHB1dFt2YWx1ZS5wYXJlbnRdIHx8IHt9O1xuICAgICAgICAgICAgICAgIG91dHB1dFt2YWx1ZS5wYXJlbnRdW3ZhbHVlLnByb3BOYW1lXSA9IG91dHB1dFtkZWZhdWx0Um91dGVdW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlcyBmcm9tIGNhbGN1bGF0ZWQgY2hpbGRyZW5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bUFjdGl2ZVBhcmVudHM7IGkrKykge1xuICAgICAgICAgICAga2V5ID0gdGhpcy5wYXJlbnRPcmRlcltpXTtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZSBjdXJyZW50IHByb3BlcnR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWVUeXBlTWFuYWdlclt2YWx1ZS50eXBlXS5jb21iaW5lKG91dHB1dFtrZXldKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIG91dHB1dFxuICAgICAgICAgICAgb3V0cHV0W3ZhbHVlLnJvdXRlXVt2YWx1ZS5uYW1lXSA9IG91dHB1dFtkZWZhdWx0Um91dGVdW2tleV0gPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUnVuIG9uRnJhbWUgYW5kIG9uQ2hhbmdlIGZvciBldmVyeSBvdXRwdXRcbiAgICAgICAgcm91dGVNYW5hZ2VyLnNoYXJkKGZ1bmN0aW9uIChyb3V0ZSwgcm91dGVOYW1lLCByb3V0ZU91dHB1dCkge1xuXG4gICAgICAgICAgICAvLyBGaXJlIG9uRnJhbWUgZXZlcnkgZnJhbWVcbiAgICAgICAgICAgIGlmIChyb3V0ZS5vbkZyYW1lKSB7XG4gICAgICAgICAgICAgICAgcm91dGUub25GcmFtZShyb3V0ZU91dHB1dCwgc2VsZik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZpcmUgb25DaGFuZ2VkIGlmIGFueSB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHNlbGYuaGFzQ2hhbmdlZCAmJiByb3V0ZS5vbkNoYW5nZSB8fCBzZWxmLmZpcnN0RnJhbWUgJiYgcm91dGUub25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICByb3V0ZS5vbkNoYW5nZShyb3V0ZU91dHB1dCwgc2VsZik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwgb3V0cHV0KTtcblxuICAgICAgICAvLyBGaXJlIG9uRW5kIGlmIHRoaXMgQWN0aW9uIGhhcyBlbmRlZFxuICAgICAgICBpZiAoYWN0aW9uLmhhc0VuZGVkLmNhbGwodGhpcywgdGhpcy5oYXNDaGFuZ2VkKSkge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICByb3V0ZU1hbmFnZXIuc2hhcmQoZnVuY3Rpb24gKHJvdXRlLCByb3V0ZU5hbWUsIHJvdXRlT3V0cHV0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJvdXRlLm9uRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlLm9uRW5kKHJvdXRlT3V0cHV0LCBzZWxmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBvdXRwdXQpO1xuXG4gICAgICAgICAgICAvLyBJZiBpcyBhIHBsYXkgYWN0aW9uLCBhbmQgaXMgbm90IGFjdGl2ZSwgY2hlY2sgbmV4dCBhY3Rpb25cbiAgICAgICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSAmJiB0aGlzLmFjdGlvbiA9PT0gJ3BsYXknICYmIHRoaXMubmV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpcnN0RnJhbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mcmFtZXN0YW1wID0gZnJhbWVzdGFtcDtcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICB1cGRhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0b3IvdXBkYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gNjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBpc051bSA9IHV0aWxzLmlzTnVtLFxuICAgIGFjdGlvbnNNYW5hZ2VyID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9tYW5hZ2VyJyksXG4gICAgdmFsdWVUeXBlc01hbmFnZXIgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9tYW5hZ2VyJyksXG4gICAgcm91dGVNYW5hZ2VyID0gcmVxdWlyZSgnLi4vcm91dGVzL21hbmFnZXInKSxcblxuICAgIG51bWVyaWNhbFZhbHVlcyA9IFsnY3VycmVudCcsICd0bycsICdzdGFydCcsICdtaW4nLCAnbWF4J10sXG4gICAgbnVtTnVtZXJpY2FsVmFsdWVzID0gbnVtZXJpY2FsVmFsdWVzLmxlbmd0aDtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblxuICAgIC8qXG4gICAgICAgIFBlcmZvcm0gb3BlcmF0aW9uIG9uIHNldCBvZiB2YWx1ZXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJtYSBbc3RyaW5nXTogTmFtZSBvZiBvcGVyYXRpb25cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBWYWx1ZSBvYmplY3RcbiAgICAqL1xuICAgIGFsbDogZnVuY3Rpb24gKG9wLCB2YWx1ZXMpIHtcbiAgICAgICAgdmFyIGtleSA9ICcnO1xuXG4gICAgICAgIGZvciAoa2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tvcF0odmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFJlc2V0IHRoZSB2YWx1ZSBjdXJyZW50IHRvIGl0cyBvcmlnaW5cblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIG9iamVjdFxuICAgICovXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnJldGFyZ2V0KHZhbHVlKTtcbiAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLm9yaWdpbjtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgU2V0IHZhbHVlIG9yaWdpbiBwcm9wZXJ0eSB0byBjdXJyZW50IHZhbHVlXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIG9iamVjdFxuICAgICovXG4gICAgcmVzZXRPcmlnaW46IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZS5vcmlnaW4gPSB2YWx1ZS5jdXJyZW50O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTZXQgdmFsdWUgdG8gcHJvcGVydHkgYmFjayB0byB0YXJnZXRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogVmFsdWUgb2JqZWN0XG4gICAgKi9cbiAgICByZXRhcmdldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlLnRvID0gdmFsdWUudGFyZ2V0O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTd2FwIHZhbHVlIHRvIGFuZCBvcmlnaW4gcHJvcGVydHlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogVmFsdWUgb2JqZWN0XG4gICAgKi9cbiAgICBmbGlwOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIG5ld09yaWdpbiA9ICh2YWx1ZS50YXJnZXQgIT09IHVuZGVmaW5lZCkgPyB2YWx1ZS50YXJnZXQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgIHZhbHVlLnRhcmdldCA9IHZhbHVlLnRvID0gdmFsdWUub3JpZ2luO1xuICAgICAgICB2YWx1ZS5vcmlnaW4gPSBuZXdPcmlnaW47XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFJldHVybnMgYW4gaW5pdGlhbCB2YWx1ZSBzdGF0ZVxuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBJbml0aWFsIGN1cnJlbnRcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogRGVmYXVsdCB2YWx1ZSBzdGF0ZVxuICAgICovXG4gICAgaW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoc3RhcnQsIHJvdXRlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgY3VycmVudDogc3RhcnQgfHwgMCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IENoYW5nZSBwZXIgc2Vjb25kXG4gICAgICAgICAgICBzcGVlZDogMCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IENoYW5nZSBwZXIgc2Vjb25kIHBsdXMgZGlyZWN0aW9uIChpZSBjYW4gYmUgbmVnYXRpdmUpXG4gICAgICAgICAgICB2ZWxvY2l0eTogMCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IEFtb3VudCB2YWx1ZSBoYXMgY2hhbmdlZCBpbiB0aGUgbW9zdCByZWNlbnQgZnJhbWVcbiAgICAgICAgICAgIGZyYW1lQ2hhbmdlOiAwLFxuXG4gICAgICAgICAgICByb3V0ZTogcm91dGVcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgdmFsdWUgaW50byBzdWItdmFsdWVzXG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHZhbHVlXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogQmFzZSB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgIEBwYXJhbSBbRWxlbWVtdF1cbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIGFjdG9yLCB2YWx1ZVR5cGUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWVzID0ge30sXG4gICAgICAgICAgICBzcGxpdFByb3BlcnR5ID0ge30sXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSAnJyxcbiAgICAgICAgICAgIGtleSA9ICcnLFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBudW1OdW1lcmljYWxWYWx1ZXM7IGkrKykge1xuICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gbnVtZXJpY2FsVmFsdWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmModmFsdWVbcHJvcGVydHlOYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVbcHJvcGVydHlOYW1lXSA9IHZhbHVlW3Byb3BlcnR5TmFtZV0uY2FsbChhY3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3BsaXRQcm9wZXJ0eSA9IHZhbHVlVHlwZS5zcGxpdCh2YWx1ZVtwcm9wZXJ0eU5hbWVdKTtcblxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiBwcm9wZXJ0aWVzIHRvIGVhY2ggbmV3IHZhbHVlXG4gICAgICAgICAgICAgICAgZm9yIChrZXkgaW4gc3BsaXRQcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRQcm9wZXJ0eS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IHZhbHVlIGlmIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVzW2tleV0gPSBzcGxpdFZhbHVlc1trZXldIHx8IHV0aWxzLmNvcHkodmFsdWVUeXBlc01hbmFnZXIuZGVmYXVsdFByb3BzKHZhbHVlLnR5cGUsIGtleSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXRWYWx1ZXNba2V5XVtwcm9wZXJ0eU5hbWVdID0gc3BsaXRQcm9wZXJ0eVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWVzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCB2YWx1ZSBpbnRvIG51bWJlciBhbmQgdW5pdCwgc2V0IHVuaXQgdG8gdmFsdWUgaWYgcHJlc2VudFxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogUHJvcGVydHkgdG8gc3BsaXRcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBWYWx1ZSBvYmplY3QgdG8gc2F2ZSB1bml0IHRvXG4gICAgKi9cbiAgICBzcGxpdFVuaXQ6IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHJldHVyblZhbCA9IHByb3BlcnR5LFxuICAgICAgICAgICAgc3BsaXRVbml0VmFsdWU7XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHVuaXQgcHJvcGVydHlcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHByb3BlcnR5KSkge1xuICAgICAgICAgICAgc3BsaXRVbml0VmFsdWUgPSB1dGlscy5zcGxpdFZhbFVuaXQocHJvcGVydHkpO1xuXG4gICAgICAgICAgICBpZiAoIWlzTmFOKHNwbGl0VW5pdFZhbHVlLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblZhbCA9IHNwbGl0VW5pdFZhbHVlLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhbHVlLnVuaXQgPSBzcGxpdFVuaXRWYWx1ZS51bml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgUmVzb2x2ZSBwcm9wZXJ0eVxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiB2YWx1ZVxuICAgICAgICBAcGFyYW0gW3N0cmluZyB8fCBudW1iZXIgfHwgZnVuY3Rpb25dOiBQcm9wZXJ0eVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFBhcmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW2FjdG9yXTogUGFyZW50IGFjdG9yXG4gICAgKi9cbiAgICByZXNvbHZlOiBmdW5jdGlvbiAobmFtZSwgcHJvcGVydHksIHZhbHVlLCBhY3Rvcikge1xuICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gdmFsdWUuY3VycmVudCB8fCAwLFxuICAgICAgICAgICAgaXNOdW1lcmljYWxWYWx1ZSA9IChudW1lcmljYWxWYWx1ZXMuaW5kZXhPZihuYW1lKSA+IC0xKTtcblxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgZnVuY3Rpb24sIHJlc29sdmVcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuYyhwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHkuY2FsbChhY3RvciwgY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBzdHJpbmcsIGNoZWNrIGZvciByZWxhdGl2ZSB2YWx1ZXMgYW5kIHVuaXRzXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSByZWxhdGl2ZSB2YWx1ZSAoaWUgJys9MTAnKVxuICAgICAgICAgICAgaWYgKHByb3BlcnR5LmluZGV4T2YoJz0nKSA+IDApIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IGNhbGMucmVsYXRpdmVWYWx1ZShjdXJyZW50VmFsdWUsIHByb3BlcnR5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIHVuaXQgaWYgc2hvdWxkIGJlIG51bWVyaWNhbCBwcm9wZXJ0eVxuICAgICAgICAgICAgaWYgKGlzTnVtZXJpY2FsVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwbGl0VW5pdChwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIG51bWVyaWNhbCB2YWx1ZSwgY29lcmNlXG4gICAgICAgIGlmIChpc051bWVyaWNhbFZhbHVlKSB7XG4gICAgICAgICAgICBwcm9wZXJ0eSA9IHBhcnNlRmxvYXQocHJvcGVydHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBQcm9jZXNzIG5ldyB2YWx1ZXNcbiAgICAqL1xuICAgIHByZXByb2Nlc3M6IGZ1bmN0aW9uICh2YWx1ZXMsIGFjdG9yLCByb3V0ZSwgc3VmZml4LCBkZWZhdWx0VmFsdWVQcm9wKSB7XG4gICAgICAgIHZhciBwcmVwcm9jZXNzZWRWYWx1ZXMgPSB7fSxcbiAgICAgICAgICAgIHZhbHVlID0ge30sXG4gICAgICAgICAgICBzcGxpdFZhbHVlID0ge30sXG4gICAgICAgICAgICBjaGlsZFZhbHVlID0ge30sXG4gICAgICAgICAgICB0eXBlID0ge30sXG4gICAgICAgICAgICBleGlzdGluZ1ZhbHVlID0ge30sXG4gICAgICAgICAgICBpc1ZhbHVlT2JqID0gZmFsc2UsXG4gICAgICAgICAgICBrZXkgPSAnJyxcbiAgICAgICAgICAgIG5hbWVzcGFjZWRLZXkgPSAnJyxcbiAgICAgICAgICAgIHByb3BLZXkgPSAnJztcblxuICAgICAgICBkZWZhdWx0VmFsdWVQcm9wID0gZGVmYXVsdFZhbHVlUHJvcCB8fCAnY3VycmVudCc7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcblxuICAgICAgICAgICAgICAgIGlzVmFsdWVPYmogPSB1dGlscy5pc09iaih2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAoaXNWYWx1ZU9iaikgPyB2YWx1ZXNba2V5XSA6IHt9O1xuICAgICAgICAgICAgICAgIG5hbWVzcGFjZWRLZXkgPSBrZXkgKyBzdWZmaXg7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdWYWx1ZSA9IGFjdG9yLnZhbHVlc1tuYW1lc3BhY2VkS2V5XTtcblxuICAgICAgICAgICAgICAgIHZhbHVlLm5hbWUgPSBrZXk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsdWVPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVbZGVmYXVsdFZhbHVlUHJvcF0gPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGRvZXNuJ3QgaGF2ZSBhIHNwZWNpYWwgdHlwZSwgY2hlY2sgZm9yIG9uZVxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUudHlwZSAmJiB1dGlscy5pc1N0cmluZyh2YWx1ZVtkZWZhdWx0VmFsdWVQcm9wXSkpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBleGlzdGluZyB2YWx1ZSB3aXRoIHRoaXMga2V5XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1ZhbHVlICYmIGV4aXN0aW5nVmFsdWUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUudHlwZSA9IGV4aXN0aW5nVmFsdWUudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIE9yIGlmIHRoaXMgcm91dGUgaGFzIGEgdHlwZW1hcFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvdXRlLnR5cGVNYXAgJiYgcm91dGUudHlwZU1hcFtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS50eXBlID0gcm91dGUudHlwZU1hcFtrZXldO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgY2hlY2sgYnkgcnVubmluZyB0ZXN0c1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUudHlwZSA9IHZhbHVlVHlwZXNNYW5hZ2VyLnRlc3QodmFsdWVbZGVmYXVsdFZhbHVlUHJvcF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU2V0IHZhbHVlXG4gICAgICAgICAgICAgICAgcHJlcHJvY2Vzc2VkVmFsdWVzW25hbWVzcGFjZWRLZXldID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBwcm9jZXNzIGhhcyB0eXBlLCBzcGxpdCBvciBhc3NpZ24gZGVmYXVsdCBwcm9wc1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSB2YWx1ZVR5cGVzTWFuYWdlclt2YWx1ZS50eXBlXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGhhcyBhIHNwbGl0dGVyIGZ1bmN0aW9uLCBzcGxpdFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZS5zcGxpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuY2hpbGRyZW4gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWUgPSB0aGlzLnNwbGl0KGtleSwgdmFsdWUsIGFjdG9yLCB0eXBlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwcm9wS2V5IGluIHNwbGl0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlID0gdXRpbHMubWVyZ2UodmFsdWUsIHNwbGl0VmFsdWVbcHJvcEtleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlLnBhcmVudCA9IGtleSArIHN1ZmZpeDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZS5uYW1lID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlLnByb3BOYW1lID0gcHJvcEtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNoaWxkVmFsdWUudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNoaWxkVmFsdWUuY2hpbGRyZW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcHJvY2Vzc2VkVmFsdWVzW2tleSArIHByb3BLZXkgKyBzdWZmaXhdID0gY2hpbGRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwcm9jZXNzZWRWYWx1ZXNbbmFtZXNwYWNlZEtleV0gPSB1dGlscy5tZXJnZSh2YWx1ZVR5cGVzTWFuYWdlci5kZWZhdWx0UHJvcHModmFsdWUudHlwZSwga2V5KSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByZXByb2Nlc3NlZFZhbHVlcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgUHJvY2VzcyBuZXcgdmFsdWVzXG4gICAgKi9cbiAgICBwcm9jZXNzOiBmdW5jdGlvbiAodmFsdWVzLCBhY3RvciwgbmFtZXNwYWNlLCBkZWZhdWx0VmFsdWVQcm9wKSB7XG4gICAgICAgIHZhciByb3V0ZSA9IHJvdXRlTWFuYWdlcltuYW1lc3BhY2VdLFxuICAgICAgICAgICAgbmFtZXNwYWNlU3VmZml4ID0gKG5hbWVzcGFjZSA9PT0gJ3ZhbHVlcycpID8gJycgOiAnLicgKyBuYW1lc3BhY2UsXG4gICAgICAgICAgICBwcmVwcm9jZXNzZWRWYWx1ZXMgPSB0aGlzLnByZXByb2Nlc3ModmFsdWVzLCBhY3Rvciwgcm91dGUsIG5hbWVzcGFjZVN1ZmZpeCwgZGVmYXVsdFZhbHVlUHJvcCksXG4gICAgICAgICAgICBrZXkgPSAnJyxcbiAgICAgICAgICAgIHByb3BLZXkgPSAnJyxcbiAgICAgICAgICAgIHByZXByb2Nlc3NlZFZhbHVlID0ge30sXG4gICAgICAgICAgICB0aGlzVmFsdWUgPSB7fSxcbiAgICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IGFjdGlvbnNNYW5hZ2VyW2FjdG9yLmFjdGlvbl0udmFsdWVEZWZhdWx0cyxcbiAgICAgICAgICAgIGhhc0NoaWxkcmVuID0gZmFsc2UsXG4gICAgICAgICAgICBwcm9wO1xuXG4gICAgICAgIGZvciAoa2V5IGluIHByZXByb2Nlc3NlZFZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHByZXByb2Nlc3NlZFZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgcHJlcHJvY2Vzc2VkVmFsdWUgPSBwcmVwcm9jZXNzZWRWYWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB0aGlzVmFsdWUgPSBhY3Rvci52YWx1ZXNba2V5XSB8fCB0aGlzLmluaXRpYWxTdGF0ZSh0aGlzLnJlc29sdmUoJ3N0YXJ0JywgcHJlcHJvY2Vzc2VkVmFsdWUuc3RhcnQsIHt9LCBhY3RvciksIG5hbWVzcGFjZSk7XG4gICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPSAocHJlcHJvY2Vzc2VkVmFsdWUuY2hpbGRyZW4gIT09IHVuZGVmaW5lZCk7XG5cbiAgICAgICAgICAgICAgICAvLyBJbmhlcml0IHByb3BlcnRpZXMgZnJvbSBBY3RvclxuICAgICAgICAgICAgICAgIGZvciAocHJvcEtleSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRQcm9wcy5oYXNPd25Qcm9wZXJ0eShwcm9wS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1ZhbHVlW3Byb3BLZXldID0gKGFjdG9yLmhhc093blByb3BlcnR5KHByb3BLZXkpKSA/IGFjdG9yW3Byb3BLZXldIDogZGVmYXVsdFByb3BzW3Byb3BLZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBwcm9wZXJ0aWVzIGFuZCByZXNvbHZlXG4gICAgICAgICAgICAgICAgZm9yIChwcm9wS2V5IGluIHByZXByb2Nlc3NlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVwcm9jZXNzZWRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcCA9IHByZXByb2Nlc3NlZFZhbHVlW3Byb3BLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgcHJvcGVydHkgaXMgKm5vdCogdW5kZWZpbmVkIG9yIGEgbnVtYmVyLCByZXNvbHZlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCAhPT0gdW5kZWZpbmVkICYmICFpc051bShwcm9wKSAmJiAhaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wID0gdGhpcy5yZXNvbHZlKHByb3BLZXksIHByb3AsIHRoaXNWYWx1ZSwgYWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzVmFsdWVbcHJvcEtleV0gPSBwcm9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGludGVybmFsIHRhcmdldCBpZiB0aGlzIHByb3BlcnR5IGlzICd0bydcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wS2V5ID09PSAndG8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1ZhbHVlLnRhcmdldCA9IHRoaXNWYWx1ZS50bztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXNWYWx1ZS5vcmlnaW4gPSB0aGlzVmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB0aGlzVmFsdWUuaGFzUmFuZ2UgPSAoaXNOdW0odGhpc1ZhbHVlLm1pbikgJiYgaXNOdW0odGhpc1ZhbHVlLm1heCkpID8gdHJ1ZSAgOiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGFjdG9yLnZhbHVlc1trZXldID0gdGhpc1ZhbHVlO1xuICAgICAgICAgICAgICAgIGFjdG9yLnVwZGF0ZU9yZGVyKGtleSwgdXRpbHMuaXNTdHJpbmcodGhpc1ZhbHVlLmxpbmspLCBoYXNDaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhhY3Rvci52YWx1ZXMpO1xuICAgIH0sXG4vKlxuXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKHZhbHVlcywgZWxlbWVudCwgbmFtZXNwYWNlLCBkZWZhdWx0VmFsdWVQcm9wKSB7XG4gICAgICAgIHZhciBrZXkgPSAnJyxcbiAgICAgICAgICAgIHByb3BLZXkgPSAnJyxcbiAgICAgICAgICAgIG5hbWVzcGFjZWRLZXkgPSAnJyxcbiAgICAgICAgICAgIHZhbHVlSXNPYmogPSBmYWxzZSxcbiAgICAgICAgICAgIHByb2Nlc3NlZFZhbHVlcyA9IHt9LFxuICAgICAgICAgICAgcHJvY2Vzc2VkVmFsdWUgPSB7fSxcbiAgICAgICAgICAgIHNwbGl0VmFsdWVzID0ge30sXG4gICAgICAgICAgICBjaGlsZFZhbHVlID0ge30sXG4gICAgICAgICAgICB0aGlzVmFsdWUgPSB7fSxcbiAgICAgICAgICAgIGVsZW1lbnRWYWx1ZXMgPSBlbGVtZW50LnZhbHVlcyxcbiAgICAgICAgICAgIGhhc0NoaWxkcmVuID0gZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZVR5cGUgPSB7fSxcbiAgICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IGFjdGlvbnNNYW5hZ2VyW2VsZW1lbnQuYWN0aW9uXS52YWx1ZURlZmF1bHRzO1xudmFyIERFRkFVTFRfTkFNRVNQQUNFID0gJ3ZhbHVlcyc7XG4gICAgICAgIG5hbWVzcGFjZSA9IG5hbWVzcGFjZSB8fCBERUZBVUxUX05BTUVTUEFDRTtcbiAgICAgICAgZGVmYXVsdFZhbHVlUHJvcCA9IGRlZmF1bHRWYWx1ZVByb3AgfHwgJ2N1cnJlbnQnO1xuXG4gICAgICAgIC8vIFByZXByb2Nlc3MgdmFsdWVzIHRvIHNldFxuICAgICAgICBmb3IgKGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIHZhbHVlSXNPYmogPSB1dGlscy5pc09iaih2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICB0aGlzVmFsdWUgPSB2YWx1ZUlzT2JqID8gdmFsdWVzW2tleV0gOiB7fTtcbiAgICAgICAgICAgIG5hbWVzcGFjZWRLZXkgPSAobmFtZXNwYWNlICE9PSBERUZBVUxUX05BTUVTUEFDRSkgPyBrZXkgKyAnLicgKyBuYW1lc3BhY2UgOiBrZXk7XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgaXNuJ3QgYW4gb2JqZWN0IGFscmVhZHksIHNldCBpdCB0byB0aGUgZGVmYXVsdCBwcm9wZXJ0eVxuICAgICAgICAgICAgaWYgKCF2YWx1ZUlzT2JqKSB7XG4gICAgICAgICAgICAgICAgdGhpc1ZhbHVlW2RlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWVzW2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHZhbHVlIGRvZXNuJ3QgaGF2ZSBhIHR5cGUgcHJvcGVydHksIGNoZWNrIHJvdXRlTWFuYWdlciBhbmQgYXV0byBkZXRlY3RcbiAgICAgICAgICAgIGlmICghdGhpc1ZhbHVlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFZhbHVlcyAmJiBlbGVtZW50VmFsdWVzW25hbWVzcGFjZWRLZXldICYmIGVsZW1lbnRWYWx1ZXNbbmFtZXNwYWNlZEtleV0udHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzVmFsdWUudHlwZSA9IGVsZW1lbnRWYWx1ZXNbbmFtZXNwYWNlZEtleV0udHlwZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvdXRlTWFuYWdlcltuYW1lc3BhY2VdLnR5cGVNYXApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1ZhbHVlLnR5cGUgPSByb3V0ZU1hbmFnZXJbbmFtZXNwYWNlXS50eXBlTWFwW2tleV0gfHwgZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHByb3BlcnR5IGtleSBoYXNuJ3QgYmVlbiBtYXBwZWQsIGFuZCBpdCdzIGEgc3RyaW5nLCBydW4gdGVzdHNcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzU3RyaW5nKHRoaXNWYWx1ZVtkZWZhdWx0VmFsdWVQcm9wXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1ZhbHVlLnR5cGUgPSB2YWx1ZVR5cGVzTWFuYWdlci50ZXN0KHRoaXNWYWx1ZVtkZWZhdWx0VmFsdWVQcm9wXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgdmFsdWVcbiAgICAgICAgICAgIHByb2Nlc3NlZFZhbHVlc1trZXldID0gdGhpc1ZhbHVlO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGhhcyBhIHR5cGUsIHNwbGl0IG9yIGFzc2lnbiBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgICBpZiAodGhpc1ZhbHVlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZVR5cGVzTWFuYWdlclt0aGlzVmFsdWUudHlwZV07XG5cbiAgICAgICAgICAgICAgICAvLyBTcGxpdCBpZiB0aGlzIHZhbHVlIHR5cGUgaXMgYSBzcGxpdHRlclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUuc3BsaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1ZhbHVlLmNoaWxkcmVuID0ge307XG4gICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVzID0gdGhpcy5zcGxpdChrZXksIHRoaXNWYWx1ZSwgZWxlbWVudCwgdmFsdWVUeXBlKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHByb3BLZXkgaW4gc3BsaXRWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWUgPSB1dGlscy5tZXJnZSh0aGlzVmFsdWUsIHNwbGl0VmFsdWVzW3Byb3BLZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWUucGFyZW50ID0gbmFtZXNwYWNlZEtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWUucHJvcE5hbWUgPSBwcm9wS2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNoaWxkVmFsdWUudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjaGlsZFZhbHVlLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkVmFsdWVzW2tleSArIHByb3BLZXldID0gY2hpbGRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gT3IganVzdCBhcHBseSBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc2VkVmFsdWVzW2tleV0gPSB1dGlscy5tZXJnZSh2YWx1ZVR5cGVzTWFuYWdlci5kZWZhdWx0UHJvcHModGhpc1ZhbHVlLnR5cGUsIGtleSksIHRoaXNWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5jb25zb2xlLmxvZyhwcm9jZXNzZWRWYWx1ZXMpO1xuICAgICAgICAvLyBTZXQgcHJlcHJvY2Vzc2VkIHZhbHVlXG4gICAgICAgIGZvciAoa2V5IGluIHByb2Nlc3NlZFZhbHVlcykge1xuICAgICAgICAgICAgbmFtZXNwYWNlZEtleSA9IChuYW1lc3BhY2UgIT09IERFRkFVTFRfTkFNRVNQQUNFKSA/IGtleSArICcuJyArIG5hbWVzcGFjZSA6IGtleTtcbiAgICAgICAgICAgIHByb2Nlc3NlZFZhbHVlID0gcHJvY2Vzc2VkVmFsdWVzW2tleV07XG4gICAgICAgICAgICB0aGlzVmFsdWUgPSBlbGVtZW50VmFsdWVzW25hbWVzcGFjZWRLZXldIHx8IHRoaXMuaW5pdGlhbFN0YXRlKHRoaXMucmVzb2x2ZSgnc3RhcnQnLCBwcm9jZXNzZWRWYWx1ZS5zdGFydCwge30sIGVsZW1lbnQpLCBuYW1lc3BhY2UpO1xuICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPSBwcm9jZXNzZWRWYWx1ZS5jaGlsZHJlbiAhPT0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAvLyBJbmhlcml0IHByb3BlcnRpZXMgZnJvbSBFbGVtZW50XG4gICAgICAgICAgICBmb3IgKHByb3BLZXkgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICAgICAgdGhpc1ZhbHVlW3Byb3BLZXldID0gKGVsZW1lbnQuaGFzT3duUHJvcGVydHkocHJvcEtleSkpID8gZWxlbWVudFtwcm9wS2V5XSA6IGRlZmF1bHRQcm9wc1twcm9wS2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBwcm9wZXJ0aWVzIGFuZCBzZXRcbiAgICAgICAgICAgIGZvciAocHJvcEtleSBpbiBwcm9jZXNzZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzZWRWYWx1ZVtwcm9wS2V5XSAhPT0gdW5kZWZpbmVkICYmICFpc051bShwcm9jZXNzZWRWYWx1ZVtwcm9wS2V5XSkgJiYgIWhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NlZFZhbHVlW3Byb3BLZXldID0gdGhpcy5yZXNvbHZlKHByb3BLZXksIHByb2Nlc3NlZFZhbHVlW3Byb3BLZXldLCB0aGlzVmFsdWUsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXNWYWx1ZVtwcm9wS2V5XSA9IHByb2Nlc3NlZFZhbHVlW3Byb3BLZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKHByb3BLZXkgPT09ICd0bycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1ZhbHVlLnRhcmdldCA9IHRoaXNWYWx1ZS50bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNhdmUgbm9uLW5hbWVzcGFjZWQga2V5XG4gICAgICAgICAgICB0aGlzVmFsdWUubmFtZSA9IGtleTtcblxuICAgICAgICAgICAgLy8gU2V0IHZhbHVlIG9yaWdpblxuICAgICAgICAgICAgdGhpc1ZhbHVlLm9yaWdpbiA9IHRoaXNWYWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBTZXQgaGFzUmFuZ2UgdG8gdHJ1ZSBpZiBtaW4gYW5kIG1heCBhcmUgbnVtYmVyc1xuICAgICAgICAgICAgdGhpc1ZhbHVlLmhhc1JhbmdlID0gKGlzTnVtKHRoaXNWYWx1ZS5taW4pICYmIGlzTnVtKHRoaXNWYWx1ZS5tYXgpKSA/IHRydWUgIDogZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIEFzc2lnbiB0aGlzVmFsdWUgdG8gZWxlbWVudFZhbHVlc1trZXldXG4gICAgICAgICAgICBlbGVtZW50VmFsdWVzW25hbWVzcGFjZWRLZXldID0gdGhpc1ZhbHVlO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgb3JkZXJcbiAgICAgICAgICAgIGVsZW1lbnQudXBkYXRlT3JkZXIobmFtZXNwYWNlZEtleSwgdXRpbHMuaXNTdHJpbmcodGhpc1ZhbHVlLmxpbmspLCBoYXNDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9Ki9cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rvci92YWx1ZS1vcGVyYXRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdGhlTG9vcCA9IHJlcXVpcmUoJy4vbG9vcC5qcycpLFxuICAgIFByb2Nlc3NNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFsbCA9IHt9O1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IFtdO1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuICAgICAgICB0aGVMb29wLnNldENhbGxiYWNrKHRoaXMsIHRoaXMuZmlyZUFjdGl2ZSk7XG4gICAgfTtcbiAgICBcblByb2Nlc3NNYW5hZ2VyLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBbaW50XTogVXNlZCBmb3IgcHJvY2VzcyBJRFxuICAgICovXG4gICAgcHJvY2Vzc0NvdW50ZXI6IDAsXG4gICAgXG4gICAgLypcbiAgICAgICAgW2ludF06IE51bWJlciBvZiBhY3RpdmUgcHJvY2Vzc2VzXG4gICAgKi9cbiAgICBhY3RpdmVDb3VudDogMCxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdGhlIHByb2Nlc3Mgd2l0aCBhIGdpdmVuIGluZGV4XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IEluZGV4IG9mIHByb2Nlc3NcbiAgICAgICAgQHJldHVybiBbUHJvY2Vzc11cbiAgICAqL1xuICAgIGdldFByb2Nlc3M6IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbFtpXTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBudW1iZXIgb2YgYWN0aXZlIHByb2Nlc3Nlc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbaW50XTogTnVtYmVyIG9mIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICAqL1xuICAgIGdldEFjdGl2ZUNvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNvdW50O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGFjdGl2ZSB0b2tlbnNcblxuICAgICAgICBAcmV0dXJuIFthcnJheV06IEFjdGl2ZSB0b2tlbnNcbiAgICAqL1xuICAgIGdldEFjdGl2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmU7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbaW50XTogTGVuZ3RoIG9mIHF1ZXVlXG4gICAgKi9cbiAgICBnZXRRdWV1ZUxlbmd0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRmlyZSBhbGwgYWN0aXZlIHByb2Nlc3Nlc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBUaW1lc3RhbXAgb2YgZXhlY3V0aW5nIGZyYW1lc1xuICAgICAgICBAcGFyYW0gW2ludF06IFRpbWUgc2luY2UgcHJldmlvdXMgZnJhbWVcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgYWN0aXZlIHByb2Nlc3NlcyBmb3VuZFxuICAgICovXG4gICAgZmlyZUFjdGl2ZTogZnVuY3Rpb24gKGZyYW1lc3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdmFyIHByb2Nlc3MsXG4gICAgICAgICAgICBhY3RpdmVDb3VudCA9IDAsXG4gICAgICAgICAgICBhY3RpdmVQcm9jZXNzZXMgPSBbXTtcblxuICAgICAgICAvLyBQdXJnZSBhbmQgY2hlY2sgYWN0aXZlIGNvdW50IGJlZm9yZSBleGVjdXRpb25cbiAgICAgICAgdGhpcy5wdXJnZSgpO1xuICAgICAgICBhY3RpdmVDb3VudCA9IHRoaXMuZ2V0QWN0aXZlQ291bnQoKTtcbiAgICAgICAgYWN0aXZlUHJvY2Vzc2VzID0gdGhpcy5nZXRBY3RpdmUoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhY3RpdmUgcHJvY2Vzc2VzIGFuZCBmaXJlIGNhbGxiYWNrXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZlQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgcHJvY2VzcyA9IHRoaXMuZ2V0UHJvY2VzcyhhY3RpdmVQcm9jZXNzZXNbaV0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocHJvY2Vzcykge1xuICAgICAgICAgICAgICAgIHByb2Nlc3MuZmlyZShmcmFtZXN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlcHVyZ2UgYW5kIHJlY2hlY2sgYWN0aXZlIGNvdW50IGFmdGVyIGV4ZWN1dGlvblxuICAgICAgICB0aGlzLnB1cmdlKCk7XG4gICAgICAgIGFjdGl2ZUNvdW50ID0gdGhpcy5nZXRBY3RpdmVDb3VudCgpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUNvdW50ID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgUmVnaXN0ZXIgYSBuZXcgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtQcm9jZXNzXVxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBJbmRleCBvZiBwcm9jZXNzIHRvIGJlIHVzZWQgYXMgSURcbiAgICAqL1xuICAgIHJlZ2lzdGVyOiBmdW5jdGlvbiAocHJvY2Vzcykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLnByb2Nlc3NDb3VudGVyO1xuXG4gICAgICAgIHRoaXMuYWxsW2lkXSA9IHByb2Nlc3M7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnByb2Nlc3NDb3VudGVyKys7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBBY3RpdmF0ZSBhIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogSW5kZXggb2YgYWN0aXZlIHByb2Nlc3NcbiAgICAqL1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoaSkge1xuICAgICAgICB2YXIgcXVldWVJbmRleCA9IHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLmluZGV4T2YoaSksXG4gICAgICAgICAgICBpc1F1ZXVlZCA9IChxdWV1ZUluZGV4ID4gLTEpLFxuICAgICAgICAgICAgaXNBY3RpdmUgPSAodGhpcy5hY3RpdmUuaW5kZXhPZihpKSA+IC0xKTtcbiAgICAgICAgXG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIGRlYWN0aXZhdGVRdWV1ZSBpZiBpbiB0aGVyZVxuICAgICAgICBpZiAoaXNRdWV1ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLnNwbGljZShxdWV1ZUluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQWRkIHRvIGFjdGl2ZSBwcm9jZXNzZXMgYXJyYXkgaWYgbm90IGFscmVhZHkgaW4gdGhlcmVcbiAgICAgICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUucHVzaChpKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ291bnQrKztcbiAgICAgICAgICAgIHRoZUxvb3Auc3RhcnQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIERlYWN0aXZhdGUgYSBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IEluZGV4IG9mIHByb2Nlc3MgdG8gYWRkIHRvIGRlYWN0aXZhdGUgcXVldWVcbiAgICAqL1xuICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLnB1c2goaSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBQdXJnZSB0aGUgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICovXG4gICAgcHVyZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFjdGl2ZUluZGV4LFxuICAgICAgICAgICAgcXVldWVMZW5ndGggPSB0aGlzLmdldFF1ZXVlTGVuZ3RoKCk7XG4gICAgICAgIFxuICAgICAgICB3aGlsZSAocXVldWVMZW5ndGgtLSkge1xuICAgICAgICAgICAgYWN0aXZlSW5kZXggPSB0aGlzLmFjdGl2ZS5pbmRleE9mKHRoaXMuZGVhY3RpdmF0ZVF1ZXVlW3F1ZXVlTGVuZ3RoXSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIElmIHByb2Nlc3MgaW4gYWN0aXZlIGxpc3QgZGVhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZS5zcGxpY2UoYWN0aXZlSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ291bnQtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlUXVldWUgPSBbXTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFJlbW92ZSB0aGUgcHJvdmlkZWQgaWQgYW5kIHJlaW5kZXggcmVtYWluaW5nIHByb2Nlc3Nlc1xuICAgICovXG4gICAga2lsbDogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmFsbFtpZF07XG4gICAgfVxuICAgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgUHJvY2Vzc01hbmFnZXIoKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvbWFuYWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHByZXNldE1hbmFnZXIgPSByZXF1aXJlKCcuLi8uLi9hY3Rvci9wcmVzZXQtbWFuYWdlcicpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyksXG5cbiAgICBwYXJzZVBsYXlsaXN0ID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgdmFyIHBsYXlsaXN0ID0gYXJnc1swXS5zcGxpdCgnICcpLFxuICAgICAgICAgICAgcGxheWxpc3RMZW5ndGggPSBwbGF5bGlzdC5sZW5ndGgsXG4gICAgICAgICAgICBwcm9wcyA9IHByZXNldE1hbmFnZXIuZ2V0RGVmaW5lZChwbGF5bGlzdFswXSksXG4gICAgICAgICAgICBpID0gMTtcblxuICAgICAgICAvLyBJZiB3ZSd2ZSBnb3QgbXVsdGlwbGUgcGxheWxpc3RzLCBsb29wIHRocm91Z2ggYW5kIGFkZCBlYWNoIHRvIHRoZSBxdWV1ZVxuICAgICAgICBpZiAocGxheWxpc3RMZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IHBsYXlsaXN0TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgYXJncy51bnNoaWZ0KHBsYXlsaXN0W2ldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlLmFkZC5hcHBseSh0aGlzLnF1ZXVlLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgbnVtQXJncyA9IGFyZ3MubGVuZ3RoLFxuICAgICAgICAvLyBJZiBmaXJzdCBhcmd1bWVudCBpcyBhIHN0cmluZywgZ2V0IGJhc2Ugb2JqZWN0IGZyb20gcHJlc2V0c1xuICAgICAgICBwcm9wcyA9IHV0aWxzLmlzU3RyaW5nKGFyZ3NbMF0pID8gcGFyc2VQbGF5bGlzdC5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGkgPSAxO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGFyZ3VtZW50c1xuICAgIGZvciAoOyBpIDwgbnVtQXJnczsgaSsrKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIGFyZ3NbaV0pIHtcbiAgICAgICAgICAgIC8vIE92ZXJyaWRlIHByb3BlcnRpZXNcbiAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgcHJvcHMgPSB1dGlscy5tZXJnZShwcm9wcywgYXJnc1tpXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBEdXJhdGlvblxuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICBwcm9wcy5kdXJhdGlvbiA9IGFyZ3NbaV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBFYXNpbmdcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcHJvcHMuZWFzZSA9IHByb3BzW2ldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCAucGxheSBwcm9wZXJ0aWVzXG4gICAgcHJvcHMubG9vcENvdW50ID0gcHJvcHMueW95b0NvdW50ID0gcHJvcHMuZmxpcENvdW50ID0gMDtcbiAgICBwcm9wcy5wbGF5RGlyZWN0aW9uID0gMTtcblxuICAgIHJldHVybiBwcm9wcztcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcGxheS9wYXJzZS1hcmdzLmpzXG4gKiogbW9kdWxlIGlkID0gNjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvc3BsaXQtY29tbWEtZGVsaW1pdGVkLmpzXG4gKiogbW9kdWxlIGlkID0gNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tYnJlYWsuanNcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBwb3NpdGlvblRlcm1zID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeScpLnBvc2l0aW9ucyxcbiAgICBudW1Qb3NpdGlvblRlcm1zID0gcG9zaXRpb25UZXJtcy5sZW5ndGgsXG5cbiAgICBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnLFxuICAgIFNDQUxFID0gJ3NjYWxlJyxcbiAgICBST1RBVEUgPSAncm90YXRlJyxcbiAgICB0ZXJtcyA9IHtcbiAgICAgICAgZnVuY3M6IFsndHJhbnNsYXRlJywgU0NBTEUsIFJPVEFURSwgJ3NrZXcnLCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdLFxuICAgICAgICBwcm9wczoge30gLy8gb2JqZWN0cyBhcmUgZmFzdGVyIGF0IGRpcmVjdCBsb29rdXBzXG4gICAgfTtcblxuLy8gQ3JlYXRlIHRyYW5zZm9ybSB0ZXJtc1xuKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZnVuY3MgPSB0ZXJtcy5mdW5jcyxcbiAgICAgICAgcHJvcHMgPSB0ZXJtcy5wcm9wcyxcbiAgICAgICAgbnVtRnVuY3MgPSBmdW5jcy5sZW5ndGgsXG4gICAgICAgIGkgPSAwLFxuXG4gICAgICAgIGNyZWF0ZVByb3BzID0gZnVuY3Rpb24gKGZ1bmNOYW1lKSB7XG4gICAgICAgICAgICB2YXIgaiA9IDA7XG5cbiAgICAgICAgICAgIGZvciAoOyBqIDwgbnVtUG9zaXRpb25UZXJtczsgaisrKSB7XG4gICAgICAgICAgICAgICAgcHJvcHNbZnVuY05hbWUgKyBwb3NpdGlvblRlcm1zW2pdXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgXG4gICAgLy8gTWFudWFsbHkgYWRkIHNrZXcgYW5kIHRyYW5zZm9ybSBwZXJzcGVjdGl2ZSAgXG4gICAgcHJvcHNbUk9UQVRFXSA9IHByb3BzW1NDQUxFXSA9IHByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuICAgIFxuICAgIC8vIExvb3Agb3ZlciBlYWNoIGZ1bmN0aW9uIG5hbWUgYW5kIGNyZWF0ZSBmdW5jdGlvbi9wcm9wZXJ0eSB0ZXJtc1xuICAgIGZvciAoOyBpIDwgbnVtRnVuY3M7IGkrKykge1xuICAgICAgICBjcmVhdGVQcm9wcyhmdW5jc1tpXSk7XG4gICAgfVxufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXJtcztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvdXRlcy9jc3MvdHJhbnNmb3JtLWRpY3Rpb25hcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFNUUk9LRSA9ICdzdHJva2UnLFxuICAgIERBU0ggPSBTVFJPS0UgKyAnLWRhc2gnLCAvLyBzdG9rZS13aWR0aFxuICAgIERBU0hfQVJSQVkgPSBEQVNIICsgJ2FycmF5JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgb3BhY2l0eTogU1RST0tFICsgJy1vcGFjaXR5JyxcbiAgICB3aWR0aDogU1RST0tFICsgJy13aWR0aCcsXG4gICAgb2Zmc2V0OiBEQVNIICsgJ29mZnNldCcsXG4gICAgbGVuZ3RoOiBEQVNIX0FSUkFZLFxuICAgIHNwYWNpbmc6IERBU0hfQVJSQVksXG4gICAgbWl0ZXJsaW1pdDogU1RST0tFICsgJy1taXRlcmxpbWl0J1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvdXRlcy9wYXRoL2F0dHItbmFtZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcbiAgICBUaGUgbG9vcFxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgVGltZXIgPSByZXF1aXJlKCcuL3RpbWVyLmpzJyksXG4gICAgdGljayA9IHJlcXVpcmUoJy4vdGljay5qcycpLFxuICAgIExvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudGltZXIgPSBuZXcgVGltZXIoKTtcbiAgICB9O1xuICAgIFxuTG9vcC5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLypcbiAgICAgICAgW2Jvb2xlYW5dOiBDdXJyZW50IHN0YXR1cyBvZiBhbmltYXRpb24gbG9vcFxuICAgICovXG4gICAgaXNSdW5uaW5nOiBmYWxzZSxcbiAgICBcbiAgICAvKlxuICAgICAgICBGaXJlIGFsbCBhY3RpdmUgcHJvY2Vzc2VzIG9uY2UgcGVyIGZyYW1lXG4gICAgKi9cbiAgICBmcmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIFxuICAgICAgICB0aWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmcmFtZXN0YW1wID0gc2VsZi50aW1lci51cGRhdGUoKSwgLy8gQ3VycmVudGx5IGp1c3QgbWVhc3VyaW5nIGluIG1zIC0gd2lsbCBsb29rIGludG8gaGktcmVzIHRpbWVzdGFtcHNcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZSA9IHNlbGYuY2FsbGJhY2suY2FsbChzZWxmLnNjb3BlLCBmcmFtZXN0YW1wLCBzZWxmLnRpbWVyLmdldEVsYXBzZWQoKSk7XG5cbiAgICAgICAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZnJhbWUodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0YXJ0IGxvb3BcbiAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSdyZSBub3QgYWxyZWFkeSBydW5uaW5nIGEgbG9vcFxuICAgICAgICBpZiAoIXRoaXMuaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyLmNsb2NrKCk7XG4gICAgICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZyYW1lKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0b3AgdGhlIGxvb3BcbiAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFNldCB0aGUgY2FsbGJhY2sgdG8gcnVuIGV2ZXJ5IGZyYW1lXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW09iamVjdF06IEV4ZWN1dGlvbiBjb250ZXh0XG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBmaXJlXG4gICAgKi9cbiAgICBzZXRDYWxsYmFjazogZnVuY3Rpb24gKHNjb3BlLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBMb29wKCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wcm9jZXNzL2xvb3AuanNcbiAqKiBtb2R1bGUgaWQgPSA3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscy5qcycpLFxuXG4gICAgbWF4RWxhcHNlZCA9IDMzLFxuICAgIFRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAxNi43O1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG5cblRpbWVyLnByb3RvdHlwZSA9IHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50O1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSBNYXRoLm1pbih0aGlzLmN1cnJlbnQgLSB0aGlzLnByZXYsIG1heEVsYXBzZWQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gICAgfSxcblxuICAgIGdldEVsYXBzZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxhcHNlZDtcbiAgICB9LFxuICAgIFxuICAgIGNsb2NrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHV0aWxzLmN1cnJlbnRUaW1lKCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaW1lcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvdGltZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA3MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgIFxuICAgIEZvciBJRTgvOSBGbGluc3RvbmVzXG5cbiAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgXG4gICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgXG4gICAgTUlUIGxpY2Vuc2VcbiovXG52YXIgdGljayxcbiAgICBsYXN0VGltZSA9IDAsXG4gICAgaGFzV2luZG93ID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKTtcblxuaWYgKCFoYXNXaW5kb3cpIHtcbiAgICAvLyBMb2FkIHJBRiBzaGltXG4gICAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSksXG4gICAgICAgICAgICBpZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcblxuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9OyAgXG4gICAgXG59IGVsc2Uge1xuICAgIHRpY2sgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRpY2s7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wcm9jZXNzL3RpY2suanNcbiAqKiBtb2R1bGUgaWQgPSA3M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicmVkc2hpZnQuZ2xvYmFsLmpzIn0=