'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Process = require('../process/Process'),
    Queue = require('../inc/Queue'),
    utils = require('../inc/utils'),
    select = require('../inc/select-dom'),
    valueOps = require('./value-operations'),

/*
    Process methods
*/
update = require('./update'),
    render = require('./render'),
    postRender = require('./post-render'),

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
        this.process = new Process({ update: update, render: render, postRender: postRender }, this);
        this.activeActions = {};
        this.numActive = 0;
        this.actionCounter = 0;
        this.activeValues = [];
        this.activeParents = [];
        this.isActive = false;

        // Get actual elements if this is a selector
        if (utils.isString(props.element)) {
            props.element = select(props.element)[0];
        }

        this.assignRoles(props.element, props.as, true);
        this.set(props);
        this.initRoles();
        this.sync();
    }

    /*
        Set Actor properties and values
         @param [object]
        @returns [Actor]
    */

    Actor.prototype.set = function set(opts) {
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
    };

    /*
        Bind Action-specific controls to Actor
         @returns [Controls]
    */

    Actor.prototype.controls = function controls(action) {
        var Controls = action.getControls();
        return new Controls(this, action.getPlayable());
    };

    /*
        Start a new Action
         @param [Action || number]
        @param [Input || event] (optional)
        @param [boolean] (optional): defined `true` if we surpress making new queue
        @returns [Controls]
    */

    Actor.prototype.start = function start(toSet, input) {
        var actionExists = utils.isNum(toSet);
        var action = actionExists ? this.getAction(toSet) : toSet.getPlayable();
        var opts = action.getSet();
        var surpressQueueClear = arguments[arguments.length - 1] === false;

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
            action.onStart(this, action);
        }

        this.activate();

        if (!actionExists) {
            var Controls = action.getControls();
            return new Controls(this, action, true);
        }
    };

    /*
        Pause all active Actions
         @param [int] (optional)
        @returns [Actor]
    */

    Actor.prototype.pause = function pause() {
        this.isActive = false;
        each(this.activeActions, function (id, action) {
            return action.deactivate();
        });
        this.process.stop();
        return this;
    };

    /*
        Resume all active Actions
         @param [int] (optional)
        @returns [Actor];
    */

    Actor.prototype.resume = function resume() {
        this.isActive = true;
        each(this.activeActions, function (id, action) {
            return action.activate();
        });
        this.process.start();
        return this;
    };

    /*
        Stop all active Actions
         @param [int] (optional)
        @returns [Actor]
    */

    Actor.prototype.stop = function stop() {
        var _this2 = this;

        this.pause();
        each(this.activeActions, function (id) {
            return _this2.unbindAction(id);
        });
        return this;
    };

    /*
        Toggle all active Actions
         @param [int] (optional)
        @returns [Actor]
    */

    Actor.prototype.toggle = function toggle() {
        return this.isActive ? this.pause() : this.resume();
    };

    /*
        Syncs `element` with current properties
         @returns [Actor]
    */

    Actor.prototype.sync = function sync() {
        var currentValues = {};

        utils.each(this.values, function (key, value) {
            currentValues[key] = value.current;
        });

        this.start(new Action({ values: currentValues }));
        return this;
    };

    /*
        Add a new Action to the queue
    */

    Actor.prototype.then = function then() {
        this.queue.add.apply(this.queue, arguments);
        return this;
    };

    /*
        Execute next in queue
    */

    Actor.prototype.next = function next() {
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
    };

    /*
        Assign Roles based on element and manually provided props
         @param [object]: Element
        @param [Role || array]
        @param [boolean] (optional)
    */

    Actor.prototype.assignRoles = function assignRoles(element, manualRoles, surpressInit) {
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
    };

    /*
        Automatically assign Roles based on element, designed
        to be extended
         @param [object]: Element
    */

    Actor.prototype.autoAssignRoles = function autoAssignRoles(element) {
        // Add CSS role if HTMLElement
        if (element instanceof HTMLElement || element.tagName === 'svg') {
            this.roles.push(cssRole);

            // Add SVG role if SVG element
        } else if (element instanceof SVGElement) {
                this.roles.push(svgRole);

                // Add Draw Path role if path element
                if (element.tagName === 'path') {
                    this.roles.push(drawPathRole);
                }
            }
    };

    /*
        Fire init callbacks
    */

    Actor.prototype.initRoles = function initRoles() {
        var _this3 = this;

        // Fire init callback
        this.roles.forEach(function (role) {
            if (role.init) {
                role.init.call(_this3, _this3);
            }
        });
    };

    Actor.prototype.activate = function activate() {
        if (!this.isActive) {
            this.isActive = true;
            this.firstFrame = true;
            this.process.start();
        }
    };

    /*
        Bind Action and return its table id
         @param [Action]
        @returns [int]
    */

    Actor.prototype.bindAction = function bindAction(action, id) {
        if (id === undefined) {
            id = this.actionCounter++;
        }

        if (!this.hasAction(id)) {
            this.activeActions[id] = action;
            this.numActive++;
        }

        return id;
    };

    Actor.prototype.unbindAction = function unbindAction(id) {
        if (this.activeActions.hasOwnProperty(id)) {
            var action = this.activeActions[id];
            if (action.input && action.input.autoStop === true) {
                action.input.stop();
            }
            action.deactivate();
            this.numActive--;
            delete this.activeActions[id];
        }

        if (!this.numActive) {
            this.pause();
        }
    };

    Actor.prototype.getAction = function getAction(id) {
        return this.activeActions[id];
    };

    Actor.prototype.hasAction = function hasAction(id) {
        return this.getAction(id) !== undefined;
    };

    /*
        Update processing order
        
        @param [string]
        @param [boolean]
        @param [boolean]
    */

    Actor.prototype.updateOrder = function updateOrder(key, moveToBack, hasChildren) {
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
    };

    // [boolean]: Is this Actor active?

    _createClass(Actor, [{
        key: 'isActive',
        get: function () {
            return this._isActive;
        }

        // Set hasChanged to true is this is now active
        ,
        set: function (status) {
            if (status === true) {
                this.hasChanged = status;
            }

            this._isActive = status;
        }
    }]);

    return Actor;
})();

