import {
  action,
  spring,
  tween,
  pointer,
  transform,
  Action,
  ColdSubscription
} from 'popmotion';
import { linear } from '@popmotion/easing';
import { TransitionMap } from 'pose-core';
import { Transition, BoundingBoxDimension } from '../types';
import { percent } from 'style-value-types';
import { resolveProp } from '../dom/utils';
const { interpolate } = transform;

type PointerData = { x: number; y: number };

type AxisPointer = (
  from: number | string,
  directionLock: boolean,
  scrollUntilDragDirection: boolean
) => Action;
type AxisPointerFactory = (axis: 'x' | 'y') => AxisPointer;

const singleAxisPointer: AxisPointerFactory = axis => (
  from,
  directionLock,
  scrollUntilDragDirection
) =>
  action(({ update }) => {
    const initialAxisPos = typeof from === 'string' ? parseFloat(from) : from;
    let active: ColdSubscription;
    const stop = () => active && active.stop();

    const start = (props: { [key: string]: any }, toUpdate: Function) => {
      stop();
      active = pointer(props).start(toUpdate);
    };

    if (!directionLock && !scrollUntilDragDirection) {
      // If we're not tracking direction, just scroll normally
      start({ [axis]: initialAxisPos }, update);
    } else {
      // Or detect direction before we do stuff
      const otherAxis = axis === 'x' ? 'y' : 'x';

      start(
        { x: 0, y: 0, preventDefault: !scrollUntilDragDirection },
        (v: PointerData) => {
          const absAxis = Math.abs(v[axis]);
          const absOtherAxis = Math.abs(v[otherAxis]);

          // Maybe we could see whether the user is tracking just one axis and
          // Increase the angle of tolerance in that direction
          if (absAxis > absOtherAxis) {
            start({ [axis]: initialAxisPos + v[axis] }, update);
          } else if (absOtherAxis > absAxis) {
            stop();
          }
        }
      );
    }

    return { stop };
  }).pipe((v: any) => v[axis]);

const pointerX = singleAxisPointer('x');
const pointerY = singleAxisPointer('y');

const createPointer = (
  axisPointerCreator: AxisPointer,
  min: string,
  max: string,
  measurement: BoundingBoxDimension
): Transition => (transitionProps): Action => {
  const {
    from,
    type,
    dimensions,
    dragBounds,
    directionLock,
    scrollUntilDragDirection
  } = transitionProps;

  const axisPointer = axisPointerCreator(
    dimensions.measurementAsPixels(measurement, from, type),
    directionLock,
    scrollUntilDragDirection
  );
  const transformQueue: Array<(v: number) => number | string> = [];

  if (dragBounds) {
    const resolvedDragBounds = resolveProp(dragBounds, transitionProps);

    if (resolvedDragBounds[min] !== undefined) {
      transformQueue.push((v: number) =>
        Math.max(
          v,
          dimensions.measurementAsPixels(
            measurement,
            resolvedDragBounds[min],
            type
          )
        )
      );
    }
    if (resolvedDragBounds[max] !== undefined) {
      transformQueue.push((v: number) =>
        Math.min(
          v,
          dimensions.measurementAsPixels(
            measurement,
            resolvedDragBounds[max],
            type
          )
        )
      );
    }
  }

  // If we're not handling this axis as pixels, add a converter
  // Currently we're only handling % types but should look at vw/vh etc
  if (type === percent) {
    transformQueue.push(
      interpolate([0, dimensions.get(measurement) as number], [0, 100]),
      v => v + '%'
    );
  }

  return transformQueue.length
    ? axisPointer.pipe(...transformQueue)
    : axisPointer;
};

export const just = (from: any): Action =>
  action(({ update, complete }) => {
    update(from);
    complete();
  });

const underDampedSpring: Transition = ({ from, velocity, to }) =>
  spring({
    from,
    to,
    velocity,
    stiffness: 500,
    damping: 25,
    restDelta: 0.5,
    restSpeed: 10
  });

const overDampedSpring: Transition = ({ from, velocity, to }) =>
  spring({ from, to, velocity, stiffness: 700, damping: to === 0 ? 100 : 35 });

const linearTween: Transition = ({ from, to }) =>
  tween({ from, to, ease: linear });

// TODO: Adjust transitions based on behavioural props
const intelligentTransition: TransitionMap<Action> = {
  x: underDampedSpring,
  y: underDampedSpring,
  z: underDampedSpring,
  rotate: underDampedSpring,
  rotateX: underDampedSpring,
  rotateY: underDampedSpring,
  rotateZ: underDampedSpring,
  scaleX: overDampedSpring,
  scaleY: overDampedSpring,
  scale: overDampedSpring,
  opacity: linearTween,
  default: tween
};

const dragAction: TransitionMap<Action> = {
  ...intelligentTransition,
  x: createPointer(pointerX, 'left', 'right', BoundingBoxDimension.width),
  y: createPointer(pointerY, 'top', 'bottom', BoundingBoxDimension.height)
};

// TODO: Return `decay` based on behavioural props
const justAxis: Transition = ({ from }) => just(from);
const intelligentDragEnd: TransitionMap<Action> = {
  ...intelligentTransition,
  x: justAxis,
  y: justAxis
};

export default new Map<string, Transition | TransitionMap<Action>>([
  ['default', intelligentTransition],
  ['drag', dragAction],
  ['dragEnd', intelligentDragEnd]
]);
