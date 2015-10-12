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
	var build = __webpack_require__(40);
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
	    _map: __webpack_require__(41),
	    _typeMap: __webpack_require__(42),
	
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
	    build = __webpack_require__(43),
	    each = __webpack_require__(38).each;
	
	module.exports = new Role({
	    name: 'svg',
	
	    _map: __webpack_require__(41),
	    _typeMap: __webpack_require__(44),
	
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
	    _map: __webpack_require__(45),
	
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
	    Queue = __webpack_require__(46),
	    utils = __webpack_require__(38),
	    select = __webpack_require__(47),
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
	        var _this2 = this;
	
	        this.pause();
	        each(this.activeActions, function (id) {
	            return _this2.unbindAction(id);
	        });
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
	        var _this3 = this;
	
	        // Fire init callback
	        this.roles.forEach(function (role) {
	            if (role.init) {
	                role.init.call(_this3, _this3);
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
	}
	
	function generateCallback(actor, action) {
	    var callback;
	
	    if (actor.each) {
	        callback = function () {
	            actor.each(function (actor) {
	                actor.start(action);
	            });
	        };
	    } else {
	        callback = function () {
	            actor.start(action);
	        };
	    }
	
	    return callback;
	}
	
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
	            callback = isCallback ? actor : generateCallback(actor, action),
	            offset = arguments[arguments.length - 1],
	            timestamp = isString(offset) ? calcRelative(this.currentTimestamp, offset) : this.currentTimestamp;
	
	        this.sequence.push({ timestamp: timestamp, callback: callback });
	
	        if (action && action.duration) {
	            this.currentTimestamp = timestamp + action.duration;
	        }
	
	        return this;
	    };
	
	    Sequence.prototype.start = function start() {
	        _Actor.prototype.start.call(this, timeline.extend({
	            duration: this.currentTimestamp,
	            values: {
	                playhead: this.currentTimestamp
	            }
	        }));
	
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
	
	    var callback = method;
	
	    if (utils.isString(method)) {
	        callback = function (member) {
	            return member[method].apply(member, args);
	        };
	    } else if (!utils.isFunc(method)) {
	        callback = function (member) {
	            return member.start.apply(member, [method].concat(args));
	        };
	    }
	
	    return callback;
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
	    simulations = __webpack_require__(56);
	
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
	    Pointer = __webpack_require__(55),
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
	
	    Track.prototype.deactivate = function deactivate() {
	        _Action.prototype.deactivate.call(this);
	
	        if (this.input && this.input.stop) {
	            this.input.stop();
	        }
	
	        return this;
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
	    selectDom = __webpack_require__(47);
	
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var TRANSLATE = 'translate';
	
	module.exports = {
	    x: TRANSLATE + 'X',
	    y: TRANSLATE + 'Y',
	    z: TRANSLATE + 'Z'
	};

/***/ },
/* 42 */
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
/* 43 */
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
/* 44 */
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var STROKE = 'stroke';
	
	module.exports = {
	    opacity: STROKE + '-opacity',
	    width: STROKE + '-width',
	    miterlimit: STROKE + '-miterlimit'
	};

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
/* 47 */
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
/* 56 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWYxODNkYTM3NTdhYWNiNDlmZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2FkL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9oc2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcG9zaXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9kaW1lbnNpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9hdHRyL2F0dHJSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvY3NzUm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvc3ZnL3N2Z1JvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci9BY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VxdWVuY2UvU2VxdWVuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L0lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9pdGVyYXRvci9JdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9Qcm9jZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9Sb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuL0Vhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvU2ltdWxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9zZWxlY3QtYWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9jYWxjLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2dldC1jb2xvci12YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL3NwbGl0LXNwYWNlLWRlbGltaXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvY3NzL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL3N2Zy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvc3ZnL3R5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9wYXRoL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL1F1ZXVlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvc2VsZWN0LWRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3IvdXBkYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci92YWx1ZS1vcGVyYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9kZWZhdWx0Um9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL0hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xzL0NvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuL3ByZXNldC1lYXNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdHdlZW4vVHdlZW5Db250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvUG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9zaW11bGF0ZS9zaW11bGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuL0Jlemllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL3NwbGl0LWNvbW1hLWRlbGltaXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWJyZWFrLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvdHJhbnNmb3JtLWRpY3Rpb25hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvV2F0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvbG9vcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy90aW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy90aWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDOzs7Ozs7Ozs7QUN0Q0EsS0FBSSxTQUFTLEdBQUcsbUJBQU8sQ0FBQyxDQUFhLENBQUM7S0FDbEMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7O0FBRXRCLE9BQU0sQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7Ozs7OztBQU16QyxPQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsR0FBRyxZQUFZO0FBQy9CLFdBQU0sQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO0VBQ3JCLEM7Ozs7OztBQ1hELGFBQVksQ0FBQzs7QUFFYixLQUFJLFNBQVMsR0FBRyxtQkFBTyxDQUFDLENBQWMsQ0FBQyxDQUFDOzs7OztBQUt4QyxVQUFTLENBQUMsWUFBWSxDQUFDO0FBQ25CLFVBQUssRUFBRSxtQkFBTyxDQUFDLENBQXNCLENBQUM7QUFDdEMsVUFBSyxFQUFFLG1CQUFPLENBQUMsQ0FBc0IsQ0FBQztBQUN0QyxPQUFFLEVBQUUsbUJBQU8sQ0FBQyxDQUFtQixDQUFDO0FBQ2hDLFFBQUcsRUFBRSxtQkFBTyxDQUFDLENBQW9CLENBQUM7QUFDbEMsUUFBRyxFQUFFLG1CQUFPLENBQUMsQ0FBb0IsQ0FBQztBQUNsQyxRQUFHLEVBQUUsbUJBQU8sQ0FBQyxDQUFvQixDQUFDO0FBQ2xDLFVBQUssRUFBRSxt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WixTQUFJLEdBQUcsVUFBVSxRQUFRLEVBQUU7QUFDdkIsYUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7YUFDL0IsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUM7YUFDcEQsRUFBRSxHQUFHLFVBQVUsQ0FBQyxZQUFZO0FBQ3hCLHFCQUFRLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1VBQ25DLEVBQUUsVUFBVSxDQUFDLENBQUM7O0FBRW5CLGlCQUFRLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQzs7QUFFakMsZ0JBQU8sRUFBRSxDQUFDO01BQ2IsQ0FBQztFQUVMLE1BQU07QUFDSCxTQUFJLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDO0VBQ3ZDOztBQUVELE9BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNWYxODNkYTM3NTdhYWNiNDlmZWJcbiAqKi8iLCJ2YXIgcG9wbW90aW9uID0gcmVxdWlyZSgnLi9tb2R1bGUuanMnKSxcbiAgICBVSXJlZiA9IHdpbmRvdy51aTtcblxud2luZG93LnVpID0gd2luZG93LnBvcG1vdGlvbiA9IHBvcG1vdGlvbjtcblxuLypcbiAgICBJZiBub0NvbmZsaWN0IGlzIHJ1biwgdGhlIG9yaWdpbmFsIHJlZmVyZW5jZSB0byB3aW5kb3cuVUkgaXNcbiAgICByZXN0b3JlZCBhbmQgUG9wbW90aW9uIGlzIGxvYWRlZCB0byB3aW5kb3cuUG9wbW90aW9uXG4qL1xud2luZG93LnVpLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LnVpID0gVUlyZWY7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xvYWQvZ2xvYmFsLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBwb3Btb3Rpb24gPSByZXF1aXJlKCcuLi9wb3Btb3Rpb24nKTtcblxuLypcbiAgICBBZGQgb3B0aW9uYWwgY3VzdG9tIHZhbHVlIHR5cGUgc3VwcG9ydFxuKi9cbnBvcG1vdGlvbi5hZGRWYWx1ZVR5cGUoe1xuICAgIGFscGhhOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9hbHBoYScpLFxuICAgIGFuZ2xlOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9hbmdsZScpLFxuICAgIHB4OiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9weCcpLFxuICAgIGhzbDogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvaHNsJyksXG4gICAgcmdiOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9yZ2InKSxcbiAgICBoZXg6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2hleCcpLFxuICAgIGNvbG9yOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9jb2xvcicpLFxuICAgIHBvc2l0aW9uczogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJyksXG4gICAgZGltZW5zaW9uczogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvZGltZW5zaW9ucycpLFxuICAgIHNjYWxlOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9zY2FsZScpLFxuICAgIHNoYWRvdzogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvc2hhZG93JyksXG4gICAgY29tcGxleDogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvY29tcGxleCcpXG59KTtcblxuLypcbiAgICBQcmVkZWZpbmVkIHJvbGVzXG4qL1xuXG5wb3Btb3Rpb24uYXR0ciA9IHJlcXVpcmUoJy4uL3JvbGVzL2F0dHIvYXR0clJvbGUnKTtcbnBvcG1vdGlvbi5jc3MgPSByZXF1aXJlKCcuLi9yb2xlcy9jc3MvY3NzUm9sZScpO1xucG9wbW90aW9uLnN2ZyA9IHJlcXVpcmUoJy4uL3JvbGVzL3N2Zy9zdmdSb2xlJyk7XG5wb3Btb3Rpb24uZHJhd1BhdGggPSByZXF1aXJlKCcuLi9yb2xlcy9wYXRoL2RyYXdQYXRoUm9sZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBvcG1vdGlvbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9sb2FkL21vZHVsZS5qc1xuICoqLyIsInZhciB2YWx1ZVR5cGVNYW5hZ2VyID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9tYW5hZ2VyJyksXG5cbiAgICBQb3Btb3Rpb24gPSB7XG5cbiAgICAgICAgQWN0b3I6IHJlcXVpcmUoJy4vYWN0b3IvQWN0b3InKSxcblxuICAgICAgICBTZXF1ZW5jZTogcmVxdWlyZSgnLi9zZXF1ZW5jZS9TZXF1ZW5jZScpLFxuXG4gICAgICAgIElucHV0OiByZXF1aXJlKCcuL2lucHV0L0lucHV0JyksXG5cbiAgICAgICAgSXRlcmF0b3I6IHJlcXVpcmUoJy4vaXRlcmF0b3IvSXRlcmF0b3InKSxcblxuICAgICAgICBQcm9jZXNzOiByZXF1aXJlKCcuL3Byb2Nlc3MvUHJvY2VzcycpLFxuXG4gICAgICAgIEVhc2luZzogcmVxdWlyZSgnLi9hY3Rpb25zL3R3ZWVuL0Vhc2luZycpLFxuXG4gICAgICAgIFJvbGU6IHJlcXVpcmUoJy4vcm9sZXMvUm9sZScpLFxuXG4gICAgICAgIEFjdGlvbjogcmVxdWlyZSgnLi9hY3Rpb25zL0FjdGlvbicpLFxuICAgICAgICBUd2VlbjogcmVxdWlyZSgnLi9hY3Rpb25zL1R3ZWVuJyksXG4gICAgICAgIFNpbXVsYXRlOiByZXF1aXJlKCcuL2FjdGlvbnMvU2ltdWxhdGUnKSxcbiAgICAgICAgVHJhY2s6IHJlcXVpcmUoJy4vYWN0aW9ucy9UcmFjaycpLFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDcmVhdGUgYW4gSXRlcmF0b3Igb2YgQWN0b3JzIHdpdGggc2VsZWN0ZWQgZG9tIGVsZW1lbnRzXG4gICAgICAgICovXG4gICAgICAgIHNlbGVjdDogcmVxdWlyZSgnLi9pbmMvc2VsZWN0LWFjdG9yJyksXG5cbiAgICAgICAgYWRkVmFsdWVUeXBlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YWx1ZVR5cGVNYW5hZ2VyLmV4dGVuZC5hcHBseSh2YWx1ZVR5cGVNYW5hZ2VyLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FsYzogcmVxdWlyZSgnLi9pbmMvY2FsYycpXG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBQb3Btb3Rpb247XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcG9wbW90aW9uLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiAxXG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAnZGVnJ1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYW5nbGUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ3B4J1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcHguanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBnZXRDb2xvclZhbHVlcyA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2dldC1jb2xvci12YWx1ZXMnKSxcbiAgICBmdW5jdGlvbkNyZWF0ZSA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWNyZWF0ZScpLFxuICAgIGRlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JykuaHNsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBIdWU6IHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMzYwXG4gICAgICAgIH0sXG4gICAgICAgIFNhdHVyYXRpb246IGRlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgICAgICBMaWdodG5lc3M6IGRlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgICAgICBBbHBoYTogZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZignaHNsJykgPiAtMSk7XG4gICAgfSxcbiAgICBcbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBnZXRDb2xvclZhbHVlcyh2YWx1ZSwgdGVybXMpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbkNyZWF0ZShjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCB0ZXJtcywgJywgJywgMiksICdoc2xhJyk7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oc2wuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBnZXRDb2xvclZhbHVlcyA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2dldC1jb2xvci12YWx1ZXMnKSxcbiAgICBmdW5jdGlvbkNyZWF0ZSA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWNyZWF0ZScpLFxuICAgIGRlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpLFxuICAgIGNvbG9yRGVmYXVsdHMgPSBkZWZhdWx0UHJvcHMuY29sb3IsXG4gICAgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5jb2xvcnM7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIFJlZDogY29sb3JEZWZhdWx0cyxcbiAgICAgICAgR3JlZW46IGNvbG9yRGVmYXVsdHMsXG4gICAgICAgIEJsdWU6IGNvbG9yRGVmYXVsdHMsXG4gICAgICAgIEFscGhhOiBkZWZhdWx0UHJvcHMub3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdyZ2InKSA+IC0xKTtcbiAgICB9LFxuICAgIFxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGdldENvbG9yVmFsdWVzKHZhbHVlLCB0ZXJtcyk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uQ3JlYXRlKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnLCAnLCAyKSwgJ3JnYmEnKTtcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHJnYi5kZWZhdWx0UHJvcHMsXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCcjJykgPiAtMSk7XG4gICAgfSxcbiAgICBcbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByLCBnLCBiO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDIpO1xuICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigzLCAyKTtcbiAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoNSwgMik7XG5cbiAgICAgICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMSk7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDIsIDEpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cigzLCAxKTtcbiAgICAgICAgICAgIHIgKz0gcjtcbiAgICAgICAgICAgIGcgKz0gZztcbiAgICAgICAgICAgIGIgKz0gYjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBSZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICAgICAgICAgIEdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgICAgICAgICBCbHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgICAgICAgICBBbHBoYTogMVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiByZ2IuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIHJnYiA9IHJlcXVpcmUoJy4vcmdiJyksXG4gICAgaHNsID0gcmVxdWlyZSgnLi9oc2wnKSxcbiAgICBoZXggPSByZXF1aXJlKCcuL2hleCcpLFxuICAgIHN1cHBvcnRlZCA9IFtyZ2IsIGhzbCwgaGV4XSxcbiAgICBudW1TdXBwb3J0ZWQgPSAzLFxuXG4gICAgcnVuU3VwcG9ydGVkID0gZnVuY3Rpb24gKG1ldGhvZCwgdmFsdWUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1TdXBwb3J0ZWQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKHN1cHBvcnRlZFtpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWRbaV1bbWV0aG9kXSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogdXRpbHMubWVyZ2UocmdiLmRlZmF1bHRQcm9wcywgaHNsLmRlZmF1bHRQcm9wcyksXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHJnYi50ZXN0KHZhbHVlKSB8fCBoZXgudGVzdCh2YWx1ZSkgfHwgaHNsLnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBydW5TdXBwb3J0ZWQoJ3NwbGl0JywgdmFsdWUpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAodmFsdWVzLlJlZCAhPT0gdW5kZWZpbmVkKSA/IHJnYi5jb21iaW5lKHZhbHVlcykgOiBoc2wuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBweERlZmF1bHRzID0gcmVxdWlyZSgnLi9weCcpLmRlZmF1bHRQcm9wcyxcbiAgICBzcGxpdFNwYWNlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkJyksXG4gICAgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5wb3NpdGlvbnM7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiBweERlZmF1bHRzLFxuICAgICAgICBcbiAgICAvKlxuICAgICAgICBTcGxpdCBwb3NpdGlvbnMgaW4gZm9ybWF0IFwiWCBZIFpcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQb3NpdGlvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjAlIDMwJSAwXCIgLT4gezIwJSwgMzAlLCAwfVxuICAgICAgICAgICAgXCIyMCUgMzAlXCIgLT4gezIwJSwgMzAlfVxuICAgICAgICAgICAgXCIyMCVcIiAtPiB7MjAlLCAyMCV9XG4gICAgKi9cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbnMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKSxcbiAgICAgICAgICAgIG51bVBvc2l0aW9ucyA9IHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgICBzcGxpdFZhbHVlID0ge1xuICAgICAgICAgICAgICAgIFg6IHBvc2l0aW9uc1swXSxcbiAgICAgICAgICAgICAgICBZOiAobnVtUG9zaXRpb25zID4gMSkgPyBwb3NpdGlvbnNbMV0gOiBwb3NpdGlvbnNbMF1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgaWYgKG51bVBvc2l0aW9ucyA+IDIpIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWUuWiA9IHBvc2l0aW9uc1syXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCB0ZXJtcywgJyAnKTtcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucy5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5kaW1lbnNpb25zLFxuICAgIHB4RGVmYXVsdHMgPSByZXF1aXJlKCcuL3B4JykuZGVmYXVsdFByb3BzLFxuICAgIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBzcGxpdFNwYWNlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiBweERlZmF1bHRzLFxuICAgIFxuICAgIC8qXG4gICAgICAgIFNwbGl0IGRpbWVuc2lvbnMgaW4gZm9ybWF0IFwiVG9wIFJpZ2h0IEJvdHRvbSBMZWZ0XCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogRGltZW5zaW9uIHZhbHVlc1xuICAgICAgICAgICAgXCIyMHB4IDAgMzBweCA0MHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDQwcHh9XG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHggMFwiIC0+IHsyMHB4LCAwLCAyMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4XCIgLT4gezIwcHgsIDIwcHgsIDIwcHgsIDIwcHh9XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCBUL1IvQi9MIG1ldHJpY3NcbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGRpbWVuc2lvbnMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKSxcbiAgICAgICAgICAgIG51bURpbWVuc2lvbnMgPSBkaW1lbnNpb25zLmxlbmd0aCxcbiAgICAgICAgICAgIGp1bXBCYWNrID0gKG51bURpbWVuc2lvbnMgIT09IDEpID8gMiA6IDEsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGogPSAwLFxuICAgICAgICAgICAgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGZvciAoOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlW3Rlcm1zW2ldXSA9IGRpbWVuc2lvbnNbal07XG5cbiAgICAgICAgICAgIC8vIEp1bXAgYmFjayAodG8gc3RhcnQpIGNvdW50ZXIgaWYgd2UndmUgcmVhY2hlZCB0aGUgZW5kIG9mIG91ciB2YWx1ZXNcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIGogPSAoaiA9PT0gbnVtRGltZW5zaW9ucykgPyBqIC0ganVtcEJhY2sgOiBqO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnICcpO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvZGltZW5zaW9ucy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBpbml0OiAxXG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY29sb3IgPSByZXF1aXJlKCcuL2NvbG9yJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBweERlZmF1bHRzID0gcmVxdWlyZSgnLi9weCcpLmRlZmF1bHRQcm9wcyxcbiAgICB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLnNoYWRvdyxcbiAgICBzcGxpdFNwYWNlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkJyksXG4gICAgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIHNoYWRvd1Rlcm1zID0gdGVybXMuc2xpY2UoMCw0KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHV0aWxzLm1lcmdlKGNvbG9yLmRlZmF1bHRQcm9wcywge1xuICAgICAgICBYOiBweERlZmF1bHRzLFxuICAgICAgICBZOiBweERlZmF1bHRzLFxuICAgICAgICBSYWRpdXM6IHB4RGVmYXVsdHMsXG4gICAgICAgIFNwcmVhZDogcHhEZWZhdWx0c1xuICAgIH0pLFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgc2hhZG93IHByb3BlcnRpZXMgXCJYIFkgUmFkaXVzIFNwcmVhZCBDb2xvclwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFNoYWRvdyBwcm9wZXJ0eVxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBiaXRzID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSksXG4gICAgICAgICAgICBudW1CaXRzID0gYml0cy5sZW5ndGgsXG4gICAgICAgICAgICBoYXNSZWFjaGVkQ29sb3IgPSBmYWxzZSxcbiAgICAgICAgICAgIGNvbG9yUHJvcCA9ICcnLFxuICAgICAgICAgICAgdGhpc0JpdCxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnVtQml0czsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzQml0ID0gYml0c1tpXTtcblxuICAgICAgICAgICAgLy8gSWYgd2UndmUgcmVhY2hlZCB0aGUgY29sb3IgcHJvcGVydHksIGFwcGVuZCB0byBjb2xvciBzdHJpbmdcbiAgICAgICAgICAgIGlmIChoYXNSZWFjaGVkQ29sb3IgfHwgY29sb3IudGVzdCh0aGlzQml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IHRoaXNCaXQ7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3BsaXRWYWx1ZVt0ZXJtc1tpXV0gPSB0aGlzQml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoc3BsaXRWYWx1ZSwgY29sb3Iuc3BsaXQoY29sb3JQcm9wKSk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHNoYWRvd1Rlcm1zLCAnICcpICsgY29sb3IuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzXG4gKiovIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgZWFjaCA9IHV0aWxzLmVhY2gsXG4gICAgZmxvYXRSZWdleCA9IC8oLSk/KFxcZFtcXGRcXC5dKikvZyxcblxuICAgIGdlbmVyYXRlVG9rZW4gPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiAnJHsnICsga2V5ICsgJ30nO1xuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKGZsb2F0UmVnZXgpO1xuICAgICAgICByZXR1cm4gKHV0aWxzLmlzQXJyYXkobWF0Y2hlcykgJiYgbWF0Y2hlcy5sZW5ndGggPiAxKTtcbiAgICB9LFxuXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKGZsb2F0UmVnZXgsICgpID0+IGdlbmVyYXRlVG9rZW4oY291bnRlcisrKSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fSxcbiAgICAgICAgICAgIG1hdGNoZXMgPSB2YWx1ZS5tYXRjaChmbG9hdFJlZ2V4KSxcbiAgICAgICAgICAgIG51bU1hdGNoZXMgPSBtYXRjaGVzLmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTWF0Y2hlczsgaSsrKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlW2ldID0gbWF0Y2hlc1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzLCB0ZW1wbGF0ZSkge1xuICAgICAgICB2YXIgY29tYmluZWRWYWx1ZSA9IHRlbXBsYXRlO1xuXG4gICAgICAgIGVhY2godmFsdWVzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29tYmluZWRWYWx1ZSA9IGNvbWJpbmVkVmFsdWUucmVwbGFjZShnZW5lcmF0ZVRva2VuKGtleSksIHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkVmFsdWU7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSb2xlID0gcmVxdWlyZSgnLi4vUm9sZScpO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoO1xuXG52YXIgYXR0clJvbGUgPSBuZXcgUm9sZSh7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGFjdG9yID0gdGhpcztcblxuICAgICAgICBlYWNoKHN0YXRlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgYXR0clJvbGUuc2V0KGFjdG9yLmVsZW1lbnQsIGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZ2V0OiBmdW5jdGlvbiAoZWxlbWVudCwga2V5KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uIChlbGVtZW50LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF0dHJSb2xlO1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9hdHRyL2F0dHJSb2xlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSb2xlID0gcmVxdWlyZSgnLi4vUm9sZScpO1xudmFyIGJ1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoO1xuXG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsJ01veicsJ08nLCdtcycsICcnXTtcbnZhciBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbnZhciBwcm9wZXJ0eU5hbWVDYWNoZSA9IHt9O1xudmFyIHRlc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIFxuLypcbiAgICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICAgIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eU5hbWVDYWNoZVtrZXldID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvcGVydHlOYW1lQ2FjaGVba2V5XSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV0sXG4gICAgICAgICAgICAgICAgcHJlZml4ZWQgPSAocHJlZml4ID09PSAnJykgPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICAgICAgICAgIGlmIChwcmVmaXhlZCBpbiB0ZXN0RWxlbWVudC5zdHlsZSkge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZUNhY2hlW2tleV0gPSBwcmVmaXhlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5TmFtZUNhY2hlW2tleV07XG4gICAgfTtcblxudmFyIGNzc1JvbGUgPSBuZXcgUm9sZSh7XG4gICAgX21hcDogcmVxdWlyZSgnLi9tYXAnKSxcbiAgICBfdHlwZU1hcDogcmVxdWlyZSgnLi90eXBlLW1hcCcpLFxuXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9jc3NDYWNoZSA9IHt9O1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzO1xuXG4gICAgICAgIGVhY2goYnVpbGQoc3RhdGUsIGFjdG9yLl9jc3NDYWNoZSksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBjc3NSb2xlLnNldChhY3Rvci5lbGVtZW50LCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGdldDogZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICAgICAgICBrZXkgPSBwcm9wZXJ0eU5hbWVDYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTtcblxuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClba2V5XTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uIChlbGVtZW50LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGtleSA9IHByb3BlcnR5TmFtZUNhY2hlW2tleV0gfHwgdGVzdFByZWZpeChrZXkpO1xuXG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjc3NSb2xlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL2Nzcy9jc3NSb2xlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSb2xlID0gcmVxdWlyZSgnLi4vUm9sZScpLFxuICAgIGF0dHJSb2xlID0gcmVxdWlyZSgnLi4vYXR0ci9hdHRyUm9sZScpLFxuICAgIGJ1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpLFxuICAgIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBSb2xlKHtcbiAgICBuYW1lOiAnc3ZnJyxcblxuICAgIF9tYXA6IHJlcXVpcmUoJy4uL2Nzcy9tYXAnKSxcbiAgICBfdHlwZU1hcDogcmVxdWlyZSgnLi90eXBlLW1hcCcpLFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJvdW5kaW5nQm94ID0gdGhpcy5lbGVtZW50LmdldEJCb3goKSxcbiAgICAgICAgICAgIHZhbHVlcyA9IHRoaXMudmFsdWVzLFxuICAgICAgICAgICAgLy8gVE9ETzogU3VwcG9ydCBweFxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luWCA9IHZhbHVlcy50cmFuc2Zvcm1PcmlnaW5YID8gdmFsdWVzLnRyYW5zZm9ybU9yaWdpblguY3VycmVudCA6IDUwLFxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luWSA9IHZhbHVlcy50cmFuc2Zvcm1PcmlnaW5ZID8gdmFsdWVzLnRyYW5zZm9ybU9yaWdpblkuY3VycmVudCA6IDUwLFxuICAgICAgICAgICAgb3JpZ2luID0ge1xuICAgICAgICAgICAgICAgIHg6IGJvdW5kaW5nQm94LndpZHRoICogKHRyYW5zZm9ybU9yaWdpblggLyAxMDApICsgYm91bmRpbmdCb3gueCxcbiAgICAgICAgICAgICAgICB5OiBib3VuZGluZ0JveC5oZWlnaHQgKiAodHJhbnNmb3JtT3JpZ2luWSAvIDEwMCkgKyBib3VuZGluZ0JveC55XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3ZnT3JpZ2luID0gb3JpZ2luO1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzO1xuICAgICAgICBlYWNoKGJ1aWxkKHN0YXRlLCB0aGlzLnN2Z09yaWdpbiksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBhdHRyUm9sZS5zZXQoYWN0b3IuZWxlbWVudCwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvc3ZnL3N2Z1JvbGUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJvbGUgPSByZXF1aXJlKCcuLi9Sb2xlJyk7XG52YXIgYXR0clJvbGUgPSByZXF1aXJlKCcuLi9hdHRyL2F0dHJSb2xlJyk7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2g7XG5cbi8qXG4gICAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgICBAcGFyYW0gW251bWJlcl06IFRvdGFsIGxlbmd0aFxuKi9cbnZhciBwZXJjZW50VG9QaXhlbHMgPSBmdW5jdGlvbiAocGVyY2VudGFnZSwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIChwYXJzZUZsb2F0KHBlcmNlbnRhZ2UpIC8gMTAwKSAqIGxlbmd0aCArICdweCc7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBzdHlsZXNcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IFNWRyBQYXRoIHByb3BlcnRpZXNcbiAgICBAcGFyYW0gW29iamVjdF06IExlbmd0aCBvZiBwYXRoXG4gICAgQHJldHVybnMgW29iamVjdF06IEtleS92YWx1ZSBwYWlycyBvZiB2YWxpZCBDU1MgcHJvcGVydGllc1xuKi9cbnZhciBjcmVhdGVTdHlsZXMgPSBmdW5jdGlvbiAocHJvcHMsIGxlbmd0aCkge1xuICAgIHZhciBoYXNEYXNoQXJyYXkgPSBmYWxzZSxcbiAgICAgICAgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgICAgICAgICAgbGVuZ3RoOiAwLFxuICAgICAgICAgICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZXMgPSB7fTtcblxuICAgIGVhY2gocHJvcHMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGtleSA9IFNWR0RyYXdQYXRoLl9tYXBba2V5XSB8fCBrZXk7XG5cbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNob2Zmc2V0J10gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG59O1xuXG4vKlxuICAgIERyYXcgUGF0aCByb2xlXG4qL1xudmFyIFNWR0RyYXdQYXRoID0gbmV3IFJvbGUoe1xuICAgIF9tYXA6IHJlcXVpcmUoJy4vbWFwJyksXG5cbiAgICBfdHlwZU1hcDoge1xuICAgICAgICBzdHJva2U6ICdjb2xvcicsXG4gICAgICAgIGQ6ICdjb21wbGV4J1xuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGF0aExlbmd0aCA9IHRoaXMuZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBVcGRhdGUgYHBhdGhgIHN0eWxlcyBhbmQgaWYgYGVsZW1lbnRgIGlzIHByZXNlbnQsIHNldFxuICAgICAgICB4LCB5IGFuZCByb3RhdGlvblxuICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgYXR0clJvbGUudXBkYXRlLmNhbGwodGhpcywgY3JlYXRlU3R5bGVzKHN0YXRlLCB0aGlzLnBhdGhMZW5ndGgpKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTVkdEcmF3UGF0aDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9wYXRoL2RyYXdQYXRoUm9sZS5qc1xuICoqLyIsInZhciBlYWNoID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJykuZWFjaCxcblxuICAgIFZhbHVlVHlwZU1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7fTtcblxuVmFsdWVUeXBlTWFuYWdlci5wcm90b3R5cGUgPSB7XG4gICAgZXh0ZW5kOiBmdW5jdGlvbiAobmFtZSwgbW9kKSB7XG4gICAgICAgIHZhciBtdWx0aU1vZHMgPSAodHlwZW9mIG5hbWUgPT0gJ29iamVjdCcpLFxuICAgICAgICAgICAgbW9kcyA9IG11bHRpTW9kcyA/IG5hbWUgOiB7fTtcblxuICAgICAgICAvLyBJZiB3ZSBqdXN0IGhhdmUgb25lIG1vZHVsZSwgY29lcmNlXG4gICAgICAgIGlmICghbXVsdGlNb2RzKSB7XG4gICAgICAgICAgICBtb2RzW25hbWVdID0gbW9kO1xuICAgICAgICB9XG5cbiAgICAgICAgZWFjaChtb2RzLCAoa2V5LCB0aGlzTW9kKSA9PiB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzTW9kO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZGVmYXVsdFByb3BzOiBmdW5jdGlvbiAodHlwZSwga2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZVR5cGUgPSB0aGlzW3R5cGVdLFxuICAgICAgICAgICAgZGVmYXVsdFByb3BzID0gKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpID8gdmFsdWVUeXBlLmRlZmF1bHRQcm9wc1trZXldIHx8IHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMgOiB7fTtcblxuICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBmYWxzZTtcblxuICAgICAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uIChrZXksIG1vZCkge1xuICAgICAgICAgICAgaWYgKG1vZC50ZXN0ICYmIG1vZC50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFZhbHVlVHlwZU1hbmFnZXIoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmFnZXIuanNcbiAqKi8iLCJ2YXIgUHJvY2VzcyA9IHJlcXVpcmUoJy4uL3Byb2Nlc3MvUHJvY2VzcycpLFxuICAgIFF1ZXVlID0gcmVxdWlyZSgnLi4vaW5jL1F1ZXVlJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBzZWxlY3QgPSByZXF1aXJlKCcuLi9pbmMvc2VsZWN0LWRvbScpLFxuICAgIHVwZGF0ZSA9IHJlcXVpcmUoJy4vdXBkYXRlJyksXG4gICAgdmFsdWVPcHMgPSByZXF1aXJlKCcuL3ZhbHVlLW9wZXJhdGlvbnMnKSxcblxuICAgIC8qXG4gICAgICAgIFJvbGUgaW1wb3J0c1xuICAgICovXG4gICAgZGVmYXVsdFJvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9kZWZhdWx0Um9sZScpLFxuICAgIGNzc1JvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9jc3MvY3NzUm9sZScpLFxuICAgIHN2Z1JvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9zdmcvc3ZnUm9sZScpLFxuICAgIGRyYXdQYXRoUm9sZSA9IHJlcXVpcmUoJy4uL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlJyksXG5cbiAgICBBY3Rpb24gPSByZXF1aXJlKCcuLi9hY3Rpb25zL0FjdGlvbicpLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoO1xuXG5jbGFzcyBBY3RvciB7XG5cbiAgICAvKlxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgICAgICB2YXIgcHJvcHMgPSB1dGlscy5pc1N0cmluZyhvcHRzKSA/IHsgZWxlbWVudDogb3B0cyB9IDogb3B0cztcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlID0geyB2YWx1ZXM6IHt9IH07XG4gICAgICAgIHRoaXMucXVldWUgPSBuZXcgUXVldWUoKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzID0gbmV3IFByb2Nlc3ModGhpcywgdXBkYXRlKTtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMubnVtQWN0aXZlID0gMDtcbiAgICAgICAgdGhpcy5hY3Rpb25Db3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5hY3RpdmVWYWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVQYXJlbnRzID0gW107XG5cbiAgICAgICAgLy8gR2V0IGFjdHVhbCBlbGVtZW50cyBpZiB0aGlzIGlzIGEgc2VsZWN0b3JcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHByb3BzLmVsZW1lbnQpKSB7XG4gICAgICAgICAgICBwcm9wcy5lbGVtZW50ID0gc2VsZWN0KHByb3BzLmVsZW1lbnQpWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hc3NpZ25Sb2xlcyhwcm9wcy5lbGVtZW50LCBwcm9wcy5hcywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0KHByb3BzKTtcbiAgICAgICAgdGhpcy5pbml0Um9sZXMoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTZXQgQWN0b3IgcHJvcGVydGllcyBhbmQgdmFsdWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHNldChvcHRzKSB7XG4gICAgICAgIGVhY2gob3B0cywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgIT09ICd2YWx1ZXMnICYmIGtleSAhPT0gJ2FjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG9wdHMgJiYgb3B0cy52YWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVPcHMucHJvY2Vzcyh0aGlzLnZhbHVlcywgb3B0cy52YWx1ZXMsIG9wdHMsICdjdXJyZW50JywgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBhbGwgYWN0aXZlIGFjdGlvbnMgZm9yIGFueSB0aGF0IGNhbiBiZSByZW1vdmVkXG4gICAgICAgIGVhY2godGhpcy5hY3RpdmVBY3Rpb25zLCAoaWQsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgbGV0IGFjdGlvbklzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGVhY2godGhpcy52YWx1ZXMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uSXNBY3RpdmUgPSAodmFsdWUuYWN0aW9uID09PSBhY3Rpb24pID8gdHJ1ZSA6IGFjdGlvbklzQWN0aXZlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghYWN0aW9uSXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuYmluZEFjdGlvbihpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEJpbmQgQWN0aW9uLXNwZWNpZmljIGNvbnRyb2xzIHRvIEFjdG9yXG5cbiAgICAgICAgQHJldHVybnMgW0NvbnRyb2xzXVxuICAgICovXG4gICAgY29udHJvbHMoYWN0aW9uKSB7XG4gICAgICAgIHZhciBDb250cm9scyA9IGFjdGlvbi5nZXRDb250cm9scygpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnRyb2xzKHRoaXMsIGFjdGlvbi5nZXRQbGF5YWJsZSgpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBhIG5ldyBBY3Rpb25cblxuICAgICAgICBAcGFyYW0gW0FjdGlvbiB8fCBudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbSW5wdXQgfHwgZXZlbnRdIChvcHRpb25hbClcbiAgICAgICAgQHBhcmFtIFtib29sZWFuXSAob3B0aW9uYWwpOiBkZWZpbmVkIGB0cnVlYCBpZiB3ZSBzdXJwcmVzcyBtYWtpbmcgbmV3IHF1ZXVlXG4gICAgICAgIEByZXR1cm5zIFtDb250cm9sc11cbiAgICAqL1xuICAgIHN0YXJ0KHRvU2V0LCBpbnB1dCkge1xuICAgICAgICBsZXQgYWN0aW9uRXhpc3RzID0gdXRpbHMuaXNOdW0odG9TZXQpLFxuICAgICAgICAgICAgYWN0aW9uID0gKGFjdGlvbkV4aXN0cykgPyB0aGlzLmdldEFjdGlvbih0b1NldCkgOiB0b1NldC5nZXRQbGF5YWJsZSgpLFxuICAgICAgICAgICAgb3B0cyA9IGFjdGlvbi5nZXRTZXQoKSxcbiAgICAgICAgICAgIHN1cnByZXNzUXVldWVDbGVhciA9IChhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID09PSBmYWxzZSk7XG5cbiAgICAgICAgb3B0cy5hY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgICAgdGhpcy5zZXQob3B0cyk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICBhY3Rpb24uYmluZElucHV0KGlucHV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3VycHJlc3NRdWV1ZUNsZWFyKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIGFsbCBSb2xlIG9uU3RhcnRzIGlmIG5vdCBhbHJlYWR5IGFjdGl2ZVxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIGxldCBudW1Sb2xlcyA9IHRoaXMucm9sZXMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Sb2xlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvbGUgPSB0aGlzLnJvbGVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChyb2xlLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGUuc3RhcnQuY2FsbCh0aGlzLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIG5ldyBhY3Rpb24gb25TdGFydFxuICAgICAgICBpZiAoIWFjdGlvbi5pc0FjdGl2ZSAmJiBhY3Rpb24ub25TdGFydCkge1xuICAgICAgICAgICAgYWN0aW9uLm9uU3RhcnQuY2FsbCh0aGlzLCB0aGlzLCBhY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuXG4gICAgICAgIGlmICghYWN0aW9uRXhpc3RzKSB7XG4gICAgICAgICAgICBsZXQgQ29udHJvbHMgPSBhY3Rpb24uZ2V0Q29udHJvbHMoKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29udHJvbHModGhpcywgYWN0aW9uLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFBhdXNlIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGVhY2godGhpcy5hY3RpdmVBY3Rpb25zLCAoaWQsIGFjdGlvbikgPT4gYWN0aW9uLmRlYWN0aXZhdGUoKSk7XG4gICAgICAgIHRoaXMucHJvY2Vzcy5zdG9wKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFJlc3VtZSBhbGwgYWN0aXZlIEFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW2ludF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJucyBbQWN0b3JdO1xuICAgICovXG4gICAgcmVzdW1lKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZWFjaCh0aGlzLmFjdGl2ZUFjdGlvbnMsIChpZCwgYWN0aW9uKSA9PiBhY3Rpb24uYWN0aXZhdGUoKSk7XG4gICAgICAgIHRoaXMucHJvY2Vzcy5zdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdG9wIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgZWFjaCh0aGlzLmFjdGl2ZUFjdGlvbnMsIChpZCkgPT4gdGhpcy51bmJpbmRBY3Rpb24oaWQpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVG9nZ2xlIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgPyB0aGlzLnBhdXNlKCkgOiB0aGlzLnJlc3VtZSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN5bmNzIGBlbGVtZW50YCB3aXRoIGN1cnJlbnQgcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHN5bmMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KG5ldyBBY3Rpb24oeyB2YWx1ZXM6IHRoaXMudmFsdWVzIH0pKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBZGQgYSBuZXcgQWN0aW9uIHRvIHRoZSBxdWV1ZVxuICAgICovXG4gICAgdGhlbigpIHtcbiAgICAgICAgdGhpcy5xdWV1ZS5hZGQuYXBwbHkodGhpcy5xdWV1ZSwgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgRXhlY3V0ZSBuZXh0IGluIHF1ZXVlXG4gICAgKi9cbiAgICBuZXh0KCkge1xuICAgICAgICB2YXIgbmV4dCA9IHRoaXMucXVldWUubmV4dCgpO1xuXG4gICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jKG5leHRbMF0pKSB7XG4gICAgICAgICAgICAgICAgbmV4dFswXSgpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgLy8gT3IgdGhpcyBpcyBhbiBhY3Rpb25cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV4dC5wdXNoKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0LmFwcGx5KHRoaXMsIG5leHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBc3NpZ24gUm9sZXMgYmFzZWQgb24gZWxlbWVudCBhbmQgbWFudWFsbHkgcHJvdmlkZWQgcHJvcHNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEVsZW1lbnRcbiAgICAgICAgQHBhcmFtIFtSb2xlIHx8IGFycmF5XVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dIChvcHRpb25hbClcbiAgICAqL1xuICAgIGFzc2lnblJvbGVzKGVsZW1lbnQsIG1hbnVhbFJvbGVzLCBzdXJwcmVzc0luaXQpIHtcbiAgICAgICAgLy8gQWxsIEFjdG9ycyBnZXQgYSBkZWZhdWx0IFJvbGUgdGhhdCBoYW5kbGVzIHVzZXIgY2FsbGJhY2tzXG4gICAgICAgIHRoaXMucm9sZXMgPSBbIGRlZmF1bHRSb2xlIF07XG5cbiAgICAgICAgLy8gQXV0by1hc3NpZ24gaWYgbm8gbWFudWFsbHktc2V0IFJvbGVzXG4gICAgICAgIGlmICghbWFudWFsUm9sZXMgJiYgZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5hdXRvQXNzaWduUm9sZXMoZWxlbWVudCk7XG5cbiAgICAgICAgLy8gT3IgbWFudWFsbHkgc2V0IGlmIHByb3ZpZGVkXG4gICAgICAgIH0gZWxzZSBpZiAobWFudWFsUm9sZXMpIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0FycmF5KG1hbnVhbFJvbGVzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaC5hcHBseSh0aGlzLnJvbGVzLCBtYW51YWxSb2xlcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaChtYW51YWxSb2xlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN1cnByZXNzSW5pdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0Um9sZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEF1dG9tYXRpY2FsbHkgYXNzaWduIFJvbGVzIGJhc2VkIG9uIGVsZW1lbnQsIGRlc2lnbmVkXG4gICAgICAgIHRvIGJlIGV4dGVuZGVkXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBFbGVtZW50XG4gICAgKi9cbiAgICBhdXRvQXNzaWduUm9sZXMoZWxlbWVudCkge1xuICAgICAgICAvLyBBZGQgQ1NTIHJvbGUgaWYgSFRNTEVsZW1lbnRcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5yb2xlcy5wdXNoKGNzc1JvbGUpO1xuXG4gICAgICAgIC8vIEFkZCBTVkcgcm9sZSBpZiBTVkcgZWxlbWVudFxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2goc3ZnUm9sZSk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBEcmF3IFBhdGggcm9sZSBpZiBwYXRoIGVsZW1lbnRcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaChkcmF3UGF0aFJvbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgRmlyZSBpbml0IGNhbGxiYWNrc1xuICAgICovXG4gICAgaW5pdFJvbGVzKCkge1xuICAgICAgICAvLyBGaXJlIGluaXQgY2FsbGJhY2tcbiAgICAgICAgdGhpcy5yb2xlcy5mb3JFYWNoKChyb2xlKSA9PiB7XG4gICAgICAgICAgICBpZiAocm9sZS5pbml0KSB7XG4gICAgICAgICAgICAgICAgcm9sZS5pbml0LmNhbGwodGhpcywgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5maXJzdEZyYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzcy5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gYW5kIHJldHVybiBpdHMgdGFibGUgaWRcblxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHJldHVybnMgW2ludF1cbiAgICAqL1xuICAgIGJpbmRBY3Rpb24oYWN0aW9uLCBpZCkge1xuICAgICAgICBpZiAoaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWQgPSB0aGlzLmFjdGlvbkNvdW50ZXIrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5oYXNBY3Rpb24oaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdID0gYWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5udW1BY3RpdmUrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICB1bmJpbmRBY3Rpb24oaWQpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICAgIHRoaXMubnVtQWN0aXZlLS07XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5udW1BY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWN0aW9uKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgIH1cblxuICAgIGhhc0FjdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0QWN0aW9uKGlkKSAhPT0gdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBVcGRhdGUgcHJvY2Vzc2luZyBvcmRlclxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl1cbiAgICAgICAgQHBhcmFtIFtib29sZWFuXVxuICAgICovXG4gICAgdXBkYXRlT3JkZXIoa2V5LCBtb3ZlVG9CYWNrLCBoYXNDaGlsZHJlbikge1xuICAgICAgICB2YXIgb3JkZXIgPSAoIWhhc0NoaWxkcmVuKSA/IHRoaXMuYWN0aXZlVmFsdWVzIDogdGhpcy5hY3RpdmVQYXJlbnRzLFxuICAgICAgICAgICAgcG9zaXRpb24gPSBvcmRlci5pbmRleE9mKGtleSk7XG5cbiAgICAgICAgLy8gSWYga2V5IGlzbid0IGxpc3Qgb3IgbW92ZVRvQmFjayBpcyBzZXQgdG8gdHJ1ZSwgYWRkIGtleVxuICAgICAgICBpZiAocG9zaXRpb24gPT09IC0xIHx8IG1vdmVUb0JhY2spIHtcbiAgICAgICAgICAgIG9yZGVyLnB1c2goa2V5KTtcblxuICAgICAgICAgICAgLy8gSWYga2V5IGFscmVhZHkgZXhpc3RzLCByZW1vdmVcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA+IC0xKSB7XG4gICAgICAgICAgICAgICAgb3JkZXIuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFtib29sZWFuXTogSXMgdGhpcyBBY3RvciBhY3RpdmU/XG4gICAgZ2V0IGlzQWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gICAgfVxuXG4gICAgLy8gU2V0IGhhc0NoYW5nZWQgdG8gdHJ1ZSBpcyB0aGlzIGlzIG5vdyBhY3RpdmVcbiAgICBzZXQgaXNBY3RpdmUoc3RhdHVzKSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHN0YXR1cztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lzQWN0aXZlID0gc3RhdHVzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBY3RvcjtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0b3IvQWN0b3IuanNcbiAqKi8iLCJ2YXIgQWN0b3IgPSByZXF1aXJlKCcuLi9hY3Rvci9BY3RvcicpO1xudmFyIFR3ZWVuID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Ud2VlbicpO1xudmFyIGNhbGNSZWxhdGl2ZSA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJykucmVsYXRpdmVWYWx1ZTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xudmFyIGlzRnVuYyA9IHV0aWxzLmlzRnVuYztcbnZhciBpc1N0cmluZyA9IHV0aWxzLmlzU3RyaW5nO1xuXG52YXIgdGltZWxpbmUgPSBuZXcgVHdlZW4oe1xuICAgIHZhbHVlczoge1xuICAgICAgICBwbGF5aGVhZDoge1xuICAgICAgICAgICAgZWFzZTogJ2xpbmVhcicsXG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgdG86IDBcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBjaGVja0FjdGlvbnMoeyBwbGF5aGVhZCB9LCBzZXF1ZW5jZSkge1xuICAgIHNlcXVlbmNlLmNoZWNrLmZvckVhY2goKHRvQ2hlY2ssIGkpID0+IHtcbiAgICAgICAgaWYgKHBsYXloZWFkID49IHRvQ2hlY2sudGltZXN0YW1wKSB7XG4gICAgICAgICAgICB0b0NoZWNrLmNhbGxiYWNrKCk7XG4gICAgICAgICAgICBzZXF1ZW5jZS5jaGVjay5zcGxpY2UoaSwgLTEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ2FsbGJhY2soYWN0b3IsIGFjdGlvbikge1xuICAgIHZhciBjYWxsYmFjaztcblxuICAgIGlmIChhY3Rvci5lYWNoKSB7XG4gICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgYWN0b3IuZWFjaCgoYWN0b3IpID0+IHtcbiAgICAgICAgICAgICAgICBhY3Rvci5zdGFydChhY3Rpb24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIGFjdG9yLnN0YXJ0KGFjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FsbGJhY2s7XG59XG5cbmNsYXNzIFNlcXVlbmNlIGV4dGVuZHMgQWN0b3Ige1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGxhYmVsczoge30sXG4gICAgICAgICAgICBjaGVjazogW10sXG4gICAgICAgICAgICBzZXF1ZW5jZTogW10sXG4gICAgICAgICAgICBjdXJyZW50VGltZXN0YW1wOiAwLFxuICAgICAgICAgICAgb25VcGRhdGU6IGNoZWNrQWN0aW9uc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGQoYWN0b3IsIGFjdGlvbikge1xuICAgICAgICB2YXIgaXNDYWxsYmFjayA9IGlzRnVuYyhhY3RvciksXG4gICAgICAgICAgICBjYWxsYmFjayA9IGlzQ2FsbGJhY2sgPyBhY3RvciA6IGdlbmVyYXRlQ2FsbGJhY2soYWN0b3IsIGFjdGlvbiksXG4gICAgICAgICAgICBvZmZzZXQgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgdGltZXN0YW1wID0gaXNTdHJpbmcob2Zmc2V0KSA/IGNhbGNSZWxhdGl2ZSh0aGlzLmN1cnJlbnRUaW1lc3RhbXAsIG9mZnNldCkgOiB0aGlzLmN1cnJlbnRUaW1lc3RhbXA7XG5cbiAgICAgICAgdGhpcy5zZXF1ZW5jZS5wdXNoKHsgdGltZXN0YW1wLCBjYWxsYmFjayB9KTtcblxuICAgICAgICBpZiAoYWN0aW9uICYmIGFjdGlvbi5kdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZXN0YW1wID0gdGltZXN0YW1wICsgYWN0aW9uLmR1cmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KHRpbWVsaW5lLmV4dGVuZCh7XG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5jdXJyZW50VGltZXN0YW1wLFxuICAgICAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgcGxheWhlYWQ6IHRoaXMuY3VycmVudFRpbWVzdGFtcFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50VGltZXN0YW1wID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25TdGFydCgpIHtcbiAgICAgICAgdGhpcy5jaGVjayA9IHRoaXMuc2VxdWVuY2Uuc2xpY2UoKTtcbiAgICB9XG5cbiAgICBsYWJlbChuYW1lLCB0aW1lc3RhbXApIHtcbiAgICAgICAgdGhpcy5sYWJlbHNbbmFtZV0gPSB0aW1lc3RhbXA7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcXVlbmNlL1NlcXVlbmNlLmpzXG4gKiovIiwiLypcbiAgICBJbnB1dCBjb250cm9sbGVyXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMuanMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscy5qcycpLFxuICAgIEhpc3RvcnkgPSByZXF1aXJlKCcuLi9pbmMvSGlzdG9yeS5qcycpLFxuXG4gICAgLypcbiAgICAgICAgSW5wdXQgY29uc3RydWN0b3JcbiAgICAgICAgXG4gICAgICAgICAgICBTeW50YXhcbiAgICAgICAgICAgICAgICBuZXdJbnB1dChuYW1lLCB2YWx1ZVssIHBvbGxdKVxuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgdG8gdHJhY2tcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBJbml0aWFsIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dIChvcHRpb25hbCk6IEZ1bmN0aW9uIHRvIHBvbGwgSW5wdXQgZGF0YVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBuZXdJbnB1dChwcm9wc1ssIHBvbGxdKVxuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCBvZiB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl0gKG9wdGlvbmFsKTogRnVuY3Rpb24gdG8gcG9sbCBJbnB1dCBkYXRhXG5cbiAgICAgICAgQHJldHVybiBbSW5wdXRdXG4gICAgKi9cbiAgICBJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBvbGxQb3MgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcblxuICAgICAgICB0aGlzLmN1cnJlbnQgPSB7fTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB7fTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHt9O1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgSGlzdG9yeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIFxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jKGFyZ3VtZW50c1twb2xsUG9zXSkpIHtcbiAgICAgICAgICAgIHRoaXMucG9sbCA9IGFyZ3VtZW50c1twb2xsUG9zXTtcbiAgICAgICAgfVxuICAgIH07XG5cbklucHV0LnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogTnVtYmVyIG9mIGZyYW1lcyBvZiBpbmFjdGl2aXR5IGJlZm9yZSB2ZWxvY2l0eSBpcyB0dXJuZWQgdG8gMFxuICAgIG1heEluYWN0aXZlRnJhbWVzOiAyLFxuICAgIFxuICAgIC8vIFtudW1iZXJdOiBOdW1iZXIgb2YgZnJhbWVzIGlucHV0IGhhc24ndCBiZWVuIHVwZGF0ZWRcbiAgICBpbmFjdGl2ZUZyYW1lczogMCxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgbGF0ZXN0IGlucHV0IHZhbHVlc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddIChvcHRpb25hbCk6IE5hbWUgb2Ygc3BlY2lmaWMgcHJvcGVydHkgdG8gcmV0dXJuXG4gICAgICAgIEByZXR1cm4gW29iamVjdCB8fCBudW1iZXJdOiBMYXRlc3QgaW5wdXQgdmFsdWVzIG9yLCBpZiBzcGVjaWZpZWQsIHNpbmdsZSB2YWx1ZVxuICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICB2YXIgbGF0ZXN0ID0gdGhpcy5oaXN0b3J5LmdldCgpLFxuICAgICAgICAgICAgdmFsID0gKHByb3AgIT09IHVuZGVmaW5lZCkgPyBsYXRlc3RbcHJvcF0gOiBsYXRlc3Q7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFVwZGF0ZSB0aGUgaW5wdXQgdmFsdWVzXG4gICAgICAgIFxuICAgICAgICBTeW50YXhcbiAgICAgICAgICAgIGlucHV0LnVwZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgdG8gdHJhY2tcbiAgICAgICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEluaXRpYWwgdmFsdWVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlucHV0LnVwZGF0ZShwcm9wcylcbiAgICAgICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCBvZiB2YWx1ZXNcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgQHJldHVybiBbSW5wdXRdXG4gICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB7fTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW0oYXJnMSkpIHtcbiAgICAgICAgICAgIHZhbHVlc1thcmcwXSA9IGFyZzE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSBhcmcwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oaXN0b3J5LmFkZCh1dGlscy5tZXJnZSh0aGlzLmN1cnJlbnQsIHZhbHVlcykpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBDaGVjayBmb3IgaW5wdXQgbW92ZW1lbnQgYW5kIHVwZGF0ZSBwb2ludGVyIG9iamVjdCdzIHByb3BlcnRpZXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGltZXN0YW1wIG9mIGZyYW1lXG4gICAgICAgIEByZXR1cm4gW0lucHV0XVxuICAgICovXG4gICAgb25GcmFtZTogZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuICAgICAgICB2YXIgbGF0ZXN0LCBoYXNDaGFuZ2VkO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgcHJvdmlkZWQgdGltZXN0YW1wIGFnYWluc3QgbGFzdEZyYW1lIHRpbWVzdGFtcCBhbmQgcmV0dXJuIGlucHV0IGhhcyBhbHJlYWR5IGJlZW4gdXBkYXRlZFxuICAgICAgICBpZiAodGltZXN0YW1wID09PSB0aGlzLmxhc3RGcmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsYXRlc3QgPSAodGhpcy5wb2xsKSA/IHRoaXMucG9sbCgpIDogdGhpcy5oaXN0b3J5LmdldCgpO1xuICAgICAgICBoYXNDaGFuZ2VkID0gdXRpbHMuaGFzQ2hhbmdlZCh0aGlzLmN1cnJlbnQsIGxhdGVzdCk7XG5cbiAgICAgICAgLy8gSWYgaW5wdXQgaGFzIGNoYW5nZWQgYmV0d2VlbiBmcmFtZXMgIFxuICAgICAgICBpZiAoaGFzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IGNhbGMub2Zmc2V0KHRoaXMuY3VycmVudCwgbGF0ZXN0KTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGxhdGVzdDtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuXG4gICAgICAgIC8vIE9yIGl0IGhhc24ndCBtb3ZlZCBhbmQgb3VyIGZyYW1lIGxpbWl0IGhhcyBiZWVuIHJlYWNoZWRcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluYWN0aXZlRnJhbWVzID49IHRoaXMubWF4SW5hY3RpdmVGcmFtZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSBjYWxjLm9mZnNldCh0aGlzLmN1cnJlbnQsIHRoaXMuY3VycmVudCk7XG4gICAgICAgIFxuICAgICAgICAvLyBPciBpbnB1dCBoYXNuJ3QgY2hhbmdlZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcysrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxhc3RGcmFtZSA9IHRpbWVzdGFtcDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5wdXQvSW5wdXQuanNcbiAqKi8iLCJ2YXIgQWN0b3IgPSByZXF1aXJlKCcuLi9hY3Rvci9BY3RvcicpLFxuICAgIFR3ZWVuID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Ud2VlbicpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmNvbnN0IERFRkFVTFRfU1RBR0dFUl9FQVNFID0gJ2xpbmVhcic7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ2FsbGJhY2sobWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gbWV0aG9kO1xuXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKG1ldGhvZCkpIHtcbiAgICAgICAgY2FsbGJhY2sgPSAobWVtYmVyKSA9PiBtZW1iZXJbbWV0aG9kXSguLi5hcmdzKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc0Z1bmMobWV0aG9kKSkge1xuICAgICAgICBjYWxsYmFjayA9IChtZW1iZXIpID0+IG1lbWJlci5zdGFydChtZXRob2QsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHJldHVybiBjYWxsYmFjaztcbn1cblxuY2xhc3MgSXRlcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lbWJlcnMpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICAgIGlmIChtZW1iZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChtZW1iZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0YWdnZXIgPSBuZXcgQWN0b3IoKTtcbiAgICB9XG5cbiAgICBhZGQobWVtYmVycykge1xuICAgICAgICB0aGlzLm1lbWJlcnMgPSB0aGlzLm1lbWJlcnMuY29uY2F0KG1lbWJlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGVhY2gobWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGdlbmVyYXRlQ2FsbGJhY2sobWV0aG9kLCAuLi5hcmdzKTtcbiAgICAgICAgdGhpcy5tZW1iZXJzLmZvckVhY2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBlYWNoSW50b05ldyhtZXRob2QsIC4uLmFyZ3MpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZ2VuZXJhdGVDYWxsYmFjayhtZXRob2QsIC4uLmFyZ3MpLFxuICAgICAgICAgICAgbmV3SXRlcmF0b3IgPSBuZXcgSXRlcmF0b3IoKTtcblxuICAgICAgICB0aGlzLm1lbWJlcnMuZm9yRWFjaCgobWVtYmVyKSA9PiBuZXdJdGVyYXRvci5hZGQoY2FsbGJhY2sobWVtYmVyKSkpO1xuXG4gICAgICAgIHJldHVybiBuZXdJdGVyYXRvcjtcbiAgICB9XG5cbiAgICBzdGFnZ2VyKG1ldGhvZCwgcHJvcHMsIC4uLmFyZ3MpIHtcbiAgICAgICAgdmFyIHRlbXBNZW1iZXJzID0gdXRpbHMuY29weUFycmF5KHRoaXMubWVtYmVycyksXG4gICAgICAgICAgICBudW1NZW1iZXJzID0gdGVtcE1lbWJlcnMubGVuZ3RoLFxuICAgICAgICAgICAgcHJvcHNJc0ludGVydmFsID0gdXRpbHMuaXNOdW0ocHJvcHMpLFxuICAgICAgICAgICAgaW50ZXJ2YWwgPSBwcm9wc0lzSW50ZXJ2YWwgPyBwcm9wcyA6IHByb3BzLmludGVydmFsLFxuICAgICAgICAgICAgc3RhZ2dlclByb3BzID0ge30sXG4gICAgICAgICAgICBpID0gLTEsXG4gICAgICAgICAgICBjYWxsYmFjayA9IGdlbmVyYXRlQ2FsbGJhY2sobWV0aG9kLCAuLi5hcmdzKTtcblxuICAgICAgICBzdGFnZ2VyUHJvcHMudmFsdWVzID0ge1xuICAgICAgICAgICAgb25Db21wbGV0ZTogcHJvcHNJc0ludGVydmFsID8gdW5kZWZpbmVkIDogcHJvcHMub25Db21wbGV0ZSxcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiAtMC42LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIG51bU1lbWJlcnMsXG4gICAgICAgICAgICAgICAgZWFzZTogcHJvcHNJc0ludGVydmFsID8gREVGQVVMVF9TVEFHR0VSX0VBU0UgOiBwcm9wcy5lYXNlIHx8IERFRkFVTFRfU1RBR0dFUl9FQVNFLFxuICAgICAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvOiBudW1NZW1iZXJzIC0gMC42XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc3RhZ2dlclByb3BzLm9uVXBkYXRlID0gKG91dHB1dCkgPT4ge1xuICAgICAgICAgICAgdmFyIG5ld0luZGV4ID0gb3V0cHV0LmksXG4gICAgICAgICAgICAgICAgZ2FwSW5kZXggPSBpICsgMTtcblxuICAgICAgICAgICAgLy8gSWYgb3VyIG5ldyBpbmRleCBpcyBvbmx5IG9uZSBtb3JlIHRoYW4gdGhlIHByZXZpb3VzIGluZGV4LCBmaXJlIGltbWVkaWV0bHlcbiAgICAgICAgICAgIGlmIChuZXdJbmRleCA9PT0gaSArIDEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0ZW1wTWVtYmVyc1tnYXBJbmRleF0sIGdhcEluZGV4KTtcblxuICAgICAgICAgICAgLy8gT3IgbG9vcCB0aHJvdWdoIHRoZSBkaXN0YW5jZSB0byBmaXJlIGFsbCBpbmRlY2llcy4gSW5jcmVhc2UgZGVsYXkuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoOyBnYXBJbmRleCA8PSBuZXdJbmRleDsgZ2FwSW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0ZW1wTWVtYmVyc1tnYXBJbmRleF0sIGdhcEluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGkgPSBuZXdJbmRleDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9zdGFnZ2VyLnN0YXJ0KG5ldyBUd2VlbihzdGFnZ2VyUHJvcHMpKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBcnJheSBtYW5pcHVsYXRpb25cbiAgICAqL1xuICAgIHJldmVyc2UoKSB7XG4gICAgICAgIHRoaXMubWVtYmVycy5yZXZlcnNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJdGVyYXRvcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pdGVyYXRvci9JdGVyYXRvci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpLFxuXG4gICAgLypcbiAgICAgICAgUHJvY2VzcyBjb25zdHJ1Y3RvclxuICAgICAgICBcbiAgICAgICAgU3ludGF4XG4gICAgICAgICAgICB2YXIgcHJvY2VzcyA9IG5ldyBQcm9jZXNzKHNjb3BlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB2YXIgcHJvY2VzcyA9IG5ldyBQcm9jZXNzKGNhbGxiYWNrKTtcbiAgICAqL1xuICAgIFByb2Nlc3MgPSBmdW5jdGlvbiAoc2NvcGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBoYXNTY29wZSA9IChjYWxsYmFjayAhPT0gdW5kZWZpbmVkKTtcblxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gaGFzU2NvcGUgPyBjYWxsYmFjayA6IHNjb3BlO1xuICAgICAgICB0aGlzLnNjb3BlID0gaGFzU2NvcGUgPyBzY29wZSA6IHRoaXM7XG4gICAgICAgIHRoaXMuaWQgPSBtYW5hZ2VyLnJlZ2lzdGVyKCk7XG5cbiAgICAgICAgLy8gW2Jvb2xlYW5dOiBJcyB0aGlzIHByb2Nlc3MgY3VycmVudGx5IGFjdGl2ZT9cbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH07XG5cblByb2Nlc3MucHJvdG90eXBlID0ge1xuICAgIC8qXG4gICAgICAgIEZpcmUgY2FsbGJhY2tcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbdGltZXN0YW1wXTogVGltZXN0YW1wIG9mIGN1cnJlbnRseS1leGVjdXRlZCBmcmFtZVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuICAgICovXG4gICAgZmlyZTogZnVuY3Rpb24gKHRpbWVzdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrLmNhbGwodGhpcy5zY29wZSwgdGltZXN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHdlJ3JlIHJ1bm5pbmcgYXQgYW4gaW50ZXJ2YWwsIGRlYWN0aXZhdGUgYWdhaW5cbiAgICAgICAgaWYgKHRoaXMuaXNJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0YXJ0IHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogRHVyYXRpb24gb2YgcHJvY2VzcyBpbiBtcywgMCBpZiBpbmRlZmluaXRlXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdG9wVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0b3AoKTtcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5pc1N0b3BUaW1lckFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFN0b3AgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQWN0aXZhdGUgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICBtYW5hZ2VyLmFjdGl2YXRlKHRoaXMsIHRoaXMuaWQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRGVhY3RpdmF0ZSBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIG1hbmFnZXIuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRmlyZSBwcm9jZXNzIGV2ZXJ5IHggbXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIG1zIHRvIHdhaXQgYmV0d2VlbiByZWZpcmluZyBwcm9jZXNzLlxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgZXZlcnk6IGZ1bmN0aW9uIChpbnRlcnZhbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuXG4gICAgICAgIHRoaXMuaXNJbnRlcnZhbCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5pbnRlcnZhbFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5hY3RpdmF0ZSgpO1xuICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmlzSW50ZXJ2YWxUaW1lQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQ2xlYXIgYWxsIHRpbWVyc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFxuICAgICovXG4gICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0ludGVydmFsID0gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5pc1N0b3BUaW1lckFjdGl2ZSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RvcFRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuaXNJbnRlcnZhbFRpbWVBY3RpdmUpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbFRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9jZXNzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb2Nlc3MvUHJvY2Vzcy5qc1xuICoqLyIsInZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xudmFyIGVhY2ggPSB1dGlscy5lYWNoO1xuXG4vKlxuICAgIFJvbGUgY2xhc3MgY29uc3RydWN0b3JcblxuICAgIEBwYXJhbSBbb2JqZWN0XTogT3B0aW9uYWwgbWV0aG9kcyBhbmQgcHJvcHMgdG8gYWRkOlxuICAgICAgICBuYW1lIFtzdHJpbmddOiAgICAgIE5hbWUgb2YgZ2VuZXJhdGVkIGdldHRlci9zZXR0ZXIgbWV0aG9kIG9uIEFjdG9yXG4gICAgICAgIF9tYXAgW29iamVjdF06ICAgICAgTWFwIEFjdG9yIHZhbHVlcyB0byB0aGVzZSB2YWx1ZXMgZm9yIHRoaXMgUm9sZVxuICAgICAgICBfdHlwZU1hcCBbb2JqZWN0XTogIE1hcCB2YWx1ZXMgdG8gdmFsdWUgdHlwZXNcbiAgICAgICAgaW5pdCBbZnVuY3Rpb25dOiAgICBDYWxsYmFjayB0byBydW4gd2hlbiB0aGlzIFJvbGUgaXMgYWRkZWQgdG8gYW4gQWN0b3JcbiAgICAgICAgc3RhcnQgW2Z1bmN0aW9uXTogICBDYWxsYmFjayB0byBydW4gd2hlbiBob3N0IEFjdG9yIHN0YXJ0cyBhbiBhY3Rpb25cbiAgICAgICAgY29tcGxldGUgW2Z1bmN0aW9uXTogQ2FsbGJhY2sgdG8gcnVuIHdoZW4gYWN0aW9uIGNvbXBsZXRlc1xuICAgICAgICBmcmFtZSBbZnVuY3Rpb25dOiAgIENhbGxiYWNrIHRvIGZpcmUgb25jZSBwZXIgZnJhbWVcbiAgICAgICAgdXBkYXRlIFtmdW5jdGlvbl06ICBDYWxsYmFjayB0byBmaXJlIHdoZW4gdmFsdWVzIGNoYW5nZVxuICAgICAgICBnZXQgW2Z1bmN0aW9uXTogICAgIFJlYWQgdmFsdWUgZnJvbSBhY3R1YWwgZWxlbWVudFxuICAgICAgICBzZXQgW2Z1bmN0aW9uXTogICAgIFNldCB2YWx1ZSBvbiBhY3R1YWwgZWxlbWVudFxuKi9cbnZhciBSb2xlID0gZnVuY3Rpb24gKG1ldGhvZHMpIHtcbiAgICB2YXIgcm9sZSA9IHRoaXM7XG5cbiAgICByb2xlLl9tYXAgPSB7fTtcblxuICAgIGVhY2gobWV0aG9kcywgZnVuY3Rpb24gKG5hbWUsIG1ldGhvZCkge1xuICAgICAgICByb2xlW25hbWVdID0gKCF1dGlscy5pc09iaihtZXRob2QpKSA/IG1ldGhvZCA6IHV0aWxzLmNvcHkobWV0aG9kKTtcbiAgICB9KTtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIGEgbmV3IHJvbGVcblxuICAgIEBwYXJhbSBbb2JqZWN0XTogT3B0aW9uYWwgbWV0aG9kcyBhbmQgcHJvcHMgdG8gYWRkXG4gICAgQHBhcmFtIFt2YWx1ZXNUb01hcF06IE92ZXJyaWRlIGV4aXN0aW5nIG1hcCB3aXRoIHRoZXNlIHZhbHVlc1xuICAgIEByZXR1cm4gW1JvbGVdOiBOZXcgUm9sZVxuKi9cbnZhciBjcmVhdGVSb2xlID0gZnVuY3Rpb24gKG1ldGhvZHMsIHZhbHVlcykge1xuICAgIHZhciBuZXdSb2xlID0gbmV3IFJvbGUobWV0aG9kcyk7XG5cbiAgICBlYWNoKHZhbHVlcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgbmV3Um9sZS5fbWFwW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXdSb2xlO1xufTtcblxuUm9sZS5wcm90b3R5cGUgPSB7XG5cbiAgICAvKlxuICAgICAgICBNYXAgdmFsdWUga2V5cyBvciBnZW5lcmF0ZSBuZXcgUm9sZSB3aXRoIHVwZGF0ZWQgbWFwXG5cbiAgICAgICAgR2V0dGVyOlxuICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgdG8gbWFwXG4gICAgICAgICAgICBAcmV0dXJuIFtzdHJpbmddOiBNYXBwZWQga2V5LCBvciBrZXkgaWYgbm8gbWFwcGVkIGtleSBmb3VuZFxuXG4gICAgICAgIFNldHRlcjogXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IE1hcCBvZiBBY3RvciBrZXlzIC0+IFJvbGUga2V5c1xuICAgICAgICAgICAgQHJldHVybiBbUm9sZV06IE5ldyBSb2xlIHdpdGggdW5pcXVlIG1hcFxuICAgICovXG4gICAgbWFwOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBzdHJpbmcsIGdldCBtYXBwZWQgdmFsdWVcbiAgICAgICAgLy8gT3RoZXJ3aXNlIHRoaXMgaXMgYSBtYXAsIGR1cGxpY2F0ZWQgcm9sZSB3aXRoIHVwZGF0ZWQgbWFwXG4gICAgICAgIHJldHVybiAodXRpbHMuaXNTdHJpbmcodmFsdWVzKSkgPyB0aGlzLl9tYXBbdmFsdWVzXSB8fCB2YWx1ZXMgOiBjcmVhdGVSb2xlKHRoaXMsIHZhbHVlcyk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBSb2xlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL1JvbGUuanNcbiAqKi8iLCJ2YXIgQmV6aWVyID0gcmVxdWlyZSgnLi9CZXppZXInKSxcblxuICAgIC8qXG4gICAgICAgIE1pcnJvciBlYXNpbmdcbiAgICAgICAgXG4gICAgICAgIE1pcnJvcnMgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBoZXJlIGZvciBtaXJyb3JpbmcgYW5cbiAgICAgICAgZWFzZUluIGludG8gYW4gZWFzZUluT3V0XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1pcnJvclxuICAgICAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuICAgICovXG4gICAgbWlycm9yRWFzaW5nID0gZnVuY3Rpb24gKHByb2dyZXNzLCBtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIChwcm9ncmVzcyA8PSAwLjUpID8gbWV0aG9kKDIgKiBwcm9ncmVzcykgLyAyIDogKDIgLSBtZXRob2QoMiAqICgxIC0gcHJvZ3Jlc3MpKSkgLyAyO1xuICAgIH0sXG4gICAgICAgICAgICBcbiAgICAvKlxuICAgICAgICBSZXZlcnNlIGVhc2luZ1xuICAgICAgICBcbiAgICAgICAgUmV2ZXJzZXMgdGhlIG91dHB1dCBvZiB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGZvciBmbGlwcGluZyBlYXNlSW5cbiAgICAgICAgY3VydmUgdG8gYW4gZWFzZU91dC5cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gcmV2ZXJzZVxuICAgICAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuICAgICovXG4gICAgcmV2ZXJzZUVhc2luZyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgbWV0aG9kKSB7XG4gICAgICAgIHJldHVybiAxIC0gbWV0aG9kKDEgLSBwcm9ncmVzcyk7XG4gICAgfTtcblxuLypcbiAgICBFYXNpbmcgY2xhc3NcblxuICAgIElmIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgcmV0dXJucyBlYXNpbmcgZnVuY3Rpb24gd2l0aCBcbiAgICBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuXG4gICAgSWYgcHJvdmlkZWQgZm91ciBhcmd1bWVudHMsIHJldHVybnMgbmV3IEJlemllciBjbGFzcyBpbnN0ZWFkLlxuKi9cbnZhciBFYXNpbmcgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICB2YXIgbWV0aG9kID0geDEsXG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uO1xuXG4gICAgLy8gSWYgdGhpcyBpcyBhIGJlemllciBjdXJ2ZSwgcmV0dXJuIGEgYmV6aWVyIGZ1bmN0aW9uXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gbmV3IEJlemllcih4MSwgeTEsIHgyLCB5Mik7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBlYXNpbmdGdW5jdGlvbiA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZWFzaW5nRnVuY3Rpb24uaW4gPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uLm91dCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIHJldmVyc2VFYXNpbmcocHJvZ3Jlc3MsIG1ldGhvZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZWFzaW5nRnVuY3Rpb24uaW5PdXQgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBtaXJyb3JFYXNpbmcocHJvZ3Jlc3MsIG1ldGhvZCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGVhc2luZ0Z1bmN0aW9uO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFYXNpbmc7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi9FYXNpbmcuanNcbiAqKi8iLCJsZXQgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaCxcbiAgICBDb250cm9scyA9IHJlcXVpcmUoJy4uL2NvbnRyb2xzL0NvbnRyb2xzJyk7XG5cbmNvbnN0IERFRkFVTFRfUFJPUCA9ICdjdXJyZW50JztcbmNvbnN0IFBSSVZBVEUgPSBbJ29uU3RhcnQnLCAnb25GcmFtZScsICdvblVwZGF0ZScsICdvbkNvbXBsZXRlJ107XG5cbmNsYXNzIEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXM7XG5cbiAgICAgICAgdXRpbHMuZWFjaCh0aGlzLmdldERlZmF1bHRQcm9wcygpLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgYWN0aW9uW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMsIHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpKTtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMgPSB7fSwgZGVmYXVsdFByb3AgPSBERUZBVUxUX1BST1ApIHtcbiAgICAgICAgZWFjaChwcm9wcywgKGtleSwgcHJvcCkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3ZhbHVlcycpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBwcm9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNZXJnZSB2YWx1ZXNcbiAgICAgICAgaWYgKHByb3BzLnZhbHVlcykge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZXMgPSB0aGlzLnZhbHVlcyxcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBwcm9wcy52YWx1ZXM7XG5cbiAgICAgICAgICAgIGVhY2godmFsdWVzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBleGlzdGluZ1ZhbHVlID0gY3VycmVudFZhbHVlc1trZXldLFxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHt9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc09iaih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtkZWZhdWx0UHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWVzW2tleV0gPSBleGlzdGluZ1ZhbHVlID8gdXRpbHMubWVyZ2UoZXhpc3RpbmdWYWx1ZSwgbmV3VmFsdWUpIDogbmV3VmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHByb2Nlc3MoYWN0b3IsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jdXJyZW50O1xuICAgIH1cblxuICAgLypcbiAgICAgICAgSGFzIEFjdGlvbiBlbmRlZD9cbiAgICAgICAgXG4gICAgICAgIFJldHVybnMgdHJ1ZSB0byBlbmQgaW1tZWRpZXRseVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IHRydWVcbiAgICAqL1xuICAgIGhhc0VuZGVkKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgICAgIFxuICAgIGxpbWl0KG91dHB1dCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3RyaWN0ZWQgPSBjYWxjLnJlc3RyaWN0ZWQob3V0cHV0LCB2YWx1ZS5taW4sIHZhbHVlLm1heCksXG4gICAgICAgICAgICBlc2NhcGVBbXAgPSB2YWx1ZS5lc2NhcGVBbXAgIT09IHVuZGVmaW5lZCA/IHZhbHVlLmVzY2FwZUFtcCA6IDA7XG4gICAgICAgIHJldHVybiByZXN0cmljdGVkICsgKChvdXRwdXQgLSByZXN0cmljdGVkKSAqIGVzY2FwZUFtcCk7XG4gICAgfVxuXG4gICAgZ2V0Q29udHJvbHMoKSB7XG4gICAgICAgIHJldHVybiBDb250cm9scztcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gREVGQVVMVF9QUk9QO1xuICAgIH1cblxuICAgIGdldFNldCgpIHtcbiAgICAgICAgdmFyIHNldCA9IHsgdmFsdWVzOiB0aGlzLnZhbHVlcyB9O1xuXG4gICAgICAgIGVhY2godGhpcywgKGtleSwgcHJvcCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBQUklWQVRFLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBzZXRba2V5XSA9IHByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzZXQ7XG4gICAgfVxuXG4gICAgZXh0ZW5kKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih1dGlscy5tZXJnZSh0aGlzLCBwcm9wcyksIHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpKTtcbiAgICB9XG5cbiAgICBnZXRQbGF5YWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXh0ZW5kKCk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBY3Rpb247XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9BY3Rpb24uanNcbiAqKi8iLCJsZXQgQWN0aW9uID0gcmVxdWlyZSgnLi9BY3Rpb24nKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoLFxuICAgIHByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vdHdlZW4vcHJlc2V0LWVhc2luZycpLFxuICAgIHZhbHVlT3BzID0gcmVxdWlyZSgnLi4vYWN0b3IvdmFsdWUtb3BlcmF0aW9ucycpLFxuICAgIFR3ZWVuQ29udHJvbHMgPSByZXF1aXJlKCcuL3R3ZWVuL1R3ZWVuQ29udHJvbHMnKSxcblxuICAgIG5leHRTdGVwcyA9IHtcbiAgICAgICAgbG9vcDogJ3Jlc3RhcnQnLFxuICAgICAgICB5b3lvOiAncmV2ZXJzZScsXG4gICAgICAgIGZsaXA6ICdmbGlwVmFsdWVzJ1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBFYXNlIHZhbHVlIHdpdGhpbiByYW5nZWQgcGFyYW1ldGVyc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAwIHByb2dyZXNzXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgICAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgICAgICAgICAgdG8gdXNlIG9yIGdlbmVyYXRlZCBlYXNpbmcgZnVuY3Rpb25cbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiAgICAqLyAgXG4gICAgZWFzZSA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpIHtcbiAgICAgICAgdmFyIHByb2dyZXNzTGltaXRlZCA9IGNhbGMucmVzdHJpY3RlZChwcm9ncmVzcywgMCwgMSksXG4gICAgICAgICAgICBlYXNpbmdGdW5jdGlvbiA9IHV0aWxzLmlzU3RyaW5nKGVhc2UpID8gcHJlc2V0RWFzaW5nW2Vhc2VdIDogZWFzZTtcblxuICAgICAgICByZXR1cm4gY2FsYy52YWx1ZUVhc2VkKHByb2dyZXNzTGltaXRlZCwgZnJvbSwgdG8sIGVhc2luZ0Z1bmN0aW9uKTtcbiAgICB9O1xuXG5jb25zdCBDT1VOVCA9ICdjb3VudCc7XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBnZXRDb250cm9scygpIHtcbiAgICAgICAgcmV0dXJuIFR3ZWVuQ29udHJvbHM7XG4gICAgfVxuICAgIFxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlsYXRlOiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgeW95bzogZmFsc2UsXG4gICAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIHBsYXlEaXJlY3Rpb246IDEsXG4gICAgICAgICAgICBlbmRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBlYXNlOiAnZWFzZU91dCcsXG4gICAgICAgICAgICBzdGFnZ2VyOiAwLFxuICAgICAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndG8nO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFVwZGF0ZSBBY3Rpb24gZWxhcHNlZCB0aW1lXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGltZXN0YW1wIG9mIGN1cnJlbnQgZnJhbWVcbiAgICAqL1xuICAgIG9uRnJhbWVTdGFydChhY3RvciwgZnJhbWVEdXJhdGlvbikge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmVsYXBzZWQgfHwgMDtcblxuICAgICAgICBpZiAoZnJhbWVEdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5lbGFwc2VkICs9IChmcmFtZUR1cmF0aW9uICogYWN0b3IuZGlsYXRlKSAqIHRoaXMucGxheURpcmVjdGlvbjtcbiAgICAgICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQ2FsY3VsYXRlIHByb2dyZXNzIG9mIHZhbHVlIGJhc2VkIG9uIHRpbWUgZWxhcHNlZCxcbiAgICAgICAgdmFsdWUgZGVsYXkvZHVyYXRpb24vc3RhZ2dlciBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBWYWx1ZSBzdGF0ZSBhbmQgcHJvcGVydGllc1xuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzKGFjdG9yLCB2YWx1ZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdmFsdWUudG8sXG4gICAgICAgICAgICBwcm9ncmVzc1RhcmdldCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMSA6IDAsXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlLmN1cnJlbnQsXG4gICAgICAgICAgICBwcm9ncmVzcztcblxuICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGhhcyBhIHRvIHByb3BlcnR5LCBvdGhlcndpc2Ugd2UganVzdCByZXR1cm4gY3VycmVudCB2YWx1ZVxuICAgICAgICBpZiAodGFyZ2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHByb2dyZXNzID0gY2FsYy5yZXN0cmljdGVkKGNhbGMucHJvZ3Jlc3ModGhpcy5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIHZhbHVlLmR1cmF0aW9uKSAtIHZhbHVlLnN0YWdnZXIsIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIEFjdGlvbiBhcyBOT1QgZW5kZWQgaWYgc3RpbGwgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyAhPT0gcHJvZ3Jlc3NUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0ZXAgcHJvZ3Jlc3MgaWYgd2UncmUgc3RlcHBpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zdGVwcykge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gdXRpbHMuc3RlcFByb2dyZXNzKHByb2dyZXNzLCB2YWx1ZS5zdGVwcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVhc2UgdmFsdWVcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gZWFzZShwcm9ncmVzcywgdmFsdWUub3JpZ2luLCB0YXJnZXQsIHZhbHVlLmVhc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIElmIHRoaXMgdHdlZW4gaGFzIGVuZGVkLCBjaGVjayBpZiB3ZSBsb29wL3lveW8vZmxpcFxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IEhhcyB0aGlzIHR3ZWVuIHJlYWxseSByZWFsbHkgZW5kZWQ/XG4gICAgKi9cbiAgICBoYXNFbmRlZChhY3Rvcikge1xuICAgICAgICBpZiAodGhpcy5lbmRlZCkge1xuICAgICAgICAgICAgZWFjaChuZXh0U3RlcHMsIChuYW1lLCBtZXRob2ROYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tOZXh0U3RlcChhY3RvciwgbmFtZSwgdGhpc1ttZXRob2ROYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBhY3Rvci5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kZWQ7XG4gICAgfVxuXG4gICAgY2hlY2tOZXh0U3RlcChhY3RvciwgbmFtZSwgbWV0aG9kKSB7XG4gICAgICAgIHZhciBzdGVwVGFrZW4gPSBmYWxzZSxcbiAgICAgICAgICAgIHN0ZXAgPSB0aGlzW25hbWVdLFxuICAgICAgICAgICAgY291bnQgPSB0aGlzW25hbWUgKyBDT1VOVF0gfHwgMCxcbiAgICAgICAgICAgIGZvcmV2ZXIgPSAoc3RlcCA9PT0gdHJ1ZSk7XG5cbiAgICAgICAgaWYgKGZvcmV2ZXIgfHwgdXRpbHMuaXNOdW0oc3RlcCkpIHtcbiAgICAgICAgICAgICsrY291bnQ7XG4gICAgICAgICAgICB0aGlzW25hbWUgKyBDT1VOVF0gPSBjb3VudDtcblxuICAgICAgICAgICAgaWYgKGZvcmV2ZXIgfHwgY291bnQgPD0gc3RlcCkge1xuICAgICAgICAgICAgICAgIG1ldGhvZC5jYWxsKHRoaXMsIGFjdG9yKTtcbiAgICAgICAgICAgICAgICBzdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0ZXBUYWtlbjtcbiAgICB9XG5cbiAgICBmbGlwVmFsdWVzKGFjdG9yKSB7XG4gICAgICAgIHZhciBhY3RvclZhbHVlcyA9IGFjdG9yLnZhbHVlcztcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcblxuICAgICAgICBlYWNoKHRoaXMudmFsdWVzLCAoa2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBhY3RvclZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBlYWNoKHZhbHVlLmNoaWxkcmVuLCAoY2hpbGRLZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVPcHMuZmxpcChhY3RvclZhbHVlc1trZXkgKyBjaGlsZEtleV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZU9wcy5mbGlwKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMCA6IHRoaXMuZHVyYXRpb247XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IHV0aWxzLmN1cnJlbnRUaW1lKCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR3ZWVuO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvVHdlZW4uanNcbiAqKi8iLCJsZXQgQWN0aW9uID0gcmVxdWlyZSgnLi9BY3Rpb24nKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIHNpbXVsYXRpb25zID0gcmVxdWlyZSgnLi9zaW11bGF0ZS9zaW11bGF0aW9ucycpO1xuXG5jb25zdCBERUZBVUxUX1BST1AgPSAndmVsb2NpdHknO1xuXG5jbGFzcyBTaW11bGF0ZSBleHRlbmRzIEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVzVmVsb2NpdHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtYXhJbmFjdGl2ZUZyYW1lczogM1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFtzdHJpbmddOiBTaW11bGF0aW9uIHRvIC5ydW5cbiAgICAgICAgICAgIHNpbXVsYXRlOiBERUZBVUxUX1BST1AsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBEZWNlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICAgICAgICAgIGRlY2VsZXJhdGlvbjogMCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IEFjY2VsZXJhdGlvbiB0byBhcHBseSB0byB2YWx1ZSwgaW4gdW5pdHMgcGVyIHNlY29uZFxuICAgICAgICAgICAgYWNjZWxlcmF0aW9uOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogRmFjdG9yIHRvIG11bHRpcGx5IHZlbG9jaXR5IGJ5IG9uIGJvdW5jZVxuICAgICAgICAgICAgYm91bmNlOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogU3ByaW5nIHN0cmVuZ3RoIGR1cmluZyAnc3RyaW5nJ1xuICAgICAgICAgICAgc3ByaW5nOiA4MCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IFRpbWVjb25zdGFudCBvZiBnbGlkZVxuICAgICAgICAgICAgdGltZUNvbnN0YW50OiAzOTUsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBTdG9wIHNpbXVsYXRpb24gdW5kZXIgdGhpcyBzcGVlZFxuICAgICAgICAgICAgc3RvcFNwZWVkOiA1LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbYm9vbGVhbl06IENhcHR1cmUgd2l0aCBzcHJpbmcgcGh5c2ljcyBvbiBsaW1pdCBicmVhY2hcbiAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lXG4gICAgICAgICAgICBmcmljdGlvbjogMCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG86IDAsXG4gICAgICAgICAgICByb3VuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gREVGQVVMVF9QUk9QO1xuICAgIH1cblxuICAgIG9uU3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IHV0aWxzLmN1cnJlbnRUaW1lKCk7XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgICAgIFNpbXVsYXRlIHRoZSBWYWx1ZSdzIHBlci1mcmFtZSBtb3ZlbWVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgY3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IER1cmF0aW9uIG9mIGZyYW1lIGluIG1zXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IENhbGN1bGF0ZWQgdmFsdWVcbiAgICAqL1xuICAgIHByb2Nlc3MoYWN0b3IsIHZhbHVlLCBrZXksIHRpbWVTaW5jZUxhc3RGcmFtZSkge1xuICAgICAgICB2YXIgc2ltdWxhdGUgPSB2YWx1ZS5zaW11bGF0ZSxcbiAgICAgICAgICAgIHNpbXVsYXRpb24gPSB1dGlscy5pc1N0cmluZyhzaW11bGF0ZSkgPyBzaW11bGF0aW9uc1tzaW11bGF0ZV0gOiBzaW11bGF0ZSxcbiAgICAgICAgICAgIG5ld1ZlbG9jaXR5ID0gc2ltdWxhdGlvbiA/IHNpbXVsYXRpb24odmFsdWUsIHRpbWVTaW5jZUxhc3RGcmFtZSwgdGhpcy5zdGFydGVkKSA6IDA7XG5cbiAgICAgICAgdmFsdWUudmVsb2NpdHkgPSAoTWF0aC5hYnMobmV3VmVsb2NpdHkpID49IHZhbHVlLnN0b3BTcGVlZCkgPyBuZXdWZWxvY2l0eSA6IDA7XG4gICAgICAgIHJldHVybiB2YWx1ZS5jdXJyZW50ICsgY2FsYy5zcGVlZFBlckZyYW1lKHZhbHVlLnZlbG9jaXR5LCB0aW1lU2luY2VMYXN0RnJhbWUpO1xuICAgIH1cbiAgICBcbiAgICAvKlxuICAgICAgICBIYXMgdGhpcyBhY3Rpb24gZW5kZWQ/XG4gICAgICAgIFxuICAgICAgICBVc2UgYSBmcmFtZWNvdW50ZXIgdG8gc2VlIGlmIEFjdGlvbiBoYXMgY2hhbmdlZCBpbiB0aGUgbGFzdCB4IGZyYW1lc1xuICAgICAgICBhbmQgZGVjbGFyZSBlbmRlZCBpZiBub3RcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbQWN0b3JdXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IEhhcyBBY3Rpb24gY2hhbmdlZD9cbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IEhhcyBBY3Rpb24gZW5kZWQ/XG4gICAgKi9cbiAgICBoYXNFbmRlZChhY3RvciwgaGFzQ2hhbmdlZCkge1xuICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gaGFzQ2hhbmdlZCA/IDAgOiB0aGlzLmluYWN0aXZlRnJhbWVzICsgMTtcbiAgICAgICAgcmV0dXJuICh0aGlzLmluYWN0aXZlRnJhbWVzID4gYWN0b3IubWF4SW5hY3RpdmVGcmFtZXMpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIExpbWl0IG91dHB1dCB0byB2YWx1ZSByYW5nZSwgaWYgYW55XG4gICAgICAgIFxuICAgICAgICBJZiB2ZWxvY2l0eSBpcyBhdCBvciBtb3JlIHRoYW4gcmFuZ2UsIGFuZCB2YWx1ZSBoYXMgYSBib3VuY2UgcHJvcGVydHksXG4gICAgICAgIHJ1biB0aGUgYm91bmNlIHNpbXVsYXRpb25cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ2FsY3VsYXRlZCBvdXRwdXRcbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgVmFsdWVcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogTGltaXQtYWRqdXN0ZWQgb3V0cHV0XG4gICAgKi9cbiAgICBsaW1pdChvdXRwdXQsIHZhbHVlKSB7XG4gICAgICAgIHZhciBpc091dHNpZGVNYXggPSAob3V0cHV0ID49IHZhbHVlLm1heCksXG4gICAgICAgICAgICBpc091dHNpZGVNaW4gPSAob3V0cHV0IDw9IHZhbHVlLm1pbiksXG4gICAgICAgICAgICBpc091dHNpZGVSYW5nZSA9IGlzT3V0c2lkZU1heCB8fCBpc091dHNpZGVNaW47XG5cbiAgICAgICAgaWYgKGlzT3V0c2lkZVJhbmdlKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSBjYWxjLnJlc3RyaWN0ZWQob3V0cHV0LCB2YWx1ZS5taW4sIHZhbHVlLm1heCk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5ib3VuY2UpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IHNpbXVsYXRpb25zLmJvdW5jZSh2YWx1ZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuY2FwdHVyZSkge1xuICAgICAgICAgICAgICAgIHNpbXVsYXRpb25zLmNhcHR1cmUodmFsdWUsIGlzT3V0c2lkZU1heCA/IHZhbHVlLm1heCA6IHZhbHVlLm1pbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpbXVsYXRlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvU2ltdWxhdGUuanNcbiAqKi8iLCJsZXQgQWN0aW9uID0gcmVxdWlyZSgnLi9BY3Rpb24nKSxcbiAgICBQb2ludGVyID0gcmVxdWlyZSgnLi4vaW5wdXQvUG9pbnRlcicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBzbW9vdGgobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbiwgc21vb3RoaW5nKSB7XG4gICAgcmV0dXJuIG9sZFZhbHVlICsgKGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gc21vb3RoaW5nKTtcbn1cblxuY2xhc3MgVHJhY2sgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIC8qXG4gICAgICAgIFVwZGF0ZSBpbnB1dCBvZmZzZXRcbiAgICAqL1xuICAgIG9uRnJhbWVTdGFydChhY3RvciwgZnJhbWVEdXJhdGlvbiwgZnJhbWVzdGFtcCkge1xuICAgICAgICBhY3Rvci5zdGF0ZS5pbnB1dCA9IHRoaXMuaW5wdXQub25GcmFtZShmcmFtZXN0YW1wKTtcbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9IGNhbGMub2Zmc2V0KHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuY3VycmVudCk7XG4gICAgICAgIHRoaXMuZnJhbWVEdXJhdGlvbiA9IGZyYW1lRHVyYXRpb247XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTW92ZSBWYWx1ZSByZWxhdGl2ZSB0byBJbnB1dCBtb3ZlbWVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgY3VycmVudCB2YWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzKGFjdG9yLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlLmN1cnJlbnQsXG4gICAgICAgICAgICB1bm1hcHBlZCA9IHZhbHVlLnVubWFwcGVkICE9PSB1bmRlZmluZWQgPyB2YWx1ZS51bm1hcHBlZCA6IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSAodmFsdWUuZGlyZWN0KSA/IHRoaXMuaW5wdXQuY3VycmVudFtrZXldIDogdmFsdWUub3JpZ2luICsgKHRoaXMuaW5wdXRPZmZzZXRba2V5XSAqIHZhbHVlLmFtcCk7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9ICh2YWx1ZS5zbW9vdGgpID8gc21vb3RoKG5ld1ZhbHVlLCB1bm1hcHBlZCwgdGhpcy5mcmFtZUR1cmF0aW9uLCB2YWx1ZS5zbW9vdGgpIDogbmV3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgSGFzIHRoaXMgQWN0aW9uIGVuZGVkPyBcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBGYWxzZSB0byBtYWtlIHVzZXIgbWFudWFsbHkgZmluaXNoIC50cmFjaygpXG4gICAgKi9cbiAgICBoYXNFbmRlZCgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgIHN1cGVyLmRlYWN0aXZhdGUoKTtcblxuICAgICAgICBpZiAodGhpcy5pbnB1dCAmJiB0aGlzLmlucHV0LnN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYmluZElucHV0KGlucHV0KSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSAoIWlucHV0LmN1cnJlbnQpID8gbmV3IFBvaW50ZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgICAgIHRoaXMuaW5wdXRPcmlnaW4gPSB0aGlzLmlucHV0LmdldCgpO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFtcDogMSxcbiAgICAgICAgICAgIGRpcmVjdDogZmFsc2UsXG4gICAgICAgICAgICBzbW9vdGg6IDBcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhY2s7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9UcmFjay5qc1xuICoqLyIsInZhciBBY3RvciA9IHJlcXVpcmUoJy4uL2FjdG9yL0FjdG9yJyksXG4gICAgSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pdGVyYXRvci9JdGVyYXRvcicpLFxuICAgIHNlbGVjdERvbSA9IHJlcXVpcmUoJy4vc2VsZWN0LWRvbScpO1xuXG5jb25zdCBTQVZFX1BST1AgPSAnX19wbV9hY3Rvcl8nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgb3B0cyA9IHt9KSB7XG4gICAgdmFyIGRvbSA9IHNlbGVjdERvbShzZWxlY3RvciksXG4gICAgICAgIGFjdG9ycyA9IFtdO1xuXG4gICAgZG9tLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgbGV0IGFjdG9yID0gZWxlbWVudFtTQVZFX1BST1BdO1xuXG4gICAgICAgIGlmICghYWN0b3IpIHtcbiAgICAgICAgICAgIG9wdHMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBhY3RvciA9IGVsZW1lbnRbU0FWRV9QUk9QXSA9IG5ldyBBY3RvcihvcHRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdG9ycy5wdXNoKGFjdG9yKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoYWN0b3JzLmxlbmd0aCA+IDEpID8gbmV3IEl0ZXJhdG9yKGFjdG9ycykgOiBhY3RvcnNbMF07XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5jL3NlbGVjdC1hY3Rvci5qc1xuICoqLyIsIi8qXG4gICAgQ2FsY3VsYXRvcnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgU2ltcGxlIEkvTyBzbmlwcGV0c1xuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyksXG5cbiAgICBjYWxjID0ge1xuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICAgICAgICAgICAgYXJlIGF0IDAsMCwgdGhlbiByZXR1cm4gdGhlIGFuZ2xlIHVzaW5nIC5hbmdsZUZyb21DZW50ZXIoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgICAgICAgICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuICAgICAgICAqL1xuICAgICAgICBhbmdsZTogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgICAgICB2YXIgZnJvbSA9IHBvaW50QiA/IHBvaW50QSA6IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgICAgICB0byA9IHBvaW50QiB8fCBwb2ludEEsXG4gICAgICAgICAgICAgICAgcG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHRvLnggLSBmcm9tLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRvLnkgLSBmcm9tLnlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbmdsZUZyb21DZW50ZXIocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIEFuZ2xlIGZyb20gY2VudGVyXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGN1cnJlbnQgYW5nbGUsIGluIHJhZGlhbnMsIG9mIGEgZGVmaW5lZCBwb2ludFxuICAgICAgICAgICAgZnJvbSBhIGNlbnRlciAoYXNzdW1lZCAwLDApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogWCBjb29yZGluYXRlIG9mIHNlY29uZCBwb2ludFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBZIGNvb3JkaW5hdGUgb2Ygc2Vjb25kIHBvaW50XG4gICAgICAgICAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIDAsIDAgYW5kIHBvaW50IGluIHJhZGlhbnNcbiAgICAgICAgKi9cbiAgICAgICAgYW5nbGVGcm9tQ2VudGVyOiBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKHksIHgpKTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgICAgICAgKi9cbiAgICAgICAgZGVncmVlc1RvUmFkaWFuczogZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgRGlsYXRlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGEgLS0tLS0tLS0tIGJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYSAtLS0tIGJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiAgICAgICAgKi9cbiAgICAgICAgZGlsYXRlOiBmdW5jdGlvbiAoYSwgYiwgZGlsYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBhICsgKChiIC0gYSkgKiBkaWxhdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIERpc3RhbmNlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gKDAsMCkgYW5kIHBvaW50QSwgdW5sZXNzIHBvaW50QlxuICAgICAgICAgICAgaXMgcHJvdmlkZWQsIHRoZW4gd2UgcmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHR3by5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgZGlzdGFuY2U6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgcG9pbnRBID09PSBcIm51bWJlclwiKSA/IHRoaXMuZGlzdGFuY2UxRChwb2ludEEsIHBvaW50QikgOiB0aGlzLmRpc3RhbmNlMkQocG9pbnRBLCBwb2ludEIpO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRGlzdGFuY2UgMURcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiBwb2ludCBBIGFuZCBwb2ludCBCXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUG9pbnQgQVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiAob3B0aW9uYWwpOiBQb2ludCBCXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICAgICAqL1xuICAgICAgICBkaXN0YW5jZTFEOiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgICAgIHZhciBiSXNOdW0gPSAodHlwZW9mIHBvaW50QiA9PT0gJ251bWJlcicpLFxuICAgICAgICAgICAgICAgIGZyb20gPSBiSXNOdW0gPyBwb2ludEEgOiAwLFxuICAgICAgICAgICAgICAgIHRvID0gYklzTnVtID8gcG9pbnRCIDogcG9pbnRBO1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIGFic29sdXRlKHRvIC0gZnJvbSk7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIERpc3RhbmNlIDJEXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gKDAsMCkgYW5kIHBvaW50IEEsIHVubGVzcyBwb2ludCBCXG4gICAgICAgICAgICBpcyBwcm92aWRlZCwgdGhlbiB3ZSByZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdHdvLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IHggYW5kIHkgb2YgcG9pbnQgQVxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9mIHBvaW50IEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gICAgICAgICovXG4gICAgICAgIGRpc3RhbmNlMkQ6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAgICAgdmFyIGJJc09iaiA9ICh0eXBlb2YgcG9pbnRCID09PSBcIm9iamVjdFwiKSxcbiAgICAgICAgICAgICAgICBmcm9tID0gYklzT2JqID8gcG9pbnRBIDoge3g6IDAsIHk6IDB9LFxuICAgICAgICAgICAgICAgIHRvID0gYklzT2JqID8gcG9pbnRCIDogcG9pbnRBLFxuICAgICAgICAgICAgICAgIHBvaW50ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBhYnNvbHV0ZSh0by54IC0gZnJvbS54KSxcbiAgICAgICAgICAgICAgICAgICAgeTogYWJzb2x1dGUodG8ueSAtIGZyb20ueSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHlwb3RlbnVzZShwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgSHlwb3RlbnVzZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBoeXBvdGVudXNlLCBzaWRlIEMsIGdpdmVuIHRoZSBsZW5ndGhzIG9mIHNpZGVzIEEgYW5kIEIuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4gICAgICAgICovXG4gICAgICAgIGh5cG90ZW51c2U6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICB2YXIgYTIgPSBhICogYSxcbiAgICAgICAgICAgICAgICBiMiA9IGIgKiBiLFxuICAgICAgICAgICAgICAgIGMyID0gYTIgKyBiMjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoYzIpO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIE9mZnNldCBiZXR3ZWVuIHR3byBpbnB1dHNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQ2FsY3VsYXRlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIGRpZmZlcmVudCBpbnB1dHNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IGlucHV0XG4gICAgICAgICAgICBAcGFyYW0gW1BvaW50XTogU2Vjb25kIGlucHV0XG4gICAgICAgICAgICBAcmV0dXJuIFtPZmZzZXRdOiBEaXN0YW5jZSBtZXRyaWNzIGJldHdlZW4gdHdvIHBvaW50c1xuICAgICAgICAqL1xuICAgICAgICBvZmZzZXQ6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0ge307XG4gICAgXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgICAgICAgICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0W2tleV0gPSBiW2tleV0gLSBhW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRba2V5XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNOdW0ob2Zmc2V0LngpICYmIGlzTnVtKG9mZnNldC55KSkge1xuICAgICAgICAgICAgICAgIG9mZnNldC5hbmdsZSA9IHRoaXMuYW5nbGUoYSwgYik7XG4gICAgICAgICAgICAgICAgb2Zmc2V0LmRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZTJEKGEsIGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICAgICAgICAgICAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuICAgICAgICAqL1xuICAgICAgICBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlOiBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgICAgICAgICAgIHZhciBwb2ludCA9IHt9O1xuICAgIFxuICAgIFx0XHRwb2ludC54ID0gZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueDtcbiAgICAgICAgICAgIHBvaW50LnkgPSBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55O1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gICAgICAgICAgICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgICAgICAgICAgIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBpZiBmdWxsIHJhbmdlIGdpdmVuLCB1cHBlciBpZiBub3RcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgKi9cbiAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uICh2YWx1ZSwgbGltaXRBLCBsaW1pdEIpIHtcbiAgICAgICAgICAgIHZhciBiSXNOdW0gPSAodHlwZW9mIGxpbWl0QiA9PT0gJ251bWJlcicpLFxuICAgICAgICAgICAgICAgIGZyb20gPSBiSXNOdW0gPyBsaW1pdEEgOiAwLFxuICAgICAgICAgICAgICAgIHRvID0gYklzTnVtID8gbGltaXRCIDogbGltaXRBLFxuICAgICAgICAgICAgICAgIHJhbmdlID0gdG8gLSBmcm9tLFxuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gKHZhbHVlIC0gZnJvbSkgLyByYW5nZTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBwcm9ncmVzcztcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgICAgICAgKi9cbiAgICAgICAgcmFkaWFuc1RvRGVncmVlczogZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgICAgICAgICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgUmV0dXJuIHJhbmRvbSBudW1iZXIgYmV0d2VlbiByYW5nZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWF4aW11bVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuICAgICAgICAqL1xuICAgICAgICByYW5kb206IGZ1bmN0aW9uIChtaW4gPSAwLCBtYXggPSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gICAgICAgICAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICAgICAgKi9cbiAgICAgICAgcmVsYXRpdmVWYWx1ZTogZnVuY3Rpb24gKGN1cnJlbnQsIHJlbCkge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gY3VycmVudCxcbiAgICAgICAgICAgICAgICBlcXVhdGlvbiA9IHJlbC5zcGxpdCgnPScpLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yID0gZXF1YXRpb25bMF0sXG4gICAgICAgICAgICAgICAgc3BsaXRWYWwgPSB1dGlscy5zcGxpdFZhbFVuaXQoZXF1YXRpb25bMV0pO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlICs9IHNwbGl0VmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgLT0gc3BsaXRWYWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSAqPSBzcGxpdFZhbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlIC89IHNwbGl0VmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHNwbGl0VmFsLnVuaXQpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSArPSBzcGxpdFZhbC51bml0O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgICAgICB9LFxuICAgIFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICAgICAqL1xuICAgICAgICByZXN0cmljdGVkOiBmdW5jdGlvbiAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgICAgICAgICB2YXIgcmVzdHJpY3RlZCA9IChtaW4gIT09IHVuZGVmaW5lZCkgPyBNYXRoLm1heCh2YWx1ZSwgbWluKSA6IHZhbHVlO1xuICAgICAgICAgICAgcmVzdHJpY3RlZCA9IChtYXggIT09IHVuZGVmaW5lZCkgPyBNYXRoLm1pbihyZXN0cmljdGVkLCBtYXgpIDogcmVzdHJpY3RlZDtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiByZXN0cmljdGVkO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuICAgICAgICAqL1xuICAgICAgICBzcGVlZFBlckZyYW1lOiBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4gICAgICAgICovXG4gICAgICAgIHNwZWVkUGVyU2Vjb25kOiBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG4gICAgICAgIH0sXG4gICAgXG4gICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICAgICAgICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2UsIG9yIHVwcGVyIGlmIGxpbWl0MiBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHByb2dyZXNzLCBsaW1pdEEsIGxpbWl0Qikge1xuICAgICAgICAgICAgdmFyIGJJc051bSA9ICh0eXBlb2YgbGltaXRCID09PSAnbnVtYmVyJyksXG4gICAgICAgICAgICAgICAgZnJvbSA9IGJJc051bSA/IGxpbWl0QSA6IDAsXG4gICAgICAgICAgICAgICAgdG8gPSBiSXNOdW0gPyBsaW1pdEIgOiBsaW1pdEE7XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gKC0gcHJvZ3Jlc3MgKiBmcm9tKSArIChwcm9ncmVzcyAqIHRvKSArIGZyb207IFxuICAgICAgICB9LFxuICAgIFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRWFzZWQgdmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICAgICAgICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2UsIG9yIHVwcGVyIGlmIGxpbWl0MiBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBFYXNpbmcgdG8gYXBwbHkgdG8gdmFsdWVcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiAgICAgICAgKi9cbiAgICAgICAgdmFsdWVFYXNlZDogZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzaW5nKSB7XG4gICAgICAgICAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IGVhc2luZyhwcm9ncmVzcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBDYWNoaW5nIGZ1bmN0aW9ucyB1c2VkIG11bHRpcGxlIHRpbWVzIHRvIHJlZHVjZSBmaWxlc2l6ZSBhbmQgaW5jcmVhc2UgcGVyZm9ybWFuY2VcbiAgICAqL1xuICAgIGlzTnVtID0gdXRpbHMuaXNOdW0sXG4gICAgYWJzb2x1dGUgPSBNYXRoLmFicztcbiAgICBcbm1vZHVsZS5leHBvcnRzID0gY2FsYztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmMvY2FsYy5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApIHtcbiAgICB2YXIgY29tYmluZWQgPSAnJyxcbiAgICAgICAga2V5ID0gJycsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcblxuICAgIGZvciAoOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgICBrZXkgPSB0ZXJtc1tpXTtcblxuICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbWJpbmVkICs9IHZhbHVlc1trZXldICsgZGVsaW1pdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZC5qc1xuICoqLyIsInZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9zcGxpdC1jb21tYS1kZWxpbWl0ZWQnKSxcbiAgICBmdW5jdGlvbkJyZWFrID0gcmVxdWlyZSgnLi9mdW5jdGlvbi1icmVhaycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgdGVybXMpIHtcbiAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9LFxuICAgICAgICBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aCxcbiAgICAgICAgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChmdW5jdGlvbkJyZWFrKHZhbHVlKSksXG4gICAgICAgIGkgPSAwO1xuXG4gICAgZm9yICg7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICAgIHNwbGl0VmFsdWVbdGVybXNbaV1dID0gKGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yc1tpXSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwbGl0VmFsdWU7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggKyAnKCcgKyB2YWx1ZSArICcpJztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWNyZWF0ZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjb2xvcjoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMjU1LFxuICAgICAgICByb3VuZDogdHJ1ZVxuICAgIH0sXG4gICAgb3BhY2l0eToge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMVxuICAgIH0sXG4gICAgcGVyY2VudDoge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMTAwLFxuICAgICAgICB1bml0OiAnJSdcbiAgICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGVmYXVsdC1wcm9wcy5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgWCA9ICdYJyxcbiAgICBZID0gJ1knLFxuICAgIEFMUEhBID0gJ0FscGhhJyxcblxuICAgIHRlcm1zID0ge1xuICAgICAgICBjb2xvcnM6IFsnUmVkJywgJ0dyZWVuJywgJ0JsdWUnLCBBTFBIQV0sXG4gICAgICAgIHBvc2l0aW9uczogW1gsIFksICdaJ10sXG4gICAgICAgIGRpbWVuc2lvbnM6IFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0J10sXG4gICAgICAgIHNoYWRvdzogW1gsIFksICdSYWRpdXMnLCAnU3ByZWFkJywgJ0NvbG9yJ10sXG4gICAgICAgIGhzbDogWydIdWUnLCAnU2F0dXJhdGlvbicsICdMaWdodG5lc3MnLCBBTFBIQV1cbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRlcm1zO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanNcbiAqKi8iLCIvKlxuICAgIFV0aWxpdHkgZnVuY3Rpb25zXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBwcm90ZWN0ZWRQcm9wZXJ0aWVzID0gWydzY29wZScsICAnZG9tJ10sXG4gICAgXG4gICAgaXNQcm90ZWN0ZWQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiAocHJvdGVjdGVkUHJvcGVydGllcy5pbmRleE9mKGtleSkgIT09IC0xKTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgR2V0IHZhciB0eXBlIGFzIHN0cmluZ1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW3N0cmluZ106IFJldHVybnMsIGZvciBpbnN0YW5jZSAnT2JqZWN0JyBpZiBbb2JqZWN0IE9iamVjdF1cbiAgICAqL1xuICAgIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLypcbiAgICAgICAgSXRlcmF0ZSBvdmVyIGFuIG9iamVjdCBhbmQgZmlyZSBhIGNhbGxiYWNrIGZvciBldmVyeSBpdGVtIGluIGl0XG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBQcm9wZXJ0aWVzXG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBmaXJlXG4gICAgKi9cbiAgICBlYWNoOiBmdW5jdGlvbiAocHJvcHMsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpLFxuICAgICAgICAgICAgbnVtS2V5cyA9IGtleXMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0ga2V5c1tpXSxcbiAgICAgICAgICAgICAgICBwcm9wID0gcHJvcHNba2V5XTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGtleSwgcHJvcCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEhhcyBvbmUgb2JqZWN0IGNoYW5nZWQgZnJvbSB0aGUgb3RoZXJcbiAgICAgICAgXG4gICAgICAgIENvbXBhcmVzIHRoZSB0d28gcHJvdmlkZWQgaW5wdXRzIGFuZCByZXR1cm5zIHRydWUgaWYgdGhleSBhcmUgZGlmZmVyZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEFcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBCXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuICAgICovXG4gICAgaGFzQ2hhbmdlZDogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGtleSA9ICcnO1xuXG4gICAgICAgIGZvciAoa2V5IGluIGIpIHtcbiAgICAgICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KGtleSkgJiYgYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIGhhc0NoYW5nZWQ7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhIG51bWJlcj9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiAgICAqL1xuICAgIGlzTnVtOiBmdW5jdGlvbiAobnVtKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIG51bSA9PT0gJ251bWJlcicpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYW4gb2JqZWN0P1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuICAgICovXG4gICAgaXNPYmo6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jyk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0aGlzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiAgICAqL1xuICAgIGlzRnVuYzogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gKHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJyk7IFxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYSBzdHJpbmcgPyBcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4gICAgKi9cbiAgICBpc1N0cmluZzogZnVuY3Rpb24gKHN0cikge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKTsgXG4gICAgfSxcblxuXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnQ/XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IElmIHRoaXMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiAgICAqL1xuICAgIGlzUmVsYXRpdmVWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGFuIGFycmF5ID8gXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0aGlzLnZhclR5cGUgPT09ICdBcnJheSdcbiAgICAqL1xuICAgIGlzQXJyYXk6IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgcmV0dXJuICh2YXJUeXBlKGFycikgPT09ICdBcnJheScpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQ29weSBvYmplY3Qgb3IgYXJyYXlcbiAgICAgICAgXG4gICAgICAgIENoZWNrcyB3aGV0aGVyIGJhc2UgaXMgYW4gYXJyYXkgb3Igb2JqZWN0IGFuZCBtYWtlc1xuICAgICAgICBhcHByb3ByaWF0ZSBjb3B5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byBjb3B5XG4gICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogTmV3IGNvcHkgb2YgYXJyYXkgb3Igb2JqZWN0XG4gICAgKi9cbiAgICBjb3B5OiBmdW5jdGlvbiAoYmFzZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuaXNBcnJheShiYXNlKSkgPyB0aGlzLmNvcHlBcnJheShiYXNlKSA6IHRoaXMuY29weU9iamVjdChiYXNlKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIERlZXAgY29weSBhbiBvYmplY3RcbiAgICAgICAgXG4gICAgICAgIEl0ZXJhdGVzIG92ZXIgYW4gb2JqZWN0IGFuZCBjcmVhdGVzIGEgbmV3IGNvcHkgb2YgZXZlcnkgaXRlbSxcbiAgICAgICAgZGVlcCBjb3B5aW5nIGlmIGl0IGZpbmRzIGFueSBvYmplY3RzL2FycmF5c1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gY29weVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IE5ldyBjb3B5IG9mIG9iamVjdFxuICAgICovXG4gICAgY29weU9iamVjdDogZnVuY3Rpb24gKGJhc2UpIHtcbiAgICAgICAgdmFyIG5ld09iamVjdCA9IHt9O1xuICAgICAgICBcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGJhc2UpIHtcbiAgICAgICAgICAgIGlmIChiYXNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9ICh0aGlzLmlzT2JqKGJhc2Vba2V5XSkgJiYgIWlzUHJvdGVjdGVkKGtleSkpID8gdGhpcy5jb3B5KGJhc2Vba2V5XSkgOiBiYXNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdPYmplY3Q7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEZWVwIGNvcHkgYW4gYXJyYXlcbiAgICAgICAgXG4gICAgICAgIExvb3BzIHRocm91Z2ggYW4gYXJyYXkgYW5kIGNyZWF0ZXMgYSBuZXcgY29weSBvZiBldmVyeSBpdGVtLFxuICAgICAgICBkZWVwIGNvcHlpbmcgaWYgaXQgZmluZHMgYW55IG9iamVjdHMvYXJyYXlzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5XTogQXJyYXkgdG8gY29weVxuICAgICAgICBAcmV0dXJuIFthcnJheV06IE5ldyBjb3B5IG9mIGFycmF5XG4gICAgKi9cbiAgICBjb3B5QXJyYXk6IGZ1bmN0aW9uIChiYXNlKSB7XG4gICAgICAgIHZhciBuZXdBcnJheSA9IFtdLFxuICAgICAgICAgICAgbGVuZ3RoID0gYmFzZS5sZW5ndGgsXG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgXG4gICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5ld0FycmF5W2ldID0gYmFzZVtpXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgTm9uLWRlc3RydWN0aXZlIG1lcmdlIG9mIG9iamVjdCBvciBhcnJheVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBBcnJheSBvciBvYmplY3QgdG8gdXNlIGFzIGJhc2VcbiAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBBcnJheSBvciBvYmplY3QgdG8gb3ZlcndyaXRlIGJhc2Ugd2l0aFxuICAgICAgICBAcmV0dXJuIFthcnJheSB8fCBvYmplY3RdOiBOZXcgYXJyYXkgb3Igb2JqZWN0XG4gICAgKi9cbiAgICBtZXJnZTogZnVuY3Rpb24gKGJhc2UsIG92ZXJ3cml0ZSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuaXNBcnJheShiYXNlKSkgPyB0aGlzLmNvcHlBcnJheShvdmVyd3JpdGUpIDogdGhpcy5tZXJnZU9iamVjdChiYXNlLCBvdmVyd3JpdGUpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgTm9uLWRlc3RydWN0aXZlIG1lcmdlIG9mIG9iamVjdFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gdXNlIGFzIGJhc2VcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gb3ZlcndyaXRlIGJhc2Ugd2l0aFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBOZXcgb2JqZWN0XG4gICAgKi9cbiAgICBtZXJnZU9iamVjdDogZnVuY3Rpb24gKGJhc2UsIG92ZXJ3cml0ZSkge1xuICAgICAgICB2YXIgaGFzQmFzZSA9IHRoaXMuaXNPYmooYmFzZSksXG4gICAgICAgICAgICBuZXdPYmplY3QgPSBoYXNCYXNlID8gdGhpcy5jb3B5KGJhc2UpIDogdGhpcy5jb3B5KG92ZXJ3cml0ZSksXG4gICAgICAgICAgICBrZXkgPSAnJztcblxuICAgICAgICBpZiAoaGFzQmFzZSkge1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gb3ZlcndyaXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJ3cml0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gKHRoaXMuaXNPYmoob3ZlcndyaXRlW2tleV0pICYmICFpc1Byb3RlY3RlZChrZXkpKSA/IHRoaXMubWVyZ2UoYmFzZVtrZXldLCBvdmVyd3JpdGVba2V5XSkgOiBvdmVyd3JpdGVba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld09iamVjdDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gICAgICAgIFxuICAgICAgICAgICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICAgICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4gICAgKi9cbiAgICBzcGxpdFZhbFVuaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBsZXQgc3BsaXRWYWwgPSB2YWx1ZS5tYXRjaCgvKC0/XFxkKlxcLj9cXGQqKSguKikvKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHNwbGl0VmFsWzFdLFxuICAgICAgICAgICAgdW5pdDogIHNwbGl0VmFsWzJdXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuICAgICovXG4gICAgc3RlcFByb2dyZXNzOiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0ZXBzKSB7XG4gICAgICAgIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpLFxuICAgICAgICAgICAgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpLFxuICAgICAgICAgICAgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiAgICAqL1xuICAgIGN1cnJlbnRUaW1lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gXCJ1bmRlZmluZWRcIikgPyBwZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cbiAgICBcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoLFxuICAgIHRyYW5zZm9ybURpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1kaWN0aW9uYXJ5JyksXG4gICAgdHJhbnNmb3JtUHJvcHMgPSB0cmFuc2Zvcm1EaWN0aW9uYXJ5LnByb3BzLFxuXG4gICAgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG91dHB1dCwgY2FjaGUpIHtcbiAgICB2YXIgY3NzID0ge30sXG4gICAgICAgIHRyYW5zZm9ybSA9ICcnLFxuICAgICAgICB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG4gICAgICAgIFxuICAgIC8vIExvb3AgdGhyb3VnaCBvdXRwdXQsIGNoZWNrIGZvciB0cmFuc2Zvcm0gcHJvcGVydGllc1xuICAgIGVhY2gob3V0cHV0LCBmdW5jdGlvbiAoa2V5LCBydWxlKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSB0cmFuc2Zvcm0gcHJvcGVydHksIGFkZCB0byB0cmFuc2Zvcm0gc3RyaW5nXG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gKz0ga2V5ICsgJygnICsgcnVsZSArICcpJztcbiAgICAgICAgICAgIHRyYW5zZm9ybUhhc1ogPSAoa2V5ID09PSBUUkFOU0xBVEVfWikgPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcbiAgICAgICAgXG4gICAgICAgIC8vIE9yIGp1c3QgYXNzaWduIGRpcmVjdGx5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocnVsZSAhPT0gY2FjaGVba2V5XSkge1xuICAgICAgICAgICAgICAgIGNhY2hlW2tleV0gPSBjc3Nba2V5XSA9IHJ1bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIElmIHdlIGhhdmUgdHJhbnNmb3JtIHByb3BlcnRpZXMsIGFkZCB0cmFuc2xhdGVaXG4gICAgaWYgKHRyYW5zZm9ybSAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gKz0gJyAnICsgVFJBTlNMQVRFX1ogKyAnKDBweCknO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYW5zZm9ybSAhPT0gY2FjaGUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICBjc3MudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjYWNoZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvY3NzL2J1aWxkLmpzXG4gKiovIiwidmFyIFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gICAgeTogVFJBTlNMQVRFICsgJ1knLFxuICAgIHo6IFRSQU5TTEFURSArICdaJ1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9jc3MvbWFwLmpzXG4gKiovIiwidmFyIENPTE9SID0gJ2NvbG9yJyxcbiAgICBQT1NJVElPTlMgPSAncG9zaXRpb25zJyxcbiAgICBESU1FTlNJT05TID0gJ2RpbWVuc2lvbnMnLFxuICAgIFNIQURPVyA9ICdzaGFkb3cnLFxuICAgIEFOR0xFID0gJ2FuZ2xlJyxcbiAgICBBTFBIQSA9ICdhbHBoYScsXG4gICAgUFggPSAncHgnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAvLyBDb2xvciBwcm9wZXJ0aWVzXG4gICAgY29sb3I6IENPTE9SLFxuICAgIGJhY2tncm91bmRDb2xvcjogQ09MT1IsXG4gICAgb3V0bGluZUNvbG9yOiBDT0xPUixcbiAgICBmaWxsOiBDT0xPUixcbiAgICBzdHJva2U6IENPTE9SLFxuICAgIC8vIEJvcmRlclxuICAgIGJvcmRlckNvbG9yOiBDT0xPUixcbiAgICBib3JkZXJUb3BDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IENPTE9SLFxuICAgIGJvcmRlckxlZnRDb2xvcjogQ09MT1IsXG4gICAgYm9yZGVyUmFkaXVzOiBQWCxcbiAgICAvLyBEaW1lbnNpb25zXG4gICAgbWFyZ2luOiBESU1FTlNJT05TLFxuICAgIHBhZGRpbmc6IERJTUVOU0lPTlMsXG4gICAgd2lkdGg6IFBYLFxuICAgIGhlaWdodDogUFgsICAgIFxuICAgIC8vIFBvc2l0aW9uc1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogUE9TSVRJT05TLFxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiBQT1NJVElPTlMsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBQT1NJVElPTlMsICAgIFxuICAgIC8vIFNoYWRvd3NcbiAgICB0ZXh0U2hhZG93OiBTSEFET1csXG4gICAgYm94U2hhZG93OiBTSEFET1csICAgIFxuICAgIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgcm90YXRlOiBBTkdMRSxcbiAgICByb3RhdGVYOiBBTkdMRSxcbiAgICByb3RhdGVZOiBBTkdMRSxcbiAgICByb3RhdGVaOiBBTkdMRSxcbiAgICBza2V3WDogQU5HTEUsXG4gICAgc2tld1k6IEFOR0xFLFxuICAgIHRyYW5zbGF0ZVg6IFBYLFxuICAgIHRyYW5zbGF0ZVk6IFBYLFxuICAgIHRyYW5zbGF0ZVo6IFBYLFxuICAgIHBlcnNwZWN0aXZlOiBQWCxcbiAgICBvcGFjaXR5OiBBTFBIQVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9jc3MvdHlwZS1tYXAuanNcbiAqKi8iLCJ2YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2gsXG4gICAgdHJhbnNmb3JtRGljdGlvbmFyeSA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tZGljdGlvbmFyeScpLFxuICAgIHRyYW5zZm9ybVByb3BzID0gdHJhbnNmb3JtRGljdGlvbmFyeS5wcm9wcyxcbiAgICB6ZXJvTm90WmVybyA9IDAuMDAwMTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3V0cHV0LCBvcmlnaW4pIHtcbiAgICB2YXIgcHJvcHMgPSB7fSxcbiAgICAgICAgaGFzVHJhbnNmb3JtID0gZmFsc2UsXG4gICAgICAgIHNjYWxlID0gb3V0cHV0LnNjYWxlICE9PSB1bmRlZmluZWQgPyBvdXRwdXQuc2NhbGUgfHwgemVyb05vdFplcm8gOiBvdXRwdXQuc2NhbGVYIHx8IDEsXG4gICAgICAgIHNjYWxlWSA9IG91dHB1dC5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IG91dHB1dC5zY2FsZVkgfHwgemVyb05vdFplcm8gOiBzY2FsZSB8fCAxLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW5YID0gb3JpZ2luLngsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblkgPSBvcmlnaW4ueSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1YID0gLSB0cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSksXG4gICAgICAgIHNjYWxlVHJhbnNmb3JtWSA9IC0gdHJhbnNmb3JtT3JpZ2luWSAqIChzY2FsZVkgKiAxKSxcbiAgICAgICAgc2NhbGVSZXBsYWNlWCA9IHRyYW5zZm9ybU9yaWdpblggLyBzY2FsZSxcbiAgICAgICAgc2NhbGVSZXBsYWNlWSA9IHRyYW5zZm9ybU9yaWdpblkgLyBzY2FsZVksXG4gICAgICAgIHRyYW5zZm9ybSA9IHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogYHRyYW5zbGF0ZSgke291dHB1dC50cmFuc2xhdGVYfSwgJHtvdXRwdXQudHJhbnNsYXRlWX0pIGAsXG4gICAgICAgICAgICBzY2FsZTogYHRyYW5zbGF0ZSgke3NjYWxlVHJhbnNmb3JtWH0sICR7c2NhbGVUcmFuc2Zvcm1ZfSkgc2NhbGUoJHtzY2FsZX0sICR7c2NhbGVZfSkgdHJhbnNsYXRlKCR7c2NhbGVSZXBsYWNlWH0sICR7c2NhbGVSZXBsYWNlWX0pIGAsXG4gICAgICAgICAgICByb3RhdGU6IGByb3RhdGUoJHtvdXRwdXQucm90YXRlfSwgJHt0cmFuc2Zvcm1PcmlnaW5YfSwgJHt0cmFuc2Zvcm1PcmlnaW5ZfSkgYCxcbiAgICAgICAgICAgIHNrZXdYOiBgc2tld1goJHtvdXRwdXQuc2tld1h9KSBgLFxuICAgICAgICAgICAgc2tld1k6IGBza2V3WSgke291dHB1dC5za2V3WX0pIGBcbiAgICAgICAgfTtcblxuICAgIGVhY2gob3V0cHV0LCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgICAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcblxuICAgICAgICBlYWNoKHRyYW5zZm9ybSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSAoa2V5ID09PSAnc2NhbGUnKSA/ICcxJyA6ICcwJztcbiAgICAgICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB2YWx1ZS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9zdmcvYnVpbGQuanNcbiAqKi8iLCJ2YXIgQ09MT1IgPSAnY29sb3InLFxuICAgIFNDQUxFID0gJ3NjYWxlJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZmlsbDogQ09MT1IsXG4gICAgc3Ryb2tlOiBDT0xPUixcbiAgICBzY2FsZTogU0NBTEUsXG4gICAgc2NhbGVYOiBTQ0FMRSxcbiAgICBzY2FsZVk6IFNDQUxFLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ3Bvc2l0aW9ucycsXG4gICAgZDogJ2NvbXBsZXgnXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL3N2Zy90eXBlLW1hcC5qc1xuICoqLyIsInZhciBTVFJPS0UgPSAnc3Ryb2tlJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgb3BhY2l0eTogU1RST0tFICsgJy1vcGFjaXR5JyxcbiAgICB3aWR0aDogU1RST0tFICsgJy13aWR0aCcsXG4gICAgbWl0ZXJsaW1pdDogU1RST0tFICsgJy1taXRlcmxpbWl0J1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9wYXRoL21hcC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUXVldWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICB9O1xuXG5RdWV1ZS5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLypcbiAgICAgICAgQWRkIGEgc2V0IG9mIGFyZ3VtZW50cyB0byBxdWV1ZVxuICAgICovXG4gICAgYWRkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucXVldWUucHVzaChbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IG5leHQgc2V0IG9mIGFyZ3VtZW50cyBmcm9tIHF1ZXVlXG4gICAgKi9cbiAgICBuZXh0OiBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IHRoaXMucXVldWUsXG4gICAgICAgICAgICByZXR1cm5WYWwgPSBmYWxzZSxcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5pbmRleDtcbiAgICAgICAgICAgIFxuICAgICAgICBkaXJlY3Rpb24gPSAoYXJndW1lbnRzLmxlbmd0aCkgPyBkaXJlY3Rpb24gOiAxO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgb3VyIGluZGV4IGlzIGJldHdlZW4gMCBhbmQgdGhlIHF1ZXVlIGxlbmd0aCwgcmV0dXJuIHRoYXQgaXRlbVxuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuVmFsID0gcXVldWVbaW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4ICsgZGlyZWN0aW9uO1xuICAgICAgICBcbiAgICAgICAgLy8gT3IgY2xlYXJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgUmVwbGFjZSBxdWV1ZSB3aXRoIGVtcHR5IGFycmF5XG4gICAgKi9cbiAgICBjbGVhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVldWU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5jL1F1ZXVlLmpzXG4gKiovIiwiLypcbiAgICBAcGFyYW0gW3N0cmluZyB8fCBOb2RlTGlzdCB8fCBqUXVlcnkgb2JqZWN0XTpcbiAgICAgICAgSWYgc3RyaW5nLCB0cmVhdGVkIGFzIHNlbGVjdG9yLlxuICAgICAgICBJZiBub3QsIHRyZWF0ZWQgYXMgcHJlZXhpc3RpbmcgTm9kZUxpc3QgfHwgalF1ZXJ5IG9iamVjdC5cbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHZhciBub2RlcyA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3IsXG4gICAgICAgIGVsZW1lbnRzID0gW107XG5cbiAgICAvLyBJZiBqUXVlcnkgc2VsZWN0aW9uLCBnZXQgYXJyYXkgb2YgRWxlbWVudHNcbiAgICBpZiAobm9kZXMuZ2V0KSB7XG4gICAgICAgIGVsZW1lbnRzID0gbm9kZXMuZ2V0KCk7XG5cbiAgICAvLyBPciBjb252ZXJ0IE5vZGVMaXN0IHRvIGFycmF5XG4gICAgfSBlbHNlIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKG5vZGVzKTtcblxuICAgIC8vIE9yIGlmIGl0J3MganVzdCBhbiBFbGVtZW50LCBwdXQgaW50byBhcnJheVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnRzLnB1c2gobm9kZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5jL3NlbGVjdC1kb20uanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHZhbHVlVHlwZU1hbmFnZXIgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9tYW5hZ2VyJyksXG4gICAgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaCxcbiAgICBBY3Rpb24gPSByZXF1aXJlKCcuLi9hY3Rpb25zL0FjdGlvbicpLFxuICAgIGRlZmF1bHRBY3Rpb24gPSBuZXcgQWN0aW9uKCksXG4gICAgV2F0Y2ggPSByZXF1aXJlKCcuLi9hY3Rpb25zL1dhdGNoJyksXG4gICAgd2F0Y2hlciA9IG5ldyBXYXRjaCgpLFxuXG4gICAgY3JlYXRlTWFwcGVyID0gZnVuY3Rpb24gKHJvbGUsIG1hcHBlZFZhbHVlcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5hbWUsIHZhbCkge1xuICAgICAgICAgICAgbWFwcGVkVmFsdWVzW3JvbGUubWFwKG5hbWUpXSA9IHZhbDtcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQ2hlY2sgYWxsIEFjdGlvbnMgZm9yIGBvbkVuZGAsIHJldHVybiB0cnVlIGlmIGFsbCBhcmUgdHJ1ZVxuXG4gICAgICAgIEBwYXJhbSBbQWN0b3JdXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl1cbiAgICAgICAgQHJldHVybnMgW2Jvb2xlYW5dXG4gICAgKi9cbiAgICBjaGVja0FsbEFjdGlvbnNIYXZlRW5kZWQgPSBmdW5jdGlvbiAoYWN0b3IsIGhhc0NoYW5nZWQpIHtcbiAgICAgICAgdmFyIGhhc0VuZGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlcyA9IGFjdG9yLnN0YXRlLnZhbHVlcztcblxuICAgICAgICBlYWNoKGFjdG9yLmFjdGl2ZUFjdGlvbnMsIChrZXksIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgLy8gUmV0dXJuIGlmIGFjdGlvbiBoYXMgYmVlbiBkZWxldGVkIGVsc2V3aGVyZVxuICAgICAgICAgICAgaWYgKCFhY3Rpb24pIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGlmIChhY3Rpb24ub25GcmFtZSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbi5vbkZyYW1lLmNhbGwoYWN0b3IsIHZhbHVlcywgYWN0b3IsIGFjdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhY3Rpb24ub25VcGRhdGUgJiYgaGFzQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIGFjdGlvbi5vblVwZGF0ZS5jYWxsKGFjdG9yLCB2YWx1ZXMsIGFjdG9yLCBhY3Rpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmhhc0VuZGVkICYmIGFjdGlvbi5oYXNFbmRlZChhY3RvciwgaGFzQ2hhbmdlZCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaGFzRW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5vbkNvbXBsZXRlLmNhbGwoYWN0b3IsIGFjdG9yLCBhY3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhY3Rvci51bmJpbmRBY3Rpb24oa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGhhc0VuZGVkO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBVcGRhdGUgdGhlIEFjdG9yIGFuZCBpdHMgdmFsdWVzXG5cbiAgICAgICAgQHBhcmFtIFtpbnRdOiBUaW1lc3RhbXAgb2YgckFGIGNhbGxcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBUaW1lIHNpbmNlIGxhc3QgZnJhbWVcbiAgICAqL1xuICAgIHVwZGF0ZSA9IGZ1bmN0aW9uIChmcmFtZXN0YW1wLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBudW1BY3RpdmVWYWx1ZXMgPSB0aGlzLmFjdGl2ZVZhbHVlcy5sZW5ndGgsXG4gICAgICAgICAgICBudW1BY3RpdmVQYXJlbnRzID0gdGhpcy5hY3RpdmVQYXJlbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIG51bVJvbGVzID0gdGhpcy5yb2xlcy5sZW5ndGgsXG4gICAgICAgICAgICBzdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICBoYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gVXBkYXRlIHZhbHVlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUFjdGl2ZVZhbHVlczsgaSsrKSB7XG4gICAgICAgICAgICAvLyBHZXQgdmFsdWUgYW5kIGtleVxuICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMuYWN0aXZlVmFsdWVzW2ldO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSAoIXZhbHVlLmFjdGlvbiB8fCB2YWx1ZS5hY3Rpb24gJiYgIXZhbHVlLmFjdGlvbi5pc0FjdGl2ZSkgPyBkZWZhdWx0QWN0aW9uIDogdmFsdWUuYWN0aW9uO1xuXG4gICAgICAgICAgICAvLyBGaXJlIGFjdGlvbiBvbkZyYW1lU3RhcnQgaWYgbm90IGFscmVhZHkgZmlyZWRcbiAgICAgICAgICAgIGlmIChhY3Rpb24ub25GcmFtZVN0YXJ0ICYmIGFjdGlvbi5sYXN0VXBkYXRlICE9PSBmcmFtZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLm9uRnJhbWVTdGFydCh0aGlzLCBmcmFtZUR1cmF0aW9uLCBmcmFtZXN0YW1wKTtcbiAgICAgICAgICAgICAgICBhY3Rpb24ubGFzdFVwZGF0ZSA9IGZyYW1lc3RhbXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgdmFsdWVcbiAgICAgICAgICAgIGxldCB1cGRhdGVkVmFsdWUgPSB1dGlscy5pc1N0cmluZyh2YWx1ZS53YXRjaCkgPyB3YXRjaGVyLnByb2Nlc3ModGhpcywgdmFsdWUpIDogYWN0aW9uLnByb2Nlc3ModGhpcywgdmFsdWUsIGtleSwgZnJhbWVEdXJhdGlvbik7XG5cbiAgICAgICAgICAgIC8vIExpbWl0IGlmIHRoaXMgYWN0aW9uIGRvZXMgdGhhdCBraW5kIG9mIHRoaW5nXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmxpbWl0ICYmIHZhbHVlLmhhc1JhbmdlKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gYWN0aW9uLmxpbWl0KHVwZGF0ZWRWYWx1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSb3VuZCB2YWx1ZSBpZiByb3VuZCBpcyB0cnVlXG4gICAgICAgICAgICBpZiAodmFsdWUucm91bmQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBNYXRoLnJvdW5kKHVwZGF0ZWRWYWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBmcmFtZUNoYW5nZVxuICAgICAgICAgICAgdmFsdWUuZnJhbWVDaGFuZ2UgPSB1cGRhdGVkVmFsdWUgLSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgdmVsb2NpdHkgaWYgQWN0aW9uIGhhc24ndFxuICAgICAgICAgICAgaWYgKCFhY3Rpb24uY2FsY3VsYXRlc1ZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSBjYWxjLnNwZWVkUGVyU2Vjb25kKHZhbHVlLmZyYW1lQ2hhbmdlLCBmcmFtZUR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIGN1cnJlbnQgc3BlZWRcbiAgICAgICAgICAgIHZhbHVlLnNwZWVkID0gTWF0aC5hYnModmFsdWUudmVsb2NpdHkpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB2YWx1ZSdzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5jdXJyZW50ICE9PSB1cGRhdGVkVmFsdWUgfHwgdGhpcy5maXJzdEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCBuZXcgY3VycmVudCBcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB1cGRhdGVkVmFsdWU7XG4gICAgICAgICAgICBsZXQgdmFsdWVTdGF0ZSA9ICh2YWx1ZS51bml0KSA/IHVwZGF0ZWRWYWx1ZSArIHZhbHVlLnVuaXQgOiB1cGRhdGVkVmFsdWU7XG5cbiAgICAgICAgICAgIC8vIFB1dCB2YWx1ZSBpbiBzdGF0ZSBpZiBubyBwYXJlbnRcbiAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudmFsdWVzW2tleV0gPSB2YWx1ZVN0YXRlO1xuXG4gICAgICAgICAgICAvLyBPciwgYWRkIHRvIHBhcmVudCBzdGF0ZSB0byBiZSBjb21iaW5lZCBsYXRlclxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZVt2YWx1ZS5wYXJlbnRdID0gc3RhdGVbdmFsdWUucGFyZW50XSB8fCB7fTtcbiAgICAgICAgICAgICAgICBzdGF0ZVt2YWx1ZS5wYXJlbnRdW3ZhbHVlLnByb3BOYW1lXSA9IHZhbHVlU3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlcyBmcm9tIGNhbGN1bGF0ZWQgY2hpbGRyZW5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1BY3RpdmVQYXJlbnRzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSB0aGlzLmFjdGl2ZVBhcmVudHNbaV07XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlIGN1cnJlbnQgcHJvcGVydHlcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZVR5cGVNYW5hZ2VyW3ZhbHVlLnR5cGVdLmNvbWJpbmUoc3RhdGVba2V5XSwgdmFsdWUudGVtcGxhdGUpO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgc3RhdGVcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlc1trZXldID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgYGZyYW1lYCBhbmQgYHVwZGF0ZWAgY2FsbGJhY2tzIG9uIGFsbCBSb2xlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvbGVzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb2xlID0gdGhpcy5yb2xlc1tpXTtcbiAgICAgICAgICAgIGxldCBtYXBwZWRWYWx1ZXMgPSB7fTtcblxuICAgICAgICAgICAgZWFjaChzdGF0ZS52YWx1ZXMsIGNyZWF0ZU1hcHBlcihyb2xlLCBtYXBwZWRWYWx1ZXMpKTtcblxuICAgICAgICAgICAgaWYgKHJvbGUuZnJhbWUpIHtcbiAgICAgICAgICAgICAgICByb2xlLmZyYW1lLmNhbGwodGhpcywgbWFwcGVkVmFsdWVzLCB0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJvbGUudXBkYXRlICYmIGhhc0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICByb2xlLnVwZGF0ZS5jYWxsKHRoaXMsIG1hcHBlZFZhbHVlcywgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCBoYXNDaGFuZ2VkIGJlZm9yZSBmdXJ0aGVyIEFjdGlvbnMgbWlnaHQgYWZmZWN0IHRoaXNcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKGNoZWNrQWxsQWN0aW9uc0hhdmVFbmRlZCh0aGlzLCBoYXNDaGFuZ2VkKSkge1xuICAgICAgICAgICAgICAgIC8vIEZpcmUgYGNvbXBsZXRlYCBjYWxsYmFja3NcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvbGUgPSB0aGlzLnJvbGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAocm9sZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZS5jb21wbGV0ZS5jYWxsKHRoaXMsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdEZyYW1lID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgdGhpcy5mcmFtZXN0YW1wID0gZnJhbWVzdGFtcDtcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVwZGF0ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rvci91cGRhdGUuanNcbiAqKi8iLCJ2YXIgdmFsdWVUeXBlc01hbmFnZXIgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9tYW5hZ2VyJyksXG4gICAgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBpc051bSA9IHV0aWxzLmlzTnVtLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoO1xuXG5jb25zdCBudW1lcmljYWxWYWx1ZXMgPSBbJ2N1cnJlbnQnLCAndG8nLCAnbWluJywgJ21heCcsICd2ZWxvY2l0eScsICdmcmljdGlvbicsICdzcHJpbmcnXSxcbiAgICBudW1OdW1lcmljYWxWYWx1ZXMgPSBudW1lcmljYWxWYWx1ZXMubGVuZ3RoLFxuICAgIGRlZmF1bHRWYWx1ZSA9IHtcbiAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgdmVsb2NpdHk6IDAsXG4gICAgICAgIHNwZWVkOiAwLFxuICAgICAgICBmcmFtZUNoYW5nZTogMFxuICAgIH07XG5cbmZ1bmN0aW9uIGNoZWNrTnVtZXJpY2FsVmFsdWUobmFtZSkge1xuICAgIHJldHVybiAobnVtZXJpY2FsVmFsdWVzLmluZGV4T2YobmFtZSkgPiAtMSk7XG59XG5cbi8qXG4gICAgQ2hlY2sgUm9sZSB0eXBlTWFwcyB0byBzZWUgaWYgdGhpcyB2YWx1ZSBuYW1lIGhhcyBiZWVuIG1hcHBlZFxuICAgIHRvIGEgc3BlY2lmaWMgdmFsdWUgdHlwZVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcmV0dXJucyBbc3RyaW5nXTogVmFsdWUgdHlwZVxuKi9cbmZ1bmN0aW9uIGNoZWNrUm9sZXMobmFtZSwgcm9sZXMpIHtcbiAgICB2YXIgdmFsdWVUeXBlO1xuXG4gICAgZWFjaChyb2xlcywgKGtleSwgcm9sZSkgPT4ge1xuICAgICAgICBpZiAocm9sZS5fdHlwZU1hcCkge1xuICAgICAgICAgICAgdmFsdWVUeXBlID0gcm9sZS5fdHlwZU1hcFtyb2xlLm1hcChuYW1lKV0gfHwgdmFsdWVUeXBlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFsdWVUeXBlO1xufVxuXG4vKlxuICAgIENoZWNrIHZhbHVlIGZvciBzcGVjaWFsIHR5cGVcblxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm5zIFtzdHJpbmcgfHwgZmFsc2VdXG4qL1xuZnVuY3Rpb24gY2hlY2tWYWx1ZVR5cGUoZXhpc3RpbmdWYWx1ZSwgbmV3VmFsdWUsIHNjb3BlLCB2YWx1ZU5hbWUpIHtcbiAgICB2YXIgdmFsdWVUeXBlO1xuXG4gICAgLy8gQ2hlY2sgZXhpc3RpbmcgdmFsdWUgZm9yIHR5cGUgYWxyZWFkeSBzZXRcbiAgICBpZiAoZXhpc3RpbmdWYWx1ZSAmJiBleGlzdGluZ1ZhbHVlLnR5cGUpIHtcbiAgICAgICAgdmFsdWVUeXBlID0gZXhpc3RpbmdWYWx1ZS50eXBlO1xuICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE9yIGNoZWNrIFJvbGUgX3R5cGVNYXAgcHJvcGVydGllc1xuICAgICAgICBpZiAoc2NvcGUucm9sZXMpIHtcbiAgICAgICAgICAgIHZhbHVlVHlwZSA9IGNoZWNrUm9sZXModmFsdWVOYW1lLCBzY29wZS5yb2xlcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5hbGx5IHJ1biB0ZXN0c1xuICAgICAgICBpZiAoIXZhbHVlVHlwZSAmJiB1dGlscy5pc1N0cmluZyhuZXdWYWx1ZS5jdXJyZW50KSkge1xuICAgICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWVUeXBlc01hbmFnZXIudGVzdChuZXdWYWx1ZS5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZVR5cGU7XG59XG5cbi8qXG4gICAgUmVzb2x2ZSBhIHByb3BlcnR5XG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbiB8fCBudW1iZXJdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHJldHVybnMgW251bWJlcl1cbiovXG5mdW5jdGlvbiByZXNvbHZlKG5hbWUsIHByb3AsIHZhbHVlLCBzY29wZSkge1xuICAgIGxldCBpc051bWVyaWNhbFZhbHVlID0gY2hlY2tOdW1lcmljYWxWYWx1ZShuYW1lKTtcblxuICAgIC8vIElmIGZ1bmN0aW9uLCByZXNvbHZlXG4gICAgaWYgKHV0aWxzLmlzRnVuYyhwcm9wKSAmJiBpc051bWVyaWNhbFZhbHVlKSB7XG4gICAgICAgIHByb3AgPSBwcm9wLmNhbGwoc2NvcGUsIHNjb3BlKTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdHJpbmcsIGNoZWNrIGZvciByZWxhdGl2ZSBudW1iZXJzIGFuZCB1bml0c1xuICAgIGlmICh1dGlscy5pc1N0cmluZyhwcm9wKSkge1xuICAgICAgICAvLyBJZiByZWxhdGl2ZSB2YWx1ZVxuICAgICAgICBpZiAocHJvcC5pbmRleE9mKCc9JykgPiAwKSB7XG4gICAgICAgICAgICBwcm9wID0gY2FsYy5yZWxhdGl2ZVZhbHVlKHZhbHVlLmN1cnJlbnQsIHByb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdW5pdFxuICAgICAgICBpZiAoaXNOdW1lcmljYWxWYWx1ZSkge1xuICAgICAgICAgICAgc3BsaXRVbml0KHByb3AsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc051bWVyaWNhbFZhbHVlKSB7XG4gICAgICAgIHByb3AgPSBwYXJzZUZsb2F0KHByb3ApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wO1xufVxuXG4vKlxuICAgIFNwbGl0IGEgdmFsdWUgaW50byBzdWItdmFsdWVzXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW3ZhbHVlVHlwZUhhbmRsZXJdXG4gICAgQHJldHVybnMgW29iamVjdF1cbiovXG5mdW5jdGlvbiBzcGxpdChuYW1lLCB2YWx1ZSwgc2NvcGUsIHZhbHVlVHlwZUhhbmRsZXIpIHtcbiAgICB2YXIgc3BsaXRWYWx1ZXMgPSB7fSxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBmb3IgKDsgaSA8IG51bU51bWVyaWNhbFZhbHVlczsgaSsrKSB7XG4gICAgICAgIGxldCBwcm9wTmFtZSA9IG51bWVyaWNhbFZhbHVlc1tpXTtcbiAgICAgICAgbGV0IHNwbGl0UHJvcCA9IHt9O1xuXG4gICAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZVByb3AgPSB2YWx1ZVtwcm9wTmFtZV07XG5cbiAgICAgICAgICAgIC8vIElmIHdlIG5lZWQgdG8gZmlyc3QgcmVzb2x2ZSB0aGlzLCByZXNvbHZlXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVByb3AgPSB2YWx1ZVByb3AuY2FsbChzY29wZSwgc2NvcGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXV0aWxzLmlzU3RyaW5nKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3BsaXRQcm9wID0gdmFsdWVUeXBlSGFuZGxlci5zcGxpdCh2YWx1ZVByb3ApO1xuXG4gICAgICAgICAgICAvLyBBc3NpZ24gc3BsaXQgcHJvcGVydGllcyB0byBlYWNoIGNoaWxkIHZhbHVlXG4gICAgICAgICAgICBlYWNoKHNwbGl0UHJvcCwgKGtleSwgcHJvcCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgdmFsdWUgaWYgbm9uZSBleGlzdHNcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlc1trZXldID0gc3BsaXRWYWx1ZXNba2V5XSB8fCB1dGlscy5jb3B5KHZhbHVlVHlwZXNNYW5hZ2VyLmRlZmF1bHRQcm9wcyh2YWx1ZS50eXBlLCBrZXkpKTtcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlc1trZXldW3Byb3BOYW1lXSA9IHByb3A7XG5cbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoc3BsaXRQcm9wW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwbGl0VW5pdChzcGxpdFZhbHVlc1trZXldW3Byb3BOYW1lXSwgc3BsaXRWYWx1ZXNba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3BsaXRWYWx1ZXM7XG59XG5cbi8qXG4gICAgU3BsaXQgdmFsdWUgaW50byBudW1iZXIgYW5kIHVuaXQsIGFuZCBzZXQgdW5pdCB0byB2YWx1ZVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtvYmplY3RdXG4qL1xuZnVuY3Rpb24gc3BsaXRVbml0KHByb3BlcnR5LCBob3N0VmFsdWUpIHtcbiAgICBpZiAodXRpbHMuaXNOdW0ocHJvcGVydHkpKSB7IHJldHVybiBwcm9wZXJ0eTsgfVxuICAgIGxldCByZXR1cm5WYWwgPSBwcm9wZXJ0eSxcbiAgICAgICAgeyB2YWx1ZSwgdW5pdCB9ID0gdXRpbHMuc3BsaXRWYWxVbml0KHByb3BlcnR5KTtcblxuICAgIGlmICghaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIHJldHVyblZhbCA9IHZhbHVlO1xuICAgICAgICBpZiAodW5pdCkge1xuICAgICAgICAgICAgaG9zdFZhbHVlLnVuaXQgPSB1bml0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldHVyblZhbDtcbn1cblxuLypcbiAgICBQcmVwcm9jZXNzIGluY29taW5nIHZhbHVlcywgc3BsaXR0aW5nIG5vbi1udW1lcmljYWwgdmFsdWVzXG4gICAgaW50byBzdWItdmFsdWVzIGllIGhleFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4qL1xuZnVuY3Rpb24gcHJlcHJvY2VzcyhleGlzdGluZywgaW5jb21pbmcsIHNjb3BlLCBkZWZhdWx0UHJvcCkge1xuICAgIHZhciB2YWx1ZXMgPSB7fTtcblxuICAgIGVhY2goaW5jb21pbmcsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBleGlzdGluZ1ZhbHVlID0gZXhpc3Rpbmdba2V5XSxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0ge307XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqKHZhbHVlKSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRQcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdmFsdWUgZG9lc24ndCBoYXZlIGEgc3BlY2lhbCB0eXBlLCBjaGVjayBmb3Igb25lXG4gICAgICAgIG5ld1ZhbHVlLnR5cGUgPSBjaGVja1ZhbHVlVHlwZShleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSwgc2NvcGUsIGtleSk7XG4gICAgICAgIG5ld1ZhbHVlLndhdGNoID0gdXRpbHMuaXNTdHJpbmcobmV3VmFsdWUud2F0Y2gpID8gbmV3VmFsdWUud2F0Y2ggOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgdmFsdWVzW2tleV0gPSBuZXdWYWx1ZTtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdHlwZSBwcm9wZXJ0eSwgc3BsaXQvYXNzaWduIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUpIHtcbiAgICAgICAgICAgIGxldCB0eXBlSGFuZGxlciA9IHZhbHVlVHlwZXNNYW5hZ2VyW25ld1ZhbHVlLnR5cGVdO1xuXG4gICAgICAgICAgICAvLyBJZiB2YWx1ZVR5cGUgaGFuZGxlciBoYXMgYSBzcGxpdCBmdW5jdGlvbiwgc3BsaXQgdGhpcyB2YWx1ZVxuICAgICAgICAgICAgaWYgKHR5cGVIYW5kbGVyLnNwbGl0KSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwbGl0VmFsdWVzID0gc3BsaXQoa2V5LCBuZXdWYWx1ZSwgc2NvcGUsIHR5cGVIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IHt9O1xuXG4gICAgICAgICAgICAgICAgZWFjaChzcGxpdFZhbHVlcywgKGNoaWxkTmFtZSwgY2hpbGRWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlID0gdXRpbHMubWVyZ2UobmV3VmFsdWUsIGNoaWxkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlLnBhcmVudCA9IGNoaWxkVmFsdWUubmFtZSA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZS5wcm9wTmFtZSA9IGNoaWxkTmFtZTtcblxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hpbGRWYWx1ZS50eXBlO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hpbGRWYWx1ZS5jaGlsZHJlbjtcblxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbltjaGlsZE5hbWVdID0gdmFsdWVzW2tleSArIGNoaWxkTmFtZV0gPSBjaGlsZFZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVIYW5kbGVyLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnRlbXBsYXRlID0gZXhpc3RpbmdWYWx1ZSA/IGV4aXN0aW5nVmFsdWUudGVtcGxhdGUgOiB0eXBlSGFuZGxlci50ZW1wbGF0ZShuZXdWYWx1ZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE9yIGp1c3QgYXNzaWduIGRlZmF1bHQgcHJvcGVydGllcyBmb3IgdGhpcyB2YWx1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XSA9IHV0aWxzLm1lcmdlKHZhbHVlVHlwZXNNYW5hZ2VyLmRlZmF1bHRQcm9wcyhuZXdWYWx1ZS50eXBlLCBrZXkpLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YWx1ZXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgLypcbiAgICAgICAgRmxpcCB2YWx1ZSB0YXJnZXQvb3JpZ2luXG4gICAgKi9cbiAgICBmbGlwOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9ICh2YWx1ZS50YXJnZXQgIT09IHVuZGVmaW5lZCkgPyB2YWx1ZS50YXJnZXQgOiB2YWx1ZS5jdXJyZW50O1xuICAgICAgICB2YWx1ZS50YXJnZXQgPSB2YWx1ZS50byA9IHZhbHVlLm9yaWdpbjtcbiAgICAgICAgdmFsdWUub3JpZ2luID0gdGFyZ2V0O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBNZXJnZSBleGlzdGluZyBhbmQgaW5jb21pbmcgdmFsdWVzLCByZXNvbHZpbmcgcHJvcGVydGllc1xuICAgICAgICBzZXQgYXMgZnVuY3Rpb25zIGFuZCBzcGxpdHRpbmcgbm9uLW51bWVyaWNhbCB2YWx1ZXMgaWUgaGV4XG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddIChvcHRpb25hbClcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm5zIFtvYmplY3RdOiBOZXcgdmFsdWVzIG9iamVjdFxuICAgICovXG4gICAgcHJvY2VzczogZnVuY3Rpb24gKGV4aXN0aW5nLCBpbmNvbWluZywgaW5oZXJpdCwgZGVmYXVsdFByb3AsIHNjb3BlKSB7XG4gICAgICAgIGV4aXN0aW5nID0gZXhpc3RpbmcgfHwge307XG4gICAgICAgIGRlZmF1bHRQcm9wID0gZGVmYXVsdFByb3AgfHwgJ2N1cnJlbnQnO1xuICAgICAgICBsZXQgcHJlcHJvY2Vzc2VkID0gcHJlcHJvY2VzcyhleGlzdGluZywgaW5jb21pbmcsIHNjb3BlLCBkZWZhdWx0UHJvcCk7XG5cbiAgICAgICAgZWFjaChwcmVwcm9jZXNzZWQsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSBleGlzdGluZ1trZXldIHx8IHV0aWxzLmNvcHkoZGVmYXVsdFZhbHVlKSxcbiAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbiA9ICh2YWx1ZS5jaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0QWN0aW9uVmFsdWUgPSBpbmhlcml0LmFjdGlvbiA/IGluaGVyaXQuYWN0aW9uLmdldERlZmF1bHRWYWx1ZSgpIDoge307XG5cbiAgICAgICAgICAgIHZhbHVlLmFjdGlvbiA9IGluaGVyaXQuYWN0aW9uO1xuXG4gICAgICAgICAgICBlYWNoKGRlZmF1bHRBY3Rpb25WYWx1ZSwgKHByb3BOYW1lLCBkZWZhdWx0QWN0aW9uUHJvcCkgPT4ge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlW3Byb3BOYW1lXSA9IChpbmhlcml0Lmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJiAhdmFsdWUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSA/IGluaGVyaXRbcHJvcE5hbWVdIDogZGVmYXVsdEFjdGlvblByb3A7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZWFjaCh2YWx1ZSwgKHZhbHVlTmFtZSwgdmFsdWVQcm9wKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcHJvcGVydHkgaXMgbm90IHVuZGVmaW5lZCBvciBhIG51bWJlciwgcmVzb2x2ZVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZVByb3AgIT09IHVuZGVmaW5lZCAmJiAhaXNOdW0odmFsdWVQcm9wKSAmJiAhaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVQcm9wID0gcmVzb2x2ZSh2YWx1ZU5hbWUsIHZhbHVlUHJvcCwgbmV3VmFsdWUsIHNjb3BlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBuZXdWYWx1ZVt2YWx1ZU5hbWVdID0gdmFsdWVQcm9wO1xuXG4gICAgICAgICAgICAgICAgLy8gU2V0IGludGVybmFsIHRhcmdldCBpZiB0aGlzIHByb3BlcnR5IGlzICd0bydcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVOYW1lID09PSAndG8nKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnRhcmdldCA9IG5ld1ZhbHVlLnRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBuZXdWYWx1ZS5vcmlnaW4gPSBuZXdWYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgbmV3VmFsdWUuaGFzUmFuZ2UgPSAoaXNOdW0obmV3VmFsdWUubWluKSB8fCBpc051bShuZXdWYWx1ZS5tYXgpKSA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICAgICAgZXhpc3Rpbmdba2V5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgc2NvcGUudXBkYXRlT3JkZXIoa2V5LCB1dGlscy5pc1N0cmluZyhuZXdWYWx1ZS53YXRjaCksIGhhc0NoaWxkcmVuKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0b3IvdmFsdWUtb3BlcmF0aW9ucy5qc1xuICoqLyIsInZhciBSb2xlID0gcmVxdWlyZSgnLi9Sb2xlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFJvbGUoe1xuICAgIGluaXQ6IGZ1bmN0aW9uIChhY3Rvcikge1xuICAgICAgICBpZiAoYWN0b3IuaW5pdCkge1xuICAgICAgICAgICAgYWN0b3IuaW5pdChhY3Rvcik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChhY3Rvcikge1xuICAgICAgICBpZiAoYWN0b3Iub25TdGFydCkge1xuICAgICAgICAgICAgYWN0b3Iub25TdGFydChhY3Rvcik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZnJhbWU6IGZ1bmN0aW9uIChzdGF0ZSwgYWN0b3IpIHtcbiAgICAgICAgaWYgKGFjdG9yLm9uRnJhbWUpIHtcbiAgICAgICAgICAgIGFjdG9yLm9uRnJhbWUoc3RhdGUsIGFjdG9yKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSwgYWN0b3IpIHtcbiAgICAgICAgaWYgKGFjdG9yLm9uVXBkYXRlKSB7XG4gICAgICAgICAgICBhY3Rvci5vblVwZGF0ZShzdGF0ZSwgYWN0b3IpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoYWN0b3IpIHtcbiAgICAgICAgaWYgKGFjdG9yLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgIGFjdG9yLm9uQ29tcGxldGUoYWN0b3IpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvZGVmYXVsdFJvbGUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIC8vIFtudW1iZXJdOiBEZWZhdWx0IG1heCBzaXplIG9mIGhpc3RvcnlcbiAgICBtYXhIaXN0b3J5U2l6ZSA9IDMsXG4gICAgXG4gICAgLypcbiAgICAgICAgSGlzdG9yeSBjb25zdHJ1Y3RvclxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFt2YXJdOiBWYXJpYWJsZSB0byBzdG9yZSBpbiBmaXJzdCBoaXN0b3J5IHNsb3RcbiAgICAgICAgQHBhcmFtIFtpbnRdIChvcHRpb25hbCk6IE1heGltdW0gc2l6ZSBvZiBoaXN0b3J5XG4gICAgKi9cbiAgICBIaXN0b3J5ID0gZnVuY3Rpb24gKG9iaiwgbWF4KSB7XG4gICAgICAgIHRoaXMubWF4ID0gbWF4IHx8IG1heEhpc3RvcnlTaXplO1xuICAgICAgICB0aGlzLmVudHJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGQob2JqKTtcbiAgICB9O1xuICAgIFxuSGlzdG9yeS5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLypcbiAgICAgICAgUHVzaCBuZXcgdmFyIHRvIGhpc3RvcnlcbiAgICAgICAgXG4gICAgICAgIFNoaWZ0IG91dCBvbGRlc3QgZW50cnkgaWYgd2UndmUgcmVhY2hlZCBtYXhpbXVtIGNhcGFjaXR5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3Zhcl06IFZhcmlhYmxlIHRvIHB1c2ggaW50byBoaXN0b3J5LmVudHJpZXNcbiAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIgY3VycmVudFNpemUgPSB0aGlzLmdldFNpemUoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZW50cmllcy5wdXNoKG9iaik7XG4gICAgICAgIFxuICAgICAgICBpZiAoY3VycmVudFNpemUgPj0gdGhpcy5tYXgpIHtcbiAgICAgICAgICAgIHRoaXMuZW50cmllcy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdmFyaWFibGUgYXQgc3BlY2lmaWVkIGluZGV4XG5cbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleFxuICAgICAgICBAcmV0dXJuIFt2YXJdOiBWYXIgZm91bmQgYXQgc3BlY2lmaWVkIGluZGV4XG4gICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGkgPSAodHlwZW9mIGkgPT09ICdudW1iZXInKSA/IGkgOiB0aGlzLmdldFNpemUoKSAtIDE7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllc1tpXTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCB0aGUgc2Vjb25kIG5ld2VzdCBoaXN0b3J5IGVudHJ5XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt2YXJdOiBFbnRyeSBmb3VuZCBhdCBpbmRleCBzaXplIC0gMlxuICAgICovXG4gICAgZ2V0UHJldmlvdXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuZ2V0U2l6ZSgpIC0gMik7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgY3VycmVudCBoaXN0b3J5IHNpemVcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2ludF06IEN1cnJlbnQgbGVuZ3RoIG9mIGVudHJpZXMubGVuZ3RoXG4gICAgKi9cbiAgICBnZXRTaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXMubGVuZ3RoO1xuICAgIH1cbiAgICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGlzdG9yeTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmMvSGlzdG9yeS5qc1xuICoqLyIsImNsYXNzIENvbnRyb2xzIHtcbiAgICBjb25zdHJ1Y3RvcihhY3RvciwgYWN0aW9uLCBoYXNTdGFydGVkKSB7XG4gICAgICAgIHRoaXMuYWN0b3IgPSBhY3RvcjtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgICAgaWYgKGhhc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLmJpbmRBY3Rpb24oKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydChpbnB1dCkge1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5iaW5kQWN0aW9uKCk7XG4gICAgICAgIHRoaXMuYWN0b3Iuc3RhcnQodGhpcy5pZCwgaW5wdXQpO1xuICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmFjdG9yLnVuYmluZEFjdGlvbih0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5hY3Rpb24uZGVhY3RpdmF0ZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLmFjdGlvbi5kZWFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24uYWN0aXZhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICBsZXQgcmVzdW1lID0gdGhpcy5hY3Rvci5oYXNBY3Rpb24odGhpcy5pZCkgPyB0aGlzLnJlc3VtZSA6IHRoaXMuc3RhcnQ7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbi5pc0FjdGl2ZSA/IHRoaXMucGF1c2UoKSA6IHJlc3VtZS5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIHRoZW4oLi4uYXJncykge1xuICAgICAgICB0aGlzLmFjdG9yLnRoZW4oLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJpbmRBY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdG9yLmJpbmRBY3Rpb24odGhpcy5hY3Rpb24sIHRoaXMuaWQpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb250cm9scztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb250cm9scy9Db250cm9scy5qc1xuICoqLyIsIi8qXG4gICAgRWFzaW5nIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgXG4gICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgICAgIFxuICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgICAgICBcbiAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgICAgIFxuICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIEVhc2luZyA9IHJlcXVpcmUoJy4vRWFzaW5nJyksXG4gICAgZWFzaW5nRnVuY3Rpb24sXG4gICAgXG4gICAgLy8gR2VuZXJhdGUgZWFzaW5nIGZ1bmN0aW9uIHdpdGggcHJvdmlkZWQgcG93ZXJcbiAgICBnZW5lcmF0ZVBvd2VyRWFzaW5nID0gZnVuY3Rpb24gKHBvd2VyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgcG93ZXIpO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgICAgICBcbiAgICAgICAgT24gaW5pdCwgd2UgdXNlIEVhc2luZ0Z1bmN0aW9uLm1pcnJvciBhbmQgLnJldmVyc2UgdG8gZ2VuZXJhdGUgZWFzZUluT3V0IGFuZFxuICAgICAgICBlYXNlT3V0IGZ1bmN0aW9ucyByZXNwZWN0aXZlbHkuXG4gICAgKi9cbiAgICBiYXNlRWFzaW5nID0ge1xuICAgICAgICBjaXJjOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHByb2dyZXNzKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGJhY2s6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgdmFyIHN0cmVuZ3RoID0gMS41O1xuXG4gICAgICAgICAgICByZXR1cm4gKHByb2dyZXNzICogcHJvZ3Jlc3MpICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4vLyBHZW5lcmF0ZSBwb3dlciBlYXNpbmcgZWFzaW5nXG5bJ2Vhc2UnLCAnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChlYXNpbmdOYW1lLCBpKSB7XG4gICAgYmFzZUVhc2luZ1tlYXNpbmdOYW1lXSA9IGdlbmVyYXRlUG93ZXJFYXNpbmcoaSArIDIpO1xufSk7XG5cbi8vIEdlbmVyYXRlIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5mb3IgKHZhciBrZXkgaW4gYmFzZUVhc2luZykge1xuICAgIGlmIChiYXNlRWFzaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSBuZXcgRWFzaW5nKGJhc2VFYXNpbmdba2V5XSk7XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luJ10gPSBlYXNpbmdGdW5jdGlvbi5pbjtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnT3V0J10gPSBlYXNpbmdGdW5jdGlvbi5vdXQ7XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luT3V0J10gPSBlYXNpbmdGdW5jdGlvbi5pbk91dDtcbiAgICB9XG59XG5cbi8qXG4gICAgTGluZWFyIGVhc2luZyBhZGp1c3RtZW50XG4gICAgXG4gICAgVGhlIGRlZmF1bHQgZWFzaW5nIG1ldGhvZCwgbm90IGFkZGVkIHdpdGggLmV4dGVuZCBhcyBpdCBoYXMgbm8gT3V0IG9yIEluT3V0XG4gICAgdmFyaWF0aW9uLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMC0xXG4gICAgQHJldHVybiBbbnVtYmVyXTogVW5hZGp1c3RlZCBwcm9ncmVzc1xuKi9cbmJhc2VFYXNpbmcubGluZWFyID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgcmV0dXJuIHByb2dyZXNzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRWFzaW5nO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvdHdlZW4vcHJlc2V0LWVhc2luZy5qc1xuICoqLyIsInZhciBDb250cm9scyA9IHJlcXVpcmUoJy4uLy4uL2NvbnRyb2xzL0NvbnRyb2xzJyk7XG5cbmNsYXNzIFR3ZWVuQ29udHJvbHMgZXh0ZW5kcyBDb250cm9scyB7XG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24ucmVzdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLmFjdGlvbi5yZXZlcnNlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNlZWsocHJvZ3Jlc3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjdG9yLmhhc0FjdGlvbih0aGlzLmlkKSkge1xuICAgICAgICAgICAgdGhpcy5zdGFydCgpLnBhdXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGlvbi5lbGFwc2VkID0gdGhpcy5hY3Rpb24uZHVyYXRpb24gKiBwcm9ncmVzcztcblxuICAgICAgICBpZiAoIXRoaXMuYWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5hY3Rvci5wcm9jZXNzLmZpcmUoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUd2VlbkNvbnRyb2xzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvdHdlZW4vVHdlZW5Db250cm9scy5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgSW5wdXQgPSByZXF1aXJlKCcuL0lucHV0LmpzJyksXG4gICAgY3VycmVudFBvaW50ZXIsIC8vIFNvcnQgdGhpcyBvdXQgZm9yIG11bHRpdG91Y2hcbiAgICBcbiAgICBUT1VDSE1PVkUgPSAndG91Y2htb3ZlJyxcbiAgICBNT1VTRU1PVkUgPSAnbW91c2Vtb3ZlJyxcblxuICAgIC8qXG4gICAgICAgIENvbnZlcnQgZXZlbnQgaW50byBwb2ludFxuICAgICAgICBcbiAgICAgICAgU2NyYXBlIHRoZSB4L3kgY29vcmRpbmF0ZXMgZnJvbSB0aGUgcHJvdmlkZWQgZXZlbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbZXZlbnRdOiBPcmlnaW5hbCBwb2ludGVyIGV2ZW50XG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IFRydWUgaWYgdG91Y2ggZXZlbnRcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogeC95IGNvb3JkaW5hdGVzIG9mIGV2ZW50XG4gICAgKi9cbiAgICBldmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGlzVG91Y2hFdmVudCkge1xuICAgICAgICB2YXIgdG91Y2hDaGFuZ2VkID0gaXNUb3VjaEV2ZW50ID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB0b3VjaENoYW5nZWQgPyB0b3VjaENoYW5nZWQuY2xpZW50WCA6IGV2ZW50LnBhZ2VYLFxuICAgICAgICAgICAgeTogdG91Y2hDaGFuZ2VkID8gdG91Y2hDaGFuZ2VkLmNsaWVudFkgOiBldmVudC5wYWdlWVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGFjdHVhbCBldmVudFxuICAgICAgICBcbiAgICAgICAgQ2hlY2tzIGZvciBqUXVlcnkncyAub3JpZ2luYWxFdmVudCBpZiBwcmVzZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2V2ZW50IHwgalF1ZXJ5IGV2ZW50XVxuICAgICAgICBAcmV0dXJuIFtldmVudF06IFRoZSBhY3R1YWwgSlMgZXZlbnQgIFxuICAgICovXG4gICAgZ2V0QWN0dWFsRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50Lm9yaWdpbmFsRXZlbnQgfHwgZXZlbnQ7XG4gICAgfSxcblxuICAgIFxuICAgIC8qXG4gICAgICAgIFBvaW50ZXIgY29uc3RydWN0b3JcbiAgICAqL1xuICAgIFBvaW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgZXZlbnQgPSBnZXRBY3R1YWxFdmVudChlKSwgLy8gSW4gY2FzZSBvZiBqUXVlcnkgZXZlbnRcbiAgICAgICAgICAgIGlzVG91Y2ggPSAoZXZlbnQudG91Y2hlcykgPyB0cnVlIDogZmFsc2UsXG4gICAgICAgICAgICBzdGFydFBvaW50ID0gZXZlbnRUb1BvaW50KGV2ZW50LCBpc1RvdWNoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudXBkYXRlKHN0YXJ0UG9pbnQpO1xuICAgICAgICB0aGlzLmlzVG91Y2ggPSBpc1RvdWNoO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9LFxuICAgIFxuICAgIHByb3RvID0gUG9pbnRlci5wcm90b3R5cGUgPSBuZXcgSW5wdXQoKTtcblxuLypcbiAgICBCaW5kIG1vdmUgZXZlbnRcbiovXG5wcm90by5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubW92ZUV2ZW50ID0gdGhpcy5pc1RvdWNoID8gVE9VQ0hNT1ZFIDogTU9VU0VNT1ZFO1xuICAgIFxuICAgIGN1cnJlbnRQb2ludGVyID0gdGhpcztcbiAgICBcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgdGhpcy5vbk1vdmUpO1xufTtcblxuLypcbiAgICBVbmJpbmQgbW92ZSBldmVudFxuKi9cbnByb3RvLnVuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgdGhpcy5vbk1vdmUpO1xufTtcblxuLypcbiAgICBQb2ludGVyIG9uTW92ZSBldmVudCBoYW5kbGVyXG4gICAgXG4gICAgQHBhcmFtIFtldmVudF06IFBvaW50ZXIgbW92ZSBldmVudFxuKi9cbnByb3RvLm9uTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIG5ld1BvaW50ID0gZXZlbnRUb1BvaW50KGUsIGN1cnJlbnRQb2ludGVyLmlzVG91Y2gpO1xuICAgIGUgPSBnZXRBY3R1YWxFdmVudChlKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY3VycmVudFBvaW50ZXIudXBkYXRlKG5ld1BvaW50KTtcbn07XG5cbnByb3RvLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbnB1dC9Qb2ludGVyLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi4vLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLFxuICAgIHNwZWVkUGVyRnJhbWUgPSBjYWxjLnNwZWVkUGVyRnJhbWU7XG5cbi8qXG4gICAgQWRkIGNvcmUgcGh5c2ljcyBzaW11bGF0aW9uc1xuKi9cbnZhciBzaW11bGF0aW9ucyA9IHtcbiAgICAvKlxuICAgICAgICBWZWxvY2l0eVxuICAgICAgICBcbiAgICAgICAgVGhlIGRlZmF1bHQgLnJ1bigpIHNpbXVsYXRpb24uXG4gICAgICAgIFxuICAgICAgICBBcHBsaWVzIGFueSBzZXQgZGVjZWxlcmF0aW9uIGFuZCBhY2NlbGVyYXRpb24gdG8gZXhpc3RpbmcgdmVsb2NpdHlcbiAgICAqL1xuICAgIHZlbG9jaXR5OiBmdW5jdGlvbiAodmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHkgLSBzcGVlZFBlckZyYW1lKHZhbHVlLmRlY2VsZXJhdGlvbiwgZHVyYXRpb24pICsgc3BlZWRQZXJGcmFtZSh2YWx1ZS5hY2NlbGVyYXRpb24sIGR1cmF0aW9uKTtcblxuICAgICAgICByZXR1cm4gc2ltdWxhdGlvbnMuZnJpY3Rpb24odmFsdWUsIGR1cmF0aW9uKTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgR2xpZGVcbiAgICAgICAgXG4gICAgICAgIEVtdWxhdGVzIHRvdWNoIGRldmljZSBzY3JvbGxpbmcgZWZmZWN0cyB3aXRoIGV4cG9uZW50aWFsIGRlY2F5XG4gICAgICAgIGh0dHA6Ly9hcml5YS5vZmlsYWJzLmNvbS8yMDEzLzExL2phdmFzY3JpcHQta2luZXRpYy1zY3JvbGxpbmctcGFydC0yLmh0bWxcbiAgICAqL1xuICAgIGdsaWRlOiBmdW5jdGlvbiAodmFsdWUsIGR1cmF0aW9uLCBzdGFydGVkKSB7XG4gICAgICAgIHZhciB0aW1lVW50aWxGaW5pc2hlZCA9IC0gdXRpbHMuY3VycmVudFRpbWUoKSAtIHN0YXJ0ZWQsXG4gICAgICAgICAgICBkZWx0YSA9IC0gdmFsdWUudG8gKiBNYXRoLmV4cCh0aW1lVW50aWxGaW5pc2hlZCAvIHZhbHVlLnRpbWVDb25zdGFudCk7XG5cbiAgICAgICAgcmV0dXJuICh2YWx1ZS50byArIGRlbHRhKSAtIHZhbHVlLmN1cnJlbnQ7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEZyaWN0aW9uXG5cbiAgICAgICAgQXBwbHkgZnJpY3Rpb24gdG8gdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgVE9ETzogTWFrZSB0aGlzIGZyYW1lcmF0ZS1pbmRlcGVuZGVudFxuICAgICovXG4gICAgZnJpY3Rpb246IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIG5ld1ZlbG9jaXR5ID0gc3BlZWRQZXJGcmFtZSh2YWx1ZS52ZWxvY2l0eSwgZHVyYXRpb24pICogKDEgLSB2YWx1ZS5mcmljdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGNhbGMuc3BlZWRQZXJTZWNvbmQobmV3VmVsb2NpdHksIGR1cmF0aW9uKTtcbiAgICB9LFxuXG4gICAgc3ByaW5nOiBmdW5jdGlvbiAodmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IHZhbHVlLnRvIC0gdmFsdWUuY3VycmVudDtcblxuICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZSAqIHNwZWVkUGVyRnJhbWUodmFsdWUuc3ByaW5nLCBkdXJhdGlvbik7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gc2ltdWxhdGlvbnMuZnJpY3Rpb24odmFsdWUsIGR1cmF0aW9uKTtcbiAgICB9LFxuXG4gICAgYm91bmNlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gMCxcbiAgICAgICAgICAgIHRvID0gdmFsdWUudG8sXG4gICAgICAgICAgICBjdXJyZW50ID0gdmFsdWUuY3VycmVudCxcbiAgICAgICAgICAgIGJvdW5jZSA9IHZhbHVlLmJvdW5jZTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHdlJ3JlIHVzaW5nIGdsaWRlIHNpbXVsYXRpb24gd2UgaGF2ZSB0byBmbGlwIG91ciB0YXJnZXQgdG9vXG4gICAgICAgIGlmICh2YWx1ZS5zaW11bGF0ZSA9PT0gJ2dsaWRlJykge1xuICAgICAgICAgICAgZGlzdGFuY2UgPSB0byAtIGN1cnJlbnQ7XG4gICAgICAgICAgICB2YWx1ZS50byA9IGN1cnJlbnQgLSAoZGlzdGFuY2UgKiBib3VuY2UpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdmFsdWUudmVsb2NpdHkgKj0gLSBib3VuY2U7XG4gICAgfSxcblxuICAgIGNhcHR1cmU6IGZ1bmN0aW9uICh2YWx1ZSwgdGFyZ2V0KSB7XG4gICAgICAgIHZhbHVlLnRvID0gdGFyZ2V0O1xuICAgICAgICB2YWx1ZS5zaW11bGF0ZSA9ICdzcHJpbmcnO1xuICAgICAgICB2YWx1ZS5jYXB0dXJlID0gdmFsdWUubWluID0gdmFsdWUubWF4ID0gdW5kZWZpbmVkO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2ltdWxhdGlvbnM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL3NpbXVsYXRlL3NpbXVsYXRpb25zLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB0aGVMb29wID0gcmVxdWlyZSgnLi9sb29wLmpzJyksXG4gICAgUHJvY2Vzc01hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSWRzID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZlUHJvY2Vzc2VzID0ge307XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlID0gW107XG4gICAgICAgIHRoZUxvb3Auc2V0Q2FsbGJhY2sodGhpcywgdGhpcy5maXJlQWN0aXZlKTtcbiAgICB9O1xuICAgIFxuUHJvY2Vzc01hbmFnZXIucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8qXG4gICAgICAgIFtpbnRdOiBVc2VkIGZvciBwcm9jZXNzIElEXG4gICAgKi9cbiAgICBwcm9jZXNzQ291bnRlcjogMCxcbiAgICBcbiAgICAvKlxuICAgICAgICBbaW50XTogTnVtYmVyIG9mIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICAqL1xuICAgIGFjdGl2ZUNvdW50OiAwLFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCB0aGUgcHJvY2VzcyB3aXRoIGEgZ2l2ZW4gaW5kZXhcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogSW5kZXggb2YgcHJvY2Vzc1xuICAgICAgICBAcmV0dXJuIFtQcm9jZXNzXVxuICAgICovXG4gICAgZ2V0UHJvY2VzczogZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlUHJvY2Vzc2VzW2ldO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IG51bWJlciBvZiBhY3RpdmUgcHJvY2Vzc2VzXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBOdW1iZXIgb2YgYWN0aXZlIHByb2Nlc3Nlc1xuICAgICovXG4gICAgZ2V0QWN0aXZlQ291bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQ291bnQ7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgYWN0aXZlIHRva2Vuc1xuXG4gICAgICAgIEByZXR1cm4gW2FycmF5XTogQWN0aXZlIHRva2Vuc1xuICAgICovXG4gICAgZ2V0QWN0aXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUlkcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCB0aGUgbGVuZ3RoIG9mIHRoZSBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBMZW5ndGggb2YgcXVldWVcbiAgICAqL1xuICAgIGdldFF1ZXVlTGVuZ3RoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBGaXJlIGFsbCBhY3RpdmUgcHJvY2Vzc2VzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IFRpbWVzdGFtcCBvZiBleGVjdXRpbmcgZnJhbWVzXG4gICAgICAgIEBwYXJhbSBbaW50XTogVGltZSBzaW5jZSBwcmV2aW91cyBmcmFtZVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBhY3RpdmUgcHJvY2Vzc2VzIGZvdW5kXG4gICAgKi9cbiAgICBmaXJlQWN0aXZlOiBmdW5jdGlvbiAoZnJhbWVzdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB2YXIgcHJvY2VzcyxcbiAgICAgICAgICAgIGFjdGl2ZUNvdW50ID0gMCxcbiAgICAgICAgICAgIGFjdGl2ZUlkcyA9IFtdLFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgLy8gUHVyZ2UgYW5kIGNoZWNrIGFjdGl2ZSBjb3VudCBiZWZvcmUgZXhlY3V0aW9uXG4gICAgICAgIHRoaXMucHVyZ2UoKTtcbiAgICAgICAgYWN0aXZlQ291bnQgPSB0aGlzLmdldEFjdGl2ZUNvdW50KCk7XG4gICAgICAgIGFjdGl2ZUlkcyA9IHRoaXMuZ2V0QWN0aXZlKCk7XG5cbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFjdGl2ZSBwcm9jZXNzZXMgYW5kIGZpcmUgY2FsbGJhY2tcbiAgICAgICAgZm9yICg7IGkgPCBhY3RpdmVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBwcm9jZXNzID0gdGhpcy5nZXRQcm9jZXNzKGFjdGl2ZUlkc1tpXSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5maXJlKGZyYW1lc3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVwdXJnZSBhbmQgcmVjaGVjayBhY3RpdmUgY291bnQgYWZ0ZXIgZXhlY3V0aW9uXG4gICAgICAgIHRoaXMucHVyZ2UoKTtcbiAgICAgICAgYWN0aXZlQ291bnQgPSB0aGlzLmdldEFjdGl2ZUNvdW50KCk7XG5cbiAgICAgICAgLy8gUmV0dXJuIHRydWUgaWYgd2Ugc3RpbGwgaGF2ZSBhY3RpdmUgcHJvY2Vzc2VzLCBvciBmYWxzZSBpZiBub25lXG4gICAgICAgIHJldHVybiBhY3RpdmVDb3VudCA/IHRydWUgOiBmYWxzZTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFJlZ2lzdGVyIGEgbmV3IHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbUHJvY2Vzc11cbiAgICAgICAgQHJldHVybiBbaW50XTogSW5kZXggb2YgcHJvY2VzcyB0byBiZSB1c2VkIGFzIElEXG4gICAgKi9cbiAgICByZWdpc3RlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzQ291bnRlcisrO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQWN0aXZhdGUgYSBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IEluZGV4IG9mIGFjdGl2ZSBwcm9jZXNzXG4gICAgKi9cbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHByb2Nlc3MsIGkpIHtcbiAgICAgICAgdmFyIHF1ZXVlSW5kZXggPSB0aGlzLmRlYWN0aXZhdGVRdWV1ZS5pbmRleE9mKGkpLFxuICAgICAgICAgICAgaXNRdWV1ZWQgPSAocXVldWVJbmRleCA+IC0xKSxcbiAgICAgICAgICAgIGlzQWN0aXZlID0gKHRoaXMuYWN0aXZlSWRzLmluZGV4T2YoaSkgPiAtMSk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGZyb20gZGVhY3RpdmF0ZVF1ZXVlIGlmIGluIHRoZXJlXG4gICAgICAgIGlmIChpc1F1ZXVlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlUXVldWUuc3BsaWNlKHF1ZXVlSW5kZXgsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRvIGFjdGl2ZSBwcm9jZXNzZXMgYXJyYXkgaWYgbm90IGFscmVhZHkgaW4gdGhlcmVcbiAgICAgICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVJZHMucHVzaChpKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlUHJvY2Vzc2VzW2ldID0gcHJvY2VzcztcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ291bnQrKztcbiAgICAgICAgICAgIHRoZUxvb3Auc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRGVhY3RpdmF0ZSBhIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogSW5kZXggb2YgcHJvY2VzcyB0byBhZGQgdG8gZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICovXG4gICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlUXVldWUucHVzaChpKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIFB1cmdlIHRoZSBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgKi9cbiAgICBwdXJnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcXVldWVMZW5ndGggPSB0aGlzLmdldFF1ZXVlTGVuZ3RoKCksXG4gICAgICAgICAgICBhY3RpdmVJZEluZGV4ID0gMCxcbiAgICAgICAgICAgIGlkVG9EZWxldGUgPSAwO1xuXG4gICAgICAgIHdoaWxlIChxdWV1ZUxlbmd0aC0tKSB7XG4gICAgICAgICAgICBpZFRvRGVsZXRlID0gdGhpcy5kZWFjdGl2YXRlUXVldWVbcXVldWVMZW5ndGhdO1xuICAgICAgICAgICAgYWN0aXZlSWRJbmRleCA9IHRoaXMuYWN0aXZlSWRzLmluZGV4T2YoaWRUb0RlbGV0ZSk7XG5cbiAgICAgICAgICAgIC8vIElmIHByb2Nlc3MgaW4gYWN0aXZlIGxpc3QgZGVhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSWRzLnNwbGljZShhY3RpdmVJZEluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUNvdW50LS07XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWN0aXZlUHJvY2Vzc2VzW2lkVG9EZWxldGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuICAgIH1cbiAgICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFByb2Nlc3NNYW5hZ2VyKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvY2Vzcy9tYW5hZ2VyLmpzXG4gKiovIiwiLypcbiAgICBCZXppZXIgZnVuY3Rpb24gZ2VuZXJhdG9yXG4gICAgICAgIFxuICAgIEdhw6t0YW4gUmVuYXVkZWF1J3MgQmV6aWVyRWFzaW5nXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAgIFlvdSdyZSBhIGhlcm9cbiAgICBcbiAgICBVc2VcbiAgICBcbiAgICAgICAgdmFyIGVhc2VPdXQgPSBuZXcgQmV6aWVyKC4xNywuNjcsLjgzLC42NyksXG4gICAgICAgICAgICB4ID0gZWFzZU91dCgwLjUpOyAvLyByZXR1cm5zIDAuNjI3Li4uXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBORVdUT05fSVRFUkFUSU9OUyA9IDgsXG4gICAgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxLFxuICAgIFNVQkRJVklTSU9OX1BSRUNJU0lPTiA9IDAuMDAwMDAwMSxcbiAgICBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwLFxuICAgIEtfU1BMSU5FX1RBQkxFX1NJWkUgPSAxMSxcbiAgICBLX1NBTVBMRV9TVEVQX1NJWkUgPSAxLjAgLyAoS19TUExJTkVfVEFCTEVfU0laRSAtIDEuMCksXG4gICAgRkxPQVRfMzJfU1VQUE9SVEVEID0gKHR5cGVvZiBGbG9hdDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKSxcbiAgICBcbiAgICBhID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgICAgICByZXR1cm4gMS4wIC0gMy4wICogYTIgKyAzLjAgKiBhMTtcbiAgICB9LFxuICAgIFxuICAgIGIgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgICAgIHJldHVybiAzLjAgKiBhMiAtIDYuMCAqIGExO1xuICAgIH0sXG4gICAgXG4gICAgYyA9IGZ1bmN0aW9uIChhMSkge1xuICAgICAgICByZXR1cm4gMy4wICogYTE7XG4gICAgfSxcblxuICAgIGdldFNsb3BlID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgICAgICByZXR1cm4gMy4wICogYShhMSwgYTIpICogdCAqIHQgKyAyLjAgKiBiKGExLCBhMikgKiB0ICsgYyhhMSk7XG4gICAgfSxcblxuICAgIGNhbGNCZXppZXIgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgICAgIHJldHVybiAoKGEoYTEsIGEyKSAqIHQgKyBiKGExLCBhMikpICogdCArIGMoYTEpKSAqIHQ7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBCZXppZXIgY29uc3RydWN0b3JcbiAgICAqL1xuICAgIEJlemllciA9IGZ1bmN0aW9uIChtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcbiAgICAgICAgdmFyIHNhbXBsZVZhbHVlcyA9IEZMT0FUXzMyX1NVUFBPUlRFRCA/IG5ldyBGbG9hdDMyQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSkgOiBuZXcgQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSksXG4gICAgICAgICAgICBfcHJlY29tcHV0ZWQgPSBmYWxzZSxcbiAgICBcbiAgICAgICAgICAgIGJpbmFyeVN1YmRpdmlkZSA9IGZ1bmN0aW9uIChhWCwgYUEsIGFCKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRYLCBjdXJyZW50VCwgaSA9IDA7XG5cbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFBID0gY3VycmVudFQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRUO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgICAgICBuZXd0b25SYXBoc29uSXRlcmF0ZSA9IGZ1bmN0aW9uIChhWCwgYUd1ZXNzVCkge1xuICAgICAgICAgICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNsb3BlID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50WDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgICAgICAgICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2FsY1NhbXBsZVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEtfU1BMSU5FX1RBQkxFX1NJWkU7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBLX1NBTVBMRV9TVEVQX1NJWkUsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGdldFRGb3JYID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgICAgICAgICAgdmFyIGludGVydmFsU3RhcnQgPSAwLjAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTYW1wbGUgPSAxLFxuICAgICAgICAgICAgICAgICAgICBsYXN0U2FtcGxlID0gS19TUExJTkVfVEFCTEVfU0laRSAtIDEsXG4gICAgICAgICAgICAgICAgICAgIGRpc3QgPSAwLjAsXG4gICAgICAgICAgICAgICAgICAgIGd1ZXNzRm9yVCA9IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFNsb3BlID0gMC4wO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGludGVydmFsU3RhcnQgKz0gS19TQU1QTEVfU1RFUF9TSVpFO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAtLWN1cnJlbnRTYW1wbGU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUrMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xuICAgICAgICAgICAgICAgIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICogS19TQU1QTEVfU1RFUF9TSVpFO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIHNsb3BlIGlzIGdyZWF0ZXIgdGhhbiBtaW5cbiAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbFNsb3BlID49IE5FV1RPTl9NSU5fU0xPUEUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQpO1xuICAgICAgICAgICAgICAgIC8vIFNsb3BlIGlzIGVxdWFsIHRvIG1pblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICAgICAgICAgICAgICAvLyBTbG9wZSBpcyBsZXNzIHRoYW4gbWluXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIEtfU0FNUExFX1NURVBfU0laRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJlY29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfcHJlY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChtWDEgIT0gbVkxIHx8IG1YMiAhPSBtWTIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsY1NhbXBsZVZhbHVlcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgR2VuZXJhdGVkIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgUmV0dXJucyB2YWx1ZSAwLTEgYmFzZWQgb24gWFxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGYgPSBmdW5jdGlvbiAoYVgpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmV0dXJuVmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoIV9wcmVjb21wdXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBwcmVjb21wdXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIGxpbmVhciBncmFkaWVudCwgcmV0dXJuIFggYXMgVFxuICAgICAgICAgICAgICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGFYO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBhdCBzdGFydCwgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgYXQgZW5kLCByZXR1cm4gMVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAxO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxjQmV6aWVyKGdldFRGb3JYKGFYKSwgbVkxLCBtWTIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJlemllcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL3R3ZWVuL0Jlemllci5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL3NwbGl0LWNvbW1hLWRlbGltaXRlZC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWJyZWFrLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBwb3NpdGlvblRlcm1zID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeScpLnBvc2l0aW9ucyxcbiAgICBudW1Qb3NpdGlvblRlcm1zID0gcG9zaXRpb25UZXJtcy5sZW5ndGgsXG5cbiAgICBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnLFxuICAgIFNDQUxFID0gJ3NjYWxlJyxcbiAgICBST1RBVEUgPSAncm90YXRlJyxcbiAgICB0ZXJtcyA9IHtcbiAgICAgICAgZnVuY3M6IFsndHJhbnNsYXRlJywgU0NBTEUsIFJPVEFURSwgJ3NrZXcnLCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdLFxuICAgICAgICBwcm9wczoge30gLy8gb2JqZWN0cyBhcmUgZmFzdGVyIGF0IGRpcmVjdCBsb29rdXBzXG4gICAgfTtcblxuLy8gQ3JlYXRlIHRyYW5zZm9ybSB0ZXJtc1xuKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZnVuY3MgPSB0ZXJtcy5mdW5jcyxcbiAgICAgICAgcHJvcHMgPSB0ZXJtcy5wcm9wcyxcbiAgICAgICAgbnVtRnVuY3MgPSBmdW5jcy5sZW5ndGgsXG4gICAgICAgIGkgPSAwLFxuXG4gICAgICAgIGNyZWF0ZVByb3BzID0gZnVuY3Rpb24gKGZ1bmNOYW1lKSB7XG4gICAgICAgICAgICB2YXIgaiA9IDA7XG5cbiAgICAgICAgICAgIGZvciAoOyBqIDwgbnVtUG9zaXRpb25UZXJtczsgaisrKSB7XG4gICAgICAgICAgICAgICAgcHJvcHNbZnVuY05hbWUgKyBwb3NpdGlvblRlcm1zW2pdXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgXG4gICAgLy8gTWFudWFsbHkgYWRkIHNrZXcgYW5kIHRyYW5zZm9ybSBwZXJzcGVjdGl2ZSAgXG4gICAgcHJvcHNbUk9UQVRFXSA9IHByb3BzW1NDQUxFXSA9IHByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuICAgIFxuICAgIC8vIExvb3Agb3ZlciBlYWNoIGZ1bmN0aW9uIG5hbWUgYW5kIGNyZWF0ZSBmdW5jdGlvbi9wcm9wZXJ0eSB0ZXJtc1xuICAgIGZvciAoOyBpIDwgbnVtRnVuY3M7IGkrKykge1xuICAgICAgICBjcmVhdGVQcm9wcyhmdW5jc1tpXSk7XG4gICAgfVxufSkoKTtcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXJtcztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9jc3MvdHJhbnNmb3JtLWRpY3Rpb25hcnkuanNcbiAqKi8iLCJsZXQgQWN0aW9uID0gcmVxdWlyZSgnLi9BY3Rpb24nKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcblxuICAgIFNUUklORyA9ICdzdHJpbmcnLFxuICAgIFxuICAgIC8qXG4gICAgICAgIFRyYW5zbGF0ZSBvdXIgbWFwTGluayB2YWx1ZSBpbnRvIG1hcFRvXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IENhbGN1bGF0ZWQgdmFsdWUgZnJvbSBsaW5rZWQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtWYWx1ZSB8fCBvYmplY3RdOiBMaW5rZWQgdmFsdWUgb3IgZW1wdHkgb2JqZWN0IGlmIHdlJ3JlIGxpbmtpbmcgdG8gaW5wdXRcbiAgICAgICAgQHBhcmFtIFthcnJheV06IExpc3Qgb2YgbnVtYmVycyByZWxhdGluZyB0byBsaW5rZWQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFthcnJheV06IExpc3Qgb2YgbnVtYmVycyByZWxhdGluZyB0byB0aGlzIHZhbHVlXG4gICAgKi9cbiAgICBmaW5kTWFwcGVkVmFsdWUgPSBmdW5jdGlvbiAobmV3VmFsdWUsIGxpbmtlZFZhbHVlLCB0b1ZhbHVlLCBtYXBMaW5rLCBtYXBUbykge1xuICAgICAgICB2YXIgbWFwTGVuZ3RoID0gbWFwTGluay5sZW5ndGgsXG4gICAgICAgICAgICBpID0gMSxcbiAgICAgICAgICAgIGxhc3RMaW5rVmFsdWUsXG4gICAgICAgICAgICB0aGlzTGlua1ZhbHVlLFxuICAgICAgICAgICAgbGFzdFRvVmFsdWUsXG4gICAgICAgICAgICB0aGlzVG9WYWx1ZTtcblxuICAgICAgICBmb3IgKDsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBBc3NpZ24gdmFsdWVzIGZyb20gYXJyYXksIG9yIGlmIHRoZXkncmUgc3RyaW5ncywgbG9vayBmb3IgdGhlbSBpbiBsaW5rZWRWYWx1ZVxuICAgICAgICAgICAgbGFzdExpbmtWYWx1ZSA9ICh0eXBlb2YgbWFwTGlua1tpIC0gMV0gPT09IFNUUklORykgPyBsaW5rZWRWYWx1ZVttYXBMaW5rW2kgLSAxXV0gOiBtYXBMaW5rW2kgLSAxXTtcbiAgICAgICAgICAgIHRoaXNMaW5rVmFsdWUgPSAodHlwZW9mIG1hcExpbmtbaV0gPT09IFNUUklORykgPyBsaW5rZWRWYWx1ZVttYXBMaW5rW2ldXSA6IG1hcExpbmtbaV07XG4gICAgICAgICAgICBsYXN0VG9WYWx1ZSA9ICh0eXBlb2YgbWFwVG9baSAtIDFdID09PSBTVFJJTkcpID8gdG9WYWx1ZVttYXBUb1tpIC0gMV1dIDogbWFwVG9baSAtIDFdO1xuICAgICAgICAgICAgdGhpc1RvVmFsdWUgPSAodHlwZW9mIG1hcFRvW2ldID09PSBTVFJJTkcpID8gdG9WYWx1ZVttYXBUb1tpXV0gOiBtYXBUb1tpXTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UndmUgZ29uZSBwYXN0IG91ciBjYWxjdWxhdGVkIHZhbHVlLCBvciBpZiB3ZSdyZSBhdCB0aGUgZW5kIG9mIHRoZSBhcnJheVxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlIDwgdGhpc0xpbmtWYWx1ZSB8fCBpID09PSBtYXBMZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBjYWxjLnZhbHVlKGNhbGMucmVzdHJpY3RlZChjYWxjLnByb2dyZXNzKG5ld1ZhbHVlLCBsYXN0TGlua1ZhbHVlLCB0aGlzTGlua1ZhbHVlKSwgMCwgMSksIGxhc3RUb1ZhbHVlLCB0aGlzVG9WYWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICB9O1xuXG5jbGFzcyBXYXRjaCBleHRlbmRzIEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUHJvY2VzcyB0aGlzIHZhbHVlXG4gICAgICAgIFxuICAgICAgICBGaXJzdCBjaGVjayBpZiB0aGlzIHZhbHVlIGV4aXN0cyBhcyBhIFZhbHVlLCBpZiBub3RcbiAgICAgICAgY2hlY2sgd2l0aGluIElucHV0IChpZiB3ZSBoYXZlIG9uZSlcbiAgICAgICAgICAgIFxuICAgICAgICBAcGFyYW0gW0FjdG9yXVxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSBvZiBjdXJyZW50IHZhbHVlXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IENhbGN1bGF0ZWQgdmFsdWVcbiAgICAqL1xuICAgIHByb2Nlc3MoYWN0b3IsIHZhbHVlLCBrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IGFjdG9yLnZhbHVlcyxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWUuY3VycmVudCxcbiAgICAgICAgICAgIHdhdGNoZWRLZXkgPSB2YWx1ZS53YXRjaCxcbiAgICAgICAgICAgIHdhdGNoZWRWYWx1ZSA9IHZhbHVlc1t3YXRjaGVkS2V5XSA/IHZhbHVlc1t3YXRjaGVkS2V5XSA6IHt9LFxuICAgICAgICAgICAgaW5wdXRPZmZzZXQgPSB2YWx1ZS5hY3Rpb24gPyB2YWx1ZS5hY3Rpb24uaW5wdXRPZmZzZXQgOiBmYWxzZTtcblxuICAgICAgICAvLyBGaXJzdCBsb29rIGF0IEFjdGlvbiBhbmQgY2hlY2sgdmFsdWUgaXNuJ3QgbGlua2luZyBpdHNlbGZcbiAgICAgICAgaWYgKHdhdGNoZWRWYWx1ZS5jdXJyZW50ICE9PSB1bmRlZmluZWQgJiYga2V5ICE9PSB3YXRjaGVkS2V5KSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHdhdGNoZWRWYWx1ZS5jdXJyZW50O1xuICAgICAgICBcbiAgICAgICAgLy8gVGhlbiBjaGVjayB2YWx1ZXMgaW4gSW5wdXRcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dE9mZnNldCAmJiBpbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eSh3YXRjaGVkS2V5KSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZS5hY3Rpb24ucHJvY2VzcyhhY3RvciwgdmFsdWUsIHdhdGNoZWRLZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBtYXBGcm9tIGFuZCBtYXBUbyBwcm9wZXJ0aWVzLCB0cmFuc2xhdGUgdGhlIG5ldyB2YWx1ZVxuICAgICAgICBpZiAodmFsdWUubWFwRnJvbSAmJiB2YWx1ZS5tYXBUbykge1xuICAgICAgICAgICAgdmFsdWUudW5tYXBwZWQgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gZmluZE1hcHBlZFZhbHVlKG5ld1ZhbHVlLCB3YXRjaGVkVmFsdWUsIHZhbHVlLCB2YWx1ZS5tYXBGcm9tLCB2YWx1ZS5tYXBUbyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdhdGNoO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvV2F0Y2guanNcbiAqKi8iLCIvKlxuICAgIFRoZSBsb29wXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBUaW1lciA9IHJlcXVpcmUoJy4vdGltZXIuanMnKSxcbiAgICB0aWNrID0gcmVxdWlyZSgnLi90aWNrLmpzJyksXG4gICAgTG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50aW1lciA9IG5ldyBUaW1lcigpO1xuICAgIH07XG4gICAgXG5Mb29wLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBbYm9vbGVhbl06IEN1cnJlbnQgc3RhdHVzIG9mIGFuaW1hdGlvbiBsb29wXG4gICAgKi9cbiAgICBpc1J1bm5pbmc6IGZhbHNlLFxuICAgIFxuICAgIC8qXG4gICAgICAgIEZpcmUgYWxsIGFjdGl2ZSBwcm9jZXNzZXMgb25jZSBwZXIgZnJhbWVcbiAgICAqL1xuICAgIGZyYW1lOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmcmFtZXN0YW1wID0gc2VsZi50aW1lci51cGRhdGUoKSwgLy8gQ3VycmVudGx5IGp1c3QgbWVhc3VyaW5nIGluIG1zIC0gd2lsbCBsb29rIGludG8gaGktcmVzIHRpbWVzdGFtcHNcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZSA9IHNlbGYuY2FsbGJhY2suY2FsbChzZWxmLnNjb3BlLCBmcmFtZXN0YW1wLCBzZWxmLnRpbWVyLmdldEVsYXBzZWQoKSk7XG5cbiAgICAgICAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuZnJhbWUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RhcnQgbG9vcFxuICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlJ3JlIG5vdCBhbHJlYWR5IHJ1bm5pbmcgYSBsb29wXG4gICAgICAgIGlmICghdGhpcy5pc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIuY2xvY2soKTtcbiAgICAgICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZnJhbWUoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RvcCB0aGUgbG9vcFxuICAgICovXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU2V0IHRoZSBjYWxsYmFjayB0byBydW4gZXZlcnkgZnJhbWVcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbT2JqZWN0XTogRXhlY3V0aW9uIGNvbnRleHRcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IENhbGxiYWNrIHRvIGZpcmVcbiAgICAqL1xuICAgIHNldENhbGxiYWNrOiBmdW5jdGlvbiAoc2NvcGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cbiBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IExvb3AoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm9jZXNzL2xvb3AuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzLmpzJyksXG5cbiAgICBtYXhFbGFwc2VkID0gMzMsXG4gICAgVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IDE2Ljc7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHV0aWxzLmN1cnJlbnRUaW1lKCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfTtcblxuVGltZXIucHJvdG90eXBlID0ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHV0aWxzLmN1cnJlbnRUaW1lKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IE1hdGgubWluKHRoaXMuY3VycmVudCAtIHRoaXMucHJldiwgbWF4RWxhcHNlZCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgICB9LFxuXG4gICAgZ2V0RWxhcHNlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGFwc2VkO1xuICAgIH0sXG4gICAgXG4gICAgY2xvY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb2Nlc3MvdGltZXIuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgXG4gICAgRm9yIElFOC85IEZsaW5zdG9uZXNcblxuICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICBcbiAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICBcbiAgICBNSVQgbGljZW5zZVxuKi9cbnZhciB0aWNrLFxuICAgIGxhc3RUaW1lID0gMCxcbiAgICBoYXNXaW5kb3cgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpO1xuXG5pZiAoIWhhc1dpbmRvdykge1xuICAgIC8vIExvYWQgckFGIHNoaW1cbiAgICB0aWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKSxcbiAgICAgICAgICAgIGlkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcbiAgICAgICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuXG4gICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH07ICBcbiAgICBcbn0gZWxzZSB7XG4gICAgdGljayA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGljaztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm9jZXNzL3RpY2suanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJwb3Btb3Rpb24uZ2xvYmFsLmpzIn0=