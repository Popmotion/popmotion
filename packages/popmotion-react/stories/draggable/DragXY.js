import React from 'react';
import draggable from '../../../popmotion-draggable/lib';
import styled from 'styled-components';

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: red;
`;

export default class DragXY extends React.Component {
  setRef = (ref) => {
    if (ref) {
      draggable(ref, {
        y: false
      });
    }
  };

  render() {
    return <Box innerRef={this.setRef} />;
  }
}
