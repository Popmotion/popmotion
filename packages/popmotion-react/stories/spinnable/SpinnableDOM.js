import React from 'react';
import spinnable from '../../../popmotion-spinnable/src';
import styled from 'styled-components';

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: red;
`;

export default class SpinnableDOM extends React.Component {
  setRef = (ref) => {
    if (ref) {
      spinnable(ref);
    }
  };

  render() {
    return <Box innerRef={this.setRef} />;
  }
}
