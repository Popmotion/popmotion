import * as React from 'react';

export type Props = {
  children: React.ReactElement<any> | Array<React.ReactElement<any>>;
  flipMove?: boolean;
  preEnterPose?: string;
  enterPose?: string;
  exitPose?: string;
  animateOnMount?: boolean;
};

export type State = {
  children?: Array<React.ReactElement<any>>;
  incomingChildren?: Array<React.ReactElement<any>>;
  isLeaving: Set<string>;
  removeFromTree: (key: string) => void;
};

export interface MergeChildrenProps {
  incomingChildren: Array<React.ReactElement<any>>;
  displayedChildren: Array<React.ReactElement<any>>;
  isLeaving: Set<string>;
  removeFromTree: (key: string) => void;
  groupProps: Props;
}
