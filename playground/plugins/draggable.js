import React from 'react';
import { Box } from '../inc';
import draggable from '../../packages/popmotion-draggable/lib';
import Draggable from '../../packages/popmotion-draggable/lib/react';

export class DraggableDOM extends React.Component {
  setRef = (dom) => {
    if (!dom) dom;
    this.box = draggable(dom);
  };

  render() {
    return <Box innerRef={this.setRef} />;
  }
}

export const DraggableReact = () => (
  <Draggable>
    <Box />
  </Draggable>
);
