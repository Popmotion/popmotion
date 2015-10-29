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
	
	var valueTypes = __webpack_require__(19),
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
	
	    addValueType: function addValueType(types) {
	        valueTypes.extend(types);
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

	"use strict";
	
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

	"use strict";
	
	var Role = __webpack_require__(25);
	var build = __webpack_require__(40);
	
	var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
	var numPrefixes = prefixes.length;
	var propertyNameCache = {};
	var testElement;
	
	/*
	    Test style property for prefixed version
	    
	    @param [string]: Style property
	    @return [string]: Cached property name
	*/
	var testPrefix = function testPrefix(key) {
	    testElement = testElement || document.createElement('div');
	
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
	
	    init: function init(actor) {
	        actor._cssCache = {};
	    },
	
	    update: function update(state, actor) {
	        cssRole(actor.element, build(state, actor._cssCache));
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

	"use strict";
	
	var Role = __webpack_require__(25),
	    attrRole = __webpack_require__(15),
	    build = __webpack_require__(43),
	    each = __webpack_require__(38).each;
	
	module.exports = new Role({
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

	"use strict";
	
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
	
	var each = __webpack_require__(38).each;
	
	module.exports = {
	    extend: function extend(types) {
	        var _this = this;
	
	        each(types, function (name, type) {
	            _this[key] = type;
	        });
	    },
	
	    defaultProps: function defaultProps(typeName, key) {
	        var valueType = this[typeName],
	            defaultProps = valueType.defaultProps ? valueType.defaultProps[key] || valueType.defaultProps : {};
	
	        return defaultProps;
	    },
	
	    test: function test(value) {
	        var type = false;
	
	        each(this, function (key, valueType) {
	            if (valueType.test && valueType.test(value)) {
	                type = key;
	                return false;
	            }
	        });
	
	        return type;
	    }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Process = __webpack_require__(24),
	    Queue = __webpack_require__(46),
	    utils = __webpack_require__(38),
	    update = __webpack_require__(47),
	    valueOps = __webpack_require__(48),
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
	        this.isActive = false;
	
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
	        this.start(new Action({ values: this.values }));
	        return this;
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
	        if (element instanceof HTMLElement || element.tagName === 'svg') {
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
	            this.pause();
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
	
	    // [boolean]: Is this Actor active?
	
	    _createClass(Actor, [{
	        key: 'isActive',
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
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Actor = __webpack_require__(20);
	var Tween = __webpack_require__(28);
	var utils = __webpack_require__(38);
	var calcRelative = __webpack_require__(32).relativeValue;
	
	var timeline = new Tween({
	    ease: 'linear',
	    values: {
	        playhead: 0
	    }
	});
	
	function checkActions(_ref, sequence) {
	    var playhead = _ref.playhead;
	
	    var i = sequence.check.length;
	
	    while (i--) {
	        var toCheck = sequence.check[i];
	
	        if (playhead >= toCheck.timestamp) {
	            toCheck.callback();
	            sequence.check.splice(i, 1);
	        }
	    }
	}
	
	function generateCallback(actor, action) {
	    var callback;
	
	    if (actor.each) {
	        callback = function () {
	            actor.each(action);
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
	            check: [],
	            sequence: [],
	            duration: 0,
	            currentTimestamp: 0,
	            prevActionEnd: 0,
	            onUpdate: checkActions
	        });
	    }
	
	    Sequence.prototype['do'] = function _do(actor, action) {
	        var isCallback = utils.isFunc(actor);
	
	        this.sequence.push({
	            timestamp: this.currentTimestamp,
	            callback: isCallback ? actor : generateCallback(actor, action)
	        });
	
	        if (action && action.duration) {
	            this.prevActionEnd = this.currentTimestamp + action.duration;
	        }
	
	        return this;
	    };
	
	    Sequence.prototype.stagger = function stagger(iterator, action, staggerProps) {
	        var numItems = iterator.members.length,
	            interval = utils.isNum(staggerProps) ? staggerProps : staggerProps.interval || 100,
	            duration = action.duration ? action.duration : 0;
	
	        this['do'](iterator, function () {
	            iterator.stagger(action, staggerProps);
	        });
	
	        this.prevActionEnd = this.currentTimestamp + duration + interval * numItems;
	
	        return this;
	    };
	
	    Sequence.prototype.at = function at(timestamp) {
	        if (utils.isString(timestamp)) {
	            timestamp = calcRelative(this.currentTimestamp, timestamp);
	        }
	
	        this.currentTimestamp = timestamp;
	        this.duration = Math.max(this.currentTimestamp, this.duration);
	        return this;
	    };
	
	    Sequence.prototype.then = function then() {
	        var offset = arguments.length <= 0 || arguments[0] === undefined ? "+=0" : arguments[0];
	
	        this.at(calcRelative(this.prevActionEnd, offset));
	        return this;
	    };
	
	    Sequence.prototype.start = function start() {
	        _Actor.prototype.start.call(this, timeline.extend({
	            duration: this.duration,
	            values: {
	                playhead: {
	                    current: 0,
	                    to: this.duration
	                }
	            }
	        }));
	
	        return this;
	    };
	
	    Sequence.prototype.onStart = function onStart() {
	        this.check = this.sequence.slice();
	    };
	
	    Sequence.prototype.clear = function clear() {
	        this.sequence = [];
	        this.duration = this.currentTimestamp = this.prevActionEnd = 0;
	        return this;
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
	"use strict";
	
	var calc = __webpack_require__(32),
	    utils = __webpack_require__(38),
	    History = __webpack_require__(49),
	
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
	            interval = propsIsInterval ? props : props.interval || 100,
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
	
	        staggerProps.onComplete = propsIsInterval ? undefined : props.onComplete;
	
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
	
	var manager = __webpack_require__(58),
	
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
	    var role = function role(element, opts, prop) {
	        var typeOfOpts = typeof opts;
	
	        // Set single, if this is a string and we have a property
	        if (typeOfOpts === 'string' && prop) {
	            role.set(element, opts, prop);
	
	            // Set multi, if this is an object
	        } else if (typeOfOpts === 'object') {
	                each(opts, function (key, value) {
	                    role.set(element, key, value);
	                });
	
	                // Or this is a get if we have a string and no props
	            } else {
	                    return role.get(element, opts);
	                }
	
	        return role;
	    };
	
	    role._map = {};
	
	    each(methods, function (name, method) {
	        role[name] = !utils.isObj(method) ? method : utils.copy(method);
	    });
	
	    /*
	        Map value keys or generate new Role with updated map
	         Getter:
	            @param [string]: Key to map
	            @return [string]: Mapped key, or key if no mapped key found
	         Setter: 
	            @param [object]: Map of Actor keys -> Role keys
	            @return [Role]: New Role with unique map
	    */
	    role.map = function (values) {
	        // If this is a string, get mapped value
	        // Otherwise this is a map, duplicated role with updated map
	        return utils.isString(values) ? this._map[values] || values : createRole(this, values);
	    };
	
	    return role;
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
	
	module.exports = Role;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Bezier = __webpack_require__(59),
	
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
	    Controls = __webpack_require__(50);
	
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
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(27),
	    calc = __webpack_require__(32),
	    utils = __webpack_require__(38),
	    each = utils.each,
	    presetEasing = __webpack_require__(51),
	    valueOps = __webpack_require__(48),
	    TweenControls = __webpack_require__(52),
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
	            progress = calc.restricted(calc.progress(this.elapsed - value.delay, 0, value.duration) - value.stagger, 0, 1);
	
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
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(27),
	    calc = __webpack_require__(32),
	    utils = __webpack_require__(38),
	    simulations = __webpack_require__(53);
	
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
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Action = __webpack_require__(27),
	    Pointer = __webpack_require__(54),
	    calc = __webpack_require__(32);
	
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
	            newValue = value.smooth ? calc.smooth(newValue, unmapped, this.frameDuration, value.smooth) : newValue;
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
	    selectDom = __webpack_require__(55);
	
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

	'use strict';
	
	var utils = __webpack_require__(38),
	    zeroPoint = {
	    x: 0,
	    y: 0
	},
	    calc = {
	
	    /*
	        Angle between points
	        
	        Translates the hypothetical line so that the 'from' coordinates
	        are at 0,0, then return the angle using .angleFromCenter()
	        
	        @param [object]: X and Y coordinates of from point
	        @param [object]: X and Y cordinates of to point
	        @return [radian]: Angle between the two points in radians
	    */
	    angle: function angle(a) {
	        var b = arguments.length <= 1 || arguments[1] === undefined ? zeroPoint : arguments[1];
	        return calc.angleFromCenter({
	            x: a.x - b.x,
	            y: a.y - b.y
	        });
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
	        return calc.radiansToDegrees(Math.atan2(y, x));
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
	    distance: function distance(a, b) {
	        return utils.isNum(a) ? calc.distance1D(a, b) : calc.distance2D(a, b);
	    },
	
	    /*
	        Distance 1D
	        
	        Returns the distance between point A and point B
	        
	        @param [number]: Point A
	        @param [number]: (optional): Point B
	        @return [number]: The distance between the two points
	    */
	    distance1D: function distance1D(a) {
	        var b = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	        return Math.abs(a - b);
	    },
	
	    /*
	        Distance 2D
	        
	        Returns the distance between (0,0) and point A, unless point B
	        is provided, then we return the difference between the two.
	        
	        @param [object]: x and y of point A
	        @param [object]: (optional): x and y of point B
	        @return [number]: The distance between the two points
	    */
	    distance2D: function distance2D(a) {
	        var b = arguments.length <= 1 || arguments[1] === undefined ? zeroPoint : arguments[1];
	        return calc.hypotenuse({
	            x: Math.abs(a.x - b.x),
	            y: Math.abs(a.y - b.y)
	        });
	    },
	
	    /*
	        Hypotenuse
	        
	        Returns the hypotenuse, side C, given the lengths of sides A and B.
	        
	        @param [number]: Length of A
	        @param [number]: Length of B
	        @return [number]: Length of C
	    */
	    hypotenuse: function hypotenuse(a, b) {
	        return Math.sqrt(a * a + b * b);
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
	
	        utils.each(b, function (key, value) {
	            offset[key] = a.hasOwnProperty(key) ? value - a[key] : 0;
	        });
	
	        if (utils.isNum(offset.x) && utils.isNum(offset.y)) {
	            offset.angle = calc.angle(a, b);
	            offset.distance = calc.distance2D(a, b);
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
	        angle = calc.degreesToRadians(angle);
	
	        return {
	            x: distance * Math.cos(angle) + origin.x,
	            y: distance * Math.sin(angle) + origin.y
	        };
	    },
	
	    /*
	        Progress within given range
	        
	        Given a lower limit and an upper limit, we return the progress
	        (expressed as a number 0-1) represented by the given value, and
	        limit that progress to within 0-1.
	        
	        @param [number]: Value to find progress within given range
	        @param [number]: Lower limit 
	        @param [number]: Upper limit
	        @return [number]: Progress of value within range as expressed 0-1
	    */
	    progress: function progress(value, from, to) {
	        return (value - from) / (to - from);
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
	        var newValue = current;
	        var equation = rel.split('=');
	        var operator = equation[0];
	
	        var _utils$splitValUnit = utils.splitValUnit(equation[1]);
	
	        var unit = _utils$splitValUnit.unit;
	        var value = _utils$splitValUnit.value;
	
	        value = parseFloat(value);
	
	        switch (operator) {
	            case '+':
	                newValue += value;
	                break;
	            case '-':
	                newValue -= value;
	                break;
	            case '*':
	                newValue *= value;
	                break;
	            case '/':
	                newValue /= value;
	                break;
	        }
	
	        if (unit) {
	            newValue += unit;
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
	        return Math.min(Math.max(value, min), max);
	    },
	
	    /*
	        Framerate-independent smoothing
	         @param [number]: New value
	        @param [number]: Old value
	        @param [number]: Frame duration
	        @param [number] (optional): Smoothing (0 is none)
	    */
	    smooth: function smooth(newValue, oldValue, duration) {
	        var smoothing = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	        return oldValue + duration * (newValue - oldValue) / Math.max(smoothing, duration);
	    },
	
	    /*
	        Convert x per second to per frame velocity based on fps
	        
	        @param [number]: Unit per second
	        @param [number]: Frame duration in ms
	    */
	    speedPerFrame: function speedPerFrame(xps, frameDuration) {
	        return utils.isNum(xps) ? xps / (1000 / frameDuration) : 0;
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
	        @param [number]: Lower limit of range
	        @param [number]: Upper limit of range
	        @return [number]: Value as calculated from progress within range (not limited within range)
	    */
	    value: function value(progress, from, to) {
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
	        return calc.value(easing(progress), from, to);
	    }
	};
	
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
	
	var splitCommaDelimited = __webpack_require__(56),
	    functionBreak = __webpack_require__(57);
	
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

	"use strict";
	
	module.exports = function (value, prefix) {
	  return prefix + "(" + value + ")";
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
	        unit: '%'
	    }
	};

/***/ },
/* 37 */
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

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
	},
	    utils = {
	    /*
	        Iterate over an object and fire a callback for every item in it
	         @param [object]: Properties
	        @param [function]: Callback to fire
	    */
	    each: function each(props, callback) {
	        var keys = props ? Object.keys(props) : [],
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
	        Is utils var a function ? 
	        
	        @param: Variable to test
	        @return [boolean]: Returns true if utils.varType === 'Function'
	    */
	    isFunc: function isFunc(obj) {
	        return varType(obj) === 'Function';
	    },
	
	    /*
	        Is utils var a number?
	        
	        @param: Variable to test
	        @return [boolean]: Returns true if typeof === 'number'
	    */
	    isNum: function isNum(num) {
	        return typeof num === 'number';
	    },
	
	    /*
	        Is utils var an object?
	        
	        @param: Variable to test
	        @return [boolean]: Returns true if typeof === 'object'
	    */
	    isObj: function isObj(obj) {
	        return typeof obj === 'object';
	    },
	
	    /*
	        Is utils var a string ? 
	        
	        @param: Variable to test
	        @return [boolean]: Returns true if typeof str === 'string'
	    */
	    isString: function isString(str) {
	        return typeof str === 'string';
	    },
	
	    /*
	        Is utils a relative value assignment?
	        
	        @param [string]: Variable to test
	        @return [boolean]: If utils looks like a relative value assignment
	    */
	    isRelativeValue: function isRelativeValue(value) {
	        return value && value.indexOf && value.indexOf('=') > 0;
	    },
	
	    /*
	        Is utils var an array ? 
	        
	        @param: Variable to test
	        @return [boolean]: Returns true if utils.varType === 'Array'
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
	        return utils.isArray(base) ? utils.copyArray(base) : utils.copyObject(base);
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
	
	        utils.each(base, function (key, value) {
	            newObject[key] = utils.isObj(value) && !isProtected(key) ? utils.copy(value) : value;
	        });
	
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
	        return base;
	    },
	
	    /*
	        Non-destructive merge of object or array
	        
	        @param [array || object]: Array or object to use as base
	        @param [array || object]: Array or object to overwrite base with
	        @return [array || object]: New array or object
	    */
	    merge: function merge(base, overwrite) {
	        return utils.isArray(base) ? utils.copyArray(overwrite) : utils.mergeObject(base, overwrite);
	    },
	
	    /*
	        Non-destructive merge of object
	        
	        @param [object]: Object to use as base
	        @param [object]: Object to overwrite base with
	        @return [object]: New object
	    */
	    mergeObject: function mergeObject(base, overwrite) {
	        var hasBase = utils.isObj(base),
	            newObject = hasBase ? utils.copy(base) : utils.copy(overwrite);
	
	        if (hasBase) {
	            utils.each(overwrite, function (key, value) {
	                newObject[key] = utils.isObj(value) && !isProtected(key) ? utils.merge(base[key], value) : value;
	            });
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
	        return performance && performance.now ? performance.now() : new Date().getTime();
	    }
	};
	
	module.exports = utils;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isString = __webpack_require__(38).isString;
	
	module.exports = function (value) {
	  return isString(value) ? value.split(' ') : [value];
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var each = __webpack_require__(38).each,
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
	    distance: PX,
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
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Queue = (function () {
	    function Queue() {
	        _classCallCheck(this, Queue);
	
	        this.clear();
	    }
	
	    /*
	        Add a set of arguments to queue
	    */
	
	    Queue.prototype.add = function add() {
	        this.queue.push([].slice.call(arguments));
	    };
	
	    /*
	        Get next set of arguments from queue
	    */
	
	    Queue.prototype.next = function next() {
	        var direction = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
	
	        var queue = this.queue,
	            returnVal = false,
	            index = this.index;
	
	        // If our index is between 0 and the queue length, return that item
	        if (index >= 0 && index < queue.length) {
	            returnVal = queue[index];
	            this.index = index + direction;
	
	            // Or clear
	        } else {
	                this.clear();
	            }
	
	        return returnVal;
	    };
	
	    /*
	        Replace queue with empty array
	    */
	
	    Queue.prototype.clear = function clear() {
	        this.queue = [];
	        this.index = 0;
	    };
	
	    return Queue;
	})();
	
	module.exports = Queue;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var valueTypeManager = __webpack_require__(19),
	    calc = __webpack_require__(32),
	    utils = __webpack_require__(38),
	    each = utils.each,
	    Action = __webpack_require__(27),
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
	
	        // User-defined transform function
	        if (value.transform) {
	            updatedValue = value.transform(updatedValue, key, this);
	        }
	
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
/* 48 */
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var maxHistorySize = 3;
	
	var History = (function () {
	
	    /*
	        History constructor
	        
	        @param [var]: Variable to store in first history slot
	        @param [int] (optional): Maximum size of history
	    */
	
	    function History(obj) {
	        var max = arguments.length <= 1 || arguments[1] === undefined ? maxHistorySize : arguments[1];
	
	        _classCallCheck(this, History);
	
	        this.max = max;
	        this.entries = [];
	        this.add(obj);
	    }
	
	    /*
	        Push new var to history
	        
	        Shift out oldest entry if we've reached maximum capacity
	        
	        @param [var]: Variable to push into history.entries
	    */
	
	    History.prototype.add = function add(obj) {
	        this.entries.push(obj);
	
	        if (this.getSize() >= this.max) {
	            this.entries.shift();
	        }
	    };
	
	    /*
	        Get variable at specified index
	         @param [int]: Index
	        @return [var]: Var found at specified index
	    */
	
	    History.prototype.get = function get() {
	        var i = arguments.length <= 0 || arguments[0] === undefined ? this.getSize() - 1 : arguments[0];
	
	        return this.entries[i];
	    };
	
	    /*
	        Get the second newest history entry
	        
	        @return [var]: Entry found at index size - 2
	    */
	
	    History.prototype.getPrevious = function getPrevious() {
	        return this.get(this.getSize() - 2);
	    };
	
	    /*
	        Get current history size
	        
	        @return [int]: Current length of entries.length
	    */
	
	    History.prototype.getSize = function getSize() {
	        return this.entries.length;
	    };
	
	    return History;
	})();
	
	module.exports = History;

/***/ },
/* 50 */
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
/* 51 */
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Controls = __webpack_require__(50);
	
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
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
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
/* 55 */
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isString = __webpack_require__(38).isString;
	
	module.exports = function (value) {
	  return isString(value) ? value.split(/,\s*/) : [value];
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function (value) {
	  return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
	};

/***/ },
/* 58 */
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
	        var queue = this.deactivateQueue;
	        if (queue.indexOf(i) === -1) {
	            queue.push(i);
	        }
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
/* 59 */
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
	    FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined',
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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	/*
	    The loop
	*/
	"use strict";
	
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
	
	        tick(function (framestamp) {
	            self.timer.update(framestamp);
	            var isActive = self.callback.call(self.scope, framestamp, self.timer.getElapsed());
	
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
	
	var utils = __webpack_require__(38),
	    maxElapsed = 33,
	    Timer = function Timer() {
	    this.elapsed = 16.7;
	    this.current = utils.currentTime();
	    this.update();
	};
	
	Timer.prototype = {
	    update: function update(framestamp) {
	        this.prev = this.current;
	        this.current = framestamp;
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
	    hasWindow = typeof window !== 'undefined';
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWVmYTE0MDRhZmZmMGExNzBiMDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2FkL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wbW90aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9oc2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcG9zaXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9kaW1lbnNpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9hdHRyL2F0dHJSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvY3NzUm9sZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvc3ZnL3N2Z1JvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci9BY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VxdWVuY2UvU2VxdWVuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L0lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9pdGVyYXRvci9JdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9Qcm9jZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9Sb2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuL0Vhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvU2ltdWxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9zZWxlY3QtYWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9jYWxjLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL2dldC1jb2xvci12YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL3NwbGl0LXNwYWNlLWRlbGltaXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvY3NzL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9jc3MvdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL3N2Zy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm9sZXMvc3ZnL3R5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9yb2xlcy9wYXRoL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL1F1ZXVlLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rvci91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL3ZhbHVlLW9wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9IaXN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250cm9scy9Db250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi9wcmVzZXQtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuL1R3ZWVuQ29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvc2ltdWxhdGUvc2ltdWxhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L1BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9zZWxlY3QtZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvc3BsaXQtY29tbWEtZGVsaW1pdGVkLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tYnJlYWsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi9CZXppZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvbGVzL2Nzcy90cmFuc2Zvcm0tZGljdGlvbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9XYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9sb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL3RpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL3RpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7OztBQ3RDQSxLQUFJLFNBQVMsR0FBRyxtQkFBTyxDQUFDLENBQWEsQ0FBQztLQUNsQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQzs7QUFFdEIsT0FBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzs7Ozs7O0FBTXpDLE9BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxHQUFHLFlBQVk7QUFDL0IsV0FBTSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7RUFDckIsQzs7Ozs7O0FDWEQsYUFBWSxDQUFDOztBQUViLEtBQUksU0FBUyxHQUFHLG1CQUFPLENBQUMsQ0FBYyxDQUFDLENBQUM7Ozs7O0FBS3hDLFVBQVMsQ0FBQyxZQUFZLENBQUM7QUFDbkIsVUFBSyxFQUFFLG1CQUFPLENBQUMsQ0FBc0IsQ0FBQztBQUN0QyxVQUFLLEVBQUUsbUJBQU8sQ0FBQyxDQUFzQixDQUFDO0FBQ3RDLE9BQUUsRUFBRSxtQkFBTyxDQUFDLENBQW1CLENBQUM7QUFDaEMsUUFBRyxFQUFFLG1CQUFPLENBQUMsQ0FBb0IsQ0FBQztBQUNsQyxRQUFHLEVBQUUsbUJBQU8sQ0FBQyxDQUFvQixDQUFDO0FBQ2xDLFFBQUcsRUFBRSxtQkFBTyxDQUFDLENBQW9CLENBQUM7QUFDbEMsVUFBSyxFQUFFLG1CQUFPLENBQUMsQ0FBc0IsQ0FBQztBQUN0QyxjQUFTLEVBQUUsbUJB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RyxNQUFNLENBQUMscUJBQXFCLENBQUM7RUFDdkM7O0FBRUQsT0FBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLEMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBhZWZhMTQwNGFmZmYwYTE3MGIwNlxuICoqLyIsInZhciBwb3Btb3Rpb24gPSByZXF1aXJlKCcuL21vZHVsZS5qcycpLFxuICAgIFVJcmVmID0gd2luZG93LnVpO1xuXG53aW5kb3cudWkgPSB3aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuXG4vKlxuICAgIElmIG5vQ29uZmxpY3QgaXMgcnVuLCB0aGUgb3JpZ2luYWwgcmVmZXJlbmNlIHRvIHdpbmRvdy5VSSBpc1xuICAgIHJlc3RvcmVkIGFuZCBQb3Btb3Rpb24gaXMgbG9hZGVkIHRvIHdpbmRvdy5Qb3Btb3Rpb25cbiovXG53aW5kb3cudWkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB3aW5kb3cudWkgPSBVSXJlZjtcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbG9hZC9nbG9iYWwuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHBvcG1vdGlvbiA9IHJlcXVpcmUoJy4uL3BvcG1vdGlvbicpO1xuXG4vKlxuICAgIEFkZCBvcHRpb25hbCBjdXN0b20gdmFsdWUgdHlwZSBzdXBwb3J0XG4qL1xucG9wbW90aW9uLmFkZFZhbHVlVHlwZSh7XG4gICAgYWxwaGE6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2FscGhhJyksXG4gICAgYW5nbGU6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2FuZ2xlJyksXG4gICAgcHg6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3B4JyksXG4gICAgaHNsOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9oc2wnKSxcbiAgICByZ2I6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3JnYicpLFxuICAgIGhleDogcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvaGV4JyksXG4gICAgY29sb3I6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyksXG4gICAgcG9zaXRpb25zOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9wb3NpdGlvbnMnKSxcbiAgICBkaW1lbnNpb25zOiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9kaW1lbnNpb25zJyksXG4gICAgc2NhbGU6IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL3NjYWxlJyksXG4gICAgc2hhZG93OiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9zaGFkb3cnKSxcbiAgICBjb21wbGV4OiByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9jb21wbGV4Jylcbn0pO1xuXG4vKlxuICAgIFByZWRlZmluZWQgcm9sZXNcbiovXG5cbnBvcG1vdGlvbi5hdHRyID0gcmVxdWlyZSgnLi4vcm9sZXMvYXR0ci9hdHRyUm9sZScpO1xucG9wbW90aW9uLmNzcyA9IHJlcXVpcmUoJy4uL3JvbGVzL2Nzcy9jc3NSb2xlJyk7XG5wb3Btb3Rpb24uc3ZnID0gcmVxdWlyZSgnLi4vcm9sZXMvc3ZnL3N2Z1JvbGUnKTtcbnBvcG1vdGlvbi5kcmF3UGF0aCA9IHJlcXVpcmUoJy4uL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcG9wbW90aW9uO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xvYWQvbW9kdWxlLmpzXG4gKiovIiwidmFyIHZhbHVlVHlwZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL21hbmFnZXInKSxcblxuICAgIFBvcG1vdGlvbiA9IHtcblxuICAgICAgICBBY3RvcjogcmVxdWlyZSgnLi9hY3Rvci9BY3RvcicpLFxuXG4gICAgICAgIFNlcXVlbmNlOiByZXF1aXJlKCcuL3NlcXVlbmNlL1NlcXVlbmNlJyksXG5cbiAgICAgICAgSW5wdXQ6IHJlcXVpcmUoJy4vaW5wdXQvSW5wdXQnKSxcblxuICAgICAgICBJdGVyYXRvcjogcmVxdWlyZSgnLi9pdGVyYXRvci9JdGVyYXRvcicpLFxuXG4gICAgICAgIFByb2Nlc3M6IHJlcXVpcmUoJy4vcHJvY2Vzcy9Qcm9jZXNzJyksXG5cbiAgICAgICAgRWFzaW5nOiByZXF1aXJlKCcuL2FjdGlvbnMvdHdlZW4vRWFzaW5nJyksXG5cbiAgICAgICAgUm9sZTogcmVxdWlyZSgnLi9yb2xlcy9Sb2xlJyksXG5cbiAgICAgICAgQWN0aW9uOiByZXF1aXJlKCcuL2FjdGlvbnMvQWN0aW9uJyksXG4gICAgICAgIFR3ZWVuOiByZXF1aXJlKCcuL2FjdGlvbnMvVHdlZW4nKSxcbiAgICAgICAgU2ltdWxhdGU6IHJlcXVpcmUoJy4vYWN0aW9ucy9TaW11bGF0ZScpLFxuICAgICAgICBUcmFjazogcmVxdWlyZSgnLi9hY3Rpb25zL1RyYWNrJyksXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIENyZWF0ZSBhbiBJdGVyYXRvciBvZiBBY3RvcnMgd2l0aCBzZWxlY3RlZCBkb20gZWxlbWVudHNcbiAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0OiByZXF1aXJlKCcuL2luYy9zZWxlY3QtYWN0b3InKSxcblxuICAgICAgICBhZGRWYWx1ZVR5cGU6IGZ1bmN0aW9uICh0eXBlcykge1xuICAgICAgICAgICAgdmFsdWVUeXBlcy5leHRlbmQodHlwZXMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FsYzogcmVxdWlyZSgnLi9pbmMvY2FsYycpXG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBQb3Btb3Rpb247XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcG9wbW90aW9uLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiAxXG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAnZGVnJ1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYW5nbGUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ3B4J1xuICAgIH1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcHguanNcbiAqKi8iLCJ2YXIgY3JlYXRlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZCcpLFxuICAgIGdldENvbG9yVmFsdWVzID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZ2V0LWNvbG9yLXZhbHVlcycpLFxuICAgIGZ1bmN0aW9uQ3JlYXRlID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tY3JlYXRlJyksXG4gICAgZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyksXG4gICAgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5oc2w7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIEh1ZToge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAzNjBcbiAgICAgICAgfSxcbiAgICAgICAgU2F0dXJhdGlvbjogZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIExpZ2h0bmVzczogZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIEFscGhhOiBkZWZhdWx0UHJvcHMub3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiB2YWx1ZSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZignaHNsJykgPiAtMSksXG4gICAgXG4gICAgc3BsaXQ6IHZhbHVlID0+IGdldENvbG9yVmFsdWVzKHZhbHVlLCB0ZXJtcyksXG5cbiAgICBjb21iaW5lOiB2YWx1ZXMgPT4gZnVuY3Rpb25DcmVhdGUoY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgdGVybXMsICcsICcsIDIpLCAnaHNsYScpXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hzbC5qc1xuICoqLyIsInZhciBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgZ2V0Q29sb3JWYWx1ZXMgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzJyksXG4gICAgZnVuY3Rpb25DcmVhdGUgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1jcmVhdGUnKSxcbiAgICBkZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKSxcbiAgICBjb2xvckRlZmF1bHRzID0gZGVmYXVsdFByb3BzLmNvbG9yLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JykuY29sb3JzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBSZWQ6IGNvbG9yRGVmYXVsdHMsXG4gICAgICAgIEdyZWVuOiBjb2xvckRlZmF1bHRzLFxuICAgICAgICBCbHVlOiBjb2xvckRlZmF1bHRzLFxuICAgICAgICBBbHBoYTogZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogdmFsdWUgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ3JnYicpID4gLTEpLFxuICAgIFxuICAgIHNwbGl0OiB2YWx1ZSA9PiBnZXRDb2xvclZhbHVlcyh2YWx1ZSwgdGVybXMpLFxuXG4gICAgY29tYmluZTogdmFsdWVzID0+IGZ1bmN0aW9uQ3JlYXRlKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHRlcm1zLCAnLCAnLCAyKSwgJ3JnYmEnKVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9yZ2IuanNcbiAqKi8iLCJ2YXIgcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICBkZWZhdWx0UHJvcHM6IHJnYi5kZWZhdWx0UHJvcHMsXG5cbiAgICB0ZXN0OiB2YWx1ZSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZignIycpID4gLTEpLFxuICAgIFxuICAgIHNwbGl0OiB2YWx1ZSA9PiB7XG4gICAgICAgIHZhciByLCBnLCBiO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDIpO1xuICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigzLCAyKTtcbiAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoNSwgMik7XG5cbiAgICAgICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMSk7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDIsIDEpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cigzLCAxKTtcbiAgICAgICAgICAgIHIgKz0gcjtcbiAgICAgICAgICAgIGcgKz0gZztcbiAgICAgICAgICAgIGIgKz0gYjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBSZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICAgICAgICAgIEdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgICAgICAgICBCbHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgICAgICAgICBBbHBoYTogMVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiB2YWx1ZXMgPT4gcmdiLmNvbWJpbmUodmFsdWVzKVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oZXguanNcbiAqKi8iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICByZ2IgPSByZXF1aXJlKCcuL3JnYicpLFxuICAgIGhzbCA9IHJlcXVpcmUoJy4vaHNsJyksXG4gICAgaGV4ID0gcmVxdWlyZSgnLi9oZXgnKSxcbiAgICBzdXBwb3J0ZWQgPSBbcmdiLCBoc2wsIGhleF0sXG4gICAgbnVtU3VwcG9ydGVkID0gMyxcblxuICAgIHJ1blN1cHBvcnRlZCA9IGZ1bmN0aW9uIChtZXRob2QsIHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtU3VwcG9ydGVkOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzdXBwb3J0ZWRbaV0udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VwcG9ydGVkW2ldW21ldGhvZF0odmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB1dGlscy5tZXJnZShyZ2IuZGVmYXVsdFByb3BzLCBoc2wuZGVmYXVsdFByb3BzKSxcblxuICAgIHRlc3Q6IHZhbHVlID0+IHJnYi50ZXN0KHZhbHVlKSB8fCBoZXgudGVzdCh2YWx1ZSkgfHwgaHNsLnRlc3QodmFsdWUpLFxuXG4gICAgc3BsaXQ6IHZhbHVlID0+IHJ1blN1cHBvcnRlZCgnc3BsaXQnLCB2YWx1ZSksXG5cbiAgICBjb21iaW5lOiB2YWx1ZXMgPT4gKHZhbHVlcy5SZWQgIT09IHVuZGVmaW5lZCkgPyByZ2IuY29tYmluZSh2YWx1ZXMpIDogaHNsLmNvbWJpbmUodmFsdWVzKVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qc1xuICoqLyIsInZhciBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgcHhEZWZhdWx0cyA9IHJlcXVpcmUoJy4vcHgnKS5kZWZhdWx0UHJvcHMsXG4gICAgc3BsaXRTcGFjZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL3NwbGl0LXNwYWNlLWRlbGltaXRlZCcpLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JykucG9zaXRpb25zO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogcHhEZWZhdWx0cyxcbiAgICAgICAgXG4gICAgLypcbiAgICAgICAgU3BsaXQgcG9zaXRpb25zIGluIGZvcm1hdCBcIlggWSBaXCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogUG9zaXRpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwJSAzMCUgMFwiIC0+IHsyMCUsIDMwJSwgMH1cbiAgICAgICAgICAgIFwiMjAlIDMwJVwiIC0+IHsyMCUsIDMwJX1cbiAgICAgICAgICAgIFwiMjAlXCIgLT4gezIwJSwgMjAlfVxuICAgICovXG4gICAgc3BsaXQ6IHZhbHVlID0+IHtcbiAgICAgICAgdmFyIHBvc2l0aW9ucyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpLFxuICAgICAgICAgICAgbnVtUG9zaXRpb25zID0gcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICAgIHNwbGl0VmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgWDogcG9zaXRpb25zWzBdLFxuICAgICAgICAgICAgICAgIFk6IChudW1Qb3NpdGlvbnMgPiAxKSA/IHBvc2l0aW9uc1sxXSA6IHBvc2l0aW9uc1swXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICBpZiAobnVtUG9zaXRpb25zID4gMikge1xuICAgICAgICAgICAgc3BsaXRWYWx1ZS5aID0gcG9zaXRpb25zWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IHZhbHVlcyA9PiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCB0ZXJtcywgJyAnKVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanNcbiAqKi8iLCJ2YXIgdGVybXMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKS5kaW1lbnNpb25zLFxuICAgIHB4RGVmYXVsdHMgPSByZXF1aXJlKCcuL3B4JykuZGVmYXVsdFByb3BzLFxuICAgIGNyZWF0ZURlbGltaXRlZCA9IHJlcXVpcmUoJy4vbWFuaXB1bGF0b3JzL2NyZWF0ZS1kZWxpbWl0ZWQnKSxcbiAgICBzcGxpdFNwYWNlRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9tYW5pcHVsYXRvcnMvc3BsaXQtc3BhY2UtZGVsaW1pdGVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gICAgZGVmYXVsdFByb3BzOiBweERlZmF1bHRzLFxuICAgIFxuICAgIC8qXG4gICAgICAgIFNwbGl0IGRpbWVuc2lvbnMgaW4gZm9ybWF0IFwiVG9wIFJpZ2h0IEJvdHRvbSBMZWZ0XCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogRGltZW5zaW9uIHZhbHVlc1xuICAgICAgICAgICAgXCIyMHB4IDAgMzBweCA0MHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDQwcHh9XG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHggMFwiIC0+IHsyMHB4LCAwLCAyMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4XCIgLT4gezIwcHgsIDIwcHgsIDIwcHgsIDIwcHh9XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCBUL1IvQi9MIG1ldHJpY3NcbiAgICAqL1xuICAgIHNwbGl0OiB2YWx1ZSA9PiB7XG4gICAgICAgIHZhciBkaW1lbnNpb25zID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSksXG4gICAgICAgICAgICBudW1EaW1lbnNpb25zID0gZGltZW5zaW9ucy5sZW5ndGgsXG4gICAgICAgICAgICBqdW1wQmFjayA9IChudW1EaW1lbnNpb25zICE9PSAxKSA/IDIgOiAxLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBqID0gMCxcbiAgICAgICAgICAgIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICBmb3IgKDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgc3BsaXRWYWx1ZVt0ZXJtc1tpXV0gPSBkaW1lbnNpb25zW2pdO1xuXG4gICAgICAgICAgICAvLyBKdW1wIGJhY2sgKHRvIHN0YXJ0KSBjb3VudGVyIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiBvdXIgdmFsdWVzXG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBqID0gKGogPT09IG51bURpbWVuc2lvbnMpID8gaiAtIGp1bXBCYWNrIDogajtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiB2YWx1ZXMgPT4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgdGVybXMsICcgJylcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvZGltZW5zaW9ucy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBpbml0OiAxXG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qc1xuICoqLyIsInZhciBjb2xvciA9IHJlcXVpcmUoJy4vY29sb3InKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIHB4RGVmYXVsdHMgPSByZXF1aXJlKCcuL3B4JykuZGVmYXVsdFByb3BzLFxuICAgIHRlcm1zID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jykuc2hhZG93LFxuICAgIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9zcGxpdC1zcGFjZS1kZWxpbWl0ZWQnKSxcbiAgICBjcmVhdGVEZWxpbWl0ZWQgPSByZXF1aXJlKCcuL21hbmlwdWxhdG9ycy9jcmVhdGUtZGVsaW1pdGVkJyksXG4gICAgc2hhZG93VGVybXMgPSB0ZXJtcy5zbGljZSgwLDQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIGRlZmF1bHRQcm9wczogdXRpbHMubWVyZ2UoY29sb3IuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIFg6IHB4RGVmYXVsdHMsXG4gICAgICAgIFk6IHB4RGVmYXVsdHMsXG4gICAgICAgIFJhZGl1czogcHhEZWZhdWx0cyxcbiAgICAgICAgU3ByZWFkOiBweERlZmF1bHRzXG4gICAgfSksXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBzaGFkb3cgcHJvcGVydGllcyBcIlggWSBSYWRpdXMgU3ByZWFkIENvbG9yXCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogU2hhZG93IHByb3BlcnR5XG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIHNwbGl0OiB2YWx1ZSA9PiB7XG4gICAgICAgIHZhciBiaXRzID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSksXG4gICAgICAgICAgICBudW1CaXRzID0gYml0cy5sZW5ndGgsXG4gICAgICAgICAgICBoYXNSZWFjaGVkQ29sb3IgPSBmYWxzZSxcbiAgICAgICAgICAgIGNvbG9yUHJvcCA9ICcnLFxuICAgICAgICAgICAgdGhpc0JpdCxcbiAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbnVtQml0czsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzQml0ID0gYml0c1tpXTtcblxuICAgICAgICAgICAgLy8gSWYgd2UndmUgcmVhY2hlZCB0aGUgY29sb3IgcHJvcGVydHksIGFwcGVuZCB0byBjb2xvciBzdHJpbmdcbiAgICAgICAgICAgIGlmIChoYXNSZWFjaGVkQ29sb3IgfHwgY29sb3IudGVzdCh0aGlzQml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IHRoaXNCaXQ7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3BsaXRWYWx1ZVt0ZXJtc1tpXV0gPSB0aGlzQml0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoc3BsaXRWYWx1ZSwgY29sb3Iuc3BsaXQoY29sb3JQcm9wKSk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IHZhbHVlcyA9PiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCBzaGFkb3dUZXJtcywgJyAnKSArIGNvbG9yLmNvbWJpbmUodmFsdWVzKVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanNcbiAqKi8iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaCxcbiAgICBmbG9hdFJlZ2V4ID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nLFxuXG4gICAgZ2VuZXJhdGVUb2tlbiA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuICckeycgKyBrZXkgKyAnfSc7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdmFsdWUubWF0Y2goZmxvYXRSZWdleCk7XG4gICAgICAgIHJldHVybiAodXRpbHMuaXNBcnJheShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDEpO1xuICAgIH0sXG5cbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoZmxvYXRSZWdleCwgKCkgPT4gZ2VuZXJhdGVUb2tlbihjb3VudGVyKyspKTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9LFxuICAgICAgICAgICAgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKGZsb2F0UmVnZXgpLFxuICAgICAgICAgICAgbnVtTWF0Y2hlcyA9IG1hdGNoZXMubGVuZ3RoO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1NYXRjaGVzOyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbaV0gPSBtYXRjaGVzW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMsIHRlbXBsYXRlKSB7XG4gICAgICAgIHZhciBjb21iaW5lZFZhbHVlID0gdGVtcGxhdGU7XG5cbiAgICAgICAgZWFjaCh2YWx1ZXMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb21iaW5lZFZhbHVlID0gY29tYmluZWRWYWx1ZS5yZXBsYWNlKGdlbmVyYXRlVG9rZW4oa2V5KSwgdmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY29tYmluZWRWYWx1ZTtcbiAgICB9XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJvbGUgPSByZXF1aXJlKCcuLi9Sb2xlJyk7XG52YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2g7XG5cbnZhciBhdHRyUm9sZSA9IG5ldyBSb2xlKHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICB2YXIgYWN0b3IgPSB0aGlzO1xuXG4gICAgICAgIGVhY2goc3RhdGUsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBhdHRyUm9sZS5zZXQoYWN0b3IuZWxlbWVudCwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgfSxcblxuICAgIHNldDogZnVuY3Rpb24gKGVsZW1lbnQsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXR0clJvbGU7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL2F0dHIvYXR0clJvbGUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFJvbGUgPSByZXF1aXJlKCcuLi9Sb2xlJyk7XG52YXIgYnVpbGQgPSByZXF1aXJlKCcuL2J1aWxkJyk7XG5cbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywnTW96JywnTycsJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHByb3BlcnR5TmFtZUNhY2hlID0ge307XG52YXIgdGVzdEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIFxuLypcbiAgICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICAgIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGlmIChwcm9wZXJ0eU5hbWVDYWNoZVtrZXldID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcGVydHlOYW1lQ2FjaGVba2V5XSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV0sXG4gICAgICAgICAgICBwcmVmaXhlZCA9IChwcmVmaXggPT09ICcnKSA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgICAgICBpZiAocHJlZml4ZWQgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZUNhY2hlW2tleV0gPSBwcmVmaXhlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcHJvcGVydHlOYW1lQ2FjaGVba2V5XTtcbn07XG5cbnZhciBjc3NSb2xlID0gbmV3IFJvbGUoe1xuICAgIF9tYXA6IHJlcXVpcmUoJy4vbWFwJyksXG4gICAgX3R5cGVNYXA6IHJlcXVpcmUoJy4vdHlwZS1tYXAnKSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uIChhY3Rvcikge1xuICAgICAgICBhY3Rvci5fY3NzQ2FjaGUgPSB7fTtcbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoc3RhdGUsIGFjdG9yKSB7XG4gICAgICAgIGNzc1JvbGUoYWN0b3IuZWxlbWVudCwgYnVpbGQoc3RhdGUsIGFjdG9yLl9jc3NDYWNoZSkpO1xuICAgIH0sXG5cbiAgICBnZXQ6IGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgICAgICAga2V5ID0gcHJvcGVydHlOYW1lQ2FjaGVba2V5XSB8fCB0ZXN0UHJlZml4KGtleSk7XG5cbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpW2tleV07XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2V0OiBmdW5jdGlvbiAoZWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBrZXkgPSBwcm9wZXJ0eU5hbWVDYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTtcblxuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gY3NzUm9sZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9jc3MvY3NzUm9sZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUm9sZSA9IHJlcXVpcmUoJy4uL1JvbGUnKSxcbiAgICBhdHRyUm9sZSA9IHJlcXVpcmUoJy4uL2F0dHIvYXR0clJvbGUnKSxcbiAgICBidWlsZCA9IHJlcXVpcmUoJy4vYnVpbGQnKSxcbiAgICBlYWNoID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuZWFjaDtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgUm9sZSh7XG4gICAgX21hcDogcmVxdWlyZSgnLi4vY3NzL21hcCcpLFxuICAgIF90eXBlTWFwOiByZXF1aXJlKCcuL3R5cGUtbWFwJyksXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYm91bmRpbmdCb3ggPSB0aGlzLmVsZW1lbnQuZ2V0QkJveCgpLFxuICAgICAgICAgICAgdmFsdWVzID0gdGhpcy52YWx1ZXMsXG4gICAgICAgICAgICAvLyBUT0RPOiBTdXBwb3J0IHB4XG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW5YID0gdmFsdWVzLnRyYW5zZm9ybU9yaWdpblggPyB2YWx1ZXMudHJhbnNmb3JtT3JpZ2luWC5jdXJyZW50IDogNTAsXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW5ZID0gdmFsdWVzLnRyYW5zZm9ybU9yaWdpblkgPyB2YWx1ZXMudHJhbnNmb3JtT3JpZ2luWS5jdXJyZW50IDogNTAsXG4gICAgICAgICAgICBvcmlnaW4gPSB7XG4gICAgICAgICAgICAgICAgeDogYm91bmRpbmdCb3gud2lkdGggKiAodHJhbnNmb3JtT3JpZ2luWCAvIDEwMCkgKyBib3VuZGluZ0JveC54LFxuICAgICAgICAgICAgICAgIHk6IGJvdW5kaW5nQm94LmhlaWdodCAqICh0cmFuc2Zvcm1PcmlnaW5ZIC8gMTAwKSArIGJvdW5kaW5nQm94LnlcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdmdPcmlnaW4gPSBvcmlnaW47XG4gICAgfSxcblxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgIHZhciBhY3RvciA9IHRoaXM7XG4gICAgICAgIGVhY2goYnVpbGQoc3RhdGUsIHRoaXMuc3ZnT3JpZ2luKSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGF0dHJSb2xlLnNldChhY3Rvci5lbGVtZW50LCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9zdmcvc3ZnUm9sZS5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUm9sZSA9IHJlcXVpcmUoJy4uL1JvbGUnKTtcbnZhciBhdHRyUm9sZSA9IHJlcXVpcmUoJy4uL2F0dHIvYXR0clJvbGUnKTtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuZWFjaDtcblxuLypcbiAgICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQZXJjZW50YWdlIG9mIHRvdGFsIGxlbmd0aFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xudmFyIHBlcmNlbnRUb1BpeGVscyA9IGZ1bmN0aW9uIChwZXJjZW50YWdlLCBsZW5ndGgpIHtcbiAgICByZXR1cm4gKHBhcnNlRmxvYXQocGVyY2VudGFnZSkgLyAxMDApICogbGVuZ3RoICsgJ3B4Jztcbn07XG5cbi8qXG4gICAgQ3JlYXRlIHN0eWxlc1xuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogU1ZHIFBhdGggcHJvcGVydGllc1xuICAgIEBwYXJhbSBbb2JqZWN0XTogTGVuZ3RoIG9mIHBhdGhcbiAgICBAcmV0dXJucyBbb2JqZWN0XTogS2V5L3ZhbHVlIHBhaXJzIG9mIHZhbGlkIENTUyBwcm9wZXJ0aWVzXG4qL1xudmFyIGNyZWF0ZVN0eWxlcyA9IGZ1bmN0aW9uIChwcm9wcywgbGVuZ3RoKSB7XG4gICAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlLFxuICAgICAgICBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgICAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlcyA9IHt9O1xuXG4gICAgZWFjaChwcm9wcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAga2V5ID0gU1ZHRHJhd1BhdGguX21hcFtrZXldIHx8IGtleTtcblxuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgICAgIGNhc2UgJ3NwYWNpbmcnOlxuICAgICAgICAgICAgICAgIGhhc0Rhc2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbn07XG5cbi8qXG4gICAgRHJhdyBQYXRoIHJvbGVcbiovXG52YXIgU1ZHRHJhd1BhdGggPSBuZXcgUm9sZSh7XG4gICAgX21hcDogcmVxdWlyZSgnLi9tYXAnKSxcblxuICAgIF90eXBlTWFwOiB7XG4gICAgICAgIHN0cm9rZTogJ2NvbG9yJyxcbiAgICAgICAgZDogJ2NvbXBsZXgnXG4gICAgfSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wYXRoTGVuZ3RoID0gdGhpcy5lbGVtZW50LmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFVwZGF0ZSBgcGF0aGAgc3R5bGVzIGFuZCBpZiBgZWxlbWVudGAgaXMgcHJlc2VudCwgc2V0XG4gICAgICAgIHgsIHkgYW5kIHJvdGF0aW9uXG4gICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICBhdHRyUm9sZS51cGRhdGUuY2FsbCh0aGlzLCBjcmVhdGVTdHlsZXMoc3RhdGUsIHRoaXMucGF0aExlbmd0aCkpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNWR0RyYXdQYXRoO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlLmpzXG4gKiovIiwiY29uc3QgZWFjaCA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLmVhY2g7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGV4dGVuZDogZnVuY3Rpb24gKHR5cGVzKSB7XG4gICAgICAgIGVhY2godHlwZXMsIChuYW1lLCB0eXBlKSA9PiB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSB0eXBlO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZGVmYXVsdFByb3BzOiBmdW5jdGlvbiAodHlwZU5hbWUsIGtleSkge1xuICAgICAgICB2YXIgdmFsdWVUeXBlID0gdGhpc1t0eXBlTmFtZV0sXG4gICAgICAgICAgICBkZWZhdWx0UHJvcHMgPSAodmFsdWVUeXBlLmRlZmF1bHRQcm9wcykgPyB2YWx1ZVR5cGUuZGVmYXVsdFByb3BzW2tleV0gfHwgdmFsdWVUeXBlLmRlZmF1bHRQcm9wcyA6IHt9O1xuXG4gICAgICAgIHJldHVybiBkZWZhdWx0UHJvcHM7XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGZhbHNlO1xuXG4gICAgICAgIGVhY2godGhpcywgKGtleSwgdmFsdWVUeXBlKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWVUeXBlLnRlc3QgJiYgdmFsdWVUeXBlLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9IGtleTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5hZ2VyLmpzXG4gKiovIiwidmFyIFByb2Nlc3MgPSByZXF1aXJlKCcuLi9wcm9jZXNzL1Byb2Nlc3MnKSxcbiAgICBRdWV1ZSA9IHJlcXVpcmUoJy4uL2luYy9RdWV1ZScpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgdXBkYXRlID0gcmVxdWlyZSgnLi91cGRhdGUnKSxcbiAgICB2YWx1ZU9wcyA9IHJlcXVpcmUoJy4vdmFsdWUtb3BlcmF0aW9ucycpLFxuXG4gICAgQWN0aW9uID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9BY3Rpb24nKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaDtcblxuY2xhc3MgQWN0b3Ige1xuXG4gICAgLypcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICAgICAgdmFyIHByb3BzID0gdXRpbHMuaXNTdHJpbmcob3B0cykgPyB7IGVsZW1lbnQ6IG9wdHMgfSA6IG9wdHM7XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWVzOiB7fSB9O1xuICAgICAgICB0aGlzLnF1ZXVlID0gbmV3IFF1ZXVlKCk7XG4gICAgICAgIHRoaXMucHJvY2VzcyA9IG5ldyBQcm9jZXNzKHRoaXMsIHVwZGF0ZSk7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLm51bUFjdGl2ZSA9IDA7XG4gICAgICAgIHRoaXMuYWN0aW9uQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuYWN0aXZlVmFsdWVzID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZlUGFyZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gR2V0IGFjdHVhbCBlbGVtZW50cyBpZiB0aGlzIGlzIGEgc2VsZWN0b3JcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHByb3BzLmVsZW1lbnQpKSB7XG4gICAgICAgICAgICBwcm9wcy5lbGVtZW50ID0gc2VsZWN0KHByb3BzLmVsZW1lbnQpWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hc3NpZ25Sb2xlcyhwcm9wcy5lbGVtZW50LCBwcm9wcy5hcywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0KHByb3BzKTtcbiAgICAgICAgdGhpcy5pbml0Um9sZXMoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTZXQgQWN0b3IgcHJvcGVydGllcyBhbmQgdmFsdWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHNldChvcHRzKSB7XG4gICAgICAgIGVhY2gob3B0cywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgIT09ICd2YWx1ZXMnICYmIGtleSAhPT0gJ2FjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG9wdHMgJiYgb3B0cy52YWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVPcHMucHJvY2Vzcyh0aGlzLnZhbHVlcywgb3B0cy52YWx1ZXMsIG9wdHMsICdjdXJyZW50JywgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBhbGwgYWN0aXZlIGFjdGlvbnMgZm9yIGFueSB0aGF0IGNhbiBiZSByZW1vdmVkXG4gICAgICAgIGVhY2godGhpcy5hY3RpdmVBY3Rpb25zLCAoaWQsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgbGV0IGFjdGlvbklzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGVhY2godGhpcy52YWx1ZXMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uSXNBY3RpdmUgPSAodmFsdWUuYWN0aW9uID09PSBhY3Rpb24pID8gdHJ1ZSA6IGFjdGlvbklzQWN0aXZlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghYWN0aW9uSXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuYmluZEFjdGlvbihpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEJpbmQgQWN0aW9uLXNwZWNpZmljIGNvbnRyb2xzIHRvIEFjdG9yXG5cbiAgICAgICAgQHJldHVybnMgW0NvbnRyb2xzXVxuICAgICovXG4gICAgY29udHJvbHMoYWN0aW9uKSB7XG4gICAgICAgIHZhciBDb250cm9scyA9IGFjdGlvbi5nZXRDb250cm9scygpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnRyb2xzKHRoaXMsIGFjdGlvbi5nZXRQbGF5YWJsZSgpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBhIG5ldyBBY3Rpb25cblxuICAgICAgICBAcGFyYW0gW0FjdGlvbiB8fCBudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbSW5wdXQgfHwgZXZlbnRdIChvcHRpb25hbClcbiAgICAgICAgQHBhcmFtIFtib29sZWFuXSAob3B0aW9uYWwpOiBkZWZpbmVkIGB0cnVlYCBpZiB3ZSBzdXJwcmVzcyBtYWtpbmcgbmV3IHF1ZXVlXG4gICAgICAgIEByZXR1cm5zIFtDb250cm9sc11cbiAgICAqL1xuICAgIHN0YXJ0KHRvU2V0LCBpbnB1dCkge1xuICAgICAgICBsZXQgYWN0aW9uRXhpc3RzID0gdXRpbHMuaXNOdW0odG9TZXQpLFxuICAgICAgICAgICAgYWN0aW9uID0gKGFjdGlvbkV4aXN0cykgPyB0aGlzLmdldEFjdGlvbih0b1NldCkgOiB0b1NldC5nZXRQbGF5YWJsZSgpLFxuICAgICAgICAgICAgb3B0cyA9IGFjdGlvbi5nZXRTZXQoKSxcbiAgICAgICAgICAgIHN1cnByZXNzUXVldWVDbGVhciA9IChhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID09PSBmYWxzZSk7XG5cbiAgICAgICAgb3B0cy5hY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgICAgdGhpcy5zZXQob3B0cyk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICBhY3Rpb24uYmluZElucHV0KGlucHV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3VycHJlc3NRdWV1ZUNsZWFyKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIGFsbCBSb2xlIG9uU3RhcnRzIGlmIG5vdCBhbHJlYWR5IGFjdGl2ZVxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIGxldCBudW1Sb2xlcyA9IHRoaXMucm9sZXMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Sb2xlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvbGUgPSB0aGlzLnJvbGVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChyb2xlLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGUuc3RhcnQuY2FsbCh0aGlzLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIG5ldyBhY3Rpb24gb25TdGFydFxuICAgICAgICBpZiAoIWFjdGlvbi5pc0FjdGl2ZSAmJiBhY3Rpb24ub25TdGFydCkge1xuICAgICAgICAgICAgYWN0aW9uLm9uU3RhcnQuY2FsbCh0aGlzLCB0aGlzLCBhY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuXG4gICAgICAgIGlmICghYWN0aW9uRXhpc3RzKSB7XG4gICAgICAgICAgICBsZXQgQ29udHJvbHMgPSBhY3Rpb24uZ2V0Q29udHJvbHMoKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29udHJvbHModGhpcywgYWN0aW9uLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFBhdXNlIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGVhY2godGhpcy5hY3RpdmVBY3Rpb25zLCAoaWQsIGFjdGlvbikgPT4gYWN0aW9uLmRlYWN0aXZhdGUoKSk7XG4gICAgICAgIHRoaXMucHJvY2Vzcy5zdG9wKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFJlc3VtZSBhbGwgYWN0aXZlIEFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW2ludF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJucyBbQWN0b3JdO1xuICAgICovXG4gICAgcmVzdW1lKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZWFjaCh0aGlzLmFjdGl2ZUFjdGlvbnMsIChpZCwgYWN0aW9uKSA9PiBhY3Rpb24uYWN0aXZhdGUoKSk7XG4gICAgICAgIHRoaXMucHJvY2Vzcy5zdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdG9wIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgZWFjaCh0aGlzLmFjdGl2ZUFjdGlvbnMsIChpZCkgPT4gdGhpcy51bmJpbmRBY3Rpb24oaWQpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVG9nZ2xlIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgPyB0aGlzLnBhdXNlKCkgOiB0aGlzLnJlc3VtZSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN5bmNzIGBlbGVtZW50YCB3aXRoIGN1cnJlbnQgcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHN5bmMoKSB7XG4gICAgICAgIHRoaXMuc3RhcnQobmV3IEFjdGlvbih7IHZhbHVlczogdGhpcy52YWx1ZXMgfSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBZGQgYSBuZXcgQWN0aW9uIHRvIHRoZSBxdWV1ZVxuICAgICovXG4gICAgdGhlbigpIHtcbiAgICAgICAgdGhpcy5xdWV1ZS5hZGQuYXBwbHkodGhpcy5xdWV1ZSwgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgRXhlY3V0ZSBuZXh0IGluIHF1ZXVlXG4gICAgKi9cbiAgICBuZXh0KCkge1xuICAgICAgICB2YXIgbmV4dCA9IHRoaXMucXVldWUubmV4dCgpO1xuXG4gICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jKG5leHRbMF0pKSB7XG4gICAgICAgICAgICAgICAgbmV4dFswXSgpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgLy8gT3IgdGhpcyBpcyBhbiBhY3Rpb25cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV4dC5wdXNoKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0LmFwcGx5KHRoaXMsIG5leHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBc3NpZ24gUm9sZXMgYmFzZWQgb24gZWxlbWVudCBhbmQgbWFudWFsbHkgcHJvdmlkZWQgcHJvcHNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEVsZW1lbnRcbiAgICAgICAgQHBhcmFtIFtSb2xlIHx8IGFycmF5XVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dIChvcHRpb25hbClcbiAgICAqL1xuICAgIGFzc2lnblJvbGVzKGVsZW1lbnQsIG1hbnVhbFJvbGVzLCBzdXJwcmVzc0luaXQpIHtcbiAgICAgICAgLy8gQWxsIEFjdG9ycyBnZXQgYSBkZWZhdWx0IFJvbGUgdGhhdCBoYW5kbGVzIHVzZXIgY2FsbGJhY2tzXG4gICAgICAgIHRoaXMucm9sZXMgPSBbIGRlZmF1bHRSb2xlIF07XG5cbiAgICAgICAgLy8gQXV0by1hc3NpZ24gaWYgbm8gbWFudWFsbHktc2V0IFJvbGVzXG4gICAgICAgIGlmICghbWFudWFsUm9sZXMgJiYgZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5hdXRvQXNzaWduUm9sZXMoZWxlbWVudCk7XG5cbiAgICAgICAgLy8gT3IgbWFudWFsbHkgc2V0IGlmIHByb3ZpZGVkXG4gICAgICAgIH0gZWxzZSBpZiAobWFudWFsUm9sZXMpIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0FycmF5KG1hbnVhbFJvbGVzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaC5hcHBseSh0aGlzLnJvbGVzLCBtYW51YWxSb2xlcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaChtYW51YWxSb2xlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN1cnByZXNzSW5pdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0Um9sZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEF1dG9tYXRpY2FsbHkgYXNzaWduIFJvbGVzIGJhc2VkIG9uIGVsZW1lbnQsIGRlc2lnbmVkXG4gICAgICAgIHRvIGJlIGV4dGVuZGVkXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBFbGVtZW50XG4gICAgKi9cbiAgICBhdXRvQXNzaWduUm9sZXMoZWxlbWVudCkge1xuICAgICAgICAvLyBBZGQgQ1NTIHJvbGUgaWYgSFRNTEVsZW1lbnRcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdzdmcnKSB7XG4gICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2goY3NzUm9sZSk7XG5cbiAgICAgICAgLy8gQWRkIFNWRyByb2xlIGlmIFNWRyBlbGVtZW50XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaChzdmdSb2xlKTtcblxuICAgICAgICAgICAgLy8gQWRkIERyYXcgUGF0aCByb2xlIGlmIHBhdGggZWxlbWVudFxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2xlcy5wdXNoKGRyYXdQYXRoUm9sZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBGaXJlIGluaXQgY2FsbGJhY2tzXG4gICAgKi9cbiAgICBpbml0Um9sZXMoKSB7XG4gICAgICAgIC8vIEZpcmUgaW5pdCBjYWxsYmFja1xuICAgICAgICB0aGlzLnJvbGVzLmZvckVhY2goKHJvbGUpID0+IHtcbiAgICAgICAgICAgIGlmIChyb2xlLmluaXQpIHtcbiAgICAgICAgICAgICAgICByb2xlLmluaXQuY2FsbCh0aGlzLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZpcnN0RnJhbWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBCaW5kIEFjdGlvbiBhbmQgcmV0dXJuIGl0cyB0YWJsZSBpZFxuXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICBAcmV0dXJucyBbaW50XVxuICAgICovXG4gICAgYmluZEFjdGlvbihhY3Rpb24sIGlkKSB7XG4gICAgICAgIGlmIChpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZCA9IHRoaXMuYWN0aW9uQ291bnRlcisrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc0FjdGlvbihpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF0gPSBhY3Rpb247XG4gICAgICAgICAgICB0aGlzLm51bUFjdGl2ZSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIHVuYmluZEFjdGlvbihpZCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgICAgdGhpcy5udW1BY3RpdmUtLTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLm51bUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QWN0aW9uKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgIH1cblxuICAgIGhhc0FjdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0QWN0aW9uKGlkKSAhPT0gdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBVcGRhdGUgcHJvY2Vzc2luZyBvcmRlclxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl1cbiAgICAgICAgQHBhcmFtIFtib29sZWFuXVxuICAgICovXG4gICAgdXBkYXRlT3JkZXIoa2V5LCBtb3ZlVG9CYWNrLCBoYXNDaGlsZHJlbikge1xuICAgICAgICB2YXIgb3JkZXIgPSAoIWhhc0NoaWxkcmVuKSA/IHRoaXMuYWN0aXZlVmFsdWVzIDogdGhpcy5hY3RpdmVQYXJlbnRzLFxuICAgICAgICAgICAgcG9zaXRpb24gPSBvcmRlci5pbmRleE9mKGtleSk7XG5cbiAgICAgICAgLy8gSWYga2V5IGlzbid0IGxpc3Qgb3IgbW92ZVRvQmFjayBpcyBzZXQgdG8gdHJ1ZSwgYWRkIGtleVxuICAgICAgICBpZiAocG9zaXRpb24gPT09IC0xIHx8IG1vdmVUb0JhY2spIHtcbiAgICAgICAgICAgIG9yZGVyLnB1c2goa2V5KTtcblxuICAgICAgICAgICAgLy8gSWYga2V5IGFscmVhZHkgZXhpc3RzLCByZW1vdmVcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA+IC0xKSB7XG4gICAgICAgICAgICAgICAgb3JkZXIuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFtib29sZWFuXTogSXMgdGhpcyBBY3RvciBhY3RpdmU/XG4gICAgZ2V0IGlzQWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNBY3RpdmU7XG4gICAgfVxuXG4gICAgLy8gU2V0IGhhc0NoYW5nZWQgdG8gdHJ1ZSBpcyB0aGlzIGlzIG5vdyBhY3RpdmVcbiAgICBzZXQgaXNBY3RpdmUoc3RhdHVzKSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHN0YXR1cztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2lzQWN0aXZlID0gc3RhdHVzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBY3RvcjtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0b3IvQWN0b3IuanNcbiAqKi8iLCJ2YXIgQWN0b3IgPSByZXF1aXJlKCcuLi9hY3Rvci9BY3RvcicpO1xudmFyIFR3ZWVuID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Ud2VlbicpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG52YXIgY2FsY1JlbGF0aXZlID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKS5yZWxhdGl2ZVZhbHVlO1xuXG52YXIgdGltZWxpbmUgPSBuZXcgVHdlZW4oe1xuICAgIGVhc2U6ICdsaW5lYXInLFxuICAgIHZhbHVlczoge1xuICAgICAgICBwbGF5aGVhZDogMFxuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBjaGVja0FjdGlvbnMoeyBwbGF5aGVhZCB9LCBzZXF1ZW5jZSkge1xuICAgIHZhciBpID0gc2VxdWVuY2UuY2hlY2subGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBsZXQgdG9DaGVjayA9IHNlcXVlbmNlLmNoZWNrW2ldO1xuXG4gICAgICAgIGlmIChwbGF5aGVhZCA+PSB0b0NoZWNrLnRpbWVzdGFtcCkge1xuICAgICAgICAgICAgdG9DaGVjay5jYWxsYmFjaygpO1xuICAgICAgICAgICAgc2VxdWVuY2UuY2hlY2suc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUNhbGxiYWNrKGFjdG9yLCBhY3Rpb24pIHtcbiAgICB2YXIgY2FsbGJhY2s7XG5cbiAgICBpZiAoYWN0b3IuZWFjaCkge1xuICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIGFjdG9yLmVhY2goYWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIGFjdG9yLnN0YXJ0KGFjdGlvbik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGxiYWNrO1xufVxuXG5jbGFzcyBTZXF1ZW5jZSBleHRlbmRzIEFjdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBjaGVjazogW10sXG4gICAgICAgICAgICBzZXF1ZW5jZTogW10sXG4gICAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lc3RhbXA6IDAsXG4gICAgICAgICAgICBwcmV2QWN0aW9uRW5kOiAwLFxuICAgICAgICAgICAgb25VcGRhdGU6IGNoZWNrQWN0aW9uc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkbyhhY3RvciwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBpc0NhbGxiYWNrID0gdXRpbHMuaXNGdW5jKGFjdG9yKTtcblxuICAgICAgICB0aGlzLnNlcXVlbmNlLnB1c2goe1xuICAgICAgICAgICAgdGltZXN0YW1wOiB0aGlzLmN1cnJlbnRUaW1lc3RhbXAsXG4gICAgICAgICAgICBjYWxsYmFjazogaXNDYWxsYmFjayA/IGFjdG9yIDogZ2VuZXJhdGVDYWxsYmFjayhhY3RvciwgYWN0aW9uKVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoYWN0aW9uICYmIGFjdGlvbi5kdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5wcmV2QWN0aW9uRW5kID0gdGhpcy5jdXJyZW50VGltZXN0YW1wICsgYWN0aW9uLmR1cmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhZ2dlcihpdGVyYXRvciwgYWN0aW9uLCBzdGFnZ2VyUHJvcHMpIHtcbiAgICAgICAgdmFyIG51bUl0ZW1zID0gaXRlcmF0b3IubWVtYmVycy5sZW5ndGgsXG4gICAgICAgICAgICBpbnRlcnZhbCA9IHV0aWxzLmlzTnVtKHN0YWdnZXJQcm9wcykgPyBzdGFnZ2VyUHJvcHMgOiBzdGFnZ2VyUHJvcHMuaW50ZXJ2YWwgfHwgMTAwLFxuICAgICAgICAgICAgZHVyYXRpb24gPSBhY3Rpb24uZHVyYXRpb24gPyBhY3Rpb24uZHVyYXRpb24gOiAwO1xuXG4gICAgICAgIHRoaXMuZG8oaXRlcmF0b3IsICgpID0+IHtcbiAgICAgICAgICAgIGl0ZXJhdG9yLnN0YWdnZXIoYWN0aW9uLCBzdGFnZ2VyUHJvcHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByZXZBY3Rpb25FbmQgPSB0aGlzLmN1cnJlbnRUaW1lc3RhbXAgKyBkdXJhdGlvbiArIChpbnRlcnZhbCAqIG51bUl0ZW1zKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhdCh0aW1lc3RhbXApIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHRpbWVzdGFtcCkpIHtcbiAgICAgICAgICAgIHRpbWVzdGFtcCA9IGNhbGNSZWxhdGl2ZSh0aGlzLmN1cnJlbnRUaW1lc3RhbXAsIHRpbWVzdGFtcCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lc3RhbXAgPSB0aW1lc3RhbXA7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBNYXRoLm1heCh0aGlzLmN1cnJlbnRUaW1lc3RhbXAsIHRoaXMuZHVyYXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0aGVuKG9mZnNldCA9IFwiKz0wXCIpIHtcbiAgICAgICAgdGhpcy5hdChjYWxjUmVsYXRpdmUodGhpcy5wcmV2QWN0aW9uRW5kLCBvZmZzZXQpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KHRpbWVsaW5lLmV4dGVuZCh7XG4gICAgICAgICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbixcbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIHBsYXloZWFkOiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvOiB0aGlzLmR1cmF0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25TdGFydCgpIHtcbiAgICAgICAgdGhpcy5jaGVjayA9IHRoaXMuc2VxdWVuY2Uuc2xpY2UoKTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZSA9IFtdO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gdGhpcy5jdXJyZW50VGltZXN0YW1wID0gdGhpcy5wcmV2QWN0aW9uRW5kID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3NlcXVlbmNlL1NlcXVlbmNlLmpzXG4gKiovIiwiLypcbiAgICBJbnB1dCBjb250cm9sbGVyXG4qL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMuanMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscy5qcycpLFxuICAgIEhpc3RvcnkgPSByZXF1aXJlKCcuLi9pbmMvSGlzdG9yeS5qcycpLFxuXG4gICAgLypcbiAgICAgICAgSW5wdXQgY29uc3RydWN0b3JcbiAgICAgICAgXG4gICAgICAgICAgICBTeW50YXhcbiAgICAgICAgICAgICAgICBuZXdJbnB1dChuYW1lLCB2YWx1ZVssIHBvbGxdKVxuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgdG8gdHJhY2tcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBJbml0aWFsIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dIChvcHRpb25hbCk6IEZ1bmN0aW9uIHRvIHBvbGwgSW5wdXQgZGF0YVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBuZXdJbnB1dChwcm9wc1ssIHBvbGxdKVxuICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCBvZiB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl0gKG9wdGlvbmFsKTogRnVuY3Rpb24gdG8gcG9sbCBJbnB1dCBkYXRhXG5cbiAgICAgICAgQHJldHVybiBbSW5wdXRdXG4gICAgKi9cbiAgICBJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBvbGxQb3MgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcblxuICAgICAgICB0aGlzLmN1cnJlbnQgPSB7fTtcbiAgICAgICAgdGhpcy5vZmZzZXQgPSB7fTtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHt9O1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBuZXcgSGlzdG9yeSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSk7XG4gICAgICAgIFxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jKGFyZ3VtZW50c1twb2xsUG9zXSkpIHtcbiAgICAgICAgICAgIHRoaXMucG9sbCA9IGFyZ3VtZW50c1twb2xsUG9zXTtcbiAgICAgICAgfVxuICAgIH07XG5cbklucHV0LnByb3RvdHlwZSA9IHtcbiAgICBcbiAgICAvLyBbbnVtYmVyXTogTnVtYmVyIG9mIGZyYW1lcyBvZiBpbmFjdGl2aXR5IGJlZm9yZSB2ZWxvY2l0eSBpcyB0dXJuZWQgdG8gMFxuICAgIG1heEluYWN0aXZlRnJhbWVzOiAyLFxuICAgIFxuICAgIC8vIFtudW1iZXJdOiBOdW1iZXIgb2YgZnJhbWVzIGlucHV0IGhhc24ndCBiZWVuIHVwZGF0ZWRcbiAgICBpbmFjdGl2ZUZyYW1lczogMCxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgbGF0ZXN0IGlucHV0IHZhbHVlc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddIChvcHRpb25hbCk6IE5hbWUgb2Ygc3BlY2lmaWMgcHJvcGVydHkgdG8gcmV0dXJuXG4gICAgICAgIEByZXR1cm4gW29iamVjdCB8fCBudW1iZXJdOiBMYXRlc3QgaW5wdXQgdmFsdWVzIG9yLCBpZiBzcGVjaWZpZWQsIHNpbmdsZSB2YWx1ZVxuICAgICovXG4gICAgZ2V0OiBmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICB2YXIgbGF0ZXN0ID0gdGhpcy5oaXN0b3J5LmdldCgpLFxuICAgICAgICAgICAgdmFsID0gKHByb3AgIT09IHVuZGVmaW5lZCkgPyBsYXRlc3RbcHJvcF0gOiBsYXRlc3Q7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIFVwZGF0ZSB0aGUgaW5wdXQgdmFsdWVzXG4gICAgICAgIFxuICAgICAgICBTeW50YXhcbiAgICAgICAgICAgIGlucHV0LnVwZGF0ZShuYW1lLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgdG8gdHJhY2tcbiAgICAgICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEluaXRpYWwgdmFsdWVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlucHV0LnVwZGF0ZShwcm9wcylcbiAgICAgICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCBvZiB2YWx1ZXNcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgQHJldHVybiBbSW5wdXRdXG4gICAgKi9cbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB7fTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW0oYXJnMSkpIHtcbiAgICAgICAgICAgIHZhbHVlc1thcmcwXSA9IGFyZzE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSBhcmcwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oaXN0b3J5LmFkZCh1dGlscy5tZXJnZSh0aGlzLmN1cnJlbnQsIHZhbHVlcykpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBDaGVjayBmb3IgaW5wdXQgbW92ZW1lbnQgYW5kIHVwZGF0ZSBwb2ludGVyIG9iamVjdCdzIHByb3BlcnRpZXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGltZXN0YW1wIG9mIGZyYW1lXG4gICAgICAgIEByZXR1cm4gW0lucHV0XVxuICAgICovXG4gICAgb25GcmFtZTogZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuICAgICAgICB2YXIgbGF0ZXN0LCBoYXNDaGFuZ2VkO1xuICAgICAgICBcbiAgICAgICAgLy8gQ2hlY2sgcHJvdmlkZWQgdGltZXN0YW1wIGFnYWluc3QgbGFzdEZyYW1lIHRpbWVzdGFtcCBhbmQgcmV0dXJuIGlucHV0IGhhcyBhbHJlYWR5IGJlZW4gdXBkYXRlZFxuICAgICAgICBpZiAodGltZXN0YW1wID09PSB0aGlzLmxhc3RGcmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsYXRlc3QgPSAodGhpcy5wb2xsKSA/IHRoaXMucG9sbCgpIDogdGhpcy5oaXN0b3J5LmdldCgpO1xuICAgICAgICBoYXNDaGFuZ2VkID0gdXRpbHMuaGFzQ2hhbmdlZCh0aGlzLmN1cnJlbnQsIGxhdGVzdCk7XG5cbiAgICAgICAgLy8gSWYgaW5wdXQgaGFzIGNoYW5nZWQgYmV0d2VlbiBmcmFtZXMgIFxuICAgICAgICBpZiAoaGFzQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IGNhbGMub2Zmc2V0KHRoaXMuY3VycmVudCwgbGF0ZXN0KTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGxhdGVzdDtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuXG4gICAgICAgIC8vIE9yIGl0IGhhc24ndCBtb3ZlZCBhbmQgb3VyIGZyYW1lIGxpbWl0IGhhcyBiZWVuIHJlYWNoZWRcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluYWN0aXZlRnJhbWVzID49IHRoaXMubWF4SW5hY3RpdmVGcmFtZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmVsb2NpdHkgPSBjYWxjLm9mZnNldCh0aGlzLmN1cnJlbnQsIHRoaXMuY3VycmVudCk7XG4gICAgICAgIFxuICAgICAgICAvLyBPciBpbnB1dCBoYXNuJ3QgY2hhbmdlZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcysrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxhc3RGcmFtZSA9IHRpbWVzdGFtcDtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5wdXQvSW5wdXQuanNcbiAqKi8iLCJ2YXIgQWN0b3IgPSByZXF1aXJlKCcuLi9hY3Rvci9BY3RvcicpLFxuICAgIFR3ZWVuID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Ud2VlbicpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmNvbnN0IERFRkFVTFRfU1RBR0dFUl9FQVNFID0gJ2xpbmVhcic7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ2FsbGJhY2sobWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gbWV0aG9kO1xuXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKG1ldGhvZCkpIHtcbiAgICAgICAgY2FsbGJhY2sgPSAobWVtYmVyKSA9PiBtZW1iZXJbbWV0aG9kXSguLi5hcmdzKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc0Z1bmMobWV0aG9kKSkge1xuICAgICAgICBjYWxsYmFjayA9IChtZW1iZXIpID0+IG1lbWJlci5zdGFydChtZXRob2QsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHJldHVybiBjYWxsYmFjaztcbn1cblxuY2xhc3MgSXRlcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lbWJlcnMpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICAgIGlmIChtZW1iZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChtZW1iZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0YWdnZXIgPSBuZXcgQWN0b3IoKTtcbiAgICB9XG5cbiAgICBhZGQobWVtYmVycykge1xuICAgICAgICB0aGlzLm1lbWJlcnMgPSB0aGlzLm1lbWJlcnMuY29uY2F0KG1lbWJlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGVhY2gobWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGdlbmVyYXRlQ2FsbGJhY2sobWV0aG9kLCAuLi5hcmdzKTtcbiAgICAgICAgdGhpcy5tZW1iZXJzLmZvckVhY2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBlYWNoSW50b05ldyhtZXRob2QsIC4uLmFyZ3MpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZ2VuZXJhdGVDYWxsYmFjayhtZXRob2QsIC4uLmFyZ3MpLFxuICAgICAgICAgICAgbmV3SXRlcmF0b3IgPSBuZXcgSXRlcmF0b3IoKTtcblxuICAgICAgICB0aGlzLm1lbWJlcnMuZm9yRWFjaCgobWVtYmVyKSA9PiBuZXdJdGVyYXRvci5hZGQoY2FsbGJhY2sobWVtYmVyKSkpO1xuXG4gICAgICAgIHJldHVybiBuZXdJdGVyYXRvcjtcbiAgICB9XG5cbiAgICBzdGFnZ2VyKG1ldGhvZCwgcHJvcHMsIC4uLmFyZ3MpIHtcbiAgICAgICAgdmFyIHRlbXBNZW1iZXJzID0gdXRpbHMuY29weUFycmF5KHRoaXMubWVtYmVycyksXG4gICAgICAgICAgICBudW1NZW1iZXJzID0gdGVtcE1lbWJlcnMubGVuZ3RoLFxuICAgICAgICAgICAgcHJvcHNJc0ludGVydmFsID0gdXRpbHMuaXNOdW0ocHJvcHMpLFxuICAgICAgICAgICAgaW50ZXJ2YWwgPSBwcm9wc0lzSW50ZXJ2YWwgPyBwcm9wcyA6IHByb3BzLmludGVydmFsIHx8IDEwMCxcbiAgICAgICAgICAgIHN0YWdnZXJQcm9wcyA9IHt9LFxuICAgICAgICAgICAgaSA9IC0xLFxuICAgICAgICAgICAgY2FsbGJhY2sgPSBnZW5lcmF0ZUNhbGxiYWNrKG1ldGhvZCwgLi4uYXJncyk7XG5cbiAgICAgICAgc3RhZ2dlclByb3BzLnZhbHVlcyA9IHtcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiAtMC42LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIG51bU1lbWJlcnMsXG4gICAgICAgICAgICAgICAgZWFzZTogcHJvcHNJc0ludGVydmFsID8gREVGQVVMVF9TVEFHR0VSX0VBU0UgOiBwcm9wcy5lYXNlIHx8IERFRkFVTFRfU1RBR0dFUl9FQVNFLFxuICAgICAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvOiBudW1NZW1iZXJzIC0gMC42XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc3RhZ2dlclByb3BzLm9uQ29tcGxldGUgPSBwcm9wc0lzSW50ZXJ2YWwgPyB1bmRlZmluZWQgOiBwcm9wcy5vbkNvbXBsZXRlO1xuXG4gICAgICAgIHN0YWdnZXJQcm9wcy5vblVwZGF0ZSA9IChvdXRwdXQpID0+IHtcbiAgICAgICAgICAgIHZhciBuZXdJbmRleCA9IG91dHB1dC5pLFxuICAgICAgICAgICAgICAgIGdhcEluZGV4ID0gaSArIDE7XG5cbiAgICAgICAgICAgIC8vIElmIG91ciBuZXcgaW5kZXggaXMgb25seSBvbmUgbW9yZSB0aGFuIHRoZSBwcmV2aW91cyBpbmRleCwgZmlyZSBpbW1lZGlldGx5XG4gICAgICAgICAgICBpZiAobmV3SW5kZXggPT09IGkgKyAxKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodGVtcE1lbWJlcnNbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG5cbiAgICAgICAgICAgIC8vIE9yIGxvb3AgdGhyb3VnaCB0aGUgZGlzdGFuY2UgdG8gZmlyZSBhbGwgaW5kZWNpZXMuIEluY3JlYXNlIGRlbGF5LlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKDsgZ2FwSW5kZXggPD0gbmV3SW5kZXg7IGdhcEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodGVtcE1lbWJlcnNbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpID0gbmV3SW5kZXg7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc3RhZ2dlci5zdGFydChuZXcgVHdlZW4oc3RhZ2dlclByb3BzKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQXJyYXkgbWFuaXB1bGF0aW9uXG4gICAgKi9cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLm1lbWJlcnMucmV2ZXJzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSXRlcmF0b3I7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaXRlcmF0b3IvSXRlcmF0b3IuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKSxcblxuICAgIC8qXG4gICAgICAgIFByb2Nlc3MgY29uc3RydWN0b3JcbiAgICAgICAgXG4gICAgICAgIFN5bnRheFxuICAgICAgICAgICAgdmFyIHByb2Nlc3MgPSBuZXcgUHJvY2VzcyhzY29wZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgdmFyIHByb2Nlc3MgPSBuZXcgUHJvY2VzcyhjYWxsYmFjayk7XG4gICAgKi9cbiAgICBQcm9jZXNzID0gZnVuY3Rpb24gKHNjb3BlLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgaGFzU2NvcGUgPSAoY2FsbGJhY2sgIT09IHVuZGVmaW5lZCk7XG5cbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGhhc1Njb3BlID8gY2FsbGJhY2sgOiBzY29wZTtcbiAgICAgICAgdGhpcy5zY29wZSA9IGhhc1Njb3BlID8gc2NvcGUgOiB0aGlzO1xuICAgICAgICB0aGlzLmlkID0gbWFuYWdlci5yZWdpc3RlcigpO1xuXG4gICAgICAgIC8vIFtib29sZWFuXTogSXMgdGhpcyBwcm9jZXNzIGN1cnJlbnRseSBhY3RpdmU/XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9O1xuXG5Qcm9jZXNzLnByb3RvdHlwZSA9IHtcbiAgICAvKlxuICAgICAgICBGaXJlIGNhbGxiYWNrXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3RpbWVzdGFtcF06IFRpbWVzdGFtcCBvZiBjdXJyZW50bHktZXhlY3V0ZWQgZnJhbWVcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaW1lIHNpbmNlIGxhc3QgZnJhbWVcbiAgICAqL1xuICAgIGZpcmU6IGZ1bmN0aW9uICh0aW1lc3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFjay5jYWxsKHRoaXMuc2NvcGUsIHRpbWVzdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB3ZSdyZSBydW5uaW5nIGF0IGFuIGludGVydmFsLCBkZWFjdGl2YXRlIGFnYWluXG4gICAgICAgIGlmICh0aGlzLmlzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdGFydCBwcm9jZXNzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IER1cmF0aW9uIG9mIHByb2Nlc3MgaW4gbXMsIDAgaWYgaW5kZWZpbml0ZVxuICAgICAgICBAcmV0dXJuIFt0aGlzXVxuICAgICovXG4gICAgc3RhcnQ6IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zdG9wKCk7XG4gICAgICAgICAgICB9LCBkdXJhdGlvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuaXNTdG9wVGltZXJBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdG9wIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEFjdGl2YXRlIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3RoaXNdXG4gICAgKi9cbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbWFuYWdlci5hY3RpdmF0ZSh0aGlzLCB0aGlzLmlkKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIERlYWN0aXZhdGUgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBtYW5hZ2VyLmRlYWN0aXZhdGUodGhpcy5pZCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEZpcmUgcHJvY2VzcyBldmVyeSB4IG1zXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBtcyB0byB3YWl0IGJldHdlZW4gcmVmaXJpbmcgcHJvY2Vzcy5cbiAgICAgICAgQHJldHVybiBbdGhpc11cbiAgICAqL1xuICAgIGV2ZXJ5OiBmdW5jdGlvbiAoaW50ZXJ2YWwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcblxuICAgICAgICB0aGlzLmlzSW50ZXJ2YWwgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuaW50ZXJ2YWxUaW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuYWN0aXZhdGUoKTtcbiAgICAgICAgfSwgaW50ZXJ2YWwpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5pc0ludGVydmFsVGltZUFjdGl2ZSA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIENsZWFyIGFsbCB0aW1lcnNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBcbiAgICAqL1xuICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNJbnRlcnZhbCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wVGltZXJBY3RpdmUpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0b3BUaW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmlzSW50ZXJ2YWxUaW1lQWN0aXZlKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxUaW1lcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvY2VzcztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanNcbiAqKi8iLCJ2YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcbnZhciBlYWNoID0gdXRpbHMuZWFjaDtcblxuLypcbiAgICBSb2xlIGNsYXNzIGNvbnN0cnVjdG9yXG5cbiAgICBAcGFyYW0gW29iamVjdF06IE9wdGlvbmFsIG1ldGhvZHMgYW5kIHByb3BzIHRvIGFkZDpcbiAgICAgICAgbmFtZSBbc3RyaW5nXTogICAgICBOYW1lIG9mIGdlbmVyYXRlZCBnZXR0ZXIvc2V0dGVyIG1ldGhvZCBvbiBBY3RvclxuICAgICAgICBfbWFwIFtvYmplY3RdOiAgICAgIE1hcCBBY3RvciB2YWx1ZXMgdG8gdGhlc2UgdmFsdWVzIGZvciB0aGlzIFJvbGVcbiAgICAgICAgX3R5cGVNYXAgW29iamVjdF06ICBNYXAgdmFsdWVzIHRvIHZhbHVlIHR5cGVzXG4gICAgICAgIGluaXQgW2Z1bmN0aW9uXTogICAgQ2FsbGJhY2sgdG8gcnVuIHdoZW4gdGhpcyBSb2xlIGlzIGFkZGVkIHRvIGFuIEFjdG9yXG4gICAgICAgIHN0YXJ0IFtmdW5jdGlvbl06ICAgQ2FsbGJhY2sgdG8gcnVuIHdoZW4gaG9zdCBBY3RvciBzdGFydHMgYW4gYWN0aW9uXG4gICAgICAgIGNvbXBsZXRlIFtmdW5jdGlvbl06IENhbGxiYWNrIHRvIHJ1biB3aGVuIGFjdGlvbiBjb21wbGV0ZXNcbiAgICAgICAgZnJhbWUgW2Z1bmN0aW9uXTogICBDYWxsYmFjayB0byBmaXJlIG9uY2UgcGVyIGZyYW1lXG4gICAgICAgIHVwZGF0ZSBbZnVuY3Rpb25dOiAgQ2FsbGJhY2sgdG8gZmlyZSB3aGVuIHZhbHVlcyBjaGFuZ2VcbiAgICAgICAgZ2V0IFtmdW5jdGlvbl06ICAgICBSZWFkIHZhbHVlIGZyb20gYWN0dWFsIGVsZW1lbnRcbiAgICAgICAgc2V0IFtmdW5jdGlvbl06ICAgICBTZXQgdmFsdWUgb24gYWN0dWFsIGVsZW1lbnRcbiovXG52YXIgUm9sZSA9IGZ1bmN0aW9uIChtZXRob2RzKSB7XG4gICAgdmFyIHJvbGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0cywgcHJvcCkge1xuICAgICAgICB2YXIgdHlwZU9mT3B0cyA9IHR5cGVvZiBvcHRzO1xuXG4gICAgICAgIC8vIFNldCBzaW5nbGUsIGlmIHRoaXMgaXMgYSBzdHJpbmcgYW5kIHdlIGhhdmUgYSBwcm9wZXJ0eVxuICAgICAgICBpZiAodHlwZU9mT3B0cyA9PT0gJ3N0cmluZycgJiYgcHJvcCkge1xuICAgICAgICAgICAgcm9sZS5zZXQoZWxlbWVudCwgb3B0cywgcHJvcCk7XG4gICAgICAgIFxuICAgICAgICAvLyBTZXQgbXVsdGksIGlmIHRoaXMgaXMgYW4gb2JqZWN0XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZU9mT3B0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGVhY2gob3B0cywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICByb2xlLnNldChlbGVtZW50LCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gT3IgdGhpcyBpcyBhIGdldCBpZiB3ZSBoYXZlIGEgc3RyaW5nIGFuZCBubyBwcm9wc1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJvbGUuZ2V0KGVsZW1lbnQsIG9wdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJvbGU7XG4gICAgfTtcblxuICAgIHJvbGUuX21hcCA9IHt9O1xuXG4gICAgZWFjaChtZXRob2RzLCBmdW5jdGlvbiAobmFtZSwgbWV0aG9kKSB7XG4gICAgICAgIHJvbGVbbmFtZV0gPSAoIXV0aWxzLmlzT2JqKG1ldGhvZCkpID8gbWV0aG9kIDogdXRpbHMuY29weShtZXRob2QpO1xuICAgIH0pO1xuXG5cbiAgICAvKlxuICAgICAgICBNYXAgdmFsdWUga2V5cyBvciBnZW5lcmF0ZSBuZXcgUm9sZSB3aXRoIHVwZGF0ZWQgbWFwXG5cbiAgICAgICAgR2V0dGVyOlxuICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgdG8gbWFwXG4gICAgICAgICAgICBAcmV0dXJuIFtzdHJpbmddOiBNYXBwZWQga2V5LCBvciBrZXkgaWYgbm8gbWFwcGVkIGtleSBmb3VuZFxuXG4gICAgICAgIFNldHRlcjogXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IE1hcCBvZiBBY3RvciBrZXlzIC0+IFJvbGUga2V5c1xuICAgICAgICAgICAgQHJldHVybiBbUm9sZV06IE5ldyBSb2xlIHdpdGggdW5pcXVlIG1hcFxuICAgICovXG4gICAgcm9sZS5tYXAgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBzdHJpbmcsIGdldCBtYXBwZWQgdmFsdWVcbiAgICAgICAgLy8gT3RoZXJ3aXNlIHRoaXMgaXMgYSBtYXAsIGR1cGxpY2F0ZWQgcm9sZSB3aXRoIHVwZGF0ZWQgbWFwXG4gICAgICAgIHJldHVybiAodXRpbHMuaXNTdHJpbmcodmFsdWVzKSkgPyB0aGlzLl9tYXBbdmFsdWVzXSB8fCB2YWx1ZXMgOiBjcmVhdGVSb2xlKHRoaXMsIHZhbHVlcyk7XG4gICAgfTtcblxuICAgIHJldHVybiByb2xlO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBuZXcgcm9sZVxuXG4gICAgQHBhcmFtIFtvYmplY3RdOiBPcHRpb25hbCBtZXRob2RzIGFuZCBwcm9wcyB0byBhZGRcbiAgICBAcGFyYW0gW3ZhbHVlc1RvTWFwXTogT3ZlcnJpZGUgZXhpc3RpbmcgbWFwIHdpdGggdGhlc2UgdmFsdWVzXG4gICAgQHJldHVybiBbUm9sZV06IE5ldyBSb2xlXG4qL1xudmFyIGNyZWF0ZVJvbGUgPSBmdW5jdGlvbiAobWV0aG9kcywgdmFsdWVzKSB7XG4gICAgdmFyIG5ld1JvbGUgPSBuZXcgUm9sZShtZXRob2RzKTtcblxuICAgIGVhY2godmFsdWVzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBuZXdSb2xlLl9tYXBba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ld1JvbGU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvbGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvUm9sZS5qc1xuICoqLyIsInZhciBCZXppZXIgPSByZXF1aXJlKCcuL0JlemllcicpLFxuXG4gICAgLypcbiAgICAgICAgTWlycm9yIGVhc2luZ1xuICAgICAgICBcbiAgICAgICAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICAgICAgICBlYXNlSW4gaW50byBhbiBlYXNlSW5PdXRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gbWlycm9yXG4gICAgICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4gICAgKi9cbiAgICBtaXJyb3JFYXNpbmcgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIG1ldGhvZCkge1xuICAgICAgICByZXR1cm4gKHByb2dyZXNzIDw9IDAuNSkgPyBtZXRob2QoMiAqIHByb2dyZXNzKSAvIDIgOiAoMiAtIG1ldGhvZCgyICogKDEgLSBwcm9ncmVzcykpKSAvIDI7XG4gICAgfSxcbiAgICAgICAgICAgIFxuICAgIC8qXG4gICAgICAgIFJldmVyc2UgZWFzaW5nXG4gICAgICAgIFxuICAgICAgICBSZXZlcnNlcyB0aGUgb3V0cHV0IG9mIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgZm9yIGZsaXBwaW5nIGVhc2VJblxuICAgICAgICBjdXJ2ZSB0byBhbiBlYXNlT3V0LlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byByZXZlcnNlXG4gICAgICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4gICAgKi9cbiAgICByZXZlcnNlRWFzaW5nID0gZnVuY3Rpb24gKHByb2dyZXNzLCBtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBtZXRob2QoMSAtIHByb2dyZXNzKTtcbiAgICB9O1xuXG4vKlxuICAgIEVhc2luZyBjbGFzc1xuXG4gICAgSWYgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCByZXR1cm5zIGVhc2luZyBmdW5jdGlvbiB3aXRoIFxuICAgIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5cbiAgICBJZiBwcm92aWRlZCBmb3VyIGFyZ3VtZW50cywgcmV0dXJucyBuZXcgQmV6aWVyIGNsYXNzIGluc3RlYWQuXG4qL1xudmFyIEVhc2luZyA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5Mikge1xuICAgIHZhciBtZXRob2QgPSB4MSxcbiAgICAgICAgZWFzaW5nRnVuY3Rpb247XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgYmV6aWVyIGN1cnZlLCByZXR1cm4gYSBiZXppZXIgZnVuY3Rpb25cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZWFzaW5nRnVuY3Rpb24gPSBuZXcgQmV6aWVyKHgxLCB5MSwgeDIsIHkyKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBlYXNpbmdGdW5jdGlvbi5pbiA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZWFzaW5nRnVuY3Rpb24ub3V0ID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gcmV2ZXJzZUVhc2luZyhwcm9ncmVzcywgbWV0aG9kKTtcbiAgICAgICAgfTtcblxuICAgICAgICBlYXNpbmdGdW5jdGlvbi5pbk91dCA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIG1pcnJvckVhc2luZyhwcm9ncmVzcywgbWV0aG9kKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWFzaW5nRnVuY3Rpb247XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVhc2luZztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL3R3ZWVuL0Vhc2luZy5qc1xuICoqLyIsImxldCBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoLFxuICAgIENvbnRyb2xzID0gcmVxdWlyZSgnLi4vY29udHJvbHMvQ29udHJvbHMnKTtcblxuY29uc3QgREVGQVVMVF9QUk9QID0gJ2N1cnJlbnQnO1xuY29uc3QgUFJJVkFURSA9IFsnb25TdGFydCcsICdvbkZyYW1lJywgJ29uVXBkYXRlJywgJ29uQ29tcGxldGUnXTtcblxuY2xhc3MgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcztcblxuICAgICAgICB1dGlscy5lYWNoKHRoaXMuZ2V0RGVmYXVsdFByb3BzKCksIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICBhY3Rpb25ba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnNldChwcm9wcywgdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCkpO1xuICAgIH1cblxuICAgIHNldChwcm9wcyA9IHt9LCBkZWZhdWx0UHJvcCA9IERFRkFVTFRfUFJPUCkge1xuICAgICAgICBlYWNoKHByb3BzLCAoa2V5LCBwcm9wKSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAndmFsdWVzJykge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1lcmdlIHZhbHVlc1xuICAgICAgICBpZiAocHJvcHMudmFsdWVzKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudFZhbHVlcyA9IHRoaXMudmFsdWVzLFxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHByb3BzLnZhbHVlcztcblxuICAgICAgICAgICAgZWFjaCh2YWx1ZXMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGV4aXN0aW5nVmFsdWUgPSBjdXJyZW50VmFsdWVzW2tleV0sXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0ge307XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IGV4aXN0aW5nVmFsdWUgPyB1dGlscy5tZXJnZShleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSkgOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJvY2VzcyhhY3RvciwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAvKlxuICAgICAgICBIYXMgQWN0aW9uIGVuZGVkP1xuICAgICAgICBcbiAgICAgICAgUmV0dXJucyB0cnVlIHRvIGVuZCBpbW1lZGlldGx5XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogdHJ1ZVxuICAgICovXG4gICAgaGFzRW5kZWQoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAgICAgXG4gICAgbGltaXQob3V0cHV0LCB2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdHJpY3RlZCA9IGNhbGMucmVzdHJpY3RlZChvdXRwdXQsIHZhbHVlLm1pbiwgdmFsdWUubWF4KSxcbiAgICAgICAgICAgIGVzY2FwZUFtcCA9IHZhbHVlLmVzY2FwZUFtcCAhPT0gdW5kZWZpbmVkID8gdmFsdWUuZXNjYXBlQW1wIDogMDtcbiAgICAgICAgcmV0dXJuIHJlc3RyaWN0ZWQgKyAoKG91dHB1dCAtIHJlc3RyaWN0ZWQpICogZXNjYXBlQW1wKTtcbiAgICB9XG5cbiAgICBnZXRDb250cm9scygpIHtcbiAgICAgICAgcmV0dXJuIENvbnRyb2xzO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfVxuXG4gICAgZ2V0U2V0KCkge1xuICAgICAgICB2YXIgc2V0ID0geyB2YWx1ZXM6IHRoaXMudmFsdWVzIH07XG5cbiAgICAgICAgZWFjaCh0aGlzLCAoa2V5LCBwcm9wKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIFBSSVZBVEUuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHNldFtrZXldID0gcHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNldDtcbiAgICB9XG5cbiAgICBleHRlbmQocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKHV0aWxzLm1lcmdlKHRoaXMsIHByb3BzKSwgdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCkpO1xuICAgIH1cblxuICAgIGdldFBsYXlhYmxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leHRlbmQoKTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFjdGlvbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL0FjdGlvbi5qc1xuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgZWFjaCA9IHV0aWxzLmVhY2gsXG4gICAgcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi90d2Vlbi9wcmVzZXQtZWFzaW5nJyksXG4gICAgdmFsdWVPcHMgPSByZXF1aXJlKCcuLi9hY3Rvci92YWx1ZS1vcGVyYXRpb25zJyksXG4gICAgVHdlZW5Db250cm9scyA9IHJlcXVpcmUoJy4vdHdlZW4vVHdlZW5Db250cm9scycpLFxuXG4gICAgbmV4dFN0ZXBzID0ge1xuICAgICAgICBsb29wOiAncmVzdGFydCcsXG4gICAgICAgIHlveW86ICdyZXZlcnNlJyxcbiAgICAgICAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAxIHByb2dyZXNzXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgICAgICB0byB1c2Ugb3IgZ2VuZXJhdGVkIGVhc2luZyBmdW5jdGlvblxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBvZiBlYXNlZCBwcm9ncmVzcyBpbiByYW5nZVxuICAgICovICBcbiAgICBlYXNlID0gZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzZSkge1xuICAgICAgICB2YXIgcHJvZ3Jlc3NMaW1pdGVkID0gY2FsYy5yZXN0cmljdGVkKHByb2dyZXNzLCAwLCAxKSxcbiAgICAgICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gdXRpbHMuaXNTdHJpbmcoZWFzZSkgPyBwcmVzZXRFYXNpbmdbZWFzZV0gOiBlYXNlO1xuXG4gICAgICAgIHJldHVybiBjYWxjLnZhbHVlRWFzZWQocHJvZ3Jlc3NMaW1pdGVkLCBmcm9tLCB0bywgZWFzaW5nRnVuY3Rpb24pO1xuICAgIH07XG5cbmNvbnN0IENPVU5UID0gJ2NvdW50JztcblxuY2xhc3MgVHdlZW4gZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGdldENvbnRyb2xzKCkge1xuICAgICAgICByZXR1cm4gVHdlZW5Db250cm9scztcbiAgICB9XG4gICAgXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaWxhdGU6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICB5b3lvOiBmYWxzZSxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgcGxheURpcmVjdGlvbjogMSxcbiAgICAgICAgICAgIGVuZGVkOiB0cnVlLFxuICAgICAgICAgICAgZWxhcHNlZDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGVhc2U6ICdlYXNlT3V0JyxcbiAgICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgICBzdGVwczogMCxcbiAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd0byc7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIEFjdGlvbiBlbGFwc2VkIHRpbWVcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaW1lc3RhbXAgb2YgY3VycmVudCBmcmFtZVxuICAgICovXG4gICAgb25GcmFtZVN0YXJ0KGFjdG9yLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZWxhcHNlZCB8fCAwO1xuXG4gICAgICAgIGlmIChmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmVsYXBzZWQgKz0gKGZyYW1lRHVyYXRpb24gKiBhY3Rvci5kaWxhdGUpICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBDYWxjdWxhdGUgcHJvZ3Jlc3Mgb2YgdmFsdWUgYmFzZWQgb24gdGltZSBlbGFwc2VkLFxuICAgICAgICB2YWx1ZSBkZWxheS9kdXJhdGlvbi9zdGFnZ2VyIHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW0FjdG9yXVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIHN0YXRlIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IENhbGN1bGF0ZWQgdmFsdWVcbiAgICAqL1xuICAgIHByb2Nlc3MoYWN0b3IsIHZhbHVlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB2YWx1ZS50byxcbiAgICAgICAgICAgIHByb2dyZXNzVGFyZ2V0ID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAxIDogMCxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWUuY3VycmVudCxcbiAgICAgICAgICAgIHByb2dyZXNzO1xuXG4gICAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGEgdG8gcHJvcGVydHksIG90aGVyd2lzZSB3ZSBqdXN0IHJldHVybiBjdXJyZW50IHZhbHVlXG4gICAgICAgIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvZ3Jlc3MgPSBjYWxjLnJlc3RyaWN0ZWQoY2FsYy5wcm9ncmVzcyh0aGlzLmVsYXBzZWQgLSB2YWx1ZS5kZWxheSwgMCwgdmFsdWUuZHVyYXRpb24pIC0gdmFsdWUuc3RhZ2dlciwgMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgQWN0aW9uIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSB1dGlscy5zdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSB2YWx1ZVxuICAgICAgICAgICAgbmV3VmFsdWUgPSBlYXNlKHByb2dyZXNzLCB2YWx1ZS5vcmlnaW4sIHRhcmdldCwgdmFsdWUuZWFzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgSWYgdGhpcyB0d2VlbiBoYXMgZW5kZWQsIGNoZWNrIGlmIHdlIGxvb3AveW95by9mbGlwXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSGFzIHRoaXMgdHdlZW4gcmVhbGx5IHJlYWxseSBlbmRlZD9cbiAgICAqL1xuICAgIGhhc0VuZGVkKGFjdG9yKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICAgICAgICBlYWNoKG5leHRTdGVwcywgKG5hbWUsIG1ldGhvZE5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja05leHRTdGVwKGFjdG9yLCBuYW1lLCB0aGlzW21ldGhvZE5hbWVdKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGFjdG9yLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lbmRlZDtcbiAgICB9XG5cbiAgICBjaGVja05leHRTdGVwKGFjdG9yLCBuYW1lLCBtZXRob2QpIHtcbiAgICAgICAgdmFyIHN0ZXBUYWtlbiA9IGZhbHNlLFxuICAgICAgICAgICAgc3RlcCA9IHRoaXNbbmFtZV0sXG4gICAgICAgICAgICBjb3VudCA9IHRoaXNbbmFtZSArIENPVU5UXSB8fCAwLFxuICAgICAgICAgICAgZm9yZXZlciA9IChzdGVwID09PSB0cnVlKTtcblxuICAgICAgICBpZiAoZm9yZXZlciB8fCB1dGlscy5pc051bShzdGVwKSkge1xuICAgICAgICAgICAgKytjb3VudDtcbiAgICAgICAgICAgIHRoaXNbbmFtZSArIENPVU5UXSA9IGNvdW50O1xuXG4gICAgICAgICAgICBpZiAoZm9yZXZlciB8fCBjb3VudCA8PSBzdGVwKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kLmNhbGwodGhpcywgYWN0b3IpO1xuICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RlcFRha2VuO1xuICAgIH1cblxuICAgIGZsaXBWYWx1ZXMoYWN0b3IpIHtcbiAgICAgICAgdmFyIGFjdG9yVmFsdWVzID0gYWN0b3IudmFsdWVzO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgICAgIGVhY2godGhpcy52YWx1ZXMsIChrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGFjdG9yVmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGVhY2godmFsdWUuY2hpbGRyZW4sIChjaGlsZEtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZU9wcy5mbGlwKGFjdG9yVmFsdWVzW2tleSArIGNoaWxkS2V5XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlT3BzLmZsaXAodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW47XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9Ud2Vlbi5qc1xuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgc2ltdWxhdGlvbnMgPSByZXF1aXJlKCcuL3NpbXVsYXRlL3NpbXVsYXRpb25zJyk7XG5cbmNvbnN0IERFRkFVTFRfUFJPUCA9ICd2ZWxvY2l0eSc7XG5cbmNsYXNzIFNpbXVsYXRlIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSA9IHRydWU7XG4gICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1heEluYWN0aXZlRnJhbWVzOiAzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gW3N0cmluZ106IFNpbXVsYXRpb24gdG8gLnJ1blxuICAgICAgICAgICAgc2ltdWxhdGU6IERFRkFVTFRfUFJPUCxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IERlY2VsZXJhdGlvbiB0byBhcHBseSB0byB2YWx1ZSwgaW4gdW5pdHMgcGVyIHNlY29uZFxuICAgICAgICAgICAgZGVjZWxlcmF0aW9uOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgICAgICAgICBhY2NlbGVyYXRpb246IDAsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgICAgICAgICBib3VuY2U6IDAsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBTcHJpbmcgc3RyZW5ndGggZHVyaW5nICdzdHJpbmcnXG4gICAgICAgICAgICBzcHJpbmc6IDgwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBbbnVtYmVyXTogVGltZWNvbnN0YW50IG9mIGdsaWRlXG4gICAgICAgICAgICB0aW1lQ29uc3RhbnQ6IDM5NSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gICAgICAgICAgICBzdG9wU3BlZWQ6IDUsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtib29sZWFuXTogQ2FwdHVyZSB3aXRoIHNwcmluZyBwaHlzaWNzIG9uIGxpbWl0IGJyZWFjaFxuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWVcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfVxuXG4gICAgb25TdGFydCgpIHtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICB9XG4gICAgXG4gICAgLypcbiAgICAgICAgU2ltdWxhdGUgdGhlIFZhbHVlJ3MgcGVyLWZyYW1lIG1vdmVtZW50XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW0FjdG9yXVxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSBvZiBjdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRHVyYXRpb24gb2YgZnJhbWUgaW4gbXNcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZVxuICAgICovXG4gICAgcHJvY2VzcyhhY3RvciwgdmFsdWUsIGtleSwgdGltZVNpbmNlTGFzdEZyYW1lKSB7XG4gICAgICAgIHZhciBzaW11bGF0ZSA9IHZhbHVlLnNpbXVsYXRlLFxuICAgICAgICAgICAgc2ltdWxhdGlvbiA9IHV0aWxzLmlzU3RyaW5nKHNpbXVsYXRlKSA/IHNpbXVsYXRpb25zW3NpbXVsYXRlXSA6IHNpbXVsYXRlLFxuICAgICAgICAgICAgbmV3VmVsb2NpdHkgPSBzaW11bGF0aW9uID8gc2ltdWxhdGlvbih2YWx1ZSwgdGltZVNpbmNlTGFzdEZyYW1lLCB0aGlzLnN0YXJ0ZWQpIDogMDtcblxuICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IChNYXRoLmFicyhuZXdWZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkKSA/IG5ld1ZlbG9jaXR5IDogMDtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmN1cnJlbnQgKyBjYWxjLnNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIHRpbWVTaW5jZUxhc3RGcmFtZSk7XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgICAgIEhhcyB0aGlzIGFjdGlvbiBlbmRlZD9cbiAgICAgICAgXG4gICAgICAgIFVzZSBhIGZyYW1lY291bnRlciB0byBzZWUgaWYgQWN0aW9uIGhhcyBjaGFuZ2VkIGluIHRoZSBsYXN0IHggZnJhbWVzXG4gICAgICAgIGFuZCBkZWNsYXJlIGVuZGVkIGlmIG5vdFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogSGFzIEFjdGlvbiBjaGFuZ2VkP1xuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSGFzIEFjdGlvbiBlbmRlZD9cbiAgICAqL1xuICAgIGhhc0VuZGVkKGFjdG9yLCBoYXNDaGFuZ2VkKSB7XG4gICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSBoYXNDaGFuZ2VkID8gMCA6IHRoaXMuaW5hY3RpdmVGcmFtZXMgKyAxO1xuICAgICAgICByZXR1cm4gKHRoaXMuaW5hY3RpdmVGcmFtZXMgPiBhY3Rvci5tYXhJbmFjdGl2ZUZyYW1lcyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTGltaXQgb3V0cHV0IHRvIHZhbHVlIHJhbmdlLCBpZiBhbnlcbiAgICAgICAgXG4gICAgICAgIElmIHZlbG9jaXR5IGlzIGF0IG9yIG1vcmUgdGhhbiByYW5nZSwgYW5kIHZhbHVlIGhhcyBhIGJvdW5jZSBwcm9wZXJ0eSxcbiAgICAgICAgcnVuIHRoZSBib3VuY2Ugc2ltdWxhdGlvblxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBDYWxjdWxhdGVkIG91dHB1dFxuICAgICAgICBAcGFyYW0gW1ZhbHVlXTogQ3VycmVudCBWYWx1ZVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBMaW1pdC1hZGp1c3RlZCBvdXRwdXRcbiAgICAqL1xuICAgIGxpbWl0KG91dHB1dCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGlzT3V0c2lkZU1heCA9IChvdXRwdXQgPj0gdmFsdWUubWF4KSxcbiAgICAgICAgICAgIGlzT3V0c2lkZU1pbiA9IChvdXRwdXQgPD0gdmFsdWUubWluKSxcbiAgICAgICAgICAgIGlzT3V0c2lkZVJhbmdlID0gaXNPdXRzaWRlTWF4IHx8IGlzT3V0c2lkZU1pbjtcblxuICAgICAgICBpZiAoaXNPdXRzaWRlUmFuZ2UpIHtcbiAgICAgICAgICAgIG91dHB1dCA9IGNhbGMucmVzdHJpY3RlZChvdXRwdXQsIHZhbHVlLm1pbiwgdmFsdWUubWF4KTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlLmJvdW5jZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc2ltdWxhdGlvbnMuYm91bmNlKHZhbHVlKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5jYXB0dXJlKSB7XG4gICAgICAgICAgICAgICAgc2ltdWxhdGlvbnMuY2FwdHVyZSh2YWx1ZSwgaXNPdXRzaWRlTWF4ID8gdmFsdWUubWF4IDogdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2ltdWxhdGU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9TaW11bGF0ZS5qc1xuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbicpLFxuICAgIFBvaW50ZXIgPSByZXF1aXJlKCcuLi9pbnB1dC9Qb2ludGVyJyksXG4gICAgY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmNsYXNzIFRyYWNrIGV4dGVuZHMgQWN0aW9uIHtcbiAgICAvKlxuICAgICAgICBVcGRhdGUgaW5wdXQgb2Zmc2V0XG4gICAgKi9cbiAgICBvbkZyYW1lU3RhcnQoYWN0b3IsIGZyYW1lRHVyYXRpb24sIGZyYW1lc3RhbXApIHtcbiAgICAgICAgYWN0b3Iuc3RhdGUuaW5wdXQgPSB0aGlzLmlucHV0Lm9uRnJhbWUoZnJhbWVzdGFtcCk7XG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSBjYWxjLm9mZnNldCh0aGlzLmlucHV0T3JpZ2luLCB0aGlzLmlucHV0LmN1cnJlbnQpO1xuICAgICAgICB0aGlzLmZyYW1lRHVyYXRpb24gPSBmcmFtZUR1cmF0aW9uO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE1vdmUgVmFsdWUgcmVsYXRpdmUgdG8gSW5wdXQgbW92ZW1lbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbVmFsdWVdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IG9mIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZVxuICAgICovXG4gICAgcHJvY2VzcyhhY3RvciwgdmFsdWUsIGtleSkge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB2YWx1ZS5jdXJyZW50LFxuICAgICAgICAgICAgdW5tYXBwZWQgPSB2YWx1ZS51bm1hcHBlZCAhPT0gdW5kZWZpbmVkID8gdmFsdWUudW5tYXBwZWQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgIGlmICh0aGlzLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gKHZhbHVlLmRpcmVjdCkgPyB0aGlzLmlucHV0LmN1cnJlbnRba2V5XSA6IHZhbHVlLm9yaWdpbiArICh0aGlzLmlucHV0T2Zmc2V0W2tleV0gKiB2YWx1ZS5hbXApO1xuICAgICAgICAgICAgbmV3VmFsdWUgPSAodmFsdWUuc21vb3RoKSA/IGNhbGMuc21vb3RoKG5ld1ZhbHVlLCB1bm1hcHBlZCwgdGhpcy5mcmFtZUR1cmF0aW9uLCB2YWx1ZS5zbW9vdGgpIDogbmV3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgSGFzIHRoaXMgQWN0aW9uIGVuZGVkPyBcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBGYWxzZSB0byBtYWtlIHVzZXIgbWFudWFsbHkgZmluaXNoIC50cmFjaygpXG4gICAgKi9cbiAgICBoYXNFbmRlZCgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgIHN1cGVyLmRlYWN0aXZhdGUoKTtcblxuICAgICAgICBpZiAodGhpcy5pbnB1dCAmJiB0aGlzLmlucHV0LnN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYmluZElucHV0KGlucHV0KSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSAoIWlucHV0LmN1cnJlbnQpID8gbmV3IFBvaW50ZXIoaW5wdXQpIDogaW5wdXQ7XG4gICAgICAgIHRoaXMuaW5wdXRPcmlnaW4gPSB0aGlzLmlucHV0LmdldCgpO1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFtcDogMSxcbiAgICAgICAgICAgIGRpcmVjdDogZmFsc2UsXG4gICAgICAgICAgICBzbW9vdGg6IDBcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhY2s7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9UcmFjay5qc1xuICoqLyIsInZhciBBY3RvciA9IHJlcXVpcmUoJy4uL2FjdG9yL0FjdG9yJyksXG4gICAgSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pdGVyYXRvci9JdGVyYXRvcicpLFxuICAgIHNlbGVjdERvbSA9IHJlcXVpcmUoJy4vc2VsZWN0LWRvbScpO1xuXG5jb25zdCBTQVZFX1BST1AgPSAnX19wbV9hY3Rvcl8nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgb3B0cyA9IHt9KSB7XG4gICAgdmFyIGRvbSA9IHNlbGVjdERvbShzZWxlY3RvciksXG4gICAgICAgIGFjdG9ycyA9IFtdO1xuXG4gICAgZG9tLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgbGV0IGFjdG9yID0gZWxlbWVudFtTQVZFX1BST1BdO1xuXG4gICAgICAgIGlmICghYWN0b3IpIHtcbiAgICAgICAgICAgIG9wdHMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBhY3RvciA9IGVsZW1lbnRbU0FWRV9QUk9QXSA9IG5ldyBBY3RvcihvcHRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdG9ycy5wdXNoKGFjdG9yKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoYWN0b3JzLmxlbmd0aCA+IDEpID8gbmV3IEl0ZXJhdG9yKGFjdG9ycykgOiBhY3RvcnNbMF07XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5jL3NlbGVjdC1hY3Rvci5qc1xuICoqLyIsInZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMuanMnKSxcblxuICAgIHplcm9Qb2ludCA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgIH0sXG5cbiAgICBjYWxjID0ge1xuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICAgICAgICAgICAgYXJlIGF0IDAsMCwgdGhlbiByZXR1cm4gdGhlIGFuZ2xlIHVzaW5nIC5hbmdsZUZyb21DZW50ZXIoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgICAgICAgICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuICAgICAgICAqL1xuICAgICAgICBhbmdsZTogKGEsIGIgPSB6ZXJvUG9pbnQpID0+IGNhbGMuYW5nbGVGcm9tQ2VudGVyKHtcbiAgICAgICAgICAgIHg6IGEueCAtIGIueCxcbiAgICAgICAgICAgIHk6IGEueSAtIGIueVxuICAgICAgICB9KSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgQW5nbGUgZnJvbSBjZW50ZXJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgY3VycmVudCBhbmdsZSwgaW4gcmFkaWFucywgb2YgYSBkZWZpbmVkIHBvaW50XG4gICAgICAgICAgICBmcm9tIGEgY2VudGVyIChhc3N1bWVkIDAsMClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBYIGNvb3JkaW5hdGUgb2Ygc2Vjb25kIHBvaW50XG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFkgY29vcmRpbmF0ZSBvZiBzZWNvbmQgcG9pbnRcbiAgICAgICAgICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gMCwgMCBhbmQgcG9pbnQgaW4gcmFkaWFuc1xuICAgICAgICAqL1xuICAgICAgICBhbmdsZUZyb21DZW50ZXI6ICh4LCB5KSA9PiBjYWxjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMih5LCB4KSksXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgICAgICovXG4gICAgICAgIGRlZ3JlZXNUb1JhZGlhbnM6IGRlZ3JlZXMgPT4gZGVncmVlcyAqIE1hdGguUEkgLyAxODAsXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIERpbGF0ZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBhIC0tLS0tLS0tLSBiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGEgLS0tLSBiXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4gICAgICAgICovXG4gICAgICAgIGRpbGF0ZTogKGEsIGIsIGRpbGF0aW9uKSA9PiBhICsgKChiIC0gYSkgKiBkaWxhdGlvbiksXG4gICAgICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIERpc3RhbmNlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gKDAsMCkgYW5kIHBvaW50QSwgdW5sZXNzIHBvaW50QlxuICAgICAgICAgICAgaXMgcHJvdmlkZWQsIHRoZW4gd2UgcmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHR3by5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgZGlzdGFuY2U6IChhLCBiKSA9PiB1dGlscy5pc051bShhKSA/IGNhbGMuZGlzdGFuY2UxRChhLCBiKSA6IGNhbGMuZGlzdGFuY2UyRChhLCBiKSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgRGlzdGFuY2UgMURcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiBwb2ludCBBIGFuZCBwb2ludCBCXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUG9pbnQgQVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiAob3B0aW9uYWwpOiBQb2ludCBCXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuICAgICAgICAqL1xuICAgICAgICBkaXN0YW5jZTFEOiAoYSwgYiA9IDApID0+IE1hdGguYWJzKGEgLSBiKSxcbiAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRGlzdGFuY2UgMkRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAoMCwwKSBhbmQgcG9pbnQgQSwgdW5sZXNzIHBvaW50IEJcbiAgICAgICAgICAgIGlzIHByb3ZpZGVkLCB0aGVuIHdlIHJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogeCBhbmQgeSBvZiBwb2ludCBBXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IChvcHRpb25hbCk6IHggYW5kIHkgb2YgcG9pbnQgQlxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiAgICAgICAgKi9cbiAgICAgICAgZGlzdGFuY2UyRDogKGEsIGIgPSB6ZXJvUG9pbnQpID0+IGNhbGMuaHlwb3RlbnVzZSh7XG4gICAgICAgICAgICB4OiBNYXRoLmFicyhhLnggLSBiLngpLFxuICAgICAgICAgICAgeTogTWF0aC5hYnMoYS55IC0gYi55KVxuICAgICAgICB9KSxcbiAgICAgICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgSHlwb3RlbnVzZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBSZXR1cm5zIHRoZSBoeXBvdGVudXNlLCBzaWRlIEMsIGdpdmVuIHRoZSBsZW5ndGhzIG9mIHNpZGVzIEEgYW5kIEIuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEJcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4gICAgICAgICovXG4gICAgICAgIGh5cG90ZW51c2U6IChhLCBiKSA9PiBNYXRoLnNxcnQoKGEgKiBhKSArIChiICogYikpLFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIE9mZnNldCBiZXR3ZWVuIHR3byBpbnB1dHNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQ2FsY3VsYXRlIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIGRpZmZlcmVudCBpbnB1dHNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IGlucHV0XG4gICAgICAgICAgICBAcGFyYW0gW1BvaW50XTogU2Vjb25kIGlucHV0XG4gICAgICAgICAgICBAcmV0dXJuIFtPZmZzZXRdOiBEaXN0YW5jZSBtZXRyaWNzIGJldHdlZW4gdHdvIHBvaW50c1xuICAgICAgICAqL1xuICAgICAgICBvZmZzZXQ6IChhLCBiKSA9PiB7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0ge307XG5cbiAgICAgICAgICAgIHV0aWxzLmVhY2goYiwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBvZmZzZXRba2V5XSA9IGEuaGFzT3duUHJvcGVydHkoa2V5KSA/IHZhbHVlIC0gYVtrZXldIDogMDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNOdW0ob2Zmc2V0LngpICYmIHV0aWxzLmlzTnVtKG9mZnNldC55KSkge1xuICAgICAgICAgICAgICAgIG9mZnNldC5hbmdsZSA9IGNhbGMuYW5nbGUoYSwgYik7XG4gICAgICAgICAgICAgICAgb2Zmc2V0LmRpc3RhbmNlID0gY2FsYy5kaXN0YW5jZTJEKGEsIGIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gb2Zmc2V0O1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gICAgICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4gICAgICAgICovXG4gICAgICAgIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2U6IChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgYW5nbGUgPSBjYWxjLmRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgICAgICAgICAgICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAgICAgICAgICAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gICAgICAgICAgICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuICAgICAgICAqL1xuICAgICAgICBwcm9ncmVzczogKHZhbHVlLCBmcm9tLCB0bykgPT4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgICAgICAgKi9cbiAgICAgICAgcmFkaWFuc1RvRGVncmVlczogcmFkaWFucyA9PiByYWRpYW5zICogMTgwIC8gTWF0aC5QSSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgUmV0dXJuIHJhbmRvbSBudW1iZXIgYmV0d2VlbiByYW5nZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWF4aW11bVxuICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuICAgICAgICAqL1xuICAgICAgICByYW5kb206IChtaW4gPSAwLCBtYXggPSAxKSA9PiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4sXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgICAgICAgICAgIHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IE5ldyB2YWx1ZVxuICAgICAgICAqL1xuICAgICAgICByZWxhdGl2ZVZhbHVlOiAoY3VycmVudCwgcmVsKSA9PiB7XG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSBjdXJyZW50LFxuICAgICAgICAgICAgICAgIGVxdWF0aW9uID0gcmVsLnNwbGl0KCc9JyksXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IgPSBlcXVhdGlvblswXSxcbiAgICAgICAgICAgICAgICB7IHVuaXQsIHZhbHVlIH0gPSB1dGlscy5zcGxpdFZhbFVuaXQoZXF1YXRpb25bMV0pO1xuXG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlICs9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgLT0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSAqPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlIC89IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHVuaXQpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSArPSB1bml0O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgICAgICAqL1xuICAgICAgICByZXN0cmljdGVkOiAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiAgICAgICAgKi9cbiAgICAgICAgc21vb3RoOiAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbiwgc21vb3RoaW5nID0gMCkgPT4gb2xkVmFsdWUgKyAoZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSksXG4gICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4gICAgICAgICovXG4gICAgICAgIHNwZWVkUGVyRnJhbWU6ICh4cHMsIGZyYW1lRHVyYXRpb24pID0+ICh1dGlscy5pc051bSh4cHMpKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwLFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuICAgICAgICAqL1xuICAgICAgICBzcGVlZFBlclNlY29uZDogKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSA9PiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbiksXG4gICAgXG4gICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICAgICAgICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IChwcm9ncmVzcywgZnJvbSwgdG8pID0+ICgtIHByb2dyZXNzICogZnJvbSkgKyAocHJvZ3Jlc3MgKiB0bykgKyBmcm9tLFxuICAgIFxuICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgRWFzZWQgdmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICAgICAgICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2UsIG9yIHVwcGVyIGlmIGxpbWl0MiBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICAgICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBFYXNpbmcgdG8gYXBwbHkgdG8gdmFsdWVcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiAgICAgICAgKi9cbiAgICAgICAgdmFsdWVFYXNlZDogKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzaW5nKSA9PiBjYWxjLnZhbHVlKGVhc2luZyhwcm9ncmVzcyksIGZyb20sIHRvKVxuICAgIH07XG4gICAgXG5tb2R1bGUuZXhwb3J0cyA9IGNhbGM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5jL2NhbGMuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9ICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApID0+IHtcbiAgICB2YXIgY29tYmluZWQgPSAnJyxcbiAgICAgICAga2V5ID0gJycsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcblxuICAgIGZvciAoOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgICBrZXkgPSB0ZXJtc1tpXTtcblxuICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbWJpbmVkICs9IHZhbHVlc1trZXldICsgZGVsaW1pdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvY3JlYXRlLWRlbGltaXRlZC5qc1xuICoqLyIsInZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gcmVxdWlyZSgnLi9zcGxpdC1jb21tYS1kZWxpbWl0ZWQnKSxcbiAgICBmdW5jdGlvbkJyZWFrID0gcmVxdWlyZSgnLi9mdW5jdGlvbi1icmVhaycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICh2YWx1ZSwgdGVybXMpID0+IHtcbiAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9LFxuICAgICAgICBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aCxcbiAgICAgICAgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChmdW5jdGlvbkJyZWFrKHZhbHVlKSksXG4gICAgICAgIGkgPSAwO1xuXG4gICAgZm9yICg7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICAgIHNwbGl0VmFsdWVbdGVybXNbaV1dID0gKGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yc1tpXSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwbGl0VmFsdWU7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9nZXQtY29sb3ItdmFsdWVzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSAodmFsdWUsIHByZWZpeCkgPT4gYCR7cHJlZml4fSgke3ZhbHVlfSlgO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9mdW5jdGlvbi1jcmVhdGUuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY29sb3I6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDI1NSxcbiAgICAgICAgcm91bmQ6IHRydWVcbiAgICB9LFxuICAgIG9wYWNpdHk6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDFcbiAgICB9LFxuICAgIHBlcmNlbnQ6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgdW5pdDogJyUnXG4gICAgfVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIFggPSAnWCcsXG4gICAgWSA9ICdZJyxcbiAgICBBTFBIQSA9ICdBbHBoYScsXG5cbiAgICB0ZXJtcyA9IHtcbiAgICAgICAgY29sb3JzOiBbJ1JlZCcsICdHcmVlbicsICdCbHVlJywgQUxQSEFdLFxuICAgICAgICBwb3NpdGlvbnM6IFtYLCBZLCAnWiddLFxuICAgICAgICBkaW1lbnNpb25zOiBbJ1RvcCcsICdSaWdodCcsICdCb3R0b20nLCAnTGVmdCddLFxuICAgICAgICBzaGFkb3c6IFtYLCBZLCAnUmFkaXVzJywgJ1NwcmVhZCcsICdDb2xvciddLFxuICAgICAgICBoc2w6IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdXG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXJtcztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzXG4gKiovIiwidmFyIHByb3RlY3RlZFByb3BlcnRpZXMgPSBbJ3Njb3BlJywgICdkb20nXSxcbiAgICBcbiAgICBpc1Byb3RlY3RlZCA9IGtleSA9PiAocHJvdGVjdGVkUHJvcGVydGllcy5pbmRleE9mKGtleSkgIT09IC0xKSxcblxuICAgIC8qXG4gICAgICAgIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4gICAgKi9cbiAgICB2YXJUeXBlID0gdmFyaWFibGUgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSksXG5cbiAgICB1dGlscyA9IHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIEl0ZXJhdGUgb3ZlciBhbiBvYmplY3QgYW5kIGZpcmUgYSBjYWxsYmFjayBmb3IgZXZlcnkgaXRlbSBpbiBpdFxuXG4gICAgICAgICAgICBAcGFyYW0gW29iamVjdF06IFByb3BlcnRpZXNcbiAgICAgICAgICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBmaXJlXG4gICAgICAgICovXG4gICAgICAgIGVhY2g6IChwcm9wcywgY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gcHJvcHMgPyBPYmplY3Qua2V5cyhwcm9wcykgOiBbXSxcbiAgICAgICAgICAgICAgICBudW1LZXlzID0ga2V5cy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtS2V5czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGtleXNbaV0sXG4gICAgICAgICAgICAgICAgICAgIHByb3AgPSBwcm9wc1trZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGtleSwgcHJvcCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBIYXMgb25lIG9iamVjdCBjaGFuZ2VkIGZyb20gdGhlIG90aGVyXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIENvbXBhcmVzIHRoZSB0d28gcHJvdmlkZWQgaW5wdXRzIGFuZCByZXR1cm5zIHRydWUgaWYgdGhleSBhcmUgZGlmZmVyZW50XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBCXG4gICAgICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBkaWZmZXJlbnRcbiAgICAgICAgKi9cbiAgICAgICAgaGFzQ2hhbmdlZDogKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2UsXG4gICAgICAgICAgICAgICAga2V5ID0gJyc7XG5cbiAgICAgICAgICAgIGZvciAoa2V5IGluIGIpIHtcbiAgICAgICAgICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBoYXNDaGFuZ2VkO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4gICAgICAgICovXG4gICAgICAgIGlzRnVuYzogb2JqID0+IHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJyxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgICAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4gICAgICAgICovXG4gICAgICAgIGlzTnVtOiBudW0gPT4gdHlwZW9mIG51bSA9PT0gJ251bWJlcicsXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiAgICAgICAgKi9cbiAgICAgICAgaXNPYmo6IG9iaiA9PiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4gICAgICAgICovXG4gICAgICAgIGlzU3RyaW5nOiBzdHIgPT4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZycsXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIElzIHV0aWxzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSWYgdXRpbHMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiAgICAgICAgKi9cbiAgICAgICAgaXNSZWxhdGl2ZVZhbHVlOiB2YWx1ZSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwKSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiAgICAgICAgKi9cbiAgICAgICAgaXNBcnJheTogYXJyID0+IHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5JyxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBDb3B5IG9iamVjdCBvciBhcnJheVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBDaGVja3Mgd2hldGhlciBiYXNlIGlzIGFuIGFycmF5IG9yIG9iamVjdCBhbmQgbWFrZXNcbiAgICAgICAgICAgIGFwcHJvcHJpYXRlIGNvcHlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBBcnJheSBvciBvYmplY3QgdG8gY29weVxuICAgICAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBOZXcgY29weSBvZiBhcnJheSBvciBvYmplY3RcbiAgICAgICAgKi9cbiAgICAgICAgY29weTogYmFzZSA9PiB1dGlscy5pc0FycmF5KGJhc2UpID8gdXRpbHMuY29weUFycmF5KGJhc2UpIDogdXRpbHMuY29weU9iamVjdChiYXNlKSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBEZWVwIGNvcHkgYW4gb2JqZWN0XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEl0ZXJhdGVzIG92ZXIgYW4gb2JqZWN0IGFuZCBjcmVhdGVzIGEgbmV3IGNvcHkgb2YgZXZlcnkgaXRlbSxcbiAgICAgICAgICAgIGRlZXAgY29weWluZyBpZiBpdCBmaW5kcyBhbnkgb2JqZWN0cy9hcnJheXNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gY29weVxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBOZXcgY29weSBvZiBvYmplY3RcbiAgICAgICAgKi9cbiAgICAgICAgY29weU9iamVjdDogYmFzZSA9PiB7XG4gICAgICAgICAgICB2YXIgbmV3T2JqZWN0ID0ge307XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHV0aWxzLmVhY2goYmFzZSwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9ICh1dGlscy5pc09iaih2YWx1ZSkgJiYgIWlzUHJvdGVjdGVkKGtleSkpID8gdXRpbHMuY29weSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbmV3T2JqZWN0O1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIERlZXAgY29weSBhbiBhcnJheVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBMb29wcyB0aHJvdWdoIGFuIGFycmF5IGFuZCBjcmVhdGVzIGEgbmV3IGNvcHkgb2YgZXZlcnkgaXRlbSxcbiAgICAgICAgICAgIGRlZXAgY29weWluZyBpZiBpdCBmaW5kcyBhbnkgb2JqZWN0cy9hcnJheXNcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFthcnJheV06IEFycmF5IHRvIGNvcHlcbiAgICAgICAgICAgIEByZXR1cm4gW2FycmF5XTogTmV3IGNvcHkgb2YgYXJyYXlcbiAgICAgICAgKi9cbiAgICAgICAgY29weUFycmF5OiBiYXNlID0+IGJhc2UsXG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgTm9uLWRlc3RydWN0aXZlIG1lcmdlIG9mIG9iamVjdCBvciBhcnJheVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcGFyYW0gW2FycmF5IHx8IG9iamVjdF06IEFycmF5IG9yIG9iamVjdCB0byB1c2UgYXMgYmFzZVxuICAgICAgICAgICAgQHBhcmFtIFthcnJheSB8fCBvYmplY3RdOiBBcnJheSBvciBvYmplY3QgdG8gb3ZlcndyaXRlIGJhc2Ugd2l0aFxuICAgICAgICAgICAgQHJldHVybiBbYXJyYXkgfHwgb2JqZWN0XTogTmV3IGFycmF5IG9yIG9iamVjdFxuICAgICAgICAqL1xuICAgICAgICBtZXJnZTogKGJhc2UsIG92ZXJ3cml0ZSkgPT4gKHV0aWxzLmlzQXJyYXkoYmFzZSkpID8gdXRpbHMuY29weUFycmF5KG92ZXJ3cml0ZSkgOiB1dGlscy5tZXJnZU9iamVjdChiYXNlLCBvdmVyd3JpdGUpLFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIE5vbi1kZXN0cnVjdGl2ZSBtZXJnZSBvZiBvYmplY3RcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gdXNlIGFzIGJhc2VcbiAgICAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIG92ZXJ3cml0ZSBiYXNlIHdpdGhcbiAgICAgICAgICAgIEByZXR1cm4gW29iamVjdF06IE5ldyBvYmplY3RcbiAgICAgICAgKi9cbiAgICAgICAgbWVyZ2VPYmplY3Q6IChiYXNlLCBvdmVyd3JpdGUpID0+IHtcbiAgICAgICAgICAgIHZhciBoYXNCYXNlID0gdXRpbHMuaXNPYmooYmFzZSksXG4gICAgICAgICAgICAgICAgbmV3T2JqZWN0ID0gaGFzQmFzZSA/IHV0aWxzLmNvcHkoYmFzZSkgOiB1dGlscy5jb3B5KG92ZXJ3cml0ZSk7XG5cbiAgICAgICAgICAgIGlmIChoYXNCYXNlKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuZWFjaChvdmVyd3JpdGUsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5ld09iamVjdFtrZXldID0gKHV0aWxzLmlzT2JqKHZhbHVlKSAmJiAhaXNQcm90ZWN0ZWQoa2V5KSkgPyB1dGlscy5tZXJnZShiYXNlW2tleV0sIHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3T2JqZWN0O1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICAgICAgICAgICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiAgICAgICAgKi9cbiAgICAgICAgc3BsaXRWYWxVbml0OiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGxldCBzcGxpdFZhbCA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBzcGxpdFZhbFsxXSxcbiAgICAgICAgICAgICAgICB1bml0OiAgc3BsaXRWYWxbMl1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgICAgICAgICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgICAgICAgICAgIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiAgICAgICAgKi9cbiAgICAgICAgc3RlcFByb2dyZXNzOiAocHJvZ3Jlc3MsIHN0ZXBzKSA9PiB7XG4gICAgICAgICAgICB2YXIgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKSxcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSAxIC0gKDEgLyBzdGVwcyksXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIC8qXG4gICAgICAgICAgICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4gICAgICAgICovXG4gICAgICAgIGN1cnJlbnRUaW1lOiAoKSA9PiAocGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2Uubm93KSA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWxzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luYy91dGlscy5qc1xuICoqLyIsImNvbnN0IGlzU3RyaW5nID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuaXNTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvbWFuaXB1bGF0b3JzL3NwbGl0LXNwYWNlLWRlbGltaXRlZC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZWFjaCA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLmVhY2gsXG4gICAgdHJhbnNmb3JtRGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtLWRpY3Rpb25hcnknKSxcbiAgICB0cmFuc2Zvcm1Qcm9wcyA9IHRyYW5zZm9ybURpY3Rpb25hcnkucHJvcHMsXG5cbiAgICBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3V0cHV0LCBjYWNoZSkge1xuICAgIHZhciBjc3MgPSB7fSxcbiAgICAgICAgdHJhbnNmb3JtID0gJycsXG4gICAgICAgIHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcbiAgICAgICAgXG4gICAgLy8gTG9vcCB0aHJvdWdoIG91dHB1dCwgY2hlY2sgZm9yIHRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgZWFjaChvdXRwdXQsIGZ1bmN0aW9uIChrZXksIHJ1bGUpIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHRyYW5zZm9ybSBwcm9wZXJ0eSwgYWRkIHRvIHRyYW5zZm9ybSBzdHJpbmdcbiAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybSArPSBrZXkgKyAnKCcgKyBydWxlICsgJyknO1xuICAgICAgICAgICAgdHJhbnNmb3JtSGFzWiA9IChrZXkgPT09IFRSQU5TTEFURV9aKSA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgICAgICBcbiAgICAgICAgLy8gT3IganVzdCBhc3NpZ24gZGlyZWN0bHlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChydWxlICE9PSBjYWNoZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVba2V5XSA9IGNzc1trZXldID0gcnVsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSB0cmFuc2Zvcm0gcHJvcGVydGllcywgYWRkIHRyYW5zbGF0ZVpcbiAgICBpZiAodHJhbnNmb3JtICE9PSAnJykge1xuICAgICAgICBpZiAoIXRyYW5zZm9ybUhhc1opIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybSArPSAnICcgKyBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhbnNmb3JtICE9PSBjYWNoZS50cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIGNzcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNhY2hlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb2xlcy9jc3MvYnVpbGQuanNcbiAqKi8iLCJ2YXIgVFJBTlNMQVRFID0gJ3RyYW5zbGF0ZSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHg6IFRSQU5TTEFURSArICdYJyxcbiAgICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gICAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL2Nzcy9tYXAuanNcbiAqKi8iLCJ2YXIgQ09MT1IgPSAnY29sb3InLFxuICAgIFBPU0lUSU9OUyA9ICdwb3NpdGlvbnMnLFxuICAgIERJTUVOU0lPTlMgPSAnZGltZW5zaW9ucycsXG4gICAgU0hBRE9XID0gJ3NoYWRvdycsXG4gICAgQU5HTEUgPSAnYW5nbGUnLFxuICAgIEFMUEhBID0gJ2FscGhhJyxcbiAgICBQWCA9ICdweCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8vIENvbG9yIHByb3BlcnRpZXNcbiAgICBjb2xvcjogQ09MT1IsXG4gICAgYmFja2dyb3VuZENvbG9yOiBDT0xPUixcbiAgICBvdXRsaW5lQ29sb3I6IENPTE9SLFxuICAgIGZpbGw6IENPTE9SLFxuICAgIHN0cm9rZTogQ09MT1IsXG4gICAgLy8gQm9yZGVyXG4gICAgYm9yZGVyQ29sb3I6IENPTE9SLFxuICAgIGJvcmRlclRvcENvbG9yOiBDT0xPUixcbiAgICBib3JkZXJSaWdodENvbG9yOiBDT0xPUixcbiAgICBib3JkZXJCb3R0b21Db2xvcjogQ09MT1IsXG4gICAgYm9yZGVyTGVmdENvbG9yOiBDT0xPUixcbiAgICBib3JkZXJSYWRpdXM6IFBYLFxuICAgIC8vIERpbWVuc2lvbnNcbiAgICBtYXJnaW46IERJTUVOU0lPTlMsXG4gICAgcGFkZGluZzogRElNRU5TSU9OUyxcbiAgICB3aWR0aDogUFgsXG4gICAgaGVpZ2h0OiBQWCwgICAgXG4gICAgLy8gUG9zaXRpb25zXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBQT1NJVElPTlMsXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46IFBPU0lUSU9OUyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IFBPU0lUSU9OUyxcbiAgICAvLyBTaGFkb3dzXG4gICAgdGV4dFNoYWRvdzogU0hBRE9XLFxuICAgIGJveFNoYWRvdzogU0hBRE9XLCAgICBcbiAgICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICAgIHJvdGF0ZTogQU5HTEUsXG4gICAgcm90YXRlWDogQU5HTEUsXG4gICAgcm90YXRlWTogQU5HTEUsXG4gICAgcm90YXRlWjogQU5HTEUsXG4gICAgc2tld1g6IEFOR0xFLFxuICAgIHNrZXdZOiBBTkdMRSxcbiAgICBkaXN0YW5jZTogUFgsXG4gICAgdHJhbnNsYXRlWDogUFgsXG4gICAgdHJhbnNsYXRlWTogUFgsXG4gICAgdHJhbnNsYXRlWjogUFgsXG4gICAgcGVyc3BlY3RpdmU6IFBYLFxuICAgIG9wYWNpdHk6IEFMUEhBXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL2Nzcy90eXBlLW1hcC5qc1xuICoqLyIsInZhciBlYWNoID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuZWFjaCxcbiAgICB0cmFuc2Zvcm1EaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1kaWN0aW9uYXJ5JyksXG4gICAgdHJhbnNmb3JtUHJvcHMgPSB0cmFuc2Zvcm1EaWN0aW9uYXJ5LnByb3BzLFxuICAgIHplcm9Ob3RaZXJvID0gMC4wMDAxO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvdXRwdXQsIG9yaWdpbikge1xuICAgIHZhciBwcm9wcyA9IHt9LFxuICAgICAgICBoYXNUcmFuc2Zvcm0gPSBmYWxzZSxcbiAgICAgICAgc2NhbGUgPSBvdXRwdXQuc2NhbGUgIT09IHVuZGVmaW5lZCA/IG91dHB1dC5zY2FsZSB8fCB6ZXJvTm90WmVybyA6IG91dHB1dC5zY2FsZVggfHwgMSxcbiAgICAgICAgc2NhbGVZID0gb3V0cHV0LnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gb3V0cHV0LnNjYWxlWSB8fCB6ZXJvTm90WmVybyA6IHNjYWxlIHx8IDEsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblggPSBvcmlnaW4ueCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luWSA9IG9yaWdpbi55LFxuICAgICAgICBzY2FsZVRyYW5zZm9ybVggPSAtIHRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1ZID0gLSB0cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpLFxuICAgICAgICBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlLFxuICAgICAgICBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWSxcbiAgICAgICAgdHJhbnNmb3JtID0ge1xuICAgICAgICAgICAgdHJhbnNsYXRlOiBgdHJhbnNsYXRlKCR7b3V0cHV0LnRyYW5zbGF0ZVh9LCAke291dHB1dC50cmFuc2xhdGVZfSkgYCxcbiAgICAgICAgICAgIHNjYWxlOiBgdHJhbnNsYXRlKCR7c2NhbGVUcmFuc2Zvcm1YfSwgJHtzY2FsZVRyYW5zZm9ybVl9KSBzY2FsZSgke3NjYWxlfSwgJHtzY2FsZVl9KSB0cmFuc2xhdGUoJHtzY2FsZVJlcGxhY2VYfSwgJHtzY2FsZVJlcGxhY2VZfSkgYCxcbiAgICAgICAgICAgIHJvdGF0ZTogYHJvdGF0ZSgke291dHB1dC5yb3RhdGV9LCAke3RyYW5zZm9ybU9yaWdpblh9LCAke3RyYW5zZm9ybU9yaWdpbll9KSBgLFxuICAgICAgICAgICAgc2tld1g6IGBza2V3WCgke291dHB1dC5za2V3WH0pIGAsXG4gICAgICAgICAgICBza2V3WTogYHNrZXdZKCR7b3V0cHV0LnNrZXdZfSkgYFxuICAgICAgICB9O1xuXG4gICAgZWFjaChvdXRwdXQsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvcHNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAgIGVhY2godHJhbnNmb3JtLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IChrZXkgPT09ICdzY2FsZScpID8gJzEnIDogJzAnO1xuICAgICAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHZhbHVlLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHM7XG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL3N2Zy9idWlsZC5qc1xuICoqLyIsInZhciBDT0xPUiA9ICdjb2xvcicsXG4gICAgU0NBTEUgPSAnc2NhbGUnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBmaWxsOiBDT0xPUixcbiAgICBzdHJva2U6IENPTE9SLFxuICAgIHNjYWxlOiBTQ0FMRSxcbiAgICBzY2FsZVg6IFNDQUxFLFxuICAgIHNjYWxlWTogU0NBTEUsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAncG9zaXRpb25zJyxcbiAgICBkOiAnY29tcGxleCdcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm9sZXMvc3ZnL3R5cGUtbWFwLmpzXG4gKiovIiwidmFyIFNUUk9LRSA9ICdzdHJva2UnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBvcGFjaXR5OiBTVFJPS0UgKyAnLW9wYWNpdHknLFxuICAgIHdpZHRoOiBTVFJPS0UgKyAnLXdpZHRoJyxcbiAgICBtaXRlcmxpbWl0OiBTVFJPS0UgKyAnLW1pdGVybGltaXQnXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL3BhdGgvbWFwLmpzXG4gKiovIiwiY2xhc3MgUXVldWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQWRkIGEgc2V0IG9mIGFyZ3VtZW50cyB0byBxdWV1ZVxuICAgICovXG4gICAgYWRkKCkge1xuICAgICAgICB0aGlzLnF1ZXVlLnB1c2goW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBHZXQgbmV4dCBzZXQgb2YgYXJndW1lbnRzIGZyb20gcXVldWVcbiAgICAqL1xuICAgIG5leHQoZGlyZWN0aW9uID0gMSkge1xuICAgICAgICB2YXIgcXVldWUgPSB0aGlzLnF1ZXVlLFxuICAgICAgICAgICAgcmV0dXJuVmFsID0gZmFsc2UsXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiBvdXIgaW5kZXggaXMgYmV0d2VlbiAwIGFuZCB0aGUgcXVldWUgbGVuZ3RoLCByZXR1cm4gdGhhdCBpdGVtXG4gICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgcXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm5WYWwgPSBxdWV1ZVtpbmRleF07XG4gICAgICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXggKyBkaXJlY3Rpb247XG4gICAgICAgIFxuICAgICAgICAvLyBPciBjbGVhclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFJlcGxhY2UgcXVldWUgd2l0aCBlbXB0eSBhcnJheVxuICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luYy9RdWV1ZS5qc1xuICoqLyIsInZhciB2YWx1ZVR5cGVNYW5hZ2VyID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvbWFuYWdlcicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgZWFjaCA9IHV0aWxzLmVhY2gsXG4gICAgQWN0aW9uID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9BY3Rpb24nKSxcbiAgICBkZWZhdWx0QWN0aW9uID0gbmV3IEFjdGlvbigpLFxuICAgIFdhdGNoID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9XYXRjaCcpLFxuICAgIHdhdGNoZXIgPSBuZXcgV2F0Y2goKSxcblxuICAgIGNyZWF0ZU1hcHBlciA9IGZ1bmN0aW9uIChyb2xlLCBtYXBwZWRWYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuYW1lLCB2YWwpIHtcbiAgICAgICAgICAgIG1hcHBlZFZhbHVlc1tyb2xlLm1hcChuYW1lKV0gPSB2YWw7XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIENoZWNrIGFsbCBBY3Rpb25zIGZvciBgb25FbmRgLCByZXR1cm4gdHJ1ZSBpZiBhbGwgYXJlIHRydWVcblxuICAgICAgICBAcGFyYW0gW0FjdG9yXVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dXG4gICAgICAgIEByZXR1cm5zIFtib29sZWFuXVxuICAgICovXG4gICAgY2hlY2tBbGxBY3Rpb25zSGF2ZUVuZGVkID0gZnVuY3Rpb24gKGFjdG9yLCBoYXNDaGFuZ2VkKSB7XG4gICAgICAgIHZhciBoYXNFbmRlZCA9IHRydWUsXG4gICAgICAgICAgICB2YWx1ZXMgPSBhY3Rvci5zdGF0ZS52YWx1ZXM7XG5cbiAgICAgICAgZWFjaChhY3Rvci5hY3RpdmVBY3Rpb25zLCAoa2V5LCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIC8vIFJldHVybiBpZiBhY3Rpb24gaGFzIGJlZW4gZGVsZXRlZCBlbHNld2hlcmVcbiAgICAgICAgICAgIGlmICghYWN0aW9uKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBpZiAoYWN0aW9uLm9uRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24ub25GcmFtZS5jYWxsKGFjdG9yLCB2YWx1ZXMsIGFjdG9yLCBhY3Rpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWN0aW9uLm9uVXBkYXRlICYmIGhhc0NoYW5nZWQpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24ub25VcGRhdGUuY2FsbChhY3RvciwgdmFsdWVzLCBhY3RvciwgYWN0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFjdGlvbi5oYXNFbmRlZCAmJiBhY3Rpb24uaGFzRW5kZWQoYWN0b3IsIGhhc0NoYW5nZWQpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGhhc0VuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ub25Db21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24ub25Db21wbGV0ZS5jYWxsKGFjdG9yLCBhY3RvciwgYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWN0b3IudW5iaW5kQWN0aW9uKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBoYXNFbmRlZDtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIHRoZSBBY3RvciBhbmQgaXRzIHZhbHVlc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XTogVGltZXN0YW1wIG9mIHJBRiBjYWxsXG4gICAgICAgIEBwYXJhbSBbaW50XTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4gICAgKi9cbiAgICB1cGRhdGUgPSBmdW5jdGlvbiAoZnJhbWVzdGFtcCwgZnJhbWVEdXJhdGlvbikge1xuICAgICAgICB2YXIgbnVtQWN0aXZlVmFsdWVzID0gdGhpcy5hY3RpdmVWYWx1ZXMubGVuZ3RoLFxuICAgICAgICAgICAgbnVtQWN0aXZlUGFyZW50cyA9IHRoaXMuYWN0aXZlUGFyZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBudW1Sb2xlcyA9IHRoaXMucm9sZXMubGVuZ3RoLFxuICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB2YWx1ZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1BY3RpdmVWYWx1ZXM7IGkrKykge1xuICAgICAgICAgICAgLy8gR2V0IHZhbHVlIGFuZCBrZXlcbiAgICAgICAgICAgIGxldCBrZXkgPSB0aGlzLmFjdGl2ZVZhbHVlc1tpXTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gKCF2YWx1ZS5hY3Rpb24gfHwgdmFsdWUuYWN0aW9uICYmICF2YWx1ZS5hY3Rpb24uaXNBY3RpdmUpID8gZGVmYXVsdEFjdGlvbiA6IHZhbHVlLmFjdGlvbjtcblxuICAgICAgICAgICAgLy8gRmlyZSBhY3Rpb24gb25GcmFtZVN0YXJ0IGlmIG5vdCBhbHJlYWR5IGZpcmVkXG4gICAgICAgICAgICBpZiAoYWN0aW9uLm9uRnJhbWVTdGFydCAmJiBhY3Rpb24ubGFzdFVwZGF0ZSAhPT0gZnJhbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgIGFjdGlvbi5vbkZyYW1lU3RhcnQodGhpcywgZnJhbWVEdXJhdGlvbiwgZnJhbWVzdGFtcCk7XG4gICAgICAgICAgICAgICAgYWN0aW9uLmxhc3RVcGRhdGUgPSBmcmFtZXN0YW1wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgbmV3IHZhbHVlXG4gICAgICAgICAgICBsZXQgdXBkYXRlZFZhbHVlID0gdXRpbHMuaXNTdHJpbmcodmFsdWUud2F0Y2gpID8gd2F0Y2hlci5wcm9jZXNzKHRoaXMsIHZhbHVlKSA6IGFjdGlvbi5wcm9jZXNzKHRoaXMsIHZhbHVlLCBrZXksIGZyYW1lRHVyYXRpb24pO1xuXG4gICAgICAgICAgICAvLyBVc2VyLWRlZmluZWQgdHJhbnNmb3JtIGZ1bmN0aW9uXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gdmFsdWUudHJhbnNmb3JtKHVwZGF0ZWRWYWx1ZSwga2V5LCB0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTGltaXQgaWYgdGhpcyBhY3Rpb24gZG9lcyB0aGF0IGtpbmQgb2YgdGhpbmdcbiAgICAgICAgICAgIGlmIChhY3Rpb24ubGltaXQgJiYgdmFsdWUuaGFzUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBhY3Rpb24ubGltaXQodXBkYXRlZFZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIHZhbHVlIGlmIHJvdW5kIGlzIHRydWVcbiAgICAgICAgICAgIGlmICh2YWx1ZS5yb3VuZCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IE1hdGgucm91bmQodXBkYXRlZFZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIGZyYW1lQ2hhbmdlXG4gICAgICAgICAgICB2YWx1ZS5mcmFtZUNoYW5nZSA9IHVwZGF0ZWRWYWx1ZSAtIHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB2ZWxvY2l0eSBpZiBBY3Rpb24gaGFzbid0XG4gICAgICAgICAgICBpZiAoIWFjdGlvbi5jYWxjdWxhdGVzVmVsb2NpdHkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9IGNhbGMuc3BlZWRQZXJTZWNvbmQodmFsdWUuZnJhbWVDaGFuZ2UsIGZyYW1lRHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgY3VycmVudCBzcGVlZFxuICAgICAgICAgICAgdmFsdWUuc3BlZWQgPSBNYXRoLmFicyh2YWx1ZS52ZWxvY2l0eSk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHZhbHVlJ3MgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT09IHVwZGF0ZWRWYWx1ZSB8fCB0aGlzLmZpcnN0RnJhbWUpIHtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0IG5ldyBjdXJyZW50IFxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHVwZGF0ZWRWYWx1ZTtcbiAgICAgICAgICAgIGxldCB2YWx1ZVN0YXRlID0gKHZhbHVlLnVuaXQpID8gdXBkYXRlZFZhbHVlICsgdmFsdWUudW5pdCA6IHVwZGF0ZWRWYWx1ZTtcblxuICAgICAgICAgICAgLy8gUHV0IHZhbHVlIGluIHN0YXRlIGlmIG5vIHBhcmVudFxuICAgICAgICAgICAgaWYgKCF2YWx1ZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS52YWx1ZXNba2V5XSA9IHZhbHVlU3RhdGU7XG5cbiAgICAgICAgICAgIC8vIE9yLCBhZGQgdG8gcGFyZW50IHN0YXRlIHRvIGJlIGNvbWJpbmVkIGxhdGVyXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlW3ZhbHVlLnBhcmVudF0gPSBzdGF0ZVt2YWx1ZS5wYXJlbnRdIHx8IHt9O1xuICAgICAgICAgICAgICAgIHN0YXRlW3ZhbHVlLnBhcmVudF1bdmFsdWUucHJvcE5hbWVdID0gdmFsdWVTdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWVzIGZyb20gY2FsY3VsYXRlZCBjaGlsZHJlblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUFjdGl2ZVBhcmVudHM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGtleSA9IHRoaXMuYWN0aXZlUGFyZW50c1tpXTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWUgY3VycmVudCBwcm9wZXJ0eVxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlVHlwZU1hbmFnZXJbdmFsdWUudHlwZV0uY29tYmluZShzdGF0ZVtrZXldLCB2YWx1ZS50ZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBzdGF0ZVxuICAgICAgICAgICAgc3RhdGUudmFsdWVzW2tleV0gPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyZSBgZnJhbWVgIGFuZCBgdXBkYXRlYCBjYWxsYmFja3Mgb24gYWxsIFJvbGVzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUm9sZXM7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvbGUgPSB0aGlzLnJvbGVzW2ldO1xuICAgICAgICAgICAgbGV0IG1hcHBlZFZhbHVlcyA9IHt9O1xuXG4gICAgICAgICAgICBlYWNoKHN0YXRlLnZhbHVlcywgY3JlYXRlTWFwcGVyKHJvbGUsIG1hcHBlZFZhbHVlcykpO1xuXG4gICAgICAgICAgICBpZiAocm9sZS5mcmFtZSkge1xuICAgICAgICAgICAgICAgIHJvbGUuZnJhbWUuY2FsbCh0aGlzLCBtYXBwZWRWYWx1ZXMsIHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocm9sZS51cGRhdGUgJiYgaGFzQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIHJvbGUudXBkYXRlLmNhbGwodGhpcywgbWFwcGVkVmFsdWVzLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc2V0IGhhc0NoYW5nZWQgYmVmb3JlIGZ1cnRoZXIgQWN0aW9ucyBtaWdodCBhZmZlY3QgdGhpc1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoY2hlY2tBbGxBY3Rpb25zSGF2ZUVuZGVkKHRoaXMsIGhhc0NoYW5nZWQpKSB7XG4gICAgICAgICAgICAgICAgLy8gRmlyZSBgY29tcGxldGVgIGNhbGxiYWNrc1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUm9sZXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IHRoaXMucm9sZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb2xlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlLmNvbXBsZXRlLmNhbGwodGhpcywgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0RnJhbWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmZyYW1lc3RhbXAgPSBmcmFtZXN0YW1wO1xuICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0gdXBkYXRlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2FjdG9yL3VwZGF0ZS5qc1xuICoqLyIsInZhciB2YWx1ZVR5cGVzTWFuYWdlciA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL21hbmFnZXInKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIGlzTnVtID0gdXRpbHMuaXNOdW0sXG4gICAgZWFjaCA9IHV0aWxzLmVhY2g7XG5cbmNvbnN0IG51bWVyaWNhbFZhbHVlcyA9IFsnY3VycmVudCcsICd0bycsICdtaW4nLCAnbWF4JywgJ3ZlbG9jaXR5JywgJ2ZyaWN0aW9uJywgJ3NwcmluZyddLFxuICAgIG51bU51bWVyaWNhbFZhbHVlcyA9IG51bWVyaWNhbFZhbHVlcy5sZW5ndGgsXG4gICAgZGVmYXVsdFZhbHVlID0ge1xuICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICB2ZWxvY2l0eTogMCxcbiAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgIGZyYW1lQ2hhbmdlOiAwXG4gICAgfTtcblxuZnVuY3Rpb24gY2hlY2tOdW1lcmljYWxWYWx1ZShuYW1lKSB7XG4gICAgcmV0dXJuIChudW1lcmljYWxWYWx1ZXMuaW5kZXhPZihuYW1lKSA+IC0xKTtcbn1cblxuLypcbiAgICBDaGVjayBSb2xlIHR5cGVNYXBzIHRvIHNlZSBpZiB0aGlzIHZhbHVlIG5hbWUgaGFzIGJlZW4gbWFwcGVkXG4gICAgdG8gYSBzcGVjaWZpYyB2YWx1ZSB0eXBlXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEByZXR1cm5zIFtzdHJpbmddOiBWYWx1ZSB0eXBlXG4qL1xuZnVuY3Rpb24gY2hlY2tSb2xlcyhuYW1lLCByb2xlcykge1xuICAgIHZhciB2YWx1ZVR5cGU7XG5cbiAgICBlYWNoKHJvbGVzLCAoa2V5LCByb2xlKSA9PiB7XG4gICAgICAgIGlmIChyb2xlLl90eXBlTWFwKSB7XG4gICAgICAgICAgICB2YWx1ZVR5cGUgPSByb2xlLl90eXBlTWFwW3JvbGUubWFwKG5hbWUpXSB8fCB2YWx1ZVR5cGU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2YWx1ZVR5cGU7XG59XG5cbi8qXG4gICAgQ2hlY2sgdmFsdWUgZm9yIHNwZWNpYWwgdHlwZVxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybnMgW3N0cmluZyB8fCBmYWxzZV1cbiovXG5mdW5jdGlvbiBjaGVja1ZhbHVlVHlwZShleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSwgc2NvcGUsIHZhbHVlTmFtZSkge1xuICAgIHZhciB2YWx1ZVR5cGU7XG5cbiAgICAvLyBDaGVjayBleGlzdGluZyB2YWx1ZSBmb3IgdHlwZSBhbHJlYWR5IHNldFxuICAgIGlmIChleGlzdGluZ1ZhbHVlICYmIGV4aXN0aW5nVmFsdWUudHlwZSkge1xuICAgICAgICB2YWx1ZVR5cGUgPSBleGlzdGluZ1ZhbHVlLnR5cGU7XG4gICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gT3IgY2hlY2sgUm9sZSBfdHlwZU1hcCBwcm9wZXJ0aWVzXG4gICAgICAgIGlmIChzY29wZS5yb2xlcykge1xuICAgICAgICAgICAgdmFsdWVUeXBlID0gY2hlY2tSb2xlcyh2YWx1ZU5hbWUsIHNjb3BlLnJvbGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpbmFsbHkgcnVuIHRlc3RzXG4gICAgICAgIGlmICghdmFsdWVUeXBlICYmIHV0aWxzLmlzU3RyaW5nKG5ld1ZhbHVlLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZVR5cGVzTWFuYWdlci50ZXN0KG5ld1ZhbHVlLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlVHlwZTtcbn1cblxuLypcbiAgICBSZXNvbHZlIGEgcHJvcGVydHlcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uIHx8IG51bWJlcl1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcmV0dXJucyBbbnVtYmVyXVxuKi9cbmZ1bmN0aW9uIHJlc29sdmUobmFtZSwgcHJvcCwgdmFsdWUsIHNjb3BlKSB7XG4gICAgbGV0IGlzTnVtZXJpY2FsVmFsdWUgPSBjaGVja051bWVyaWNhbFZhbHVlKG5hbWUpO1xuXG4gICAgLy8gSWYgZnVuY3Rpb24sIHJlc29sdmVcbiAgICBpZiAodXRpbHMuaXNGdW5jKHByb3ApICYmIGlzTnVtZXJpY2FsVmFsdWUpIHtcbiAgICAgICAgcHJvcCA9IHByb3AuY2FsbChzY29wZSwgc2NvcGUpO1xuICAgIH1cblxuICAgIC8vIElmIHN0cmluZywgY2hlY2sgZm9yIHJlbGF0aXZlIG51bWJlcnMgYW5kIHVuaXRzXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKHByb3ApKSB7XG4gICAgICAgIC8vIElmIHJlbGF0aXZlIHZhbHVlXG4gICAgICAgIGlmIChwcm9wLmluZGV4T2YoJz0nKSA+IDApIHtcbiAgICAgICAgICAgIHByb3AgPSBjYWxjLnJlbGF0aXZlVmFsdWUodmFsdWUuY3VycmVudCwgcHJvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB1bml0XG4gICAgICAgIGlmIChpc051bWVyaWNhbFZhbHVlKSB7XG4gICAgICAgICAgICBzcGxpdFVuaXQocHJvcCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzTnVtZXJpY2FsVmFsdWUpIHtcbiAgICAgICAgcHJvcCA9IHBhcnNlRmxvYXQocHJvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG59XG5cbi8qXG4gICAgU3BsaXQgYSB2YWx1ZSBpbnRvIHN1Yi12YWx1ZXNcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbdmFsdWVUeXBlSGFuZGxlcl1cbiAgICBAcmV0dXJucyBbb2JqZWN0XVxuKi9cbmZ1bmN0aW9uIHNwbGl0KG5hbWUsIHZhbHVlLCBzY29wZSwgdmFsdWVUeXBlSGFuZGxlcikge1xuICAgIHZhciBzcGxpdFZhbHVlcyA9IHt9LFxuICAgICAgICBpID0gMDtcblxuICAgIGZvciAoOyBpIDwgbnVtTnVtZXJpY2FsVmFsdWVzOyBpKyspIHtcbiAgICAgICAgbGV0IHByb3BOYW1lID0gbnVtZXJpY2FsVmFsdWVzW2ldO1xuICAgICAgICBsZXQgc3BsaXRQcm9wID0ge307XG5cbiAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICAgICAgbGV0IHZhbHVlUHJvcCA9IHZhbHVlW3Byb3BOYW1lXTtcblxuICAgICAgICAgICAgLy8gSWYgd2UgbmVlZCB0byBmaXJzdCByZXNvbHZlIHRoaXMsIHJlc29sdmVcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmModmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlUHJvcCA9IHZhbHVlUHJvcC5jYWxsKHNjb3BlLCBzY29wZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdXRpbHMuaXNTdHJpbmcodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGxpdFByb3AgPSB2YWx1ZVR5cGVIYW5kbGVyLnNwbGl0KHZhbHVlUHJvcCk7XG5cbiAgICAgICAgICAgIC8vIEFzc2lnbiBzcGxpdCBwcm9wZXJ0aWVzIHRvIGVhY2ggY2hpbGQgdmFsdWVcbiAgICAgICAgICAgIGVhY2goc3BsaXRQcm9wLCAoa2V5LCBwcm9wKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyB2YWx1ZSBpZiBub25lIGV4aXN0c1xuICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVzW2tleV0gPSBzcGxpdFZhbHVlc1trZXldIHx8IHV0aWxzLmNvcHkodmFsdWVUeXBlc01hbmFnZXIuZGVmYXVsdFByb3BzKHZhbHVlLnR5cGUsIGtleSkpO1xuICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVzW2tleV1bcHJvcE5hbWVdID0gcHJvcDtcblxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhzcGxpdFByb3Bba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRVbml0KHNwbGl0VmFsdWVzW2tleV1bcHJvcE5hbWVdLCBzcGxpdFZhbHVlc1trZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzcGxpdFZhbHVlcztcbn1cblxuLypcbiAgICBTcGxpdCB2YWx1ZSBpbnRvIG51bWJlciBhbmQgdW5pdCwgYW5kIHNldCB1bml0IHRvIHZhbHVlXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW29iamVjdF1cbiovXG5mdW5jdGlvbiBzcGxpdFVuaXQocHJvcGVydHksIGhvc3RWYWx1ZSkge1xuICAgIGlmICh1dGlscy5pc051bShwcm9wZXJ0eSkpIHsgcmV0dXJuIHByb3BlcnR5OyB9XG4gICAgbGV0IHJldHVyblZhbCA9IHByb3BlcnR5LFxuICAgICAgICB7IHZhbHVlLCB1bml0IH0gPSB1dGlscy5zcGxpdFZhbFVuaXQocHJvcGVydHkpO1xuXG4gICAgaWYgKCFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuVmFsID0gdmFsdWU7XG4gICAgICAgIGlmICh1bml0KSB7XG4gICAgICAgICAgICBob3N0VmFsdWUudW5pdCA9IHVuaXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0dXJuVmFsO1xufVxuXG4vKlxuICAgIFByZXByb2Nlc3MgaW5jb21pbmcgdmFsdWVzLCBzcGxpdHRpbmcgbm9uLW51bWVyaWNhbCB2YWx1ZXNcbiAgICBpbnRvIHN1Yi12YWx1ZXMgaWUgaGV4XG5cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW3N0cmluZ11cbiovXG5mdW5jdGlvbiBwcmVwcm9jZXNzKGV4aXN0aW5nLCBpbmNvbWluZywgc2NvcGUsIGRlZmF1bHRQcm9wKSB7XG4gICAgdmFyIHZhbHVlcyA9IHt9O1xuXG4gICAgZWFjaChpbmNvbWluZywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgbGV0IGV4aXN0aW5nVmFsdWUgPSBleGlzdGluZ1trZXldLFxuICAgICAgICAgICAgbmV3VmFsdWUgPSB7fTtcblxuICAgICAgICBpZiAodXRpbHMuaXNPYmoodmFsdWUpKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VmFsdWVbZGVmYXVsdFByb3BdID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB2YWx1ZSBkb2Vzbid0IGhhdmUgYSBzcGVjaWFsIHR5cGUsIGNoZWNrIGZvciBvbmVcbiAgICAgICAgbmV3VmFsdWUudHlwZSA9IGNoZWNrVmFsdWVUeXBlKGV4aXN0aW5nVmFsdWUsIG5ld1ZhbHVlLCBzY29wZSwga2V5KTtcbiAgICAgICAgbmV3VmFsdWUud2F0Y2ggPSB1dGlscy5pc1N0cmluZyhuZXdWYWx1ZS53YXRjaCkgPyBuZXdWYWx1ZS53YXRjaCA6IHVuZGVmaW5lZDtcblxuICAgICAgICB2YWx1ZXNba2V5XSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSB0eXBlIHByb3BlcnR5LCBzcGxpdC9hc3NpZ24gZGVmYXVsdCBwcm9wc1xuICAgICAgICBpZiAobmV3VmFsdWUudHlwZSkge1xuICAgICAgICAgICAgbGV0IHR5cGVIYW5kbGVyID0gdmFsdWVUeXBlc01hbmFnZXJbbmV3VmFsdWUudHlwZV07XG5cbiAgICAgICAgICAgIC8vIElmIHZhbHVlVHlwZSBoYW5kbGVyIGhhcyBhIHNwbGl0IGZ1bmN0aW9uLCBzcGxpdCB0aGlzIHZhbHVlXG4gICAgICAgICAgICBpZiAodHlwZUhhbmRsZXIuc3BsaXQpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3BsaXRWYWx1ZXMgPSBzcGxpdChrZXksIG5ld1ZhbHVlLCBzY29wZSwgdHlwZUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0ge307XG5cbiAgICAgICAgICAgICAgICBlYWNoKHNwbGl0VmFsdWVzLCAoY2hpbGROYW1lLCBjaGlsZFZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWUgPSB1dGlscy5tZXJnZShuZXdWYWx1ZSwgY2hpbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWUucGFyZW50ID0gY2hpbGRWYWx1ZS5uYW1lID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlLnByb3BOYW1lID0gY2hpbGROYW1lO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjaGlsZFZhbHVlLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjaGlsZFZhbHVlLmNoaWxkcmVuO1xuXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuW2NoaWxkTmFtZV0gPSB2YWx1ZXNba2V5ICsgY2hpbGROYW1lXSA9IGNoaWxkVmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZUhhbmRsZXIudGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudGVtcGxhdGUgPSBleGlzdGluZ1ZhbHVlID8gZXhpc3RpbmdWYWx1ZS50ZW1wbGF0ZSA6IHR5cGVIYW5kbGVyLnRlbXBsYXRlKG5ld1ZhbHVlLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3IganVzdCBhc3NpZ24gZGVmYXVsdCBwcm9wZXJ0aWVzIGZvciB0aGlzIHZhbHVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlc1trZXldID0gdXRpbHMubWVyZ2UodmFsdWVUeXBlc01hbmFnZXIuZGVmYXVsdFByb3BzKG5ld1ZhbHVlLnR5cGUsIGtleSksIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhbHVlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICAvKlxuICAgICAgICBGbGlwIHZhbHVlIHRhcmdldC9vcmlnaW5cbiAgICAqL1xuICAgIGZsaXA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gKHZhbHVlLnRhcmdldCAhPT0gdW5kZWZpbmVkKSA/IHZhbHVlLnRhcmdldCA6IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIHZhbHVlLnRhcmdldCA9IHZhbHVlLnRvID0gdmFsdWUub3JpZ2luO1xuICAgICAgICB2YWx1ZS5vcmlnaW4gPSB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIE1lcmdlIGV4aXN0aW5nIGFuZCBpbmNvbWluZyB2YWx1ZXMsIHJlc29sdmluZyBwcm9wZXJ0aWVzXG4gICAgICAgIHNldCBhcyBmdW5jdGlvbnMgYW5kIHNwbGl0dGluZyBub24tbnVtZXJpY2FsIHZhbHVlcyBpZSBoZXhcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcGFyYW0gW3N0cmluZ10gKG9wdGlvbmFsKVxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHJldHVybnMgW29iamVjdF06IE5ldyB2YWx1ZXMgb2JqZWN0XG4gICAgKi9cbiAgICBwcm9jZXNzOiBmdW5jdGlvbiAoZXhpc3RpbmcsIGluY29taW5nLCBpbmhlcml0LCBkZWZhdWx0UHJvcCwgc2NvcGUpIHtcbiAgICAgICAgZXhpc3RpbmcgPSBleGlzdGluZyB8fCB7fTtcbiAgICAgICAgZGVmYXVsdFByb3AgPSBkZWZhdWx0UHJvcCB8fCAnY3VycmVudCc7XG4gICAgICAgIGxldCBwcmVwcm9jZXNzZWQgPSBwcmVwcm9jZXNzKGV4aXN0aW5nLCBpbmNvbWluZywgc2NvcGUsIGRlZmF1bHRQcm9wKTtcblxuICAgICAgICBlYWNoKHByZXByb2Nlc3NlZCwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IGV4aXN0aW5nW2tleV0gfHwgdXRpbHMuY29weShkZWZhdWx0VmFsdWUpLFxuICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID0gKHZhbHVlLmNoaWxkcmVuICE9PSB1bmRlZmluZWQpLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRBY3Rpb25WYWx1ZSA9IGluaGVyaXQuYWN0aW9uID8gaW5oZXJpdC5hY3Rpb24uZ2V0RGVmYXVsdFZhbHVlKCkgOiB7fTtcblxuICAgICAgICAgICAgdmFsdWUuYWN0aW9uID0gaW5oZXJpdC5hY3Rpb247XG5cbiAgICAgICAgICAgIGVhY2goZGVmYXVsdEFjdGlvblZhbHVlLCAocHJvcE5hbWUsIGRlZmF1bHRBY3Rpb25Qcm9wKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVbcHJvcE5hbWVdID0gKGluaGVyaXQuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICYmICF2YWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpID8gaW5oZXJpdFtwcm9wTmFtZV0gOiBkZWZhdWx0QWN0aW9uUHJvcDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBlYWNoKHZhbHVlLCAodmFsdWVOYW1lLCB2YWx1ZVByb3ApID0+IHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwcm9wZXJ0eSBpcyBub3QgdW5kZWZpbmVkIG9yIGEgbnVtYmVyLCByZXNvbHZlXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkICYmICFpc051bSh2YWx1ZVByb3ApICYmICFoYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3AgPSByZXNvbHZlKHZhbHVlTmFtZSwgdmFsdWVQcm9wLCBuZXdWYWx1ZSwgc2NvcGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlW3ZhbHVlTmFtZV0gPSB2YWx1ZVByb3A7XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgaW50ZXJuYWwgdGFyZ2V0IGlmIHRoaXMgcHJvcGVydHkgaXMgJ3RvJ1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZU5hbWUgPT09ICd0bycpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudGFyZ2V0ID0gbmV3VmFsdWUudG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG5ld1ZhbHVlLm9yaWdpbiA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICBuZXdWYWx1ZS5oYXNSYW5nZSA9IChpc051bShuZXdWYWx1ZS5taW4pIHx8IGlzTnVtKG5ld1ZhbHVlLm1heCkpID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgICAgICBleGlzdGluZ1trZXldID0gbmV3VmFsdWU7XG4gICAgICAgICAgICBzY29wZS51cGRhdGVPcmRlcihrZXksIHV0aWxzLmlzU3RyaW5nKG5ld1ZhbHVlLndhdGNoKSwgaGFzQ2hpbGRyZW4pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZXhpc3Rpbmc7XG4gICAgfVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rvci92YWx1ZS1vcGVyYXRpb25zLmpzXG4gKiovIiwiY29uc3QgbWF4SGlzdG9yeVNpemUgPSAzO1xuXG5jbGFzcyBIaXN0b3J5IHtcblxuICAgIC8qXG4gICAgICAgIEhpc3RvcnkgY29uc3RydWN0b3JcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbdmFyXTogVmFyaWFibGUgdG8gc3RvcmUgaW4gZmlyc3QgaGlzdG9yeSBzbG90XG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpOiBNYXhpbXVtIHNpemUgb2YgaGlzdG9yeVxuICAgICovXG4gICAgY29uc3RydWN0b3Iob2JqLCBtYXggPSBtYXhIaXN0b3J5U2l6ZSkge1xuICAgICAgICB0aGlzLm1heCA9IG1heDtcbiAgICAgICAgdGhpcy5lbnRyaWVzID0gW107XG4gICAgICAgIHRoaXMuYWRkKG9iaik7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUHVzaCBuZXcgdmFyIHRvIGhpc3RvcnlcbiAgICAgICAgXG4gICAgICAgIFNoaWZ0IG91dCBvbGRlc3QgZW50cnkgaWYgd2UndmUgcmVhY2hlZCBtYXhpbXVtIGNhcGFjaXR5XG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3Zhcl06IFZhcmlhYmxlIHRvIHB1c2ggaW50byBoaXN0b3J5LmVudHJpZXNcbiAgICAqL1xuICAgIGFkZChvYmopIHtcbiAgICAgICAgdGhpcy5lbnRyaWVzLnB1c2gob2JqKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmdldFNpemUoKSA+PSB0aGlzLm1heCkge1xuICAgICAgICAgICAgdGhpcy5lbnRyaWVzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHZhcmlhYmxlIGF0IHNwZWNpZmllZCBpbmRleFxuXG4gICAgICAgIEBwYXJhbSBbaW50XTogSW5kZXhcbiAgICAgICAgQHJldHVybiBbdmFyXTogVmFyIGZvdW5kIGF0IHNwZWNpZmllZCBpbmRleFxuICAgICovXG4gICAgZ2V0KGkgPSB0aGlzLmdldFNpemUoKSAtIDEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllc1tpXTtcbiAgICB9XG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBzZWNvbmQgbmV3ZXN0IGhpc3RvcnkgZW50cnlcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW3Zhcl06IEVudHJ5IGZvdW5kIGF0IGluZGV4IHNpemUgLSAyXG4gICAgKi9cbiAgICBnZXRQcmV2aW91cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHRoaXMuZ2V0U2l6ZSgpIC0gMik7XG4gICAgfVxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBjdXJyZW50IGhpc3Rvcnkgc2l6ZVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbaW50XTogQ3VycmVudCBsZW5ndGggb2YgZW50cmllcy5sZW5ndGhcbiAgICAqL1xuICAgIGdldFNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXMubGVuZ3RoO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIaXN0b3J5O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luYy9IaXN0b3J5LmpzXG4gKiovIiwiY2xhc3MgQ29udHJvbHMge1xuICAgIGNvbnN0cnVjdG9yKGFjdG9yLCBhY3Rpb24sIGhhc1N0YXJ0ZWQpIHtcbiAgICAgICAgdGhpcy5hY3RvciA9IGFjdG9yO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcblxuICAgICAgICBpZiAoaGFzU3RhcnRlZCkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMuYmluZEFjdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24uYWN0aXZhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0KGlucHV0KSB7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmJpbmRBY3Rpb24oKTtcbiAgICAgICAgdGhpcy5hY3Rvci5zdGFydCh0aGlzLmlkLCBpbnB1dCk7XG4gICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuYWN0b3IudW5iaW5kQWN0aW9uKHRoaXMuaWQpO1xuICAgICAgICB0aGlzLmFjdGlvbi5kZWFjdGl2YXRlKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzdW1lKCkge1xuICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIGxldCByZXN1bWUgPSB0aGlzLmFjdG9yLmhhc0FjdGlvbih0aGlzLmlkKSA/IHRoaXMucmVzdW1lIDogdGhpcy5zdGFydDtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aW9uLmlzQWN0aXZlID8gdGhpcy5wYXVzZSgpIDogcmVzdW1lLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgdGhlbiguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuYWN0b3IudGhlbiguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYmluZEFjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0b3IuYmluZEFjdGlvbih0aGlzLmFjdGlvbiwgdGhpcy5pZCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRyb2xzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbnRyb2xzL0NvbnRyb2xzLmpzXG4gKiovIiwiLypcbiAgICBFYXNpbmcgZnVuY3Rpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIEdlbmVyYXRlcyBhbmQgcHJvdmlkZXMgZWFzaW5nIGZ1bmN0aW9ucyBiYXNlZCBvbiBiYXNlRnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgICBcbiAgICBBIGNhbGwgdG8gZWFzaW5nRnVuY3Rpb24uZ2V0KCdmdW5jdGlvbk5hbWUnKSByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcGFzc2VkOlxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIDAtMVxuICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogQW1wIG1vZGlmaWVyLCBvbmx5IGFjY2VwdGVkIGluIHNvbWUgZWFzaW5nIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGlzIHVzZWQgdG8gYWRqdXN0IG92ZXJhbGwgc3RyZW5ndGhcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogRWFzZWQgcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgV2UgY2FuIGdlbmVyYXRlIG5ldyBmdW5jdGlvbnMgYnkgc2VuZGluZyBhbiBlYXNpbmcgZnVuY3Rpb24gdGhyb3VnaCBlYXNpbmdGdW5jdGlvbi5leHRlbmQobmFtZSwgbWV0aG9kKS5cbiAgICBXaGljaCB3aWxsIG1ha2UgbmFtZUluLCBuYW1lT3V0IGFuZCBuYW1lSW5PdXQgZnVuY3Rpb25zIGF2YWlsYWJsZSB0byB1c2UuXG4gICAgICAgIFxuICAgIEVhc2luZyBmdW5jdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyXG4gICAgaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbiAgICAgICAgXG4gICAgQmV6aWVyIGN1cnZlIGludGVycHJldG9yIGNyZWF0ZWQgZnJvbSBHYcOrdGFuIFJlbmF1ZGVhdSdzIG9yaWdpbmFsIEJlemllckVhc2luZyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgRWFzaW5nID0gcmVxdWlyZSgnLi9FYXNpbmcnKSxcbiAgICBlYXNpbmdGdW5jdGlvbixcbiAgICBcbiAgICAvLyBHZW5lcmF0ZSBlYXNpbmcgZnVuY3Rpb24gd2l0aCBwcm92aWRlZCBwb3dlclxuICAgIGdlbmVyYXRlUG93ZXJFYXNpbmcgPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCBwb3dlcik7XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEVhY2ggb2YgdGhlc2UgYmFzZSBmdW5jdGlvbnMgaXMgYW4gZWFzZUluXG4gICAgICAgIFxuICAgICAgICBPbiBpbml0LCB3ZSB1c2UgRWFzaW5nRnVuY3Rpb24ubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gICAgICAgIGVhc2VPdXQgZnVuY3Rpb25zIHJlc3BlY3RpdmVseS5cbiAgICAqL1xuICAgIGJhc2VFYXNpbmcgPSB7XG4gICAgICAgIGNpcmM6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKTtcbiAgICAgICAgfSxcbiAgICAgICAgYmFjazogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICB2YXIgc3RyZW5ndGggPSAxLjU7XG5cbiAgICAgICAgICAgIHJldHVybiAocHJvZ3Jlc3MgKiBwcm9ncmVzcykgKiAoKHN0cmVuZ3RoICsgMSkgKiBwcm9ncmVzcyAtIHN0cmVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbi8vIEdlbmVyYXRlIHBvd2VyIGVhc2luZyBlYXNpbmdcblsnZWFzZScsICdjdWJpYycsICdxdWFydCcsICdxdWludCddLmZvckVhY2goZnVuY3Rpb24gKGVhc2luZ05hbWUsIGkpIHtcbiAgICBiYXNlRWFzaW5nW2Vhc2luZ05hbWVdID0gZ2VuZXJhdGVQb3dlckVhc2luZyhpICsgMik7XG59KTtcblxuLy8gR2VuZXJhdGUgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcbmZvciAodmFyIGtleSBpbiBiYXNlRWFzaW5nKSB7XG4gICAgaWYgKGJhc2VFYXNpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBlYXNpbmdGdW5jdGlvbiA9IG5ldyBFYXNpbmcoYmFzZUVhc2luZ1trZXldKTtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnSW4nXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdPdXQnXSA9IGVhc2luZ0Z1bmN0aW9uLm91dDtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnSW5PdXQnXSA9IGVhc2luZ0Z1bmN0aW9uLmluT3V0O1xuICAgIH1cbn1cblxuLypcbiAgICBMaW5lYXIgZWFzaW5nIGFkanVzdG1lbnRcbiAgICBcbiAgICBUaGUgZGVmYXVsdCBlYXNpbmcgbWV0aG9kLCBub3QgYWRkZWQgd2l0aCAuZXh0ZW5kIGFzIGl0IGhhcyBubyBPdXQgb3IgSW5PdXRcbiAgICB2YXJpYXRpb24uXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwLTFcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBVbmFkanVzdGVkIHByb2dyZXNzXG4qL1xuYmFzZUVhc2luZy5saW5lYXIgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gcHJvZ3Jlc3M7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VFYXNpbmc7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi9wcmVzZXQtZWFzaW5nLmpzXG4gKiovIiwidmFyIENvbnRyb2xzID0gcmVxdWlyZSgnLi4vLi4vY29udHJvbHMvQ29udHJvbHMnKTtcblxuY2xhc3MgVHdlZW5Db250cm9scyBleHRlbmRzIENvbnRyb2xzIHtcbiAgICByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmFjdGlvbi5yZXN0YXJ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldmVyc2UoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLnJldmVyc2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2Vlayhwcm9ncmVzcykge1xuICAgICAgICBpZiAoIXRoaXMuYWN0b3IuaGFzQWN0aW9uKHRoaXMuaWQpKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCkucGF1c2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aW9uLmVsYXBzZWQgPSB0aGlzLmFjdGlvbi5kdXJhdGlvbiAqIHByb2dyZXNzO1xuXG4gICAgICAgIGlmICghdGhpcy5hY3Rpb24uaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG4gICAgICAgICAgICB0aGlzLmFjdG9yLnByb2Nlc3MuZmlyZSgpO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24uZGVhY3RpdmF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR3ZWVuQ29udHJvbHM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi9Ud2VlbkNvbnRyb2xzLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjYWxjID0gcmVxdWlyZSgnLi4vLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpLFxuICAgIHNwZWVkUGVyRnJhbWUgPSBjYWxjLnNwZWVkUGVyRnJhbWU7XG5cbi8qXG4gICAgQWRkIGNvcmUgcGh5c2ljcyBzaW11bGF0aW9uc1xuKi9cbnZhciBzaW11bGF0aW9ucyA9IHtcbiAgICAvKlxuICAgICAgICBWZWxvY2l0eVxuICAgICAgICBcbiAgICAgICAgVGhlIGRlZmF1bHQgLnJ1bigpIHNpbXVsYXRpb24uXG4gICAgICAgIFxuICAgICAgICBBcHBsaWVzIGFueSBzZXQgZGVjZWxlcmF0aW9uIGFuZCBhY2NlbGVyYXRpb24gdG8gZXhpc3RpbmcgdmVsb2NpdHlcbiAgICAqL1xuICAgIHZlbG9jaXR5OiBmdW5jdGlvbiAodmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHkgLSBzcGVlZFBlckZyYW1lKHZhbHVlLmRlY2VsZXJhdGlvbiwgZHVyYXRpb24pICsgc3BlZWRQZXJGcmFtZSh2YWx1ZS5hY2NlbGVyYXRpb24sIGR1cmF0aW9uKTtcblxuICAgICAgICByZXR1cm4gc2ltdWxhdGlvbnMuZnJpY3Rpb24odmFsdWUsIGR1cmF0aW9uKTtcbiAgICB9LFxuXG4gICAgLypcbiAgICAgICAgR2xpZGVcbiAgICAgICAgXG4gICAgICAgIEVtdWxhdGVzIHRvdWNoIGRldmljZSBzY3JvbGxpbmcgZWZmZWN0cyB3aXRoIGV4cG9uZW50aWFsIGRlY2F5XG4gICAgICAgIGh0dHA6Ly9hcml5YS5vZmlsYWJzLmNvbS8yMDEzLzExL2phdmFzY3JpcHQta2luZXRpYy1zY3JvbGxpbmctcGFydC0yLmh0bWxcbiAgICAqL1xuICAgIGdsaWRlOiBmdW5jdGlvbiAodmFsdWUsIGR1cmF0aW9uLCBzdGFydGVkKSB7XG4gICAgICAgIHZhciB0aW1lVW50aWxGaW5pc2hlZCA9IC0gdXRpbHMuY3VycmVudFRpbWUoKSAtIHN0YXJ0ZWQsXG4gICAgICAgICAgICBkZWx0YSA9IC0gdmFsdWUudG8gKiBNYXRoLmV4cCh0aW1lVW50aWxGaW5pc2hlZCAvIHZhbHVlLnRpbWVDb25zdGFudCk7XG5cbiAgICAgICAgcmV0dXJuICh2YWx1ZS50byArIGRlbHRhKSAtIHZhbHVlLmN1cnJlbnQ7XG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEZyaWN0aW9uXG5cbiAgICAgICAgQXBwbHkgZnJpY3Rpb24gdG8gdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgVE9ETzogTWFrZSB0aGlzIGZyYW1lcmF0ZS1pbmRlcGVuZGVudFxuICAgICovXG4gICAgZnJpY3Rpb246IGZ1bmN0aW9uICh2YWx1ZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdmFyIG5ld1ZlbG9jaXR5ID0gc3BlZWRQZXJGcmFtZSh2YWx1ZS52ZWxvY2l0eSwgZHVyYXRpb24pICogKDEgLSB2YWx1ZS5mcmljdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGNhbGMuc3BlZWRQZXJTZWNvbmQobmV3VmVsb2NpdHksIGR1cmF0aW9uKTtcbiAgICB9LFxuXG4gICAgc3ByaW5nOiBmdW5jdGlvbiAodmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZSA9IHZhbHVlLnRvIC0gdmFsdWUuY3VycmVudDtcblxuICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZSAqIHNwZWVkUGVyRnJhbWUodmFsdWUuc3ByaW5nLCBkdXJhdGlvbik7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gc2ltdWxhdGlvbnMuZnJpY3Rpb24odmFsdWUsIGR1cmF0aW9uKTtcbiAgICB9LFxuXG4gICAgYm91bmNlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gMCxcbiAgICAgICAgICAgIHRvID0gdmFsdWUudG8sXG4gICAgICAgICAgICBjdXJyZW50ID0gdmFsdWUuY3VycmVudCxcbiAgICAgICAgICAgIGJvdW5jZSA9IHZhbHVlLmJvdW5jZTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHdlJ3JlIHVzaW5nIGdsaWRlIHNpbXVsYXRpb24gd2UgaGF2ZSB0byBmbGlwIG91ciB0YXJnZXQgdG9vXG4gICAgICAgIGlmICh2YWx1ZS5zaW11bGF0ZSA9PT0gJ2dsaWRlJykge1xuICAgICAgICAgICAgZGlzdGFuY2UgPSB0byAtIGN1cnJlbnQ7XG4gICAgICAgICAgICB2YWx1ZS50byA9IGN1cnJlbnQgLSAoZGlzdGFuY2UgKiBib3VuY2UpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdmFsdWUudmVsb2NpdHkgKj0gLSBib3VuY2U7XG4gICAgfSxcblxuICAgIGNhcHR1cmU6IGZ1bmN0aW9uICh2YWx1ZSwgdGFyZ2V0KSB7XG4gICAgICAgIHZhbHVlLnRvID0gdGFyZ2V0O1xuICAgICAgICB2YWx1ZS5zaW11bGF0ZSA9ICdzcHJpbmcnO1xuICAgICAgICB2YWx1ZS5jYXB0dXJlID0gdmFsdWUubWluID0gdmFsdWUubWF4ID0gdW5kZWZpbmVkO1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2ltdWxhdGlvbnM7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hY3Rpb25zL3NpbXVsYXRlL3NpbXVsYXRpb25zLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBJbnB1dCA9IHJlcXVpcmUoJy4vSW5wdXQuanMnKSxcbiAgICBjdXJyZW50UG9pbnRlciwgLy8gU29ydCB0aGlzIG91dCBmb3IgbXVsdGl0b3VjaFxuICAgIFxuICAgIFRPVUNITU9WRSA9ICd0b3VjaG1vdmUnLFxuICAgIE1PVVNFTU9WRSA9ICdtb3VzZW1vdmUnLFxuXG4gICAgLypcbiAgICAgICAgQ29udmVydCBldmVudCBpbnRvIHBvaW50XG4gICAgICAgIFxuICAgICAgICBTY3JhcGUgdGhlIHgveSBjb29yZGluYXRlcyBmcm9tIHRoZSBwcm92aWRlZCBldmVudFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtldmVudF06IE9yaWdpbmFsIHBvaW50ZXIgZXZlbnRcbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogVHJ1ZSBpZiB0b3VjaCBldmVudFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiB4L3kgY29vcmRpbmF0ZXMgb2YgZXZlbnRcbiAgICAqL1xuICAgIGV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChldmVudCwgaXNUb3VjaEV2ZW50KSB7XG4gICAgICAgIHZhciB0b3VjaENoYW5nZWQgPSBpc1RvdWNoRXZlbnQgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHRvdWNoQ2hhbmdlZCA/IHRvdWNoQ2hhbmdlZC5jbGllbnRYIDogZXZlbnQucGFnZVgsXG4gICAgICAgICAgICB5OiB0b3VjaENoYW5nZWQgPyB0b3VjaENoYW5nZWQuY2xpZW50WSA6IGV2ZW50LnBhZ2VZXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgYWN0dWFsIGV2ZW50XG4gICAgICAgIFxuICAgICAgICBDaGVja3MgZm9yIGpRdWVyeSdzIC5vcmlnaW5hbEV2ZW50IGlmIHByZXNlbnRcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbZXZlbnQgfCBqUXVlcnkgZXZlbnRdXG4gICAgICAgIEByZXR1cm4gW2V2ZW50XTogVGhlIGFjdHVhbCBKUyBldmVudCAgXG4gICAgKi9cbiAgICBnZXRBY3R1YWxFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gZXZlbnQub3JpZ2luYWxFdmVudCB8fCBldmVudDtcbiAgICB9LFxuXG4gICAgXG4gICAgLypcbiAgICAgICAgUG9pbnRlciBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgUG9pbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBldmVudCA9IGdldEFjdHVhbEV2ZW50KGUpLCAvLyBJbiBjYXNlIG9mIGpRdWVyeSBldmVudFxuICAgICAgICAgICAgaXNUb3VjaCA9IChldmVudC50b3VjaGVzKSA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSBldmVudFRvUG9pbnQoZXZlbnQsIGlzVG91Y2gpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy51cGRhdGUoc3RhcnRQb2ludCk7XG4gICAgICAgIHRoaXMuaXNUb3VjaCA9IGlzVG91Y2g7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH0sXG4gICAgXG4gICAgcHJvdG8gPSBQb2ludGVyLnByb3RvdHlwZSA9IG5ldyBJbnB1dCgpO1xuXG4vKlxuICAgIEJpbmQgbW92ZSBldmVudFxuKi9cbnByb3RvLmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5tb3ZlRXZlbnQgPSB0aGlzLmlzVG91Y2ggPyBUT1VDSE1PVkUgOiBNT1VTRU1PVkU7XG4gICAgXG4gICAgY3VycmVudFBvaW50ZXIgPSB0aGlzO1xuICAgIFxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCB0aGlzLm9uTW92ZSk7XG59O1xuXG4vKlxuICAgIFVuYmluZCBtb3ZlIGV2ZW50XG4qL1xucHJvdG8udW5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCB0aGlzLm9uTW92ZSk7XG59O1xuXG4vKlxuICAgIFBvaW50ZXIgb25Nb3ZlIGV2ZW50IGhhbmRsZXJcbiAgICBcbiAgICBAcGFyYW0gW2V2ZW50XTogUG9pbnRlciBtb3ZlIGV2ZW50XG4qL1xucHJvdG8ub25Nb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgbmV3UG9pbnQgPSBldmVudFRvUG9pbnQoZSwgY3VycmVudFBvaW50ZXIuaXNUb3VjaCk7XG4gICAgZSA9IGdldEFjdHVhbEV2ZW50KGUpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjdXJyZW50UG9pbnRlci51cGRhdGUobmV3UG9pbnQpO1xufTtcblxucHJvdG8uc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQb2ludGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lucHV0L1BvaW50ZXIuanNcbiAqKi8iLCIvKlxuICAgIEBwYXJhbSBbc3RyaW5nIHx8IE5vZGVMaXN0IHx8IGpRdWVyeSBvYmplY3RdOlxuICAgICAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdCB8fCBqUXVlcnkgb2JqZWN0LlxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgdmFyIG5vZGVzID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgOiBzZWxlY3RvcixcbiAgICAgICAgZWxlbWVudHMgPSBbXTtcblxuICAgIC8vIElmIGpRdWVyeSBzZWxlY3Rpb24sIGdldCBhcnJheSBvZiBFbGVtZW50c1xuICAgIGlmIChub2Rlcy5nZXQpIHtcbiAgICAgICAgZWxlbWVudHMgPSBub2Rlcy5nZXQoKTtcblxuICAgIC8vIE9yIGNvbnZlcnQgTm9kZUxpc3QgdG8gYXJyYXlcbiAgICB9IGVsc2UgaWYgKG5vZGVzLmxlbmd0aCkge1xuICAgICAgICBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwobm9kZXMpO1xuXG4gICAgLy8gT3IgaWYgaXQncyBqdXN0IGFuIEVsZW1lbnQsIHB1dCBpbnRvIGFycmF5XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudHMucHVzaChub2Rlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmMvc2VsZWN0LWRvbS5qc1xuICoqLyIsImNvbnN0IGlzU3RyaW5nID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJykuaXNTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gdmFsdWUgPT4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL21hbmlwdWxhdG9ycy9zcGxpdC1jb21tYS1kZWxpbWl0ZWQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHZhbHVlID0+IHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9tYW5pcHVsYXRvcnMvZnVuY3Rpb24tYnJlYWsuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHRoZUxvb3AgPSByZXF1aXJlKCcuL2xvb3AuanMnKSxcbiAgICBQcm9jZXNzTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVJZHMgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVQcm9jZXNzZXMgPSB7fTtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlUXVldWUgPSBbXTtcbiAgICAgICAgdGhlTG9vcC5zZXRDYWxsYmFjayh0aGlzLCB0aGlzLmZpcmVBY3RpdmUpO1xuICAgIH07XG4gICAgXG5Qcm9jZXNzTWFuYWdlci5wcm90b3R5cGUgPSB7XG4gICAgXG4gICAgLypcbiAgICAgICAgW2ludF06IFVzZWQgZm9yIHByb2Nlc3MgSURcbiAgICAqL1xuICAgIHByb2Nlc3NDb3VudGVyOiAwLFxuICAgIFxuICAgIC8qXG4gICAgICAgIFtpbnRdOiBOdW1iZXIgb2YgYWN0aXZlIHByb2Nlc3Nlc1xuICAgICovXG4gICAgYWN0aXZlQ291bnQ6IDAsXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBwcm9jZXNzIHdpdGggYSBnaXZlbiBpbmRleFxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleCBvZiBwcm9jZXNzXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cbiAgICBnZXRQcm9jZXNzOiBmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVQcm9jZXNzZXNbaV07XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBHZXQgbnVtYmVyIG9mIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2ludF06IE51bWJlciBvZiBhY3RpdmUgcHJvY2Vzc2VzXG4gICAgKi9cbiAgICBnZXRBY3RpdmVDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVDb3VudDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEdldCBhY3RpdmUgdG9rZW5zXG5cbiAgICAgICAgQHJldHVybiBbYXJyYXldOiBBY3RpdmUgdG9rZW5zXG4gICAgKi9cbiAgICBnZXRBY3RpdmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlSWRzO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgR2V0IHRoZSBsZW5ndGggb2YgdGhlIGRlYWN0aXZhdGUgcXVldWVcbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW2ludF06IExlbmd0aCBvZiBxdWV1ZVxuICAgICovXG4gICAgZ2V0UXVldWVMZW5ndGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcbiAgICB9LFxuICAgIFxuICAgIC8qXG4gICAgICAgIEZpcmUgYWxsIGFjdGl2ZSBwcm9jZXNzZXNcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogVGltZXN0YW1wIG9mIGV4ZWN1dGluZyBmcmFtZXNcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBUaW1lIHNpbmNlIHByZXZpb3VzIGZyYW1lXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGFjdGl2ZSBwcm9jZXNzZXMgZm91bmRcbiAgICAqL1xuICAgIGZpcmVBY3RpdmU6IGZ1bmN0aW9uIChmcmFtZXN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBwcm9jZXNzLFxuICAgICAgICAgICAgYWN0aXZlQ291bnQgPSAwLFxuICAgICAgICAgICAgYWN0aXZlSWRzID0gW10sXG4gICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAvLyBQdXJnZSBhbmQgY2hlY2sgYWN0aXZlIGNvdW50IGJlZm9yZSBleGVjdXRpb25cbiAgICAgICAgdGhpcy5wdXJnZSgpO1xuICAgICAgICBhY3RpdmVDb3VudCA9IHRoaXMuZ2V0QWN0aXZlQ291bnQoKTtcbiAgICAgICAgYWN0aXZlSWRzID0gdGhpcy5nZXRBY3RpdmUoKTtcblxuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWN0aXZlIHByb2Nlc3NlcyBhbmQgZmlyZSBjYWxsYmFja1xuICAgICAgICBmb3IgKDsgaSA8IGFjdGl2ZUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHByb2Nlc3MgPSB0aGlzLmdldFByb2Nlc3MoYWN0aXZlSWRzW2ldKTtcblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmZpcmUoZnJhbWVzdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXB1cmdlIGFuZCByZWNoZWNrIGFjdGl2ZSBjb3VudCBhZnRlciBleGVjdXRpb25cbiAgICAgICAgdGhpcy5wdXJnZSgpO1xuICAgICAgICBhY3RpdmVDb3VudCA9IHRoaXMuZ2V0QWN0aXZlQ291bnQoKTtcblxuICAgICAgICAvLyBSZXR1cm4gdHJ1ZSBpZiB3ZSBzdGlsbCBoYXZlIGFjdGl2ZSBwcm9jZXNzZXMsIG9yIGZhbHNlIGlmIG5vbmVcbiAgICAgICAgcmV0dXJuIGFjdGl2ZUNvdW50ID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgUmVnaXN0ZXIgYSBuZXcgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtQcm9jZXNzXVxuICAgICAgICBAcmV0dXJuIFtpbnRdOiBJbmRleCBvZiBwcm9jZXNzIHRvIGJlIHVzZWQgYXMgSURcbiAgICAqL1xuICAgIHJlZ2lzdGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NDb3VudGVyKys7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBBY3RpdmF0ZSBhIHByb2Nlc3NcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbaW50XTogSW5kZXggb2YgYWN0aXZlIHByb2Nlc3NcbiAgICAqL1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAocHJvY2VzcywgaSkge1xuICAgICAgICB2YXIgcXVldWVJbmRleCA9IHRoaXMuZGVhY3RpdmF0ZVF1ZXVlLmluZGV4T2YoaSksXG4gICAgICAgICAgICBpc1F1ZXVlZCA9IChxdWV1ZUluZGV4ID4gLTEpLFxuICAgICAgICAgICAgaXNBY3RpdmUgPSAodGhpcy5hY3RpdmVJZHMuaW5kZXhPZihpKSA+IC0xKTtcblxuICAgICAgICAvLyBSZW1vdmUgZnJvbSBkZWFjdGl2YXRlUXVldWUgaWYgaW4gdGhlcmVcbiAgICAgICAgaWYgKGlzUXVldWVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UocXVldWVJbmRleCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdG8gYWN0aXZlIHByb2Nlc3NlcyBhcnJheSBpZiBub3QgYWxyZWFkeSBpbiB0aGVyZVxuICAgICAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUlkcy5wdXNoKGkpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQcm9jZXNzZXNbaV0gPSBwcm9jZXNzO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVDb3VudCsrO1xuICAgICAgICAgICAgdGhlTG9vcC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBEZWFjdGl2YXRlIGEgcHJvY2Vzc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtpbnRdOiBJbmRleCBvZiBwcm9jZXNzIHRvIGFkZCB0byBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlOiBmdW5jdGlvbiAoaSkge1xuICAgICAgICB2YXIgcXVldWUgPSB0aGlzLmRlYWN0aXZhdGVRdWV1ZTtcbiAgICAgICAgaWYgKHF1ZXVlLmluZGV4T2YoaSkgPT09IC0xKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBQdXJnZSB0aGUgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICovXG4gICAgcHVyZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHF1ZXVlTGVuZ3RoID0gdGhpcy5nZXRRdWV1ZUxlbmd0aCgpLFxuICAgICAgICAgICAgYWN0aXZlSWRJbmRleCA9IDAsXG4gICAgICAgICAgICBpZFRvRGVsZXRlID0gMDtcblxuICAgICAgICB3aGlsZSAocXVldWVMZW5ndGgtLSkge1xuICAgICAgICAgICAgaWRUb0RlbGV0ZSA9IHRoaXMuZGVhY3RpdmF0ZVF1ZXVlW3F1ZXVlTGVuZ3RoXTtcbiAgICAgICAgICAgIGFjdGl2ZUlkSW5kZXggPSB0aGlzLmFjdGl2ZUlkcy5pbmRleE9mKGlkVG9EZWxldGUpO1xuXG4gICAgICAgICAgICAvLyBJZiBwcm9jZXNzIGluIGFjdGl2ZSBsaXN0IGRlYWN0aXZhdGVcbiAgICAgICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUlkcy5zcGxpY2UoYWN0aXZlSWRJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDb3VudC0tO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZVByb2Nlc3Nlc1tpZFRvRGVsZXRlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlUXVldWUgPSBbXTtcbiAgICB9XG4gICAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBQcm9jZXNzTWFuYWdlcigpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb2Nlc3MvbWFuYWdlci5qc1xuICoqLyIsIi8qXG4gICAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgICAgICBcbiAgICBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgXG4gICAgVXNlXG4gICAgXG4gICAgICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA4LFxuICAgIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMSxcbiAgICBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDEsXG4gICAgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMCxcbiAgICBLX1NQTElORV9UQUJMRV9TSVpFID0gMTEsXG4gICAgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApLFxuICAgIEZMT0FUXzMyX1NVUFBPUlRFRCA9ICh0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyksXG4gICAgXG4gICAgYSA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG4gICAgfSxcbiAgICBcbiAgICBiID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgICAgICByZXR1cm4gMy4wICogYTIgLSA2LjAgKiBhMTtcbiAgICB9LFxuICAgIFxuICAgIGMgPSBmdW5jdGlvbiAoYTEpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGExO1xuICAgIH0sXG5cbiAgICBnZXRTbG9wZSA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICAgICAgcmV0dXJuIDMuMCAqIGEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogYihhMSwgYTIpICogdCArIGMoYTEpO1xuICAgIH0sXG5cbiAgICBjYWxjQmV6aWVyID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgICAgICByZXR1cm4gKChhKGExLCBhMikgKiB0ICsgYihhMSwgYTIpKSAqIHQgKyBjKGExKSkgKiB0O1xuICAgIH0sXG4gICAgXG4gICAgLypcbiAgICAgICAgQmV6aWVyIGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBCZXppZXIgPSBmdW5jdGlvbiAobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpLFxuICAgICAgICAgICAgX3ByZWNvbXB1dGVkID0gZmFsc2UsXG4gICAgXG4gICAgICAgICAgICBiaW5hcnlTdWJkaXZpZGUgPSBmdW5jdGlvbiAoYVgsIGFBLCBhQikge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50VDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAgICAgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSBmdW5jdGlvbiAoYVgsIGFHdWVzc1QpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IDAuMCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBLX1NQTElORV9UQUJMRV9TSVpFOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBnZXRURm9yWCA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICAgICAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2FtcGxlID0gMSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLFxuICAgICAgICAgICAgICAgICAgICBkaXN0ID0gMC4wLFxuICAgICAgICAgICAgICAgICAgICBndWVzc0ZvclQgPSAwLjAsXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxTbG9wZSA9IDAuMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlKzFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgICAgICAgICBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBzbG9wZSBpcyBncmVhdGVyIHRoYW4gbWluXG4gICAgICAgICAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgICAgICAgICAvLyBTbG9wZSBpcyBlcXVhbCB0byBtaW5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgICAgICAgICAgLy8gU2xvcGUgaXMgbGVzcyB0aGFuIG1pblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBLX1NBTVBMRV9TVEVQX1NJWkUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHByZWNvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAobVgxICE9IG1ZMSB8fCBtWDIgIT0gbVkyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIEdlbmVyYXRlZCBmdW5jdGlvblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFJldHVybnMgdmFsdWUgMC0xIGJhc2VkIG9uIFhcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBmID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldHVyblZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlY29tcHV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBJZiBsaW5lYXIgZ3JhZGllbnQsIHJldHVybiBYIGFzIFRcbiAgICAgICAgICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhWDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gSWYgYXQgc3RhcnQsIHJldHVybiAwXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIGF0IGVuZCwgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gY2FsY0JlemllcihnZXRURm9yWChhWCksIG1ZMSwgbVkyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBCZXppZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi9CZXppZXIuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHBvc2l0aW9uVGVybXMgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5JykucG9zaXRpb25zLFxuICAgIG51bVBvc2l0aW9uVGVybXMgPSBwb3NpdGlvblRlcm1zLmxlbmd0aCxcblxuICAgIFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZScsXG4gICAgU0NBTEUgPSAnc2NhbGUnLFxuICAgIFJPVEFURSA9ICdyb3RhdGUnLFxuICAgIHRlcm1zID0ge1xuICAgICAgICBmdW5jczogWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV0sXG4gICAgICAgIHByb3BzOiB7fSAvLyBvYmplY3RzIGFyZSBmYXN0ZXIgYXQgZGlyZWN0IGxvb2t1cHNcbiAgICB9O1xuXG4vLyBDcmVhdGUgdHJhbnNmb3JtIHRlcm1zXG4oZnVuY3Rpb24gKCkge1xuICAgIHZhciBmdW5jcyA9IHRlcm1zLmZ1bmNzLFxuICAgICAgICBwcm9wcyA9IHRlcm1zLnByb3BzLFxuICAgICAgICBudW1GdW5jcyA9IGZ1bmNzLmxlbmd0aCxcbiAgICAgICAgaSA9IDAsXG5cbiAgICAgICAgY3JlYXRlUHJvcHMgPSBmdW5jdGlvbiAoZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHZhciBqID0gMDtcblxuICAgICAgICAgICAgZm9yICg7IGogPCBudW1Qb3NpdGlvblRlcm1zOyBqKyspIHtcbiAgICAgICAgICAgICAgICBwcm9wc1tmdW5jTmFtZSArIHBvc2l0aW9uVGVybXNbal1dID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICBcbiAgICAvLyBNYW51YWxseSBhZGQgc2tldyBhbmQgdHJhbnNmb3JtIHBlcnNwZWN0aXZlICBcbiAgICBwcm9wc1tST1RBVEVdID0gcHJvcHNbU0NBTEVdID0gcHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG4gICAgXG4gICAgLy8gTG9vcCBvdmVyIGVhY2ggZnVuY3Rpb24gbmFtZSBhbmQgY3JlYXRlIGZ1bmN0aW9uL3Byb3BlcnR5IHRlcm1zXG4gICAgZm9yICg7IGkgPCBudW1GdW5jczsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BzKGZ1bmNzW2ldKTtcbiAgICB9XG59KSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRlcm1zO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvbGVzL2Nzcy90cmFuc2Zvcm0tZGljdGlvbmFyeS5qc1xuICoqLyIsImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuXG4gICAgU1RSSU5HID0gJ3N0cmluZycsXG4gICAgXG4gICAgLypcbiAgICAgICAgVHJhbnNsYXRlIG91ciBtYXBMaW5rIHZhbHVlIGludG8gbWFwVG9cbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZSBmcm9tIGxpbmtlZCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW1ZhbHVlIHx8IG9iamVjdF06IExpbmtlZCB2YWx1ZSBvciBlbXB0eSBvYmplY3QgaWYgd2UncmUgbGlua2luZyB0byBpbnB1dFxuICAgICAgICBAcGFyYW0gW2FycmF5XTogTGlzdCBvZiBudW1iZXJzIHJlbGF0aW5nIHRvIGxpbmtlZCB2YWx1ZVxuICAgICAgICBAcGFyYW0gW2FycmF5XTogTGlzdCBvZiBudW1iZXJzIHJlbGF0aW5nIHRvIHRoaXMgdmFsdWVcbiAgICAqL1xuICAgIGZpbmRNYXBwZWRWYWx1ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgbGlua2VkVmFsdWUsIHRvVmFsdWUsIG1hcExpbmssIG1hcFRvKSB7XG4gICAgICAgIHZhciBtYXBMZW5ndGggPSBtYXBMaW5rLmxlbmd0aCxcbiAgICAgICAgICAgIGkgPSAxLFxuICAgICAgICAgICAgbGFzdExpbmtWYWx1ZSxcbiAgICAgICAgICAgIHRoaXNMaW5rVmFsdWUsXG4gICAgICAgICAgICBsYXN0VG9WYWx1ZSxcbiAgICAgICAgICAgIHRoaXNUb1ZhbHVlO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbWFwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIC8vIEFzc2lnbiB2YWx1ZXMgZnJvbSBhcnJheSwgb3IgaWYgdGhleSdyZSBzdHJpbmdzLCBsb29rIGZvciB0aGVtIGluIGxpbmtlZFZhbHVlXG4gICAgICAgICAgICBsYXN0TGlua1ZhbHVlID0gKHR5cGVvZiBtYXBMaW5rW2kgLSAxXSA9PT0gU1RSSU5HKSA/IGxpbmtlZFZhbHVlW21hcExpbmtbaSAtIDFdXSA6IG1hcExpbmtbaSAtIDFdO1xuICAgICAgICAgICAgdGhpc0xpbmtWYWx1ZSA9ICh0eXBlb2YgbWFwTGlua1tpXSA9PT0gU1RSSU5HKSA/IGxpbmtlZFZhbHVlW21hcExpbmtbaV1dIDogbWFwTGlua1tpXTtcbiAgICAgICAgICAgIGxhc3RUb1ZhbHVlID0gKHR5cGVvZiBtYXBUb1tpIC0gMV0gPT09IFNUUklORykgPyB0b1ZhbHVlW21hcFRvW2kgLSAxXV0gOiBtYXBUb1tpIC0gMV07XG4gICAgICAgICAgICB0aGlzVG9WYWx1ZSA9ICh0eXBlb2YgbWFwVG9baV0gPT09IFNUUklORykgPyB0b1ZhbHVlW21hcFRvW2ldXSA6IG1hcFRvW2ldO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB3ZSd2ZSBnb25lIHBhc3Qgb3VyIGNhbGN1bGF0ZWQgdmFsdWUsIG9yIGlmIHdlJ3JlIGF0IHRoZSBlbmQgb2YgdGhlIGFycmF5XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgPCB0aGlzTGlua1ZhbHVlIHx8IGkgPT09IG1hcExlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IGNhbGMudmFsdWUoY2FsYy5yZXN0cmljdGVkKGNhbGMucHJvZ3Jlc3MobmV3VmFsdWUsIGxhc3RMaW5rVmFsdWUsIHRoaXNMaW5rVmFsdWUpLCAwLCAxKSwgbGFzdFRvVmFsdWUsIHRoaXNUb1ZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgIH07XG5cbmNsYXNzIFdhdGNoIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBQcm9jZXNzIHRoaXMgdmFsdWVcbiAgICAgICAgXG4gICAgICAgIEZpcnN0IGNoZWNrIGlmIHRoaXMgdmFsdWUgZXhpc3RzIGFzIGEgVmFsdWUsIGlmIG5vdFxuICAgICAgICBjaGVjayB3aXRoaW4gSW5wdXQgKGlmIHdlIGhhdmUgb25lKVxuICAgICAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbQWN0b3JdXG4gICAgICAgIEBwYXJhbSBbVmFsdWVdOiBDdXJyZW50IHZhbHVlXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IG9mIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogQ2FsY3VsYXRlZCB2YWx1ZVxuICAgICovXG4gICAgcHJvY2VzcyhhY3RvciwgdmFsdWUsIGtleSkge1xuICAgICAgICB2YXIgdmFsdWVzID0gYWN0b3IudmFsdWVzLFxuICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZS5jdXJyZW50LFxuICAgICAgICAgICAgd2F0Y2hlZEtleSA9IHZhbHVlLndhdGNoLFxuICAgICAgICAgICAgd2F0Y2hlZFZhbHVlID0gdmFsdWVzW3dhdGNoZWRLZXldID8gdmFsdWVzW3dhdGNoZWRLZXldIDoge30sXG4gICAgICAgICAgICBpbnB1dE9mZnNldCA9IHZhbHVlLmFjdGlvbiA/IHZhbHVlLmFjdGlvbi5pbnB1dE9mZnNldCA6IGZhbHNlO1xuXG4gICAgICAgIC8vIEZpcnN0IGxvb2sgYXQgQWN0aW9uIGFuZCBjaGVjayB2YWx1ZSBpc24ndCBsaW5raW5nIGl0c2VsZlxuICAgICAgICBpZiAod2F0Y2hlZFZhbHVlLmN1cnJlbnQgIT09IHVuZGVmaW5lZCAmJiBrZXkgIT09IHdhdGNoZWRLZXkpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gd2F0Y2hlZFZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIFxuICAgICAgICAvLyBUaGVuIGNoZWNrIHZhbHVlcyBpbiBJbnB1dFxuICAgICAgICB9IGVsc2UgaWYgKGlucHV0T2Zmc2V0ICYmIGlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KHdhdGNoZWRLZXkpKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlLmFjdGlvbi5wcm9jZXNzKGFjdG9yLCB2YWx1ZSwgd2F0Y2hlZEtleSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIG1hcEZyb20gYW5kIG1hcFRvIHByb3BlcnRpZXMsIHRyYW5zbGF0ZSB0aGUgbmV3IHZhbHVlXG4gICAgICAgIGlmICh2YWx1ZS5tYXBGcm9tICYmIHZhbHVlLm1hcFRvKSB7XG4gICAgICAgICAgICB2YWx1ZS51bm1hcHBlZCA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBmaW5kTWFwcGVkVmFsdWUobmV3VmFsdWUsIHdhdGNoZWRWYWx1ZSwgdmFsdWUsIHZhbHVlLm1hcEZyb20sIHZhbHVlLm1hcFRvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2F0Y2g7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYWN0aW9ucy9XYXRjaC5qc1xuICoqLyIsIi8qXG4gICAgVGhlIGxvb3BcbiovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIFRpbWVyID0gcmVxdWlyZSgnLi90aW1lci5qcycpLFxuICAgIHRpY2sgPSByZXF1aXJlKCcuL3RpY2suanMnKSxcbiAgICBMb29wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRpbWVyID0gbmV3IFRpbWVyKCk7XG4gICAgfTtcbiAgICBcbkxvb3AucHJvdG90eXBlID0ge1xuICAgIFxuICAgIC8qXG4gICAgICAgIFtib29sZWFuXTogQ3VycmVudCBzdGF0dXMgb2YgYW5pbWF0aW9uIGxvb3BcbiAgICAqL1xuICAgIGlzUnVubmluZzogZmFsc2UsXG4gICAgXG4gICAgLypcbiAgICAgICAgRmlyZSBhbGwgYWN0aXZlIHByb2Nlc3NlcyBvbmNlIHBlciBmcmFtZVxuICAgICovXG4gICAgZnJhbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRpY2soZnVuY3Rpb24gKGZyYW1lc3RhbXApIHtcbiAgICAgICAgICAgIHNlbGYudGltZXIudXBkYXRlKGZyYW1lc3RhbXApO1xuICAgICAgICAgICAgbGV0IGlzQWN0aXZlID0gc2VsZi5jYWxsYmFjay5jYWxsKHNlbGYuc2NvcGUsIGZyYW1lc3RhbXAsIHNlbGYudGltZXIuZ2V0RWxhcHNlZCgpKTtcblxuICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5mcmFtZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdGFydCBsb29wXG4gICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UncmUgbm90IGFscmVhZHkgcnVubmluZyBhIGxvb3BcbiAgICAgICAgaWYgKCF0aGlzLmlzUnVubmluZykge1xuICAgICAgICAgICAgdGhpcy50aW1lci5jbG9jaygpO1xuICAgICAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5mcmFtZSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTdG9wIHRoZSBsb29wXG4gICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICBcbiAgICAvKlxuICAgICAgICBTZXQgdGhlIGNhbGxiYWNrIHRvIHJ1biBldmVyeSBmcmFtZVxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtPYmplY3RdOiBFeGVjdXRpb24gY29udGV4dFxuICAgICAgICBAcGFyYW0gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgdG8gZmlyZVxuICAgICovXG4gICAgc2V0Q2FsbGJhY2s6IGZ1bmN0aW9uIChzY29wZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgTG9vcCgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb2Nlc3MvbG9vcC5qc1xuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMuanMnKSxcblxuICAgIG1heEVsYXBzZWQgPSAzMyxcbiAgICBUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gMTYuNztcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuXG5UaW1lci5wcm90b3R5cGUgPSB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZnJhbWVzdGFtcCkge1xuICAgICAgICB0aGlzLnByZXYgPSB0aGlzLmN1cnJlbnQ7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IGZyYW1lc3RhbXA7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IE1hdGgubWluKHRoaXMuY3VycmVudCAtIHRoaXMucHJldiwgbWF4RWxhcHNlZCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudDtcbiAgICB9LFxuXG4gICAgZ2V0RWxhcHNlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGFwc2VkO1xuICAgIH0sXG4gICAgXG4gICAgY2xvY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpbWVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3Byb2Nlc3MvdGltZXIuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgXG4gICAgRm9yIElFOC85IEZsaW5zdG9uZXNcblxuICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICBcbiAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICBcbiAgICBNSVQgbGljZW5zZVxuKi9cbnZhciB0aWNrLFxuICAgIGxhc3RUaW1lID0gMCxcbiAgICBoYXNXaW5kb3cgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpO1xuXG5pZiAoIWhhc1dpbmRvdykge1xuICAgIC8vIExvYWQgckFGIHNoaW1cbiAgICB0aWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKSxcbiAgICAgICAgICAgIGlkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcbiAgICAgICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuXG4gICAgICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH07ICBcbiAgICBcbn0gZWxzZSB7XG4gICAgdGljayA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGljaztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wcm9jZXNzL3RpY2suanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJwb3Btb3Rpb24uZ2xvYmFsLmpzIn0=