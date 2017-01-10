import tween from './tween';
import { linear } from '../inc/easing';
import { getProgressFromValue, getValueFromProgress } from '../inc/calc';
import { flow, clamp, bezier } from '../inc/transformers';

const clampProgress = clamp(0, 1);

function calcValueAtTime(from, to, duration, elapsed, ease) {
  const progressAtTime = ease(clampProgress(getProgressFromValue(0, duration, elapsed)));
  return getValueFromProgress(from, to, progressAtTime);
}

export default ({ from, to, onUpdate, accuracy = 60, ...props }) => {
  // Get tween properties
  const a = from;
  const b = to;
  const aCurrent = a.get();
  const aDuration = a.getProp('duration');
  const bDuration = b.getProp('duration');
  const aEase = a.getProp('ease');
  const bEase = b.getProp('ease');
  const aFrom = a.getProp('from');
  const bFrom = b.getProp('from');
  const aTo = a.getProp('to');
  const bTo = b.getProp('to');

  // Analyse tweens
  const overlapDuration = Math.min(aDuration - a.getElapsed(), bDuration);
  const bValueAtTweenOverlapComplete = calcValueAtTime(bFrom, bTo, bDuration, overlapDuration, bEase);
  const bStartsHigherThanA = (bFrom > aCurrent);
  const bEndsHigherThanA = (bValueAtTweenOverlapComplete > aTo);

  // Blend points are defined as [t = time, v = valueAtTime]
  // P1
  // The start of the tween blend
  const P1 = aCurrent;
  const blendPoints = [P1];

  // Find P2
  // The possible intersection point between the two tweens
  const tweensIntersect = (bStartsHigherThanA !== bEndsHigherThanA);
  if (tweensIntersect) {
    let timestep = overlapDuration / accuracy;

    for (let i = 0; i < accuracy; i++) {
      const runningTime = i * timestep;

      const aValueAtTime = calcValueAtTime(aFrom, aTo, aDuration, a.elapsed + runningTime, aEase);
      const bValueAtTime = calcValueAtTime(bFrom, bTo, bDuration, b.elapsed + runningTime, bEase);

      const hasIntersected = (
        (bStartsHigherThanA && aValueAtTime > bValueAtTime) ||
        (!bStartsHigherThanA && aValueAtTime < bValueAtTime)
      );

      if (hasIntersected) {
        const P2 = bValueAtTime;
        blendPoints.push(P2);
        break;
      }
    }
  }

  // P3
  // The points the two tweens stop overlapping
  const P3 = bValueAtTweenOverlapComplete;
  blendPoints.push(P3);

  // Push the end state of b tween as final control point
  const P4 = bTo;
  blendPoints.push(P4);

  return tween({
    ...props,
    duration: bDuration,
    ease: linear,
    onUpdate: flow(
      bezier(blendPoints),
      onUpdate
    )
  });
};
