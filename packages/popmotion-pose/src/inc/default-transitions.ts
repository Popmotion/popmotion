import { spring, tween, action, pointer, transform, Action } from 'popmotion';
import { linear } from '@popmotion/easing';
import { TransitionMap } from 'pose-core';
import {
  Transition,
  BoundingBoxDimension,
  TransitionDefinition
} from '../types';
import { percent } from 'style-value-types';
import { resolveProp } from '../dom/utils';
const { interpolate } = transform;

const singleAxisPointer = (axis: string) => (from: number | string) =>
  pointer({
    [axis]: typeof from === 'string' ? parseFloat(from) : from
  }).pipe((v: any) => v[axis]);
const pointerX = singleAxisPointer('x');
const pointerY = singleAxisPointer('y');

const createPointer = (
  axisPointerCreator: (from: number | string) => Action,
  min: string,
  max: string,
  measurement: BoundingBoxDimension
): Transition => (transitionProps): Action => {
  const { from, type, dimensions, dragBounds } = transitionProps;

  const axisPointer = axisPointerCreator(
    dimensions.measurementAsPixels(measurement, from, type)
  );
  const transformQueue: Array<Function> = [];

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
      interpolate([0, dimensions.get(measurement) as number], [0, 100], { clamp: false }),
      (v: number) => v + '%'
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
const intelligentTransition: TransitionMap<Action, TransitionDefinition> = {
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

const dragAction: TransitionMap<Action, TransitionDefinition> = {
  ...intelligentTransition,
  x: createPointer(pointerX, 'left', 'right', BoundingBoxDimension.width),
  y: createPointer(pointerY, 'top', 'bottom', BoundingBoxDimension.height)
};

// TODO: Return `decay` based on behavioural props
const justAxis: Transition = ({ from }) => just(from);
const intelligentDragEnd: TransitionMap<Action, TransitionDefinition> = {
  ...intelligentTransition,
  x: justAxis,
  y: justAxis
};

export default new Map<string, TransitionMap<Action, TransitionDefinition>>([
  ['default', intelligentTransition],
  ['drag', dragAction],
  ['dragEnd', intelligentDragEnd]
]);
