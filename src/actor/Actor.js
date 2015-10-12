var Process = require('../process/Process'),
    Queue = require('../inc/Queue'),
    utils = require('../inc/utils'),
    select = require('../inc/select-dom'),
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
        var props = utils.isString(opts) ? { element: opts } : opts;

        this.values = {};
        this.state = { values: {} };
        this.queue = new Queue();
        this.process = new Process(this, update);
        this.activeActions = {};
        this.numActive = 0;
        this.actionCounter = 0;
        this.activeValues = [];
        this.activeParents = [];

        // Get actual elements if this is a selector
        if (utils.isString(props.element)) {
            props.element = select(props.element)[0];
        }

        this.assignRoles(props.element, props.as, true);
        this.set(props);
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

        // Check all active actions for any that can be removed
        each(this.activeActions, (id, action) => {
            let actionIsActive = false;

            each(this.values, (key, value) => {
                actionIsActive = (value.action === action) ? true : actionIsActive;
            });

            if (!actionIsActive) {
                this.unbindAction(id);
            }
        });

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

        @param [Action || number]
        @param [Input || event] (optional)
        @param [boolean] (optional): defined `true` if we surpress making new queue
        @returns [Controls]
    */
    start(toSet, input) {
        let actionExists = utils.isNum(toSet),
            action = (actionExists) ? this.getAction(toSet) : toSet.getPlayable(),
            opts = action.getSet(),
            surpressQueueClear = (arguments[arguments.length - 1] === false);

        opts.action = action;

        this.set(opts);

        if (input) {
            action.bindInput(input);
        }

        if (!surpressQueueClear) {
            this.queue.clear();
        }

        // Fire all Role onStarts if not already active
        if (!this.isActive) {
            let numRoles = this.roles.length;
            for (let i = 0; i < numRoles; i++) {
                let role = this.roles[i];
                if (role.start) {
                    role.start.call(this, this);
                }
            }
        }

        // Fire new action onStart
        if (!action.isActive && action.onStart) {
            action.onStart.call(this, this, action);
        }

        this.activate();

        if (!actionExists) {
            let Controls = action.getControls();
            return new Controls(this, action, true);
        }
    }

    /*
        Pause all active Actions

        @param [int] (optional)
        @returns [Actor]
    */
    pause() {
        this.isActive = false;
        each(this.activeActions, (id, action) => action.deactivate());
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
        each(this.activeActions, (id, action) => action.activate());
        this.process.start();
        return this;
    }

    /*
        Stop all active Actions

        @param [int] (optional)
        @returns [Actor]
    */
    stop() {
        this.pause();
        each(this.activeActions, (id) => this.unbindAction(id));
        return this;
    }

    /*
        Toggle all active Actions

        @param [int] (optional)
        @returns [Actor]
    */
    toggle() {
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
        Add a new Action to the queue
    */
    then() {
        this.queue.add.apply(this.queue, arguments);
        return this;
    }

    /*
        Execute next in queue
    */
    next() {
        var next = this.queue.next();

        if (next) {
            if (utils.isFunc(next[0])) {
                next[0]();
                this.next();
            // Or this is an action
            } else {
                next.push(false);
                this.start.apply(this, next);
            }
        } else {
            this.stop();
        }

        return this;
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
                role.init.call(this, this);
            }
        });
    }

    activate() {
        if (!this.isActive) {
            this.isActive = true;
            this.firstFrame = true;
            this.process.start();
        }
    }

    /*
        Bind Action and return its table id

        @param [Action]
        @returns [int]
    */
    bindAction(action, id) {
        if (id === undefined) {
            id = this.actionCounter++;
        }

        if (!this.hasAction(id)) {
            this.activeActions[id] = action;
            this.numActive++;
        }

        return id;
    }

    unbindAction(id) {
        if (this.activeActions.hasOwnProperty(id)) {
            this.numActive--;
            delete this.activeActions[id];
        }

        if (!this.numActive) {
            this.stop();
        }
    }

    getAction(id) {
        return this.activeActions[id];
    }

    hasAction(id) {
        return (this.getAction(id) !== undefined);
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


































