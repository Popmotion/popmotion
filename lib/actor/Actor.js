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
        this.start(new Action({ values: this.values }));
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
//# sourceMappingURL=data:application/json;base64,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LEVBQUUsRUFBRTtBQUNWLGVBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNqQzs7QUEvVEMsU0FBSyxXQWlVUCxTQUFTLHNCQUFDLEVBQUUsRUFBRTtBQUNWLGVBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsS0FBSyxTQUFTLENBQUU7S0FDN0M7Ozs7Ozs7Ozs7QUFuVUMsU0FBSyxXQTRVUCxXQUFXLHdCQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFO0FBQ3RDLFlBQUksS0FBSyxHQUFHLEFBQUMsQ0FBQyxXQUFXLEdBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYTtZQUMvRCxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7OztBQUFDLEFBR2xDLFlBQUksUUFBUSxLQUFLLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRTtBQUMvQixpQkFBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7OztBQUFDLEFBR2hCLGdCQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNmLHFCQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM3QjtTQUNKO0tBQ0o7Ozs7aUJBelZDLEtBQUs7O3lCQTRWUTtBQUNYLG1CQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDekI7Ozs7dUJBR1ksTUFBTSxFQUFFO0FBQ2pCLGdCQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7QUFDakIsb0JBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO2FBQzVCOztBQUVELGdCQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUMzQjs7O1dBdldDLEtBQUs7OztBQTBXWCxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyIsImZpbGUiOiJBY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQcm9jZXNzID0gcmVxdWlyZSgnLi4vcHJvY2Vzcy9Qcm9jZXNzJyksXG4gICAgUXVldWUgPSByZXF1aXJlKCcuLi9pbmMvUXVldWUnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIHNlbGVjdCA9IHJlcXVpcmUoJy4uL2luYy9zZWxlY3QtZG9tJyksXG4gICAgdmFsdWVPcHMgPSByZXF1aXJlKCcuL3ZhbHVlLW9wZXJhdGlvbnMnKSxcblxuICAgIC8qXG4gICAgICAgIFByb2Nlc3MgbWV0aG9kc1xuICAgICovXG4gICAgdXBkYXRlID0gcmVxdWlyZSgnLi91cGRhdGUnKSxcbiAgICByZW5kZXIgPSByZXF1aXJlKCcuL3JlbmRlcicpLFxuICAgIHBvc3RSZW5kZXIgPSByZXF1aXJlKCcuL3Bvc3QtcmVuZGVyJyksXG5cbiAgICAvKlxuICAgICAgICBSb2xlIGltcG9ydHNcbiAgICAqL1xuICAgIGRlZmF1bHRSb2xlID0gcmVxdWlyZSgnLi4vcm9sZXMvZGVmYXVsdFJvbGUnKSxcbiAgICBjc3NSb2xlID0gcmVxdWlyZSgnLi4vcm9sZXMvY3NzL2Nzc1JvbGUnKSxcbiAgICBzdmdSb2xlID0gcmVxdWlyZSgnLi4vcm9sZXMvc3ZnL3N2Z1JvbGUnKSxcbiAgICBkcmF3UGF0aFJvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9wYXRoL2RyYXdQYXRoUm9sZScpLFxuXG4gICAgQWN0aW9uID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9BY3Rpb24nKSxcbiAgICBlYWNoID0gdXRpbHMuZWFjaDtcblxuY2xhc3MgQWN0b3Ige1xuXG4gICAgLypcbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcbiAgICAgICAgbGV0IHByb3BzID0gdXRpbHMuaXNTdHJpbmcob3B0cykgPyB7IGVsZW1lbnQ6IG9wdHMgfSA6IG9wdHM7XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWVzOiB7fSB9O1xuICAgICAgICB0aGlzLnF1ZXVlID0gbmV3IFF1ZXVlKCk7XG4gICAgICAgIHRoaXMucHJvY2VzcyA9IG5ldyBQcm9jZXNzKHsgdXBkYXRlLCByZW5kZXIsIHBvc3RSZW5kZXIgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLm51bUFjdGl2ZSA9IDA7XG4gICAgICAgIHRoaXMuYWN0aW9uQ291bnRlciA9IDA7XG4gICAgICAgIHRoaXMuYWN0aXZlVmFsdWVzID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZlUGFyZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gR2V0IGFjdHVhbCBlbGVtZW50cyBpZiB0aGlzIGlzIGEgc2VsZWN0b3JcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHByb3BzLmVsZW1lbnQpKSB7XG4gICAgICAgICAgICBwcm9wcy5lbGVtZW50ID0gc2VsZWN0KHByb3BzLmVsZW1lbnQpWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hc3NpZ25Sb2xlcyhwcm9wcy5lbGVtZW50LCBwcm9wcy5hcywgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0KHByb3BzKTtcbiAgICAgICAgdGhpcy5pbml0Um9sZXMoKTtcbiAgICAgICAgdGhpcy5zeW5jKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU2V0IEFjdG9yIHByb3BlcnRpZXMgYW5kIHZhbHVlc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcmV0dXJucyBbQWN0b3JdXG4gICAgKi9cbiAgICBzZXQob3B0cykge1xuICAgICAgICBlYWNoKG9wdHMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAndmFsdWVzJyAmJiBrZXkgIT09ICdhY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChvcHRzICYmIG9wdHMudmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlT3BzLnByb2Nlc3ModGhpcy52YWx1ZXMsIG9wdHMudmFsdWVzLCBvcHRzLCAnY3VycmVudCcsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgYWxsIGFjdGl2ZSBhY3Rpb25zIGZvciBhbnkgdGhhdCBjYW4gYmUgcmVtb3ZlZFxuICAgICAgICBlYWNoKHRoaXMuYWN0aXZlQWN0aW9ucywgKGlkLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGxldCBhY3Rpb25Jc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBlYWNoKHRoaXMudmFsdWVzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGFjdGlvbklzQWN0aXZlID0gKHZhbHVlLmFjdGlvbiA9PT0gYWN0aW9uKSA/IHRydWUgOiBhY3Rpb25Jc0FjdGl2ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWFjdGlvbklzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bmJpbmRBY3Rpb24oaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBCaW5kIEFjdGlvbi1zcGVjaWZpYyBjb250cm9scyB0byBBY3RvclxuXG4gICAgICAgIEByZXR1cm5zIFtDb250cm9sc11cbiAgICAqL1xuICAgIGNvbnRyb2xzKGFjdGlvbikge1xuICAgICAgICBjb25zdCBDb250cm9scyA9IGFjdGlvbi5nZXRDb250cm9scygpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnRyb2xzKHRoaXMsIGFjdGlvbi5nZXRQbGF5YWJsZSgpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBhIG5ldyBBY3Rpb25cblxuICAgICAgICBAcGFyYW0gW0FjdGlvbiB8fCBudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbSW5wdXQgfHwgZXZlbnRdIChvcHRpb25hbClcbiAgICAgICAgQHBhcmFtIFtib29sZWFuXSAob3B0aW9uYWwpOiBkZWZpbmVkIGB0cnVlYCBpZiB3ZSBzdXJwcmVzcyBtYWtpbmcgbmV3IHF1ZXVlXG4gICAgICAgIEByZXR1cm5zIFtDb250cm9sc11cbiAgICAqL1xuICAgIHN0YXJ0KHRvU2V0LCBpbnB1dCkge1xuICAgICAgICBsZXQgYWN0aW9uRXhpc3RzID0gdXRpbHMuaXNOdW0odG9TZXQpO1xuICAgICAgICBsZXQgYWN0aW9uID0gKGFjdGlvbkV4aXN0cykgPyB0aGlzLmdldEFjdGlvbih0b1NldCkgOiB0b1NldC5nZXRQbGF5YWJsZSgpO1xuICAgICAgICBsZXQgb3B0cyA9IGFjdGlvbi5nZXRTZXQoKTtcbiAgICAgICAgbGV0IHN1cnByZXNzUXVldWVDbGVhciA9IChhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID09PSBmYWxzZSk7XG5cbiAgICAgICAgb3B0cy5hY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgICAgdGhpcy5zZXQob3B0cyk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICBhY3Rpb24uYmluZElucHV0KGlucHV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3VycHJlc3NRdWV1ZUNsZWFyKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlLmNsZWFyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIGFsbCBSb2xlIG9uU3RhcnRzIGlmIG5vdCBhbHJlYWR5IGFjdGl2ZVxuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIGxldCBudW1Sb2xlcyA9IHRoaXMucm9sZXMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Sb2xlczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvbGUgPSB0aGlzLnJvbGVzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChyb2xlLnN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGUuc3RhcnQuY2FsbCh0aGlzLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIG5ldyBhY3Rpb24gb25TdGFydFxuICAgICAgICBpZiAoIWFjdGlvbi5pc0FjdGl2ZSAmJiBhY3Rpb24ub25TdGFydCkge1xuICAgICAgICAgICAgYWN0aW9uLm9uU3RhcnQodGhpcywgYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcblxuICAgICAgICBpZiAoIWFjdGlvbkV4aXN0cykge1xuICAgICAgICAgICAgbGV0IENvbnRyb2xzID0gYWN0aW9uLmdldENvbnRyb2xzKCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbnRyb2xzKHRoaXMsIGFjdGlvbiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBQYXVzZSBhbGwgYWN0aXZlIEFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW2ludF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJucyBbQWN0b3JdXG4gICAgKi9cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBlYWNoKHRoaXMuYWN0aXZlQWN0aW9ucywgKGlkLCBhY3Rpb24pID0+IGFjdGlvbi5kZWFjdGl2YXRlKCkpO1xuICAgICAgICB0aGlzLnByb2Nlc3Muc3RvcCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBSZXN1bWUgYWxsIGFjdGl2ZSBBY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtpbnRdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybnMgW0FjdG9yXTtcbiAgICAqL1xuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIGVhY2godGhpcy5hY3RpdmVBY3Rpb25zLCAoaWQsIGFjdGlvbikgPT4gYWN0aW9uLmFjdGl2YXRlKCkpO1xuICAgICAgICB0aGlzLnByb2Nlc3Muc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU3RvcCBhbGwgYWN0aXZlIEFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW2ludF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJucyBbQWN0b3JdXG4gICAgKi9cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIGVhY2godGhpcy5hY3RpdmVBY3Rpb25zLCAoaWQpID0+IHRoaXMudW5iaW5kQWN0aW9uKGlkKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFRvZ2dsZSBhbGwgYWN0aXZlIEFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW2ludF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJucyBbQWN0b3JdXG4gICAgKi9cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQWN0aXZlID8gdGhpcy5wYXVzZSgpIDogdGhpcy5yZXN1bWUoKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTeW5jcyBgZWxlbWVudGAgd2l0aCBjdXJyZW50IHByb3BlcnRpZXNcblxuICAgICAgICBAcmV0dXJucyBbQWN0b3JdXG4gICAgKi9cbiAgICBzeW5jKCkge1xuICAgICAgICB0aGlzLnN0YXJ0KG5ldyBBY3Rpb24oeyB2YWx1ZXM6IHRoaXMudmFsdWVzIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQWRkIGEgbmV3IEFjdGlvbiB0byB0aGUgcXVldWVcbiAgICAqL1xuICAgIHRoZW4oKSB7XG4gICAgICAgIHRoaXMucXVldWUuYWRkLmFwcGx5KHRoaXMucXVldWUsIGFyZ3VtZW50cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEV4ZWN1dGUgbmV4dCBpbiBxdWV1ZVxuICAgICovXG4gICAgbmV4dCgpIHtcbiAgICAgICAgdmFyIG5leHQgPSB0aGlzLnF1ZXVlLm5leHQoKTtcblxuICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuYyhuZXh0WzBdKSkge1xuICAgICAgICAgICAgICAgIG5leHRbMF0oKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIC8vIE9yIHRoaXMgaXMgYW4gYWN0aW9uXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5leHQucHVzaChmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydC5hcHBseSh0aGlzLCBuZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQXNzaWduIFJvbGVzIGJhc2VkIG9uIGVsZW1lbnQgYW5kIG1hbnVhbGx5IHByb3ZpZGVkIHByb3BzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBFbGVtZW50XG4gICAgICAgIEBwYXJhbSBbUm9sZSB8fCBhcnJheV1cbiAgICAgICAgQHBhcmFtIFtib29sZWFuXSAob3B0aW9uYWwpXG4gICAgKi9cbiAgICBhc3NpZ25Sb2xlcyhlbGVtZW50LCBtYW51YWxSb2xlcywgc3VycHJlc3NJbml0KSB7XG4gICAgICAgIC8vIEFsbCBBY3RvcnMgZ2V0IGEgZGVmYXVsdCBSb2xlIHRoYXQgaGFuZGxlcyB1c2VyIGNhbGxiYWNrc1xuICAgICAgICB0aGlzLnJvbGVzID0gWyBkZWZhdWx0Um9sZSBdO1xuXG4gICAgICAgIC8vIEF1dG8tYXNzaWduIGlmIG5vIG1hbnVhbGx5LXNldCBSb2xlc1xuICAgICAgICBpZiAoIW1hbnVhbFJvbGVzICYmIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b0Fzc2lnblJvbGVzKGVsZW1lbnQpO1xuXG4gICAgICAgIC8vIE9yIG1hbnVhbGx5IHNldCBpZiBwcm92aWRlZFxuICAgICAgICB9IGVsc2UgaWYgKG1hbnVhbFJvbGVzKSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNBcnJheShtYW51YWxSb2xlcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2guYXBwbHkodGhpcy5yb2xlcywgbWFudWFsUm9sZXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2gobWFudWFsUm9sZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdXJwcmVzc0luaXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFJvbGVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBdXRvbWF0aWNhbGx5IGFzc2lnbiBSb2xlcyBiYXNlZCBvbiBlbGVtZW50LCBkZXNpZ25lZFxuICAgICAgICB0byBiZSBleHRlbmRlZFxuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogRWxlbWVudFxuICAgICovXG4gICAgYXV0b0Fzc2lnblJvbGVzKGVsZW1lbnQpIHtcbiAgICAgICAgLy8gQWRkIENTUyByb2xlIGlmIEhUTUxFbGVtZW50XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudC50YWdOYW1lID09PSAnc3ZnJykge1xuICAgICAgICAgICAgdGhpcy5yb2xlcy5wdXNoKGNzc1JvbGUpO1xuXG4gICAgICAgIC8vIEFkZCBTVkcgcm9sZSBpZiBTVkcgZWxlbWVudFxuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2goc3ZnUm9sZSk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBEcmF3IFBhdGggcm9sZSBpZiBwYXRoIGVsZW1lbnRcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaChkcmF3UGF0aFJvbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgRmlyZSBpbml0IGNhbGxiYWNrc1xuICAgICovXG4gICAgaW5pdFJvbGVzKCkge1xuICAgICAgICAvLyBGaXJlIGluaXQgY2FsbGJhY2tcbiAgICAgICAgdGhpcy5yb2xlcy5mb3JFYWNoKChyb2xlKSA9PiB7XG4gICAgICAgICAgICBpZiAocm9sZS5pbml0KSB7XG4gICAgICAgICAgICAgICAgcm9sZS5pbml0LmNhbGwodGhpcywgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5maXJzdEZyYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzcy5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gYW5kIHJldHVybiBpdHMgdGFibGUgaWRcblxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHJldHVybnMgW2ludF1cbiAgICAqL1xuICAgIGJpbmRBY3Rpb24oYWN0aW9uLCBpZCkge1xuICAgICAgICBpZiAoaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWQgPSB0aGlzLmFjdGlvbkNvdW50ZXIrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5oYXNBY3Rpb24oaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdID0gYWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5udW1BY3RpdmUrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICB1bmJpbmRBY3Rpb24oaWQpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5pbnB1dCAmJiBhY3Rpb24uaW5wdXQuYXV0b1N0b3AgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24uaW5wdXQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aW9uLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIHRoaXMubnVtQWN0aXZlLS07XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5udW1BY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFjdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICB9XG5cbiAgICBoYXNBY3Rpb24oaWQpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldEFjdGlvbihpZCkgIT09IHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIHByb2Nlc3Npbmcgb3JkZXJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl1cbiAgICAqL1xuICAgIHVwZGF0ZU9yZGVyKGtleSwgbW92ZVRvQmFjaywgaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgdmFyIG9yZGVyID0gKCFoYXNDaGlsZHJlbikgPyB0aGlzLmFjdGl2ZVZhbHVlcyA6IHRoaXMuYWN0aXZlUGFyZW50cyxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gb3JkZXIuaW5kZXhPZihrZXkpO1xuXG4gICAgICAgIC8vIElmIGtleSBpc24ndCBsaXN0IG9yIG1vdmVUb0JhY2sgaXMgc2V0IHRvIHRydWUsIGFkZCBrZXlcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAtMSB8fCBtb3ZlVG9CYWNrKSB7XG4gICAgICAgICAgICBvcmRlci5wdXNoKGtleSk7XG5cbiAgICAgICAgICAgIC8vIElmIGtleSBhbHJlYWR5IGV4aXN0cywgcmVtb3ZlXG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPiAtMSkge1xuICAgICAgICAgICAgICAgIG9yZGVyLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBbYm9vbGVhbl06IElzIHRoaXMgQWN0b3IgYWN0aXZlP1xuICAgIGdldCBpc0FjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICAgIH1cblxuICAgIC8vIFNldCBoYXNDaGFuZ2VkIHRvIHRydWUgaXMgdGhpcyBpcyBub3cgYWN0aXZlXG4gICAgc2V0IGlzQWN0aXZlKHN0YXR1cykge1xuICAgICAgICBpZiAoc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSBzdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc0FjdGl2ZSA9IHN0YXR1cztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQWN0b3I7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ==