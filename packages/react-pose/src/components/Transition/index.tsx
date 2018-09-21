import * as React from 'react';
import { Fragment } from 'react';
import { Props, State } from './types';
import handleChildrenTransitions from './children';

class Transition extends React.Component<Props, State> {
  static defaultProps = {
    flipMove: false,
    enterAfterExit: false,
    preEnterPose: 'exit',
    enterPose: 'enter',
    exitPose: 'exit'
  };

  static getDerivedStateFromProps = handleChildrenTransitions;

  state: State = {
    children: [],
    incomingChildren: [],
    finishedLeaving: {},
    scheduleChildRemoval: key => this.removeChild(key)
  };

  removeChild(key: string) {
    const { children, finishedLeaving } = this.state;
    const { enterAfterExit, onRest } = this.props;
    if (!finishedLeaving.hasOwnProperty(key)) return;

    finishedLeaving[key] = true;

    if (
      !Object.keys(finishedLeaving).every(
        leavingKey => finishedLeaving[leavingKey]
      )
    ) {
      return;
    }

    const targetChildren = children.filter(
      child => !finishedLeaving.hasOwnProperty(child.key)
    );

    const newState = enterAfterExit
      ? {
          finishedLeaving: {},
          ...handleChildrenTransitions(
            { ...this.props, enterAfterExit: false },
            { ...this.state, children: targetChildren }
          )
        }
      : {
          finishedLeaving: {},
          children: targetChildren
        };

    this.setState(newState, onRest);
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return this.state !== nextState;
  }

  render() {
    return <Fragment>{this.state.children}</Fragment>;
  }
}

export default Transition;
