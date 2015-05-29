"use strict";

var Action = require('../action/action.js'),
	generateMethodIterator = require('./generate-iterator.js'),

	/*
		Action group constructor
	*/
	ActionGroup = function (actions) {
		this.order = actions || [];
	},
	
	actionGroupPrototype = ActionGroup.prototype;

/*
	Stagger the execution of the provided Action method
*/
actionGroupPrototype.stagger = function (method, props, duration, ease) {
	var self = this;
	
	this.staggerAction = this.staggerAction || new Action();

	this.staggerAction.stop().play({
		values: {
			i: {
				start: -1,
				to: this.order.length - 1
			}
		},
		round: true,
		onChange: function (output) {
			self.order[output.i][method](props);
		}
	}, duration, ease);
};

/*
	Add a new Action to the group
	
	@param [object]: Action properties
*/
actionGroupPrototype.addAction = function (props) {
	this.order.push(new Action(props));
};

// Initialise Action Group methods
(function () {
	for (var method in Action.prototype) {
		actionGroupPrototype[method] = generateMethodIterator(method);
	}
})();

module.exports = ActionGroup;