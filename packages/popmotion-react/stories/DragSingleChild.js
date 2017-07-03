import React from 'react';
import styled from 'styled-components';
import { pointer, trackOffset } from 'popmotion';
import { MotionValue } from '../src';

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: red;
`;

export default () => (
  <MotionValue
    initialState="rest"
    v={{ x: 0, y: 0 }}
    onStateChange={{
      rest: ({ x, y }) => {
        x.stop();
        y.stop();
      },
      isDragging: ({ x, y }, currentState, e) => {
        const trackPointer = pointer(e).start();

        trackOffset(trackPointer.x, {
          from: x.get(),
          onUpdate: x
        }).start();

        trackOffset(trackPointer.y, {
          from: y.get(),
          onUpdate: y,
          onStop: () => trackPointer.stop()
        }).start();
      }
    }}
  >
    {({ v, setStateTo }) => (
      <Box
        onMouseDown={setStateTo.isDragging}
        onTouchStart={setStateTo.isDragging}
        onMouseUp={setStateTo.rest}
        onTouchEnd={setStateTo.rest}
        style={{ transform: `translate(${v.x}px, ${v.y}px)` }}
      />
    )}
  </MotionValue>
);
