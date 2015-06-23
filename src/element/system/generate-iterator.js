"use strict";

/*
	Generate method iterator
	
	Takes a method name and returns a function that will
	loop over all the Elements in a group and fire that
	method with those properties
	
	@param [string]: Name of method
*/
module.exports = function (method) {
	return function () {
        var numElements = this.elements.length,
            i = 0,
			isGetter = false,
			getterArray = [],
			element,
			elementReturn;
			
		for (; i < numActions; i++) {
			element = this.elements[i];
			elementReturn = element[method].apply(element, arguments);
			
			if (elementReturn != element) {
    			isGetter = true;
    			getterArray.push(elementReturn);
			}
		}
		
		return (isGetter) ? getterArray : this;
	};
};
