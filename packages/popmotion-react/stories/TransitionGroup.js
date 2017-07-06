import React from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { MotionValue } from '../src';
import { tween, transform } from 'popmotion';
import styled from 'styled-components';
const { px } = transform;

const Box = styled.div`
  height: 100px;
  background: red;
`;

const stateChangeHandlers = {
  componentWillEnter: ({ value, onComplete }) => tween({
    from: value.get(),
    to: 100,
    onUpdate: value,
    onComplete
  }).start(),
  componentWillLeave: ({ value, onComplete }) => tween({
    from: value.get(),
    to: 0,
    onUpdate: value,
    onComplete
  }).start()
};


export default class TransitionGroupExample extends React.Component {
  state = {
    numChildren: 0
  };

  componentDidMount() {
    let direction = 1;
    this.interval = setInterval(() => {
      const { numChildren } = this.state;

      if (numChildren > 4) {
        direction = -1;
      } else if (numChildren < 0) {
        direction = 1;
      }
      
      this.setState({
        numChildren: numChildren + direction
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const children = [];
    const { numChildren } = this.state;

    for (let i = 0; i < numChildren; i++) {
      children.push(
        <MotionValue key={i} onStateChange={stateChangeHandlers}>
          {({ v }) => <Box style={{ width: px(v) }} />}
        </MotionValue>
      );
    }

    return (
      <TransitionGroup>
        {children}
      </TransitionGroup>
    );
  }
}
