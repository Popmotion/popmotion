'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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

            // Check all active actions for any that can be removed
            each(this.activeActions, function (id, action) {
                var actionIsActive = false;

                each(_this.values, function (key, value) {
                    actionIsActive = value.action === action ? true : actionIsActive;
                });

                if (!actionIsActive) {
                    _this.unbindAction(id);
                }
            });

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
             @param [Action || number]
            @param [Input || event] (optional)
            @param [boolean] (optional): defined `true` if we surpress making new queue
            @returns [Controls]
        */
    }, {
        key: 'start',
        value: function start(toSet, input) {
            var actionExists = utils.isNum(toSet),
                action = actionExists ? this.getAction(toSet) : toSet.getPlayable(),
                opts = action.getSet(),
                surpressQueueClear = arguments[arguments.length - 1] === false;

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
                var numRoles = this.roles.length;
                for (var i = 0; i < numRoles; i++) {
                    var role = this.roles[i];
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
                var Controls = action.getControls();
                return new Controls(this, action, true);
            }
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
            each(this.activeActions, function (id, action) {
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
            each(this.activeActions, function (id, action) {
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
            var _this2 = this;

            this.pause();
            each(this.activeActions, function (id) {
                return _this2.unbindAction(id);
            });
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
            var _this3 = this;

            // Fire init callback
            this.roles.forEach(function (role) {
                if (role.init) {
                    role.init.call(_this3, _this3);
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
            if (this.activeActions.hasOwnProperty(id)) {
                this.numActive--;
                delete this.activeActions[id];
            }

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