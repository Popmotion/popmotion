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
  background: #6B6066;
  padding: 30px;
  display: flex;
  transform: translateX(-100%);
  flex-direction: column;
`;

const Item = styled(Pose.div)`
  background: #FFFEFF;
  height: 40px;
  width: 100%;
  opacity: 0;
  margin-bottom: 10px;
`;

const sidebarProps = {
  open: {
    x: '0%',
    delayChildren: 300,
    staggerChildren: 50,
    staggerDirection: -1
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
    this.interval = setInterval(this.toggleState, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <SidePanel poses={sidebarProps} current={this.state.isOpen ? 'open' : 'closed'}>
        <Item poses={itemProps} />
        <Item poses={itemProps} />
        <Item poses={itemProps} />
        <Item poses={itemProps} />
      </SidePanel>
    );
  }
}

// const panelPoses = {
//   open: {
//     x: '0%',
//     delayChildren: 300,
//     staggerChildren: 50
//   },
//   closed: {
//     delay: 500,
//     x: '-100%'
//   }
// };

// const itemPoses = {
//   open: { opacity: 1, y: 0 },
//   closed: { opacity: 0, y: 20 }
// };

// const SidePanel = ({ isOpen, items }) => (
//   <Container poses={panePoses} current={isOpen ? 'open' : 'closed'}>
//     {items.map((item) => <Item poses={itemPoses} item={item} />)}
//   </Container>
// )
