import React from 'react';
import styled from 'styled-components';
import pose from '../../packages/popmotion-pose/lib';

const SidePanel = styled.div`
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
  initialPose: 'close',
  open: {
    x: '0%',
    delayChildren: 300,
    staggerChildren: 50
  },
  close: {
    x: '-100%'
  }
};

const itemProps = {
  initialPose: 'close',
  open: {
    opacity: 1,
    y: 0
  },
  close: {
    delay: 500,
    opacity: 0,
    y: 20
  }
};

export class PoseDOM extends React.Component {
  componentDidMount() {
    this.sidebarPoser = pose(this.sidebar, sidebarProps);
    this.items.forEach(item => this.sidebarPoser.addChild(pose(item, itemProps)));
  
    setTimeout(() => this.sidebarPoser.set('open'), 1000);
  }

  componentWillUnmount() {
    this.sidebarPoser.destroy();
  }

  items = [];

  setSidePanel = (ref) => {
    if (ref) this.sidebar = ref;
  };

  setItem = (ref) => {
    if (ref) this.items.push(ref);
  };

  close = () => this.sidebarPoser.set('close');

  render() {
    return (
      <SidePanel innerRef={this.setSidePanel} onClick={this.close}>
        <div ref={this.setItem} />
        <div ref={this.setItem} />
        <div ref={this.setItem} />
        <div ref={this.setItem} />
      </SidePanel>
    );
  }
}

