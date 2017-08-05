import React from 'react';
import { spring } from 'popmotion';
import { MotionValue } from '../../src';

const springProps = {
  stiffness: 10000,
  damping: 10,
  mass: 10,
  velocity: 1000
};

export default () => (
  <MotionValue
    onStateChange={{
      on: ({value}) => spring({
        from: value.get(),
        to: 300,
        ...springProps,
        onUpdate: value
      }).start(),
      off: ({value}) => spring({
        from: value.get(),
        to: 0,
        ...springProps,
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
