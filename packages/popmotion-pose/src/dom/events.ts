import { listen, ColdSubscription } from 'popmotion';
import { ActiveActions } from 'pose-core/lib/types';
import { DomPopmotionConfig, DomPopmotionPoser } from '../types';

/**
 * TODO: Currently we add a new listener for every event,
 * it'd be better to add one listener for every pointer event and use
 * event delegation
 */

type PointerEventsConfig = {
  startEvents: string;
  endEvents: string;
  startPose: string;
  endPose: string;
  startCallback: string;
  endCallback: string;
  startListener: string;
  endListener: string;
  useDocumentToEnd?: boolean;
};

const makePointerEvent = ({
  startEvents,
  endEvents,
  startPose,
  endPose,
  startCallback,
  endCallback,
  startListener,
  endListener,
  useDocumentToEnd
}: PointerEventsConfig) => (
  element: Element,
  activeActions: ActiveActions<ColdSubscription>,
  poser: DomPopmotionPoser,
  config: DomPopmotionConfig
) => {
  const eventStartListener = listen(element, startEvents).start(
    (startEvent: MouseEvent | TouchEvent) => {
      startEvent.preventDefault();

      poser.set(startPose);

      if (config[startCallback]) config[startCallback](startEvent);

      const eventEndListener = listen(
        useDocumentToEnd ? document : element,
        endEvents
      ).start((endEvent: MouseEvent | TouchEvent) => {
        activeActions.get(endListener).stop();
        poser.unset(startPose);
        poser.set(endPose);
        if (config[endCallback]) config[endCallback](endEvent);
      });

      activeActions.set(endListener, eventEndListener);
    }
  );

  activeActions.set(startListener, eventStartListener);
};

const makeDraggable = makePointerEvent({
  startEvents: 'mousedown touchstart',
  endEvents: 'mouseup touchend',
  startPose: 'drag',
  endPose: 'dragEnd',
  startCallback: 'onDragStart',
  endCallback: 'onDragEnd',
  startListener: 'dragStartListener',
  endListener: 'dragEndListener',
  useDocumentToEnd: true
});

const makeHoverable = makePointerEvent({
  startEvents: 'mouseenter',
  endEvents: 'mouseleave',
  startPose: 'hover',
  endPose: 'hoverEnd',
  startCallback: 'onHoverStart',
  endCallback: 'onHoverEnd',
  startListener: 'hoverStartListener',
  endListener: 'hoverEndListener'
});

export default (
  element: Element,
  activeActions: ActiveActions<ColdSubscription>,
  poser: DomPopmotionPoser,
  { props }: DomPopmotionConfig
) => {
  if (props.draggable) makeDraggable(element, activeActions, poser, props);
  if (props.hoverable) makeHoverable(element, activeActions, poser, props);
};
