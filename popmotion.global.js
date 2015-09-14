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
	
	        Tween: __webpack_require__(48),
	        Simulate: __webpack_require__(49),
	        Track: __webpack_require__(50),
	
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
	var build = __webpack_require__(36);
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
	
	    _map: __webpack_require__(37),
	    _typeMap: __webpack_require__(38),
	
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
	    build = __webpack_require__(34),
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
	    _map: __webpack_require__(35),
	
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
	
	var ModManager = __webpack_require__(44),
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
	    Queue = __webpack_require__(39),
	    utils = __webpack_require__(32),
	    update = __webpack_require__(40),
	    valueOps = __webpack_require__(41),
	    defaultRole = __webpack_require__(42),
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
	        this.clearOrder();
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
	    start: function (action) {
	        if (action) {
	            this.set(action);
	        }
	
	        this.resetProgress();
	        this.activate();
	        
	        if (this.action.getName() !== 'track' && this.input && this.input.stop) {
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
	            this.setProps(this.action.getDefaultProps());
	        }
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
	    generateMethodIterator = __webpack_require__(47),
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
	    History = __webpack_require__(45),
	
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
	
	var manager = __webpack_require__(43),
	
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

	var Bezier = __webpack_require__(46),
	
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

	var splitCommaDelimited = __webpack_require__(51),
	    functionBreak = __webpack_require__(52);
	
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



/***/ },
/* 35 */
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var transformDictionary = __webpack_require__(53),
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var TRANSLATE = 'translate';
	
	module.exports = {
	    x: TRANSLATE + 'X',
	    y: TRANSLATE + 'Y',
	    z: TRANSLATE + 'Z'
	};

