import React from 'react';
import { spring } from '../../../../lib/popmotion';
import { MotionValue } from '../../src';

const springProps = {
  stiffness: 1000,
  damping: 500,
  mass: 3
};

export default () => (
  <MotionValue
    onStateChange={{
      on: ({value}) => {
        spring({
          from: value.get(),
          to: 800,
          ...springProps,
          velocity: value.getVelocity(),
          onUpdate: value
        }).start()
      },
      off: ({value}) => spring({
        from: value.get(),
        to: 0,
        ...springProps,
        velocity: value.getVelocity(),
        onUpdate: value
      }).start()
    }}
  >
    {({ v, state, setStateTo }) => (
      <div style={{ width: '100vw', height: '100vh' }} onClick={state === 'on' ? setStateTo.off : setStateTo.on}>
        <div
          style={{
            background: 'red',
            width: '100px',
            height: '100px',
            transform: 'translateX(' + v + 'px)'
          }}
        />
      </div>
    )}
  </MotionValue>
);
