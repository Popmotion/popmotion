import * as React from 'react';

type TransitionChild<T> = React.ReactElement<T> | false | void;
type TransitionChildren<T> = TransitionChild<T> | Array<TransitionChild<T>>;

export type Props = {
  children: TransitionChildren<any>;
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
  indexedChildren: { [key: string]: React.ReactElement<any> };
  scheduleChildRemoval: (key: string) => void;
};
