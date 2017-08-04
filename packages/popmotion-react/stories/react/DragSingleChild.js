import React from 'react';
import styled from 'styled-components';
import { pointer, trackOffset, transform } from '../../../../lib/popmotion';
import { MotionValue } from '../../src';
const { smooth } = transform;
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
      rest: ({ value, ref, setStateTo }) => {
        const { x, y } = value;
        x.stop();
        y.stop();

        ref.addEventListener('mousedown', setStateTo.isDragging);
        ref.addEventListener('touchstart', setStateTo.isDragging, { passive: false });
        document.removeEventListener('mouseup', setStateTo.rest);
        document.removeEventListener('touchend', setStateTo.rest);
      },
      isDragging: ({ value, e, setStateTo }) => {
        const { x, y } = value;
        const trackPointer = pointer(e).start();
console.log('is dragging')
        trackOffset(trackPointer.x, {
          from: x.get(),
          onUpdate: x
        }).start();

        trackOffset(trackPointer.y, {
          from: y.get(),
          onUpdate: y,
          onStop: () => trackPointer.stop()
        }).start();

        document.addEventListener('mouseup', setStateTo.rest);
        document.addEventListener('touchend', setStateTo.rest);
      }
    }}
  >
    {({ v, setRef }) => (
      <Box innerRef={setRef} style={{ transform: `translate(${v.x}px, ${v.y}px)` }} />
    )}
  </MotionValue>
);
