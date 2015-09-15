"use strict";

var styleDOM = function styleDOM() {
	var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''],
	    prefixesLength = prefixes.length,
	    cache = {},
	   

	/*
 	Test style property for prefixed version
 	
 	@param [string]: Style property
 	@return [string]: Cached property name
 */
	testPrefix = function testPrefix(key) {
		var testElement = document.body;

		cache[key] = key;

		for (var i = 0; i < prefixesLength; i++) {
			var prefixed = prefixes[i] + key.charAt(0).toUpperCase() + key.slice(1);

			if (testElement.style.hasOwnProperty(prefixed)) {
				cache[key] = prefixed;
			}
		}

		return cache[key];
	};

	/*
 	Style DOM functions
 */
	return {

		/*
  	Get DOM styles
  		@param [DOM Element]: Element to get styles from
  	@param [string]: Name of style to read
  */
		get: function get(element, name) {
			return window.getComputedStyle(element, null)[cache[name] || testPrefix(name)];
		},

		/*
  	Set DOM styles
  		@param [DOM Element]: Element to set styles on
  	@param [object]: Name of style to set
  	@param [string]: New rule
  */
		set: function set(element, name, rule) {
			element.style[cache[name] || testPrefix(name)] = rule;
		}

	};
};

module.exports = new styleDOM();