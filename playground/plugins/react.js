import React from 'react';
import styled from 'styled-components';
//import pointer from '../../packages/popmotion/lib/input/pointer';
import Motion from '../../packages/popmotion-react/lib/Motion';

const Box = styled(Motion.div)`
  width: 100px;
  height: 100px;
  background: red;
`;

export const DragXY = () => (
  <Box isDraggable />
);

export const DragX = () => (
  <Box isDraggable="x" />
);

export const DragY = () => (
  <Box isDraggable="y" />
);

export const DragRangeClamp = () => (
  <Box isDraggable="x" range={{ left: 0, right: 300 }} elasticity={0.3} density={1} />
);

export const DragRange = () => (
  <Box isDraggable range={{ left: 0, right: 300 }} />
);
