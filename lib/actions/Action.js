'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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

    _createClass(Action, [{
        key: 'set',
        value: function set() {
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
        }
    }, {
        key: 'process',
        value: function process(actor, value) {
            return value.current;
        }

        /*
             Has Action ended?
             
             Returns true to end immedietly
             
             @return [boolean]: true
         */
    }, {
        key: 'hasEnded',
        value: function hasEnded() {
            return true;
        }
    }, {
        key: 'limit',
        value: function limit(output, value) {
            var restricted = calc.restricted(output, value.min, value.max),
                escapeAmp = value.escapeAmp !== undefined ? value.escapeAmp : 0;
            return restricted + (output - restricted) * escapeAmp;
        }
    }, {
        key: 'getControls',
        value: function getControls() {
            return Controls;
        }
    }, {
        key: 'getDefaultProps',
        value: function getDefaultProps() {
            return {};
        }
    }, {
        key: 'getDefaultValue',
        value: function getDefaultValue() {
            return {};
        }
    }, {
        key: 'getDefaultValueProp',
        value: function getDefaultValueProp() {
            return DEFAULT_PROP;
        }
    }, {
        key: 'getSet',
        value: function getSet() {
            var _this2 = this;

            var set = { values: this.values };

            each(this, function (key, prop) {
                if (_this2.hasOwnProperty(key) && PRIVATE.indexOf(key) === -1) {
                    set[key] = prop;
                }
            });

            return set;
        }
    }, {
        key: 'extend',
        value: function extend(props) {
            return new this.constructor(utils.merge(this, props), this.getDefaultValueProp());
        }
    }, {
        key: 'getPlayable',
        value: function getPlayable() {
            return this.extend();
        }
    }, {
        key: 'activate',
        value: function activate() {
            this.isActive = true;
            return this;
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            this.isActive = false;
            return this;
        }
    }]);

    return Action;
})();

module.exports = Action;