/***/ },
/* 38 */
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
/* 39 */
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var valueTypeManager = __webpack_require__(18),
	    calc = __webpack_require__(26),
	    each = __webpack_require__(32).each,
	
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
	            valueAction = action;
	            //valueAction = value.link ? actionManager.link : action;
	
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var calc = __webpack_require__(26),
	    utils = __webpack_require__(32),
	    isNum = utils.isNum,
	    valueTypesManager = __webpack_require__(18),
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
	                defaultProps = actor.action.getDefaultValue();
	
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
/* 42 */
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var theLoop = __webpack_require__(54),
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
/* 44 */
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
/* 45 */
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
/* 46 */
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
/* 47 */
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(55),
	    calc = __webpack_require__(26),
	    utils = __webpack_require__(32),
	    presetEasing = __webpack_require__(58),
	
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
	
	    if (progressLimited !== progress && escapeAmp) {
	        _ease = 'linear';
	        progressLimited = progressLimited + (progress - progressLimited) * escapeAmp;
	    }
	
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
	            dilate: 1,
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(55);
	
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
	            friction: 0
	        };
	    };
	
	    Simulate.prototype.getDefaultValueProp = function getDefaultValueProp() {
	        return DEFAULT_PROP;
	    };
	
	    return Simulate;
	})(Action);
	
	module.exports = Simulate;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(55);
	
	var Track = (function (_Action) {
	    _inherits(Track, _Action);
	
	    function Track() {
	        _classCallCheck(this, Track);
	
	        _Action.apply(this, arguments);
	    }
	
	    Track.prototype.getName = function getName() {
	        return 'track';
	    };
	
	    Track.prototype.getDefaultValue = function getDefaultValue() {
	        return {
	            amp: 1,
	            escapeAmp: 0
	        };
	    };
	
	    return Track;
	})(Action);
	
	module.exports = Track;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (value) {
	    return (typeof value === 'string') ? value.split(/,\s*/) : [value];
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (value) {
	    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
	};

/***/ },
/* 53 */
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    The loop
	*/
	"use strict";
	
	var Timer = __webpack_require__(56),
	    tick = __webpack_require__(57),
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var utils = __webpack_require__(32);
	
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
	
	    Action.prototype.getName = function getName() {
	        return 'action';
	    };
	
	    Action.prototype.getDefaultProps = function getDefaultProps() {
	        return {};
	    };
	
	    Action.prototype.getDefaultValue = function getDefaultValue() {
	        return false;
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
/* 56 */
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
/* 57 */
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
/* 58 */
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

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODg5ZGJmOGZjNjk0YTE5NDViNjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2FkL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9oc2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcG9zaXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9kaW1lbnNpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2F0dHIvYXR0clJvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2Nzcy9jc3NSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9zdmcvc3ZnUm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvcGF0aC9kcmF3UGF0aFJvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL3BhdGgvbW92ZVBhdGhSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci9BY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3IvQWN0b3JDb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9Qcm9jZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9Sb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuL0Vhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3Ivc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL3BhdGgvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2Nzcy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2Nzcy90eXBlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL1F1ZXVlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL3ZhbHVlLW9wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2RlZmF1bHRSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9Nb2RNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvSGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi9CZXppZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL3N5c3RlbS9nZW5lcmF0ZS1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9Ud2Vlbi5lczYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvU2ltdWxhdGUuZXM2Iiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1RyYWNrLmVzNiIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL3NwbGl0LWNvbW1hLWRlbGltaXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWJyZWFrLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvdHJhbnNmb3JtLWRpY3Rpb25hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvbG9vcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BY3Rpb24uZXM2Iiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL3RpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL3RpY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdHdlZW4vcHJlc2V0LWVhc2luZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ1hBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEM7O0FBRUEsNEI7Ozs7OztBQzdCQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBLDRCOzs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNKQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDL0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUM3QkE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDMUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNoQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZCQUE0QjtBQUM1QiwyQkFBMEI7QUFDMUIsdUJBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNyQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9DQUFtQztBQUNuQywrQkFBOEI7QUFDOUIsMEJBQXlCO0FBQ3pCLHdCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWMsT0FBTztBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDNUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFjLGFBQWE7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDckRBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOzs7Ozs7OztBQ3pCQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVCxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7O0FBRUQsMEI7Ozs7OztBQ2xFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBLEVBQUMsRTs7Ozs7O0FDN0JEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQsOEI7Ozs7OztBQzlFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0M7Ozs7OztBQ3hCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUEsbUM7Ozs7OztBQ3hCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCOzs7Ozs7QUN0U0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFhO0FBQ2IsdUJBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxlQUFjLG9CQUFvQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVELGtDOzs7Ozs7QUNySUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHdCOzs7Ozs7QUM3SEE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEI7Ozs7OztBQzdJQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUI7Ozs7OztBQ2pFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7QUNuRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEc7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDLFdBQVc7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFTOzs7QUFHVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDLFdBQVc7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0Esa0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7OztBQUdUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOzs7QUFHVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFO0FBQ0EsVUFBUzs7O0FBR1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Qjs7Ozs7O0FDNVdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVSxjQUFjO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEc7Ozs7OztBQ3JCQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQSxXQUFVLGNBQWM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBLEc7Ozs7OztBQ2RBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCOzs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QztBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDO0FBQ0EsTUFBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBYyxZQUFZO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQSx5QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEc7Ozs7OztBQzdQQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDWEE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEc7Ozs7OztBQ3hDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUM5Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7OztBQy9DQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXNCO0FBQ3RCLDhCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBbUIsY0FBYztBQUNqQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlCOzs7Ozs7QUMzSkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTOztBQUVUO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QjtBQUM1QiwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBOztBQUVBLGVBQWMsd0JBQXdCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUM7QUFDbkMsdUJBQXNCO0FBQ3RCLDRCQUEyQjtBQUMzQiw0QkFBMkI7QUFDM0Isc0JBQXFCO0FBQ3JCLCtCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQWtDO0FBQ2xDLDJCQUEwQjtBQUMxQiw4QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtSEFBa0g7QUFDbEg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ3RWQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNoQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWMsaUJBQWlCO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx1Qzs7Ozs7O0FDbEtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQSx3QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkI7Ozs7OztBQ3ZEQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMEI7Ozs7OztBQ3BFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0Esa0JBQWlCOztBQUVqQjtBQUNBLGNBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXNCLHVCQUF1QjtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYTs7O0FBR2I7QUFDQSxnQ0FBK0IseUJBQXlCO0FBQ3hEO0FBQ0E7QUFDQSxjQUFhOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBc0Isa0VBQWtFO0FBQ3hGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLGtCQUFpQjtBQUNqQjs7QUFFQSxrQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7OztBQ3JLQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFRLGlCQUFpQjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaENBLEtBQUksTUFBTSxHQUFHLG1CQUFPLENBQUMsRUFBYyxDQUFDO0tBQ2hDLElBQUksR0FBRyxtQkFBTyxDQUFDLEVBQWEsQ0FBQztLQUM3QixLQUFLLEdBQUcsbUJBQU8sQ0FBQyxFQUFjLENBQUM7S0FDL0IsWUFBWSxHQUFHLG1CQUFPLENBQUMsRUFBdUIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWEvQyxLQUFJLEdBQUcsY0FBVSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFJLEVBQUUsU0FBUyxFQUFFO0FBQ2xELFNBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakQsY0FBYyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEdBQUcsWUFBWSxDQUFDLEtBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQzs7QUFFdEUsU0FBSSxlQUFlLEtBQUssUUFBUSxJQUFJLFNBQVMsRUFBRTtBQUMzQyxjQUFJLEdBQUcsUUFBUSxDQUFDO0FBQ2hCLHdCQUFlLEdBQUcsZUFBZSxHQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsSUFBSSxTQUFVLENBQUM7TUFDbEY7O0FBRUQsWUFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0VBQ3JFLENBQUM7O0tBRUEsS0FBSztlQUFMLEtBQUs7O2NBQUwsS0FBSzsrQkFBTCxLQUFLOzs7OztBQUFMLFVBQUssV0FDUCxPQUFPLHNCQUFHO0FBQ04sZ0JBQU8sT0FBTyxDQUFDO01BQ2xCOztBQUhDLFVBQUssV0FLUCxlQUFlLDhCQUFHO0FBQ2QsZ0JBQU87QUFDSCxtQkFBTSxFQUFFLENBQUM7QUFDVCxpQkFBSSxFQUFFLEtBQUs7QUFDWCxpQkFBSSxFQUFFLEtBQUs7QUFDWCxpQkFBSSxFQUFFLEtBQUs7QUFDWCwwQkFBYSxFQUFFLENBQUM7VUFDbkIsQ0FBQztNQUNMOztBQWJDLFVBQUssV0FlUCxlQUFlLDhCQUFHO0FBQ2QsZ0JBQU87QUFDSCxrQkFBSyxFQUFFLENBQUM7QUFDUixxQkFBUSxFQUFFLEdBQUc7QUFDYixpQkFBSSxFQUFFLFNBQVM7QUFDZixvQkFBTyxFQUFFLENBQUM7QUFDVixrQkFBSyxFQUFFLENBQUM7QUFDUixlQUFFLEVBQUUsQ0FBQztBQUNMLGtCQUFLLEVBQUUsS0FBSztVQUNmLENBQUM7TUFDTDs7QUF6QkMsVUFBSyxXQTJCUCxtQkFBbUIsa0NBQUc7QUFDbEIsZ0JBQU8sSUFBSSxDQUFDO01BQ2Y7Ozs7Ozs7OztBQTdCQyxVQUFLLFdBcUNQLFlBQVkseUJBQUMsYUFBYSxFQUFFO0FBQ3hCLGFBQUksYUFBYSxFQUFFO0FBQ2YsaUJBQUksQ0FBQyxPQUFPLElBQUssYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQztVQUN0RTs7QUFFRCxhQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztNQUN4Qjs7Ozs7Ozs7O0FBM0NDLFVBQUssV0FvRFAsT0FBTyxvQkFBQyxLQUFLLEVBQUU7QUFDWCxhQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBRTthQUNqQixjQUFjLEdBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxDQUFDLEdBQUksQ0FBQyxHQUFHLENBQUM7YUFDbkQsUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPO2FBQ3hCLFFBQVEsQ0FBQzs7O0FBR2IsYUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO0FBQ3RCLHFCQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztBQUc1RyxpQkFBSSxRQUFRLEtBQUssY0FBYyxFQUFFO0FBQzdCLHFCQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztjQUN6Qjs7O0FBR0QsaUJBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtBQUNiLHlCQUFRLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2NBQ3hEOzs7QUFHRCxxQkFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1VBQy9EOztBQUVELGdCQUFPLFFBQVEsQ0FBQztNQUNuQjs7Ozs7Ozs7QUE3RUMsVUFBSyxXQW9GUCxRQUFRLHVCQUFHO0FBQ1AsZ0JBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztNQUN4Qjs7WUF0RkMsS0FBSztJQUFTLE1BQU07O0FBeUYxQixPQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQzs7Ozs7Ozs7Ozs7O0FDckh0QixLQUFJLE1BQU0sR0FBRyxtQkFBTyxDQUFDLEVBQWMsQ0FBQyxDQUFDOztBQUVyQyxLQUFNLFlBQVksR0FBRyxVQUFVLENBQUM7O0tBRTFCLFFBQVE7ZUFBUixRQUFROztjQUFSLFFBQVE7K0JBQVIsUUFBUTs7Ozs7QUFBUixhQUFRLFdBQ1YsT0FBTyxzQkFBRztBQUNOLGdCQUFPLFVBQVUsQ0FBQztNQUNyQjs7QUFIQyxhQUFRLFdBS1YsZUFBZSw4QkFBRztBQUNkLGdCQUFPO0FBQ0gsMkJBQWMsRUFBRSxDQUFDO0FBQ2pCLDhCQUFpQixFQUFFLENBQUM7VUFDdkIsQ0FBQztNQUNMOztBQVZDLGFBQVEsV0FZVixlQUFlLDhCQUFHO0FBQ2QsZ0JBQU87O0FBRUgscUJBQVEsRUFBRSxZQUFZOzs7QUFHdEIseUJBQVksRUFBRSxDQUFDOzs7QUFHZix5QkFBWSxFQUFFLENBQUM7OztBQUdmLG1CQUFNLEVBQUUsQ0FBQzs7O0FBR1QsbUJBQU0sRUFBRSxFQUFFOzs7QUFHVix5QkFBWSxFQUFFLEdBQUc7OztBQUdqQixzQkFBUyxFQUFFLENBQUM7OztBQUdaLG9CQUFPLEVBQUUsS0FBSzs7O0FBR2QscUJBQVEsRUFBRSxDQUFDO1VBQ2QsQ0FBQztNQUNMOztBQXpDQyxhQUFRLFdBMkNWLG1CQUFtQixrQ0FBRztBQUNsQixnQkFBTyxZQUFZLENBQUM7TUFDdkI7O1lBN0NDLFFBQVE7SUFBUyxNQUFNOztBQWdEN0IsT0FBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLEM7Ozs7Ozs7Ozs7OztBQ3BEekIsS0FBSSxNQUFNLEdBQUcsbUJBQU8sQ0FBQyxFQUFjLENBQUMsQ0FBQzs7S0FFL0IsS0FBSztlQUFMLEtBQUs7O2NBQUwsS0FBSzsrQkFBTCxLQUFLOzs7OztBQUFMLFVBQUssV0FDUCxPQUFPLHNCQUFHO0FBQ04sZ0JBQU8sT0FBTyxDQUFDO01BQ2xCOztBQUhDLFVBQUssV0FLUCxlQUFlLDhCQUFHO0FBQ2QsZ0JBQU87QUFDSCxnQkFBRyxFQUFFLENBQUM7QUFDTixzQkFBUyxFQUFFLENBQUM7VUFDZixDQUFDO01BQ0w7O1lBVkMsS0FBSztJQUFTLE1BQU07O0FBYTFCLE9BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDOzs7Ozs7QUNmdEI7QUFDQTtBQUNBLEc7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNGQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVUsY0FBYztBQUN4QjtBQUNBO0FBQ0EsRUFBQzs7QUFFRCx3Qjs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBUztBQUNULE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsNkI7Ozs7Ozs7Ozs7QUNwRUEsS0FBSSxLQUFLLEdBQUcsbUJBQU8sQ0FBQyxFQUFjLENBQUMsQ0FBQzs7QUFFcEMsS0FBTSxZQUFZLEdBQUcsU0FBUyxDQUFDOztLQUV6QixNQUFNO0FBQ0csY0FEVCxNQUFNLENBQ0ksS0FBSyxFQUFFLFdBQVcsRUFBRTsrQkFEOUIsTUFBTTs7QUFFSixhQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7O0FBRWxCLGNBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRTtBQUNyRCxtQkFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztVQUN2QixDQUFDLENBQUM7O0FBRUgsYUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDakIsYUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztNQUMvQzs7QUFWQyxXQUFNLFdBWVIsR0FBRyxrQkFBeUM7YUFBeEMsS0FBSyx5REFBRyxFQUFFO2FBQUUsV0FBVyx5REFBRyxZQUFZOzs7QUFFdEMsY0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7QUFDbkIsaUJBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssUUFBUSxFQUFFO0FBQy9DLHFCQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2NBQzFCO1VBQ0o7OztBQUdELGFBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNkLGlCQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTTtpQkFDM0IsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7O0FBRTFCLGtCQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTtBQUNwQixxQkFBSSxhQUFhLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQztxQkFDbEMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7cUJBQ25CLFFBQVEsR0FBRyxFQUFFLENBQUM7O0FBRWxCLHFCQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDcEIsNkJBQVEsR0FBRyxLQUFLLENBQUM7a0JBQ3BCLE1BQU07QUFDSCw2QkFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQztrQkFDakM7O0FBRUQsOEJBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxhQUFhLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDO2NBQ3hGO1VBQ0o7O0FBRUQsZ0JBQU8sSUFBSSxDQUFDO01BQ2Y7O0FBekNDLFdBQU0sV0EyQ1IsT0FBTyxvQkFBQyxLQUFLLEVBQUU7QUFDWCxnQkFBTyxLQUFLLENBQUMsT0FBTyxDQUFDO01BQ3hCOztBQTdDQyxXQUFNLFdBK0NSLE9BQU8sc0JBQUc7QUFDTixnQkFBTyxRQUFRLENBQUM7TUFDbkI7O0FBakRDLFdBQU0sV0FtRFIsZUFBZSw4QkFBRztBQUNkLGdCQUFPLEVBQUUsQ0FBQztNQUNiOztBQXJEQyxXQUFNLFdBdURSLGVBQWUsOEJBQUc7QUFDZCxnQkFBTyxLQUFLLENBQUM7TUFDaEI7O0FBekRDLFdBQU0sV0EyRFIsbUJBQW1CLGtDQUFHO0FBQ2xCLGdCQUFPLFlBQVksQ0FBQztNQUN2Qjs7QUE3REMsV0FBTSxXQStEUixNQUFNLG1CQUFDLEtBQUssRUFBRTtBQUNWLGdCQUFPLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztNQUNsRTs7WUFqRUMsTUFBTTs7O0FBb0VaLE9BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDOzs7Ozs7QUN4RXZCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qjs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViOztBQUVBO0FBQ0EsTzs7QUFFQSxFQUFDO0FBQ0Q7QUFDQTs7QUFFQSx1Qjs7Ozs7O0FDckNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QiIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDg4OWRiZjhmYzY5NGExOTQ1YjYwXG4gKiovIiwidmFyIHBvcG1vdGlvbiA9IHJlcXVpcmUoJy4vbW9kdWxlLmpzJyksXG4gICAgVUlyZWYgPSB3aW5kb3cudWk7XG5cbndpbmRvdy51aSA9IHdpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247XG5cbi8qXG4gICAgSWYgbm9Db25mbGljdCBpcyBydW4sIHRoZSBvcmlnaW5hbCByZWZlcmVuY2UgdG8gd2luZG93LlVJIGlzXG4gICAgcmVzdG9yZWQgYW5kIFBvcG1vdGlvbiBpcyBsb2FkZWQgdG8gd2luZG93LlBvcG1vdGlvblxuKi9cbndpbmRvdy51aS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy51aSA9IFVJcmVmO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xvYWQvZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBwb3Btb3Rpb24gPSByZXF1aXJlKCcuLi9wb3Btb3Rpb24nKTtcblxuLypcbiAgICBBZGQgb3B0aW9uYWwgY3VzdG9tIHZhbHVlIHR5cGUgc3VwcG9ydFxuKi9cbnBvcG1vdGlvbi5hZGRWYWx1ZVR5cGUoe1xuICAgIGFscGhhOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9hbHBoYScpLFxuICAgIGFuZ2xlOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9hbmdsZScpLFxuICAgIHB4OiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9weCcpLFxuICAgIGhzbDogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvaHNsJyksXG4gICAgcmdiOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9yZ2InKSxcbiAgICBoZXg6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2hleCcpLFxuICAgIGNvbG9yOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9jb2xvcicpLFxuICAgIHBvc2l0aW9uczogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJyksXG4gICAgZGltZW5zaW9uczogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvZGltZW5zaW9ucycpLFxuICAgIHNoYWRvdzogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvc2hhZG93Jylcbn0pO1xuXG4vKlxuICAgIFByZWRlZmluZWQgcm9sZXNcbiovXG5wb3Btb3Rpb24uYXR0ciA9IHJlcXVpcmUoJy4uL3JvbGVzL2F0dHIvYXR0clJvbGUnKTtcbnBvcG1vdGlvbi5jc3MgPSByZXF1aXJlKCcuLi9yb2xlcy9jc3MvY3NzUm9sZScpO1xucG9wbW90aW9uLnN2ZyA9IHJlcXVpcmUoJy4uL3JvbGVzL3N2Zy9zdmdSb2xlJyk7XG5wb3Btb3Rpb24uZHJhd1BhdGggPSByZXF1aXJlKCcuLi9yb2xlcy9wYXRoL2RyYXdQYXRoUm9sZScpO1xucG9wbW90aW9uLm1vdmVQYXRoID0gcmVxdWlyZSgnLi4vcm9sZXMvcGF0aC9tb3ZlUGF0aFJvbGUnKTsgIFxuXG5tb2R1bGUuZXhwb3J0cyA9IHBvcG1vdGlvbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xvYWQvbW9kdWxlLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB2YWx1ZVR5cGVNYW5hZ2VyID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9tYW5hZ2VyJyksXG5cbiAgICBQb3Btb3Rpb24gPSB7XG5cbiAgICAgICAgQWN0b3I6IHJlcXVpcmUoJy4vYWN0b3IvQWN0b3InKSxcblxuICAgICAgICBBY3RvckNvbGxlY3Rpb246IHJlcXVpcmUoJy4vYWN0b3IvQWN0b3JDb2xsZWN0aW9uJyksXG5cbiAgICAgICAgSW5wdXQ6IHJlcXVpcmUoJy4vaW5wdXQvSW5wdXQnKSxcblxuICAgICAgICBQcm9jZXNzOiByZXF1aXJlKCcuL3Byb2Nlc3MvUHJvY2VzcycpLFxuXG4gICAgICAgIEVhc2luZzogcmVxdWlyZSgnLi9hY3Rpb25zL3R3ZWVuL0Vhc2luZycpLFxuXG4gICAgICAgIFJvbGU6IHJlcXVpcmUoJy4vcm9sZXMvUm9sZScpLFxuXG4gICAgICAgIFR3ZWVuOiByZXF1aXJlKCcuL2FjdGlvbnMvVHdlZW4uZXM2JyksXG4gICAgICAgIFNpbXVsYXRlOiByZXF1aXJlKCcuL2FjdGlvbnMvU2ltdWxhdGUuZXM2JyksXG4gICAgICAgIFRyYWNrOiByZXF1aXJlKCcuL2FjdGlvbnMvVHJhY2suZXM2JyksXG5cbiAgICAgICAgc2VsZWN0OiByZXF1aXJlKCcuL2FjdG9yL3NlbGVjdCcpLFxuXG4gICAgICAgIGFkZFZhbHVlVHlwZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFsdWVUeXBlTWFuYWdlci5leHRlbmQuYXBwbHkodmFsdWVUeXBlTWFuYWdlciwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNhbGM6IHJlcXVpcmUoJy4vaW5jL2NhbGMnKVxuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9wbW90aW9uO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcG9wbW90aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiAxXG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdkZWcnXG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FuZ2xlLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdweCdcbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcHguanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBnZXRDb2xvclZhbHVlcyA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2dldC1jb2xvci12YWx1ZXMnKSxcbiAgICBmdW5jdGlvbkNyZWF0ZSA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWNyZWF0ZScpLFxuICAgIGRlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JykuaHNsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBIdWU6IHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMzYwXG4gICAgICAgIH0sXG4gICAgICAgIFNhdHVyYXRpb246IGRlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgICAgICBMaWdodG5lc3M6IGRlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgICAgICBBbHBoYTogZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZignaHNsJykgPiAtMSk7XG4gICAgfSxcbiAgICBcbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBnZXRDb2xvclZhbHVlcyh2YWx1ZSwgdGVybXMpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbkNyZWF0ZShjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCB0ZXJtcywgJywgJywgMiksICdoc2xhJyk7XG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hzbC5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIGdldENvbG9yVmFsdWVzID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZ2V0LWNvbG9yLXZhbHVlcycpLFxuICAgIGZ1bmN0aW9uQ3JlYXRlID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlJyksXG4gICAgZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyksXG4gICAgY29sb3JEZWZhdWx0cyA9IGRlZmF1bHRQcm9wcy5jb2xvcixcbiAgICB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLmNvbG9ycztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgUmVkOiBjb2xvckRlZmF1bHRzLFxuICAgICAgICBHcmVlbjogY29sb3JEZWZhdWx0cyxcbiAgICAgICAgQmx1ZTogY29sb3JEZWZhdWx0cyxcbiAgICAgICAgQWxwaGE6IGRlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ3JnYicpID4gLTEpO1xuICAgIH0sXG4gICAgXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZ2V0Q29sb3JWYWx1ZXModmFsdWUsIHRlcm1zKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb25DcmVhdGUoY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgdGVybXMsICcsICcsIDIpLCAncmdiYScpO1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9yZ2IuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHJnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiByZ2IuZGVmYXVsdFByb3BzLFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZignIycpID4gLTEpO1xuICAgIH0sXG4gICAgXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgciwgZywgYjtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAyKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMywgMik7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDUsIDIpO1xuXG4gICAgICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDEpO1xuICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigyLCAxKTtcbiAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoMywgMSk7XG4gICAgICAgICAgICByICs9IHI7XG4gICAgICAgICAgICBnICs9IGc7XG4gICAgICAgICAgICBiICs9IGI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgUmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgICAgICAgICBHcmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgICAgICAgICAgQmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgICAgICAgICAgQWxwaGE6IDFcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gcmdiLmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIHJnYiA9IHJlcXVpcmUoJy4vcmdiJyksXG4gICAgaHNsID0gcmVxdWlyZSgnLi9oc2wnKSxcbiAgICBoZXggPSByZXF1aXJlKCcuL2hleCcpLFxuICAgIHN1cHBvcnRlZCA9IFtyZ2IsIGhzbCwgaGV4XSxcbiAgICBudW1TdXBwb3J0ZWQgPSAzLFxuXG4gICAgcnVuU3VwcG9ydGVkID0gZnVuY3Rpb24gKG1ldGhvZCwgdmFsdWUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1TdXBwb3J0ZWQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKHN1cHBvcnRlZFtpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWRbaV1bbWV0aG9kXSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogdXRpbHMubWVyZ2UocmdiLmRlZmF1bHRQcm9wcywgaHNsLmRlZmF1bHRQcm9wcyksXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHJnYi50ZXN0KHZhbHVlKSB8fCBoZXgudGVzdCh2YWx1ZSkgfHwgaHNsLnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBydW5TdXBwb3J0ZWQoJ3NwbGl0JywgdmFsdWUpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAodmFsdWVzLlJlZCAhPT0gdW5kZWZpbmVkKSA/IHJnYi5jb21iaW5lKHZhbHVlcykgOiBoc2wuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIHB4RGVmYXVsdHMgPSByZXF1aXJlKCcuL3B4JykuZGVmYXVsdFByb3BzLFxuICAgIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQnKSxcbiAgICB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLnBvc2l0aW9ucztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHB4RGVmYXVsdHMsXG4gICAgICAgIFxuICAgIC8qXG4gICAgICAgIFNwbGl0IHBvc2l0aW9ucyBpbiBmb3JtYXQgXCJYIFkgWlwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFBvc2l0aW9uIHZhbHVlc1xuICAgICAgICAgICAgXCIyMCUgMzAlIDBcIiAtPiB7MjAlLCAzMCUsIDB9XG4gICAgICAgICAgICBcIjIwJSAzMCVcIiAtPiB7MjAlLCAzMCV9XG4gICAgICAgICAgICBcIjIwJVwiIC0+IHsyMCUsIDIwJX1cbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHBvc2l0aW9ucyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpLFxuICAgICAgICAgICAgbnVtUG9zaXRpb25zID0gcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICAgIHNwbGl0VmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgWDogcG9zaXRpb25zWzBdLFxuICAgICAgICAgICAgICAgIFk6IChudW1Qb3NpdGlvbnMgPiAxKSA/IHBvc2l0aW9uc1sxXSA6IHBvc2l0aW9uc1swXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICBpZiAobnVtUG9zaXRpb25zID4gMikge1xuICAgICAgICAgICAgc3BsaXRWYWx1ZS5aID0gcG9zaXRpb25zWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnICcpO1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLmRpbWVuc2lvbnMsXG4gICAgcHhEZWZhdWx0cyA9IHJlcXVpcmUoJy4vcHgnKS5kZWZhdWx0UHJvcHMsXG4gICAgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHB4RGVmYXVsdHMsXG4gICAgXG4gICAgLypcbiAgICAgICAgU3BsaXQgZGltZW5zaW9ucyBpbiBmb3JtYXQgXCJUb3AgUmlnaHQgQm90dG9tIExlZnRcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBEaW1lbnNpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4IDQwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgNDBweH1cbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweCAwXCIgLT4gezIwcHgsIDAsIDIwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHhcIiAtPiB7MjBweCwgMjBweCwgMjBweCwgMjBweH1cbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIFQvUi9CL0wgbWV0cmljc1xuICAgICovXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZGltZW5zaW9ucyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpLFxuICAgICAgICAgICAgbnVtRGltZW5zaW9ucyA9IGRpbWVuc2lvbnMubGVuZ3RoLFxuICAgICAgICAgICAganVtcEJhY2sgPSAobnVtRGltZW5zaW9ucyAhPT0gMSkgPyAyIDogMSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgaiA9IDAsXG4gICAgICAgICAgICBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgZm9yICg7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbdGVybXNbaV1dID0gZGltZW5zaW9uc1tqXTtcblxuICAgICAgICAgICAgLy8gSnVtcCBiYWNrICh0byBzdGFydCkgY291bnRlciBpZiB3ZSd2ZSByZWFjaGVkIHRoZSBlbmQgb2Ygb3VyIHZhbHVlc1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgaiA9IChqID09PSBudW1EaW1lbnNpb25zKSA/IGogLSBqdW1wQmFjayA6IGo7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgdGVybXMsICcgJyk7XG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2RpbWVuc2lvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjb2xvciA9IHJlcXVpcmUoJy4vY29sb3InKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIHB4RGVmYXVsdHMgPSByZXF1aXJlKCcuL3B4JykuZGVmYXVsdFByb3BzLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jykuc2hhZG93LFxuICAgIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQnKSxcbiAgICBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgc2hhZG93VGVybXMgPSB0ZXJtcy5zbGljZSgwLDQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogdXRpbHMubWVyZ2UoY29sb3IuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIFg6IHB4RGVmYXVsdHMsXG4gICAgICAgIFk6IHB4RGVmYXVsdHMsXG4gICAgICAgIFJhZGl1czogcHhEZWZhdWx0cyxcbiAgICAgICAgU3ByZWFkOiBweERlZmF1bHRzXG4gICAgfSksXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBzaGFkb3cgcHJvcGVydGllcyBcIlggWSBSYWRpdXMgU3ByZWFkIENvbG9yXCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogU2hhZG93IHByb3BlcnR5XG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGJpdHMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKSxcbiAgICAgICAgICAgIG51bUJpdHMgPSBiaXRzLmxlbmd0aCxcbiAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IGZhbHNlLFxuICAgICAgICAgICAgY29sb3JQcm9wID0gJycsXG4gICAgICAgICAgICB0aGlzQml0LFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgZm9yICg7IGkgPCBudW1CaXRzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXNCaXQgPSBiaXRzW2ldO1xuXG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBjb2xvciBwcm9wZXJ0eSwgYXBwZW5kIHRvIGNvbG9yIHN0cmluZ1xuICAgICAgICAgICAgaWYgKGhhc1JlYWNoZWRDb2xvciB8fCBjb2xvci50ZXN0KHRoaXNCaXQpKSB7XG4gICAgICAgICAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb2xvclByb3AgKz0gdGhpc0JpdDtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlW3Rlcm1zW2ldXSA9IHRoaXNCaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB1dGlscy5tZXJnZShzcGxpdFZhbHVlLCBjb2xvci5zcGxpdChjb2xvclByb3ApKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgc2hhZG93VGVybXMsICcgJykgKyBjb2xvci5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NoYWRvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJvbGUgPSByZXF1aXJlKCcuLi9Sb2xlJyk7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2g7XG5cbnZhciBBdHRyUm9sZSA9IG5ldyBSb2xlKHtcbiAgICBuYW1lOiAnYXR0cicsXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzO1xuXG4gICAgICAgIGVhY2goc3RhdGUsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBBdHRyUm9sZS5zZXQuY2FsbChhY3Rvciwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICB9LFxuXG4gICAgc2V0OiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF0dHJSb2xlO1xuXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvbGVzL2F0dHIvYXR0clJvbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSb2xlID0gcmVxdWlyZSgnLi4vUm9sZScpO1xudmFyIGJ1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoO1xuXG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsJ01veicsJ08nLCdtcycsICcnXTtcbnZhciBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbnZhciBwcm9wZXJ0eU5hbWVDYWNoZSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBcbi8qXG4gICAgVGVzdCBzdHlsZSBwcm9wZXJ0eSBmb3IgcHJlZml4ZWQgdmVyc2lvblxuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogU3R5bGUgcHJvcGVydHlcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBDYWNoZWQgcHJvcGVydHkgbmFtZVxuKi9cbnZhciB0ZXN0UHJlZml4ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdGVzdEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICBcbiAgICAgICAgcHJvcGVydHlOYW1lQ2FjaGVba2V5XSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldLFxuICAgICAgICAgICAgICAgIHByZWZpeGVkID0gKHByZWZpeCA9PT0gJycpID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgICAgICAgICBpZiAodGVzdEVsZW1lbnQuc3R5bGUuaGFzT3duUHJvcGVydHkocHJlZml4ZWQpKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lQ2FjaGVba2V5XSA9IHByZWZpeGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcHJvcGVydHlOYW1lQ2FjaGVba2V5XTtcbiAgICB9O1xuXG52YXIgQ1NTUm9sZSA9IG5ldyBSb2xlKHtcblxuICAgIG5hbWU6ICdjc3MnLFxuXG4gICAgX21hcDogcmVxdWlyZSgnLi9tYXAnKSxcbiAgICBfdHlwZU1hcDogcmVxdWlyZSgnLi90eXBlLW1hcCcpLFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGFjdG9yID0gdGhpcztcblxuICAgICAgICBlYWNoKGJ1aWxkKHN0YXRlKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIENTU1JvbGUuc2V0LmNhbGwoYWN0b3IsIGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZ2V0OiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGtleSA9IHByb3BlcnR5TmFtZUNhY2hlW2tleV0gfHwgdGVzdFByZWZpeChrZXkpO1xuXG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQsIG51bGwpW2tleV07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2V0OiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBrZXkgPSBwcm9wZXJ0eU5hbWVDYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTtcblxuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDU1NSb2xlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm9sZXMvY3NzL2Nzc1JvbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSb2xlID0gcmVxdWlyZSgnLi4vUm9sZScpLFxuICAgIGF0dHJSb2xlID0gcmVxdWlyZSgnLi4vYXR0ci9hdHRyUm9sZScpLFxuICAgIGJ1aWxkID0gcmVxdWlyZSgnLi4vc3ZnL2J1aWxkJyksXG4gICAgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2gsXG5cbiAgICBDT0xPUiA9ICdjb2xvcic7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFJvbGUoe1xuICAgIG5hbWU6ICdzdmcnLFxuXG4gICAgX3R5cGVNYXA6IHtcbiAgICAgICAgZmlsbDogQ09MT1IsXG4gICAgICAgIHN0cm9rZTogQ09MT1JcbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQuZ2V0QkJveCgpKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGFjdG9yID0gdGhpcztcblxuICAgICAgICBlYWNoKGJ1aWxkKHN0YXRlKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGF0dHJSb2xlLnNldC5jYWxsKGFjdG9yLCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvbGVzL3N2Zy9zdmdSb2xlLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUm9sZSA9IHJlcXVpcmUoJy4uL1JvbGUnKTtcbnZhciBjc3NSb2xlID0gcmVxdWlyZSgnLi4vY3NzL2Nzc1JvbGUnKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuZWFjaDtcblxuLypcbiAgICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQZXJjZW50YWdlIG9mIHRvdGFsIGxlbmd0aFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xudmFyIHBlcmNlbnRUb1BpeGVscyA9IGZ1bmN0aW9uIChwZXJjZW50YWdlLCBsZW5ndGgpIHtcbiAgICByZXR1cm4gKHBhcnNlRmxvYXQocGVyY2VudGFnZSkgLyAxMDApICogbGVuZ3RoICsgJ3B4Jztcbn07XG5cbi8qXG4gICAgQ3JlYXRlIHN0eWxlc1xuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogU1ZHIFBhdGggcHJvcGVydGllc1xuICAgIEBwYXJhbSBbb2JqZWN0XTogTGVuZ3RoIG9mIHBhdGhcbiAgICBAcmV0dXJucyBbb2JqZWN0XTogS2V5L3ZhbHVlIHBhaXJzIG9mIHZhbGlkIENTUyBwcm9wZXJ0aWVzXG4qL1xudmFyIGNyZWF0ZVN0eWxlcyA9IGZ1bmN0aW9uIChwcm9wcywgbGVuZ3RoKSB7XG4gICAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlLFxuICAgICAgICBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgICAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlcyA9IHt9O1xuXG4gICAgZWFjaChwcm9wcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAga2V5ID0gU1ZHRHJhd1BhdGguX21hcFtrZXldIHx8IGtleTtcblxuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgICAgIGNhc2UgJ3NwYWNpbmcnOlxuICAgICAgICAgICAgICAgIGhhc0Rhc2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgICAgICAgIHN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGhhc0Rhc2hBcnJheSkge1xuICAgICAgICBzdHlsZXNbU1ZHRHJhd1BhdGguX21hcC5sZW5ndGhdID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG59O1xuXG4vKlxuICAgIERyYXcgUGF0aCByb2xlXG4qL1xudmFyIFNWR0RyYXdQYXRoID0gbmV3IFJvbGUoe1xuICAgIF9tYXA6IHJlcXVpcmUoJy4vbWFwJyksXG5cbiAgICBfdHlwZU1hcDoge1xuICAgICAgICBzdHJva2U6ICdjb2xvcidcbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBhdGhMZW5ndGggPSB0aGlzLmVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIGBwYXRoYCBzdHlsZXMgYW5kIGlmIGBlbGVtZW50YCBpcyBwcmVzZW50LCBzZXRcbiAgICAgICAgeCwgeSBhbmQgcm90YXRpb25cbiAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIGNzc1JvbGUudXBkYXRlLmNhbGwodGhpcywgY3JlYXRlU3R5bGVzKHN0YXRlLCB0aGlzLnBhdGhMZW5ndGgpKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTVkdEcmF3UGF0aDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZ2V0QW5nbGUgPSByZXF1aXJlKCcuLi8uLi9pbmMvY2FsYycpLmFuZ2xlO1xuXG52YXIgY2FsY1JvdGF0aW9uID0gZnVuY3Rpb24gKHBhdGgsIHBvaW50LCBkaXN0YW5jZSkge1xuICAgIHZhciB0ZXN0UG9pbnQgPSB0aGlzLnBhdGguZ2V0UG9pbnRBdExlbmd0aChkaXN0YW5jZSArIDAuMik7XG5cbiAgICByZXR1cm4gZ2V0QW5nbGUocG9pbnQsIHRlc3RQb2ludCk7XG59O1xuXG52YXIgU1ZHTW92ZVBhdGhSb2xlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wYXRoTGVuZ3RoID0gdGhpcy5wYXRoLmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IHN0YXRlLnByb2dyZXNzICogdGhpcy5wYXRoTGVuZ3RoLFxuICAgICAgICAgICAgbmV3UG9pbnQgPSB0aGlzLnBhdGguZ2V0UG9pbnRBdExlbmd0aChkaXN0YW5jZSksXG4gICAgICAgICAgICByb3RhdGlvbiA9IHRoaXMuYXV0b1JvdGF0ZSA/IGNhbGNSb3RhdGlvbih0aGlzLnBhdGgsIG5ld1BvaW50LCBkaXN0YW5jZSkgOiBzdGF0ZS5yb3RhdGlvbiB8fCAwO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIG5ld1BvaW50LnggKyAnLCAnICsgbmV3UG9pbnQueSArICcpIHJvdGF0ZSgnICsgcm90YXRpb24gKyAnKScpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU1ZHTW92ZVBhdGhSb2xlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm9sZXMvcGF0aC9tb3ZlUGF0aFJvbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBNb2RNYW5hZ2VyID0gcmVxdWlyZSgnLi4vaW5jL01vZE1hbmFnZXInKSxcbiAgICB2YWx1ZVR5cGVNYW5hZ2VyID0gbmV3IE1vZE1hbmFnZXIoKTtcblxudmFsdWVUeXBlTWFuYWdlci5kZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiAodHlwZSwga2V5KSB7XG4gICAgdmFyIHZhbHVlVHlwZSA9IHRoaXNbdHlwZV0sXG4gICAgICAgIGRlZmF1bHRQcm9wcyA9ICh2YWx1ZVR5cGUuZGVmYXVsdFByb3BzKSA/IHZhbHVlVHlwZS5kZWZhdWx0UHJvcHNba2V5XSB8fCB2YWx1ZVR5cGUuZGVmYXVsdFByb3BzIDoge307XG5cbiAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xufTtcblxudmFsdWVUeXBlTWFuYWdlci50ZXN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBmYWxzZTtcblxuICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoa2V5LCBtb2QpIHtcbiAgICAgICAgaWYgKG1vZC50ZXN0ICYmIG1vZC50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdHlwZSA9IGtleTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHR5cGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbHVlVHlwZU1hbmFnZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUHJvY2VzcyA9IHJlcXVpcmUoJy4uL3Byb2Nlc3MvUHJvY2VzcycpLFxuICAgIFF1ZXVlID0gcmVxdWlyZSgnLi4vaW5jL1F1ZXVlJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICB1cGRhdGUgPSByZXF1aXJlKCcuL3VwZGF0ZScpLFxuICAgIHZhbHVlT3BzID0gcmVxdWlyZSgnLi92YWx1ZS1vcGVyYXRpb25zJyksXG4gICAgZGVmYXVsdFJvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9kZWZhdWx0Um9sZScpLFxuICAgIGNzc1JvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9jc3MvY3NzUm9sZScpLFxuICAgIHN2Z1JvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9zdmcvc3ZnUm9sZScpLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoLFxuXG4gICAgQWN0b3IgPSBmdW5jdGlvbiAob3B0cykge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzLFxuICAgICAgICAgICAgcm9sZXMgPSBbIGRlZmF1bHRSb2xlIF07XG5cbiAgICAgICAgLy8gU2V0IHZhbHVlcyBvYmplY3QgYW5kIHN0YXRlIG9iamVjdFxuICAgICAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdmFsdWVzOiB7fVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEluaXQgcXVldWUgYW5kIHByb2Nlc3NcbiAgICAgICAgdGhpcy5xdWV1ZSA9IG5ldyBRdWV1ZSgpO1xuICAgICAgICB0aGlzLnByb2Nlc3MgPSBuZXcgUHJvY2Vzcyh0aGlzLCB1cGRhdGUpO1xuXG4gICAgICAgIC8vIERldGVjdC9hZGQgcm9sZXNcbiAgICAgICAgaWYgKG9wdHMpIHtcbiAgICAgICAgICAgIC8vIEF1dG8tZGV0ZWN0IGVsZW1lbnQgdHlwZSwgaWYgcHJlc2VudCBhbmQgbm8gcm9sZXMgZGVmaW5lZFxuICAgICAgICAgICAgaWYgKCFvcHRzLmFzICYmIG9wdHMuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIEFkZCBDU1Mgcm9sZSBpZiBIVE1MRWxlbWVudFxuICAgICAgICAgICAgICAgIGlmIChvcHRzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICByb2xlcy5wdXNoKGNzc1JvbGUpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRzLmVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGVzLnB1c2goc3ZnUm9sZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFudWFsbCBhZGRpbmcgcm9sZXNcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0cy5hcykge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0FycmF5KG9wdHMuYXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGVzLnB1c2guYXBwbHkocm9sZXMsIG9wdHMuYXMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGVzLnB1c2gob3B0cy5hcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldChvcHRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucm9sZXMgPSByb2xlcztcbiAgICAgICAgdGhpcy5yb2xlcy5mb3JFYWNoKGZ1bmN0aW9uIChyb2xlKSB7XG4gICAgICAgICAgICAvLyBGaXJlIGluaXQgbWV0aG9kIGlmIG9uZSBhdmFpbGFibGVcbiAgICAgICAgICAgIGlmIChyb2xlLmluaXQpIHtcbiAgICAgICAgICAgICAgICByb2xlLmluaXQuY2FsbChhY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbkFjdG9yLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBTZXQgQWN0aW9uIHZhbHVlcyBhbmQgcHJvcGVydGllc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBFbGVtZW50IHByb3BlcnRpZXNcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddIChvcHRpb24pOiBOYW1lIG9mIGRlZmF1bHQgdmFsdWUgcHJvcGVydHlcbiAgICAqL1xuICAgIHNldDogZnVuY3Rpb24gKHByb3BzLCBkZWZhdWx0VmFsdWVQcm9wKSB7XG4gICAgICAgIC8vIFJlc2V0IEVsZW1lbnQgcHJvcGVydGllcyBhbmQgd3JpdGUgbmV3IHByb3BzXG4gICAgICAgIHRoaXMuY2xlYXJPcmRlcigpO1xuICAgICAgICB0aGlzLnJlc2V0UHJvcHMoKTtcblxuICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5nZXROYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBwcm9wcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRQcm9wcyhwcm9wcyk7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlcyhwcm9wcy52YWx1ZXMsIGRlZmF1bHRWYWx1ZVByb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFN0YXJ0IGFjdGlvblxuICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZXQoYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzZXRQcm9ncmVzcygpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5hY3Rpb24uZ2V0TmFtZSgpICE9PSAndHJhY2snICYmIHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5zdG9wKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnN0b3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTdG9wIGN1cnJlbnQgQWN0aW9uXG4gICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucXVldWUuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgUGF1c2UgY3VycmVudCBBY3Rpb25cbiAgICAqL1xuICAgIHBhdXNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzLnN0b3AoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFJlc3VtZSBwYXVzZWQgQWN0aW9uXG4gICAgKi9cbiAgICByZXN1bWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5mcmFtZXN0YW1wID0gdGhpcy5zdGFydGVkID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucHJvY2Vzcy5zdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgVG9nZ2xlIGN1cnJlbnQgQWN0aW9uXG4gICAgKi9cbiAgICB0b2dnbGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzdW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEFjdGl2YXRlIEVsZW1lbnQgQWN0aW9uXG4gICAgKi9cbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdXRpbHMuY3VycmVudFRpbWUoKSArIHRoaXMuZGVsYXk7XG4gICAgICAgIHRoaXMuZnJhbWVzdGFtcCA9IHRoaXMuc3RhcnRlZDtcbiAgICAgICAgdGhpcy5maXJzdEZyYW1lID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnByb2Nlc3Muc3RhcnQoKTtcbiAgICB9LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXNldFByb2dyZXNzKCk7XG4gICAgICAgIHZhbHVlT3BzLmFsbCgncmVzZXQnLCB0aGlzLnZhbHVlcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBSZXNldCBBY3Rpb24gcHJvZ3Jlc3NcbiAgICAqL1xuICAgIHJlc2V0UHJvZ3Jlc3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdXRpbHMuY3VycmVudFRpbWUoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIExvb3AgdGhyb3VnaCBhbGwgdmFsdWVzIGFuZCBjcmVhdGUgb3JpZ2luIHBvaW50c1xuICAgICovXG4gICAgcmVzZXRPcmlnaW5zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhbHVlT3BzLmFsbCgncmVzZXRPcmlnaW4nLCB0aGlzLnZhbHVlcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgUmV2ZXJzZSBBY3Rpb24gcHJvZ3Jlc3MgYW5kIHZhbHVlc1xuICAgICovXG4gICAgcmV2ZXJzZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgICAgIHZhbHVlT3BzLmFsbCgncmV0YXJnZXQnLCB0aGlzLnZhbHVlcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3dhcCB2YWx1ZSBvcmlnaW5zIGFuZCB0b1xuICAgICovXG4gICAgZmxpcFZhbHVlczogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuICAgICAgICB2YWx1ZU9wcy5hbGwoJ2ZsaXAnLCB0aGlzLnZhbHVlcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTZXQgcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogUHJvcGVydGllcyB0byBzZXRcbiAgICAqL1xuICAgIHNldFByb3BzOiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgdmFyIGFjdG9yID0gdGhpcztcblxuICAgICAgICBlYWNoKHByb3BzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3ZhbHVlcycpIHtcbiAgICAgICAgICAgICAgICBhY3RvcltrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBSZXNldCBwcm9wZXJ0aWVzIHRvIEFjdGlvbiBkZWZhdWx0c1xuICAgICovXG4gICAgcmVzZXRQcm9wczogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvcHModGhpcy5hY3Rpb24uZ2V0RGVmYXVsdFByb3BzKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBBZGQgYSBuZXcgYWN0aW9uIHRvIHRoZSBxdWV1ZVxuICAgICovXG4gICAgdGhlbjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnF1ZXVlLmFkZC5hcHBseSh0aGlzLnF1ZXVlLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgU2V0IHZhbHVlc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0IHx8IHN0cmluZyB8fCBudW1iZXJdOiBWYWx1ZVxuICAgICAgICBAcGFyYW0gW3N0cmluZ10gKG9wdGlvbmFsKTogRGVmYXVsdCBwcm9wZXJ0eSB0byBzZXRcbiAgICAqL1xuICAgIHNldFZhbHVlczogZnVuY3Rpb24gKHZhbHVlcywgZGVmYXVsdFZhbHVlUHJvcCkge1xuICAgICAgICB2YWx1ZU9wcy5wcm9jZXNzKHZhbHVlcywgdGhpcywgZGVmYXVsdFZhbHVlUHJvcCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgVXBkYXRlIG9yZGVyIG9mIHZhbHVlIGtleXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IG9mIHZhbHVlXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IFdoZXRoZXIgdG8gbW92ZSB2YWx1ZSB0byBiYWNrXG4gICAgKi9cbiAgICB1cGRhdGVPcmRlcjogZnVuY3Rpb24gKGtleSwgbW92ZVRvQmFjaywgaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgdmFyIG9yZGVyID0gIWhhc0NoaWxkcmVuID8gdGhpcy5vcmRlciA6IHRoaXMucGFyZW50T3JkZXIsXG4gICAgICAgICAgICBwb3NpdGlvbiA9IG9yZGVyLmluZGV4T2Yoa2V5KTtcblxuICAgICAgICAvLyBJZiBrZXkgaXNuJ3QgaW4gbGlzdCwgb3IgbW92ZVRvQmFjayBpcyBzZXQgdG8gdHJ1ZSwgYWRkIGtleVxuICAgICAgICBpZiAocG9zaXRpb24gPT09IC0xIHx8IG1vdmVUb0JhY2spIHtcbiAgICAgICAgICAgIG9yZGVyLnB1c2goa2V5KTtcblxuICAgICAgICAgICAgLy8gSWYga2V5IGFscmVhZHkgZXhpc3RzLCByZW1vdmVcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBvcmRlci5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIENsZWFyIHZhbHVlIGtleSB1cGRhdGUgb3JkZXJcbiAgICAqL1xuICAgIGNsZWFyT3JkZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5vcmRlciA9IFtdO1xuICAgICAgICB0aGlzLnBhcmVudE9yZGVyID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBbYm9vbGVhbl06IElzIHRoaXMgRWxlbWVudCBjdXJyZW50bHkgYWN0aXZlP1xuICAgIGdldCBpc0FjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTZXQgRWxlbWVudCBhY3RpdmUgc3RhdHVzXG5cbiAgICAgICAgSWYgYWN0aXZlIGlzIGJlaW5nIHNldCB0byB0cnVlLCBzZXQgaGFzQ2hhbmdlZCB0byB0cnVlLCB0b29cblxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dOiBOZXcgYWN0aXZlIHN0YXR1c1xuICAgICovXG4gICAgc2V0IGlzQWN0aXZlKHN0YXR1cykge1xuICAgICAgICBpZiAoc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSBzdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc0FjdGl2ZSA9IHN0YXR1cztcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFjdG9yO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0b3IvQWN0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBBY3RvciA9IHJlcXVpcmUoJy4vQWN0b3InKSxcbiAgICBnZW5lcmF0ZU1ldGhvZEl0ZXJhdG9yID0gcmVxdWlyZSgnLi9zeXN0ZW0vZ2VuZXJhdGUtaXRlcmF0b3InKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuXG4gICAgREVGQVVMVF9TVEFHR0VSX0VBU0UgPSAnbGluZWFyJyxcblxuICAgIC8qXG4gICAgICAgIEFjdG9yQ29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuXG4gICAgICAgIEBwYXJhbSBbYXJyYXldOiBBcnJheSBvZiBBY3RvcnMsIG9yIHZhbGlkIEFjdG9yIGVsZW1lbnRzXG4gICAgKi9cbiAgICBBY3RvckNvbGxlY3Rpb24gPSBmdW5jdGlvbiAoZWxlbWVudHMsIG9wdHMpIHtcbiAgICAgICAgLy8gQWRkIGluaXRpYWwgZWxlbWVudHNcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICAgIGlmIChlbGVtZW50cykge1xuICAgICAgICAgICAgdGhpcy5hZGQoZWxlbWVudHMsIG9wdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIHN0YWdnZXIgQWN0b3JcbiAgICAgICAgdGhpcy5fc3RhZ2dlciA9IG5ldyBBY3RvcigpO1xuICAgIH07XG5cbkFjdG9yQ29sbGVjdGlvbi5wcm90b3R5cGUgPSB7XG5cbiAgICAvKlxuICAgICAgICBDbGVhciBjdXJyZW50IEFjdG9yc1xuICAgICovXG4gICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgU3RhZ2dlciB0aGUgZXhlY3V0aW9uIG9mIEVsZW1lbnQgbWV0aG9kc1xuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyIHx8IG9iamVjdF06IEludGVydmFsIGJldHdlZW4gRWxlbWVudHMgb3Igc3RhZ2dlciBvcHRpb25zXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBtZXRob2QgdG8gZXhlY3V0ZSBvciBhIGNhbGxiYWNrXG4gICAgICAgIEBhcmdzIC4uLiAob3B0aW9uYWwpOiBPcHRpb25hbCBhcmd1bWVudHMgdG8gc2VuZCB0byBjYWxsYmFja1xuICAgICovXG4gICAgc3RhZ2dlcjogZnVuY3Rpb24gKHByb3BzLCBtZXRob2QpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgICAgIG51bUVsZW1lbnRzID0gdGhpcy5lbGVtZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBwcm9wc0lzTnVtID0gdXRpbHMuaXNOdW0ocHJvcHMpLFxuICAgICAgICAgICAgaW50ZXJ2YWwgPSBwcm9wc0lzTnVtID8gcHJvcHMgOiBwcm9wcy5pbnRlcnZhbCxcbiAgICAgICAgICAgIHN0YWdnZXJQcm9wcyA9IHByb3BzSXNOdW0gPyB7fSA6IHByb3BzLFxuICAgICAgICAgICAgaSA9IC0xLFxuXG4gICAgICAgICAgICBjYWxsYmFjayA9IHV0aWxzLmlzU3RyaW5nKG1ldGhvZCkgP1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChhY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICBhY3RvclttZXRob2RdLmFwcGx5KGFjdG9yLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9IDogbWV0aG9kO1xuXG4gICAgICAgIGFyZ3Muc3BsaWNlKDAsIDIpO1xuXG4gICAgICAgIHN0YWdnZXJQcm9wcy52YWx1ZXMgPSB7XG4gICAgICAgICAgICBpOiB7XG4gICAgICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogaW50ZXJ2YWwgKiBudW1FbGVtZW50cyxcbiAgICAgICAgICAgICAgICBlYXNlOiBwcm9wc0lzTnVtID8gREVGQVVMVF9TVEFHR0VSX0VBU0UgOiBwcm9wcy5lYXNlIHx8IERFRkFVTFRfU1RBR0dFUl9FQVNFLFxuICAgICAgICAgICAgICAgIHN0ZXBzOiBudW1FbGVtZW50cyxcbiAgICAgICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0bzogbnVtRWxlbWVudHMgLSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc3RhZ2dlclByb3BzLm9uVXBkYXRlID0gZnVuY3Rpb24gKG91dHB1dCkge1xuICAgICAgICAgICAgdmFyIG5ld0luZGV4ID0gb3V0cHV0LmksXG4gICAgICAgICAgICAgICAgZ2FwSW5kZXggPSBpICsgMTtcblxuICAgICAgICAgICAgLy8gSWYgb3VyIG5ldyBpbmRleCBpcyBvbmx5IG9uZSBtb3JlIHRoYW4gdGhlIHByZXZpb3VzIGluZGV4LCBmaXJlIGltbWVkaWV0bHlcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA9PT0gaSArIDEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmLmVsZW1lbnRzW2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuXG4gICAgICAgICAgICAvLyBPciBsb29wIHRocm91Z2ggdGhlIGRpc3RhbmNlIHRvIGZpcmUgYWxsIGluZGVjaWVzLiBJbmNyZWFzZSBkZWxheS5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICg7IGdhcEluZGV4IDw9IG5ld0luZGV4OyBnYXBJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHNlbGYuZWxlbWVudHNbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpID0gbmV3SW5kZXg7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc3RhZ2dlci5wbGF5KHN0YWdnZXJQcm9wcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEl0ZXJhdGUgb3ZlciBlYWNoIGVsZW1lbnQgaW4gY29sbGVjdGlvblxuXG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBydW4gb24gZWFjaCBBY3RvciwgcHJvdmlkZWQgKGFjdG9yLCBpbmRleCkgYXJnc1xuICAgICovXG4gICAgZWFjaDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBBZGQgYSBncm91cCBvZiBBY3RvcnMgdG8gb3VyIENvbGxlY3Rpb25cblxuICAgICAgICBAcGFyYW0gW2FycmF5XTogQXJyYXkgb2YgQWN0b3JzLCBvciB2YWxpZCBBY3RvciBlbGVtZW50c1xuICAgICovXG4gICAgYWRkOiBmdW5jdGlvbiAoZWxlbWVudHMsIG9wdHMpIHtcbiAgICAgICAgdmFyIG51bU5ld0VsZW1lbnRzID0gZWxlbWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBuZXdFbGVtZW50O1xuXG4gICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnVtTmV3RWxlbWVudHM7IGkrKykge1xuICAgICAgICAgICAgb3B0cy5lbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICAgICAgICBuZXdFbGVtZW50ID0gKGVsZW1lbnRzW2ldIGluc3RhbmNlb2YgQWN0b3IpID8gZWxlbWVudHNbaV0gOiBuZXcgQWN0b3Iob3B0cyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLnB1c2gobmV3RWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG4vLyBJbml0aWFsaXNlIEFjdG9yQ29sbGVjdGlvbiBtZXRob2RzXG4oZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIG1ldGhvZCBpbiBBY3Rvci5wcm90b3R5cGUpIHtcbiAgICAgICAgaWYgKEFjdG9yLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShtZXRob2QpKSB7XG4gICAgICAgICAgICBBY3RvckNvbGxlY3Rpb24ucHJvdG90eXBlW21ldGhvZF0gPSBnZW5lcmF0ZU1ldGhvZEl0ZXJhdG9yKG1ldGhvZCk7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFjdG9yQ29sbGVjdGlvbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdG9yL0FjdG9yQ29sbGVjdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICAgIElucHV0IGNvbnRyb2xsZXJcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYy5qcycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzLmpzJyksXG4gICAgSGlzdG9yeSA9IHJlcXVpcmUoJy4uL2luYy9IaXN0b3J5LmpzJyksXG5cbiAgICAvKlxuICAgICAgICBJbnB1dCBjb25zdHJ1Y3RvclxuICAgICAgICBcbiAgICAgICAgICAgIFN5bnRheFxuICAgICAgICAgICAgICAgIG5ld0lucHV0KG5hbWUsIHZhbHVlWywgcG9sbF0pXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiB0byB0cmFja1xuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEluaXRpYWwgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl0gKG9wdGlvbmFsKTogRnVuY3Rpb24gdG8gcG9sbCBJbnB1dCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG5ld0lucHV0KHByb3BzWywgcG9sbF0pXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IG9mIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXSAob3B0aW9uYWwpOiBGdW5jdGlvbiB0byBwb2xsIElucHV0IGRhdGFcblxuICAgICAgICBAcmV0dXJuIFtJbnB1dF1cbiAgICAqL1xuICAgIElucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcG9sbFBvcyA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuXG4gICAgICAgIHRoaXMuY3VycmVudCA9IHt9O1xuICAgICAgICB0aGlzLm9mZnNldCA9IHt9O1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge307XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBIaXN0b3J5KCk7XG4gICAgICAgIHRoaXMudXBkYXRlKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmMoYXJndW1lbnRzW3BvbGxQb3NdKSkge1xuICAgICAgICAgICAgdGhpcy5wb2xsID0gYXJndW1lbnRzW3BvbGxQb3NdO1xuICAgICAgICB9XG4gICAgfTtcblxuSW5wdXQucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8vIFtudW1iZXJdOiBOdW1iZXIgb2YgZnJhbWVzIG9mIGluYWN0aXZpdHkgYmVmb3JlIHZlbG9jaXR5IGlzIHR1cm5lZCB0byAwXG4gICAgbWF4SW5hY3RpdmVGcmFtZXM6IDIsXG4gICAgXG4gICAgLy8gW251bWJlcl06IE51bWJlciBvZiBmcmFtZXMgaW5wdXQgaGFzbid0IGJlZW4gdXBkYXRlZFxuICAgIGluYWN0aXZlRnJhbWVzOiAwLFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBsYXRlc3QgaW5wdXQgdmFsdWVzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ10gKG9wdGlvbmFsKTogTmFtZSBvZiBzcGVjaWZpYyBwcm9wZXJ0eSB0byByZXR1cm5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0IHx8IG51bWJlcl06IExhdGVzdCBpbnB1dCB2YWx1ZXMgb3IsIGlmIHNwZWNpZmllZCwgc2luZ2xlIHZhbHVlXG4gICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHZhciBsYXRlc3QgPSB0aGlzLmhpc3RvcnkuZ2V0KCksXG4gICAgICAgICAgICB2YWwgPSAocHJvcCAhPT0gdW5kZWZpbmVkKSA/IGxhdGVzdFtwcm9wXSA6IGxhdGVzdDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFVwZGF0ZSB0aGUgaW5wdXQgdmFsdWVzXG4gICAgICAgIFxuICAgICAgICBTeW50YXhcbiAgICAgICAgICAgIGlucHV0LnVwZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgdG8gdHJhY2tcbiAgICAgICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEluaXRpYWwgdmFsdWVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlucHV0LnVwZGF0ZShwcm9wcylcbiAgICAgICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCBvZiB2YWx1ZXNcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgQHJldHVybiBbSW5wdXRdXG4gICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB7fTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW0oYXJnMSkpIHtcbiAgICAgICAgICAgIHZhbHVlc1thcmcwXSA9IGFyZzE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSBhcmcwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oaXN0b3J5LmFkZCh1dGlscy5tZXJnZSh0aGlzLmN1cnJlbnQsIHZhbHVlcykpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBDaGVjayBmb3IgaW5wdXQgbW92ZW1lbnQgYW5kIHVwZGF0ZSBwb2ludGVyIG9iamVjdCdzIHByb3BlcnRpZXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGltZXN0YW1wIG9mIGZyYW1lXG4gICAgICAgIEByZXR1cm4gW0lucHV0XVxuICAgICovXG4gICAgb25GcmFtZTogZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuICAgICAgICB2YXIgbGF0ZXN0LCBoYXNDaGFuZ2VkO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgcHJvdmlkZWQgdGltZXN0YW1wIGFnYWluc3QgbGFzdEZyYW1lIHRpbWVzdGFtcCBhbmQgcmV0dXJuIGlucHV0IGhhcyBhbHJlYWR5IGJlZW4gdXBkYXRlZFxuICAgICAgICBpZiAodGltZXN0YW1wID09PSB0aGlzLmxhc3RGcmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsYXRlc3QgPSAodGhpcy5wb2xsKSA/IHRoaXMucG9sbCgpIDogdGhpcy5oaXN0b3J5LmdldCgpO1xuICAgICAgICBoYXNDaGFuZ2VkID0gdXRpbHMuaGFzQ2hhbmdlZCh0aGlzLmN1cnJlbnQsIGxhdGVzdCk7XG5cbiAgICAgICAgLy8gSWYgaW5wdXQgaGFzIGNoYW5nZWQgYmV0d2VlbiBmcmFtZXMgIFxuICAgICAgICBpZiAoaGFzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IGNhbGMub2Zmc2V0KHRoaXMuY3VycmVudCwgbGF0ZXN0KTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGxhdGVzdDtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuXG4gICAgICAgIC8vIE9yIGl0IGhhc24ndCBtb3ZlZCBhbmQgb3VyIGZyYW1lIGxpbWl0IGhhcyBiZWVuIHJlYWNoZWRcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluYWN0aXZlRnJhbWVzID49IHRoaXMubWF4SW5hY3RpdmVGcmFtZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSBjYWxjLm9mZnNldCh0aGlzLmN1cnJlbnQsIHRoaXMuY3VycmVudCk7XG4gICAgICAgIFxuICAgICAgICAvLyBPciBpbnB1dCBoYXNuJ3QgY2hhbmdlZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcysrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxhc3RGcmFtZSA9IHRpbWVzdGFtcDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbnB1dC9JbnB1dC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKSxcblxuICAgIC8qXG4gICAgICAgIFByb2Nlc3MgY29uc3RydWN0b3JcbiAgICAgICAgXG4gICAgICAgIFN5bnRheFxuICAgICAgICAgICAgdmFyIHByb2Nlc3MgPSBuZXcgUHJvY2VzcyhzY29wZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgdmFyIHByb2Nlc3MgPSBuZXcgUHJvY2VzcyhjYWxsYmFjayk7XG4gICAgKi9cbiAgICBQcm9jZXNzID0gZnVuY3Rpb24gKHNjb3BlLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgaGFzU2NvcGUgPSAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCk7XG5cbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGhhc1Njb3BlID8gY2FsbGJhY2sgOiBzY29wZTtcbiAgICAgICAgdGhpcy5zY29wZSA9IGhhc1Njb3BlID8gc2NvcGUgOiB0aGlzO1xuICAgICAgICB0aGlzLmlkID0gbWFuYWdlci5yZWdpc3RlcigpO1xuXG4gICAgICAgIC8vIFtib29sZWFuXTogSXMgdGhpcyBwcm9jZXNzIGN1cnJlbnRseSBhY3RpdmU/XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9O1xuXG5Qcm9jZXNzLnByb3RvdHlwZSA9IHtcbiAgICAvKlxuICAgICAgICBGaXJlIGNhbGxiYWNrXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3RpbWVzdGFtcF06IFRpbWVzdGFtcCBvZiBjdXJyZW50bHktZXhlY3V0ZWQgZnJhbWVcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaW1lIHNpbmNlIGxhc3QgZnJhbWVcbiAgICAqL1xuICAgIGZpcmU6IGZ1bmN0aW9uICh0aW1lc3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjay5jYWxsKHRoaXMuc2NvcGUsIHRpbWVzdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB3ZSdyZSBydW5uaW5nIGF0IGFuIGludGVydmFsLCBkZWFjdGl2YXRlIGFnYWluXG4gICAgICAgIGlmICh0aGlzLmlzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdGFydCBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IER1cmF0aW9uIG9mIHByb2Nlc3MgaW4gbXMsIDAgaWYgaW5kZWZpbml0ZVxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zdG9wKCk7XG4gICAgICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wVGltZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdG9wIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEFjdGl2YXRlIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbWFuYWdlci5hY3RpdmF0ZSh0aGlzLCB0aGlzLmlkKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIERlYWN0aXZhdGUgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBtYW5hZ2VyLmRlYWN0aXZhdGUodGhpcy5pZCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEZpcmUgcHJvY2VzcyBldmVyeSB4IG1zXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBtcyB0byB3YWl0IGJldHdlZW4gcmVmaXJpbmcgcHJvY2Vzcy5cbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIGV2ZXJ5OiBmdW5jdGlvbiAoaW50ZXJ2YWwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcblxuICAgICAgICB0aGlzLmlzSW50ZXJ2YWwgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuYWN0aXZhdGUoKTtcbiAgICAgICAgfSwgaW50ZXJ2YWwpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pc0ludGVydmFsVGltZUFjdGl2ZSA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIENsZWFyIGFsbCB0aW1lcnNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBcbiAgICAqL1xuICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNJbnRlcnZhbCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wVGltZXJBY3RpdmUpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0b3BUaW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmlzSW50ZXJ2YWxUaW1lQWN0aXZlKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxUaW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvY2VzcztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvUHJvY2Vzcy5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcbnZhciBlYWNoID0gdXRpbHMuZWFjaDtcblxuLypcbiAgICBSb2xlIGNsYXNzIGNvbnN0cnVjdG9yXG5cbiAgICBAcGFyYW0gW29iamVjdF06IE9wdGlvbmFsIG1ldGhvZHMgYW5kIHByb3BzIHRvIGFkZDpcbiAgICAgICAgbmFtZSBbc3RyaW5nXTogICAgICBOYW1lIG9mIGdlbmVyYXRlZCBnZXR0ZXIvc2V0dGVyIG1ldGhvZCBvbiBBY3RvclxuICAgICAgICBfbWFwIFtvYmplY3RdOiAgICAgIE1hcCBBY3RvciB2YWx1ZXMgdG8gdGhlc2UgdmFsdWVzIGZvciB0aGlzIFJvbGVcbiAgICAgICAgX3R5cGVNYXAgW29iamVjdF06ICBNYXAgdmFsdWVzIHRvIHZhbHVlIHR5cGVzXG4gICAgICAgIGluaXQgW2Z1bmN0aW9uXTogICAgQ2FsbGJhY2sgdG8gcnVuIHdoZW4gdGhpcyBSb2xlIGlzIGFkZGVkIHRvIGFuIEFjdG9yXG4gICAgICAgIHN0YXJ0IFtmdW5jdGlvbl06ICAgQ2FsbGJhY2sgdG8gcnVuIHdoZW4gaG9zdCBBY3RvciBzdGFydHMgYW4gYWN0aW9uXG4gICAgICAgIGNvbXBsZXRlIFtmdW5jdGlvbl06IENhbGxiYWNrIHRvIHJ1biB3aGVuIGFjdGlvbiBjb21wbGV0ZXNcbiAgICAgICAgZnJhbWUgW2Z1bmN0aW9uXTogICBDYWxsYmFjayB0byBmaXJlIG9uY2UgcGVyIGZyYW1lXG4gICAgICAgIHVwZGF0ZSBbZnVuY3Rpb25dOiAgQ2FsbGJhY2sgdG8gZmlyZSB3aGVuIHZhbHVlcyBjaGFuZ2VcbiAgICAgICAgZ2V0IFtmdW5jdGlvbl06ICAgICBSZWFkIHZhbHVlIGZyb20gYWN0dWFsIGVsZW1lbnRcbiAgICAgICAgc2V0IFtmdW5jdGlvbl06ICAgICBTZXQgdmFsdWUgb24gYWN0dWFsIGVsZW1lbnRcbiovXG52YXIgUm9sZSA9IGZ1bmN0aW9uIChtZXRob2RzKSB7XG4gICAgdmFyIHJvbGUgPSB0aGlzO1xuXG4gICAgcm9sZS5fbWFwID0ge307XG5cbiAgICBlYWNoKG1ldGhvZHMsIGZ1bmN0aW9uIChuYW1lLCBtZXRob2QpIHtcbiAgICAgICAgcm9sZVtuYW1lXSA9ICghdXRpbHMuaXNPYmoobWV0aG9kKSkgPyBtZXRob2QgOiB1dGlscy5jb3B5KG1ldGhvZCk7XG4gICAgfSk7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBhIG5ldyByb2xlXG5cbiAgICBAcGFyYW0gW29iamVjdF06IE9wdGlvbmFsIG1ldGhvZHMgYW5kIHByb3BzIHRvIGFkZFxuICAgIEBwYXJhbSBbdmFsdWVzVG9NYXBdOiBPdmVycmlkZSBleGlzdGluZyBtYXAgd2l0aCB0aGVzZSB2YWx1ZXNcbiAgICBAcmV0dXJuIFtSb2xlXTogTmV3IFJvbGVcbiovXG52YXIgY3JlYXRlUm9sZSA9IGZ1bmN0aW9uIChtZXRob2RzLCB2YWx1ZXMpIHtcbiAgICB2YXIgbmV3Um9sZSA9IG5ldyBSb2xlKG1ldGhvZHMpO1xuXG4gICAgZWFjaCh2YWx1ZXMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIG5ld1JvbGUuX21hcFtrZXldID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3Um9sZTtcbn07XG5cblJvbGUucHJvdG90eXBlID0ge1xuXG4gICAgLypcbiAgICAgICAgTWFwIHZhbHVlIGtleXMgb3IgZ2VuZXJhdGUgbmV3IFJvbGUgd2l0aCB1cGRhdGVkIG1hcFxuXG4gICAgICAgIEdldHRlcjpcbiAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIG1hcFxuICAgICAgICAgICAgQHJldHVybiBbc3RyaW5nXTogTWFwcGVkIGtleSwgb3Iga2V5IGlmIG5vIG1hcHBlZCBrZXkgZm91bmRcblxuICAgICAgICBTZXR0ZXI6IFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBNYXAgb2YgQWN0b3Iga2V5cyAtPiBSb2xlIGtleXNcbiAgICAgICAgICAgIEByZXR1cm4gW1JvbGVdOiBOZXcgUm9sZSB3aXRoIHVuaXF1ZSBtYXBcbiAgICAqL1xuICAgIG1hcDogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgc3RyaW5nLCBnZXQgbWFwcGVkIHZhbHVlXG4gICAgICAgIC8vIE90aGVyd2lzZSB0aGlzIGlzIGEgbWFwLCBkdXBsaWNhdGVkIHJvbGUgd2l0aCB1cGRhdGVkIG1hcFxuICAgICAgICByZXR1cm4gKHV0aWxzLmlzU3RyaW5nKHZhbHVlcykpID8gdGhpcy5fbWFwW3ZhbHVlc10gfHwgdmFsdWVzIDogY3JlYXRlUm9sZSh0aGlzLCB2YWx1ZXMpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUm9sZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvbGVzL1JvbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIEJlemllciA9IHJlcXVpcmUoJy4vQmV6aWVyJyksXG5cbiAgICAvKlxuICAgICAgICBNaXJyb3IgZWFzaW5nXG4gICAgICAgIFxuICAgICAgICBNaXJyb3JzIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgaGVyZSBmb3IgbWlycm9yaW5nIGFuXG4gICAgICAgIGVhc2VJbiBpbnRvIGFuIGVhc2VJbk91dFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtaXJyb3JcbiAgICAgICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiAgICAqL1xuICAgIG1pcnJvckVhc2luZyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgbWV0aG9kKSB7XG4gICAgICAgIHJldHVybiAocHJvZ3Jlc3MgPD0gMC41KSA/IG1ldGhvZCgyICogcHJvZ3Jlc3MpIC8gMiA6ICgyIC0gbWV0aG9kKDIgKiAoMSAtIHByb2dyZXNzKSkpIC8gMjtcbiAgICB9LFxuICAgICAgICAgICAgXG4gICAgLypcbiAgICAgICAgUmV2ZXJzZSBlYXNpbmdcbiAgICAgICAgXG4gICAgICAgIFJldmVyc2VzIHRoZSBvdXRwdXQgb2YgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBmb3IgZmxpcHBpbmcgZWFzZUluXG4gICAgICAgIGN1cnZlIHRvIGFuIGVhc2VPdXQuXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIHJldmVyc2VcbiAgICAgICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiAgICAqL1xuICAgIHJldmVyc2VFYXNpbmcgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIG1ldGhvZCkge1xuICAgICAgICByZXR1cm4gMSAtIG1ldGhvZCgxIC0gcHJvZ3Jlc3MpO1xuICAgIH07XG5cbi8qXG4gICAgRWFzaW5nIGNsYXNzXG5cbiAgICBJZiBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHJldHVybnMgZWFzaW5nIGZ1bmN0aW9uIHdpdGggXG4gICAgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcblxuICAgIElmIHByb3ZpZGVkIGZvdXIgYXJndW1lbnRzLCByZXR1cm5zIG5ldyBCZXppZXIgY2xhc3MgaW5zdGVhZC5cbiovXG52YXIgRWFzaW5nID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgdmFyIG1ldGhvZCA9IHgxLFxuICAgICAgICBlYXNpbmdGdW5jdGlvbjtcblxuICAgIC8vIElmIHRoaXMgaXMgYSBiZXppZXIgY3VydmUsIHJldHVybiBhIGJlemllciBmdW5jdGlvblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBlYXNpbmdGdW5jdGlvbiA9IG5ldyBCZXppZXIoeDEsIHkxLCB4MiwgeTIpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uLmluID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBlYXNpbmdGdW5jdGlvbi5vdXQgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiByZXZlcnNlRWFzaW5nKHByb2dyZXNzLCBtZXRob2QpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uLmluT3V0ID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gbWlycm9yRWFzaW5nKHByb2dyZXNzLCBtZXRob2QpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBlYXNpbmdGdW5jdGlvbjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRWFzaW5nO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi9FYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBBY3RvckNvbGxlY3Rpb24gPSByZXF1aXJlKCcuL0FjdG9yQ29sbGVjdGlvbicpO1xuXG4vKlxuICAgIENyZWF0ZSBhbiBBY3RvckNvbGxlY3Rpb24gYmFzZWQgb24gYSBzZWxlY3Rpb24gb2YgRE9NIG5vZGVzXG5cbiAgICBAcGFyYW0gW3N0cmluZyB8fCBOb2RlTGlzdCB8fCBqUXVlcnkgb2JqZWN0XTpcbiAgICAgICAgSWYgc3RyaW5nLCB0cmVhdGVkIGFzIHNlbGVjdG9yLlxuICAgICAgICBJZiBub3QsIHRyZWF0ZWQgYXMgcHJlZXhpc3RpbmcgTm9kZUxpc3QgfHwgalF1ZXJ5IG9iamVjdC5cbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgb3B0cykge1xuICAgIHZhciBub2RlcyA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3IsXG4gICAgICAgIGVsZW1lbnRzID0gW107XG5cbiAgICAvLyBJZiBqUXVlcnkgc2VsZWN0aW9uLCBnZXQgYXJyYXkgb2YgRWxlbWVudHNcbiAgICBpZiAobm9kZXMuZ2V0KSB7XG4gICAgICAgIGVsZW1lbnRzID0gbm9kZXMuZ2V0KCk7XG5cbiAgICAvLyBPciBjb252ZXJ0IE5vZGVMaXN0IHRvIGFycmF5XG4gICAgfSBlbHNlIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKG5vZGVzKTtcblxuICAgIC8vIE9yIGlmIGl0J3MganVzdCBhbiBFbGVtZW50LCBwdXQgaW50byBhcnJheVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnRzLnB1c2gobm9kZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgQWN0b3JDb2xsZWN0aW9uKGVsZW1lbnRzLCBvcHRzKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rvci9zZWxlY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcbiAgICBDYWxjdWxhdG9yc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBTaW1wbGUgSS9PIHNuaXBwZXRzXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMuanMnKSxcblxuICAgIGNhbGMgPSB7XG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICBhcmUgYXQgMCwwLCB0aGVuIHJldHVybiB0aGUgYW5nbGUgdXNpbmcgLmFuZ2xlRnJvbUNlbnRlcigpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICAgICAgICAgICAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4gICAgICAgICovXG4gICAgICAgIGFuZ2xlOiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgICAgIHZhciBmcm9tID0gcG9pbnRCID8gcG9pbnRBIDoge3g6IDAsIHk6IDB9LFxuICAgICAgICAgICAgICAgIHRvID0gcG9pbnRCIHx8IHBvaW50QSxcbiAgICAgICAgICAgICAgICBwb2ludCA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdG8ueCAtIGZyb20ueCxcbiAgICAgICAgICAgICAgICAgICAgeTogdG8ueSAtIGZyb20ueVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFuZ2xlRnJvbUNlbnRlcihwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgQW5nbGUgZnJvbSBjZW50ZXJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgY3VycmVudCBhbmdsZSwgaW4gcmFkaWFucywgb2YgYSBkZWZpbmVkIHBvaW50XG4gICAgICAgICAgICBmcm9tIGEgY2VudGVyIChhc3N1bWVkIDAsMClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBYIGNvb3JkaW5hdGUgb2Ygc2Vjb25kIHBvaW50XG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFkgY29vcmRpbmF0ZSBvZiBzZWNvbmQgcG9pbnRcbiAgICAgICAgICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gMCwgMCBhbmQgcG9pbnQgaW4gcmFkaWFuc1xuICAgICAgICAqL1xuICAgICAgICBhbmdsZUZyb21DZW50ZXI6IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoeSwgeCkpO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICAgICAgICAqL1xuICAgICAgICBkZWdyZWVzVG9SYWRpYW5zOiBmdW5jdGlvbiAoZGVncmVlcykge1xuICAgICAgICAgICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEaWxhdGVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYSAtLS0tLS0tLS0gYlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBhIC0tLS0gYlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuICAgICAgICAqL1xuICAgICAgICBkaWxhdGU6IGZ1bmN0aW9uIChhLCBiLCBkaWxhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGEgKyAoKGIgLSBhKSAqIGRpbGF0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRGlzdGFuY2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAoMCwwKSBhbmQgcG9pbnRBLCB1bmxlc3MgcG9pbnRCXG4gICAgICAgICAgICBpcyBwcm92aWRlZCwgdGhlbiB3ZSByZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdHdvLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICAgICAqL1xuICAgICAgICBkaXN0YW5jZTogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgICAgICByZXR1cm4gKHR5cGVvZiBwb2ludEEgPT09IFwibnVtYmVyXCIpID8gdGhpcy5kaXN0YW5jZTFEKHBvaW50QSwgcG9pbnRCKSA6IHRoaXMuZGlzdGFuY2UyRChwb2ludEEsIHBvaW50Qik7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEaXN0YW5jZSAxRFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHBvaW50IEEgYW5kIHBvaW50IEJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQb2ludCBBXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IChvcHRpb25hbCk6IFBvaW50IEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gICAgICAgICovXG4gICAgICAgIGRpc3RhbmNlMUQ6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAgICAgdmFyIGJJc051bSA9ICh0eXBlb2YgcG9pbnRCID09PSAnbnVtYmVyJyksXG4gICAgICAgICAgICAgICAgZnJvbSA9IGJJc051bSA/IHBvaW50QSA6IDAsXG4gICAgICAgICAgICAgICAgdG8gPSBiSXNOdW0gPyBwb2ludEIgOiBwb2ludEE7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gYWJzb2x1dGUodG8gLSBmcm9tKTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRGlzdGFuY2UgMkRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAoMCwwKSBhbmQgcG9pbnQgQSwgdW5sZXNzIHBvaW50IEJcbiAgICAgICAgICAgIGlzIHByb3ZpZGVkLCB0aGVuIHdlIHJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogeCBhbmQgeSBvZiBwb2ludCBBXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IChvcHRpb25hbCk6IHggYW5kIHkgb2YgcG9pbnQgQlxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgZGlzdGFuY2UyRDogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgICAgICB2YXIgYklzT2JqID0gKHR5cGVvZiBwb2ludEIgPT09IFwib2JqZWN0XCIpLFxuICAgICAgICAgICAgICAgIGZyb20gPSBiSXNPYmogPyBwb2ludEEgOiB7eDogMCwgeTogMH0sXG4gICAgICAgICAgICAgICAgdG8gPSBiSXNPYmogPyBwb2ludEIgOiBwb2ludEEsXG4gICAgICAgICAgICAgICAgcG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGFic29sdXRlKHRvLnggLSBmcm9tLngpLFxuICAgICAgICAgICAgICAgICAgICB5OiBhYnNvbHV0ZSh0by55IC0gZnJvbS55KVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oeXBvdGVudXNlKHBvaW50LngsIHBvaW50LnkpO1xuICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBIeXBvdGVudXNlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogTGVuZ3RoIG9mIENcbiAgICAgICAgKi9cbiAgICAgICAgaHlwb3RlbnVzZTogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHZhciBhMiA9IGEgKiBhLFxuICAgICAgICAgICAgICAgIGIyID0gYiAqIGIsXG4gICAgICAgICAgICAgICAgYzIgPSBhMiArIGIyO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydChjMik7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgT2Zmc2V0IGJldHdlZW4gdHdvIGlucHV0c1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBDYWxjdWxhdGUgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gZGlmZmVyZW50IGlucHV0c1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW1BvaW50XTogRmlyc3QgaW5wdXRcbiAgICAgICAgICAgIEBwYXJhbSBbUG9pbnRdOiBTZWNvbmQgaW5wdXRcbiAgICAgICAgICAgIEByZXR1cm4gW09mZnNldF06IERpc3RhbmNlIG1ldHJpY3MgYmV0d2VlbiB0d28gcG9pbnRzXG4gICAgICAgICovXG4gICAgICAgIG9mZnNldDogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSB7fTtcbiAgICBcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRba2V5XSA9IGJba2V5XSAtIGFba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFtrZXldID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc051bShvZmZzZXQueCkgJiYgaXNOdW0ob2Zmc2V0LnkpKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0LmFuZ2xlID0gdGhpcy5hbmdsZShhLCBiKTtcbiAgICAgICAgICAgICAgICBvZmZzZXQuZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlMkQoYSwgYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gb2Zmc2V0O1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gICAgICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4gICAgICAgICovXG4gICAgICAgIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2U6IGZ1bmN0aW9uIChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkge1xuICAgICAgICAgICAgdmFyIHBvaW50ID0ge307XG4gICAgXG4gICAgXHRcdHBvaW50LnggPSBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54O1xuICAgICAgICAgICAgcG9pbnQueSA9IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnk7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgICAgICAgICAgIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICAgICAgICAgICAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IGlmIGZ1bGwgcmFuZ2UgZ2l2ZW4sIHVwcGVyIGlmIG5vdFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuICAgICAgICAqL1xuICAgICAgICBwcm9ncmVzczogZnVuY3Rpb24gKHZhbHVlLCBsaW1pdEEsIGxpbWl0Qikge1xuICAgICAgICAgICAgdmFyIGJJc051bSA9ICh0eXBlb2YgbGltaXRCID09PSAnbnVtYmVyJyksXG4gICAgICAgICAgICAgICAgZnJvbSA9IGJJc051bSA/IGxpbWl0QSA6IDAsXG4gICAgICAgICAgICAgICAgdG8gPSBiSXNOdW0gPyBsaW1pdEIgOiBsaW1pdEEsXG4gICAgICAgICAgICAgICAgcmFuZ2UgPSB0byAtIGZyb20sXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAodmFsdWUgLSBmcm9tKSAvIHJhbmdlO1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHByb2dyZXNzO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgICAgICAqL1xuICAgICAgICByYWRpYW5zVG9EZWdyZWVzOiBmdW5jdGlvbiAocmFkaWFucykge1xuICAgICAgICAgICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBSZXR1cm4gcmFuZG9tIG51bWJlciBiZXR3ZWVuIHJhbmdlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWluaW11bVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtYXhpbXVtXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4gICAgICAgICovXG4gICAgICAgIHJhbmRvbTogZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgICAgICAgICBtaW4gPSBpc051bShtaW4pID8gbWluIDogMDtcbiAgICAgICAgICAgIG1heCA9IGlzTnVtKG1heCkgPyBtYXggOiAxO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDYWxjdWxhdGUgcmVsYXRpdmUgdmFsdWVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgVGFrZXMgdGhlIG9wZXJhdG9yIGFuZCB2YWx1ZSBmcm9tIGEgc3RyaW5nLCBpZSBcIis9NVwiLCBhbmQgYXBwbGllc1xuICAgICAgICAgICAgdG8gdGhlIGN1cnJlbnQgdmFsdWUgdG8gcmVzb2x2ZSBhIG5ldyB0YXJnZXQuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBSZWxhdGl2ZSB2YWx1ZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogTmV3IHZhbHVlXG4gICAgICAgICovXG4gICAgICAgIHJlbGF0aXZlVmFsdWU6IGZ1bmN0aW9uIChjdXJyZW50LCByZWwpIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IGN1cnJlbnQsXG4gICAgICAgICAgICAgICAgZXF1YXRpb24gPSByZWwuc3BsaXQoJz0nKSxcbiAgICAgICAgICAgICAgICBvcGVyYXRvciA9IGVxdWF0aW9uWzBdLFxuICAgICAgICAgICAgICAgIHNwbGl0VmFsID0gdXRpbHMuc3BsaXRWYWxVbml0KGVxdWF0aW9uWzFdKTtcblxuICAgICAgICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSArPSBzcGxpdFZhbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlIC09IHNwbGl0VmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgKj0gc3BsaXRWYWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSAvPSBzcGxpdFZhbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzcGxpdFZhbC51bml0KSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgKz0gc3BsaXRWYWwudW5pdDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICAgICAgfSxcbiAgICBcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybiB2YWx1ZSB3aXRoaW4gdGhlIHJhbmdlIG9mIGxvd2VyTGltaXQgYW5kIHVwcGVyTGltaXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBrZWVwIHdpdGhpbiByYW5nZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgbGltaXRlZCB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICAgICAgKi9cbiAgICAgICAgcmVzdHJpY3RlZDogZnVuY3Rpb24gKHZhbHVlLCBtaW4sIG1heCkge1xuICAgICAgICAgICAgdmFyIHJlc3RyaWN0ZWQgPSAobWluICE9PSB1bmRlZmluZWQpID8gTWF0aC5tYXgodmFsdWUsIG1pbikgOiB2YWx1ZTtcbiAgICAgICAgICAgIHJlc3RyaWN0ZWQgPSAobWF4ICE9PSB1bmRlZmluZWQpID8gTWF0aC5taW4ocmVzdHJpY3RlZCwgbWF4KSA6IHJlc3RyaWN0ZWQ7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcmVzdHJpY3RlZDtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiAgICAgICAgKi9cbiAgICAgICAgc3BlZWRQZXJGcmFtZTogZnVuY3Rpb24gKHhwcywgZnJhbWVEdXJhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIChpc051bSh4cHMpKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuICAgICAgICAqL1xuICAgICAgICBzcGVlZFBlclNlY29uZDogZnVuY3Rpb24gKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xuICAgICAgICB9LFxuICAgIFxuICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gICAgICAgICAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlLCBvciB1cHBlciBpZiBsaW1pdDIgbm90IHByb3ZpZGVkXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIChwcm9ncmVzcywgbGltaXRBLCBsaW1pdEIpIHtcbiAgICAgICAgICAgIHZhciBiSXNOdW0gPSAodHlwZW9mIGxpbWl0QiA9PT0gJ251bWJlcicpLFxuICAgICAgICAgICAgICAgIGZyb20gPSBiSXNOdW0gPyBsaW1pdEEgOiAwLFxuICAgICAgICAgICAgICAgIHRvID0gYklzTnVtID8gbGltaXRCIDogbGltaXRBO1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuICgtIHByb2dyZXNzICogZnJvbSkgKyAocHJvZ3Jlc3MgKiB0bykgKyBmcm9tOyBcbiAgICAgICAgfSxcbiAgICBcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEVhc2VkIHZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gICAgICAgICAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlLCBvciB1cHBlciBpZiBsaW1pdDIgbm90IHByb3ZpZGVkXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogRWFzaW5nIHRvIGFwcGx5IHRvIHZhbHVlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4gICAgICAgICovXG4gICAgICAgIHZhbHVlRWFzZWQ6IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2luZykge1xuICAgICAgICAgICAgdmFyIGVhc2VkUHJvZ3Jlc3MgPSBlYXNpbmcocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZShlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQ2FjaGluZyBmdW5jdGlvbnMgdXNlZCBtdWx0aXBsZSB0aW1lcyB0byByZWR1Y2UgZmlsZXNpemUgYW5kIGluY3JlYXNlIHBlcmZvcm1hbmNlXG4gICAgKi9cbiAgICBpc051bSA9IHV0aWxzLmlzTnVtLFxuICAgIGFic29sdXRlID0gTWF0aC5hYnM7XG4gICAgXG5tb2R1bGUuZXhwb3J0cyA9IGNhbGM7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvY2FsYy5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWVzLCB0ZXJtcywgZGVsaW1pdGVyLCBjaG9wKSB7XG4gICAgdmFyIGNvbWJpbmVkID0gJycsXG4gICAgICAgIGtleSA9ICcnLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG5cbiAgICBmb3IgKDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAga2V5ID0gdGVybXNbaV07XG5cbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBjb21iaW5lZCArPSB2YWx1ZXNba2V5XSArIGRlbGltaXRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaG9wKSB7XG4gICAgICAgIGNvbWJpbmVkID0gY29tYmluZWQuc2xpY2UoMCwgLWNob3ApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5lZDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgc3BsaXRDb21tYURlbGltaXRlZCA9IHJlcXVpcmUoJy4vc3BsaXQtY29tbWEtZGVsaW1pdGVkJyksXG4gICAgZnVuY3Rpb25CcmVhayA9IHJlcXVpcmUoJy4vZnVuY3Rpb24tYnJlYWsnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIHRlcm1zKSB7XG4gICAgdmFyIHNwbGl0VmFsdWUgPSB7fSxcbiAgICAgICAgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGgsXG4gICAgICAgIGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZnVuY3Rpb25CcmVhayh2YWx1ZSkpLFxuICAgICAgICBpID0gMDtcblxuICAgIGZvciAoOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgICBzcGxpdFZhbHVlW3Rlcm1zW2ldXSA9IChjb2xvcnNbaV0gIT09IHVuZGVmaW5lZCkgPyBjb2xvcnNbaV0gOiAxO1xuICAgIH1cblxuICAgIHJldHVybiBzcGxpdFZhbHVlO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJygnICsgdmFsdWUgKyAnKSc7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY29sb3I6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDI1NSxcbiAgICAgICAgcm91bmQ6IHRydWVcbiAgICB9LFxuICAgIG9wYWNpdHk6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDFcbiAgICB9LFxuICAgIHBlcmNlbnQ6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgdW5pdDogJyUnXG4gICAgfVxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGVmYXVsdC1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFggPSAnWCcsXG4gICAgWSA9ICdZJyxcbiAgICBBTFBIQSA9ICdBbHBoYScsXG5cbiAgICB0ZXJtcyA9IHtcbiAgICAgICAgY29sb3JzOiBbJ1JlZCcsICdHcmVlbicsICdCbHVlJywgQUxQSEFdLFxuICAgICAgICBwb3NpdGlvbnM6IFtYLCBZLCAnWiddLFxuICAgICAgICBkaW1lbnNpb25zOiBbJ1RvcCcsICdSaWdodCcsICdCb3R0b20nLCAnTGVmdCddLFxuICAgICAgICBzaGFkb3c6IFtYLCBZLCAnUmFkaXVzJywgJ1NwcmVhZCcsICdDb2xvciddLFxuICAgICAgICBoc2w6IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdXG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXJtcztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcbiAgICBVdGlsaXR5IGZ1bmN0aW9uc1xuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgcHJvdGVjdGVkUHJvcGVydGllcyA9IFsnc2NvcGUnLCAgJ2RvbSddLFxuICAgIFxuICAgIGlzUHJvdGVjdGVkID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gKHByb3RlY3RlZFByb3BlcnRpZXMuaW5kZXhPZihrZXkpICE9PSAtMSk7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4gICAgKi9cbiAgICB2YXJUeXBlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIC8qXG4gICAgICAgIEl0ZXJhdGUgb3ZlciBhbiBvYmplY3QgYW5kIGZpcmUgYSBjYWxsYmFjayBmb3IgZXZlcnkgaXRlbSBpbiBpdFxuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogUHJvcGVydGllc1xuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgdG8gZmlyZVxuICAgICovXG4gICAgZWFjaDogZnVuY3Rpb24gKHByb3BzLCBjYWxsYmFjaykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soa2V5LCBwcm9wc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSGFzIG9uZSBvYmplY3QgY2hhbmdlZCBmcm9tIHRoZSBvdGhlclxuICAgICAgICBcbiAgICAgICAgQ29tcGFyZXMgdGhlIHR3byBwcm92aWRlZCBpbnB1dHMgYW5kIHJldHVybnMgdHJ1ZSBpZiB0aGV5IGFyZSBkaWZmZXJlbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEJcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4gICAgKi9cbiAgICBoYXNDaGFuZ2VkOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlLFxuICAgICAgICAgICAga2V5ID0gJyc7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gYikge1xuICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gaGFzQ2hhbmdlZDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGEgbnVtYmVyP1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuICAgICovXG4gICAgaXNOdW06IGZ1bmN0aW9uIChudW0pIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgbnVtID09PSAnbnVtYmVyJyk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhbiBvYmplY3Q/XG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4gICAgKi9cbiAgICBpc09iajogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHRoaXMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuICAgICovXG4gICAgaXNGdW5jOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiAodmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nKTsgXG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhIHN0cmluZyA/IFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiAgICAqL1xuICAgIGlzU3RyaW5nOiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpOyBcbiAgICB9LFxuXG5cbiAgICAvKlxuICAgICAgICBJcyB0aGlzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSWYgdGhpcyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuICAgICovXG4gICAgaXNSZWxhdGl2ZVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDApO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYW4gYXJyYXkgPyBcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHRoaXMudmFyVHlwZSA9PT0gJ0FycmF5J1xuICAgICovXG4gICAgaXNBcnJheTogZnVuY3Rpb24gKGFycikge1xuICAgICAgICByZXR1cm4gKHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5Jyk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBDb3B5IG9iamVjdCBvciBhcnJheVxuICAgICAgICBcbiAgICAgICAgQ2hlY2tzIHdoZXRoZXIgYmFzZSBpcyBhbiBhcnJheSBvciBvYmplY3QgYW5kIG1ha2VzXG4gICAgICAgIGFwcHJvcHJpYXRlIGNvcHlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogQXJyYXkgb3Igb2JqZWN0IHRvIGNvcHlcbiAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBOZXcgY29weSBvZiBhcnJheSBvciBvYmplY3RcbiAgICAqL1xuICAgIGNvcHk6IGZ1bmN0aW9uIChiYXNlKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5pc0FycmF5KGJhc2UpKSA/IHRoaXMuY29weUFycmF5KGJhc2UpIDogdGhpcy5jb3B5T2JqZWN0KGJhc2UpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRGVlcCBjb3B5IGFuIG9iamVjdFxuICAgICAgICBcbiAgICAgICAgSXRlcmF0ZXMgb3ZlciBhbiBvYmplY3QgYW5kIGNyZWF0ZXMgYSBuZXcgY29weSBvZiBldmVyeSBpdGVtLFxuICAgICAgICBkZWVwIGNvcHlpbmcgaWYgaXQgZmluZHMgYW55IG9iamVjdHMvYXJyYXlzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byBjb3B5XG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogTmV3IGNvcHkgb2Ygb2JqZWN0XG4gICAgKi9cbiAgICBjb3B5T2JqZWN0OiBmdW5jdGlvbiAoYmFzZSkge1xuICAgICAgICB2YXIgbmV3T2JqZWN0ID0ge307XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYmFzZSkge1xuICAgICAgICAgICAgaWYgKGJhc2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gKHRoaXMuaXNPYmooYmFzZVtrZXldKSAmJiAhaXNQcm90ZWN0ZWQoa2V5KSkgPyB0aGlzLmNvcHkoYmFzZVtrZXldKSA6IGJhc2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld09iamVjdDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIERlZXAgY29weSBhbiBhcnJheVxuICAgICAgICBcbiAgICAgICAgTG9vcHMgdGhyb3VnaCBhbiBhcnJheSBhbmQgY3JlYXRlcyBhIG5ldyBjb3B5IG9mIGV2ZXJ5IGl0ZW0sXG4gICAgICAgIGRlZXAgY29weWluZyBpZiBpdCBmaW5kcyBhbnkgb2JqZWN0cy9hcnJheXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbYXJyYXldOiBBcnJheSB0byBjb3B5XG4gICAgICAgIEByZXR1cm4gW2FycmF5XTogTmV3IGNvcHkgb2YgYXJyYXlcbiAgICAqL1xuICAgIGNvcHlBcnJheTogZnVuY3Rpb24gKGJhc2UpIHtcbiAgICAgICAgdmFyIG5ld0FycmF5ID0gW10sXG4gICAgICAgICAgICBsZW5ndGggPSBiYXNlLmxlbmd0aCxcbiAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICBcbiAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV3QXJyYXlbaV0gPSAodGhpcy5pc09iaihiYXNlW2ldKSkgPyB0aGlzLmNvcHkoYmFzZVtpXSkgOiBiYXNlW2ldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBOb24tZGVzdHJ1Y3RpdmUgbWVyZ2Ugb2Ygb2JqZWN0IG9yIGFycmF5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byB1c2UgYXMgYmFzZVxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byBvdmVyd3JpdGUgYmFzZSB3aXRoXG4gICAgICAgIEByZXR1cm4gW2FycmF5IHx8IG9iamVjdF06IE5ldyBhcnJheSBvciBvYmplY3RcbiAgICAqL1xuICAgIG1lcmdlOiBmdW5jdGlvbiAoYmFzZSwgb3ZlcndyaXRlKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5pc0FycmF5KGJhc2UpKSA/IHRoaXMuY29weUFycmF5KG92ZXJ3cml0ZSkgOiB0aGlzLm1lcmdlT2JqZWN0KGJhc2UsIG92ZXJ3cml0ZSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBOb24tZGVzdHJ1Y3RpdmUgbWVyZ2Ugb2Ygb2JqZWN0XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byB1c2UgYXMgYmFzZVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byBvdmVyd3JpdGUgYmFzZSB3aXRoXG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE5ldyBvYmplY3RcbiAgICAqL1xuICAgIG1lcmdlT2JqZWN0OiBmdW5jdGlvbiAoYmFzZSwgb3ZlcndyaXRlKSB7XG4gICAgICAgIHZhciBoYXNCYXNlID0gdGhpcy5pc09iaihiYXNlKSxcbiAgICAgICAgICAgIG5ld09iamVjdCA9IGhhc0Jhc2UgPyB0aGlzLmNvcHkoYmFzZSkgOiB0aGlzLmNvcHkob3ZlcndyaXRlKSxcbiAgICAgICAgICAgIGtleSA9ICcnO1xuXG4gICAgICAgIGlmIChoYXNCYXNlKSB7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBvdmVyd3JpdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAob3ZlcndyaXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSAodGhpcy5pc09iaihvdmVyd3JpdGVba2V5XSkgJiYgIWlzUHJvdGVjdGVkKGtleSkpID8gdGhpcy5tZXJnZShiYXNlW2tleV0sIG92ZXJ3cml0ZVtrZXldKSA6IG92ZXJ3cml0ZVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgICAgICAgXG4gICAgICAgICAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgICAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiAgICAqL1xuICAgIHNwbGl0VmFsVW5pdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBzcGxpdFZhbCA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbFsxXSksXG4gICAgICAgICAgICB1bml0OiAgc3BsaXRWYWxbMl1cbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4gICAgKi9cbiAgICBzdGVwUHJvZ3Jlc3M6IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RlcHMpIHtcbiAgICAgICAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSksXG4gICAgICAgICAgICB0YXJnZXQgPSAxIC0gKDEgLyBzdGVwcyksXG4gICAgICAgICAgICBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuICAgICovXG4gICAgY3VycmVudFRpbWU6IGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiKSA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfVxuICAgIFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgPyB2YWx1ZS5zcGxpdCgnICcpIDogW3ZhbHVlXTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBTVFJPS0UgPSAnc3Ryb2tlJyxcbiAgICBEQVNIID0gU1RST0tFICsgJy1kYXNoJywgLy8gc3Rva2Utd2lkdGhcbiAgICBEQVNIX0FSUkFZID0gREFTSCArICdhcnJheSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG9wYWNpdHk6IFNUUk9LRSArICctb3BhY2l0eScsXG4gICAgd2lkdGg6IFNUUk9LRSArICctd2lkdGgnLFxuICAgIG9mZnNldDogREFTSCArICdvZmZzZXQnLFxuICAgIGxlbmd0aDogREFTSF9BUlJBWSxcbiAgICBzcGFjaW5nOiBEQVNIX0FSUkFZLFxuICAgIG1pdGVybGltaXQ6IFNUUk9LRSArICctbWl0ZXJsaW1pdCdcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yb2xlcy9wYXRoL21hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHRyYW5zZm9ybURpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1kaWN0aW9uYXJ5JyksXG4gICAgdHJhbnNmb3JtUHJvcHMgPSB0cmFuc2Zvcm1EaWN0aW9uYXJ5LnByb3BzLFxuXG4gICAgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG91dHB1dCkge1xuICAgIHZhciBjc3MgPSB7fSxcbiAgICAgICAga2V5ID0gJycsXG4gICAgICAgIHRyYW5zZm9ybSA9ICcnLFxuICAgICAgICB0cmFuc2Zvcm1IYXNaID0gZmFsc2UsXG4gICAgICAgIHJ1bGUgPSAnJztcbiAgICAgICAgXG4gICAgLy8gTG9vcCB0aHJvdWdoIG91dHB1dCwgY2hlY2sgZm9yIHRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgZm9yIChrZXkgaW4gb3V0cHV0KSB7XG4gICAgICAgIGlmIChvdXRwdXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcnVsZSA9IG91dHB1dFtrZXldO1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHRyYW5zZm9ybSBwcm9wZXJ0eSwgYWRkIHRvIHRyYW5zZm9ybSBzdHJpbmdcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtICs9IGtleSArICcoJyArIHJ1bGUgKyAnKSc7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtSGFzWiA9IChrZXkgPT09IFRSQU5TTEFURV9aKSA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBPciBqdXN0IGFzc2lnbiBkaXJlY3RseVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjc3Nba2V5XSA9IHJ1bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBoYXZlIHRyYW5zZm9ybSBwcm9wZXJ0aWVzLCBhZGQgdHJhbnNsYXRlWlxuICAgIGlmICh0cmFuc2Zvcm0gIT09ICcnKSB7XG4gICAgICAgIGlmICghdHJhbnNmb3JtSGFzWikge1xuICAgICAgICAgICAgdHJhbnNmb3JtICs9ICcgJyArIFRSQU5TTEFURV9aICsgJygwcHgpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNzcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yb2xlcy9jc3MvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gICAgeTogVFJBTlNMQVRFICsgJ1knLFxuICAgIHo6IFRSQU5TTEFURSArICdaJ1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvbGVzL2Nzcy9tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIENPTE9SID0gJ2NvbG9yJyxcbiAgICBQT1NJVElPTlMgPSAncG9zaXRpb25zJyxcbiAgICBESU1FTlNJT05TID0gJ2RpbWVuc2lvbnMnLFxuICAgIFNIQURPVyA9ICdzaGFkb3cnLFxuICAgIEFOR0xFID0gJ2FuZ2xlJyxcbiAgICBBTFBIQSA9ICdhbHBoYScsXG4gICAgUFggPSAncHgnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBDb2xvciBwcm9wZXJ0aWVzXG4gICAgY29sb3I6IENPTE9SLFxuICAgIGJhY2tncm91bmRDb2xvcjogQ09MT1IsXG4gICAgb3V0bGluZUNvbG9yOiBDT0xPUixcbiAgICBmaWxsOiBDT0xPUixcbiAgICBzdHJva2U6IENPTE9SLFxuICAgIC8vIEJvcmRlclxuICAgIGJvcmRlckNvbG9yOiBDT0xPUixcbiAgICBib3JkZXJUb3BDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IENPTE9SLFxuICAgIGJvcmRlckxlZnRDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyUmFkaXVzOiBQWCxcbiAgICAvLyBEaW1lbnNpb25zXG4gICAgbWFyZ2luOiBESU1FTlNJT05TLFxuICAgIHBhZGRpbmc6IERJTUVOU0lPTlMsXG4gICAgd2lkdGg6IFBYLFxuICAgIGhlaWdodDogUFgsICAgIFxuICAgIC8vIFBvc2l0aW9uc1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogUE9TSVRJT05TLFxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiBQT1NJVElPTlMsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBQT1NJVElPTlMsICAgIFxuICAgIC8vIFNoYWRvd3NcbiAgICB0ZXh0U2hhZG93OiBTSEFET1csXG4gICAgYm94U2hhZG93OiBTSEFET1csICAgIFxuICAgIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgcm90YXRlOiBBTkdMRSxcbiAgICByb3RhdGVYOiBBTkdMRSxcbiAgICByb3RhdGVZOiBBTkdMRSxcbiAgICByb3RhdGVaOiBBTkdMRSxcbiAgICBza2V3WDogQU5HTEUsXG4gICAgc2tld1k6IEFOR0xFLFxuICAgIHRyYW5zbGF0ZVg6IFBYLFxuICAgIHRyYW5zbGF0ZVk6IFBYLFxuICAgIHRyYW5zbGF0ZVo6IFBYLFxuICAgIHBlcnNwZWN0aXZlOiBQWCxcbiAgICBvcGFjaXR5OiBBTFBIQVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvbGVzL2Nzcy90eXBlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfTtcblxuUXVldWUucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8qXG4gICAgICAgIEFkZCBhIHNldCBvZiBhcmd1bWVudHMgdG8gcXVldWVcbiAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnF1ZXVlLnB1c2goW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBuZXh0IHNldCBvZiBhcmd1bWVudHMgZnJvbSBxdWV1ZVxuICAgICovXG4gICAgbmV4dDogZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgcXVldWUgPSB0aGlzLnF1ZXVlLFxuICAgICAgICAgICAgcmV0dXJuVmFsID0gZmFsc2UsXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICBcbiAgICAgICAgZGlyZWN0aW9uID0gKGFyZ3VtZW50cy5sZW5ndGgpID8gZGlyZWN0aW9uIDogMTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIG91ciBpbmRleCBpcyBiZXR3ZWVuIDAgYW5kIHRoZSBxdWV1ZSBsZW5ndGgsIHJldHVybiB0aGF0IGl0ZW1cbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVyblZhbCA9IHF1ZXVlW2luZGV4XTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpbmRleCArIGRpcmVjdGlvbjtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIGNsZWFyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXR1cm5WYWw7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFJlcGxhY2UgcXVldWUgd2l0aCBlbXB0eSBhcnJheVxuICAgICovXG4gICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL1F1ZXVlLmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdmFsdWVUeXBlTWFuYWdlciA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL21hbmFnZXInKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICBlYWNoID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJykuZWFjaCxcblxuICAgIGNyZWF0ZU1hcHBlciA9IGZ1bmN0aW9uIChyb2xlLCBtYXBwZWRWYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuYW1lLCB2YWwpIHtcbiAgICAgICAgICAgICAgICBtYXBwZWRWYWx1ZXNbcm9sZS5tYXAobmFtZSldID0gdmFsO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICB1cGRhdGUgPSBmdW5jdGlvbiAoZnJhbWVzdGFtcCwgZnJhbWVEdXJhdGlvbikge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzLFxuICAgICAgICAgICAgdmFsdWVzID0gdGhpcy52YWx1ZXMsXG4gICAgICAgICAgICBhY3Rpb24gPSB0aGlzLmFjdGlvbixcbiAgICAgICAgICAgIHZhbHVlQWN0aW9uID0gYWN0aW9uLFxuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgbnVtQWN0aXZlVmFsdWVzID0gdGhpcy5vcmRlci5sZW5ndGgsXG4gICAgICAgICAgICBudW1BY3RpdmVQYXJlbnRzID0gdGhpcy5wYXJlbnRPcmRlci5sZW5ndGgsXG4gICAgICAgICAgICBudW1Sb2xlcyA9IHRoaXMucm9sZXMubGVuZ3RoLFxuICAgICAgICAgICAga2V5ID0gJycsXG4gICAgICAgICAgICB2YWx1ZSA9IHt9LFxuICAgICAgICAgICAgbWFwcGVkVmFsdWVzID0ge30sXG4gICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSAwLFxuICAgICAgICAgICAgb3V0cHV0VmFsdWUgPSAwLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICByb2xlO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBJbnB1dCBhbmQgYXR0YWNoIG5ldyB2YWx1ZXMgdG8gc3RhdGVcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgICAgICAgIHN0YXRlLmlucHV0ID0gdGhpcy5pbnB1dC5vbkZyYW1lKGZyYW1lc3RhbXApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIEFjdGlvbiBpbnB1dFxuICAgICAgICBpZiAoYWN0aW9uLm9uRnJhbWVTdGFydCAmJiBhY3Rpb24ub25GcmFtZVN0YXJ0LmNhbGwodGhpcywgZnJhbWVEdXJhdGlvbikgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIG9uU3RhcnQgaWYgZmlyc3QgZnJhbWVcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RGcmFtZSkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bVJvbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICByb2xlID0gdGhpcy5yb2xlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAocm9sZS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICByb2xlLnN0YXJ0LmNhbGwoYWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSB2YWx1ZXNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bUFjdGl2ZVZhbHVlczsgaSsrKSB7XG4gICAgICAgICAgICAvLyBHZXQgdmFsdWUgYW5kIGtleVxuICAgICAgICAgICAga2V5ID0gdGhpcy5vcmRlcltpXTtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIExvYWQgdmFsdWUtc3BlY2lmaWMgYWN0aW9uXG4gICAgICAgICAgICB2YWx1ZUFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgICAgIC8vdmFsdWVBY3Rpb24gPSB2YWx1ZS5saW5rID8gYWN0aW9uTWFuYWdlci5saW5rIDogYWN0aW9uO1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgbmV3IHZhbHVlXG4gICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSB2YWx1ZUFjdGlvbi5wcm9jZXNzLmNhbGwodGhpcywgdmFsdWUsIGtleSwgZnJhbWVEdXJhdGlvbik7XG5cbiAgICAgICAgICAgIC8vIExpbWl0IGlmIHJhbmdlXG4gICAgICAgICAgICBpZiAodmFsdWVBY3Rpb24ubGltaXQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSB2YWx1ZUFjdGlvbi5saW1pdCh1cGRhdGVkVmFsdWUsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUm91bmQgdmFsdWUgaWYgcm91bmQgc2V0IHRvIHRydWVcbiAgICAgICAgICAgIGlmICh2YWx1ZS5yb3VuZCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IE1hdGgucm91bmQodXBkYXRlZFZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIGNoYW5nZSBmcm9tIHByZXZpb3VzIGZyYW1lXG4gICAgICAgICAgICB2YWx1ZS5mcmFtZUNoYW5nZSA9IHVwZGF0ZWRWYWx1ZSAtIHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB2ZWxvY2l0eSBpZiBBY3Rpb24gaGFzbid0IGFscmVhZHlcbiAgICAgICAgICAgIGlmICghdmFsdWVBY3Rpb24uY2FsY3VsYXRlc1ZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSBjYWxjLnNwZWVkUGVyU2Vjb25kKHZhbHVlLmZyYW1lQ2hhbmdlLCBmcmFtZUR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIGN1cnJlbnQgc3BlZWRcbiAgICAgICAgICAgIHZhbHVlLnNwZWVkID0gTWF0aC5hYnModmFsdWUudmVsb2NpdHkpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBjaGFuZ2VkIGFuZCB1cGRhdGVcbiAgICAgICAgICAgIGlmICh2YWx1ZS5jdXJyZW50ICE9IHVwZGF0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCBjdXJyZW50XG4gICAgICAgICAgICB0aGlzLnZhbHVlc1trZXldLmN1cnJlbnQgPSB1cGRhdGVkVmFsdWU7XG4gICAgICAgICAgICBvdXRwdXRWYWx1ZSA9ICh2YWx1ZS51bml0KSA/IHVwZGF0ZWRWYWx1ZSArIHZhbHVlLnVuaXQgOiB1cGRhdGVkVmFsdWU7XG5cbiAgICAgICAgICAgIC8vIFB1dCB2YWx1ZSBpbiBzdGF0ZSBpZiBubyBwYXJlbnQgdmFsdWVcbiAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudmFsdWVzW2tleV0gPSBvdXRwdXRWYWx1ZTtcblxuICAgICAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudCBzdGF0ZSwgdG8gYmUgY29tYmluZWRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGVbdmFsdWUucGFyZW50XSA9IHN0YXRlW3ZhbHVlLnBhcmVudF0gfHwge307XG4gICAgICAgICAgICAgICAgc3RhdGVbdmFsdWUucGFyZW50XVt2YWx1ZS5wcm9wTmFtZV0gPSBvdXRwdXRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWVzIGZyb20gY2FsY3VsYXRlZCBjaGlsZHJlblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtQWN0aXZlUGFyZW50czsgaSsrKSB7XG4gICAgICAgICAgICBrZXkgPSB0aGlzLnBhcmVudE9yZGVyW2ldO1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlIGN1cnJlbnQgcHJvcGVydHlcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZVR5cGVNYW5hZ2VyW3ZhbHVlLnR5cGVdLmNvbWJpbmUoc3RhdGVba2V5XSk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBzdGF0ZVxuICAgICAgICAgICAgc3RhdGUudmFsdWVzW3ZhbHVlLm5hbWVdID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgYGZyYW1lYCBhbmQgYHVwZGF0ZWAgY2FsbGJhY2tzXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1Sb2xlczsgaSsrKSB7XG4gICAgICAgICAgICByb2xlID0gdGhpcy5yb2xlc1tpXTtcbiAgICAgICAgICAgIG1hcHBlZFZhbHVlcyA9IHt9O1xuXG4gICAgICAgICAgICBlYWNoKHRoaXMuc3RhdGUudmFsdWVzLCBjcmVhdGVNYXBwZXIocm9sZSwgbWFwcGVkVmFsdWVzKSk7XG5cbiAgICAgICAgICAgIGlmIChyb2xlLmZyYW1lKSB7XG4gICAgICAgICAgICAgICAgcm9sZS5mcmFtZS5jYWxsKGFjdG9yLCBtYXBwZWRWYWx1ZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocm9sZS51cGRhdGUgJiYgKGFjdG9yLmhhc0NoYW5nZWQgfHwgYWN0b3IuZmlyc3RGcmFtZSkpIHtcbiAgICAgICAgICAgICAgICByb2xlLnVwZGF0ZS5jYWxsKGFjdG9yLCBtYXBwZWRWYWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyZSBvbkVuZCBpZiB0aGlzIEFjdGlvbiBoYXMgZW5kZWRcbiAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmUgJiYgYWN0aW9uLmhhc0VuZGVkICYmIGFjdGlvbi5oYXNFbmRlZC5jYWxsKHRoaXMsIHRoaXMuaGFzQ2hhbmdlZCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gRmlyZSBgY29tcGxldGVgIGNhbGxiYWNrXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtUm9sZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIHJvbGUgPSB0aGlzLnJvbGVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChyb2xlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGUuY29tcGxldGUuY2FsbChhY3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBpcyBhIHBsYXkgYWN0aW9uLCBhbmQgaXMgbm90IGFjdGl2ZSwgY2hlY2sgbmV4dCBhY3Rpb25cbiAgICAgICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSAmJiB0aGlzLmFjdGlvbiA9PT0gJ3BsYXknICYmIHRoaXMubmV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpcnN0RnJhbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mcmFtZXN0YW1wID0gZnJhbWVzdGFtcDtcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdG9yL3VwZGF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgaXNOdW0gPSB1dGlscy5pc051bSxcbiAgICB2YWx1ZVR5cGVzTWFuYWdlciA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL21hbmFnZXInKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaCxcblxuICAgIG51bWVyaWNhbFZhbHVlcyA9IFsnY3VycmVudCcsICd0bycsICdpbml0JywgJ21pbicsICdtYXgnLCAndmVsb2NpdHknLCAnZnJpY3Rpb24nLCAnc3ByaW5nJ10sXG4gICAgbnVtTnVtZXJpY2FsVmFsdWVzID0gbnVtZXJpY2FsVmFsdWVzLmxlbmd0aCxcblxuICAgIGNoZWNrUm9sZXMgPSBmdW5jdGlvbiAobmFtZSwgcm9sZXMpIHtcbiAgICAgICAgdmFyIHZhbHVlVHlwZTtcblxuICAgICAgICBlYWNoKHJvbGVzLCBmdW5jdGlvbiAoa2V5LCByb2xlKSB7XG4gICAgICAgICAgICBpZiAocm9sZS5fdHlwZU1hcCkge1xuICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHJvbGUuX3R5cGVNYXBbcm9sZS5tYXAobmFtZSldIHx8IHZhbHVlVHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlVHlwZTtcbiAgICB9LFxuXG4gICAgY2hlY2tOdW1lcmljYWxWYWx1ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAobnVtZXJpY2FsVmFsdWVzLmluZGV4T2YobmFtZSkgPiAtMSk7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLypcbiAgICAgICAgUGVyZm9ybSBvcGVyYXRpb24gb24gc2V0IG9mIHZhbHVlc1xuICAgICAgICBcbiAgICAgICAgQHBhcm1hIFtzdHJpbmddOiBOYW1lIG9mIG9wZXJhdGlvblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIG9iamVjdFxuICAgICovXG4gICAgYWxsOiBmdW5jdGlvbiAob3AsIHZhbHVlcykge1xuICAgICAgICB2YXIgdmFsdWVPcHMgPSB0aGlzO1xuXG4gICAgICAgIGVhY2godmFsdWVzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWVPcHNbb3BdKHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFJlc2V0IHRoZSB2YWx1ZSBjdXJyZW50IHRvIGl0cyBvcmlnaW5cblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIG9iamVjdFxuICAgICovXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnJldGFyZ2V0KHZhbHVlKTtcbiAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLm9yaWdpbjtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgU2V0IHZhbHVlIG9yaWdpbiBwcm9wZXJ0eSB0byBjdXJyZW50IHZhbHVlXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIG9iamVjdFxuICAgICovXG4gICAgcmVzZXRPcmlnaW46IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZS5vcmlnaW4gPSB2YWx1ZS5jdXJyZW50O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTZXQgdmFsdWUgdG8gcHJvcGVydHkgYmFjayB0byB0YXJnZXRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogVmFsdWUgb2JqZWN0XG4gICAgKi9cbiAgICByZXRhcmdldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlLnRvID0gdmFsdWUudGFyZ2V0O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBTd2FwIHZhbHVlIHRvIGFuZCBvcmlnaW4gcHJvcGVydHlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogVmFsdWUgb2JqZWN0XG4gICAgKi9cbiAgICBmbGlwOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIG5ld09yaWdpbiA9ICh2YWx1ZS50YXJnZXQgIT09IHVuZGVmaW5lZCkgPyB2YWx1ZS50YXJnZXQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgIHZhbHVlLnRhcmdldCA9IHZhbHVlLnRvID0gdmFsdWUub3JpZ2luO1xuICAgICAgICB2YWx1ZS5vcmlnaW4gPSBuZXdPcmlnaW47XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFJldHVybnMgYW4gaW5pdGlhbCB2YWx1ZSBzdGF0ZVxuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBJbml0aWFsIGN1cnJlbnRcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogRGVmYXVsdCB2YWx1ZSBzdGF0ZVxuICAgICovXG4gICAgaW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoc3RhcnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBjdXJyZW50OiBzdGFydCB8fCAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogQ2hhbmdlIHBlciBzZWNvbmRcbiAgICAgICAgICAgIHNwZWVkOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogQ2hhbmdlIHBlciBzZWNvbmQgcGx1cyBkaXJlY3Rpb24gKGllIGNhbiBiZSBuZWdhdGl2ZSlcbiAgICAgICAgICAgIHZlbG9jaXR5OiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogQW1vdW50IHZhbHVlIGhhcyBjaGFuZ2VkIGluIHRoZSBtb3N0IHJlY2VudCBmcmFtZVxuICAgICAgICAgICAgZnJhbWVDaGFuZ2U6IDBcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgdmFsdWUgaW50byBzdWItdmFsdWVzXG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHZhbHVlXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogQmFzZSB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgIEBwYXJhbSBbRWxlbWVtdF1cbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIGFjdG9yLCB2YWx1ZVR5cGUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWVzID0ge30sXG4gICAgICAgICAgICBzcGxpdFByb3BlcnR5ID0ge30sXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSAnJyxcbiAgICAgICAgICAgIGtleSA9ICcnLFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBudW1OdW1lcmljYWxWYWx1ZXM7IGkrKykge1xuICAgICAgICAgICAgcHJvcGVydHlOYW1lID0gbnVtZXJpY2FsVmFsdWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmModmFsdWVbcHJvcGVydHlOYW1lXSkgJiYgY2hlY2tOdW1lcmljYWxWYWx1ZShwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlW3Byb3BlcnR5TmFtZV0gPSB2YWx1ZVtwcm9wZXJ0eU5hbWVdLmNhbGwoYWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNwbGl0UHJvcGVydHkgPSB2YWx1ZVR5cGUuc3BsaXQodmFsdWVbcHJvcGVydHlOYW1lXSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBc3NpZ24gcHJvcGVydGllcyB0byBlYWNoIG5ldyB2YWx1ZVxuICAgICAgICAgICAgICAgIGZvciAoa2V5IGluIHNwbGl0UHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0UHJvcGVydHkuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyB2YWx1ZSBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGxpdFZhbHVlc1trZXldID0gc3BsaXRWYWx1ZXNba2V5XSB8fCB1dGlscy5jb3B5KHZhbHVlVHlwZXNNYW5hZ2VyLmRlZmF1bHRQcm9wcyh2YWx1ZS50eXBlLCBrZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVzW2tleV1bcHJvcGVydHlOYW1lXSA9IHNwbGl0UHJvcGVydHlba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BsaXRVbml0KHNwbGl0VmFsdWVzW2tleV1bcHJvcGVydHlOYW1lXSwgc3BsaXRWYWx1ZXNba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZXM7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFNwbGl0IHZhbHVlIGludG8gbnVtYmVyIGFuZCB1bml0LCBzZXQgdW5pdCB0byB2YWx1ZSBpZiBwcmVzZW50XG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQcm9wZXJ0eSB0byBzcGxpdFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIG9iamVjdCB0byBzYXZlIHVuaXQgdG9cbiAgICAqL1xuICAgIHNwbGl0VW5pdDogZnVuY3Rpb24gKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsID0gcHJvcGVydHksXG4gICAgICAgICAgICBzcGxpdFVuaXRWYWx1ZTtcblxuICAgICAgICAvLyBDaGVjayBmb3IgdW5pdCBwcm9wZXJ0eVxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocHJvcGVydHkpKSB7XG4gICAgICAgICAgICBzcGxpdFVuaXRWYWx1ZSA9IHV0aWxzLnNwbGl0VmFsVW5pdChwcm9wZXJ0eSk7XG5cbiAgICAgICAgICAgIGlmICghaXNOYU4oc3BsaXRVbml0VmFsdWUudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsID0gc3BsaXRVbml0VmFsdWUudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRVbml0VmFsdWUudW5pdCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS51bml0ID0gc3BsaXRVbml0VmFsdWUudW5pdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBSZXNvbHZlIHByb3BlcnR5XG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHZhbHVlXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nIHx8IG51bWJlciB8fCBmdW5jdGlvbl06IFByb3BlcnR5XG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogUGFyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbYWN0b3JdOiBQYXJlbnQgYWN0b3JcbiAgICAqL1xuICAgIHJlc29sdmU6IGZ1bmN0aW9uIChuYW1lLCBwcm9wZXJ0eSwgdmFsdWUsIGFjdG9yKSB7XG4gICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSB2YWx1ZS5jdXJyZW50IHx8IDAsXG4gICAgICAgICAgICBpc051bWVyaWNhbFZhbHVlID0gY2hlY2tOdW1lcmljYWxWYWx1ZShuYW1lKTtcblxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgZnVuY3Rpb24sIHJlc29sdmVcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuYyhwcm9wZXJ0eSkgJiYgaXNOdW1lcmljYWxWYWx1ZSkge1xuICAgICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eS5jYWxsKGFjdG9yLCBjdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHN0cmluZywgY2hlY2sgZm9yIHJlbGF0aXZlIHZhbHVlcyBhbmQgdW5pdHNcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHByb3BlcnR5KSkge1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHJlbGF0aXZlIHZhbHVlIChpZSAnKz0xMCcpXG4gICAgICAgICAgICBpZiAocHJvcGVydHkuaW5kZXhPZignPScpID4gMCkge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gY2FsYy5yZWxhdGl2ZVZhbHVlKGN1cnJlbnRWYWx1ZSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgdW5pdCBpZiBzaG91bGQgYmUgbnVtZXJpY2FsIHByb3BlcnR5XG4gICAgICAgICAgICBpZiAoaXNOdW1lcmljYWxWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BsaXRVbml0KHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgbnVtZXJpY2FsIHZhbHVlLCBjb2VyY2VcbiAgICAgICAgaWYgKGlzTnVtZXJpY2FsVmFsdWUpIHtcbiAgICAgICAgICAgIHByb3BlcnR5ID0gcGFyc2VGbG9hdChwcm9wZXJ0eSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFByb2Nlc3MgbmV3IHZhbHVlc1xuICAgICovXG4gICAgcHJlcHJvY2VzczogZnVuY3Rpb24gKHZhbHVlcywgYWN0b3IsIGRlZmF1bHRWYWx1ZVByb3ApIHtcbiAgICAgICAgdmFyIHByZXByb2Nlc3NlZFZhbHVlcyA9IHt9LFxuICAgICAgICAgICAgdmFsdWUgPSB7fSxcbiAgICAgICAgICAgIHNwbGl0VmFsdWUgPSB7fSxcbiAgICAgICAgICAgIGNoaWxkVmFsdWUgPSB7fSxcbiAgICAgICAgICAgIHR5cGUgPSB7fSxcbiAgICAgICAgICAgIGV4aXN0aW5nVmFsdWUgPSB7fSxcbiAgICAgICAgICAgIGlzVmFsdWVPYmogPSBmYWxzZSxcbiAgICAgICAgICAgIGtleSA9ICcnLFxuICAgICAgICAgICAgcHJvcEtleSA9ICcnO1xuXG4gICAgICAgIGRlZmF1bHRWYWx1ZVByb3AgPSBkZWZhdWx0VmFsdWVQcm9wIHx8ICdjdXJyZW50JztcblxuICAgICAgICBmb3IgKGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXG4gICAgICAgICAgICAgICAgaXNWYWx1ZU9iaiA9IHV0aWxzLmlzT2JqKHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IChpc1ZhbHVlT2JqKSA/IHZhbHVlc1trZXldIDoge307XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdWYWx1ZSA9IGFjdG9yLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAgICAgdmFsdWUubmFtZSA9IGtleTtcblxuICAgICAgICAgICAgICAgIGlmICghaXNWYWx1ZU9iaikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVtkZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgZG9lc24ndCBoYXZlIGEgc3BlY2lhbCB0eXBlLCBjaGVjayBmb3Igb25lXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGV4aXN0aW5nIHZhbHVlIHdpdGggdGhpcyBrZXlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVmFsdWUgJiYgZXhpc3RpbmdWYWx1ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS50eXBlID0gZXhpc3RpbmdWYWx1ZS50eXBlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gT3IgY2hlY2sgcm91dGUgdHlwZW1hcHNcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnR5cGUgPSBjaGVja1JvbGVzKGtleSwgYWN0b3Iucm9sZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGNoZWNrIGJ5IHJ1bm5pbmcgdGVzdHMgaWYgdGhpcyBpcyBhIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZS50eXBlICYmIHV0aWxzLmlzU3RyaW5nKHZhbHVlW2RlZmF1bHRWYWx1ZVByb3BdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnR5cGUgPSB2YWx1ZVR5cGVzTWFuYWdlci50ZXN0KHZhbHVlW2RlZmF1bHRWYWx1ZVByb3BdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNldCB2YWx1ZVxuICAgICAgICAgICAgICAgIHByZXByb2Nlc3NlZFZhbHVlc1trZXldID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBwcm9jZXNzIGhhcyB0eXBlLCBzcGxpdCBvciBhc3NpZ24gZGVmYXVsdCBwcm9wc1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSB2YWx1ZVR5cGVzTWFuYWdlclt2YWx1ZS50eXBlXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGhhcyBhIHNwbGl0dGVyIGZ1bmN0aW9uLCBzcGxpdFxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZS5zcGxpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuY2hpbGRyZW4gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWUgPSB0aGlzLnNwbGl0KGtleSwgdmFsdWUsIGFjdG9yLCB0eXBlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChwcm9wS2V5IGluIHNwbGl0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlID0gdXRpbHMubWVyZ2UodmFsdWUsIHNwbGl0VmFsdWVbcHJvcEtleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlLnBhcmVudCA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZS5uYW1lID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlLnByb3BOYW1lID0gcHJvcEtleTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNoaWxkVmFsdWUudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNoaWxkVmFsdWUuY2hpbGRyZW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlcHJvY2Vzc2VkVmFsdWVzW2tleSArIHByb3BLZXldID0gY2hpbGRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwcm9jZXNzZWRWYWx1ZXNba2V5XSA9IHV0aWxzLm1lcmdlKHZhbHVlVHlwZXNNYW5hZ2VyLmRlZmF1bHRQcm9wcyh2YWx1ZS50eXBlLCBrZXkpLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJlcHJvY2Vzc2VkVmFsdWVzO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBQcm9jZXNzIG5ldyB2YWx1ZXNcbiAgICAqL1xuICAgIHByb2Nlc3M6IGZ1bmN0aW9uICh2YWx1ZXMsIGFjdG9yLCBkZWZhdWx0VmFsdWVQcm9wKSB7XG4gICAgICAgIHZhciBwcmVwcm9jZXNzZWRWYWx1ZXMgPSB0aGlzLnByZXByb2Nlc3ModmFsdWVzLCBhY3RvciwgZGVmYXVsdFZhbHVlUHJvcCksXG4gICAgICAgICAgICBrZXkgPSAnJyxcbiAgICAgICAgICAgIHByb3BLZXkgPSAnJyxcbiAgICAgICAgICAgIHByZXByb2Nlc3NlZFZhbHVlID0ge30sXG4gICAgICAgICAgICB0aGlzVmFsdWUgPSB7fSxcbiAgICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IHt9LFxuICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPSBmYWxzZSxcbiAgICAgICAgICAgIHByb3A7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gcHJlcHJvY2Vzc2VkVmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAocHJlcHJvY2Vzc2VkVmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBwcmVwcm9jZXNzZWRWYWx1ZSA9IHByZXByb2Nlc3NlZFZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIHRoaXNWYWx1ZSA9IGFjdG9yLnZhbHVlc1trZXldIHx8IHRoaXMuaW5pdGlhbFN0YXRlKHRoaXMucmVzb2x2ZSgnaW5pdCcsIHByZXByb2Nlc3NlZFZhbHVlLmluaXQsIHt9LCBhY3RvcikpO1xuICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID0gKHByZXByb2Nlc3NlZFZhbHVlLmNoaWxkcmVuICE9PSB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIHRoaXNWYWx1ZS5hY3Rpb24gPSBwcmVwcm9jZXNzZWRWYWx1ZS5saW5rID8gJ2xpbmsnIDogYWN0b3IuYWN0aW9uO1xuICAgICAgICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IGFjdG9yLmFjdGlvbi5nZXREZWZhdWx0VmFsdWUoKTtcblxuICAgICAgICAgICAgICAgIC8vIEluaGVyaXQgcHJvcGVydGllcyBmcm9tIEFjdG9yXG4gICAgICAgICAgICAgICAgZm9yIChwcm9wS2V5IGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdFByb3BzLmhhc093blByb3BlcnR5KHByb3BLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzVmFsdWVbcHJvcEtleV0gPSAoYWN0b3IuaGFzT3duUHJvcGVydHkocHJvcEtleSkpID8gYWN0b3JbcHJvcEtleV0gOiBkZWZhdWx0UHJvcHNbcHJvcEtleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHByb3BlcnRpZXMgYW5kIHJlc29sdmVcbiAgICAgICAgICAgICAgICBmb3IgKHByb3BLZXkgaW4gcHJlcHJvY2Vzc2VkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXByb2Nlc3NlZFZhbHVlLmhhc093blByb3BlcnR5KHByb3BLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wID0gcHJlcHJvY2Vzc2VkVmFsdWVbcHJvcEtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBwcm9wZXJ0eSBpcyAqbm90KiB1bmRlZmluZWQgb3IgYSBudW1iZXIsIHJlc29sdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wICE9PSB1bmRlZmluZWQgJiYgIWlzTnVtKHByb3ApICYmICFoYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3AgPSB0aGlzLnJlc29sdmUocHJvcEtleSwgcHJvcCwgdGhpc1ZhbHVlLCBhY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNWYWx1ZVtwcm9wS2V5XSA9IHByb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgaW50ZXJuYWwgdGFyZ2V0IGlmIHRoaXMgcHJvcGVydHkgaXMgJ3RvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BLZXkgPT09ICd0bycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzVmFsdWUudGFyZ2V0ID0gdGhpc1ZhbHVlLnRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpc1ZhbHVlLm9yaWdpbiA9IHRoaXNWYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIHRoaXNWYWx1ZS5oYXNSYW5nZSA9IChpc051bSh0aGlzVmFsdWUubWluKSAmJiBpc051bSh0aGlzVmFsdWUubWF4KSkgPyB0cnVlICA6IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgYWN0b3IudmFsdWVzW2tleV0gPSB0aGlzVmFsdWU7XG4gICAgICAgICAgICAgICAgYWN0b3IudXBkYXRlT3JkZXIoa2V5LCB1dGlscy5pc1N0cmluZyh0aGlzVmFsdWUubGluayksIGhhc0NoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rvci92YWx1ZS1vcGVyYXRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBSb2xlID0gcmVxdWlyZSgnLi9Sb2xlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFJvbGUoe1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5pdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5vblN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZnJhbWU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5vbkZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm9uRnJhbWUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLm9uVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcm9sZXMvZGVmYXVsdFJvbGUuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB0aGVMb29wID0gcmVxdWlyZSgnLi9sb29wLmpzJyksXG4gICAgUHJvY2Vzc01hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSWRzID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZlUHJvY2Vzc2VzID0ge307XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlID0gW107XG4gICAgICAgIHRoZUxvb3Auc2V0Q2FsbGJhY2sodGhpcywgdGhpcy5maXJlQWN0aXZlKTtcbiAgICB9O1xuICAgIFxuUHJvY2Vzc01hbmFnZXIucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8qXG4gICAgICAgIFtpbnRdOiBVc2VkIGZvciBwcm9jZXNzIElEXG4gICAgKi9cbiAgICBwcm9jZXNzQ291bnRlcjogMCxcbiAgICBcbiAgICAvKlxuICAgICAgICBbaW50XTogTnVtYmVyIG9mIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICAqL1xuICAgIGFjdGl2ZUNvdW50OiAwLFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCB0aGUgcHJvY2VzcyB3aXRoIGEgZ2l2ZW4gaW5kZXhcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogSW5kZXggb2YgcHJvY2Vzc1xuICAgICAgICBAcmV0dXJuIFtQcm9jZXNzXVxuICAgICovXG4gICAgZ2V0UHJvY2VzczogZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlUHJvY2Vzc2VzW2ldO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IG51bWJlciBvZiBhY3RpdmUgcHJvY2Vzc2VzXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBOdW1iZXIgb2YgYWN0aXZlIHByb2Nlc3Nlc1xuICAgICovXG4gICAgZ2V0QWN0aXZlQ291bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQ291bnQ7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgYWN0aXZlIHRva2Vuc1xuXG4gICAgICAgIEByZXR1cm4gW2FycmF5XTogQWN0aXZlIHRva2Vuc1xuICAgICovXG4gICAgZ2V0QWN0aXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUlkcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBMZW5ndGggb2YgcXVldWVcbiAgICAqL1xuICAgIGdldFF1ZXVlTGVuZ3RoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBGaXJlIGFsbCBhY3RpdmUgcHJvY2Vzc2VzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IFRpbWVzdGFtcCBvZiBleGVjdXRpbmcgZnJhbWVzXG4gICAgICAgIEBwYXJhbSBbaW50XTogVGltZSBzaW5jZSBwcmV2aW91cyBmcmFtZVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBhY3RpdmUgcHJvY2Vzc2VzIGZvdW5kXG4gICAgKi9cbiAgICBmaXJlQWN0aXZlOiBmdW5jdGlvbiAoZnJhbWVzdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB2YXIgcHJvY2VzcyxcbiAgICAgICAgICAgIGFjdGl2ZUNvdW50ID0gMCxcbiAgICAgICAgICAgIGFjdGl2ZUlkcyA9IFtdLFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgLy8gUHVyZ2UgYW5kIGNoZWNrIGFjdGl2ZSBjb3VudCBiZWZvcmUgZXhlY3V0aW9uXG4gICAgICAgIHRoaXMucHVyZ2UoKTtcbiAgICAgICAgYWN0aXZlQ291bnQgPSB0aGlzLmdldEFjdGl2ZUNvdW50KCk7XG4gICAgICAgIGFjdGl2ZUlkcyA9IHRoaXMuZ2V0QWN0aXZlKCk7XG5cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFjdGl2ZSBwcm9jZXNzZXMgYW5kIGZpcmUgY2FsbGJhY2tcbiAgICAgICAgZm9yICg7IGkgPCBhY3RpdmVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBwcm9jZXNzID0gdGhpcy5nZXRQcm9jZXNzKGFjdGl2ZUlkc1tpXSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5maXJlKGZyYW1lc3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVwdXJnZSBhbmQgcmVjaGVjayBhY3RpdmUgY291bnQgYWZ0ZXIgZXhlY3V0aW9uXG4gICAgICAgIHRoaXMucHVyZ2UoKTtcbiAgICAgICAgYWN0aXZlQ291bnQgPSB0aGlzLmdldEFjdGl2ZUNvdW50KCk7XG5cbiAgICAgICAgLy8gUmV0dXJuIHRydWUgaWYgd2Ugc3RpbGwgaGF2ZSBhY3RpdmUgcHJvY2Vzc2VzLCBvciBmYWxzZSBpZiBub25lXG4gICAgICAgIHJldHVybiBhY3RpdmVDb3VudCA/IHRydWUgOiBmYWxzZTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFJlZ2lzdGVyIGEgbmV3IHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbUHJvY2Vzc11cbiAgICAgICAgQHJldHVybiBbaW50XTogSW5kZXggb2YgcHJvY2VzcyB0byBiZSB1c2VkIGFzIElEXG4gICAgKi9cbiAgICByZWdpc3RlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzQ291bnRlcisrO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQWN0aXZhdGUgYSBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IEluZGV4IG9mIGFjdGl2ZSBwcm9jZXNzXG4gICAgKi9cbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHByb2Nlc3MsIGkpIHtcbiAgICAgICAgdmFyIHF1ZXVlSW5kZXggPSB0aGlzLmRlYWN0aXZhdGVRdWV1ZS5pbmRleE9mKGkpLFxuICAgICAgICAgICAgaXNRdWV1ZWQgPSAocXVldWVJbmRleCA+IC0xKSxcbiAgICAgICAgICAgIGlzQWN0aXZlID0gKHRoaXMuYWN0aXZlSWRzLmluZGV4T2YoaSkgPiAtMSk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGZyb20gZGVhY3RpdmF0ZVF1ZXVlIGlmIGluIHRoZXJlXG4gICAgICAgIGlmIChpc1F1ZXVlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlUXVldWUuc3BsaWNlKHF1ZXVlSW5kZXgsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRvIGFjdGl2ZSBwcm9jZXNzZXMgYXJyYXkgaWYgbm90IGFscmVhZHkgaW4gdGhlcmVcbiAgICAgICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVJZHMucHVzaChpKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUHJvY2Vzc2VzW2ldID0gcHJvY2VzcztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ291bnQrKztcbiAgICAgICAgICAgIHRoZUxvb3Auc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRGVhY3RpdmF0ZSBhIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogSW5kZXggb2YgcHJvY2VzcyB0byBhZGQgdG8gZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICovXG4gICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlUXVldWUucHVzaChpKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFB1cmdlIHRoZSBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgKi9cbiAgICBwdXJnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcXVldWVMZW5ndGggPSB0aGlzLmdldFF1ZXVlTGVuZ3RoKCksXG4gICAgICAgICAgICBhY3RpdmVJZEluZGV4ID0gMCxcbiAgICAgICAgICAgIGlkVG9EZWxldGUgPSAwO1xuXG4gICAgICAgIHdoaWxlIChxdWV1ZUxlbmd0aC0tKSB7XG4gICAgICAgICAgICBpZFRvRGVsZXRlID0gdGhpcy5kZWFjdGl2YXRlUXVldWVbcXVldWVMZW5ndGhdO1xuICAgICAgICAgICAgYWN0aXZlSWRJbmRleCA9IHRoaXMuYWN0aXZlSWRzLmluZGV4T2YoaWRUb0RlbGV0ZSk7XG5cbiAgICAgICAgICAgIC8vIElmIHByb2Nlc3MgaW4gYWN0aXZlIGxpc3QgZGVhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSWRzLnNwbGljZShhY3RpdmVJZEluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUNvdW50LS07XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWN0aXZlUHJvY2Vzc2VzW2lkVG9EZWxldGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuICAgIH1cbiAgICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFByb2Nlc3NNYW5hZ2VyKCk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wcm9jZXNzL21hbmFnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBNb2RNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9rZXlzID0gW107XG4gICAgICAgIHRoaXMuX251bUtleXMgPSAwO1xuICAgIH07XG5cbk1vZE1hbmFnZXIucHJvdG90eXBlID0ge1xuXG4gICAgLypcbiAgICAgICAgQWRkIG1vZHVsZSBrZXkgdG8ga2V5cyBsaXN0XG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgdG8gYWRkXG4gICAgKi9cbiAgICBfYWRkS2V5OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB0aGlzLl9rZXlzLnB1c2gobmFtZSk7XG4gICAgICAgIHRoaXMuX251bUtleXMrKztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQWRkIGEgbmV3IG1vZHVsZVxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nIHx8IG9iamVjdF06IE5hbWUgb2YgbmV3IG1vZHVsZSBvciBtdWx0aXBsZSBtb2R1bGVzXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpOiBNb2R1bGUgdG8gYWRkXG4gICAgKi9cbiAgICBleHRlbmQ6IGZ1bmN0aW9uIChuYW1lLCBtb2QpIHtcbiAgICAgICAgdmFyIG11bHRpTW9kcyA9ICh0eXBlb2YgbmFtZSA9PSAnb2JqZWN0JyksXG4gICAgICAgICAgICBtb2RzID0gbXVsdGlNb2RzID8gbmFtZSA6IHt9LFxuICAgICAgICAgICAga2V5ID0gJyc7XG5cbiAgICAgICAgLy8gSWYgd2UganVzdCBoYXZlIG9uZSBtb2R1bGUsIGNvZXJjZVxuICAgICAgICBpZiAoIW11bHRpTW9kcykge1xuICAgICAgICAgICAgbW9kc1tuYW1lXSA9IG1vZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoa2V5IGluIG1vZHMpIHtcbiAgICAgICAgICAgIGlmIChtb2RzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRLZXkoa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBtb2RzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZWFjaDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBrZXkgPSAnJztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX251bUtleXM7IGkrKykge1xuICAgICAgICAgICAga2V5ID0gdGhpcy5fa2V5c1tpXTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGtleSwgdGhpc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kTWFuYWdlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9Nb2RNYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgLy8gW251bWJlcl06IERlZmF1bHQgbWF4IHNpemUgb2YgaGlzdG9yeVxuICAgIG1heEhpc3RvcnlTaXplID0gMyxcbiAgICBcbiAgICAvKlxuICAgICAgICBIaXN0b3J5IGNvbnN0cnVjdG9yXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3Zhcl06IFZhcmlhYmxlIHRvIHN0b3JlIGluIGZpcnN0IGhpc3Rvcnkgc2xvdFxuICAgICAgICBAcGFyYW0gW2ludF0gKG9wdGlvbmFsKTogTWF4aW11bSBzaXplIG9mIGhpc3RvcnlcbiAgICAqL1xuICAgIEhpc3RvcnkgPSBmdW5jdGlvbiAob2JqLCBtYXgpIHtcbiAgICAgICAgdGhpcy5tYXggPSBtYXggfHwgbWF4SGlzdG9yeVNpemU7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmFkZChvYmopO1xuICAgIH07XG4gICAgXG5IaXN0b3J5LnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBQdXNoIG5ldyB2YXIgdG8gaGlzdG9yeVxuICAgICAgICBcbiAgICAgICAgU2hpZnQgb3V0IG9sZGVzdCBlbnRyeSBpZiB3ZSd2ZSByZWFjaGVkIG1heGltdW0gY2FwYWNpdHlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbdmFyXTogVmFyaWFibGUgdG8gcHVzaCBpbnRvIGhpc3RvcnkuZW50cmllc1xuICAgICovXG4gICAgYWRkOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2l6ZSA9IHRoaXMuZ2V0U2l6ZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2gob2JqKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjdXJyZW50U2l6ZSA+PSB0aGlzLm1heCkge1xuICAgICAgICAgICAgdGhpcy5lbnRyaWVzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCB2YXJpYWJsZSBhdCBzcGVjaWZpZWQgaW5kZXhcblxuICAgICAgICBAcGFyYW0gW2ludF06IEluZGV4XG4gICAgICAgIEByZXR1cm4gW3Zhcl06IFZhciBmb3VuZCBhdCBzcGVjaWZpZWQgaW5kZXhcbiAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgaSA9ICh0eXBlb2YgaSA9PT0gJ251bWJlcicpID8gaSA6IHRoaXMuZ2V0U2l6ZSgpIC0gMTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzW2ldO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBzZWNvbmQgbmV3ZXN0IGhpc3RvcnkgZW50cnlcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3Zhcl06IEVudHJ5IGZvdW5kIGF0IGluZGV4IHNpemUgLSAyXG4gICAgKi9cbiAgICBnZXRQcmV2aW91czogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5nZXRTaXplKCkgLSAyKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBjdXJyZW50IGhpc3Rvcnkgc2l6ZVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbaW50XTogQ3VycmVudCBsZW5ndGggb2YgZW50cmllcy5sZW5ndGhcbiAgICAqL1xuICAgIGdldFNpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllcy5sZW5ndGg7XG4gICAgfVxuICAgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIaXN0b3J5O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL0hpc3RvcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcbiAgICBCZXppZXIgZnVuY3Rpb24gZ2VuZXJhdG9yXG4gICAgICAgIFxuICAgIEdhw6t0YW4gUmVuYXVkZWF1J3MgQmV6aWVyRWFzaW5nXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAgIFlvdSdyZSBhIGhlcm9cbiAgICBcbiAgICBVc2VcbiAgICBcbiAgICAgICAgdmFyIGVhc2VPdXQgPSBuZXcgQmV6aWVyKC4xNywuNjcsLjgzLC42NyksXG4gICAgICAgICAgICB4ID0gZWFzZU91dCgwLjUpOyAvLyByZXR1cm5zIDAuNjI3Li4uXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBORVdUT05fSVRFUkFUSU9OUyA9IDgsXG4gICAgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxLFxuICAgIFNVQkRJVklTSU9OX1BSRUNJU0lPTiA9IDAuMDAwMDAwMSxcbiAgICBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwLFxuICAgIEtfU1BMSU5FX1RBQkxFX1NJWkUgPSAxMSxcbiAgICBLX1NBTVBMRV9TVEVQX1NJWkUgPSAxLjAgLyAoS19TUExJTkVfVEFCTEVfU0laRSAtIDEuMCksXG4gICAgRkxPQVRfMzJfU1VQUE9SVEVEID0gKHR5cGVvZiBGbG9hdDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKSxcbiAgICBcbiAgICBhID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgICAgICByZXR1cm4gMS4wIC0gMy4wICogYTIgKyAzLjAgKiBhMTtcbiAgICB9LFxuICAgIFxuICAgIGIgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgICAgIHJldHVybiAzLjAgKiBhMiAtIDYuMCAqIGExO1xuICAgIH0sXG4gICAgXG4gICAgYyA9IGZ1bmN0aW9uIChhMSkge1xuICAgICAgICByZXR1cm4gMy4wICogYTE7XG4gICAgfSxcblxuICAgIGdldFNsb3BlID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgICAgICByZXR1cm4gMy4wICogYShhMSwgYTIpICogdCAqIHQgKyAyLjAgKiBiKGExLCBhMikgKiB0ICsgYyhhMSk7XG4gICAgfSxcblxuICAgIGNhbGNCZXppZXIgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgICAgIHJldHVybiAoKGEoYTEsIGEyKSAqIHQgKyBiKGExLCBhMikpICogdCArIGMoYTEpKSAqIHQ7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBCZXppZXIgY29uc3RydWN0b3JcbiAgICAqL1xuICAgIEJlemllciA9IGZ1bmN0aW9uIChtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcbiAgICAgICAgdmFyIHNhbXBsZVZhbHVlcyA9IEZMT0FUXzMyX1NVUFBPUlRFRCA/IG5ldyBGbG9hdDMyQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSkgOiBuZXcgQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSksXG4gICAgICAgICAgICBfcHJlY29tcHV0ZWQgPSBmYWxzZSxcbiAgICBcbiAgICAgICAgICAgIGJpbmFyeVN1YmRpdmlkZSA9IGZ1bmN0aW9uIChhWCwgYUEsIGFCKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRYLCBjdXJyZW50VCwgaSA9IDA7XG5cbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFBID0gY3VycmVudFQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRUO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgICAgICBuZXd0b25SYXBoc29uSXRlcmF0ZSA9IGZ1bmN0aW9uIChhWCwgYUd1ZXNzVCkge1xuICAgICAgICAgICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNsb3BlID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50WDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgICAgICAgICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FsY1NhbXBsZVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEtfU1BMSU5FX1RBQkxFX1NJWkU7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBLX1NBTVBMRV9TVEVQX1NJWkUsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGdldFRGb3JYID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgICAgICAgICAgdmFyIGludGVydmFsU3RhcnQgPSAwLjAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTYW1wbGUgPSAxLFxuICAgICAgICAgICAgICAgICAgICBsYXN0U2FtcGxlID0gS19TUExJTkVfVEFCTEVfU0laRSAtIDEsXG4gICAgICAgICAgICAgICAgICAgIGRpc3QgPSAwLjAsXG4gICAgICAgICAgICAgICAgICAgIGd1ZXNzRm9yVCA9IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFNsb3BlID0gMC4wO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVydmFsU3RhcnQgKz0gS19TQU1QTEVfU1RFUF9TSVpFO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAtLWN1cnJlbnRTYW1wbGU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUrMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xuICAgICAgICAgICAgICAgIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICogS19TQU1QTEVfU1RFUF9TSVpFO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIHNsb3BlIGlzIGdyZWF0ZXIgdGhhbiBtaW5cbiAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbFNsb3BlID49IE5FV1RPTl9NSU5fU0xPUEUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQpO1xuICAgICAgICAgICAgICAgIC8vIFNsb3BlIGlzIGVxdWFsIHRvIG1pblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICAgICAgICAgICAgICAvLyBTbG9wZSBpcyBsZXNzIHRoYW4gbWluXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIEtfU0FNUExFX1NURVBfU0laRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJlY29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfcHJlY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChtWDEgIT0gbVkxIHx8IG1YMiAhPSBtWTIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsY1NhbXBsZVZhbHVlcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgR2VuZXJhdGVkIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgUmV0dXJucyB2YWx1ZSAwLTEgYmFzZWQgb24gWFxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGYgPSBmdW5jdGlvbiAoYVgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmV0dXJuVmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoIV9wcmVjb21wdXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBwcmVjb21wdXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIGxpbmVhciBncmFkaWVudCwgcmV0dXJuIFggYXMgVFxuICAgICAgICAgICAgICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGFYO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBhdCBzdGFydCwgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgYXQgZW5kLCByZXR1cm4gMVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAxO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxjQmV6aWVyKGdldFRGb3JYKGFYKSwgbVkxLCBtWTIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJlemllcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdHdlZW4vQmV6aWVyLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuXHRHZW5lcmF0ZSBtZXRob2QgaXRlcmF0b3Jcblx0XG5cdFRha2VzIGEgbWV0aG9kIG5hbWUgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHdpbGxcblx0bG9vcCBvdmVyIGFsbCB0aGUgRWxlbWVudHMgaW4gYSBncm91cCBhbmQgZmlyZSB0aGF0XG5cdG1ldGhvZCB3aXRoIHRob3NlIHByb3BlcnRpZXNcblx0XG5cdEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiBtZXRob2RcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG51bUVsZW1lbnRzID0gdGhpcy5lbGVtZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBpID0gMCxcblx0XHRcdGlzR2V0dGVyID0gZmFsc2UsXG5cdFx0XHRnZXR0ZXJBcnJheSA9IFtdLFxuXHRcdFx0YWN0b3IsXG5cdFx0XHRhY3RvclJldHVybjtcblxuXHRcdGZvciAoOyBpIDwgbnVtRWxlbWVudHM7IGkrKykge1xuXHRcdFx0YWN0b3IgPSB0aGlzLmVsZW1lbnRzW2ldO1xuXHRcdFx0YWN0b3JSZXR1cm4gPSBhY3RvclttZXRob2RdLmFwcGx5KGFjdG9yLCBhcmd1bWVudHMpO1xuXG5cdFx0XHRpZiAoYWN0b3JSZXR1cm4gIT0gYWN0b3IpIHtcbiAgICBcdFx0XHRpc0dldHRlciA9IHRydWU7XG4gICAgXHRcdFx0Z2V0dGVyQXJyYXkucHVzaChhY3RvclJldHVybik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdHJldHVybiAoaXNHZXR0ZXIpID8gZ2V0dGVyQXJyYXkgOiB0aGlzO1xuXHR9O1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0b3Ivc3lzdGVtL2dlbmVyYXRlLWl0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbi5lczYnKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIHByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vdHdlZW4vcHJlc2V0LWVhc2luZycpLFxuXG4gICAgLypcbiAgICAgICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgYmV0d2VlbiAwIGFuZCAxXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDEgcHJvZ3Jlc3NcbiAgICAgICAgQHBhcmFtIFtzdHJpbmcgfHwgZnVuY3Rpb25dOiBOYW1lIG9mIHByZXNldCBlYXNpbmdcbiAgICAgICAgICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQW1wbGlmeSBwcm9ncmVzcyBvdXQgb2Ygc3BlY2lmaWVkIHJhbmdlXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIG9mIGVhc2VkIHByb2dyZXNzIGluIHJhbmdlXG4gICAgKi8gIFxuICAgIGVhc2UgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlLCBlc2NhcGVBbXApIHtcbiAgICAgICAgdmFyIHByb2dyZXNzTGltaXRlZCA9IGNhbGMucmVzdHJpY3RlZChwcm9ncmVzcywgMCwgMSksXG4gICAgICAgICAgICBlYXNpbmdGdW5jdGlvbiA9IHV0aWxzLmlzU3RyaW5nKGVhc2UpID8gcHJlc2V0RWFzaW5nW2Vhc2VdIDogZWFzZTtcblxuICAgICAgICBpZiAocHJvZ3Jlc3NMaW1pdGVkICE9PSBwcm9ncmVzcyAmJiBlc2NhcGVBbXApIHtcbiAgICAgICAgICAgIGVhc2UgPSAnbGluZWFyJztcbiAgICAgICAgICAgIHByb2dyZXNzTGltaXRlZCA9IHByb2dyZXNzTGltaXRlZCArICgocHJvZ3Jlc3MgLSBwcm9ncmVzc0xpbWl0ZWQpICogZXNjYXBlQW1wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWxjLnZhbHVlRWFzZWQocHJvZ3Jlc3NMaW1pdGVkLCBmcm9tLCB0bywgZWFzaW5nRnVuY3Rpb24pO1xuICAgIH07XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ3R3ZWVuJztcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaWxhdGU6IDEsXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIHlveW86IGZhbHNlLFxuICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICBwbGF5RGlyZWN0aW9uOiAxXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgZWFzZTogJ2Vhc2VPdXQnLFxuICAgICAgICAgICAgc3RhZ2dlcjogMCxcbiAgICAgICAgICAgIHN0ZXBzOiAwLFxuICAgICAgICAgICAgdG86IDAsXG4gICAgICAgICAgICByb3VuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3RvJztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBVcGRhdGUgQWN0aW9uIGVsYXBzZWQgdGltZVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICBAcGFyYW0gW251bWJlcl06IFRpbWVzdGFtcCBvZiBjdXJyZW50IGZyYW1lXG4gICAgKi9cbiAgICBvbkZyYW1lU3RhcnQoZnJhbWVEdXJhdGlvbikge1xuICAgICAgICBpZiAoZnJhbWVEdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5lbGFwc2VkICs9IChmcmFtZUR1cmF0aW9uICogdGhpcy5kaWxhdGUpICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYXNFbmRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQ2FsY3VsYXRlIHByb2dyZXNzIG9mIHZhbHVlIGJhc2VkIG9uIHRpbWUgZWxhcHNlZCxcbiAgICAgICAgdmFsdWUgZGVsYXkvZHVyYXRpb24vc3RhZ2dlciBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBWYWx1ZSBzdGF0ZSBhbmQgcHJvcGVydGllc1xuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzKHZhbHVlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB2YWx1ZS50byxcbiAgICAgICAgICAgIHByb2dyZXNzVGFyZ2V0ID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAxIDogMCxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWUuY3VycmVudCxcbiAgICAgICAgICAgIHByb2dyZXNzO1xuXG4gICAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGEgdG8gcHJvcGVydHksIG90aGVyd2lzZSB3ZSBqdXN0IHJldHVybiBjdXJyZW50IHZhbHVlXG4gICAgICAgIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvZ3Jlc3MgPSBjYWxjLnJlc3RyaWN0ZWQoY2FsYy5wcm9ncmVzcyh0aGlzLmVsYXBzZWQgLSB2YWx1ZS5kZWxheSwgdmFsdWUuZHVyYXRpb24pIC0gdmFsdWUuc3RhZ2dlciwgMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgQWN0aW9uIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzRW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSB1dGlscy5zdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSB2YWx1ZVxuICAgICAgICAgICAgbmV3VmFsdWUgPSBlYXNlKHByb2dyZXNzLCB2YWx1ZS5vcmlnaW4sIHRhcmdldCwgdmFsdWUuZWFzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUmV0dXJuIGhhc0VuZGVkIHByb3BlcnR5XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSGF2ZSBhbGwgVmFsdWVzIGhpdCAxIHByb2dyZXNzP1xuICAgICovXG4gICAgaGFzRW5kZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0VuZGVkO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUd2VlbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL1R3ZWVuLmVzNlxuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbi5lczYnKTtcblxuY29uc3QgREVGQVVMVF9QUk9QID0gJ3ZlbG9jaXR5JztcblxuY2xhc3MgU2ltdWxhdGUgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnc2ltdWxhdGUnO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluYWN0aXZlRnJhbWVzOiAwLFxuICAgICAgICAgICAgbWF4SW5hY3RpdmVGcmFtZXM6IDNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBbc3RyaW5nXTogU2ltdWxhdGlvbiB0byAucnVuXG4gICAgICAgICAgICBzaW11bGF0ZTogREVGQVVMVF9QUk9QLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogRGVjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgICAgICAgICBkZWNlbGVyYXRpb246IDAsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICAgICAgICAgIGFjY2VsZXJhdGlvbjogMCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IEZhY3RvciB0byBtdWx0aXBseSB2ZWxvY2l0eSBieSBvbiBib3VuY2VcbiAgICAgICAgICAgIGJvdW5jZTogMCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgICAgICAgICAgIHNwcmluZzogODAsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBUaW1lY29uc3RhbnQgb2YgZ2xpZGVcbiAgICAgICAgICAgIHRpbWVDb25zdGFudDogMzk1LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgICAgICAgICAgIHN0b3BTcGVlZDogNSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW2Jvb2xlYW5dOiBDYXB0dXJlIHdpdGggc3ByaW5nIHBoeXNpY3Mgb24gbGltaXQgYnJlYWNoXG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IEZyaWN0aW9uIHRvIGFwcGx5IHBlciBmcmFtZVxuICAgICAgICAgICAgZnJpY3Rpb246IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gREVGQVVMVF9QUk9QO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaW11bGF0ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL1NpbXVsYXRlLmVzNlxuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbi5lczYnKTtcblxuY2xhc3MgVHJhY2sgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAndHJhY2snO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFtcDogMSxcbiAgICAgICAgICAgIGVzY2FwZUFtcDogMFxuICAgICAgICB9O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFjaztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL1RyYWNrLmVzNlxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvc3BsaXQtY29tbWEtZGVsaW1pdGVkLmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tYnJlYWsuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBwb3NpdGlvblRlcm1zID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeScpLnBvc2l0aW9ucyxcbiAgICBudW1Qb3NpdGlvblRlcm1zID0gcG9zaXRpb25UZXJtcy5sZW5ndGgsXG5cbiAgICBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnLFxuICAgIFNDQUxFID0gJ3NjYWxlJyxcbiAgICBST1RBVEUgPSAncm90YXRlJyxcbiAgICB0ZXJtcyA9IHtcbiAgICAgICAgZnVuY3M6IFsndHJhbnNsYXRlJywgU0NBTEUsIFJPVEFURSwgJ3NrZXcnLCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdLFxuICAgICAgICBwcm9wczoge30gLy8gb2JqZWN0cyBhcmUgZmFzdGVyIGF0IGRpcmVjdCBsb29rdXBzXG4gICAgfTtcblxuLy8gQ3JlYXRlIHRyYW5zZm9ybSB0ZXJtc1xuKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZnVuY3MgPSB0ZXJtcy5mdW5jcyxcbiAgICAgICAgcHJvcHMgPSB0ZXJtcy5wcm9wcyxcbiAgICAgICAgbnVtRnVuY3MgPSBmdW5jcy5sZW5ndGgsXG4gICAgICAgIGkgPSAwLFxuXG4gICAgICAgIGNyZWF0ZVByb3BzID0gZnVuY3Rpb24gKGZ1bmNOYW1lKSB7XG4gICAgICAgICAgICB2YXIgaiA9IDA7XG5cbiAgICAgICAgICAgIGZvciAoOyBqIDwgbnVtUG9zaXRpb25UZXJtczsgaisrKSB7XG4gICAgICAgICAgICAgICAgcHJvcHNbZnVuY05hbWUgKyBwb3NpdGlvblRlcm1zW2pdXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgXG4gICAgLy8gTWFudWFsbHkgYWRkIHNrZXcgYW5kIHRyYW5zZm9ybSBwZXJzcGVjdGl2ZSAgXG4gICAgcHJvcHNbUk9UQVRFXSA9IHByb3BzW1NDQUxFXSA9IHByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuICAgIFxuICAgIC8vIExvb3Agb3ZlciBlYWNoIGZ1bmN0aW9uIG5hbWUgYW5kIGNyZWF0ZSBmdW5jdGlvbi9wcm9wZXJ0eSB0ZXJtc1xuICAgIGZvciAoOyBpIDwgbnVtRnVuY3M7IGkrKykge1xuICAgICAgICBjcmVhdGVQcm9wcyhmdW5jc1tpXSk7XG4gICAgfVxufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXJtcztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JvbGVzL2Nzcy90cmFuc2Zvcm0tZGljdGlvbmFyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICAgIFRoZSBsb29wXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBUaW1lciA9IHJlcXVpcmUoJy4vdGltZXIuanMnKSxcbiAgICB0aWNrID0gcmVxdWlyZSgnLi90aWNrLmpzJyksXG4gICAgTG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50aW1lciA9IG5ldyBUaW1lcigpO1xuICAgIH07XG4gICAgXG5Mb29wLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBbYm9vbGVhbl06IEN1cnJlbnQgc3RhdHVzIG9mIGFuaW1hdGlvbiBsb29wXG4gICAgKi9cbiAgICBpc1J1bm5pbmc6IGZhbHNlLFxuICAgIFxuICAgIC8qXG4gICAgICAgIEZpcmUgYWxsIGFjdGl2ZSBwcm9jZXNzZXMgb25jZSBwZXIgZnJhbWVcbiAgICAqL1xuICAgIGZyYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmcmFtZXN0YW1wID0gc2VsZi50aW1lci51cGRhdGUoKSwgLy8gQ3VycmVudGx5IGp1c3QgbWVhc3VyaW5nIGluIG1zIC0gd2lsbCBsb29rIGludG8gaGktcmVzIHRpbWVzdGFtcHNcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZSA9IHNlbGYuY2FsbGJhY2suY2FsbChzZWxmLnNjb3BlLCBmcmFtZXN0YW1wLCBzZWxmLnRpbWVyLmdldEVsYXBzZWQoKSk7XG5cbiAgICAgICAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZnJhbWUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RhcnQgbG9vcFxuICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlJ3JlIG5vdCBhbHJlYWR5IHJ1bm5pbmcgYSBsb29wXG4gICAgICAgIGlmICghdGhpcy5pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIuY2xvY2soKTtcbiAgICAgICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZnJhbWUoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RvcCB0aGUgbG9vcFxuICAgICovXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU2V0IHRoZSBjYWxsYmFjayB0byBydW4gZXZlcnkgZnJhbWVcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbT2JqZWN0XTogRXhlY3V0aW9uIGNvbnRleHRcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IENhbGxiYWNrIHRvIGZpcmVcbiAgICAqL1xuICAgIHNldENhbGxiYWNrOiBmdW5jdGlvbiAoc2NvcGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IExvb3AoKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvbG9vcC5qc1xuICoqIG1vZHVsZSBpZCA9IDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJsZXQgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuY29uc3QgREVGQVVMVF9QUk9QID0gJ2N1cnJlbnQnO1xuXG5jbGFzcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBkZWZhdWx0UHJvcCkge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcztcblxuICAgICAgICB1dGlscy5lYWNoKHRoaXMuZ2V0RGVmYXVsdFByb3BzKCksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBhY3Rpb25ba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnNldChwcm9wcywgdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCkpO1xuICAgIH1cblxuICAgIHNldChwcm9wcyA9IHt9LCBkZWZhdWx0UHJvcCA9IERFRkFVTFRfUFJPUCkge1xuICAgICAgICAvLyBBZGQgcHJvcGVydGllc1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGtleSAhPT0gJ3ZhbHVlcycpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWVyZ2UgdmFsdWVzXG4gICAgICAgIGlmIChwcm9wcy52YWx1ZXMpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50VmFsdWVzID0gdGhpcy52YWx1ZXMsXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gcHJvcHMudmFsdWVzO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGV4aXN0aW5nVmFsdWUgPSBjdXJyZW50VmFsdWVzW2tleV0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVzW2tleV0sXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0ge307XG5cbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNPYmoodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbZGVmYXVsdFByb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1trZXldID0gZXhpc3RpbmdWYWx1ZSA/IHV0aWxzLm1lcmdlKGV4aXN0aW5nVmFsdWUsIG5ld1ZhbHVlKSA6IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJvY2Vzcyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUuY3VycmVudDtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ2FjdGlvbic7XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUFJPUDtcbiAgICB9XG5cbiAgICBleHRlbmQocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHByb3BzLCB0aGlzLmdldERlZmF1bHRWYWx1ZVByb3AoKSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFjdGlvbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL0FjdGlvbi5lczZcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzLmpzJyksXG5cbiAgICBtYXhFbGFwc2VkID0gMzMsXG4gICAgVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IDE2Ljc7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHV0aWxzLmN1cnJlbnRUaW1lKCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfTtcblxuVGltZXIucHJvdG90eXBlID0ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHV0aWxzLmN1cnJlbnRUaW1lKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IE1hdGgubWluKHRoaXMuY3VycmVudCAtIHRoaXMucHJldiwgbWF4RWxhcHNlZCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgICB9LFxuXG4gICAgZ2V0RWxhcHNlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGFwc2VkO1xuICAgIH0sXG4gICAgXG4gICAgY2xvY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy90aW1lci5qc1xuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgXG4gICAgRm9yIElFOC85IEZsaW5zdG9uZXNcblxuICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICBcbiAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICBcbiAgICBNSVQgbGljZW5zZVxuKi9cbnZhciB0aWNrLFxuICAgIGxhc3RUaW1lID0gMCxcbiAgICBoYXNXaW5kb3cgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpO1xuXG5pZiAoIWhhc1dpbmRvdykge1xuICAgIC8vIExvYWQgckFGIHNoaW1cbiAgICB0aWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKSxcbiAgICAgICAgICAgIGlkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcbiAgICAgICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuXG4gICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH07ICBcbiAgICBcbn0gZWxzZSB7XG4gICAgdGljayA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGljaztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvdGljay5qc1xuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKlxuICAgIEVhc2luZyBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgR2VuZXJhdGVzIGFuZCBwcm92aWRlcyBlYXNpbmcgZnVuY3Rpb25zIGJhc2VkIG9uIGJhc2VGdW5jdGlvbiBkZWZpbml0aW9uc1xuICAgIFxuICAgIEEgY2FsbCB0byBlYXNpbmdGdW5jdGlvbi5nZXQoJ2Z1bmN0aW9uTmFtZScpIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwYXNzZWQ6XG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgMC0xXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaXMgdXNlZCB0byBhZGp1c3Qgb3ZlcmFsbCBzdHJlbmd0aFxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBFYXNlZCBwcm9ncmVzc1xuICAgICAgICBcbiAgICBXZSBjYW4gZ2VuZXJhdGUgbmV3IGZ1bmN0aW9ucyBieSBzZW5kaW5nIGFuIGVhc2luZyBmdW5jdGlvbiB0aHJvdWdoIGVhc2luZ0Z1bmN0aW9uLmV4dGVuZChuYW1lLCBtZXRob2QpLlxuICAgIFdoaWNoIHdpbGwgbWFrZSBuYW1lSW4sIG5hbWVPdXQgYW5kIG5hbWVJbk91dCBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvIHVzZS5cbiAgICAgICAgXG4gICAgRWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXJcbiAgICBodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuICAgICAgICBcbiAgICBCZXppZXIgY3VydmUgaW50ZXJwcmV0b3IgY3JlYXRlZCBmcm9tIEdhw6t0YW4gUmVuYXVkZWF1J3Mgb3JpZ2luYWwgQmV6aWVyRWFzaW5nICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBFYXNpbmcgPSByZXF1aXJlKCcuL0Vhc2luZycpLFxuICAgIGVhc2luZ0Z1bmN0aW9uLFxuICAgIFxuICAgIC8vIEdlbmVyYXRlIGVhc2luZyBmdW5jdGlvbiB3aXRoIHByb3ZpZGVkIHBvd2VyXG4gICAgZ2VuZXJhdGVQb3dlckVhc2luZyA9IGZ1bmN0aW9uIChwb3dlcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3cocHJvZ3Jlc3MsIHBvd2VyKTtcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgRWFjaCBvZiB0aGVzZSBiYXNlIGZ1bmN0aW9ucyBpcyBhbiBlYXNlSW5cbiAgICAgICAgXG4gICAgICAgIE9uIGluaXQsIHdlIHVzZSBFYXNpbmdGdW5jdGlvbi5taXJyb3IgYW5kIC5yZXZlcnNlIHRvIGdlbmVyYXRlIGVhc2VJbk91dCBhbmRcbiAgICAgICAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuICAgICovXG4gICAgYmFzZUVhc2luZyA9IHtcbiAgICAgICAgY2lyYzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwcm9ncmVzcykpO1xuICAgICAgICB9LFxuICAgICAgICBiYWNrOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHZhciBzdHJlbmd0aCA9IDEuNTtcblxuICAgICAgICAgICAgcmV0dXJuIChwcm9ncmVzcyAqIHByb2dyZXNzKSAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpO1xuICAgICAgICB9XG4gICAgfTtcblxuLy8gR2VuZXJhdGUgcG93ZXIgZWFzaW5nIGVhc2luZ1xuWydlYXNlJywgJ2N1YmljJywgJ3F1YXJ0JywgJ3F1aW50J10uZm9yRWFjaChmdW5jdGlvbiAoZWFzaW5nTmFtZSwgaSkge1xuICAgIGJhc2VFYXNpbmdbZWFzaW5nTmFtZV0gPSBnZW5lcmF0ZVBvd2VyRWFzaW5nKGkgKyAyKTtcbn0pO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZm9yICh2YXIga2V5IGluIGJhc2VFYXNpbmcpIHtcbiAgICBpZiAoYmFzZUVhc2luZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gbmV3IEVhc2luZyhiYXNlRWFzaW5nW2tleV0pO1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbiddID0gZWFzaW5nRnVuY3Rpb24uaW47XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ091dCddID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbk91dCddID0gZWFzaW5nRnVuY3Rpb24uaW5PdXQ7XG4gICAgfVxufVxuXG4vKlxuICAgIExpbmVhciBlYXNpbmcgYWRqdXN0bWVudFxuICAgIFxuICAgIFRoZSBkZWZhdWx0IGVhc2luZyBtZXRob2QsIG5vdCBhZGRlZCB3aXRoIC5leHRlbmQgYXMgaXQgaGFzIG5vIE91dCBvciBJbk91dFxuICAgIHZhcmlhdGlvbi5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAtMVxuICAgIEByZXR1cm4gW251bWJlcl06IFVuYWRqdXN0ZWQgcHJvZ3Jlc3NcbiovXG5iYXNlRWFzaW5nLmxpbmVhciA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiBwcm9ncmVzcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUVhc2luZztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvdHdlZW4vcHJlc2V0LWVhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJwb3Btb3Rpb24uZ2xvYmFsLmpzIn0=