module.exports = Actor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rvci9BY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUM7SUFDdkMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDL0IsS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDL0IsTUFBTSxHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztJQUNyQyxRQUFRLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDOzs7OztBQUt4QyxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUM1QixNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUM1QixVQUFVLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQzs7Ozs7QUFLckMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztJQUM3QyxPQUFPLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDO0lBQ3pDLE9BQU8sR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUM7SUFDekMsWUFBWSxHQUFHLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQztJQUVwRCxNQUFNLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDO0lBQ3JDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDOztJQUVoQixLQUFLOzs7Ozs7QUFLUCxhQUxFLEtBQUssR0FLZ0I7WUFBWCxJQUFJLHlEQUFHLEVBQUU7OzhCQUxuQixLQUFLOztBQU1ILFlBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDOztBQUU1RCxZQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNqQixZQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQzVCLFlBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUN6QixZQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFOLE1BQU0sRUFBRSxNQUFNLEVBQU4sTUFBTSxFQUFFLFVBQVUsRUFBVixVQUFVLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqRSxZQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUN4QixZQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNuQixZQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN2QixZQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUN2QixZQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUN4QixZQUFJLENBQUMsUUFBUSxHQUFHLEtBQUs7OztBQUFDLEFBR3RCLFlBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDL0IsaUJBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM1Qzs7QUFFRCxZQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNoRCxZQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hCLFlBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNqQixZQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDZjs7Ozs7OztBQUFBO0FBNUJDLFNBQUssV0FvQ1AsR0FBRyxnQkFBQyxJQUFJLEVBQUU7OztBQUNOLFlBQUksQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFLO0FBQ3ZCLGdCQUFJLEdBQUcsS0FBSyxRQUFRLElBQUksR0FBRyxLQUFLLFFBQVEsRUFBRTtBQUN0QyxzQkFBSyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDckI7U0FDSixDQUFDLENBQUM7O0FBRUgsWUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNyQixnQkFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ25GOzs7QUFBQSxBQUdELFlBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBSztBQUNyQyxnQkFBSSxjQUFjLEdBQUcsS0FBSyxDQUFDOztBQUUzQixnQkFBSSxDQUFDLE1BQUssTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLEtBQUssRUFBSztBQUM5Qiw4QkFBYyxHQUFHLEFBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxNQUFNLEdBQUksSUFBSSxHQUFHLGNBQWMsQ0FBQzthQUN0RSxDQUFDLENBQUM7O0FBRUgsZ0JBQUksQ0FBQyxjQUFjLEVBQUU7QUFDakIsc0JBQUssWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3pCO1NBQ0osQ0FBQyxDQUFDOztBQUVILGVBQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7Ozs7QUE3REMsU0FBSyxXQW9FUCxRQUFRLHFCQUFDLE1BQU0sRUFBRTtBQUNiLFlBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN0QyxlQUFPLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztLQUNuRDs7Ozs7Ozs7OztBQXZFQyxTQUFLLFdBaUZQLEtBQUssa0JBQUMsS0FBSyxFQUFFLEtBQUssRUFBRTtBQUNoQixZQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RDLFlBQUksTUFBTSxHQUFHLEFBQUMsWUFBWSxHQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzFFLFlBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMzQixZQUFJLGtCQUFrQixHQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLEtBQUssQUFBQyxDQUFDOztBQUVyRSxZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7QUFFckIsWUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFZixZQUFJLEtBQUssRUFBRTtBQUNQLGtCQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCOztBQUVELFlBQUksQ0FBQyxrQkFBa0IsRUFBRTtBQUNyQixnQkFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0Qjs7O0FBQUEsQUFHRCxZQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNoQixnQkFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDakMsaUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDL0Isb0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekIsb0JBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNaLHdCQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQy9CO2FBQ0o7U0FDSjs7O0FBQUEsQUFHRCxZQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO0FBQ3BDLGtCQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNoQzs7QUFFRCxZQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7O0FBRWhCLFlBQUksQ0FBQyxZQUFZLEVBQUU7QUFDZixnQkFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3BDLG1CQUFPLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDM0M7S0FDSjs7Ozs7Ozs7QUF6SEMsU0FBSyxXQWlJUCxLQUFLLG9CQUFHO0FBQ0osWUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdEIsWUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsVUFBQyxFQUFFLEVBQUUsTUFBTTttQkFBSyxNQUFNLENBQUMsVUFBVSxFQUFFO1NBQUEsQ0FBQyxDQUFDO0FBQzlELFlBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDcEIsZUFBTyxJQUFJLENBQUM7S0FDZjs7Ozs7Ozs7QUF0SUMsU0FBSyxXQThJUCxNQUFNLHFCQUFHO0FBQ0wsWUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIsWUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsVUFBQyxFQUFFLEVBQUUsTUFBTTttQkFBSyxNQUFNLENBQUMsUUFBUSxFQUFFO1NBQUEsQ0FBQyxDQUFDO0FBQzVELFlBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDckIsZUFBTyxJQUFJLENBQUM7S0FDZjs7Ozs7Ozs7QUFuSkMsU0FBSyxXQTJKUCxJQUFJLG1CQUFHOzs7QUFDSCxZQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDYixZQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxVQUFDLEVBQUU7bUJBQUssT0FBSyxZQUFZLENBQUMsRUFBRSxDQUFDO1NBQUEsQ0FBQyxDQUFDO0FBQ3hELGVBQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7Ozs7O0FBL0pDLFNBQUssV0F1S1AsTUFBTSxxQkFBRztBQUNMLGVBQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3ZEOzs7Ozs7O0FBektDLFNBQUssV0FnTFAsSUFBSSxtQkFBRztBQUNILFlBQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQzs7QUFFekIsYUFBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQUMsR0FBRyxFQUFFLEtBQUssRUFBSztBQUNwQyx5QkFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7U0FDdEMsQ0FBQyxDQUFDOztBQUVILFlBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2xELGVBQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7OztBQXpMQyxTQUFLLFdBOExQLElBQUksbUJBQUc7QUFDSCxZQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztBQUM1QyxlQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7QUFqTUMsU0FBSyxXQXNNUCxJQUFJLG1CQUFHO0FBQ0gsWUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7QUFFN0IsWUFBSSxJQUFJLEVBQUU7QUFDTixnQkFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ3ZCLG9CQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNWLG9CQUFJLENBQUMsSUFBSSxFQUFFOztBQUFDLGFBRWYsTUFBTTtBQUNILHdCQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pCLHdCQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ2hDO1NBQ0osTUFBTTtBQUNILGdCQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjs7QUFFRCxlQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7Ozs7QUF2TkMsU0FBSyxXQWdPUCxXQUFXLHdCQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFOztBQUU1QyxZQUFJLENBQUMsS0FBSyxHQUFHLENBQUUsV0FBVyxDQUFFOzs7QUFBQyxBQUc3QixZQUFJLENBQUMsV0FBVyxJQUFJLE9BQU8sRUFBRTtBQUN6QixnQkFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7OztBQUFDLFNBR2pDLE1BQU0sSUFBSSxXQUFXLEVBQUU7QUFDcEIsb0JBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtBQUM1Qix3QkFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7aUJBQ2xELE1BQU07QUFDSCx3QkFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ2hDO2FBQ0o7O0FBRUQsWUFBSSxDQUFDLFlBQVksRUFBRTtBQUNmLGdCQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7S0FDSjs7Ozs7Ozs7QUFwUEMsU0FBSyxXQTRQUCxlQUFlLDRCQUFDLE9BQU8sRUFBRTs7QUFFckIsWUFBSSxPQUFPLFlBQVksV0FBVyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO0FBQzdELGdCQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7OztBQUFDLFNBRzVCLE1BQU0sSUFBSSxPQUFPLFlBQVksVUFBVSxFQUFFO0FBQ3RDLG9CQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7OztBQUFDLEFBR3pCLG9CQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFO0FBQzVCLHdCQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDakM7YUFDSjtLQUNKOzs7Ozs7QUExUUMsU0FBSyxXQStRUCxTQUFTLHdCQUFHOzs7O0FBRVIsWUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDekIsZ0JBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUNYLG9CQUFJLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQVksQ0FBQzthQUM5QjtTQUNKLENBQUMsQ0FBQztLQUNOOztBQXRSQyxTQUFLLFdBd1JQLFFBQVEsdUJBQUc7QUFDUCxZQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNoQixnQkFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIsZ0JBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLGdCQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3hCO0tBQ0o7Ozs7Ozs7O0FBOVJDLFNBQUssV0FzU1AsVUFBVSx1QkFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFO0FBQ25CLFlBQUksRUFBRSxLQUFLLFNBQVMsRUFBRTtBQUNsQixjQUFFLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzdCOztBQUVELFlBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3JCLGdCQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUNoQyxnQkFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3BCOztBQUVELGVBQU8sRUFBRSxDQUFDO0tBQ2I7O0FBalRDLFNBQUssV0FtVFAsWUFBWSx5QkFBQyxFQUFFLEVBQUU7QUFDYixZQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3ZDLGdCQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3BDLGdCQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO0FBQ2hELHNCQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3ZCO0FBQ0Qsa0JBQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNwQixnQkFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ2pCLG1CQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakM7O0FBRUQsWUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDakIsZ0JBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjtLQUNKOztBQWpVQyxTQUFLLFdBbVVQLFNBQVMsc0JBQUMsRUFBRSxFQUFFO0FBQ1YsZUFBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pDOztBQXJVQyxTQUFLLFdBdVVQLFNBQVMsc0JBQUMsRUFBRSxFQUFFO0FBQ1YsZUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLFNBQVMsQ0FBRTtLQUM3Qzs7Ozs7Ozs7OztBQXpVQyxTQUFLLFdBa1ZQLFdBQVcsd0JBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUU7QUFDdEMsWUFBSSxLQUFLLEdBQUcsQUFBQyxDQUFDLFdBQVcsR0FBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhO1lBQy9ELFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQzs7O0FBQUMsQUFHbEMsWUFBSSxRQUFRLEtBQUssQ0FBQyxDQUFDLElBQUksVUFBVSxFQUFFO0FBQy9CLGlCQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7O0FBQUMsQUFHaEIsZ0JBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ2YscUJBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1NBQ0o7S0FDSjs7OztpQkEvVkMsS0FBSzs7eUJBa1dRO0FBQ1gsbUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN6Qjs7Ozt1QkFHWSxNQUFNLEVBQUU7QUFDakIsZ0JBQUksTUFBTSxLQUFLLElBQUksRUFBRTtBQUNqQixvQkFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7YUFDNUI7O0FBRUQsZ0JBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1NBQzNCOzs7V0E3V0MsS0FBSzs7O0FBZ1hYLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIiwiZmlsZSI6IkFjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByb2Nlc3MgPSByZXF1aXJlKCcuLi9wcm9jZXNzL1Byb2Nlc3MnKSxcbiAgICBRdWV1ZSA9IHJlcXVpcmUoJy4uL2luYy9RdWV1ZScpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgc2VsZWN0ID0gcmVxdWlyZSgnLi4vaW5jL3NlbGVjdC1kb20nKSxcbiAgICB2YWx1ZU9wcyA9IHJlcXVpcmUoJy4vdmFsdWUtb3BlcmF0aW9ucycpLFxuXG4gICAgLypcbiAgICAgICAgUHJvY2VzcyBtZXRob2RzXG4gICAgKi9cbiAgICB1cGRhdGUgPSByZXF1aXJlKCcuL3VwZGF0ZScpLFxuICAgIHJlbmRlciA9IHJlcXVpcmUoJy4vcmVuZGVyJyksXG4gICAgcG9zdFJlbmRlciA9IHJlcXVpcmUoJy4vcG9zdC1yZW5kZXInKSxcblxuICAgIC8qXG4gICAgICAgIFJvbGUgaW1wb3J0c1xuICAgICovXG4gICAgZGVmYXVsdFJvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9kZWZhdWx0Um9sZScpLFxuICAgIGNzc1JvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9jc3MvY3NzUm9sZScpLFxuICAgIHN2Z1JvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9zdmcvc3ZnUm9sZScpLFxuICAgIGRyYXdQYXRoUm9sZSA9IHJlcXVpcmUoJy4uL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlJyksXG5cbiAgICBBY3Rpb24gPSByZXF1aXJlKCcuLi9hY3Rpb25zL0FjdGlvbicpLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoO1xuXG5jbGFzcyBBY3RvciB7XG5cbiAgICAvKlxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgICAgICBsZXQgcHJvcHMgPSB1dGlscy5pc1N0cmluZyhvcHRzKSA/IHsgZWxlbWVudDogb3B0cyB9IDogb3B0cztcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlID0geyB2YWx1ZXM6IHt9IH07XG4gICAgICAgIHRoaXMucXVldWUgPSBuZXcgUXVldWUoKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzID0gbmV3IFByb2Nlc3MoeyB1cGRhdGUsIHJlbmRlciwgcG9zdFJlbmRlciB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMubnVtQWN0aXZlID0gMDtcbiAgICAgICAgdGhpcy5hY3Rpb25Db3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5hY3RpdmVWYWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVQYXJlbnRzID0gW107XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyBHZXQgYWN0dWFsIGVsZW1lbnRzIGlmIHRoaXMgaXMgYSBzZWxlY3RvclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocHJvcHMuZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHByb3BzLmVsZW1lbnQgPSBzZWxlY3QocHJvcHMuZWxlbWVudClbMF07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFzc2lnblJvbGVzKHByb3BzLmVsZW1lbnQsIHByb3BzLmFzLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuICAgICAgICB0aGlzLmluaXRSb2xlcygpO1xuICAgICAgICB0aGlzLnN5bmMoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTZXQgQWN0b3IgcHJvcGVydGllcyBhbmQgdmFsdWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHNldChvcHRzKSB7XG4gICAgICAgIGVhY2gob3B0cywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmIChrZXkgIT09ICd2YWx1ZXMnICYmIGtleSAhPT0gJ2FjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG9wdHMgJiYgb3B0cy52YWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVPcHMucHJvY2Vzcyh0aGlzLnZhbHVlcywgb3B0cy52YWx1ZXMsIG9wdHMsICdjdXJyZW50JywgdGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBhbGwgYWN0aXZlIGFjdGlvbnMgZm9yIGFueSB0aGF0IGNhbiBiZSByZW1vdmVkXG4gICAgICAgIGVhY2godGhpcy5hY3RpdmVBY3Rpb25zLCAoaWQsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgbGV0IGFjdGlvbklzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGVhY2godGhpcy52YWx1ZXMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uSXNBY3RpdmUgPSAodmFsdWUuYWN0aW9uID09PSBhY3Rpb24pID8gdHJ1ZSA6IGFjdGlvbklzQWN0aXZlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghYWN0aW9uSXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuYmluZEFjdGlvbihpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEJpbmQgQWN0aW9uLXNwZWNpZmljIGNvbnRyb2xzIHRvIEFjdG9yXG5cbiAgICAgICAgQHJldHVybnMgW0NvbnRyb2xzXVxuICAgICovXG4gICAgY29udHJvbHMoYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IENvbnRyb2xzID0gYWN0aW9uLmdldENvbnRyb2xzKCk7XG4gICAgICAgIHJldHVybiBuZXcgQ29udHJvbHModGhpcywgYWN0aW9uLmdldFBsYXlhYmxlKCkpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN0YXJ0IGEgbmV3IEFjdGlvblxuXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uIHx8IG51bWJlcl1cbiAgICAgICAgQHBhcmFtIFtJbnB1dCB8fCBldmVudF0gKG9wdGlvbmFsKVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dIChvcHRpb25hbCk6IGRlZmluZWQgYHRydWVgIGlmIHdlIHN1cnByZXNzIG1ha2luZyBuZXcgcXVldWVcbiAgICAgICAgQHJldHVybnMgW0NvbnRyb2xzXVxuICAgICovXG4gICAgc3RhcnQodG9TZXQsIGlucHV0KSB7XG4gICAgICAgIGxldCBhY3Rpb25FeGlzdHMgPSB1dGlscy5pc051bSh0b1NldCk7XG4gICAgICAgIGxldCBhY3Rpb24gPSAoYWN0aW9uRXhpc3RzKSA/IHRoaXMuZ2V0QWN0aW9uKHRvU2V0KSA6IHRvU2V0LmdldFBsYXlhYmxlKCk7XG4gICAgICAgIGxldCBvcHRzID0gYWN0aW9uLmdldFNldCgpO1xuICAgICAgICBsZXQgc3VycHJlc3NRdWV1ZUNsZWFyID0gKGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0gPT09IGZhbHNlKTtcblxuICAgICAgICBvcHRzLmFjdGlvbiA9IGFjdGlvbjtcblxuICAgICAgICB0aGlzLnNldChvcHRzKTtcblxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgIGFjdGlvbi5iaW5kSW5wdXQoaW5wdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdXJwcmVzc1F1ZXVlQ2xlYXIpIHtcbiAgICAgICAgICAgIHRoaXMucXVldWUuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgYWxsIFJvbGUgb25TdGFydHMgaWYgbm90IGFscmVhZHkgYWN0aXZlXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgbGV0IG51bVJvbGVzID0gdGhpcy5yb2xlcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IHRoaXMucm9sZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHJvbGUuc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZS5zdGFydC5jYWxsKHRoaXMsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgbmV3IGFjdGlvbiBvblN0YXJ0XG4gICAgICAgIGlmICghYWN0aW9uLmlzQWN0aXZlICYmIGFjdGlvbi5vblN0YXJ0KSB7XG4gICAgICAgICAgICBhY3Rpb24ub25TdGFydCh0aGlzLCBhY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuXG4gICAgICAgIGlmICghYWN0aW9uRXhpc3RzKSB7XG4gICAgICAgICAgICBsZXQgQ29udHJvbHMgPSBhY3Rpb24uZ2V0Q29udHJvbHMoKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29udHJvbHModGhpcywgYWN0aW9uLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFBhdXNlIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGVhY2godGhpcy5hY3RpdmVBY3Rpb25zLCAoaWQsIGFjdGlvbikgPT4gYWN0aW9uLmRlYWN0aXZhdGUoKSk7XG4gICAgICAgIHRoaXMucHJvY2Vzcy5zdG9wKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFJlc3VtZSBhbGwgYWN0aXZlIEFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW2ludF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJucyBbQWN0b3JdO1xuICAgICovXG4gICAgcmVzdW1lKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZWFjaCh0aGlzLmFjdGl2ZUFjdGlvbnMsIChpZCwgYWN0aW9uKSA9PiBhY3Rpb24uYWN0aXZhdGUoKSk7XG4gICAgICAgIHRoaXMucHJvY2Vzcy5zdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdG9wIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgZWFjaCh0aGlzLmFjdGl2ZUFjdGlvbnMsIChpZCkgPT4gdGhpcy51bmJpbmRBY3Rpb24oaWQpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVG9nZ2xlIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgPyB0aGlzLnBhdXNlKCkgOiB0aGlzLnJlc3VtZSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN5bmNzIGBlbGVtZW50YCB3aXRoIGN1cnJlbnQgcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHN5bmMoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXMgPSB7fTtcblxuICAgICAgICB1dGlscy5lYWNoKHRoaXMudmFsdWVzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFZhbHVlc1trZXldID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zdGFydChuZXcgQWN0aW9uKHsgdmFsdWVzOiBjdXJyZW50VmFsdWVzIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQWRkIGEgbmV3IEFjdGlvbiB0byB0aGUgcXVldWVcbiAgICAqL1xuICAgIHRoZW4oKSB7XG4gICAgICAgIHRoaXMucXVldWUuYWRkLmFwcGx5KHRoaXMucXVldWUsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEV4ZWN1dGUgbmV4dCBpbiBxdWV1ZVxuICAgICovXG4gICAgbmV4dCgpIHtcbiAgICAgICAgdmFyIG5leHQgPSB0aGlzLnF1ZXVlLm5leHQoKTtcblxuICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuYyhuZXh0WzBdKSkge1xuICAgICAgICAgICAgICAgIG5leHRbMF0oKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIC8vIE9yIHRoaXMgaXMgYW4gYWN0aW9uXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5leHQucHVzaChmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydC5hcHBseSh0aGlzLCBuZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQXNzaWduIFJvbGVzIGJhc2VkIG9uIGVsZW1lbnQgYW5kIG1hbnVhbGx5IHByb3ZpZGVkIHByb3BzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBFbGVtZW50XG4gICAgICAgIEBwYXJhbSBbUm9sZSB8fCBhcnJheV1cbiAgICAgICAgQHBhcmFtIFtib29sZWFuXSAob3B0aW9uYWwpXG4gICAgKi9cbiAgICBhc3NpZ25Sb2xlcyhlbGVtZW50LCBtYW51YWxSb2xlcywgc3VycHJlc3NJbml0KSB7XG4gICAgICAgIC8vIEFsbCBBY3RvcnMgZ2V0IGEgZGVmYXVsdCBSb2xlIHRoYXQgaGFuZGxlcyB1c2VyIGNhbGxiYWNrc1xuICAgICAgICB0aGlzLnJvbGVzID0gWyBkZWZhdWx0Um9sZSBdO1xuXG4gICAgICAgIC8vIEF1dG8tYXNzaWduIGlmIG5vIG1hbnVhbGx5LXNldCBSb2xlc1xuICAgICAgICBpZiAoIW1hbnVhbFJvbGVzICYmIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b0Fzc2lnblJvbGVzKGVsZW1lbnQpO1xuXG4gICAgICAgIC8vIE9yIG1hbnVhbGx5IHNldCBpZiBwcm92aWRlZFxuICAgICAgICB9IGVsc2UgaWYgKG1hbnVhbFJvbGVzKSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNBcnJheShtYW51YWxSb2xlcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2guYXBwbHkodGhpcy5yb2xlcywgbWFudWFsUm9sZXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2gobWFudWFsUm9sZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdXJwcmVzc0luaXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFJvbGVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBdXRvbWF0aWNhbGx5IGFzc2lnbiBSb2xlcyBiYXNlZCBvbiBlbGVtZW50LCBkZXNpZ25lZFxuICAgICAgICB0byBiZSBleHRlbmRlZFxuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogRWxlbWVudFxuICAgICovXG4gICAgYXV0b0Fzc2lnblJvbGVzKGVsZW1lbnQpIHtcbiAgICAgICAgLy8gQWRkIENTUyByb2xlIGlmIEhUTUxFbGVtZW50XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudC50YWdOYW1lID09PSAnc3ZnJykge1xuICAgICAgICAgICAgdGhpcy5yb2xlcy5wdXNoKGNzc1JvbGUpO1xuXG4gICAgICAgIC8vIEFkZCBTVkcgcm9sZSBpZiBTVkcgZWxlbWVudFxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2goc3ZnUm9sZSk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBEcmF3IFBhdGggcm9sZSBpZiBwYXRoIGVsZW1lbnRcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaChkcmF3UGF0aFJvbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgRmlyZSBpbml0IGNhbGxiYWNrc1xuICAgICovXG4gICAgaW5pdFJvbGVzKCkge1xuICAgICAgICAvLyBGaXJlIGluaXQgY2FsbGJhY2tcbiAgICAgICAgdGhpcy5yb2xlcy5mb3JFYWNoKChyb2xlKSA9PiB7XG4gICAgICAgICAgICBpZiAocm9sZS5pbml0KSB7XG4gICAgICAgICAgICAgICAgcm9sZS5pbml0LmNhbGwodGhpcywgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5maXJzdEZyYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzcy5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gYW5kIHJldHVybiBpdHMgdGFibGUgaWRcblxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHJldHVybnMgW2ludF1cbiAgICAqL1xuICAgIGJpbmRBY3Rpb24oYWN0aW9uLCBpZCkge1xuICAgICAgICBpZiAoaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWQgPSB0aGlzLmFjdGlvbkNvdW50ZXIrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5oYXNBY3Rpb24oaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdID0gYWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5udW1BY3RpdmUrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICB1bmJpbmRBY3Rpb24oaWQpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5pbnB1dCAmJiBhY3Rpb24uaW5wdXQuYXV0b1N0b3AgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24uaW5wdXQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aW9uLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIHRoaXMubnVtQWN0aXZlLS07XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5udW1BY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFjdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICB9XG5cbiAgICBoYXNBY3Rpb24oaWQpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldEFjdGlvbihpZCkgIT09IHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIHByb2Nlc3Npbmcgb3JkZXJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl1cbiAgICAqL1xuICAgIHVwZGF0ZU9yZGVyKGtleSwgbW92ZVRvQmFjaywgaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgdmFyIG9yZGVyID0gKCFoYXNDaGlsZHJlbikgPyB0aGlzLmFjdGl2ZVZhbHVlcyA6IHRoaXMuYWN0aXZlUGFyZW50cyxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gb3JkZXIuaW5kZXhPZihrZXkpO1xuXG4gICAgICAgIC8vIElmIGtleSBpc24ndCBsaXN0IG9yIG1vdmVUb0JhY2sgaXMgc2V0IHRvIHRydWUsIGFkZCBrZXlcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAtMSB8fCBtb3ZlVG9CYWNrKSB7XG4gICAgICAgICAgICBvcmRlci5wdXNoKGtleSk7XG5cbiAgICAgICAgICAgIC8vIElmIGtleSBhbHJlYWR5IGV4aXN0cywgcmVtb3ZlXG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPiAtMSkge1xuICAgICAgICAgICAgICAgIG9yZGVyLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBbYm9vbGVhbl06IElzIHRoaXMgQWN0b3IgYWN0aXZlP1xuICAgIGdldCBpc0FjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICAgIH1cblxuICAgIC8vIFNldCBoYXNDaGFuZ2VkIHRvIHRydWUgaXMgdGhpcyBpcyBub3cgYWN0aXZlXG4gICAgc2V0IGlzQWN0aXZlKHN0YXR1cykge1xuICAgICAgICBpZiAoc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSBzdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc0FjdGl2ZSA9IHN0YXR1cztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQWN0b3I7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ==