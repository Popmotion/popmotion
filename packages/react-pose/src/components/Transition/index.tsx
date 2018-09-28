import * as React from 'react';
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
    displayedChildren: [],
    finishedLeaving: {},
    hasInitialized: false,
    indexedChildren: {},
    scheduleChildRemoval: (key: string) => this.removeChild(key)
  };

  removeChild(key: string) {
    const { displayedChildren, finishedLeaving } = this.state;
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

    const targetChildren = displayedChildren.filter(
      child => !finishedLeaving.hasOwnProperty(child.key)
    );

    const newState = enterAfterExit
      ? {
          finishedLeaving: {},
          ...handleChildrenTransitions(
            { ...this.props, enterAfterExit: false },
            { ...this.state, displayedChildren: targetChildren }
          )
        }
      : {
          finishedLeaving: {},
          displayedChildren: targetChildren
        };

    this.setState(newState as State, onRest);
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return this.state !== nextState;
  }

  render() {
    return this.state.displayedChildren;
  }
}

export default Transition;
