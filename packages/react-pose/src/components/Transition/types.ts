import * as React from 'react';

export type Props = {
  children: React.ReactElement<any> | Array<React.ReactElement<any>>;
  flipMove?: boolean;
  preEnterPose?: string;
  enterPose?: string;
  exitPose?: string;
  animateOnMount?: boolean;
  enterAfterExit?: boolean;
  onRest?: () => void;
  [key: string]: any;
};

export type State = {
  displayedChildren: Array<React.ReactElement<any>>;
  finishedLeaving: { [key: string]: boolean };
  hasInitialized: boolean;
  indexedChildren: { [key: string]: ReactElement<any> };
  scheduleChildRemoval: (key: string) => void;
};
