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
	popmotion.css = __webpack_require__(18);
	popmotion.attr = __webpack_require__(19);
	popmotion.drawPath = __webpack_require__(20);
	popmotion.movePath = __webpack_require__(21);  
	
	module.exports = popmotion;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var actionManager = __webpack_require__(22),
	    presetManager = __webpack_require__(23),
	    valueTypeManager = __webpack_require__(24),
	
	    Popmotion = {
	
	        Actor: __webpack_require__(25),
	
	        ActorCollection: __webpack_require__(26),
	
	        Input: __webpack_require__(27),
	
	        Process: __webpack_require__(28),
	
	        Easing: __webpack_require__(29),
	
	        Role: __webpack_require__(30),
	
	        select: __webpack_require__(31),
	
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
	
	        calc: __webpack_require__(32)
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
	
	var calc = __webpack_require__(32),
	    utils = __webpack_require__(33),
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
	
	var calc = __webpack_require__(32),
	    utils = __webpack_require__(33),
	    simulations = __webpack_require__(34);
	
	module.exports = {
	
	    // [object] Default Action properties
	    actionDefaults: __webpack_require__(35),
	
	    // [object] Default value properties
	    valueDefaults: __webpack_require__(36),
	
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
	
	var calc = __webpack_require__(32),
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
	
	var calc = __webpack_require__(32),
	
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
	
	var utils = __webpack_require__(33),
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
	        return (values.Red !== undefined) ? rgb.combine(values) : hsl.combine(values);
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
	    utils = __webpack_require__(33),
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
	
	var Role = __webpack_require__(30);
	var build = __webpack_require__(51);
	var each = __webpack_require__(33).each;
	
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
	
	    _map: __webpack_require__(52),
	    _typeMap: __webpack_require__(53),
	
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
	
	var Role = __webpack_require__(30);
	var each = __webpack_require__(33).each;
	
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
	
	var Role = __webpack_require__(30);
	var cssRole = __webpack_require__(18);
	var each = __webpack_require__(33).each;
	
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
	    _map: __webpack_require__(54),
	
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
	
	var getAngle = __webpack_require__(32).angle;
	
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

	"use strict";
	
	var Actor,
	    ActorCollection,
	    utils = __webpack_require__(33),
	    generateMethodIterator = __webpack_require__(60),
	    genericActionProps = __webpack_require__(62),
	    genericValueProps = __webpack_require__(63),
	    genericParse = __webpack_require__(41),
	
	    ModManager = __webpack_require__(61),
	
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var utils = __webpack_require__(33),
	    ModManager = __webpack_require__(61),
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ModManager = __webpack_require__(61),
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Process = __webpack_require__(28),
	    Queue = __webpack_require__(55),
	    utils = __webpack_require__(33),
	    update = __webpack_require__(56),
	    valueOps = __webpack_require__(57),
	    actionManager = __webpack_require__(22),
	    defaultRole = __webpack_require__(58),
	    cssRole = __webpack_require__(18),
	    each = utils.each,
	
	    Actor = function (opts) {
	        var actor = this,
	            roles = [ defaultRole ];
	
	        // Set values object and state object
	        this.values = {};
	        this.state = {
	            values: {}
	        };
	
	        // Init queue and process
	        this.queue = new Queue();
	        this.process = new Process(this, update);
	
	        // Detect/add roles
	        if (opts) {
	            this.set(opts);
	
	            // Auto-detect element type, if present and no roles defined
	            if (!opts.as && opts.element) {
	                // Add CSS role if HTMLElement
	                if (opts.element instanceof HTMLElement) {
	                    roles.push(cssRole);
	
	                } else if (opts.element instanceof SVGElement) {
	
	                }
	            // Manuall adding roles
	            } else if (opts.as) {
	                if (utils.isArray(opts.as)) {
	                    roles.push.apply(roles, opts.as);
	                } else {
	                    roles.push(opts.as);
	                }
	            }
	        }
	
	        this.roles = roles;
	        this.roles.forEach(function (role) {
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Actor = __webpack_require__(25),
	    generateMethodIterator = __webpack_require__(60),
	    utils = __webpack_require__(33),
	    actionManager = __webpack_require__(22),
	
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Input controller
	*/
	"use strict";
	
	var calc = __webpack_require__(32),
	    utils = __webpack_require__(33),
	    History = __webpack_require__(59),
	
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
/* 28 */
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var Bezier = __webpack_require__(64),
	
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(33);
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ActorCollection = __webpack_require__(26);
	
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Calculators
	    ----------------------------------------
	    
	    Simple I/O snippets
	*/
	"use strict";
	
	var utils = __webpack_require__(33),
	
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
/* 33 */
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var calc = __webpack_require__(32),
	    utils = __webpack_require__(33),
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    // [int]: Number of frames Action has been inactive
	    inactiveFrames: 0,
	    
	    // [number]: Number of frames of no change before Action is declared inactive
	    maxInactiveFrames: 3
	};

/***/ },
/* 36 */
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
	
	var Easing = __webpack_require__(29),
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
	
	var parseArgs = __webpack_require__(66),
	    utils = __webpack_require__(33);
	
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
	
	var presetManager = __webpack_require__(23),
	    utils = __webpack_require__(33);
	
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
	
	var Input = __webpack_require__(27),
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
	
	var transformDictionary = __webpack_require__(69),
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var TRANSLATE = 'translate';
	
	module.exports = {
	    x: TRANSLATE + 'X',
	    y: TRANSLATE + 'Y',
	    z: TRANSLATE + 'Z'
	};

/***/ },
/* 53 */
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
/* 54 */
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
/* 55 */
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var actionManager = __webpack_require__(22),
	    valueTypeManager = __webpack_require__(24),
	    calc = __webpack_require__(32),
	    each = __webpack_require__(33).each,
	
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
	            outputValue = 0,
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
	            outputValue = (value.unit) ? updatedValue + value.unit : updatedValue;
	
	            // Put value in state if no parent value
	            if (!value.parent) {
	                state.values[key] = outputValue;
	
	            // Or add to parent state, to be combined
	            } else {
	                state[value.parent] = state[value.parent] || {};
	                state[value.parent][value.propName] = outputValue;
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var calc = __webpack_require__(32),
	    utils = __webpack_require__(33),
	    isNum = utils.isNum,
	    actionsManager = __webpack_require__(22),
	    valueTypesManager = __webpack_require__(24),
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
	                        this.splitUnit(splitValues[key][propertyName], splitValues[key]);
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
	
	                if (splitUnitValue.unit) {
	                    value.unit = splitUnitValue.unit;
	                }
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var Role = __webpack_require__(30);
	
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
/* 59 */
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
/* 60 */
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
/* 61 */
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
/* 62 */
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
/* 63 */
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
/* 64 */
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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var theLoop = __webpack_require__(70),
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

	"use strict";
	
	var presetManager = __webpack_require__(23),
	    utils = __webpack_require__(33),
	
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

	/*
	    The loop
	*/
	"use strict";
	
	var Timer = __webpack_require__(71),
	    tick = __webpack_require__(72),
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var utils = __webpack_require__(33),
	
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
/* 72 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTgzNTBmZjY5MTkwMjFmZjQzZTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2FkL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2ZpcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYWxwaGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FuZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9weC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9yZ2IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvZGltZW5zaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvY3NzUm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvYXR0ci9hdHRyUm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvcGF0aC9kcmF3UGF0aFJvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL3BhdGgvbW92ZVBhdGhSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL3ByZXNldC1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci9BY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3IvQWN0b3JDb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9Qcm9jZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3BsYXkvRWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9Sb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9jYWxjLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcnVuL3NpbXVsYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3J1bi9kZWZhdWx0LWFjdGlvbi1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9ydW4vZGVmYXVsdC12YWx1ZS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wbGF5L3ByZXNldC1lYXNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGxheS9kZWZhdWx0LWFjdGlvbi1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wbGF5L2RlZmF1bHQtdmFsdWUtcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGxheS9hY3Rvci1tZXRob2RzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2dlbmVyaWMvcGFyc2UtYXJncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvUG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90cmFjay9kZWZhdWx0LXZhbHVlLXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2xpbmsvZGVmYXVsdC12YWx1ZS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2Nzcy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2Nzcy90eXBlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvcGF0aC9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9RdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3IvdXBkYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci92YWx1ZS1vcGVyYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9kZWZhdWx0Um9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL0hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL3N5c3RlbS9nZW5lcmF0ZS1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL01vZE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZ2VuZXJpYy9kZWZhdWx0LWFjdGlvbi1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9nZW5lcmljL2RlZmF1bHQtdmFsdWUtcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcGxheS9CZXppZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9wbGF5L3BhcnNlLWFyZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1jb21tYS1kZWxpbWl0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1icmVhay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvY3NzL3RyYW5zZm9ybS1kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL2xvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvdGljay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ1hBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Qzs7QUFFQSw0Qjs7Ozs7O0FDdENBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBLDRCOzs7Ozs7QUN4Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDM0dBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQzFEQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFjLGVBQWU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFnRTtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNKQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDL0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUM3QkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDMUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNoQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZCQUE0QjtBQUM1QiwyQkFBMEI7QUFDMUIsdUJBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNyQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9DQUFtQztBQUNuQywrQkFBOEI7QUFDOUIsMEJBQXlCO0FBQ3pCLHdCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWMsT0FBTztBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDNUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFjLGFBQWE7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDckRBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7QUFFRCwwQjs7Ozs7O0FDbEVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOzs7Ozs7OztBQ3pCQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVELDhCOzs7Ozs7QUM5RUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtDOzs7Ozs7QUN4QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDcEVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWMsYUFBYTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEIsc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQSxXQUFVLGFBQWE7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQzs7Ozs7O0FDNUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQSxtQzs7Ozs7O0FDeEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWlCOztBQUVqQjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3Qjs7Ozs7O0FDMVJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFhO0FBQ2IsdUJBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxlQUFjLG9CQUFvQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBLGtDOzs7Ozs7QUN4SUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHdCOzs7Ozs7QUM3SEE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEI7Ozs7OztBQzdJQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7QUNuRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCOzs7Ozs7QUNqRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEc7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDLFdBQVc7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOzs7QUFHVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDLFdBQVc7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0Esa0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7OztBQUdUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOzs7QUFHVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFO0FBQ0EsVUFBUzs7O0FBR1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Qjs7Ozs7O0FDNVdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEM7QUFDQSxNQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFjLFlBQVk7QUFDMUI7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBLHlCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRzs7Ozs7O0FDN1BBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDOUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDTkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Qjs7Ozs7O0FDL0VBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNsQkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSxlQUFjLGNBQWM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQzdHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHOzs7Ozs7QUNkQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBCOzs7Ozs7QUN4RkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDTEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEc7Ozs7OztBQ1RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVSxjQUFjO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEc7Ozs7OztBQ3JCQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQSxXQUFVLGNBQWM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBLEc7Ozs7OztBQ2RBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCOzs7Ozs7QUNkQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDRkE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEc7Ozs7OztBQ3hDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUM5Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDWEE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7OztBQy9DQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUFzQjtBQUN0Qiw4QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF1QixjQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFtQixzQkFBc0I7QUFDekM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF1QixjQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUI7Ozs7OztBQ3ZKQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEI7QUFDNUIsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQSxlQUFjLHdCQUF3QjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DO0FBQ25DLHVCQUFzQjtBQUN0Qiw0QkFBMkI7QUFDM0IsNEJBQTJCO0FBQzNCLHNCQUFxQjtBQUNyQiwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFrQztBQUNsQywyQkFBMEI7QUFDMUIsOEJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUhBQWtIO0FBQ2xIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUN2VkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDaENEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwwQjs7Ozs7O0FDcEVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVEsaUJBQWlCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBLHdCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Qjs7Ozs7O0FDdkRBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxHOzs7Ozs7QUNqQkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEc7Ozs7OztBQ3RCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0Esa0JBQWlCOztBQUVqQjtBQUNBLGNBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXNCLHVCQUF1QjtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYTs7O0FBR2I7QUFDQSxnQ0FBK0IseUJBQXlCO0FBQ3hEO0FBQ0E7QUFDQSxjQUFhOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBc0Isa0VBQWtFO0FBQ3hGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLGtCQUFpQjtBQUNqQjs7QUFFQSxrQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7OztBQ3JLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBYyxpQkFBaUI7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHVDOzs7Ozs7QUNsS0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVUsYUFBYTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0REE7QUFDQTtBQUNBLEc7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNGQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVUsY0FBYztBQUN4QjtBQUNBO0FBQ0EsRUFBQzs7QUFFRCx3Qjs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkI7Ozs7OztBQ3BFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjs7QUFFQTtBQUNBLE87O0FBRUEsRUFBQztBQUNEO0FBQ0E7O0FBRUEsdUIiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA5ODM1MGZmNjkxOTAyMWZmNDNlM1xuICoqLyIsInZhciBwb3Btb3Rpb24gPSByZXF1aXJlKCcuL21vZHVsZS5qcycpLFxuICAgIFVJcmVmID0gd2luZG93LnVpO1xuXG53aW5kb3cudWkgPSB3aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuXG4vKlxuICAgIElmIG5vQ29uZmxpY3QgaXMgcnVuLCB0aGUgb3JpZ2luYWwgcmVmZXJlbmNlIHRvIHdpbmRvdy5VSSBpc1xuICAgIHJlc3RvcmVkIGFuZCBQb3Btb3Rpb24gaXMgbG9hZGVkIHRvIHdpbmRvdy5Qb3Btb3Rpb25cbiovXG53aW5kb3cudWkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cudWkgPSBVSXJlZjtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sb2FkL2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcG9wbW90aW9uID0gcmVxdWlyZSgnLi4vcG9wbW90aW9uJyk7XG5cbnBvcG1vdGlvblxuICAgIC8qXG4gICAgICAgIENvcmUgQWN0aW9uc1xuICAgICovXG4gICAgLmFkZEFjdGlvbigncGxheScsIHJlcXVpcmUoJy4uL2FjdGlvbnMvcGxheScpKVxuICAgIC5hZGRBY3Rpb24oJ3J1bicsIHJlcXVpcmUoJy4uL2FjdGlvbnMvcnVuJykpXG4gICAgLmFkZEFjdGlvbignZmlyZScsIHJlcXVpcmUoJy4uL2FjdGlvbnMvZmlyZScpKVxuICAgIC5hZGRBY3Rpb24oJ3RyYWNrJywgcmVxdWlyZSgnLi4vYWN0aW9ucy90cmFjaycpKVxuICAgIC5hZGRBY3Rpb24oJ2xpbmsnLCByZXF1aXJlKCcuLi9hY3Rpb25zL2xpbmsnKSlcblxuICAgIC8qXG4gICAgICAgIE9wdGlvbmFsIHZhbHVlIHR5cGUgc3VwcG9ydFxuICAgICovXG4gICAgLmFkZFZhbHVlVHlwZSh7XG4gICAgICAgIGFscGhhOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9hbHBoYScpLFxuICAgICAgICBhbmdsZTogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvYW5nbGUnKSxcbiAgICAgICAgcHg6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3B4JyksXG4gICAgICAgIGhzbDogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvaHNsJyksXG4gICAgICAgIHJnYjogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvcmdiJyksXG4gICAgICAgIGhleDogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvaGV4JyksXG4gICAgICAgIGNvbG9yOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9jb2xvcicpLFxuICAgICAgICBwb3NpdGlvbnM6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucycpLFxuICAgICAgICBkaW1lbnNpb25zOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9kaW1lbnNpb25zJyksXG4gICAgICAgIHNoYWRvdzogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvc2hhZG93JylcbiAgICB9KTtcblxuLypcbiAgICBQcmVkZWZpbmVkIHJvbGVzXG4qL1xucG9wbW90aW9uLmNzcyA9IHJlcXVpcmUoJy4uL3JvbGVzL2Nzcy9jc3NSb2xlJyk7XG5wb3Btb3Rpb24uYXR0ciA9IHJlcXVpcmUoJy4uL3JvbGVzL2F0dHIvYXR0clJvbGUnKTtcbnBvcG1vdGlvbi5kcmF3UGF0aCA9IHJlcXVpcmUoJy4uL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlJyk7XG5wb3Btb3Rpb24ubW92ZVBhdGggPSByZXF1aXJlKCcuLi9yb2xlcy9wYXRoL21vdmVQYXRoUm9sZScpOyAgXG5cbm1vZHVsZS5leHBvcnRzID0gcG9wbW90aW9uO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbG9hZC9tb2R1bGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGFjdGlvbk1hbmFnZXIgPSByZXF1aXJlKCcuL2FjdGlvbnMvbWFuYWdlcicpLFxuICAgIHByZXNldE1hbmFnZXIgPSByZXF1aXJlKCcuL2FjdG9yL3ByZXNldC1tYW5hZ2VyJyksXG4gICAgdmFsdWVUeXBlTWFuYWdlciA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvbWFuYWdlcicpLFxuXG4gICAgUG9wbW90aW9uID0ge1xuXG4gICAgICAgIEFjdG9yOiByZXF1aXJlKCcuL2FjdG9yL0FjdG9yJyksXG5cbiAgICAgICAgQWN0b3JDb2xsZWN0aW9uOiByZXF1aXJlKCcuL2FjdG9yL0FjdG9yQ29sbGVjdGlvbicpLFxuXG4gICAgICAgIElucHV0OiByZXF1aXJlKCcuL2lucHV0L0lucHV0JyksXG5cbiAgICAgICAgUHJvY2VzczogcmVxdWlyZSgnLi9wcm9jZXNzL1Byb2Nlc3MnKSxcblxuICAgICAgICBFYXNpbmc6IHJlcXVpcmUoJy4vYWN0aW9ucy9wbGF5L0Vhc2luZycpLFxuXG4gICAgICAgIFJvbGU6IHJlcXVpcmUoJy4vcm9sZXMvUm9sZScpLFxuXG4gICAgICAgIHNlbGVjdDogcmVxdWlyZSgnLi9hY3Rvci9zZWxlY3QnKSxcblxuICAgICAgICBhZGRBY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFjdGlvbk1hbmFnZXIuZXh0ZW5kLmFwcGx5KGFjdGlvbk1hbmFnZXIsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRQcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHByZXNldE1hbmFnZXIuZXh0ZW5kLmFwcGx5KHByZXNldE1hbmFnZXIsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRWYWx1ZVR5cGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhbHVlVHlwZU1hbmFnZXIuZXh0ZW5kLmFwcGx5KHZhbHVlVHlwZU1hbmFnZXIsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBjYWxjOiByZXF1aXJlKCcuL2luYy9jYWxjJylcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcG1vdGlvbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BvcG1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXG4gICAgUGxheSBhY3Rpb25cbiAgICBcbiAgICBUcmFuc2xhdGUgbnVtYmVycyBmb3IgYSBzZXQgYW1vdW50IG9mIHRpbWUsIGFwcGx5aW5nIGVhc2luZyBpZiBkZWZpbmVkXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIHByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vcGxheS9wcmVzZXQtZWFzaW5nJyksXG5cbiAgICAvKlxuICAgICAgICBFYXNlIHZhbHVlIHdpdGhpbiByYW5nZWQgcGFyYW1ldGVyc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAwIHByb2dyZXNzXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgICAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgICAgICAgICAgdG8gdXNlIG9yIGdlbmVyYXRlZCBlYXNpbmcgZnVuY3Rpb25cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBBbXBsaWZ5IHByb2dyZXNzIG91dCBvZiBzcGVjaWZpZWQgcmFuZ2VcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiAgICAqLyAgXG4gICAgZWFzZSA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UsIGVzY2FwZUFtcCkge1xuICAgICAgICB2YXIgcHJvZ3Jlc3NMaW1pdGVkID0gY2FsYy5yZXN0cmljdGVkKHByb2dyZXNzLCAwLCAxKSxcbiAgICAgICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gdXRpbHMuaXNTdHJpbmcoZWFzZSkgPyBwcmVzZXRFYXNpbmdbZWFzZV0gOiBlYXNlO1xuXG4gICAgICAgIGlmIChwcm9ncmVzc0xpbWl0ZWQgIT09IHByb2dyZXNzICYmIGVzY2FwZUFtcCkge1xuICAgICAgICAgICAgZWFzZSA9ICdsaW5lYXInO1xuICAgICAgICAgICAgcHJvZ3Jlc3NMaW1pdGVkID0gcHJvZ3Jlc3NMaW1pdGVkICsgKChwcm9ncmVzcyAtIHByb2dyZXNzTGltaXRlZCkgKiBlc2NhcGVBbXApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNhbGMudmFsdWVFYXNlZChwcm9ncmVzc0xpbWl0ZWQsIGZyb20sIHRvLCBlYXNpbmdGdW5jdGlvbik7XG4gICAgfSxcblxuICAgIHBsYXlBY3Rpb24gPSB7XG5cbiAgICAgICAgLy8gW29iamVjdF0gRGVmYXVsdCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICBhY3Rpb25EZWZhdWx0czogcmVxdWlyZSgnLi9wbGF5L2RlZmF1bHQtYWN0aW9uLXByb3BzJyksXG5cbiAgICAgICAgLy8gW29iamVjdF06IERlZmF1bHQgdmFsdWUgcHJvcGVydGllc1xuICAgICAgICB2YWx1ZURlZmF1bHRzOiByZXF1aXJlKCcuL3BsYXkvZGVmYXVsdC12YWx1ZS1wcm9wcycpLFxuXG4gICAgICAgIC8vIFtib29sZWFuXSBQcmV2ZW50IFJlZHNoaWZ0IGZyb20gYXV0b2dlbmVyYXRpbmcgRWxlbWVudC5wcm90b3R5cGUucGxheSgpXG4gICAgICAgIHN1cnByZXNzTWV0aG9kOiB0cnVlLFxuXG4gICAgICAgIC8vIFtvYmplY3RdIE1ldGhvZHMgdG8gYWRkIHRvIEFjdG9yLnByb3RvdHlwZVxuICAgICAgICBhY3Rvck1ldGhvZHM6IHJlcXVpcmUoJy4vcGxheS9hY3Rvci1tZXRob2RzJyksXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIFVwZGF0ZSBBY3Rpb24gZWxhcHNlZCB0aW1lXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGltZXN0YW1wIG9mIGN1cnJlbnQgZnJhbWVcbiAgICAgICAgKi9cbiAgICAgICAgb25GcmFtZVN0YXJ0OiBmdW5jdGlvbiAoZnJhbWVEdXJhdGlvbikge1xuICAgICAgICAgICAgaWYgKGZyYW1lRHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXBzZWQgKz0gKGZyYW1lRHVyYXRpb24gKiB0aGlzLmRpbGF0ZSkgKiB0aGlzLnBsYXlEaXJlY3Rpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaGFzRW5kZWQgPSB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDYWxjdWxhdGUgcHJvZ3Jlc3Mgb2YgdmFsdWUgYmFzZWQgb24gdGltZSBlbGFwc2VkLFxuICAgICAgICAgICAgdmFsdWUgZGVsYXkvZHVyYXRpb24vc3RhZ2dlciBwcm9wZXJ0aWVzXG5cbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogVmFsdWUgc3RhdGUgYW5kIHByb3BlcnRpZXNcbiAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiB2YWx1ZSBiZWluZyBwcm9jZXNzZWRcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IENhbGN1bGF0ZWQgdmFsdWVcbiAgICAgICAgKi9cbiAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdmFsdWUudG8sXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NUYXJnZXQgPSAodGhpcy5wbGF5RGlyZWN0aW9uID09PSAxKSA/IDEgOiAwLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWUuY3VycmVudCxcbiAgICAgICAgICAgICAgICBwcm9ncmVzcztcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBoYXMgYSB0byBwcm9wZXJ0eSwgb3RoZXJ3aXNlIHdlIGp1c3QgcmV0dXJuIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gY2FsYy5yZXN0cmljdGVkKGNhbGMucHJvZ3Jlc3ModGhpcy5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIHZhbHVlLmR1cmF0aW9uKSAtIHZhbHVlLnN0YWdnZXIsIDAsIDEpO1xuXG4gICAgICAgICAgICAgICAgLy8gTWFyayBBY3Rpb24gYXMgTk9UIGVuZGVkIGlmIHN0aWxsIGluIHByb2dyZXNzXG4gICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0VuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5zdGVwcykge1xuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IHV0aWxzLnN0ZXBQcm9ncmVzcyhwcm9ncmVzcywgdmFsdWUuc3RlcHMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEVhc2UgdmFsdWVcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IGVhc2UocHJvZ3Jlc3MsIHZhbHVlLm9yaWdpbiwgdGFyZ2V0LCB2YWx1ZS5lYXNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFJldHVybiBoYXNFbmRlZCBwcm9wZXJ0eVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSGF2ZSBhbGwgVmFsdWVzIGhpdCAxIHByb2dyZXNzP1xuICAgICAgICAqL1xuICAgICAgICBoYXNFbmRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFzRW5kZWQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXlBY3Rpb247XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcGxheS5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXG4gICAgUnVuIHBoeXNpY3Mgc2ltdWxhdGlvblxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBzaW11bGF0aW9ucyA9IHJlcXVpcmUoJy4vcnVuL3NpbXVsYXRpb25zJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLy8gW29iamVjdF0gRGVmYXVsdCBBY3Rpb24gcHJvcGVydGllc1xuICAgIGFjdGlvbkRlZmF1bHRzOiByZXF1aXJlKCcuL3J1bi9kZWZhdWx0LWFjdGlvbi1wcm9wcycpLFxuXG4gICAgLy8gW29iamVjdF0gRGVmYXVsdCB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgdmFsdWVEZWZhdWx0czogcmVxdWlyZSgnLi9ydW4vZGVmYXVsdC12YWx1ZS1wcm9wcycpLFxuXG4gICAgLy8gW2Jvb2xlYW5dOiBUZWxsIFJlZHNoaWZ0IHRoaXMgcnViaXggY2FsY3VsYXRlcyBhIG5ldyB2ZWxvY2l0eSBpdHNlbGZcbiAgICBjYWxjdWxhdGVzVmVsb2NpdHk6IHRydWUsXG4gICAgXG4gICAgLypcbiAgICAgICAgU2ltdWxhdGUgdGhlIFZhbHVlJ3MgcGVyLWZyYW1lIG1vdmVtZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSBvZiBjdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRHVyYXRpb24gb2YgZnJhbWUgaW4gbXNcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZVxuICAgICovXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKHZhbHVlLCBrZXksIHRpbWVTaW5jZUxhc3RGcmFtZSkge1xuICAgICAgICB2YXIgc2ltdWxhdGUgPSB2YWx1ZS5zaW11bGF0ZSxcbiAgICAgICAgICAgIHNpbXVsYXRpb24gPSB1dGlscy5pc1N0cmluZyhzaW11bGF0ZSkgPyBzaW11bGF0aW9uc1tzaW11bGF0ZV0gOiBzaW11bGF0ZSxcbiAgICAgICAgICAgIG5ld1ZlbG9jaXR5ID0gc2ltdWxhdGlvbih2YWx1ZSwgdGltZVNpbmNlTGFzdEZyYW1lLCB0aGlzLnN0YXJ0ZWQpO1xuXG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gKE1hdGguYWJzKG5ld1ZlbG9jaXR5KSA+PSB2YWx1ZS5zdG9wU3BlZWQpID8gbmV3VmVsb2NpdHkgOiAwO1xuICAgICAgICByZXR1cm4gdmFsdWUuY3VycmVudCArIGNhbGMuc3BlZWRQZXJGcmFtZSh2YWx1ZS52ZWxvY2l0eSwgdGltZVNpbmNlTGFzdEZyYW1lKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEhhcyB0aGlzIGFjdGlvbiBlbmRlZD9cbiAgICAgICAgXG4gICAgICAgIFVzZSBhIGZyYW1lY291bnRlciB0byBzZWUgaWYgQWN0aW9uIGhhcyBjaGFuZ2VkIGluIHRoZSBsYXN0IHggZnJhbWVzXG4gICAgICAgIGFuZCBkZWNsYXJlIGVuZGVkIGlmIG5vdFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogSGFzIEFjdGlvbiBjaGFuZ2VkP1xuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSGFzIEFjdGlvbiBlbmRlZD9cbiAgICAqL1xuICAgIGhhc0VuZGVkOiBmdW5jdGlvbiAoaGFzQ2hhbmdlZCkge1xuICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gaGFzQ2hhbmdlZCA/IDAgOiB0aGlzLmluYWN0aXZlRnJhbWVzICsgMTtcbiAgICAgICAgcmV0dXJuICh0aGlzLmluYWN0aXZlRnJhbWVzID4gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcyk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBMaW1pdCBvdXRwdXQgdG8gdmFsdWUgcmFuZ2UsIGlmIGFueVxuICAgICAgICBcbiAgICAgICAgSWYgdmVsb2NpdHkgaXMgYXQgb3IgbW9yZSB0aGFuIHJhbmdlLCBhbmQgdmFsdWUgaGFzIGEgYm91bmNlIHByb3BlcnR5LFxuICAgICAgICBydW4gdGhlIGJvdW5jZSBzaW11bGF0aW9uXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IENhbGN1bGF0ZWQgb3V0cHV0XG4gICAgICAgIEBwYXJhbSBbVmFsdWVdOiBDdXJyZW50IFZhbHVlXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IExpbWl0LWFkanVzdGVkIG91dHB1dFxuICAgICovXG4gICAgbGltaXQ6IGZ1bmN0aW9uIChvdXRwdXQsIHZhbHVlKSB7XG4gICAgICAgIHZhciBpc091dHNpZGVNYXggPSAob3V0cHV0ID49IHZhbHVlLm1heCksXG4gICAgICAgICAgICBpc091dHNpZGVNaW4gPSAob3V0cHV0IDw9IHZhbHVlLm1pbiksXG4gICAgICAgICAgICBpc091dHNpZGVSYW5nZSA9IGlzT3V0c2lkZU1heCB8fCBpc091dHNpZGVNaW47XG4gICAgICAgIFxuICAgICAgICBpZiAoaXNPdXRzaWRlUmFuZ2UpIHtcbiAgICAgICAgICAgIG91dHB1dCA9IGNhbGMucmVzdHJpY3RlZChvdXRwdXQsIHZhbHVlLm1pbiwgdmFsdWUubWF4KTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlLmJvdW5jZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc2ltdWxhdGlvbnMuYm91bmNlKHZhbHVlKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5jYXB0dXJlKSB7XG4gICAgICAgICAgICAgICAgc2ltdWxhdGlvbnMuY2FwdHVyZSh2YWx1ZSwgaXNPdXRzaWRlTWF4ID8gdmFsdWUubWF4IDogdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9ydW4uanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICAgIFJldHVybiBjdXJyZW50IHZhbHVlIGFuZCBpbW1lZGlldGx5IGVuZFxuKi9cblwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgLypcbiAgICAgICAgUHJvY2VzcyBuZXcgdmFsdWVcbiAgICAgICAgXG4gICAgICAgIFJldHVybiBleGlzdGluZyBjdXJyZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCB2YWx1ZVxuICAgICovXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jdXJyZW50O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSGFzIEFjdGlvbiBlbmRlZD9cbiAgICAgICAgXG4gICAgICAgIFJldHVybnMgdHJ1ZSB0byBlbmQgaW1tZWRpZXRseVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IHRydWVcbiAgICAqL1xuICAgIGhhc0VuZGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2ZpcmUuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICAgIFRyYWNrIHVzZXIgaW5wdXRcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIGdlbmVyaWNQYXJzZXIgPSByZXF1aXJlKCcuL2dlbmVyaWMvcGFyc2UtYXJncycpLFxuICAgIFBvaW50ZXIgPSByZXF1aXJlKCcuLi9pbnB1dC9Qb2ludGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgdmFsdWVEZWZhdWx0czogcmVxdWlyZSgnLi90cmFjay9kZWZhdWx0LXZhbHVlLXByb3BzJyksXG5cbiAgICAvKlxuICAgICAgICBQYXJzZSBJbnB1dCBhcmd1bWVudHNcbiAgICAqL1xuICAgIHBhcnNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgICAgaW5wdXQgPSBhcmdzLnBvcCgpLFxuICAgICAgICAgICAgcHJvcHMgPSBnZW5lcmljUGFyc2VyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBQb2ludGVyIGlmIHRoaXMgaXNuJ3QgYW4gSW5wdXRcbiAgICAgICAgcHJvcHMuaW5wdXQgPSAoIWlucHV0LmN1cnJlbnQpID8gbmV3IFBvaW50ZXIoaW5wdXQpIDogaW5wdXQ7XG5cbiAgICAgICAgLy8gU2V0IGlucHV0IG9yaWdpbiBpZiBub3QgdXNlci1kZWZpbmVkXG4gICAgICAgIGlmICghcHJvcHMuaW5wdXRPcmlnaW4pIHtcbiAgICAgICAgICAgIHByb3BzLmlucHV0T3JpZ2luID0gcHJvcHMuaW5wdXQuZ2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBVcGRhdGUgaW5wdXQgb2Zmc2V0XG4gICAgKi9cbiAgICBvbkZyYW1lU3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9IGNhbGMub2Zmc2V0KHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuY3VycmVudCk7XG4gICAgfSxcbiAgICAgICAgXG4gICAgLypcbiAgICAgICAgTW92ZSBWYWx1ZSByZWxhdGl2ZSB0byBJbnB1dCBtb3ZlbWVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgY3VycmVudCB2YWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzOiBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkgPyB2YWx1ZS5vcmlnaW4gKyB0aGlzLmlucHV0T2Zmc2V0W2tleV0gOiB2YWx1ZS5jdXJyZW50O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSGFzIHRoaXMgQWN0aW9uIGVuZGVkPyBcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBGYWxzZSB0byBtYWtlIHVzZXIgbWFudWFsbHkgZmluaXNoIC50cmFjaygpXG4gICAgKi9cbiAgICBoYXNFbmRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdHJhY2suanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICAgIExpbmsgdGhlIGNhbGN1bGF0aW9ucyBvZiBvbiBWYWx1ZSBpbnRvIHRoZSBvdXRwdXQgb2YgYW5vdGhlci5cbiAgICBcbiAgICBBY3RpdmF0ZSBieSBzZXR0aW5nIHRoZSBsaW5rIHByb3BlcnR5IG9mIG9uZSB2YWx1ZSB3aXRoIHRoZSBuYW1lXG4gICAgb2YgZWl0aGVyIGFuIElucHV0IHByb3BlcnR5IG9yIGFub3RoZXIgVmFsdWUuXG4gICAgXG4gICAgTWFwIHRoZSBsaW5rZWQgdmFsdWUgd2l0aCBtYXBMaW5rIGFuZCBwcm92aWRlIGEgY29ycmVzc3BvbmRpbmcgbWFwVG9cbiAgICBhcnJheSB0byB0cmFuc2xhdGUgdmFsdWVzIGZyb20gb25lIGludG8gdGhlIG90aGVyLiBGb3IgaW5zdGFuY2U6XG4gICAgXG4gICAge1xuICAgICAgICBsaW5rOiAneCcsXG4gICAgICAgIG1hcExpbms6IFswLCAxMDAsIDIwMF0sXG4gICAgICAgIG1hcFRvOiBbLTEwMCwgMCwgLTEwMF1cbiAgICB9XG4gICAgXG4gICAgQW4gb3V0cHV0IHZhbHVlIG9mIDUwIGZyb20gJ3gnIHdpbGwgdHJhbnNsYXRlIHRvIC01MCBmb3IgdGhpcyBWYWx1ZVxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjLmpzJyksXG5cbiAgICBTVFJJTkcgPSAnc3RyaW5nJyxcbiAgICBcbiAgICAvKlxuICAgICAgICBUcmFuc2xhdGUgb3VyIG1hcExpbmsgdmFsdWUgaW50byBtYXBUb1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlIGZyb20gbGlua2VkIHZhbHVlXG4gICAgICAgIEBwYXJhbSBbVmFsdWUgfHwgb2JqZWN0XTogTGlua2VkIHZhbHVlIG9yIGVtcHR5IG9iamVjdCBpZiB3ZSdyZSBsaW5raW5nIHRvIGlucHV0XG4gICAgICAgIEBwYXJhbSBbYXJyYXldOiBMaXN0IG9mIG51bWJlcnMgcmVsYXRpbmcgdG8gbGlua2VkIHZhbHVlXG4gICAgICAgIEBwYXJhbSBbYXJyYXldOiBMaXN0IG9mIG51bWJlcnMgcmVsYXRpbmcgdG8gdGhpcyB2YWx1ZVxuICAgICovXG4gICAgZmluZE1hcHBlZFZhbHVlID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBsaW5rZWRWYWx1ZSwgdG9WYWx1ZSwgbWFwTGluaywgbWFwVG8pIHtcbiAgICAgICAgdmFyIG1hcExlbmd0aCA9IG1hcExpbmsubGVuZ3RoLFxuICAgICAgICAgICAgaSA9IDEsXG4gICAgICAgICAgICBsYXN0TGlua1ZhbHVlLFxuICAgICAgICAgICAgdGhpc0xpbmtWYWx1ZSxcbiAgICAgICAgICAgIGxhc3RUb1ZhbHVlLFxuICAgICAgICAgICAgdGhpc1RvVmFsdWU7XG5cbiAgICAgICAgZm9yICg7IGkgPCBtYXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gQXNzaWduIHZhbHVlcyBmcm9tIGFycmF5LCBvciBpZiB0aGV5J3JlIHN0cmluZ3MsIGxvb2sgZm9yIHRoZW0gaW4gbGlua2VkVmFsdWVcbiAgICAgICAgICAgIGxhc3RMaW5rVmFsdWUgPSAodHlwZW9mIG1hcExpbmtbaSAtIDFdID09PSBTVFJJTkcpID8gbGlua2VkVmFsdWVbbWFwTGlua1tpIC0gMV1dIDogbWFwTGlua1tpIC0gMV07XG4gICAgICAgICAgICB0aGlzTGlua1ZhbHVlID0gKHR5cGVvZiBtYXBMaW5rW2ldID09PSBTVFJJTkcpID8gbGlua2VkVmFsdWVbbWFwTGlua1tpXV0gOiBtYXBMaW5rW2ldO1xuICAgICAgICAgICAgbGFzdFRvVmFsdWUgPSAodHlwZW9mIG1hcFRvW2kgLSAxXSA9PT0gU1RSSU5HKSA/IHRvVmFsdWVbbWFwVG9baSAtIDFdXSA6IG1hcFRvW2kgLSAxXTtcbiAgICAgICAgICAgIHRoaXNUb1ZhbHVlID0gKHR5cGVvZiBtYXBUb1tpXSA9PT0gU1RSSU5HKSA/IHRvVmFsdWVbbWFwVG9baV1dIDogbWFwVG9baV07XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlJ3ZlIGdvbmUgcGFzdCBvdXIgY2FsY3VsYXRlZCB2YWx1ZSwgb3IgaWYgd2UncmUgYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXlcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA8IHRoaXNMaW5rVmFsdWUgfHwgaSA9PT0gbWFwTGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gY2FsYy52YWx1ZShjYWxjLnJlc3RyaWN0ZWQoY2FsYy5wcm9ncmVzcyhuZXdWYWx1ZSwgbGFzdExpbmtWYWx1ZSwgdGhpc0xpbmtWYWx1ZSksIDAsIDEpLCBsYXN0VG9WYWx1ZSwgdGhpc1RvVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICB2YWx1ZURlZmF1bHRzOiByZXF1aXJlKCcuL2xpbmsvZGVmYXVsdC12YWx1ZS1wcm9wcycpLFxuXG4gICAgc3VycHJlc3NNZXRob2Q6IHRydWUsXG5cbiAgICAvKlxuICAgICAgICBQcm9jZXNzIHRoaXMgdmFsdWVcbiAgICAgICAgXG4gICAgICAgIEZpcnN0IGNoZWNrIGlmIHRoaXMgdmFsdWUgZXhpc3RzIGFzIGEgVmFsdWUsIGlmIG5vdFxuICAgICAgICBjaGVjayB3aXRoaW4gSW5wdXQgKGlmIHdlIGhhdmUgb25lKVxuICAgICAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbVmFsdWVdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IG9mIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZVxuICAgICovXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzLFxuICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZS5jdXJyZW50LFxuICAgICAgICAgICAgbGlua0tleSA9IHZhbHVlLmxpbmssXG4gICAgICAgICAgICBsaW5rZWRWYWx1ZSA9IHZhbHVlc1tsaW5rS2V5XSA/IHZhbHVlc1tsaW5rS2V5XSA6IHt9LFxuICAgICAgICAgICAgaW5wdXRPZmZzZXQgPSB0aGlzLmlucHV0T2Zmc2V0O1xuXG4gICAgICAgIC8vIFRoZW4gY2hlY2sgdmFsdWVzIGluIElucHV0XG4gICAgICAgIGlmIChpbnB1dE9mZnNldCAmJiBpbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShsaW5rS2V5KSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZS5vcmlnaW4gKyAoaW5wdXRPZmZzZXRbbGlua0tleV0gKiB2YWx1ZS5hbXApO1xuICAgICAgICAgICAgXG4gICAgICAgIC8vIEZpcnN0IGxvb2sgYXQgQWN0aW9uIGFuZCBjaGVjayB2YWx1ZSBpc24ndCBsaW5raW5nIGl0c2VsZlxuICAgICAgICB9IGVsc2UgaWYgKGxpbmtlZFZhbHVlLmN1cnJlbnQgIT09IHVuZGVmaW5lZCAmJiBrZXkgIT09IGxpbmtLZXkpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gbGlua2VkVmFsdWUuY3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgbWFwTGluayBhbmQgbWFwVG8gcHJvcGVydGllcywgdHJhbnNsYXRlIHRoZSBuZXcgdmFsdWVcbiAgICAgICAgaWYgKHZhbHVlLm1hcExpbmsgJiYgdmFsdWUubWFwVG8pIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gZmluZE1hcHBlZFZhbHVlKG5ld1ZhbHVlLCBsaW5rZWRWYWx1ZSwgdmFsdWUsIHZhbHVlLm1hcExpbmssIHZhbHVlLm1hcFRvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICB9LFxuICAgICAgICBcbiAgICBsaW1pdDogZnVuY3Rpb24gKG91dHB1dCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGNhbGMucmVzdHJpY3RlZChvdXRwdXQsIHZhbHVlLm1pbiwgdmFsdWUubWF4KTtcbiAgICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2xpbmsuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDFcbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYWxwaGEuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ2RlZydcbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYW5nbGUuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ3B4J1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9weC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBnZXRDb2xvclZhbHVlcyA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2dldC1jb2xvci12YWx1ZXMnKSxcbiAgICBmdW5jdGlvbkNyZWF0ZSA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWNyZWF0ZScpLFxuICAgIGRlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JykuaHNsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBIdWU6IHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMzYwXG4gICAgICAgIH0sXG4gICAgICAgIFNhdHVyYXRpb246IGRlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgICAgICBMaWdodG5lc3M6IGRlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgICAgICBBbHBoYTogZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZignaHNsJykgPiAtMSk7XG4gICAgfSxcbiAgICBcbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBnZXRDb2xvclZhbHVlcyh2YWx1ZSwgdGVybXMpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbkNyZWF0ZShjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCB0ZXJtcywgJywgJywgMiksICdoc2xhJyk7XG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hzbC5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBnZXRDb2xvclZhbHVlcyA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2dldC1jb2xvci12YWx1ZXMnKSxcbiAgICBmdW5jdGlvbkNyZWF0ZSA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWNyZWF0ZScpLFxuICAgIGRlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpLFxuICAgIGNvbG9yRGVmYXVsdHMgPSBkZWZhdWx0UHJvcHMuY29sb3IsXG4gICAgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5jb2xvcnM7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIFJlZDogY29sb3JEZWZhdWx0cyxcbiAgICAgICAgR3JlZW46IGNvbG9yRGVmYXVsdHMsXG4gICAgICAgIEJsdWU6IGNvbG9yRGVmYXVsdHMsXG4gICAgICAgIEFscGhhOiBkZWZhdWx0UHJvcHMub3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdyZ2InKSA+IC0xKTtcbiAgICB9LFxuICAgIFxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGdldENvbG9yVmFsdWVzKHZhbHVlLCB0ZXJtcyk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uQ3JlYXRlKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnLCAnLCAyKSwgJ3JnYmEnKTtcbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHJnYi5kZWZhdWx0UHJvcHMsXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCcjJykgPiAtMSk7XG4gICAgfSxcbiAgICBcbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByLCBnLCBiO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDIpO1xuICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigzLCAyKTtcbiAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoNSwgMik7XG5cbiAgICAgICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMSk7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDIsIDEpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cigzLCAxKTtcbiAgICAgICAgICAgIHIgKz0gcjtcbiAgICAgICAgICAgIGcgKz0gZztcbiAgICAgICAgICAgIGIgKz0gYjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBSZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICAgICAgICAgIEdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgICAgICAgICBCbHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgICAgICAgICBBbHBoYTogMVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiByZ2IuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIHJnYiA9IHJlcXVpcmUoJy4vcmdiJyksXG4gICAgaHNsID0gcmVxdWlyZSgnLi9oc2wnKSxcbiAgICBoZXggPSByZXF1aXJlKCcuL2hleCcpLFxuICAgIHN1cHBvcnRlZCA9IFtyZ2IsIGhzbCwgaGV4XSxcbiAgICBudW1TdXBwb3J0ZWQgPSAzLFxuXG4gICAgcnVuU3VwcG9ydGVkID0gZnVuY3Rpb24gKG1ldGhvZCwgdmFsdWUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1TdXBwb3J0ZWQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKHN1cHBvcnRlZFtpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWRbaV1bbWV0aG9kXSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogdXRpbHMubWVyZ2UocmdiLmRlZmF1bHRQcm9wcywgaHNsLmRlZmF1bHRQcm9wcyksXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHJnYi50ZXN0KHZhbHVlKSB8fCBoZXgudGVzdCh2YWx1ZSkgfHwgaHNsLnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBydW5TdXBwb3J0ZWQoJ3NwbGl0JywgdmFsdWUpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAodmFsdWVzLlJlZCAhPT0gdW5kZWZpbmVkKSA/IHJnYi5jb21iaW5lKHZhbHVlcykgOiBoc2wuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBweERlZmF1bHRzID0gcmVxdWlyZSgnLi9weCcpLmRlZmF1bHRQcm9wcyxcbiAgICBzcGxpdFNwYWNlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkJyksXG4gICAgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5wb3NpdGlvbnM7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiBweERlZmF1bHRzLFxuICAgICAgICBcbiAgICAvKlxuICAgICAgICBTcGxpdCBwb3NpdGlvbnMgaW4gZm9ybWF0IFwiWCBZIFpcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQb3NpdGlvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjAlIDMwJSAwXCIgLT4gezIwJSwgMzAlLCAwfVxuICAgICAgICAgICAgXCIyMCUgMzAlXCIgLT4gezIwJSwgMzAlfVxuICAgICAgICAgICAgXCIyMCVcIiAtPiB7MjAlLCAyMCV9XG4gICAgKi9cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbnMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKSxcbiAgICAgICAgICAgIG51bVBvc2l0aW9ucyA9IHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgICBzcGxpdFZhbHVlID0ge1xuICAgICAgICAgICAgICAgIFg6IHBvc2l0aW9uc1swXSxcbiAgICAgICAgICAgICAgICBZOiAobnVtUG9zaXRpb25zID4gMSkgPyBwb3NpdGlvbnNbMV0gOiBwb3NpdGlvbnNbMF1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgaWYgKG51bVBvc2l0aW9ucyA+IDIpIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWUuWiA9IHBvc2l0aW9uc1syXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCB0ZXJtcywgJyAnKTtcbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcG9zaXRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5kaW1lbnNpb25zLFxuICAgIHB4RGVmYXVsdHMgPSByZXF1aXJlKCcuL3B4JykuZGVmYXVsdFByb3BzLFxuICAgIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBzcGxpdFNwYWNlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiBweERlZmF1bHRzLFxuICAgIFxuICAgIC8qXG4gICAgICAgIFNwbGl0IGRpbWVuc2lvbnMgaW4gZm9ybWF0IFwiVG9wIFJpZ2h0IEJvdHRvbSBMZWZ0XCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogRGltZW5zaW9uIHZhbHVlc1xuICAgICAgICAgICAgXCIyMHB4IDAgMzBweCA0MHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDQwcHh9XG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHggMFwiIC0+IHsyMHB4LCAwLCAyMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4XCIgLT4gezIwcHgsIDIwcHgsIDIwcHgsIDIwcHh9XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCBUL1IvQi9MIG1ldHJpY3NcbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGRpbWVuc2lvbnMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKSxcbiAgICAgICAgICAgIG51bURpbWVuc2lvbnMgPSBkaW1lbnNpb25zLmxlbmd0aCxcbiAgICAgICAgICAgIGp1bXBCYWNrID0gKG51bURpbWVuc2lvbnMgIT09IDEpID8gMiA6IDEsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGogPSAwLFxuICAgICAgICAgICAgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGZvciAoOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlW3Rlcm1zW2ldXSA9IGRpbWVuc2lvbnNbal07XG5cbiAgICAgICAgICAgIC8vIEp1bXAgYmFjayAodG8gc3RhcnQpIGNvdW50ZXIgaWYgd2UndmUgcmVhY2hlZCB0aGUgZW5kIG9mIG91ciB2YWx1ZXNcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIGogPSAoaiA9PT0gbnVtRGltZW5zaW9ucykgPyBqIC0ganVtcEJhY2sgOiBqO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnICcpO1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9kaW1lbnNpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY29sb3IgPSByZXF1aXJlKCcuL2NvbG9yJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBweERlZmF1bHRzID0gcmVxdWlyZSgnLi9weCcpLmRlZmF1bHRQcm9wcyxcbiAgICB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLnNoYWRvdyxcbiAgICBzcGxpdFNwYWNlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkJyksXG4gICAgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIHNoYWRvd1Rlcm1zID0gdGVybXMuc2xpY2UoMCw0KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHV0aWxzLm1lcmdlKGNvbG9yLmRlZmF1bHRQcm9wcywge1xuICAgICAgICBYOiBweERlZmF1bHRzLFxuICAgICAgICBZOiBweERlZmF1bHRzLFxuICAgICAgICBSYWRpdXM6IHB4RGVmYXVsdHMsXG4gICAgICAgIFNwcmVhZDogcHhEZWZhdWx0c1xuICAgIH0pLFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgc2hhZG93IHByb3BlcnRpZXMgXCJYIFkgUmFkaXVzIFNwcmVhZCBDb2xvclwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFNoYWRvdyBwcm9wZXJ0eVxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBiaXRzID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSksXG4gICAgICAgICAgICBudW1CaXRzID0gYml0cy5sZW5ndGgsXG4gICAgICAgICAgICBoYXNSZWFjaGVkQ29sb3IgPSBmYWxzZSxcbiAgICAgICAgICAgIGNvbG9yUHJvcCA9ICcnLFxuICAgICAgICAgICAgdGhpc0JpdCxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnVtQml0czsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzQml0ID0gYml0c1tpXTtcblxuICAgICAgICAgICAgLy8gSWYgd2UndmUgcmVhY2hlZCB0aGUgY29sb3IgcHJvcGVydHksIGFwcGVuZCB0byBjb2xvciBzdHJpbmdcbiAgICAgICAgICAgIGlmIChoYXNSZWFjaGVkQ29sb3IgfHwgY29sb3IudGVzdCh0aGlzQml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IHRoaXNCaXQ7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3BsaXRWYWx1ZVt0ZXJtc1tpXV0gPSB0aGlzQml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoc3BsaXRWYWx1ZSwgY29sb3Iuc3BsaXQoY29sb3JQcm9wKSk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHNoYWRvd1Rlcm1zLCAnICcpICsgY29sb3IuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSb2xlID0gcmVxdWlyZSgnLi4vUm9sZScpO1xudmFyIGJ1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoO1xuXG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsJ01veicsJ08nLCdtcycsICcnXTtcbnZhciBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbnZhciBwcm9wZXJ0eU5hbWVDYWNoZSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBcbi8qXG4gICAgVGVzdCBzdHlsZSBwcm9wZXJ0eSBmb3IgcHJlZml4ZWQgdmVyc2lvblxuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogU3R5bGUgcHJvcGVydHlcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBDYWNoZWQgcHJvcGVydHkgbmFtZVxuKi9cbnZhciB0ZXN0UHJlZml4ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdGVzdEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICBcbiAgICAgICAgcHJvcGVydHlOYW1lQ2FjaGVba2V5XSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldLFxuICAgICAgICAgICAgICAgIHByZWZpeGVkID0gKHByZWZpeCA9PT0gJycpID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgICAgICAgICBpZiAodGVzdEVsZW1lbnQuc3R5bGUuaGFzT3duUHJvcGVydHkocHJlZml4ZWQpKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lQ2FjaGVba2V5XSA9IHByZWZpeGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcHJvcGVydHlOYW1lQ2FjaGVba2V5XTtcbiAgICB9O1xuXG52YXIgQ1NTUm9sZSA9IG5ldyBSb2xlKHtcblxuICAgIG5hbWU6ICdjc3MnLFxuXG4gICAgX21hcDogcmVxdWlyZSgnLi9tYXAnKSxcbiAgICBfdHlwZU1hcDogcmVxdWlyZSgnLi90eXBlLW1hcCcpLFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGFjdG9yID0gdGhpcztcblxuICAgICAgICBlYWNoKGJ1aWxkKHN0YXRlKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIENTU1JvbGUuc2V0LmNhbGwoYWN0b3IsIGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZ2V0OiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGtleSA9IHByb3BlcnR5TmFtZUNhY2hlW2tleV0gfHwgdGVzdFByZWZpeChrZXkpO1xuXG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQsIG51bGwpW2tleV07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2V0OiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBrZXkgPSBwcm9wZXJ0eU5hbWVDYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTtcblxuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDU1NSb2xlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm9sZXMvY3NzL2Nzc1JvbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSb2xlID0gcmVxdWlyZSgnLi4vUm9sZScpO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoO1xuXG52YXIgQXR0clJvbGUgPSBuZXcgUm9sZSh7XG4gICAgbmFtZTogJ2F0dHInLFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGFjdG9yID0gdGhpcztcblxuICAgICAgICBlYWNoKHN0YXRlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgQXR0clJvbGUuc2V0LmNhbGwoYWN0b3IsIGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZ2V0OiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgfSxcblxuICAgIHNldDogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBdHRyUm9sZTtcblxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yb2xlcy9hdHRyL2F0dHJSb2xlLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUm9sZSA9IHJlcXVpcmUoJy4uL1JvbGUnKTtcbnZhciBjc3NSb2xlID0gcmVxdWlyZSgnLi4vY3NzL2Nzc1JvbGUnKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuZWFjaDtcblxuLypcbiAgICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQZXJjZW50YWdlIG9mIHRvdGFsIGxlbmd0aFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xudmFyIHBlcmNlbnRUb1BpeGVscyA9IGZ1bmN0aW9uIChwZXJjZW50YWdlLCBsZW5ndGgpIHtcbiAgICByZXR1cm4gKHBhcnNlRmxvYXQocGVyY2VudGFnZSkgLyAxMDApICogbGVuZ3RoICsgJ3B4Jztcbn07XG5cbi8qXG4gICAgQ3JlYXRlIHN0eWxlc1xuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogU1ZHIFBhdGggcHJvcGVydGllc1xuICAgIEBwYXJhbSBbb2JqZWN0XTogTGVuZ3RoIG9mIHBhdGhcbiAgICBAcmV0dXJucyBbb2JqZWN0XTogS2V5L3ZhbHVlIHBhaXJzIG9mIHZhbGlkIENTUyBwcm9wZXJ0aWVzXG4qL1xudmFyIGNyZWF0ZVN0eWxlcyA9IGZ1bmN0aW9uIChwcm9wcywgbGVuZ3RoKSB7XG4gICAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlLFxuICAgICAgICBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgICAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlcyA9IHt9O1xuXG4gICAgZWFjaChwcm9wcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAga2V5ID0gU1ZHRHJhd1BhdGguX21hcFtrZXldIHx8IGtleTtcblxuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgICAgIGNhc2UgJ3NwYWNpbmcnOlxuICAgICAgICAgICAgICAgIGhhc0Rhc2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgICAgICAgIHN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGhhc0Rhc2hBcnJheSkge1xuICAgICAgICBzdHlsZXNbU1ZHRHJhd1BhdGguX21hcC5sZW5ndGhdID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG59O1xuXG4vKlxuICAgIERyYXcgUGF0aCByb2xlXG4qL1xudmFyIFNWR0RyYXdQYXRoID0gbmV3IFJvbGUoe1xuICAgIF9tYXA6IHJlcXVpcmUoJy4vbWFwJyksXG5cbiAgICBfdHlwZU1hcDoge1xuICAgICAgICBzdHJva2U6ICdjb2xvcidcbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBhdGhMZW5ndGggPSB0aGlzLmVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIGBwYXRoYCBzdHlsZXMgYW5kIGlmIGBlbGVtZW50YCBpcyBwcmVzZW50LCBzZXRcbiAgICAgICAgeCwgeSBhbmQgcm90YXRpb25cbiAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIGNzc1JvbGUudXBkYXRlLmNhbGwodGhpcywgY3JlYXRlU3R5bGVzKHN0YXRlLCB0aGlzLnBhdGhMZW5ndGgpKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTVkdEcmF3UGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZ2V0QW5nbGUgPSByZXF1aXJlKCcuLi8uLi9pbmMvY2FsYycpLmFuZ2xlO1xuXG52YXIgY2FsY1JvdGF0aW9uID0gZnVuY3Rpb24gKHBhdGgsIHBvaW50LCBkaXN0YW5jZSkge1xuICAgIHZhciB0ZXN0UG9pbnQgPSB0aGlzLnBhdGguZ2V0UG9pbnRBdExlbmd0aChkaXN0YW5jZSArIDAuMik7XG5cbiAgICByZXR1cm4gZ2V0QW5nbGUocG9pbnQsIHRlc3RQb2ludCk7XG59O1xuXG52YXIgU1ZHTW92ZVBhdGhSb2xlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wYXRoTGVuZ3RoID0gdGhpcy5wYXRoLmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IHN0YXRlLnByb2dyZXNzICogdGhpcy5wYXRoTGVuZ3RoLFxuICAgICAgICAgICAgbmV3UG9pbnQgPSB0aGlzLnBhdGguZ2V0UG9pbnRBdExlbmd0aChkaXN0YW5jZSksXG4gICAgICAgICAgICByb3RhdGlvbiA9IHRoaXMuYXV0b1JvdGF0ZSA/IGNhbGNSb3RhdGlvbih0aGlzLnBhdGgsIG5ld1BvaW50LCBkaXN0YW5jZSkgOiBzdGF0ZS5yb3RhdGlvbiB8fCAwO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIG5ld1BvaW50LnggKyAnLCAnICsgbmV3UG9pbnQueSArICcpIHJvdGF0ZSgnICsgcm90YXRpb24gKyAnKScpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU1ZHTW92ZVBhdGhSb2xlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm9sZXMvcGF0aC9tb3ZlUGF0aFJvbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBBY3RvcixcbiAgICBBY3RvckNvbGxlY3Rpb24sXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBnZW5lcmF0ZU1ldGhvZEl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vYWN0b3Ivc3lzdGVtL2dlbmVyYXRlLWl0ZXJhdG9yJyksXG4gICAgZ2VuZXJpY0FjdGlvblByb3BzID0gcmVxdWlyZSgnLi9nZW5lcmljL2RlZmF1bHQtYWN0aW9uLXByb3BzJyksXG4gICAgZ2VuZXJpY1ZhbHVlUHJvcHMgPSByZXF1aXJlKCcuL2dlbmVyaWMvZGVmYXVsdC12YWx1ZS1wcm9wcycpLFxuICAgIGdlbmVyaWNQYXJzZSA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9wYXJzZS1hcmdzJyksXG5cbiAgICBNb2RNYW5hZ2VyID0gcmVxdWlyZSgnLi4vaW5jL01vZE1hbmFnZXInKSxcblxuICAgIGFjdGlvbk1hbmFnZXIgPSBuZXcgTW9kTWFuYWdlcigpO1xuLypcbiAgICBBZGQgbW9kdWxlIHRvIEFjdGlvbk1hbmFnZXJcblxuICAgIENyZWF0ZXMgYSBuZXcgQWN0aW9uIGZvciBBY3RvcnNcbiovXG5hY3Rpb25NYW5hZ2VyLmV4dGVuZCA9IGZ1bmN0aW9uIChuYW1lLCBtb2QpIHtcbiAgICB2YXIgbWV0aG9kTmFtZSA9ICcnLFxuICAgICAgICBwYXJzZTtcblxuICAgIC8qXG4gICAgICAgIEdlbmVyYXRlIG5ldyBtZXRob2QgZm9yIEFjdG9ycyBpZiBtb2R1bGUgZG9lc24ndCBoYXZlIGFcbiAgICAgICAgc3VycHJlc3NNZXRob2QgZmxhZyBhbmQgQWN0b3IgZG9lc24ndCBhbHJlYWR5IGhhdmUgYVxuICAgICAgICBtZXRob2Qgd2l0aCB0aGF0IG5hbWVcbiAgICAqL1xuICAgIGlmICghbW9kLnN1cnByZXNzTWV0aG9kICYmICFBY3Rvci5wcm90b3R5cGVbbmFtZV0pIHtcbiAgICAgICAgcGFyc2UgPSBtb2QucGFyc2UgfHwgZ2VuZXJpY1BhcnNlO1xuXG4gICAgICAgIEFjdG9yLnByb3RvdHlwZVtuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gbmFtZTtcbiAgICAgICAgICAgIHRoaXMuc2V0KHBhcnNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIEFjdG9yQ29sbGVjdGlvbi5wcm90b3R5cGVbbmFtZV0gPSBnZW5lcmF0ZU1ldGhvZEl0ZXJhdG9yKG5hbWUpO1xuICAgIH1cblxuICAgIC8vIElmIG1vZHVsZSBoYXMgbWV0aG9kcyB0byBhZGQgdG8gQWN0b3IucHJvdG90eXBlXG4gICAgaWYgKG1vZC5hY3Rvck1ldGhvZHMpIHtcbiAgICAgICAgZm9yIChtZXRob2ROYW1lIGluIG1vZC5hY3Rvck1ldGhvZHMpIHtcbiAgICAgICAgICAgIGlmIChtb2QuYWN0b3JNZXRob2RzLmhhc093blByb3BlcnR5KG1ldGhvZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgQWN0b3IucHJvdG90eXBlW21ldGhvZE5hbWVdID0gbW9kLmFjdG9yTWV0aG9kc1ttZXRob2ROYW1lXTtcbiAgICAgICAgICAgICAgICBBY3RvckNvbGxlY3Rpb24ucHJvdG90eXBlW21ldGhvZE5hbWVdID0gZ2VuZXJhdGVNZXRob2RJdGVyYXRvcihtZXRob2ROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1lcmdlIGFjdGlvbiBwcm9wcyB3aXRoIGRlZmF1bHRzXG4gICAgbW9kLmFjdGlvbkRlZmF1bHRzID0gbW9kLmFjdGlvbkRlZmF1bHRzID8gdXRpbHMubWVyZ2UoZ2VuZXJpY0FjdGlvblByb3BzLCBtb2QuYWN0aW9uRGVmYXVsdHMpIDogZ2VuZXJpY0FjdGlvblByb3BzO1xuXG4gICAgLy8gTWVyZ2UgdmFsdWUgcHJvcHMgd2l0aCBkZWZhdWx0c1xuICAgIG1vZC52YWx1ZURlZmF1bHRzID0gbW9kLnZhbHVlRGVmYXVsdHMgPyB1dGlscy5tZXJnZShnZW5lcmljVmFsdWVQcm9wcywgbW9kLnZhbHVlRGVmYXVsdHMpIDogZ2VuZXJpY1ZhbHVlUHJvcHM7XG5cbiAgICAvLyBDYWxsIHBhcmVudCBleHRlbmQgbWV0aG9kXG4gICAgTW9kTWFuYWdlci5wcm90b3R5cGUuZXh0ZW5kLmNhbGwodGhpcywgbmFtZSwgbW9kKTtcbn07XG5cbmFjdGlvbk1hbmFnZXIuc2V0QWN0b3IgPSBmdW5jdGlvbiAoYWN0b3IpIHtcbiAgICBBY3RvciA9IGFjdG9yO1xufTtcblxuYWN0aW9uTWFuYWdlci5zZXRBY3RvckNvbGxlY3Rpb24gPSBmdW5jdGlvbiAoYWN0b3JDb2xsZWN0aW9uKSB7XG4gICAgQWN0b3JDb2xsZWN0aW9uID0gYWN0b3JDb2xsZWN0aW9uO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhY3Rpb25NYW5hZ2VyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL21hbmFnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIE1vZE1hbmFnZXIgPSByZXF1aXJlKCcuLi9pbmMvTW9kTWFuYWdlcicpLFxuICAgIHByZXNldE1hbmFnZXIgPSBuZXcgTW9kTWFuYWdlcigpLFxuXG4gICAgRE9UID0gJy4nLFxuXG4gICAgZ2VuZXJhdGVLZXlzID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIga2V5cyA9IGtleS5zcGxpdChET1QpLFxuICAgICAgICAgICAgbnVtS2V5cyA9IGtleXMubGVuZ3RoLFxuICAgICAgICAgICAgbGFzdEtleSA9IGtleXNbMF0sXG4gICAgICAgICAgICBpID0gMTtcblxuICAgICAgICBmb3IgKDsgaSA8IG51bUtleXM7IGkrKykge1xuICAgICAgICAgICAga2V5c1tpXSA9IGxhc3RLZXkgKz0gRE9UICsga2V5c1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH07XG5cbi8qXG4gICAgR2V0IGRlZmluZWQgYWN0aW9uXG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBUaGUgbmFtZSBvZiB0aGUgcHJlZGVmaW5lZCBhY3Rpb25cbiovXG5wcmVzZXRNYW5hZ2VyLmdldERlZmluZWQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBwcm9wcyA9IHt9LFxuICAgICAgICB0aGlzUHJvcCA9IHt9LFxuICAgICAgICBrZXlzID0gZ2VuZXJhdGVLZXlzKG5hbWUpLFxuICAgICAgICBudW1LZXlzID0ga2V5cy5sZW5ndGgsXG4gICAgICAgIGkgPSAwO1xuXG4gICAgZm9yICg7IGkgPCBudW1LZXlzOyBpKyspIHtcbiAgICAgICAgdGhpc1Byb3AgPSB0aGlzW2tleXNbaV1dO1xuXG4gICAgICAgIGlmICh0aGlzUHJvcCkge1xuICAgICAgICAgICAgcHJvcHMgPSB1dGlscy5tZXJnZShwcm9wcywgdGhpc1Byb3ApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwcmVzZXRNYW5hZ2VyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0b3IvcHJlc2V0LW1hbmFnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBNb2RNYW5hZ2VyID0gcmVxdWlyZSgnLi4vaW5jL01vZE1hbmFnZXInKSxcbiAgICB2YWx1ZVR5cGVNYW5hZ2VyID0gbmV3IE1vZE1hbmFnZXIoKTtcblxudmFsdWVUeXBlTWFuYWdlci5kZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiAodHlwZSwga2V5KSB7XG4gICAgdmFyIHZhbHVlVHlwZSA9IHRoaXNbdHlwZV0sXG4gICAgICAgIGRlZmF1bHRQcm9wcyA9ICh2YWx1ZVR5cGUuZGVmYXVsdFByb3BzKSA/IHZhbHVlVHlwZS5kZWZhdWx0UHJvcHNba2V5XSB8fCB2YWx1ZVR5cGUuZGVmYXVsdFByb3BzIDoge307XG5cbiAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xufTtcblxudmFsdWVUeXBlTWFuYWdlci50ZXN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBmYWxzZTtcblxuICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoa2V5LCBtb2QpIHtcbiAgICAgICAgaWYgKG1vZC50ZXN0ICYmIG1vZC50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdHlwZSA9IGtleTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHR5cGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbHVlVHlwZU1hbmFnZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUHJvY2VzcyA9IHJlcXVpcmUoJy4uL3Byb2Nlc3MvUHJvY2VzcycpLFxuICAgIFF1ZXVlID0gcmVxdWlyZSgnLi4vaW5jL1F1ZXVlJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICB1cGRhdGUgPSByZXF1aXJlKCcuL3VwZGF0ZScpLFxuICAgIHZhbHVlT3BzID0gcmVxdWlyZSgnLi92YWx1ZS1vcGVyYXRpb25zJyksXG4gICAgYWN0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvbWFuYWdlcicpLFxuICAgIGRlZmF1bHRSb2xlID0gcmVxdWlyZSgnLi4vcm9sZXMvZGVmYXVsdFJvbGUnKSxcbiAgICBjc3NSb2xlID0gcmVxdWlyZSgnLi4vcm9sZXMvY3NzL2Nzc1JvbGUnKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaCxcblxuICAgIEFjdG9yID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgdmFyIGFjdG9yID0gdGhpcyxcbiAgICAgICAgICAgIHJvbGVzID0gWyBkZWZhdWx0Um9sZSBdO1xuXG4gICAgICAgIC8vIFNldCB2YWx1ZXMgb2JqZWN0IGFuZCBzdGF0ZSBvYmplY3RcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlczoge31cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJbml0IHF1ZXVlIGFuZCBwcm9jZXNzXG4gICAgICAgIHRoaXMucXVldWUgPSBuZXcgUXVldWUoKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzID0gbmV3IFByb2Nlc3ModGhpcywgdXBkYXRlKTtcblxuICAgICAgICAvLyBEZXRlY3QvYWRkIHJvbGVzXG4gICAgICAgIGlmIChvcHRzKSB7XG4gICAgICAgICAgICB0aGlzLnNldChvcHRzKTtcblxuICAgICAgICAgICAgLy8gQXV0by1kZXRlY3QgZWxlbWVudCB0eXBlLCBpZiBwcmVzZW50IGFuZCBubyByb2xlcyBkZWZpbmVkXG4gICAgICAgICAgICBpZiAoIW9wdHMuYXMgJiYgb3B0cy5lbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIENTUyByb2xlIGlmIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGVzLnB1c2goY3NzUm9sZSk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdHMuZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1hbnVhbGwgYWRkaW5nIHJvbGVzXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdHMuYXMpIHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNBcnJheShvcHRzLmFzKSkge1xuICAgICAgICAgICAgICAgICAgICByb2xlcy5wdXNoLmFwcGx5KHJvbGVzLCBvcHRzLmFzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb2xlcy5wdXNoKG9wdHMuYXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm9sZXMgPSByb2xlcztcbiAgICAgICAgdGhpcy5yb2xlcy5mb3JFYWNoKGZ1bmN0aW9uIChyb2xlKSB7XG4gICAgICAgICAgICAvLyBGaXJlIGluaXQgbWV0aG9kIGlmIG9uZSBhdmFpbGFibGVcbiAgICAgICAgICAgIGlmIChyb2xlLmluaXQpIHtcbiAgICAgICAgICAgICAgICByb2xlLmluaXQuY2FsbChhY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbkFjdG9yLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBTZXQgQWN0aW9uIHZhbHVlcyBhbmQgcHJvcGVydGllc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBFbGVtZW50IHByb3BlcnRpZXNcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddIChvcHRpb24pOiBOYW1lIG9mIGRlZmF1bHQgdmFsdWUgcHJvcGVydHlcbiAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gKHByb3BzLCBkZWZhdWx0VmFsdWVQcm9wKSB7XG4gICAgICAgIC8vIFJlc2V0IEVsZW1lbnQgcHJvcGVydGllcyBhbmQgd3JpdGUgbmV3IHByb3BzXG4gICAgICAgIHRoaXMuY2xlYXJPcmRlcigpO1xuICAgICAgICB0aGlzLnJlc2V0UHJvcHMoKTtcblxuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcHMocHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMocHJvcHMudmFsdWVzLCBkZWZhdWx0VmFsdWVQcm9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTdGFydCBjdXJyZW50bHkgZGVmaW5lZCBBY3Rpb25cbiAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVzZXRQcm9ncmVzcygpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5hY3Rpb24gIT09ICd0cmFjaycgJiYgdGhpcy5pbnB1dCAmJiB0aGlzLmlucHV0LnN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFN0b3AgY3VycmVudCBBY3Rpb25cbiAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZS5jbGVhcigpO1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBQYXVzZSBjdXJyZW50IEFjdGlvblxuICAgICovXG4gICAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2Nlc3Muc3RvcCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgUmVzdW1lIHBhdXNlZCBBY3Rpb25cbiAgICAqL1xuICAgIHJlc3VtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmZyYW1lc3RhbXAgPSB0aGlzLnN0YXJ0ZWQgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzLnN0YXJ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBUb2dnbGUgY3VycmVudCBBY3Rpb25cbiAgICAqL1xuICAgIHRvZ2dsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXN1bWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQWN0aXZhdGUgRWxlbWVudCBBY3Rpb25cbiAgICAqL1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB1dGlscy5jdXJyZW50VGltZSgpICsgdGhpcy5kZWxheTtcbiAgICAgICAgdGhpcy5mcmFtZXN0YW1wID0gdGhpcy5zdGFydGVkO1xuICAgICAgICB0aGlzLmZpcnN0RnJhbWUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMucHJvY2Vzcy5zdGFydCgpO1xuICAgIH0sXG5cbiAgICByZXNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlc2V0UHJvZ3Jlc3MoKTtcbiAgICAgICAgdmFsdWVPcHMuYWxsKCdyZXNldCcsIHRoaXMudmFsdWVzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFJlc2V0IEFjdGlvbiBwcm9ncmVzc1xuICAgICovXG4gICAgcmVzZXRQcm9ncmVzczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAodGhpcy5wbGF5RGlyZWN0aW9uID09PSAxKSA/IDAgOiB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgTG9vcCB0aHJvdWdoIGFsbCB2YWx1ZXMgYW5kIGNyZWF0ZSBvcmlnaW4gcG9pbnRzXG4gICAgKi9cbiAgICByZXNldE9yaWdpbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFsdWVPcHMuYWxsKCdyZXNldE9yaWdpbicsIHRoaXMudmFsdWVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBSZXZlcnNlIEFjdGlvbiBwcm9ncmVzcyBhbmQgdmFsdWVzXG4gICAgKi9cbiAgICByZXZlcnNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICAgICAgdmFsdWVPcHMuYWxsKCdyZXRhcmdldCcsIHRoaXMudmFsdWVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTd2FwIHZhbHVlIG9yaWdpbnMgYW5kIHRvXG4gICAgKi9cbiAgICBmbGlwVmFsdWVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG4gICAgICAgIHZhbHVlT3BzLmFsbCgnZmxpcCcsIHRoaXMudmFsdWVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFNldCBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBQcm9wZXJ0aWVzIHRvIHNldFxuICAgICovXG4gICAgc2V0UHJvcHM6IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzO1xuXG4gICAgICAgIGVhY2gocHJvcHMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAndmFsdWVzJykge1xuICAgICAgICAgICAgICAgIGFjdG9yW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFJlc2V0IHByb3BlcnRpZXMgdG8gQWN0aW9uIGRlZmF1bHRzXG4gICAgKi9cbiAgICByZXNldFByb3BzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9wcyhhY3Rpb25NYW5hZ2VyW3RoaXMuYWN0aW9uXS5hY3Rpb25EZWZhdWx0cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFNldCB2YWx1ZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdCB8fCBzdHJpbmcgfHwgbnVtYmVyXTogVmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddIChvcHRpb25hbCk6IERlZmF1bHQgcHJvcGVydHkgdG8gc2V0XG4gICAgKi9cbiAgICBzZXRWYWx1ZXM6IGZ1bmN0aW9uICh2YWx1ZXMsIGRlZmF1bHRWYWx1ZVByb3ApIHtcbiAgICAgICAgdmFsdWVPcHMucHJvY2Vzcyh2YWx1ZXMsIHRoaXMsIGRlZmF1bHRWYWx1ZVByb3ApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFVwZGF0ZSBvcmRlciBvZiB2YWx1ZSBrZXlzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSBvZiB2YWx1ZVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dOiBXaGV0aGVyIHRvIG1vdmUgdmFsdWUgdG8gYmFja1xuICAgICovXG4gICAgdXBkYXRlT3JkZXI6IGZ1bmN0aW9uIChrZXksIG1vdmVUb0JhY2ssIGhhc0NoaWxkcmVuKSB7XG4gICAgICAgIHZhciBvcmRlciA9ICFoYXNDaGlsZHJlbiA/IHRoaXMub3JkZXIgOiB0aGlzLnBhcmVudE9yZGVyLFxuICAgICAgICAgICAgcG9zaXRpb24gPSBvcmRlci5pbmRleE9mKGtleSk7XG5cbiAgICAgICAgLy8gSWYga2V5IGlzbid0IGluIGxpc3QsIG9yIG1vdmVUb0JhY2sgaXMgc2V0IHRvIHRydWUsIGFkZCBrZXlcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAtMSB8fCBtb3ZlVG9CYWNrKSB7XG4gICAgICAgICAgICBvcmRlci5wdXNoKGtleSk7XG5cbiAgICAgICAgICAgIC8vIElmIGtleSBhbHJlYWR5IGV4aXN0cywgcmVtb3ZlXG4gICAgICAgICAgICBpZiAocG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgb3JkZXIuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBDbGVhciB2YWx1ZSBrZXkgdXBkYXRlIG9yZGVyXG4gICAgKi9cbiAgICBjbGVhck9yZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMub3JkZXIgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnRPcmRlciA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gW2Jvb2xlYW5dOiBJcyB0aGlzIEVsZW1lbnQgY3VycmVudGx5IGFjdGl2ZT9cbiAgICBnZXQgaXNBY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgU2V0IEVsZW1lbnQgYWN0aXZlIHN0YXR1c1xuXG4gICAgICAgIElmIGFjdGl2ZSBpcyBiZWluZyBzZXQgdG8gdHJ1ZSwgc2V0IGhhc0NoYW5nZWQgdG8gdHJ1ZSwgdG9vXG5cbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogTmV3IGFjdGl2ZSBzdGF0dXNcbiAgICAqL1xuICAgIHNldCBpc0FjdGl2ZShzdGF0dXMpIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gc3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXNBY3RpdmUgPSBzdGF0dXM7XG4gICAgfVxufTtcblxuLy8gUmVnaXN0ZXIgQWN0b3Igd2l0aCBhY3Rpb25NYW5hZ2VyLCBzbyB3aGVuIGEgbmV3IEFjdGlvbiBpcyBzZXQsXG4vLyBXZSBnZXQgYSBuZXcgbWV0aG9kIG9uIEFjdG9yXG5hY3Rpb25NYW5hZ2VyLnNldEFjdG9yKEFjdG9yKTtcblxubW9kdWxlLmV4cG9ydHMgPSBBY3RvcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdG9yL0FjdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgQWN0b3IgPSByZXF1aXJlKCcuL0FjdG9yJyksXG4gICAgZ2VuZXJhdGVNZXRob2RJdGVyYXRvciA9IHJlcXVpcmUoJy4vc3lzdGVtL2dlbmVyYXRlLWl0ZXJhdG9yJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBhY3Rpb25NYW5hZ2VyID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9tYW5hZ2VyJyksXG5cbiAgICBERUZBVUxUX1NUQUdHRVJfRUFTRSA9ICdsaW5lYXInLFxuXG4gICAgLypcbiAgICAgICAgQWN0b3JDb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG5cbiAgICAgICAgQHBhcmFtIFthcnJheV06IEFycmF5IG9mIEFjdG9ycywgb3IgdmFsaWQgQWN0b3IgZWxlbWVudHNcbiAgICAqL1xuICAgIEFjdG9yQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIChlbGVtZW50cywgb3B0cykge1xuICAgICAgICAvLyBBZGQgaW5pdGlhbCBlbGVtZW50c1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChlbGVtZW50cywgb3B0cyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgc3RhZ2dlciBBY3RvclxuICAgICAgICB0aGlzLl9zdGFnZ2VyID0gbmV3IEFjdG9yKCk7XG4gICAgfTtcblxuQWN0b3JDb2xsZWN0aW9uLnByb3RvdHlwZSA9IHtcblxuICAgIC8qXG4gICAgICAgIENsZWFyIGN1cnJlbnQgQWN0b3JzXG4gICAgKi9cbiAgICBjbGVhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTdGFnZ2VyIHRoZSBleGVjdXRpb24gb2YgRWxlbWVudCBtZXRob2RzXG5cbiAgICAgICAgQHBhcmFtIFtudW1iZXIgfHwgb2JqZWN0XTogSW50ZXJ2YWwgYmV0d2VlbiBFbGVtZW50cyBvciBzdGFnZ2VyIG9wdGlvbnNcbiAgICAgICAgQHBhcmFtIFtzdHJpbmcgfHwgZnVuY3Rpb25dOiBOYW1lIG9mIG1ldGhvZCB0byBleGVjdXRlIG9yIGEgY2FsbGJhY2tcbiAgICAgICAgQGFyZ3MgLi4uIChvcHRpb25hbCk6IE9wdGlvbmFsIGFyZ3VtZW50cyB0byBzZW5kIHRvIGNhbGxiYWNrXG4gICAgKi9cbiAgICBzdGFnZ2VyOiBmdW5jdGlvbiAocHJvcHMsIG1ldGhvZCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgICAgbnVtRWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIHByb3BzSXNOdW0gPSB1dGlscy5pc051bShwcm9wcyksXG4gICAgICAgICAgICBpbnRlcnZhbCA9IHByb3BzSXNOdW0gPyBwcm9wcyA6IHByb3BzLmludGVydmFsLFxuICAgICAgICAgICAgc3RhZ2dlclByb3BzID0gcHJvcHNJc051bSA/IHt9IDogcHJvcHMsXG4gICAgICAgICAgICBpID0gLTEsXG5cbiAgICAgICAgICAgIGNhbGxiYWNrID0gdXRpbHMuaXNTdHJpbmcobWV0aG9kKSA/XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGFjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdG9yW21ldGhvZF0uYXBwbHkoYWN0b3IsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gOiBtZXRob2Q7XG5cbiAgICAgICAgYXJncy5zcGxpY2UoMCwgMik7XG5cbiAgICAgICAgc3RhZ2dlclByb3BzLnZhbHVlcyA9IHtcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIG51bUVsZW1lbnRzLFxuICAgICAgICAgICAgICAgIGVhc2U6IHByb3BzSXNOdW0gPyBERUZBVUxUX1NUQUdHRVJfRUFTRSA6IHByb3BzLmVhc2UgfHwgREVGQVVMVF9TVEFHR0VSX0VBU0UsXG4gICAgICAgICAgICAgICAgc3RlcHM6IG51bUVsZW1lbnRzLFxuICAgICAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvOiBudW1FbGVtZW50cyAtIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzdGFnZ2VyUHJvcHMub25VcGRhdGUgPSBmdW5jdGlvbiAob3V0cHV0KSB7XG4gICAgICAgICAgICB2YXIgbmV3SW5kZXggPSBvdXRwdXQuaSxcbiAgICAgICAgICAgICAgICBnYXBJbmRleCA9IGkgKyAxO1xuXG4gICAgICAgICAgICAvLyBJZiBvdXIgbmV3IGluZGV4IGlzIG9ubHkgb25lIG1vcmUgdGhhbiB0aGUgcHJldmlvdXMgaW5kZXgsIGZpcmUgaW1tZWRpZXRseVxuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID09PSBpICsgMSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHNlbGYuZWxlbWVudHNbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG5cbiAgICAgICAgICAgIC8vIE9yIGxvb3AgdGhyb3VnaCB0aGUgZGlzdGFuY2UgdG8gZmlyZSBhbGwgaW5kZWNpZXMuIEluY3JlYXNlIGRlbGF5LlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKDsgZ2FwSW5kZXggPD0gbmV3SW5kZXg7IGdhcEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soc2VsZi5lbGVtZW50c1tnYXBJbmRleF0sIGdhcEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGkgPSBuZXdJbmRleDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9zdGFnZ2VyLnBsYXkoc3RhZ2dlclByb3BzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgSXRlcmF0ZSBvdmVyIGVhY2ggZWxlbWVudCBpbiBjb2xsZWN0aW9uXG5cbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IENhbGxiYWNrIHRvIHJ1biBvbiBlYWNoIEFjdG9yLCBwcm92aWRlZCAoYWN0b3IsIGluZGV4KSBhcmdzXG4gICAgKi9cbiAgICBlYWNoOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEFkZCBhIGdyb3VwIG9mIEFjdG9ycyB0byBvdXIgQ29sbGVjdGlvblxuXG4gICAgICAgIEBwYXJhbSBbYXJyYXldOiBBcnJheSBvZiBBY3RvcnMsIG9yIHZhbGlkIEFjdG9yIGVsZW1lbnRzXG4gICAgKi9cbiAgICBhZGQ6IGZ1bmN0aW9uIChlbGVtZW50cywgb3B0cykge1xuICAgICAgICB2YXIgbnVtTmV3RWxlbWVudHMgPSBlbGVtZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIG5ld0VsZW1lbnQ7XG5cbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgICAgICAgZm9yICg7IGkgPCBudW1OZXdFbGVtZW50czsgaSsrKSB7XG4gICAgICAgICAgICBvcHRzLmVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQgPSAoZWxlbWVudHNbaV0gaW5zdGFuY2VvZiBBY3RvcikgPyBlbGVtZW50c1tpXSA6IG5ldyBBY3RvcihvcHRzKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMucHVzaChuZXdFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbi8vIEluaXRpYWxpc2UgQWN0b3JDb2xsZWN0aW9uIG1ldGhvZHNcbihmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgbWV0aG9kIGluIEFjdG9yLnByb3RvdHlwZSkge1xuICAgICAgICBpZiAoQWN0b3IucHJvdG90eXBlLmhhc093blByb3BlcnR5KG1ldGhvZCkpIHtcbiAgICAgICAgICAgIEFjdG9yQ29sbGVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXSA9IGdlbmVyYXRlTWV0aG9kSXRlcmF0b3IobWV0aG9kKTtcbiAgICAgICAgfVxuICAgIH1cbn0pKCk7XG5cbmFjdGlvbk1hbmFnZXIuc2V0QWN0b3JDb2xsZWN0aW9uKEFjdG9yQ29sbGVjdGlvbik7XG5cbm1vZHVsZS5leHBvcnRzID0gQWN0b3JDb2xsZWN0aW9uO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0b3IvQWN0b3JDb2xsZWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXG4gICAgSW5wdXQgY29udHJvbGxlclxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjLmpzJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMuanMnKSxcbiAgICBIaXN0b3J5ID0gcmVxdWlyZSgnLi4vaW5jL0hpc3RvcnkuanMnKSxcblxuICAgIC8qXG4gICAgICAgIElucHV0IGNvbnN0cnVjdG9yXG4gICAgICAgIFxuICAgICAgICAgICAgU3ludGF4XG4gICAgICAgICAgICAgICAgbmV3SW5wdXQobmFtZSwgdmFsdWVbLCBwb2xsXSlcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHRvIHRyYWNrXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogSW5pdGlhbCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXSAob3B0aW9uYWwpOiBGdW5jdGlvbiB0byBwb2xsIElucHV0IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbmV3SW5wdXQocHJvcHNbLCBwb2xsXSlcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3Qgb2YgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dIChvcHRpb25hbCk6IEZ1bmN0aW9uIHRvIHBvbGwgSW5wdXQgZGF0YVxuXG4gICAgICAgIEByZXR1cm4gW0lucHV0XVxuICAgICovXG4gICAgSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwb2xsUG9zID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50ID0ge307XG4gICAgICAgIHRoaXMub2Zmc2V0ID0ge307XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7fTtcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEhpc3RvcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuYyhhcmd1bWVudHNbcG9sbFBvc10pKSB7XG4gICAgICAgICAgICB0aGlzLnBvbGwgPSBhcmd1bWVudHNbcG9sbFBvc107XG4gICAgICAgIH1cbiAgICB9O1xuXG5JbnB1dC5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLy8gW251bWJlcl06IE51bWJlciBvZiBmcmFtZXMgb2YgaW5hY3Rpdml0eSBiZWZvcmUgdmVsb2NpdHkgaXMgdHVybmVkIHRvIDBcbiAgICBtYXhJbmFjdGl2ZUZyYW1lczogMixcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogTnVtYmVyIG9mIGZyYW1lcyBpbnB1dCBoYXNuJ3QgYmVlbiB1cGRhdGVkXG4gICAgaW5hY3RpdmVGcmFtZXM6IDAsXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGxhdGVzdCBpbnB1dCB2YWx1ZXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXSAob3B0aW9uYWwpOiBOYW1lIG9mIHNwZWNpZmljIHByb3BlcnR5IHRvIHJldHVyblxuICAgICAgICBAcmV0dXJuIFtvYmplY3QgfHwgbnVtYmVyXTogTGF0ZXN0IGlucHV0IHZhbHVlcyBvciwgaWYgc3BlY2lmaWVkLCBzaW5nbGUgdmFsdWVcbiAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgdmFyIGxhdGVzdCA9IHRoaXMuaGlzdG9yeS5nZXQoKSxcbiAgICAgICAgICAgIHZhbCA9IChwcm9wICE9PSB1bmRlZmluZWQpID8gbGF0ZXN0W3Byb3BdIDogbGF0ZXN0O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIHRoZSBpbnB1dCB2YWx1ZXNcbiAgICAgICAgXG4gICAgICAgIFN5bnRheFxuICAgICAgICAgICAgaW5wdXQudXBkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiB0byB0cmFja1xuICAgICAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogSW5pdGlhbCB2YWx1ZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaW5wdXQudXBkYXRlKHByb3BzKVxuICAgICAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IG9mIHZhbHVlc1xuICAgICAgICAgICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtJbnB1dF1cbiAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHt9O1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bShhcmcxKSkge1xuICAgICAgICAgICAgdmFsdWVzW2FyZzBdID0gYXJnMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IGFyZzA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhpc3RvcnkuYWRkKHV0aWxzLm1lcmdlKHRoaXMuY3VycmVudCwgdmFsdWVzKSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIENoZWNrIGZvciBpbnB1dCBtb3ZlbWVudCBhbmQgdXBkYXRlIHBvaW50ZXIgb2JqZWN0J3MgcHJvcGVydGllc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaW1lc3RhbXAgb2YgZnJhbWVcbiAgICAgICAgQHJldHVybiBbSW5wdXRdXG4gICAgKi9cbiAgICBvbkZyYW1lOiBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBsYXRlc3QsIGhhc0NoYW5nZWQ7XG4gICAgICAgIFxuICAgICAgICAvLyBDaGVjayBwcm92aWRlZCB0aW1lc3RhbXAgYWdhaW5zdCBsYXN0RnJhbWUgdGltZXN0YW1wIGFuZCByZXR1cm4gaW5wdXQgaGFzIGFscmVhZHkgYmVlbiB1cGRhdGVkXG4gICAgICAgIGlmICh0aW1lc3RhbXAgPT09IHRoaXMubGFzdEZyYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxhdGVzdCA9ICh0aGlzLnBvbGwpID8gdGhpcy5wb2xsKCkgOiB0aGlzLmhpc3RvcnkuZ2V0KCk7XG4gICAgICAgIGhhc0NoYW5nZWQgPSB1dGlscy5oYXNDaGFuZ2VkKHRoaXMuY3VycmVudCwgbGF0ZXN0KTtcblxuICAgICAgICAvLyBJZiBpbnB1dCBoYXMgY2hhbmdlZCBiZXR3ZWVuIGZyYW1lcyAgXG4gICAgICAgIGlmIChoYXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gY2FsYy5vZmZzZXQodGhpcy5jdXJyZW50LCBsYXRlc3QpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gbGF0ZXN0O1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG5cbiAgICAgICAgLy8gT3IgaXQgaGFzbid0IG1vdmVkIGFuZCBvdXIgZnJhbWUgbGltaXQgaGFzIGJlZW4gcmVhY2hlZFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IGNhbGMub2Zmc2V0KHRoaXMuY3VycmVudCwgdGhpcy5jdXJyZW50KTtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIGlucHV0IGhhc24ndCBjaGFuZ2VkXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzKys7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubGFzdEZyYW1lID0gdGltZXN0YW1wO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L0lucHV0LmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpLFxuXG4gICAgLypcbiAgICAgICAgUHJvY2VzcyBjb25zdHJ1Y3RvclxuICAgICAgICBcbiAgICAgICAgU3ludGF4XG4gICAgICAgICAgICB2YXIgcHJvY2VzcyA9IG5ldyBQcm9jZXNzKHNjb3BlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB2YXIgcHJvY2VzcyA9IG5ldyBQcm9jZXNzKGNhbGxiYWNrKTtcbiAgICAqL1xuICAgIFByb2Nlc3MgPSBmdW5jdGlvbiAoc2NvcGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBoYXNTY29wZSA9IChjYWxsYmFjayAhPT0gdW5kZWZpbmVkKTtcblxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gaGFzU2NvcGUgPyBjYWxsYmFjayA6IHNjb3BlO1xuICAgICAgICB0aGlzLnNjb3BlID0gaGFzU2NvcGUgPyBzY29wZSA6IHRoaXM7XG4gICAgICAgIHRoaXMuaWQgPSBtYW5hZ2VyLnJlZ2lzdGVyKCk7XG5cbiAgICAgICAgLy8gW2Jvb2xlYW5dOiBJcyB0aGlzIHByb2Nlc3MgY3VycmVudGx5IGFjdGl2ZT9cbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG5cblByb2Nlc3MucHJvdG90eXBlID0ge1xuICAgIC8qXG4gICAgICAgIEZpcmUgY2FsbGJhY2tcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbdGltZXN0YW1wXTogVGltZXN0YW1wIG9mIGN1cnJlbnRseS1leGVjdXRlZCBmcmFtZVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuICAgICovXG4gICAgZmlyZTogZnVuY3Rpb24gKHRpbWVzdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrLmNhbGwodGhpcy5zY29wZSwgdGltZXN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHdlJ3JlIHJ1bm5pbmcgYXQgYW4gaW50ZXJ2YWwsIGRlYWN0aXZhdGUgYWdhaW5cbiAgICAgICAgaWYgKHRoaXMuaXNJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0YXJ0IHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogRHVyYXRpb24gb2YgcHJvY2VzcyBpbiBtcywgMCBpZiBpbmRlZmluaXRlXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdG9wVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0b3AoKTtcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5pc1N0b3BUaW1lckFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0b3AgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQWN0aXZhdGUgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICBtYW5hZ2VyLmFjdGl2YXRlKHRoaXMsIHRoaXMuaWQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRGVhY3RpdmF0ZSBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIG1hbmFnZXIuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRmlyZSBwcm9jZXNzIGV2ZXJ5IHggbXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIG1zIHRvIHdhaXQgYmV0d2VlbiByZWZpcmluZyBwcm9jZXNzLlxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgZXZlcnk6IGZ1bmN0aW9uIChpbnRlcnZhbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuXG4gICAgICAgIHRoaXMuaXNJbnRlcnZhbCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5hY3RpdmF0ZSgpO1xuICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlzSW50ZXJ2YWxUaW1lQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQ2xlYXIgYWxsIHRpbWVyc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFxuICAgICovXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0ludGVydmFsID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5pc1N0b3BUaW1lckFjdGl2ZSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RvcFRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuaXNJbnRlcnZhbFRpbWVBY3RpdmUpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbFRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9jZXNzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy9Qcm9jZXNzLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBCZXppZXIgPSByZXF1aXJlKCcuL0JlemllcicpLFxuXG4gICAgLypcbiAgICAgICAgTWlycm9yIGVhc2luZ1xuICAgICAgICBcbiAgICAgICAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICAgICAgICBlYXNlSW4gaW50byBhbiBlYXNlSW5PdXRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gbWlycm9yXG4gICAgICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4gICAgKi9cbiAgICBtaXJyb3JFYXNpbmcgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIG1ldGhvZCkge1xuICAgICAgICByZXR1cm4gKHByb2dyZXNzIDw9IDAuNSkgPyBtZXRob2QoMiAqIHByb2dyZXNzKSAvIDIgOiAoMiAtIG1ldGhvZCgyICogKDEgLSBwcm9ncmVzcykpKSAvIDI7XG4gICAgfSxcbiAgICAgICAgICAgIFxuICAgIC8qXG4gICAgICAgIFJldmVyc2UgZWFzaW5nXG4gICAgICAgIFxuICAgICAgICBSZXZlcnNlcyB0aGUgb3V0cHV0IG9mIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgZm9yIGZsaXBwaW5nIGVhc2VJblxuICAgICAgICBjdXJ2ZSB0byBhbiBlYXNlT3V0LlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byByZXZlcnNlXG4gICAgICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4gICAgKi9cbiAgICByZXZlcnNlRWFzaW5nID0gZnVuY3Rpb24gKHByb2dyZXNzLCBtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBtZXRob2QoMSAtIHByb2dyZXNzKTtcbiAgICB9O1xuXG4vKlxuICAgIEVhc2luZyBjbGFzc1xuXG4gICAgSWYgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCByZXR1cm5zIGVhc2luZyBmdW5jdGlvbiB3aXRoIFxuICAgIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5cbiAgICBJZiBwcm92aWRlZCBmb3VyIGFyZ3VtZW50cywgcmV0dXJucyBuZXcgQmV6aWVyIGNsYXNzIGluc3RlYWQuXG4qL1xudmFyIEVhc2luZyA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5Mikge1xuICAgIHZhciBtZXRob2QgPSB4MSxcbiAgICAgICAgZWFzaW5nRnVuY3Rpb247XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgYmV6aWVyIGN1cnZlLCByZXR1cm4gYSBiZXppZXIgZnVuY3Rpb25cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSBuZXcgQmV6aWVyKHgxLCB5MSwgeDIsIHkyKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBlYXNpbmdGdW5jdGlvbi5pbiA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZWFzaW5nRnVuY3Rpb24ub3V0ID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gcmV2ZXJzZUVhc2luZyhwcm9ncmVzcywgbWV0aG9kKTtcbiAgICAgICAgfTtcblxuICAgICAgICBlYXNpbmdGdW5jdGlvbi5pbk91dCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIG1pcnJvckVhc2luZyhwcm9ncmVzcywgbWV0aG9kKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWFzaW5nRnVuY3Rpb247XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVhc2luZztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcGxheS9FYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG52YXIgZWFjaCA9IHV0aWxzLmVhY2g7XG5cbi8qXG4gICAgUm9sZSBjbGFzcyBjb25zdHJ1Y3RvclxuXG4gICAgQHBhcmFtIFtvYmplY3RdOiBPcHRpb25hbCBtZXRob2RzIGFuZCBwcm9wcyB0byBhZGQ6XG4gICAgICAgIG5hbWUgW3N0cmluZ106ICAgICAgTmFtZSBvZiBnZW5lcmF0ZWQgZ2V0dGVyL3NldHRlciBtZXRob2Qgb24gQWN0b3JcbiAgICAgICAgX21hcCBbb2JqZWN0XTogICAgICBNYXAgQWN0b3IgdmFsdWVzIHRvIHRoZXNlIHZhbHVlcyBmb3IgdGhpcyBSb2xlXG4gICAgICAgIF90eXBlTWFwIFtvYmplY3RdOiAgTWFwIHZhbHVlcyB0byB2YWx1ZSB0eXBlc1xuICAgICAgICBpbml0IFtmdW5jdGlvbl06ICAgIENhbGxiYWNrIHRvIHJ1biB3aGVuIHRoaXMgUm9sZSBpcyBhZGRlZCB0byBhbiBBY3RvclxuICAgICAgICBzdGFydCBbZnVuY3Rpb25dOiAgIENhbGxiYWNrIHRvIHJ1biB3aGVuIGhvc3QgQWN0b3Igc3RhcnRzIGFuIGFjdGlvblxuICAgICAgICBjb21wbGV0ZSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBydW4gd2hlbiBhY3Rpb24gY29tcGxldGVzXG4gICAgICAgIGZyYW1lIFtmdW5jdGlvbl06ICAgQ2FsbGJhY2sgdG8gZmlyZSBvbmNlIHBlciBmcmFtZVxuICAgICAgICB1cGRhdGUgW2Z1bmN0aW9uXTogIENhbGxiYWNrIHRvIGZpcmUgd2hlbiB2YWx1ZXMgY2hhbmdlXG4gICAgICAgIGdldCBbZnVuY3Rpb25dOiAgICAgUmVhZCB2YWx1ZSBmcm9tIGFjdHVhbCBlbGVtZW50XG4gICAgICAgIHNldCBbZnVuY3Rpb25dOiAgICAgU2V0IHZhbHVlIG9uIGFjdHVhbCBlbGVtZW50XG4qL1xudmFyIFJvbGUgPSBmdW5jdGlvbiAobWV0aG9kcykge1xuICAgIHZhciByb2xlID0gdGhpcztcblxuICAgIHJvbGUuX21hcCA9IHt9O1xuXG4gICAgZWFjaChtZXRob2RzLCBmdW5jdGlvbiAobmFtZSwgbWV0aG9kKSB7XG4gICAgICAgIHJvbGVbbmFtZV0gPSAoIXV0aWxzLmlzT2JqKG1ldGhvZCkpID8gbWV0aG9kIDogdXRpbHMuY29weShtZXRob2QpO1xuICAgIH0pO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBuZXcgcm9sZVxuXG4gICAgQHBhcmFtIFtvYmplY3RdOiBPcHRpb25hbCBtZXRob2RzIGFuZCBwcm9wcyB0byBhZGRcbiAgICBAcGFyYW0gW3ZhbHVlc1RvTWFwXTogT3ZlcnJpZGUgZXhpc3RpbmcgbWFwIHdpdGggdGhlc2UgdmFsdWVzXG4gICAgQHJldHVybiBbUm9sZV06IE5ldyBSb2xlXG4qL1xudmFyIGNyZWF0ZVJvbGUgPSBmdW5jdGlvbiAobWV0aG9kcywgdmFsdWVzKSB7XG4gICAgdmFyIG5ld1JvbGUgPSBuZXcgUm9sZShtZXRob2RzKTtcblxuICAgIGVhY2godmFsdWVzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBuZXdSb2xlLl9tYXBba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld1JvbGU7XG59O1xuXG5Sb2xlLnByb3RvdHlwZSA9IHtcblxuICAgIC8qXG4gICAgICAgIE1hcCB2YWx1ZSBrZXlzIG9yIGdlbmVyYXRlIG5ldyBSb2xlIHdpdGggdXBkYXRlZCBtYXBcblxuICAgICAgICBHZXR0ZXI6XG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byBtYXBcbiAgICAgICAgICAgIEByZXR1cm4gW3N0cmluZ106IE1hcHBlZCBrZXksIG9yIGtleSBpZiBubyBtYXBwZWQga2V5IGZvdW5kXG5cbiAgICAgICAgU2V0dGVyOiBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogTWFwIG9mIEFjdG9yIGtleXMgLT4gUm9sZSBrZXlzXG4gICAgICAgICAgICBAcmV0dXJuIFtSb2xlXTogTmV3IFJvbGUgd2l0aCB1bmlxdWUgbWFwXG4gICAgKi9cbiAgICBtYXA6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHN0cmluZywgZ2V0IG1hcHBlZCB2YWx1ZVxuICAgICAgICAvLyBPdGhlcndpc2UgdGhpcyBpcyBhIG1hcCwgZHVwbGljYXRlZCByb2xlIHdpdGggdXBkYXRlZCBtYXBcbiAgICAgICAgcmV0dXJuICh1dGlscy5pc1N0cmluZyh2YWx1ZXMpKSA/IHRoaXMuX21hcFt2YWx1ZXNdIHx8IHZhbHVlcyA6IGNyZWF0ZVJvbGUodGhpcywgdmFsdWVzKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvbGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yb2xlcy9Sb2xlLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgQWN0b3JDb2xsZWN0aW9uID0gcmVxdWlyZSgnLi9BY3RvckNvbGxlY3Rpb24nKTtcblxuLypcbiAgICBDcmVhdGUgYW4gQWN0b3JDb2xsZWN0aW9uIGJhc2VkIG9uIGEgc2VsZWN0aW9uIG9mIERPTSBub2Rlc1xuXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3QgfHwgalF1ZXJ5IG9iamVjdF06XG4gICAgICAgIElmIHN0cmluZywgdHJlYXRlZCBhcyBzZWxlY3Rvci5cbiAgICAgICAgSWYgbm90LCB0cmVhdGVkIGFzIHByZWV4aXN0aW5nIE5vZGVMaXN0IHx8IGpRdWVyeSBvYmplY3QuXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIG9wdHMpIHtcbiAgICB2YXIgbm9kZXMgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yLFxuICAgICAgICBlbGVtZW50cyA9IFtdO1xuXG4gICAgLy8gSWYgalF1ZXJ5IHNlbGVjdGlvbiwgZ2V0IGFycmF5IG9mIEVsZW1lbnRzXG4gICAgaWYgKG5vZGVzLmdldCkge1xuICAgICAgICBlbGVtZW50cyA9IG5vZGVzLmdldCgpO1xuXG4gICAgLy8gT3IgY29udmVydCBOb2RlTGlzdCB0byBhcnJheVxuICAgIH0gZWxzZSBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChub2Rlcyk7XG5cbiAgICAvLyBPciBpZiBpdCdzIGp1c3QgYW4gRWxlbWVudCwgcHV0IGludG8gYXJyYXlcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50cy5wdXNoKG5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEFjdG9yQ29sbGVjdGlvbihlbGVtZW50cywgb3B0cyk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0b3Ivc2VsZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXG4gICAgQ2FsY3VsYXRvcnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgU2ltcGxlIEkvTyBzbmlwcGV0c1xuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyksXG5cbiAgICBjYWxjID0ge1xuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICAgICAgICAgICAgYXJlIGF0IDAsMCwgdGhlbiByZXR1cm4gdGhlIGFuZ2xlIHVzaW5nIC5hbmdsZUZyb21DZW50ZXIoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgICAgICAgICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuICAgICAgICAqL1xuICAgICAgICBhbmdsZTogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgICAgICB2YXIgZnJvbSA9IHBvaW50QiA/IHBvaW50QSA6IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgICAgICB0byA9IHBvaW50QiB8fCBwb2ludEEsXG4gICAgICAgICAgICAgICAgcG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHRvLnggLSBmcm9tLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRvLnkgLSBmcm9tLnlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbmdsZUZyb21DZW50ZXIocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIEFuZ2xlIGZyb20gY2VudGVyXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGN1cnJlbnQgYW5nbGUsIGluIHJhZGlhbnMsIG9mIGEgZGVmaW5lZCBwb2ludFxuICAgICAgICAgICAgZnJvbSBhIGNlbnRlciAoYXNzdW1lZCAwLDApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogWCBjb29yZGluYXRlIG9mIHNlY29uZCBwb2ludFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBZIGNvb3JkaW5hdGUgb2Ygc2Vjb25kIHBvaW50XG4gICAgICAgICAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIDAsIDAgYW5kIHBvaW50IGluIHJhZGlhbnNcbiAgICAgICAgKi9cbiAgICAgICAgYW5nbGVGcm9tQ2VudGVyOiBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKHksIHgpKTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgICAgICAgKi9cbiAgICAgICAgZGVncmVlc1RvUmFkaWFuczogZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgRGlsYXRlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGEgLS0tLS0tLS0tIGJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYSAtLS0tIGJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiAgICAgICAgKi9cbiAgICAgICAgZGlsYXRlOiBmdW5jdGlvbiAoYSwgYiwgZGlsYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBhICsgKChiIC0gYSkgKiBkaWxhdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIERpc3RhbmNlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gKDAsMCkgYW5kIHBvaW50QSwgdW5sZXNzIHBvaW50QlxuICAgICAgICAgICAgaXMgcHJvdmlkZWQsIHRoZW4gd2UgcmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHR3by5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgZGlzdGFuY2U6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgcG9pbnRBID09PSBcIm51bWJlclwiKSA/IHRoaXMuZGlzdGFuY2UxRChwb2ludEEsIHBvaW50QikgOiB0aGlzLmRpc3RhbmNlMkQocG9pbnRBLCBwb2ludEIpO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRGlzdGFuY2UgMURcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiBwb2ludCBBIGFuZCBwb2ludCBCXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUG9pbnQgQVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiAob3B0aW9uYWwpOiBQb2ludCBCXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICAgICAqL1xuICAgICAgICBkaXN0YW5jZTFEOiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgICAgIHZhciBiSXNOdW0gPSAodHlwZW9mIHBvaW50QiA9PT0gJ251bWJlcicpLFxuICAgICAgICAgICAgICAgIGZyb20gPSBiSXNOdW0gPyBwb2ludEEgOiAwLFxuICAgICAgICAgICAgICAgIHRvID0gYklzTnVtID8gcG9pbnRCIDogcG9pbnRBO1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIGFic29sdXRlKHRvIC0gZnJvbSk7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIERpc3RhbmNlIDJEXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gKDAsMCkgYW5kIHBvaW50IEEsIHVubGVzcyBwb2ludCBCXG4gICAgICAgICAgICBpcyBwcm92aWRlZCwgdGhlbiB3ZSByZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdHdvLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IHggYW5kIHkgb2YgcG9pbnQgQVxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9mIHBvaW50IEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gICAgICAgICovXG4gICAgICAgIGRpc3RhbmNlMkQ6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAgICAgdmFyIGJJc09iaiA9ICh0eXBlb2YgcG9pbnRCID09PSBcIm9iamVjdFwiKSxcbiAgICAgICAgICAgICAgICBmcm9tID0gYklzT2JqID8gcG9pbnRBIDoge3g6IDAsIHk6IDB9LFxuICAgICAgICAgICAgICAgIHRvID0gYklzT2JqID8gcG9pbnRCIDogcG9pbnRBLFxuICAgICAgICAgICAgICAgIHBvaW50ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBhYnNvbHV0ZSh0by54IC0gZnJvbS54KSxcbiAgICAgICAgICAgICAgICAgICAgeTogYWJzb2x1dGUodG8ueSAtIGZyb20ueSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHlwb3RlbnVzZShwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgSHlwb3RlbnVzZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBoeXBvdGVudXNlLCBzaWRlIEMsIGdpdmVuIHRoZSBsZW5ndGhzIG9mIHNpZGVzIEEgYW5kIEIuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4gICAgICAgICovXG4gICAgICAgIGh5cG90ZW51c2U6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICB2YXIgYTIgPSBhICogYSxcbiAgICAgICAgICAgICAgICBiMiA9IGIgKiBiLFxuICAgICAgICAgICAgICAgIGMyID0gYTIgKyBiMjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoYzIpO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIE9mZnNldCBiZXR3ZWVuIHR3byBpbnB1dHNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQ2FsY3VsYXRlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIGRpZmZlcmVudCBpbnB1dHNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IGlucHV0XG4gICAgICAgICAgICBAcGFyYW0gW1BvaW50XTogU2Vjb25kIGlucHV0XG4gICAgICAgICAgICBAcmV0dXJuIFtPZmZzZXRdOiBEaXN0YW5jZSBtZXRyaWNzIGJldHdlZW4gdHdvIHBvaW50c1xuICAgICAgICAqL1xuICAgICAgICBvZmZzZXQ6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0ge307XG4gICAgXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgICAgICAgICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0W2tleV0gPSBiW2tleV0gLSBhW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRba2V5XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNOdW0ob2Zmc2V0LngpICYmIGlzTnVtKG9mZnNldC55KSkge1xuICAgICAgICAgICAgICAgIG9mZnNldC5hbmdsZSA9IHRoaXMuYW5nbGUoYSwgYik7XG4gICAgICAgICAgICAgICAgb2Zmc2V0LmRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZTJEKGEsIGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICAgICAgICAgICAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuICAgICAgICAqL1xuICAgICAgICBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlOiBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgICAgICAgICAgIHZhciBwb2ludCA9IHt9O1xuICAgIFxuICAgIFx0XHRwb2ludC54ID0gZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueDtcbiAgICAgICAgICAgIHBvaW50LnkgPSBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55O1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gICAgICAgICAgICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgICAgICAgICAgIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBpZiBmdWxsIHJhbmdlIGdpdmVuLCB1cHBlciBpZiBub3RcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgKi9cbiAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uICh2YWx1ZSwgbGltaXRBLCBsaW1pdEIpIHtcbiAgICAgICAgICAgIHZhciBiSXNOdW0gPSAodHlwZW9mIGxpbWl0QiA9PT0gJ251bWJlcicpLFxuICAgICAgICAgICAgICAgIGZyb20gPSBiSXNOdW0gPyBsaW1pdEEgOiAwLFxuICAgICAgICAgICAgICAgIHRvID0gYklzTnVtID8gbGltaXRCIDogbGltaXRBLFxuICAgICAgICAgICAgICAgIHJhbmdlID0gdG8gLSBmcm9tLFxuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gKHZhbHVlIC0gZnJvbSkgLyByYW5nZTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBwcm9ncmVzcztcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgICAgICAgKi9cbiAgICAgICAgcmFkaWFuc1RvRGVncmVlczogZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgICAgICAgICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgUmV0dXJuIHJhbmRvbSBudW1iZXIgYmV0d2VlbiByYW5nZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWF4aW11bVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuICAgICAgICAqL1xuICAgICAgICByYW5kb206IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgICAgICAgICAgbWluID0gaXNOdW0obWluKSA/IG1pbiA6IDA7XG4gICAgICAgICAgICBtYXggPSBpc051bShtYXgpID8gbWF4IDogMTtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgICAgICAgICAgIHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IE5ldyB2YWx1ZVxuICAgICAgICAqL1xuICAgICAgICByZWxhdGl2ZVZhbHVlOiBmdW5jdGlvbiAoY3VycmVudCwgcmVsKSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBjdXJyZW50LFxuICAgICAgICAgICAgICAgIGVxdWF0aW9uID0gcmVsLnNwbGl0KCc9JyksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IgPSBlcXVhdGlvblswXSxcbiAgICAgICAgICAgICAgICBzcGxpdFZhbCA9IHV0aWxzLnNwbGl0VmFsVW5pdChlcXVhdGlvblsxXSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgKz0gc3BsaXRWYWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSAtPSBzcGxpdFZhbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlICo9IHNwbGl0VmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgLz0gc3BsaXRWYWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoc3BsaXRWYWwudW5pdCkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlICs9IHNwbGl0VmFsLnVuaXQ7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgICAgIH0sXG4gICAgXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBSZXN0cmljdCB2YWx1ZSB0byByYW5nZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm4gdmFsdWUgd2l0aGluIHRoZSByYW5nZSBvZiBsb3dlckxpbWl0IGFuZCB1cHBlckxpbWl0XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8ga2VlcCB3aXRoaW4gcmFuZ2VcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGxpbWl0ZWQgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgICAgICovXG4gICAgICAgIHJlc3RyaWN0ZWQ6IGZ1bmN0aW9uICh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICAgICAgICAgIHZhciByZXN0cmljdGVkID0gKG1pbiAhPT0gdW5kZWZpbmVkKSA/IE1hdGgubWF4KHZhbHVlLCBtaW4pIDogdmFsdWU7XG4gICAgICAgICAgICByZXN0cmljdGVkID0gKG1heCAhPT0gdW5kZWZpbmVkKSA/IE1hdGgubWluKHJlc3RyaWN0ZWQsIG1heCkgOiByZXN0cmljdGVkO1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJlc3RyaWN0ZWQ7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4gICAgICAgICovXG4gICAgICAgIHNwZWVkUGVyRnJhbWU6IGZ1bmN0aW9uICh4cHMsIGZyYW1lRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAoaXNOdW0oeHBzKSkgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiAgICAgICAgKi9cbiAgICAgICAgc3BlZWRQZXJTZWNvbmQ6IGZ1bmN0aW9uICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICAgICAgICAgICAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZSwgb3IgdXBwZXIgaWYgbGltaXQyIG5vdCBwcm92aWRlZFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4gICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAocHJvZ3Jlc3MsIGxpbWl0QSwgbGltaXRCKSB7XG4gICAgICAgICAgICB2YXIgYklzTnVtID0gKHR5cGVvZiBsaW1pdEIgPT09ICdudW1iZXInKSxcbiAgICAgICAgICAgICAgICBmcm9tID0gYklzTnVtID8gbGltaXRBIDogMCxcbiAgICAgICAgICAgICAgICB0byA9IGJJc051bSA/IGxpbWl0QiA6IGxpbWl0QTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiAoLSBwcm9ncmVzcyAqIGZyb20pICsgKHByb2dyZXNzICogdG8pICsgZnJvbTsgXG4gICAgICAgIH0sXG4gICAgXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBFYXNlZCB2YWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICAgICAgICAgICAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZSwgb3IgdXBwZXIgaWYgbGltaXQyIG5vdCBwcm92aWRlZFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IEVhc2luZyB0byBhcHBseSB0byB2YWx1ZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuICAgICAgICAqL1xuICAgICAgICB2YWx1ZUVhc2VkOiBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNpbmcpIHtcbiAgICAgICAgICAgIHZhciBlYXNlZFByb2dyZXNzID0gZWFzaW5nKHByb2dyZXNzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUoZWFzZWRQcm9ncmVzcywgZnJvbSwgdG8pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIENhY2hpbmcgZnVuY3Rpb25zIHVzZWQgbXVsdGlwbGUgdGltZXMgdG8gcmVkdWNlIGZpbGVzaXplIGFuZCBpbmNyZWFzZSBwZXJmb3JtYW5jZVxuICAgICovXG4gICAgaXNOdW0gPSB1dGlscy5pc051bSxcbiAgICBhYnNvbHV0ZSA9IE1hdGguYWJzO1xuICAgIFxubW9kdWxlLmV4cG9ydHMgPSBjYWxjO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2NhbGMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcbiAgICBVdGlsaXR5IGZ1bmN0aW9uc1xuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgcHJvdGVjdGVkUHJvcGVydGllcyA9IFsnc2NvcGUnLCAgJ2RvbSddLFxuICAgIFxuICAgIGlzUHJvdGVjdGVkID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gKHByb3RlY3RlZFByb3BlcnRpZXMuaW5kZXhPZihrZXkpICE9PSAtMSk7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4gICAgKi9cbiAgICB2YXJUeXBlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIC8qXG4gICAgICAgIEl0ZXJhdGUgb3ZlciBhbiBvYmplY3QgYW5kIGZpcmUgYSBjYWxsYmFjayBmb3IgZXZlcnkgaXRlbSBpbiBpdFxuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogUHJvcGVydGllc1xuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgdG8gZmlyZVxuICAgICovXG4gICAgZWFjaDogZnVuY3Rpb24gKHByb3BzLCBjYWxsYmFjaykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soa2V5LCBwcm9wc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSGFzIG9uZSBvYmplY3QgY2hhbmdlZCBmcm9tIHRoZSBvdGhlclxuICAgICAgICBcbiAgICAgICAgQ29tcGFyZXMgdGhlIHR3byBwcm92aWRlZCBpbnB1dHMgYW5kIHJldHVybnMgdHJ1ZSBpZiB0aGV5IGFyZSBkaWZmZXJlbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEJcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4gICAgKi9cbiAgICBoYXNDaGFuZ2VkOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlLFxuICAgICAgICAgICAga2V5ID0gJyc7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gYikge1xuICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gaGFzQ2hhbmdlZDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGEgbnVtYmVyP1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuICAgICovXG4gICAgaXNOdW06IGZ1bmN0aW9uIChudW0pIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgbnVtID09PSAnbnVtYmVyJyk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhbiBvYmplY3Q/XG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4gICAgKi9cbiAgICBpc09iajogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHRoaXMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuICAgICovXG4gICAgaXNGdW5jOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiAodmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nKTsgXG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhIHN0cmluZyA/IFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiAgICAqL1xuICAgIGlzU3RyaW5nOiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpOyBcbiAgICB9LFxuXG5cbiAgICAvKlxuICAgICAgICBJcyB0aGlzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSWYgdGhpcyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuICAgICovXG4gICAgaXNSZWxhdGl2ZVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDApO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYW4gYXJyYXkgPyBcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHRoaXMudmFyVHlwZSA9PT0gJ0FycmF5J1xuICAgICovXG4gICAgaXNBcnJheTogZnVuY3Rpb24gKGFycikge1xuICAgICAgICByZXR1cm4gKHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5Jyk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBDb3B5IG9iamVjdCBvciBhcnJheVxuICAgICAgICBcbiAgICAgICAgQ2hlY2tzIHdoZXRoZXIgYmFzZSBpcyBhbiBhcnJheSBvciBvYmplY3QgYW5kIG1ha2VzXG4gICAgICAgIGFwcHJvcHJpYXRlIGNvcHlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogQXJyYXkgb3Igb2JqZWN0IHRvIGNvcHlcbiAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBOZXcgY29weSBvZiBhcnJheSBvciBvYmplY3RcbiAgICAqL1xuICAgIGNvcHk6IGZ1bmN0aW9uIChiYXNlKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5pc0FycmF5KGJhc2UpKSA/IHRoaXMuY29weUFycmF5KGJhc2UpIDogdGhpcy5jb3B5T2JqZWN0KGJhc2UpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRGVlcCBjb3B5IGFuIG9iamVjdFxuICAgICAgICBcbiAgICAgICAgSXRlcmF0ZXMgb3ZlciBhbiBvYmplY3QgYW5kIGNyZWF0ZXMgYSBuZXcgY29weSBvZiBldmVyeSBpdGVtLFxuICAgICAgICBkZWVwIGNvcHlpbmcgaWYgaXQgZmluZHMgYW55IG9iamVjdHMvYXJyYXlzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byBjb3B5XG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogTmV3IGNvcHkgb2Ygb2JqZWN0XG4gICAgKi9cbiAgICBjb3B5T2JqZWN0OiBmdW5jdGlvbiAoYmFzZSkge1xuICAgICAgICB2YXIgbmV3T2JqZWN0ID0ge307XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYmFzZSkge1xuICAgICAgICAgICAgaWYgKGJhc2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gKHRoaXMuaXNPYmooYmFzZVtrZXldKSAmJiAhaXNQcm90ZWN0ZWQoa2V5KSkgPyB0aGlzLmNvcHkoYmFzZVtrZXldKSA6IGJhc2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld09iamVjdDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIERlZXAgY29weSBhbiBhcnJheVxuICAgICAgICBcbiAgICAgICAgTG9vcHMgdGhyb3VnaCBhbiBhcnJheSBhbmQgY3JlYXRlcyBhIG5ldyBjb3B5IG9mIGV2ZXJ5IGl0ZW0sXG4gICAgICAgIGRlZXAgY29weWluZyBpZiBpdCBmaW5kcyBhbnkgb2JqZWN0cy9hcnJheXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbYXJyYXldOiBBcnJheSB0byBjb3B5XG4gICAgICAgIEByZXR1cm4gW2FycmF5XTogTmV3IGNvcHkgb2YgYXJyYXlcbiAgICAqL1xuICAgIGNvcHlBcnJheTogZnVuY3Rpb24gKGJhc2UpIHtcbiAgICAgICAgdmFyIG5ld0FycmF5ID0gW10sXG4gICAgICAgICAgICBsZW5ndGggPSBiYXNlLmxlbmd0aCxcbiAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICBcbiAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV3QXJyYXlbaV0gPSAodGhpcy5pc09iaihiYXNlW2ldKSkgPyB0aGlzLmNvcHkoYmFzZVtpXSkgOiBiYXNlW2ldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBOb24tZGVzdHJ1Y3RpdmUgbWVyZ2Ugb2Ygb2JqZWN0IG9yIGFycmF5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byB1c2UgYXMgYmFzZVxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byBvdmVyd3JpdGUgYmFzZSB3aXRoXG4gICAgICAgIEByZXR1cm4gW2FycmF5IHx8IG9iamVjdF06IE5ldyBhcnJheSBvciBvYmplY3RcbiAgICAqL1xuICAgIG1lcmdlOiBmdW5jdGlvbiAoYmFzZSwgb3ZlcndyaXRlKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5pc0FycmF5KGJhc2UpKSA/IHRoaXMuY29weUFycmF5KG92ZXJ3cml0ZSkgOiB0aGlzLm1lcmdlT2JqZWN0KGJhc2UsIG92ZXJ3cml0ZSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBOb24tZGVzdHJ1Y3RpdmUgbWVyZ2Ugb2Ygb2JqZWN0XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byB1c2UgYXMgYmFzZVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byBvdmVyd3JpdGUgYmFzZSB3aXRoXG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE5ldyBvYmplY3RcbiAgICAqL1xuICAgIG1lcmdlT2JqZWN0OiBmdW5jdGlvbiAoYmFzZSwgb3ZlcndyaXRlKSB7XG4gICAgICAgIHZhciBoYXNCYXNlID0gdGhpcy5pc09iaihiYXNlKSxcbiAgICAgICAgICAgIG5ld09iamVjdCA9IGhhc0Jhc2UgPyB0aGlzLmNvcHkoYmFzZSkgOiB0aGlzLmNvcHkob3ZlcndyaXRlKSxcbiAgICAgICAgICAgIGtleSA9ICcnO1xuXG4gICAgICAgIGlmIChoYXNCYXNlKSB7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBvdmVyd3JpdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAob3ZlcndyaXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSAodGhpcy5pc09iaihvdmVyd3JpdGVba2V5XSkgJiYgIWlzUHJvdGVjdGVkKGtleSkpID8gdGhpcy5tZXJnZShiYXNlW2tleV0sIG92ZXJ3cml0ZVtrZXldKSA6IG92ZXJ3cml0ZVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgICAgICAgXG4gICAgICAgICAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgICAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiAgICAqL1xuICAgIHNwbGl0VmFsVW5pdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBzcGxpdFZhbCA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbFsxXSksXG4gICAgICAgICAgICB1bml0OiAgc3BsaXRWYWxbMl1cbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4gICAgKi9cbiAgICBzdGVwUHJvZ3Jlc3M6IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RlcHMpIHtcbiAgICAgICAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSksXG4gICAgICAgICAgICB0YXJnZXQgPSAxIC0gKDEgLyBzdGVwcyksXG4gICAgICAgICAgICBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuICAgICovXG4gICAgY3VycmVudFRpbWU6IGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiKSA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfVxuICAgIFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi8uLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyksXG4gICAgc3BlZWRQZXJGcmFtZSA9IGNhbGMuc3BlZWRQZXJGcmFtZTtcblxuLypcbiAgICBBZGQgY29yZSBwaHlzaWNzIHNpbXVsYXRpb25zXG4qL1xudmFyIHNpbXVsYXRpb25zID0ge1xuICAgIC8qXG4gICAgICAgIFZlbG9jaXR5XG4gICAgICAgIFxuICAgICAgICBUaGUgZGVmYXVsdCAucnVuKCkgc2ltdWxhdGlvbi5cbiAgICAgICAgXG4gICAgICAgIEFwcGxpZXMgYW55IHNldCBkZWNlbGVyYXRpb24gYW5kIGFjY2VsZXJhdGlvbiB0byBleGlzdGluZyB2ZWxvY2l0eVxuICAgICovXG4gICAgdmVsb2NpdHk6IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFsdWUudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eSAtIHNwZWVkUGVyRnJhbWUodmFsdWUuZGVjZWxlcmF0aW9uLCBkdXJhdGlvbikgKyBzcGVlZFBlckZyYW1lKHZhbHVlLmFjY2VsZXJhdGlvbiwgZHVyYXRpb24pO1xuXG4gICAgICAgIHJldHVybiBzaW11bGF0aW9ucy5mcmljdGlvbih2YWx1ZSwgZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBHbGlkZVxuICAgICAgICBcbiAgICAgICAgRW11bGF0ZXMgdG91Y2ggZGV2aWNlIHNjcm9sbGluZyBlZmZlY3RzIHdpdGggZXhwb25lbnRpYWwgZGVjYXlcbiAgICAgICAgaHR0cDovL2FyaXlhLm9maWxhYnMuY29tLzIwMTMvMTEvamF2YXNjcmlwdC1raW5ldGljLXNjcm9sbGluZy1wYXJ0LTIuaHRtbFxuICAgICovXG4gICAgZ2xpZGU6IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24sIHN0YXJ0ZWQpIHtcbiAgICAgICAgdmFyIHRpbWVVbnRpbEZpbmlzaGVkID0gLSB1dGlscy5jdXJyZW50VGltZSgpIC0gc3RhcnRlZCxcbiAgICAgICAgICAgIGRlbHRhID0gLSB2YWx1ZS50byAqIE1hdGguZXhwKHRpbWVVbnRpbEZpbmlzaGVkIC8gdmFsdWUudGltZUNvbnN0YW50KTtcblxuICAgICAgICByZXR1cm4gKHZhbHVlLnRvICsgZGVsdGEpIC0gdmFsdWUuY3VycmVudDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgRnJpY3Rpb25cblxuICAgICAgICBBcHBseSBmcmljdGlvbiB0byB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICBUT0RPOiBNYWtlIHRoaXMgZnJhbWVyYXRlLWluZGVwZW5kZW50XG4gICAgKi9cbiAgICBmcmljdGlvbjogZnVuY3Rpb24gKHZhbHVlLCBkdXJhdGlvbikge1xuICAgICAgICB2YXIgbmV3VmVsb2NpdHkgPSBzcGVlZFBlckZyYW1lKHZhbHVlLnZlbG9jaXR5LCBkdXJhdGlvbikgKiAoMSAtIHZhbHVlLmZyaWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gY2FsYy5zcGVlZFBlclNlY29uZChuZXdWZWxvY2l0eSwgZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICBzcHJpbmc6IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gdmFsdWUudG8gLSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IGRpc3RhbmNlICogc3BlZWRQZXJGcmFtZSh2YWx1ZS5zcHJpbmcsIGR1cmF0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBzaW11bGF0aW9ucy5mcmljdGlvbih2YWx1ZSwgZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICBib3VuY2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSAwLFxuICAgICAgICAgICAgdG8gPSB2YWx1ZS50byxcbiAgICAgICAgICAgIGN1cnJlbnQgPSB2YWx1ZS5jdXJyZW50LFxuICAgICAgICAgICAgYm91bmNlID0gdmFsdWUuYm91bmNlO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgd2UncmUgdXNpbmcgZ2xpZGUgc2ltdWxhdGlvbiB3ZSBoYXZlIHRvIGZsaXAgb3VyIHRhcmdldCB0b29cbiAgICAgICAgaWYgKHZhbHVlLnNpbXVsYXRlID09PSAnZ2xpZGUnKSB7XG4gICAgICAgICAgICBkaXN0YW5jZSA9IHRvIC0gY3VycmVudDtcbiAgICAgICAgICAgIHZhbHVlLnRvID0gY3VycmVudCAtIChkaXN0YW5jZSAqIGJvdW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB2YWx1ZS52ZWxvY2l0eSAqPSAtIGJvdW5jZTtcbiAgICB9LFxuXG4gICAgY2FwdHVyZTogZnVuY3Rpb24gKHZhbHVlLCB0YXJnZXQpIHtcbiAgICAgICAgdmFsdWUudG8gPSB0YXJnZXQ7XG4gICAgICAgIHZhbHVlLnNpbXVsYXRlID0gJ3NwcmluZyc7XG4gICAgICAgIHZhbHVlLmNhcHR1cmUgPSB2YWx1ZS5taW4gPSB2YWx1ZS5tYXggPSB1bmRlZmluZWQ7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaW11bGF0aW9ucztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9ydW4vc2ltdWxhdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy8gW2ludF06IE51bWJlciBvZiBmcmFtZXMgQWN0aW9uIGhhcyBiZWVuIGluYWN0aXZlXG4gICAgaW5hY3RpdmVGcmFtZXM6IDAsXG4gICAgXG4gICAgLy8gW251bWJlcl06IE51bWJlciBvZiBmcmFtZXMgb2Ygbm8gY2hhbmdlIGJlZm9yZSBBY3Rpb24gaXMgZGVjbGFyZWQgaW5hY3RpdmVcbiAgICBtYXhJbmFjdGl2ZUZyYW1lczogM1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcnVuL2RlZmF1bHQtYWN0aW9uLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLy8gW3N0cmluZ106IFNpbXVsYXRpb24gdG8gLnJ1blxuICAgIHNpbXVsYXRlOiAndmVsb2NpdHknLFxuICAgIFxuICAgIC8vIFtudW1iZXJdOiBEZWNlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICBkZWNlbGVyYXRpb246IDAsXG4gICAgXG4gICAgLy8gW251bWJlcl06IEFjY2VsZXJhdGlvbiB0byBhcHBseSB0byB2YWx1ZSwgaW4gdW5pdHMgcGVyIHNlY29uZFxuICAgIGFjY2VsZXJhdGlvbjogMCxcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogRmFjdG9yIHRvIG11bHRpcGx5IHZlbG9jaXR5IGJ5IG9uIGJvdW5jZVxuICAgIGJvdW5jZTogMCxcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogU3ByaW5nIHN0cmVuZ3RoIGR1cmluZyAnc3RyaW5nJ1xuICAgIHNwcmluZzogODAsXG4gICAgXG4gICAgLy8gW251bWJlcl06IFRpbWVjb25zdGFudCBvZiBnbGlkZVxuICAgIHRpbWVDb25zdGFudDogMzk1LFxuICAgIFxuICAgIC8vIFtudW1iZXJdOiBTdG9wIHNpbXVsYXRpb24gdW5kZXIgdGhpcyBzcGVlZFxuICAgIHN0b3BTcGVlZDogNSxcbiAgICBcbiAgICAvLyBbYm9vbGVhbl06IENhcHR1cmUgd2l0aCBzcHJpbmcgcGh5c2ljcyBvbiBsaW1pdCBicmVhY2hcbiAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lXG4gICAgZnJpY3Rpb246IDBcblxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcnVuL2RlZmF1bHQtdmFsdWUtcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcbiAgICBFYXNpbmcgZnVuY3Rpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIEdlbmVyYXRlcyBhbmQgcHJvdmlkZXMgZWFzaW5nIGZ1bmN0aW9ucyBiYXNlZCBvbiBiYXNlRnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgICBcbiAgICBBIGNhbGwgdG8gZWFzaW5nRnVuY3Rpb24uZ2V0KCdmdW5jdGlvbk5hbWUnKSByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcGFzc2VkOlxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIDAtMVxuICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogQW1wIG1vZGlmaWVyLCBvbmx5IGFjY2VwdGVkIGluIHNvbWUgZWFzaW5nIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGlzIHVzZWQgdG8gYWRqdXN0IG92ZXJhbGwgc3RyZW5ndGhcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogRWFzZWQgcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgV2UgY2FuIGdlbmVyYXRlIG5ldyBmdW5jdGlvbnMgYnkgc2VuZGluZyBhbiBlYXNpbmcgZnVuY3Rpb24gdGhyb3VnaCBlYXNpbmdGdW5jdGlvbi5leHRlbmQobmFtZSwgbWV0aG9kKS5cbiAgICBXaGljaCB3aWxsIG1ha2UgbmFtZUluLCBuYW1lT3V0IGFuZCBuYW1lSW5PdXQgZnVuY3Rpb25zIGF2YWlsYWJsZSB0byB1c2UuXG4gICAgICAgIFxuICAgIEVhc2luZyBmdW5jdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyXG4gICAgaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbiAgICAgICAgXG4gICAgQmV6aWVyIGN1cnZlIGludGVycHJldG9yIGNyZWF0ZWQgZnJvbSBHYcOrdGFuIFJlbmF1ZGVhdSdzIG9yaWdpbmFsIEJlemllckVhc2luZyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgRWFzaW5nID0gcmVxdWlyZSgnLi9FYXNpbmcnKSxcbiAgICBlYXNpbmdGdW5jdGlvbixcbiAgICBcbiAgICAvLyBHZW5lcmF0ZSBlYXNpbmcgZnVuY3Rpb24gd2l0aCBwcm92aWRlZCBwb3dlclxuICAgIGdlbmVyYXRlUG93ZXJFYXNpbmcgPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCBwb3dlcik7XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEVhY2ggb2YgdGhlc2UgYmFzZSBmdW5jdGlvbnMgaXMgYW4gZWFzZUluXG4gICAgICAgIFxuICAgICAgICBPbiBpbml0LCB3ZSB1c2UgRWFzaW5nRnVuY3Rpb24ubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gICAgICAgIGVhc2VPdXQgZnVuY3Rpb25zIHJlc3BlY3RpdmVseS5cbiAgICAqL1xuICAgIGJhc2VFYXNpbmcgPSB7XG4gICAgICAgIGNpcmM6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKTtcbiAgICAgICAgfSxcbiAgICAgICAgYmFjazogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICB2YXIgc3RyZW5ndGggPSAxLjU7XG5cbiAgICAgICAgICAgIHJldHVybiAocHJvZ3Jlc3MgKiBwcm9ncmVzcykgKiAoKHN0cmVuZ3RoICsgMSkgKiBwcm9ncmVzcyAtIHN0cmVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbi8vIEdlbmVyYXRlIHBvd2VyIGVhc2luZyBlYXNpbmdcblsnZWFzZScsICdjdWJpYycsICdxdWFydCcsICdxdWludCddLmZvckVhY2goZnVuY3Rpb24gKGVhc2luZ05hbWUsIGkpIHtcbiAgICBiYXNlRWFzaW5nW2Vhc2luZ05hbWVdID0gZ2VuZXJhdGVQb3dlckVhc2luZyhpICsgMik7XG59KTtcblxuLy8gR2VuZXJhdGUgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcbmZvciAodmFyIGtleSBpbiBiYXNlRWFzaW5nKSB7XG4gICAgaWYgKGJhc2VFYXNpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBlYXNpbmdGdW5jdGlvbiA9IG5ldyBFYXNpbmcoYmFzZUVhc2luZ1trZXldKTtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnSW4nXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdPdXQnXSA9IGVhc2luZ0Z1bmN0aW9uLm91dDtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnSW5PdXQnXSA9IGVhc2luZ0Z1bmN0aW9uLmluT3V0O1xuICAgIH1cbn1cblxuLypcbiAgICBMaW5lYXIgZWFzaW5nIGFkanVzdG1lbnRcbiAgICBcbiAgICBUaGUgZGVmYXVsdCBlYXNpbmcgbWV0aG9kLCBub3QgYWRkZWQgd2l0aCAuZXh0ZW5kIGFzIGl0IGhhcyBubyBPdXQgb3IgSW5PdXRcbiAgICB2YXJpYXRpb24uXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwLTFcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBVbmFkanVzdGVkIHByb2dyZXNzXG4qL1xuYmFzZUVhc2luZy5saW5lYXIgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gcHJvZ3Jlc3M7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VFYXNpbmc7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3BsYXkvcHJlc2V0LWVhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogVGltZSBvZiBhbmltYXRpb24gKGlmIGFuaW1hdGluZykgaW4gbXNcbiAgICBkdXJhdGlvbjogNDAwLFxuICAgIFxuICAgIC8vIFtzdHJpbmddOiBFYXNlIGFuaW1hdGlvblxuICAgIGVhc2U6ICdlYXNlSW5PdXQnLFxuICAgIFxuICAgIC8vIFtudW1iZXJdOiBNdWx0aXBseSBwcm9ncmVzcyBieSB0aGlzICguNSBpcyBoYWxmIHNwZWVkKVxuICAgIGRpbGF0ZTogMSxcbiAgICBcbiAgICAvLyBbYm9vbGVhbiB8fCBudW1iZXJdOiBOdW1iZXIgb2YgdGltZXMgdG8gbG9vcCB2YWx1ZXMsIHRydWUgZm9yIGluZGVmaW5pdGVcbiAgICBsb29wOiBmYWxzZSxcbiAgICBcbiAgICAvLyBbYm9vbGVhbiB8fCBudW1iZXJdOiBOdW1iZXIgb2YgdGltZXMgdG8geW95byB2YWx1ZXMsIHRydWUgZm9yIGluZGVmaW5pdGVcbiAgICB5b3lvOiBmYWxzZSxcbiAgICBcbiAgICAvLyBbYm9vbGVhbiB8fCBudW1iZXJdOiBOdW1iZXIgb2YgdGltZXMgdG8gZmxpcCB2YWx1ZXMsIHRydWUgZm9yIGluZGVmaW5pdGVcbiAgICBmbGlwOiBmYWxzZVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvcGxheS9kZWZhdWx0LWFjdGlvbi1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBbbnVtYmVyXTogRHVyYXRpb24gb2YgYW5pbWF0aW9uIGluIG1zXG4gICAgZHVyYXRpb246IDQwMCxcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogRHVyYXRpb24gb2YgZGVsYXkgaW4gbXNcbiAgICBkZWxheTogMCxcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogU3RhZ2dlciBkZWxheSBhcyBmYWN0b3Igb2YgZHVyYXRpb24gKGllIDAuMiB3aXRoIGR1cmF0aW9uIG9mIDEwMDBtcyA9IDIwMG1zKVxuICAgIHN0YWdnZXI6IDAsXG4gICAgXG4gICAgLy8gW3N0cmluZ106IEVhc2luZyB0byBhcHBseVxuICAgIGVhc2U6ICdlYXNlSW5PdXQnLFxuICAgIFxuICAgIC8vIFtudW1iZXJdOiBOdW1iZXIgb2Ygc3RlcHMgdG8gZXhlY3V0ZSBhbmltYXRpb25cbiAgICBzdGVwczogMCxcbiAgICBcbiAgICAvLyBbc3RyaW5nXTogVGVsbHMgUmVkc2hpZnQgd2hlbiB0byBzdGVwLCBhdCB0aGUgc3RhcnQgb3IgZW5kIG9mIGEgc3RlcC4gT3RoZXIgb3B0aW9uIGlzICdzdGFydCcgYXMgcGVyIENTUyBzcGVjXG4gICAgc3RlcERpcmVjdGlvbjogJ2VuZCdcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3BsYXkvZGVmYXVsdC12YWx1ZS1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHBhcnNlQXJncyA9IHJlcXVpcmUoJy4vcGFyc2UtYXJncycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8qXG4gICAgICAgIFBsYXkgYW4gYW5pbWF0aW9uXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3QgfHwgc3RyaW5nXTogUGFyYW1ldGVycyBvciBwcmVzZXQgbmFtZXNcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPdmVycmlkZSBwYXJhbWV0ZXJzXG4gICAgKi9cbiAgICBwbGF5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gJ3BsYXknO1xuICAgICAgICB0aGlzLnNldChwYXJzZUFyZ3MuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgJ3RvJyk7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KCk7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEFkZCBhcmd1bWVudHMgdG8gcXVldWVcbiAgICAqL1xuICAgIGFkZFRvUXVldWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZS5hZGQuYXBwbHkodGhpcy5xdWV1ZSwgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIENoZWNrIGZvciBuZXh0IHN0ZXBzIGFuZCBwZXJmb3JtLCBzdG9wIGlmIG5vdFxuICAgICovXG4gICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmV4dFN0ZXBzID0gW3tcbiAgICAgICAgICAgICAgICBrZXk6ICdsb29wJyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogdGhpcy5yZXNldFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGtleTogJ3lveW8nLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB0aGlzLnJldmVyc2VcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBrZXk6ICdmbGlwJyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogdGhpcy5mbGlwVmFsdWVzXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIG51bVN0ZXBzID0gbmV4dFN0ZXBzLmxlbmd0aCxcbiAgICAgICAgICAgIGhhc05leHRTdGVwID0gZmFsc2UsXG4gICAgICAgICAgICBpID0gMDtcblxuICAgICAgICBmb3IgKDsgaSA8IG51bVN0ZXBzOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrTmV4dFN0ZXAobmV4dFN0ZXBzW2ldLmtleSwgbmV4dFN0ZXBzW2ldLmNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIGhhc05leHRTdGVwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaGFzTmV4dFN0ZXAgJiYgIXRoaXMucGxheU5leHQoKSkge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBDaGVjayBuZXh0IHN0ZXBcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiBzdGVwICgneW95bycgb3IgJ2xvb3AnKVxuICAgICAgICBAcGFyYW0gW2NhbGxiYWNrXTogRnVuY3Rpb24gdG8gcnVuIGlmIHdlIHRha2UgdGhpcyBzdGVwXG4gICAgKi9cbiAgICBjaGVja05leHRTdGVwOiBmdW5jdGlvbiAoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgQ09VTlQgPSAnQ291bnQnLFxuICAgICAgICAgICAgc3RlcFRha2VuID0gZmFsc2UsXG4gICAgICAgICAgICBzdGVwID0gdGhpc1trZXldLFxuICAgICAgICAgICAgY291bnQgPSB0aGlzW2tleSArIENPVU5UXSxcbiAgICAgICAgICAgIGZvcmV2ZXIgPSAoc3RlcCA9PT0gdHJ1ZSk7XG5cbiAgICAgICAgaWYgKGZvcmV2ZXIgfHwgdXRpbHMuaXNOdW0oc3RlcCkpIHtcbiAgICAgICAgICAgICsrY291bnQ7XG4gICAgICAgICAgICB0aGlzW2tleSArIENPVU5UXSA9IGNvdW50O1xuICAgICAgICAgICAgaWYgKGZvcmV2ZXIgfHwgY291bnQgPD0gc3RlcCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgc3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGVwVGFrZW47XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIE5leHQgaW4gcXVldWVcbiAgICAqL1xuICAgIHBsYXlOZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdGVwVGFrZW4gPSBmYWxzZSxcbiAgICAgICAgICAgIG5leHRJblF1ZXVlID0gdGhpcy5xdWV1ZS5uZXh0KHRoaXMucGxheURpcmVjdGlvbik7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzQXJyYXkobmV4dEluUXVldWUpKSB7XG4gICAgICAgICAgICB0aGlzLnNldChwYXJzZUFyZ3MuYXBwbHkodGhpcywgbmV4dEluUXVldWUpLCAndG8nKVxuICAgICAgICAgICAgICAgIC5yZXNldFByb2dyZXNzKCk7XG5cbiAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RlcFRha2VuO1xuICAgIH0sXG5cbiAgICBzZWVrOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAqIHByb2dyZXNzO1xuXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzLmZpcmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3BsYXkvYWN0b3ItbWV0aG9kcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHByZXNldE1hbmFnZXIgPSByZXF1aXJlKCcuLi8uLi9hY3Rvci9wcmVzZXQtbWFuYWdlcicpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJhc2UsIG92ZXJyaWRlKSB7XG4gICAgdmFyIHByb3BzID0gKHR5cGVvZiBiYXNlID09PSAnc3RyaW5nJykgPyBwcmVzZXRNYW5hZ2VyLmdldERlZmluZWQoYmFzZSkgOiBiYXNlO1xuXG4gICAgLy8gT3ZlcnJpZGUgcHJvcGVydGllcyB3aXRoIHNlY29uZCBhcmcgaWYgaXQncyBhbiBvYmplY3RcbiAgICBpZiAodHlwZW9mIG92ZXJyaWRlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBwcm9wcyA9IHV0aWxzLm1lcmdlKHByb3BzLCBvdmVycmlkZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZ2VuZXJpYy9wYXJzZS1hcmdzLmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgSW5wdXQgPSByZXF1aXJlKCcuL0lucHV0LmpzJyksXG4gICAgY3VycmVudFBvaW50ZXIsIC8vIFNvcnQgdGhpcyBvdXQgZm9yIG11bHRpdG91Y2hcbiAgICBcbiAgICBUT1VDSE1PVkUgPSAndG91Y2htb3ZlJyxcbiAgICBNT1VTRU1PVkUgPSAnbW91c2Vtb3ZlJyxcblxuICAgIC8qXG4gICAgICAgIENvbnZlcnQgZXZlbnQgaW50byBwb2ludFxuICAgICAgICBcbiAgICAgICAgU2NyYXBlIHRoZSB4L3kgY29vcmRpbmF0ZXMgZnJvbSB0aGUgcHJvdmlkZWQgZXZlbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbZXZlbnRdOiBPcmlnaW5hbCBwb2ludGVyIGV2ZW50XG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IFRydWUgaWYgdG91Y2ggZXZlbnRcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogeC95IGNvb3JkaW5hdGVzIG9mIGV2ZW50XG4gICAgKi9cbiAgICBldmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGlzVG91Y2hFdmVudCkge1xuICAgICAgICB2YXIgdG91Y2hDaGFuZ2VkID0gaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0b3VjaENoYW5nZWQgPyB0b3VjaENoYW5nZWQuY2xpZW50WCA6IGV2ZW50LnBhZ2VYLFxuICAgICAgICAgICAgeTogdG91Y2hDaGFuZ2VkID8gdG91Y2hDaGFuZ2VkLmNsaWVudFkgOiBldmVudC5wYWdlWVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGFjdHVhbCBldmVudFxuICAgICAgICBcbiAgICAgICAgQ2hlY2tzIGZvciBqUXVlcnkncyAub3JpZ2luYWxFdmVudCBpZiBwcmVzZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2V2ZW50IHwgalF1ZXJ5IGV2ZW50XVxuICAgICAgICBAcmV0dXJuIFtldmVudF06IFRoZSBhY3R1YWwgSlMgZXZlbnQgIFxuICAgICovXG4gICAgZ2V0QWN0dWFsRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50Lm9yaWdpbmFsRXZlbnQgfHwgZXZlbnQ7XG4gICAgfSxcblxuICAgIFxuICAgIC8qXG4gICAgICAgIFBvaW50ZXIgY29uc3RydWN0b3JcbiAgICAqL1xuICAgIFBvaW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgZXZlbnQgPSBnZXRBY3R1YWxFdmVudChlKSwgLy8gSW4gY2FzZSBvZiBqUXVlcnkgZXZlbnRcbiAgICAgICAgICAgIGlzVG91Y2ggPSAoZXZlbnQudG91Y2hlcykgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICBzdGFydFBvaW50ID0gZXZlbnRUb1BvaW50KGV2ZW50LCBpc1RvdWNoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudXBkYXRlKHN0YXJ0UG9pbnQpO1xuICAgICAgICB0aGlzLmlzVG91Y2ggPSBpc1RvdWNoO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9LFxuICAgIFxuICAgIHByb3RvID0gUG9pbnRlci5wcm90b3R5cGUgPSBuZXcgSW5wdXQoKTtcblxuLypcbiAgICBCaW5kIG1vdmUgZXZlbnRcbiovXG5wcm90by5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubW92ZUV2ZW50ID0gdGhpcy5pc1RvdWNoID8gVE9VQ0hNT1ZFIDogTU9VU0VNT1ZFO1xuICAgIFxuICAgIGN1cnJlbnRQb2ludGVyID0gdGhpcztcbiAgICBcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgdGhpcy5vbk1vdmUpO1xufTtcblxuLypcbiAgICBVbmJpbmQgbW92ZSBldmVudFxuKi9cbnByb3RvLnVuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgdGhpcy5vbk1vdmUpO1xufTtcblxuLypcbiAgICBQb2ludGVyIG9uTW92ZSBldmVudCBoYW5kbGVyXG4gICAgXG4gICAgQHBhcmFtIFtldmVudF06IFBvaW50ZXIgbW92ZSBldmVudFxuKi9cbnByb3RvLm9uTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIG5ld1BvaW50ID0gZXZlbnRUb1BvaW50KGUsIGN1cnJlbnRQb2ludGVyLmlzVG91Y2gpO1xuICAgIGUgPSBnZXRBY3R1YWxFdmVudChlKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY3VycmVudFBvaW50ZXIudXBkYXRlKG5ld1BvaW50KTtcbn07XG5cbnByb3RvLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnRlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L1BvaW50ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgYW1wOiAxLFxuXG4gICAgLy8gW251bWJlcl06IEZhY3RvciBvZiBtb3ZlbWVudCBvdXRzaWRlIG9mIG1heGltdW0gcmFuZ2UgKGllIDAuNSB3aWxsIG1vdmUgaGFsZiBhcyBtdWNoIGFzIDEpXG4gICAgZXNjYXBlQW1wOiAwXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90cmFjay9kZWZhdWx0LXZhbHVlLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8vIFthcnJheV06IExpbmVhciByYW5nZSBvZiB2YWx1ZXMgKGVnIFstMTAwLCAtNTAsIDUwLCAxMDBdKSBvZiBsaW5rZWQgdmFsdWUgdG8gbWFwIHRvIC5tYXBUb1xuICAgIG1hcExpbms6IHVuZGVmaW5lZCxcbiAgICBcbiAgICAvLyBbYXJyYXldOiBOb24tbGluZWFyIHJhbmdlIG9mIHZhbHVlcyAoZWcgWzAsIDEsIDEsIDBdKSB0byBtYXAgdG8gLm1hcExpbmsgLSBoZXJlIHRoZSBsaW5rZWQgdmFsdWUgYmVpbmcgNzUgd291bGQgcmVzdWx0IGluIGEgdmFsdWUgb2YgMC41XG4gICAgbWFwVG86IHVuZGVmaW5lZCxcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogRmFjdG9yIG9mIGlucHV0IG1vdmVtZW50IHRvIGRpcmVjdCBvdXRwdXRcbiAgICBhbXA6IDFcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2xpbmsvZGVmYXVsdC12YWx1ZS1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWVzLCB0ZXJtcywgZGVsaW1pdGVyLCBjaG9wKSB7XG4gICAgdmFyIGNvbWJpbmVkID0gJycsXG4gICAgICAgIGtleSA9ICcnLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG5cbiAgICBmb3IgKDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAga2V5ID0gdGVybXNbaV07XG5cbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBjb21iaW5lZCArPSB2YWx1ZXNba2V5XSArIGRlbGltaXRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaG9wKSB7XG4gICAgICAgIGNvbWJpbmVkID0gY29tYmluZWQuc2xpY2UoMCwgLWNob3ApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5lZDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgc3BsaXRDb21tYURlbGltaXRlZCA9IHJlcXVpcmUoJy4vc3BsaXQtY29tbWEtZGVsaW1pdGVkJyksXG4gICAgZnVuY3Rpb25CcmVhayA9IHJlcXVpcmUoJy4vZnVuY3Rpb24tYnJlYWsnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIHRlcm1zKSB7XG4gICAgdmFyIHNwbGl0VmFsdWUgPSB7fSxcbiAgICAgICAgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGgsXG4gICAgICAgIGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZnVuY3Rpb25CcmVhayh2YWx1ZSkpLFxuICAgICAgICBpID0gMDtcblxuICAgIGZvciAoOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgICBzcGxpdFZhbHVlW3Rlcm1zW2ldXSA9IChjb2xvcnNbaV0gIT09IHVuZGVmaW5lZCkgPyBjb2xvcnNbaV0gOiAxO1xuICAgIH1cblxuICAgIHJldHVybiBzcGxpdFZhbHVlO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJygnICsgdmFsdWUgKyAnKSc7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY29sb3I6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDI1NSxcbiAgICAgICAgcm91bmQ6IHRydWVcbiAgICB9LFxuICAgIG9wYWNpdHk6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDFcbiAgICB9LFxuICAgIHBlcmNlbnQ6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgdW5pdDogJyUnXG4gICAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGVmYXVsdC1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFggPSAnWCcsXG4gICAgWSA9ICdZJyxcbiAgICBBTFBIQSA9ICdBbHBoYScsXG5cbiAgICB0ZXJtcyA9IHtcbiAgICAgICAgY29sb3JzOiBbJ1JlZCcsICdHcmVlbicsICdCbHVlJywgQUxQSEFdLFxuICAgICAgICBwb3NpdGlvbnM6IFtYLCBZLCAnWiddLFxuICAgICAgICBkaW1lbnNpb25zOiBbJ1RvcCcsICdSaWdodCcsICdCb3R0b20nLCAnTGVmdCddLFxuICAgICAgICBzaGFkb3c6IFtYLCBZLCAnUmFkaXVzJywgJ1NwcmVhZCcsICdDb2xvciddLFxuICAgICAgICBoc2w6IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdXG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXJtcztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL3NwbGl0LXNwYWNlLWRlbGltaXRlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHRyYW5zZm9ybURpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1kaWN0aW9uYXJ5JyksXG4gICAgdHJhbnNmb3JtUHJvcHMgPSB0cmFuc2Zvcm1EaWN0aW9uYXJ5LnByb3BzLFxuXG4gICAgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG91dHB1dCkge1xuICAgIHZhciBjc3MgPSB7fSxcbiAgICAgICAga2V5ID0gJycsXG4gICAgICAgIHRyYW5zZm9ybSA9ICcnLFxuICAgICAgICB0cmFuc2Zvcm1IYXNaID0gZmFsc2UsXG4gICAgICAgIHJ1bGUgPSAnJztcbiAgICAgICAgXG4gICAgLy8gTG9vcCB0aHJvdWdoIG91dHB1dCwgY2hlY2sgZm9yIHRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgZm9yIChrZXkgaW4gb3V0cHV0KSB7XG4gICAgICAgIGlmIChvdXRwdXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcnVsZSA9IG91dHB1dFtrZXldO1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHRyYW5zZm9ybSBwcm9wZXJ0eSwgYWRkIHRvIHRyYW5zZm9ybSBzdHJpbmdcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtICs9IGtleSArICcoJyArIHJ1bGUgKyAnKSc7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtSGFzWiA9IChrZXkgPT09IFRSQU5TTEFURV9aKSA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBPciBqdXN0IGFzc2lnbiBkaXJlY3RseVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjc3Nba2V5XSA9IHJ1bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBoYXZlIHRyYW5zZm9ybSBwcm9wZXJ0aWVzLCBhZGQgdHJhbnNsYXRlWlxuICAgIGlmICh0cmFuc2Zvcm0gIT09ICcnKSB7XG4gICAgICAgIGlmICghdHJhbnNmb3JtSGFzWikge1xuICAgICAgICAgICAgdHJhbnNmb3JtICs9ICcgJyArIFRSQU5TTEFURV9aICsgJygwcHgpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNzcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yb2xlcy9jc3MvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gICAgeTogVFJBTlNMQVRFICsgJ1knLFxuICAgIHo6IFRSQU5TTEFURSArICdaJ1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvbGVzL2Nzcy9tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIENPTE9SID0gJ2NvbG9yJyxcbiAgICBQT1NJVElPTlMgPSAncG9zaXRpb25zJyxcbiAgICBESU1FTlNJT05TID0gJ2RpbWVuc2lvbnMnLFxuICAgIFNIQURPVyA9ICdzaGFkb3cnLFxuICAgIEFOR0xFID0gJ2FuZ2xlJyxcbiAgICBBTFBIQSA9ICdhbHBoYScsXG4gICAgUFggPSAncHgnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBDb2xvciBwcm9wZXJ0aWVzXG4gICAgY29sb3I6IENPTE9SLFxuICAgIGJhY2tncm91bmRDb2xvcjogQ09MT1IsXG4gICAgb3V0bGluZUNvbG9yOiBDT0xPUixcbiAgICBmaWxsOiBDT0xPUixcbiAgICBzdHJva2U6IENPTE9SLFxuICAgIC8vIEJvcmRlclxuICAgIGJvcmRlckNvbG9yOiBDT0xPUixcbiAgICBib3JkZXJUb3BDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IENPTE9SLFxuICAgIGJvcmRlckxlZnRDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyUmFkaXVzOiBQWCxcbiAgICAvLyBEaW1lbnNpb25zXG4gICAgbWFyZ2luOiBESU1FTlNJT05TLFxuICAgIHBhZGRpbmc6IERJTUVOU0lPTlMsXG4gICAgd2lkdGg6IFBYLFxuICAgIGhlaWdodDogUFgsICAgIFxuICAgIC8vIFBvc2l0aW9uc1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogUE9TSVRJT05TLFxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiBQT1NJVElPTlMsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBQT1NJVElPTlMsICAgIFxuICAgIC8vIFNoYWRvd3NcbiAgICB0ZXh0U2hhZG93OiBTSEFET1csXG4gICAgYm94U2hhZG93OiBTSEFET1csICAgIFxuICAgIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgcm90YXRlOiBBTkdMRSxcbiAgICByb3RhdGVYOiBBTkdMRSxcbiAgICByb3RhdGVZOiBBTkdMRSxcbiAgICByb3RhdGVaOiBBTkdMRSxcbiAgICBza2V3WDogQU5HTEUsXG4gICAgc2tld1k6IEFOR0xFLFxuICAgIHRyYW5zbGF0ZVg6IFBYLFxuICAgIHRyYW5zbGF0ZVk6IFBYLFxuICAgIHRyYW5zbGF0ZVo6IFBYLFxuICAgIHBlcnNwZWN0aXZlOiBQWCxcbiAgICBvcGFjaXR5OiBBTFBIQVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvbGVzL2Nzcy90eXBlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgU1RST0tFID0gJ3N0cm9rZScsXG4gICAgREFTSCA9IFNUUk9LRSArICctZGFzaCcsIC8vIHN0b2tlLXdpZHRoXG4gICAgREFTSF9BUlJBWSA9IERBU0ggKyAnYXJyYXknO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBvcGFjaXR5OiBTVFJPS0UgKyAnLW9wYWNpdHknLFxuICAgIHdpZHRoOiBTVFJPS0UgKyAnLXdpZHRoJyxcbiAgICBvZmZzZXQ6IERBU0ggKyAnb2Zmc2V0JyxcbiAgICBsZW5ndGg6IERBU0hfQVJSQVksXG4gICAgc3BhY2luZzogREFTSF9BUlJBWSxcbiAgICBtaXRlcmxpbWl0OiBTVFJPS0UgKyAnLW1pdGVybGltaXQnXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm9sZXMvcGF0aC9tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH07XG5cblF1ZXVlLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBBZGQgYSBzZXQgb2YgYXJndW1lbnRzIHRvIHF1ZXVlXG4gICAgKi9cbiAgICBhZGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgbmV4dCBzZXQgb2YgYXJndW1lbnRzIGZyb20gcXVldWVcbiAgICAqL1xuICAgIG5leHQ6IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gdGhpcy5xdWV1ZSxcbiAgICAgICAgICAgIHJldHVyblZhbCA9IGZhbHNlLFxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgXG4gICAgICAgIGRpcmVjdGlvbiA9IChhcmd1bWVudHMubGVuZ3RoKSA/IGRpcmVjdGlvbiA6IDE7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiBvdXIgaW5kZXggaXMgYmV0d2VlbiAwIGFuZCB0aGUgcXVldWUgbGVuZ3RoLCByZXR1cm4gdGhhdCBpdGVtXG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgcXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm5WYWwgPSBxdWV1ZVtpbmRleF07XG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXggKyBkaXJlY3Rpb247XG4gICAgICAgIFxuICAgICAgICAvLyBPciBjbGVhclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBSZXBsYWNlIHF1ZXVlIHdpdGggZW1wdHkgYXJyYXlcbiAgICAqL1xuICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9RdWV1ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGFjdGlvbk1hbmFnZXIgPSByZXF1aXJlKCcuLi9hY3Rpb25zL21hbmFnZXInKSxcbiAgICB2YWx1ZVR5cGVNYW5hZ2VyID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvbWFuYWdlcicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIGVhY2ggPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKS5lYWNoLFxuXG4gICAgdXBkYXRlID0gZnVuY3Rpb24gKGZyYW1lc3RhbXAsIGZyYW1lRHVyYXRpb24pIHtcbiAgICAgICAgdmFyIGFjdG9yID0gdGhpcyxcbiAgICAgICAgICAgIHZhbHVlcyA9IHRoaXMudmFsdWVzLFxuICAgICAgICAgICAgYWN0aW9uID0gYWN0aW9uTWFuYWdlclt0aGlzLmFjdGlvbl0sXG4gICAgICAgICAgICB2YWx1ZUFjdGlvbiA9IGFjdGlvbixcbiAgICAgICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIG51bUFjdGl2ZVZhbHVlcyA9IHRoaXMub3JkZXIubGVuZ3RoLFxuICAgICAgICAgICAgbnVtQWN0aXZlUGFyZW50cyA9IHRoaXMucGFyZW50T3JkZXIubGVuZ3RoLFxuICAgICAgICAgICAgbnVtUm9sZXMgPSB0aGlzLnJvbGVzLmxlbmd0aCxcbiAgICAgICAgICAgIGtleSA9ICcnLFxuICAgICAgICAgICAgdmFsdWUgPSB7fSxcbiAgICAgICAgICAgIG1hcHBlZFZhbHVlcyA9IHt9LFxuICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gMCxcbiAgICAgICAgICAgIG91dHB1dFZhbHVlID0gMCxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgcm9sZTtcblxuICAgICAgICAvLyBVcGRhdGUgSW5wdXQgYW5kIGF0dGFjaCBuZXcgdmFsdWVzIHRvIHN0YXRlXG4gICAgICAgIGlmICh0aGlzLmlucHV0KSB7XG4gICAgICAgICAgICBzdGF0ZS5pbnB1dCA9IHRoaXMuaW5wdXQub25GcmFtZShmcmFtZXN0YW1wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBBY3Rpb24gaW5wdXRcbiAgICAgICAgaWYgKGFjdGlvbi5vbkZyYW1lU3RhcnQgJiYgYWN0aW9uLm9uRnJhbWVTdGFydC5jYWxsKHRoaXMsIGZyYW1lRHVyYXRpb24pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyZSBvblN0YXJ0IGlmIGZpcnN0IGZyYW1lXG4gICAgICAgIGlmICh0aGlzLmZpcnN0RnJhbWUpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1Sb2xlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcm9sZSA9IHRoaXMucm9sZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHJvbGUuc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZS5zdGFydC5jYWxsKGFjdG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgdmFsdWVzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1BY3RpdmVWYWx1ZXM7IGkrKykge1xuICAgICAgICAgICAgLy8gR2V0IHZhbHVlIGFuZCBrZXlcbiAgICAgICAgICAgIGtleSA9IHRoaXMub3JkZXJbaV07XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAvLyBMb2FkIHZhbHVlLXNwZWNpZmljIGFjdGlvblxuICAgICAgICAgICAgdmFsdWVBY3Rpb24gPSB2YWx1ZS5saW5rID8gYWN0aW9uTWFuYWdlci5saW5rIDogYWN0aW9uO1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgbmV3IHZhbHVlXG4gICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSB2YWx1ZUFjdGlvbi5wcm9jZXNzLmNhbGwodGhpcywgdmFsdWUsIGtleSwgZnJhbWVEdXJhdGlvbik7XG5cbiAgICAgICAgICAgIC8vIExpbWl0IGlmIHJhbmdlXG4gICAgICAgICAgICBpZiAodmFsdWVBY3Rpb24ubGltaXQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSB2YWx1ZUFjdGlvbi5saW1pdCh1cGRhdGVkVmFsdWUsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUm91bmQgdmFsdWUgaWYgcm91bmQgc2V0IHRvIHRydWVcbiAgICAgICAgICAgIGlmICh2YWx1ZS5yb3VuZCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IE1hdGgucm91bmQodXBkYXRlZFZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIGNoYW5nZSBmcm9tIHByZXZpb3VzIGZyYW1lXG4gICAgICAgICAgICB2YWx1ZS5mcmFtZUNoYW5nZSA9IHVwZGF0ZWRWYWx1ZSAtIHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB2ZWxvY2l0eSBpZiBBY3Rpb24gaGFzbid0IGFscmVhZHlcbiAgICAgICAgICAgIGlmICghdmFsdWVBY3Rpb24uY2FsY3VsYXRlc1ZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSBjYWxjLnNwZWVkUGVyU2Vjb25kKHZhbHVlLmZyYW1lQ2hhbmdlLCBmcmFtZUR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIGN1cnJlbnQgc3BlZWRcbiAgICAgICAgICAgIHZhbHVlLnNwZWVkID0gTWF0aC5hYnModmFsdWUudmVsb2NpdHkpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBjaGFuZ2VkIGFuZCB1cGRhdGVcbiAgICAgICAgICAgIGlmICh2YWx1ZS5jdXJyZW50ICE9IHVwZGF0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCBjdXJyZW50XG4gICAgICAgICAgICB0aGlzLnZhbHVlc1trZXldLmN1cnJlbnQgPSB1cGRhdGVkVmFsdWU7XG4gICAgICAgICAgICBvdXRwdXRWYWx1ZSA9ICh2YWx1ZS51bml0KSA/IHVwZGF0ZWRWYWx1ZSArIHZhbHVlLnVuaXQgOiB1cGRhdGVkVmFsdWU7XG5cbiAgICAgICAgICAgIC8vIFB1dCB2YWx1ZSBpbiBzdGF0ZSBpZiBubyBwYXJlbnQgdmFsdWVcbiAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudmFsdWVzW2tleV0gPSBvdXRwdXRWYWx1ZTtcblxuICAgICAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudCBzdGF0ZSwgdG8gYmUgY29tYmluZWRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGVbdmFsdWUucGFyZW50XSA9IHN0YXRlW3ZhbHVlLnBhcmVudF0gfHwge307XG4gICAgICAgICAgICAgICAgc3RhdGVbdmFsdWUucGFyZW50XVt2YWx1ZS5wcm9wTmFtZV0gPSBvdXRwdXRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWVzIGZyb20gY2FsY3VsYXRlZCBjaGlsZHJlblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtQWN0aXZlUGFyZW50czsgaSsrKSB7XG4gICAgICAgICAgICBrZXkgPSB0aGlzLnBhcmVudE9yZGVyW2ldO1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlIGN1cnJlbnQgcHJvcGVydHlcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZVR5cGVNYW5hZ2VyW3ZhbHVlLnR5cGVdLmNvbWJpbmUoc3RhdGVba2V5XSk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBzdGF0ZVxuICAgICAgICAgICAgc3RhdGUudmFsdWVzW3ZhbHVlLm5hbWVdID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgYGZyYW1lYCBhbmQgYHVwZGF0ZWAgY2FsbGJhY2tzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1Sb2xlczsgaSsrKSB7XG4gICAgICAgICAgICByb2xlID0gdGhpcy5yb2xlc1tpXTtcbiAgICAgICAgICAgIG1hcHBlZFZhbHVlcyA9IHt9O1xuXG4gICAgICAgICAgICBlYWNoKHRoaXMuc3RhdGUudmFsdWVzLCBmdW5jdGlvbiAobmFtZSwgdmFsKSB7XG4gICAgICAgICAgICAgICAgbWFwcGVkVmFsdWVzW3JvbGUubWFwKG5hbWUpXSA9IHZhbDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocm9sZS5mcmFtZSkge1xuICAgICAgICAgICAgICAgIHJvbGUuZnJhbWUuY2FsbChhY3RvciwgbWFwcGVkVmFsdWVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJvbGUudXBkYXRlICYmIChhY3Rvci5oYXNDaGFuZ2VkIHx8IGFjdG9yLmZpcnN0RnJhbWUpKSB7XG4gICAgICAgICAgICAgICAgcm9sZS51cGRhdGUuY2FsbChhY3RvciwgbWFwcGVkVmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgb25FbmQgaWYgdGhpcyBBY3Rpb24gaGFzIGVuZGVkXG4gICAgICAgIGlmICh0aGlzLmlzQWN0aXZlICYmIGFjdGlvbi5oYXNFbmRlZCAmJiBhY3Rpb24uaGFzRW5kZWQuY2FsbCh0aGlzLCB0aGlzLmhhc0NoYW5nZWQpKSB7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIEZpcmUgYGNvbXBsZXRlYCBjYWxsYmFja1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bVJvbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICByb2xlID0gdGhpcy5yb2xlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAocm9sZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICByb2xlLmNvbXBsZXRlLmNhbGwoYWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgaXMgYSBwbGF5IGFjdGlvbiwgYW5kIGlzIG5vdCBhY3RpdmUsIGNoZWNrIG5leHQgYWN0aW9uXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUgJiYgdGhpcy5hY3Rpb24gPT09ICdwbGF5JyAmJiB0aGlzLm5leHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maXJzdEZyYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnJhbWVzdGFtcCA9IGZyYW1lc3RhbXA7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB1cGRhdGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rvci91cGRhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIGlzTnVtID0gdXRpbHMuaXNOdW0sXG4gICAgYWN0aW9uc01hbmFnZXIgPSByZXF1aXJlKCcuLi9hY3Rpb25zL21hbmFnZXInKSxcbiAgICB2YWx1ZVR5cGVzTWFuYWdlciA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL21hbmFnZXInKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaCxcblxuICAgIG51bWVyaWNhbFZhbHVlcyA9IFsnY3VycmVudCcsICd0bycsICdpbml0JywgJ21pbicsICdtYXgnLCAndmVsb2NpdHknLCAnZnJpY3Rpb24nLCAnc3ByaW5nJ10sXG4gICAgbnVtTnVtZXJpY2FsVmFsdWVzID0gbnVtZXJpY2FsVmFsdWVzLmxlbmd0aCxcblxuICAgIGNoZWNrUm9sZXMgPSBmdW5jdGlvbiAobmFtZSwgcm9sZXMpIHtcbiAgICAgICAgdmFyIHZhbHVlVHlwZTtcblxuICAgICAgICBlYWNoKHJvbGVzLCBmdW5jdGlvbiAoa2V5LCByb2xlKSB7XG4gICAgICAgICAgICBpZiAocm9sZS5fdHlwZU1hcCkge1xuICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHJvbGUuX3R5cGVNYXBbcm9sZS5tYXAobmFtZSldIHx8IHZhbHVlVHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlVHlwZTtcbiAgICB9LFxuXG4gICAgY2hlY2tOdW1lcmljYWxWYWx1ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAobnVtZXJpY2FsVmFsdWVzLmluZGV4T2YobmFtZSkgPiAtMSk7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLypcbiAgICAgICAgUGVyZm9ybSBvcGVyYXRpb24gb24gc2V0IG9mIHZhbHVlc1xuICAgICAgICBcbiAgICAgICAgQHBhcm1hIFtzdHJpbmddOiBOYW1lIG9mIG9wZXJhdGlvblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIG9iamVjdFxuICAgICovXG4gICAgYWxsOiBmdW5jdGlvbiAob3AsIHZhbHVlcykge1xuICAgICAgICB2YXIgdmFsdWVPcHMgPSB0aGlzO1xuXG4gICAgICAgIGVhY2godmFsdWVzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWVPcHNbb3BdKHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFJlc2V0IHRoZSB2YWx1ZSBjdXJyZW50IHRvIGl0cyBvcmlnaW5cblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIG9iamVjdFxuICAgICovXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnJldGFyZ2V0KHZhbHVlKTtcbiAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLm9yaWdpbjtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgU2V0IHZhbHVlIG9yaWdpbiBwcm9wZXJ0eSB0byBjdXJyZW50IHZhbHVlXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIG9iamVjdFxuICAgICovXG4gICAgcmVzZXRPcmlnaW46IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZS5vcmlnaW4gPSB2YWx1ZS5jdXJyZW50O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTZXQgdmFsdWUgdG8gcHJvcGVydHkgYmFjayB0byB0YXJnZXRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogVmFsdWUgb2JqZWN0XG4gICAgKi9cbiAgICByZXRhcmdldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlLnRvID0gdmFsdWUudGFyZ2V0O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTd2FwIHZhbHVlIHRvIGFuZCBvcmlnaW4gcHJvcGVydHlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogVmFsdWUgb2JqZWN0XG4gICAgKi9cbiAgICBmbGlwOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIG5ld09yaWdpbiA9ICh2YWx1ZS50YXJnZXQgIT09IHVuZGVmaW5lZCkgPyB2YWx1ZS50YXJnZXQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgIHZhbHVlLnRhcmdldCA9IHZhbHVlLnRvID0gdmFsdWUub3JpZ2luO1xuICAgICAgICB2YWx1ZS5vcmlnaW4gPSBuZXdPcmlnaW47XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFJldHVybnMgYW4gaW5pdGlhbCB2YWx1ZSBzdGF0ZVxuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBJbml0aWFsIGN1cnJlbnRcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogRGVmYXVsdCB2YWx1ZSBzdGF0ZVxuICAgICovXG4gICAgaW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoc3RhcnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBjdXJyZW50OiBzdGFydCB8fCAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogQ2hhbmdlIHBlciBzZWNvbmRcbiAgICAgICAgICAgIHNwZWVkOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogQ2hhbmdlIHBlciBzZWNvbmQgcGx1cyBkaXJlY3Rpb24gKGllIGNhbiBiZSBuZWdhdGl2ZSlcbiAgICAgICAgICAgIHZlbG9jaXR5OiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogQW1vdW50IHZhbHVlIGhhcyBjaGFuZ2VkIGluIHRoZSBtb3N0IHJlY2VudCBmcmFtZVxuICAgICAgICAgICAgZnJhbWVDaGFuZ2U6IDBcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgdmFsdWUgaW50byBzdWItdmFsdWVzXG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHZhbHVlXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogQmFzZSB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgIEBwYXJhbSBbRWxlbWVtdF1cbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIGFjdG9yLCB2YWx1ZVR5cGUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWVzID0ge30sXG4gICAgICAgICAgICBzcGxpdFByb3BlcnR5ID0ge30sXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSAnJyxcbiAgICAgICAgICAgIGtleSA9ICcnLFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBudW1OdW1lcmljYWxWYWx1ZXM7IGkrKykge1xuICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gbnVtZXJpY2FsVmFsdWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmModmFsdWVbcHJvcGVydHlOYW1lXSkgJiYgY2hlY2tOdW1lcmljYWxWYWx1ZShwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlW3Byb3BlcnR5TmFtZV0gPSB2YWx1ZVtwcm9wZXJ0eU5hbWVdLmNhbGwoYWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNwbGl0UHJvcGVydHkgPSB2YWx1ZVR5cGUuc3BsaXQodmFsdWVbcHJvcGVydHlOYW1lXSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gcHJvcGVydGllcyB0byBlYWNoIG5ldyB2YWx1ZVxuICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIHNwbGl0UHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0UHJvcGVydHkuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyB2YWx1ZSBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGxpdFZhbHVlc1trZXldID0gc3BsaXRWYWx1ZXNba2V5XSB8fCB1dGlscy5jb3B5KHZhbHVlVHlwZXNNYW5hZ2VyLmRlZmF1bHRQcm9wcyh2YWx1ZS50eXBlLCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVzW2tleV1bcHJvcGVydHlOYW1lXSA9IHNwbGl0UHJvcGVydHlba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BsaXRVbml0KHNwbGl0VmFsdWVzW2tleV1bcHJvcGVydHlOYW1lXSwgc3BsaXRWYWx1ZXNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFNwbGl0IHZhbHVlIGludG8gbnVtYmVyIGFuZCB1bml0LCBzZXQgdW5pdCB0byB2YWx1ZSBpZiBwcmVzZW50XG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQcm9wZXJ0eSB0byBzcGxpdFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIG9iamVjdCB0byBzYXZlIHVuaXQgdG9cbiAgICAqL1xuICAgIHNwbGl0VW5pdDogZnVuY3Rpb24gKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsID0gcHJvcGVydHksXG4gICAgICAgICAgICBzcGxpdFVuaXRWYWx1ZTtcblxuICAgICAgICAvLyBDaGVjayBmb3IgdW5pdCBwcm9wZXJ0eVxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocHJvcGVydHkpKSB7XG4gICAgICAgICAgICBzcGxpdFVuaXRWYWx1ZSA9IHV0aWxzLnNwbGl0VmFsVW5pdChwcm9wZXJ0eSk7XG5cbiAgICAgICAgICAgIGlmICghaXNOYU4oc3BsaXRVbml0VmFsdWUudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsID0gc3BsaXRVbml0VmFsdWUudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRVbml0VmFsdWUudW5pdCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS51bml0ID0gc3BsaXRVbml0VmFsdWUudW5pdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBSZXNvbHZlIHByb3BlcnR5XG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHZhbHVlXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nIHx8IG51bWJlciB8fCBmdW5jdGlvbl06IFByb3BlcnR5XG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogUGFyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbYWN0b3JdOiBQYXJlbnQgYWN0b3JcbiAgICAqL1xuICAgIHJlc29sdmU6IGZ1bmN0aW9uIChuYW1lLCBwcm9wZXJ0eSwgdmFsdWUsIGFjdG9yKSB7XG4gICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSB2YWx1ZS5jdXJyZW50IHx8IDAsXG4gICAgICAgICAgICBpc051bWVyaWNhbFZhbHVlID0gY2hlY2tOdW1lcmljYWxWYWx1ZShuYW1lKTtcblxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgZnVuY3Rpb24sIHJlc29sdmVcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuYyhwcm9wZXJ0eSkgJiYgaXNOdW1lcmljYWxWYWx1ZSkge1xuICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5jYWxsKGFjdG9yLCBjdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHN0cmluZywgY2hlY2sgZm9yIHJlbGF0aXZlIHZhbHVlcyBhbmQgdW5pdHNcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHByb3BlcnR5KSkge1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHJlbGF0aXZlIHZhbHVlIChpZSAnKz0xMCcpXG4gICAgICAgICAgICBpZiAocHJvcGVydHkuaW5kZXhPZignPScpID4gMCkge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gY2FsYy5yZWxhdGl2ZVZhbHVlKGN1cnJlbnRWYWx1ZSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdW5pdCBpZiBzaG91bGQgYmUgbnVtZXJpY2FsIHByb3BlcnR5XG4gICAgICAgICAgICBpZiAoaXNOdW1lcmljYWxWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BsaXRVbml0KHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgbnVtZXJpY2FsIHZhbHVlLCBjb2VyY2VcbiAgICAgICAgaWYgKGlzTnVtZXJpY2FsVmFsdWUpIHtcbiAgICAgICAgICAgIHByb3BlcnR5ID0gcGFyc2VGbG9hdChwcm9wZXJ0eSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFByb2Nlc3MgbmV3IHZhbHVlc1xuICAgICovXG4gICAgcHJlcHJvY2VzczogZnVuY3Rpb24gKHZhbHVlcywgYWN0b3IsIGRlZmF1bHRWYWx1ZVByb3ApIHtcbiAgICAgICAgdmFyIHByZXByb2Nlc3NlZFZhbHVlcyA9IHt9LFxuICAgICAgICAgICAgdmFsdWUgPSB7fSxcbiAgICAgICAgICAgIHNwbGl0VmFsdWUgPSB7fSxcbiAgICAgICAgICAgIGNoaWxkVmFsdWUgPSB7fSxcbiAgICAgICAgICAgIHR5cGUgPSB7fSxcbiAgICAgICAgICAgIGV4aXN0aW5nVmFsdWUgPSB7fSxcbiAgICAgICAgICAgIGlzVmFsdWVPYmogPSBmYWxzZSxcbiAgICAgICAgICAgIGtleSA9ICcnLFxuICAgICAgICAgICAgcHJvcEtleSA9ICcnO1xuXG4gICAgICAgIGRlZmF1bHRWYWx1ZVByb3AgPSBkZWZhdWx0VmFsdWVQcm9wIHx8ICdjdXJyZW50JztcblxuICAgICAgICBmb3IgKGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXG4gICAgICAgICAgICAgICAgaXNWYWx1ZU9iaiA9IHV0aWxzLmlzT2JqKHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IChpc1ZhbHVlT2JqKSA/IHZhbHVlc1trZXldIDoge307XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdWYWx1ZSA9IGFjdG9yLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAgICAgdmFsdWUubmFtZSA9IGtleTtcblxuICAgICAgICAgICAgICAgIGlmICghaXNWYWx1ZU9iaikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVtkZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgZG9lc24ndCBoYXZlIGEgc3BlY2lhbCB0eXBlLCBjaGVjayBmb3Igb25lXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGV4aXN0aW5nIHZhbHVlIHdpdGggdGhpcyBrZXlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVmFsdWUgJiYgZXhpc3RpbmdWYWx1ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS50eXBlID0gZXhpc3RpbmdWYWx1ZS50eXBlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gT3IgY2hlY2sgcm91dGUgdHlwZW1hcHNcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnR5cGUgPSBjaGVja1JvbGVzKGtleSwgYWN0b3Iucm9sZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGNoZWNrIGJ5IHJ1bm5pbmcgdGVzdHMgaWYgdGhpcyBpcyBhIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZS50eXBlICYmIHV0aWxzLmlzU3RyaW5nKHZhbHVlW2RlZmF1bHRWYWx1ZVByb3BdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnR5cGUgPSB2YWx1ZVR5cGVzTWFuYWdlci50ZXN0KHZhbHVlW2RlZmF1bHRWYWx1ZVByb3BdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNldCB2YWx1ZVxuICAgICAgICAgICAgICAgIHByZXByb2Nlc3NlZFZhbHVlc1trZXldID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBwcm9jZXNzIGhhcyB0eXBlLCBzcGxpdCBvciBhc3NpZ24gZGVmYXVsdCBwcm9wc1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSB2YWx1ZVR5cGVzTWFuYWdlclt2YWx1ZS50eXBlXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGhhcyBhIHNwbGl0dGVyIGZ1bmN0aW9uLCBzcGxpdFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZS5zcGxpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuY2hpbGRyZW4gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWUgPSB0aGlzLnNwbGl0KGtleSwgdmFsdWUsIGFjdG9yLCB0eXBlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwcm9wS2V5IGluIHNwbGl0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlID0gdXRpbHMubWVyZ2UodmFsdWUsIHNwbGl0VmFsdWVbcHJvcEtleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlLnBhcmVudCA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZS5uYW1lID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlLnByb3BOYW1lID0gcHJvcEtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNoaWxkVmFsdWUudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNoaWxkVmFsdWUuY2hpbGRyZW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcHJvY2Vzc2VkVmFsdWVzW2tleSArIHByb3BLZXldID0gY2hpbGRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwcm9jZXNzZWRWYWx1ZXNba2V5XSA9IHV0aWxzLm1lcmdlKHZhbHVlVHlwZXNNYW5hZ2VyLmRlZmF1bHRQcm9wcyh2YWx1ZS50eXBlLCBrZXkpLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJlcHJvY2Vzc2VkVmFsdWVzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBQcm9jZXNzIG5ldyB2YWx1ZXNcbiAgICAqL1xuICAgIHByb2Nlc3M6IGZ1bmN0aW9uICh2YWx1ZXMsIGFjdG9yLCBkZWZhdWx0VmFsdWVQcm9wKSB7XG4gICAgICAgIHZhciBwcmVwcm9jZXNzZWRWYWx1ZXMgPSB0aGlzLnByZXByb2Nlc3ModmFsdWVzLCBhY3RvciwgZGVmYXVsdFZhbHVlUHJvcCksXG4gICAgICAgICAgICBrZXkgPSAnJyxcbiAgICAgICAgICAgIHByb3BLZXkgPSAnJyxcbiAgICAgICAgICAgIHByZXByb2Nlc3NlZFZhbHVlID0ge30sXG4gICAgICAgICAgICB0aGlzVmFsdWUgPSB7fSxcbiAgICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IHt9LFxuICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPSBmYWxzZSxcbiAgICAgICAgICAgIHByb3A7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gcHJlcHJvY2Vzc2VkVmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAocHJlcHJvY2Vzc2VkVmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBwcmVwcm9jZXNzZWRWYWx1ZSA9IHByZXByb2Nlc3NlZFZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIHRoaXNWYWx1ZSA9IGFjdG9yLnZhbHVlc1trZXldIHx8IHRoaXMuaW5pdGlhbFN0YXRlKHRoaXMucmVzb2x2ZSgnaW5pdCcsIHByZXByb2Nlc3NlZFZhbHVlLmluaXQsIHt9LCBhY3RvcikpO1xuICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID0gKHByZXByb2Nlc3NlZFZhbHVlLmNoaWxkcmVuICE9PSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIHRoaXNWYWx1ZS5hY3Rpb24gPSBwcmVwcm9jZXNzZWRWYWx1ZS5saW5rID8gJ2xpbmsnIDogYWN0b3IuYWN0aW9uO1xuICAgICAgICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IGFjdGlvbnNNYW5hZ2VyW3RoaXNWYWx1ZS5hY3Rpb25dLnZhbHVlRGVmYXVsdHM7XG5cbiAgICAgICAgICAgICAgICAvLyBJbmhlcml0IHByb3BlcnRpZXMgZnJvbSBBY3RvclxuICAgICAgICAgICAgICAgIGZvciAocHJvcEtleSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRQcm9wcy5oYXNPd25Qcm9wZXJ0eShwcm9wS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1ZhbHVlW3Byb3BLZXldID0gKGFjdG9yLmhhc093blByb3BlcnR5KHByb3BLZXkpKSA/IGFjdG9yW3Byb3BLZXldIDogZGVmYXVsdFByb3BzW3Byb3BLZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBwcm9wZXJ0aWVzIGFuZCByZXNvbHZlXG4gICAgICAgICAgICAgICAgZm9yIChwcm9wS2V5IGluIHByZXByb2Nlc3NlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVwcm9jZXNzZWRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcCA9IHByZXByb2Nlc3NlZFZhbHVlW3Byb3BLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgcHJvcGVydHkgaXMgKm5vdCogdW5kZWZpbmVkIG9yIGEgbnVtYmVyLCByZXNvbHZlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCAhPT0gdW5kZWZpbmVkICYmICFpc051bShwcm9wKSAmJiAhaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wID0gdGhpcy5yZXNvbHZlKHByb3BLZXksIHByb3AsIHRoaXNWYWx1ZSwgYWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzVmFsdWVbcHJvcEtleV0gPSBwcm9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGludGVybmFsIHRhcmdldCBpZiB0aGlzIHByb3BlcnR5IGlzICd0bydcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wS2V5ID09PSAndG8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1ZhbHVlLnRhcmdldCA9IHRoaXNWYWx1ZS50bztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXNWYWx1ZS5vcmlnaW4gPSB0aGlzVmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB0aGlzVmFsdWUuaGFzUmFuZ2UgPSAoaXNOdW0odGhpc1ZhbHVlLm1pbikgJiYgaXNOdW0odGhpc1ZhbHVlLm1heCkpID8gdHJ1ZSAgOiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGFjdG9yLnZhbHVlc1trZXldID0gdGhpc1ZhbHVlO1xuICAgICAgICAgICAgICAgIGFjdG9yLnVwZGF0ZU9yZGVyKGtleSwgdXRpbHMuaXNTdHJpbmcodGhpc1ZhbHVlLmxpbmspLCBoYXNDaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0b3IvdmFsdWUtb3BlcmF0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgUm9sZSA9IHJlcXVpcmUoJy4vUm9sZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBSb2xlKHtcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmluaXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9uU3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMub25TdGFydCgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGZyYW1lOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMub25GcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5vbkZyYW1lKHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5vblVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5vblVwZGF0ZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub25Db21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvbGVzL2RlZmF1bHRSb2xlLmpzXG4gKiogbW9kdWxlIGlkID0gNThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgLy8gW251bWJlcl06IERlZmF1bHQgbWF4IHNpemUgb2YgaGlzdG9yeVxuICAgIG1heEhpc3RvcnlTaXplID0gMyxcbiAgICBcbiAgICAvKlxuICAgICAgICBIaXN0b3J5IGNvbnN0cnVjdG9yXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3Zhcl06IFZhcmlhYmxlIHRvIHN0b3JlIGluIGZpcnN0IGhpc3Rvcnkgc2xvdFxuICAgICAgICBAcGFyYW0gW2ludF0gKG9wdGlvbmFsKTogTWF4aW11bSBzaXplIG9mIGhpc3RvcnlcbiAgICAqL1xuICAgIEhpc3RvcnkgPSBmdW5jdGlvbiAob2JqLCBtYXgpIHtcbiAgICAgICAgdGhpcy5tYXggPSBtYXggfHwgbWF4SGlzdG9yeVNpemU7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmFkZChvYmopO1xuICAgIH07XG4gICAgXG5IaXN0b3J5LnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBQdXNoIG5ldyB2YXIgdG8gaGlzdG9yeVxuICAgICAgICBcbiAgICAgICAgU2hpZnQgb3V0IG9sZGVzdCBlbnRyeSBpZiB3ZSd2ZSByZWFjaGVkIG1heGltdW0gY2FwYWNpdHlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbdmFyXTogVmFyaWFibGUgdG8gcHVzaCBpbnRvIGhpc3RvcnkuZW50cmllc1xuICAgICovXG4gICAgYWRkOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2l6ZSA9IHRoaXMuZ2V0U2l6ZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2gob2JqKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjdXJyZW50U2l6ZSA+PSB0aGlzLm1heCkge1xuICAgICAgICAgICAgdGhpcy5lbnRyaWVzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCB2YXJpYWJsZSBhdCBzcGVjaWZpZWQgaW5kZXhcblxuICAgICAgICBAcGFyYW0gW2ludF06IEluZGV4XG4gICAgICAgIEByZXR1cm4gW3Zhcl06IFZhciBmb3VuZCBhdCBzcGVjaWZpZWQgaW5kZXhcbiAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgaSA9ICh0eXBlb2YgaSA9PT0gJ251bWJlcicpID8gaSA6IHRoaXMuZ2V0U2l6ZSgpIC0gMTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzW2ldO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBzZWNvbmQgbmV3ZXN0IGhpc3RvcnkgZW50cnlcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3Zhcl06IEVudHJ5IGZvdW5kIGF0IGluZGV4IHNpemUgLSAyXG4gICAgKi9cbiAgICBnZXRQcmV2aW91czogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5nZXRTaXplKCkgLSAyKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBjdXJyZW50IGhpc3Rvcnkgc2l6ZVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbaW50XTogQ3VycmVudCBsZW5ndGggb2YgZW50cmllcy5sZW5ndGhcbiAgICAqL1xuICAgIGdldFNpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllcy5sZW5ndGg7XG4gICAgfVxuICAgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIaXN0b3J5O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL0hpc3RvcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG5cdEdlbmVyYXRlIG1ldGhvZCBpdGVyYXRvclxuXHRcblx0VGFrZXMgYSBtZXRob2QgbmFtZSBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbFxuXHRsb29wIG92ZXIgYWxsIHRoZSBFbGVtZW50cyBpbiBhIGdyb3VwIGFuZCBmaXJlIHRoYXRcblx0bWV0aG9kIHdpdGggdGhvc2UgcHJvcGVydGllc1xuXHRcblx0QHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIG1ldGhvZFxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbnVtRWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIGkgPSAwLFxuXHRcdFx0aXNHZXR0ZXIgPSBmYWxzZSxcblx0XHRcdGdldHRlckFycmF5ID0gW10sXG5cdFx0XHRhY3Rvcixcblx0XHRcdGFjdG9yUmV0dXJuO1xuXG5cdFx0Zm9yICg7IGkgPCBudW1FbGVtZW50czsgaSsrKSB7XG5cdFx0XHRhY3RvciA9IHRoaXMuZWxlbWVudHNbaV07XG5cdFx0XHRhY3RvclJldHVybiA9IGFjdG9yW21ldGhvZF0uYXBwbHkoYWN0b3IsIGFyZ3VtZW50cyk7XG5cblx0XHRcdGlmIChhY3RvclJldHVybiAhPSBhY3Rvcikge1xuICAgIFx0XHRcdGlzR2V0dGVyID0gdHJ1ZTtcbiAgICBcdFx0XHRnZXR0ZXJBcnJheS5wdXNoKGFjdG9yUmV0dXJuKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIChpc0dldHRlcikgPyBnZXR0ZXJBcnJheSA6IHRoaXM7XG5cdH07XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rvci9zeXN0ZW0vZ2VuZXJhdGUtaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBNb2RNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9rZXlzID0gW107XG4gICAgICAgIHRoaXMuX251bUtleXMgPSAwO1xuICAgIH07XG5cbk1vZE1hbmFnZXIucHJvdG90eXBlID0ge1xuXG4gICAgLypcbiAgICAgICAgQWRkIG1vZHVsZSBrZXkgdG8ga2V5cyBsaXN0XG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgdG8gYWRkXG4gICAgKi9cbiAgICBfYWRkS2V5OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB0aGlzLl9rZXlzLnB1c2gobmFtZSk7XG4gICAgICAgIHRoaXMuX251bUtleXMrKztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQWRkIGEgbmV3IG1vZHVsZVxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nIHx8IG9iamVjdF06IE5hbWUgb2YgbmV3IG1vZHVsZSBvciBtdWx0aXBsZSBtb2R1bGVzXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpOiBNb2R1bGUgdG8gYWRkXG4gICAgKi9cbiAgICBleHRlbmQ6IGZ1bmN0aW9uIChuYW1lLCBtb2QpIHtcbiAgICAgICAgdmFyIG11bHRpTW9kcyA9ICh0eXBlb2YgbmFtZSA9PSAnb2JqZWN0JyksXG4gICAgICAgICAgICBtb2RzID0gbXVsdGlNb2RzID8gbmFtZSA6IHt9LFxuICAgICAgICAgICAga2V5ID0gJyc7XG5cbiAgICAgICAgLy8gSWYgd2UganVzdCBoYXZlIG9uZSBtb2R1bGUsIGNvZXJjZVxuICAgICAgICBpZiAoIW11bHRpTW9kcykge1xuICAgICAgICAgICAgbW9kc1tuYW1lXSA9IG1vZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoa2V5IGluIG1vZHMpIHtcbiAgICAgICAgICAgIGlmIChtb2RzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRLZXkoa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBtb2RzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZWFjaDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBrZXkgPSAnJztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX251bUtleXM7IGkrKykge1xuICAgICAgICAgICAga2V5ID0gdGhpcy5fa2V5c1tpXTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGtleSwgdGhpc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kTWFuYWdlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9Nb2RNYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFxuICAgIC8vIFtudW1iZXJdOiBEZWxheSB0aGlzIGFjdGlvbiBieSB4IG1zXG4gICAgZGVsYXk6IDAsXG4gICAgXG4gICAgLy8gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgd2hlbiBBY3Rpb24gcHJvY2VzcyBzdGFydHNcbiAgICBvblN0YXJ0OiB1bmRlZmluZWQsXG4gICAgXG4gICAgLy8gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgd2hlbiBhbnkgdmFsdWUgY2hhbmdlc1xuICAgIG9uQ2hhbmdlOiB1bmRlZmluZWQsXG4gICAgXG4gICAgLy8gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgZXZlcnkgZnJhbWVcbiAgICBvbkZyYW1lOiB1bmRlZmluZWQsXG4gICAgXG4gICAgLy8gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgd2hlbiBBY3Rpb24gcHJvY2VzcyBlbmRzXG4gICAgb25FbmQ6IHVuZGVmaW5lZFxuXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9nZW5lcmljL2RlZmF1bHQtYWN0aW9uLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLy8gW251bWJlcl06IEN1cnJlbnQgdGFyZ2V0IHZhbHVlXG4gICAgdG86IHVuZGVmaW5lZCxcblxuICAgIC8vIFtudW1iZXJdOiBNYXhpbXVtIHBlcm1pdHRlZCB2YWx1ZSBkdXJpbmcgLnRyYWNrIGFuZCAucnVuXG4gICAgbWluOiB1bmRlZmluZWQsXG4gICAgXG4gICAgLy8gW251bWJlcl06IE1pbmltdW0gcGVybWl0dGVkIHZhbHVlIGR1cmluZyAudHJhY2sgYW5kIC5ydW5cbiAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogT3JpZ2luXG4gICAgb3JpZ2luOiAwLFxuICAgIFxuICAgIC8vIFtib29sZWFuXTogU2V0IHRvIHRydWUgd2hlbiBib3RoIG1pbiBhbmQgbWF4IGRldGVjdGVkXG4gICAgaGFzUmFuZ2U6IGZhbHNlLFxuXG4gICAgLy8gW2Jvb2xlYW5dOiBSb3VuZCBvdXRwdXQgaWYgdHJ1ZVxuICAgIHJvdW5kOiBmYWxzZSxcblxuICAgIC8vIFtzdHJpbmddOiBOYW1lIG9mIHZhbHVlIHRvIGxpc3RlbiB0b1xuICAgIGxpbms6IHVuZGVmaW5lZFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZ2VuZXJpYy9kZWZhdWx0LXZhbHVlLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXG4gICAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgICAgICBcbiAgICBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgXG4gICAgVXNlXG4gICAgXG4gICAgICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA4LFxuICAgIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMSxcbiAgICBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDEsXG4gICAgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMCxcbiAgICBLX1NQTElORV9UQUJMRV9TSVpFID0gMTEsXG4gICAgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApLFxuICAgIEZMT0FUXzMyX1NVUFBPUlRFRCA9ICh0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyksXG4gICAgXG4gICAgYSA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG4gICAgfSxcbiAgICBcbiAgICBiID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgICAgICByZXR1cm4gMy4wICogYTIgLSA2LjAgKiBhMTtcbiAgICB9LFxuICAgIFxuICAgIGMgPSBmdW5jdGlvbiAoYTEpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGExO1xuICAgIH0sXG5cbiAgICBnZXRTbG9wZSA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogYihhMSwgYTIpICogdCArIGMoYTEpO1xuICAgIH0sXG5cbiAgICBjYWxjQmV6aWVyID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgICAgICByZXR1cm4gKChhKGExLCBhMikgKiB0ICsgYihhMSwgYTIpKSAqIHQgKyBjKGExKSkgKiB0O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQmV6aWVyIGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBCZXppZXIgPSBmdW5jdGlvbiAobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpLFxuICAgICAgICAgICAgX3ByZWNvbXB1dGVkID0gZmFsc2UsXG4gICAgXG4gICAgICAgICAgICBiaW5hcnlTdWJkaXZpZGUgPSBmdW5jdGlvbiAoYVgsIGFBLCBhQikge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50VDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAgICAgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSBmdW5jdGlvbiAoYVgsIGFHdWVzc1QpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBLX1NQTElORV9UQUJMRV9TSVpFOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBnZXRURm9yWCA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2FtcGxlID0gMSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLFxuICAgICAgICAgICAgICAgICAgICBkaXN0ID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBndWVzc0ZvclQgPSAwLjAsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbG9wZSA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlKzFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgICAgICAgICBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBzbG9wZSBpcyBncmVhdGVyIHRoYW4gbWluXG4gICAgICAgICAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgICAgICAgICAvLyBTbG9wZSBpcyBlcXVhbCB0byBtaW5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgICAgICAgICAgLy8gU2xvcGUgaXMgbGVzcyB0aGFuIG1pblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBLX1NBTVBMRV9TVEVQX1NJWkUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHByZWNvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAobVgxICE9IG1ZMSB8fCBtWDIgIT0gbVkyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIEdlbmVyYXRlZCBmdW5jdGlvblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFJldHVybnMgdmFsdWUgMC0xIGJhc2VkIG9uIFhcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBmID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldHVyblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlY29tcHV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBsaW5lYXIgZ3JhZGllbnQsIHJldHVybiBYIGFzIFRcbiAgICAgICAgICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhWDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgYXQgc3RhcnQsIHJldHVybiAwXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIGF0IGVuZCwgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gY2FsY0JlemllcihnZXRURm9yWChhWCksIG1ZMSwgbVkyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBCZXppZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3BsYXkvQmV6aWVyLmpzXG4gKiogbW9kdWxlIGlkID0gNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdGhlTG9vcCA9IHJlcXVpcmUoJy4vbG9vcC5qcycpLFxuICAgIFByb2Nlc3NNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUlkcyA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZVByb2Nlc3NlcyA9IHt9O1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuICAgICAgICB0aGVMb29wLnNldENhbGxiYWNrKHRoaXMsIHRoaXMuZmlyZUFjdGl2ZSk7XG4gICAgfTtcbiAgICBcblByb2Nlc3NNYW5hZ2VyLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBbaW50XTogVXNlZCBmb3IgcHJvY2VzcyBJRFxuICAgICovXG4gICAgcHJvY2Vzc0NvdW50ZXI6IDAsXG4gICAgXG4gICAgLypcbiAgICAgICAgW2ludF06IE51bWJlciBvZiBhY3RpdmUgcHJvY2Vzc2VzXG4gICAgKi9cbiAgICBhY3RpdmVDb3VudDogMCxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdGhlIHByb2Nlc3Mgd2l0aCBhIGdpdmVuIGluZGV4XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IEluZGV4IG9mIHByb2Nlc3NcbiAgICAgICAgQHJldHVybiBbUHJvY2Vzc11cbiAgICAqL1xuICAgIGdldFByb2Nlc3M6IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZVByb2Nlc3Nlc1tpXTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBudW1iZXIgb2YgYWN0aXZlIHByb2Nlc3Nlc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbaW50XTogTnVtYmVyIG9mIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICAqL1xuICAgIGdldEFjdGl2ZUNvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNvdW50O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGFjdGl2ZSB0b2tlbnNcblxuICAgICAgICBAcmV0dXJuIFthcnJheV06IEFjdGl2ZSB0b2tlbnNcbiAgICAqL1xuICAgIGdldEFjdGl2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVJZHM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbaW50XTogTGVuZ3RoIG9mIHF1ZXVlXG4gICAgKi9cbiAgICBnZXRRdWV1ZUxlbmd0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRmlyZSBhbGwgYWN0aXZlIHByb2Nlc3Nlc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBUaW1lc3RhbXAgb2YgZXhlY3V0aW5nIGZyYW1lc1xuICAgICAgICBAcGFyYW0gW2ludF06IFRpbWUgc2luY2UgcHJldmlvdXMgZnJhbWVcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgYWN0aXZlIHByb2Nlc3NlcyBmb3VuZFxuICAgICovXG4gICAgZmlyZUFjdGl2ZTogZnVuY3Rpb24gKGZyYW1lc3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdmFyIHByb2Nlc3MsXG4gICAgICAgICAgICBhY3RpdmVDb3VudCA9IDAsXG4gICAgICAgICAgICBhY3RpdmVJZHMgPSBbXSxcbiAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgIC8vIFB1cmdlIGFuZCBjaGVjayBhY3RpdmUgY291bnQgYmVmb3JlIGV4ZWN1dGlvblxuICAgICAgICB0aGlzLnB1cmdlKCk7XG4gICAgICAgIGFjdGl2ZUNvdW50ID0gdGhpcy5nZXRBY3RpdmVDb3VudCgpO1xuICAgICAgICBhY3RpdmVJZHMgPSB0aGlzLmdldEFjdGl2ZSgpO1xuXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhY3RpdmUgcHJvY2Vzc2VzIGFuZCBmaXJlIGNhbGxiYWNrXG4gICAgICAgIGZvciAoOyBpIDwgYWN0aXZlQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgcHJvY2VzcyA9IHRoaXMuZ2V0UHJvY2VzcyhhY3RpdmVJZHNbaV0pO1xuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcykge1xuICAgICAgICAgICAgICAgIHByb2Nlc3MuZmlyZShmcmFtZXN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlcHVyZ2UgYW5kIHJlY2hlY2sgYWN0aXZlIGNvdW50IGFmdGVyIGV4ZWN1dGlvblxuICAgICAgICB0aGlzLnB1cmdlKCk7XG4gICAgICAgIGFjdGl2ZUNvdW50ID0gdGhpcy5nZXRBY3RpdmVDb3VudCgpO1xuXG4gICAgICAgIC8vIFJldHVybiB0cnVlIGlmIHdlIHN0aWxsIGhhdmUgYWN0aXZlIHByb2Nlc3Nlcywgb3IgZmFsc2UgaWYgbm9uZVxuICAgICAgICByZXR1cm4gYWN0aXZlQ291bnQgPyB0cnVlIDogZmFsc2U7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBSZWdpc3RlciBhIG5ldyBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW1Byb2Nlc3NdXG4gICAgICAgIEByZXR1cm4gW2ludF06IEluZGV4IG9mIHByb2Nlc3MgdG8gYmUgdXNlZCBhcyBJRFxuICAgICovXG4gICAgcmVnaXN0ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc0NvdW50ZXIrKztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEFjdGl2YXRlIGEgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleCBvZiBhY3RpdmUgcHJvY2Vzc1xuICAgICovXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChwcm9jZXNzLCBpKSB7XG4gICAgICAgIHZhciBxdWV1ZUluZGV4ID0gdGhpcy5kZWFjdGl2YXRlUXVldWUuaW5kZXhPZihpKSxcbiAgICAgICAgICAgIGlzUXVldWVkID0gKHF1ZXVlSW5kZXggPiAtMSksXG4gICAgICAgICAgICBpc0FjdGl2ZSA9ICh0aGlzLmFjdGl2ZUlkcy5pbmRleE9mKGkpID4gLTEpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIGRlYWN0aXZhdGVRdWV1ZSBpZiBpbiB0aGVyZVxuICAgICAgICBpZiAoaXNRdWV1ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLnNwbGljZShxdWV1ZUluZGV4LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB0byBhY3RpdmUgcHJvY2Vzc2VzIGFycmF5IGlmIG5vdCBhbHJlYWR5IGluIHRoZXJlXG4gICAgICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSWRzLnB1c2goaSk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVByb2Nlc3Nlc1tpXSA9IHByb2Nlc3M7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNvdW50Kys7XG4gICAgICAgICAgICB0aGVMb29wLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIERlYWN0aXZhdGUgYSBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IEluZGV4IG9mIHByb2Nlc3MgdG8gYWRkIHRvIGRlYWN0aXZhdGUgcXVldWVcbiAgICAqL1xuICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLnB1c2goaSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBQdXJnZSB0aGUgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICovXG4gICAgcHVyZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHF1ZXVlTGVuZ3RoID0gdGhpcy5nZXRRdWV1ZUxlbmd0aCgpLFxuICAgICAgICAgICAgYWN0aXZlSWRJbmRleCA9IDAsXG4gICAgICAgICAgICBpZFRvRGVsZXRlID0gMDtcblxuICAgICAgICB3aGlsZSAocXVldWVMZW5ndGgtLSkge1xuICAgICAgICAgICAgaWRUb0RlbGV0ZSA9IHRoaXMuZGVhY3RpdmF0ZVF1ZXVlW3F1ZXVlTGVuZ3RoXTtcbiAgICAgICAgICAgIGFjdGl2ZUlkSW5kZXggPSB0aGlzLmFjdGl2ZUlkcy5pbmRleE9mKGlkVG9EZWxldGUpO1xuXG4gICAgICAgICAgICAvLyBJZiBwcm9jZXNzIGluIGFjdGl2ZSBsaXN0IGRlYWN0aXZhdGVcbiAgICAgICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUlkcy5zcGxpY2UoYWN0aXZlSWRJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDb3VudC0tO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZVByb2Nlc3Nlc1tpZFRvRGVsZXRlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlUXVldWUgPSBbXTtcbiAgICB9XG4gICAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBQcm9jZXNzTWFuYWdlcigpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy9tYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcHJlc2V0TWFuYWdlciA9IHJlcXVpcmUoJy4uLy4uL2FjdG9yL3ByZXNldC1tYW5hZ2VyJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKSxcblxuICAgIHBhcnNlUGxheWxpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgICAgcGxheWxpc3QgPSBhcmdzWzBdLnNwbGl0KCcgJyksXG4gICAgICAgICAgICBwbGF5bGlzdExlbmd0aCA9IHBsYXlsaXN0Lmxlbmd0aCxcbiAgICAgICAgICAgIHByb3BzID0gcHJlc2V0TWFuYWdlci5nZXREZWZpbmVkKHBsYXlsaXN0WzBdKSxcbiAgICAgICAgICAgIGkgPSAxO1xuXG4gICAgICAgIC8vIElmIHdlJ3ZlIGdvdCBtdWx0aXBsZSBwbGF5bGlzdHMsIGxvb3AgdGhyb3VnaCBhbmQgYWRkIGVhY2ggdG8gdGhlIHF1ZXVlXG4gICAgICAgIGlmIChwbGF5bGlzdExlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgcGxheWxpc3RMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyZ3Muc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBhcmdzLnVuc2hpZnQocGxheWxpc3RbaV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucXVldWUuYWRkLmFwcGx5KHRoaXMucXVldWUsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICBudW1BcmdzID0gYXJncy5sZW5ndGgsXG4gICAgICAgIC8vIElmIGZpcnN0IGFyZ3VtZW50IGlzIGEgc3RyaW5nLCBnZXQgYmFzZSBvYmplY3QgZnJvbSBwcmVzZXRzXG4gICAgICAgIHByb3BzID0gdXRpbHMuaXNTdHJpbmcoYXJnc1swXSkgPyBwYXJzZVBsYXlsaXN0LmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgaSA9IDE7XG5cbiAgICAvLyBMb29wIHRocm91Z2ggYXJndW1lbnRzXG4gICAgZm9yICg7IGkgPCBudW1BcmdzOyBpKyspIHtcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgYXJnc1tpXSkge1xuICAgICAgICAgICAgLy8gT3ZlcnJpZGUgcHJvcGVydGllc1xuICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICBwcm9wcyA9IHV0aWxzLm1lcmdlKHByb3BzLCBhcmdzW2ldKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIER1cmF0aW9uXG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgIHByb3BzLmR1cmF0aW9uID0gYXJnc1tpXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIEVhc2luZ1xuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgICAgICBwcm9wcy5lYXNlID0gYXJnc1tpXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgLnBsYXkgcHJvcGVydGllc1xuICAgIHByb3BzLmxvb3BDb3VudCA9IHByb3BzLnlveW9Db3VudCA9IHByb3BzLmZsaXBDb3VudCA9IDA7XG4gICAgcHJvcHMucGxheURpcmVjdGlvbiA9IDE7XG5cbiAgICByZXR1cm4gcHJvcHM7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3BsYXkvcGFyc2UtYXJncy5qc1xuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL3NwbGl0LWNvbW1hLWRlbGltaXRlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignKCcpICsgMSwgdmFsdWUubGFzdEluZGV4T2YoJyknKSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWJyZWFrLmpzXG4gKiogbW9kdWxlIGlkID0gNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcG9zaXRpb25UZXJtcyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnknKS5wb3NpdGlvbnMsXG4gICAgbnVtUG9zaXRpb25UZXJtcyA9IHBvc2l0aW9uVGVybXMubGVuZ3RoLFxuXG4gICAgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJyxcbiAgICBTQ0FMRSA9ICdzY2FsZScsXG4gICAgUk9UQVRFID0gJ3JvdGF0ZScsXG4gICAgdGVybXMgPSB7XG4gICAgICAgIGZ1bmNzOiBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSxcbiAgICAgICAgcHJvcHM6IHt9IC8vIG9iamVjdHMgYXJlIGZhc3RlciBhdCBkaXJlY3QgbG9va3Vwc1xuICAgIH07XG5cbi8vIENyZWF0ZSB0cmFuc2Zvcm0gdGVybXNcbihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZ1bmNzID0gdGVybXMuZnVuY3MsXG4gICAgICAgIHByb3BzID0gdGVybXMucHJvcHMsXG4gICAgICAgIG51bUZ1bmNzID0gZnVuY3MubGVuZ3RoLFxuICAgICAgICBpID0gMCxcblxuICAgICAgICBjcmVhdGVQcm9wcyA9IGZ1bmN0aW9uIChmdW5jTmFtZSkge1xuICAgICAgICAgICAgdmFyIGogPSAwO1xuXG4gICAgICAgICAgICBmb3IgKDsgaiA8IG51bVBvc2l0aW9uVGVybXM7IGorKykge1xuICAgICAgICAgICAgICAgIHByb3BzW2Z1bmNOYW1lICsgcG9zaXRpb25UZXJtc1tqXV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIFxuICAgIC8vIE1hbnVhbGx5IGFkZCBza2V3IGFuZCB0cmFuc2Zvcm0gcGVyc3BlY3RpdmUgIFxuICAgIHByb3BzW1JPVEFURV0gPSBwcm9wc1tTQ0FMRV0gPSBwcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcbiAgICBcbiAgICAvLyBMb29wIG92ZXIgZWFjaCBmdW5jdGlvbiBuYW1lIGFuZCBjcmVhdGUgZnVuY3Rpb24vcHJvcGVydHkgdGVybXNcbiAgICBmb3IgKDsgaSA8IG51bUZ1bmNzOyBpKyspIHtcbiAgICAgICAgY3JlYXRlUHJvcHMoZnVuY3NbaV0pO1xuICAgIH1cbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gdGVybXM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yb2xlcy9jc3MvdHJhbnNmb3JtLWRpY3Rpb25hcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcbiAgICBUaGUgbG9vcFxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgVGltZXIgPSByZXF1aXJlKCcuL3RpbWVyLmpzJyksXG4gICAgdGljayA9IHJlcXVpcmUoJy4vdGljay5qcycpLFxuICAgIExvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudGltZXIgPSBuZXcgVGltZXIoKTtcbiAgICB9O1xuICAgIFxuTG9vcC5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLypcbiAgICAgICAgW2Jvb2xlYW5dOiBDdXJyZW50IHN0YXR1cyBvZiBhbmltYXRpb24gbG9vcFxuICAgICovXG4gICAgaXNSdW5uaW5nOiBmYWxzZSxcbiAgICBcbiAgICAvKlxuICAgICAgICBGaXJlIGFsbCBhY3RpdmUgcHJvY2Vzc2VzIG9uY2UgcGVyIGZyYW1lXG4gICAgKi9cbiAgICBmcmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZnJhbWVzdGFtcCA9IHNlbGYudGltZXIudXBkYXRlKCksIC8vIEN1cnJlbnRseSBqdXN0IG1lYXN1cmluZyBpbiBtcyAtIHdpbGwgbG9vayBpbnRvIGhpLXJlcyB0aW1lc3RhbXBzXG4gICAgICAgICAgICAgICAgaXNBY3RpdmUgPSBzZWxmLmNhbGxiYWNrLmNhbGwoc2VsZi5zY29wZSwgZnJhbWVzdGFtcCwgc2VsZi50aW1lci5nZXRFbGFwc2VkKCkpO1xuXG4gICAgICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmZyYW1lKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0YXJ0IGxvb3BcbiAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSdyZSBub3QgYWxyZWFkeSBydW5uaW5nIGEgbG9vcFxuICAgICAgICBpZiAoIXRoaXMuaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyLmNsb2NrKCk7XG4gICAgICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZyYW1lKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0b3AgdGhlIGxvb3BcbiAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFNldCB0aGUgY2FsbGJhY2sgdG8gcnVuIGV2ZXJ5IGZyYW1lXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW09iamVjdF06IEV4ZWN1dGlvbiBjb250ZXh0XG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBmaXJlXG4gICAgKi9cbiAgICBzZXRDYWxsYmFjazogZnVuY3Rpb24gKHNjb3BlLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBMb29wKCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wcm9jZXNzL2xvb3AuanNcbiAqKiBtb2R1bGUgaWQgPSA3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscy5qcycpLFxuXG4gICAgbWF4RWxhcHNlZCA9IDMzLFxuICAgIFRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAxNi43O1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG5cblRpbWVyLnByb3RvdHlwZSA9IHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50O1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSBNYXRoLm1pbih0aGlzLmN1cnJlbnQgLSB0aGlzLnByZXYsIG1heEVsYXBzZWQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gICAgfSxcblxuICAgIGdldEVsYXBzZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxhcHNlZDtcbiAgICB9LFxuICAgIFxuICAgIGNsb2NrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHV0aWxzLmN1cnJlbnRUaW1lKCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaW1lcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvdGltZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgIFxuICAgIEZvciBJRTgvOSBGbGluc3RvbmVzXG5cbiAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgXG4gICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgXG4gICAgTUlUIGxpY2Vuc2VcbiovXG52YXIgdGljayxcbiAgICBsYXN0VGltZSA9IDAsXG4gICAgaGFzV2luZG93ID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKTtcblxuaWYgKCFoYXNXaW5kb3cpIHtcbiAgICAvLyBMb2FkIHJBRiBzaGltXG4gICAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSksXG4gICAgICAgICAgICBpZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcblxuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9OyAgXG4gICAgXG59IGVsc2Uge1xuICAgIHRpY2sgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRpY2s7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wcm9jZXNzL3RpY2suanNcbiAqKiBtb2R1bGUgaWQgPSA3MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicG9wbW90aW9uLmdsb2JhbC5qcyJ9