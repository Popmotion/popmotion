"use strict";

var Input = require('./input.js'),
    Point = require('../bits/point.js'),
    History = require('../bobs/history.js'),
    KEY = require('../opts/keys.js'),
    utils = require('../utils/utils.js'),
    currentPointer, // Sort this crap out for multitouch
    
    /*
        Pointer constructor
    */
    Pointer = function (e) {
        var event = utils.getActualEvent(e), // In case of jQuery event
            startPoint = utils.convertEventIntoPoint(event),
            isTouchEvent = utils.isTouchEvent(event);
        
        this.update(new Point(startPoint));
        this.isTouch = isTouch;
        this.bindEvents();
    };

Pointer.prototype = new Input();

/*
    Bind move event
*/
Pointer.prototype.bindEvents = function (isTouch) {
    this.moveEvent = this.isTouch ? KEY.EVENT.TOUCHMOVE : KEY.EVENT.MOUSEMOVE;
    
    currentPointer = this;
    
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
    e = utils.getActualEvent(e);
    e.preventDefault();

    currentPointer.update(new Point(utils.convertEventIntoPoint(e, currentPointer.isTouch)));
};

Pointer.prototype.stop = function () {
    this.unbindEvents();
};

module.exports = Pointer;