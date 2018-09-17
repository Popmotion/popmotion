import * as React from 'react';
import handleChildrenTransitions from './children';
import { Props, State } from './types';

class Transition extends React.PureComponent<Props> {
  static defaultProps = {
    preEnterPose: 'exit',
    enterPose: 'enter',
    exitPose: 'exit',
    animateOnMount: false,
    enterAfterExit: false,
    popFromLayoutOnExit: false
  };

  static getDerivedStateFromProps = handleChildrenTransitions;

  state: State = {
    children: [],
    leaving: {},
    hasMounted: false,
    scheduleChildRemoval: key => this.removeChild(key)
  };

  removeChild(key: string) {
    const { children, leaving } = this.state;
    const { enterAfterExit } = this.props;
    if (!leaving.hasOwnProperty(key)) return;

    leaving[key] = true;

    if (!Object.keys(leaving).every(Boolean)) return;

    const targetChildren = children.filter(
      child => !leaving.hasOwnProperty(child.key)
    );

    const newState = enterAfterExit
      ? {
          leaving: {},
          ...handleChildrenTransitions(
            { ...this.props, enterAfterExit: false },
            { ...this.state, children: targetChildren }
          )
        }
      : {
          leaving: {},
          children: targetChildren
        };

    this.setState(newState);
  }

  render() {
    return this.state.children;
  }
}

export default Transition;
