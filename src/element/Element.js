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
        Play an animation

        @param [object || string]: Parameters or preset names
        @param [object]: Override parameters
    */
    play: function () {
        var action = 'play';

        // If there's an active Action, and its play, add to queue
        if (this.isActive && this.action === action) {
            this.queue.add.apply(this.queue, arguments);
        
        // Else, start playing
        } else {
            this.set(actionManager[action].parse.apply(this, arguments), 'to');
            this.action = action;
            this.start();
        }

        return this;
    },
    
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

    pause: function () {
        return this;
    },

    resume: function () {
        return this;
    },

    seek: function () {
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
    
    /*
        Reset Action progress
    */
    resetProgress: function () {
        this.elapsed = (this.playDirection === 1) ? 0 : this.duration;
        this.started = utils.currentTime();

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