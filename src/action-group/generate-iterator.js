/*
	Generate method iterator
	
	Takes a method name and returns a function that will
	loop over all the Actions in a group and fire that
	method with those properties
	
	@param [string]: Name of method
*/
module.exports = function (method) {
	return function () {
		var numActions = this.group.length,
			i = 0,
			action;
			
		for (; i < numActions; i++) {
			action = this.group[i];
			action[method].apply(action, arguments);
		}
		
		return this;
	};
};
