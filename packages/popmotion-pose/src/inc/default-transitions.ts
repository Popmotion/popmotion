import { spring, tween, action, easing, pointer, transform } from 'popmotion';
import { Action } from 'popmotion/action';
import { eachValue } from './transition-composers';
import { Transition, BoundingBoxDimension } from '../types';
import { percent } from 'style-value-types';
const { linear } = easing;
const { interpolate } = transform;

const singleAxisPointer = (axis: string) => (from: number) =>
  pointer({ [axis]: from }).pipe((v: any) => v[axis]);
const pointerX = singleAxisPointer('x');
const pointerY = singleAxisPointer('y');

const createPointer = (
  axisPointerCreator: (from: number) => Action,
  min: string,
  max: string,
  measurement: BoundingBoxDimension
): Transition => ({ from, type, dimensions, dragBounds }): Action => {
  const axisPointer = axisPointerCreator(
    dimensions.measurementAsPixels(measurement, from, type)
  );
  const transformQueue: Array<(v: number) => number> = [];

  if (dragBounds) {
    if (dragBounds[min] !== undefined)
      transformQueue.push((v: number) =>
        Math.max(
          v,
          dimensions.measurementAsPixels(measurement, dragBounds[min], type)
        )
      );
    if (dragBounds[max] !== undefined)
      transformQueue.push((v: number) =>
        Math.min(
          v,
          dimensions.measurementAsPixels(measurement, dragBounds[max], type)
        )
      );
  }

  // If we're not handling this axis as pixels, add a converter
  // Currently we're only handling % types but should look at vw/vh etc
  if (type === percent) {
    transformQueue.push(
      interpolate([0, dimensions.get(measurement) as number], [0, 100])
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
const intelligentTransition: Transition = eachValue({
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
});

const dragAction: Transition = eachValue({
  x: createPointer(pointerX, 'left', 'right', BoundingBoxDimension.width),
  y: createPointer(pointerY, 'top', 'bottom', BoundingBoxDimension.height)
});

// TODO: Return `decay` based on behavioural props
const intelligentDragEnd: Transition = ({ from }) => just(from);

export default new Map<string, Transition>([
  ['default', intelligentTransition],
  ['dragging', dragAction],
  ['dragEnd', intelligentDragEnd]
]);
