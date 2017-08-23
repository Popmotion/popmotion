import React from 'react';
import spinnable from '../../../popmotion-spinnable/src';

export default class SpinnableDOM extends React.Component {
  setRef = (ref) => {
    if (ref) {
      spinnable(ref);
    }
  };

  render() {
    return (
      <svg width={200} height={200} viewbox="0 0 200 200">
        <rect ref={this.setRef} width={100} height={100} x={50} y={50} fill="red" />
      </svg>
    );
  }
}
