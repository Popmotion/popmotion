import action from 'popmotion/action';
import { eachValue } from 'pose-core';

export const just = (from: RawValue): Action =>
  action(({ update, complete }) => {
    update(from);
    complete();
  });

const intelligentTransition = eachValue({});

// TODO: Return `decay` based on behavioural props
const intelligentDragEnd: Transition = ({ from }) => just(from);

export default new Map([
  ['default', intelligentTransition],
  ['dragging', dragAction],
  ['dragEnd', intelligentDragEnd]
]);
