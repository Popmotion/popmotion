import * as React from 'react';
import { Fragment } from 'react';
import { Props, State } from './types';
import {
  handleIncomingChildren,
  makeChildList,
  removeFromChildren
} from './children';

class Transition extends React.Component<Props, State> {
  static defaultProps = {
    flipMove: false,
    preEnterPose: 'exit',
    enterPose: 'enter',
    exitPose: 'exit'
  };

  static getDerivedStateFromProps = (
    props: Props,
    { isLeaving, removeFromTree, children }: State
  ) => {
    const incomingChildren = makeChildList(props.children);

    return {
      incomingChildren,
      children: handleIncomingChildren({
        incomingChildren,
        displayedChildren: children,
        isLeaving,
        removeFromTree,
        groupProps: props
      })
    };
  };

  state: State = {
    incomingChildren: [],
    isLeaving: new Set(),
    removeFromTree: key => () => {
      const { isLeaving } = this.state;
      isLeaving.delete(key);
      this.removeFromChildren(key);
    }
  };

  removeFromChildren(key: string) {
    const { children } = this.state;

    this.setState({
      children: removeFromChildren(children, key)
    });
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return this.state !== nextState;
  }

  render() {
    return <Fragment>{this.state.children}</Fragment>;
  }
}

export default Transition;
