import { eachValue } from '../../../pose-core/src/inc/transition-composers';

const intelligentTransition = eachValue({});

// TODO: Return `decay` based on behavioural props
const intelligentDragEnd: Transition = ({ from }) => just(from);

export default new Map([
  ['default', intelligentTransition],
  ['dragging', dragAction],
  ['dragEnd', intelligentDragEnd]
]);
