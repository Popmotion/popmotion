"use strict";

var Action = require('../action/action.js'),

	ActionGroup = function () {
		this.group = [];
	},
	
	actionGroupPrototype = ActionGroup.prototype;

/*
	Stagger the execution of the provided Action method
*/
actionGroupPrototype.stagger = function () {
	this.staggerAction = new Action();
};

/*
	Add a new Action to the group
	
	@param [object]: Action properties
*/
actionGroupPrototype.addAction = function (props) {
	this.group.push(new Action(props));
};

// Initialise Action Group methods
(function () {
	var method = '';

	for (method in Action.prototype) {
		actionGroupPrototype[method] = function () {
			var numActions = this.group.length,
				i = 0,
				action;
			
			for (; i < numActions; i++) {
				action = this.group[i];
				action[method].apply(action, arguments);
			}
			
			return this;
		};
	}
})();

module.exports = ActionGroup;