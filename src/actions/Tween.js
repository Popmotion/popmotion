import Action from './Action';
import easing from './easing/preset-easing';
import { currentTime, isNum } from '../inc/utils';
import { ease, restrict, getProgressFromValue, stepProgress } from '../inc/calc';

const COUNT = 'Count';
const NEXT_STEPS = {
    loop: 'restart',
    yoyo: 'reverse',
    flip: 'flipValues'
};

class Tween extends Action {
    start() {
        this.elapsed = 0;
        this.flipCount = this.yoyoCount = this.loopCount = 0;
        this.isScrubbing = false;

        return super.start();
    }

    onUpdate(tween, frameStamp, elapsed) {
        const progressTarget = (this.playDirection === 1) ? 1 : 0;

        this.ended = true;

        if (!this.isScrubbing) {
            this.elapsed += (elapsed * this.dilate) * this.playDirection;
        }

        for (let i = 0; i < this.numValueKeys; i++) {
            const key = this.valueKeys[i];
            const value = this.values[key];

            let progress = restrict(getProgressFromValue(this.elapsed - value.delay, 0, value.duration), 0, 1);

            // Mark Tween as NOT ended if still in progress
            if (progress !== progressTarget) {
                this.ended = false;
            }

            // Step progress if we're stepping
            if (value.steps) {
                progress = stepProgress(progress, value.steps);
            }

            // Ease progress
            value.current = ease(progress, value.from, value.to, value.ease);
        }
    }

    onFrameEnd() {
        if (this.ended && !this.isScrubbing) {
            let stepTaken = false;

            for (let key in NEXT_STEPS) {
                if (NEXT_STEPS.hasOwnProperty(key)) {
                    if (isNum(this[key]) && this[key] > this[key + COUNT]) {
                        this[key + COUNT]++;
                        stepTaken = true;
                        this[NEXT_STEPS[key]]();
                    }
                }
            }

            if (!stepTaken) {
                this.complete();
            }
        }
    }

    flipValues() {
        const values = this.values;

        this.elapsed = this.duration - this.elapsed;

        for (let key in values) {
            if (values.hasOwnProperty(key)) {
                const value = values[key];
                [value.to, value.from] = [value.from, value.to];
            }
        }

        return this;
    }

    reverse() {
        this.playDirection *= -1;
        return this;
    }

    restart() {
        this.elapsed = (this.playDirection === 1) ? 0 : this.duration;
        this.started = currentTime();
        return this;
    }

    seek(progress) {
        this.seekTime(this.duration * progress);
        return this;
    }

    seekTime(elapsed) {
        if (!this.isActive) {
            this.once();
            this.isScrubbing = true;
        }

        this.elapsed = elapsed;

        return this;
    }
}

Tween.prototype.defaultValueProp = 'to';
Tween.prototype.defaultValue = Action.extendDefaultValue({
    delay: 0,
    duration: 300,
    ease: easing.easeOut,
    elapsed: 0,
    from: 0,
    steps: 0,
    to: 0,
    round: false
});
Tween.prototype.defaultProps = Action.extendDefaultProps({
    blend: true,
    dilate: 1,
    loop: 0,
    yoyo: 0,
    flip: 0,
    loopCount: 0,
    yoyoCount: 0,
    flipCount: 0,
    playDirection: 1,
    isScrubbing: false,
    ended: false,
    elapsed: 0
});

export default Tween;
