import { listen, ColdSubscription } from 'popmotion';
import { ActiveActions } from 'pose-core';
import { DomPopmotionConfig, DomPopmotionPoser } from '../types';

/**
 * TODO: Currently we add a new listener for every event,
 * it'd be better to add one listener for every pointer event and use
 * event delegation
 */

type UIEventConfig = {
  startEvents: string;
  endEvents: string;
  startPose: string;
  endPose: string;
  startCallback?: string;
  endCallback?: string;
  useDocumentToEnd?: boolean;
  preventScroll?: boolean;
};

type UIEventApplicator = (
  element: Element,
  activeActions: ActiveActions<ColdSubscription>,
  poser: DomPopmotionPoser,
  config: DomPopmotionConfig
) => void;

const makeUIEventApplicator = ({
  startEvents,
  endEvents,
  startPose,
  endPose,
  startCallback,
  endCallback,
  useDocumentToEnd,
  preventScroll
}: UIEventConfig): UIEventApplicator => (
  element,
  activeActions,
  poser,
  config
) => {
  const startListener = startPose + 'Start';
  const endListener = startPose + 'End';
  const moveListener = startPose + 'Move';

  const eventStartListener = listen(element, startEvents).start(
    (startEvent: MouseEvent | TouchEvent) => {
      if (preventScroll) {
        const touchMoveListener = listen(element, 'touchmove', {
          passive: false
        }).start((e: TouchEvent) => {
          e.preventDefault();
        });
        activeActions.set(moveListener, touchMoveListener);
      }

      poser.set(startPose);

      if (startCallback && config[startCallback])
        config[startCallback](startEvent);

      const eventEndListener = listen(
        useDocumentToEnd ? document.documentElement : element,
        endEvents + (useDocumentToEnd ? ' mouseenter' : '')
      ).start((endEvent: MouseEvent | TouchEvent) => {
        // If this is a window event, detect mouse reentries without the left button
        // pressed and detect them as an end event. This might be a candidate to be moved within Popmotion.
        if (
          useDocumentToEnd &&
          endEvent.type === 'mouseenter' &&
          (endEvent as MouseEvent).buttons === 1
        ) {
          return;
        }

        if (preventScroll) activeActions.get(moveListener).stop();

        activeActions.get(endListener).stop();

        poser.unset(startPose);
        poser.set(endPose);
        if (endCallback && config[endCallback]) config[endCallback](endEvent);
      });

      activeActions.set(endListener, eventEndListener);
    }
  );

  activeActions.set(startListener, eventStartListener);
};

const events: { [key: string]: UIEventApplicator } = {
  draggable: makeUIEventApplicator({
    startEvents: 'mousedown touchstart',
    endEvents: 'mouseup touchend',
    startPose: 'drag',
    endPose: 'dragEnd',
    startCallback: 'onDragStart',
    endCallback: 'onDragEnd',
    useDocumentToEnd: true,
    preventScroll: true
  }),
  hoverable: makeUIEventApplicator({
    startEvents: 'mouseenter',
    endEvents: 'mouseleave',
    startPose: 'hover',
    endPose: 'hoverEnd'
  }),
  focusable: makeUIEventApplicator({
    startEvents: 'focus',
    endEvents: 'blur',
    startPose: 'focus',
    endPose: 'blur'
  }),
  pressable: makeUIEventApplicator({
    startEvents: 'mousedown touchstart',
    endEvents: 'mouseup touchend',
    startPose: 'press',
    endPose: 'pressEnd',
    startCallback: 'onPressStart',
    endCallback: 'onPressEnd',
    useDocumentToEnd: true
  })
};

const eventKeys = Object.keys(events);

export default (
  element: Element,
  activeActions: ActiveActions<ColdSubscription>,
  poser: DomPopmotionPoser,
  { props }: DomPopmotionConfig
) =>
  eventKeys.forEach(key => {
    if (props[key]) events[key](element, activeActions, poser, props);
  });
