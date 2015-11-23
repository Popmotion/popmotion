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
//# sourceMappingURL=data:application/json;base64,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QVEsS0FBSyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUU7QUFDL0IscUJBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7QUFBQyxBQUdoQixvQkFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDZix5QkFBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzdCO2FBQ0o7U0FDSjs7Ozs7OzRCQUdjO0FBQ1gsbUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN6Qjs7OzswQkFHWSxNQUFNLEVBQUU7QUFDakIsZ0JBQUksTUFBTSxLQUFLLElBQUksRUFBRTtBQUNqQixvQkFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7YUFDNUI7O0FBRUQsZ0JBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1NBQzNCOzs7V0FyV0MsS0FBSzs7O0FBd1dYLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDIiwiZmlsZSI6IkFjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFByb2Nlc3MgPSByZXF1aXJlKCcuLi9wcm9jZXNzL1Byb2Nlc3MnKSxcbiAgICBRdWV1ZSA9IHJlcXVpcmUoJy4uL2luYy9RdWV1ZScpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgc2VsZWN0ID0gcmVxdWlyZSgnLi4vaW5jL3NlbGVjdC1kb20nKSxcbiAgICB2YWx1ZU9wcyA9IHJlcXVpcmUoJy4vdmFsdWUtb3BlcmF0aW9ucycpLFxuXG4gICAgLypcbiAgICAgICAgUHJvY2VzcyBtZXRob2RzXG4gICAgKi9cbiAgICB1cGRhdGUgPSByZXF1aXJlKCcuL3VwZGF0ZScpLFxuICAgIHJlbmRlciA9IHJlcXVpcmUoJy4vcmVuZGVyJyksXG4gICAgcG9zdFJlbmRlciA9IHJlcXVpcmUoJy4vcG9zdC1yZW5kZXInKSxcblxuICAgIC8qXG4gICAgICAgIFJvbGUgaW1wb3J0c1xuICAgICovXG4gICAgZGVmYXVsdFJvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9kZWZhdWx0Um9sZScpLFxuICAgIGNzc1JvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9jc3MvY3NzUm9sZScpLFxuICAgIHN2Z1JvbGUgPSByZXF1aXJlKCcuLi9yb2xlcy9zdmcvc3ZnUm9sZScpLFxuICAgIGRyYXdQYXRoUm9sZSA9IHJlcXVpcmUoJy4uL3JvbGVzL3BhdGgvZHJhd1BhdGhSb2xlJyksXG5cbiAgICBBY3Rpb24gPSByZXF1aXJlKCcuLi9hY3Rpb25zL0FjdGlvbicpLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoO1xuXG5jbGFzcyBBY3RvciB7XG5cbiAgICAvKlxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuICAgICAgICBsZXQgcHJvcHMgPSB1dGlscy5pc1N0cmluZyhvcHRzKSA/IHsgZWxlbWVudDogb3B0cyB9IDogb3B0cztcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnN0YXRlID0geyB2YWx1ZXM6IHt9IH07XG4gICAgICAgIHRoaXMucXVldWUgPSBuZXcgUXVldWUoKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzID0gbmV3IFByb2Nlc3MoeyB1cGRhdGUsIHJlbmRlciwgcG9zdFJlbmRlciB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMubnVtQWN0aXZlID0gMDtcbiAgICAgICAgdGhpcy5hY3Rpb25Db3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5hY3RpdmVWYWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVQYXJlbnRzID0gW107XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyBHZXQgYWN0dWFsIGVsZW1lbnRzIGlmIHRoaXMgaXMgYSBzZWxlY3RvclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocHJvcHMuZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHByb3BzLmVsZW1lbnQgPSBzZWxlY3QocHJvcHMuZWxlbWVudClbMF07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFzc2lnblJvbGVzKHByb3BzLmVsZW1lbnQsIHByb3BzLmFzLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuICAgICAgICB0aGlzLmluaXRSb2xlcygpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFNldCBBY3RvciBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHJldHVybnMgW0FjdG9yXVxuICAgICovXG4gICAgc2V0KG9wdHMpIHtcbiAgICAgICAgZWFjaChvcHRzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3ZhbHVlcycgJiYga2V5ICE9PSAnYWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAob3B0cyAmJiBvcHRzLnZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZU9wcy5wcm9jZXNzKHRoaXMudmFsdWVzLCBvcHRzLnZhbHVlcywgb3B0cywgJ2N1cnJlbnQnLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGFsbCBhY3RpdmUgYWN0aW9ucyBmb3IgYW55IHRoYXQgY2FuIGJlIHJlbW92ZWRcbiAgICAgICAgZWFjaCh0aGlzLmFjdGl2ZUFjdGlvbnMsIChpZCwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBsZXQgYWN0aW9uSXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgZWFjaCh0aGlzLnZhbHVlcywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBhY3Rpb25Jc0FjdGl2ZSA9ICh2YWx1ZS5hY3Rpb24gPT09IGFjdGlvbikgPyB0cnVlIDogYWN0aW9uSXNBY3RpdmU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFhY3Rpb25Jc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5iaW5kQWN0aW9uKGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24tc3BlY2lmaWMgY29udHJvbHMgdG8gQWN0b3JcblxuICAgICAgICBAcmV0dXJucyBbQ29udHJvbHNdXG4gICAgKi9cbiAgICBjb250cm9scyhhY3Rpb24pIHtcbiAgICAgICAgY29uc3QgQ29udHJvbHMgPSBhY3Rpb24uZ2V0Q29udHJvbHMoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb250cm9scyh0aGlzLCBhY3Rpb24uZ2V0UGxheWFibGUoKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU3RhcnQgYSBuZXcgQWN0aW9uXG5cbiAgICAgICAgQHBhcmFtIFtBY3Rpb24gfHwgbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW0lucHV0IHx8IGV2ZW50XSAob3B0aW9uYWwpXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl0gKG9wdGlvbmFsKTogZGVmaW5lZCBgdHJ1ZWAgaWYgd2Ugc3VycHJlc3MgbWFraW5nIG5ldyBxdWV1ZVxuICAgICAgICBAcmV0dXJucyBbQ29udHJvbHNdXG4gICAgKi9cbiAgICBzdGFydCh0b1NldCwgaW5wdXQpIHtcbiAgICAgICAgbGV0IGFjdGlvbkV4aXN0cyA9IHV0aWxzLmlzTnVtKHRvU2V0KTtcbiAgICAgICAgbGV0IGFjdGlvbiA9IChhY3Rpb25FeGlzdHMpID8gdGhpcy5nZXRBY3Rpb24odG9TZXQpIDogdG9TZXQuZ2V0UGxheWFibGUoKTtcbiAgICAgICAgbGV0IG9wdHMgPSBhY3Rpb24uZ2V0U2V0KCk7XG4gICAgICAgIGxldCBzdXJwcmVzc1F1ZXVlQ2xlYXIgPSAoYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXSA9PT0gZmFsc2UpO1xuXG4gICAgICAgIG9wdHMuYWN0aW9uID0gYWN0aW9uO1xuXG4gICAgICAgIHRoaXMuc2V0KG9wdHMpO1xuXG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgYWN0aW9uLmJpbmRJbnB1dChpbnB1dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN1cnByZXNzUXVldWVDbGVhcikge1xuICAgICAgICAgICAgdGhpcy5xdWV1ZS5jbGVhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyZSBhbGwgUm9sZSBvblN0YXJ0cyBpZiBub3QgYWxyZWFkeSBhY3RpdmVcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICBsZXQgbnVtUm9sZXMgPSB0aGlzLnJvbGVzLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUm9sZXM7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCByb2xlID0gdGhpcy5yb2xlc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAocm9sZS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICByb2xlLnN0YXJ0LmNhbGwodGhpcywgdGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyZSBuZXcgYWN0aW9uIG9uU3RhcnRcbiAgICAgICAgaWYgKCFhY3Rpb24uaXNBY3RpdmUgJiYgYWN0aW9uLm9uU3RhcnQpIHtcbiAgICAgICAgICAgIGFjdGlvbi5vblN0YXJ0KHRoaXMsIGFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG5cbiAgICAgICAgaWYgKCFhY3Rpb25FeGlzdHMpIHtcbiAgICAgICAgICAgIGxldCBDb250cm9scyA9IGFjdGlvbi5nZXRDb250cm9scygpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb250cm9scyh0aGlzLCBhY3Rpb24sIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUGF1c2UgYWxsIGFjdGl2ZSBBY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtpbnRdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybnMgW0FjdG9yXVxuICAgICovXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZWFjaCh0aGlzLmFjdGl2ZUFjdGlvbnMsIChpZCwgYWN0aW9uKSA9PiBhY3Rpb24uZGVhY3RpdmF0ZSgpKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzLnN0b3AoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUmVzdW1lIGFsbCBhY3RpdmUgQWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbaW50XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm5zIFtBY3Rvcl07XG4gICAgKi9cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICBlYWNoKHRoaXMuYWN0aXZlQWN0aW9ucywgKGlkLCBhY3Rpb24pID0+IGFjdGlvbi5hY3RpdmF0ZSgpKTtcbiAgICAgICAgdGhpcy5wcm9jZXNzLnN0YXJ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN0b3AgYWxsIGFjdGl2ZSBBY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtpbnRdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybnMgW0FjdG9yXVxuICAgICovXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICBlYWNoKHRoaXMuYWN0aXZlQWN0aW9ucywgKGlkKSA9PiB0aGlzLnVuYmluZEFjdGlvbihpZCkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBUb2dnbGUgYWxsIGFjdGl2ZSBBY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtpbnRdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybnMgW0FjdG9yXVxuICAgICovXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZSA/IHRoaXMucGF1c2UoKSA6IHRoaXMucmVzdW1lKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU3luY3MgYGVsZW1lbnRgIHdpdGggY3VycmVudCBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHJldHVybnMgW0FjdG9yXVxuICAgICovXG4gICAgc3luYygpIHtcbiAgICAgICAgdGhpcy5zdGFydChuZXcgQWN0aW9uKHsgdmFsdWVzOiB0aGlzLnZhbHVlcyB9KSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFkZCBhIG5ldyBBY3Rpb24gdG8gdGhlIHF1ZXVlXG4gICAgKi9cbiAgICB0aGVuKCkge1xuICAgICAgICB0aGlzLnF1ZXVlLmFkZC5hcHBseSh0aGlzLnF1ZXVlLCBhcmd1bWVudHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBFeGVjdXRlIG5leHQgaW4gcXVldWVcbiAgICAqL1xuICAgIG5leHQoKSB7XG4gICAgICAgIHZhciBuZXh0ID0gdGhpcy5xdWV1ZS5uZXh0KCk7XG5cbiAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmMobmV4dFswXSkpIHtcbiAgICAgICAgICAgICAgICBuZXh0WzBdKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAvLyBPciB0aGlzIGlzIGFuIGFjdGlvblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXh0LnB1c2goZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQuYXBwbHkodGhpcywgbmV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFzc2lnbiBSb2xlcyBiYXNlZCBvbiBlbGVtZW50IGFuZCBtYW51YWxseSBwcm92aWRlZCBwcm9wc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogRWxlbWVudFxuICAgICAgICBAcGFyYW0gW1JvbGUgfHwgYXJyYXldXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl0gKG9wdGlvbmFsKVxuICAgICovXG4gICAgYXNzaWduUm9sZXMoZWxlbWVudCwgbWFudWFsUm9sZXMsIHN1cnByZXNzSW5pdCkge1xuICAgICAgICAvLyBBbGwgQWN0b3JzIGdldCBhIGRlZmF1bHQgUm9sZSB0aGF0IGhhbmRsZXMgdXNlciBjYWxsYmFja3NcbiAgICAgICAgdGhpcy5yb2xlcyA9IFsgZGVmYXVsdFJvbGUgXTtcblxuICAgICAgICAvLyBBdXRvLWFzc2lnbiBpZiBubyBtYW51YWxseS1zZXQgUm9sZXNcbiAgICAgICAgaWYgKCFtYW51YWxSb2xlcyAmJiBlbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9Bc3NpZ25Sb2xlcyhlbGVtZW50KTtcblxuICAgICAgICAvLyBPciBtYW51YWxseSBzZXQgaWYgcHJvdmlkZWRcbiAgICAgICAgfSBlbHNlIGlmIChtYW51YWxSb2xlcykge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzQXJyYXkobWFudWFsUm9sZXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2xlcy5wdXNoLmFwcGx5KHRoaXMucm9sZXMsIG1hbnVhbFJvbGVzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb2xlcy5wdXNoKG1hbnVhbFJvbGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3VycHJlc3NJbml0KSB7XG4gICAgICAgICAgICB0aGlzLmluaXRSb2xlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQXV0b21hdGljYWxseSBhc3NpZ24gUm9sZXMgYmFzZWQgb24gZWxlbWVudCwgZGVzaWduZWRcbiAgICAgICAgdG8gYmUgZXh0ZW5kZWRcblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEVsZW1lbnRcbiAgICAqL1xuICAgIGF1dG9Bc3NpZ25Sb2xlcyhlbGVtZW50KSB7XG4gICAgICAgIC8vIEFkZCBDU1Mgcm9sZSBpZiBIVE1MRWxlbWVudFxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGVsZW1lbnQudGFnTmFtZSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgICAgIHRoaXMucm9sZXMucHVzaChjc3NSb2xlKTtcblxuICAgICAgICAvLyBBZGQgU1ZHIHJvbGUgaWYgU1ZHIGVsZW1lbnRcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5yb2xlcy5wdXNoKHN2Z1JvbGUpO1xuXG4gICAgICAgICAgICAvLyBBZGQgRHJhdyBQYXRoIHJvbGUgaWYgcGF0aCBlbGVtZW50XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAncGF0aCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVzLnB1c2goZHJhd1BhdGhSb2xlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEZpcmUgaW5pdCBjYWxsYmFja3NcbiAgICAqL1xuICAgIGluaXRSb2xlcygpIHtcbiAgICAgICAgLy8gRmlyZSBpbml0IGNhbGxiYWNrXG4gICAgICAgIHRoaXMucm9sZXMuZm9yRWFjaCgocm9sZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJvbGUuaW5pdCkge1xuICAgICAgICAgICAgICAgIHJvbGUuaW5pdC5jYWxsKHRoaXMsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RGcmFtZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3Muc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEJpbmQgQWN0aW9uIGFuZCByZXR1cm4gaXRzIHRhYmxlIGlkXG5cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEByZXR1cm5zIFtpbnRdXG4gICAgKi9cbiAgICBiaW5kQWN0aW9uKGFjdGlvbiwgaWQpIHtcbiAgICAgICAgaWYgKGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlkID0gdGhpcy5hY3Rpb25Db3VudGVyKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaGFzQWN0aW9uKGlkKSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgICAgIHRoaXMubnVtQWN0aXZlKys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgdW5iaW5kQWN0aW9uKGlkKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaW5wdXQgJiYgYWN0aW9uLmlucHV0LmF1dG9TdG9wID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLmlucHV0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubnVtQWN0aXZlLS07XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5udW1BY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEFjdGlvbihpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICB9XG5cbiAgICBoYXNBY3Rpb24oaWQpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldEFjdGlvbihpZCkgIT09IHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIHByb2Nlc3Npbmcgb3JkZXJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgICAgICBAcGFyYW0gW2Jvb2xlYW5dXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl1cbiAgICAqL1xuICAgIHVwZGF0ZU9yZGVyKGtleSwgbW92ZVRvQmFjaywgaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgdmFyIG9yZGVyID0gKCFoYXNDaGlsZHJlbikgPyB0aGlzLmFjdGl2ZVZhbHVlcyA6IHRoaXMuYWN0aXZlUGFyZW50cyxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gb3JkZXIuaW5kZXhPZihrZXkpO1xuXG4gICAgICAgIC8vIElmIGtleSBpc24ndCBsaXN0IG9yIG1vdmVUb0JhY2sgaXMgc2V0IHRvIHRydWUsIGFkZCBrZXlcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAtMSB8fCBtb3ZlVG9CYWNrKSB7XG4gICAgICAgICAgICBvcmRlci5wdXNoKGtleSk7XG5cbiAgICAgICAgICAgIC8vIElmIGtleSBhbHJlYWR5IGV4aXN0cywgcmVtb3ZlXG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPiAtMSkge1xuICAgICAgICAgICAgICAgIG9yZGVyLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBbYm9vbGVhbl06IElzIHRoaXMgQWN0b3IgYWN0aXZlP1xuICAgIGdldCBpc0FjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICAgIH1cblxuICAgIC8vIFNldCBoYXNDaGFuZ2VkIHRvIHRydWUgaXMgdGhpcyBpcyBub3cgYWN0aXZlXG4gICAgc2V0IGlzQWN0aXZlKHN0YXR1cykge1xuICAgICAgICBpZiAoc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSBzdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pc0FjdGl2ZSA9IHN0YXR1cztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQWN0b3I7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ==