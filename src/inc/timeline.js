import Tween from '../actions/Tween';
import { linear } from '../actions/easing/preset-easing';
import { relativeValue } from './calc';
import { each } from './utils';

/*
    @param [array]
        Sequential array of tweens, each item can be a tween or definition obj:

        [
            new Tween(),
            stagger(),
            timeline(),
            {
                tween: new Tween(),
                at: 100,
                offset: "+=100"
            }
        ]
*/
const analyze = (defs) => {
    const timeline = [];
    let currentPlayhead = 0;

    defs.forEach((def) => {
        const defIsObj = def.tween ? true : false;
        const tween = (defIsObj) ? def.tween : def;

        currentPlayhead += ((defIsObj && def.offset) ?
            def.at || relativeValue(currentPlayhead, def.offset) : 0);

        let duration = 0;
        each(tween.values, (value) => duration = Math.max(duration, value.duration));

        timeline.push({
            from: currentPlayhead,
            duration: duration,
            fire: tween.seekTime
        });

        currentPlayhead += tween.duration;
    });

    return { totalTime: currentPlayhead, timeline };
};

const setTweens = ({ timeline, timelineLength, state }) => {
    const playhead = state.p;

    for (let i = 0; i < timelineLength; i++) {
        const tween = timeline[i];
        const tweenTime = playhead - tween.from;

        if (tweenTime > 0 && tweenTime < tween.duration) {
            tween.fire(tweenTime);
        }
    }
};

export default function timeline(def, props = {}) {
    const { totalTime, timeline } = analyze(def);

    return new Tween({
        ...props,
        duration: totalTime,
        ease: linear,
        values: {
            p: 1
        },
        timeline: timeline,
        timelineLength: timeline.length,
        onRender: setTweens
    });
}