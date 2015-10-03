'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Action = require('./Action'),
    calc = require('../inc/calc'),
    utils = require('../inc/utils'),
    each = utils.each,
    presetEasing = require('./tween/preset-easing'),
    valueOps = require('../actor/value-operations'),
    TweenControls = require('./tween/TweenControls'),
    nextSteps = {
    loop: 'restart',
    yoyo: 'reverse',
    flip: 'flipValues'
},

/*
    Ease value within ranged parameters
    
    @param [number]: Progress between 0 and 1
    @param [number]: Value of 0 progress
    @param [number]: Value of 1 progress
    @param [string || function]: Name of preset easing
        to use or generated easing function
    @return [number]: Value of eased progress in range
*/
ease = function ease(progress, from, to, _ease) {
    var progressLimited = calc.restricted(progress, 0, 1),
        easingFunction = utils.isString(_ease) ? presetEasing[_ease] : _ease;

    return calc.valueEased(progressLimited, from, to, easingFunction);
};

var COUNT = 'count';

var Tween = (function (_Action) {
    _inherits(Tween, _Action);

    function Tween() {
        _classCallCheck(this, Tween);

        _get(Object.getPrototypeOf(Tween.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Tween, [{
        key: 'getControls',
        value: function getControls() {
            return TweenControls;
        }
    }, {
        key: 'getDefaultProps',
        value: function getDefaultProps() {
            return {
                delay: 0,
                dilate: 1,
                duration: 300,
                loop: false,
                yoyo: false,
                flip: false,
                playDirection: 1,
                ended: true,
                elapsed: 0
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
        value: function onFrameStart(actor, frameDuration) {
            this.elapsed = this.elapsed || 0;

            if (frameDuration) {
                this.elapsed += frameDuration * actor.dilate * this.playDirection;
                this.ended = true;
            }
        }

        /*
            Calculate progress of value based on time elapsed,
            value delay/duration/stagger properties
             @param [Actor]
            @param [object]: Value state and properties
            @return [number]: Calculated value
        */
    }, {
        key: 'process',
        value: function process(actor, value) {
            var target = value.to,
                progressTarget = this.playDirection === 1 ? 1 : 0,
                newValue = value.current,
                progress;

            // If this value has a to property, otherwise we just return current value
            if (target !== undefined) {
                progress = calc.restricted(calc.progress(this.elapsed - value.delay, value.duration) - value.stagger, 0, 1);

                // Mark Action as NOT ended if still in progress
                if (progress !== progressTarget) {
                    this.ended = false;
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
            If this tween has ended, check if we loop/yoyo/flip
            
            @return [boolean]: Has this tween really really ended?
        */
    }, {
        key: 'hasEnded',
        value: function hasEnded(actor) {
            var _this = this;

            if (this.ended) {
                each(nextSteps, function (name, methodName) {
                    if (_this.checkNextStep(actor, name, _this[methodName])) {
                        _this.ended = false;
                        actor.hasChanged = true;
                        return false;
                    }
                });
            }

            return this.ended;
        }
    }, {
        key: 'checkNextStep',
        value: function checkNextStep(actor, name, method) {
            var stepTaken = false,
                step = this[name],
                count = this[name + COUNT] || 0,
                forever = step === true;

            if (forever || utils.isNum(step)) {
                ++count;
                this[name + COUNT] = count;

                if (forever || count <= step) {
                    method.call(this, actor);
                    stepTaken = true;
                }
            }

            return stepTaken;
        }
    }, {
        key: 'flipValues',
        value: function flipValues(actor) {
            var actorValues = actor.values;
            this.elapsed = this.duration - this.elapsed;

            each(this.values, function (key) {
                var value = actorValues[key];

                if (value.children) {
                    each(value.children, function (childKey) {
                        valueOps.flip(actorValues[key + childKey]);
                    });
                }

                valueOps.flip(value);
            });
        }
    }, {
        key: 'reverse',
        value: function reverse() {
            this.playDirection *= -1;
        }
    }, {
        key: 'restart',
        value: function restart() {
            this.elapsed = this.playDirection === 1 ? 0 : this.duration;
            this.started = utils.currentTime();
        }
    }]);

    return Tween;
})(Action);

module.exports = Tween;