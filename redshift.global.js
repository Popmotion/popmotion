/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	window.Redshift = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = __webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _select = __webpack_require__(3);

	module.exports = {

	    Element: __webpack_require__(4),

	    ElementSystem: __webpack_require__(5),

	    Input: __webpack_require__(6),

	    Process: __webpack_require__(7),

	    select: function select(items) {
	        return _select(items);
	    },

	    addEasing: (function (_addEasing) {
	        function addEasing() {
	            return _addEasing.apply(this, arguments);
	        }

	        addEasing.toString = function () {
	            return _addEasing.toString();
	        };

	        return addEasing;
	    })(function () {
	        addEasing.apply(this, arguments);
	        return this;
	    }),

	    addPreset: (function (_addPreset) {
	        function addPreset() {
	            return _addPreset.apply(this, arguments);
	        }

	        addPreset.toString = function () {
	            return _addPreset.toString();
	        };

	        return addPreset;
	    })(function () {
	        addPreset.apply(this, arguments);
	        return this;
	    }),

	    addSimulation: (function (_addSimulation) {
	        function addSimulation() {
	            return _addSimulation.apply(this, arguments);
	        }

	        addSimulation.toString = function () {
	            return _addSimulation.toString();
	        };

	        return addSimulation;
	    })(function () {
	        addSimulation.apply(this, arguments);
	        return this;
	    }),

	    addElementType: (function (_addElementType) {
	        function addElementType() {
	            return _addElementType.apply(this, arguments);
	        }

	        addElementType.toString = function () {
	            return _addElementType.toString();
	        };

	        return addElementType;
	    })(function () {
	        addElementType.apply(this, arguments);
	        return this;
	    }),

	    addValueType: (function (_addValueType) {
	        function addValueType() {
	            return _addValueType.apply(this, arguments);
	        }

	        addValueType.toString = function () {
	            return _addValueType.toString();
	        };

	        return addValueType;
	    })(function () {
	        addValueType.apply(this, arguments);
	        return this;
	    }),

	    addRoute: (function (_addRoute) {
	        function addRoute() {
	            return _addRoute.apply(this, arguments);
	        }

	        addRoute.toString = function () {
	            return _addRoute.toString();
	        };

	        return addRoute;
	    })(function () {
	        addRoute.apply(this, arguments);
	        return this;
	    })

	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = function (items) {};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$defineProperties = __webpack_require__(9)['default'];

	var Process = __webpack_require__(7),
	    update = __webpack_require__(8),
	    Element = function Element(element) {
	    this.element = element || false;

	    this.values = {};
	    this.output = {};
	    this.queue = new Queue();

	    this.process = new Process(update, this);
	};

	Element.prototype = _Object$defineProperties({}, {
	    isActive: {

	        // [boolean]: Is this Element currently active?

	        get: function get() {
	            return this._isActive;
	        },

	        /*
	            Set Element active status
	             If active is being set to true, set hasChanged to true, too
	             @param [boolean]: New active status
	        */
	        set: function set(status) {
	            if (status === true) {
	                this.hasChanged = status;
	            }

	            this._isActive = status;
	        },
	        configurable: true,
	        enumerable: true
	    }
	});

	module.exports = Element;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var update = function update(framestamp, frameDuration) {};

	module.exports = function () {
	    if (this.isActive) {
	        update.apply(this, arguments);
	    }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(10), __esModule: true };

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(11);
	module.exports = function defineProperties(T, D){
	  return $.setDescs(T, D);
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global = typeof self != 'undefined' ? self : Function('return this')()
	  , core   = {}
	  , defineProperty = Object.defineProperty
	  , hasOwnProperty = {}.hasOwnProperty
	  , ceil  = Math.ceil
	  , floor = Math.floor
	  , max   = Math.max
	  , min   = Math.min;
	// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	var DESC = !!function(){
	  try {
	    return defineProperty({}, 'a', {get: function(){ return 2; }}).a == 2;
	  } catch(e){ /* empty */ }
	}();
	var hide = createDefiner(1);
	// 7.1.4 ToInteger
	function toInteger(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	}
	function desc(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	}
	function simpleSet(object, key, value){
	  object[key] = value;
	  return object;
	}
	function createDefiner(bitmap){
	  return DESC ? function(object, key, value){
	    return $.setDesc(object, key, desc(bitmap, value));
	  } : simpleSet;
	}

	function isObject(it){
	  return it !== null && (typeof it == 'object' || typeof it == 'function');
	}
	function isFunction(it){
	  return typeof it == 'function';
	}
	function assertDefined(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	}

	var $ = module.exports = __webpack_require__(12)({
	  g: global,
	  core: core,
	  html: global.document && document.documentElement,
	  // http://jsperf.com/core-js-isobject
	  isObject:   isObject,
	  isFunction: isFunction,
	  that: function(){
	    return this;
	  },
	  // 7.1.4 ToInteger
	  toInteger: toInteger,
	  // 7.1.15 ToLength
	  toLength: function(it){
	    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	  },
	  toIndex: function(index, length){
	    index = toInteger(index);
	    return index < 0 ? max(index + length, 0) : min(index, length);
	  },
	  has: function(it, key){
	    return hasOwnProperty.call(it, key);
	  },
	  create:     Object.create,
	  getProto:   Object.getPrototypeOf,
	  DESC:       DESC,
	  desc:       desc,
	  getDesc:    Object.getOwnPropertyDescriptor,
	  setDesc:    defineProperty,
	  setDescs:   Object.defineProperties,
	  getKeys:    Object.keys,
	  getNames:   Object.getOwnPropertyNames,
	  getSymbols: Object.getOwnPropertySymbols,
	  assertDefined: assertDefined,
	  // Dummy, fix for not array-like ES3 string in es5 module
	  ES5Object: Object,
	  toObject: function(it){
	    return $.ES5Object(assertDefined(it));
	  },
	  hide: hide,
	  def: createDefiner(0),
	  set: global.Symbol ? simpleSet : hide,
	  each: [].forEach
	});
	/* eslint-disable no-undef */
	if(typeof __e != 'undefined')__e = core;
	if(typeof __g != 'undefined')__g = global;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function($){
	  $.FW   = false;
	  $.path = $.core;
	  return $;
	};

/***/ }
/******/ ]);