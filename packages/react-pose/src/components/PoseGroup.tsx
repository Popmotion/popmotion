import * as React from 'react';
import { ReactElement } from 'react';
import {
  handleIncomingChildren,
  makeChildList,
  removeFromChildren
} from '../utils/children';

export type Props = {
  children: React.ReactElement<any> | Array<React.ReactElement<any>>;
  flipMove?: boolean;
  preEnterPose?: string;
  enterPose?: string;
  exitPose?: string;
  animateOnMount?: boolean;
  singleChildOnly?: boolean;
};

export type State = {
  children?: Array<ReactElement<any>>;
  incomingChildren?: Array<ReactElement<any>>;
  isLeaving: Set<string>;
  removeFromTree: (key: string) => void;
};

class PoseGroup extends React.Component<Props, State> {
  static defaultProps = {
    flipMove: true,
    preEnterPose: 'exit',
    enterPose: 'enter',
    exitPose: 'exit',
    singleChildOnly: false
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
        enterPose: props.enterPose,
        exitPose: props.exitPose,
        flipMove: props.flipMove,
        animateOnMount: props.animateOnMount,
        preEnterPose: props.preEnterPose
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
    const { children } = this.state;

    return <>{children}</>;
  }
}

export { PoseGroup };
