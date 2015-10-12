'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Action = require('./Action'),
    Pointer = require('../input/Pointer'),
    calc = require('../inc/calc');

function smooth(newValue, oldValue, duration, smoothing) {
    return oldValue + duration * (newValue - oldValue) / smoothing;
}

var Track = (function (_Action) {
    _inherits(Track, _Action);

    function Track() {
        _classCallCheck(this, Track);

        _get(Object.getPrototypeOf(Track.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Track, [{
        key: 'onFrameStart',

        /*
            Update input offset
        */
        value: function onFrameStart(actor, frameDuration, framestamp) {
            actor.state.input = this.input.onFrame(framestamp);
            this.inputOffset = calc.offset(this.inputOrigin, this.input.current);
            this.frameDuration = frameDuration;
        }

        /*
            Move Value relative to Input movement
            
            @param [Value]: Current value
            @param [string]: Key of current value
            @return [number]: Calculated value
        */
    }, {
        key: 'process',
        value: function process(actor, value, key) {
            var newValue = value.current,
                unmapped = value.unmapped !== undefined ? value.unmapped : value.current;

            if (this.inputOffset.hasOwnProperty(key)) {
                newValue = value.direct ? this.input.current[key] : value.origin + this.inputOffset[key] * value.amp;
                newValue = value.smooth ? smooth(newValue, unmapped, this.frameDuration, value.smooth) : newValue;
            }

            return newValue;
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
    }, {
        key: 'deactivate',
        value: function deactivate() {
            _get(Object.getPrototypeOf(Track.prototype), 'deactivate', this).call(this);

            if (this.input && this.input.stop) {
                this.input.stop();
            }

            return this;
        }
    }, {
        key: 'bindInput',
        value: function bindInput(input) {
            this.input = !input.current ? new Pointer(input) : input;
            this.inputOrigin = this.input.get();
        }
    }, {
        key: 'getDefaultValue',
        value: function getDefaultValue() {
            return {
                amp: 1,
                direct: false,
                smooth: 0
            };
        }
    }]);

    return Track;
})(Action);

module.exports = Track;