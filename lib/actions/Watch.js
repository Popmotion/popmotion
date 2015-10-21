'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Action = require('./Action'),
    calc = require('../inc/calc'),
    STRING = 'string',

/*
    Translate our mapLink value into mapTo
    
    @param [number]: Calculated value from linked value
    @param [Value || object]: Linked value or empty object if we're linking to input
    @param [array]: List of numbers relating to linked value
    @param [array]: List of numbers relating to this value
*/
findMappedValue = function findMappedValue(newValue, linkedValue, toValue, mapLink, mapTo) {
    var mapLength = mapLink.length,
        i = 1,
        lastLinkValue,
        thisLinkValue,
        lastToValue,
        thisToValue;

    for (; i < mapLength; i++) {
        // Assign values from array, or if they're strings, look for them in linkedValue
        lastLinkValue = typeof mapLink[i - 1] === STRING ? linkedValue[mapLink[i - 1]] : mapLink[i - 1];
        thisLinkValue = typeof mapLink[i] === STRING ? linkedValue[mapLink[i]] : mapLink[i];
        lastToValue = typeof mapTo[i - 1] === STRING ? toValue[mapTo[i - 1]] : mapTo[i - 1];
        thisToValue = typeof mapTo[i] === STRING ? toValue[mapTo[i]] : mapTo[i];

        // Check if we've gone past our calculated value, or if we're at the end of the array
        if (newValue < thisLinkValue || i === mapLength - 1) {
            newValue = calc.value(calc.restricted(calc.progress(newValue, lastLinkValue, thisLinkValue), 0, 1), lastToValue, thisToValue);
            break;
        }
    }

    return newValue;
};

var Watch = (function (_Action) {
    _inherits(Watch, _Action);

    function Watch() {
        _classCallCheck(this, Watch);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _get(Object.getPrototypeOf(Watch.prototype), 'constructor', this).apply(this, args);
        this.isActive = true;
    }

    /*
        Process this value
        
        First check if this value exists as a Value, if not
        check within Input (if we have one)
            
        @param [Actor]
        @param [Value]: Current value
        @param [string]: Key of current value
        @return [number]: Calculated value
    */

    _createClass(Watch, [{
        key: 'process',
        value: function process(actor, value, key) {
            var values = actor.values,
                newValue = value.current,
                watchedKey = value.watch,
                watchedValue = values[watchedKey] ? values[watchedKey] : {},
                inputOffset = value.action ? value.action.inputOffset : false;

            // First look at Action and check value isn't linking itself
            if (watchedValue.current !== undefined && key !== watchedKey) {
                newValue = watchedValue.current;

                // Then check values in Input
            } else if (inputOffset && inputOffset.hasOwnProperty(watchedKey)) {
                    newValue = value.action.process(actor, value, watchedKey);
                }

            // If we have mapFrom and mapTo properties, translate the new value
            if (value.mapFrom && value.mapTo) {
                value.unmapped = newValue;
                newValue = findMappedValue(newValue, watchedValue, value, value.mapFrom, value.mapTo);
            }

            return newValue;
        }
    }]);

    return Watch;
})(Action);

module.exports = Watch;