"use strict";

var Process = require('../process/Process'),
    Queue = require('../inc/Queue'),
    update = require('./update'),
    actionManager = require('../actions/manager'),
    utils = require('../inc/utils'),

    Element = function (element) {
        this.element = element || false;

        this.values = {};
        this.output = {};
        this.queue = new Queue();

        this.process = new Process(this, update);
    };

Element.prototype = {
    
    /*
        Set Action values and properties
        
        @param [object]: Element properties
        @param [string] (option): Name of default value property
    */
    set: function () {
        return this;
    },

    /*
        Start currently defined Action
    */
    start: function () {
        this.resetProgress();
        this.activate();
        return this;
    },

    /*
        Stop current Action
    */
    stop: function () {
        this.queue.clear();
        this.pause();
        return this;
    },

    /*
        Pause current Action
    */
    pause: function () {
        this.isActive = false;
        this.process.stop();
        return this;
    },

    /*
        Resume paused Action
    */
    resume: function () {
        this.framestamp = this.started = utils.currentTime();
        this.isActive = true;
        this.process.start();
        return this;
    },

    /*
        Toggle current Action
    */
    toggle: function () {
        if (this.isActive) {
            this.pause();
        } else {
            this.resume();
        }

        return this;
    },
    
    /*
        Activate Element Action
    */
    activate: function () {
        this.isActive = true;
        this.started = utils.currentTime() + this.delay;
        this.framestamp = this.started;
        this.firstFrame = true;

        this.process.start();
    },

    reset: function () {
        return this;
    },
    
    /*
        Reset Action progress
    */
    resetProgress: function () {
        this.elapsed = (this.playDirection === 1) ? 0 : this.duration;
        this.started = utils.currentTime();

        return this;
    },

    reverse: function () {
        return this;
    },

    flipValues: function () {
        return this;
    },

    // [boolean]: Is this Element currently active?
    get isActive() {
        return this._isActive;
    },

    /*
        Set Element active status

        If active is being set to true, set hasChanged to true, too

        @param [boolean]: New active status
    */
    set isActive(status) {
        if (status === true) {
            this.hasChanged = status;
        }

        this._isActive = status;
    }
};

// Register Element with actionManager, so when a new Action is set,
// We get a new method on Element
actionManager.setElement(Element);

module.exports = Element;