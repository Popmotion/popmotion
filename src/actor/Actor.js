var Process = require('../process/Process'),
    Queue = require('../inc/Queue'),
    Pointer = require('../input/Pointer'),
    utils = require('../inc/utils'),
    update = require('./update'),
    valueOps = require('./value-operations'),

    /*
        Role imports
    */
    defaultRole = require('../roles/defaultRole'),
    cssRole = require('../roles/css/cssRole'),
    svgRole = require('../roles/svg/svgRole'),
    drawPathRole = require('../roles/path/drawPathRole'),

    Action = require('../actions/Action'),
    each = utils.each;

class Actor {

    /*
        @param [object]
    */
    constructor(opts = {}) {
        this.values = {};
        this.state = { values: {} };
        this.process = new Process(this, update);
        this.activeActions = {};
        this.numActive = 0;
        this.actionCounter = 0;
        this.activeValues = [];
        this.activeParents = [];

        this.assignRoles(opts.element, opts.as, true);
        this.set(opts);
        this.initRoles();
    }

    /*
        Set Actor properties and values

        @param [object]
        @returns [Actor]
    */
    set(opts) {
        each(opts, (key, value) => {
            if (key !== 'values' && key !== 'action') {
                this[key] = value;
            }
        });

        if (opts && opts.values) {
            this.values = valueOps.process(this.values, opts.values, opts, 'current', this);
        }

        return this;
    }

    /*
        Bind Action-specific controls to Actor

        @returns [Controls]
    */
    controls(action) {
        var Controls = action.getControls();
        return new Controls(this, action.getPlayable());
    }

    /*
        Start a new Action

        @param [Action]
        @param [Input || event] (optional)
        @returns [Controls]
    */
    start(action, input) {
        var Controls = action.getControls(),
            opts = utils.copy(action);

        opts.action = action.getPlayable();
        this.set(opts);

        if (input) {
            this.bindInput(input);
        }

        this.activate();

        return new Controls(this, opts.action, true);
    }

    /*
        Pause all active Actions

        @param [int] (optional)
        @returns [Actor]
    */
    pause() {
        this.isActive = false;
        this.process.stop();
        return this;
    }

    /*
        Resume all active Actions

        @param [int] (optional)
        @returns [Actor];
    */
    resume() {
        this.isActive = true;
        this.process.start();
        return this;
    }

    /*
        Stop all active Actions

        @param [int] (optional)
        @returns [Actor]
    */
    stop() {
        this.pause(id);
        return this;
    }

    /*
        Toggle all active Actions

        @param [int] (optional)
        @returns [Actor]
    */
    toggle(id) {
        return this.isActive ? this.pause() : this.resume();
    }

    /*
        Syncs `element` with current properties

        @returns [Actor]
    */
    sync() {
        return this.start(new Action({ values: this.values }));
    }

    /*
        Assign Roles based on element and manually provided props

        @param [object]: Element
        @param [Role || array]
        @param [boolean] (optional)
    */
    assignRoles(element, manualRoles, surpressInit) {
        // All Actors get a default Role that handles user callbacks
        this.roles = [ defaultRole ];

        // Auto-assign if no manually-set Roles
        if (!manualRoles && element) {
            this.autoAssignRoles(element);

        // Or manually set if provided
        } else if (manualRoles) {
            if (utils.isArray(manualRoles)) {
                this.roles.push.apply(this.roles, manualRoles);
            } else {
                this.roles.push(manualRoles);
            }
        }

        if (!surpressInit) {
            this.initRoles();
        }
    }

    /*
        Automatically assign Roles based on element, designed
        to be extended

        @param [object]: Element
    */
    autoAssignRoles(element) {
        // Add CSS role if HTMLElement
        if (element instanceof HTMLElement) {
            this.roles.push(cssRole);

        // Add SVG role if SVG element
        } else if (element instanceof SVGElement) {
            this.roles.push(svgRole);

            // Add Draw Path role if path element
            if (element.tagName === 'path') {
                this.roles.push(drawPathRole);
            }
        }
    }

    /*
        Fire init callbacks
    */
    initRoles() {
        // Fire init callback
        this.roles.forEach((role) => {
            if (role.init) {
                role.init.call(this);
            }
        });
    }

    activate() {
        this.isActive = true;
        this.firstFrame = true;
        this.process.start();
    }

    /*
        Bind Action and return its table id

        @param [Action]
        @returns [int]
    */
    bindAction(action, id) {
        id = (id === undefined) ? this.actionCounter++ : id;
        this.activeActions[id] = action;
        this.numActive++;
        return this.actionCounter;
    }

    unbindAction(id) {
        this.numActive--;
        delete this.activeActions[id];

        if (!this.numActive) {
            this.stop();
        }
    }

    /*
        Update processing order
        
        @param [string]
        @param [boolean]
        @param [boolean]
    */
    updateOrder(key, moveToBack, hasChildren) {
        var order = (!hasChildren) ? this.activeValues : this.activeParents,
            position = order.indexOf(key);

        // If key isn't list or moveToBack is set to true, add key
        if (position === -1 || moveToBack) {
            order.push(key);

            // If key already exists, remove
            if (position > -1) {
                order.splice(position, 1);
            }
        }
    }

    startBound(id, input) {
        var action = this.getAction(id),
            opts = utils.copy(action);

        this.set(opts);

        if (input) {
            this.bindInput(input);
        }

        this.activate();
    }

    bindInput(input) {
        this.input = (!input.current) ? new Pointer(input) : input;
        this.inputOrigin = this.input.get();
    }

    // [boolean]: Is this Actor active?
    get isActive() {
        return this._isActive;
    }

    // Set hasChanged to true is this is now active
    set isActive(status) {
        if (status === true) {
            this.hasChanged = status;
        }

        this._isActive = status;
    }
}

module.exports = Actor;


































