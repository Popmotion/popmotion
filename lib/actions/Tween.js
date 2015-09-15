'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var Action = require('./Action.es6'),
    calc = require('../inc/calc'),
    utils = require('../inc/utils'),
    presetEasing = require('./tween/preset-easing'),

/*
    Ease value within ranged parameters
    
    @param [number]: Progress between 0 and 1
    @param [number]: Value of 0 progress
    @param [number]: Value of 1 progress
    @param [string || function]: Name of preset easing
        to use or generated easing function
    @param [number]: Amplify progress out of specified range
    @return [number]: Value of eased progress in range
*/
ease = function ease(progress, from, to, _ease, escapeAmp) {
    var progressLimited = calc.restricted(progress, 0, 1),
        easingFunction = utils.isString(_ease) ? presetEasing[_ease] : _ease;

    if (progressLimited !== progress && escapeAmp) {
        _ease = 'linear';
        progressLimited = progressLimited + (progress - progressLimited) * escapeAmp;
    }

    return calc.valueEased(progressLimited, from, to, easingFunction);
};

var Tween = (function (_Action) {
    _inherits(Tween, _Action);

    function Tween() {
        _classCallCheck(this, Tween);

        _get(Object.getPrototypeOf(Tween.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Tween, [{
        key: 'getName',
        value: function getName() {
            return 'tween';
        }
    }, {
        key: 'getDefaultProps',
        value: function getDefaultProps() {
            return {
                dilate: 1,
                loop: false,
                yoyo: false,
                flip: false,
                playDirection: 1
            };
        }
    }, {
        key: 'getDefaultValue',
        value: function getDefaultValue() {
            return {
                delay: 0,
                duration: 300,
                ease: 'easeOut',
                stagger: 0,
                steps: 0,
                to: 0,
                round: false
            };
        }
    }, {
        key: 'getDefaultValueProp',
        value: function getDefaultValueProp() {
            return 'to';
        }

        /*
            Update Action elapsed time
            
            @param [object]: Action properties
            @param [number]: Timestamp of current frame
        */
    }, {
        key: 'onFrameStart',
        value: function onFrameStart(frameDuration) {
            if (frameDuration) {
                this.elapsed += frameDuration * this.dilate * this.playDirection;
            }

            this.hasEnded = true;
        }

        /*
            Calculate progress of value based on time elapsed,
            value delay/duration/stagger properties
             @param [object]: Value state and properties
            @return [number]: Calculated value
        */
    }, {
        key: 'process',
        value: function process(value) {
            var target = value.to,
                progressTarget = this.playDirection === 1 ? 1 : 0,
                newValue = value.current,
                progress;

            // If this value has a to property, otherwise we just return current value
            if (target !== undefined) {
                progress = calc.restricted(calc.progress(this.elapsed - value.delay, value.duration) - value.stagger, 0, 1);

                // Mark Action as NOT ended if still in progress
                if (progress !== progressTarget) {
                    this.hasEnded = false;
                }

                // Step progress if we're stepping
                if (value.steps) {
                    progress = utils.stepProgress(progress, value.steps);
                }

                // Ease value
                newValue = ease(progress, value.origin, target, value.ease);
            }

            return newValue;
        }

        /*
            Return hasEnded property
            
            @return [boolean]: Have all Values hit 1 progress?
        */
    }, {
        key: 'hasEnded',
        value: function hasEnded() {
            return this.hasEnded;
        }
    }]);

    return Tween;
})(Action);

module.exports = Tween;