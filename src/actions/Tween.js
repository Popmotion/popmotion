import Action from './Action';
import { easeOut } from './easing/preset-easing';
import {
    currentTime,
    each,
    isNum
} from '../inc/utils';
import {
    restrict,
    getProgressFromValue,
    getValueFromProgress,
    stepProgress
} from '../inc/calc';

const COUNT = 'Count';
const NEXT_STEPS = {
    loop: 'restart',
    yoyo: 'reverse',
    flip: 'flipValues'
};

/*
    Ease value within ranged parameters
    
    @param [number]: Progress between 0 and 1
    @param [number]: Value of 0 progress
    @param [number]: Value of 1 progress
    @param [string || function]: Name of preset easing
        to use or generated easing function
    @return [number]: Value of eased progress in range
*/ 
const ease = (progress, from, to, ease) => {
    const progressLimited = restrict(progress, 0, 1);
    const easedProgress = ease(progressLimited);

    return getValueFromProgress(easedProgress, from, to);
};

export default class Tween extends Action {
    start() {
        super.start();
        this.elapsed = 0;
        this.flipCount = this.yoyoCount = this.loopCount = 0;
    }

    onUpdate(tween, frameStamp, elapsed) {
        const progressTarget = (this.playDirection === 1) ? 1 : 0;

        this.ended = true;
        this.elapsed += (elapsed * this.dilate) * this.playDirection;

        each(this.values, (value) => {
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
        });
    }

    onFrameEnd() {
        if (this.ended) {
            let stepTaken = false;

            each(NEXT_STEPS, (method, step) => {
                const maxSteps = this[step];

                if (maxSteps === true || (isNum(maxSteps) && maxSteps > this[step + COUNT])) {
                    this[step + COUNT]++;
                    stepTaken = true;
                    this[method]();
                }
            });

            if (!stepTaken) {
                this.stop();
            }
        }
    }

    flipValues() {
        this.elapsed = this.duration - this.elapsed;

        each(this.values, (value) => {
            [value.to, value.from] = [value.from, value.to];
        });
    }

    reverse() {
        this.playDirection *= -1;
    }

    restart() {
        this.elapsed = (this.playDirection === 1) ? 0 : this.duration;
        this.started = currentTime();
    }

    seek(progress) {
        this.seekTime(this.duration * progress);
    }

    seekTime(elapsed) {
        this.once();
        this.elapsed = elapsed;
    }
    
    getDefaultProps() {
        return {
            ...super.getDefaultProps(),
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
            ease: easeOut,
            elapsed: 0,
            stagger: 0,
            steps: 0,
            from: 0,
            to: 0,
            round: false
        };
    }

    getDefaultValueProp() {
        return 'to';
    }
}
