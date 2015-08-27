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

	var popmotion = __webpack_require__(1),
	    UIref = window.ui;
	
	window.ui = window.popmotion = popmotion;
	
	/*
	    If noConflict is run, the original reference to window.UI is
	    restored and Popmotion is loaded to window.Popmotion
	*/
	window.ui.noConflict = function () {
	    window.ui = UIref;
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var popmotion = __webpack_require__(2);
	
	popmotion
	    /*
	        Core Actions
	    */
	    .addAction('play', __webpack_require__(3))
	    .addAction('run', __webpack_require__(4))
	    .addAction('fire', __webpack_require__(5))
	    .addAction('track', __webpack_require__(6))
	    .addAction('link', __webpack_require__(7))
	
	    /*
	        Optional value type support
	    */
	    .addValueType({
	        alpha: __webpack_require__(8),
	        angle: __webpack_require__(9),
	        px: __webpack_require__(10),
	        hsl: __webpack_require__(11),
	        rgb: __webpack_require__(12),
	        hex: __webpack_require__(13),
	        color: __webpack_require__(14),
	        positions: __webpack_require__(15),
	        dimensions: __webpack_require__(16),
	        shadow: __webpack_require__(17)
	    });
	
	/*
	    Predefined roles
	*/
	popmotion.cssRole = __webpack_require__(18);
	popmotion.attrRole = __webpack_require__(19);
	popmotion.drawPathRole = __webpack_require__(20);
	popmotion.movePathRole = __webpack_require__(21);  
	
	module.exports = popmotion;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var actionManager = __webpack_require__(28),
	    presetManager = __webpack_require__(29),
	    valueTypeManager = __webpack_require__(30),
	
	    Popmotion = {
	
	        Actor: __webpack_require__(31),
	
	        ActorCollection: __webpack_require__(32),
	
	        Input: __webpack_require__(33),
	
	        Process: __webpack_require__(34),
	
	        Easing: __webpack_require__(35),
	
	        Role: __webpack_require__(36),
	
	        select: __webpack_require__(27),
	
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
	
	        calc: __webpack_require__(22)
	    };
	
	module.exports = Popmotion;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Play action
	    
	    Translate numbers for a set amount of time, applying easing if defined
	*/
	"use strict";
	
	var calc = __webpack_require__(22),
	    utils = __webpack_require__(23),
	    presetEasing = __webpack_require__(37),
	
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
	        actionDefaults: __webpack_require__(38),
	
	        // [object]: Default value properties
	        valueDefaults: __webpack_require__(39),
	
	        // [boolean] Prevent Redshift from autogenerating Element.prototype.play()
	        surpressMethod: true,
	
	        // [object] Methods to add to Actor.prototype
	        actorMethods: __webpack_require__(40),
	
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
	        process: function (value) {
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
	
	module.exports = playAction;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Run physics simulation
	*/
	"use strict";
	
	var calc = __webpack_require__(22),
	    utils = __webpack_require__(23),
	    simulations = __webpack_require__(24);
	
	module.exports = {
	
	    // [object] Default Action properties
	    actionDefaults: __webpack_require__(25),
	
	    // [object] Default value properties
	    valueDefaults: __webpack_require__(26),
	
	    // [boolean]: Tell Redshift this rubix calculates a new velocity itself
	    calculatesVelocity: true,
	    
	    /*
	        Simulate the Value's per-frame movement
	        
	        @param [Value]: Current value
	        @param [string]: Key of current value
	        @param [number]: Duration of frame in ms
	        @return [number]: Calculated value
	    */
	    process: function (value, key, timeSinceLastFrame) {
	        var simulate = value.simulate,
	            simulation = utils.isString(simulate) ? simulations[simulate] : simulate,
	            newVelocity = simulation(value, timeSinceLastFrame, this.started);
	
	        value.velocity = (Math.abs(newVelocity) >= value.stopSpeed) ? newVelocity : 0;
	        return value.current + calc.speedPerFrame(value.velocity, timeSinceLastFrame);
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
	                value.velocity = simulations.bounce(value);
	
	            } else if (value.capture) {
	                simulations.capture(value, isOutsideMax ? value.max : value.min);
	            }
	        }
	        
	        return output;
	    }
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Return current value and immedietly end
	*/
	"use strict";
	
	module.exports = {
	
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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Track user input
	*/
	"use strict";
	
	var calc = __webpack_require__(22),
	    genericParser = __webpack_require__(41),
	    Pointer = __webpack_require__(42);
	
	module.exports = {
	
	    valueDefaults: __webpack_require__(43),
	
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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

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
	
	var calc = __webpack_require__(22),
	
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
	
	module.exports = {
	
	    valueDefaults: __webpack_require__(44),
	
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


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    defaultProps: {
	        min: 0,
	        max: 1
	    }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    defaultProps: {
	        unit: 'deg'
	    }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    defaultProps: {
	        unit: 'px'
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
	
	var utils = __webpack_require__(23),
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
	    pxDefaults = __webpack_require__(10).defaultProps,
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
	    pxDefaults = __webpack_require__(10).defaultProps,
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
	    utils = __webpack_require__(23),
	    pxDefaults = __webpack_require__(10).defaultProps,
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
	
	var Role = __webpack_require__(36);
	var build = __webpack_require__(52);
	var each = __webpack_require__(23).each;
	
	var prefixes = ['Webkit','Moz','O','ms', ''];
	var numPrefixes = prefixes.length;
	var propertyNameCache = {};
	                    
	/*
	    Test style property for prefixed version
	    
	    @param [string]: Style property
	    @return [string]: Cached property name
	*/
	var testPrefix = function (key) {
	        var testElement = document.body;
	        
	        propertyNameCache[key] = false;
	
	        for (var i = 0; i < numPrefixes; i++) {
	            var prefix = prefixes[i],
	                prefixed = (prefix === '') ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
	
	            if (testElement.style.hasOwnProperty(prefixed)) {
	                propertyNameCache[key] = prefixed;
	            }
	        }
	        
	        return propertyNameCache[key];
	    };
	
	var CSSRole = new Role({
	
	    name: 'css',
	
	    _map: __webpack_require__(53),
	    _typeMap: __webpack_require__(54),
	
	    update: function (state) {
	        var actor = this;
	
	        each(build(state), function (key, value) {
	            CSSRole.set.call(actor, key, value);
	        });
	    },
	
	    get: function (key) {
	        key = propertyNameCache[key] || testPrefix(key);
	
	        if (key) {
	            return window.getComputedStyle(this.element, null)[key];
	        }
	    },
	
	    set: function (key, value) {
	        key = propertyNameCache[key] || testPrefix(key);
	
	        if (key) {
	            this.element.style[key] = value;
	        }
	    }
	
	});
	
	module.exports = CSSRole;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Role = __webpack_require__(36);
	var each = __webpack_require__(23).each;
	
	var AttrRole = new Role({
	    name: 'attr',
	
	    update: function (state) {
	        var actor = this;
	
	        each(state, function (key, value) {
	            AttrRole.set.call(actor, key, value);
	        });
	    },
	
	    get: function (key) {
	        return this.element.getAttribute(key);
	    },
	
	    set: function (key, value) {
	        this.element.setAttribute(key, value);
	    }
	});
	
	module.exports = AttrRole;
	


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Role = __webpack_require__(36);
	var cssRole = __webpack_require__(18);
	var each = __webpack_require__(23).each;
	
	/*
	    Convert percentage to pixels
	    
	    @param [number]: Percentage of total length
	    @param [number]: Total length
	*/
	var percentToPixels = function (percentage, length) {
	    return (parseFloat(percentage) / 100) * length + 'px';
	};
	
	/*
	    Create styles
	    
	    @param [object]: SVG Path properties
	    @param [object]: Length of path
	    @returns [object]: Key/value pairs of valid CSS properties
	*/
	var createStyles = function (props, length) {
	    var hasDashArray = false,
	        dashArrayStyles = {
	            length: 0,
	            spacing: length + 'px'
	        },
	        styles = {};
	
	    each(props, function (key, value) {
	        key = SVGDrawPath._map[key] || key;
	
	        switch (key) {
	            case 'length':
	            case 'spacing':
	                hasDashArray = true;
	                dashArrayStyles[key] = percentToPixels(value, length);
	                break;
	            case 'offset':
	                styles[key] = percentToPixels(-value, length);
	                break;
	            default:
	                styles[key] = value;
	        }
	    });
	
	    if (hasDashArray) {
	        styles[SVGDrawPath._map.length] = dashArrayStyles.length + ' ' + dashArrayStyles.spacing;
	    }
	
	    return styles;
	};
	
	/*
	    Draw Path role
	*/
	var SVGDrawPath = new Role({
	    _map: __webpack_require__(51),
	
	    _typeMap: {
	        stroke: 'color'
	    },
	
	    init: function () {
	        this.pathLength = this.element.getTotalLength();
	    },
	
	    /*
	        Update `path` styles and if `element` is present, set
	        x, y and rotation
	    */
	    update: function (state) {
	        cssRole.update.call(this, createStyles(state, this.pathLength));
	    }
	});
	
	module.exports = SVGDrawPath;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var getAngle = __webpack_require__(22).angle;
	
	var calcRotation = function (path, point, distance) {
	    var testPoint = this.path.getPointAtLength(distance + 0.2);
	
	    return getAngle(point, testPoint);
	};
	
	var SVGMovePathRole = {
	    init: function () {
	        this.pathLength = this.path.getTotalLength();
	    },
	
	    update: function (state) {
	        var distance = state.progress * this.pathLength,
	            newPoint = this.path.getPointAtLength(distance),
	            rotation = this.autoRotate ? calcRotation(this.path, newPoint, distance) : state.rotation || 0;
	
	        this.element.setAttribute('transform', 'translate(' + newPoint.x + ', ' + newPoint.y + ') rotate(' + rotation + ')');
	    }
	};
	
	module.exports = SVGMovePathRole;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Calculators
	    ----------------------------------------
	    
	    Simple I/O snippets
	*/
	"use strict";
	
	var utils = __webpack_require__(23),
	
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
	    
	module.exports = calc;

/***/ },
/* 23 */
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
	        Iterate over an object and fire a callback for every item in it
	
	        @param [object]: Properties
	        @param [function]: Callback to fire
	    */
	    each: function (props, callback) {
	        for (var key in props) {
	            if (props.hasOwnProperty(key)) {
	                callback(key, props[key]);
	            }
	        }
	    },
	    
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var calc = __webpack_require__(22),
	    utils = __webpack_require__(23),
	    speedPerFrame = calc.speedPerFrame;
	
	/*
	    Add core physics simulations
	*/
	var simulations = {
	    /*
	        Velocity
	        
	        The default .run() simulation.
	        
	        Applies any set deceleration and acceleration to existing velocity
	    */
	    velocity: function (value, duration) {
	        value.velocity = value.velocity - speedPerFrame(value.deceleration, duration) + speedPerFrame(value.acceleration, duration);
	
	        return simulations.friction(value, duration);
	    },
	
	    /*
	        Glide
	        
	        Emulates touch device scrolling effects with exponential decay
	        http://ariya.ofilabs.com/2013/11/javascript-kinetic-scrolling-part-2.html
	    */
	    glide: function (value, duration, started) {
	        var timeUntilFinished = - utils.currentTime() - started,
	            delta = - value.to * Math.exp(timeUntilFinished / value.timeConstant);
	
	        return (value.to + delta) - value.current;
	    },
	
	    /*
	        Friction
	
	        Apply friction to the current value
	        TODO: Make this framerate-independent
	    */
	    friction: function (value, duration) {
	        var newVelocity = speedPerFrame(value.velocity, duration) * (1 - value.friction);
	
	        return calc.speedPerSecond(newVelocity, duration);
	    },
	
	    spring: function (value, duration) {
	        var distance = value.to - value.current;
	
	        value.velocity += distance * speedPerFrame(value.spring, duration);
	        
	        return simulations.friction(value, duration);
	    },
	
	    bounce: function (value) {
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
	    },
	
	    capture: function (value, target) {
	        value.to = target;
	        value.simulate = 'spring';
	        value.capture = value.min = value.max = undefined;
	    }
	};
	
	module.exports = simulations;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    // [int]: Number of frames Action has been inactive
	    inactiveFrames: 0,
	    
	    // [number]: Number of frames of no change before Action is declared inactive
	    maxInactiveFrames: 3
	};

/***/ },
/* 26 */
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
	    friction: 0
	
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ActorCollection = __webpack_require__(32);
	
	/*
	    Create an ActorCollection based on a selection of DOM nodes
	
	    @param [string || NodeList || jQuery object]:
	        If string, treated as selector.
	        If not, treated as preexisting NodeList || jQuery object.
	*/
	module.exports = function (selector, opts) {
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
	
	    return new ActorCollection(elements, opts);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Actor,
	    ActorCollection,
	    utils = __webpack_require__(23),
	    generateMethodIterator = __webpack_require__(55),
	    genericActionProps = __webpack_require__(56),
	    genericValueProps = __webpack_require__(57),
	    genericParse = __webpack_require__(41),
	
	    ModManager = __webpack_require__(58),
	
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
	
	module.exports = actionManager;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var utils = __webpack_require__(23),
	    ModManager = __webpack_require__(58),
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ModManager = __webpack_require__(58),
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Process = __webpack_require__(34),
	    Queue = __webpack_require__(59),
	    utils = __webpack_require__(23),
	    update = __webpack_require__(60),
	    valueOps = __webpack_require__(61),
	    actionManager = __webpack_require__(28),
	    defaultRole = __webpack_require__(62),
	    cssRole = __webpack_require__(18),
	    getterSetter = __webpack_require__(63),
	    each = utils.each,
	
	    Actor = function (opts) {
	        var actor = this,
	            roles = [ defaultRole ];
	
	        // Auto-detect element type, if present
	        if (opts && opts.element) {
	
	            // Add CSS role if HTMLElement
	            if (opts.element instanceof HTMLElement) {
	                roles.push(cssRole);
	
	            } else if (opts.element instanceof SVGElement) {
	
	            }
	        }
	
	        // Set values object and state object
	        this.values = {};
	        this.state = {
	            values: {}
	        };
	
	        // Init queue and process
	        this.queue = new Queue();
	        this.process = new Process(this, update);
	
	        this.set(opts);
	
	        // Init roles
	        if (opts && opts.as) {
	            if (utils.isArray(opts.as)) {
	                roles.push.apply(roles, opts.as);
	            } else {
	                roles.push(opts.as);
	            }
	        }
	
	        this.roles = roles;
	        this.roles.forEach(function (role) {
	            // Extend Actor with getter/setter if
	            // Role has name property
	            if (role.name) {
	                actor[role.name] = function (a, b) {
	                    return getterSetter.call(actor, a, b, role.get, role.set);
	                };
	            }
	
	            // Fire init method if one available
	            if (role.init) {
	                role.init.call(actor);
	            }
	        });
	    };
	
	Actor.prototype = {
	    
	    /*
	        Set Action values and properties
	        
	        @param [object]: Element properties
	        @param [string] (option): Name of default value property
	    */
	    set: function (props, defaultValueProp) {
	        // Reset Element properties and write new props
	        this.clearOrder();
	        this.resetProps();
	
	        if (props) {
	            this.setProps(props);
	            this.setValues(props.values, defaultValueProp);
	        }
	
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
	        var actor = this;
	
	        each(props, function (key, value) {
	            if (key !== 'values') {
	                actor[key] = value;
	            }
	        });
	    },
	
	    /*
	        Reset properties to Action defaults
	    */
	    resetProps: function () {
	        if (this.action) {
	            this.setProps(actionManager[this.action].actionDefaults);
	        }
	        return this;
	    },
	
	    /*
	        Set values
	
	        @param [object || string || number]: Value
	        @param [string] (optional): Default property to set
	    */
	    setValues: function (values, defaultValueProp) {
	        valueOps.process(values, this, defaultValueProp);
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
	
	module.exports = Actor;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Actor = __webpack_require__(31),
	    generateMethodIterator = __webpack_require__(55),
	    utils = __webpack_require__(23),
	    actionManager = __webpack_require__(28),
	
	    DEFAULT_STAGGER_EASE = 'linear',
	
	    /*
	        ActorCollection constructor
	
	        @param [array]: Array of Actors, or valid Actor elements
	    */
	    ActorCollection = function (elements, opts) {
	        // Add initial elements
	        this.clear();
	
	        if (elements) {
	            this.add(elements, opts);
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
	
	        staggerProps.onUpdate = function (output) {
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
	        Iterate over each element in collection
	
	        @param [function]: Callback to run on each Actor, provided (actor, index) args
	    */
	    each: function (callback) {
	        this.elements.forEach(callback);
	        return this;
	    },
	
	    /*
	        Add a group of Actors to our Collection
	
	        @param [array]: Array of Actors, or valid Actor elements
	    */
	    add: function (elements, opts) {
	        var numNewElements = elements.length,
	            i = 0,
	            newElement;
	
	        opts = opts || {};
	
	        for (; i < numNewElements; i++) {
	            opts.element = elements[i];
	            newElement = (elements[i] instanceof Actor) ? elements[i] : new Actor(opts);
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
	
	module.exports = ActorCollection;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Input controller
	*/
	"use strict";
	
	var calc = __webpack_require__(22),
	    utils = __webpack_require__(23),
	    History = __webpack_require__(64),
	
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
	
	module.exports = Process;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var Bezier = __webpack_require__(66),
	
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
	
	module.exports = Easing;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(23);
	var each = utils.each;
	
	/*
	    Role class constructor
	
	    @param [object]: Optional methods and props to add:
	        name [string]:      Name of generated getter/setter method on Actor
	        _map [object]:      Map Actor values to these values for this Role
	        _typeMap [object]:  Map values to value types
	        init [function]:    Callback to run when this Role is added to an Actor
	        start [function]:   Callback to run when host Actor starts an action
	        complete [function]: Callback to run when action completes
	        frame [function]:   Callback to fire once per frame
	        update [function]:  Callback to fire when values change
	        get [function]:     Read value from actual element
	        set [function]:     Set value on actual element
	*/
	var Role = function (methods) {
	    var role = this;
	
	    role._map = {};
	
	    each(methods, function (name, method) {
	        role[name] = (!utils.isObj(method)) ? method : utils.copy(method);
	    });
	};
	
	/*
	    Create a new role
	
	    @param [object]: Optional methods and props to add
	    @param [valuesToMap]: Override existing map with these values
	    @return [Role]: New Role
	*/
	var createRole = function (methods, values) {
	    var newRole = new Role(methods);
	
	    each(values, function (key, value) {
	        newRole._map[key] = value;
	    });
	
	    return newRole;
	};
	
	Role.prototype = {
	
	    /*
	        Map value keys or generate new Role with updated map
	
	        Getter:
	            @param [string]: Key to map
	            @return [string]: Mapped key, or key if no mapped key found
	
	        Setter: 
	            @param [object]: Map of Actor keys -> Role keys
	            @return [Role]: New Role with unique map
	    */
	    map: function (values) {
	        // If this is a string, get mapped value
	        // Otherwise this is a map, duplicated role with updated map
	        return (utils.isString(values)) ? this._map[values] || values : createRole(this, values);
	    }
	};
	
	module.exports = Role;

/***/ },
/* 37 */
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
	
	var Easing = __webpack_require__(35),
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
	
	module.exports = baseEasing;

/***/ },
/* 38 */
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
/* 39 */
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var parseArgs = __webpack_require__(67),
	    utils = __webpack_require__(23);
	
	module.exports = {
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

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var presetManager = __webpack_require__(29),
	    utils = __webpack_require__(23);
	
	module.exports = function (base, override) {
	    var props = (typeof base === 'string') ? presetManager.getDefined(base) : base;
	
	    // Override properties with second arg if it's an object
	    if (typeof override === 'object') {
	        props = utils.merge(props, override);
	    }
	
	    return props;
	};

/***/ },
/* 42 */
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    amp: 1,
	
	    // [number]: Factor of movement outside of maximum range (ie 0.5 will move half as much as 1)
	    escapeAmp: 0
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    // [array]: Linear range of values (eg [-100, -50, 50, 100]) of linked value to map to .mapTo
	    mapLink: undefined,
	    
	    // [array]: Non-linear range of values (eg [0, 1, 1, 0]) to map to .mapLink - here the linked value being 75 would result in a value of 0.5
	    mapTo: undefined,
	    
	    // [number]: Factor of input movement to direct output
	    amp: 1
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

	var splitCommaDelimited = __webpack_require__(68),
	    functionBreak = __webpack_require__(69);
	
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var transformDictionary = __webpack_require__(70),
	    transformProps = transformDictionary.props,
	
	    TRANSLATE_Z = 'translateZ';
	
	module.exports = function (output) {
	    var css = {},
	        key = '',
	        transform = '',
	        transformHasZ = false,
	        rule = '';
	        
	    // Loop through output, check for transform properties
	    for (key in output) {
	        if (output.hasOwnProperty(key)) {
	            rule = output[key];
	            // If this is a transform property, add to transform string
	            if (transformProps[key]) {
	                transform += key + '(' + rule + ')';
	                transformHasZ = (key === TRANSLATE_Z) ? true : transformHasZ;
	            
	            // Or just assign directly
	            } else {
	                css[key] = rule;
	            }
	        }
	    }
	
	    // If we have transform properties, add translateZ
	    if (transform !== '') {
	        if (!transformHasZ) {
	            transform += ' ' + TRANSLATE_Z + '(0px)';
	        }
	
	        css.transform = transform;
	    }
	
	    return css;
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var TRANSLATE = 'translate';
	
	module.exports = {
	    x: TRANSLATE + 'X',
	    y: TRANSLATE + 'Y',
	    z: TRANSLATE + 'Z'
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var COLOR = 'color',
	    POSITIONS = 'positions',
	    DIMENSIONS = 'dimensions',
	    SHADOW = 'shadow',
	    ANGLE = 'angle',
	    ALPHA = 'alpha',
	    PX = 'px';
	
	module.exports = {
	    // Color properties
	    color: COLOR,
	    backgroundColor: COLOR,
	    outlineColor: COLOR,
	    fill: COLOR,
	    stroke: COLOR,
	    // Border
	    borderColor: COLOR,
	    borderTopColor: COLOR,
	    borderRightColor: COLOR,
	    borderBottomColor: COLOR,
	    borderLeftColor: COLOR,
	    borderRadius: PX,
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

/***/ },
/* 55 */
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


/***/ },
/* 56 */
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
/* 57 */
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
	    round: false,
	
	    // [string]: Name of value to listen to
	    link: undefined
	};

/***/ },
/* 58 */
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
/* 59 */
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var actionManager = __webpack_require__(28),
	    valueTypeManager = __webpack_require__(30),
	    calc = __webpack_require__(22),
	    each = __webpack_require__(23).each,
	
	    update = function (framestamp, frameDuration) {
	        var actor = this,
	            values = this.values,
	            action = actionManager[this.action],
	            valueAction = action,
	            state = this.state,
	            numActiveValues = this.order.length,
	            numActiveParents = this.parentOrder.length,
	            numRoles = this.roles.length,
	            key = '',
	            value = {},
	            mappedValues = {},
	            updatedValue = 0,
	            i = 0,
	            role;
	
	        // Update Input and attach new values to state
	        if (this.input) {
	            state.input = this.input.onFrame(framestamp);
	        }
	
	        // Update Action input
	        if (action.onFrameStart && action.onFrameStart.call(this, frameDuration) === false) {
	            return false;
	        }
	
	        // Fire onStart if first frame
	        if (this.firstFrame) {
	            for (i = 0; i < numRoles; i++) {
	                role = this.roles[i];
	                if (role.start) {
	                    role.start.call(actor);
	                }
	            }
	        }
	
	        // Update values
	        for (i = 0; i < numActiveValues; i++) {
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
	
	            // Put value in state
	            state.values[key] = (value.unit) ? updatedValue + value.unit : updatedValue;
	
	            // Or add to parent state, to be combined
	            if (value.parent) {
	                state[value.parent] = state[value.parent] || {};
	                state[value.parent][value.propName] = state.values[key];
	            }
	        }
	
	        // Update parent values from calculated children
	        for (i = 0; i < numActiveParents; i++) {
	            key = this.parentOrder[i];
	            value = this.values[key];
	
	            // Update parent value current property
	            value.current = valueTypeManager[value.type].combine(state[key]);
	
	            // Update state
	            state.values[value.name] = value.current;
	        }
	
	        // Fire `frame` and `update` callbacks
	        for (i = 0; i < numRoles; i++) {
	            role = this.roles[i];
	            mappedValues = {};
	
	            each(this.state.values, function (name, val) {
	                mappedValues[role.map(name)] = val;
	            });
	
	            if (role.frame) {
	                role.frame.call(actor, mappedValues);
	            }
	
	            if (role.update && (actor.hasChanged || actor.firstFrame)) {
	                role.update.call(actor, mappedValues);
	            }
	        }
	
	        // Fire onEnd if this Action has ended
	        if (this.isActive && action.hasEnded && action.hasEnded.call(this, this.hasChanged)) {
	            this.isActive = false;
	
	            // Fire `complete` callback
	            for (i = 0; i < numRoles; i++) {
	                role = this.roles[i];
	                if (role.complete) {
	                    role.complete.call(actor);
	                }
	            }
	
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
	
	module.exports = update;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var calc = __webpack_require__(22),
	    utils = __webpack_require__(23),
	    isNum = utils.isNum,
	    actionsManager = __webpack_require__(28),
	    valueTypesManager = __webpack_require__(30),
	    each = utils.each,
	
	    numericalValues = ['current', 'to', 'init', 'min', 'max', 'velocity', 'friction', 'spring'],
	    numNumericalValues = numericalValues.length,
	
	    checkRoles = function (name, roles) {
	        var valueType;
	
	        each(roles, function (key, role) {
	            if (role._typeMap) {
	                valueType = role._typeMap[role.map(name)] || valueType;
	            }
	        });
	
	        return valueType;
	    },
	
	    checkNumericalValue = function (name) {
	        return (numericalValues.indexOf(name) > -1);
	    };
	
	module.exports = {
	    /*
	        Perform operation on set of values
	        
	        @parma [string]: Name of operation
	        @param [object]: Value object
	    */
	    all: function (op, values) {
	        var valueOps = this;
	
	        each(values, function (key, value) {
	            valueOps[op](value);
	        });
	
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
	    initialState: function (start) {
	        return {
	            // [number]: Current value
	            current: start || 0,
	            
	            // [number]: Change per second
	            speed: 0,
	            
	            // [number]: Change per second plus direction (ie can be negative)
	            velocity: 0,
	            
	            // [number]: Amount value has changed in the most recent frame
	            frameChange: 0
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
	    preprocess: function (values, actor, defaultValueProp) {
	        var preprocessedValues = {},
	            value = {},
	            splitValue = {},
	            childValue = {},
	            type = {},
	            existingValue = {},
	            isValueObj = false,
	            key = '',
	            propKey = '';
	
	        defaultValueProp = defaultValueProp || 'current';
	
	        for (key in values) {
	            if (values.hasOwnProperty(key)) {
	
	                isValueObj = utils.isObj(values[key]);
	                value = (isValueObj) ? values[key] : {};
	                existingValue = actor.values[key];
	
	                value.name = key;
	
	                if (!isValueObj) {
	                    value[defaultValueProp] = values[key];
	                }
	
	                // If this value doesn't have a special type, check for one
	                if (!value.type) {
	                    // Check if existing value with this key
	                    if (existingValue && existingValue.type) {
	                        value.type = existingValue.type;
	                    
	                    // Or check route typemaps
	                    } else {
	                        value.type = checkRoles(key, actor.roles);
	
	                        // Otherwise, check by running tests if this is a string
	                        if (!value.type && utils.isString(value[defaultValueProp])) {
	                            value.type = valueTypesManager.test(value[defaultValueProp]);
	                        }
	                    }
	                }
	
	                // Set value
	                preprocessedValues[key] = value;
	
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
	                                childValue.parent = key;
	                                childValue.name = key;
	                                childValue.propName = propKey;
	                                delete childValue.type;
	                                delete childValue.children;
	
	                                preprocessedValues[key + propKey] = childValue;
	                            }
	                        }
	                    } else {
	                        preprocessedValues[key] = utils.merge(valueTypesManager.defaultProps(value.type, key), value);
	                    }
	                }
	            }
	        }
	
	        return preprocessedValues;
	    },
	
	    /*
	        Process new values
	    */
	    process: function (values, actor, defaultValueProp) {
	        var preprocessedValues = this.preprocess(values, actor, defaultValueProp),
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
	                thisValue = actor.values[key] || this.initialState(this.resolve('init', preprocessedValue.init, {}, actor));
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

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var Role = __webpack_require__(36);
	
	module.exports = new Role({
	    init: function () {
	        if (this.init) {
	            this.init();
	        }
	    },
	
	    start: function () {
	        if (this.onStart) {
	            this.onStart();
	        }
	    },
	
	    frame: function (state) {
	        if (this.onFrame) {
	            this.onFrame(state);
	        }
	    },
	
	    update: function (state) {
	        if (this.onUpdate) {
	            this.onUpdate(state);
	        }
	    },
	
	    complete: function () {
	        if (this.onComplete) {
	            this.onComplete();
	        }
	    }
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var each = __webpack_require__(23).each;
	
	/*
	    Multi-var getter/setter
	
	    @param [object || string]: Name of value to get/set
	    @param [string || number] (optional): Single property to set 
	    @param [function]: Getter
	    @param [function]: Setter
	*/
	module.exports = function (opts, prop, getter, setter) {
	    var self = this,
	        typeOfOpts = typeof opts;
	
	    // Set single, if this is a string and we have a property
	    if (typeOfOpts == 'string' && prop) {
	        setter.call(self, opts, prop);
	
	    // Set multi, if we have an object
	    } else if (typeOfOpts == 'object') {
	        each(opts, function (key, value) {
	            setter.call(self, key, value);
	        });
	
	    // Or get, if we have a string and no props
	    } else {
	        return getter.call(self, opts);
	    }
	
	    return self;
	};

/***/ },
/* 64 */
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var theLoop = __webpack_require__(71),
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
	
	module.exports = new ProcessManager();

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

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
	
	module.exports = Bezier;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var presetManager = __webpack_require__(29),
	    utils = __webpack_require__(23),
	
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
	                props.ease = args[i];
	                break;
	        }
	    }
	
	    // Default .play properties
	    props.loopCount = props.yoyoCount = props.flipCount = 0;
	    props.playDirection = 1;
	
	    return props;
	};


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (value) {
	    return (typeof value === 'string') ? value.split(/,\s*/) : [value];
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (value) {
	    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
	};

/***/ },
/* 70 */
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
	
	module.exports = new Loop();

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var utils = __webpack_require__(23),
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzBlYjJkNjA2YWVlYjc1ZDczZDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2FkL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2ZpcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYWxwaGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FuZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9weC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9yZ2IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvZGltZW5zaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvY3NzUm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvYXR0ci9hdHRyUm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvcGF0aC9kcmF3UGF0aFJvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL3BhdGgvbW92ZVBhdGhSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3J1bi9zaW11bGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9ydW4vZGVmYXVsdC1hY3Rpb24tcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcnVuL2RlZmF1bHQtdmFsdWUtcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci9wcmVzZXQtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3IvQWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL0FjdG9yQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvUHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wbGF5L0Vhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvUm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wbGF5L3ByZXNldC1lYXNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGxheS9kZWZhdWx0LWFjdGlvbi1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wbGF5L2RlZmF1bHQtdmFsdWUtcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGxheS9hY3Rvci1tZXRob2RzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2dlbmVyaWMvcGFyc2UtYXJncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvUG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90cmFjay9kZWZhdWx0LXZhbHVlLXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2xpbmsvZGVmYXVsdC12YWx1ZS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9wYXRoL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvY3NzL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL3N5c3RlbS9nZW5lcmF0ZS1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9nZW5lcmljL2RlZmF1bHQtYWN0aW9uLXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2dlbmVyaWMvZGVmYXVsdC12YWx1ZS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL01vZE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9RdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3IvdXBkYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci92YWx1ZS1vcGVyYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9kZWZhdWx0Um9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2dldHRlci1zZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9IaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGxheS9CZXppZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGxheS9wYXJzZS1hcmdzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvc3BsaXQtY29tbWEtZGVsaW1pdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tYnJlYWsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2Nzcy90cmFuc2Zvcm0tZGljdGlvbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9sb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL3RpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL3RpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7QUN0Q0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNYQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0Q7O0FBRUEsNEI7Ozs7OztBQ3RDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQSw0Qjs7Ozs7O0FDeENBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzNHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEc7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUMxREE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBYyxlQUFlO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZ0U7QUFDaEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQy9CQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDN0JBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQzFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDaENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNEI7QUFDNUIsMkJBQTBCO0FBQzFCLHVCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDckNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBbUM7QUFDbkMsK0JBQThCO0FBQzlCLDBCQUF5QjtBQUN6Qix3QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFjLE9BQU87QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQzVDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBYyxhQUFhO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ3JEQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVCxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7O0FBRUQsMEI7Ozs7OztBQ2xFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7Ozs7Ozs7QUN6QkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCw4Qjs7Ozs7O0FDOUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQzs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMsV0FBVztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7OztBQUdUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMsV0FBVztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxrQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7O0FBR1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7OztBQUdUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUU7QUFDQSxVQUFTOzs7QUFHVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCOzs7Ozs7QUM1V0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEM7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQztBQUNBLE1BQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWMsWUFBWTtBQUMxQjtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUEseUJBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHOzs7Ozs7QUM3UEE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNOQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxHOzs7Ozs7QUM3QkE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEc7Ozs7OztBQzdCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNwRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBYyxhQUFhO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFrQjtBQUNsQixzQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBLFdBQVUsYUFBYTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdDOzs7Ozs7QUM1Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBLG1DOzs7Ozs7QUN4QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3Qjs7Ozs7O0FDblNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFhO0FBQ2IsdUJBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxlQUFjLG9CQUFvQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBLGtDOzs7Ozs7QUN4SUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHdCOzs7Ozs7QUM3SEE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEI7Ozs7OztBQzdJQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7QUNuRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCOzs7Ozs7QUNqRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCOzs7Ozs7QUMvRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNuQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEc7Ozs7OztBQ2xCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBLGVBQWMsY0FBYztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDN0dBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEc7Ozs7OztBQ2RBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEI7Ozs7OztBQ3hGQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDVEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFVLGNBQWM7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRzs7Ozs7O0FDckJBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBOztBQUVBLFdBQVUsY0FBYztBQUN4QjtBQUNBOztBQUVBO0FBQ0EsRzs7Ozs7O0FDZEE7QUFDQTtBQUNBLEc7Ozs7OztBQ0ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pCQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7OztBQ2RBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNGQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNYQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRzs7Ozs7O0FDeENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQzlDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFRLGlCQUFpQjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDaENBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxHOzs7Ozs7QUNqQkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEc7Ozs7OztBQ3RCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF3QztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUEsd0JBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCOzs7Ozs7QUN2REE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7OztBQy9DQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUFzQjtBQUN0Qiw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBbUIsY0FBYztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlCOzs7Ozs7QUNwSkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCO0FBQzVCLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUEsZUFBYyx3QkFBd0I7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DO0FBQ25DLHVCQUFzQjtBQUN0Qiw0QkFBMkI7QUFDM0IsNEJBQTJCO0FBQzNCLHNCQUFxQjtBQUNyQiwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFrQztBQUNsQywyQkFBMEI7QUFDMUIsOEJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUhBQWtIO0FBQ2xIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNuVkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDaENEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEc7Ozs7OztBQzlCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMEI7Ozs7OztBQ3BFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBYyxpQkFBaUI7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHVDOzs7Ozs7QUNsS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBLGtCQUFpQjs7QUFFakI7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCQUFzQix1QkFBdUI7QUFDN0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWE7OztBQUdiO0FBQ0EsZ0NBQStCLHlCQUF5QjtBQUN4RDtBQUNBO0FBQ0EsY0FBYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXNCLGtFQUFrRTtBQUN4RjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxrQkFBaUI7QUFDakI7O0FBRUEsa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7QUNyS0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVUsYUFBYTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0REE7QUFDQTtBQUNBLEc7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNGQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVUsY0FBYztBQUN4QjtBQUNBO0FBQ0EsRUFBQzs7QUFFRCx3Qjs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkI7Ozs7OztBQ3BFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjs7QUFFQTtBQUNBLE87O0FBRUEsRUFBQztBQUNEO0FBQ0E7O0FBRUEsdUIiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBjMGViMmQ2MDZhZWViNzVkNzNkNFxuICoqLyIsInZhciBwb3Btb3Rpb24gPSByZXF1aXJlKCcuL21vZHVsZS5qcycpLFxuICAgIFVJcmVmID0gd2luZG93LnVpO1xuXG53aW5kb3cudWkgPSB3aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuXG4vKlxuICAgIElmIG5vQ29uZmxpY3QgaXMgcnVuLCB0aGUgb3JpZ2luYWwgcmVmZXJlbmNlIHRvIHdpbmRvdy5VSSBpc1xuICAgIHJlc3RvcmVkIGFuZCBQb3Btb3Rpb24gaXMgbG9hZGVkIHRvIHdpbmRvdy5Qb3Btb3Rpb25cbiovXG53aW5kb3cudWkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cudWkgPSBVSXJlZjtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sb2FkL2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcG9wbW90aW9uID0gcmVxdWlyZSgnLi4vcG9wbW90aW9uJyk7XG5cbnBvcG1vdGlvblxuICAgIC8qXG4gICAgICAgIENvcmUgQWN0aW9uc1xuICAgICovXG4gICAgLmFkZEFjdGlvbigncGxheScsIHJlcXVpcmUoJy4uL2FjdGlvbnMvcGxheScpKVxuICAgIC5hZGRBY3Rpb24oJ3J1bicsIHJlcXVpcmUoJy4uL2FjdGlvbnMvcnVuJykpXG4gICAgLmFkZEFjdGlvbignZmlyZScsIHJlcXVpcmUoJy4uL2FjdGlvbnMvZmlyZScpKVxuICAgIC5hZGRBY3Rpb24oJ3RyYWNrJywgcmVxdWlyZSgnLi4vYWN0aW9ucy90cmFjaycpKVxuICAgIC5hZGRBY3Rpb24oJ2xpbmsnLCByZXF1aXJlKCcuLi9hY3Rpb25zL2xpbmsnKSlcblxuICAgIC8qXG4gICAgICAgIE9wdGlvbmFsIHZhbHVlIHR5cGUgc3VwcG9ydFxuICAgICovXG4gICAgLmFkZFZhbHVlVHlwZSh7XG4gICAgICAgIGFscGhhOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9hbHBoYScpLFxuICAgICAgICBhbmdsZTogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvYW5nbGUnKSxcbiAgICAgICAgcHg6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3B4JyksXG4gICAgICAgIGhzbDogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvaHNsJyksXG4gICAgICAgIHJnYjogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvcmdiJyksXG4gICAgICAgIGhleDogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvaGV4JyksXG4gICAgICAgIGNvbG9yOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9jb2xvcicpLFxuICAgICAgICBwb3NpdGlvbnM6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucycpLFxuICAgICAgICBkaW1lbnNpb25zOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9kaW1lbnNpb25zJyksXG4gICAgICAgIHNoYWRvdzogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvc2hhZG93JylcbiAgICB9KTtcblxuLypcbiAgICBQcmVkZWZpbmVkIHJvbGVzXG4qL1xucG9wbW90aW9uLmNzc1JvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9jc3MvY3NzUm9sZScpO1xucG9wbW90aW9uLmF0dHJSb2xlID0gcmVxdWlyZSgnLi4vcm9sZXMvYXR0ci9hdHRyUm9sZScpO1xucG9wbW90aW9uLmRyYXdQYXRoUm9sZSA9IHJlcXVpcmUoJy4uL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlJyk7XG5wb3Btb3Rpb24ubW92ZVBhdGhSb2xlID0gcmVxdWlyZSgnLi4vcm9sZXMvcGF0aC9tb3ZlUGF0aFJvbGUnKTsgIFxuXG5tb2R1bGUuZXhwb3J0cyA9IHBvcG1vdGlvbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xvYWQvbW9kdWxlLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhY3Rpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi9hY3Rpb25zL21hbmFnZXInKSxcbiAgICBwcmVzZXRNYW5hZ2VyID0gcmVxdWlyZSgnLi9hY3Rvci9wcmVzZXQtbWFuYWdlcicpLFxuICAgIHZhbHVlVHlwZU1hbmFnZXIgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL21hbmFnZXInKSxcblxuICAgIFBvcG1vdGlvbiA9IHtcblxuICAgICAgICBBY3RvcjogcmVxdWlyZSgnLi9hY3Rvci9BY3RvcicpLFxuXG4gICAgICAgIEFjdG9yQ29sbGVjdGlvbjogcmVxdWlyZSgnLi9hY3Rvci9BY3RvckNvbGxlY3Rpb24nKSxcblxuICAgICAgICBJbnB1dDogcmVxdWlyZSgnLi9pbnB1dC9JbnB1dCcpLFxuXG4gICAgICAgIFByb2Nlc3M6IHJlcXVpcmUoJy4vcHJvY2Vzcy9Qcm9jZXNzJyksXG5cbiAgICAgICAgRWFzaW5nOiByZXF1aXJlKCcuL2FjdGlvbnMvcGxheS9FYXNpbmcnKSxcblxuICAgICAgICBSb2xlOiByZXF1aXJlKCcuL3JvbGVzL1JvbGUnKSxcblxuICAgICAgICBzZWxlY3Q6IHJlcXVpcmUoJy4vYWN0b3Ivc2VsZWN0JyksXG5cbiAgICAgICAgYWRkQWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhY3Rpb25NYW5hZ2VyLmV4dGVuZC5hcHBseShhY3Rpb25NYW5hZ2VyLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkUHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcmVzZXRNYW5hZ2VyLmV4dGVuZC5hcHBseShwcmVzZXRNYW5hZ2VyLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkVmFsdWVUeXBlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YWx1ZVR5cGVNYW5hZ2VyLmV4dGVuZC5hcHBseSh2YWx1ZVR5cGVNYW5hZ2VyLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FsYzogcmVxdWlyZSgnLi9pbmMvY2FsYycpXG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBQb3Btb3Rpb247XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICAgIFBsYXkgYWN0aW9uXG4gICAgXG4gICAgVHJhbnNsYXRlIG51bWJlcnMgZm9yIGEgc2V0IGFtb3VudCBvZiB0aW1lLCBhcHBseWluZyBlYXNpbmcgaWYgZGVmaW5lZFxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBwcmVzZXRFYXNpbmcgPSByZXF1aXJlKCcuL3BsYXkvcHJlc2V0LWVhc2luZycpLFxuXG4gICAgLypcbiAgICAgICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgYmV0d2VlbiAwIGFuZCAxXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDEgcHJvZ3Jlc3NcbiAgICAgICAgQHBhcmFtIFtzdHJpbmcgfHwgZnVuY3Rpb25dOiBOYW1lIG9mIHByZXNldCBlYXNpbmdcbiAgICAgICAgICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQW1wbGlmeSBwcm9ncmVzcyBvdXQgb2Ygc3BlY2lmaWVkIHJhbmdlXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIG9mIGVhc2VkIHByb2dyZXNzIGluIHJhbmdlXG4gICAgKi8gIFxuICAgIGVhc2UgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlLCBlc2NhcGVBbXApIHtcbiAgICAgICAgdmFyIHByb2dyZXNzTGltaXRlZCA9IGNhbGMucmVzdHJpY3RlZChwcm9ncmVzcywgMCwgMSksXG4gICAgICAgICAgICBlYXNpbmdGdW5jdGlvbiA9IHV0aWxzLmlzU3RyaW5nKGVhc2UpID8gcHJlc2V0RWFzaW5nW2Vhc2VdIDogZWFzZTtcblxuICAgICAgICBpZiAocHJvZ3Jlc3NMaW1pdGVkICE9PSBwcm9ncmVzcyAmJiBlc2NhcGVBbXApIHtcbiAgICAgICAgICAgIGVhc2UgPSAnbGluZWFyJztcbiAgICAgICAgICAgIHByb2dyZXNzTGltaXRlZCA9IHByb2dyZXNzTGltaXRlZCArICgocHJvZ3Jlc3MgLSBwcm9ncmVzc0xpbWl0ZWQpICogZXNjYXBlQW1wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWxjLnZhbHVlRWFzZWQocHJvZ3Jlc3NMaW1pdGVkLCBmcm9tLCB0bywgZWFzaW5nRnVuY3Rpb24pO1xuICAgIH0sXG5cbiAgICBwbGF5QWN0aW9uID0ge1xuXG4gICAgICAgIC8vIFtvYmplY3RdIERlZmF1bHQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgYWN0aW9uRGVmYXVsdHM6IHJlcXVpcmUoJy4vcGxheS9kZWZhdWx0LWFjdGlvbi1wcm9wcycpLFxuXG4gICAgICAgIC8vIFtvYmplY3RdOiBEZWZhdWx0IHZhbHVlIHByb3BlcnRpZXNcbiAgICAgICAgdmFsdWVEZWZhdWx0czogcmVxdWlyZSgnLi9wbGF5L2RlZmF1bHQtdmFsdWUtcHJvcHMnKSxcblxuICAgICAgICAvLyBbYm9vbGVhbl0gUHJldmVudCBSZWRzaGlmdCBmcm9tIGF1dG9nZW5lcmF0aW5nIEVsZW1lbnQucHJvdG90eXBlLnBsYXkoKVxuICAgICAgICBzdXJwcmVzc01ldGhvZDogdHJ1ZSxcblxuICAgICAgICAvLyBbb2JqZWN0XSBNZXRob2RzIHRvIGFkZCB0byBBY3Rvci5wcm90b3R5cGVcbiAgICAgICAgYWN0b3JNZXRob2RzOiByZXF1aXJlKCcuL3BsYXkvYWN0b3ItbWV0aG9kcycpLFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBVcGRhdGUgQWN0aW9uIGVsYXBzZWQgdGltZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFRpbWVzdGFtcCBvZiBjdXJyZW50IGZyYW1lXG4gICAgICAgICovXG4gICAgICAgIG9uRnJhbWVTdGFydDogZnVuY3Rpb24gKGZyYW1lRHVyYXRpb24pIHtcbiAgICAgICAgICAgIGlmIChmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGFwc2VkICs9IChmcmFtZUR1cmF0aW9uICogdGhpcy5kaWxhdGUpICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmhhc0VuZGVkID0gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgQ2FsY3VsYXRlIHByb2dyZXNzIG9mIHZhbHVlIGJhc2VkIG9uIHRpbWUgZWxhcHNlZCxcbiAgICAgICAgICAgIHZhbHVlIGRlbGF5L2R1cmF0aW9uL3N0YWdnZXIgcHJvcGVydGllc1xuXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIHN0YXRlIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgdmFsdWUgYmVpbmcgcHJvY2Vzc2VkXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgICAgICovXG4gICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHZhbHVlLnRvLFxuICAgICAgICAgICAgICAgIHByb2dyZXNzVGFyZ2V0ID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAxIDogMCxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlLmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M7XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGEgdG8gcHJvcGVydHksIG90aGVyd2lzZSB3ZSBqdXN0IHJldHVybiBjdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBpZiAodGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IGNhbGMucmVzdHJpY3RlZChjYWxjLnByb2dyZXNzKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCB2YWx1ZS5kdXJhdGlvbikgLSB2YWx1ZS5zdGFnZ2VyLCAwLCAxKTtcblxuICAgICAgICAgICAgICAgIC8vIE1hcmsgQWN0aW9uIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyAhPT0gcHJvZ3Jlc3NUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNFbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFN0ZXAgcHJvZ3Jlc3MgaWYgd2UncmUgc3RlcHBpbmdcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuc3RlcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSB1dGlscy5zdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBFYXNlIHZhbHVlXG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBlYXNlKHByb2dyZXNzLCB2YWx1ZS5vcmlnaW4sIHRhcmdldCwgdmFsdWUuZWFzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBSZXR1cm4gaGFzRW5kZWQgcHJvcGVydHlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IEhhdmUgYWxsIFZhbHVlcyBoaXQgMSBwcm9ncmVzcz9cbiAgICAgICAgKi9cbiAgICAgICAgaGFzRW5kZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhc0VuZGVkO1xuICAgICAgICB9XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBwbGF5QWN0aW9uO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3BsYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICAgIFJ1biBwaHlzaWNzIHNpbXVsYXRpb25cbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgc2ltdWxhdGlvbnMgPSByZXF1aXJlKCcuL3J1bi9zaW11bGF0aW9ucycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIC8vIFtvYmplY3RdIERlZmF1bHQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICBhY3Rpb25EZWZhdWx0czogcmVxdWlyZSgnLi9ydW4vZGVmYXVsdC1hY3Rpb24tcHJvcHMnKSxcblxuICAgIC8vIFtvYmplY3RdIERlZmF1bHQgdmFsdWUgcHJvcGVydGllc1xuICAgIHZhbHVlRGVmYXVsdHM6IHJlcXVpcmUoJy4vcnVuL2RlZmF1bHQtdmFsdWUtcHJvcHMnKSxcblxuICAgIC8vIFtib29sZWFuXTogVGVsbCBSZWRzaGlmdCB0aGlzIHJ1Yml4IGNhbGN1bGF0ZXMgYSBuZXcgdmVsb2NpdHkgaXRzZWxmXG4gICAgY2FsY3VsYXRlc1ZlbG9jaXR5OiB0cnVlLFxuICAgIFxuICAgIC8qXG4gICAgICAgIFNpbXVsYXRlIHRoZSBWYWx1ZSdzIHBlci1mcmFtZSBtb3ZlbWVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgY3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IER1cmF0aW9uIG9mIGZyYW1lIGluIG1zXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IENhbGN1bGF0ZWQgdmFsdWVcbiAgICAqL1xuICAgIHByb2Nlc3M6IGZ1bmN0aW9uICh2YWx1ZSwga2V5LCB0aW1lU2luY2VMYXN0RnJhbWUpIHtcbiAgICAgICAgdmFyIHNpbXVsYXRlID0gdmFsdWUuc2ltdWxhdGUsXG4gICAgICAgICAgICBzaW11bGF0aW9uID0gdXRpbHMuaXNTdHJpbmcoc2ltdWxhdGUpID8gc2ltdWxhdGlvbnNbc2ltdWxhdGVdIDogc2ltdWxhdGUsXG4gICAgICAgICAgICBuZXdWZWxvY2l0eSA9IHNpbXVsYXRpb24odmFsdWUsIHRpbWVTaW5jZUxhc3RGcmFtZSwgdGhpcy5zdGFydGVkKTtcblxuICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IChNYXRoLmFicyhuZXdWZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkKSA/IG5ld1ZlbG9jaXR5IDogMDtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmN1cnJlbnQgKyBjYWxjLnNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIHRpbWVTaW5jZUxhc3RGcmFtZSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBIYXMgdGhpcyBhY3Rpb24gZW5kZWQ/XG4gICAgICAgIFxuICAgICAgICBVc2UgYSBmcmFtZWNvdW50ZXIgdG8gc2VlIGlmIEFjdGlvbiBoYXMgY2hhbmdlZCBpbiB0aGUgbGFzdCB4IGZyYW1lc1xuICAgICAgICBhbmQgZGVjbGFyZSBlbmRlZCBpZiBub3RcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IEhhcyBBY3Rpb24gY2hhbmdlZD9cbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IEhhcyBBY3Rpb24gZW5kZWQ/XG4gICAgKi9cbiAgICBoYXNFbmRlZDogZnVuY3Rpb24gKGhhc0NoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IGhhc0NoYW5nZWQgPyAwIDogdGhpcy5pbmFjdGl2ZUZyYW1lcyArIDE7XG4gICAgICAgIHJldHVybiAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+IHRoaXMubWF4SW5hY3RpdmVGcmFtZXMpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgTGltaXQgb3V0cHV0IHRvIHZhbHVlIHJhbmdlLCBpZiBhbnlcbiAgICAgICAgXG4gICAgICAgIElmIHZlbG9jaXR5IGlzIGF0IG9yIG1vcmUgdGhhbiByYW5nZSwgYW5kIHZhbHVlIGhhcyBhIGJvdW5jZSBwcm9wZXJ0eSxcbiAgICAgICAgcnVuIHRoZSBib3VuY2Ugc2ltdWxhdGlvblxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDYWxjdWxhdGVkIG91dHB1dFxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCBWYWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBMaW1pdC1hZGp1c3RlZCBvdXRwdXRcbiAgICAqL1xuICAgIGxpbWl0OiBmdW5jdGlvbiAob3V0cHV0LCB2YWx1ZSkge1xuICAgICAgICB2YXIgaXNPdXRzaWRlTWF4ID0gKG91dHB1dCA+PSB2YWx1ZS5tYXgpLFxuICAgICAgICAgICAgaXNPdXRzaWRlTWluID0gKG91dHB1dCA8PSB2YWx1ZS5taW4pLFxuICAgICAgICAgICAgaXNPdXRzaWRlUmFuZ2UgPSBpc091dHNpZGVNYXggfHwgaXNPdXRzaWRlTWluO1xuICAgICAgICBcbiAgICAgICAgaWYgKGlzT3V0c2lkZVJhbmdlKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSBjYWxjLnJlc3RyaWN0ZWQob3V0cHV0LCB2YWx1ZS5taW4sIHZhbHVlLm1heCk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5ib3VuY2UpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IHNpbXVsYXRpb25zLmJvdW5jZSh2YWx1ZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuY2FwdHVyZSkge1xuICAgICAgICAgICAgICAgIHNpbXVsYXRpb25zLmNhcHR1cmUodmFsdWUsIGlzT3V0c2lkZU1heCA/IHZhbHVlLm1heCA6IHZhbHVlLm1pbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcnVuLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcbiAgICBSZXR1cm4gY3VycmVudCB2YWx1ZSBhbmQgaW1tZWRpZXRseSBlbmRcbiovXG5cInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgIC8qXG4gICAgICAgIFByb2Nlc3MgbmV3IHZhbHVlXG4gICAgICAgIFxuICAgICAgICBSZXR1cm4gZXhpc3RpbmcgY3VycmVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgdmFsdWVcbiAgICAqL1xuICAgIHByb2Nlc3M6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUuY3VycmVudDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEhhcyBBY3Rpb24gZW5kZWQ/XG4gICAgICAgIFxuICAgICAgICBSZXR1cm5zIHRydWUgdG8gZW5kIGltbWVkaWV0bHlcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiB0cnVlXG4gICAgKi9cbiAgICBoYXNFbmRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9maXJlLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcbiAgICBUcmFjayB1c2VyIGlucHV0XG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICBnZW5lcmljUGFyc2VyID0gcmVxdWlyZSgnLi9nZW5lcmljL3BhcnNlLWFyZ3MnKSxcbiAgICBQb2ludGVyID0gcmVxdWlyZSgnLi4vaW5wdXQvUG9pbnRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIHZhbHVlRGVmYXVsdHM6IHJlcXVpcmUoJy4vdHJhY2svZGVmYXVsdC12YWx1ZS1wcm9wcycpLFxuXG4gICAgLypcbiAgICAgICAgUGFyc2UgSW5wdXQgYXJndW1lbnRzXG4gICAgKi9cbiAgICBwYXJzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgICAgIGlucHV0ID0gYXJncy5wb3AoKSxcbiAgICAgICAgICAgIHByb3BzID0gZ2VuZXJpY1BhcnNlci5hcHBseSh0aGlzLCBhcmdzKTtcblxuICAgICAgICAvLyBDcmVhdGUgUG9pbnRlciBpZiB0aGlzIGlzbid0IGFuIElucHV0XG4gICAgICAgIHByb3BzLmlucHV0ID0gKCFpbnB1dC5jdXJyZW50KSA/IG5ldyBQb2ludGVyKGlucHV0KSA6IGlucHV0O1xuXG4gICAgICAgIC8vIFNldCBpbnB1dCBvcmlnaW4gaWYgbm90IHVzZXItZGVmaW5lZFxuICAgICAgICBpZiAoIXByb3BzLmlucHV0T3JpZ2luKSB7XG4gICAgICAgICAgICBwcm9wcy5pbnB1dE9yaWdpbiA9IHByb3BzLmlucHV0LmdldCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgVXBkYXRlIGlucHV0IG9mZnNldFxuICAgICovXG4gICAgb25GcmFtZVN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSBjYWxjLm9mZnNldCh0aGlzLmlucHV0T3JpZ2luLCB0aGlzLmlucHV0LmN1cnJlbnQpO1xuICAgIH0sXG4gICAgICAgIFxuICAgIC8qXG4gICAgICAgIE1vdmUgVmFsdWUgcmVsYXRpdmUgdG8gSW5wdXQgbW92ZW1lbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbVmFsdWVdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IG9mIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZVxuICAgICovXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpID8gdmFsdWUub3JpZ2luICsgdGhpcy5pbnB1dE9mZnNldFtrZXldIDogdmFsdWUuY3VycmVudDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEhhcyB0aGlzIEFjdGlvbiBlbmRlZD8gXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogRmFsc2UgdG8gbWFrZSB1c2VyIG1hbnVhbGx5IGZpbmlzaCAudHJhY2soKVxuICAgICovXG4gICAgaGFzRW5kZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3RyYWNrLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcbiAgICBMaW5rIHRoZSBjYWxjdWxhdGlvbnMgb2Ygb24gVmFsdWUgaW50byB0aGUgb3V0cHV0IG9mIGFub3RoZXIuXG4gICAgXG4gICAgQWN0aXZhdGUgYnkgc2V0dGluZyB0aGUgbGluayBwcm9wZXJ0eSBvZiBvbmUgdmFsdWUgd2l0aCB0aGUgbmFtZVxuICAgIG9mIGVpdGhlciBhbiBJbnB1dCBwcm9wZXJ0eSBvciBhbm90aGVyIFZhbHVlLlxuICAgIFxuICAgIE1hcCB0aGUgbGlua2VkIHZhbHVlIHdpdGggbWFwTGluayBhbmQgcHJvdmlkZSBhIGNvcnJlc3Nwb25kaW5nIG1hcFRvXG4gICAgYXJyYXkgdG8gdHJhbnNsYXRlIHZhbHVlcyBmcm9tIG9uZSBpbnRvIHRoZSBvdGhlci4gRm9yIGluc3RhbmNlOlxuICAgIFxuICAgIHtcbiAgICAgICAgbGluazogJ3gnLFxuICAgICAgICBtYXBMaW5rOiBbMCwgMTAwLCAyMDBdLFxuICAgICAgICBtYXBUbzogWy0xMDAsIDAsIC0xMDBdXG4gICAgfVxuICAgIFxuICAgIEFuIG91dHB1dCB2YWx1ZSBvZiA1MCBmcm9tICd4JyB3aWxsIHRyYW5zbGF0ZSB0byAtNTAgZm9yIHRoaXMgVmFsdWVcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYy5qcycpLFxuXG4gICAgU1RSSU5HID0gJ3N0cmluZycsXG4gICAgXG4gICAgLypcbiAgICAgICAgVHJhbnNsYXRlIG91ciBtYXBMaW5rIHZhbHVlIGludG8gbWFwVG9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZSBmcm9tIGxpbmtlZCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW1ZhbHVlIHx8IG9iamVjdF06IExpbmtlZCB2YWx1ZSBvciBlbXB0eSBvYmplY3QgaWYgd2UncmUgbGlua2luZyB0byBpbnB1dFxuICAgICAgICBAcGFyYW0gW2FycmF5XTogTGlzdCBvZiBudW1iZXJzIHJlbGF0aW5nIHRvIGxpbmtlZCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW2FycmF5XTogTGlzdCBvZiBudW1iZXJzIHJlbGF0aW5nIHRvIHRoaXMgdmFsdWVcbiAgICAqL1xuICAgIGZpbmRNYXBwZWRWYWx1ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgbGlua2VkVmFsdWUsIHRvVmFsdWUsIG1hcExpbmssIG1hcFRvKSB7XG4gICAgICAgIHZhciBtYXBMZW5ndGggPSBtYXBMaW5rLmxlbmd0aCxcbiAgICAgICAgICAgIGkgPSAxLFxuICAgICAgICAgICAgbGFzdExpbmtWYWx1ZSxcbiAgICAgICAgICAgIHRoaXNMaW5rVmFsdWUsXG4gICAgICAgICAgICBsYXN0VG9WYWx1ZSxcbiAgICAgICAgICAgIHRoaXNUb1ZhbHVlO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbWFwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIEFzc2lnbiB2YWx1ZXMgZnJvbSBhcnJheSwgb3IgaWYgdGhleSdyZSBzdHJpbmdzLCBsb29rIGZvciB0aGVtIGluIGxpbmtlZFZhbHVlXG4gICAgICAgICAgICBsYXN0TGlua1ZhbHVlID0gKHR5cGVvZiBtYXBMaW5rW2kgLSAxXSA9PT0gU1RSSU5HKSA/IGxpbmtlZFZhbHVlW21hcExpbmtbaSAtIDFdXSA6IG1hcExpbmtbaSAtIDFdO1xuICAgICAgICAgICAgdGhpc0xpbmtWYWx1ZSA9ICh0eXBlb2YgbWFwTGlua1tpXSA9PT0gU1RSSU5HKSA/IGxpbmtlZFZhbHVlW21hcExpbmtbaV1dIDogbWFwTGlua1tpXTtcbiAgICAgICAgICAgIGxhc3RUb1ZhbHVlID0gKHR5cGVvZiBtYXBUb1tpIC0gMV0gPT09IFNUUklORykgPyB0b1ZhbHVlW21hcFRvW2kgLSAxXV0gOiBtYXBUb1tpIC0gMV07XG4gICAgICAgICAgICB0aGlzVG9WYWx1ZSA9ICh0eXBlb2YgbWFwVG9baV0gPT09IFNUUklORykgPyB0b1ZhbHVlW21hcFRvW2ldXSA6IG1hcFRvW2ldO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSd2ZSBnb25lIHBhc3Qgb3VyIGNhbGN1bGF0ZWQgdmFsdWUsIG9yIGlmIHdlJ3JlIGF0IHRoZSBlbmQgb2YgdGhlIGFycmF5XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgPCB0aGlzTGlua1ZhbHVlIHx8IGkgPT09IG1hcExlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IGNhbGMudmFsdWUoY2FsYy5yZXN0cmljdGVkKGNhbGMucHJvZ3Jlc3MobmV3VmFsdWUsIGxhc3RMaW5rVmFsdWUsIHRoaXNMaW5rVmFsdWUpLCAwLCAxKSwgbGFzdFRvVmFsdWUsIHRoaXNUb1ZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgdmFsdWVEZWZhdWx0czogcmVxdWlyZSgnLi9saW5rL2RlZmF1bHQtdmFsdWUtcHJvcHMnKSxcblxuICAgIHN1cnByZXNzTWV0aG9kOiB0cnVlLFxuXG4gICAgLypcbiAgICAgICAgUHJvY2VzcyB0aGlzIHZhbHVlXG4gICAgICAgIFxuICAgICAgICBGaXJzdCBjaGVjayBpZiB0aGlzIHZhbHVlIGV4aXN0cyBhcyBhIFZhbHVlLCBpZiBub3RcbiAgICAgICAgY2hlY2sgd2l0aGluIElucHV0IChpZiB3ZSBoYXZlIG9uZSlcbiAgICAgICAgICAgIFxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSBvZiBjdXJyZW50IHZhbHVlXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IENhbGN1bGF0ZWQgdmFsdWVcbiAgICAqL1xuICAgIHByb2Nlc3M6IGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnZhbHVlcyxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWUuY3VycmVudCxcbiAgICAgICAgICAgIGxpbmtLZXkgPSB2YWx1ZS5saW5rLFxuICAgICAgICAgICAgbGlua2VkVmFsdWUgPSB2YWx1ZXNbbGlua0tleV0gPyB2YWx1ZXNbbGlua0tleV0gOiB7fSxcbiAgICAgICAgICAgIGlucHV0T2Zmc2V0ID0gdGhpcy5pbnB1dE9mZnNldDtcblxuICAgICAgICAvLyBUaGVuIGNoZWNrIHZhbHVlcyBpbiBJbnB1dFxuICAgICAgICBpZiAoaW5wdXRPZmZzZXQgJiYgaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkobGlua0tleSkpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWUub3JpZ2luICsgKGlucHV0T2Zmc2V0W2xpbmtLZXldICogdmFsdWUuYW1wKTtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyBGaXJzdCBsb29rIGF0IEFjdGlvbiBhbmQgY2hlY2sgdmFsdWUgaXNuJ3QgbGlua2luZyBpdHNlbGZcbiAgICAgICAgfSBlbHNlIGlmIChsaW5rZWRWYWx1ZS5jdXJyZW50ICE9PSB1bmRlZmluZWQgJiYga2V5ICE9PSBsaW5rS2V5KSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGxpbmtlZFZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIG1hcExpbmsgYW5kIG1hcFRvIHByb3BlcnRpZXMsIHRyYW5zbGF0ZSB0aGUgbmV3IHZhbHVlXG4gICAgICAgIGlmICh2YWx1ZS5tYXBMaW5rICYmIHZhbHVlLm1hcFRvKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGZpbmRNYXBwZWRWYWx1ZShuZXdWYWx1ZSwgbGlua2VkVmFsdWUsIHZhbHVlLCB2YWx1ZS5tYXBMaW5rLCB2YWx1ZS5tYXBUbyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfSxcbiAgICAgICAgXG4gICAgbGltaXQ6IGZ1bmN0aW9uIChvdXRwdXQsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBjYWxjLnJlc3RyaWN0ZWQob3V0cHV0LCB2YWx1ZS5taW4sIHZhbHVlLm1heCk7XG4gICAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9saW5rLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiAxXG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdkZWcnXG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FuZ2xlLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdweCdcbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcHguanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgZ2V0Q29sb3JWYWx1ZXMgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzJyksXG4gICAgZnVuY3Rpb25DcmVhdGUgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1jcmVhdGUnKSxcbiAgICBkZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKSxcbiAgICB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLmhzbDtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgSHVlOiB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDM2MFxuICAgICAgICB9LFxuICAgICAgICBTYXR1cmF0aW9uOiBkZWZhdWx0UHJvcHMucGVyY2VudCxcbiAgICAgICAgTGlnaHRuZXNzOiBkZWZhdWx0UHJvcHMucGVyY2VudCxcbiAgICAgICAgQWxwaGE6IGRlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ2hzbCcpID4gLTEpO1xuICAgIH0sXG4gICAgXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZ2V0Q29sb3JWYWx1ZXModmFsdWUsIHRlcm1zKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb25DcmVhdGUoY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgdGVybXMsICcsICcsIDIpLCAnaHNsYScpO1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oc2wuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgZ2V0Q29sb3JWYWx1ZXMgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzJyksXG4gICAgZnVuY3Rpb25DcmVhdGUgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1jcmVhdGUnKSxcbiAgICBkZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKSxcbiAgICBjb2xvckRlZmF1bHRzID0gZGVmYXVsdFByb3BzLmNvbG9yLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JykuY29sb3JzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBSZWQ6IGNvbG9yRGVmYXVsdHMsXG4gICAgICAgIEdyZWVuOiBjb2xvckRlZmF1bHRzLFxuICAgICAgICBCbHVlOiBjb2xvckRlZmF1bHRzLFxuICAgICAgICBBbHBoYTogZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZigncmdiJykgPiAtMSk7XG4gICAgfSxcbiAgICBcbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBnZXRDb2xvclZhbHVlcyh2YWx1ZSwgdGVybXMpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbkNyZWF0ZShjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCB0ZXJtcywgJywgJywgMiksICdyZ2JhJyk7XG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHJnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiByZ2IuZGVmYXVsdFByb3BzLFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZignIycpID4gLTEpO1xuICAgIH0sXG4gICAgXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgciwgZywgYjtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAyKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMywgMik7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDUsIDIpO1xuXG4gICAgICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDEpO1xuICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigyLCAxKTtcbiAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoMywgMSk7XG4gICAgICAgICAgICByICs9IHI7XG4gICAgICAgICAgICBnICs9IGc7XG4gICAgICAgICAgICBiICs9IGI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgUmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgICAgICAgICBHcmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgICAgICAgICAgQmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgICAgICAgICAgQWxwaGE6IDFcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gcmdiLmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICByZ2IgPSByZXF1aXJlKCcuL3JnYicpLFxuICAgIGhzbCA9IHJlcXVpcmUoJy4vaHNsJyksXG4gICAgaGV4ID0gcmVxdWlyZSgnLi9oZXgnKSxcbiAgICBzdXBwb3J0ZWQgPSBbcmdiLCBoc2wsIGhleF0sXG4gICAgbnVtU3VwcG9ydGVkID0gMyxcblxuICAgIHJ1blN1cHBvcnRlZCA9IGZ1bmN0aW9uIChtZXRob2QsIHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtU3VwcG9ydGVkOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzdXBwb3J0ZWRbaV0udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkW2ldW21ldGhvZF0odmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHV0aWxzLm1lcmdlKHJnYi5kZWZhdWx0UHJvcHMsIGhzbC5kZWZhdWx0UHJvcHMpLFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiByZ2IudGVzdCh2YWx1ZSkgfHwgaGV4LnRlc3QodmFsdWUpIHx8IGhzbC50ZXN0KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gcnVuU3VwcG9ydGVkKCdzcGxpdCcsIHZhbHVlKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKHZhbHVlcy5SZWQpID8gcmdiLmNvbWJpbmUodmFsdWVzKSA6IGhzbC5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIHB4RGVmYXVsdHMgPSByZXF1aXJlKCcuL3B4JykuZGVmYXVsdFByb3BzLFxuICAgIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQnKSxcbiAgICB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLnBvc2l0aW9ucztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHB4RGVmYXVsdHMsXG4gICAgICAgIFxuICAgIC8qXG4gICAgICAgIFNwbGl0IHBvc2l0aW9ucyBpbiBmb3JtYXQgXCJYIFkgWlwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFBvc2l0aW9uIHZhbHVlc1xuICAgICAgICAgICAgXCIyMCUgMzAlIDBcIiAtPiB7MjAlLCAzMCUsIDB9XG4gICAgICAgICAgICBcIjIwJSAzMCVcIiAtPiB7MjAlLCAzMCV9XG4gICAgICAgICAgICBcIjIwJVwiIC0+IHsyMCUsIDIwJX1cbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHBvc2l0aW9ucyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpLFxuICAgICAgICAgICAgbnVtUG9zaXRpb25zID0gcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICAgIHNwbGl0VmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgWDogcG9zaXRpb25zWzBdLFxuICAgICAgICAgICAgICAgIFk6IChudW1Qb3NpdGlvbnMgPiAxKSA/IHBvc2l0aW9uc1sxXSA6IHBvc2l0aW9uc1swXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAobnVtUG9zaXRpb25zID4gMikge1xuICAgICAgICAgICAgc3BsaXRWYWx1ZS5aID0gcG9zaXRpb25zWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnICcpO1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLmRpbWVuc2lvbnMsXG4gICAgcHhEZWZhdWx0cyA9IHJlcXVpcmUoJy4vcHgnKS5kZWZhdWx0UHJvcHMsXG4gICAgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHB4RGVmYXVsdHMsXG4gICAgXG4gICAgLypcbiAgICAgICAgU3BsaXQgZGltZW5zaW9ucyBpbiBmb3JtYXQgXCJUb3AgUmlnaHQgQm90dG9tIExlZnRcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBEaW1lbnNpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4IDQwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgNDBweH1cbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweCAwXCIgLT4gezIwcHgsIDAsIDIwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHhcIiAtPiB7MjBweCwgMjBweCwgMjBweCwgMjBweH1cbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIFQvUi9CL0wgbWV0cmljc1xuICAgICovXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZGltZW5zaW9ucyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpLFxuICAgICAgICAgICAgbnVtRGltZW5zaW9ucyA9IGRpbWVuc2lvbnMubGVuZ3RoLFxuICAgICAgICAgICAganVtcEJhY2sgPSAobnVtRGltZW5zaW9ucyAhPT0gMSkgPyAyIDogMSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgaiA9IDAsXG4gICAgICAgICAgICBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgZm9yICg7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbdGVybXNbaV1dID0gZGltZW5zaW9uc1tqXTtcblxuICAgICAgICAgICAgLy8gSnVtcCBiYWNrICh0byBzdGFydCkgY291bnRlciBpZiB3ZSd2ZSByZWFjaGVkIHRoZSBlbmQgb2Ygb3VyIHZhbHVlc1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgaiA9IChqID09PSBudW1EaW1lbnNpb25zKSA/IGogLSBqdW1wQmFjayA6IGo7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgdGVybXMsICcgJyk7XG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2RpbWVuc2lvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjb2xvciA9IHJlcXVpcmUoJy4vY29sb3InKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIHB4RGVmYXVsdHMgPSByZXF1aXJlKCcuL3B4JykuZGVmYXVsdFByb3BzLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jykuc2hhZG93LFxuICAgIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQnKSxcbiAgICBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgc2hhZG93VGVybXMgPSB0ZXJtcy5zbGljZSgwLDQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogdXRpbHMubWVyZ2UoY29sb3IuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIFg6IHB4RGVmYXVsdHMsXG4gICAgICAgIFk6IHB4RGVmYXVsdHMsXG4gICAgICAgIFJhZGl1czogcHhEZWZhdWx0cyxcbiAgICAgICAgU3ByZWFkOiBweERlZmF1bHRzXG4gICAgfSksXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBzaGFkb3cgcHJvcGVydGllcyBcIlggWSBSYWRpdXMgU3ByZWFkIENvbG9yXCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogU2hhZG93IHByb3BlcnR5XG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGJpdHMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKSxcbiAgICAgICAgICAgIG51bUJpdHMgPSBiaXRzLmxlbmd0aCxcbiAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IGZhbHNlLFxuICAgICAgICAgICAgY29sb3JQcm9wID0gJycsXG4gICAgICAgICAgICB0aGlzQml0LFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgZm9yICg7IGkgPCBudW1CaXRzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXNCaXQgPSBiaXRzW2ldO1xuXG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBjb2xvciBwcm9wZXJ0eSwgYXBwZW5kIHRvIGNvbG9yIHN0cmluZ1xuICAgICAgICAgICAgaWYgKGhhc1JlYWNoZWRDb2xvciB8fCBjb2xvci50ZXN0KHRoaXNCaXQpKSB7XG4gICAgICAgICAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb2xvclByb3AgKz0gdGhpc0JpdDtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlW3Rlcm1zW2ldXSA9IHRoaXNCaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB1dGlscy5tZXJnZShzcGxpdFZhbHVlLCBjb2xvci5zcGxpdChjb2xvclByb3ApKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgc2hhZG93VGVybXMsICcgJykgKyBjb2xvci5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NoYWRvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJvbGUgPSByZXF1aXJlKCcuLi9Sb2xlJyk7XG52YXIgYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2g7XG5cbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywnTW96JywnTycsJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHByb3BlcnR5TmFtZUNhY2hlID0ge307XG4gICAgICAgICAgICAgICAgICAgIFxuLypcbiAgICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICAgIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0ZXN0RWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIFxuICAgICAgICBwcm9wZXJ0eU5hbWVDYWNoZVtrZXldID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV0sXG4gICAgICAgICAgICAgICAgcHJlZml4ZWQgPSAocHJlZml4ID09PSAnJykgPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICAgICAgICAgIGlmICh0ZXN0RWxlbWVudC5zdHlsZS5oYXNPd25Qcm9wZXJ0eShwcmVmaXhlZCkpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWVDYWNoZVtrZXldID0gcHJlZml4ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBwcm9wZXJ0eU5hbWVDYWNoZVtrZXldO1xuICAgIH07XG5cbnZhciBDU1NSb2xlID0gbmV3IFJvbGUoe1xuXG4gICAgbmFtZTogJ2NzcycsXG5cbiAgICBfbWFwOiByZXF1aXJlKCcuL21hcCcpLFxuICAgIF90eXBlTWFwOiByZXF1aXJlKCcuL3R5cGUtbWFwJyksXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzO1xuXG4gICAgICAgIGVhY2goYnVpbGQoc3RhdGUpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgQ1NTUm9sZS5zZXQuY2FsbChhY3Rvciwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAga2V5ID0gcHJvcGVydHlOYW1lQ2FjaGVba2V5XSB8fCB0ZXN0UHJlZml4KGtleSk7XG5cbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCwgbnVsbClba2V5XTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGtleSA9IHByb3BlcnR5TmFtZUNhY2hlW2tleV0gfHwgdGVzdFByZWZpeChrZXkpO1xuXG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENTU1JvbGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yb2xlcy9jc3MvY3NzUm9sZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJvbGUgPSByZXF1aXJlKCcuLi9Sb2xlJyk7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2g7XG5cbnZhciBBdHRyUm9sZSA9IG5ldyBSb2xlKHtcbiAgICBuYW1lOiAnYXR0cicsXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzO1xuXG4gICAgICAgIGVhY2goc3RhdGUsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBBdHRyUm9sZS5zZXQuY2FsbChhY3Rvciwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICB9LFxuXG4gICAgc2V0OiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF0dHJSb2xlO1xuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvbGVzL2F0dHIvYXR0clJvbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSb2xlID0gcmVxdWlyZSgnLi4vUm9sZScpO1xudmFyIGNzc1JvbGUgPSByZXF1aXJlKCcuLi9jc3MvY3NzUm9sZScpO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoO1xuXG4vKlxuICAgIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gKHBlcmNlbnRhZ2UsIGxlbmd0aCkge1xuICAgIHJldHVybiAocGFyc2VGbG9hdChwZXJjZW50YWdlKSAvIDEwMCkgKiBsZW5ndGggKyAncHgnO1xufTtcblxuLypcbiAgICBDcmVhdGUgc3R5bGVzXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBTVkcgUGF0aCBwcm9wZXJ0aWVzXG4gICAgQHBhcmFtIFtvYmplY3RdOiBMZW5ndGggb2YgcGF0aFxuICAgIEByZXR1cm5zIFtvYmplY3RdOiBLZXkvdmFsdWUgcGFpcnMgb2YgdmFsaWQgQ1NTIHByb3BlcnRpZXNcbiovXG52YXIgY3JlYXRlU3R5bGVzID0gZnVuY3Rpb24gKHByb3BzLCBsZW5ndGgpIHtcbiAgICB2YXIgaGFzRGFzaEFycmF5ID0gZmFsc2UsXG4gICAgICAgIGRhc2hBcnJheVN0eWxlcyA9IHtcbiAgICAgICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGVzID0ge307XG5cbiAgICBlYWNoKHByb3BzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBrZXkgPSBTVkdEcmF3UGF0aC5fbWFwW2tleV0gfHwga2V5O1xuXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgICAgICAgc3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgICAgIHN0eWxlc1tTVkdEcmF3UGF0aC5fbWFwLmxlbmd0aF0gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbn07XG5cbi8qXG4gICAgRHJhdyBQYXRoIHJvbGVcbiovXG52YXIgU1ZHRHJhd1BhdGggPSBuZXcgUm9sZSh7XG4gICAgX21hcDogcmVxdWlyZSgnLi9tYXAnKSxcblxuICAgIF90eXBlTWFwOiB7XG4gICAgICAgIHN0cm9rZTogJ2NvbG9yJ1xuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGF0aExlbmd0aCA9IHRoaXMuZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBVcGRhdGUgYHBhdGhgIHN0eWxlcyBhbmQgaWYgYGVsZW1lbnRgIGlzIHByZXNlbnQsIHNldFxuICAgICAgICB4LCB5IGFuZCByb3RhdGlvblxuICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgY3NzUm9sZS51cGRhdGUuY2FsbCh0aGlzLCBjcmVhdGVTdHlsZXMoc3RhdGUsIHRoaXMucGF0aExlbmd0aCkpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNWR0RyYXdQYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm9sZXMvcGF0aC9kcmF3UGF0aFJvbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnZXRBbmdsZSA9IHJlcXVpcmUoJy4uLy4uL2luYy9jYWxjJykuYW5nbGU7XG5cbnZhciBjYWxjUm90YXRpb24gPSBmdW5jdGlvbiAocGF0aCwgcG9pbnQsIGRpc3RhbmNlKSB7XG4gICAgdmFyIHRlc3RQb2ludCA9IHRoaXMucGF0aC5nZXRQb2ludEF0TGVuZ3RoKGRpc3RhbmNlICsgMC4yKTtcblxuICAgIHJldHVybiBnZXRBbmdsZShwb2ludCwgdGVzdFBvaW50KTtcbn07XG5cbnZhciBTVkdNb3ZlUGF0aFJvbGUgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBhdGhMZW5ndGggPSB0aGlzLnBhdGguZ2V0VG90YWxMZW5ndGgoKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gc3RhdGUucHJvZ3Jlc3MgKiB0aGlzLnBhdGhMZW5ndGgsXG4gICAgICAgICAgICBuZXdQb2ludCA9IHRoaXMucGF0aC5nZXRQb2ludEF0TGVuZ3RoKGRpc3RhbmNlKSxcbiAgICAgICAgICAgIHJvdGF0aW9uID0gdGhpcy5hdXRvUm90YXRlID8gY2FsY1JvdGF0aW9uKHRoaXMucGF0aCwgbmV3UG9pbnQsIGRpc3RhbmNlKSA6IHN0YXRlLnJvdGF0aW9uIHx8IDA7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgbmV3UG9pbnQueCArICcsICcgKyBuZXdQb2ludC55ICsgJykgcm90YXRlKCcgKyByb3RhdGlvbiArICcpJyk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTVkdNb3ZlUGF0aFJvbGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yb2xlcy9wYXRoL21vdmVQYXRoUm9sZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICAgIENhbGN1bGF0b3JzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIFNpbXBsZSBJL08gc25pcHBldHNcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscy5qcycpLFxuXG4gICAgY2FsYyA9IHtcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGFyZSBhdCAwLDAsIHRoZW4gcmV0dXJuIHRoZSBhbmdsZSB1c2luZyAuYW5nbGVGcm9tQ2VudGVyKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gICAgICAgICAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiAgICAgICAgKi9cbiAgICAgICAgYW5nbGU6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAgICAgdmFyIGZyb20gPSBwb2ludEIgPyBwb2ludEEgOiB7eDogMCwgeTogMH0sXG4gICAgICAgICAgICAgICAgdG8gPSBwb2ludEIgfHwgcG9pbnRBLFxuICAgICAgICAgICAgICAgIHBvaW50ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiB0by54IC0gZnJvbS54LFxuICAgICAgICAgICAgICAgICAgICB5OiB0by55IC0gZnJvbS55XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYW5nbGVGcm9tQ2VudGVyKHBvaW50LngsIHBvaW50LnkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBBbmdsZSBmcm9tIGNlbnRlclxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBjdXJyZW50IGFuZ2xlLCBpbiByYWRpYW5zLCBvZiBhIGRlZmluZWQgcG9pbnRcbiAgICAgICAgICAgIGZyb20gYSBjZW50ZXIgKGFzc3VtZWQgMCwwKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFggY29vcmRpbmF0ZSBvZiBzZWNvbmQgcG9pbnRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogWSBjb29yZGluYXRlIG9mIHNlY29uZCBwb2ludFxuICAgICAgICAgICAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiAwLCAwIGFuZCBwb2ludCBpbiByYWRpYW5zXG4gICAgICAgICovXG4gICAgICAgIGFuZ2xlRnJvbUNlbnRlcjogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMih5LCB4KSk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgICAgICovXG4gICAgICAgIGRlZ3JlZXNUb1JhZGlhbnM6IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIERpbGF0ZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBhIC0tLS0tLS0tLSBiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGEgLS0tLSBiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4gICAgICAgICovXG4gICAgICAgIGRpbGF0ZTogZnVuY3Rpb24gKGEsIGIsIGRpbGF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gYSArICgoYiAtIGEpICogZGlsYXRpb24pO1xuICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEaXN0YW5jZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuICgwLDApIGFuZCBwb2ludEEsIHVubGVzcyBwb2ludEJcbiAgICAgICAgICAgIGlzIHByb3ZpZGVkLCB0aGVuIHdlIHJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gICAgICAgICovXG4gICAgICAgIGRpc3RhbmNlOiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgICAgIHJldHVybiAodHlwZW9mIHBvaW50QSA9PT0gXCJudW1iZXJcIikgPyB0aGlzLmRpc3RhbmNlMUQocG9pbnRBLCBwb2ludEIpIDogdGhpcy5kaXN0YW5jZTJEKHBvaW50QSwgcG9pbnRCKTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIERpc3RhbmNlIDFEXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gcG9pbnQgQSBhbmQgcG9pbnQgQlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFBvaW50IEFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogKG9wdGlvbmFsKTogUG9pbnQgQlxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgZGlzdGFuY2UxRDogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgICAgICB2YXIgYklzTnVtID0gKHR5cGVvZiBwb2ludEIgPT09ICdudW1iZXInKSxcbiAgICAgICAgICAgICAgICBmcm9tID0gYklzTnVtID8gcG9pbnRBIDogMCxcbiAgICAgICAgICAgICAgICB0byA9IGJJc051bSA/IHBvaW50QiA6IHBvaW50QTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBhYnNvbHV0ZSh0byAtIGZyb20pO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEaXN0YW5jZSAyRFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuICgwLDApIGFuZCBwb2ludCBBLCB1bmxlc3MgcG9pbnQgQlxuICAgICAgICAgICAgaXMgcHJvdmlkZWQsIHRoZW4gd2UgcmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHR3by5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiB4IGFuZCB5IG9mIHBvaW50IEFcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogKG9wdGlvbmFsKTogeCBhbmQgeSBvZiBwb2ludCBCXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICAgICAqL1xuICAgICAgICBkaXN0YW5jZTJEOiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgICAgIHZhciBiSXNPYmogPSAodHlwZW9mIHBvaW50QiA9PT0gXCJvYmplY3RcIiksXG4gICAgICAgICAgICAgICAgZnJvbSA9IGJJc09iaiA/IHBvaW50QSA6IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgICAgICB0byA9IGJJc09iaiA/IHBvaW50QiA6IHBvaW50QSxcbiAgICAgICAgICAgICAgICBwb2ludCA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogYWJzb2x1dGUodG8ueCAtIGZyb20ueCksXG4gICAgICAgICAgICAgICAgICAgIHk6IGFic29sdXRlKHRvLnkgLSBmcm9tLnkpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh5cG90ZW51c2UocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEh5cG90ZW51c2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgaHlwb3RlbnVzZSwgc2lkZSBDLCBnaXZlbiB0aGUgbGVuZ3RocyBvZiBzaWRlcyBBIGFuZCBCLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBCXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBMZW5ndGggb2YgQ1xuICAgICAgICAqL1xuICAgICAgICBoeXBvdGVudXNlOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgdmFyIGEyID0gYSAqIGEsXG4gICAgICAgICAgICAgICAgYjIgPSBiICogYixcbiAgICAgICAgICAgICAgICBjMiA9IGEyICsgYjI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGMyKTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBPZmZzZXQgYmV0d2VlbiB0d28gaW5wdXRzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIENhbGN1bGF0ZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBkaWZmZXJlbnQgaW5wdXRzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBpbnB1dFxuICAgICAgICAgICAgQHBhcmFtIFtQb2ludF06IFNlY29uZCBpbnB1dFxuICAgICAgICAgICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgb2Zmc2V0OiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHt9O1xuICAgIFxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFtrZXldID0gYltrZXldIC0gYVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0W2tleV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzTnVtKG9mZnNldC54KSAmJiBpc051bShvZmZzZXQueSkpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQuYW5nbGUgPSB0aGlzLmFuZ2xlKGEsIGIpO1xuICAgICAgICAgICAgICAgIG9mZnNldC5kaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2UyRChhLCBiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgICAgICAgICAgIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiAgICAgICAgKi9cbiAgICAgICAgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZTogZnVuY3Rpb24gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gICAgICAgICAgICB2YXIgcG9pbnQgPSB7fTtcbiAgICBcbiAgICBcdFx0cG9pbnQueCA9IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLng7XG4gICAgICAgICAgICBwb2ludC55ID0gZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBwb2ludDtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAgICAgICAgICAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gICAgICAgICAgICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgaWYgZnVsbCByYW5nZSBnaXZlbiwgdXBwZXIgaWYgbm90XG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4gICAgICAgICovXG4gICAgICAgIHByb2dyZXNzOiBmdW5jdGlvbiAodmFsdWUsIGxpbWl0QSwgbGltaXRCKSB7XG4gICAgICAgICAgICB2YXIgYklzTnVtID0gKHR5cGVvZiBsaW1pdEIgPT09ICdudW1iZXInKSxcbiAgICAgICAgICAgICAgICBmcm9tID0gYklzTnVtID8gbGltaXRBIDogMCxcbiAgICAgICAgICAgICAgICB0byA9IGJJc051bSA/IGxpbWl0QiA6IGxpbWl0QSxcbiAgICAgICAgICAgICAgICByYW5nZSA9IHRvIC0gZnJvbSxcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9ICh2YWx1ZSAtIGZyb20pIC8gcmFuZ2U7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gICAgICAgICovXG4gICAgICAgIHJhZGlhbnNUb0RlZ3JlZXM6IGZ1bmN0aW9uIChyYWRpYW5zKSB7XG4gICAgICAgICAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtaW5pbXVtXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFJhbmRvbSBudW1iZXIgd2l0aGluIHJhbmdlLCBvciAwIGFuZCAxIGlmIG5vbmUgcHJvdmlkZWRcbiAgICAgICAgKi9cbiAgICAgICAgcmFuZG9tOiBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICAgICAgICAgIG1pbiA9IGlzTnVtKG1pbikgPyBtaW4gOiAwO1xuICAgICAgICAgICAgbWF4ID0gaXNOdW0obWF4KSA/IG1heCA6IDE7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gICAgICAgICAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICAgICAgKi9cbiAgICAgICAgcmVsYXRpdmVWYWx1ZTogZnVuY3Rpb24gKGN1cnJlbnQsIHJlbCkge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gY3VycmVudCxcbiAgICAgICAgICAgICAgICBlcXVhdGlvbiA9IHJlbC5zcGxpdCgnPScpLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yID0gZXF1YXRpb25bMF0sXG4gICAgICAgICAgICAgICAgc3BsaXRWYWwgPSB1dGlscy5zcGxpdFZhbFVuaXQoZXF1YXRpb25bMV0pO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlICs9IHNwbGl0VmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgLT0gc3BsaXRWYWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSAqPSBzcGxpdFZhbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlIC89IHNwbGl0VmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHNwbGl0VmFsLnVuaXQpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSArPSBzcGxpdFZhbC51bml0O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgICAgICB9LFxuICAgIFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICAgICAqL1xuICAgICAgICByZXN0cmljdGVkOiBmdW5jdGlvbiAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgICAgICAgICB2YXIgcmVzdHJpY3RlZCA9IChtaW4gIT09IHVuZGVmaW5lZCkgPyBNYXRoLm1heCh2YWx1ZSwgbWluKSA6IHZhbHVlO1xuICAgICAgICAgICAgcmVzdHJpY3RlZCA9IChtYXggIT09IHVuZGVmaW5lZCkgPyBNYXRoLm1pbihyZXN0cmljdGVkLCBtYXgpIDogcmVzdHJpY3RlZDtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiByZXN0cmljdGVkO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuICAgICAgICAqL1xuICAgICAgICBzcGVlZFBlckZyYW1lOiBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4gICAgICAgICovXG4gICAgICAgIHNwZWVkUGVyU2Vjb25kOiBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG4gICAgICAgIH0sXG4gICAgXG4gICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICAgICAgICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2UsIG9yIHVwcGVyIGlmIGxpbWl0MiBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHByb2dyZXNzLCBsaW1pdEEsIGxpbWl0Qikge1xuICAgICAgICAgICAgdmFyIGJJc051bSA9ICh0eXBlb2YgbGltaXRCID09PSAnbnVtYmVyJyksXG4gICAgICAgICAgICAgICAgZnJvbSA9IGJJc051bSA/IGxpbWl0QSA6IDAsXG4gICAgICAgICAgICAgICAgdG8gPSBiSXNOdW0gPyBsaW1pdEIgOiBsaW1pdEE7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gKC0gcHJvZ3Jlc3MgKiBmcm9tKSArIChwcm9ncmVzcyAqIHRvKSArIGZyb207IFxuICAgICAgICB9LFxuICAgIFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRWFzZWQgdmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICAgICAgICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2UsIG9yIHVwcGVyIGlmIGxpbWl0MiBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBFYXNpbmcgdG8gYXBwbHkgdG8gdmFsdWVcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiAgICAgICAgKi9cbiAgICAgICAgdmFsdWVFYXNlZDogZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzaW5nKSB7XG4gICAgICAgICAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IGVhc2luZyhwcm9ncmVzcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBDYWNoaW5nIGZ1bmN0aW9ucyB1c2VkIG11bHRpcGxlIHRpbWVzIHRvIHJlZHVjZSBmaWxlc2l6ZSBhbmQgaW5jcmVhc2UgcGVyZm9ybWFuY2VcbiAgICAqL1xuICAgIGlzTnVtID0gdXRpbHMuaXNOdW0sXG4gICAgYWJzb2x1dGUgPSBNYXRoLmFicztcbiAgICBcbm1vZHVsZS5leHBvcnRzID0gY2FsYztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9jYWxjLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXG4gICAgVXRpbGl0eSBmdW5jdGlvbnNcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIHByb3RlY3RlZFByb3BlcnRpZXMgPSBbJ3Njb3BlJywgICdkb20nXSxcbiAgICBcbiAgICBpc1Byb3RlY3RlZCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIChwcm90ZWN0ZWRQcm9wZXJ0aWVzLmluZGV4T2Yoa2V5KSAhPT0gLTEpO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuICAgICovXG4gICAgdmFyVHlwZSA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICAvKlxuICAgICAgICBJdGVyYXRlIG92ZXIgYW4gb2JqZWN0IGFuZCBmaXJlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGl0ZW0gaW4gaXRcblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFByb3BlcnRpZXNcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IENhbGxiYWNrIHRvIGZpcmVcbiAgICAqL1xuICAgIGVhY2g6IGZ1bmN0aW9uIChwcm9wcywgY2FsbGJhY2spIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGtleSwgcHJvcHNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEhhcyBvbmUgb2JqZWN0IGNoYW5nZWQgZnJvbSB0aGUgb3RoZXJcbiAgICAgICAgXG4gICAgICAgIENvbXBhcmVzIHRoZSB0d28gcHJvdmlkZWQgaW5wdXRzIGFuZCByZXR1cm5zIHRydWUgaWYgdGhleSBhcmUgZGlmZmVyZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEFcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBCXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuICAgICovXG4gICAgaGFzQ2hhbmdlZDogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGtleSA9ICcnO1xuXG4gICAgICAgIGZvciAoa2V5IGluIGIpIHtcbiAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KGtleSkgJiYgYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIGhhc0NoYW5nZWQ7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhIG51bWJlcj9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiAgICAqL1xuICAgIGlzTnVtOiBmdW5jdGlvbiAobnVtKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIG51bSA9PT0gJ251bWJlcicpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYW4gb2JqZWN0P1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuICAgICovXG4gICAgaXNPYmo6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jyk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0aGlzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiAgICAqL1xuICAgIGlzRnVuYzogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gKHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJyk7IFxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYSBzdHJpbmcgPyBcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4gICAgKi9cbiAgICBpc1N0cmluZzogZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKTsgXG4gICAgfSxcblxuXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnQ/XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IElmIHRoaXMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiAgICAqL1xuICAgIGlzUmVsYXRpdmVWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGFuIGFycmF5ID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0aGlzLnZhclR5cGUgPT09ICdBcnJheSdcbiAgICAqL1xuICAgIGlzQXJyYXk6IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgcmV0dXJuICh2YXJUeXBlKGFycikgPT09ICdBcnJheScpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQ29weSBvYmplY3Qgb3IgYXJyYXlcbiAgICAgICAgXG4gICAgICAgIENoZWNrcyB3aGV0aGVyIGJhc2UgaXMgYW4gYXJyYXkgb3Igb2JqZWN0IGFuZCBtYWtlc1xuICAgICAgICBhcHByb3ByaWF0ZSBjb3B5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byBjb3B5XG4gICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogTmV3IGNvcHkgb2YgYXJyYXkgb3Igb2JqZWN0XG4gICAgKi9cbiAgICBjb3B5OiBmdW5jdGlvbiAoYmFzZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuaXNBcnJheShiYXNlKSkgPyB0aGlzLmNvcHlBcnJheShiYXNlKSA6IHRoaXMuY29weU9iamVjdChiYXNlKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIERlZXAgY29weSBhbiBvYmplY3RcbiAgICAgICAgXG4gICAgICAgIEl0ZXJhdGVzIG92ZXIgYW4gb2JqZWN0IGFuZCBjcmVhdGVzIGEgbmV3IGNvcHkgb2YgZXZlcnkgaXRlbSxcbiAgICAgICAgZGVlcCBjb3B5aW5nIGlmIGl0IGZpbmRzIGFueSBvYmplY3RzL2FycmF5c1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gY29weVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IE5ldyBjb3B5IG9mIG9iamVjdFxuICAgICovXG4gICAgY29weU9iamVjdDogZnVuY3Rpb24gKGJhc2UpIHtcbiAgICAgICAgdmFyIG5ld09iamVjdCA9IHt9O1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGJhc2UpIHtcbiAgICAgICAgICAgIGlmIChiYXNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9ICh0aGlzLmlzT2JqKGJhc2Vba2V5XSkgJiYgIWlzUHJvdGVjdGVkKGtleSkpID8gdGhpcy5jb3B5KGJhc2Vba2V5XSkgOiBiYXNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdPYmplY3Q7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEZWVwIGNvcHkgYW4gYXJyYXlcbiAgICAgICAgXG4gICAgICAgIExvb3BzIHRocm91Z2ggYW4gYXJyYXkgYW5kIGNyZWF0ZXMgYSBuZXcgY29weSBvZiBldmVyeSBpdGVtLFxuICAgICAgICBkZWVwIGNvcHlpbmcgaWYgaXQgZmluZHMgYW55IG9iamVjdHMvYXJyYXlzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5XTogQXJyYXkgdG8gY29weVxuICAgICAgICBAcmV0dXJuIFthcnJheV06IE5ldyBjb3B5IG9mIGFycmF5XG4gICAgKi9cbiAgICBjb3B5QXJyYXk6IGZ1bmN0aW9uIChiYXNlKSB7XG4gICAgICAgIHZhciBuZXdBcnJheSA9IFtdLFxuICAgICAgICAgICAgbGVuZ3RoID0gYmFzZS5sZW5ndGgsXG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgXG4gICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5ld0FycmF5W2ldID0gKHRoaXMuaXNPYmooYmFzZVtpXSkpID8gdGhpcy5jb3B5KGJhc2VbaV0pIDogYmFzZVtpXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgTm9uLWRlc3RydWN0aXZlIG1lcmdlIG9mIG9iamVjdCBvciBhcnJheVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBBcnJheSBvciBvYmplY3QgdG8gdXNlIGFzIGJhc2VcbiAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBBcnJheSBvciBvYmplY3QgdG8gb3ZlcndyaXRlIGJhc2Ugd2l0aFxuICAgICAgICBAcmV0dXJuIFthcnJheSB8fCBvYmplY3RdOiBOZXcgYXJyYXkgb3Igb2JqZWN0XG4gICAgKi9cbiAgICBtZXJnZTogZnVuY3Rpb24gKGJhc2UsIG92ZXJ3cml0ZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuaXNBcnJheShiYXNlKSkgPyB0aGlzLmNvcHlBcnJheShvdmVyd3JpdGUpIDogdGhpcy5tZXJnZU9iamVjdChiYXNlLCBvdmVyd3JpdGUpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgTm9uLWRlc3RydWN0aXZlIG1lcmdlIG9mIG9iamVjdFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gdXNlIGFzIGJhc2VcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gb3ZlcndyaXRlIGJhc2Ugd2l0aFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBOZXcgb2JqZWN0XG4gICAgKi9cbiAgICBtZXJnZU9iamVjdDogZnVuY3Rpb24gKGJhc2UsIG92ZXJ3cml0ZSkge1xuICAgICAgICB2YXIgaGFzQmFzZSA9IHRoaXMuaXNPYmooYmFzZSksXG4gICAgICAgICAgICBuZXdPYmplY3QgPSBoYXNCYXNlID8gdGhpcy5jb3B5KGJhc2UpIDogdGhpcy5jb3B5KG92ZXJ3cml0ZSksXG4gICAgICAgICAgICBrZXkgPSAnJztcblxuICAgICAgICBpZiAoaGFzQmFzZSkge1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gb3ZlcndyaXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJ3cml0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gKHRoaXMuaXNPYmoob3ZlcndyaXRlW2tleV0pICYmICFpc1Byb3RlY3RlZChrZXkpKSA/IHRoaXMubWVyZ2UoYmFzZVtrZXldLCBvdmVyd3JpdGVba2V5XSkgOiBvdmVyd3JpdGVba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld09iamVjdDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gICAgICAgIFxuICAgICAgICAgICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICAgICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4gICAgKi9cbiAgICBzcGxpdFZhbFVuaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWwgPSB2YWx1ZS5tYXRjaCgvKC0/XFxkKlxcLj9cXGQqKSguKikvKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoc3BsaXRWYWxbMV0pLFxuICAgICAgICAgICAgdW5pdDogIHNwbGl0VmFsWzJdXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuICAgICovXG4gICAgc3RlcFByb2dyZXNzOiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0ZXBzKSB7XG4gICAgICAgIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpLFxuICAgICAgICAgICAgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpLFxuICAgICAgICAgICAgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiAgICAqL1xuICAgIGN1cnJlbnRUaW1lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIikgPyBwZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cbiAgICBcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi4vLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLFxuICAgIHNwZWVkUGVyRnJhbWUgPSBjYWxjLnNwZWVkUGVyRnJhbWU7XG5cbi8qXG4gICAgQWRkIGNvcmUgcGh5c2ljcyBzaW11bGF0aW9uc1xuKi9cbnZhciBzaW11bGF0aW9ucyA9IHtcbiAgICAvKlxuICAgICAgICBWZWxvY2l0eVxuICAgICAgICBcbiAgICAgICAgVGhlIGRlZmF1bHQgLnJ1bigpIHNpbXVsYXRpb24uXG4gICAgICAgIFxuICAgICAgICBBcHBsaWVzIGFueSBzZXQgZGVjZWxlcmF0aW9uIGFuZCBhY2NlbGVyYXRpb24gdG8gZXhpc3RpbmcgdmVsb2NpdHlcbiAgICAqL1xuICAgIHZlbG9jaXR5OiBmdW5jdGlvbiAodmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHkgLSBzcGVlZFBlckZyYW1lKHZhbHVlLmRlY2VsZXJhdGlvbiwgZHVyYXRpb24pICsgc3BlZWRQZXJGcmFtZSh2YWx1ZS5hY2NlbGVyYXRpb24sIGR1cmF0aW9uKTtcblxuICAgICAgICByZXR1cm4gc2ltdWxhdGlvbnMuZnJpY3Rpb24odmFsdWUsIGR1cmF0aW9uKTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgR2xpZGVcbiAgICAgICAgXG4gICAgICAgIEVtdWxhdGVzIHRvdWNoIGRldmljZSBzY3JvbGxpbmcgZWZmZWN0cyB3aXRoIGV4cG9uZW50aWFsIGRlY2F5XG4gICAgICAgIGh0dHA6Ly9hcml5YS5vZmlsYWJzLmNvbS8yMDEzLzExL2phdmFzY3JpcHQta2luZXRpYy1zY3JvbGxpbmctcGFydC0yLmh0bWxcbiAgICAqL1xuICAgIGdsaWRlOiBmdW5jdGlvbiAodmFsdWUsIGR1cmF0aW9uLCBzdGFydGVkKSB7XG4gICAgICAgIHZhciB0aW1lVW50aWxGaW5pc2hlZCA9IC0gdXRpbHMuY3VycmVudFRpbWUoKSAtIHN0YXJ0ZWQsXG4gICAgICAgICAgICBkZWx0YSA9IC0gdmFsdWUudG8gKiBNYXRoLmV4cCh0aW1lVW50aWxGaW5pc2hlZCAvIHZhbHVlLnRpbWVDb25zdGFudCk7XG5cbiAgICAgICAgcmV0dXJuICh2YWx1ZS50byArIGRlbHRhKSAtIHZhbHVlLmN1cnJlbnQ7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEZyaWN0aW9uXG5cbiAgICAgICAgQXBwbHkgZnJpY3Rpb24gdG8gdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgVE9ETzogTWFrZSB0aGlzIGZyYW1lcmF0ZS1pbmRlcGVuZGVudFxuICAgICovXG4gICAgZnJpY3Rpb246IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIG5ld1ZlbG9jaXR5ID0gc3BlZWRQZXJGcmFtZSh2YWx1ZS52ZWxvY2l0eSwgZHVyYXRpb24pICogKDEgLSB2YWx1ZS5mcmljdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGNhbGMuc3BlZWRQZXJTZWNvbmQobmV3VmVsb2NpdHksIGR1cmF0aW9uKTtcbiAgICB9LFxuXG4gICAgc3ByaW5nOiBmdW5jdGlvbiAodmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IHZhbHVlLnRvIC0gdmFsdWUuY3VycmVudDtcblxuICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZSAqIHNwZWVkUGVyRnJhbWUodmFsdWUuc3ByaW5nLCBkdXJhdGlvbik7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gc2ltdWxhdGlvbnMuZnJpY3Rpb24odmFsdWUsIGR1cmF0aW9uKTtcbiAgICB9LFxuXG4gICAgYm91bmNlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gMCxcbiAgICAgICAgICAgIHRvID0gdmFsdWUudG8sXG4gICAgICAgICAgICBjdXJyZW50ID0gdmFsdWUuY3VycmVudCxcbiAgICAgICAgICAgIGJvdW5jZSA9IHZhbHVlLmJvdW5jZTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHdlJ3JlIHVzaW5nIGdsaWRlIHNpbXVsYXRpb24gd2UgaGF2ZSB0byBmbGlwIG91ciB0YXJnZXQgdG9vXG4gICAgICAgIGlmICh2YWx1ZS5zaW11bGF0ZSA9PT0gJ2dsaWRlJykge1xuICAgICAgICAgICAgZGlzdGFuY2UgPSB0byAtIGN1cnJlbnQ7XG4gICAgICAgICAgICB2YWx1ZS50byA9IGN1cnJlbnQgLSAoZGlzdGFuY2UgKiBib3VuY2UpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdmFsdWUudmVsb2NpdHkgKj0gLSBib3VuY2U7XG4gICAgfSxcblxuICAgIGNhcHR1cmU6IGZ1bmN0aW9uICh2YWx1ZSwgdGFyZ2V0KSB7XG4gICAgICAgIHZhbHVlLnRvID0gdGFyZ2V0O1xuICAgICAgICB2YWx1ZS5zaW11bGF0ZSA9ICdzcHJpbmcnO1xuICAgICAgICB2YWx1ZS5jYXB0dXJlID0gdmFsdWUubWluID0gdmFsdWUubWF4ID0gdW5kZWZpbmVkO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2ltdWxhdGlvbnM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcnVuL3NpbXVsYXRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8vIFtpbnRdOiBOdW1iZXIgb2YgZnJhbWVzIEFjdGlvbiBoYXMgYmVlbiBpbmFjdGl2ZVxuICAgIGluYWN0aXZlRnJhbWVzOiAwLFxuICAgIFxuICAgIC8vIFtudW1iZXJdOiBOdW1iZXIgb2YgZnJhbWVzIG9mIG5vIGNoYW5nZSBiZWZvcmUgQWN0aW9uIGlzIGRlY2xhcmVkIGluYWN0aXZlXG4gICAgbWF4SW5hY3RpdmVGcmFtZXM6IDNcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3J1bi9kZWZhdWx0LWFjdGlvbi1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIC8vIFtzdHJpbmddOiBTaW11bGF0aW9uIHRvIC5ydW5cbiAgICBzaW11bGF0ZTogJ3ZlbG9jaXR5JyxcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogRGVjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgZGVjZWxlcmF0aW9uOiAwLFxuICAgIFxuICAgIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICBhY2NlbGVyYXRpb246IDAsXG4gICAgXG4gICAgLy8gW251bWJlcl06IEZhY3RvciB0byBtdWx0aXBseSB2ZWxvY2l0eSBieSBvbiBib3VuY2VcbiAgICBib3VuY2U6IDAsXG4gICAgXG4gICAgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgICBzcHJpbmc6IDgwLFxuICAgIFxuICAgIC8vIFtudW1iZXJdOiBUaW1lY29uc3RhbnQgb2YgZ2xpZGVcbiAgICB0aW1lQ29uc3RhbnQ6IDM5NSxcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgICBzdG9wU3BlZWQ6IDUsXG4gICAgXG4gICAgLy8gW2Jvb2xlYW5dOiBDYXB0dXJlIHdpdGggc3ByaW5nIHBoeXNpY3Mgb24gbGltaXQgYnJlYWNoXG4gICAgY2FwdHVyZTogZmFsc2UsXG4gICAgXG4gICAgLy8gW251bWJlcl06IEZyaWN0aW9uIHRvIGFwcGx5IHBlciBmcmFtZVxuICAgIGZyaWN0aW9uOiAwXG5cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3J1bi9kZWZhdWx0LXZhbHVlLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgQWN0b3JDb2xsZWN0aW9uID0gcmVxdWlyZSgnLi9BY3RvckNvbGxlY3Rpb24nKTtcblxuLypcbiAgICBDcmVhdGUgYW4gQWN0b3JDb2xsZWN0aW9uIGJhc2VkIG9uIGEgc2VsZWN0aW9uIG9mIERPTSBub2Rlc1xuXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3QgfHwgalF1ZXJ5IG9iamVjdF06XG4gICAgICAgIElmIHN0cmluZywgdHJlYXRlZCBhcyBzZWxlY3Rvci5cbiAgICAgICAgSWYgbm90LCB0cmVhdGVkIGFzIHByZWV4aXN0aW5nIE5vZGVMaXN0IHx8IGpRdWVyeSBvYmplY3QuXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIG9wdHMpIHtcbiAgICB2YXIgbm9kZXMgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yLFxuICAgICAgICBlbGVtZW50cyA9IFtdO1xuXG4gICAgLy8gSWYgalF1ZXJ5IHNlbGVjdGlvbiwgZ2V0IGFycmF5IG9mIEVsZW1lbnRzXG4gICAgaWYgKG5vZGVzLmdldCkge1xuICAgICAgICBlbGVtZW50cyA9IG5vZGVzLmdldCgpO1xuXG4gICAgLy8gT3IgY29udmVydCBOb2RlTGlzdCB0byBhcnJheVxuICAgIH0gZWxzZSBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChub2Rlcyk7XG5cbiAgICAvLyBPciBpZiBpdCdzIGp1c3QgYW4gRWxlbWVudCwgcHV0IGludG8gYXJyYXlcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50cy5wdXNoKG5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEFjdG9yQ29sbGVjdGlvbihlbGVtZW50cywgb3B0cyk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0b3Ivc2VsZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgQWN0b3IsXG4gICAgQWN0b3JDb2xsZWN0aW9uLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgZ2VuZXJhdGVNZXRob2RJdGVyYXRvciA9IHJlcXVpcmUoJy4uL2FjdG9yL3N5c3RlbS9nZW5lcmF0ZS1pdGVyYXRvcicpLFxuICAgIGdlbmVyaWNBY3Rpb25Qcm9wcyA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9kZWZhdWx0LWFjdGlvbi1wcm9wcycpLFxuICAgIGdlbmVyaWNWYWx1ZVByb3BzID0gcmVxdWlyZSgnLi9nZW5lcmljL2RlZmF1bHQtdmFsdWUtcHJvcHMnKSxcbiAgICBnZW5lcmljUGFyc2UgPSByZXF1aXJlKCcuL2dlbmVyaWMvcGFyc2UtYXJncycpLFxuXG4gICAgTW9kTWFuYWdlciA9IHJlcXVpcmUoJy4uL2luYy9Nb2RNYW5hZ2VyJyksXG5cbiAgICBhY3Rpb25NYW5hZ2VyID0gbmV3IE1vZE1hbmFnZXIoKTtcbi8qXG4gICAgQWRkIG1vZHVsZSB0byBBY3Rpb25NYW5hZ2VyXG5cbiAgICBDcmVhdGVzIGEgbmV3IEFjdGlvbiBmb3IgQWN0b3JzXG4qL1xuYWN0aW9uTWFuYWdlci5leHRlbmQgPSBmdW5jdGlvbiAobmFtZSwgbW9kKSB7XG4gICAgdmFyIG1ldGhvZE5hbWUgPSAnJyxcbiAgICAgICAgcGFyc2U7XG5cbiAgICAvKlxuICAgICAgICBHZW5lcmF0ZSBuZXcgbWV0aG9kIGZvciBBY3RvcnMgaWYgbW9kdWxlIGRvZXNuJ3QgaGF2ZSBhXG4gICAgICAgIHN1cnByZXNzTWV0aG9kIGZsYWcgYW5kIEFjdG9yIGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGFcbiAgICAgICAgbWV0aG9kIHdpdGggdGhhdCBuYW1lXG4gICAgKi9cbiAgICBpZiAoIW1vZC5zdXJwcmVzc01ldGhvZCAmJiAhQWN0b3IucHJvdG90eXBlW25hbWVdKSB7XG4gICAgICAgIHBhcnNlID0gbW9kLnBhcnNlIHx8IGdlbmVyaWNQYXJzZTtcblxuICAgICAgICBBY3Rvci5wcm90b3R5cGVbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbiA9IG5hbWU7XG4gICAgICAgICAgICB0aGlzLnNldChwYXJzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBBY3RvckNvbGxlY3Rpb24ucHJvdG90eXBlW25hbWVdID0gZ2VuZXJhdGVNZXRob2RJdGVyYXRvcihuYW1lKTtcbiAgICB9XG5cbiAgICAvLyBJZiBtb2R1bGUgaGFzIG1ldGhvZHMgdG8gYWRkIHRvIEFjdG9yLnByb3RvdHlwZVxuICAgIGlmIChtb2QuYWN0b3JNZXRob2RzKSB7XG4gICAgICAgIGZvciAobWV0aG9kTmFtZSBpbiBtb2QuYWN0b3JNZXRob2RzKSB7XG4gICAgICAgICAgICBpZiAobW9kLmFjdG9yTWV0aG9kcy5oYXNPd25Qcm9wZXJ0eShtZXRob2ROYW1lKSkge1xuICAgICAgICAgICAgICAgIEFjdG9yLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IG1vZC5hY3Rvck1ldGhvZHNbbWV0aG9kTmFtZV07XG4gICAgICAgICAgICAgICAgQWN0b3JDb2xsZWN0aW9uLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IGdlbmVyYXRlTWV0aG9kSXRlcmF0b3IobWV0aG9kTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNZXJnZSBhY3Rpb24gcHJvcHMgd2l0aCBkZWZhdWx0c1xuICAgIG1vZC5hY3Rpb25EZWZhdWx0cyA9IG1vZC5hY3Rpb25EZWZhdWx0cyA/IHV0aWxzLm1lcmdlKGdlbmVyaWNBY3Rpb25Qcm9wcywgbW9kLmFjdGlvbkRlZmF1bHRzKSA6IGdlbmVyaWNBY3Rpb25Qcm9wcztcblxuICAgIC8vIE1lcmdlIHZhbHVlIHByb3BzIHdpdGggZGVmYXVsdHNcbiAgICBtb2QudmFsdWVEZWZhdWx0cyA9IG1vZC52YWx1ZURlZmF1bHRzID8gdXRpbHMubWVyZ2UoZ2VuZXJpY1ZhbHVlUHJvcHMsIG1vZC52YWx1ZURlZmF1bHRzKSA6IGdlbmVyaWNWYWx1ZVByb3BzO1xuXG4gICAgLy8gQ2FsbCBwYXJlbnQgZXh0ZW5kIG1ldGhvZFxuICAgIE1vZE1hbmFnZXIucHJvdG90eXBlLmV4dGVuZC5jYWxsKHRoaXMsIG5hbWUsIG1vZCk7XG59O1xuXG5hY3Rpb25NYW5hZ2VyLnNldEFjdG9yID0gZnVuY3Rpb24gKGFjdG9yKSB7XG4gICAgQWN0b3IgPSBhY3Rvcjtcbn07XG5cbmFjdGlvbk1hbmFnZXIuc2V0QWN0b3JDb2xsZWN0aW9uID0gZnVuY3Rpb24gKGFjdG9yQ29sbGVjdGlvbikge1xuICAgIEFjdG9yQ29sbGVjdGlvbiA9IGFjdG9yQ29sbGVjdGlvbjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYWN0aW9uTWFuYWdlcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9tYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBNb2RNYW5hZ2VyID0gcmVxdWlyZSgnLi4vaW5jL01vZE1hbmFnZXInKSxcbiAgICBwcmVzZXRNYW5hZ2VyID0gbmV3IE1vZE1hbmFnZXIoKSxcblxuICAgIERPVCA9ICcuJyxcblxuICAgIGdlbmVyYXRlS2V5cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGtleXMgPSBrZXkuc3BsaXQoRE9UKSxcbiAgICAgICAgICAgIG51bUtleXMgPSBrZXlzLmxlbmd0aCxcbiAgICAgICAgICAgIGxhc3RLZXkgPSBrZXlzWzBdLFxuICAgICAgICAgICAgaSA9IDE7XG5cbiAgICAgICAgZm9yICg7IGkgPCBudW1LZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGtleXNbaV0gPSBsYXN0S2V5ICs9IERPVCArIGtleXNbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9O1xuXG4vKlxuICAgIEdldCBkZWZpbmVkIGFjdGlvblxuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVGhlIG5hbWUgb2YgdGhlIHByZWRlZmluZWQgYWN0aW9uXG4qL1xucHJlc2V0TWFuYWdlci5nZXREZWZpbmVkID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgcHJvcHMgPSB7fSxcbiAgICAgICAgdGhpc1Byb3AgPSB7fSxcbiAgICAgICAga2V5cyA9IGdlbmVyYXRlS2V5cyhuYW1lKSxcbiAgICAgICAgbnVtS2V5cyA9IGtleXMubGVuZ3RoLFxuICAgICAgICBpID0gMDtcblxuICAgIGZvciAoOyBpIDwgbnVtS2V5czsgaSsrKSB7XG4gICAgICAgIHRoaXNQcm9wID0gdGhpc1trZXlzW2ldXTtcblxuICAgICAgICBpZiAodGhpc1Byb3ApIHtcbiAgICAgICAgICAgIHByb3BzID0gdXRpbHMubWVyZ2UocHJvcHMsIHRoaXNQcm9wKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcHJlc2V0TWFuYWdlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdG9yL3ByZXNldC1tYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgTW9kTWFuYWdlciA9IHJlcXVpcmUoJy4uL2luYy9Nb2RNYW5hZ2VyJyksXG4gICAgdmFsdWVUeXBlTWFuYWdlciA9IG5ldyBNb2RNYW5hZ2VyKCk7XG5cbnZhbHVlVHlwZU1hbmFnZXIuZGVmYXVsdFByb3BzID0gZnVuY3Rpb24gKHR5cGUsIGtleSkge1xuICAgIHZhciB2YWx1ZVR5cGUgPSB0aGlzW3R5cGVdLFxuICAgICAgICBkZWZhdWx0UHJvcHMgPSAodmFsdWVUeXBlLmRlZmF1bHRQcm9wcykgPyB2YWx1ZVR5cGUuZGVmYXVsdFByb3BzW2tleV0gfHwgdmFsdWVUeXBlLmRlZmF1bHRQcm9wcyA6IHt9O1xuXG4gICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbn07XG5cbnZhbHVlVHlwZU1hbmFnZXIudGVzdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZmFsc2U7XG5cbiAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGtleSwgbW9kKSB7XG4gICAgICAgIGlmIChtb2QudGVzdCAmJiBtb2QudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHR5cGUgPSBrZXk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0eXBlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB2YWx1ZVR5cGVNYW5hZ2VyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuYWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFByb2Nlc3MgPSByZXF1aXJlKCcuLi9wcm9jZXNzL1Byb2Nlc3MnKSxcbiAgICBRdWV1ZSA9IHJlcXVpcmUoJy4uL2luYy9RdWV1ZScpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgdXBkYXRlID0gcmVxdWlyZSgnLi91cGRhdGUnKSxcbiAgICB2YWx1ZU9wcyA9IHJlcXVpcmUoJy4vdmFsdWUtb3BlcmF0aW9ucycpLFxuICAgIGFjdGlvbk1hbmFnZXIgPSByZXF1aXJlKCcuLi9hY3Rpb25zL21hbmFnZXInKSxcbiAgICBkZWZhdWx0Um9sZSA9IHJlcXVpcmUoJy4uL3JvbGVzL2RlZmF1bHRSb2xlJyksXG4gICAgY3NzUm9sZSA9IHJlcXVpcmUoJy4uL3JvbGVzL2Nzcy9jc3NSb2xlJyksXG4gICAgZ2V0dGVyU2V0dGVyID0gcmVxdWlyZSgnLi4vaW5jL2dldHRlci1zZXR0ZXInKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaCxcblxuICAgIEFjdG9yID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgdmFyIGFjdG9yID0gdGhpcyxcbiAgICAgICAgICAgIHJvbGVzID0gWyBkZWZhdWx0Um9sZSBdO1xuXG4gICAgICAgIC8vIEF1dG8tZGV0ZWN0IGVsZW1lbnQgdHlwZSwgaWYgcHJlc2VudFxuICAgICAgICBpZiAob3B0cyAmJiBvcHRzLmVsZW1lbnQpIHtcblxuICAgICAgICAgICAgLy8gQWRkIENTUyByb2xlIGlmIEhUTUxFbGVtZW50XG4gICAgICAgICAgICBpZiAob3B0cy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByb2xlcy5wdXNoKGNzc1JvbGUpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdHMuZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHZhbHVlcyBvYmplY3QgYW5kIHN0YXRlIG9iamVjdFxuICAgICAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWVzOiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEluaXQgcXVldWUgYW5kIHByb2Nlc3NcbiAgICAgICAgdGhpcy5xdWV1ZSA9IG5ldyBRdWV1ZSgpO1xuICAgICAgICB0aGlzLnByb2Nlc3MgPSBuZXcgUHJvY2Vzcyh0aGlzLCB1cGRhdGUpO1xuXG4gICAgICAgIHRoaXMuc2V0KG9wdHMpO1xuXG4gICAgICAgIC8vIEluaXQgcm9sZXNcbiAgICAgICAgaWYgKG9wdHMgJiYgb3B0cy5hcykge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzQXJyYXkob3B0cy5hcykpIHtcbiAgICAgICAgICAgICAgICByb2xlcy5wdXNoLmFwcGx5KHJvbGVzLCBvcHRzLmFzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm9sZXMucHVzaChvcHRzLmFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm9sZXMgPSByb2xlcztcbiAgICAgICAgdGhpcy5yb2xlcy5mb3JFYWNoKGZ1bmN0aW9uIChyb2xlKSB7XG4gICAgICAgICAgICAvLyBFeHRlbmQgQWN0b3Igd2l0aCBnZXR0ZXIvc2V0dGVyIGlmXG4gICAgICAgICAgICAvLyBSb2xlIGhhcyBuYW1lIHByb3BlcnR5XG4gICAgICAgICAgICBpZiAocm9sZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgYWN0b3Jbcm9sZS5uYW1lXSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXR0ZXJTZXR0ZXIuY2FsbChhY3RvciwgYSwgYiwgcm9sZS5nZXQsIHJvbGUuc2V0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGaXJlIGluaXQgbWV0aG9kIGlmIG9uZSBhdmFpbGFibGVcbiAgICAgICAgICAgIGlmIChyb2xlLmluaXQpIHtcbiAgICAgICAgICAgICAgICByb2xlLmluaXQuY2FsbChhY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbkFjdG9yLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBTZXQgQWN0aW9uIHZhbHVlcyBhbmQgcHJvcGVydGllc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBFbGVtZW50IHByb3BlcnRpZXNcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddIChvcHRpb24pOiBOYW1lIG9mIGRlZmF1bHQgdmFsdWUgcHJvcGVydHlcbiAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gKHByb3BzLCBkZWZhdWx0VmFsdWVQcm9wKSB7XG4gICAgICAgIC8vIFJlc2V0IEVsZW1lbnQgcHJvcGVydGllcyBhbmQgd3JpdGUgbmV3IHByb3BzXG4gICAgICAgIHRoaXMuY2xlYXJPcmRlcigpO1xuICAgICAgICB0aGlzLnJlc2V0UHJvcHMoKTtcblxuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcHMocHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMocHJvcHMudmFsdWVzLCBkZWZhdWx0VmFsdWVQcm9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTdGFydCBjdXJyZW50bHkgZGVmaW5lZCBBY3Rpb25cbiAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVzZXRQcm9ncmVzcygpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5hY3Rpb24gIT09ICd0cmFjaycgJiYgdGhpcy5pbnB1dCAmJiB0aGlzLmlucHV0LnN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFN0b3AgY3VycmVudCBBY3Rpb25cbiAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZS5jbGVhcigpO1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBQYXVzZSBjdXJyZW50IEFjdGlvblxuICAgICovXG4gICAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2Nlc3Muc3RvcCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgUmVzdW1lIHBhdXNlZCBBY3Rpb25cbiAgICAqL1xuICAgIHJlc3VtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZyYW1lc3RhbXAgPSB0aGlzLnN0YXJ0ZWQgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzLnN0YXJ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBUb2dnbGUgY3VycmVudCBBY3Rpb25cbiAgICAqL1xuICAgIHRvZ2dsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXN1bWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQWN0aXZhdGUgRWxlbWVudCBBY3Rpb25cbiAgICAqL1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB1dGlscy5jdXJyZW50VGltZSgpICsgdGhpcy5kZWxheTtcbiAgICAgICAgdGhpcy5mcmFtZXN0YW1wID0gdGhpcy5zdGFydGVkO1xuICAgICAgICB0aGlzLmZpcnN0RnJhbWUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMucHJvY2Vzcy5zdGFydCgpO1xuICAgIH0sXG5cbiAgICByZXNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlc2V0UHJvZ3Jlc3MoKTtcbiAgICAgICAgdmFsdWVPcHMuYWxsKCdyZXNldCcsIHRoaXMudmFsdWVzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFJlc2V0IEFjdGlvbiBwcm9ncmVzc1xuICAgICovXG4gICAgcmVzZXRQcm9ncmVzczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAodGhpcy5wbGF5RGlyZWN0aW9uID09PSAxKSA/IDAgOiB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgTG9vcCB0aHJvdWdoIGFsbCB2YWx1ZXMgYW5kIGNyZWF0ZSBvcmlnaW4gcG9pbnRzXG4gICAgKi9cbiAgICByZXNldE9yaWdpbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFsdWVPcHMuYWxsKCdyZXNldE9yaWdpbicsIHRoaXMudmFsdWVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBSZXZlcnNlIEFjdGlvbiBwcm9ncmVzcyBhbmQgdmFsdWVzXG4gICAgKi9cbiAgICByZXZlcnNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICAgICAgdmFsdWVPcHMuYWxsKCdyZXRhcmdldCcsIHRoaXMudmFsdWVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTd2FwIHZhbHVlIG9yaWdpbnMgYW5kIHRvXG4gICAgKi9cbiAgICBmbGlwVmFsdWVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG4gICAgICAgIHZhbHVlT3BzLmFsbCgnZmxpcCcsIHRoaXMudmFsdWVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFNldCBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICovXG4gICAgc2V0UHJvcHM6IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzO1xuXG4gICAgICAgIGVhY2gocHJvcHMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAndmFsdWVzJykge1xuICAgICAgICAgICAgICAgIGFjdG9yW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFJlc2V0IHByb3BlcnRpZXMgdG8gQWN0aW9uIGRlZmF1bHRzXG4gICAgKi9cbiAgICByZXNldFByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9wcyhhY3Rpb25NYW5hZ2VyW3RoaXMuYWN0aW9uXS5hY3Rpb25EZWZhdWx0cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFNldCB2YWx1ZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdCB8fCBzdHJpbmcgfHwgbnVtYmVyXTogVmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddIChvcHRpb25hbCk6IERlZmF1bHQgcHJvcGVydHkgdG8gc2V0XG4gICAgKi9cbiAgICBzZXRWYWx1ZXM6IGZ1bmN0aW9uICh2YWx1ZXMsIGRlZmF1bHRWYWx1ZVByb3ApIHtcbiAgICAgICAgdmFsdWVPcHMucHJvY2Vzcyh2YWx1ZXMsIHRoaXMsIGRlZmF1bHRWYWx1ZVByb3ApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFVwZGF0ZSBvcmRlciBvZiB2YWx1ZSBrZXlzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSBvZiB2YWx1ZVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dOiBXaGV0aGVyIHRvIG1vdmUgdmFsdWUgdG8gYmFja1xuICAgICovXG4gICAgdXBkYXRlT3JkZXI6IGZ1bmN0aW9uIChrZXksIG1vdmVUb0JhY2ssIGhhc0NoaWxkcmVuKSB7XG4gICAgICAgIHZhciBvcmRlciA9ICFoYXNDaGlsZHJlbiA/IHRoaXMub3JkZXIgOiB0aGlzLnBhcmVudE9yZGVyLFxuICAgICAgICAgICAgcG9zaXRpb24gPSBvcmRlci5pbmRleE9mKGtleSk7XG5cbiAgICAgICAgLy8gSWYga2V5IGlzbid0IGluIGxpc3QsIG9yIG1vdmVUb0JhY2sgaXMgc2V0IHRvIHRydWUsIGFkZCBrZXlcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAtMSB8fCBtb3ZlVG9CYWNrKSB7XG4gICAgICAgICAgICBvcmRlci5wdXNoKGtleSk7XG5cbiAgICAgICAgICAgIC8vIElmIGtleSBhbHJlYWR5IGV4aXN0cywgcmVtb3ZlXG4gICAgICAgICAgICBpZiAocG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgb3JkZXIuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBDbGVhciB2YWx1ZSBrZXkgdXBkYXRlIG9yZGVyXG4gICAgKi9cbiAgICBjbGVhck9yZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMub3JkZXIgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnRPcmRlciA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gW2Jvb2xlYW5dOiBJcyB0aGlzIEVsZW1lbnQgY3VycmVudGx5IGFjdGl2ZT9cbiAgICBnZXQgaXNBY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgU2V0IEVsZW1lbnQgYWN0aXZlIHN0YXR1c1xuXG4gICAgICAgIElmIGFjdGl2ZSBpcyBiZWluZyBzZXQgdG8gdHJ1ZSwgc2V0IGhhc0NoYW5nZWQgdG8gdHJ1ZSwgdG9vXG5cbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogTmV3IGFjdGl2ZSBzdGF0dXNcbiAgICAqL1xuICAgIHNldCBpc0FjdGl2ZShzdGF0dXMpIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gc3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXNBY3RpdmUgPSBzdGF0dXM7XG4gICAgfVxufTtcblxuLy8gUmVnaXN0ZXIgQWN0b3Igd2l0aCBhY3Rpb25NYW5hZ2VyLCBzbyB3aGVuIGEgbmV3IEFjdGlvbiBpcyBzZXQsXG4vLyBXZSBnZXQgYSBuZXcgbWV0aG9kIG9uIEFjdG9yXG5hY3Rpb25NYW5hZ2VyLnNldEFjdG9yKEFjdG9yKTtcblxubW9kdWxlLmV4cG9ydHMgPSBBY3RvcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdG9yL0FjdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgQWN0b3IgPSByZXF1aXJlKCcuL0FjdG9yJyksXG4gICAgZ2VuZXJhdGVNZXRob2RJdGVyYXRvciA9IHJlcXVpcmUoJy4vc3lzdGVtL2dlbmVyYXRlLWl0ZXJhdG9yJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBhY3Rpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9tYW5hZ2VyJyksXG5cbiAgICBERUZBVUxUX1NUQUdHRVJfRUFTRSA9ICdsaW5lYXInLFxuXG4gICAgLypcbiAgICAgICAgQWN0b3JDb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG5cbiAgICAgICAgQHBhcmFtIFthcnJheV06IEFycmF5IG9mIEFjdG9ycywgb3IgdmFsaWQgQWN0b3IgZWxlbWVudHNcbiAgICAqL1xuICAgIEFjdG9yQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIChlbGVtZW50cywgb3B0cykge1xuICAgICAgICAvLyBBZGQgaW5pdGlhbCBlbGVtZW50c1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChlbGVtZW50cywgb3B0cyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgc3RhZ2dlciBBY3RvclxuICAgICAgICB0aGlzLl9zdGFnZ2VyID0gbmV3IEFjdG9yKCk7XG4gICAgfTtcblxuQWN0b3JDb2xsZWN0aW9uLnByb3RvdHlwZSA9IHtcblxuICAgIC8qXG4gICAgICAgIENsZWFyIGN1cnJlbnQgQWN0b3JzXG4gICAgKi9cbiAgICBjbGVhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTdGFnZ2VyIHRoZSBleGVjdXRpb24gb2YgRWxlbWVudCBtZXRob2RzXG5cbiAgICAgICAgQHBhcmFtIFtudW1iZXIgfHwgb2JqZWN0XTogSW50ZXJ2YWwgYmV0d2VlbiBFbGVtZW50cyBvciBzdGFnZ2VyIG9wdGlvbnNcbiAgICAgICAgQHBhcmFtIFtzdHJpbmcgfHwgZnVuY3Rpb25dOiBOYW1lIG9mIG1ldGhvZCB0byBleGVjdXRlIG9yIGEgY2FsbGJhY2tcbiAgICAgICAgQGFyZ3MgLi4uIChvcHRpb25hbCk6IE9wdGlvbmFsIGFyZ3VtZW50cyB0byBzZW5kIHRvIGNhbGxiYWNrXG4gICAgKi9cbiAgICBzdGFnZ2VyOiBmdW5jdGlvbiAocHJvcHMsIG1ldGhvZCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgICAgbnVtRWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIHByb3BzSXNOdW0gPSB1dGlscy5pc051bShwcm9wcyksXG4gICAgICAgICAgICBpbnRlcnZhbCA9IHByb3BzSXNOdW0gPyBwcm9wcyA6IHByb3BzLmludGVydmFsLFxuICAgICAgICAgICAgc3RhZ2dlclByb3BzID0gcHJvcHNJc051bSA/IHt9IDogcHJvcHMsXG4gICAgICAgICAgICBpID0gLTEsXG5cbiAgICAgICAgICAgIGNhbGxiYWNrID0gdXRpbHMuaXNTdHJpbmcobWV0aG9kKSA/XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGFjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdG9yW21ldGhvZF0uYXBwbHkoYWN0b3IsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gOiBtZXRob2Q7XG5cbiAgICAgICAgYXJncy5zcGxpY2UoMCwgMik7XG5cbiAgICAgICAgc3RhZ2dlclByb3BzLnZhbHVlcyA9IHtcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIG51bUVsZW1lbnRzLFxuICAgICAgICAgICAgICAgIGVhc2U6IHByb3BzSXNOdW0gPyBERUZBVUxUX1NUQUdHRVJfRUFTRSA6IHByb3BzLmVhc2UgfHwgREVGQVVMVF9TVEFHR0VSX0VBU0UsXG4gICAgICAgICAgICAgICAgc3RlcHM6IG51bUVsZW1lbnRzLFxuICAgICAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvOiBudW1FbGVtZW50cyAtIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzdGFnZ2VyUHJvcHMub25VcGRhdGUgPSBmdW5jdGlvbiAob3V0cHV0KSB7XG4gICAgICAgICAgICB2YXIgbmV3SW5kZXggPSBvdXRwdXQuaSxcbiAgICAgICAgICAgICAgICBnYXBJbmRleCA9IGkgKyAxO1xuXG4gICAgICAgICAgICAvLyBJZiBvdXIgbmV3IGluZGV4IGlzIG9ubHkgb25lIG1vcmUgdGhhbiB0aGUgcHJldmlvdXMgaW5kZXgsIGZpcmUgaW1tZWRpZXRseVxuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID09PSBpICsgMSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHNlbGYuZWxlbWVudHNbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG5cbiAgICAgICAgICAgIC8vIE9yIGxvb3AgdGhyb3VnaCB0aGUgZGlzdGFuY2UgdG8gZmlyZSBhbGwgaW5kZWNpZXMuIEluY3JlYXNlIGRlbGF5LlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKDsgZ2FwSW5kZXggPD0gbmV3SW5kZXg7IGdhcEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soc2VsZi5lbGVtZW50c1tnYXBJbmRleF0sIGdhcEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGkgPSBuZXdJbmRleDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9zdGFnZ2VyLnBsYXkoc3RhZ2dlclByb3BzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgSXRlcmF0ZSBvdmVyIGVhY2ggZWxlbWVudCBpbiBjb2xsZWN0aW9uXG5cbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IENhbGxiYWNrIHRvIHJ1biBvbiBlYWNoIEFjdG9yLCBwcm92aWRlZCAoYWN0b3IsIGluZGV4KSBhcmdzXG4gICAgKi9cbiAgICBlYWNoOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEFkZCBhIGdyb3VwIG9mIEFjdG9ycyB0byBvdXIgQ29sbGVjdGlvblxuXG4gICAgICAgIEBwYXJhbSBbYXJyYXldOiBBcnJheSBvZiBBY3RvcnMsIG9yIHZhbGlkIEFjdG9yIGVsZW1lbnRzXG4gICAgKi9cbiAgICBhZGQ6IGZ1bmN0aW9uIChlbGVtZW50cywgb3B0cykge1xuICAgICAgICB2YXIgbnVtTmV3RWxlbWVudHMgPSBlbGVtZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIG5ld0VsZW1lbnQ7XG5cbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgICAgICAgZm9yICg7IGkgPCBudW1OZXdFbGVtZW50czsgaSsrKSB7XG4gICAgICAgICAgICBvcHRzLmVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQgPSAoZWxlbWVudHNbaV0gaW5zdGFuY2VvZiBBY3RvcikgPyBlbGVtZW50c1tpXSA6IG5ldyBBY3RvcihvcHRzKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMucHVzaChuZXdFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbi8vIEluaXRpYWxpc2UgQWN0b3JDb2xsZWN0aW9uIG1ldGhvZHNcbihmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgbWV0aG9kIGluIEFjdG9yLnByb3RvdHlwZSkge1xuICAgICAgICBpZiAoQWN0b3IucHJvdG90eXBlLmhhc093blByb3BlcnR5KG1ldGhvZCkpIHtcbiAgICAgICAgICAgIEFjdG9yQ29sbGVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXSA9IGdlbmVyYXRlTWV0aG9kSXRlcmF0b3IobWV0aG9kKTtcbiAgICAgICAgfVxuICAgIH1cbn0pKCk7XG5cbmFjdGlvbk1hbmFnZXIuc2V0QWN0b3JDb2xsZWN0aW9uKEFjdG9yQ29sbGVjdGlvbik7XG5cbm1vZHVsZS5leHBvcnRzID0gQWN0b3JDb2xsZWN0aW9uO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0b3IvQWN0b3JDb2xsZWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXG4gICAgSW5wdXQgY29udHJvbGxlclxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjLmpzJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMuanMnKSxcbiAgICBIaXN0b3J5ID0gcmVxdWlyZSgnLi4vaW5jL0hpc3RvcnkuanMnKSxcblxuICAgIC8qXG4gICAgICAgIElucHV0IGNvbnN0cnVjdG9yXG4gICAgICAgIFxuICAgICAgICAgICAgU3ludGF4XG4gICAgICAgICAgICAgICAgbmV3SW5wdXQobmFtZSwgdmFsdWVbLCBwb2xsXSlcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHRvIHRyYWNrXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogSW5pdGlhbCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXSAob3B0aW9uYWwpOiBGdW5jdGlvbiB0byBwb2xsIElucHV0IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbmV3SW5wdXQocHJvcHNbLCBwb2xsXSlcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3Qgb2YgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dIChvcHRpb25hbCk6IEZ1bmN0aW9uIHRvIHBvbGwgSW5wdXQgZGF0YVxuXG4gICAgICAgIEByZXR1cm4gW0lucHV0XVxuICAgICovXG4gICAgSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwb2xsUG9zID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50ID0ge307XG4gICAgICAgIHRoaXMub2Zmc2V0ID0ge307XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7fTtcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEhpc3RvcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuYyhhcmd1bWVudHNbcG9sbFBvc10pKSB7XG4gICAgICAgICAgICB0aGlzLnBvbGwgPSBhcmd1bWVudHNbcG9sbFBvc107XG4gICAgICAgIH1cbiAgICB9O1xuXG5JbnB1dC5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLy8gW251bWJlcl06IE51bWJlciBvZiBmcmFtZXMgb2YgaW5hY3Rpdml0eSBiZWZvcmUgdmVsb2NpdHkgaXMgdHVybmVkIHRvIDBcbiAgICBtYXhJbmFjdGl2ZUZyYW1lczogMixcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogTnVtYmVyIG9mIGZyYW1lcyBpbnB1dCBoYXNuJ3QgYmVlbiB1cGRhdGVkXG4gICAgaW5hY3RpdmVGcmFtZXM6IDAsXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGxhdGVzdCBpbnB1dCB2YWx1ZXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXSAob3B0aW9uYWwpOiBOYW1lIG9mIHNwZWNpZmljIHByb3BlcnR5IHRvIHJldHVyblxuICAgICAgICBAcmV0dXJuIFtvYmplY3QgfHwgbnVtYmVyXTogTGF0ZXN0IGlucHV0IHZhbHVlcyBvciwgaWYgc3BlY2lmaWVkLCBzaW5nbGUgdmFsdWVcbiAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgdmFyIGxhdGVzdCA9IHRoaXMuaGlzdG9yeS5nZXQoKSxcbiAgICAgICAgICAgIHZhbCA9IChwcm9wICE9PSB1bmRlZmluZWQpID8gbGF0ZXN0W3Byb3BdIDogbGF0ZXN0O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIHRoZSBpbnB1dCB2YWx1ZXNcbiAgICAgICAgXG4gICAgICAgIFN5bnRheFxuICAgICAgICAgICAgaW5wdXQudXBkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiB0byB0cmFja1xuICAgICAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogSW5pdGlhbCB2YWx1ZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaW5wdXQudXBkYXRlKHByb3BzKVxuICAgICAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IG9mIHZhbHVlc1xuICAgICAgICAgICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtJbnB1dF1cbiAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHt9O1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bShhcmcxKSkge1xuICAgICAgICAgICAgdmFsdWVzW2FyZzBdID0gYXJnMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IGFyZzA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhpc3RvcnkuYWRkKHV0aWxzLm1lcmdlKHRoaXMuY3VycmVudCwgdmFsdWVzKSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIENoZWNrIGZvciBpbnB1dCBtb3ZlbWVudCBhbmQgdXBkYXRlIHBvaW50ZXIgb2JqZWN0J3MgcHJvcGVydGllc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaW1lc3RhbXAgb2YgZnJhbWVcbiAgICAgICAgQHJldHVybiBbSW5wdXRdXG4gICAgKi9cbiAgICBvbkZyYW1lOiBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBsYXRlc3QsIGhhc0NoYW5nZWQ7XG4gICAgICAgIFxuICAgICAgICAvLyBDaGVjayBwcm92aWRlZCB0aW1lc3RhbXAgYWdhaW5zdCBsYXN0RnJhbWUgdGltZXN0YW1wIGFuZCByZXR1cm4gaW5wdXQgaGFzIGFscmVhZHkgYmVlbiB1cGRhdGVkXG4gICAgICAgIGlmICh0aW1lc3RhbXAgPT09IHRoaXMubGFzdEZyYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxhdGVzdCA9ICh0aGlzLnBvbGwpID8gdGhpcy5wb2xsKCkgOiB0aGlzLmhpc3RvcnkuZ2V0KCk7XG4gICAgICAgIGhhc0NoYW5nZWQgPSB1dGlscy5oYXNDaGFuZ2VkKHRoaXMuY3VycmVudCwgbGF0ZXN0KTtcblxuICAgICAgICAvLyBJZiBpbnB1dCBoYXMgY2hhbmdlZCBiZXR3ZWVuIGZyYW1lcyAgXG4gICAgICAgIGlmIChoYXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gY2FsYy5vZmZzZXQodGhpcy5jdXJyZW50LCBsYXRlc3QpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gbGF0ZXN0O1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG5cbiAgICAgICAgLy8gT3IgaXQgaGFzbid0IG1vdmVkIGFuZCBvdXIgZnJhbWUgbGltaXQgaGFzIGJlZW4gcmVhY2hlZFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IGNhbGMub2Zmc2V0KHRoaXMuY3VycmVudCwgdGhpcy5jdXJyZW50KTtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIGlucHV0IGhhc24ndCBjaGFuZ2VkXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzKys7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubGFzdEZyYW1lID0gdGltZXN0YW1wO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L0lucHV0LmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpLFxuXG4gICAgLypcbiAgICAgICAgUHJvY2VzcyBjb25zdHJ1Y3RvclxuICAgICAgICBcbiAgICAgICAgU3ludGF4XG4gICAgICAgICAgICB2YXIgcHJvY2VzcyA9IG5ldyBQcm9jZXNzKHNjb3BlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB2YXIgcHJvY2VzcyA9IG5ldyBQcm9jZXNzKGNhbGxiYWNrKTtcbiAgICAqL1xuICAgIFByb2Nlc3MgPSBmdW5jdGlvbiAoc2NvcGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBoYXNTY29wZSA9IChjYWxsYmFjayAhPT0gdW5kZWZpbmVkKTtcblxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gaGFzU2NvcGUgPyBjYWxsYmFjayA6IHNjb3BlO1xuICAgICAgICB0aGlzLnNjb3BlID0gaGFzU2NvcGUgPyBzY29wZSA6IHRoaXM7XG4gICAgICAgIHRoaXMuaWQgPSBtYW5hZ2VyLnJlZ2lzdGVyKCk7XG5cbiAgICAgICAgLy8gW2Jvb2xlYW5dOiBJcyB0aGlzIHByb2Nlc3MgY3VycmVudGx5IGFjdGl2ZT9cbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG5cblByb2Nlc3MucHJvdG90eXBlID0ge1xuICAgIC8qXG4gICAgICAgIEZpcmUgY2FsbGJhY2tcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbdGltZXN0YW1wXTogVGltZXN0YW1wIG9mIGN1cnJlbnRseS1leGVjdXRlZCBmcmFtZVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuICAgICovXG4gICAgZmlyZTogZnVuY3Rpb24gKHRpbWVzdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrLmNhbGwodGhpcy5zY29wZSwgdGltZXN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHdlJ3JlIHJ1bm5pbmcgYXQgYW4gaW50ZXJ2YWwsIGRlYWN0aXZhdGUgYWdhaW5cbiAgICAgICAgaWYgKHRoaXMuaXNJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0YXJ0IHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogRHVyYXRpb24gb2YgcHJvY2VzcyBpbiBtcywgMCBpZiBpbmRlZmluaXRlXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdG9wVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0b3AoKTtcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5pc1N0b3BUaW1lckFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0b3AgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQWN0aXZhdGUgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICBtYW5hZ2VyLmFjdGl2YXRlKHRoaXMsIHRoaXMuaWQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRGVhY3RpdmF0ZSBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIG1hbmFnZXIuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRmlyZSBwcm9jZXNzIGV2ZXJ5IHggbXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIG1zIHRvIHdhaXQgYmV0d2VlbiByZWZpcmluZyBwcm9jZXNzLlxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgZXZlcnk6IGZ1bmN0aW9uIChpbnRlcnZhbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuXG4gICAgICAgIHRoaXMuaXNJbnRlcnZhbCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5hY3RpdmF0ZSgpO1xuICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlzSW50ZXJ2YWxUaW1lQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQ2xlYXIgYWxsIHRpbWVyc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFxuICAgICovXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0ludGVydmFsID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5pc1N0b3BUaW1lckFjdGl2ZSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RvcFRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuaXNJbnRlcnZhbFRpbWVBY3RpdmUpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbFRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9jZXNzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy9Qcm9jZXNzLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBCZXppZXIgPSByZXF1aXJlKCcuL0JlemllcicpLFxuXG4gICAgLypcbiAgICAgICAgTWlycm9yIGVhc2luZ1xuICAgICAgICBcbiAgICAgICAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICAgICAgICBlYXNlSW4gaW50byBhbiBlYXNlSW5PdXRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gbWlycm9yXG4gICAgICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4gICAgKi9cbiAgICBtaXJyb3JFYXNpbmcgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIG1ldGhvZCkge1xuICAgICAgICByZXR1cm4gKHByb2dyZXNzIDw9IDAuNSkgPyBtZXRob2QoMiAqIHByb2dyZXNzKSAvIDIgOiAoMiAtIG1ldGhvZCgyICogKDEgLSBwcm9ncmVzcykpKSAvIDI7XG4gICAgfSxcbiAgICAgICAgICAgIFxuICAgIC8qXG4gICAgICAgIFJldmVyc2UgZWFzaW5nXG4gICAgICAgIFxuICAgICAgICBSZXZlcnNlcyB0aGUgb3V0cHV0IG9mIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgZm9yIGZsaXBwaW5nIGVhc2VJblxuICAgICAgICBjdXJ2ZSB0byBhbiBlYXNlT3V0LlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byByZXZlcnNlXG4gICAgICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4gICAgKi9cbiAgICByZXZlcnNlRWFzaW5nID0gZnVuY3Rpb24gKHByb2dyZXNzLCBtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBtZXRob2QoMSAtIHByb2dyZXNzKTtcbiAgICB9O1xuXG4vKlxuICAgIEVhc2luZyBjbGFzc1xuXG4gICAgSWYgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCByZXR1cm5zIGVhc2luZyBmdW5jdGlvbiB3aXRoIFxuICAgIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5cbiAgICBJZiBwcm92aWRlZCBmb3VyIGFyZ3VtZW50cywgcmV0dXJucyBuZXcgQmV6aWVyIGNsYXNzIGluc3RlYWQuXG4qL1xudmFyIEVhc2luZyA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5Mikge1xuICAgIHZhciBtZXRob2QgPSB4MSxcbiAgICAgICAgZWFzaW5nRnVuY3Rpb247XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgYmV6aWVyIGN1cnZlLCByZXR1cm4gYSBiZXppZXIgZnVuY3Rpb25cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSBuZXcgQmV6aWVyKHgxLCB5MSwgeDIsIHkyKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBlYXNpbmdGdW5jdGlvbi5pbiA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZWFzaW5nRnVuY3Rpb24ub3V0ID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gcmV2ZXJzZUVhc2luZyhwcm9ncmVzcywgbWV0aG9kKTtcbiAgICAgICAgfTtcblxuICAgICAgICBlYXNpbmdGdW5jdGlvbi5pbk91dCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIG1pcnJvckVhc2luZyhwcm9ncmVzcywgbWV0aG9kKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWFzaW5nRnVuY3Rpb247XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVhc2luZztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcGxheS9FYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG52YXIgZWFjaCA9IHV0aWxzLmVhY2g7XG5cbi8qXG4gICAgUm9sZSBjbGFzcyBjb25zdHJ1Y3RvclxuXG4gICAgQHBhcmFtIFtvYmplY3RdOiBPcHRpb25hbCBtZXRob2RzIGFuZCBwcm9wcyB0byBhZGQ6XG4gICAgICAgIG5hbWUgW3N0cmluZ106ICAgICAgTmFtZSBvZiBnZW5lcmF0ZWQgZ2V0dGVyL3NldHRlciBtZXRob2Qgb24gQWN0b3JcbiAgICAgICAgX21hcCBbb2JqZWN0XTogICAgICBNYXAgQWN0b3IgdmFsdWVzIHRvIHRoZXNlIHZhbHVlcyBmb3IgdGhpcyBSb2xlXG4gICAgICAgIF90eXBlTWFwIFtvYmplY3RdOiAgTWFwIHZhbHVlcyB0byB2YWx1ZSB0eXBlc1xuICAgICAgICBpbml0IFtmdW5jdGlvbl06ICAgIENhbGxiYWNrIHRvIHJ1biB3aGVuIHRoaXMgUm9sZSBpcyBhZGRlZCB0byBhbiBBY3RvclxuICAgICAgICBzdGFydCBbZnVuY3Rpb25dOiAgIENhbGxiYWNrIHRvIHJ1biB3aGVuIGhvc3QgQWN0b3Igc3RhcnRzIGFuIGFjdGlvblxuICAgICAgICBjb21wbGV0ZSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBydW4gd2hlbiBhY3Rpb24gY29tcGxldGVzXG4gICAgICAgIGZyYW1lIFtmdW5jdGlvbl06ICAgQ2FsbGJhY2sgdG8gZmlyZSBvbmNlIHBlciBmcmFtZVxuICAgICAgICB1cGRhdGUgW2Z1bmN0aW9uXTogIENhbGxiYWNrIHRvIGZpcmUgd2hlbiB2YWx1ZXMgY2hhbmdlXG4gICAgICAgIGdldCBbZnVuY3Rpb25dOiAgICAgUmVhZCB2YWx1ZSBmcm9tIGFjdHVhbCBlbGVtZW50XG4gICAgICAgIHNldCBbZnVuY3Rpb25dOiAgICAgU2V0IHZhbHVlIG9uIGFjdHVhbCBlbGVtZW50XG4qL1xudmFyIFJvbGUgPSBmdW5jdGlvbiAobWV0aG9kcykge1xuICAgIHZhciByb2xlID0gdGhpcztcblxuICAgIHJvbGUuX21hcCA9IHt9O1xuXG4gICAgZWFjaChtZXRob2RzLCBmdW5jdGlvbiAobmFtZSwgbWV0aG9kKSB7XG4gICAgICAgIHJvbGVbbmFtZV0gPSAoIXV0aWxzLmlzT2JqKG1ldGhvZCkpID8gbWV0aG9kIDogdXRpbHMuY29weShtZXRob2QpO1xuICAgIH0pO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBuZXcgcm9sZVxuXG4gICAgQHBhcmFtIFtvYmplY3RdOiBPcHRpb25hbCBtZXRob2RzIGFuZCBwcm9wcyB0byBhZGRcbiAgICBAcGFyYW0gW3ZhbHVlc1RvTWFwXTogT3ZlcnJpZGUgZXhpc3RpbmcgbWFwIHdpdGggdGhlc2UgdmFsdWVzXG4gICAgQHJldHVybiBbUm9sZV06IE5ldyBSb2xlXG4qL1xudmFyIGNyZWF0ZVJvbGUgPSBmdW5jdGlvbiAobWV0aG9kcywgdmFsdWVzKSB7XG4gICAgdmFyIG5ld1JvbGUgPSBuZXcgUm9sZShtZXRob2RzKTtcblxuICAgIGVhY2godmFsdWVzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBuZXdSb2xlLl9tYXBba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld1JvbGU7XG59O1xuXG5Sb2xlLnByb3RvdHlwZSA9IHtcblxuICAgIC8qXG4gICAgICAgIE1hcCB2YWx1ZSBrZXlzIG9yIGdlbmVyYXRlIG5ldyBSb2xlIHdpdGggdXBkYXRlZCBtYXBcblxuICAgICAgICBHZXR0ZXI6XG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byBtYXBcbiAgICAgICAgICAgIEByZXR1cm4gW3N0cmluZ106IE1hcHBlZCBrZXksIG9yIGtleSBpZiBubyBtYXBwZWQga2V5IGZvdW5kXG5cbiAgICAgICAgU2V0dGVyOiBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogTWFwIG9mIEFjdG9yIGtleXMgLT4gUm9sZSBrZXlzXG4gICAgICAgICAgICBAcmV0dXJuIFtSb2xlXTogTmV3IFJvbGUgd2l0aCB1bmlxdWUgbWFwXG4gICAgKi9cbiAgICBtYXA6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHN0cmluZywgZ2V0IG1hcHBlZCB2YWx1ZVxuICAgICAgICAvLyBPdGhlcndpc2UgdGhpcyBpcyBhIG1hcCwgZHVwbGljYXRlZCByb2xlIHdpdGggdXBkYXRlZCBtYXBcbiAgICAgICAgcmV0dXJuICh1dGlscy5pc1N0cmluZyh2YWx1ZXMpKSA/IHRoaXMuX21hcFt2YWx1ZXNdIHx8IHZhbHVlcyA6IGNyZWF0ZVJvbGUodGhpcywgdmFsdWVzKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvbGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yb2xlcy9Sb2xlLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXG4gICAgRWFzaW5nIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgXG4gICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgICAgIFxuICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgICAgICBcbiAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgICAgIFxuICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIEVhc2luZyA9IHJlcXVpcmUoJy4vRWFzaW5nJyksXG4gICAgZWFzaW5nRnVuY3Rpb24sXG4gICAgXG4gICAgLy8gR2VuZXJhdGUgZWFzaW5nIGZ1bmN0aW9uIHdpdGggcHJvdmlkZWQgcG93ZXJcbiAgICBnZW5lcmF0ZVBvd2VyRWFzaW5nID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgcG93ZXIpO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgICAgICBcbiAgICAgICAgT24gaW5pdCwgd2UgdXNlIEVhc2luZ0Z1bmN0aW9uLm1pcnJvciBhbmQgLnJldmVyc2UgdG8gZ2VuZXJhdGUgZWFzZUluT3V0IGFuZFxuICAgICAgICBlYXNlT3V0IGZ1bmN0aW9ucyByZXNwZWN0aXZlbHkuXG4gICAgKi9cbiAgICBiYXNlRWFzaW5nID0ge1xuICAgICAgICBjaXJjOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHByb2dyZXNzKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGJhY2s6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgdmFyIHN0cmVuZ3RoID0gMS41O1xuXG4gICAgICAgICAgICByZXR1cm4gKHByb2dyZXNzICogcHJvZ3Jlc3MpICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4vLyBHZW5lcmF0ZSBwb3dlciBlYXNpbmcgZWFzaW5nXG5bJ2Vhc2UnLCAnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChlYXNpbmdOYW1lLCBpKSB7XG4gICAgYmFzZUVhc2luZ1tlYXNpbmdOYW1lXSA9IGdlbmVyYXRlUG93ZXJFYXNpbmcoaSArIDIpO1xufSk7XG5cbi8vIEdlbmVyYXRlIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5mb3IgKHZhciBrZXkgaW4gYmFzZUVhc2luZykge1xuICAgIGlmIChiYXNlRWFzaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSBuZXcgRWFzaW5nKGJhc2VFYXNpbmdba2V5XSk7XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luJ10gPSBlYXNpbmdGdW5jdGlvbi5pbjtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnT3V0J10gPSBlYXNpbmdGdW5jdGlvbi5vdXQ7XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luT3V0J10gPSBlYXNpbmdGdW5jdGlvbi5pbk91dDtcbiAgICB9XG59XG5cbi8qXG4gICAgTGluZWFyIGVhc2luZyBhZGp1c3RtZW50XG4gICAgXG4gICAgVGhlIGRlZmF1bHQgZWFzaW5nIG1ldGhvZCwgbm90IGFkZGVkIHdpdGggLmV4dGVuZCBhcyBpdCBoYXMgbm8gT3V0IG9yIEluT3V0XG4gICAgdmFyaWF0aW9uLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMC0xXG4gICAgQHJldHVybiBbbnVtYmVyXTogVW5hZGp1c3RlZCBwcm9ncmVzc1xuKi9cbmJhc2VFYXNpbmcubGluZWFyID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgcmV0dXJuIHByb2dyZXNzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRWFzaW5nO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9wbGF5L3ByZXNldC1lYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgXG4gICAgLy8gW251bWJlcl06IFRpbWUgb2YgYW5pbWF0aW9uIChpZiBhbmltYXRpbmcpIGluIG1zXG4gICAgZHVyYXRpb246IDQwMCxcbiAgICBcbiAgICAvLyBbc3RyaW5nXTogRWFzZSBhbmltYXRpb25cbiAgICBlYXNlOiAnZWFzZUluT3V0JyxcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogTXVsdGlwbHkgcHJvZ3Jlc3MgYnkgdGhpcyAoLjUgaXMgaGFsZiBzcGVlZClcbiAgICBkaWxhdGU6IDEsXG4gICAgXG4gICAgLy8gW2Jvb2xlYW4gfHwgbnVtYmVyXTogTnVtYmVyIG9mIHRpbWVzIHRvIGxvb3AgdmFsdWVzLCB0cnVlIGZvciBpbmRlZmluaXRlXG4gICAgbG9vcDogZmFsc2UsXG4gICAgXG4gICAgLy8gW2Jvb2xlYW4gfHwgbnVtYmVyXTogTnVtYmVyIG9mIHRpbWVzIHRvIHlveW8gdmFsdWVzLCB0cnVlIGZvciBpbmRlZmluaXRlXG4gICAgeW95bzogZmFsc2UsXG4gICAgXG4gICAgLy8gW2Jvb2xlYW4gfHwgbnVtYmVyXTogTnVtYmVyIG9mIHRpbWVzIHRvIGZsaXAgdmFsdWVzLCB0cnVlIGZvciBpbmRlZmluaXRlXG4gICAgZmxpcDogZmFsc2Vcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3BsYXkvZGVmYXVsdC1hY3Rpb24tcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy8gW251bWJlcl06IER1cmF0aW9uIG9mIGFuaW1hdGlvbiBpbiBtc1xuICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgXG4gICAgLy8gW251bWJlcl06IER1cmF0aW9uIG9mIGRlbGF5IGluIG1zXG4gICAgZGVsYXk6IDAsXG4gICAgXG4gICAgLy8gW251bWJlcl06IFN0YWdnZXIgZGVsYXkgYXMgZmFjdG9yIG9mIGR1cmF0aW9uIChpZSAwLjIgd2l0aCBkdXJhdGlvbiBvZiAxMDAwbXMgPSAyMDBtcylcbiAgICBzdGFnZ2VyOiAwLFxuICAgIFxuICAgIC8vIFtzdHJpbmddOiBFYXNpbmcgdG8gYXBwbHlcbiAgICBlYXNlOiAnZWFzZUluT3V0JyxcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogTnVtYmVyIG9mIHN0ZXBzIHRvIGV4ZWN1dGUgYW5pbWF0aW9uXG4gICAgc3RlcHM6IDAsXG4gICAgXG4gICAgLy8gW3N0cmluZ106IFRlbGxzIFJlZHNoaWZ0IHdoZW4gdG8gc3RlcCwgYXQgdGhlIHN0YXJ0IG9yIGVuZCBvZiBhIHN0ZXAuIE90aGVyIG9wdGlvbiBpcyAnc3RhcnQnIGFzIHBlciBDU1Mgc3BlY1xuICAgIHN0ZXBEaXJlY3Rpb246ICdlbmQnXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9wbGF5L2RlZmF1bHQtdmFsdWUtcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBwYXJzZUFyZ3MgPSByZXF1aXJlKCcuL3BhcnNlLWFyZ3MnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvKlxuICAgICAgICBQbGF5IGFuIGFuaW1hdGlvblxuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0IHx8IHN0cmluZ106IFBhcmFtZXRlcnMgb3IgcHJlc2V0IG5hbWVzXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT3ZlcnJpZGUgcGFyYW1ldGVyc1xuICAgICovXG4gICAgcGxheTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFjdGlvbiA9ICdwbGF5JztcbiAgICAgICAgdGhpcy5zZXQocGFyc2VBcmdzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksICd0bycpO1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBBZGQgYXJndW1lbnRzIHRvIHF1ZXVlXG4gICAgKi9cbiAgICBhZGRUb1F1ZXVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucXVldWUuYWRkLmFwcGx5KHRoaXMucXVldWUsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBDaGVjayBmb3IgbmV4dCBzdGVwcyBhbmQgcGVyZm9ybSwgc3RvcCBpZiBub3RcbiAgICAqL1xuICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5leHRTdGVwcyA9IFt7XG4gICAgICAgICAgICAgICAga2V5OiAnbG9vcCcsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IHRoaXMucmVzZXRcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6ICd5b3lvJyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogdGhpcy5yZXZlcnNlXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAga2V5OiAnZmxpcCcsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IHRoaXMuZmxpcFZhbHVlc1xuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBudW1TdGVwcyA9IG5leHRTdGVwcy5sZW5ndGgsXG4gICAgICAgICAgICBoYXNOZXh0U3RlcCA9IGZhbHNlLFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBudW1TdGVwczsgKytpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja05leHRTdGVwKG5leHRTdGVwc1tpXS5rZXksIG5leHRTdGVwc1tpXS5jYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICBoYXNOZXh0U3RlcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhhc05leHRTdGVwICYmICF0aGlzLnBsYXlOZXh0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQ2hlY2sgbmV4dCBzdGVwXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2Ygc3RlcCAoJ3lveW8nIG9yICdsb29wJylcbiAgICAgICAgQHBhcmFtIFtjYWxsYmFja106IEZ1bmN0aW9uIHRvIHJ1biBpZiB3ZSB0YWtlIHRoaXMgc3RlcFxuICAgICovXG4gICAgY2hlY2tOZXh0U3RlcDogZnVuY3Rpb24gKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIENPVU5UID0gJ0NvdW50JyxcbiAgICAgICAgICAgIHN0ZXBUYWtlbiA9IGZhbHNlLFxuICAgICAgICAgICAgc3RlcCA9IHRoaXNba2V5XSxcbiAgICAgICAgICAgIGNvdW50ID0gdGhpc1trZXkgKyBDT1VOVF0sXG4gICAgICAgICAgICBmb3JldmVyID0gKHN0ZXAgPT09IHRydWUpO1xuXG4gICAgICAgIGlmIChmb3JldmVyIHx8IHV0aWxzLmlzTnVtKHN0ZXApKSB7XG4gICAgICAgICAgICArK2NvdW50O1xuICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0gPSBjb3VudDtcbiAgICAgICAgICAgIGlmIChmb3JldmVyIHx8IGNvdW50IDw9IHN0ZXApIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RlcFRha2VuO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBOZXh0IGluIHF1ZXVlXG4gICAgKi9cbiAgICBwbGF5TmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RlcFRha2VuID0gZmFsc2UsXG4gICAgICAgICAgICBuZXh0SW5RdWV1ZSA9IHRoaXMucXVldWUubmV4dCh0aGlzLnBsYXlEaXJlY3Rpb24pO1xuXG4gICAgICAgIGlmICh1dGlscy5pc0FycmF5KG5leHRJblF1ZXVlKSkge1xuICAgICAgICAgICAgdGhpcy5zZXQocGFyc2VBcmdzLmFwcGx5KHRoaXMsIG5leHRJblF1ZXVlKSwgJ3RvJylcbiAgICAgICAgICAgICAgICAucmVzZXRQcm9ncmVzcygpO1xuXG4gICAgICAgICAgICBzdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0ZXBUYWtlbjtcbiAgICB9LFxuXG4gICAgc2VlazogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZHVyYXRpb24gKiBwcm9ncmVzcztcblxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzcy5maXJlKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9wbGF5L2FjdG9yLW1ldGhvZHMuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBwcmVzZXRNYW5hZ2VyID0gcmVxdWlyZSgnLi4vLi4vYWN0b3IvcHJlc2V0LW1hbmFnZXInKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiYXNlLCBvdmVycmlkZSkge1xuICAgIHZhciBwcm9wcyA9ICh0eXBlb2YgYmFzZSA9PT0gJ3N0cmluZycpID8gcHJlc2V0TWFuYWdlci5nZXREZWZpbmVkKGJhc2UpIDogYmFzZTtcblxuICAgIC8vIE92ZXJyaWRlIHByb3BlcnRpZXMgd2l0aCBzZWNvbmQgYXJnIGlmIGl0J3MgYW4gb2JqZWN0XG4gICAgaWYgKHR5cGVvZiBvdmVycmlkZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcHJvcHMgPSB1dGlscy5tZXJnZShwcm9wcywgb3ZlcnJpZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wcztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2dlbmVyaWMvcGFyc2UtYXJncy5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIElucHV0ID0gcmVxdWlyZSgnLi9JbnB1dC5qcycpLFxuICAgIGN1cnJlbnRQb2ludGVyLCAvLyBTb3J0IHRoaXMgb3V0IGZvciBtdWx0aXRvdWNoXG4gICAgXG4gICAgVE9VQ0hNT1ZFID0gJ3RvdWNobW92ZScsXG4gICAgTU9VU0VNT1ZFID0gJ21vdXNlbW92ZScsXG5cbiAgICAvKlxuICAgICAgICBDb252ZXJ0IGV2ZW50IGludG8gcG9pbnRcbiAgICAgICAgXG4gICAgICAgIFNjcmFwZSB0aGUgeC95IGNvb3JkaW5hdGVzIGZyb20gdGhlIHByb3ZpZGVkIGV2ZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2V2ZW50XTogT3JpZ2luYWwgcG9pbnRlciBldmVudFxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dOiBUcnVlIGlmIHRvdWNoIGV2ZW50XG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IHgveSBjb29yZGluYXRlcyBvZiBldmVudFxuICAgICovXG4gICAgZXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKGV2ZW50LCBpc1RvdWNoRXZlbnQpIHtcbiAgICAgICAgdmFyIHRvdWNoQ2hhbmdlZCA9IGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogZmFsc2U7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdG91Y2hDaGFuZ2VkID8gdG91Y2hDaGFuZ2VkLmNsaWVudFggOiBldmVudC5wYWdlWCxcbiAgICAgICAgICAgIHk6IHRvdWNoQ2hhbmdlZCA/IHRvdWNoQ2hhbmdlZC5jbGllbnRZIDogZXZlbnQucGFnZVlcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBhY3R1YWwgZXZlbnRcbiAgICAgICAgXG4gICAgICAgIENoZWNrcyBmb3IgalF1ZXJ5J3MgLm9yaWdpbmFsRXZlbnQgaWYgcHJlc2VudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtldmVudCB8IGpRdWVyeSBldmVudF1cbiAgICAgICAgQHJldHVybiBbZXZlbnRdOiBUaGUgYWN0dWFsIEpTIGV2ZW50ICBcbiAgICAqL1xuICAgIGdldEFjdHVhbEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50O1xuICAgIH0sXG5cbiAgICBcbiAgICAvKlxuICAgICAgICBQb2ludGVyIGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBQb2ludGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZ2V0QWN0dWFsRXZlbnQoZSksIC8vIEluIGNhc2Ugb2YgalF1ZXJ5IGV2ZW50XG4gICAgICAgICAgICBpc1RvdWNoID0gKGV2ZW50LnRvdWNoZXMpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgc3RhcnRQb2ludCA9IGV2ZW50VG9Qb2ludChldmVudCwgaXNUb3VjaCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnVwZGF0ZShzdGFydFBvaW50KTtcbiAgICAgICAgdGhpcy5pc1RvdWNoID0gaXNUb3VjaDtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfSxcbiAgICBcbiAgICBwcm90byA9IFBvaW50ZXIucHJvdG90eXBlID0gbmV3IElucHV0KCk7XG5cbi8qXG4gICAgQmluZCBtb3ZlIGV2ZW50XG4qL1xucHJvdG8uYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm1vdmVFdmVudCA9IHRoaXMuaXNUb3VjaCA/IFRPVUNITU9WRSA6IE1PVVNFTU9WRTtcbiAgICBcbiAgICBjdXJyZW50UG9pbnRlciA9IHRoaXM7XG4gICAgXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMub25Nb3ZlKTtcbn07XG5cbi8qXG4gICAgVW5iaW5kIG1vdmUgZXZlbnRcbiovXG5wcm90by51bmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMub25Nb3ZlKTtcbn07XG5cbi8qXG4gICAgUG9pbnRlciBvbk1vdmUgZXZlbnQgaGFuZGxlclxuICAgIFxuICAgIEBwYXJhbSBbZXZlbnRdOiBQb2ludGVyIG1vdmUgZXZlbnRcbiovXG5wcm90by5vbk1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBuZXdQb2ludCA9IGV2ZW50VG9Qb2ludChlLCBjdXJyZW50UG9pbnRlci5pc1RvdWNoKTtcbiAgICBlID0gZ2V0QWN0dWFsRXZlbnQoZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGN1cnJlbnRQb2ludGVyLnVwZGF0ZShuZXdQb2ludCk7XG59O1xuXG5wcm90by5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50ZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbnB1dC9Qb2ludGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGFtcDogMSxcblxuICAgIC8vIFtudW1iZXJdOiBGYWN0b3Igb2YgbW92ZW1lbnQgb3V0c2lkZSBvZiBtYXhpbXVtIHJhbmdlIChpZSAwLjUgd2lsbCBtb3ZlIGhhbGYgYXMgbXVjaCBhcyAxKVxuICAgIGVzY2FwZUFtcDogMFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdHJhY2svZGVmYXVsdC12YWx1ZS1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBbYXJyYXldOiBMaW5lYXIgcmFuZ2Ugb2YgdmFsdWVzIChlZyBbLTEwMCwgLTUwLCA1MCwgMTAwXSkgb2YgbGlua2VkIHZhbHVlIHRvIG1hcCB0byAubWFwVG9cbiAgICBtYXBMaW5rOiB1bmRlZmluZWQsXG4gICAgXG4gICAgLy8gW2FycmF5XTogTm9uLWxpbmVhciByYW5nZSBvZiB2YWx1ZXMgKGVnIFswLCAxLCAxLCAwXSkgdG8gbWFwIHRvIC5tYXBMaW5rIC0gaGVyZSB0aGUgbGlua2VkIHZhbHVlIGJlaW5nIDc1IHdvdWxkIHJlc3VsdCBpbiBhIHZhbHVlIG9mIDAuNVxuICAgIG1hcFRvOiB1bmRlZmluZWQsXG4gICAgXG4gICAgLy8gW251bWJlcl06IEZhY3RvciBvZiBpbnB1dCBtb3ZlbWVudCB0byBkaXJlY3Qgb3V0cHV0XG4gICAgYW1wOiAxXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9saW5rL2RlZmF1bHQtdmFsdWUtcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlcywgdGVybXMsIGRlbGltaXRlciwgY2hvcCkge1xuICAgIHZhciBjb21iaW5lZCA9ICcnLFxuICAgICAgICBrZXkgPSAnJyxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuXG4gICAgZm9yICg7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICAgIGtleSA9IHRlcm1zW2ldO1xuXG4gICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgY29tYmluZWQgKz0gdmFsdWVzW2tleV0gKyBkZWxpbWl0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hvcCkge1xuICAgICAgICBjb21iaW5lZCA9IGNvbWJpbmVkLnNsaWNlKDAsIC1jaG9wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluZWQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL3NwbGl0LWNvbW1hLWRlbGltaXRlZCcpLFxuICAgIGZ1bmN0aW9uQnJlYWsgPSByZXF1aXJlKCcuL2Z1bmN0aW9uLWJyZWFrJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCB0ZXJtcykge1xuICAgIHZhciBzcGxpdFZhbHVlID0ge30sXG4gICAgICAgIG51bVRlcm1zID0gdGVybXMubGVuZ3RoLFxuICAgICAgICBjb2xvcnMgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGZ1bmN0aW9uQnJlYWsodmFsdWUpKSxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBmb3IgKDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAgc3BsaXRWYWx1ZVt0ZXJtc1tpXV0gPSAoY29sb3JzW2ldICE9PSB1bmRlZmluZWQpID8gY29sb3JzW2ldIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZ2V0LWNvbG9yLXZhbHVlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCArICcoJyArIHZhbHVlICsgJyknO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1jcmVhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNvbG9yOiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiAyNTUsXG4gICAgICAgIHJvdW5kOiB0cnVlXG4gICAgfSxcbiAgICBvcGFjaXR5OiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiAxXG4gICAgfSxcbiAgICBwZXJjZW50OiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgIHVuaXQ6ICclJ1xuICAgIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBYID0gJ1gnLFxuICAgIFkgPSAnWScsXG4gICAgQUxQSEEgPSAnQWxwaGEnLFxuXG4gICAgdGVybXMgPSB7XG4gICAgICAgIGNvbG9yczogWydSZWQnLCAnR3JlZW4nLCAnQmx1ZScsIEFMUEhBXSxcbiAgICAgICAgcG9zaXRpb25zOiBbWCwgWSwgJ1onXSxcbiAgICAgICAgZGltZW5zaW9uczogWydUb3AnLCAnUmlnaHQnLCAnQm90dG9tJywgJ0xlZnQnXSxcbiAgICAgICAgc2hhZG93OiBbWCwgWSwgJ1JhZGl1cycsICdTcHJlYWQnLCAnQ29sb3InXSxcbiAgICAgICAgaHNsOiBbJ0h1ZScsICdTYXR1cmF0aW9uJywgJ0xpZ2h0bmVzcycsIEFMUEhBXVxuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0gdGVybXM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQuanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFNUUk9LRSA9ICdzdHJva2UnLFxuICAgIERBU0ggPSBTVFJPS0UgKyAnLWRhc2gnLCAvLyBzdG9rZS13aWR0aFxuICAgIERBU0hfQVJSQVkgPSBEQVNIICsgJ2FycmF5JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgb3BhY2l0eTogU1RST0tFICsgJy1vcGFjaXR5JyxcbiAgICB3aWR0aDogU1RST0tFICsgJy13aWR0aCcsXG4gICAgb2Zmc2V0OiBEQVNIICsgJ29mZnNldCcsXG4gICAgbGVuZ3RoOiBEQVNIX0FSUkFZLFxuICAgIHNwYWNpbmc6IERBU0hfQVJSQVksXG4gICAgbWl0ZXJsaW1pdDogU1RST0tFICsgJy1taXRlcmxpbWl0J1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvbGVzL3BhdGgvbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdHJhbnNmb3JtRGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtLWRpY3Rpb25hcnknKSxcbiAgICB0cmFuc2Zvcm1Qcm9wcyA9IHRyYW5zZm9ybURpY3Rpb25hcnkucHJvcHMsXG5cbiAgICBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3V0cHV0KSB7XG4gICAgdmFyIGNzcyA9IHt9LFxuICAgICAgICBrZXkgPSAnJyxcbiAgICAgICAgdHJhbnNmb3JtID0gJycsXG4gICAgICAgIHRyYW5zZm9ybUhhc1ogPSBmYWxzZSxcbiAgICAgICAgcnVsZSA9ICcnO1xuICAgICAgICBcbiAgICAvLyBMb29wIHRocm91Z2ggb3V0cHV0LCBjaGVjayBmb3IgdHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgICBmb3IgKGtleSBpbiBvdXRwdXQpIHtcbiAgICAgICAgaWYgKG91dHB1dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBydWxlID0gb3V0cHV0W2tleV07XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgdHJhbnNmb3JtIHByb3BlcnR5LCBhZGQgdG8gdHJhbnNmb3JtIHN0cmluZ1xuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gKz0ga2V5ICsgJygnICsgcnVsZSArICcpJztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1IYXNaID0gKGtleSA9PT0gVFJBTlNMQVRFX1opID8gdHJ1ZSA6IHRyYW5zZm9ybUhhc1o7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIE9yIGp1c3QgYXNzaWduIGRpcmVjdGx5XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNzc1trZXldID0gcnVsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHdlIGhhdmUgdHJhbnNmb3JtIHByb3BlcnRpZXMsIGFkZCB0cmFuc2xhdGVaXG4gICAgaWYgKHRyYW5zZm9ybSAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gKz0gJyAnICsgVFJBTlNMQVRFX1ogKyAnKDBweCknO1xuICAgICAgICB9XG5cbiAgICAgICAgY3NzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvbGVzL2Nzcy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgVFJBTlNMQVRFID0gJ3RyYW5zbGF0ZSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHg6IFRSQU5TTEFURSArICdYJyxcbiAgICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gICAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm9sZXMvY3NzL21hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgQ09MT1IgPSAnY29sb3InLFxuICAgIFBPU0lUSU9OUyA9ICdwb3NpdGlvbnMnLFxuICAgIERJTUVOU0lPTlMgPSAnZGltZW5zaW9ucycsXG4gICAgU0hBRE9XID0gJ3NoYWRvdycsXG4gICAgQU5HTEUgPSAnYW5nbGUnLFxuICAgIEFMUEhBID0gJ2FscGhhJyxcbiAgICBQWCA9ICdweCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8vIENvbG9yIHByb3BlcnRpZXNcbiAgICBjb2xvcjogQ09MT1IsXG4gICAgYmFja2dyb3VuZENvbG9yOiBDT0xPUixcbiAgICBvdXRsaW5lQ29sb3I6IENPTE9SLFxuICAgIGZpbGw6IENPTE9SLFxuICAgIHN0cm9rZTogQ09MT1IsXG4gICAgLy8gQm9yZGVyXG4gICAgYm9yZGVyQ29sb3I6IENPTE9SLFxuICAgIGJvcmRlclRvcENvbG9yOiBDT0xPUixcbiAgICBib3JkZXJSaWdodENvbG9yOiBDT0xPUixcbiAgICBib3JkZXJCb3R0b21Db2xvcjogQ09MT1IsXG4gICAgYm9yZGVyTGVmdENvbG9yOiBDT0xPUixcbiAgICBib3JkZXJSYWRpdXM6IFBYLFxuICAgIC8vIERpbWVuc2lvbnNcbiAgICBtYXJnaW46IERJTUVOU0lPTlMsXG4gICAgcGFkZGluZzogRElNRU5TSU9OUyxcbiAgICB3aWR0aDogUFgsXG4gICAgaGVpZ2h0OiBQWCwgICAgXG4gICAgLy8gUG9zaXRpb25zXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBQT1NJVElPTlMsXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46IFBPU0lUSU9OUyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IFBPU0lUSU9OUywgICAgXG4gICAgLy8gU2hhZG93c1xuICAgIHRleHRTaGFkb3c6IFNIQURPVyxcbiAgICBib3hTaGFkb3c6IFNIQURPVywgICAgXG4gICAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgICByb3RhdGU6IEFOR0xFLFxuICAgIHJvdGF0ZVg6IEFOR0xFLFxuICAgIHJvdGF0ZVk6IEFOR0xFLFxuICAgIHJvdGF0ZVo6IEFOR0xFLFxuICAgIHNrZXdYOiBBTkdMRSxcbiAgICBza2V3WTogQU5HTEUsXG4gICAgdHJhbnNsYXRlWDogUFgsXG4gICAgdHJhbnNsYXRlWTogUFgsXG4gICAgdHJhbnNsYXRlWjogUFgsXG4gICAgcGVyc3BlY3RpdmU6IFBYLFxuICAgIG9wYWNpdHk6IEFMUEhBXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm9sZXMvY3NzL3R5cGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuXHRHZW5lcmF0ZSBtZXRob2QgaXRlcmF0b3Jcblx0XG5cdFRha2VzIGEgbWV0aG9kIG5hbWUgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGxcblx0bG9vcCBvdmVyIGFsbCB0aGUgRWxlbWVudHMgaW4gYSBncm91cCBhbmQgZmlyZSB0aGF0XG5cdG1ldGhvZCB3aXRoIHRob3NlIHByb3BlcnRpZXNcblx0XG5cdEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiBtZXRob2RcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG51bUVsZW1lbnRzID0gdGhpcy5lbGVtZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBpID0gMCxcblx0XHRcdGlzR2V0dGVyID0gZmFsc2UsXG5cdFx0XHRnZXR0ZXJBcnJheSA9IFtdLFxuXHRcdFx0YWN0b3IsXG5cdFx0XHRhY3RvclJldHVybjtcblxuXHRcdGZvciAoOyBpIDwgbnVtRWxlbWVudHM7IGkrKykge1xuXHRcdFx0YWN0b3IgPSB0aGlzLmVsZW1lbnRzW2ldO1xuXHRcdFx0YWN0b3JSZXR1cm4gPSBhY3RvclttZXRob2RdLmFwcGx5KGFjdG9yLCBhcmd1bWVudHMpO1xuXG5cdFx0XHRpZiAoYWN0b3JSZXR1cm4gIT0gYWN0b3IpIHtcbiAgICBcdFx0XHRpc0dldHRlciA9IHRydWU7XG4gICAgXHRcdFx0Z2V0dGVyQXJyYXkucHVzaChhY3RvclJldHVybik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiAoaXNHZXR0ZXIpID8gZ2V0dGVyQXJyYXkgOiB0aGlzO1xuXHR9O1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0b3Ivc3lzdGVtL2dlbmVyYXRlLWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFxuICAgIC8vIFtudW1iZXJdOiBEZWxheSB0aGlzIGFjdGlvbiBieSB4IG1zXG4gICAgZGVsYXk6IDAsXG4gICAgXG4gICAgLy8gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgd2hlbiBBY3Rpb24gcHJvY2VzcyBzdGFydHNcbiAgICBvblN0YXJ0OiB1bmRlZmluZWQsXG4gICAgXG4gICAgLy8gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgd2hlbiBhbnkgdmFsdWUgY2hhbmdlc1xuICAgIG9uQ2hhbmdlOiB1bmRlZmluZWQsXG4gICAgXG4gICAgLy8gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgZXZlcnkgZnJhbWVcbiAgICBvbkZyYW1lOiB1bmRlZmluZWQsXG4gICAgXG4gICAgLy8gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgd2hlbiBBY3Rpb24gcHJvY2VzcyBlbmRzXG4gICAgb25FbmQ6IHVuZGVmaW5lZFxuXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9nZW5lcmljL2RlZmF1bHQtYWN0aW9uLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLy8gW251bWJlcl06IEN1cnJlbnQgdGFyZ2V0IHZhbHVlXG4gICAgdG86IHVuZGVmaW5lZCxcblxuICAgIC8vIFtudW1iZXJdOiBNYXhpbXVtIHBlcm1pdHRlZCB2YWx1ZSBkdXJpbmcgLnRyYWNrIGFuZCAucnVuXG4gICAgbWluOiB1bmRlZmluZWQsXG4gICAgXG4gICAgLy8gW251bWJlcl06IE1pbmltdW0gcGVybWl0dGVkIHZhbHVlIGR1cmluZyAudHJhY2sgYW5kIC5ydW5cbiAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogT3JpZ2luXG4gICAgb3JpZ2luOiAwLFxuICAgIFxuICAgIC8vIFtib29sZWFuXTogU2V0IHRvIHRydWUgd2hlbiBib3RoIG1pbiBhbmQgbWF4IGRldGVjdGVkXG4gICAgaGFzUmFuZ2U6IGZhbHNlLFxuXG4gICAgLy8gW2Jvb2xlYW5dOiBSb3VuZCBvdXRwdXQgaWYgdHJ1ZVxuICAgIHJvdW5kOiBmYWxzZSxcblxuICAgIC8vIFtzdHJpbmddOiBOYW1lIG9mIHZhbHVlIHRvIGxpc3RlbiB0b1xuICAgIGxpbms6IHVuZGVmaW5lZFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZ2VuZXJpYy9kZWZhdWx0LXZhbHVlLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgTW9kTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fa2V5cyA9IFtdO1xuICAgICAgICB0aGlzLl9udW1LZXlzID0gMDtcbiAgICB9O1xuXG5Nb2RNYW5hZ2VyLnByb3RvdHlwZSA9IHtcblxuICAgIC8qXG4gICAgICAgIEFkZCBtb2R1bGUga2V5IHRvIGtleXMgbGlzdFxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIGFkZFxuICAgICovXG4gICAgX2FkZEtleTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fa2V5cy5wdXNoKG5hbWUpO1xuICAgICAgICB0aGlzLl9udW1LZXlzKys7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEFkZCBhIG5ldyBtb2R1bGVcblxuICAgICAgICBAcGFyYW0gW3N0cmluZyB8fCBvYmplY3RdOiBOYW1lIG9mIG5ldyBtb2R1bGUgb3IgbXVsdGlwbGUgbW9kdWxlc1xuICAgICAgICBAcGFyYW0gW29iamVjdF0gKG9wdGlvbmFsKTogTW9kdWxlIHRvIGFkZFxuICAgICovXG4gICAgZXh0ZW5kOiBmdW5jdGlvbiAobmFtZSwgbW9kKSB7XG4gICAgICAgIHZhciBtdWx0aU1vZHMgPSAodHlwZW9mIG5hbWUgPT0gJ29iamVjdCcpLFxuICAgICAgICAgICAgbW9kcyA9IG11bHRpTW9kcyA/IG5hbWUgOiB7fSxcbiAgICAgICAgICAgIGtleSA9ICcnO1xuXG4gICAgICAgIC8vIElmIHdlIGp1c3QgaGF2ZSBvbmUgbW9kdWxlLCBjb2VyY2VcbiAgICAgICAgaWYgKCFtdWx0aU1vZHMpIHtcbiAgICAgICAgICAgIG1vZHNbbmFtZV0gPSBtb2Q7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGtleSBpbiBtb2RzKSB7XG4gICAgICAgICAgICBpZiAobW9kcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkS2V5KGtleSk7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gbW9kc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGVhY2g6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIga2V5ID0gJyc7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9udW1LZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGtleSA9IHRoaXMuX2tleXNbaV07XG4gICAgICAgICAgICBjYWxsYmFjayhrZXksIHRoaXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZE1hbmFnZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvTW9kTWFuYWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfTtcblxuUXVldWUucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8qXG4gICAgICAgIEFkZCBhIHNldCBvZiBhcmd1bWVudHMgdG8gcXVldWVcbiAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnF1ZXVlLnB1c2goW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBuZXh0IHNldCBvZiBhcmd1bWVudHMgZnJvbSBxdWV1ZVxuICAgICovXG4gICAgbmV4dDogZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgcXVldWUgPSB0aGlzLnF1ZXVlLFxuICAgICAgICAgICAgcmV0dXJuVmFsID0gZmFsc2UsXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICBcbiAgICAgICAgZGlyZWN0aW9uID0gKGFyZ3VtZW50cy5sZW5ndGgpID8gZGlyZWN0aW9uIDogMTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIG91ciBpbmRleCBpcyBiZXR3ZWVuIDAgYW5kIHRoZSBxdWV1ZSBsZW5ndGgsIHJldHVybiB0aGF0IGl0ZW1cbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVyblZhbCA9IHF1ZXVlW2luZGV4XTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpbmRleCArIGRpcmVjdGlvbjtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIGNsZWFyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXR1cm5WYWw7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFJlcGxhY2UgcXVldWUgd2l0aCBlbXB0eSBhcnJheVxuICAgICovXG4gICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL1F1ZXVlLmpzXG4gKiogbW9kdWxlIGlkID0gNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYWN0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvbWFuYWdlcicpLFxuICAgIHZhbHVlVHlwZU1hbmFnZXIgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9tYW5hZ2VyJyksXG4gICAgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG4gICAgZWFjaCA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLmVhY2gsXG5cbiAgICB1cGRhdGUgPSBmdW5jdGlvbiAoZnJhbWVzdGFtcCwgZnJhbWVEdXJhdGlvbikge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzLFxuICAgICAgICAgICAgdmFsdWVzID0gdGhpcy52YWx1ZXMsXG4gICAgICAgICAgICBhY3Rpb24gPSBhY3Rpb25NYW5hZ2VyW3RoaXMuYWN0aW9uXSxcbiAgICAgICAgICAgIHZhbHVlQWN0aW9uID0gYWN0aW9uLFxuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgbnVtQWN0aXZlVmFsdWVzID0gdGhpcy5vcmRlci5sZW5ndGgsXG4gICAgICAgICAgICBudW1BY3RpdmVQYXJlbnRzID0gdGhpcy5wYXJlbnRPcmRlci5sZW5ndGgsXG4gICAgICAgICAgICBudW1Sb2xlcyA9IHRoaXMucm9sZXMubGVuZ3RoLFxuICAgICAgICAgICAga2V5ID0gJycsXG4gICAgICAgICAgICB2YWx1ZSA9IHt9LFxuICAgICAgICAgICAgbWFwcGVkVmFsdWVzID0ge30sXG4gICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSAwLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICByb2xlO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBJbnB1dCBhbmQgYXR0YWNoIG5ldyB2YWx1ZXMgdG8gc3RhdGVcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgICAgICAgIHN0YXRlLmlucHV0ID0gdGhpcy5pbnB1dC5vbkZyYW1lKGZyYW1lc3RhbXApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIEFjdGlvbiBpbnB1dFxuICAgICAgICBpZiAoYWN0aW9uLm9uRnJhbWVTdGFydCAmJiBhY3Rpb24ub25GcmFtZVN0YXJ0LmNhbGwodGhpcywgZnJhbWVEdXJhdGlvbikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIG9uU3RhcnQgaWYgZmlyc3QgZnJhbWVcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RGcmFtZSkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bVJvbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICByb2xlID0gdGhpcy5yb2xlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAocm9sZS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICByb2xlLnN0YXJ0LmNhbGwoYWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB2YWx1ZXNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bUFjdGl2ZVZhbHVlczsgaSsrKSB7XG4gICAgICAgICAgICAvLyBHZXQgdmFsdWUgYW5kIGtleVxuICAgICAgICAgICAga2V5ID0gdGhpcy5vcmRlcltpXTtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIExvYWQgdmFsdWUtc3BlY2lmaWMgYWN0aW9uXG4gICAgICAgICAgICB2YWx1ZUFjdGlvbiA9IHZhbHVlLmxpbmsgPyBhY3Rpb25NYW5hZ2VyLmxpbmsgOiBhY3Rpb247XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgdmFsdWVcbiAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IHZhbHVlQWN0aW9uLnByb2Nlc3MuY2FsbCh0aGlzLCB2YWx1ZSwga2V5LCBmcmFtZUR1cmF0aW9uKTtcblxuICAgICAgICAgICAgLy8gTGltaXQgaWYgcmFuZ2VcbiAgICAgICAgICAgIGlmICh2YWx1ZUFjdGlvbi5saW1pdCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IHZhbHVlQWN0aW9uLmxpbWl0KHVwZGF0ZWRWYWx1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSb3VuZCB2YWx1ZSBpZiByb3VuZCBzZXQgdG8gdHJ1ZVxuICAgICAgICAgICAgaWYgKHZhbHVlLnJvdW5kKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gTWF0aC5yb3VuZCh1cGRhdGVkVmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgY2hhbmdlIGZyb20gcHJldmlvdXMgZnJhbWVcbiAgICAgICAgICAgIHZhbHVlLmZyYW1lQ2hhbmdlID0gdXBkYXRlZFZhbHVlIC0gdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHZlbG9jaXR5IGlmIEFjdGlvbiBoYXNuJ3QgYWxyZWFkeVxuICAgICAgICAgICAgaWYgKCF2YWx1ZUFjdGlvbi5jYWxjdWxhdGVzVmVsb2NpdHkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IGNhbGMuc3BlZWRQZXJTZWNvbmQodmFsdWUuZnJhbWVDaGFuZ2UsIGZyYW1lRHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgY3VycmVudCBzcGVlZFxuICAgICAgICAgICAgdmFsdWUuc3BlZWQgPSBNYXRoLmFicyh2YWx1ZS52ZWxvY2l0eSk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGNoYW5nZWQgYW5kIHVwZGF0ZVxuICAgICAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT0gdXBkYXRlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IGN1cnJlbnRcbiAgICAgICAgICAgIHRoaXMudmFsdWVzW2tleV0uY3VycmVudCA9IHVwZGF0ZWRWYWx1ZTtcblxuICAgICAgICAgICAgLy8gUHV0IHZhbHVlIGluIHN0YXRlXG4gICAgICAgICAgICBzdGF0ZS52YWx1ZXNba2V5XSA9ICh2YWx1ZS51bml0KSA/IHVwZGF0ZWRWYWx1ZSArIHZhbHVlLnVuaXQgOiB1cGRhdGVkVmFsdWU7XG5cbiAgICAgICAgICAgIC8vIE9yIGFkZCB0byBwYXJlbnQgc3RhdGUsIHRvIGJlIGNvbWJpbmVkXG4gICAgICAgICAgICBpZiAodmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgc3RhdGVbdmFsdWUucGFyZW50XSA9IHN0YXRlW3ZhbHVlLnBhcmVudF0gfHwge307XG4gICAgICAgICAgICAgICAgc3RhdGVbdmFsdWUucGFyZW50XVt2YWx1ZS5wcm9wTmFtZV0gPSBzdGF0ZS52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWVzIGZyb20gY2FsY3VsYXRlZCBjaGlsZHJlblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtQWN0aXZlUGFyZW50czsgaSsrKSB7XG4gICAgICAgICAgICBrZXkgPSB0aGlzLnBhcmVudE9yZGVyW2ldO1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlIGN1cnJlbnQgcHJvcGVydHlcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZVR5cGVNYW5hZ2VyW3ZhbHVlLnR5cGVdLmNvbWJpbmUoc3RhdGVba2V5XSk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBzdGF0ZVxuICAgICAgICAgICAgc3RhdGUudmFsdWVzW3ZhbHVlLm5hbWVdID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgYGZyYW1lYCBhbmQgYHVwZGF0ZWAgY2FsbGJhY2tzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1Sb2xlczsgaSsrKSB7XG4gICAgICAgICAgICByb2xlID0gdGhpcy5yb2xlc1tpXTtcbiAgICAgICAgICAgIG1hcHBlZFZhbHVlcyA9IHt9O1xuXG4gICAgICAgICAgICBlYWNoKHRoaXMuc3RhdGUudmFsdWVzLCBmdW5jdGlvbiAobmFtZSwgdmFsKSB7XG4gICAgICAgICAgICAgICAgbWFwcGVkVmFsdWVzW3JvbGUubWFwKG5hbWUpXSA9IHZhbDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocm9sZS5mcmFtZSkge1xuICAgICAgICAgICAgICAgIHJvbGUuZnJhbWUuY2FsbChhY3RvciwgbWFwcGVkVmFsdWVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJvbGUudXBkYXRlICYmIChhY3Rvci5oYXNDaGFuZ2VkIHx8IGFjdG9yLmZpcnN0RnJhbWUpKSB7XG4gICAgICAgICAgICAgICAgcm9sZS51cGRhdGUuY2FsbChhY3RvciwgbWFwcGVkVmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgb25FbmQgaWYgdGhpcyBBY3Rpb24gaGFzIGVuZGVkXG4gICAgICAgIGlmICh0aGlzLmlzQWN0aXZlICYmIGFjdGlvbi5oYXNFbmRlZCAmJiBhY3Rpb24uaGFzRW5kZWQuY2FsbCh0aGlzLCB0aGlzLmhhc0NoYW5nZWQpKSB7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIEZpcmUgYGNvbXBsZXRlYCBjYWxsYmFja1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bVJvbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICByb2xlID0gdGhpcy5yb2xlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAocm9sZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICByb2xlLmNvbXBsZXRlLmNhbGwoYWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgaXMgYSBwbGF5IGFjdGlvbiwgYW5kIGlzIG5vdCBhY3RpdmUsIGNoZWNrIG5leHQgYWN0aW9uXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgJiYgdGhpcy5hY3Rpb24gPT09ICdwbGF5JyAmJiB0aGlzLm5leHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maXJzdEZyYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnJhbWVzdGFtcCA9IGZyYW1lc3RhbXA7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB1cGRhdGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rvci91cGRhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIGlzTnVtID0gdXRpbHMuaXNOdW0sXG4gICAgYWN0aW9uc01hbmFnZXIgPSByZXF1aXJlKCcuLi9hY3Rpb25zL21hbmFnZXInKSxcbiAgICB2YWx1ZVR5cGVzTWFuYWdlciA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL21hbmFnZXInKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaCxcblxuICAgIG51bWVyaWNhbFZhbHVlcyA9IFsnY3VycmVudCcsICd0bycsICdpbml0JywgJ21pbicsICdtYXgnLCAndmVsb2NpdHknLCAnZnJpY3Rpb24nLCAnc3ByaW5nJ10sXG4gICAgbnVtTnVtZXJpY2FsVmFsdWVzID0gbnVtZXJpY2FsVmFsdWVzLmxlbmd0aCxcblxuICAgIGNoZWNrUm9sZXMgPSBmdW5jdGlvbiAobmFtZSwgcm9sZXMpIHtcbiAgICAgICAgdmFyIHZhbHVlVHlwZTtcblxuICAgICAgICBlYWNoKHJvbGVzLCBmdW5jdGlvbiAoa2V5LCByb2xlKSB7XG4gICAgICAgICAgICBpZiAocm9sZS5fdHlwZU1hcCkge1xuICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHJvbGUuX3R5cGVNYXBbcm9sZS5tYXAobmFtZSldIHx8IHZhbHVlVHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlVHlwZTtcbiAgICB9LFxuXG4gICAgY2hlY2tOdW1lcmljYWxWYWx1ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAobnVtZXJpY2FsVmFsdWVzLmluZGV4T2YobmFtZSkgPiAtMSk7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLypcbiAgICAgICAgUGVyZm9ybSBvcGVyYXRpb24gb24gc2V0IG9mIHZhbHVlc1xuICAgICAgICBcbiAgICAgICAgQHBhcm1hIFtzdHJpbmddOiBOYW1lIG9mIG9wZXJhdGlvblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIG9iamVjdFxuICAgICovXG4gICAgYWxsOiBmdW5jdGlvbiAob3AsIHZhbHVlcykge1xuICAgICAgICB2YXIgdmFsdWVPcHMgPSB0aGlzO1xuXG4gICAgICAgIGVhY2godmFsdWVzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWVPcHNbb3BdKHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFJlc2V0IHRoZSB2YWx1ZSBjdXJyZW50IHRvIGl0cyBvcmlnaW5cblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIG9iamVjdFxuICAgICovXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnJldGFyZ2V0KHZhbHVlKTtcbiAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLm9yaWdpbjtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgU2V0IHZhbHVlIG9yaWdpbiBwcm9wZXJ0eSB0byBjdXJyZW50IHZhbHVlXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIG9iamVjdFxuICAgICovXG4gICAgcmVzZXRPcmlnaW46IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZS5vcmlnaW4gPSB2YWx1ZS5jdXJyZW50O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTZXQgdmFsdWUgdG8gcHJvcGVydHkgYmFjayB0byB0YXJnZXRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogVmFsdWUgb2JqZWN0XG4gICAgKi9cbiAgICByZXRhcmdldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlLnRvID0gdmFsdWUudGFyZ2V0O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTd2FwIHZhbHVlIHRvIGFuZCBvcmlnaW4gcHJvcGVydHlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogVmFsdWUgb2JqZWN0XG4gICAgKi9cbiAgICBmbGlwOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIG5ld09yaWdpbiA9ICh2YWx1ZS50YXJnZXQgIT09IHVuZGVmaW5lZCkgPyB2YWx1ZS50YXJnZXQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgIHZhbHVlLnRhcmdldCA9IHZhbHVlLnRvID0gdmFsdWUub3JpZ2luO1xuICAgICAgICB2YWx1ZS5vcmlnaW4gPSBuZXdPcmlnaW47XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFJldHVybnMgYW4gaW5pdGlhbCB2YWx1ZSBzdGF0ZVxuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBJbml0aWFsIGN1cnJlbnRcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogRGVmYXVsdCB2YWx1ZSBzdGF0ZVxuICAgICovXG4gICAgaW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoc3RhcnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBjdXJyZW50OiBzdGFydCB8fCAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogQ2hhbmdlIHBlciBzZWNvbmRcbiAgICAgICAgICAgIHNwZWVkOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogQ2hhbmdlIHBlciBzZWNvbmQgcGx1cyBkaXJlY3Rpb24gKGllIGNhbiBiZSBuZWdhdGl2ZSlcbiAgICAgICAgICAgIHZlbG9jaXR5OiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogQW1vdW50IHZhbHVlIGhhcyBjaGFuZ2VkIGluIHRoZSBtb3N0IHJlY2VudCBmcmFtZVxuICAgICAgICAgICAgZnJhbWVDaGFuZ2U6IDBcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgdmFsdWUgaW50byBzdWItdmFsdWVzXG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHZhbHVlXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogQmFzZSB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgIEBwYXJhbSBbRWxlbWVtdF1cbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIGFjdG9yLCB2YWx1ZVR5cGUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWVzID0ge30sXG4gICAgICAgICAgICBzcGxpdFByb3BlcnR5ID0ge30sXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSAnJyxcbiAgICAgICAgICAgIGtleSA9ICcnLFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBudW1OdW1lcmljYWxWYWx1ZXM7IGkrKykge1xuICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gbnVtZXJpY2FsVmFsdWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmModmFsdWVbcHJvcGVydHlOYW1lXSkgJiYgY2hlY2tOdW1lcmljYWxWYWx1ZShwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlW3Byb3BlcnR5TmFtZV0gPSB2YWx1ZVtwcm9wZXJ0eU5hbWVdLmNhbGwoYWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNwbGl0UHJvcGVydHkgPSB2YWx1ZVR5cGUuc3BsaXQodmFsdWVbcHJvcGVydHlOYW1lXSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gcHJvcGVydGllcyB0byBlYWNoIG5ldyB2YWx1ZVxuICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIHNwbGl0UHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0UHJvcGVydHkuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyB2YWx1ZSBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGxpdFZhbHVlc1trZXldID0gc3BsaXRWYWx1ZXNba2V5XSB8fCB1dGlscy5jb3B5KHZhbHVlVHlwZXNNYW5hZ2VyLmRlZmF1bHRQcm9wcyh2YWx1ZS50eXBlLCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVzW2tleV1bcHJvcGVydHlOYW1lXSA9IHNwbGl0UHJvcGVydHlba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgdmFsdWUgaW50byBudW1iZXIgYW5kIHVuaXQsIHNldCB1bml0IHRvIHZhbHVlIGlmIHByZXNlbnRcblxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFByb3BlcnR5IHRvIHNwbGl0XG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogVmFsdWUgb2JqZWN0IHRvIHNhdmUgdW5pdCB0b1xuICAgICovXG4gICAgc3BsaXRVbml0OiBmdW5jdGlvbiAocHJvcGVydHksIHZhbHVlKSB7XG4gICAgICAgIHZhciByZXR1cm5WYWwgPSBwcm9wZXJ0eSxcbiAgICAgICAgICAgIHNwbGl0VW5pdFZhbHVlO1xuXG4gICAgICAgIC8vIENoZWNrIGZvciB1bml0IHByb3BlcnR5XG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgIHNwbGl0VW5pdFZhbHVlID0gdXRpbHMuc3BsaXRWYWxVbml0KHByb3BlcnR5KTtcblxuICAgICAgICAgICAgaWYgKCFpc05hTihzcGxpdFVuaXRWYWx1ZS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5WYWwgPSBzcGxpdFVuaXRWYWx1ZS52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YWx1ZS51bml0ID0gc3BsaXRVbml0VmFsdWUudW5pdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5WYWw7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFJlc29sdmUgcHJvcGVydHlcblxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmcgfHwgbnVtYmVyIHx8IGZ1bmN0aW9uXTogUHJvcGVydHlcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBQYXJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFthY3Rvcl06IFBhcmVudCBhY3RvclxuICAgICovXG4gICAgcmVzb2x2ZTogZnVuY3Rpb24gKG5hbWUsIHByb3BlcnR5LCB2YWx1ZSwgYWN0b3IpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZSA9IHZhbHVlLmN1cnJlbnQgfHwgMCxcbiAgICAgICAgICAgIGlzTnVtZXJpY2FsVmFsdWUgPSBjaGVja051bWVyaWNhbFZhbHVlKG5hbWUpO1xuXG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBmdW5jdGlvbiwgcmVzb2x2ZVxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jKHByb3BlcnR5KSAmJiBpc051bWVyaWNhbFZhbHVlKSB7XG4gICAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5LmNhbGwoYWN0b3IsIGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgc3RyaW5nLCBjaGVjayBmb3IgcmVsYXRpdmUgdmFsdWVzIGFuZCB1bml0c1xuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgcmVsYXRpdmUgdmFsdWUgKGllICcrPTEwJylcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eS5pbmRleE9mKCc9JykgPiAwKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPSBjYWxjLnJlbGF0aXZlVmFsdWUoY3VycmVudFZhbHVlLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGZvciB1bml0IGlmIHNob3VsZCBiZSBudW1lcmljYWwgcHJvcGVydHlcbiAgICAgICAgICAgIGlmIChpc051bWVyaWNhbFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGxpdFVuaXQocHJvcGVydHksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBudW1lcmljYWwgdmFsdWUsIGNvZXJjZVxuICAgICAgICBpZiAoaXNOdW1lcmljYWxWYWx1ZSkge1xuICAgICAgICAgICAgcHJvcGVydHkgPSBwYXJzZUZsb2F0KHByb3BlcnR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgUHJvY2VzcyBuZXcgdmFsdWVzXG4gICAgKi9cbiAgICBwcmVwcm9jZXNzOiBmdW5jdGlvbiAodmFsdWVzLCBhY3RvciwgZGVmYXVsdFZhbHVlUHJvcCkge1xuICAgICAgICB2YXIgcHJlcHJvY2Vzc2VkVmFsdWVzID0ge30sXG4gICAgICAgICAgICB2YWx1ZSA9IHt9LFxuICAgICAgICAgICAgc3BsaXRWYWx1ZSA9IHt9LFxuICAgICAgICAgICAgY2hpbGRWYWx1ZSA9IHt9LFxuICAgICAgICAgICAgdHlwZSA9IHt9LFxuICAgICAgICAgICAgZXhpc3RpbmdWYWx1ZSA9IHt9LFxuICAgICAgICAgICAgaXNWYWx1ZU9iaiA9IGZhbHNlLFxuICAgICAgICAgICAga2V5ID0gJycsXG4gICAgICAgICAgICBwcm9wS2V5ID0gJyc7XG5cbiAgICAgICAgZGVmYXVsdFZhbHVlUHJvcCA9IGRlZmF1bHRWYWx1ZVByb3AgfHwgJ2N1cnJlbnQnO1xuXG4gICAgICAgIGZvciAoa2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cbiAgICAgICAgICAgICAgICBpc1ZhbHVlT2JqID0gdXRpbHMuaXNPYmoodmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gKGlzVmFsdWVPYmopID8gdmFsdWVzW2tleV0gOiB7fTtcbiAgICAgICAgICAgICAgICBleGlzdGluZ1ZhbHVlID0gYWN0b3IudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgICAgICB2YWx1ZS5uYW1lID0ga2V5O1xuXG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbHVlT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlW2RlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBkb2Vzbid0IGhhdmUgYSBzcGVjaWFsIHR5cGUsIGNoZWNrIGZvciBvbmVcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZXhpc3RpbmcgdmFsdWUgd2l0aCB0aGlzIGtleVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdWYWx1ZSAmJiBleGlzdGluZ1ZhbHVlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnR5cGUgPSBleGlzdGluZ1ZhbHVlLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBPciBjaGVjayByb3V0ZSB0eXBlbWFwc1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUudHlwZSA9IGNoZWNrUm9sZXMoa2V5LCBhY3Rvci5yb2xlcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgY2hlY2sgYnkgcnVubmluZyB0ZXN0cyBpZiB0aGlzIGlzIGEgc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlLnR5cGUgJiYgdXRpbHMuaXNTdHJpbmcodmFsdWVbZGVmYXVsdFZhbHVlUHJvcF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUudHlwZSA9IHZhbHVlVHlwZXNNYW5hZ2VyLnRlc3QodmFsdWVbZGVmYXVsdFZhbHVlUHJvcF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU2V0IHZhbHVlXG4gICAgICAgICAgICAgICAgcHJlcHJvY2Vzc2VkVmFsdWVzW2tleV0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIC8vIElmIHByb2Nlc3MgaGFzIHR5cGUsIHNwbGl0IG9yIGFzc2lnbiBkZWZhdWx0IHByb3BzXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9IHZhbHVlVHlwZXNNYW5hZ2VyW3ZhbHVlLnR5cGVdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaGFzIGEgc3BsaXR0ZXIgZnVuY3Rpb24sIHNwbGl0XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlLnNwbGl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jaGlsZHJlbiA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BsaXRWYWx1ZSA9IHRoaXMuc3BsaXQoa2V5LCB2YWx1ZSwgYWN0b3IsIHR5cGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHByb3BLZXkgaW4gc3BsaXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdFZhbHVlLmhhc093blByb3BlcnR5KHByb3BLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWUgPSB1dGlscy5tZXJnZSh2YWx1ZSwgc3BsaXRWYWx1ZVtwcm9wS2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWUucGFyZW50ID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlLm5hbWUgPSBrZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWUucHJvcE5hbWUgPSBwcm9wS2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hpbGRWYWx1ZS50eXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hpbGRWYWx1ZS5jaGlsZHJlbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwcm9jZXNzZWRWYWx1ZXNba2V5ICsgcHJvcEtleV0gPSBjaGlsZFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXByb2Nlc3NlZFZhbHVlc1trZXldID0gdXRpbHMubWVyZ2UodmFsdWVUeXBlc01hbmFnZXIuZGVmYXVsdFByb3BzKHZhbHVlLnR5cGUsIGtleSksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcmVwcm9jZXNzZWRWYWx1ZXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFByb2Nlc3MgbmV3IHZhbHVlc1xuICAgICovXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKHZhbHVlcywgYWN0b3IsIGRlZmF1bHRWYWx1ZVByb3ApIHtcbiAgICAgICAgdmFyIHByZXByb2Nlc3NlZFZhbHVlcyA9IHRoaXMucHJlcHJvY2Vzcyh2YWx1ZXMsIGFjdG9yLCBkZWZhdWx0VmFsdWVQcm9wKSxcbiAgICAgICAgICAgIGtleSA9ICcnLFxuICAgICAgICAgICAgcHJvcEtleSA9ICcnLFxuICAgICAgICAgICAgcHJlcHJvY2Vzc2VkVmFsdWUgPSB7fSxcbiAgICAgICAgICAgIHRoaXNWYWx1ZSA9IHt9LFxuICAgICAgICAgICAgZGVmYXVsdFByb3BzID0ge30sXG4gICAgICAgICAgICBoYXNDaGlsZHJlbiA9IGZhbHNlLFxuICAgICAgICAgICAgcHJvcDtcblxuICAgICAgICBmb3IgKGtleSBpbiBwcmVwcm9jZXNzZWRWYWx1ZXMpIHtcbiAgICAgICAgICAgIGlmIChwcmVwcm9jZXNzZWRWYWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHByZXByb2Nlc3NlZFZhbHVlID0gcHJlcHJvY2Vzc2VkVmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgdGhpc1ZhbHVlID0gYWN0b3IudmFsdWVzW2tleV0gfHwgdGhpcy5pbml0aWFsU3RhdGUodGhpcy5yZXNvbHZlKCdpbml0JywgcHJlcHJvY2Vzc2VkVmFsdWUuaW5pdCwge30sIGFjdG9yKSk7XG4gICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPSAocHJlcHJvY2Vzc2VkVmFsdWUuY2hpbGRyZW4gIT09IHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgdGhpc1ZhbHVlLmFjdGlvbiA9IHByZXByb2Nlc3NlZFZhbHVlLmxpbmsgPyAnbGluaycgOiBhY3Rvci5hY3Rpb247XG4gICAgICAgICAgICAgICAgZGVmYXVsdFByb3BzID0gYWN0aW9uc01hbmFnZXJbdGhpc1ZhbHVlLmFjdGlvbl0udmFsdWVEZWZhdWx0cztcblxuICAgICAgICAgICAgICAgIC8vIEluaGVyaXQgcHJvcGVydGllcyBmcm9tIEFjdG9yXG4gICAgICAgICAgICAgICAgZm9yIChwcm9wS2V5IGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdFByb3BzLmhhc093blByb3BlcnR5KHByb3BLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzVmFsdWVbcHJvcEtleV0gPSAoYWN0b3IuaGFzT3duUHJvcGVydHkocHJvcEtleSkpID8gYWN0b3JbcHJvcEtleV0gOiBkZWZhdWx0UHJvcHNbcHJvcEtleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHByb3BlcnRpZXMgYW5kIHJlc29sdmVcbiAgICAgICAgICAgICAgICBmb3IgKHByb3BLZXkgaW4gcHJlcHJvY2Vzc2VkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXByb2Nlc3NlZFZhbHVlLmhhc093blByb3BlcnR5KHByb3BLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wID0gcHJlcHJvY2Vzc2VkVmFsdWVbcHJvcEtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBwcm9wZXJ0eSBpcyAqbm90KiB1bmRlZmluZWQgb3IgYSBudW1iZXIsIHJlc29sdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wICE9PSB1bmRlZmluZWQgJiYgIWlzTnVtKHByb3ApICYmICFoYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3AgPSB0aGlzLnJlc29sdmUocHJvcEtleSwgcHJvcCwgdGhpc1ZhbHVlLCBhY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNWYWx1ZVtwcm9wS2V5XSA9IHByb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgaW50ZXJuYWwgdGFyZ2V0IGlmIHRoaXMgcHJvcGVydHkgaXMgJ3RvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BLZXkgPT09ICd0bycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzVmFsdWUudGFyZ2V0ID0gdGhpc1ZhbHVlLnRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpc1ZhbHVlLm9yaWdpbiA9IHRoaXNWYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIHRoaXNWYWx1ZS5oYXNSYW5nZSA9IChpc051bSh0aGlzVmFsdWUubWluKSAmJiBpc051bSh0aGlzVmFsdWUubWF4KSkgPyB0cnVlICA6IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgYWN0b3IudmFsdWVzW2tleV0gPSB0aGlzVmFsdWU7XG4gICAgICAgICAgICAgICAgYWN0b3IudXBkYXRlT3JkZXIoa2V5LCB1dGlscy5pc1N0cmluZyh0aGlzVmFsdWUubGluayksIGhhc0NoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rvci92YWx1ZS1vcGVyYXRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBSb2xlID0gcmVxdWlyZSgnLi9Sb2xlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFJvbGUoe1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5pdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5vblN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZnJhbWU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5vbkZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm9uRnJhbWUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLm9uVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm9sZXMvZGVmYXVsdFJvbGUuanNcbiAqKiBtb2R1bGUgaWQgPSA2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGVhY2ggPSByZXF1aXJlKCcuL3V0aWxzJykuZWFjaDtcblxuLypcbiAgICBNdWx0aS12YXIgZ2V0dGVyL3NldHRlclxuXG4gICAgQHBhcmFtIFtvYmplY3QgfHwgc3RyaW5nXTogTmFtZSBvZiB2YWx1ZSB0byBnZXQvc2V0XG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgbnVtYmVyXSAob3B0aW9uYWwpOiBTaW5nbGUgcHJvcGVydHkgdG8gc2V0IFxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBHZXR0ZXJcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogU2V0dGVyXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0cywgcHJvcCwgZ2V0dGVyLCBzZXR0ZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIHR5cGVPZk9wdHMgPSB0eXBlb2Ygb3B0cztcblxuICAgIC8vIFNldCBzaW5nbGUsIGlmIHRoaXMgaXMgYSBzdHJpbmcgYW5kIHdlIGhhdmUgYSBwcm9wZXJ0eVxuICAgIGlmICh0eXBlT2ZPcHRzID09ICdzdHJpbmcnICYmIHByb3ApIHtcbiAgICAgICAgc2V0dGVyLmNhbGwoc2VsZiwgb3B0cywgcHJvcCk7XG5cbiAgICAvLyBTZXQgbXVsdGksIGlmIHdlIGhhdmUgYW4gb2JqZWN0XG4gICAgfSBlbHNlIGlmICh0eXBlT2ZPcHRzID09ICdvYmplY3QnKSB7XG4gICAgICAgIGVhY2gob3B0cywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHNldHRlci5jYWxsKHNlbGYsIGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgIC8vIE9yIGdldCwgaWYgd2UgaGF2ZSBhIHN0cmluZyBhbmQgbm8gcHJvcHNcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZ2V0dGVyLmNhbGwoc2VsZiwgb3B0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlbGY7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2dldHRlci1zZXR0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciAvLyBbbnVtYmVyXTogRGVmYXVsdCBtYXggc2l6ZSBvZiBoaXN0b3J5XG4gICAgbWF4SGlzdG9yeVNpemUgPSAzLFxuICAgIFxuICAgIC8qXG4gICAgICAgIEhpc3RvcnkgY29uc3RydWN0b3JcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbdmFyXTogVmFyaWFibGUgdG8gc3RvcmUgaW4gZmlyc3QgaGlzdG9yeSBzbG90XG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpOiBNYXhpbXVtIHNpemUgb2YgaGlzdG9yeVxuICAgICovXG4gICAgSGlzdG9yeSA9IGZ1bmN0aW9uIChvYmosIG1heCkge1xuICAgICAgICB0aGlzLm1heCA9IG1heCB8fCBtYXhIaXN0b3J5U2l6ZTtcbiAgICAgICAgdGhpcy5lbnRyaWVzID0gW107XG4gICAgICAgIHRoaXMuYWRkKG9iaik7XG4gICAgfTtcbiAgICBcbkhpc3RvcnkucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8qXG4gICAgICAgIFB1c2ggbmV3IHZhciB0byBoaXN0b3J5XG4gICAgICAgIFxuICAgICAgICBTaGlmdCBvdXQgb2xkZXN0IGVudHJ5IGlmIHdlJ3ZlIHJlYWNoZWQgbWF4aW11bSBjYXBhY2l0eVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFt2YXJdOiBWYXJpYWJsZSB0byBwdXNoIGludG8gaGlzdG9yeS5lbnRyaWVzXG4gICAgKi9cbiAgICBhZGQ6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTaXplID0gdGhpcy5nZXRTaXplKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVudHJpZXMucHVzaChvYmopO1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRTaXplID49IHRoaXMubWF4KSB7XG4gICAgICAgICAgICB0aGlzLmVudHJpZXMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHZhcmlhYmxlIGF0IHNwZWNpZmllZCBpbmRleFxuXG4gICAgICAgIEBwYXJhbSBbaW50XTogSW5kZXhcbiAgICAgICAgQHJldHVybiBbdmFyXTogVmFyIGZvdW5kIGF0IHNwZWNpZmllZCBpbmRleFxuICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAoaSkge1xuICAgICAgICBpID0gKHR5cGVvZiBpID09PSAnbnVtYmVyJykgPyBpIDogdGhpcy5nZXRTaXplKCkgLSAxO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXNbaV07XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdGhlIHNlY29uZCBuZXdlc3QgaGlzdG9yeSBlbnRyeVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdmFyXTogRW50cnkgZm91bmQgYXQgaW5kZXggc2l6ZSAtIDJcbiAgICAqL1xuICAgIGdldFByZXZpb3VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmdldFNpemUoKSAtIDIpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGN1cnJlbnQgaGlzdG9yeSBzaXplXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBDdXJyZW50IGxlbmd0aCBvZiBlbnRyaWVzLmxlbmd0aFxuICAgICovXG4gICAgZ2V0U2l6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzLmxlbmd0aDtcbiAgICB9XG4gICAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhpc3Rvcnk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvSGlzdG9yeS5qc1xuICoqIG1vZHVsZSBpZCA9IDY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHRoZUxvb3AgPSByZXF1aXJlKCcuL2xvb3AuanMnKSxcbiAgICBQcm9jZXNzTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVJZHMgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVQcm9jZXNzZXMgPSB7fTtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlUXVldWUgPSBbXTtcbiAgICAgICAgdGhlTG9vcC5zZXRDYWxsYmFjayh0aGlzLCB0aGlzLmZpcmVBY3RpdmUpO1xuICAgIH07XG4gICAgXG5Qcm9jZXNzTWFuYWdlci5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLypcbiAgICAgICAgW2ludF06IFVzZWQgZm9yIHByb2Nlc3MgSURcbiAgICAqL1xuICAgIHByb2Nlc3NDb3VudGVyOiAwLFxuICAgIFxuICAgIC8qXG4gICAgICAgIFtpbnRdOiBOdW1iZXIgb2YgYWN0aXZlIHByb2Nlc3Nlc1xuICAgICovXG4gICAgYWN0aXZlQ291bnQ6IDAsXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBwcm9jZXNzIHdpdGggYSBnaXZlbiBpbmRleFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleCBvZiBwcm9jZXNzXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cbiAgICBnZXRQcm9jZXNzOiBmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVQcm9jZXNzZXNbaV07XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgbnVtYmVyIG9mIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2ludF06IE51bWJlciBvZiBhY3RpdmUgcHJvY2Vzc2VzXG4gICAgKi9cbiAgICBnZXRBY3RpdmVDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVDb3VudDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBhY3RpdmUgdG9rZW5zXG5cbiAgICAgICAgQHJldHVybiBbYXJyYXldOiBBY3RpdmUgdG9rZW5zXG4gICAgKi9cbiAgICBnZXRBY3RpdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlSWRzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBsZW5ndGggb2YgdGhlIGRlYWN0aXZhdGUgcXVldWVcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2ludF06IExlbmd0aCBvZiBxdWV1ZVxuICAgICovXG4gICAgZ2V0UXVldWVMZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEZpcmUgYWxsIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogVGltZXN0YW1wIG9mIGV4ZWN1dGluZyBmcmFtZXNcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBUaW1lIHNpbmNlIHByZXZpb3VzIGZyYW1lXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGFjdGl2ZSBwcm9jZXNzZXMgZm91bmRcbiAgICAqL1xuICAgIGZpcmVBY3RpdmU6IGZ1bmN0aW9uIChmcmFtZXN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBwcm9jZXNzLFxuICAgICAgICAgICAgYWN0aXZlQ291bnQgPSAwLFxuICAgICAgICAgICAgYWN0aXZlSWRzID0gW10sXG4gICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAvLyBQdXJnZSBhbmQgY2hlY2sgYWN0aXZlIGNvdW50IGJlZm9yZSBleGVjdXRpb25cbiAgICAgICAgdGhpcy5wdXJnZSgpO1xuICAgICAgICBhY3RpdmVDb3VudCA9IHRoaXMuZ2V0QWN0aXZlQ291bnQoKTtcbiAgICAgICAgYWN0aXZlSWRzID0gdGhpcy5nZXRBY3RpdmUoKTtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWN0aXZlIHByb2Nlc3NlcyBhbmQgZmlyZSBjYWxsYmFja1xuICAgICAgICBmb3IgKDsgaSA8IGFjdGl2ZUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHByb2Nlc3MgPSB0aGlzLmdldFByb2Nlc3MoYWN0aXZlSWRzW2ldKTtcblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmZpcmUoZnJhbWVzdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXB1cmdlIGFuZCByZWNoZWNrIGFjdGl2ZSBjb3VudCBhZnRlciBleGVjdXRpb25cbiAgICAgICAgdGhpcy5wdXJnZSgpO1xuICAgICAgICBhY3RpdmVDb3VudCA9IHRoaXMuZ2V0QWN0aXZlQ291bnQoKTtcblxuICAgICAgICAvLyBSZXR1cm4gdHJ1ZSBpZiB3ZSBzdGlsbCBoYXZlIGFjdGl2ZSBwcm9jZXNzZXMsIG9yIGZhbHNlIGlmIG5vbmVcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUNvdW50ID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgUmVnaXN0ZXIgYSBuZXcgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtQcm9jZXNzXVxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBJbmRleCBvZiBwcm9jZXNzIHRvIGJlIHVzZWQgYXMgSURcbiAgICAqL1xuICAgIHJlZ2lzdGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NDb3VudGVyKys7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBBY3RpdmF0ZSBhIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogSW5kZXggb2YgYWN0aXZlIHByb2Nlc3NcbiAgICAqL1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAocHJvY2VzcywgaSkge1xuICAgICAgICB2YXIgcXVldWVJbmRleCA9IHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLmluZGV4T2YoaSksXG4gICAgICAgICAgICBpc1F1ZXVlZCA9IChxdWV1ZUluZGV4ID4gLTEpLFxuICAgICAgICAgICAgaXNBY3RpdmUgPSAodGhpcy5hY3RpdmVJZHMuaW5kZXhPZihpKSA+IC0xKTtcblxuICAgICAgICAvLyBSZW1vdmUgZnJvbSBkZWFjdGl2YXRlUXVldWUgaWYgaW4gdGhlcmVcbiAgICAgICAgaWYgKGlzUXVldWVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UocXVldWVJbmRleCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdG8gYWN0aXZlIHByb2Nlc3NlcyBhcnJheSBpZiBub3QgYWxyZWFkeSBpbiB0aGVyZVxuICAgICAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUlkcy5wdXNoKGkpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQcm9jZXNzZXNbaV0gPSBwcm9jZXNzO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVDb3VudCsrO1xuICAgICAgICAgICAgdGhlTG9vcC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEZWFjdGl2YXRlIGEgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleCBvZiBwcm9jZXNzIHRvIGFkZCB0byBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlOiBmdW5jdGlvbiAoaSkge1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGVRdWV1ZS5wdXNoKGkpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgUHVyZ2UgdGhlIGRlYWN0aXZhdGUgcXVldWVcbiAgICAqL1xuICAgIHB1cmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBxdWV1ZUxlbmd0aCA9IHRoaXMuZ2V0UXVldWVMZW5ndGgoKSxcbiAgICAgICAgICAgIGFjdGl2ZUlkSW5kZXggPSAwLFxuICAgICAgICAgICAgaWRUb0RlbGV0ZSA9IDA7XG5cbiAgICAgICAgd2hpbGUgKHF1ZXVlTGVuZ3RoLS0pIHtcbiAgICAgICAgICAgIGlkVG9EZWxldGUgPSB0aGlzLmRlYWN0aXZhdGVRdWV1ZVtxdWV1ZUxlbmd0aF07XG4gICAgICAgICAgICBhY3RpdmVJZEluZGV4ID0gdGhpcy5hY3RpdmVJZHMuaW5kZXhPZihpZFRvRGVsZXRlKTtcblxuICAgICAgICAgICAgLy8gSWYgcHJvY2VzcyBpbiBhY3RpdmUgbGlzdCBkZWFjdGl2YXRlXG4gICAgICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ291bnQtLTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVQcm9jZXNzZXNbaWRUb0RlbGV0ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlID0gW107XG4gICAgfVxuICAgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgUHJvY2Vzc01hbmFnZXIoKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvbWFuYWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICAgIEJlemllciBmdW5jdGlvbiBnZW5lcmF0b3JcbiAgICAgICAgXG4gICAgR2HDq3RhbiBSZW5hdWRlYXUncyBCZXppZXJFYXNpbmdcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICAgWW91J3JlIGEgaGVyb1xuICAgIFxuICAgIFVzZVxuICAgIFxuICAgICAgICB2YXIgZWFzZU91dCA9IG5ldyBCZXppZXIoLjE3LC42NywuODMsLjY3KSxcbiAgICAgICAgICAgIHggPSBlYXNlT3V0KDAuNSk7IC8vIHJldHVybnMgMC42MjcuLi5cbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIE5FV1RPTl9JVEVSQVRJT05TID0gOCxcbiAgICBORVdUT05fTUlOX1NMT1BFID0gMC4wMDEsXG4gICAgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxLFxuICAgIFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TID0gMTAsXG4gICAgS19TUExJTkVfVEFCTEVfU0laRSA9IDExLFxuICAgIEtfU0FNUExFX1NURVBfU0laRSA9IDEuMCAvIChLX1NQTElORV9UQUJMRV9TSVpFIC0gMS4wKSxcbiAgICBGTE9BVF8zMl9TVVBQT1JURUQgPSAodHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcpLFxuICAgIFxuICAgIGEgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgICAgIHJldHVybiAxLjAgLSAzLjAgKiBhMiArIDMuMCAqIGExO1xuICAgIH0sXG4gICAgXG4gICAgYiA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGEyIC0gNi4wICogYTE7XG4gICAgfSxcbiAgICBcbiAgICBjID0gZnVuY3Rpb24gKGExKSB7XG4gICAgICAgIHJldHVybiAzLjAgKiBhMTtcbiAgICB9LFxuXG4gICAgZ2V0U2xvcGUgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgICAgIHJldHVybiAzLjAgKiBhKGExLCBhMikgKiB0ICogdCArIDIuMCAqIGIoYTEsIGEyKSAqIHQgKyBjKGExKTtcbiAgICB9LFxuXG4gICAgY2FsY0JlemllciA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuICgoYShhMSwgYTIpICogdCArIGIoYTEsIGEyKSkgKiB0ICsgYyhhMSkpICogdDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEJlemllciBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgQmV6aWVyID0gZnVuY3Rpb24gKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICAgICAgICB2YXIgc2FtcGxlVmFsdWVzID0gRkxPQVRfMzJfU1VQUE9SVEVEID8gbmV3IEZsb2F0MzJBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSA6IG5ldyBBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSxcbiAgICAgICAgICAgIF9wcmVjb21wdXRlZCA9IGZhbHNlLFxuICAgIFxuICAgICAgICAgICAgYmluYXJ5U3ViZGl2aWRlID0gZnVuY3Rpb24gKGFYLCBhQSwgYUIpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFgsIGN1cnJlbnRULCBpID0gMDtcblxuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgICAgIG5ld3RvblJhcGhzb25JdGVyYXRlID0gZnVuY3Rpb24gKGFYLCBhR3Vlc3NUKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xvcGUgPSAwLjAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICAgICAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYWxjU2FtcGxlVmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgS19TUExJTkVfVEFCTEVfU0laRTsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIEtfU0FNUExFX1NURVBfU0laRSwgbVgxLCBtWDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZ2V0VEZvclggPSBmdW5jdGlvbiAoYVgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNhbXBsZSA9IDEsXG4gICAgICAgICAgICAgICAgICAgIGxhc3RTYW1wbGUgPSBLX1NQTElORV9UQUJMRV9TSVpFIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgZGlzdCA9IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgZ3Vlc3NGb3JUID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU2xvcGUgPSAwLjA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC0tY3VycmVudFNhbXBsZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSsxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgICAgICAgICAgICAgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgc2xvcGUgaXMgZ3JlYXRlciB0aGFuIG1pblxuICAgICAgICAgICAgICAgIGlmIChpbml0aWFsU2xvcGUgPj0gTkVXVE9OX01JTl9TTE9QRSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCk7XG4gICAgICAgICAgICAgICAgLy8gU2xvcGUgaXMgZXF1YWwgdG8gbWluXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgICAgICAgICAgIC8vIFNsb3BlIGlzIGxlc3MgdGhhbiBtaW5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsgS19TQU1QTEVfU1RFUF9TSVpFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcmVjb21wdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF9wcmVjb21wdXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKG1YMSAhPSBtWTEgfHwgbVgyICE9IG1ZMikge1xuICAgICAgICAgICAgICAgICAgICBjYWxjU2FtcGxlVmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICBHZW5lcmF0ZWQgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBSZXR1cm5zIHZhbHVlIDAtMSBiYXNlZCBvbiBYXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgZiA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICAgICAgICAgIHZhciByZXR1cm5WYWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmICghX3ByZWNvbXB1dGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZWNvbXB1dGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgbGluZWFyIGdyYWRpZW50LCByZXR1cm4gWCBhcyBUXG4gICAgICAgICAgICAgICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gYVg7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIGF0IHN0YXJ0LCByZXR1cm4gMFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBhdCBlbmQsIHJldHVybiAxXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDE7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGNhbGNCZXppZXIoZ2V0VEZvclgoYVgpLCBtWTEsIG1ZMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0gQmV6aWVyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9wbGF5L0Jlemllci5qc1xuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHByZXNldE1hbmFnZXIgPSByZXF1aXJlKCcuLi8uLi9hY3Rvci9wcmVzZXQtbWFuYWdlcicpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyksXG5cbiAgICBwYXJzZVBsYXlsaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgICAgIHBsYXlsaXN0ID0gYXJnc1swXS5zcGxpdCgnICcpLFxuICAgICAgICAgICAgcGxheWxpc3RMZW5ndGggPSBwbGF5bGlzdC5sZW5ndGgsXG4gICAgICAgICAgICBwcm9wcyA9IHByZXNldE1hbmFnZXIuZ2V0RGVmaW5lZChwbGF5bGlzdFswXSksXG4gICAgICAgICAgICBpID0gMTtcblxuICAgICAgICAvLyBJZiB3ZSd2ZSBnb3QgbXVsdGlwbGUgcGxheWxpc3RzLCBsb29wIHRocm91Z2ggYW5kIGFkZCBlYWNoIHRvIHRoZSBxdWV1ZVxuICAgICAgICBpZiAocGxheWxpc3RMZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IHBsYXlsaXN0TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgYXJncy51bnNoaWZ0KHBsYXlsaXN0W2ldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlLmFkZC5hcHBseSh0aGlzLnF1ZXVlLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9wcztcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgbnVtQXJncyA9IGFyZ3MubGVuZ3RoLFxuICAgICAgICAvLyBJZiBmaXJzdCBhcmd1bWVudCBpcyBhIHN0cmluZywgZ2V0IGJhc2Ugb2JqZWN0IGZyb20gcHJlc2V0c1xuICAgICAgICBwcm9wcyA9IHV0aWxzLmlzU3RyaW5nKGFyZ3NbMF0pID8gcGFyc2VQbGF5bGlzdC5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGkgPSAxO1xuXG4gICAgLy8gTG9vcCB0aHJvdWdoIGFyZ3VtZW50c1xuICAgIGZvciAoOyBpIDwgbnVtQXJnczsgaSsrKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIGFyZ3NbaV0pIHtcbiAgICAgICAgICAgIC8vIE92ZXJyaWRlIHByb3BlcnRpZXNcbiAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgcHJvcHMgPSB1dGlscy5tZXJnZShwcm9wcywgYXJnc1tpXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBEdXJhdGlvblxuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICBwcm9wcy5kdXJhdGlvbiA9IGFyZ3NbaV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAvLyBFYXNpbmdcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICAgICAgcHJvcHMuZWFzZSA9IGFyZ3NbaV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IC5wbGF5IHByb3BlcnRpZXNcbiAgICBwcm9wcy5sb29wQ291bnQgPSBwcm9wcy55b3lvQ291bnQgPSBwcm9wcy5mbGlwQ291bnQgPSAwO1xuICAgIHByb3BzLnBsYXlEaXJlY3Rpb24gPSAxO1xuXG4gICAgcmV0dXJuIHByb3BzO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9wbGF5L3BhcnNlLWFyZ3MuanNcbiAqKiBtb2R1bGUgaWQgPSA2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1jb21tYS1kZWxpbWl0ZWQuanNcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1icmVhay5qc1xuICoqIG1vZHVsZSBpZCA9IDY5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHBvc2l0aW9uVGVybXMgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5JykucG9zaXRpb25zLFxuICAgIG51bVBvc2l0aW9uVGVybXMgPSBwb3NpdGlvblRlcm1zLmxlbmd0aCxcblxuICAgIFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZScsXG4gICAgU0NBTEUgPSAnc2NhbGUnLFxuICAgIFJPVEFURSA9ICdyb3RhdGUnLFxuICAgIHRlcm1zID0ge1xuICAgICAgICBmdW5jczogWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV0sXG4gICAgICAgIHByb3BzOiB7fSAvLyBvYmplY3RzIGFyZSBmYXN0ZXIgYXQgZGlyZWN0IGxvb2t1cHNcbiAgICB9O1xuXG4vLyBDcmVhdGUgdHJhbnNmb3JtIHRlcm1zXG4oZnVuY3Rpb24gKCkge1xuICAgIHZhciBmdW5jcyA9IHRlcm1zLmZ1bmNzLFxuICAgICAgICBwcm9wcyA9IHRlcm1zLnByb3BzLFxuICAgICAgICBudW1GdW5jcyA9IGZ1bmNzLmxlbmd0aCxcbiAgICAgICAgaSA9IDAsXG5cbiAgICAgICAgY3JlYXRlUHJvcHMgPSBmdW5jdGlvbiAoZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHZhciBqID0gMDtcblxuICAgICAgICAgICAgZm9yICg7IGogPCBudW1Qb3NpdGlvblRlcm1zOyBqKyspIHtcbiAgICAgICAgICAgICAgICBwcm9wc1tmdW5jTmFtZSArIHBvc2l0aW9uVGVybXNbal1dID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICBcbiAgICAvLyBNYW51YWxseSBhZGQgc2tldyBhbmQgdHJhbnNmb3JtIHBlcnNwZWN0aXZlICBcbiAgICBwcm9wc1tST1RBVEVdID0gcHJvcHNbU0NBTEVdID0gcHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG4gICAgXG4gICAgLy8gTG9vcCBvdmVyIGVhY2ggZnVuY3Rpb24gbmFtZSBhbmQgY3JlYXRlIGZ1bmN0aW9uL3Byb3BlcnR5IHRlcm1zXG4gICAgZm9yICg7IGkgPCBudW1GdW5jczsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BzKGZ1bmNzW2ldKTtcbiAgICB9XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRlcm1zO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm9sZXMvY3NzL3RyYW5zZm9ybS1kaWN0aW9uYXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gNzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXG4gICAgVGhlIGxvb3BcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIFRpbWVyID0gcmVxdWlyZSgnLi90aW1lci5qcycpLFxuICAgIHRpY2sgPSByZXF1aXJlKCcuL3RpY2suanMnKSxcbiAgICBMb29wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gbmV3IFRpbWVyKCk7XG4gICAgfTtcbiAgICBcbkxvb3AucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8qXG4gICAgICAgIFtib29sZWFuXTogQ3VycmVudCBzdGF0dXMgb2YgYW5pbWF0aW9uIGxvb3BcbiAgICAqL1xuICAgIGlzUnVubmluZzogZmFsc2UsXG4gICAgXG4gICAgLypcbiAgICAgICAgRmlyZSBhbGwgYWN0aXZlIHByb2Nlc3NlcyBvbmNlIHBlciBmcmFtZVxuICAgICovXG4gICAgZnJhbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGZyYW1lc3RhbXAgPSBzZWxmLnRpbWVyLnVwZGF0ZSgpLCAvLyBDdXJyZW50bHkganVzdCBtZWFzdXJpbmcgaW4gbXMgLSB3aWxsIGxvb2sgaW50byBoaS1yZXMgdGltZXN0YW1wc1xuICAgICAgICAgICAgICAgIGlzQWN0aXZlID0gc2VsZi5jYWxsYmFjay5jYWxsKHNlbGYuc2NvcGUsIGZyYW1lc3RhbXAsIHNlbGYudGltZXIuZ2V0RWxhcHNlZCgpKTtcblxuICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5mcmFtZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdGFydCBsb29wXG4gICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UncmUgbm90IGFscmVhZHkgcnVubmluZyBhIGxvb3BcbiAgICAgICAgaWYgKCF0aGlzLmlzUnVubmluZykge1xuICAgICAgICAgICAgdGhpcy50aW1lci5jbG9jaygpO1xuICAgICAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5mcmFtZSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdG9wIHRoZSBsb29wXG4gICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTZXQgdGhlIGNhbGxiYWNrIHRvIHJ1biBldmVyeSBmcmFtZVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtPYmplY3RdOiBFeGVjdXRpb24gY29udGV4dFxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgdG8gZmlyZVxuICAgICovXG4gICAgc2V0Q2FsbGJhY2s6IGZ1bmN0aW9uIChzY29wZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTG9vcCgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy9sb29wLmpzXG4gKiogbW9kdWxlIGlkID0gNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMuanMnKSxcblxuICAgIG1heEVsYXBzZWQgPSAzMyxcbiAgICBUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gMTYuNztcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuXG5UaW1lci5wcm90b3R5cGUgPSB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gTWF0aC5taW4odGhpcy5jdXJyZW50IC0gdGhpcy5wcmV2LCBtYXhFbGFwc2VkKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICAgIH0sXG5cbiAgICBnZXRFbGFwc2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsYXBzZWQ7XG4gICAgfSxcbiAgICBcbiAgICBjbG9jazogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGltZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wcm9jZXNzL3RpbWVyLmpzXG4gKiogbW9kdWxlIGlkID0gNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuLypcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICBcbiAgICBGb3IgSUU4LzkgRmxpbnN0b25lc1xuXG4gICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgIFxuICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgIFxuICAgIE1JVCBsaWNlbnNlXG4qL1xudmFyIHRpY2ssXG4gICAgbGFzdFRpbWUgPSAwLFxuICAgIGhhc1dpbmRvdyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyk7XG5cbmlmICghaGFzV2luZG93KSB7XG4gICAgLy8gTG9hZCByQUYgc2hpbVxuICAgIHRpY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpLFxuICAgICAgICAgICAgaWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgfSwgdGltZVRvQ2FsbCk7XG5cbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfTsgIFxuICAgIFxufSBlbHNlIHtcbiAgICB0aWNrID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aWNrO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy90aWNrLmpzXG4gKiogbW9kdWxlIGlkID0gNzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwuanMifQ==