import listen from 'popmotion/input/listen';
import { ColdSubscription } from 'popmotion/action/types';
import { PoseSetter, ActiveActions, DragProps } from '../types';

export const addDragListeners = (
  element: Element,
  set: PoseSetter,
  activeActions: ActiveActions,
  { onDragStart, onDragEnd }: DragProps
) =>
  activeActions.set(
    'dragStartListener',
    listen(element, 'mousedown touchstart').start(
      (startEvent: MouseEvent | TouchEvent) => {
        startEvent.preventDefault();
        set('dragging');
        if (onDragStart) onDragStart(startEvent);

        activeActions.set(
          'dragEndListener',
          listen(document, 'mouseup touchend').start(
            (endEvent: MouseEvent | TouchEvent) => {
              activeActions.get('dragEndListener').stop();
              set('dragEnd');
              if (onDragEnd) onDragEnd(endEvent);
            }
          )
        );
      }
    )
  );

const isMouseEvent = (e: MouseEvent | TouchEvent) => typeof e.touches === 'undefined';

export const addHoverListeners = (
  element: Element,
  set: PoseSetter,
  activeActions: ActiveActions
) => activeActions.set(
  'hoverStartListener',
  listen(element, 'mouseenter')
    .filter(isMouseEvent)
    .start((startEvent: MouseEvent) => {
      set('hoverIn');
      if (onHover) onHover(startEvent);

      activeActions.set(
        'hoverEventListener',
        listen(element, 'mouseleave')
      )
    })
)

export { ColdSubscription };
