"use strict";

var Action = require('../action/action.js'),
	generateMethodIterator = require('./generate-iterator.js'),
	
	defaultDuration = 250,
	defaultEase = 'linear',

	/*
		Action group constructor
	*/
	ActionGroup = function (actions) {
		this.elements = actions || [];
	},
	
	actionGroupPrototype = ActionGroup.prototype;

/*
	Stagger the execution of the provided Action method
	
	@param [string]: Name of Action method to call
	@param [number] (optional): Duration between method calls
	@param [string || object] (optional): Argument to pass method
	@param [string] (optional): Easing
*/
actionGroupPrototype.stagger = function (method, duration, props, ease) {
	var self = this;
	
	this._stagger = this._stagger || new Action();
	duration = duration || defaultDuration;
	ease = ease || defaultEase;

	this._stagger.stop().play({
		values: {
			i: {
				current: -1,
				to: numElements - 1
			}
		},
		round: true,
		onChange: function (output) {
			self.elements[output.i][method](props);
		}
	}, duration * this.elements.length, ease);
};

/*
	Add a new Action to the group
	
	@param [object]: Action properties
*/
actionGroupPrototype.addAction = function (props) {
	this.elements.push(new Action(props));
};

// Initialise Action Group methods
(function () {
	for (var method in Action.prototype) {
		actionGroupPrototype[method] = generateMethodIterator(method);
	}
})();

module.exports = ActionGroup;