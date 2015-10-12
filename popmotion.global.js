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
	    Popmotion = {
	
	    Actor: __webpack_require__(20),
	
	    Sequence: __webpack_require__(21),
	
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
	    select: __webpack_require__(31),
	
	    addValueType: function addValueType() {
	        valueTypeManager.extend.apply(valueTypeManager, arguments);
	        return this;
	    },
	
	    calc: __webpack_require__(32)
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
	
	var createDelimited = __webpack_require__(33),
	    getColorValues = __webpack_require__(34),
	    functionCreate = __webpack_require__(35),
	    defaultProps = __webpack_require__(36),
	    terms = __webpack_require__(37).hsl;
	
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
	
	var createDelimited = __webpack_require__(33),
	    getColorValues = __webpack_require__(34),
	    functionCreate = __webpack_require__(35),
	    defaultProps = __webpack_require__(36),
	    colorDefaults = defaultProps.color,
	    terms = __webpack_require__(37).colors;
	
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
	
	var utils = __webpack_require__(38),
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
	
	var createDelimited = __webpack_require__(33),
	    pxDefaults = __webpack_require__(5).defaultProps,
	    splitSpaceDelimited = __webpack_require__(39),
	    terms = __webpack_require__(37).positions;
	
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
	
	var terms = __webpack_require__(37).dimensions,
	    pxDefaults = __webpack_require__(5).defaultProps,
	    createDelimited = __webpack_require__(33),
	    splitSpaceDelimited = __webpack_require__(39);
	
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
	    utils = __webpack_require__(38),
	    pxDefaults = __webpack_require__(5).defaultProps,
	    terms = __webpack_require__(37).shadow,
	    splitSpaceDelimited = __webpack_require__(39),
	    createDelimited = __webpack_require__(33),
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
	
	var utils = __webpack_require__(38),
	    each = utils.each,
	    floatRegex = /(-)?(\d[\d\.]*)/g,
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
	var each = __webpack_require__(38).each;
	
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
	var build = __webpack_require__(41);
	var each = __webpack_require__(38).each;
	
	var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
	var numPrefixes = prefixes.length;
	var propertyNameCache = {};
	var testElement = document.createElement('div');
	
	/*
	    Test style property for prefixed version
	    
	    @param [string]: Style property
	    @return [string]: Cached property name
	*/
	var testPrefix = function testPrefix(key) {
	    if (propertyNameCache[key] === false) {
	        return false;
	    } else {
	        propertyNameCache[key] = false;
	    }
	
	    for (var i = 0; i < numPrefixes; i++) {
	        var prefix = prefixes[i],
	            prefixed = prefix === '' ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
	
	        if (prefixed in testElement.style) {
	            propertyNameCache[key] = prefixed;
	        }
	    }
	
	    return propertyNameCache[key];
	};
	
	var cssRole = new Role({
	    _map: __webpack_require__(42),
	    _typeMap: __webpack_require__(43),
	
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
	    build = __webpack_require__(44),
	    each = __webpack_require__(38).each;
	
	module.exports = new Role({
	    name: 'svg',
	
	    _map: __webpack_require__(42),
	    _typeMap: __webpack_require__(45),
	
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
	var each = __webpack_require__(38).each;
	
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
	    _map: __webpack_require__(40),
	
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

	'use strict';
	
	var each = __webpack_require__(38).each,
	    ValueTypeManager = function ValueTypeManager() {};
	
	ValueTypeManager.prototype = {
	    extend: function extend(name, mod) {
	        var _this = this;
	
	        var multiMods = typeof name == 'object',
	            mods = multiMods ? name : {};
	
	        // If we just have one module, coerce
	        if (!multiMods) {
	            mods[name] = mod;
	        }
	
	        each(mods, function (key, thisMod) {
	            _this[key] = thisMod;
	        });
	    },
	
	    defaultProps: function defaultProps(type, key) {
	        var valueType = this[type],
	            defaultProps = valueType.defaultProps ? valueType.defaultProps[key] || valueType.defaultProps : {};
	
	        return defaultProps;
	    },
	
	    test: function test(value) {
	        var type = false;
	
	        each(this, function (key, mod) {
	            if (mod.test && mod.test(value)) {
	                type = key;
	            }
	        });
	
	        return type;
	    }
	};
	
	module.exports = new ValueTypeManager();

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Process = __webpack_require__(24),
	    Queue = __webpack_require__(47),
	    utils = __webpack_require__(38),
	    select = __webpack_require__(46),
	    update = __webpack_require__(48),
	    valueOps = __webpack_require__(49),
	
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
	
	        // Check all active actions for any that can be removed
	        each(this.activeActions, function (id, action) {
	            var actionIsActive = false;
	
	            each(_this.values, function (key, value) {
	                actionIsActive = value.action === action ? true : actionIsActive;
	            });
	
	            if (!actionIsActive) {
	                _this.unbindAction(id);
	            }
	        });
	
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
	         @param [Action || number]
	        @param [Input || event] (optional)
	        @param [boolean] (optional): defined `true` if we surpress making new queue
	        @returns [Controls]
	    */
	
	    Actor.prototype.start = function start(toSet, input) {
	        var actionExists = utils.isNum(toSet),
	            action = actionExists ? this.getAction(toSet) : toSet.getPlayable(),
	            opts = action.getSet(),
	            surpressQueueClear = arguments[arguments.length - 1] === false;
	
	        opts.action = action;
	
	        this.set(opts);
	
	        if (input) {
	            action.bindInput(input);
	        }
	
	        if (!surpressQueueClear) {
	            this.queue.clear();
	        }
	
	        // Fire all Role onStarts if not already active
	        if (!this.isActive) {
	            var numRoles = this.roles.length;
	            for (var i = 0; i < numRoles; i++) {
	                var role = this.roles[i];
	                if (role.start) {
	                    role.start.call(this, this);
	                }
	            }
	        }
	
	        // Fire new action onStart
	        if (!action.isActive && action.onStart) {
	            action.onStart.call(this, this, action);
	        }
	
	        this.activate();
	
	        if (!actionExists) {
	            var Controls = action.getControls();
	            return new Controls(this, action, true);
	        }
	    };
	
	    /*
	        Pause all active Actions
	         @param [int] (optional)
	        @returns [Actor]
	    */
	
	    Actor.prototype.pause = function pause() {
	        this.isActive = false;
	        each(this.activeActions, function (id, action) {
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
	        each(this.activeActions, function (id, action) {
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
	            if (utils.isFunc(next[0])) {
	                next[0]();
	                this.next();
	                // Or this is an action
	            } else {
	                next.push(false);
	                this.start.apply(this, next);
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
	                role.init.call(_this2, _this2);
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
	        if (this.activeActions.hasOwnProperty(id)) {
	            this.numActive--;
	            delete this.activeActions[id];
	        }
	
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

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Actor = __webpack_require__(20);
	var Tween = __webpack_require__(28);
	var calcRelative = __webpack_require__(32).relativeValue;
	var utils = __webpack_require__(38);
	var isFunc = utils.isFunc;
	var isString = utils.isString;
	
	var timeline = new Tween({
	    values: {
	        playhead: {
	            ease: 'linear',
	            current: 0,
	            to: 0
	        }
	    }
	});
	
	function checkActions(_ref, sequence) {
	    var playhead = _ref.playhead;
	
	    sequence.check.forEach(function (toCheck, i) {
	        if (playhead >= toCheck.timestamp) {
	            toCheck.callback();
	            sequence.check.splice(i, -1);
	        }
	    });
	};
	
	var Sequence = (function (_Actor) {
	    _inherits(Sequence, _Actor);
	
	    function Sequence() {
	        _classCallCheck(this, Sequence);
	
	        _Actor.call(this, {
	            labels: {},
	            check: [],
	            sequence: [],
	            currentTimestamp: 0,
	            onUpdate: checkActions
	        });
	    }
	
	    Sequence.prototype.add = function add(actor, action) {
	        var isCallback = isFunc(actor),
	            callback = isCallback ? actor : function () {
	            actor.start(action);
	        },
	            timestamp = arguments[arguments.length - 1];
	
	        timestamp = utils.isString(timestamp) ? calcRelative(this.currentTimestamp, timestamp) : timestamp;
	
	        this.sequence.push({
	            timestamp: timestamp || this.currentTimestamp,
	            callback: callback
	        });
	
	        return this;
	    };
	
	    Sequence.prototype.start = function start() {
	        _Actor.prototype.start.call(this, timeline);
	        this.currentTimestamp = 0;
	        return this;
	    };
	
	    Sequence.prototype.onStart = function onStart() {
	        this.check = this.sequence.slice();
	    };
	
	    Sequence.prototype.label = function label(name, timestamp) {
	        this.labels[name] = timestamp;
	    };
	
	    return Sequence;
	})(Actor);
	
	module.exports = Sequence;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    Input controller
	*/
	'use strict';
	
	var calc = __webpack_require__(32),
	    utils = __webpack_require__(38),
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
	
	var Actor = __webpack_require__(20),
	    Tween = __webpack_require__(28),
	    utils = __webpack_require__(38);
	
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
	        for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
	            args[_key4 - 2] = arguments[_key4];
	        }
	
	        var tempMembers = utils.copyArray(this.members),
	            numMembers = tempMembers.length,
	            propsIsInterval = utils.isNum(props),
	            interval = propsIsInterval ? props : props.interval,
	            staggerProps = {},
	            i = -1,
	            callback = generateCallback.apply(undefined, [method].concat(args));
	
	        staggerProps.values = {
	            onComplete: propsIsInterval ? undefined : props.onComplete,
	            i: {
	                current: -0.6,
	                duration: interval * numMembers,
	                ease: propsIsInterval ? DEFAULT_STAGGER_EASE : props.ease || DEFAULT_STAGGER_EASE,
	                round: true,
	                to: numMembers - 0.6
	            }
	        };
	
	        staggerProps.onUpdate = function (output) {
	            var newIndex = output.i,
	                gapIndex = i + 1;
	
	            // If our new index is only one more than the previous index, fire immedietly
	            if (newIndex === i + 1) {
	                callback(tempMembers[gapIndex], gapIndex);
	
	                // Or loop through the distance to fire all indecies. Increase delay.
	            } else {
	                for (; gapIndex <= newIndex; gapIndex++) {
	                    callback(tempMembers[gapIndex], gapIndex);
	                }
	            }
	
	            i = newIndex;
	        };
	
	        this._stagger.start(new Tween(staggerProps));
	
	        return this;
	    };
	
	    /*
	        Array manipulation
	    */
	
	    Iterator.prototype.reverse = function reverse() {
	        this.members.reverse();
	        return this;
	    };
	
	    return Iterator;
	})();
	
	module.exports = Iterator;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var manager = __webpack_require__(57),
	
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
	
	var utils = __webpack_require__(38);
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
	
	var Bezier = __webpack_require__(58),
	
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
	
	var calc = __webpack_require__(32),
	    utils = __webpack_require__(38),
	    each = utils.each,
	    Controls = __webpack_require__(52);
	
	var DEFAULT_PROP = 'current';
	var PRIVATE = ['onStart', 'onFrame', 'onUpdate', 'onComplete'];
	
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
	
	    Action.prototype.getSet = function getSet() {
	        var _this2 = this;
	
	        var set = { values: this.values };
	
	        each(this, function (key, prop) {
	            if (_this2.hasOwnProperty(key) && PRIVATE.indexOf(key) === -1) {
	                set[key] = prop;
	            }
	        });
	
	        return set;
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
	    calc = __webpack_require__(32),
	    utils = __webpack_require__(38),
	    each = utils.each,
	    presetEasing = __webpack_require__(55),
	    valueOps = __webpack_require__(49),
	    TweenControls = __webpack_require__(56),
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
	            var value = actorValues[key];
	
	            if (value.children) {
	                each(value.children, function (childKey) {
	                    valueOps.flip(actorValues[key + childKey]);
	                });
	            }
	
	            valueOps.flip(value);
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
	    calc = __webpack_require__(32),
	    utils = __webpack_require__(38),
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
	
	    Simulate.prototype.onStart = function onStart() {
	        this.started = utils.currentTime();
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
	            newVelocity = simulation ? simulation(value, timeSinceLastFrame, this.started) : 0;
	
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
	    Pointer = __webpack_require__(53),
	    calc = __webpack_require__(32);
	
	function smooth(newValue, oldValue, duration, smoothing) {
	    return oldValue + duration * (newValue - oldValue) / smoothing;
	}
	
	var Track = (function (_Action) {
	    _inherits(Track, _Action);
	
	    function Track() {
	        _classCallCheck(this, Track);
	
	        _Action.apply(this, arguments);
	    }
	
	    /*
	        Update input offset
	    */
	
	    Track.prototype.onFrameStart = function onFrameStart(actor, frameDuration, framestamp) {
	        actor.state.input = this.input.onFrame(framestamp);
	        this.inputOffset = calc.offset(this.inputOrigin, this.input.current);
	        this.frameDuration = frameDuration;
	    };
	
	    /*
	        Move Value relative to Input movement
	        
	        @param [Value]: Current value
	        @param [string]: Key of current value
	        @return [number]: Calculated value
	    */
	
	    Track.prototype.process = function process(actor, value, key) {
	        var newValue = value.current,
	            unmapped = value.unmapped !== undefined ? value.unmapped : value.current;
	
	        if (this.inputOffset.hasOwnProperty(key)) {
	            newValue = value.direct ? this.input.current[key] : value.origin + this.inputOffset[key] * value.amp;
	            newValue = value.smooth ? smooth(newValue, unmapped, this.frameDuration, value.smooth) : newValue;
	        }
	
	        return newValue;
	    };
	
	    /*
	        Has this Action ended? 
	        
	        @return [boolean]: False to make user manually finish .track()
	    */
	
	    Track.prototype.hasEnded = function hasEnded() {
	        return false;
	    };
	
	    Track.prototype.bindInput = function bindInput(input) {
	        this.input = !input.current ? new Pointer(input) : input;
	        this.inputOrigin = this.input.get();
	    };
	
	    Track.prototype.getDefaultValue = function getDefaultValue() {
	        return {
	            amp: 1,
	            direct: false,
	            smooth: 0
	        };
	    };
	
	    return Track;
	})(Action);
	
	module.exports = Track;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Actor = __webpack_require__(20),
	    Iterator = __webpack_require__(23),
	    selectDom = __webpack_require__(46);
	
	var SAVE_PROP = '__pm_actor_';
	
	module.exports = function (selector) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var dom = selectDom(selector),
	        actors = [];
	
	    dom.forEach(function (element) {
	        var actor = element[SAVE_PROP];
	
	        if (!actor) {
	            opts.element = element;
	            actor = element[SAVE_PROP] = new Actor(opts);
	        }
	
	        actors.push(actor);
	    });
	
	    return actors.length > 1 ? new Iterator(actors) : actors[0];
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
	
	var utils = __webpack_require__(38),
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
	    random: function random() {
	        var min = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	        var max = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
	
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
/* 33 */
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var splitCommaDelimited = __webpack_require__(59),
	    functionBreak = __webpack_require__(60);
	
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (value, prefix) {
	    return prefix + '(' + value + ')';
	};

/***/ },
/* 36 */
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
/* 37 */
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
/* 38 */
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
	            newArray[i] = base[i];
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (value) {
	    return typeof value === 'string' ? value.split(' ') : [value];
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var STROKE = 'stroke';
	
	module.exports = {
	    opacity: STROKE + '-opacity',
	    width: STROKE + '-width',
	    miterlimit: STROKE + '-miterlimit'
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var each = __webpack_require__(38).each,
	    transformDictionary = __webpack_require__(61),
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
	            css.transform = transform;
	        }
	
	        cache.transform = transform;
	    }
	
	    return css;
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var TRANSLATE = 'translate';
	
	module.exports = {
	    x: TRANSLATE + 'X',
	    y: TRANSLATE + 'Y',
	    z: TRANSLATE + 'Z'
	};

/***/ },
/* 43 */
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var each = __webpack_require__(38).each,
	    transformDictionary = __webpack_require__(61),
	    transformProps = transformDictionary.props,
	    zeroNotZero = 0.0001;
	
	module.exports = function (output, origin) {
	    var props = {},
	        hasTransform = false,
	        scale = output.scale !== undefined ? output.scale || zeroNotZero : output.scaleX || 1,
	        scaleY = output.scaleY !== undefined ? output.scaleY || zeroNotZero : scale || 1,
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
/* 45 */
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/*
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
/* 47 */
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
	        this.queue.push([].slice.call(arguments));
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var valueTypeManager = __webpack_require__(19),
	    calc = __webpack_require__(32),
	    utils = __webpack_require__(38),
	    each = utils.each,
	    Action = __webpack_require__(27),
	    defaultAction = new Action(),
	    Watch = __webpack_require__(62),
	    watcher = new Watch(),
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
	checkAllActionsHaveEnded = function checkAllActionsHaveEnded(actor, hasChanged) {
	    var hasEnded = true,
	        values = actor.state.values;
	
	    each(actor.activeActions, function (key, action) {
	        // Return if action has been deleted elsewhere
	        if (!action) {
	            return;
	        }
	
	        if (action.onFrame) {
	            action.onFrame.call(actor, values, actor, action);
	        }
	
	        if (action.onUpdate && hasChanged) {
	            action.onUpdate.call(actor, values, actor, action);
	        }
	
	        if (action.hasEnded && action.hasEnded(actor, hasChanged) === false) {
	            hasEnded = false;
	        } else {
	            if (action.onComplete) {
	                action.onComplete.call(actor, actor, action);
	            }
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
	        hasChanged = false;
	
	    // Update values
	    for (var i = 0; i < numActiveValues; i++) {
	        // Get value and key
	        var key = this.activeValues[i];
	        var value = this.values[key];
	        var action = !value.action || value.action && !value.action.isActive ? defaultAction : value.action;
	
	        // Fire action onFrameStart if not already fired
	        if (action.onFrameStart && action.lastUpdate !== framestamp) {
	            action.onFrameStart(this, frameDuration, framestamp);
	            action.lastUpdate = framestamp;
	        }
	
	        // Calculate new value
	        var updatedValue = utils.isString(value.watch) ? watcher.process(this, value) : action.process(this, value, key, frameDuration);
	
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
	        if (value.current !== updatedValue || this.firstFrame) {
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
	            role.frame.call(this, mappedValues, this);
	        }
	
	        if (role.update && hasChanged) {
	            role.update.call(this, mappedValues, this);
	        }
	    }
	
	    // Reset hasChanged before further Actions might affect this
	    this.hasChanged = false;
	
	    if (this.isActive) {
	        this.isActive = false;
	
	        if (checkAllActionsHaveEnded(this, hasChanged)) {
	            // Fire `complete` callbacks
	            for (var i = 0; i < numRoles; i++) {
	                var role = this.roles[i];
	                if (role.complete) {
	                    role.complete.call(this, this);
	                }
	            }
	
	            if (!this.isActive) {
	                this.next();
	            }
	        } else {
	            this.isActive = true;
	            this.firstFrame = false;
	        }
	    }
	
	    this.framestamp = framestamp;
	};
	
	module.exports = update;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var valueTypesManager = __webpack_require__(19),
	    calc = __webpack_require__(32),
	    utils = __webpack_require__(38),
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
	
	            if (!utils.isString(valueProp)) {
	                return 'continue';
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
	        var _ret = _loop();
	
	        if (_ret === 'continue') continue;
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
	        newValue.watch = utils.isString(newValue.watch) ? newValue.watch : undefined;
	
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
	        existing = existing || {};
	        defaultProp = defaultProp || 'current';
	        var preprocessed = preprocess(existing, incoming, scope, defaultProp);
	
	        each(preprocessed, function (key, value) {
	            var newValue = existing[key] || utils.copy(defaultValue),
	                hasChildren = value.children !== undefined,
	                defaultActionValue = inherit.action ? inherit.action.getDefaultValue() : {};
	
	            value.action = inherit.action;
	
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
	    init: function init(actor) {
	        if (actor.init) {
	            actor.init(actor);
	        }
	    },
	
	    start: function start(actor) {
	        if (actor.onStart) {
	            actor.onStart(actor);
	        }
	    },
	
	    frame: function frame(state, actor) {
	        if (actor.onFrame) {
	            actor.onFrame(state, actor);
	        }
	    },
	
	    update: function update(state, actor) {
	        if (actor.onUpdate) {
	            actor.onUpdate(state, actor);
	        }
	    },
	
	    complete: function complete(actor) {
	        if (actor.onComplete) {
	            actor.onComplete(actor);
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
	        this.actor.start(this.id, input);
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var calc = __webpack_require__(32),
	    utils = __webpack_require__(38),
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
/* 56 */
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var theLoop = __webpack_require__(63),
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
/* 58 */
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (value) {
	    return typeof value === 'string' ? value.split(/,\s*/) : [value];
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (value) {
	    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var positionTerms = __webpack_require__(37).positions,
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(27),
	    calc = __webpack_require__(32),
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
	            inputOffset = value.action ? value.action.inputOffset : false;
	
	        // First look at Action and check value isn't linking itself
	        if (watchedValue.current !== undefined && key !== watchedKey) {
	            newValue = watchedValue.current;
	
	            // Then check values in Input
	        } else if (inputOffset && inputOffset.hasOwnProperty(watchedKey)) {
	            newValue = value.action.process(actor, value, watchedKey);
	        }
	
	        // If we have mapFrom and mapTo properties, translate the new value
	        if (value.mapFrom && value.mapTo) {
	            value.unmapped = newValue;
	            newValue = findMappedValue(newValue, watchedValue, value, value.mapFrom, value.mapTo);
	        }
	
	        return newValue;
	    };
	
	    return Watch;
	})(Action);
	
	module.exports = Watch;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    The loop
	*/
	'use strict';
	
	var Timer = __webpack_require__(64),
	    tick = __webpack_require__(65),
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var utils = __webpack_require__(38),
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
/* 65 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGQyZGZiZmY4NmUyOTcwMzYwYWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2FkL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9oc2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcG9zaXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9kaW1lbnNpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9hdHRyL2F0dHJSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvY3NzUm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvc3ZnL3N2Z1JvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci9BY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VxdWVuY2UvU2VxdWVuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L0lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9pdGVyYXRvci9JdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9Qcm9jZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9Sb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuL0Vhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvU2ltdWxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9zZWxlY3QtYWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9jYWxjLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2dldC1jb2xvci12YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL3NwbGl0LXNwYWNlLWRlbGltaXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvcGF0aC9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2Nzcy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvY3NzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvY3NzL3R5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9zdmcvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL3N2Zy90eXBlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3NlbGVjdC1kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9RdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3IvdXBkYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci92YWx1ZS1vcGVyYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9kZWZhdWx0Um9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL0hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xzL0NvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9Qb2ludGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3NpbXVsYXRlL3NpbXVsYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuL3ByZXNldC1lYXNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdHdlZW4vVHdlZW5Db250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuL0Jlemllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL3NwbGl0LWNvbW1hLWRlbGltaXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWJyZWFrLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvdHJhbnNmb3JtLWRpY3Rpb25hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvV2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvbG9vcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy90aW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy90aWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDOzs7Ozs7Ozs7QUN0Q0EsS0FBSSxTQUFTLEdBQUcsbUJBQU8sQ0FBQyxDQUFhLENBQUM7S0FDbEMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7O0FBRXRCLE9BQU0sQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7Ozs7OztBQU16QyxPQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsR0FBRyxZQUFZO0FBQy9CLFdBQU0sQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO0VBQ3JCLEM7Ozs7OztBQ1hELGFBQVksQ0FBQzs7QUFFYixLQUFJLFNBQVMsR0FBRyxtQkFBTyxDQUFDLENBQWMsQ0FBQyxDQUFDOzs7OztBQUt4QyxVQUFTLENBQUMsWUFBWSxDQUFDO0FBQ25CLFVBQUssRUFBRSxtQkFBTyxDQUFDLENBQXNCLENBQUM7QUFDdEMsVUFBSyxFQUFFLG1CQUFPLENBQUMsQ0FBc0IsQ0FBQztBQUN0QyxPQUFFLEVBQUUsbUJBQU8sQ0FBQyxDQUFtQixDQUFDO0FBQ2hDLFFBQUcsRUFBRSxtQkFBTyxDQUFDLENBQW9CLENBQUM7QUFDbEMsUUFBRyxFQUFFLG1CQUFPLENBQUMsQ0FBb0IsQ0FBQztBQUNsQyxRQUFHLEVBQUUsbUJBQU8sQ0FBQyxDQUFvQixDQUFDO0FBQ2xDLFVBQUssRUFBRSxt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LElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTthQUMvQixVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQzthQUNwRCxFQUFFLEdBQUcsVUFBVSxDQUFDLFlBQVk7QUFDeEIscUJBQVEsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLENBQUM7VUFDbkMsRUFBRSxVQUFVLENBQUMsQ0FBQzs7QUFFbkIsaUJBQVEsR0FBRyxRQUFRLEdBQUcsVUFBVSxDQUFDOztBQUVqQyxnQkFBTyxFQUFFLENBQUM7TUFDYixDQUFDO0VBRUwsTUFBTTtBQUNILFNBQUksR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUM7RUFDdkM7O0FBRUQsT0FBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLEMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0ZDJkZmJmZjg2ZTI5NzAzNjBhZFxuICoqLyIsInZhciBwb3Btb3Rpb24gPSByZXF1aXJlKCcuL21vZHVsZS5qcycpLFxuICAgIFVJcmVmID0gd2luZG93LnVpO1xuXG53aW5kb3cudWkgPSB3aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuXG4vKlxuICAgIElmIG5vQ29uZmxpY3QgaXMgcnVuLCB0aGUgb3JpZ2luYWwgcmVmZXJlbmNlIHRvIHdpbmRvdy5VSSBpc1xuICAgIHJlc3RvcmVkIGFuZCBQb3Btb3Rpb24gaXMgbG9hZGVkIHRvIHdpbmRvdy5Qb3Btb3Rpb25cbiovXG53aW5kb3cudWkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cudWkgPSBVSXJlZjtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbG9hZC9nbG9iYWwuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHBvcG1vdGlvbiA9IHJlcXVpcmUoJy4uL3BvcG1vdGlvbicpO1xuXG4vKlxuICAgIEFkZCBvcHRpb25hbCBjdXN0b20gdmFsdWUgdHlwZSBzdXBwb3J0XG4qL1xucG9wbW90aW9uLmFkZFZhbHVlVHlwZSh7XG4gICAgYWxwaGE6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2FscGhhJyksXG4gICAgYW5nbGU6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2FuZ2xlJyksXG4gICAgcHg6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3B4JyksXG4gICAgaHNsOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9oc2wnKSxcbiAgICByZ2I6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3JnYicpLFxuICAgIGhleDogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvaGV4JyksXG4gICAgY29sb3I6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyksXG4gICAgcG9zaXRpb25zOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9wb3NpdGlvbnMnKSxcbiAgICBkaW1lbnNpb25zOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9kaW1lbnNpb25zJyksXG4gICAgc2NhbGU6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3NjYWxlJyksXG4gICAgc2hhZG93OiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9zaGFkb3cnKSxcbiAgICBjb21wbGV4OiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9jb21wbGV4Jylcbn0pO1xuXG4vKlxuICAgIFByZWRlZmluZWQgcm9sZXNcbiovXG5cbnBvcG1vdGlvbi5hdHRyID0gcmVxdWlyZSgnLi4vcm9sZXMvYXR0ci9hdHRyUm9sZScpO1xucG9wbW90aW9uLmNzcyA9IHJlcXVpcmUoJy4uL3JvbGVzL2Nzcy9jc3NSb2xlJyk7XG5wb3Btb3Rpb24uc3ZnID0gcmVxdWlyZSgnLi4vcm9sZXMvc3ZnL3N2Z1JvbGUnKTtcbnBvcG1vdGlvbi5kcmF3UGF0aCA9IHJlcXVpcmUoJy4uL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcG9wbW90aW9uO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xvYWQvbW9kdWxlLmpzXG4gKiovIiwidmFyIHZhbHVlVHlwZU1hbmFnZXIgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL21hbmFnZXInKSxcblxuICAgIFBvcG1vdGlvbiA9IHtcblxuICAgICAgICBBY3RvcjogcmVxdWlyZSgnLi9hY3Rvci9BY3RvcicpLFxuXG4gICAgICAgIFNlcXVlbmNlOiByZXF1aXJlKCcuL3NlcXVlbmNlL1NlcXVlbmNlJyksXG5cbiAgICAgICAgSW5wdXQ6IHJlcXVpcmUoJy4vaW5wdXQvSW5wdXQnKSxcblxuICAgICAgICBJdGVyYXRvcjogcmVxdWlyZSgnLi9pdGVyYXRvci9JdGVyYXRvcicpLFxuXG4gICAgICAgIFByb2Nlc3M6IHJlcXVpcmUoJy4vcHJvY2Vzcy9Qcm9jZXNzJyksXG5cbiAgICAgICAgRWFzaW5nOiByZXF1aXJlKCcuL2FjdGlvbnMvdHdlZW4vRWFzaW5nJyksXG5cbiAgICAgICAgUm9sZTogcmVxdWlyZSgnLi9yb2xlcy9Sb2xlJyksXG5cbiAgICAgICAgQWN0aW9uOiByZXF1aXJlKCcuL2FjdGlvbnMvQWN0aW9uJyksXG4gICAgICAgIFR3ZWVuOiByZXF1aXJlKCcuL2FjdGlvbnMvVHdlZW4nKSxcbiAgICAgICAgU2ltdWxhdGU6IHJlcXVpcmUoJy4vYWN0aW9ucy9TaW11bGF0ZScpLFxuICAgICAgICBUcmFjazogcmVxdWlyZSgnLi9hY3Rpb25zL1RyYWNrJyksXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIENyZWF0ZSBhbiBJdGVyYXRvciBvZiBBY3RvcnMgd2l0aCBzZWxlY3RlZCBkb20gZWxlbWVudHNcbiAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0OiByZXF1aXJlKCcuL2luYy9zZWxlY3QtYWN0b3InKSxcblxuICAgICAgICBhZGRWYWx1ZVR5cGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhbHVlVHlwZU1hbmFnZXIuZXh0ZW5kLmFwcGx5KHZhbHVlVHlwZU1hbmFnZXIsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBjYWxjOiByZXF1aXJlKCcuL2luYy9jYWxjJylcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcG1vdGlvbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDFcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdkZWcnXG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAncHgnXG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9weC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIGdldENvbG9yVmFsdWVzID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZ2V0LWNvbG9yLXZhbHVlcycpLFxuICAgIGZ1bmN0aW9uQ3JlYXRlID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlJyksXG4gICAgZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyksXG4gICAgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5oc2w7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIEh1ZToge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAzNjBcbiAgICAgICAgfSxcbiAgICAgICAgU2F0dXJhdGlvbjogZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIExpZ2h0bmVzczogZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIEFscGhhOiBkZWZhdWx0UHJvcHMub3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdoc2wnKSA+IC0xKTtcbiAgICB9LFxuICAgIFxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGdldENvbG9yVmFsdWVzKHZhbHVlLCB0ZXJtcyk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uQ3JlYXRlKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnLCAnLCAyKSwgJ2hzbGEnKTtcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hzbC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIGdldENvbG9yVmFsdWVzID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZ2V0LWNvbG9yLXZhbHVlcycpLFxuICAgIGZ1bmN0aW9uQ3JlYXRlID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlJyksXG4gICAgZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyksXG4gICAgY29sb3JEZWZhdWx0cyA9IGRlZmF1bHRQcm9wcy5jb2xvcixcbiAgICB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLmNvbG9ycztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgUmVkOiBjb2xvckRlZmF1bHRzLFxuICAgICAgICBHcmVlbjogY29sb3JEZWZhdWx0cyxcbiAgICAgICAgQmx1ZTogY29sb3JEZWZhdWx0cyxcbiAgICAgICAgQWxwaGE6IGRlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ3JnYicpID4gLTEpO1xuICAgIH0sXG4gICAgXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZ2V0Q29sb3JWYWx1ZXModmFsdWUsIHRlcm1zKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb25DcmVhdGUoY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgdGVybXMsICcsICcsIDIpLCAncmdiYScpO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciByZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogcmdiLmRlZmF1bHRQcm9wcyxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJyMnKSA+IC0xKTtcbiAgICB9LFxuICAgIFxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHIsIGcsIGI7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMik7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDMsIDIpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cig1LCAyKTtcblxuICAgICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAxKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDMsIDEpO1xuICAgICAgICAgICAgciArPSByO1xuICAgICAgICAgICAgZyArPSBnO1xuICAgICAgICAgICAgYiArPSBiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgICAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgICAgICAgIEFscGhhOiAxXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIHJnYi5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oZXguanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgcmdiID0gcmVxdWlyZSgnLi9yZ2InKSxcbiAgICBoc2wgPSByZXF1aXJlKCcuL2hzbCcpLFxuICAgIGhleCA9IHJlcXVpcmUoJy4vaGV4JyksXG4gICAgc3VwcG9ydGVkID0gW3JnYiwgaHNsLCBoZXhdLFxuICAgIG51bVN1cHBvcnRlZCA9IDMsXG5cbiAgICBydW5TdXBwb3J0ZWQgPSBmdW5jdGlvbiAobWV0aG9kLCB2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVN1cHBvcnRlZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3VwcG9ydGVkW2ldLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRlZFtpXVttZXRob2RdKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiB1dGlscy5tZXJnZShyZ2IuZGVmYXVsdFByb3BzLCBoc2wuZGVmYXVsdFByb3BzKSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gcmdiLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2wudGVzdCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHJ1blN1cHBvcnRlZCgnc3BsaXQnLCB2YWx1ZSk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZXMuUmVkICE9PSB1bmRlZmluZWQpID8gcmdiLmNvbWJpbmUodmFsdWVzKSA6IGhzbC5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIHB4RGVmYXVsdHMgPSByZXF1aXJlKCcuL3B4JykuZGVmYXVsdFByb3BzLFxuICAgIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQnKSxcbiAgICB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLnBvc2l0aW9ucztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHB4RGVmYXVsdHMsXG4gICAgICAgIFxuICAgIC8qXG4gICAgICAgIFNwbGl0IHBvc2l0aW9ucyBpbiBmb3JtYXQgXCJYIFkgWlwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFBvc2l0aW9uIHZhbHVlc1xuICAgICAgICAgICAgXCIyMCUgMzAlIDBcIiAtPiB7MjAlLCAzMCUsIDB9XG4gICAgICAgICAgICBcIjIwJSAzMCVcIiAtPiB7MjAlLCAzMCV9XG4gICAgICAgICAgICBcIjIwJVwiIC0+IHsyMCUsIDIwJX1cbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHBvc2l0aW9ucyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpLFxuICAgICAgICAgICAgbnVtUG9zaXRpb25zID0gcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICAgIHNwbGl0VmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgWDogcG9zaXRpb25zWzBdLFxuICAgICAgICAgICAgICAgIFk6IChudW1Qb3NpdGlvbnMgPiAxKSA/IHBvc2l0aW9uc1sxXSA6IHBvc2l0aW9uc1swXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICBpZiAobnVtUG9zaXRpb25zID4gMikge1xuICAgICAgICAgICAgc3BsaXRWYWx1ZS5aID0gcG9zaXRpb25zWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnICcpO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcG9zaXRpb25zLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLmRpbWVuc2lvbnMsXG4gICAgcHhEZWZhdWx0cyA9IHJlcXVpcmUoJy4vcHgnKS5kZWZhdWx0UHJvcHMsXG4gICAgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHB4RGVmYXVsdHMsXG4gICAgXG4gICAgLypcbiAgICAgICAgU3BsaXQgZGltZW5zaW9ucyBpbiBmb3JtYXQgXCJUb3AgUmlnaHQgQm90dG9tIExlZnRcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBEaW1lbnNpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4IDQwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgNDBweH1cbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweCAwXCIgLT4gezIwcHgsIDAsIDIwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHhcIiAtPiB7MjBweCwgMjBweCwgMjBweCwgMjBweH1cbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIFQvUi9CL0wgbWV0cmljc1xuICAgICovXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZGltZW5zaW9ucyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpLFxuICAgICAgICAgICAgbnVtRGltZW5zaW9ucyA9IGRpbWVuc2lvbnMubGVuZ3RoLFxuICAgICAgICAgICAganVtcEJhY2sgPSAobnVtRGltZW5zaW9ucyAhPT0gMSkgPyAyIDogMSxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgaiA9IDAsXG4gICAgICAgICAgICBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgZm9yICg7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbdGVybXNbaV1dID0gZGltZW5zaW9uc1tqXTtcblxuICAgICAgICAgICAgLy8gSnVtcCBiYWNrICh0byBzdGFydCkgY291bnRlciBpZiB3ZSd2ZSByZWFjaGVkIHRoZSBlbmQgb2Ygb3VyIHZhbHVlc1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgaiA9IChqID09PSBudW1EaW1lbnNpb25zKSA/IGogLSBqdW1wQmFjayA6IGo7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgdGVybXMsICcgJyk7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9kaW1lbnNpb25zLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGluaXQ6IDFcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NjYWxlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjb2xvciA9IHJlcXVpcmUoJy4vY29sb3InKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIHB4RGVmYXVsdHMgPSByZXF1aXJlKCcuL3B4JykuZGVmYXVsdFByb3BzLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jykuc2hhZG93LFxuICAgIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQnKSxcbiAgICBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgc2hhZG93VGVybXMgPSB0ZXJtcy5zbGljZSgwLDQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogdXRpbHMubWVyZ2UoY29sb3IuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIFg6IHB4RGVmYXVsdHMsXG4gICAgICAgIFk6IHB4RGVmYXVsdHMsXG4gICAgICAgIFJhZGl1czogcHhEZWZhdWx0cyxcbiAgICAgICAgU3ByZWFkOiBweERlZmF1bHRzXG4gICAgfSksXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBzaGFkb3cgcHJvcGVydGllcyBcIlggWSBSYWRpdXMgU3ByZWFkIENvbG9yXCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogU2hhZG93IHByb3BlcnR5XG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGJpdHMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKSxcbiAgICAgICAgICAgIG51bUJpdHMgPSBiaXRzLmxlbmd0aCxcbiAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IGZhbHNlLFxuICAgICAgICAgICAgY29sb3JQcm9wID0gJycsXG4gICAgICAgICAgICB0aGlzQml0LFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgZm9yICg7IGkgPCBudW1CaXRzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXNCaXQgPSBiaXRzW2ldO1xuXG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBjb2xvciBwcm9wZXJ0eSwgYXBwZW5kIHRvIGNvbG9yIHN0cmluZ1xuICAgICAgICAgICAgaWYgKGhhc1JlYWNoZWRDb2xvciB8fCBjb2xvci50ZXN0KHRoaXNCaXQpKSB7XG4gICAgICAgICAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb2xvclByb3AgKz0gdGhpc0JpdDtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlW3Rlcm1zW2ldXSA9IHRoaXNCaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB1dGlscy5tZXJnZShzcGxpdFZhbHVlLCBjb2xvci5zcGxpdChjb2xvclByb3ApKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgc2hhZG93VGVybXMsICcgJykgKyBjb2xvci5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanNcbiAqKi8iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaCxcbiAgICBmbG9hdFJlZ2V4ID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nLFxuXG4gICAgZ2VuZXJhdGVUb2tlbiA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuICckeycgKyBrZXkgKyAnfSc7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdmFsdWUubWF0Y2goZmxvYXRSZWdleCk7XG4gICAgICAgIHJldHVybiAodXRpbHMuaXNBcnJheShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDEpO1xuICAgIH0sXG5cbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoZmxvYXRSZWdleCwgKCkgPT4gZ2VuZXJhdGVUb2tlbihjb3VudGVyKyspKTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9LFxuICAgICAgICAgICAgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKGZsb2F0UmVnZXgpLFxuICAgICAgICAgICAgbnVtTWF0Y2hlcyA9IG1hdGNoZXMubGVuZ3RoO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1NYXRjaGVzOyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbaV0gPSBtYXRjaGVzW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMsIHRlbXBsYXRlKSB7XG4gICAgICAgIHZhciBjb21iaW5lZFZhbHVlID0gdGVtcGxhdGU7XG5cbiAgICAgICAgZWFjaCh2YWx1ZXMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb21iaW5lZFZhbHVlID0gY29tYmluZWRWYWx1ZS5yZXBsYWNlKGdlbmVyYXRlVG9rZW4oa2V5KSwgdmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY29tYmluZWRWYWx1ZTtcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJvbGUgPSByZXF1aXJlKCcuLi9Sb2xlJyk7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2g7XG5cbnZhciBhdHRyUm9sZSA9IG5ldyBSb2xlKHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzO1xuXG4gICAgICAgIGVhY2goc3RhdGUsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBhdHRyUm9sZS5zZXQoYWN0b3IuZWxlbWVudCwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgfSxcblxuICAgIHNldDogZnVuY3Rpb24gKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXR0clJvbGU7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL2F0dHIvYXR0clJvbGUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJvbGUgPSByZXF1aXJlKCcuLi9Sb2xlJyk7XG52YXIgYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2g7XG5cbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywnTW96JywnTycsJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHByb3BlcnR5TmFtZUNhY2hlID0ge307XG52YXIgdGVzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgXG4vKlxuICAgIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gICAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG52YXIgdGVzdFByZWZpeCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKHByb3BlcnR5TmFtZUNhY2hlW2tleV0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWVDYWNoZVtrZXldID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXSxcbiAgICAgICAgICAgICAgICBwcmVmaXhlZCA9IChwcmVmaXggPT09ICcnKSA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgICAgICAgICAgaWYgKHByZWZpeGVkIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lQ2FjaGVba2V5XSA9IHByZWZpeGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcHJvcGVydHlOYW1lQ2FjaGVba2V5XTtcbiAgICB9O1xuXG52YXIgY3NzUm9sZSA9IG5ldyBSb2xlKHtcbiAgICBfbWFwOiByZXF1aXJlKCcuL21hcCcpLFxuICAgIF90eXBlTWFwOiByZXF1aXJlKCcuL3R5cGUtbWFwJyksXG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2Nzc0NhY2hlID0ge307XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBhY3RvciA9IHRoaXM7XG5cbiAgICAgICAgZWFjaChidWlsZChzdGF0ZSwgYWN0b3IuX2Nzc0NhY2hlKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGNzc1JvbGUuc2V0KGFjdG9yLmVsZW1lbnQsIGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZ2V0OiBmdW5jdGlvbiAoZWxlbWVudCwga2V5KSB7XG4gICAgICAgIGtleSA9IHByb3BlcnR5TmFtZUNhY2hlW2tleV0gfHwgdGVzdFByZWZpeChrZXkpO1xuXG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVtrZXldO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNldDogZnVuY3Rpb24gKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcbiAgICAgICAga2V5ID0gcHJvcGVydHlOYW1lQ2FjaGVba2V5XSB8fCB0ZXN0UHJlZml4KGtleSk7XG5cbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNzc1JvbGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvY3NzL2Nzc1JvbGUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJvbGUgPSByZXF1aXJlKCcuLi9Sb2xlJyksXG4gICAgYXR0clJvbGUgPSByZXF1aXJlKCcuLi9hdHRyL2F0dHJSb2xlJyksXG4gICAgYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyksXG4gICAgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2g7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFJvbGUoe1xuICAgIG5hbWU6ICdzdmcnLFxuXG4gICAgX21hcDogcmVxdWlyZSgnLi4vY3NzL21hcCcpLFxuICAgIF90eXBlTWFwOiByZXF1aXJlKCcuL3R5cGUtbWFwJyksXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYm91bmRpbmdCb3ggPSB0aGlzLmVsZW1lbnQuZ2V0QkJveCgpLFxuICAgICAgICAgICAgdmFsdWVzID0gdGhpcy52YWx1ZXMsXG4gICAgICAgICAgICAvLyBUT0RPOiBTdXBwb3J0IHB4XG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW5YID0gdmFsdWVzLnRyYW5zZm9ybU9yaWdpblggPyB2YWx1ZXMudHJhbnNmb3JtT3JpZ2luWC5jdXJyZW50IDogNTAsXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW5ZID0gdmFsdWVzLnRyYW5zZm9ybU9yaWdpblkgPyB2YWx1ZXMudHJhbnNmb3JtT3JpZ2luWS5jdXJyZW50IDogNTAsXG4gICAgICAgICAgICBvcmlnaW4gPSB7XG4gICAgICAgICAgICAgICAgeDogYm91bmRpbmdCb3gud2lkdGggKiAodHJhbnNmb3JtT3JpZ2luWCAvIDEwMCkgKyBib3VuZGluZ0JveC54LFxuICAgICAgICAgICAgICAgIHk6IGJvdW5kaW5nQm94LmhlaWdodCAqICh0cmFuc2Zvcm1PcmlnaW5ZIC8gMTAwKSArIGJvdW5kaW5nQm94LnlcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdmdPcmlnaW4gPSBvcmlnaW47XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBhY3RvciA9IHRoaXM7XG4gICAgICAgIGVhY2goYnVpbGQoc3RhdGUsIHRoaXMuc3ZnT3JpZ2luKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGF0dHJSb2xlLnNldChhY3Rvci5lbGVtZW50LCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9zdmcvc3ZnUm9sZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUm9sZSA9IHJlcXVpcmUoJy4uL1JvbGUnKTtcbnZhciBhdHRyUm9sZSA9IHJlcXVpcmUoJy4uL2F0dHIvYXR0clJvbGUnKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuZWFjaDtcblxuLypcbiAgICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQZXJjZW50YWdlIG9mIHRvdGFsIGxlbmd0aFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xudmFyIHBlcmNlbnRUb1BpeGVscyA9IGZ1bmN0aW9uIChwZXJjZW50YWdlLCBsZW5ndGgpIHtcbiAgICByZXR1cm4gKHBhcnNlRmxvYXQocGVyY2VudGFnZSkgLyAxMDApICogbGVuZ3RoICsgJ3B4Jztcbn07XG5cbi8qXG4gICAgQ3JlYXRlIHN0eWxlc1xuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogU1ZHIFBhdGggcHJvcGVydGllc1xuICAgIEBwYXJhbSBbb2JqZWN0XTogTGVuZ3RoIG9mIHBhdGhcbiAgICBAcmV0dXJucyBbb2JqZWN0XTogS2V5L3ZhbHVlIHBhaXJzIG9mIHZhbGlkIENTUyBwcm9wZXJ0aWVzXG4qL1xudmFyIGNyZWF0ZVN0eWxlcyA9IGZ1bmN0aW9uIChwcm9wcywgbGVuZ3RoKSB7XG4gICAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlLFxuICAgICAgICBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgICAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlcyA9IHt9O1xuXG4gICAgZWFjaChwcm9wcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAga2V5ID0gU1ZHRHJhd1BhdGguX21hcFtrZXldIHx8IGtleTtcblxuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgICAgIGNhc2UgJ3NwYWNpbmcnOlxuICAgICAgICAgICAgICAgIGhhc0Rhc2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbn07XG5cbi8qXG4gICAgRHJhdyBQYXRoIHJvbGVcbiovXG52YXIgU1ZHRHJhd1BhdGggPSBuZXcgUm9sZSh7XG4gICAgX21hcDogcmVxdWlyZSgnLi9tYXAnKSxcblxuICAgIF90eXBlTWFwOiB7XG4gICAgICAgIHN0cm9rZTogJ2NvbG9yJyxcbiAgICAgICAgZDogJ2NvbXBsZXgnXG4gICAgfSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wYXRoTGVuZ3RoID0gdGhpcy5lbGVtZW50LmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFVwZGF0ZSBgcGF0aGAgc3R5bGVzIGFuZCBpZiBgZWxlbWVudGAgaXMgcHJlc2VudCwgc2V0XG4gICAgICAgIHgsIHkgYW5kIHJvdGF0aW9uXG4gICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICBhdHRyUm9sZS51cGRhdGUuY2FsbCh0aGlzLCBjcmVhdGVTdHlsZXMoc3RhdGUsIHRoaXMucGF0aExlbmd0aCkpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNWR0RyYXdQYXRoO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlLmpzXG4gKiovIiwidmFyIGVhY2ggPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKS5lYWNoLFxuXG4gICAgVmFsdWVUeXBlTWFuYWdlciA9IGZ1bmN0aW9uICgpIHt9O1xuXG5WYWx1ZVR5cGVNYW5hZ2VyLnByb3RvdHlwZSA9IHtcbiAgICBleHRlbmQ6IGZ1bmN0aW9uIChuYW1lLCBtb2QpIHtcbiAgICAgICAgdmFyIG11bHRpTW9kcyA9ICh0eXBlb2YgbmFtZSA9PSAnb2JqZWN0JyksXG4gICAgICAgICAgICBtb2RzID0gbXVsdGlNb2RzID8gbmFtZSA6IHt9O1xuXG4gICAgICAgIC8vIElmIHdlIGp1c3QgaGF2ZSBvbmUgbW9kdWxlLCBjb2VyY2VcbiAgICAgICAgaWYgKCFtdWx0aU1vZHMpIHtcbiAgICAgICAgICAgIG1vZHNbbmFtZV0gPSBtb2Q7XG4gICAgICAgIH1cblxuICAgICAgICBlYWNoKG1vZHMsIChrZXksIHRoaXNNb2QpID0+IHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHRoaXNNb2Q7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBkZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICh0eXBlLCBrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlVHlwZSA9IHRoaXNbdHlwZV0sXG4gICAgICAgICAgICBkZWZhdWx0UHJvcHMgPSAodmFsdWVUeXBlLmRlZmF1bHRQcm9wcykgPyB2YWx1ZVR5cGUuZGVmYXVsdFByb3BzW2tleV0gfHwgdmFsdWVUeXBlLmRlZmF1bHRQcm9wcyA6IHt9O1xuXG4gICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGZhbHNlO1xuXG4gICAgICAgIGVhY2godGhpcywgZnVuY3Rpb24gKGtleSwgbW9kKSB7XG4gICAgICAgICAgICBpZiAobW9kLnRlc3QgJiYgbW9kLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVmFsdWVUeXBlTWFuYWdlcigpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuYWdlci5qc1xuICoqLyIsInZhciBQcm9jZXNzID0gcmVxdWlyZSgnLi4vcHJvY2Vzcy9Qcm9jZXNzJyksXG4gICAgUXVldWUgPSByZXF1aXJlKCcuLi9pbmMvUXVldWUnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIHNlbGVjdCA9IHJlcXVpcmUoJy4uL2luYy9zZWxlY3QtZG9tJyksXG4gICAgdXBkYXRlID0gcmVxdWlyZSgnLi91cGRhdGUnKSxcbiAgICB2YWx1ZU9wcyA9IHJlcXVpcmUoJy4vdmFsdWUtb3BlcmF0aW9ucycpLFxuXG4gICAgLypcbiAgICAgICAgUm9sZSBpbXBvcnRzXG4gICAgKi9cbiAgICBkZWZhdWx0Um9sZSA9IHJlcXVpcmUoJy4uL3JvbGVzL2RlZmF1bHRSb2xlJyksXG4gICAgY3NzUm9sZSA9IHJlcXVpcmUoJy4uL3JvbGVzL2Nzcy9jc3NSb2xlJyksXG4gICAgc3ZnUm9sZSA9IHJlcXVpcmUoJy4uL3JvbGVzL3N2Zy9zdmdSb2xlJyksXG4gICAgZHJhd1BhdGhSb2xlID0gcmVxdWlyZSgnLi4vcm9sZXMvcGF0aC9kcmF3UGF0aFJvbGUnKSxcblxuICAgIEFjdGlvbiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvQWN0aW9uJyksXG4gICAgZWFjaCA9IHV0aWxzLmVhY2g7XG5cbmNsYXNzIEFjdG9yIHtcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0cyA9IHt9KSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHV0aWxzLmlzU3RyaW5nKG9wdHMpID8geyBlbGVtZW50OiBvcHRzIH0gOiBvcHRzO1xuXG4gICAgICAgIHRoaXMudmFsdWVzID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHZhbHVlczoge30gfTtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IG5ldyBRdWV1ZSgpO1xuICAgICAgICB0aGlzLnByb2Nlc3MgPSBuZXcgUHJvY2Vzcyh0aGlzLCB1cGRhdGUpO1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5udW1BY3RpdmUgPSAwO1xuICAgICAgICB0aGlzLmFjdGlvbkNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLmFjdGl2ZVZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZVBhcmVudHMgPSBbXTtcblxuICAgICAgICAvLyBHZXQgYWN0dWFsIGVsZW1lbnRzIGlmIHRoaXMgaXMgYSBzZWxlY3RvclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocHJvcHMuZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHByb3BzLmVsZW1lbnQgPSBzZWxlY3QocHJvcHMuZWxlbWVudClbMF07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFzc2lnblJvbGVzKHByb3BzLmVsZW1lbnQsIHByb3BzLmFzLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuICAgICAgICB0aGlzLmluaXRSb2xlcygpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFNldCBBY3RvciBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHJldHVybnMgW0FjdG9yXVxuICAgICovXG4gICAgc2V0KG9wdHMpIHtcbiAgICAgICAgZWFjaChvcHRzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3ZhbHVlcycgJiYga2V5ICE9PSAnYWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAob3B0cyAmJiBvcHRzLnZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZU9wcy5wcm9jZXNzKHRoaXMudmFsdWVzLCBvcHRzLnZhbHVlcywgb3B0cywgJ2N1cnJlbnQnLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGFsbCBhY3RpdmUgYWN0aW9ucyBmb3IgYW55IHRoYXQgY2FuIGJlIHJlbW92ZWRcbiAgICAgICAgZWFjaCh0aGlzLmFjdGl2ZUFjdGlvbnMsIChpZCwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBsZXQgYWN0aW9uSXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgZWFjaCh0aGlzLnZhbHVlcywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBhY3Rpb25Jc0FjdGl2ZSA9ICh2YWx1ZS5hY3Rpb24gPT09IGFjdGlvbikgPyB0cnVlIDogYWN0aW9uSXNBY3RpdmU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFhY3Rpb25Jc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kQWN0aW9uKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24tc3BlY2lmaWMgY29udHJvbHMgdG8gQWN0b3JcblxuICAgICAgICBAcmV0dXJucyBbQ29udHJvbHNdXG4gICAgKi9cbiAgICBjb250cm9scyhhY3Rpb24pIHtcbiAgICAgICAgdmFyIENvbnRyb2xzID0gYWN0aW9uLmdldENvbnRyb2xzKCk7XG4gICAgICAgIHJldHVybiBuZXcgQ29udHJvbHModGhpcywgYWN0aW9uLmdldFBsYXlhYmxlKCkpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN0YXJ0IGEgbmV3IEFjdGlvblxuXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uIHx8IG51bWJlcl1cbiAgICAgICAgQHBhcmFtIFtJbnB1dCB8fCBldmVudF0gKG9wdGlvbmFsKVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dIChvcHRpb25hbCk6IGRlZmluZWQgYHRydWVgIGlmIHdlIHN1cnByZXNzIG1ha2luZyBuZXcgcXVldWVcbiAgICAgICAgQHJldHVybnMgW0NvbnRyb2xzXVxuICAgICovXG4gICAgc3RhcnQodG9TZXQsIGlucHV0KSB7XG4gICAgICAgIGxldCBhY3Rpb25FeGlzdHMgPSB1dGlscy5pc051bSh0b1NldCksXG4gICAgICAgICAgICBhY3Rpb24gPSAoYWN0aW9uRXhpc3RzKSA/IHRoaXMuZ2V0QWN0aW9uKHRvU2V0KSA6IHRvU2V0LmdldFBsYXlhYmxlKCksXG4gICAgICAgICAgICBvcHRzID0gYWN0aW9uLmdldFNldCgpLFxuICAgICAgICAgICAgc3VycHJlc3NRdWV1ZUNsZWFyID0gKGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0gPT09IGZhbHNlKTtcblxuICAgICAgICBvcHRzLmFjdGlvbiA9IGFjdGlvbjtcblxuICAgICAgICB0aGlzLnNldChvcHRzKTtcblxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgIGFjdGlvbi5iaW5kSW5wdXQoaW5wdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdXJwcmVzc1F1ZXVlQ2xlYXIpIHtcbiAgICAgICAgICAgIHRoaXMucXVldWUuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgYWxsIFJvbGUgb25TdGFydHMgaWYgbm90IGFscmVhZHkgYWN0aXZlXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgbGV0IG51bVJvbGVzID0gdGhpcy5yb2xlcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IHRoaXMucm9sZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHJvbGUuc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZS5zdGFydC5jYWxsKHRoaXMsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgbmV3IGFjdGlvbiBvblN0YXJ0XG4gICAgICAgIGlmICghYWN0aW9uLmlzQWN0aXZlICYmIGFjdGlvbi5vblN0YXJ0KSB7XG4gICAgICAgICAgICBhY3Rpb24ub25TdGFydC5jYWxsKHRoaXMsIHRoaXMsIGFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG5cbiAgICAgICAgaWYgKCFhY3Rpb25FeGlzdHMpIHtcbiAgICAgICAgICAgIGxldCBDb250cm9scyA9IGFjdGlvbi5nZXRDb250cm9scygpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb250cm9scyh0aGlzLCBhY3Rpb24sIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUGF1c2UgYWxsIGFjdGl2ZSBBY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtpbnRdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybnMgW0FjdG9yXVxuICAgICovXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZWFjaCh0aGlzLmFjdGl2ZUFjdGlvbnMsIChpZCwgYWN0aW9uKSA9PiBhY3Rpb24uZGVhY3RpdmF0ZSgpKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzLnN0b3AoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUmVzdW1lIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl07XG4gICAgKi9cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICBlYWNoKHRoaXMuYWN0aXZlQWN0aW9ucywgKGlkLCBhY3Rpb24pID0+IGFjdGlvbi5hY3RpdmF0ZSgpKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzLnN0YXJ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN0b3AgYWxsIGFjdGl2ZSBBY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtpbnRdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybnMgW0FjdG9yXVxuICAgICovXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVG9nZ2xlIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgPyB0aGlzLnBhdXNlKCkgOiB0aGlzLnJlc3VtZSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN5bmNzIGBlbGVtZW50YCB3aXRoIGN1cnJlbnQgcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHN5bmMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KG5ldyBBY3Rpb24oeyB2YWx1ZXM6IHRoaXMudmFsdWVzIH0pKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBZGQgYSBuZXcgQWN0aW9uIHRvIHRoZSBxdWV1ZVxuICAgICovXG4gICAgdGhlbigpIHtcbiAgICAgICAgdGhpcy5xdWV1ZS5hZGQuYXBwbHkodGhpcy5xdWV1ZSwgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgRXhlY3V0ZSBuZXh0IGluIHF1ZXVlXG4gICAgKi9cbiAgICBuZXh0KCkge1xuICAgICAgICB2YXIgbmV4dCA9IHRoaXMucXVldWUubmV4dCgpO1xuXG4gICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jKG5leHRbMF0pKSB7XG4gICAgICAgICAgICAgICAgbmV4dFswXSgpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgLy8gT3IgdGhpcyBpcyBhbiBhY3Rpb25cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV4dC5wdXNoKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0LmFwcGx5KHRoaXMsIG5leHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBc3NpZ24gUm9sZXMgYmFzZWQgb24gZWxlbWVudCBhbmQgbWFudWFsbHkgcHJvdmlkZWQgcHJvcHNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEVsZW1lbnRcbiAgICAgICAgQHBhcmFtIFtSb2xlIHx8IGFycmF5XVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dIChvcHRpb25hbClcbiAgICAqL1xuICAgIGFzc2lnblJvbGVzKGVsZW1lbnQsIG1hbnVhbFJvbGVzLCBzdXJwcmVzc0luaXQpIHtcbiAgICAgICAgLy8gQWxsIEFjdG9ycyBnZXQgYSBkZWZhdWx0IFJvbGUgdGhhdCBoYW5kbGVzIHVzZXIgY2FsbGJhY2tzXG4gICAgICAgIHRoaXMucm9sZXMgPSBbIGRlZmF1bHRSb2xlIF07XG5cbiAgICAgICAgLy8gQXV0by1hc3NpZ24gaWYgbm8gbWFudWFsbHktc2V0IFJvbGVzXG4gICAgICAgIGlmICghbWFudWFsUm9sZXMgJiYgZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5hdXRvQXNzaWduUm9sZXMoZWxlbWVudCk7XG5cbiAgICAgICAgLy8gT3IgbWFudWFsbHkgc2V0IGlmIHByb3ZpZGVkXG4gICAgICAgIH0gZWxzZSBpZiAobWFudWFsUm9sZXMpIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0FycmF5KG1hbnVhbFJvbGVzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaC5hcHBseSh0aGlzLnJvbGVzLCBtYW51YWxSb2xlcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaChtYW51YWxSb2xlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN1cnByZXNzSW5pdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0Um9sZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEF1dG9tYXRpY2FsbHkgYXNzaWduIFJvbGVzIGJhc2VkIG9uIGVsZW1lbnQsIGRlc2lnbmVkXG4gICAgICAgIHRvIGJlIGV4dGVuZGVkXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBFbGVtZW50XG4gICAgKi9cbiAgICBhdXRvQXNzaWduUm9sZXMoZWxlbWVudCkge1xuICAgICAgICAvLyBBZGQgQ1NTIHJvbGUgaWYgSFRNTEVsZW1lbnRcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5yb2xlcy5wdXNoKGNzc1JvbGUpO1xuXG4gICAgICAgIC8vIEFkZCBTVkcgcm9sZSBpZiBTVkcgZWxlbWVudFxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2goc3ZnUm9sZSk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBEcmF3IFBhdGggcm9sZSBpZiBwYXRoIGVsZW1lbnRcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaChkcmF3UGF0aFJvbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgRmlyZSBpbml0IGNhbGxiYWNrc1xuICAgICovXG4gICAgaW5pdFJvbGVzKCkge1xuICAgICAgICAvLyBGaXJlIGluaXQgY2FsbGJhY2tcbiAgICAgICAgdGhpcy5yb2xlcy5mb3JFYWNoKChyb2xlKSA9PiB7XG4gICAgICAgICAgICBpZiAocm9sZS5pbml0KSB7XG4gICAgICAgICAgICAgICAgcm9sZS5pbml0LmNhbGwodGhpcywgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5maXJzdEZyYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzcy5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gYW5kIHJldHVybiBpdHMgdGFibGUgaWRcblxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHJldHVybnMgW2ludF1cbiAgICAqL1xuICAgIGJpbmRBY3Rpb24oYWN0aW9uLCBpZCkge1xuICAgICAgICBpZiAoaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWQgPSB0aGlzLmFjdGlvbkNvdW50ZXIrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5oYXNBY3Rpb24oaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdID0gYWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5udW1BY3RpdmUrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICB1bmJpbmRBY3Rpb24oaWQpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICAgIHRoaXMubnVtQWN0aXZlLS07XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5udW1BY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWN0aW9uKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgIH1cblxuICAgIGhhc0FjdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0QWN0aW9uKGlkKSAhPT0gdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBVcGRhdGUgcHJvY2Vzc2luZyBvcmRlclxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl1cbiAgICAgICAgQHBhcmFtIFtib29sZWFuXVxuICAgICovXG4gICAgdXBkYXRlT3JkZXIoa2V5LCBtb3ZlVG9CYWNrLCBoYXNDaGlsZHJlbikge1xuICAgICAgICB2YXIgb3JkZXIgPSAoIWhhc0NoaWxkcmVuKSA/IHRoaXMuYWN0aXZlVmFsdWVzIDogdGhpcy5hY3RpdmVQYXJlbnRzLFxuICAgICAgICAgICAgcG9zaXRpb24gPSBvcmRlci5pbmRleE9mKGtleSk7XG5cbiAgICAgICAgLy8gSWYga2V5IGlzbid0IGxpc3Qgb3IgbW92ZVRvQmFjayBpcyBzZXQgdG8gdHJ1ZSwgYWRkIGtleVxuICAgICAgICBpZiAocG9zaXRpb24gPT09IC0xIHx8IG1vdmVUb0JhY2spIHtcbiAgICAgICAgICAgIG9yZGVyLnB1c2goa2V5KTtcblxuICAgICAgICAgICAgLy8gSWYga2V5IGFscmVhZHkgZXhpc3RzLCByZW1vdmVcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA+IC0xKSB7XG4gICAgICAgICAgICAgICAgb3JkZXIuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFtib29sZWFuXTogSXMgdGhpcyBBY3RvciBhY3RpdmU/XG4gICAgZ2V0IGlzQWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gICAgfVxuXG4gICAgLy8gU2V0IGhhc0NoYW5nZWQgdG8gdHJ1ZSBpcyB0aGlzIGlzIG5vdyBhY3RpdmVcbiAgICBzZXQgaXNBY3RpdmUoc3RhdHVzKSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHN0YXR1cztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lzQWN0aXZlID0gc3RhdHVzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBY3RvcjtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0b3IvQWN0b3IuanNcbiAqKi8iLCJ2YXIgQWN0b3IgPSByZXF1aXJlKCcuLi9hY3Rvci9BY3RvcicpO1xudmFyIFR3ZWVuID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Ud2VlbicpO1xudmFyIGNhbGNSZWxhdGl2ZSA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJykucmVsYXRpdmVWYWx1ZTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xudmFyIGlzRnVuYyA9IHV0aWxzLmlzRnVuYztcbnZhciBpc1N0cmluZyA9IHV0aWxzLmlzU3RyaW5nO1xuXG52YXIgdGltZWxpbmUgPSBuZXcgVHdlZW4oe1xuICAgIHZhbHVlczoge1xuICAgICAgICBwbGF5aGVhZDoge1xuICAgICAgICAgICAgZWFzZTogJ2xpbmVhcicsXG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgdG86IDBcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBjaGVja0FjdGlvbnMoeyBwbGF5aGVhZCB9LCBzZXF1ZW5jZSkge1xuICAgIHNlcXVlbmNlLmNoZWNrLmZvckVhY2goKHRvQ2hlY2ssIGkpID0+IHtcbiAgICAgICAgaWYgKHBsYXloZWFkID49IHRvQ2hlY2sudGltZXN0YW1wKSB7XG4gICAgICAgICAgICB0b0NoZWNrLmNhbGxiYWNrKCk7XG4gICAgICAgICAgICBzZXF1ZW5jZS5jaGVjay5zcGxpY2UoaSwgLTEpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5jbGFzcyBTZXF1ZW5jZSBleHRlbmRzIEFjdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBsYWJlbHM6IHt9LFxuICAgICAgICAgICAgY2hlY2s6IFtdLFxuICAgICAgICAgICAgc2VxdWVuY2U6IFtdLFxuICAgICAgICAgICAgY3VycmVudFRpbWVzdGFtcDogMCxcbiAgICAgICAgICAgIG9uVXBkYXRlOiBjaGVja0FjdGlvbnNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkKGFjdG9yLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIGlzQ2FsbGJhY2sgPSBpc0Z1bmMoYWN0b3IpLFxuICAgICAgICAgICAgY2FsbGJhY2sgPSBpc0NhbGxiYWNrID8gYWN0b3IgOiAoKSA9PiB7IGFjdG9yLnN0YXJ0KGFjdGlvbikgfSxcbiAgICAgICAgICAgIHRpbWVzdGFtcCA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgdGltZXN0YW1wID0gdXRpbHMuaXNTdHJpbmcodGltZXN0YW1wKSA/IGNhbGNSZWxhdGl2ZSh0aGlzLmN1cnJlbnRUaW1lc3RhbXAsIHRpbWVzdGFtcCkgOiB0aW1lc3RhbXA7XG5cbiAgICAgICAgdGhpcy5zZXF1ZW5jZS5wdXNoKHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wIHx8IHRoaXMuY3VycmVudFRpbWVzdGFtcCxcbiAgICAgICAgICAgIGNhbGxiYWNrXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KHRpbWVsaW5lKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZXN0YW1wID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25TdGFydCgpIHtcbiAgICAgICAgdGhpcy5jaGVjayA9IHRoaXMuc2VxdWVuY2Uuc2xpY2UoKTtcbiAgICB9XG5cbiAgICBsYWJlbChuYW1lLCB0aW1lc3RhbXApIHtcbiAgICAgICAgdGhpcy5sYWJlbHNbbmFtZV0gPSB0aW1lc3RhbXA7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcXVlbmNlL1NlcXVlbmNlLmpzXG4gKiovIiwiLypcbiAgICBJbnB1dCBjb250cm9sbGVyXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMuanMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscy5qcycpLFxuICAgIEhpc3RvcnkgPSByZXF1aXJlKCcuLi9pbmMvSGlzdG9yeS5qcycpLFxuXG4gICAgLypcbiAgICAgICAgSW5wdXQgY29uc3RydWN0b3JcbiAgICAgICAgXG4gICAgICAgICAgICBTeW50YXhcbiAgICAgICAgICAgICAgICBuZXdJbnB1dChuYW1lLCB2YWx1ZVssIHBvbGxdKVxuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgdG8gdHJhY2tcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBJbml0aWFsIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dIChvcHRpb25hbCk6IEZ1bmN0aW9uIHRvIHBvbGwgSW5wdXQgZGF0YVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBuZXdJbnB1dChwcm9wc1ssIHBvbGxdKVxuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCBvZiB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl0gKG9wdGlvbmFsKTogRnVuY3Rpb24gdG8gcG9sbCBJbnB1dCBkYXRhXG5cbiAgICAgICAgQHJldHVybiBbSW5wdXRdXG4gICAgKi9cbiAgICBJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBvbGxQb3MgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcblxuICAgICAgICB0aGlzLmN1cnJlbnQgPSB7fTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB7fTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHt9O1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgSGlzdG9yeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIFxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jKGFyZ3VtZW50c1twb2xsUG9zXSkpIHtcbiAgICAgICAgICAgIHRoaXMucG9sbCA9IGFyZ3VtZW50c1twb2xsUG9zXTtcbiAgICAgICAgfVxuICAgIH07XG5cbklucHV0LnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogTnVtYmVyIG9mIGZyYW1lcyBvZiBpbmFjdGl2aXR5IGJlZm9yZSB2ZWxvY2l0eSBpcyB0dXJuZWQgdG8gMFxuICAgIG1heEluYWN0aXZlRnJhbWVzOiAyLFxuICAgIFxuICAgIC8vIFtudW1iZXJdOiBOdW1iZXIgb2YgZnJhbWVzIGlucHV0IGhhc24ndCBiZWVuIHVwZGF0ZWRcbiAgICBpbmFjdGl2ZUZyYW1lczogMCxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgbGF0ZXN0IGlucHV0IHZhbHVlc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddIChvcHRpb25hbCk6IE5hbWUgb2Ygc3BlY2lmaWMgcHJvcGVydHkgdG8gcmV0dXJuXG4gICAgICAgIEByZXR1cm4gW29iamVjdCB8fCBudW1iZXJdOiBMYXRlc3QgaW5wdXQgdmFsdWVzIG9yLCBpZiBzcGVjaWZpZWQsIHNpbmdsZSB2YWx1ZVxuICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICB2YXIgbGF0ZXN0ID0gdGhpcy5oaXN0b3J5LmdldCgpLFxuICAgICAgICAgICAgdmFsID0gKHByb3AgIT09IHVuZGVmaW5lZCkgPyBsYXRlc3RbcHJvcF0gOiBsYXRlc3Q7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFVwZGF0ZSB0aGUgaW5wdXQgdmFsdWVzXG4gICAgICAgIFxuICAgICAgICBTeW50YXhcbiAgICAgICAgICAgIGlucHV0LnVwZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgdG8gdHJhY2tcbiAgICAgICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEluaXRpYWwgdmFsdWVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlucHV0LnVwZGF0ZShwcm9wcylcbiAgICAgICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCBvZiB2YWx1ZXNcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgQHJldHVybiBbSW5wdXRdXG4gICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB7fTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW0oYXJnMSkpIHtcbiAgICAgICAgICAgIHZhbHVlc1thcmcwXSA9IGFyZzE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSBhcmcwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oaXN0b3J5LmFkZCh1dGlscy5tZXJnZSh0aGlzLmN1cnJlbnQsIHZhbHVlcykpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBDaGVjayBmb3IgaW5wdXQgbW92ZW1lbnQgYW5kIHVwZGF0ZSBwb2ludGVyIG9iamVjdCdzIHByb3BlcnRpZXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGltZXN0YW1wIG9mIGZyYW1lXG4gICAgICAgIEByZXR1cm4gW0lucHV0XVxuICAgICovXG4gICAgb25GcmFtZTogZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuICAgICAgICB2YXIgbGF0ZXN0LCBoYXNDaGFuZ2VkO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgcHJvdmlkZWQgdGltZXN0YW1wIGFnYWluc3QgbGFzdEZyYW1lIHRpbWVzdGFtcCBhbmQgcmV0dXJuIGlucHV0IGhhcyBhbHJlYWR5IGJlZW4gdXBkYXRlZFxuICAgICAgICBpZiAodGltZXN0YW1wID09PSB0aGlzLmxhc3RGcmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsYXRlc3QgPSAodGhpcy5wb2xsKSA/IHRoaXMucG9sbCgpIDogdGhpcy5oaXN0b3J5LmdldCgpO1xuICAgICAgICBoYXNDaGFuZ2VkID0gdXRpbHMuaGFzQ2hhbmdlZCh0aGlzLmN1cnJlbnQsIGxhdGVzdCk7XG5cbiAgICAgICAgLy8gSWYgaW5wdXQgaGFzIGNoYW5nZWQgYmV0d2VlbiBmcmFtZXMgIFxuICAgICAgICBpZiAoaGFzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IGNhbGMub2Zmc2V0KHRoaXMuY3VycmVudCwgbGF0ZXN0KTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGxhdGVzdDtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuXG4gICAgICAgIC8vIE9yIGl0IGhhc24ndCBtb3ZlZCBhbmQgb3VyIGZyYW1lIGxpbWl0IGhhcyBiZWVuIHJlYWNoZWRcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluYWN0aXZlRnJhbWVzID49IHRoaXMubWF4SW5hY3RpdmVGcmFtZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSBjYWxjLm9mZnNldCh0aGlzLmN1cnJlbnQsIHRoaXMuY3VycmVudCk7XG4gICAgICAgIFxuICAgICAgICAvLyBPciBpbnB1dCBoYXNuJ3QgY2hhbmdlZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcysrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxhc3RGcmFtZSA9IHRpbWVzdGFtcDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5wdXQvSW5wdXQuanNcbiAqKi8iLCJ2YXIgQWN0b3IgPSByZXF1aXJlKCcuLi9hY3Rvci9BY3RvcicpLFxuICAgIFR3ZWVuID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Ud2VlbicpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmNvbnN0IERFRkFVTFRfU1RBR0dFUl9FQVNFID0gJ2xpbmVhcic7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ2FsbGJhY2sobWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgcmV0dXJuIHV0aWxzLmlzU3RyaW5nKG1ldGhvZCkgPyBcbiAgICAgICAgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIG1lbWJlclttZXRob2RdKC4uLmFyZ3MpO1xuICAgICAgICB9IDogbWV0aG9kO1xufVxuXG5jbGFzcyBJdGVyYXRvciB7XG4gICAgY29uc3RydWN0b3IobWVtYmVycykge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgICAgaWYgKG1lbWJlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKG1lbWJlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc3RhZ2dlciA9IG5ldyBBY3RvcigpO1xuICAgIH1cblxuICAgIGFkZChtZW1iZXJzKSB7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IHRoaXMubWVtYmVycy5jb25jYXQobWVtYmVycyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLm1lbWJlcnMgPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZWFjaChtZXRob2QsIC4uLmFyZ3MpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZ2VuZXJhdGVDYWxsYmFjayhtZXRob2QsIC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLm1lbWJlcnMuZm9yRWFjaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGVhY2hJbnRvTmV3KG1ldGhvZCwgLi4uYXJncykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBnZW5lcmF0ZUNhbGxiYWNrKG1ldGhvZCwgLi4uYXJncyksXG4gICAgICAgICAgICBuZXdJdGVyYXRvciA9IG5ldyBJdGVyYXRvcigpO1xuXG4gICAgICAgIHRoaXMubWVtYmVycy5mb3JFYWNoKChtZW1iZXIpID0+IG5ld0l0ZXJhdG9yLmFkZChjYWxsYmFjayhtZW1iZXIpKSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld0l0ZXJhdG9yO1xuICAgIH1cblxuICAgIHN0YWdnZXIobWV0aG9kLCBwcm9wcywgLi4uYXJncykge1xuICAgICAgICB2YXIgdGVtcE1lbWJlcnMgPSB1dGlscy5jb3B5QXJyYXkodGhpcy5tZW1iZXJzKSxcbiAgICAgICAgICAgIG51bU1lbWJlcnMgPSB0ZW1wTWVtYmVycy5sZW5ndGgsXG4gICAgICAgICAgICBwcm9wc0lzSW50ZXJ2YWwgPSB1dGlscy5pc051bShwcm9wcyksXG4gICAgICAgICAgICBpbnRlcnZhbCA9IHByb3BzSXNJbnRlcnZhbCA/IHByb3BzIDogcHJvcHMuaW50ZXJ2YWwsXG4gICAgICAgICAgICBzdGFnZ2VyUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIGkgPSAtMSxcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZ2VuZXJhdGVDYWxsYmFjayhtZXRob2QsIC4uLmFyZ3MpO1xuXG4gICAgICAgIHN0YWdnZXJQcm9wcy52YWx1ZXMgPSB7XG4gICAgICAgICAgICBvbkNvbXBsZXRlOiBwcm9wc0lzSW50ZXJ2YWwgPyB1bmRlZmluZWQgOiBwcm9wcy5vbkNvbXBsZXRlLFxuICAgICAgICAgICAgaToge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IC0wLjYsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGludGVydmFsICogbnVtTWVtYmVycyxcbiAgICAgICAgICAgICAgICBlYXNlOiBwcm9wc0lzSW50ZXJ2YWwgPyBERUZBVUxUX1NUQUdHRVJfRUFTRSA6IHByb3BzLmVhc2UgfHwgREVGQVVMVF9TVEFHR0VSX0VBU0UsXG4gICAgICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdG86IG51bU1lbWJlcnMgLSAwLjZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzdGFnZ2VyUHJvcHMub25VcGRhdGUgPSAob3V0cHV0KSA9PiB7XG4gICAgICAgICAgICB2YXIgbmV3SW5kZXggPSBvdXRwdXQuaSxcbiAgICAgICAgICAgICAgICBnYXBJbmRleCA9IGkgKyAxO1xuXG4gICAgICAgICAgICAvLyBJZiBvdXIgbmV3IGluZGV4IGlzIG9ubHkgb25lIG1vcmUgdGhhbiB0aGUgcHJldmlvdXMgaW5kZXgsIGZpcmUgaW1tZWRpZXRseVxuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID09PSBpICsgMSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRlbXBNZW1iZXJzW2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuXG4gICAgICAgICAgICAvLyBPciBsb29wIHRocm91Z2ggdGhlIGRpc3RhbmNlIHRvIGZpcmUgYWxsIGluZGVjaWVzLiBJbmNyZWFzZSBkZWxheS5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICg7IGdhcEluZGV4IDw9IG5ld0luZGV4OyBnYXBJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRlbXBNZW1iZXJzW2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaSA9IG5ld0luZGV4O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3N0YWdnZXIuc3RhcnQobmV3IFR3ZWVuKHN0YWdnZXJQcm9wcykpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFycmF5IG1hbmlwdWxhdGlvblxuICAgICovXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzLnJldmVyc2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEl0ZXJhdG9yO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2l0ZXJhdG9yL0l0ZXJhdG9yLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtYW5hZ2VyID0gcmVxdWlyZSgnLi9tYW5hZ2VyJyksXG5cbiAgICAvKlxuICAgICAgICBQcm9jZXNzIGNvbnN0cnVjdG9yXG4gICAgICAgIFxuICAgICAgICBTeW50YXhcbiAgICAgICAgICAgIHZhciBwcm9jZXNzID0gbmV3IFByb2Nlc3Moc2NvcGUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHZhciBwcm9jZXNzID0gbmV3IFByb2Nlc3MoY2FsbGJhY2spO1xuICAgICovXG4gICAgUHJvY2VzcyA9IGZ1bmN0aW9uIChzY29wZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGhhc1Njb3BlID0gKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpO1xuXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBoYXNTY29wZSA/IGNhbGxiYWNrIDogc2NvcGU7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBoYXNTY29wZSA/IHNjb3BlIDogdGhpcztcbiAgICAgICAgdGhpcy5pZCA9IG1hbmFnZXIucmVnaXN0ZXIoKTtcblxuICAgICAgICAvLyBbYm9vbGVhbl06IElzIHRoaXMgcHJvY2VzcyBjdXJyZW50bHkgYWN0aXZlP1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfTtcblxuUHJvY2Vzcy5wcm90b3R5cGUgPSB7XG4gICAgLypcbiAgICAgICAgRmlyZSBjYWxsYmFja1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFt0aW1lc3RhbXBdOiBUaW1lc3RhbXAgb2YgY3VycmVudGx5LWV4ZWN1dGVkIGZyYW1lXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4gICAgKi9cbiAgICBmaXJlOiBmdW5jdGlvbiAodGltZXN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2suY2FsbCh0aGlzLnNjb3BlLCB0aW1lc3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgd2UncmUgcnVubmluZyBhdCBhbiBpbnRlcnZhbCwgZGVhY3RpdmF0ZSBhZ2FpblxuICAgICAgICBpZiAodGhpcy5pc0ludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RhcnQgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBEdXJhdGlvbiBvZiBwcm9jZXNzIGluIG1zLCAwIGlmIGluZGVmaW5pdGVcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RvcCgpO1xuICAgICAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmlzU3RvcFRpbWVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RvcCBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBBY3RpdmF0ZSBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIG1hbmFnZXIuYWN0aXZhdGUodGhpcywgdGhpcy5pZCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEZWFjdGl2YXRlIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbWFuYWdlci5kZWFjdGl2YXRlKHRoaXMuaWQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBGaXJlIHByb2Nlc3MgZXZlcnkgeCBtc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2YgbXMgdG8gd2FpdCBiZXR3ZWVuIHJlZmlyaW5nIHByb2Nlc3MuXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBldmVyeTogZnVuY3Rpb24gKGludGVydmFsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICAgICAgdGhpcy5pc0ludGVydmFsID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmludGVydmFsVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLmFjdGl2YXRlKCk7XG4gICAgICAgIH0sIGludGVydmFsKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaXNJbnRlcnZhbFRpbWVBY3RpdmUgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBDbGVhciBhbGwgdGltZXJzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gXG4gICAgKi9cbiAgICByZXNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzSW50ZXJ2YWwgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmlzU3RvcFRpbWVyQWN0aXZlKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zdG9wVGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5pc0ludGVydmFsVGltZUFjdGl2ZSkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsVGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2Nlc3M7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvY2Vzcy9Qcm9jZXNzLmpzXG4gKiovIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG52YXIgZWFjaCA9IHV0aWxzLmVhY2g7XG5cbi8qXG4gICAgUm9sZSBjbGFzcyBjb25zdHJ1Y3RvclxuXG4gICAgQHBhcmFtIFtvYmplY3RdOiBPcHRpb25hbCBtZXRob2RzIGFuZCBwcm9wcyB0byBhZGQ6XG4gICAgICAgIG5hbWUgW3N0cmluZ106ICAgICAgTmFtZSBvZiBnZW5lcmF0ZWQgZ2V0dGVyL3NldHRlciBtZXRob2Qgb24gQWN0b3JcbiAgICAgICAgX21hcCBbb2JqZWN0XTogICAgICBNYXAgQWN0b3IgdmFsdWVzIHRvIHRoZXNlIHZhbHVlcyBmb3IgdGhpcyBSb2xlXG4gICAgICAgIF90eXBlTWFwIFtvYmplY3RdOiAgTWFwIHZhbHVlcyB0byB2YWx1ZSB0eXBlc1xuICAgICAgICBpbml0IFtmdW5jdGlvbl06ICAgIENhbGxiYWNrIHRvIHJ1biB3aGVuIHRoaXMgUm9sZSBpcyBhZGRlZCB0byBhbiBBY3RvclxuICAgICAgICBzdGFydCBbZnVuY3Rpb25dOiAgIENhbGxiYWNrIHRvIHJ1biB3aGVuIGhvc3QgQWN0b3Igc3RhcnRzIGFuIGFjdGlvblxuICAgICAgICBjb21wbGV0ZSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBydW4gd2hlbiBhY3Rpb24gY29tcGxldGVzXG4gICAgICAgIGZyYW1lIFtmdW5jdGlvbl06ICAgQ2FsbGJhY2sgdG8gZmlyZSBvbmNlIHBlciBmcmFtZVxuICAgICAgICB1cGRhdGUgW2Z1bmN0aW9uXTogIENhbGxiYWNrIHRvIGZpcmUgd2hlbiB2YWx1ZXMgY2hhbmdlXG4gICAgICAgIGdldCBbZnVuY3Rpb25dOiAgICAgUmVhZCB2YWx1ZSBmcm9tIGFjdHVhbCBlbGVtZW50XG4gICAgICAgIHNldCBbZnVuY3Rpb25dOiAgICAgU2V0IHZhbHVlIG9uIGFjdHVhbCBlbGVtZW50XG4qL1xudmFyIFJvbGUgPSBmdW5jdGlvbiAobWV0aG9kcykge1xuICAgIHZhciByb2xlID0gdGhpcztcblxuICAgIHJvbGUuX21hcCA9IHt9O1xuXG4gICAgZWFjaChtZXRob2RzLCBmdW5jdGlvbiAobmFtZSwgbWV0aG9kKSB7XG4gICAgICAgIHJvbGVbbmFtZV0gPSAoIXV0aWxzLmlzT2JqKG1ldGhvZCkpID8gbWV0aG9kIDogdXRpbHMuY29weShtZXRob2QpO1xuICAgIH0pO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBuZXcgcm9sZVxuXG4gICAgQHBhcmFtIFtvYmplY3RdOiBPcHRpb25hbCBtZXRob2RzIGFuZCBwcm9wcyB0byBhZGRcbiAgICBAcGFyYW0gW3ZhbHVlc1RvTWFwXTogT3ZlcnJpZGUgZXhpc3RpbmcgbWFwIHdpdGggdGhlc2UgdmFsdWVzXG4gICAgQHJldHVybiBbUm9sZV06IE5ldyBSb2xlXG4qL1xudmFyIGNyZWF0ZVJvbGUgPSBmdW5jdGlvbiAobWV0aG9kcywgdmFsdWVzKSB7XG4gICAgdmFyIG5ld1JvbGUgPSBuZXcgUm9sZShtZXRob2RzKTtcblxuICAgIGVhY2godmFsdWVzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBuZXdSb2xlLl9tYXBba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld1JvbGU7XG59O1xuXG5Sb2xlLnByb3RvdHlwZSA9IHtcblxuICAgIC8qXG4gICAgICAgIE1hcCB2YWx1ZSBrZXlzIG9yIGdlbmVyYXRlIG5ldyBSb2xlIHdpdGggdXBkYXRlZCBtYXBcblxuICAgICAgICBHZXR0ZXI6XG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byBtYXBcbiAgICAgICAgICAgIEByZXR1cm4gW3N0cmluZ106IE1hcHBlZCBrZXksIG9yIGtleSBpZiBubyBtYXBwZWQga2V5IGZvdW5kXG5cbiAgICAgICAgU2V0dGVyOiBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogTWFwIG9mIEFjdG9yIGtleXMgLT4gUm9sZSBrZXlzXG4gICAgICAgICAgICBAcmV0dXJuIFtSb2xlXTogTmV3IFJvbGUgd2l0aCB1bmlxdWUgbWFwXG4gICAgKi9cbiAgICBtYXA6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHN0cmluZywgZ2V0IG1hcHBlZCB2YWx1ZVxuICAgICAgICAvLyBPdGhlcndpc2UgdGhpcyBpcyBhIG1hcCwgZHVwbGljYXRlZCByb2xlIHdpdGggdXBkYXRlZCBtYXBcbiAgICAgICAgcmV0dXJuICh1dGlscy5pc1N0cmluZyh2YWx1ZXMpKSA/IHRoaXMuX21hcFt2YWx1ZXNdIHx8IHZhbHVlcyA6IGNyZWF0ZVJvbGUodGhpcywgdmFsdWVzKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvbGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvUm9sZS5qc1xuICoqLyIsInZhciBCZXppZXIgPSByZXF1aXJlKCcuL0JlemllcicpLFxuXG4gICAgLypcbiAgICAgICAgTWlycm9yIGVhc2luZ1xuICAgICAgICBcbiAgICAgICAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICAgICAgICBlYXNlSW4gaW50byBhbiBlYXNlSW5PdXRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gbWlycm9yXG4gICAgICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4gICAgKi9cbiAgICBtaXJyb3JFYXNpbmcgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIG1ldGhvZCkge1xuICAgICAgICByZXR1cm4gKHByb2dyZXNzIDw9IDAuNSkgPyBtZXRob2QoMiAqIHByb2dyZXNzKSAvIDIgOiAoMiAtIG1ldGhvZCgyICogKDEgLSBwcm9ncmVzcykpKSAvIDI7XG4gICAgfSxcbiAgICAgICAgICAgIFxuICAgIC8qXG4gICAgICAgIFJldmVyc2UgZWFzaW5nXG4gICAgICAgIFxuICAgICAgICBSZXZlcnNlcyB0aGUgb3V0cHV0IG9mIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgZm9yIGZsaXBwaW5nIGVhc2VJblxuICAgICAgICBjdXJ2ZSB0byBhbiBlYXNlT3V0LlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byByZXZlcnNlXG4gICAgICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4gICAgKi9cbiAgICByZXZlcnNlRWFzaW5nID0gZnVuY3Rpb24gKHByb2dyZXNzLCBtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBtZXRob2QoMSAtIHByb2dyZXNzKTtcbiAgICB9O1xuXG4vKlxuICAgIEVhc2luZyBjbGFzc1xuXG4gICAgSWYgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCByZXR1cm5zIGVhc2luZyBmdW5jdGlvbiB3aXRoIFxuICAgIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5cbiAgICBJZiBwcm92aWRlZCBmb3VyIGFyZ3VtZW50cywgcmV0dXJucyBuZXcgQmV6aWVyIGNsYXNzIGluc3RlYWQuXG4qL1xudmFyIEVhc2luZyA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5Mikge1xuICAgIHZhciBtZXRob2QgPSB4MSxcbiAgICAgICAgZWFzaW5nRnVuY3Rpb247XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgYmV6aWVyIGN1cnZlLCByZXR1cm4gYSBiZXppZXIgZnVuY3Rpb25cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSBuZXcgQmV6aWVyKHgxLCB5MSwgeDIsIHkyKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBlYXNpbmdGdW5jdGlvbi5pbiA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZWFzaW5nRnVuY3Rpb24ub3V0ID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gcmV2ZXJzZUVhc2luZyhwcm9ncmVzcywgbWV0aG9kKTtcbiAgICAgICAgfTtcblxuICAgICAgICBlYXNpbmdGdW5jdGlvbi5pbk91dCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIG1pcnJvckVhc2luZyhwcm9ncmVzcywgbWV0aG9kKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWFzaW5nRnVuY3Rpb247XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVhc2luZztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL3R3ZWVuL0Vhc2luZy5qc1xuICoqLyIsImxldCBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoLFxuICAgIENvbnRyb2xzID0gcmVxdWlyZSgnLi4vY29udHJvbHMvQ29udHJvbHMnKTtcblxuY29uc3QgREVGQVVMVF9QUk9QID0gJ2N1cnJlbnQnO1xuY29uc3QgUFJJVkFURSA9IFsnb25TdGFydCcsICdvbkZyYW1lJywgJ29uVXBkYXRlJywgJ29uQ29tcGxldGUnXTtcblxuY2xhc3MgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcztcblxuICAgICAgICB1dGlscy5lYWNoKHRoaXMuZ2V0RGVmYXVsdFByb3BzKCksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBhY3Rpb25ba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnNldChwcm9wcywgdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCkpO1xuICAgIH1cblxuICAgIHNldChwcm9wcyA9IHt9LCBkZWZhdWx0UHJvcCA9IERFRkFVTFRfUFJPUCkge1xuICAgICAgICBlYWNoKHByb3BzLCAoa2V5LCBwcm9wKSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAndmFsdWVzJykge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1lcmdlIHZhbHVlc1xuICAgICAgICBpZiAocHJvcHMudmFsdWVzKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFZhbHVlcyA9IHRoaXMudmFsdWVzLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHByb3BzLnZhbHVlcztcblxuICAgICAgICAgICAgZWFjaCh2YWx1ZXMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGV4aXN0aW5nVmFsdWUgPSBjdXJyZW50VmFsdWVzW2tleV0sXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0ge307XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IGV4aXN0aW5nVmFsdWUgPyB1dGlscy5tZXJnZShleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSkgOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJvY2VzcyhhY3RvciwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAvKlxuICAgICAgICBIYXMgQWN0aW9uIGVuZGVkP1xuICAgICAgICBcbiAgICAgICAgUmV0dXJucyB0cnVlIHRvIGVuZCBpbW1lZGlldGx5XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogdHJ1ZVxuICAgICovXG4gICAgaGFzRW5kZWQoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAgICAgXG4gICAgbGltaXQob3V0cHV0LCB2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdHJpY3RlZCA9IGNhbGMucmVzdHJpY3RlZChvdXRwdXQsIHZhbHVlLm1pbiwgdmFsdWUubWF4KSxcbiAgICAgICAgICAgIGVzY2FwZUFtcCA9IHZhbHVlLmVzY2FwZUFtcCAhPT0gdW5kZWZpbmVkID8gdmFsdWUuZXNjYXBlQW1wIDogMDtcbiAgICAgICAgcmV0dXJuIHJlc3RyaWN0ZWQgKyAoKG91dHB1dCAtIHJlc3RyaWN0ZWQpICogZXNjYXBlQW1wKTtcbiAgICB9XG5cbiAgICBnZXRDb250cm9scygpIHtcbiAgICAgICAgcmV0dXJuIENvbnRyb2xzO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfVxuXG4gICAgZ2V0U2V0KCkge1xuICAgICAgICB2YXIgc2V0ID0geyB2YWx1ZXM6IHRoaXMudmFsdWVzIH07XG5cbiAgICAgICAgZWFjaCh0aGlzLCAoa2V5LCBwcm9wKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIFBSSVZBVEUuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHNldFtrZXldID0gcHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNldDtcbiAgICB9XG5cbiAgICBleHRlbmQocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHV0aWxzLm1lcmdlKHRoaXMsIHByb3BzKSwgdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCkpO1xuICAgIH1cblxuICAgIGdldFBsYXlhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leHRlbmQoKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFjdGlvbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL0FjdGlvbi5qc1xuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgZWFjaCA9IHV0aWxzLmVhY2gsXG4gICAgcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi90d2Vlbi9wcmVzZXQtZWFzaW5nJyksXG4gICAgdmFsdWVPcHMgPSByZXF1aXJlKCcuLi9hY3Rvci92YWx1ZS1vcGVyYXRpb25zJyksXG4gICAgVHdlZW5Db250cm9scyA9IHJlcXVpcmUoJy4vdHdlZW4vVHdlZW5Db250cm9scycpLFxuXG4gICAgbmV4dFN0ZXBzID0ge1xuICAgICAgICBsb29wOiAncmVzdGFydCcsXG4gICAgICAgIHlveW86ICdyZXZlcnNlJyxcbiAgICAgICAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAxIHByb2dyZXNzXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgICAgICB0byB1c2Ugb3IgZ2VuZXJhdGVkIGVhc2luZyBmdW5jdGlvblxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBvZiBlYXNlZCBwcm9ncmVzcyBpbiByYW5nZVxuICAgICovICBcbiAgICBlYXNlID0gZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzZSkge1xuICAgICAgICB2YXIgcHJvZ3Jlc3NMaW1pdGVkID0gY2FsYy5yZXN0cmljdGVkKHByb2dyZXNzLCAwLCAxKSxcbiAgICAgICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gdXRpbHMuaXNTdHJpbmcoZWFzZSkgPyBwcmVzZXRFYXNpbmdbZWFzZV0gOiBlYXNlO1xuXG4gICAgICAgIHJldHVybiBjYWxjLnZhbHVlRWFzZWQocHJvZ3Jlc3NMaW1pdGVkLCBmcm9tLCB0bywgZWFzaW5nRnVuY3Rpb24pO1xuICAgIH07XG5cbmNvbnN0IENPVU5UID0gJ2NvdW50JztcblxuY2xhc3MgVHdlZW4gZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGdldENvbnRyb2xzKCkge1xuICAgICAgICByZXR1cm4gVHdlZW5Db250cm9scztcbiAgICB9XG4gICAgXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaWxhdGU6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICB5b3lvOiBmYWxzZSxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgcGxheURpcmVjdGlvbjogMSxcbiAgICAgICAgICAgIGVuZGVkOiB0cnVlLFxuICAgICAgICAgICAgZWxhcHNlZDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGVhc2U6ICdlYXNlT3V0JyxcbiAgICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgICBzdGVwczogMCxcbiAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd0byc7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIEFjdGlvbiBlbGFwc2VkIHRpbWVcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaW1lc3RhbXAgb2YgY3VycmVudCBmcmFtZVxuICAgICovXG4gICAgb25GcmFtZVN0YXJ0KGFjdG9yLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZWxhcHNlZCB8fCAwO1xuXG4gICAgICAgIGlmIChmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmVsYXBzZWQgKz0gKGZyYW1lRHVyYXRpb24gKiBhY3Rvci5kaWxhdGUpICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBDYWxjdWxhdGUgcHJvZ3Jlc3Mgb2YgdmFsdWUgYmFzZWQgb24gdGltZSBlbGFwc2VkLFxuICAgICAgICB2YWx1ZSBkZWxheS9kdXJhdGlvbi9zdGFnZ2VyIHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW0FjdG9yXVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIHN0YXRlIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IENhbGN1bGF0ZWQgdmFsdWVcbiAgICAqL1xuICAgIHByb2Nlc3MoYWN0b3IsIHZhbHVlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB2YWx1ZS50byxcbiAgICAgICAgICAgIHByb2dyZXNzVGFyZ2V0ID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAxIDogMCxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWUuY3VycmVudCxcbiAgICAgICAgICAgIHByb2dyZXNzO1xuXG4gICAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGEgdG8gcHJvcGVydHksIG90aGVyd2lzZSB3ZSBqdXN0IHJldHVybiBjdXJyZW50IHZhbHVlXG4gICAgICAgIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvZ3Jlc3MgPSBjYWxjLnJlc3RyaWN0ZWQoY2FsYy5wcm9ncmVzcyh0aGlzLmVsYXBzZWQgLSB2YWx1ZS5kZWxheSwgdmFsdWUuZHVyYXRpb24pIC0gdmFsdWUuc3RhZ2dlciwgMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgQWN0aW9uIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSB1dGlscy5zdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSB2YWx1ZVxuICAgICAgICAgICAgbmV3VmFsdWUgPSBlYXNlKHByb2dyZXNzLCB2YWx1ZS5vcmlnaW4sIHRhcmdldCwgdmFsdWUuZWFzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgSWYgdGhpcyB0d2VlbiBoYXMgZW5kZWQsIGNoZWNrIGlmIHdlIGxvb3AveW95by9mbGlwXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSGFzIHRoaXMgdHdlZW4gcmVhbGx5IHJlYWxseSBlbmRlZD9cbiAgICAqL1xuICAgIGhhc0VuZGVkKGFjdG9yKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICAgICAgICBlYWNoKG5leHRTdGVwcywgKG5hbWUsIG1ldGhvZE5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja05leHRTdGVwKGFjdG9yLCBuYW1lLCB0aGlzW21ldGhvZE5hbWVdKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGFjdG9yLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lbmRlZDtcbiAgICB9XG5cbiAgICBjaGVja05leHRTdGVwKGFjdG9yLCBuYW1lLCBtZXRob2QpIHtcbiAgICAgICAgdmFyIHN0ZXBUYWtlbiA9IGZhbHNlLFxuICAgICAgICAgICAgc3RlcCA9IHRoaXNbbmFtZV0sXG4gICAgICAgICAgICBjb3VudCA9IHRoaXNbbmFtZSArIENPVU5UXSB8fCAwLFxuICAgICAgICAgICAgZm9yZXZlciA9IChzdGVwID09PSB0cnVlKTtcblxuICAgICAgICBpZiAoZm9yZXZlciB8fCB1dGlscy5pc051bShzdGVwKSkge1xuICAgICAgICAgICAgKytjb3VudDtcbiAgICAgICAgICAgIHRoaXNbbmFtZSArIENPVU5UXSA9IGNvdW50O1xuXG4gICAgICAgICAgICBpZiAoZm9yZXZlciB8fCBjb3VudCA8PSBzdGVwKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kLmNhbGwodGhpcywgYWN0b3IpO1xuICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RlcFRha2VuO1xuICAgIH1cblxuICAgIGZsaXBWYWx1ZXMoYWN0b3IpIHtcbiAgICAgICAgdmFyIGFjdG9yVmFsdWVzID0gYWN0b3IudmFsdWVzO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgICAgIGVhY2godGhpcy52YWx1ZXMsIChrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGFjdG9yVmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGVhY2godmFsdWUuY2hpbGRyZW4sIChjaGlsZEtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZU9wcy5mbGlwKGFjdG9yVmFsdWVzW2tleSArIGNoaWxkS2V5XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlT3BzLmZsaXAodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW47XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9Ud2Vlbi5qc1xuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgc2ltdWxhdGlvbnMgPSByZXF1aXJlKCcuL3NpbXVsYXRlL3NpbXVsYXRpb25zJyk7XG5cbmNvbnN0IERFRkFVTFRfUFJPUCA9ICd2ZWxvY2l0eSc7XG5cbmNsYXNzIFNpbXVsYXRlIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1heEluYWN0aXZlRnJhbWVzOiAzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gW3N0cmluZ106IFNpbXVsYXRpb24gdG8gLnJ1blxuICAgICAgICAgICAgc2ltdWxhdGU6IERFRkFVTFRfUFJPUCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IERlY2VsZXJhdGlvbiB0byBhcHBseSB0byB2YWx1ZSwgaW4gdW5pdHMgcGVyIHNlY29uZFxuICAgICAgICAgICAgZGVjZWxlcmF0aW9uOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgICAgICAgICBhY2NlbGVyYXRpb246IDAsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgICAgICAgICBib3VuY2U6IDAsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBTcHJpbmcgc3RyZW5ndGggZHVyaW5nICdzdHJpbmcnXG4gICAgICAgICAgICBzcHJpbmc6IDgwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogVGltZWNvbnN0YW50IG9mIGdsaWRlXG4gICAgICAgICAgICB0aW1lQ29uc3RhbnQ6IDM5NSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gICAgICAgICAgICBzdG9wU3BlZWQ6IDUsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtib29sZWFuXTogQ2FwdHVyZSB3aXRoIHNwcmluZyBwaHlzaWNzIG9uIGxpbWl0IGJyZWFjaFxuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWVcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfVxuXG4gICAgb25TdGFydCgpIHtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICB9XG4gICAgXG4gICAgLypcbiAgICAgICAgU2ltdWxhdGUgdGhlIFZhbHVlJ3MgcGVyLWZyYW1lIG1vdmVtZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW0FjdG9yXVxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSBvZiBjdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRHVyYXRpb24gb2YgZnJhbWUgaW4gbXNcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZVxuICAgICovXG4gICAgcHJvY2VzcyhhY3RvciwgdmFsdWUsIGtleSwgdGltZVNpbmNlTGFzdEZyYW1lKSB7XG4gICAgICAgIHZhciBzaW11bGF0ZSA9IHZhbHVlLnNpbXVsYXRlLFxuICAgICAgICAgICAgc2ltdWxhdGlvbiA9IHV0aWxzLmlzU3RyaW5nKHNpbXVsYXRlKSA/IHNpbXVsYXRpb25zW3NpbXVsYXRlXSA6IHNpbXVsYXRlLFxuICAgICAgICAgICAgbmV3VmVsb2NpdHkgPSBzaW11bGF0aW9uID8gc2ltdWxhdGlvbih2YWx1ZSwgdGltZVNpbmNlTGFzdEZyYW1lLCB0aGlzLnN0YXJ0ZWQpIDogMDtcblxuICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IChNYXRoLmFicyhuZXdWZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkKSA/IG5ld1ZlbG9jaXR5IDogMDtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmN1cnJlbnQgKyBjYWxjLnNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIHRpbWVTaW5jZUxhc3RGcmFtZSk7XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgICAgIEhhcyB0aGlzIGFjdGlvbiBlbmRlZD9cbiAgICAgICAgXG4gICAgICAgIFVzZSBhIGZyYW1lY291bnRlciB0byBzZWUgaWYgQWN0aW9uIGhhcyBjaGFuZ2VkIGluIHRoZSBsYXN0IHggZnJhbWVzXG4gICAgICAgIGFuZCBkZWNsYXJlIGVuZGVkIGlmIG5vdFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogSGFzIEFjdGlvbiBjaGFuZ2VkP1xuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSGFzIEFjdGlvbiBlbmRlZD9cbiAgICAqL1xuICAgIGhhc0VuZGVkKGFjdG9yLCBoYXNDaGFuZ2VkKSB7XG4gICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSBoYXNDaGFuZ2VkID8gMCA6IHRoaXMuaW5hY3RpdmVGcmFtZXMgKyAxO1xuICAgICAgICByZXR1cm4gKHRoaXMuaW5hY3RpdmVGcmFtZXMgPiBhY3Rvci5tYXhJbmFjdGl2ZUZyYW1lcyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTGltaXQgb3V0cHV0IHRvIHZhbHVlIHJhbmdlLCBpZiBhbnlcbiAgICAgICAgXG4gICAgICAgIElmIHZlbG9jaXR5IGlzIGF0IG9yIG1vcmUgdGhhbiByYW5nZSwgYW5kIHZhbHVlIGhhcyBhIGJvdW5jZSBwcm9wZXJ0eSxcbiAgICAgICAgcnVuIHRoZSBib3VuY2Ugc2ltdWxhdGlvblxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDYWxjdWxhdGVkIG91dHB1dFxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCBWYWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBMaW1pdC1hZGp1c3RlZCBvdXRwdXRcbiAgICAqL1xuICAgIGxpbWl0KG91dHB1dCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGlzT3V0c2lkZU1heCA9IChvdXRwdXQgPj0gdmFsdWUubWF4KSxcbiAgICAgICAgICAgIGlzT3V0c2lkZU1pbiA9IChvdXRwdXQgPD0gdmFsdWUubWluKSxcbiAgICAgICAgICAgIGlzT3V0c2lkZVJhbmdlID0gaXNPdXRzaWRlTWF4IHx8IGlzT3V0c2lkZU1pbjtcblxuICAgICAgICBpZiAoaXNPdXRzaWRlUmFuZ2UpIHtcbiAgICAgICAgICAgIG91dHB1dCA9IGNhbGMucmVzdHJpY3RlZChvdXRwdXQsIHZhbHVlLm1pbiwgdmFsdWUubWF4KTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlLmJvdW5jZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc2ltdWxhdGlvbnMuYm91bmNlKHZhbHVlKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5jYXB0dXJlKSB7XG4gICAgICAgICAgICAgICAgc2ltdWxhdGlvbnMuY2FwdHVyZSh2YWx1ZSwgaXNPdXRzaWRlTWF4ID8gdmFsdWUubWF4IDogdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2ltdWxhdGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9TaW11bGF0ZS5qc1xuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbicpLFxuICAgIFBvaW50ZXIgPSByZXF1aXJlKCcuLi9pbnB1dC9Qb2ludGVyJyksXG4gICAgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIHNtb290aChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uLCBzbW9vdGhpbmcpIHtcbiAgICByZXR1cm4gb2xkVmFsdWUgKyAoZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBzbW9vdGhpbmcpO1xufVxuXG5jbGFzcyBUcmFjayBleHRlbmRzIEFjdGlvbiB7XG4gICAgLypcbiAgICAgICAgVXBkYXRlIGlucHV0IG9mZnNldFxuICAgICovXG4gICAgb25GcmFtZVN0YXJ0KGFjdG9yLCBmcmFtZUR1cmF0aW9uLCBmcmFtZXN0YW1wKSB7XG4gICAgICAgIGFjdG9yLnN0YXRlLmlucHV0ID0gdGhpcy5pbnB1dC5vbkZyYW1lKGZyYW1lc3RhbXApO1xuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0gY2FsYy5vZmZzZXQodGhpcy5pbnB1dE9yaWdpbiwgdGhpcy5pbnB1dC5jdXJyZW50KTtcbiAgICAgICAgdGhpcy5mcmFtZUR1cmF0aW9uID0gZnJhbWVEdXJhdGlvbjtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBNb3ZlIFZhbHVlIHJlbGF0aXZlIHRvIElucHV0IG1vdmVtZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSBvZiBjdXJyZW50IHZhbHVlXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IENhbGN1bGF0ZWQgdmFsdWVcbiAgICAqL1xuICAgIHByb2Nlc3MoYWN0b3IsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdmFsdWUuY3VycmVudCxcbiAgICAgICAgICAgIHVubWFwcGVkID0gdmFsdWUudW5tYXBwZWQgIT09IHVuZGVmaW5lZCA/IHZhbHVlLnVubWFwcGVkIDogdmFsdWUuY3VycmVudDtcblxuICAgICAgICBpZiAodGhpcy5pbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9ICh2YWx1ZS5kaXJlY3QpID8gdGhpcy5pbnB1dC5jdXJyZW50W2tleV0gOiB2YWx1ZS5vcmlnaW4gKyAodGhpcy5pbnB1dE9mZnNldFtrZXldICogdmFsdWUuYW1wKTtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gKHZhbHVlLnNtb290aCkgPyBzbW9vdGgobmV3VmFsdWUsIHVubWFwcGVkLCB0aGlzLmZyYW1lRHVyYXRpb24sIHZhbHVlLnNtb290aCkgOiBuZXdWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBIYXMgdGhpcyBBY3Rpb24gZW5kZWQ/IFxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IEZhbHNlIHRvIG1ha2UgdXNlciBtYW51YWxseSBmaW5pc2ggLnRyYWNrKClcbiAgICAqL1xuICAgIGhhc0VuZGVkKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgYmluZElucHV0KGlucHV0KSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSAoIWlucHV0LmN1cnJlbnQpID8gbmV3IFBvaW50ZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgICAgIHRoaXMuaW5wdXRPcmlnaW4gPSB0aGlzLmlucHV0LmdldCgpO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFtcDogMSxcbiAgICAgICAgICAgIGRpcmVjdDogZmFsc2UsXG4gICAgICAgICAgICBzbW9vdGg6IDBcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhY2s7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9UcmFjay5qc1xuICoqLyIsInZhciBBY3RvciA9IHJlcXVpcmUoJy4uL2FjdG9yL0FjdG9yJyksXG4gICAgSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pdGVyYXRvci9JdGVyYXRvcicpLFxuICAgIHNlbGVjdERvbSA9IHJlcXVpcmUoJy4vc2VsZWN0LWRvbScpO1xuXG5jb25zdCBTQVZFX1BST1AgPSAnX19wbV9hY3Rvcl8nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgb3B0cyA9IHt9KSB7XG4gICAgdmFyIGRvbSA9IHNlbGVjdERvbShzZWxlY3RvciksXG4gICAgICAgIGFjdG9ycyA9IFtdO1xuXG4gICAgZG9tLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgbGV0IGFjdG9yID0gZWxlbWVudFtTQVZFX1BST1BdO1xuXG4gICAgICAgIGlmICghYWN0b3IpIHtcbiAgICAgICAgICAgIG9wdHMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBhY3RvciA9IGVsZW1lbnRbU0FWRV9QUk9QXSA9IG5ldyBBY3RvcihvcHRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdG9ycy5wdXNoKGFjdG9yKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoYWN0b3JzLmxlbmd0aCA+IDEpID8gbmV3IEl0ZXJhdG9yKGFjdG9ycykgOiBhY3RvcnNbMF07XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5jL3NlbGVjdC1hY3Rvci5qc1xuICoqLyIsIi8qXG4gICAgQ2FsY3VsYXRvcnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgU2ltcGxlIEkvTyBzbmlwcGV0c1xuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyksXG5cbiAgICBjYWxjID0ge1xuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICAgICAgICAgICAgYXJlIGF0IDAsMCwgdGhlbiByZXR1cm4gdGhlIGFuZ2xlIHVzaW5nIC5hbmdsZUZyb21DZW50ZXIoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgICAgICAgICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuICAgICAgICAqL1xuICAgICAgICBhbmdsZTogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgICAgICB2YXIgZnJvbSA9IHBvaW50QiA/IHBvaW50QSA6IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgICAgICB0byA9IHBvaW50QiB8fCBwb2ludEEsXG4gICAgICAgICAgICAgICAgcG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHRvLnggLSBmcm9tLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRvLnkgLSBmcm9tLnlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbmdsZUZyb21DZW50ZXIocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIEFuZ2xlIGZyb20gY2VudGVyXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGN1cnJlbnQgYW5nbGUsIGluIHJhZGlhbnMsIG9mIGEgZGVmaW5lZCBwb2ludFxuICAgICAgICAgICAgZnJvbSBhIGNlbnRlciAoYXNzdW1lZCAwLDApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogWCBjb29yZGluYXRlIG9mIHNlY29uZCBwb2ludFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBZIGNvb3JkaW5hdGUgb2Ygc2Vjb25kIHBvaW50XG4gICAgICAgICAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIDAsIDAgYW5kIHBvaW50IGluIHJhZGlhbnNcbiAgICAgICAgKi9cbiAgICAgICAgYW5nbGVGcm9tQ2VudGVyOiBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKHksIHgpKTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgICAgICAgKi9cbiAgICAgICAgZGVncmVlc1RvUmFkaWFuczogZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgRGlsYXRlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGEgLS0tLS0tLS0tIGJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYSAtLS0tIGJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiAgICAgICAgKi9cbiAgICAgICAgZGlsYXRlOiBmdW5jdGlvbiAoYSwgYiwgZGlsYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBhICsgKChiIC0gYSkgKiBkaWxhdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIERpc3RhbmNlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gKDAsMCkgYW5kIHBvaW50QSwgdW5sZXNzIHBvaW50QlxuICAgICAgICAgICAgaXMgcHJvdmlkZWQsIHRoZW4gd2UgcmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHR3by5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgZGlzdGFuY2U6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgcG9pbnRBID09PSBcIm51bWJlclwiKSA/IHRoaXMuZGlzdGFuY2UxRChwb2ludEEsIHBvaW50QikgOiB0aGlzLmRpc3RhbmNlMkQocG9pbnRBLCBwb2ludEIpO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRGlzdGFuY2UgMURcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiBwb2ludCBBIGFuZCBwb2ludCBCXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUG9pbnQgQVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiAob3B0aW9uYWwpOiBQb2ludCBCXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICAgICAqL1xuICAgICAgICBkaXN0YW5jZTFEOiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgICAgIHZhciBiSXNOdW0gPSAodHlwZW9mIHBvaW50QiA9PT0gJ251bWJlcicpLFxuICAgICAgICAgICAgICAgIGZyb20gPSBiSXNOdW0gPyBwb2ludEEgOiAwLFxuICAgICAgICAgICAgICAgIHRvID0gYklzTnVtID8gcG9pbnRCIDogcG9pbnRBO1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIGFic29sdXRlKHRvIC0gZnJvbSk7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIERpc3RhbmNlIDJEXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gKDAsMCkgYW5kIHBvaW50IEEsIHVubGVzcyBwb2ludCBCXG4gICAgICAgICAgICBpcyBwcm92aWRlZCwgdGhlbiB3ZSByZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdHdvLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IHggYW5kIHkgb2YgcG9pbnQgQVxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9mIHBvaW50IEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gICAgICAgICovXG4gICAgICAgIGRpc3RhbmNlMkQ6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAgICAgdmFyIGJJc09iaiA9ICh0eXBlb2YgcG9pbnRCID09PSBcIm9iamVjdFwiKSxcbiAgICAgICAgICAgICAgICBmcm9tID0gYklzT2JqID8gcG9pbnRBIDoge3g6IDAsIHk6IDB9LFxuICAgICAgICAgICAgICAgIHRvID0gYklzT2JqID8gcG9pbnRCIDogcG9pbnRBLFxuICAgICAgICAgICAgICAgIHBvaW50ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBhYnNvbHV0ZSh0by54IC0gZnJvbS54KSxcbiAgICAgICAgICAgICAgICAgICAgeTogYWJzb2x1dGUodG8ueSAtIGZyb20ueSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHlwb3RlbnVzZShwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgSHlwb3RlbnVzZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBoeXBvdGVudXNlLCBzaWRlIEMsIGdpdmVuIHRoZSBsZW5ndGhzIG9mIHNpZGVzIEEgYW5kIEIuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4gICAgICAgICovXG4gICAgICAgIGh5cG90ZW51c2U6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICB2YXIgYTIgPSBhICogYSxcbiAgICAgICAgICAgICAgICBiMiA9IGIgKiBiLFxuICAgICAgICAgICAgICAgIGMyID0gYTIgKyBiMjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoYzIpO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIE9mZnNldCBiZXR3ZWVuIHR3byBpbnB1dHNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQ2FsY3VsYXRlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIGRpZmZlcmVudCBpbnB1dHNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IGlucHV0XG4gICAgICAgICAgICBAcGFyYW0gW1BvaW50XTogU2Vjb25kIGlucHV0XG4gICAgICAgICAgICBAcmV0dXJuIFtPZmZzZXRdOiBEaXN0YW5jZSBtZXRyaWNzIGJldHdlZW4gdHdvIHBvaW50c1xuICAgICAgICAqL1xuICAgICAgICBvZmZzZXQ6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0ge307XG4gICAgXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgICAgICAgICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0W2tleV0gPSBiW2tleV0gLSBhW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRba2V5XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNOdW0ob2Zmc2V0LngpICYmIGlzTnVtKG9mZnNldC55KSkge1xuICAgICAgICAgICAgICAgIG9mZnNldC5hbmdsZSA9IHRoaXMuYW5nbGUoYSwgYik7XG4gICAgICAgICAgICAgICAgb2Zmc2V0LmRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZTJEKGEsIGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICAgICAgICAgICAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuICAgICAgICAqL1xuICAgICAgICBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlOiBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgICAgICAgICAgIHZhciBwb2ludCA9IHt9O1xuICAgIFxuICAgIFx0XHRwb2ludC54ID0gZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueDtcbiAgICAgICAgICAgIHBvaW50LnkgPSBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55O1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gICAgICAgICAgICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgICAgICAgICAgIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBpZiBmdWxsIHJhbmdlIGdpdmVuLCB1cHBlciBpZiBub3RcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgKi9cbiAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uICh2YWx1ZSwgbGltaXRBLCBsaW1pdEIpIHtcbiAgICAgICAgICAgIHZhciBiSXNOdW0gPSAodHlwZW9mIGxpbWl0QiA9PT0gJ251bWJlcicpLFxuICAgICAgICAgICAgICAgIGZyb20gPSBiSXNOdW0gPyBsaW1pdEEgOiAwLFxuICAgICAgICAgICAgICAgIHRvID0gYklzTnVtID8gbGltaXRCIDogbGltaXRBLFxuICAgICAgICAgICAgICAgIHJhbmdlID0gdG8gLSBmcm9tLFxuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gKHZhbHVlIC0gZnJvbSkgLyByYW5nZTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBwcm9ncmVzcztcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgICAgICAgKi9cbiAgICAgICAgcmFkaWFuc1RvRGVncmVlczogZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgICAgICAgICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgUmV0dXJuIHJhbmRvbSBudW1iZXIgYmV0d2VlbiByYW5nZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWF4aW11bVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuICAgICAgICAqL1xuICAgICAgICByYW5kb206IGZ1bmN0aW9uIChtaW4gPSAwLCBtYXggPSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gICAgICAgICAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICAgICAgKi9cbiAgICAgICAgcmVsYXRpdmVWYWx1ZTogZnVuY3Rpb24gKGN1cnJlbnQsIHJlbCkge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gY3VycmVudCxcbiAgICAgICAgICAgICAgICBlcXVhdGlvbiA9IHJlbC5zcGxpdCgnPScpLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yID0gZXF1YXRpb25bMF0sXG4gICAgICAgICAgICAgICAgc3BsaXRWYWwgPSB1dGlscy5zcGxpdFZhbFVuaXQoZXF1YXRpb25bMV0pO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlICs9IHNwbGl0VmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgLT0gc3BsaXRWYWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSAqPSBzcGxpdFZhbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlIC89IHNwbGl0VmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHNwbGl0VmFsLnVuaXQpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSArPSBzcGxpdFZhbC51bml0O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgICAgICB9LFxuICAgIFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICAgICAqL1xuICAgICAgICByZXN0cmljdGVkOiBmdW5jdGlvbiAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgICAgICAgICB2YXIgcmVzdHJpY3RlZCA9IChtaW4gIT09IHVuZGVmaW5lZCkgPyBNYXRoLm1heCh2YWx1ZSwgbWluKSA6IHZhbHVlO1xuICAgICAgICAgICAgcmVzdHJpY3RlZCA9IChtYXggIT09IHVuZGVmaW5lZCkgPyBNYXRoLm1pbihyZXN0cmljdGVkLCBtYXgpIDogcmVzdHJpY3RlZDtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiByZXN0cmljdGVkO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuICAgICAgICAqL1xuICAgICAgICBzcGVlZFBlckZyYW1lOiBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4gICAgICAgICovXG4gICAgICAgIHNwZWVkUGVyU2Vjb25kOiBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG4gICAgICAgIH0sXG4gICAgXG4gICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICAgICAgICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2UsIG9yIHVwcGVyIGlmIGxpbWl0MiBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHByb2dyZXNzLCBsaW1pdEEsIGxpbWl0Qikge1xuICAgICAgICAgICAgdmFyIGJJc051bSA9ICh0eXBlb2YgbGltaXRCID09PSAnbnVtYmVyJyksXG4gICAgICAgICAgICAgICAgZnJvbSA9IGJJc051bSA/IGxpbWl0QSA6IDAsXG4gICAgICAgICAgICAgICAgdG8gPSBiSXNOdW0gPyBsaW1pdEIgOiBsaW1pdEE7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gKC0gcHJvZ3Jlc3MgKiBmcm9tKSArIChwcm9ncmVzcyAqIHRvKSArIGZyb207IFxuICAgICAgICB9LFxuICAgIFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRWFzZWQgdmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICAgICAgICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2UsIG9yIHVwcGVyIGlmIGxpbWl0MiBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBFYXNpbmcgdG8gYXBwbHkgdG8gdmFsdWVcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiAgICAgICAgKi9cbiAgICAgICAgdmFsdWVFYXNlZDogZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzaW5nKSB7XG4gICAgICAgICAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IGVhc2luZyhwcm9ncmVzcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBDYWNoaW5nIGZ1bmN0aW9ucyB1c2VkIG11bHRpcGxlIHRpbWVzIHRvIHJlZHVjZSBmaWxlc2l6ZSBhbmQgaW5jcmVhc2UgcGVyZm9ybWFuY2VcbiAgICAqL1xuICAgIGlzTnVtID0gdXRpbHMuaXNOdW0sXG4gICAgYWJzb2x1dGUgPSBNYXRoLmFicztcbiAgICBcbm1vZHVsZS5leHBvcnRzID0gY2FsYztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmMvY2FsYy5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApIHtcbiAgICB2YXIgY29tYmluZWQgPSAnJyxcbiAgICAgICAga2V5ID0gJycsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcblxuICAgIGZvciAoOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgICBrZXkgPSB0ZXJtc1tpXTtcblxuICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbWJpbmVkICs9IHZhbHVlc1trZXldICsgZGVsaW1pdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZC5qc1xuICoqLyIsInZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9zcGxpdC1jb21tYS1kZWxpbWl0ZWQnKSxcbiAgICBmdW5jdGlvbkJyZWFrID0gcmVxdWlyZSgnLi9mdW5jdGlvbi1icmVhaycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgdGVybXMpIHtcbiAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9LFxuICAgICAgICBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aCxcbiAgICAgICAgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChmdW5jdGlvbkJyZWFrKHZhbHVlKSksXG4gICAgICAgIGkgPSAwO1xuXG4gICAgZm9yICg7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICAgIHNwbGl0VmFsdWVbdGVybXNbaV1dID0gKGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yc1tpXSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwbGl0VmFsdWU7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggKyAnKCcgKyB2YWx1ZSArICcpJztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWNyZWF0ZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjb2xvcjoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMjU1LFxuICAgICAgICByb3VuZDogdHJ1ZVxuICAgIH0sXG4gICAgb3BhY2l0eToge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMVxuICAgIH0sXG4gICAgcGVyY2VudDoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMTAwLFxuICAgICAgICB1bml0OiAnJSdcbiAgICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGVmYXVsdC1wcm9wcy5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgWCA9ICdYJyxcbiAgICBZID0gJ1knLFxuICAgIEFMUEhBID0gJ0FscGhhJyxcblxuICAgIHRlcm1zID0ge1xuICAgICAgICBjb2xvcnM6IFsnUmVkJywgJ0dyZWVuJywgJ0JsdWUnLCBBTFBIQV0sXG4gICAgICAgIHBvc2l0aW9uczogW1gsIFksICdaJ10sXG4gICAgICAgIGRpbWVuc2lvbnM6IFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0J10sXG4gICAgICAgIHNoYWRvdzogW1gsIFksICdSYWRpdXMnLCAnU3ByZWFkJywgJ0NvbG9yJ10sXG4gICAgICAgIGhzbDogWydIdWUnLCAnU2F0dXJhdGlvbicsICdMaWdodG5lc3MnLCBBTFBIQV1cbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRlcm1zO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanNcbiAqKi8iLCIvKlxuICAgIFV0aWxpdHkgZnVuY3Rpb25zXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBwcm90ZWN0ZWRQcm9wZXJ0aWVzID0gWydzY29wZScsICAnZG9tJ10sXG4gICAgXG4gICAgaXNQcm90ZWN0ZWQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiAocHJvdGVjdGVkUHJvcGVydGllcy5pbmRleE9mKGtleSkgIT09IC0xKTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgR2V0IHZhciB0eXBlIGFzIHN0cmluZ1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW3N0cmluZ106IFJldHVybnMsIGZvciBpbnN0YW5jZSAnT2JqZWN0JyBpZiBbb2JqZWN0IE9iamVjdF1cbiAgICAqL1xuICAgIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLypcbiAgICAgICAgSXRlcmF0ZSBvdmVyIGFuIG9iamVjdCBhbmQgZmlyZSBhIGNhbGxiYWNrIGZvciBldmVyeSBpdGVtIGluIGl0XG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBQcm9wZXJ0aWVzXG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBmaXJlXG4gICAgKi9cbiAgICBlYWNoOiBmdW5jdGlvbiAocHJvcHMsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpLFxuICAgICAgICAgICAgbnVtS2V5cyA9IGtleXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tpXSxcbiAgICAgICAgICAgICAgICBwcm9wID0gcHJvcHNba2V5XTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGtleSwgcHJvcCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEhhcyBvbmUgb2JqZWN0IGNoYW5nZWQgZnJvbSB0aGUgb3RoZXJcbiAgICAgICAgXG4gICAgICAgIENvbXBhcmVzIHRoZSB0d28gcHJvdmlkZWQgaW5wdXRzIGFuZCByZXR1cm5zIHRydWUgaWYgdGhleSBhcmUgZGlmZmVyZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEFcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBCXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuICAgICovXG4gICAgaGFzQ2hhbmdlZDogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGtleSA9ICcnO1xuXG4gICAgICAgIGZvciAoa2V5IGluIGIpIHtcbiAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KGtleSkgJiYgYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIGhhc0NoYW5nZWQ7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhIG51bWJlcj9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiAgICAqL1xuICAgIGlzTnVtOiBmdW5jdGlvbiAobnVtKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIG51bSA9PT0gJ251bWJlcicpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYW4gb2JqZWN0P1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuICAgICovXG4gICAgaXNPYmo6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jyk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0aGlzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiAgICAqL1xuICAgIGlzRnVuYzogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gKHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJyk7IFxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYSBzdHJpbmcgPyBcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4gICAgKi9cbiAgICBpc1N0cmluZzogZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKTsgXG4gICAgfSxcblxuXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnQ/XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IElmIHRoaXMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiAgICAqL1xuICAgIGlzUmVsYXRpdmVWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGFuIGFycmF5ID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0aGlzLnZhclR5cGUgPT09ICdBcnJheSdcbiAgICAqL1xuICAgIGlzQXJyYXk6IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgcmV0dXJuICh2YXJUeXBlKGFycikgPT09ICdBcnJheScpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQ29weSBvYmplY3Qgb3IgYXJyYXlcbiAgICAgICAgXG4gICAgICAgIENoZWNrcyB3aGV0aGVyIGJhc2UgaXMgYW4gYXJyYXkgb3Igb2JqZWN0IGFuZCBtYWtlc1xuICAgICAgICBhcHByb3ByaWF0ZSBjb3B5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byBjb3B5XG4gICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogTmV3IGNvcHkgb2YgYXJyYXkgb3Igb2JqZWN0XG4gICAgKi9cbiAgICBjb3B5OiBmdW5jdGlvbiAoYmFzZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuaXNBcnJheShiYXNlKSkgPyB0aGlzLmNvcHlBcnJheShiYXNlKSA6IHRoaXMuY29weU9iamVjdChiYXNlKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIERlZXAgY29weSBhbiBvYmplY3RcbiAgICAgICAgXG4gICAgICAgIEl0ZXJhdGVzIG92ZXIgYW4gb2JqZWN0IGFuZCBjcmVhdGVzIGEgbmV3IGNvcHkgb2YgZXZlcnkgaXRlbSxcbiAgICAgICAgZGVlcCBjb3B5aW5nIGlmIGl0IGZpbmRzIGFueSBvYmplY3RzL2FycmF5c1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gY29weVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IE5ldyBjb3B5IG9mIG9iamVjdFxuICAgICovXG4gICAgY29weU9iamVjdDogZnVuY3Rpb24gKGJhc2UpIHtcbiAgICAgICAgdmFyIG5ld09iamVjdCA9IHt9O1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGJhc2UpIHtcbiAgICAgICAgICAgIGlmIChiYXNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9ICh0aGlzLmlzT2JqKGJhc2Vba2V5XSkgJiYgIWlzUHJvdGVjdGVkKGtleSkpID8gdGhpcy5jb3B5KGJhc2Vba2V5XSkgOiBiYXNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdPYmplY3Q7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEZWVwIGNvcHkgYW4gYXJyYXlcbiAgICAgICAgXG4gICAgICAgIExvb3BzIHRocm91Z2ggYW4gYXJyYXkgYW5kIGNyZWF0ZXMgYSBuZXcgY29weSBvZiBldmVyeSBpdGVtLFxuICAgICAgICBkZWVwIGNvcHlpbmcgaWYgaXQgZmluZHMgYW55IG9iamVjdHMvYXJyYXlzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5XTogQXJyYXkgdG8gY29weVxuICAgICAgICBAcmV0dXJuIFthcnJheV06IE5ldyBjb3B5IG9mIGFycmF5XG4gICAgKi9cbiAgICBjb3B5QXJyYXk6IGZ1bmN0aW9uIChiYXNlKSB7XG4gICAgICAgIHZhciBuZXdBcnJheSA9IFtdLFxuICAgICAgICAgICAgbGVuZ3RoID0gYmFzZS5sZW5ndGgsXG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgXG4gICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5ld0FycmF5W2ldID0gYmFzZVtpXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgTm9uLWRlc3RydWN0aXZlIG1lcmdlIG9mIG9iamVjdCBvciBhcnJheVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBBcnJheSBvciBvYmplY3QgdG8gdXNlIGFzIGJhc2VcbiAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBBcnJheSBvciBvYmplY3QgdG8gb3ZlcndyaXRlIGJhc2Ugd2l0aFxuICAgICAgICBAcmV0dXJuIFthcnJheSB8fCBvYmplY3RdOiBOZXcgYXJyYXkgb3Igb2JqZWN0XG4gICAgKi9cbiAgICBtZXJnZTogZnVuY3Rpb24gKGJhc2UsIG92ZXJ3cml0ZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuaXNBcnJheShiYXNlKSkgPyB0aGlzLmNvcHlBcnJheShvdmVyd3JpdGUpIDogdGhpcy5tZXJnZU9iamVjdChiYXNlLCBvdmVyd3JpdGUpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgTm9uLWRlc3RydWN0aXZlIG1lcmdlIG9mIG9iamVjdFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gdXNlIGFzIGJhc2VcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gb3ZlcndyaXRlIGJhc2Ugd2l0aFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBOZXcgb2JqZWN0XG4gICAgKi9cbiAgICBtZXJnZU9iamVjdDogZnVuY3Rpb24gKGJhc2UsIG92ZXJ3cml0ZSkge1xuICAgICAgICB2YXIgaGFzQmFzZSA9IHRoaXMuaXNPYmooYmFzZSksXG4gICAgICAgICAgICBuZXdPYmplY3QgPSBoYXNCYXNlID8gdGhpcy5jb3B5KGJhc2UpIDogdGhpcy5jb3B5KG92ZXJ3cml0ZSksXG4gICAgICAgICAgICBrZXkgPSAnJztcblxuICAgICAgICBpZiAoaGFzQmFzZSkge1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gb3ZlcndyaXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJ3cml0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gKHRoaXMuaXNPYmoob3ZlcndyaXRlW2tleV0pICYmICFpc1Byb3RlY3RlZChrZXkpKSA/IHRoaXMubWVyZ2UoYmFzZVtrZXldLCBvdmVyd3JpdGVba2V5XSkgOiBvdmVyd3JpdGVba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld09iamVjdDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gICAgICAgIFxuICAgICAgICAgICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICAgICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4gICAgKi9cbiAgICBzcGxpdFZhbFVuaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBsZXQgc3BsaXRWYWwgPSB2YWx1ZS5tYXRjaCgvKC0/XFxkKlxcLj9cXGQqKSguKikvKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHNwbGl0VmFsWzFdLFxuICAgICAgICAgICAgdW5pdDogIHNwbGl0VmFsWzJdXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuICAgICovXG4gICAgc3RlcFByb2dyZXNzOiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0ZXBzKSB7XG4gICAgICAgIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpLFxuICAgICAgICAgICAgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpLFxuICAgICAgICAgICAgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiAgICAqL1xuICAgIGN1cnJlbnRUaW1lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIikgPyBwZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cbiAgICBcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQuanNcbiAqKi8iLCJ2YXIgU1RST0tFID0gJ3N0cm9rZSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG9wYWNpdHk6IFNUUk9LRSArICctb3BhY2l0eScsXG4gICAgd2lkdGg6IFNUUk9LRSArICctd2lkdGgnLFxuICAgIG1pdGVybGltaXQ6IFNUUk9LRSArICctbWl0ZXJsaW1pdCdcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvcGF0aC9tYXAuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoLFxuICAgIHRyYW5zZm9ybURpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1kaWN0aW9uYXJ5JyksXG4gICAgdHJhbnNmb3JtUHJvcHMgPSB0cmFuc2Zvcm1EaWN0aW9uYXJ5LnByb3BzLFxuXG4gICAgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG91dHB1dCwgY2FjaGUpIHtcbiAgICB2YXIgY3NzID0ge30sXG4gICAgICAgIHRyYW5zZm9ybSA9ICcnLFxuICAgICAgICB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG4gICAgICAgIFxuICAgIC8vIExvb3AgdGhyb3VnaCBvdXRwdXQsIGNoZWNrIGZvciB0cmFuc2Zvcm0gcHJvcGVydGllc1xuICAgIGVhY2gob3V0cHV0LCBmdW5jdGlvbiAoa2V5LCBydWxlKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSB0cmFuc2Zvcm0gcHJvcGVydHksIGFkZCB0byB0cmFuc2Zvcm0gc3RyaW5nXG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gKz0ga2V5ICsgJygnICsgcnVsZSArICcpJztcbiAgICAgICAgICAgIHRyYW5zZm9ybUhhc1ogPSAoa2V5ID09PSBUUkFOU0xBVEVfWikgPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIGp1c3QgYXNzaWduIGRpcmVjdGx5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocnVsZSAhPT0gY2FjaGVba2V5XSkge1xuICAgICAgICAgICAgICAgIGNhY2hlW2tleV0gPSBjc3Nba2V5XSA9IHJ1bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIElmIHdlIGhhdmUgdHJhbnNmb3JtIHByb3BlcnRpZXMsIGFkZCB0cmFuc2xhdGVaXG4gICAgaWYgKHRyYW5zZm9ybSAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gKz0gJyAnICsgVFJBTlNMQVRFX1ogKyAnKDBweCknO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYW5zZm9ybSAhPT0gY2FjaGUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICBjc3MudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjYWNoZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvY3NzL2J1aWxkLmpzXG4gKiovIiwidmFyIFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gICAgeTogVFJBTlNMQVRFICsgJ1knLFxuICAgIHo6IFRSQU5TTEFURSArICdaJ1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9jc3MvbWFwLmpzXG4gKiovIiwidmFyIENPTE9SID0gJ2NvbG9yJyxcbiAgICBQT1NJVElPTlMgPSAncG9zaXRpb25zJyxcbiAgICBESU1FTlNJT05TID0gJ2RpbWVuc2lvbnMnLFxuICAgIFNIQURPVyA9ICdzaGFkb3cnLFxuICAgIEFOR0xFID0gJ2FuZ2xlJyxcbiAgICBBTFBIQSA9ICdhbHBoYScsXG4gICAgUFggPSAncHgnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBDb2xvciBwcm9wZXJ0aWVzXG4gICAgY29sb3I6IENPTE9SLFxuICAgIGJhY2tncm91bmRDb2xvcjogQ09MT1IsXG4gICAgb3V0bGluZUNvbG9yOiBDT0xPUixcbiAgICBmaWxsOiBDT0xPUixcbiAgICBzdHJva2U6IENPTE9SLFxuICAgIC8vIEJvcmRlclxuICAgIGJvcmRlckNvbG9yOiBDT0xPUixcbiAgICBib3JkZXJUb3BDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IENPTE9SLFxuICAgIGJvcmRlckxlZnRDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyUmFkaXVzOiBQWCxcbiAgICAvLyBEaW1lbnNpb25zXG4gICAgbWFyZ2luOiBESU1FTlNJT05TLFxuICAgIHBhZGRpbmc6IERJTUVOU0lPTlMsXG4gICAgd2lkdGg6IFBYLFxuICAgIGhlaWdodDogUFgsICAgIFxuICAgIC8vIFBvc2l0aW9uc1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogUE9TSVRJT05TLFxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiBQT1NJVElPTlMsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBQT1NJVElPTlMsICAgIFxuICAgIC8vIFNoYWRvd3NcbiAgICB0ZXh0U2hhZG93OiBTSEFET1csXG4gICAgYm94U2hhZG93OiBTSEFET1csICAgIFxuICAgIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgcm90YXRlOiBBTkdMRSxcbiAgICByb3RhdGVYOiBBTkdMRSxcbiAgICByb3RhdGVZOiBBTkdMRSxcbiAgICByb3RhdGVaOiBBTkdMRSxcbiAgICBza2V3WDogQU5HTEUsXG4gICAgc2tld1k6IEFOR0xFLFxuICAgIHRyYW5zbGF0ZVg6IFBYLFxuICAgIHRyYW5zbGF0ZVk6IFBYLFxuICAgIHRyYW5zbGF0ZVo6IFBYLFxuICAgIHBlcnNwZWN0aXZlOiBQWCxcbiAgICBvcGFjaXR5OiBBTFBIQVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9jc3MvdHlwZS1tYXAuanNcbiAqKi8iLCJ2YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2gsXG4gICAgdHJhbnNmb3JtRGljdGlvbmFyeSA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tZGljdGlvbmFyeScpLFxuICAgIHRyYW5zZm9ybVByb3BzID0gdHJhbnNmb3JtRGljdGlvbmFyeS5wcm9wcyxcbiAgICB6ZXJvTm90WmVybyA9IDAuMDAwMTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3V0cHV0LCBvcmlnaW4pIHtcbiAgICB2YXIgcHJvcHMgPSB7fSxcbiAgICAgICAgaGFzVHJhbnNmb3JtID0gZmFsc2UsXG4gICAgICAgIHNjYWxlID0gb3V0cHV0LnNjYWxlICE9PSB1bmRlZmluZWQgPyBvdXRwdXQuc2NhbGUgfHwgemVyb05vdFplcm8gOiBvdXRwdXQuc2NhbGVYIHx8IDEsXG4gICAgICAgIHNjYWxlWSA9IG91dHB1dC5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IG91dHB1dC5zY2FsZVkgfHwgemVyb05vdFplcm8gOiBzY2FsZSB8fCAxLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW5YID0gb3JpZ2luLngsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblkgPSBvcmlnaW4ueSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1YID0gLSB0cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSksXG4gICAgICAgIHNjYWxlVHJhbnNmb3JtWSA9IC0gdHJhbnNmb3JtT3JpZ2luWSAqIChzY2FsZVkgKiAxKSxcbiAgICAgICAgc2NhbGVSZXBsYWNlWCA9IHRyYW5zZm9ybU9yaWdpblggLyBzY2FsZSxcbiAgICAgICAgc2NhbGVSZXBsYWNlWSA9IHRyYW5zZm9ybU9yaWdpblkgLyBzY2FsZVksXG4gICAgICAgIHRyYW5zZm9ybSA9IHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogYHRyYW5zbGF0ZSgke291dHB1dC50cmFuc2xhdGVYfSwgJHtvdXRwdXQudHJhbnNsYXRlWX0pIGAsXG4gICAgICAgICAgICBzY2FsZTogYHRyYW5zbGF0ZSgke3NjYWxlVHJhbnNmb3JtWH0sICR7c2NhbGVUcmFuc2Zvcm1ZfSkgc2NhbGUoJHtzY2FsZX0sICR7c2NhbGVZfSkgdHJhbnNsYXRlKCR7c2NhbGVSZXBsYWNlWH0sICR7c2NhbGVSZXBsYWNlWX0pIGAsXG4gICAgICAgICAgICByb3RhdGU6IGByb3RhdGUoJHtvdXRwdXQucm90YXRlfSwgJHt0cmFuc2Zvcm1PcmlnaW5YfSwgJHt0cmFuc2Zvcm1PcmlnaW5ZfSkgYCxcbiAgICAgICAgICAgIHNrZXdYOiBgc2tld1goJHtvdXRwdXQuc2tld1h9KSBgLFxuICAgICAgICAgICAgc2tld1k6IGBza2V3WSgke291dHB1dC5za2V3WX0pIGBcbiAgICAgICAgfTtcblxuICAgIGVhY2gob3V0cHV0LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgICAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcblxuICAgICAgICBlYWNoKHRyYW5zZm9ybSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSAoa2V5ID09PSAnc2NhbGUnKSA/ICcxJyA6ICcwJztcbiAgICAgICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB2YWx1ZS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9zdmcvYnVpbGQuanNcbiAqKi8iLCJ2YXIgQ09MT1IgPSAnY29sb3InLFxuICAgIFNDQUxFID0gJ3NjYWxlJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZmlsbDogQ09MT1IsXG4gICAgc3Ryb2tlOiBDT0xPUixcbiAgICBzY2FsZTogU0NBTEUsXG4gICAgc2NhbGVYOiBTQ0FMRSxcbiAgICBzY2FsZVk6IFNDQUxFLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ3Bvc2l0aW9ucycsXG4gICAgZDogJ2NvbXBsZXgnXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL3N2Zy90eXBlLW1hcC5qc1xuICoqLyIsIi8qXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3QgfHwgalF1ZXJ5IG9iamVjdF06XG4gICAgICAgIElmIHN0cmluZywgdHJlYXRlZCBhcyBzZWxlY3Rvci5cbiAgICAgICAgSWYgbm90LCB0cmVhdGVkIGFzIHByZWV4aXN0aW5nIE5vZGVMaXN0IHx8IGpRdWVyeSBvYmplY3QuXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICB2YXIgbm9kZXMgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yLFxuICAgICAgICBlbGVtZW50cyA9IFtdO1xuXG4gICAgLy8gSWYgalF1ZXJ5IHNlbGVjdGlvbiwgZ2V0IGFycmF5IG9mIEVsZW1lbnRzXG4gICAgaWYgKG5vZGVzLmdldCkge1xuICAgICAgICBlbGVtZW50cyA9IG5vZGVzLmdldCgpO1xuXG4gICAgLy8gT3IgY29udmVydCBOb2RlTGlzdCB0byBhcnJheVxuICAgIH0gZWxzZSBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChub2Rlcyk7XG5cbiAgICAvLyBPciBpZiBpdCdzIGp1c3QgYW4gRWxlbWVudCwgcHV0IGludG8gYXJyYXlcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50cy5wdXNoKG5vZGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luYy9zZWxlY3QtZG9tLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH07XG5cblF1ZXVlLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBBZGQgYSBzZXQgb2YgYXJndW1lbnRzIHRvIHF1ZXVlXG4gICAgKi9cbiAgICBhZGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgbmV4dCBzZXQgb2YgYXJndW1lbnRzIGZyb20gcXVldWVcbiAgICAqL1xuICAgIG5leHQ6IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gdGhpcy5xdWV1ZSxcbiAgICAgICAgICAgIHJldHVyblZhbCA9IGZhbHNlLFxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgXG4gICAgICAgIGRpcmVjdGlvbiA9IChhcmd1bWVudHMubGVuZ3RoKSA/IGRpcmVjdGlvbiA6IDE7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiBvdXIgaW5kZXggaXMgYmV0d2VlbiAwIGFuZCB0aGUgcXVldWUgbGVuZ3RoLCByZXR1cm4gdGhhdCBpdGVtXG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgcXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm5WYWwgPSBxdWV1ZVtpbmRleF07XG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXggKyBkaXJlY3Rpb247XG4gICAgICAgIFxuICAgICAgICAvLyBPciBjbGVhclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBSZXBsYWNlIHF1ZXVlIHdpdGggZW1wdHkgYXJyYXlcbiAgICAqL1xuICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmMvUXVldWUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHZhbHVlVHlwZU1hbmFnZXIgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9tYW5hZ2VyJyksXG4gICAgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaCxcbiAgICBBY3Rpb24gPSByZXF1aXJlKCcuLi9hY3Rpb25zL0FjdGlvbicpLFxuICAgIGRlZmF1bHRBY3Rpb24gPSBuZXcgQWN0aW9uKCksXG4gICAgV2F0Y2ggPSByZXF1aXJlKCcuLi9hY3Rpb25zL1dhdGNoJyksXG4gICAgd2F0Y2hlciA9IG5ldyBXYXRjaCgpLFxuXG4gICAgY3JlYXRlTWFwcGVyID0gZnVuY3Rpb24gKHJvbGUsIG1hcHBlZFZhbHVlcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5hbWUsIHZhbCkge1xuICAgICAgICAgICAgbWFwcGVkVmFsdWVzW3JvbGUubWFwKG5hbWUpXSA9IHZhbDtcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQ2hlY2sgYWxsIEFjdGlvbnMgZm9yIGBvbkVuZGAsIHJldHVybiB0cnVlIGlmIGFsbCBhcmUgdHJ1ZVxuXG4gICAgICAgIEBwYXJhbSBbQWN0b3JdXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl1cbiAgICAgICAgQHJldHVybnMgW2Jvb2xlYW5dXG4gICAgKi9cbiAgICBjaGVja0FsbEFjdGlvbnNIYXZlRW5kZWQgPSBmdW5jdGlvbiAoYWN0b3IsIGhhc0NoYW5nZWQpIHtcbiAgICAgICAgdmFyIGhhc0VuZGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlcyA9IGFjdG9yLnN0YXRlLnZhbHVlcztcblxuICAgICAgICBlYWNoKGFjdG9yLmFjdGl2ZUFjdGlvbnMsIChrZXksIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgLy8gUmV0dXJuIGlmIGFjdGlvbiBoYXMgYmVlbiBkZWxldGVkIGVsc2V3aGVyZVxuICAgICAgICAgICAgaWYgKCFhY3Rpb24pIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGlmIChhY3Rpb24ub25GcmFtZSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbi5vbkZyYW1lLmNhbGwoYWN0b3IsIHZhbHVlcywgYWN0b3IsIGFjdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhY3Rpb24ub25VcGRhdGUgJiYgaGFzQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIGFjdGlvbi5vblVwZGF0ZS5jYWxsKGFjdG9yLCB2YWx1ZXMsIGFjdG9yLCBhY3Rpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmhhc0VuZGVkICYmIGFjdGlvbi5oYXNFbmRlZChhY3RvciwgaGFzQ2hhbmdlZCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaGFzRW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5vbkNvbXBsZXRlLmNhbGwoYWN0b3IsIGFjdG9yLCBhY3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhY3Rvci51bmJpbmRBY3Rpb24oa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGhhc0VuZGVkO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBVcGRhdGUgdGhlIEFjdG9yIGFuZCBpdHMgdmFsdWVzXG5cbiAgICAgICAgQHBhcmFtIFtpbnRdOiBUaW1lc3RhbXAgb2YgckFGIGNhbGxcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBUaW1lIHNpbmNlIGxhc3QgZnJhbWVcbiAgICAqL1xuICAgIHVwZGF0ZSA9IGZ1bmN0aW9uIChmcmFtZXN0YW1wLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBudW1BY3RpdmVWYWx1ZXMgPSB0aGlzLmFjdGl2ZVZhbHVlcy5sZW5ndGgsXG4gICAgICAgICAgICBudW1BY3RpdmVQYXJlbnRzID0gdGhpcy5hY3RpdmVQYXJlbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIG51bVJvbGVzID0gdGhpcy5yb2xlcy5sZW5ndGgsXG4gICAgICAgICAgICBzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBoYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gVXBkYXRlIHZhbHVlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUFjdGl2ZVZhbHVlczsgaSsrKSB7XG4gICAgICAgICAgICAvLyBHZXQgdmFsdWUgYW5kIGtleVxuICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMuYWN0aXZlVmFsdWVzW2ldO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSAoIXZhbHVlLmFjdGlvbiB8fCB2YWx1ZS5hY3Rpb24gJiYgIXZhbHVlLmFjdGlvbi5pc0FjdGl2ZSkgPyBkZWZhdWx0QWN0aW9uIDogdmFsdWUuYWN0aW9uO1xuXG4gICAgICAgICAgICAvLyBGaXJlIGFjdGlvbiBvbkZyYW1lU3RhcnQgaWYgbm90IGFscmVhZHkgZmlyZWRcbiAgICAgICAgICAgIGlmIChhY3Rpb24ub25GcmFtZVN0YXJ0ICYmIGFjdGlvbi5sYXN0VXBkYXRlICE9PSBmcmFtZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLm9uRnJhbWVTdGFydCh0aGlzLCBmcmFtZUR1cmF0aW9uLCBmcmFtZXN0YW1wKTtcbiAgICAgICAgICAgICAgICBhY3Rpb24ubGFzdFVwZGF0ZSA9IGZyYW1lc3RhbXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgdmFsdWVcbiAgICAgICAgICAgIGxldCB1cGRhdGVkVmFsdWUgPSB1dGlscy5pc1N0cmluZyh2YWx1ZS53YXRjaCkgPyB3YXRjaGVyLnByb2Nlc3ModGhpcywgdmFsdWUpIDogYWN0aW9uLnByb2Nlc3ModGhpcywgdmFsdWUsIGtleSwgZnJhbWVEdXJhdGlvbik7XG5cbiAgICAgICAgICAgIC8vIExpbWl0IGlmIHRoaXMgYWN0aW9uIGRvZXMgdGhhdCBraW5kIG9mIHRoaW5nXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmxpbWl0ICYmIHZhbHVlLmhhc1JhbmdlKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gYWN0aW9uLmxpbWl0KHVwZGF0ZWRWYWx1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSb3VuZCB2YWx1ZSBpZiByb3VuZCBpcyB0cnVlXG4gICAgICAgICAgICBpZiAodmFsdWUucm91bmQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBNYXRoLnJvdW5kKHVwZGF0ZWRWYWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBmcmFtZUNoYW5nZVxuICAgICAgICAgICAgdmFsdWUuZnJhbWVDaGFuZ2UgPSB1cGRhdGVkVmFsdWUgLSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdmVsb2NpdHkgaWYgQWN0aW9uIGhhc24ndFxuICAgICAgICAgICAgaWYgKCFhY3Rpb24uY2FsY3VsYXRlc1ZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSBjYWxjLnNwZWVkUGVyU2Vjb25kKHZhbHVlLmZyYW1lQ2hhbmdlLCBmcmFtZUR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIGN1cnJlbnQgc3BlZWRcbiAgICAgICAgICAgIHZhbHVlLnNwZWVkID0gTWF0aC5hYnModmFsdWUudmVsb2NpdHkpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB2YWx1ZSdzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5jdXJyZW50ICE9PSB1cGRhdGVkVmFsdWUgfHwgdGhpcy5maXJzdEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCBuZXcgY3VycmVudCBcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB1cGRhdGVkVmFsdWU7XG4gICAgICAgICAgICBsZXQgdmFsdWVTdGF0ZSA9ICh2YWx1ZS51bml0KSA/IHVwZGF0ZWRWYWx1ZSArIHZhbHVlLnVuaXQgOiB1cGRhdGVkVmFsdWU7XG5cbiAgICAgICAgICAgIC8vIFB1dCB2YWx1ZSBpbiBzdGF0ZSBpZiBubyBwYXJlbnRcbiAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudmFsdWVzW2tleV0gPSB2YWx1ZVN0YXRlO1xuXG4gICAgICAgICAgICAvLyBPciwgYWRkIHRvIHBhcmVudCBzdGF0ZSB0byBiZSBjb21iaW5lZCBsYXRlclxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZVt2YWx1ZS5wYXJlbnRdID0gc3RhdGVbdmFsdWUucGFyZW50XSB8fCB7fTtcbiAgICAgICAgICAgICAgICBzdGF0ZVt2YWx1ZS5wYXJlbnRdW3ZhbHVlLnByb3BOYW1lXSA9IHZhbHVlU3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlcyBmcm9tIGNhbGN1bGF0ZWQgY2hpbGRyZW5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1BY3RpdmVQYXJlbnRzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSB0aGlzLmFjdGl2ZVBhcmVudHNbaV07XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlIGN1cnJlbnQgcHJvcGVydHlcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZVR5cGVNYW5hZ2VyW3ZhbHVlLnR5cGVdLmNvbWJpbmUoc3RhdGVba2V5XSwgdmFsdWUudGVtcGxhdGUpO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgc3RhdGVcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlc1trZXldID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgYGZyYW1lYCBhbmQgYHVwZGF0ZWAgY2FsbGJhY2tzIG9uIGFsbCBSb2xlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvbGVzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb2xlID0gdGhpcy5yb2xlc1tpXTtcbiAgICAgICAgICAgIGxldCBtYXBwZWRWYWx1ZXMgPSB7fTtcblxuICAgICAgICAgICAgZWFjaChzdGF0ZS52YWx1ZXMsIGNyZWF0ZU1hcHBlcihyb2xlLCBtYXBwZWRWYWx1ZXMpKTtcblxuICAgICAgICAgICAgaWYgKHJvbGUuZnJhbWUpIHtcbiAgICAgICAgICAgICAgICByb2xlLmZyYW1lLmNhbGwodGhpcywgbWFwcGVkVmFsdWVzLCB0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJvbGUudXBkYXRlICYmIGhhc0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICByb2xlLnVwZGF0ZS5jYWxsKHRoaXMsIG1hcHBlZFZhbHVlcywgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCBoYXNDaGFuZ2VkIGJlZm9yZSBmdXJ0aGVyIEFjdGlvbnMgbWlnaHQgYWZmZWN0IHRoaXNcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWN0aW9uc0hhdmVFbmRlZCh0aGlzLCBoYXNDaGFuZ2VkKSkge1xuICAgICAgICAgICAgICAgIC8vIEZpcmUgYGNvbXBsZXRlYCBjYWxsYmFja3NcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvbGUgPSB0aGlzLnJvbGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAocm9sZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZS5jb21wbGV0ZS5jYWxsKHRoaXMsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdEZyYW1lID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgdGhpcy5mcmFtZXN0YW1wID0gZnJhbWVzdGFtcDtcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rvci91cGRhdGUuanNcbiAqKi8iLCJ2YXIgdmFsdWVUeXBlc01hbmFnZXIgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9tYW5hZ2VyJyksXG4gICAgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBpc051bSA9IHV0aWxzLmlzTnVtLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoO1xuXG5jb25zdCBudW1lcmljYWxWYWx1ZXMgPSBbJ2N1cnJlbnQnLCAndG8nLCAnbWluJywgJ21heCcsICd2ZWxvY2l0eScsICdmcmljdGlvbicsICdzcHJpbmcnXSxcbiAgICBudW1OdW1lcmljYWxWYWx1ZXMgPSBudW1lcmljYWxWYWx1ZXMubGVuZ3RoLFxuICAgIGRlZmF1bHRWYWx1ZSA9IHtcbiAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgdmVsb2NpdHk6IDAsXG4gICAgICAgIHNwZWVkOiAwLFxuICAgICAgICBmcmFtZUNoYW5nZTogMFxuICAgIH07XG5cbmZ1bmN0aW9uIGNoZWNrTnVtZXJpY2FsVmFsdWUobmFtZSkge1xuICAgIHJldHVybiAobnVtZXJpY2FsVmFsdWVzLmluZGV4T2YobmFtZSkgPiAtMSk7XG59XG5cbi8qXG4gICAgQ2hlY2sgUm9sZSB0eXBlTWFwcyB0byBzZWUgaWYgdGhpcyB2YWx1ZSBuYW1lIGhhcyBiZWVuIG1hcHBlZFxuICAgIHRvIGEgc3BlY2lmaWMgdmFsdWUgdHlwZVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcmV0dXJucyBbc3RyaW5nXTogVmFsdWUgdHlwZVxuKi9cbmZ1bmN0aW9uIGNoZWNrUm9sZXMobmFtZSwgcm9sZXMpIHtcbiAgICB2YXIgdmFsdWVUeXBlO1xuXG4gICAgZWFjaChyb2xlcywgKGtleSwgcm9sZSkgPT4ge1xuICAgICAgICBpZiAocm9sZS5fdHlwZU1hcCkge1xuICAgICAgICAgICAgdmFsdWVUeXBlID0gcm9sZS5fdHlwZU1hcFtyb2xlLm1hcChuYW1lKV0gfHwgdmFsdWVUeXBlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFsdWVUeXBlO1xufVxuXG4vKlxuICAgIENoZWNrIHZhbHVlIGZvciBzcGVjaWFsIHR5cGVcblxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm5zIFtzdHJpbmcgfHwgZmFsc2VdXG4qL1xuZnVuY3Rpb24gY2hlY2tWYWx1ZVR5cGUoZXhpc3RpbmdWYWx1ZSwgbmV3VmFsdWUsIHNjb3BlLCB2YWx1ZU5hbWUpIHtcbiAgICB2YXIgdmFsdWVUeXBlO1xuXG4gICAgLy8gQ2hlY2sgZXhpc3RpbmcgdmFsdWUgZm9yIHR5cGUgYWxyZWFkeSBzZXRcbiAgICBpZiAoZXhpc3RpbmdWYWx1ZSAmJiBleGlzdGluZ1ZhbHVlLnR5cGUpIHtcbiAgICAgICAgdmFsdWVUeXBlID0gZXhpc3RpbmdWYWx1ZS50eXBlO1xuICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE9yIGNoZWNrIFJvbGUgX3R5cGVNYXAgcHJvcGVydGllc1xuICAgICAgICBpZiAoc2NvcGUucm9sZXMpIHtcbiAgICAgICAgICAgIHZhbHVlVHlwZSA9IGNoZWNrUm9sZXModmFsdWVOYW1lLCBzY29wZS5yb2xlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5hbGx5IHJ1biB0ZXN0c1xuICAgICAgICBpZiAoIXZhbHVlVHlwZSAmJiB1dGlscy5pc1N0cmluZyhuZXdWYWx1ZS5jdXJyZW50KSkge1xuICAgICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWVUeXBlc01hbmFnZXIudGVzdChuZXdWYWx1ZS5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZVR5cGU7XG59XG5cbi8qXG4gICAgUmVzb2x2ZSBhIHByb3BlcnR5XG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbiB8fCBudW1iZXJdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHJldHVybnMgW251bWJlcl1cbiovXG5mdW5jdGlvbiByZXNvbHZlKG5hbWUsIHByb3AsIHZhbHVlLCBzY29wZSkge1xuICAgIGxldCBpc051bWVyaWNhbFZhbHVlID0gY2hlY2tOdW1lcmljYWxWYWx1ZShuYW1lKTtcblxuICAgIC8vIElmIGZ1bmN0aW9uLCByZXNvbHZlXG4gICAgaWYgKHV0aWxzLmlzRnVuYyhwcm9wKSAmJiBpc051bWVyaWNhbFZhbHVlKSB7XG4gICAgICAgIHByb3AgPSBwcm9wLmNhbGwoc2NvcGUsIHNjb3BlKTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdHJpbmcsIGNoZWNrIGZvciByZWxhdGl2ZSBudW1iZXJzIGFuZCB1bml0c1xuICAgIGlmICh1dGlscy5pc1N0cmluZyhwcm9wKSkge1xuICAgICAgICAvLyBJZiByZWxhdGl2ZSB2YWx1ZVxuICAgICAgICBpZiAocHJvcC5pbmRleE9mKCc9JykgPiAwKSB7XG4gICAgICAgICAgICBwcm9wID0gY2FsYy5yZWxhdGl2ZVZhbHVlKHZhbHVlLmN1cnJlbnQsIHByb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdW5pdFxuICAgICAgICBpZiAoaXNOdW1lcmljYWxWYWx1ZSkge1xuICAgICAgICAgICAgc3BsaXRVbml0KHByb3AsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc051bWVyaWNhbFZhbHVlKSB7XG4gICAgICAgIHByb3AgPSBwYXJzZUZsb2F0KHByb3ApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wO1xufVxuXG4vKlxuICAgIFNwbGl0IGEgdmFsdWUgaW50byBzdWItdmFsdWVzXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW3ZhbHVlVHlwZUhhbmRsZXJdXG4gICAgQHJldHVybnMgW29iamVjdF1cbiovXG5mdW5jdGlvbiBzcGxpdChuYW1lLCB2YWx1ZSwgc2NvcGUsIHZhbHVlVHlwZUhhbmRsZXIpIHtcbiAgICB2YXIgc3BsaXRWYWx1ZXMgPSB7fSxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBmb3IgKDsgaSA8IG51bU51bWVyaWNhbFZhbHVlczsgaSsrKSB7XG4gICAgICAgIGxldCBwcm9wTmFtZSA9IG51bWVyaWNhbFZhbHVlc1tpXTtcbiAgICAgICAgbGV0IHNwbGl0UHJvcCA9IHt9O1xuXG4gICAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZVByb3AgPSB2YWx1ZVtwcm9wTmFtZV07XG5cbiAgICAgICAgICAgIC8vIElmIHdlIG5lZWQgdG8gZmlyc3QgcmVzb2x2ZSB0aGlzLCByZXNvbHZlXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVByb3AgPSB2YWx1ZVByb3AuY2FsbChzY29wZSwgc2NvcGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXV0aWxzLmlzU3RyaW5nKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3BsaXRQcm9wID0gdmFsdWVUeXBlSGFuZGxlci5zcGxpdCh2YWx1ZVByb3ApO1xuXG4gICAgICAgICAgICAvLyBBc3NpZ24gc3BsaXQgcHJvcGVydGllcyB0byBlYWNoIGNoaWxkIHZhbHVlXG4gICAgICAgICAgICBlYWNoKHNwbGl0UHJvcCwgKGtleSwgcHJvcCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgdmFsdWUgaWYgbm9uZSBleGlzdHNcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlc1trZXldID0gc3BsaXRWYWx1ZXNba2V5XSB8fCB1dGlscy5jb3B5KHZhbHVlVHlwZXNNYW5hZ2VyLmRlZmF1bHRQcm9wcyh2YWx1ZS50eXBlLCBrZXkpKTtcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlc1trZXldW3Byb3BOYW1lXSA9IHByb3A7XG5cbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoc3BsaXRQcm9wW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwbGl0VW5pdChzcGxpdFZhbHVlc1trZXldW3Byb3BOYW1lXSwgc3BsaXRWYWx1ZXNba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3BsaXRWYWx1ZXM7XG59XG5cbi8qXG4gICAgU3BsaXQgdmFsdWUgaW50byBudW1iZXIgYW5kIHVuaXQsIGFuZCBzZXQgdW5pdCB0byB2YWx1ZVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtvYmplY3RdXG4qL1xuZnVuY3Rpb24gc3BsaXRVbml0KHByb3BlcnR5LCBob3N0VmFsdWUpIHtcbiAgICBpZiAodXRpbHMuaXNOdW0ocHJvcGVydHkpKSB7IHJldHVybiBwcm9wZXJ0eTsgfVxuICAgIGxldCByZXR1cm5WYWwgPSBwcm9wZXJ0eSxcbiAgICAgICAgeyB2YWx1ZSwgdW5pdCB9ID0gdXRpbHMuc3BsaXRWYWxVbml0KHByb3BlcnR5KTtcblxuICAgIGlmICghaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIHJldHVyblZhbCA9IHZhbHVlO1xuICAgICAgICBpZiAodW5pdCkge1xuICAgICAgICAgICAgaG9zdFZhbHVlLnVuaXQgPSB1bml0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldHVyblZhbDtcbn1cblxuLypcbiAgICBQcmVwcm9jZXNzIGluY29taW5nIHZhbHVlcywgc3BsaXR0aW5nIG5vbi1udW1lcmljYWwgdmFsdWVzXG4gICAgaW50byBzdWItdmFsdWVzIGllIGhleFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4qL1xuZnVuY3Rpb24gcHJlcHJvY2VzcyhleGlzdGluZywgaW5jb21pbmcsIHNjb3BlLCBkZWZhdWx0UHJvcCkge1xuICAgIHZhciB2YWx1ZXMgPSB7fTtcblxuICAgIGVhY2goaW5jb21pbmcsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBleGlzdGluZ1ZhbHVlID0gZXhpc3Rpbmdba2V5XSxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0ge307XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqKHZhbHVlKSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRQcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdmFsdWUgZG9lc24ndCBoYXZlIGEgc3BlY2lhbCB0eXBlLCBjaGVjayBmb3Igb25lXG4gICAgICAgIG5ld1ZhbHVlLnR5cGUgPSBjaGVja1ZhbHVlVHlwZShleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSwgc2NvcGUsIGtleSk7XG4gICAgICAgIG5ld1ZhbHVlLndhdGNoID0gdXRpbHMuaXNTdHJpbmcobmV3VmFsdWUud2F0Y2gpID8gbmV3VmFsdWUud2F0Y2ggOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgdmFsdWVzW2tleV0gPSBuZXdWYWx1ZTtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdHlwZSBwcm9wZXJ0eSwgc3BsaXQvYXNzaWduIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUpIHtcbiAgICAgICAgICAgIGxldCB0eXBlSGFuZGxlciA9IHZhbHVlVHlwZXNNYW5hZ2VyW25ld1ZhbHVlLnR5cGVdO1xuXG4gICAgICAgICAgICAvLyBJZiB2YWx1ZVR5cGUgaGFuZGxlciBoYXMgYSBzcGxpdCBmdW5jdGlvbiwgc3BsaXQgdGhpcyB2YWx1ZVxuICAgICAgICAgICAgaWYgKHR5cGVIYW5kbGVyLnNwbGl0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwbGl0VmFsdWVzID0gc3BsaXQoa2V5LCBuZXdWYWx1ZSwgc2NvcGUsIHR5cGVIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IHt9O1xuXG4gICAgICAgICAgICAgICAgZWFjaChzcGxpdFZhbHVlcywgKGNoaWxkTmFtZSwgY2hpbGRWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlID0gdXRpbHMubWVyZ2UobmV3VmFsdWUsIGNoaWxkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlLnBhcmVudCA9IGNoaWxkVmFsdWUubmFtZSA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZS5wcm9wTmFtZSA9IGNoaWxkTmFtZTtcblxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hpbGRWYWx1ZS50eXBlO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hpbGRWYWx1ZS5jaGlsZHJlbjtcblxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbltjaGlsZE5hbWVdID0gdmFsdWVzW2tleSArIGNoaWxkTmFtZV0gPSBjaGlsZFZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVIYW5kbGVyLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnRlbXBsYXRlID0gZXhpc3RpbmdWYWx1ZSA/IGV4aXN0aW5nVmFsdWUudGVtcGxhdGUgOiB0eXBlSGFuZGxlci50ZW1wbGF0ZShuZXdWYWx1ZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE9yIGp1c3QgYXNzaWduIGRlZmF1bHQgcHJvcGVydGllcyBmb3IgdGhpcyB2YWx1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XSA9IHV0aWxzLm1lcmdlKHZhbHVlVHlwZXNNYW5hZ2VyLmRlZmF1bHRQcm9wcyhuZXdWYWx1ZS50eXBlLCBrZXkpLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YWx1ZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLypcbiAgICAgICAgRmxpcCB2YWx1ZSB0YXJnZXQvb3JpZ2luXG4gICAgKi9cbiAgICBmbGlwOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9ICh2YWx1ZS50YXJnZXQgIT09IHVuZGVmaW5lZCkgPyB2YWx1ZS50YXJnZXQgOiB2YWx1ZS5jdXJyZW50O1xuICAgICAgICB2YWx1ZS50YXJnZXQgPSB2YWx1ZS50byA9IHZhbHVlLm9yaWdpbjtcbiAgICAgICAgdmFsdWUub3JpZ2luID0gdGFyZ2V0O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBNZXJnZSBleGlzdGluZyBhbmQgaW5jb21pbmcgdmFsdWVzLCByZXNvbHZpbmcgcHJvcGVydGllc1xuICAgICAgICBzZXQgYXMgZnVuY3Rpb25zIGFuZCBzcGxpdHRpbmcgbm9uLW51bWVyaWNhbCB2YWx1ZXMgaWUgaGV4XG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddIChvcHRpb25hbClcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm5zIFtvYmplY3RdOiBOZXcgdmFsdWVzIG9iamVjdFxuICAgICovXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKGV4aXN0aW5nLCBpbmNvbWluZywgaW5oZXJpdCwgZGVmYXVsdFByb3AsIHNjb3BlKSB7XG4gICAgICAgIGV4aXN0aW5nID0gZXhpc3RpbmcgfHwge307XG4gICAgICAgIGRlZmF1bHRQcm9wID0gZGVmYXVsdFByb3AgfHwgJ2N1cnJlbnQnO1xuICAgICAgICBsZXQgcHJlcHJvY2Vzc2VkID0gcHJlcHJvY2VzcyhleGlzdGluZywgaW5jb21pbmcsIHNjb3BlLCBkZWZhdWx0UHJvcCk7XG5cbiAgICAgICAgZWFjaChwcmVwcm9jZXNzZWQsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSBleGlzdGluZ1trZXldIHx8IHV0aWxzLmNvcHkoZGVmYXVsdFZhbHVlKSxcbiAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbiA9ICh2YWx1ZS5jaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0QWN0aW9uVmFsdWUgPSBpbmhlcml0LmFjdGlvbiA/IGluaGVyaXQuYWN0aW9uLmdldERlZmF1bHRWYWx1ZSgpIDoge307XG5cbiAgICAgICAgICAgIHZhbHVlLmFjdGlvbiA9IGluaGVyaXQuYWN0aW9uO1xuXG4gICAgICAgICAgICBlYWNoKGRlZmF1bHRBY3Rpb25WYWx1ZSwgKHByb3BOYW1lLCBkZWZhdWx0QWN0aW9uUHJvcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlW3Byb3BOYW1lXSA9IChpbmhlcml0Lmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJiAhdmFsdWUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSA/IGluaGVyaXRbcHJvcE5hbWVdIDogZGVmYXVsdEFjdGlvblByb3A7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZWFjaCh2YWx1ZSwgKHZhbHVlTmFtZSwgdmFsdWVQcm9wKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcHJvcGVydHkgaXMgbm90IHVuZGVmaW5lZCBvciBhIG51bWJlciwgcmVzb2x2ZVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZVByb3AgIT09IHVuZGVmaW5lZCAmJiAhaXNOdW0odmFsdWVQcm9wKSAmJiAhaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVQcm9wID0gcmVzb2x2ZSh2YWx1ZU5hbWUsIHZhbHVlUHJvcCwgbmV3VmFsdWUsIHNjb3BlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuZXdWYWx1ZVt2YWx1ZU5hbWVdID0gdmFsdWVQcm9wO1xuXG4gICAgICAgICAgICAgICAgLy8gU2V0IGludGVybmFsIHRhcmdldCBpZiB0aGlzIHByb3BlcnR5IGlzICd0bydcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVOYW1lID09PSAndG8nKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnRhcmdldCA9IG5ld1ZhbHVlLnRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBuZXdWYWx1ZS5vcmlnaW4gPSBuZXdWYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgbmV3VmFsdWUuaGFzUmFuZ2UgPSAoaXNOdW0obmV3VmFsdWUubWluKSB8fCBpc051bShuZXdWYWx1ZS5tYXgpKSA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICAgICAgZXhpc3Rpbmdba2V5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgc2NvcGUudXBkYXRlT3JkZXIoa2V5LCB1dGlscy5pc1N0cmluZyhuZXdWYWx1ZS53YXRjaCksIGhhc0NoaWxkcmVuKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0b3IvdmFsdWUtb3BlcmF0aW9ucy5qc1xuICoqLyIsInZhciBSb2xlID0gcmVxdWlyZSgnLi9Sb2xlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFJvbGUoe1xuICAgIGluaXQ6IGZ1bmN0aW9uIChhY3Rvcikge1xuICAgICAgICBpZiAoYWN0b3IuaW5pdCkge1xuICAgICAgICAgICAgYWN0b3IuaW5pdChhY3Rvcik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChhY3Rvcikge1xuICAgICAgICBpZiAoYWN0b3Iub25TdGFydCkge1xuICAgICAgICAgICAgYWN0b3Iub25TdGFydChhY3Rvcik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZnJhbWU6IGZ1bmN0aW9uIChzdGF0ZSwgYWN0b3IpIHtcbiAgICAgICAgaWYgKGFjdG9yLm9uRnJhbWUpIHtcbiAgICAgICAgICAgIGFjdG9yLm9uRnJhbWUoc3RhdGUsIGFjdG9yKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSwgYWN0b3IpIHtcbiAgICAgICAgaWYgKGFjdG9yLm9uVXBkYXRlKSB7XG4gICAgICAgICAgICBhY3Rvci5vblVwZGF0ZShzdGF0ZSwgYWN0b3IpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoYWN0b3IpIHtcbiAgICAgICAgaWYgKGFjdG9yLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgIGFjdG9yLm9uQ29tcGxldGUoYWN0b3IpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvZGVmYXVsdFJvbGUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIC8vIFtudW1iZXJdOiBEZWZhdWx0IG1heCBzaXplIG9mIGhpc3RvcnlcbiAgICBtYXhIaXN0b3J5U2l6ZSA9IDMsXG4gICAgXG4gICAgLypcbiAgICAgICAgSGlzdG9yeSBjb25zdHJ1Y3RvclxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFt2YXJdOiBWYXJpYWJsZSB0byBzdG9yZSBpbiBmaXJzdCBoaXN0b3J5IHNsb3RcbiAgICAgICAgQHBhcmFtIFtpbnRdIChvcHRpb25hbCk6IE1heGltdW0gc2l6ZSBvZiBoaXN0b3J5XG4gICAgKi9cbiAgICBIaXN0b3J5ID0gZnVuY3Rpb24gKG9iaiwgbWF4KSB7XG4gICAgICAgIHRoaXMubWF4ID0gbWF4IHx8IG1heEhpc3RvcnlTaXplO1xuICAgICAgICB0aGlzLmVudHJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGQob2JqKTtcbiAgICB9O1xuICAgIFxuSGlzdG9yeS5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLypcbiAgICAgICAgUHVzaCBuZXcgdmFyIHRvIGhpc3RvcnlcbiAgICAgICAgXG4gICAgICAgIFNoaWZ0IG91dCBvbGRlc3QgZW50cnkgaWYgd2UndmUgcmVhY2hlZCBtYXhpbXVtIGNhcGFjaXR5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3Zhcl06IFZhcmlhYmxlIHRvIHB1c2ggaW50byBoaXN0b3J5LmVudHJpZXNcbiAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIgY3VycmVudFNpemUgPSB0aGlzLmdldFNpemUoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZW50cmllcy5wdXNoKG9iaik7XG4gICAgICAgIFxuICAgICAgICBpZiAoY3VycmVudFNpemUgPj0gdGhpcy5tYXgpIHtcbiAgICAgICAgICAgIHRoaXMuZW50cmllcy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdmFyaWFibGUgYXQgc3BlY2lmaWVkIGluZGV4XG5cbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleFxuICAgICAgICBAcmV0dXJuIFt2YXJdOiBWYXIgZm91bmQgYXQgc3BlY2lmaWVkIGluZGV4XG4gICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGkgPSAodHlwZW9mIGkgPT09ICdudW1iZXInKSA/IGkgOiB0aGlzLmdldFNpemUoKSAtIDE7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllc1tpXTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCB0aGUgc2Vjb25kIG5ld2VzdCBoaXN0b3J5IGVudHJ5XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt2YXJdOiBFbnRyeSBmb3VuZCBhdCBpbmRleCBzaXplIC0gMlxuICAgICovXG4gICAgZ2V0UHJldmlvdXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuZ2V0U2l6ZSgpIC0gMik7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgY3VycmVudCBoaXN0b3J5IHNpemVcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2ludF06IEN1cnJlbnQgbGVuZ3RoIG9mIGVudHJpZXMubGVuZ3RoXG4gICAgKi9cbiAgICBnZXRTaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXMubGVuZ3RoO1xuICAgIH1cbiAgICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGlzdG9yeTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmMvSGlzdG9yeS5qc1xuICoqLyIsImNsYXNzIENvbnRyb2xzIHtcbiAgICBjb25zdHJ1Y3RvcihhY3RvciwgYWN0aW9uLCBoYXNTdGFydGVkKSB7XG4gICAgICAgIHRoaXMuYWN0b3IgPSBhY3RvcjtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgICAgaWYgKGhhc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLmJpbmRBY3Rpb24oKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydChpbnB1dCkge1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5iaW5kQWN0aW9uKCk7XG4gICAgICAgIHRoaXMuYWN0b3Iuc3RhcnQodGhpcy5pZCwgaW5wdXQpO1xuICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmFjdG9yLnVuYmluZEFjdGlvbih0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5hY3Rpb24uZGVhY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24uZGVhY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgbGV0IHJlc3VtZSA9IHRoaXMuYWN0b3IuaGFzQWN0aW9uKHRoaXMuaWQpID8gdGhpcy5yZXN1bWUgOiB0aGlzLnN0YXJ0O1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb24uaXNBY3RpdmUgPyB0aGlzLnBhdXNlKCkgOiByZXN1bWUuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGVuKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5hY3Rvci50aGVuKC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBiaW5kQWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rvci5iaW5kQWN0aW9uKHRoaXMuYWN0aW9uLCB0aGlzLmlkKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udHJvbHM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29udHJvbHMvQ29udHJvbHMuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIElucHV0ID0gcmVxdWlyZSgnLi9JbnB1dC5qcycpLFxuICAgIGN1cnJlbnRQb2ludGVyLCAvLyBTb3J0IHRoaXMgb3V0IGZvciBtdWx0aXRvdWNoXG4gICAgXG4gICAgVE9VQ0hNT1ZFID0gJ3RvdWNobW92ZScsXG4gICAgTU9VU0VNT1ZFID0gJ21vdXNlbW92ZScsXG5cbiAgICAvKlxuICAgICAgICBDb252ZXJ0IGV2ZW50IGludG8gcG9pbnRcbiAgICAgICAgXG4gICAgICAgIFNjcmFwZSB0aGUgeC95IGNvb3JkaW5hdGVzIGZyb20gdGhlIHByb3ZpZGVkIGV2ZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2V2ZW50XTogT3JpZ2luYWwgcG9pbnRlciBldmVudFxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dOiBUcnVlIGlmIHRvdWNoIGV2ZW50XG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IHgveSBjb29yZGluYXRlcyBvZiBldmVudFxuICAgICovXG4gICAgZXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKGV2ZW50LCBpc1RvdWNoRXZlbnQpIHtcbiAgICAgICAgdmFyIHRvdWNoQ2hhbmdlZCA9IGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogZmFsc2U7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdG91Y2hDaGFuZ2VkID8gdG91Y2hDaGFuZ2VkLmNsaWVudFggOiBldmVudC5wYWdlWCxcbiAgICAgICAgICAgIHk6IHRvdWNoQ2hhbmdlZCA/IHRvdWNoQ2hhbmdlZC5jbGllbnRZIDogZXZlbnQucGFnZVlcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBhY3R1YWwgZXZlbnRcbiAgICAgICAgXG4gICAgICAgIENoZWNrcyBmb3IgalF1ZXJ5J3MgLm9yaWdpbmFsRXZlbnQgaWYgcHJlc2VudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtldmVudCB8IGpRdWVyeSBldmVudF1cbiAgICAgICAgQHJldHVybiBbZXZlbnRdOiBUaGUgYWN0dWFsIEpTIGV2ZW50ICBcbiAgICAqL1xuICAgIGdldEFjdHVhbEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50O1xuICAgIH0sXG5cbiAgICBcbiAgICAvKlxuICAgICAgICBQb2ludGVyIGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBQb2ludGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZ2V0QWN0dWFsRXZlbnQoZSksIC8vIEluIGNhc2Ugb2YgalF1ZXJ5IGV2ZW50XG4gICAgICAgICAgICBpc1RvdWNoID0gKGV2ZW50LnRvdWNoZXMpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgc3RhcnRQb2ludCA9IGV2ZW50VG9Qb2ludChldmVudCwgaXNUb3VjaCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnVwZGF0ZShzdGFydFBvaW50KTtcbiAgICAgICAgdGhpcy5pc1RvdWNoID0gaXNUb3VjaDtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfSxcbiAgICBcbiAgICBwcm90byA9IFBvaW50ZXIucHJvdG90eXBlID0gbmV3IElucHV0KCk7XG5cbi8qXG4gICAgQmluZCBtb3ZlIGV2ZW50XG4qL1xucHJvdG8uYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm1vdmVFdmVudCA9IHRoaXMuaXNUb3VjaCA/IFRPVUNITU9WRSA6IE1PVVNFTU9WRTtcbiAgICBcbiAgICBjdXJyZW50UG9pbnRlciA9IHRoaXM7XG4gICAgXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMub25Nb3ZlKTtcbn07XG5cbi8qXG4gICAgVW5iaW5kIG1vdmUgZXZlbnRcbiovXG5wcm90by51bmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMub25Nb3ZlKTtcbn07XG5cbi8qXG4gICAgUG9pbnRlciBvbk1vdmUgZXZlbnQgaGFuZGxlclxuICAgIFxuICAgIEBwYXJhbSBbZXZlbnRdOiBQb2ludGVyIG1vdmUgZXZlbnRcbiovXG5wcm90by5vbk1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBuZXdQb2ludCA9IGV2ZW50VG9Qb2ludChlLCBjdXJyZW50UG9pbnRlci5pc1RvdWNoKTtcbiAgICBlID0gZ2V0QWN0dWFsRXZlbnQoZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGN1cnJlbnRQb2ludGVyLnVwZGF0ZShuZXdQb2ludCk7XG59O1xuXG5wcm90by5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50ZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5wdXQvUG9pbnRlci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uLy4uL2luYy9jYWxjJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKSxcbiAgICBzcGVlZFBlckZyYW1lID0gY2FsYy5zcGVlZFBlckZyYW1lO1xuXG4vKlxuICAgIEFkZCBjb3JlIHBoeXNpY3Mgc2ltdWxhdGlvbnNcbiovXG52YXIgc2ltdWxhdGlvbnMgPSB7XG4gICAgLypcbiAgICAgICAgVmVsb2NpdHlcbiAgICAgICAgXG4gICAgICAgIFRoZSBkZWZhdWx0IC5ydW4oKSBzaW11bGF0aW9uLlxuICAgICAgICBcbiAgICAgICAgQXBwbGllcyBhbnkgc2V0IGRlY2VsZXJhdGlvbiBhbmQgYWNjZWxlcmF0aW9uIHRvIGV4aXN0aW5nIHZlbG9jaXR5XG4gICAgKi9cbiAgICB2ZWxvY2l0eTogZnVuY3Rpb24gKHZhbHVlLCBkdXJhdGlvbikge1xuICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IHZhbHVlLnZlbG9jaXR5IC0gc3BlZWRQZXJGcmFtZSh2YWx1ZS5kZWNlbGVyYXRpb24sIGR1cmF0aW9uKSArIHNwZWVkUGVyRnJhbWUodmFsdWUuYWNjZWxlcmF0aW9uLCBkdXJhdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHNpbXVsYXRpb25zLmZyaWN0aW9uKHZhbHVlLCBkdXJhdGlvbik7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEdsaWRlXG4gICAgICAgIFxuICAgICAgICBFbXVsYXRlcyB0b3VjaCBkZXZpY2Ugc2Nyb2xsaW5nIGVmZmVjdHMgd2l0aCBleHBvbmVudGlhbCBkZWNheVxuICAgICAgICBodHRwOi8vYXJpeWEub2ZpbGFicy5jb20vMjAxMy8xMS9qYXZhc2NyaXB0LWtpbmV0aWMtc2Nyb2xsaW5nLXBhcnQtMi5odG1sXG4gICAgKi9cbiAgICBnbGlkZTogZnVuY3Rpb24gKHZhbHVlLCBkdXJhdGlvbiwgc3RhcnRlZCkge1xuICAgICAgICB2YXIgdGltZVVudGlsRmluaXNoZWQgPSAtIHV0aWxzLmN1cnJlbnRUaW1lKCkgLSBzdGFydGVkLFxuICAgICAgICAgICAgZGVsdGEgPSAtIHZhbHVlLnRvICogTWF0aC5leHAodGltZVVudGlsRmluaXNoZWQgLyB2YWx1ZS50aW1lQ29uc3RhbnQpO1xuXG4gICAgICAgIHJldHVybiAodmFsdWUudG8gKyBkZWx0YSkgLSB2YWx1ZS5jdXJyZW50O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBGcmljdGlvblxuXG4gICAgICAgIEFwcGx5IGZyaWN0aW9uIHRvIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgIFRPRE86IE1ha2UgdGhpcyBmcmFtZXJhdGUtaW5kZXBlbmRlbnRcbiAgICAqL1xuICAgIGZyaWN0aW9uOiBmdW5jdGlvbiAodmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBuZXdWZWxvY2l0eSA9IHNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIGR1cmF0aW9uKSAqICgxIC0gdmFsdWUuZnJpY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBjYWxjLnNwZWVkUGVyU2Vjb25kKG5ld1ZlbG9jaXR5LCBkdXJhdGlvbik7XG4gICAgfSxcblxuICAgIHNwcmluZzogZnVuY3Rpb24gKHZhbHVlLCBkdXJhdGlvbikge1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSB2YWx1ZS50byAtIHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gZGlzdGFuY2UgKiBzcGVlZFBlckZyYW1lKHZhbHVlLnNwcmluZywgZHVyYXRpb24pO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHNpbXVsYXRpb25zLmZyaWN0aW9uKHZhbHVlLCBkdXJhdGlvbik7XG4gICAgfSxcblxuICAgIGJvdW5jZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IDAsXG4gICAgICAgICAgICB0byA9IHZhbHVlLnRvLFxuICAgICAgICAgICAgY3VycmVudCA9IHZhbHVlLmN1cnJlbnQsXG4gICAgICAgICAgICBib3VuY2UgPSB2YWx1ZS5ib3VuY2U7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB3ZSdyZSB1c2luZyBnbGlkZSBzaW11bGF0aW9uIHdlIGhhdmUgdG8gZmxpcCBvdXIgdGFyZ2V0IHRvb1xuICAgICAgICBpZiAodmFsdWUuc2ltdWxhdGUgPT09ICdnbGlkZScpIHtcbiAgICAgICAgICAgIGRpc3RhbmNlID0gdG8gLSBjdXJyZW50O1xuICAgICAgICAgICAgdmFsdWUudG8gPSBjdXJyZW50IC0gKGRpc3RhbmNlICogYm91bmNlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHZhbHVlLnZlbG9jaXR5ICo9IC0gYm91bmNlO1xuICAgIH0sXG5cbiAgICBjYXB0dXJlOiBmdW5jdGlvbiAodmFsdWUsIHRhcmdldCkge1xuICAgICAgICB2YWx1ZS50byA9IHRhcmdldDtcbiAgICAgICAgdmFsdWUuc2ltdWxhdGUgPSAnc3ByaW5nJztcbiAgICAgICAgdmFsdWUuY2FwdHVyZSA9IHZhbHVlLm1pbiA9IHZhbHVlLm1heCA9IHVuZGVmaW5lZDtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbXVsYXRpb25zO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9zaW11bGF0ZS9zaW11bGF0aW9ucy5qc1xuICoqLyIsIi8qXG4gICAgRWFzaW5nIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgXG4gICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgICAgIFxuICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgICAgICBcbiAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgICAgIFxuICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIEVhc2luZyA9IHJlcXVpcmUoJy4vRWFzaW5nJyksXG4gICAgZWFzaW5nRnVuY3Rpb24sXG4gICAgXG4gICAgLy8gR2VuZXJhdGUgZWFzaW5nIGZ1bmN0aW9uIHdpdGggcHJvdmlkZWQgcG93ZXJcbiAgICBnZW5lcmF0ZVBvd2VyRWFzaW5nID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgcG93ZXIpO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgICAgICBcbiAgICAgICAgT24gaW5pdCwgd2UgdXNlIEVhc2luZ0Z1bmN0aW9uLm1pcnJvciBhbmQgLnJldmVyc2UgdG8gZ2VuZXJhdGUgZWFzZUluT3V0IGFuZFxuICAgICAgICBlYXNlT3V0IGZ1bmN0aW9ucyByZXNwZWN0aXZlbHkuXG4gICAgKi9cbiAgICBiYXNlRWFzaW5nID0ge1xuICAgICAgICBjaXJjOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHByb2dyZXNzKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGJhY2s6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgdmFyIHN0cmVuZ3RoID0gMS41O1xuXG4gICAgICAgICAgICByZXR1cm4gKHByb2dyZXNzICogcHJvZ3Jlc3MpICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4vLyBHZW5lcmF0ZSBwb3dlciBlYXNpbmcgZWFzaW5nXG5bJ2Vhc2UnLCAnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChlYXNpbmdOYW1lLCBpKSB7XG4gICAgYmFzZUVhc2luZ1tlYXNpbmdOYW1lXSA9IGdlbmVyYXRlUG93ZXJFYXNpbmcoaSArIDIpO1xufSk7XG5cbi8vIEdlbmVyYXRlIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5mb3IgKHZhciBrZXkgaW4gYmFzZUVhc2luZykge1xuICAgIGlmIChiYXNlRWFzaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSBuZXcgRWFzaW5nKGJhc2VFYXNpbmdba2V5XSk7XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luJ10gPSBlYXNpbmdGdW5jdGlvbi5pbjtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnT3V0J10gPSBlYXNpbmdGdW5jdGlvbi5vdXQ7XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luT3V0J10gPSBlYXNpbmdGdW5jdGlvbi5pbk91dDtcbiAgICB9XG59XG5cbi8qXG4gICAgTGluZWFyIGVhc2luZyBhZGp1c3RtZW50XG4gICAgXG4gICAgVGhlIGRlZmF1bHQgZWFzaW5nIG1ldGhvZCwgbm90IGFkZGVkIHdpdGggLmV4dGVuZCBhcyBpdCBoYXMgbm8gT3V0IG9yIEluT3V0XG4gICAgdmFyaWF0aW9uLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMC0xXG4gICAgQHJldHVybiBbbnVtYmVyXTogVW5hZGp1c3RlZCBwcm9ncmVzc1xuKi9cbmJhc2VFYXNpbmcubGluZWFyID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgcmV0dXJuIHByb2dyZXNzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRWFzaW5nO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvdHdlZW4vcHJlc2V0LWVhc2luZy5qc1xuICoqLyIsInZhciBDb250cm9scyA9IHJlcXVpcmUoJy4uLy4uL2NvbnRyb2xzL0NvbnRyb2xzJyk7XG5cbmNsYXNzIFR3ZWVuQ29udHJvbHMgZXh0ZW5kcyBDb250cm9scyB7XG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24ucmVzdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLmFjdGlvbi5yZXZlcnNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNlZWsocHJvZ3Jlc3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjdG9yLmhhc0FjdGlvbih0aGlzLmlkKSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydCgpLnBhdXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGlvbi5lbGFwc2VkID0gdGhpcy5hY3Rpb24uZHVyYXRpb24gKiBwcm9ncmVzcztcblxuICAgICAgICBpZiAoIXRoaXMuYWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5hY3Rvci5wcm9jZXNzLmZpcmUoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUd2VlbkNvbnRyb2xzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvdHdlZW4vVHdlZW5Db250cm9scy5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdGhlTG9vcCA9IHJlcXVpcmUoJy4vbG9vcC5qcycpLFxuICAgIFByb2Nlc3NNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUlkcyA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZVByb2Nlc3NlcyA9IHt9O1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuICAgICAgICB0aGVMb29wLnNldENhbGxiYWNrKHRoaXMsIHRoaXMuZmlyZUFjdGl2ZSk7XG4gICAgfTtcbiAgICBcblByb2Nlc3NNYW5hZ2VyLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBbaW50XTogVXNlZCBmb3IgcHJvY2VzcyBJRFxuICAgICovXG4gICAgcHJvY2Vzc0NvdW50ZXI6IDAsXG4gICAgXG4gICAgLypcbiAgICAgICAgW2ludF06IE51bWJlciBvZiBhY3RpdmUgcHJvY2Vzc2VzXG4gICAgKi9cbiAgICBhY3RpdmVDb3VudDogMCxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdGhlIHByb2Nlc3Mgd2l0aCBhIGdpdmVuIGluZGV4XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IEluZGV4IG9mIHByb2Nlc3NcbiAgICAgICAgQHJldHVybiBbUHJvY2Vzc11cbiAgICAqL1xuICAgIGdldFByb2Nlc3M6IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZVByb2Nlc3Nlc1tpXTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBudW1iZXIgb2YgYWN0aXZlIHByb2Nlc3Nlc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbaW50XTogTnVtYmVyIG9mIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICAqL1xuICAgIGdldEFjdGl2ZUNvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNvdW50O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGFjdGl2ZSB0b2tlbnNcblxuICAgICAgICBAcmV0dXJuIFthcnJheV06IEFjdGl2ZSB0b2tlbnNcbiAgICAqL1xuICAgIGdldEFjdGl2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVJZHM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbaW50XTogTGVuZ3RoIG9mIHF1ZXVlXG4gICAgKi9cbiAgICBnZXRRdWV1ZUxlbmd0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRmlyZSBhbGwgYWN0aXZlIHByb2Nlc3Nlc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBUaW1lc3RhbXAgb2YgZXhlY3V0aW5nIGZyYW1lc1xuICAgICAgICBAcGFyYW0gW2ludF06IFRpbWUgc2luY2UgcHJldmlvdXMgZnJhbWVcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgYWN0aXZlIHByb2Nlc3NlcyBmb3VuZFxuICAgICovXG4gICAgZmlyZUFjdGl2ZTogZnVuY3Rpb24gKGZyYW1lc3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdmFyIHByb2Nlc3MsXG4gICAgICAgICAgICBhY3RpdmVDb3VudCA9IDAsXG4gICAgICAgICAgICBhY3RpdmVJZHMgPSBbXSxcbiAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgIC8vIFB1cmdlIGFuZCBjaGVjayBhY3RpdmUgY291bnQgYmVmb3JlIGV4ZWN1dGlvblxuICAgICAgICB0aGlzLnB1cmdlKCk7XG4gICAgICAgIGFjdGl2ZUNvdW50ID0gdGhpcy5nZXRBY3RpdmVDb3VudCgpO1xuICAgICAgICBhY3RpdmVJZHMgPSB0aGlzLmdldEFjdGl2ZSgpO1xuXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhY3RpdmUgcHJvY2Vzc2VzIGFuZCBmaXJlIGNhbGxiYWNrXG4gICAgICAgIGZvciAoOyBpIDwgYWN0aXZlQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgcHJvY2VzcyA9IHRoaXMuZ2V0UHJvY2VzcyhhY3RpdmVJZHNbaV0pO1xuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcykge1xuICAgICAgICAgICAgICAgIHByb2Nlc3MuZmlyZShmcmFtZXN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlcHVyZ2UgYW5kIHJlY2hlY2sgYWN0aXZlIGNvdW50IGFmdGVyIGV4ZWN1dGlvblxuICAgICAgICB0aGlzLnB1cmdlKCk7XG4gICAgICAgIGFjdGl2ZUNvdW50ID0gdGhpcy5nZXRBY3RpdmVDb3VudCgpO1xuXG4gICAgICAgIC8vIFJldHVybiB0cnVlIGlmIHdlIHN0aWxsIGhhdmUgYWN0aXZlIHByb2Nlc3Nlcywgb3IgZmFsc2UgaWYgbm9uZVxuICAgICAgICByZXR1cm4gYWN0aXZlQ291bnQgPyB0cnVlIDogZmFsc2U7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBSZWdpc3RlciBhIG5ldyBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW1Byb2Nlc3NdXG4gICAgICAgIEByZXR1cm4gW2ludF06IEluZGV4IG9mIHByb2Nlc3MgdG8gYmUgdXNlZCBhcyBJRFxuICAgICovXG4gICAgcmVnaXN0ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc0NvdW50ZXIrKztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEFjdGl2YXRlIGEgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleCBvZiBhY3RpdmUgcHJvY2Vzc1xuICAgICovXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChwcm9jZXNzLCBpKSB7XG4gICAgICAgIHZhciBxdWV1ZUluZGV4ID0gdGhpcy5kZWFjdGl2YXRlUXVldWUuaW5kZXhPZihpKSxcbiAgICAgICAgICAgIGlzUXVldWVkID0gKHF1ZXVlSW5kZXggPiAtMSksXG4gICAgICAgICAgICBpc0FjdGl2ZSA9ICh0aGlzLmFjdGl2ZUlkcy5pbmRleE9mKGkpID4gLTEpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIGRlYWN0aXZhdGVRdWV1ZSBpZiBpbiB0aGVyZVxuICAgICAgICBpZiAoaXNRdWV1ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLnNwbGljZShxdWV1ZUluZGV4LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB0byBhY3RpdmUgcHJvY2Vzc2VzIGFycmF5IGlmIG5vdCBhbHJlYWR5IGluIHRoZXJlXG4gICAgICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSWRzLnB1c2goaSk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVByb2Nlc3Nlc1tpXSA9IHByb2Nlc3M7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNvdW50Kys7XG4gICAgICAgICAgICB0aGVMb29wLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIERlYWN0aXZhdGUgYSBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IEluZGV4IG9mIHByb2Nlc3MgdG8gYWRkIHRvIGRlYWN0aXZhdGUgcXVldWVcbiAgICAqL1xuICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLnB1c2goaSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBQdXJnZSB0aGUgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICovXG4gICAgcHVyZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHF1ZXVlTGVuZ3RoID0gdGhpcy5nZXRRdWV1ZUxlbmd0aCgpLFxuICAgICAgICAgICAgYWN0aXZlSWRJbmRleCA9IDAsXG4gICAgICAgICAgICBpZFRvRGVsZXRlID0gMDtcblxuICAgICAgICB3aGlsZSAocXVldWVMZW5ndGgtLSkge1xuICAgICAgICAgICAgaWRUb0RlbGV0ZSA9IHRoaXMuZGVhY3RpdmF0ZVF1ZXVlW3F1ZXVlTGVuZ3RoXTtcbiAgICAgICAgICAgIGFjdGl2ZUlkSW5kZXggPSB0aGlzLmFjdGl2ZUlkcy5pbmRleE9mKGlkVG9EZWxldGUpO1xuXG4gICAgICAgICAgICAvLyBJZiBwcm9jZXNzIGluIGFjdGl2ZSBsaXN0IGRlYWN0aXZhdGVcbiAgICAgICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUlkcy5zcGxpY2UoYWN0aXZlSWRJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDb3VudC0tO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZVByb2Nlc3Nlc1tpZFRvRGVsZXRlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlUXVldWUgPSBbXTtcbiAgICB9XG4gICAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBQcm9jZXNzTWFuYWdlcigpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb2Nlc3MvbWFuYWdlci5qc1xuICoqLyIsIi8qXG4gICAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgICAgICBcbiAgICBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgXG4gICAgVXNlXG4gICAgXG4gICAgICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA4LFxuICAgIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMSxcbiAgICBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDEsXG4gICAgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMCxcbiAgICBLX1NQTElORV9UQUJMRV9TSVpFID0gMTEsXG4gICAgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApLFxuICAgIEZMT0FUXzMyX1NVUFBPUlRFRCA9ICh0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyksXG4gICAgXG4gICAgYSA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG4gICAgfSxcbiAgICBcbiAgICBiID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgICAgICByZXR1cm4gMy4wICogYTIgLSA2LjAgKiBhMTtcbiAgICB9LFxuICAgIFxuICAgIGMgPSBmdW5jdGlvbiAoYTEpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGExO1xuICAgIH0sXG5cbiAgICBnZXRTbG9wZSA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogYihhMSwgYTIpICogdCArIGMoYTEpO1xuICAgIH0sXG5cbiAgICBjYWxjQmV6aWVyID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgICAgICByZXR1cm4gKChhKGExLCBhMikgKiB0ICsgYihhMSwgYTIpKSAqIHQgKyBjKGExKSkgKiB0O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQmV6aWVyIGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBCZXppZXIgPSBmdW5jdGlvbiAobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpLFxuICAgICAgICAgICAgX3ByZWNvbXB1dGVkID0gZmFsc2UsXG4gICAgXG4gICAgICAgICAgICBiaW5hcnlTdWJkaXZpZGUgPSBmdW5jdGlvbiAoYVgsIGFBLCBhQikge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50VDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAgICAgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSBmdW5jdGlvbiAoYVgsIGFHdWVzc1QpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBLX1NQTElORV9UQUJMRV9TSVpFOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBnZXRURm9yWCA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2FtcGxlID0gMSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLFxuICAgICAgICAgICAgICAgICAgICBkaXN0ID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBndWVzc0ZvclQgPSAwLjAsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbG9wZSA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlKzFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgICAgICAgICBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBzbG9wZSBpcyBncmVhdGVyIHRoYW4gbWluXG4gICAgICAgICAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgICAgICAgICAvLyBTbG9wZSBpcyBlcXVhbCB0byBtaW5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgICAgICAgICAgLy8gU2xvcGUgaXMgbGVzcyB0aGFuIG1pblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBLX1NBTVBMRV9TVEVQX1NJWkUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHByZWNvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAobVgxICE9IG1ZMSB8fCBtWDIgIT0gbVkyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIEdlbmVyYXRlZCBmdW5jdGlvblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFJldHVybnMgdmFsdWUgMC0xIGJhc2VkIG9uIFhcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBmID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldHVyblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlY29tcHV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBsaW5lYXIgZ3JhZGllbnQsIHJldHVybiBYIGFzIFRcbiAgICAgICAgICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhWDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgYXQgc3RhcnQsIHJldHVybiAwXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIGF0IGVuZCwgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gY2FsY0JlemllcihnZXRURm9yWChhWCksIG1ZMSwgbVkyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBCZXppZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi9CZXppZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1jb21tYS1kZWxpbWl0ZWQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignKCcpICsgMSwgdmFsdWUubGFzdEluZGV4T2YoJyknKSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1icmVhay5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcG9zaXRpb25UZXJtcyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnknKS5wb3NpdGlvbnMsXG4gICAgbnVtUG9zaXRpb25UZXJtcyA9IHBvc2l0aW9uVGVybXMubGVuZ3RoLFxuXG4gICAgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJyxcbiAgICBTQ0FMRSA9ICdzY2FsZScsXG4gICAgUk9UQVRFID0gJ3JvdGF0ZScsXG4gICAgdGVybXMgPSB7XG4gICAgICAgIGZ1bmNzOiBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSxcbiAgICAgICAgcHJvcHM6IHt9IC8vIG9iamVjdHMgYXJlIGZhc3RlciBhdCBkaXJlY3QgbG9va3Vwc1xuICAgIH07XG5cbi8vIENyZWF0ZSB0cmFuc2Zvcm0gdGVybXNcbihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZ1bmNzID0gdGVybXMuZnVuY3MsXG4gICAgICAgIHByb3BzID0gdGVybXMucHJvcHMsXG4gICAgICAgIG51bUZ1bmNzID0gZnVuY3MubGVuZ3RoLFxuICAgICAgICBpID0gMCxcblxuICAgICAgICBjcmVhdGVQcm9wcyA9IGZ1bmN0aW9uIChmdW5jTmFtZSkge1xuICAgICAgICAgICAgdmFyIGogPSAwO1xuXG4gICAgICAgICAgICBmb3IgKDsgaiA8IG51bVBvc2l0aW9uVGVybXM7IGorKykge1xuICAgICAgICAgICAgICAgIHByb3BzW2Z1bmNOYW1lICsgcG9zaXRpb25UZXJtc1tqXV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIFxuICAgIC8vIE1hbnVhbGx5IGFkZCBza2V3IGFuZCB0cmFuc2Zvcm0gcGVyc3BlY3RpdmUgIFxuICAgIHByb3BzW1JPVEFURV0gPSBwcm9wc1tTQ0FMRV0gPSBwcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcbiAgICBcbiAgICAvLyBMb29wIG92ZXIgZWFjaCBmdW5jdGlvbiBuYW1lIGFuZCBjcmVhdGUgZnVuY3Rpb24vcHJvcGVydHkgdGVybXNcbiAgICBmb3IgKDsgaSA8IG51bUZ1bmNzOyBpKyspIHtcbiAgICAgICAgY3JlYXRlUHJvcHMoZnVuY3NbaV0pO1xuICAgIH1cbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gdGVybXM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvY3NzL3RyYW5zZm9ybS1kaWN0aW9uYXJ5LmpzXG4gKiovIiwibGV0IEFjdGlvbiA9IHJlcXVpcmUoJy4vQWN0aW9uJyksXG4gICAgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG5cbiAgICBTVFJJTkcgPSAnc3RyaW5nJyxcbiAgICBcbiAgICAvKlxuICAgICAgICBUcmFuc2xhdGUgb3VyIG1hcExpbmsgdmFsdWUgaW50byBtYXBUb1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlIGZyb20gbGlua2VkIHZhbHVlXG4gICAgICAgIEBwYXJhbSBbVmFsdWUgfHwgb2JqZWN0XTogTGlua2VkIHZhbHVlIG9yIGVtcHR5IG9iamVjdCBpZiB3ZSdyZSBsaW5raW5nIHRvIGlucHV0XG4gICAgICAgIEBwYXJhbSBbYXJyYXldOiBMaXN0IG9mIG51bWJlcnMgcmVsYXRpbmcgdG8gbGlua2VkIHZhbHVlXG4gICAgICAgIEBwYXJhbSBbYXJyYXldOiBMaXN0IG9mIG51bWJlcnMgcmVsYXRpbmcgdG8gdGhpcyB2YWx1ZVxuICAgICovXG4gICAgZmluZE1hcHBlZFZhbHVlID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBsaW5rZWRWYWx1ZSwgdG9WYWx1ZSwgbWFwTGluaywgbWFwVG8pIHtcbiAgICAgICAgdmFyIG1hcExlbmd0aCA9IG1hcExpbmsubGVuZ3RoLFxuICAgICAgICAgICAgaSA9IDEsXG4gICAgICAgICAgICBsYXN0TGlua1ZhbHVlLFxuICAgICAgICAgICAgdGhpc0xpbmtWYWx1ZSxcbiAgICAgICAgICAgIGxhc3RUb1ZhbHVlLFxuICAgICAgICAgICAgdGhpc1RvVmFsdWU7XG5cbiAgICAgICAgZm9yICg7IGkgPCBtYXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gQXNzaWduIHZhbHVlcyBmcm9tIGFycmF5LCBvciBpZiB0aGV5J3JlIHN0cmluZ3MsIGxvb2sgZm9yIHRoZW0gaW4gbGlua2VkVmFsdWVcbiAgICAgICAgICAgIGxhc3RMaW5rVmFsdWUgPSAodHlwZW9mIG1hcExpbmtbaSAtIDFdID09PSBTVFJJTkcpID8gbGlua2VkVmFsdWVbbWFwTGlua1tpIC0gMV1dIDogbWFwTGlua1tpIC0gMV07XG4gICAgICAgICAgICB0aGlzTGlua1ZhbHVlID0gKHR5cGVvZiBtYXBMaW5rW2ldID09PSBTVFJJTkcpID8gbGlua2VkVmFsdWVbbWFwTGlua1tpXV0gOiBtYXBMaW5rW2ldO1xuICAgICAgICAgICAgbGFzdFRvVmFsdWUgPSAodHlwZW9mIG1hcFRvW2kgLSAxXSA9PT0gU1RSSU5HKSA/IHRvVmFsdWVbbWFwVG9baSAtIDFdXSA6IG1hcFRvW2kgLSAxXTtcbiAgICAgICAgICAgIHRoaXNUb1ZhbHVlID0gKHR5cGVvZiBtYXBUb1tpXSA9PT0gU1RSSU5HKSA/IHRvVmFsdWVbbWFwVG9baV1dIDogbWFwVG9baV07XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlJ3ZlIGdvbmUgcGFzdCBvdXIgY2FsY3VsYXRlZCB2YWx1ZSwgb3IgaWYgd2UncmUgYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXlcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA8IHRoaXNMaW5rVmFsdWUgfHwgaSA9PT0gbWFwTGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gY2FsYy52YWx1ZShjYWxjLnJlc3RyaWN0ZWQoY2FsYy5wcm9ncmVzcyhuZXdWYWx1ZSwgbGFzdExpbmtWYWx1ZSwgdGhpc0xpbmtWYWx1ZSksIDAsIDEpLCBsYXN0VG9WYWx1ZSwgdGhpc1RvVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfTtcblxuY2xhc3MgV2F0Y2ggZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFByb2Nlc3MgdGhpcyB2YWx1ZVxuICAgICAgICBcbiAgICAgICAgRmlyc3QgY2hlY2sgaWYgdGhpcyB2YWx1ZSBleGlzdHMgYXMgYSBWYWx1ZSwgaWYgbm90XG4gICAgICAgIGNoZWNrIHdpdGhpbiBJbnB1dCAoaWYgd2UgaGF2ZSBvbmUpXG4gICAgICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgY3VycmVudCB2YWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzKGFjdG9yLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBhY3Rvci52YWx1ZXMsXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlLmN1cnJlbnQsXG4gICAgICAgICAgICB3YXRjaGVkS2V5ID0gdmFsdWUud2F0Y2gsXG4gICAgICAgICAgICB3YXRjaGVkVmFsdWUgPSB2YWx1ZXNbd2F0Y2hlZEtleV0gPyB2YWx1ZXNbd2F0Y2hlZEtleV0gOiB7fSxcbiAgICAgICAgICAgIGlucHV0T2Zmc2V0ID0gdmFsdWUuYWN0aW9uID8gdmFsdWUuYWN0aW9uLmlucHV0T2Zmc2V0IDogZmFsc2U7XG5cbiAgICAgICAgLy8gRmlyc3QgbG9vayBhdCBBY3Rpb24gYW5kIGNoZWNrIHZhbHVlIGlzbid0IGxpbmtpbmcgaXRzZWxmXG4gICAgICAgIGlmICh3YXRjaGVkVmFsdWUuY3VycmVudCAhPT0gdW5kZWZpbmVkICYmIGtleSAhPT0gd2F0Y2hlZEtleSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSB3YXRjaGVkVmFsdWUuY3VycmVudDtcbiAgICAgICAgXG4gICAgICAgIC8vIFRoZW4gY2hlY2sgdmFsdWVzIGluIElucHV0XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXRPZmZzZXQgJiYgaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkod2F0Y2hlZEtleSkpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWUuYWN0aW9uLnByb2Nlc3MoYWN0b3IsIHZhbHVlLCB3YXRjaGVkS2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgbWFwRnJvbSBhbmQgbWFwVG8gcHJvcGVydGllcywgdHJhbnNsYXRlIHRoZSBuZXcgdmFsdWVcbiAgICAgICAgaWYgKHZhbHVlLm1hcEZyb20gJiYgdmFsdWUubWFwVG8pIHtcbiAgICAgICAgICAgIHZhbHVlLnVubWFwcGVkID0gbmV3VmFsdWU7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGZpbmRNYXBwZWRWYWx1ZShuZXdWYWx1ZSwgd2F0Y2hlZFZhbHVlLCB2YWx1ZSwgdmFsdWUubWFwRnJvbSwgdmFsdWUubWFwVG8pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXYXRjaDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL1dhdGNoLmpzXG4gKiovIiwiLypcbiAgICBUaGUgbG9vcFxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgVGltZXIgPSByZXF1aXJlKCcuL3RpbWVyLmpzJyksXG4gICAgdGljayA9IHJlcXVpcmUoJy4vdGljay5qcycpLFxuICAgIExvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudGltZXIgPSBuZXcgVGltZXIoKTtcbiAgICB9O1xuICAgIFxuTG9vcC5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLypcbiAgICAgICAgW2Jvb2xlYW5dOiBDdXJyZW50IHN0YXR1cyBvZiBhbmltYXRpb24gbG9vcFxuICAgICovXG4gICAgaXNSdW5uaW5nOiBmYWxzZSxcbiAgICBcbiAgICAvKlxuICAgICAgICBGaXJlIGFsbCBhY3RpdmUgcHJvY2Vzc2VzIG9uY2UgcGVyIGZyYW1lXG4gICAgKi9cbiAgICBmcmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZnJhbWVzdGFtcCA9IHNlbGYudGltZXIudXBkYXRlKCksIC8vIEN1cnJlbnRseSBqdXN0IG1lYXN1cmluZyBpbiBtcyAtIHdpbGwgbG9vayBpbnRvIGhpLXJlcyB0aW1lc3RhbXBzXG4gICAgICAgICAgICAgICAgaXNBY3RpdmUgPSBzZWxmLmNhbGxiYWNrLmNhbGwoc2VsZi5zY29wZSwgZnJhbWVzdGFtcCwgc2VsZi50aW1lci5nZXRFbGFwc2VkKCkpO1xuXG4gICAgICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmZyYW1lKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0YXJ0IGxvb3BcbiAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSdyZSBub3QgYWxyZWFkeSBydW5uaW5nIGEgbG9vcFxuICAgICAgICBpZiAoIXRoaXMuaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyLmNsb2NrKCk7XG4gICAgICAgICAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZyYW1lKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0b3AgdGhlIGxvb3BcbiAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFNldCB0aGUgY2FsbGJhY2sgdG8gcnVuIGV2ZXJ5IGZyYW1lXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW09iamVjdF06IEV4ZWN1dGlvbiBjb250ZXh0XG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBmaXJlXG4gICAgKi9cbiAgICBzZXRDYWxsYmFjazogZnVuY3Rpb24gKHNjb3BlLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBMb29wKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvY2Vzcy9sb29wLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscy5qcycpLFxuXG4gICAgbWF4RWxhcHNlZCA9IDMzLFxuICAgIFRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAxNi43O1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG5cblRpbWVyLnByb3RvdHlwZSA9IHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wcmV2ID0gdGhpcy5jdXJyZW50O1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSBNYXRoLm1pbih0aGlzLmN1cnJlbnQgLSB0aGlzLnByZXYsIG1heEVsYXBzZWQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gICAgfSxcblxuICAgIGdldEVsYXBzZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxhcHNlZDtcbiAgICB9LFxuICAgIFxuICAgIGNsb2NrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHV0aWxzLmN1cnJlbnRUaW1lKCk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaW1lcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm9jZXNzL3RpbWVyLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgIFxuICAgIEZvciBJRTgvOSBGbGluc3RvbmVzXG5cbiAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgXG4gICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgXG4gICAgTUlUIGxpY2Vuc2VcbiovXG52YXIgdGljayxcbiAgICBsYXN0VGltZSA9IDAsXG4gICAgaGFzV2luZG93ID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKTtcblxuaWYgKCFoYXNXaW5kb3cpIHtcbiAgICAvLyBMb2FkIHJBRiBzaGltXG4gICAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSksXG4gICAgICAgICAgICBpZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcblxuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9OyAgXG4gICAgXG59IGVsc2Uge1xuICAgIHRpY2sgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRpY2s7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvY2Vzcy90aWNrLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicG9wbW90aW9uLmdsb2JhbC5qcyJ9