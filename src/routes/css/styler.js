"use strict";

var cssStyler = function () {
	var testElement,
		prefixes = ['Webkit','Moz','O','ms', ''],
		prefixesLength = prefixes.length,
		cache = {},
		
		/*
			Test style property for prefixed version
			
			@param [string]: Style property
			@return [string]: Cached property name
		*/
		testPrefix = function (key) {
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
		Style DOM function
		
		Syntax
			
			Get property
				style(element, 'property');
				
			Set property
				style(element, {
					foo: 'bar'
				});
	*/
	return function (element, prop) {
	    // Cache body tag if we haven't already
		testElement = testElement || document.getElementsByTagName('body')[0];
console.log(element, prop);
		// If prop is a string, we're requesting a property
		if (typeof prop === 'string') {
			return window.getComputedStyle(element, null)[cache[prop] || testPrefix(prop)];
		
		// If it's an object, we're setting
		} else {
		    for (var key in prop) {
				if (prop.hasOwnProperty(key)) {
					element.style[cache[key] || testPrefix(key)] = prop[key];
				}
			}
			
			return false;
		}
	}
};

module.exports = new cssStyler();