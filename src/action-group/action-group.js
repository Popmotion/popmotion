"use strict";

var Action = require('../action/action.js'),
	generateMethodIterator = require('./generate-iterator.js'),
	
	defaultDuration = 250,
	defaultEase = 'linear',

	/*
		Action group constructor
	*/
	ActionGroup = function (actions) {
		this.actions = actions || [];
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
	var self = this,
		numActions = this.actions.length,
		i = -1;
	
	this._stagger = this._stagger || new Action();
	duration = duration || defaultDuration;
	ease = ease || defaultEase;

	this._stagger.stop().play({
		values: {
			i: {
				current: i,
				to: numActions - 1
			}
		},
		round: true,
		onChange: function (output) {
		    var newIndex = output.i;
		    
		    // If our new index is only one more than the last
		    if (newIndex === i + 1) {
		        self.actions[newIndex][method](props);
		        
		    // Or it's more than one more than the last, so fire all indecies
		    } else {
    		    for (var index = i + 1; index <= newIndex; index++) {
		            self.actions[index][method](props);
    		    }
		    }

		    i = newIndex;
		}
	}, duration * numActions, ease);
};

/*
	Add a new Action to the group
	
	@param [object]: Action properties
*/
actionGroupPrototype.addAction = function (props) {
	this.actions.push(new Action(props));
};

// Initialise Action Group methods
(function () {
	for (var method in Action.prototype) {
		actionGroupPrototype[method] = generateMethodIterator(method);
	}
})();

module.exports = ActionGroup;