import React from 'react';
import { Box } from '../inc';
import pointer from '../../packages/popmotion/lib/input/pointer';
import { MotionValue } from '../../packages/popmotion-react/lib';

const stateChangeHandlers = {
  isDragging: ({ value }) => pointer(value.get()).start(value),
  rest: ({ value }) => value.stop()
};

export const PopmotionReact = () => (
  <MotionValue v={{ x: 0, y: 0 }} onStateChange={stateChangeHandlers}>
    {({ v, setStateTo }) => (
      <Box
        style={{ transform: `translateX(${v.x}px) translateY(${v.y}px)` }}
        onMouseDown={setStateTo.isDragging}
        onMouseUp={setStateTo.rest}
      />
    )}
  </MotionValue>
);
