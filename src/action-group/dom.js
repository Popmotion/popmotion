"use strict";

var ActionGroup = require('./action-group.js');

module.exports = function (selector) {
    var actionGroup = new ActionGroup(),
    	elements = [],
    	numElements = 0,
    	i = 0,
    	domSelection = (typeof selector === 'string') ? document.querySelectorAll(selector) : selector;
    	
    // if jQuery selection, get Array
    if (domSelection.get) {
	    elements = domSelection.get();
	    
	// Or convert NodeList to Array
    } else if (domSelection.length) {
	    elements = [].slice.call(domSelection);
	    
	// Or put Element into array
    } else {
	    elements.push(domSelection);
    }
    
	numElements = elements.length;
	
	for (; i < numElements; i++) {
		actionGroup.add({
			dom: elements[i]
		});
	}

	return actionGroup;
};