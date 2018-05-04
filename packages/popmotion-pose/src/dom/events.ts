import listen from 'popmotion/input/listen';

const makeDraggable = (
  element,
  activeActions,
  setPose,
  { onDragStart, onDragEnd }
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

export default (element, activeActions, setPose, config) => {
  if (config.draggable) makeDraggable(element, activeActions, setPose, config);
};
