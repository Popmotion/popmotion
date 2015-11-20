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
        this.process = new Process(this, { update: update, render: render, postRender: postRender });
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
                action.onStart(this, action);
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
            this.start(new Action({ values: this.values }));
            return this;
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
                var action = this.activeActions[id];
                if (action.input && action.input.autoStop === true) {
                    action.input.stop();
                }
                this.numActive--;
                delete this.activeActions[id];
            }

            if (!this.numActive) {
                this.pause();
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
        }

        // Set hasChanged to true is this is now active
        ,
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
//# sourceMappingURL=data:application/json;base64,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QUU7QUFDL0IscUJBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7QUFBQyxBQUdoQixvQkFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDZix5QkFBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzdCO2FBQ0o7U0FDSjs7Ozs7OzRCQUdjO0FBQ1gsbUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN6Qjs7OzswQkFHWSxNQUFNLEVBQUU7QUFDakIsZ0JBQUksTUFBTSxLQUFLLElBQUksRUFBRTtBQUNqQixvQkFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7YUFDNUI7O0FBRUQsZ0JBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1NBQzNCOzs7V0FyV0MsS0FBSzs7O0FBd1dYLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIiwiZmlsZSI6IkFjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByb2Nlc3MgPSByZXF1aXJlKCcuLi9wcm9jZXNzL1Byb2Nlc3MnKSxcbiAgICBRdWV1ZSA9IHJlcXVpcmUoJy4uL2luYy9RdWV1ZScpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgc2VsZWN0ID0gcmVxdWlyZSgnLi4vaW5jL3NlbGVjdC1kb20nKSxcbiAgICB2YWx1ZU9wcyA9IHJlcXVpcmUoJy4vdmFsdWUtb3BlcmF0aW9ucycpLFxuXG4gICAgLypcbiAgICAgICAgUHJvY2VzcyBtZXRob2RzXG4gICAgKi9cbiAgICB1cGRhdGUgPSByZXF1aXJlKCcuL3VwZGF0ZScpLFxuICAgIHJlbmRlciA9IHJlcXVpcmUoJy4vcmVuZGVyJyksXG4gICAgcG9zdFJlbmRlciA9IHJlcXVpcmUoJy4vcG9zdC1yZW5kZXInKSxcblxuICAgIC8qXG4gICAgICAgIFJvbGUgaW1wb3J0c1xuICAgICovXG4gICAgZGVmYXVsdFJvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9kZWZhdWx0Um9sZScpLFxuICAgIGNzc1JvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9jc3MvY3NzUm9sZScpLFxuICAgIHN2Z1JvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9zdmcvc3ZnUm9sZScpLFxuICAgIGRyYXdQYXRoUm9sZSA9IHJlcXVpcmUoJy4uL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlJyksXG5cbiAgICBBY3Rpb24gPSByZXF1aXJlKCcuLi9hY3Rpb25zL0FjdGlvbicpLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoO1xuXG5jbGFzcyBBY3RvciB7XG5cbiAgICAvKlxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgICAgICB2YXIgcHJvcHMgPSB1dGlscy5pc1N0cmluZyhvcHRzKSA/IHsgZWxlbWVudDogb3B0cyB9IDogb3B0cztcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlID0geyB2YWx1ZXM6IHt9IH07XG4gICAgICAgIHRoaXMucXVldWUgPSBuZXcgUXVldWUoKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzID0gbmV3IFByb2Nlc3ModGhpcywgeyB1cGRhdGUsIHJlbmRlciwgcG9zdFJlbmRlciB9KTtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMubnVtQWN0aXZlID0gMDtcbiAgICAgICAgdGhpcy5hY3Rpb25Db3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5hY3RpdmVWYWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVQYXJlbnRzID0gW107XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyBHZXQgYWN0dWFsIGVsZW1lbnRzIGlmIHRoaXMgaXMgYSBzZWxlY3RvclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocHJvcHMuZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHByb3BzLmVsZW1lbnQgPSBzZWxlY3QocHJvcHMuZWxlbWVudClbMF07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFzc2lnblJvbGVzKHByb3BzLmVsZW1lbnQsIHByb3BzLmFzLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuICAgICAgICB0aGlzLmluaXRSb2xlcygpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFNldCBBY3RvciBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHJldHVybnMgW0FjdG9yXVxuICAgICovXG4gICAgc2V0KG9wdHMpIHtcbiAgICAgICAgZWFjaChvcHRzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3ZhbHVlcycgJiYga2V5ICE9PSAnYWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAob3B0cyAmJiBvcHRzLnZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZU9wcy5wcm9jZXNzKHRoaXMudmFsdWVzLCBvcHRzLnZhbHVlcywgb3B0cywgJ2N1cnJlbnQnLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGFsbCBhY3RpdmUgYWN0aW9ucyBmb3IgYW55IHRoYXQgY2FuIGJlIHJlbW92ZWRcbiAgICAgICAgZWFjaCh0aGlzLmFjdGl2ZUFjdGlvbnMsIChpZCwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBsZXQgYWN0aW9uSXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgZWFjaCh0aGlzLnZhbHVlcywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBhY3Rpb25Jc0FjdGl2ZSA9ICh2YWx1ZS5hY3Rpb24gPT09IGFjdGlvbikgPyB0cnVlIDogYWN0aW9uSXNBY3RpdmU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFhY3Rpb25Jc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kQWN0aW9uKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24tc3BlY2lmaWMgY29udHJvbHMgdG8gQWN0b3JcblxuICAgICAgICBAcmV0dXJucyBbQ29udHJvbHNdXG4gICAgKi9cbiAgICBjb250cm9scyhhY3Rpb24pIHtcbiAgICAgICAgdmFyIENvbnRyb2xzID0gYWN0aW9uLmdldENvbnRyb2xzKCk7XG4gICAgICAgIHJldHVybiBuZXcgQ29udHJvbHModGhpcywgYWN0aW9uLmdldFBsYXlhYmxlKCkpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN0YXJ0IGEgbmV3IEFjdGlvblxuXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uIHx8IG51bWJlcl1cbiAgICAgICAgQHBhcmFtIFtJbnB1dCB8fCBldmVudF0gKG9wdGlvbmFsKVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dIChvcHRpb25hbCk6IGRlZmluZWQgYHRydWVgIGlmIHdlIHN1cnByZXNzIG1ha2luZyBuZXcgcXVldWVcbiAgICAgICAgQHJldHVybnMgW0NvbnRyb2xzXVxuICAgICovXG4gICAgc3RhcnQodG9TZXQsIGlucHV0KSB7XG4gICAgICAgIGxldCBhY3Rpb25FeGlzdHMgPSB1dGlscy5pc051bSh0b1NldCksXG4gICAgICAgICAgICBhY3Rpb24gPSAoYWN0aW9uRXhpc3RzKSA/IHRoaXMuZ2V0QWN0aW9uKHRvU2V0KSA6IHRvU2V0LmdldFBsYXlhYmxlKCksXG4gICAgICAgICAgICBvcHRzID0gYWN0aW9uLmdldFNldCgpLFxuICAgICAgICAgICAgc3VycHJlc3NRdWV1ZUNsZWFyID0gKGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0gPT09IGZhbHNlKTtcblxuICAgICAgICBvcHRzLmFjdGlvbiA9IGFjdGlvbjtcblxuICAgICAgICB0aGlzLnNldChvcHRzKTtcblxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgIGFjdGlvbi5iaW5kSW5wdXQoaW5wdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdXJwcmVzc1F1ZXVlQ2xlYXIpIHtcbiAgICAgICAgICAgIHRoaXMucXVldWUuY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgYWxsIFJvbGUgb25TdGFydHMgaWYgbm90IGFscmVhZHkgYWN0aXZlXG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgbGV0IG51bVJvbGVzID0gdGhpcy5yb2xlcy5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvbGVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcm9sZSA9IHRoaXMucm9sZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHJvbGUuc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZS5zdGFydC5jYWxsKHRoaXMsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcmUgbmV3IGFjdGlvbiBvblN0YXJ0XG4gICAgICAgIGlmICghYWN0aW9uLmlzQWN0aXZlICYmIGFjdGlvbi5vblN0YXJ0KSB7XG4gICAgICAgICAgICBhY3Rpb24ub25TdGFydCh0aGlzLCBhY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3RpdmF0ZSgpO1xuXG4gICAgICAgIGlmICghYWN0aW9uRXhpc3RzKSB7XG4gICAgICAgICAgICBsZXQgQ29udHJvbHMgPSBhY3Rpb24uZ2V0Q29udHJvbHMoKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29udHJvbHModGhpcywgYWN0aW9uLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFBhdXNlIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGVhY2godGhpcy5hY3RpdmVBY3Rpb25zLCAoaWQsIGFjdGlvbikgPT4gYWN0aW9uLmRlYWN0aXZhdGUoKSk7XG4gICAgICAgIHRoaXMucHJvY2Vzcy5zdG9wKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFJlc3VtZSBhbGwgYWN0aXZlIEFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW2ludF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJucyBbQWN0b3JdO1xuICAgICovXG4gICAgcmVzdW1lKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZWFjaCh0aGlzLmFjdGl2ZUFjdGlvbnMsIChpZCwgYWN0aW9uKSA9PiBhY3Rpb24uYWN0aXZhdGUoKSk7XG4gICAgICAgIHRoaXMucHJvY2Vzcy5zdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdG9wIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgZWFjaCh0aGlzLmFjdGl2ZUFjdGlvbnMsIChpZCkgPT4gdGhpcy51bmJpbmRBY3Rpb24oaWQpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVG9nZ2xlIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgPyB0aGlzLnBhdXNlKCkgOiB0aGlzLnJlc3VtZSgpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN5bmNzIGBlbGVtZW50YCB3aXRoIGN1cnJlbnQgcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl1cbiAgICAqL1xuICAgIHN5bmMoKSB7XG4gICAgICAgIHRoaXMuc3RhcnQobmV3IEFjdGlvbih7IHZhbHVlczogdGhpcy52YWx1ZXMgfSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBZGQgYSBuZXcgQWN0aW9uIHRvIHRoZSBxdWV1ZVxuICAgICovXG4gICAgdGhlbigpIHtcbiAgICAgICAgdGhpcy5xdWV1ZS5hZGQuYXBwbHkodGhpcy5xdWV1ZSwgYXJndW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgRXhlY3V0ZSBuZXh0IGluIHF1ZXVlXG4gICAgKi9cbiAgICBuZXh0KCkge1xuICAgICAgICB2YXIgbmV4dCA9IHRoaXMucXVldWUubmV4dCgpO1xuXG4gICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jKG5leHRbMF0pKSB7XG4gICAgICAgICAgICAgICAgbmV4dFswXSgpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgLy8gT3IgdGhpcyBpcyBhbiBhY3Rpb25cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV4dC5wdXNoKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0LmFwcGx5KHRoaXMsIG5leHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBc3NpZ24gUm9sZXMgYmFzZWQgb24gZWxlbWVudCBhbmQgbWFudWFsbHkgcHJvdmlkZWQgcHJvcHNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEVsZW1lbnRcbiAgICAgICAgQHBhcmFtIFtSb2xlIHx8IGFycmF5XVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dIChvcHRpb25hbClcbiAgICAqL1xuICAgIGFzc2lnblJvbGVzKGVsZW1lbnQsIG1hbnVhbFJvbGVzLCBzdXJwcmVzc0luaXQpIHtcbiAgICAgICAgLy8gQWxsIEFjdG9ycyBnZXQgYSBkZWZhdWx0IFJvbGUgdGhhdCBoYW5kbGVzIHVzZXIgY2FsbGJhY2tzXG4gICAgICAgIHRoaXMucm9sZXMgPSBbIGRlZmF1bHRSb2xlIF07XG5cbiAgICAgICAgLy8gQXV0by1hc3NpZ24gaWYgbm8gbWFudWFsbHktc2V0IFJvbGVzXG4gICAgICAgIGlmICghbWFudWFsUm9sZXMgJiYgZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5hdXRvQXNzaWduUm9sZXMoZWxlbWVudCk7XG5cbiAgICAgICAgLy8gT3IgbWFudWFsbHkgc2V0IGlmIHByb3ZpZGVkXG4gICAgICAgIH0gZWxzZSBpZiAobWFudWFsUm9sZXMpIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0FycmF5KG1hbnVhbFJvbGVzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaC5hcHBseSh0aGlzLnJvbGVzLCBtYW51YWxSb2xlcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaChtYW51YWxSb2xlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN1cnByZXNzSW5pdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0Um9sZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEF1dG9tYXRpY2FsbHkgYXNzaWduIFJvbGVzIGJhc2VkIG9uIGVsZW1lbnQsIGRlc2lnbmVkXG4gICAgICAgIHRvIGJlIGV4dGVuZGVkXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBFbGVtZW50XG4gICAgKi9cbiAgICBhdXRvQXNzaWduUm9sZXMoZWxlbWVudCkge1xuICAgICAgICAvLyBBZGQgQ1NTIHJvbGUgaWYgSFRNTEVsZW1lbnRcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdzdmcnKSB7XG4gICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2goY3NzUm9sZSk7XG5cbiAgICAgICAgLy8gQWRkIFNWRyByb2xlIGlmIFNWRyBlbGVtZW50XG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaChzdmdSb2xlKTtcblxuICAgICAgICAgICAgLy8gQWRkIERyYXcgUGF0aCByb2xlIGlmIHBhdGggZWxlbWVudFxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2xlcy5wdXNoKGRyYXdQYXRoUm9sZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBGaXJlIGluaXQgY2FsbGJhY2tzXG4gICAgKi9cbiAgICBpbml0Um9sZXMoKSB7XG4gICAgICAgIC8vIEZpcmUgaW5pdCBjYWxsYmFja1xuICAgICAgICB0aGlzLnJvbGVzLmZvckVhY2goKHJvbGUpID0+IHtcbiAgICAgICAgICAgIGlmIChyb2xlLmluaXQpIHtcbiAgICAgICAgICAgICAgICByb2xlLmluaXQuY2FsbCh0aGlzLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZpcnN0RnJhbWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBCaW5kIEFjdGlvbiBhbmQgcmV0dXJuIGl0cyB0YWJsZSBpZFxuXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICBAcmV0dXJucyBbaW50XVxuICAgICovXG4gICAgYmluZEFjdGlvbihhY3Rpb24sIGlkKSB7XG4gICAgICAgIGlmIChpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZCA9IHRoaXMuYWN0aW9uQ291bnRlcisrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc0FjdGlvbihpZCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF0gPSBhY3Rpb247XG4gICAgICAgICAgICB0aGlzLm51bUFjdGl2ZSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIHVuYmluZEFjdGlvbihpZCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgICAgICAgbGV0IGFjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG4gICAgICAgICAgICBpZiAoYWN0aW9uLmlucHV0ICYmIGFjdGlvbi5pbnB1dC5hdXRvU3RvcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbi5pbnB1dC5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm51bUFjdGl2ZS0tO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMubnVtQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBY3Rpb24oaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG4gICAgfVxuXG4gICAgaGFzQWN0aW9uKGlkKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5nZXRBY3Rpb24oaWQpICE9PSB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFVwZGF0ZSBwcm9jZXNzaW5nIG9yZGVyXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ11cbiAgICAgICAgQHBhcmFtIFtib29sZWFuXVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dXG4gICAgKi9cbiAgICB1cGRhdGVPcmRlcihrZXksIG1vdmVUb0JhY2ssIGhhc0NoaWxkcmVuKSB7XG4gICAgICAgIHZhciBvcmRlciA9ICghaGFzQ2hpbGRyZW4pID8gdGhpcy5hY3RpdmVWYWx1ZXMgOiB0aGlzLmFjdGl2ZVBhcmVudHMsXG4gICAgICAgICAgICBwb3NpdGlvbiA9IG9yZGVyLmluZGV4T2Yoa2V5KTtcblxuICAgICAgICAvLyBJZiBrZXkgaXNuJ3QgbGlzdCBvciBtb3ZlVG9CYWNrIGlzIHNldCB0byB0cnVlLCBhZGQga2V5XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gLTEgfHwgbW92ZVRvQmFjaykge1xuICAgICAgICAgICAgb3JkZXIucHVzaChrZXkpO1xuXG4gICAgICAgICAgICAvLyBJZiBrZXkgYWxyZWFkeSBleGlzdHMsIHJlbW92ZVxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uID4gLTEpIHtcbiAgICAgICAgICAgICAgICBvcmRlci5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gW2Jvb2xlYW5dOiBJcyB0aGlzIEFjdG9yIGFjdGl2ZT9cbiAgICBnZXQgaXNBY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0FjdGl2ZTtcbiAgICB9XG5cbiAgICAvLyBTZXQgaGFzQ2hhbmdlZCB0byB0cnVlIGlzIHRoaXMgaXMgbm93IGFjdGl2ZVxuICAgIHNldCBpc0FjdGl2ZShzdGF0dXMpIHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gc3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faXNBY3RpdmUgPSBzdGF0dXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFjdG9yO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXX0=