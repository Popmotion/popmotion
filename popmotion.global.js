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
	    shadow: __webpack_require__(13),
	    complex: __webpack_require__(14)
	});
	
	/*
	    Predefined roles
	*/
	
	popmotion.attr = __webpack_require__(15);
	popmotion.css = __webpack_require__(16);
	popmotion.svg = __webpack_require__(17);
	popmotion.drawPath = __webpack_require__(18);
	
	module.exports = popmotion;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var valueTypeManager = __webpack_require__(19),
	    _select = __webpack_require__(20),
	    Popmotion = {
	
	    Actor: __webpack_require__(21),
	
	    Input: __webpack_require__(22),
	
	    Iterator: __webpack_require__(23),
	
	    Process: __webpack_require__(24),
	
	    Easing: __webpack_require__(26),
	
	    Role: __webpack_require__(25),
	
	    Action: __webpack_require__(27),
	    Tween: __webpack_require__(28),
	    Simulate: __webpack_require__(29),
	    Track: __webpack_require__(30),
	
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
	
	    calc: __webpack_require__(31)
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
	
	var createDelimited = __webpack_require__(32),
	    getColorValues = __webpack_require__(33),
	    functionCreate = __webpack_require__(34),
	    defaultProps = __webpack_require__(35),
	    terms = __webpack_require__(36).hsl;
	
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
	
	var createDelimited = __webpack_require__(32),
	    getColorValues = __webpack_require__(33),
	    functionCreate = __webpack_require__(34),
	    defaultProps = __webpack_require__(35),
	    colorDefaults = defaultProps.color,
	    terms = __webpack_require__(36).colors;
	
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
	
	var utils = __webpack_require__(37),
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
	
	var createDelimited = __webpack_require__(32),
	    pxDefaults = __webpack_require__(5).defaultProps,
	    splitSpaceDelimited = __webpack_require__(38),
	    terms = __webpack_require__(36).positions;
	
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
	
	var terms = __webpack_require__(36).dimensions,
	    pxDefaults = __webpack_require__(5).defaultProps,
	    createDelimited = __webpack_require__(32),
	    splitSpaceDelimited = __webpack_require__(38);
	
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
	    utils = __webpack_require__(37),
	    pxDefaults = __webpack_require__(5).defaultProps,
	    terms = __webpack_require__(36).shadow,
	    splitSpaceDelimited = __webpack_require__(38),
	    createDelimited = __webpack_require__(32),
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
	
	var utils = __webpack_require__(37),
	    each = utils.each,
	    floatRegex = /(\d[\d\.]*)/g,
	    generateToken = function generateToken(key) {
	    return '${' + key + '}';
	};
	
	module.exports = {
	    test: function test(value) {
	        var matches = value.match(floatRegex);
	        return utils.isArray(matches) && matches.length > 1;
	    },
	
	    template: function template(value) {
	        var counter = 0;
	        return value.replace(floatRegex, function () {
	            return generateToken(counter++);
	        });
	    },
	
	    split: function split(value) {
	        var splitValue = {},
	            matches = value.match(floatRegex),
	            numMatches = matches.length;
	
	        for (var i = 0; i < numMatches; i++) {
	            splitValue[i] = matches[i];
	        }
	
	        return splitValue;
	    },
	
	    combine: function combine(values, template) {
	        var combinedValue = template;
	
	        each(values, function (key, value) {
	            combinedValue = combinedValue.replace(generateToken(key), value);
	        });
	
	        return combinedValue;
	    }
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Role = __webpack_require__(25);
	var each = __webpack_require__(37).each;
	
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Role = __webpack_require__(25);
	var build = __webpack_require__(39);
	var each = __webpack_require__(37).each;
	
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
	    _map: __webpack_require__(40),
	    _typeMap: __webpack_require__(41),
	
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Role = __webpack_require__(25),
	    attrRole = __webpack_require__(15),
	    build = __webpack_require__(42),
	    each = __webpack_require__(37).each;
	
	module.exports = new Role({
	    name: 'svg',
	
	    _map: __webpack_require__(40),
	    _typeMap: __webpack_require__(43),
	
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Role = __webpack_require__(25);
	var attrRole = __webpack_require__(15);
	var each = __webpack_require__(37).each;
	
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
	    _map: __webpack_require__(44),
	
	    _typeMap: {
	        stroke: 'color',
	        d: 'complex'
	    },
	
	    init: function init() {
	        this.pathLength = this.element.getTotalLength();
	    },
	
	    /*
	        Update `path` styles and if `element` is present, set
	        x, y and rotation
	    */
	    update: function update(state) {
	        attrRole.update.call(this, createStyles(state, this.pathLength));
	    }
	});
	
	module.exports = SVGDrawPath;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ModManager = __webpack_require__(45),
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
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Process = __webpack_require__(24),
	    Queue = __webpack_require__(46),
	    utils = __webpack_require__(37),
	    update = __webpack_require__(48),
	    valueOps = __webpack_require__(49),
	    select = __webpack_require__(20),
	
	/*
	    Role imports
	*/
	defaultRole = __webpack_require__(50),
	    cssRole = __webpack_require__(16),
	    svgRole = __webpack_require__(17),
	    drawPathRole = __webpack_require__(18),
	    Action = __webpack_require__(27),
	    each = utils.each;
	
	var Actor = (function () {
	
	    /*
	        @param [object]
	    */
	
	    function Actor() {
	        var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, Actor);
	
	        var props = utils.isString(opts) ? { element: opts } : opts;
	
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
	        if (utils.isString(props.element)) {
	            props.element = select(props.element)[0];
	        }
	
	        this.assignRoles(props.element, props.as, true);
	        this.set(props);
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
	
	        if (input && opts.action.bindInput) {
	            opts.action.bindInput(input);
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
	        this.allActiveActions(function (action) {
	            return action.deactivate();
	        });
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
	        this.allActiveActions(function (action) {
	            return action.activate();
	        });
	        this.process.start();
	        return this;
	    };
	
	    /*
	        Stop all active Actions
	         @param [int] (optional)
	        @returns [Actor]
	    */
	
	    Actor.prototype.stop = function stop() {
	        this.activeActions = {};
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
	        if (id === undefined) {
	            id = this.actionCounter++;
	        }
	
	        if (!this.hasAction(id)) {
	            this.activeActions[id] = action;
	            this.numActive++;
	        }
	
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
	
	    Actor.prototype.hasAction = function hasAction(id) {
	        return this.getAction(id) !== undefined;
	    };
	
	    Actor.prototype.allActiveActions = function allActiveActions(callback) {
	        each(this.activeActions, function (id, action) {
	            return callback(action);
	        });
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
	            this.bindInput(action, input);
	        }
	
	        this.activate();
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Input controller
	*/
	'use strict';
	
	var calc = __webpack_require__(31),
	    utils = __webpack_require__(37),
	    History = __webpack_require__(51),
	
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Actor = __webpack_require__(21),
	    Tween = __webpack_require__(28),
	    utils = __webpack_require__(37);
	
	var DEFAULT_STAGGER_EASE = 'linear';
	
	function generateCallback(method) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	    }
	
	    return utils.isString(method) ? function (member) {
	        return member[method].apply(member, args);
	    } : method;
	}
	
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
	
	    Iterator.prototype.each = function each(method) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	            args[_key2 - 1] = arguments[_key2];
	        }
	
	        var callback = generateCallback.apply(undefined, [method].concat(args));
	        this.members.forEach(callback);
	        return this;
	    };
	
	    Iterator.prototype.eachIntoNew = function eachIntoNew(method) {
	        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	            args[_key3 - 1] = arguments[_key3];
	        }
	
	        var callback = generateCallback.apply(undefined, [method].concat(args)),
	            newIterator = new Iterator();
	
	        this.members.forEach(function (member) {
	            return newIterator.add(callback(member));
	        });
	
	        return newIterator;
	    };
	
	    Iterator.prototype.stagger = function stagger(method, props) {
	        var _this = this;
	
	        for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
	            args[_key4 - 2] = arguments[_key4];
	        }
	
	        var numMembers = this.members.length,
	            propsIsInterval = utils.isNum(props),
	            interval = propsIsInterval ? props : props.interval,
	            staggerProps = {},
	            i = -1,
	            callback = generateCallback.apply(undefined, [method].concat(args));
	
	        staggerProps.values = {
	            i: {
	                current: 0,
	                duration: interval * numMembers,
	                ease: propsIsInterval ? DEFAULT_STAGGER_EASE : props.ease || DEFAULT_STAGGER_EASE,
	                round: true,
	                to: numMembers - 1
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var manager = __webpack_require__(56),
	
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(37);
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Bezier = __webpack_require__(57),
	
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var calc = __webpack_require__(31),
	    utils = __webpack_require__(37),
	    each = utils.each,
	    Controls = __webpack_require__(52);
	
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
	
	    Action.prototype.getDefaultProps = function getDefaultProps() {
	        return {};
	    };
	
	    Action.prototype.getDefaultValue = function getDefaultValue() {
	        return {};
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(27),
	    calc = __webpack_require__(31),
	    utils = __webpack_require__(37),
	    each = utils.each,
	    presetEasing = __webpack_require__(53),
	    valueOps = __webpack_require__(49),
	    TweenControls = __webpack_require__(54),
	    nextSteps = {
	    loop: 'restart',
	    yoyo: 'reverse',
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
	            this.elapsed += frameDuration * actor.dilate * this.playDirection;
	            this.ended = true;
	        }
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
	
	    Tween.prototype.flipValues = function flipValues(actor) {
	        var actorValues = actor.values;
	        this.elapsed = this.duration - this.elapsed;
	
	        each(this.values, function (key) {
	            valueOps.flip(actorValues[key]);
	        });
	    };
	
	    Tween.prototype.reverse = function reverse() {
	        this.playDirection *= -1;
	    };
	
	    Tween.prototype.restart = function restart() {
	        this.elapsed = this.playDirection === 1 ? 0 : this.duration;
	        this.started = utils.currentTime();
	    };
	
	    return Tween;
	})(Action);
	
	module.exports = Tween;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(27),
	    calc = __webpack_require__(31),
	    utils = __webpack_require__(37),
	    simulations = __webpack_require__(55);
	
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
	        this.inactiveFrames = 0;
	    }
	
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(27),
	    Pointer = __webpack_require__(47),
	    calc = __webpack_require__(31);
	
	var Track = (function (_Action) {
	    _inherits(Track, _Action);
	
	    function Track() {
	        _classCallCheck(this, Track);
	
	        _Action.apply(this, arguments);
	    }
	
	    /*
	        Update input offset
	    */
	
	    Track.prototype.onFrameStart = function onFrameStart(actor) {
	        this.inputOffset = calc.offset(this.inputOrigin, this.input.current);
	    };
	
	    /*
	        Move Value relative to Input movement
	        
	        @param [Value]: Current value
	        @param [string]: Key of current value
	        @return [number]: Calculated value
	    */
	
	    Track.prototype.process = function process(actor, value, key) {
	        return this.inputOffset.hasOwnProperty(key) ? value.origin + this.inputOffset[key] : value.current;
	    };
	
	    /*
	        Has this Action ended? 
	        
	        @return [boolean]: False to make user manually finish .track()
	    */
	
	    Track.prototype.hasEnded = function hasEnded(actor) {
	        return false;
	    };
	
	    Track.prototype.bindInput = function bindInput(input) {
	        this.input = !input.current ? new Pointer(input) : input;
	        this.inputOrigin = this.input.get();
	    };
	
	    return Track;
	})(Action);
	
	module.exports = Track;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Calculators
	    ----------------------------------------
	    
	    Simple I/O snippets
	*/
	"use strict";
	
	var utils = __webpack_require__(37),
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
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var splitCommaDelimited = __webpack_require__(58),
	    functionBreak = __webpack_require__(59);
	
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (value, prefix) {
	    return prefix + '(' + value + ')';
	};

/***/ },
/* 35 */
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
/* 36 */
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
/* 37 */
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
	            value: splitVal[1],
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (value) {
	    return typeof value === 'string' ? value.split(' ') : [value];
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var each = __webpack_require__(37).each,
	    transformDictionary = __webpack_require__(60),
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var TRANSLATE = 'translate';
	
	module.exports = {
	    x: TRANSLATE + 'X',
	    y: TRANSLATE + 'Y',
	    z: TRANSLATE + 'Z'
	};

/***/ },
/* 41 */
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var each = __webpack_require__(37).each,
	    transformDictionary = __webpack_require__(60),
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
/* 43 */
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
	    transformOrigin: 'positions',
	    d: 'complex'
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var STROKE = 'stroke';
	
	module.exports = {
	    opacity: STROKE + '-opacity',
	    width: STROKE + '-width',
	    miterlimit: STROKE + '-miterlimit'
	};

/***/ },
/* 45 */
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
	
	var Input = __webpack_require__(22),
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
	
	var valueTypeManager = __webpack_require__(19),
	    calc = __webpack_require__(31),
	    utils = __webpack_require__(37),
	    each = utils.each,
	    Action = __webpack_require__(27),
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
	            actor.unbindAction(key);
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
	        value.current = valueTypeManager[value.type].combine(state[key], value.template);
	
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
	
	var Watch = __webpack_require__(61),
	    watcher = new Watch(),
	    valueTypesManager = __webpack_require__(19),
	    calc = __webpack_require__(31),
	    utils = __webpack_require__(37),
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
	    var splitValues = {},
	        i = 0;
	
	    var _loop = function () {
	        var propName = numericalValues[i];
	        var splitProp = {};
	
	        if (value.hasOwnProperty(propName)) {
	            var valueProp = value[propName];
	
	            // If we need to first resolve this, resolve
	            if (utils.isFunc(valueProp)) {
	                valueProp = valueProp.call(scope, scope);
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
	    if (utils.isNum(property)) {
	        return property;
	    }
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
	
	                    newValue.children[childName] = values[key + childName] = childValue;
	                });
	
	                if (typeHandler.template) {
	                    newValue.template = existingValue ? existingValue.template : typeHandler.template(newValue.current);
	                }
	
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
	        Flip value target/origin
	    */
	    flip: function flip(value) {
	        var target = value.target !== undefined ? value.target : value.current;
	        value.target = value.to = value.origin;
	        value.origin = target;
	    },
	
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
	
	            each(defaultActionValue, function (propName, defaultActionProp) {
	                newValue[propName] = inherit.hasOwnProperty(propName) && !value.hasOwnProperty(propName) ? inherit[propName] : defaultActionProp;
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
	            newValue.hasRange = isNum(newValue.min) || isNum(newValue.max) ? true : false;
	
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
	
	var Role = __webpack_require__(25);
	
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
/* 52 */
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
	        var resume = this.actor.hasAction(this.id) ? this.resume : this.start;
	        return this.action.isActive ? this.pause() : resume.call(this);
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
/* 53 */
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
	
	var Easing = __webpack_require__(26),
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Controls = __webpack_require__(52);
	
	var TweenControls = (function (_Controls) {
	    _inherits(TweenControls, _Controls);
	
	    function TweenControls() {
	        _classCallCheck(this, TweenControls);
	
	        _Controls.apply(this, arguments);
	    }
	
	    TweenControls.prototype.restart = function restart() {
	        this.action.restart();
	        return this;
	    };
	
	    TweenControls.prototype.reverse = function reverse() {
	        this.action.reverse();
	        return this;
	    };
	
	    TweenControls.prototype.seek = function seek(progress) {
	        if (!this.actor.hasAction(this.id)) {
	            this.start().pause();
	        }
	
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var calc = __webpack_require__(31),
	    utils = __webpack_require__(37),
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var theLoop = __webpack_require__(62),
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
/* 57 */
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (value) {
	    return typeof value === 'string' ? value.split(/,\s*/) : [value];
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (value) {
	    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var positionTerms = __webpack_require__(36).positions,
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(27),
	    calc = __webpack_require__(31),
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
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        _Action.call.apply(_Action, [this].concat(args));
	        this.isActive = true;
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
	            inputOffset = value.action.inputOffset;
	
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    The loop
	*/
	'use strict';
	
	var Timer = __webpack_require__(63),
	    tick = __webpack_require__(64),
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var utils = __webpack_require__(37),
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
/* 64 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGFjNGE4YjQ4NTZlZmRmOWM0NDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2FkL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9oc2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcG9zaXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9kaW1lbnNpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9hdHRyL2F0dHJSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvY3NzUm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvc3ZnL3N2Z1JvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL0FjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaXRlcmF0b3IvSXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvUHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvUm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi9FYXNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1NpbXVsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1RyYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2Nzcy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvY3NzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvY3NzL3R5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9zdmcvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL3N2Zy90eXBlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvcGF0aC9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9Nb2RNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvUXVldWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L1BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3IvdmFsdWUtb3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvZGVmYXVsdFJvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9IaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9scy9Db250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi9wcmVzZXQtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuL1R3ZWVuQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvc2ltdWxhdGUvc2ltdWxhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi9CZXppZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1jb21tYS1kZWxpbWl0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1icmVhay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvY3NzL3RyYW5zZm9ybS1kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1dhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL2xvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvdGljay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7Ozs7O0FDdENBLEtBQUksU0FBUyxHQUFHLG1CQUFPLENBQUMsQ0FBYSxDQUFDO0tBQ2xDLEtBQUssR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDOztBQUV0QixPQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOzs7Ozs7QUFNekMsT0FBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEdBQUcsWUFBWTtBQUMvQixXQUFNLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztFQUNyQixDOzs7Ozs7QUNYRCxhQUFZLENBQUM7O0FBRWIsS0FBSSxTQUFTLEdBQUcsbUJBQU8sQ0FBQyxDQUFjLENBQUMsQ0FBQzs7Ozs7QUFLeEMsVUFBUyxDQUFDLFlBQVksQ0FBQztBQUNuQixVQUFLLEVBQUUsbUJBQU8sQ0FBQyxDQUFzQixDQUFDO0FBQ3RDLFVBQUssRUFBRSxtQkFBTyxDQUFDLENBQXNCLENBQUM7QUFDdEMsT0FBRSxFQUFFLG1CQUFPLENBQUMsQ0FBbUIsQ0FBQztBQUNoQyxRQUFHLEVBQUUsbUJBQU8sQ0FBQyxDQUFvQixDQUFDO0FBQ2xDLFFBQUcsRUFBRSxtQkFBTyxDQUFDLENBQW9CLENBQUM7QUFDbEMsUUFBRyxFQUFFLG1CQUFPLENBQUMsQ0FBb0IsQ0FBQztBQUNsQyxVQUFLLEVBQUUsbUJBQU8sQ0FBQyxDQUFzQixDQUFDO0FBQ3RDLGNBQVMsRUFBRSxtQkFBTyxD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LFFBQVEsR0FBRyxDQUFDO0tBQ1osU0FBUyxHQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVksQ0FBQzs7QUFFaEQsS0FBSSxDQUFDLFNBQVMsRUFBRTs7QUFFWixTQUFJLEdBQUcsVUFBVSxRQUFRLEVBQUU7QUFDdkIsYUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7YUFDL0IsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUM7YUFDcEQsRUFBRSxHQUFHLFVBQVUsQ0FBQyxZQUFZO0FBQ3hCLHFCQUFRLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1VBQ25DLEVBQUUsVUFBVSxDQUFDLENBQUM7O0FBRW5CLGlCQUFRLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQzs7QUFFakMsZ0JBQU8sRUFBRSxDQUFDO01BQ2IsQ0FBQztFQUVMLE1BQU07QUFDSCxTQUFJLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDO0VBQ3ZDOztBQUVELE9BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZGFjNGE4YjQ4NTZlZmRmOWM0NDVcbiAqKi8iLCJ2YXIgcG9wbW90aW9uID0gcmVxdWlyZSgnLi9tb2R1bGUuanMnKSxcbiAgICBVSXJlZiA9IHdpbmRvdy51aTtcblxud2luZG93LnVpID0gd2luZG93LnBvcG1vdGlvbiA9IHBvcG1vdGlvbjtcblxuLypcbiAgICBJZiBub0NvbmZsaWN0IGlzIHJ1biwgdGhlIG9yaWdpbmFsIHJlZmVyZW5jZSB0byB3aW5kb3cuVUkgaXNcbiAgICByZXN0b3JlZCBhbmQgUG9wbW90aW9uIGlzIGxvYWRlZCB0byB3aW5kb3cuUG9wbW90aW9uXG4qL1xud2luZG93LnVpLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LnVpID0gVUlyZWY7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xvYWQvZ2xvYmFsLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBwb3Btb3Rpb24gPSByZXF1aXJlKCcuLi9wb3Btb3Rpb24nKTtcblxuLypcbiAgICBBZGQgb3B0aW9uYWwgY3VzdG9tIHZhbHVlIHR5cGUgc3VwcG9ydFxuKi9cbnBvcG1vdGlvbi5hZGRWYWx1ZVR5cGUoe1xuICAgIGFscGhhOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9hbHBoYScpLFxuICAgIGFuZ2xlOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9hbmdsZScpLFxuICAgIHB4OiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9weCcpLFxuICAgIGhzbDogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvaHNsJyksXG4gICAgcmdiOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9yZ2InKSxcbiAgICBoZXg6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2hleCcpLFxuICAgIGNvbG9yOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9jb2xvcicpLFxuICAgIHBvc2l0aW9uczogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJyksXG4gICAgZGltZW5zaW9uczogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvZGltZW5zaW9ucycpLFxuICAgIHNjYWxlOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9zY2FsZScpLFxuICAgIHNoYWRvdzogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvc2hhZG93JyksXG4gICAgY29tcGxleDogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvY29tcGxleCcpXG59KTtcblxuLypcbiAgICBQcmVkZWZpbmVkIHJvbGVzXG4qL1xuXG5wb3Btb3Rpb24uYXR0ciA9IHJlcXVpcmUoJy4uL3JvbGVzL2F0dHIvYXR0clJvbGUnKTtcbnBvcG1vdGlvbi5jc3MgPSByZXF1aXJlKCcuLi9yb2xlcy9jc3MvY3NzUm9sZScpO1xucG9wbW90aW9uLnN2ZyA9IHJlcXVpcmUoJy4uL3JvbGVzL3N2Zy9zdmdSb2xlJyk7XG5wb3Btb3Rpb24uZHJhd1BhdGggPSByZXF1aXJlKCcuLi9yb2xlcy9wYXRoL2RyYXdQYXRoUm9sZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBvcG1vdGlvbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9sb2FkL21vZHVsZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdmFsdWVUeXBlTWFuYWdlciA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvbWFuYWdlcicpLFxuICAgIHNlbGVjdCA9IHJlcXVpcmUoJy4vYWN0b3Ivc2VsZWN0JyksXG5cbiAgICBQb3Btb3Rpb24gPSB7XG5cbiAgICAgICAgQWN0b3I6IHJlcXVpcmUoJy4vYWN0b3IvQWN0b3InKSxcblxuICAgICAgICBJbnB1dDogcmVxdWlyZSgnLi9pbnB1dC9JbnB1dCcpLFxuXG4gICAgICAgIEl0ZXJhdG9yOiByZXF1aXJlKCcuL2l0ZXJhdG9yL0l0ZXJhdG9yJyksXG5cbiAgICAgICAgUHJvY2VzczogcmVxdWlyZSgnLi9wcm9jZXNzL1Byb2Nlc3MnKSxcblxuICAgICAgICBFYXNpbmc6IHJlcXVpcmUoJy4vYWN0aW9ucy90d2Vlbi9FYXNpbmcnKSxcblxuICAgICAgICBSb2xlOiByZXF1aXJlKCcuL3JvbGVzL1JvbGUnKSxcblxuICAgICAgICBBY3Rpb246IHJlcXVpcmUoJy4vYWN0aW9ucy9BY3Rpb24nKSxcbiAgICAgICAgVHdlZW46IHJlcXVpcmUoJy4vYWN0aW9ucy9Ud2VlbicpLFxuICAgICAgICBTaW11bGF0ZTogcmVxdWlyZSgnLi9hY3Rpb25zL1NpbXVsYXRlJyksXG4gICAgICAgIFRyYWNrOiByZXF1aXJlKCcuL2FjdGlvbnMvVHJhY2snKSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgQ3JlYXRlIGFuIEl0ZXJhdG9yIG9mIEFjdG9ycyB3aXRoIHNlbGVjdGVkIGRvbSBlbGVtZW50c1xuICAgICAgICAqL1xuICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChzZWxlY3Rvciwgb3B0cyA9IHt9KSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0aW9uID0gc2VsZWN0KHNlbGVjdG9yKSxcbiAgICAgICAgICAgICAgICBhY3RvcnMgPSBbXTtcblxuICAgICAgICAgICAgc2VsZWN0aW9uLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBvcHRzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIGFjdG9ycy5wdXNoKG5ldyB0aGlzLkFjdG9yKG9wdHMpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IHRoaXMuSXRlcmF0b3IoYWN0b3JzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGRWYWx1ZVR5cGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhbHVlVHlwZU1hbmFnZXIuZXh0ZW5kLmFwcGx5KHZhbHVlVHlwZU1hbmFnZXIsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBjYWxjOiByZXF1aXJlKCcuL2luYy9jYWxjJylcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcG1vdGlvbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDFcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdkZWcnXG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAncHgnXG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9weC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIGdldENvbG9yVmFsdWVzID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZ2V0LWNvbG9yLXZhbHVlcycpLFxuICAgIGZ1bmN0aW9uQ3JlYXRlID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlJyksXG4gICAgZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyksXG4gICAgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5oc2w7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIEh1ZToge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAzNjBcbiAgICAgICAgfSxcbiAgICAgICAgU2F0dXJhdGlvbjogZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIExpZ2h0bmVzczogZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIEFscGhhOiBkZWZhdWx0UHJvcHMub3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdoc2wnKSA+IC0xKTtcbiAgICB9LFxuICAgIFxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGdldENvbG9yVmFsdWVzKHZhbHVlLCB0ZXJtcyk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uQ3JlYXRlKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnLCAnLCAyKSwgJ2hzbGEnKTtcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hzbC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIGdldENvbG9yVmFsdWVzID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZ2V0LWNvbG9yLXZhbHVlcycpLFxuICAgIGZ1bmN0aW9uQ3JlYXRlID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlJyksXG4gICAgZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyksXG4gICAgY29sb3JEZWZhdWx0cyA9IGRlZmF1bHRQcm9wcy5jb2xvcixcbiAgICB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLmNvbG9ycztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgUmVkOiBjb2xvckRlZmF1bHRzLFxuICAgICAgICBHcmVlbjogY29sb3JEZWZhdWx0cyxcbiAgICAgICAgQmx1ZTogY29sb3JEZWZhdWx0cyxcbiAgICAgICAgQWxwaGE6IGRlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ3JnYicpID4gLTEpO1xuICAgIH0sXG4gICAgXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZ2V0Q29sb3JWYWx1ZXModmFsdWUsIHRlcm1zKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb25DcmVhdGUoY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgdGVybXMsICcsICcsIDIpLCAncmdiYScpO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciByZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogcmdiLmRlZmF1bHRQcm9wcyxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJyMnKSA+IC0xKTtcbiAgICB9LFxuICAgIFxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHIsIGcsIGI7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMik7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDMsIDIpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cig1LCAyKTtcblxuICAgICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAxKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDMsIDEpO1xuICAgICAgICAgICAgciArPSByO1xuICAgICAgICAgICAgZyArPSBnO1xuICAgICAgICAgICAgYiArPSBiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgICAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgICAgICAgIEFscGhhOiAxXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIHJnYi5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oZXguanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgcmdiID0gcmVxdWlyZSgnLi9yZ2InKSxcbiAgICBoc2wgPSByZXF1aXJlKCcuL2hzbCcpLFxuICAgIGhleCA9IHJlcXVpcmUoJy4vaGV4JyksXG4gICAgc3VwcG9ydGVkID0gW3JnYiwgaHNsLCBoZXhdLFxuICAgIG51bVN1cHBvcnRlZCA9IDMsXG5cbiAgICBydW5TdXBwb3J0ZWQgPSBmdW5jdGlvbiAobWV0aG9kLCB2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVN1cHBvcnRlZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3VwcG9ydGVkW2ldLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRlZFtpXVttZXRob2RdKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiB1dGlscy5tZXJnZShyZ2IuZGVmYXVsdFByb3BzLCBoc2wuZGVmYXVsdFByb3BzKSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gcmdiLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2wudGVzdCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHJ1blN1cHBvcnRlZCgnc3BsaXQnLCB2YWx1ZSk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZXMuUmVkICE9PSB1bmRlZmluZWQpID8gcmdiLmNvbWJpbmUodmFsdWVzKSA6IGhzbC5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIHB4RGVmYXVsdHMgPSByZXF1aXJlKCcuL3B4JykuZGVmYXVsdFByb3BzLFxuICAgIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQnKSxcbiAgICB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLnBvc2l0aW9ucztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHB4RGVmYXVsdHMsXG4gICAgICAgIFxuICAgIC8qXG4gICAgICAgIFNwbGl0IHBvc2l0aW9ucyBpbiBmb3JtYXQgXCJYIFkgWlwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFBvc2l0aW9uIHZhbHVlc1xuICAgICAgICAgICAgXCIyMCUgMzAlIDBcIiAtPiB7MjAlLCAzMCUsIDB9XG4gICAgICAgICAgICBcIjIwJSAzMCVcIiAtPiB7MjAlLCAzMCV9XG4gICAgICAgICAgICBcIjIwJVwiIC0+IHsyMCUsIDIwJX1cbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHBvc2l0aW9ucyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpLFxuICAgICAgICAgICAgbnVtUG9zaXRpb25zID0gcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICAgIHNwbGl0VmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgWDogcG9zaXRpb25zWzBdLFxuICAgICAgICAgICAgICAgIFk6IChudW1Qb3NpdGlvbnMgPiAxKSA/IHBvc2l0aW9uc1sxXSA6IHBvc2l0aW9uc1swXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICBpZiAobnVtUG9zaXRpb25zID4gMikge1xuICAgICAgICAgICAgc3BsaXRWYWx1ZS5aID0gcG9zaXRpb25zWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnICcpO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcG9zaXRpb25zLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLmRpbWVuc2lvbnMsXG4gICAgcHhEZWZhdWx0cyA9IHJlcXVpcmUoJy4vcHgnKS5kZWZhdWx0UHJvcHMsXG4gICAgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHB4RGVmYXVsdHMsXG4gICAgXG4gICAgLypcbiAgICAgICAgU3BsaXQgZGltZW5zaW9ucyBpbiBmb3JtYXQgXCJUb3AgUmlnaHQgQm90dG9tIExlZnRcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBEaW1lbnNpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4IDQwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgNDBweH1cbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweCAwXCIgLT4gezIwcHgsIDAsIDIwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHhcIiAtPiB7MjBweCwgMjBweCwgMjBweCwgMjBweH1cbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIFQvUi9CL0wgbWV0cmljc1xuICAgICovXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZGltZW5zaW9ucyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpLFxuICAgICAgICAgICAgbnVtRGltZW5zaW9ucyA9IGRpbWVuc2lvbnMubGVuZ3RoLFxuICAgICAgICAgICAganVtcEJhY2sgPSAobnVtRGltZW5zaW9ucyAhPT0gMSkgPyAyIDogMSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgaiA9IDAsXG4gICAgICAgICAgICBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgZm9yICg7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbdGVybXNbaV1dID0gZGltZW5zaW9uc1tqXTtcblxuICAgICAgICAgICAgLy8gSnVtcCBiYWNrICh0byBzdGFydCkgY291bnRlciBpZiB3ZSd2ZSByZWFjaGVkIHRoZSBlbmQgb2Ygb3VyIHZhbHVlc1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgaiA9IChqID09PSBudW1EaW1lbnNpb25zKSA/IGogLSBqdW1wQmFjayA6IGo7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgdGVybXMsICcgJyk7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9kaW1lbnNpb25zLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGluaXQ6IDFcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NjYWxlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjb2xvciA9IHJlcXVpcmUoJy4vY29sb3InKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIHB4RGVmYXVsdHMgPSByZXF1aXJlKCcuL3B4JykuZGVmYXVsdFByb3BzLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jykuc2hhZG93LFxuICAgIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQnKSxcbiAgICBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgc2hhZG93VGVybXMgPSB0ZXJtcy5zbGljZSgwLDQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogdXRpbHMubWVyZ2UoY29sb3IuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIFg6IHB4RGVmYXVsdHMsXG4gICAgICAgIFk6IHB4RGVmYXVsdHMsXG4gICAgICAgIFJhZGl1czogcHhEZWZhdWx0cyxcbiAgICAgICAgU3ByZWFkOiBweERlZmF1bHRzXG4gICAgfSksXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBzaGFkb3cgcHJvcGVydGllcyBcIlggWSBSYWRpdXMgU3ByZWFkIENvbG9yXCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogU2hhZG93IHByb3BlcnR5XG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGJpdHMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKSxcbiAgICAgICAgICAgIG51bUJpdHMgPSBiaXRzLmxlbmd0aCxcbiAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IGZhbHNlLFxuICAgICAgICAgICAgY29sb3JQcm9wID0gJycsXG4gICAgICAgICAgICB0aGlzQml0LFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgZm9yICg7IGkgPCBudW1CaXRzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXNCaXQgPSBiaXRzW2ldO1xuXG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBjb2xvciBwcm9wZXJ0eSwgYXBwZW5kIHRvIGNvbG9yIHN0cmluZ1xuICAgICAgICAgICAgaWYgKGhhc1JlYWNoZWRDb2xvciB8fCBjb2xvci50ZXN0KHRoaXNCaXQpKSB7XG4gICAgICAgICAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb2xvclByb3AgKz0gdGhpc0JpdDtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlW3Rlcm1zW2ldXSA9IHRoaXNCaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB1dGlscy5tZXJnZShzcGxpdFZhbHVlLCBjb2xvci5zcGxpdChjb2xvclByb3ApKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgc2hhZG93VGVybXMsICcgJykgKyBjb2xvci5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanNcbiAqKi8iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaCxcbiAgICBmbG9hdFJlZ2V4ID0gLyhcXGRbXFxkXFwuXSopL2csXG5cbiAgICBnZW5lcmF0ZVRva2VuID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gJyR7JyArIGtleSArICd9JztcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB2YWx1ZS5tYXRjaChmbG9hdFJlZ2V4KTtcbiAgICAgICAgcmV0dXJuICh1dGlscy5pc0FycmF5KG1hdGNoZXMpICYmIG1hdGNoZXMubGVuZ3RoID4gMSk7XG4gICAgfSxcblxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShmbG9hdFJlZ2V4LCAoKSA9PiBnZW5lcmF0ZVRva2VuKGNvdW50ZXIrKykpO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlID0ge30sXG4gICAgICAgICAgICBtYXRjaGVzID0gdmFsdWUubWF0Y2goZmxvYXRSZWdleCksXG4gICAgICAgICAgICBudW1NYXRjaGVzID0gbWF0Y2hlcy5sZW5ndGg7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU1hdGNoZXM7IGkrKykge1xuICAgICAgICAgICAgc3BsaXRWYWx1ZVtpXSA9IG1hdGNoZXNbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcywgdGVtcGxhdGUpIHtcbiAgICAgICAgdmFyIGNvbWJpbmVkVmFsdWUgPSB0ZW1wbGF0ZTtcblxuICAgICAgICBlYWNoKHZhbHVlcywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbWJpbmVkVmFsdWUgPSBjb21iaW5lZFZhbHVlLnJlcGxhY2UoZ2VuZXJhdGVUb2tlbihrZXkpLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjb21iaW5lZFZhbHVlO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvY29tcGxleC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUm9sZSA9IHJlcXVpcmUoJy4uL1JvbGUnKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuZWFjaDtcblxudmFyIGF0dHJSb2xlID0gbmV3IFJvbGUoe1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBhY3RvciA9IHRoaXM7XG5cbiAgICAgICAgZWFjaChzdGF0ZSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGF0dHJSb2xlLnNldChhY3Rvci5lbGVtZW50LCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGdldDogZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICB9LFxuXG4gICAgc2V0OiBmdW5jdGlvbiAoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBhdHRyUm9sZTtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvYXR0ci9hdHRyUm9sZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUm9sZSA9IHJlcXVpcmUoJy4uL1JvbGUnKTtcbnZhciBidWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuZWFjaDtcblxudmFyIHByZWZpeGVzID0gWydXZWJraXQnLCdNb3onLCdPJywnbXMnLCAnJ107XG52YXIgbnVtUHJlZml4ZXMgPSBwcmVmaXhlcy5sZW5ndGg7XG52YXIgcHJvcGVydHlOYW1lQ2FjaGUgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgXG4vKlxuICAgIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gICAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG52YXIgdGVzdFByZWZpeCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHRlc3RFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgXG4gICAgICAgIHByb3BlcnR5TmFtZUNhY2hlW2tleV0gPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXSxcbiAgICAgICAgICAgICAgICBwcmVmaXhlZCA9IChwcmVmaXggPT09ICcnKSA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgICAgICAgICAgaWYgKHRlc3RFbGVtZW50LnN0eWxlLmhhc093blByb3BlcnR5KHByZWZpeGVkKSkge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZUNhY2hlW2tleV0gPSBwcmVmaXhlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5TmFtZUNhY2hlW2tleV07XG4gICAgfTtcblxudmFyIGNzc1JvbGUgPSBuZXcgUm9sZSh7XG4gICAgX21hcDogcmVxdWlyZSgnLi9tYXAnKSxcbiAgICBfdHlwZU1hcDogcmVxdWlyZSgnLi90eXBlLW1hcCcpLFxuXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9jc3NDYWNoZSA9IHt9O1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzO1xuXG4gICAgICAgIGVhY2goYnVpbGQoc3RhdGUsIGFjdG9yLl9jc3NDYWNoZSksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBjc3NSb2xlLnNldChhY3Rvci5lbGVtZW50LCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGdldDogZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICAgICAgICBrZXkgPSBwcm9wZXJ0eU5hbWVDYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTtcblxuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClba2V5XTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uIChlbGVtZW50LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGtleSA9IHByb3BlcnR5TmFtZUNhY2hlW2tleV0gfHwgdGVzdFByZWZpeChrZXkpO1xuXG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjc3NSb2xlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL2Nzcy9jc3NSb2xlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSb2xlID0gcmVxdWlyZSgnLi4vUm9sZScpLFxuICAgIGF0dHJSb2xlID0gcmVxdWlyZSgnLi4vYXR0ci9hdHRyUm9sZScpLFxuICAgIGJ1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpLFxuICAgIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBSb2xlKHtcbiAgICBuYW1lOiAnc3ZnJyxcblxuICAgIF9tYXA6IHJlcXVpcmUoJy4uL2Nzcy9tYXAnKSxcbiAgICBfdHlwZU1hcDogcmVxdWlyZSgnLi90eXBlLW1hcCcpLFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJvdW5kaW5nQm94ID0gdGhpcy5lbGVtZW50LmdldEJCb3goKSxcbiAgICAgICAgICAgIHZhbHVlcyA9IHRoaXMudmFsdWVzLFxuICAgICAgICAgICAgLy8gVE9ETzogU3VwcG9ydCBweFxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luWCA9IHZhbHVlcy50cmFuc2Zvcm1PcmlnaW5YID8gdmFsdWVzLnRyYW5zZm9ybU9yaWdpblguY3VycmVudCA6IDUwLFxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luWSA9IHZhbHVlcy50cmFuc2Zvcm1PcmlnaW5ZID8gdmFsdWVzLnRyYW5zZm9ybU9yaWdpblkuY3VycmVudCA6IDUwLFxuICAgICAgICAgICAgb3JpZ2luID0ge1xuICAgICAgICAgICAgICAgIHg6IGJvdW5kaW5nQm94LndpZHRoICogKHRyYW5zZm9ybU9yaWdpblggLyAxMDApICsgYm91bmRpbmdCb3gueCxcbiAgICAgICAgICAgICAgICB5OiBib3VuZGluZ0JveC5oZWlnaHQgKiAodHJhbnNmb3JtT3JpZ2luWSAvIDEwMCkgKyBib3VuZGluZ0JveC55XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3ZnT3JpZ2luID0gb3JpZ2luO1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzO1xuICAgICAgICBlYWNoKGJ1aWxkKHN0YXRlLCB0aGlzLnN2Z09yaWdpbiksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBhdHRyUm9sZS5zZXQoYWN0b3IuZWxlbWVudCwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvc3ZnL3N2Z1JvbGUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJvbGUgPSByZXF1aXJlKCcuLi9Sb2xlJyk7XG52YXIgYXR0clJvbGUgPSByZXF1aXJlKCcuLi9hdHRyL2F0dHJSb2xlJyk7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2g7XG5cbi8qXG4gICAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgICBAcGFyYW0gW251bWJlcl06IFRvdGFsIGxlbmd0aFxuKi9cbnZhciBwZXJjZW50VG9QaXhlbHMgPSBmdW5jdGlvbiAocGVyY2VudGFnZSwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIChwYXJzZUZsb2F0KHBlcmNlbnRhZ2UpIC8gMTAwKSAqIGxlbmd0aCArICdweCc7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBzdHlsZXNcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IFNWRyBQYXRoIHByb3BlcnRpZXNcbiAgICBAcGFyYW0gW29iamVjdF06IExlbmd0aCBvZiBwYXRoXG4gICAgQHJldHVybnMgW29iamVjdF06IEtleS92YWx1ZSBwYWlycyBvZiB2YWxpZCBDU1MgcHJvcGVydGllc1xuKi9cbnZhciBjcmVhdGVTdHlsZXMgPSBmdW5jdGlvbiAocHJvcHMsIGxlbmd0aCkge1xuICAgIHZhciBoYXNEYXNoQXJyYXkgPSBmYWxzZSxcbiAgICAgICAgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgICAgICAgICAgbGVuZ3RoOiAwLFxuICAgICAgICAgICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZXMgPSB7fTtcblxuICAgIGVhY2gocHJvcHMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGtleSA9IFNWR0RyYXdQYXRoLl9tYXBba2V5XSB8fCBrZXk7XG5cbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNob2Zmc2V0J10gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG59O1xuXG4vKlxuICAgIERyYXcgUGF0aCByb2xlXG4qL1xudmFyIFNWR0RyYXdQYXRoID0gbmV3IFJvbGUoe1xuICAgIF9tYXA6IHJlcXVpcmUoJy4vbWFwJyksXG5cbiAgICBfdHlwZU1hcDoge1xuICAgICAgICBzdHJva2U6ICdjb2xvcicsXG4gICAgICAgIGQ6ICdjb21wbGV4J1xuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGF0aExlbmd0aCA9IHRoaXMuZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBVcGRhdGUgYHBhdGhgIHN0eWxlcyBhbmQgaWYgYGVsZW1lbnRgIGlzIHByZXNlbnQsIHNldFxuICAgICAgICB4LCB5IGFuZCByb3RhdGlvblxuICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgYXR0clJvbGUudXBkYXRlLmNhbGwodGhpcywgY3JlYXRlU3R5bGVzKHN0YXRlLCB0aGlzLnBhdGhMZW5ndGgpKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTVkdEcmF3UGF0aDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9wYXRoL2RyYXdQYXRoUm9sZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgTW9kTWFuYWdlciA9IHJlcXVpcmUoJy4uL2luYy9Nb2RNYW5hZ2VyJyksXG4gICAgdmFsdWVUeXBlTWFuYWdlciA9IG5ldyBNb2RNYW5hZ2VyKCk7XG5cbnZhbHVlVHlwZU1hbmFnZXIuZGVmYXVsdFByb3BzID0gZnVuY3Rpb24gKHR5cGUsIGtleSkge1xuICAgIHZhciB2YWx1ZVR5cGUgPSB0aGlzW3R5cGVdLFxuICAgICAgICBkZWZhdWx0UHJvcHMgPSAodmFsdWVUeXBlLmRlZmF1bHRQcm9wcykgPyB2YWx1ZVR5cGUuZGVmYXVsdFByb3BzW2tleV0gfHwgdmFsdWVUeXBlLmRlZmF1bHRQcm9wcyA6IHt9O1xuXG4gICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbn07XG5cbnZhbHVlVHlwZU1hbmFnZXIudGVzdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZmFsc2U7XG5cbiAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGtleSwgbW9kKSB7XG4gICAgICAgIGlmIChtb2QudGVzdCAmJiBtb2QudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHR5cGUgPSBrZXk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0eXBlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB2YWx1ZVR5cGVNYW5hZ2VyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmFnZXIuanNcbiAqKi8iLCIvKlxuICAgIENyZWF0ZSBhbiBBY3RvckNvbGxlY3Rpb24gYmFzZWQgb24gYSBzZWxlY3Rpb24gb2YgRE9NIG5vZGVzXG5cbiAgICBAcGFyYW0gW3N0cmluZyB8fCBOb2RlTGlzdCB8fCBqUXVlcnkgb2JqZWN0XTpcbiAgICAgICAgSWYgc3RyaW5nLCB0cmVhdGVkIGFzIHNlbGVjdG9yLlxuICAgICAgICBJZiBub3QsIHRyZWF0ZWQgYXMgcHJlZXhpc3RpbmcgTm9kZUxpc3QgfHwgalF1ZXJ5IG9iamVjdC5cbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHZhciBub2RlcyA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3IsXG4gICAgICAgIGVsZW1lbnRzID0gW107XG5cbiAgICAvLyBJZiBqUXVlcnkgc2VsZWN0aW9uLCBnZXQgYXJyYXkgb2YgRWxlbWVudHNcbiAgICBpZiAobm9kZXMuZ2V0KSB7XG4gICAgICAgIGVsZW1lbnRzID0gbm9kZXMuZ2V0KCk7XG5cbiAgICAvLyBPciBjb252ZXJ0IE5vZGVMaXN0IHRvIGFycmF5XG4gICAgfSBlbHNlIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKG5vZGVzKTtcblxuICAgIC8vIE9yIGlmIGl0J3MganVzdCBhbiBFbGVtZW50LCBwdXQgaW50byBhcnJheVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnRzLnB1c2gobm9kZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0b3Ivc2VsZWN0LmpzXG4gKiovIiwidmFyIFByb2Nlc3MgPSByZXF1aXJlKCcuLi9wcm9jZXNzL1Byb2Nlc3MnKSxcbiAgICBRdWV1ZSA9IHJlcXVpcmUoJy4uL2luYy9RdWV1ZScpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgdXBkYXRlID0gcmVxdWlyZSgnLi91cGRhdGUnKSxcbiAgICB2YWx1ZU9wcyA9IHJlcXVpcmUoJy4vdmFsdWUtb3BlcmF0aW9ucycpLFxuICAgIHNlbGVjdCA9IHJlcXVpcmUoJy4vc2VsZWN0JyksXG5cbiAgICAvKlxuICAgICAgICBSb2xlIGltcG9ydHNcbiAgICAqL1xuICAgIGRlZmF1bHRSb2xlID0gcmVxdWlyZSgnLi4vcm9sZXMvZGVmYXVsdFJvbGUnKSxcbiAgICBjc3NSb2xlID0gcmVxdWlyZSgnLi4vcm9sZXMvY3NzL2Nzc1JvbGUnKSxcbiAgICBzdmdSb2xlID0gcmVxdWlyZSgnLi4vcm9sZXMvc3ZnL3N2Z1JvbGUnKSxcbiAgICBkcmF3UGF0aFJvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9wYXRoL2RyYXdQYXRoUm9sZScpLFxuXG4gICAgQWN0aW9uID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9BY3Rpb24nKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaDtcblxuY2xhc3MgQWN0b3Ige1xuXG4gICAgLypcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICAgICAgdmFyIHByb3BzID0gdXRpbHMuaXNTdHJpbmcob3B0cykgPyB7IGVsZW1lbnQ6IG9wdHMgfSA6IG9wdHM7XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWVzOiB7fSB9O1xuICAgICAgICB0aGlzLnF1ZXVlID0gbmV3IFF1ZXVlKCk7XG4gICAgICAgIHRoaXMucHJvY2VzcyA9IG5ldyBQcm9jZXNzKHRoaXMsIHVwZGF0ZSk7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLm51bUFjdGl2ZSA9IDA7XG4gICAgICAgIHRoaXMuYWN0aW9uQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuYWN0aXZlVmFsdWVzID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZlUGFyZW50cyA9IFtdO1xuXG4gICAgICAgIC8vIEdldCBhY3R1YWwgZWxlbWVudHMgaWYgdGhpcyBpcyBhIHNlbGVjdG9yXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwcm9wcy5lbGVtZW50KSkge1xuICAgICAgICAgICAgcHJvcHMuZWxlbWVudCA9IHNlbGVjdChwcm9wcy5lbGVtZW50KVswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXNzaWduUm9sZXMocHJvcHMuZWxlbWVudCwgcHJvcHMuYXMsIHRydWUpO1xuICAgICAgICB0aGlzLnNldChwcm9wcyk7XG4gICAgICAgIHRoaXMuaW5pdFJvbGVzKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU2V0IEFjdG9yIHByb3BlcnRpZXMgYW5kIHZhbHVlc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcmV0dXJucyBbQWN0b3JdXG4gICAgKi9cbiAgICBzZXQob3B0cykge1xuICAgICAgICBlYWNoKG9wdHMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAndmFsdWVzJyAmJiBrZXkgIT09ICdhY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChvcHRzICYmIG9wdHMudmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlT3BzLnByb2Nlc3ModGhpcy52YWx1ZXMsIG9wdHMudmFsdWVzLCBvcHRzLCAnY3VycmVudCcsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24tc3BlY2lmaWMgY29udHJvbHMgdG8gQWN0b3JcblxuICAgICAgICBAcmV0dXJucyBbQ29udHJvbHNdXG4gICAgKi9cbiAgICBjb250cm9scyhhY3Rpb24pIHtcbiAgICAgICAgdmFyIENvbnRyb2xzID0gYWN0aW9uLmdldENvbnRyb2xzKCk7XG4gICAgICAgIHJldHVybiBuZXcgQ29udHJvbHModGhpcywgYWN0aW9uLmdldFBsYXlhYmxlKCkpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN0YXJ0IGEgbmV3IEFjdGlvblxuXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICBAcGFyYW0gW0lucHV0IHx8IGV2ZW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtDb250cm9sc11cbiAgICAqL1xuICAgIHN0YXJ0KGFjdGlvbiwgaW5wdXQpIHtcbiAgICAgICAgdmFyIENvbnRyb2xzID0gYWN0aW9uLmdldENvbnRyb2xzKCksXG4gICAgICAgICAgICBvcHRzID0gdXRpbHMuY29weShhY3Rpb24pO1xuXG4gICAgICAgIG9wdHMuYWN0aW9uID0gYWN0aW9uLmdldFBsYXlhYmxlKCk7XG4gICAgICAgIHRoaXMuc2V0KG9wdHMpO1xuXG4gICAgICAgIGlmIChpbnB1dCAmJiBvcHRzLmFjdGlvbi5iaW5kSW5wdXQpIHtcbiAgICAgICAgICAgIG9wdHMuYWN0aW9uLmJpbmRJbnB1dChpbnB1dCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDb250cm9scyh0aGlzLCBvcHRzLmFjdGlvbiwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUGF1c2UgYWxsIGFjdGl2ZSBBY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtpbnRdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybnMgW0FjdG9yXVxuICAgICovXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbGxBY3RpdmVBY3Rpb25zKChhY3Rpb24pID0+IGFjdGlvbi5kZWFjdGl2YXRlKCkpO1xuICAgICAgICB0aGlzLnByb2Nlc3Muc3RvcCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBSZXN1bWUgYWxsIGFjdGl2ZSBBY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtpbnRdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybnMgW0FjdG9yXTtcbiAgICAqL1xuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxsQWN0aXZlQWN0aW9ucygoYWN0aW9uKSA9PiBhY3Rpb24uYWN0aXZhdGUoKSk7XG4gICAgICAgIHRoaXMucHJvY2Vzcy5zdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdG9wIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFRvZ2dsZSBhbGwgYWN0aXZlIEFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW2ludF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJucyBbQWN0b3JdXG4gICAgKi9cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQWN0aXZlID8gdGhpcy5wYXVzZSgpIDogdGhpcy5yZXN1bWUoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTeW5jcyBgZWxlbWVudGAgd2l0aCBjdXJyZW50IHByb3BlcnRpZXNcblxuICAgICAgICBAcmV0dXJucyBbQWN0b3JdXG4gICAgKi9cbiAgICBzeW5jKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydChuZXcgQWN0aW9uKHsgdmFsdWVzOiB0aGlzLnZhbHVlcyB9KSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQWRkIGEgbmV3IEFjdGlvbiB0byB0aGUgcXVldWVcbiAgICAqL1xuICAgIHRoZW4oKSB7XG4gICAgICAgIHRoaXMucXVldWUuYWRkLmFwcGx5KHRoaXMucXVldWUsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEV4ZWN1dGUgbmV4dCBpbiBxdWV1ZVxuICAgICovXG4gICAgbmV4dCgpIHtcbiAgICAgICAgdmFyIG5leHQgPSB0aGlzLnF1ZXVlLm5leHQoKTtcblxuICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuYyhuZXh0KSkge1xuICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydChuZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQXNzaWduIFJvbGVzIGJhc2VkIG9uIGVsZW1lbnQgYW5kIG1hbnVhbGx5IHByb3ZpZGVkIHByb3BzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBFbGVtZW50XG4gICAgICAgIEBwYXJhbSBbUm9sZSB8fCBhcnJheV1cbiAgICAgICAgQHBhcmFtIFtib29sZWFuXSAob3B0aW9uYWwpXG4gICAgKi9cbiAgICBhc3NpZ25Sb2xlcyhlbGVtZW50LCBtYW51YWxSb2xlcywgc3VycHJlc3NJbml0KSB7XG4gICAgICAgIC8vIEFsbCBBY3RvcnMgZ2V0IGEgZGVmYXVsdCBSb2xlIHRoYXQgaGFuZGxlcyB1c2VyIGNhbGxiYWNrc1xuICAgICAgICB0aGlzLnJvbGVzID0gWyBkZWZhdWx0Um9sZSBdO1xuXG4gICAgICAgIC8vIEF1dG8tYXNzaWduIGlmIG5vIG1hbnVhbGx5LXNldCBSb2xlc1xuICAgICAgICBpZiAoIW1hbnVhbFJvbGVzICYmIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b0Fzc2lnblJvbGVzKGVsZW1lbnQpO1xuXG4gICAgICAgIC8vIE9yIG1hbnVhbGx5IHNldCBpZiBwcm92aWRlZFxuICAgICAgICB9IGVsc2UgaWYgKG1hbnVhbFJvbGVzKSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNBcnJheShtYW51YWxSb2xlcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2guYXBwbHkodGhpcy5yb2xlcywgbWFudWFsUm9sZXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2gobWFudWFsUm9sZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdXJwcmVzc0luaXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFJvbGVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBdXRvbWF0aWNhbGx5IGFzc2lnbiBSb2xlcyBiYXNlZCBvbiBlbGVtZW50LCBkZXNpZ25lZFxuICAgICAgICB0byBiZSBleHRlbmRlZFxuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogRWxlbWVudFxuICAgICovXG4gICAgYXV0b0Fzc2lnblJvbGVzKGVsZW1lbnQpIHtcbiAgICAgICAgLy8gQWRkIENTUyByb2xlIGlmIEhUTUxFbGVtZW50XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaChjc3NSb2xlKTtcblxuICAgICAgICAvLyBBZGQgU1ZHIHJvbGUgaWYgU1ZHIGVsZW1lbnRcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5yb2xlcy5wdXNoKHN2Z1JvbGUpO1xuXG4gICAgICAgICAgICAvLyBBZGQgRHJhdyBQYXRoIHJvbGUgaWYgcGF0aCBlbGVtZW50XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAncGF0aCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2goZHJhd1BhdGhSb2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEZpcmUgaW5pdCBjYWxsYmFja3NcbiAgICAqL1xuICAgIGluaXRSb2xlcygpIHtcbiAgICAgICAgLy8gRmlyZSBpbml0IGNhbGxiYWNrXG4gICAgICAgIHRoaXMucm9sZXMuZm9yRWFjaCgocm9sZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJvbGUuaW5pdCkge1xuICAgICAgICAgICAgICAgIHJvbGUuaW5pdC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RGcmFtZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3Muc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEJpbmQgQWN0aW9uIGFuZCByZXR1cm4gaXRzIHRhYmxlIGlkXG5cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEByZXR1cm5zIFtpbnRdXG4gICAgKi9cbiAgICBiaW5kQWN0aW9uKGFjdGlvbiwgaWQpIHtcbiAgICAgICAgaWYgKGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlkID0gdGhpcy5hY3Rpb25Db3VudGVyKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaGFzQWN0aW9uKGlkKSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgICAgIHRoaXMubnVtQWN0aXZlKys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgdW5iaW5kQWN0aW9uKGlkKSB7XG4gICAgICAgIHRoaXMubnVtQWN0aXZlLS07XG4gICAgICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuXG4gICAgICAgIGlmICghdGhpcy5udW1BY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWN0aW9uKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgIH1cblxuICAgIGhhc0FjdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0QWN0aW9uKGlkKSAhPT0gdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICBhbGxBY3RpdmVBY3Rpb25zKGNhbGxiYWNrKSB7XG4gICAgICAgIGVhY2godGhpcy5hY3RpdmVBY3Rpb25zLCAoaWQsIGFjdGlvbikgPT4gY2FsbGJhY2soYWN0aW9uKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIHByb2Nlc3Npbmcgb3JkZXJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl1cbiAgICAqL1xuICAgIHVwZGF0ZU9yZGVyKGtleSwgbW92ZVRvQmFjaywgaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgdmFyIG9yZGVyID0gKCFoYXNDaGlsZHJlbikgPyB0aGlzLmFjdGl2ZVZhbHVlcyA6IHRoaXMuYWN0aXZlUGFyZW50cyxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gb3JkZXIuaW5kZXhPZihrZXkpO1xuXG4gICAgICAgIC8vIElmIGtleSBpc24ndCBsaXN0IG9yIG1vdmVUb0JhY2sgaXMgc2V0IHRvIHRydWUsIGFkZCBrZXlcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAtMSB8fCBtb3ZlVG9CYWNrKSB7XG4gICAgICAgICAgICBvcmRlci5wdXNoKGtleSk7XG5cbiAgICAgICAgICAgIC8vIElmIGtleSBhbHJlYWR5IGV4aXN0cywgcmVtb3ZlXG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPiAtMSkge1xuICAgICAgICAgICAgICAgIG9yZGVyLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydEJvdW5kKGlkLCBpbnB1dCkge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5nZXRBY3Rpb24oaWQpLFxuICAgICAgICAgICAgb3B0cyA9IHV0aWxzLmNvcHkoYWN0aW9uKTtcblxuICAgICAgICBvcHRzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5zZXQob3B0cyk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICB0aGlzLmJpbmRJbnB1dChhY3Rpb24sIGlucHV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICAvLyBbYm9vbGVhbl06IElzIHRoaXMgQWN0b3IgYWN0aXZlP1xuICAgIGdldCBpc0FjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICAgIH1cblxuICAgIC8vIFNldCBoYXNDaGFuZ2VkIHRvIHRydWUgaXMgdGhpcyBpcyBub3cgYWN0aXZlXG4gICAgc2V0IGlzQWN0aXZlKHN0YXR1cykge1xuICAgICAgICBpZiAoc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSBzdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc0FjdGl2ZSA9IHN0YXR1cztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQWN0b3I7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdG9yL0FjdG9yLmpzXG4gKiovIiwiLypcbiAgICBJbnB1dCBjb250cm9sbGVyXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMuanMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscy5qcycpLFxuICAgIEhpc3RvcnkgPSByZXF1aXJlKCcuLi9pbmMvSGlzdG9yeS5qcycpLFxuXG4gICAgLypcbiAgICAgICAgSW5wdXQgY29uc3RydWN0b3JcbiAgICAgICAgXG4gICAgICAgICAgICBTeW50YXhcbiAgICAgICAgICAgICAgICBuZXdJbnB1dChuYW1lLCB2YWx1ZVssIHBvbGxdKVxuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgdG8gdHJhY2tcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBJbml0aWFsIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dIChvcHRpb25hbCk6IEZ1bmN0aW9uIHRvIHBvbGwgSW5wdXQgZGF0YVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBuZXdJbnB1dChwcm9wc1ssIHBvbGxdKVxuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCBvZiB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl0gKG9wdGlvbmFsKTogRnVuY3Rpb24gdG8gcG9sbCBJbnB1dCBkYXRhXG5cbiAgICAgICAgQHJldHVybiBbSW5wdXRdXG4gICAgKi9cbiAgICBJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBvbGxQb3MgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcblxuICAgICAgICB0aGlzLmN1cnJlbnQgPSB7fTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB7fTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHt9O1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgSGlzdG9yeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIFxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jKGFyZ3VtZW50c1twb2xsUG9zXSkpIHtcbiAgICAgICAgICAgIHRoaXMucG9sbCA9IGFyZ3VtZW50c1twb2xsUG9zXTtcbiAgICAgICAgfVxuICAgIH07XG5cbklucHV0LnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogTnVtYmVyIG9mIGZyYW1lcyBvZiBpbmFjdGl2aXR5IGJlZm9yZSB2ZWxvY2l0eSBpcyB0dXJuZWQgdG8gMFxuICAgIG1heEluYWN0aXZlRnJhbWVzOiAyLFxuICAgIFxuICAgIC8vIFtudW1iZXJdOiBOdW1iZXIgb2YgZnJhbWVzIGlucHV0IGhhc24ndCBiZWVuIHVwZGF0ZWRcbiAgICBpbmFjdGl2ZUZyYW1lczogMCxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgbGF0ZXN0IGlucHV0IHZhbHVlc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddIChvcHRpb25hbCk6IE5hbWUgb2Ygc3BlY2lmaWMgcHJvcGVydHkgdG8gcmV0dXJuXG4gICAgICAgIEByZXR1cm4gW29iamVjdCB8fCBudW1iZXJdOiBMYXRlc3QgaW5wdXQgdmFsdWVzIG9yLCBpZiBzcGVjaWZpZWQsIHNpbmdsZSB2YWx1ZVxuICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICB2YXIgbGF0ZXN0ID0gdGhpcy5oaXN0b3J5LmdldCgpLFxuICAgICAgICAgICAgdmFsID0gKHByb3AgIT09IHVuZGVmaW5lZCkgPyBsYXRlc3RbcHJvcF0gOiBsYXRlc3Q7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBVcGRhdGUgdGhlIGlucHV0IHZhbHVlc1xuICAgICAgICBcbiAgICAgICAgU3ludGF4XG4gICAgICAgICAgICBpbnB1dC51cGRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHRvIHRyYWNrXG4gICAgICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBJbml0aWFsIHZhbHVlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBpbnB1dC51cGRhdGUocHJvcHMpXG4gICAgICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3Qgb2YgdmFsdWVzXG4gICAgICAgICAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW0lucHV0XVxuICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoYXJnMCwgYXJnMSkge1xuICAgICAgICB2YXIgdmFsdWVzID0ge307XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtKGFyZzEpKSB7XG4gICAgICAgICAgICB2YWx1ZXNbYXJnMF0gPSBhcmcxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVzID0gYXJnMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGlzdG9yeS5hZGQodXRpbHMubWVyZ2UodGhpcy5jdXJyZW50LCB2YWx1ZXMpKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQ2hlY2sgZm9yIGlucHV0IG1vdmVtZW50IGFuZCB1cGRhdGUgcG9pbnRlciBvYmplY3QncyBwcm9wZXJ0aWVzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFRpbWVzdGFtcCBvZiBmcmFtZVxuICAgICAgICBAcmV0dXJuIFtJbnB1dF1cbiAgICAqL1xuICAgIG9uRnJhbWU6IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIGxhdGVzdCwgaGFzQ2hhbmdlZDtcbiAgICAgICAgXG4gICAgICAgIC8vIENoZWNrIHByb3ZpZGVkIHRpbWVzdGFtcCBhZ2FpbnN0IGxhc3RGcmFtZSB0aW1lc3RhbXAgYW5kIHJldHVybiBpbnB1dCBoYXMgYWxyZWFkeSBiZWVuIHVwZGF0ZWRcbiAgICAgICAgaWYgKHRpbWVzdGFtcCA9PT0gdGhpcy5sYXN0RnJhbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGF0ZXN0ID0gKHRoaXMucG9sbCkgPyB0aGlzLnBvbGwoKSA6IHRoaXMuaGlzdG9yeS5nZXQoKTtcbiAgICAgICAgaGFzQ2hhbmdlZCA9IHV0aWxzLmhhc0NoYW5nZWQodGhpcy5jdXJyZW50LCBsYXRlc3QpO1xuXG4gICAgICAgIC8vIElmIGlucHV0IGhhcyBjaGFuZ2VkIGJldHdlZW4gZnJhbWVzICBcbiAgICAgICAgaWYgKGhhc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSBjYWxjLm9mZnNldCh0aGlzLmN1cnJlbnQsIGxhdGVzdCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBsYXRlc3Q7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcblxuICAgICAgICAvLyBPciBpdCBoYXNuJ3QgbW92ZWQgYW5kIG91ciBmcmFtZSBsaW1pdCBoYXMgYmVlbiByZWFjaGVkXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+PSB0aGlzLm1heEluYWN0aXZlRnJhbWVzKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gY2FsYy5vZmZzZXQodGhpcy5jdXJyZW50LCB0aGlzLmN1cnJlbnQpO1xuICAgICAgICBcbiAgICAgICAgLy8gT3IgaW5wdXQgaGFzbid0IGNoYW5nZWRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMrKztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSB0aW1lc3RhbXA7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lucHV0L0lucHV0LmpzXG4gKiovIiwidmFyIEFjdG9yID0gcmVxdWlyZSgnLi4vYWN0b3IvQWN0b3InKSxcbiAgICBUd2VlbiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvVHdlZW4nKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5jb25zdCBERUZBVUxUX1NUQUdHRVJfRUFTRSA9ICdsaW5lYXInO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUNhbGxiYWNrKG1ldGhvZCwgLi4uYXJncykge1xuICAgIHJldHVybiB1dGlscy5pc1N0cmluZyhtZXRob2QpID8gXG4gICAgICAgIGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBtZW1iZXJbbWV0aG9kXSguLi5hcmdzKTtcbiAgICAgICAgfSA6IG1ldGhvZDtcbn1cblxuY2xhc3MgSXRlcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lbWJlcnMpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICAgIGlmIChtZW1iZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChtZW1iZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0YWdnZXIgPSBuZXcgQWN0b3IoKTtcbiAgICB9XG5cbiAgICBhZGQobWVtYmVycykge1xuICAgICAgICB0aGlzLm1lbWJlcnMgPSB0aGlzLm1lbWJlcnMuY29uY2F0KG1lbWJlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGVhY2gobWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGdlbmVyYXRlQ2FsbGJhY2sobWV0aG9kLCAuLi5hcmdzKTtcbiAgICAgICAgdGhpcy5tZW1iZXJzLmZvckVhY2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBlYWNoSW50b05ldyhtZXRob2QsIC4uLmFyZ3MpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZ2VuZXJhdGVDYWxsYmFjayhtZXRob2QsIC4uLmFyZ3MpLFxuICAgICAgICAgICAgbmV3SXRlcmF0b3IgPSBuZXcgSXRlcmF0b3IoKTtcblxuICAgICAgICB0aGlzLm1lbWJlcnMuZm9yRWFjaCgobWVtYmVyKSA9PiBuZXdJdGVyYXRvci5hZGQoY2FsbGJhY2sobWVtYmVyKSkpO1xuXG4gICAgICAgIHJldHVybiBuZXdJdGVyYXRvcjtcbiAgICB9XG5cbiAgICBzdGFnZ2VyKG1ldGhvZCwgcHJvcHMsIC4uLmFyZ3MpIHtcbiAgICAgICAgdmFyIG51bU1lbWJlcnMgPSB0aGlzLm1lbWJlcnMubGVuZ3RoLFxuICAgICAgICAgICAgcHJvcHNJc0ludGVydmFsID0gdXRpbHMuaXNOdW0ocHJvcHMpLFxuICAgICAgICAgICAgaW50ZXJ2YWwgPSBwcm9wc0lzSW50ZXJ2YWwgPyBwcm9wcyA6IHByb3BzLmludGVydmFsLFxuICAgICAgICAgICAgc3RhZ2dlclByb3BzID0ge30sXG4gICAgICAgICAgICBpID0gLTEsXG4gICAgICAgICAgICBjYWxsYmFjayA9IGdlbmVyYXRlQ2FsbGJhY2sobWV0aG9kLCAuLi5hcmdzKTtcblxuICAgICAgICBzdGFnZ2VyUHJvcHMudmFsdWVzID0ge1xuICAgICAgICAgICAgaToge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGludGVydmFsICogbnVtTWVtYmVycyxcbiAgICAgICAgICAgICAgICBlYXNlOiBwcm9wc0lzSW50ZXJ2YWwgPyBERUZBVUxUX1NUQUdHRVJfRUFTRSA6IHByb3BzLmVhc2UgfHwgREVGQVVMVF9TVEFHR0VSX0VBU0UsXG4gICAgICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdG86IG51bU1lbWJlcnMgLSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc3RhZ2dlclByb3BzLm9uVXBkYXRlID0gKG91dHB1dCkgPT4ge1xuICAgICAgICAgICAgdmFyIG5ld0luZGV4ID0gb3V0cHV0LmksXG4gICAgICAgICAgICAgICAgZ2FwSW5kZXggPSBpICsgMTtcblxuICAgICAgICAgICAgLy8gSWYgb3VyIG5ldyBpbmRleCBpcyBvbmx5IG9uZSBtb3JlIHRoYW4gdGhlIHByZXZpb3VzIGluZGV4LCBmaXJlIGltbWVkaWV0bHlcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA9PT0gaSArIDEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0aGlzLm1lbWJlcnNbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG5cbiAgICAgICAgICAgIC8vIE9yIGxvb3AgdGhyb3VnaCB0aGUgZGlzdGFuY2UgdG8gZmlyZSBhbGwgaW5kZWNpZXMuIEluY3JlYXNlIGRlbGF5LlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKDsgZ2FwSW5kZXggPD0gbmV3SW5kZXg7IGdhcEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5tZW1iZXJzW2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaSA9IG5ld0luZGV4O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3N0YWdnZXIuc3RhcnQobmV3IFR3ZWVuKHN0YWdnZXJQcm9wcykpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJdGVyYXRvcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pdGVyYXRvci9JdGVyYXRvci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpLFxuXG4gICAgLypcbiAgICAgICAgUHJvY2VzcyBjb25zdHJ1Y3RvclxuICAgICAgICBcbiAgICAgICAgU3ludGF4XG4gICAgICAgICAgICB2YXIgcHJvY2VzcyA9IG5ldyBQcm9jZXNzKHNjb3BlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB2YXIgcHJvY2VzcyA9IG5ldyBQcm9jZXNzKGNhbGxiYWNrKTtcbiAgICAqL1xuICAgIFByb2Nlc3MgPSBmdW5jdGlvbiAoc2NvcGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBoYXNTY29wZSA9IChjYWxsYmFjayAhPT0gdW5kZWZpbmVkKTtcblxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gaGFzU2NvcGUgPyBjYWxsYmFjayA6IHNjb3BlO1xuICAgICAgICB0aGlzLnNjb3BlID0gaGFzU2NvcGUgPyBzY29wZSA6IHRoaXM7XG4gICAgICAgIHRoaXMuaWQgPSBtYW5hZ2VyLnJlZ2lzdGVyKCk7XG5cbiAgICAgICAgLy8gW2Jvb2xlYW5dOiBJcyB0aGlzIHByb2Nlc3MgY3VycmVudGx5IGFjdGl2ZT9cbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG5cblByb2Nlc3MucHJvdG90eXBlID0ge1xuICAgIC8qXG4gICAgICAgIEZpcmUgY2FsbGJhY2tcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbdGltZXN0YW1wXTogVGltZXN0YW1wIG9mIGN1cnJlbnRseS1leGVjdXRlZCBmcmFtZVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuICAgICovXG4gICAgZmlyZTogZnVuY3Rpb24gKHRpbWVzdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrLmNhbGwodGhpcy5zY29wZSwgdGltZXN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHdlJ3JlIHJ1bm5pbmcgYXQgYW4gaW50ZXJ2YWwsIGRlYWN0aXZhdGUgYWdhaW5cbiAgICAgICAgaWYgKHRoaXMuaXNJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0YXJ0IHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogRHVyYXRpb24gb2YgcHJvY2VzcyBpbiBtcywgMCBpZiBpbmRlZmluaXRlXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdG9wVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0b3AoKTtcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5pc1N0b3BUaW1lckFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0b3AgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQWN0aXZhdGUgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICBtYW5hZ2VyLmFjdGl2YXRlKHRoaXMsIHRoaXMuaWQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRGVhY3RpdmF0ZSBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIG1hbmFnZXIuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRmlyZSBwcm9jZXNzIGV2ZXJ5IHggbXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIG1zIHRvIHdhaXQgYmV0d2VlbiByZWZpcmluZyBwcm9jZXNzLlxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgZXZlcnk6IGZ1bmN0aW9uIChpbnRlcnZhbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuXG4gICAgICAgIHRoaXMuaXNJbnRlcnZhbCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5hY3RpdmF0ZSgpO1xuICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlzSW50ZXJ2YWxUaW1lQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQ2xlYXIgYWxsIHRpbWVyc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFxuICAgICovXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0ludGVydmFsID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5pc1N0b3BUaW1lckFjdGl2ZSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RvcFRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuaXNJbnRlcnZhbFRpbWVBY3RpdmUpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbFRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9jZXNzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb2Nlc3MvUHJvY2Vzcy5qc1xuICoqLyIsInZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xudmFyIGVhY2ggPSB1dGlscy5lYWNoO1xuXG4vKlxuICAgIFJvbGUgY2xhc3MgY29uc3RydWN0b3JcblxuICAgIEBwYXJhbSBbb2JqZWN0XTogT3B0aW9uYWwgbWV0aG9kcyBhbmQgcHJvcHMgdG8gYWRkOlxuICAgICAgICBuYW1lIFtzdHJpbmddOiAgICAgIE5hbWUgb2YgZ2VuZXJhdGVkIGdldHRlci9zZXR0ZXIgbWV0aG9kIG9uIEFjdG9yXG4gICAgICAgIF9tYXAgW29iamVjdF06ICAgICAgTWFwIEFjdG9yIHZhbHVlcyB0byB0aGVzZSB2YWx1ZXMgZm9yIHRoaXMgUm9sZVxuICAgICAgICBfdHlwZU1hcCBbb2JqZWN0XTogIE1hcCB2YWx1ZXMgdG8gdmFsdWUgdHlwZXNcbiAgICAgICAgaW5pdCBbZnVuY3Rpb25dOiAgICBDYWxsYmFjayB0byBydW4gd2hlbiB0aGlzIFJvbGUgaXMgYWRkZWQgdG8gYW4gQWN0b3JcbiAgICAgICAgc3RhcnQgW2Z1bmN0aW9uXTogICBDYWxsYmFjayB0byBydW4gd2hlbiBob3N0IEFjdG9yIHN0YXJ0cyBhbiBhY3Rpb25cbiAgICAgICAgY29tcGxldGUgW2Z1bmN0aW9uXTogQ2FsbGJhY2sgdG8gcnVuIHdoZW4gYWN0aW9uIGNvbXBsZXRlc1xuICAgICAgICBmcmFtZSBbZnVuY3Rpb25dOiAgIENhbGxiYWNrIHRvIGZpcmUgb25jZSBwZXIgZnJhbWVcbiAgICAgICAgdXBkYXRlIFtmdW5jdGlvbl06ICBDYWxsYmFjayB0byBmaXJlIHdoZW4gdmFsdWVzIGNoYW5nZVxuICAgICAgICBnZXQgW2Z1bmN0aW9uXTogICAgIFJlYWQgdmFsdWUgZnJvbSBhY3R1YWwgZWxlbWVudFxuICAgICAgICBzZXQgW2Z1bmN0aW9uXTogICAgIFNldCB2YWx1ZSBvbiBhY3R1YWwgZWxlbWVudFxuKi9cbnZhciBSb2xlID0gZnVuY3Rpb24gKG1ldGhvZHMpIHtcbiAgICB2YXIgcm9sZSA9IHRoaXM7XG5cbiAgICByb2xlLl9tYXAgPSB7fTtcblxuICAgIGVhY2gobWV0aG9kcywgZnVuY3Rpb24gKG5hbWUsIG1ldGhvZCkge1xuICAgICAgICByb2xlW25hbWVdID0gKCF1dGlscy5pc09iaihtZXRob2QpKSA/IG1ldGhvZCA6IHV0aWxzLmNvcHkobWV0aG9kKTtcbiAgICB9KTtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIGEgbmV3IHJvbGVcblxuICAgIEBwYXJhbSBbb2JqZWN0XTogT3B0aW9uYWwgbWV0aG9kcyBhbmQgcHJvcHMgdG8gYWRkXG4gICAgQHBhcmFtIFt2YWx1ZXNUb01hcF06IE92ZXJyaWRlIGV4aXN0aW5nIG1hcCB3aXRoIHRoZXNlIHZhbHVlc1xuICAgIEByZXR1cm4gW1JvbGVdOiBOZXcgUm9sZVxuKi9cbnZhciBjcmVhdGVSb2xlID0gZnVuY3Rpb24gKG1ldGhvZHMsIHZhbHVlcykge1xuICAgIHZhciBuZXdSb2xlID0gbmV3IFJvbGUobWV0aG9kcyk7XG5cbiAgICBlYWNoKHZhbHVlcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgbmV3Um9sZS5fbWFwW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdSb2xlO1xufTtcblxuUm9sZS5wcm90b3R5cGUgPSB7XG5cbiAgICAvKlxuICAgICAgICBNYXAgdmFsdWUga2V5cyBvciBnZW5lcmF0ZSBuZXcgUm9sZSB3aXRoIHVwZGF0ZWQgbWFwXG5cbiAgICAgICAgR2V0dGVyOlxuICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgdG8gbWFwXG4gICAgICAgICAgICBAcmV0dXJuIFtzdHJpbmddOiBNYXBwZWQga2V5LCBvciBrZXkgaWYgbm8gbWFwcGVkIGtleSBmb3VuZFxuXG4gICAgICAgIFNldHRlcjogXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IE1hcCBvZiBBY3RvciBrZXlzIC0+IFJvbGUga2V5c1xuICAgICAgICAgICAgQHJldHVybiBbUm9sZV06IE5ldyBSb2xlIHdpdGggdW5pcXVlIG1hcFxuICAgICovXG4gICAgbWFwOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBzdHJpbmcsIGdldCBtYXBwZWQgdmFsdWVcbiAgICAgICAgLy8gT3RoZXJ3aXNlIHRoaXMgaXMgYSBtYXAsIGR1cGxpY2F0ZWQgcm9sZSB3aXRoIHVwZGF0ZWQgbWFwXG4gICAgICAgIHJldHVybiAodXRpbHMuaXNTdHJpbmcodmFsdWVzKSkgPyB0aGlzLl9tYXBbdmFsdWVzXSB8fCB2YWx1ZXMgOiBjcmVhdGVSb2xlKHRoaXMsIHZhbHVlcyk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSb2xlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL1JvbGUuanNcbiAqKi8iLCJ2YXIgQmV6aWVyID0gcmVxdWlyZSgnLi9CZXppZXInKSxcblxuICAgIC8qXG4gICAgICAgIE1pcnJvciBlYXNpbmdcbiAgICAgICAgXG4gICAgICAgIE1pcnJvcnMgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBoZXJlIGZvciBtaXJyb3JpbmcgYW5cbiAgICAgICAgZWFzZUluIGludG8gYW4gZWFzZUluT3V0XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1pcnJvclxuICAgICAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuICAgICovXG4gICAgbWlycm9yRWFzaW5nID0gZnVuY3Rpb24gKHByb2dyZXNzLCBtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIChwcm9ncmVzcyA8PSAwLjUpID8gbWV0aG9kKDIgKiBwcm9ncmVzcykgLyAyIDogKDIgLSBtZXRob2QoMiAqICgxIC0gcHJvZ3Jlc3MpKSkgLyAyO1xuICAgIH0sXG4gICAgICAgICAgICBcbiAgICAvKlxuICAgICAgICBSZXZlcnNlIGVhc2luZ1xuICAgICAgICBcbiAgICAgICAgUmV2ZXJzZXMgdGhlIG91dHB1dCBvZiB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGZvciBmbGlwcGluZyBlYXNlSW5cbiAgICAgICAgY3VydmUgdG8gYW4gZWFzZU91dC5cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gcmV2ZXJzZVxuICAgICAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuICAgICovXG4gICAgcmV2ZXJzZUVhc2luZyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgbWV0aG9kKSB7XG4gICAgICAgIHJldHVybiAxIC0gbWV0aG9kKDEgLSBwcm9ncmVzcyk7XG4gICAgfTtcblxuLypcbiAgICBFYXNpbmcgY2xhc3NcblxuICAgIElmIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgcmV0dXJucyBlYXNpbmcgZnVuY3Rpb24gd2l0aCBcbiAgICBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuXG4gICAgSWYgcHJvdmlkZWQgZm91ciBhcmd1bWVudHMsIHJldHVybnMgbmV3IEJlemllciBjbGFzcyBpbnN0ZWFkLlxuKi9cbnZhciBFYXNpbmcgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICB2YXIgbWV0aG9kID0geDEsXG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uO1xuXG4gICAgLy8gSWYgdGhpcyBpcyBhIGJlemllciBjdXJ2ZSwgcmV0dXJuIGEgYmV6aWVyIGZ1bmN0aW9uXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gbmV3IEJlemllcih4MSwgeTEsIHgyLCB5Mik7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBlYXNpbmdGdW5jdGlvbiA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZWFzaW5nRnVuY3Rpb24uaW4gPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uLm91dCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIHJldmVyc2VFYXNpbmcocHJvZ3Jlc3MsIG1ldGhvZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZWFzaW5nRnVuY3Rpb24uaW5PdXQgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBtaXJyb3JFYXNpbmcocHJvZ3Jlc3MsIG1ldGhvZCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGVhc2luZ0Z1bmN0aW9uO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFYXNpbmc7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi9FYXNpbmcuanNcbiAqKi8iLCJsZXQgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaCxcbiAgICBDb250cm9scyA9IHJlcXVpcmUoJy4uL2NvbnRyb2xzL0NvbnRyb2xzJyk7XG5cbmNvbnN0IERFRkFVTFRfUFJPUCA9ICdjdXJyZW50JztcblxuY2xhc3MgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcztcblxuICAgICAgICB1dGlscy5lYWNoKHRoaXMuZ2V0RGVmYXVsdFByb3BzKCksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBhY3Rpb25ba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnNldChwcm9wcywgdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCkpO1xuICAgIH1cblxuICAgIHNldChwcm9wcyA9IHt9LCBkZWZhdWx0UHJvcCA9IERFRkFVTFRfUFJPUCkge1xuICAgICAgICBlYWNoKHByb3BzLCAoa2V5LCBwcm9wKSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAndmFsdWVzJykge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1lcmdlIHZhbHVlc1xuICAgICAgICBpZiAocHJvcHMudmFsdWVzKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFZhbHVlcyA9IHRoaXMudmFsdWVzLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHByb3BzLnZhbHVlcztcblxuICAgICAgICAgICAgZWFjaCh2YWx1ZXMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGV4aXN0aW5nVmFsdWUgPSBjdXJyZW50VmFsdWVzW2tleV0sXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0ge307XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IGV4aXN0aW5nVmFsdWUgPyB1dGlscy5tZXJnZShleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSkgOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJvY2VzcyhhY3RvciwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAvKlxuICAgICAgICBIYXMgQWN0aW9uIGVuZGVkP1xuICAgICAgICBcbiAgICAgICAgUmV0dXJucyB0cnVlIHRvIGVuZCBpbW1lZGlldGx5XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogdHJ1ZVxuICAgICovXG4gICAgaGFzRW5kZWQoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAgICAgXG4gICAgbGltaXQob3V0cHV0LCB2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdHJpY3RlZCA9IGNhbGMucmVzdHJpY3RlZChvdXRwdXQsIHZhbHVlLm1pbiwgdmFsdWUubWF4KSxcbiAgICAgICAgICAgIGVzY2FwZUFtcCA9IHZhbHVlLmVzY2FwZUFtcCAhPT0gdW5kZWZpbmVkID8gdmFsdWUuZXNjYXBlQW1wIDogMDtcbiAgICAgICAgcmV0dXJuIHJlc3RyaWN0ZWQgKyAoKG91dHB1dCAtIHJlc3RyaWN0ZWQpICogZXNjYXBlQW1wKTtcbiAgICB9XG5cbiAgICBnZXRDb250cm9scygpIHtcbiAgICAgICAgcmV0dXJuIENvbnRyb2xzO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfVxuXG4gICAgZXh0ZW5kKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih1dGlscy5tZXJnZSh0aGlzLCBwcm9wcyksIHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpKTtcbiAgICB9XG5cbiAgICBnZXRQbGF5YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5kKCk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBY3Rpb247XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9BY3Rpb24uanNcbiAqKi8iLCJsZXQgQWN0aW9uID0gcmVxdWlyZSgnLi9BY3Rpb24nKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoLFxuICAgIHByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vdHdlZW4vcHJlc2V0LWVhc2luZycpLFxuICAgIHZhbHVlT3BzID0gcmVxdWlyZSgnLi4vYWN0b3IvdmFsdWUtb3BlcmF0aW9ucycpLFxuICAgIFR3ZWVuQ29udHJvbHMgPSByZXF1aXJlKCcuL3R3ZWVuL1R3ZWVuQ29udHJvbHMnKSxcblxuICAgIG5leHRTdGVwcyA9IHtcbiAgICAgICAgbG9vcDogJ3Jlc3RhcnQnLFxuICAgICAgICB5b3lvOiAncmV2ZXJzZScsXG4gICAgICAgIGZsaXA6ICdmbGlwVmFsdWVzJ1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBFYXNlIHZhbHVlIHdpdGhpbiByYW5nZWQgcGFyYW1ldGVyc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAwIHByb2dyZXNzXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgICAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgICAgICAgICAgdG8gdXNlIG9yIGdlbmVyYXRlZCBlYXNpbmcgZnVuY3Rpb25cbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiAgICAqLyAgXG4gICAgZWFzZSA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpIHtcbiAgICAgICAgdmFyIHByb2dyZXNzTGltaXRlZCA9IGNhbGMucmVzdHJpY3RlZChwcm9ncmVzcywgMCwgMSksXG4gICAgICAgICAgICBlYXNpbmdGdW5jdGlvbiA9IHV0aWxzLmlzU3RyaW5nKGVhc2UpID8gcHJlc2V0RWFzaW5nW2Vhc2VdIDogZWFzZTtcblxuICAgICAgICByZXR1cm4gY2FsYy52YWx1ZUVhc2VkKHByb2dyZXNzTGltaXRlZCwgZnJvbSwgdG8sIGVhc2luZ0Z1bmN0aW9uKTtcbiAgICB9O1xuXG5jb25zdCBDT1VOVCA9ICdjb3VudCc7XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBnZXRDb250cm9scygpIHtcbiAgICAgICAgcmV0dXJuIFR3ZWVuQ29udHJvbHM7XG4gICAgfVxuICAgIFxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlsYXRlOiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgeW95bzogZmFsc2UsXG4gICAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIHBsYXlEaXJlY3Rpb246IDEsXG4gICAgICAgICAgICBlbmRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBlYXNlOiAnZWFzZU91dCcsXG4gICAgICAgICAgICBzdGFnZ2VyOiAwLFxuICAgICAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndG8nO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFVwZGF0ZSBBY3Rpb24gZWxhcHNlZCB0aW1lXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGltZXN0YW1wIG9mIGN1cnJlbnQgZnJhbWVcbiAgICAqL1xuICAgIG9uRnJhbWVTdGFydChhY3RvciwgZnJhbWVEdXJhdGlvbikge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmVsYXBzZWQgfHwgMDtcblxuICAgICAgICBpZiAoZnJhbWVEdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5lbGFwc2VkICs9IChmcmFtZUR1cmF0aW9uICogYWN0b3IuZGlsYXRlKSAqIHRoaXMucGxheURpcmVjdGlvbjtcbiAgICAgICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQ2FsY3VsYXRlIHByb2dyZXNzIG9mIHZhbHVlIGJhc2VkIG9uIHRpbWUgZWxhcHNlZCxcbiAgICAgICAgdmFsdWUgZGVsYXkvZHVyYXRpb24vc3RhZ2dlciBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBWYWx1ZSBzdGF0ZSBhbmQgcHJvcGVydGllc1xuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzKGFjdG9yLCB2YWx1ZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdmFsdWUudG8sXG4gICAgICAgICAgICBwcm9ncmVzc1RhcmdldCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMSA6IDAsXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlLmN1cnJlbnQsXG4gICAgICAgICAgICBwcm9ncmVzcztcblxuICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGhhcyBhIHRvIHByb3BlcnR5LCBvdGhlcndpc2Ugd2UganVzdCByZXR1cm4gY3VycmVudCB2YWx1ZVxuICAgICAgICBpZiAodGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHByb2dyZXNzID0gY2FsYy5yZXN0cmljdGVkKGNhbGMucHJvZ3Jlc3ModGhpcy5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIHZhbHVlLmR1cmF0aW9uKSAtIHZhbHVlLnN0YWdnZXIsIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIEFjdGlvbiBhcyBOT1QgZW5kZWQgaWYgc3RpbGwgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyAhPT0gcHJvZ3Jlc3NUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0ZXAgcHJvZ3Jlc3MgaWYgd2UncmUgc3RlcHBpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zdGVwcykge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gdXRpbHMuc3RlcFByb2dyZXNzKHByb2dyZXNzLCB2YWx1ZS5zdGVwcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVhc2UgdmFsdWVcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gZWFzZShwcm9ncmVzcywgdmFsdWUub3JpZ2luLCB0YXJnZXQsIHZhbHVlLmVhc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIElmIHRoaXMgdHdlZW4gaGFzIGVuZGVkLCBjaGVjayBpZiB3ZSBsb29wL3lveW8vZmxpcFxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IEhhcyB0aGlzIHR3ZWVuIHJlYWxseSByZWFsbHkgZW5kZWQ/XG4gICAgKi9cbiAgICBoYXNFbmRlZChhY3Rvcikge1xuICAgICAgICBpZiAodGhpcy5lbmRlZCkge1xuICAgICAgICAgICAgZWFjaChuZXh0U3RlcHMsIChuYW1lLCBtZXRob2ROYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tOZXh0U3RlcChhY3RvciwgbmFtZSwgdGhpc1ttZXRob2ROYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBhY3Rvci5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kZWQ7XG4gICAgfVxuXG4gICAgY2hlY2tOZXh0U3RlcChhY3RvciwgbmFtZSwgbWV0aG9kKSB7XG4gICAgICAgIHZhciBzdGVwVGFrZW4gPSBmYWxzZSxcbiAgICAgICAgICAgIHN0ZXAgPSB0aGlzW25hbWVdLFxuICAgICAgICAgICAgY291bnQgPSB0aGlzW25hbWUgKyBDT1VOVF0gfHwgMCxcbiAgICAgICAgICAgIGZvcmV2ZXIgPSAoc3RlcCA9PT0gdHJ1ZSk7XG5cbiAgICAgICAgaWYgKGZvcmV2ZXIgfHwgdXRpbHMuaXNOdW0oc3RlcCkpIHtcbiAgICAgICAgICAgICsrY291bnQ7XG4gICAgICAgICAgICB0aGlzW25hbWUgKyBDT1VOVF0gPSBjb3VudDtcblxuICAgICAgICAgICAgaWYgKGZvcmV2ZXIgfHwgY291bnQgPD0gc3RlcCkge1xuICAgICAgICAgICAgICAgIG1ldGhvZC5jYWxsKHRoaXMsIGFjdG9yKTtcbiAgICAgICAgICAgICAgICBzdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0ZXBUYWtlbjtcbiAgICB9XG5cbiAgICBmbGlwVmFsdWVzKGFjdG9yKSB7XG4gICAgICAgIHZhciBhY3RvclZhbHVlcyA9IGFjdG9yLnZhbHVlcztcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcblxuICAgICAgICBlYWNoKHRoaXMudmFsdWVzLCAoa2V5KSA9PiB7XG4gICAgICAgICAgICB2YWx1ZU9wcy5mbGlwKGFjdG9yVmFsdWVzW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW47XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9Ud2Vlbi5qc1xuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgc2ltdWxhdGlvbnMgPSByZXF1aXJlKCcuL3NpbXVsYXRlL3NpbXVsYXRpb25zJyk7XG5cbmNvbnN0IERFRkFVTFRfUFJPUCA9ICd2ZWxvY2l0eSc7XG5cbmNsYXNzIFNpbXVsYXRlIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1heEluYWN0aXZlRnJhbWVzOiAzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gW3N0cmluZ106IFNpbXVsYXRpb24gdG8gLnJ1blxuICAgICAgICAgICAgc2ltdWxhdGU6IERFRkFVTFRfUFJPUCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IERlY2VsZXJhdGlvbiB0byBhcHBseSB0byB2YWx1ZSwgaW4gdW5pdHMgcGVyIHNlY29uZFxuICAgICAgICAgICAgZGVjZWxlcmF0aW9uOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgICAgICAgICBhY2NlbGVyYXRpb246IDAsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgICAgICAgICBib3VuY2U6IDAsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBTcHJpbmcgc3RyZW5ndGggZHVyaW5nICdzdHJpbmcnXG4gICAgICAgICAgICBzcHJpbmc6IDgwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogVGltZWNvbnN0YW50IG9mIGdsaWRlXG4gICAgICAgICAgICB0aW1lQ29uc3RhbnQ6IDM5NSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gICAgICAgICAgICBzdG9wU3BlZWQ6IDUsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtib29sZWFuXTogQ2FwdHVyZSB3aXRoIHNwcmluZyBwaHlzaWNzIG9uIGxpbWl0IGJyZWFjaFxuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWVcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgICAgIFNpbXVsYXRlIHRoZSBWYWx1ZSdzIHBlci1mcmFtZSBtb3ZlbWVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgY3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IER1cmF0aW9uIG9mIGZyYW1lIGluIG1zXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IENhbGN1bGF0ZWQgdmFsdWVcbiAgICAqL1xuICAgIHByb2Nlc3MoYWN0b3IsIHZhbHVlLCBrZXksIHRpbWVTaW5jZUxhc3RGcmFtZSkge1xuICAgICAgICB2YXIgc2ltdWxhdGUgPSB2YWx1ZS5zaW11bGF0ZSxcbiAgICAgICAgICAgIHNpbXVsYXRpb24gPSB1dGlscy5pc1N0cmluZyhzaW11bGF0ZSkgPyBzaW11bGF0aW9uc1tzaW11bGF0ZV0gOiBzaW11bGF0ZSxcbiAgICAgICAgICAgIG5ld1ZlbG9jaXR5ID0gc2ltdWxhdGlvbiA/IHNpbXVsYXRpb24odmFsdWUsIHRpbWVTaW5jZUxhc3RGcmFtZSwgYWN0b3Iuc3RhcnRlZCkgOiAwO1xuXG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gKE1hdGguYWJzKG5ld1ZlbG9jaXR5KSA+PSB2YWx1ZS5zdG9wU3BlZWQpID8gbmV3VmVsb2NpdHkgOiAwO1xuICAgICAgICByZXR1cm4gdmFsdWUuY3VycmVudCArIGNhbGMuc3BlZWRQZXJGcmFtZSh2YWx1ZS52ZWxvY2l0eSwgdGltZVNpbmNlTGFzdEZyYW1lKTtcbiAgICB9XG4gICAgXG4gICAgLypcbiAgICAgICAgSGFzIHRoaXMgYWN0aW9uIGVuZGVkP1xuICAgICAgICBcbiAgICAgICAgVXNlIGEgZnJhbWVjb3VudGVyIHRvIHNlZSBpZiBBY3Rpb24gaGFzIGNoYW5nZWQgaW4gdGhlIGxhc3QgeCBmcmFtZXNcbiAgICAgICAgYW5kIGRlY2xhcmUgZW5kZWQgaWYgbm90XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW0FjdG9yXVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dOiBIYXMgQWN0aW9uIGNoYW5nZWQ/XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBIYXMgQWN0aW9uIGVuZGVkP1xuICAgICovXG4gICAgaGFzRW5kZWQoYWN0b3IsIGhhc0NoYW5nZWQpIHtcbiAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IGhhc0NoYW5nZWQgPyAwIDogdGhpcy5pbmFjdGl2ZUZyYW1lcyArIDE7XG4gICAgICAgIHJldHVybiAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+IGFjdG9yLm1heEluYWN0aXZlRnJhbWVzKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBMaW1pdCBvdXRwdXQgdG8gdmFsdWUgcmFuZ2UsIGlmIGFueVxuICAgICAgICBcbiAgICAgICAgSWYgdmVsb2NpdHkgaXMgYXQgb3IgbW9yZSB0aGFuIHJhbmdlLCBhbmQgdmFsdWUgaGFzIGEgYm91bmNlIHByb3BlcnR5LFxuICAgICAgICBydW4gdGhlIGJvdW5jZSBzaW11bGF0aW9uXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IENhbGN1bGF0ZWQgb3V0cHV0XG4gICAgICAgIEBwYXJhbSBbVmFsdWVdOiBDdXJyZW50IFZhbHVlXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IExpbWl0LWFkanVzdGVkIG91dHB1dFxuICAgICovXG4gICAgbGltaXQob3V0cHV0LCB2YWx1ZSkge1xuICAgICAgICB2YXIgaXNPdXRzaWRlTWF4ID0gKG91dHB1dCA+PSB2YWx1ZS5tYXgpLFxuICAgICAgICAgICAgaXNPdXRzaWRlTWluID0gKG91dHB1dCA8PSB2YWx1ZS5taW4pLFxuICAgICAgICAgICAgaXNPdXRzaWRlUmFuZ2UgPSBpc091dHNpZGVNYXggfHwgaXNPdXRzaWRlTWluO1xuXG4gICAgICAgIGlmIChpc091dHNpZGVSYW5nZSkge1xuICAgICAgICAgICAgb3V0cHV0ID0gY2FsYy5yZXN0cmljdGVkKG91dHB1dCwgdmFsdWUubWluLCB2YWx1ZS5tYXgpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUuYm91bmNlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSBzaW11bGF0aW9ucy5ib3VuY2UodmFsdWUpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmNhcHR1cmUpIHtcbiAgICAgICAgICAgICAgICBzaW11bGF0aW9ucy5jYXB0dXJlKHZhbHVlLCBpc091dHNpZGVNYXggPyB2YWx1ZS5tYXggOiB2YWx1ZS5taW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaW11bGF0ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL1NpbXVsYXRlLmpzXG4gKiovIiwibGV0IEFjdGlvbiA9IHJlcXVpcmUoJy4vQWN0aW9uJyksXG4gICAgUG9pbnRlciA9IHJlcXVpcmUoJy4uL2lucHV0L1BvaW50ZXInKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuY2xhc3MgVHJhY2sgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIC8qXG4gICAgICAgIFVwZGF0ZSBpbnB1dCBvZmZzZXRcbiAgICAqL1xuICAgIG9uRnJhbWVTdGFydChhY3Rvcikge1xuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0gY2FsYy5vZmZzZXQodGhpcy5pbnB1dE9yaWdpbiwgdGhpcy5pbnB1dC5jdXJyZW50KTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBNb3ZlIFZhbHVlIHJlbGF0aXZlIHRvIElucHV0IG1vdmVtZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSBvZiBjdXJyZW50IHZhbHVlXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IENhbGN1bGF0ZWQgdmFsdWVcbiAgICAqL1xuICAgIHByb2Nlc3MoYWN0b3IsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpID8gdmFsdWUub3JpZ2luICsgdGhpcy5pbnB1dE9mZnNldFtrZXldIDogdmFsdWUuY3VycmVudDtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBIYXMgdGhpcyBBY3Rpb24gZW5kZWQ/IFxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IEZhbHNlIHRvIG1ha2UgdXNlciBtYW51YWxseSBmaW5pc2ggLnRyYWNrKClcbiAgICAqL1xuICAgIGhhc0VuZGVkKGFjdG9yKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBiaW5kSW5wdXQoaW5wdXQpIHtcbiAgICAgICAgdGhpcy5pbnB1dCA9ICghaW5wdXQuY3VycmVudCkgPyBuZXcgUG9pbnRlcihpbnB1dCkgOiBpbnB1dDtcbiAgICAgICAgdGhpcy5pbnB1dE9yaWdpbiA9IHRoaXMuaW5wdXQuZ2V0KCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYWNrO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvVHJhY2suanNcbiAqKi8iLCIvKlxuICAgIENhbGN1bGF0b3JzXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIFNpbXBsZSBJL08gc25pcHBldHNcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscy5qcycpLFxuXG4gICAgY2FsYyA9IHtcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGFyZSBhdCAwLDAsIHRoZW4gcmV0dXJuIHRoZSBhbmdsZSB1c2luZyAuYW5nbGVGcm9tQ2VudGVyKClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gICAgICAgICAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiAgICAgICAgKi9cbiAgICAgICAgYW5nbGU6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAgICAgdmFyIGZyb20gPSBwb2ludEIgPyBwb2ludEEgOiB7eDogMCwgeTogMH0sXG4gICAgICAgICAgICAgICAgdG8gPSBwb2ludEIgfHwgcG9pbnRBLFxuICAgICAgICAgICAgICAgIHBvaW50ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiB0by54IC0gZnJvbS54LFxuICAgICAgICAgICAgICAgICAgICB5OiB0by55IC0gZnJvbS55XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYW5nbGVGcm9tQ2VudGVyKHBvaW50LngsIHBvaW50LnkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBBbmdsZSBmcm9tIGNlbnRlclxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBjdXJyZW50IGFuZ2xlLCBpbiByYWRpYW5zLCBvZiBhIGRlZmluZWQgcG9pbnRcbiAgICAgICAgICAgIGZyb20gYSBjZW50ZXIgKGFzc3VtZWQgMCwwKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFggY29vcmRpbmF0ZSBvZiBzZWNvbmQgcG9pbnRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogWSBjb29yZGluYXRlIG9mIHNlY29uZCBwb2ludFxuICAgICAgICAgICAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiAwLCAwIGFuZCBwb2ludCBpbiByYWRpYW5zXG4gICAgICAgICovXG4gICAgICAgIGFuZ2xlRnJvbUNlbnRlcjogZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMih5LCB4KSk7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgICAgICovXG4gICAgICAgIGRlZ3JlZXNUb1JhZGlhbnM6IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIERpbGF0ZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBhIC0tLS0tLS0tLSBiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGEgLS0tLSBiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4gICAgICAgICovXG4gICAgICAgIGRpbGF0ZTogZnVuY3Rpb24gKGEsIGIsIGRpbGF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gYSArICgoYiAtIGEpICogZGlsYXRpb24pO1xuICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEaXN0YW5jZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuICgwLDApIGFuZCBwb2ludEEsIHVubGVzcyBwb2ludEJcbiAgICAgICAgICAgIGlzIHByb3ZpZGVkLCB0aGVuIHdlIHJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gICAgICAgICovXG4gICAgICAgIGRpc3RhbmNlOiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgICAgIHJldHVybiAodHlwZW9mIHBvaW50QSA9PT0gXCJudW1iZXJcIikgPyB0aGlzLmRpc3RhbmNlMUQocG9pbnRBLCBwb2ludEIpIDogdGhpcy5kaXN0YW5jZTJEKHBvaW50QSwgcG9pbnRCKTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIERpc3RhbmNlIDFEXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gcG9pbnQgQSBhbmQgcG9pbnQgQlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFBvaW50IEFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogKG9wdGlvbmFsKTogUG9pbnQgQlxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgZGlzdGFuY2UxRDogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgICAgICB2YXIgYklzTnVtID0gKHR5cGVvZiBwb2ludEIgPT09ICdudW1iZXInKSxcbiAgICAgICAgICAgICAgICBmcm9tID0gYklzTnVtID8gcG9pbnRBIDogMCxcbiAgICAgICAgICAgICAgICB0byA9IGJJc051bSA/IHBvaW50QiA6IHBvaW50QTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBhYnNvbHV0ZSh0byAtIGZyb20pO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEaXN0YW5jZSAyRFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuICgwLDApIGFuZCBwb2ludCBBLCB1bmxlc3MgcG9pbnQgQlxuICAgICAgICAgICAgaXMgcHJvdmlkZWQsIHRoZW4gd2UgcmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHR3by5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiB4IGFuZCB5IG9mIHBvaW50IEFcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogKG9wdGlvbmFsKTogeCBhbmQgeSBvZiBwb2ludCBCXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICAgICAqL1xuICAgICAgICBkaXN0YW5jZTJEOiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgICAgIHZhciBiSXNPYmogPSAodHlwZW9mIHBvaW50QiA9PT0gXCJvYmplY3RcIiksXG4gICAgICAgICAgICAgICAgZnJvbSA9IGJJc09iaiA/IHBvaW50QSA6IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgICAgICB0byA9IGJJc09iaiA/IHBvaW50QiA6IHBvaW50QSxcbiAgICAgICAgICAgICAgICBwb2ludCA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogYWJzb2x1dGUodG8ueCAtIGZyb20ueCksXG4gICAgICAgICAgICAgICAgICAgIHk6IGFic29sdXRlKHRvLnkgLSBmcm9tLnkpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh5cG90ZW51c2UocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEh5cG90ZW51c2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgaHlwb3RlbnVzZSwgc2lkZSBDLCBnaXZlbiB0aGUgbGVuZ3RocyBvZiBzaWRlcyBBIGFuZCBCLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBCXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBMZW5ndGggb2YgQ1xuICAgICAgICAqL1xuICAgICAgICBoeXBvdGVudXNlOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgdmFyIGEyID0gYSAqIGEsXG4gICAgICAgICAgICAgICAgYjIgPSBiICogYixcbiAgICAgICAgICAgICAgICBjMiA9IGEyICsgYjI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGMyKTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBPZmZzZXQgYmV0d2VlbiB0d28gaW5wdXRzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIENhbGN1bGF0ZSB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBkaWZmZXJlbnQgaW5wdXRzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBpbnB1dFxuICAgICAgICAgICAgQHBhcmFtIFtQb2ludF06IFNlY29uZCBpbnB1dFxuICAgICAgICAgICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgb2Zmc2V0OiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHt9O1xuICAgIFxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldFtrZXldID0gYltrZXldIC0gYVtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0W2tleV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzTnVtKG9mZnNldC54KSAmJiBpc051bShvZmZzZXQueSkpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQuYW5nbGUgPSB0aGlzLmFuZ2xlKGEsIGIpO1xuICAgICAgICAgICAgICAgIG9mZnNldC5kaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2UyRChhLCBiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgICAgICAgICAgIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiAgICAgICAgKi9cbiAgICAgICAgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZTogZnVuY3Rpb24gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gICAgICAgICAgICB2YXIgcG9pbnQgPSB7fTtcbiAgICBcbiAgICBcdFx0cG9pbnQueCA9IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLng7XG4gICAgICAgICAgICBwb2ludC55ID0gZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBwb2ludDtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAgICAgICAgICAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gICAgICAgICAgICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgaWYgZnVsbCByYW5nZSBnaXZlbiwgdXBwZXIgaWYgbm90XG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4gICAgICAgICovXG4gICAgICAgIHByb2dyZXNzOiBmdW5jdGlvbiAodmFsdWUsIGxpbWl0QSwgbGltaXRCKSB7XG4gICAgICAgICAgICB2YXIgYklzTnVtID0gKHR5cGVvZiBsaW1pdEIgPT09ICdudW1iZXInKSxcbiAgICAgICAgICAgICAgICBmcm9tID0gYklzTnVtID8gbGltaXRBIDogMCxcbiAgICAgICAgICAgICAgICB0byA9IGJJc051bSA/IGxpbWl0QiA6IGxpbWl0QSxcbiAgICAgICAgICAgICAgICByYW5nZSA9IHRvIC0gZnJvbSxcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9ICh2YWx1ZSAtIGZyb20pIC8gcmFuZ2U7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gICAgICAgICovXG4gICAgICAgIHJhZGlhbnNUb0RlZ3JlZXM6IGZ1bmN0aW9uIChyYWRpYW5zKSB7XG4gICAgICAgICAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtaW5pbXVtXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFJhbmRvbSBudW1iZXIgd2l0aGluIHJhbmdlLCBvciAwIGFuZCAxIGlmIG5vbmUgcHJvdmlkZWRcbiAgICAgICAgKi9cbiAgICAgICAgcmFuZG9tOiBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICAgICAgICAgIG1pbiA9IGlzTnVtKG1pbikgPyBtaW4gOiAwO1xuICAgICAgICAgICAgbWF4ID0gaXNOdW0obWF4KSA/IG1heCA6IDE7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gICAgICAgICAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICAgICAgKi9cbiAgICAgICAgcmVsYXRpdmVWYWx1ZTogZnVuY3Rpb24gKGN1cnJlbnQsIHJlbCkge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gY3VycmVudCxcbiAgICAgICAgICAgICAgICBlcXVhdGlvbiA9IHJlbC5zcGxpdCgnPScpLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yID0gZXF1YXRpb25bMF0sXG4gICAgICAgICAgICAgICAgc3BsaXRWYWwgPSB1dGlscy5zcGxpdFZhbFVuaXQoZXF1YXRpb25bMV0pO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlICs9IHNwbGl0VmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgLT0gc3BsaXRWYWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSAqPSBzcGxpdFZhbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlIC89IHNwbGl0VmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHNwbGl0VmFsLnVuaXQpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSArPSBzcGxpdFZhbC51bml0O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgICAgICB9LFxuICAgIFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICAgICAqL1xuICAgICAgICByZXN0cmljdGVkOiBmdW5jdGlvbiAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgICAgICAgICB2YXIgcmVzdHJpY3RlZCA9IChtaW4gIT09IHVuZGVmaW5lZCkgPyBNYXRoLm1heCh2YWx1ZSwgbWluKSA6IHZhbHVlO1xuICAgICAgICAgICAgcmVzdHJpY3RlZCA9IChtYXggIT09IHVuZGVmaW5lZCkgPyBNYXRoLm1pbihyZXN0cmljdGVkLCBtYXgpIDogcmVzdHJpY3RlZDtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiByZXN0cmljdGVkO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuICAgICAgICAqL1xuICAgICAgICBzcGVlZFBlckZyYW1lOiBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4gICAgICAgICovXG4gICAgICAgIHNwZWVkUGVyU2Vjb25kOiBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG4gICAgICAgIH0sXG4gICAgXG4gICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICAgICAgICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2UsIG9yIHVwcGVyIGlmIGxpbWl0MiBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHByb2dyZXNzLCBsaW1pdEEsIGxpbWl0Qikge1xuICAgICAgICAgICAgdmFyIGJJc051bSA9ICh0eXBlb2YgbGltaXRCID09PSAnbnVtYmVyJyksXG4gICAgICAgICAgICAgICAgZnJvbSA9IGJJc051bSA/IGxpbWl0QSA6IDAsXG4gICAgICAgICAgICAgICAgdG8gPSBiSXNOdW0gPyBsaW1pdEIgOiBsaW1pdEE7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gKC0gcHJvZ3Jlc3MgKiBmcm9tKSArIChwcm9ncmVzcyAqIHRvKSArIGZyb207IFxuICAgICAgICB9LFxuICAgIFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRWFzZWQgdmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICAgICAgICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2UsIG9yIHVwcGVyIGlmIGxpbWl0MiBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBFYXNpbmcgdG8gYXBwbHkgdG8gdmFsdWVcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiAgICAgICAgKi9cbiAgICAgICAgdmFsdWVFYXNlZDogZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzaW5nKSB7XG4gICAgICAgICAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IGVhc2luZyhwcm9ncmVzcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBDYWNoaW5nIGZ1bmN0aW9ucyB1c2VkIG11bHRpcGxlIHRpbWVzIHRvIHJlZHVjZSBmaWxlc2l6ZSBhbmQgaW5jcmVhc2UgcGVyZm9ybWFuY2VcbiAgICAqL1xuICAgIGlzTnVtID0gdXRpbHMuaXNOdW0sXG4gICAgYWJzb2x1dGUgPSBNYXRoLmFicztcbiAgICBcbm1vZHVsZS5leHBvcnRzID0gY2FsYztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmMvY2FsYy5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApIHtcbiAgICB2YXIgY29tYmluZWQgPSAnJyxcbiAgICAgICAga2V5ID0gJycsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcblxuICAgIGZvciAoOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgICBrZXkgPSB0ZXJtc1tpXTtcblxuICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbWJpbmVkICs9IHZhbHVlc1trZXldICsgZGVsaW1pdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZC5qc1xuICoqLyIsInZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9zcGxpdC1jb21tYS1kZWxpbWl0ZWQnKSxcbiAgICBmdW5jdGlvbkJyZWFrID0gcmVxdWlyZSgnLi9mdW5jdGlvbi1icmVhaycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgdGVybXMpIHtcbiAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9LFxuICAgICAgICBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aCxcbiAgICAgICAgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChmdW5jdGlvbkJyZWFrKHZhbHVlKSksXG4gICAgICAgIGkgPSAwO1xuXG4gICAgZm9yICg7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICAgIHNwbGl0VmFsdWVbdGVybXNbaV1dID0gKGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yc1tpXSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwbGl0VmFsdWU7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggKyAnKCcgKyB2YWx1ZSArICcpJztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWNyZWF0ZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjb2xvcjoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMjU1LFxuICAgICAgICByb3VuZDogdHJ1ZVxuICAgIH0sXG4gICAgb3BhY2l0eToge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMVxuICAgIH0sXG4gICAgcGVyY2VudDoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMTAwLFxuICAgICAgICB1bml0OiAnJSdcbiAgICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGVmYXVsdC1wcm9wcy5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgWCA9ICdYJyxcbiAgICBZID0gJ1knLFxuICAgIEFMUEhBID0gJ0FscGhhJyxcblxuICAgIHRlcm1zID0ge1xuICAgICAgICBjb2xvcnM6IFsnUmVkJywgJ0dyZWVuJywgJ0JsdWUnLCBBTFBIQV0sXG4gICAgICAgIHBvc2l0aW9uczogW1gsIFksICdaJ10sXG4gICAgICAgIGRpbWVuc2lvbnM6IFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0J10sXG4gICAgICAgIHNoYWRvdzogW1gsIFksICdSYWRpdXMnLCAnU3ByZWFkJywgJ0NvbG9yJ10sXG4gICAgICAgIGhzbDogWydIdWUnLCAnU2F0dXJhdGlvbicsICdMaWdodG5lc3MnLCBBTFBIQV1cbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRlcm1zO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanNcbiAqKi8iLCIvKlxuICAgIFV0aWxpdHkgZnVuY3Rpb25zXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBwcm90ZWN0ZWRQcm9wZXJ0aWVzID0gWydzY29wZScsICAnZG9tJ10sXG4gICAgXG4gICAgaXNQcm90ZWN0ZWQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiAocHJvdGVjdGVkUHJvcGVydGllcy5pbmRleE9mKGtleSkgIT09IC0xKTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgR2V0IHZhciB0eXBlIGFzIHN0cmluZ1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW3N0cmluZ106IFJldHVybnMsIGZvciBpbnN0YW5jZSAnT2JqZWN0JyBpZiBbb2JqZWN0IE9iamVjdF1cbiAgICAqL1xuICAgIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLypcbiAgICAgICAgSXRlcmF0ZSBvdmVyIGFuIG9iamVjdCBhbmQgZmlyZSBhIGNhbGxiYWNrIGZvciBldmVyeSBpdGVtIGluIGl0XG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBQcm9wZXJ0aWVzXG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBmaXJlXG4gICAgKi9cbiAgICBlYWNoOiBmdW5jdGlvbiAocHJvcHMsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpLFxuICAgICAgICAgICAgbnVtS2V5cyA9IGtleXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tpXSxcbiAgICAgICAgICAgICAgICBwcm9wID0gcHJvcHNba2V5XTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGtleSwgcHJvcCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEhhcyBvbmUgb2JqZWN0IGNoYW5nZWQgZnJvbSB0aGUgb3RoZXJcbiAgICAgICAgXG4gICAgICAgIENvbXBhcmVzIHRoZSB0d28gcHJvdmlkZWQgaW5wdXRzIGFuZCByZXR1cm5zIHRydWUgaWYgdGhleSBhcmUgZGlmZmVyZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEFcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBCXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuICAgICovXG4gICAgaGFzQ2hhbmdlZDogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGtleSA9ICcnO1xuXG4gICAgICAgIGZvciAoa2V5IGluIGIpIHtcbiAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KGtleSkgJiYgYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIGhhc0NoYW5nZWQ7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhIG51bWJlcj9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiAgICAqL1xuICAgIGlzTnVtOiBmdW5jdGlvbiAobnVtKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIG51bSA9PT0gJ251bWJlcicpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYW4gb2JqZWN0P1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuICAgICovXG4gICAgaXNPYmo6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jyk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0aGlzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiAgICAqL1xuICAgIGlzRnVuYzogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gKHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJyk7IFxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYSBzdHJpbmcgPyBcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4gICAgKi9cbiAgICBpc1N0cmluZzogZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKTsgXG4gICAgfSxcblxuXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnQ/XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IElmIHRoaXMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiAgICAqL1xuICAgIGlzUmVsYXRpdmVWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGFuIGFycmF5ID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0aGlzLnZhclR5cGUgPT09ICdBcnJheSdcbiAgICAqL1xuICAgIGlzQXJyYXk6IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgcmV0dXJuICh2YXJUeXBlKGFycikgPT09ICdBcnJheScpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQ29weSBvYmplY3Qgb3IgYXJyYXlcbiAgICAgICAgXG4gICAgICAgIENoZWNrcyB3aGV0aGVyIGJhc2UgaXMgYW4gYXJyYXkgb3Igb2JqZWN0IGFuZCBtYWtlc1xuICAgICAgICBhcHByb3ByaWF0ZSBjb3B5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byBjb3B5XG4gICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogTmV3IGNvcHkgb2YgYXJyYXkgb3Igb2JqZWN0XG4gICAgKi9cbiAgICBjb3B5OiBmdW5jdGlvbiAoYmFzZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuaXNBcnJheShiYXNlKSkgPyB0aGlzLmNvcHlBcnJheShiYXNlKSA6IHRoaXMuY29weU9iamVjdChiYXNlKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIERlZXAgY29weSBhbiBvYmplY3RcbiAgICAgICAgXG4gICAgICAgIEl0ZXJhdGVzIG92ZXIgYW4gb2JqZWN0IGFuZCBjcmVhdGVzIGEgbmV3IGNvcHkgb2YgZXZlcnkgaXRlbSxcbiAgICAgICAgZGVlcCBjb3B5aW5nIGlmIGl0IGZpbmRzIGFueSBvYmplY3RzL2FycmF5c1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gY29weVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IE5ldyBjb3B5IG9mIG9iamVjdFxuICAgICovXG4gICAgY29weU9iamVjdDogZnVuY3Rpb24gKGJhc2UpIHtcbiAgICAgICAgdmFyIG5ld09iamVjdCA9IHt9O1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGJhc2UpIHtcbiAgICAgICAgICAgIGlmIChiYXNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9ICh0aGlzLmlzT2JqKGJhc2Vba2V5XSkgJiYgIWlzUHJvdGVjdGVkKGtleSkpID8gdGhpcy5jb3B5KGJhc2Vba2V5XSkgOiBiYXNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdPYmplY3Q7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEZWVwIGNvcHkgYW4gYXJyYXlcbiAgICAgICAgXG4gICAgICAgIExvb3BzIHRocm91Z2ggYW4gYXJyYXkgYW5kIGNyZWF0ZXMgYSBuZXcgY29weSBvZiBldmVyeSBpdGVtLFxuICAgICAgICBkZWVwIGNvcHlpbmcgaWYgaXQgZmluZHMgYW55IG9iamVjdHMvYXJyYXlzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5XTogQXJyYXkgdG8gY29weVxuICAgICAgICBAcmV0dXJuIFthcnJheV06IE5ldyBjb3B5IG9mIGFycmF5XG4gICAgKi9cbiAgICBjb3B5QXJyYXk6IGZ1bmN0aW9uIChiYXNlKSB7XG4gICAgICAgIHZhciBuZXdBcnJheSA9IFtdLFxuICAgICAgICAgICAgbGVuZ3RoID0gYmFzZS5sZW5ndGgsXG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgXG4gICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5ld0FycmF5W2ldID0gKHRoaXMuaXNPYmooYmFzZVtpXSkpID8gdGhpcy5jb3B5KGJhc2VbaV0pIDogYmFzZVtpXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgTm9uLWRlc3RydWN0aXZlIG1lcmdlIG9mIG9iamVjdCBvciBhcnJheVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBBcnJheSBvciBvYmplY3QgdG8gdXNlIGFzIGJhc2VcbiAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBBcnJheSBvciBvYmplY3QgdG8gb3ZlcndyaXRlIGJhc2Ugd2l0aFxuICAgICAgICBAcmV0dXJuIFthcnJheSB8fCBvYmplY3RdOiBOZXcgYXJyYXkgb3Igb2JqZWN0XG4gICAgKi9cbiAgICBtZXJnZTogZnVuY3Rpb24gKGJhc2UsIG92ZXJ3cml0ZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuaXNBcnJheShiYXNlKSkgPyB0aGlzLmNvcHlBcnJheShvdmVyd3JpdGUpIDogdGhpcy5tZXJnZU9iamVjdChiYXNlLCBvdmVyd3JpdGUpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgTm9uLWRlc3RydWN0aXZlIG1lcmdlIG9mIG9iamVjdFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gdXNlIGFzIGJhc2VcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gb3ZlcndyaXRlIGJhc2Ugd2l0aFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBOZXcgb2JqZWN0XG4gICAgKi9cbiAgICBtZXJnZU9iamVjdDogZnVuY3Rpb24gKGJhc2UsIG92ZXJ3cml0ZSkge1xuICAgICAgICB2YXIgaGFzQmFzZSA9IHRoaXMuaXNPYmooYmFzZSksXG4gICAgICAgICAgICBuZXdPYmplY3QgPSBoYXNCYXNlID8gdGhpcy5jb3B5KGJhc2UpIDogdGhpcy5jb3B5KG92ZXJ3cml0ZSksXG4gICAgICAgICAgICBrZXkgPSAnJztcblxuICAgICAgICBpZiAoaGFzQmFzZSkge1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gb3ZlcndyaXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJ3cml0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gKHRoaXMuaXNPYmoob3ZlcndyaXRlW2tleV0pICYmICFpc1Byb3RlY3RlZChrZXkpKSA/IHRoaXMubWVyZ2UoYmFzZVtrZXldLCBvdmVyd3JpdGVba2V5XSkgOiBvdmVyd3JpdGVba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld09iamVjdDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gICAgICAgIFxuICAgICAgICAgICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICAgICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4gICAgKi9cbiAgICBzcGxpdFZhbFVuaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBsZXQgc3BsaXRWYWwgPSB2YWx1ZS5tYXRjaCgvKC0/XFxkKlxcLj9cXGQqKSguKikvKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHNwbGl0VmFsWzFdLFxuICAgICAgICAgICAgdW5pdDogIHNwbGl0VmFsWzJdXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuICAgICovXG4gICAgc3RlcFByb2dyZXNzOiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0ZXBzKSB7XG4gICAgICAgIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpLFxuICAgICAgICAgICAgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpLFxuICAgICAgICAgICAgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiAgICAqL1xuICAgIGN1cnJlbnRUaW1lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIikgPyBwZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cbiAgICBcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoLFxuICAgIHRyYW5zZm9ybURpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1kaWN0aW9uYXJ5JyksXG4gICAgdHJhbnNmb3JtUHJvcHMgPSB0cmFuc2Zvcm1EaWN0aW9uYXJ5LnByb3BzLFxuXG4gICAgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG91dHB1dCwgY2FjaGUpIHtcbiAgICB2YXIgY3NzID0ge30sXG4gICAgICAgIHRyYW5zZm9ybSA9ICcnLFxuICAgICAgICB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG4gICAgICAgIFxuICAgIC8vIExvb3AgdGhyb3VnaCBvdXRwdXQsIGNoZWNrIGZvciB0cmFuc2Zvcm0gcHJvcGVydGllc1xuICAgIGVhY2gob3V0cHV0LCBmdW5jdGlvbiAoa2V5LCBydWxlKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSB0cmFuc2Zvcm0gcHJvcGVydHksIGFkZCB0byB0cmFuc2Zvcm0gc3RyaW5nXG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gKz0ga2V5ICsgJygnICsgcnVsZSArICcpJztcbiAgICAgICAgICAgIHRyYW5zZm9ybUhhc1ogPSAoa2V5ID09PSBUUkFOU0xBVEVfWikgPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIGp1c3QgYXNzaWduIGRpcmVjdGx5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocnVsZSAhPT0gY2FjaGVba2V5XSkge1xuICAgICAgICAgICAgICAgIGNhY2hlW2tleV0gPSBjc3Nba2V5XSA9IHJ1bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIElmIHdlIGhhdmUgdHJhbnNmb3JtIHByb3BlcnRpZXMsIGFkZCB0cmFuc2xhdGVaXG4gICAgaWYgKHRyYW5zZm9ybSAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gKz0gJyAnICsgVFJBTlNMQVRFX1ogKyAnKDBweCknO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYW5zZm9ybSAhPT0gY2FjaGUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICBjYWNoZS50cmFuc2Zvcm0gPSBjc3MudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvY3NzL2J1aWxkLmpzXG4gKiovIiwidmFyIFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gICAgeTogVFJBTlNMQVRFICsgJ1knLFxuICAgIHo6IFRSQU5TTEFURSArICdaJ1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9jc3MvbWFwLmpzXG4gKiovIiwidmFyIENPTE9SID0gJ2NvbG9yJyxcbiAgICBQT1NJVElPTlMgPSAncG9zaXRpb25zJyxcbiAgICBESU1FTlNJT05TID0gJ2RpbWVuc2lvbnMnLFxuICAgIFNIQURPVyA9ICdzaGFkb3cnLFxuICAgIEFOR0xFID0gJ2FuZ2xlJyxcbiAgICBBTFBIQSA9ICdhbHBoYScsXG4gICAgUFggPSAncHgnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBDb2xvciBwcm9wZXJ0aWVzXG4gICAgY29sb3I6IENPTE9SLFxuICAgIGJhY2tncm91bmRDb2xvcjogQ09MT1IsXG4gICAgb3V0bGluZUNvbG9yOiBDT0xPUixcbiAgICBmaWxsOiBDT0xPUixcbiAgICBzdHJva2U6IENPTE9SLFxuICAgIC8vIEJvcmRlclxuICAgIGJvcmRlckNvbG9yOiBDT0xPUixcbiAgICBib3JkZXJUb3BDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IENPTE9SLFxuICAgIGJvcmRlckxlZnRDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyUmFkaXVzOiBQWCxcbiAgICAvLyBEaW1lbnNpb25zXG4gICAgbWFyZ2luOiBESU1FTlNJT05TLFxuICAgIHBhZGRpbmc6IERJTUVOU0lPTlMsXG4gICAgd2lkdGg6IFBYLFxuICAgIGhlaWdodDogUFgsICAgIFxuICAgIC8vIFBvc2l0aW9uc1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogUE9TSVRJT05TLFxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiBQT1NJVElPTlMsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBQT1NJVElPTlMsICAgIFxuICAgIC8vIFNoYWRvd3NcbiAgICB0ZXh0U2hhZG93OiBTSEFET1csXG4gICAgYm94U2hhZG93OiBTSEFET1csICAgIFxuICAgIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgcm90YXRlOiBBTkdMRSxcbiAgICByb3RhdGVYOiBBTkdMRSxcbiAgICByb3RhdGVZOiBBTkdMRSxcbiAgICByb3RhdGVaOiBBTkdMRSxcbiAgICBza2V3WDogQU5HTEUsXG4gICAgc2tld1k6IEFOR0xFLFxuICAgIHRyYW5zbGF0ZVg6IFBYLFxuICAgIHRyYW5zbGF0ZVk6IFBYLFxuICAgIHRyYW5zbGF0ZVo6IFBYLFxuICAgIHBlcnNwZWN0aXZlOiBQWCxcbiAgICBvcGFjaXR5OiBBTFBIQVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9jc3MvdHlwZS1tYXAuanNcbiAqKi8iLCJ2YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2gsXG4gICAgdHJhbnNmb3JtRGljdGlvbmFyeSA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tZGljdGlvbmFyeScpLFxuICAgIHRyYW5zZm9ybVByb3BzID0gdHJhbnNmb3JtRGljdGlvbmFyeS5wcm9wcztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3V0cHV0LCBvcmlnaW4pIHtcbiAgICB2YXIgcHJvcHMgPSB7fSxcbiAgICAgICAgaGFzVHJhbnNmb3JtID0gZmFsc2UsXG4gICAgICAgIHNjYWxlID0gb3V0cHV0LnNjYWxlICE9PSB1bmRlZmluZWQgPyBvdXRwdXQuc2NhbGUgOiBvdXRwdXQuc2NhbGVYIHx8IDEsXG4gICAgICAgIHNjYWxlWSA9IG91dHB1dC5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IG91dHB1dC5zY2FsZVkgOiBzY2FsZSB8fCAxLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW5YID0gb3JpZ2luLngsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblkgPSBvcmlnaW4ueSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1YID0gLSB0cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSksXG4gICAgICAgIHNjYWxlVHJhbnNmb3JtWSA9IC0gdHJhbnNmb3JtT3JpZ2luWSAqIChzY2FsZVkgKiAxKSxcbiAgICAgICAgc2NhbGVSZXBsYWNlWCA9IHRyYW5zZm9ybU9yaWdpblggLyBzY2FsZSxcbiAgICAgICAgc2NhbGVSZXBsYWNlWSA9IHRyYW5zZm9ybU9yaWdpblkgLyBzY2FsZVksXG4gICAgICAgIHRyYW5zZm9ybSA9IHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogYHRyYW5zbGF0ZSgke291dHB1dC50cmFuc2xhdGVYfSwgJHtvdXRwdXQudHJhbnNsYXRlWX0pIGAsXG4gICAgICAgICAgICBzY2FsZTogYHRyYW5zbGF0ZSgke3NjYWxlVHJhbnNmb3JtWH0sICR7c2NhbGVUcmFuc2Zvcm1ZfSkgc2NhbGUoJHtzY2FsZX0sICR7c2NhbGVZfSkgdHJhbnNsYXRlKCR7c2NhbGVSZXBsYWNlWH0sICR7c2NhbGVSZXBsYWNlWX0pIGAsXG4gICAgICAgICAgICByb3RhdGU6IGByb3RhdGUoJHtvdXRwdXQucm90YXRlfSwgJHt0cmFuc2Zvcm1PcmlnaW5YfSwgJHt0cmFuc2Zvcm1PcmlnaW5ZfSkgYCxcbiAgICAgICAgICAgIHNrZXdYOiBgc2tld1goJHtvdXRwdXQuc2tld1h9KSBgLFxuICAgICAgICAgICAgc2tld1k6IGBza2V3WSgke291dHB1dC5za2V3WX0pIGBcbiAgICAgICAgfTtcblxuICAgIGVhY2gob3V0cHV0LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgICAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcblxuICAgICAgICBlYWNoKHRyYW5zZm9ybSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSAoa2V5ID09PSAnc2NhbGUnKSA/ICcxJyA6ICcwJztcbiAgICAgICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB2YWx1ZS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9zdmcvYnVpbGQuanNcbiAqKi8iLCJ2YXIgQ09MT1IgPSAnY29sb3InLFxuICAgIFNDQUxFID0gJ3NjYWxlJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZmlsbDogQ09MT1IsXG4gICAgc3Ryb2tlOiBDT0xPUixcbiAgICBzY2FsZTogU0NBTEUsXG4gICAgc2NhbGVYOiBTQ0FMRSxcbiAgICBzY2FsZVk6IFNDQUxFLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ3Bvc2l0aW9ucycsXG4gICAgZDogJ2NvbXBsZXgnXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL3N2Zy90eXBlLW1hcC5qc1xuICoqLyIsInZhciBTVFJPS0UgPSAnc3Ryb2tlJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgb3BhY2l0eTogU1RST0tFICsgJy1vcGFjaXR5JyxcbiAgICB3aWR0aDogU1RST0tFICsgJy13aWR0aCcsXG4gICAgbWl0ZXJsaW1pdDogU1RST0tFICsgJy1taXRlcmxpbWl0J1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9wYXRoL21hcC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgTW9kTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fa2V5cyA9IFtdO1xuICAgICAgICB0aGlzLl9udW1LZXlzID0gMDtcbiAgICB9O1xuXG5Nb2RNYW5hZ2VyLnByb3RvdHlwZSA9IHtcblxuICAgIC8qXG4gICAgICAgIEFkZCBtb2R1bGUga2V5IHRvIGtleXMgbGlzdFxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIGFkZFxuICAgICovXG4gICAgX2FkZEtleTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fa2V5cy5wdXNoKG5hbWUpO1xuICAgICAgICB0aGlzLl9udW1LZXlzKys7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEFkZCBhIG5ldyBtb2R1bGVcblxuICAgICAgICBAcGFyYW0gW3N0cmluZyB8fCBvYmplY3RdOiBOYW1lIG9mIG5ldyBtb2R1bGUgb3IgbXVsdGlwbGUgbW9kdWxlc1xuICAgICAgICBAcGFyYW0gW29iamVjdF0gKG9wdGlvbmFsKTogTW9kdWxlIHRvIGFkZFxuICAgICovXG4gICAgZXh0ZW5kOiBmdW5jdGlvbiAobmFtZSwgbW9kKSB7XG4gICAgICAgIHZhciBtdWx0aU1vZHMgPSAodHlwZW9mIG5hbWUgPT0gJ29iamVjdCcpLFxuICAgICAgICAgICAgbW9kcyA9IG11bHRpTW9kcyA/IG5hbWUgOiB7fSxcbiAgICAgICAgICAgIGtleSA9ICcnO1xuXG4gICAgICAgIC8vIElmIHdlIGp1c3QgaGF2ZSBvbmUgbW9kdWxlLCBjb2VyY2VcbiAgICAgICAgaWYgKCFtdWx0aU1vZHMpIHtcbiAgICAgICAgICAgIG1vZHNbbmFtZV0gPSBtb2Q7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGtleSBpbiBtb2RzKSB7XG4gICAgICAgICAgICBpZiAobW9kcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkS2V5KGtleSk7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gbW9kc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGVhY2g6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIga2V5ID0gJyc7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9udW1LZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGtleSA9IHRoaXMuX2tleXNbaV07XG4gICAgICAgICAgICBjYWxsYmFjayhrZXksIHRoaXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZE1hbmFnZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5jL01vZE1hbmFnZXIuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfTtcblxuUXVldWUucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8qXG4gICAgICAgIEFkZCBhIHNldCBvZiBhcmd1bWVudHMgdG8gcXVldWVcbiAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnF1ZXVlLnB1c2goYXJndW1lbnRzWzBdKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBuZXh0IHNldCBvZiBhcmd1bWVudHMgZnJvbSBxdWV1ZVxuICAgICovXG4gICAgbmV4dDogZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgcXVldWUgPSB0aGlzLnF1ZXVlLFxuICAgICAgICAgICAgcmV0dXJuVmFsID0gZmFsc2UsXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICBcbiAgICAgICAgZGlyZWN0aW9uID0gKGFyZ3VtZW50cy5sZW5ndGgpID8gZGlyZWN0aW9uIDogMTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIG91ciBpbmRleCBpcyBiZXR3ZWVuIDAgYW5kIHRoZSBxdWV1ZSBsZW5ndGgsIHJldHVybiB0aGF0IGl0ZW1cbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVyblZhbCA9IHF1ZXVlW2luZGV4XTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSBpbmRleCArIGRpcmVjdGlvbjtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIGNsZWFyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXR1cm5WYWw7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFJlcGxhY2UgcXVldWUgd2l0aCBlbXB0eSBhcnJheVxuICAgICovXG4gICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luYy9RdWV1ZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgSW5wdXQgPSByZXF1aXJlKCcuL0lucHV0LmpzJyksXG4gICAgY3VycmVudFBvaW50ZXIsIC8vIFNvcnQgdGhpcyBvdXQgZm9yIG11bHRpdG91Y2hcbiAgICBcbiAgICBUT1VDSE1PVkUgPSAndG91Y2htb3ZlJyxcbiAgICBNT1VTRU1PVkUgPSAnbW91c2Vtb3ZlJyxcblxuICAgIC8qXG4gICAgICAgIENvbnZlcnQgZXZlbnQgaW50byBwb2ludFxuICAgICAgICBcbiAgICAgICAgU2NyYXBlIHRoZSB4L3kgY29vcmRpbmF0ZXMgZnJvbSB0aGUgcHJvdmlkZWQgZXZlbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbZXZlbnRdOiBPcmlnaW5hbCBwb2ludGVyIGV2ZW50XG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IFRydWUgaWYgdG91Y2ggZXZlbnRcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogeC95IGNvb3JkaW5hdGVzIG9mIGV2ZW50XG4gICAgKi9cbiAgICBldmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGlzVG91Y2hFdmVudCkge1xuICAgICAgICB2YXIgdG91Y2hDaGFuZ2VkID0gaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0b3VjaENoYW5nZWQgPyB0b3VjaENoYW5nZWQuY2xpZW50WCA6IGV2ZW50LnBhZ2VYLFxuICAgICAgICAgICAgeTogdG91Y2hDaGFuZ2VkID8gdG91Y2hDaGFuZ2VkLmNsaWVudFkgOiBldmVudC5wYWdlWVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGFjdHVhbCBldmVudFxuICAgICAgICBcbiAgICAgICAgQ2hlY2tzIGZvciBqUXVlcnkncyAub3JpZ2luYWxFdmVudCBpZiBwcmVzZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2V2ZW50IHwgalF1ZXJ5IGV2ZW50XVxuICAgICAgICBAcmV0dXJuIFtldmVudF06IFRoZSBhY3R1YWwgSlMgZXZlbnQgIFxuICAgICovXG4gICAgZ2V0QWN0dWFsRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50Lm9yaWdpbmFsRXZlbnQgfHwgZXZlbnQ7XG4gICAgfSxcblxuICAgIFxuICAgIC8qXG4gICAgICAgIFBvaW50ZXIgY29uc3RydWN0b3JcbiAgICAqL1xuICAgIFBvaW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgZXZlbnQgPSBnZXRBY3R1YWxFdmVudChlKSwgLy8gSW4gY2FzZSBvZiBqUXVlcnkgZXZlbnRcbiAgICAgICAgICAgIGlzVG91Y2ggPSAoZXZlbnQudG91Y2hlcykgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICBzdGFydFBvaW50ID0gZXZlbnRUb1BvaW50KGV2ZW50LCBpc1RvdWNoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudXBkYXRlKHN0YXJ0UG9pbnQpO1xuICAgICAgICB0aGlzLmlzVG91Y2ggPSBpc1RvdWNoO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9LFxuICAgIFxuICAgIHByb3RvID0gUG9pbnRlci5wcm90b3R5cGUgPSBuZXcgSW5wdXQoKTtcblxuLypcbiAgICBCaW5kIG1vdmUgZXZlbnRcbiovXG5wcm90by5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubW92ZUV2ZW50ID0gdGhpcy5pc1RvdWNoID8gVE9VQ0hNT1ZFIDogTU9VU0VNT1ZFO1xuICAgIFxuICAgIGN1cnJlbnRQb2ludGVyID0gdGhpcztcbiAgICBcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgdGhpcy5vbk1vdmUpO1xufTtcblxuLypcbiAgICBVbmJpbmQgbW92ZSBldmVudFxuKi9cbnByb3RvLnVuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgdGhpcy5vbk1vdmUpO1xufTtcblxuLypcbiAgICBQb2ludGVyIG9uTW92ZSBldmVudCBoYW5kbGVyXG4gICAgXG4gICAgQHBhcmFtIFtldmVudF06IFBvaW50ZXIgbW92ZSBldmVudFxuKi9cbnByb3RvLm9uTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIG5ld1BvaW50ID0gZXZlbnRUb1BvaW50KGUsIGN1cnJlbnRQb2ludGVyLmlzVG91Y2gpO1xuICAgIGUgPSBnZXRBY3R1YWxFdmVudChlKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY3VycmVudFBvaW50ZXIudXBkYXRlKG5ld1BvaW50KTtcbn07XG5cbnByb3RvLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbnB1dC9Qb2ludGVyLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB2YWx1ZVR5cGVNYW5hZ2VyID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvbWFuYWdlcicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgZWFjaCA9IHV0aWxzLmVhY2gsXG4gICAgQWN0aW9uID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9BY3Rpb24nKSxcbiAgICBkZWZhdWx0QWN0aW9uID0gbmV3IEFjdGlvbigpLFxuXG4gICAgY3JlYXRlTWFwcGVyID0gZnVuY3Rpb24gKHJvbGUsIG1hcHBlZFZhbHVlcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5hbWUsIHZhbCkge1xuICAgICAgICAgICAgbWFwcGVkVmFsdWVzW3JvbGUubWFwKG5hbWUpXSA9IHZhbDtcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQ2hlY2sgYWxsIEFjdGlvbnMgZm9yIGBvbkVuZGAsIHJldHVybiB0cnVlIGlmIGFsbCBhcmUgdHJ1ZVxuXG4gICAgICAgIEBwYXJhbSBbQWN0b3JdXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl1cbiAgICAgICAgQHJldHVybnMgW2Jvb2xlYW5dXG4gICAgKi9cbiAgICBjaGVja0FuZEZpcmVIYXNFbmRlZCA9IGZ1bmN0aW9uIChhY3RvciwgaGFzQ2hhbmdlZCkge1xuICAgICAgICB2YXIgaGFzRW5kZWQgPSB0cnVlO1xuXG4gICAgICAgIGVhY2goYWN0b3IuYWN0aXZlQWN0aW9ucywgKGtleSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLmhhc0VuZGVkICYmIGFjdGlvbi5oYXNFbmRlZChhY3RvciwgaGFzQ2hhbmdlZCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaGFzRW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0b3IudW5iaW5kQWN0aW9uKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBoYXNFbmRlZDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIHRoZSBBY3RvciBhbmQgaXRzIHZhbHVlc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XTogVGltZXN0YW1wIG9mIHJBRiBjYWxsXG4gICAgICAgIEBwYXJhbSBbaW50XTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4gICAgKi9cbiAgICB1cGRhdGUgPSBmdW5jdGlvbiAoZnJhbWVzdGFtcCwgZnJhbWVEdXJhdGlvbikge1xuICAgICAgICB2YXIgbnVtQWN0aXZlVmFsdWVzID0gdGhpcy5hY3RpdmVWYWx1ZXMubGVuZ3RoLFxuICAgICAgICAgICAgbnVtQWN0aXZlUGFyZW50cyA9IHRoaXMuYWN0aXZlUGFyZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBudW1Sb2xlcyA9IHRoaXMucm9sZXMubGVuZ3RoLFxuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRoaXMuaGFzQ2hhbmdlZDtcblxuICAgICAgICAvLyBVcGRhdGUgSW5wdXQgYW5kIGF0dGFjaCBuZXcgdmFsdWVzIHRvIHN0YXRhXG4gICAgICAgIGlmICh0aGlzLmlucHV0KSB7XG4gICAgICAgICAgICBzdGF0ZS5pbnB1dCA9IHRoaXMuaW5wdXQub25GcmFtZShmcmFtZXN0YW1wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgb25TdGFydCBjYWxsYmFjayBpZiB0aGlzIGlzIGZpcnN0IGZyYW1lXG4gICAgICAgIGlmICh0aGlzLmZpcnN0RnJhbWUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUm9sZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCByb2xlID0gdGhpcy5yb2xlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAocm9sZS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICByb2xlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHZhbHVlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUFjdGl2ZVZhbHVlczsgaSsrKSB7XG4gICAgICAgICAgICAvLyBHZXQgdmFsdWUgYW5kIGtleVxuICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMuYWN0aXZlVmFsdWVzW2ldO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSAoIXZhbHVlLmFjdGlvbiB8fCB2YWx1ZS5hY3Rpb24gJiYgIXZhbHVlLmFjdGlvbi5pc0FjdGl2ZSkgPyBkZWZhdWx0QWN0aW9uIDogdmFsdWUuYWN0aW9uO1xuXG4gICAgICAgICAgICAvLyBGaXJlIGFjdGlvbiBvbkZyYW1lU3RhcnQgaWYgbm90IGFscmVhZHkgZmlyZWRcbiAgICAgICAgICAgIGlmIChhY3Rpb24ub25GcmFtZVN0YXJ0ICYmIGFjdGlvbi5sYXN0VXBkYXRlICE9PSBmcmFtZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLm9uRnJhbWVTdGFydCh0aGlzLCBmcmFtZUR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBhY3Rpb24ubGFzdFVwZGF0ZSA9IGZyYW1lc3RhbXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgdmFsdWVcbiAgICAgICAgICAgIGxldCB1cGRhdGVkVmFsdWUgPSBhY3Rpb24ucHJvY2Vzcyh0aGlzLCB2YWx1ZSwga2V5LCBmcmFtZUR1cmF0aW9uKTtcblxuICAgICAgICAgICAgLy8gTGltaXQgaWYgdGhpcyBhY3Rpb24gZG9lcyB0aGF0IGtpbmQgb2YgdGhpbmdcbiAgICAgICAgICAgIGlmIChhY3Rpb24ubGltaXQgJiYgdmFsdWUuaGFzUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBhY3Rpb24ubGltaXQodXBkYXRlZFZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIHZhbHVlIGlmIHJvdW5kIGlzIHRydWVcbiAgICAgICAgICAgIGlmICh2YWx1ZS5yb3VuZCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IE1hdGgucm91bmQodXBkYXRlZFZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIGZyYW1lQ2hhbmdlXG4gICAgICAgICAgICB2YWx1ZS5mcmFtZUNoYW5nZSA9IHVwZGF0ZWRWYWx1ZSAtIHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB2ZWxvY2l0eSBpZiBBY3Rpb24gaGFzbid0XG4gICAgICAgICAgICBpZiAoIWFjdGlvbi5jYWxjdWxhdGVzVmVsb2NpdHkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IGNhbGMuc3BlZWRQZXJTZWNvbmQodmFsdWUuZnJhbWVDaGFuZ2UsIGZyYW1lRHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgY3VycmVudCBzcGVlZFxuICAgICAgICAgICAgdmFsdWUuc3BlZWQgPSBNYXRoLmFicyh2YWx1ZS52ZWxvY2l0eSk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHZhbHVlJ3MgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT09IHVwZGF0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgbmV3IGN1cnJlbnQgXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdXBkYXRlZFZhbHVlO1xuICAgICAgICAgICAgbGV0IHZhbHVlU3RhdGUgPSAodmFsdWUudW5pdCkgPyB1cGRhdGVkVmFsdWUgKyB2YWx1ZS51bml0IDogdXBkYXRlZFZhbHVlO1xuXG4gICAgICAgICAgICAvLyBQdXQgdmFsdWUgaW4gc3RhdGUgaWYgbm8gcGFyZW50XG4gICAgICAgICAgICBpZiAoIXZhbHVlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHN0YXRlLnZhbHVlc1trZXldID0gdmFsdWVTdGF0ZTtcblxuICAgICAgICAgICAgLy8gT3IsIGFkZCB0byBwYXJlbnQgc3RhdGUgdG8gYmUgY29tYmluZWQgbGF0ZXJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGVbdmFsdWUucGFyZW50XSA9IHN0YXRlW3ZhbHVlLnBhcmVudF0gfHwge307XG4gICAgICAgICAgICAgICAgc3RhdGVbdmFsdWUucGFyZW50XVt2YWx1ZS5wcm9wTmFtZV0gPSB2YWx1ZVN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZXMgZnJvbSBjYWxjdWxhdGVkIGNoaWxkcmVuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQWN0aXZlUGFyZW50czsgaSsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5hY3RpdmVQYXJlbnRzW2ldO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZSBjdXJyZW50IHByb3BlcnR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWVUeXBlTWFuYWdlclt2YWx1ZS50eXBlXS5jb21iaW5lKHN0YXRlW2tleV0sIHZhbHVlLnRlbXBsYXRlKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHN0YXRlXG4gICAgICAgICAgICBzdGF0ZS52YWx1ZXNba2V5XSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIGBmcmFtZWAgYW5kIGB1cGRhdGVgIGNhbGxiYWNrcyBvbiBhbGwgUm9sZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Sb2xlczsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm9sZSA9IHRoaXMucm9sZXNbaV07XG4gICAgICAgICAgICBsZXQgbWFwcGVkVmFsdWVzID0ge307XG5cbiAgICAgICAgICAgIGVhY2goc3RhdGUudmFsdWVzLCBjcmVhdGVNYXBwZXIocm9sZSwgbWFwcGVkVmFsdWVzKSk7XG5cbiAgICAgICAgICAgIGlmIChyb2xlLmZyYW1lKSB7XG4gICAgICAgICAgICAgICAgcm9sZS5mcmFtZS5jYWxsKHRoaXMsIG1hcHBlZFZhbHVlcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyb2xlLnVwZGF0ZSAmJiAoaGFzQ2hhbmdlZCB8fCB0aGlzLmZpcnN0RnJhbWUpKSB7XG4gICAgICAgICAgICAgICAgcm9sZS51cGRhdGUuY2FsbCh0aGlzLCBtYXBwZWRWYWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzZXQgaGFzQ2hhbmdlZCBiZWZvcmUgZnVydGhlciBBY3Rpb25zIG1pZ2h0IGFmZmVjdCB0aGlzXG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENoZWNrIGFsbCBBY3Rpb25zIGFuZCBmaXJlIG9uRW5kIGlmIHRoZXkndmUgZW5kZWRcbiAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmUgJiYgY2hlY2tBbmRGaXJlSGFzRW5kZWQodGhpcywgaGFzQ2hhbmdlZCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gRmlyZSBgY29tcGxldGVgIGNhbGxiYWNrXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IHRoaXMucm9sZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHJvbGUuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZS5jb21wbGV0ZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgQWN0b3IgaXMgc3RpbGwgaW5hY3RpdmUsIGZpcmUgbmV4dCBzdGVwXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZmlyc3RGcmFtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZyYW1lc3RhbXAgPSBmcmFtZXN0YW1wO1xuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0gdXBkYXRlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdG9yL3VwZGF0ZS5qc1xuICoqLyIsInZhciBXYXRjaCA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvV2F0Y2gnKSxcbiAgICB3YXRjaGVyID0gbmV3IFdhdGNoKCksXG4gICAgdmFsdWVUeXBlc01hbmFnZXIgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9tYW5hZ2VyJyksXG4gICAgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBpc051bSA9IHV0aWxzLmlzTnVtLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoO1xuXG5jb25zdCBudW1lcmljYWxWYWx1ZXMgPSBbJ2N1cnJlbnQnLCAndG8nLCAnbWluJywgJ21heCcsICd2ZWxvY2l0eScsICdmcmljdGlvbicsICdzcHJpbmcnXSxcbiAgICBudW1OdW1lcmljYWxWYWx1ZXMgPSBudW1lcmljYWxWYWx1ZXMubGVuZ3RoLFxuICAgIGRlZmF1bHRWYWx1ZSA9IHtcbiAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgdmVsb2NpdHk6IDAsXG4gICAgICAgIHNwZWVkOiAwLFxuICAgICAgICBmcmFtZUNoYW5nZTogMFxuICAgIH07XG5cbmZ1bmN0aW9uIGNoZWNrTnVtZXJpY2FsVmFsdWUobmFtZSkge1xuICAgIHJldHVybiAobnVtZXJpY2FsVmFsdWVzLmluZGV4T2YobmFtZSkgPiAtMSk7XG59XG5cbi8qXG4gICAgQ2hlY2sgUm9sZSB0eXBlTWFwcyB0byBzZWUgaWYgdGhpcyB2YWx1ZSBuYW1lIGhhcyBiZWVuIG1hcHBlZFxuICAgIHRvIGEgc3BlY2lmaWMgdmFsdWUgdHlwZVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcmV0dXJucyBbc3RyaW5nXTogVmFsdWUgdHlwZVxuKi9cbmZ1bmN0aW9uIGNoZWNrUm9sZXMobmFtZSwgcm9sZXMpIHtcbiAgICB2YXIgdmFsdWVUeXBlO1xuXG4gICAgZWFjaChyb2xlcywgKGtleSwgcm9sZSkgPT4ge1xuICAgICAgICBpZiAocm9sZS5fdHlwZU1hcCkge1xuICAgICAgICAgICAgdmFsdWVUeXBlID0gcm9sZS5fdHlwZU1hcFtyb2xlLm1hcChuYW1lKV0gfHwgdmFsdWVUeXBlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFsdWVUeXBlO1xufVxuXG4vKlxuICAgIENoZWNrIHZhbHVlIGZvciBzcGVjaWFsIHR5cGVcblxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm5zIFtzdHJpbmcgfHwgZmFsc2VdXG4qL1xuZnVuY3Rpb24gY2hlY2tWYWx1ZVR5cGUoZXhpc3RpbmdWYWx1ZSwgbmV3VmFsdWUsIHNjb3BlLCB2YWx1ZU5hbWUpIHtcbiAgICB2YXIgdmFsdWVUeXBlO1xuXG4gICAgLy8gQ2hlY2sgZXhpc3RpbmcgdmFsdWUgZm9yIHR5cGUgYWxyZWFkeSBzZXRcbiAgICBpZiAoZXhpc3RpbmdWYWx1ZSAmJiBleGlzdGluZ1ZhbHVlLnR5cGUpIHtcbiAgICAgICAgdmFsdWVUeXBlID0gZXhpc3RpbmdWYWx1ZS50eXBlO1xuICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE9yIGNoZWNrIFJvbGUgX3R5cGVNYXAgcHJvcGVydGllc1xuICAgICAgICBpZiAoc2NvcGUucm9sZXMpIHtcbiAgICAgICAgICAgIHZhbHVlVHlwZSA9IGNoZWNrUm9sZXModmFsdWVOYW1lLCBzY29wZS5yb2xlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5hbGx5IHJ1biB0ZXN0c1xuICAgICAgICBpZiAoIXZhbHVlVHlwZSAmJiB1dGlscy5pc1N0cmluZyhuZXdWYWx1ZS5jdXJyZW50KSkge1xuICAgICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWVUeXBlc01hbmFnZXIudGVzdChuZXdWYWx1ZS5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZVR5cGU7XG59XG5cbi8qXG4gICAgUmVzb2x2ZSBhIHByb3BlcnR5XG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbiB8fCBudW1iZXJdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHJldHVybnMgW251bWJlcl1cbiovXG5mdW5jdGlvbiByZXNvbHZlKG5hbWUsIHByb3AsIHZhbHVlLCBzY29wZSkge1xuICAgIGxldCBpc051bWVyaWNhbFZhbHVlID0gY2hlY2tOdW1lcmljYWxWYWx1ZShuYW1lKTtcblxuICAgIC8vIElmIGZ1bmN0aW9uLCByZXNvbHZlXG4gICAgaWYgKHV0aWxzLmlzRnVuYyhwcm9wKSAmJiBpc051bWVyaWNhbFZhbHVlKSB7XG4gICAgICAgIHByb3AgPSBwcm9wLmNhbGwoc2NvcGUsIHNjb3BlKTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdHJpbmcsIGNoZWNrIGZvciByZWxhdGl2ZSBudW1iZXJzIGFuZCB1bml0c1xuICAgIGlmICh1dGlscy5pc1N0cmluZyhwcm9wKSkge1xuICAgICAgICAvLyBJZiByZWxhdGl2ZSB2YWx1ZVxuICAgICAgICBpZiAocHJvcC5pbmRleE9mKCc9JykgPiAwKSB7XG4gICAgICAgICAgICBwcm9wID0gY2FsYy5yZWxhdGl2ZVZhbHVlKHZhbHVlLmN1cnJlbnQsIHByb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdW5pdFxuICAgICAgICBpZiAoaXNOdW1lcmljYWxWYWx1ZSkge1xuICAgICAgICAgICAgc3BsaXRVbml0KHByb3AsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc051bWVyaWNhbFZhbHVlKSB7XG4gICAgICAgIHByb3AgPSBwYXJzZUZsb2F0KHByb3ApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wO1xufVxuXG4vKlxuICAgIFNwbGl0IGEgdmFsdWUgaW50byBzdWItdmFsdWVzXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW3ZhbHVlVHlwZUhhbmRsZXJdXG4gICAgQHJldHVybnMgW29iamVjdF1cbiovXG5mdW5jdGlvbiBzcGxpdChuYW1lLCB2YWx1ZSwgc2NvcGUsIHZhbHVlVHlwZUhhbmRsZXIpIHtcbiAgICB2YXIgc3BsaXRWYWx1ZXMgPSB7fSxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBmb3IgKDsgaSA8IG51bU51bWVyaWNhbFZhbHVlczsgaSsrKSB7XG4gICAgICAgIGxldCBwcm9wTmFtZSA9IG51bWVyaWNhbFZhbHVlc1tpXTtcbiAgICAgICAgbGV0IHNwbGl0UHJvcCA9IHt9O1xuXG4gICAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZVByb3AgPSB2YWx1ZVtwcm9wTmFtZV07XG5cbiAgICAgICAgICAgIC8vIElmIHdlIG5lZWQgdG8gZmlyc3QgcmVzb2x2ZSB0aGlzLCByZXNvbHZlXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVByb3AgPSB2YWx1ZVByb3AuY2FsbChzY29wZSwgc2NvcGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGxpdFByb3AgPSB2YWx1ZVR5cGVIYW5kbGVyLnNwbGl0KHZhbHVlUHJvcCk7XG5cbiAgICAgICAgICAgIC8vIEFzc2lnbiBzcGxpdCBwcm9wZXJ0aWVzIHRvIGVhY2ggY2hpbGQgdmFsdWVcbiAgICAgICAgICAgIGVhY2goc3BsaXRQcm9wLCAoa2V5LCBwcm9wKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyB2YWx1ZSBpZiBub25lIGV4aXN0c1xuICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVzW2tleV0gPSBzcGxpdFZhbHVlc1trZXldIHx8IHV0aWxzLmNvcHkodmFsdWVUeXBlc01hbmFnZXIuZGVmYXVsdFByb3BzKHZhbHVlLnR5cGUsIGtleSkpO1xuICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVzW2tleV1bcHJvcE5hbWVdID0gcHJvcDtcblxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhzcGxpdFByb3Bba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRVbml0KHNwbGl0VmFsdWVzW2tleV1bcHJvcE5hbWVdLCBzcGxpdFZhbHVlc1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzcGxpdFZhbHVlcztcbn1cblxuLypcbiAgICBTcGxpdCB2YWx1ZSBpbnRvIG51bWJlciBhbmQgdW5pdCwgYW5kIHNldCB1bml0IHRvIHZhbHVlXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW29iamVjdF1cbiovXG5mdW5jdGlvbiBzcGxpdFVuaXQocHJvcGVydHksIGhvc3RWYWx1ZSkge1xuICAgIGlmICh1dGlscy5pc051bShwcm9wZXJ0eSkpIHsgcmV0dXJuIHByb3BlcnR5OyB9XG4gICAgbGV0IHJldHVyblZhbCA9IHByb3BlcnR5LFxuICAgICAgICB7IHZhbHVlLCB1bml0IH0gPSB1dGlscy5zcGxpdFZhbFVuaXQocHJvcGVydHkpO1xuXG4gICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuVmFsID0gdmFsdWU7XG4gICAgICAgIGlmICh1bml0KSB7XG4gICAgICAgICAgICBob3N0VmFsdWUudW5pdCA9IHVuaXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0dXJuVmFsO1xufVxuXG4vKlxuICAgIFByZXByb2Nlc3MgaW5jb21pbmcgdmFsdWVzLCBzcGxpdHRpbmcgbm9uLW51bWVyaWNhbCB2YWx1ZXNcbiAgICBpbnRvIHN1Yi12YWx1ZXMgaWUgaGV4XG5cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW3N0cmluZ11cbiovXG5mdW5jdGlvbiBwcmVwcm9jZXNzKGV4aXN0aW5nLCBpbmNvbWluZywgc2NvcGUsIGRlZmF1bHRQcm9wKSB7XG4gICAgdmFyIHZhbHVlcyA9IHt9O1xuXG4gICAgZWFjaChpbmNvbWluZywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGV4aXN0aW5nVmFsdWUgPSBleGlzdGluZ1trZXldLFxuICAgICAgICAgICAgbmV3VmFsdWUgPSB7fTtcblxuICAgICAgICBpZiAodXRpbHMuaXNPYmoodmFsdWUpKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VmFsdWVbZGVmYXVsdFByb3BdID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB2YWx1ZSBkb2Vzbid0IGhhdmUgYSBzcGVjaWFsIHR5cGUsIGNoZWNrIGZvciBvbmVcbiAgICAgICAgbmV3VmFsdWUudHlwZSA9IGNoZWNrVmFsdWVUeXBlKGV4aXN0aW5nVmFsdWUsIG5ld1ZhbHVlLCBzY29wZSwga2V5KTtcblxuICAgICAgICB2YWx1ZXNba2V5XSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSB0eXBlIHByb3BlcnR5LCBzcGxpdC9hc3NpZ24gZGVmYXVsdCBwcm9wc1xuICAgICAgICBpZiAobmV3VmFsdWUudHlwZSkge1xuICAgICAgICAgICAgbGV0IHR5cGVIYW5kbGVyID0gdmFsdWVUeXBlc01hbmFnZXJbbmV3VmFsdWUudHlwZV07XG5cbiAgICAgICAgICAgIC8vIElmIHZhbHVlVHlwZSBoYW5kbGVyIGhhcyBhIHNwbGl0IGZ1bmN0aW9uLCBzcGxpdCB0aGlzIHZhbHVlXG4gICAgICAgICAgICBpZiAodHlwZUhhbmRsZXIuc3BsaXQpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRWYWx1ZXMgPSBzcGxpdChrZXksIG5ld1ZhbHVlLCBzY29wZSwgdHlwZUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0ge307XG5cbiAgICAgICAgICAgICAgICBlYWNoKHNwbGl0VmFsdWVzLCAoY2hpbGROYW1lLCBjaGlsZFZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWUgPSB1dGlscy5tZXJnZShuZXdWYWx1ZSwgY2hpbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWUucGFyZW50ID0gY2hpbGRWYWx1ZS5uYW1lID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlLnByb3BOYW1lID0gY2hpbGROYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjaGlsZFZhbHVlLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjaGlsZFZhbHVlLmNoaWxkcmVuO1xuXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuW2NoaWxkTmFtZV0gPSB2YWx1ZXNba2V5ICsgY2hpbGROYW1lXSA9IGNoaWxkVmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZUhhbmRsZXIudGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudGVtcGxhdGUgPSBleGlzdGluZ1ZhbHVlID8gZXhpc3RpbmdWYWx1ZS50ZW1wbGF0ZSA6IHR5cGVIYW5kbGVyLnRlbXBsYXRlKG5ld1ZhbHVlLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3IganVzdCBhc3NpZ24gZGVmYXVsdCBwcm9wZXJ0aWVzIGZvciB0aGlzIHZhbHVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlc1trZXldID0gdXRpbHMubWVyZ2UodmFsdWVUeXBlc01hbmFnZXIuZGVmYXVsdFByb3BzKG5ld1ZhbHVlLnR5cGUsIGtleSksIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICAvKlxuICAgICAgICBGbGlwIHZhbHVlIHRhcmdldC9vcmlnaW5cbiAgICAqL1xuICAgIGZsaXA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gKHZhbHVlLnRhcmdldCAhPT0gdW5kZWZpbmVkKSA/IHZhbHVlLnRhcmdldCA6IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIHZhbHVlLnRhcmdldCA9IHZhbHVlLnRvID0gdmFsdWUub3JpZ2luO1xuICAgICAgICB2YWx1ZS5vcmlnaW4gPSB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIE1lcmdlIGV4aXN0aW5nIGFuZCBpbmNvbWluZyB2YWx1ZXMsIHJlc29sdmluZyBwcm9wZXJ0aWVzXG4gICAgICAgIHNldCBhcyBmdW5jdGlvbnMgYW5kIHNwbGl0dGluZyBub24tbnVtZXJpY2FsIHZhbHVlcyBpZSBoZXhcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcGFyYW0gW3N0cmluZ10gKG9wdGlvbmFsKVxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHJldHVybnMgW29iamVjdF06IE5ldyB2YWx1ZXMgb2JqZWN0XG4gICAgKi9cbiAgICBwcm9jZXNzOiBmdW5jdGlvbiAoZXhpc3RpbmcgPSB7fSwgaW5jb21pbmcsIGluaGVyaXQsIGRlZmF1bHRQcm9wID0gJ2N1cnJlbnQnLCBzY29wZSkge1xuICAgICAgICB2YXIgcHJlcHJvY2Vzc2VkID0gcHJlcHJvY2VzcyhleGlzdGluZywgaW5jb21pbmcsIHNjb3BlLCBkZWZhdWx0UHJvcCk7XG5cbiAgICAgICAgZWFjaChwcmVwcm9jZXNzZWQsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSBleGlzdGluZ1trZXldID8gdXRpbHMuY29weShleGlzdGluZ1trZXldKSA6IHV0aWxzLmNvcHkoZGVmYXVsdFZhbHVlKSxcbiAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbiA9ICh2YWx1ZS5jaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0QWN0aW9uVmFsdWUgPSBpbmhlcml0LmFjdGlvbiA/IGluaGVyaXQuYWN0aW9uLmdldERlZmF1bHRWYWx1ZSgpIDoge307XG5cbiAgICAgICAgICAgIHZhbHVlLmFjdGlvbiA9IHZhbHVlLndhdGNoID8gd2F0Y2hlciA6IGluaGVyaXQuYWN0aW9uO1xuXG4gICAgICAgICAgICBlYWNoKGRlZmF1bHRBY3Rpb25WYWx1ZSwgKHByb3BOYW1lLCBkZWZhdWx0QWN0aW9uUHJvcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlW3Byb3BOYW1lXSA9IChpbmhlcml0Lmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJiAhdmFsdWUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSA/IGluaGVyaXRbcHJvcE5hbWVdIDogZGVmYXVsdEFjdGlvblByb3A7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZWFjaCh2YWx1ZSwgKHZhbHVlTmFtZSwgdmFsdWVQcm9wKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcHJvcGVydHkgaXMgbm90IHVuZGVmaW5lZCBvciBhIG51bWJlciwgcmVzb2x2ZVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZVByb3AgIT09IHVuZGVmaW5lZCAmJiAhaXNOdW0odmFsdWVQcm9wKSAmJiAhaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVQcm9wID0gcmVzb2x2ZSh2YWx1ZU5hbWUsIHZhbHVlUHJvcCwgbmV3VmFsdWUsIHNjb3BlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuZXdWYWx1ZVt2YWx1ZU5hbWVdID0gdmFsdWVQcm9wO1xuXG4gICAgICAgICAgICAgICAgLy8gU2V0IGludGVybmFsIHRhcmdldCBpZiB0aGlzIHByb3BlcnR5IGlzICd0bydcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVOYW1lID09PSAndG8nKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnRhcmdldCA9IG5ld1ZhbHVlLnRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBuZXdWYWx1ZS5vcmlnaW4gPSBuZXdWYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgbmV3VmFsdWUuaGFzUmFuZ2UgPSAoaXNOdW0obmV3VmFsdWUubWluKSB8fCBpc051bShuZXdWYWx1ZS5tYXgpKSA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICAgICAgZXhpc3Rpbmdba2V5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgc2NvcGUudXBkYXRlT3JkZXIoa2V5LCB1dGlscy5pc1N0cmluZyhuZXdWYWx1ZS53YXRjaCksIGhhc0NoaWxkcmVuKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0b3IvdmFsdWUtb3BlcmF0aW9ucy5qc1xuICoqLyIsInZhciBSb2xlID0gcmVxdWlyZSgnLi9Sb2xlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFJvbGUoe1xuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5pdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5vblN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZnJhbWU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5vbkZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm9uRnJhbWUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLm9uVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlKHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL2RlZmF1bHRSb2xlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciAvLyBbbnVtYmVyXTogRGVmYXVsdCBtYXggc2l6ZSBvZiBoaXN0b3J5XG4gICAgbWF4SGlzdG9yeVNpemUgPSAzLFxuICAgIFxuICAgIC8qXG4gICAgICAgIEhpc3RvcnkgY29uc3RydWN0b3JcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbdmFyXTogVmFyaWFibGUgdG8gc3RvcmUgaW4gZmlyc3QgaGlzdG9yeSBzbG90XG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpOiBNYXhpbXVtIHNpemUgb2YgaGlzdG9yeVxuICAgICovXG4gICAgSGlzdG9yeSA9IGZ1bmN0aW9uIChvYmosIG1heCkge1xuICAgICAgICB0aGlzLm1heCA9IG1heCB8fCBtYXhIaXN0b3J5U2l6ZTtcbiAgICAgICAgdGhpcy5lbnRyaWVzID0gW107XG4gICAgICAgIHRoaXMuYWRkKG9iaik7XG4gICAgfTtcbiAgICBcbkhpc3RvcnkucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8qXG4gICAgICAgIFB1c2ggbmV3IHZhciB0byBoaXN0b3J5XG4gICAgICAgIFxuICAgICAgICBTaGlmdCBvdXQgb2xkZXN0IGVudHJ5IGlmIHdlJ3ZlIHJlYWNoZWQgbWF4aW11bSBjYXBhY2l0eVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFt2YXJdOiBWYXJpYWJsZSB0byBwdXNoIGludG8gaGlzdG9yeS5lbnRyaWVzXG4gICAgKi9cbiAgICBhZGQ6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTaXplID0gdGhpcy5nZXRTaXplKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVudHJpZXMucHVzaChvYmopO1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRTaXplID49IHRoaXMubWF4KSB7XG4gICAgICAgICAgICB0aGlzLmVudHJpZXMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHZhcmlhYmxlIGF0IHNwZWNpZmllZCBpbmRleFxuXG4gICAgICAgIEBwYXJhbSBbaW50XTogSW5kZXhcbiAgICAgICAgQHJldHVybiBbdmFyXTogVmFyIGZvdW5kIGF0IHNwZWNpZmllZCBpbmRleFxuICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAoaSkge1xuICAgICAgICBpID0gKHR5cGVvZiBpID09PSAnbnVtYmVyJykgPyBpIDogdGhpcy5nZXRTaXplKCkgLSAxO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXNbaV07XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdGhlIHNlY29uZCBuZXdlc3QgaGlzdG9yeSBlbnRyeVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdmFyXTogRW50cnkgZm91bmQgYXQgaW5kZXggc2l6ZSAtIDJcbiAgICAqL1xuICAgIGdldFByZXZpb3VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldCh0aGlzLmdldFNpemUoKSAtIDIpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGN1cnJlbnQgaGlzdG9yeSBzaXplXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBDdXJyZW50IGxlbmd0aCBvZiBlbnRyaWVzLmxlbmd0aFxuICAgICovXG4gICAgZ2V0U2l6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRyaWVzLmxlbmd0aDtcbiAgICB9XG4gICAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhpc3Rvcnk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5jL0hpc3RvcnkuanNcbiAqKi8iLCJjbGFzcyBDb250cm9scyB7XG4gICAgY29uc3RydWN0b3IoYWN0b3IsIGFjdGlvbiwgaGFzU3RhcnRlZCkge1xuICAgICAgICB0aGlzLmFjdG9yID0gYWN0b3I7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuXG4gICAgICAgIGlmIChoYXNTdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5iaW5kQWN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoaW5wdXQpIHtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuYmluZEFjdGlvbigpO1xuICAgICAgICB0aGlzLmFjdG9yLnN0YXJ0Qm91bmQodGhpcy5pZCwgaW5wdXQpO1xuICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmFjdG9yLnVuYmluZEFjdGlvbih0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5hY3Rpb24uZGVhY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24uZGVhY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgbGV0IHJlc3VtZSA9IHRoaXMuYWN0b3IuaGFzQWN0aW9uKHRoaXMuaWQpID8gdGhpcy5yZXN1bWUgOiB0aGlzLnN0YXJ0O1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb24uaXNBY3RpdmUgPyB0aGlzLnBhdXNlKCkgOiByZXN1bWUuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGVuKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5hY3Rvci50aGVuKC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBiaW5kQWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rvci5iaW5kQWN0aW9uKHRoaXMuYWN0aW9uLCB0aGlzLmlkKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udHJvbHM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29udHJvbHMvQ29udHJvbHMuanNcbiAqKi8iLCIvKlxuICAgIEVhc2luZyBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgR2VuZXJhdGVzIGFuZCBwcm92aWRlcyBlYXNpbmcgZnVuY3Rpb25zIGJhc2VkIG9uIGJhc2VGdW5jdGlvbiBkZWZpbml0aW9uc1xuICAgIFxuICAgIEEgY2FsbCB0byBlYXNpbmdGdW5jdGlvbi5nZXQoJ2Z1bmN0aW9uTmFtZScpIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwYXNzZWQ6XG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgMC0xXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaXMgdXNlZCB0byBhZGp1c3Qgb3ZlcmFsbCBzdHJlbmd0aFxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBFYXNlZCBwcm9ncmVzc1xuICAgICAgICBcbiAgICBXZSBjYW4gZ2VuZXJhdGUgbmV3IGZ1bmN0aW9ucyBieSBzZW5kaW5nIGFuIGVhc2luZyBmdW5jdGlvbiB0aHJvdWdoIGVhc2luZ0Z1bmN0aW9uLmV4dGVuZChuYW1lLCBtZXRob2QpLlxuICAgIFdoaWNoIHdpbGwgbWFrZSBuYW1lSW4sIG5hbWVPdXQgYW5kIG5hbWVJbk91dCBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvIHVzZS5cbiAgICAgICAgXG4gICAgRWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXJcbiAgICBodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuICAgICAgICBcbiAgICBCZXppZXIgY3VydmUgaW50ZXJwcmV0b3IgY3JlYXRlZCBmcm9tIEdhw6t0YW4gUmVuYXVkZWF1J3Mgb3JpZ2luYWwgQmV6aWVyRWFzaW5nICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBFYXNpbmcgPSByZXF1aXJlKCcuL0Vhc2luZycpLFxuICAgIGVhc2luZ0Z1bmN0aW9uLFxuICAgIFxuICAgIC8vIEdlbmVyYXRlIGVhc2luZyBmdW5jdGlvbiB3aXRoIHByb3ZpZGVkIHBvd2VyXG4gICAgZ2VuZXJhdGVQb3dlckVhc2luZyA9IGZ1bmN0aW9uIChwb3dlcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3cocHJvZ3Jlc3MsIHBvd2VyKTtcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgRWFjaCBvZiB0aGVzZSBiYXNlIGZ1bmN0aW9ucyBpcyBhbiBlYXNlSW5cbiAgICAgICAgXG4gICAgICAgIE9uIGluaXQsIHdlIHVzZSBFYXNpbmdGdW5jdGlvbi5taXJyb3IgYW5kIC5yZXZlcnNlIHRvIGdlbmVyYXRlIGVhc2VJbk91dCBhbmRcbiAgICAgICAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuICAgICovXG4gICAgYmFzZUVhc2luZyA9IHtcbiAgICAgICAgY2lyYzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwcm9ncmVzcykpO1xuICAgICAgICB9LFxuICAgICAgICBiYWNrOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHZhciBzdHJlbmd0aCA9IDEuNTtcblxuICAgICAgICAgICAgcmV0dXJuIChwcm9ncmVzcyAqIHByb2dyZXNzKSAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpO1xuICAgICAgICB9XG4gICAgfTtcblxuLy8gR2VuZXJhdGUgcG93ZXIgZWFzaW5nIGVhc2luZ1xuWydlYXNlJywgJ2N1YmljJywgJ3F1YXJ0JywgJ3F1aW50J10uZm9yRWFjaChmdW5jdGlvbiAoZWFzaW5nTmFtZSwgaSkge1xuICAgIGJhc2VFYXNpbmdbZWFzaW5nTmFtZV0gPSBnZW5lcmF0ZVBvd2VyRWFzaW5nKGkgKyAyKTtcbn0pO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZm9yICh2YXIga2V5IGluIGJhc2VFYXNpbmcpIHtcbiAgICBpZiAoYmFzZUVhc2luZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gbmV3IEVhc2luZyhiYXNlRWFzaW5nW2tleV0pO1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbiddID0gZWFzaW5nRnVuY3Rpb24uaW47XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ091dCddID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbk91dCddID0gZWFzaW5nRnVuY3Rpb24uaW5PdXQ7XG4gICAgfVxufVxuXG4vKlxuICAgIExpbmVhciBlYXNpbmcgYWRqdXN0bWVudFxuICAgIFxuICAgIFRoZSBkZWZhdWx0IGVhc2luZyBtZXRob2QsIG5vdCBhZGRlZCB3aXRoIC5leHRlbmQgYXMgaXQgaGFzIG5vIE91dCBvciBJbk91dFxuICAgIHZhcmlhdGlvbi5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAtMVxuICAgIEByZXR1cm4gW251bWJlcl06IFVuYWRqdXN0ZWQgcHJvZ3Jlc3NcbiovXG5iYXNlRWFzaW5nLmxpbmVhciA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiBwcm9ncmVzcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUVhc2luZztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL3R3ZWVuL3ByZXNldC1lYXNpbmcuanNcbiAqKi8iLCJ2YXIgQ29udHJvbHMgPSByZXF1aXJlKCcuLi8uLi9jb250cm9scy9Db250cm9scycpO1xuXG5jbGFzcyBUd2VlbkNvbnRyb2xzIGV4dGVuZHMgQ29udHJvbHMge1xuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLnJlc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24ucmV2ZXJzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZWVrKHByb2dyZXNzKSB7XG4gICAgICAgIGlmICghdGhpcy5hY3Rvci5oYXNBY3Rpb24odGhpcy5pZCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKS5wYXVzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3Rpb24uZWxhcHNlZCA9IHRoaXMuYWN0aW9uLmR1cmF0aW9uICogcHJvZ3Jlc3M7XG5cbiAgICAgICAgaWYgKCF0aGlzLmFjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24uYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0b3IucHJvY2Vzcy5maXJlKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5kZWFjdGl2YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW5Db250cm9scztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL3R3ZWVuL1R3ZWVuQ29udHJvbHMuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi8uLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyksXG4gICAgc3BlZWRQZXJGcmFtZSA9IGNhbGMuc3BlZWRQZXJGcmFtZTtcblxuLypcbiAgICBBZGQgY29yZSBwaHlzaWNzIHNpbXVsYXRpb25zXG4qL1xudmFyIHNpbXVsYXRpb25zID0ge1xuICAgIC8qXG4gICAgICAgIFZlbG9jaXR5XG4gICAgICAgIFxuICAgICAgICBUaGUgZGVmYXVsdCAucnVuKCkgc2ltdWxhdGlvbi5cbiAgICAgICAgXG4gICAgICAgIEFwcGxpZXMgYW55IHNldCBkZWNlbGVyYXRpb24gYW5kIGFjY2VsZXJhdGlvbiB0byBleGlzdGluZyB2ZWxvY2l0eVxuICAgICovXG4gICAgdmVsb2NpdHk6IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFsdWUudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eSAtIHNwZWVkUGVyRnJhbWUodmFsdWUuZGVjZWxlcmF0aW9uLCBkdXJhdGlvbikgKyBzcGVlZFBlckZyYW1lKHZhbHVlLmFjY2VsZXJhdGlvbiwgZHVyYXRpb24pO1xuXG4gICAgICAgIHJldHVybiBzaW11bGF0aW9ucy5mcmljdGlvbih2YWx1ZSwgZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBHbGlkZVxuICAgICAgICBcbiAgICAgICAgRW11bGF0ZXMgdG91Y2ggZGV2aWNlIHNjcm9sbGluZyBlZmZlY3RzIHdpdGggZXhwb25lbnRpYWwgZGVjYXlcbiAgICAgICAgaHR0cDovL2FyaXlhLm9maWxhYnMuY29tLzIwMTMvMTEvamF2YXNjcmlwdC1raW5ldGljLXNjcm9sbGluZy1wYXJ0LTIuaHRtbFxuICAgICovXG4gICAgZ2xpZGU6IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24sIHN0YXJ0ZWQpIHtcbiAgICAgICAgdmFyIHRpbWVVbnRpbEZpbmlzaGVkID0gLSB1dGlscy5jdXJyZW50VGltZSgpIC0gc3RhcnRlZCxcbiAgICAgICAgICAgIGRlbHRhID0gLSB2YWx1ZS50byAqIE1hdGguZXhwKHRpbWVVbnRpbEZpbmlzaGVkIC8gdmFsdWUudGltZUNvbnN0YW50KTtcblxuICAgICAgICByZXR1cm4gKHZhbHVlLnRvICsgZGVsdGEpIC0gdmFsdWUuY3VycmVudDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgRnJpY3Rpb25cblxuICAgICAgICBBcHBseSBmcmljdGlvbiB0byB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICBUT0RPOiBNYWtlIHRoaXMgZnJhbWVyYXRlLWluZGVwZW5kZW50XG4gICAgKi9cbiAgICBmcmljdGlvbjogZnVuY3Rpb24gKHZhbHVlLCBkdXJhdGlvbikge1xuICAgICAgICB2YXIgbmV3VmVsb2NpdHkgPSBzcGVlZFBlckZyYW1lKHZhbHVlLnZlbG9jaXR5LCBkdXJhdGlvbikgKiAoMSAtIHZhbHVlLmZyaWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gY2FsYy5zcGVlZFBlclNlY29uZChuZXdWZWxvY2l0eSwgZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICBzcHJpbmc6IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gdmFsdWUudG8gLSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IGRpc3RhbmNlICogc3BlZWRQZXJGcmFtZSh2YWx1ZS5zcHJpbmcsIGR1cmF0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBzaW11bGF0aW9ucy5mcmljdGlvbih2YWx1ZSwgZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICBib3VuY2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSAwLFxuICAgICAgICAgICAgdG8gPSB2YWx1ZS50byxcbiAgICAgICAgICAgIGN1cnJlbnQgPSB2YWx1ZS5jdXJyZW50LFxuICAgICAgICAgICAgYm91bmNlID0gdmFsdWUuYm91bmNlO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgd2UncmUgdXNpbmcgZ2xpZGUgc2ltdWxhdGlvbiB3ZSBoYXZlIHRvIGZsaXAgb3VyIHRhcmdldCB0b29cbiAgICAgICAgaWYgKHZhbHVlLnNpbXVsYXRlID09PSAnZ2xpZGUnKSB7XG4gICAgICAgICAgICBkaXN0YW5jZSA9IHRvIC0gY3VycmVudDtcbiAgICAgICAgICAgIHZhbHVlLnRvID0gY3VycmVudCAtIChkaXN0YW5jZSAqIGJvdW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB2YWx1ZS52ZWxvY2l0eSAqPSAtIGJvdW5jZTtcbiAgICB9LFxuXG4gICAgY2FwdHVyZTogZnVuY3Rpb24gKHZhbHVlLCB0YXJnZXQpIHtcbiAgICAgICAgdmFsdWUudG8gPSB0YXJnZXQ7XG4gICAgICAgIHZhbHVlLnNpbXVsYXRlID0gJ3NwcmluZyc7XG4gICAgICAgIHZhbHVlLmNhcHR1cmUgPSB2YWx1ZS5taW4gPSB2YWx1ZS5tYXggPSB1bmRlZmluZWQ7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaW11bGF0aW9ucztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvc2ltdWxhdGUvc2ltdWxhdGlvbnMuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHRoZUxvb3AgPSByZXF1aXJlKCcuL2xvb3AuanMnKSxcbiAgICBQcm9jZXNzTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVJZHMgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVQcm9jZXNzZXMgPSB7fTtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlUXVldWUgPSBbXTtcbiAgICAgICAgdGhlTG9vcC5zZXRDYWxsYmFjayh0aGlzLCB0aGlzLmZpcmVBY3RpdmUpO1xuICAgIH07XG4gICAgXG5Qcm9jZXNzTWFuYWdlci5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLypcbiAgICAgICAgW2ludF06IFVzZWQgZm9yIHByb2Nlc3MgSURcbiAgICAqL1xuICAgIHByb2Nlc3NDb3VudGVyOiAwLFxuICAgIFxuICAgIC8qXG4gICAgICAgIFtpbnRdOiBOdW1iZXIgb2YgYWN0aXZlIHByb2Nlc3Nlc1xuICAgICovXG4gICAgYWN0aXZlQ291bnQ6IDAsXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBwcm9jZXNzIHdpdGggYSBnaXZlbiBpbmRleFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleCBvZiBwcm9jZXNzXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cbiAgICBnZXRQcm9jZXNzOiBmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVQcm9jZXNzZXNbaV07XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgbnVtYmVyIG9mIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2ludF06IE51bWJlciBvZiBhY3RpdmUgcHJvY2Vzc2VzXG4gICAgKi9cbiAgICBnZXRBY3RpdmVDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVDb3VudDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBhY3RpdmUgdG9rZW5zXG5cbiAgICAgICAgQHJldHVybiBbYXJyYXldOiBBY3RpdmUgdG9rZW5zXG4gICAgKi9cbiAgICBnZXRBY3RpdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlSWRzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBsZW5ndGggb2YgdGhlIGRlYWN0aXZhdGUgcXVldWVcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2ludF06IExlbmd0aCBvZiBxdWV1ZVxuICAgICovXG4gICAgZ2V0UXVldWVMZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEZpcmUgYWxsIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogVGltZXN0YW1wIG9mIGV4ZWN1dGluZyBmcmFtZXNcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBUaW1lIHNpbmNlIHByZXZpb3VzIGZyYW1lXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGFjdGl2ZSBwcm9jZXNzZXMgZm91bmRcbiAgICAqL1xuICAgIGZpcmVBY3RpdmU6IGZ1bmN0aW9uIChmcmFtZXN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBwcm9jZXNzLFxuICAgICAgICAgICAgYWN0aXZlQ291bnQgPSAwLFxuICAgICAgICAgICAgYWN0aXZlSWRzID0gW10sXG4gICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAvLyBQdXJnZSBhbmQgY2hlY2sgYWN0aXZlIGNvdW50IGJlZm9yZSBleGVjdXRpb25cbiAgICAgICAgdGhpcy5wdXJnZSgpO1xuICAgICAgICBhY3RpdmVDb3VudCA9IHRoaXMuZ2V0QWN0aXZlQ291bnQoKTtcbiAgICAgICAgYWN0aXZlSWRzID0gdGhpcy5nZXRBY3RpdmUoKTtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWN0aXZlIHByb2Nlc3NlcyBhbmQgZmlyZSBjYWxsYmFja1xuICAgICAgICBmb3IgKDsgaSA8IGFjdGl2ZUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHByb2Nlc3MgPSB0aGlzLmdldFByb2Nlc3MoYWN0aXZlSWRzW2ldKTtcblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmZpcmUoZnJhbWVzdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXB1cmdlIGFuZCByZWNoZWNrIGFjdGl2ZSBjb3VudCBhZnRlciBleGVjdXRpb25cbiAgICAgICAgdGhpcy5wdXJnZSgpO1xuICAgICAgICBhY3RpdmVDb3VudCA9IHRoaXMuZ2V0QWN0aXZlQ291bnQoKTtcblxuICAgICAgICAvLyBSZXR1cm4gdHJ1ZSBpZiB3ZSBzdGlsbCBoYXZlIGFjdGl2ZSBwcm9jZXNzZXMsIG9yIGZhbHNlIGlmIG5vbmVcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUNvdW50ID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgUmVnaXN0ZXIgYSBuZXcgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtQcm9jZXNzXVxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBJbmRleCBvZiBwcm9jZXNzIHRvIGJlIHVzZWQgYXMgSURcbiAgICAqL1xuICAgIHJlZ2lzdGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NDb3VudGVyKys7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBBY3RpdmF0ZSBhIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogSW5kZXggb2YgYWN0aXZlIHByb2Nlc3NcbiAgICAqL1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAocHJvY2VzcywgaSkge1xuICAgICAgICB2YXIgcXVldWVJbmRleCA9IHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLmluZGV4T2YoaSksXG4gICAgICAgICAgICBpc1F1ZXVlZCA9IChxdWV1ZUluZGV4ID4gLTEpLFxuICAgICAgICAgICAgaXNBY3RpdmUgPSAodGhpcy5hY3RpdmVJZHMuaW5kZXhPZihpKSA+IC0xKTtcblxuICAgICAgICAvLyBSZW1vdmUgZnJvbSBkZWFjdGl2YXRlUXVldWUgaWYgaW4gdGhlcmVcbiAgICAgICAgaWYgKGlzUXVldWVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UocXVldWVJbmRleCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdG8gYWN0aXZlIHByb2Nlc3NlcyBhcnJheSBpZiBub3QgYWxyZWFkeSBpbiB0aGVyZVxuICAgICAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUlkcy5wdXNoKGkpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQcm9jZXNzZXNbaV0gPSBwcm9jZXNzO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVDb3VudCsrO1xuICAgICAgICAgICAgdGhlTG9vcC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEZWFjdGl2YXRlIGEgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleCBvZiBwcm9jZXNzIHRvIGFkZCB0byBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlOiBmdW5jdGlvbiAoaSkge1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGVRdWV1ZS5wdXNoKGkpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgUHVyZ2UgdGhlIGRlYWN0aXZhdGUgcXVldWVcbiAgICAqL1xuICAgIHB1cmdlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBxdWV1ZUxlbmd0aCA9IHRoaXMuZ2V0UXVldWVMZW5ndGgoKSxcbiAgICAgICAgICAgIGFjdGl2ZUlkSW5kZXggPSAwLFxuICAgICAgICAgICAgaWRUb0RlbGV0ZSA9IDA7XG5cbiAgICAgICAgd2hpbGUgKHF1ZXVlTGVuZ3RoLS0pIHtcbiAgICAgICAgICAgIGlkVG9EZWxldGUgPSB0aGlzLmRlYWN0aXZhdGVRdWV1ZVtxdWV1ZUxlbmd0aF07XG4gICAgICAgICAgICBhY3RpdmVJZEluZGV4ID0gdGhpcy5hY3RpdmVJZHMuaW5kZXhPZihpZFRvRGVsZXRlKTtcblxuICAgICAgICAgICAgLy8gSWYgcHJvY2VzcyBpbiBhY3RpdmUgbGlzdCBkZWFjdGl2YXRlXG4gICAgICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ291bnQtLTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVQcm9jZXNzZXNbaWRUb0RlbGV0ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlID0gW107XG4gICAgfVxuICAgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgUHJvY2Vzc01hbmFnZXIoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm9jZXNzL21hbmFnZXIuanNcbiAqKi8iLCIvKlxuICAgIEJlemllciBmdW5jdGlvbiBnZW5lcmF0b3JcbiAgICAgICAgXG4gICAgR2HDq3RhbiBSZW5hdWRlYXUncyBCZXppZXJFYXNpbmdcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICAgWW91J3JlIGEgaGVyb1xuICAgIFxuICAgIFVzZVxuICAgIFxuICAgICAgICB2YXIgZWFzZU91dCA9IG5ldyBCZXppZXIoLjE3LC42NywuODMsLjY3KSxcbiAgICAgICAgICAgIHggPSBlYXNlT3V0KDAuNSk7IC8vIHJldHVybnMgMC42MjcuLi5cbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIE5FV1RPTl9JVEVSQVRJT05TID0gOCxcbiAgICBORVdUT05fTUlOX1NMT1BFID0gMC4wMDEsXG4gICAgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxLFxuICAgIFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TID0gMTAsXG4gICAgS19TUExJTkVfVEFCTEVfU0laRSA9IDExLFxuICAgIEtfU0FNUExFX1NURVBfU0laRSA9IDEuMCAvIChLX1NQTElORV9UQUJMRV9TSVpFIC0gMS4wKSxcbiAgICBGTE9BVF8zMl9TVVBQT1JURUQgPSAodHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcpLFxuICAgIFxuICAgIGEgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgICAgIHJldHVybiAxLjAgLSAzLjAgKiBhMiArIDMuMCAqIGExO1xuICAgIH0sXG4gICAgXG4gICAgYiA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGEyIC0gNi4wICogYTE7XG4gICAgfSxcbiAgICBcbiAgICBjID0gZnVuY3Rpb24gKGExKSB7XG4gICAgICAgIHJldHVybiAzLjAgKiBhMTtcbiAgICB9LFxuXG4gICAgZ2V0U2xvcGUgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgICAgIHJldHVybiAzLjAgKiBhKGExLCBhMikgKiB0ICogdCArIDIuMCAqIGIoYTEsIGEyKSAqIHQgKyBjKGExKTtcbiAgICB9LFxuXG4gICAgY2FsY0JlemllciA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuICgoYShhMSwgYTIpICogdCArIGIoYTEsIGEyKSkgKiB0ICsgYyhhMSkpICogdDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEJlemllciBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgQmV6aWVyID0gZnVuY3Rpb24gKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICAgICAgICB2YXIgc2FtcGxlVmFsdWVzID0gRkxPQVRfMzJfU1VQUE9SVEVEID8gbmV3IEZsb2F0MzJBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSA6IG5ldyBBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSxcbiAgICAgICAgICAgIF9wcmVjb21wdXRlZCA9IGZhbHNlLFxuICAgIFxuICAgICAgICAgICAgYmluYXJ5U3ViZGl2aWRlID0gZnVuY3Rpb24gKGFYLCBhQSwgYUIpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFgsIGN1cnJlbnRULCBpID0gMDtcblxuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgICAgIG5ld3RvblJhcGhzb25JdGVyYXRlID0gZnVuY3Rpb24gKGFYLCBhR3Vlc3NUKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xvcGUgPSAwLjAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICAgICAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjYWxjU2FtcGxlVmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgS19TUExJTkVfVEFCTEVfU0laRTsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIEtfU0FNUExFX1NURVBfU0laRSwgbVgxLCBtWDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZ2V0VEZvclggPSBmdW5jdGlvbiAoYVgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNhbXBsZSA9IDEsXG4gICAgICAgICAgICAgICAgICAgIGxhc3RTYW1wbGUgPSBLX1NQTElORV9UQUJMRV9TSVpFIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgZGlzdCA9IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgZ3Vlc3NGb3JUID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU2xvcGUgPSAwLjA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC0tY3VycmVudFNhbXBsZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSsxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgICAgICAgICAgICAgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgc2xvcGUgaXMgZ3JlYXRlciB0aGFuIG1pblxuICAgICAgICAgICAgICAgIGlmIChpbml0aWFsU2xvcGUgPj0gTkVXVE9OX01JTl9TTE9QRSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCk7XG4gICAgICAgICAgICAgICAgLy8gU2xvcGUgaXMgZXF1YWwgdG8gbWluXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgICAgICAgICAgIC8vIFNsb3BlIGlzIGxlc3MgdGhhbiBtaW5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsgS19TQU1QTEVfU1RFUF9TSVpFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcmVjb21wdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF9wcmVjb21wdXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKG1YMSAhPSBtWTEgfHwgbVgyICE9IG1ZMikge1xuICAgICAgICAgICAgICAgICAgICBjYWxjU2FtcGxlVmFsdWVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICBHZW5lcmF0ZWQgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBSZXR1cm5zIHZhbHVlIDAtMSBiYXNlZCBvbiBYXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgZiA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICAgICAgICAgIHZhciByZXR1cm5WYWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmICghX3ByZWNvbXB1dGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZWNvbXB1dGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgbGluZWFyIGdyYWRpZW50LCByZXR1cm4gWCBhcyBUXG4gICAgICAgICAgICAgICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gYVg7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIGF0IHN0YXJ0LCByZXR1cm4gMFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBhdCBlbmQsIHJldHVybiAxXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDE7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGNhbGNCZXppZXIoZ2V0VEZvclgoYVgpLCBtWTEsIG1ZMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0gQmV6aWVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvdHdlZW4vQmV6aWVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvc3BsaXQtY29tbWEtZGVsaW1pdGVkLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tYnJlYWsuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHBvc2l0aW9uVGVybXMgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5JykucG9zaXRpb25zLFxuICAgIG51bVBvc2l0aW9uVGVybXMgPSBwb3NpdGlvblRlcm1zLmxlbmd0aCxcblxuICAgIFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZScsXG4gICAgU0NBTEUgPSAnc2NhbGUnLFxuICAgIFJPVEFURSA9ICdyb3RhdGUnLFxuICAgIHRlcm1zID0ge1xuICAgICAgICBmdW5jczogWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV0sXG4gICAgICAgIHByb3BzOiB7fSAvLyBvYmplY3RzIGFyZSBmYXN0ZXIgYXQgZGlyZWN0IGxvb2t1cHNcbiAgICB9O1xuXG4vLyBDcmVhdGUgdHJhbnNmb3JtIHRlcm1zXG4oZnVuY3Rpb24gKCkge1xuICAgIHZhciBmdW5jcyA9IHRlcm1zLmZ1bmNzLFxuICAgICAgICBwcm9wcyA9IHRlcm1zLnByb3BzLFxuICAgICAgICBudW1GdW5jcyA9IGZ1bmNzLmxlbmd0aCxcbiAgICAgICAgaSA9IDAsXG5cbiAgICAgICAgY3JlYXRlUHJvcHMgPSBmdW5jdGlvbiAoZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHZhciBqID0gMDtcblxuICAgICAgICAgICAgZm9yICg7IGogPCBudW1Qb3NpdGlvblRlcm1zOyBqKyspIHtcbiAgICAgICAgICAgICAgICBwcm9wc1tmdW5jTmFtZSArIHBvc2l0aW9uVGVybXNbal1dID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICBcbiAgICAvLyBNYW51YWxseSBhZGQgc2tldyBhbmQgdHJhbnNmb3JtIHBlcnNwZWN0aXZlICBcbiAgICBwcm9wc1tST1RBVEVdID0gcHJvcHNbU0NBTEVdID0gcHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG4gICAgXG4gICAgLy8gTG9vcCBvdmVyIGVhY2ggZnVuY3Rpb24gbmFtZSBhbmQgY3JlYXRlIGZ1bmN0aW9uL3Byb3BlcnR5IHRlcm1zXG4gICAgZm9yICg7IGkgPCBudW1GdW5jczsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BzKGZ1bmNzW2ldKTtcbiAgICB9XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRlcm1zO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL2Nzcy90cmFuc2Zvcm0tZGljdGlvbmFyeS5qc1xuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuXG4gICAgU1RSSU5HID0gJ3N0cmluZycsXG4gICAgXG4gICAgLypcbiAgICAgICAgVHJhbnNsYXRlIG91ciBtYXBMaW5rIHZhbHVlIGludG8gbWFwVG9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZSBmcm9tIGxpbmtlZCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW1ZhbHVlIHx8IG9iamVjdF06IExpbmtlZCB2YWx1ZSBvciBlbXB0eSBvYmplY3QgaWYgd2UncmUgbGlua2luZyB0byBpbnB1dFxuICAgICAgICBAcGFyYW0gW2FycmF5XTogTGlzdCBvZiBudW1iZXJzIHJlbGF0aW5nIHRvIGxpbmtlZCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW2FycmF5XTogTGlzdCBvZiBudW1iZXJzIHJlbGF0aW5nIHRvIHRoaXMgdmFsdWVcbiAgICAqL1xuICAgIGZpbmRNYXBwZWRWYWx1ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgbGlua2VkVmFsdWUsIHRvVmFsdWUsIG1hcExpbmssIG1hcFRvKSB7XG4gICAgICAgIHZhciBtYXBMZW5ndGggPSBtYXBMaW5rLmxlbmd0aCxcbiAgICAgICAgICAgIGkgPSAxLFxuICAgICAgICAgICAgbGFzdExpbmtWYWx1ZSxcbiAgICAgICAgICAgIHRoaXNMaW5rVmFsdWUsXG4gICAgICAgICAgICBsYXN0VG9WYWx1ZSxcbiAgICAgICAgICAgIHRoaXNUb1ZhbHVlO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbWFwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIEFzc2lnbiB2YWx1ZXMgZnJvbSBhcnJheSwgb3IgaWYgdGhleSdyZSBzdHJpbmdzLCBsb29rIGZvciB0aGVtIGluIGxpbmtlZFZhbHVlXG4gICAgICAgICAgICBsYXN0TGlua1ZhbHVlID0gKHR5cGVvZiBtYXBMaW5rW2kgLSAxXSA9PT0gU1RSSU5HKSA/IGxpbmtlZFZhbHVlW21hcExpbmtbaSAtIDFdXSA6IG1hcExpbmtbaSAtIDFdO1xuICAgICAgICAgICAgdGhpc0xpbmtWYWx1ZSA9ICh0eXBlb2YgbWFwTGlua1tpXSA9PT0gU1RSSU5HKSA/IGxpbmtlZFZhbHVlW21hcExpbmtbaV1dIDogbWFwTGlua1tpXTtcbiAgICAgICAgICAgIGxhc3RUb1ZhbHVlID0gKHR5cGVvZiBtYXBUb1tpIC0gMV0gPT09IFNUUklORykgPyB0b1ZhbHVlW21hcFRvW2kgLSAxXV0gOiBtYXBUb1tpIC0gMV07XG4gICAgICAgICAgICB0aGlzVG9WYWx1ZSA9ICh0eXBlb2YgbWFwVG9baV0gPT09IFNUUklORykgPyB0b1ZhbHVlW21hcFRvW2ldXSA6IG1hcFRvW2ldO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSd2ZSBnb25lIHBhc3Qgb3VyIGNhbGN1bGF0ZWQgdmFsdWUsIG9yIGlmIHdlJ3JlIGF0IHRoZSBlbmQgb2YgdGhlIGFycmF5XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgPCB0aGlzTGlua1ZhbHVlIHx8IGkgPT09IG1hcExlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IGNhbGMudmFsdWUoY2FsYy5yZXN0cmljdGVkKGNhbGMucHJvZ3Jlc3MobmV3VmFsdWUsIGxhc3RMaW5rVmFsdWUsIHRoaXNMaW5rVmFsdWUpLCAwLCAxKSwgbGFzdFRvVmFsdWUsIHRoaXNUb1ZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgIH07XG5cbmNsYXNzIFdhdGNoIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBQcm9jZXNzIHRoaXMgdmFsdWVcbiAgICAgICAgXG4gICAgICAgIEZpcnN0IGNoZWNrIGlmIHRoaXMgdmFsdWUgZXhpc3RzIGFzIGEgVmFsdWUsIGlmIG5vdFxuICAgICAgICBjaGVjayB3aXRoaW4gSW5wdXQgKGlmIHdlIGhhdmUgb25lKVxuICAgICAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbQWN0b3JdXG4gICAgICAgIEBwYXJhbSBbVmFsdWVdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IG9mIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZVxuICAgICovXG4gICAgcHJvY2VzcyhhY3RvciwgdmFsdWUsIGtleSkge1xuICAgICAgICB2YXIgdmFsdWVzID0gYWN0b3IudmFsdWVzLFxuICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZS5jdXJyZW50LFxuICAgICAgICAgICAgd2F0Y2hlZEtleSA9IHZhbHVlLndhdGNoLFxuICAgICAgICAgICAgd2F0Y2hlZFZhbHVlID0gdmFsdWVzW3dhdGNoZWRLZXldID8gdmFsdWVzW3dhdGNoZWRLZXldIDoge30sXG4gICAgICAgICAgICBpbnB1dE9mZnNldCA9IHZhbHVlLmFjdGlvbi5pbnB1dE9mZnNldDtcblxuICAgICAgICAvLyBGaXJzdCBsb29rIGF0IEFjdGlvbiBhbmQgY2hlY2sgdmFsdWUgaXNuJ3QgbGlua2luZyBpdHNlbGZcbiAgICAgICAgaWYgKHdhdGNoZWRWYWx1ZS5jdXJyZW50ICE9PSB1bmRlZmluZWQgJiYga2V5ICE9PSB3YXRjaGVkS2V5KSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHdhdGNoZWRWYWx1ZS5jdXJyZW50O1xuICAgICAgICBcbiAgICAgICAgLy8gVGhlbiBjaGVjayB2YWx1ZXMgaW4gSW5wdXRcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dE9mZnNldCAmJiBpbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eSh3YXRjaGVkS2V5KSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZS5vcmlnaW4gKyAoaW5wdXRPZmZzZXRbd2F0Y2hlZEtleV0gKiB2YWx1ZS5hbXApO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIG1hcEZyb20gYW5kIG1hcFRvIHByb3BlcnRpZXMsIHRyYW5zbGF0ZSB0aGUgbmV3IHZhbHVlXG4gICAgICAgIGlmICh2YWx1ZS5tYXBGcm9tICYmIHZhbHVlLm1hcFRvKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGZpbmRNYXBwZWRWYWx1ZShuZXdWYWx1ZSwgd2F0Y2hlZFZhbHVlLCB2YWx1ZSwgdmFsdWUubWFwRnJvbSwgdmFsdWUubWFwVG8pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXYXRjaDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL1dhdGNoLmpzXG4gKiovIiwiLypcbiAgICBUaGUgbG9vcFxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgVGltZXIgPSByZXF1aXJlKCcuL3RpbWVyLmpzJyksXG4gICAgdGljayA9IHJlcXVpcmUoJy4vdGljay5qcycpLFxuICAgIExvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudGltZXIgPSBuZXcgVGltZXIoKTtcbiAgICB9O1xuICAgIFxuTG9vcC5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLypcbiAgICAgICAgW2Jvb2xlYW5dOiBDdXJyZW50IHN0YXR1cyBvZiBhbmltYXRpb24gbG9vcFxuICAgICovXG4gICAgaXNSdW5uaW5nOiBmYWxzZSxcbiAgICBcbiAgICAvKlxuICAgICAgICBGaXJlIGFsbCBhY3RpdmUgcHJvY2Vzc2VzIG9uY2UgcGVyIGZyYW1lXG4gICAgKi9cbiAgICBmcmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZnJhbWVzdGFtcCA9IHNlbGYudGltZXIudXBkYXRlKCksIC8vIEN1cnJlbnRseSBqdXN0IG1lYXN1cmluZyBpbiBtcyAtIHdpbGwgbG9vayBpbnRvIGhpLXJlcyB0aW1lc3RhbXBzXG4gICAgICAgICAgICAgICAgaXNBY3RpdmUgPSBzZWxmLmNhbGxiYWNrLmNhbGwoc2VsZi5zY29wZSwgZnJhbWVzdGFtcCwgc2VsZi50aW1lci5nZXRFbGFwc2VkKCkpO1xuXG4gICAgICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmZyYW1lKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0YXJ0IGxvb3BcbiAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSdyZSBub3QgYWxyZWFkeSBydW5uaW5nIGEgbG9vcFxuICAgICAgICBpZiAoIXRoaXMuaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyLmNsb2NrKCk7XG4gICAgICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZyYW1lKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0b3AgdGhlIGxvb3BcbiAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFNldCB0aGUgY2FsbGJhY2sgdG8gcnVuIGV2ZXJ5IGZyYW1lXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW09iamVjdF06IEV4ZWN1dGlvbiBjb250ZXh0XG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBmaXJlXG4gICAgKi9cbiAgICBzZXRDYWxsYmFjazogZnVuY3Rpb24gKHNjb3BlLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBMb29wKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvY2Vzcy9sb29wLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscy5qcycpLFxuXG4gICAgbWF4RWxhcHNlZCA9IDMzLFxuICAgIFRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAxNi43O1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG5cblRpbWVyLnByb3RvdHlwZSA9IHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50O1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSBNYXRoLm1pbih0aGlzLmN1cnJlbnQgLSB0aGlzLnByZXYsIG1heEVsYXBzZWQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gICAgfSxcblxuICAgIGdldEVsYXBzZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxhcHNlZDtcbiAgICB9LFxuICAgIFxuICAgIGNsb2NrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHV0aWxzLmN1cnJlbnRUaW1lKCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaW1lcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm9jZXNzL3RpbWVyLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgIFxuICAgIEZvciBJRTgvOSBGbGluc3RvbmVzXG5cbiAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgXG4gICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgXG4gICAgTUlUIGxpY2Vuc2VcbiovXG52YXIgdGljayxcbiAgICBsYXN0VGltZSA9IDAsXG4gICAgaGFzV2luZG93ID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKTtcblxuaWYgKCFoYXNXaW5kb3cpIHtcbiAgICAvLyBMb2FkIHJBRiBzaGltXG4gICAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSksXG4gICAgICAgICAgICBpZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcblxuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9OyAgXG4gICAgXG59IGVsc2Uge1xuICAgIHRpY2sgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRpY2s7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvY2Vzcy90aWNrLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicG9wbW90aW9uLmdsb2JhbC5qcyJ9