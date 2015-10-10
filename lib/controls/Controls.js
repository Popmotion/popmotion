"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controls = (function () {
    function Controls(actor, action, hasStarted) {
        _classCallCheck(this, Controls);

        this.actor = actor;
        this.action = action;

        if (hasStarted) {
            this.id = this.bindAction();
            this.action.activate();
        }
    }

    _createClass(Controls, [{
        key: "start",
        value: function start(input) {
            this.id = this.bindAction();
            this.actor.start(this.id, input);
            this.action.activate();
            return this;
        }
    }, {
        key: "stop",
        value: function stop() {
            this.actor.unbindAction(this.id);
            this.action.deactivate();

            return this;
        }
    }, {
        key: "pause",
        value: function pause() {
            this.action.deactivate();
            return this;
        }
    }, {
        key: "resume",
        value: function resume() {
            this.action.activate();
            return this;
        }
    }, {
        key: "toggle",
        value: function toggle() {
            var resume = this.actor.hasAction(this.id) ? this.resume : this.start;
            return this.action.isActive ? this.pause() : resume.call(this);
        }
    }, {
        key: "then",
        value: function then() {
            var _actor;

            (_actor = this.actor).then.apply(_actor, arguments);
            return this;
        }
    }, {
        key: "bindAction",
        value: function bindAction() {
            return this.actor.bindAction(this.action, this.id);
        }
    }]);

    return Controls;
})();

module.exports = Controls;