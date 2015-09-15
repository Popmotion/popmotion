'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var Action = require('./Action.es6'),
    calc = require('../inc/calc');

var Track = (function (_Action) {
    _inherits(Track, _Action);

    function Track() {
        _classCallCheck(this, Track);

        _get(Object.getPrototypeOf(Track.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Track, [{
        key: 'getName',
        value: function getName() {
            return 'track';
        }
    }, {
        key: 'getDefaultValue',
        value: function getDefaultValue() {
            return {
                amp: 1,
                escapeAmp: 0,
                round: false
            };
        }

        /*
            Update input offset
        */
    }, {
        key: 'onFrameStart',
        value: function onFrameStart() {
            this.inputOffset = calc.offset(this.inputOrigin, this.input.current);
        }

        /*
            Move Value relative to Input movement
            
            @param [Value]: Current value
            @param [string]: Key of current value
            @return [number]: Calculated value
        */
    }, {
        key: 'process',
        value: function process(value, key) {
            return this.inputOffset.hasOwnProperty(key) ? value.origin + this.inputOffset[key] : value.current;
        }

        /*
            Has this Action ended? 
            
            @return [boolean]: False to make user manually finish .track()
        */
    }, {
        key: 'hasEnded',
        value: function hasEnded() {
            return false;
        }
    }]);

    return Track;
})(Action);

module.exports = Track;