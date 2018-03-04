import action from 'popmotion/action';
import pointer from 'popmotion/input/pointer';

const singleAxisPointer = (axis) => (from) => pointer({ [axis]: from }).pipe(v => v[axis]);
export const pointerX = singleAxisPointer('x');
export const pointerY = singleAxisPointer('y');

export const just = (from) => action(({ update, complete }) => {
  update(from);
  complete();
});
