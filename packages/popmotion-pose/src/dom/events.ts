import { listen } from 'popmotion';
import { ActiveActions } from 'pose-core/lib/types';
import { ColdSubscription } from 'popmotion/action/types';
import { DomPopmotionConfig } from '../types';

type Setter = (next: string) => Promise<any>;

const makeDraggable = (
  element: Element,
  activeActions: ActiveActions<ColdSubscription>,
  setPose: Setter,
  { onDragStart, onDragEnd }: DomPopmotionConfig
) => {
  const dragStartListener = listen(element, 'mousedown touchstart').start(
    (startEvent: MouseEvent | TouchEvent) => {
      startEvent.preventDefault();
      setPose('dragging');

      if (onDragStart) onDragStart(startEvent);

      const dragEndListener = listen(document, 'mouseup touchend').start(
        (endEvent: MouseEvent | TouchEvent) => {
          activeActions.get('dragEndListener').stop();
          setPose('dragEnd');
          if (onDragEnd) onDragEnd(endEvent);
        }
      );

      activeActions.set('dragEndListener', dragEndListener);
    }
  );

  activeActions.set('dragStartListener', dragStartListener);
};

export default (
  element: Element,
  activeActions: ActiveActions<ColdSubscription>,
  setPose: Setter,
  { props }: DomPopmotionConfig
) => {
  if (props.draggable) makeDraggable(element, activeActions, setPose, props);
};
