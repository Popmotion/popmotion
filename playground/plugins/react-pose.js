import React from 'react';
import styled from 'styled-components';
import { Pose } from '../../packages/react-pose/lib';

const Box = styled(Pose.div)`
  background-color: red;
  width: 100px;
  height: 100px;
`;

const poses = {
  open: {
    originX: '0px',
    originY: '50%',
    x: 50,
    scaleY: 0
  }
};

export const ReactPose = () => (
  <Box poses={poses} current="open" />
)
