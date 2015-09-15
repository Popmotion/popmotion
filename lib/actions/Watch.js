'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var Action = require('./Action.es6'),
    calc = require('../inc/calc');

var Watch = (function (_Action) {
    _inherits(Watch, _Action);

    function Watch() {
        _classCallCheck(this, Watch);

        _get(Object.getPrototypeOf(Watch.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Watch, [{
        key: 'process',

        /*
            Process this value
            
            First check if this value exists as a Value, if not
            check within Input (if we have one)
                
            @param [Value]: Current value
            @param [string]: Key of current value
            @return [number]: Calculated value
        */
        value: function process(value, key) {
            var values = this.values,
                newValue = value.current,
                watchedKey = value.watch,
                watchedValue = values[watchedKey] ? values[watchedKey] : {},
                inputOffset = this.inputOffset;

            // Then check values in Input
            if (inputOffset && inputOffset.hasOwnProperty(watchedKey)) {
                newValue = value.origin + inputOffset[watchedKey] * value.amp;

                // First look at Action and check value isn't linking itself
            } else if (watchedValue.current !== undefined && key !== watchedKey) {
                    newValue = watchedValue.current;
                }

            // If we have mapLink and mapTo properties, translate the new value
            if (value.mapLink && value.mapTo) {
                newValue = findMappedValue(newValue, watchedValue, value, value.mapLink, value.mapTo);
            }

            return newValue;
        }
    }]);

    return Watch;
})(Action);

module.exports = Watch;