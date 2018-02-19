import React, { PureComponent, createContext } from 'react';

export const MotionGroupContext = createContext();

export default class MotionGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.groupApi = {

    };
  }

  render() {
    const { children } = this.props;
    return (
      <MotionGroupContext.Provider value={this.groupApi}>
        {children}
      </MotionGroupContext.Provider>
    );
  }
}
