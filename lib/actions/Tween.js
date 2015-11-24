'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Tween).apply(this, arguments));
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
            var target = value.to;
            var progressTarget = this.playDirection === 1 ? 1 : 0;
            var newValue = value.current;

            // If this value has a to property, otherwise we just return current value
            if (target !== undefined) {
                var progress = calc.restricted(calc.progress(this.elapsed - value.delay, 0, value.duration) - value.stagger, 0, 1);

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
            var _this2 = this;

            if (this.ended) {
                each(nextSteps, function (name, methodName) {
                    if (_this2.checkNextStep(actor, name, _this2[methodName])) {
                        _this2.ended = false;
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
            var step = this[name];
            var forever = step === true;
            var count = this[name + COUNT] || 0;
            var stepTaken = false;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQzVCLElBQUksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQzdCLEtBQUssR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDO0lBQy9CLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSTtJQUNqQixZQUFZLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDO0lBQy9DLFFBQVEsR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUM7SUFDL0MsYUFBYSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztJQUVoRCxTQUFTLEdBQUc7QUFDUixRQUFJLEVBQUUsU0FBUztBQUNmLFFBQUksRUFBRSxTQUFTO0FBQ2YsUUFBSSxFQUFFLFlBQVk7Q0FDckI7Ozs7Ozs7Ozs7OztBQVlELElBQUksR0FBRyxjQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUksRUFBSztBQUNqQyxRQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELGNBQWMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQyxLQUFJLENBQUMsR0FBRyxLQUFJLENBQUM7O0FBRXRFLFdBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQztDQUNyRSxDQUFDOztBQUVOLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQzs7SUFFaEIsS0FBSztjQUFMLEtBQUs7O2FBQUwsS0FBSzs4QkFBTCxLQUFLOztzRUFBTCxLQUFLOzs7aUJBQUwsS0FBSzs7c0NBQ087QUFDVixtQkFBTyxhQUFhLENBQUM7U0FDeEI7OzswQ0FFaUI7QUFDZCxtQkFBTztBQUNI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QUFDLENBQUM7YUFDeEIsQ0FBQyxDQUFDO1NBQ047OztrQ0FFUztBQUNOLGdCQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzVCOzs7a0NBRVM7QUFDTixnQkFBSSxDQUFDLE9BQU8sR0FBRyxBQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssQ0FBQyxHQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQzlELGdCQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0Qzs7O1dBbEpDLEtBQUs7R0FBUyxNQUFNOztBQXFKMUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMiLCJmaWxlIjoiVHdlZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgQWN0aW9uID0gcmVxdWlyZSgnLi9BY3Rpb24nKSxcbiAgICBjYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpLFxuICAgIGVhY2ggPSB1dGlscy5lYWNoLFxuICAgIHByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vdHdlZW4vcHJlc2V0LWVhc2luZycpLFxuICAgIHZhbHVlT3BzID0gcmVxdWlyZSgnLi4vYWN0b3IvdmFsdWUtb3BlcmF0aW9ucycpLFxuICAgIFR3ZWVuQ29udHJvbHMgPSByZXF1aXJlKCcuL3R3ZWVuL1R3ZWVuQ29udHJvbHMnKSxcblxuICAgIG5leHRTdGVwcyA9IHtcbiAgICAgICAgbG9vcDogJ3Jlc3RhcnQnLFxuICAgICAgICB5b3lvOiAncmV2ZXJzZScsXG4gICAgICAgIGZsaXA6ICdmbGlwVmFsdWVzJ1xuICAgIH0sXG5cbiAgICAvKlxuICAgICAgICBFYXNlIHZhbHVlIHdpdGhpbiByYW5nZWQgcGFyYW1ldGVyc1xuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAwIHByb2dyZXNzXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgICAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgICAgICAgICAgdG8gdXNlIG9yIGdlbmVyYXRlZCBlYXNpbmcgZnVuY3Rpb25cbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiAgICAqLyAgXG4gICAgZWFzZSA9IChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpID0+IHtcbiAgICAgICAgdmFyIHByb2dyZXNzTGltaXRlZCA9IGNhbGMucmVzdHJpY3RlZChwcm9ncmVzcywgMCwgMSksXG4gICAgICAgICAgICBlYXNpbmdGdW5jdGlvbiA9IHV0aWxzLmlzU3RyaW5nKGVhc2UpID8gcHJlc2V0RWFzaW5nW2Vhc2VdIDogZWFzZTtcblxuICAgICAgICByZXR1cm4gY2FsYy52YWx1ZUVhc2VkKHByb2dyZXNzTGltaXRlZCwgZnJvbSwgdG8sIGVhc2luZ0Z1bmN0aW9uKTtcbiAgICB9O1xuXG5jb25zdCBDT1VOVCA9ICdjb3VudCc7XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBnZXRDb250cm9scygpIHtcbiAgICAgICAgcmV0dXJuIFR3ZWVuQ29udHJvbHM7XG4gICAgfVxuICAgIFxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlsYXRlOiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgeW95bzogZmFsc2UsXG4gICAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIHBsYXlEaXJlY3Rpb246IDEsXG4gICAgICAgICAgICBlbmRlZDogdHJ1ZSxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBlYXNlOiAnZWFzZU91dCcsXG4gICAgICAgICAgICBzdGFnZ2VyOiAwLFxuICAgICAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndG8nO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFVwZGF0ZSBBY3Rpb24gZWxhcHNlZCB0aW1lXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogVGltZXN0YW1wIG9mIGN1cnJlbnQgZnJhbWVcbiAgICAqL1xuICAgIG9uRnJhbWVTdGFydChhY3RvciwgZnJhbWVEdXJhdGlvbikge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmVsYXBzZWQgfHwgMDtcblxuICAgICAgICBpZiAoZnJhbWVEdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5lbGFwc2VkICs9IChmcmFtZUR1cmF0aW9uICogYWN0b3IuZGlsYXRlKSAqIHRoaXMucGxheURpcmVjdGlvbjtcbiAgICAgICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQ2FsY3VsYXRlIHByb2dyZXNzIG9mIHZhbHVlIGJhc2VkIG9uIHRpbWUgZWxhcHNlZCxcbiAgICAgICAgdmFsdWUgZGVsYXkvZHVyYXRpb24vc3RhZ2dlciBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtBY3Rvcl1cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdOiBWYWx1ZSBzdGF0ZSBhbmQgcHJvcGVydGllc1xuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBDYWxjdWxhdGVkIHZhbHVlXG4gICAgKi9cbiAgICBwcm9jZXNzKGFjdG9yLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSB2YWx1ZS50bztcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NUYXJnZXQgPSAodGhpcy5wbGF5RGlyZWN0aW9uID09PSAxKSA/IDEgOiAwO1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGEgdG8gcHJvcGVydHksIG90aGVyd2lzZSB3ZSBqdXN0IHJldHVybiBjdXJyZW50IHZhbHVlXG4gICAgICAgIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gY2FsYy5yZXN0cmljdGVkKGNhbGMucHJvZ3Jlc3ModGhpcy5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIDAsIHZhbHVlLmR1cmF0aW9uKSAtIHZhbHVlLnN0YWdnZXIsIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIEFjdGlvbiBhcyBOT1QgZW5kZWQgaWYgc3RpbGwgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyAhPT0gcHJvZ3Jlc3NUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0ZXAgcHJvZ3Jlc3MgaWYgd2UncmUgc3RlcHBpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zdGVwcykge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gdXRpbHMuc3RlcFByb2dyZXNzKHByb2dyZXNzLCB2YWx1ZS5zdGVwcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVhc2UgdmFsdWVcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gZWFzZShwcm9ncmVzcywgdmFsdWUub3JpZ2luLCB0YXJnZXQsIHZhbHVlLmVhc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld1ZhbHVlO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIElmIHRoaXMgdHdlZW4gaGFzIGVuZGVkLCBjaGVjayBpZiB3ZSBsb29wL3lveW8vZmxpcFxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IEhhcyB0aGlzIHR3ZWVuIHJlYWxseSByZWFsbHkgZW5kZWQ/XG4gICAgKi9cbiAgICBoYXNFbmRlZChhY3Rvcikge1xuICAgICAgICBpZiAodGhpcy5lbmRlZCkge1xuICAgICAgICAgICAgZWFjaChuZXh0U3RlcHMsIChuYW1lLCBtZXRob2ROYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tOZXh0U3RlcChhY3RvciwgbmFtZSwgdGhpc1ttZXRob2ROYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBhY3Rvci5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kZWQ7XG4gICAgfVxuXG4gICAgY2hlY2tOZXh0U3RlcChhY3RvciwgbmFtZSwgbWV0aG9kKSB7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSB0aGlzW25hbWVdO1xuICAgICAgICBjb25zdCBmb3JldmVyID0gKHN0ZXAgPT09IHRydWUpO1xuICAgICAgICBsZXQgY291bnQgPSB0aGlzW25hbWUgKyBDT1VOVF0gfHwgMDtcbiAgICAgICAgbGV0IHN0ZXBUYWtlbiA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChmb3JldmVyIHx8IHV0aWxzLmlzTnVtKHN0ZXApKSB7XG4gICAgICAgICAgICArK2NvdW50O1xuICAgICAgICAgICAgdGhpc1tuYW1lICsgQ09VTlRdID0gY291bnQ7XG5cbiAgICAgICAgICAgIGlmIChmb3JldmVyIHx8IGNvdW50IDw9IHN0ZXApIHtcbiAgICAgICAgICAgICAgICBtZXRob2QuY2FsbCh0aGlzLCBhY3Rvcik7XG4gICAgICAgICAgICAgICAgc3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGVwVGFrZW47XG4gICAgfVxuXG4gICAgZmxpcFZhbHVlcyhhY3Rvcikge1xuICAgICAgICBjb25zdCBhY3RvclZhbHVlcyA9IGFjdG9yLnZhbHVlcztcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcblxuICAgICAgICBlYWNoKHRoaXMudmFsdWVzLCAoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGFjdG9yVmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGVhY2godmFsdWUuY2hpbGRyZW4sIChjaGlsZEtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZU9wcy5mbGlwKGFjdG9yVmFsdWVzW2tleSArIGNoaWxkS2V5XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlT3BzLmZsaXAodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW47Il19