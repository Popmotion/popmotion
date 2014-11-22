/*
	Input manager
*/
"use strict";

var Input = require('../bits/input.js'),
	Pointer = require('../bits/pointer.js'),
	utils = require('../utils/utils.js'),
	InputManager = function () {},
	manager;
	
InputManager.prototype = {
	
	/*
		Create a new input object
		
		@return [Input]
	*/
	create: function () {
		var input = new Input(arguments[0], arguments[1]);
		
		return input;
	},
	
	/*
		Start tracking a pointer
		
		For custom pointers, we don't have to do anything here so we
		return the input as given. For Pointer events, we pass them through
		to the this.newPointer function and start tracking
		
		@param [Input || event]: Custom input or pointer event
		@return [Input || Pointer]: Original Input or newly created Pointer
	*/
	start: function (input) {
		return (false) ? input : this.newPointer(input);
	},
	
	/*
		Create new Pointer object
		
		@param [event]: Initiating event
	*/
	newPointer: function (input) {
		var pointer;

		// Check for .originalEvent and get that instead
		input = utils.getActualEvent(input);
		
		pointer = new Pointer(utils.convertEventIntoPoint(input), utils.isTouchEvent(input));
		
		return pointer;
	}
};

manager = new InputManager();

module.exports = manager;