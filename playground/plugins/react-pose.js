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
  state = {
    isOpen: false
  }

  componentDidMount() {
    setTimeout(this.open, 2000)
  }

  open = () => this.setState({ isOpen: true })

  render() {
    return <Box poses={poses} values={{ x: this.state.x }} current={this.state.isOpen ? 'open' : 'closed'} />;
  }
}

const SidePanel = styled(Pose.div)`
  width: 300px;
  height: 100vh;
  background: red;
  padding: 30px;
  display: flex;
  transform: translateX(-100%);
  flex-direction: column;

  > div {
    background: blue;
    height: 40px;
    width: 100%;
    opacity: 0;
    margin-bottom: 10px;
  }
`;

const sidebarProps = {
  open: {
    x: '0%',
    delayChildren: 300,
    staggerChildren: 50
  },
  closed: {
    delay: 500,
    x: '-100%'
  }
};

const itemProps = {
  open: {
    opacity: 1,
    y: 0
  },
  closed: {
    opacity: 0,
    y: 20
  }
};

export class ReactPoseChildren extends React.PureComponent {
  state = { isOpen: false };

  toggleState = () => this.setState({
    isOpen: !this.state.isOpen
  })

  componentDidMount() {
    setInterval(this.toggleState, 2000)
  }

  render() {
    return (
      <SidePanel poses={sidebarProps} current={this.state.isOpen ? 'open' : 'closed'}>
        <Pose.div poses={itemProps} />
        <Pose.div poses={itemProps} />
        <Pose.div poses={itemProps} />
        <Pose.div poses={itemProps} />
      </SidePanel>
    );
  }
}
