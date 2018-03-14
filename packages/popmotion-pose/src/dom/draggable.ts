import listen from 'popmotion/input/listen';
import { ColdSubscription } from 'popmotion/action/types';
import { PoseSetter, ActiveActions, DragProps } from 'types';

export default (element: Element, set: PoseSetter, activeActions: ActiveActions, { onDragStart, onDragEnd }: DragProps) => activeActions.set(
  'dragStartListener',
  listen(element, 'mousedown touchstart').start((startEvent: MouseEvent | TouchEvent) => {
    startEvent.preventDefault();
    set('dragging');
    if (onDragStart) onDragStart(startEvent);

    activeActions.set(
      'dragEndListener',
      listen(document, 'mouseup touchend').start((endEvent: MouseEvent | TouchEvent) => {
        activeActions.get('dragEndListener').stop();
        set('dragEnd');
        if (onDragEnd) onDragEnd(endEvent);
      })
    );
  })
);

export { ColdSubscription };
