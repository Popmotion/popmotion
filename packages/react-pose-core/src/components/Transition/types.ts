import * as React from 'react';

export type Props = {
  children?: React.ReactElement<any> | Array<React.ReactElement<any>>;
  preEnterPose?: string;
  enterPose?: string;
  exitPose?: string;
  animateOnMount?: boolean;
  enterAfterExit?: boolean;
  popFromLayoutOnExit?: boolean;
  onRest?: () => void;
  [key: string]: any;
};

export type State = {
  children: Array<React.ReactElement<any>>;
  leaving: { [key: string]: boolean };
  hasMounted: boolean;
  scheduleChildRemoval: (key: string) => void;
};
