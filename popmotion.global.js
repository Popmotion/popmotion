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
	
	    init: function init() {
	        this._cssCache = {};
	    },
	
	    update: function update(state) {
	        var actor = this;
	
	        each(build(state, actor._cssCache), function (key, value) {
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
	    Queue = __webpack_require__(46),
	    Pointer = __webpack_require__(47),
	    utils = __webpack_require__(36),
	    update = __webpack_require__(48),
	    valueOps = __webpack_require__(49),
	    select = __webpack_require__(19),
	
	/*
	    Role imports
	*/
	defaultRole = __webpack_require__(50),
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
	
	    Iterator.prototype.stagger = function stagger(method, props) {
	        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	            args[_key - 2] = arguments[_key];
	        }
	
	        var _this = this;
	
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
	
	module.exports = function (output, cache) {
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
	            if (rule !== cache[key]) {
	                cache[key] = css[key] = rule;
	            }
	        }
	    });
	
	    // If we have transform properties, add translateZ
	    if (transform !== '') {
	        if (!transformHasZ) {
	            transform += ' ' + TRANSLATE_Z + '(0px)';
	        }
	
	        if (transform !== cache.transform) {
	            cache.transform = css.transform = transform;
	        }
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
/* 46 */
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
/* 47 */
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
/* 48 */
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
/* 49 */
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
/* 50 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmNmMmZjYmY0NzI4Njg3MDk2MWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2FkL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9oc2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcG9zaXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9kaW1lbnNpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9hdHRyL2F0dHJSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvY3NzUm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvc3ZnL3N2Z1JvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL0FjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXRlcmF0b3IvSXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvUHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvUm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi9FYXNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1NpbXVsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1RyYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2Nzcy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvY3NzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvY3NzL3R5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9zdmcvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL3N2Zy90eXBlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvcGF0aC9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9Nb2RNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvSGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL1F1ZXVlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9Qb2ludGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL3ZhbHVlLW9wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2RlZmF1bHRSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9scy9Db250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi9wcmVzZXQtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuL1R3ZWVuQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvc2ltdWxhdGUvc2ltdWxhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi9CZXppZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1jb21tYS1kZWxpbWl0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1icmVhay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvY3NzL3RyYW5zZm9ybS1kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1dhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL2xvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvdGljay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7Ozs7O0FDdENBLEtBQUksU0FBUyxHQUFHLG1CQUFPLENBQUMsQ0FBYSxDQUFDO0tBQ2xDLEtBQUssR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDOztBQUV0QixPQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOzs7Ozs7QUFNekMsT0FBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEdBQUcsWUFBWTtBQUMvQixXQUFNLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztFQUNyQixDOzs7Ozs7QUNYRCxhQUFZLENBQUM7O0FBRWIsS0FBSSxTQUFTLEdBQUcsbUJBQU8sQ0FBQyxDQUFjLENBQUMsQ0FBQzs7Ozs7QUFLeEMsVUFBUyxDQUFDLFlBQVksQ0FBQztBQUNuQixVQUFLLEVBQUUsbUJBQU8sQ0FBQyxDQUFzQixDQUFDO0FBQ3RDLFVBQUssRUFBRSxtQkFBTyxDQUFDLENBQXNCLENBQUM7QUFDdEMsT0FBRSxFQUFFLG1CQUFPLENBQUMsQ0FBbUIsQ0FBQztBQUNoQyxRQUFHLEVBQUUsbUJBQU8sQ0FBQyxDQUFvQixDQUFDO0FBQ2xDLFFBQUcsRUFBRSxtQkFBTyxDQUFDLENBQW9CLENBQUM7QUFDbEMsUUFBRyxFQUFFLG1CQUFPLENBQUMsQ0FBb0IsQ0FBQztBQUNsQyxVQUFLLEVBQUUsbUJBQU8sQ0FBQyxDQUFzQixDQUFDO0FBQ3RDLGNBQVMsRUFBRSxtQkFBTyxDQUFDLEVBQTBCLENBQUM7QUFDOUMsZUFBVSxFQUFFLG1CQUFPLENBQUMs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QUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDO2FBQ3BELEVBQUUsR0FBRyxVQUFVLENBQUMsWUFBWTtBQUN4QixxQkFBUSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQztVQUNuQyxFQUFFLFVBQVUsQ0FBQyxDQUFDOztBQUVuQixpQkFBUSxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUM7O0FBRWpDLGdCQUFPLEVBQUUsQ0FBQztNQUNiLENBQUM7RUFFTCxNQUFNO0FBQ0gsU0FBSSxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztFQUN2Qzs7QUFFRCxPQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDZjZjJmY2JmNDcyODY4NzA5NjFmXG4gKiovIiwidmFyIHBvcG1vdGlvbiA9IHJlcXVpcmUoJy4vbW9kdWxlLmpzJyksXG4gICAgVUlyZWYgPSB3aW5kb3cudWk7XG5cbndpbmRvdy51aSA9IHdpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247XG5cbi8qXG4gICAgSWYgbm9Db25mbGljdCBpcyBydW4sIHRoZSBvcmlnaW5hbCByZWZlcmVuY2UgdG8gd2luZG93LlVJIGlzXG4gICAgcmVzdG9yZWQgYW5kIFBvcG1vdGlvbiBpcyBsb2FkZWQgdG8gd2luZG93LlBvcG1vdGlvblxuKi9cbndpbmRvdy51aS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy51aSA9IFVJcmVmO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9sb2FkL2dsb2JhbC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcG9wbW90aW9uID0gcmVxdWlyZSgnLi4vcG9wbW90aW9uJyk7XG5cbi8qXG4gICAgQWRkIG9wdGlvbmFsIGN1c3RvbSB2YWx1ZSB0eXBlIHN1cHBvcnRcbiovXG5wb3Btb3Rpb24uYWRkVmFsdWVUeXBlKHtcbiAgICBhbHBoYTogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvYWxwaGEnKSxcbiAgICBhbmdsZTogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvYW5nbGUnKSxcbiAgICBweDogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvcHgnKSxcbiAgICBoc2w6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2hzbCcpLFxuICAgIHJnYjogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvcmdiJyksXG4gICAgaGV4OiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9oZXgnKSxcbiAgICBjb2xvcjogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvY29sb3InKSxcbiAgICBwb3NpdGlvbnM6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucycpLFxuICAgIGRpbWVuc2lvbnM6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2RpbWVuc2lvbnMnKSxcbiAgICBzY2FsZTogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvc2NhbGUnKSxcbiAgICBzaGFkb3c6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3NoYWRvdycpXG59KTtcblxuLypcbiAgICBQcmVkZWZpbmVkIHJvbGVzXG4qL1xuXG5wb3Btb3Rpb24uYXR0ciA9IHJlcXVpcmUoJy4uL3JvbGVzL2F0dHIvYXR0clJvbGUnKTtcbnBvcG1vdGlvbi5jc3MgPSByZXF1aXJlKCcuLi9yb2xlcy9jc3MvY3NzUm9sZScpO1xucG9wbW90aW9uLnN2ZyA9IHJlcXVpcmUoJy4uL3JvbGVzL3N2Zy9zdmdSb2xlJyk7XG5wb3Btb3Rpb24uZHJhd1BhdGggPSByZXF1aXJlKCcuLi9yb2xlcy9wYXRoL2RyYXdQYXRoUm9sZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBvcG1vdGlvbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9sb2FkL21vZHVsZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdmFsdWVUeXBlTWFuYWdlciA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvbWFuYWdlcicpLFxuICAgIHNlbGVjdCA9IHJlcXVpcmUoJy4vYWN0b3Ivc2VsZWN0JyksXG5cbiAgICBQb3Btb3Rpb24gPSB7XG5cbiAgICAgICAgQWN0b3I6IHJlcXVpcmUoJy4vYWN0b3IvQWN0b3InKSxcblxuICAgICAgICBJbnB1dDogcmVxdWlyZSgnLi9pbnB1dC9JbnB1dCcpLFxuXG4gICAgICAgIEl0ZXJhdG9yOiByZXF1aXJlKCcuL2l0ZXJhdG9yL0l0ZXJhdG9yJyksXG5cbiAgICAgICAgUHJvY2VzczogcmVxdWlyZSgnLi9wcm9jZXNzL1Byb2Nlc3MnKSxcblxuICAgICAgICBFYXNpbmc6IHJlcXVpcmUoJy4vYWN0aW9ucy90d2Vlbi9FYXNpbmcnKSxcblxuICAgICAgICBSb2xlOiByZXF1aXJlKCcuL3JvbGVzL1JvbGUnKSxcblxuICAgICAgICBBY3Rpb246IHJlcXVpcmUoJy4vYWN0aW9ucy9BY3Rpb24nKSxcbiAgICAgICAgVHdlZW46IHJlcXVpcmUoJy4vYWN0aW9ucy9Ud2VlbicpLFxuICAgICAgICBTaW11bGF0ZTogcmVxdWlyZSgnLi9hY3Rpb25zL1NpbXVsYXRlJyksXG4gICAgICAgIFRyYWNrOiByZXF1aXJlKCcuL2FjdGlvbnMvVHJhY2snKSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgQ3JlYXRlIGFuIEl0ZXJhdG9yIG9mIEFjdG9ycyB3aXRoIHNlbGVjdGVkIGRvbSBlbGVtZW50c1xuICAgICAgICAqL1xuICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChzZWxlY3Rvciwgb3B0cyA9IHt9KSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gc2VsZWN0KHNlbGVjdG9yKSxcbiAgICAgICAgICAgICAgICBhY3RvcnMgPSBbXTtcblxuICAgICAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBvcHRzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIGFjdG9ycy5wdXNoKG5ldyB0aGlzLkFjdG9yKG9wdHMpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IHRoaXMuSXRlcmF0b3IoYWN0b3JzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRWYWx1ZVR5cGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhbHVlVHlwZU1hbmFnZXIuZXh0ZW5kLmFwcGx5KHZhbHVlVHlwZU1hbmFnZXIsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBjYWxjOiByZXF1aXJlKCcuL2luYy9jYWxjJylcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcG1vdGlvbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDFcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdkZWcnXG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAncHgnXG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9weC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIGdldENvbG9yVmFsdWVzID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZ2V0LWNvbG9yLXZhbHVlcycpLFxuICAgIGZ1bmN0aW9uQ3JlYXRlID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlJyksXG4gICAgZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyksXG4gICAgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5oc2w7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIEh1ZToge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAzNjBcbiAgICAgICAgfSxcbiAgICAgICAgU2F0dXJhdGlvbjogZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIExpZ2h0bmVzczogZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIEFscGhhOiBkZWZhdWx0UHJvcHMub3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdoc2wnKSA+IC0xKTtcbiAgICB9LFxuICAgIFxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGdldENvbG9yVmFsdWVzKHZhbHVlLCB0ZXJtcyk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uQ3JlYXRlKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnLCAnLCAyKSwgJ2hzbGEnKTtcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hzbC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIGdldENvbG9yVmFsdWVzID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZ2V0LWNvbG9yLXZhbHVlcycpLFxuICAgIGZ1bmN0aW9uQ3JlYXRlID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlJyksXG4gICAgZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyksXG4gICAgY29sb3JEZWZhdWx0cyA9IGRlZmF1bHRQcm9wcy5jb2xvcixcbiAgICB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLmNvbG9ycztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgUmVkOiBjb2xvckRlZmF1bHRzLFxuICAgICAgICBHcmVlbjogY29sb3JEZWZhdWx0cyxcbiAgICAgICAgQmx1ZTogY29sb3JEZWZhdWx0cyxcbiAgICAgICAgQWxwaGE6IGRlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ3JnYicpID4gLTEpO1xuICAgIH0sXG4gICAgXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZ2V0Q29sb3JWYWx1ZXModmFsdWUsIHRlcm1zKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb25DcmVhdGUoY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgdGVybXMsICcsICcsIDIpLCAncmdiYScpO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciByZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogcmdiLmRlZmF1bHRQcm9wcyxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJyMnKSA+IC0xKTtcbiAgICB9LFxuICAgIFxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHIsIGcsIGI7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMik7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDMsIDIpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cig1LCAyKTtcblxuICAgICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAxKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDMsIDEpO1xuICAgICAgICAgICAgciArPSByO1xuICAgICAgICAgICAgZyArPSBnO1xuICAgICAgICAgICAgYiArPSBiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgICAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgICAgICAgIEFscGhhOiAxXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIHJnYi5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oZXguanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgcmdiID0gcmVxdWlyZSgnLi9yZ2InKSxcbiAgICBoc2wgPSByZXF1aXJlKCcuL2hzbCcpLFxuICAgIGhleCA9IHJlcXVpcmUoJy4vaGV4JyksXG4gICAgc3VwcG9ydGVkID0gW3JnYiwgaHNsLCBoZXhdLFxuICAgIG51bVN1cHBvcnRlZCA9IDMsXG5cbiAgICBydW5TdXBwb3J0ZWQgPSBmdW5jdGlvbiAobWV0aG9kLCB2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVN1cHBvcnRlZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3VwcG9ydGVkW2ldLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRlZFtpXVttZXRob2RdKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiB1dGlscy5tZXJnZShyZ2IuZGVmYXVsdFByb3BzLCBoc2wuZGVmYXVsdFByb3BzKSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gcmdiLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2wudGVzdCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHJ1blN1cHBvcnRlZCgnc3BsaXQnLCB2YWx1ZSk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZXMuUmVkICE9PSB1bmRlZmluZWQpID8gcmdiLmNvbWJpbmUodmFsdWVzKSA6IGhzbC5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIHB4RGVmYXVsdHMgPSByZXF1aXJlKCcuL3B4JykuZGVmYXVsdFByb3BzLFxuICAgIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQnKSxcbiAgICB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLnBvc2l0aW9ucztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHB4RGVmYXVsdHMsXG4gICAgICAgIFxuICAgIC8qXG4gICAgICAgIFNwbGl0IHBvc2l0aW9ucyBpbiBmb3JtYXQgXCJYIFkgWlwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFBvc2l0aW9uIHZhbHVlc1xuICAgICAgICAgICAgXCIyMCUgMzAlIDBcIiAtPiB7MjAlLCAzMCUsIDB9XG4gICAgICAgICAgICBcIjIwJSAzMCVcIiAtPiB7MjAlLCAzMCV9XG4gICAgICAgICAgICBcIjIwJVwiIC0+IHsyMCUsIDIwJX1cbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHBvc2l0aW9ucyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpLFxuICAgICAgICAgICAgbnVtUG9zaXRpb25zID0gcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICAgIHNwbGl0VmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgWDogcG9zaXRpb25zWzBdLFxuICAgICAgICAgICAgICAgIFk6IChudW1Qb3NpdGlvbnMgPiAxKSA/IHBvc2l0aW9uc1sxXSA6IHBvc2l0aW9uc1swXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICBpZiAobnVtUG9zaXRpb25zID4gMikge1xuICAgICAgICAgICAgc3BsaXRWYWx1ZS5aID0gcG9zaXRpb25zWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnICcpO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcG9zaXRpb25zLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLmRpbWVuc2lvbnMsXG4gICAgcHhEZWZhdWx0cyA9IHJlcXVpcmUoJy4vcHgnKS5kZWZhdWx0UHJvcHMsXG4gICAgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHB4RGVmYXVsdHMsXG4gICAgXG4gICAgLypcbiAgICAgICAgU3BsaXQgZGltZW5zaW9ucyBpbiBmb3JtYXQgXCJUb3AgUmlnaHQgQm90dG9tIExlZnRcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBEaW1lbnNpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4IDQwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgNDBweH1cbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweCAwXCIgLT4gezIwcHgsIDAsIDIwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHhcIiAtPiB7MjBweCwgMjBweCwgMjBweCwgMjBweH1cbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIFQvUi9CL0wgbWV0cmljc1xuICAgICovXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZGltZW5zaW9ucyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpLFxuICAgICAgICAgICAgbnVtRGltZW5zaW9ucyA9IGRpbWVuc2lvbnMubGVuZ3RoLFxuICAgICAgICAgICAganVtcEJhY2sgPSAobnVtRGltZW5zaW9ucyAhPT0gMSkgPyAyIDogMSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgaiA9IDAsXG4gICAgICAgICAgICBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgZm9yICg7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbdGVybXNbaV1dID0gZGltZW5zaW9uc1tqXTtcblxuICAgICAgICAgICAgLy8gSnVtcCBiYWNrICh0byBzdGFydCkgY291bnRlciBpZiB3ZSd2ZSByZWFjaGVkIHRoZSBlbmQgb2Ygb3VyIHZhbHVlc1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgaiA9IChqID09PSBudW1EaW1lbnNpb25zKSA/IGogLSBqdW1wQmFjayA6IGo7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgdGVybXMsICcgJyk7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9kaW1lbnNpb25zLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGluaXQ6IDFcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NjYWxlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjb2xvciA9IHJlcXVpcmUoJy4vY29sb3InKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIHB4RGVmYXVsdHMgPSByZXF1aXJlKCcuL3B4JykuZGVmYXVsdFByb3BzLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jykuc2hhZG93LFxuICAgIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQnKSxcbiAgICBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgc2hhZG93VGVybXMgPSB0ZXJtcy5zbGljZSgwLDQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogdXRpbHMubWVyZ2UoY29sb3IuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIFg6IHB4RGVmYXVsdHMsXG4gICAgICAgIFk6IHB4RGVmYXVsdHMsXG4gICAgICAgIFJhZGl1czogcHhEZWZhdWx0cyxcbiAgICAgICAgU3ByZWFkOiBweERlZmF1bHRzXG4gICAgfSksXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBzaGFkb3cgcHJvcGVydGllcyBcIlggWSBSYWRpdXMgU3ByZWFkIENvbG9yXCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogU2hhZG93IHByb3BlcnR5XG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGJpdHMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKSxcbiAgICAgICAgICAgIG51bUJpdHMgPSBiaXRzLmxlbmd0aCxcbiAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IGZhbHNlLFxuICAgICAgICAgICAgY29sb3JQcm9wID0gJycsXG4gICAgICAgICAgICB0aGlzQml0LFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgZm9yICg7IGkgPCBudW1CaXRzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXNCaXQgPSBiaXRzW2ldO1xuXG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBjb2xvciBwcm9wZXJ0eSwgYXBwZW5kIHRvIGNvbG9yIHN0cmluZ1xuICAgICAgICAgICAgaWYgKGhhc1JlYWNoZWRDb2xvciB8fCBjb2xvci50ZXN0KHRoaXNCaXQpKSB7XG4gICAgICAgICAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb2xvclByb3AgKz0gdGhpc0JpdDtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlW3Rlcm1zW2ldXSA9IHRoaXNCaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB1dGlscy5tZXJnZShzcGxpdFZhbHVlLCBjb2xvci5zcGxpdChjb2xvclByb3ApKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgc2hhZG93VGVybXMsICcgJykgKyBjb2xvci5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJvbGUgPSByZXF1aXJlKCcuLi9Sb2xlJyk7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2g7XG5cbnZhciBhdHRyUm9sZSA9IG5ldyBSb2xlKHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzO1xuXG4gICAgICAgIGVhY2goc3RhdGUsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBhdHRyUm9sZS5zZXQoYWN0b3IuZWxlbWVudCwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgfSxcblxuICAgIHNldDogZnVuY3Rpb24gKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXR0clJvbGU7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL2F0dHIvYXR0clJvbGUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJvbGUgPSByZXF1aXJlKCcuLi9Sb2xlJyk7XG52YXIgYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2g7XG5cbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywnTW96JywnTycsJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHByb3BlcnR5TmFtZUNhY2hlID0ge307XG4gICAgICAgICAgICAgICAgICAgIFxuLypcbiAgICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICAgIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0ZXN0RWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIFxuICAgICAgICBwcm9wZXJ0eU5hbWVDYWNoZVtrZXldID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV0sXG4gICAgICAgICAgICAgICAgcHJlZml4ZWQgPSAocHJlZml4ID09PSAnJykgPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICAgICAgICAgIGlmICh0ZXN0RWxlbWVudC5zdHlsZS5oYXNPd25Qcm9wZXJ0eShwcmVmaXhlZCkpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWVDYWNoZVtrZXldID0gcHJlZml4ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBwcm9wZXJ0eU5hbWVDYWNoZVtrZXldO1xuICAgIH07XG5cbnZhciBjc3NSb2xlID0gbmV3IFJvbGUoe1xuICAgIF9tYXA6IHJlcXVpcmUoJy4vbWFwJyksXG4gICAgX3R5cGVNYXA6IHJlcXVpcmUoJy4vdHlwZS1tYXAnKSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY3NzQ2FjaGUgPSB7fTtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGFjdG9yID0gdGhpcztcblxuICAgICAgICBlYWNoKGJ1aWxkKHN0YXRlLCBhY3Rvci5fY3NzQ2FjaGUpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgY3NzUm9sZS5zZXQoYWN0b3IuZWxlbWVudCwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgICAgICAga2V5ID0gcHJvcGVydHlOYW1lQ2FjaGVba2V5XSB8fCB0ZXN0UHJlZml4KGtleSk7XG5cbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpW2tleV07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2V0OiBmdW5jdGlvbiAoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBrZXkgPSBwcm9wZXJ0eU5hbWVDYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTtcblxuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gY3NzUm9sZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9jc3MvY3NzUm9sZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUm9sZSA9IHJlcXVpcmUoJy4uL1JvbGUnKSxcbiAgICBhdHRyUm9sZSA9IHJlcXVpcmUoJy4uL2F0dHIvYXR0clJvbGUnKSxcbiAgICBidWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKSxcbiAgICBlYWNoID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuZWFjaDtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgUm9sZSh7XG4gICAgbmFtZTogJ3N2ZycsXG5cbiAgICBfbWFwOiByZXF1aXJlKCcuLi9jc3MvbWFwJyksXG4gICAgX3R5cGVNYXA6IHJlcXVpcmUoJy4vdHlwZS1tYXAnKSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBib3VuZGluZ0JveCA9IHRoaXMuZWxlbWVudC5nZXRCQm94KCksXG4gICAgICAgICAgICB2YWx1ZXMgPSB0aGlzLnZhbHVlcyxcbiAgICAgICAgICAgIC8vIFRPRE86IFN1cHBvcnQgcHhcbiAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpblggPSB2YWx1ZXMudHJhbnNmb3JtT3JpZ2luWCA/IHZhbHVlcy50cmFuc2Zvcm1PcmlnaW5YLmN1cnJlbnQgOiA1MCxcbiAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpblkgPSB2YWx1ZXMudHJhbnNmb3JtT3JpZ2luWSA/IHZhbHVlcy50cmFuc2Zvcm1PcmlnaW5ZLmN1cnJlbnQgOiA1MCxcbiAgICAgICAgICAgIG9yaWdpbiA9IHtcbiAgICAgICAgICAgICAgICB4OiBib3VuZGluZ0JveC53aWR0aCAqICh0cmFuc2Zvcm1PcmlnaW5YIC8gMTAwKSArIGJvdW5kaW5nQm94LngsXG4gICAgICAgICAgICAgICAgeTogYm91bmRpbmdCb3guaGVpZ2h0ICogKHRyYW5zZm9ybU9yaWdpblkgLyAxMDApICsgYm91bmRpbmdCb3gueVxuICAgICAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN2Z09yaWdpbiA9IG9yaWdpbjtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGFjdG9yID0gdGhpcztcbiAgICAgICAgZWFjaChidWlsZChzdGF0ZSwgdGhpcy5zdmdPcmlnaW4pLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgYXR0clJvbGUuc2V0KGFjdG9yLmVsZW1lbnQsIGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL3N2Zy9zdmdSb2xlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSb2xlID0gcmVxdWlyZSgnLi4vUm9sZScpO1xudmFyIGNzc1JvbGUgPSByZXF1aXJlKCcuLi9jc3MvY3NzUm9sZScpO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoO1xuXG4vKlxuICAgIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gKHBlcmNlbnRhZ2UsIGxlbmd0aCkge1xuICAgIHJldHVybiAocGFyc2VGbG9hdChwZXJjZW50YWdlKSAvIDEwMCkgKiBsZW5ndGggKyAncHgnO1xufTtcblxuLypcbiAgICBDcmVhdGUgc3R5bGVzXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBTVkcgUGF0aCBwcm9wZXJ0aWVzXG4gICAgQHBhcmFtIFtvYmplY3RdOiBMZW5ndGggb2YgcGF0aFxuICAgIEByZXR1cm5zIFtvYmplY3RdOiBLZXkvdmFsdWUgcGFpcnMgb2YgdmFsaWQgQ1NTIHByb3BlcnRpZXNcbiovXG52YXIgY3JlYXRlU3R5bGVzID0gZnVuY3Rpb24gKHByb3BzLCBsZW5ndGgpIHtcbiAgICB2YXIgaGFzRGFzaEFycmF5ID0gZmFsc2UsXG4gICAgICAgIGRhc2hBcnJheVN0eWxlcyA9IHtcbiAgICAgICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGVzID0ge307XG5cbiAgICBlYWNoKHByb3BzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBrZXkgPSBTVkdEcmF3UGF0aC5fbWFwW2tleV0gfHwga2V5O1xuXG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGhhc0Rhc2hBcnJheSkge1xuICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNoYXJyYXknXSA9IGRhc2hBcnJheVN0eWxlcy5sZW5ndGggKyAnICcgKyBkYXNoQXJyYXlTdHlsZXMuc3BhY2luZztcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xufTtcblxuLypcbiAgICBEcmF3IFBhdGggcm9sZVxuKi9cbnZhciBTVkdEcmF3UGF0aCA9IG5ldyBSb2xlKHtcbiAgICBfbWFwOiByZXF1aXJlKCcuL21hcCcpLFxuXG4gICAgX3R5cGVNYXA6IHtcbiAgICAgICAgc3Ryb2tlOiAnY29sb3InXG4gICAgfSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wYXRoTGVuZ3RoID0gdGhpcy5lbGVtZW50LmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFVwZGF0ZSBgcGF0aGAgc3R5bGVzIGFuZCBpZiBgZWxlbWVudGAgaXMgcHJlc2VudCwgc2V0XG4gICAgICAgIHgsIHkgYW5kIHJvdGF0aW9uXG4gICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICBjc3NSb2xlLnVwZGF0ZS5jYWxsKHRoaXMsIGNyZWF0ZVN0eWxlcyhzdGF0ZSwgdGhpcy5wYXRoTGVuZ3RoKSk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU1ZHRHJhd1BhdGg7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvcGF0aC9kcmF3UGF0aFJvbGUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIE1vZE1hbmFnZXIgPSByZXF1aXJlKCcuLi9pbmMvTW9kTWFuYWdlcicpLFxuICAgIHZhbHVlVHlwZU1hbmFnZXIgPSBuZXcgTW9kTWFuYWdlcigpO1xuXG52YWx1ZVR5cGVNYW5hZ2VyLmRlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uICh0eXBlLCBrZXkpIHtcbiAgICB2YXIgdmFsdWVUeXBlID0gdGhpc1t0eXBlXSxcbiAgICAgICAgZGVmYXVsdFByb3BzID0gKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpID8gdmFsdWVUeXBlLmRlZmF1bHRQcm9wc1trZXldIHx8IHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMgOiB7fTtcblxuICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG59O1xuXG52YWx1ZVR5cGVNYW5hZ2VyLnRlc3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uIChrZXksIG1vZCkge1xuICAgICAgICBpZiAobW9kLnRlc3QgJiYgbW9kLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICB0eXBlID0ga2V5O1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsdWVUeXBlTWFuYWdlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5hZ2VyLmpzXG4gKiovIiwiLypcbiAgICBDcmVhdGUgYW4gQWN0b3JDb2xsZWN0aW9uIGJhc2VkIG9uIGEgc2VsZWN0aW9uIG9mIERPTSBub2Rlc1xuXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3QgfHwgalF1ZXJ5IG9iamVjdF06XG4gICAgICAgIElmIHN0cmluZywgdHJlYXRlZCBhcyBzZWxlY3Rvci5cbiAgICAgICAgSWYgbm90LCB0cmVhdGVkIGFzIHByZWV4aXN0aW5nIE5vZGVMaXN0IHx8IGpRdWVyeSBvYmplY3QuXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICB2YXIgbm9kZXMgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yLFxuICAgICAgICBlbGVtZW50cyA9IFtdO1xuXG4gICAgLy8gSWYgalF1ZXJ5IHNlbGVjdGlvbiwgZ2V0IGFycmF5IG9mIEVsZW1lbnRzXG4gICAgaWYgKG5vZGVzLmdldCkge1xuICAgICAgICBlbGVtZW50cyA9IG5vZGVzLmdldCgpO1xuXG4gICAgLy8gT3IgY29udmVydCBOb2RlTGlzdCB0byBhcnJheVxuICAgIH0gZWxzZSBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChub2Rlcyk7XG5cbiAgICAvLyBPciBpZiBpdCdzIGp1c3QgYW4gRWxlbWVudCwgcHV0IGludG8gYXJyYXlcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50cy5wdXNoKG5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdG9yL3NlbGVjdC5qc1xuICoqLyIsInZhciBQcm9jZXNzID0gcmVxdWlyZSgnLi4vcHJvY2Vzcy9Qcm9jZXNzJyksXG4gICAgUXVldWUgPSByZXF1aXJlKCcuLi9pbmMvUXVldWUnKSxcbiAgICBQb2ludGVyID0gcmVxdWlyZSgnLi4vaW5wdXQvUG9pbnRlcicpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgdXBkYXRlID0gcmVxdWlyZSgnLi91cGRhdGUnKSxcbiAgICB2YWx1ZU9wcyA9IHJlcXVpcmUoJy4vdmFsdWUtb3BlcmF0aW9ucycpLFxuICAgIHNlbGVjdCA9IHJlcXVpcmUoJy4vc2VsZWN0JyksXG5cbiAgICAvKlxuICAgICAgICBSb2xlIGltcG9ydHNcbiAgICAqL1xuICAgIGRlZmF1bHRSb2xlID0gcmVxdWlyZSgnLi4vcm9sZXMvZGVmYXVsdFJvbGUnKSxcbiAgICBjc3NSb2xlID0gcmVxdWlyZSgnLi4vcm9sZXMvY3NzL2Nzc1JvbGUnKSxcbiAgICBzdmdSb2xlID0gcmVxdWlyZSgnLi4vcm9sZXMvc3ZnL3N2Z1JvbGUnKSxcbiAgICBkcmF3UGF0aFJvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9wYXRoL2RyYXdQYXRoUm9sZScpLFxuXG4gICAgQWN0aW9uID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9BY3Rpb24nKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaDtcblxuY2xhc3MgQWN0b3Ige1xuXG4gICAgLypcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWVzOiB7fSB9O1xuICAgICAgICB0aGlzLnF1ZXVlID0gbmV3IFF1ZXVlKCk7XG4gICAgICAgIHRoaXMucHJvY2VzcyA9IG5ldyBQcm9jZXNzKHRoaXMsIHVwZGF0ZSk7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLm51bUFjdGl2ZSA9IDA7XG4gICAgICAgIHRoaXMuYWN0aW9uQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuYWN0aXZlVmFsdWVzID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZlUGFyZW50cyA9IFtdO1xuXG4gICAgICAgIC8vIEdldCBhY3R1YWwgZWxlbWVudHMgaWYgdGhpcyBpcyBhIHNlbGVjdG9yXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhvcHRzLmVsZW1lbnQpKSB7XG4gICAgICAgICAgICBvcHRzLmVsZW1lbnQgPSBzZWxlY3Qob3B0cy5lbGVtZW50KVswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXNzaWduUm9sZXMob3B0cy5lbGVtZW50LCBvcHRzLmFzLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zZXQob3B0cyk7XG4gICAgICAgIHRoaXMuaW5pdFJvbGVzKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU2V0IEFjdG9yIHByb3BlcnRpZXMgYW5kIHZhbHVlc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcmV0dXJucyBbQWN0b3JdXG4gICAgKi9cbiAgICBzZXQob3B0cykge1xuICAgICAgICBlYWNoKG9wdHMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAndmFsdWVzJyAmJiBrZXkgIT09ICdhY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChvcHRzICYmIG9wdHMudmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlT3BzLnByb2Nlc3ModGhpcy52YWx1ZXMsIG9wdHMudmFsdWVzLCBvcHRzLCAnY3VycmVudCcsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24tc3BlY2lmaWMgY29udHJvbHMgdG8gQWN0b3JcblxuICAgICAgICBAcmV0dXJucyBbQ29udHJvbHNdXG4gICAgKi9cbiAgICBjb250cm9scyhhY3Rpb24pIHtcbiAgICAgICAgdmFyIENvbnRyb2xzID0gYWN0aW9uLmdldENvbnRyb2xzKCk7XG4gICAgICAgIHJldHVybiBuZXcgQ29udHJvbHModGhpcywgYWN0aW9uLmdldFBsYXlhYmxlKCkpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN0YXJ0IGEgbmV3IEFjdGlvblxuXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICBAcGFyYW0gW0lucHV0IHx8IGV2ZW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtDb250cm9sc11cbiAgICAqL1xuICAgIHN0YXJ0KGFjdGlvbiwgaW5wdXQpIHtcbiAgICAgICAgdmFyIENvbnRyb2xzID0gYWN0aW9uLmdldENvbnRyb2xzKCksXG4gICAgICAgICAgICBvcHRzID0gdXRpbHMuY29weShhY3Rpb24pO1xuXG4gICAgICAgIG9wdHMuYWN0aW9uID0gYWN0aW9uLmdldFBsYXlhYmxlKCk7XG4gICAgICAgIHRoaXMuc2V0KG9wdHMpO1xuXG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5iaW5kSW5wdXQoaW5wdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuXG4gICAgICAgIHJldHVybiBuZXcgQ29udHJvbHModGhpcywgb3B0cy5hY3Rpb24sIHRydWUpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFBhdXNlIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJvY2Vzcy5zdG9wKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFJlc3VtZSBhbGwgYWN0aXZlIEFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW2ludF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJucyBbQWN0b3JdO1xuICAgICovXG4gICAgcmVzdW1lKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzLnN0YXJ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN0b3AgYWxsIGFjdGl2ZSBBY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtpbnRdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybnMgW0FjdG9yXVxuICAgICovXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBUb2dnbGUgYWxsIGFjdGl2ZSBBY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtpbnRdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybnMgW0FjdG9yXVxuICAgICovXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZSA/IHRoaXMucGF1c2UoKSA6IHRoaXMucmVzdW1lKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU3luY3MgYGVsZW1lbnRgIHdpdGggY3VycmVudCBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHJldHVybnMgW0FjdG9yXVxuICAgICovXG4gICAgc3luYygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQobmV3IEFjdGlvbih7IHZhbHVlczogdGhpcy52YWx1ZXMgfSkpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFkZCBhIG5ldyBBY3Rpb24gdG8gdGhlIHF1ZXVlXG4gICAgKi9cbiAgICB0aGVuKCkge1xuICAgICAgICB0aGlzLnF1ZXVlLmFkZC5hcHBseSh0aGlzLnF1ZXVlLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBFeGVjdXRlIG5leHQgaW4gcXVldWVcbiAgICAqL1xuICAgIG5leHQoKSB7XG4gICAgICAgIHZhciBuZXh0ID0gdGhpcy5xdWV1ZS5uZXh0KCk7XG5cbiAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmMobmV4dCkpIHtcbiAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQobmV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFzc2lnbiBSb2xlcyBiYXNlZCBvbiBlbGVtZW50IGFuZCBtYW51YWxseSBwcm92aWRlZCBwcm9wc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogRWxlbWVudFxuICAgICAgICBAcGFyYW0gW1JvbGUgfHwgYXJyYXldXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl0gKG9wdGlvbmFsKVxuICAgICovXG4gICAgYXNzaWduUm9sZXMoZWxlbWVudCwgbWFudWFsUm9sZXMsIHN1cnByZXNzSW5pdCkge1xuICAgICAgICAvLyBBbGwgQWN0b3JzIGdldCBhIGRlZmF1bHQgUm9sZSB0aGF0IGhhbmRsZXMgdXNlciBjYWxsYmFja3NcbiAgICAgICAgdGhpcy5yb2xlcyA9IFsgZGVmYXVsdFJvbGUgXTtcblxuICAgICAgICAvLyBBdXRvLWFzc2lnbiBpZiBubyBtYW51YWxseS1zZXQgUm9sZXNcbiAgICAgICAgaWYgKCFtYW51YWxSb2xlcyAmJiBlbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9Bc3NpZ25Sb2xlcyhlbGVtZW50KTtcblxuICAgICAgICAvLyBPciBtYW51YWxseSBzZXQgaWYgcHJvdmlkZWRcbiAgICAgICAgfSBlbHNlIGlmIChtYW51YWxSb2xlcykge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzQXJyYXkobWFudWFsUm9sZXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2xlcy5wdXNoLmFwcGx5KHRoaXMucm9sZXMsIG1hbnVhbFJvbGVzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2xlcy5wdXNoKG1hbnVhbFJvbGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3VycHJlc3NJbml0KSB7XG4gICAgICAgICAgICB0aGlzLmluaXRSb2xlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQXV0b21hdGljYWxseSBhc3NpZ24gUm9sZXMgYmFzZWQgb24gZWxlbWVudCwgZGVzaWduZWRcbiAgICAgICAgdG8gYmUgZXh0ZW5kZWRcblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEVsZW1lbnRcbiAgICAqL1xuICAgIGF1dG9Bc3NpZ25Sb2xlcyhlbGVtZW50KSB7XG4gICAgICAgIC8vIEFkZCBDU1Mgcm9sZSBpZiBIVE1MRWxlbWVudFxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2goY3NzUm9sZSk7XG5cbiAgICAgICAgLy8gQWRkIFNWRyByb2xlIGlmIFNWRyBlbGVtZW50XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaChzdmdSb2xlKTtcblxuICAgICAgICAgICAgLy8gQWRkIERyYXcgUGF0aCByb2xlIGlmIHBhdGggZWxlbWVudFxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2xlcy5wdXNoKGRyYXdQYXRoUm9sZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBGaXJlIGluaXQgY2FsbGJhY2tzXG4gICAgKi9cbiAgICBpbml0Um9sZXMoKSB7XG4gICAgICAgIC8vIEZpcmUgaW5pdCBjYWxsYmFja1xuICAgICAgICB0aGlzLnJvbGVzLmZvckVhY2goKHJvbGUpID0+IHtcbiAgICAgICAgICAgIGlmIChyb2xlLmluaXQpIHtcbiAgICAgICAgICAgICAgICByb2xlLmluaXQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZpcnN0RnJhbWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBCaW5kIEFjdGlvbiBhbmQgcmV0dXJuIGl0cyB0YWJsZSBpZFxuXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICBAcmV0dXJucyBbaW50XVxuICAgICovXG4gICAgYmluZEFjdGlvbihhY3Rpb24sIGlkKSB7XG4gICAgICAgIGlkID0gKGlkID09PSB1bmRlZmluZWQpID8gdGhpcy5hY3Rpb25Db3VudGVyKysgOiBpZDtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5udW1BY3RpdmUrKztcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIHVuYmluZEFjdGlvbihpZCkge1xuICAgICAgICB0aGlzLm51bUFjdGl2ZS0tO1xuICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcblxuICAgICAgICBpZiAoIXRoaXMubnVtQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFjdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBVcGRhdGUgcHJvY2Vzc2luZyBvcmRlclxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl1cbiAgICAgICAgQHBhcmFtIFtib29sZWFuXVxuICAgICovXG4gICAgdXBkYXRlT3JkZXIoa2V5LCBtb3ZlVG9CYWNrLCBoYXNDaGlsZHJlbikge1xuICAgICAgICB2YXIgb3JkZXIgPSAoIWhhc0NoaWxkcmVuKSA/IHRoaXMuYWN0aXZlVmFsdWVzIDogdGhpcy5hY3RpdmVQYXJlbnRzLFxuICAgICAgICAgICAgcG9zaXRpb24gPSBvcmRlci5pbmRleE9mKGtleSk7XG5cbiAgICAgICAgLy8gSWYga2V5IGlzbid0IGxpc3Qgb3IgbW92ZVRvQmFjayBpcyBzZXQgdG8gdHJ1ZSwgYWRkIGtleVxuICAgICAgICBpZiAocG9zaXRpb24gPT09IC0xIHx8IG1vdmVUb0JhY2spIHtcbiAgICAgICAgICAgIG9yZGVyLnB1c2goa2V5KTtcblxuICAgICAgICAgICAgLy8gSWYga2V5IGFscmVhZHkgZXhpc3RzLCByZW1vdmVcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA+IC0xKSB7XG4gICAgICAgICAgICAgICAgb3JkZXIuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0Qm91bmQoaWQsIGlucHV0KSB7XG4gICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLmdldEFjdGlvbihpZCksXG4gICAgICAgICAgICBvcHRzID0gdXRpbHMuY29weShhY3Rpb24pO1xuXG4gICAgICAgIG9wdHMuYWN0aW9uID0gYWN0aW9uO1xuICAgICAgICB0aGlzLnNldChvcHRzKTtcblxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZElucHV0KGlucHV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICBiaW5kSW5wdXQoaW5wdXQpIHtcbiAgICAgICAgdGhpcy5pbnB1dCA9ICghaW5wdXQuY3VycmVudCkgPyBuZXcgUG9pbnRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICAgICAgdGhpcy5pbnB1dE9yaWdpbiA9IHRoaXMuaW5wdXQuZ2V0KCk7XG4gICAgfVxuXG4gICAgLy8gW2Jvb2xlYW5dOiBJcyB0aGlzIEFjdG9yIGFjdGl2ZT9cbiAgICBnZXQgaXNBY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgICB9XG5cbiAgICAvLyBTZXQgaGFzQ2hhbmdlZCB0byB0cnVlIGlzIHRoaXMgaXMgbm93IGFjdGl2ZVxuICAgIHNldCBpc0FjdGl2ZShzdGF0dXMpIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gc3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXNBY3RpdmUgPSBzdGF0dXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFjdG9yO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rvci9BY3Rvci5qc1xuICoqLyIsIi8qXG4gICAgSW5wdXQgY29udHJvbGxlclxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjLmpzJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMuanMnKSxcbiAgICBIaXN0b3J5ID0gcmVxdWlyZSgnLi4vaW5jL0hpc3RvcnkuanMnKSxcblxuICAgIC8qXG4gICAgICAgIElucHV0IGNvbnN0cnVjdG9yXG4gICAgICAgIFxuICAgICAgICAgICAgU3ludGF4XG4gICAgICAgICAgICAgICAgbmV3SW5wdXQobmFtZSwgdmFsdWVbLCBwb2xsXSlcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHRvIHRyYWNrXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogSW5pdGlhbCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXSAob3B0aW9uYWwpOiBGdW5jdGlvbiB0byBwb2xsIElucHV0IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbmV3SW5wdXQocHJvcHNbLCBwb2xsXSlcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3Qgb2YgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dIChvcHRpb25hbCk6IEZ1bmN0aW9uIHRvIHBvbGwgSW5wdXQgZGF0YVxuXG4gICAgICAgIEByZXR1cm4gW0lucHV0XVxuICAgICovXG4gICAgSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwb2xsUG9zID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50ID0ge307XG4gICAgICAgIHRoaXMub2Zmc2V0ID0ge307XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7fTtcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEhpc3RvcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuYyhhcmd1bWVudHNbcG9sbFBvc10pKSB7XG4gICAgICAgICAgICB0aGlzLnBvbGwgPSBhcmd1bWVudHNbcG9sbFBvc107XG4gICAgICAgIH1cbiAgICB9O1xuXG5JbnB1dC5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLy8gW251bWJlcl06IE51bWJlciBvZiBmcmFtZXMgb2YgaW5hY3Rpdml0eSBiZWZvcmUgdmVsb2NpdHkgaXMgdHVybmVkIHRvIDBcbiAgICBtYXhJbmFjdGl2ZUZyYW1lczogMixcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogTnVtYmVyIG9mIGZyYW1lcyBpbnB1dCBoYXNuJ3QgYmVlbiB1cGRhdGVkXG4gICAgaW5hY3RpdmVGcmFtZXM6IDAsXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGxhdGVzdCBpbnB1dCB2YWx1ZXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXSAob3B0aW9uYWwpOiBOYW1lIG9mIHNwZWNpZmljIHByb3BlcnR5IHRvIHJldHVyblxuICAgICAgICBAcmV0dXJuIFtvYmplY3QgfHwgbnVtYmVyXTogTGF0ZXN0IGlucHV0IHZhbHVlcyBvciwgaWYgc3BlY2lmaWVkLCBzaW5nbGUgdmFsdWVcbiAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgdmFyIGxhdGVzdCA9IHRoaXMuaGlzdG9yeS5nZXQoKSxcbiAgICAgICAgICAgIHZhbCA9IChwcm9wICE9PSB1bmRlZmluZWQpID8gbGF0ZXN0W3Byb3BdIDogbGF0ZXN0O1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIHRoZSBpbnB1dCB2YWx1ZXNcbiAgICAgICAgXG4gICAgICAgIFN5bnRheFxuICAgICAgICAgICAgaW5wdXQudXBkYXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiB0byB0cmFja1xuICAgICAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogSW5pdGlhbCB2YWx1ZVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaW5wdXQudXBkYXRlKHByb3BzKVxuICAgICAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IG9mIHZhbHVlc1xuICAgICAgICAgICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtJbnB1dF1cbiAgICAqL1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHt9O1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bShhcmcxKSkge1xuICAgICAgICAgICAgdmFsdWVzW2FyZzBdID0gYXJnMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IGFyZzA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhpc3RvcnkuYWRkKHV0aWxzLm1lcmdlKHRoaXMuY3VycmVudCwgdmFsdWVzKSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIENoZWNrIGZvciBpbnB1dCBtb3ZlbWVudCBhbmQgdXBkYXRlIHBvaW50ZXIgb2JqZWN0J3MgcHJvcGVydGllc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaW1lc3RhbXAgb2YgZnJhbWVcbiAgICAgICAgQHJldHVybiBbSW5wdXRdXG4gICAgKi9cbiAgICBvbkZyYW1lOiBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBsYXRlc3QsIGhhc0NoYW5nZWQ7XG4gICAgICAgIFxuICAgICAgICAvLyBDaGVjayBwcm92aWRlZCB0aW1lc3RhbXAgYWdhaW5zdCBsYXN0RnJhbWUgdGltZXN0YW1wIGFuZCByZXR1cm4gaW5wdXQgaGFzIGFscmVhZHkgYmVlbiB1cGRhdGVkXG4gICAgICAgIGlmICh0aW1lc3RhbXAgPT09IHRoaXMubGFzdEZyYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxhdGVzdCA9ICh0aGlzLnBvbGwpID8gdGhpcy5wb2xsKCkgOiB0aGlzLmhpc3RvcnkuZ2V0KCk7XG4gICAgICAgIGhhc0NoYW5nZWQgPSB1dGlscy5oYXNDaGFuZ2VkKHRoaXMuY3VycmVudCwgbGF0ZXN0KTtcblxuICAgICAgICAvLyBJZiBpbnB1dCBoYXMgY2hhbmdlZCBiZXR3ZWVuIGZyYW1lcyAgXG4gICAgICAgIGlmIChoYXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gY2FsYy5vZmZzZXQodGhpcy5jdXJyZW50LCBsYXRlc3QpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gbGF0ZXN0O1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG5cbiAgICAgICAgLy8gT3IgaXQgaGFzbid0IG1vdmVkIGFuZCBvdXIgZnJhbWUgbGltaXQgaGFzIGJlZW4gcmVhY2hlZFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IGNhbGMub2Zmc2V0KHRoaXMuY3VycmVudCwgdGhpcy5jdXJyZW50KTtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIGlucHV0IGhhc24ndCBjaGFuZ2VkXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzKys7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubGFzdEZyYW1lID0gdGltZXN0YW1wO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbnB1dC9JbnB1dC5qc1xuICoqLyIsInZhciBBY3RvciA9IHJlcXVpcmUoJy4uL2FjdG9yL0FjdG9yJyksXG4gICAgVHdlZW4gPSByZXF1aXJlKCcuLi9hY3Rpb25zL1R3ZWVuJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuY29uc3QgREVGQVVMVF9TVEFHR0VSX0VBU0UgPSAnbGluZWFyJztcblxuY2xhc3MgSXRlcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lbWJlcnMpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICAgIGlmIChtZW1iZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChtZW1iZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0YWdnZXIgPSBuZXcgQWN0b3IoKTtcbiAgICB9XG5cbiAgICBhZGQobWVtYmVycykge1xuICAgICAgICB0aGlzLm1lbWJlcnMgPSB0aGlzLm1lbWJlcnMuY29uY2F0KG1lbWJlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGVhY2goY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzLmZvckVhY2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFnZ2VyKG1ldGhvZCwgcHJvcHMsIC4uLmFyZ3MpIHtcbiAgICAgICAgdmFyIG51bU1lbWJlcnMgPSB0aGlzLm1lbWJlcnMubGVuZ3RoLFxuICAgICAgICAgICAgcHJvcHNJc0ludGVydmFsID0gdXRpbHMuaXNOdW0ocHJvcHMpLFxuICAgICAgICAgICAgaW50ZXJ2YWwgPSBwcm9wc0lzSW50ZXJ2YWwgPyBwcm9wcyA6IHByb3BzLmludGVydmFsLFxuICAgICAgICAgICAgc3RhZ2dlclByb3BzID0ge30sXG4gICAgICAgICAgICBpID0gLTEsXG5cbiAgICAgICAgICAgIGNhbGxiYWNrID0gdXRpbHMuaXNTdHJpbmcobWV0aG9kKSA/XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICAgICAgICBtZW1iZXJbbWV0aG9kXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IDogbWV0aG9kO1xuXG4gICAgICAgIHN0YWdnZXJQcm9wcy52YWx1ZXMgPSB7XG4gICAgICAgICAgICBpOiB7XG4gICAgICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogaW50ZXJ2YWwgKiBudW1NZW1iZXJzLFxuICAgICAgICAgICAgICAgIGVhc2U6IHByb3BzSXNJbnRlcnZhbCA/IERFRkFVTFRfU1RBR0dFUl9FQVNFIDogcHJvcHMuZWFzZSB8fCBERUZBVUxUX1NUQUdHRVJfRUFTRSxcbiAgICAgICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0bzogbnVtRWxlbWVudHMgLSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc3RhZ2dlclByb3BzLm9uVXBkYXRlID0gKG91dHB1dCkgPT4ge1xuICAgICAgICAgICAgdmFyIG5ld0luZGV4ID0gb3V0cHV0LmksXG4gICAgICAgICAgICAgICAgZ2FwSW5kZXggPSBpICsgMTtcblxuICAgICAgICAgICAgLy8gSWYgb3VyIG5ldyBpbmRleCBpcyBvbmx5IG9uZSBtb3JlIHRoYW4gdGhlIHByZXZpb3VzIGluZGV4LCBmaXJlIGltbWVkaWV0bHlcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA9PT0gaSArIDEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLm1lbWJlcnNbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG5cbiAgICAgICAgICAgIC8vIE9yIGxvb3AgdGhyb3VnaCB0aGUgZGlzdGFuY2UgdG8gZmlyZSBhbGwgaW5kZWNpZXMuIEluY3JlYXNlIGRlbGF5LlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKDsgZ2FwSW5kZXggPD0gbmV3SW5kZXg7IGdhcEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5tZW1iZXJzW2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaSA9IG5ld0luZGV4O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3N0YWdnZXIuc3RhcnQobmV3IFR3ZWVuKHN0YWdnZXJQcm9wcykpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJdGVyYXRvcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pdGVyYXRvci9JdGVyYXRvci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpLFxuXG4gICAgLypcbiAgICAgICAgUHJvY2VzcyBjb25zdHJ1Y3RvclxuICAgICAgICBcbiAgICAgICAgU3ludGF4XG4gICAgICAgICAgICB2YXIgcHJvY2VzcyA9IG5ldyBQcm9jZXNzKHNjb3BlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB2YXIgcHJvY2VzcyA9IG5ldyBQcm9jZXNzKGNhbGxiYWNrKTtcbiAgICAqL1xuICAgIFByb2Nlc3MgPSBmdW5jdGlvbiAoc2NvcGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBoYXNTY29wZSA9IChjYWxsYmFjayAhPT0gdW5kZWZpbmVkKTtcblxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gaGFzU2NvcGUgPyBjYWxsYmFjayA6IHNjb3BlO1xuICAgICAgICB0aGlzLnNjb3BlID0gaGFzU2NvcGUgPyBzY29wZSA6IHRoaXM7XG4gICAgICAgIHRoaXMuaWQgPSBtYW5hZ2VyLnJlZ2lzdGVyKCk7XG5cbiAgICAgICAgLy8gW2Jvb2xlYW5dOiBJcyB0aGlzIHByb2Nlc3MgY3VycmVudGx5IGFjdGl2ZT9cbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG5cblByb2Nlc3MucHJvdG90eXBlID0ge1xuICAgIC8qXG4gICAgICAgIEZpcmUgY2FsbGJhY2tcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbdGltZXN0YW1wXTogVGltZXN0YW1wIG9mIGN1cnJlbnRseS1leGVjdXRlZCBmcmFtZVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuICAgICovXG4gICAgZmlyZTogZnVuY3Rpb24gKHRpbWVzdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrLmNhbGwodGhpcy5zY29wZSwgdGltZXN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHdlJ3JlIHJ1bm5pbmcgYXQgYW4gaW50ZXJ2YWwsIGRlYWN0aXZhdGUgYWdhaW5cbiAgICAgICAgaWYgKHRoaXMuaXNJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0YXJ0IHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogRHVyYXRpb24gb2YgcHJvY2VzcyBpbiBtcywgMCBpZiBpbmRlZmluaXRlXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdG9wVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0b3AoKTtcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5pc1N0b3BUaW1lckFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0b3AgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQWN0aXZhdGUgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICBtYW5hZ2VyLmFjdGl2YXRlKHRoaXMsIHRoaXMuaWQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRGVhY3RpdmF0ZSBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIG1hbmFnZXIuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRmlyZSBwcm9jZXNzIGV2ZXJ5IHggbXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIG1zIHRvIHdhaXQgYmV0d2VlbiByZWZpcmluZyBwcm9jZXNzLlxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgZXZlcnk6IGZ1bmN0aW9uIChpbnRlcnZhbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuXG4gICAgICAgIHRoaXMuaXNJbnRlcnZhbCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5hY3RpdmF0ZSgpO1xuICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlzSW50ZXJ2YWxUaW1lQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQ2xlYXIgYWxsIHRpbWVyc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFxuICAgICovXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0ludGVydmFsID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5pc1N0b3BUaW1lckFjdGl2ZSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RvcFRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuaXNJbnRlcnZhbFRpbWVBY3RpdmUpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbFRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9jZXNzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb2Nlc3MvUHJvY2Vzcy5qc1xuICoqLyIsInZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xudmFyIGVhY2ggPSB1dGlscy5lYWNoO1xuXG4vKlxuICAgIFJvbGUgY2xhc3MgY29uc3RydWN0b3JcblxuICAgIEBwYXJhbSBbb2JqZWN0XTogT3B0aW9uYWwgbWV0aG9kcyBhbmQgcHJvcHMgdG8gYWRkOlxuICAgICAgICBuYW1lIFtzdHJpbmddOiAgICAgIE5hbWUgb2YgZ2VuZXJhdGVkIGdldHRlci9zZXR0ZXIgbWV0aG9kIG9uIEFjdG9yXG4gICAgICAgIF9tYXAgW29iamVjdF06ICAgICAgTWFwIEFjdG9yIHZhbHVlcyB0byB0aGVzZSB2YWx1ZXMgZm9yIHRoaXMgUm9sZVxuICAgICAgICBfdHlwZU1hcCBbb2JqZWN0XTogIE1hcCB2YWx1ZXMgdG8gdmFsdWUgdHlwZXNcbiAgICAgICAgaW5pdCBbZnVuY3Rpb25dOiAgICBDYWxsYmFjayB0byBydW4gd2hlbiB0aGlzIFJvbGUgaXMgYWRkZWQgdG8gYW4gQWN0b3JcbiAgICAgICAgc3RhcnQgW2Z1bmN0aW9uXTogICBDYWxsYmFjayB0byBydW4gd2hlbiBob3N0IEFjdG9yIHN0YXJ0cyBhbiBhY3Rpb25cbiAgICAgICAgY29tcGxldGUgW2Z1bmN0aW9uXTogQ2FsbGJhY2sgdG8gcnVuIHdoZW4gYWN0aW9uIGNvbXBsZXRlc1xuICAgICAgICBmcmFtZSBbZnVuY3Rpb25dOiAgIENhbGxiYWNrIHRvIGZpcmUgb25jZSBwZXIgZnJhbWVcbiAgICAgICAgdXBkYXRlIFtmdW5jdGlvbl06ICBDYWxsYmFjayB0byBmaXJlIHdoZW4gdmFsdWVzIGNoYW5nZVxuICAgICAgICBnZXQgW2Z1bmN0aW9uXTogICAgIFJlYWQgdmFsdWUgZnJvbSBhY3R1YWwgZWxlbWVudFxuICAgICAgICBzZXQgW2Z1bmN0aW9uXTogICAgIFNldCB2YWx1ZSBvbiBhY3R1YWwgZWxlbWVudFxuKi9cbnZhciBSb2xlID0gZnVuY3Rpb24gKG1ldGhvZHMpIHtcbiAgICB2YXIgcm9sZSA9IHRoaXM7XG5cbiAgICByb2xlLl9tYXAgPSB7fTtcblxuICAgIGVhY2gobWV0aG9kcywgZnVuY3Rpb24gKG5hbWUsIG1ldGhvZCkge1xuICAgICAgICByb2xlW25hbWVdID0gKCF1dGlscy5pc09iaihtZXRob2QpKSA/IG1ldGhvZCA6IHV0aWxzLmNvcHkobWV0aG9kKTtcbiAgICB9KTtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIGEgbmV3IHJvbGVcblxuICAgIEBwYXJhbSBbb2JqZWN0XTogT3B0aW9uYWwgbWV0aG9kcyBhbmQgcHJvcHMgdG8gYWRkXG4gICAgQHBhcmFtIFt2YWx1ZXNUb01hcF06IE92ZXJyaWRlIGV4aXN0aW5nIG1hcCB3aXRoIHRoZXNlIHZhbHVlc1xuICAgIEByZXR1cm4gW1JvbGVdOiBOZXcgUm9sZVxuKi9cbnZhciBjcmVhdGVSb2xlID0gZnVuY3Rpb24gKG1ldGhvZHMsIHZhbHVlcykge1xuICAgIHZhciBuZXdSb2xlID0gbmV3IFJvbGUobWV0aG9kcyk7XG5cbiAgICBlYWNoKHZhbHVlcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgbmV3Um9sZS5fbWFwW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdSb2xlO1xufTtcblxuUm9sZS5wcm90b3R5cGUgPSB7XG5cbiAgICAvKlxuICAgICAgICBNYXAgdmFsdWUga2V5cyBvciBnZW5lcmF0ZSBuZXcgUm9sZSB3aXRoIHVwZGF0ZWQgbWFwXG5cbiAgICAgICAgR2V0dGVyOlxuICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgdG8gbWFwXG4gICAgICAgICAgICBAcmV0dXJuIFtzdHJpbmddOiBNYXBwZWQga2V5LCBvciBrZXkgaWYgbm8gbWFwcGVkIGtleSBmb3VuZFxuXG4gICAgICAgIFNldHRlcjogXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IE1hcCBvZiBBY3RvciBrZXlzIC0+IFJvbGUga2V5c1xuICAgICAgICAgICAgQHJldHVybiBbUm9sZV06IE5ldyBSb2xlIHdpdGggdW5pcXVlIG1hcFxuICAgICovXG4gICAgbWFwOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBzdHJpbmcsIGdldCBtYXBwZWQgdmFsdWVcbiAgICAgICAgLy8gT3RoZXJ3aXNlIHRoaXMgaXMgYSBtYXAsIGR1cGxpY2F0ZWQgcm9sZSB3aXRoIHVwZGF0ZWQgbWFwXG4gICAgICAgIHJldHVybiAodXRpbHMuaXNTdHJpbmcodmFsdWVzKSkgPyB0aGlzLl9tYXBbdmFsdWVzXSB8fCB2YWx1ZXMgOiBjcmVhdGVSb2xlKHRoaXMsIHZhbHVlcyk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSb2xlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL1JvbGUuanNcbiAqKi8iLCJ2YXIgQmV6aWVyID0gcmVxdWlyZSgnLi9CZXppZXInKSxcblxuICAgIC8qXG4gICAgICAgIE1pcnJvciBlYXNpbmdcbiAgICAgICAgXG4gICAgICAgIE1pcnJvcnMgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBoZXJlIGZvciBtaXJyb3JpbmcgYW5cbiAgICAgICAgZWFzZUluIGludG8gYW4gZWFzZUluT3V0XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1pcnJvclxuICAgICAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuICAgICovXG4gICAgbWlycm9yRWFzaW5nID0gZnVuY3Rpb24gKHByb2dyZXNzLCBtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIChwcm9ncmVzcyA8PSAwLjUpID8gbWV0aG9kKDIgKiBwcm9ncmVzcykgLyAyIDogKDIgLSBtZXRob2QoMiAqICgxIC0gcHJvZ3Jlc3MpKSkgLyAyO1xuICAgIH0sXG4gICAgICAgICAgICBcbiAgICAvKlxuICAgICAgICBSZXZlcnNlIGVhc2luZ1xuICAgICAgICBcbiAgICAgICAgUmV2ZXJzZXMgdGhlIG91dHB1dCBvZiB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGZvciBmbGlwcGluZyBlYXNlSW5cbiAgICAgICAgY3VydmUgdG8gYW4gZWFzZU91dC5cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gcmV2ZXJzZVxuICAgICAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuICAgICovXG4gICAgcmV2ZXJzZUVhc2luZyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgbWV0aG9kKSB7XG4gICAgICAgIHJldHVybiAxIC0gbWV0aG9kKDEgLSBwcm9ncmVzcyk7XG4gICAgfTtcblxuLypcbiAgICBFYXNpbmcgY2xhc3NcblxuICAgIElmIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgcmV0dXJucyBlYXNpbmcgZnVuY3Rpb24gd2l0aCBcbiAgICBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuXG4gICAgSWYgcHJvdmlkZWQgZm91ciBhcmd1bWVudHMsIHJldHVybnMgbmV3IEJlemllciBjbGFzcyBpbnN0ZWFkLlxuKi9cbnZhciBFYXNpbmcgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICB2YXIgbWV0aG9kID0geDEsXG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uO1xuXG4gICAgLy8gSWYgdGhpcyBpcyBhIGJlemllciBjdXJ2ZSwgcmV0dXJuIGEgYmV6aWVyIGZ1bmN0aW9uXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gbmV3IEJlemllcih4MSwgeTEsIHgyLCB5Mik7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBlYXNpbmdGdW5jdGlvbiA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZWFzaW5nRnVuY3Rpb24uaW4gPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uLm91dCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIHJldmVyc2VFYXNpbmcocHJvZ3Jlc3MsIG1ldGhvZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZWFzaW5nRnVuY3Rpb24uaW5PdXQgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBtaXJyb3JFYXNpbmcocHJvZ3Jlc3MsIG1ldGhvZCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGVhc2luZ0Z1bmN0aW9uO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFYXNpbmc7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi9FYXNpbmcuanNcbiAqKi8iLCJsZXQgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaCxcbiAgICBDb250cm9scyA9IHJlcXVpcmUoJy4uL2NvbnRyb2xzL0NvbnRyb2xzJyk7XG5cbmNvbnN0IERFRkFVTFRfUFJPUCA9ICdjdXJyZW50JztcblxuY2xhc3MgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcztcblxuICAgICAgICB1dGlscy5lYWNoKHRoaXMuZ2V0RGVmYXVsdFByb3BzKCksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBhY3Rpb25ba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnNldChwcm9wcywgdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCkpO1xuICAgIH1cblxuICAgIHNldChwcm9wcyA9IHt9LCBkZWZhdWx0UHJvcCA9IERFRkFVTFRfUFJPUCkge1xuICAgICAgICBlYWNoKHByb3BzLCAoa2V5LCBwcm9wKSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAndmFsdWVzJykge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1lcmdlIHZhbHVlc1xuICAgICAgICBpZiAocHJvcHMudmFsdWVzKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFZhbHVlcyA9IHRoaXMudmFsdWVzLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHByb3BzLnZhbHVlcztcblxuICAgICAgICAgICAgZWFjaCh2YWx1ZXMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGV4aXN0aW5nVmFsdWUgPSBjdXJyZW50VmFsdWVzW2tleV0sXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0ge307XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IGV4aXN0aW5nVmFsdWUgPyB1dGlscy5tZXJnZShleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSkgOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJvY2VzcyhhY3RvciwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAvKlxuICAgICAgICBIYXMgQWN0aW9uIGVuZGVkP1xuICAgICAgICBcbiAgICAgICAgUmV0dXJucyB0cnVlIHRvIGVuZCBpbW1lZGlldGx5XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogdHJ1ZVxuICAgICovXG4gICAgaGFzRW5kZWQoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAgICAgXG4gICAgbGltaXQob3V0cHV0LCB2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdHJpY3RlZCA9IGNhbGMucmVzdHJpY3RlZChvdXRwdXQsIHZhbHVlLm1pbiwgdmFsdWUubWF4KSxcbiAgICAgICAgICAgIGVzY2FwZUFtcCA9IHZhbHVlLmVzY2FwZUFtcCAhPT0gdW5kZWZpbmVkID8gdmFsdWUuZXNjYXBlQW1wIDogMDtcbiAgICAgICAgcmV0dXJuIHJlc3RyaWN0ZWQgKyAoKG91dHB1dCAtIHJlc3RyaWN0ZWQpICogZXNjYXBlQW1wKTtcbiAgICB9XG5cbiAgICBnZXRDb250cm9scygpIHtcbiAgICAgICAgcmV0dXJuIENvbnRyb2xzO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnYWN0aW9uJztcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgICAgICB2ZWxvY2l0eTogMCxcbiAgICAgICAgICAgIGZyYW1lQ2hhbmdlOiAwLFxuICAgICAgICAgICAgYW1wOiAxLFxuICAgICAgICAgICAgZXNjYXBlQW1wOiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUFJPUDtcbiAgICB9XG5cbiAgICBleHRlbmQocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHV0aWxzLm1lcmdlKHRoaXMsIHByb3BzKSwgdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCkpO1xuICAgIH1cblxuICAgIGdldFBsYXlhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leHRlbmQoKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFjdGlvbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL0FjdGlvbi5qc1xuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgZWFjaCA9IHV0aWxzLmVhY2gsXG4gICAgcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi90d2Vlbi9wcmVzZXQtZWFzaW5nJyksXG4gICAgVHdlZW5Db250cm9scyA9IHJlcXVpcmUoJy4vdHdlZW4vVHdlZW5Db250cm9scycpLFxuXG4gICAgbmV4dFN0ZXBzID0ge1xuICAgICAgICBsb29wOiAncmVzZXRWYWx1ZXMnLFxuICAgICAgICB5b3lvOiAncmV2ZXJzZVZhbHVlcycsXG4gICAgICAgIGZsaXA6ICdmbGlwVmFsdWVzJ1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBFYXNlIHZhbHVlIHdpdGhpbiByYW5nZWQgcGFyYW1ldGVyc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAwIHByb2dyZXNzXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgICAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgICAgICAgICAgdG8gdXNlIG9yIGdlbmVyYXRlZCBlYXNpbmcgZnVuY3Rpb25cbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiAgICAqLyAgXG4gICAgZWFzZSA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpIHtcbiAgICAgICAgdmFyIHByb2dyZXNzTGltaXRlZCA9IGNhbGMucmVzdHJpY3RlZChwcm9ncmVzcywgMCwgMSksXG4gICAgICAgICAgICBlYXNpbmdGdW5jdGlvbiA9IHV0aWxzLmlzU3RyaW5nKGVhc2UpID8gcHJlc2V0RWFzaW5nW2Vhc2VdIDogZWFzZTtcblxuICAgICAgICByZXR1cm4gY2FsYy52YWx1ZUVhc2VkKHByb2dyZXNzTGltaXRlZCwgZnJvbSwgdG8sIGVhc2luZ0Z1bmN0aW9uKTtcbiAgICB9O1xuXG5jb25zdCBDT1VOVCA9ICdjb3VudCc7XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBnZXRDb250cm9scygpIHtcbiAgICAgICAgcmV0dXJuIFR3ZWVuQ29udHJvbHM7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICd0d2Vlbic7XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaWxhdGU6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICB5b3lvOiBmYWxzZSxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgcGxheURpcmVjdGlvbjogMSxcbiAgICAgICAgICAgIGVuZGVkOiB0cnVlLFxuICAgICAgICAgICAgZWxhcHNlZDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGVhc2U6ICdlYXNlT3V0JyxcbiAgICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgICBzdGVwczogMCxcbiAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd0byc7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIEFjdGlvbiBlbGFwc2VkIHRpbWVcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaW1lc3RhbXAgb2YgY3VycmVudCBmcmFtZVxuICAgICovXG4gICAgb25GcmFtZVN0YXJ0KGFjdG9yLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZWxhcHNlZCB8fCAwO1xuXG4gICAgICAgIGlmIChmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmVsYXBzZWQgKz0gKGZyYW1lRHVyYXRpb24gKiB0aGlzLmRpbGF0ZSkgKiB0aGlzLnBsYXlEaXJlY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBDYWxjdWxhdGUgcHJvZ3Jlc3Mgb2YgdmFsdWUgYmFzZWQgb24gdGltZSBlbGFwc2VkLFxuICAgICAgICB2YWx1ZSBkZWxheS9kdXJhdGlvbi9zdGFnZ2VyIHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW0FjdG9yXVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIHN0YXRlIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IENhbGN1bGF0ZWQgdmFsdWVcbiAgICAqL1xuICAgIHByb2Nlc3MoYWN0b3IsIHZhbHVlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB2YWx1ZS50byxcbiAgICAgICAgICAgIHByb2dyZXNzVGFyZ2V0ID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAxIDogMCxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWUuY3VycmVudCxcbiAgICAgICAgICAgIHByb2dyZXNzO1xuXG4gICAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGEgdG8gcHJvcGVydHksIG90aGVyd2lzZSB3ZSBqdXN0IHJldHVybiBjdXJyZW50IHZhbHVlXG4gICAgICAgIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvZ3Jlc3MgPSBjYWxjLnJlc3RyaWN0ZWQoY2FsYy5wcm9ncmVzcyh0aGlzLmVsYXBzZWQgLSB2YWx1ZS5kZWxheSwgdmFsdWUuZHVyYXRpb24pIC0gdmFsdWUuc3RhZ2dlciwgMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgQWN0aW9uIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSB1dGlscy5zdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSB2YWx1ZVxuICAgICAgICAgICAgbmV3VmFsdWUgPSBlYXNlKHByb2dyZXNzLCB2YWx1ZS5vcmlnaW4sIHRhcmdldCwgdmFsdWUuZWFzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgSWYgdGhpcyB0d2VlbiBoYXMgZW5kZWQsIGNoZWNrIGlmIHdlIGxvb3AveW95by9mbGlwXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSGFzIHRoaXMgdHdlZW4gcmVhbGx5IHJlYWxseSBlbmRlZD9cbiAgICAqL1xuICAgIGhhc0VuZGVkKGFjdG9yKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICAgICAgICBlYWNoKG5leHRTdGVwcywgKG5hbWUsIG1ldGhvZE5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja05leHRTdGVwKGFjdG9yLCBuYW1lLCB0aGlzW21ldGhvZE5hbWVdKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGFjdG9yLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lbmRlZDtcbiAgICB9XG5cbiAgICBjaGVja05leHRTdGVwKGFjdG9yLCBuYW1lLCBtZXRob2QpIHtcbiAgICAgICAgdmFyIHN0ZXBUYWtlbiA9IGZhbHNlLFxuICAgICAgICAgICAgc3RlcCA9IHRoaXNbbmFtZV0sXG4gICAgICAgICAgICBjb3VudCA9IHRoaXNbbmFtZSArIENPVU5UXSB8fCAwLFxuICAgICAgICAgICAgZm9yZXZlciA9IChzdGVwID09PSB0cnVlKTtcblxuICAgICAgICBpZiAoZm9yZXZlciB8fCB1dGlscy5pc051bShzdGVwKSkge1xuICAgICAgICAgICAgKytjb3VudDtcbiAgICAgICAgICAgIHRoaXNbbmFtZSArIENPVU5UXSA9IGNvdW50O1xuXG4gICAgICAgICAgICBpZiAoZm9yZXZlciB8fCBjb3VudCA8PSBzdGVwKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kLmNhbGwodGhpcywgYWN0b3IpO1xuICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RlcFRha2VuO1xuICAgIH1cblxuICAgIGZsaXBWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG4gICAgfVxuXG4gICAgcmV2ZXJzZVZhbHVlcygpIHtcbiAgICAgICAgdGhpcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgIH1cblxuICAgIHJlc2V0VmFsdWVzKCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAodGhpcy5wbGF5RGlyZWN0aW9uID09PSAxKSA/IDAgOiB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUd2VlbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL1R3ZWVuLmpzXG4gKiovIiwibGV0IEFjdGlvbiA9IHJlcXVpcmUoJy4vQWN0aW9uJyksXG4gICAgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBzaW11bGF0aW9ucyA9IHJlcXVpcmUoJy4vc2ltdWxhdGUvc2ltdWxhdGlvbnMnKTtcblxuY29uc3QgREVGQVVMVF9QUk9QID0gJ3ZlbG9jaXR5JztcblxuY2xhc3MgU2ltdWxhdGUgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ3NpbXVsYXRlJztcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtYXhJbmFjdGl2ZUZyYW1lczogM1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFtzdHJpbmddOiBTaW11bGF0aW9uIHRvIC5ydW5cbiAgICAgICAgICAgIHNpbXVsYXRlOiBERUZBVUxUX1BST1AsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBEZWNlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICAgICAgICAgIGRlY2VsZXJhdGlvbjogMCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IEFjY2VsZXJhdGlvbiB0byBhcHBseSB0byB2YWx1ZSwgaW4gdW5pdHMgcGVyIHNlY29uZFxuICAgICAgICAgICAgYWNjZWxlcmF0aW9uOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogRmFjdG9yIHRvIG11bHRpcGx5IHZlbG9jaXR5IGJ5IG9uIGJvdW5jZVxuICAgICAgICAgICAgYm91bmNlOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogU3ByaW5nIHN0cmVuZ3RoIGR1cmluZyAnc3RyaW5nJ1xuICAgICAgICAgICAgc3ByaW5nOiA4MCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IFRpbWVjb25zdGFudCBvZiBnbGlkZVxuICAgICAgICAgICAgdGltZUNvbnN0YW50OiAzOTUsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBTdG9wIHNpbXVsYXRpb24gdW5kZXIgdGhpcyBzcGVlZFxuICAgICAgICAgICAgc3RvcFNwZWVkOiA1LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbYm9vbGVhbl06IENhcHR1cmUgd2l0aCBzcHJpbmcgcGh5c2ljcyBvbiBsaW1pdCBicmVhY2hcbiAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lXG4gICAgICAgICAgICBmcmljdGlvbjogMCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG86IDAsXG4gICAgICAgICAgICByb3VuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gREVGQVVMVF9QUk9QO1xuICAgIH1cbiAgICBcbiAgICAvKlxuICAgICAgICBTaW11bGF0ZSB0aGUgVmFsdWUncyBwZXItZnJhbWUgbW92ZW1lbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbQWN0b3JdXG4gICAgICAgIEBwYXJhbSBbVmFsdWVdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IG9mIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBEdXJhdGlvbiBvZiBmcmFtZSBpbiBtc1xuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzKGFjdG9yLCB2YWx1ZSwga2V5LCB0aW1lU2luY2VMYXN0RnJhbWUpIHtcbiAgICAgICAgdmFyIHNpbXVsYXRlID0gdmFsdWUuc2ltdWxhdGUsXG4gICAgICAgICAgICBzaW11bGF0aW9uID0gdXRpbHMuaXNTdHJpbmcoc2ltdWxhdGUpID8gc2ltdWxhdGlvbnNbc2ltdWxhdGVdIDogc2ltdWxhdGUsXG4gICAgICAgICAgICBuZXdWZWxvY2l0eSA9IHNpbXVsYXRpb24gPyBzaW11bGF0aW9uKHZhbHVlLCB0aW1lU2luY2VMYXN0RnJhbWUsIGFjdG9yLnN0YXJ0ZWQpIDogMDtcblxuICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IChNYXRoLmFicyhuZXdWZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkKSA/IG5ld1ZlbG9jaXR5IDogMDtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmN1cnJlbnQgKyBjYWxjLnNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIHRpbWVTaW5jZUxhc3RGcmFtZSk7XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgICAgIEhhcyB0aGlzIGFjdGlvbiBlbmRlZD9cbiAgICAgICAgXG4gICAgICAgIFVzZSBhIGZyYW1lY291bnRlciB0byBzZWUgaWYgQWN0aW9uIGhhcyBjaGFuZ2VkIGluIHRoZSBsYXN0IHggZnJhbWVzXG4gICAgICAgIGFuZCBkZWNsYXJlIGVuZGVkIGlmIG5vdFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogSGFzIEFjdGlvbiBjaGFuZ2VkP1xuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSGFzIEFjdGlvbiBlbmRlZD9cbiAgICAqL1xuICAgIGhhc0VuZGVkKGFjdG9yLCBoYXNDaGFuZ2VkKSB7XG4gICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSBoYXNDaGFuZ2VkID8gMCA6IHRoaXMuaW5hY3RpdmVGcmFtZXMgKyAxO1xuICAgICAgICByZXR1cm4gKHRoaXMuaW5hY3RpdmVGcmFtZXMgPiBhY3Rvci5tYXhJbmFjdGl2ZUZyYW1lcyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTGltaXQgb3V0cHV0IHRvIHZhbHVlIHJhbmdlLCBpZiBhbnlcbiAgICAgICAgXG4gICAgICAgIElmIHZlbG9jaXR5IGlzIGF0IG9yIG1vcmUgdGhhbiByYW5nZSwgYW5kIHZhbHVlIGhhcyBhIGJvdW5jZSBwcm9wZXJ0eSxcbiAgICAgICAgcnVuIHRoZSBib3VuY2Ugc2ltdWxhdGlvblxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDYWxjdWxhdGVkIG91dHB1dFxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCBWYWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBMaW1pdC1hZGp1c3RlZCBvdXRwdXRcbiAgICAqL1xuICAgIGxpbWl0KG91dHB1dCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGlzT3V0c2lkZU1heCA9IChvdXRwdXQgPj0gdmFsdWUubWF4KSxcbiAgICAgICAgICAgIGlzT3V0c2lkZU1pbiA9IChvdXRwdXQgPD0gdmFsdWUubWluKSxcbiAgICAgICAgICAgIGlzT3V0c2lkZVJhbmdlID0gaXNPdXRzaWRlTWF4IHx8IGlzT3V0c2lkZU1pbjtcbiAgICAgICAgXG4gICAgICAgIGlmIChpc091dHNpZGVSYW5nZSkge1xuICAgICAgICAgICAgb3V0cHV0ID0gY2FsYy5yZXN0cmljdGVkKG91dHB1dCwgdmFsdWUubWluLCB2YWx1ZS5tYXgpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUuYm91bmNlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSBzaW11bGF0aW9ucy5ib3VuY2UodmFsdWUpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmNhcHR1cmUpIHtcbiAgICAgICAgICAgICAgICBzaW11bGF0aW9ucy5jYXB0dXJlKHZhbHVlLCBpc091dHNpZGVNYXggPyB2YWx1ZS5tYXggOiB2YWx1ZS5taW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaW11bGF0ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL1NpbXVsYXRlLmpzXG4gKiovIiwibGV0IEFjdGlvbiA9IHJlcXVpcmUoJy4vQWN0aW9uJyksXG4gICAgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmNsYXNzIFRyYWNrIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ3RyYWNrJztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBVcGRhdGUgaW5wdXQgb2Zmc2V0XG4gICAgKi9cbiAgICBvbkZyYW1lU3RhcnQoYWN0b3IpIHtcbiAgICAgICAgYWN0b3IuaW5wdXRPZmZzZXQgPSBjYWxjLm9mZnNldChhY3Rvci5pbnB1dE9yaWdpbiwgYWN0b3IuaW5wdXQuY3VycmVudCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTW92ZSBWYWx1ZSByZWxhdGl2ZSB0byBJbnB1dCBtb3ZlbWVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgY3VycmVudCB2YWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzKGFjdG9yLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgIHJldHVybiAoYWN0b3IuaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkgPyB2YWx1ZS5vcmlnaW4gKyBhY3Rvci5pbnB1dE9mZnNldFtrZXldIDogdmFsdWUuY3VycmVudDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBIYXMgdGhpcyBBY3Rpb24gZW5kZWQ/IFxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IEZhbHNlIHRvIG1ha2UgdXNlciBtYW51YWxseSBmaW5pc2ggLnRyYWNrKClcbiAgICAqL1xuICAgIGhhc0VuZGVkKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYWNrO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvVHJhY2suanNcbiAqKi8iLCIvKlxuICAgIENhbGN1bGF0b3JzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIFNpbXBsZSBJL08gc25pcHBldHNcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscy5qcycpLFxuXG4gICAgY2FsYyA9IHtcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGFyZSBhdCAwLDAsIHRoZW4gcmV0dXJuIHRoZSBhbmdsZSB1c2luZyAuYW5nbGVGcm9tQ2VudGVyKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gICAgICAgICAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiAgICAgICAgKi9cbiAgICAgICAgYW5nbGU6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAgICAgdmFyIGZyb20gPSBwb2ludEIgPyBwb2ludEEgOiB7eDogMCwgeTogMH0sXG4gICAgICAgICAgICAgICAgdG8gPSBwb2ludEIgfHwgcG9pbnRBLFxuICAgICAgICAgICAgICAgIHBvaW50ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiB0by54IC0gZnJvbS54LFxuICAgICAgICAgICAgICAgICAgICB5OiB0by55IC0gZnJvbS55XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYW5nbGVGcm9tQ2VudGVyKHBvaW50LngsIHBvaW50LnkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBBbmdsZSBmcm9tIGNlbnRlclxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBjdXJyZW50IGFuZ2xlLCBpbiByYWRpYW5zLCBvZiBhIGRlZmluZWQgcG9pbnRcbiAgICAgICAgICAgIGZyb20gYSBjZW50ZXIgKGFzc3VtZWQgMCwwKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFggY29vcmRpbmF0ZSBvZiBzZWNvbmQgcG9pbnRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogWSBjb29yZGluYXRlIG9mIHNlY29uZCBwb2ludFxuICAgICAgICAgICAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiAwLCAwIGFuZCBwb2ludCBpbiByYWRpYW5zXG4gICAgICAgICovXG4gICAgICAgIGFuZ2xlRnJvbUNlbnRlcjogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMih5LCB4KSk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgICAgICovXG4gICAgICAgIGRlZ3JlZXNUb1JhZGlhbnM6IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIERpbGF0ZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBhIC0tLS0tLS0tLSBiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGEgLS0tLSBiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4gICAgICAgICovXG4gICAgICAgIGRpbGF0ZTogZnVuY3Rpb24gKGEsIGIsIGRpbGF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gYSArICgoYiAtIGEpICogZGlsYXRpb24pO1xuICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEaXN0YW5jZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuICgwLDApIGFuZCBwb2ludEEsIHVubGVzcyBwb2ludEJcbiAgICAgICAgICAgIGlzIHByb3ZpZGVkLCB0aGVuIHdlIHJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gICAgICAgICovXG4gICAgICAgIGRpc3RhbmNlOiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgICAgIHJldHVybiAodHlwZW9mIHBvaW50QSA9PT0gXCJudW1iZXJcIikgPyB0aGlzLmRpc3RhbmNlMUQocG9pbnRBLCBwb2ludEIpIDogdGhpcy5kaXN0YW5jZTJEKHBvaW50QSwgcG9pbnRCKTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIERpc3RhbmNlIDFEXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gcG9pbnQgQSBhbmQgcG9pbnQgQlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFBvaW50IEFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogKG9wdGlvbmFsKTogUG9pbnQgQlxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgZGlzdGFuY2UxRDogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgICAgICB2YXIgYklzTnVtID0gKHR5cGVvZiBwb2ludEIgPT09ICdudW1iZXInKSxcbiAgICAgICAgICAgICAgICBmcm9tID0gYklzTnVtID8gcG9pbnRBIDogMCxcbiAgICAgICAgICAgICAgICB0byA9IGJJc051bSA/IHBvaW50QiA6IHBvaW50QTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBhYnNvbHV0ZSh0byAtIGZyb20pO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEaXN0YW5jZSAyRFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuICgwLDApIGFuZCBwb2ludCBBLCB1bmxlc3MgcG9pbnQgQlxuICAgICAgICAgICAgaXMgcHJvdmlkZWQsIHRoZW4gd2UgcmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHR3by5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiB4IGFuZCB5IG9mIHBvaW50IEFcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogKG9wdGlvbmFsKTogeCBhbmQgeSBvZiBwb2ludCBCXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICAgICAqL1xuICAgICAgICBkaXN0YW5jZTJEOiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgICAgIHZhciBiSXNPYmogPSAodHlwZW9mIHBvaW50QiA9PT0gXCJvYmplY3RcIiksXG4gICAgICAgICAgICAgICAgZnJvbSA9IGJJc09iaiA/IHBvaW50QSA6IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgICAgICB0byA9IGJJc09iaiA/IHBvaW50QiA6IHBvaW50QSxcbiAgICAgICAgICAgICAgICBwb2ludCA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogYWJzb2x1dGUodG8ueCAtIGZyb20ueCksXG4gICAgICAgICAgICAgICAgICAgIHk6IGFic29sdXRlKHRvLnkgLSBmcm9tLnkpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh5cG90ZW51c2UocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEh5cG90ZW51c2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgaHlwb3RlbnVzZSwgc2lkZSBDLCBnaXZlbiB0aGUgbGVuZ3RocyBvZiBzaWRlcyBBIGFuZCBCLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBCXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBMZW5ndGggb2YgQ1xuICAgICAgICAqL1xuICAgICAgICBoeXBvdGVudXNlOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgdmFyIGEyID0gYSAqIGEsXG4gICAgICAgICAgICAgICAgYjIgPSBiICogYixcbiAgICAgICAgICAgICAgICBjMiA9IGEyICsgYjI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGMyKTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBPZmZzZXQgYmV0d2VlbiB0d28gaW5wdXRzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIENhbGN1bGF0ZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBkaWZmZXJlbnQgaW5wdXRzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBpbnB1dFxuICAgICAgICAgICAgQHBhcmFtIFtQb2ludF06IFNlY29uZCBpbnB1dFxuICAgICAgICAgICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgb2Zmc2V0OiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHt9O1xuICAgIFxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFtrZXldID0gYltrZXldIC0gYVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0W2tleV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzTnVtKG9mZnNldC54KSAmJiBpc051bShvZmZzZXQueSkpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQuYW5nbGUgPSB0aGlzLmFuZ2xlKGEsIGIpO1xuICAgICAgICAgICAgICAgIG9mZnNldC5kaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2UyRChhLCBiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgICAgICAgICAgIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiAgICAgICAgKi9cbiAgICAgICAgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZTogZnVuY3Rpb24gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gICAgICAgICAgICB2YXIgcG9pbnQgPSB7fTtcbiAgICBcbiAgICBcdFx0cG9pbnQueCA9IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLng7XG4gICAgICAgICAgICBwb2ludC55ID0gZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBwb2ludDtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAgICAgICAgICAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gICAgICAgICAgICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgaWYgZnVsbCByYW5nZSBnaXZlbiwgdXBwZXIgaWYgbm90XG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4gICAgICAgICovXG4gICAgICAgIHByb2dyZXNzOiBmdW5jdGlvbiAodmFsdWUsIGxpbWl0QSwgbGltaXRCKSB7XG4gICAgICAgICAgICB2YXIgYklzTnVtID0gKHR5cGVvZiBsaW1pdEIgPT09ICdudW1iZXInKSxcbiAgICAgICAgICAgICAgICBmcm9tID0gYklzTnVtID8gbGltaXRBIDogMCxcbiAgICAgICAgICAgICAgICB0byA9IGJJc051bSA/IGxpbWl0QiA6IGxpbWl0QSxcbiAgICAgICAgICAgICAgICByYW5nZSA9IHRvIC0gZnJvbSxcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9ICh2YWx1ZSAtIGZyb20pIC8gcmFuZ2U7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gICAgICAgICovXG4gICAgICAgIHJhZGlhbnNUb0RlZ3JlZXM6IGZ1bmN0aW9uIChyYWRpYW5zKSB7XG4gICAgICAgICAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtaW5pbXVtXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFJhbmRvbSBudW1iZXIgd2l0aGluIHJhbmdlLCBvciAwIGFuZCAxIGlmIG5vbmUgcHJvdmlkZWRcbiAgICAgICAgKi9cbiAgICAgICAgcmFuZG9tOiBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICAgICAgICAgIG1pbiA9IGlzTnVtKG1pbikgPyBtaW4gOiAwO1xuICAgICAgICAgICAgbWF4ID0gaXNOdW0obWF4KSA/IG1heCA6IDE7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gICAgICAgICAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICAgICAgKi9cbiAgICAgICAgcmVsYXRpdmVWYWx1ZTogZnVuY3Rpb24gKGN1cnJlbnQsIHJlbCkge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gY3VycmVudCxcbiAgICAgICAgICAgICAgICBlcXVhdGlvbiA9IHJlbC5zcGxpdCgnPScpLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yID0gZXF1YXRpb25bMF0sXG4gICAgICAgICAgICAgICAgc3BsaXRWYWwgPSB1dGlscy5zcGxpdFZhbFVuaXQoZXF1YXRpb25bMV0pO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlICs9IHNwbGl0VmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgLT0gc3BsaXRWYWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSAqPSBzcGxpdFZhbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlIC89IHNwbGl0VmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHNwbGl0VmFsLnVuaXQpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSArPSBzcGxpdFZhbC51bml0O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgICAgICB9LFxuICAgIFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICAgICAqL1xuICAgICAgICByZXN0cmljdGVkOiBmdW5jdGlvbiAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgICAgICAgICB2YXIgcmVzdHJpY3RlZCA9IChtaW4gIT09IHVuZGVmaW5lZCkgPyBNYXRoLm1heCh2YWx1ZSwgbWluKSA6IHZhbHVlO1xuICAgICAgICAgICAgcmVzdHJpY3RlZCA9IChtYXggIT09IHVuZGVmaW5lZCkgPyBNYXRoLm1pbihyZXN0cmljdGVkLCBtYXgpIDogcmVzdHJpY3RlZDtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiByZXN0cmljdGVkO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuICAgICAgICAqL1xuICAgICAgICBzcGVlZFBlckZyYW1lOiBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4gICAgICAgICovXG4gICAgICAgIHNwZWVkUGVyU2Vjb25kOiBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG4gICAgICAgIH0sXG4gICAgXG4gICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICAgICAgICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2UsIG9yIHVwcGVyIGlmIGxpbWl0MiBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHByb2dyZXNzLCBsaW1pdEEsIGxpbWl0Qikge1xuICAgICAgICAgICAgdmFyIGJJc051bSA9ICh0eXBlb2YgbGltaXRCID09PSAnbnVtYmVyJyksXG4gICAgICAgICAgICAgICAgZnJvbSA9IGJJc051bSA/IGxpbWl0QSA6IDAsXG4gICAgICAgICAgICAgICAgdG8gPSBiSXNOdW0gPyBsaW1pdEIgOiBsaW1pdEE7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gKC0gcHJvZ3Jlc3MgKiBmcm9tKSArIChwcm9ncmVzcyAqIHRvKSArIGZyb207IFxuICAgICAgICB9LFxuICAgIFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRWFzZWQgdmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICAgICAgICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2UsIG9yIHVwcGVyIGlmIGxpbWl0MiBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBFYXNpbmcgdG8gYXBwbHkgdG8gdmFsdWVcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiAgICAgICAgKi9cbiAgICAgICAgdmFsdWVFYXNlZDogZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzaW5nKSB7XG4gICAgICAgICAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IGVhc2luZyhwcm9ncmVzcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBDYWNoaW5nIGZ1bmN0aW9ucyB1c2VkIG11bHRpcGxlIHRpbWVzIHRvIHJlZHVjZSBmaWxlc2l6ZSBhbmQgaW5jcmVhc2UgcGVyZm9ybWFuY2VcbiAgICAqL1xuICAgIGlzTnVtID0gdXRpbHMuaXNOdW0sXG4gICAgYWJzb2x1dGUgPSBNYXRoLmFicztcbiAgICBcbm1vZHVsZS5leHBvcnRzID0gY2FsYztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmMvY2FsYy5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApIHtcbiAgICB2YXIgY29tYmluZWQgPSAnJyxcbiAgICAgICAga2V5ID0gJycsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcblxuICAgIGZvciAoOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgICBrZXkgPSB0ZXJtc1tpXTtcblxuICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbWJpbmVkICs9IHZhbHVlc1trZXldICsgZGVsaW1pdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZC5qc1xuICoqLyIsInZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9zcGxpdC1jb21tYS1kZWxpbWl0ZWQnKSxcbiAgICBmdW5jdGlvbkJyZWFrID0gcmVxdWlyZSgnLi9mdW5jdGlvbi1icmVhaycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgdGVybXMpIHtcbiAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9LFxuICAgICAgICBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aCxcbiAgICAgICAgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChmdW5jdGlvbkJyZWFrKHZhbHVlKSksXG4gICAgICAgIGkgPSAwO1xuXG4gICAgZm9yICg7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICAgIHNwbGl0VmFsdWVbdGVybXNbaV1dID0gKGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yc1tpXSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwbGl0VmFsdWU7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggKyAnKCcgKyB2YWx1ZSArICcpJztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWNyZWF0ZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjb2xvcjoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMjU1LFxuICAgICAgICByb3VuZDogdHJ1ZVxuICAgIH0sXG4gICAgb3BhY2l0eToge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMVxuICAgIH0sXG4gICAgcGVyY2VudDoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMTAwLFxuICAgICAgICB1bml0OiAnJSdcbiAgICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGVmYXVsdC1wcm9wcy5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgWCA9ICdYJyxcbiAgICBZID0gJ1knLFxuICAgIEFMUEhBID0gJ0FscGhhJyxcblxuICAgIHRlcm1zID0ge1xuICAgICAgICBjb2xvcnM6IFsnUmVkJywgJ0dyZWVuJywgJ0JsdWUnLCBBTFBIQV0sXG4gICAgICAgIHBvc2l0aW9uczogW1gsIFksICdaJ10sXG4gICAgICAgIGRpbWVuc2lvbnM6IFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0J10sXG4gICAgICAgIHNoYWRvdzogW1gsIFksICdSYWRpdXMnLCAnU3ByZWFkJywgJ0NvbG9yJ10sXG4gICAgICAgIGhzbDogWydIdWUnLCAnU2F0dXJhdGlvbicsICdMaWdodG5lc3MnLCBBTFBIQV1cbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRlcm1zO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanNcbiAqKi8iLCIvKlxuICAgIFV0aWxpdHkgZnVuY3Rpb25zXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBwcm90ZWN0ZWRQcm9wZXJ0aWVzID0gWydzY29wZScsICAnZG9tJ10sXG4gICAgXG4gICAgaXNQcm90ZWN0ZWQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiAocHJvdGVjdGVkUHJvcGVydGllcy5pbmRleE9mKGtleSkgIT09IC0xKTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgR2V0IHZhciB0eXBlIGFzIHN0cmluZ1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW3N0cmluZ106IFJldHVybnMsIGZvciBpbnN0YW5jZSAnT2JqZWN0JyBpZiBbb2JqZWN0IE9iamVjdF1cbiAgICAqL1xuICAgIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLypcbiAgICAgICAgSXRlcmF0ZSBvdmVyIGFuIG9iamVjdCBhbmQgZmlyZSBhIGNhbGxiYWNrIGZvciBldmVyeSBpdGVtIGluIGl0XG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBQcm9wZXJ0aWVzXG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBmaXJlXG4gICAgKi9cbiAgICBlYWNoOiBmdW5jdGlvbiAocHJvcHMsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpLFxuICAgICAgICAgICAgbnVtS2V5cyA9IGtleXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tpXSxcbiAgICAgICAgICAgICAgICBwcm9wID0gcHJvcHNba2V5XTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGtleSwgcHJvcCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEhhcyBvbmUgb2JqZWN0IGNoYW5nZWQgZnJvbSB0aGUgb3RoZXJcbiAgICAgICAgXG4gICAgICAgIENvbXBhcmVzIHRoZSB0d28gcHJvdmlkZWQgaW5wdXRzIGFuZCByZXR1cm5zIHRydWUgaWYgdGhleSBhcmUgZGlmZmVyZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEFcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBCXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuICAgICovXG4gICAgaGFzQ2hhbmdlZDogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGtleSA9ICcnO1xuXG4gICAgICAgIGZvciAoa2V5IGluIGIpIHtcbiAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KGtleSkgJiYgYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIGhhc0NoYW5nZWQ7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhIG51bWJlcj9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiAgICAqL1xuICAgIGlzTnVtOiBmdW5jdGlvbiAobnVtKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIG51bSA9PT0gJ251bWJlcicpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYW4gb2JqZWN0P1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuICAgICovXG4gICAgaXNPYmo6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jyk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0aGlzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiAgICAqL1xuICAgIGlzRnVuYzogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gKHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJyk7IFxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYSBzdHJpbmcgPyBcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4gICAgKi9cbiAgICBpc1N0cmluZzogZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKTsgXG4gICAgfSxcblxuXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnQ/XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IElmIHRoaXMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiAgICAqL1xuICAgIGlzUmVsYXRpdmVWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGFuIGFycmF5ID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0aGlzLnZhclR5cGUgPT09ICdBcnJheSdcbiAgICAqL1xuICAgIGlzQXJyYXk6IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgcmV0dXJuICh2YXJUeXBlKGFycikgPT09ICdBcnJheScpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQ29weSBvYmplY3Qgb3IgYXJyYXlcbiAgICAgICAgXG4gICAgICAgIENoZWNrcyB3aGV0aGVyIGJhc2UgaXMgYW4gYXJyYXkgb3Igb2JqZWN0IGFuZCBtYWtlc1xuICAgICAgICBhcHByb3ByaWF0ZSBjb3B5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byBjb3B5XG4gICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogTmV3IGNvcHkgb2YgYXJyYXkgb3Igb2JqZWN0XG4gICAgKi9cbiAgICBjb3B5OiBmdW5jdGlvbiAoYmFzZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuaXNBcnJheShiYXNlKSkgPyB0aGlzLmNvcHlBcnJheShiYXNlKSA6IHRoaXMuY29weU9iamVjdChiYXNlKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIERlZXAgY29weSBhbiBvYmplY3RcbiAgICAgICAgXG4gICAgICAgIEl0ZXJhdGVzIG92ZXIgYW4gb2JqZWN0IGFuZCBjcmVhdGVzIGEgbmV3IGNvcHkgb2YgZXZlcnkgaXRlbSxcbiAgICAgICAgZGVlcCBjb3B5aW5nIGlmIGl0IGZpbmRzIGFueSBvYmplY3RzL2FycmF5c1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gY29weVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IE5ldyBjb3B5IG9mIG9iamVjdFxuICAgICovXG4gICAgY29weU9iamVjdDogZnVuY3Rpb24gKGJhc2UpIHtcbiAgICAgICAgdmFyIG5ld09iamVjdCA9IHt9O1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGJhc2UpIHtcbiAgICAgICAgICAgIGlmIChiYXNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9ICh0aGlzLmlzT2JqKGJhc2Vba2V5XSkgJiYgIWlzUHJvdGVjdGVkKGtleSkpID8gdGhpcy5jb3B5KGJhc2Vba2V5XSkgOiBiYXNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdPYmplY3Q7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEZWVwIGNvcHkgYW4gYXJyYXlcbiAgICAgICAgXG4gICAgICAgIExvb3BzIHRocm91Z2ggYW4gYXJyYXkgYW5kIGNyZWF0ZXMgYSBuZXcgY29weSBvZiBldmVyeSBpdGVtLFxuICAgICAgICBkZWVwIGNvcHlpbmcgaWYgaXQgZmluZHMgYW55IG9iamVjdHMvYXJyYXlzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5XTogQXJyYXkgdG8gY29weVxuICAgICAgICBAcmV0dXJuIFthcnJheV06IE5ldyBjb3B5IG9mIGFycmF5XG4gICAgKi9cbiAgICBjb3B5QXJyYXk6IGZ1bmN0aW9uIChiYXNlKSB7XG4gICAgICAgIHZhciBuZXdBcnJheSA9IFtdLFxuICAgICAgICAgICAgbGVuZ3RoID0gYmFzZS5sZW5ndGgsXG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgXG4gICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5ld0FycmF5W2ldID0gKHRoaXMuaXNPYmooYmFzZVtpXSkpID8gdGhpcy5jb3B5KGJhc2VbaV0pIDogYmFzZVtpXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgTm9uLWRlc3RydWN0aXZlIG1lcmdlIG9mIG9iamVjdCBvciBhcnJheVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBBcnJheSBvciBvYmplY3QgdG8gdXNlIGFzIGJhc2VcbiAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBBcnJheSBvciBvYmplY3QgdG8gb3ZlcndyaXRlIGJhc2Ugd2l0aFxuICAgICAgICBAcmV0dXJuIFthcnJheSB8fCBvYmplY3RdOiBOZXcgYXJyYXkgb3Igb2JqZWN0XG4gICAgKi9cbiAgICBtZXJnZTogZnVuY3Rpb24gKGJhc2UsIG92ZXJ3cml0ZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuaXNBcnJheShiYXNlKSkgPyB0aGlzLmNvcHlBcnJheShvdmVyd3JpdGUpIDogdGhpcy5tZXJnZU9iamVjdChiYXNlLCBvdmVyd3JpdGUpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgTm9uLWRlc3RydWN0aXZlIG1lcmdlIG9mIG9iamVjdFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gdXNlIGFzIGJhc2VcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gb3ZlcndyaXRlIGJhc2Ugd2l0aFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBOZXcgb2JqZWN0XG4gICAgKi9cbiAgICBtZXJnZU9iamVjdDogZnVuY3Rpb24gKGJhc2UsIG92ZXJ3cml0ZSkge1xuICAgICAgICB2YXIgaGFzQmFzZSA9IHRoaXMuaXNPYmooYmFzZSksXG4gICAgICAgICAgICBuZXdPYmplY3QgPSBoYXNCYXNlID8gdGhpcy5jb3B5KGJhc2UpIDogdGhpcy5jb3B5KG92ZXJ3cml0ZSksXG4gICAgICAgICAgICBrZXkgPSAnJztcblxuICAgICAgICBpZiAoaGFzQmFzZSkge1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gb3ZlcndyaXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJ3cml0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gKHRoaXMuaXNPYmoob3ZlcndyaXRlW2tleV0pICYmICFpc1Byb3RlY3RlZChrZXkpKSA/IHRoaXMubWVyZ2UoYmFzZVtrZXldLCBvdmVyd3JpdGVba2V5XSkgOiBvdmVyd3JpdGVba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld09iamVjdDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gICAgICAgIFxuICAgICAgICAgICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICAgICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4gICAgKi9cbiAgICBzcGxpdFZhbFVuaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWwgPSB2YWx1ZS5tYXRjaCgvKC0/XFxkKlxcLj9cXGQqKSguKikvKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoc3BsaXRWYWxbMV0pLFxuICAgICAgICAgICAgdW5pdDogIHNwbGl0VmFsWzJdXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuICAgICovXG4gICAgc3RlcFByb2dyZXNzOiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0ZXBzKSB7XG4gICAgICAgIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpLFxuICAgICAgICAgICAgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpLFxuICAgICAgICAgICAgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiAgICAqL1xuICAgIGN1cnJlbnRUaW1lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIikgPyBwZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cbiAgICBcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoLFxuICAgIHRyYW5zZm9ybURpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1kaWN0aW9uYXJ5JyksXG4gICAgdHJhbnNmb3JtUHJvcHMgPSB0cmFuc2Zvcm1EaWN0aW9uYXJ5LnByb3BzLFxuXG4gICAgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG91dHB1dCwgY2FjaGUpIHtcbiAgICB2YXIgY3NzID0ge30sXG4gICAgICAgIHRyYW5zZm9ybSA9ICcnLFxuICAgICAgICB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG4gICAgICAgIFxuICAgIC8vIExvb3AgdGhyb3VnaCBvdXRwdXQsIGNoZWNrIGZvciB0cmFuc2Zvcm0gcHJvcGVydGllc1xuICAgIGVhY2gob3V0cHV0LCBmdW5jdGlvbiAoa2V5LCBydWxlKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSB0cmFuc2Zvcm0gcHJvcGVydHksIGFkZCB0byB0cmFuc2Zvcm0gc3RyaW5nXG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gKz0ga2V5ICsgJygnICsgcnVsZSArICcpJztcbiAgICAgICAgICAgIHRyYW5zZm9ybUhhc1ogPSAoa2V5ID09PSBUUkFOU0xBVEVfWikgPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIGp1c3QgYXNzaWduIGRpcmVjdGx5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocnVsZSAhPT0gY2FjaGVba2V5XSkge1xuICAgICAgICAgICAgICAgIGNhY2hlW2tleV0gPSBjc3Nba2V5XSA9IHJ1bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIElmIHdlIGhhdmUgdHJhbnNmb3JtIHByb3BlcnRpZXMsIGFkZCB0cmFuc2xhdGVaXG4gICAgaWYgKHRyYW5zZm9ybSAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gKz0gJyAnICsgVFJBTlNMQVRFX1ogKyAnKDBweCknO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYW5zZm9ybSAhPT0gY2FjaGUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICBjYWNoZS50cmFuc2Zvcm0gPSBjc3MudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvY3NzL2J1aWxkLmpzXG4gKiovIiwidmFyIFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gICAgeTogVFJBTlNMQVRFICsgJ1knLFxuICAgIHo6IFRSQU5TTEFURSArICdaJ1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9jc3MvbWFwLmpzXG4gKiovIiwidmFyIENPTE9SID0gJ2NvbG9yJyxcbiAgICBQT1NJVElPTlMgPSAncG9zaXRpb25zJyxcbiAgICBESU1FTlNJT05TID0gJ2RpbWVuc2lvbnMnLFxuICAgIFNIQURPVyA9ICdzaGFkb3cnLFxuICAgIEFOR0xFID0gJ2FuZ2xlJyxcbiAgICBBTFBIQSA9ICdhbHBoYScsXG4gICAgUFggPSAncHgnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBDb2xvciBwcm9wZXJ0aWVzXG4gICAgY29sb3I6IENPTE9SLFxuICAgIGJhY2tncm91bmRDb2xvcjogQ09MT1IsXG4gICAgb3V0bGluZUNvbG9yOiBDT0xPUixcbiAgICBmaWxsOiBDT0xPUixcbiAgICBzdHJva2U6IENPTE9SLFxuICAgIC8vIEJvcmRlclxuICAgIGJvcmRlckNvbG9yOiBDT0xPUixcbiAgICBib3JkZXJUb3BDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IENPTE9SLFxuICAgIGJvcmRlckxlZnRDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyUmFkaXVzOiBQWCxcbiAgICAvLyBEaW1lbnNpb25zXG4gICAgbWFyZ2luOiBESU1FTlNJT05TLFxuICAgIHBhZGRpbmc6IERJTUVOU0lPTlMsXG4gICAgd2lkdGg6IFBYLFxuICAgIGhlaWdodDogUFgsICAgIFxuICAgIC8vIFBvc2l0aW9uc1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogUE9TSVRJT05TLFxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiBQT1NJVElPTlMsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBQT1NJVElPTlMsICAgIFxuICAgIC8vIFNoYWRvd3NcbiAgICB0ZXh0U2hhZG93OiBTSEFET1csXG4gICAgYm94U2hhZG93OiBTSEFET1csICAgIFxuICAgIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgcm90YXRlOiBBTkdMRSxcbiAgICByb3RhdGVYOiBBTkdMRSxcbiAgICByb3RhdGVZOiBBTkdMRSxcbiAgICByb3RhdGVaOiBBTkdMRSxcbiAgICBza2V3WDogQU5HTEUsXG4gICAgc2tld1k6IEFOR0xFLFxuICAgIHRyYW5zbGF0ZVg6IFBYLFxuICAgIHRyYW5zbGF0ZVk6IFBYLFxuICAgIHRyYW5zbGF0ZVo6IFBYLFxuICAgIHBlcnNwZWN0aXZlOiBQWCxcbiAgICBvcGFjaXR5OiBBTFBIQVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9jc3MvdHlwZS1tYXAuanNcbiAqKi8iLCJ2YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2gsXG4gICAgdHJhbnNmb3JtRGljdGlvbmFyeSA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tZGljdGlvbmFyeScpLFxuICAgIHRyYW5zZm9ybVByb3BzID0gdHJhbnNmb3JtRGljdGlvbmFyeS5wcm9wcztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3V0cHV0LCBvcmlnaW4pIHtcbiAgICB2YXIgcHJvcHMgPSB7fSxcbiAgICAgICAgaGFzVHJhbnNmb3JtID0gZmFsc2UsXG4gICAgICAgIHNjYWxlID0gb3V0cHV0LnNjYWxlICE9PSB1bmRlZmluZWQgPyBvdXRwdXQuc2NhbGUgOiBvdXRwdXQuc2NhbGVYIHx8IDEsXG4gICAgICAgIHNjYWxlWSA9IG91dHB1dC5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IG91dHB1dC5zY2FsZVkgOiBzY2FsZSB8fCAxLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW5YID0gb3JpZ2luLngsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblkgPSBvcmlnaW4ueSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1YID0gLSB0cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSksXG4gICAgICAgIHNjYWxlVHJhbnNmb3JtWSA9IC0gdHJhbnNmb3JtT3JpZ2luWSAqIChzY2FsZVkgKiAxKSxcbiAgICAgICAgc2NhbGVSZXBsYWNlWCA9IHRyYW5zZm9ybU9yaWdpblggLyBzY2FsZSxcbiAgICAgICAgc2NhbGVSZXBsYWNlWSA9IHRyYW5zZm9ybU9yaWdpblkgLyBzY2FsZVksXG4gICAgICAgIHRyYW5zZm9ybSA9IHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogYHRyYW5zbGF0ZSgke291dHB1dC50cmFuc2xhdGVYfSwgJHtvdXRwdXQudHJhbnNsYXRlWX0pIGAsXG4gICAgICAgICAgICBzY2FsZTogYHRyYW5zbGF0ZSgke3NjYWxlVHJhbnNmb3JtWH0sICR7c2NhbGVUcmFuc2Zvcm1ZfSkgc2NhbGUoJHtzY2FsZX0sICR7c2NhbGVZfSkgdHJhbnNsYXRlKCR7c2NhbGVSZXBsYWNlWH0sICR7c2NhbGVSZXBsYWNlWX0pIGAsXG4gICAgICAgICAgICByb3RhdGU6IGByb3RhdGUoJHtvdXRwdXQucm90YXRlfSwgJHt0cmFuc2Zvcm1PcmlnaW5YfSwgJHt0cmFuc2Zvcm1PcmlnaW5ZfSkgYCxcbiAgICAgICAgICAgIHNrZXdYOiBgc2tld1goJHtvdXRwdXQuc2tld1h9KSBgLFxuICAgICAgICAgICAgc2tld1k6IGBza2V3WSgke291dHB1dC5za2V3WX0pIGBcbiAgICAgICAgfTtcblxuICAgIGVhY2gob3V0cHV0LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgICAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcblxuICAgICAgICBlYWNoKHRyYW5zZm9ybSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSAoa2V5ID09PSAnc2NhbGUnKSA/ICcxJyA6ICcwJztcbiAgICAgICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB2YWx1ZS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9zdmcvYnVpbGQuanNcbiAqKi8iLCJ2YXIgQ09MT1IgPSAnY29sb3InLFxuICAgIFNDQUxFID0gJ3NjYWxlJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZmlsbDogQ09MT1IsXG4gICAgc3Ryb2tlOiBDT0xPUixcbiAgICBzY2FsZTogU0NBTEUsXG4gICAgc2NhbGVYOiBTQ0FMRSxcbiAgICBzY2FsZVk6IFNDQUxFLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ3Bvc2l0aW9ucydcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvc3ZnL3R5cGUtbWFwLmpzXG4gKiovIiwidmFyIFNUUk9LRSA9ICdzdHJva2UnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBvcGFjaXR5OiBTVFJPS0UgKyAnLW9wYWNpdHknLFxuICAgIHdpZHRoOiBTVFJPS0UgKyAnLXdpZHRoJyxcbiAgICBtaXRlcmxpbWl0OiBTVFJPS0UgKyAnLW1pdGVybGltaXQnXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL3BhdGgvbWFwLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBNb2RNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9rZXlzID0gW107XG4gICAgICAgIHRoaXMuX251bUtleXMgPSAwO1xuICAgIH07XG5cbk1vZE1hbmFnZXIucHJvdG90eXBlID0ge1xuXG4gICAgLypcbiAgICAgICAgQWRkIG1vZHVsZSBrZXkgdG8ga2V5cyBsaXN0XG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgdG8gYWRkXG4gICAgKi9cbiAgICBfYWRkS2V5OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB0aGlzLl9rZXlzLnB1c2gobmFtZSk7XG4gICAgICAgIHRoaXMuX251bUtleXMrKztcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQWRkIGEgbmV3IG1vZHVsZVxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nIHx8IG9iamVjdF06IE5hbWUgb2YgbmV3IG1vZHVsZSBvciBtdWx0aXBsZSBtb2R1bGVzXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpOiBNb2R1bGUgdG8gYWRkXG4gICAgKi9cbiAgICBleHRlbmQ6IGZ1bmN0aW9uIChuYW1lLCBtb2QpIHtcbiAgICAgICAgdmFyIG11bHRpTW9kcyA9ICh0eXBlb2YgbmFtZSA9PSAnb2JqZWN0JyksXG4gICAgICAgICAgICBtb2RzID0gbXVsdGlNb2RzID8gbmFtZSA6IHt9LFxuICAgICAgICAgICAga2V5ID0gJyc7XG5cbiAgICAgICAgLy8gSWYgd2UganVzdCBoYXZlIG9uZSBtb2R1bGUsIGNvZXJjZVxuICAgICAgICBpZiAoIW11bHRpTW9kcykge1xuICAgICAgICAgICAgbW9kc1tuYW1lXSA9IG1vZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoa2V5IGluIG1vZHMpIHtcbiAgICAgICAgICAgIGlmIChtb2RzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRLZXkoa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBtb2RzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZWFjaDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBrZXkgPSAnJztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX251bUtleXM7IGkrKykge1xuICAgICAgICAgICAga2V5ID0gdGhpcy5fa2V5c1tpXTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGtleSwgdGhpc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kTWFuYWdlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmMvTW9kTWFuYWdlci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgLy8gW251bWJlcl06IERlZmF1bHQgbWF4IHNpemUgb2YgaGlzdG9yeVxuICAgIG1heEhpc3RvcnlTaXplID0gMyxcbiAgICBcbiAgICAvKlxuICAgICAgICBIaXN0b3J5IGNvbnN0cnVjdG9yXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3Zhcl06IFZhcmlhYmxlIHRvIHN0b3JlIGluIGZpcnN0IGhpc3Rvcnkgc2xvdFxuICAgICAgICBAcGFyYW0gW2ludF0gKG9wdGlvbmFsKTogTWF4aW11bSBzaXplIG9mIGhpc3RvcnlcbiAgICAqL1xuICAgIEhpc3RvcnkgPSBmdW5jdGlvbiAob2JqLCBtYXgpIHtcbiAgICAgICAgdGhpcy5tYXggPSBtYXggfHwgbWF4SGlzdG9yeVNpemU7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IFtdO1xuICAgICAgICB0aGlzLmFkZChvYmopO1xuICAgIH07XG4gICAgXG5IaXN0b3J5LnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBQdXNoIG5ldyB2YXIgdG8gaGlzdG9yeVxuICAgICAgICBcbiAgICAgICAgU2hpZnQgb3V0IG9sZGVzdCBlbnRyeSBpZiB3ZSd2ZSByZWFjaGVkIG1heGltdW0gY2FwYWNpdHlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbdmFyXTogVmFyaWFibGUgdG8gcHVzaCBpbnRvIGhpc3RvcnkuZW50cmllc1xuICAgICovXG4gICAgYWRkOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2l6ZSA9IHRoaXMuZ2V0U2l6ZSgpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2gob2JqKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChjdXJyZW50U2l6ZSA+PSB0aGlzLm1heCkge1xuICAgICAgICAgICAgdGhpcy5lbnRyaWVzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCB2YXJpYWJsZSBhdCBzcGVjaWZpZWQgaW5kZXhcblxuICAgICAgICBAcGFyYW0gW2ludF06IEluZGV4XG4gICAgICAgIEByZXR1cm4gW3Zhcl06IFZhciBmb3VuZCBhdCBzcGVjaWZpZWQgaW5kZXhcbiAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgaSA9ICh0eXBlb2YgaSA9PT0gJ251bWJlcicpID8gaSA6IHRoaXMuZ2V0U2l6ZSgpIC0gMTtcblxuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzW2ldO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBzZWNvbmQgbmV3ZXN0IGhpc3RvcnkgZW50cnlcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3Zhcl06IEVudHJ5IGZvdW5kIGF0IGluZGV4IHNpemUgLSAyXG4gICAgKi9cbiAgICBnZXRQcmV2aW91czogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5nZXRTaXplKCkgLSAyKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBjdXJyZW50IGhpc3Rvcnkgc2l6ZVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbaW50XTogQ3VycmVudCBsZW5ndGggb2YgZW50cmllcy5sZW5ndGhcbiAgICAqL1xuICAgIGdldFNpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllcy5sZW5ndGg7XG4gICAgfVxuICAgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIaXN0b3J5O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luYy9IaXN0b3J5LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH07XG5cblF1ZXVlLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBBZGQgYSBzZXQgb2YgYXJndW1lbnRzIHRvIHF1ZXVlXG4gICAgKi9cbiAgICBhZGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKGFyZ3VtZW50c1swXSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgbmV4dCBzZXQgb2YgYXJndW1lbnRzIGZyb20gcXVldWVcbiAgICAqL1xuICAgIG5leHQ6IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gdGhpcy5xdWV1ZSxcbiAgICAgICAgICAgIHJldHVyblZhbCA9IGZhbHNlLFxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgXG4gICAgICAgIGRpcmVjdGlvbiA9IChhcmd1bWVudHMubGVuZ3RoKSA/IGRpcmVjdGlvbiA6IDE7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiBvdXIgaW5kZXggaXMgYmV0d2VlbiAwIGFuZCB0aGUgcXVldWUgbGVuZ3RoLCByZXR1cm4gdGhhdCBpdGVtXG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgcXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm5WYWwgPSBxdWV1ZVtpbmRleF07XG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXggKyBkaXJlY3Rpb247XG4gICAgICAgIFxuICAgICAgICAvLyBPciBjbGVhclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBSZXBsYWNlIHF1ZXVlIHdpdGggZW1wdHkgYXJyYXlcbiAgICAqL1xuICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmMvUXVldWUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIElucHV0ID0gcmVxdWlyZSgnLi9JbnB1dC5qcycpLFxuICAgIGN1cnJlbnRQb2ludGVyLCAvLyBTb3J0IHRoaXMgb3V0IGZvciBtdWx0aXRvdWNoXG4gICAgXG4gICAgVE9VQ0hNT1ZFID0gJ3RvdWNobW92ZScsXG4gICAgTU9VU0VNT1ZFID0gJ21vdXNlbW92ZScsXG5cbiAgICAvKlxuICAgICAgICBDb252ZXJ0IGV2ZW50IGludG8gcG9pbnRcbiAgICAgICAgXG4gICAgICAgIFNjcmFwZSB0aGUgeC95IGNvb3JkaW5hdGVzIGZyb20gdGhlIHByb3ZpZGVkIGV2ZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2V2ZW50XTogT3JpZ2luYWwgcG9pbnRlciBldmVudFxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dOiBUcnVlIGlmIHRvdWNoIGV2ZW50XG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IHgveSBjb29yZGluYXRlcyBvZiBldmVudFxuICAgICovXG4gICAgZXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKGV2ZW50LCBpc1RvdWNoRXZlbnQpIHtcbiAgICAgICAgdmFyIHRvdWNoQ2hhbmdlZCA9IGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogZmFsc2U7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdG91Y2hDaGFuZ2VkID8gdG91Y2hDaGFuZ2VkLmNsaWVudFggOiBldmVudC5wYWdlWCxcbiAgICAgICAgICAgIHk6IHRvdWNoQ2hhbmdlZCA/IHRvdWNoQ2hhbmdlZC5jbGllbnRZIDogZXZlbnQucGFnZVlcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBhY3R1YWwgZXZlbnRcbiAgICAgICAgXG4gICAgICAgIENoZWNrcyBmb3IgalF1ZXJ5J3MgLm9yaWdpbmFsRXZlbnQgaWYgcHJlc2VudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtldmVudCB8IGpRdWVyeSBldmVudF1cbiAgICAgICAgQHJldHVybiBbZXZlbnRdOiBUaGUgYWN0dWFsIEpTIGV2ZW50ICBcbiAgICAqL1xuICAgIGdldEFjdHVhbEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50O1xuICAgIH0sXG5cbiAgICBcbiAgICAvKlxuICAgICAgICBQb2ludGVyIGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBQb2ludGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZ2V0QWN0dWFsRXZlbnQoZSksIC8vIEluIGNhc2Ugb2YgalF1ZXJ5IGV2ZW50XG4gICAgICAgICAgICBpc1RvdWNoID0gKGV2ZW50LnRvdWNoZXMpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgc3RhcnRQb2ludCA9IGV2ZW50VG9Qb2ludChldmVudCwgaXNUb3VjaCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnVwZGF0ZShzdGFydFBvaW50KTtcbiAgICAgICAgdGhpcy5pc1RvdWNoID0gaXNUb3VjaDtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfSxcbiAgICBcbiAgICBwcm90byA9IFBvaW50ZXIucHJvdG90eXBlID0gbmV3IElucHV0KCk7XG5cbi8qXG4gICAgQmluZCBtb3ZlIGV2ZW50XG4qL1xucHJvdG8uYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm1vdmVFdmVudCA9IHRoaXMuaXNUb3VjaCA/IFRPVUNITU9WRSA6IE1PVVNFTU9WRTtcbiAgICBcbiAgICBjdXJyZW50UG9pbnRlciA9IHRoaXM7XG4gICAgXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMub25Nb3ZlKTtcbn07XG5cbi8qXG4gICAgVW5iaW5kIG1vdmUgZXZlbnRcbiovXG5wcm90by51bmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMub25Nb3ZlKTtcbn07XG5cbi8qXG4gICAgUG9pbnRlciBvbk1vdmUgZXZlbnQgaGFuZGxlclxuICAgIFxuICAgIEBwYXJhbSBbZXZlbnRdOiBQb2ludGVyIG1vdmUgZXZlbnRcbiovXG5wcm90by5vbk1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBuZXdQb2ludCA9IGV2ZW50VG9Qb2ludChlLCBjdXJyZW50UG9pbnRlci5pc1RvdWNoKTtcbiAgICBlID0gZ2V0QWN0dWFsRXZlbnQoZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGN1cnJlbnRQb2ludGVyLnVwZGF0ZShuZXdQb2ludCk7XG59O1xuXG5wcm90by5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50ZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5wdXQvUG9pbnRlci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdmFsdWVUeXBlTWFuYWdlciA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL21hbmFnZXInKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoLFxuICAgIEFjdGlvbiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvQWN0aW9uJyksXG4gICAgZGVmYXVsdEFjdGlvbiA9IG5ldyBBY3Rpb24oKSxcblxuICAgIGNyZWF0ZU1hcHBlciA9IGZ1bmN0aW9uIChyb2xlLCBtYXBwZWRWYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuYW1lLCB2YWwpIHtcbiAgICAgICAgICAgIG1hcHBlZFZhbHVlc1tyb2xlLm1hcChuYW1lKV0gPSB2YWw7XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIENoZWNrIGFsbCBBY3Rpb25zIGZvciBgb25FbmRgLCByZXR1cm4gdHJ1ZSBpZiBhbGwgYXJlIHRydWVcblxuICAgICAgICBAcGFyYW0gW0FjdG9yXVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dXG4gICAgICAgIEByZXR1cm5zIFtib29sZWFuXVxuICAgICovXG4gICAgY2hlY2tBbmRGaXJlSGFzRW5kZWQgPSBmdW5jdGlvbiAoYWN0b3IsIGhhc0NoYW5nZWQpIHtcbiAgICAgICAgdmFyIGhhc0VuZGVkID0gdHJ1ZTtcblxuICAgICAgICBlYWNoKGFjdG9yLmFjdGl2ZUFjdGlvbnMsIChrZXksIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5oYXNFbmRlZCAmJiBhY3Rpb24uaGFzRW5kZWQoYWN0b3IsIGhhc0NoYW5nZWQpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGhhc0VuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBhY3Rvci5hY3RpdmVBY3Rpb25zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBoYXNFbmRlZDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIHRoZSBBY3RvciBhbmQgaXRzIHZhbHVlc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XTogVGltZXN0YW1wIG9mIHJBRiBjYWxsXG4gICAgICAgIEBwYXJhbSBbaW50XTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4gICAgKi9cbiAgICB1cGRhdGUgPSBmdW5jdGlvbiAoZnJhbWVzdGFtcCwgZnJhbWVEdXJhdGlvbikge1xuICAgICAgICB2YXIgbnVtQWN0aXZlVmFsdWVzID0gdGhpcy5hY3RpdmVWYWx1ZXMubGVuZ3RoLFxuICAgICAgICAgICAgbnVtQWN0aXZlUGFyZW50cyA9IHRoaXMuYWN0aXZlUGFyZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBudW1Sb2xlcyA9IHRoaXMucm9sZXMubGVuZ3RoLFxuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRoaXMuaGFzQ2hhbmdlZDtcblxuICAgICAgICAvLyBVcGRhdGUgSW5wdXQgYW5kIGF0dGFjaCBuZXcgdmFsdWVzIHRvIHN0YXRhXG4gICAgICAgIGlmICh0aGlzLmlucHV0KSB7XG4gICAgICAgICAgICBzdGF0ZS5pbnB1dCA9IHRoaXMuaW5wdXQub25GcmFtZShmcmFtZXN0YW1wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgb25TdGFydCBjYWxsYmFjayBpZiB0aGlzIGlzIGZpcnN0IGZyYW1lXG4gICAgICAgIGlmICh0aGlzLmZpcnN0RnJhbWUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUm9sZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCByb2xlID0gdGhpcy5yb2xlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAocm9sZS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICByb2xlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHZhbHVlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUFjdGl2ZVZhbHVlczsgaSsrKSB7XG4gICAgICAgICAgICAvLyBHZXQgdmFsdWUgYW5kIGtleVxuICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMuYWN0aXZlVmFsdWVzW2ldO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSAoIXZhbHVlLmFjdGlvbiB8fCB2YWx1ZS5hY3Rpb24gJiYgIXZhbHVlLmFjdGlvbi5pc0FjdGl2ZSkgPyBkZWZhdWx0QWN0aW9uIDogdmFsdWUuYWN0aW9uO1xuXG4gICAgICAgICAgICAvLyBGaXJlIGFjdGlvbiBvbkZyYW1lU3RhcnQgaWYgbm90IGFscmVhZHkgZmlyZWRcbiAgICAgICAgICAgIGlmIChhY3Rpb24ub25GcmFtZVN0YXJ0ICYmIGFjdGlvbi5sYXN0VXBkYXRlICE9PSBmcmFtZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLm9uRnJhbWVTdGFydCh0aGlzLCBmcmFtZUR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBhY3Rpb24ubGFzdFVwZGF0ZSA9IGZyYW1lc3RhbXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgdmFsdWVcbiAgICAgICAgICAgIGxldCB1cGRhdGVkVmFsdWUgPSBhY3Rpb24ucHJvY2Vzcyh0aGlzLCB2YWx1ZSwga2V5LCBmcmFtZUR1cmF0aW9uKTtcblxuICAgICAgICAgICAgLy8gTGltaXQgaWYgdGhpcyBhY3Rpb24gZG9lcyB0aGF0IGtpbmQgb2YgdGhpbmdcbiAgICAgICAgICAgIGlmIChhY3Rpb24ubGltaXQgJiYgdmFsdWUuaGFzUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBhY3Rpb24ubGltaXQodXBkYXRlZFZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIHZhbHVlIGlmIHJvdW5kIGlzIHRydWVcbiAgICAgICAgICAgIGlmICh2YWx1ZS5yb3VuZCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IE1hdGgucm91bmQodXBkYXRlZFZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIGZyYW1lQ2hhbmdlXG4gICAgICAgICAgICB2YWx1ZS5mcmFtZUNoYW5nZSA9IHVwZGF0ZWRWYWx1ZSAtIHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB2ZWxvY2l0eSBpZiBBY3Rpb24gaGFzbid0XG4gICAgICAgICAgICBpZiAoIWFjdGlvbi5jYWxjdWxhdGVzVmVsb2NpdHkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IGNhbGMuc3BlZWRQZXJTZWNvbmQodmFsdWUuZnJhbWVDaGFuZ2UsIGZyYW1lRHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgY3VycmVudCBzcGVlZFxuICAgICAgICAgICAgdmFsdWUuc3BlZWQgPSBNYXRoLmFicyh2YWx1ZS52ZWxvY2l0eSk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHZhbHVlJ3MgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT09IHVwZGF0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgbmV3IGN1cnJlbnQgXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdXBkYXRlZFZhbHVlO1xuICAgICAgICAgICAgbGV0IHZhbHVlU3RhdGUgPSAodmFsdWUudW5pdCkgPyB1cGRhdGVkVmFsdWUgKyB2YWx1ZS51bml0IDogdXBkYXRlZFZhbHVlO1xuXG4gICAgICAgICAgICAvLyBQdXQgdmFsdWUgaW4gc3RhdGUgaWYgbm8gcGFyZW50XG4gICAgICAgICAgICBpZiAoIXZhbHVlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnZhbHVlc1trZXldID0gdmFsdWVTdGF0ZTtcblxuICAgICAgICAgICAgLy8gT3IsIGFkZCB0byBwYXJlbnQgc3RhdGUgdG8gYmUgY29tYmluZWQgbGF0ZXJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGVbdmFsdWUucGFyZW50XSA9IHN0YXRlW3ZhbHVlLnBhcmVudF0gfHwge307XG4gICAgICAgICAgICAgICAgc3RhdGVbdmFsdWUucGFyZW50XVt2YWx1ZS5wcm9wTmFtZV0gPSB2YWx1ZVN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZXMgZnJvbSBjYWxjdWxhdGVkIGNoaWxkcmVuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQWN0aXZlUGFyZW50czsgaSsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5hY3RpdmVQYXJlbnRzW2ldO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZSBjdXJyZW50IHByb3BlcnR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWVUeXBlTWFuYWdlclt2YWx1ZS50eXBlXS5jb21iaW5lKHN0YXRlW2tleV0pO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgc3RhdGVcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlc1trZXldID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgYGZyYW1lYCBhbmQgYHVwZGF0ZWAgY2FsbGJhY2tzIG9uIGFsbCBSb2xlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvbGVzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb2xlID0gdGhpcy5yb2xlc1tpXTtcbiAgICAgICAgICAgIGxldCBtYXBwZWRWYWx1ZXMgPSB7fTtcblxuICAgICAgICAgICAgZWFjaChzdGF0ZS52YWx1ZXMsIGNyZWF0ZU1hcHBlcihyb2xlLCBtYXBwZWRWYWx1ZXMpKTtcblxuICAgICAgICAgICAgaWYgKHJvbGUuZnJhbWUpIHtcbiAgICAgICAgICAgICAgICByb2xlLmZyYW1lLmNhbGwodGhpcywgbWFwcGVkVmFsdWVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJvbGUudXBkYXRlICYmIChoYXNDaGFuZ2VkIHx8IHRoaXMuZmlyc3RGcmFtZSkpIHtcbiAgICAgICAgICAgICAgICByb2xlLnVwZGF0ZS5jYWxsKHRoaXMsIG1hcHBlZFZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCBoYXNDaGFuZ2VkIGJlZm9yZSBmdXJ0aGVyIEFjdGlvbnMgbWlnaHQgYWZmZWN0IHRoaXNcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ2hlY2sgYWxsIEFjdGlvbnMgYW5kIGZpcmUgb25FbmQgaWYgdGhleSd2ZSBlbmRlZFxuICAgICAgICBpZiAodGhpcy5pc0FjdGl2ZSAmJiBjaGVja0FuZEZpcmVIYXNFbmRlZCh0aGlzLCBoYXNDaGFuZ2VkKSkge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBGaXJlIGBjb21wbGV0ZWAgY2FsbGJhY2tcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUm9sZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCByb2xlID0gdGhpcy5yb2xlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAocm9sZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICByb2xlLmNvbXBsZXRlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiBBY3RvciBpcyBzdGlsbCBpbmFjdGl2ZSwgZmlyZSBuZXh0IHN0ZXBcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maXJzdEZyYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnJhbWVzdGFtcCA9IGZyYW1lc3RhbXA7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB1cGRhdGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0b3IvdXBkYXRlLmpzXG4gKiovIiwidmFyIFdhdGNoID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9XYXRjaCcpLFxuICAgIHdhdGNoZXIgPSBuZXcgV2F0Y2goKSxcbiAgICB2YWx1ZVR5cGVzTWFuYWdlciA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL21hbmFnZXInKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIGlzTnVtID0gdXRpbHMuaXNOdW0sXG4gICAgZWFjaCA9IHV0aWxzLmVhY2g7XG5cbmNvbnN0IG51bWVyaWNhbFZhbHVlcyA9IFsnY3VycmVudCcsICd0bycsICdtaW4nLCAnbWF4JywgJ3ZlbG9jaXR5JywgJ2ZyaWN0aW9uJywgJ3NwcmluZyddLFxuICAgIG51bU51bWVyaWNhbFZhbHVlcyA9IG51bWVyaWNhbFZhbHVlcy5sZW5ndGgsXG4gICAgZGVmYXVsdFZhbHVlID0ge1xuICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICB2ZWxvY2l0eTogMCxcbiAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgIGZyYW1lQ2hhbmdlOiAwXG4gICAgfTtcblxuZnVuY3Rpb24gY2hlY2tOdW1lcmljYWxWYWx1ZShuYW1lKSB7XG4gICAgcmV0dXJuIChudW1lcmljYWxWYWx1ZXMuaW5kZXhPZihuYW1lKSA+IC0xKTtcbn1cblxuLypcbiAgICBDaGVjayBSb2xlIHR5cGVNYXBzIHRvIHNlZSBpZiB0aGlzIHZhbHVlIG5hbWUgaGFzIGJlZW4gbWFwcGVkXG4gICAgdG8gYSBzcGVjaWZpYyB2YWx1ZSB0eXBlXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEByZXR1cm5zIFtzdHJpbmddOiBWYWx1ZSB0eXBlXG4qL1xuZnVuY3Rpb24gY2hlY2tSb2xlcyhuYW1lLCByb2xlcykge1xuICAgIHZhciB2YWx1ZVR5cGU7XG5cbiAgICBlYWNoKHJvbGVzLCAoa2V5LCByb2xlKSA9PiB7XG4gICAgICAgIGlmIChyb2xlLl90eXBlTWFwKSB7XG4gICAgICAgICAgICB2YWx1ZVR5cGUgPSByb2xlLl90eXBlTWFwW3JvbGUubWFwKG5hbWUpXSB8fCB2YWx1ZVR5cGU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YWx1ZVR5cGU7XG59XG5cbi8qXG4gICAgQ2hlY2sgdmFsdWUgZm9yIHNwZWNpYWwgdHlwZVxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybnMgW3N0cmluZyB8fCBmYWxzZV1cbiovXG5mdW5jdGlvbiBjaGVja1ZhbHVlVHlwZShleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSwgc2NvcGUsIHZhbHVlTmFtZSkge1xuICAgIHZhciB2YWx1ZVR5cGU7XG5cbiAgICAvLyBDaGVjayBleGlzdGluZyB2YWx1ZSBmb3IgdHlwZSBhbHJlYWR5IHNldFxuICAgIGlmIChleGlzdGluZ1ZhbHVlICYmIGV4aXN0aW5nVmFsdWUudHlwZSkge1xuICAgICAgICB2YWx1ZVR5cGUgPSBleGlzdGluZ1ZhbHVlLnR5cGU7XG4gICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3IgY2hlY2sgUm9sZSBfdHlwZU1hcCBwcm9wZXJ0aWVzXG4gICAgICAgIGlmIChzY29wZS5yb2xlcykge1xuICAgICAgICAgICAgdmFsdWVUeXBlID0gY2hlY2tSb2xlcyh2YWx1ZU5hbWUsIHNjb3BlLnJvbGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbmFsbHkgcnVuIHRlc3RzXG4gICAgICAgIGlmICghdmFsdWVUeXBlICYmIHV0aWxzLmlzU3RyaW5nKG5ld1ZhbHVlLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZVR5cGVzTWFuYWdlci50ZXN0KG5ld1ZhbHVlLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlVHlwZTtcbn1cblxuLypcbiAgICBSZXNvbHZlIGEgcHJvcGVydHlcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uIHx8IG51bWJlcl1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcmV0dXJucyBbbnVtYmVyXVxuKi9cbmZ1bmN0aW9uIHJlc29sdmUobmFtZSwgcHJvcCwgdmFsdWUsIHNjb3BlKSB7XG4gICAgbGV0IGlzTnVtZXJpY2FsVmFsdWUgPSBjaGVja051bWVyaWNhbFZhbHVlKG5hbWUpO1xuXG4gICAgLy8gSWYgZnVuY3Rpb24sIHJlc29sdmVcbiAgICBpZiAodXRpbHMuaXNGdW5jKHByb3ApICYmIGlzTnVtZXJpY2FsVmFsdWUpIHtcbiAgICAgICAgcHJvcCA9IHByb3AuY2FsbChzY29wZSwgc2NvcGUpO1xuICAgIH1cblxuICAgIC8vIElmIHN0cmluZywgY2hlY2sgZm9yIHJlbGF0aXZlIG51bWJlcnMgYW5kIHVuaXRzXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKHByb3ApKSB7XG4gICAgICAgIC8vIElmIHJlbGF0aXZlIHZhbHVlXG4gICAgICAgIGlmIChwcm9wLmluZGV4T2YoJz0nKSA+IDApIHtcbiAgICAgICAgICAgIHByb3AgPSBjYWxjLnJlbGF0aXZlVmFsdWUodmFsdWUuY3VycmVudCwgcHJvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB1bml0XG4gICAgICAgIGlmIChpc051bWVyaWNhbFZhbHVlKSB7XG4gICAgICAgICAgICBzcGxpdFVuaXQocHJvcCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtZXJpY2FsVmFsdWUpIHtcbiAgICAgICAgcHJvcCA9IHBhcnNlRmxvYXQocHJvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG59XG5cbi8qXG4gICAgU3BsaXQgYSB2YWx1ZSBpbnRvIHN1Yi12YWx1ZXNcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbdmFsdWVUeXBlSGFuZGxlcl1cbiAgICBAcmV0dXJucyBbb2JqZWN0XVxuKi9cbmZ1bmN0aW9uIHNwbGl0KG5hbWUsIHZhbHVlLCBzY29wZSwgdmFsdWVUeXBlSGFuZGxlcikge1xuICAgIHZhciBzcGxpdFZhbHVlcyA9IHZhbHVlVHlwZUhhbmRsZXIuc3BsaXQoKSxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBmb3IgKDsgaSA8IG51bU51bWVyaWNhbFZhbHVlczsgaSsrKSB7XG4gICAgICAgIGxldCBwcm9wTmFtZSA9IG51bWVyaWNhbFZhbHVlc1tpXTtcbiAgICAgICAgbGV0IHNwbGl0UHJvcCA9IHt9O1xuXG4gICAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZVByb3AgPSB2YWx1ZVtwcm9wTmFtZV07XG5cbiAgICAgICAgICAgIC8vIElmIHdlIG5lZWQgdG8gZmlyc3QgcmVzb2x2ZSB0aGlzLCByZXNvbHZlXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVByb3AgPSB2YWx1ZVByb3AuY2FsbChhY3RvciwgYWN0b3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGxpdFByb3AgPSB2YWx1ZVR5cGVIYW5kbGVyLnNwbGl0KHZhbHVlUHJvcCk7XG5cbiAgICAgICAgICAgIC8vIEFzc2lnbiBzcGxpdCBwcm9wZXJ0aWVzIHRvIGVhY2ggY2hpbGQgdmFsdWVcbiAgICAgICAgICAgIGVhY2goc3BsaXRQcm9wLCAoa2V5LCBwcm9wKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyB2YWx1ZSBpZiBub25lIGV4aXN0c1xuICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVzW2tleV0gPSBzcGxpdFZhbHVlc1trZXldIHx8IHV0aWxzLmNvcHkodmFsdWVUeXBlc01hbmFnZXIuZGVmYXVsdFByb3BzKHZhbHVlLnR5cGUsIGtleSkpO1xuICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVzW2tleV1bcHJvcE5hbWVdID0gcHJvcDtcblxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhzcGxpdFByb3Bba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRVbml0KHNwbGl0VmFsdWVzW2tleV1bcHJvcE5hbWVdLCBzcGxpdFZhbHVlc1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzcGxpdFZhbHVlcztcbn1cblxuLypcbiAgICBTcGxpdCB2YWx1ZSBpbnRvIG51bWJlciBhbmQgdW5pdCwgYW5kIHNldCB1bml0IHRvIHZhbHVlXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW29iamVjdF1cbiovXG5mdW5jdGlvbiBzcGxpdFVuaXQocHJvcGVydHksIGhvc3RWYWx1ZSkge1xuICAgIHZhciByZXR1cm5WYWwgPSBwcm9wZXJ0eSxcbiAgICAgICAgeyB2YWx1ZSwgdW5pdCB9ID0gdXRpbHMuc3BsaXRWYWxVbml0KHByb3BlcnR5KTtcblxuICAgIGlmICghaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIHJldHVyblZhbCA9IHZhbHVlO1xuICAgICAgICBpZiAodW5pdCkge1xuICAgICAgICAgICAgaG9zdFZhbHVlLnVuaXQgPSB1bml0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldHVyblZhbDtcbn1cblxuLypcbiAgICBQcmVwcm9jZXNzIGluY29taW5nIHZhbHVlcywgc3BsaXR0aW5nIG5vbi1udW1lcmljYWwgdmFsdWVzXG4gICAgaW50byBzdWItdmFsdWVzIGllIGhleFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4qL1xuZnVuY3Rpb24gcHJlcHJvY2VzcyhleGlzdGluZywgaW5jb21pbmcsIHNjb3BlLCBkZWZhdWx0UHJvcCkge1xuICAgIHZhciB2YWx1ZXMgPSB7fTtcblxuICAgIGVhY2goaW5jb21pbmcsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBleGlzdGluZ1ZhbHVlID0gZXhpc3Rpbmdba2V5XSxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0ge307XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqKHZhbHVlKSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRQcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdmFsdWUgZG9lc24ndCBoYXZlIGEgc3BlY2lhbCB0eXBlLCBjaGVjayBmb3Igb25lXG4gICAgICAgIG5ld1ZhbHVlLnR5cGUgPSBjaGVja1ZhbHVlVHlwZShleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSwgc2NvcGUsIGtleSk7XG5cbiAgICAgICAgdmFsdWVzW2tleV0gPSBuZXdWYWx1ZTtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdHlwZSBwcm9wZXJ0eSwgc3BsaXQvYXNzaWduIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUpIHtcbiAgICAgICAgICAgIGxldCB0eXBlSGFuZGxlciA9IHZhbHVlVHlwZXNNYW5hZ2VyW25ld1ZhbHVlLnR5cGVdO1xuXG4gICAgICAgICAgICAvLyBJZiB2YWx1ZVR5cGUgaGFuZGxlciBoYXMgYSBzcGxpdCBmdW5jdGlvbiwgc3BsaXQgdGhpcyB2YWx1ZVxuICAgICAgICAgICAgaWYgKHR5cGVIYW5kbGVyLnNwbGl0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwbGl0VmFsdWVzID0gc3BsaXQoa2V5LCBuZXdWYWx1ZSwgc2NvcGUsIHR5cGVIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IHt9O1xuXG4gICAgICAgICAgICAgICAgZWFjaChzcGxpdFZhbHVlcywgKGNoaWxkTmFtZSwgY2hpbGRWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlID0gdXRpbHMubWVyZ2UobmV3VmFsdWUsIGNoaWxkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlLnBhcmVudCA9IGNoaWxkVmFsdWUubmFtZSA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZS5wcm9wTmFtZSA9IGNoaWxkTmFtZTtcblxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hpbGRWYWx1ZS50eXBlO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hpbGRWYWx1ZS5jaGlsZHJlbjtcblxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNba2V5ICsgY2hpbGROYW1lXSA9IGNoaWxkVmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIE9yIGp1c3QgYXNzaWduIGRlZmF1bHQgcHJvcGVydGllcyBmb3IgdGhpcyB2YWx1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XSA9IHV0aWxzLm1lcmdlKHZhbHVlVHlwZXNNYW5hZ2VyLmRlZmF1bHRQcm9wcyhuZXdWYWx1ZS50eXBlLCBrZXkpLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YWx1ZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLypcbiAgICAgICAgTWVyZ2UgZXhpc3RpbmcgYW5kIGluY29taW5nIHZhbHVlcywgcmVzb2x2aW5nIHByb3BlcnRpZXNcbiAgICAgICAgc2V0IGFzIGZ1bmN0aW9ucyBhbmQgc3BsaXR0aW5nIG5vbi1udW1lcmljYWwgdmFsdWVzIGllIGhleFxuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXSAob3B0aW9uYWwpXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcmV0dXJucyBbb2JqZWN0XTogTmV3IHZhbHVlcyBvYmplY3RcbiAgICAqL1xuICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChleGlzdGluZyA9IHt9LCBpbmNvbWluZywgaW5oZXJpdCwgZGVmYXVsdFByb3AgPSAnY3VycmVudCcsIHNjb3BlKSB7XG4gICAgICAgIHZhciBwcmVwcm9jZXNzZWQgPSBwcmVwcm9jZXNzKGV4aXN0aW5nLCBpbmNvbWluZywgc2NvcGUsIGRlZmF1bHRQcm9wKTtcblxuICAgICAgICBlYWNoKHByZXByb2Nlc3NlZCwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IGV4aXN0aW5nW2tleV0gPyB1dGlscy5jb3B5KGV4aXN0aW5nW2tleV0pIDogdXRpbHMuY29weShkZWZhdWx0VmFsdWUpLFxuICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID0gKHZhbHVlLmNoaWxkcmVuICE9PSB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRBY3Rpb25WYWx1ZSA9IGluaGVyaXQuYWN0aW9uID8gaW5oZXJpdC5hY3Rpb24uZ2V0RGVmYXVsdFZhbHVlKCkgOiB7fTtcblxuICAgICAgICAgICAgdmFsdWUuYWN0aW9uID0gdmFsdWUud2F0Y2ggPyB3YXRjaGVyIDogaW5oZXJpdC5hY3Rpb247XG5cbiAgICAgICAgICAgIGVhY2goZGVmYXVsdEFjdGlvblZhbHVlLCAocHJvcE5hbWUsIGRlZmF1bHRQcm9wKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVbcHJvcE5hbWVdID0gKGluaGVyaXQuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICYmICF2YWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpID8gaW5oZXJpdFtwcm9wTmFtZV0gOiBkZWZhdWx0UHJvcDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBlYWNoKHZhbHVlLCAodmFsdWVOYW1lLCB2YWx1ZVByb3ApID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwcm9wZXJ0eSBpcyBub3QgdW5kZWZpbmVkIG9yIGEgbnVtYmVyLCByZXNvbHZlXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkICYmICFpc051bSh2YWx1ZVByb3ApICYmICFoYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3AgPSByZXNvbHZlKHZhbHVlTmFtZSwgdmFsdWVQcm9wLCBuZXdWYWx1ZSwgc2NvcGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlW3ZhbHVlTmFtZV0gPSB2YWx1ZVByb3A7XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgaW50ZXJuYWwgdGFyZ2V0IGlmIHRoaXMgcHJvcGVydHkgaXMgJ3RvJ1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZU5hbWUgPT09ICd0bycpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudGFyZ2V0ID0gbmV3VmFsdWUudG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG5ld1ZhbHVlLm9yaWdpbiA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICBuZXdWYWx1ZS5oYXNSYW5nZSA9IChpc051bShuZXdWYWx1ZS5taW4pICYmIGlzTnVtKG5ld1ZhbHVlLm1heCkpID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgICAgICBleGlzdGluZ1trZXldID0gbmV3VmFsdWU7XG4gICAgICAgICAgICBzY29wZS51cGRhdGVPcmRlcihrZXksIHV0aWxzLmlzU3RyaW5nKG5ld1ZhbHVlLndhdGNoKSwgaGFzQ2hpbGRyZW4pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZXhpc3Rpbmc7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rvci92YWx1ZS1vcGVyYXRpb25zLmpzXG4gKiovIiwidmFyIFJvbGUgPSByZXF1aXJlKCcuL1JvbGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgUm9sZSh7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pbml0KSB7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vblN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmcmFtZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLm9uRnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMub25GcmFtZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMub25VcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvZGVmYXVsdFJvbGUuanNcbiAqKi8iLCJjbGFzcyBDb250cm9scyB7XG4gICAgY29uc3RydWN0b3IoYWN0b3IsIGFjdGlvbiwgaGFzU3RhcnRlZCkge1xuICAgICAgICB0aGlzLmFjdG9yID0gYWN0b3I7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuXG4gICAgICAgIGlmIChoYXNTdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5iaW5kQWN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoaW5wdXQpIHtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuYmluZEFjdGlvbigpO1xuICAgICAgICB0aGlzLmFjdG9yLnN0YXJ0Qm91bmQodGhpcy5pZCwgaW5wdXQpO1xuICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmFjdG9yLnVuYmluZEFjdGlvbih0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5hY3Rpb24uZGVhY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24uZGVhY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5kZWFjdGl2YXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRoZW4oLi4uYXJncykge1xuICAgICAgICB0aGlzLmFjdG9yLnRoZW4oLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJpbmRBY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdG9yLmJpbmRBY3Rpb24odGhpcy5hY3Rpb24sIHRoaXMuaWQpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb250cm9scztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb250cm9scy9Db250cm9scy5qc1xuICoqLyIsIi8qXG4gICAgRWFzaW5nIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgXG4gICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgICAgIFxuICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgICAgICBcbiAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgICAgIFxuICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIEVhc2luZyA9IHJlcXVpcmUoJy4vRWFzaW5nJyksXG4gICAgZWFzaW5nRnVuY3Rpb24sXG4gICAgXG4gICAgLy8gR2VuZXJhdGUgZWFzaW5nIGZ1bmN0aW9uIHdpdGggcHJvdmlkZWQgcG93ZXJcbiAgICBnZW5lcmF0ZVBvd2VyRWFzaW5nID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgcG93ZXIpO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgICAgICBcbiAgICAgICAgT24gaW5pdCwgd2UgdXNlIEVhc2luZ0Z1bmN0aW9uLm1pcnJvciBhbmQgLnJldmVyc2UgdG8gZ2VuZXJhdGUgZWFzZUluT3V0IGFuZFxuICAgICAgICBlYXNlT3V0IGZ1bmN0aW9ucyByZXNwZWN0aXZlbHkuXG4gICAgKi9cbiAgICBiYXNlRWFzaW5nID0ge1xuICAgICAgICBjaXJjOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHByb2dyZXNzKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGJhY2s6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgdmFyIHN0cmVuZ3RoID0gMS41O1xuXG4gICAgICAgICAgICByZXR1cm4gKHByb2dyZXNzICogcHJvZ3Jlc3MpICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4vLyBHZW5lcmF0ZSBwb3dlciBlYXNpbmcgZWFzaW5nXG5bJ2Vhc2UnLCAnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChlYXNpbmdOYW1lLCBpKSB7XG4gICAgYmFzZUVhc2luZ1tlYXNpbmdOYW1lXSA9IGdlbmVyYXRlUG93ZXJFYXNpbmcoaSArIDIpO1xufSk7XG5cbi8vIEdlbmVyYXRlIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5mb3IgKHZhciBrZXkgaW4gYmFzZUVhc2luZykge1xuICAgIGlmIChiYXNlRWFzaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSBuZXcgRWFzaW5nKGJhc2VFYXNpbmdba2V5XSk7XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luJ10gPSBlYXNpbmdGdW5jdGlvbi5pbjtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnT3V0J10gPSBlYXNpbmdGdW5jdGlvbi5vdXQ7XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luT3V0J10gPSBlYXNpbmdGdW5jdGlvbi5pbk91dDtcbiAgICB9XG59XG5cbi8qXG4gICAgTGluZWFyIGVhc2luZyBhZGp1c3RtZW50XG4gICAgXG4gICAgVGhlIGRlZmF1bHQgZWFzaW5nIG1ldGhvZCwgbm90IGFkZGVkIHdpdGggLmV4dGVuZCBhcyBpdCBoYXMgbm8gT3V0IG9yIEluT3V0XG4gICAgdmFyaWF0aW9uLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMC0xXG4gICAgQHJldHVybiBbbnVtYmVyXTogVW5hZGp1c3RlZCBwcm9ncmVzc1xuKi9cbmJhc2VFYXNpbmcubGluZWFyID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgcmV0dXJuIHByb2dyZXNzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRWFzaW5nO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvdHdlZW4vcHJlc2V0LWVhc2luZy5qc1xuICoqLyIsInZhciBDb250cm9scyA9IHJlcXVpcmUoJy4uLy4uL2NvbnRyb2xzL0NvbnRyb2xzJyk7XG5cbmNsYXNzIFR3ZWVuQ29udHJvbHMgZXh0ZW5kcyBDb250cm9scyB7XG4gICAgbG9vcCgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24ucmVzZXRWYWx1ZXModGhpcy5hY3Rvcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHlveW8oKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLnJldmVyc2VWYWx1ZXModGhpcy5hY3Rvcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZsaXAoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLmZsaXBWYWx1ZXModGhpcy5hY3Rvcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNlZWsocHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24uZWxhcHNlZCA9IHRoaXMuYWN0aW9uLmR1cmF0aW9uICogcHJvZ3Jlc3M7XG5cbiAgICAgICAgaWYgKCF0aGlzLmFjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24uYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0b3IucHJvY2Vzcy5maXJlKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5kZWFjdGl2YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW5Db250cm9scztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL3R3ZWVuL1R3ZWVuQ29udHJvbHMuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi8uLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyksXG4gICAgc3BlZWRQZXJGcmFtZSA9IGNhbGMuc3BlZWRQZXJGcmFtZTtcblxuLypcbiAgICBBZGQgY29yZSBwaHlzaWNzIHNpbXVsYXRpb25zXG4qL1xudmFyIHNpbXVsYXRpb25zID0ge1xuICAgIC8qXG4gICAgICAgIFZlbG9jaXR5XG4gICAgICAgIFxuICAgICAgICBUaGUgZGVmYXVsdCAucnVuKCkgc2ltdWxhdGlvbi5cbiAgICAgICAgXG4gICAgICAgIEFwcGxpZXMgYW55IHNldCBkZWNlbGVyYXRpb24gYW5kIGFjY2VsZXJhdGlvbiB0byBleGlzdGluZyB2ZWxvY2l0eVxuICAgICovXG4gICAgdmVsb2NpdHk6IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFsdWUudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eSAtIHNwZWVkUGVyRnJhbWUodmFsdWUuZGVjZWxlcmF0aW9uLCBkdXJhdGlvbikgKyBzcGVlZFBlckZyYW1lKHZhbHVlLmFjY2VsZXJhdGlvbiwgZHVyYXRpb24pO1xuXG4gICAgICAgIHJldHVybiBzaW11bGF0aW9ucy5mcmljdGlvbih2YWx1ZSwgZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBHbGlkZVxuICAgICAgICBcbiAgICAgICAgRW11bGF0ZXMgdG91Y2ggZGV2aWNlIHNjcm9sbGluZyBlZmZlY3RzIHdpdGggZXhwb25lbnRpYWwgZGVjYXlcbiAgICAgICAgaHR0cDovL2FyaXlhLm9maWxhYnMuY29tLzIwMTMvMTEvamF2YXNjcmlwdC1raW5ldGljLXNjcm9sbGluZy1wYXJ0LTIuaHRtbFxuICAgICovXG4gICAgZ2xpZGU6IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24sIHN0YXJ0ZWQpIHtcbiAgICAgICAgdmFyIHRpbWVVbnRpbEZpbmlzaGVkID0gLSB1dGlscy5jdXJyZW50VGltZSgpIC0gc3RhcnRlZCxcbiAgICAgICAgICAgIGRlbHRhID0gLSB2YWx1ZS50byAqIE1hdGguZXhwKHRpbWVVbnRpbEZpbmlzaGVkIC8gdmFsdWUudGltZUNvbnN0YW50KTtcblxuICAgICAgICByZXR1cm4gKHZhbHVlLnRvICsgZGVsdGEpIC0gdmFsdWUuY3VycmVudDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgRnJpY3Rpb25cblxuICAgICAgICBBcHBseSBmcmljdGlvbiB0byB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICBUT0RPOiBNYWtlIHRoaXMgZnJhbWVyYXRlLWluZGVwZW5kZW50XG4gICAgKi9cbiAgICBmcmljdGlvbjogZnVuY3Rpb24gKHZhbHVlLCBkdXJhdGlvbikge1xuICAgICAgICB2YXIgbmV3VmVsb2NpdHkgPSBzcGVlZFBlckZyYW1lKHZhbHVlLnZlbG9jaXR5LCBkdXJhdGlvbikgKiAoMSAtIHZhbHVlLmZyaWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gY2FsYy5zcGVlZFBlclNlY29uZChuZXdWZWxvY2l0eSwgZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICBzcHJpbmc6IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gdmFsdWUudG8gLSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IGRpc3RhbmNlICogc3BlZWRQZXJGcmFtZSh2YWx1ZS5zcHJpbmcsIGR1cmF0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBzaW11bGF0aW9ucy5mcmljdGlvbih2YWx1ZSwgZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICBib3VuY2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSAwLFxuICAgICAgICAgICAgdG8gPSB2YWx1ZS50byxcbiAgICAgICAgICAgIGN1cnJlbnQgPSB2YWx1ZS5jdXJyZW50LFxuICAgICAgICAgICAgYm91bmNlID0gdmFsdWUuYm91bmNlO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgd2UncmUgdXNpbmcgZ2xpZGUgc2ltdWxhdGlvbiB3ZSBoYXZlIHRvIGZsaXAgb3VyIHRhcmdldCB0b29cbiAgICAgICAgaWYgKHZhbHVlLnNpbXVsYXRlID09PSAnZ2xpZGUnKSB7XG4gICAgICAgICAgICBkaXN0YW5jZSA9IHRvIC0gY3VycmVudDtcbiAgICAgICAgICAgIHZhbHVlLnRvID0gY3VycmVudCAtIChkaXN0YW5jZSAqIGJvdW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB2YWx1ZS52ZWxvY2l0eSAqPSAtIGJvdW5jZTtcbiAgICB9LFxuXG4gICAgY2FwdHVyZTogZnVuY3Rpb24gKHZhbHVlLCB0YXJnZXQpIHtcbiAgICAgICAgdmFsdWUudG8gPSB0YXJnZXQ7XG4gICAgICAgIHZhbHVlLnNpbXVsYXRlID0gJ3NwcmluZyc7XG4gICAgICAgIHZhbHVlLmNhcHR1cmUgPSB2YWx1ZS5taW4gPSB2YWx1ZS5tYXggPSB1bmRlZmluZWQ7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaW11bGF0aW9ucztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvc2ltdWxhdGUvc2ltdWxhdGlvbnMuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHRoZUxvb3AgPSByZXF1aXJlKCcuL2xvb3AuanMnKSxcbiAgICBQcm9jZXNzTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVJZHMgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVQcm9jZXNzZXMgPSB7fTtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlUXVldWUgPSBbXTtcbiAgICAgICAgdGhlTG9vcC5zZXRDYWxsYmFjayh0aGlzLCB0aGlzLmZpcmVBY3RpdmUpO1xuICAgIH07XG4gICAgXG5Qcm9jZXNzTWFuYWdlci5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLypcbiAgICAgICAgW2ludF06IFVzZWQgZm9yIHByb2Nlc3MgSURcbiAgICAqL1xuICAgIHByb2Nlc3NDb3VudGVyOiAwLFxuICAgIFxuICAgIC8qXG4gICAgICAgIFtpbnRdOiBOdW1iZXIgb2YgYWN0aXZlIHByb2Nlc3Nlc1xuICAgICovXG4gICAgYWN0aXZlQ291bnQ6IDAsXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBwcm9jZXNzIHdpdGggYSBnaXZlbiBpbmRleFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleCBvZiBwcm9jZXNzXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cbiAgICBnZXRQcm9jZXNzOiBmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVQcm9jZXNzZXNbaV07XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgbnVtYmVyIG9mIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2ludF06IE51bWJlciBvZiBhY3RpdmUgcHJvY2Vzc2VzXG4gICAgKi9cbiAgICBnZXRBY3RpdmVDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVDb3VudDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBhY3RpdmUgdG9rZW5zXG5cbiAgICAgICAgQHJldHVybiBbYXJyYXldOiBBY3RpdmUgdG9rZW5zXG4gICAgKi9cbiAgICBnZXRBY3RpdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlSWRzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBsZW5ndGggb2YgdGhlIGRlYWN0aXZhdGUgcXVldWVcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2ludF06IExlbmd0aCBvZiBxdWV1ZVxuICAgICovXG4gICAgZ2V0UXVldWVMZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEZpcmUgYWxsIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogVGltZXN0YW1wIG9mIGV4ZWN1dGluZyBmcmFtZXNcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBUaW1lIHNpbmNlIHByZXZpb3VzIGZyYW1lXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGFjdGl2ZSBwcm9jZXNzZXMgZm91bmRcbiAgICAqL1xuICAgIGZpcmVBY3RpdmU6IGZ1bmN0aW9uIChmcmFtZXN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBwcm9jZXNzLFxuICAgICAgICAgICAgYWN0aXZlQ291bnQgPSAwLFxuICAgICAgICAgICAgYWN0aXZlSWRzID0gW10sXG4gICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAvLyBQdXJnZSBhbmQgY2hlY2sgYWN0aXZlIGNvdW50IGJlZm9yZSBleGVjdXRpb25cbiAgICAgICAgdGhpcy5wdXJnZSgpO1xuICAgICAgICBhY3RpdmVDb3VudCA9IHRoaXMuZ2V0QWN0aXZlQ291bnQoKTtcbiAgICAgICAgYWN0aXZlSWRzID0gdGhpcy5nZXRBY3RpdmUoKTtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWN0aXZlIHByb2Nlc3NlcyBhbmQgZmlyZSBjYWxsYmFja1xuICAgICAgICBmb3IgKDsgaSA8IGFjdGl2ZUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHByb2Nlc3MgPSB0aGlzLmdldFByb2Nlc3MoYWN0aXZlSWRzW2ldKTtcblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmZpcmUoZnJhbWVzdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXB1cmdlIGFuZCByZWNoZWNrIGFjdGl2ZSBjb3VudCBhZnRlciBleGVjdXRpb25cbiAgICAgICAgdGhpcy5wdXJnZSgpO1xuICAgICAgICBhY3RpdmVDb3VudCA9IHRoaXMuZ2V0QWN0aXZlQ291bnQoKTtcblxuICAgICAgICAvLyBSZXR1cm4gdHJ1ZSBpZiB3ZSBzdGlsbCBoYXZlIGFjdGl2ZSBwcm9jZXNzZXMsIG9yIGZhbHNlIGlmIG5vbmVcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUNvdW50ID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgUmVnaXN0ZXIgYSBuZXcgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtQcm9jZXNzXVxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBJbmRleCBvZiBwcm9jZXNzIHRvIGJlIHVzZWQgYXMgSURcbiAgICAqL1xuICAgIHJlZ2lzdGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NDb3VudGVyKys7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBBY3RpdmF0ZSBhIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogSW5kZXggb2YgYWN0aXZlIHByb2Nlc3NcbiAgICAqL1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAocHJvY2VzcywgaSkge1xuICAgICAgICB2YXIgcXVldWVJbmRleCA9IHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLmluZGV4T2YoaSksXG4gICAgICAgICAgICBpc1F1ZXVlZCA9IChxdWV1ZUluZGV4ID4gLTEpLFxuICAgICAgICAgICAgaXNBY3RpdmUgPSAodGhpcy5hY3RpdmVJZHMuaW5kZXhPZihpKSA+IC0xKTtcblxuICAgICAgICAvLyBSZW1vdmUgZnJvbSBkZWFjdGl2YXRlUXVldWUgaWYgaW4gdGhlcmVcbiAgICAgICAgaWYgKGlzUXVldWVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UocXVldWVJbmRleCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdG8gYWN0aXZlIHByb2Nlc3NlcyBhcnJheSBpZiBub3QgYWxyZWFkeSBpbiB0aGVyZVxuICAgICAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUlkcy5wdXNoKGkpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQcm9jZXNzZXNbaV0gPSBwcm9jZXNzO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVDb3VudCsrO1xuICAgICAgICAgICAgdGhlTG9vcC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEZWFjdGl2YXRlIGEgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleCBvZiBwcm9jZXNzIHRvIGFkZCB0byBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlOiBmdW5jdGlvbiAoaSkge1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGVRdWV1ZS5wdXNoKGkpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgUHVyZ2UgdGhlIGRlYWN0aXZhdGUgcXVldWVcbiAgICAqL1xuICAgIHB1cmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBxdWV1ZUxlbmd0aCA9IHRoaXMuZ2V0UXVldWVMZW5ndGgoKSxcbiAgICAgICAgICAgIGFjdGl2ZUlkSW5kZXggPSAwLFxuICAgICAgICAgICAgaWRUb0RlbGV0ZSA9IDA7XG5cbiAgICAgICAgd2hpbGUgKHF1ZXVlTGVuZ3RoLS0pIHtcbiAgICAgICAgICAgIGlkVG9EZWxldGUgPSB0aGlzLmRlYWN0aXZhdGVRdWV1ZVtxdWV1ZUxlbmd0aF07XG4gICAgICAgICAgICBhY3RpdmVJZEluZGV4ID0gdGhpcy5hY3RpdmVJZHMuaW5kZXhPZihpZFRvRGVsZXRlKTtcblxuICAgICAgICAgICAgLy8gSWYgcHJvY2VzcyBpbiBhY3RpdmUgbGlzdCBkZWFjdGl2YXRlXG4gICAgICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ291bnQtLTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVQcm9jZXNzZXNbaWRUb0RlbGV0ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlID0gW107XG4gICAgfVxuICAgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgUHJvY2Vzc01hbmFnZXIoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm9jZXNzL21hbmFnZXIuanNcbiAqKi8iLCIvKlxuICAgIEJlemllciBmdW5jdGlvbiBnZW5lcmF0b3JcbiAgICAgICAgXG4gICAgR2HDq3RhbiBSZW5hdWRlYXUncyBCZXppZXJFYXNpbmdcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICAgWW91J3JlIGEgaGVyb1xuICAgIFxuICAgIFVzZVxuICAgIFxuICAgICAgICB2YXIgZWFzZU91dCA9IG5ldyBCZXppZXIoLjE3LC42NywuODMsLjY3KSxcbiAgICAgICAgICAgIHggPSBlYXNlT3V0KDAuNSk7IC8vIHJldHVybnMgMC42MjcuLi5cbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIE5FV1RPTl9JVEVSQVRJT05TID0gOCxcbiAgICBORVdUT05fTUlOX1NMT1BFID0gMC4wMDEsXG4gICAgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxLFxuICAgIFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TID0gMTAsXG4gICAgS19TUExJTkVfVEFCTEVfU0laRSA9IDExLFxuICAgIEtfU0FNUExFX1NURVBfU0laRSA9IDEuMCAvIChLX1NQTElORV9UQUJMRV9TSVpFIC0gMS4wKSxcbiAgICBGTE9BVF8zMl9TVVBQT1JURUQgPSAodHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcpLFxuICAgIFxuICAgIGEgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgICAgIHJldHVybiAxLjAgLSAzLjAgKiBhMiArIDMuMCAqIGExO1xuICAgIH0sXG4gICAgXG4gICAgYiA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGEyIC0gNi4wICogYTE7XG4gICAgfSxcbiAgICBcbiAgICBjID0gZnVuY3Rpb24gKGExKSB7XG4gICAgICAgIHJldHVybiAzLjAgKiBhMTtcbiAgICB9LFxuXG4gICAgZ2V0U2xvcGUgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgICAgIHJldHVybiAzLjAgKiBhKGExLCBhMikgKiB0ICogdCArIDIuMCAqIGIoYTEsIGEyKSAqIHQgKyBjKGExKTtcbiAgICB9LFxuXG4gICAgY2FsY0JlemllciA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuICgoYShhMSwgYTIpICogdCArIGIoYTEsIGEyKSkgKiB0ICsgYyhhMSkpICogdDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEJlemllciBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgQmV6aWVyID0gZnVuY3Rpb24gKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICAgICAgICB2YXIgc2FtcGxlVmFsdWVzID0gRkxPQVRfMzJfU1VQUE9SVEVEID8gbmV3IEZsb2F0MzJBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSA6IG5ldyBBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSxcbiAgICAgICAgICAgIF9wcmVjb21wdXRlZCA9IGZhbHNlLFxuICAgIFxuICAgICAgICAgICAgYmluYXJ5U3ViZGl2aWRlID0gZnVuY3Rpb24gKGFYLCBhQSwgYUIpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFgsIGN1cnJlbnRULCBpID0gMDtcblxuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgICAgIG5ld3RvblJhcGhzb25JdGVyYXRlID0gZnVuY3Rpb24gKGFYLCBhR3Vlc3NUKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xvcGUgPSAwLjAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICAgICAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYWxjU2FtcGxlVmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgS19TUExJTkVfVEFCTEVfU0laRTsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIEtfU0FNUExFX1NURVBfU0laRSwgbVgxLCBtWDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZ2V0VEZvclggPSBmdW5jdGlvbiAoYVgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNhbXBsZSA9IDEsXG4gICAgICAgICAgICAgICAgICAgIGxhc3RTYW1wbGUgPSBLX1NQTElORV9UQUJMRV9TSVpFIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgZGlzdCA9IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgZ3Vlc3NGb3JUID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU2xvcGUgPSAwLjA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC0tY3VycmVudFNhbXBsZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSsxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgICAgICAgICAgICAgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgc2xvcGUgaXMgZ3JlYXRlciB0aGFuIG1pblxuICAgICAgICAgICAgICAgIGlmIChpbml0aWFsU2xvcGUgPj0gTkVXVE9OX01JTl9TTE9QRSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCk7XG4gICAgICAgICAgICAgICAgLy8gU2xvcGUgaXMgZXF1YWwgdG8gbWluXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgICAgICAgICAgIC8vIFNsb3BlIGlzIGxlc3MgdGhhbiBtaW5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsgS19TQU1QTEVfU1RFUF9TSVpFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcmVjb21wdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF9wcmVjb21wdXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKG1YMSAhPSBtWTEgfHwgbVgyICE9IG1ZMikge1xuICAgICAgICAgICAgICAgICAgICBjYWxjU2FtcGxlVmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICBHZW5lcmF0ZWQgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBSZXR1cm5zIHZhbHVlIDAtMSBiYXNlZCBvbiBYXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgZiA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICAgICAgICAgIHZhciByZXR1cm5WYWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmICghX3ByZWNvbXB1dGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZWNvbXB1dGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgbGluZWFyIGdyYWRpZW50LCByZXR1cm4gWCBhcyBUXG4gICAgICAgICAgICAgICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gYVg7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIGF0IHN0YXJ0LCByZXR1cm4gMFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBhdCBlbmQsIHJldHVybiAxXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDE7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGNhbGNCZXppZXIoZ2V0VEZvclgoYVgpLCBtWTEsIG1ZMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0gQmV6aWVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvdHdlZW4vQmV6aWVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvc3BsaXQtY29tbWEtZGVsaW1pdGVkLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tYnJlYWsuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHBvc2l0aW9uVGVybXMgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5JykucG9zaXRpb25zLFxuICAgIG51bVBvc2l0aW9uVGVybXMgPSBwb3NpdGlvblRlcm1zLmxlbmd0aCxcblxuICAgIFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZScsXG4gICAgU0NBTEUgPSAnc2NhbGUnLFxuICAgIFJPVEFURSA9ICdyb3RhdGUnLFxuICAgIHRlcm1zID0ge1xuICAgICAgICBmdW5jczogWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV0sXG4gICAgICAgIHByb3BzOiB7fSAvLyBvYmplY3RzIGFyZSBmYXN0ZXIgYXQgZGlyZWN0IGxvb2t1cHNcbiAgICB9O1xuXG4vLyBDcmVhdGUgdHJhbnNmb3JtIHRlcm1zXG4oZnVuY3Rpb24gKCkge1xuICAgIHZhciBmdW5jcyA9IHRlcm1zLmZ1bmNzLFxuICAgICAgICBwcm9wcyA9IHRlcm1zLnByb3BzLFxuICAgICAgICBudW1GdW5jcyA9IGZ1bmNzLmxlbmd0aCxcbiAgICAgICAgaSA9IDAsXG5cbiAgICAgICAgY3JlYXRlUHJvcHMgPSBmdW5jdGlvbiAoZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHZhciBqID0gMDtcblxuICAgICAgICAgICAgZm9yICg7IGogPCBudW1Qb3NpdGlvblRlcm1zOyBqKyspIHtcbiAgICAgICAgICAgICAgICBwcm9wc1tmdW5jTmFtZSArIHBvc2l0aW9uVGVybXNbal1dID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICBcbiAgICAvLyBNYW51YWxseSBhZGQgc2tldyBhbmQgdHJhbnNmb3JtIHBlcnNwZWN0aXZlICBcbiAgICBwcm9wc1tST1RBVEVdID0gcHJvcHNbU0NBTEVdID0gcHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG4gICAgXG4gICAgLy8gTG9vcCBvdmVyIGVhY2ggZnVuY3Rpb24gbmFtZSBhbmQgY3JlYXRlIGZ1bmN0aW9uL3Byb3BlcnR5IHRlcm1zXG4gICAgZm9yICg7IGkgPCBudW1GdW5jczsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BzKGZ1bmNzW2ldKTtcbiAgICB9XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRlcm1zO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL2Nzcy90cmFuc2Zvcm0tZGljdGlvbmFyeS5qc1xuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuXG4gICAgU1RSSU5HID0gJ3N0cmluZycsXG4gICAgXG4gICAgLypcbiAgICAgICAgVHJhbnNsYXRlIG91ciBtYXBMaW5rIHZhbHVlIGludG8gbWFwVG9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZSBmcm9tIGxpbmtlZCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW1ZhbHVlIHx8IG9iamVjdF06IExpbmtlZCB2YWx1ZSBvciBlbXB0eSBvYmplY3QgaWYgd2UncmUgbGlua2luZyB0byBpbnB1dFxuICAgICAgICBAcGFyYW0gW2FycmF5XTogTGlzdCBvZiBudW1iZXJzIHJlbGF0aW5nIHRvIGxpbmtlZCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW2FycmF5XTogTGlzdCBvZiBudW1iZXJzIHJlbGF0aW5nIHRvIHRoaXMgdmFsdWVcbiAgICAqL1xuICAgIGZpbmRNYXBwZWRWYWx1ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgbGlua2VkVmFsdWUsIHRvVmFsdWUsIG1hcExpbmssIG1hcFRvKSB7XG4gICAgICAgIHZhciBtYXBMZW5ndGggPSBtYXBMaW5rLmxlbmd0aCxcbiAgICAgICAgICAgIGkgPSAxLFxuICAgICAgICAgICAgbGFzdExpbmtWYWx1ZSxcbiAgICAgICAgICAgIHRoaXNMaW5rVmFsdWUsXG4gICAgICAgICAgICBsYXN0VG9WYWx1ZSxcbiAgICAgICAgICAgIHRoaXNUb1ZhbHVlO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbWFwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIEFzc2lnbiB2YWx1ZXMgZnJvbSBhcnJheSwgb3IgaWYgdGhleSdyZSBzdHJpbmdzLCBsb29rIGZvciB0aGVtIGluIGxpbmtlZFZhbHVlXG4gICAgICAgICAgICBsYXN0TGlua1ZhbHVlID0gKHR5cGVvZiBtYXBMaW5rW2kgLSAxXSA9PT0gU1RSSU5HKSA/IGxpbmtlZFZhbHVlW21hcExpbmtbaSAtIDFdXSA6IG1hcExpbmtbaSAtIDFdO1xuICAgICAgICAgICAgdGhpc0xpbmtWYWx1ZSA9ICh0eXBlb2YgbWFwTGlua1tpXSA9PT0gU1RSSU5HKSA/IGxpbmtlZFZhbHVlW21hcExpbmtbaV1dIDogbWFwTGlua1tpXTtcbiAgICAgICAgICAgIGxhc3RUb1ZhbHVlID0gKHR5cGVvZiBtYXBUb1tpIC0gMV0gPT09IFNUUklORykgPyB0b1ZhbHVlW21hcFRvW2kgLSAxXV0gOiBtYXBUb1tpIC0gMV07XG4gICAgICAgICAgICB0aGlzVG9WYWx1ZSA9ICh0eXBlb2YgbWFwVG9baV0gPT09IFNUUklORykgPyB0b1ZhbHVlW21hcFRvW2ldXSA6IG1hcFRvW2ldO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSd2ZSBnb25lIHBhc3Qgb3VyIGNhbGN1bGF0ZWQgdmFsdWUsIG9yIGlmIHdlJ3JlIGF0IHRoZSBlbmQgb2YgdGhlIGFycmF5XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgPCB0aGlzTGlua1ZhbHVlIHx8IGkgPT09IG1hcExlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IGNhbGMudmFsdWUoY2FsYy5yZXN0cmljdGVkKGNhbGMucHJvZ3Jlc3MobmV3VmFsdWUsIGxhc3RMaW5rVmFsdWUsIHRoaXNMaW5rVmFsdWUpLCAwLCAxKSwgbGFzdFRvVmFsdWUsIHRoaXNUb1ZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgIH07XG5cbmNsYXNzIFdhdGNoIGV4dGVuZHMgQWN0aW9uIHtcbiAgICAvKlxuICAgICAgICBQcm9jZXNzIHRoaXMgdmFsdWVcbiAgICAgICAgXG4gICAgICAgIEZpcnN0IGNoZWNrIGlmIHRoaXMgdmFsdWUgZXhpc3RzIGFzIGEgVmFsdWUsIGlmIG5vdFxuICAgICAgICBjaGVjayB3aXRoaW4gSW5wdXQgKGlmIHdlIGhhdmUgb25lKVxuICAgICAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbQWN0b3JdXG4gICAgICAgIEBwYXJhbSBbVmFsdWVdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IG9mIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZVxuICAgICovXG4gICAgcHJvY2VzcyhhY3RvciwgdmFsdWUsIGtleSkge1xuICAgICAgICB2YXIgdmFsdWVzID0gYWN0b3IudmFsdWVzLFxuICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZS5jdXJyZW50LFxuICAgICAgICAgICAgd2F0Y2hlZEtleSA9IHZhbHVlLndhdGNoLFxuICAgICAgICAgICAgd2F0Y2hlZFZhbHVlID0gdmFsdWVzW3dhdGNoZWRLZXldID8gdmFsdWVzW3dhdGNoZWRLZXldIDoge30sXG4gICAgICAgICAgICBpbnB1dE9mZnNldCA9IGFjdG9yLmlucHV0T2Zmc2V0O1xuXG4gICAgICAgIC8vIEZpcnN0IGxvb2sgYXQgQWN0aW9uIGFuZCBjaGVjayB2YWx1ZSBpc24ndCBsaW5raW5nIGl0c2VsZlxuICAgICAgICBpZiAod2F0Y2hlZFZhbHVlLmN1cnJlbnQgIT09IHVuZGVmaW5lZCAmJiBrZXkgIT09IHdhdGNoZWRLZXkpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gd2F0Y2hlZFZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIFxuICAgICAgICAvLyBUaGVuIGNoZWNrIHZhbHVlcyBpbiBJbnB1dFxuICAgICAgICB9IGVsc2UgaWYgKGlucHV0T2Zmc2V0ICYmIGlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KHdhdGNoZWRLZXkpKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlLm9yaWdpbiArIChpbnB1dE9mZnNldFt3YXRjaGVkS2V5XSAqIHZhbHVlLmFtcCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgbWFwRnJvbSBhbmQgbWFwVG8gcHJvcGVydGllcywgdHJhbnNsYXRlIHRoZSBuZXcgdmFsdWVcbiAgICAgICAgaWYgKHZhbHVlLm1hcEZyb20gJiYgdmFsdWUubWFwVG8pIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gZmluZE1hcHBlZFZhbHVlKG5ld1ZhbHVlLCB3YXRjaGVkVmFsdWUsIHZhbHVlLCB2YWx1ZS5tYXBGcm9tLCB2YWx1ZS5tYXBUbyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhdGNoO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvV2F0Y2guanNcbiAqKi8iLCIvKlxuICAgIFRoZSBsb29wXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBUaW1lciA9IHJlcXVpcmUoJy4vdGltZXIuanMnKSxcbiAgICB0aWNrID0gcmVxdWlyZSgnLi90aWNrLmpzJyksXG4gICAgTG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50aW1lciA9IG5ldyBUaW1lcigpO1xuICAgIH07XG4gICAgXG5Mb29wLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBbYm9vbGVhbl06IEN1cnJlbnQgc3RhdHVzIG9mIGFuaW1hdGlvbiBsb29wXG4gICAgKi9cbiAgICBpc1J1bm5pbmc6IGZhbHNlLFxuICAgIFxuICAgIC8qXG4gICAgICAgIEZpcmUgYWxsIGFjdGl2ZSBwcm9jZXNzZXMgb25jZSBwZXIgZnJhbWVcbiAgICAqL1xuICAgIGZyYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmcmFtZXN0YW1wID0gc2VsZi50aW1lci51cGRhdGUoKSwgLy8gQ3VycmVudGx5IGp1c3QgbWVhc3VyaW5nIGluIG1zIC0gd2lsbCBsb29rIGludG8gaGktcmVzIHRpbWVzdGFtcHNcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZSA9IHNlbGYuY2FsbGJhY2suY2FsbChzZWxmLnNjb3BlLCBmcmFtZXN0YW1wLCBzZWxmLnRpbWVyLmdldEVsYXBzZWQoKSk7XG5cbiAgICAgICAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZnJhbWUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RhcnQgbG9vcFxuICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlJ3JlIG5vdCBhbHJlYWR5IHJ1bm5pbmcgYSBsb29wXG4gICAgICAgIGlmICghdGhpcy5pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIuY2xvY2soKTtcbiAgICAgICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZnJhbWUoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RvcCB0aGUgbG9vcFxuICAgICovXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU2V0IHRoZSBjYWxsYmFjayB0byBydW4gZXZlcnkgZnJhbWVcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbT2JqZWN0XTogRXhlY3V0aW9uIGNvbnRleHRcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IENhbGxiYWNrIHRvIGZpcmVcbiAgICAqL1xuICAgIHNldENhbGxiYWNrOiBmdW5jdGlvbiAoc2NvcGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IExvb3AoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm9jZXNzL2xvb3AuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzLmpzJyksXG5cbiAgICBtYXhFbGFwc2VkID0gMzMsXG4gICAgVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IDE2Ljc7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHV0aWxzLmN1cnJlbnRUaW1lKCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfTtcblxuVGltZXIucHJvdG90eXBlID0ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHV0aWxzLmN1cnJlbnRUaW1lKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IE1hdGgubWluKHRoaXMuY3VycmVudCAtIHRoaXMucHJldiwgbWF4RWxhcHNlZCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgICB9LFxuXG4gICAgZ2V0RWxhcHNlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGFwc2VkO1xuICAgIH0sXG4gICAgXG4gICAgY2xvY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb2Nlc3MvdGltZXIuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgXG4gICAgRm9yIElFOC85IEZsaW5zdG9uZXNcblxuICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICBcbiAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICBcbiAgICBNSVQgbGljZW5zZVxuKi9cbnZhciB0aWNrLFxuICAgIGxhc3RUaW1lID0gMCxcbiAgICBoYXNXaW5kb3cgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpO1xuXG5pZiAoIWhhc1dpbmRvdykge1xuICAgIC8vIExvYWQgckFGIHNoaW1cbiAgICB0aWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKSxcbiAgICAgICAgICAgIGlkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcbiAgICAgICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuXG4gICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH07ICBcbiAgICBcbn0gZWxzZSB7XG4gICAgdGljayA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGljaztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm9jZXNzL3RpY2suanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJwb3Btb3Rpb24uZ2xvYmFsLmpzIn0=