import * as React from 'react';
import { Fragment } from 'react';
import { warning } from 'hey-listen';
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
    const {
      children: groupChildren,
      preEnterPose,
      enterPose,
      exitPose,
      flipMove,
      animateOnMount,
      ...propsForChild,
    } = props;

    const incomingChildren = makeChildList(groupChildren);

    if (process.env.NODE_ENV !== 'production') {
      warning(!propsForChild.onPoseComplete, '<Transition/> (or <PoseGroup/>) doesn\'t accept onPoseComplete prop.')
    }

    const currentChildren = handleIncomingChildren({
      incomingChildren,
      children,
      isLeaving,
      removeFromTree,
      groupProps: props
    })

    return {
      children: currentChildren,
      displayedChildren: currentChildren.map(child =>
        // avoid extra copying in cloneElement
        React.createElement(child.type, {
          ...propsForChild,
          ...child.props,
        })
      ),
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
    const { children, displayedChildren } = this.state;

    this.setState({
      children: removeFromChildren(children, key)
      displayedChildren: removeFromChildren(displayedChildren, key)
    });
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return this.state !== nextState;
  }

  render() {
    return <Fragment>{this.state.displayedChildren}</Fragment>;
  }
}

export default Transition;
