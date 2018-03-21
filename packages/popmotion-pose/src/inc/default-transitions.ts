import spring from 'popmotion/animations/spring';
import tween from 'popmotion/animations/tween';
import action, { Action } from 'popmotion/action';
import pointer from 'popmotion/input/pointer';
import { eachValue } from './transition-composers';
import { RawValue, Transition } from '../types';

const singleAxisPointer = (axis: string) => (from: number) =>
  pointer({ [axis]: from }).pipe((v: any) => v[axis]);
const pointerX = singleAxisPointer('x');
const pointerY = singleAxisPointer('y');

const createPointer = (
  axisPointerCreator: (from: number) => Action,
  min: string,
  max: string
): Transition => ({ from, dragBounds }): Action => {
  const axisPointer = axisPointerCreator(from as number);
  const transformQueue: Array<(v: number) => number> = [];

  if (dragBounds) {
    if (dragBounds[min] !== undefined)
      transformQueue.push((v: number) => Math.max(v, dragBounds[min]));
    if (dragBounds[max] !== undefined)
      transformQueue.push((v: number) => Math.min(v, dragBounds[max]));
  }

  return transformQueue.length
    ? axisPointer.pipe(...transformQueue)
    : axisPointer;
};

export const just = (from: RawValue): Action =>
  action(({ update, complete }) => {
    update(from);
    complete();
  });

const underDampedSpring: Transition = ({ from, velocity, to }) =>
  spring({ from, to, velocity, stiffness: 500, damping: 25 });
const overDampedSpring: Transition = ({ from, velocity, to }) =>
  spring({ from, to, velocity, stiffness: 700, damping: 35 });

// TODO: Adjust transitions based on behavioural props
const intelligentTransition: Transition = eachValue({
  x: underDampedSpring,
  y: underDampedSpring,
  z: underDampedSpring,
  scaleX: overDampedSpring,
  scaleY: overDampedSpring,
  scale: overDampedSpring,
  default: tween
});

const dragAction: Transition = eachValue({
  x: createPointer(pointerX, 'left', 'right'),
  y: createPointer(pointerY, 'top', 'bottom')
});

// TODO: Return `decay` based on behavioural props
const intelligentDragEnd: Transition = ({ from }) => just(from);

export default new Map<string, Transition>([
  ['default', intelligentTransition],
  ['dragging', dragAction],
  ['dragEnd', intelligentDragEnd]
]);
