/*
	Generate method iterator
	
	Takes a method name and returns a function that will
	loop over all the Actions in a group and fire that
	method with those properties
	
	@param [string]: Name of method
*/
module.exports = function (method) {
	return function () {
        var numActions = this.actions.length,
            i = 0,
			isGetter = false,
			getterArray = [],
			action,
			actionReturn;
			
		for (; i < numActions; i++) {
			action = this.actions[i];
			actionReturn = action[method].apply(action, arguments);
			
			if (actionReturn != action) {
    			isGetter = true;
    			getterArray.push(actionReturn);
			}
		}
		
		return (isGetter) ? getterArray : this;
	};
};
