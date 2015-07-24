"use strict";

var Process = require('../process/Process'),
    Queue = require('../inc/Queue'),
    utils = require('../inc/utils'),
    update = require('./update'),
    valueOps = require('./value-operations'),
    actionManager = require('../actions/manager'),
    routeManager = require('../routes/manager'),

    Actor = function (element) {
        this.element = element || false;
        this.values = {};
        this.output = {};
        this.queue = new Queue();
        this.process = new Process(this, update);

        this.clearOrder();
    };

Actor.prototype = {
    
    /*
        Set Action values and properties
        
        @param [object]: Element properties
        @param [string] (option): Name of default value property
    */
    set: function (props, defaultValueProp) {
        var self = this;

        // Reset Element properties and write new props
        this.clearOrder();
        this.resetProps();
        this.setProps(props);

        // Loop over routes and process value definitions
        routeManager.shard(function (route, routeName, values) {
            // Create output object for this route if none exists
            self.output[routeName] = self.output[routeName] || {};

            // Set values
            self.setValues(values, routeName, defaultValueProp);
        }, props);

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
        this.resetProgress();
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
    
    /*
        Loop through all values and create origin points
    */
    resetOrigins: function () {
        valueOps.all('resetOrigin', this.values);
        return this;
    },
    
    /*
        Reverse Action progress and values
    */
    reverse: function () {
        this.playDirection *= -1;
        valueOps.all('retarget', this.values);
        return this;
    },
    
    /*
        Swap value origins and to
    */
    flipValues: function () {
        this.elapsed = this.duration - this.elapsed;
        valueOps.all('flip', this.values);
        return this;
    },

    /*
        Set properties

        @param [object]: Properties to set
    */
    setProps: function (props) {
        var key = '';

        for (key in props) {
            // Set if this isn't a route
            if (props.hasOwnProperty(key) && !routeManager.hasOwnProperty(key)) {
                this[key] = props[key];
            }
        }
    },

    /*
        Reset properties to Action defaults
    */
    resetProps: function () {
        this.setProps(actionManager[this.action].actionDefaults);
        return this;
    },

    /*
        Set values

        @param [object || string || number]: Value
        @param [string] (optional): Name of route
        @param [string] (optional): Default property to set
    */
    setValues: function (values, namespace, defaultValueProp) {
        valueOps.process(values, this, namespace, defaultValueProp);
        return this;
    },
    
    /*
        Update order of value keys
        
        @param [string]: Key of value
        @param [boolean]: Whether to move value to back
    */
    updateOrder: function (key, moveToBack, hasChildren) {
        var order = !hasChildren ? this.order : this.parentOrder,
            position = order.indexOf(key);

        // If key isn't in list, or moveToBack is set to true, add key
        if (position === -1 || moveToBack) {
            order.push(key);

            // If key already exists, remove
            if (position !== -1) {
                order.splice(position, 1);
            }
        }

        return this;
    },

    /*
        Clear value key update order
    */
    clearOrder: function () {
        this.order = [];
        this.parentOrder = [];
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

// Register Actor with actionManager, so when a new Action is set,
// We get a new method on Actor
actionManager.setActor(Actor);
routeManager.setActor(Actor);

module.exports = Actor;