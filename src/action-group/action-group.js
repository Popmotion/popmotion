"use strict";

var Action = require('../action/action.js'),
	generateMethodIterator = require('./generate-iterator.js'),

	/*
		Action group constructor
	*/
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
		actionGroupPrototype[method] = generateMethodIterator(method);
	}
})();

module.exports = ActionGroup;