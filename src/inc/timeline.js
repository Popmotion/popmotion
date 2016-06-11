import Tween from '../actions/Tween';
import easing from '../actions/easing/preset-easing';
import { relativeValue } from './calc';

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
  const numDefs = defs.length;
  let currentPlayhead = 0;

  for (let i = 0; i < numDefs; i++) {
    const def = defs[i];
    const defIsObj = def.tween ? true : false;
    const tween = (defIsObj) ? def.tween : def;

    if (defIsObj) {
      if (def.offset !== undefined) {
        currentPlayhead = relativeValue(currentPlayhead, def.offset);
      } else if (def.at !== undefined) {
        currentPlayhead = def.at;
      }
    }

    let duration = 0;
    for (let key in tween.values) {
      if (tween.values.hasOwnProperty(key)) {
        const value = tween.values[key];
        duration = Math.max(duration, value.duration);
      }
    }

    timeline.push({
      from: currentPlayhead,
      duration: duration,
      fire: (time) => tween.seekTime(time)
    });

    currentPlayhead += duration;
  }

  return { totalTime: currentPlayhead, timeline };
};

const setTweens = ({ timeline, timelineLength, values, duration }) => {
  for (let i = 0; i < timelineLength; i++) {
    const tween = timeline[i];
    const tweenTime = (values.p.current * duration) - tween.from;

    if (tweenTime >= -50 && tweenTime <= tween.duration + 50) {
      tween.fire(tweenTime);
    }
  }
};

export default function timeline(def, props = {}) {
  const { totalTime, timeline } = analyze(def);

  return new Tween({
    ease: easing.linear,
    ...props,
    duration: totalTime,
    values: {
      p: 1
    },
    timeline: timeline,
    timelineLength: timeline.length,
    onRender: setTweens
  });
}