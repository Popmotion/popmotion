import spring from 'popmotion/animations/spring';
import tween from 'popmotion/animations/tween';
import action, { Action } from 'popmotion/action';
import pointer from 'popmotion/input/pointer';
import { transitionProps } from './transition-composers';
import { RawValue, Transition } from '../types';

const singleAxisPointer = (axis: string) => (from: number) => pointer({ [axis]: from }).pipe((v) => v[axis]);
const pointerX = singleAxisPointer('x');
const pointerY = singleAxisPointer('y');

export const just = (from: RawValue) => action(({ update, complete }) => {
  update(from);
  complete();
});

const underDampedSpring: Transition = ({ from, velocity, to }) => spring({ from, to, velocity, stiffness: 500, damping: 25 });
const overDampedSpring: Transition = ({ from, velocity, to }) => spring({ from, to, velocity, stiffness: 700, damping: 35 });

export default new Map<string, Transition>([
  ['default', transitionProps({
    x: underDampedSpring,
    y: underDampedSpring,
    z: underDampedSpring,
    scaleX: overDampedSpring,
    scaleY: overDampedSpring,
    scale: overDampedSpring,
    default: tween
  })],
  ['dragging', ({ key, from }) => key === 'y' ? pointerY(from as number) : pointerX(from as number)],
  ['dragEnd', ({ from }) => just(from)]
]);
