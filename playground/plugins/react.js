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
  <Box draggable />
);

export const DragX = () => (
  <Box draggable="x" />
);

export const DragY = () => (
  <Box draggable="y" />
);

export const DragRangeClamp = () => (
  <Box draggable="x" range={{ left: 0, right: 300, top: 0, bottom: 300 }} elasticity={0.3} density={1} />
);

export const DragRange = () => (
  <Box draggable range={{ left: 0, right: 300, top: 0, bottom: 300 }} inputSmoothing={400} />
);

const positions = {
  left: {
    x: 0,
    transitions: {
      right: ({ from, to }) => tween({ from, to, duration: 500 })
    }
  },
  right: {
    x: 500
  }
};

export class ColorAnimation extends React.Component {
  state = {
    pose: positions.left,
    transitions: {

    }
  };

  togglePosition = () => {
    const { pose } = this.state;
    this.setState({ pose: pose === positions.left ? positions.right : positions.left });
  };

  render() {
    const { pose } = this.state;
    return <Box onClick={this.togglePosition} poseMap={pose} pose="left" />
  }
}
