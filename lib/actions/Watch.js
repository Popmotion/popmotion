'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

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