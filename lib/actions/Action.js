'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var calc = require('../inc/calc'),
    utils = require('../inc/utils');

var DEFAULT_PROP = 'current';

var Action = (function () {
    function Action(props, defaultProp) {
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
            var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
            var defaultProp = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_PROP : arguments[1];

            // Add properties
            for (var key in props) {
                if (props.hasOwnProperty(key) && key !== 'values') {
                    this[key] = props[key];
                }
            }

            // Merge values
            if (props.values) {
                var currentValues = this.values,
                    values = props.values;

                for (var key in values) {
                    var existingValue = currentValues[key],
                        value = values[key],
                        newValue = {};

                    if (utils.isObj(value)) {
                        newValue = value;
                    } else {
                        newValue[defaultProp] = value;
                    }

                    currentValues[key] = existingValue ? utils.merge(existingValue, newValue) : newValue;
                }
            }

            return this;
        }
    }, {
        key: 'process',
        value: function process(value) {
            return value.current;
        }
    }, {
        key: 'limit',
        value: function limit(output, value) {
            return calc.restricted(output, value.min, value.max);
        }
    }, {
        key: 'getName',
        value: function getName() {
            return 'action';
        }
    }, {
        key: 'getDefaultProps',
        value: function getDefaultProps() {
            return {};
        }
    }, {
        key: 'getDefaultValue',
        value: function getDefaultValue() {
            return false;
        }
    }, {
        key: 'getDefaultValueProp',
        value: function getDefaultValueProp() {
            return DEFAULT_PROP;
        }
    }, {
        key: 'extend',
        value: function extend(props) {
            return new this.constructor(props, this.getDefaultValueProp());
        }
    }]);

    return Action;
})();

module.exports = Action;