import { listen, ColdSubscription } from 'popmotion';
import { ActiveActions } from 'pose-core/lib/types';
import { DomPopmotionConfig } from '../types';

/**
 * TODO: Currently we add a new listener for every event,
 * it'd be better to add one listener for every pointer event and use
 * event delegation
 */

type Setter = (next: string) => Promise<any>;

type PointerEventsConfig = {
  startEvents: string;
  endEvents: string;
  startPose: string | string[];
  endPose: string | string[];
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
  setPose: Setter,
  config: DomPopmotionConfig
) => {
  const eventStartListener = listen(element, startEvents).start(
    (startEvent: MouseEvent | TouchEvent) => {
      startEvent.preventDefault();
      Array.isArray(startPose) ? startPose.map(setPose) : setPose(startPose);

      if (config[startCallback]) config[startCallback](startEvent);

      const eventEndListener = listen(
        useDocumentToEnd ? document : element,
        endEvents
      ).start((endEvent: MouseEvent | TouchEvent) => {
        activeActions.get(endListener).stop();
        Array.isArray(endPose) ? endPose.map(setPose) : setPose(endPose);
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
  startPose: 'dragging',
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
  startPose: 'hovering',
  endPose: ['default', 'hoverEnd'],
  startCallback: 'onHoverStart',
  endCallback: 'onHoverEnd',
  startListener: 'hoverStartListener',
  endListener: 'hoverEndListener'
});

export default (
  element: Element,
  activeActions: ActiveActions<ColdSubscription>,
  setPose: Setter,
  { props }: DomPopmotionConfig
) => {
  if (props.draggable) makeDraggable(element, activeActions, setPose, props);
  if (props.hoverable) makeHoverable(element, activeActions, setPose, props);
};
