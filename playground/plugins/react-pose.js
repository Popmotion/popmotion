import React from 'react';
import styled from 'styled-components';
import { Pose } from '../../packages/react-pose/lib';

const Box = styled(Pose.div)`
  background-color: red;
  width: 100px;
  height: 100px;
  transform-origin: 0 0;
`;

const poses = {
  open: {
    scaleX: 1
  },
  closed: {
    scaleX: 0
  }
};

export class ReactPose extends React.PureComponent {
  state = { isOpen: false }

  componentDidMount() {
    setTimeout(this.open, 500)
  }

  open = () => this.setState({ isOpen: true })

  render() {
    return <Box draggable poses={poses} current={this.state.isOpen ? 'open' : 'closed'} />;
  }
}
