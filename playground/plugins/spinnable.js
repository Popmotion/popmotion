import React from 'react';
import { Box } from '../inc';
import spinnable from '../../packages/popmotion-spinnable/lib';
import Spinnable from '../../packages/popmotion-spinnable/lib/react';

export class SpinnableDOM extends React.Component {
  setRef = (dom) => {
    if (!dom) dom;
    this.box = spinnable(dom);
  };

  render() {
    return <Box innerRef={this.setRef} />;
  }
}

export const SpinnableReact = () => (
  <Spinnable>
    <Box />
  </Spinnable>
);
