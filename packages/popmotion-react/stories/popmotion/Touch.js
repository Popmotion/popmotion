import React from 'react';
import touches from '../../../../lib/actions/touches';
import { MotionValue } from '../../src';

export default class extends React.Component {
  setRef = (ref) => {
    if (ref) {
      ref.addEventListener('touchstart', (e) => {
        touches(e, { onUpdate: (v) => console.log(v[0]) }).start();
      });
    }
  };

  render() {
    return (
      <div
        ref={this.setRef}
        style={{
          background: 'red',
          width: '100px',
          height: '100px',
        }}
      />
    );
  }
}
