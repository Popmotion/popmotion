"use strict";

var Process = require('../process/Process'),
    Queue = require('../inc/Queue'),
    Pointer = require('../input/Pointer'),
    utils = require('../inc/utils'),
    update = require('./update'),
    valueOps = require('./value-operations'),
    defaultRole = require('../roles/defaultRole'),
    cssRole = require('../roles/css/cssRole'),
    svgRole = require('../roles/svg/svgRole'),
    drawPathRole = require('../roles/path/drawPathRole'),
    Sync = require('../actions/Sync.es6'),
    each = utils.each,

    Actor = function (opts) {
        var actor = this;

        this.roles = [ defaultRole ];

        // Set values object and state object
        this.values = {};
        this.state = {
            values: {}
        };

        // Init queue and process
        this.queue = new Queue();
        this.process = new Process(this, update);
        this.clearOrder();

        // Detect/add roles
        if (opts) {
            // Auto-detect element type, if present and no roles defined
            if (!opts.as && opts.element) {
                // Add CSS role if HTMLElement
                if (opts.element instanceof HTMLElement) {
                    this.roles.push(cssRole);

                } else if (opts.element instanceof SVGElement) {
                    this.roles.push(svgRole);

                    if (opts.element.tagName === 'path') {
                        this.roles.push(drawPathRole);
                    }
                }
            // Manuall adding roles
            } else if (opts.as) {
                if (utils.isArray(opts.as)) {
                    this.roles.push.apply(this.roles, opts.as);
                } else {
                    this.roles.push(opts.as);
                }
            }

            this.set(opts);
        }

        this.roles.forEach(function (role) {
            // Fire init method if one available
            if (role.init) {
                role.init.call(actor);
            }
        });
    };

Actor.prototype = {
    
    /*
        Set Action values and properties
        
        @param [object]: Element properties
        @param [string] (option): Name of default value property
    */
    set: function (props, defaultValueProp) {
        // Reset Element properties and write new props
        this.resetProps();

        if (props) {
            if (props.getName) {
                this.action = props;
            }

            this.setProps(props);
            this.setValues(props.values, defaultValueProp);
        }

        return this;
    },

    /*
        Start action
    */
    start: function (action, input) {
        this.resetOrigins();
        this.clearOrder();

        if (action) {
            this.set(action);
        }
        
        // Stop existing inputs if this is a track - do this only for pointers? or unsubscribe?
        if (this.action.getName() !== 'track' && this.input && this.input.stop) {
            this.input.stop();
        }

        if (input) {
            // Create Pointer if this is an event
            this.input = (!input.current) ? new Pointer(input) : input;
            this.inputOrigin = this.input.get();
        }

        this.resetProgress();
        this.activate();

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
        Stop current Action
    */
    stop: function () {
        this.queue.clear();
        this.pause();
        return this;
    },

    /*
        Toggle current Action
    */
    toggle: function () {
        return this.isActive ? this.pause() : this.resume();
    },

    /*
        Sync roles with props on next frame
    */
    sync: function (props) {
        return this.start(new Sync(props));
    },

    /*
        Add a new action to the queue
    */
    then: function () {
        this.queue.add.apply(this.queue, arguments);
        return this;
    },

    /*
        Execute next in queue
    */
    next: function () {
        var nextInQueue = this.queue.next();

        if (nextInQueue) {
            if (utils.isFunc(nextInQueue)) {
                nextInQueue();
                this.stop();
            } else {
                this.start(nextInQueue);
            }
        } else {
            this.stop();
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
        valueOps.all('reset', this.values);

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
        var actor = this;

        each(props, function (key, value) {
            if (key !== 'values') {
                actor[key] = value;
            }
        });
    },

    /*
        Reset properties to Action defaults
    */
    resetProps: function () {
        if (this.action) {
            this.setProps(this.action.getDefaultProps());
        }
        return this;
    },

    /*
        Set values

        @param [object || string || number]: Value
        @param [string] (optional): Default property to set
    */
    setValues: function (values, defaultValueProp) {
        valueOps.process(values, this, defaultValueProp);
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

module.exports = Actor;