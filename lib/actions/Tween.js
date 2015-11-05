'use strict';

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
ease = function (progress, from, to, ease) {
    var progressLimited = calc.restricted(progress, 0, 1),
        easingFunction = utils.isString(ease) ? presetEasing[ease] : ease;

    return calc.valueEased(progressLimited, from, to, easingFunction);
};

var COUNT = 'count';

var Tween = (function (_Action) {
    _inherits(Tween, _Action);

    function Tween() {
        _classCallCheck(this, Tween);

        return _possibleConstructorReturn(this, _Action.apply(this, arguments));
    }

    Tween.prototype.getControls = function getControls() {
        return TweenControls;
    };

    Tween.prototype.getDefaultProps = function getDefaultProps() {
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
    };

    Tween.prototype.getDefaultValue = function getDefaultValue() {
        return {
            delay: 0,
            duration: 300,
            ease: 'easeOut',
            stagger: 0,
            steps: 0,
            to: 0,
            round: false
        };
    };

    Tween.prototype.getDefaultValueProp = function getDefaultValueProp() {
        return 'to';
    };

    /*
        Update Action elapsed time
        
        @param [object]: Action properties
        @param [number]: Timestamp of current frame
    */

    Tween.prototype.onFrameStart = function onFrameStart(actor, frameDuration) {
        this.elapsed = this.elapsed || 0;

        if (frameDuration) {
            this.elapsed += frameDuration * actor.dilate * this.playDirection;
            this.ended = true;
        }
    };

    /*
        Calculate progress of value based on time elapsed,
        value delay/duration/stagger properties
         @param [Actor]
        @param [object]: Value state and properties
        @return [number]: Calculated value
    */

    Tween.prototype.process = function process(actor, value) {
        var target = value.to,
            progressTarget = this.playDirection === 1 ? 1 : 0,
            newValue = value.current,
            progress;

        // If this value has a to property, otherwise we just return current value
        if (target !== undefined) {
            progress = calc.restricted(calc.progress(this.elapsed - value.delay, 0, value.duration) - value.stagger, 0, 1);

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
    };

    /*
        If this tween has ended, check if we loop/yoyo/flip
        
        @return [boolean]: Has this tween really really ended?
    */

    Tween.prototype.hasEnded = function hasEnded(actor) {
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
    };

    Tween.prototype.checkNextStep = function checkNextStep(actor, name, method) {
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
    };

    Tween.prototype.flipValues = function flipValues(actor) {
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
    };

    Tween.prototype.reverse = function reverse() {
        this.playDirection *= -1;
    };

    Tween.prototype.restart = function restart() {
        this.elapsed = this.playDirection === 1 ? 0 : this.duration;
        this.started = utils.currentTime();
    };

    return Tween;
})(Action);

module.exports = Tween;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUM1QixJQUFJLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUM3QixLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQztJQUMvQixJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUk7SUFDakIsWUFBWSxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQztJQUMvQyxRQUFRLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDO0lBQy9DLGFBQWEsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUM7SUFFaEQsU0FBUyxHQUFHO0FBQ1IsUUFBSSxFQUFFLFNBQVM7QUFDZixRQUFJLEVBQUUsU0FBUztBQUNmLFFBQUksRUFBRSxZQUFZO0NBQ3JCOzs7Ozs7Ozs7Ozs7QUFZRCxJQUFJLEdBQUcsVUFBVSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7QUFDdkMsUUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqRCxjQUFjLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDOztBQUV0RSxXQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7Q0FDckUsQ0FBQzs7QUFFTixJQUFNLEtBQUssR0FBRyxPQUFPLENBQUM7O0lBRWhCLEtBQUs7Y0FBTCxLQUFLOzthQUFMLEtBQUs7OEJBQUwsS0FBSzs7Ozs7QUFBTCxTQUFLLFdBQ1AsV0FBVywwQkFBRztBQUNWLGVBQU8sYUFBYSxDQUFDO0tBQ3hCOztBQUhDLFNBQUssV0FLUCxlQUFlLDhCQUFHO0FB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QUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDOUMsQ0FBQyxDQUFDO2FBQ047O0FBRUQsb0JBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEIsQ0FBQyxDQUFDO0tBQ047O0FBMUlDLFNBQUssV0E0SVAsT0FBTyxzQkFBRztBQUNOLFlBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDNUI7O0FBOUlDLFNBQUssV0FnSlAsT0FBTyxzQkFBRztBQUNOLFlBQUksQ0FBQyxPQUFPLEdBQUcsQUFBQyxJQUFJLENBQUMsYUFBYSxLQUFLLENBQUMsR0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUM5RCxZQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUN0Qzs7V0FuSkMsS0FBSztHQUFTLE1BQU07O0FBc0oxQixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyIsImZpbGUiOiJUd2Vlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBBY3Rpb24gPSByZXF1aXJlKCcuL0FjdGlvbicpLFxuICAgIGNhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyksXG4gICAgZWFjaCA9IHV0aWxzLmVhY2gsXG4gICAgcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi90d2Vlbi9wcmVzZXQtZWFzaW5nJyksXG4gICAgdmFsdWVPcHMgPSByZXF1aXJlKCcuLi9hY3Rvci92YWx1ZS1vcGVyYXRpb25zJyksXG4gICAgVHdlZW5Db250cm9scyA9IHJlcXVpcmUoJy4vdHdlZW4vVHdlZW5Db250cm9scycpLFxuXG4gICAgbmV4dFN0ZXBzID0ge1xuICAgICAgICBsb29wOiAncmVzdGFydCcsXG4gICAgICAgIHlveW86ICdyZXZlcnNlJyxcbiAgICAgICAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG4gICAgfSxcblxuICAgIC8qXG4gICAgICAgIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAxIHByb2dyZXNzXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgICAgICB0byB1c2Ugb3IgZ2VuZXJhdGVkIGVhc2luZyBmdW5jdGlvblxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBvZiBlYXNlZCBwcm9ncmVzcyBpbiByYW5nZVxuICAgICovICBcbiAgICBlYXNlID0gZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzZSkge1xuICAgICAgICB2YXIgcHJvZ3Jlc3NMaW1pdGVkID0gY2FsYy5yZXN0cmljdGVkKHByb2dyZXNzLCAwLCAxKSxcbiAgICAgICAgICAgIGVhc2luZ0Z1bmN0aW9uID0gdXRpbHMuaXNTdHJpbmcoZWFzZSkgPyBwcmVzZXRFYXNpbmdbZWFzZV0gOiBlYXNlO1xuXG4gICAgICAgIHJldHVybiBjYWxjLnZhbHVlRWFzZWQocHJvZ3Jlc3NMaW1pdGVkLCBmcm9tLCB0bywgZWFzaW5nRnVuY3Rpb24pO1xuICAgIH07XG5cbmNvbnN0IENPVU5UID0gJ2NvdW50JztcblxuY2xhc3MgVHdlZW4gZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGdldENvbnRyb2xzKCkge1xuICAgICAgICByZXR1cm4gVHdlZW5Db250cm9scztcbiAgICB9XG4gICAgXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaWxhdGU6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICB5b3lvOiBmYWxzZSxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgcGxheURpcmVjdGlvbjogMSxcbiAgICAgICAgICAgIGVuZGVkOiB0cnVlLFxuICAgICAgICAgICAgZWxhcHNlZDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGVhc2U6ICdlYXNlT3V0JyxcbiAgICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgICBzdGVwczogMCxcbiAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd0byc7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgVXBkYXRlIEFjdGlvbiBlbGFwc2VkIHRpbWVcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBUaW1lc3RhbXAgb2YgY3VycmVudCBmcmFtZVxuICAgICovXG4gICAgb25GcmFtZVN0YXJ0KGFjdG9yLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZWxhcHNlZCB8fCAwO1xuXG4gICAgICAgIGlmIChmcmFtZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmVsYXBzZWQgKz0gKGZyYW1lRHVyYXRpb24gKiBhY3Rvci5kaWxhdGUpICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBDYWxjdWxhdGUgcHJvZ3Jlc3Mgb2YgdmFsdWUgYmFzZWQgb24gdGltZSBlbGFwc2VkLFxuICAgICAgICB2YWx1ZSBkZWxheS9kdXJhdGlvbi9zdGFnZ2VyIHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW0FjdG9yXVxuICAgICAgICBAcGFyYW0gW29iamVjdF06IFZhbHVlIHN0YXRlIGFuZCBwcm9wZXJ0aWVzXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IENhbGN1bGF0ZWQgdmFsdWVcbiAgICAqL1xuICAgIHByb2Nlc3MoYWN0b3IsIHZhbHVlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB2YWx1ZS50byxcbiAgICAgICAgICAgIHByb2dyZXNzVGFyZ2V0ID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAxIDogMCxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWUuY3VycmVudCxcbiAgICAgICAgICAgIHByb2dyZXNzO1xuXG4gICAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGEgdG8gcHJvcGVydHksIG90aGVyd2lzZSB3ZSBqdXN0IHJldHVybiBjdXJyZW50IHZhbHVlXG4gICAgICAgIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvZ3Jlc3MgPSBjYWxjLnJlc3RyaWN0ZWQoY2FsYy5wcm9ncmVzcyh0aGlzLmVsYXBzZWQgLSB2YWx1ZS5kZWxheSwgMCwgdmFsdWUuZHVyYXRpb24pIC0gdmFsdWUuc3RhZ2dlciwgMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgQWN0aW9uIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSB1dGlscy5zdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSB2YWx1ZVxuICAgICAgICAgICAgbmV3VmFsdWUgPSBlYXNlKHByb2dyZXNzLCB2YWx1ZS5vcmlnaW4sIHRhcmdldCwgdmFsdWUuZWFzZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgSWYgdGhpcyB0d2VlbiBoYXMgZW5kZWQsIGNoZWNrIGlmIHdlIGxvb3AveW95by9mbGlwXG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogSGFzIHRoaXMgdHdlZW4gcmVhbGx5IHJlYWxseSBlbmRlZD9cbiAgICAqL1xuICAgIGhhc0VuZGVkKGFjdG9yKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICAgICAgICBlYWNoKG5leHRTdGVwcywgKG5hbWUsIG1ldGhvZE5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja05leHRTdGVwKGFjdG9yLCBuYW1lLCB0aGlzW21ldGhvZE5hbWVdKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGFjdG9yLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lbmRlZDtcbiAgICB9XG5cbiAgICBjaGVja05leHRTdGVwKGFjdG9yLCBuYW1lLCBtZXRob2QpIHtcbiAgICAgICAgdmFyIHN0ZXBUYWtlbiA9IGZhbHNlLFxuICAgICAgICAgICAgc3RlcCA9IHRoaXNbbmFtZV0sXG4gICAgICAgICAgICBjb3VudCA9IHRoaXNbbmFtZSArIENPVU5UXSB8fCAwLFxuICAgICAgICAgICAgZm9yZXZlciA9IChzdGVwID09PSB0cnVlKTtcblxuICAgICAgICBpZiAoZm9yZXZlciB8fCB1dGlscy5pc051bShzdGVwKSkge1xuICAgICAgICAgICAgKytjb3VudDtcbiAgICAgICAgICAgIHRoaXNbbmFtZSArIENPVU5UXSA9IGNvdW50O1xuXG4gICAgICAgICAgICBpZiAoZm9yZXZlciB8fCBjb3VudCA8PSBzdGVwKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kLmNhbGwodGhpcywgYWN0b3IpO1xuICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RlcFRha2VuO1xuICAgIH1cblxuICAgIGZsaXBWYWx1ZXMoYWN0b3IpIHtcbiAgICAgICAgdmFyIGFjdG9yVmFsdWVzID0gYWN0b3IudmFsdWVzO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgICAgIGVhY2godGhpcy52YWx1ZXMsIChrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGFjdG9yVmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGVhY2godmFsdWUuY2hpbGRyZW4sIChjaGlsZEtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZU9wcy5mbGlwKGFjdG9yVmFsdWVzW2tleSArIGNoaWxkS2V5XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlT3BzLmZsaXAodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdXRpbHMuY3VycmVudFRpbWUoKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW47Il19