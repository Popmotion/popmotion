"use strict";

var Input = require('./input.js'),
	Point = require('./point.js'),
	History = require('../bobs/history.js'),
	KEY = require('../opts/keys.js'),
	utils = require('../utils/utils.js'),
	Pointer = function (point, isTouch) {
		this.update(new Point(point));
		this.isTouch = isTouch;
		this.bindEvents();
	};

Pointer.prototype = new Input();

/*
	Bind move event
*/
Pointer.prototype.bindEvents = function (isTouch) {
	this.moveEvent = this.isTouch ? KEY.EVENT.TOUCHMOVE : KEY.EVENT.MOUSEMOVE;
	
	document.documentElement.addEventListener(this.moveEvent, this.onMove);
};

/*
	Unbind move event
*/
Pointer.prototype.unbindEvents = function () {
	document.documentElement.removeEventListener(this.moveEvent, this.onMove);
};

/*
	Pointer onMove event handler
	
	@param [event]: Pointer move event
*/
Pointer.prototype.onMove = function (e) {
	var newPoint;

	e = utils.getActualEvent(e);
	
	this.update(new Point(utils.convertEventIntoPoint(e, this.isTouch)));
	
	e.preventDefault();
};

Pointer.prototype.stop = function () {
	this.unbindEvents();
};

module.exports = Pointer;