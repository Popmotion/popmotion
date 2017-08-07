import React from 'react';
import { spring } from '../../../../lib/popmotion';
import { MotionValue } from '../../src';

const makeSpring = (value, to) => spring({
  stiffness: 1000,
  damping: 500,
  mass: 3,
  from: value.get(),
  to,
  velocity: value.getVelocity(),
  onUpdate: value
});

export default () => (
  <MotionValue
    onStateChange={{
      on: ({value}) => {
        console.log(value.getVelocity())
        makeSpring(value, 800).start();
      },
      off: ({value}) => {
        console.log(value.getVelocity())
        makeSpring(value, 0).start();
      }
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
