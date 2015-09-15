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
	
	/*
	    Add optional custom value type support
	*/
	popmotion.addValueType({
	    alpha: __webpack_require__(3),
	    angle: __webpack_require__(4),
	    px: __webpack_require__(5),
	    hsl: __webpack_require__(6),
	    rgb: __webpack_require__(7),
	    hex: __webpack_require__(8),
	    color: __webpack_require__(9),
	    positions: __webpack_require__(10),
	    dimensions: __webpack_require__(11),
	    shadow: __webpack_require__(12)
	});
	
	/*
	    Predefined roles
	*/
	popmotion.attr = __webpack_require__(13);
	popmotion.css = __webpack_require__(14);
	popmotion.svg = __webpack_require__(15);
	popmotion.drawPath = __webpack_require__(16);
	popmotion.movePath = __webpack_require__(17);  
	
	module.exports = popmotion;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var valueTypeManager = __webpack_require__(18),
	
	    Popmotion = {
	
	        Actor: __webpack_require__(19),
	
	        ActorCollection: __webpack_require__(20),
	
	        Input: __webpack_require__(21),
	
	        Process: __webpack_require__(22),
	
	        Easing: __webpack_require__(24),
	
	        Role: __webpack_require__(23),
	
	        Tween: __webpack_require__(49),
	        Simulate: __webpack_require__(50),
	        Track: __webpack_require__(51),
	
	        select: __webpack_require__(25),
	
	        addValueType: function () {
	            valueTypeManager.extend.apply(valueTypeManager, arguments);
	            return this;
	        },
	
	        calc: __webpack_require__(26)
	    };
	
	module.exports = Popmotion;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    defaultProps: {
	        min: 0,
	        max: 1
	    }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    defaultProps: {
	        unit: 'deg'
	    }
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    defaultProps: {
	        unit: 'px'
	    }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var createDelimited = __webpack_require__(27),
	    getColorValues = __webpack_require__(28),
	    functionCreate = __webpack_require__(29),
	    defaultProps = __webpack_require__(30),
	    terms = __webpack_require__(31).hsl;
	
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var createDelimited = __webpack_require__(27),
	    getColorValues = __webpack_require__(28),
	    functionCreate = __webpack_require__(29),
	    defaultProps = __webpack_require__(30),
	    colorDefaults = defaultProps.color,
	    terms = __webpack_require__(31).colors;
	
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var rgb = __webpack_require__(7);
	
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var utils = __webpack_require__(32),
	    rgb = __webpack_require__(7),
	    hsl = __webpack_require__(6),
	    hex = __webpack_require__(8),
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var createDelimited = __webpack_require__(27),
	    pxDefaults = __webpack_require__(5).defaultProps,
	    splitSpaceDelimited = __webpack_require__(33),
	    terms = __webpack_require__(31).positions;
	
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var terms = __webpack_require__(31).dimensions,
	    pxDefaults = __webpack_require__(5).defaultProps,
	    createDelimited = __webpack_require__(27),
	    splitSpaceDelimited = __webpack_require__(33);
	
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var color = __webpack_require__(9),
	    utils = __webpack_require__(32),
	    pxDefaults = __webpack_require__(5).defaultProps,
	    terms = __webpack_require__(31).shadow,
	    splitSpaceDelimited = __webpack_require__(33),
	    createDelimited = __webpack_require__(27),
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Role = __webpack_require__(23);
	var each = __webpack_require__(32).each;
	
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Role = __webpack_require__(23);
	var build = __webpack_require__(34);
	var each = __webpack_require__(32).each;
	
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
	
	    _map: __webpack_require__(35),
	    _typeMap: __webpack_require__(36),
	
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Role = __webpack_require__(23),
	    attrRole = __webpack_require__(13),
	    build = __webpack_require__(37),
	    each = __webpack_require__(32).each,
	
	    COLOR = 'color';
	
	module.exports = new Role({
	    name: 'svg',
	
	    _typeMap: {
	        fill: COLOR,
	        stroke: COLOR
	    },
	
	    init: function () {
	        console.log(this.element.getBBox());
	    },
	
	    update: function (state) {
	        var actor = this;
	
	        each(build(state), function (key, value) {
	            attrRole.set.call(actor, key, value);
	        });
	    }
	
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Role = __webpack_require__(23);
	var cssRole = __webpack_require__(14);
	var each = __webpack_require__(32).each;
	
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
	    _map: __webpack_require__(38),
	
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var getAngle = __webpack_require__(26).angle;
	
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ModManager = __webpack_require__(39),
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Process = __webpack_require__(22),
	    Queue = __webpack_require__(40),
	    Pointer = __webpack_require__(41),
	    utils = __webpack_require__(32),
	    update = __webpack_require__(42),
	    valueOps = __webpack_require__(43),
	    defaultRole = __webpack_require__(44),
	    cssRole = __webpack_require__(14),
	    svgRole = __webpack_require__(15),
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
	        this.clearOrder();
	
	        // Detect/add roles
	        if (opts) {
	            // Auto-detect element type, if present and no roles defined
	            if (!opts.as && opts.element) {
	                // Add CSS role if HTMLElement
	                if (opts.element instanceof HTMLElement) {
	                    roles.push(cssRole);
	
	                } else if (opts.element instanceof SVGElement) {
	                    roles.push(svgRole);
	                }
	            // Manuall adding roles
	            } else if (opts.as) {
	                if (utils.isArray(opts.as)) {
	                    roles.push.apply(roles, opts.as);
	                } else {
	                    roles.push(opts.as);
	                }
	            }
	
	            this.set(opts);
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
	        this.resetProps();
	
	        if (props) {
	            if (props.getName) {
	                this.action = props;
	            }
	
	            this.setProps(props);
	            this.setValues(props.values, defaultValueProp);
	        }
	
	        return this;
	    },
	
	    /*
	        Start action
	    */
	    start: function (action, input) {
	        this.resetOrigins();
	
	        if (action) {
	            this.set(action);
	        }
	        
	        // Stop existing inputs if this is a track - do this only for pointers? or unsubscribe?
	        if (this.action.getName() !== 'track' && this.input && this.input.stop) {
	            this.input.stop();
	        }
	
	        if (input) {
	            // Create Pointer if this is an event
	            this.input = (!input.current) ? new Pointer(input) : input;
	            this.inputOrigin = this.input.get();
	        }
	
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
	        Add a new action to the queue
	    */
	    then: function () {
	        this.queue.add.apply(this.queue, arguments);
	        return this;
	    },
	
	    /*
	        Execute next in queue
	    */
	    next: function () {
	        var nextInQueue = this.queue.next();
	
	        if (nextInQueue) {
	            if (utils.isFunc(nextInQueue)) {
	                nextInQueue();
	                this.stop();
	            } else {
	                this.start(nextInQueue);
	            }
	        } else {
	            this.stop();
	        }
	
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
	            this.setProps(this.action.getDefaultProps());
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
	
	module.exports = Actor;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Actor = __webpack_require__(19),
	    generateMethodIterator = __webpack_require__(45),
	    utils = __webpack_require__(32),
	
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
	
	module.exports = ActorCollection;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Input controller
	*/
	"use strict";
	
	var calc = __webpack_require__(26),
	    utils = __webpack_require__(32),
	    History = __webpack_require__(46),
	
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var manager = __webpack_require__(47),
	
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(32);
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var Bezier = __webpack_require__(48),
	
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ActorCollection = __webpack_require__(20);
	
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Calculators
	    ----------------------------------------
	    
	    Simple I/O snippets
	*/
	"use strict";
	
	var utils = __webpack_require__(32),
	
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
/* 27 */
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var splitCommaDelimited = __webpack_require__(52),
	    functionBreak = __webpack_require__(53);
	
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (value, prefix) {
	    return prefix + '(' + value + ')';
	};

/***/ },
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (value) {
	    return (typeof value === 'string') ? value.split(' ') : [value];
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var transformDictionary = __webpack_require__(54),
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var TRANSLATE = 'translate';
	
	module.exports = {
	    x: TRANSLATE + 'X',
	    y: TRANSLATE + 'Y',
	    z: TRANSLATE + 'Z'
	};

/***/ },
/* 36 */
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {



/***/ },
/* 38 */
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
/* 39 */
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
/* 40 */
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
	        this.queue.push(arguments[0]);
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Input = __webpack_require__(21),
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var valueTypeManager = __webpack_require__(18),
	    calc = __webpack_require__(26),
	    each = __webpack_require__(32).each,
	    Watch = __webpack_require__(58),
	    watcher = new Watch(),
	
	    createMapper = function (role, mappedValues) {
	        return function (name, val) {
	            mappedValues[role.map(name)] = val;
	        };
	    },
	
	    update = function (framestamp, frameDuration) {
	        var actor = this,
	            values = this.values,
	            action = this.action,
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
	            valueAction = value.watch ? watcher : action;
	
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
	
	            each(this.state.values, createMapper(role, mappedValues));
	
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
	
	            // If Actor is still inactive, fire next step
	            if (!this.isActive) {
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var calc = __webpack_require__(26),
	    utils = __webpack_require__(32),
	    isNum = utils.isNum,
	    valueTypesManager = __webpack_require__(18),
	    genericDefaultValue = __webpack_require__(59).prototype.getDefaultValue(),
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
	                thisValue.action = preprocessedValue.watch ? 'watch' : actor.action;
	                defaultProps = actor.action ? actor.action.getDefaultValue() : genericDefaultValue;
	
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var Role = __webpack_require__(23);
	
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
/* 45 */
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
/* 46 */
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var theLoop = __webpack_require__(55),
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
/* 48 */
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(59),
	    calc = __webpack_require__(26),
	    utils = __webpack_require__(32),
	    presetEasing = __webpack_require__(56),
	
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
	ease = function ease(progress, from, to, _ease, escapeAmp) {
	    var progressLimited = calc.restricted(progress, 0, 1),
	        easingFunction = utils.isString(_ease) ? presetEasing[_ease] : _ease;
	
	    return calc.valueEased(progressLimited, from, to, easingFunction);
	};
	
	var Tween = (function (_Action) {
	    _inherits(Tween, _Action);
	
	    function Tween() {
	        _classCallCheck(this, Tween);
	
	        _Action.apply(this, arguments);
	    }
	
	    Tween.prototype.getName = function getName() {
	        return 'tween';
	    };
	
	    Tween.prototype.getDefaultProps = function getDefaultProps() {
	        return {
	            delay: 0,
	            dilate: 1,
	            duration: 300,
	            loop: false,
	            yoyo: false,
	            flip: false,
	            playDirection: 1
	        };
	    };
	
	    Tween.prototype.getDefaultValue = function getDefaultValue() {
	        return {
	            delay: 0,
	            duration: 300,
	            ease: 'easeOut',
	            stagger: 0,
	            steps: 0,
	            to: 0,
	            round: false
	        };
	    };
	
	    Tween.prototype.getDefaultValueProp = function getDefaultValueProp() {
	        return 'to';
	    };
	
	    /*
	        Update Action elapsed time
	        
	        @param [object]: Action properties
	        @param [number]: Timestamp of current frame
	    */
	
	    Tween.prototype.onFrameStart = function onFrameStart(frameDuration) {
	        if (frameDuration) {
	            this.elapsed += frameDuration * this.dilate * this.playDirection;
	        }
	
	        this.hasEnded = true;
	    };
	
	    /*
	        Calculate progress of value based on time elapsed,
	        value delay/duration/stagger properties
	         @param [object]: Value state and properties
	        @return [number]: Calculated value
	    */
	
	    Tween.prototype.process = function process(value) {
	        var target = value.to,
	            progressTarget = this.playDirection === 1 ? 1 : 0,
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
	    };
	
	    /*
	        Return hasEnded property
	        
	        @return [boolean]: Have all Values hit 1 progress?
	    */
	
	    Tween.prototype.hasEnded = function hasEnded() {
	        return this.hasEnded;
	    };
	
	    return Tween;
	})(Action);
	
	module.exports = Tween;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(59),
	    calc = __webpack_require__(26),
	    utils = __webpack_require__(32),
	    simulations = __webpack_require__(57);
	
	var DEFAULT_PROP = 'velocity';
	
	var Simulate = (function (_Action) {
	    _inherits(Simulate, _Action);
	
	    function Simulate() {
	        _classCallCheck(this, Simulate);
	
	        _Action.apply(this, arguments);
	    }
	
	    Simulate.prototype.getName = function getName() {
	        return 'simulate';
	    };
	
	    Simulate.prototype.getDefaultProps = function getDefaultProps() {
	        return {
	            inactiveFrames: 0,
	            maxInactiveFrames: 3
	        };
	    };
	
	    Simulate.prototype.getDefaultValue = function getDefaultValue() {
	        return {
	            // [string]: Simulation to .run
	            simulate: DEFAULT_PROP,
	
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
	            friction: 0,
	
	            to: 0,
	            round: false
	        };
	    };
	
	    Simulate.prototype.getDefaultValueProp = function getDefaultValueProp() {
	        return DEFAULT_PROP;
	    };
	
	    /*
	        Simulate the Value's per-frame movement
	        
	        @param [Value]: Current value
	        @param [string]: Key of current value
	        @param [number]: Duration of frame in ms
	        @return [number]: Calculated value
	    */
	
	    Simulate.prototype.process = function process(value, key, timeSinceLastFrame) {
	        var simulate = value.simulate,
	            simulation = utils.isString(simulate) ? simulations[simulate] : simulate,
	            newVelocity = simulation(value, timeSinceLastFrame, this.started);
	
	        value.velocity = Math.abs(newVelocity) >= value.stopSpeed ? newVelocity : 0;
	        return value.current + calc.speedPerFrame(value.velocity, timeSinceLastFrame);
	    };
	
	    /*
	        Has this action ended?
	        
	        Use a framecounter to see if Action has changed in the last x frames
	        and declare ended if not
	        
	        @param [boolean]: Has Action changed?
	        @return [boolean]: Has Action ended?
	    */
	
	    Simulate.prototype.hasEnded = function hasEnded(hasChanged) {
	        this.inactiveFrames = hasChanged ? 0 : this.inactiveFrames + 1;
	        return this.inactiveFrames > this.maxInactiveFrames;
	    };
	
	    /*
	        Limit output to value range, if any
	        
	        If velocity is at or more than range, and value has a bounce property,
	        run the bounce simulation
	        
	        @param [number]: Calculated output
	        @param [Value]: Current Value
	        @return [number]: Limit-adjusted output
	    */
	
	    Simulate.prototype.limit = function limit(output, value) {
	        var isOutsideMax = output >= value.max,
	            isOutsideMin = output <= value.min,
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
	    };
	
	    return Simulate;
	})(Action);
	
	module.exports = Simulate;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(59),
	    calc = __webpack_require__(26);
	
	var Track = (function (_Action) {
	    _inherits(Track, _Action);
	
	    function Track() {
	        _classCallCheck(this, Track);
	
	        _Action.apply(this, arguments);
	    }
	
	    Track.prototype.getName = function getName() {
	        return 'track';
	    };
	
	    /*
	        Update input offset
	    */
	
	    Track.prototype.onFrameStart = function onFrameStart() {
	        this.inputOffset = calc.offset(this.inputOrigin, this.input.current);
	    };
	
	    /*
	        Move Value relative to Input movement
	        
	        @param [Value]: Current value
	        @param [string]: Key of current value
	        @return [number]: Calculated value
	    */
	
	    Track.prototype.process = function process(value, key) {
	        return this.inputOffset.hasOwnProperty(key) ? value.origin + this.inputOffset[key] : value.current;
	    };
	
	    /*
	        Has this Action ended? 
	        
	        @return [boolean]: False to make user manually finish .track()
	    */
	
	    Track.prototype.hasEnded = function hasEnded() {
	        return false;
	    };
	
	    return Track;
	})(Action);
	
	module.exports = Track;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (value) {
	    return (typeof value === 'string') ? value.split(/,\s*/) : [value];
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (value) {
	    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var positionTerms = __webpack_require__(31).positions,
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    The loop
	*/
	"use strict";
	
	var Timer = __webpack_require__(60),
	    tick = __webpack_require__(61),
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
/* 56 */
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
	
	var Easing = __webpack_require__(24),
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var calc = __webpack_require__(26),
	    utils = __webpack_require__(32),
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(59),
	    calc = __webpack_require__(26),
	    STRING = 'string',
	
	/*
	    Translate our mapLink value into mapTo
	    
	    @param [number]: Calculated value from linked value
	    @param [Value || object]: Linked value or empty object if we're linking to input
	    @param [array]: List of numbers relating to linked value
	    @param [array]: List of numbers relating to this value
	*/
	findMappedValue = function findMappedValue(newValue, linkedValue, toValue, mapLink, mapTo) {
	    var mapLength = mapLink.length,
	        i = 1,
	        lastLinkValue,
	        thisLinkValue,
	        lastToValue,
	        thisToValue;
	
	    for (; i < mapLength; i++) {
	        // Assign values from array, or if they're strings, look for them in linkedValue
	        lastLinkValue = typeof mapLink[i - 1] === STRING ? linkedValue[mapLink[i - 1]] : mapLink[i - 1];
	        thisLinkValue = typeof mapLink[i] === STRING ? linkedValue[mapLink[i]] : mapLink[i];
	        lastToValue = typeof mapTo[i - 1] === STRING ? toValue[mapTo[i - 1]] : mapTo[i - 1];
	        thisToValue = typeof mapTo[i] === STRING ? toValue[mapTo[i]] : mapTo[i];
	
	        // Check if we've gone past our calculated value, or if we're at the end of the array
	        if (newValue < thisLinkValue || i === mapLength - 1) {
	            newValue = calc.value(calc.restricted(calc.progress(newValue, lastLinkValue, thisLinkValue), 0, 1), lastToValue, thisToValue);
	            break;
	        }
	    }
	
	    return newValue;
	};
	
	var Watch = (function (_Action) {
	    _inherits(Watch, _Action);
	
	    function Watch() {
	        _classCallCheck(this, Watch);
	
	        _Action.apply(this, arguments);
	    }
	
	    /*
	        Process this value
	        
	        First check if this value exists as a Value, if not
	        check within Input (if we have one)
	            
	        @param [Value]: Current value
	        @param [string]: Key of current value
	        @return [number]: Calculated value
	    */
	
	    Watch.prototype.process = function process(value, key) {
	        var values = this.values,
	            newValue = value.current,
	            watchedKey = value.watch,
	            watchedValue = values[watchedKey] ? values[watchedKey] : {},
	            inputOffset = this.inputOffset;
	
	        // Then check values in Input
	        if (inputOffset && inputOffset.hasOwnProperty(watchedKey)) {
	            newValue = value.origin + inputOffset[watchedKey] * value.amp;
	
	            // First look at Action and check value isn't linking itself
	        } else if (watchedValue.current !== undefined && key !== watchedKey) {
	            newValue = watchedValue.current;
	        }
	
	        // If we have mapFrom and mapTo properties, translate the new value
	        if (value.mapFrom && value.mapTo) {
	            newValue = findMappedValue(newValue, watchedValue, value, value.mapFrom, value.mapTo);
	        }
	
	        return newValue;
	    };
	
	    return Watch;
	})(Action);
	
	module.exports = Watch;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var calc = __webpack_require__(26),
	    utils = __webpack_require__(32);
	
	var DEFAULT_PROP = 'current';
	
	var Action = (function () {
	    function Action(props, defaultProp) {
	        _classCallCheck(this, Action);
	
	        var action = this;
	
	        utils.each(this.getDefaultProps(), function (key, value) {
	            action[key] = value;
	        });
	
	        this.values = {};
	        this.set(props, this.getDefaultValueProp());
	    }
	
	    Action.prototype.set = function set() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	        var defaultProp = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_PROP : arguments[1];
	
	        // Add properties
	        for (var key in props) {
	            if (props.hasOwnProperty(key) && key !== 'values') {
	                this[key] = props[key];
	            }
	        }
	
	        // Merge values
	        if (props.values) {
	            var currentValues = this.values,
	                values = props.values;
	
	            for (var key in values) {
	                var existingValue = currentValues[key],
	                    value = values[key],
	                    newValue = {};
	
	                if (utils.isObj(value)) {
	                    newValue = value;
	                } else {
	                    newValue[defaultProp] = value;
	                }
	
	                currentValues[key] = existingValue ? utils.merge(existingValue, newValue) : newValue;
	            }
	        }
	
	        return this;
	    };
	
	    Action.prototype.process = function process(value) {
	        return value.current;
	    };
	
	    Action.prototype.limit = function limit(output, value) {
	        var restricted = calc.restricted(output, value.min, value.max),
	            escapeAmp = value.escapeAmp !== undefined ? value.escapeAmp : 0;
	        return restricted + (output - restricted) * escapeAmp;
	    };
	
	    Action.prototype.getName = function getName() {
	        return 'action';
	    };
	
	    Action.prototype.getDefaultProps = function getDefaultProps() {
	        return {};
	    };
	
	    Action.prototype.getDefaultValue = function getDefaultValue() {
	        return {
	            amp: 1,
	            escapeAmp: 0,
	            round: false
	        };
	    };
	
	    Action.prototype.getDefaultValueProp = function getDefaultValueProp() {
	        return DEFAULT_PROP;
	    };
	
	    Action.prototype.extend = function extend(props) {
	        return new this.constructor(props, this.getDefaultValueProp());
	    };
	
	    return Action;
	})();
	
	module.exports = Action;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var utils = __webpack_require__(32),
	
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
/* 61 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTU3NTg2ZmQ1ZGMxNzgwYTZiMDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2FkL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9oc2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcG9zaXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9kaW1lbnNpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2F0dHIvYXR0clJvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2Nzcy9jc3NSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9zdmcvc3ZnUm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvcGF0aC9kcmF3UGF0aFJvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL3BhdGgvbW92ZVBhdGhSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci9BY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3IvQWN0b3JDb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9Qcm9jZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9Sb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuL0Vhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3Ivc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2Nzcy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvY3NzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvY3NzL3R5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9wYXRoL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL01vZE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9RdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvUG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3IvdXBkYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci92YWx1ZS1vcGVyYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9kZWZhdWx0Um9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3Ivc3lzdGVtL2dlbmVyYXRlLWl0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvSGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuL0Jlemllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9Ud2Vlbi5lczYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvU2ltdWxhdGUuZXM2Iiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1RyYWNrLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL3NwbGl0LWNvbW1hLWRlbGltaXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWJyZWFrLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvdHJhbnNmb3JtLWRpY3Rpb25hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvbG9vcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi9wcmVzZXQtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3NpbXVsYXRlL3NpbXVsYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1dhdGNoLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BY3Rpb24uZXM2Iiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL3RpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL3RpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7QUN0Q0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNYQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDOztBQUVBLDRCOzs7Ozs7QUM3QkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQSw0Qjs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQy9CQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDN0JB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVELDhCOzs7Ozs7QUM5RUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtDOzs7Ozs7QUN4QkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBLG1DOzs7Ozs7QUN4QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7OztBQ3BVQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjs7QUFFakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWE7QUFDYix1QkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGVBQWMsb0JBQW9CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQsa0M7Ozs7OztBQ3JJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsd0I7Ozs7OztBQzdIQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQjs7Ozs7O0FDN0lBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Qjs7Ozs7O0FDakVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7OztBQ25FQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMsV0FBVztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7OztBQUdUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMsV0FBVztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxrQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7O0FBR1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7OztBQUdUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUU7QUFDQSxVQUFTOzs7QUFHVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVCOzs7Ozs7QUM1V0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFVLGNBQWM7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRzs7Ozs7O0FDckJBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBOztBQUVBLFdBQVUsY0FBYztBQUN4QjtBQUNBOztBQUVBO0FBQ0EsRzs7Ozs7O0FDZEE7QUFDQTtBQUNBLEc7Ozs7OztBQ0ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pCQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEM7QUFDQSxNQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFjLFlBQVk7QUFDMUI7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBLHlCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRzs7Ozs7O0FDN1BBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNGQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRzs7Ozs7O0FDeENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNYQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF3QztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUEsd0JBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCOzs7Ozs7QUN2REE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7OztBQy9DQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBCOzs7Ozs7QUN4RkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBc0I7QUFDdEIsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBbUIsY0FBYztBQUNqQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlCOzs7Ozs7QUM1SkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTRCO0FBQzVCLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUEsZUFBYyx3QkFBd0I7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQztBQUNuQyx1QkFBc0I7QUFDdEIsNEJBQTJCO0FBQzNCLDRCQUEyQjtBQUMzQixzQkFBcUI7QUFDckIsK0JBQThCO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0M7QUFDbEMsMkJBQTBCO0FBQzFCLDhCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1IQUFrSDtBQUNsSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDdlZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQ2hDRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFRLGlCQUFpQjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDaENBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwwQjs7Ozs7O0FDcEVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFj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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw2Qjs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Qjs7Ozs7O0FDL0VBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QU0sR0FBRyxVQUFVLElBQUksU0FBVSxDQUFDO01BQzNEOztBQW5EQyxXQUFNLFdBcURSLE9BQU8sc0JBQUc7QUFDTixnQkFBTyxRQUFRLENBQUM7TUFDbkI7O0FBdkRDLFdBQU0sV0F5RFIsZUFBZSw4QkFBRztBQUNkLGdCQUFPLEVBQUUsQ0FBQztNQUNiOztBQTNEQyxXQUFNLFdBNkRSLGVBQWUsOEJBQUc7QUFDZCxnQkFBTztBQUNILGdCQUFHLEVBQUUsQ0FBQztBQUNOLHNCQUFTLEVBQUUsQ0FBQztBQUNaLGtCQUFLLEVBQUUsS0FBSztVQUNmLENBQUM7TUFDTDs7QUFuRUMsV0FBTSxXQXFFUixtQkFBbUIsa0NBQUc7QUFDbEIsZ0JBQU8sWUFBWSxDQUFDO01BQ3ZCOztBQXZFQyxXQUFNLFdBeUVSLE1BQU0sbUJBQUMsS0FBSyxFQUFFO0FBQ1YsZ0JBQU8sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO01BQ2xFOztZQTNFQyxNQUFNOzs7QUE4RVosT0FBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLEM7Ozs7OztBQ25GdkI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCOzs7Ozs7QUM3QkE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7O0FBRWI7O0FBRUE7QUFDQSxPOztBQUVBLEVBQUM7QUFDRDtBQUNBOztBQUVBLHVCIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNTU3NTg2ZmQ1ZGMxNzgwYTZiMDRcbiAqKi8iLCJ2YXIgcG9wbW90aW9uID0gcmVxdWlyZSgnLi9tb2R1bGUuanMnKSxcbiAgICBVSXJlZiA9IHdpbmRvdy51aTtcblxud2luZG93LnVpID0gd2luZG93LnBvcG1vdGlvbiA9IHBvcG1vdGlvbjtcblxuLypcbiAgICBJZiBub0NvbmZsaWN0IGlzIHJ1biwgdGhlIG9yaWdpbmFsIHJlZmVyZW5jZSB0byB3aW5kb3cuVUkgaXNcbiAgICByZXN0b3JlZCBhbmQgUG9wbW90aW9uIGlzIGxvYWRlZCB0byB3aW5kb3cuUG9wbW90aW9uXG4qL1xud2luZG93LnVpLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LnVpID0gVUlyZWY7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbG9hZC9nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHBvcG1vdGlvbiA9IHJlcXVpcmUoJy4uL3BvcG1vdGlvbicpO1xuXG4vKlxuICAgIEFkZCBvcHRpb25hbCBjdXN0b20gdmFsdWUgdHlwZSBzdXBwb3J0XG4qL1xucG9wbW90aW9uLmFkZFZhbHVlVHlwZSh7XG4gICAgYWxwaGE6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2FscGhhJyksXG4gICAgYW5nbGU6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2FuZ2xlJyksXG4gICAgcHg6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3B4JyksXG4gICAgaHNsOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9oc2wnKSxcbiAgICByZ2I6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3JnYicpLFxuICAgIGhleDogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvaGV4JyksXG4gICAgY29sb3I6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyksXG4gICAgcG9zaXRpb25zOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9wb3NpdGlvbnMnKSxcbiAgICBkaW1lbnNpb25zOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9kaW1lbnNpb25zJyksXG4gICAgc2hhZG93OiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9zaGFkb3cnKVxufSk7XG5cbi8qXG4gICAgUHJlZGVmaW5lZCByb2xlc1xuKi9cbnBvcG1vdGlvbi5hdHRyID0gcmVxdWlyZSgnLi4vcm9sZXMvYXR0ci9hdHRyUm9sZScpO1xucG9wbW90aW9uLmNzcyA9IHJlcXVpcmUoJy4uL3JvbGVzL2Nzcy9jc3NSb2xlJyk7XG5wb3Btb3Rpb24uc3ZnID0gcmVxdWlyZSgnLi4vcm9sZXMvc3ZnL3N2Z1JvbGUnKTtcbnBvcG1vdGlvbi5kcmF3UGF0aCA9IHJlcXVpcmUoJy4uL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlJyk7XG5wb3Btb3Rpb24ubW92ZVBhdGggPSByZXF1aXJlKCcuLi9yb2xlcy9wYXRoL21vdmVQYXRoUm9sZScpOyAgXG5cbm1vZHVsZS5leHBvcnRzID0gcG9wbW90aW9uO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbG9hZC9tb2R1bGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHZhbHVlVHlwZU1hbmFnZXIgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL21hbmFnZXInKSxcblxuICAgIFBvcG1vdGlvbiA9IHtcblxuICAgICAgICBBY3RvcjogcmVxdWlyZSgnLi9hY3Rvci9BY3RvcicpLFxuXG4gICAgICAgIEFjdG9yQ29sbGVjdGlvbjogcmVxdWlyZSgnLi9hY3Rvci9BY3RvckNvbGxlY3Rpb24nKSxcblxuICAgICAgICBJbnB1dDogcmVxdWlyZSgnLi9pbnB1dC9JbnB1dCcpLFxuXG4gICAgICAgIFByb2Nlc3M6IHJlcXVpcmUoJy4vcHJvY2Vzcy9Qcm9jZXNzJyksXG5cbiAgICAgICAgRWFzaW5nOiByZXF1aXJlKCcuL2FjdGlvbnMvdHdlZW4vRWFzaW5nJyksXG5cbiAgICAgICAgUm9sZTogcmVxdWlyZSgnLi9yb2xlcy9Sb2xlJyksXG5cbiAgICAgICAgVHdlZW46IHJlcXVpcmUoJy4vYWN0aW9ucy9Ud2Vlbi5lczYnKSxcbiAgICAgICAgU2ltdWxhdGU6IHJlcXVpcmUoJy4vYWN0aW9ucy9TaW11bGF0ZS5lczYnKSxcbiAgICAgICAgVHJhY2s6IHJlcXVpcmUoJy4vYWN0aW9ucy9UcmFjay5lczYnKSxcblxuICAgICAgICBzZWxlY3Q6IHJlcXVpcmUoJy4vYWN0b3Ivc2VsZWN0JyksXG5cbiAgICAgICAgYWRkVmFsdWVUeXBlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YWx1ZVR5cGVNYW5hZ2VyLmV4dGVuZC5hcHBseSh2YWx1ZVR5cGVNYW5hZ2VyLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FsYzogcmVxdWlyZSgnLi9pbmMvY2FsYycpXG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBQb3Btb3Rpb247XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDFcbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYWxwaGEuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ2RlZydcbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYW5nbGUuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ3B4J1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9weC5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIGdldENvbG9yVmFsdWVzID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZ2V0LWNvbG9yLXZhbHVlcycpLFxuICAgIGZ1bmN0aW9uQ3JlYXRlID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlJyksXG4gICAgZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyksXG4gICAgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5oc2w7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIEh1ZToge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAzNjBcbiAgICAgICAgfSxcbiAgICAgICAgU2F0dXJhdGlvbjogZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIExpZ2h0bmVzczogZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIEFscGhhOiBkZWZhdWx0UHJvcHMub3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdoc2wnKSA+IC0xKTtcbiAgICB9LFxuICAgIFxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGdldENvbG9yVmFsdWVzKHZhbHVlLCB0ZXJtcyk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uQ3JlYXRlKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnLCAnLCAyKSwgJ2hzbGEnKTtcbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgZ2V0Q29sb3JWYWx1ZXMgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzJyksXG4gICAgZnVuY3Rpb25DcmVhdGUgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1jcmVhdGUnKSxcbiAgICBkZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKSxcbiAgICBjb2xvckRlZmF1bHRzID0gZGVmYXVsdFByb3BzLmNvbG9yLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JykuY29sb3JzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBSZWQ6IGNvbG9yRGVmYXVsdHMsXG4gICAgICAgIEdyZWVuOiBjb2xvckRlZmF1bHRzLFxuICAgICAgICBCbHVlOiBjb2xvckRlZmF1bHRzLFxuICAgICAgICBBbHBoYTogZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZigncmdiJykgPiAtMSk7XG4gICAgfSxcbiAgICBcbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBnZXRDb2xvclZhbHVlcyh2YWx1ZSwgdGVybXMpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbkNyZWF0ZShjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCB0ZXJtcywgJywgJywgMiksICdyZ2JhJyk7XG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHJnYi5kZWZhdWx0UHJvcHMsXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCcjJykgPiAtMSk7XG4gICAgfSxcbiAgICBcbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByLCBnLCBiO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDIpO1xuICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigzLCAyKTtcbiAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoNSwgMik7XG5cbiAgICAgICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMSk7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDIsIDEpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cigzLCAxKTtcbiAgICAgICAgICAgIHIgKz0gcjtcbiAgICAgICAgICAgIGcgKz0gZztcbiAgICAgICAgICAgIGIgKz0gYjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBSZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICAgICAgICAgIEdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgICAgICAgICBCbHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgICAgICAgICBBbHBoYTogMVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiByZ2IuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oZXguanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgcmdiID0gcmVxdWlyZSgnLi9yZ2InKSxcbiAgICBoc2wgPSByZXF1aXJlKCcuL2hzbCcpLFxuICAgIGhleCA9IHJlcXVpcmUoJy4vaGV4JyksXG4gICAgc3VwcG9ydGVkID0gW3JnYiwgaHNsLCBoZXhdLFxuICAgIG51bVN1cHBvcnRlZCA9IDMsXG5cbiAgICBydW5TdXBwb3J0ZWQgPSBmdW5jdGlvbiAobWV0aG9kLCB2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVN1cHBvcnRlZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3VwcG9ydGVkW2ldLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRlZFtpXVttZXRob2RdKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiB1dGlscy5tZXJnZShyZ2IuZGVmYXVsdFByb3BzLCBoc2wuZGVmYXVsdFByb3BzKSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gcmdiLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2wudGVzdCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHJ1blN1cHBvcnRlZCgnc3BsaXQnLCB2YWx1ZSk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZXMuUmVkICE9PSB1bmRlZmluZWQpID8gcmdiLmNvbWJpbmUodmFsdWVzKSA6IGhzbC5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbG9yLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgcHhEZWZhdWx0cyA9IHJlcXVpcmUoJy4vcHgnKS5kZWZhdWx0UHJvcHMsXG4gICAgc3BsaXRTcGFjZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL3NwbGl0LXNwYWNlLWRlbGltaXRlZCcpLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JykucG9zaXRpb25zO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogcHhEZWZhdWx0cyxcbiAgICAgICAgXG4gICAgLypcbiAgICAgICAgU3BsaXQgcG9zaXRpb25zIGluIGZvcm1hdCBcIlggWSBaXCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogUG9zaXRpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwJSAzMCUgMFwiIC0+IHsyMCUsIDMwJSwgMH1cbiAgICAgICAgICAgIFwiMjAlIDMwJVwiIC0+IHsyMCUsIDMwJX1cbiAgICAgICAgICAgIFwiMjAlXCIgLT4gezIwJSwgMjAlfVxuICAgICovXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcG9zaXRpb25zID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSksXG4gICAgICAgICAgICBudW1Qb3NpdGlvbnMgPSBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgICAgc3BsaXRWYWx1ZSA9IHtcbiAgICAgICAgICAgICAgICBYOiBwb3NpdGlvbnNbMF0sXG4gICAgICAgICAgICAgICAgWTogKG51bVBvc2l0aW9ucyA+IDEpID8gcG9zaXRpb25zWzFdIDogcG9zaXRpb25zWzBdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGlmIChudW1Qb3NpdGlvbnMgPiAyKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlLlogPSBwb3NpdGlvbnNbMl07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgdGVybXMsICcgJyk7XG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JykuZGltZW5zaW9ucyxcbiAgICBweERlZmF1bHRzID0gcmVxdWlyZSgnLi9weCcpLmRlZmF1bHRQcm9wcyxcbiAgICBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgc3BsaXRTcGFjZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL3NwbGl0LXNwYWNlLWRlbGltaXRlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogcHhEZWZhdWx0cyxcbiAgICBcbiAgICAvKlxuICAgICAgICBTcGxpdCBkaW1lbnNpb25zIGluIGZvcm1hdCBcIlRvcCBSaWdodCBCb3R0b20gTGVmdFwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IERpbWVuc2lvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHggNDBweFwiIC0+IHsyMHB4LCAwLCAzMHB4LCA0MHB4fVxuICAgICAgICAgICAgXCIyMHB4IDAgMzBweFwiIC0+IHsyMHB4LCAwLCAzMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4IDBcIiAtPiB7MjBweCwgMCwgMjBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweFwiIC0+IHsyMHB4LCAyMHB4LCAyMHB4LCAyMHB4fVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggVC9SL0IvTCBtZXRyaWNzXG4gICAgKi9cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBkaW1lbnNpb25zID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSksXG4gICAgICAgICAgICBudW1EaW1lbnNpb25zID0gZGltZW5zaW9ucy5sZW5ndGgsXG4gICAgICAgICAgICBqdW1wQmFjayA9IChudW1EaW1lbnNpb25zICE9PSAxKSA/IDIgOiAxLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBqID0gMCxcbiAgICAgICAgICAgIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICBmb3IgKDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgc3BsaXRWYWx1ZVt0ZXJtc1tpXV0gPSBkaW1lbnNpb25zW2pdO1xuXG4gICAgICAgICAgICAvLyBKdW1wIGJhY2sgKHRvIHN0YXJ0KSBjb3VudGVyIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiBvdXIgdmFsdWVzXG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBqID0gKGogPT09IG51bURpbWVuc2lvbnMpID8gaiAtIGp1bXBCYWNrIDogajtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCB0ZXJtcywgJyAnKTtcbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvZGltZW5zaW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNvbG9yID0gcmVxdWlyZSgnLi9jb2xvcicpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgcHhEZWZhdWx0cyA9IHJlcXVpcmUoJy4vcHgnKS5kZWZhdWx0UHJvcHMsXG4gICAgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5zaGFkb3csXG4gICAgc3BsaXRTcGFjZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL3NwbGl0LXNwYWNlLWRlbGltaXRlZCcpLFxuICAgIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBzaGFkb3dUZXJtcyA9IHRlcm1zLnNsaWNlKDAsNCk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiB1dGlscy5tZXJnZShjb2xvci5kZWZhdWx0UHJvcHMsIHtcbiAgICAgICAgWDogcHhEZWZhdWx0cyxcbiAgICAgICAgWTogcHhEZWZhdWx0cyxcbiAgICAgICAgUmFkaXVzOiBweERlZmF1bHRzLFxuICAgICAgICBTcHJlYWQ6IHB4RGVmYXVsdHNcbiAgICB9KSxcblxuICAgIC8qXG4gICAgICAgIFNwbGl0IHNoYWRvdyBwcm9wZXJ0aWVzIFwiWCBZIFJhZGl1cyBTcHJlYWQgQ29sb3JcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBTaGFkb3cgcHJvcGVydHlcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgYml0cyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpLFxuICAgICAgICAgICAgbnVtQml0cyA9IGJpdHMubGVuZ3RoLFxuICAgICAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gZmFsc2UsXG4gICAgICAgICAgICBjb2xvclByb3AgPSAnJyxcbiAgICAgICAgICAgIHRoaXNCaXQsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICBmb3IgKDsgaSA8IG51bUJpdHM7IGkrKykge1xuICAgICAgICAgICAgdGhpc0JpdCA9IGJpdHNbaV07XG5cbiAgICAgICAgICAgIC8vIElmIHdlJ3ZlIHJlYWNoZWQgdGhlIGNvbG9yIHByb3BlcnR5LCBhcHBlbmQgdG8gY29sb3Igc3RyaW5nXG4gICAgICAgICAgICBpZiAoaGFzUmVhY2hlZENvbG9yIHx8IGNvbG9yLnRlc3QodGhpc0JpdCkpIHtcbiAgICAgICAgICAgICAgICBoYXNSZWFjaGVkQ29sb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbG9yUHJvcCArPSB0aGlzQml0O1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVbdGVybXNbaV1dID0gdGhpc0JpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHNwbGl0VmFsdWUsIGNvbG9yLnNwbGl0KGNvbG9yUHJvcCkpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCBzaGFkb3dUZXJtcywgJyAnKSArIGNvbG9yLmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUm9sZSA9IHJlcXVpcmUoJy4uL1JvbGUnKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuZWFjaDtcblxudmFyIEF0dHJSb2xlID0gbmV3IFJvbGUoe1xuICAgIG5hbWU6ICdhdHRyJyxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBhY3RvciA9IHRoaXM7XG5cbiAgICAgICAgZWFjaChzdGF0ZSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIEF0dHJSb2xlLnNldC5jYWxsKGFjdG9yLCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGdldDogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXR0clJvbGU7XG5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm9sZXMvYXR0ci9hdHRyUm9sZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJvbGUgPSByZXF1aXJlKCcuLi9Sb2xlJyk7XG52YXIgYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2g7XG5cbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywnTW96JywnTycsJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHByb3BlcnR5TmFtZUNhY2hlID0ge307XG4gICAgICAgICAgICAgICAgICAgIFxuLypcbiAgICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICAgIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0ZXN0RWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIFxuICAgICAgICBwcm9wZXJ0eU5hbWVDYWNoZVtrZXldID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV0sXG4gICAgICAgICAgICAgICAgcHJlZml4ZWQgPSAocHJlZml4ID09PSAnJykgPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICAgICAgICAgIGlmICh0ZXN0RWxlbWVudC5zdHlsZS5oYXNPd25Qcm9wZXJ0eShwcmVmaXhlZCkpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWVDYWNoZVtrZXldID0gcHJlZml4ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBwcm9wZXJ0eU5hbWVDYWNoZVtrZXldO1xuICAgIH07XG5cbnZhciBDU1NSb2xlID0gbmV3IFJvbGUoe1xuXG4gICAgbmFtZTogJ2NzcycsXG5cbiAgICBfbWFwOiByZXF1aXJlKCcuL21hcCcpLFxuICAgIF90eXBlTWFwOiByZXF1aXJlKCcuL3R5cGUtbWFwJyksXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzO1xuXG4gICAgICAgIGVhY2goYnVpbGQoc3RhdGUpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgQ1NTUm9sZS5zZXQuY2FsbChhY3Rvciwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAga2V5ID0gcHJvcGVydHlOYW1lQ2FjaGVba2V5XSB8fCB0ZXN0UHJlZml4KGtleSk7XG5cbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCwgbnVsbClba2V5XTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGtleSA9IHByb3BlcnR5TmFtZUNhY2hlW2tleV0gfHwgdGVzdFByZWZpeChrZXkpO1xuXG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENTU1JvbGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yb2xlcy9jc3MvY3NzUm9sZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJvbGUgPSByZXF1aXJlKCcuLi9Sb2xlJyksXG4gICAgYXR0clJvbGUgPSByZXF1aXJlKCcuLi9hdHRyL2F0dHJSb2xlJyksXG4gICAgYnVpbGQgPSByZXF1aXJlKCcuLi9zdmcvYnVpbGQnKSxcbiAgICBlYWNoID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuZWFjaCxcblxuICAgIENPTE9SID0gJ2NvbG9yJztcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgUm9sZSh7XG4gICAgbmFtZTogJ3N2ZycsXG5cbiAgICBfdHlwZU1hcDoge1xuICAgICAgICBmaWxsOiBDT0xPUixcbiAgICAgICAgc3Ryb2tlOiBDT0xPUlxuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudC5nZXRCQm94KCkpO1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzO1xuXG4gICAgICAgIGVhY2goYnVpbGQoc3RhdGUpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgYXR0clJvbGUuc2V0LmNhbGwoYWN0b3IsIGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm9sZXMvc3ZnL3N2Z1JvbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSb2xlID0gcmVxdWlyZSgnLi4vUm9sZScpO1xudmFyIGNzc1JvbGUgPSByZXF1aXJlKCcuLi9jc3MvY3NzUm9sZScpO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoO1xuXG4vKlxuICAgIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gKHBlcmNlbnRhZ2UsIGxlbmd0aCkge1xuICAgIHJldHVybiAocGFyc2VGbG9hdChwZXJjZW50YWdlKSAvIDEwMCkgKiBsZW5ndGggKyAncHgnO1xufTtcblxuLypcbiAgICBDcmVhdGUgc3R5bGVzXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBTVkcgUGF0aCBwcm9wZXJ0aWVzXG4gICAgQHBhcmFtIFtvYmplY3RdOiBMZW5ndGggb2YgcGF0aFxuICAgIEByZXR1cm5zIFtvYmplY3RdOiBLZXkvdmFsdWUgcGFpcnMgb2YgdmFsaWQgQ1NTIHByb3BlcnRpZXNcbiovXG52YXIgY3JlYXRlU3R5bGVzID0gZnVuY3Rpb24gKHByb3BzLCBsZW5ndGgpIHtcbiAgICB2YXIgaGFzRGFzaEFycmF5ID0gZmFsc2UsXG4gICAgICAgIGRhc2hBcnJheVN0eWxlcyA9IHtcbiAgICAgICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGVzID0ge307XG5cbiAgICBlYWNoKHByb3BzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBrZXkgPSBTVkdEcmF3UGF0aC5fbWFwW2tleV0gfHwga2V5O1xuXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgICAgICAgc3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgICAgIHN0eWxlc1tTVkdEcmF3UGF0aC5fbWFwLmxlbmd0aF0gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbn07XG5cbi8qXG4gICAgRHJhdyBQYXRoIHJvbGVcbiovXG52YXIgU1ZHRHJhd1BhdGggPSBuZXcgUm9sZSh7XG4gICAgX21hcDogcmVxdWlyZSgnLi9tYXAnKSxcblxuICAgIF90eXBlTWFwOiB7XG4gICAgICAgIHN0cm9rZTogJ2NvbG9yJ1xuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGF0aExlbmd0aCA9IHRoaXMuZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBVcGRhdGUgYHBhdGhgIHN0eWxlcyBhbmQgaWYgYGVsZW1lbnRgIGlzIHByZXNlbnQsIHNldFxuICAgICAgICB4LCB5IGFuZCByb3RhdGlvblxuICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgY3NzUm9sZS51cGRhdGUuY2FsbCh0aGlzLCBjcmVhdGVTdHlsZXMoc3RhdGUsIHRoaXMucGF0aExlbmd0aCkpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNWR0RyYXdQYXRoO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm9sZXMvcGF0aC9kcmF3UGF0aFJvbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBnZXRBbmdsZSA9IHJlcXVpcmUoJy4uLy4uL2luYy9jYWxjJykuYW5nbGU7XG5cbnZhciBjYWxjUm90YXRpb24gPSBmdW5jdGlvbiAocGF0aCwgcG9pbnQsIGRpc3RhbmNlKSB7XG4gICAgdmFyIHRlc3RQb2ludCA9IHRoaXMucGF0aC5nZXRQb2ludEF0TGVuZ3RoKGRpc3RhbmNlICsgMC4yKTtcblxuICAgIHJldHVybiBnZXRBbmdsZShwb2ludCwgdGVzdFBvaW50KTtcbn07XG5cbnZhciBTVkdNb3ZlUGF0aFJvbGUgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBhdGhMZW5ndGggPSB0aGlzLnBhdGguZ2V0VG90YWxMZW5ndGgoKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gc3RhdGUucHJvZ3Jlc3MgKiB0aGlzLnBhdGhMZW5ndGgsXG4gICAgICAgICAgICBuZXdQb2ludCA9IHRoaXMucGF0aC5nZXRQb2ludEF0TGVuZ3RoKGRpc3RhbmNlKSxcbiAgICAgICAgICAgIHJvdGF0aW9uID0gdGhpcy5hdXRvUm90YXRlID8gY2FsY1JvdGF0aW9uKHRoaXMucGF0aCwgbmV3UG9pbnQsIGRpc3RhbmNlKSA6IHN0YXRlLnJvdGF0aW9uIHx8IDA7XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgbmV3UG9pbnQueCArICcsICcgKyBuZXdQb2ludC55ICsgJykgcm90YXRlKCcgKyByb3RhdGlvbiArICcpJyk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTVkdNb3ZlUGF0aFJvbGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yb2xlcy9wYXRoL21vdmVQYXRoUm9sZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIE1vZE1hbmFnZXIgPSByZXF1aXJlKCcuLi9pbmMvTW9kTWFuYWdlcicpLFxuICAgIHZhbHVlVHlwZU1hbmFnZXIgPSBuZXcgTW9kTWFuYWdlcigpO1xuXG52YWx1ZVR5cGVNYW5hZ2VyLmRlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uICh0eXBlLCBrZXkpIHtcbiAgICB2YXIgdmFsdWVUeXBlID0gdGhpc1t0eXBlXSxcbiAgICAgICAgZGVmYXVsdFByb3BzID0gKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpID8gdmFsdWVUeXBlLmRlZmF1bHRQcm9wc1trZXldIHx8IHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMgOiB7fTtcblxuICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG59O1xuXG52YWx1ZVR5cGVNYW5hZ2VyLnRlc3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChrZXksIG1vZCkge1xuICAgICAgICBpZiAobW9kLnRlc3QgJiYgbW9kLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICB0eXBlID0ga2V5O1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsdWVUeXBlTWFuYWdlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmFnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBQcm9jZXNzID0gcmVxdWlyZSgnLi4vcHJvY2Vzcy9Qcm9jZXNzJyksXG4gICAgUXVldWUgPSByZXF1aXJlKCcuLi9pbmMvUXVldWUnKSxcbiAgICBQb2ludGVyID0gcmVxdWlyZSgnLi4vaW5wdXQvUG9pbnRlcicpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgdXBkYXRlID0gcmVxdWlyZSgnLi91cGRhdGUnKSxcbiAgICB2YWx1ZU9wcyA9IHJlcXVpcmUoJy4vdmFsdWUtb3BlcmF0aW9ucycpLFxuICAgIGRlZmF1bHRSb2xlID0gcmVxdWlyZSgnLi4vcm9sZXMvZGVmYXVsdFJvbGUnKSxcbiAgICBjc3NSb2xlID0gcmVxdWlyZSgnLi4vcm9sZXMvY3NzL2Nzc1JvbGUnKSxcbiAgICBzdmdSb2xlID0gcmVxdWlyZSgnLi4vcm9sZXMvc3ZnL3N2Z1JvbGUnKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaCxcblxuICAgIEFjdG9yID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgdmFyIGFjdG9yID0gdGhpcyxcbiAgICAgICAgICAgIHJvbGVzID0gWyBkZWZhdWx0Um9sZSBdO1xuXG4gICAgICAgIC8vIFNldCB2YWx1ZXMgb2JqZWN0IGFuZCBzdGF0ZSBvYmplY3RcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlczoge31cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJbml0IHF1ZXVlIGFuZCBwcm9jZXNzXG4gICAgICAgIHRoaXMucXVldWUgPSBuZXcgUXVldWUoKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzID0gbmV3IFByb2Nlc3ModGhpcywgdXBkYXRlKTtcbiAgICAgICAgdGhpcy5jbGVhck9yZGVyKCk7XG5cbiAgICAgICAgLy8gRGV0ZWN0L2FkZCByb2xlc1xuICAgICAgICBpZiAob3B0cykge1xuICAgICAgICAgICAgLy8gQXV0by1kZXRlY3QgZWxlbWVudCB0eXBlLCBpZiBwcmVzZW50IGFuZCBubyByb2xlcyBkZWZpbmVkXG4gICAgICAgICAgICBpZiAoIW9wdHMuYXMgJiYgb3B0cy5lbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIENTUyByb2xlIGlmIEhUTUxFbGVtZW50XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGVzLnB1c2goY3NzUm9sZSk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdHMuZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZXMucHVzaChzdmdSb2xlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYW51YWxsIGFkZGluZyByb2xlc1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRzLmFzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzQXJyYXkob3B0cy5hcykpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZXMucHVzaC5hcHBseShyb2xlcywgb3B0cy5hcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZXMucHVzaChvcHRzLmFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0KG9wdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yb2xlcyA9IHJvbGVzO1xuICAgICAgICB0aGlzLnJvbGVzLmZvckVhY2goZnVuY3Rpb24gKHJvbGUpIHtcbiAgICAgICAgICAgIC8vIEZpcmUgaW5pdCBtZXRob2QgaWYgb25lIGF2YWlsYWJsZVxuICAgICAgICAgICAgaWYgKHJvbGUuaW5pdCkge1xuICAgICAgICAgICAgICAgIHJvbGUuaW5pdC5jYWxsKGFjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuQWN0b3IucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8qXG4gICAgICAgIFNldCBBY3Rpb24gdmFsdWVzIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEVsZW1lbnQgcHJvcGVydGllc1xuICAgICAgICBAcGFyYW0gW3N0cmluZ10gKG9wdGlvbik6IE5hbWUgb2YgZGVmYXVsdCB2YWx1ZSBwcm9wZXJ0eVxuICAgICovXG4gICAgc2V0OiBmdW5jdGlvbiAocHJvcHMsIGRlZmF1bHRWYWx1ZVByb3ApIHtcbiAgICAgICAgLy8gUmVzZXQgRWxlbWVudCBwcm9wZXJ0aWVzIGFuZCB3cml0ZSBuZXcgcHJvcHNcbiAgICAgICAgdGhpcy5yZXNldFByb3BzKCk7XG5cbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuZ2V0TmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gcHJvcHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcHMocHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMocHJvcHMudmFsdWVzLCBkZWZhdWx0VmFsdWVQcm9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTdGFydCBhY3Rpb25cbiAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiAoYWN0aW9uLCBpbnB1dCkge1xuICAgICAgICB0aGlzLnJlc2V0T3JpZ2lucygpO1xuXG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFN0b3AgZXhpc3RpbmcgaW5wdXRzIGlmIHRoaXMgaXMgYSB0cmFjayAtIGRvIHRoaXMgb25seSBmb3IgcG9pbnRlcnM/IG9yIHVuc3Vic2NyaWJlP1xuICAgICAgICBpZiAodGhpcy5hY3Rpb24uZ2V0TmFtZSgpICE9PSAndHJhY2snICYmIHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5zdG9wKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnN0b3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIFBvaW50ZXIgaWYgdGhpcyBpcyBhbiBldmVudFxuICAgICAgICAgICAgdGhpcy5pbnB1dCA9ICghaW5wdXQuY3VycmVudCkgPyBuZXcgUG9pbnRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRPcmlnaW4gPSB0aGlzLmlucHV0LmdldCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNldFByb2dyZXNzKCk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgU3RvcCBjdXJyZW50IEFjdGlvblxuICAgICovXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnF1ZXVlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFBhdXNlIGN1cnJlbnQgQWN0aW9uXG4gICAgKi9cbiAgICBwYXVzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvY2Vzcy5zdG9wKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBSZXN1bWUgcGF1c2VkIEFjdGlvblxuICAgICovXG4gICAgcmVzdW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZnJhbWVzdGFtcCA9IHRoaXMuc3RhcnRlZCA9IHV0aWxzLmN1cnJlbnRUaW1lKCk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2Nlc3Muc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFRvZ2dsZSBjdXJyZW50IEFjdGlvblxuICAgICovXG4gICAgdG9nZ2xlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VtZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBBY3RpdmF0ZSBFbGVtZW50IEFjdGlvblxuICAgICovXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IHV0aWxzLmN1cnJlbnRUaW1lKCkgKyB0aGlzLmRlbGF5O1xuICAgICAgICB0aGlzLmZyYW1lc3RhbXAgPSB0aGlzLnN0YXJ0ZWQ7XG4gICAgICAgIHRoaXMuZmlyc3RGcmFtZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5wcm9jZXNzLnN0YXJ0KCk7XG4gICAgfSxcblxuICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVzZXRQcm9ncmVzcygpO1xuICAgICAgICB2YWx1ZU9wcy5hbGwoJ3Jlc2V0JywgdGhpcy52YWx1ZXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBBZGQgYSBuZXcgYWN0aW9uIHRvIHRoZSBxdWV1ZVxuICAgICovXG4gICAgdGhlbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnF1ZXVlLmFkZC5hcHBseSh0aGlzLnF1ZXVlLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgRXhlY3V0ZSBuZXh0IGluIHF1ZXVlXG4gICAgKi9cbiAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuZXh0SW5RdWV1ZSA9IHRoaXMucXVldWUubmV4dCgpO1xuXG4gICAgICAgIGlmIChuZXh0SW5RdWV1ZSkge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuYyhuZXh0SW5RdWV1ZSkpIHtcbiAgICAgICAgICAgICAgICBuZXh0SW5RdWV1ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KG5leHRJblF1ZXVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBSZXNldCBBY3Rpb24gcHJvZ3Jlc3NcbiAgICAqL1xuICAgIHJlc2V0UHJvZ3Jlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdXRpbHMuY3VycmVudFRpbWUoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIExvb3AgdGhyb3VnaCBhbGwgdmFsdWVzIGFuZCBjcmVhdGUgb3JpZ2luIHBvaW50c1xuICAgICovXG4gICAgcmVzZXRPcmlnaW5zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhbHVlT3BzLmFsbCgncmVzZXRPcmlnaW4nLCB0aGlzLnZhbHVlcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgUmV2ZXJzZSBBY3Rpb24gcHJvZ3Jlc3MgYW5kIHZhbHVlc1xuICAgICovXG4gICAgcmV2ZXJzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgICAgIHZhbHVlT3BzLmFsbCgncmV0YXJnZXQnLCB0aGlzLnZhbHVlcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3dhcCB2YWx1ZSBvcmlnaW5zIGFuZCB0b1xuICAgICovXG4gICAgZmxpcFZhbHVlczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuICAgICAgICB2YWx1ZU9wcy5hbGwoJ2ZsaXAnLCB0aGlzLnZhbHVlcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTZXQgcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogUHJvcGVydGllcyB0byBzZXRcbiAgICAqL1xuICAgIHNldFByb3BzOiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgdmFyIGFjdG9yID0gdGhpcztcblxuICAgICAgICBlYWNoKHByb3BzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3ZhbHVlcycpIHtcbiAgICAgICAgICAgICAgICBhY3RvcltrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBSZXNldCBwcm9wZXJ0aWVzIHRvIEFjdGlvbiBkZWZhdWx0c1xuICAgICovXG4gICAgcmVzZXRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcHModGhpcy5hY3Rpb24uZ2V0RGVmYXVsdFByb3BzKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTZXQgdmFsdWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3QgfHwgc3RyaW5nIHx8IG51bWJlcl06IFZhbHVlXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXSAob3B0aW9uYWwpOiBEZWZhdWx0IHByb3BlcnR5IHRvIHNldFxuICAgICovXG4gICAgc2V0VmFsdWVzOiBmdW5jdGlvbiAodmFsdWVzLCBkZWZhdWx0VmFsdWVQcm9wKSB7XG4gICAgICAgIHZhbHVlT3BzLnByb2Nlc3ModmFsdWVzLCB0aGlzLCBkZWZhdWx0VmFsdWVQcm9wKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBVcGRhdGUgb3JkZXIgb2YgdmFsdWUga2V5c1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogV2hldGhlciB0byBtb3ZlIHZhbHVlIHRvIGJhY2tcbiAgICAqL1xuICAgIHVwZGF0ZU9yZGVyOiBmdW5jdGlvbiAoa2V5LCBtb3ZlVG9CYWNrLCBoYXNDaGlsZHJlbikge1xuICAgICAgICB2YXIgb3JkZXIgPSAhaGFzQ2hpbGRyZW4gPyB0aGlzLm9yZGVyIDogdGhpcy5wYXJlbnRPcmRlcixcbiAgICAgICAgICAgIHBvc2l0aW9uID0gb3JkZXIuaW5kZXhPZihrZXkpO1xuXG4gICAgICAgIC8vIElmIGtleSBpc24ndCBpbiBsaXN0LCBvciBtb3ZlVG9CYWNrIGlzIHNldCB0byB0cnVlLCBhZGQga2V5XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gLTEgfHwgbW92ZVRvQmFjaykge1xuICAgICAgICAgICAgb3JkZXIucHVzaChrZXkpO1xuXG4gICAgICAgICAgICAvLyBJZiBrZXkgYWxyZWFkeSBleGlzdHMsIHJlbW92ZVxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIG9yZGVyLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQ2xlYXIgdmFsdWUga2V5IHVwZGF0ZSBvcmRlclxuICAgICovXG4gICAgY2xlYXJPcmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm9yZGVyID0gW107XG4gICAgICAgIHRoaXMucGFyZW50T3JkZXIgPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIFtib29sZWFuXTogSXMgdGhpcyBFbGVtZW50IGN1cnJlbnRseSBhY3RpdmU/XG4gICAgZ2V0IGlzQWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFNldCBFbGVtZW50IGFjdGl2ZSBzdGF0dXNcblxuICAgICAgICBJZiBhY3RpdmUgaXMgYmVpbmcgc2V0IHRvIHRydWUsIHNldCBoYXNDaGFuZ2VkIHRvIHRydWUsIHRvb1xuXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IE5ldyBhY3RpdmUgc3RhdHVzXG4gICAgKi9cbiAgICBzZXQgaXNBY3RpdmUoc3RhdHVzKSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHN0YXR1cztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lzQWN0aXZlID0gc3RhdHVzO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWN0b3I7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rvci9BY3Rvci5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIEFjdG9yID0gcmVxdWlyZSgnLi9BY3RvcicpLFxuICAgIGdlbmVyYXRlTWV0aG9kSXRlcmF0b3IgPSByZXF1aXJlKCcuL3N5c3RlbS9nZW5lcmF0ZS1pdGVyYXRvcicpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG5cbiAgICBERUZBVUxUX1NUQUdHRVJfRUFTRSA9ICdsaW5lYXInLFxuXG4gICAgLypcbiAgICAgICAgQWN0b3JDb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG5cbiAgICAgICAgQHBhcmFtIFthcnJheV06IEFycmF5IG9mIEFjdG9ycywgb3IgdmFsaWQgQWN0b3IgZWxlbWVudHNcbiAgICAqL1xuICAgIEFjdG9yQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIChlbGVtZW50cywgb3B0cykge1xuICAgICAgICAvLyBBZGQgaW5pdGlhbCBlbGVtZW50c1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChlbGVtZW50cywgb3B0cyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgc3RhZ2dlciBBY3RvclxuICAgICAgICB0aGlzLl9zdGFnZ2VyID0gbmV3IEFjdG9yKCk7XG4gICAgfTtcblxuQWN0b3JDb2xsZWN0aW9uLnByb3RvdHlwZSA9IHtcblxuICAgIC8qXG4gICAgICAgIENsZWFyIGN1cnJlbnQgQWN0b3JzXG4gICAgKi9cbiAgICBjbGVhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTdGFnZ2VyIHRoZSBleGVjdXRpb24gb2YgRWxlbWVudCBtZXRob2RzXG5cbiAgICAgICAgQHBhcmFtIFtudW1iZXIgfHwgb2JqZWN0XTogSW50ZXJ2YWwgYmV0d2VlbiBFbGVtZW50cyBvciBzdGFnZ2VyIG9wdGlvbnNcbiAgICAgICAgQHBhcmFtIFtzdHJpbmcgfHwgZnVuY3Rpb25dOiBOYW1lIG9mIG1ldGhvZCB0byBleGVjdXRlIG9yIGEgY2FsbGJhY2tcbiAgICAgICAgQGFyZ3MgLi4uIChvcHRpb25hbCk6IE9wdGlvbmFsIGFyZ3VtZW50cyB0byBzZW5kIHRvIGNhbGxiYWNrXG4gICAgKi9cbiAgICBzdGFnZ2VyOiBmdW5jdGlvbiAocHJvcHMsIG1ldGhvZCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgICAgbnVtRWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIHByb3BzSXNOdW0gPSB1dGlscy5pc051bShwcm9wcyksXG4gICAgICAgICAgICBpbnRlcnZhbCA9IHByb3BzSXNOdW0gPyBwcm9wcyA6IHByb3BzLmludGVydmFsLFxuICAgICAgICAgICAgc3RhZ2dlclByb3BzID0gcHJvcHNJc051bSA/IHt9IDogcHJvcHMsXG4gICAgICAgICAgICBpID0gLTEsXG5cbiAgICAgICAgICAgIGNhbGxiYWNrID0gdXRpbHMuaXNTdHJpbmcobWV0aG9kKSA/XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGFjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdG9yW21ldGhvZF0uYXBwbHkoYWN0b3IsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gOiBtZXRob2Q7XG5cbiAgICAgICAgYXJncy5zcGxpY2UoMCwgMik7XG5cbiAgICAgICAgc3RhZ2dlclByb3BzLnZhbHVlcyA9IHtcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIG51bUVsZW1lbnRzLFxuICAgICAgICAgICAgICAgIGVhc2U6IHByb3BzSXNOdW0gPyBERUZBVUxUX1NUQUdHRVJfRUFTRSA6IHByb3BzLmVhc2UgfHwgREVGQVVMVF9TVEFHR0VSX0VBU0UsXG4gICAgICAgICAgICAgICAgc3RlcHM6IG51bUVsZW1lbnRzLFxuICAgICAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvOiBudW1FbGVtZW50cyAtIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzdGFnZ2VyUHJvcHMub25VcGRhdGUgPSBmdW5jdGlvbiAob3V0cHV0KSB7XG4gICAgICAgICAgICB2YXIgbmV3SW5kZXggPSBvdXRwdXQuaSxcbiAgICAgICAgICAgICAgICBnYXBJbmRleCA9IGkgKyAxO1xuXG4gICAgICAgICAgICAvLyBJZiBvdXIgbmV3IGluZGV4IGlzIG9ubHkgb25lIG1vcmUgdGhhbiB0aGUgcHJldmlvdXMgaW5kZXgsIGZpcmUgaW1tZWRpZXRseVxuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID09PSBpICsgMSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHNlbGYuZWxlbWVudHNbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG5cbiAgICAgICAgICAgIC8vIE9yIGxvb3AgdGhyb3VnaCB0aGUgZGlzdGFuY2UgdG8gZmlyZSBhbGwgaW5kZWNpZXMuIEluY3JlYXNlIGRlbGF5LlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKDsgZ2FwSW5kZXggPD0gbmV3SW5kZXg7IGdhcEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soc2VsZi5lbGVtZW50c1tnYXBJbmRleF0sIGdhcEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGkgPSBuZXdJbmRleDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9zdGFnZ2VyLnBsYXkoc3RhZ2dlclByb3BzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgSXRlcmF0ZSBvdmVyIGVhY2ggZWxlbWVudCBpbiBjb2xsZWN0aW9uXG5cbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IENhbGxiYWNrIHRvIHJ1biBvbiBlYWNoIEFjdG9yLCBwcm92aWRlZCAoYWN0b3IsIGluZGV4KSBhcmdzXG4gICAgKi9cbiAgICBlYWNoOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEFkZCBhIGdyb3VwIG9mIEFjdG9ycyB0byBvdXIgQ29sbGVjdGlvblxuXG4gICAgICAgIEBwYXJhbSBbYXJyYXldOiBBcnJheSBvZiBBY3RvcnMsIG9yIHZhbGlkIEFjdG9yIGVsZW1lbnRzXG4gICAgKi9cbiAgICBhZGQ6IGZ1bmN0aW9uIChlbGVtZW50cywgb3B0cykge1xuICAgICAgICB2YXIgbnVtTmV3RWxlbWVudHMgPSBlbGVtZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIG5ld0VsZW1lbnQ7XG5cbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgICAgICAgZm9yICg7IGkgPCBudW1OZXdFbGVtZW50czsgaSsrKSB7XG4gICAgICAgICAgICBvcHRzLmVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgICAgICAgIG5ld0VsZW1lbnQgPSAoZWxlbWVudHNbaV0gaW5zdGFuY2VvZiBBY3RvcikgPyBlbGVtZW50c1tpXSA6IG5ldyBBY3RvcihvcHRzKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMucHVzaChuZXdFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbi8vIEluaXRpYWxpc2UgQWN0b3JDb2xsZWN0aW9uIG1ldGhvZHNcbihmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgbWV0aG9kIGluIEFjdG9yLnByb3RvdHlwZSkge1xuICAgICAgICBpZiAoQWN0b3IucHJvdG90eXBlLmhhc093blByb3BlcnR5KG1ldGhvZCkpIHtcbiAgICAgICAgICAgIEFjdG9yQ29sbGVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXSA9IGdlbmVyYXRlTWV0aG9kSXRlcmF0b3IobWV0aG9kKTtcbiAgICAgICAgfVxuICAgIH1cbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQWN0b3JDb2xsZWN0aW9uO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0b3IvQWN0b3JDb2xsZWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXG4gICAgSW5wdXQgY29udHJvbGxlclxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjLmpzJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMuanMnKSxcbiAgICBIaXN0b3J5ID0gcmVxdWlyZSgnLi4vaW5jL0hpc3RvcnkuanMnKSxcblxuICAgIC8qXG4gICAgICAgIElucHV0IGNvbnN0cnVjdG9yXG4gICAgICAgIFxuICAgICAgICAgICAgU3ludGF4XG4gICAgICAgICAgICAgICAgbmV3SW5wdXQobmFtZSwgdmFsdWVbLCBwb2xsXSlcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHRvIHRyYWNrXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogSW5pdGlhbCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXSAob3B0aW9uYWwpOiBGdW5jdGlvbiB0byBwb2xsIElucHV0IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbmV3SW5wdXQocHJvcHNbLCBwb2xsXSlcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3Qgb2YgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dIChvcHRpb25hbCk6IEZ1bmN0aW9uIHRvIHBvbGwgSW5wdXQgZGF0YVxuXG4gICAgICAgIEByZXR1cm4gW0lucHV0XVxuICAgICovXG4gICAgSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwb2xsUG9zID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50ID0ge307XG4gICAgICAgIHRoaXMub2Zmc2V0ID0ge307XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7fTtcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEhpc3RvcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuYyhhcmd1bWVudHNbcG9sbFBvc10pKSB7XG4gICAgICAgICAgICB0aGlzLnBvbGwgPSBhcmd1bWVudHNbcG9sbFBvc107XG4gICAgICAgIH1cbiAgICB9O1xuXG5JbnB1dC5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLy8gW251bWJlcl06IE51bWJlciBvZiBmcmFtZXMgb2YgaW5hY3Rpdml0eSBiZWZvcmUgdmVsb2NpdHkgaXMgdHVybmVkIHRvIDBcbiAgICBtYXhJbmFjdGl2ZUZyYW1lczogMixcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogTnVtYmVyIG9mIGZyYW1lcyBpbnB1dCBoYXNuJ3QgYmVlbiB1cGRhdGVkXG4gICAgaW5hY3RpdmVGcmFtZXM6IDAsXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGxhdGVzdCBpbnB1dCB2YWx1ZXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXSAob3B0aW9uYWwpOiBOYW1lIG9mIHNwZWNpZmljIHByb3BlcnR5IHRvIHJldHVyblxuICAgICAgICBAcmV0dXJuIFtvYmplY3QgfHwgbnVtYmVyXTogTGF0ZXN0IGlucHV0IHZhbHVlcyBvciwgaWYgc3BlY2lmaWVkLCBzaW5nbGUgdmFsdWVcbiAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgdmFyIGxhdGVzdCA9IHRoaXMuaGlzdG9yeS5nZXQoKSxcbiAgICAgICAgICAgIHZhbCA9IChwcm9wICE9PSB1bmRlZmluZWQpID8gbGF0ZXN0W3Byb3BdIDogbGF0ZXN0O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIHRoZSBpbnB1dCB2YWx1ZXNcbiAgICAgICAgXG4gICAgICAgIFN5bnRheFxuICAgICAgICAgICAgaW5wdXQudXBkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiB0byB0cmFja1xuICAgICAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogSW5pdGlhbCB2YWx1ZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaW5wdXQudXBkYXRlKHByb3BzKVxuICAgICAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IG9mIHZhbHVlc1xuICAgICAgICAgICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtJbnB1dF1cbiAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHt9O1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bShhcmcxKSkge1xuICAgICAgICAgICAgdmFsdWVzW2FyZzBdID0gYXJnMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IGFyZzA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhpc3RvcnkuYWRkKHV0aWxzLm1lcmdlKHRoaXMuY3VycmVudCwgdmFsdWVzKSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIENoZWNrIGZvciBpbnB1dCBtb3ZlbWVudCBhbmQgdXBkYXRlIHBvaW50ZXIgb2JqZWN0J3MgcHJvcGVydGllc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaW1lc3RhbXAgb2YgZnJhbWVcbiAgICAgICAgQHJldHVybiBbSW5wdXRdXG4gICAgKi9cbiAgICBvbkZyYW1lOiBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBsYXRlc3QsIGhhc0NoYW5nZWQ7XG4gICAgICAgIFxuICAgICAgICAvLyBDaGVjayBwcm92aWRlZCB0aW1lc3RhbXAgYWdhaW5zdCBsYXN0RnJhbWUgdGltZXN0YW1wIGFuZCByZXR1cm4gaW5wdXQgaGFzIGFscmVhZHkgYmVlbiB1cGRhdGVkXG4gICAgICAgIGlmICh0aW1lc3RhbXAgPT09IHRoaXMubGFzdEZyYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxhdGVzdCA9ICh0aGlzLnBvbGwpID8gdGhpcy5wb2xsKCkgOiB0aGlzLmhpc3RvcnkuZ2V0KCk7XG4gICAgICAgIGhhc0NoYW5nZWQgPSB1dGlscy5oYXNDaGFuZ2VkKHRoaXMuY3VycmVudCwgbGF0ZXN0KTtcblxuICAgICAgICAvLyBJZiBpbnB1dCBoYXMgY2hhbmdlZCBiZXR3ZWVuIGZyYW1lcyAgXG4gICAgICAgIGlmIChoYXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gY2FsYy5vZmZzZXQodGhpcy5jdXJyZW50LCBsYXRlc3QpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gbGF0ZXN0O1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG5cbiAgICAgICAgLy8gT3IgaXQgaGFzbid0IG1vdmVkIGFuZCBvdXIgZnJhbWUgbGltaXQgaGFzIGJlZW4gcmVhY2hlZFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IGNhbGMub2Zmc2V0KHRoaXMuY3VycmVudCwgdGhpcy5jdXJyZW50KTtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIGlucHV0IGhhc24ndCBjaGFuZ2VkXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzKys7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubGFzdEZyYW1lID0gdGltZXN0YW1wO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L0lucHV0LmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpLFxuXG4gICAgLypcbiAgICAgICAgUHJvY2VzcyBjb25zdHJ1Y3RvclxuICAgICAgICBcbiAgICAgICAgU3ludGF4XG4gICAgICAgICAgICB2YXIgcHJvY2VzcyA9IG5ldyBQcm9jZXNzKHNjb3BlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB2YXIgcHJvY2VzcyA9IG5ldyBQcm9jZXNzKGNhbGxiYWNrKTtcbiAgICAqL1xuICAgIFByb2Nlc3MgPSBmdW5jdGlvbiAoc2NvcGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBoYXNTY29wZSA9IChjYWxsYmFjayAhPT0gdW5kZWZpbmVkKTtcblxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gaGFzU2NvcGUgPyBjYWxsYmFjayA6IHNjb3BlO1xuICAgICAgICB0aGlzLnNjb3BlID0gaGFzU2NvcGUgPyBzY29wZSA6IHRoaXM7XG4gICAgICAgIHRoaXMuaWQgPSBtYW5hZ2VyLnJlZ2lzdGVyKCk7XG5cbiAgICAgICAgLy8gW2Jvb2xlYW5dOiBJcyB0aGlzIHByb2Nlc3MgY3VycmVudGx5IGFjdGl2ZT9cbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG5cblByb2Nlc3MucHJvdG90eXBlID0ge1xuICAgIC8qXG4gICAgICAgIEZpcmUgY2FsbGJhY2tcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbdGltZXN0YW1wXTogVGltZXN0YW1wIG9mIGN1cnJlbnRseS1leGVjdXRlZCBmcmFtZVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuICAgICovXG4gICAgZmlyZTogZnVuY3Rpb24gKHRpbWVzdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrLmNhbGwodGhpcy5zY29wZSwgdGltZXN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHdlJ3JlIHJ1bm5pbmcgYXQgYW4gaW50ZXJ2YWwsIGRlYWN0aXZhdGUgYWdhaW5cbiAgICAgICAgaWYgKHRoaXMuaXNJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0YXJ0IHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogRHVyYXRpb24gb2YgcHJvY2VzcyBpbiBtcywgMCBpZiBpbmRlZmluaXRlXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdG9wVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0b3AoKTtcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5pc1N0b3BUaW1lckFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0b3AgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQWN0aXZhdGUgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICBtYW5hZ2VyLmFjdGl2YXRlKHRoaXMsIHRoaXMuaWQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRGVhY3RpdmF0ZSBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIG1hbmFnZXIuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRmlyZSBwcm9jZXNzIGV2ZXJ5IHggbXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIG1zIHRvIHdhaXQgYmV0d2VlbiByZWZpcmluZyBwcm9jZXNzLlxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgZXZlcnk6IGZ1bmN0aW9uIChpbnRlcnZhbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuXG4gICAgICAgIHRoaXMuaXNJbnRlcnZhbCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5hY3RpdmF0ZSgpO1xuICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlzSW50ZXJ2YWxUaW1lQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQ2xlYXIgYWxsIHRpbWVyc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFxuICAgICovXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0ludGVydmFsID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5pc1N0b3BUaW1lckFjdGl2ZSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RvcFRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuaXNJbnRlcnZhbFRpbWVBY3RpdmUpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbFRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9jZXNzO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy9Qcm9jZXNzLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xudmFyIGVhY2ggPSB1dGlscy5lYWNoO1xuXG4vKlxuICAgIFJvbGUgY2xhc3MgY29uc3RydWN0b3JcblxuICAgIEBwYXJhbSBbb2JqZWN0XTogT3B0aW9uYWwgbWV0aG9kcyBhbmQgcHJvcHMgdG8gYWRkOlxuICAgICAgICBuYW1lIFtzdHJpbmddOiAgICAgIE5hbWUgb2YgZ2VuZXJhdGVkIGdldHRlci9zZXR0ZXIgbWV0aG9kIG9uIEFjdG9yXG4gICAgICAgIF9tYXAgW29iamVjdF06ICAgICAgTWFwIEFjdG9yIHZhbHVlcyB0byB0aGVzZSB2YWx1ZXMgZm9yIHRoaXMgUm9sZVxuICAgICAgICBfdHlwZU1hcCBbb2JqZWN0XTogIE1hcCB2YWx1ZXMgdG8gdmFsdWUgdHlwZXNcbiAgICAgICAgaW5pdCBbZnVuY3Rpb25dOiAgICBDYWxsYmFjayB0byBydW4gd2hlbiB0aGlzIFJvbGUgaXMgYWRkZWQgdG8gYW4gQWN0b3JcbiAgICAgICAgc3RhcnQgW2Z1bmN0aW9uXTogICBDYWxsYmFjayB0byBydW4gd2hlbiBob3N0IEFjdG9yIHN0YXJ0cyBhbiBhY3Rpb25cbiAgICAgICAgY29tcGxldGUgW2Z1bmN0aW9uXTogQ2FsbGJhY2sgdG8gcnVuIHdoZW4gYWN0aW9uIGNvbXBsZXRlc1xuICAgICAgICBmcmFtZSBbZnVuY3Rpb25dOiAgIENhbGxiYWNrIHRvIGZpcmUgb25jZSBwZXIgZnJhbWVcbiAgICAgICAgdXBkYXRlIFtmdW5jdGlvbl06ICBDYWxsYmFjayB0byBmaXJlIHdoZW4gdmFsdWVzIGNoYW5nZVxuICAgICAgICBnZXQgW2Z1bmN0aW9uXTogICAgIFJlYWQgdmFsdWUgZnJvbSBhY3R1YWwgZWxlbWVudFxuICAgICAgICBzZXQgW2Z1bmN0aW9uXTogICAgIFNldCB2YWx1ZSBvbiBhY3R1YWwgZWxlbWVudFxuKi9cbnZhciBSb2xlID0gZnVuY3Rpb24gKG1ldGhvZHMpIHtcbiAgICB2YXIgcm9sZSA9IHRoaXM7XG5cbiAgICByb2xlLl9tYXAgPSB7fTtcblxuICAgIGVhY2gobWV0aG9kcywgZnVuY3Rpb24gKG5hbWUsIG1ldGhvZCkge1xuICAgICAgICByb2xlW25hbWVdID0gKCF1dGlscy5pc09iaihtZXRob2QpKSA/IG1ldGhvZCA6IHV0aWxzLmNvcHkobWV0aG9kKTtcbiAgICB9KTtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIGEgbmV3IHJvbGVcblxuICAgIEBwYXJhbSBbb2JqZWN0XTogT3B0aW9uYWwgbWV0aG9kcyBhbmQgcHJvcHMgdG8gYWRkXG4gICAgQHBhcmFtIFt2YWx1ZXNUb01hcF06IE92ZXJyaWRlIGV4aXN0aW5nIG1hcCB3aXRoIHRoZXNlIHZhbHVlc1xuICAgIEByZXR1cm4gW1JvbGVdOiBOZXcgUm9sZVxuKi9cbnZhciBjcmVhdGVSb2xlID0gZnVuY3Rpb24gKG1ldGhvZHMsIHZhbHVlcykge1xuICAgIHZhciBuZXdSb2xlID0gbmV3IFJvbGUobWV0aG9kcyk7XG5cbiAgICBlYWNoKHZhbHVlcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgbmV3Um9sZS5fbWFwW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdSb2xlO1xufTtcblxuUm9sZS5wcm90b3R5cGUgPSB7XG5cbiAgICAvKlxuICAgICAgICBNYXAgdmFsdWUga2V5cyBvciBnZW5lcmF0ZSBuZXcgUm9sZSB3aXRoIHVwZGF0ZWQgbWFwXG5cbiAgICAgICAgR2V0dGVyOlxuICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgdG8gbWFwXG4gICAgICAgICAgICBAcmV0dXJuIFtzdHJpbmddOiBNYXBwZWQga2V5LCBvciBrZXkgaWYgbm8gbWFwcGVkIGtleSBmb3VuZFxuXG4gICAgICAgIFNldHRlcjogXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IE1hcCBvZiBBY3RvciBrZXlzIC0+IFJvbGUga2V5c1xuICAgICAgICAgICAgQHJldHVybiBbUm9sZV06IE5ldyBSb2xlIHdpdGggdW5pcXVlIG1hcFxuICAgICovXG4gICAgbWFwOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBzdHJpbmcsIGdldCBtYXBwZWQgdmFsdWVcbiAgICAgICAgLy8gT3RoZXJ3aXNlIHRoaXMgaXMgYSBtYXAsIGR1cGxpY2F0ZWQgcm9sZSB3aXRoIHVwZGF0ZWQgbWFwXG4gICAgICAgIHJldHVybiAodXRpbHMuaXNTdHJpbmcodmFsdWVzKSkgPyB0aGlzLl9tYXBbdmFsdWVzXSB8fCB2YWx1ZXMgOiBjcmVhdGVSb2xlKHRoaXMsIHZhbHVlcyk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSb2xlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm9sZXMvUm9sZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgQmV6aWVyID0gcmVxdWlyZSgnLi9CZXppZXInKSxcblxuICAgIC8qXG4gICAgICAgIE1pcnJvciBlYXNpbmdcbiAgICAgICAgXG4gICAgICAgIE1pcnJvcnMgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBoZXJlIGZvciBtaXJyb3JpbmcgYW5cbiAgICAgICAgZWFzZUluIGludG8gYW4gZWFzZUluT3V0XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1pcnJvclxuICAgICAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuICAgICovXG4gICAgbWlycm9yRWFzaW5nID0gZnVuY3Rpb24gKHByb2dyZXNzLCBtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIChwcm9ncmVzcyA8PSAwLjUpID8gbWV0aG9kKDIgKiBwcm9ncmVzcykgLyAyIDogKDIgLSBtZXRob2QoMiAqICgxIC0gcHJvZ3Jlc3MpKSkgLyAyO1xuICAgIH0sXG4gICAgICAgICAgICBcbiAgICAvKlxuICAgICAgICBSZXZlcnNlIGVhc2luZ1xuICAgICAgICBcbiAgICAgICAgUmV2ZXJzZXMgdGhlIG91dHB1dCBvZiB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGZvciBmbGlwcGluZyBlYXNlSW5cbiAgICAgICAgY3VydmUgdG8gYW4gZWFzZU91dC5cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gcmV2ZXJzZVxuICAgICAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuICAgICovXG4gICAgcmV2ZXJzZUVhc2luZyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgbWV0aG9kKSB7XG4gICAgICAgIHJldHVybiAxIC0gbWV0aG9kKDEgLSBwcm9ncmVzcyk7XG4gICAgfTtcblxuLypcbiAgICBFYXNpbmcgY2xhc3NcblxuICAgIElmIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgcmV0dXJucyBlYXNpbmcgZnVuY3Rpb24gd2l0aCBcbiAgICBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuXG4gICAgSWYgcHJvdmlkZWQgZm91ciBhcmd1bWVudHMsIHJldHVybnMgbmV3IEJlemllciBjbGFzcyBpbnN0ZWFkLlxuKi9cbnZhciBFYXNpbmcgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICB2YXIgbWV0aG9kID0geDEsXG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uO1xuXG4gICAgLy8gSWYgdGhpcyBpcyBhIGJlemllciBjdXJ2ZSwgcmV0dXJuIGEgYmV6aWVyIGZ1bmN0aW9uXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gbmV3IEJlemllcih4MSwgeTEsIHgyLCB5Mik7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBlYXNpbmdGdW5jdGlvbiA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZWFzaW5nRnVuY3Rpb24uaW4gPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uLm91dCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIHJldmVyc2VFYXNpbmcocHJvZ3Jlc3MsIG1ldGhvZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZWFzaW5nRnVuY3Rpb24uaW5PdXQgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBtaXJyb3JFYXNpbmcocHJvZ3Jlc3MsIG1ldGhvZCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGVhc2luZ0Z1bmN0aW9uO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFYXNpbmc7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3R3ZWVuL0Vhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIEFjdG9yQ29sbGVjdGlvbiA9IHJlcXVpcmUoJy4vQWN0b3JDb2xsZWN0aW9uJyk7XG5cbi8qXG4gICAgQ3JlYXRlIGFuIEFjdG9yQ29sbGVjdGlvbiBiYXNlZCBvbiBhIHNlbGVjdGlvbiBvZiBET00gbm9kZXNcblxuICAgIEBwYXJhbSBbc3RyaW5nIHx8IE5vZGVMaXN0IHx8IGpRdWVyeSBvYmplY3RdOlxuICAgICAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdCB8fCBqUXVlcnkgb2JqZWN0LlxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBvcHRzKSB7XG4gICAgdmFyIG5vZGVzID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgOiBzZWxlY3RvcixcbiAgICAgICAgZWxlbWVudHMgPSBbXTtcblxuICAgIC8vIElmIGpRdWVyeSBzZWxlY3Rpb24sIGdldCBhcnJheSBvZiBFbGVtZW50c1xuICAgIGlmIChub2Rlcy5nZXQpIHtcbiAgICAgICAgZWxlbWVudHMgPSBub2Rlcy5nZXQoKTtcblxuICAgIC8vIE9yIGNvbnZlcnQgTm9kZUxpc3QgdG8gYXJyYXlcbiAgICB9IGVsc2UgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgICBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwobm9kZXMpO1xuXG4gICAgLy8gT3IgaWYgaXQncyBqdXN0IGFuIEVsZW1lbnQsIHB1dCBpbnRvIGFycmF5XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudHMucHVzaChub2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBBY3RvckNvbGxlY3Rpb24oZWxlbWVudHMsIG9wdHMpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdG9yL3NlbGVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICAgIENhbGN1bGF0b3JzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIFNpbXBsZSBJL08gc25pcHBldHNcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscy5qcycpLFxuXG4gICAgY2FsYyA9IHtcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGFyZSBhdCAwLDAsIHRoZW4gcmV0dXJuIHRoZSBhbmdsZSB1c2luZyAuYW5nbGVGcm9tQ2VudGVyKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gICAgICAgICAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiAgICAgICAgKi9cbiAgICAgICAgYW5nbGU6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAgICAgdmFyIGZyb20gPSBwb2ludEIgPyBwb2ludEEgOiB7eDogMCwgeTogMH0sXG4gICAgICAgICAgICAgICAgdG8gPSBwb2ludEIgfHwgcG9pbnRBLFxuICAgICAgICAgICAgICAgIHBvaW50ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiB0by54IC0gZnJvbS54LFxuICAgICAgICAgICAgICAgICAgICB5OiB0by55IC0gZnJvbS55XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYW5nbGVGcm9tQ2VudGVyKHBvaW50LngsIHBvaW50LnkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBBbmdsZSBmcm9tIGNlbnRlclxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBjdXJyZW50IGFuZ2xlLCBpbiByYWRpYW5zLCBvZiBhIGRlZmluZWQgcG9pbnRcbiAgICAgICAgICAgIGZyb20gYSBjZW50ZXIgKGFzc3VtZWQgMCwwKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFggY29vcmRpbmF0ZSBvZiBzZWNvbmQgcG9pbnRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogWSBjb29yZGluYXRlIG9mIHNlY29uZCBwb2ludFxuICAgICAgICAgICAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiAwLCAwIGFuZCBwb2ludCBpbiByYWRpYW5zXG4gICAgICAgICovXG4gICAgICAgIGFuZ2xlRnJvbUNlbnRlcjogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMih5LCB4KSk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgICAgICovXG4gICAgICAgIGRlZ3JlZXNUb1JhZGlhbnM6IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIERpbGF0ZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBhIC0tLS0tLS0tLSBiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGEgLS0tLSBiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4gICAgICAgICovXG4gICAgICAgIGRpbGF0ZTogZnVuY3Rpb24gKGEsIGIsIGRpbGF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gYSArICgoYiAtIGEpICogZGlsYXRpb24pO1xuICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEaXN0YW5jZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuICgwLDApIGFuZCBwb2ludEEsIHVubGVzcyBwb2ludEJcbiAgICAgICAgICAgIGlzIHByb3ZpZGVkLCB0aGVuIHdlIHJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gICAgICAgICovXG4gICAgICAgIGRpc3RhbmNlOiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgICAgIHJldHVybiAodHlwZW9mIHBvaW50QSA9PT0gXCJudW1iZXJcIikgPyB0aGlzLmRpc3RhbmNlMUQocG9pbnRBLCBwb2ludEIpIDogdGhpcy5kaXN0YW5jZTJEKHBvaW50QSwgcG9pbnRCKTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIERpc3RhbmNlIDFEXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gcG9pbnQgQSBhbmQgcG9pbnQgQlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFBvaW50IEFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogKG9wdGlvbmFsKTogUG9pbnQgQlxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgZGlzdGFuY2UxRDogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgICAgICB2YXIgYklzTnVtID0gKHR5cGVvZiBwb2ludEIgPT09ICdudW1iZXInKSxcbiAgICAgICAgICAgICAgICBmcm9tID0gYklzTnVtID8gcG9pbnRBIDogMCxcbiAgICAgICAgICAgICAgICB0byA9IGJJc051bSA/IHBvaW50QiA6IHBvaW50QTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBhYnNvbHV0ZSh0byAtIGZyb20pO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEaXN0YW5jZSAyRFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuICgwLDApIGFuZCBwb2ludCBBLCB1bmxlc3MgcG9pbnQgQlxuICAgICAgICAgICAgaXMgcHJvdmlkZWQsIHRoZW4gd2UgcmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHR3by5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiB4IGFuZCB5IG9mIHBvaW50IEFcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogKG9wdGlvbmFsKTogeCBhbmQgeSBvZiBwb2ludCBCXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICAgICAqL1xuICAgICAgICBkaXN0YW5jZTJEOiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgICAgIHZhciBiSXNPYmogPSAodHlwZW9mIHBvaW50QiA9PT0gXCJvYmplY3RcIiksXG4gICAgICAgICAgICAgICAgZnJvbSA9IGJJc09iaiA/IHBvaW50QSA6IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgICAgICB0byA9IGJJc09iaiA/IHBvaW50QiA6IHBvaW50QSxcbiAgICAgICAgICAgICAgICBwb2ludCA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogYWJzb2x1dGUodG8ueCAtIGZyb20ueCksXG4gICAgICAgICAgICAgICAgICAgIHk6IGFic29sdXRlKHRvLnkgLSBmcm9tLnkpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh5cG90ZW51c2UocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEh5cG90ZW51c2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgaHlwb3RlbnVzZSwgc2lkZSBDLCBnaXZlbiB0aGUgbGVuZ3RocyBvZiBzaWRlcyBBIGFuZCBCLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBCXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBMZW5ndGggb2YgQ1xuICAgICAgICAqL1xuICAgICAgICBoeXBvdGVudXNlOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgdmFyIGEyID0gYSAqIGEsXG4gICAgICAgICAgICAgICAgYjIgPSBiICogYixcbiAgICAgICAgICAgICAgICBjMiA9IGEyICsgYjI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGMyKTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBPZmZzZXQgYmV0d2VlbiB0d28gaW5wdXRzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIENhbGN1bGF0ZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBkaWZmZXJlbnQgaW5wdXRzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBpbnB1dFxuICAgICAgICAgICAgQHBhcmFtIFtQb2ludF06IFNlY29uZCBpbnB1dFxuICAgICAgICAgICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgb2Zmc2V0OiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHt9O1xuICAgIFxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFtrZXldID0gYltrZXldIC0gYVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0W2tleV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzTnVtKG9mZnNldC54KSAmJiBpc051bShvZmZzZXQueSkpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQuYW5nbGUgPSB0aGlzLmFuZ2xlKGEsIGIpO1xuICAgICAgICAgICAgICAgIG9mZnNldC5kaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2UyRChhLCBiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgICAgICAgICAgIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiAgICAgICAgKi9cbiAgICAgICAgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZTogZnVuY3Rpb24gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gICAgICAgICAgICB2YXIgcG9pbnQgPSB7fTtcbiAgICBcbiAgICBcdFx0cG9pbnQueCA9IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLng7XG4gICAgICAgICAgICBwb2ludC55ID0gZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBwb2ludDtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAgICAgICAgICAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gICAgICAgICAgICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgaWYgZnVsbCByYW5nZSBnaXZlbiwgdXBwZXIgaWYgbm90XG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4gICAgICAgICovXG4gICAgICAgIHByb2dyZXNzOiBmdW5jdGlvbiAodmFsdWUsIGxpbWl0QSwgbGltaXRCKSB7XG4gICAgICAgICAgICB2YXIgYklzTnVtID0gKHR5cGVvZiBsaW1pdEIgPT09ICdudW1iZXInKSxcbiAgICAgICAgICAgICAgICBmcm9tID0gYklzTnVtID8gbGltaXRBIDogMCxcbiAgICAgICAgICAgICAgICB0byA9IGJJc051bSA/IGxpbWl0QiA6IGxpbWl0QSxcbiAgICAgICAgICAgICAgICByYW5nZSA9IHRvIC0gZnJvbSxcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9ICh2YWx1ZSAtIGZyb20pIC8gcmFuZ2U7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gICAgICAgICovXG4gICAgICAgIHJhZGlhbnNUb0RlZ3JlZXM6IGZ1bmN0aW9uIChyYWRpYW5zKSB7XG4gICAgICAgICAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtaW5pbXVtXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFJhbmRvbSBudW1iZXIgd2l0aGluIHJhbmdlLCBvciAwIGFuZCAxIGlmIG5vbmUgcHJvdmlkZWRcbiAgICAgICAgKi9cbiAgICAgICAgcmFuZG9tOiBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICAgICAgICAgIG1pbiA9IGlzTnVtKG1pbikgPyBtaW4gOiAwO1xuICAgICAgICAgICAgbWF4ID0gaXNOdW0obWF4KSA/IG1heCA6IDE7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gICAgICAgICAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICAgICAgKi9cbiAgICAgICAgcmVsYXRpdmVWYWx1ZTogZnVuY3Rpb24gKGN1cnJlbnQsIHJlbCkge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gY3VycmVudCxcbiAgICAgICAgICAgICAgICBlcXVhdGlvbiA9IHJlbC5zcGxpdCgnPScpLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yID0gZXF1YXRpb25bMF0sXG4gICAgICAgICAgICAgICAgc3BsaXRWYWwgPSB1dGlscy5zcGxpdFZhbFVuaXQoZXF1YXRpb25bMV0pO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlICs9IHNwbGl0VmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgLT0gc3BsaXRWYWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSAqPSBzcGxpdFZhbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlIC89IHNwbGl0VmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHNwbGl0VmFsLnVuaXQpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSArPSBzcGxpdFZhbC51bml0O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgICAgICB9LFxuICAgIFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICAgICAqL1xuICAgICAgICByZXN0cmljdGVkOiBmdW5jdGlvbiAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgICAgICAgICB2YXIgcmVzdHJpY3RlZCA9IChtaW4gIT09IHVuZGVmaW5lZCkgPyBNYXRoLm1heCh2YWx1ZSwgbWluKSA6IHZhbHVlO1xuICAgICAgICAgICAgcmVzdHJpY3RlZCA9IChtYXggIT09IHVuZGVmaW5lZCkgPyBNYXRoLm1pbihyZXN0cmljdGVkLCBtYXgpIDogcmVzdHJpY3RlZDtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiByZXN0cmljdGVkO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuICAgICAgICAqL1xuICAgICAgICBzcGVlZFBlckZyYW1lOiBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4gICAgICAgICovXG4gICAgICAgIHNwZWVkUGVyU2Vjb25kOiBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG4gICAgICAgIH0sXG4gICAgXG4gICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICAgICAgICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2UsIG9yIHVwcGVyIGlmIGxpbWl0MiBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHByb2dyZXNzLCBsaW1pdEEsIGxpbWl0Qikge1xuICAgICAgICAgICAgdmFyIGJJc051bSA9ICh0eXBlb2YgbGltaXRCID09PSAnbnVtYmVyJyksXG4gICAgICAgICAgICAgICAgZnJvbSA9IGJJc051bSA/IGxpbWl0QSA6IDAsXG4gICAgICAgICAgICAgICAgdG8gPSBiSXNOdW0gPyBsaW1pdEIgOiBsaW1pdEE7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gKC0gcHJvZ3Jlc3MgKiBmcm9tKSArIChwcm9ncmVzcyAqIHRvKSArIGZyb207IFxuICAgICAgICB9LFxuICAgIFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRWFzZWQgdmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICAgICAgICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2UsIG9yIHVwcGVyIGlmIGxpbWl0MiBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBFYXNpbmcgdG8gYXBwbHkgdG8gdmFsdWVcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiAgICAgICAgKi9cbiAgICAgICAgdmFsdWVFYXNlZDogZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzaW5nKSB7XG4gICAgICAgICAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IGVhc2luZyhwcm9ncmVzcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBDYWNoaW5nIGZ1bmN0aW9ucyB1c2VkIG11bHRpcGxlIHRpbWVzIHRvIHJlZHVjZSBmaWxlc2l6ZSBhbmQgaW5jcmVhc2UgcGVyZm9ybWFuY2VcbiAgICAqL1xuICAgIGlzTnVtID0gdXRpbHMuaXNOdW0sXG4gICAgYWJzb2x1dGUgPSBNYXRoLmFicztcbiAgICBcbm1vZHVsZS5leHBvcnRzID0gY2FsYztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9jYWxjLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApIHtcbiAgICB2YXIgY29tYmluZWQgPSAnJyxcbiAgICAgICAga2V5ID0gJycsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcblxuICAgIGZvciAoOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgICBrZXkgPSB0ZXJtc1tpXTtcblxuICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbWJpbmVkICs9IHZhbHVlc1trZXldICsgZGVsaW1pdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9zcGxpdC1jb21tYS1kZWxpbWl0ZWQnKSxcbiAgICBmdW5jdGlvbkJyZWFrID0gcmVxdWlyZSgnLi9mdW5jdGlvbi1icmVhaycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgdGVybXMpIHtcbiAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9LFxuICAgICAgICBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aCxcbiAgICAgICAgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChmdW5jdGlvbkJyZWFrKHZhbHVlKSksXG4gICAgICAgIGkgPSAwO1xuXG4gICAgZm9yICg7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICAgIHNwbGl0VmFsdWVbdGVybXNbaV1dID0gKGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yc1tpXSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwbGl0VmFsdWU7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2dldC1jb2xvci12YWx1ZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggKyAnKCcgKyB2YWx1ZSArICcpJztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjb2xvcjoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMjU1LFxuICAgICAgICByb3VuZDogdHJ1ZVxuICAgIH0sXG4gICAgb3BhY2l0eToge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMVxuICAgIH0sXG4gICAgcGVyY2VudDoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMTAwLFxuICAgICAgICB1bml0OiAnJSdcbiAgICB9XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgWCA9ICdYJyxcbiAgICBZID0gJ1knLFxuICAgIEFMUEhBID0gJ0FscGhhJyxcblxuICAgIHRlcm1zID0ge1xuICAgICAgICBjb2xvcnM6IFsnUmVkJywgJ0dyZWVuJywgJ0JsdWUnLCBBTFBIQV0sXG4gICAgICAgIHBvc2l0aW9uczogW1gsIFksICdaJ10sXG4gICAgICAgIGRpbWVuc2lvbnM6IFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0J10sXG4gICAgICAgIHNoYWRvdzogW1gsIFksICdSYWRpdXMnLCAnU3ByZWFkJywgJ0NvbG9yJ10sXG4gICAgICAgIGhzbDogWydIdWUnLCAnU2F0dXJhdGlvbicsICdMaWdodG5lc3MnLCBBTFBIQV1cbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRlcm1zO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICAgIFV0aWxpdHkgZnVuY3Rpb25zXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBwcm90ZWN0ZWRQcm9wZXJ0aWVzID0gWydzY29wZScsICAnZG9tJ10sXG4gICAgXG4gICAgaXNQcm90ZWN0ZWQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiAocHJvdGVjdGVkUHJvcGVydGllcy5pbmRleE9mKGtleSkgIT09IC0xKTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgR2V0IHZhciB0eXBlIGFzIHN0cmluZ1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW3N0cmluZ106IFJldHVybnMsIGZvciBpbnN0YW5jZSAnT2JqZWN0JyBpZiBbb2JqZWN0IE9iamVjdF1cbiAgICAqL1xuICAgIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLypcbiAgICAgICAgSXRlcmF0ZSBvdmVyIGFuIG9iamVjdCBhbmQgZmlyZSBhIGNhbGxiYWNrIGZvciBldmVyeSBpdGVtIGluIGl0XG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBQcm9wZXJ0aWVzXG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBmaXJlXG4gICAgKi9cbiAgICBlYWNoOiBmdW5jdGlvbiAocHJvcHMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhrZXksIHByb3BzW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBIYXMgb25lIG9iamVjdCBjaGFuZ2VkIGZyb20gdGhlIG90aGVyXG4gICAgICAgIFxuICAgICAgICBDb21wYXJlcyB0aGUgdHdvIHByb3ZpZGVkIGlucHV0cyBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZXkgYXJlIGRpZmZlcmVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBBXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQlxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBkaWZmZXJlbnRcbiAgICAqL1xuICAgIGhhc0NoYW5nZWQ6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2UsXG4gICAgICAgICAgICBrZXkgPSAnJztcblxuICAgICAgICBmb3IgKGtleSBpbiBiKSB7XG4gICAgICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiBoYXNDaGFuZ2VkO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYSBudW1iZXI/XG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4gICAgKi9cbiAgICBpc051bTogZnVuY3Rpb24gKG51bSkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBudW0gPT09ICdudW1iZXInKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGFuIG9iamVjdD9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiAgICAqL1xuICAgIGlzT2JqOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYSBmdW5jdGlvbiA/IFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdGhpcy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4gICAgKi9cbiAgICBpc0Z1bmM6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuICh2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbicpOyBcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGEgc3RyaW5nID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuICAgICovXG4gICAgaXNTdHJpbmc6IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyk7IFxuICAgIH0sXG5cblxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB0aGlzIGxvb2tzIGxpa2UgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50XG4gICAgKi9cbiAgICBpc1JlbGF0aXZlVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YgJiYgdmFsdWUuaW5kZXhPZignPScpID4gMCk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhbiBhcnJheSA/IFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdGhpcy52YXJUeXBlID09PSAnQXJyYXknXG4gICAgKi9cbiAgICBpc0FycmF5OiBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgIHJldHVybiAodmFyVHlwZShhcnIpID09PSAnQXJyYXknKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIENvcHkgb2JqZWN0IG9yIGFycmF5XG4gICAgICAgIFxuICAgICAgICBDaGVja3Mgd2hldGhlciBiYXNlIGlzIGFuIGFycmF5IG9yIG9iamVjdCBhbmQgbWFrZXNcbiAgICAgICAgYXBwcm9wcmlhdGUgY29weVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBBcnJheSBvciBvYmplY3QgdG8gY29weVxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IE5ldyBjb3B5IG9mIGFycmF5IG9yIG9iamVjdFxuICAgICovXG4gICAgY29weTogZnVuY3Rpb24gKGJhc2UpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmlzQXJyYXkoYmFzZSkpID8gdGhpcy5jb3B5QXJyYXkoYmFzZSkgOiB0aGlzLmNvcHlPYmplY3QoYmFzZSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEZWVwIGNvcHkgYW4gb2JqZWN0XG4gICAgICAgIFxuICAgICAgICBJdGVyYXRlcyBvdmVyIGFuIG9iamVjdCBhbmQgY3JlYXRlcyBhIG5ldyBjb3B5IG9mIGV2ZXJ5IGl0ZW0sXG4gICAgICAgIGRlZXAgY29weWluZyBpZiBpdCBmaW5kcyBhbnkgb2JqZWN0cy9hcnJheXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIGNvcHlcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBOZXcgY29weSBvZiBvYmplY3RcbiAgICAqL1xuICAgIGNvcHlPYmplY3Q6IGZ1bmN0aW9uIChiYXNlKSB7XG4gICAgICAgIHZhciBuZXdPYmplY3QgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBiYXNlKSB7XG4gICAgICAgICAgICBpZiAoYmFzZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSAodGhpcy5pc09iaihiYXNlW2tleV0pICYmICFpc1Byb3RlY3RlZChrZXkpKSA/IHRoaXMuY29weShiYXNlW2tleV0pIDogYmFzZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRGVlcCBjb3B5IGFuIGFycmF5XG4gICAgICAgIFxuICAgICAgICBMb29wcyB0aHJvdWdoIGFuIGFycmF5IGFuZCBjcmVhdGVzIGEgbmV3IGNvcHkgb2YgZXZlcnkgaXRlbSxcbiAgICAgICAgZGVlcCBjb3B5aW5nIGlmIGl0IGZpbmRzIGFueSBvYmplY3RzL2FycmF5c1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFthcnJheV06IEFycmF5IHRvIGNvcHlcbiAgICAgICAgQHJldHVybiBbYXJyYXldOiBOZXcgY29weSBvZiBhcnJheVxuICAgICovXG4gICAgY29weUFycmF5OiBmdW5jdGlvbiAoYmFzZSkge1xuICAgICAgICB2YXIgbmV3QXJyYXkgPSBbXSxcbiAgICAgICAgICAgIGxlbmd0aCA9IGJhc2UubGVuZ3RoLFxuICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgIFxuICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdBcnJheVtpXSA9ICh0aGlzLmlzT2JqKGJhc2VbaV0pKSA/IHRoaXMuY29weShiYXNlW2ldKSA6IGJhc2VbaV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIE5vbi1kZXN0cnVjdGl2ZSBtZXJnZSBvZiBvYmplY3Qgb3IgYXJyYXlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogQXJyYXkgb3Igb2JqZWN0IHRvIHVzZSBhcyBiYXNlXG4gICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogQXJyYXkgb3Igb2JqZWN0IHRvIG92ZXJ3cml0ZSBiYXNlIHdpdGhcbiAgICAgICAgQHJldHVybiBbYXJyYXkgfHwgb2JqZWN0XTogTmV3IGFycmF5IG9yIG9iamVjdFxuICAgICovXG4gICAgbWVyZ2U6IGZ1bmN0aW9uIChiYXNlLCBvdmVyd3JpdGUpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmlzQXJyYXkoYmFzZSkpID8gdGhpcy5jb3B5QXJyYXkob3ZlcndyaXRlKSA6IHRoaXMubWVyZ2VPYmplY3QoYmFzZSwgb3ZlcndyaXRlKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIE5vbi1kZXN0cnVjdGl2ZSBtZXJnZSBvZiBvYmplY3RcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIHVzZSBhcyBiYXNlXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIG92ZXJ3cml0ZSBiYXNlIHdpdGhcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogTmV3IG9iamVjdFxuICAgICovXG4gICAgbWVyZ2VPYmplY3Q6IGZ1bmN0aW9uIChiYXNlLCBvdmVyd3JpdGUpIHtcbiAgICAgICAgdmFyIGhhc0Jhc2UgPSB0aGlzLmlzT2JqKGJhc2UpLFxuICAgICAgICAgICAgbmV3T2JqZWN0ID0gaGFzQmFzZSA/IHRoaXMuY29weShiYXNlKSA6IHRoaXMuY29weShvdmVyd3JpdGUpLFxuICAgICAgICAgICAga2V5ID0gJyc7XG5cbiAgICAgICAgaWYgKGhhc0Jhc2UpIHtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIG92ZXJ3cml0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChvdmVyd3JpdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9ICh0aGlzLmlzT2JqKG92ZXJ3cml0ZVtrZXldKSAmJiAhaXNQcm90ZWN0ZWQoa2V5KSkgPyB0aGlzLm1lcmdlKGJhc2Vba2V5XSwgb3ZlcndyaXRlW2tleV0pIDogb3ZlcndyaXRlW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdPYmplY3Q7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICAgICAgICBcbiAgICAgICAgICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuICAgICovXG4gICAgc3BsaXRWYWxVbml0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNwbGl0VmFsWzFdKSxcbiAgICAgICAgICAgIHVuaXQ6ICBzcGxpdFZhbFsyXVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiAgICAqL1xuICAgIHN0ZXBQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzLCBzdGVwcykge1xuICAgICAgICB2YXIgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKSxcbiAgICAgICAgICAgIHRhcmdldCA9IDEgLSAoMSAvIHN0ZXBzKSxcbiAgICAgICAgICAgIHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4gICAgKi9cbiAgICBjdXJyZW50VGltZTogZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIpID8gcGVyZm9ybWFuY2Uubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG4gICAgXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB0cmFuc2Zvcm1EaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tZGljdGlvbmFyeScpLFxuICAgIHRyYW5zZm9ybVByb3BzID0gdHJhbnNmb3JtRGljdGlvbmFyeS5wcm9wcyxcblxuICAgIFRSQU5TTEFURV9aID0gJ3RyYW5zbGF0ZVonO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvdXRwdXQpIHtcbiAgICB2YXIgY3NzID0ge30sXG4gICAgICAgIGtleSA9ICcnLFxuICAgICAgICB0cmFuc2Zvcm0gPSAnJyxcbiAgICAgICAgdHJhbnNmb3JtSGFzWiA9IGZhbHNlLFxuICAgICAgICBydWxlID0gJyc7XG4gICAgICAgIFxuICAgIC8vIExvb3AgdGhyb3VnaCBvdXRwdXQsIGNoZWNrIGZvciB0cmFuc2Zvcm0gcHJvcGVydGllc1xuICAgIGZvciAoa2V5IGluIG91dHB1dCkge1xuICAgICAgICBpZiAob3V0cHV0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJ1bGUgPSBvdXRwdXRba2V5XTtcbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSB0cmFuc2Zvcm0gcHJvcGVydHksIGFkZCB0byB0cmFuc2Zvcm0gc3RyaW5nXG4gICAgICAgICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSArPSBrZXkgKyAnKCcgKyBydWxlICsgJyknO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUhhc1ogPSAoa2V5ID09PSBUUkFOU0xBVEVfWikgPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gT3IganVzdCBhc3NpZ24gZGlyZWN0bHlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3NzW2tleV0gPSBydWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgaGF2ZSB0cmFuc2Zvcm0gcHJvcGVydGllcywgYWRkIHRyYW5zbGF0ZVpcbiAgICBpZiAodHJhbnNmb3JtICE9PSAnJykge1xuICAgICAgICBpZiAoIXRyYW5zZm9ybUhhc1opIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybSArPSAnICcgKyBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBjc3MudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm9sZXMvY3NzL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgeDogVFJBTlNMQVRFICsgJ1gnLFxuICAgIHk6IFRSQU5TTEFURSArICdZJyxcbiAgICB6OiBUUkFOU0xBVEUgKyAnWidcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yb2xlcy9jc3MvbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBDT0xPUiA9ICdjb2xvcicsXG4gICAgUE9TSVRJT05TID0gJ3Bvc2l0aW9ucycsXG4gICAgRElNRU5TSU9OUyA9ICdkaW1lbnNpb25zJyxcbiAgICBTSEFET1cgPSAnc2hhZG93JyxcbiAgICBBTkdMRSA9ICdhbmdsZScsXG4gICAgQUxQSEEgPSAnYWxwaGEnLFxuICAgIFBYID0gJ3B4JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy8gQ29sb3IgcHJvcGVydGllc1xuICAgIGNvbG9yOiBDT0xPUixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IENPTE9SLFxuICAgIG91dGxpbmVDb2xvcjogQ09MT1IsXG4gICAgZmlsbDogQ09MT1IsXG4gICAgc3Ryb2tlOiBDT0xPUixcbiAgICAvLyBCb3JkZXJcbiAgICBib3JkZXJDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyVG9wQ29sb3I6IENPTE9SLFxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IENPTE9SLFxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBDT0xPUixcbiAgICBib3JkZXJMZWZ0Q29sb3I6IENPTE9SLFxuICAgIGJvcmRlclJhZGl1czogUFgsXG4gICAgLy8gRGltZW5zaW9uc1xuICAgIG1hcmdpbjogRElNRU5TSU9OUyxcbiAgICBwYWRkaW5nOiBESU1FTlNJT05TLFxuICAgIHdpZHRoOiBQWCxcbiAgICBoZWlnaHQ6IFBYLCAgICBcbiAgICAvLyBQb3NpdGlvbnNcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFBPU0lUSU9OUyxcbiAgICBwZXJzcGVjdGl2ZU9yaWdpbjogUE9TSVRJT05TLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogUE9TSVRJT05TLCAgICBcbiAgICAvLyBTaGFkb3dzXG4gICAgdGV4dFNoYWRvdzogU0hBRE9XLFxuICAgIGJveFNoYWRvdzogU0hBRE9XLCAgICBcbiAgICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICAgIHJvdGF0ZTogQU5HTEUsXG4gICAgcm90YXRlWDogQU5HTEUsXG4gICAgcm90YXRlWTogQU5HTEUsXG4gICAgcm90YXRlWjogQU5HTEUsXG4gICAgc2tld1g6IEFOR0xFLFxuICAgIHNrZXdZOiBBTkdMRSxcbiAgICB0cmFuc2xhdGVYOiBQWCxcbiAgICB0cmFuc2xhdGVZOiBQWCxcbiAgICB0cmFuc2xhdGVaOiBQWCxcbiAgICBwZXJzcGVjdGl2ZTogUFgsXG4gICAgb3BhY2l0eTogQUxQSEFcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yb2xlcy9jc3MvdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFNUUk9LRSA9ICdzdHJva2UnLFxuICAgIERBU0ggPSBTVFJPS0UgKyAnLWRhc2gnLCAvLyBzdG9rZS13aWR0aFxuICAgIERBU0hfQVJSQVkgPSBEQVNIICsgJ2FycmF5JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgb3BhY2l0eTogU1RST0tFICsgJy1vcGFjaXR5JyxcbiAgICB3aWR0aDogU1RST0tFICsgJy13aWR0aCcsXG4gICAgb2Zmc2V0OiBEQVNIICsgJ29mZnNldCcsXG4gICAgbGVuZ3RoOiBEQVNIX0FSUkFZLFxuICAgIHNwYWNpbmc6IERBU0hfQVJSQVksXG4gICAgbWl0ZXJsaW1pdDogU1RST0tFICsgJy1taXRlcmxpbWl0J1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvbGVzL3BhdGgvbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgTW9kTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fa2V5cyA9IFtdO1xuICAgICAgICB0aGlzLl9udW1LZXlzID0gMDtcbiAgICB9O1xuXG5Nb2RNYW5hZ2VyLnByb3RvdHlwZSA9IHtcblxuICAgIC8qXG4gICAgICAgIEFkZCBtb2R1bGUga2V5IHRvIGtleXMgbGlzdFxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIGFkZFxuICAgICovXG4gICAgX2FkZEtleTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fa2V5cy5wdXNoKG5hbWUpO1xuICAgICAgICB0aGlzLl9udW1LZXlzKys7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEFkZCBhIG5ldyBtb2R1bGVcblxuICAgICAgICBAcGFyYW0gW3N0cmluZyB8fCBvYmplY3RdOiBOYW1lIG9mIG5ldyBtb2R1bGUgb3IgbXVsdGlwbGUgbW9kdWxlc1xuICAgICAgICBAcGFyYW0gW29iamVjdF0gKG9wdGlvbmFsKTogTW9kdWxlIHRvIGFkZFxuICAgICovXG4gICAgZXh0ZW5kOiBmdW5jdGlvbiAobmFtZSwgbW9kKSB7XG4gICAgICAgIHZhciBtdWx0aU1vZHMgPSAodHlwZW9mIG5hbWUgPT0gJ29iamVjdCcpLFxuICAgICAgICAgICAgbW9kcyA9IG11bHRpTW9kcyA/IG5hbWUgOiB7fSxcbiAgICAgICAgICAgIGtleSA9ICcnO1xuXG4gICAgICAgIC8vIElmIHdlIGp1c3QgaGF2ZSBvbmUgbW9kdWxlLCBjb2VyY2VcbiAgICAgICAgaWYgKCFtdWx0aU1vZHMpIHtcbiAgICAgICAgICAgIG1vZHNbbmFtZV0gPSBtb2Q7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGtleSBpbiBtb2RzKSB7XG4gICAgICAgICAgICBpZiAobW9kcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkS2V5KGtleSk7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gbW9kc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGVhY2g6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIga2V5ID0gJyc7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9udW1LZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGtleSA9IHRoaXMuX2tleXNbaV07XG4gICAgICAgICAgICBjYWxsYmFjayhrZXksIHRoaXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZE1hbmFnZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvTW9kTWFuYWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfTtcblxuUXVldWUucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8qXG4gICAgICAgIEFkZCBhIHNldCBvZiBhcmd1bWVudHMgdG8gcXVldWVcbiAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnF1ZXVlLnB1c2goYXJndW1lbnRzWzBdKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBuZXh0IHNldCBvZiBhcmd1bWVudHMgZnJvbSBxdWV1ZVxuICAgICovXG4gICAgbmV4dDogZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgcXVldWUgPSB0aGlzLnF1ZXVlLFxuICAgICAgICAgICAgcmV0dXJuVmFsID0gZmFsc2UsXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICBcbiAgICAgICAgZGlyZWN0aW9uID0gKGFyZ3VtZW50cy5sZW5ndGgpID8gZGlyZWN0aW9uIDogMTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIG91ciBpbmRleCBpcyBiZXR3ZWVuIDAgYW5kIHRoZSBxdWV1ZSBsZW5ndGgsIHJldHVybiB0aGF0IGl0ZW1cbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVyblZhbCA9IHF1ZXVlW2luZGV4XTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpbmRleCArIGRpcmVjdGlvbjtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIGNsZWFyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXR1cm5WYWw7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFJlcGxhY2UgcXVldWUgd2l0aCBlbXB0eSBhcnJheVxuICAgICovXG4gICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL1F1ZXVlLmpzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgSW5wdXQgPSByZXF1aXJlKCcuL0lucHV0LmpzJyksXG4gICAgY3VycmVudFBvaW50ZXIsIC8vIFNvcnQgdGhpcyBvdXQgZm9yIG11bHRpdG91Y2hcbiAgICBcbiAgICBUT1VDSE1PVkUgPSAndG91Y2htb3ZlJyxcbiAgICBNT1VTRU1PVkUgPSAnbW91c2Vtb3ZlJyxcblxuICAgIC8qXG4gICAgICAgIENvbnZlcnQgZXZlbnQgaW50byBwb2ludFxuICAgICAgICBcbiAgICAgICAgU2NyYXBlIHRoZSB4L3kgY29vcmRpbmF0ZXMgZnJvbSB0aGUgcHJvdmlkZWQgZXZlbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbZXZlbnRdOiBPcmlnaW5hbCBwb2ludGVyIGV2ZW50XG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IFRydWUgaWYgdG91Y2ggZXZlbnRcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogeC95IGNvb3JkaW5hdGVzIG9mIGV2ZW50XG4gICAgKi9cbiAgICBldmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGlzVG91Y2hFdmVudCkge1xuICAgICAgICB2YXIgdG91Y2hDaGFuZ2VkID0gaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0b3VjaENoYW5nZWQgPyB0b3VjaENoYW5nZWQuY2xpZW50WCA6IGV2ZW50LnBhZ2VYLFxuICAgICAgICAgICAgeTogdG91Y2hDaGFuZ2VkID8gdG91Y2hDaGFuZ2VkLmNsaWVudFkgOiBldmVudC5wYWdlWVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGFjdHVhbCBldmVudFxuICAgICAgICBcbiAgICAgICAgQ2hlY2tzIGZvciBqUXVlcnkncyAub3JpZ2luYWxFdmVudCBpZiBwcmVzZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2V2ZW50IHwgalF1ZXJ5IGV2ZW50XVxuICAgICAgICBAcmV0dXJuIFtldmVudF06IFRoZSBhY3R1YWwgSlMgZXZlbnQgIFxuICAgICovXG4gICAgZ2V0QWN0dWFsRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50Lm9yaWdpbmFsRXZlbnQgfHwgZXZlbnQ7XG4gICAgfSxcblxuICAgIFxuICAgIC8qXG4gICAgICAgIFBvaW50ZXIgY29uc3RydWN0b3JcbiAgICAqL1xuICAgIFBvaW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgZXZlbnQgPSBnZXRBY3R1YWxFdmVudChlKSwgLy8gSW4gY2FzZSBvZiBqUXVlcnkgZXZlbnRcbiAgICAgICAgICAgIGlzVG91Y2ggPSAoZXZlbnQudG91Y2hlcykgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICBzdGFydFBvaW50ID0gZXZlbnRUb1BvaW50KGV2ZW50LCBpc1RvdWNoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudXBkYXRlKHN0YXJ0UG9pbnQpO1xuICAgICAgICB0aGlzLmlzVG91Y2ggPSBpc1RvdWNoO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9LFxuICAgIFxuICAgIHByb3RvID0gUG9pbnRlci5wcm90b3R5cGUgPSBuZXcgSW5wdXQoKTtcblxuLypcbiAgICBCaW5kIG1vdmUgZXZlbnRcbiovXG5wcm90by5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubW92ZUV2ZW50ID0gdGhpcy5pc1RvdWNoID8gVE9VQ0hNT1ZFIDogTU9VU0VNT1ZFO1xuICAgIFxuICAgIGN1cnJlbnRQb2ludGVyID0gdGhpcztcbiAgICBcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgdGhpcy5vbk1vdmUpO1xufTtcblxuLypcbiAgICBVbmJpbmQgbW92ZSBldmVudFxuKi9cbnByb3RvLnVuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgdGhpcy5vbk1vdmUpO1xufTtcblxuLypcbiAgICBQb2ludGVyIG9uTW92ZSBldmVudCBoYW5kbGVyXG4gICAgXG4gICAgQHBhcmFtIFtldmVudF06IFBvaW50ZXIgbW92ZSBldmVudFxuKi9cbnByb3RvLm9uTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIG5ld1BvaW50ID0gZXZlbnRUb1BvaW50KGUsIGN1cnJlbnRQb2ludGVyLmlzVG91Y2gpO1xuICAgIGUgPSBnZXRBY3R1YWxFdmVudChlKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY3VycmVudFBvaW50ZXIudXBkYXRlKG5ld1BvaW50KTtcbn07XG5cbnByb3RvLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnRlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L1BvaW50ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB2YWx1ZVR5cGVNYW5hZ2VyID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvbWFuYWdlcicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIGVhY2ggPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKS5lYWNoLFxuICAgIFdhdGNoID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9XYXRjaC5lczYnKSxcbiAgICB3YXRjaGVyID0gbmV3IFdhdGNoKCksXG5cbiAgICBjcmVhdGVNYXBwZXIgPSBmdW5jdGlvbiAocm9sZSwgbWFwcGVkVmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobmFtZSwgdmFsKSB7XG4gICAgICAgICAgICBtYXBwZWRWYWx1ZXNbcm9sZS5tYXAobmFtZSldID0gdmFsO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICB1cGRhdGUgPSBmdW5jdGlvbiAoZnJhbWVzdGFtcCwgZnJhbWVEdXJhdGlvbikge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzLFxuICAgICAgICAgICAgdmFsdWVzID0gdGhpcy52YWx1ZXMsXG4gICAgICAgICAgICBhY3Rpb24gPSB0aGlzLmFjdGlvbixcbiAgICAgICAgICAgIHZhbHVlQWN0aW9uID0gYWN0aW9uLFxuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgbnVtQWN0aXZlVmFsdWVzID0gdGhpcy5vcmRlci5sZW5ndGgsXG4gICAgICAgICAgICBudW1BY3RpdmVQYXJlbnRzID0gdGhpcy5wYXJlbnRPcmRlci5sZW5ndGgsXG4gICAgICAgICAgICBudW1Sb2xlcyA9IHRoaXMucm9sZXMubGVuZ3RoLFxuICAgICAgICAgICAga2V5ID0gJycsXG4gICAgICAgICAgICB2YWx1ZSA9IHt9LFxuICAgICAgICAgICAgbWFwcGVkVmFsdWVzID0ge30sXG4gICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSAwLFxuICAgICAgICAgICAgb3V0cHV0VmFsdWUgPSAwLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICByb2xlO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBJbnB1dCBhbmQgYXR0YWNoIG5ldyB2YWx1ZXMgdG8gc3RhdGVcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgICAgICAgIHN0YXRlLmlucHV0ID0gdGhpcy5pbnB1dC5vbkZyYW1lKGZyYW1lc3RhbXApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIEFjdGlvbiBpbnB1dFxuICAgICAgICBpZiAoYWN0aW9uLm9uRnJhbWVTdGFydCAmJiBhY3Rpb24ub25GcmFtZVN0YXJ0LmNhbGwodGhpcywgZnJhbWVEdXJhdGlvbikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIG9uU3RhcnQgaWYgZmlyc3QgZnJhbWVcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RGcmFtZSkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bVJvbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICByb2xlID0gdGhpcy5yb2xlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAocm9sZS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICByb2xlLnN0YXJ0LmNhbGwoYWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB2YWx1ZXNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bUFjdGl2ZVZhbHVlczsgaSsrKSB7XG4gICAgICAgICAgICAvLyBHZXQgdmFsdWUgYW5kIGtleVxuICAgICAgICAgICAga2V5ID0gdGhpcy5vcmRlcltpXTtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIExvYWQgdmFsdWUtc3BlY2lmaWMgYWN0aW9uXG4gICAgICAgICAgICB2YWx1ZUFjdGlvbiA9IHZhbHVlLndhdGNoID8gd2F0Y2hlciA6IGFjdGlvbjtcblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIG5ldyB2YWx1ZVxuICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gdmFsdWVBY3Rpb24ucHJvY2Vzcy5jYWxsKHRoaXMsIHZhbHVlLCBrZXksIGZyYW1lRHVyYXRpb24pO1xuXG4gICAgICAgICAgICAvLyBMaW1pdCBpZiByYW5nZVxuICAgICAgICAgICAgaWYgKHZhbHVlQWN0aW9uLmxpbWl0KSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gdmFsdWVBY3Rpb24ubGltaXQodXBkYXRlZFZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIHZhbHVlIGlmIHJvdW5kIHNldCB0byB0cnVlXG4gICAgICAgICAgICBpZiAodmFsdWUucm91bmQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBNYXRoLnJvdW5kKHVwZGF0ZWRWYWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjaGFuZ2UgZnJvbSBwcmV2aW91cyBmcmFtZVxuICAgICAgICAgICAgdmFsdWUuZnJhbWVDaGFuZ2UgPSB1cGRhdGVkVmFsdWUgLSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdmVsb2NpdHkgaWYgQWN0aW9uIGhhc24ndCBhbHJlYWR5XG4gICAgICAgICAgICBpZiAoIXZhbHVlQWN0aW9uLmNhbGN1bGF0ZXNWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gY2FsYy5zcGVlZFBlclNlY29uZCh2YWx1ZS5mcmFtZUNoYW5nZSwgZnJhbWVEdXJhdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjdXJyZW50IHNwZWVkXG4gICAgICAgICAgICB2YWx1ZS5zcGVlZCA9IE1hdGguYWJzKHZhbHVlLnZlbG9jaXR5KTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY2hhbmdlZCBhbmQgdXBkYXRlXG4gICAgICAgICAgICBpZiAodmFsdWUuY3VycmVudCAhPSB1cGRhdGVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgY3VycmVudFxuICAgICAgICAgICAgdGhpcy52YWx1ZXNba2V5XS5jdXJyZW50ID0gdXBkYXRlZFZhbHVlO1xuICAgICAgICAgICAgb3V0cHV0VmFsdWUgPSAodmFsdWUudW5pdCkgPyB1cGRhdGVkVmFsdWUgKyB2YWx1ZS51bml0IDogdXBkYXRlZFZhbHVlO1xuXG4gICAgICAgICAgICAvLyBQdXQgdmFsdWUgaW4gc3RhdGUgaWYgbm8gcGFyZW50IHZhbHVlXG4gICAgICAgICAgICBpZiAoIXZhbHVlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnZhbHVlc1trZXldID0gb3V0cHV0VmFsdWU7XG5cbiAgICAgICAgICAgIC8vIE9yIGFkZCB0byBwYXJlbnQgc3RhdGUsIHRvIGJlIGNvbWJpbmVkXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlW3ZhbHVlLnBhcmVudF0gPSBzdGF0ZVt2YWx1ZS5wYXJlbnRdIHx8IHt9O1xuICAgICAgICAgICAgICAgIHN0YXRlW3ZhbHVlLnBhcmVudF1bdmFsdWUucHJvcE5hbWVdID0gb3V0cHV0VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlcyBmcm9tIGNhbGN1bGF0ZWQgY2hpbGRyZW5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bUFjdGl2ZVBhcmVudHM7IGkrKykge1xuICAgICAgICAgICAga2V5ID0gdGhpcy5wYXJlbnRPcmRlcltpXTtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZSBjdXJyZW50IHByb3BlcnR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWVUeXBlTWFuYWdlclt2YWx1ZS50eXBlXS5jb21iaW5lKHN0YXRlW2tleV0pO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgc3RhdGVcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlc1t2YWx1ZS5uYW1lXSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIGBmcmFtZWAgYW5kIGB1cGRhdGVgIGNhbGxiYWNrc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtUm9sZXM7IGkrKykge1xuICAgICAgICAgICAgcm9sZSA9IHRoaXMucm9sZXNbaV07XG4gICAgICAgICAgICBtYXBwZWRWYWx1ZXMgPSB7fTtcblxuICAgICAgICAgICAgZWFjaCh0aGlzLnN0YXRlLnZhbHVlcywgY3JlYXRlTWFwcGVyKHJvbGUsIG1hcHBlZFZhbHVlcykpO1xuXG4gICAgICAgICAgICBpZiAocm9sZS5mcmFtZSkge1xuICAgICAgICAgICAgICAgIHJvbGUuZnJhbWUuY2FsbChhY3RvciwgbWFwcGVkVmFsdWVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJvbGUudXBkYXRlICYmIChhY3Rvci5oYXNDaGFuZ2VkIHx8IGFjdG9yLmZpcnN0RnJhbWUpKSB7XG4gICAgICAgICAgICAgICAgcm9sZS51cGRhdGUuY2FsbChhY3RvciwgbWFwcGVkVmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgb25FbmQgaWYgdGhpcyBBY3Rpb24gaGFzIGVuZGVkXG4gICAgICAgIGlmICh0aGlzLmlzQWN0aXZlICYmIGFjdGlvbi5oYXNFbmRlZCAmJiBhY3Rpb24uaGFzRW5kZWQuY2FsbCh0aGlzLCB0aGlzLmhhc0NoYW5nZWQpKSB7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIEZpcmUgYGNvbXBsZXRlYCBjYWxsYmFja1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bVJvbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICByb2xlID0gdGhpcy5yb2xlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAocm9sZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICByb2xlLmNvbXBsZXRlLmNhbGwoYWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgQWN0b3IgaXMgc3RpbGwgaW5hY3RpdmUsIGZpcmUgbmV4dCBzdGVwXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maXJzdEZyYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnJhbWVzdGFtcCA9IGZyYW1lc3RhbXA7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB1cGRhdGU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rvci91cGRhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIGlzTnVtID0gdXRpbHMuaXNOdW0sXG4gICAgdmFsdWVUeXBlc01hbmFnZXIgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9tYW5hZ2VyJyksXG4gICAgZ2VuZXJpY0RlZmF1bHRWYWx1ZSA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvQWN0aW9uLmVzNicpLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUoKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaCxcblxuICAgIG51bWVyaWNhbFZhbHVlcyA9IFsnY3VycmVudCcsICd0bycsICdpbml0JywgJ21pbicsICdtYXgnLCAndmVsb2NpdHknLCAnZnJpY3Rpb24nLCAnc3ByaW5nJ10sXG4gICAgbnVtTnVtZXJpY2FsVmFsdWVzID0gbnVtZXJpY2FsVmFsdWVzLmxlbmd0aCxcblxuICAgIGNoZWNrUm9sZXMgPSBmdW5jdGlvbiAobmFtZSwgcm9sZXMpIHtcbiAgICAgICAgdmFyIHZhbHVlVHlwZTtcblxuICAgICAgICBlYWNoKHJvbGVzLCBmdW5jdGlvbiAoa2V5LCByb2xlKSB7XG4gICAgICAgICAgICBpZiAocm9sZS5fdHlwZU1hcCkge1xuICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHJvbGUuX3R5cGVNYXBbcm9sZS5tYXAobmFtZSldIHx8IHZhbHVlVHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlVHlwZTtcbiAgICB9LFxuXG4gICAgY2hlY2tOdW1lcmljYWxWYWx1ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAobnVtZXJpY2FsVmFsdWVzLmluZGV4T2YobmFtZSkgPiAtMSk7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLypcbiAgICAgICAgUGVyZm9ybSBvcGVyYXRpb24gb24gc2V0IG9mIHZhbHVlc1xuICAgICAgICBcbiAgICAgICAgQHBhcm1hIFtzdHJpbmddOiBOYW1lIG9mIG9wZXJhdGlvblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIG9iamVjdFxuICAgICovXG4gICAgYWxsOiBmdW5jdGlvbiAob3AsIHZhbHVlcykge1xuICAgICAgICB2YXIgdmFsdWVPcHMgPSB0aGlzO1xuXG4gICAgICAgIGVhY2godmFsdWVzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWVPcHNbb3BdKHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFJlc2V0IHRoZSB2YWx1ZSBjdXJyZW50IHRvIGl0cyBvcmlnaW5cblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIG9iamVjdFxuICAgICovXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnJldGFyZ2V0KHZhbHVlKTtcbiAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLm9yaWdpbjtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgU2V0IHZhbHVlIG9yaWdpbiBwcm9wZXJ0eSB0byBjdXJyZW50IHZhbHVlXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIG9iamVjdFxuICAgICovXG4gICAgcmVzZXRPcmlnaW46IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZS5vcmlnaW4gPSB2YWx1ZS5jdXJyZW50O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTZXQgdmFsdWUgdG8gcHJvcGVydHkgYmFjayB0byB0YXJnZXRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogVmFsdWUgb2JqZWN0XG4gICAgKi9cbiAgICByZXRhcmdldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlLnRvID0gdmFsdWUudGFyZ2V0O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTd2FwIHZhbHVlIHRvIGFuZCBvcmlnaW4gcHJvcGVydHlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogVmFsdWUgb2JqZWN0XG4gICAgKi9cbiAgICBmbGlwOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIG5ld09yaWdpbiA9ICh2YWx1ZS50YXJnZXQgIT09IHVuZGVmaW5lZCkgPyB2YWx1ZS50YXJnZXQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgIHZhbHVlLnRhcmdldCA9IHZhbHVlLnRvID0gdmFsdWUub3JpZ2luO1xuICAgICAgICB2YWx1ZS5vcmlnaW4gPSBuZXdPcmlnaW47XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFJldHVybnMgYW4gaW5pdGlhbCB2YWx1ZSBzdGF0ZVxuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBJbml0aWFsIGN1cnJlbnRcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogRGVmYXVsdCB2YWx1ZSBzdGF0ZVxuICAgICovXG4gICAgaW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoc3RhcnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBjdXJyZW50OiBzdGFydCB8fCAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogQ2hhbmdlIHBlciBzZWNvbmRcbiAgICAgICAgICAgIHNwZWVkOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogQ2hhbmdlIHBlciBzZWNvbmQgcGx1cyBkaXJlY3Rpb24gKGllIGNhbiBiZSBuZWdhdGl2ZSlcbiAgICAgICAgICAgIHZlbG9jaXR5OiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogQW1vdW50IHZhbHVlIGhhcyBjaGFuZ2VkIGluIHRoZSBtb3N0IHJlY2VudCBmcmFtZVxuICAgICAgICAgICAgZnJhbWVDaGFuZ2U6IDBcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgdmFsdWUgaW50byBzdWItdmFsdWVzXG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHZhbHVlXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogQmFzZSB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgIEBwYXJhbSBbRWxlbWVtdF1cbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIGFjdG9yLCB2YWx1ZVR5cGUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWVzID0ge30sXG4gICAgICAgICAgICBzcGxpdFByb3BlcnR5ID0ge30sXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSAnJyxcbiAgICAgICAgICAgIGtleSA9ICcnLFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBudW1OdW1lcmljYWxWYWx1ZXM7IGkrKykge1xuICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gbnVtZXJpY2FsVmFsdWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmModmFsdWVbcHJvcGVydHlOYW1lXSkgJiYgY2hlY2tOdW1lcmljYWxWYWx1ZShwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlW3Byb3BlcnR5TmFtZV0gPSB2YWx1ZVtwcm9wZXJ0eU5hbWVdLmNhbGwoYWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNwbGl0UHJvcGVydHkgPSB2YWx1ZVR5cGUuc3BsaXQodmFsdWVbcHJvcGVydHlOYW1lXSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gcHJvcGVydGllcyB0byBlYWNoIG5ldyB2YWx1ZVxuICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIHNwbGl0UHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0UHJvcGVydHkuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyB2YWx1ZSBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGxpdFZhbHVlc1trZXldID0gc3BsaXRWYWx1ZXNba2V5XSB8fCB1dGlscy5jb3B5KHZhbHVlVHlwZXNNYW5hZ2VyLmRlZmF1bHRQcm9wcyh2YWx1ZS50eXBlLCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVzW2tleV1bcHJvcGVydHlOYW1lXSA9IHNwbGl0UHJvcGVydHlba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BsaXRVbml0KHNwbGl0VmFsdWVzW2tleV1bcHJvcGVydHlOYW1lXSwgc3BsaXRWYWx1ZXNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFNwbGl0IHZhbHVlIGludG8gbnVtYmVyIGFuZCB1bml0LCBzZXQgdW5pdCB0byB2YWx1ZSBpZiBwcmVzZW50XG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQcm9wZXJ0eSB0byBzcGxpdFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIG9iamVjdCB0byBzYXZlIHVuaXQgdG9cbiAgICAqL1xuICAgIHNwbGl0VW5pdDogZnVuY3Rpb24gKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsID0gcHJvcGVydHksXG4gICAgICAgICAgICBzcGxpdFVuaXRWYWx1ZTtcblxuICAgICAgICAvLyBDaGVjayBmb3IgdW5pdCBwcm9wZXJ0eVxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocHJvcGVydHkpKSB7XG4gICAgICAgICAgICBzcGxpdFVuaXRWYWx1ZSA9IHV0aWxzLnNwbGl0VmFsVW5pdChwcm9wZXJ0eSk7XG5cbiAgICAgICAgICAgIGlmICghaXNOYU4oc3BsaXRVbml0VmFsdWUudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsID0gc3BsaXRVbml0VmFsdWUudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRVbml0VmFsdWUudW5pdCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS51bml0ID0gc3BsaXRVbml0VmFsdWUudW5pdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBSZXNvbHZlIHByb3BlcnR5XG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHZhbHVlXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nIHx8IG51bWJlciB8fCBmdW5jdGlvbl06IFByb3BlcnR5XG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogUGFyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbYWN0b3JdOiBQYXJlbnQgYWN0b3JcbiAgICAqL1xuICAgIHJlc29sdmU6IGZ1bmN0aW9uIChuYW1lLCBwcm9wZXJ0eSwgdmFsdWUsIGFjdG9yKSB7XG4gICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSB2YWx1ZS5jdXJyZW50IHx8IDAsXG4gICAgICAgICAgICBpc051bWVyaWNhbFZhbHVlID0gY2hlY2tOdW1lcmljYWxWYWx1ZShuYW1lKTtcblxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgZnVuY3Rpb24sIHJlc29sdmVcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuYyhwcm9wZXJ0eSkgJiYgaXNOdW1lcmljYWxWYWx1ZSkge1xuICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5jYWxsKGFjdG9yLCBjdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHN0cmluZywgY2hlY2sgZm9yIHJlbGF0aXZlIHZhbHVlcyBhbmQgdW5pdHNcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHByb3BlcnR5KSkge1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHJlbGF0aXZlIHZhbHVlIChpZSAnKz0xMCcpXG4gICAgICAgICAgICBpZiAocHJvcGVydHkuaW5kZXhPZignPScpID4gMCkge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gY2FsYy5yZWxhdGl2ZVZhbHVlKGN1cnJlbnRWYWx1ZSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdW5pdCBpZiBzaG91bGQgYmUgbnVtZXJpY2FsIHByb3BlcnR5XG4gICAgICAgICAgICBpZiAoaXNOdW1lcmljYWxWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BsaXRVbml0KHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgbnVtZXJpY2FsIHZhbHVlLCBjb2VyY2VcbiAgICAgICAgaWYgKGlzTnVtZXJpY2FsVmFsdWUpIHtcbiAgICAgICAgICAgIHByb3BlcnR5ID0gcGFyc2VGbG9hdChwcm9wZXJ0eSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFByb2Nlc3MgbmV3IHZhbHVlc1xuICAgICovXG4gICAgcHJlcHJvY2VzczogZnVuY3Rpb24gKHZhbHVlcywgYWN0b3IsIGRlZmF1bHRWYWx1ZVByb3ApIHtcbiAgICAgICAgdmFyIHByZXByb2Nlc3NlZFZhbHVlcyA9IHt9LFxuICAgICAgICAgICAgdmFsdWUgPSB7fSxcbiAgICAgICAgICAgIHNwbGl0VmFsdWUgPSB7fSxcbiAgICAgICAgICAgIGNoaWxkVmFsdWUgPSB7fSxcbiAgICAgICAgICAgIHR5cGUgPSB7fSxcbiAgICAgICAgICAgIGV4aXN0aW5nVmFsdWUgPSB7fSxcbiAgICAgICAgICAgIGlzVmFsdWVPYmogPSBmYWxzZSxcbiAgICAgICAgICAgIGtleSA9ICcnLFxuICAgICAgICAgICAgcHJvcEtleSA9ICcnO1xuXG4gICAgICAgIGRlZmF1bHRWYWx1ZVByb3AgPSBkZWZhdWx0VmFsdWVQcm9wIHx8ICdjdXJyZW50JztcblxuICAgICAgICBmb3IgKGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXG4gICAgICAgICAgICAgICAgaXNWYWx1ZU9iaiA9IHV0aWxzLmlzT2JqKHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IChpc1ZhbHVlT2JqKSA/IHZhbHVlc1trZXldIDoge307XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdWYWx1ZSA9IGFjdG9yLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAgICAgdmFsdWUubmFtZSA9IGtleTtcblxuICAgICAgICAgICAgICAgIGlmICghaXNWYWx1ZU9iaikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVtkZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgZG9lc24ndCBoYXZlIGEgc3BlY2lhbCB0eXBlLCBjaGVjayBmb3Igb25lXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGV4aXN0aW5nIHZhbHVlIHdpdGggdGhpcyBrZXlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVmFsdWUgJiYgZXhpc3RpbmdWYWx1ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS50eXBlID0gZXhpc3RpbmdWYWx1ZS50eXBlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gT3IgY2hlY2sgcm91dGUgdHlwZW1hcHNcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnR5cGUgPSBjaGVja1JvbGVzKGtleSwgYWN0b3Iucm9sZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGNoZWNrIGJ5IHJ1bm5pbmcgdGVzdHMgaWYgdGhpcyBpcyBhIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZS50eXBlICYmIHV0aWxzLmlzU3RyaW5nKHZhbHVlW2RlZmF1bHRWYWx1ZVByb3BdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnR5cGUgPSB2YWx1ZVR5cGVzTWFuYWdlci50ZXN0KHZhbHVlW2RlZmF1bHRWYWx1ZVByb3BdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNldCB2YWx1ZVxuICAgICAgICAgICAgICAgIHByZXByb2Nlc3NlZFZhbHVlc1trZXldID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBwcm9jZXNzIGhhcyB0eXBlLCBzcGxpdCBvciBhc3NpZ24gZGVmYXVsdCBwcm9wc1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSB2YWx1ZVR5cGVzTWFuYWdlclt2YWx1ZS50eXBlXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGhhcyBhIHNwbGl0dGVyIGZ1bmN0aW9uLCBzcGxpdFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZS5zcGxpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuY2hpbGRyZW4gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWUgPSB0aGlzLnNwbGl0KGtleSwgdmFsdWUsIGFjdG9yLCB0eXBlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwcm9wS2V5IGluIHNwbGl0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlID0gdXRpbHMubWVyZ2UodmFsdWUsIHNwbGl0VmFsdWVbcHJvcEtleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlLnBhcmVudCA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZS5uYW1lID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlLnByb3BOYW1lID0gcHJvcEtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNoaWxkVmFsdWUudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNoaWxkVmFsdWUuY2hpbGRyZW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcHJvY2Vzc2VkVmFsdWVzW2tleSArIHByb3BLZXldID0gY2hpbGRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwcm9jZXNzZWRWYWx1ZXNba2V5XSA9IHV0aWxzLm1lcmdlKHZhbHVlVHlwZXNNYW5hZ2VyLmRlZmF1bHRQcm9wcyh2YWx1ZS50eXBlLCBrZXkpLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJlcHJvY2Vzc2VkVmFsdWVzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBQcm9jZXNzIG5ldyB2YWx1ZXNcbiAgICAqL1xuICAgIHByb2Nlc3M6IGZ1bmN0aW9uICh2YWx1ZXMsIGFjdG9yLCBkZWZhdWx0VmFsdWVQcm9wKSB7XG4gICAgICAgIHZhciBwcmVwcm9jZXNzZWRWYWx1ZXMgPSB0aGlzLnByZXByb2Nlc3ModmFsdWVzLCBhY3RvciwgZGVmYXVsdFZhbHVlUHJvcCksXG4gICAgICAgICAgICBrZXkgPSAnJyxcbiAgICAgICAgICAgIHByb3BLZXkgPSAnJyxcbiAgICAgICAgICAgIHByZXByb2Nlc3NlZFZhbHVlID0ge30sXG4gICAgICAgICAgICB0aGlzVmFsdWUgPSB7fSxcbiAgICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IHt9LFxuICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPSBmYWxzZSxcbiAgICAgICAgICAgIHByb3A7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gcHJlcHJvY2Vzc2VkVmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAocHJlcHJvY2Vzc2VkVmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBwcmVwcm9jZXNzZWRWYWx1ZSA9IHByZXByb2Nlc3NlZFZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIHRoaXNWYWx1ZSA9IGFjdG9yLnZhbHVlc1trZXldIHx8IHRoaXMuaW5pdGlhbFN0YXRlKHRoaXMucmVzb2x2ZSgnaW5pdCcsIHByZXByb2Nlc3NlZFZhbHVlLmluaXQsIHt9LCBhY3RvcikpO1xuICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID0gKHByZXByb2Nlc3NlZFZhbHVlLmNoaWxkcmVuICE9PSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIHRoaXNWYWx1ZS5hY3Rpb24gPSBwcmVwcm9jZXNzZWRWYWx1ZS53YXRjaCA/ICd3YXRjaCcgOiBhY3Rvci5hY3Rpb247XG4gICAgICAgICAgICAgICAgZGVmYXVsdFByb3BzID0gYWN0b3IuYWN0aW9uID8gYWN0b3IuYWN0aW9uLmdldERlZmF1bHRWYWx1ZSgpIDogZ2VuZXJpY0RlZmF1bHRWYWx1ZTtcblxuICAgICAgICAgICAgICAgIC8vIEluaGVyaXQgcHJvcGVydGllcyBmcm9tIEFjdG9yXG4gICAgICAgICAgICAgICAgZm9yIChwcm9wS2V5IGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdFByb3BzLmhhc093blByb3BlcnR5KHByb3BLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzVmFsdWVbcHJvcEtleV0gPSAoYWN0b3IuaGFzT3duUHJvcGVydHkocHJvcEtleSkpID8gYWN0b3JbcHJvcEtleV0gOiBkZWZhdWx0UHJvcHNbcHJvcEtleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHByb3BlcnRpZXMgYW5kIHJlc29sdmVcbiAgICAgICAgICAgICAgICBmb3IgKHByb3BLZXkgaW4gcHJlcHJvY2Vzc2VkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXByb2Nlc3NlZFZhbHVlLmhhc093blByb3BlcnR5KHByb3BLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wID0gcHJlcHJvY2Vzc2VkVmFsdWVbcHJvcEtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBwcm9wZXJ0eSBpcyAqbm90KiB1bmRlZmluZWQgb3IgYSBudW1iZXIsIHJlc29sdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wICE9PSB1bmRlZmluZWQgJiYgIWlzTnVtKHByb3ApICYmICFoYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3AgPSB0aGlzLnJlc29sdmUocHJvcEtleSwgcHJvcCwgdGhpc1ZhbHVlLCBhY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNWYWx1ZVtwcm9wS2V5XSA9IHByb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgaW50ZXJuYWwgdGFyZ2V0IGlmIHRoaXMgcHJvcGVydHkgaXMgJ3RvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BLZXkgPT09ICd0bycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzVmFsdWUudGFyZ2V0ID0gdGhpc1ZhbHVlLnRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpc1ZhbHVlLm9yaWdpbiA9IHRoaXNWYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIHRoaXNWYWx1ZS5oYXNSYW5nZSA9IChpc051bSh0aGlzVmFsdWUubWluKSAmJiBpc051bSh0aGlzVmFsdWUubWF4KSkgPyB0cnVlICA6IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgYWN0b3IudmFsdWVzW2tleV0gPSB0aGlzVmFsdWU7XG4gICAgICAgICAgICAgICAgYWN0b3IudXBkYXRlT3JkZXIoa2V5LCB1dGlscy5pc1N0cmluZyh0aGlzVmFsdWUubGluayksIGhhc0NoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rvci92YWx1ZS1vcGVyYXRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBSb2xlID0gcmVxdWlyZSgnLi9Sb2xlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFJvbGUoe1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5pdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5vblN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZnJhbWU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5vbkZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm9uRnJhbWUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLm9uVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm9sZXMvZGVmYXVsdFJvbGUuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG5cdEdlbmVyYXRlIG1ldGhvZCBpdGVyYXRvclxuXHRcblx0VGFrZXMgYSBtZXRob2QgbmFtZSBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbFxuXHRsb29wIG92ZXIgYWxsIHRoZSBFbGVtZW50cyBpbiBhIGdyb3VwIGFuZCBmaXJlIHRoYXRcblx0bWV0aG9kIHdpdGggdGhvc2UgcHJvcGVydGllc1xuXHRcblx0QHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIG1ldGhvZFxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbnVtRWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIGkgPSAwLFxuXHRcdFx0aXNHZXR0ZXIgPSBmYWxzZSxcblx0XHRcdGdldHRlckFycmF5ID0gW10sXG5cdFx0XHRhY3Rvcixcblx0XHRcdGFjdG9yUmV0dXJuO1xuXG5cdFx0Zm9yICg7IGkgPCBudW1FbGVtZW50czsgaSsrKSB7XG5cdFx0XHRhY3RvciA9IHRoaXMuZWxlbWVudHNbaV07XG5cdFx0XHRhY3RvclJldHVybiA9IGFjdG9yW21ldGhvZF0uYXBwbHkoYWN0b3IsIGFyZ3VtZW50cyk7XG5cblx0XHRcdGlmIChhY3RvclJldHVybiAhPSBhY3Rvcikge1xuICAgIFx0XHRcdGlzR2V0dGVyID0gdHJ1ZTtcbiAgICBcdFx0XHRnZXR0ZXJBcnJheS5wdXNoKGFjdG9yUmV0dXJuKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIChpc0dldHRlcikgPyBnZXR0ZXJBcnJheSA6IHRoaXM7XG5cdH07XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rvci9zeXN0ZW0vZ2VuZXJhdGUtaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciAvLyBbbnVtYmVyXTogRGVmYXVsdCBtYXggc2l6ZSBvZiBoaXN0b3J5XG4gICAgbWF4SGlzdG9yeVNpemUgPSAzLFxuICAgIFxuICAgIC8qXG4gICAgICAgIEhpc3RvcnkgY29uc3RydWN0b3JcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbdmFyXTogVmFyaWFibGUgdG8gc3RvcmUgaW4gZmlyc3QgaGlzdG9yeSBzbG90XG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpOiBNYXhpbXVtIHNpemUgb2YgaGlzdG9yeVxuICAgICovXG4gICAgSGlzdG9yeSA9IGZ1bmN0aW9uIChvYmosIG1heCkge1xuICAgICAgICB0aGlzLm1heCA9IG1heCB8fCBtYXhIaXN0b3J5U2l6ZTtcbiAgICAgICAgdGhpcy5lbnRyaWVzID0gW107XG4gICAgICAgIHRoaXMuYWRkKG9iaik7XG4gICAgfTtcbiAgICBcbkhpc3RvcnkucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8qXG4gICAgICAgIFB1c2ggbmV3IHZhciB0byBoaXN0b3J5XG4gICAgICAgIFxuICAgICAgICBTaGlmdCBvdXQgb2xkZXN0IGVudHJ5IGlmIHdlJ3ZlIHJlYWNoZWQgbWF4aW11bSBjYXBhY2l0eVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFt2YXJdOiBWYXJpYWJsZSB0byBwdXNoIGludG8gaGlzdG9yeS5lbnRyaWVzXG4gICAgKi9cbiAgICBhZGQ6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTaXplID0gdGhpcy5nZXRTaXplKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVudHJpZXMucHVzaChvYmopO1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRTaXplID49IHRoaXMubWF4KSB7XG4gICAgICAgICAgICB0aGlzLmVudHJpZXMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHZhcmlhYmxlIGF0IHNwZWNpZmllZCBpbmRleFxuXG4gICAgICAgIEBwYXJhbSBbaW50XTogSW5kZXhcbiAgICAgICAgQHJldHVybiBbdmFyXTogVmFyIGZvdW5kIGF0IHNwZWNpZmllZCBpbmRleFxuICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAoaSkge1xuICAgICAgICBpID0gKHR5cGVvZiBpID09PSAnbnVtYmVyJykgPyBpIDogdGhpcy5nZXRTaXplKCkgLSAxO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXNbaV07XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdGhlIHNlY29uZCBuZXdlc3QgaGlzdG9yeSBlbnRyeVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdmFyXTogRW50cnkgZm91bmQgYXQgaW5kZXggc2l6ZSAtIDJcbiAgICAqL1xuICAgIGdldFByZXZpb3VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmdldFNpemUoKSAtIDIpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGN1cnJlbnQgaGlzdG9yeSBzaXplXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBDdXJyZW50IGxlbmd0aCBvZiBlbnRyaWVzLmxlbmd0aFxuICAgICovXG4gICAgZ2V0U2l6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzLmxlbmd0aDtcbiAgICB9XG4gICAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhpc3Rvcnk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvSGlzdG9yeS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHRoZUxvb3AgPSByZXF1aXJlKCcuL2xvb3AuanMnKSxcbiAgICBQcm9jZXNzTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVJZHMgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVQcm9jZXNzZXMgPSB7fTtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlUXVldWUgPSBbXTtcbiAgICAgICAgdGhlTG9vcC5zZXRDYWxsYmFjayh0aGlzLCB0aGlzLmZpcmVBY3RpdmUpO1xuICAgIH07XG4gICAgXG5Qcm9jZXNzTWFuYWdlci5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLypcbiAgICAgICAgW2ludF06IFVzZWQgZm9yIHByb2Nlc3MgSURcbiAgICAqL1xuICAgIHByb2Nlc3NDb3VudGVyOiAwLFxuICAgIFxuICAgIC8qXG4gICAgICAgIFtpbnRdOiBOdW1iZXIgb2YgYWN0aXZlIHByb2Nlc3Nlc1xuICAgICovXG4gICAgYWN0aXZlQ291bnQ6IDAsXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBwcm9jZXNzIHdpdGggYSBnaXZlbiBpbmRleFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleCBvZiBwcm9jZXNzXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cbiAgICBnZXRQcm9jZXNzOiBmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVQcm9jZXNzZXNbaV07XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgbnVtYmVyIG9mIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2ludF06IE51bWJlciBvZiBhY3RpdmUgcHJvY2Vzc2VzXG4gICAgKi9cbiAgICBnZXRBY3RpdmVDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVDb3VudDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBhY3RpdmUgdG9rZW5zXG5cbiAgICAgICAgQHJldHVybiBbYXJyYXldOiBBY3RpdmUgdG9rZW5zXG4gICAgKi9cbiAgICBnZXRBY3RpdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlSWRzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBsZW5ndGggb2YgdGhlIGRlYWN0aXZhdGUgcXVldWVcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2ludF06IExlbmd0aCBvZiBxdWV1ZVxuICAgICovXG4gICAgZ2V0UXVldWVMZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEZpcmUgYWxsIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogVGltZXN0YW1wIG9mIGV4ZWN1dGluZyBmcmFtZXNcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBUaW1lIHNpbmNlIHByZXZpb3VzIGZyYW1lXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGFjdGl2ZSBwcm9jZXNzZXMgZm91bmRcbiAgICAqL1xuICAgIGZpcmVBY3RpdmU6IGZ1bmN0aW9uIChmcmFtZXN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBwcm9jZXNzLFxuICAgICAgICAgICAgYWN0aXZlQ291bnQgPSAwLFxuICAgICAgICAgICAgYWN0aXZlSWRzID0gW10sXG4gICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAvLyBQdXJnZSBhbmQgY2hlY2sgYWN0aXZlIGNvdW50IGJlZm9yZSBleGVjdXRpb25cbiAgICAgICAgdGhpcy5wdXJnZSgpO1xuICAgICAgICBhY3RpdmVDb3VudCA9IHRoaXMuZ2V0QWN0aXZlQ291bnQoKTtcbiAgICAgICAgYWN0aXZlSWRzID0gdGhpcy5nZXRBY3RpdmUoKTtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWN0aXZlIHByb2Nlc3NlcyBhbmQgZmlyZSBjYWxsYmFja1xuICAgICAgICBmb3IgKDsgaSA8IGFjdGl2ZUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHByb2Nlc3MgPSB0aGlzLmdldFByb2Nlc3MoYWN0aXZlSWRzW2ldKTtcblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmZpcmUoZnJhbWVzdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXB1cmdlIGFuZCByZWNoZWNrIGFjdGl2ZSBjb3VudCBhZnRlciBleGVjdXRpb25cbiAgICAgICAgdGhpcy5wdXJnZSgpO1xuICAgICAgICBhY3RpdmVDb3VudCA9IHRoaXMuZ2V0QWN0aXZlQ291bnQoKTtcblxuICAgICAgICAvLyBSZXR1cm4gdHJ1ZSBpZiB3ZSBzdGlsbCBoYXZlIGFjdGl2ZSBwcm9jZXNzZXMsIG9yIGZhbHNlIGlmIG5vbmVcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUNvdW50ID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgUmVnaXN0ZXIgYSBuZXcgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtQcm9jZXNzXVxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBJbmRleCBvZiBwcm9jZXNzIHRvIGJlIHVzZWQgYXMgSURcbiAgICAqL1xuICAgIHJlZ2lzdGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NDb3VudGVyKys7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBBY3RpdmF0ZSBhIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogSW5kZXggb2YgYWN0aXZlIHByb2Nlc3NcbiAgICAqL1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAocHJvY2VzcywgaSkge1xuICAgICAgICB2YXIgcXVldWVJbmRleCA9IHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLmluZGV4T2YoaSksXG4gICAgICAgICAgICBpc1F1ZXVlZCA9IChxdWV1ZUluZGV4ID4gLTEpLFxuICAgICAgICAgICAgaXNBY3RpdmUgPSAodGhpcy5hY3RpdmVJZHMuaW5kZXhPZihpKSA+IC0xKTtcblxuICAgICAgICAvLyBSZW1vdmUgZnJvbSBkZWFjdGl2YXRlUXVldWUgaWYgaW4gdGhlcmVcbiAgICAgICAgaWYgKGlzUXVldWVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UocXVldWVJbmRleCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdG8gYWN0aXZlIHByb2Nlc3NlcyBhcnJheSBpZiBub3QgYWxyZWFkeSBpbiB0aGVyZVxuICAgICAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUlkcy5wdXNoKGkpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQcm9jZXNzZXNbaV0gPSBwcm9jZXNzO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVDb3VudCsrO1xuICAgICAgICAgICAgdGhlTG9vcC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEZWFjdGl2YXRlIGEgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleCBvZiBwcm9jZXNzIHRvIGFkZCB0byBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlOiBmdW5jdGlvbiAoaSkge1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGVRdWV1ZS5wdXNoKGkpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgUHVyZ2UgdGhlIGRlYWN0aXZhdGUgcXVldWVcbiAgICAqL1xuICAgIHB1cmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBxdWV1ZUxlbmd0aCA9IHRoaXMuZ2V0UXVldWVMZW5ndGgoKSxcbiAgICAgICAgICAgIGFjdGl2ZUlkSW5kZXggPSAwLFxuICAgICAgICAgICAgaWRUb0RlbGV0ZSA9IDA7XG5cbiAgICAgICAgd2hpbGUgKHF1ZXVlTGVuZ3RoLS0pIHtcbiAgICAgICAgICAgIGlkVG9EZWxldGUgPSB0aGlzLmRlYWN0aXZhdGVRdWV1ZVtxdWV1ZUxlbmd0aF07XG4gICAgICAgICAgICBhY3RpdmVJZEluZGV4ID0gdGhpcy5hY3RpdmVJZHMuaW5kZXhPZihpZFRvRGVsZXRlKTtcblxuICAgICAgICAgICAgLy8gSWYgcHJvY2VzcyBpbiBhY3RpdmUgbGlzdCBkZWFjdGl2YXRlXG4gICAgICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ291bnQtLTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVQcm9jZXNzZXNbaWRUb0RlbGV0ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlID0gW107XG4gICAgfVxuICAgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgUHJvY2Vzc01hbmFnZXIoKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvbWFuYWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICAgIEJlemllciBmdW5jdGlvbiBnZW5lcmF0b3JcbiAgICAgICAgXG4gICAgR2HDq3RhbiBSZW5hdWRlYXUncyBCZXppZXJFYXNpbmdcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICAgWW91J3JlIGEgaGVyb1xuICAgIFxuICAgIFVzZVxuICAgIFxuICAgICAgICB2YXIgZWFzZU91dCA9IG5ldyBCZXppZXIoLjE3LC42NywuODMsLjY3KSxcbiAgICAgICAgICAgIHggPSBlYXNlT3V0KDAuNSk7IC8vIHJldHVybnMgMC42MjcuLi5cbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIE5FV1RPTl9JVEVSQVRJT05TID0gOCxcbiAgICBORVdUT05fTUlOX1NMT1BFID0gMC4wMDEsXG4gICAgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxLFxuICAgIFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TID0gMTAsXG4gICAgS19TUExJTkVfVEFCTEVfU0laRSA9IDExLFxuICAgIEtfU0FNUExFX1NURVBfU0laRSA9IDEuMCAvIChLX1NQTElORV9UQUJMRV9TSVpFIC0gMS4wKSxcbiAgICBGTE9BVF8zMl9TVVBQT1JURUQgPSAodHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcpLFxuICAgIFxuICAgIGEgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgICAgIHJldHVybiAxLjAgLSAzLjAgKiBhMiArIDMuMCAqIGExO1xuICAgIH0sXG4gICAgXG4gICAgYiA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGEyIC0gNi4wICogYTE7XG4gICAgfSxcbiAgICBcbiAgICBjID0gZnVuY3Rpb24gKGExKSB7XG4gICAgICAgIHJldHVybiAzLjAgKiBhMTtcbiAgICB9LFxuXG4gICAgZ2V0U2xvcGUgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgICAgIHJldHVybiAzLjAgKiBhKGExLCBhMikgKiB0ICogdCArIDIuMCAqIGIoYTEsIGEyKSAqIHQgKyBjKGExKTtcbiAgICB9LFxuXG4gICAgY2FsY0JlemllciA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuICgoYShhMSwgYTIpICogdCArIGIoYTEsIGEyKSkgKiB0ICsgYyhhMSkpICogdDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEJlemllciBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgQmV6aWVyID0gZnVuY3Rpb24gKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICAgICAgICB2YXIgc2FtcGxlVmFsdWVzID0gRkxPQVRfMzJfU1VQUE9SVEVEID8gbmV3IEZsb2F0MzJBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSA6IG5ldyBBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSxcbiAgICAgICAgICAgIF9wcmVjb21wdXRlZCA9IGZhbHNlLFxuICAgIFxuICAgICAgICAgICAgYmluYXJ5U3ViZGl2aWRlID0gZnVuY3Rpb24gKGFYLCBhQSwgYUIpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFgsIGN1cnJlbnRULCBpID0gMDtcblxuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgICAgIG5ld3RvblJhcGhzb25JdGVyYXRlID0gZnVuY3Rpb24gKGFYLCBhR3Vlc3NUKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xvcGUgPSAwLjAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICAgICAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYWxjU2FtcGxlVmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgS19TUExJTkVfVEFCTEVfU0laRTsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIEtfU0FNUExFX1NURVBfU0laRSwgbVgxLCBtWDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZ2V0VEZvclggPSBmdW5jdGlvbiAoYVgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNhbXBsZSA9IDEsXG4gICAgICAgICAgICAgICAgICAgIGxhc3RTYW1wbGUgPSBLX1NQTElORV9UQUJMRV9TSVpFIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgZGlzdCA9IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgZ3Vlc3NGb3JUID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU2xvcGUgPSAwLjA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC0tY3VycmVudFNhbXBsZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSsxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgICAgICAgICAgICAgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgc2xvcGUgaXMgZ3JlYXRlciB0aGFuIG1pblxuICAgICAgICAgICAgICAgIGlmIChpbml0aWFsU2xvcGUgPj0gTkVXVE9OX01JTl9TTE9QRSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCk7XG4gICAgICAgICAgICAgICAgLy8gU2xvcGUgaXMgZXF1YWwgdG8gbWluXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgICAgICAgICAgIC8vIFNsb3BlIGlzIGxlc3MgdGhhbiBtaW5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsgS19TQU1QTEVfU1RFUF9TSVpFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcmVjb21wdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF9wcmVjb21wdXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKG1YMSAhPSBtWTEgfHwgbVgyICE9IG1ZMikge1xuICAgICAgICAgICAgICAgICAgICBjYWxjU2FtcGxlVmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICBHZW5lcmF0ZWQgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBSZXR1cm5zIHZhbHVlIDAtMSBiYXNlZCBvbiBYXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgZiA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICAgICAgICAgIHZhciByZXR1cm5WYWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmICghX3ByZWNvbXB1dGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZWNvbXB1dGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgbGluZWFyIGdyYWRpZW50LCByZXR1cm4gWCBhcyBUXG4gICAgICAgICAgICAgICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gYVg7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIGF0IHN0YXJ0LCByZXR1cm4gMFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBhdCBlbmQsIHJldHVybiAxXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDE7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGNhbGNCZXppZXIoZ2V0VEZvclgoYVgpLCBtWTEsIG1ZMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0gQmV6aWVyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi9CZXppZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibGV0IEFjdGlvbiA9IHJlcXVpcmUoJy4vQWN0aW9uLmVzNicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi90d2Vlbi9wcmVzZXQtZWFzaW5nJyksXG5cbiAgICAvKlxuICAgICAgICBFYXNlIHZhbHVlIHdpdGhpbiByYW5nZWQgcGFyYW1ldGVyc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAwIHByb2dyZXNzXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgICAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgICAgICAgICAgdG8gdXNlIG9yIGdlbmVyYXRlZCBlYXNpbmcgZnVuY3Rpb25cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBBbXBsaWZ5IHByb2dyZXNzIG91dCBvZiBzcGVjaWZpZWQgcmFuZ2VcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiAgICAqLyAgXG4gICAgZWFzZSA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UsIGVzY2FwZUFtcCkge1xuICAgICAgICB2YXIgcHJvZ3Jlc3NMaW1pdGVkID0gY2FsYy5yZXN0cmljdGVkKHByb2dyZXNzLCAwLCAxKSxcbiAgICAgICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gdXRpbHMuaXNTdHJpbmcoZWFzZSkgPyBwcmVzZXRFYXNpbmdbZWFzZV0gOiBlYXNlO1xuXG4gICAgICAgIHJldHVybiBjYWxjLnZhbHVlRWFzZWQocHJvZ3Jlc3NMaW1pdGVkLCBmcm9tLCB0bywgZWFzaW5nRnVuY3Rpb24pO1xuICAgIH07XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ3R3ZWVuJztcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpbGF0ZTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIHlveW86IGZhbHNlLFxuICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICBwbGF5RGlyZWN0aW9uOiAxXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgZWFzZTogJ2Vhc2VPdXQnLFxuICAgICAgICAgICAgc3RhZ2dlcjogMCxcbiAgICAgICAgICAgIHN0ZXBzOiAwLFxuICAgICAgICAgICAgdG86IDAsXG4gICAgICAgICAgICByb3VuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3RvJztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBVcGRhdGUgQWN0aW9uIGVsYXBzZWQgdGltZVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICBAcGFyYW0gW251bWJlcl06IFRpbWVzdGFtcCBvZiBjdXJyZW50IGZyYW1lXG4gICAgKi9cbiAgICBvbkZyYW1lU3RhcnQoZnJhbWVEdXJhdGlvbikge1xuICAgICAgICBpZiAoZnJhbWVEdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5lbGFwc2VkICs9IChmcmFtZUR1cmF0aW9uICogdGhpcy5kaWxhdGUpICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYXNFbmRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQ2FsY3VsYXRlIHByb2dyZXNzIG9mIHZhbHVlIGJhc2VkIG9uIHRpbWUgZWxhcHNlZCxcbiAgICAgICAgdmFsdWUgZGVsYXkvZHVyYXRpb24vc3RhZ2dlciBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBWYWx1ZSBzdGF0ZSBhbmQgcHJvcGVydGllc1xuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzKHZhbHVlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB2YWx1ZS50byxcbiAgICAgICAgICAgIHByb2dyZXNzVGFyZ2V0ID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAxIDogMCxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWUuY3VycmVudCxcbiAgICAgICAgICAgIHByb2dyZXNzO1xuXG4gICAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGEgdG8gcHJvcGVydHksIG90aGVyd2lzZSB3ZSBqdXN0IHJldHVybiBjdXJyZW50IHZhbHVlXG4gICAgICAgIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvZ3Jlc3MgPSBjYWxjLnJlc3RyaWN0ZWQoY2FsYy5wcm9ncmVzcyh0aGlzLmVsYXBzZWQgLSB2YWx1ZS5kZWxheSwgdmFsdWUuZHVyYXRpb24pIC0gdmFsdWUuc3RhZ2dlciwgMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgQWN0aW9uIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzRW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSB1dGlscy5zdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSB2YWx1ZVxuICAgICAgICAgICAgbmV3VmFsdWUgPSBlYXNlKHByb2dyZXNzLCB2YWx1ZS5vcmlnaW4sIHRhcmdldCwgdmFsdWUuZWFzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUmV0dXJuIGhhc0VuZGVkIHByb3BlcnR5XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSGF2ZSBhbGwgVmFsdWVzIGhpdCAxIHByb2dyZXNzP1xuICAgICovXG4gICAgaGFzRW5kZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0VuZGVkO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUd2VlbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL1R3ZWVuLmVzNlxuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbi5lczYnKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIHNpbXVsYXRpb25zID0gcmVxdWlyZSgnLi9zaW11bGF0ZS9zaW11bGF0aW9ucycpO1xuXG5jb25zdCBERUZBVUxUX1BST1AgPSAndmVsb2NpdHknO1xuXG5jbGFzcyBTaW11bGF0ZSBleHRlbmRzIEFjdGlvbiB7XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdzaW11bGF0ZSc7XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5hY3RpdmVGcmFtZXM6IDAsXG4gICAgICAgICAgICBtYXhJbmFjdGl2ZUZyYW1lczogM1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFtzdHJpbmddOiBTaW11bGF0aW9uIHRvIC5ydW5cbiAgICAgICAgICAgIHNpbXVsYXRlOiBERUZBVUxUX1BST1AsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBEZWNlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICAgICAgICAgIGRlY2VsZXJhdGlvbjogMCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IEFjY2VsZXJhdGlvbiB0byBhcHBseSB0byB2YWx1ZSwgaW4gdW5pdHMgcGVyIHNlY29uZFxuICAgICAgICAgICAgYWNjZWxlcmF0aW9uOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogRmFjdG9yIHRvIG11bHRpcGx5IHZlbG9jaXR5IGJ5IG9uIGJvdW5jZVxuICAgICAgICAgICAgYm91bmNlOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogU3ByaW5nIHN0cmVuZ3RoIGR1cmluZyAnc3RyaW5nJ1xuICAgICAgICAgICAgc3ByaW5nOiA4MCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IFRpbWVjb25zdGFudCBvZiBnbGlkZVxuICAgICAgICAgICAgdGltZUNvbnN0YW50OiAzOTUsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBTdG9wIHNpbXVsYXRpb24gdW5kZXIgdGhpcyBzcGVlZFxuICAgICAgICAgICAgc3RvcFNwZWVkOiA1LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbYm9vbGVhbl06IENhcHR1cmUgd2l0aCBzcHJpbmcgcGh5c2ljcyBvbiBsaW1pdCBicmVhY2hcbiAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lXG4gICAgICAgICAgICBmcmljdGlvbjogMCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG86IDAsXG4gICAgICAgICAgICByb3VuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gREVGQVVMVF9QUk9QO1xuICAgIH1cbiAgICBcbiAgICAvKlxuICAgICAgICBTaW11bGF0ZSB0aGUgVmFsdWUncyBwZXItZnJhbWUgbW92ZW1lbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbVmFsdWVdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IG9mIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBEdXJhdGlvbiBvZiBmcmFtZSBpbiBtc1xuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzKHZhbHVlLCBrZXksIHRpbWVTaW5jZUxhc3RGcmFtZSkge1xuICAgICAgICB2YXIgc2ltdWxhdGUgPSB2YWx1ZS5zaW11bGF0ZSxcbiAgICAgICAgICAgIHNpbXVsYXRpb24gPSB1dGlscy5pc1N0cmluZyhzaW11bGF0ZSkgPyBzaW11bGF0aW9uc1tzaW11bGF0ZV0gOiBzaW11bGF0ZSxcbiAgICAgICAgICAgIG5ld1ZlbG9jaXR5ID0gc2ltdWxhdGlvbih2YWx1ZSwgdGltZVNpbmNlTGFzdEZyYW1lLCB0aGlzLnN0YXJ0ZWQpO1xuXG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gKE1hdGguYWJzKG5ld1ZlbG9jaXR5KSA+PSB2YWx1ZS5zdG9wU3BlZWQpID8gbmV3VmVsb2NpdHkgOiAwO1xuICAgICAgICByZXR1cm4gdmFsdWUuY3VycmVudCArIGNhbGMuc3BlZWRQZXJGcmFtZSh2YWx1ZS52ZWxvY2l0eSwgdGltZVNpbmNlTGFzdEZyYW1lKTtcbiAgICB9XG4gICAgXG4gICAgLypcbiAgICAgICAgSGFzIHRoaXMgYWN0aW9uIGVuZGVkP1xuICAgICAgICBcbiAgICAgICAgVXNlIGEgZnJhbWVjb3VudGVyIHRvIHNlZSBpZiBBY3Rpb24gaGFzIGNoYW5nZWQgaW4gdGhlIGxhc3QgeCBmcmFtZXNcbiAgICAgICAgYW5kIGRlY2xhcmUgZW5kZWQgaWYgbm90XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dOiBIYXMgQWN0aW9uIGNoYW5nZWQ/XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBIYXMgQWN0aW9uIGVuZGVkP1xuICAgICovXG4gICAgaGFzRW5kZWQoaGFzQ2hhbmdlZCkge1xuICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gaGFzQ2hhbmdlZCA/IDAgOiB0aGlzLmluYWN0aXZlRnJhbWVzICsgMTtcbiAgICAgICAgcmV0dXJuICh0aGlzLmluYWN0aXZlRnJhbWVzID4gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTGltaXQgb3V0cHV0IHRvIHZhbHVlIHJhbmdlLCBpZiBhbnlcbiAgICAgICAgXG4gICAgICAgIElmIHZlbG9jaXR5IGlzIGF0IG9yIG1vcmUgdGhhbiByYW5nZSwgYW5kIHZhbHVlIGhhcyBhIGJvdW5jZSBwcm9wZXJ0eSxcbiAgICAgICAgcnVuIHRoZSBib3VuY2Ugc2ltdWxhdGlvblxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDYWxjdWxhdGVkIG91dHB1dFxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCBWYWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBMaW1pdC1hZGp1c3RlZCBvdXRwdXRcbiAgICAqL1xuICAgIGxpbWl0KG91dHB1dCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGlzT3V0c2lkZU1heCA9IChvdXRwdXQgPj0gdmFsdWUubWF4KSxcbiAgICAgICAgICAgIGlzT3V0c2lkZU1pbiA9IChvdXRwdXQgPD0gdmFsdWUubWluKSxcbiAgICAgICAgICAgIGlzT3V0c2lkZVJhbmdlID0gaXNPdXRzaWRlTWF4IHx8IGlzT3V0c2lkZU1pbjtcbiAgICAgICAgXG4gICAgICAgIGlmIChpc091dHNpZGVSYW5nZSkge1xuICAgICAgICAgICAgb3V0cHV0ID0gY2FsYy5yZXN0cmljdGVkKG91dHB1dCwgdmFsdWUubWluLCB2YWx1ZS5tYXgpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUuYm91bmNlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSBzaW11bGF0aW9ucy5ib3VuY2UodmFsdWUpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmNhcHR1cmUpIHtcbiAgICAgICAgICAgICAgICBzaW11bGF0aW9ucy5jYXB0dXJlKHZhbHVlLCBpc091dHNpZGVNYXggPyB2YWx1ZS5tYXggOiB2YWx1ZS5taW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaW11bGF0ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL1NpbXVsYXRlLmVzNlxuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbi5lczYnKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuY2xhc3MgVHJhY2sgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAndHJhY2snO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFVwZGF0ZSBpbnB1dCBvZmZzZXRcbiAgICAqL1xuICAgIG9uRnJhbWVTdGFydCgpIHtcbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9IGNhbGMub2Zmc2V0KHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuY3VycmVudCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTW92ZSBWYWx1ZSByZWxhdGl2ZSB0byBJbnB1dCBtb3ZlbWVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgY3VycmVudCB2YWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpID8gdmFsdWUub3JpZ2luICsgdGhpcy5pbnB1dE9mZnNldFtrZXldIDogdmFsdWUuY3VycmVudDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBIYXMgdGhpcyBBY3Rpb24gZW5kZWQ/IFxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IEZhbHNlIHRvIG1ha2UgdXNlciBtYW51YWxseSBmaW5pc2ggLnRyYWNrKClcbiAgICAqL1xuICAgIGhhc0VuZGVkKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYWNrO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvVHJhY2suZXM2XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1jb21tYS1kZWxpbWl0ZWQuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1icmVhay5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHBvc2l0aW9uVGVybXMgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5JykucG9zaXRpb25zLFxuICAgIG51bVBvc2l0aW9uVGVybXMgPSBwb3NpdGlvblRlcm1zLmxlbmd0aCxcblxuICAgIFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZScsXG4gICAgU0NBTEUgPSAnc2NhbGUnLFxuICAgIFJPVEFURSA9ICdyb3RhdGUnLFxuICAgIHRlcm1zID0ge1xuICAgICAgICBmdW5jczogWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV0sXG4gICAgICAgIHByb3BzOiB7fSAvLyBvYmplY3RzIGFyZSBmYXN0ZXIgYXQgZGlyZWN0IGxvb2t1cHNcbiAgICB9O1xuXG4vLyBDcmVhdGUgdHJhbnNmb3JtIHRlcm1zXG4oZnVuY3Rpb24gKCkge1xuICAgIHZhciBmdW5jcyA9IHRlcm1zLmZ1bmNzLFxuICAgICAgICBwcm9wcyA9IHRlcm1zLnByb3BzLFxuICAgICAgICBudW1GdW5jcyA9IGZ1bmNzLmxlbmd0aCxcbiAgICAgICAgaSA9IDAsXG5cbiAgICAgICAgY3JlYXRlUHJvcHMgPSBmdW5jdGlvbiAoZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHZhciBqID0gMDtcblxuICAgICAgICAgICAgZm9yICg7IGogPCBudW1Qb3NpdGlvblRlcm1zOyBqKyspIHtcbiAgICAgICAgICAgICAgICBwcm9wc1tmdW5jTmFtZSArIHBvc2l0aW9uVGVybXNbal1dID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICBcbiAgICAvLyBNYW51YWxseSBhZGQgc2tldyBhbmQgdHJhbnNmb3JtIHBlcnNwZWN0aXZlICBcbiAgICBwcm9wc1tST1RBVEVdID0gcHJvcHNbU0NBTEVdID0gcHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG4gICAgXG4gICAgLy8gTG9vcCBvdmVyIGVhY2ggZnVuY3Rpb24gbmFtZSBhbmQgY3JlYXRlIGZ1bmN0aW9uL3Byb3BlcnR5IHRlcm1zXG4gICAgZm9yICg7IGkgPCBudW1GdW5jczsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BzKGZ1bmNzW2ldKTtcbiAgICB9XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRlcm1zO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm9sZXMvY3NzL3RyYW5zZm9ybS1kaWN0aW9uYXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXG4gICAgVGhlIGxvb3BcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIFRpbWVyID0gcmVxdWlyZSgnLi90aW1lci5qcycpLFxuICAgIHRpY2sgPSByZXF1aXJlKCcuL3RpY2suanMnKSxcbiAgICBMb29wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gbmV3IFRpbWVyKCk7XG4gICAgfTtcbiAgICBcbkxvb3AucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8qXG4gICAgICAgIFtib29sZWFuXTogQ3VycmVudCBzdGF0dXMgb2YgYW5pbWF0aW9uIGxvb3BcbiAgICAqL1xuICAgIGlzUnVubmluZzogZmFsc2UsXG4gICAgXG4gICAgLypcbiAgICAgICAgRmlyZSBhbGwgYWN0aXZlIHByb2Nlc3NlcyBvbmNlIHBlciBmcmFtZVxuICAgICovXG4gICAgZnJhbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGZyYW1lc3RhbXAgPSBzZWxmLnRpbWVyLnVwZGF0ZSgpLCAvLyBDdXJyZW50bHkganVzdCBtZWFzdXJpbmcgaW4gbXMgLSB3aWxsIGxvb2sgaW50byBoaS1yZXMgdGltZXN0YW1wc1xuICAgICAgICAgICAgICAgIGlzQWN0aXZlID0gc2VsZi5jYWxsYmFjay5jYWxsKHNlbGYuc2NvcGUsIGZyYW1lc3RhbXAsIHNlbGYudGltZXIuZ2V0RWxhcHNlZCgpKTtcblxuICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5mcmFtZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdGFydCBsb29wXG4gICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UncmUgbm90IGFscmVhZHkgcnVubmluZyBhIGxvb3BcbiAgICAgICAgaWYgKCF0aGlzLmlzUnVubmluZykge1xuICAgICAgICAgICAgdGhpcy50aW1lci5jbG9jaygpO1xuICAgICAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5mcmFtZSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdG9wIHRoZSBsb29wXG4gICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTZXQgdGhlIGNhbGxiYWNrIHRvIHJ1biBldmVyeSBmcmFtZVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtPYmplY3RdOiBFeGVjdXRpb24gY29udGV4dFxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgdG8gZmlyZVxuICAgICovXG4gICAgc2V0Q2FsbGJhY2s6IGZ1bmN0aW9uIChzY29wZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTG9vcCgpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy9sb29wLmpzXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qXG4gICAgRWFzaW5nIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgXG4gICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgICAgIFxuICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgICAgICBcbiAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgICAgIFxuICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIEVhc2luZyA9IHJlcXVpcmUoJy4vRWFzaW5nJyksXG4gICAgZWFzaW5nRnVuY3Rpb24sXG4gICAgXG4gICAgLy8gR2VuZXJhdGUgZWFzaW5nIGZ1bmN0aW9uIHdpdGggcHJvdmlkZWQgcG93ZXJcbiAgICBnZW5lcmF0ZVBvd2VyRWFzaW5nID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgcG93ZXIpO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgICAgICBcbiAgICAgICAgT24gaW5pdCwgd2UgdXNlIEVhc2luZ0Z1bmN0aW9uLm1pcnJvciBhbmQgLnJldmVyc2UgdG8gZ2VuZXJhdGUgZWFzZUluT3V0IGFuZFxuICAgICAgICBlYXNlT3V0IGZ1bmN0aW9ucyByZXNwZWN0aXZlbHkuXG4gICAgKi9cbiAgICBiYXNlRWFzaW5nID0ge1xuICAgICAgICBjaXJjOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHByb2dyZXNzKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGJhY2s6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgdmFyIHN0cmVuZ3RoID0gMS41O1xuXG4gICAgICAgICAgICByZXR1cm4gKHByb2dyZXNzICogcHJvZ3Jlc3MpICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4vLyBHZW5lcmF0ZSBwb3dlciBlYXNpbmcgZWFzaW5nXG5bJ2Vhc2UnLCAnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChlYXNpbmdOYW1lLCBpKSB7XG4gICAgYmFzZUVhc2luZ1tlYXNpbmdOYW1lXSA9IGdlbmVyYXRlUG93ZXJFYXNpbmcoaSArIDIpO1xufSk7XG5cbi8vIEdlbmVyYXRlIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5mb3IgKHZhciBrZXkgaW4gYmFzZUVhc2luZykge1xuICAgIGlmIChiYXNlRWFzaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSBuZXcgRWFzaW5nKGJhc2VFYXNpbmdba2V5XSk7XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luJ10gPSBlYXNpbmdGdW5jdGlvbi5pbjtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnT3V0J10gPSBlYXNpbmdGdW5jdGlvbi5vdXQ7XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luT3V0J10gPSBlYXNpbmdGdW5jdGlvbi5pbk91dDtcbiAgICB9XG59XG5cbi8qXG4gICAgTGluZWFyIGVhc2luZyBhZGp1c3RtZW50XG4gICAgXG4gICAgVGhlIGRlZmF1bHQgZWFzaW5nIG1ldGhvZCwgbm90IGFkZGVkIHdpdGggLmV4dGVuZCBhcyBpdCBoYXMgbm8gT3V0IG9yIEluT3V0XG4gICAgdmFyaWF0aW9uLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMC0xXG4gICAgQHJldHVybiBbbnVtYmVyXTogVW5hZGp1c3RlZCBwcm9ncmVzc1xuKi9cbmJhc2VFYXNpbmcubGluZWFyID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgcmV0dXJuIHByb2dyZXNzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRWFzaW5nO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi9wcmVzZXQtZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uLy4uL2luYy9jYWxjJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKSxcbiAgICBzcGVlZFBlckZyYW1lID0gY2FsYy5zcGVlZFBlckZyYW1lO1xuXG4vKlxuICAgIEFkZCBjb3JlIHBoeXNpY3Mgc2ltdWxhdGlvbnNcbiovXG52YXIgc2ltdWxhdGlvbnMgPSB7XG4gICAgLypcbiAgICAgICAgVmVsb2NpdHlcbiAgICAgICAgXG4gICAgICAgIFRoZSBkZWZhdWx0IC5ydW4oKSBzaW11bGF0aW9uLlxuICAgICAgICBcbiAgICAgICAgQXBwbGllcyBhbnkgc2V0IGRlY2VsZXJhdGlvbiBhbmQgYWNjZWxlcmF0aW9uIHRvIGV4aXN0aW5nIHZlbG9jaXR5XG4gICAgKi9cbiAgICB2ZWxvY2l0eTogZnVuY3Rpb24gKHZhbHVlLCBkdXJhdGlvbikge1xuICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IHZhbHVlLnZlbG9jaXR5IC0gc3BlZWRQZXJGcmFtZSh2YWx1ZS5kZWNlbGVyYXRpb24sIGR1cmF0aW9uKSArIHNwZWVkUGVyRnJhbWUodmFsdWUuYWNjZWxlcmF0aW9uLCBkdXJhdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHNpbXVsYXRpb25zLmZyaWN0aW9uKHZhbHVlLCBkdXJhdGlvbik7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEdsaWRlXG4gICAgICAgIFxuICAgICAgICBFbXVsYXRlcyB0b3VjaCBkZXZpY2Ugc2Nyb2xsaW5nIGVmZmVjdHMgd2l0aCBleHBvbmVudGlhbCBkZWNheVxuICAgICAgICBodHRwOi8vYXJpeWEub2ZpbGFicy5jb20vMjAxMy8xMS9qYXZhc2NyaXB0LWtpbmV0aWMtc2Nyb2xsaW5nLXBhcnQtMi5odG1sXG4gICAgKi9cbiAgICBnbGlkZTogZnVuY3Rpb24gKHZhbHVlLCBkdXJhdGlvbiwgc3RhcnRlZCkge1xuICAgICAgICB2YXIgdGltZVVudGlsRmluaXNoZWQgPSAtIHV0aWxzLmN1cnJlbnRUaW1lKCkgLSBzdGFydGVkLFxuICAgICAgICAgICAgZGVsdGEgPSAtIHZhbHVlLnRvICogTWF0aC5leHAodGltZVVudGlsRmluaXNoZWQgLyB2YWx1ZS50aW1lQ29uc3RhbnQpO1xuXG4gICAgICAgIHJldHVybiAodmFsdWUudG8gKyBkZWx0YSkgLSB2YWx1ZS5jdXJyZW50O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBGcmljdGlvblxuXG4gICAgICAgIEFwcGx5IGZyaWN0aW9uIHRvIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgIFRPRE86IE1ha2UgdGhpcyBmcmFtZXJhdGUtaW5kZXBlbmRlbnRcbiAgICAqL1xuICAgIGZyaWN0aW9uOiBmdW5jdGlvbiAodmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBuZXdWZWxvY2l0eSA9IHNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIGR1cmF0aW9uKSAqICgxIC0gdmFsdWUuZnJpY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBjYWxjLnNwZWVkUGVyU2Vjb25kKG5ld1ZlbG9jaXR5LCBkdXJhdGlvbik7XG4gICAgfSxcblxuICAgIHNwcmluZzogZnVuY3Rpb24gKHZhbHVlLCBkdXJhdGlvbikge1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSB2YWx1ZS50byAtIHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gZGlzdGFuY2UgKiBzcGVlZFBlckZyYW1lKHZhbHVlLnNwcmluZywgZHVyYXRpb24pO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHNpbXVsYXRpb25zLmZyaWN0aW9uKHZhbHVlLCBkdXJhdGlvbik7XG4gICAgfSxcblxuICAgIGJvdW5jZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IDAsXG4gICAgICAgICAgICB0byA9IHZhbHVlLnRvLFxuICAgICAgICAgICAgY3VycmVudCA9IHZhbHVlLmN1cnJlbnQsXG4gICAgICAgICAgICBib3VuY2UgPSB2YWx1ZS5ib3VuY2U7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB3ZSdyZSB1c2luZyBnbGlkZSBzaW11bGF0aW9uIHdlIGhhdmUgdG8gZmxpcCBvdXIgdGFyZ2V0IHRvb1xuICAgICAgICBpZiAodmFsdWUuc2ltdWxhdGUgPT09ICdnbGlkZScpIHtcbiAgICAgICAgICAgIGRpc3RhbmNlID0gdG8gLSBjdXJyZW50O1xuICAgICAgICAgICAgdmFsdWUudG8gPSBjdXJyZW50IC0gKGRpc3RhbmNlICogYm91bmNlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHZhbHVlLnZlbG9jaXR5ICo9IC0gYm91bmNlO1xuICAgIH0sXG5cbiAgICBjYXB0dXJlOiBmdW5jdGlvbiAodmFsdWUsIHRhcmdldCkge1xuICAgICAgICB2YWx1ZS50byA9IHRhcmdldDtcbiAgICAgICAgdmFsdWUuc2ltdWxhdGUgPSAnc3ByaW5nJztcbiAgICAgICAgdmFsdWUuY2FwdHVyZSA9IHZhbHVlLm1pbiA9IHZhbHVlLm1heCA9IHVuZGVmaW5lZDtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbXVsYXRpb25zO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3NpbXVsYXRlL3NpbXVsYXRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbi5lczYnKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcblxuICAgIFNUUklORyA9ICdzdHJpbmcnLFxuICAgIFxuICAgIC8qXG4gICAgICAgIFRyYW5zbGF0ZSBvdXIgbWFwTGluayB2YWx1ZSBpbnRvIG1hcFRvXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IENhbGN1bGF0ZWQgdmFsdWUgZnJvbSBsaW5rZWQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtWYWx1ZSB8fCBvYmplY3RdOiBMaW5rZWQgdmFsdWUgb3IgZW1wdHkgb2JqZWN0IGlmIHdlJ3JlIGxpbmtpbmcgdG8gaW5wdXRcbiAgICAgICAgQHBhcmFtIFthcnJheV06IExpc3Qgb2YgbnVtYmVycyByZWxhdGluZyB0byBsaW5rZWQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFthcnJheV06IExpc3Qgb2YgbnVtYmVycyByZWxhdGluZyB0byB0aGlzIHZhbHVlXG4gICAgKi9cbiAgICBmaW5kTWFwcGVkVmFsdWUgPSBmdW5jdGlvbiAobmV3VmFsdWUsIGxpbmtlZFZhbHVlLCB0b1ZhbHVlLCBtYXBMaW5rLCBtYXBUbykge1xuICAgICAgICB2YXIgbWFwTGVuZ3RoID0gbWFwTGluay5sZW5ndGgsXG4gICAgICAgICAgICBpID0gMSxcbiAgICAgICAgICAgIGxhc3RMaW5rVmFsdWUsXG4gICAgICAgICAgICB0aGlzTGlua1ZhbHVlLFxuICAgICAgICAgICAgbGFzdFRvVmFsdWUsXG4gICAgICAgICAgICB0aGlzVG9WYWx1ZTtcblxuICAgICAgICBmb3IgKDsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBBc3NpZ24gdmFsdWVzIGZyb20gYXJyYXksIG9yIGlmIHRoZXkncmUgc3RyaW5ncywgbG9vayBmb3IgdGhlbSBpbiBsaW5rZWRWYWx1ZVxuICAgICAgICAgICAgbGFzdExpbmtWYWx1ZSA9ICh0eXBlb2YgbWFwTGlua1tpIC0gMV0gPT09IFNUUklORykgPyBsaW5rZWRWYWx1ZVttYXBMaW5rW2kgLSAxXV0gOiBtYXBMaW5rW2kgLSAxXTtcbiAgICAgICAgICAgIHRoaXNMaW5rVmFsdWUgPSAodHlwZW9mIG1hcExpbmtbaV0gPT09IFNUUklORykgPyBsaW5rZWRWYWx1ZVttYXBMaW5rW2ldXSA6IG1hcExpbmtbaV07XG4gICAgICAgICAgICBsYXN0VG9WYWx1ZSA9ICh0eXBlb2YgbWFwVG9baSAtIDFdID09PSBTVFJJTkcpID8gdG9WYWx1ZVttYXBUb1tpIC0gMV1dIDogbWFwVG9baSAtIDFdO1xuICAgICAgICAgICAgdGhpc1RvVmFsdWUgPSAodHlwZW9mIG1hcFRvW2ldID09PSBTVFJJTkcpID8gdG9WYWx1ZVttYXBUb1tpXV0gOiBtYXBUb1tpXTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UndmUgZ29uZSBwYXN0IG91ciBjYWxjdWxhdGVkIHZhbHVlLCBvciBpZiB3ZSdyZSBhdCB0aGUgZW5kIG9mIHRoZSBhcnJheVxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlIDwgdGhpc0xpbmtWYWx1ZSB8fCBpID09PSBtYXBMZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBjYWxjLnZhbHVlKGNhbGMucmVzdHJpY3RlZChjYWxjLnByb2dyZXNzKG5ld1ZhbHVlLCBsYXN0TGlua1ZhbHVlLCB0aGlzTGlua1ZhbHVlKSwgMCwgMSksIGxhc3RUb1ZhbHVlLCB0aGlzVG9WYWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICB9O1xuXG5jbGFzcyBXYXRjaCBleHRlbmRzIEFjdGlvbiB7XG4gICAgLypcbiAgICAgICAgUHJvY2VzcyB0aGlzIHZhbHVlXG4gICAgICAgIFxuICAgICAgICBGaXJzdCBjaGVjayBpZiB0aGlzIHZhbHVlIGV4aXN0cyBhcyBhIFZhbHVlLCBpZiBub3RcbiAgICAgICAgY2hlY2sgd2l0aGluIElucHV0IChpZiB3ZSBoYXZlIG9uZSlcbiAgICAgICAgICAgIFxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSBvZiBjdXJyZW50IHZhbHVlXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IENhbGN1bGF0ZWQgdmFsdWVcbiAgICAqL1xuICAgIHByb2Nlc3ModmFsdWUsIGtleSkge1xuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXMsXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlLmN1cnJlbnQsXG4gICAgICAgICAgICB3YXRjaGVkS2V5ID0gdmFsdWUud2F0Y2gsXG4gICAgICAgICAgICB3YXRjaGVkVmFsdWUgPSB2YWx1ZXNbd2F0Y2hlZEtleV0gPyB2YWx1ZXNbd2F0Y2hlZEtleV0gOiB7fSxcbiAgICAgICAgICAgIGlucHV0T2Zmc2V0ID0gdGhpcy5pbnB1dE9mZnNldDtcblxuICAgICAgICAvLyBUaGVuIGNoZWNrIHZhbHVlcyBpbiBJbnB1dFxuICAgICAgICBpZiAoaW5wdXRPZmZzZXQgJiYgaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkod2F0Y2hlZEtleSkpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWUub3JpZ2luICsgKGlucHV0T2Zmc2V0W3dhdGNoZWRLZXldICogdmFsdWUuYW1wKTtcblxuICAgICAgICAvLyBGaXJzdCBsb29rIGF0IEFjdGlvbiBhbmQgY2hlY2sgdmFsdWUgaXNuJ3QgbGlua2luZyBpdHNlbGZcbiAgICAgICAgfSBlbHNlIGlmICh3YXRjaGVkVmFsdWUuY3VycmVudCAhPT0gdW5kZWZpbmVkICYmIGtleSAhPT0gd2F0Y2hlZEtleSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSB3YXRjaGVkVmFsdWUuY3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgbWFwRnJvbSBhbmQgbWFwVG8gcHJvcGVydGllcywgdHJhbnNsYXRlIHRoZSBuZXcgdmFsdWVcbiAgICAgICAgaWYgKHZhbHVlLm1hcEZyb20gJiYgdmFsdWUubWFwVG8pIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gZmluZE1hcHBlZFZhbHVlKG5ld1ZhbHVlLCB3YXRjaGVkVmFsdWUsIHZhbHVlLCB2YWx1ZS5tYXBGcm9tLCB2YWx1ZS5tYXBUbyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhdGNoO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvV2F0Y2guZXM2XG4gKiovIiwibGV0IGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmNvbnN0IERFRkFVTFRfUFJPUCA9ICdjdXJyZW50JztcblxuY2xhc3MgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgZGVmYXVsdFByb3ApIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXM7XG5cbiAgICAgICAgdXRpbHMuZWFjaCh0aGlzLmdldERlZmF1bHRQcm9wcygpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgYWN0aW9uW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMsIHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpKTtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMgPSB7fSwgZGVmYXVsdFByb3AgPSBERUZBVUxUX1BST1ApIHtcbiAgICAgICAgLy8gQWRkIHByb3BlcnRpZXNcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkgIT09ICd2YWx1ZXMnKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1lcmdlIHZhbHVlc1xuICAgICAgICBpZiAocHJvcHMudmFsdWVzKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFZhbHVlcyA9IHRoaXMudmFsdWVzLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHByb3BzLnZhbHVlcztcblxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgICAgIGxldCBleGlzdGluZ1ZhbHVlID0gY3VycmVudFZhbHVlc1trZXldLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlc1trZXldLFxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IGV4aXN0aW5nVmFsdWUgPyB1dGlscy5tZXJnZShleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSkgOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByb2Nlc3ModmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmN1cnJlbnQ7XG4gICAgfVxuICAgICAgICBcbiAgICBsaW1pdChvdXRwdXQsIHZhbHVlKSB7XG4gICAgICAgIHZhciByZXN0cmljdGVkID0gY2FsYy5yZXN0cmljdGVkKG91dHB1dCwgdmFsdWUubWluLCB2YWx1ZS5tYXgpLFxuICAgICAgICAgICAgZXNjYXBlQW1wID0gdmFsdWUuZXNjYXBlQW1wICE9PSB1bmRlZmluZWQgPyB2YWx1ZS5lc2NhcGVBbXAgOiAwO1xuICAgICAgICByZXR1cm4gcmVzdHJpY3RlZCArICgob3V0cHV0IC0gcmVzdHJpY3RlZCkgKiBlc2NhcGVBbXApO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnYWN0aW9uJztcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbXA6IDEsXG4gICAgICAgICAgICBlc2NhcGVBbXA6IDAsXG4gICAgICAgICAgICByb3VuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gREVGQVVMVF9QUk9QO1xuICAgIH1cblxuICAgIGV4dGVuZChwcm9wcykge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IocHJvcHMsIHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQWN0aW9uO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvQWN0aW9uLmVzNlxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMuanMnKSxcblxuICAgIG1heEVsYXBzZWQgPSAzMyxcbiAgICBUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gMTYuNztcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuXG5UaW1lci5wcm90b3R5cGUgPSB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gTWF0aC5taW4odGhpcy5jdXJyZW50IC0gdGhpcy5wcmV2LCBtYXhFbGFwc2VkKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICAgIH0sXG5cbiAgICBnZXRFbGFwc2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsYXBzZWQ7XG4gICAgfSxcbiAgICBcbiAgICBjbG9jazogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGltZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wcm9jZXNzL3RpbWVyLmpzXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuLypcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICBcbiAgICBGb3IgSUU4LzkgRmxpbnN0b25lc1xuXG4gICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgIFxuICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgIFxuICAgIE1JVCBsaWNlbnNlXG4qL1xudmFyIHRpY2ssXG4gICAgbGFzdFRpbWUgPSAwLFxuICAgIGhhc1dpbmRvdyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyk7XG5cbmlmICghaGFzV2luZG93KSB7XG4gICAgLy8gTG9hZCByQUYgc2hpbVxuICAgIHRpY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpLFxuICAgICAgICAgICAgaWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgfSwgdGltZVRvQ2FsbCk7XG5cbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfTsgIFxuICAgIFxufSBlbHNlIHtcbiAgICB0aWNrID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aWNrO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy90aWNrLmpzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwuanMifQ==