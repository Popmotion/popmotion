/*
	Input manager
*/
"use strict";

var Input = require('../bits/input.js'),
	InputManager = function () {},
	manager;
	
InputManager.prototype = {
	
	create: function () {
		var input = new Input();
		
		return input;
	}
	
};

manager = new InputManager();

module.exports = manager;