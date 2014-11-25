"use strict";

var Input = require('./input.js'),
	History = require('../bobs/history.js'),
	utils = require('../utils/utils.js'),
	defaultFPS = 60, // default to 60fps
	Time = function () {
		Input.call(this, arguments[0], arguments[1]);
	};

Time.prototype = new Input();

/*
	Calc FPS
	
	Divide current time velocity (in ms) by 1000 (one second)
	
	@return [number]: Current frames per second
*/
Time.prototype.getFPS = function () {
	return (this.velocity.time) ? 1000 / this.velocity.time : defaultFPS;
};

/*
	Update time
	
	@param [number]: Latest timestamp
*/
Time.prototype.updateTime = function (timestamp) {
	this.update('time', timestamp);
	this.onFrame();
};

module.exports = Time;