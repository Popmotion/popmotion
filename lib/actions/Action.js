'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var calc = require('../inc/calc'),
    utils = require('../inc/utils'),
    each = utils.each,
    Controls = require('../controls/Controls');

var DEFAULT_PROP = 'current';
var PRIVATE = ['onStart', 'onFrame', 'onUpdate', 'onComplete'];

var Action = (function () {
    function Action(props) {
        _classCallCheck(this, Action);

        var action = this;

        utils.each(this.getDefaultProps(), function (key, value) {
            action[key] = value;
        });

        this.values = {};
        this.set(props, this.getDefaultValueProp());
    }

    Action.prototype.set = function set() {
        var _this = this;

        var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
        var defaultProp = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_PROP : arguments[1];

        each(props, function (key, prop) {
            if (key !== 'values') {
                _this[key] = prop;
            }
        });

        // Merge values
        if (props.values) {
            (function () {
                var currentValues = _this.values,
                    values = props.values;

                each(values, function (key, value) {
                    var existingValue = currentValues[key],
                        newValue = {};

                    if (utils.isObj(value)) {
                        newValue = value;
                    } else {
                        newValue[defaultProp] = value;
                    }

                    currentValues[key] = existingValue ? utils.merge(existingValue, newValue) : newValue;
                });
            })();
        }

        return this;
    };

    Action.prototype.process = function process(actor, value) {
        return value.current;
    };

    /*
         Has Action ended?
         
         Returns true to end immedietly
         
         @return [boolean]: true
     */

    Action.prototype.hasEnded = function hasEnded() {
        return true;
    };

    Action.prototype.limit = function limit(output, value) {
        var restricted = calc.restricted(output, value.min, value.max),
            escapeAmp = value.escapeAmp !== undefined ? value.escapeAmp : 0;
        return restricted + (output - restricted) * escapeAmp;
    };

    Action.prototype.getControls = function getControls() {
        return Controls;
    };

    Action.prototype.getDefaultProps = function getDefaultProps() {
        return {};
    };

    Action.prototype.getDefaultValue = function getDefaultValue() {
        return {};
    };

    Action.prototype.getDefaultValueProp = function getDefaultValueProp() {
        return DEFAULT_PROP;
    };

    Action.prototype.getSet = function getSet() {
        var _this2 = this;

        var set = { values: this.values };

        each(this, function (key, prop) {
            if (_this2.hasOwnProperty(key) && PRIVATE.indexOf(key) === -1) {
                set[key] = prop;
            }
        });

        return set;
    };

    Action.prototype.extend = function extend(props) {
        return new this.constructor(utils.merge(this, props), this.getDefaultValueProp());
    };

    Action.prototype.getPlayable = function getPlayable() {
        return this.extend();
    };

    Action.prototype.activate = function activate() {
        this.isActive = true;
        return this;
    };

    Action.prototype.deactivate = function deactivate() {
        this.isActive = false;
        return this;
    };

    return Action;
})();

module.exports = Action;