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

	'use strict';
	
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

	'use strict';
	
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
	    scale: __webpack_require__(12),
	    shadow: __webpack_require__(13)
	});
	
	/*
	    Predefined roles
	*/
	
	popmotion.attr = __webpack_require__(14);
	popmotion.css = __webpack_require__(15);
	popmotion.svg = __webpack_require__(16);
	popmotion.drawPath = __webpack_require__(17);
	
	module.exports = popmotion;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var valueTypeManager = __webpack_require__(18),
	    _select = __webpack_require__(19),
	    Popmotion = {
	
	    Actor: __webpack_require__(20),
	
	    Input: __webpack_require__(21),
	
	    Iterator: __webpack_require__(22),
	
	    Process: __webpack_require__(23),
	
	    Easing: __webpack_require__(25),
	
	    Role: __webpack_require__(24),
	
	    Action: __webpack_require__(26),
	    Tween: __webpack_require__(27),
	    Simulate: __webpack_require__(28),
	    Track: __webpack_require__(29),
	
	    /*
	        Create an Iterator of Actors with selected dom elements
	    */
	    select: function select(selector) {
	        var _this = this;
	
	        var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	        var selection = _select(selector),
	            actors = [];
	
	        selection.forEach(function (element) {
	            opts.element = element;
	            actors.push(new _this.Actor(opts));
	        });
	
	        return new this.Iterator(actors);
	    },
	
	    addValueType: function addValueType() {
	        valueTypeManager.extend.apply(valueTypeManager, arguments);
	        return this;
	    },
	
	    calc: __webpack_require__(30)
	};
	
	module.exports = Popmotion;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = {
	    defaultProps: {
	        min: 0,
	        max: 1
	    }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    defaultProps: {
	        unit: 'deg'
	    }
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	    defaultProps: {
	        unit: 'px'
	    }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var createDelimited = __webpack_require__(31),
	    getColorValues = __webpack_require__(32),
	    functionCreate = __webpack_require__(33),
	    defaultProps = __webpack_require__(34),
	    terms = __webpack_require__(35).hsl;
	
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
	
	    test: function test(value) {
	        return value && value.indexOf('hsl') > -1;
	    },
	
	    split: function split(value) {
	        return getColorValues(value, terms);
	    },
	
	    combine: function combine(values) {
	        return functionCreate(createDelimited(values, terms, ', ', 2), 'hsla');
	    }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var createDelimited = __webpack_require__(31),
	    getColorValues = __webpack_require__(32),
	    functionCreate = __webpack_require__(33),
	    defaultProps = __webpack_require__(34),
	    colorDefaults = defaultProps.color,
	    terms = __webpack_require__(35).colors;
	
	module.exports = {
	
	    defaultProps: {
	        Red: colorDefaults,
	        Green: colorDefaults,
	        Blue: colorDefaults,
	        Alpha: defaultProps.opacity
	    },
	
	    test: function test(value) {
	        return value && value.indexOf('rgb') > -1;
	    },
	
	    split: function split(value) {
	        return getColorValues(value, terms);
	    },
	
	    combine: function combine(values) {
	        return functionCreate(createDelimited(values, terms, ', ', 2), 'rgba');
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var rgb = __webpack_require__(7);
	
	module.exports = {
	
	    defaultProps: rgb.defaultProps,
	
	    test: function test(value) {
	        return value && value.indexOf('#') > -1;
	    },
	
	    split: function split(value) {
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
	
	    combine: function combine(values) {
	        return rgb.combine(values);
	    }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(36),
	    rgb = __webpack_require__(7),
	    hsl = __webpack_require__(6),
	    hex = __webpack_require__(8),
	    supported = [rgb, hsl, hex],
	    numSupported = 3,
	    runSupported = function runSupported(method, value) {
	    for (var i = 0; i < numSupported; i++) {
	        if (supported[i].test(value)) {
	            return supported[i][method](value);
	        }
	    }
	};
	
	module.exports = {
	
	    defaultProps: utils.merge(rgb.defaultProps, hsl.defaultProps),
	
	    test: function test(value) {
	        return rgb.test(value) || hex.test(value) || hsl.test(value);
	    },
	
	    split: function split(value) {
	        return runSupported('split', value);
	    },
	
	    combine: function combine(values) {
	        return values.Red !== undefined ? rgb.combine(values) : hsl.combine(values);
	    }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var createDelimited = __webpack_require__(31),
	    pxDefaults = __webpack_require__(5).defaultProps,
	    splitSpaceDelimited = __webpack_require__(37),
	    terms = __webpack_require__(35).positions;
	
	module.exports = {
	
	    defaultProps: pxDefaults,
	
	    /*
	        Split positions in format "X Y Z"
	        
	        @param [string]: Position values
	            "20% 30% 0" -> {20%, 30%, 0}
	            "20% 30%" -> {20%, 30%}
	            "20%" -> {20%, 20%}
	    */
	    split: function split(value) {
	        var positions = splitSpaceDelimited(value),
	            numPositions = positions.length,
	            splitValue = {
	            X: positions[0],
	            Y: numPositions > 1 ? positions[1] : positions[0]
	        };
	
	        if (numPositions > 2) {
	            splitValue.Z = positions[2];
	        }
	
	        return splitValue;
	    },
	
	    combine: function combine(values) {
	        return createDelimited(values, terms, ' ');
	    }
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var terms = __webpack_require__(35).dimensions,
	    pxDefaults = __webpack_require__(5).defaultProps,
	    createDelimited = __webpack_require__(31),
	    splitSpaceDelimited = __webpack_require__(37);
	
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
	    split: function split(value) {
	        var dimensions = splitSpaceDelimited(value),
	            numDimensions = dimensions.length,
	            jumpBack = numDimensions !== 1 ? 2 : 1,
	            i = 0,
	            j = 0,
	            splitValue = {};
	
	        for (; i < 4; i++) {
	            splitValue[terms[i]] = dimensions[j];
	
	            // Jump back (to start) counter if we've reached the end of our values
	            j++;
	            j = j === numDimensions ? j - jumpBack : j;
	        }
	
	        return splitValue;
	    },
	
	    combine: function combine(values) {
	        return createDelimited(values, terms, ' ');
	    }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = {
	    defaultProps: {
	        init: 1
	    }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var color = __webpack_require__(9),
	    utils = __webpack_require__(36),
	    pxDefaults = __webpack_require__(5).defaultProps,
	    terms = __webpack_require__(35).shadow,
	    splitSpaceDelimited = __webpack_require__(37),
	    createDelimited = __webpack_require__(31),
	    shadowTerms = terms.slice(0, 4);
	
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
	    split: function split(value) {
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
	
	    combine: function combine(values) {
	        return createDelimited(values, shadowTerms, ' ') + color.combine(values);
	    }
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Role = __webpack_require__(24);
	var each = __webpack_require__(36).each;
	
	var attrRole = new Role({
	    update: function update(state) {
	        var actor = this;
	
	        each(state, function (key, value) {
	            attrRole.set(actor.element, key, value);
	        });
	    },
	
	    get: function get(element, key) {
	        return element.getAttribute(key);
	    },
	
	    set: function set(element, key, value) {
	        element.setAttribute(key, value);
	    }
	});
	
	module.exports = attrRole;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Role = __webpack_require__(24);
	var build = __webpack_require__(38);
	var each = __webpack_require__(36).each;
	
	var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
	var numPrefixes = prefixes.length;
	var propertyNameCache = {};
	
	/*
	    Test style property for prefixed version
	    
	    @param [string]: Style property
	    @return [string]: Cached property name
	*/
	var testPrefix = function testPrefix(key) {
	    var testElement = document.body;
	
	    propertyNameCache[key] = false;
	
	    for (var i = 0; i < numPrefixes; i++) {
	        var prefix = prefixes[i],
	            prefixed = prefix === '' ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
	
	        if (testElement.style.hasOwnProperty(prefixed)) {
	            propertyNameCache[key] = prefixed;
	        }
	    }
	
	    return propertyNameCache[key];
	};
	
	var cssRole = new Role({
	    _map: __webpack_require__(39),
	    _typeMap: __webpack_require__(40),
	
	    update: function update(state) {
	        var actor = this;
	
	        each(build(state), function (key, value) {
	            cssRole.set(actor.element, key, value);
	        });
	    },
	
	    get: function get(element, key) {
	        key = propertyNameCache[key] || testPrefix(key);
	
	        if (key) {
	            return window.getComputedStyle(element, null)[key];
	        }
	    },
	
	    set: function set(element, key, value) {
	        key = propertyNameCache[key] || testPrefix(key);
	
	        if (key) {
	            element.style[key] = value;
	        }
	    }
	
	});
	
	module.exports = cssRole;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Role = __webpack_require__(24),
	    attrRole = __webpack_require__(14),
	    build = __webpack_require__(41),
	    each = __webpack_require__(36).each;
	
	module.exports = new Role({
	    name: 'svg',
	
	    _map: __webpack_require__(39),
	    _typeMap: __webpack_require__(42),
	
	    start: function start() {
	        var boundingBox = this.element.getBBox(),
	            values = this.values,
	
	        // TODO: Support px
	        transformOriginX = values.transformOriginX ? values.transformOriginX.current : 50,
	            transformOriginY = values.transformOriginY ? values.transformOriginY.current : 50,
	            origin = {
	            x: boundingBox.width * (transformOriginX / 100) + boundingBox.x,
	            y: boundingBox.height * (transformOriginY / 100) + boundingBox.y
	        };
	
	        this.svgOrigin = origin;
	    },
	
	    update: function update(state) {
	        var actor = this;
	        each(build(state, this.svgOrigin), function (key, value) {
	            attrRole.set(actor.element, key, value);
	        });
	    }
	
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Role = __webpack_require__(24);
	var cssRole = __webpack_require__(15);
	var each = __webpack_require__(36).each;
	
	/*
	    Convert percentage to pixels
	    
	    @param [number]: Percentage of total length
	    @param [number]: Total length
	*/
	var percentToPixels = function percentToPixels(percentage, length) {
	    return parseFloat(percentage) / 100 * length + 'px';
	};
	
	/*
	    Create styles
	    
	    @param [object]: SVG Path properties
	    @param [object]: Length of path
	    @returns [object]: Key/value pairs of valid CSS properties
	*/
	var createStyles = function createStyles(props, length) {
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
	                styles['stroke-dashoffset'] = percentToPixels(-value, length);
	                break;
	            default:
	                styles[key] = value;
	        }
	    });
	
	    if (hasDashArray) {
	        styles['stroke-dasharray'] = dashArrayStyles.length + ' ' + dashArrayStyles.spacing;
	    }
	
	    return styles;
	};
	
	/*
	    Draw Path role
	*/
	var SVGDrawPath = new Role({
	    _map: __webpack_require__(43),
	
	    _typeMap: {
	        stroke: 'color'
	    },
	
	    init: function init() {
	        this.pathLength = this.element.getTotalLength();
	    },
	
	    /*
	        Update `path` styles and if `element` is present, set
	        x, y and rotation
	    */
	    update: function update(state) {
	        cssRole.update.call(this, createStyles(state, this.pathLength));
	    }
	});
	
	module.exports = SVGDrawPath;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ModManager = __webpack_require__(44),
	    valueTypeManager = new ModManager();
	
	valueTypeManager.defaultProps = function (type, key) {
	    var valueType = this[type],
	        defaultProps = valueType.defaultProps ? valueType.defaultProps[key] || valueType.defaultProps : {};
	
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

	/*
	    Create an ActorCollection based on a selection of DOM nodes
	
	    @param [string || NodeList || jQuery object]:
	        If string, treated as selector.
	        If not, treated as preexisting NodeList || jQuery object.
	*/
	'use strict';
	
	module.exports = function (selector) {
	    var nodes = typeof selector === 'string' ? document.querySelectorAll(selector) : selector,
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
	
	    return elements;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Process = __webpack_require__(23),
	    Queue = __webpack_require__(45),
	    Pointer = __webpack_require__(46),
	    utils = __webpack_require__(36),
	    update = __webpack_require__(47),
	    valueOps = __webpack_require__(48),
	    select = __webpack_require__(19),
	
	/*
	    Role imports
	*/
	defaultRole = __webpack_require__(49),
	    cssRole = __webpack_require__(15),
	    svgRole = __webpack_require__(16),
	    drawPathRole = __webpack_require__(17),
	    Action = __webpack_require__(26),
	    each = utils.each;
	
	var Actor = (function () {
	
	    /*
	        @param [object]
	    */
	
	    function Actor() {
	        var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, Actor);
	
	        this.values = {};
	        this.state = { values: {} };
	        this.queue = new Queue();
	        this.process = new Process(this, update);
	        this.activeActions = {};
	        this.numActive = 0;
	        this.actionCounter = 0;
	        this.activeValues = [];
	        this.activeParents = [];
	
	        // Get actual elements if this is a selector
	        if (utils.isString(opts.element)) {
	            opts.element = select(opts.element)[0];
	        }
	
	        this.assignRoles(opts.element, opts.as, true);
	        this.set(opts);
	        this.initRoles();
	    }
	
	    /*
	        Set Actor properties and values
	         @param [object]
	        @returns [Actor]
	    */
	
	    Actor.prototype.set = function set(opts) {
	        var _this = this;
	
	        each(opts, function (key, value) {
	            if (key !== 'values' && key !== 'action') {
	                _this[key] = value;
	            }
	        });
	
	        if (opts && opts.values) {
	            this.values = valueOps.process(this.values, opts.values, opts, 'current', this);
	        }
	
	        return this;
	    };
	
	    /*
	        Bind Action-specific controls to Actor
	         @returns [Controls]
	    */
	
	    Actor.prototype.controls = function controls(action) {
	        var Controls = action.getControls();
	        return new Controls(this, action.getPlayable());
	    };
	
	    /*
	        Start a new Action
	         @param [Action]
	        @param [Input || event] (optional)
	        @returns [Controls]
	    */
	
	    Actor.prototype.start = function start(action, input) {
	        var Controls = action.getControls(),
	            opts = utils.copy(action);
	
	        opts.action = action.getPlayable();
	        this.set(opts);
	
	        if (input) {
	            this.bindInput(input);
	        }
	
	        this.activate();
	
	        return new Controls(this, opts.action, true);
	    };
	
	    /*
	        Pause all active Actions
	         @param [int] (optional)
	        @returns [Actor]
	    */
	
	    Actor.prototype.pause = function pause() {
	        this.isActive = false;
	        this.process.stop();
	        return this;
	    };
	
	    /*
	        Resume all active Actions
	         @param [int] (optional)
	        @returns [Actor];
	    */
	
	    Actor.prototype.resume = function resume() {
	        this.isActive = true;
	        this.process.start();
	        return this;
	    };
	
	    /*
	        Stop all active Actions
	         @param [int] (optional)
	        @returns [Actor]
	    */
	
	    Actor.prototype.stop = function stop() {
	        this.pause();
	        return this;
	    };
	
	    /*
	        Toggle all active Actions
	         @param [int] (optional)
	        @returns [Actor]
	    */
	
	    Actor.prototype.toggle = function toggle() {
	        return this.isActive ? this.pause() : this.resume();
	    };
	
	    /*
	        Syncs `element` with current properties
	         @returns [Actor]
	    */
	
	    Actor.prototype.sync = function sync() {
	        return this.start(new Action({ values: this.values }));
	    };
	
	    /*
	        Add a new Action to the queue
	    */
	
	    Actor.prototype.then = function then() {
	        this.queue.add.apply(this.queue, arguments);
	        return this;
	    };
	
	    /*
	        Execute next in queue
	    */
	
	    Actor.prototype.next = function next() {
	        var next = this.queue.next();
	
	        if (next) {
	            if (utils.isFunc(next)) {
	                next();
	                this.next();
	            } else {
	                this.start(next);
	            }
	        } else {
	            this.stop();
	        }
	
	        return this;
	    };
	
	    /*
	        Assign Roles based on element and manually provided props
	         @param [object]: Element
	        @param [Role || array]
	        @param [boolean] (optional)
	    */
	
	    Actor.prototype.assignRoles = function assignRoles(element, manualRoles, surpressInit) {
	        // All Actors get a default Role that handles user callbacks
	        this.roles = [defaultRole];
	
	        // Auto-assign if no manually-set Roles
	        if (!manualRoles && element) {
	            this.autoAssignRoles(element);
	
	            // Or manually set if provided
	        } else if (manualRoles) {
	            if (utils.isArray(manualRoles)) {
	                this.roles.push.apply(this.roles, manualRoles);
	            } else {
	                this.roles.push(manualRoles);
	            }
	        }
	
	        if (!surpressInit) {
	            this.initRoles();
	        }
	    };
	
	    /*
	        Automatically assign Roles based on element, designed
	        to be extended
	         @param [object]: Element
	    */
	
	    Actor.prototype.autoAssignRoles = function autoAssignRoles(element) {
	        // Add CSS role if HTMLElement
	        if (element instanceof HTMLElement) {
	            this.roles.push(cssRole);
	
	            // Add SVG role if SVG element
	        } else if (element instanceof SVGElement) {
	            this.roles.push(svgRole);
	
	            // Add Draw Path role if path element
	            if (element.tagName === 'path') {
	                this.roles.push(drawPathRole);
	            }
	        }
	    };
	
	    /*
	        Fire init callbacks
	    */
	
	    Actor.prototype.initRoles = function initRoles() {
	        var _this2 = this;
	
	        // Fire init callback
	        this.roles.forEach(function (role) {
	            if (role.init) {
	                role.init.call(_this2);
	            }
	        });
	    };
	
	    Actor.prototype.activate = function activate() {
	        if (!this.isActive) {
	            this.isActive = true;
	            this.firstFrame = true;
	            this.process.start();
	        }
	    };
	
	    /*
	        Bind Action and return its table id
	         @param [Action]
	        @returns [int]
	    */
	
	    Actor.prototype.bindAction = function bindAction(action, id) {
	        id = id === undefined ? this.actionCounter++ : id;
	        this.activeActions[id] = action;
	        this.numActive++;
	        return id;
	    };
	
	    Actor.prototype.unbindAction = function unbindAction(id) {
	        this.numActive--;
	        delete this.activeActions[id];
	
	        if (!this.numActive) {
	            this.stop();
	        }
	    };
	
	    Actor.prototype.getAction = function getAction(id) {
	        return this.activeActions[id];
	    };
	
	    /*
	        Update processing order
	        
	        @param [string]
	        @param [boolean]
	        @param [boolean]
	    */
	
	    Actor.prototype.updateOrder = function updateOrder(key, moveToBack, hasChildren) {
	        var order = !hasChildren ? this.activeValues : this.activeParents,
	            position = order.indexOf(key);
	
	        // If key isn't list or moveToBack is set to true, add key
	        if (position === -1 || moveToBack) {
	            order.push(key);
	
	            // If key already exists, remove
	            if (position > -1) {
	                order.splice(position, 1);
	            }
	        }
	    };
	
	    Actor.prototype.startBound = function startBound(id, input) {
	        var action = this.getAction(id),
	            opts = utils.copy(action);
	
	        opts.action = action;
	        this.set(opts);
	
	        if (input) {
	            this.bindInput(input);
	        }
	
	        this.activate();
	    };
	
	    Actor.prototype.bindInput = function bindInput(input) {
	        this.input = !input.current ? new Pointer(input) : input;
	        this.inputOrigin = this.input.get();
	    };
	
	    _createClass(Actor, [{
	        key: 'isActive',
	
	        // [boolean]: Is this Actor active?
	        get: function get() {
	            return this._isActive;
	        },
	
	        // Set hasChanged to true is this is now active
	        set: function set(status) {
	            if (status === true) {
	                this.hasChanged = status;
	            }
	
	            this._isActive = status;
	        }
	    }]);
	
	    return Actor;
	})();
	
	module.exports = Actor;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Input controller
	*/
	'use strict';
	
	var calc = __webpack_require__(30),
	    utils = __webpack_require__(36),
	    History = __webpack_require__(50),
	
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
	Input = function Input() {
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
	    get: function get(prop) {
	        var latest = this.history.get(),
	            val = prop !== undefined ? latest[prop] : latest;
	
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
	    update: function update(arg0, arg1) {
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
	    onFrame: function onFrame(timestamp) {
	        var latest, hasChanged;
	
	        // Check provided timestamp against lastFrame timestamp and return input has already been updated
	        if (timestamp === this.lastFrame) {
	            return;
	        }
	
	        latest = this.poll ? this.poll() : this.history.get();
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

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Actor = __webpack_require__(20),
	    Tween = __webpack_require__(27),
	    utils = __webpack_require__(36);
	
	var DEFAULT_STAGGER_EASE = 'linear';
	
	var Iterator = (function () {
	    function Iterator(members) {
	        _classCallCheck(this, Iterator);
	
	        this.clear();
	
	        if (members) {
	            this.add(members);
	        }
	
	        this._stagger = new Actor();
	    }
	
	    Iterator.prototype.add = function add(members) {
	        this.members = this.members.concat(members);
	        return this;
	    };
	
	    Iterator.prototype.clear = function clear() {
	        this.members = [];
	        return this;
	    };
	
	    Iterator.prototype.each = function each(callback) {
	        this.members.forEach(callback);
	        return this;
	    };
	
	    Iterator.prototype.stagger = function stagger(method) {
	        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	            args[_key - 2] = arguments[_key];
	        }
	
	        var _this = this;
	
	        var props = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];
	
	        var numMembers = this.members.length,
	            propsIsInterval = utils.isNum(props),
	            interval = propsIsInterval ? props : props.interval,
	            staggerProps = {},
	            i = -1,
	            callback = utils.isString(method) ? function (member) {
	            member[method].apply(member, args);
	        } : method;
	
	        staggerProps.values = {
	            i: {
	                current: 0,
	                duration: interval * numMembers,
	                ease: propsIsInterval ? DEFAULT_STAGGER_EASE : props.ease || DEFAULT_STAGGER_EASE,
	                round: true,
	                to: numElements - 1
	            }
	        };
	
	        staggerProps.onUpdate = function (output) {
	            var newIndex = output.i,
	                gapIndex = i + 1;
	
	            // If our new index is only one more than the previous index, fire immedietly
	            if (newIndex === i + 1) {
	                callback(_this.members[gapIndex], gapIndex);
	
	                // Or loop through the distance to fire all indecies. Increase delay.
	            } else {
	                for (; gapIndex <= newIndex; gapIndex++) {
	                    callback(_this.members[gapIndex], gapIndex);
	                }
	            }
	
	            i = newIndex;
	        };
	
	        this._stagger.start(new Tween(staggerProps));
	
	        return this;
	    };
	
	    return Iterator;
	})();
	
	module.exports = Iterator;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var manager = __webpack_require__(55),
	
	/*
	    Process constructor
	    
	    Syntax
	        var process = new Process(scope, callback);
	        var process = new Process(callback);
	*/
	Process = function Process(scope, callback) {
	    var hasScope = callback !== undefined;
	
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
	    fire: function fire(timestamp, elapsed) {
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
	    start: function start(duration) {
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
	    stop: function stop() {
	        this.reset();
	        this.deactivate();
	
	        return this;
	    },
	
	    /*
	        Activate process
	        
	        @return [this]
	    */
	    activate: function activate() {
	        this.isActive = true;
	        manager.activate(this, this.id);
	
	        return this;
	    },
	
	    /*
	        Deactivate process
	        
	        @return [this]
	    */
	    deactivate: function deactivate() {
	        this.isActive = false;
	        manager.deactivate(this.id);
	
	        return this;
	    },
	
	    /*
	        Fire process every x ms
	        
	        @param [int]: Number of ms to wait between refiring process.
	        @return [this]
	    */
	    every: function every(interval) {
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
	    reset: function reset() {
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(36);
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
	var Role = function Role(methods) {
	    var role = this;
	
	    role._map = {};
	
	    each(methods, function (name, method) {
	        role[name] = !utils.isObj(method) ? method : utils.copy(method);
	    });
	};
	
	/*
	    Create a new role
	
	    @param [object]: Optional methods and props to add
	    @param [valuesToMap]: Override existing map with these values
	    @return [Role]: New Role
	*/
	var createRole = function createRole(methods, values) {
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
	    map: function map(values) {
	        // If this is a string, get mapped value
	        // Otherwise this is a map, duplicated role with updated map
	        return utils.isString(values) ? this._map[values] || values : createRole(this, values);
	    }
	};
	
	module.exports = Role;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Bezier = __webpack_require__(56),
	
	/*
	    Mirror easing
	    
	    Mirrors the provided easing function, used here for mirroring an
	    easeIn into an easeInOut
	    
	    @param [number]: Progress, from 0 - 1, of current shift
	    @param [function]: The easing function to mirror
	    @returns [number]: The easing-adjusted delta
	*/
	mirrorEasing = function mirrorEasing(progress, method) {
	    return progress <= 0.5 ? method(2 * progress) / 2 : (2 - method(2 * (1 - progress))) / 2;
	},
	
	/*
	    Reverse easing
	    
	    Reverses the output of the provided easing function, used for flipping easeIn
	    curve to an easeOut.
	    
	    @param [number]: Progress, from 0 - 1, of current shift
	    @param [function]: The easing function to reverse
	    @returns [number]: The easing-adjusted delta
	*/
	reverseEasing = function reverseEasing(progress, method) {
	    return 1 - method(1 - progress);
	};
	
	/*
	    Easing class
	
	    If provided easing function, returns easing function with 
	    in/out/inOut variations
	
	    If provided four arguments, returns new Bezier class instead.
	*/
	var Easing = function Easing(x1, y1, x2, y2) {
	    var method = x1,
	        easingFunction;
	
	    // If this is a bezier curve, return a bezier function
	    if (arguments.length > 1) {
	        easingFunction = new Bezier(x1, y1, x2, y2);
	    } else {
	        easingFunction = function (progress) {
	            return method(progress);
	        };
	
	        easingFunction['in'] = function (progress) {
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var calc = __webpack_require__(30),
	    utils = __webpack_require__(36),
	    each = utils.each,
	    Controls = __webpack_require__(51);
	
	var DEFAULT_PROP = 'current';
	
	var Action = (function () {
	    function Action(props) {
	        _classCallCheck(this, Action);
	
	        var action = this;
	
	        utils.each(this.getDefaultProps(), function (key, value) {
	            action[key] = value;
	        });
	
	        this.values = {};
	        this.set(props, this.getDefaultValueProp());
	    }
	
	    Action.prototype.set = function set() {
	        var _this = this;
	
	        var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	        var defaultProp = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_PROP : arguments[1];
	
	        each(props, function (key, prop) {
	            if (key !== 'values') {
	                _this[key] = prop;
	            }
	        });
	
	        // Merge values
	        if (props.values) {
	            (function () {
	                var currentValues = _this.values,
	                    values = props.values;
	
	                each(values, function (key, value) {
	                    var existingValue = currentValues[key],
	                        newValue = {};
	
	                    if (utils.isObj(value)) {
	                        newValue = value;
	                    } else {
	                        newValue[defaultProp] = value;
	                    }
	
	                    currentValues[key] = existingValue ? utils.merge(existingValue, newValue) : newValue;
	                });
	            })();
	        }
	
	        return this;
	    };
	
	    Action.prototype.process = function process(actor, value) {
	        return value.current;
	    };
	
	    /*
	         Has Action ended?
	         
	         Returns true to end immedietly
	         
	         @return [boolean]: true
	     */
	
	    Action.prototype.hasEnded = function hasEnded() {
	        return true;
	    };
	
	    Action.prototype.limit = function limit(output, value) {
	        var restricted = calc.restricted(output, value.min, value.max),
	            escapeAmp = value.escapeAmp !== undefined ? value.escapeAmp : 0;
	        return restricted + (output - restricted) * escapeAmp;
	    };
	
	    Action.prototype.getControls = function getControls() {
	        return Controls;
	    };
	
	    Action.prototype.getName = function getName() {
	        return 'action';
	    };
	
	    Action.prototype.getDefaultProps = function getDefaultProps() {
	        return {};
	    };
	
	    Action.prototype.getDefaultValue = function getDefaultValue() {
	        return {
	            current: 0,
	            speed: 0,
	            velocity: 0,
	            frameChange: 0,
	            amp: 1,
	            escapeAmp: 0,
	            round: false
	        };
	    };
	
	    Action.prototype.getDefaultValueProp = function getDefaultValueProp() {
	        return DEFAULT_PROP;
	    };
	
	    Action.prototype.extend = function extend(props) {
	        return new this.constructor(utils.merge(this, props), this.getDefaultValueProp());
	    };
	
	    Action.prototype.getPlayable = function getPlayable() {
	        return this.extend();
	    };
	
	    Action.prototype.activate = function activate() {
	        this.isActive = true;
	        return this;
	    };
	
	    Action.prototype.deactivate = function deactivate() {
	        this.isActive = false;
	        return this;
	    };
	
	    return Action;
	})();
	
	module.exports = Action;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(26),
	    calc = __webpack_require__(30),
	    utils = __webpack_require__(36),
	    each = utils.each,
	    presetEasing = __webpack_require__(52),
	    TweenControls = __webpack_require__(53),
	    nextSteps = {
	    loop: 'resetValues',
	    yoyo: 'reverseValues',
	    flip: 'flipValues'
	},
	
	/*
	    Ease value within ranged parameters
	    
	    @param [number]: Progress between 0 and 1
	    @param [number]: Value of 0 progress
	    @param [number]: Value of 1 progress
	    @param [string || function]: Name of preset easing
	        to use or generated easing function
	    @return [number]: Value of eased progress in range
	*/
	ease = function ease(progress, from, to, _ease) {
	    var progressLimited = calc.restricted(progress, 0, 1),
	        easingFunction = utils.isString(_ease) ? presetEasing[_ease] : _ease;
	
	    return calc.valueEased(progressLimited, from, to, easingFunction);
	};
	
	var COUNT = 'count';
	
	var Tween = (function (_Action) {
	    _inherits(Tween, _Action);
	
	    function Tween() {
	        _classCallCheck(this, Tween);
	
	        _Action.apply(this, arguments);
	    }
	
	    Tween.prototype.getControls = function getControls() {
	        return TweenControls;
	    };
	
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
	            playDirection: 1,
	            ended: true,
	            elapsed: 0
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
	
	    Tween.prototype.onFrameStart = function onFrameStart(actor, frameDuration) {
	        this.elapsed = this.elapsed || 0;
	
	        if (frameDuration) {
	            this.elapsed += frameDuration * this.dilate * this.playDirection;
	        }
	
	        this.ended = true;
	    };
	
	    /*
	        Calculate progress of value based on time elapsed,
	        value delay/duration/stagger properties
	         @param [Actor]
	        @param [object]: Value state and properties
	        @return [number]: Calculated value
	    */
	
	    Tween.prototype.process = function process(actor, value) {
	        var target = value.to,
	            progressTarget = this.playDirection === 1 ? 1 : 0,
	            newValue = value.current,
	            progress;
	
	        // If this value has a to property, otherwise we just return current value
	        if (target !== undefined) {
	            progress = calc.restricted(calc.progress(this.elapsed - value.delay, value.duration) - value.stagger, 0, 1);
	
	            // Mark Action as NOT ended if still in progress
	            if (progress !== progressTarget) {
	                this.ended = false;
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
	        If this tween has ended, check if we loop/yoyo/flip
	        
	        @return [boolean]: Has this tween really really ended?
	    */
	
	    Tween.prototype.hasEnded = function hasEnded(actor) {
	        var _this = this;
	
	        if (this.ended) {
	            each(nextSteps, function (name, methodName) {
	                if (_this.checkNextStep(actor, name, _this[methodName])) {
	                    _this.ended = false;
	                    actor.hasChanged = true;
	                    return false;
	                }
	            });
	        }
	
	        return this.ended;
	    };
	
	    Tween.prototype.checkNextStep = function checkNextStep(actor, name, method) {
	        var stepTaken = false,
	            step = this[name],
	            count = this[name + COUNT] || 0,
	            forever = step === true;
	
	        if (forever || utils.isNum(step)) {
	            ++count;
	            this[name + COUNT] = count;
	
	            if (forever || count <= step) {
	                method.call(this, actor);
	                stepTaken = true;
	            }
	        }
	
	        return stepTaken;
	    };
	
	    Tween.prototype.flipValues = function flipValues() {
	        this.elapsed = this.duration - this.elapsed;
	    };
	
	    Tween.prototype.reverseValues = function reverseValues() {
	        this.playDirection *= -1;
	    };
	
	    Tween.prototype.resetValues = function resetValues() {
	        this.elapsed = this.playDirection === 1 ? 0 : this.duration;
	        this.started = utils.currentTime();
	
	        return this;
	    };
	
	    return Tween;
	})(Action);
	
	module.exports = Tween;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(26),
	    calc = __webpack_require__(30),
	    utils = __webpack_require__(36),
	    simulations = __webpack_require__(54);
	
	var DEFAULT_PROP = 'velocity';
	
	var Simulate = (function (_Action) {
	    _inherits(Simulate, _Action);
	
	    function Simulate() {
	        _classCallCheck(this, Simulate);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        _Action.call.apply(_Action, [this].concat(args));
	        this.calculatesVelocity = true;
	    }
	
	    Simulate.prototype.getName = function getName() {
	        return 'simulate';
	    };
	
	    Simulate.prototype.getDefaultProps = function getDefaultProps() {
	        return {
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
	        
	        @param [Actor]
	        @param [Value]: Current value
	        @param [string]: Key of current value
	        @param [number]: Duration of frame in ms
	        @return [number]: Calculated value
	    */
	
	    Simulate.prototype.process = function process(actor, value, key, timeSinceLastFrame) {
	        var simulate = value.simulate,
	            simulation = utils.isString(simulate) ? simulations[simulate] : simulate,
	            newVelocity = simulation ? simulation(value, timeSinceLastFrame, actor.started) : 0;
	
	        value.velocity = Math.abs(newVelocity) >= value.stopSpeed ? newVelocity : 0;
	        return value.current + calc.speedPerFrame(value.velocity, timeSinceLastFrame);
	    };
	
	    /*
	        Has this action ended?
	        
	        Use a framecounter to see if Action has changed in the last x frames
	        and declare ended if not
	        
	        @param [Actor]
	        @param [boolean]: Has Action changed?
	        @return [boolean]: Has Action ended?
	    */
	
	    Simulate.prototype.hasEnded = function hasEnded(actor, hasChanged) {
	        this.inactiveFrames = hasChanged ? 0 : this.inactiveFrames + 1;
	        return this.inactiveFrames > actor.maxInactiveFrames;
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(26),
	    calc = __webpack_require__(30);
	
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
	
	    Track.prototype.onFrameStart = function onFrameStart(actor) {
	        actor.inputOffset = calc.offset(actor.inputOrigin, actor.input.current);
	    };
	
	    /*
	        Move Value relative to Input movement
	        
	        @param [Value]: Current value
	        @param [string]: Key of current value
	        @return [number]: Calculated value
	    */
	
	    Track.prototype.process = function process(actor, value, key) {
	        return actor.inputOffset.hasOwnProperty(key) ? value.origin + actor.inputOffset[key] : value.current;
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Calculators
	    ----------------------------------------
	    
	    Simple I/O snippets
	*/
	"use strict";
	
	var utils = __webpack_require__(36),
	    calc = {
	
	    /*
	        Angle between points
	        
	        Translates the hypothetical line so that the 'from' coordinates
	        are at 0,0, then return the angle using .angleFromCenter()
	        
	        @param [object]: X and Y coordinates of from point
	        @param [object]: X and Y cordinates of to point
	        @return [radian]: Angle between the two points in radians
	    */
	    angle: function angle(pointA, pointB) {
	        var from = pointB ? pointA : { x: 0, y: 0 },
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
	    angleFromCenter: function angleFromCenter(x, y) {
	        return this.radiansToDegrees(Math.atan2(y, x));
	    },
	
	    /*
	        Convert degrees to radians
	        
	        @param [number]: Value in degrees
	        @return [number]: Value in radians
	    */
	    degreesToRadians: function degreesToRadians(degrees) {
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
	    dilate: function dilate(a, b, dilation) {
	        return a + (b - a) * dilation;
	    },
	
	    /*
	        Distance
	        
	        Returns the distance between (0,0) and pointA, unless pointB
	        is provided, then we return the difference between the two.
	        
	        @param [object/number]: x and y or just x of point A
	        @param [object/number]: (optional): x and y or just x of point B
	        @return [number]: The distance between the two points
	    */
	    distance: function distance(pointA, pointB) {
	        return typeof pointA === "number" ? this.distance1D(pointA, pointB) : this.distance2D(pointA, pointB);
	    },
	
	    /*
	        Distance 1D
	        
	        Returns the distance between point A and point B
	        
	        @param [number]: Point A
	        @param [number]: (optional): Point B
	        @return [number]: The distance between the two points
	    */
	    distance1D: function distance1D(pointA, pointB) {
	        var bIsNum = typeof pointB === "number",
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
	    distance2D: function distance2D(pointA, pointB) {
	        var bIsObj = typeof pointB === "object",
	            from = bIsObj ? pointA : { x: 0, y: 0 },
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
	    hypotenuse: function hypotenuse(a, b) {
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
	    offset: function offset(a, b) {
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
	    pointFromAngleAndDistance: function pointFromAngleAndDistance(origin, angle, distance) {
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
	    progress: function progress(value, limitA, limitB) {
	        var bIsNum = typeof limitB === "number",
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
	    radiansToDegrees: function radiansToDegrees(radians) {
	        return radians * 180 / Math.PI;
	    },
	
	    /*
	        Return random number between range
	        
	        @param [number] (optional): Output minimum
	        @param [number] (optional): Output maximum
	        @return [number]: Random number within range, or 0 and 1 if none provided
	    */
	    random: function random(min, max) {
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
	    relativeValue: function relativeValue(current, rel) {
	        var newValue = current,
	            equation = rel.split("="),
	            operator = equation[0],
	            splitVal = utils.splitValUnit(equation[1]);
	
	        switch (operator) {
	            case "+":
	                newValue += splitVal.value;
	                break;
	            case "-":
	                newValue -= splitVal.value;
	                break;
	            case "*":
	                newValue *= splitVal.value;
	                break;
	            case "/":
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
	    restricted: function restricted(value, min, max) {
	        var restricted = min !== undefined ? Math.max(value, min) : value;
	        restricted = max !== undefined ? Math.min(restricted, max) : restricted;
	
	        return restricted;
	    },
	
	    /*
	        Convert x per second to per frame velocity based on fps
	        
	        @param [number]: Unit per second
	        @param [number]: Frame duration in ms
	    */
	    speedPerFrame: function speedPerFrame(xps, frameDuration) {
	        return isNum(xps) ? xps / (1000 / frameDuration) : 0;
	    },
	
	    /*
	        Convert velocity into velicity per second
	        
	        @param [number]: Unit per frame
	        @param [number]: Frame duration in ms
	    */
	    speedPerSecond: function speedPerSecond(velocity, frameDuration) {
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
	    value: function value(progress, limitA, limitB) {
	        var bIsNum = typeof limitB === "number",
	            from = bIsNum ? limitA : 0,
	            to = bIsNum ? limitB : limitA;
	
	        return -progress * from + progress * to + from;
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
	    valueEased: function valueEased(progress, from, to, easing) {
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

	'use strict';
	
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
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var splitCommaDelimited = __webpack_require__(57),
	    functionBreak = __webpack_require__(58);
	
	module.exports = function (value, terms) {
	    var splitValue = {},
	        numTerms = terms.length,
	        colors = splitCommaDelimited(functionBreak(value)),
	        i = 0;
	
	    for (; i < numTerms; i++) {
	        splitValue[terms[i]] = colors[i] !== undefined ? colors[i] : 1;
	    }
	
	    return splitValue;
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (value, prefix) {
	    return prefix + '(' + value + ')';
	};

/***/ },
/* 34 */
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
	        unit: "%"
	    }
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Utility functions
	*/
	'use strict';
	
	var protectedProperties = ['scope', 'dom'],
	    isProtected = function isProtected(key) {
	    return protectedProperties.indexOf(key) !== -1;
	},
	
	/*
	    Get var type as string
	    
	    @param: Variable to test
	    @return [string]: Returns, for instance 'Object' if [object Object]
	*/
	varType = function varType(variable) {
	    return Object.prototype.toString.call(variable).slice(8, -1);
	};
	
	module.exports = {
	
	    /*
	        Iterate over an object and fire a callback for every item in it
	         @param [object]: Properties
	        @param [function]: Callback to fire
	    */
	    each: function each(props, callback) {
	        var keys = Object.keys(props),
	            numKeys = keys.length;
	
	        for (var i = 0; i < numKeys; i++) {
	            var key = keys[i],
	                prop = props[key];
	
	            if (callback(key, prop) === false) {
	                break;
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
	    hasChanged: function hasChanged(a, b) {
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
	    isNum: function isNum(num) {
	        return typeof num === 'number';
	    },
	
	    /*
	        Is this var an object?
	        
	        @param: Variable to test
	        @return [boolean]: Returns true if typeof === 'object'
	    */
	    isObj: function isObj(obj) {
	        return typeof obj === 'object';
	    },
	
	    /*
	        Is this var a function ? 
	        
	        @param: Variable to test
	        @return [boolean]: Returns true if this.varType === 'Function'
	    */
	    isFunc: function isFunc(obj) {
	        return varType(obj) === 'Function';
	    },
	
	    /*
	        Is this var a string ? 
	        
	        @param: Variable to test
	        @return [boolean]: Returns true if typeof str === 'string'
	    */
	    isString: function isString(str) {
	        return typeof str === 'string';
	    },
	
	    /*
	        Is this a relative value assignment?
	        
	        @param [string]: Variable to test
	        @return [boolean]: If this looks like a relative value assignment
	    */
	    isRelativeValue: function isRelativeValue(value) {
	        return value && value.indexOf && value.indexOf('=') > 0;
	    },
	
	    /*
	        Is this var an array ? 
	        
	        @param: Variable to test
	        @return [boolean]: Returns true if this.varType === 'Array'
	    */
	    isArray: function isArray(arr) {
	        return varType(arr) === 'Array';
	    },
	
	    /*
	        Copy object or array
	        
	        Checks whether base is an array or object and makes
	        appropriate copy
	        
	        @param [array || object]: Array or object to copy
	        @param [array || object]: New copy of array or object
	    */
	    copy: function copy(base) {
	        return this.isArray(base) ? this.copyArray(base) : this.copyObject(base);
	    },
	
	    /*
	        Deep copy an object
	        
	        Iterates over an object and creates a new copy of every item,
	        deep copying if it finds any objects/arrays
	        
	        @param [object]: Object to copy
	        @param [object]: New copy of object
	    */
	    copyObject: function copyObject(base) {
	        var newObject = {};
	
	        for (var key in base) {
	            if (base.hasOwnProperty(key)) {
	                newObject[key] = this.isObj(base[key]) && !isProtected(key) ? this.copy(base[key]) : base[key];
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
	    copyArray: function copyArray(base) {
	        var newArray = [],
	            length = base.length,
	            i = 0;
	
	        for (; i < length; i++) {
	            newArray[i] = this.isObj(base[i]) ? this.copy(base[i]) : base[i];
	        }
	
	        return newArray;
	    },
	
	    /*
	        Non-destructive merge of object or array
	        
	        @param [array || object]: Array or object to use as base
	        @param [array || object]: Array or object to overwrite base with
	        @return [array || object]: New array or object
	    */
	    merge: function merge(base, overwrite) {
	        return this.isArray(base) ? this.copyArray(overwrite) : this.mergeObject(base, overwrite);
	    },
	
	    /*
	        Non-destructive merge of object
	        
	        @param [object]: Object to use as base
	        @param [object]: Object to overwrite base with
	        @return [object]: New object
	    */
	    mergeObject: function mergeObject(base, overwrite) {
	        var hasBase = this.isObj(base),
	            newObject = hasBase ? this.copy(base) : this.copy(overwrite),
	            key = '';
	
	        if (hasBase) {
	            for (key in overwrite) {
	                if (overwrite.hasOwnProperty(key)) {
	                    newObject[key] = this.isObj(overwrite[key]) && !isProtected(key) ? this.merge(base[key], overwrite[key]) : overwrite[key];
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
	    splitValUnit: function splitValUnit(value) {
	        var splitVal = value.match(/(-?\d*\.?\d*)(.*)/);
	
	        return {
	            value: parseFloat(splitVal[1]),
	            unit: splitVal[2]
	        };
	    },
	
	    /*
	        Create stepped version of 0-1 progress
	        
	        @param [number]: Current value
	        @param [int]: Number of steps
	        @return [number]: Stepped value
	    */
	    stepProgress: function stepProgress(progress, steps) {
	        var segment = 1 / (steps - 1),
	            target = 1 - 1 / steps,
	            progressOfTarget = Math.min(progress / target, 1);
	
	        return Math.floor(progressOfTarget / segment) * segment;
	    },
	
	    /*
	        Generate current timestamp
	        
	        @return [timestamp]: Current UNIX timestamp
	    */
	    currentTime: function currentTime() {
	        return typeof performance !== 'undefined' ? performance.now() : new Date().getTime();
	    }
	
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (value) {
	    return typeof value === 'string' ? value.split(' ') : [value];
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var each = __webpack_require__(36).each,
	    transformDictionary = __webpack_require__(59),
	    transformProps = transformDictionary.props,
	    TRANSLATE_Z = 'translateZ';
	
	module.exports = function (output) {
	    var css = {},
	        transform = '',
	        transformHasZ = false;
	
	    // Loop through output, check for transform properties
	    each(output, function (key, rule) {
	        // If this is a transform property, add to transform string
	        if (transformProps[key]) {
	            transform += key + '(' + rule + ')';
	            transformHasZ = key === TRANSLATE_Z ? true : transformHasZ;
	
	            // Or just assign directly
	        } else {
	            css[key] = rule;
	        }
	    });
	
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var TRANSLATE = 'translate';
	
	module.exports = {
	    x: TRANSLATE + 'X',
	    y: TRANSLATE + 'Y',
	    z: TRANSLATE + 'Z'
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var each = __webpack_require__(36).each,
	    transformDictionary = __webpack_require__(59),
	    transformProps = transformDictionary.props;
	
	module.exports = function (output, origin) {
	    var props = {},
	        hasTransform = false,
	        scale = output.scale !== undefined ? output.scale : output.scaleX || 1,
	        scaleY = output.scaleY !== undefined ? output.scaleY : scale || 1,
	        transformOriginX = origin.x,
	        transformOriginY = origin.y,
	        scaleTransformX = -transformOriginX * (scale * 1),
	        scaleTransformY = -transformOriginY * (scaleY * 1),
	        scaleReplaceX = transformOriginX / scale,
	        scaleReplaceY = transformOriginY / scaleY,
	        transform = {
	        translate: 'translate(' + output.translateX + ', ' + output.translateY + ') ',
	        scale: 'translate(' + scaleTransformX + ', ' + scaleTransformY + ') scale(' + scale + ', ' + scaleY + ') translate(' + scaleReplaceX + ', ' + scaleReplaceY + ') ',
	        rotate: 'rotate(' + output.rotate + ', ' + transformOriginX + ', ' + transformOriginY + ') ',
	        skewX: 'skewX(' + output.skewX + ') ',
	        skewY: 'skewY(' + output.skewY + ') '
	    };
	
	    each(output, function (key, value) {
	        if (transformProps[key]) {
	            hasTransform = true;
	        } else {
	            props[key] = value;
	        }
	    });
	
	    if (hasTransform) {
	        props.transform = '';
	
	        each(transform, function (key, value) {
	            var defaultValue = key === 'scale' ? '1' : '0';
	            props.transform += value.replace(/undefined/g, defaultValue);
	        });
	    }
	
	    return props;
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var COLOR = 'color',
	    SCALE = 'scale';
	
	module.exports = {
	    fill: COLOR,
	    stroke: COLOR,
	    scale: SCALE,
	    scaleX: SCALE,
	    scaleY: SCALE,
	    transformOrigin: 'positions'
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var STROKE = 'stroke';
	
	module.exports = {
	    opacity: STROKE + '-opacity',
	    width: STROKE + '-width',
	    miterlimit: STROKE + '-miterlimit'
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ModManager = function ModManager() {
	    this._keys = [];
	    this._numKeys = 0;
	};
	
	ModManager.prototype = {
	
	    /*
	        Add module key to keys list
	         @param [string]: Key to add
	    */
	    _addKey: function _addKey(name) {
	        this._keys.push(name);
	        this._numKeys++;
	    },
	
	    /*
	        Add a new module
	         @param [string || object]: Name of new module or multiple modules
	        @param [object] (optional): Module to add
	    */
	    extend: function extend(name, mod) {
	        var multiMods = typeof name == 'object',
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
	
	    each: function each(callback) {
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
	
	var Queue = function Queue() {
	    this.clear();
	};
	
	Queue.prototype = {
	
	    /*
	        Add a set of arguments to queue
	    */
	    add: function add() {
	        this.queue.push(arguments[0]);
	    },
	
	    /*
	        Get next set of arguments from queue
	    */
	    next: function next(direction) {
	        var queue = this.queue,
	            returnVal = false,
	            index = this.index;
	
	        direction = arguments.length ? direction : 1;
	
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
	    clear: function clear() {
	        this.queue = [];
	        this.index = 0;
	    }
	};
	
	module.exports = Queue;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Input = __webpack_require__(21),
	    currentPointer,
	    // Sort this out for multitouch
	
	TOUCHMOVE = 'touchmove',
	    MOUSEMOVE = 'mousemove',
	
	/*
	    Convert event into point
	    
	    Scrape the x/y coordinates from the provided event
	    
	    @param [event]: Original pointer event
	    @param [boolean]: True if touch event
	    @return [object]: x/y coordinates of event
	*/
	eventToPoint = function eventToPoint(event, isTouchEvent) {
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
	getActualEvent = function getActualEvent(event) {
	    return event.originalEvent || event;
	},
	
	/*
	    Pointer constructor
	*/
	Pointer = function Pointer(e) {
	    var event = getActualEvent(e),
	        // In case of jQuery event
	    isTouch = event.touches ? true : false,
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var valueTypeManager = __webpack_require__(18),
	    calc = __webpack_require__(30),
	    utils = __webpack_require__(36),
	    each = utils.each,
	    Action = __webpack_require__(26),
	    defaultAction = new Action(),
	    createMapper = function createMapper(role, mappedValues) {
	    return function (name, val) {
	        mappedValues[role.map(name)] = val;
	    };
	},
	
	/*
	    Check all Actions for `onEnd`, return true if all are true
	     @param [Actor]
	    @param [boolean]
	    @returns [boolean]
	*/
	checkAndFireHasEnded = function checkAndFireHasEnded(actor, hasChanged) {
	    var hasEnded = true;
	
	    each(actor.activeActions, function (key, action) {
	        if (action.hasEnded && action.hasEnded(actor, hasChanged) === false) {
	            hasEnded = false;
	        } else {
	            delete actor.activeActions[key];
	        }
	    });
	
	    return hasEnded;
	},
	
	/*
	    Update the Actor and its values
	     @param [int]: Timestamp of rAF call
	    @param [int]: Time since last frame
	*/
	update = function update(framestamp, frameDuration) {
	    var numActiveValues = this.activeValues.length,
	        numActiveParents = this.activeParents.length,
	        numRoles = this.roles.length,
	        state = this.state,
	        hasChanged = this.hasChanged;
	
	    // Update Input and attach new values to stata
	    if (this.input) {
	        state.input = this.input.onFrame(framestamp);
	    }
	
	    // Fire onStart callback if this is first frame
	    if (this.firstFrame) {
	        for (var i = 0; i < numRoles; i++) {
	            var role = this.roles[i];
	            if (role.start) {
	                role.start.call(this);
	            }
	        }
	    }
	
	    // Update values
	    for (var i = 0; i < numActiveValues; i++) {
	        // Get value and key
	        var key = this.activeValues[i];
	        var value = this.values[key];
	        var action = !value.action || value.action && !value.action.isActive ? defaultAction : value.action;
	
	        // Fire action onFrameStart if not already fired
	        if (action.onFrameStart && action.lastUpdate !== framestamp) {
	            action.onFrameStart(this, frameDuration);
	            action.lastUpdate = framestamp;
	        }
	
	        // Calculate new value
	        var updatedValue = action.process(this, value, key, frameDuration);
	
	        // Limit if this action does that kind of thing
	        if (action.limit && value.hasRange) {
	            updatedValue = action.limit(updatedValue, value);
	        }
	
	        // Round value if round is true
	        if (value.round) {
	            updatedValue = Math.round(updatedValue);
	        }
	
	        // Update frameChange
	        value.frameChange = updatedValue - value.current;
	
	        // Calculate velocity if Action hasn't
	        if (!action.calculatesVelocity) {
	            value.velocity = calc.speedPerSecond(value.frameChange, frameDuration);
	        }
	
	        // Update current speed
	        value.speed = Math.abs(value.velocity);
	
	        // Check if value's changed
	        if (value.current !== updatedValue) {
	            hasChanged = true;
	        }
	
	        // Set new current
	        value.current = updatedValue;
	        var valueState = value.unit ? updatedValue + value.unit : updatedValue;
	
	        // Put value in state if no parent
	        if (!value.parent) {
	            state.values[key] = valueState;
	
	            // Or, add to parent state to be combined later
	        } else {
	            state[value.parent] = state[value.parent] || {};
	            state[value.parent][value.propName] = valueState;
	        }
	    }
	
	    // Update parent values from calculated children
	    for (var i = 0; i < numActiveParents; i++) {
	        var key = this.activeParents[i];
	        var value = this.values[key];
	
	        // Update parent value current property
	        value.current = valueTypeManager[value.type].combine(state[key]);
	
	        // Update state
	        state.values[key] = value.current;
	    }
	
	    // Fire `frame` and `update` callbacks on all Roles
	    for (var i = 0; i < numRoles; i++) {
	        var role = this.roles[i];
	        var mappedValues = {};
	
	        each(state.values, createMapper(role, mappedValues));
	
	        if (role.frame) {
	            role.frame.call(this, mappedValues);
	        }
	
	        if (role.update && (hasChanged || this.firstFrame)) {
	            role.update.call(this, mappedValues);
	        }
	    }
	
	    // Reset hasChanged before further Actions might affect this
	    this.hasChanged = false;
	
	    // Check all Actions and fire onEnd if they've ended
	    if (this.isActive && checkAndFireHasEnded(this, hasChanged)) {
	        this.isActive = false;
	
	        // Fire `complete` callback
	        for (var i = 0; i < numRoles; i++) {
	            var role = this.roles[i];
	            if (role.complete) {
	                role.complete.call(this);
	            }
	        }
	
	        // If Actor is still inactive, fire next step
	        if (!this.isActive) {
	            this.next();
	        }
	    }
	
	    this.firstFrame = false;
	    this.framestamp = framestamp;
	};
	
	module.exports = update;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Watch = __webpack_require__(60),
	    watcher = new Watch(),
	    valueTypesManager = __webpack_require__(18),
	    utils = __webpack_require__(36),
	    isNum = utils.isNum,
	    each = utils.each;
	
	var numericalValues = ['current', 'to', 'min', 'max', 'velocity', 'friction', 'spring'],
	    numNumericalValues = numericalValues.length,
	    defaultValue = {
	    current: 0,
	    velocity: 0,
	    speed: 0,
	    frameChange: 0
	};
	
	function checkNumericalValue(name) {
	    return numericalValues.indexOf(name) > -1;
	}
	
	/*
	    Check Role typeMaps to see if this value name has been mapped
	    to a specific value type
	
	    @param [string]
	    @param [array]
	    @returns [string]: Value type
	*/
	function checkRoles(name, roles) {
	    var valueType;
	
	    each(roles, function (key, role) {
	        if (role._typeMap) {
	            valueType = role._typeMap[role.map(name)] || valueType;
	        }
	    });
	
	    return valueType;
	}
	
	/*
	    Check value for special type
	
	    @param [object]
	    @param [object]
	    @param [object]
	    @param [string]
	    @returns [string || false]
	*/
	function checkValueType(existingValue, newValue, scope, valueName) {
	    var valueType;
	
	    // Check existing value for type already set
	    if (existingValue && existingValue.type) {
	        valueType = existingValue.type;
	    } else {
	        // Or check Role _typeMap properties
	        if (scope.roles) {
	            valueType = checkRoles(valueName, scope.roles);
	        }
	
	        // Finally run tests
	        if (!valueType && utils.isString(newValue.current)) {
	            valueType = valueTypesManager.test(newValue.current);
	        }
	    }
	
	    return valueType;
	}
	
	/*
	    Resolve a property
	
	    @param [string]
	    @param [string || function || number]
	    @param [object]
	    @param [object]
	    @returns [number]
	*/
	function resolve(name, prop, value, scope) {
	    var isNumericalValue = checkNumericalValue(name);
	
	    // If function, resolve
	    if (utils.isFunc(prop) && isNumericalValue) {
	        prop = prop.call(scope, scope);
	    }
	
	    // If string, check for relative numbers and units
	    if (utils.isString(prop)) {
	        // If relative value
	        if (prop.indexOf('=') > 0) {
	            prop = calc.relativeValue(value.current, prop);
	        }
	
	        // If unit
	        if (isNumericalValue) {
	            splitUnit(prop, value);
	        }
	    }
	
	    if (isNumericalValue) {
	        prop = parseFloat(prop);
	    }
	
	    return prop;
	}
	
	/*
	    Split a value into sub-values
	
	    @param [string]
	    @param [object]
	    @param [object]
	    @param [valueTypeHandler]
	    @returns [object]
	*/
	function split(name, value, scope, valueTypeHandler) {
	    var splitValues = valueTypeHandler.split(),
	        i = 0;
	
	    var _loop = function () {
	        var propName = numericalValues[i];
	        var splitProp = {};
	
	        if (value.hasOwnProperty(propName)) {
	            var valueProp = value[propName];
	
	            // If we need to first resolve this, resolve
	            if (utils.isFunc(valueProp)) {
	                valueProp = valueProp.call(actor, actor);
	            }
	
	            splitProp = valueTypeHandler.split(valueProp);
	
	            // Assign split properties to each child value
	            each(splitProp, function (key, prop) {
	                // Create new value if none exists
	                splitValues[key] = splitValues[key] || utils.copy(valueTypesManager.defaultProps(value.type, key));
	                splitValues[key][propName] = prop;
	
	                if (utils.isString(splitProp[key])) {
	                    splitUnit(splitValues[key][propName], splitValues[key]);
	                }
	            });
	        }
	    };
	
	    for (; i < numNumericalValues; i++) {
	        _loop();
	    }
	
	    return splitValues;
	}
	
	/*
	    Split value into number and unit, and set unit to value
	
	    @param [string]
	    @param [object]
	*/
	function splitUnit(property, hostValue) {
	    var returnVal = property;
	
	    var _utils$splitValUnit = utils.splitValUnit(property);
	
	    var value = _utils$splitValUnit.value;
	    var unit = _utils$splitValUnit.unit;
	
	    if (!isNaN(value)) {
	        returnVal = value;
	        if (unit) {
	            hostValue.unit = unit;
	        }
	    }
	
	    return returnVal;
	}
	
	/*
	    Preprocess incoming values, splitting non-numerical values
	    into sub-values ie hex
	
	    @param [object]
	    @param [object]
	    @param [object]
	    @param [string]
	*/
	function preprocess(existing, incoming, scope, defaultProp) {
	    var values = {};
	
	    each(incoming, function (key, value) {
	        var existingValue = existing[key],
	            newValue = {};
	
	        if (utils.isObj(value)) {
	            newValue = value;
	        } else {
	            newValue[defaultProp] = value;
	        }
	
	        // If value doesn't have a special type, check for one
	        newValue.type = checkValueType(existingValue, newValue, scope, key);
	
	        values[key] = newValue;
	
	        // If we have a type property, split/assign default props
	        if (newValue.type) {
	            var typeHandler = valueTypesManager[newValue.type];
	
	            // If valueType handler has a split function, split this value
	            if (typeHandler.split) {
	                var splitValues = split(key, newValue, scope, typeHandler);
	                newValue.children = {};
	
	                each(splitValues, function (childName, childValue) {
	                    childValue = utils.merge(newValue, childValue);
	                    childValue.parent = childValue.name = key;
	                    childValue.propName = childName;
	
	                    delete childValue.type;
	                    delete childValue.children;
	
	                    values[key + childName] = childValue;
	                });
	
	                // Or just assign default properties for this value
	            } else {
	                values[key] = utils.merge(valueTypesManager.defaultProps(newValue.type, key), newValue);
	            }
	        }
	    });
	
	    return values;
	}
	
	module.exports = {
	
	    /*
	        Merge existing and incoming values, resolving properties
	        set as functions and splitting non-numerical values ie hex
	         @param [object]
	        @param [object]
	        @param [object]
	        @param [string] (optional)
	        @param [object]
	        @returns [object]: New values object
	    */
	    process: function process(existing, incoming, inherit, defaultProp, scope) {
	        if (existing === undefined) existing = {};
	        if (defaultProp === undefined) defaultProp = 'current';
	
	        var preprocessed = preprocess(existing, incoming, scope, defaultProp);
	
	        each(preprocessed, function (key, value) {
	            var newValue = existing[key] ? utils.copy(existing[key]) : utils.copy(defaultValue),
	                hasChildren = value.children !== undefined,
	                defaultActionValue = inherit.action ? inherit.action.getDefaultValue() : {};
	
	            value.action = value.watch ? watcher : inherit.action;
	
	            each(defaultActionValue, function (propName, defaultProp) {
	                newValue[propName] = inherit.hasOwnProperty(propName) && !value.hasOwnProperty(propName) ? inherit[propName] : defaultProp;
	            });
	
	            each(value, function (valueName, valueProp) {
	                // If property is not undefined or a number, resolve
	                if (valueProp !== undefined && !isNum(valueProp) && !hasChildren) {
	                    valueProp = resolve(valueName, valueProp, newValue, scope);
	                }
	
	                newValue[valueName] = valueProp;
	
	                // Set internal target if this property is 'to'
	                if (valueName === 'to') {
	                    newValue.target = newValue.to;
	                }
	            });
	
	            newValue.origin = newValue.current;
	            newValue.hasRange = isNum(newValue.min) && isNum(newValue.max) ? true : false;
	
	            existing[key] = newValue;
	            scope.updateOrder(key, utils.isString(newValue.watch), hasChildren);
	        });
	
	        return existing;
	    }
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Role = __webpack_require__(24);
	
	module.exports = new Role({
	    init: function init() {
	        if (this.init) {
	            this.init();
	        }
	    },
	
	    start: function start() {
	        if (this.onStart) {
	            this.onStart();
	        }
	    },
	
	    frame: function frame(state) {
	        if (this.onFrame) {
	            this.onFrame(state);
	        }
	    },
	
	    update: function update(state) {
	        if (this.onUpdate) {
	            this.onUpdate(state);
	        }
	    },
	
	    complete: function complete() {
	        if (this.onComplete) {
	            this.onComplete();
	        }
	    }
	});

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var // [number]: Default max size of history
	maxHistorySize = 3,
	
	/*
	    History constructor
	    
	    @param [var]: Variable to store in first history slot
	    @param [int] (optional): Maximum size of history
	*/
	History = function History(obj, max) {
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
	    add: function add(obj) {
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
	    get: function get(i) {
	        i = typeof i === "number" ? i : this.getSize() - 1;
	
	        return this.entries[i];
	    },
	
	    /*
	        Get the second newest history entry
	        
	        @return [var]: Entry found at index size - 2
	    */
	    getPrevious: function getPrevious() {
	        return this.get(this.getSize() - 2);
	    },
	
	    /*
	        Get current history size
	        
	        @return [int]: Current length of entries.length
	    */
	    getSize: function getSize() {
	        return this.entries.length;
	    }
	
	};
	
	module.exports = History;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Controls = (function () {
	    function Controls(actor, action, hasStarted) {
	        _classCallCheck(this, Controls);
	
	        this.actor = actor;
	        this.action = action;
	
	        if (hasStarted) {
	            this.id = this.bindAction();
	            this.action.activate();
	        }
	    }
	
	    Controls.prototype.start = function start(input) {
	        this.id = this.bindAction();
	        this.actor.startBound(this.id, input);
	        this.action.activate();
	        return this;
	    };
	
	    Controls.prototype.stop = function stop() {
	        this.actor.unbindAction(this.id);
	        this.action.deactivate();
	        return this;
	    };
	
	    Controls.prototype.pause = function pause() {
	        this.action.deactivate();
	        return this;
	    };
	
	    Controls.prototype.resume = function resume() {
	        this.action.activate();
	        return this;
	    };
	
	    Controls.prototype.toggle = function toggle() {
	        if (this.action.isActive) {
	            this.action.deactivate();
	        } else {
	            this.action.activate();
	        }
	        return this;
	    };
	
	    Controls.prototype.then = function then() {
	        var _actor;
	
	        (_actor = this.actor).then.apply(_actor, arguments);
	        return this;
	    };
	
	    Controls.prototype.bindAction = function bindAction() {
	        return this.actor.bindAction(this.action, this.id);
	    };
	
	    return Controls;
	})();
	
	module.exports = Controls;

/***/ },
/* 52 */
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
	'use strict';
	
	var Easing = __webpack_require__(25),
	    easingFunction,
	
	// Generate easing function with provided power
	generatePowerEasing = function generatePowerEasing(power) {
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
	    circ: function circ(progress) {
	        return 1 - Math.sin(Math.acos(progress));
	    },
	    back: function back(progress) {
	        var strength = 1.5;
	
	        return progress * progress * ((strength + 1) * progress - strength);
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
	        baseEasing[key + 'In'] = easingFunction['in'];
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Controls = __webpack_require__(51);
	
	var TweenControls = (function (_Controls) {
	    _inherits(TweenControls, _Controls);
	
	    function TweenControls() {
	        _classCallCheck(this, TweenControls);
	
	        _Controls.apply(this, arguments);
	    }
	
	    TweenControls.prototype.loop = function loop() {
	        this.action.resetValues(this.actor);
	        return this;
	    };
	
	    TweenControls.prototype.yoyo = function yoyo() {
	        this.action.reverseValues(this.actor);
	        return this;
	    };
	
	    TweenControls.prototype.flip = function flip() {
	        this.action.flipValues(this.actor);
	        return this;
	    };
	
	    TweenControls.prototype.seek = function seek(progress) {
	        this.action.elapsed = this.action.duration * progress;
	
	        if (!this.action.isActive) {
	            this.action.activate();
	            this.actor.process.fire();
	            this.action.deactivate();
	        }
	
	        return this;
	    };
	
	    return TweenControls;
	})(Controls);
	
	module.exports = TweenControls;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var calc = __webpack_require__(30),
	    utils = __webpack_require__(36),
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
	    velocity: function velocity(value, duration) {
	        value.velocity = value.velocity - speedPerFrame(value.deceleration, duration) + speedPerFrame(value.acceleration, duration);
	
	        return simulations.friction(value, duration);
	    },
	
	    /*
	        Glide
	        
	        Emulates touch device scrolling effects with exponential decay
	        http://ariya.ofilabs.com/2013/11/javascript-kinetic-scrolling-part-2.html
	    */
	    glide: function glide(value, duration, started) {
	        var timeUntilFinished = -utils.currentTime() - started,
	            delta = -value.to * Math.exp(timeUntilFinished / value.timeConstant);
	
	        return value.to + delta - value.current;
	    },
	
	    /*
	        Friction
	         Apply friction to the current value
	        TODO: Make this framerate-independent
	    */
	    friction: function friction(value, duration) {
	        var newVelocity = speedPerFrame(value.velocity, duration) * (1 - value.friction);
	
	        return calc.speedPerSecond(newVelocity, duration);
	    },
	
	    spring: function spring(value, duration) {
	        var distance = value.to - value.current;
	
	        value.velocity += distance * speedPerFrame(value.spring, duration);
	
	        return simulations.friction(value, duration);
	    },
	
	    bounce: function bounce(value) {
	        var distance = 0,
	            to = value.to,
	            current = value.current,
	            bounce = value.bounce;
	
	        // If we're using glide simulation we have to flip our target too
	        if (value.simulate === 'glide') {
	            distance = to - current;
	            value.to = current - distance * bounce;
	        }
	
	        return value.velocity *= -bounce;
	    },
	
	    capture: function capture(value, target) {
	        value.to = target;
	        value.simulate = 'spring';
	        value.capture = value.min = value.max = undefined;
	    }
	};
	
	module.exports = simulations;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var theLoop = __webpack_require__(61),
	    ProcessManager = function ProcessManager() {
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
	    getProcess: function getProcess(i) {
	        return this.activeProcesses[i];
	    },
	
	    /*
	        Get number of active processes
	        
	        @return [int]: Number of active processes
	    */
	    getActiveCount: function getActiveCount() {
	        return this.activeCount;
	    },
	
	    /*
	        Get active tokens
	         @return [array]: Active tokens
	    */
	    getActive: function getActive() {
	        return this.activeIds;
	    },
	
	    /*
	        Get the length of the deactivate queue
	        
	        @return [int]: Length of queue
	    */
	    getQueueLength: function getQueueLength() {
	        return this.deactivateQueue.length;
	    },
	
	    /*
	        Fire all active processes
	        
	        @param [int]: Timestamp of executing frames
	        @param [int]: Time since previous frame
	        @return [boolean]: True if active processes found
	    */
	    fireActive: function fireActive(framestamp, elapsed) {
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
	    register: function register() {
	        return this.processCounter++;
	    },
	
	    /*
	        Activate a process
	        
	        @param [int]: Index of active process
	    */
	    activate: function activate(process, i) {
	        var queueIndex = this.deactivateQueue.indexOf(i),
	            isQueued = queueIndex > -1,
	            isActive = this.activeIds.indexOf(i) > -1;
	
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
	    deactivate: function deactivate(i) {
	        this.deactivateQueue.push(i);
	    },
	
	    /*
	        Purge the deactivate queue
	    */
	    purge: function purge() {
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
/* 56 */
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
	    FLOAT_32_SUPPORTED = typeof Float32Array !== "undefined",
	    a = function a(a1, a2) {
	    return 1.0 - 3.0 * a2 + 3.0 * a1;
	},
	    b = function b(a1, a2) {
	    return 3.0 * a2 - 6.0 * a1;
	},
	    c = function c(a1) {
	    return 3.0 * a1;
	},
	    getSlope = function getSlope(t, a1, a2) {
	    return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
	},
	    calcBezier = function calcBezier(t, a1, a2) {
	    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
	},
	
	/*
	    Bezier constructor
	*/
	Bezier = function Bezier(mX1, mY1, mX2, mY2) {
	    var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE),
	        _precomputed = false,
	        binarySubdivide = function binarySubdivide(aX, aA, aB) {
	        var currentX,
	            currentT,
	            i = 0;
	
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
	        newtonRaphsonIterate = function newtonRaphsonIterate(aX, aGuessT) {
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
	        calcSampleValues = function calcSampleValues() {
	        for (var i = 0; i < K_SPLINE_TABLE_SIZE; ++i) {
	            sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
	        }
	    },
	        getTForX = function getTForX(aX) {
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
	
	        dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
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
	        precompute = function precompute() {
	        _precomputed = true;
	        if (mX1 != mY1 || mX2 != mY2) {
	            calcSampleValues();
	        }
	    },
	
	    /*
	        Generated function
	        
	        Returns value 0-1 based on X
	    */
	    f = function f(aX) {
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (value) {
	    return typeof value === 'string' ? value.split(/,\s*/) : [value];
	};

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (value) {
	    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var positionTerms = __webpack_require__(35).positions,
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
	        createProps = function createProps(funcName) {
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(26),
	    calc = __webpack_require__(30),
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
	            
	        @param [Actor]
	        @param [Value]: Current value
	        @param [string]: Key of current value
	        @return [number]: Calculated value
	    */
	
	    Watch.prototype.process = function process(actor, value, key) {
	        var values = actor.values,
	            newValue = value.current,
	            watchedKey = value.watch,
	            watchedValue = values[watchedKey] ? values[watchedKey] : {},
	            inputOffset = actor.inputOffset;
	
	        // First look at Action and check value isn't linking itself
	        if (watchedValue.current !== undefined && key !== watchedKey) {
	            newValue = watchedValue.current;
	
	            // Then check values in Input
	        } else if (inputOffset && inputOffset.hasOwnProperty(watchedKey)) {
	            newValue = value.origin + inputOffset[watchedKey] * value.amp;
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    The loop
	*/
	'use strict';
	
	var Timer = __webpack_require__(62),
	    tick = __webpack_require__(63),
	    Loop = function Loop() {
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
	    frame: function frame() {
	        var self = this;
	
	        tick(function () {
	            var framestamp = self.timer.update(),
	                // Currently just measuring in ms - will look into hi-res timestamps
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
	    start: function start() {
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
	    stop: function stop() {
	        this.isRunning = false;
	    },
	
	    /*
	        Set the callback to run every frame
	        
	        @param [Object]: Execution context
	        @param [function]: Callback to fire
	    */
	    setCallback: function setCallback(scope, callback) {
	        this.scope = scope;
	        this.callback = callback;
	    }
	
	};
	
	module.exports = new Loop();

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var utils = __webpack_require__(36),
	    maxElapsed = 33,
	    Timer = function Timer() {
	    this.elapsed = 16.7;
	    this.current = utils.currentTime();
	    this.update();
	};
	
	Timer.prototype = {
	    update: function update() {
	        this.prev = this.current;
	        this.current = utils.currentTime();
	        this.elapsed = Math.min(this.current - this.prev, maxElapsed);
	
	        return this.current;
	    },
	
	    getElapsed: function getElapsed() {
	        return this.elapsed;
	    },
	
	    clock: function clock() {
	        this.current = utils.currentTime();
	    }
	};
	
	module.exports = Timer;

/***/ },
/* 63 */
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
	    hasWindow = typeof window !== "undefined";
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjMyYTA5YmYyY2FmNDc5NDc4NTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2FkL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9oc2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcG9zaXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9kaW1lbnNpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9hdHRyL2F0dHJSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvY3NzUm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvc3ZnL3N2Z1JvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL0FjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXRlcmF0b3IvSXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvUHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvUm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi9FYXNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1NpbXVsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1RyYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2Nzcy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvY3NzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvY3NzL3R5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9zdmcvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL3N2Zy90eXBlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvcGF0aC9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9Nb2RNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvUXVldWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L1BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3IvdmFsdWUtb3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvZGVmYXVsdFJvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9IaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9scy9Db250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi9wcmVzZXQtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuL1R3ZWVuQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvc2ltdWxhdGUvc2ltdWxhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi9CZXppZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1jb21tYS1kZWxpbWl0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1icmVhay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvY3NzL3RyYW5zZm9ybS1kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1dhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL2xvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvdGljay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7Ozs7O0FDdENBLEtBQUksU0FBUyxHQUFHLG1CQUFPLENBQUMsQ0FBYSxDQUFDO0tBQ2xDLEtBQUssR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDOztBQUV0QixPQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOzs7Ozs7QUFNekMsT0FBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEdBQUcsWUFBWTtBQUMvQixXQUFNLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztFQUNyQixDOzs7Ozs7QUNYRCxhQUFZLENBQUM7O0FBRWIsS0FBSSxTQUFTLEdBQUcsbUJBQU8sQ0FBQyxDQUFjLENBQUMsQ0FBQzs7Ozs7QUFLeEMsVUFBUyxDQUFDLFlBQVksQ0FBQztBQUNuQixVQUFLLEVBQUUsbUJBQU8sQ0FBQyxDQUFzQixDQUFDO0FBQ3RDLFVBQUssRUFBRSxtQkFBTyxDQUFDLENBQXNCLENBQUM7QUFDdEMsT0FBRSxFQUFFLG1CQUFPLENBQUMsQ0FBbUIsQ0FBQztBQUNoQyxRQUFHLEVBQUUsbUJBQU8sQ0FBQyxDQUFvQixDQUFDO0FBQ2xDLFFBQUcsRUFBRSxtQkFBTyxDQUFDLENBQW9CLENBQUM7QUFDbEMsUUFBRyxFQUFFLG1CQUFPLENBQUMsQ0FBb0IsQ0FBQztBQUNsQyxVQUFLLEVBQUUsbUJBQU8sQ0FBQyxDQUFzQixDQUFDO0FBQ3RDLGNBQVMsRUFBRSxtQkFBTyxDQUFDLEVBQTBCLENBQUM7QUFDOUMsZUFBVSxFQUFFLG1CQUFPLENBQUMs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O01BQ2IsQ0FBQztFQUVMLE1BQU07QUFDSCxTQUFJLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDO0VBQ3ZDOztBQUVELE9BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNjMyYTA5YmYyY2FmNDc5NDc4NTJcbiAqKi8iLCJ2YXIgcG9wbW90aW9uID0gcmVxdWlyZSgnLi9tb2R1bGUuanMnKSxcbiAgICBVSXJlZiA9IHdpbmRvdy51aTtcblxud2luZG93LnVpID0gd2luZG93LnBvcG1vdGlvbiA9IHBvcG1vdGlvbjtcblxuLypcbiAgICBJZiBub0NvbmZsaWN0IGlzIHJ1biwgdGhlIG9yaWdpbmFsIHJlZmVyZW5jZSB0byB3aW5kb3cuVUkgaXNcbiAgICByZXN0b3JlZCBhbmQgUG9wbW90aW9uIGlzIGxvYWRlZCB0byB3aW5kb3cuUG9wbW90aW9uXG4qL1xud2luZG93LnVpLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LnVpID0gVUlyZWY7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xvYWQvZ2xvYmFsLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBwb3Btb3Rpb24gPSByZXF1aXJlKCcuLi9wb3Btb3Rpb24nKTtcblxuLypcbiAgICBBZGQgb3B0aW9uYWwgY3VzdG9tIHZhbHVlIHR5cGUgc3VwcG9ydFxuKi9cbnBvcG1vdGlvbi5hZGRWYWx1ZVR5cGUoe1xuICAgIGFscGhhOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9hbHBoYScpLFxuICAgIGFuZ2xlOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9hbmdsZScpLFxuICAgIHB4OiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9weCcpLFxuICAgIGhzbDogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvaHNsJyksXG4gICAgcmdiOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9yZ2InKSxcbiAgICBoZXg6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2hleCcpLFxuICAgIGNvbG9yOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9jb2xvcicpLFxuICAgIHBvc2l0aW9uczogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJyksXG4gICAgZGltZW5zaW9uczogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvZGltZW5zaW9ucycpLFxuICAgIHNjYWxlOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9zY2FsZScpLFxuICAgIHNoYWRvdzogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvc2hhZG93Jylcbn0pO1xuXG4vKlxuICAgIFByZWRlZmluZWQgcm9sZXNcbiovXG5cbnBvcG1vdGlvbi5hdHRyID0gcmVxdWlyZSgnLi4vcm9sZXMvYXR0ci9hdHRyUm9sZScpO1xucG9wbW90aW9uLmNzcyA9IHJlcXVpcmUoJy4uL3JvbGVzL2Nzcy9jc3NSb2xlJyk7XG5wb3Btb3Rpb24uc3ZnID0gcmVxdWlyZSgnLi4vcm9sZXMvc3ZnL3N2Z1JvbGUnKTtcbnBvcG1vdGlvbi5kcmF3UGF0aCA9IHJlcXVpcmUoJy4uL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcG9wbW90aW9uO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xvYWQvbW9kdWxlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB2YWx1ZVR5cGVNYW5hZ2VyID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9tYW5hZ2VyJyksXG4gICAgc2VsZWN0ID0gcmVxdWlyZSgnLi9hY3Rvci9zZWxlY3QnKSxcblxuICAgIFBvcG1vdGlvbiA9IHtcblxuICAgICAgICBBY3RvcjogcmVxdWlyZSgnLi9hY3Rvci9BY3RvcicpLFxuXG4gICAgICAgIElucHV0OiByZXF1aXJlKCcuL2lucHV0L0lucHV0JyksXG5cbiAgICAgICAgSXRlcmF0b3I6IHJlcXVpcmUoJy4vaXRlcmF0b3IvSXRlcmF0b3InKSxcblxuICAgICAgICBQcm9jZXNzOiByZXF1aXJlKCcuL3Byb2Nlc3MvUHJvY2VzcycpLFxuXG4gICAgICAgIEVhc2luZzogcmVxdWlyZSgnLi9hY3Rpb25zL3R3ZWVuL0Vhc2luZycpLFxuXG4gICAgICAgIFJvbGU6IHJlcXVpcmUoJy4vcm9sZXMvUm9sZScpLFxuXG4gICAgICAgIEFjdGlvbjogcmVxdWlyZSgnLi9hY3Rpb25zL0FjdGlvbicpLFxuICAgICAgICBUd2VlbjogcmVxdWlyZSgnLi9hY3Rpb25zL1R3ZWVuJyksXG4gICAgICAgIFNpbXVsYXRlOiByZXF1aXJlKCcuL2FjdGlvbnMvU2ltdWxhdGUnKSxcbiAgICAgICAgVHJhY2s6IHJlcXVpcmUoJy4vYWN0aW9ucy9UcmFjaycpLFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDcmVhdGUgYW4gSXRlcmF0b3Igb2YgQWN0b3JzIHdpdGggc2VsZWN0ZWQgZG9tIGVsZW1lbnRzXG4gICAgICAgICovXG4gICAgICAgIHNlbGVjdDogZnVuY3Rpb24gKHNlbGVjdG9yLCBvcHRzID0ge30pIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3Rpb24gPSBzZWxlY3Qoc2VsZWN0b3IpLFxuICAgICAgICAgICAgICAgIGFjdG9ycyA9IFtdO1xuXG4gICAgICAgICAgICBzZWxlY3Rpb24uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIG9wdHMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgYWN0b3JzLnB1c2gobmV3IHRoaXMuQWN0b3Iob3B0cykpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcy5JdGVyYXRvcihhY3RvcnMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkZFZhbHVlVHlwZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFsdWVUeXBlTWFuYWdlci5leHRlbmQuYXBwbHkodmFsdWVUeXBlTWFuYWdlciwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNhbGM6IHJlcXVpcmUoJy4vaW5jL2NhbGMnKVxuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9wbW90aW9uO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3BvcG1vdGlvbi5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMVxuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYWxwaGEuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ2RlZydcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FuZ2xlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdweCdcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgZ2V0Q29sb3JWYWx1ZXMgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzJyksXG4gICAgZnVuY3Rpb25DcmVhdGUgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1jcmVhdGUnKSxcbiAgICBkZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKSxcbiAgICB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLmhzbDtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgSHVlOiB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDM2MFxuICAgICAgICB9LFxuICAgICAgICBTYXR1cmF0aW9uOiBkZWZhdWx0UHJvcHMucGVyY2VudCxcbiAgICAgICAgTGlnaHRuZXNzOiBkZWZhdWx0UHJvcHMucGVyY2VudCxcbiAgICAgICAgQWxwaGE6IGRlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ2hzbCcpID4gLTEpO1xuICAgIH0sXG4gICAgXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZ2V0Q29sb3JWYWx1ZXModmFsdWUsIHRlcm1zKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb25DcmVhdGUoY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgdGVybXMsICcsICcsIDIpLCAnaHNsYScpO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgZ2V0Q29sb3JWYWx1ZXMgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzJyksXG4gICAgZnVuY3Rpb25DcmVhdGUgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1jcmVhdGUnKSxcbiAgICBkZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKSxcbiAgICBjb2xvckRlZmF1bHRzID0gZGVmYXVsdFByb3BzLmNvbG9yLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JykuY29sb3JzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBSZWQ6IGNvbG9yRGVmYXVsdHMsXG4gICAgICAgIEdyZWVuOiBjb2xvckRlZmF1bHRzLFxuICAgICAgICBCbHVlOiBjb2xvckRlZmF1bHRzLFxuICAgICAgICBBbHBoYTogZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZigncmdiJykgPiAtMSk7XG4gICAgfSxcbiAgICBcbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBnZXRDb2xvclZhbHVlcyh2YWx1ZSwgdGVybXMpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbkNyZWF0ZShjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCB0ZXJtcywgJywgJywgMiksICdyZ2JhJyk7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9yZ2IuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHJnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiByZ2IuZGVmYXVsdFByb3BzLFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZignIycpID4gLTEpO1xuICAgIH0sXG4gICAgXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgciwgZywgYjtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAyKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMywgMik7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDUsIDIpO1xuXG4gICAgICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDEpO1xuICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigyLCAxKTtcbiAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoMywgMSk7XG4gICAgICAgICAgICByICs9IHI7XG4gICAgICAgICAgICBnICs9IGc7XG4gICAgICAgICAgICBiICs9IGI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgUmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgICAgICAgICBHcmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgICAgICAgICAgQmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgICAgICAgICAgQWxwaGE6IDFcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gcmdiLmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICByZ2IgPSByZXF1aXJlKCcuL3JnYicpLFxuICAgIGhzbCA9IHJlcXVpcmUoJy4vaHNsJyksXG4gICAgaGV4ID0gcmVxdWlyZSgnLi9oZXgnKSxcbiAgICBzdXBwb3J0ZWQgPSBbcmdiLCBoc2wsIGhleF0sXG4gICAgbnVtU3VwcG9ydGVkID0gMyxcblxuICAgIHJ1blN1cHBvcnRlZCA9IGZ1bmN0aW9uIChtZXRob2QsIHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtU3VwcG9ydGVkOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzdXBwb3J0ZWRbaV0udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkW2ldW21ldGhvZF0odmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHV0aWxzLm1lcmdlKHJnYi5kZWZhdWx0UHJvcHMsIGhzbC5kZWZhdWx0UHJvcHMpLFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiByZ2IudGVzdCh2YWx1ZSkgfHwgaGV4LnRlc3QodmFsdWUpIHx8IGhzbC50ZXN0KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gcnVuU3VwcG9ydGVkKCdzcGxpdCcsIHZhbHVlKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKHZhbHVlcy5SZWQgIT09IHVuZGVmaW5lZCkgPyByZ2IuY29tYmluZSh2YWx1ZXMpIDogaHNsLmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbG9yLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgcHhEZWZhdWx0cyA9IHJlcXVpcmUoJy4vcHgnKS5kZWZhdWx0UHJvcHMsXG4gICAgc3BsaXRTcGFjZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL3NwbGl0LXNwYWNlLWRlbGltaXRlZCcpLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JykucG9zaXRpb25zO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogcHhEZWZhdWx0cyxcbiAgICAgICAgXG4gICAgLypcbiAgICAgICAgU3BsaXQgcG9zaXRpb25zIGluIGZvcm1hdCBcIlggWSBaXCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogUG9zaXRpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwJSAzMCUgMFwiIC0+IHsyMCUsIDMwJSwgMH1cbiAgICAgICAgICAgIFwiMjAlIDMwJVwiIC0+IHsyMCUsIDMwJX1cbiAgICAgICAgICAgIFwiMjAlXCIgLT4gezIwJSwgMjAlfVxuICAgICovXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcG9zaXRpb25zID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSksXG4gICAgICAgICAgICBudW1Qb3NpdGlvbnMgPSBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgICAgc3BsaXRWYWx1ZSA9IHtcbiAgICAgICAgICAgICAgICBYOiBwb3NpdGlvbnNbMF0sXG4gICAgICAgICAgICAgICAgWTogKG51bVBvc2l0aW9ucyA+IDEpID8gcG9zaXRpb25zWzFdIDogcG9zaXRpb25zWzBdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGlmIChudW1Qb3NpdGlvbnMgPiAyKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlLlogPSBwb3NpdGlvbnNbMl07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgdGVybXMsICcgJyk7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JykuZGltZW5zaW9ucyxcbiAgICBweERlZmF1bHRzID0gcmVxdWlyZSgnLi9weCcpLmRlZmF1bHRQcm9wcyxcbiAgICBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgc3BsaXRTcGFjZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL3NwbGl0LXNwYWNlLWRlbGltaXRlZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogcHhEZWZhdWx0cyxcbiAgICBcbiAgICAvKlxuICAgICAgICBTcGxpdCBkaW1lbnNpb25zIGluIGZvcm1hdCBcIlRvcCBSaWdodCBCb3R0b20gTGVmdFwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IERpbWVuc2lvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHggNDBweFwiIC0+IHsyMHB4LCAwLCAzMHB4LCA0MHB4fVxuICAgICAgICAgICAgXCIyMHB4IDAgMzBweFwiIC0+IHsyMHB4LCAwLCAzMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4IDBcIiAtPiB7MjBweCwgMCwgMjBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweFwiIC0+IHsyMHB4LCAyMHB4LCAyMHB4LCAyMHB4fVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggVC9SL0IvTCBtZXRyaWNzXG4gICAgKi9cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBkaW1lbnNpb25zID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSksXG4gICAgICAgICAgICBudW1EaW1lbnNpb25zID0gZGltZW5zaW9ucy5sZW5ndGgsXG4gICAgICAgICAgICBqdW1wQmFjayA9IChudW1EaW1lbnNpb25zICE9PSAxKSA/IDIgOiAxLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBqID0gMCxcbiAgICAgICAgICAgIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICBmb3IgKDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgc3BsaXRWYWx1ZVt0ZXJtc1tpXV0gPSBkaW1lbnNpb25zW2pdO1xuXG4gICAgICAgICAgICAvLyBKdW1wIGJhY2sgKHRvIHN0YXJ0KSBjb3VudGVyIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiBvdXIgdmFsdWVzXG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBqID0gKGogPT09IG51bURpbWVuc2lvbnMpID8gaiAtIGp1bXBCYWNrIDogajtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCB0ZXJtcywgJyAnKTtcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2RpbWVuc2lvbnMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgaW5pdDogMVxuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2NhbGUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNvbG9yID0gcmVxdWlyZSgnLi9jb2xvcicpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgcHhEZWZhdWx0cyA9IHJlcXVpcmUoJy4vcHgnKS5kZWZhdWx0UHJvcHMsXG4gICAgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5zaGFkb3csXG4gICAgc3BsaXRTcGFjZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL3NwbGl0LXNwYWNlLWRlbGltaXRlZCcpLFxuICAgIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBzaGFkb3dUZXJtcyA9IHRlcm1zLnNsaWNlKDAsNCk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiB1dGlscy5tZXJnZShjb2xvci5kZWZhdWx0UHJvcHMsIHtcbiAgICAgICAgWDogcHhEZWZhdWx0cyxcbiAgICAgICAgWTogcHhEZWZhdWx0cyxcbiAgICAgICAgUmFkaXVzOiBweERlZmF1bHRzLFxuICAgICAgICBTcHJlYWQ6IHB4RGVmYXVsdHNcbiAgICB9KSxcblxuICAgIC8qXG4gICAgICAgIFNwbGl0IHNoYWRvdyBwcm9wZXJ0aWVzIFwiWCBZIFJhZGl1cyBTcHJlYWQgQ29sb3JcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBTaGFkb3cgcHJvcGVydHlcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgYml0cyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpLFxuICAgICAgICAgICAgbnVtQml0cyA9IGJpdHMubGVuZ3RoLFxuICAgICAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gZmFsc2UsXG4gICAgICAgICAgICBjb2xvclByb3AgPSAnJyxcbiAgICAgICAgICAgIHRoaXNCaXQsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICBmb3IgKDsgaSA8IG51bUJpdHM7IGkrKykge1xuICAgICAgICAgICAgdGhpc0JpdCA9IGJpdHNbaV07XG5cbiAgICAgICAgICAgIC8vIElmIHdlJ3ZlIHJlYWNoZWQgdGhlIGNvbG9yIHByb3BlcnR5LCBhcHBlbmQgdG8gY29sb3Igc3RyaW5nXG4gICAgICAgICAgICBpZiAoaGFzUmVhY2hlZENvbG9yIHx8IGNvbG9yLnRlc3QodGhpc0JpdCkpIHtcbiAgICAgICAgICAgICAgICBoYXNSZWFjaGVkQ29sb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbG9yUHJvcCArPSB0aGlzQml0O1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVbdGVybXNbaV1dID0gdGhpc0JpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHNwbGl0VmFsdWUsIGNvbG9yLnNwbGl0KGNvbG9yUHJvcCkpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCBzaGFkb3dUZXJtcywgJyAnKSArIGNvbG9yLmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NoYWRvdy5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUm9sZSA9IHJlcXVpcmUoJy4uL1JvbGUnKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuZWFjaDtcblxudmFyIGF0dHJSb2xlID0gbmV3IFJvbGUoe1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBhY3RvciA9IHRoaXM7XG5cbiAgICAgICAgZWFjaChzdGF0ZSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGF0dHJSb2xlLnNldChhY3Rvci5lbGVtZW50LCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGdldDogZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICB9LFxuXG4gICAgc2V0OiBmdW5jdGlvbiAoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBhdHRyUm9sZTtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvYXR0ci9hdHRyUm9sZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUm9sZSA9IHJlcXVpcmUoJy4uL1JvbGUnKTtcbnZhciBidWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuZWFjaDtcblxudmFyIHByZWZpeGVzID0gWydXZWJraXQnLCdNb3onLCdPJywnbXMnLCAnJ107XG52YXIgbnVtUHJlZml4ZXMgPSBwcmVmaXhlcy5sZW5ndGg7XG52YXIgcHJvcGVydHlOYW1lQ2FjaGUgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgXG4vKlxuICAgIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gICAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG52YXIgdGVzdFByZWZpeCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHRlc3RFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgXG4gICAgICAgIHByb3BlcnR5TmFtZUNhY2hlW2tleV0gPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXSxcbiAgICAgICAgICAgICAgICBwcmVmaXhlZCA9IChwcmVmaXggPT09ICcnKSA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgICAgICAgICAgaWYgKHRlc3RFbGVtZW50LnN0eWxlLmhhc093blByb3BlcnR5KHByZWZpeGVkKSkge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZUNhY2hlW2tleV0gPSBwcmVmaXhlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5TmFtZUNhY2hlW2tleV07XG4gICAgfTtcblxudmFyIGNzc1JvbGUgPSBuZXcgUm9sZSh7XG4gICAgX21hcDogcmVxdWlyZSgnLi9tYXAnKSxcbiAgICBfdHlwZU1hcDogcmVxdWlyZSgnLi90eXBlLW1hcCcpLFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGFjdG9yID0gdGhpcztcblxuICAgICAgICBlYWNoKGJ1aWxkKHN0YXRlKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGNzc1JvbGUuc2V0KGFjdG9yLmVsZW1lbnQsIGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZ2V0OiBmdW5jdGlvbiAoZWxlbWVudCwga2V5KSB7XG4gICAgICAgIGtleSA9IHByb3BlcnR5TmFtZUNhY2hlW2tleV0gfHwgdGVzdFByZWZpeChrZXkpO1xuXG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVtrZXldO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNldDogZnVuY3Rpb24gKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcbiAgICAgICAga2V5ID0gcHJvcGVydHlOYW1lQ2FjaGVba2V5XSB8fCB0ZXN0UHJlZml4KGtleSk7XG5cbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNzc1JvbGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvY3NzL2Nzc1JvbGUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJvbGUgPSByZXF1aXJlKCcuLi9Sb2xlJyksXG4gICAgYXR0clJvbGUgPSByZXF1aXJlKCcuLi9hdHRyL2F0dHJSb2xlJyksXG4gICAgYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyksXG4gICAgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2g7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFJvbGUoe1xuICAgIG5hbWU6ICdzdmcnLFxuXG4gICAgX21hcDogcmVxdWlyZSgnLi4vY3NzL21hcCcpLFxuICAgIF90eXBlTWFwOiByZXF1aXJlKCcuL3R5cGUtbWFwJyksXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYm91bmRpbmdCb3ggPSB0aGlzLmVsZW1lbnQuZ2V0QkJveCgpLFxuICAgICAgICAgICAgdmFsdWVzID0gdGhpcy52YWx1ZXMsXG4gICAgICAgICAgICAvLyBUT0RPOiBTdXBwb3J0IHB4XG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW5YID0gdmFsdWVzLnRyYW5zZm9ybU9yaWdpblggPyB2YWx1ZXMudHJhbnNmb3JtT3JpZ2luWC5jdXJyZW50IDogNTAsXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW5ZID0gdmFsdWVzLnRyYW5zZm9ybU9yaWdpblkgPyB2YWx1ZXMudHJhbnNmb3JtT3JpZ2luWS5jdXJyZW50IDogNTAsXG4gICAgICAgICAgICBvcmlnaW4gPSB7XG4gICAgICAgICAgICAgICAgeDogYm91bmRpbmdCb3gud2lkdGggKiAodHJhbnNmb3JtT3JpZ2luWCAvIDEwMCkgKyBib3VuZGluZ0JveC54LFxuICAgICAgICAgICAgICAgIHk6IGJvdW5kaW5nQm94LmhlaWdodCAqICh0cmFuc2Zvcm1PcmlnaW5ZIC8gMTAwKSArIGJvdW5kaW5nQm94LnlcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdmdPcmlnaW4gPSBvcmlnaW47XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBhY3RvciA9IHRoaXM7XG4gICAgICAgIGVhY2goYnVpbGQoc3RhdGUsIHRoaXMuc3ZnT3JpZ2luKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGF0dHJSb2xlLnNldChhY3Rvci5lbGVtZW50LCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9zdmcvc3ZnUm9sZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUm9sZSA9IHJlcXVpcmUoJy4uL1JvbGUnKTtcbnZhciBjc3NSb2xlID0gcmVxdWlyZSgnLi4vY3NzL2Nzc1JvbGUnKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuZWFjaDtcblxuLypcbiAgICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQZXJjZW50YWdlIG9mIHRvdGFsIGxlbmd0aFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xudmFyIHBlcmNlbnRUb1BpeGVscyA9IGZ1bmN0aW9uIChwZXJjZW50YWdlLCBsZW5ndGgpIHtcbiAgICByZXR1cm4gKHBhcnNlRmxvYXQocGVyY2VudGFnZSkgLyAxMDApICogbGVuZ3RoICsgJ3B4Jztcbn07XG5cbi8qXG4gICAgQ3JlYXRlIHN0eWxlc1xuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogU1ZHIFBhdGggcHJvcGVydGllc1xuICAgIEBwYXJhbSBbb2JqZWN0XTogTGVuZ3RoIG9mIHBhdGhcbiAgICBAcmV0dXJucyBbb2JqZWN0XTogS2V5L3ZhbHVlIHBhaXJzIG9mIHZhbGlkIENTUyBwcm9wZXJ0aWVzXG4qL1xudmFyIGNyZWF0ZVN0eWxlcyA9IGZ1bmN0aW9uIChwcm9wcywgbGVuZ3RoKSB7XG4gICAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlLFxuICAgICAgICBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgICAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlcyA9IHt9O1xuXG4gICAgZWFjaChwcm9wcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAga2V5ID0gU1ZHRHJhd1BhdGguX21hcFtrZXldIHx8IGtleTtcblxuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgICAgIGNhc2UgJ3NwYWNpbmcnOlxuICAgICAgICAgICAgICAgIGhhc0Rhc2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbn07XG5cbi8qXG4gICAgRHJhdyBQYXRoIHJvbGVcbiovXG52YXIgU1ZHRHJhd1BhdGggPSBuZXcgUm9sZSh7XG4gICAgX21hcDogcmVxdWlyZSgnLi9tYXAnKSxcblxuICAgIF90eXBlTWFwOiB7XG4gICAgICAgIHN0cm9rZTogJ2NvbG9yJ1xuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGF0aExlbmd0aCA9IHRoaXMuZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBVcGRhdGUgYHBhdGhgIHN0eWxlcyBhbmQgaWYgYGVsZW1lbnRgIGlzIHByZXNlbnQsIHNldFxuICAgICAgICB4LCB5IGFuZCByb3RhdGlvblxuICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgY3NzUm9sZS51cGRhdGUuY2FsbCh0aGlzLCBjcmVhdGVTdHlsZXMoc3RhdGUsIHRoaXMucGF0aExlbmd0aCkpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNWR0RyYXdQYXRoO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBNb2RNYW5hZ2VyID0gcmVxdWlyZSgnLi4vaW5jL01vZE1hbmFnZXInKSxcbiAgICB2YWx1ZVR5cGVNYW5hZ2VyID0gbmV3IE1vZE1hbmFnZXIoKTtcblxudmFsdWVUeXBlTWFuYWdlci5kZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiAodHlwZSwga2V5KSB7XG4gICAgdmFyIHZhbHVlVHlwZSA9IHRoaXNbdHlwZV0sXG4gICAgICAgIGRlZmF1bHRQcm9wcyA9ICh2YWx1ZVR5cGUuZGVmYXVsdFByb3BzKSA/IHZhbHVlVHlwZS5kZWZhdWx0UHJvcHNba2V5XSB8fCB2YWx1ZVR5cGUuZGVmYXVsdFByb3BzIDoge307XG5cbiAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xufTtcblxudmFsdWVUeXBlTWFuYWdlci50ZXN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBmYWxzZTtcblxuICAgIHRoaXMuZWFjaChmdW5jdGlvbiAoa2V5LCBtb2QpIHtcbiAgICAgICAgaWYgKG1vZC50ZXN0ICYmIG1vZC50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdHlwZSA9IGtleTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHR5cGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbHVlVHlwZU1hbmFnZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuYWdlci5qc1xuICoqLyIsIi8qXG4gICAgQ3JlYXRlIGFuIEFjdG9yQ29sbGVjdGlvbiBiYXNlZCBvbiBhIHNlbGVjdGlvbiBvZiBET00gbm9kZXNcblxuICAgIEBwYXJhbSBbc3RyaW5nIHx8IE5vZGVMaXN0IHx8IGpRdWVyeSBvYmplY3RdOlxuICAgICAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdCB8fCBqUXVlcnkgb2JqZWN0LlxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgdmFyIG5vZGVzID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgOiBzZWxlY3RvcixcbiAgICAgICAgZWxlbWVudHMgPSBbXTtcblxuICAgIC8vIElmIGpRdWVyeSBzZWxlY3Rpb24sIGdldCBhcnJheSBvZiBFbGVtZW50c1xuICAgIGlmIChub2Rlcy5nZXQpIHtcbiAgICAgICAgZWxlbWVudHMgPSBub2Rlcy5nZXQoKTtcblxuICAgIC8vIE9yIGNvbnZlcnQgTm9kZUxpc3QgdG8gYXJyYXlcbiAgICB9IGVsc2UgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgICBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwobm9kZXMpO1xuXG4gICAgLy8gT3IgaWYgaXQncyBqdXN0IGFuIEVsZW1lbnQsIHB1dCBpbnRvIGFycmF5XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudHMucHVzaChub2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rvci9zZWxlY3QuanNcbiAqKi8iLCJ2YXIgUHJvY2VzcyA9IHJlcXVpcmUoJy4uL3Byb2Nlc3MvUHJvY2VzcycpLFxuICAgIFF1ZXVlID0gcmVxdWlyZSgnLi4vaW5jL1F1ZXVlJyksXG4gICAgUG9pbnRlciA9IHJlcXVpcmUoJy4uL2lucHV0L1BvaW50ZXInKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIHVwZGF0ZSA9IHJlcXVpcmUoJy4vdXBkYXRlJyksXG4gICAgdmFsdWVPcHMgPSByZXF1aXJlKCcuL3ZhbHVlLW9wZXJhdGlvbnMnKSxcbiAgICBzZWxlY3QgPSByZXF1aXJlKCcuL3NlbGVjdCcpLFxuXG4gICAgLypcbiAgICAgICAgUm9sZSBpbXBvcnRzXG4gICAgKi9cbiAgICBkZWZhdWx0Um9sZSA9IHJlcXVpcmUoJy4uL3JvbGVzL2RlZmF1bHRSb2xlJyksXG4gICAgY3NzUm9sZSA9IHJlcXVpcmUoJy4uL3JvbGVzL2Nzcy9jc3NSb2xlJyksXG4gICAgc3ZnUm9sZSA9IHJlcXVpcmUoJy4uL3JvbGVzL3N2Zy9zdmdSb2xlJyksXG4gICAgZHJhd1BhdGhSb2xlID0gcmVxdWlyZSgnLi4vcm9sZXMvcGF0aC9kcmF3UGF0aFJvbGUnKSxcblxuICAgIEFjdGlvbiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvQWN0aW9uJyksXG4gICAgZWFjaCA9IHV0aWxzLmVhY2g7XG5cbmNsYXNzIEFjdG9yIHtcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgICAgIHRoaXMudmFsdWVzID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHZhbHVlczoge30gfTtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IG5ldyBRdWV1ZSgpO1xuICAgICAgICB0aGlzLnByb2Nlc3MgPSBuZXcgUHJvY2Vzcyh0aGlzLCB1cGRhdGUpO1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5udW1BY3RpdmUgPSAwO1xuICAgICAgICB0aGlzLmFjdGlvbkNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLmFjdGl2ZVZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZVBhcmVudHMgPSBbXTtcblxuICAgICAgICAvLyBHZXQgYWN0dWFsIGVsZW1lbnRzIGlmIHRoaXMgaXMgYSBzZWxlY3RvclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcob3B0cy5lbGVtZW50KSkge1xuICAgICAgICAgICAgb3B0cy5lbGVtZW50ID0gc2VsZWN0KG9wdHMuZWxlbWVudClbMF07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFzc2lnblJvbGVzKG9wdHMuZWxlbWVudCwgb3B0cy5hcywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0KG9wdHMpO1xuICAgICAgICB0aGlzLmluaXRSb2xlcygpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFNldCBBY3RvciBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHJldHVybnMgW0FjdG9yXVxuICAgICovXG4gICAgc2V0KG9wdHMpIHtcbiAgICAgICAgZWFjaChvcHRzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3ZhbHVlcycgJiYga2V5ICE9PSAnYWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAob3B0cyAmJiBvcHRzLnZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZU9wcy5wcm9jZXNzKHRoaXMudmFsdWVzLCBvcHRzLnZhbHVlcywgb3B0cywgJ2N1cnJlbnQnLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEJpbmQgQWN0aW9uLXNwZWNpZmljIGNvbnRyb2xzIHRvIEFjdG9yXG5cbiAgICAgICAgQHJldHVybnMgW0NvbnRyb2xzXVxuICAgICovXG4gICAgY29udHJvbHMoYWN0aW9uKSB7XG4gICAgICAgIHZhciBDb250cm9scyA9IGFjdGlvbi5nZXRDb250cm9scygpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnRyb2xzKHRoaXMsIGFjdGlvbi5nZXRQbGF5YWJsZSgpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBhIG5ldyBBY3Rpb25cblxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHBhcmFtIFtJbnB1dCB8fCBldmVudF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJucyBbQ29udHJvbHNdXG4gICAgKi9cbiAgICBzdGFydChhY3Rpb24sIGlucHV0KSB7XG4gICAgICAgIHZhciBDb250cm9scyA9IGFjdGlvbi5nZXRDb250cm9scygpLFxuICAgICAgICAgICAgb3B0cyA9IHV0aWxzLmNvcHkoYWN0aW9uKTtcblxuICAgICAgICBvcHRzLmFjdGlvbiA9IGFjdGlvbi5nZXRQbGF5YWJsZSgpO1xuICAgICAgICB0aGlzLnNldChvcHRzKTtcblxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZElucHV0KGlucHV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRyb2xzKHRoaXMsIG9wdHMuYWN0aW9uLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBQYXVzZSBhbGwgYWN0aXZlIEFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW2ludF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJucyBbQWN0b3JdXG4gICAgKi9cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2Nlc3Muc3RvcCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBSZXN1bWUgYWxsIGFjdGl2ZSBBY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtpbnRdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybnMgW0FjdG9yXTtcbiAgICAqL1xuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucHJvY2Vzcy5zdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdG9wIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVG9nZ2xlIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgPyB0aGlzLnBhdXNlKCkgOiB0aGlzLnJlc3VtZSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN5bmNzIGBlbGVtZW50YCB3aXRoIGN1cnJlbnQgcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHN5bmMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KG5ldyBBY3Rpb24oeyB2YWx1ZXM6IHRoaXMudmFsdWVzIH0pKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBZGQgYSBuZXcgQWN0aW9uIHRvIHRoZSBxdWV1ZVxuICAgICovXG4gICAgdGhlbigpIHtcbiAgICAgICAgdGhpcy5xdWV1ZS5hZGQuYXBwbHkodGhpcy5xdWV1ZSwgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgRXhlY3V0ZSBuZXh0IGluIHF1ZXVlXG4gICAgKi9cbiAgICBuZXh0KCkge1xuICAgICAgICB2YXIgbmV4dCA9IHRoaXMucXVldWUubmV4dCgpO1xuXG4gICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jKG5leHQpKSB7XG4gICAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KG5leHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBc3NpZ24gUm9sZXMgYmFzZWQgb24gZWxlbWVudCBhbmQgbWFudWFsbHkgcHJvdmlkZWQgcHJvcHNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEVsZW1lbnRcbiAgICAgICAgQHBhcmFtIFtSb2xlIHx8IGFycmF5XVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dIChvcHRpb25hbClcbiAgICAqL1xuICAgIGFzc2lnblJvbGVzKGVsZW1lbnQsIG1hbnVhbFJvbGVzLCBzdXJwcmVzc0luaXQpIHtcbiAgICAgICAgLy8gQWxsIEFjdG9ycyBnZXQgYSBkZWZhdWx0IFJvbGUgdGhhdCBoYW5kbGVzIHVzZXIgY2FsbGJhY2tzXG4gICAgICAgIHRoaXMucm9sZXMgPSBbIGRlZmF1bHRSb2xlIF07XG5cbiAgICAgICAgLy8gQXV0by1hc3NpZ24gaWYgbm8gbWFudWFsbHktc2V0IFJvbGVzXG4gICAgICAgIGlmICghbWFudWFsUm9sZXMgJiYgZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5hdXRvQXNzaWduUm9sZXMoZWxlbWVudCk7XG5cbiAgICAgICAgLy8gT3IgbWFudWFsbHkgc2V0IGlmIHByb3ZpZGVkXG4gICAgICAgIH0gZWxzZSBpZiAobWFudWFsUm9sZXMpIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0FycmF5KG1hbnVhbFJvbGVzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaC5hcHBseSh0aGlzLnJvbGVzLCBtYW51YWxSb2xlcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaChtYW51YWxSb2xlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN1cnByZXNzSW5pdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0Um9sZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEF1dG9tYXRpY2FsbHkgYXNzaWduIFJvbGVzIGJhc2VkIG9uIGVsZW1lbnQsIGRlc2lnbmVkXG4gICAgICAgIHRvIGJlIGV4dGVuZGVkXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBFbGVtZW50XG4gICAgKi9cbiAgICBhdXRvQXNzaWduUm9sZXMoZWxlbWVudCkge1xuICAgICAgICAvLyBBZGQgQ1NTIHJvbGUgaWYgSFRNTEVsZW1lbnRcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5yb2xlcy5wdXNoKGNzc1JvbGUpO1xuXG4gICAgICAgIC8vIEFkZCBTVkcgcm9sZSBpZiBTVkcgZWxlbWVudFxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2goc3ZnUm9sZSk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBEcmF3IFBhdGggcm9sZSBpZiBwYXRoIGVsZW1lbnRcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaChkcmF3UGF0aFJvbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgRmlyZSBpbml0IGNhbGxiYWNrc1xuICAgICovXG4gICAgaW5pdFJvbGVzKCkge1xuICAgICAgICAvLyBGaXJlIGluaXQgY2FsbGJhY2tcbiAgICAgICAgdGhpcy5yb2xlcy5mb3JFYWNoKChyb2xlKSA9PiB7XG4gICAgICAgICAgICBpZiAocm9sZS5pbml0KSB7XG4gICAgICAgICAgICAgICAgcm9sZS5pbml0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5maXJzdEZyYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzcy5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gYW5kIHJldHVybiBpdHMgdGFibGUgaWRcblxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHJldHVybnMgW2ludF1cbiAgICAqL1xuICAgIGJpbmRBY3Rpb24oYWN0aW9uLCBpZCkge1xuICAgICAgICBpZCA9IChpZCA9PT0gdW5kZWZpbmVkKSA/IHRoaXMuYWN0aW9uQ291bnRlcisrIDogaWQ7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF0gPSBhY3Rpb247XG4gICAgICAgIHRoaXMubnVtQWN0aXZlKys7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICB1bmJpbmRBY3Rpb24oaWQpIHtcbiAgICAgICAgdGhpcy5udW1BY3RpdmUtLTtcbiAgICAgICAgZGVsZXRlIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG5cbiAgICAgICAgaWYgKCF0aGlzLm51bUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBY3Rpb24oaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIHByb2Nlc3Npbmcgb3JkZXJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl1cbiAgICAqL1xuICAgIHVwZGF0ZU9yZGVyKGtleSwgbW92ZVRvQmFjaywgaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgdmFyIG9yZGVyID0gKCFoYXNDaGlsZHJlbikgPyB0aGlzLmFjdGl2ZVZhbHVlcyA6IHRoaXMuYWN0aXZlUGFyZW50cyxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gb3JkZXIuaW5kZXhPZihrZXkpO1xuXG4gICAgICAgIC8vIElmIGtleSBpc24ndCBsaXN0IG9yIG1vdmVUb0JhY2sgaXMgc2V0IHRvIHRydWUsIGFkZCBrZXlcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAtMSB8fCBtb3ZlVG9CYWNrKSB7XG4gICAgICAgICAgICBvcmRlci5wdXNoKGtleSk7XG5cbiAgICAgICAgICAgIC8vIElmIGtleSBhbHJlYWR5IGV4aXN0cywgcmVtb3ZlXG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPiAtMSkge1xuICAgICAgICAgICAgICAgIG9yZGVyLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydEJvdW5kKGlkLCBpbnB1dCkge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5nZXRBY3Rpb24oaWQpLFxuICAgICAgICAgICAgb3B0cyA9IHV0aWxzLmNvcHkoYWN0aW9uKTtcblxuICAgICAgICBvcHRzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5zZXQob3B0cyk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICB0aGlzLmJpbmRJbnB1dChpbnB1dCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgYmluZElucHV0KGlucHV0KSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSAoIWlucHV0LmN1cnJlbnQpID8gbmV3IFBvaW50ZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgICAgIHRoaXMuaW5wdXRPcmlnaW4gPSB0aGlzLmlucHV0LmdldCgpO1xuICAgIH1cblxuICAgIC8vIFtib29sZWFuXTogSXMgdGhpcyBBY3RvciBhY3RpdmU/XG4gICAgZ2V0IGlzQWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gICAgfVxuXG4gICAgLy8gU2V0IGhhc0NoYW5nZWQgdG8gdHJ1ZSBpcyB0aGlzIGlzIG5vdyBhY3RpdmVcbiAgICBzZXQgaXNBY3RpdmUoc3RhdHVzKSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHN0YXR1cztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lzQWN0aXZlID0gc3RhdHVzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBY3RvcjtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0b3IvQWN0b3IuanNcbiAqKi8iLCIvKlxuICAgIElucHV0IGNvbnRyb2xsZXJcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYy5qcycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzLmpzJyksXG4gICAgSGlzdG9yeSA9IHJlcXVpcmUoJy4uL2luYy9IaXN0b3J5LmpzJyksXG5cbiAgICAvKlxuICAgICAgICBJbnB1dCBjb25zdHJ1Y3RvclxuICAgICAgICBcbiAgICAgICAgICAgIFN5bnRheFxuICAgICAgICAgICAgICAgIG5ld0lucHV0KG5hbWUsIHZhbHVlWywgcG9sbF0pXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiB0byB0cmFja1xuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEluaXRpYWwgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl0gKG9wdGlvbmFsKTogRnVuY3Rpb24gdG8gcG9sbCBJbnB1dCBkYXRhXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG5ld0lucHV0KHByb3BzWywgcG9sbF0pXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IG9mIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXSAob3B0aW9uYWwpOiBGdW5jdGlvbiB0byBwb2xsIElucHV0IGRhdGFcblxuICAgICAgICBAcmV0dXJuIFtJbnB1dF1cbiAgICAqL1xuICAgIElucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcG9sbFBvcyA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuXG4gICAgICAgIHRoaXMuY3VycmVudCA9IHt9O1xuICAgICAgICB0aGlzLm9mZnNldCA9IHt9O1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0ge307XG4gICAgICAgIHRoaXMuaGlzdG9yeSA9IG5ldyBIaXN0b3J5KCk7XG4gICAgICAgIHRoaXMudXBkYXRlKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmMoYXJndW1lbnRzW3BvbGxQb3NdKSkge1xuICAgICAgICAgICAgdGhpcy5wb2xsID0gYXJndW1lbnRzW3BvbGxQb3NdO1xuICAgICAgICB9XG4gICAgfTtcblxuSW5wdXQucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8vIFtudW1iZXJdOiBOdW1iZXIgb2YgZnJhbWVzIG9mIGluYWN0aXZpdHkgYmVmb3JlIHZlbG9jaXR5IGlzIHR1cm5lZCB0byAwXG4gICAgbWF4SW5hY3RpdmVGcmFtZXM6IDIsXG4gICAgXG4gICAgLy8gW251bWJlcl06IE51bWJlciBvZiBmcmFtZXMgaW5wdXQgaGFzbid0IGJlZW4gdXBkYXRlZFxuICAgIGluYWN0aXZlRnJhbWVzOiAwLFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBsYXRlc3QgaW5wdXQgdmFsdWVzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ10gKG9wdGlvbmFsKTogTmFtZSBvZiBzcGVjaWZpYyBwcm9wZXJ0eSB0byByZXR1cm5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0IHx8IG51bWJlcl06IExhdGVzdCBpbnB1dCB2YWx1ZXMgb3IsIGlmIHNwZWNpZmllZCwgc2luZ2xlIHZhbHVlXG4gICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHZhciBsYXRlc3QgPSB0aGlzLmhpc3RvcnkuZ2V0KCksXG4gICAgICAgICAgICB2YWwgPSAocHJvcCAhPT0gdW5kZWZpbmVkKSA/IGxhdGVzdFtwcm9wXSA6IGxhdGVzdDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFVwZGF0ZSB0aGUgaW5wdXQgdmFsdWVzXG4gICAgICAgIFxuICAgICAgICBTeW50YXhcbiAgICAgICAgICAgIGlucHV0LnVwZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgdG8gdHJhY2tcbiAgICAgICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEluaXRpYWwgdmFsdWVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlucHV0LnVwZGF0ZShwcm9wcylcbiAgICAgICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCBvZiB2YWx1ZXNcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgQHJldHVybiBbSW5wdXRdXG4gICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB7fTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW0oYXJnMSkpIHtcbiAgICAgICAgICAgIHZhbHVlc1thcmcwXSA9IGFyZzE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSBhcmcwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oaXN0b3J5LmFkZCh1dGlscy5tZXJnZSh0aGlzLmN1cnJlbnQsIHZhbHVlcykpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBDaGVjayBmb3IgaW5wdXQgbW92ZW1lbnQgYW5kIHVwZGF0ZSBwb2ludGVyIG9iamVjdCdzIHByb3BlcnRpZXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGltZXN0YW1wIG9mIGZyYW1lXG4gICAgICAgIEByZXR1cm4gW0lucHV0XVxuICAgICovXG4gICAgb25GcmFtZTogZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuICAgICAgICB2YXIgbGF0ZXN0LCBoYXNDaGFuZ2VkO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgcHJvdmlkZWQgdGltZXN0YW1wIGFnYWluc3QgbGFzdEZyYW1lIHRpbWVzdGFtcCBhbmQgcmV0dXJuIGlucHV0IGhhcyBhbHJlYWR5IGJlZW4gdXBkYXRlZFxuICAgICAgICBpZiAodGltZXN0YW1wID09PSB0aGlzLmxhc3RGcmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsYXRlc3QgPSAodGhpcy5wb2xsKSA/IHRoaXMucG9sbCgpIDogdGhpcy5oaXN0b3J5LmdldCgpO1xuICAgICAgICBoYXNDaGFuZ2VkID0gdXRpbHMuaGFzQ2hhbmdlZCh0aGlzLmN1cnJlbnQsIGxhdGVzdCk7XG5cbiAgICAgICAgLy8gSWYgaW5wdXQgaGFzIGNoYW5nZWQgYmV0d2VlbiBmcmFtZXMgIFxuICAgICAgICBpZiAoaGFzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IGNhbGMub2Zmc2V0KHRoaXMuY3VycmVudCwgbGF0ZXN0KTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGxhdGVzdDtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuXG4gICAgICAgIC8vIE9yIGl0IGhhc24ndCBtb3ZlZCBhbmQgb3VyIGZyYW1lIGxpbWl0IGhhcyBiZWVuIHJlYWNoZWRcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluYWN0aXZlRnJhbWVzID49IHRoaXMubWF4SW5hY3RpdmVGcmFtZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSBjYWxjLm9mZnNldCh0aGlzLmN1cnJlbnQsIHRoaXMuY3VycmVudCk7XG4gICAgICAgIFxuICAgICAgICAvLyBPciBpbnB1dCBoYXNuJ3QgY2hhbmdlZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcysrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxhc3RGcmFtZSA9IHRpbWVzdGFtcDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5wdXQvSW5wdXQuanNcbiAqKi8iLCJ2YXIgQWN0b3IgPSByZXF1aXJlKCcuLi9hY3Rvci9BY3RvcicpLFxuICAgIFR3ZWVuID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Ud2VlbicpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmNvbnN0IERFRkFVTFRfU1RBR0dFUl9FQVNFID0gJ2xpbmVhcic7XG5cbmNsYXNzIEl0ZXJhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZW1iZXJzKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcblxuICAgICAgICBpZiAobWVtYmVycykge1xuICAgICAgICAgICAgdGhpcy5hZGQobWVtYmVycyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdGFnZ2VyID0gbmV3IEFjdG9yKCk7XG4gICAgfVxuXG4gICAgYWRkKG1lbWJlcnMpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gdGhpcy5tZW1iZXJzLmNvbmNhdChtZW1iZXJzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBlYWNoKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubWVtYmVycy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhZ2dlcihtZXRob2QsIHByb3BzID0gMTAwLCAuLi5hcmdzKSB7XG4gICAgICAgIHZhciBudW1NZW1iZXJzID0gdGhpcy5tZW1iZXJzLmxlbmd0aCxcbiAgICAgICAgICAgIHByb3BzSXNJbnRlcnZhbCA9IHV0aWxzLmlzTnVtKHByb3BzKSxcbiAgICAgICAgICAgIGludGVydmFsID0gcHJvcHNJc0ludGVydmFsID8gcHJvcHMgOiBwcm9wcy5pbnRlcnZhbCxcbiAgICAgICAgICAgIHN0YWdnZXJQcm9wcyA9IHt9LFxuICAgICAgICAgICAgaSA9IC0xLFxuXG4gICAgICAgICAgICBjYWxsYmFjayA9IHV0aWxzLmlzU3RyaW5nKG1ldGhvZCkgP1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyW21ldGhvZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSA6IG1ldGhvZDtcblxuICAgICAgICBzdGFnZ2VyUHJvcHMudmFsdWVzID0ge1xuICAgICAgICAgICAgaToge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGludGVydmFsICogbnVtTWVtYmVycyxcbiAgICAgICAgICAgICAgICBlYXNlOiBwcm9wc0lzSW50ZXJ2YWwgPyBERUZBVUxUX1NUQUdHRVJfRUFTRSA6IHByb3BzLmVhc2UgfHwgREVGQVVMVF9TVEFHR0VSX0VBU0UsXG4gICAgICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdG86IG51bUVsZW1lbnRzIC0gMVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHN0YWdnZXJQcm9wcy5vblVwZGF0ZSA9IChvdXRwdXQpID0+IHtcbiAgICAgICAgICAgIHZhciBuZXdJbmRleCA9IG91dHB1dC5pLFxuICAgICAgICAgICAgICAgIGdhcEluZGV4ID0gaSArIDE7XG5cbiAgICAgICAgICAgIC8vIElmIG91ciBuZXcgaW5kZXggaXMgb25seSBvbmUgbW9yZSB0aGFuIHRoZSBwcmV2aW91cyBpbmRleCwgZmlyZSBpbW1lZGlldGx5XG4gICAgICAgICAgICBpZiAobmV3SW5kZXggPT09IGkgKyAxKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5tZW1iZXJzW2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuXG4gICAgICAgICAgICAvLyBPciBsb29wIHRocm91Z2ggdGhlIGRpc3RhbmNlIHRvIGZpcmUgYWxsIGluZGVjaWVzLiBJbmNyZWFzZSBkZWxheS5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICg7IGdhcEluZGV4IDw9IG5ld0luZGV4OyBnYXBJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMubWVtYmVyc1tnYXBJbmRleF0sIGdhcEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGkgPSBuZXdJbmRleDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9zdGFnZ2VyLnN0YXJ0KG5ldyBUd2VlbihzdGFnZ2VyUHJvcHMpKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSXRlcmF0b3I7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXRlcmF0b3IvSXRlcmF0b3IuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKSxcblxuICAgIC8qXG4gICAgICAgIFByb2Nlc3MgY29uc3RydWN0b3JcbiAgICAgICAgXG4gICAgICAgIFN5bnRheFxuICAgICAgICAgICAgdmFyIHByb2Nlc3MgPSBuZXcgUHJvY2VzcyhzY29wZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgdmFyIHByb2Nlc3MgPSBuZXcgUHJvY2VzcyhjYWxsYmFjayk7XG4gICAgKi9cbiAgICBQcm9jZXNzID0gZnVuY3Rpb24gKHNjb3BlLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgaGFzU2NvcGUgPSAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCk7XG5cbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGhhc1Njb3BlID8gY2FsbGJhY2sgOiBzY29wZTtcbiAgICAgICAgdGhpcy5zY29wZSA9IGhhc1Njb3BlID8gc2NvcGUgOiB0aGlzO1xuICAgICAgICB0aGlzLmlkID0gbWFuYWdlci5yZWdpc3RlcigpO1xuXG4gICAgICAgIC8vIFtib29sZWFuXTogSXMgdGhpcyBwcm9jZXNzIGN1cnJlbnRseSBhY3RpdmU/XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9O1xuXG5Qcm9jZXNzLnByb3RvdHlwZSA9IHtcbiAgICAvKlxuICAgICAgICBGaXJlIGNhbGxiYWNrXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3RpbWVzdGFtcF06IFRpbWVzdGFtcCBvZiBjdXJyZW50bHktZXhlY3V0ZWQgZnJhbWVcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaW1lIHNpbmNlIGxhc3QgZnJhbWVcbiAgICAqL1xuICAgIGZpcmU6IGZ1bmN0aW9uICh0aW1lc3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjay5jYWxsKHRoaXMuc2NvcGUsIHRpbWVzdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB3ZSdyZSBydW5uaW5nIGF0IGFuIGludGVydmFsLCBkZWFjdGl2YXRlIGFnYWluXG4gICAgICAgIGlmICh0aGlzLmlzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdGFydCBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IER1cmF0aW9uIG9mIHByb2Nlc3MgaW4gbXMsIDAgaWYgaW5kZWZpbml0ZVxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zdG9wKCk7XG4gICAgICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wVGltZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdG9wIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEFjdGl2YXRlIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbWFuYWdlci5hY3RpdmF0ZSh0aGlzLCB0aGlzLmlkKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIERlYWN0aXZhdGUgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBtYW5hZ2VyLmRlYWN0aXZhdGUodGhpcy5pZCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEZpcmUgcHJvY2VzcyBldmVyeSB4IG1zXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBtcyB0byB3YWl0IGJldHdlZW4gcmVmaXJpbmcgcHJvY2Vzcy5cbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIGV2ZXJ5OiBmdW5jdGlvbiAoaW50ZXJ2YWwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcblxuICAgICAgICB0aGlzLmlzSW50ZXJ2YWwgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuYWN0aXZhdGUoKTtcbiAgICAgICAgfSwgaW50ZXJ2YWwpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pc0ludGVydmFsVGltZUFjdGl2ZSA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIENsZWFyIGFsbCB0aW1lcnNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBcbiAgICAqL1xuICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNJbnRlcnZhbCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wVGltZXJBY3RpdmUpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0b3BUaW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmlzSW50ZXJ2YWxUaW1lQWN0aXZlKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxUaW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvY2VzcztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanNcbiAqKi8iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcbnZhciBlYWNoID0gdXRpbHMuZWFjaDtcblxuLypcbiAgICBSb2xlIGNsYXNzIGNvbnN0cnVjdG9yXG5cbiAgICBAcGFyYW0gW29iamVjdF06IE9wdGlvbmFsIG1ldGhvZHMgYW5kIHByb3BzIHRvIGFkZDpcbiAgICAgICAgbmFtZSBbc3RyaW5nXTogICAgICBOYW1lIG9mIGdlbmVyYXRlZCBnZXR0ZXIvc2V0dGVyIG1ldGhvZCBvbiBBY3RvclxuICAgICAgICBfbWFwIFtvYmplY3RdOiAgICAgIE1hcCBBY3RvciB2YWx1ZXMgdG8gdGhlc2UgdmFsdWVzIGZvciB0aGlzIFJvbGVcbiAgICAgICAgX3R5cGVNYXAgW29iamVjdF06ICBNYXAgdmFsdWVzIHRvIHZhbHVlIHR5cGVzXG4gICAgICAgIGluaXQgW2Z1bmN0aW9uXTogICAgQ2FsbGJhY2sgdG8gcnVuIHdoZW4gdGhpcyBSb2xlIGlzIGFkZGVkIHRvIGFuIEFjdG9yXG4gICAgICAgIHN0YXJ0IFtmdW5jdGlvbl06ICAgQ2FsbGJhY2sgdG8gcnVuIHdoZW4gaG9zdCBBY3RvciBzdGFydHMgYW4gYWN0aW9uXG4gICAgICAgIGNvbXBsZXRlIFtmdW5jdGlvbl06IENhbGxiYWNrIHRvIHJ1biB3aGVuIGFjdGlvbiBjb21wbGV0ZXNcbiAgICAgICAgZnJhbWUgW2Z1bmN0aW9uXTogICBDYWxsYmFjayB0byBmaXJlIG9uY2UgcGVyIGZyYW1lXG4gICAgICAgIHVwZGF0ZSBbZnVuY3Rpb25dOiAgQ2FsbGJhY2sgdG8gZmlyZSB3aGVuIHZhbHVlcyBjaGFuZ2VcbiAgICAgICAgZ2V0IFtmdW5jdGlvbl06ICAgICBSZWFkIHZhbHVlIGZyb20gYWN0dWFsIGVsZW1lbnRcbiAgICAgICAgc2V0IFtmdW5jdGlvbl06ICAgICBTZXQgdmFsdWUgb24gYWN0dWFsIGVsZW1lbnRcbiovXG52YXIgUm9sZSA9IGZ1bmN0aW9uIChtZXRob2RzKSB7XG4gICAgdmFyIHJvbGUgPSB0aGlzO1xuXG4gICAgcm9sZS5fbWFwID0ge307XG5cbiAgICBlYWNoKG1ldGhvZHMsIGZ1bmN0aW9uIChuYW1lLCBtZXRob2QpIHtcbiAgICAgICAgcm9sZVtuYW1lXSA9ICghdXRpbHMuaXNPYmoobWV0aG9kKSkgPyBtZXRob2QgOiB1dGlscy5jb3B5KG1ldGhvZCk7XG4gICAgfSk7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBhIG5ldyByb2xlXG5cbiAgICBAcGFyYW0gW29iamVjdF06IE9wdGlvbmFsIG1ldGhvZHMgYW5kIHByb3BzIHRvIGFkZFxuICAgIEBwYXJhbSBbdmFsdWVzVG9NYXBdOiBPdmVycmlkZSBleGlzdGluZyBtYXAgd2l0aCB0aGVzZSB2YWx1ZXNcbiAgICBAcmV0dXJuIFtSb2xlXTogTmV3IFJvbGVcbiovXG52YXIgY3JlYXRlUm9sZSA9IGZ1bmN0aW9uIChtZXRob2RzLCB2YWx1ZXMpIHtcbiAgICB2YXIgbmV3Um9sZSA9IG5ldyBSb2xlKG1ldGhvZHMpO1xuXG4gICAgZWFjaCh2YWx1ZXMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIG5ld1JvbGUuX21hcFtrZXldID0gdmFsdWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3Um9sZTtcbn07XG5cblJvbGUucHJvdG90eXBlID0ge1xuXG4gICAgLypcbiAgICAgICAgTWFwIHZhbHVlIGtleXMgb3IgZ2VuZXJhdGUgbmV3IFJvbGUgd2l0aCB1cGRhdGVkIG1hcFxuXG4gICAgICAgIEdldHRlcjpcbiAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIG1hcFxuICAgICAgICAgICAgQHJldHVybiBbc3RyaW5nXTogTWFwcGVkIGtleSwgb3Iga2V5IGlmIG5vIG1hcHBlZCBrZXkgZm91bmRcblxuICAgICAgICBTZXR0ZXI6IFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBNYXAgb2YgQWN0b3Iga2V5cyAtPiBSb2xlIGtleXNcbiAgICAgICAgICAgIEByZXR1cm4gW1JvbGVdOiBOZXcgUm9sZSB3aXRoIHVuaXF1ZSBtYXBcbiAgICAqL1xuICAgIG1hcDogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgc3RyaW5nLCBnZXQgbWFwcGVkIHZhbHVlXG4gICAgICAgIC8vIE90aGVyd2lzZSB0aGlzIGlzIGEgbWFwLCBkdXBsaWNhdGVkIHJvbGUgd2l0aCB1cGRhdGVkIG1hcFxuICAgICAgICByZXR1cm4gKHV0aWxzLmlzU3RyaW5nKHZhbHVlcykpID8gdGhpcy5fbWFwW3ZhbHVlc10gfHwgdmFsdWVzIDogY3JlYXRlUm9sZSh0aGlzLCB2YWx1ZXMpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUm9sZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9Sb2xlLmpzXG4gKiovIiwidmFyIEJlemllciA9IHJlcXVpcmUoJy4vQmV6aWVyJyksXG5cbiAgICAvKlxuICAgICAgICBNaXJyb3IgZWFzaW5nXG4gICAgICAgIFxuICAgICAgICBNaXJyb3JzIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgaGVyZSBmb3IgbWlycm9yaW5nIGFuXG4gICAgICAgIGVhc2VJbiBpbnRvIGFuIGVhc2VJbk91dFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtaXJyb3JcbiAgICAgICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiAgICAqL1xuICAgIG1pcnJvckVhc2luZyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgbWV0aG9kKSB7XG4gICAgICAgIHJldHVybiAocHJvZ3Jlc3MgPD0gMC41KSA/IG1ldGhvZCgyICogcHJvZ3Jlc3MpIC8gMiA6ICgyIC0gbWV0aG9kKDIgKiAoMSAtIHByb2dyZXNzKSkpIC8gMjtcbiAgICB9LFxuICAgICAgICAgICAgXG4gICAgLypcbiAgICAgICAgUmV2ZXJzZSBlYXNpbmdcbiAgICAgICAgXG4gICAgICAgIFJldmVyc2VzIHRoZSBvdXRwdXQgb2YgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBmb3IgZmxpcHBpbmcgZWFzZUluXG4gICAgICAgIGN1cnZlIHRvIGFuIGVhc2VPdXQuXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIHJldmVyc2VcbiAgICAgICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiAgICAqL1xuICAgIHJldmVyc2VFYXNpbmcgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIG1ldGhvZCkge1xuICAgICAgICByZXR1cm4gMSAtIG1ldGhvZCgxIC0gcHJvZ3Jlc3MpO1xuICAgIH07XG5cbi8qXG4gICAgRWFzaW5nIGNsYXNzXG5cbiAgICBJZiBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHJldHVybnMgZWFzaW5nIGZ1bmN0aW9uIHdpdGggXG4gICAgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcblxuICAgIElmIHByb3ZpZGVkIGZvdXIgYXJndW1lbnRzLCByZXR1cm5zIG5ldyBCZXppZXIgY2xhc3MgaW5zdGVhZC5cbiovXG52YXIgRWFzaW5nID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyKSB7XG4gICAgdmFyIG1ldGhvZCA9IHgxLFxuICAgICAgICBlYXNpbmdGdW5jdGlvbjtcblxuICAgIC8vIElmIHRoaXMgaXMgYSBiZXppZXIgY3VydmUsIHJldHVybiBhIGJlemllciBmdW5jdGlvblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBlYXNpbmdGdW5jdGlvbiA9IG5ldyBCZXppZXIoeDEsIHkxLCB4MiwgeTIpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uLmluID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBlYXNpbmdGdW5jdGlvbi5vdXQgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiByZXZlcnNlRWFzaW5nKHByb2dyZXNzLCBtZXRob2QpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uLmluT3V0ID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gbWlycm9yRWFzaW5nKHByb2dyZXNzLCBtZXRob2QpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBlYXNpbmdGdW5jdGlvbjtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRWFzaW5nO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvdHdlZW4vRWFzaW5nLmpzXG4gKiovIiwibGV0IGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgZWFjaCA9IHV0aWxzLmVhY2gsXG4gICAgQ29udHJvbHMgPSByZXF1aXJlKCcuLi9jb250cm9scy9Db250cm9scycpO1xuXG5jb25zdCBERUZBVUxUX1BST1AgPSAnY3VycmVudCc7XG5cbmNsYXNzIEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXM7XG5cbiAgICAgICAgdXRpbHMuZWFjaCh0aGlzLmdldERlZmF1bHRQcm9wcygpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgYWN0aW9uW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMsIHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpKTtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMgPSB7fSwgZGVmYXVsdFByb3AgPSBERUZBVUxUX1BST1ApIHtcbiAgICAgICAgZWFjaChwcm9wcywgKGtleSwgcHJvcCkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3ZhbHVlcycpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBwcm9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNZXJnZSB2YWx1ZXNcbiAgICAgICAgaWYgKHByb3BzLnZhbHVlcykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZXMgPSB0aGlzLnZhbHVlcyxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBwcm9wcy52YWx1ZXM7XG5cbiAgICAgICAgICAgIGVhY2godmFsdWVzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBleGlzdGluZ1ZhbHVlID0gY3VycmVudFZhbHVlc1trZXldLFxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHt9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc09iaih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtkZWZhdWx0UHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWVzW2tleV0gPSBleGlzdGluZ1ZhbHVlID8gdXRpbHMubWVyZ2UoZXhpc3RpbmdWYWx1ZSwgbmV3VmFsdWUpIDogbmV3VmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByb2Nlc3MoYWN0b3IsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jdXJyZW50O1xuICAgIH1cblxuICAgLypcbiAgICAgICAgSGFzIEFjdGlvbiBlbmRlZD9cbiAgICAgICAgXG4gICAgICAgIFJldHVybnMgdHJ1ZSB0byBlbmQgaW1tZWRpZXRseVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IHRydWVcbiAgICAqL1xuICAgIGhhc0VuZGVkKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgICAgIFxuICAgIGxpbWl0KG91dHB1dCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3RyaWN0ZWQgPSBjYWxjLnJlc3RyaWN0ZWQob3V0cHV0LCB2YWx1ZS5taW4sIHZhbHVlLm1heCksXG4gICAgICAgICAgICBlc2NhcGVBbXAgPSB2YWx1ZS5lc2NhcGVBbXAgIT09IHVuZGVmaW5lZCA/IHZhbHVlLmVzY2FwZUFtcCA6IDA7XG4gICAgICAgIHJldHVybiByZXN0cmljdGVkICsgKChvdXRwdXQgLSByZXN0cmljdGVkKSAqIGVzY2FwZUFtcCk7XG4gICAgfVxuXG4gICAgZ2V0Q29udHJvbHMoKSB7XG4gICAgICAgIHJldHVybiBDb250cm9scztcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ2FjdGlvbic7XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIHNwZWVkOiAwLFxuICAgICAgICAgICAgdmVsb2NpdHk6IDAsXG4gICAgICAgICAgICBmcmFtZUNoYW5nZTogMCxcbiAgICAgICAgICAgIGFtcDogMSxcbiAgICAgICAgICAgIGVzY2FwZUFtcDogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfVxuXG4gICAgZXh0ZW5kKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih1dGlscy5tZXJnZSh0aGlzLCBwcm9wcyksIHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpKTtcbiAgICB9XG5cbiAgICBnZXRQbGF5YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5kKCk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBY3Rpb247XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9BY3Rpb24uanNcbiAqKi8iLCJsZXQgQWN0aW9uID0gcmVxdWlyZSgnLi9BY3Rpb24nKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoLFxuICAgIHByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vdHdlZW4vcHJlc2V0LWVhc2luZycpLFxuICAgIFR3ZWVuQ29udHJvbHMgPSByZXF1aXJlKCcuL3R3ZWVuL1R3ZWVuQ29udHJvbHMnKSxcblxuICAgIG5leHRTdGVwcyA9IHtcbiAgICAgICAgbG9vcDogJ3Jlc2V0VmFsdWVzJyxcbiAgICAgICAgeW95bzogJ3JldmVyc2VWYWx1ZXMnLFxuICAgICAgICBmbGlwOiAnZmxpcFZhbHVlcydcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgYmV0d2VlbiAwIGFuZCAxXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDEgcHJvZ3Jlc3NcbiAgICAgICAgQHBhcmFtIFtzdHJpbmcgfHwgZnVuY3Rpb25dOiBOYW1lIG9mIHByZXNldCBlYXNpbmdcbiAgICAgICAgICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIG9mIGVhc2VkIHByb2dyZXNzIGluIHJhbmdlXG4gICAgKi8gIFxuICAgIGVhc2UgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlKSB7XG4gICAgICAgIHZhciBwcm9ncmVzc0xpbWl0ZWQgPSBjYWxjLnJlc3RyaWN0ZWQocHJvZ3Jlc3MsIDAsIDEpLFxuICAgICAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSB1dGlscy5pc1N0cmluZyhlYXNlKSA/IHByZXNldEVhc2luZ1tlYXNlXSA6IGVhc2U7XG5cbiAgICAgICAgcmV0dXJuIGNhbGMudmFsdWVFYXNlZChwcm9ncmVzc0xpbWl0ZWQsIGZyb20sIHRvLCBlYXNpbmdGdW5jdGlvbik7XG4gICAgfTtcblxuY29uc3QgQ09VTlQgPSAnY291bnQnO1xuXG5jbGFzcyBUd2VlbiBleHRlbmRzIEFjdGlvbiB7XG4gICAgZ2V0Q29udHJvbHMoKSB7XG4gICAgICAgIHJldHVybiBUd2VlbkNvbnRyb2xzO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAndHdlZW4nO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlsYXRlOiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgeW95bzogZmFsc2UsXG4gICAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIHBsYXlEaXJlY3Rpb246IDEsXG4gICAgICAgICAgICBlbmRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBlYXNlOiAnZWFzZU91dCcsXG4gICAgICAgICAgICBzdGFnZ2VyOiAwLFxuICAgICAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndG8nO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFVwZGF0ZSBBY3Rpb24gZWxhcHNlZCB0aW1lXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGltZXN0YW1wIG9mIGN1cnJlbnQgZnJhbWVcbiAgICAqL1xuICAgIG9uRnJhbWVTdGFydChhY3RvciwgZnJhbWVEdXJhdGlvbikge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmVsYXBzZWQgfHwgMDtcblxuICAgICAgICBpZiAoZnJhbWVEdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5lbGFwc2VkICs9IChmcmFtZUR1cmF0aW9uICogdGhpcy5kaWxhdGUpICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQ2FsY3VsYXRlIHByb2dyZXNzIG9mIHZhbHVlIGJhc2VkIG9uIHRpbWUgZWxhcHNlZCxcbiAgICAgICAgdmFsdWUgZGVsYXkvZHVyYXRpb24vc3RhZ2dlciBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBWYWx1ZSBzdGF0ZSBhbmQgcHJvcGVydGllc1xuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzKGFjdG9yLCB2YWx1ZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdmFsdWUudG8sXG4gICAgICAgICAgICBwcm9ncmVzc1RhcmdldCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMSA6IDAsXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlLmN1cnJlbnQsXG4gICAgICAgICAgICBwcm9ncmVzcztcblxuICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGhhcyBhIHRvIHByb3BlcnR5LCBvdGhlcndpc2Ugd2UganVzdCByZXR1cm4gY3VycmVudCB2YWx1ZVxuICAgICAgICBpZiAodGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHByb2dyZXNzID0gY2FsYy5yZXN0cmljdGVkKGNhbGMucHJvZ3Jlc3ModGhpcy5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIHZhbHVlLmR1cmF0aW9uKSAtIHZhbHVlLnN0YWdnZXIsIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIEFjdGlvbiBhcyBOT1QgZW5kZWQgaWYgc3RpbGwgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyAhPT0gcHJvZ3Jlc3NUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0ZXAgcHJvZ3Jlc3MgaWYgd2UncmUgc3RlcHBpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zdGVwcykge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gdXRpbHMuc3RlcFByb2dyZXNzKHByb2dyZXNzLCB2YWx1ZS5zdGVwcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVhc2UgdmFsdWVcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gZWFzZShwcm9ncmVzcywgdmFsdWUub3JpZ2luLCB0YXJnZXQsIHZhbHVlLmVhc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIElmIHRoaXMgdHdlZW4gaGFzIGVuZGVkLCBjaGVjayBpZiB3ZSBsb29wL3lveW8vZmxpcFxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IEhhcyB0aGlzIHR3ZWVuIHJlYWxseSByZWFsbHkgZW5kZWQ/XG4gICAgKi9cbiAgICBoYXNFbmRlZChhY3Rvcikge1xuICAgICAgICBpZiAodGhpcy5lbmRlZCkge1xuICAgICAgICAgICAgZWFjaChuZXh0U3RlcHMsIChuYW1lLCBtZXRob2ROYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tOZXh0U3RlcChhY3RvciwgbmFtZSwgdGhpc1ttZXRob2ROYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBhY3Rvci5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kZWQ7XG4gICAgfVxuXG4gICAgY2hlY2tOZXh0U3RlcChhY3RvciwgbmFtZSwgbWV0aG9kKSB7XG4gICAgICAgIHZhciBzdGVwVGFrZW4gPSBmYWxzZSxcbiAgICAgICAgICAgIHN0ZXAgPSB0aGlzW25hbWVdLFxuICAgICAgICAgICAgY291bnQgPSB0aGlzW25hbWUgKyBDT1VOVF0gfHwgMCxcbiAgICAgICAgICAgIGZvcmV2ZXIgPSAoc3RlcCA9PT0gdHJ1ZSk7XG5cbiAgICAgICAgaWYgKGZvcmV2ZXIgfHwgdXRpbHMuaXNOdW0oc3RlcCkpIHtcbiAgICAgICAgICAgICsrY291bnQ7XG4gICAgICAgICAgICB0aGlzW25hbWUgKyBDT1VOVF0gPSBjb3VudDtcblxuICAgICAgICAgICAgaWYgKGZvcmV2ZXIgfHwgY291bnQgPD0gc3RlcCkge1xuICAgICAgICAgICAgICAgIG1ldGhvZC5jYWxsKHRoaXMsIGFjdG9yKTtcbiAgICAgICAgICAgICAgICBzdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0ZXBUYWtlbjtcbiAgICB9XG5cbiAgICBmbGlwVmFsdWVzKCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuICAgIH1cblxuICAgIHJldmVyc2VWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICB9XG5cbiAgICByZXNldFZhbHVlcygpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdXRpbHMuY3VycmVudFRpbWUoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW47XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9Ud2Vlbi5qc1xuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgc2ltdWxhdGlvbnMgPSByZXF1aXJlKCcuL3NpbXVsYXRlL3NpbXVsYXRpb25zJyk7XG5cbmNvbnN0IERFRkFVTFRfUFJPUCA9ICd2ZWxvY2l0eSc7XG5cbmNsYXNzIFNpbXVsYXRlIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSA9IHRydWU7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdzaW11bGF0ZSc7XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWF4SW5hY3RpdmVGcmFtZXM6IDNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBbc3RyaW5nXTogU2ltdWxhdGlvbiB0byAucnVuXG4gICAgICAgICAgICBzaW11bGF0ZTogREVGQVVMVF9QUk9QLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogRGVjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgICAgICAgICBkZWNlbGVyYXRpb246IDAsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICAgICAgICAgIGFjY2VsZXJhdGlvbjogMCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IEZhY3RvciB0byBtdWx0aXBseSB2ZWxvY2l0eSBieSBvbiBib3VuY2VcbiAgICAgICAgICAgIGJvdW5jZTogMCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgICAgICAgICAgIHNwcmluZzogODAsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBUaW1lY29uc3RhbnQgb2YgZ2xpZGVcbiAgICAgICAgICAgIHRpbWVDb25zdGFudDogMzk1LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgICAgICAgICAgIHN0b3BTcGVlZDogNSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW2Jvb2xlYW5dOiBDYXB0dXJlIHdpdGggc3ByaW5nIHBoeXNpY3Mgb24gbGltaXQgYnJlYWNoXG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IEZyaWN0aW9uIHRvIGFwcGx5IHBlciBmcmFtZVxuICAgICAgICAgICAgZnJpY3Rpb246IDAsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUFJPUDtcbiAgICB9XG4gICAgXG4gICAgLypcbiAgICAgICAgU2ltdWxhdGUgdGhlIFZhbHVlJ3MgcGVyLWZyYW1lIG1vdmVtZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW0FjdG9yXVxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSBvZiBjdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRHVyYXRpb24gb2YgZnJhbWUgaW4gbXNcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZVxuICAgICovXG4gICAgcHJvY2VzcyhhY3RvciwgdmFsdWUsIGtleSwgdGltZVNpbmNlTGFzdEZyYW1lKSB7XG4gICAgICAgIHZhciBzaW11bGF0ZSA9IHZhbHVlLnNpbXVsYXRlLFxuICAgICAgICAgICAgc2ltdWxhdGlvbiA9IHV0aWxzLmlzU3RyaW5nKHNpbXVsYXRlKSA/IHNpbXVsYXRpb25zW3NpbXVsYXRlXSA6IHNpbXVsYXRlLFxuICAgICAgICAgICAgbmV3VmVsb2NpdHkgPSBzaW11bGF0aW9uID8gc2ltdWxhdGlvbih2YWx1ZSwgdGltZVNpbmNlTGFzdEZyYW1lLCBhY3Rvci5zdGFydGVkKSA6IDA7XG5cbiAgICAgICAgdmFsdWUudmVsb2NpdHkgPSAoTWF0aC5hYnMobmV3VmVsb2NpdHkpID49IHZhbHVlLnN0b3BTcGVlZCkgPyBuZXdWZWxvY2l0eSA6IDA7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jdXJyZW50ICsgY2FsYy5zcGVlZFBlckZyYW1lKHZhbHVlLnZlbG9jaXR5LCB0aW1lU2luY2VMYXN0RnJhbWUpO1xuICAgIH1cbiAgICBcbiAgICAvKlxuICAgICAgICBIYXMgdGhpcyBhY3Rpb24gZW5kZWQ/XG4gICAgICAgIFxuICAgICAgICBVc2UgYSBmcmFtZWNvdW50ZXIgdG8gc2VlIGlmIEFjdGlvbiBoYXMgY2hhbmdlZCBpbiB0aGUgbGFzdCB4IGZyYW1lc1xuICAgICAgICBhbmQgZGVjbGFyZSBlbmRlZCBpZiBub3RcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbQWN0b3JdXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IEhhcyBBY3Rpb24gY2hhbmdlZD9cbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IEhhcyBBY3Rpb24gZW5kZWQ/XG4gICAgKi9cbiAgICBoYXNFbmRlZChhY3RvciwgaGFzQ2hhbmdlZCkge1xuICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gaGFzQ2hhbmdlZCA/IDAgOiB0aGlzLmluYWN0aXZlRnJhbWVzICsgMTtcbiAgICAgICAgcmV0dXJuICh0aGlzLmluYWN0aXZlRnJhbWVzID4gYWN0b3IubWF4SW5hY3RpdmVGcmFtZXMpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIExpbWl0IG91dHB1dCB0byB2YWx1ZSByYW5nZSwgaWYgYW55XG4gICAgICAgIFxuICAgICAgICBJZiB2ZWxvY2l0eSBpcyBhdCBvciBtb3JlIHRoYW4gcmFuZ2UsIGFuZCB2YWx1ZSBoYXMgYSBib3VuY2UgcHJvcGVydHksXG4gICAgICAgIHJ1biB0aGUgYm91bmNlIHNpbXVsYXRpb25cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ2FsY3VsYXRlZCBvdXRwdXRcbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgVmFsdWVcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogTGltaXQtYWRqdXN0ZWQgb3V0cHV0XG4gICAgKi9cbiAgICBsaW1pdChvdXRwdXQsIHZhbHVlKSB7XG4gICAgICAgIHZhciBpc091dHNpZGVNYXggPSAob3V0cHV0ID49IHZhbHVlLm1heCksXG4gICAgICAgICAgICBpc091dHNpZGVNaW4gPSAob3V0cHV0IDw9IHZhbHVlLm1pbiksXG4gICAgICAgICAgICBpc091dHNpZGVSYW5nZSA9IGlzT3V0c2lkZU1heCB8fCBpc091dHNpZGVNaW47XG4gICAgICAgIFxuICAgICAgICBpZiAoaXNPdXRzaWRlUmFuZ2UpIHtcbiAgICAgICAgICAgIG91dHB1dCA9IGNhbGMucmVzdHJpY3RlZChvdXRwdXQsIHZhbHVlLm1pbiwgdmFsdWUubWF4KTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlLmJvdW5jZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc2ltdWxhdGlvbnMuYm91bmNlKHZhbHVlKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5jYXB0dXJlKSB7XG4gICAgICAgICAgICAgICAgc2ltdWxhdGlvbnMuY2FwdHVyZSh2YWx1ZSwgaXNPdXRzaWRlTWF4ID8gdmFsdWUubWF4IDogdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2ltdWxhdGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9TaW11bGF0ZS5qc1xuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5jbGFzcyBUcmFjayBleHRlbmRzIEFjdGlvbiB7XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICd0cmFjayc7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIGlucHV0IG9mZnNldFxuICAgICovXG4gICAgb25GcmFtZVN0YXJ0KGFjdG9yKSB7XG4gICAgICAgIGFjdG9yLmlucHV0T2Zmc2V0ID0gY2FsYy5vZmZzZXQoYWN0b3IuaW5wdXRPcmlnaW4sIGFjdG9yLmlucHV0LmN1cnJlbnQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE1vdmUgVmFsdWUgcmVsYXRpdmUgdG8gSW5wdXQgbW92ZW1lbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbVmFsdWVdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IG9mIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZVxuICAgICovXG4gICAgcHJvY2VzcyhhY3RvciwgdmFsdWUsIGtleSkge1xuICAgICAgICByZXR1cm4gKGFjdG9yLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpID8gdmFsdWUub3JpZ2luICsgYWN0b3IuaW5wdXRPZmZzZXRba2V5XSA6IHZhbHVlLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgSGFzIHRoaXMgQWN0aW9uIGVuZGVkPyBcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBGYWxzZSB0byBtYWtlIHVzZXIgbWFudWFsbHkgZmluaXNoIC50cmFjaygpXG4gICAgKi9cbiAgICBoYXNFbmRlZCgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFjaztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL1RyYWNrLmpzXG4gKiovIiwiLypcbiAgICBDYWxjdWxhdG9yc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBTaW1wbGUgSS9PIHNuaXBwZXRzXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMuanMnKSxcblxuICAgIGNhbGMgPSB7XG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICBhcmUgYXQgMCwwLCB0aGVuIHJldHVybiB0aGUgYW5nbGUgdXNpbmcgLmFuZ2xlRnJvbUNlbnRlcigpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICAgICAgICAgICAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4gICAgICAgICovXG4gICAgICAgIGFuZ2xlOiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgICAgIHZhciBmcm9tID0gcG9pbnRCID8gcG9pbnRBIDoge3g6IDAsIHk6IDB9LFxuICAgICAgICAgICAgICAgIHRvID0gcG9pbnRCIHx8IHBvaW50QSxcbiAgICAgICAgICAgICAgICBwb2ludCA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogdG8ueCAtIGZyb20ueCxcbiAgICAgICAgICAgICAgICAgICAgeTogdG8ueSAtIGZyb20ueVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFuZ2xlRnJvbUNlbnRlcihwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgQW5nbGUgZnJvbSBjZW50ZXJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgY3VycmVudCBhbmdsZSwgaW4gcmFkaWFucywgb2YgYSBkZWZpbmVkIHBvaW50XG4gICAgICAgICAgICBmcm9tIGEgY2VudGVyIChhc3N1bWVkIDAsMClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBYIGNvb3JkaW5hdGUgb2Ygc2Vjb25kIHBvaW50XG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFkgY29vcmRpbmF0ZSBvZiBzZWNvbmQgcG9pbnRcbiAgICAgICAgICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gMCwgMCBhbmQgcG9pbnQgaW4gcmFkaWFuc1xuICAgICAgICAqL1xuICAgICAgICBhbmdsZUZyb21DZW50ZXI6IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoeSwgeCkpO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICAgICAgICAqL1xuICAgICAgICBkZWdyZWVzVG9SYWRpYW5zOiBmdW5jdGlvbiAoZGVncmVlcykge1xuICAgICAgICAgICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEaWxhdGVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYSAtLS0tLS0tLS0gYlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBhIC0tLS0gYlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuICAgICAgICAqL1xuICAgICAgICBkaWxhdGU6IGZ1bmN0aW9uIChhLCBiLCBkaWxhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGEgKyAoKGIgLSBhKSAqIGRpbGF0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRGlzdGFuY2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAoMCwwKSBhbmQgcG9pbnRBLCB1bmxlc3MgcG9pbnRCXG4gICAgICAgICAgICBpcyBwcm92aWRlZCwgdGhlbiB3ZSByZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdHdvLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICAgICAqL1xuICAgICAgICBkaXN0YW5jZTogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgICAgICByZXR1cm4gKHR5cGVvZiBwb2ludEEgPT09IFwibnVtYmVyXCIpID8gdGhpcy5kaXN0YW5jZTFEKHBvaW50QSwgcG9pbnRCKSA6IHRoaXMuZGlzdGFuY2UyRChwb2ludEEsIHBvaW50Qik7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEaXN0YW5jZSAxRFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHBvaW50IEEgYW5kIHBvaW50IEJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQb2ludCBBXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IChvcHRpb25hbCk6IFBvaW50IEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gICAgICAgICovXG4gICAgICAgIGRpc3RhbmNlMUQ6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAgICAgdmFyIGJJc051bSA9ICh0eXBlb2YgcG9pbnRCID09PSAnbnVtYmVyJyksXG4gICAgICAgICAgICAgICAgZnJvbSA9IGJJc051bSA/IHBvaW50QSA6IDAsXG4gICAgICAgICAgICAgICAgdG8gPSBiSXNOdW0gPyBwb2ludEIgOiBwb2ludEE7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gYWJzb2x1dGUodG8gLSBmcm9tKTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRGlzdGFuY2UgMkRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAoMCwwKSBhbmQgcG9pbnQgQSwgdW5sZXNzIHBvaW50IEJcbiAgICAgICAgICAgIGlzIHByb3ZpZGVkLCB0aGVuIHdlIHJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogeCBhbmQgeSBvZiBwb2ludCBBXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IChvcHRpb25hbCk6IHggYW5kIHkgb2YgcG9pbnQgQlxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgZGlzdGFuY2UyRDogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgICAgICB2YXIgYklzT2JqID0gKHR5cGVvZiBwb2ludEIgPT09IFwib2JqZWN0XCIpLFxuICAgICAgICAgICAgICAgIGZyb20gPSBiSXNPYmogPyBwb2ludEEgOiB7eDogMCwgeTogMH0sXG4gICAgICAgICAgICAgICAgdG8gPSBiSXNPYmogPyBwb2ludEIgOiBwb2ludEEsXG4gICAgICAgICAgICAgICAgcG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGFic29sdXRlKHRvLnggLSBmcm9tLngpLFxuICAgICAgICAgICAgICAgICAgICB5OiBhYnNvbHV0ZSh0by55IC0gZnJvbS55KVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oeXBvdGVudXNlKHBvaW50LngsIHBvaW50LnkpO1xuICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBIeXBvdGVudXNlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogTGVuZ3RoIG9mIENcbiAgICAgICAgKi9cbiAgICAgICAgaHlwb3RlbnVzZTogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHZhciBhMiA9IGEgKiBhLFxuICAgICAgICAgICAgICAgIGIyID0gYiAqIGIsXG4gICAgICAgICAgICAgICAgYzIgPSBhMiArIGIyO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydChjMik7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgT2Zmc2V0IGJldHdlZW4gdHdvIGlucHV0c1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBDYWxjdWxhdGUgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gZGlmZmVyZW50IGlucHV0c1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW1BvaW50XTogRmlyc3QgaW5wdXRcbiAgICAgICAgICAgIEBwYXJhbSBbUG9pbnRdOiBTZWNvbmQgaW5wdXRcbiAgICAgICAgICAgIEByZXR1cm4gW09mZnNldF06IERpc3RhbmNlIG1ldHJpY3MgYmV0d2VlbiB0d28gcG9pbnRzXG4gICAgICAgICovXG4gICAgICAgIG9mZnNldDogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSB7fTtcbiAgICBcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgICAgICAgICAgICAgaWYgKGIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRba2V5XSA9IGJba2V5XSAtIGFba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFtrZXldID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc051bShvZmZzZXQueCkgJiYgaXNOdW0ob2Zmc2V0LnkpKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0LmFuZ2xlID0gdGhpcy5hbmdsZShhLCBiKTtcbiAgICAgICAgICAgICAgICBvZmZzZXQuZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlMkQoYSwgYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gb2Zmc2V0O1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gICAgICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4gICAgICAgICovXG4gICAgICAgIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2U6IGZ1bmN0aW9uIChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkge1xuICAgICAgICAgICAgdmFyIHBvaW50ID0ge307XG4gICAgXG4gICAgXHRcdHBvaW50LnggPSBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54O1xuICAgICAgICAgICAgcG9pbnQueSA9IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnk7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgICAgICAgICAgIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICAgICAgICAgICAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IGlmIGZ1bGwgcmFuZ2UgZ2l2ZW4sIHVwcGVyIGlmIG5vdFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuICAgICAgICAqL1xuICAgICAgICBwcm9ncmVzczogZnVuY3Rpb24gKHZhbHVlLCBsaW1pdEEsIGxpbWl0Qikge1xuICAgICAgICAgICAgdmFyIGJJc051bSA9ICh0eXBlb2YgbGltaXRCID09PSAnbnVtYmVyJyksXG4gICAgICAgICAgICAgICAgZnJvbSA9IGJJc051bSA/IGxpbWl0QSA6IDAsXG4gICAgICAgICAgICAgICAgdG8gPSBiSXNOdW0gPyBsaW1pdEIgOiBsaW1pdEEsXG4gICAgICAgICAgICAgICAgcmFuZ2UgPSB0byAtIGZyb20sXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAodmFsdWUgLSBmcm9tKSAvIHJhbmdlO1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHByb2dyZXNzO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgICAgICAqL1xuICAgICAgICByYWRpYW5zVG9EZWdyZWVzOiBmdW5jdGlvbiAocmFkaWFucykge1xuICAgICAgICAgICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBSZXR1cm4gcmFuZG9tIG51bWJlciBiZXR3ZWVuIHJhbmdlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWluaW11bVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtYXhpbXVtXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4gICAgICAgICovXG4gICAgICAgIHJhbmRvbTogZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgICAgICAgICBtaW4gPSBpc051bShtaW4pID8gbWluIDogMDtcbiAgICAgICAgICAgIG1heCA9IGlzTnVtKG1heCkgPyBtYXggOiAxO1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDYWxjdWxhdGUgcmVsYXRpdmUgdmFsdWVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgVGFrZXMgdGhlIG9wZXJhdG9yIGFuZCB2YWx1ZSBmcm9tIGEgc3RyaW5nLCBpZSBcIis9NVwiLCBhbmQgYXBwbGllc1xuICAgICAgICAgICAgdG8gdGhlIGN1cnJlbnQgdmFsdWUgdG8gcmVzb2x2ZSBhIG5ldyB0YXJnZXQuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBSZWxhdGl2ZSB2YWx1ZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogTmV3IHZhbHVlXG4gICAgICAgICovXG4gICAgICAgIHJlbGF0aXZlVmFsdWU6IGZ1bmN0aW9uIChjdXJyZW50LCByZWwpIHtcbiAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IGN1cnJlbnQsXG4gICAgICAgICAgICAgICAgZXF1YXRpb24gPSByZWwuc3BsaXQoJz0nKSxcbiAgICAgICAgICAgICAgICBvcGVyYXRvciA9IGVxdWF0aW9uWzBdLFxuICAgICAgICAgICAgICAgIHNwbGl0VmFsID0gdXRpbHMuc3BsaXRWYWxVbml0KGVxdWF0aW9uWzFdKTtcblxuICAgICAgICAgICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSArPSBzcGxpdFZhbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlIC09IHNwbGl0VmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgKj0gc3BsaXRWYWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSAvPSBzcGxpdFZhbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzcGxpdFZhbC51bml0KSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgKz0gc3BsaXRWYWwudW5pdDtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICAgICAgfSxcbiAgICBcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybiB2YWx1ZSB3aXRoaW4gdGhlIHJhbmdlIG9mIGxvd2VyTGltaXQgYW5kIHVwcGVyTGltaXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBrZWVwIHdpdGhpbiByYW5nZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgbGltaXRlZCB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICAgICAgKi9cbiAgICAgICAgcmVzdHJpY3RlZDogZnVuY3Rpb24gKHZhbHVlLCBtaW4sIG1heCkge1xuICAgICAgICAgICAgdmFyIHJlc3RyaWN0ZWQgPSAobWluICE9PSB1bmRlZmluZWQpID8gTWF0aC5tYXgodmFsdWUsIG1pbikgOiB2YWx1ZTtcbiAgICAgICAgICAgIHJlc3RyaWN0ZWQgPSAobWF4ICE9PSB1bmRlZmluZWQpID8gTWF0aC5taW4ocmVzdHJpY3RlZCwgbWF4KSA6IHJlc3RyaWN0ZWQ7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcmVzdHJpY3RlZDtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiAgICAgICAgKi9cbiAgICAgICAgc3BlZWRQZXJGcmFtZTogZnVuY3Rpb24gKHhwcywgZnJhbWVEdXJhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIChpc051bSh4cHMpKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuICAgICAgICAqL1xuICAgICAgICBzcGVlZFBlclNlY29uZDogZnVuY3Rpb24gKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xuICAgICAgICB9LFxuICAgIFxuICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gICAgICAgICAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlLCBvciB1cHBlciBpZiBsaW1pdDIgbm90IHByb3ZpZGVkXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIChwcm9ncmVzcywgbGltaXRBLCBsaW1pdEIpIHtcbiAgICAgICAgICAgIHZhciBiSXNOdW0gPSAodHlwZW9mIGxpbWl0QiA9PT0gJ251bWJlcicpLFxuICAgICAgICAgICAgICAgIGZyb20gPSBiSXNOdW0gPyBsaW1pdEEgOiAwLFxuICAgICAgICAgICAgICAgIHRvID0gYklzTnVtID8gbGltaXRCIDogbGltaXRBO1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuICgtIHByb2dyZXNzICogZnJvbSkgKyAocHJvZ3Jlc3MgKiB0bykgKyBmcm9tOyBcbiAgICAgICAgfSxcbiAgICBcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEVhc2VkIHZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gICAgICAgICAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlLCBvciB1cHBlciBpZiBsaW1pdDIgbm90IHByb3ZpZGVkXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogRWFzaW5nIHRvIGFwcGx5IHRvIHZhbHVlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4gICAgICAgICovXG4gICAgICAgIHZhbHVlRWFzZWQ6IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2luZykge1xuICAgICAgICAgICAgdmFyIGVhc2VkUHJvZ3Jlc3MgPSBlYXNpbmcocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZShlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQ2FjaGluZyBmdW5jdGlvbnMgdXNlZCBtdWx0aXBsZSB0aW1lcyB0byByZWR1Y2UgZmlsZXNpemUgYW5kIGluY3JlYXNlIHBlcmZvcm1hbmNlXG4gICAgKi9cbiAgICBpc051bSA9IHV0aWxzLmlzTnVtLFxuICAgIGFic29sdXRlID0gTWF0aC5hYnM7XG4gICAgXG5tb2R1bGUuZXhwb3J0cyA9IGNhbGM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5jL2NhbGMuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWVzLCB0ZXJtcywgZGVsaW1pdGVyLCBjaG9wKSB7XG4gICAgdmFyIGNvbWJpbmVkID0gJycsXG4gICAgICAgIGtleSA9ICcnLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG5cbiAgICBmb3IgKDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAga2V5ID0gdGVybXNbaV07XG5cbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBjb21iaW5lZCArPSB2YWx1ZXNba2V5XSArIGRlbGltaXRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaG9wKSB7XG4gICAgICAgIGNvbWJpbmVkID0gY29tYmluZWQuc2xpY2UoMCwgLWNob3ApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5lZDtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQuanNcbiAqKi8iLCJ2YXIgc3BsaXRDb21tYURlbGltaXRlZCA9IHJlcXVpcmUoJy4vc3BsaXQtY29tbWEtZGVsaW1pdGVkJyksXG4gICAgZnVuY3Rpb25CcmVhayA9IHJlcXVpcmUoJy4vZnVuY3Rpb24tYnJlYWsnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIHRlcm1zKSB7XG4gICAgdmFyIHNwbGl0VmFsdWUgPSB7fSxcbiAgICAgICAgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGgsXG4gICAgICAgIGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZnVuY3Rpb25CcmVhayh2YWx1ZSkpLFxuICAgICAgICBpID0gMDtcblxuICAgIGZvciAoOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgICBzcGxpdFZhbHVlW3Rlcm1zW2ldXSA9IChjb2xvcnNbaV0gIT09IHVuZGVmaW5lZCkgPyBjb2xvcnNbaV0gOiAxO1xuICAgIH1cblxuICAgIHJldHVybiBzcGxpdFZhbHVlO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZ2V0LWNvbG9yLXZhbHVlcy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJygnICsgdmFsdWUgKyAnKSc7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1jcmVhdGUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY29sb3I6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDI1NSxcbiAgICAgICAgcm91bmQ6IHRydWVcbiAgICB9LFxuICAgIG9wYWNpdHk6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDFcbiAgICB9LFxuICAgIHBlcmNlbnQ6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgdW5pdDogJyUnXG4gICAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFggPSAnWCcsXG4gICAgWSA9ICdZJyxcbiAgICBBTFBIQSA9ICdBbHBoYScsXG5cbiAgICB0ZXJtcyA9IHtcbiAgICAgICAgY29sb3JzOiBbJ1JlZCcsICdHcmVlbicsICdCbHVlJywgQUxQSEFdLFxuICAgICAgICBwb3NpdGlvbnM6IFtYLCBZLCAnWiddLFxuICAgICAgICBkaW1lbnNpb25zOiBbJ1RvcCcsICdSaWdodCcsICdCb3R0b20nLCAnTGVmdCddLFxuICAgICAgICBzaGFkb3c6IFtYLCBZLCAnUmFkaXVzJywgJ1NwcmVhZCcsICdDb2xvciddLFxuICAgICAgICBoc2w6IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdXG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXJtcztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzXG4gKiovIiwiLypcbiAgICBVdGlsaXR5IGZ1bmN0aW9uc1xuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgcHJvdGVjdGVkUHJvcGVydGllcyA9IFsnc2NvcGUnLCAgJ2RvbSddLFxuICAgIFxuICAgIGlzUHJvdGVjdGVkID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gKHByb3RlY3RlZFByb3BlcnRpZXMuaW5kZXhPZihrZXkpICE9PSAtMSk7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4gICAgKi9cbiAgICB2YXJUeXBlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIC8qXG4gICAgICAgIEl0ZXJhdGUgb3ZlciBhbiBvYmplY3QgYW5kIGZpcmUgYSBjYWxsYmFjayBmb3IgZXZlcnkgaXRlbSBpbiBpdFxuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogUHJvcGVydGllc1xuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgdG8gZmlyZVxuICAgICovXG4gICAgZWFjaDogZnVuY3Rpb24gKHByb3BzLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKSxcbiAgICAgICAgICAgIG51bUtleXMgPSBrZXlzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUtleXM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGtleSA9IGtleXNbaV0sXG4gICAgICAgICAgICAgICAgcHJvcCA9IHByb3BzW2tleV07XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjayhrZXksIHByb3ApID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBIYXMgb25lIG9iamVjdCBjaGFuZ2VkIGZyb20gdGhlIG90aGVyXG4gICAgICAgIFxuICAgICAgICBDb21wYXJlcyB0aGUgdHdvIHByb3ZpZGVkIGlucHV0cyBhbmQgcmV0dXJucyB0cnVlIGlmIHRoZXkgYXJlIGRpZmZlcmVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBBXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQlxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBkaWZmZXJlbnRcbiAgICAqL1xuICAgIGhhc0NoYW5nZWQ6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2UsXG4gICAgICAgICAgICBrZXkgPSAnJztcblxuICAgICAgICBmb3IgKGtleSBpbiBiKSB7XG4gICAgICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJldHVybiBoYXNDaGFuZ2VkO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYSBudW1iZXI/XG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4gICAgKi9cbiAgICBpc051bTogZnVuY3Rpb24gKG51bSkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBudW0gPT09ICdudW1iZXInKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGFuIG9iamVjdD9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiAgICAqL1xuICAgIGlzT2JqOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYSBmdW5jdGlvbiA/IFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdGhpcy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4gICAgKi9cbiAgICBpc0Z1bmM6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuICh2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbicpOyBcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGEgc3RyaW5nID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuICAgICovXG4gICAgaXNTdHJpbmc6IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyk7IFxuICAgIH0sXG5cblxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB0aGlzIGxvb2tzIGxpa2UgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50XG4gICAgKi9cbiAgICBpc1JlbGF0aXZlVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YgJiYgdmFsdWUuaW5kZXhPZignPScpID4gMCk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhbiBhcnJheSA/IFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdGhpcy52YXJUeXBlID09PSAnQXJyYXknXG4gICAgKi9cbiAgICBpc0FycmF5OiBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgIHJldHVybiAodmFyVHlwZShhcnIpID09PSAnQXJyYXknKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIENvcHkgb2JqZWN0IG9yIGFycmF5XG4gICAgICAgIFxuICAgICAgICBDaGVja3Mgd2hldGhlciBiYXNlIGlzIGFuIGFycmF5IG9yIG9iamVjdCBhbmQgbWFrZXNcbiAgICAgICAgYXBwcm9wcmlhdGUgY29weVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBBcnJheSBvciBvYmplY3QgdG8gY29weVxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IE5ldyBjb3B5IG9mIGFycmF5IG9yIG9iamVjdFxuICAgICovXG4gICAgY29weTogZnVuY3Rpb24gKGJhc2UpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmlzQXJyYXkoYmFzZSkpID8gdGhpcy5jb3B5QXJyYXkoYmFzZSkgOiB0aGlzLmNvcHlPYmplY3QoYmFzZSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEZWVwIGNvcHkgYW4gb2JqZWN0XG4gICAgICAgIFxuICAgICAgICBJdGVyYXRlcyBvdmVyIGFuIG9iamVjdCBhbmQgY3JlYXRlcyBhIG5ldyBjb3B5IG9mIGV2ZXJ5IGl0ZW0sXG4gICAgICAgIGRlZXAgY29weWluZyBpZiBpdCBmaW5kcyBhbnkgb2JqZWN0cy9hcnJheXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIGNvcHlcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBOZXcgY29weSBvZiBvYmplY3RcbiAgICAqL1xuICAgIGNvcHlPYmplY3Q6IGZ1bmN0aW9uIChiYXNlKSB7XG4gICAgICAgIHZhciBuZXdPYmplY3QgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBiYXNlKSB7XG4gICAgICAgICAgICBpZiAoYmFzZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSAodGhpcy5pc09iaihiYXNlW2tleV0pICYmICFpc1Byb3RlY3RlZChrZXkpKSA/IHRoaXMuY29weShiYXNlW2tleV0pIDogYmFzZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRGVlcCBjb3B5IGFuIGFycmF5XG4gICAgICAgIFxuICAgICAgICBMb29wcyB0aHJvdWdoIGFuIGFycmF5IGFuZCBjcmVhdGVzIGEgbmV3IGNvcHkgb2YgZXZlcnkgaXRlbSxcbiAgICAgICAgZGVlcCBjb3B5aW5nIGlmIGl0IGZpbmRzIGFueSBvYmplY3RzL2FycmF5c1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFthcnJheV06IEFycmF5IHRvIGNvcHlcbiAgICAgICAgQHJldHVybiBbYXJyYXldOiBOZXcgY29weSBvZiBhcnJheVxuICAgICovXG4gICAgY29weUFycmF5OiBmdW5jdGlvbiAoYmFzZSkge1xuICAgICAgICB2YXIgbmV3QXJyYXkgPSBbXSxcbiAgICAgICAgICAgIGxlbmd0aCA9IGJhc2UubGVuZ3RoLFxuICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgIFxuICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdBcnJheVtpXSA9ICh0aGlzLmlzT2JqKGJhc2VbaV0pKSA/IHRoaXMuY29weShiYXNlW2ldKSA6IGJhc2VbaV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIE5vbi1kZXN0cnVjdGl2ZSBtZXJnZSBvZiBvYmplY3Qgb3IgYXJyYXlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogQXJyYXkgb3Igb2JqZWN0IHRvIHVzZSBhcyBiYXNlXG4gICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogQXJyYXkgb3Igb2JqZWN0IHRvIG92ZXJ3cml0ZSBiYXNlIHdpdGhcbiAgICAgICAgQHJldHVybiBbYXJyYXkgfHwgb2JqZWN0XTogTmV3IGFycmF5IG9yIG9iamVjdFxuICAgICovXG4gICAgbWVyZ2U6IGZ1bmN0aW9uIChiYXNlLCBvdmVyd3JpdGUpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmlzQXJyYXkoYmFzZSkpID8gdGhpcy5jb3B5QXJyYXkob3ZlcndyaXRlKSA6IHRoaXMubWVyZ2VPYmplY3QoYmFzZSwgb3ZlcndyaXRlKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIE5vbi1kZXN0cnVjdGl2ZSBtZXJnZSBvZiBvYmplY3RcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIHVzZSBhcyBiYXNlXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIG92ZXJ3cml0ZSBiYXNlIHdpdGhcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogTmV3IG9iamVjdFxuICAgICovXG4gICAgbWVyZ2VPYmplY3Q6IGZ1bmN0aW9uIChiYXNlLCBvdmVyd3JpdGUpIHtcbiAgICAgICAgdmFyIGhhc0Jhc2UgPSB0aGlzLmlzT2JqKGJhc2UpLFxuICAgICAgICAgICAgbmV3T2JqZWN0ID0gaGFzQmFzZSA/IHRoaXMuY29weShiYXNlKSA6IHRoaXMuY29weShvdmVyd3JpdGUpLFxuICAgICAgICAgICAga2V5ID0gJyc7XG5cbiAgICAgICAgaWYgKGhhc0Jhc2UpIHtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIG92ZXJ3cml0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChvdmVyd3JpdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9ICh0aGlzLmlzT2JqKG92ZXJ3cml0ZVtrZXldKSAmJiAhaXNQcm90ZWN0ZWQoa2V5KSkgPyB0aGlzLm1lcmdlKGJhc2Vba2V5XSwgb3ZlcndyaXRlW2tleV0pIDogb3ZlcndyaXRlW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdPYmplY3Q7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICAgICAgICBcbiAgICAgICAgICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuICAgICovXG4gICAgc3BsaXRWYWxVbml0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNwbGl0VmFsWzFdKSxcbiAgICAgICAgICAgIHVuaXQ6ICBzcGxpdFZhbFsyXVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiAgICAqL1xuICAgIHN0ZXBQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzLCBzdGVwcykge1xuICAgICAgICB2YXIgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKSxcbiAgICAgICAgICAgIHRhcmdldCA9IDEgLSAoMSAvIHN0ZXBzKSxcbiAgICAgICAgICAgIHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4gICAgKi9cbiAgICBjdXJyZW50VGltZTogZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIpID8gcGVyZm9ybWFuY2Uubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9XG4gICAgXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luYy91dGlscy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlYWNoID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuZWFjaCxcbiAgICB0cmFuc2Zvcm1EaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tZGljdGlvbmFyeScpLFxuICAgIHRyYW5zZm9ybVByb3BzID0gdHJhbnNmb3JtRGljdGlvbmFyeS5wcm9wcyxcblxuICAgIFRSQU5TTEFURV9aID0gJ3RyYW5zbGF0ZVonO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvdXRwdXQpIHtcbiAgICB2YXIgY3NzID0ge30sXG4gICAgICAgIHRyYW5zZm9ybSA9ICcnLFxuICAgICAgICB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG4gICAgICAgIFxuICAgIC8vIExvb3AgdGhyb3VnaCBvdXRwdXQsIGNoZWNrIGZvciB0cmFuc2Zvcm0gcHJvcGVydGllc1xuICAgIGVhY2gob3V0cHV0LCBmdW5jdGlvbiAoa2V5LCBydWxlKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSB0cmFuc2Zvcm0gcHJvcGVydHksIGFkZCB0byB0cmFuc2Zvcm0gc3RyaW5nXG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gKz0ga2V5ICsgJygnICsgcnVsZSArICcpJztcbiAgICAgICAgICAgIHRyYW5zZm9ybUhhc1ogPSAoa2V5ID09PSBUUkFOU0xBVEVfWikgPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIGp1c3QgYXNzaWduIGRpcmVjdGx5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjc3Nba2V5XSA9IHJ1bGU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIElmIHdlIGhhdmUgdHJhbnNmb3JtIHByb3BlcnRpZXMsIGFkZCB0cmFuc2xhdGVaXG4gICAgaWYgKHRyYW5zZm9ybSAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gKz0gJyAnICsgVFJBTlNMQVRFX1ogKyAnKDBweCknO1xuICAgICAgICB9XG5cbiAgICAgICAgY3NzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9jc3MvYnVpbGQuanNcbiAqKi8iLCJ2YXIgVFJBTlNMQVRFID0gJ3RyYW5zbGF0ZSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHg6IFRSQU5TTEFURSArICdYJyxcbiAgICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gICAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL2Nzcy9tYXAuanNcbiAqKi8iLCJ2YXIgQ09MT1IgPSAnY29sb3InLFxuICAgIFBPU0lUSU9OUyA9ICdwb3NpdGlvbnMnLFxuICAgIERJTUVOU0lPTlMgPSAnZGltZW5zaW9ucycsXG4gICAgU0hBRE9XID0gJ3NoYWRvdycsXG4gICAgQU5HTEUgPSAnYW5nbGUnLFxuICAgIEFMUEhBID0gJ2FscGhhJyxcbiAgICBQWCA9ICdweCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8vIENvbG9yIHByb3BlcnRpZXNcbiAgICBjb2xvcjogQ09MT1IsXG4gICAgYmFja2dyb3VuZENvbG9yOiBDT0xPUixcbiAgICBvdXRsaW5lQ29sb3I6IENPTE9SLFxuICAgIGZpbGw6IENPTE9SLFxuICAgIHN0cm9rZTogQ09MT1IsXG4gICAgLy8gQm9yZGVyXG4gICAgYm9yZGVyQ29sb3I6IENPTE9SLFxuICAgIGJvcmRlclRvcENvbG9yOiBDT0xPUixcbiAgICBib3JkZXJSaWdodENvbG9yOiBDT0xPUixcbiAgICBib3JkZXJCb3R0b21Db2xvcjogQ09MT1IsXG4gICAgYm9yZGVyTGVmdENvbG9yOiBDT0xPUixcbiAgICBib3JkZXJSYWRpdXM6IFBYLFxuICAgIC8vIERpbWVuc2lvbnNcbiAgICBtYXJnaW46IERJTUVOU0lPTlMsXG4gICAgcGFkZGluZzogRElNRU5TSU9OUyxcbiAgICB3aWR0aDogUFgsXG4gICAgaGVpZ2h0OiBQWCwgICAgXG4gICAgLy8gUG9zaXRpb25zXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBQT1NJVElPTlMsXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46IFBPU0lUSU9OUyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IFBPU0lUSU9OUywgICAgXG4gICAgLy8gU2hhZG93c1xuICAgIHRleHRTaGFkb3c6IFNIQURPVyxcbiAgICBib3hTaGFkb3c6IFNIQURPVywgICAgXG4gICAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgICByb3RhdGU6IEFOR0xFLFxuICAgIHJvdGF0ZVg6IEFOR0xFLFxuICAgIHJvdGF0ZVk6IEFOR0xFLFxuICAgIHJvdGF0ZVo6IEFOR0xFLFxuICAgIHNrZXdYOiBBTkdMRSxcbiAgICBza2V3WTogQU5HTEUsXG4gICAgdHJhbnNsYXRlWDogUFgsXG4gICAgdHJhbnNsYXRlWTogUFgsXG4gICAgdHJhbnNsYXRlWjogUFgsXG4gICAgcGVyc3BlY3RpdmU6IFBYLFxuICAgIG9wYWNpdHk6IEFMUEhBXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL2Nzcy90eXBlLW1hcC5qc1xuICoqLyIsInZhciBlYWNoID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuZWFjaCxcbiAgICB0cmFuc2Zvcm1EaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1kaWN0aW9uYXJ5JyksXG4gICAgdHJhbnNmb3JtUHJvcHMgPSB0cmFuc2Zvcm1EaWN0aW9uYXJ5LnByb3BzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvdXRwdXQsIG9yaWdpbikge1xuICAgIHZhciBwcm9wcyA9IHt9LFxuICAgICAgICBoYXNUcmFuc2Zvcm0gPSBmYWxzZSxcbiAgICAgICAgc2NhbGUgPSBvdXRwdXQuc2NhbGUgIT09IHVuZGVmaW5lZCA/IG91dHB1dC5zY2FsZSA6IG91dHB1dC5zY2FsZVggfHwgMSxcbiAgICAgICAgc2NhbGVZID0gb3V0cHV0LnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gb3V0cHV0LnNjYWxlWSA6IHNjYWxlIHx8IDEsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblggPSBvcmlnaW4ueCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luWSA9IG9yaWdpbi55LFxuICAgICAgICBzY2FsZVRyYW5zZm9ybVggPSAtIHRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1ZID0gLSB0cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpLFxuICAgICAgICBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlLFxuICAgICAgICBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWSxcbiAgICAgICAgdHJhbnNmb3JtID0ge1xuICAgICAgICAgICAgdHJhbnNsYXRlOiBgdHJhbnNsYXRlKCR7b3V0cHV0LnRyYW5zbGF0ZVh9LCAke291dHB1dC50cmFuc2xhdGVZfSkgYCxcbiAgICAgICAgICAgIHNjYWxlOiBgdHJhbnNsYXRlKCR7c2NhbGVUcmFuc2Zvcm1YfSwgJHtzY2FsZVRyYW5zZm9ybVl9KSBzY2FsZSgke3NjYWxlfSwgJHtzY2FsZVl9KSB0cmFuc2xhdGUoJHtzY2FsZVJlcGxhY2VYfSwgJHtzY2FsZVJlcGxhY2VZfSkgYCxcbiAgICAgICAgICAgIHJvdGF0ZTogYHJvdGF0ZSgke291dHB1dC5yb3RhdGV9LCAke3RyYW5zZm9ybU9yaWdpblh9LCAke3RyYW5zZm9ybU9yaWdpbll9KSBgLFxuICAgICAgICAgICAgc2tld1g6IGBza2V3WCgke291dHB1dC5za2V3WH0pIGAsXG4gICAgICAgICAgICBza2V3WTogYHNrZXdZKCR7b3V0cHV0LnNrZXdZfSkgYFxuICAgICAgICB9O1xuXG4gICAgZWFjaChvdXRwdXQsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvcHNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAgIGVhY2godHJhbnNmb3JtLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IChrZXkgPT09ICdzY2FsZScpID8gJzEnIDogJzAnO1xuICAgICAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHZhbHVlLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHM7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL3N2Zy9idWlsZC5qc1xuICoqLyIsInZhciBDT0xPUiA9ICdjb2xvcicsXG4gICAgU0NBTEUgPSAnc2NhbGUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmaWxsOiBDT0xPUixcbiAgICBzdHJva2U6IENPTE9SLFxuICAgIHNjYWxlOiBTQ0FMRSxcbiAgICBzY2FsZVg6IFNDQUxFLFxuICAgIHNjYWxlWTogU0NBTEUsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAncG9zaXRpb25zJ1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9zdmcvdHlwZS1tYXAuanNcbiAqKi8iLCJ2YXIgU1RST0tFID0gJ3N0cm9rZSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG9wYWNpdHk6IFNUUk9LRSArICctb3BhY2l0eScsXG4gICAgd2lkdGg6IFNUUk9LRSArICctd2lkdGgnLFxuICAgIG1pdGVybGltaXQ6IFNUUk9LRSArICctbWl0ZXJsaW1pdCdcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvcGF0aC9tYXAuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIE1vZE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2tleXMgPSBbXTtcbiAgICAgICAgdGhpcy5fbnVtS2V5cyA9IDA7XG4gICAgfTtcblxuTW9kTWFuYWdlci5wcm90b3R5cGUgPSB7XG5cbiAgICAvKlxuICAgICAgICBBZGQgbW9kdWxlIGtleSB0byBrZXlzIGxpc3RcblxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byBhZGRcbiAgICAqL1xuICAgIF9hZGRLZXk6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHRoaXMuX2tleXMucHVzaChuYW1lKTtcbiAgICAgICAgdGhpcy5fbnVtS2V5cysrO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBBZGQgYSBuZXcgbW9kdWxlXG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmcgfHwgb2JqZWN0XTogTmFtZSBvZiBuZXcgbW9kdWxlIG9yIG11bHRpcGxlIG1vZHVsZXNcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdIChvcHRpb25hbCk6IE1vZHVsZSB0byBhZGRcbiAgICAqL1xuICAgIGV4dGVuZDogZnVuY3Rpb24gKG5hbWUsIG1vZCkge1xuICAgICAgICB2YXIgbXVsdGlNb2RzID0gKHR5cGVvZiBuYW1lID09ICdvYmplY3QnKSxcbiAgICAgICAgICAgIG1vZHMgPSBtdWx0aU1vZHMgPyBuYW1lIDoge30sXG4gICAgICAgICAgICBrZXkgPSAnJztcblxuICAgICAgICAvLyBJZiB3ZSBqdXN0IGhhdmUgb25lIG1vZHVsZSwgY29lcmNlXG4gICAgICAgIGlmICghbXVsdGlNb2RzKSB7XG4gICAgICAgICAgICBtb2RzW25hbWVdID0gbW9kO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChrZXkgaW4gbW9kcykge1xuICAgICAgICAgICAgaWYgKG1vZHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FkZEtleShrZXkpO1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IG1vZHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBlYWNoOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGtleSA9ICcnO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fbnVtS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBrZXkgPSB0aGlzLl9rZXlzW2ldO1xuICAgICAgICAgICAgY2FsbGJhY2soa2V5LCB0aGlzW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb2RNYW5hZ2VyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luYy9Nb2RNYW5hZ2VyLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH07XG5cblF1ZXVlLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBBZGQgYSBzZXQgb2YgYXJndW1lbnRzIHRvIHF1ZXVlXG4gICAgKi9cbiAgICBhZGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKGFyZ3VtZW50c1swXSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgbmV4dCBzZXQgb2YgYXJndW1lbnRzIGZyb20gcXVldWVcbiAgICAqL1xuICAgIG5leHQ6IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gdGhpcy5xdWV1ZSxcbiAgICAgICAgICAgIHJldHVyblZhbCA9IGZhbHNlLFxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgXG4gICAgICAgIGRpcmVjdGlvbiA9IChhcmd1bWVudHMubGVuZ3RoKSA/IGRpcmVjdGlvbiA6IDE7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiBvdXIgaW5kZXggaXMgYmV0d2VlbiAwIGFuZCB0aGUgcXVldWUgbGVuZ3RoLCByZXR1cm4gdGhhdCBpdGVtXG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgcXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm5WYWwgPSBxdWV1ZVtpbmRleF07XG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXggKyBkaXJlY3Rpb247XG4gICAgICAgIFxuICAgICAgICAvLyBPciBjbGVhclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBSZXBsYWNlIHF1ZXVlIHdpdGggZW1wdHkgYXJyYXlcbiAgICAqL1xuICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmMvUXVldWUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIElucHV0ID0gcmVxdWlyZSgnLi9JbnB1dC5qcycpLFxuICAgIGN1cnJlbnRQb2ludGVyLCAvLyBTb3J0IHRoaXMgb3V0IGZvciBtdWx0aXRvdWNoXG4gICAgXG4gICAgVE9VQ0hNT1ZFID0gJ3RvdWNobW92ZScsXG4gICAgTU9VU0VNT1ZFID0gJ21vdXNlbW92ZScsXG5cbiAgICAvKlxuICAgICAgICBDb252ZXJ0IGV2ZW50IGludG8gcG9pbnRcbiAgICAgICAgXG4gICAgICAgIFNjcmFwZSB0aGUgeC95IGNvb3JkaW5hdGVzIGZyb20gdGhlIHByb3ZpZGVkIGV2ZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2V2ZW50XTogT3JpZ2luYWwgcG9pbnRlciBldmVudFxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dOiBUcnVlIGlmIHRvdWNoIGV2ZW50XG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IHgveSBjb29yZGluYXRlcyBvZiBldmVudFxuICAgICovXG4gICAgZXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKGV2ZW50LCBpc1RvdWNoRXZlbnQpIHtcbiAgICAgICAgdmFyIHRvdWNoQ2hhbmdlZCA9IGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogZmFsc2U7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdG91Y2hDaGFuZ2VkID8gdG91Y2hDaGFuZ2VkLmNsaWVudFggOiBldmVudC5wYWdlWCxcbiAgICAgICAgICAgIHk6IHRvdWNoQ2hhbmdlZCA/IHRvdWNoQ2hhbmdlZC5jbGllbnRZIDogZXZlbnQucGFnZVlcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBhY3R1YWwgZXZlbnRcbiAgICAgICAgXG4gICAgICAgIENoZWNrcyBmb3IgalF1ZXJ5J3MgLm9yaWdpbmFsRXZlbnQgaWYgcHJlc2VudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtldmVudCB8IGpRdWVyeSBldmVudF1cbiAgICAgICAgQHJldHVybiBbZXZlbnRdOiBUaGUgYWN0dWFsIEpTIGV2ZW50ICBcbiAgICAqL1xuICAgIGdldEFjdHVhbEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50O1xuICAgIH0sXG5cbiAgICBcbiAgICAvKlxuICAgICAgICBQb2ludGVyIGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBQb2ludGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZ2V0QWN0dWFsRXZlbnQoZSksIC8vIEluIGNhc2Ugb2YgalF1ZXJ5IGV2ZW50XG4gICAgICAgICAgICBpc1RvdWNoID0gKGV2ZW50LnRvdWNoZXMpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgc3RhcnRQb2ludCA9IGV2ZW50VG9Qb2ludChldmVudCwgaXNUb3VjaCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnVwZGF0ZShzdGFydFBvaW50KTtcbiAgICAgICAgdGhpcy5pc1RvdWNoID0gaXNUb3VjaDtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfSxcbiAgICBcbiAgICBwcm90byA9IFBvaW50ZXIucHJvdG90eXBlID0gbmV3IElucHV0KCk7XG5cbi8qXG4gICAgQmluZCBtb3ZlIGV2ZW50XG4qL1xucHJvdG8uYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm1vdmVFdmVudCA9IHRoaXMuaXNUb3VjaCA/IFRPVUNITU9WRSA6IE1PVVNFTU9WRTtcbiAgICBcbiAgICBjdXJyZW50UG9pbnRlciA9IHRoaXM7XG4gICAgXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMub25Nb3ZlKTtcbn07XG5cbi8qXG4gICAgVW5iaW5kIG1vdmUgZXZlbnRcbiovXG5wcm90by51bmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMub25Nb3ZlKTtcbn07XG5cbi8qXG4gICAgUG9pbnRlciBvbk1vdmUgZXZlbnQgaGFuZGxlclxuICAgIFxuICAgIEBwYXJhbSBbZXZlbnRdOiBQb2ludGVyIG1vdmUgZXZlbnRcbiovXG5wcm90by5vbk1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBuZXdQb2ludCA9IGV2ZW50VG9Qb2ludChlLCBjdXJyZW50UG9pbnRlci5pc1RvdWNoKTtcbiAgICBlID0gZ2V0QWN0dWFsRXZlbnQoZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGN1cnJlbnRQb2ludGVyLnVwZGF0ZShuZXdQb2ludCk7XG59O1xuXG5wcm90by5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50ZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5wdXQvUG9pbnRlci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdmFsdWVUeXBlTWFuYWdlciA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL21hbmFnZXInKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoLFxuICAgIEFjdGlvbiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvQWN0aW9uJyksXG4gICAgZGVmYXVsdEFjdGlvbiA9IG5ldyBBY3Rpb24oKSxcblxuICAgIGNyZWF0ZU1hcHBlciA9IGZ1bmN0aW9uIChyb2xlLCBtYXBwZWRWYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuYW1lLCB2YWwpIHtcbiAgICAgICAgICAgIG1hcHBlZFZhbHVlc1tyb2xlLm1hcChuYW1lKV0gPSB2YWw7XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIENoZWNrIGFsbCBBY3Rpb25zIGZvciBgb25FbmRgLCByZXR1cm4gdHJ1ZSBpZiBhbGwgYXJlIHRydWVcblxuICAgICAgICBAcGFyYW0gW0FjdG9yXVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dXG4gICAgICAgIEByZXR1cm5zIFtib29sZWFuXVxuICAgICovXG4gICAgY2hlY2tBbmRGaXJlSGFzRW5kZWQgPSBmdW5jdGlvbiAoYWN0b3IsIGhhc0NoYW5nZWQpIHtcbiAgICAgICAgdmFyIGhhc0VuZGVkID0gdHJ1ZTtcblxuICAgICAgICBlYWNoKGFjdG9yLmFjdGl2ZUFjdGlvbnMsIChrZXksIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5oYXNFbmRlZCAmJiBhY3Rpb24uaGFzRW5kZWQoYWN0b3IsIGhhc0NoYW5nZWQpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGhhc0VuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBhY3Rvci5hY3RpdmVBY3Rpb25zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBoYXNFbmRlZDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIHRoZSBBY3RvciBhbmQgaXRzIHZhbHVlc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XTogVGltZXN0YW1wIG9mIHJBRiBjYWxsXG4gICAgICAgIEBwYXJhbSBbaW50XTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4gICAgKi9cbiAgICB1cGRhdGUgPSBmdW5jdGlvbiAoZnJhbWVzdGFtcCwgZnJhbWVEdXJhdGlvbikge1xuICAgICAgICB2YXIgbnVtQWN0aXZlVmFsdWVzID0gdGhpcy5hY3RpdmVWYWx1ZXMubGVuZ3RoLFxuICAgICAgICAgICAgbnVtQWN0aXZlUGFyZW50cyA9IHRoaXMuYWN0aXZlUGFyZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBudW1Sb2xlcyA9IHRoaXMucm9sZXMubGVuZ3RoLFxuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRoaXMuaGFzQ2hhbmdlZDtcblxuICAgICAgICAvLyBVcGRhdGUgSW5wdXQgYW5kIGF0dGFjaCBuZXcgdmFsdWVzIHRvIHN0YXRhXG4gICAgICAgIGlmICh0aGlzLmlucHV0KSB7XG4gICAgICAgICAgICBzdGF0ZS5pbnB1dCA9IHRoaXMuaW5wdXQub25GcmFtZShmcmFtZXN0YW1wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgb25TdGFydCBjYWxsYmFjayBpZiB0aGlzIGlzIGZpcnN0IGZyYW1lXG4gICAgICAgIGlmICh0aGlzLmZpcnN0RnJhbWUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUm9sZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCByb2xlID0gdGhpcy5yb2xlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAocm9sZS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICByb2xlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHZhbHVlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUFjdGl2ZVZhbHVlczsgaSsrKSB7XG4gICAgICAgICAgICAvLyBHZXQgdmFsdWUgYW5kIGtleVxuICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMuYWN0aXZlVmFsdWVzW2ldO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSAoIXZhbHVlLmFjdGlvbiB8fCB2YWx1ZS5hY3Rpb24gJiYgIXZhbHVlLmFjdGlvbi5pc0FjdGl2ZSkgPyBkZWZhdWx0QWN0aW9uIDogdmFsdWUuYWN0aW9uO1xuXG4gICAgICAgICAgICAvLyBGaXJlIGFjdGlvbiBvbkZyYW1lU3RhcnQgaWYgbm90IGFscmVhZHkgZmlyZWRcbiAgICAgICAgICAgIGlmIChhY3Rpb24ub25GcmFtZVN0YXJ0ICYmIGFjdGlvbi5sYXN0VXBkYXRlICE9PSBmcmFtZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLm9uRnJhbWVTdGFydCh0aGlzLCBmcmFtZUR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBhY3Rpb24ubGFzdFVwZGF0ZSA9IGZyYW1lc3RhbXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgdmFsdWVcbiAgICAgICAgICAgIGxldCB1cGRhdGVkVmFsdWUgPSBhY3Rpb24ucHJvY2Vzcyh0aGlzLCB2YWx1ZSwga2V5LCBmcmFtZUR1cmF0aW9uKTtcblxuICAgICAgICAgICAgLy8gTGltaXQgaWYgdGhpcyBhY3Rpb24gZG9lcyB0aGF0IGtpbmQgb2YgdGhpbmdcbiAgICAgICAgICAgIGlmIChhY3Rpb24ubGltaXQgJiYgdmFsdWUuaGFzUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBhY3Rpb24ubGltaXQodXBkYXRlZFZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIHZhbHVlIGlmIHJvdW5kIGlzIHRydWVcbiAgICAgICAgICAgIGlmICh2YWx1ZS5yb3VuZCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IE1hdGgucm91bmQodXBkYXRlZFZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIGZyYW1lQ2hhbmdlXG4gICAgICAgICAgICB2YWx1ZS5mcmFtZUNoYW5nZSA9IHVwZGF0ZWRWYWx1ZSAtIHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB2ZWxvY2l0eSBpZiBBY3Rpb24gaGFzbid0XG4gICAgICAgICAgICBpZiAoIWFjdGlvbi5jYWxjdWxhdGVzVmVsb2NpdHkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IGNhbGMuc3BlZWRQZXJTZWNvbmQodmFsdWUuZnJhbWVDaGFuZ2UsIGZyYW1lRHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgY3VycmVudCBzcGVlZFxuICAgICAgICAgICAgdmFsdWUuc3BlZWQgPSBNYXRoLmFicyh2YWx1ZS52ZWxvY2l0eSk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHZhbHVlJ3MgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT09IHVwZGF0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgbmV3IGN1cnJlbnQgXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdXBkYXRlZFZhbHVlO1xuICAgICAgICAgICAgbGV0IHZhbHVlU3RhdGUgPSAodmFsdWUudW5pdCkgPyB1cGRhdGVkVmFsdWUgKyB2YWx1ZS51bml0IDogdXBkYXRlZFZhbHVlO1xuXG4gICAgICAgICAgICAvLyBQdXQgdmFsdWUgaW4gc3RhdGUgaWYgbm8gcGFyZW50XG4gICAgICAgICAgICBpZiAoIXZhbHVlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnZhbHVlc1trZXldID0gdmFsdWVTdGF0ZTtcblxuICAgICAgICAgICAgLy8gT3IsIGFkZCB0byBwYXJlbnQgc3RhdGUgdG8gYmUgY29tYmluZWQgbGF0ZXJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGVbdmFsdWUucGFyZW50XSA9IHN0YXRlW3ZhbHVlLnBhcmVudF0gfHwge307XG4gICAgICAgICAgICAgICAgc3RhdGVbdmFsdWUucGFyZW50XVt2YWx1ZS5wcm9wTmFtZV0gPSB2YWx1ZVN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZXMgZnJvbSBjYWxjdWxhdGVkIGNoaWxkcmVuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQWN0aXZlUGFyZW50czsgaSsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5hY3RpdmVQYXJlbnRzW2ldO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZSBjdXJyZW50IHByb3BlcnR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWVUeXBlTWFuYWdlclt2YWx1ZS50eXBlXS5jb21iaW5lKHN0YXRlW2tleV0pO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgc3RhdGVcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlc1trZXldID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgYGZyYW1lYCBhbmQgYHVwZGF0ZWAgY2FsbGJhY2tzIG9uIGFsbCBSb2xlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvbGVzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb2xlID0gdGhpcy5yb2xlc1tpXTtcbiAgICAgICAgICAgIGxldCBtYXBwZWRWYWx1ZXMgPSB7fTtcblxuICAgICAgICAgICAgZWFjaChzdGF0ZS52YWx1ZXMsIGNyZWF0ZU1hcHBlcihyb2xlLCBtYXBwZWRWYWx1ZXMpKTtcblxuICAgICAgICAgICAgaWYgKHJvbGUuZnJhbWUpIHtcbiAgICAgICAgICAgICAgICByb2xlLmZyYW1lLmNhbGwodGhpcywgbWFwcGVkVmFsdWVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJvbGUudXBkYXRlICYmIChoYXNDaGFuZ2VkIHx8IHRoaXMuZmlyc3RGcmFtZSkpIHtcbiAgICAgICAgICAgICAgICByb2xlLnVwZGF0ZS5jYWxsKHRoaXMsIG1hcHBlZFZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCBoYXNDaGFuZ2VkIGJlZm9yZSBmdXJ0aGVyIEFjdGlvbnMgbWlnaHQgYWZmZWN0IHRoaXNcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ2hlY2sgYWxsIEFjdGlvbnMgYW5kIGZpcmUgb25FbmQgaWYgdGhleSd2ZSBlbmRlZFxuICAgICAgICBpZiAodGhpcy5pc0FjdGl2ZSAmJiBjaGVja0FuZEZpcmVIYXNFbmRlZCh0aGlzLCBoYXNDaGFuZ2VkKSkge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBGaXJlIGBjb21wbGV0ZWAgY2FsbGJhY2tcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUm9sZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCByb2xlID0gdGhpcy5yb2xlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAocm9sZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICByb2xlLmNvbXBsZXRlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBBY3RvciBpcyBzdGlsbCBpbmFjdGl2ZSwgZmlyZSBuZXh0IHN0ZXBcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maXJzdEZyYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnJhbWVzdGFtcCA9IGZyYW1lc3RhbXA7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB1cGRhdGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0b3IvdXBkYXRlLmpzXG4gKiovIiwidmFyIFdhdGNoID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9XYXRjaCcpLFxuICAgIHdhdGNoZXIgPSBuZXcgV2F0Y2goKSxcbiAgICB2YWx1ZVR5cGVzTWFuYWdlciA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL21hbmFnZXInKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIGlzTnVtID0gdXRpbHMuaXNOdW0sXG4gICAgZWFjaCA9IHV0aWxzLmVhY2g7XG5cbmNvbnN0IG51bWVyaWNhbFZhbHVlcyA9IFsnY3VycmVudCcsICd0bycsICdtaW4nLCAnbWF4JywgJ3ZlbG9jaXR5JywgJ2ZyaWN0aW9uJywgJ3NwcmluZyddLFxuICAgIG51bU51bWVyaWNhbFZhbHVlcyA9IG51bWVyaWNhbFZhbHVlcy5sZW5ndGgsXG4gICAgZGVmYXVsdFZhbHVlID0ge1xuICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICB2ZWxvY2l0eTogMCxcbiAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgIGZyYW1lQ2hhbmdlOiAwXG4gICAgfTtcblxuZnVuY3Rpb24gY2hlY2tOdW1lcmljYWxWYWx1ZShuYW1lKSB7XG4gICAgcmV0dXJuIChudW1lcmljYWxWYWx1ZXMuaW5kZXhPZihuYW1lKSA+IC0xKTtcbn1cblxuLypcbiAgICBDaGVjayBSb2xlIHR5cGVNYXBzIHRvIHNlZSBpZiB0aGlzIHZhbHVlIG5hbWUgaGFzIGJlZW4gbWFwcGVkXG4gICAgdG8gYSBzcGVjaWZpYyB2YWx1ZSB0eXBlXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEByZXR1cm5zIFtzdHJpbmddOiBWYWx1ZSB0eXBlXG4qL1xuZnVuY3Rpb24gY2hlY2tSb2xlcyhuYW1lLCByb2xlcykge1xuICAgIHZhciB2YWx1ZVR5cGU7XG5cbiAgICBlYWNoKHJvbGVzLCAoa2V5LCByb2xlKSA9PiB7XG4gICAgICAgIGlmIChyb2xlLl90eXBlTWFwKSB7XG4gICAgICAgICAgICB2YWx1ZVR5cGUgPSByb2xlLl90eXBlTWFwW3JvbGUubWFwKG5hbWUpXSB8fCB2YWx1ZVR5cGU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YWx1ZVR5cGU7XG59XG5cbi8qXG4gICAgQ2hlY2sgdmFsdWUgZm9yIHNwZWNpYWwgdHlwZVxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybnMgW3N0cmluZyB8fCBmYWxzZV1cbiovXG5mdW5jdGlvbiBjaGVja1ZhbHVlVHlwZShleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSwgc2NvcGUsIHZhbHVlTmFtZSkge1xuICAgIHZhciB2YWx1ZVR5cGU7XG5cbiAgICAvLyBDaGVjayBleGlzdGluZyB2YWx1ZSBmb3IgdHlwZSBhbHJlYWR5IHNldFxuICAgIGlmIChleGlzdGluZ1ZhbHVlICYmIGV4aXN0aW5nVmFsdWUudHlwZSkge1xuICAgICAgICB2YWx1ZVR5cGUgPSBleGlzdGluZ1ZhbHVlLnR5cGU7XG4gICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3IgY2hlY2sgUm9sZSBfdHlwZU1hcCBwcm9wZXJ0aWVzXG4gICAgICAgIGlmIChzY29wZS5yb2xlcykge1xuICAgICAgICAgICAgdmFsdWVUeXBlID0gY2hlY2tSb2xlcyh2YWx1ZU5hbWUsIHNjb3BlLnJvbGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbmFsbHkgcnVuIHRlc3RzXG4gICAgICAgIGlmICghdmFsdWVUeXBlICYmIHV0aWxzLmlzU3RyaW5nKG5ld1ZhbHVlLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZVR5cGVzTWFuYWdlci50ZXN0KG5ld1ZhbHVlLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlVHlwZTtcbn1cblxuLypcbiAgICBSZXNvbHZlIGEgcHJvcGVydHlcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uIHx8IG51bWJlcl1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcmV0dXJucyBbbnVtYmVyXVxuKi9cbmZ1bmN0aW9uIHJlc29sdmUobmFtZSwgcHJvcCwgdmFsdWUsIHNjb3BlKSB7XG4gICAgbGV0IGlzTnVtZXJpY2FsVmFsdWUgPSBjaGVja051bWVyaWNhbFZhbHVlKG5hbWUpO1xuXG4gICAgLy8gSWYgZnVuY3Rpb24sIHJlc29sdmVcbiAgICBpZiAodXRpbHMuaXNGdW5jKHByb3ApICYmIGlzTnVtZXJpY2FsVmFsdWUpIHtcbiAgICAgICAgcHJvcCA9IHByb3AuY2FsbChzY29wZSwgc2NvcGUpO1xuICAgIH1cblxuICAgIC8vIElmIHN0cmluZywgY2hlY2sgZm9yIHJlbGF0aXZlIG51bWJlcnMgYW5kIHVuaXRzXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKHByb3ApKSB7XG4gICAgICAgIC8vIElmIHJlbGF0aXZlIHZhbHVlXG4gICAgICAgIGlmIChwcm9wLmluZGV4T2YoJz0nKSA+IDApIHtcbiAgICAgICAgICAgIHByb3AgPSBjYWxjLnJlbGF0aXZlVmFsdWUodmFsdWUuY3VycmVudCwgcHJvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB1bml0XG4gICAgICAgIGlmIChpc051bWVyaWNhbFZhbHVlKSB7XG4gICAgICAgICAgICBzcGxpdFVuaXQocHJvcCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtZXJpY2FsVmFsdWUpIHtcbiAgICAgICAgcHJvcCA9IHBhcnNlRmxvYXQocHJvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG59XG5cbi8qXG4gICAgU3BsaXQgYSB2YWx1ZSBpbnRvIHN1Yi12YWx1ZXNcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbdmFsdWVUeXBlSGFuZGxlcl1cbiAgICBAcmV0dXJucyBbb2JqZWN0XVxuKi9cbmZ1bmN0aW9uIHNwbGl0KG5hbWUsIHZhbHVlLCBzY29wZSwgdmFsdWVUeXBlSGFuZGxlcikge1xuICAgIHZhciBzcGxpdFZhbHVlcyA9IHZhbHVlVHlwZUhhbmRsZXIuc3BsaXQoKSxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBmb3IgKDsgaSA8IG51bU51bWVyaWNhbFZhbHVlczsgaSsrKSB7XG4gICAgICAgIGxldCBwcm9wTmFtZSA9IG51bWVyaWNhbFZhbHVlc1tpXTtcbiAgICAgICAgbGV0IHNwbGl0UHJvcCA9IHt9O1xuXG4gICAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZVByb3AgPSB2YWx1ZVtwcm9wTmFtZV07XG5cbiAgICAgICAgICAgIC8vIElmIHdlIG5lZWQgdG8gZmlyc3QgcmVzb2x2ZSB0aGlzLCByZXNvbHZlXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVByb3AgPSB2YWx1ZVByb3AuY2FsbChhY3RvciwgYWN0b3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGxpdFByb3AgPSB2YWx1ZVR5cGVIYW5kbGVyLnNwbGl0KHZhbHVlUHJvcCk7XG5cbiAgICAgICAgICAgIC8vIEFzc2lnbiBzcGxpdCBwcm9wZXJ0aWVzIHRvIGVhY2ggY2hpbGQgdmFsdWVcbiAgICAgICAgICAgIGVhY2goc3BsaXRQcm9wLCAoa2V5LCBwcm9wKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyB2YWx1ZSBpZiBub25lIGV4aXN0c1xuICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVzW2tleV0gPSBzcGxpdFZhbHVlc1trZXldIHx8IHV0aWxzLmNvcHkodmFsdWVUeXBlc01hbmFnZXIuZGVmYXVsdFByb3BzKHZhbHVlLnR5cGUsIGtleSkpO1xuICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVzW2tleV1bcHJvcE5hbWVdID0gcHJvcDtcblxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhzcGxpdFByb3Bba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRVbml0KHNwbGl0VmFsdWVzW2tleV1bcHJvcE5hbWVdLCBzcGxpdFZhbHVlc1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzcGxpdFZhbHVlcztcbn1cblxuLypcbiAgICBTcGxpdCB2YWx1ZSBpbnRvIG51bWJlciBhbmQgdW5pdCwgYW5kIHNldCB1bml0IHRvIHZhbHVlXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW29iamVjdF1cbiovXG5mdW5jdGlvbiBzcGxpdFVuaXQocHJvcGVydHksIGhvc3RWYWx1ZSkge1xuICAgIHZhciByZXR1cm5WYWwgPSBwcm9wZXJ0eSxcbiAgICAgICAgeyB2YWx1ZSwgdW5pdCB9ID0gdXRpbHMuc3BsaXRWYWxVbml0KHByb3BlcnR5KTtcblxuICAgIGlmICghaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIHJldHVyblZhbCA9IHZhbHVlO1xuICAgICAgICBpZiAodW5pdCkge1xuICAgICAgICAgICAgaG9zdFZhbHVlLnVuaXQgPSB1bml0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldHVyblZhbDtcbn1cblxuLypcbiAgICBQcmVwcm9jZXNzIGluY29taW5nIHZhbHVlcywgc3BsaXR0aW5nIG5vbi1udW1lcmljYWwgdmFsdWVzXG4gICAgaW50byBzdWItdmFsdWVzIGllIGhleFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4qL1xuZnVuY3Rpb24gcHJlcHJvY2VzcyhleGlzdGluZywgaW5jb21pbmcsIHNjb3BlLCBkZWZhdWx0UHJvcCkge1xuICAgIHZhciB2YWx1ZXMgPSB7fTtcblxuICAgIGVhY2goaW5jb21pbmcsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBleGlzdGluZ1ZhbHVlID0gZXhpc3Rpbmdba2V5XSxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0ge307XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqKHZhbHVlKSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRQcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdmFsdWUgZG9lc24ndCBoYXZlIGEgc3BlY2lhbCB0eXBlLCBjaGVjayBmb3Igb25lXG4gICAgICAgIG5ld1ZhbHVlLnR5cGUgPSBjaGVja1ZhbHVlVHlwZShleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSwgc2NvcGUsIGtleSk7XG5cbiAgICAgICAgdmFsdWVzW2tleV0gPSBuZXdWYWx1ZTtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdHlwZSBwcm9wZXJ0eSwgc3BsaXQvYXNzaWduIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUpIHtcbiAgICAgICAgICAgIGxldCB0eXBlSGFuZGxlciA9IHZhbHVlVHlwZXNNYW5hZ2VyW25ld1ZhbHVlLnR5cGVdO1xuXG4gICAgICAgICAgICAvLyBJZiB2YWx1ZVR5cGUgaGFuZGxlciBoYXMgYSBzcGxpdCBmdW5jdGlvbiwgc3BsaXQgdGhpcyB2YWx1ZVxuICAgICAgICAgICAgaWYgKHR5cGVIYW5kbGVyLnNwbGl0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwbGl0VmFsdWVzID0gc3BsaXQoa2V5LCBuZXdWYWx1ZSwgc2NvcGUsIHR5cGVIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IHt9O1xuXG4gICAgICAgICAgICAgICAgZWFjaChzcGxpdFZhbHVlcywgKGNoaWxkTmFtZSwgY2hpbGRWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlID0gdXRpbHMubWVyZ2UobmV3VmFsdWUsIGNoaWxkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlLnBhcmVudCA9IGNoaWxkVmFsdWUubmFtZSA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZS5wcm9wTmFtZSA9IGNoaWxkTmFtZTtcblxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hpbGRWYWx1ZS50eXBlO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hpbGRWYWx1ZS5jaGlsZHJlbjtcblxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNba2V5ICsgY2hpbGROYW1lXSA9IGNoaWxkVmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIE9yIGp1c3QgYXNzaWduIGRlZmF1bHQgcHJvcGVydGllcyBmb3IgdGhpcyB2YWx1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XSA9IHV0aWxzLm1lcmdlKHZhbHVlVHlwZXNNYW5hZ2VyLmRlZmF1bHRQcm9wcyhuZXdWYWx1ZS50eXBlLCBrZXkpLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YWx1ZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLypcbiAgICAgICAgTWVyZ2UgZXhpc3RpbmcgYW5kIGluY29taW5nIHZhbHVlcywgcmVzb2x2aW5nIHByb3BlcnRpZXNcbiAgICAgICAgc2V0IGFzIGZ1bmN0aW9ucyBhbmQgc3BsaXR0aW5nIG5vbi1udW1lcmljYWwgdmFsdWVzIGllIGhleFxuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXSAob3B0aW9uYWwpXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcmV0dXJucyBbb2JqZWN0XTogTmV3IHZhbHVlcyBvYmplY3RcbiAgICAqL1xuICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChleGlzdGluZyA9IHt9LCBpbmNvbWluZywgaW5oZXJpdCwgZGVmYXVsdFByb3AgPSAnY3VycmVudCcsIHNjb3BlKSB7XG4gICAgICAgIHZhciBwcmVwcm9jZXNzZWQgPSBwcmVwcm9jZXNzKGV4aXN0aW5nLCBpbmNvbWluZywgc2NvcGUsIGRlZmF1bHRQcm9wKTtcblxuICAgICAgICBlYWNoKHByZXByb2Nlc3NlZCwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IGV4aXN0aW5nW2tleV0gPyB1dGlscy5jb3B5KGV4aXN0aW5nW2tleV0pIDogdXRpbHMuY29weShkZWZhdWx0VmFsdWUpLFxuICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID0gKHZhbHVlLmNoaWxkcmVuICE9PSB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRBY3Rpb25WYWx1ZSA9IGluaGVyaXQuYWN0aW9uID8gaW5oZXJpdC5hY3Rpb24uZ2V0RGVmYXVsdFZhbHVlKCkgOiB7fTtcblxuICAgICAgICAgICAgdmFsdWUuYWN0aW9uID0gdmFsdWUud2F0Y2ggPyB3YXRjaGVyIDogaW5oZXJpdC5hY3Rpb247XG5cbiAgICAgICAgICAgIGVhY2goZGVmYXVsdEFjdGlvblZhbHVlLCAocHJvcE5hbWUsIGRlZmF1bHRQcm9wKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVbcHJvcE5hbWVdID0gKGluaGVyaXQuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICYmICF2YWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpID8gaW5oZXJpdFtwcm9wTmFtZV0gOiBkZWZhdWx0UHJvcDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBlYWNoKHZhbHVlLCAodmFsdWVOYW1lLCB2YWx1ZVByb3ApID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwcm9wZXJ0eSBpcyBub3QgdW5kZWZpbmVkIG9yIGEgbnVtYmVyLCByZXNvbHZlXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkICYmICFpc051bSh2YWx1ZVByb3ApICYmICFoYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3AgPSByZXNvbHZlKHZhbHVlTmFtZSwgdmFsdWVQcm9wLCBuZXdWYWx1ZSwgc2NvcGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlW3ZhbHVlTmFtZV0gPSB2YWx1ZVByb3A7XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgaW50ZXJuYWwgdGFyZ2V0IGlmIHRoaXMgcHJvcGVydHkgaXMgJ3RvJ1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZU5hbWUgPT09ICd0bycpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudGFyZ2V0ID0gbmV3VmFsdWUudG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG5ld1ZhbHVlLm9yaWdpbiA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICBuZXdWYWx1ZS5oYXNSYW5nZSA9IChpc051bShuZXdWYWx1ZS5taW4pICYmIGlzTnVtKG5ld1ZhbHVlLm1heCkpID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgICAgICBleGlzdGluZ1trZXldID0gbmV3VmFsdWU7XG4gICAgICAgICAgICBzY29wZS51cGRhdGVPcmRlcihrZXksIHV0aWxzLmlzU3RyaW5nKG5ld1ZhbHVlLndhdGNoKSwgaGFzQ2hpbGRyZW4pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZXhpc3Rpbmc7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rvci92YWx1ZS1vcGVyYXRpb25zLmpzXG4gKiovIiwidmFyIFJvbGUgPSByZXF1aXJlKCcuL1JvbGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgUm9sZSh7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pbml0KSB7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vblN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmcmFtZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLm9uRnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMub25GcmFtZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMub25VcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvZGVmYXVsdFJvbGUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIC8vIFtudW1iZXJdOiBEZWZhdWx0IG1heCBzaXplIG9mIGhpc3RvcnlcbiAgICBtYXhIaXN0b3J5U2l6ZSA9IDMsXG4gICAgXG4gICAgLypcbiAgICAgICAgSGlzdG9yeSBjb25zdHJ1Y3RvclxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFt2YXJdOiBWYXJpYWJsZSB0byBzdG9yZSBpbiBmaXJzdCBoaXN0b3J5IHNsb3RcbiAgICAgICAgQHBhcmFtIFtpbnRdIChvcHRpb25hbCk6IE1heGltdW0gc2l6ZSBvZiBoaXN0b3J5XG4gICAgKi9cbiAgICBIaXN0b3J5ID0gZnVuY3Rpb24gKG9iaiwgbWF4KSB7XG4gICAgICAgIHRoaXMubWF4ID0gbWF4IHx8IG1heEhpc3RvcnlTaXplO1xuICAgICAgICB0aGlzLmVudHJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGQob2JqKTtcbiAgICB9O1xuICAgIFxuSGlzdG9yeS5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLypcbiAgICAgICAgUHVzaCBuZXcgdmFyIHRvIGhpc3RvcnlcbiAgICAgICAgXG4gICAgICAgIFNoaWZ0IG91dCBvbGRlc3QgZW50cnkgaWYgd2UndmUgcmVhY2hlZCBtYXhpbXVtIGNhcGFjaXR5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3Zhcl06IFZhcmlhYmxlIHRvIHB1c2ggaW50byBoaXN0b3J5LmVudHJpZXNcbiAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIgY3VycmVudFNpemUgPSB0aGlzLmdldFNpemUoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZW50cmllcy5wdXNoKG9iaik7XG4gICAgICAgIFxuICAgICAgICBpZiAoY3VycmVudFNpemUgPj0gdGhpcy5tYXgpIHtcbiAgICAgICAgICAgIHRoaXMuZW50cmllcy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdmFyaWFibGUgYXQgc3BlY2lmaWVkIGluZGV4XG5cbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleFxuICAgICAgICBAcmV0dXJuIFt2YXJdOiBWYXIgZm91bmQgYXQgc3BlY2lmaWVkIGluZGV4XG4gICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGkgPSAodHlwZW9mIGkgPT09ICdudW1iZXInKSA/IGkgOiB0aGlzLmdldFNpemUoKSAtIDE7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllc1tpXTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCB0aGUgc2Vjb25kIG5ld2VzdCBoaXN0b3J5IGVudHJ5XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt2YXJdOiBFbnRyeSBmb3VuZCBhdCBpbmRleCBzaXplIC0gMlxuICAgICovXG4gICAgZ2V0UHJldmlvdXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuZ2V0U2l6ZSgpIC0gMik7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgY3VycmVudCBoaXN0b3J5IHNpemVcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2ludF06IEN1cnJlbnQgbGVuZ3RoIG9mIGVudHJpZXMubGVuZ3RoXG4gICAgKi9cbiAgICBnZXRTaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXMubGVuZ3RoO1xuICAgIH1cbiAgICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGlzdG9yeTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmMvSGlzdG9yeS5qc1xuICoqLyIsImNsYXNzIENvbnRyb2xzIHtcbiAgICBjb25zdHJ1Y3RvcihhY3RvciwgYWN0aW9uLCBoYXNTdGFydGVkKSB7XG4gICAgICAgIHRoaXMuYWN0b3IgPSBhY3RvcjtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgICAgaWYgKGhhc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLmJpbmRBY3Rpb24oKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydChpbnB1dCkge1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5iaW5kQWN0aW9uKCk7XG4gICAgICAgIHRoaXMuYWN0b3Iuc3RhcnRCb3VuZCh0aGlzLmlkLCBpbnB1dCk7XG4gICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuYWN0b3IudW5iaW5kQWN0aW9uKHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmFjdGlvbi5kZWFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLmFjdGlvbi5kZWFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24uYWN0aXZhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICBpZiAodGhpcy5hY3Rpb24uaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdGhlbiguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuYWN0b3IudGhlbiguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYmluZEFjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0b3IuYmluZEFjdGlvbih0aGlzLmFjdGlvbiwgdGhpcy5pZCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRyb2xzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbnRyb2xzL0NvbnRyb2xzLmpzXG4gKiovIiwiLypcbiAgICBFYXNpbmcgZnVuY3Rpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIEdlbmVyYXRlcyBhbmQgcHJvdmlkZXMgZWFzaW5nIGZ1bmN0aW9ucyBiYXNlZCBvbiBiYXNlRnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgICBcbiAgICBBIGNhbGwgdG8gZWFzaW5nRnVuY3Rpb24uZ2V0KCdmdW5jdGlvbk5hbWUnKSByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcGFzc2VkOlxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIDAtMVxuICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogQW1wIG1vZGlmaWVyLCBvbmx5IGFjY2VwdGVkIGluIHNvbWUgZWFzaW5nIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGlzIHVzZWQgdG8gYWRqdXN0IG92ZXJhbGwgc3RyZW5ndGhcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogRWFzZWQgcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgV2UgY2FuIGdlbmVyYXRlIG5ldyBmdW5jdGlvbnMgYnkgc2VuZGluZyBhbiBlYXNpbmcgZnVuY3Rpb24gdGhyb3VnaCBlYXNpbmdGdW5jdGlvbi5leHRlbmQobmFtZSwgbWV0aG9kKS5cbiAgICBXaGljaCB3aWxsIG1ha2UgbmFtZUluLCBuYW1lT3V0IGFuZCBuYW1lSW5PdXQgZnVuY3Rpb25zIGF2YWlsYWJsZSB0byB1c2UuXG4gICAgICAgIFxuICAgIEVhc2luZyBmdW5jdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyXG4gICAgaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbiAgICAgICAgXG4gICAgQmV6aWVyIGN1cnZlIGludGVycHJldG9yIGNyZWF0ZWQgZnJvbSBHYcOrdGFuIFJlbmF1ZGVhdSdzIG9yaWdpbmFsIEJlemllckVhc2luZyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgRWFzaW5nID0gcmVxdWlyZSgnLi9FYXNpbmcnKSxcbiAgICBlYXNpbmdGdW5jdGlvbixcbiAgICBcbiAgICAvLyBHZW5lcmF0ZSBlYXNpbmcgZnVuY3Rpb24gd2l0aCBwcm92aWRlZCBwb3dlclxuICAgIGdlbmVyYXRlUG93ZXJFYXNpbmcgPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCBwb3dlcik7XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEVhY2ggb2YgdGhlc2UgYmFzZSBmdW5jdGlvbnMgaXMgYW4gZWFzZUluXG4gICAgICAgIFxuICAgICAgICBPbiBpbml0LCB3ZSB1c2UgRWFzaW5nRnVuY3Rpb24ubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gICAgICAgIGVhc2VPdXQgZnVuY3Rpb25zIHJlc3BlY3RpdmVseS5cbiAgICAqL1xuICAgIGJhc2VFYXNpbmcgPSB7XG4gICAgICAgIGNpcmM6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKTtcbiAgICAgICAgfSxcbiAgICAgICAgYmFjazogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICB2YXIgc3RyZW5ndGggPSAxLjU7XG5cbiAgICAgICAgICAgIHJldHVybiAocHJvZ3Jlc3MgKiBwcm9ncmVzcykgKiAoKHN0cmVuZ3RoICsgMSkgKiBwcm9ncmVzcyAtIHN0cmVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbi8vIEdlbmVyYXRlIHBvd2VyIGVhc2luZyBlYXNpbmdcblsnZWFzZScsICdjdWJpYycsICdxdWFydCcsICdxdWludCddLmZvckVhY2goZnVuY3Rpb24gKGVhc2luZ05hbWUsIGkpIHtcbiAgICBiYXNlRWFzaW5nW2Vhc2luZ05hbWVdID0gZ2VuZXJhdGVQb3dlckVhc2luZyhpICsgMik7XG59KTtcblxuLy8gR2VuZXJhdGUgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcbmZvciAodmFyIGtleSBpbiBiYXNlRWFzaW5nKSB7XG4gICAgaWYgKGJhc2VFYXNpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBlYXNpbmdGdW5jdGlvbiA9IG5ldyBFYXNpbmcoYmFzZUVhc2luZ1trZXldKTtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnSW4nXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdPdXQnXSA9IGVhc2luZ0Z1bmN0aW9uLm91dDtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnSW5PdXQnXSA9IGVhc2luZ0Z1bmN0aW9uLmluT3V0O1xuICAgIH1cbn1cblxuLypcbiAgICBMaW5lYXIgZWFzaW5nIGFkanVzdG1lbnRcbiAgICBcbiAgICBUaGUgZGVmYXVsdCBlYXNpbmcgbWV0aG9kLCBub3QgYWRkZWQgd2l0aCAuZXh0ZW5kIGFzIGl0IGhhcyBubyBPdXQgb3IgSW5PdXRcbiAgICB2YXJpYXRpb24uXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwLTFcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBVbmFkanVzdGVkIHByb2dyZXNzXG4qL1xuYmFzZUVhc2luZy5saW5lYXIgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gcHJvZ3Jlc3M7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VFYXNpbmc7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi9wcmVzZXQtZWFzaW5nLmpzXG4gKiovIiwidmFyIENvbnRyb2xzID0gcmVxdWlyZSgnLi4vLi4vY29udHJvbHMvQ29udHJvbHMnKTtcblxuY2xhc3MgVHdlZW5Db250cm9scyBleHRlbmRzIENvbnRyb2xzIHtcbiAgICBsb29wKCkge1xuICAgICAgICB0aGlzLmFjdGlvbi5yZXNldFZhbHVlcyh0aGlzLmFjdG9yKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgeW95bygpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24ucmV2ZXJzZVZhbHVlcyh0aGlzLmFjdG9yKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZmxpcCgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24uZmxpcFZhbHVlcyh0aGlzLmFjdG9yKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2Vlayhwcm9ncmVzcykge1xuICAgICAgICB0aGlzLmFjdGlvbi5lbGFwc2VkID0gdGhpcy5hY3Rpb24uZHVyYXRpb24gKiBwcm9ncmVzcztcblxuICAgICAgICBpZiAoIXRoaXMuYWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5hY3Rvci5wcm9jZXNzLmZpcmUoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUd2VlbkNvbnRyb2xzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvdHdlZW4vVHdlZW5Db250cm9scy5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uLy4uL2luYy9jYWxjJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKSxcbiAgICBzcGVlZFBlckZyYW1lID0gY2FsYy5zcGVlZFBlckZyYW1lO1xuXG4vKlxuICAgIEFkZCBjb3JlIHBoeXNpY3Mgc2ltdWxhdGlvbnNcbiovXG52YXIgc2ltdWxhdGlvbnMgPSB7XG4gICAgLypcbiAgICAgICAgVmVsb2NpdHlcbiAgICAgICAgXG4gICAgICAgIFRoZSBkZWZhdWx0IC5ydW4oKSBzaW11bGF0aW9uLlxuICAgICAgICBcbiAgICAgICAgQXBwbGllcyBhbnkgc2V0IGRlY2VsZXJhdGlvbiBhbmQgYWNjZWxlcmF0aW9uIHRvIGV4aXN0aW5nIHZlbG9jaXR5XG4gICAgKi9cbiAgICB2ZWxvY2l0eTogZnVuY3Rpb24gKHZhbHVlLCBkdXJhdGlvbikge1xuICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IHZhbHVlLnZlbG9jaXR5IC0gc3BlZWRQZXJGcmFtZSh2YWx1ZS5kZWNlbGVyYXRpb24sIGR1cmF0aW9uKSArIHNwZWVkUGVyRnJhbWUodmFsdWUuYWNjZWxlcmF0aW9uLCBkdXJhdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHNpbXVsYXRpb25zLmZyaWN0aW9uKHZhbHVlLCBkdXJhdGlvbik7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEdsaWRlXG4gICAgICAgIFxuICAgICAgICBFbXVsYXRlcyB0b3VjaCBkZXZpY2Ugc2Nyb2xsaW5nIGVmZmVjdHMgd2l0aCBleHBvbmVudGlhbCBkZWNheVxuICAgICAgICBodHRwOi8vYXJpeWEub2ZpbGFicy5jb20vMjAxMy8xMS9qYXZhc2NyaXB0LWtpbmV0aWMtc2Nyb2xsaW5nLXBhcnQtMi5odG1sXG4gICAgKi9cbiAgICBnbGlkZTogZnVuY3Rpb24gKHZhbHVlLCBkdXJhdGlvbiwgc3RhcnRlZCkge1xuICAgICAgICB2YXIgdGltZVVudGlsRmluaXNoZWQgPSAtIHV0aWxzLmN1cnJlbnRUaW1lKCkgLSBzdGFydGVkLFxuICAgICAgICAgICAgZGVsdGEgPSAtIHZhbHVlLnRvICogTWF0aC5leHAodGltZVVudGlsRmluaXNoZWQgLyB2YWx1ZS50aW1lQ29uc3RhbnQpO1xuXG4gICAgICAgIHJldHVybiAodmFsdWUudG8gKyBkZWx0YSkgLSB2YWx1ZS5jdXJyZW50O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBGcmljdGlvblxuXG4gICAgICAgIEFwcGx5IGZyaWN0aW9uIHRvIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgIFRPRE86IE1ha2UgdGhpcyBmcmFtZXJhdGUtaW5kZXBlbmRlbnRcbiAgICAqL1xuICAgIGZyaWN0aW9uOiBmdW5jdGlvbiAodmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBuZXdWZWxvY2l0eSA9IHNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIGR1cmF0aW9uKSAqICgxIC0gdmFsdWUuZnJpY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBjYWxjLnNwZWVkUGVyU2Vjb25kKG5ld1ZlbG9jaXR5LCBkdXJhdGlvbik7XG4gICAgfSxcblxuICAgIHNwcmluZzogZnVuY3Rpb24gKHZhbHVlLCBkdXJhdGlvbikge1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSB2YWx1ZS50byAtIHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gZGlzdGFuY2UgKiBzcGVlZFBlckZyYW1lKHZhbHVlLnNwcmluZywgZHVyYXRpb24pO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHNpbXVsYXRpb25zLmZyaWN0aW9uKHZhbHVlLCBkdXJhdGlvbik7XG4gICAgfSxcblxuICAgIGJvdW5jZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IDAsXG4gICAgICAgICAgICB0byA9IHZhbHVlLnRvLFxuICAgICAgICAgICAgY3VycmVudCA9IHZhbHVlLmN1cnJlbnQsXG4gICAgICAgICAgICBib3VuY2UgPSB2YWx1ZS5ib3VuY2U7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB3ZSdyZSB1c2luZyBnbGlkZSBzaW11bGF0aW9uIHdlIGhhdmUgdG8gZmxpcCBvdXIgdGFyZ2V0IHRvb1xuICAgICAgICBpZiAodmFsdWUuc2ltdWxhdGUgPT09ICdnbGlkZScpIHtcbiAgICAgICAgICAgIGRpc3RhbmNlID0gdG8gLSBjdXJyZW50O1xuICAgICAgICAgICAgdmFsdWUudG8gPSBjdXJyZW50IC0gKGRpc3RhbmNlICogYm91bmNlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHZhbHVlLnZlbG9jaXR5ICo9IC0gYm91bmNlO1xuICAgIH0sXG5cbiAgICBjYXB0dXJlOiBmdW5jdGlvbiAodmFsdWUsIHRhcmdldCkge1xuICAgICAgICB2YWx1ZS50byA9IHRhcmdldDtcbiAgICAgICAgdmFsdWUuc2ltdWxhdGUgPSAnc3ByaW5nJztcbiAgICAgICAgdmFsdWUuY2FwdHVyZSA9IHZhbHVlLm1pbiA9IHZhbHVlLm1heCA9IHVuZGVmaW5lZDtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbXVsYXRpb25zO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9zaW11bGF0ZS9zaW11bGF0aW9ucy5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdGhlTG9vcCA9IHJlcXVpcmUoJy4vbG9vcC5qcycpLFxuICAgIFByb2Nlc3NNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUlkcyA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZVByb2Nlc3NlcyA9IHt9O1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuICAgICAgICB0aGVMb29wLnNldENhbGxiYWNrKHRoaXMsIHRoaXMuZmlyZUFjdGl2ZSk7XG4gICAgfTtcbiAgICBcblByb2Nlc3NNYW5hZ2VyLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBbaW50XTogVXNlZCBmb3IgcHJvY2VzcyBJRFxuICAgICovXG4gICAgcHJvY2Vzc0NvdW50ZXI6IDAsXG4gICAgXG4gICAgLypcbiAgICAgICAgW2ludF06IE51bWJlciBvZiBhY3RpdmUgcHJvY2Vzc2VzXG4gICAgKi9cbiAgICBhY3RpdmVDb3VudDogMCxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdGhlIHByb2Nlc3Mgd2l0aCBhIGdpdmVuIGluZGV4XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IEluZGV4IG9mIHByb2Nlc3NcbiAgICAgICAgQHJldHVybiBbUHJvY2Vzc11cbiAgICAqL1xuICAgIGdldFByb2Nlc3M6IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZVByb2Nlc3Nlc1tpXTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBudW1iZXIgb2YgYWN0aXZlIHByb2Nlc3Nlc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbaW50XTogTnVtYmVyIG9mIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICAqL1xuICAgIGdldEFjdGl2ZUNvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNvdW50O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGFjdGl2ZSB0b2tlbnNcblxuICAgICAgICBAcmV0dXJuIFthcnJheV06IEFjdGl2ZSB0b2tlbnNcbiAgICAqL1xuICAgIGdldEFjdGl2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVJZHM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbaW50XTogTGVuZ3RoIG9mIHF1ZXVlXG4gICAgKi9cbiAgICBnZXRRdWV1ZUxlbmd0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRmlyZSBhbGwgYWN0aXZlIHByb2Nlc3Nlc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBUaW1lc3RhbXAgb2YgZXhlY3V0aW5nIGZyYW1lc1xuICAgICAgICBAcGFyYW0gW2ludF06IFRpbWUgc2luY2UgcHJldmlvdXMgZnJhbWVcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgYWN0aXZlIHByb2Nlc3NlcyBmb3VuZFxuICAgICovXG4gICAgZmlyZUFjdGl2ZTogZnVuY3Rpb24gKGZyYW1lc3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdmFyIHByb2Nlc3MsXG4gICAgICAgICAgICBhY3RpdmVDb3VudCA9IDAsXG4gICAgICAgICAgICBhY3RpdmVJZHMgPSBbXSxcbiAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgIC8vIFB1cmdlIGFuZCBjaGVjayBhY3RpdmUgY291bnQgYmVmb3JlIGV4ZWN1dGlvblxuICAgICAgICB0aGlzLnB1cmdlKCk7XG4gICAgICAgIGFjdGl2ZUNvdW50ID0gdGhpcy5nZXRBY3RpdmVDb3VudCgpO1xuICAgICAgICBhY3RpdmVJZHMgPSB0aGlzLmdldEFjdGl2ZSgpO1xuXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhY3RpdmUgcHJvY2Vzc2VzIGFuZCBmaXJlIGNhbGxiYWNrXG4gICAgICAgIGZvciAoOyBpIDwgYWN0aXZlQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgcHJvY2VzcyA9IHRoaXMuZ2V0UHJvY2VzcyhhY3RpdmVJZHNbaV0pO1xuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcykge1xuICAgICAgICAgICAgICAgIHByb2Nlc3MuZmlyZShmcmFtZXN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlcHVyZ2UgYW5kIHJlY2hlY2sgYWN0aXZlIGNvdW50IGFmdGVyIGV4ZWN1dGlvblxuICAgICAgICB0aGlzLnB1cmdlKCk7XG4gICAgICAgIGFjdGl2ZUNvdW50ID0gdGhpcy5nZXRBY3RpdmVDb3VudCgpO1xuXG4gICAgICAgIC8vIFJldHVybiB0cnVlIGlmIHdlIHN0aWxsIGhhdmUgYWN0aXZlIHByb2Nlc3Nlcywgb3IgZmFsc2UgaWYgbm9uZVxuICAgICAgICByZXR1cm4gYWN0aXZlQ291bnQgPyB0cnVlIDogZmFsc2U7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBSZWdpc3RlciBhIG5ldyBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW1Byb2Nlc3NdXG4gICAgICAgIEByZXR1cm4gW2ludF06IEluZGV4IG9mIHByb2Nlc3MgdG8gYmUgdXNlZCBhcyBJRFxuICAgICovXG4gICAgcmVnaXN0ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc0NvdW50ZXIrKztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEFjdGl2YXRlIGEgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleCBvZiBhY3RpdmUgcHJvY2Vzc1xuICAgICovXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChwcm9jZXNzLCBpKSB7XG4gICAgICAgIHZhciBxdWV1ZUluZGV4ID0gdGhpcy5kZWFjdGl2YXRlUXVldWUuaW5kZXhPZihpKSxcbiAgICAgICAgICAgIGlzUXVldWVkID0gKHF1ZXVlSW5kZXggPiAtMSksXG4gICAgICAgICAgICBpc0FjdGl2ZSA9ICh0aGlzLmFjdGl2ZUlkcy5pbmRleE9mKGkpID4gLTEpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIGRlYWN0aXZhdGVRdWV1ZSBpZiBpbiB0aGVyZVxuICAgICAgICBpZiAoaXNRdWV1ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLnNwbGljZShxdWV1ZUluZGV4LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB0byBhY3RpdmUgcHJvY2Vzc2VzIGFycmF5IGlmIG5vdCBhbHJlYWR5IGluIHRoZXJlXG4gICAgICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSWRzLnB1c2goaSk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVByb2Nlc3Nlc1tpXSA9IHByb2Nlc3M7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNvdW50Kys7XG4gICAgICAgICAgICB0aGVMb29wLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIERlYWN0aXZhdGUgYSBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IEluZGV4IG9mIHByb2Nlc3MgdG8gYWRkIHRvIGRlYWN0aXZhdGUgcXVldWVcbiAgICAqL1xuICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLnB1c2goaSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBQdXJnZSB0aGUgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICovXG4gICAgcHVyZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHF1ZXVlTGVuZ3RoID0gdGhpcy5nZXRRdWV1ZUxlbmd0aCgpLFxuICAgICAgICAgICAgYWN0aXZlSWRJbmRleCA9IDAsXG4gICAgICAgICAgICBpZFRvRGVsZXRlID0gMDtcblxuICAgICAgICB3aGlsZSAocXVldWVMZW5ndGgtLSkge1xuICAgICAgICAgICAgaWRUb0RlbGV0ZSA9IHRoaXMuZGVhY3RpdmF0ZVF1ZXVlW3F1ZXVlTGVuZ3RoXTtcbiAgICAgICAgICAgIGFjdGl2ZUlkSW5kZXggPSB0aGlzLmFjdGl2ZUlkcy5pbmRleE9mKGlkVG9EZWxldGUpO1xuXG4gICAgICAgICAgICAvLyBJZiBwcm9jZXNzIGluIGFjdGl2ZSBsaXN0IGRlYWN0aXZhdGVcbiAgICAgICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUlkcy5zcGxpY2UoYWN0aXZlSWRJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDb3VudC0tO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZVByb2Nlc3Nlc1tpZFRvRGVsZXRlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlUXVldWUgPSBbXTtcbiAgICB9XG4gICAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBQcm9jZXNzTWFuYWdlcigpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb2Nlc3MvbWFuYWdlci5qc1xuICoqLyIsIi8qXG4gICAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgICAgICBcbiAgICBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgXG4gICAgVXNlXG4gICAgXG4gICAgICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA4LFxuICAgIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMSxcbiAgICBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDEsXG4gICAgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMCxcbiAgICBLX1NQTElORV9UQUJMRV9TSVpFID0gMTEsXG4gICAgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApLFxuICAgIEZMT0FUXzMyX1NVUFBPUlRFRCA9ICh0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyksXG4gICAgXG4gICAgYSA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG4gICAgfSxcbiAgICBcbiAgICBiID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgICAgICByZXR1cm4gMy4wICogYTIgLSA2LjAgKiBhMTtcbiAgICB9LFxuICAgIFxuICAgIGMgPSBmdW5jdGlvbiAoYTEpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGExO1xuICAgIH0sXG5cbiAgICBnZXRTbG9wZSA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogYihhMSwgYTIpICogdCArIGMoYTEpO1xuICAgIH0sXG5cbiAgICBjYWxjQmV6aWVyID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgICAgICByZXR1cm4gKChhKGExLCBhMikgKiB0ICsgYihhMSwgYTIpKSAqIHQgKyBjKGExKSkgKiB0O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQmV6aWVyIGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBCZXppZXIgPSBmdW5jdGlvbiAobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpLFxuICAgICAgICAgICAgX3ByZWNvbXB1dGVkID0gZmFsc2UsXG4gICAgXG4gICAgICAgICAgICBiaW5hcnlTdWJkaXZpZGUgPSBmdW5jdGlvbiAoYVgsIGFBLCBhQikge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50VDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAgICAgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSBmdW5jdGlvbiAoYVgsIGFHdWVzc1QpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBLX1NQTElORV9UQUJMRV9TSVpFOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBnZXRURm9yWCA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2FtcGxlID0gMSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLFxuICAgICAgICAgICAgICAgICAgICBkaXN0ID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBndWVzc0ZvclQgPSAwLjAsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbG9wZSA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlKzFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgICAgICAgICBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBzbG9wZSBpcyBncmVhdGVyIHRoYW4gbWluXG4gICAgICAgICAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgICAgICAgICAvLyBTbG9wZSBpcyBlcXVhbCB0byBtaW5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgICAgICAgICAgLy8gU2xvcGUgaXMgbGVzcyB0aGFuIG1pblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBLX1NBTVBMRV9TVEVQX1NJWkUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHByZWNvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAobVgxICE9IG1ZMSB8fCBtWDIgIT0gbVkyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIEdlbmVyYXRlZCBmdW5jdGlvblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFJldHVybnMgdmFsdWUgMC0xIGJhc2VkIG9uIFhcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBmID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldHVyblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlY29tcHV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBsaW5lYXIgZ3JhZGllbnQsIHJldHVybiBYIGFzIFRcbiAgICAgICAgICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhWDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgYXQgc3RhcnQsIHJldHVybiAwXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIGF0IGVuZCwgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gY2FsY0JlemllcihnZXRURm9yWChhWCksIG1ZMSwgbVkyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBCZXppZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi9CZXppZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1jb21tYS1kZWxpbWl0ZWQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignKCcpICsgMSwgdmFsdWUubGFzdEluZGV4T2YoJyknKSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1icmVhay5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcG9zaXRpb25UZXJtcyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnknKS5wb3NpdGlvbnMsXG4gICAgbnVtUG9zaXRpb25UZXJtcyA9IHBvc2l0aW9uVGVybXMubGVuZ3RoLFxuXG4gICAgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJyxcbiAgICBTQ0FMRSA9ICdzY2FsZScsXG4gICAgUk9UQVRFID0gJ3JvdGF0ZScsXG4gICAgdGVybXMgPSB7XG4gICAgICAgIGZ1bmNzOiBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSxcbiAgICAgICAgcHJvcHM6IHt9IC8vIG9iamVjdHMgYXJlIGZhc3RlciBhdCBkaXJlY3QgbG9va3Vwc1xuICAgIH07XG5cbi8vIENyZWF0ZSB0cmFuc2Zvcm0gdGVybXNcbihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZ1bmNzID0gdGVybXMuZnVuY3MsXG4gICAgICAgIHByb3BzID0gdGVybXMucHJvcHMsXG4gICAgICAgIG51bUZ1bmNzID0gZnVuY3MubGVuZ3RoLFxuICAgICAgICBpID0gMCxcblxuICAgICAgICBjcmVhdGVQcm9wcyA9IGZ1bmN0aW9uIChmdW5jTmFtZSkge1xuICAgICAgICAgICAgdmFyIGogPSAwO1xuXG4gICAgICAgICAgICBmb3IgKDsgaiA8IG51bVBvc2l0aW9uVGVybXM7IGorKykge1xuICAgICAgICAgICAgICAgIHByb3BzW2Z1bmNOYW1lICsgcG9zaXRpb25UZXJtc1tqXV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIFxuICAgIC8vIE1hbnVhbGx5IGFkZCBza2V3IGFuZCB0cmFuc2Zvcm0gcGVyc3BlY3RpdmUgIFxuICAgIHByb3BzW1JPVEFURV0gPSBwcm9wc1tTQ0FMRV0gPSBwcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcbiAgICBcbiAgICAvLyBMb29wIG92ZXIgZWFjaCBmdW5jdGlvbiBuYW1lIGFuZCBjcmVhdGUgZnVuY3Rpb24vcHJvcGVydHkgdGVybXNcbiAgICBmb3IgKDsgaSA8IG51bUZ1bmNzOyBpKyspIHtcbiAgICAgICAgY3JlYXRlUHJvcHMoZnVuY3NbaV0pO1xuICAgIH1cbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gdGVybXM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvY3NzL3RyYW5zZm9ybS1kaWN0aW9uYXJ5LmpzXG4gKiovIiwibGV0IEFjdGlvbiA9IHJlcXVpcmUoJy4vQWN0aW9uJyksXG4gICAgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG5cbiAgICBTVFJJTkcgPSAnc3RyaW5nJyxcbiAgICBcbiAgICAvKlxuICAgICAgICBUcmFuc2xhdGUgb3VyIG1hcExpbmsgdmFsdWUgaW50byBtYXBUb1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlIGZyb20gbGlua2VkIHZhbHVlXG4gICAgICAgIEBwYXJhbSBbVmFsdWUgfHwgb2JqZWN0XTogTGlua2VkIHZhbHVlIG9yIGVtcHR5IG9iamVjdCBpZiB3ZSdyZSBsaW5raW5nIHRvIGlucHV0XG4gICAgICAgIEBwYXJhbSBbYXJyYXldOiBMaXN0IG9mIG51bWJlcnMgcmVsYXRpbmcgdG8gbGlua2VkIHZhbHVlXG4gICAgICAgIEBwYXJhbSBbYXJyYXldOiBMaXN0IG9mIG51bWJlcnMgcmVsYXRpbmcgdG8gdGhpcyB2YWx1ZVxuICAgICovXG4gICAgZmluZE1hcHBlZFZhbHVlID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBsaW5rZWRWYWx1ZSwgdG9WYWx1ZSwgbWFwTGluaywgbWFwVG8pIHtcbiAgICAgICAgdmFyIG1hcExlbmd0aCA9IG1hcExpbmsubGVuZ3RoLFxuICAgICAgICAgICAgaSA9IDEsXG4gICAgICAgICAgICBsYXN0TGlua1ZhbHVlLFxuICAgICAgICAgICAgdGhpc0xpbmtWYWx1ZSxcbiAgICAgICAgICAgIGxhc3RUb1ZhbHVlLFxuICAgICAgICAgICAgdGhpc1RvVmFsdWU7XG5cbiAgICAgICAgZm9yICg7IGkgPCBtYXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gQXNzaWduIHZhbHVlcyBmcm9tIGFycmF5LCBvciBpZiB0aGV5J3JlIHN0cmluZ3MsIGxvb2sgZm9yIHRoZW0gaW4gbGlua2VkVmFsdWVcbiAgICAgICAgICAgIGxhc3RMaW5rVmFsdWUgPSAodHlwZW9mIG1hcExpbmtbaSAtIDFdID09PSBTVFJJTkcpID8gbGlua2VkVmFsdWVbbWFwTGlua1tpIC0gMV1dIDogbWFwTGlua1tpIC0gMV07XG4gICAgICAgICAgICB0aGlzTGlua1ZhbHVlID0gKHR5cGVvZiBtYXBMaW5rW2ldID09PSBTVFJJTkcpID8gbGlua2VkVmFsdWVbbWFwTGlua1tpXV0gOiBtYXBMaW5rW2ldO1xuICAgICAgICAgICAgbGFzdFRvVmFsdWUgPSAodHlwZW9mIG1hcFRvW2kgLSAxXSA9PT0gU1RSSU5HKSA/IHRvVmFsdWVbbWFwVG9baSAtIDFdXSA6IG1hcFRvW2kgLSAxXTtcbiAgICAgICAgICAgIHRoaXNUb1ZhbHVlID0gKHR5cGVvZiBtYXBUb1tpXSA9PT0gU1RSSU5HKSA/IHRvVmFsdWVbbWFwVG9baV1dIDogbWFwVG9baV07XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlJ3ZlIGdvbmUgcGFzdCBvdXIgY2FsY3VsYXRlZCB2YWx1ZSwgb3IgaWYgd2UncmUgYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXlcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA8IHRoaXNMaW5rVmFsdWUgfHwgaSA9PT0gbWFwTGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gY2FsYy52YWx1ZShjYWxjLnJlc3RyaWN0ZWQoY2FsYy5wcm9ncmVzcyhuZXdWYWx1ZSwgbGFzdExpbmtWYWx1ZSwgdGhpc0xpbmtWYWx1ZSksIDAsIDEpLCBsYXN0VG9WYWx1ZSwgdGhpc1RvVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfTtcblxuY2xhc3MgV2F0Y2ggZXh0ZW5kcyBBY3Rpb24ge1xuICAgIC8qXG4gICAgICAgIFByb2Nlc3MgdGhpcyB2YWx1ZVxuICAgICAgICBcbiAgICAgICAgRmlyc3QgY2hlY2sgaWYgdGhpcyB2YWx1ZSBleGlzdHMgYXMgYSBWYWx1ZSwgaWYgbm90XG4gICAgICAgIGNoZWNrIHdpdGhpbiBJbnB1dCAoaWYgd2UgaGF2ZSBvbmUpXG4gICAgICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgY3VycmVudCB2YWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzKGFjdG9yLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBhY3Rvci52YWx1ZXMsXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlLmN1cnJlbnQsXG4gICAgICAgICAgICB3YXRjaGVkS2V5ID0gdmFsdWUud2F0Y2gsXG4gICAgICAgICAgICB3YXRjaGVkVmFsdWUgPSB2YWx1ZXNbd2F0Y2hlZEtleV0gPyB2YWx1ZXNbd2F0Y2hlZEtleV0gOiB7fSxcbiAgICAgICAgICAgIGlucHV0T2Zmc2V0ID0gYWN0b3IuaW5wdXRPZmZzZXQ7XG5cbiAgICAgICAgLy8gRmlyc3QgbG9vayBhdCBBY3Rpb24gYW5kIGNoZWNrIHZhbHVlIGlzbid0IGxpbmtpbmcgaXRzZWxmXG4gICAgICAgIGlmICh3YXRjaGVkVmFsdWUuY3VycmVudCAhPT0gdW5kZWZpbmVkICYmIGtleSAhPT0gd2F0Y2hlZEtleSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSB3YXRjaGVkVmFsdWUuY3VycmVudDtcbiAgICAgICAgXG4gICAgICAgIC8vIFRoZW4gY2hlY2sgdmFsdWVzIGluIElucHV0XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXRPZmZzZXQgJiYgaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkod2F0Y2hlZEtleSkpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWUub3JpZ2luICsgKGlucHV0T2Zmc2V0W3dhdGNoZWRLZXldICogdmFsdWUuYW1wKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBtYXBGcm9tIGFuZCBtYXBUbyBwcm9wZXJ0aWVzLCB0cmFuc2xhdGUgdGhlIG5ldyB2YWx1ZVxuICAgICAgICBpZiAodmFsdWUubWFwRnJvbSAmJiB2YWx1ZS5tYXBUbykge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBmaW5kTWFwcGVkVmFsdWUobmV3VmFsdWUsIHdhdGNoZWRWYWx1ZSwgdmFsdWUsIHZhbHVlLm1hcEZyb20sIHZhbHVlLm1hcFRvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2F0Y2g7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9XYXRjaC5qc1xuICoqLyIsIi8qXG4gICAgVGhlIGxvb3BcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIFRpbWVyID0gcmVxdWlyZSgnLi90aW1lci5qcycpLFxuICAgIHRpY2sgPSByZXF1aXJlKCcuL3RpY2suanMnKSxcbiAgICBMb29wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gbmV3IFRpbWVyKCk7XG4gICAgfTtcbiAgICBcbkxvb3AucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8qXG4gICAgICAgIFtib29sZWFuXTogQ3VycmVudCBzdGF0dXMgb2YgYW5pbWF0aW9uIGxvb3BcbiAgICAqL1xuICAgIGlzUnVubmluZzogZmFsc2UsXG4gICAgXG4gICAgLypcbiAgICAgICAgRmlyZSBhbGwgYWN0aXZlIHByb2Nlc3NlcyBvbmNlIHBlciBmcmFtZVxuICAgICovXG4gICAgZnJhbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGZyYW1lc3RhbXAgPSBzZWxmLnRpbWVyLnVwZGF0ZSgpLCAvLyBDdXJyZW50bHkganVzdCBtZWFzdXJpbmcgaW4gbXMgLSB3aWxsIGxvb2sgaW50byBoaS1yZXMgdGltZXN0YW1wc1xuICAgICAgICAgICAgICAgIGlzQWN0aXZlID0gc2VsZi5jYWxsYmFjay5jYWxsKHNlbGYuc2NvcGUsIGZyYW1lc3RhbXAsIHNlbGYudGltZXIuZ2V0RWxhcHNlZCgpKTtcblxuICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5mcmFtZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdGFydCBsb29wXG4gICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UncmUgbm90IGFscmVhZHkgcnVubmluZyBhIGxvb3BcbiAgICAgICAgaWYgKCF0aGlzLmlzUnVubmluZykge1xuICAgICAgICAgICAgdGhpcy50aW1lci5jbG9jaygpO1xuICAgICAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5mcmFtZSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdG9wIHRoZSBsb29wXG4gICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTZXQgdGhlIGNhbGxiYWNrIHRvIHJ1biBldmVyeSBmcmFtZVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtPYmplY3RdOiBFeGVjdXRpb24gY29udGV4dFxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgdG8gZmlyZVxuICAgICovXG4gICAgc2V0Q2FsbGJhY2s6IGZ1bmN0aW9uIChzY29wZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTG9vcCgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb2Nlc3MvbG9vcC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMuanMnKSxcblxuICAgIG1heEVsYXBzZWQgPSAzMyxcbiAgICBUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gMTYuNztcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuXG5UaW1lci5wcm90b3R5cGUgPSB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gTWF0aC5taW4odGhpcy5jdXJyZW50IC0gdGhpcy5wcmV2LCBtYXhFbGFwc2VkKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICAgIH0sXG5cbiAgICBnZXRFbGFwc2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsYXBzZWQ7XG4gICAgfSxcbiAgICBcbiAgICBjbG9jazogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGltZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvY2Vzcy90aW1lci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuLypcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICBcbiAgICBGb3IgSUU4LzkgRmxpbnN0b25lc1xuXG4gICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgIFxuICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgIFxuICAgIE1JVCBsaWNlbnNlXG4qL1xudmFyIHRpY2ssXG4gICAgbGFzdFRpbWUgPSAwLFxuICAgIGhhc1dpbmRvdyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyk7XG5cbmlmICghaGFzV2luZG93KSB7XG4gICAgLy8gTG9hZCByQUYgc2hpbVxuICAgIHRpY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpLFxuICAgICAgICAgICAgaWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgfSwgdGltZVRvQ2FsbCk7XG5cbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfTsgIFxuICAgIFxufSBlbHNlIHtcbiAgICB0aWNrID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aWNrO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb2Nlc3MvdGljay5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwuanMifQ==