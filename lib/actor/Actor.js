'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Process = require('../process/Process'),
    Queue = require('../inc/Queue'),
    Pointer = require('../input/Pointer'),
    utils = require('../inc/utils'),
    update = require('./update'),
    valueOps = require('./value-operations'),
    select = require('./select'),

/*
    Role imports
*/
defaultRole = require('../roles/defaultRole'),
    cssRole = require('../roles/css/cssRole'),
    svgRole = require('../roles/svg/svgRole'),
    drawPathRole = require('../roles/path/drawPathRole'),
    Action = require('../actions/Action'),
    each = utils.each;

var Actor = (function () {

    /*
        @param [object]
    */

    function Actor() {
        var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Actor);

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

    _createClass(Actor, [{
        key: 'set',
        value: function set(opts) {
            var _this = this;

            each(opts, function (key, value) {
                if (key !== 'values' && key !== 'action') {
                    _this[key] = value;
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
    }, {
        key: 'controls',
        value: function controls(action) {
            var Controls = action.getControls();
            return new Controls(this, action.getPlayable());
        }

        /*
            Start a new Action
             @param [Action]
            @param [Input || event] (optional)
            @returns [Controls]
        */
    }, {
        key: 'start',
        value: function start(action, input) {
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
    }, {
        key: 'pause',
        value: function pause() {
            this.isActive = false;
            this.allActiveActions(function (action) {
                return action.deactivate();
            });
            this.process.stop();
            return this;
        }

        /*
            Resume all active Actions
             @param [int] (optional)
            @returns [Actor];
        */
    }, {
        key: 'resume',
        value: function resume() {
            this.isActive = true;
            this.allActiveActions(function (action) {
                return action.activate();
            });
            this.process.start();
            return this;
        }

        /*
            Stop all active Actions
             @param [int] (optional)
            @returns [Actor]
        */
    }, {
        key: 'stop',
        value: function stop() {
            this.activeActions = {};
            this.pause();
            return this;
        }

        /*
            Toggle all active Actions
             @param [int] (optional)
            @returns [Actor]
        */
    }, {
        key: 'toggle',
        value: function toggle() {
            return this.isActive ? this.pause() : this.resume();
        }

        /*
            Syncs `element` with current properties
             @returns [Actor]
        */
    }, {
        key: 'sync',
        value: function sync() {
            return this.start(new Action({ values: this.values }));
        }

        /*
            Add a new Action to the queue
        */
    }, {
        key: 'then',
        value: function then() {
            this.queue.add.apply(this.queue, arguments);
            return this;
        }

        /*
            Execute next in queue
        */
    }, {
        key: 'next',
        value: function next() {
            var next = this.queue.next();

            if (next) {
                if (utils.isFunc(next)) {
                    next();
                    this.next();
                } else {
                    this.start(next);
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
    }, {
        key: 'assignRoles',
        value: function assignRoles(element, manualRoles, surpressInit) {
            // All Actors get a default Role that handles user callbacks
            this.roles = [defaultRole];

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
    }, {
        key: 'autoAssignRoles',
        value: function autoAssignRoles(element) {
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
    }, {
        key: 'initRoles',
        value: function initRoles() {
            var _this2 = this;

            // Fire init callback
            this.roles.forEach(function (role) {
                if (role.init) {
                    role.init.call(_this2);
                }
            });
        }
    }, {
        key: 'activate',
        value: function activate() {
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
    }, {
        key: 'bindAction',
        value: function bindAction(action, id) {
            if (id === undefined) {
                id = this.actionCounter++;
            }

            if (!this.hasAction(id)) {
                this.activeActions[id] = action;
                this.numActive++;
            }

            return id;
        }
    }, {
        key: 'unbindAction',
        value: function unbindAction(id) {
            this.numActive--;
            delete this.activeActions[id];

            if (!this.numActive) {
                this.stop();
            }
        }
    }, {
        key: 'getAction',
        value: function getAction(id) {
            return this.activeActions[id];
        }
    }, {
        key: 'hasAction',
        value: function hasAction(id) {
            return this.getAction(id) !== undefined;
        }
    }, {
        key: 'allActiveActions',
        value: function allActiveActions(callback) {
            each(this.activeActions, function (id, action) {
                return callback(action);
            });
        }

        /*
            Update processing order
            
            @param [string]
            @param [boolean]
            @param [boolean]
        */
    }, {
        key: 'updateOrder',
        value: function updateOrder(key, moveToBack, hasChildren) {
            var order = !hasChildren ? this.activeValues : this.activeParents,
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
    }, {
        key: 'startBound',
        value: function startBound(id, input) {
            var action = this.getAction(id),
                opts = utils.copy(action);

            opts.action = action;
            this.set(opts);

            if (input) {
                this.bindInput(input);
            }

            this.activate();
        }
    }, {
        key: 'bindInput',
        value: function bindInput(input) {
            this.input = !input.current ? new Pointer(input) : input;
            this.inputOrigin = this.input.get();
        }

        // [boolean]: Is this Actor active?
    }, {
        key: 'isActive',
        get: function get() {
            return this._isActive;
        },

        // Set hasChanged to true is this is now active
        set: function set(status) {
            if (status === true) {
                this.hasChanged = status;
            }

            this._isActive = status;
        }
    }]);

    return Actor;
})();

module.exports = Actor;