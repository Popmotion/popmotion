import Action from './Action';
import easing from './easing/preset-easing';
import { currentTime, isNum } from '../inc/utils';
import {
    ease,
    restrict,
    getProgressFromValue,
    stepProgress
} from '../inc/calc';

const COUNT = 'Count';
const NEXT_STEPS = {
    loop: 'restart',
    yoyo: 'reverse',
    flip: 'flipValues'
};

export default class Tween extends Action {
    start() {
        super.start();
        this.elapsed = 0;
        this.flipCount = this.yoyoCount = this.loopCount = 0;

        return this;
    }

    onUpdate(tween, frameStamp, elapsed) {
        const progressTarget = (this.playDirection === 1) ? 1 : 0;

        this.ended = true;
        this.elapsed += (elapsed * this.dilate) * this.playDirection;

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
        if (this.ended) {
            let stepTaken = false;

            for (let key in NEXT_STEPS) {
                if (NEXT_STEPS.hasOwnProperty(key)) {
                    const maxSteps = this[key];

                    if (maxSteps === true || (isNum(maxSteps) && maxSteps > this[key + COUNT])) {
                        this[key + COUNT]++;
                        stepTaken = true;
                        this[NEXT_STEPS[key]]();
                    }
                }
            }

            if (!stepTaken) {
                this.stop();
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
        this.once();
        this.elapsed = elapsed;

        return this;
    }
    
    getDefaultProps() {
        return {
            ...super.getDefaultProps(),
            blend: true,
            delay: 0,
            dilate: 1,
            duration: 300,
            loop: false,
            yoyo: false,
            flip: false,
            playDirection: 1,
            ended: false,
            elapsed: 0
        };
    }

    getDefaultValue() {
        return {
            ...super.getDefaultValue(),
            delay: 0,
            duration: 300,
            ease: easing.easeOut,
            elapsed: 0,
            stagger: 0,
            steps: 0,
            to: 0,
            round: false
        };
    }

    getDefaultValueProp() {
        return 'to';
    }
}
