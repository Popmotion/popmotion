import React from 'react';
import { tween } from 'popmotion';
import { MotionValue } from '../src';

export default () => (
  <MotionValue
    onStateChange={{
      on: ({value}) => tween({
        from: value.get(),
        to: 100,
        onUpdate: value
      }).start(),
      off: ({value}) => tween({
        from: value.get(),
        to: 0,
        onUpdate: value
      }).start()
    }}
  >
    {({ v, state, setStateTo }) => (
      <div
        style={{
          background: 'red',
          width: '100px',
          height: '100px',
          transform: 'translateX(' + v + 'px)'
        }}
        onClick={state === 'on' ? setStateTo.off : setStateTo.on}
      />
    )}
  </MotionValue>
);
