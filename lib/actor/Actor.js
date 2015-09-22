'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Process = require('../process/Process'),
    Queue = require('../inc/Queue'),
    Pointer = require('../input/Pointer'),
    utils = require('../inc/utils'),
    update = require('./update'),
    valueOps = require('./value-operations'),
    Controls = require('./Controls'),

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

    function Actor(opts) {
        _classCallCheck(this, Actor);

        this.values = {};
        this.state = { values: {} };
        this.process = new Process(this, update);

        this.assignRoles(opts.element, opts.as, true);
        this.set(opts);
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
                if (key !== 'values' || key !== 'action') {
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
        value: function controls(action, input) {
            return new Controls(this, action, input);
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
            var opts = utils.copy(action);

            opts.action = action.getPlayable();
            this.set(opts);

            if (input) {
                this.input = !input.current ? new Pointer(input) : input;
                this.inputOrigin = this.input.get();
            }

            this.activate();

            return new Controls(this, opts.action, input);
        }

        /*
            Pause all active Actions
             @returns [Actor]
        */
    }, {
        key: 'pause',
        value: function pause() {
            this.isActive = false;
            this.process.stop();
            return this;
        }

        /*
            Resume all active Actions
             @returns [Actor];
        */
    }, {
        key: 'resume',
        value: function resume() {
            this.isActive = true;
            this.process.start();
            return this;
        }

        /*
            Stop all active Actions
             @returns [Actor]
        */
    }, {
        key: 'stop',
        value: function stop() {
            this.pause();
            return this;
        }

        /*
            Toggle all active Actions
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
            this.isActive = true;
            this.firstFrame = true;
            this.process.start();
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