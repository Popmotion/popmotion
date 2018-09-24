import * as React from 'react';
import { Props } from './types';
import Transition from './';

// TODO: Deprecate, add notice about Transition and flipMove: true opt-in
export default class PoseGroup extends React.Component<Props> {
  static defaultProps = {
    flipMove: true
  };

  render() {
    return <Transition {...this.props} />;
  }
}
