import listen from 'popmotion/input/listen';

const makeDraggable = (element, setPose, { onDragStart, onDragEnd }) =>
  activeActions.set(
    'dragStartListener',
    listen(element, 'mousedown touchstart').start(
      (startEvent: MouseEvent | TouchEvent) => {
        startEvent.preventDefault();
        setPose('dragging');

        if (onDragStart) onDragStart(startEvent);

        activeActions.set(
          'dragEndListener',
          listen(document, 'mouseup touchend').start(
            (endEvent: MouseEvent | TouchEvent) => {
              activeActions.get('dragEndListener').stop();
              setPose('dragEnd');
              if (onDragEnd) onDragEnd(endEvent);
            }
          )
        );
      }
    )
  );

export default (element, { draggable }, setPose, config) => {
  if (config.draggable) makeDraggable(element, setPose, config);
};
