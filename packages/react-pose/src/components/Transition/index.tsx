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
    { isLeaving, removeFromTree, displayedChildren }: State
  ) => {
    const incomingChildren = makeChildList(props.children);

    const {
      children,
      preEnterPose,
      enterPose,
      exitPose,
      flipMove,
      animateOnMount,
      ...propsForChild,
    } = props;

    if (process.env.NODE_ENV !== 'production') {
      warning(!propsForChild.onPoseComplete, '<Transition/> (or <PoseGroup/>) doesn\'t accept onPoseComplete prop.')
    }

    const displayedChildren = handleIncomingChildren({
      incomingChildren,
      displayedChildren,
      isLeaving,
      removeFromTree,
      groupProps: props
    })

    return {
      displayedChildren: displayedChildren,
      displayedChildrenWithGroupProps: displayedChildren.map(child =>
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
    const { displayedChildren, displayedChildrenWithGroupProps } = this.state;

    this.setState({
      displayedChildren: removeFromChildren(displayedChildren, key)
      displayedChildrenWithGroupProps: removeFromChildren(displayedChildrenWithGroupProps, key)
    });
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return this.state !== nextState;
  }

  render() {
    return <Fragment>{this.state.displayedChildrenWithGroupProps}</Fragment>;
  }
}

export default Transition;
