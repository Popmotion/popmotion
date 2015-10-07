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
	    select: __webpack_require__(30),
	
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
	
	var Role = __webpack_require__(24);
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
	
	var Role = __webpack_require__(24);
	var build = __webpack_require__(39);
	var each = __webpack_require__(37).each;
	
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
	
	var Role = __webpack_require__(24),
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
	
	var Role = __webpack_require__(24);
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

	'use strict';
	
	var each = __webpack_require__(37).each,
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
	
	var Process = __webpack_require__(23),
	    Queue = __webpack_require__(45),
	    utils = __webpack_require__(37),
	    select = __webpack_require__(46),
	    update = __webpack_require__(47),
	    valueOps = __webpack_require__(48),
	
	/*
	    Role imports
	*/
	defaultRole = __webpack_require__(49),
	    cssRole = __webpack_require__(16),
	    svgRole = __webpack_require__(17),
	    drawPathRole = __webpack_require__(18),
	    Action = __webpack_require__(26),
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
	                    role.start.call(this);
	                }
	            }
	        }
	
	        // Fire new action onStart
	        if (!action.isActive && action.onStart) {
	            action.onStart();
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

	/*
	    Input controller
	*/
	'use strict';
	
	var calc = __webpack_require__(31),
	    utils = __webpack_require__(37),
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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var calc = __webpack_require__(31),
	    utils = __webpack_require__(37),
	    each = utils.each,
	    Controls = __webpack_require__(51);
	
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(26),
	    calc = __webpack_require__(31),
	    utils = __webpack_require__(37),
	    each = utils.each,
	    presetEasing = __webpack_require__(52),
	    valueOps = __webpack_require__(48),
	    TweenControls = __webpack_require__(53),
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(26),
	    calc = __webpack_require__(31),
	    utils = __webpack_require__(37),
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(26),
	    Pointer = __webpack_require__(55),
	    calc = __webpack_require__(31),
	    each = __webpack_require__(37).each;
	
	function smooth(newOffset, oldOffset, duration, smoothing) {
	    var offset = {};
	
	    each(newOffset, function (key, newValue) {
	        var oldValue = oldOffset[key];
	
	        offset[key] = oldValue + duration * (newValue - oldValue) / smoothing;
	    });
	
	    return offset;
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
	        var newOffset;
	
	        actor.state.input = this.input.onFrame(framestamp);
	
	        newOffset = calc.offset(this.inputOrigin, this.input.current);
	
	        this.inputOffset = actor.smooth && this.inputOffset ? smooth(newOffset, this.inputOffset, frameDuration, actor.smooth) : newOffset;
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
	
	    Track.prototype.hasEnded = function hasEnded() {
	        return false;
	    };
	
	    Track.prototype.bindInput = function bindInput(input) {
	        this.input = !input.current ? new Pointer(input) : input;
	        this.inputOrigin = this.input.get();
	    };
	
	    Track.prototype.getDefaultProps = function getDefaultProps() {
	        return {
	            smooth: 0
	        };
	    };
	
	    Track.prototype.getDefaultValue = function getDefaultValue() {
	        return {
	            amp: 1
	        };
	    };
	
	    return Track;
	})(Action);
	
	module.exports = Track;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Actor = __webpack_require__(20),
	    Iterator = __webpack_require__(22),
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
	            css.transform = transform;
	        }
	
	        cache.transform = transform;
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

	'use strict';
	
	var valueTypeManager = __webpack_require__(19),
	    calc = __webpack_require__(31),
	    utils = __webpack_require__(37),
	    each = utils.each,
	    Action = __webpack_require__(26),
	    defaultAction = new Action(),
	    Watch = __webpack_require__(61),
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
	            action.onFrame.call(actor, values);
	        }
	
	        if (action.onUpdate && hasChanged) {
	            action.onUpdate.call(actor, values);
	        }
	
	        if (action.hasEnded && action.hasEnded(actor, hasChanged) === false) {
	            hasEnded = false;
	        } else {
	            if (action.onComplete) {
	                action.onComplete.call(actor);
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
	            role.frame.call(this, mappedValues);
	        }
	
	        if (role.update && hasChanged) {
	            role.update.call(this, mappedValues);
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
	                    role.complete.call(this);
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var valueTypesManager = __webpack_require__(19),
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
/* 54 */
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
/* 55 */
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
	
	var Action = __webpack_require__(26),
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
	            inputOffset = value.action ? value.action.inputOffset : false;
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTUwMzM4N2VjNDA1MTM3OWUwNWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2FkL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9oc2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcG9zaXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9kaW1lbnNpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9hdHRyL2F0dHJSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvY3NzUm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvc3ZnL3N2Z1JvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci9BY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2l0ZXJhdG9yL0l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL1JvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdHdlZW4vRWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9Ud2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9TaW11bGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9UcmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3NlbGVjdC1hY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2NhbGMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZ2V0LWNvbG9yLXZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGVmYXVsdC1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2Nzcy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2Nzcy90eXBlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9zdmcvdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL3BhdGgvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvUXVldWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9zZWxlY3QtZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL3ZhbHVlLW9wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2RlZmF1bHRSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvSGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbHMvQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdHdlZW4vcHJlc2V0LWVhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi9Ud2VlbkNvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3NpbXVsYXRlL3NpbXVsYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9Qb2ludGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdHdlZW4vQmV6aWVyLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvc3BsaXQtY29tbWEtZGVsaW1pdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tYnJlYWsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2Nzcy90cmFuc2Zvcm0tZGljdGlvbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9XYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9sb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL3RpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL3RpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7OztBQ3RDQSxLQUFJLFNBQVMsR0FBRyxtQkFBTyxDQUFDLENBQWEsQ0FBQztLQUNsQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7QUFFdEIsT0FBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzs7Ozs7O0FBTXpDLE9BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxHQUFHLFlBQVk7QUFDL0IsV0FBTSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7RUFDckIsQzs7Ozs7O0FDWEQsYUFBWSxDQUFDOztBQUViLEtBQUksU0FBUyxHQUFHLG1CQUFPLENBQUMsQ0FBYyxDQUFDLENBQUM7Ozs7O0FBS3hDLFVBQVMsQ0FBQyxZQUFZLENBQUM7QUFDbkIsVUFBSyxFQUFFLG1CQUFPLENBQUMsQ0FBc0IsQ0FBQztBQUN0QyxVQUFLLEVBQUUsbUJBQU8sQ0FBQyxDQUFzQixDQUFDO0FBQ3RDLE9BQUUsRUFBRSxtQkFBTyxDQUFDLENBQW1CLENBQUM7QUFDaEMsUUFBRyxFQUFFLG1CQUFPLENBQUMsQ0FBb0IsQ0FBQztBQUNsQyxRQUFHLEVBQUUsbUJBQU8sQ0FBQyxDQUFvQixDQUFDO0FBQ2xDLFFBQUcsRUFBRSxtQkFBTyxDQUFDLENBQW9CLENBQUM7QUFDbEMsVUFBSyxFQUFFLG1CQUFPLENBQUMsQ0FBc0IsQ0FBQztBQUN0QyxjQUFTLEVBQUUsbUJB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RUFFTCxNQUFNO0FBQ0gsU0FBSSxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztFQUN2Qzs7QUFFRCxPQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDk1MDMzODdlYzQwNTEzNzllMDVmXG4gKiovIiwidmFyIHBvcG1vdGlvbiA9IHJlcXVpcmUoJy4vbW9kdWxlLmpzJyksXG4gICAgVUlyZWYgPSB3aW5kb3cudWk7XG5cbndpbmRvdy51aSA9IHdpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247XG5cbi8qXG4gICAgSWYgbm9Db25mbGljdCBpcyBydW4sIHRoZSBvcmlnaW5hbCByZWZlcmVuY2UgdG8gd2luZG93LlVJIGlzXG4gICAgcmVzdG9yZWQgYW5kIFBvcG1vdGlvbiBpcyBsb2FkZWQgdG8gd2luZG93LlBvcG1vdGlvblxuKi9cbndpbmRvdy51aS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy51aSA9IFVJcmVmO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9sb2FkL2dsb2JhbC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcG9wbW90aW9uID0gcmVxdWlyZSgnLi4vcG9wbW90aW9uJyk7XG5cbi8qXG4gICAgQWRkIG9wdGlvbmFsIGN1c3RvbSB2YWx1ZSB0eXBlIHN1cHBvcnRcbiovXG5wb3Btb3Rpb24uYWRkVmFsdWVUeXBlKHtcbiAgICBhbHBoYTogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvYWxwaGEnKSxcbiAgICBhbmdsZTogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvYW5nbGUnKSxcbiAgICBweDogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvcHgnKSxcbiAgICBoc2w6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2hzbCcpLFxuICAgIHJnYjogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvcmdiJyksXG4gICAgaGV4OiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9oZXgnKSxcbiAgICBjb2xvcjogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvY29sb3InKSxcbiAgICBwb3NpdGlvbnM6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucycpLFxuICAgIGRpbWVuc2lvbnM6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2RpbWVuc2lvbnMnKSxcbiAgICBzY2FsZTogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvc2NhbGUnKSxcbiAgICBzaGFkb3c6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3NoYWRvdycpLFxuICAgIGNvbXBsZXg6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnKVxufSk7XG5cbi8qXG4gICAgUHJlZGVmaW5lZCByb2xlc1xuKi9cblxucG9wbW90aW9uLmF0dHIgPSByZXF1aXJlKCcuLi9yb2xlcy9hdHRyL2F0dHJSb2xlJyk7XG5wb3Btb3Rpb24uY3NzID0gcmVxdWlyZSgnLi4vcm9sZXMvY3NzL2Nzc1JvbGUnKTtcbnBvcG1vdGlvbi5zdmcgPSByZXF1aXJlKCcuLi9yb2xlcy9zdmcvc3ZnUm9sZScpO1xucG9wbW90aW9uLmRyYXdQYXRoID0gcmVxdWlyZSgnLi4vcm9sZXMvcGF0aC9kcmF3UGF0aFJvbGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwb3Btb3Rpb247XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbG9hZC9tb2R1bGUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHZhbHVlVHlwZU1hbmFnZXIgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL21hbmFnZXInKSxcblxuICAgIFBvcG1vdGlvbiA9IHtcblxuICAgICAgICBBY3RvcjogcmVxdWlyZSgnLi9hY3Rvci9BY3RvcicpLFxuXG4gICAgICAgIElucHV0OiByZXF1aXJlKCcuL2lucHV0L0lucHV0JyksXG5cbiAgICAgICAgSXRlcmF0b3I6IHJlcXVpcmUoJy4vaXRlcmF0b3IvSXRlcmF0b3InKSxcblxuICAgICAgICBQcm9jZXNzOiByZXF1aXJlKCcuL3Byb2Nlc3MvUHJvY2VzcycpLFxuXG4gICAgICAgIEVhc2luZzogcmVxdWlyZSgnLi9hY3Rpb25zL3R3ZWVuL0Vhc2luZycpLFxuXG4gICAgICAgIFJvbGU6IHJlcXVpcmUoJy4vcm9sZXMvUm9sZScpLFxuXG4gICAgICAgIEFjdGlvbjogcmVxdWlyZSgnLi9hY3Rpb25zL0FjdGlvbicpLFxuICAgICAgICBUd2VlbjogcmVxdWlyZSgnLi9hY3Rpb25zL1R3ZWVuJyksXG4gICAgICAgIFNpbXVsYXRlOiByZXF1aXJlKCcuL2FjdGlvbnMvU2ltdWxhdGUnKSxcbiAgICAgICAgVHJhY2s6IHJlcXVpcmUoJy4vYWN0aW9ucy9UcmFjaycpLFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDcmVhdGUgYW4gSXRlcmF0b3Igb2YgQWN0b3JzIHdpdGggc2VsZWN0ZWQgZG9tIGVsZW1lbnRzXG4gICAgICAgICovXG4gICAgICAgIHNlbGVjdDogcmVxdWlyZSgnLi9pbmMvc2VsZWN0LWFjdG9yJyksXG5cbiAgICAgICAgYWRkVmFsdWVUeXBlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YWx1ZVR5cGVNYW5hZ2VyLmV4dGVuZC5hcHBseSh2YWx1ZVR5cGVNYW5hZ2VyLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FsYzogcmVxdWlyZSgnLi9pbmMvY2FsYycpXG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBQb3Btb3Rpb247XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcG9wbW90aW9uLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiAxXG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAnZGVnJ1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYW5nbGUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ3B4J1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcHguanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBnZXRDb2xvclZhbHVlcyA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2dldC1jb2xvci12YWx1ZXMnKSxcbiAgICBmdW5jdGlvbkNyZWF0ZSA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWNyZWF0ZScpLFxuICAgIGRlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JykuaHNsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBIdWU6IHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMzYwXG4gICAgICAgIH0sXG4gICAgICAgIFNhdHVyYXRpb246IGRlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgICAgICBMaWdodG5lc3M6IGRlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgICAgICBBbHBoYTogZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZignaHNsJykgPiAtMSk7XG4gICAgfSxcbiAgICBcbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBnZXRDb2xvclZhbHVlcyh2YWx1ZSwgdGVybXMpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbkNyZWF0ZShjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCB0ZXJtcywgJywgJywgMiksICdoc2xhJyk7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oc2wuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBnZXRDb2xvclZhbHVlcyA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2dldC1jb2xvci12YWx1ZXMnKSxcbiAgICBmdW5jdGlvbkNyZWF0ZSA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2Z1bmN0aW9uLWNyZWF0ZScpLFxuICAgIGRlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpLFxuICAgIGNvbG9yRGVmYXVsdHMgPSBkZWZhdWx0UHJvcHMuY29sb3IsXG4gICAgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5jb2xvcnM7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIFJlZDogY29sb3JEZWZhdWx0cyxcbiAgICAgICAgR3JlZW46IGNvbG9yRGVmYXVsdHMsXG4gICAgICAgIEJsdWU6IGNvbG9yRGVmYXVsdHMsXG4gICAgICAgIEFscGhhOiBkZWZhdWx0UHJvcHMub3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdyZ2InKSA+IC0xKTtcbiAgICB9LFxuICAgIFxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGdldENvbG9yVmFsdWVzKHZhbHVlLCB0ZXJtcyk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uQ3JlYXRlKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnLCAnLCAyKSwgJ3JnYmEnKTtcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHJnYi5kZWZhdWx0UHJvcHMsXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCcjJykgPiAtMSk7XG4gICAgfSxcbiAgICBcbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByLCBnLCBiO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDIpO1xuICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigzLCAyKTtcbiAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoNSwgMik7XG5cbiAgICAgICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMSk7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDIsIDEpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cigzLCAxKTtcbiAgICAgICAgICAgIHIgKz0gcjtcbiAgICAgICAgICAgIGcgKz0gZztcbiAgICAgICAgICAgIGIgKz0gYjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBSZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICAgICAgICAgIEdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgICAgICAgICBCbHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgICAgICAgICBBbHBoYTogMVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiByZ2IuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIHJnYiA9IHJlcXVpcmUoJy4vcmdiJyksXG4gICAgaHNsID0gcmVxdWlyZSgnLi9oc2wnKSxcbiAgICBoZXggPSByZXF1aXJlKCcuL2hleCcpLFxuICAgIHN1cHBvcnRlZCA9IFtyZ2IsIGhzbCwgaGV4XSxcbiAgICBudW1TdXBwb3J0ZWQgPSAzLFxuXG4gICAgcnVuU3VwcG9ydGVkID0gZnVuY3Rpb24gKG1ldGhvZCwgdmFsdWUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1TdXBwb3J0ZWQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKHN1cHBvcnRlZFtpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdXBwb3J0ZWRbaV1bbWV0aG9kXSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogdXRpbHMubWVyZ2UocmdiLmRlZmF1bHRQcm9wcywgaHNsLmRlZmF1bHRQcm9wcyksXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHJnYi50ZXN0KHZhbHVlKSB8fCBoZXgudGVzdCh2YWx1ZSkgfHwgaHNsLnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBydW5TdXBwb3J0ZWQoJ3NwbGl0JywgdmFsdWUpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAodmFsdWVzLlJlZCAhPT0gdW5kZWZpbmVkKSA/IHJnYi5jb21iaW5lKHZhbHVlcykgOiBoc2wuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBweERlZmF1bHRzID0gcmVxdWlyZSgnLi9weCcpLmRlZmF1bHRQcm9wcyxcbiAgICBzcGxpdFNwYWNlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkJyksXG4gICAgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5wb3NpdGlvbnM7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiBweERlZmF1bHRzLFxuICAgICAgICBcbiAgICAvKlxuICAgICAgICBTcGxpdCBwb3NpdGlvbnMgaW4gZm9ybWF0IFwiWCBZIFpcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQb3NpdGlvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjAlIDMwJSAwXCIgLT4gezIwJSwgMzAlLCAwfVxuICAgICAgICAgICAgXCIyMCUgMzAlXCIgLT4gezIwJSwgMzAlfVxuICAgICAgICAgICAgXCIyMCVcIiAtPiB7MjAlLCAyMCV9XG4gICAgKi9cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbnMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKSxcbiAgICAgICAgICAgIG51bVBvc2l0aW9ucyA9IHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgICBzcGxpdFZhbHVlID0ge1xuICAgICAgICAgICAgICAgIFg6IHBvc2l0aW9uc1swXSxcbiAgICAgICAgICAgICAgICBZOiAobnVtUG9zaXRpb25zID4gMSkgPyBwb3NpdGlvbnNbMV0gOiBwb3NpdGlvbnNbMF1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgaWYgKG51bVBvc2l0aW9ucyA+IDIpIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWUuWiA9IHBvc2l0aW9uc1syXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCB0ZXJtcywgJyAnKTtcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucy5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5kaW1lbnNpb25zLFxuICAgIHB4RGVmYXVsdHMgPSByZXF1aXJlKCcuL3B4JykuZGVmYXVsdFByb3BzLFxuICAgIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBzcGxpdFNwYWNlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiBweERlZmF1bHRzLFxuICAgIFxuICAgIC8qXG4gICAgICAgIFNwbGl0IGRpbWVuc2lvbnMgaW4gZm9ybWF0IFwiVG9wIFJpZ2h0IEJvdHRvbSBMZWZ0XCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogRGltZW5zaW9uIHZhbHVlc1xuICAgICAgICAgICAgXCIyMHB4IDAgMzBweCA0MHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDQwcHh9XG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHggMFwiIC0+IHsyMHB4LCAwLCAyMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4XCIgLT4gezIwcHgsIDIwcHgsIDIwcHgsIDIwcHh9XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCBUL1IvQi9MIG1ldHJpY3NcbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGRpbWVuc2lvbnMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKSxcbiAgICAgICAgICAgIG51bURpbWVuc2lvbnMgPSBkaW1lbnNpb25zLmxlbmd0aCxcbiAgICAgICAgICAgIGp1bXBCYWNrID0gKG51bURpbWVuc2lvbnMgIT09IDEpID8gMiA6IDEsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGogPSAwLFxuICAgICAgICAgICAgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGZvciAoOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlW3Rlcm1zW2ldXSA9IGRpbWVuc2lvbnNbal07XG5cbiAgICAgICAgICAgIC8vIEp1bXAgYmFjayAodG8gc3RhcnQpIGNvdW50ZXIgaWYgd2UndmUgcmVhY2hlZCB0aGUgZW5kIG9mIG91ciB2YWx1ZXNcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIGogPSAoaiA9PT0gbnVtRGltZW5zaW9ucykgPyBqIC0ganVtcEJhY2sgOiBqO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnICcpO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvZGltZW5zaW9ucy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBpbml0OiAxXG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY29sb3IgPSByZXF1aXJlKCcuL2NvbG9yJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBweERlZmF1bHRzID0gcmVxdWlyZSgnLi9weCcpLmRlZmF1bHRQcm9wcyxcbiAgICB0ZXJtcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpLnNoYWRvdyxcbiAgICBzcGxpdFNwYWNlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkJyksXG4gICAgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIHNoYWRvd1Rlcm1zID0gdGVybXMuc2xpY2UoMCw0KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHV0aWxzLm1lcmdlKGNvbG9yLmRlZmF1bHRQcm9wcywge1xuICAgICAgICBYOiBweERlZmF1bHRzLFxuICAgICAgICBZOiBweERlZmF1bHRzLFxuICAgICAgICBSYWRpdXM6IHB4RGVmYXVsdHMsXG4gICAgICAgIFNwcmVhZDogcHhEZWZhdWx0c1xuICAgIH0pLFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgc2hhZG93IHByb3BlcnRpZXMgXCJYIFkgUmFkaXVzIFNwcmVhZCBDb2xvclwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFNoYWRvdyBwcm9wZXJ0eVxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBiaXRzID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSksXG4gICAgICAgICAgICBudW1CaXRzID0gYml0cy5sZW5ndGgsXG4gICAgICAgICAgICBoYXNSZWFjaGVkQ29sb3IgPSBmYWxzZSxcbiAgICAgICAgICAgIGNvbG9yUHJvcCA9ICcnLFxuICAgICAgICAgICAgdGhpc0JpdCxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnVtQml0czsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzQml0ID0gYml0c1tpXTtcblxuICAgICAgICAgICAgLy8gSWYgd2UndmUgcmVhY2hlZCB0aGUgY29sb3IgcHJvcGVydHksIGFwcGVuZCB0byBjb2xvciBzdHJpbmdcbiAgICAgICAgICAgIGlmIChoYXNSZWFjaGVkQ29sb3IgfHwgY29sb3IudGVzdCh0aGlzQml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IHRoaXNCaXQ7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3BsaXRWYWx1ZVt0ZXJtc1tpXV0gPSB0aGlzQml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoc3BsaXRWYWx1ZSwgY29sb3Iuc3BsaXQoY29sb3JQcm9wKSk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHNoYWRvd1Rlcm1zLCAnICcpICsgY29sb3IuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzXG4gKiovIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgZWFjaCA9IHV0aWxzLmVhY2gsXG4gICAgZmxvYXRSZWdleCA9IC8oLSk/KFxcZFtcXGRcXC5dKikvZyxcblxuICAgIGdlbmVyYXRlVG9rZW4gPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiAnJHsnICsga2V5ICsgJ30nO1xuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKGZsb2F0UmVnZXgpO1xuICAgICAgICByZXR1cm4gKHV0aWxzLmlzQXJyYXkobWF0Y2hlcykgJiYgbWF0Y2hlcy5sZW5ndGggPiAxKTtcbiAgICB9LFxuXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKGZsb2F0UmVnZXgsICgpID0+IGdlbmVyYXRlVG9rZW4oY291bnRlcisrKSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fSxcbiAgICAgICAgICAgIG1hdGNoZXMgPSB2YWx1ZS5tYXRjaChmbG9hdFJlZ2V4KSxcbiAgICAgICAgICAgIG51bU1hdGNoZXMgPSBtYXRjaGVzLmxlbmd0aDtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTWF0Y2hlczsgaSsrKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlW2ldID0gbWF0Y2hlc1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzLCB0ZW1wbGF0ZSkge1xuICAgICAgICB2YXIgY29tYmluZWRWYWx1ZSA9IHRlbXBsYXRlO1xuXG4gICAgICAgIGVhY2godmFsdWVzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29tYmluZWRWYWx1ZSA9IGNvbWJpbmVkVmFsdWUucmVwbGFjZShnZW5lcmF0ZVRva2VuKGtleSksIHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbWJpbmVkVmFsdWU7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSb2xlID0gcmVxdWlyZSgnLi4vUm9sZScpO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoO1xuXG52YXIgYXR0clJvbGUgPSBuZXcgUm9sZSh7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIGFjdG9yID0gdGhpcztcblxuICAgICAgICBlYWNoKHN0YXRlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgYXR0clJvbGUuc2V0KGFjdG9yLmVsZW1lbnQsIGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZ2V0OiBmdW5jdGlvbiAoZWxlbWVudCwga2V5KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uIChlbGVtZW50LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF0dHJSb2xlO1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9hdHRyL2F0dHJSb2xlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSb2xlID0gcmVxdWlyZSgnLi4vUm9sZScpO1xudmFyIGJ1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpO1xudmFyIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoO1xuXG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsJ01veicsJ08nLCdtcycsICcnXTtcbnZhciBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbnZhciBwcm9wZXJ0eU5hbWVDYWNoZSA9IHt9O1xudmFyIHRlc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIFxuLypcbiAgICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICAgIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChwcm9wZXJ0eU5hbWVDYWNoZVtrZXldID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvcGVydHlOYW1lQ2FjaGVba2V5XSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV0sXG4gICAgICAgICAgICAgICAgcHJlZml4ZWQgPSAocHJlZml4ID09PSAnJykgPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICAgICAgICAgIGlmIChwcmVmaXhlZCBpbiB0ZXN0RWxlbWVudC5zdHlsZSkge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZUNhY2hlW2tleV0gPSBwcmVmaXhlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5TmFtZUNhY2hlW2tleV07XG4gICAgfTtcblxudmFyIGNzc1JvbGUgPSBuZXcgUm9sZSh7XG4gICAgX21hcDogcmVxdWlyZSgnLi9tYXAnKSxcbiAgICBfdHlwZU1hcDogcmVxdWlyZSgnLi90eXBlLW1hcCcpLFxuXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9jc3NDYWNoZSA9IHt9O1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzO1xuXG4gICAgICAgIGVhY2goYnVpbGQoc3RhdGUsIGFjdG9yLl9jc3NDYWNoZSksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBjc3NSb2xlLnNldChhY3Rvci5lbGVtZW50LCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGdldDogZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICAgICAgICBrZXkgPSBwcm9wZXJ0eU5hbWVDYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTtcblxuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClba2V5XTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzZXQ6IGZ1bmN0aW9uIChlbGVtZW50LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGtleSA9IHByb3BlcnR5TmFtZUNhY2hlW2tleV0gfHwgdGVzdFByZWZpeChrZXkpO1xuXG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjc3NSb2xlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL2Nzcy9jc3NSb2xlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBSb2xlID0gcmVxdWlyZSgnLi4vUm9sZScpLFxuICAgIGF0dHJSb2xlID0gcmVxdWlyZSgnLi4vYXR0ci9hdHRyUm9sZScpLFxuICAgIGJ1aWxkID0gcmVxdWlyZSgnLi9idWlsZCcpLFxuICAgIGVhY2ggPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKS5lYWNoO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBSb2xlKHtcbiAgICBuYW1lOiAnc3ZnJyxcblxuICAgIF9tYXA6IHJlcXVpcmUoJy4uL2Nzcy9tYXAnKSxcbiAgICBfdHlwZU1hcDogcmVxdWlyZSgnLi90eXBlLW1hcCcpLFxuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJvdW5kaW5nQm94ID0gdGhpcy5lbGVtZW50LmdldEJCb3goKSxcbiAgICAgICAgICAgIHZhbHVlcyA9IHRoaXMudmFsdWVzLFxuICAgICAgICAgICAgLy8gVE9ETzogU3VwcG9ydCBweFxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luWCA9IHZhbHVlcy50cmFuc2Zvcm1PcmlnaW5YID8gdmFsdWVzLnRyYW5zZm9ybU9yaWdpblguY3VycmVudCA6IDUwLFxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luWSA9IHZhbHVlcy50cmFuc2Zvcm1PcmlnaW5ZID8gdmFsdWVzLnRyYW5zZm9ybU9yaWdpblkuY3VycmVudCA6IDUwLFxuICAgICAgICAgICAgb3JpZ2luID0ge1xuICAgICAgICAgICAgICAgIHg6IGJvdW5kaW5nQm94LndpZHRoICogKHRyYW5zZm9ybU9yaWdpblggLyAxMDApICsgYm91bmRpbmdCb3gueCxcbiAgICAgICAgICAgICAgICB5OiBib3VuZGluZ0JveC5oZWlnaHQgKiAodHJhbnNmb3JtT3JpZ2luWSAvIDEwMCkgKyBib3VuZGluZ0JveC55XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3ZnT3JpZ2luID0gb3JpZ2luO1xuICAgIH0sXG5cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzO1xuICAgICAgICBlYWNoKGJ1aWxkKHN0YXRlLCB0aGlzLnN2Z09yaWdpbiksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBhdHRyUm9sZS5zZXQoYWN0b3IuZWxlbWVudCwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvc3ZnL3N2Z1JvbGUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJvbGUgPSByZXF1aXJlKCcuLi9Sb2xlJyk7XG52YXIgYXR0clJvbGUgPSByZXF1aXJlKCcuLi9hdHRyL2F0dHJSb2xlJyk7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2g7XG5cbi8qXG4gICAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgICBAcGFyYW0gW251bWJlcl06IFRvdGFsIGxlbmd0aFxuKi9cbnZhciBwZXJjZW50VG9QaXhlbHMgPSBmdW5jdGlvbiAocGVyY2VudGFnZSwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIChwYXJzZUZsb2F0KHBlcmNlbnRhZ2UpIC8gMTAwKSAqIGxlbmd0aCArICdweCc7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBzdHlsZXNcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IFNWRyBQYXRoIHByb3BlcnRpZXNcbiAgICBAcGFyYW0gW29iamVjdF06IExlbmd0aCBvZiBwYXRoXG4gICAgQHJldHVybnMgW29iamVjdF06IEtleS92YWx1ZSBwYWlycyBvZiB2YWxpZCBDU1MgcHJvcGVydGllc1xuKi9cbnZhciBjcmVhdGVTdHlsZXMgPSBmdW5jdGlvbiAocHJvcHMsIGxlbmd0aCkge1xuICAgIHZhciBoYXNEYXNoQXJyYXkgPSBmYWxzZSxcbiAgICAgICAgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgICAgICAgICAgbGVuZ3RoOiAwLFxuICAgICAgICAgICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZXMgPSB7fTtcblxuICAgIGVhY2gocHJvcHMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGtleSA9IFNWR0RyYXdQYXRoLl9tYXBba2V5XSB8fCBrZXk7XG5cbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNob2Zmc2V0J10gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG59O1xuXG4vKlxuICAgIERyYXcgUGF0aCByb2xlXG4qL1xudmFyIFNWR0RyYXdQYXRoID0gbmV3IFJvbGUoe1xuICAgIF9tYXA6IHJlcXVpcmUoJy4vbWFwJyksXG5cbiAgICBfdHlwZU1hcDoge1xuICAgICAgICBzdHJva2U6ICdjb2xvcicsXG4gICAgICAgIGQ6ICdjb21wbGV4J1xuICAgIH0sXG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGF0aExlbmd0aCA9IHRoaXMuZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBVcGRhdGUgYHBhdGhgIHN0eWxlcyBhbmQgaWYgYGVsZW1lbnRgIGlzIHByZXNlbnQsIHNldFxuICAgICAgICB4LCB5IGFuZCByb3RhdGlvblxuICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgYXR0clJvbGUudXBkYXRlLmNhbGwodGhpcywgY3JlYXRlU3R5bGVzKHN0YXRlLCB0aGlzLnBhdGhMZW5ndGgpKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTVkdEcmF3UGF0aDtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9wYXRoL2RyYXdQYXRoUm9sZS5qc1xuICoqLyIsInZhciBlYWNoID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJykuZWFjaCxcblxuICAgIFZhbHVlVHlwZU1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7fTtcblxuVmFsdWVUeXBlTWFuYWdlci5wcm90b3R5cGUgPSB7XG4gICAgZXh0ZW5kOiBmdW5jdGlvbiAobmFtZSwgbW9kKSB7XG4gICAgICAgIHZhciBtdWx0aU1vZHMgPSAodHlwZW9mIG5hbWUgPT0gJ29iamVjdCcpLFxuICAgICAgICAgICAgbW9kcyA9IG11bHRpTW9kcyA/IG5hbWUgOiB7fTtcblxuICAgICAgICAvLyBJZiB3ZSBqdXN0IGhhdmUgb25lIG1vZHVsZSwgY29lcmNlXG4gICAgICAgIGlmICghbXVsdGlNb2RzKSB7XG4gICAgICAgICAgICBtb2RzW25hbWVdID0gbW9kO1xuICAgICAgICB9XG5cbiAgICAgICAgZWFjaChtb2RzLCAoa2V5LCB0aGlzTW9kKSA9PiB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzTW9kO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZGVmYXVsdFByb3BzOiBmdW5jdGlvbiAodHlwZSwga2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZVR5cGUgPSB0aGlzW3R5cGVdLFxuICAgICAgICAgICAgZGVmYXVsdFByb3BzID0gKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpID8gdmFsdWVUeXBlLmRlZmF1bHRQcm9wc1trZXldIHx8IHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMgOiB7fTtcblxuICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBmYWxzZTtcblxuICAgICAgICBlYWNoKHRoaXMsIGZ1bmN0aW9uIChrZXksIG1vZCkge1xuICAgICAgICAgICAgaWYgKG1vZC50ZXN0ICYmIG1vZC50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFZhbHVlVHlwZU1hbmFnZXIoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmFnZXIuanNcbiAqKi8iLCJ2YXIgUHJvY2VzcyA9IHJlcXVpcmUoJy4uL3Byb2Nlc3MvUHJvY2VzcycpLFxuICAgIFF1ZXVlID0gcmVxdWlyZSgnLi4vaW5jL1F1ZXVlJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBzZWxlY3QgPSByZXF1aXJlKCcuLi9pbmMvc2VsZWN0LWRvbScpLFxuICAgIHVwZGF0ZSA9IHJlcXVpcmUoJy4vdXBkYXRlJyksXG4gICAgdmFsdWVPcHMgPSByZXF1aXJlKCcuL3ZhbHVlLW9wZXJhdGlvbnMnKSxcblxuICAgIC8qXG4gICAgICAgIFJvbGUgaW1wb3J0c1xuICAgICovXG4gICAgZGVmYXVsdFJvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9kZWZhdWx0Um9sZScpLFxuICAgIGNzc1JvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9jc3MvY3NzUm9sZScpLFxuICAgIHN2Z1JvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9zdmcvc3ZnUm9sZScpLFxuICAgIGRyYXdQYXRoUm9sZSA9IHJlcXVpcmUoJy4uL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlJyksXG5cbiAgICBBY3Rpb24gPSByZXF1aXJlKCcuLi9hY3Rpb25zL0FjdGlvbicpLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoO1xuXG5jbGFzcyBBY3RvciB7XG5cbiAgICAvKlxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgICAgICB2YXIgcHJvcHMgPSB1dGlscy5pc1N0cmluZyhvcHRzKSA/IHsgZWxlbWVudDogb3B0cyB9IDogb3B0cztcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlID0geyB2YWx1ZXM6IHt9IH07XG4gICAgICAgIHRoaXMucXVldWUgPSBuZXcgUXVldWUoKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzID0gbmV3IFByb2Nlc3ModGhpcywgdXBkYXRlKTtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMubnVtQWN0aXZlID0gMDtcbiAgICAgICAgdGhpcy5hY3Rpb25Db3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5hY3RpdmVWYWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVQYXJlbnRzID0gW107XG5cbiAgICAgICAgLy8gR2V0IGFjdHVhbCBlbGVtZW50cyBpZiB0aGlzIGlzIGEgc2VsZWN0b3JcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHByb3BzLmVsZW1lbnQpKSB7XG4gICAgICAgICAgICBwcm9wcy5lbGVtZW50ID0gc2VsZWN0KHByb3BzLmVsZW1lbnQpWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hc3NpZ25Sb2xlcyhwcm9wcy5lbGVtZW50LCBwcm9wcy5hcywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0KHByb3BzKTtcbiAgICAgICAgdGhpcy5pbml0Um9sZXMoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTZXQgQWN0b3IgcHJvcGVydGllcyBhbmQgdmFsdWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHNldChvcHRzKSB7XG4gICAgICAgIGVhY2gob3B0cywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgIT09ICd2YWx1ZXMnICYmIGtleSAhPT0gJ2FjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG9wdHMgJiYgb3B0cy52YWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVPcHMucHJvY2Vzcyh0aGlzLnZhbHVlcywgb3B0cy52YWx1ZXMsIG9wdHMsICdjdXJyZW50JywgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBhbGwgYWN0aXZlIGFjdGlvbnMgZm9yIGFueSB0aGF0IGNhbiBiZSByZW1vdmVkXG4gICAgICAgIGVhY2godGhpcy5hY3RpdmVBY3Rpb25zLCAoaWQsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgbGV0IGFjdGlvbklzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGVhY2godGhpcy52YWx1ZXMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uSXNBY3RpdmUgPSAodmFsdWUuYWN0aW9uID09PSBhY3Rpb24pID8gdHJ1ZSA6IGFjdGlvbklzQWN0aXZlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghYWN0aW9uSXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuYmluZEFjdGlvbihpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEJpbmQgQWN0aW9uLXNwZWNpZmljIGNvbnRyb2xzIHRvIEFjdG9yXG5cbiAgICAgICAgQHJldHVybnMgW0NvbnRyb2xzXVxuICAgICovXG4gICAgY29udHJvbHMoYWN0aW9uKSB7XG4gICAgICAgIHZhciBDb250cm9scyA9IGFjdGlvbi5nZXRDb250cm9scygpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnRyb2xzKHRoaXMsIGFjdGlvbi5nZXRQbGF5YWJsZSgpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBhIG5ldyBBY3Rpb25cblxuICAgICAgICBAcGFyYW0gW0FjdGlvbiB8fCBudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbSW5wdXQgfHwgZXZlbnRdIChvcHRpb25hbClcbiAgICAgICAgQHBhcmFtIFtib29sZWFuXSAob3B0aW9uYWwpOiBkZWZpbmVkIGB0cnVlYCBpZiB3ZSBzdXJwcmVzcyBtYWtpbmcgbmV3IHF1ZXVlXG4gICAgICAgIEByZXR1cm5zIFtDb250cm9sc11cbiAgICAqL1xuICAgIHN0YXJ0KHRvU2V0LCBpbnB1dCkge1xuICAgICAgICBsZXQgYWN0aW9uRXhpc3RzID0gdXRpbHMuaXNOdW0odG9TZXQpLFxuICAgICAgICAgICAgYWN0aW9uID0gKGFjdGlvbkV4aXN0cykgPyB0aGlzLmdldEFjdGlvbih0b1NldCkgOiB0b1NldC5nZXRQbGF5YWJsZSgpLFxuICAgICAgICAgICAgb3B0cyA9IGFjdGlvbi5nZXRTZXQoKSxcbiAgICAgICAgICAgIHN1cnByZXNzUXVldWVDbGVhciA9IChhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID09PSBmYWxzZSk7XG5cbiAgICAgICAgb3B0cy5hY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgICAgdGhpcy5zZXQob3B0cyk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICBhY3Rpb24uYmluZElucHV0KGlucHV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3VycHJlc3NRdWV1ZUNsZWFyKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIGFsbCBSb2xlIG9uU3RhcnRzIGlmIG5vdCBhbHJlYWR5IGFjdGl2ZVxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIGxldCBudW1Sb2xlcyA9IHRoaXMucm9sZXMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Sb2xlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvbGUgPSB0aGlzLnJvbGVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChyb2xlLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIG5ldyBhY3Rpb24gb25TdGFydFxuICAgICAgICBpZiAoIWFjdGlvbi5pc0FjdGl2ZSAmJiBhY3Rpb24ub25TdGFydCkge1xuICAgICAgICAgICAgYWN0aW9uLm9uU3RhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcblxuICAgICAgICBpZiAoIWFjdGlvbkV4aXN0cykge1xuICAgICAgICAgICAgbGV0IENvbnRyb2xzID0gYWN0aW9uLmdldENvbnRyb2xzKCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbnRyb2xzKHRoaXMsIGFjdGlvbiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBQYXVzZSBhbGwgYWN0aXZlIEFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW2ludF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJucyBbQWN0b3JdXG4gICAgKi9cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBlYWNoKHRoaXMuYWN0aXZlQWN0aW9ucywgKGlkLCBhY3Rpb24pID0+IGFjdGlvbi5kZWFjdGl2YXRlKCkpO1xuICAgICAgICB0aGlzLnByb2Nlc3Muc3RvcCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBSZXN1bWUgYWxsIGFjdGl2ZSBBY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtpbnRdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybnMgW0FjdG9yXTtcbiAgICAqL1xuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIGVhY2godGhpcy5hY3RpdmVBY3Rpb25zLCAoaWQsIGFjdGlvbikgPT4gYWN0aW9uLmFjdGl2YXRlKCkpO1xuICAgICAgICB0aGlzLnByb2Nlc3Muc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU3RvcCBhbGwgYWN0aXZlIEFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW2ludF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJucyBbQWN0b3JdXG4gICAgKi9cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBUb2dnbGUgYWxsIGFjdGl2ZSBBY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtpbnRdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybnMgW0FjdG9yXVxuICAgICovXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZSA/IHRoaXMucGF1c2UoKSA6IHRoaXMucmVzdW1lKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU3luY3MgYGVsZW1lbnRgIHdpdGggY3VycmVudCBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHJldHVybnMgW0FjdG9yXVxuICAgICovXG4gICAgc3luYygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQobmV3IEFjdGlvbih7IHZhbHVlczogdGhpcy52YWx1ZXMgfSkpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFkZCBhIG5ldyBBY3Rpb24gdG8gdGhlIHF1ZXVlXG4gICAgKi9cbiAgICB0aGVuKCkge1xuICAgICAgICB0aGlzLnF1ZXVlLmFkZC5hcHBseSh0aGlzLnF1ZXVlLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBFeGVjdXRlIG5leHQgaW4gcXVldWVcbiAgICAqL1xuICAgIG5leHQoKSB7XG4gICAgICAgIHZhciBuZXh0ID0gdGhpcy5xdWV1ZS5uZXh0KCk7XG5cbiAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmMobmV4dFswXSkpIHtcbiAgICAgICAgICAgICAgICBuZXh0WzBdKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAvLyBPciB0aGlzIGlzIGFuIGFjdGlvblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXh0LnB1c2goZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQuYXBwbHkodGhpcywgbmV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFzc2lnbiBSb2xlcyBiYXNlZCBvbiBlbGVtZW50IGFuZCBtYW51YWxseSBwcm92aWRlZCBwcm9wc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogRWxlbWVudFxuICAgICAgICBAcGFyYW0gW1JvbGUgfHwgYXJyYXldXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl0gKG9wdGlvbmFsKVxuICAgICovXG4gICAgYXNzaWduUm9sZXMoZWxlbWVudCwgbWFudWFsUm9sZXMsIHN1cnByZXNzSW5pdCkge1xuICAgICAgICAvLyBBbGwgQWN0b3JzIGdldCBhIGRlZmF1bHQgUm9sZSB0aGF0IGhhbmRsZXMgdXNlciBjYWxsYmFja3NcbiAgICAgICAgdGhpcy5yb2xlcyA9IFsgZGVmYXVsdFJvbGUgXTtcblxuICAgICAgICAvLyBBdXRvLWFzc2lnbiBpZiBubyBtYW51YWxseS1zZXQgUm9sZXNcbiAgICAgICAgaWYgKCFtYW51YWxSb2xlcyAmJiBlbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9Bc3NpZ25Sb2xlcyhlbGVtZW50KTtcblxuICAgICAgICAvLyBPciBtYW51YWxseSBzZXQgaWYgcHJvdmlkZWRcbiAgICAgICAgfSBlbHNlIGlmIChtYW51YWxSb2xlcykge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzQXJyYXkobWFudWFsUm9sZXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2xlcy5wdXNoLmFwcGx5KHRoaXMucm9sZXMsIG1hbnVhbFJvbGVzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2xlcy5wdXNoKG1hbnVhbFJvbGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3VycHJlc3NJbml0KSB7XG4gICAgICAgICAgICB0aGlzLmluaXRSb2xlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQXV0b21hdGljYWxseSBhc3NpZ24gUm9sZXMgYmFzZWQgb24gZWxlbWVudCwgZGVzaWduZWRcbiAgICAgICAgdG8gYmUgZXh0ZW5kZWRcblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEVsZW1lbnRcbiAgICAqL1xuICAgIGF1dG9Bc3NpZ25Sb2xlcyhlbGVtZW50KSB7XG4gICAgICAgIC8vIEFkZCBDU1Mgcm9sZSBpZiBIVE1MRWxlbWVudFxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2goY3NzUm9sZSk7XG5cbiAgICAgICAgLy8gQWRkIFNWRyByb2xlIGlmIFNWRyBlbGVtZW50XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaChzdmdSb2xlKTtcblxuICAgICAgICAgICAgLy8gQWRkIERyYXcgUGF0aCByb2xlIGlmIHBhdGggZWxlbWVudFxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2xlcy5wdXNoKGRyYXdQYXRoUm9sZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBGaXJlIGluaXQgY2FsbGJhY2tzXG4gICAgKi9cbiAgICBpbml0Um9sZXMoKSB7XG4gICAgICAgIC8vIEZpcmUgaW5pdCBjYWxsYmFja1xuICAgICAgICB0aGlzLnJvbGVzLmZvckVhY2goKHJvbGUpID0+IHtcbiAgICAgICAgICAgIGlmIChyb2xlLmluaXQpIHtcbiAgICAgICAgICAgICAgICByb2xlLmluaXQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZpcnN0RnJhbWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBCaW5kIEFjdGlvbiBhbmQgcmV0dXJuIGl0cyB0YWJsZSBpZFxuXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICBAcmV0dXJucyBbaW50XVxuICAgICovXG4gICAgYmluZEFjdGlvbihhY3Rpb24sIGlkKSB7XG4gICAgICAgIGlmIChpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZCA9IHRoaXMuYWN0aW9uQ291bnRlcisrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc0FjdGlvbihpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF0gPSBhY3Rpb247XG4gICAgICAgICAgICB0aGlzLm51bUFjdGl2ZSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIHVuYmluZEFjdGlvbihpZCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgICAgdGhpcy5udW1BY3RpdmUtLTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm51bUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBY3Rpb24oaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG4gICAgfVxuXG4gICAgaGFzQWN0aW9uKGlkKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5nZXRBY3Rpb24oaWQpICE9PSB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFVwZGF0ZSBwcm9jZXNzaW5nIG9yZGVyXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ11cbiAgICAgICAgQHBhcmFtIFtib29sZWFuXVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dXG4gICAgKi9cbiAgICB1cGRhdGVPcmRlcihrZXksIG1vdmVUb0JhY2ssIGhhc0NoaWxkcmVuKSB7XG4gICAgICAgIHZhciBvcmRlciA9ICghaGFzQ2hpbGRyZW4pID8gdGhpcy5hY3RpdmVWYWx1ZXMgOiB0aGlzLmFjdGl2ZVBhcmVudHMsXG4gICAgICAgICAgICBwb3NpdGlvbiA9IG9yZGVyLmluZGV4T2Yoa2V5KTtcblxuICAgICAgICAvLyBJZiBrZXkgaXNuJ3QgbGlzdCBvciBtb3ZlVG9CYWNrIGlzIHNldCB0byB0cnVlLCBhZGQga2V5XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gLTEgfHwgbW92ZVRvQmFjaykge1xuICAgICAgICAgICAgb3JkZXIucHVzaChrZXkpO1xuXG4gICAgICAgICAgICAvLyBJZiBrZXkgYWxyZWFkeSBleGlzdHMsIHJlbW92ZVxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uID4gLTEpIHtcbiAgICAgICAgICAgICAgICBvcmRlci5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gW2Jvb2xlYW5dOiBJcyB0aGlzIEFjdG9yIGFjdGl2ZT9cbiAgICBnZXQgaXNBY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgICB9XG5cbiAgICAvLyBTZXQgaGFzQ2hhbmdlZCB0byB0cnVlIGlzIHRoaXMgaXMgbm93IGFjdGl2ZVxuICAgIHNldCBpc0FjdGl2ZShzdGF0dXMpIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gc3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXNBY3RpdmUgPSBzdGF0dXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFjdG9yO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rvci9BY3Rvci5qc1xuICoqLyIsIi8qXG4gICAgSW5wdXQgY29udHJvbGxlclxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjLmpzJyksXG4gICAgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMuanMnKSxcbiAgICBIaXN0b3J5ID0gcmVxdWlyZSgnLi4vaW5jL0hpc3RvcnkuanMnKSxcblxuICAgIC8qXG4gICAgICAgIElucHV0IGNvbnN0cnVjdG9yXG4gICAgICAgIFxuICAgICAgICAgICAgU3ludGF4XG4gICAgICAgICAgICAgICAgbmV3SW5wdXQobmFtZSwgdmFsdWVbLCBwb2xsXSlcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHRvIHRyYWNrXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogSW5pdGlhbCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXSAob3B0aW9uYWwpOiBGdW5jdGlvbiB0byBwb2xsIElucHV0IGRhdGFcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbmV3SW5wdXQocHJvcHNbLCBwb2xsXSlcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3Qgb2YgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dIChvcHRpb25hbCk6IEZ1bmN0aW9uIHRvIHBvbGwgSW5wdXQgZGF0YVxuXG4gICAgICAgIEByZXR1cm4gW0lucHV0XVxuICAgICovXG4gICAgSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwb2xsUG9zID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50ID0ge307XG4gICAgICAgIHRoaXMub2Zmc2V0ID0ge307XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB7fTtcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEhpc3RvcnkoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuYyhhcmd1bWVudHNbcG9sbFBvc10pKSB7XG4gICAgICAgICAgICB0aGlzLnBvbGwgPSBhcmd1bWVudHNbcG9sbFBvc107XG4gICAgICAgIH1cbiAgICB9O1xuXG5JbnB1dC5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLy8gW251bWJlcl06IE51bWJlciBvZiBmcmFtZXMgb2YgaW5hY3Rpdml0eSBiZWZvcmUgdmVsb2NpdHkgaXMgdHVybmVkIHRvIDBcbiAgICBtYXhJbmFjdGl2ZUZyYW1lczogMixcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogTnVtYmVyIG9mIGZyYW1lcyBpbnB1dCBoYXNuJ3QgYmVlbiB1cGRhdGVkXG4gICAgaW5hY3RpdmVGcmFtZXM6IDAsXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGxhdGVzdCBpbnB1dCB2YWx1ZXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXSAob3B0aW9uYWwpOiBOYW1lIG9mIHNwZWNpZmljIHByb3BlcnR5IHRvIHJldHVyblxuICAgICAgICBAcmV0dXJuIFtvYmplY3QgfHwgbnVtYmVyXTogTGF0ZXN0IGlucHV0IHZhbHVlcyBvciwgaWYgc3BlY2lmaWVkLCBzaW5nbGUgdmFsdWVcbiAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgdmFyIGxhdGVzdCA9IHRoaXMuaGlzdG9yeS5nZXQoKSxcbiAgICAgICAgICAgIHZhbCA9IChwcm9wICE9PSB1bmRlZmluZWQpID8gbGF0ZXN0W3Byb3BdIDogbGF0ZXN0O1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBVcGRhdGUgdGhlIGlucHV0IHZhbHVlc1xuICAgICAgICBcbiAgICAgICAgU3ludGF4XG4gICAgICAgICAgICBpbnB1dC51cGRhdGUobmFtZSwgdmFsdWUpXG4gICAgICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHRvIHRyYWNrXG4gICAgICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBJbml0aWFsIHZhbHVlXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBpbnB1dC51cGRhdGUocHJvcHMpXG4gICAgICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3Qgb2YgdmFsdWVzXG4gICAgICAgICAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW0lucHV0XVxuICAgICovXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoYXJnMCwgYXJnMSkge1xuICAgICAgICB2YXIgdmFsdWVzID0ge307XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtKGFyZzEpKSB7XG4gICAgICAgICAgICB2YWx1ZXNbYXJnMF0gPSBhcmcxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVzID0gYXJnMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGlzdG9yeS5hZGQodXRpbHMubWVyZ2UodGhpcy5jdXJyZW50LCB2YWx1ZXMpKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQ2hlY2sgZm9yIGlucHV0IG1vdmVtZW50IGFuZCB1cGRhdGUgcG9pbnRlciBvYmplY3QncyBwcm9wZXJ0aWVzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFRpbWVzdGFtcCBvZiBmcmFtZVxuICAgICAgICBAcmV0dXJuIFtJbnB1dF1cbiAgICAqL1xuICAgIG9uRnJhbWU6IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgICAgICAgdmFyIGxhdGVzdCwgaGFzQ2hhbmdlZDtcbiAgICAgICAgXG4gICAgICAgIC8vIENoZWNrIHByb3ZpZGVkIHRpbWVzdGFtcCBhZ2FpbnN0IGxhc3RGcmFtZSB0aW1lc3RhbXAgYW5kIHJldHVybiBpbnB1dCBoYXMgYWxyZWFkeSBiZWVuIHVwZGF0ZWRcbiAgICAgICAgaWYgKHRpbWVzdGFtcCA9PT0gdGhpcy5sYXN0RnJhbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGF0ZXN0ID0gKHRoaXMucG9sbCkgPyB0aGlzLnBvbGwoKSA6IHRoaXMuaGlzdG9yeS5nZXQoKTtcbiAgICAgICAgaGFzQ2hhbmdlZCA9IHV0aWxzLmhhc0NoYW5nZWQodGhpcy5jdXJyZW50LCBsYXRlc3QpO1xuXG4gICAgICAgIC8vIElmIGlucHV0IGhhcyBjaGFuZ2VkIGJldHdlZW4gZnJhbWVzICBcbiAgICAgICAgaWYgKGhhc0NoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSBjYWxjLm9mZnNldCh0aGlzLmN1cnJlbnQsIGxhdGVzdCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBsYXRlc3Q7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcblxuICAgICAgICAvLyBPciBpdCBoYXNuJ3QgbW92ZWQgYW5kIG91ciBmcmFtZSBsaW1pdCBoYXMgYmVlbiByZWFjaGVkXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+PSB0aGlzLm1heEluYWN0aXZlRnJhbWVzKSB7XG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gY2FsYy5vZmZzZXQodGhpcy5jdXJyZW50LCB0aGlzLmN1cnJlbnQpO1xuICAgICAgICBcbiAgICAgICAgLy8gT3IgaW5wdXQgaGFzbid0IGNoYW5nZWRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMrKztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5sYXN0RnJhbWUgPSB0aW1lc3RhbXA7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lucHV0L0lucHV0LmpzXG4gKiovIiwidmFyIEFjdG9yID0gcmVxdWlyZSgnLi4vYWN0b3IvQWN0b3InKSxcbiAgICBUd2VlbiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvVHdlZW4nKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5jb25zdCBERUZBVUxUX1NUQUdHRVJfRUFTRSA9ICdsaW5lYXInO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUNhbGxiYWNrKG1ldGhvZCwgLi4uYXJncykge1xuICAgIHJldHVybiB1dGlscy5pc1N0cmluZyhtZXRob2QpID8gXG4gICAgICAgIGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBtZW1iZXJbbWV0aG9kXSguLi5hcmdzKTtcbiAgICAgICAgfSA6IG1ldGhvZDtcbn1cblxuY2xhc3MgSXRlcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lbWJlcnMpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICAgIGlmIChtZW1iZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChtZW1iZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0YWdnZXIgPSBuZXcgQWN0b3IoKTtcbiAgICB9XG5cbiAgICBhZGQobWVtYmVycykge1xuICAgICAgICB0aGlzLm1lbWJlcnMgPSB0aGlzLm1lbWJlcnMuY29uY2F0KG1lbWJlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGVhY2gobWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGdlbmVyYXRlQ2FsbGJhY2sobWV0aG9kLCAuLi5hcmdzKTtcbiAgICAgICAgdGhpcy5tZW1iZXJzLmZvckVhY2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBlYWNoSW50b05ldyhtZXRob2QsIC4uLmFyZ3MpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZ2VuZXJhdGVDYWxsYmFjayhtZXRob2QsIC4uLmFyZ3MpLFxuICAgICAgICAgICAgbmV3SXRlcmF0b3IgPSBuZXcgSXRlcmF0b3IoKTtcblxuICAgICAgICB0aGlzLm1lbWJlcnMuZm9yRWFjaCgobWVtYmVyKSA9PiBuZXdJdGVyYXRvci5hZGQoY2FsbGJhY2sobWVtYmVyKSkpO1xuXG4gICAgICAgIHJldHVybiBuZXdJdGVyYXRvcjtcbiAgICB9XG5cbiAgICBzdGFnZ2VyKG1ldGhvZCwgcHJvcHMsIC4uLmFyZ3MpIHtcbiAgICAgICAgdmFyIHRlbXBNZW1iZXJzID0gdXRpbHMuY29weUFycmF5KHRoaXMubWVtYmVycyksXG4gICAgICAgICAgICBudW1NZW1iZXJzID0gdGVtcE1lbWJlcnMubGVuZ3RoLFxuICAgICAgICAgICAgcHJvcHNJc0ludGVydmFsID0gdXRpbHMuaXNOdW0ocHJvcHMpLFxuICAgICAgICAgICAgaW50ZXJ2YWwgPSBwcm9wc0lzSW50ZXJ2YWwgPyBwcm9wcyA6IHByb3BzLmludGVydmFsLFxuICAgICAgICAgICAgc3RhZ2dlclByb3BzID0ge30sXG4gICAgICAgICAgICBpID0gLTEsXG4gICAgICAgICAgICBjYWxsYmFjayA9IGdlbmVyYXRlQ2FsbGJhY2sobWV0aG9kLCAuLi5hcmdzKTtcblxuICAgICAgICBzdGFnZ2VyUHJvcHMudmFsdWVzID0ge1xuICAgICAgICAgICAgaToge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IC0wLjYsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGludGVydmFsICogbnVtTWVtYmVycyxcbiAgICAgICAgICAgICAgICBlYXNlOiBwcm9wc0lzSW50ZXJ2YWwgPyBERUZBVUxUX1NUQUdHRVJfRUFTRSA6IHByb3BzLmVhc2UgfHwgREVGQVVMVF9TVEFHR0VSX0VBU0UsXG4gICAgICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdG86IG51bU1lbWJlcnMgLSAwLjZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzdGFnZ2VyUHJvcHMub25VcGRhdGUgPSAob3V0cHV0KSA9PiB7XG4gICAgICAgICAgICB2YXIgbmV3SW5kZXggPSBvdXRwdXQuaSxcbiAgICAgICAgICAgICAgICBnYXBJbmRleCA9IGkgKyAxO1xuXG4gICAgICAgICAgICAvLyBJZiBvdXIgbmV3IGluZGV4IGlzIG9ubHkgb25lIG1vcmUgdGhhbiB0aGUgcHJldmlvdXMgaW5kZXgsIGZpcmUgaW1tZWRpZXRseVxuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID09PSBpICsgMSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRlbXBNZW1iZXJzW2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuXG4gICAgICAgICAgICAvLyBPciBsb29wIHRocm91Z2ggdGhlIGRpc3RhbmNlIHRvIGZpcmUgYWxsIGluZGVjaWVzLiBJbmNyZWFzZSBkZWxheS5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICg7IGdhcEluZGV4IDw9IG5ld0luZGV4OyBnYXBJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRlbXBNZW1iZXJzW2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaSA9IG5ld0luZGV4O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3N0YWdnZXIuc3RhcnQobmV3IFR3ZWVuKHN0YWdnZXJQcm9wcykpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFycmF5IG1hbmlwdWxhdGlvblxuICAgICovXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzLnJldmVyc2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEl0ZXJhdG9yO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2l0ZXJhdG9yL0l0ZXJhdG9yLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtYW5hZ2VyID0gcmVxdWlyZSgnLi9tYW5hZ2VyJyksXG5cbiAgICAvKlxuICAgICAgICBQcm9jZXNzIGNvbnN0cnVjdG9yXG4gICAgICAgIFxuICAgICAgICBTeW50YXhcbiAgICAgICAgICAgIHZhciBwcm9jZXNzID0gbmV3IFByb2Nlc3Moc2NvcGUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHZhciBwcm9jZXNzID0gbmV3IFByb2Nlc3MoY2FsbGJhY2spO1xuICAgICovXG4gICAgUHJvY2VzcyA9IGZ1bmN0aW9uIChzY29wZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGhhc1Njb3BlID0gKGNhbGxiYWNrICE9PSB1bmRlZmluZWQpO1xuXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBoYXNTY29wZSA/IGNhbGxiYWNrIDogc2NvcGU7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBoYXNTY29wZSA/IHNjb3BlIDogdGhpcztcbiAgICAgICAgdGhpcy5pZCA9IG1hbmFnZXIucmVnaXN0ZXIoKTtcblxuICAgICAgICAvLyBbYm9vbGVhbl06IElzIHRoaXMgcHJvY2VzcyBjdXJyZW50bHkgYWN0aXZlP1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfTtcblxuUHJvY2Vzcy5wcm90b3R5cGUgPSB7XG4gICAgLypcbiAgICAgICAgRmlyZSBjYWxsYmFja1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFt0aW1lc3RhbXBdOiBUaW1lc3RhbXAgb2YgY3VycmVudGx5LWV4ZWN1dGVkIGZyYW1lXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4gICAgKi9cbiAgICBmaXJlOiBmdW5jdGlvbiAodGltZXN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2suY2FsbCh0aGlzLnNjb3BlLCB0aW1lc3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgd2UncmUgcnVubmluZyBhdCBhbiBpbnRlcnZhbCwgZGVhY3RpdmF0ZSBhZ2FpblxuICAgICAgICBpZiAodGhpcy5pc0ludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RhcnQgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBEdXJhdGlvbiBvZiBwcm9jZXNzIGluIG1zLCAwIGlmIGluZGVmaW5pdGVcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc3RvcCgpO1xuICAgICAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmlzU3RvcFRpbWVyQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3RvcCBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgc3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBBY3RpdmF0ZSBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIG1hbmFnZXIuYWN0aXZhdGUodGhpcywgdGhpcy5pZCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEZWFjdGl2YXRlIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbWFuYWdlci5kZWFjdGl2YXRlKHRoaXMuaWQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBGaXJlIHByb2Nlc3MgZXZlcnkgeCBtc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2YgbXMgdG8gd2FpdCBiZXR3ZWVuIHJlZmlyaW5nIHByb2Nlc3MuXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBldmVyeTogZnVuY3Rpb24gKGludGVydmFsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICAgICAgdGhpcy5pc0ludGVydmFsID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmludGVydmFsVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLmFjdGl2YXRlKCk7XG4gICAgICAgIH0sIGludGVydmFsKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaXNJbnRlcnZhbFRpbWVBY3RpdmUgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBDbGVhciBhbGwgdGltZXJzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gXG4gICAgKi9cbiAgICByZXNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzSW50ZXJ2YWwgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmlzU3RvcFRpbWVyQWN0aXZlKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zdG9wVGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy5pc0ludGVydmFsVGltZUFjdGl2ZSkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsVGltZXIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2Nlc3M7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvY2Vzcy9Qcm9jZXNzLmpzXG4gKiovIiwidmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG52YXIgZWFjaCA9IHV0aWxzLmVhY2g7XG5cbi8qXG4gICAgUm9sZSBjbGFzcyBjb25zdHJ1Y3RvclxuXG4gICAgQHBhcmFtIFtvYmplY3RdOiBPcHRpb25hbCBtZXRob2RzIGFuZCBwcm9wcyB0byBhZGQ6XG4gICAgICAgIG5hbWUgW3N0cmluZ106ICAgICAgTmFtZSBvZiBnZW5lcmF0ZWQgZ2V0dGVyL3NldHRlciBtZXRob2Qgb24gQWN0b3JcbiAgICAgICAgX21hcCBbb2JqZWN0XTogICAgICBNYXAgQWN0b3IgdmFsdWVzIHRvIHRoZXNlIHZhbHVlcyBmb3IgdGhpcyBSb2xlXG4gICAgICAgIF90eXBlTWFwIFtvYmplY3RdOiAgTWFwIHZhbHVlcyB0byB2YWx1ZSB0eXBlc1xuICAgICAgICBpbml0IFtmdW5jdGlvbl06ICAgIENhbGxiYWNrIHRvIHJ1biB3aGVuIHRoaXMgUm9sZSBpcyBhZGRlZCB0byBhbiBBY3RvclxuICAgICAgICBzdGFydCBbZnVuY3Rpb25dOiAgIENhbGxiYWNrIHRvIHJ1biB3aGVuIGhvc3QgQWN0b3Igc3RhcnRzIGFuIGFjdGlvblxuICAgICAgICBjb21wbGV0ZSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBydW4gd2hlbiBhY3Rpb24gY29tcGxldGVzXG4gICAgICAgIGZyYW1lIFtmdW5jdGlvbl06ICAgQ2FsbGJhY2sgdG8gZmlyZSBvbmNlIHBlciBmcmFtZVxuICAgICAgICB1cGRhdGUgW2Z1bmN0aW9uXTogIENhbGxiYWNrIHRvIGZpcmUgd2hlbiB2YWx1ZXMgY2hhbmdlXG4gICAgICAgIGdldCBbZnVuY3Rpb25dOiAgICAgUmVhZCB2YWx1ZSBmcm9tIGFjdHVhbCBlbGVtZW50XG4gICAgICAgIHNldCBbZnVuY3Rpb25dOiAgICAgU2V0IHZhbHVlIG9uIGFjdHVhbCBlbGVtZW50XG4qL1xudmFyIFJvbGUgPSBmdW5jdGlvbiAobWV0aG9kcykge1xuICAgIHZhciByb2xlID0gdGhpcztcblxuICAgIHJvbGUuX21hcCA9IHt9O1xuXG4gICAgZWFjaChtZXRob2RzLCBmdW5jdGlvbiAobmFtZSwgbWV0aG9kKSB7XG4gICAgICAgIHJvbGVbbmFtZV0gPSAoIXV0aWxzLmlzT2JqKG1ldGhvZCkpID8gbWV0aG9kIDogdXRpbHMuY29weShtZXRob2QpO1xuICAgIH0pO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBuZXcgcm9sZVxuXG4gICAgQHBhcmFtIFtvYmplY3RdOiBPcHRpb25hbCBtZXRob2RzIGFuZCBwcm9wcyB0byBhZGRcbiAgICBAcGFyYW0gW3ZhbHVlc1RvTWFwXTogT3ZlcnJpZGUgZXhpc3RpbmcgbWFwIHdpdGggdGhlc2UgdmFsdWVzXG4gICAgQHJldHVybiBbUm9sZV06IE5ldyBSb2xlXG4qL1xudmFyIGNyZWF0ZVJvbGUgPSBmdW5jdGlvbiAobWV0aG9kcywgdmFsdWVzKSB7XG4gICAgdmFyIG5ld1JvbGUgPSBuZXcgUm9sZShtZXRob2RzKTtcblxuICAgIGVhY2godmFsdWVzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBuZXdSb2xlLl9tYXBba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld1JvbGU7XG59O1xuXG5Sb2xlLnByb3RvdHlwZSA9IHtcblxuICAgIC8qXG4gICAgICAgIE1hcCB2YWx1ZSBrZXlzIG9yIGdlbmVyYXRlIG5ldyBSb2xlIHdpdGggdXBkYXRlZCBtYXBcblxuICAgICAgICBHZXR0ZXI6XG4gICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byBtYXBcbiAgICAgICAgICAgIEByZXR1cm4gW3N0cmluZ106IE1hcHBlZCBrZXksIG9yIGtleSBpZiBubyBtYXBwZWQga2V5IGZvdW5kXG5cbiAgICAgICAgU2V0dGVyOiBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogTWFwIG9mIEFjdG9yIGtleXMgLT4gUm9sZSBrZXlzXG4gICAgICAgICAgICBAcmV0dXJuIFtSb2xlXTogTmV3IFJvbGUgd2l0aCB1bmlxdWUgbWFwXG4gICAgKi9cbiAgICBtYXA6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHN0cmluZywgZ2V0IG1hcHBlZCB2YWx1ZVxuICAgICAgICAvLyBPdGhlcndpc2UgdGhpcyBpcyBhIG1hcCwgZHVwbGljYXRlZCByb2xlIHdpdGggdXBkYXRlZCBtYXBcbiAgICAgICAgcmV0dXJuICh1dGlscy5pc1N0cmluZyh2YWx1ZXMpKSA/IHRoaXMuX21hcFt2YWx1ZXNdIHx8IHZhbHVlcyA6IGNyZWF0ZVJvbGUodGhpcywgdmFsdWVzKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvbGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvUm9sZS5qc1xuICoqLyIsInZhciBCZXppZXIgPSByZXF1aXJlKCcuL0JlemllcicpLFxuXG4gICAgLypcbiAgICAgICAgTWlycm9yIGVhc2luZ1xuICAgICAgICBcbiAgICAgICAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICAgICAgICBlYXNlSW4gaW50byBhbiBlYXNlSW5PdXRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gbWlycm9yXG4gICAgICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4gICAgKi9cbiAgICBtaXJyb3JFYXNpbmcgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIG1ldGhvZCkge1xuICAgICAgICByZXR1cm4gKHByb2dyZXNzIDw9IDAuNSkgPyBtZXRob2QoMiAqIHByb2dyZXNzKSAvIDIgOiAoMiAtIG1ldGhvZCgyICogKDEgLSBwcm9ncmVzcykpKSAvIDI7XG4gICAgfSxcbiAgICAgICAgICAgIFxuICAgIC8qXG4gICAgICAgIFJldmVyc2UgZWFzaW5nXG4gICAgICAgIFxuICAgICAgICBSZXZlcnNlcyB0aGUgb3V0cHV0IG9mIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgZm9yIGZsaXBwaW5nIGVhc2VJblxuICAgICAgICBjdXJ2ZSB0byBhbiBlYXNlT3V0LlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byByZXZlcnNlXG4gICAgICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4gICAgKi9cbiAgICByZXZlcnNlRWFzaW5nID0gZnVuY3Rpb24gKHByb2dyZXNzLCBtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBtZXRob2QoMSAtIHByb2dyZXNzKTtcbiAgICB9O1xuXG4vKlxuICAgIEVhc2luZyBjbGFzc1xuXG4gICAgSWYgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCByZXR1cm5zIGVhc2luZyBmdW5jdGlvbiB3aXRoIFxuICAgIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5cbiAgICBJZiBwcm92aWRlZCBmb3VyIGFyZ3VtZW50cywgcmV0dXJucyBuZXcgQmV6aWVyIGNsYXNzIGluc3RlYWQuXG4qL1xudmFyIEVhc2luZyA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5Mikge1xuICAgIHZhciBtZXRob2QgPSB4MSxcbiAgICAgICAgZWFzaW5nRnVuY3Rpb247XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgYmV6aWVyIGN1cnZlLCByZXR1cm4gYSBiZXppZXIgZnVuY3Rpb25cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSBuZXcgQmV6aWVyKHgxLCB5MSwgeDIsIHkyKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBlYXNpbmdGdW5jdGlvbi5pbiA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZWFzaW5nRnVuY3Rpb24ub3V0ID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gcmV2ZXJzZUVhc2luZyhwcm9ncmVzcywgbWV0aG9kKTtcbiAgICAgICAgfTtcblxuICAgICAgICBlYXNpbmdGdW5jdGlvbi5pbk91dCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIG1pcnJvckVhc2luZyhwcm9ncmVzcywgbWV0aG9kKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWFzaW5nRnVuY3Rpb247XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVhc2luZztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL3R3ZWVuL0Vhc2luZy5qc1xuICoqLyIsImxldCBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoLFxuICAgIENvbnRyb2xzID0gcmVxdWlyZSgnLi4vY29udHJvbHMvQ29udHJvbHMnKTtcblxuY29uc3QgREVGQVVMVF9QUk9QID0gJ2N1cnJlbnQnO1xuY29uc3QgUFJJVkFURSA9IFsnb25TdGFydCcsICdvbkZyYW1lJywgJ29uVXBkYXRlJywgJ29uQ29tcGxldGUnXTtcblxuY2xhc3MgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcztcblxuICAgICAgICB1dGlscy5lYWNoKHRoaXMuZ2V0RGVmYXVsdFByb3BzKCksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBhY3Rpb25ba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnNldChwcm9wcywgdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCkpO1xuICAgIH1cblxuICAgIHNldChwcm9wcyA9IHt9LCBkZWZhdWx0UHJvcCA9IERFRkFVTFRfUFJPUCkge1xuICAgICAgICBlYWNoKHByb3BzLCAoa2V5LCBwcm9wKSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAndmFsdWVzJykge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1lcmdlIHZhbHVlc1xuICAgICAgICBpZiAocHJvcHMudmFsdWVzKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFZhbHVlcyA9IHRoaXMudmFsdWVzLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHByb3BzLnZhbHVlcztcblxuICAgICAgICAgICAgZWFjaCh2YWx1ZXMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGV4aXN0aW5nVmFsdWUgPSBjdXJyZW50VmFsdWVzW2tleV0sXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0ge307XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IGV4aXN0aW5nVmFsdWUgPyB1dGlscy5tZXJnZShleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSkgOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJvY2VzcyhhY3RvciwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAvKlxuICAgICAgICBIYXMgQWN0aW9uIGVuZGVkP1xuICAgICAgICBcbiAgICAgICAgUmV0dXJucyB0cnVlIHRvIGVuZCBpbW1lZGlldGx5XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogdHJ1ZVxuICAgICovXG4gICAgaGFzRW5kZWQoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAgICAgXG4gICAgbGltaXQob3V0cHV0LCB2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdHJpY3RlZCA9IGNhbGMucmVzdHJpY3RlZChvdXRwdXQsIHZhbHVlLm1pbiwgdmFsdWUubWF4KSxcbiAgICAgICAgICAgIGVzY2FwZUFtcCA9IHZhbHVlLmVzY2FwZUFtcCAhPT0gdW5kZWZpbmVkID8gdmFsdWUuZXNjYXBlQW1wIDogMDtcbiAgICAgICAgcmV0dXJuIHJlc3RyaWN0ZWQgKyAoKG91dHB1dCAtIHJlc3RyaWN0ZWQpICogZXNjYXBlQW1wKTtcbiAgICB9XG5cbiAgICBnZXRDb250cm9scygpIHtcbiAgICAgICAgcmV0dXJuIENvbnRyb2xzO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfVxuXG4gICAgZ2V0U2V0KCkge1xuICAgICAgICB2YXIgc2V0ID0geyB2YWx1ZXM6IHRoaXMudmFsdWVzIH07XG5cbiAgICAgICAgZWFjaCh0aGlzLCAoa2V5LCBwcm9wKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIFBSSVZBVEUuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHNldFtrZXldID0gcHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNldDtcbiAgICB9XG5cbiAgICBleHRlbmQocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHV0aWxzLm1lcmdlKHRoaXMsIHByb3BzKSwgdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCkpO1xuICAgIH1cblxuICAgIGdldFBsYXlhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leHRlbmQoKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFjdGlvbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL0FjdGlvbi5qc1xuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgZWFjaCA9IHV0aWxzLmVhY2gsXG4gICAgcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi90d2Vlbi9wcmVzZXQtZWFzaW5nJyksXG4gICAgdmFsdWVPcHMgPSByZXF1aXJlKCcuLi9hY3Rvci92YWx1ZS1vcGVyYXRpb25zJyksXG4gICAgVHdlZW5Db250cm9scyA9IHJlcXVpcmUoJy4vdHdlZW4vVHdlZW5Db250cm9scycpLFxuXG4gICAgbmV4dFN0ZXBzID0ge1xuICAgICAgICBsb29wOiAncmVzdGFydCcsXG4gICAgICAgIHlveW86ICdyZXZlcnNlJyxcbiAgICAgICAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAxIHByb2dyZXNzXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgICAgICB0byB1c2Ugb3IgZ2VuZXJhdGVkIGVhc2luZyBmdW5jdGlvblxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBvZiBlYXNlZCBwcm9ncmVzcyBpbiByYW5nZVxuICAgICovICBcbiAgICBlYXNlID0gZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzZSkge1xuICAgICAgICB2YXIgcHJvZ3Jlc3NMaW1pdGVkID0gY2FsYy5yZXN0cmljdGVkKHByb2dyZXNzLCAwLCAxKSxcbiAgICAgICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gdXRpbHMuaXNTdHJpbmcoZWFzZSkgPyBwcmVzZXRFYXNpbmdbZWFzZV0gOiBlYXNlO1xuXG4gICAgICAgIHJldHVybiBjYWxjLnZhbHVlRWFzZWQocHJvZ3Jlc3NMaW1pdGVkLCBmcm9tLCB0bywgZWFzaW5nRnVuY3Rpb24pO1xuICAgIH07XG5cbmNvbnN0IENPVU5UID0gJ2NvdW50JztcblxuY2xhc3MgVHdlZW4gZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGdldENvbnRyb2xzKCkge1xuICAgICAgICByZXR1cm4gVHdlZW5Db250cm9scztcbiAgICB9XG4gICAgXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaWxhdGU6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICB5b3lvOiBmYWxzZSxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgcGxheURpcmVjdGlvbjogMSxcbiAgICAgICAgICAgIGVuZGVkOiB0cnVlLFxuICAgICAgICAgICAgZWxhcHNlZDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGVhc2U6ICdlYXNlT3V0JyxcbiAgICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgICBzdGVwczogMCxcbiAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd0byc7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIEFjdGlvbiBlbGFwc2VkIHRpbWVcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaW1lc3RhbXAgb2YgY3VycmVudCBmcmFtZVxuICAgICovXG4gICAgb25GcmFtZVN0YXJ0KGFjdG9yLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZWxhcHNlZCB8fCAwO1xuXG4gICAgICAgIGlmIChmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmVsYXBzZWQgKz0gKGZyYW1lRHVyYXRpb24gKiBhY3Rvci5kaWxhdGUpICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBDYWxjdWxhdGUgcHJvZ3Jlc3Mgb2YgdmFsdWUgYmFzZWQgb24gdGltZSBlbGFwc2VkLFxuICAgICAgICB2YWx1ZSBkZWxheS9kdXJhdGlvbi9zdGFnZ2VyIHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW0FjdG9yXVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIHN0YXRlIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IENhbGN1bGF0ZWQgdmFsdWVcbiAgICAqL1xuICAgIHByb2Nlc3MoYWN0b3IsIHZhbHVlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB2YWx1ZS50byxcbiAgICAgICAgICAgIHByb2dyZXNzVGFyZ2V0ID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAxIDogMCxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWUuY3VycmVudCxcbiAgICAgICAgICAgIHByb2dyZXNzO1xuXG4gICAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGEgdG8gcHJvcGVydHksIG90aGVyd2lzZSB3ZSBqdXN0IHJldHVybiBjdXJyZW50IHZhbHVlXG4gICAgICAgIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvZ3Jlc3MgPSBjYWxjLnJlc3RyaWN0ZWQoY2FsYy5wcm9ncmVzcyh0aGlzLmVsYXBzZWQgLSB2YWx1ZS5kZWxheSwgdmFsdWUuZHVyYXRpb24pIC0gdmFsdWUuc3RhZ2dlciwgMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgQWN0aW9uIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSB1dGlscy5zdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSB2YWx1ZVxuICAgICAgICAgICAgbmV3VmFsdWUgPSBlYXNlKHByb2dyZXNzLCB2YWx1ZS5vcmlnaW4sIHRhcmdldCwgdmFsdWUuZWFzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgSWYgdGhpcyB0d2VlbiBoYXMgZW5kZWQsIGNoZWNrIGlmIHdlIGxvb3AveW95by9mbGlwXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSGFzIHRoaXMgdHdlZW4gcmVhbGx5IHJlYWxseSBlbmRlZD9cbiAgICAqL1xuICAgIGhhc0VuZGVkKGFjdG9yKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICAgICAgICBlYWNoKG5leHRTdGVwcywgKG5hbWUsIG1ldGhvZE5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja05leHRTdGVwKGFjdG9yLCBuYW1lLCB0aGlzW21ldGhvZE5hbWVdKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGFjdG9yLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lbmRlZDtcbiAgICB9XG5cbiAgICBjaGVja05leHRTdGVwKGFjdG9yLCBuYW1lLCBtZXRob2QpIHtcbiAgICAgICAgdmFyIHN0ZXBUYWtlbiA9IGZhbHNlLFxuICAgICAgICAgICAgc3RlcCA9IHRoaXNbbmFtZV0sXG4gICAgICAgICAgICBjb3VudCA9IHRoaXNbbmFtZSArIENPVU5UXSB8fCAwLFxuICAgICAgICAgICAgZm9yZXZlciA9IChzdGVwID09PSB0cnVlKTtcblxuICAgICAgICBpZiAoZm9yZXZlciB8fCB1dGlscy5pc051bShzdGVwKSkge1xuICAgICAgICAgICAgKytjb3VudDtcbiAgICAgICAgICAgIHRoaXNbbmFtZSArIENPVU5UXSA9IGNvdW50O1xuXG4gICAgICAgICAgICBpZiAoZm9yZXZlciB8fCBjb3VudCA8PSBzdGVwKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kLmNhbGwodGhpcywgYWN0b3IpO1xuICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RlcFRha2VuO1xuICAgIH1cblxuICAgIGZsaXBWYWx1ZXMoYWN0b3IpIHtcbiAgICAgICAgdmFyIGFjdG9yVmFsdWVzID0gYWN0b3IudmFsdWVzO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgICAgIGVhY2godGhpcy52YWx1ZXMsIChrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGFjdG9yVmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGVhY2godmFsdWUuY2hpbGRyZW4sIChjaGlsZEtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZU9wcy5mbGlwKGFjdG9yVmFsdWVzW2tleSArIGNoaWxkS2V5XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlT3BzLmZsaXAodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW47XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9Ud2Vlbi5qc1xuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgc2ltdWxhdGlvbnMgPSByZXF1aXJlKCcuL3NpbXVsYXRlL3NpbXVsYXRpb25zJyk7XG5cbmNvbnN0IERFRkFVTFRfUFJPUCA9ICd2ZWxvY2l0eSc7XG5cbmNsYXNzIFNpbXVsYXRlIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1heEluYWN0aXZlRnJhbWVzOiAzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gW3N0cmluZ106IFNpbXVsYXRpb24gdG8gLnJ1blxuICAgICAgICAgICAgc2ltdWxhdGU6IERFRkFVTFRfUFJPUCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IERlY2VsZXJhdGlvbiB0byBhcHBseSB0byB2YWx1ZSwgaW4gdW5pdHMgcGVyIHNlY29uZFxuICAgICAgICAgICAgZGVjZWxlcmF0aW9uOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgICAgICAgICBhY2NlbGVyYXRpb246IDAsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgICAgICAgICBib3VuY2U6IDAsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBTcHJpbmcgc3RyZW5ndGggZHVyaW5nICdzdHJpbmcnXG4gICAgICAgICAgICBzcHJpbmc6IDgwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogVGltZWNvbnN0YW50IG9mIGdsaWRlXG4gICAgICAgICAgICB0aW1lQ29uc3RhbnQ6IDM5NSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gICAgICAgICAgICBzdG9wU3BlZWQ6IDUsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtib29sZWFuXTogQ2FwdHVyZSB3aXRoIHNwcmluZyBwaHlzaWNzIG9uIGxpbWl0IGJyZWFjaFxuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWVcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfVxuXG4gICAgb25TdGFydCgpIHtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICB9XG4gICAgXG4gICAgLypcbiAgICAgICAgU2ltdWxhdGUgdGhlIFZhbHVlJ3MgcGVyLWZyYW1lIG1vdmVtZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW0FjdG9yXVxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSBvZiBjdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRHVyYXRpb24gb2YgZnJhbWUgaW4gbXNcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZVxuICAgICovXG4gICAgcHJvY2VzcyhhY3RvciwgdmFsdWUsIGtleSwgdGltZVNpbmNlTGFzdEZyYW1lKSB7XG4gICAgICAgIHZhciBzaW11bGF0ZSA9IHZhbHVlLnNpbXVsYXRlLFxuICAgICAgICAgICAgc2ltdWxhdGlvbiA9IHV0aWxzLmlzU3RyaW5nKHNpbXVsYXRlKSA/IHNpbXVsYXRpb25zW3NpbXVsYXRlXSA6IHNpbXVsYXRlLFxuICAgICAgICAgICAgbmV3VmVsb2NpdHkgPSBzaW11bGF0aW9uID8gc2ltdWxhdGlvbih2YWx1ZSwgdGltZVNpbmNlTGFzdEZyYW1lLCB0aGlzLnN0YXJ0ZWQpIDogMDtcblxuICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IChNYXRoLmFicyhuZXdWZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkKSA/IG5ld1ZlbG9jaXR5IDogMDtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmN1cnJlbnQgKyBjYWxjLnNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIHRpbWVTaW5jZUxhc3RGcmFtZSk7XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgICAgIEhhcyB0aGlzIGFjdGlvbiBlbmRlZD9cbiAgICAgICAgXG4gICAgICAgIFVzZSBhIGZyYW1lY291bnRlciB0byBzZWUgaWYgQWN0aW9uIGhhcyBjaGFuZ2VkIGluIHRoZSBsYXN0IHggZnJhbWVzXG4gICAgICAgIGFuZCBkZWNsYXJlIGVuZGVkIGlmIG5vdFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogSGFzIEFjdGlvbiBjaGFuZ2VkP1xuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSGFzIEFjdGlvbiBlbmRlZD9cbiAgICAqL1xuICAgIGhhc0VuZGVkKGFjdG9yLCBoYXNDaGFuZ2VkKSB7XG4gICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSBoYXNDaGFuZ2VkID8gMCA6IHRoaXMuaW5hY3RpdmVGcmFtZXMgKyAxO1xuICAgICAgICByZXR1cm4gKHRoaXMuaW5hY3RpdmVGcmFtZXMgPiBhY3Rvci5tYXhJbmFjdGl2ZUZyYW1lcyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTGltaXQgb3V0cHV0IHRvIHZhbHVlIHJhbmdlLCBpZiBhbnlcbiAgICAgICAgXG4gICAgICAgIElmIHZlbG9jaXR5IGlzIGF0IG9yIG1vcmUgdGhhbiByYW5nZSwgYW5kIHZhbHVlIGhhcyBhIGJvdW5jZSBwcm9wZXJ0eSxcbiAgICAgICAgcnVuIHRoZSBib3VuY2Ugc2ltdWxhdGlvblxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDYWxjdWxhdGVkIG91dHB1dFxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCBWYWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBMaW1pdC1hZGp1c3RlZCBvdXRwdXRcbiAgICAqL1xuICAgIGxpbWl0KG91dHB1dCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGlzT3V0c2lkZU1heCA9IChvdXRwdXQgPj0gdmFsdWUubWF4KSxcbiAgICAgICAgICAgIGlzT3V0c2lkZU1pbiA9IChvdXRwdXQgPD0gdmFsdWUubWluKSxcbiAgICAgICAgICAgIGlzT3V0c2lkZVJhbmdlID0gaXNPdXRzaWRlTWF4IHx8IGlzT3V0c2lkZU1pbjtcblxuICAgICAgICBpZiAoaXNPdXRzaWRlUmFuZ2UpIHtcbiAgICAgICAgICAgIG91dHB1dCA9IGNhbGMucmVzdHJpY3RlZChvdXRwdXQsIHZhbHVlLm1pbiwgdmFsdWUubWF4KTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlLmJvdW5jZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc2ltdWxhdGlvbnMuYm91bmNlKHZhbHVlKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5jYXB0dXJlKSB7XG4gICAgICAgICAgICAgICAgc2ltdWxhdGlvbnMuY2FwdHVyZSh2YWx1ZSwgaXNPdXRzaWRlTWF4ID8gdmFsdWUubWF4IDogdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2ltdWxhdGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9TaW11bGF0ZS5qc1xuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbicpLFxuICAgIFBvaW50ZXIgPSByZXF1aXJlKCcuLi9pbnB1dC9Qb2ludGVyJyksXG4gICAgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG4gICAgZWFjaCA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLmVhY2g7XG5cbmZ1bmN0aW9uIHNtb290aChuZXdPZmZzZXQsIG9sZE9mZnNldCwgZHVyYXRpb24sIHNtb290aGluZykge1xuICAgIHZhciBvZmZzZXQgPSB7fTtcblxuICAgIGVhY2gobmV3T2Zmc2V0LCAoa2V5LCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICBsZXQgb2xkVmFsdWUgPSBvbGRPZmZzZXRba2V5XTtcblxuICAgICAgICBvZmZzZXRba2V5XSA9IG9sZFZhbHVlICsgKGR1cmF0aW9uICogKCBuZXdWYWx1ZSAtIG9sZFZhbHVlICkgLyBzbW9vdGhpbmcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbn1cblxuY2xhc3MgVHJhY2sgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIC8qXG4gICAgICAgIFVwZGF0ZSBpbnB1dCBvZmZzZXRcbiAgICAqL1xuICAgIG9uRnJhbWVTdGFydChhY3RvciwgZnJhbWVEdXJhdGlvbiwgZnJhbWVzdGFtcCkge1xuICAgICAgICB2YXIgbmV3T2Zmc2V0O1xuXG4gICAgICAgIGFjdG9yLnN0YXRlLmlucHV0ID0gdGhpcy5pbnB1dC5vbkZyYW1lKGZyYW1lc3RhbXApO1xuICAgICAgICBcbiAgICAgICAgbmV3T2Zmc2V0ID0gY2FsYy5vZmZzZXQodGhpcy5pbnB1dE9yaWdpbiwgdGhpcy5pbnB1dC5jdXJyZW50KTtcblxuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0gKGFjdG9yLnNtb290aCAmJiB0aGlzLmlucHV0T2Zmc2V0KSA/IHNtb290aChuZXdPZmZzZXQsIHRoaXMuaW5wdXRPZmZzZXQsIGZyYW1lRHVyYXRpb24sIGFjdG9yLnNtb290aCkgOiBuZXdPZmZzZXQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTW92ZSBWYWx1ZSByZWxhdGl2ZSB0byBJbnB1dCBtb3ZlbWVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgY3VycmVudCB2YWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzKGFjdG9yLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgIHJldHVybiAodGhpcy5pbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSA/IHZhbHVlLm9yaWdpbiArIHRoaXMuaW5wdXRPZmZzZXRba2V5XSA6IHZhbHVlLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgSGFzIHRoaXMgQWN0aW9uIGVuZGVkPyBcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBGYWxzZSB0byBtYWtlIHVzZXIgbWFudWFsbHkgZmluaXNoIC50cmFjaygpXG4gICAgKi9cbiAgICBoYXNFbmRlZCgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGJpbmRJbnB1dChpbnB1dCkge1xuICAgICAgICB0aGlzLmlucHV0ID0gKCFpbnB1dC5jdXJyZW50KSA/IG5ldyBQb2ludGVyKGlucHV0KSA6IGlucHV0O1xuICAgICAgICB0aGlzLmlucHV0T3JpZ2luID0gdGhpcy5pbnB1dC5nZXQoKTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzbW9vdGg6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbXA6IDFcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhY2s7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9UcmFjay5qc1xuICoqLyIsInZhciBBY3RvciA9IHJlcXVpcmUoJy4uL2FjdG9yL0FjdG9yJyksXG4gICAgSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pdGVyYXRvci9JdGVyYXRvcicpLFxuICAgIHNlbGVjdERvbSA9IHJlcXVpcmUoJy4vc2VsZWN0LWRvbScpO1xuXG5jb25zdCBTQVZFX1BST1AgPSAnX19wbV9hY3Rvcl8nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgb3B0cyA9IHt9KSB7XG4gICAgdmFyIGRvbSA9IHNlbGVjdERvbShzZWxlY3RvciksXG4gICAgICAgIGFjdG9ycyA9IFtdO1xuXG4gICAgZG9tLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgbGV0IGFjdG9yID0gZWxlbWVudFtTQVZFX1BST1BdO1xuXG4gICAgICAgIGlmICghYWN0b3IpIHtcbiAgICAgICAgICAgIG9wdHMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBhY3RvciA9IGVsZW1lbnRbU0FWRV9QUk9QXSA9IG5ldyBBY3RvcihvcHRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdG9ycy5wdXNoKGFjdG9yKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoYWN0b3JzLmxlbmd0aCA+IDEpID8gbmV3IEl0ZXJhdG9yKGFjdG9ycykgOiBhY3RvcnNbMF07XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5jL3NlbGVjdC1hY3Rvci5qc1xuICoqLyIsIi8qXG4gICAgQ2FsY3VsYXRvcnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgU2ltcGxlIEkvTyBzbmlwcGV0c1xuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyksXG5cbiAgICBjYWxjID0ge1xuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICAgICAgICAgICAgYXJlIGF0IDAsMCwgdGhlbiByZXR1cm4gdGhlIGFuZ2xlIHVzaW5nIC5hbmdsZUZyb21DZW50ZXIoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgICAgICAgICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuICAgICAgICAqL1xuICAgICAgICBhbmdsZTogZnVuY3Rpb24gKHBvaW50QSwgcG9pbnRCKSB7XG4gICAgICAgICAgICB2YXIgZnJvbSA9IHBvaW50QiA/IHBvaW50QSA6IHt4OiAwLCB5OiAwfSxcbiAgICAgICAgICAgICAgICB0byA9IHBvaW50QiB8fCBwb2ludEEsXG4gICAgICAgICAgICAgICAgcG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHRvLnggLSBmcm9tLngsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRvLnkgLSBmcm9tLnlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbmdsZUZyb21DZW50ZXIocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIEFuZ2xlIGZyb20gY2VudGVyXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGN1cnJlbnQgYW5nbGUsIGluIHJhZGlhbnMsIG9mIGEgZGVmaW5lZCBwb2ludFxuICAgICAgICAgICAgZnJvbSBhIGNlbnRlciAoYXNzdW1lZCAwLDApXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogWCBjb29yZGluYXRlIG9mIHNlY29uZCBwb2ludFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBZIGNvb3JkaW5hdGUgb2Ygc2Vjb25kIHBvaW50XG4gICAgICAgICAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIDAsIDAgYW5kIHBvaW50IGluIHJhZGlhbnNcbiAgICAgICAgKi9cbiAgICAgICAgYW5nbGVGcm9tQ2VudGVyOiBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKHksIHgpKTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgICAgICAgKi9cbiAgICAgICAgZGVncmVlc1RvUmFkaWFuczogZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgRGlsYXRlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGEgLS0tLS0tLS0tIGJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYSAtLS0tIGJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiAgICAgICAgKi9cbiAgICAgICAgZGlsYXRlOiBmdW5jdGlvbiAoYSwgYiwgZGlsYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBhICsgKChiIC0gYSkgKiBkaWxhdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIERpc3RhbmNlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gKDAsMCkgYW5kIHBvaW50QSwgdW5sZXNzIHBvaW50QlxuICAgICAgICAgICAgaXMgcHJvdmlkZWQsIHRoZW4gd2UgcmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHR3by5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgZGlzdGFuY2U6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAgICAgcmV0dXJuICh0eXBlb2YgcG9pbnRBID09PSBcIm51bWJlclwiKSA/IHRoaXMuZGlzdGFuY2UxRChwb2ludEEsIHBvaW50QikgOiB0aGlzLmRpc3RhbmNlMkQocG9pbnRBLCBwb2ludEIpO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRGlzdGFuY2UgMURcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiBwb2ludCBBIGFuZCBwb2ludCBCXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUG9pbnQgQVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiAob3B0aW9uYWwpOiBQb2ludCBCXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICAgICAqL1xuICAgICAgICBkaXN0YW5jZTFEOiBmdW5jdGlvbiAocG9pbnRBLCBwb2ludEIpIHtcbiAgICAgICAgICAgIHZhciBiSXNOdW0gPSAodHlwZW9mIHBvaW50QiA9PT0gJ251bWJlcicpLFxuICAgICAgICAgICAgICAgIGZyb20gPSBiSXNOdW0gPyBwb2ludEEgOiAwLFxuICAgICAgICAgICAgICAgIHRvID0gYklzTnVtID8gcG9pbnRCIDogcG9pbnRBO1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIGFic29sdXRlKHRvIC0gZnJvbSk7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIERpc3RhbmNlIDJEXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gKDAsMCkgYW5kIHBvaW50IEEsIHVubGVzcyBwb2ludCBCXG4gICAgICAgICAgICBpcyBwcm92aWRlZCwgdGhlbiB3ZSByZXR1cm4gdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdHdvLlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IHggYW5kIHkgb2YgcG9pbnQgQVxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9mIHBvaW50IEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4gICAgICAgICovXG4gICAgICAgIGRpc3RhbmNlMkQ6IGZ1bmN0aW9uIChwb2ludEEsIHBvaW50Qikge1xuICAgICAgICAgICAgdmFyIGJJc09iaiA9ICh0eXBlb2YgcG9pbnRCID09PSBcIm9iamVjdFwiKSxcbiAgICAgICAgICAgICAgICBmcm9tID0gYklzT2JqID8gcG9pbnRBIDoge3g6IDAsIHk6IDB9LFxuICAgICAgICAgICAgICAgIHRvID0gYklzT2JqID8gcG9pbnRCIDogcG9pbnRBLFxuICAgICAgICAgICAgICAgIHBvaW50ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBhYnNvbHV0ZSh0by54IC0gZnJvbS54KSxcbiAgICAgICAgICAgICAgICAgICAgeTogYWJzb2x1dGUodG8ueSAtIGZyb20ueSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHlwb3RlbnVzZShwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgSHlwb3RlbnVzZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBoeXBvdGVudXNlLCBzaWRlIEMsIGdpdmVuIHRoZSBsZW5ndGhzIG9mIHNpZGVzIEEgYW5kIEIuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4gICAgICAgICovXG4gICAgICAgIGh5cG90ZW51c2U6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICB2YXIgYTIgPSBhICogYSxcbiAgICAgICAgICAgICAgICBiMiA9IGIgKiBiLFxuICAgICAgICAgICAgICAgIGMyID0gYTIgKyBiMjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoYzIpO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIE9mZnNldCBiZXR3ZWVuIHR3byBpbnB1dHNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQ2FsY3VsYXRlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIGRpZmZlcmVudCBpbnB1dHNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IGlucHV0XG4gICAgICAgICAgICBAcGFyYW0gW1BvaW50XTogU2Vjb25kIGlucHV0XG4gICAgICAgICAgICBAcmV0dXJuIFtPZmZzZXRdOiBEaXN0YW5jZSBtZXRyaWNzIGJldHdlZW4gdHdvIHBvaW50c1xuICAgICAgICAqL1xuICAgICAgICBvZmZzZXQ6IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0ge307XG4gICAgXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgICAgICAgICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0W2tleV0gPSBiW2tleV0gLSBhW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXRba2V5XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNOdW0ob2Zmc2V0LngpICYmIGlzTnVtKG9mZnNldC55KSkge1xuICAgICAgICAgICAgICAgIG9mZnNldC5hbmdsZSA9IHRoaXMuYW5nbGUoYSwgYik7XG4gICAgICAgICAgICAgICAgb2Zmc2V0LmRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZTJEKGEsIGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICAgICAgICAgICAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuICAgICAgICAqL1xuICAgICAgICBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlOiBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgICAgICAgICAgIHZhciBwb2ludCA9IHt9O1xuICAgIFxuICAgIFx0XHRwb2ludC54ID0gZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueDtcbiAgICAgICAgICAgIHBvaW50LnkgPSBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55O1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHBvaW50O1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gICAgICAgICAgICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgICAgICAgICAgIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBpZiBmdWxsIHJhbmdlIGdpdmVuLCB1cHBlciBpZiBub3RcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgKi9cbiAgICAgICAgcHJvZ3Jlc3M6IGZ1bmN0aW9uICh2YWx1ZSwgbGltaXRBLCBsaW1pdEIpIHtcbiAgICAgICAgICAgIHZhciBiSXNOdW0gPSAodHlwZW9mIGxpbWl0QiA9PT0gJ251bWJlcicpLFxuICAgICAgICAgICAgICAgIGZyb20gPSBiSXNOdW0gPyBsaW1pdEEgOiAwLFxuICAgICAgICAgICAgICAgIHRvID0gYklzTnVtID8gbGltaXRCIDogbGltaXRBLFxuICAgICAgICAgICAgICAgIHJhbmdlID0gdG8gLSBmcm9tLFxuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gKHZhbHVlIC0gZnJvbSkgLyByYW5nZTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiBwcm9ncmVzcztcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgICAgICAgKi9cbiAgICAgICAgcmFkaWFuc1RvRGVncmVlczogZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgICAgICAgICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgUmV0dXJuIHJhbmRvbSBudW1iZXIgYmV0d2VlbiByYW5nZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWF4aW11bVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuICAgICAgICAqL1xuICAgICAgICByYW5kb206IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgICAgICAgICAgbWluID0gaXNOdW0obWluKSA/IG1pbiA6IDA7XG4gICAgICAgICAgICBtYXggPSBpc051bShtYXgpID8gbWF4IDogMTtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgICAgICAgICAgIHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IE5ldyB2YWx1ZVxuICAgICAgICAqL1xuICAgICAgICByZWxhdGl2ZVZhbHVlOiBmdW5jdGlvbiAoY3VycmVudCwgcmVsKSB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBjdXJyZW50LFxuICAgICAgICAgICAgICAgIGVxdWF0aW9uID0gcmVsLnNwbGl0KCc9JyksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IgPSBlcXVhdGlvblswXSxcbiAgICAgICAgICAgICAgICBzcGxpdFZhbCA9IHV0aWxzLnNwbGl0VmFsVW5pdChlcXVhdGlvblsxXSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgKz0gc3BsaXRWYWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSAtPSBzcGxpdFZhbC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlICo9IHNwbGl0VmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgLz0gc3BsaXRWYWwudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoc3BsaXRWYWwudW5pdCkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlICs9IHNwbGl0VmFsLnVuaXQ7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgICAgIH0sXG4gICAgXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBSZXN0cmljdCB2YWx1ZSB0byByYW5nZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm4gdmFsdWUgd2l0aGluIHRoZSByYW5nZSBvZiBsb3dlckxpbWl0IGFuZCB1cHBlckxpbWl0XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8ga2VlcCB3aXRoaW4gcmFuZ2VcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGxpbWl0ZWQgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgICAgICovXG4gICAgICAgIHJlc3RyaWN0ZWQ6IGZ1bmN0aW9uICh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICAgICAgICAgIHZhciByZXN0cmljdGVkID0gKG1pbiAhPT0gdW5kZWZpbmVkKSA/IE1hdGgubWF4KHZhbHVlLCBtaW4pIDogdmFsdWU7XG4gICAgICAgICAgICByZXN0cmljdGVkID0gKG1heCAhPT0gdW5kZWZpbmVkKSA/IE1hdGgubWluKHJlc3RyaWN0ZWQsIG1heCkgOiByZXN0cmljdGVkO1xuICAgIFxuICAgICAgICAgICAgcmV0dXJuIHJlc3RyaWN0ZWQ7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4gICAgICAgICovXG4gICAgICAgIHNwZWVkUGVyRnJhbWU6IGZ1bmN0aW9uICh4cHMsIGZyYW1lRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiAoaXNOdW0oeHBzKSkgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiAgICAgICAgKi9cbiAgICAgICAgc3BlZWRQZXJTZWNvbmQ6IGZ1bmN0aW9uICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICAgICAgICAgICAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZSwgb3IgdXBwZXIgaWYgbGltaXQyIG5vdCBwcm92aWRlZFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4gICAgICAgICovXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAocHJvZ3Jlc3MsIGxpbWl0QSwgbGltaXRCKSB7XG4gICAgICAgICAgICB2YXIgYklzTnVtID0gKHR5cGVvZiBsaW1pdEIgPT09ICdudW1iZXInKSxcbiAgICAgICAgICAgICAgICBmcm9tID0gYklzTnVtID8gbGltaXRBIDogMCxcbiAgICAgICAgICAgICAgICB0byA9IGJJc051bSA/IGxpbWl0QiA6IGxpbWl0QTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiAoLSBwcm9ncmVzcyAqIGZyb20pICsgKHByb2dyZXNzICogdG8pICsgZnJvbTsgXG4gICAgICAgIH0sXG4gICAgXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBFYXNlZCB2YWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICAgICAgICAgICAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZSwgb3IgdXBwZXIgaWYgbGltaXQyIG5vdCBwcm92aWRlZFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgICAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IEVhc2luZyB0byBhcHBseSB0byB2YWx1ZVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuICAgICAgICAqL1xuICAgICAgICB2YWx1ZUVhc2VkOiBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNpbmcpIHtcbiAgICAgICAgICAgIHZhciBlYXNlZFByb2dyZXNzID0gZWFzaW5nKHByb2dyZXNzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUoZWFzZWRQcm9ncmVzcywgZnJvbSwgdG8pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIENhY2hpbmcgZnVuY3Rpb25zIHVzZWQgbXVsdGlwbGUgdGltZXMgdG8gcmVkdWNlIGZpbGVzaXplIGFuZCBpbmNyZWFzZSBwZXJmb3JtYW5jZVxuICAgICovXG4gICAgaXNOdW0gPSB1dGlscy5pc051bSxcbiAgICBhYnNvbHV0ZSA9IE1hdGguYWJzO1xuICAgIFxubW9kdWxlLmV4cG9ydHMgPSBjYWxjO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luYy9jYWxjLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlcywgdGVybXMsIGRlbGltaXRlciwgY2hvcCkge1xuICAgIHZhciBjb21iaW5lZCA9ICcnLFxuICAgICAgICBrZXkgPSAnJyxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuXG4gICAgZm9yICg7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICAgIGtleSA9IHRlcm1zW2ldO1xuXG4gICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgY29tYmluZWQgKz0gdmFsdWVzW2tleV0gKyBkZWxpbWl0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hvcCkge1xuICAgICAgICBjb21iaW5lZCA9IGNvbWJpbmVkLnNsaWNlKDAsIC1jaG9wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluZWQ7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkLmpzXG4gKiovIiwidmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL3NwbGl0LWNvbW1hLWRlbGltaXRlZCcpLFxuICAgIGZ1bmN0aW9uQnJlYWsgPSByZXF1aXJlKCcuL2Z1bmN0aW9uLWJyZWFrJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCB0ZXJtcykge1xuICAgIHZhciBzcGxpdFZhbHVlID0ge30sXG4gICAgICAgIG51bVRlcm1zID0gdGVybXMubGVuZ3RoLFxuICAgICAgICBjb2xvcnMgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGZ1bmN0aW9uQnJlYWsodmFsdWUpKSxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBmb3IgKDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAgc3BsaXRWYWx1ZVt0ZXJtc1tpXV0gPSAoY29sb3JzW2ldICE9PSB1bmRlZmluZWQpID8gY29sb3JzW2ldIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2dldC1jb2xvci12YWx1ZXMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCArICcoJyArIHZhbHVlICsgJyknO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNvbG9yOiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiAyNTUsXG4gICAgICAgIHJvdW5kOiB0cnVlXG4gICAgfSxcbiAgICBvcGFjaXR5OiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiAxXG4gICAgfSxcbiAgICBwZXJjZW50OiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgIHVuaXQ6ICclJ1xuICAgIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBYID0gJ1gnLFxuICAgIFkgPSAnWScsXG4gICAgQUxQSEEgPSAnQWxwaGEnLFxuXG4gICAgdGVybXMgPSB7XG4gICAgICAgIGNvbG9yczogWydSZWQnLCAnR3JlZW4nLCAnQmx1ZScsIEFMUEhBXSxcbiAgICAgICAgcG9zaXRpb25zOiBbWCwgWSwgJ1onXSxcbiAgICAgICAgZGltZW5zaW9uczogWydUb3AnLCAnUmlnaHQnLCAnQm90dG9tJywgJ0xlZnQnXSxcbiAgICAgICAgc2hhZG93OiBbWCwgWSwgJ1JhZGl1cycsICdTcHJlYWQnLCAnQ29sb3InXSxcbiAgICAgICAgaHNsOiBbJ0h1ZScsICdTYXR1cmF0aW9uJywgJ0xpZ2h0bmVzcycsIEFMUEhBXVxuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0gdGVybXM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeS5qc1xuICoqLyIsIi8qXG4gICAgVXRpbGl0eSBmdW5jdGlvbnNcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIHByb3RlY3RlZFByb3BlcnRpZXMgPSBbJ3Njb3BlJywgICdkb20nXSxcbiAgICBcbiAgICBpc1Byb3RlY3RlZCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIChwcm90ZWN0ZWRQcm9wZXJ0aWVzLmluZGV4T2Yoa2V5KSAhPT0gLTEpO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuICAgICovXG4gICAgdmFyVHlwZSA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICAvKlxuICAgICAgICBJdGVyYXRlIG92ZXIgYW4gb2JqZWN0IGFuZCBmaXJlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGl0ZW0gaW4gaXRcblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFByb3BlcnRpZXNcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IENhbGxiYWNrIHRvIGZpcmVcbiAgICAqL1xuICAgIGVhY2g6IGZ1bmN0aW9uIChwcm9wcywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcyksXG4gICAgICAgICAgICBudW1LZXlzID0ga2V5cy5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1LZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSBrZXlzW2ldLFxuICAgICAgICAgICAgICAgIHByb3AgPSBwcm9wc1trZXldO1xuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2soa2V5LCBwcm9wKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSGFzIG9uZSBvYmplY3QgY2hhbmdlZCBmcm9tIHRoZSBvdGhlclxuICAgICAgICBcbiAgICAgICAgQ29tcGFyZXMgdGhlIHR3byBwcm92aWRlZCBpbnB1dHMgYW5kIHJldHVybnMgdHJ1ZSBpZiB0aGV5IGFyZSBkaWZmZXJlbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEJcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4gICAgKi9cbiAgICBoYXNDaGFuZ2VkOiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlLFxuICAgICAgICAgICAga2V5ID0gJyc7XG5cbiAgICAgICAgZm9yIChrZXkgaW4gYikge1xuICAgICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gaGFzQ2hhbmdlZDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGEgbnVtYmVyP1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuICAgICovXG4gICAgaXNOdW06IGZ1bmN0aW9uIChudW0pIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgbnVtID09PSAnbnVtYmVyJyk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhbiBvYmplY3Q/XG4gICAgICAgIFxuICAgICAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4gICAgKi9cbiAgICBpc09iajogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIElzIHRoaXMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHRoaXMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuICAgICovXG4gICAgaXNGdW5jOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiAodmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nKTsgXG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBJcyB0aGlzIHZhciBhIHN0cmluZyA/IFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiAgICAqL1xuICAgIGlzU3RyaW5nOiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHN0ciA9PT0gJ3N0cmluZycpOyBcbiAgICB9LFxuXG5cbiAgICAvKlxuICAgICAgICBJcyB0aGlzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSWYgdGhpcyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuICAgICovXG4gICAgaXNSZWxhdGl2ZVZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDApO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgSXMgdGhpcyB2YXIgYW4gYXJyYXkgPyBcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHRoaXMudmFyVHlwZSA9PT0gJ0FycmF5J1xuICAgICovXG4gICAgaXNBcnJheTogZnVuY3Rpb24gKGFycikge1xuICAgICAgICByZXR1cm4gKHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5Jyk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBDb3B5IG9iamVjdCBvciBhcnJheVxuICAgICAgICBcbiAgICAgICAgQ2hlY2tzIHdoZXRoZXIgYmFzZSBpcyBhbiBhcnJheSBvciBvYmplY3QgYW5kIG1ha2VzXG4gICAgICAgIGFwcHJvcHJpYXRlIGNvcHlcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbYXJyYXkgfHwgb2JqZWN0XTogQXJyYXkgb3Igb2JqZWN0IHRvIGNvcHlcbiAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBOZXcgY29weSBvZiBhcnJheSBvciBvYmplY3RcbiAgICAqL1xuICAgIGNvcHk6IGZ1bmN0aW9uIChiYXNlKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5pc0FycmF5KGJhc2UpKSA/IHRoaXMuY29weUFycmF5KGJhc2UpIDogdGhpcy5jb3B5T2JqZWN0KGJhc2UpO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRGVlcCBjb3B5IGFuIG9iamVjdFxuICAgICAgICBcbiAgICAgICAgSXRlcmF0ZXMgb3ZlciBhbiBvYmplY3QgYW5kIGNyZWF0ZXMgYSBuZXcgY29weSBvZiBldmVyeSBpdGVtLFxuICAgICAgICBkZWVwIGNvcHlpbmcgaWYgaXQgZmluZHMgYW55IG9iamVjdHMvYXJyYXlzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byBjb3B5XG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogTmV3IGNvcHkgb2Ygb2JqZWN0XG4gICAgKi9cbiAgICBjb3B5T2JqZWN0OiBmdW5jdGlvbiAoYmFzZSkge1xuICAgICAgICB2YXIgbmV3T2JqZWN0ID0ge307XG4gICAgICAgIFxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYmFzZSkge1xuICAgICAgICAgICAgaWYgKGJhc2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gKHRoaXMuaXNPYmooYmFzZVtrZXldKSAmJiAhaXNQcm90ZWN0ZWQoa2V5KSkgPyB0aGlzLmNvcHkoYmFzZVtrZXldKSA6IGJhc2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld09iamVjdDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIERlZXAgY29weSBhbiBhcnJheVxuICAgICAgICBcbiAgICAgICAgTG9vcHMgdGhyb3VnaCBhbiBhcnJheSBhbmQgY3JlYXRlcyBhIG5ldyBjb3B5IG9mIGV2ZXJ5IGl0ZW0sXG4gICAgICAgIGRlZXAgY29weWluZyBpZiBpdCBmaW5kcyBhbnkgb2JqZWN0cy9hcnJheXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbYXJyYXldOiBBcnJheSB0byBjb3B5XG4gICAgICAgIEByZXR1cm4gW2FycmF5XTogTmV3IGNvcHkgb2YgYXJyYXlcbiAgICAqL1xuICAgIGNvcHlBcnJheTogZnVuY3Rpb24gKGJhc2UpIHtcbiAgICAgICAgdmFyIG5ld0FycmF5ID0gW10sXG4gICAgICAgICAgICBsZW5ndGggPSBiYXNlLmxlbmd0aCxcbiAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICBcbiAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV3QXJyYXlbaV0gPSBiYXNlW2ldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBOb24tZGVzdHJ1Y3RpdmUgbWVyZ2Ugb2Ygb2JqZWN0IG9yIGFycmF5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byB1c2UgYXMgYmFzZVxuICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byBvdmVyd3JpdGUgYmFzZSB3aXRoXG4gICAgICAgIEByZXR1cm4gW2FycmF5IHx8IG9iamVjdF06IE5ldyBhcnJheSBvciBvYmplY3RcbiAgICAqL1xuICAgIG1lcmdlOiBmdW5jdGlvbiAoYmFzZSwgb3ZlcndyaXRlKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5pc0FycmF5KGJhc2UpKSA/IHRoaXMuY29weUFycmF5KG92ZXJ3cml0ZSkgOiB0aGlzLm1lcmdlT2JqZWN0KGJhc2UsIG92ZXJ3cml0ZSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBOb24tZGVzdHJ1Y3RpdmUgbWVyZ2Ugb2Ygb2JqZWN0XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byB1c2UgYXMgYmFzZVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byBvdmVyd3JpdGUgYmFzZSB3aXRoXG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE5ldyBvYmplY3RcbiAgICAqL1xuICAgIG1lcmdlT2JqZWN0OiBmdW5jdGlvbiAoYmFzZSwgb3ZlcndyaXRlKSB7XG4gICAgICAgIHZhciBoYXNCYXNlID0gdGhpcy5pc09iaihiYXNlKSxcbiAgICAgICAgICAgIG5ld09iamVjdCA9IGhhc0Jhc2UgPyB0aGlzLmNvcHkoYmFzZSkgOiB0aGlzLmNvcHkob3ZlcndyaXRlKSxcbiAgICAgICAgICAgIGtleSA9ICcnO1xuXG4gICAgICAgIGlmIChoYXNCYXNlKSB7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBvdmVyd3JpdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAob3ZlcndyaXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSAodGhpcy5pc09iaihvdmVyd3JpdGVba2V5XSkgJiYgIWlzUHJvdGVjdGVkKGtleSkpID8gdGhpcy5tZXJnZShiYXNlW2tleV0sIG92ZXJ3cml0ZVtrZXldKSA6IG92ZXJ3cml0ZVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgICAgICAgXG4gICAgICAgICAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgICAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiAgICAqL1xuICAgIHNwbGl0VmFsVW5pdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGxldCBzcGxpdFZhbCA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogc3BsaXRWYWxbMV0sXG4gICAgICAgICAgICB1bml0OiAgc3BsaXRWYWxbMl1cbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4gICAgKi9cbiAgICBzdGVwUHJvZ3Jlc3M6IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RlcHMpIHtcbiAgICAgICAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSksXG4gICAgICAgICAgICB0YXJnZXQgPSAxIC0gKDEgLyBzdGVwcyksXG4gICAgICAgICAgICBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuICAgICovXG4gICAgY3VycmVudFRpbWU6IGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiKSA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfVxuICAgIFxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmMvdXRpbHMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgPyB2YWx1ZS5zcGxpdCgnICcpIDogW3ZhbHVlXTtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL3NwbGl0LXNwYWNlLWRlbGltaXRlZC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2gsXG4gICAgdHJhbnNmb3JtRGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtLWRpY3Rpb25hcnknKSxcbiAgICB0cmFuc2Zvcm1Qcm9wcyA9IHRyYW5zZm9ybURpY3Rpb25hcnkucHJvcHMsXG5cbiAgICBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3V0cHV0LCBjYWNoZSkge1xuICAgIHZhciBjc3MgPSB7fSxcbiAgICAgICAgdHJhbnNmb3JtID0gJycsXG4gICAgICAgIHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcbiAgICAgICAgXG4gICAgLy8gTG9vcCB0aHJvdWdoIG91dHB1dCwgY2hlY2sgZm9yIHRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgZWFjaChvdXRwdXQsIGZ1bmN0aW9uIChrZXksIHJ1bGUpIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHRyYW5zZm9ybSBwcm9wZXJ0eSwgYWRkIHRvIHRyYW5zZm9ybSBzdHJpbmdcbiAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybSArPSBrZXkgKyAnKCcgKyBydWxlICsgJyknO1xuICAgICAgICAgICAgdHJhbnNmb3JtSGFzWiA9IChrZXkgPT09IFRSQU5TTEFURV9aKSA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgICAgICBcbiAgICAgICAgLy8gT3IganVzdCBhc3NpZ24gZGlyZWN0bHlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChydWxlICE9PSBjYWNoZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVba2V5XSA9IGNzc1trZXldID0gcnVsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSB0cmFuc2Zvcm0gcHJvcGVydGllcywgYWRkIHRyYW5zbGF0ZVpcbiAgICBpZiAodHJhbnNmb3JtICE9PSAnJykge1xuICAgICAgICBpZiAoIXRyYW5zZm9ybUhhc1opIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybSArPSAnICcgKyBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhbnNmb3JtICE9PSBjYWNoZS50cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIGNzcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNhY2hlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9jc3MvYnVpbGQuanNcbiAqKi8iLCJ2YXIgVFJBTlNMQVRFID0gJ3RyYW5zbGF0ZSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHg6IFRSQU5TTEFURSArICdYJyxcbiAgICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gICAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL2Nzcy9tYXAuanNcbiAqKi8iLCJ2YXIgQ09MT1IgPSAnY29sb3InLFxuICAgIFBPU0lUSU9OUyA9ICdwb3NpdGlvbnMnLFxuICAgIERJTUVOU0lPTlMgPSAnZGltZW5zaW9ucycsXG4gICAgU0hBRE9XID0gJ3NoYWRvdycsXG4gICAgQU5HTEUgPSAnYW5nbGUnLFxuICAgIEFMUEhBID0gJ2FscGhhJyxcbiAgICBQWCA9ICdweCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8vIENvbG9yIHByb3BlcnRpZXNcbiAgICBjb2xvcjogQ09MT1IsXG4gICAgYmFja2dyb3VuZENvbG9yOiBDT0xPUixcbiAgICBvdXRsaW5lQ29sb3I6IENPTE9SLFxuICAgIGZpbGw6IENPTE9SLFxuICAgIHN0cm9rZTogQ09MT1IsXG4gICAgLy8gQm9yZGVyXG4gICAgYm9yZGVyQ29sb3I6IENPTE9SLFxuICAgIGJvcmRlclRvcENvbG9yOiBDT0xPUixcbiAgICBib3JkZXJSaWdodENvbG9yOiBDT0xPUixcbiAgICBib3JkZXJCb3R0b21Db2xvcjogQ09MT1IsXG4gICAgYm9yZGVyTGVmdENvbG9yOiBDT0xPUixcbiAgICBib3JkZXJSYWRpdXM6IFBYLFxuICAgIC8vIERpbWVuc2lvbnNcbiAgICBtYXJnaW46IERJTUVOU0lPTlMsXG4gICAgcGFkZGluZzogRElNRU5TSU9OUyxcbiAgICB3aWR0aDogUFgsXG4gICAgaGVpZ2h0OiBQWCwgICAgXG4gICAgLy8gUG9zaXRpb25zXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBQT1NJVElPTlMsXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46IFBPU0lUSU9OUyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IFBPU0lUSU9OUywgICAgXG4gICAgLy8gU2hhZG93c1xuICAgIHRleHRTaGFkb3c6IFNIQURPVyxcbiAgICBib3hTaGFkb3c6IFNIQURPVywgICAgXG4gICAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgICByb3RhdGU6IEFOR0xFLFxuICAgIHJvdGF0ZVg6IEFOR0xFLFxuICAgIHJvdGF0ZVk6IEFOR0xFLFxuICAgIHJvdGF0ZVo6IEFOR0xFLFxuICAgIHNrZXdYOiBBTkdMRSxcbiAgICBza2V3WTogQU5HTEUsXG4gICAgdHJhbnNsYXRlWDogUFgsXG4gICAgdHJhbnNsYXRlWTogUFgsXG4gICAgdHJhbnNsYXRlWjogUFgsXG4gICAgcGVyc3BlY3RpdmU6IFBYLFxuICAgIG9wYWNpdHk6IEFMUEhBXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL2Nzcy90eXBlLW1hcC5qc1xuICoqLyIsInZhciBlYWNoID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuZWFjaCxcbiAgICB0cmFuc2Zvcm1EaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1kaWN0aW9uYXJ5JyksXG4gICAgdHJhbnNmb3JtUHJvcHMgPSB0cmFuc2Zvcm1EaWN0aW9uYXJ5LnByb3BzLFxuICAgIHplcm9Ob3RaZXJvID0gMC4wMDAxO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvdXRwdXQsIG9yaWdpbikge1xuICAgIHZhciBwcm9wcyA9IHt9LFxuICAgICAgICBoYXNUcmFuc2Zvcm0gPSBmYWxzZSxcbiAgICAgICAgc2NhbGUgPSBvdXRwdXQuc2NhbGUgIT09IHVuZGVmaW5lZCA/IG91dHB1dC5zY2FsZSB8fCB6ZXJvTm90WmVybyA6IG91dHB1dC5zY2FsZVggfHwgMSxcbiAgICAgICAgc2NhbGVZID0gb3V0cHV0LnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gb3V0cHV0LnNjYWxlWSB8fCB6ZXJvTm90WmVybyA6IHNjYWxlIHx8IDEsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblggPSBvcmlnaW4ueCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luWSA9IG9yaWdpbi55LFxuICAgICAgICBzY2FsZVRyYW5zZm9ybVggPSAtIHRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1ZID0gLSB0cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpLFxuICAgICAgICBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlLFxuICAgICAgICBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWSxcbiAgICAgICAgdHJhbnNmb3JtID0ge1xuICAgICAgICAgICAgdHJhbnNsYXRlOiBgdHJhbnNsYXRlKCR7b3V0cHV0LnRyYW5zbGF0ZVh9LCAke291dHB1dC50cmFuc2xhdGVZfSkgYCxcbiAgICAgICAgICAgIHNjYWxlOiBgdHJhbnNsYXRlKCR7c2NhbGVUcmFuc2Zvcm1YfSwgJHtzY2FsZVRyYW5zZm9ybVl9KSBzY2FsZSgke3NjYWxlfSwgJHtzY2FsZVl9KSB0cmFuc2xhdGUoJHtzY2FsZVJlcGxhY2VYfSwgJHtzY2FsZVJlcGxhY2VZfSkgYCxcbiAgICAgICAgICAgIHJvdGF0ZTogYHJvdGF0ZSgke291dHB1dC5yb3RhdGV9LCAke3RyYW5zZm9ybU9yaWdpblh9LCAke3RyYW5zZm9ybU9yaWdpbll9KSBgLFxuICAgICAgICAgICAgc2tld1g6IGBza2V3WCgke291dHB1dC5za2V3WH0pIGAsXG4gICAgICAgICAgICBza2V3WTogYHNrZXdZKCR7b3V0cHV0LnNrZXdZfSkgYFxuICAgICAgICB9O1xuXG4gICAgZWFjaChvdXRwdXQsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvcHNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAgIGVhY2godHJhbnNmb3JtLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IChrZXkgPT09ICdzY2FsZScpID8gJzEnIDogJzAnO1xuICAgICAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHZhbHVlLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHM7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL3N2Zy9idWlsZC5qc1xuICoqLyIsInZhciBDT0xPUiA9ICdjb2xvcicsXG4gICAgU0NBTEUgPSAnc2NhbGUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmaWxsOiBDT0xPUixcbiAgICBzdHJva2U6IENPTE9SLFxuICAgIHNjYWxlOiBTQ0FMRSxcbiAgICBzY2FsZVg6IFNDQUxFLFxuICAgIHNjYWxlWTogU0NBTEUsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAncG9zaXRpb25zJyxcbiAgICBkOiAnY29tcGxleCdcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvc3ZnL3R5cGUtbWFwLmpzXG4gKiovIiwidmFyIFNUUk9LRSA9ICdzdHJva2UnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBvcGFjaXR5OiBTVFJPS0UgKyAnLW9wYWNpdHknLFxuICAgIHdpZHRoOiBTVFJPS0UgKyAnLXdpZHRoJyxcbiAgICBtaXRlcmxpbWl0OiBTVFJPS0UgKyAnLW1pdGVybGltaXQnXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL3BhdGgvbWFwLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH07XG5cblF1ZXVlLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBBZGQgYSBzZXQgb2YgYXJndW1lbnRzIHRvIHF1ZXVlXG4gICAgKi9cbiAgICBhZGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgbmV4dCBzZXQgb2YgYXJndW1lbnRzIGZyb20gcXVldWVcbiAgICAqL1xuICAgIG5leHQ6IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gdGhpcy5xdWV1ZSxcbiAgICAgICAgICAgIHJldHVyblZhbCA9IGZhbHNlLFxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgXG4gICAgICAgIGRpcmVjdGlvbiA9IChhcmd1bWVudHMubGVuZ3RoKSA/IGRpcmVjdGlvbiA6IDE7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiBvdXIgaW5kZXggaXMgYmV0d2VlbiAwIGFuZCB0aGUgcXVldWUgbGVuZ3RoLCByZXR1cm4gdGhhdCBpdGVtXG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgcXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm5WYWwgPSBxdWV1ZVtpbmRleF07XG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXggKyBkaXJlY3Rpb247XG4gICAgICAgIFxuICAgICAgICAvLyBPciBjbGVhclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBSZXBsYWNlIHF1ZXVlIHdpdGggZW1wdHkgYXJyYXlcbiAgICAqL1xuICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWV1ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmMvUXVldWUuanNcbiAqKi8iLCIvKlxuICAgIEBwYXJhbSBbc3RyaW5nIHx8IE5vZGVMaXN0IHx8IGpRdWVyeSBvYmplY3RdOlxuICAgICAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdCB8fCBqUXVlcnkgb2JqZWN0LlxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgdmFyIG5vZGVzID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgOiBzZWxlY3RvcixcbiAgICAgICAgZWxlbWVudHMgPSBbXTtcblxuICAgIC8vIElmIGpRdWVyeSBzZWxlY3Rpb24sIGdldCBhcnJheSBvZiBFbGVtZW50c1xuICAgIGlmIChub2Rlcy5nZXQpIHtcbiAgICAgICAgZWxlbWVudHMgPSBub2Rlcy5nZXQoKTtcblxuICAgIC8vIE9yIGNvbnZlcnQgTm9kZUxpc3QgdG8gYXJyYXlcbiAgICB9IGVsc2UgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgICBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwobm9kZXMpO1xuXG4gICAgLy8gT3IgaWYgaXQncyBqdXN0IGFuIEVsZW1lbnQsIHB1dCBpbnRvIGFycmF5XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudHMucHVzaChub2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmMvc2VsZWN0LWRvbS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdmFsdWVUeXBlTWFuYWdlciA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL21hbmFnZXInKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoLFxuICAgIEFjdGlvbiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvQWN0aW9uJyksXG4gICAgZGVmYXVsdEFjdGlvbiA9IG5ldyBBY3Rpb24oKSxcbiAgICBXYXRjaCA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvV2F0Y2gnKSxcbiAgICB3YXRjaGVyID0gbmV3IFdhdGNoKCksXG5cbiAgICBjcmVhdGVNYXBwZXIgPSBmdW5jdGlvbiAocm9sZSwgbWFwcGVkVmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobmFtZSwgdmFsKSB7XG4gICAgICAgICAgICBtYXBwZWRWYWx1ZXNbcm9sZS5tYXAobmFtZSldID0gdmFsO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBDaGVjayBhbGwgQWN0aW9ucyBmb3IgYG9uRW5kYCwgcmV0dXJuIHRydWUgaWYgYWxsIGFyZSB0cnVlXG5cbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHBhcmFtIFtib29sZWFuXVxuICAgICAgICBAcmV0dXJucyBbYm9vbGVhbl1cbiAgICAqL1xuICAgIGNoZWNrQWxsQWN0aW9uc0hhdmVFbmRlZCA9IGZ1bmN0aW9uIChhY3RvciwgaGFzQ2hhbmdlZCkge1xuICAgICAgICB2YXIgaGFzRW5kZWQgPSB0cnVlLFxuICAgICAgICAgICAgdmFsdWVzID0gYWN0b3Iuc3RhdGUudmFsdWVzO1xuXG4gICAgICAgIGVhY2goYWN0b3IuYWN0aXZlQWN0aW9ucywgKGtleSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAvLyBSZXR1cm4gaWYgYWN0aW9uIGhhcyBiZWVuIGRlbGV0ZWQgZWxzZXdoZXJlXG4gICAgICAgICAgICBpZiAoIWFjdGlvbikgeyByZXR1cm47IH1cblxuICAgICAgICAgICAgaWYgKGFjdGlvbi5vbkZyYW1lKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLm9uRnJhbWUuY2FsbChhY3RvciwgdmFsdWVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFjdGlvbi5vblVwZGF0ZSAmJiBoYXNDaGFuZ2VkKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLm9uVXBkYXRlLmNhbGwoYWN0b3IsIHZhbHVlcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhY3Rpb24uaGFzRW5kZWQgJiYgYWN0aW9uLmhhc0VuZGVkKGFjdG9yLCBoYXNDaGFuZ2VkKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBoYXNFbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uLm9uQ29tcGxldGUuY2FsbChhY3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFjdG9yLnVuYmluZEFjdGlvbihrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaGFzRW5kZWQ7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFVwZGF0ZSB0aGUgQWN0b3IgYW5kIGl0cyB2YWx1ZXNcblxuICAgICAgICBAcGFyYW0gW2ludF06IFRpbWVzdGFtcCBvZiByQUYgY2FsbFxuICAgICAgICBAcGFyYW0gW2ludF06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuICAgICovXG4gICAgdXBkYXRlID0gZnVuY3Rpb24gKGZyYW1lc3RhbXAsIGZyYW1lRHVyYXRpb24pIHtcbiAgICAgICAgdmFyIG51bUFjdGl2ZVZhbHVlcyA9IHRoaXMuYWN0aXZlVmFsdWVzLmxlbmd0aCxcbiAgICAgICAgICAgIG51bUFjdGl2ZVBhcmVudHMgPSB0aGlzLmFjdGl2ZVBhcmVudHMubGVuZ3RoLFxuICAgICAgICAgICAgbnVtUm9sZXMgPSB0aGlzLnJvbGVzLmxlbmd0aCxcbiAgICAgICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBVcGRhdGUgdmFsdWVzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQWN0aXZlVmFsdWVzOyBpKyspIHtcbiAgICAgICAgICAgIC8vIEdldCB2YWx1ZSBhbmQga2V5XG4gICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5hY3RpdmVWYWx1ZXNbaV07XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgbGV0IGFjdGlvbiA9ICghdmFsdWUuYWN0aW9uIHx8IHZhbHVlLmFjdGlvbiAmJiAhdmFsdWUuYWN0aW9uLmlzQWN0aXZlKSA/IGRlZmF1bHRBY3Rpb24gOiB2YWx1ZS5hY3Rpb247XG5cbiAgICAgICAgICAgIC8vIEZpcmUgYWN0aW9uIG9uRnJhbWVTdGFydCBpZiBub3QgYWxyZWFkeSBmaXJlZFxuICAgICAgICAgICAgaWYgKGFjdGlvbi5vbkZyYW1lU3RhcnQgJiYgYWN0aW9uLmxhc3RVcGRhdGUgIT09IGZyYW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24ub25GcmFtZVN0YXJ0KHRoaXMsIGZyYW1lRHVyYXRpb24sIGZyYW1lc3RhbXApO1xuICAgICAgICAgICAgICAgIGFjdGlvbi5sYXN0VXBkYXRlID0gZnJhbWVzdGFtcDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIG5ldyB2YWx1ZVxuICAgICAgICAgICAgbGV0IHVwZGF0ZWRWYWx1ZSA9IHV0aWxzLmlzU3RyaW5nKHZhbHVlLndhdGNoKSA/IHdhdGNoZXIucHJvY2Vzcyh0aGlzLCB2YWx1ZSkgOiBhY3Rpb24ucHJvY2Vzcyh0aGlzLCB2YWx1ZSwga2V5LCBmcmFtZUR1cmF0aW9uKTtcblxuICAgICAgICAgICAgLy8gTGltaXQgaWYgdGhpcyBhY3Rpb24gZG9lcyB0aGF0IGtpbmQgb2YgdGhpbmdcbiAgICAgICAgICAgIGlmIChhY3Rpb24ubGltaXQgJiYgdmFsdWUuaGFzUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBhY3Rpb24ubGltaXQodXBkYXRlZFZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIHZhbHVlIGlmIHJvdW5kIGlzIHRydWVcbiAgICAgICAgICAgIGlmICh2YWx1ZS5yb3VuZCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IE1hdGgucm91bmQodXBkYXRlZFZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIGZyYW1lQ2hhbmdlXG4gICAgICAgICAgICB2YWx1ZS5mcmFtZUNoYW5nZSA9IHVwZGF0ZWRWYWx1ZSAtIHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB2ZWxvY2l0eSBpZiBBY3Rpb24gaGFzbid0XG4gICAgICAgICAgICBpZiAoIWFjdGlvbi5jYWxjdWxhdGVzVmVsb2NpdHkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IGNhbGMuc3BlZWRQZXJTZWNvbmQodmFsdWUuZnJhbWVDaGFuZ2UsIGZyYW1lRHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgY3VycmVudCBzcGVlZFxuICAgICAgICAgICAgdmFsdWUuc3BlZWQgPSBNYXRoLmFicyh2YWx1ZS52ZWxvY2l0eSk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHZhbHVlJ3MgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT09IHVwZGF0ZWRWYWx1ZSB8fCB0aGlzLmZpcnN0RnJhbWUpIHtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IG5ldyBjdXJyZW50IFxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHVwZGF0ZWRWYWx1ZTtcbiAgICAgICAgICAgIGxldCB2YWx1ZVN0YXRlID0gKHZhbHVlLnVuaXQpID8gdXBkYXRlZFZhbHVlICsgdmFsdWUudW5pdCA6IHVwZGF0ZWRWYWx1ZTtcblxuICAgICAgICAgICAgLy8gUHV0IHZhbHVlIGluIHN0YXRlIGlmIG5vIHBhcmVudFxuICAgICAgICAgICAgaWYgKCF2YWx1ZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS52YWx1ZXNba2V5XSA9IHZhbHVlU3RhdGU7XG5cbiAgICAgICAgICAgIC8vIE9yLCBhZGQgdG8gcGFyZW50IHN0YXRlIHRvIGJlIGNvbWJpbmVkIGxhdGVyXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlW3ZhbHVlLnBhcmVudF0gPSBzdGF0ZVt2YWx1ZS5wYXJlbnRdIHx8IHt9O1xuICAgICAgICAgICAgICAgIHN0YXRlW3ZhbHVlLnBhcmVudF1bdmFsdWUucHJvcE5hbWVdID0gdmFsdWVTdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWVzIGZyb20gY2FsY3VsYXRlZCBjaGlsZHJlblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUFjdGl2ZVBhcmVudHM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMuYWN0aXZlUGFyZW50c1tpXTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWUgY3VycmVudCBwcm9wZXJ0eVxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlVHlwZU1hbmFnZXJbdmFsdWUudHlwZV0uY29tYmluZShzdGF0ZVtrZXldLCB2YWx1ZS50ZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBzdGF0ZVxuICAgICAgICAgICAgc3RhdGUudmFsdWVzW2tleV0gPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyZSBgZnJhbWVgIGFuZCBgdXBkYXRlYCBjYWxsYmFja3Mgb24gYWxsIFJvbGVzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUm9sZXM7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvbGUgPSB0aGlzLnJvbGVzW2ldO1xuICAgICAgICAgICAgbGV0IG1hcHBlZFZhbHVlcyA9IHt9O1xuXG4gICAgICAgICAgICBlYWNoKHN0YXRlLnZhbHVlcywgY3JlYXRlTWFwcGVyKHJvbGUsIG1hcHBlZFZhbHVlcykpO1xuXG4gICAgICAgICAgICBpZiAocm9sZS5mcmFtZSkge1xuICAgICAgICAgICAgICAgIHJvbGUuZnJhbWUuY2FsbCh0aGlzLCBtYXBwZWRWYWx1ZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocm9sZS51cGRhdGUgJiYgaGFzQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIHJvbGUudXBkYXRlLmNhbGwodGhpcywgbWFwcGVkVmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc2V0IGhhc0NoYW5nZWQgYmVmb3JlIGZ1cnRoZXIgQWN0aW9ucyBtaWdodCBhZmZlY3QgdGhpc1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoY2hlY2tBbGxBY3Rpb25zSGF2ZUVuZGVkKHRoaXMsIGhhc0NoYW5nZWQpKSB7XG4gICAgICAgICAgICAgICAgLy8gRmlyZSBgY29tcGxldGVgIGNhbGxiYWNrc1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUm9sZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IHRoaXMucm9sZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb2xlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlLmNvbXBsZXRlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0RnJhbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmZyYW1lc3RhbXAgPSBmcmFtZXN0YW1wO1xuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0gdXBkYXRlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdG9yL3VwZGF0ZS5qc1xuICoqLyIsInZhciB2YWx1ZVR5cGVzTWFuYWdlciA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL21hbmFnZXInKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIGlzTnVtID0gdXRpbHMuaXNOdW0sXG4gICAgZWFjaCA9IHV0aWxzLmVhY2g7XG5cbmNvbnN0IG51bWVyaWNhbFZhbHVlcyA9IFsnY3VycmVudCcsICd0bycsICdtaW4nLCAnbWF4JywgJ3ZlbG9jaXR5JywgJ2ZyaWN0aW9uJywgJ3NwcmluZyddLFxuICAgIG51bU51bWVyaWNhbFZhbHVlcyA9IG51bWVyaWNhbFZhbHVlcy5sZW5ndGgsXG4gICAgZGVmYXVsdFZhbHVlID0ge1xuICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICB2ZWxvY2l0eTogMCxcbiAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgIGZyYW1lQ2hhbmdlOiAwXG4gICAgfTtcblxuZnVuY3Rpb24gY2hlY2tOdW1lcmljYWxWYWx1ZShuYW1lKSB7XG4gICAgcmV0dXJuIChudW1lcmljYWxWYWx1ZXMuaW5kZXhPZihuYW1lKSA+IC0xKTtcbn1cblxuLypcbiAgICBDaGVjayBSb2xlIHR5cGVNYXBzIHRvIHNlZSBpZiB0aGlzIHZhbHVlIG5hbWUgaGFzIGJlZW4gbWFwcGVkXG4gICAgdG8gYSBzcGVjaWZpYyB2YWx1ZSB0eXBlXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEByZXR1cm5zIFtzdHJpbmddOiBWYWx1ZSB0eXBlXG4qL1xuZnVuY3Rpb24gY2hlY2tSb2xlcyhuYW1lLCByb2xlcykge1xuICAgIHZhciB2YWx1ZVR5cGU7XG5cbiAgICBlYWNoKHJvbGVzLCAoa2V5LCByb2xlKSA9PiB7XG4gICAgICAgIGlmIChyb2xlLl90eXBlTWFwKSB7XG4gICAgICAgICAgICB2YWx1ZVR5cGUgPSByb2xlLl90eXBlTWFwW3JvbGUubWFwKG5hbWUpXSB8fCB2YWx1ZVR5cGU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YWx1ZVR5cGU7XG59XG5cbi8qXG4gICAgQ2hlY2sgdmFsdWUgZm9yIHNwZWNpYWwgdHlwZVxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybnMgW3N0cmluZyB8fCBmYWxzZV1cbiovXG5mdW5jdGlvbiBjaGVja1ZhbHVlVHlwZShleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSwgc2NvcGUsIHZhbHVlTmFtZSkge1xuICAgIHZhciB2YWx1ZVR5cGU7XG5cbiAgICAvLyBDaGVjayBleGlzdGluZyB2YWx1ZSBmb3IgdHlwZSBhbHJlYWR5IHNldFxuICAgIGlmIChleGlzdGluZ1ZhbHVlICYmIGV4aXN0aW5nVmFsdWUudHlwZSkge1xuICAgICAgICB2YWx1ZVR5cGUgPSBleGlzdGluZ1ZhbHVlLnR5cGU7XG4gICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3IgY2hlY2sgUm9sZSBfdHlwZU1hcCBwcm9wZXJ0aWVzXG4gICAgICAgIGlmIChzY29wZS5yb2xlcykge1xuICAgICAgICAgICAgdmFsdWVUeXBlID0gY2hlY2tSb2xlcyh2YWx1ZU5hbWUsIHNjb3BlLnJvbGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbmFsbHkgcnVuIHRlc3RzXG4gICAgICAgIGlmICghdmFsdWVUeXBlICYmIHV0aWxzLmlzU3RyaW5nKG5ld1ZhbHVlLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZVR5cGVzTWFuYWdlci50ZXN0KG5ld1ZhbHVlLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlVHlwZTtcbn1cblxuLypcbiAgICBSZXNvbHZlIGEgcHJvcGVydHlcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uIHx8IG51bWJlcl1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcmV0dXJucyBbbnVtYmVyXVxuKi9cbmZ1bmN0aW9uIHJlc29sdmUobmFtZSwgcHJvcCwgdmFsdWUsIHNjb3BlKSB7XG4gICAgbGV0IGlzTnVtZXJpY2FsVmFsdWUgPSBjaGVja051bWVyaWNhbFZhbHVlKG5hbWUpO1xuXG4gICAgLy8gSWYgZnVuY3Rpb24sIHJlc29sdmVcbiAgICBpZiAodXRpbHMuaXNGdW5jKHByb3ApICYmIGlzTnVtZXJpY2FsVmFsdWUpIHtcbiAgICAgICAgcHJvcCA9IHByb3AuY2FsbChzY29wZSwgc2NvcGUpO1xuICAgIH1cblxuICAgIC8vIElmIHN0cmluZywgY2hlY2sgZm9yIHJlbGF0aXZlIG51bWJlcnMgYW5kIHVuaXRzXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKHByb3ApKSB7XG4gICAgICAgIC8vIElmIHJlbGF0aXZlIHZhbHVlXG4gICAgICAgIGlmIChwcm9wLmluZGV4T2YoJz0nKSA+IDApIHtcbiAgICAgICAgICAgIHByb3AgPSBjYWxjLnJlbGF0aXZlVmFsdWUodmFsdWUuY3VycmVudCwgcHJvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB1bml0XG4gICAgICAgIGlmIChpc051bWVyaWNhbFZhbHVlKSB7XG4gICAgICAgICAgICBzcGxpdFVuaXQocHJvcCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtZXJpY2FsVmFsdWUpIHtcbiAgICAgICAgcHJvcCA9IHBhcnNlRmxvYXQocHJvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG59XG5cbi8qXG4gICAgU3BsaXQgYSB2YWx1ZSBpbnRvIHN1Yi12YWx1ZXNcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbdmFsdWVUeXBlSGFuZGxlcl1cbiAgICBAcmV0dXJucyBbb2JqZWN0XVxuKi9cbmZ1bmN0aW9uIHNwbGl0KG5hbWUsIHZhbHVlLCBzY29wZSwgdmFsdWVUeXBlSGFuZGxlcikge1xuICAgIHZhciBzcGxpdFZhbHVlcyA9IHt9LFxuICAgICAgICBpID0gMDtcblxuICAgIGZvciAoOyBpIDwgbnVtTnVtZXJpY2FsVmFsdWVzOyBpKyspIHtcbiAgICAgICAgbGV0IHByb3BOYW1lID0gbnVtZXJpY2FsVmFsdWVzW2ldO1xuICAgICAgICBsZXQgc3BsaXRQcm9wID0ge307XG5cbiAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlUHJvcCA9IHZhbHVlW3Byb3BOYW1lXTtcblxuICAgICAgICAgICAgLy8gSWYgd2UgbmVlZCB0byBmaXJzdCByZXNvbHZlIHRoaXMsIHJlc29sdmVcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmModmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlUHJvcCA9IHZhbHVlUHJvcC5jYWxsKHNjb3BlLCBzY29wZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdXRpbHMuaXNTdHJpbmcodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGxpdFByb3AgPSB2YWx1ZVR5cGVIYW5kbGVyLnNwbGl0KHZhbHVlUHJvcCk7XG5cbiAgICAgICAgICAgIC8vIEFzc2lnbiBzcGxpdCBwcm9wZXJ0aWVzIHRvIGVhY2ggY2hpbGQgdmFsdWVcbiAgICAgICAgICAgIGVhY2goc3BsaXRQcm9wLCAoa2V5LCBwcm9wKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyB2YWx1ZSBpZiBub25lIGV4aXN0c1xuICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVzW2tleV0gPSBzcGxpdFZhbHVlc1trZXldIHx8IHV0aWxzLmNvcHkodmFsdWVUeXBlc01hbmFnZXIuZGVmYXVsdFByb3BzKHZhbHVlLnR5cGUsIGtleSkpO1xuICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVzW2tleV1bcHJvcE5hbWVdID0gcHJvcDtcblxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhzcGxpdFByb3Bba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRVbml0KHNwbGl0VmFsdWVzW2tleV1bcHJvcE5hbWVdLCBzcGxpdFZhbHVlc1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzcGxpdFZhbHVlcztcbn1cblxuLypcbiAgICBTcGxpdCB2YWx1ZSBpbnRvIG51bWJlciBhbmQgdW5pdCwgYW5kIHNldCB1bml0IHRvIHZhbHVlXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW29iamVjdF1cbiovXG5mdW5jdGlvbiBzcGxpdFVuaXQocHJvcGVydHksIGhvc3RWYWx1ZSkge1xuICAgIGlmICh1dGlscy5pc051bShwcm9wZXJ0eSkpIHsgcmV0dXJuIHByb3BlcnR5OyB9XG4gICAgbGV0IHJldHVyblZhbCA9IHByb3BlcnR5LFxuICAgICAgICB7IHZhbHVlLCB1bml0IH0gPSB1dGlscy5zcGxpdFZhbFVuaXQocHJvcGVydHkpO1xuXG4gICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuVmFsID0gdmFsdWU7XG4gICAgICAgIGlmICh1bml0KSB7XG4gICAgICAgICAgICBob3N0VmFsdWUudW5pdCA9IHVuaXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0dXJuVmFsO1xufVxuXG4vKlxuICAgIFByZXByb2Nlc3MgaW5jb21pbmcgdmFsdWVzLCBzcGxpdHRpbmcgbm9uLW51bWVyaWNhbCB2YWx1ZXNcbiAgICBpbnRvIHN1Yi12YWx1ZXMgaWUgaGV4XG5cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW3N0cmluZ11cbiovXG5mdW5jdGlvbiBwcmVwcm9jZXNzKGV4aXN0aW5nLCBpbmNvbWluZywgc2NvcGUsIGRlZmF1bHRQcm9wKSB7XG4gICAgdmFyIHZhbHVlcyA9IHt9O1xuXG4gICAgZWFjaChpbmNvbWluZywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGV4aXN0aW5nVmFsdWUgPSBleGlzdGluZ1trZXldLFxuICAgICAgICAgICAgbmV3VmFsdWUgPSB7fTtcblxuICAgICAgICBpZiAodXRpbHMuaXNPYmoodmFsdWUpKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VmFsdWVbZGVmYXVsdFByb3BdID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB2YWx1ZSBkb2Vzbid0IGhhdmUgYSBzcGVjaWFsIHR5cGUsIGNoZWNrIGZvciBvbmVcbiAgICAgICAgbmV3VmFsdWUudHlwZSA9IGNoZWNrVmFsdWVUeXBlKGV4aXN0aW5nVmFsdWUsIG5ld1ZhbHVlLCBzY29wZSwga2V5KTtcbiAgICAgICAgbmV3VmFsdWUud2F0Y2ggPSB1dGlscy5pc1N0cmluZyhuZXdWYWx1ZS53YXRjaCkgPyBuZXdWYWx1ZS53YXRjaCA6IHVuZGVmaW5lZDtcblxuICAgICAgICB2YWx1ZXNba2V5XSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSB0eXBlIHByb3BlcnR5LCBzcGxpdC9hc3NpZ24gZGVmYXVsdCBwcm9wc1xuICAgICAgICBpZiAobmV3VmFsdWUudHlwZSkge1xuICAgICAgICAgICAgbGV0IHR5cGVIYW5kbGVyID0gdmFsdWVUeXBlc01hbmFnZXJbbmV3VmFsdWUudHlwZV07XG5cbiAgICAgICAgICAgIC8vIElmIHZhbHVlVHlwZSBoYW5kbGVyIGhhcyBhIHNwbGl0IGZ1bmN0aW9uLCBzcGxpdCB0aGlzIHZhbHVlXG4gICAgICAgICAgICBpZiAodHlwZUhhbmRsZXIuc3BsaXQpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRWYWx1ZXMgPSBzcGxpdChrZXksIG5ld1ZhbHVlLCBzY29wZSwgdHlwZUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0ge307XG5cbiAgICAgICAgICAgICAgICBlYWNoKHNwbGl0VmFsdWVzLCAoY2hpbGROYW1lLCBjaGlsZFZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWUgPSB1dGlscy5tZXJnZShuZXdWYWx1ZSwgY2hpbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWUucGFyZW50ID0gY2hpbGRWYWx1ZS5uYW1lID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlLnByb3BOYW1lID0gY2hpbGROYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjaGlsZFZhbHVlLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjaGlsZFZhbHVlLmNoaWxkcmVuO1xuXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuW2NoaWxkTmFtZV0gPSB2YWx1ZXNba2V5ICsgY2hpbGROYW1lXSA9IGNoaWxkVmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZUhhbmRsZXIudGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudGVtcGxhdGUgPSBleGlzdGluZ1ZhbHVlID8gZXhpc3RpbmdWYWx1ZS50ZW1wbGF0ZSA6IHR5cGVIYW5kbGVyLnRlbXBsYXRlKG5ld1ZhbHVlLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3IganVzdCBhc3NpZ24gZGVmYXVsdCBwcm9wZXJ0aWVzIGZvciB0aGlzIHZhbHVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlc1trZXldID0gdXRpbHMubWVyZ2UodmFsdWVUeXBlc01hbmFnZXIuZGVmYXVsdFByb3BzKG5ld1ZhbHVlLnR5cGUsIGtleSksIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICAvKlxuICAgICAgICBGbGlwIHZhbHVlIHRhcmdldC9vcmlnaW5cbiAgICAqL1xuICAgIGZsaXA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gKHZhbHVlLnRhcmdldCAhPT0gdW5kZWZpbmVkKSA/IHZhbHVlLnRhcmdldCA6IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIHZhbHVlLnRhcmdldCA9IHZhbHVlLnRvID0gdmFsdWUub3JpZ2luO1xuICAgICAgICB2YWx1ZS5vcmlnaW4gPSB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIE1lcmdlIGV4aXN0aW5nIGFuZCBpbmNvbWluZyB2YWx1ZXMsIHJlc29sdmluZyBwcm9wZXJ0aWVzXG4gICAgICAgIHNldCBhcyBmdW5jdGlvbnMgYW5kIHNwbGl0dGluZyBub24tbnVtZXJpY2FsIHZhbHVlcyBpZSBoZXhcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcGFyYW0gW3N0cmluZ10gKG9wdGlvbmFsKVxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHJldHVybnMgW29iamVjdF06IE5ldyB2YWx1ZXMgb2JqZWN0XG4gICAgKi9cbiAgICBwcm9jZXNzOiBmdW5jdGlvbiAoZXhpc3RpbmcsIGluY29taW5nLCBpbmhlcml0LCBkZWZhdWx0UHJvcCwgc2NvcGUpIHtcbiAgICAgICAgZXhpc3RpbmcgPSBleGlzdGluZyB8fCB7fTtcbiAgICAgICAgZGVmYXVsdFByb3AgPSBkZWZhdWx0UHJvcCB8fCAnY3VycmVudCc7XG4gICAgICAgIGxldCBwcmVwcm9jZXNzZWQgPSBwcmVwcm9jZXNzKGV4aXN0aW5nLCBpbmNvbWluZywgc2NvcGUsIGRlZmF1bHRQcm9wKTtcblxuICAgICAgICBlYWNoKHByZXByb2Nlc3NlZCwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IGV4aXN0aW5nW2tleV0gfHwgdXRpbHMuY29weShkZWZhdWx0VmFsdWUpLFxuICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID0gKHZhbHVlLmNoaWxkcmVuICE9PSB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRBY3Rpb25WYWx1ZSA9IGluaGVyaXQuYWN0aW9uID8gaW5oZXJpdC5hY3Rpb24uZ2V0RGVmYXVsdFZhbHVlKCkgOiB7fTtcblxuICAgICAgICAgICAgdmFsdWUuYWN0aW9uID0gaW5oZXJpdC5hY3Rpb247XG5cbiAgICAgICAgICAgIGVhY2goZGVmYXVsdEFjdGlvblZhbHVlLCAocHJvcE5hbWUsIGRlZmF1bHRBY3Rpb25Qcm9wKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVbcHJvcE5hbWVdID0gKGluaGVyaXQuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICYmICF2YWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpID8gaW5oZXJpdFtwcm9wTmFtZV0gOiBkZWZhdWx0QWN0aW9uUHJvcDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBlYWNoKHZhbHVlLCAodmFsdWVOYW1lLCB2YWx1ZVByb3ApID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwcm9wZXJ0eSBpcyBub3QgdW5kZWZpbmVkIG9yIGEgbnVtYmVyLCByZXNvbHZlXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkICYmICFpc051bSh2YWx1ZVByb3ApICYmICFoYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3AgPSByZXNvbHZlKHZhbHVlTmFtZSwgdmFsdWVQcm9wLCBuZXdWYWx1ZSwgc2NvcGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlW3ZhbHVlTmFtZV0gPSB2YWx1ZVByb3A7XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgaW50ZXJuYWwgdGFyZ2V0IGlmIHRoaXMgcHJvcGVydHkgaXMgJ3RvJ1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZU5hbWUgPT09ICd0bycpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudGFyZ2V0ID0gbmV3VmFsdWUudG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG5ld1ZhbHVlLm9yaWdpbiA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICBuZXdWYWx1ZS5oYXNSYW5nZSA9IChpc051bShuZXdWYWx1ZS5taW4pIHx8IGlzTnVtKG5ld1ZhbHVlLm1heCkpID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgICAgICBleGlzdGluZ1trZXldID0gbmV3VmFsdWU7XG4gICAgICAgICAgICBzY29wZS51cGRhdGVPcmRlcihrZXksIHV0aWxzLmlzU3RyaW5nKG5ld1ZhbHVlLndhdGNoKSwgaGFzQ2hpbGRyZW4pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZXhpc3Rpbmc7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rvci92YWx1ZS1vcGVyYXRpb25zLmpzXG4gKiovIiwidmFyIFJvbGUgPSByZXF1aXJlKCcuL1JvbGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgUm9sZSh7XG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pbml0KSB7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vblN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBmcmFtZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLm9uRnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMub25GcmFtZShzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMub25VcGRhdGUpIHtcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGUoc3RhdGUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvZGVmYXVsdFJvbGUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIC8vIFtudW1iZXJdOiBEZWZhdWx0IG1heCBzaXplIG9mIGhpc3RvcnlcbiAgICBtYXhIaXN0b3J5U2l6ZSA9IDMsXG4gICAgXG4gICAgLypcbiAgICAgICAgSGlzdG9yeSBjb25zdHJ1Y3RvclxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFt2YXJdOiBWYXJpYWJsZSB0byBzdG9yZSBpbiBmaXJzdCBoaXN0b3J5IHNsb3RcbiAgICAgICAgQHBhcmFtIFtpbnRdIChvcHRpb25hbCk6IE1heGltdW0gc2l6ZSBvZiBoaXN0b3J5XG4gICAgKi9cbiAgICBIaXN0b3J5ID0gZnVuY3Rpb24gKG9iaiwgbWF4KSB7XG4gICAgICAgIHRoaXMubWF4ID0gbWF4IHx8IG1heEhpc3RvcnlTaXplO1xuICAgICAgICB0aGlzLmVudHJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGQob2JqKTtcbiAgICB9O1xuICAgIFxuSGlzdG9yeS5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLypcbiAgICAgICAgUHVzaCBuZXcgdmFyIHRvIGhpc3RvcnlcbiAgICAgICAgXG4gICAgICAgIFNoaWZ0IG91dCBvbGRlc3QgZW50cnkgaWYgd2UndmUgcmVhY2hlZCBtYXhpbXVtIGNhcGFjaXR5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3Zhcl06IFZhcmlhYmxlIHRvIHB1c2ggaW50byBoaXN0b3J5LmVudHJpZXNcbiAgICAqL1xuICAgIGFkZDogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICB2YXIgY3VycmVudFNpemUgPSB0aGlzLmdldFNpemUoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZW50cmllcy5wdXNoKG9iaik7XG4gICAgICAgIFxuICAgICAgICBpZiAoY3VycmVudFNpemUgPj0gdGhpcy5tYXgpIHtcbiAgICAgICAgICAgIHRoaXMuZW50cmllcy5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdmFyaWFibGUgYXQgc3BlY2lmaWVkIGluZGV4XG5cbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleFxuICAgICAgICBAcmV0dXJuIFt2YXJdOiBWYXIgZm91bmQgYXQgc3BlY2lmaWVkIGluZGV4XG4gICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGkgPSAodHlwZW9mIGkgPT09ICdudW1iZXInKSA/IGkgOiB0aGlzLmdldFNpemUoKSAtIDE7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllc1tpXTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCB0aGUgc2Vjb25kIG5ld2VzdCBoaXN0b3J5IGVudHJ5XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFt2YXJdOiBFbnRyeSBmb3VuZCBhdCBpbmRleCBzaXplIC0gMlxuICAgICovXG4gICAgZ2V0UHJldmlvdXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuZ2V0U2l6ZSgpIC0gMik7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgY3VycmVudCBoaXN0b3J5IHNpemVcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2ludF06IEN1cnJlbnQgbGVuZ3RoIG9mIGVudHJpZXMubGVuZ3RoXG4gICAgKi9cbiAgICBnZXRTaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXMubGVuZ3RoO1xuICAgIH1cbiAgICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSGlzdG9yeTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmMvSGlzdG9yeS5qc1xuICoqLyIsImNsYXNzIENvbnRyb2xzIHtcbiAgICBjb25zdHJ1Y3RvcihhY3RvciwgYWN0aW9uLCBoYXNTdGFydGVkKSB7XG4gICAgICAgIHRoaXMuYWN0b3IgPSBhY3RvcjtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgICAgaWYgKGhhc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLmJpbmRBY3Rpb24oKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydChpbnB1dCkge1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5iaW5kQWN0aW9uKCk7XG4gICAgICAgIHRoaXMuYWN0b3Iuc3RhcnQodGhpcy5pZCwgaW5wdXQpO1xuICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmFjdG9yLnVuYmluZEFjdGlvbih0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5hY3Rpb24uZGVhY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24uZGVhY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgbGV0IHJlc3VtZSA9IHRoaXMuYWN0b3IuaGFzQWN0aW9uKHRoaXMuaWQpID8gdGhpcy5yZXN1bWUgOiB0aGlzLnN0YXJ0O1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb24uaXNBY3RpdmUgPyB0aGlzLnBhdXNlKCkgOiByZXN1bWUuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGVuKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5hY3Rvci50aGVuKC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBiaW5kQWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rvci5iaW5kQWN0aW9uKHRoaXMuYWN0aW9uLCB0aGlzLmlkKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udHJvbHM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29udHJvbHMvQ29udHJvbHMuanNcbiAqKi8iLCIvKlxuICAgIEVhc2luZyBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgR2VuZXJhdGVzIGFuZCBwcm92aWRlcyBlYXNpbmcgZnVuY3Rpb25zIGJhc2VkIG9uIGJhc2VGdW5jdGlvbiBkZWZpbml0aW9uc1xuICAgIFxuICAgIEEgY2FsbCB0byBlYXNpbmdGdW5jdGlvbi5nZXQoJ2Z1bmN0aW9uTmFtZScpIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwYXNzZWQ6XG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgMC0xXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaXMgdXNlZCB0byBhZGp1c3Qgb3ZlcmFsbCBzdHJlbmd0aFxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBFYXNlZCBwcm9ncmVzc1xuICAgICAgICBcbiAgICBXZSBjYW4gZ2VuZXJhdGUgbmV3IGZ1bmN0aW9ucyBieSBzZW5kaW5nIGFuIGVhc2luZyBmdW5jdGlvbiB0aHJvdWdoIGVhc2luZ0Z1bmN0aW9uLmV4dGVuZChuYW1lLCBtZXRob2QpLlxuICAgIFdoaWNoIHdpbGwgbWFrZSBuYW1lSW4sIG5hbWVPdXQgYW5kIG5hbWVJbk91dCBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvIHVzZS5cbiAgICAgICAgXG4gICAgRWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXJcbiAgICBodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuICAgICAgICBcbiAgICBCZXppZXIgY3VydmUgaW50ZXJwcmV0b3IgY3JlYXRlZCBmcm9tIEdhw6t0YW4gUmVuYXVkZWF1J3Mgb3JpZ2luYWwgQmV6aWVyRWFzaW5nICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBFYXNpbmcgPSByZXF1aXJlKCcuL0Vhc2luZycpLFxuICAgIGVhc2luZ0Z1bmN0aW9uLFxuICAgIFxuICAgIC8vIEdlbmVyYXRlIGVhc2luZyBmdW5jdGlvbiB3aXRoIHByb3ZpZGVkIHBvd2VyXG4gICAgZ2VuZXJhdGVQb3dlckVhc2luZyA9IGZ1bmN0aW9uIChwb3dlcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3cocHJvZ3Jlc3MsIHBvd2VyKTtcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgRWFjaCBvZiB0aGVzZSBiYXNlIGZ1bmN0aW9ucyBpcyBhbiBlYXNlSW5cbiAgICAgICAgXG4gICAgICAgIE9uIGluaXQsIHdlIHVzZSBFYXNpbmdGdW5jdGlvbi5taXJyb3IgYW5kIC5yZXZlcnNlIHRvIGdlbmVyYXRlIGVhc2VJbk91dCBhbmRcbiAgICAgICAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuICAgICovXG4gICAgYmFzZUVhc2luZyA9IHtcbiAgICAgICAgY2lyYzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwcm9ncmVzcykpO1xuICAgICAgICB9LFxuICAgICAgICBiYWNrOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHZhciBzdHJlbmd0aCA9IDEuNTtcblxuICAgICAgICAgICAgcmV0dXJuIChwcm9ncmVzcyAqIHByb2dyZXNzKSAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpO1xuICAgICAgICB9XG4gICAgfTtcblxuLy8gR2VuZXJhdGUgcG93ZXIgZWFzaW5nIGVhc2luZ1xuWydlYXNlJywgJ2N1YmljJywgJ3F1YXJ0JywgJ3F1aW50J10uZm9yRWFjaChmdW5jdGlvbiAoZWFzaW5nTmFtZSwgaSkge1xuICAgIGJhc2VFYXNpbmdbZWFzaW5nTmFtZV0gPSBnZW5lcmF0ZVBvd2VyRWFzaW5nKGkgKyAyKTtcbn0pO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZm9yICh2YXIga2V5IGluIGJhc2VFYXNpbmcpIHtcbiAgICBpZiAoYmFzZUVhc2luZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gbmV3IEVhc2luZyhiYXNlRWFzaW5nW2tleV0pO1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbiddID0gZWFzaW5nRnVuY3Rpb24uaW47XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ091dCddID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbk91dCddID0gZWFzaW5nRnVuY3Rpb24uaW5PdXQ7XG4gICAgfVxufVxuXG4vKlxuICAgIExpbmVhciBlYXNpbmcgYWRqdXN0bWVudFxuICAgIFxuICAgIFRoZSBkZWZhdWx0IGVhc2luZyBtZXRob2QsIG5vdCBhZGRlZCB3aXRoIC5leHRlbmQgYXMgaXQgaGFzIG5vIE91dCBvciBJbk91dFxuICAgIHZhcmlhdGlvbi5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAtMVxuICAgIEByZXR1cm4gW251bWJlcl06IFVuYWRqdXN0ZWQgcHJvZ3Jlc3NcbiovXG5iYXNlRWFzaW5nLmxpbmVhciA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiBwcm9ncmVzcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUVhc2luZztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL3R3ZWVuL3ByZXNldC1lYXNpbmcuanNcbiAqKi8iLCJ2YXIgQ29udHJvbHMgPSByZXF1aXJlKCcuLi8uLi9jb250cm9scy9Db250cm9scycpO1xuXG5jbGFzcyBUd2VlbkNvbnRyb2xzIGV4dGVuZHMgQ29udHJvbHMge1xuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLnJlc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24ucmV2ZXJzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZWVrKHByb2dyZXNzKSB7XG4gICAgICAgIGlmICghdGhpcy5hY3Rvci5oYXNBY3Rpb24odGhpcy5pZCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKS5wYXVzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3Rpb24uZWxhcHNlZCA9IHRoaXMuYWN0aW9uLmR1cmF0aW9uICogcHJvZ3Jlc3M7XG5cbiAgICAgICAgaWYgKCF0aGlzLmFjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24uYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0b3IucHJvY2Vzcy5maXJlKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5kZWFjdGl2YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW5Db250cm9scztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL3R3ZWVuL1R3ZWVuQ29udHJvbHMuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNhbGMgPSByZXF1aXJlKCcuLi8uLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyksXG4gICAgc3BlZWRQZXJGcmFtZSA9IGNhbGMuc3BlZWRQZXJGcmFtZTtcblxuLypcbiAgICBBZGQgY29yZSBwaHlzaWNzIHNpbXVsYXRpb25zXG4qL1xudmFyIHNpbXVsYXRpb25zID0ge1xuICAgIC8qXG4gICAgICAgIFZlbG9jaXR5XG4gICAgICAgIFxuICAgICAgICBUaGUgZGVmYXVsdCAucnVuKCkgc2ltdWxhdGlvbi5cbiAgICAgICAgXG4gICAgICAgIEFwcGxpZXMgYW55IHNldCBkZWNlbGVyYXRpb24gYW5kIGFjY2VsZXJhdGlvbiB0byBleGlzdGluZyB2ZWxvY2l0eVxuICAgICovXG4gICAgdmVsb2NpdHk6IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFsdWUudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eSAtIHNwZWVkUGVyRnJhbWUodmFsdWUuZGVjZWxlcmF0aW9uLCBkdXJhdGlvbikgKyBzcGVlZFBlckZyYW1lKHZhbHVlLmFjY2VsZXJhdGlvbiwgZHVyYXRpb24pO1xuXG4gICAgICAgIHJldHVybiBzaW11bGF0aW9ucy5mcmljdGlvbih2YWx1ZSwgZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBHbGlkZVxuICAgICAgICBcbiAgICAgICAgRW11bGF0ZXMgdG91Y2ggZGV2aWNlIHNjcm9sbGluZyBlZmZlY3RzIHdpdGggZXhwb25lbnRpYWwgZGVjYXlcbiAgICAgICAgaHR0cDovL2FyaXlhLm9maWxhYnMuY29tLzIwMTMvMTEvamF2YXNjcmlwdC1raW5ldGljLXNjcm9sbGluZy1wYXJ0LTIuaHRtbFxuICAgICovXG4gICAgZ2xpZGU6IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24sIHN0YXJ0ZWQpIHtcbiAgICAgICAgdmFyIHRpbWVVbnRpbEZpbmlzaGVkID0gLSB1dGlscy5jdXJyZW50VGltZSgpIC0gc3RhcnRlZCxcbiAgICAgICAgICAgIGRlbHRhID0gLSB2YWx1ZS50byAqIE1hdGguZXhwKHRpbWVVbnRpbEZpbmlzaGVkIC8gdmFsdWUudGltZUNvbnN0YW50KTtcblxuICAgICAgICByZXR1cm4gKHZhbHVlLnRvICsgZGVsdGEpIC0gdmFsdWUuY3VycmVudDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgRnJpY3Rpb25cblxuICAgICAgICBBcHBseSBmcmljdGlvbiB0byB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICBUT0RPOiBNYWtlIHRoaXMgZnJhbWVyYXRlLWluZGVwZW5kZW50XG4gICAgKi9cbiAgICBmcmljdGlvbjogZnVuY3Rpb24gKHZhbHVlLCBkdXJhdGlvbikge1xuICAgICAgICB2YXIgbmV3VmVsb2NpdHkgPSBzcGVlZFBlckZyYW1lKHZhbHVlLnZlbG9jaXR5LCBkdXJhdGlvbikgKiAoMSAtIHZhbHVlLmZyaWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gY2FsYy5zcGVlZFBlclNlY29uZChuZXdWZWxvY2l0eSwgZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICBzcHJpbmc6IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gdmFsdWUudG8gLSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IGRpc3RhbmNlICogc3BlZWRQZXJGcmFtZSh2YWx1ZS5zcHJpbmcsIGR1cmF0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBzaW11bGF0aW9ucy5mcmljdGlvbih2YWx1ZSwgZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICBib3VuY2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZGlzdGFuY2UgPSAwLFxuICAgICAgICAgICAgdG8gPSB2YWx1ZS50byxcbiAgICAgICAgICAgIGN1cnJlbnQgPSB2YWx1ZS5jdXJyZW50LFxuICAgICAgICAgICAgYm91bmNlID0gdmFsdWUuYm91bmNlO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgd2UncmUgdXNpbmcgZ2xpZGUgc2ltdWxhdGlvbiB3ZSBoYXZlIHRvIGZsaXAgb3VyIHRhcmdldCB0b29cbiAgICAgICAgaWYgKHZhbHVlLnNpbXVsYXRlID09PSAnZ2xpZGUnKSB7XG4gICAgICAgICAgICBkaXN0YW5jZSA9IHRvIC0gY3VycmVudDtcbiAgICAgICAgICAgIHZhbHVlLnRvID0gY3VycmVudCAtIChkaXN0YW5jZSAqIGJvdW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB2YWx1ZS52ZWxvY2l0eSAqPSAtIGJvdW5jZTtcbiAgICB9LFxuXG4gICAgY2FwdHVyZTogZnVuY3Rpb24gKHZhbHVlLCB0YXJnZXQpIHtcbiAgICAgICAgdmFsdWUudG8gPSB0YXJnZXQ7XG4gICAgICAgIHZhbHVlLnNpbXVsYXRlID0gJ3NwcmluZyc7XG4gICAgICAgIHZhbHVlLmNhcHR1cmUgPSB2YWx1ZS5taW4gPSB2YWx1ZS5tYXggPSB1bmRlZmluZWQ7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaW11bGF0aW9ucztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdGlvbnMvc2ltdWxhdGUvc2ltdWxhdGlvbnMuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIElucHV0ID0gcmVxdWlyZSgnLi9JbnB1dC5qcycpLFxuICAgIGN1cnJlbnRQb2ludGVyLCAvLyBTb3J0IHRoaXMgb3V0IGZvciBtdWx0aXRvdWNoXG4gICAgXG4gICAgVE9VQ0hNT1ZFID0gJ3RvdWNobW92ZScsXG4gICAgTU9VU0VNT1ZFID0gJ21vdXNlbW92ZScsXG5cbiAgICAvKlxuICAgICAgICBDb252ZXJ0IGV2ZW50IGludG8gcG9pbnRcbiAgICAgICAgXG4gICAgICAgIFNjcmFwZSB0aGUgeC95IGNvb3JkaW5hdGVzIGZyb20gdGhlIHByb3ZpZGVkIGV2ZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2V2ZW50XTogT3JpZ2luYWwgcG9pbnRlciBldmVudFxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dOiBUcnVlIGlmIHRvdWNoIGV2ZW50XG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IHgveSBjb29yZGluYXRlcyBvZiBldmVudFxuICAgICovXG4gICAgZXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKGV2ZW50LCBpc1RvdWNoRXZlbnQpIHtcbiAgICAgICAgdmFyIHRvdWNoQ2hhbmdlZCA9IGlzVG91Y2hFdmVudCA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogZmFsc2U7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogdG91Y2hDaGFuZ2VkID8gdG91Y2hDaGFuZ2VkLmNsaWVudFggOiBldmVudC5wYWdlWCxcbiAgICAgICAgICAgIHk6IHRvdWNoQ2hhbmdlZCA/IHRvdWNoQ2hhbmdlZC5jbGllbnRZIDogZXZlbnQucGFnZVlcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBhY3R1YWwgZXZlbnRcbiAgICAgICAgXG4gICAgICAgIENoZWNrcyBmb3IgalF1ZXJ5J3MgLm9yaWdpbmFsRXZlbnQgaWYgcHJlc2VudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtldmVudCB8IGpRdWVyeSBldmVudF1cbiAgICAgICAgQHJldHVybiBbZXZlbnRdOiBUaGUgYWN0dWFsIEpTIGV2ZW50ICBcbiAgICAqL1xuICAgIGdldEFjdHVhbEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50O1xuICAgIH0sXG5cbiAgICBcbiAgICAvKlxuICAgICAgICBQb2ludGVyIGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBQb2ludGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZ2V0QWN0dWFsRXZlbnQoZSksIC8vIEluIGNhc2Ugb2YgalF1ZXJ5IGV2ZW50XG4gICAgICAgICAgICBpc1RvdWNoID0gKGV2ZW50LnRvdWNoZXMpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgICAgc3RhcnRQb2ludCA9IGV2ZW50VG9Qb2ludChldmVudCwgaXNUb3VjaCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnVwZGF0ZShzdGFydFBvaW50KTtcbiAgICAgICAgdGhpcy5pc1RvdWNoID0gaXNUb3VjaDtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfSxcbiAgICBcbiAgICBwcm90byA9IFBvaW50ZXIucHJvdG90eXBlID0gbmV3IElucHV0KCk7XG5cbi8qXG4gICAgQmluZCBtb3ZlIGV2ZW50XG4qL1xucHJvdG8uYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm1vdmVFdmVudCA9IHRoaXMuaXNUb3VjaCA/IFRPVUNITU9WRSA6IE1PVVNFTU9WRTtcbiAgICBcbiAgICBjdXJyZW50UG9pbnRlciA9IHRoaXM7XG4gICAgXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMub25Nb3ZlKTtcbn07XG5cbi8qXG4gICAgVW5iaW5kIG1vdmUgZXZlbnRcbiovXG5wcm90by51bmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMub25Nb3ZlKTtcbn07XG5cbi8qXG4gICAgUG9pbnRlciBvbk1vdmUgZXZlbnQgaGFuZGxlclxuICAgIFxuICAgIEBwYXJhbSBbZXZlbnRdOiBQb2ludGVyIG1vdmUgZXZlbnRcbiovXG5wcm90by5vbk1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBuZXdQb2ludCA9IGV2ZW50VG9Qb2ludChlLCBjdXJyZW50UG9pbnRlci5pc1RvdWNoKTtcbiAgICBlID0gZ2V0QWN0dWFsRXZlbnQoZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGN1cnJlbnRQb2ludGVyLnVwZGF0ZShuZXdQb2ludCk7XG59O1xuXG5wcm90by5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvaW50ZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5wdXQvUG9pbnRlci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdGhlTG9vcCA9IHJlcXVpcmUoJy4vbG9vcC5qcycpLFxuICAgIFByb2Nlc3NNYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUlkcyA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZVByb2Nlc3NlcyA9IHt9O1xuICAgICAgICB0aGlzLmRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuICAgICAgICB0aGVMb29wLnNldENhbGxiYWNrKHRoaXMsIHRoaXMuZmlyZUFjdGl2ZSk7XG4gICAgfTtcbiAgICBcblByb2Nlc3NNYW5hZ2VyLnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvKlxuICAgICAgICBbaW50XTogVXNlZCBmb3IgcHJvY2VzcyBJRFxuICAgICovXG4gICAgcHJvY2Vzc0NvdW50ZXI6IDAsXG4gICAgXG4gICAgLypcbiAgICAgICAgW2ludF06IE51bWJlciBvZiBhY3RpdmUgcHJvY2Vzc2VzXG4gICAgKi9cbiAgICBhY3RpdmVDb3VudDogMCxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdGhlIHByb2Nlc3Mgd2l0aCBhIGdpdmVuIGluZGV4XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IEluZGV4IG9mIHByb2Nlc3NcbiAgICAgICAgQHJldHVybiBbUHJvY2Vzc11cbiAgICAqL1xuICAgIGdldFByb2Nlc3M6IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZVByb2Nlc3Nlc1tpXTtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBudW1iZXIgb2YgYWN0aXZlIHByb2Nlc3Nlc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbaW50XTogTnVtYmVyIG9mIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICAqL1xuICAgIGdldEFjdGl2ZUNvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNvdW50O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IGFjdGl2ZSB0b2tlbnNcblxuICAgICAgICBAcmV0dXJuIFthcnJheV06IEFjdGl2ZSB0b2tlbnNcbiAgICAqL1xuICAgIGdldEFjdGl2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVJZHM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgdGhlIGxlbmd0aCBvZiB0aGUgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbaW50XTogTGVuZ3RoIG9mIHF1ZXVlXG4gICAgKi9cbiAgICBnZXRRdWV1ZUxlbmd0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgRmlyZSBhbGwgYWN0aXZlIHByb2Nlc3Nlc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBUaW1lc3RhbXAgb2YgZXhlY3V0aW5nIGZyYW1lc1xuICAgICAgICBAcGFyYW0gW2ludF06IFRpbWUgc2luY2UgcHJldmlvdXMgZnJhbWVcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgYWN0aXZlIHByb2Nlc3NlcyBmb3VuZFxuICAgICovXG4gICAgZmlyZUFjdGl2ZTogZnVuY3Rpb24gKGZyYW1lc3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdmFyIHByb2Nlc3MsXG4gICAgICAgICAgICBhY3RpdmVDb3VudCA9IDAsXG4gICAgICAgICAgICBhY3RpdmVJZHMgPSBbXSxcbiAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgIC8vIFB1cmdlIGFuZCBjaGVjayBhY3RpdmUgY291bnQgYmVmb3JlIGV4ZWN1dGlvblxuICAgICAgICB0aGlzLnB1cmdlKCk7XG4gICAgICAgIGFjdGl2ZUNvdW50ID0gdGhpcy5nZXRBY3RpdmVDb3VudCgpO1xuICAgICAgICBhY3RpdmVJZHMgPSB0aGlzLmdldEFjdGl2ZSgpO1xuXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhY3RpdmUgcHJvY2Vzc2VzIGFuZCBmaXJlIGNhbGxiYWNrXG4gICAgICAgIGZvciAoOyBpIDwgYWN0aXZlQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgcHJvY2VzcyA9IHRoaXMuZ2V0UHJvY2VzcyhhY3RpdmVJZHNbaV0pO1xuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcykge1xuICAgICAgICAgICAgICAgIHByb2Nlc3MuZmlyZShmcmFtZXN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlcHVyZ2UgYW5kIHJlY2hlY2sgYWN0aXZlIGNvdW50IGFmdGVyIGV4ZWN1dGlvblxuICAgICAgICB0aGlzLnB1cmdlKCk7XG4gICAgICAgIGFjdGl2ZUNvdW50ID0gdGhpcy5nZXRBY3RpdmVDb3VudCgpO1xuXG4gICAgICAgIC8vIFJldHVybiB0cnVlIGlmIHdlIHN0aWxsIGhhdmUgYWN0aXZlIHByb2Nlc3Nlcywgb3IgZmFsc2UgaWYgbm9uZVxuICAgICAgICByZXR1cm4gYWN0aXZlQ291bnQgPyB0cnVlIDogZmFsc2U7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBSZWdpc3RlciBhIG5ldyBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW1Byb2Nlc3NdXG4gICAgICAgIEByZXR1cm4gW2ludF06IEluZGV4IG9mIHByb2Nlc3MgdG8gYmUgdXNlZCBhcyBJRFxuICAgICovXG4gICAgcmVnaXN0ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc0NvdW50ZXIrKztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEFjdGl2YXRlIGEgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleCBvZiBhY3RpdmUgcHJvY2Vzc1xuICAgICovXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChwcm9jZXNzLCBpKSB7XG4gICAgICAgIHZhciBxdWV1ZUluZGV4ID0gdGhpcy5kZWFjdGl2YXRlUXVldWUuaW5kZXhPZihpKSxcbiAgICAgICAgICAgIGlzUXVldWVkID0gKHF1ZXVlSW5kZXggPiAtMSksXG4gICAgICAgICAgICBpc0FjdGl2ZSA9ICh0aGlzLmFjdGl2ZUlkcy5pbmRleE9mKGkpID4gLTEpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIGRlYWN0aXZhdGVRdWV1ZSBpZiBpbiB0aGVyZVxuICAgICAgICBpZiAoaXNRdWV1ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLnNwbGljZShxdWV1ZUluZGV4LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCB0byBhY3RpdmUgcHJvY2Vzc2VzIGFycmF5IGlmIG5vdCBhbHJlYWR5IGluIHRoZXJlXG4gICAgICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSWRzLnB1c2goaSk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVByb2Nlc3Nlc1tpXSA9IHByb2Nlc3M7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNvdW50Kys7XG4gICAgICAgICAgICB0aGVMb29wLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIERlYWN0aXZhdGUgYSBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IEluZGV4IG9mIHByb2Nlc3MgdG8gYWRkIHRvIGRlYWN0aXZhdGUgcXVldWVcbiAgICAqL1xuICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLnB1c2goaSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBQdXJnZSB0aGUgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICovXG4gICAgcHVyZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHF1ZXVlTGVuZ3RoID0gdGhpcy5nZXRRdWV1ZUxlbmd0aCgpLFxuICAgICAgICAgICAgYWN0aXZlSWRJbmRleCA9IDAsXG4gICAgICAgICAgICBpZFRvRGVsZXRlID0gMDtcblxuICAgICAgICB3aGlsZSAocXVldWVMZW5ndGgtLSkge1xuICAgICAgICAgICAgaWRUb0RlbGV0ZSA9IHRoaXMuZGVhY3RpdmF0ZVF1ZXVlW3F1ZXVlTGVuZ3RoXTtcbiAgICAgICAgICAgIGFjdGl2ZUlkSW5kZXggPSB0aGlzLmFjdGl2ZUlkcy5pbmRleE9mKGlkVG9EZWxldGUpO1xuXG4gICAgICAgICAgICAvLyBJZiBwcm9jZXNzIGluIGFjdGl2ZSBsaXN0IGRlYWN0aXZhdGVcbiAgICAgICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUlkcy5zcGxpY2UoYWN0aXZlSWRJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDb3VudC0tO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZVByb2Nlc3Nlc1tpZFRvRGVsZXRlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlUXVldWUgPSBbXTtcbiAgICB9XG4gICAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBQcm9jZXNzTWFuYWdlcigpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb2Nlc3MvbWFuYWdlci5qc1xuICoqLyIsIi8qXG4gICAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgICAgICBcbiAgICBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgXG4gICAgVXNlXG4gICAgXG4gICAgICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA4LFxuICAgIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMSxcbiAgICBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDEsXG4gICAgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMCxcbiAgICBLX1NQTElORV9UQUJMRV9TSVpFID0gMTEsXG4gICAgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApLFxuICAgIEZMT0FUXzMyX1NVUFBPUlRFRCA9ICh0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyksXG4gICAgXG4gICAgYSA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG4gICAgfSxcbiAgICBcbiAgICBiID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgICAgICByZXR1cm4gMy4wICogYTIgLSA2LjAgKiBhMTtcbiAgICB9LFxuICAgIFxuICAgIGMgPSBmdW5jdGlvbiAoYTEpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGExO1xuICAgIH0sXG5cbiAgICBnZXRTbG9wZSA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogYihhMSwgYTIpICogdCArIGMoYTEpO1xuICAgIH0sXG5cbiAgICBjYWxjQmV6aWVyID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgICAgICByZXR1cm4gKChhKGExLCBhMikgKiB0ICsgYihhMSwgYTIpKSAqIHQgKyBjKGExKSkgKiB0O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQmV6aWVyIGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBCZXppZXIgPSBmdW5jdGlvbiAobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpLFxuICAgICAgICAgICAgX3ByZWNvbXB1dGVkID0gZmFsc2UsXG4gICAgXG4gICAgICAgICAgICBiaW5hcnlTdWJkaXZpZGUgPSBmdW5jdGlvbiAoYVgsIGFBLCBhQikge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50VDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAgICAgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSBmdW5jdGlvbiAoYVgsIGFHdWVzc1QpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBLX1NQTElORV9UQUJMRV9TSVpFOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBnZXRURm9yWCA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2FtcGxlID0gMSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLFxuICAgICAgICAgICAgICAgICAgICBkaXN0ID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBndWVzc0ZvclQgPSAwLjAsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbG9wZSA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlKzFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgICAgICAgICBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBzbG9wZSBpcyBncmVhdGVyIHRoYW4gbWluXG4gICAgICAgICAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgICAgICAgICAvLyBTbG9wZSBpcyBlcXVhbCB0byBtaW5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgICAgICAgICAgLy8gU2xvcGUgaXMgbGVzcyB0aGFuIG1pblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBLX1NBTVBMRV9TVEVQX1NJWkUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHByZWNvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAobVgxICE9IG1ZMSB8fCBtWDIgIT0gbVkyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIEdlbmVyYXRlZCBmdW5jdGlvblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFJldHVybnMgdmFsdWUgMC0xIGJhc2VkIG9uIFhcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBmID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldHVyblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlY29tcHV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBsaW5lYXIgZ3JhZGllbnQsIHJldHVybiBYIGFzIFRcbiAgICAgICAgICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhWDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgYXQgc3RhcnQsIHJldHVybiAwXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIGF0IGVuZCwgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gY2FsY0JlemllcihnZXRURm9yWChhWCksIG1ZMSwgbVkyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBCZXppZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi9CZXppZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1jb21tYS1kZWxpbWl0ZWQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignKCcpICsgMSwgdmFsdWUubGFzdEluZGV4T2YoJyknKSk7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1icmVhay5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcG9zaXRpb25UZXJtcyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnknKS5wb3NpdGlvbnMsXG4gICAgbnVtUG9zaXRpb25UZXJtcyA9IHBvc2l0aW9uVGVybXMubGVuZ3RoLFxuXG4gICAgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJyxcbiAgICBTQ0FMRSA9ICdzY2FsZScsXG4gICAgUk9UQVRFID0gJ3JvdGF0ZScsXG4gICAgdGVybXMgPSB7XG4gICAgICAgIGZ1bmNzOiBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSxcbiAgICAgICAgcHJvcHM6IHt9IC8vIG9iamVjdHMgYXJlIGZhc3RlciBhdCBkaXJlY3QgbG9va3Vwc1xuICAgIH07XG5cbi8vIENyZWF0ZSB0cmFuc2Zvcm0gdGVybXNcbihmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZ1bmNzID0gdGVybXMuZnVuY3MsXG4gICAgICAgIHByb3BzID0gdGVybXMucHJvcHMsXG4gICAgICAgIG51bUZ1bmNzID0gZnVuY3MubGVuZ3RoLFxuICAgICAgICBpID0gMCxcblxuICAgICAgICBjcmVhdGVQcm9wcyA9IGZ1bmN0aW9uIChmdW5jTmFtZSkge1xuICAgICAgICAgICAgdmFyIGogPSAwO1xuXG4gICAgICAgICAgICBmb3IgKDsgaiA8IG51bVBvc2l0aW9uVGVybXM7IGorKykge1xuICAgICAgICAgICAgICAgIHByb3BzW2Z1bmNOYW1lICsgcG9zaXRpb25UZXJtc1tqXV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIFxuICAgIC8vIE1hbnVhbGx5IGFkZCBza2V3IGFuZCB0cmFuc2Zvcm0gcGVyc3BlY3RpdmUgIFxuICAgIHByb3BzW1JPVEFURV0gPSBwcm9wc1tTQ0FMRV0gPSBwcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcbiAgICBcbiAgICAvLyBMb29wIG92ZXIgZWFjaCBmdW5jdGlvbiBuYW1lIGFuZCBjcmVhdGUgZnVuY3Rpb24vcHJvcGVydHkgdGVybXNcbiAgICBmb3IgKDsgaSA8IG51bUZ1bmNzOyBpKyspIHtcbiAgICAgICAgY3JlYXRlUHJvcHMoZnVuY3NbaV0pO1xuICAgIH1cbn0pKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gdGVybXM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvY3NzL3RyYW5zZm9ybS1kaWN0aW9uYXJ5LmpzXG4gKiovIiwibGV0IEFjdGlvbiA9IHJlcXVpcmUoJy4vQWN0aW9uJyksXG4gICAgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyksXG5cbiAgICBTVFJJTkcgPSAnc3RyaW5nJyxcbiAgICBcbiAgICAvKlxuICAgICAgICBUcmFuc2xhdGUgb3VyIG1hcExpbmsgdmFsdWUgaW50byBtYXBUb1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlIGZyb20gbGlua2VkIHZhbHVlXG4gICAgICAgIEBwYXJhbSBbVmFsdWUgfHwgb2JqZWN0XTogTGlua2VkIHZhbHVlIG9yIGVtcHR5IG9iamVjdCBpZiB3ZSdyZSBsaW5raW5nIHRvIGlucHV0XG4gICAgICAgIEBwYXJhbSBbYXJyYXldOiBMaXN0IG9mIG51bWJlcnMgcmVsYXRpbmcgdG8gbGlua2VkIHZhbHVlXG4gICAgICAgIEBwYXJhbSBbYXJyYXldOiBMaXN0IG9mIG51bWJlcnMgcmVsYXRpbmcgdG8gdGhpcyB2YWx1ZVxuICAgICovXG4gICAgZmluZE1hcHBlZFZhbHVlID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBsaW5rZWRWYWx1ZSwgdG9WYWx1ZSwgbWFwTGluaywgbWFwVG8pIHtcbiAgICAgICAgdmFyIG1hcExlbmd0aCA9IG1hcExpbmsubGVuZ3RoLFxuICAgICAgICAgICAgaSA9IDEsXG4gICAgICAgICAgICBsYXN0TGlua1ZhbHVlLFxuICAgICAgICAgICAgdGhpc0xpbmtWYWx1ZSxcbiAgICAgICAgICAgIGxhc3RUb1ZhbHVlLFxuICAgICAgICAgICAgdGhpc1RvVmFsdWU7XG5cbiAgICAgICAgZm9yICg7IGkgPCBtYXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gQXNzaWduIHZhbHVlcyBmcm9tIGFycmF5LCBvciBpZiB0aGV5J3JlIHN0cmluZ3MsIGxvb2sgZm9yIHRoZW0gaW4gbGlua2VkVmFsdWVcbiAgICAgICAgICAgIGxhc3RMaW5rVmFsdWUgPSAodHlwZW9mIG1hcExpbmtbaSAtIDFdID09PSBTVFJJTkcpID8gbGlua2VkVmFsdWVbbWFwTGlua1tpIC0gMV1dIDogbWFwTGlua1tpIC0gMV07XG4gICAgICAgICAgICB0aGlzTGlua1ZhbHVlID0gKHR5cGVvZiBtYXBMaW5rW2ldID09PSBTVFJJTkcpID8gbGlua2VkVmFsdWVbbWFwTGlua1tpXV0gOiBtYXBMaW5rW2ldO1xuICAgICAgICAgICAgbGFzdFRvVmFsdWUgPSAodHlwZW9mIG1hcFRvW2kgLSAxXSA9PT0gU1RSSU5HKSA/IHRvVmFsdWVbbWFwVG9baSAtIDFdXSA6IG1hcFRvW2kgLSAxXTtcbiAgICAgICAgICAgIHRoaXNUb1ZhbHVlID0gKHR5cGVvZiBtYXBUb1tpXSA9PT0gU1RSSU5HKSA/IHRvVmFsdWVbbWFwVG9baV1dIDogbWFwVG9baV07XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlJ3ZlIGdvbmUgcGFzdCBvdXIgY2FsY3VsYXRlZCB2YWx1ZSwgb3IgaWYgd2UncmUgYXQgdGhlIGVuZCBvZiB0aGUgYXJyYXlcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA8IHRoaXNMaW5rVmFsdWUgfHwgaSA9PT0gbWFwTGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gY2FsYy52YWx1ZShjYWxjLnJlc3RyaWN0ZWQoY2FsYy5wcm9ncmVzcyhuZXdWYWx1ZSwgbGFzdExpbmtWYWx1ZSwgdGhpc0xpbmtWYWx1ZSksIDAsIDEpLCBsYXN0VG9WYWx1ZSwgdGhpc1RvVmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfTtcblxuY2xhc3MgV2F0Y2ggZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFByb2Nlc3MgdGhpcyB2YWx1ZVxuICAgICAgICBcbiAgICAgICAgRmlyc3QgY2hlY2sgaWYgdGhpcyB2YWx1ZSBleGlzdHMgYXMgYSBWYWx1ZSwgaWYgbm90XG4gICAgICAgIGNoZWNrIHdpdGhpbiBJbnB1dCAoaWYgd2UgaGF2ZSBvbmUpXG4gICAgICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHBhcmFtIFtWYWx1ZV06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgb2YgY3VycmVudCB2YWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzKGFjdG9yLCB2YWx1ZSwga2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBhY3Rvci52YWx1ZXMsXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlLmN1cnJlbnQsXG4gICAgICAgICAgICB3YXRjaGVkS2V5ID0gdmFsdWUud2F0Y2gsXG4gICAgICAgICAgICB3YXRjaGVkVmFsdWUgPSB2YWx1ZXNbd2F0Y2hlZEtleV0gPyB2YWx1ZXNbd2F0Y2hlZEtleV0gOiB7fSxcbiAgICAgICAgICAgIGlucHV0T2Zmc2V0ID0gdmFsdWUuYWN0aW9uID8gdmFsdWUuYWN0aW9uLmlucHV0T2Zmc2V0IDogZmFsc2U7XG5cbiAgICAgICAgLy8gRmlyc3QgbG9vayBhdCBBY3Rpb24gYW5kIGNoZWNrIHZhbHVlIGlzbid0IGxpbmtpbmcgaXRzZWxmXG4gICAgICAgIGlmICh3YXRjaGVkVmFsdWUuY3VycmVudCAhPT0gdW5kZWZpbmVkICYmIGtleSAhPT0gd2F0Y2hlZEtleSkge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSB3YXRjaGVkVmFsdWUuY3VycmVudDtcbiAgICAgICAgXG4gICAgICAgIC8vIFRoZW4gY2hlY2sgdmFsdWVzIGluIElucHV0XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXRPZmZzZXQgJiYgaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkod2F0Y2hlZEtleSkpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWUub3JpZ2luICsgKGlucHV0T2Zmc2V0W3dhdGNoZWRLZXldICogdmFsdWUuYW1wKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBtYXBGcm9tIGFuZCBtYXBUbyBwcm9wZXJ0aWVzLCB0cmFuc2xhdGUgdGhlIG5ldyB2YWx1ZVxuICAgICAgICBpZiAodmFsdWUubWFwRnJvbSAmJiB2YWx1ZS5tYXBUbykge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBmaW5kTWFwcGVkVmFsdWUobmV3VmFsdWUsIHdhdGNoZWRWYWx1ZSwgdmFsdWUsIHZhbHVlLm1hcEZyb20sIHZhbHVlLm1hcFRvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2F0Y2g7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9XYXRjaC5qc1xuICoqLyIsIi8qXG4gICAgVGhlIGxvb3BcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIFRpbWVyID0gcmVxdWlyZSgnLi90aW1lci5qcycpLFxuICAgIHRpY2sgPSByZXF1aXJlKCcuL3RpY2suanMnKSxcbiAgICBMb29wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gbmV3IFRpbWVyKCk7XG4gICAgfTtcbiAgICBcbkxvb3AucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8qXG4gICAgICAgIFtib29sZWFuXTogQ3VycmVudCBzdGF0dXMgb2YgYW5pbWF0aW9uIGxvb3BcbiAgICAqL1xuICAgIGlzUnVubmluZzogZmFsc2UsXG4gICAgXG4gICAgLypcbiAgICAgICAgRmlyZSBhbGwgYWN0aXZlIHByb2Nlc3NlcyBvbmNlIHBlciBmcmFtZVxuICAgICovXG4gICAgZnJhbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGZyYW1lc3RhbXAgPSBzZWxmLnRpbWVyLnVwZGF0ZSgpLCAvLyBDdXJyZW50bHkganVzdCBtZWFzdXJpbmcgaW4gbXMgLSB3aWxsIGxvb2sgaW50byBoaS1yZXMgdGltZXN0YW1wc1xuICAgICAgICAgICAgICAgIGlzQWN0aXZlID0gc2VsZi5jYWxsYmFjay5jYWxsKHNlbGYuc2NvcGUsIGZyYW1lc3RhbXAsIHNlbGYudGltZXIuZ2V0RWxhcHNlZCgpKTtcblxuICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5mcmFtZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdGFydCBsb29wXG4gICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UncmUgbm90IGFscmVhZHkgcnVubmluZyBhIGxvb3BcbiAgICAgICAgaWYgKCF0aGlzLmlzUnVubmluZykge1xuICAgICAgICAgICAgdGhpcy50aW1lci5jbG9jaygpO1xuICAgICAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5mcmFtZSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdG9wIHRoZSBsb29wXG4gICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTZXQgdGhlIGNhbGxiYWNrIHRvIHJ1biBldmVyeSBmcmFtZVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtPYmplY3RdOiBFeGVjdXRpb24gY29udGV4dFxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgdG8gZmlyZVxuICAgICovXG4gICAgc2V0Q2FsbGJhY2s6IGZ1bmN0aW9uIChzY29wZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTG9vcCgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb2Nlc3MvbG9vcC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMuanMnKSxcblxuICAgIG1heEVsYXBzZWQgPSAzMyxcbiAgICBUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gMTYuNztcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuXG5UaW1lci5wcm90b3R5cGUgPSB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucHJldiA9IHRoaXMuY3VycmVudDtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gTWF0aC5taW4odGhpcy5jdXJyZW50IC0gdGhpcy5wcmV2LCBtYXhFbGFwc2VkKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xuICAgIH0sXG5cbiAgICBnZXRFbGFwc2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsYXBzZWQ7XG4gICAgfSxcbiAgICBcbiAgICBjbG9jazogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB1dGlscy5jdXJyZW50VGltZSgpO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGltZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcHJvY2Vzcy90aW1lci5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuLypcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICBcbiAgICBGb3IgSUU4LzkgRmxpbnN0b25lc1xuXG4gICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgIFxuICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgIFxuICAgIE1JVCBsaWNlbnNlXG4qL1xudmFyIHRpY2ssXG4gICAgbGFzdFRpbWUgPSAwLFxuICAgIGhhc1dpbmRvdyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyk7XG5cbmlmICghaGFzV2luZG93KSB7XG4gICAgLy8gTG9hZCByQUYgc2hpbVxuICAgIHRpY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpLFxuICAgICAgICAgICAgaWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgICAgICAgICAgfSwgdGltZVRvQ2FsbCk7XG5cbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfTsgIFxuICAgIFxufSBlbHNlIHtcbiAgICB0aWNrID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aWNrO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb2Nlc3MvdGljay5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwuanMifQ==